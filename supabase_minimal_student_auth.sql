-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG — MINIMAL REAL STUDENT AUTH & PROGRESS MIGRATION
-- Environment: Supabase PostgreSQL
-- Verified Tables: public.students (182 real students), public."Classes" (5 classes)
-- Zero Dependencies on public.profiles or custom staff tables
-- Zero Modifications or Deletions to existing student records
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS unaccent;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. SCHEMA USAGE (Enables PostgREST API Gateway)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- 3. CLASSES METADATA TABLE (Read-only public school class codes)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'Classes') THEN
    ALTER TABLE public."Classes" ENABLE ROW LEVEL SECURITY;
    REVOKE ALL ON TABLE public."Classes" FROM PUBLIC;
    REVOKE INSERT, UPDATE, DELETE ON TABLE public."Classes" FROM anon, authenticated;
    GRANT SELECT ON TABLE public."Classes" TO anon, authenticated, service_role;
    DROP POLICY IF EXISTS "Allow anon read classes" ON public."Classes";
    CREATE POLICY "Allow anon read classes" ON public."Classes" FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'classes') THEN
    ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
    REVOKE ALL ON TABLE public.classes FROM PUBLIC;
    REVOKE INSERT, UPDATE, DELETE ON TABLE public.classes FROM anon, authenticated;
    GRANT SELECT ON TABLE public.classes TO anon, authenticated, service_role;
    DROP POLICY IF EXISTS "Allow anon read classes" ON public.classes;
    CREATE POLICY "Allow anon read classes" ON public.classes FOR SELECT TO anon, authenticated USING (true);
  END IF;
END $$;

-- 4. SHIELD STUDENTS TABLE (RLS ENABLED, ZERO PUBLIC SELECT)
-- Preserves all 182 real student records and access codes.
-- Completely blocks unauthenticated and anonymous direct reads.
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.students FROM PUBLIC;
REVOKE ALL ON TABLE public.students FROM anon;

DROP POLICY IF EXISTS "Allow anon read students for login" ON public.students;
DROP POLICY IF EXISTS "Public can view students for login" ON public.students;
DROP POLICY IF EXISTS "Allow update student avatar" ON public.students;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.students;
DROP POLICY IF EXISTS "Service role full access on students" ON public.students;

CREATE POLICY "Service role full access on students" ON public.students
    FOR ALL TO service_role, postgres
    USING (true)
    WITH CHECK (true);

-- 5. STUDENT SESSIONS TABLE (Cryptographic Session Storage)
CREATE TABLE IF NOT EXISTS public.student_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id BIGINT NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    session_token TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    expires_at TIMESTAMPTZ DEFAULT (now() + INTERVAL '7 days'),
    client_ip TEXT
);

CREATE INDEX IF NOT EXISTS idx_student_sessions_token ON public.student_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_student_sessions_student ON public.student_sessions(student_id);

ALTER TABLE public.student_sessions ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.student_sessions FROM PUBLIC;
REVOKE ALL ON TABLE public.student_sessions FROM anon;

DROP POLICY IF EXISTS "Service role full access on student_sessions" ON public.student_sessions;
CREATE POLICY "Service role full access on student_sessions" ON public.student_sessions
    FOR ALL TO service_role, postgres
    USING (true)
    WITH CHECK (true);

-- 6. RATE LIMITING & BRUTE-FORCE TRACKER TABLE
CREATE TABLE IF NOT EXISTS public.student_login_attempts (
    id BIGSERIAL PRIMARY KEY,
    target_student_key TEXT NOT NULL,
    client_ip TEXT NOT NULL,
    attempted_at TIMESTAMPTZ DEFAULT now(),
    is_success BOOLEAN DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_login_attempts_target ON public.student_login_attempts(target_student_key, attempted_at);
CREATE INDEX IF NOT EXISTS idx_login_attempts_ip ON public.student_login_attempts(client_ip, attempted_at);

ALTER TABLE public.student_login_attempts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.student_login_attempts FROM PUBLIC;
REVOKE ALL ON TABLE public.student_login_attempts FROM anon;

DROP POLICY IF EXISTS "Service role full access on login_attempts" ON public.student_login_attempts;
CREATE POLICY "Service role full access on login_attempts" ON public.student_login_attempts
    FOR ALL TO service_role, postgres
    USING (true)
    WITH CHECK (true);

-- 7. STUDENT LEARNING PROGRESS TABLE (Real Evidence & Genuine Learning Attempts)
CREATE TABLE IF NOT EXISTS public.student_progress (
    id BIGSERIAL PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    destination_id TEXT NOT NULL,
    completed_steps JSONB DEFAULT '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb,
    quiz_score INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 4,
    attempts INTEGER DEFAULT 1,
    stars_earned INTEGER DEFAULT 0,
    last_attempt_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT student_progress_unique UNIQUE (student_id, destination_id)
);

CREATE INDEX IF NOT EXISTS idx_student_progress_student ON public.student_progress(student_id);

ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.student_progress FROM PUBLIC;
REVOKE ALL ON TABLE public.student_progress FROM anon;

DROP POLICY IF EXISTS "Service role full access on student_progress" ON public.student_progress;
CREATE POLICY "Service role full access on student_progress" ON public.student_progress
    FOR ALL TO service_role, postgres
    USING (true)
    WITH CHECK (true);

-- 8. ATOMIC SECURE RPC: VERIFY STUDENT LOGIN
-- Takes Full Name, Class Code, and Student Access Code
-- Validates Rate Limits, Returns Authenticated Session Token, Profile & Restored Progress
CREATE OR REPLACE FUNCTION public.verify_student_login(
    p_full_name TEXT,
    p_class_code TEXT,
    p_access_code TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_clean_name TEXT;
    v_clean_class TEXT;
    v_clean_code TEXT;
    v_client_ip TEXT;
    v_target_key TEXT;
    v_target_class_id BIGINT;
    v_student RECORD;
    v_class RECORD;
    v_target_failed_count INTEGER;
    v_ip_failed_count INTEGER;
    v_session_token TEXT;
    v_student_json JSONB;
    v_progress JSONB;
    v_calculated_stars BIGINT;
BEGIN
    v_clean_name := trim(p_full_name);
    v_clean_class := trim(p_class_code);
    v_clean_code := upper(trim(p_access_code));

    -- Extract client IP securely
    BEGIN
        v_client_ip := coalesce(
            current_setting('request.headers', true)::json->>'cf-connecting-ip',
            current_setting('request.headers', true)::json->>'x-forwarded-for',
            current_setting('request.headers', true)::json->>'x-real-ip',
            '0.0.0.0'
        );
        IF position(',' in v_client_ip) > 0 THEN
            v_client_ip := trim(split_part(v_client_ip, ',', 1));
        END IF;
    EXCEPTION WHEN OTHERS THEN
        v_client_ip := '0.0.0.0';
    END;

    -- Step 1: Look up Class in "Classes"
    IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'Classes') THEN
      SELECT * INTO v_class
      FROM public."Classes"
      WHERE class_name = v_clean_class
         OR class_name = 'Class ' || v_clean_class
         OR class_name = 'Lớp ' || v_clean_class
         OR (v_clean_class ~ '^[0-9]+$' AND id = v_clean_class::BIGINT)
      LIMIT 1;
    ELSIF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'classes') THEN
      SELECT * INTO v_class
      FROM public.classes
      WHERE class_name = v_clean_class
         OR class_name = 'Class ' || v_clean_class
         OR class_name = 'Lớp ' || v_clean_class
         OR (v_clean_class ~ '^[0-9]+$' AND id = v_clean_class::BIGINT)
      LIMIT 1;
    END IF;

    IF v_class.id IS NOT NULL THEN
        v_target_class_id := v_class.id;
    ELSE
        -- Standard fallback mapping if Classes table not yet mapped
        IF v_clean_class = '2.2' THEN v_target_class_id := 1;
        ELSIF v_clean_class = '4.1' THEN v_target_class_id := 2;
        ELSIF v_clean_class = '4.6' THEN v_target_class_id := 3;
        ELSIF v_clean_class = '5.2' THEN v_target_class_id := 4;
        ELSIF v_clean_class = '5.6' THEN v_target_class_id := 5;
        END IF;
    END IF;

    -- Target student account key (binds Name + Class)
    v_target_key := md5(lower(v_clean_name) || ':' || coalesce(v_target_class_id::text, v_clean_class));

    -- Rate Limit 1: Target Account Failures (max 5 failed attempts in 15 mins)
    SELECT COUNT(*) INTO v_target_failed_count
    FROM public.student_login_attempts
    WHERE target_student_key = v_target_key
      AND attempted_at > (now() - INTERVAL '15 minutes')
      AND is_success = false;

    IF v_target_failed_count >= 5 THEN
        RETURN jsonb_build_object(
            'success', false,
            'isLocked', true,
            'remainingAttempts', 0,
            'errorMessage', 'Tài khoản tạm thời bị khóa do nhập sai 5 lần liên tiếp. Vui lòng thử lại sau 15 phút hoặc liên hệ Cô Trang.'
        );
    END IF;

    -- Rate Limit 2: School IP Failures (max 60 failed attempts in 15 mins across lab)
    SELECT COUNT(*) INTO v_ip_failed_count
    FROM public.student_login_attempts
    WHERE client_ip = v_client_ip
      AND attempted_at > (now() - INTERVAL '15 minutes')
      AND is_success = false;

    IF v_ip_failed_count >= 60 THEN
        RETURN jsonb_build_object(
            'success', false,
            'isLocked', true,
            'remainingAttempts', 0,
            'errorMessage', 'Quá nhiều lần thử đăng nhập không thành công từ thiết bị này. Vui lòng thử lại sau 15 phút.'
        );
    END IF;

    -- Step 2: Query Student using verified schema columns: id, full_name, student_code, class_id
    SELECT * INTO v_student
    FROM public.students s
    WHERE s.class_id = v_target_class_id
      AND (
          lower(s.full_name) = lower(v_clean_name)
          OR unaccent(lower(s.full_name)) = unaccent(lower(v_clean_name))
          OR replace(lower(s.full_name), 'đ', 'd') = replace(lower(v_clean_name), 'đ', 'd')
      )
    LIMIT 1;

    -- Step 3: Strict Exact Authentication Check (NO numeric ID login, NO prefix stripping)
    IF v_student.id IS NULL OR upper(trim(v_student.student_code)) <> v_clean_code THEN
        INSERT INTO public.student_login_attempts (target_student_key, client_ip, is_success)
        VALUES (v_target_key, v_client_ip, false);

        -- Uniform generic error message (zero information disclosure)
        RETURN jsonb_build_object(
            'success', false,
            'isLocked', false,
            'remainingAttempts', GREATEST(0, 5 - (v_target_failed_count + 1)),
            'errorMessage', 'Thông tin đăng nhập chưa chính xác. Vui lòng kiểm tra lại Họ tên, Lớp và Mã truy cập trên thẻ học sinh.'
        );
    END IF;

    -- Step 4: Login Succeeded
    INSERT INTO public.student_login_attempts (target_student_key, client_ip, is_success)
    VALUES (v_target_key, v_client_ip, true);

    -- Generate 32-byte cryptographic session token (256-bit entropy)
    v_session_token := encode(gen_random_bytes(32), 'hex');

    -- Store active session in database
    INSERT INTO public.student_sessions (student_id, session_token, expires_at, client_ip)
    VALUES (v_student.id, v_session_token, now() + INTERVAL '7 days', v_client_ip);

    -- Step 5: Restore Real Student Learning Progress
    SELECT jsonb_object_agg(
        sp.destination_id,
        jsonb_build_object(
            'destinationId', sp.destination_id,
            'completedSteps', coalesce(sp.completed_steps, '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb),
            'quizScore', coalesce(sp.quiz_score, 0),
            'totalQuestions', coalesce(sp.total_questions, 4),
            'attempts', coalesce(sp.attempts, 1),
            'starsEarned', coalesce(sp.stars_earned, 0),
            'lastAttemptDate', to_char(coalesce(sp.last_attempt_at, now()), 'DD/MM/YYYY')
        )
    ) INTO v_progress
    FROM public.student_progress sp
    WHERE sp.student_id = v_student.id;

    -- Calculate total stars earned across real learning attempts
    SELECT coalesce(sum(stars_earned), 0) INTO v_calculated_stars
    FROM public.student_progress
    WHERE student_id = v_student.id;

    v_student_json := to_jsonb(v_student);

    -- Return authenticated session, real profile & genuine progress (STRICTLY NO studentCode returned)
    RETURN jsonb_build_object(
        'success', true,
        'sessionToken', v_session_token,
        'sessionExpiresAt', (now() + INTERVAL '7 days'),
        'user', jsonb_build_object(
            'id', v_student.id::text,
            'fullName', v_student.full_name,
            'role', 'student',
            'classId', v_student.class_id::text,
            'className', 'Class ' || coalesce(v_class.class_name, v_clean_class),
            'classCode', coalesce(v_class.class_name, v_clean_class),
            'gradeLevel', 'Grade ' || coalesce(v_class.grade, 4)::text,
            'gradeBand', CASE 
              WHEN coalesce(v_class.class_name, v_clean_class) LIKE '2%' THEN 'grade_1_2'
              WHEN coalesce(v_class.class_name, v_clean_class) LIKE '3%' THEN 'grade_3'
              ELSE 'grade_4_5'
            END,
            'stars', GREATEST(
                coalesce((v_student_json->>'stars')::integer, (v_student_json->>'total_stars')::integer, 0),
                coalesce(v_calculated_stars, 0)
            ),
            'avatar', coalesce(v_student_json->>'avatar', 'girl_explorer_chibi')
        ),
        'progress', coalesce(v_progress, '{}'::jsonb)
    );
END;
$$;

-- 9. ATOMIC SECURE RPC: SAVE STUDENT PROGRESS
-- Session-authenticated, anti-cheat bounded, persists real educational evidence
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
    v_student_id BIGINT;
    v_clean_dest TEXT;
    v_clean_stars INTEGER;
    v_clean_quiz INTEGER;
    v_clean_attempts INTEGER;
    v_new_total_stars BIGINT;
BEGIN
    -- 1. Validate Session Token
    SELECT student_id INTO v_student_id
    FROM public.student_sessions
    WHERE session_token = p_session_token
      AND expires_at > now();

    IF v_student_id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại.');
    END IF;

    v_clean_dest := trim(p_destination_id);
    IF v_clean_dest = '' OR v_clean_dest IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Mã điểm đến không hợp lệ.');
    END IF;

    -- 2. Anti-cheat server-side validation:
    -- Max 50 stars per destination (10 stars per completed step: vocab, reading, listening, speaking, quiz)
    v_clean_stars := LEAST(50, GREATEST(0, coalesce(p_stars_earned, 0)));
    v_clean_quiz := LEAST(coalesce(p_total_questions, 4), GREATEST(0, coalesce(p_quiz_score, 0)));
    v_clean_attempts := GREATEST(1, coalesce(p_attempts, 1));

    -- 3. Upsert genuine student progress record
    INSERT INTO public.student_progress (
        student_id, destination_id, completed_steps, quiz_score, total_questions, attempts, stars_earned, last_attempt_at
    )
    VALUES (
        v_student_id,
        v_clean_dest,
        coalesce(p_completed_steps, '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb),
        v_clean_quiz,
        coalesce(p_total_questions, 4),
        v_clean_attempts,
        v_clean_stars,
        now()
    )
    ON CONFLICT (student_id, destination_id) DO UPDATE SET
        completed_steps = coalesce(EXCLUDED.completed_steps, public.student_progress.completed_steps),
        quiz_score = GREATEST(public.student_progress.quiz_score, EXCLUDED.quiz_score),
        total_questions = EXCLUDED.total_questions,
        attempts = public.student_progress.attempts + 1,
        stars_earned = GREATEST(public.student_progress.stars_earned, EXCLUDED.stars_earned),
        last_attempt_at = now();

    -- 4. Calculate total stars across all real destinations for this student
    SELECT coalesce(sum(stars_earned), 0) INTO v_new_total_stars
    FROM public.student_progress
    WHERE student_id = v_student_id;

    RETURN jsonb_build_object(
        'success', true,
        'studentId', v_student_id,
        'destinationId', v_clean_dest,
        'totalStars', v_new_total_stars
    );
END;
$$;

-- 10. ATOMIC SECURE RPC: LOGOUT STUDENT
-- Immediately revokes active session token in database
CREATE OR REPLACE FUNCTION public.logout_student(p_session_token TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
    DELETE FROM public.student_sessions WHERE session_token = p_session_token;
    RETURN jsonb_build_object('success', true);
END;
$$;

-- 11. ATOMIC SECURE RPC: GET STUDENT PROGRESS
-- Returns authenticated student progress without direct table SELECT
CREATE OR REPLACE FUNCTION public.get_student_progress(p_session_token TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_student_id BIGINT;
    v_progress JSONB;
BEGIN
    SELECT student_id INTO v_student_id
    FROM public.student_sessions
    WHERE session_token = p_session_token
      AND expires_at > now();

    IF v_student_id IS NULL THEN
        RETURN '{}'::jsonb;
    END IF;

    SELECT jsonb_object_agg(
        sp.destination_id,
        jsonb_build_object(
            'destinationId', sp.destination_id,
            'completedSteps', coalesce(sp.completed_steps, '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb),
            'quizScore', coalesce(sp.quiz_score, 0),
            'totalQuestions', coalesce(sp.total_questions, 4),
            'attempts', coalesce(sp.attempts, 1),
            'starsEarned', coalesce(sp.stars_earned, 0),
            'lastAttemptDate', to_char(coalesce(sp.last_attempt_at, now()), 'DD/MM/YYYY')
        )
    ) INTO v_progress
    FROM public.student_progress sp
    WHERE sp.student_id = v_student_id;

    RETURN coalesce(v_progress, '{}'::jsonb);
END;
$$;

-- 12. GRANT EXECUTE ONLY ON THE RPC FUNCTIONS
REVOKE ALL ON FUNCTION public.verify_student_login(TEXT, TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_student_login(TEXT, TEXT, TEXT) TO anon, authenticated, service_role;

REVOKE ALL ON FUNCTION public.save_student_progress(TEXT, TEXT, JSONB, INTEGER, INTEGER, INTEGER, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.save_student_progress(TEXT, TEXT, JSONB, INTEGER, INTEGER, INTEGER, INTEGER) TO anon, authenticated, service_role;

REVOKE ALL ON FUNCTION public.logout_student(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.logout_student(TEXT) TO anon, authenticated, service_role;

REVOKE ALL ON FUNCTION public.get_student_progress(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_student_progress(TEXT) TO anon, authenticated, service_role;

-- 13. RELOAD POSTGREST SCHEMA CACHE
NOTIFY pgrst, 'reload schema';
