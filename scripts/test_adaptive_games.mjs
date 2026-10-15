// scripts/test_adaptive_games.mjs
import fs from 'node:fs';
import path from 'node:path';

// Mock localStorage in memory
const store = new Map();
globalThis.localStorage = {
  getItem: (key) => store.get(key) || null,
  setItem: (key, val) => store.set(key, String(val)),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear()
};

// Read the generated questions directly from the question bank JSON or import
const filePath = path.resolve('src/data/adaptiveGameQuestions.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Extract GRADE_GAMES_CATALOG and ADAPTIVE_QUESTION_BANK from TS file
const catalogMatch = fileContent.match(/export const GRADE_GAMES_CATALOG: Record<GradeNumber, GameMetadata\[\]> = ([\s\S]*?);[\r\n]+export const ADAPTIVE_QUESTION_BANK/);
if (!catalogMatch) {
  throw new Error('Failed to parse GRADE_GAMES_CATALOG from adaptiveGameQuestions.ts');
}
const GRADE_GAMES_CATALOG = JSON.parse(catalogMatch[1]);

const bankMatch = fileContent.match(/export const ADAPTIVE_QUESTION_BANK: Record<string, AdaptiveGameQuestion\[\]> = ([\s\S]*?);[\r\n]+\/\*\*/);
if (!bankMatch) {
  throw new Error('Failed to parse ADAPTIVE_QUESTION_BANK from adaptiveGameQuestions.ts');
}
const ADAPTIVE_QUESTION_BANK = JSON.parse(bankMatch[1]);

// Utility shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Smart Replay logic for test verification
function loadStudentGameHistory(studentId, gameType, gradeNum) {
  const raw = localStorage.getItem(`game_hist_${studentId}_${gameType}`);
  if (raw) return JSON.parse(raw);
  return {
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
}

function saveStudentGameHistory(hist) {
  localStorage.setItem(`game_hist_${hist.studentId}_${hist.gameType}`, JSON.stringify(hist));
}

function generateSmartQuestionSet(studentId, gameType, gradeNum, batchSize = 5) {
  const allPool = ADAPTIVE_QUESTION_BANK[gameType] || [];
  const hist = loadStudentGameHistory(studentId, gameType, gradeNum);
  const targetDifficulty = hist.recommendedDifficulty || 'easy';

  let pool = allPool.filter(q => q.difficulty === targetDifficulty);
  if (pool.length < batchSize) pool = allPool;

  const answeredSet = new Set(hist.answeredQuestionIds);
  const incorrectSet = new Set(hist.incorrectQuestionIds);

  const unused = pool.filter(q => !answeredSet.has(q.questionId));
  const revision = pool.filter(q => incorrectSet.has(q.questionId));

  let selected = [];
  let isRevisionMode = false;

  if (unused.length >= batchSize) {
    if (revision.length > 0) {
      selected = [...shuffleArray(revision).slice(0, 1), ...shuffleArray(unused).slice(0, batchSize - 1)];
    } else {
      selected = shuffleArray(unused).slice(0, batchSize);
    }
  } else if (unused.length > 0) {
    const remaining = batchSize - unused.length;
    const reviewPool = pool.filter(q => answeredSet.has(q.questionId));
    selected = [...unused, ...shuffleArray(reviewPool).slice(0, remaining)];
    isRevisionMode = true;
  } else {
    isRevisionMode = true;
    selected = shuffleArray(pool).slice(0, batchSize);
  }

  const shuffledSelected = shuffleArray(selected);
  const withShuffledAnswers = shuffledSelected.map(q => ({
    ...q,
    answerOptions: shuffleArray(q.answerOptions)
  }));

  return {
    questions: withShuffledAnswers,
    isRevisionMode,
    totalPoolSize: allPool.length,
    unusedCount: unused.length
  };
}

function recordQuestionAttempt(studentId, gameType, gradeNum, questionId, isCorrect) {
  const hist = loadStudentGameHistory(studentId, gameType, gradeNum);
  if (!hist.answeredQuestionIds.includes(questionId)) {
    hist.answeredQuestionIds.push(questionId);
  }
  if (isCorrect) {
    hist.consecutiveCorrectCount += 1;
    hist.incorrectQuestionIds = hist.incorrectQuestionIds.filter(id => id !== questionId);
    if (!hist.masteredQuestionIds.includes(questionId)) {
      hist.masteredQuestionIds.push(questionId);
    }
    if (hist.consecutiveCorrectCount >= 3) {
      if (hist.recommendedDifficulty === 'easy') hist.recommendedDifficulty = 'medium';
      else if (hist.recommendedDifficulty === 'medium') hist.recommendedDifficulty = 'challenge';
    }
  } else {
    hist.consecutiveCorrectCount = 0;
    if (!hist.incorrectQuestionIds.includes(questionId)) {
      hist.incorrectQuestionIds.push(questionId);
    }
    if (hist.recommendedDifficulty === 'challenge') {
      hist.recommendedDifficulty = 'medium';
    }
  }
  saveStudentGameHistory(hist);
  return hist;
}

// -------------------------------------------------------------------
// RUN AUTOMATED TESTS
// -------------------------------------------------------------------
async function runTests() {
  console.log('===============================================================');
  console.log('🧪 VIETDISCOVERY ADAPTIVE GAME LEARNING SYSTEM TEST SUITE');
  console.log('===============================================================\n');

  let passed = 0;
  let failed = 0;

  function test(name, fn) {
    try {
      fn();
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(`     Error: ${err.message}`);
      failed++;
    }
  }

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  // 1. Grade-Differentiated Game Collections
  console.log('📌 1. GRADE-DIFFERENTIATED GAME COLLECTIONS (5 DISTINCT GAMES PER GRADE)');
  const EXPECTED_GAMES_BY_GRADE = {
    1: ['picture_pop', 'animal_friends', 'color_magic', 'sound_safari', 'treasure_bubbles'],
    2: ['memory_flip', 'word_picture_match', 'sentence_builder', 'treasure_hunt', 'vocabulary_maze'],
    3: ['landmark_drag_drop', 'map_quest', 'sentence_puzzle', 'listening_detective', 'cultural_quiz'],
    4: ['escape_room', 'word_decoder', 'dialogue_builder', 'listening_mission', 'culture_challenge'],
    5: ['champion_quiz', 'tour_guide', 'reading_detective', 'speaking_mission', 'final_adventure']
  };

  for (let g = 1; g <= 5; g++) {
    test(`Grade ${g} has exactly 5 designated games matching curriculum specifications`, () => {
      const games = GRADE_GAMES_CATALOG[g];
      assert(games && games.length === 5, `Grade ${g} must have 5 games, found: ${games?.length}`);
      const gameIds = games.map(item => item.id);
      const expected = EXPECTED_GAMES_BY_GRADE[g];
      assert(JSON.stringify(gameIds) === JSON.stringify(expected), `Grade ${g} mismatch. Found: ${gameIds}, Expected: ${expected}`);
    });
  }

  // 2. Question Bank Validation (30 validated questions per game = 750 total)
  console.log('\n📌 2. QUESTION BANK INTEGRITY (30 VERIFIED QUESTIONS PER GAME = 750 TOTAL)');
  let totalQuestionsCount = 0;
  const allGameIds = Object.values(EXPECTED_GAMES_BY_GRADE).flat();

  allGameIds.forEach(gameId => {
    test(`Game '${gameId}' has at least 30 validated question items`, () => {
      const qList = ADAPTIVE_QUESTION_BANK[gameId];
      assert(qList, `Missing question bank for game: ${gameId}`);
      assert(qList.length >= 30, `Expected at least 30 questions for ${gameId}, found: ${qList.length}`);
      totalQuestionsCount += qList.length;

      // Validate every question
      qList.forEach((q, idx) => {
        assert(q.questionId, `Question at index ${idx} missing questionId`);
        assert(q.prompt && q.prompt.length > 2, `Question ${q.questionId} missing prompt`);
        assert(q.answerOptions && q.answerOptions.length >= 2, `Question ${q.questionId} must have at least 2 options`);
        // Verify correct answer is in options or reconstructible from sentence tokens
        if (q.gameType === 'sentence_builder' || q.gameType === 'sentence_puzzle') {
          const joined = q.answerOptions.join(' ').replace(/\s+/g, ' ').trim();
          const cleanCorrect = q.correctAnswer.replace(/\s+/g, ' ').trim();
          const matches = joined.toLowerCase() === cleanCorrect.toLowerCase() ||
            joined.replace(/[.,?!]/g, '').toLowerCase() === cleanCorrect.replace(/[.,?!]/g, '').toLowerCase();
          assert(matches, `Sentence tokens do not match sentence: ${joined} vs ${cleanCorrect}`);
        } else {
          const hasCorrect = q.answerOptions.some(opt => opt.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim());
          assert(hasCorrect, `Question ${q.questionId}: correctAnswer '${q.correctAnswer}' not in answerOptions [${q.answerOptions}]`);
        }
        assert(q.explanation && q.explanation.length > 3, `Question ${q.questionId} missing explanation`);
      });
    });
  });

  test(`Total question count across all 25 games equals 750 verified records`, () => {
    assert(totalQuestionsCount === 750, `Expected 750 questions, found: ${totalQuestionsCount}`);
  });

  // 3. Smart Replay & Anti-Repetition
  console.log('\n📌 3. SMART REPLAY & ANTI-REPETITION ENGINE');
  test('Smart Replay generates fresh non-repetitive questions on consecutive attempts', () => {
    const studentId = 'STU-TEST-01';
    const gameType = 'picture_pop';
    const gradeNum = 1;

    // Attempt 1
    const set1 = generateSmartQuestionSet(studentId, gameType, gradeNum, 5);
    assert(set1.questions.length === 5, 'Attempt 1 should generate 5 questions');
    const set1Ids = set1.questions.map(q => q.questionId);

    // Record attempt 1 answers as completed
    set1Ids.forEach(id => recordQuestionAttempt(studentId, gameType, gradeNum, id, true));

    // Attempt 2 (Play Again)
    const set2 = generateSmartQuestionSet(studentId, gameType, gradeNum, 5);
    assert(set2.questions.length === 5, 'Attempt 2 should generate 5 questions');
    const set2Ids = set2.questions.map(q => q.questionId);

    // Verify Attempt 2 questions are different from Attempt 1 (anti-repetition)
    const overlap = set2Ids.filter(id => set1Ids.includes(id));
    assert(overlap.length === 0, `Attempt 2 should prioritize unused questions. Overlap found: ${overlap}`);
  });

  test('Smart Replay incorporates previously incorrect questions for spaced revision', () => {
    const studentId = 'STU-TEST-REVISION';
    const gameType = 'color_magic';
    const gradeNum = 1;

    // Fail a specific question
    const failedQId = 'g1_col_03';
    recordQuestionAttempt(studentId, gameType, gradeNum, failedQId, false);

    // Generate new set
    const set = generateSmartQuestionSet(studentId, gameType, gradeNum, 5);
    const includedIds = set.questions.map(q => q.questionId);
    assert(includedIds.includes(failedQId), `Smart Replay must prioritize failed question '${failedQId}' for revision`);
  });

  // 4. Adaptive Difficulty Progression
  console.log('\n📌 4. ADAPTIVE DIFFICULTY PROGRESSION');
  test('Consecutive correct answers promote recommended difficulty (Easy -> Medium -> Challenge)', () => {
    const studentId = 'STU-TEST-ADAPT';
    const gameType = 'escape_room';
    const gradeNum = 4;

    let hist = loadStudentGameHistory(studentId, gameType, gradeNum);
    assert(hist.recommendedDifficulty === 'easy', 'Initial difficulty should be easy');

    // 3 consecutive correct answers
    recordQuestionAttempt(studentId, gameType, gradeNum, 'q1', true);
    recordQuestionAttempt(studentId, gameType, gradeNum, 'q2', true);
    hist = recordQuestionAttempt(studentId, gameType, gradeNum, 'q3', true);
    assert(hist.recommendedDifficulty === 'medium', `Expected promotion to medium, got: ${hist.recommendedDifficulty}`);

    // Another 3 consecutive correct
    recordQuestionAttempt(studentId, gameType, gradeNum, 'q4', true);
    recordQuestionAttempt(studentId, gameType, gradeNum, 'q5', true);
    hist = recordQuestionAttempt(studentId, gameType, gradeNum, 'q6', true);
    assert(hist.recommendedDifficulty === 'challenge', `Expected promotion to challenge, got: ${hist.recommendedDifficulty}`);
  });

  // 5. Student Data Isolation
  console.log('\n📌 5. STUDENT DATA ISOLATION');
  test('Different students have completely isolated histories and question sets', () => {
    const stuA = 'STU-56017'; // Le Hoang Khoi
    const stuB = 'STU-4601';  // Hoang Tuan Kiet
    const gameType = 'champion_quiz';
    const gradeNum = 5;

    recordQuestionAttempt(stuA, gameType, gradeNum, 'g5_chp_01', true);
    recordQuestionAttempt(stuA, gameType, gradeNum, 'g5_chp_02', true);

    const histA = loadStudentGameHistory(stuA, gameType, gradeNum);
    const histB = loadStudentGameHistory(stuB, gameType, gradeNum);

    assert(histA.answeredQuestionIds.length === 2, 'Student A should have 2 answered questions');
    assert(histB.answeredQuestionIds.length === 0, 'Student B should have 0 answered questions (isolated)');
  });

  console.log('\n===============================================================');
  console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
