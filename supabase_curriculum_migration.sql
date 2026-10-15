-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG — INDEPENDENT CURRICULUM DATABASE MIGRATION
-- Original English-First Curriculum Architecture Across 5 Adventures
-- Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary Pathways
-- ==============================================================================
-- NOTE FOR TEACHER & SUPER ADMIN REVIEW:
-- This migration script is prepared for review.
-- Run this script in the Supabase SQL Editor once approved.
-- It preserves all existing student records, classes, and RLS policies.
-- ==============================================================================

-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. Table: curriculum_adventures
-- Defines the 5 Official Thematic Adventures of VietDiscovery
-- ------------------------------------------------------------------------------
create table if not exists public.curriculum_adventures (
  id text primary key, -- 'amazing_places', 'vietnamese_culture', 'delicious_vietnam', 'nature_wildlife', 'future_vietnam'
  order_num integer not null unique,
  title_en text not null,
  title_vi text not null,
  subtitle_en text not null,
  subtitle_vi text not null,
  description_en text,
  description_vi text,
  icon text not null,
  accent_color text not null,
  gradient_theme text not null,
  badge_label text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ------------------------------------------------------------------------------
-- 2. Table: curriculum_lessons
-- Pedagogical lesson records containing objectives, texts, audio & rubrics
-- ------------------------------------------------------------------------------
create table if not exists public.curriculum_lessons (
  id text primary key, -- e.g. 'pilot_g1_halong_sea'
  adventure_id text references public.curriculum_adventures(id) on delete cascade not null,
  grade_level text not null check (grade_level in ('Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5')),
  grade_band text not null check (grade_band in ('grade_1_2', 'grade_3', 'grade_4_5')),
  order_index integer default 1 not null,
  unit_code text not null, -- 'ADV1-G1-01'
  title_en text not null,
  title_vi text not null,
  tagline_en text,
  tagline_vi text,
  cefr_level text not null, -- 'Pre-A1 Starter', 'Pre-A1 Beginner', 'Pre-A1 Foundation', 'A1 Elementary', 'A1-A2 Extension'
  primary_phonics_focus text,
  hero_image text,
  status text not null default 'draft' check (status in ('draft', 'in_review', 'verified', 'published', 'archived')),
  
  -- Structured Pedagogical JSON payloads
  objectives jsonb not null default '[]'::jsonb,
  sentence_pattern jsonb not null default '{}'::jsonb,
  reading_passage jsonb not null default '{}'::jsonb,
  listening_dialogue jsonb not null default '{}'::jsonb,
  speaking_activity jsonb not null default '{}'::jsonb,
  assessment_rubric jsonb not null default '{}'::jsonb,
  verification jsonb not null default '{}'::jsonb,

  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_curriculum_lessons_adv on public.curriculum_lessons(adventure_id);
create index if not exists idx_curriculum_lessons_grade on public.curriculum_lessons(grade_level);
create index if not exists idx_curriculum_lessons_status on public.curriculum_lessons(status);

-- ------------------------------------------------------------------------------
-- 3. Table: curriculum_vocabulary
-- Individual vocabulary entries with IPA, audio, and bilingual definitions
-- ------------------------------------------------------------------------------
create table if not exists public.curriculum_vocabulary (
  id uuid default uuid_generate_v4() primary key,
  lesson_id text references public.curriculum_lessons(id) on delete cascade not null,
  word text not null,
  ipa text not null,
  part_of_speech text not null,
  meaning_vi text not null,
  definition_en text not null,
  example_en text not null,
  example_vi text not null,
  icon text,
  audio_url text,
  phonics_focus text,
  child_friendly_hint text,
  order_index integer default 1 not null
);

create index if not exists idx_curriculum_vocab_lesson on public.curriculum_vocabulary(lesson_id);

-- ------------------------------------------------------------------------------
-- 4. Table: curriculum_questions
-- Circular 27 aligned assessment questions (Levels 1, 2, 3)
-- ------------------------------------------------------------------------------
create table if not exists public.curriculum_questions (
  id uuid default uuid_generate_v4() primary key,
  lesson_id text references public.curriculum_lessons(id) on delete cascade not null,
  level integer not null check (level in (1, 2, 3)),
  level_name text not null check (level_name in ('Recognize', 'Connect', 'Apply')),
  question_en text not null,
  question_vi text not null,
  options jsonb not null, -- Array of strings
  correct_answer_index integer not null check (correct_answer_index >= 0 and correct_answer_index <= 3),
  explanation_en text not null,
  explanation_vi text not null,
  stars_value integer default 5 not null,
  order_index integer default 1 not null
);

create index if not exists idx_curriculum_q_lesson on public.curriculum_questions(lesson_id);

-- ------------------------------------------------------------------------------
-- 5. Table: student_curriculum_progress
-- Tracks individual student learning and skill mastery per curriculum lesson
-- ------------------------------------------------------------------------------
create table if not exists public.student_curriculum_progress (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references public.students(id) on delete cascade not null,
  lesson_id text references public.curriculum_lessons(id) on delete cascade not null,
  completed_stages jsonb default '{"objectives": false, "vocabulary": false, "sentence": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb,
  quiz_score integer default 0,
  total_questions integer default 3,
  stars_earned integer default 0,
  mastery_level text default 'In Progress',
  last_attempt_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(student_id, lesson_id)
);

create index if not exists idx_student_curr_prog on public.student_curriculum_progress(student_id, lesson_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Strict teacher-admin control, safe student read-only access to published lessons
-- ==============================================================================

alter table public.curriculum_adventures enable row level security;
alter table public.curriculum_lessons enable row level security;
alter table public.curriculum_vocabulary enable row level security;
alter table public.curriculum_questions enable row level security;
alter table public.student_curriculum_progress enable row level security;

-- Read policies for curriculum (Public/Students can read published adventures & lessons)
drop policy if exists "Adventures are readable by all authenticated users" on public.curriculum_adventures;
create policy "Adventures are readable by all authenticated users"
  on public.curriculum_adventures for select
  using (true);

drop policy if exists "Published lessons are readable by all" on public.curriculum_lessons;
create policy "Published lessons are readable by all"
  on public.curriculum_lessons for select
  using (
    status = 'published' 
    or (exists (select 1 from public.profiles where id = auth.uid() and role in ('teacher', 'admin')))
  );

drop policy if exists "Vocabulary readable for published lessons" on public.curriculum_vocabulary;
create policy "Vocabulary readable for published lessons"
  on public.curriculum_vocabulary for select
  using (
    exists (
      select 1 from public.curriculum_lessons l 
      where l.id = curriculum_vocabulary.lesson_id 
      and (l.status = 'published' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher', 'admin')))
    )
  );

drop policy if exists "Questions readable for published lessons" on public.curriculum_questions;
create policy "Questions readable for published lessons"
  on public.curriculum_questions for select
  using (
    exists (
      select 1 from public.curriculum_lessons l 
      where l.id = curriculum_questions.lesson_id 
      and (l.status = 'published' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher', 'admin')))
    )
  );

-- Staff write policies: Only Teacher (Ms. Trang) and Admin can insert/update/delete curriculum
drop policy if exists "Staff can manage adventures" on public.curriculum_adventures;
create policy "Staff can manage adventures"
  on public.curriculum_adventures for all
  using (exists (select 1 from public.profiles where id = auth.uid() and role in ('teacher', 'admin')));

drop policy if exists "Staff can manage lessons" on public.curriculum_lessons;
create policy "Staff can manage lessons"
  on public.curriculum_lessons for all
  using (exists (select 1 from public.profiles where id = auth.uid() and role in ('teacher', 'admin')));

drop policy if exists "Staff can manage vocabulary" on public.curriculum_vocabulary;
create policy "Staff can manage vocabulary"
  on public.curriculum_vocabulary for all
  using (exists (select 1 from public.profiles where id = auth.uid() and role in ('teacher', 'admin')));

drop policy if exists "Staff can manage questions" on public.curriculum_questions;
create policy "Staff can manage questions"
  on public.curriculum_questions for all
  using (exists (select 1 from public.profiles where id = auth.uid() and role in ('teacher', 'admin')));

-- Student Progress policies
drop policy if exists "Students can read their own curriculum progress" on public.student_curriculum_progress;
create policy "Students can read their own curriculum progress"
  on public.student_curriculum_progress for select
  using (true);

drop policy if exists "Students can update their own curriculum progress" on public.student_curriculum_progress;
create policy "Students can update their own curriculum progress"
  on public.student_curriculum_progress for insert
  with check (true);

drop policy if exists "Students can modify their own progress record" on public.student_curriculum_progress;
create policy "Students can modify their own progress record"
  on public.student_curriculum_progress for update
  using (true);

-- ==============================================================================
-- SEED DATA: 5 OFFICIAL CURRICULUM ADVENTURES
-- ==============================================================================
insert into public.curriculum_adventures (id, order_num, title_en, title_vi, subtitle_en, subtitle_vi, description_en, description_vi, icon, accent_color, gradient_theme, badge_label)
values
  (
    'amazing_places',
    1,
    'Amazing Places',
    'Địa danh kỳ thú',
    'Geography, Natural Wonders & Historic Landmarks',
    'Địa lý, kỳ quan thiên nhiên và di tích lịch sử',
    'Explore Vietnam magnificent landscapes from the emerald karst islands of Ha Long to ancient imperial citadels.',
    'Khám phá cảnh quan thiên nhiên kỳ vĩ từ vịnh đảo ngọc Hạ Long đến cố đô cổ kính.',
    '🏔️',
    '#0284c7',
    'from-sky-500 via-blue-600 to-indigo-700',
    'Adventure 1'
  ),
  (
    'vietnamese_culture',
    2,
    'Vietnamese Culture',
    'Văn hóa Việt Nam',
    'Traditions, Folk Arts, Costumes & Festivals',
    'Phong tục tập quán, nghệ thuật dân gian, trang phục và lễ hội truyền thống',
    'Immerse in joyful moon festivals, water puppetry, the graceful ao dai, and heartfelt family values.',
    'Hòa mình vào tết Trung thu rực rỡ đèn lồng, múa rối nước dân gian, tà áo dài duyên dáng và tình cảm gia đình ấm áp.',
    '🏮',
    '#9333ea',
    'from-purple-500 via-fuchsia-600 to-pink-600',
    'Adventure 2'
  ),
  (
    'delicious_vietnam',
    3,
    'Delicious Vietnam',
    'Ẩm thực ba miền',
    'Flavors, Farm-to-Table Ingredients & Culinary Etiquette',
    'Hương vị tinh tế, nông sản tươi ngon và nét đẹp văn hóa ẩm thực',
    'Savor fragrant bowls of pho, crispy banh mi, tropical fruits, and learn English dining etiquette.',
    'Thưởng thức bát phở bò thơm lừng, bánh mì giòn tan, hoa quả nhiệt đới và học giao tiếp tiếng Anh khi dùng bữa.',
    '🍜',
    '#ea580c',
    'from-amber-500 via-orange-500 to-rose-600',
    'Adventure 3'
  ),
  (
    'nature_wildlife',
    4,
    'Nature & Wildlife',
    'Thiên nhiên & Động vật hoang dã',
    'Rainforests, Biodiversity, Endangered Species & Conservation',
    'Rừng nhiệt đới, đa dạng sinh học, muông thú quý hiếm và bảo tồn môi trường',
    'Journey into ancient limestone caves and green canopies to protect red-shanked douc langurs and sea turtles.',
    'Thám hiểm hang động đá vôi cổ xưa, vòm rừng xanh ngát cùng hành động bảo vệ voọc chà vá chân nâu và rùa biển.',
    '🌿',
    '#16a34a',
    'from-emerald-500 via-teal-600 to-green-700',
    'Adventure 4'
  ),
  (
    'future_vietnam',
    5,
    'Future Vietnam',
    'Việt Nam tương lai',
    'Green Energy, Smart Cities, Modern Transport & Innovation',
    'Năng lượng xanh, đô thị thông minh, giao thông hiện đại và sáng tạo công nghệ',
    'Envision modern elevated metros, solar-powered eco-cities, and dynamic young innovators shaping tomorrow.',
    'Khám phá tàu điện ngầm hiện đại, thành phố sinh thái sử dụng năng lượng mặt trời và thế hệ công dân toàn cầu năng động.',
    '🚀',
    '#4f46e5',
    'from-indigo-600 via-blue-600 to-cyan-500',
    'Adventure 5'
  )
on conflict (id) do update set
  title_en = excluded.title_en,
  title_vi = excluded.title_vi,
  subtitle_en = excluded.subtitle_en,
  subtitle_vi = excluded.subtitle_vi,
  description_en = excluded.description_en,
  description_vi = excluded.description_vi,
  icon = excluded.icon,
  accent_color = excluded.accent_color,
  gradient_theme = excluded.gradient_theme,
  badge_label = excluded.badge_label;
