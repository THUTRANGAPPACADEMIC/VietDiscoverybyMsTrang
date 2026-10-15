// ==============================================================================
// TEST SUITE: 3D FLOATING ISLAND ADVENTURE WORLD
// Verifies 5 Islands x 5 Grades Data Integrity, Circular 27 Levels & Interactivity
// ==============================================================================

import { FLOATING_ISLANDS } from '../src/components/Student/FloatingIslandWorld/floatingIslandData.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    passedTests++;
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('🚀 Running 3D Floating Island Adventure World Verification Suite...\n');

// 1. Verify 5 Islands Existence
assert(FLOATING_ISLANDS.length === 5, 'Exactly 5 floating islands are defined');

const expectedIslands = ['wonder', 'listening', 'speaking', 'puzzle', 'champion'];
const actualIds = FLOATING_ISLANDS.map(i => i.id);
assert(JSON.stringify(actualIds) === JSON.stringify(expectedIslands), 'Island IDs match [wonder, listening, speaking, puzzle, champion]');

// 2. Verify Visual & Theme Assets
FLOATING_ISLANDS.forEach(island => {
  assert(island.nameEn.length > 0 && island.nameVi.length > 0, `${island.id} has both English and Vietnamese names`);
  assert(island.subtitleEn.length > 0 && island.subtitleVi.length > 0, `${island.id} has bilingual subtitles`);
  assert(island.crystalHex.startsWith('#'), `${island.id} has a valid crystal hex color: ${island.crystalHex}`);
  assert(island.glowRgba.startsWith('rgba'), `${island.id} has a valid glow rgba color`);
  assert(island.badgeText.length > 0, `${island.id} has an explorer badge: ${island.badgeText}`);
  assert(island.floatDelay.startsWith('animate-island-'), `${island.id} has a floating animation delay: ${island.floatDelay}`);
  assert(island.landmarkFeature.length > 0, `${island.id} has a landmark feature: ${island.landmarkFeature}`);

  // 3. Verify All 5 Grades Exist for each Island
  [1, 2, 3, 4, 5].forEach(gradeNum => {
    const gradeContent = island.gradeData[gradeNum];
    assert(gradeContent !== undefined, `${island.id} has curriculum content for Grade ${gradeNum}`);
    assert(gradeContent.gradeNum === gradeNum, `${island.id} Grade ${gradeNum} gradeNum matches`);
    assert(gradeContent.starsReward >= 25, `${island.id} Grade ${gradeNum} awards at least 25 stars (actual: ${gradeContent.starsReward})`);
    assert(gradeContent.steps.length >= 2, `${island.id} Grade ${gradeNum} has at least 2 interactive steps`);

    // 4. Verify Each Step Integrity
    gradeContent.steps.forEach((step, stepIdx) => {
      assert(step.id.length > 0, `${island.id} G${gradeNum} step ${stepIdx + 1} has an ID`);
      assert(step.questionEn.length > 0, `${island.id} G${gradeNum} step ${stepIdx + 1} has English prompt`);
      assert(step.questionVi.length > 0, `${island.id} G${gradeNum} step ${stepIdx + 1} has Vietnamese prompt`);
      assert(step.options.length >= 2, `${island.id} G${gradeNum} step ${stepIdx + 1} has at least 2 choices`);
      const hasCorrect = step.options.some(opt => opt.isCorrect === true);
      assert(hasCorrect, `${island.id} G${gradeNum} step ${stepIdx + 1} contains a correct answer`);
    });
  });
});

// 5. Verify Champion Island Circular 27 Article 7 Challenge Levels
const championIsland = FLOATING_ISLANDS.find(i => i.id === 'champion');
[1, 2, 3, 4, 5].forEach(gradeNum => {
  const gData = championIsland.gradeData[gradeNum];
  const levels = gData.steps.map(s => s.level);
  assert(levels.includes(1), `Champion Island Grade ${gradeNum} includes Circular 27 Level 1: Recognize`);
  assert(levels.includes(2), `Champion Island Grade ${gradeNum} includes Circular 27 Level 2: Connect`);
  assert(levels.includes(3), `Champion Island Grade ${gradeNum} includes Circular 27 Level 3: Apply`);
});

// 6. Verify Puzzle Island Scramble Targets
const puzzleIsland = FLOATING_ISLANDS.find(i => i.id === 'puzzle');
[1, 2, 3, 4, 5].forEach(gradeNum => {
  const gData = puzzleIsland.gradeData[gradeNum];
  const hasScramble = gData.steps.some(s => s.scrambleTarget && s.scrambleTarget.length >= 3);
  assert(hasScramble, `Puzzle Island Grade ${gradeNum} has an active letter unscramble challenge`);
});

// 7. Verify Speaking Island Phonics & Audio Prompts
const speakingIsland = FLOATING_ISLANDS.find(i => i.id === 'speaking');
[1, 2, 3, 4, 5].forEach(gradeNum => {
  const gData = speakingIsland.gradeData[gradeNum];
  const hasPhonics = gData.steps.some(s => s.targetPhonics && s.targetPhonics.length > 0);
  assert(hasPhonics, `Speaking Island Grade ${gradeNum} provides phonics target practice`);
});

// 8. Verify Listening Island Audio Prompts
const listeningIsland = FLOATING_ISLANDS.find(i => i.id === 'listening');
[1, 2, 3, 4, 5].forEach(gradeNum => {
  const gData = listeningIsland.gradeData[gradeNum];
  const hasAudio = gData.steps.every(s => s.audioPrompt && s.audioPrompt.length > 5);
  assert(hasAudio, `Listening Island Grade ${gradeNum} steps all have audio prompts`);
});

console.log(`\n🎉 ALL TESTS PASSED! (${passedTests}/${totalTests} assertions passed)`);
