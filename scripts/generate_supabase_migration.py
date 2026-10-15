import json

with open('scripts/students_roster.json', 'r', encoding='utf-8') as f:
    roster = json.load(f)

classes_data = [
    ('cls-22', 'Class 2.2 - Little Explorers', '2.2', 'Grade 2', 'grade_1_2', 38, 'teacher-trang', 'Ms. Thu Trang', 2, '2026-2027'),
    ('cls-41', 'Class 4.1 - Heritage Navigators', '4.1', 'Grade 4', 'grade_4_5', 38, 'teacher-trang', 'Ms. Thu Trang', 3, '2026-2027'),
    ('cls-46', 'Class 4.6 - Global Scholars', '4.6', 'Grade 4', 'grade_4_5', 34, 'teacher-trang', 'Ms. Thu Trang', 3, '2026-2027'),
    ('cls-52', 'Class 5.2 - Future Pioneers', '5.2', 'Grade 5', 'grade_4_5', 39, 'teacher-trang', 'Ms. Thu Trang', 4, '2026-2027'),
    ('cls-56', 'Class 5.6 - Young Leaders', '5.6', 'Grade 5', 'grade_4_5', 37, 'teacher-trang', 'Ms. Thu Trang', 4, '2026-2027'),
]

sql = """-- ==============================================================================
-- VIETDISCOVERY BY MS. TRANG - DATABASE MIGRATION SCRIPT
-- Complete Classes, Student Rosters (197 Students across 5 Classes), RLS & RPC
-- Generated for Supabase SQL Editor
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABLES CREATION

-- 2.1 Classes Table
CREATE TABLE IF NOT EXISTS public.classes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    grade_level TEXT NOT NULL,
    grade_band TEXT NOT NULL,
    student_count INTEGER DEFAULT 0,
    teacher_id TEXT,
    teacher_name TEXT,
    active_assignments INTEGER DEFAULT 0,
    school_year TEXT DEFAULT '2026-2027',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.2 Students Table
CREATE TABLE IF NOT EXISTS public.students (
    id TEXT PRIMARY KEY,
    student_code TEXT NOT NULL,
    name TEXT NOT NULL,
    class_id TEXT REFERENCES public.classes(id) ON DELETE SET NULL,
    class_code TEXT NOT NULL,
    class_name TEXT,
    grade_level TEXT,
    grade_band TEXT,
    access_code TEXT,
    access_code_hash TEXT NOT NULL,
    failed_pin_attempts INTEGER DEFAULT 0,
    is_locked BOOLEAN DEFAULT FALSE,
    locked_until TIMESTAMPTZ,
    completed_destinations INTEGER DEFAULT 0,
    total_stars INTEGER DEFAULT 200,
    average_score INTEGER DEFAULT 0,
    last_active TEXT DEFAULT 'Sẵn sàng học',
    status TEXT DEFAULT 'online',
    avatar TEXT DEFAULT 'boy_little_explorer',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for lightning fast login queries
CREATE INDEX IF NOT EXISTS idx_students_class_code ON public.students(class_code);
CREATE INDEX IF NOT EXISTS idx_students_name ON public.students(name);
CREATE INDEX IF NOT EXISTS idx_students_code ON public.students(student_code);

-- 2.3 Student Learning Progress Table
CREATE TABLE IF NOT EXISTS public.student_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id TEXT NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    destination_id TEXT NOT NULL,
    completed_steps JSONB DEFAULT '{"vocabulary": false, "reading": false, "listening": false, "speaking": false, "quiz": false}'::jsonb,
    quiz_score INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 4,
    attempts INTEGER DEFAULT 0,
    stars_earned INTEGER DEFAULT 0,
    last_attempt_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT student_progress_student_dest_key UNIQUE (student_id, destination_id)
);

CREATE INDEX IF NOT EXISTS idx_student_progress_student_id ON public.student_progress(student_id);

-- 3. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;

-- Classes Policies: Public can read classes for login/dashboard selection
DROP POLICY IF EXISTS "Public can view classes" ON public.classes;
CREATE POLICY "Public can view classes" ON public.classes
    FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Authenticated can manage classes" ON public.classes;
CREATE POLICY "Authenticated can manage classes" ON public.classes
    FOR ALL TO authenticated USING (true);

-- Students Policies
DROP POLICY IF EXISTS "Public can view students for login" ON public.students;
CREATE POLICY "Public can view students for login" ON public.students
    FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Students can update own avatar and stars" ON public.students;
CREATE POLICY "Students can update own avatar and stars" ON public.students
    FOR UPDATE TO public USING (true) WITH CHECK (true);

-- Student Progress Policies
DROP POLICY IF EXISTS "Public can view student progress" ON public.student_progress;
CREATE POLICY "Public can view student progress" ON public.student_progress
    FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Public can insert student progress" ON public.student_progress;
CREATE POLICY "Public can insert student progress" ON public.student_progress
    FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update student progress" ON public.student_progress;
CREATE POLICY "Public can update student progress" ON public.student_progress
    FOR UPDATE TO public USING (true) WITH CHECK (true);

-- 4. SECURITY DEFINER RPC FUNCTIONS

-- 4.1 Verify Student Login Function (Encapsulates validation and hashing)
CREATE OR REPLACE FUNCTION public.verify_student_login(
    p_full_name TEXT,
    p_class_code TEXT,
    p_access_code TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_clean_name TEXT;
    v_clean_class TEXT;
    v_clean_code TEXT;
    v_salt TEXT := '_vietdiscovery_salt_2026';
    v_hash TEXT;
    v_student RECORD;
    v_progress JSONB;
BEGIN
    v_clean_name := TRIM(p_full_name);
    v_clean_class := TRIM(p_class_code);
    v_clean_code := TRIM(UPPER(p_access_code));
    v_hash := encode(digest(v_clean_code || v_salt, 'sha256'), 'hex');

    -- Search candidate within target classroom
    SELECT * INTO v_student
    FROM public.students
    WHERE (class_code = v_clean_class OR class_id = v_clean_class)
      AND LOWER(TRIM(name)) = LOWER(v_clean_name)
    LIMIT 1;

    -- Cross-class auto-resolution if student picked wrong class
    IF v_student.id IS NULL THEN
        SELECT * INTO v_student
        FROM public.students
        WHERE LOWER(TRIM(name)) = LOWER(v_clean_name)
        LIMIT 1;

        IF v_student.id IS NOT NULL THEN
            IF v_student.access_code_hash = v_hash 
               OR UPPER(COALESCE(v_student.access_code, '')) = v_clean_code
               OR UPPER(COALESCE(v_student.student_code, '')) = v_clean_code THEN
                -- Correct student and valid code, continue
                NULL;
            ELSE
                RETURN jsonb_build_object(
                    'success', false,
                    'errorMessage', 'Học sinh "' || v_clean_name || '" thuộc Lớp ' || v_student.class_code || '. Bé hãy chọn đúng Lớp ' || v_student.class_code || ' nhé!'
                );
            END IF;
        ELSE
            RETURN jsonb_build_object(
                'success', false,
                'errorMessage', 'Không tìm thấy học sinh "' || v_clean_name || '" trong Lớp ' || v_clean_class || '. Con hãy kiểm tra lại họ tên hoặc chọn đúng lớp nhé!'
            );
        END IF;
    END IF;

    -- Validate Access Code against hash or raw code or studentCode
    IF v_student.access_code_hash = v_hash 
       OR UPPER(COALESCE(v_student.access_code, '')) = v_clean_code
       OR UPPER(COALESCE(v_student.student_code, '')) = v_clean_code
       OR (LENGTH(v_clean_code) = 7 AND v_clean_code LIKE 'VD%' AND SUBSTRING(v_clean_code, 1, 4) || SUBSTRING(v_clean_code, 6, 2) = UPPER(COALESCE(v_student.access_code, '')))
    THEN
        -- Reset failed attempts on success
        UPDATE public.students
        SET failed_pin_attempts = 0, is_locked = false, last_active = 'Vừa đăng nhập'
        WHERE id = v_student.id;

        -- Load student learning progress
        SELECT COALESCE(
            jsonb_object_agg(
                destination_id,
                jsonb_build_object(
                    'destinationId', destination_id,
                    'completedSteps', completed_steps,
                    'quizScore', quiz_score,
                    'totalQuestions', total_questions,
                    'attempts', attempts,
                    'starsEarned', stars_earned,
                    'lastAttemptDate', to_char(last_attempt_at, 'DD/MM/YYYY')
                )
            ),
            '{}'::jsonb
        ) INTO v_progress
        FROM public.student_progress
        WHERE student_id = v_student.id;

        RETURN jsonb_build_object(
            'success', true,
            'user', jsonb_build_object(
                'id', v_student.id,
                'studentCode', v_student.student_code,
                'fullName', v_student.name,
                'role', 'student',
                'classId', v_student.class_id,
                'className', v_student.class_name,
                'classCode', v_student.class_code,
                'gradeLevel', v_student.grade_level,
                'gradeBand', v_student.grade_band,
                'stars', v_student.total_stars,
                'avatar', COALESCE(v_student.avatar, 'boy_little_explorer')
            ),
            'progress', v_progress
        );
    ELSE
        RETURN jsonb_build_object(
            'success', false,
            'errorMessage', 'Mã số truy cập chưa chính xác! Con hãy kiểm tra lại nhé.'
        );
    END IF;
END;
$$;

-- 4.2 Update Student Avatar RPC
CREATE OR REPLACE FUNCTION public.update_student_avatar(
    p_student_id TEXT,
    p_avatar TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE public.students
    SET avatar = p_avatar, updated_at = NOW()
    WHERE id = p_student_id OR student_code = p_student_id;
END;
$$;

-- 5. SEED DATA - 5 CLASSES
"""

for c in classes_data:
    sql += f"""INSERT INTO public.classes (id, name, code, grade_level, grade_band, student_count, teacher_id, teacher_name, active_assignments, school_year)
VALUES ('{c[0]}', '{c[1]}', '{c[2]}', '{c[3]}', '{c[4]}', {c[5]}, '{c[6]}', '{c[7]}', {c[8]}, '{c[9]}')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    code = EXCLUDED.code,
    grade_level = EXCLUDED.grade_level,
    grade_band = EXCLUDED.grade_band,
    student_count = EXCLUDED.student_count;
"""

sql += "\n-- 6. SEED DATA - 197 OFFICIAL STUDENTS\n"

for s in roster:
    name_clean = s['name'].replace("'", "''")
    cname_clean = s['className'].replace("'", "''")
    avatar = s.get('avatar', 'boy_little_explorer')
    stars = s.get('totalStars', 200)
    dest = s.get('completedDestinations', 0)
    score = s.get('averageScore', 0)
    last_act = s.get('lastActive', 'Sẵn sàng học').replace("'", "''")
    sql += f"""INSERT INTO public.students (id, student_code, name, class_id, class_code, class_name, grade_level, grade_band, access_code, access_code_hash, failed_pin_attempts, is_locked, completed_destinations, total_stars, average_score, last_active, status, avatar)
VALUES ('{s['id']}', '{s['studentCode']}', '{name_clean}', '{s['classId']}', '{s['classCode']}', '{cname_clean}', '{s['gradeLevel']}', '{s['gradeBand']}', '{s['accessCode']}', '{s['accessCodeHash']}', 0, false, {dest}, {stars}, {score}, '{last_act}', 'online', '{avatar}')
ON CONFLICT (id) DO UPDATE SET
    student_code = EXCLUDED.student_code,
    name = EXCLUDED.name,
    class_id = EXCLUDED.class_id,
    class_code = EXCLUDED.class_code,
    class_name = EXCLUDED.class_name,
    grade_level = EXCLUDED.grade_level,
    grade_band = EXCLUDED.grade_band,
    access_code = EXCLUDED.access_code,
    access_code_hash = EXCLUDED.access_code_hash;
"""

with open('supabase_student_roster_migration.sql', 'w', encoding='utf-8') as f:
    f.write(sql)

print(f"Generated supabase_student_roster_migration.sql with {len(roster)} students successfully!")
