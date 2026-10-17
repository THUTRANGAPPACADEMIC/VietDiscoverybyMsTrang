-- ==============================================================================
-- VIETDISCOVERY - DATABASE MIGRATION SCRIPT FOR ADVENTURE GAMES PROGRESS
-- File: supabase_game_progress_migration.sql
-- Purpose:
--   1. Upgrade public.save_student_progress RPC to support both standard
--      curriculum lessons (5 steps: vocab, reading, listening, speaking, quiz)
--      and adventure mini-games (e.g. 'game-landmark-drag-drop', 'game-34-provinces').
--   2. Preserve full JSONB completed_steps structures (such as placedLandmarks array).
--   3. Apply appropriate anti-cheat validation based on activity type:
--      - Standard destination lessons: max 50 stars.
--      - Landmark Drag & Drop game: max 200 stars (6 landmarks + streak bonuses = 195 max).
--      - Other adventure mini-games: max 250 stars.
--   4. Reconcile total stars across all activities into public.students table.
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.save_student_progress(
    p_session_token TEXT,
    p_destination_id TEXT,
    p_completed_steps JSONB,
    p_quiz_score INTEGER,
    p_total_questions INTEGER,
    p_attempts INTEGER,
    p_stars_earned INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_student_id INTEGER;
    v_clean_quiz_score INTEGER;
    v_clean_total_q INTEGER;
    v_clean_steps JSONB;
    v_clean_dest TEXT;
    v_is_game BOOLEAN;
    v_max_legitimate_stars INTEGER := 0;
    v_verified_stars INTEGER;
    v_existing_progress RECORD;
    v_new_total_stars INTEGER;
BEGIN
    -- 1. Validate Session Token
    SELECT student_id INTO v_student_id
    FROM public.student_sessions
    WHERE session_token = p_session_token
      AND expires_at > now()
    LIMIT 1;

    IF v_student_id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'errorMessage', 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
    END IF;

    v_clean_dest := trim(p_destination_id);
    IF v_clean_dest = '' OR v_clean_dest IS NULL THEN
        RETURN jsonb_build_object('success', false, 'errorMessage', 'Mã hoạt động không hợp lệ.');
    END IF;

    -- 2. Determine whether activity is a Game or a Standard Lesson
    v_is_game := (v_clean_dest LIKE 'game-%');

    -- 3. Input Clamping & Validation
    v_clean_quiz_score := GREATEST(0, LEAST(100, coalesce(p_quiz_score, 0)));
    v_clean_total_q := GREATEST(1, LEAST(100, coalesce(p_total_questions, 4)));

    IF v_is_game THEN
        -- Preserve the entire JSONB payload for game state (placedLandmarks, completed, etc.)
        v_clean_steps := coalesce(p_completed_steps, '{}'::jsonb);

        -- Anti-cheat ceiling for adventure games
        IF v_clean_dest = 'game-landmark-drag-drop' THEN
            -- 6 landmarks * 20 base stars + streak bonuses up to 75 = 195 stars maximum
            v_max_legitimate_stars := 200;
        ELSE
            -- General adventure games ceiling
            v_max_legitimate_stars := 250;
        END IF;

        v_verified_stars := LEAST(v_max_legitimate_stars, GREATEST(0, coalesce(p_stars_earned, 0)));
    ELSE
        -- Standard 5-step curriculum lesson validation
        v_clean_steps := jsonb_build_object(
            'vocabulary', coalesce((p_completed_steps->>'vocabulary')::boolean, false),
            'reading', coalesce((p_completed_steps->>'reading')::boolean, false),
            'listening', coalesce((p_completed_steps->>'listening')::boolean, false),
            'speaking', coalesce((p_completed_steps->>'speaking')::boolean, false),
            'quiz', coalesce((p_completed_steps->>'quiz')::boolean, false)
        );

        IF (v_clean_steps->>'vocabulary')::boolean THEN v_max_legitimate_stars := v_max_legitimate_stars + 10; END IF;
        IF (v_clean_steps->>'reading')::boolean THEN v_max_legitimate_stars := v_max_legitimate_stars + 10; END IF;
        IF (v_clean_steps->>'listening')::boolean THEN v_max_legitimate_stars := v_max_legitimate_stars + 10; END IF;
        IF (v_clean_steps->>'speaking')::boolean THEN v_max_legitimate_stars := v_max_legitimate_stars + 10; END IF;
        IF (v_clean_steps->>'quiz')::boolean THEN v_max_legitimate_stars := v_max_legitimate_stars + LEAST(10, (v_clean_quiz_score / 10)); END IF;

        v_verified_stars := LEAST(v_max_legitimate_stars, GREATEST(0, coalesce(p_stars_earned, v_max_legitimate_stars)));
    END IF;

    -- 4. Replay & Farming Protection
    SELECT * INTO v_existing_progress
    FROM public.student_progress
    WHERE student_id = v_student_id AND destination_id = v_clean_dest;

    IF v_existing_progress.id IS NOT NULL THEN
        -- Destination/Game already exists: update with GREATEST achievement (prevent star farming)
        UPDATE public.student_progress
        SET completed_steps = v_clean_steps,
            quiz_score = GREATEST(public.student_progress.quiz_score, v_clean_quiz_score),
            attempts = public.student_progress.attempts + 1,
            stars_earned = GREATEST(public.student_progress.stars_earned, v_verified_stars),
            last_attempt_at = now()
        WHERE id = v_existing_progress.id;
    ELSE
        -- Insert first attempt for this activity
        INSERT INTO public.student_progress (
            student_id, destination_id, completed_steps, quiz_score, total_questions, attempts, stars_earned, last_attempt_at
        ) VALUES (
            v_student_id, v_clean_dest, v_clean_steps, v_clean_quiz_score, v_clean_total_q, 1, v_verified_stars, now()
        );
    END IF;

    -- 5. Calculate cumulative stars across all unique activities (lessons + games)
    SELECT coalesce(SUM(stars_earned), 0) INTO v_new_total_stars
    FROM public.student_progress
    WHERE student_id = v_student_id;

    -- Update student cumulative stars in public.students table
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'students' AND column_name = 'stars') THEN
        UPDATE public.students SET stars = v_new_total_stars WHERE id = v_student_id;
    ELSIF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'students' AND column_name = 'total_stars') THEN
        UPDATE public.students SET total_stars = v_new_total_stars WHERE id = v_student_id;
    END IF;

    RETURN jsonb_build_object('success', true, 'totalStars', v_new_total_stars);
END;
$$;

-- Ensure execution permissions
GRANT EXECUTE ON FUNCTION public.save_student_progress(TEXT, TEXT, JSONB, INTEGER, INTEGER, INTEGER, INTEGER) TO anon, authenticated, service_role;

-- Reload PostgREST schema cache
NOTIFY pgrst, 'reload schema';
