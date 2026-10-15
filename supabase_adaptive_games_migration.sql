-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG — ADAPTIVE GAME LEARNING SYSTEM MIGRATION
-- Supabase Schema for Grade-Differentiated Games, Smart Replay & Analytics
-- ==============================================================================

-- 1. Student Game History Table (Tracks Smart Replay state, anti-repetition, & mastery)
CREATE TABLE IF NOT EXISTS public.student_game_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL,
    game_type TEXT NOT NULL,
    grade_num INTEGER NOT NULL,
    attempt_count INTEGER DEFAULT 0,
    recommended_difficulty TEXT DEFAULT 'easy',
    answered_count INTEGER DEFAULT 0,
    mastered_count INTEGER DEFAULT 0,
    last_played_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT student_game_history_key UNIQUE (student_id, game_type)
);

CREATE INDEX IF NOT EXISTS idx_student_game_history_student ON public.student_game_history(student_id);
CREATE INDEX IF NOT EXISTS idx_student_game_history_game ON public.student_game_history(game_type);

-- 2. Row Level Security (RLS) Policies
ALTER TABLE public.student_game_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public select student game history" ON public.student_game_history;
CREATE POLICY "Public select student game history" ON public.student_game_history
    FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Public insert student game history" ON public.student_game_history;
CREATE POLICY "Public insert student game history" ON public.student_game_history
    FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Public update student game history" ON public.student_game_history;
CREATE POLICY "Public update student game history" ON public.student_game_history
    FOR UPDATE TO public USING (true) WITH CHECK (true);

-- 3. Optional Cloud Question Bank Storage
CREATE TABLE IF NOT EXISTS public.game_questions (
    question_id TEXT PRIMARY KEY,
    grade_num INTEGER NOT NULL,
    game_type TEXT NOT NULL,
    topic TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    prompt TEXT NOT NULL,
    prompt_vi TEXT,
    answer_options JSONB NOT NULL,
    correct_answer TEXT NOT NULL,
    explanation TEXT,
    explanation_vi TEXT,
    image_asset TEXT,
    audio_prompt TEXT,
    curriculum_reference TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.game_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public select game questions" ON public.game_questions;
CREATE POLICY "Public select game questions" ON public.game_questions
    FOR SELECT TO public USING (true);

-- End of migration
