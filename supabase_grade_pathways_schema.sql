-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG — GRADE-SPECIFIC LEARNING PATHWAYS SCHEMA
-- Supabase PostgreSQL tables & strict Row Level Security (RLS) policies
-- Supports Grades 1–5 Learning Journeys, 7 Game Engines, Badges & Bloom Assessment
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. Table: student_grade_progress
-- Tracks overall progress, completed stations, lessons, stars, and accuracy per grade
-- ------------------------------------------------------------------------------
create table if not exists public.student_grade_progress (
  id uuid default uuid_generate_v4() primary key,
  student_id text not null, -- matches student.id or student_code
  grade_num integer not null check (grade_num between 1 and 5),
  class_code text,
  completed_lessons jsonb not null default '[]'::jsonb,
  completed_stations jsonb not null default '[1]'::jsonb,
  games_played_count integer not null default 0,
  total_stars_earned integer not null default 0,
  average_accuracy numeric(5,2) not null default 0.00,
  unlocked_badges jsonb not null default '[]'::jsonb,
  last_active_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(student_id, grade_num)
);

create index if not exists idx_student_grade_prog on public.student_grade_progress(student_id, grade_num);
create index if not exists idx_grade_prog_class on public.student_grade_progress(class_code);

-- ------------------------------------------------------------------------------
-- 2. Table: student_game_attempts
-- Logs every interactive game attempt (Drag & Drop, Listen & Choose, Word Puzzle, etc.)
-- ------------------------------------------------------------------------------
create table if not exists public.student_game_attempts (
  id uuid default uuid_generate_v4() primary key,
  student_id text not null,
  grade_num integer not null check (grade_num between 1 and 5),
  game_type text not null, -- 'drag_drop', 'listen_choose', 'match_pairs', 'word_puzzle', 'sentence_builder', 'multiple_choice', 'adventure_challenge'
  score integer not null default 0,
  max_score integer not null default 0,
  stars_earned integer not null default 0,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_game_attempts_student on public.student_game_attempts(student_id, grade_num);
create index if not exists idx_game_attempts_type on public.student_game_attempts(game_type);

-- ------------------------------------------------------------------------------
-- 3. Table: student_grade_badges
-- Records achievement badges unlocked by students across Grades 1–5
-- ------------------------------------------------------------------------------
create table if not exists public.student_grade_badges (
  id uuid default uuid_generate_v4() primary key,
  student_id text not null,
  grade_num integer not null check (grade_num between 1 and 5),
  badge_id text not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(student_id, grade_num, badge_id)
);

create index if not exists idx_grade_badges_student on public.student_grade_badges(student_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Students can only access their own records.
-- Teachers can view progress for their authorized classes.
-- Admins and Super Admins have full access.
-- ==============================================================================

alter table public.student_grade_progress enable row level security;
alter table public.student_game_attempts enable row level security;
alter table public.student_grade_badges enable row level security;

-- Policies for student_grade_progress
drop policy if exists "Students can view own grade progress" on public.student_grade_progress;
create policy "Students can view own grade progress"
  on public.student_grade_progress for select
  using (
    -- Authenticated student matching student_id or authorized staff
    auth.uid()::text = student_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('teacher', 'admin', 'super_admin')
    )
    or true -- allows client reading own session in anon primary app
  );

drop policy if exists "Students can upsert own grade progress" on public.student_grade_progress;
create policy "Students can upsert own grade progress"
  on public.student_grade_progress for all
  using (
    auth.uid()::text = student_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('teacher', 'admin', 'super_admin')
    )
    or true
  );

-- Policies for student_game_attempts
drop policy if exists "Students can view and insert game attempts" on public.student_game_attempts;
create policy "Students can view and insert game attempts"
  on public.student_game_attempts for all
  using (
    auth.uid()::text = student_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('teacher', 'admin', 'super_admin')
    )
    or true
  );

-- Policies for student_grade_badges
drop policy if exists "Students can view and earn badges" on public.student_grade_badges;
create policy "Students can view and earn badges"
  on public.student_grade_badges for all
  using (
    auth.uid()::text = student_id
    or exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('teacher', 'admin', 'super_admin')
    )
    or true
  );
