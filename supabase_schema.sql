-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG - SECURE SUPABASE DATABASE SCHEMA
-- Multi-Class Primary School Architecture (Classes 2.2, 4.1, 4.6, 5.2, 5.6)
-- Server-side Hashed Access Code Verification & Zero Roster Leakage RLS
-- ==============================================================================

-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ------------------------------------------------------------------------------
-- 1. Profiles Table (Teacher / Staff Authentication via Supabase Auth)
-- ------------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  role text not null check (role in ('teacher', 'admin')),
  avatar text default 'fa-chalkboard-teacher',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ------------------------------------------------------------------------------
-- 2. Classes Table (The 5 Teacher-Managed Primary Classes)
-- ------------------------------------------------------------------------------
create table if not exists public.classes (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  code text unique not null, -- '2.2', '4.1', '4.6', '5.2', '5.6'
  grade_level text not null check (grade_level in ('Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5')),
  grade_band text not null check (grade_band in ('grade_1_2', 'grade_3', 'grade_4_5')),
  teacher_name text default 'Ms. Thu Trang',
  teacher_id uuid references public.profiles(id) on delete set null,
  school_year text default '2026-2027',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ------------------------------------------------------------------------------
-- 3. Students Table (Pre-Approved Roster with Hashed Access Codes)
-- ------------------------------------------------------------------------------
create table if not exists public.students (
  id uuid default uuid_generate_v4() primary key,
  student_code text unique not null, -- e.g. 'STU-2201', 'STU-4101'
  full_name text not null,
  normalized_name text not null, -- Lowercase unaccented/trimmed for reliable matching
  class_id uuid references public.classes(id) on delete cascade not null,
  class_code text not null, -- '2.2', '4.1', '4.6', '5.2', '5.6'
  access_code_hash text not null, -- SHA-256(access_code || '_vietdiscovery_salt_2026')
  stars integer default 0,
  avatar text default 'fa-user-graduate',
  is_locked boolean default false,
  failed_attempts integer default 0,
  last_login_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_students_lookup on public.students(class_code, normalized_name);

-- ------------------------------------------------------------------------------
-- 4. Student Progress Table (Destination & Bloom Quiz Persistence)
-- ------------------------------------------------------------------------------
create table if not exists public.student_progress (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references public.students(id) on delete cascade not null,
  destination_id text not null, -- 'halong', 'hanoi', 'hue', 'danang', 'hcmc', 'mekong'
  completed_steps jsonb default '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb,
  quiz_score integer default 0,
  total_questions integer default 4,
  attempts integer default 0,
  stars_earned integer default 0,
  time_spent_seconds integer default 0,
  last_attempt_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(student_id, destination_id)
);

create index if not exists idx_progress_student on public.student_progress(student_id);

-- ------------------------------------------------------------------------------
-- 5. Student Badges Table (Passport Cultural Stamps)
-- ------------------------------------------------------------------------------
create table if not exists public.student_badges (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references public.students(id) on delete cascade not null,
  badge_id text not null,
  destination_id text not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(student_id, badge_id)
);

-- ------------------------------------------------------------------------------
-- 6. Learning Materials & Assignments Tables
-- ------------------------------------------------------------------------------
create table if not exists public.learning_materials (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  destination_id text not null,
  grade_band text not null default 'grade_3',
  category text not null check (category in ('Reading', 'Vocabulary', 'Speaking', 'Worksheet', 'Video')),
  description text,
  file_url text,
  teacher_id uuid references public.profiles(id) on delete set null,
  is_published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.assignments (
  id uuid default uuid_generate_v4() primary key,
  class_id uuid references public.classes(id) on delete cascade not null,
  destination_id text not null,
  title text not null,
  instructions text,
  due_date timestamp with time zone,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ------------------------------------------------------------------------------
-- 7. Secure Server-Side Student Verification RPC (Zero Roster Leakage)
-- ------------------------------------------------------------------------------
create or replace function public.verify_student_login(
  p_full_name text,
  p_class_code text,
  p_access_code text
)
returns jsonb
language plpgsql
security definer -- Runs with elevated rights to safely check hash without exposing roster
set search_path = public
as $$
declare
  v_student record;
  v_calculated_hash text;
  v_clean_name text;
  v_progress_json jsonb;
  v_badges_json jsonb;
begin
  -- 1. Sanitize input
  v_clean_name := lower(trim(p_full_name));
  
  -- 2. Compute SHA-256 hash using the project salt
  v_calculated_hash := encode(digest(trim(p_access_code) || '_vietdiscovery_salt_2026', 'sha256'), 'hex');

  -- 3. Find matching student in class
  select * into v_student
  from public.students
  where class_code = trim(p_class_code)
    and (lower(trim(full_name)) = v_clean_name or normalized_name = v_clean_name)
  limit 1;

  -- If not found
  if v_student is null then
    return jsonb_build_object(
      'success', false,
      'errorMessage', 'Không tìm thấy học sinh với họ tên và lớp này. Bé kiểm tra lại nhé!',
      'isLocked', false
    );
  end if;

  -- 4. Check if account is locked
  if v_student.is_locked = true then
    return jsonb_build_object(
      'success', false,
      'errorMessage', 'Tài khoản đã bị tạm khóa do nhập sai mã quá 5 lần. Hãy báo cô Trang mở khóa nhé!',
      'isLocked', true
    );
  end if;

  -- 5. Compare access code hash
  if v_student.access_code_hash != v_calculated_hash then
    -- Record failed attempt
    update public.students
    set failed_attempts = failed_attempts + 1,
        is_locked = case when failed_attempts + 1 >= 5 then true else false end
    where id = v_student.id;

    if v_student.failed_attempts + 1 >= 5 then
      return jsonb_build_object(
        'success', false,
        'errorMessage', 'Con đã nhập sai mã 5 lần. Tài khoản tạm khóa để bảo vệ hồ sơ!',
        'isLocked', true,
        'remainingAttempts', 0
      );
    else
      return jsonb_build_object(
        'success', false,
        'errorMessage', 'Mã số truy cập chưa đúng. Con còn ' || (5 - (v_student.failed_attempts + 1)) || ' lần thử!',
        'isLocked', false,
        'remainingAttempts', 5 - (v_student.failed_attempts + 1)
      );
    end if;
  end if;

  -- 6. Successful login: reset failed attempts & record last_login
  update public.students
  set failed_attempts = 0,
      is_locked = false,
      last_login_at = now()
  where id = v_student.id;

  -- 7. Fetch existing progress for student
  select coalesce(
    jsonb_object_agg(
      p.destination_id,
      jsonb_build_object(
        'destinationId', p.destination_id,
        'completedSteps', p.completed_steps,
        'quizScore', p.quiz_score,
        'totalQuestions', p.total_questions,
        'attempts', p.attempts,
        'starsEarned', p.stars_earned,
        'lastAttemptDate', to_char(p.last_attempt_at, 'YYYY-MM-DD HH24:MI')
      )
    ),
    '{}'::jsonb
  ) into v_progress_json
  from public.student_progress p
  where p.student_id = v_student.id;

  -- 8. Fetch badges
  select coalesce(
    jsonb_agg(
      jsonb_build_object('badgeId', b.badge_id, 'destinationId', b.destination_id)
    ),
    '[]'::jsonb
  ) into v_badges_json
  from public.student_badges b
  where b.student_id = v_student.id;

  -- 9. Return verified profile & hydrated progress
  return jsonb_build_object(
    'success', true,
    'user', jsonb_build_object(
      'id', v_student.id,
      'studentCode', v_student.student_code,
      'fullName', v_student.full_name,
      'role', 'student',
      'classId', v_student.class_id,
      'className', 'Class ' || v_student.class_code,
      'classCode', v_student.class_code,
      'gradeLevel', (select grade_level from public.classes where id = v_student.class_id),
      'gradeBand', (select grade_band from public.classes where id = v_student.class_id),
      'stars', v_student.stars,
      'avatar', v_student.avatar
    ),
    'progress', v_progress_json,
    'badges', v_badges_json
  );
end;
$$;

-- Allow public anonymous client to call verification function safely
grant execute on function public.verify_student_login(text, text, text) to anon, authenticated;

-- ------------------------------------------------------------------------------
-- 8. Row Level Security (RLS) Configuration
-- ------------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.classes enable row level security;
alter table public.students enable row level security;
alter table public.student_progress enable row level security;
alter table public.student_badges enable row level security;
alter table public.learning_materials enable row level security;
alter table public.assignments enable row level security;

-- Classes: Public can read class list for login dropdown (name, code, grade_level)
create policy "Public can view classes for login" on public.classes
  for select using (true);

create policy "Teachers can manage classes" on public.classes
  for all using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role in ('teacher', 'admin')
    )
  );

-- Students Table: PROTECTED! Anonymous CANNOT select from students directly
create policy "Teachers can manage students" on public.students
  for all using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role in ('teacher', 'admin')
    )
  );

-- Student Progress:
create policy "Teachers view all student progress" on public.student_progress
  for select using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role in ('teacher', 'admin')
    )
  );

create policy "Anyone can insert or update student progress" on public.student_progress
  for all using (true) with check (true);

-- Student Badges:
create policy "Anyone can read and insert badges" on public.student_badges
  for all using (true) with check (true);

-- Learning Materials: Publicly readable by students, editable by teachers
create policy "Anyone can read published materials" on public.learning_materials
  for select using (is_published = true);

create policy "Teachers can edit materials" on public.learning_materials
  for all using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role in ('teacher', 'admin')
    )
  );

-- ------------------------------------------------------------------------------
-- 9. Seed Initial Data: 5 Teacher Classes (2.2, 4.1, 4.6, 5.2, 5.6)
-- ------------------------------------------------------------------------------
insert into public.classes (id, name, code, grade_level, grade_band, teacher_name, school_year)
values 
  ('22222222-2222-2222-2222-222222222222', 'Lớp 2.2 - Little Explorers', '2.2', 'Grade 2', 'grade_1_2', 'Ms. Thu Trang', '2026-2027'),
  ('41111111-4111-4111-4111-411111114111', 'Lớp 4.1 - Heritage Navigators', '4.1', 'Grade 4', 'grade_4_5', 'Ms. Thu Trang', '2026-2027'),
  ('46666666-4666-4666-4666-466666664666', 'Lớp 4.6 - Global Scholars', '4.6', 'Grade 4', 'grade_4_5', 'Ms. Thu Trang', '2026-2027'),
  ('52222222-5222-5222-5222-522222225222', 'Lớp 5.2 - Future Pioneers', '5.2', 'Grade 5', 'grade_4_5', 'Ms. Thu Trang', '2026-2027'),
  ('56666666-5666-5666-5666-566666665666', 'Lớp 5.6 - Young Leaders', '5.6', 'Grade 5', 'grade_4_5', 'Ms. Thu Trang', '2026-2027')
on conflict (code) do update 
set name = excluded.name, 
    grade_level = excluded.grade_level,
    grade_band = excluded.grade_band;
