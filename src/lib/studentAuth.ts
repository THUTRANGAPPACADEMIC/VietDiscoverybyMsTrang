import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { UserProfile, DestinationProgress, StudentRosterItem, StudentLoginResult, GradeLevel, GradeBand } from '../types';
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

// Strip zero-width chars and normalize spaces
export function cleanNameString(str: string): string {
  if (!str) return '';
  return str
    .replace(/[\u200B-\u200D\uFEFF\u00A0\u180E]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// Normalize Vietnamese name for flexible, tolerant matching
export function normalizeVietnameseName(str: string): string {
  return cleanNameString(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/\s+/g, ' ');
}

// Resilient Vietnamese name comparison (handles accents, no accents, NFC/NFD, and case)
export function isNameMatching(inputName: string, candidateName: string): boolean {
  if (!inputName || !candidateName) return false;
  const cleanInput = cleanNameString(inputName);
  const cleanCandidate = cleanNameString(candidateName);

  // 1. Direct case-insensitive match
  if (cleanInput.toLowerCase() === cleanCandidate.toLowerCase()) return true;

  // 2. Unicode normalized (NFC and NFD)
  if (cleanInput.toLowerCase().normalize('NFC') === cleanCandidate.toLowerCase().normalize('NFC')) return true;
  if (cleanInput.toLowerCase().normalize('NFD') === cleanCandidate.toLowerCase().normalize('NFD')) return true;

  // 3. Diacritic-stripped normalization (e.g. "Vo Anh Thu" vs "Võ Anh Thư")
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

/**
 * Resolves exact educational grade level and grade band from verified user data.
 * Priority rules:
 * 1. Verified gradeLevel from Supabase ("Grade 4" -> Grade 4 / grade_4, "Grade 5" -> Grade 5 / grade_5, "Grade 2" -> Grade 2 / grade_2)
 * 2. Class code inspection:
 *    - 4.1, 4.6 -> Grade 4 (grade_4)
 *    - 5.2, 5.6 -> Grade 5 (grade_5)
 *    - 2.2      -> Grade 2 (grade_2)
 * 3. Class ID matching (1: 2.2, 2: 4.1, 3: 4.6, 4: 5.2, 5: 5.6)
 */
export function resolveStudentGrade(user?: UserProfile | null): {
  gradeNum: 1 | 2 | 3 | 4 | 5;
  gradeLevel: GradeLevel;
  gradeBand: GradeBand;
} {
  if (!user) {
    return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };
  }

  // 1. Priority: check verified gradeLevel from Supabase
  if (user.gradeLevel) {
    const m = String(user.gradeLevel).match(/[1-5]/);
    if (m) {
      const num = parseInt(m[0], 10) as 1 | 2 | 3 | 4 | 5;
      return {
        gradeNum: num,
        gradeLevel: `Grade ${num}` as GradeLevel,
        gradeBand: `grade_${num}` as GradeBand
      };
    }
  }

  // 2. Class code / class name inspection
  const rawClass = (user.classCode || user.className || '').trim().toLowerCase();
  if (rawClass.includes('4.1') || rawClass.includes('4.6') || rawClass.startsWith('4')) {
    return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };
  }
  if (rawClass.includes('5.2') || rawClass.includes('5.6') || rawClass.startsWith('5')) {
    return { gradeNum: 5, gradeLevel: 'Grade 5', gradeBand: 'grade_5' };
  }
  if (rawClass.includes('2.2') || rawClass.startsWith('2')) {
    return { gradeNum: 2, gradeLevel: 'Grade 2', gradeBand: 'grade_2' };
  }
  if (rawClass.startsWith('1')) {
    return { gradeNum: 1, gradeLevel: 'Grade 1', gradeBand: 'grade_1' };
  }
  if (rawClass.startsWith('3')) {
    return { gradeNum: 3, gradeLevel: 'Grade 3', gradeBand: 'grade_3' };
  }

  // 3. Fallback based on database classId
  if (user.classId === '2' || user.classId === '3') {
    return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };
  }
  if (user.classId === '4' || user.classId === '5') {
    return { gradeNum: 5, gradeLevel: 'Grade 5', gradeBand: 'grade_5' };
  }
  if (user.classId === '1') {
    return { gradeNum: 2, gradeLevel: 'Grade 2', gradeBand: 'grade_2' };
  }

  // 4. Fallback based on gradeBand if defined
  if (user.gradeBand === 'grade_1') return { gradeNum: 1, gradeLevel: 'Grade 1', gradeBand: 'grade_1' };
  if (user.gradeBand === 'grade_2') return { gradeNum: 2, gradeLevel: 'Grade 2', gradeBand: 'grade_2' };
  if (user.gradeBand === 'grade_3') return { gradeNum: 3, gradeLevel: 'Grade 3', gradeBand: 'grade_3' };
  if (user.gradeBand === 'grade_4') return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };
  if (user.gradeBand === 'grade_5') return { gradeNum: 5, gradeLevel: 'Grade 5', gradeBand: 'grade_5' };
  if (user.gradeBand === 'grade_1_2') return { gradeNum: 2, gradeLevel: 'Grade 2', gradeBand: 'grade_2' };
  if (user.gradeBand === 'grade_4_5') return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };

  return { gradeNum: 4, gradeLevel: 'Grade 4', gradeBand: 'grade_4' };
}

// Strict Student Access Code matching (exact match on real access code or student code)
export function isAccessCodeMatching(
  inputCode: string,
  candidateAccessCode: string,
  candidateStudentCode?: string,
  candidateHash?: string,
  inputHash?: string
): boolean {
  if (!inputCode) return false;
  const cleanInput = inputCode.trim().toUpperCase();
  const cleanAccess = (candidateAccessCode || '').trim().toUpperCase();
  const cleanStudent = (candidateStudentCode || '').trim().toUpperCase();

  // 1. Direct exact string match (case-insensitive)
  if (cleanInput === cleanAccess || cleanInput === cleanStudent) return true;

  // 2. Exact cryptographic hash match
  if (inputHash && candidateHash && inputHash === candidateHash) return true;

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

  // --------------------------------------------------------------------------
  // 1. SUPABASE CLOUD AUTHENTICATION VIA RPC (Zero Credential Leakage)
  // --------------------------------------------------------------------------
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data: rpcData, error: rpcError } = await supabase.rpc('verify_student_login', {
        p_full_name: cleanFullName.normalize('NFC'),
        p_class_code: cleanClassCode,
        p_access_code: cleanAccessCode
      });

      if (rpcError) {
        console.warn('[Supabase Student RPC Error]:', rpcError.code, rpcError.message);

        // Accurate and honest error messages based on database state
        if (rpcError.code === 'PGRST202') {
          return {
            success: false,
            errorMessage: 'Máy chủ Supabase chưa được cài đặt hàm xác thực verify_student_login. Vui lòng thông báo Cô Trang chạy file SQL migration.'
          };
        }

        return {
          success: false,
          errorMessage: `Không thể kết nối đến máy chủ xác thực (${rpcError.message || rpcError.code}). Vui lòng kiểm tra lại đường truyền mạng.`
        };
      }

      if (rpcData) {
        if (rpcData.success && rpcData.user) {
          // Normalize educational grade level & grade band from verified Supabase data
          const resolvedGrade = resolveStudentGrade(rpcData.user);
          rpcData.user.gradeLevel = resolvedGrade.gradeLevel;
          rpcData.user.gradeBand = resolvedGrade.gradeBand;

          // Store cryptographic session token (256-bit entropy)
          if (rpcData.sessionToken) {
            localStore.set('session_token', rpcData.sessionToken);
          }

          // Restore student custom avatar if locally chosen
          const localAvatar = localStore.get<string | null>('student_avatar_' + rpcData.user.id, null);
          if (localAvatar) {
            rpcData.user.avatar = localAvatar;
          }

          localStore.set('current_user', rpcData.user);

          // Restore genuine saved progress from database (or empty if new)
          const rawProgress = (rpcData.progress && typeof rpcData.progress === 'object') ? rpcData.progress : {};
          const studentKey = `progress_map_${rpcData.user.id}`;
          const cachedLocal = localStore.get<Record<string, DestinationProgress>>(studentKey, {});
          const cleanProgress: Record<string, DestinationProgress> = { ...cachedLocal };
          for (const [key, val] of Object.entries(rawProgress as Record<string, DestinationProgress>)) {
            const localVal = cachedLocal[key];
            const mergedPlacedLandmarks = (val.completedSteps?.placedLandmarks && val.completedSteps.placedLandmarks.length > 0)
              ? val.completedSteps.placedLandmarks
              : (localVal?.completedSteps?.placedLandmarks || []);
            cleanProgress[key] = {
              ...val,
              starsEarned: typeof val.starsEarned === 'number' ? val.starsEarned : (localVal?.starsEarned || 0),
              completedSteps: {
                ...localVal?.completedSteps,
                ...val.completedSteps,
                placedLandmarks: mergedPlacedLandmarks
              }
            };
          }
          localStore.set('progress_map', cleanProgress);
          localStore.set(studentKey, cleanProgress);

          return {
            success: true,
            user: rpcData.user,
            progress: cleanProgress
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

      return {
        success: false,
        errorMessage: 'Máy chủ không phản hồi kết quả xác thực. Vui lòng thử lại sau.'
      };
    } catch (err: any) {
      console.warn('[Supabase Cloud Auth Exception]:', err);
      return {
        success: false,
        errorMessage: `Lỗi kết nối máy chủ xác thực: ${err?.message || 'Không thể kết nối mạng'}.`
      };
    }
  }

  // --------------------------------------------------------------------------
  // 2. OFFLINE ENVIRONMENT NOTICE (No Supabase Configured)
  // --------------------------------------------------------------------------
  // In production, Supabase contains all 182 real student records.
  // When offline or unconfigured, notify the user instead of using fake demo accounts.
  return {
    success: false,
    errorMessage: 'Hệ thống chưa kết nối cơ sở dữ liệu Supabase. Vui lòng kiểm tra cấu hình mạng hoặc liên hệ Cô Trang.'
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
      const sessionToken = localStore.get<string | null>('session_token', null);
      if (sessionToken) {
        // Authenticated Session Update
        await supabase.rpc('update_student_avatar', {
          p_session_token: sessionToken,
          p_avatar: avatarId
        });
      }
    } catch (err) {
      console.warn('Supabase cloud sync error for student avatar:', err);
    }
  }
}

/**
 * Save Student Learning Progress to Supabase Cloud via Session-Authenticated RPC & Local Cache
 */
export async function syncStudentProgress(
  studentId: string,
  destinationId: string,
  progress: DestinationProgress
): Promise<{ success: boolean; isCloudSynced: boolean; serverTotalStars?: number; verifiedStars?: number }> {
  // Update local storage first (instant responsiveness), scoped by studentId
  const studentKey = studentId ? `progress_map_${studentId}` : 'progress_map';
  const currentMap = localStore.get<Record<string, DestinationProgress>>(studentKey, {});
  const updatedMap = {
    ...currentMap,
    [destinationId]: progress
  };
  localStore.set(studentKey, updatedMap);
  localStore.set('progress_map', updatedMap);

  let isCloudSynced = false;
  let serverTotalStars: number | undefined;
  let verifiedStars: number | undefined;

  // Sync to Supabase using Authenticated Session RPC
  if (isSupabaseConfigured() && supabase) {
    try {
      const sessionToken = localStore.get<string | null>('session_token', null);
      if (sessionToken) {
        // Authenticated Session Update via RPC (Server-side anti-cheat and validation)
        const { data, error } = await supabase.rpc('save_student_progress', {
          p_session_token: sessionToken,
          p_destination_id: destinationId,
          p_completed_steps: progress.completedSteps,
          p_quiz_score: progress.quizScore,
          p_total_questions: progress.totalQuestions,
          p_attempts: progress.attempts,
          p_stars_earned: progress.starsEarned
        });
        if (!error && data?.success) {
          isCloudSynced = true;
          if (typeof data.totalStars === 'number') {
            serverTotalStars = data.totalStars;
          }
          if (typeof data.verifiedStars === 'number') {
            const vStars: number = data.verifiedStars;
            verifiedStars = vStars;
            if (updatedMap[destinationId].starsEarned !== vStars) {
              updatedMap[destinationId] = {
                ...updatedMap[destinationId],
                starsEarned: vStars
              };
              localStore.set(studentKey, updatedMap);
              localStore.set('progress_map', updatedMap);
            }
          }
        }
      } else {
        console.warn('[Security]: Không có phiên học sinh (sessionToken). Tiến trình học tập được lưu tại bộ nhớ máy.');
      }
    } catch (err) {
      console.warn('Cloud sync error for student progress:', err);
    }
  }

  return { success: true, isCloudSynced, serverTotalStars, verifiedStars };
}

/**
 * Secure Student Logout - Invalidate Session Server-Side & Clear Local Storage
 */
export async function logoutStudent(studentId?: string): Promise<void> {
  const sessionToken = localStore.get<string | null>('session_token', null);
  if (sessionToken && isSupabaseConfigured() && supabase) {
    try {
      await supabase.rpc('logout_student', { p_session_token: sessionToken });
    } catch (err) {
      // Session revocation error ignored on local logout
    }
  }
  localStore.remove('session_token');
  localStore.remove('current_user');
  localStore.remove('progress_map');
  if (studentId) {
    localStore.remove(`progress_map_${studentId}`);
  }
}

/**
 * Fetch Student Learning Progress via Authenticated Session Token
 */
export async function loadStudentProgress(studentId: string): Promise<{ data: Record<string, DestinationProgress>; isCloudSynced: boolean }> {
  const studentKey = studentId ? `progress_map_${studentId}` : 'progress_map';
  if (isSupabaseConfigured() && supabase) {
    try {
      const sessionToken = localStore.get<string | null>('session_token', null);
      if (sessionToken) {
        const { data, error } = await supabase.rpc('get_student_progress', {
          p_session_token: sessionToken
        });

        if (!error && data && typeof data === 'object') {
          const progressData = data as Record<string, DestinationProgress>;
          const cachedLocal = localStore.get<Record<string, DestinationProgress>>(studentKey, {});
          const merged: Record<string, DestinationProgress> = { ...cachedLocal };
          for (const [key, val] of Object.entries(progressData)) {
            const localVal = cachedLocal[key];
            const mergedPlacedLandmarks = (val.completedSteps?.placedLandmarks && val.completedSteps.placedLandmarks.length > 0)
              ? val.completedSteps.placedLandmarks
              : (localVal?.completedSteps?.placedLandmarks || []);
            merged[key] = {
              ...val,
              starsEarned: typeof val.starsEarned === 'number' ? val.starsEarned : (localVal?.starsEarned || 0),
              completedSteps: {
                ...localVal?.completedSteps,
                ...val.completedSteps,
                placedLandmarks: mergedPlacedLandmarks
              }
            };
          }
          localStore.set(studentKey, merged);
          localStore.set('progress_map', merged);
          return { data: merged, isCloudSynced: true };
        }
      }
    } catch (err) {
      console.warn('Failed to load cloud progress via session token:', err);
    }
  }

  const fallback = localStore.get<Record<string, DestinationProgress>>(
    studentKey,
    localStore.get<Record<string, DestinationProgress>>('progress_map', {})
  );
  return { data: fallback, isCloudSynced: false };
}

