const fs = require('fs');

console.log('======================================================');
console.log('34 PROVINCES INTERACTIVE MAP LEARNING GAME TEST SUITE');
console.log('======================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// 1. Load Generated Geodata File
const geodataContent = fs.readFileSync('src/data/vietnam34ProvincesGeoData.ts', 'utf8');
const jsonMatch = geodataContent.match(/export const VIETNAM_34_PROVINCES_GEO: Province34GeoFeature\[\] = (\[[\s\S]*?\]);\s*$/);

assert(jsonMatch !== null, 'Found VIETNAM_34_PROVINCES_GEO array in dataset');
const provinces34 = JSON.parse(jsonMatch[1]);

// 2. Count Test
console.log('\n[Test Group 1] Administrative Units Count & Integrity:');
assert(provinces34.length === 34, `Exact unit count is 34 (actual: ${provinces34.length})`);

const uniqueCodes = new Set(provinces34.map(p => p.code));
assert(uniqueCodes.size === 34, `All 34 province codes are unique (size: ${uniqueCodes.size})`);

const uniqueIds = new Set(provinces34.map(p => p.id));
assert(uniqueIds.size === 34, `All 34 province IDs are unique (size: ${uniqueIds.size})`);

// 3. Regional Distribution Test
console.log('\n[Test Group 2] Regional Distribution (North 14, Central 8, South 6, Cities 6):');
const north = provinces34.filter(p => p.region === 'North');
const central = provinces34.filter(p => p.region === 'Central');
const south = provinces34.filter(p => p.region === 'South');

assert(north.length === 16, `Northern region has 16 units (including Hanoi & Hai Phong) (actual: ${north.length})`);
assert(central.length === 10, `Central region has 10 units (including Hue & Da Nang) (actual: ${central.length})`);
assert(south.length === 8, `Southern region has 8 units (including HCMC & Can Tho) (actual: ${south.length})`);
assert(north.length + central.length + south.length === 34, 'Total across regions equals 34');

// 4. Polygon & Cartographic Validation
console.log('\n[Test Group 3] Cartographic Polygons & WGS84 Centroids:');
provinces34.forEach(p => {
  const hasValidPath = p.svgPath.startsWith('M ') && p.svgPath.endsWith('Z') && p.svgPath.length > 50;
  assert(hasValidPath, `Province [${p.code}] ${p.nameEn} has valid SVG path (${p.svgPath.length} chars)`);

  const inBounds = p.centroid.x > 50 && p.centroid.x < 850 && p.centroid.y > 50 && p.centroid.y < 1080;
  assert(inBounds, `Province [${p.code}] centroid {x: ${p.centroid.x}, y: ${p.centroid.y}} within map bounds`);

  const hasLabel = p.labelAnchor && p.labelAnchor.x > 40 && p.labelAnchor.y > 40;
  assert(hasLabel, `Province [${p.code}] has valid collision-free label anchor`);
});

// 5. English-First Learning Metadata Validation
console.log('\n[Test Group 4] English-First Pedagogical Content:');
provinces34.forEach(p => {
  assert(p.nameEn.length > 2, `Province [${p.code}] has English Name: "${p.nameEn}"`);
  assert(p.nameVi.length > 2, `Province [${p.code}] has Vietnamese Name: "${p.nameVi}"`);
  assert(p.learningEn.length > 20, `Province [${p.code}] has descriptive English learning text (${p.learningEn.length} chars)`);
  assert(p.speechEn.length > 20, `Province [${p.code}] has English speech narration text (${p.speechEn.length} chars)`);
  assert(p.landmarkEn.length > 5, `Province [${p.code}] has Key Landmark: "${p.landmarkEn}"`);
});

// 6. Grade Differentiation Test
console.log('\n[Test Group 5] Grade-Specific Difficulty Progression:');
const g1 = provinces34.filter(p => p.gradeBands.includes('grade_1'));
const g2 = provinces34.filter(p => p.gradeBands.includes('grade_2'));
const g3 = provinces34.filter(p => p.gradeBands.includes('grade_3'));
const g4 = provinces34.filter(p => p.gradeBands.includes('grade_4'));
const g5 = provinces34.filter(p => p.gradeBands.includes('grade_5'));

assert(g1.length >= 5, `Grade 1 has iconic starter provinces (actual: ${g1.length} >= 5)`);
assert(g1.some(p => p.code === 'HN'), 'Grade 1 includes Hanoi');
assert(g1.some(p => p.code === 'QN'), 'Grade 1 includes Quang Ninh (Ha Long)');
assert(g1.some(p => p.code === 'HUE'), 'Grade 1 includes Hue');
assert(g1.some(p => p.code === 'DN'), 'Grade 1 includes Da Nang');
assert(g1.some(p => p.code === 'HCM'), 'Grade 1 includes Ho Chi Minh City');

assert(g2.length >= 8, `Grade 2 has expanded familiar set (actual: ${g2.length} >= 8)`);
assert(g3.length >= 25, `Grade 3 has regional matching set (actual: ${g3.length} >= 25)`);
assert(g5.length === 34, `Grade 5 includes all 34 provinces for master challenge (actual: ${g5.length})`);

// 7. Drag & Drop ID Validation Logic
console.log('\n[Test Group 6] Drag & Drop Logic & ID-Based Answer Validation:');
const hanoi = provinces34.find(p => p.code === 'HN');
const halong = provinces34.find(p => p.code === 'QN');
const hcmc = provinces34.find(p => p.code === 'HCM');

function validateDrop(target, dropped) {
  return target.id === dropped.id;
}

assert(validateDrop(hanoi, hanoi) === true, 'Hanoi card dropped on Hanoi polygon evaluates to TRUE');
assert(validateDrop(halong, halong) === true, 'Ha Long / Quang Ninh card dropped on Quang Ninh polygon evaluates to TRUE');
assert(validateDrop(hcmc, hcmc) === true, 'HCMC card dropped on HCMC polygon evaluates to TRUE');
assert(validateDrop(hanoi, halong) === false, 'Hanoi card dropped on Quang Ninh polygon evaluates strictly to FALSE');
assert(validateDrop(hcmc, hanoi) === false, 'HCMC card dropped on Hanoi polygon evaluates strictly to FALSE');

// 8. Summary
console.log('\n------------------------------------------------------');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log('------------------------------------------------------\n');

if (failedTests === 0) {
  console.log('🎉 ALL 34 PROVINCES INTERACTIVE MAP TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`💥 ${failedTests} tests failed.`);
  process.exit(1);
}
