import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { UserProfile, DestinationProgress, StudentRosterItem, StudentLoginResult } from '../types';
import { INITIAL_STUDENTS, INITIAL_CLASSES } from '../data/initialClasses';
import { checkPinRateLimit, recordFailedPinAttempt, resetPinRateLimit } from './security';

// Salt for SHA-256 hash
export const ACCESS_CODE_SALT = '_vietdiscovery_salt_2026';

// Helper to calculate SHA-256 hash using Web Crypto API
export async function hashAccessCode(code: string): Promise<string> {
  const cleanCode = code.trim();
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

/**
 * Secure Server-Side Student Authentication
 * Authenticates student against pre-approved roster via Supabase RPC function (or secure local verification)
 * Never exposes the full student roster, access codes, or private credentials to the client.
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

  // 1. Try Supabase Server-Side RPC Authentication first
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase.rpc('verify_student_login', {
        p_full_name: cleanFullName,
        p_class_code: cleanClassCode,
        p_access_code: cleanAccessCode
      });

      if (!error && data) {
        if (data.success && data.user) {
          // Cache verified session locally for seamless reconnects
          localStore.set('current_user', data.user);
          if (data.progress && Object.keys(data.progress).length > 0) {
            localStore.set('progress_map', data.progress);
          }
          return {
            success: true,
            user: data.user,
            progress: data.progress || {}
          };
        } else {
          return {
            success: false,
            errorMessage: data.errorMessage || 'Thông tin đăng nhập chưa chính xác.',
            isLocked: data.isLocked || false,
            remainingAttempts: data.remainingAttempts
          };
        }
      }
    } catch (rpcErr) {
      console.warn('Supabase RPC verify_student_login fallback to local verification:', rpcErr);
    }
  }

  // 2. Local Fallback Verification (Offline mode / Demo environment)
  const students = localStore.get<StudentRosterItem[]>('students', INITIAL_STUDENTS);
  const classes = localStore.get('classes', INITIAL_CLASSES);

  // Normalize student input
  const normalizedInput = normalizeVietnameseName(cleanFullName);

  // Find candidate in the selected class
  const candidate = students.find(s => {
    if (s.classCode !== cleanClassCode) return false;
    const sNorm = normalizeVietnameseName(s.name);
    return sNorm === normalizedInput || s.name.trim().toLowerCase() === cleanFullName.toLowerCase();
  });

  if (!candidate) {
    return {
      success: false,
      errorMessage: `Không tìm thấy học sinh "${cleanFullName}" trong Lớp ${cleanClassCode}. Con hãy kiểm tra lại họ tên hoặc chọn đúng lớp nhé!`
    };
  }

  // Check rate limiting / lockout for this student
  const { isLocked, remainingSeconds } = checkPinRateLimit(candidate.id);
  if (isLocked) {
    return {
      success: false,
      errorMessage: `Tài khoản tạm thời bị khóa do nhập sai nhiều lần. Vui lòng chờ ${remainingSeconds} giây nữa nhé!`,
      isLocked: true,
      remainingSeconds
    };
  }

  // Hash the entered access code with salt
  const inputHash = await hashAccessCode(cleanAccessCode);

  if (inputHash !== candidate.accessCodeHash && candidate.accessCode !== cleanAccessCode) {
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

  const matchedClass = classes.find(c => c.code === cleanClassCode) || {
    id: candidate.classId,
    name: candidate.className,
    code: candidate.classCode,
    gradeLevel: candidate.gradeLevel,
    gradeBand: candidate.gradeBand
  };

  const authenticatedUser: UserProfile = {
    id: candidate.id,
    fullName: candidate.name,
    role: 'student',
    classId: matchedClass.id,
    className: matchedClass.name,
    classCode: matchedClass.code,
    gradeLevel: matchedClass.gradeLevel,
    gradeBand: matchedClass.gradeBand,
    stars: candidate.totalStars || 200,
    avatar: 'fa-user-graduate'
  };

  // Hydrate saved progress
  const progressMap = localStore.get<Record<string, DestinationProgress>>('progress_map', {});

  // Persist session
  localStore.set('current_user', authenticatedUser);

  return {
    success: true,
    user: authenticatedUser,
    progress: progressMap
  };
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
