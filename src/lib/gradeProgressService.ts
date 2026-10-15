// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE PATHWAYS PROGRESS & SUPABASE SERVICE
// Cloud synchronization & resilient local persistence for student grade progress
// ==============================================================================

import { supabase, isSupabaseConfigured, localStore } from './supabase';
import { GradeNumber } from '../data/gradePathwaysData';

export interface StudentGradeProgressRecord {
  studentId: string;
  gradeNum: GradeNumber;
  classCode?: string;
  completedLessons: string[];
  completedStations: number[];
  gamesPlayedCount: number;
  totalStarsEarned: number;
  averageAccuracyPercent: number;
  unlockedBadgeIds: string[];
  lastActiveAt: string;
}

export interface GameAttemptRecord {
  id?: string;
  studentId: string;
  gradeNum: GradeNumber;
  gameType: string; // 'drag_drop' | 'listen_choose' | 'match_pairs' | 'word_puzzle' | 'sentence_builder' | 'multiple_choice' | 'adventure_challenge'
  score: number;
  maxScore: number;
  starsEarned: number;
  completedAt: string;
}

const getStorageKey = (studentId: string, gradeNum: GradeNumber): string => {
  return `grade_progress_${studentId || 'guest'}_g${gradeNum}`;
};

const getBadgeStorageKey = (studentId: string, gradeNum: GradeNumber): string => {
  return `grade_badges_${studentId || 'guest'}_g${gradeNum}`;
};

const getGameAttemptsKey = (studentId: string, gradeNum: GradeNumber): string => {
  return `grade_game_attempts_${studentId || 'guest'}_g${gradeNum}`;
};

/**
 * Load student progress for a specific grade
 */
export async function loadGradeProgress(
  studentId: string,
  gradeNum: GradeNumber
): Promise<StudentGradeProgressRecord> {
  const defaultRecord: StudentGradeProgressRecord = {
    studentId,
    gradeNum,
    completedLessons: [],
    completedStations: [1], // Station 1 unlocked by default
    gamesPlayedCount: 0,
    totalStarsEarned: 0,
    averageAccuracyPercent: 0,
    unlockedBadgeIds: [],
    lastActiveAt: new Date().toISOString()
  };

  // 1. Try local cache first for instant responsiveness
  const cached = localStore.get<StudentGradeProgressRecord | null>(getStorageKey(studentId, gradeNum), null);
  let result = cached || defaultRecord;

  // 2. Try Supabase cloud sync if configured
  if (isSupabaseConfigured() && supabase && studentId && studentId !== 'guest') {
    try {
      const { data, error } = await supabase
        .from('student_grade_progress')
        .select('*')
        .eq('student_id', studentId)
        .eq('grade_num', gradeNum)
        .maybeSingle();

      if (!error && data) {
        result = {
          studentId: data.student_id,
          gradeNum: data.grade_num as GradeNumber,
          classCode: data.class_code,
          completedLessons: data.completed_lessons || [],
          completedStations: data.completed_stations || [1],
          gamesPlayedCount: data.games_played_count || 0,
          totalStarsEarned: data.total_stars_earned || 0,
          averageAccuracyPercent: data.average_accuracy || 0,
          unlockedBadgeIds: data.unlocked_badges || [],
          lastActiveAt: data.last_active_at || new Date().toISOString()
        };
        // Update local cache with cloud state
        localStore.set(getStorageKey(studentId, gradeNum), result);
      }
    } catch (err) {
      console.warn(`[Supabase] Cloud load fallback to local cache for Grade ${gradeNum}:`, err);
    }
  }

  return result;
}

/**
 * Save updated student progress to local storage and Supabase
 */
export async function saveGradeProgress(
  progress: StudentGradeProgressRecord
): Promise<void> {
  // Always persist to local cache first
  localStore.set(getStorageKey(progress.studentId, progress.gradeNum), progress);

  // Sync to Supabase if configured
  if (isSupabaseConfigured() && supabase && progress.studentId && progress.studentId !== 'guest') {
    try {
      await supabase
        .from('student_grade_progress')
        .upsert({
          student_id: progress.studentId,
          grade_num: progress.gradeNum,
          class_code: progress.classCode,
          completed_lessons: progress.completedLessons,
          completed_stations: progress.completedStations,
          games_played_count: progress.gamesPlayedCount,
          total_stars_earned: progress.totalStarsEarned,
          average_accuracy: progress.averageAccuracyPercent,
          unlocked_badges: progress.unlockedBadgeIds,
          last_active_at: new Date().toISOString()
        }, { onConflict: 'student_id,grade_num' });
    } catch (err) {
      console.warn(`[Supabase] Cloud save fallback for Grade ${progress.gradeNum}:`, err);
    }
  }
}

/**
 * Record a game attempt and update student scores
 */
export async function recordGameAttempt(
  attempt: GameAttemptRecord,
  classCode?: string
): Promise<StudentGradeProgressRecord> {
  // 1. Save game attempt to local log
  const attemptsKey = getGameAttemptsKey(attempt.studentId, attempt.gradeNum);
  const attempts = localStore.get<GameAttemptRecord[]>(attemptsKey, []);
  attempts.push(attempt);
  localStore.set(attemptsKey, attempts);

  // 2. Fetch existing grade progress
  const current = await loadGradeProgress(attempt.studentId, attempt.gradeNum);

  // Calculate new accuracy
  const newGamesCount = current.gamesPlayedCount + 1;
  const thisAccuracy = attempt.maxScore > 0 ? (attempt.score / attempt.maxScore) * 100 : 100;
  const updatedAccuracy = Math.round(
    ((current.averageAccuracyPercent * current.gamesPlayedCount) + thisAccuracy) / newGamesCount
  );

  const updatedProgress: StudentGradeProgressRecord = {
    ...current,
    classCode: classCode || current.classCode,
    gamesPlayedCount: newGamesCount,
    totalStarsEarned: current.totalStarsEarned + attempt.starsEarned,
    averageAccuracyPercent: updatedAccuracy,
    lastActiveAt: new Date().toISOString()
  };

  // If student earned stars, maybe unlock next station in learning journey!
  const stationToUnlock = Math.min(5, Math.floor(updatedProgress.totalStarsEarned / 30) + 1);
  if (!updatedProgress.completedStations.includes(stationToUnlock)) {
    updatedProgress.completedStations = [...updatedProgress.completedStations, stationToUnlock].sort();
  }

  await saveGradeProgress(updatedProgress);

  // 3. Sync attempt to Supabase if configured
  if (isSupabaseConfigured() && supabase && attempt.studentId && attempt.studentId !== 'guest') {
    try {
      await supabase.from('student_game_attempts').insert({
        student_id: attempt.studentId,
        grade_num: attempt.gradeNum,
        game_type: attempt.gameType,
        score: attempt.score,
        max_score: attempt.maxScore,
        stars_earned: attempt.starsEarned,
        completed_at: attempt.completedAt
      });
    } catch (err) {
      console.warn('[Supabase] Game attempt cloud insert fallback:', err);
    }
  }

  return updatedProgress;
}

/**
 * Mark a lesson as completed
 */
export async function completeGradeLesson(
  studentId: string,
  gradeNum: GradeNumber,
  lessonId: string,
  starsAwarded: number,
  classCode?: string
): Promise<StudentGradeProgressRecord> {
  const current = await loadGradeProgress(studentId, gradeNum);
  const alreadyCompleted = current.completedLessons.includes(lessonId);

  const updatedLessons = alreadyCompleted 
    ? current.completedLessons 
    : [...current.completedLessons, lessonId];

  const updatedStations = current.completedStations.length < 5
    ? [...new Set([...current.completedStations, current.completedStations.length + 1])]
    : current.completedStations;

  const updatedProgress: StudentGradeProgressRecord = {
    ...current,
    classCode: classCode || current.classCode,
    completedLessons: updatedLessons,
    completedStations: updatedStations,
    totalStarsEarned: current.totalStarsEarned + (alreadyCompleted ? Math.floor(starsAwarded / 2) : starsAwarded),
    lastActiveAt: new Date().toISOString()
  };

  await saveGradeProgress(updatedProgress);
  return updatedProgress;
}

/**
 * Unlock an achievement badge
 */
export async function unlockGradeBadge(
  studentId: string,
  gradeNum: GradeNumber,
  badgeId: string,
  starsValue: number,
  classCode?: string
): Promise<{ unlocked: boolean; progress: StudentGradeProgressRecord }> {
  const current = await loadGradeProgress(studentId, gradeNum);

  if (current.unlockedBadgeIds.includes(badgeId)) {
    return { unlocked: false, progress: current };
  }

  const updatedBadges = [...current.unlockedBadgeIds, badgeId];
  const updatedProgress: StudentGradeProgressRecord = {
    ...current,
    classCode: classCode || current.classCode,
    unlockedBadgeIds: updatedBadges,
    totalStarsEarned: current.totalStarsEarned + starsValue,
    lastActiveAt: new Date().toISOString()
  };

  await saveGradeProgress(updatedProgress);

  // Sync to Supabase student_grade_badges table if online
  if (isSupabaseConfigured() && supabase && studentId && studentId !== 'guest') {
    try {
      await supabase.from('student_grade_badges').insert({
        student_id: studentId,
        grade_num: gradeNum,
        badge_id: badgeId,
        unlocked_at: new Date().toISOString()
      });
    } catch (err) {
      console.warn('[Supabase] Badge cloud unlock fallback:', err);
    }
  }

  return { unlocked: true, progress: updatedProgress };
}
