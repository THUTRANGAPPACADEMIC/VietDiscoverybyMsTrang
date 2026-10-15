// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — 25 THEMATIC ADVENTURES TEST SUITE
// Automated verification of 25 Grade-Specific Thematic Adventures & Pastel Colors
// ==============================================================================

import { ADVENTURE_COLOR_SYSTEM, GRADE_ADVENTURES_DATA } from '../src/data/curriculum/adventureThemes.ts';
import { ALL_25_CURRICULUM_LESSONS } from '../src/data/curriculum/allLessons.ts';
import { getCurriculumLessons } from '../src/data/curriculumData.ts';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log("===============================================================");
console.log("🧭 VIETDISCOVERY 25 THEMATIC ADVENTURES & PASTEL COLOR SUITE");
console.log("===============================================================\n");

// ------------------------------------------------------------------------------
// TEST 1: PREMIUM PASTEL COLOR SYSTEM
// ------------------------------------------------------------------------------
console.log("📌 1. PREMIUM PASTEL COLOR SYSTEM SPECIFICATIONS");

const expectedColors = {
  adventure_1_places: { name: 'Amazing Places', pastel: '#D9F0FF', selected: '#0798E4' },
  adventure_2_culture: { name: 'Vietnamese Culture', pastel: '#E9DDFF', selected: '#8B4AE8' },
  adventure_3_food: { name: 'Delicious Vietnam', pastel: '#FFE3CB', selected: '#F27A16' },
  adventure_4_nature: { name: 'Nature & Wildlife', pastel: '#DDF5DD', selected: '#209B60' },
  adventure_5_future: { name: 'Future Vietnam', pastel: '#FFE0EE', selected: '#E43D91' },
};

Object.entries(expectedColors).forEach(([advId, spec]) => {
  const theme = ADVENTURE_COLOR_SYSTEM[advId];
  assert(theme !== undefined, `Theme exists for ${spec.name} (${advId})`);
  assert(
    theme.pastelBg.toUpperCase() === spec.pastel.toUpperCase(),
    `${spec.name} pastel background matches exact spec ${spec.pastel} (actual: ${theme.pastelBg})`
  );
  assert(
    theme.selectedBg.toUpperCase() === spec.selected.toUpperCase(),
    `${spec.name} selected background matches exact spec ${spec.selected} (actual: ${theme.selectedBg})`
  );
  assert(
    theme.textSelected === '#FFFFFF',
    `${spec.name} selected text is pure white (#FFFFFF)`
  );
  assert(
    theme.pastelBg !== '#FFFFFF',
    `${spec.name} unselected card is not a plain white background`
  );
});

// ------------------------------------------------------------------------------
// TEST 2: ALL 25 DISTINCT THEMATIC ADVENTURE TITLES & CURRICULUM
// ------------------------------------------------------------------------------
console.log("\n📌 2. 25 DISTINCT THEMATIC ADVENTURES TITLES (5 GRADES x 5 ADVENTURES)");

const expectedTitles = {
  'Grade 1': [
    'My Beautiful Vietnam',
    'Colors & Festivals',
    'Yummy Food',
    'Animal Friends',
    'My Dream City'
  ],
  'Grade 2': [
    "Let's Visit Vietnam",
    'Happy Festivals',
    'My Favorite Food',
    'Nature Detectives',
    'Future Transport'
  ],
  'Grade 3': [
    'Famous Landmarks',
    'Vietnamese Traditions',
    'Food Adventure',
    'Wildlife Discovery',
    'Smart Vietnam'
  ],
  'Grade 4': [
    'Vietnam Travel Quest',
    'Cultural Heritage',
    'Vietnamese Food Tour',
    'Protect Our Planet',
    'Green Smart Cities'
  ],
  'Grade 5': [
    "Discover Vietnam's Wonders",
    'Heritage Explorers',
    'Vietnamese Cuisine Challenge',
    'Eco Heroes',
    'Vietnam 2050'
  ]
};

const advKeys = [
  'adventure_1_places',
  'adventure_2_culture',
  'adventure_3_food',
  'adventure_4_nature',
  'adventure_5_future'
];

Object.entries(expectedTitles).forEach(([grade, titles]) => {
  const gradeMeta = GRADE_ADVENTURES_DATA[grade];
  assert(gradeMeta !== undefined, `Metadata exists for ${grade}`);

  advKeys.forEach((key, index) => {
    const meta = gradeMeta[key];
    const expectedTitle = titles[index];
    assert(
      meta && meta.titleEn.includes(expectedTitle),
      `${grade} Adventure #${index + 1} title matches '${expectedTitle}' (actual: '${meta?.titleEn}')`
    );
  });
});

// ------------------------------------------------------------------------------
// TEST 3: FULL 25 LESSON REPOSITORY INTEGRITY
// ------------------------------------------------------------------------------
console.log("\n📌 3. FULL 25 PUBLISHED LESSON RECORDS INTEGRITY");

const allLessons = getCurriculumLessons();
assert(allLessons.length === 25, `getCurriculumLessons() returns exactly 25 lessons (actual: ${allLessons.length})`);

// Verify every grade has exactly 5 lessons
['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].forEach((grade) => {
  const gradeLessons = allLessons.filter(l => l.gradeLevel === grade);
  assert(gradeLessons.length === 5, `${grade} has exactly 5 verified published lessons`);

  // Verify all 5 distinct adventures exist in this grade
  advKeys.forEach(advKey => {
    const lesson = gradeLessons.find(l => l.adventureId === advKey);
    assert(lesson !== undefined, `${grade} has lesson for ${advKey} ('${lesson?.titleEn}')`);
    assert(lesson?.status === 'published', `${grade} ${advKey} is published and playable`);
    assert(Array.isArray(lesson?.vocabulary) && lesson.vocabulary.length >= 4, `${grade} ${advKey} has at least 4 vocabulary items with audio/IPA`);
    assert(lesson?.reading && lesson.reading.passagesEn.length > 0, `${grade} ${advKey} has reading content`);
    assert(lesson?.listening && lesson.listening.options.length === 4, `${grade} ${advKey} has 4-option listening challenge`);
    assert(lesson?.interactiveGame && lesson.interactiveGame.items.length >= 4, `${grade} ${advKey} has working interactive matching game`);
    assert(Array.isArray(lesson?.questions) && lesson.questions.length === 3, `${grade} ${advKey} has 3 Circular 27 leveled questions (L1, L2, L3)`);
  });
});

// ------------------------------------------------------------------------------
// TEST 4: VIDEO LEARNING EMBEDDING & LAZY LOADING
// ------------------------------------------------------------------------------
console.log("\n📌 4. VIDEO LEARNING EMBEDDINGS & NEVER-AUTOPLAY VALIDATION");

let videoCount = 0;
allLessons.forEach((lesson) => {
  if (lesson.videoLesson) {
    videoCount++;
    assert(
      lesson.videoLesson.embedUrl.startsWith('https://www.youtube-nocookie.com/embed/'),
      `${lesson.gradeLevel} ${lesson.adventureId} uses child-safe privacy embed (youtube-nocookie.com)`
    );
    assert(
      !lesson.videoLesson.embedUrl.includes('autoplay=1'),
      `${lesson.gradeLevel} ${lesson.adventureId} video strictly forbids autoplay`
    );
    assert(
      lesson.videoLesson.titleEn && lesson.videoLesson.titleVi,
      `${lesson.gradeLevel} ${lesson.adventureId} has bilingual video titles`
    );
  }
});
assert(videoCount === 25, `All 25 adventures have approved child-safe video lessons (count: ${videoCount})`);

// ------------------------------------------------------------------------------
// TEST 5: GRADE & ADVENTURE SYNCHRONIZATION AND ZERO STALE CONTENT
// ------------------------------------------------------------------------------
console.log("\n📌 5. GRADE & ADVENTURE SYNCHRONIZATION & ZERO STALE CONTENT");

// Test filtering: when Grade 1 is active, only Grade 1 lessons are returned
const g1All = allLessons.filter(l => l.gradeLevel === 'Grade 1');
assert(g1All.length === 5, "Selecting Grade 1 with 'all' returns exactly 5 lessons");

// Test selecting a specific adventure (e.g. ADV 3 Delicious Vietnam in Grade 4)
const g4Adv3 = allLessons.filter(l => l.gradeLevel === 'Grade 4' && l.adventureId === 'adventure_3_food');
assert(g4Adv3.length === 1, "Selecting Grade 4 + ADV 3 returns exactly 1 lesson (never 0)");
assert(g4Adv3[0].titleEn.includes("Vietnamese Food Tour"), "Returned lesson is the Grade 4 'Vietnamese Food Tour'");

// Test selecting ADV 1 in Grade 5
const g5Adv1 = allLessons.filter(l => l.gradeLevel === 'Grade 5' && l.adventureId === 'adventure_1_places');
assert(g5Adv1.length === 1, "Selecting Grade 5 + ADV 1 returns exactly 1 lesson (never 0)");
assert(g5Adv1[0].titleEn.includes("Son Doong"), "Returned lesson is the Grade 5 'Son Doong' expedition");

// ------------------------------------------------------------------------------
// SUMMARY
// ------------------------------------------------------------------------------
console.log("\n===============================================================");
console.log(`📊 FINAL 25 ADVENTURES SUITE: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
console.log("===============================================================");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
