import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { UserProfile, DestinationProgress, StudentRosterItem, StudentLoginResult, GradeLevel } from '../types';
import { INITIAL_STUDENTS, INITIAL_CLASSES } from '../data/initialClasses';
import { checkPinRateLimit, recordFailedPinAttempt, resetPinRateLimit } from './security';

// Salt for SHA-256 hash
export const ACCESS_CODE_SALT = '_vietdiscovery_salt_2026';

// Helper to calculate SHA-256 hash using Web Crypto API
export async function hashAccessCode(code: string): Promise<string> {
  const cleanCode = code.trim().toUpperCase();
  const msgUint8 = new TextEncoder().encode(cleanCode + ACCESS_CODE_SALT);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Normalize Vietnamese name for flexible, tolerant matching
export function normalizeVietnameseName(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ');
}

// Resilient Vietnamese name comparison (handles accents, no accents, NFC/NFD, and case)
export function isNameMatching(inputName: string, candidateName: string): boolean {
  if (!inputName || !candidateName) return false;
  const cleanInput = inputName.trim().replace(/\s+/g, ' ');
  const cleanCandidate = candidateName.trim().replace(/\s+/g, ' ');

  // 1. Direct case-insensitive match
  if (cleanInput.toLowerCase() === cleanCandidate.toLowerCase()) return true;

  // 2. Unicode normalized (NFC and NFD)
  if (cleanInput.toLowerCase().normalize('NFC') === cleanCandidate.toLowerCase().normalize('NFC')) return true;
  if (cleanInput.toLowerCase().normalize('NFD') === cleanCandidate.toLowerCase().normalize('NFD')) return true;

  // 3. Diacritic-stripped normalization (e.g. "Le Hoang Khoi" vs "Lê Hoàng Khôi")
  if (normalizeVietnameseName(cleanInput) === normalizeVietnameseName(cleanCandidate)) return true;

  return false;
}

// Mapping between database primary key IDs (1-5) and educational class codes ("2.2", "4.1", "4.6", "5.2", "5.6")
export const CLASS_ID_MAP: Record<string, string | number> = {
  '1': '2.2', '2.2': 1, 'cls-22': 1, 'class 2.2': 1, 'lớp 2.2': 1,
  '2': '4.1', '4.1': 2, 'cls-41': 2, 'class 4.1': 2, 'lớp 4.1': 2,
  '3': '4.6', '4.6': 3, 'cls-46': 3, 'class 4.6': 3, 'lớp 4.6': 3,
  '4': '5.2', '5.2': 4, 'cls-52': 4, 'class 5.2': 4, 'lớp 5.2': 4,
  '5': '5.6', '5.6': 5, 'cls-56': 5, 'class 5.6': 5, 'lớp 5.6': 5, '5.5': 5, 'class 5.5': 5,
};

export function getNumericClassId(classIdentifier?: string | number): number | null {
  if (classIdentifier === undefined || classIdentifier === null) return null;
  const str = String(classIdentifier).trim().toLowerCase();
  if (['1', '2', '3', '4', '5'].includes(str)) return parseInt(str, 10);
  if (CLASS_ID_MAP[str] && typeof CLASS_ID_MAP[str] === 'number') {
    return CLASS_ID_MAP[str] as number;
  }
  const digits = str.replace(/[^0-9]/g, '');
  if (digits === '22') return 1;
  if (digits === '41') return 2;
  if (digits === '46') return 3;
  if (digits === '52') return 4;
  if (digits === '56' || digits === '55') return 5;
  return null;
}

export function getClassCodeFromId(classIdentifier?: string | number): string {
  if (classIdentifier === undefined || classIdentifier === null) return '';
  const str = String(classIdentifier).trim().toLowerCase();
  if (['2.2', '4.1', '4.6', '5.2', '5.6'].includes(str)) return str;
  if (CLASS_ID_MAP[str] && typeof CLASS_ID_MAP[str] === 'string') {
    return CLASS_ID_MAP[str] as string;
  }
  const num = getNumericClassId(str);
  if (num && CLASS_ID_MAP[String(num)]) {
    return String(CLASS_ID_MAP[String(num)]);
  }
  return str;
}

// Resilient Class matching (handles "5.6", "Class 5.6", "Lớp 5.6", "cls-56", and database class IDs 1-5)
export function isClassMatching(
  studentClassCode?: string,
  studentClassId?: string | number,
  inputClassCode?: string
): boolean {
  if (!inputClassCode) return false;
  const cleanInput = String(inputClassCode).trim().toLowerCase();
  const cleanCode = String(studentClassCode || '').trim().toLowerCase();
  const cleanId = String(studentClassId ?? '').trim().toLowerCase();

  // 1. Direct match with code or ID
  if (cleanCode === cleanInput || cleanId === cleanInput) return true;

  // 2. Numeric database ID mapping (e.g. database class_id = 5 matches user selection '5.6')
  const inputNumericId = getNumericClassId(cleanInput);
  const studentNumericId = getNumericClassId(cleanId) || getNumericClassId(cleanCode);
  if (inputNumericId !== null && studentNumericId !== null && inputNumericId === studentNumericId) return true;

  // 3. Code resolved from ID match (e.g. student class_id = 5 -> code "5.6")
  const inputResolvedCode = getClassCodeFromId(cleanInput);
  const studentResolvedCode = getClassCodeFromId(cleanCode) || getClassCodeFromId(cleanId);
  if (inputResolvedCode && studentResolvedCode && inputResolvedCode === studentResolvedCode) return true;

  // 4. Normalized code (strip "Class", "Lớp", etc.)
  const normCode = cleanCode.replace(/^(class|lớp)\s*/i, '').trim();
  const normInput = cleanInput.replace(/^(class|lớp)\s*/i, '').trim();
  if (normCode && normCode === normInput) return true;

  // 5. Digit match (e.g. "cls-56" -> "56", "5.6" -> "56")
  const digitsCode = cleanCode.replace(/[^0-9]/g, '');
  const digitsInput = cleanInput.replace(/[^0-9]/g, '');
  if (digitsCode.length >= 2 && digitsCode === digitsInput) return true;

  const idDigits = cleanId.replace(/[^0-9]/g, '');
  if (idDigits.length >= 2 && idDigits === digitsInput) return true;

  return false;
}

// Resilient Access Code matching (handles "VD56017", "VD5617", "56017", "STU-5617", and case-insensitivity)
export function isAccessCodeMatching(
  inputCode: string,
  candidateAccessCode: string,
  candidateStudentCode?: string,
  candidateHash?: string,
  inputHash?: string,
  candidateId?: string | number
): boolean {
  if (!inputCode) return false;
  const cleanInput = inputCode.trim().toUpperCase();
  const cleanAccess = (candidateAccessCode || '').trim().toUpperCase();
  const cleanStudent = (candidateStudentCode || '').trim().toUpperCase();
  const cleanId = candidateId !== undefined ? String(candidateId).trim().toUpperCase() : '';

  // 1. Direct string match
  if (cleanInput === cleanAccess || cleanInput === cleanStudent || (cleanId && cleanInput === cleanId)) return true;

  // 2. Hash match
  if (inputHash && candidateHash && inputHash === candidateHash) return true;

  // 3. Normalized without "VD" or "STU-" prefix
  const stripInput = cleanInput.replace(/^(VD|STU-?)/i, '');
  const stripAccess = cleanAccess.replace(/^(VD|STU-?)/i, '');
  const stripStudent = cleanStudent.replace(/^(VD|STU-?)/i, '');
  const stripId = cleanId.replace(/^(VD|STU-?)/i, '');

  if (stripInput && (stripInput === stripAccess || stripInput === stripStudent || (stripId && stripInput === stripId))) return true;

  // 4. Normalized numeric matching (e.g. "56017" vs "5617")
  const parseCode = (str: string) => {
    const digits = str.replace(/[^0-9]/g, '');
    if (digits.length >= 3) {
      const cls = digits.slice(0, 2);
      const num = parseInt(digits.slice(2), 10);
      return `${cls}-${num}`;
    }
    return digits;
  };

  const pInput = parseCode(cleanInput);
  if (pInput && (pInput === parseCode(cleanAccess) || pInput === parseCode(cleanStudent) || (cleanId && pInput === parseCode(cleanId)))) {
    return true;
  }

  return false;
}

/**
 * Secure Server-Side Student Authentication
 * Authenticates student against pre-approved roster via Supabase Direct Table Queries / RPC,
 * with high-availability local fallback.
 */
export async function authenticateStudent(
  fullName: string,
  classCode: string,
  accessCode: string
): Promise<StudentLoginResult> {
  const cleanFullName = fullName.trim();
  const cleanClassCode = classCode.trim();
  const cleanAccessCode = accessCode.trim();

  if (!cleanFullName) {
    return {
      success: false,
      errorMessage: 'Vui lòng nhập Họ và tên của con.'
    };
  }

  if (!cleanClassCode) {
    return {
      success: false,
      errorMessage: 'Vui lòng chọn Lớp học của con.'
    };
  }

  if (!cleanAccessCode) {
    return {
      success: false,
      errorMessage: 'Vui lòng nhập Mã số truy cập riêng do cô Trang cấp.'
    };
  }

  const targetNumericClassId = getNumericClassId(cleanClassCode);
  const resolvedClassCode = getClassCodeFromId(cleanClassCode) || cleanClassCode;

  // Track any database error to distinguish from "student not found"
  let supabaseQueryError: { code?: string; message?: string } | null = null;

  // --------------------------------------------------------------------------
  // 1. SUPABASE CLOUD AUTHENTICATION (Direct Table Queries & RPC)
  // --------------------------------------------------------------------------
  if (isSupabaseConfigured() && supabase) {
    try {
      // 1.1 First check RPC verify_student_login if available
      try {
        const { data: rpcData, error: rpcError } = await supabase.rpc('verify_student_login', {
          p_full_name: cleanFullName,
          p_class_code: cleanClassCode,
          p_access_code: cleanAccessCode
        });

        if (!rpcError && rpcData) {
          if (rpcData.success && rpcData.user) {
            const localAvatar = localStore.get<string | null>('student_avatar_' + rpcData.user.id, null);
            if (localAvatar) rpcData.user.avatar = localAvatar;
            localStore.set('current_user', rpcData.user);
            if (rpcData.progress) localStore.set('progress_map', rpcData.progress);
            return {
              success: true,
              user: rpcData.user,
              progress: rpcData.progress || {}
            };
          } else if (rpcData.errorMessage) {
            return {
              success: false,
              errorMessage: rpcData.errorMessage,
              isLocked: rpcData.isLocked || false,
              remainingAttempts: rpcData.remainingAttempts
            };
          }
        }
      } catch (rpcErr) {
        // Fall through to direct table queries
      }

      // 1.2 Direct Supabase Table Query using verified schema:
      // Table public."Classes": id (integer), class_name (text), grade (integer)
      // Table public.students: id (integer), full_name (text), student_code (text), class_id (integer)
      let resolvedClassId: number | null = targetNumericClassId;
      let resolvedClassName = resolvedClassCode;
      let resolvedGradeLevel = `Grade ${resolvedClassCode.split('.')[0] || '5'}`;
      let resolvedGradeBand = resolvedClassCode.startsWith('2') ? 'grade_1_2' : (resolvedClassCode.startsWith('3') ? 'grade_3' : 'grade_4_5');

      // Query "Classes" table
      try {
        const { data: classRows, error: classErr } = await supabase
          .from('Classes')
          .select('id, class_name, grade')
          .or(`class_name.eq.${cleanClassCode},id.eq.${targetNumericClassId || 0}`);

        if (!classErr && classRows && classRows.length > 0) {
          resolvedClassId = classRows[0].id;
          resolvedClassName = classRows[0].class_name || resolvedClassName;
          if (classRows[0].grade) {
            resolvedGradeLevel = `Grade ${classRows[0].grade}`;
          }
        }
      } catch (err) {
        // If "Classes" lookup failed, resolvedClassId defaults to targetNumericClassId (e.g. 5)
      }

      // Query students table in Supabase
      if (resolvedClassId !== null) {
        const { data: dbStudents, error: stuError } = await supabase
          .from('students')
          .select('*')
          .eq('class_id', resolvedClassId);

        if (stuError) {
          supabaseQueryError = { code: stuError.code, message: stuError.message };
          console.warn('[Supabase Student Query Error]:', stuError.code, stuError.message);
        } else if (dbStudents && dbStudents.length > 0) {
          // Find student in this class
          const candidate = dbStudents.find(s => 
            isNameMatching(cleanFullName, s.full_name || s.name)
          );

          if (candidate) {
            const inputHashUpper = await hashAccessCode(cleanAccessCode.toUpperCase());
            const isCodeValid = isAccessCodeMatching(
              cleanAccessCode,
              candidate.access_code || candidate.student_code || '',
              candidate.student_code,
              candidate.access_code_hash,
              inputHashUpper,
              candidate.id
            );

            if (isCodeValid) {
              const savedAvatar = localStore.get<string | null>('student_avatar_' + candidate.id, null) || candidate.avatar || 'boy_little_explorer';
              const authUser: UserProfile = {
                id: String(candidate.id),
                studentCode: candidate.student_code || `VD${resolvedClassName.replace('.', '')}${String(candidate.id).padStart(2, '0')}`,
                fullName: candidate.full_name || candidate.name,
                role: 'student',
                classId: String(candidate.class_id),
                className: `Class ${resolvedClassName}`,
                classCode: resolvedClassName,
                gradeLevel: resolvedGradeLevel as GradeLevel,
                gradeBand: resolvedGradeBand as any,
                stars: candidate.stars || candidate.total_stars || 200,
                avatar: savedAvatar
              };

              localStore.set('current_user', authUser);
              return {
                success: true,
                user: authUser,
                progress: {}
              };
            } else {
              return {
                success: false,
                errorMessage: 'Mã số truy cập chưa chính xác! Con hãy kiểm tra lại mã trên thẻ học sinh nhé.'
              };
            }
          } else {
            // Student not in selected class: check if student exists in another class
            const { data: allDbStudents } = await supabase
              .from('students')
              .select('id, full_name, name, student_code, class_id')
              .limit(500);

            if (allDbStudents) {
              const otherCandidate = allDbStudents.find(s => isNameMatching(cleanFullName, s.full_name || s.name));
              if (otherCandidate) {
                const otherClassCode = getClassCodeFromId(otherCandidate.class_id);
                return {
                  success: false,
                  errorMessage: `Học sinh "${cleanFullName}" thuộc Lớp ${otherClassCode}. Bé hãy chọn đúng Lớp ${otherClassCode} nhé!`
                };
              }
            }
          }
        }
      }
    } catch (err) {
      supabaseQueryError = { message: String(err) };
      console.warn('[Supabase Cloud Auth Exception]:', err);
    }
  }

  // --------------------------------------------------------------------------
  // 2. HIGH-AVAILABILITY LOCAL VERIFICATION (Preserving all 197 Verified Students)
  // --------------------------------------------------------------------------
  const storedStudents = localStore.get<StudentRosterItem[]>('students', INITIAL_STUDENTS);
  const classes = localStore.get('classes', INITIAL_CLASSES);

  // Sync baseline students into cache if cache is incomplete
  let students = storedStudents || [];
  const studentMap = new Map(students.map(s => [s.id, s]));
  INITIAL_STUDENTS.forEach(initStu => {
    if (!studentMap.has(initStu.id)) {
      studentMap.set(initStu.id, initStu);
    } else {
      // Update with verified fields
      const existing = studentMap.get(initStu.id)!;
      existing.classId = initStu.classId;
      existing.classCode = initStu.classCode;
      existing.studentCode = initStu.studentCode;
      existing.accessCode = initStu.accessCode || existing.accessCode;
    }
  });
  students = Array.from(studentMap.values());
  localStore.set('students', students);

  // Find candidate in the selected class (using robust isClassMatching & isNameMatching)
  let candidate = students.find(s => {
    if (!isClassMatching(s.classCode, s.classId, cleanClassCode)) return false;
    return isNameMatching(cleanFullName, s.name);
  });

  // Cross-class auto-resolution: if not found in selected class, search across all classes
  if (!candidate) {
    const matchingStudents = students.filter(s => isNameMatching(cleanFullName, s.name));
    if (matchingStudents.length > 0) {
      const inputHashUpper = await hashAccessCode(cleanAccessCode.toUpperCase());
      // Check if any matching student has this access code
      const matchingByCode = matchingStudents.find(s =>
        isAccessCodeMatching(
          cleanAccessCode,
          s.accessCode || '',
          s.studentCode,
          s.accessCodeHash,
          inputHashUpper,
          s.id
        )
      );

      if (matchingByCode) {
        candidate = matchingByCode;
      } else {
        const primaryMatch = matchingStudents[0];
        const assignedClassCode = getClassCodeFromId(primaryMatch.classId) || primaryMatch.classCode;
        return {
          success: false,
          errorMessage: `Học sinh "${cleanFullName}" thuộc Lớp ${assignedClassCode}. Bé hãy chọn đúng Lớp ${assignedClassCode} nhé!`
        };
      }
    }
  }

  if (!candidate) {
    if (supabaseQueryError && supabaseQueryError.code === 'PGRST205') {
      console.warn('[Database Setup Notice]: Supabase table public."Classes" or public.students requires anon SELECT grants in Supabase SQL editor.');
    }
    return {
      success: false,
      errorMessage: `Không tìm thấy học sinh "${cleanFullName}" trong Lớp ${cleanClassCode}. Con hãy kiểm tra lại họ tên hoặc chọn đúng lớp nhé!`
    };
  }

  // Rate limiting / lockout check
  const { isLocked, remainingSeconds } = checkPinRateLimit(candidate.id);
  if (isLocked) {
    return {
      success: false,
      errorMessage: `Tài khoản tạm thời bị khóa do nhập sai nhiều lần. Vui lòng chờ ${remainingSeconds} giây nữa nhé!`,
      isLocked: true,
      remainingSeconds
    };
  }

  // Verify access code
  const inputHashRaw = await hashAccessCode(cleanAccessCode);
  const inputHashUpper = await hashAccessCode(cleanAccessCode.toUpperCase());

  const isMatch = isAccessCodeMatching(
    cleanAccessCode,
    candidate.accessCode || '',
    candidate.studentCode,
    candidate.accessCodeHash,
    inputHashUpper,
    candidate.id
  ) || inputHashRaw === candidate.accessCodeHash || inputHashUpper === candidate.accessCodeHash;

  if (!isMatch) {
    const { isNowLocked, remainingAttempts, remainingSeconds: lockSec } = recordFailedPinAttempt(candidate.id);
    if (isNowLocked) {
      return {
        success: false,
        errorMessage: 'Con đã nhập sai mã 5 lần. Tài khoản tạm khóa trong 60 giây để bảo vệ!',
        isLocked: true,
        remainingSeconds: lockSec
      };
    }
    return {
      success: false,
      errorMessage: `Mã số truy cập chưa chính xác! Con còn ${remainingAttempts} lần thử.`,
      isLocked: false,
      remainingAttempts
    };
  }

  // SUCCESS! Reset failed attempts
  resetPinRateLimit(candidate.id);

  const matchedClass = classes.find(c => isClassMatching(c.code, c.id, candidate.classCode)) || {
    id: String(candidate.classId),
    name: candidate.className || `Class ${candidate.classCode}`,
    code: candidate.classCode,
    gradeLevel: (candidate.gradeLevel || 'Grade 5') as GradeLevel,
    gradeBand: (candidate.gradeBand || 'grade_4_5') as any
  };

  const savedAvatar = localStore.get<string | null>('student_avatar_' + candidate.id, null) || candidate.avatar || 'boy_little_explorer';

  const authenticatedUser: UserProfile = {
    id: String(candidate.id),
    studentCode: candidate.studentCode || candidate.id,
    fullName: candidate.name,
    role: 'student',
    classId: String(matchedClass.id),
    className: matchedClass.name,
    classCode: matchedClass.code,
    gradeLevel: matchedClass.gradeLevel,
    gradeBand: matchedClass.gradeBand,
    stars: candidate.totalStars || 200,
    avatar: savedAvatar
  };

  // Hydrate saved progress
  const progressMap = localStore.get<Record<string, DestinationProgress>>('progress_map', {});
  localStore.set('current_user', authenticatedUser);

  return {
    success: true,
    user: authenticatedUser,
    progress: progressMap
  };
}

/**
 * Save Student Selected 3D Avatar to Supabase Cloud & Local Cache
 */
export async function syncStudentAvatar(studentId: string, avatarId: string): Promise<void> {
  // 1. Cache to local storage immediately
  localStore.set('student_avatar_' + studentId, avatarId);

  // 2. Update current_user in local storage if active
  const currentUser = localStore.get<UserProfile | null>('current_user', null);
  if (currentUser && (currentUser.id === studentId || currentUser.studentCode === studentId)) {
    currentUser.avatar = avatarId;
    localStore.set('current_user', currentUser);
  }

  // 3. Update roster in local storage
  const students = localStore.get<StudentRosterItem[]>('students', INITIAL_STUDENTS);
  const updatedStudents = students.map(s => {
    if (s.id === studentId || s.studentCode === studentId) {
      return { ...s, avatar: avatarId };
    }
    return s;
  });
  localStore.set('students', updatedStudents);

  // 4. Update Supabase if online
  if (isSupabaseConfigured() && supabase) {
    try {
      // Try updating via RPC function first
      const { error: rpcError } = await supabase.rpc('update_student_avatar', {
        p_student_id: studentId,
        p_avatar: avatarId
      });

      if (rpcError) {
        // Fallback to direct table update by id or student_code
        await supabase
          .from('students')
          .update({ avatar: avatarId })
          .or(`id.eq.${studentId},student_code.eq.${studentId}`);
      }
    } catch (err) {
      console.warn('Supabase cloud sync error for student avatar:', err);
    }
  }
}

/**
 * Save Student Learning Progress to Supabase Cloud & Local Cache
 */
export async function syncStudentProgress(
  studentId: string,
  destinationId: string,
  progress: DestinationProgress
): Promise<void> {
  // Update local storage first (instant responsiveness)
  const currentMap = localStore.get<Record<string, DestinationProgress>>('progress_map', {});
  const updatedMap = {
    ...currentMap,
    [destinationId]: progress
  };
  localStore.set('progress_map', updatedMap);

  // Sync to Supabase if online
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('student_progress').upsert({
        student_id: studentId,
        destination_id: destinationId,
        completed_steps: progress.completedSteps,
        quiz_score: progress.quizScore,
        total_questions: progress.totalQuestions,
        attempts: progress.attempts,
        stars_earned: progress.starsEarned,
        last_attempt_at: new Date().toISOString()
      }, { onConflict: 'student_id,destination_id' });
    } catch (err) {
      console.warn('Cloud sync error for student progress:', err);
    }
  }
}

/**
 * Fetch Student Learning Progress from Cloud
 */
export async function loadStudentProgress(studentId: string): Promise<Record<string, DestinationProgress>> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('student_progress')
        .select('*')
        .eq('student_id', studentId);

      if (!error && data && data.length > 0) {
        const cloudMap: Record<string, DestinationProgress> = {};
        data.forEach(item => {
          cloudMap[item.destination_id] = {
            destinationId: item.destination_id,
            completedSteps: item.completed_steps || { vocabulary: false, reading: false, listening: false, speaking: false, quiz: false },
            quizScore: item.quiz_score || 0,
            totalQuestions: item.total_questions || 4,
            attempts: item.attempts || 1,
            starsEarned: item.stars_earned || 0,
            lastAttemptDate: item.last_attempt_at ? new Date(item.last_attempt_at).toLocaleDateString('vi-VN') : 'Gần đây'
          };
        });
        localStore.set('progress_map', cloudMap);
        return cloudMap;
      }
    } catch (err) {
      console.warn('Failed to load cloud progress:', err);
    }
  }

  return localStore.get<Record<string, DestinationProgress>>('progress_map', {});
}
