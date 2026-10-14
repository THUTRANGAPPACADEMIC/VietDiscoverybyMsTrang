-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG - TEACHER & SUPER ADMIN SECURITY AUTHORIZATION
-- Target Environment: Supabase PostgreSQL with Supabase Authentication & RLS
-- Teacher & Super Admin: Cô Trần Thị Thu Trang
-- Classes Managed: 2.2, 4.1, 4.6, 5.2, 5.6
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. UPDATE PROFILES SCHEMA TO SUPPORT 'super_admin' ROLE
-- ------------------------------------------------------------------------------
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('teacher', 'admin', 'super_admin'));

-- Ensure avatar default is friendly
alter table public.profiles alter column avatar set default 'fa-chalkboard-user';

-- ------------------------------------------------------------------------------
-- 2. SECURE SERVER-SIDE ROLE EVALUATION HELPERS (SECURITY DEFINER)
-- ------------------------------------------------------------------------------
-- Evaluates whether the currently authenticated user is a Super Admin
create or replace function public.is_super_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'super_admin'
  );
$$;

-- Evaluates whether the currently authenticated user is authorized staff (Teacher, Admin, or Super Admin)
create or replace function public.is_staff()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('teacher', 'admin', 'super_admin')
  );
$$;

-- Grant execution permissions
grant execute on function public.is_super_admin() to authenticated, anon;
grant execute on function public.is_staff() to authenticated, anon;

-- ------------------------------------------------------------------------------
-- 3. LINK EXISTING TEACHER AUTHENTICATION ACCOUNT TO 'super_admin' ROLE
-- ------------------------------------------------------------------------------
-- Uses the existing confirmed Supabase Auth account for Cô Trần Thị Thu Trang
do $$
declare
  v_teacher_uid uuid;
begin
  -- 1. Locate existing teacher user from auth.users (case-insensitive email matching)
  select id into v_teacher_uid
  from auth.users
  where lower(email) in (
    'thutrang@vietdiscovery.edu.vn',
    'trangtran@vietdiscovery.edu.vn',
    'admin@vietdiscovery.edu.vn'
  )
  or lower(raw_user_meta_data->>'full_name') like '%thu trang%'
  or lower(raw_user_meta_data->>'full_name') like '%tran thi thu trang%'
  order by created_at asc
  limit 1;

  -- 2. If found, link user ID to super_admin in public.profiles
  if v_teacher_uid is not null then
    insert into public.profiles (id, full_name, role, avatar)
    values (v_teacher_uid, 'Cô Trần Thị Thu Trang', 'super_admin', 'fa-crown')
    on conflict (id) do update
    set role = 'super_admin',
        full_name = 'Cô Trần Thị Thu Trang',
        avatar = 'fa-crown';

    -- Also link her teacher_id across all 5 classes
    update public.classes
    set teacher_id = v_teacher_uid,
        teacher_name = 'Cô Trần Thị Thu Trang'
    where code in ('2.2', '4.1', '4.6', '5.2', '5.6');

    raise notice 'SUCCESS: Linked teacher auth UID % to super_admin role and assigned to all 5 classes.', v_teacher_uid;
  else
    raise notice 'INFO: Could not automatically locate teacher account by email. Please replace <TEACHER_AUTH_UID> in manual query with your auth.users.id.';
  end if;
end $$;

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES FOR CLASSES & STUDENTS
-- ------------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.classes enable row level security;
alter table public.students enable row level security;
alter table public.student_progress enable row level security;
alter table public.student_badges enable row level security;

-- PROFILES POLICIES
drop policy if exists "Profiles read own profile" on public.profiles;
create policy "Profiles read own profile" on public.profiles
  for select using (auth.uid() = id or public.is_super_admin());

drop policy if exists "Super Admin manage profiles" on public.profiles;
create policy "Super Admin manage profiles" on public.profiles
  for all using (public.is_super_admin());

-- CLASSES POLICIES:
-- 1. Public can read class list (id, name, code, grade_level) to populate login dropdowns
drop policy if exists "Public can view classes for login" on public.classes;
create policy "Public can view classes for login" on public.classes
  for select using (true);

-- 2. Only Super Admin and Teachers can insert, update, or delete classes
drop policy if exists "Staff can manage classes" on public.classes;
create policy "Staff can manage classes" on public.classes
  for all using (public.is_staff());

-- STUDENTS TABLE POLICIES:
-- ZERO ROSTER LEAKAGE: Anonymous students CANNOT select from public.students directly!
-- Students authenticate solely via the security-definer RPC `verify_student_login`
drop policy if exists "Staff can manage students" on public.students;
create policy "Staff can manage students" on public.students
  for all using (public.is_staff());

-- STUDENT PROGRESS POLICIES:
drop policy if exists "Staff view all student progress" on public.student_progress;
create policy "Staff view all student progress" on public.student_progress
  for select using (public.is_staff());

drop policy if exists "Anyone can upsert progress" on public.student_progress;
create policy "Anyone can upsert progress" on public.student_progress
  for all using (true) with check (true);

-- ------------------------------------------------------------------------------
-- 5. VERIFY ALL FIVE TEACHER-MANAGED CLASSES (2.2, 4.1, 4.6, 5.2, 5.6)
-- ------------------------------------------------------------------------------
insert into public.classes (id, name, code, grade_level, grade_band, teacher_name, school_year)
values 
  ('22222222-2222-2222-2222-222222222222', 'Lớp 2.2 - Little Explorers', '2.2', 'Grade 2', 'grade_1_2', 'Cô Trần Thị Thu Trang', '2026-2027'),
  ('41111111-4111-4111-4111-411111114111', 'Lớp 4.1 - Heritage Navigators', '4.1', 'Grade 4', 'grade_4_5', 'Cô Trần Thị Thu Trang', '2026-2027'),
  ('46666666-4666-4666-4666-466666664666', 'Lớp 4.6 - Global Scholars', '4.6', 'Grade 4', 'grade_4_5', 'Cô Trần Thị Thu Trang', '2026-2027'),
  ('52222222-5222-5222-5222-522222225222', 'Lớp 5.2 - Future Pioneers', '5.2', 'Grade 5', 'grade_4_5', 'Cô Trần Thị Thu Trang', '2026-2027'),
  ('56666666-5666-5666-5666-566666665666', 'Lớp 5.6 - Young Leaders', '5.6', 'Grade 5', 'grade_4_5', 'Cô Trần Thị Thu Trang', '2026-2027')
on conflict (code) do update 
set name = excluded.name, 
    grade_level = excluded.grade_level,
    grade_band = excluded.grade_band,
    teacher_name = excluded.teacher_name;
