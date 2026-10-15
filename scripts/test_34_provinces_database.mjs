import assert from 'assert';
import { 
  PROVINCES_34_DATA, 
  CITIES_DATA, 
  NORTH_PROVINCES_DATA, 
  CENTRAL_PROVINCES_DATA, 
  SOUTH_PROVINCES_DATA,
  getProvinceByCode,
  getProvinceById,
  getProvincesByRegion,
  getCentrallyGovernedCities,
  searchProvinces
} from '../src/data/provinces/index.ts';

console.log('--- RUNNING 34 PROVINCES & CITIES DATABASE VERIFICATION ---');

// 1. Total Count Verification
console.log(`[TEST 1] Verifying Total Administrative Units Count: ${PROVINCES_34_DATA.length}`);
assert.strictEqual(PROVINCES_34_DATA.length, 34, 'Expected exactly 34 administrative units');
assert.strictEqual(CITIES_DATA.length, 6, 'Expected exactly 6 centrally governed cities');
assert.strictEqual(NORTH_PROVINCES_DATA.length, 14, 'Expected exactly 14 northern provinces');
assert.strictEqual(CENTRAL_PROVINCES_DATA.length, 8, 'Expected exactly 8 central & highlands provinces');
assert.strictEqual(SOUTH_PROVINCES_DATA.length, 6, 'Expected exactly 6 southern provinces');
console.log('✓ Counts match: 6 cities + 14 north + 8 central + 6 south = 34 total.');

// 2. 6 Centrally Governed Cities Verification
console.log('[TEST 2] Verifying the 6 Centrally Governed Cities');
const expectedCityCodes = ['HN', 'HP', 'HUE', 'DN', 'HCM', 'CT'];
const expectedCityNames = ['Thủ đô Hà Nội', 'Thành phố Hải Phòng', 'Thành phố Huế', 'Thành phố Đà Nẵng', 'Thành phố Hồ Chí Minh', 'Thành phố Cần Thơ'];
const actualCityCodes = CITIES_DATA.map(c => c.code);
expectedCityCodes.forEach((code, idx) => {
  assert.ok(actualCityCodes.includes(code), `City code ${code} must be present`);
  const city = CITIES_DATA.find(c => c.code === code);
  assert.strictEqual(city.type, 'city', `${city.nameVi} must have type "city"`);
  assert.strictEqual(city.nameVi, expectedCityNames[idx], `Name with diacritics mismatch for ${code}`);
});
console.log('✓ All 6 centrally governed cities verified with correct diacritics.');

// 3. 28 Provinces Verification against User List
console.log('[TEST 3] Verifying 28 Provinces against Resolution 202/2025/QH15');
const expected28ProvinceNames = [
  'Tuyên Quang', 'Cao Bằng', 'Lào Cai', 'Điện Biên', 'Lai Châu', 'Sơn La',
  'Thái Nguyên', 'Lạng Sơn', 'Quảng Ninh', 'Bắc Ninh', 'Phú Thọ', 'Hưng Yên',
  'Ninh Bình', 'Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Quảng Trị', 'Quảng Ngãi',
  'Gia Lai', 'Khánh Hòa', 'Đắk Lắk', 'Lâm Đồng', 'Đồng Nai', 'Tây Ninh',
  'Vĩnh Long', 'Đồng Tháp', 'An Giang', 'Cà Mau'
];

expected28ProvinceNames.forEach(provName => {
  const found = PROVINCES_34_DATA.find(p => p.type === 'province' && p.nameVi.includes(provName));
  assert.ok(found, `Province "${provName}" must exist in the 28 provinces`);
});
console.log(`✓ All 28 provinces verified against official list.`);

// 4. Data Completeness & Academic Rigor for each unit
console.log('[TEST 4] Verifying Content Structure across all 34 units');
let totalVocabulary = 0;
let totalQuestions = 0;
let totalLandmarks = 0;

PROVINCES_34_DATA.forEach((unit, idx) => {
  // Identification
  assert.ok(unit.code, `Unit ${idx} missing code`);
  assert.ok(unit.id, `Unit ${idx} missing id`);
  assert.ok(unit.nameVi, `Unit ${idx} missing nameVi`);
  assert.ok(unit.nameEn, `Unit ${idx} missing nameEn`);
  assert.ok(unit.capitalVi, `Unit ${idx} missing capitalVi`);
  assert.ok(unit.capitalEn, `Unit ${idx} missing capitalEn`);
  assert.ok(['North', 'Central', 'South'].includes(unit.region), `Unit ${idx} invalid region: ${unit.region}`);
  assert.ok(unit.zone, `Unit ${idx} missing zone`);

  // Geographic Location
  assert.ok(typeof unit.geographicLocation.latitude === 'number', `${unit.nameVi} missing valid latitude`);
  assert.ok(typeof unit.geographicLocation.longitude === 'number', `${unit.nameVi} missing valid longitude`);
  assert.ok(unit.geographicLocation.borders.length > 5, `${unit.nameVi} missing borders description`);
  assert.ok(unit.geographicLocation.terrain.length > 5, `${unit.nameVi} missing terrain description`);

  // 2025 Reorganization Details
  assert.ok(unit.administrativeReorganization2025.resolution, `${unit.nameVi} missing resolution`);
  assert.ok(unit.administrativeReorganization2025.previousUnitsInvolved.length > 0, `${unit.nameVi} missing previous units`);
  assert.ok(unit.administrativeReorganization2025.summaryVi.length > 10, `${unit.nameVi} missing summaryVi`);
  assert.ok(unit.administrativeReorganization2025.summaryEn.length > 10, `${unit.nameVi} missing summaryEn`);

  // Landmarks & Specialties
  assert.ok(unit.famousLandmarks.length >= 2, `${unit.nameVi} needs at least 2 landmarks`);
  totalLandmarks += unit.famousLandmarks.length;
  assert.ok(unit.localFoodSpecialties.length >= 2, `${unit.nameVi} needs at least 2 food specialties`);

  // Culture & Heritage
  assert.ok(unit.culturalTraditions.en.length > 10, `${unit.nameVi} missing culturalTraditions.en`);
  assert.ok(unit.culturalTraditions.vi.length > 10, `${unit.nameVi} missing culturalTraditions.vi`);
  assert.ok(unit.festivalsAndHeritage.length >= 1, `${unit.nameVi} needs at least 1 festival/heritage`);

  // English Vocabulary with Phonetics
  assert.ok(unit.ageAppropriateEnglishVocabulary.length >= 2, `${unit.nameVi} needs at least 2 vocabulary items`);
  unit.ageAppropriateEnglishVocabulary.forEach(v => {
    assert.ok(v.word, `${unit.nameVi} vocabulary missing word`);
    assert.ok(v.phonetic.startsWith('/') && v.phonetic.endsWith('/'), `${unit.nameVi} vocabulary "${v.word}" invalid IPA format: ${v.phonetic}`);
    assert.ok(v.meaningEn, `${unit.nameVi} vocabulary "${v.word}" missing meaningEn`);
    assert.ok(v.meaningVi, `${unit.nameVi} vocabulary "${v.word}" missing meaningVi`);
    assert.ok(v.exampleSentence, `${unit.nameVi} vocabulary "${v.word}" missing exampleSentence`);
  });
  totalVocabulary += unit.ageAppropriateEnglishVocabulary.length;

  // Sentence Patterns
  assert.ok(unit.englishSentencePatterns.length >= 1, `${unit.nameVi} needs at least 1 sentence pattern`);
  unit.englishSentencePatterns.forEach(sp => {
    assert.ok(sp.pattern, `${unit.nameVi} sentence pattern missing pattern`);
    assert.ok(sp.exampleEn, `${unit.nameVi} sentence pattern missing exampleEn`);
    assert.ok(sp.exampleVi, `${unit.nameVi} sentence pattern missing exampleVi`);
  });

  // Listening & Speaking
  const { listeningChallenge, speakingMission } = unit.listeningAndSpeakingActivities;
  assert.ok(listeningChallenge.audioScriptEn.length > 20, `${unit.nameVi} missing audioScriptEn`);
  assert.ok(listeningChallenge.options.length >= 3, `${unit.nameVi} listening question options too short`);
  assert.ok(typeof listeningChallenge.correctIndex === 'number', `${unit.nameVi} listening correctIndex invalid`);
  assert.ok(speakingMission.targetSpeech.length > 10, `${unit.nameVi} speaking targetSpeech missing`);
  assert.ok(speakingMission.sampleAudioPhonetic.startsWith('/') && speakingMission.sampleAudioPhonetic.endsWith('/'), `${unit.nameVi} speaking phonetic invalid`);

  // Circular 27 Leveled Questions (Exactly 3: Level 1, Level 2, Level 3)
  assert.strictEqual(unit.interactiveLearningQuestions.length, 3, `${unit.nameVi} must have exactly 3 leveled questions`);
  const levels = unit.interactiveLearningQuestions.map(q => q.level);
  assert.deepStrictEqual(levels, [1, 2, 3], `${unit.nameVi} must have questions for Level 1, Level 2, Level 3`);
  unit.interactiveLearningQuestions.forEach(q => {
    assert.ok(q.questionEn, `${unit.nameVi} question missing questionEn`);
    assert.ok(q.questionVi, `${unit.nameVi} question missing questionVi`);
    assert.ok(q.options.length >= 3, `${unit.nameVi} question options too short`);
    assert.ok(typeof q.correctIndex === 'number', `${unit.nameVi} question correctIndex invalid`);
    assert.ok(q.explanationEn, `${unit.nameVi} question missing explanationEn`);
    assert.ok(q.explanationVi, `${unit.nameVi} question missing explanationVi`);
  });
  totalQuestions += unit.interactiveLearningQuestions.length;
});

console.log(`✓ Total Landmarks verified: ${totalLandmarks}`);
console.log(`✓ Total Vocabulary items with IPA phonetics verified: ${totalVocabulary}`);
console.log(`✓ Total Circular 27 Leveled Questions verified: ${totalQuestions} (Exactly 102 questions across 34 units)`);

// 5. Lookup Functions Test
console.log('[TEST 5] Verifying Lookup Functions');
const hanoi = getProvinceByCode('HN');
assert.strictEqual(hanoi.nameVi, 'Thủ đô Hà Nội');
const thaiNguyen = getProvinceByCode('TNG');
assert.strictEqual(thaiNguyen.nameVi, 'Tỉnh Thái Nguyên');
const thaiNguyenAlias = getProvinceByCode('TN');
assert.strictEqual(thaiNguyenAlias.nameVi, 'Tỉnh Thái Nguyên');

const caMau = getProvinceById('vn-34-cm');
assert.strictEqual(caMau.nameVi, 'Tỉnh Cà Mau');

const northern = getProvincesByRegion('North');
assert.strictEqual(northern.length, 16, 'Expected 16 Northern units (2 cities + 14 provinces)');

const central = getProvincesByRegion('Central');
assert.strictEqual(central.length, 10, 'Expected 10 Central units (2 cities + 8 provinces)');

const southern = getProvincesByRegion('South');
assert.strictEqual(southern.length, 8, 'Expected 8 Southern units (2 cities + 6 provinces)');

const cities = getCentrallyGovernedCities();
assert.strictEqual(cities.length, 6, 'Expected 6 centrally governed cities');

const searchResults = searchProvinces('Sen');
assert.ok(searchResults.length >= 2, 'Search for "Sen" should find Dong Thap and others');

console.log('✓ All lookup functions working flawlessly.');
console.log('\n======================================================');
console.log('🎉 ALL 34 PROVINCES & CITIES DATABASE TESTS PASSED 100%!');
console.log('======================================================');
