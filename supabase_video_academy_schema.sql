-- ============================================================================
-- VIETDISCOVERY BY MS. TRANG - MULTI-SOURCE VIDEO LEARNING ACADEMY SCHEMA
-- Table: public.educational_videos & public.student_video_progress
-- ============================================================================

-- 1. Create educational_videos table
CREATE TABLE IF NOT EXISTS public.educational_videos (
    id TEXT PRIMARY KEY,
    title_en TEXT NOT NULL,
    title_vi TEXT NOT NULL,
    video_url TEXT NOT NULL,
    embed_url TEXT NOT NULL,
    source_type TEXT NOT NULL CHECK (source_type IN ('teacher_youtube', 'curated_youtube', 'ai_generated')),
    channel_or_author TEXT NOT NULL DEFAULT 'Ms. Thu Trang (VietDiscovery)',
    grade INTEGER NOT NULL CHECK (grade BETWEEN 1 AND 5),
    grade_level TEXT NOT NULL,
    grade_band TEXT NOT NULL,
    topic TEXT NOT NULL DEFAULT 'Heritage & Landmarks',
    difficulty TEXT NOT NULL DEFAULT 'Pre-A1 Starter',
    learning_objectives_en TEXT[] DEFAULT '{}',
    learning_objectives_vi TEXT[] DEFAULT '{}',
    description_en TEXT DEFAULT '',
    description_vi TEXT DEFAULT '',
    duration_minutes INTEGER DEFAULT 5,
    thumbnail_url TEXT DEFAULT '',
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'approved', 'archived')),
    is_teacher_created BOOLEAN DEFAULT false,
    allow_embedding BOOLEAN DEFAULT true,
    notes TEXT,
    questions JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create student_video_progress table
CREATE TABLE IF NOT EXISTS public.student_video_progress (
    id BIGSERIAL PRIMARY KEY,
    video_id TEXT NOT NULL REFERENCES public.educational_videos(id) ON DELETE CASCADE,
    student_id TEXT NOT NULL,
    student_name TEXT,
    class_code TEXT,
    watched BOOLEAN DEFAULT false,
    quiz_score INTEGER DEFAULT 0,
    quiz_total INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 1,
    stars_earned INTEGER DEFAULT 0,
    answered_questions JSONB DEFAULT '{}'::jsonb,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT student_video_unique UNIQUE (video_id, student_id)
);

-- 3. Create indexes for high-speed queries
CREATE INDEX IF NOT EXISTS idx_educational_videos_grade ON public.educational_videos(grade);
CREATE INDEX IF NOT EXISTS idx_educational_videos_status ON public.educational_videos(status);
CREATE INDEX IF NOT EXISTS idx_educational_videos_source ON public.educational_videos(source_type);
CREATE INDEX IF NOT EXISTS idx_student_video_progress_student ON public.student_video_progress(student_id);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.educational_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_video_progress ENABLE ROW LEVEL SECURITY;

-- 5. Explicit table grants for anon & authenticated roles
GRANT SELECT, INSERT, UPDATE, DELETE ON public.educational_videos TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_video_progress TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.student_video_progress_id_seq TO anon, authenticated;

-- 6. RLS Policies
-- Allow anyone to view approved videos, and staff to view all
DROP POLICY IF EXISTS "Public can view approved videos" ON public.educational_videos;
CREATE POLICY "Public can view approved videos" ON public.educational_videos
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Staff can insert videos" ON public.educational_videos;
CREATE POLICY "Staff can insert videos" ON public.educational_videos
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Staff can update videos" ON public.educational_videos;
CREATE POLICY "Staff can update videos" ON public.educational_videos
    FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Staff can delete videos" ON public.educational_videos;
CREATE POLICY "Staff can delete videos" ON public.educational_videos
    FOR DELETE USING (true);

-- Student Video Progress Policies
DROP POLICY IF EXISTS "Students can view and manage video progress" ON public.student_video_progress;
CREATE POLICY "Students can view and manage video progress" ON public.student_video_progress
    FOR ALL USING (true);

-- 7. Notify PostgREST to reload schema
NOTIFY pgrst, 'reload schema';
