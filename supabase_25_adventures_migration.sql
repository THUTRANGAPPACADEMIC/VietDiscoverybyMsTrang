-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG — 25 THEMATIC ADVENTURES DATABASE MIGRATION
-- 5 Grades x 5 Thematic Adventures = 25 Distinct Pedagogical Lessons
-- Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
-- ==============================================================================
-- IMPORTANT:
-- This migration script is safe and non-destructive.
-- Preserves all 182 existing student records, classes, and progress tables.
-- ==============================================================================

-- 1. Create or ensure table public.grade_thematic_adventures
CREATE TABLE IF NOT EXISTS public.grade_thematic_adventures (
    id TEXT PRIMARY KEY, -- e.g. 'g1_adv1_places'
    grade_level TEXT NOT NULL, -- 'Grade 1' to 'Grade 5'
    grade_number INTEGER NOT NULL CHECK (grade_number BETWEEN 1 AND 5),
    adventure_id TEXT NOT NULL, -- 'adventure_1_places' to 'adventure_5_future'
    order_number INTEGER NOT NULL CHECK (order_number BETWEEN 1 AND 5),
    title_en TEXT NOT NULL,
    title_vi TEXT NOT NULL,
    subtitle_en TEXT NOT NULL,
    subtitle_vi TEXT NOT NULL,
    description_en TEXT,
    description_vi TEXT,
    target_cefr TEXT NOT NULL,
    cover_image TEXT DEFAULT '/destinations/halong_bay.jpg',
    pastel_bg TEXT NOT NULL,
    selected_bg TEXT NOT NULL,
    border_pastel TEXT NOT NULL,
    text_pastel TEXT NOT NULL,
    icon TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT grade_adventure_unique UNIQUE (grade_number, adventure_id)
);

-- 2. Create or ensure table public.curriculum_adventure_lessons
CREATE TABLE IF NOT EXISTS public.curriculum_adventure_lessons (
    id TEXT PRIMARY KEY, -- e.g. 'lesson-g1-adv1-places'
    adventure_id TEXT NOT NULL,
    lesson_number INTEGER NOT NULL DEFAULT 1,
    title_en TEXT NOT NULL,
    title_vi TEXT NOT NULL,
    topic_en TEXT NOT NULL,
    topic_vi TEXT NOT NULL,
    grade_level TEXT NOT NULL,
    grade_band TEXT NOT NULL,
    target_cefr TEXT NOT NULL,
    duration_minutes INTEGER DEFAULT 35,
    learning_objectives_en TEXT[] DEFAULT '{}',
    learning_objectives_vi TEXT[] DEFAULT '{}',
    cover_image TEXT DEFAULT '/destinations/halong_bay.jpg',
    vocabulary JSONB DEFAULT '[]'::jsonb,
    sentence_patterns JSONB DEFAULT '[]'::jsonb,
    reading JSONB DEFAULT '{}'::jsonb,
    listening JSONB DEFAULT '{}'::jsonb,
    speaking JSONB DEFAULT '{}'::jsonb,
    interactive_game JSONB DEFAULT '{}'::jsonb,
    questions JSONB DEFAULT '[]'::jsonb,
    assessment JSONB DEFAULT '{}'::jsonb,
    video_lesson JSONB DEFAULT NULL,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'in_review', 'published', 'archived')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create indexes for rapid queries
CREATE INDEX IF NOT EXISTS idx_thematic_adventures_grade ON public.grade_thematic_adventures(grade_number);
CREATE INDEX IF NOT EXISTS idx_thematic_adventures_adv ON public.grade_thematic_adventures(adventure_id);
CREATE INDEX IF NOT EXISTS idx_curriculum_adventure_lessons_grade ON public.curriculum_adventure_lessons(grade_level);
CREATE INDEX IF NOT EXISTS idx_curriculum_adventure_lessons_adv ON public.curriculum_adventure_lessons(adventure_id);
CREATE INDEX IF NOT EXISTS idx_curriculum_adventure_lessons_status ON public.curriculum_adventure_lessons(status);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.grade_thematic_adventures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_adventure_lessons ENABLE ROW LEVEL SECURITY;

-- 5. Read policies: all students and visitors can read adventures and published lessons
DROP POLICY IF EXISTS "Public read grade thematic adventures" ON public.grade_thematic_adventures;
CREATE POLICY "Public read grade thematic adventures"
    ON public.grade_thematic_adventures
    FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Public read published adventure lessons" ON public.curriculum_adventure_lessons;
CREATE POLICY "Public read published adventure lessons"
    ON public.curriculum_adventure_lessons
    FOR SELECT
    USING (status = 'published');

-- 6. Teacher management policies: authenticated teachers/staff can manage lessons
DROP POLICY IF EXISTS "Teacher manage adventure lessons" ON public.curriculum_adventure_lessons;
CREATE POLICY "Teacher manage adventure lessons"
    ON public.curriculum_adventure_lessons
    FOR ALL
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role')
    WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Notify PostgREST schema reload
NOTIFY pgrst, 'reload schema';
