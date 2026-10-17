import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { StudentRosterItem, DestinationProgress } from '../types';
import { INITIAL_STUDENTS } from '../data/initialClasses';

export interface TeacherProgressLoadResult {
  students: StudentRosterItem[];
  dataSource: 'supabase_cloud' | 'local_verified' | 'unauthorized_rls';
  isCloudSynced: boolean;
  errorMessage?: string;
  cloudProgressCount: number;
}

/**
 * Cleanly compute genuine learning progress metrics from destination progress entries
 */
function computeStudentMetrics(progressMap: Record<string, DestinationProgress>): {
  completedDestinations: number;
  totalStars: number;
  averageScore: number;
  lastActive: string;
} {
  const entries = Object.values(progressMap || {});
  if (entries.length === 0) {
    return {
      completedDestinations: 0,
      totalStars: 0,
      averageScore: 0,
      lastActive: 'Chưa có hoạt động'
    };
  }

  let completedCount = 0;
  let totalStars = 0;
  let scoreSum = 0;
  let quizCount = 0;
  let latestDate: string = 'Chưa có hoạt động';

  for (const entry of entries) {
    const stars = entry.starsEarned || 0;
    totalStars += stars;

    const isDone = stars > 0 || 
      (entry.completedSteps && (
        entry.completedSteps.quiz || 
        entry.completedSteps.vocabulary || 
        entry.completedSteps.reading || 
        (entry.completedSteps.placedLandmarks && entry.completedSteps.placedLandmarks.length > 0)
      ));

    if (isDone) {
      completedCount++;
    }

    if (typeof entry.quizScore === 'number' && entry.quizScore > 0) {
      scoreSum += entry.quizScore;
      quizCount++;
    }

    if (entry.lastAttemptDate && entry.lastAttemptDate !== 'Chưa có hoạt động') {
      latestDate = entry.lastAttemptDate;
    }
  }

  const averageScore = quizCount > 0 ? Math.round(scoreSum / quizCount) : 0;

  return {
    completedDestinations: completedCount,
    totalStars,
    averageScore,
    lastActive: latestDate
  };
}

/**
 * Load authentic student roster and progress for Teacher Dashboard
 * Strictly respects RLS; never uses service_role key; never creates fake data.
 */
export async function loadAuthenticTeacherProgress(
  baselineStudents: StudentRosterItem[] = INITIAL_STUDENTS
): Promise<TeacherProgressLoadResult> {
  let cloudProgressMapByStudent: Record<string, Record<string, DestinationProgress>> = {};
  let isCloudSuccess = false;
  let rlsErrorMsg: string | undefined = undefined;
  let cloudCount = 0;

  // 1. Attempt to fetch authentic records from Supabase TEST
  if (isSupabaseConfigured() && supabase) {
    try {
      // Query student_progress table with current authenticated session
      const { data: progressRows, error: progressErr } = await supabase
        .from('student_progress')
        .select('student_id, destination_id, completed_steps, quiz_score, stars_earned, attempts, last_attempt_at, total_questions');

      if (progressErr) {
        console.warn('[TeacherProgressService] Supabase student_progress query:', progressErr.code, progressErr.message);
        if (progressErr.code === '42501' || progressErr.message.includes('permission denied')) {
          rlsErrorMsg = 'Máy chủ Supabase TEST đang kích hoạt RLS và chưa có Policy cho phép đọc bảng student_progress đối với phiên hiện tại.';
        } else {
          rlsErrorMsg = `Không thể truy vấn bảng student_progress (${progressErr.message}).`;
        }
      } else if (progressRows && Array.isArray(progressRows)) {
        isCloudSuccess = true;
        cloudCount = progressRows.length;
        for (const row of progressRows) {
          const sId = String(row.student_id);
          if (!cloudProgressMapByStudent[sId]) {
            cloudProgressMapByStudent[sId] = {};
          }
          cloudProgressMapByStudent[sId][row.destination_id] = {
            destinationId: row.destination_id,
            completedSteps: row.completed_steps || {},
            quizScore: row.quiz_score || 0,
            totalQuestions: row.total_questions || 4,
            starsEarned: row.stars_earned || 0,
            attempts: row.attempts || 1,
            lastAttemptDate: row.last_attempt_at ? new Date(row.last_attempt_at).toLocaleDateString('vi-VN') : 'Vừa xong'
          };
        }
      }
    } catch (err: any) {
      console.warn('[TeacherProgressService] Exception querying Supabase:', err);
      rlsErrorMsg = err?.message || 'Lỗi kết nối máy chủ Supabase';
    }
  }

  // 2. Map verified progress onto authentic student roster
  // Zero fake data: if a student has no saved progress, all metrics remain strictly 0
  const reconciledStudents: StudentRosterItem[] = baselineStudents.map(stu => {
    // Check cloud progress first (matching both numeric ID and code)
    const rawNumericId = stu.id.replace(/[^0-9]/g, '');
    const cloudProgress = cloudProgressMapByStudent[stu.id] || 
                          cloudProgressMapByStudent[stu.studentCode] || 
                          (rawNumericId ? cloudProgressMapByStudent[rawNumericId] : undefined);

    // Also check verified student-scoped progress map in localStore (saved by real student session)
    const localProgressKey = `progress_map_${stu.id}`;
    const localProgress = localStore.get<Record<string, DestinationProgress> | null>(localProgressKey, null);

    // Merge genuine progress (cloud takes precedence, supplemented by local verified attempts)
    const mergedProgress: Record<string, DestinationProgress> = {
      ...(localProgress || {}),
      ...(cloudProgress || {})
    };

    const hasAnyProgress = Object.keys(mergedProgress).length > 0;

    if (hasAnyProgress) {
      const metrics = computeStudentMetrics(mergedProgress);
      return {
        ...stu,
        completedDestinations: metrics.completedDestinations,
        totalStars: metrics.totalStars,
        averageScore: metrics.averageScore,
        lastActive: metrics.lastActive,
        status: metrics.totalStars > 0 ? 'online' : 'offline'
      };
    }

    // Authentic zero baseline: No fabricated scores or stars
    return {
      ...stu,
      completedDestinations: 0,
      totalStars: 0,
      averageScore: 0,
      lastActive: 'Chưa có hoạt động',
      status: 'offline'
    };
  });

  return {
    students: reconciledStudents,
    dataSource: isCloudSuccess ? 'supabase_cloud' : rlsErrorMsg ? 'unauthorized_rls' : 'local_verified',
    isCloudSynced: isCloudSuccess,
    errorMessage: rlsErrorMsg,
    cloudProgressCount: cloudCount
  };
}
