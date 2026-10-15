// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — SMART REPLAY & ADAPTIVE DIFFICULTY ENGINE
// Intelligent Question Randomization, Anti-Repetition, Spaced Revision & Analytics
// ==============================================================================

import { GradeNumber, AdaptiveGameQuestion, getQuestionsByGame } from '../data/adaptiveGameQuestions';
import { localStore, supabase, isSupabaseConfigured } from './supabase';

export type GameDifficulty = 'easy' | 'medium' | 'challenge';

export interface StudentGameHistory {
  studentId: string;
  gameType: string;
  gradeNum: GradeNumber;
  answeredQuestionIds: string[];
  incorrectQuestionIds: string[];
  masteredQuestionIds: string[];
  attemptCount: number;
  consecutiveCorrectCount: number;
  recommendedDifficulty: GameDifficulty;
  lastPlayedAt: string;
}

export interface GeneratedQuestionSet {
  questions: AdaptiveGameQuestion[];
  isRevisionMode: boolean;
  totalPoolSize: number;
  unusedCount: number;
  revisionCount: number;
  difficulty: GameDifficulty;
  attemptNumber: number;
}

// Utility: Fisher-Yates array shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const getHistoryKey = (studentId: string, gameType: string): string => {
  return `game_hist_${studentId || 'guest'}_${gameType}`;
};

/**
 * Load student history for a specific game
 */
export function loadStudentGameHistory(
  studentId: string,
  gameType: string,
  gradeNum: GradeNumber
): StudentGameHistory {
  const defaultHist: StudentGameHistory = {
    studentId,
    gameType,
    gradeNum,
    answeredQuestionIds: [],
    incorrectQuestionIds: [],
    masteredQuestionIds: [],
    attemptCount: 0,
    consecutiveCorrectCount: 0,
    recommendedDifficulty: 'easy',
    lastPlayedAt: new Date().toISOString()
  };

  return localStore.get<StudentGameHistory>(getHistoryKey(studentId, gameType), defaultHist);
}

/**
 * Save student game history locally & cloud sync
 */
export async function saveStudentGameHistory(hist: StudentGameHistory): Promise<void> {
  localStore.set(getHistoryKey(hist.studentId, hist.gameType), hist);

  if (isSupabaseConfigured() && supabase && hist.studentId && hist.studentId !== 'guest') {
    try {
      await supabase.from('student_game_history').upsert({
        student_id: hist.studentId,
        game_type: hist.gameType,
        grade_num: hist.gradeNum,
        attempt_count: hist.attemptCount,
        recommended_difficulty: hist.recommendedDifficulty,
        answered_count: hist.answeredQuestionIds.length,
        mastered_count: hist.masteredQuestionIds.length,
        last_played_at: new Date().toISOString()
      }, { onConflict: 'student_id,game_type' });
    } catch (err) {
      // Offline fallback
    }
  }
}

/**
 * Smart Replay Question Set Generator
 * Selects an intelligent, randomized, non-repetitive set of questions
 * incorporating previously incorrect items for spaced revision.
 */
export function generateSmartQuestionSet(
  studentId: string,
  gameType: string,
  gradeNum: GradeNumber,
  options?: {
    batchSize?: number;
    forceDifficulty?: GameDifficulty;
  }
): GeneratedQuestionSet {
  const allPool = getQuestionsByGame(gameType, gradeNum);
  const hist = loadStudentGameHistory(studentId, gameType, gradeNum);
  const targetDifficulty = options?.forceDifficulty || hist.recommendedDifficulty || 'easy';
  const batchSize = options?.batchSize || 5;

  if (!allPool || allPool.length === 0) {
    return {
      questions: [],
      isRevisionMode: false,
      totalPoolSize: 0,
      unusedCount: 0,
      revisionCount: 0,
      difficulty: targetDifficulty,
      attemptNumber: hist.attemptCount + 1
    };
  }

  // Filter pool by difficulty if enough items exist, otherwise blend
  let pool = allPool.filter(q => q.difficulty === targetDifficulty);
  if (pool.length < batchSize) {
    // If not enough in exact difficulty, blend adjacent difficulty
    pool = allPool;
  }

  const answeredSet = new Set(hist.answeredQuestionIds);
  const incorrectSet = new Set(hist.incorrectQuestionIds);

  // 1. Unused questions (never answered yet by student)
  const unusedQuestions = pool.filter(q => !answeredSet.has(q.questionId));

  // 2. Previously incorrect questions (targeted for revision)
  const revisionQuestions = pool.filter(q => incorrectSet.has(q.questionId));

  let selected: AdaptiveGameQuestion[] = [];
  let isRevisionMode = false;

  if (unusedQuestions.length >= batchSize) {
    // Enough unused questions: take mostly unused (e.g. 4) + 1 revision item if available
    const shuffledUnused = shuffleArray(unusedQuestions);
    const shuffledRevision = shuffleArray(revisionQuestions);

    if (shuffledRevision.length > 0) {
      selected = [...shuffledRevision.slice(0, 1), ...shuffledUnused.slice(0, batchSize - 1)];
    } else {
      selected = shuffledUnused.slice(0, batchSize);
    }
  } else if (unusedQuestions.length > 0) {
    // Some unused questions left: take all unused + fill rest with revision/mastered
    const remainingCount = batchSize - unusedQuestions.length;
    const reviewPool = pool.filter(q => answeredSet.has(q.questionId));
    const shuffledReview = shuffleArray(reviewPool);

    selected = [...unusedQuestions, ...shuffledReview.slice(0, remainingCount)];
    isRevisionMode = true;
  } else {
    // Unused pool exhausted -> Full Revision Mode!
    isRevisionMode = true;
    const shuffledPool = shuffleArray(pool);
    // Prioritize previously incorrect questions in revision
    const sortedByNeed = [
      ...shuffleArray(revisionQuestions),
      ...shuffleArray(pool.filter(q => !incorrectSet.has(q.questionId)))
    ];
    selected = sortedByNeed.slice(0, batchSize);
  }

  // Shuffle selected questions sequence
  const shuffledSelected = shuffleArray(selected);

  // Randomize answer positions for every question while preserving the correct answer
  const questionsWithShuffledAnswers = shuffledSelected.map(q => {
    return {
      ...q,
      answerOptions: shuffleArray(q.answerOptions)
    };
  });

  return {
    questions: questionsWithShuffledAnswers,
    isRevisionMode,
    totalPoolSize: allPool.length,
    unusedCount: unusedQuestions.length,
    revisionCount: revisionQuestions.length,
    difficulty: targetDifficulty,
    attemptNumber: hist.attemptCount + 1
  };
}

/**
 * Record student answer outcome for a question in a game
 */
export async function recordQuestionAttempt(
  studentId: string,
  gameType: string,
  gradeNum: GradeNumber,
  questionId: string,
  isCorrect: boolean
): Promise<StudentGameHistory> {
  const hist = loadStudentGameHistory(studentId, gameType, gradeNum);

  if (!hist.answeredQuestionIds.includes(questionId)) {
    hist.answeredQuestionIds.push(questionId);
  }

  if (isCorrect) {
    hist.consecutiveCorrectCount += 1;
    // Remove from incorrect list if now answered correctly
    hist.incorrectQuestionIds = hist.incorrectQuestionIds.filter(id => id !== questionId);
    if (!hist.masteredQuestionIds.includes(questionId)) {
      hist.masteredQuestionIds.push(questionId);
    }

    // Adaptive promotion: 3 consecutive correct answers -> recommend Medium / Challenge
    if (hist.consecutiveCorrectCount >= 3) {
      if (hist.recommendedDifficulty === 'easy') {
        hist.recommendedDifficulty = 'medium';
      } else if (hist.recommendedDifficulty === 'medium') {
        hist.recommendedDifficulty = 'challenge';
      }
    }
  } else {
    hist.consecutiveCorrectCount = 0;
    if (!hist.incorrectQuestionIds.includes(questionId)) {
      hist.incorrectQuestionIds.push(questionId);
    }

    // Adaptive demotion/practice: if struggling in Challenge, recommend Medium
    if (hist.recommendedDifficulty === 'challenge') {
      hist.recommendedDifficulty = 'medium';
    }
  }

  hist.lastPlayedAt = new Date().toISOString();
  await saveStudentGameHistory(hist);
  return hist;
}

/**
 * Finalize game session attempt and return updated stats
 */
export async function finalizeGameAttempt(
  studentId: string,
  gameType: string,
  gradeNum: GradeNumber,
  score: number,
  maxScore: number,
  starsWon: number
): Promise<StudentGameHistory> {
  const hist = loadStudentGameHistory(studentId, gameType, gradeNum);
  hist.attemptCount += 1;
  hist.lastPlayedAt = new Date().toISOString();

  await saveStudentGameHistory(hist);
  return hist;
}
