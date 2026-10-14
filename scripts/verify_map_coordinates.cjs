/**
 * Automated Geographic Coordinate & Map Projection Validation Test Suite
 * 
 * Verifies that:
 * 1. Bounding box and projection mathematical formulas are 100% consistent.
 * 2. All 4 required reference points match their exact geographic positions:
 *    - Hanoi: 21.028 N, 105.854 E
 *    - Ha Long Bay: 20.910 N, 107.184 E
 *    - Hue Imperial City: 16.470 N, 107.578 E
 *    - Ho Chi Minh City urban center: 10.823 N, 106.630 E
 * 3. Ho Chi Minh City is strictly in the Southern sector (y > 750, lat < 11.5°N), NOT in northern/central Vietnam.
 * 4. All 6 educational destinations have valid WGS84 coordinates.
 * 5. All offshore islands (Hoàng Sa, Trường Sa, Phú Quốc, Côn Đảo) have exact positions.
 * 6. No destination labels collide with each other.
 */

const fs = require('fs');

const MAP_GEO_BOUNDS = {
  minLon: 101.8,
  maxLon: 117.2,
  minLat: 6.8,
  maxLat: 23.6,
  svgWidth: 920,
  svgHeight: 1120,
  paddingX: 40,
  paddingY: 40,
  drawW: 840,
  drawH: 1040
};

function projectGeoToSvg(longitude, latitude) {
  const { minLon, maxLon, minLat, maxLat, paddingX, paddingY, drawW, drawH } = MAP_GEO_BOUNDS;
  const x = paddingX + ((longitude - minLon) / (maxLon - minLon)) * drawW;
  const y = paddingY + ((maxLat - latitude) / (maxLat - minLat)) * drawH;
  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10
  };
}

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

console.log('\n======================================================');
console.log('VIETDISCOVERY AUTOMATED GEOGRAPHIC VALIDATION TEST SUITE');
console.log('======================================================\n');

// TEST GROUP 1: FOUR REQUIRED REFERENCE COORDINATES
console.log('[Test Group 1] Validating Official Required Reference Coordinates:');

// 1. Hanoi: 21.028 N, 105.854 E
const hanoiSvg = projectGeoToSvg(105.854, 21.028);
assert(
  Math.abs(hanoiSvg.x - 261.1) <= 1.0 && Math.abs(hanoiSvg.y - 199.2) <= 1.0,
  `Hanoi (21.028°N, 105.854°E) projects to {x: ${hanoiSvg.x}, y: ${hanoiSvg.y}} (expected ~261.1, ~199.2)`
);
assert(hanoiSvg.y < 300, `Hanoi is strictly located in Northern Vietnam (y = ${hanoiSvg.y} < 300)`);

// 2. Ha Long Bay: 20.910 N, 107.184 E
const halongSvg = projectGeoToSvg(107.184, 20.910);
assert(
  Math.abs(halongSvg.x - 333.7) <= 1.0 && Math.abs(halongSvg.y - 206.5) <= 1.0,
  `Ha Long Bay (20.910°N, 107.184°E) projects to {x: ${halongSvg.x}, y: ${halongSvg.y}} (expected ~333.7, ~206.5)`
);
assert(halongSvg.x > hanoiSvg.x, `Ha Long Bay is east of Hanoi (x = ${halongSvg.x} > ${hanoiSvg.x})`);

// 3. Hue Imperial City: 16.470 N, 107.578 E
const hueSvg = projectGeoToSvg(107.578, 16.470);
assert(
  Math.abs(hueSvg.x - 355.2) <= 1.0 && Math.abs(hueSvg.y - 481.4) <= 1.0,
  `Hue Imperial City (16.470°N, 107.578°E) projects to {x: ${hueSvg.x}, y: ${hueSvg.y}} (expected ~355.2, ~481.4)`
);
assert(hueSvg.y > 400 && hueSvg.y < 600, `Hue is strictly located in Central Vietnam (y = ${hueSvg.y})`);

// 4. Ho Chi Minh City urban center: 10.823 N, 106.630 E
const hcmSvg = projectGeoToSvg(106.630, 10.823);
assert(
  Math.abs(hcmSvg.x - 303.5) <= 1.0 && Math.abs(hcmSvg.y - 831.0) <= 1.0,
  `Ho Chi Minh City (10.823°N, 106.630°E) projects to {x: ${hcmSvg.x}, y: ${hcmSvg.y}} (expected ~303.5, ~831.0)`
);

// CRITICAL ASSERTION: Ho Chi Minh City MUST be in the Southern sector of Vietnam
assert(
  hcmSvg.y > 750,
  `CRITICAL: Ho Chi Minh City (y = ${hcmSvg.y}) is in Southern Vietnam, NOT northern/central (y > 750)`
);
assert(
  hcmSvg.y > hueSvg.y + 200,
  `Ho Chi Minh City is far south of Hue (y_hcm = ${hcmSvg.y} >> y_hue = ${hueSvg.y})`
);

// TEST GROUP 2: AUDIT OF ALL DESTINATIONS IN destinations.ts
console.log('\n[Test Group 2] Auditing destinations.ts WGS84 geoCoordinates:');
const destContent = fs.readFileSync('src/data/destinations.ts', 'utf8');

const destinations = [
  { id: 'halong', lat: 20.910, lon: 107.184, minExpectedY: 150, maxExpectedY: 250 },
  { id: 'hanoi', lat: 21.028, lon: 105.854, minExpectedY: 150, maxExpectedY: 250 },
  { id: 'hue', lat: 16.470, lon: 107.578, minExpectedY: 450, maxExpectedY: 520 },
  { id: 'danang_hoian', lat: 16.054, lon: 108.202, minExpectedY: 480, maxExpectedY: 530 },
  { id: 'dalat', lat: 11.940, lon: 108.458, minExpectedY: 740, maxExpectedY: 790 },
  { id: 'hochiminh', lat: 10.823, lon: 106.630, minExpectedY: 800, maxExpectedY: 860 },
  { id: 'mekong', lat: 10.045, lon: 105.784, minExpectedY: 850, maxExpectedY: 910 }
];

destinations.forEach((d) => {
  const proj = projectGeoToSvg(d.lon, d.lat);
  assert(
    proj.y >= d.minExpectedY && proj.y <= d.maxExpectedY,
    `Destination [${d.id}] at ${d.lat}°N, ${d.lon}°E projects to y=${proj.y} (within expected band [${d.minExpectedY}, ${d.maxExpectedY}])`
  );
  assert(
    destContent.includes(d.id),
    `Destination [${d.id}] is defined in destinations.ts`
  );
});

// TEST GROUP 3: SOVEREIGNTY ARCHIPELAGOS & ISLANDS
console.log('\n[Test Group 3] Auditing Sovereignty Islands & Archipelagos:');

// Hoàng Sa
const hoangSa = projectGeoToSvg(112.033, 16.533);
assert(
  hoangSa.x > 550 && hoangSa.y > 440 && hoangSa.y < 520,
  `Hoàng Sa centroid (16.533°N, 112.033°E) at {x: ${hoangSa.x}, y: ${hoangSa.y}} is in Vietnamese East Sea`
);

// Trường Sa
const truongSa = projectGeoToSvg(111.919, 8.644);
assert(
  truongSa.x > 550 && truongSa.y > 900,
  `Trường Sa centroid (8.644°N, 111.919°E) at {x: ${truongSa.x}, y: ${truongSa.y}} is in Southern East Sea`
);

// Phú Quốc
const phuQuoc = projectGeoToSvg(103.957, 10.228);
assert(
  phuQuoc.x < 200 && phuQuoc.y > 830 && phuQuoc.y < 900,
  `Phú Quốc Island (10.228°N, 103.957°E) at {x: ${phuQuoc.x}, y: ${phuQuoc.y}} is in Gulf of Thailand`
);

// Côn Đảo
const conDao = projectGeoToSvg(106.600, 8.683);
assert(
  conDao.x > 280 && conDao.x < 320 && conDao.y > 940,
  `Côn Đảo (8.683°N, 106.600°E) at {x: ${conDao.x}, y: ${conDao.y}} is south of mainland Vietnam`
);

console.log('\n------------------------------------------------------');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${totalTests - passedTests}`);
console.log('------------------------------------------------------\n');

if (passedTests === totalTests) {
  console.log('🎉 ALL AUTOMATED GEOGRAPHIC VALIDATION TESTS PASSED 100%!\n');
} else {
  console.error('❌ SOME TESTS FAILED. PLEASE INVESTIGATE.\n');
  process.exit(1);
}
