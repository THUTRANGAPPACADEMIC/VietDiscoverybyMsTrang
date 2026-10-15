import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// Mock localStorage
const store = new Map();
globalThis.localStorage = {
  getItem: (key) => store.get(key) || null,
  setItem: (key, val) => store.set(key, String(val)),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear()
};

if (!globalThis.crypto?.subtle) {
  globalThis.crypto = crypto.webcrypto;
}

import {
  authenticateStudent,
  getNumericClassId,
  getClassCodeFromId,
  isClassMatching,
  CLASS_ID_MAP
} from '../src/lib/studentAuth.ts';

import {
  STUDENT_CLASSROOM_OPTIONS
} from '../src/components/StudentAuthModal.tsx';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    failed++;
  }
}

async function runTests() {
  console.log('===============================================================');
  console.log('🧪 VIETDISCOVERY CLASSROOM DROPDOWN & 5-CLASS LOGIN SUITE');
  console.log('===============================================================');

  console.log('\n📌 1. VERIFY CLASSROOM DROPDOWN OPTIONS');
  await test('Dropdown displays exactly 5 options', () => {
    assert(STUDENT_CLASSROOM_OPTIONS.length === 5, `Expected 5 options, got ${STUDENT_CLASSROOM_OPTIONS.length}`);
  });

  const expectedOptions = [
    { code: '2.2', label: 'Class 2.2', classId: 1 },
    { code: '4.1', label: 'Class 4.1', classId: 2 },
    { code: '4.6', label: 'Class 4.6', classId: 3 },
    { code: '5.2', label: 'Class 5.2', classId: 4 },
    { code: '5.6', label: 'Class 5.6', classId: 5 },
  ];

  for (let i = 0; i < expectedOptions.length; i++) {
    const exp = expectedOptions[i];
    await test(`Option #${i + 1} matches "${exp.label}" with code "${exp.code}" and classId ${exp.classId}`, () => {
      const opt = STUDENT_CLASSROOM_OPTIONS[i];
      assert(opt.code === exp.code, `Code mismatch: ${opt.code} !== ${exp.code}`);
      assert(opt.label === exp.label, `Label mismatch: ${opt.label} !== ${exp.label}`);
      assert(opt.classId === exp.classId, `ClassId mismatch: ${opt.classId} !== ${exp.classId}`);
    });
  }

  await test('Dropdown contains NO redundant descriptive text (e.g. "Young Leaders", "Grade 5")', () => {
    for (const opt of STUDENT_CLASSROOM_OPTIONS) {
      assert(!opt.label.includes('Young Leaders'), `Found "Young Leaders" in ${opt.label}`);
      assert(!opt.label.includes('Grade'), `Found "Grade" in ${opt.label}`);
      assert(!opt.label.includes('Explorers'), `Found "Explorers" in ${opt.label}`);
      assert(!opt.label.includes('Scholars'), `Found "Scholars" in ${opt.label}`);
      assert(!opt.label.includes('Navigators'), `Found "Navigators" in ${opt.label}`);
      assert(!opt.label.includes('Pioneers'), `Found "Pioneers" in ${opt.label}`);
    }
  });

  console.log('\n📌 2. VERIFY NUMERIC CLASS_ID MAPPINGS FOR SUPABASE');
  await test('Each classroom option correctly maps to the verified Supabase Classes table ID', () => {
    assert(getNumericClassId('2.2') === 1, 'Class 2.2 must map to class_id = 1');
    assert(getNumericClassId('Class 2.2') === 1, '"Class 2.2" must map to class_id = 1');
    assert(getNumericClassId('4.1') === 2, 'Class 4.1 must map to class_id = 2');
    assert(getNumericClassId('Class 4.1') === 2, '"Class 4.1" must map to class_id = 2');
    assert(getNumericClassId('4.6') === 3, 'Class 4.6 must map to class_id = 3');
    assert(getNumericClassId('Class 4.6') === 3, '"Class 4.6" must map to class_id = 3');
    assert(getNumericClassId('5.2') === 4, 'Class 5.2 must map to class_id = 4');
    assert(getNumericClassId('Class 5.2') === 4, '"Class 5.2" must map to class_id = 4');
    assert(getNumericClassId('5.6') === 5, 'Class 5.6 must map to class_id = 5');
    assert(getNumericClassId('Class 5.6') === 5, '"Class 5.6" must map to class_id = 5');
  });

  await test('getClassCodeFromId returns clean class code for IDs 1-5', () => {
    assert(getClassCodeFromId(1) === '2.2', '1 -> 2.2');
    assert(getClassCodeFromId(2) === '4.1', '2 -> 4.1');
    assert(getClassCodeFromId(3) === '4.6', '3 -> 4.6');
    assert(getClassCodeFromId(4) === '5.2', '4 -> 5.2');
    assert(getClassCodeFromId(5) === '5.6', '5 -> 5.6');
  });

  console.log('\n📌 3. STUDENT LOGIN FUNCTIONALITY FOR ALL 5 CLASSES');
  
  // Class 2.2
  await test('Login Student in Class 2.2: Bùi Gia Huy (VD2201)', async () => {
    const res = await authenticateStudent('Bùi Gia Huy', '2.2', 'VD2201');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Bùi Gia Huy', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '2.2', `ClassCode: ${res.user.classCode}`);
  });

  // Class 4.1
  await test('Login Student in Class 4.1: Nguyễn Minh Khôi (VD4101)', async () => {
    const res = await authenticateStudent('Nguyễn Minh Khôi', '4.1', 'VD4101');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Nguyễn Minh Khôi', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '4.1', `ClassCode: ${res.user.classCode}`);
  });

  // Class 4.6
  await test('Login Student in Class 4.6: Hoàng Tuấn Kiệt (VD4601)', async () => {
    const res = await authenticateStudent('Hoàng Tuấn Kiệt', '4.6', 'VD4601');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Hoàng Tuấn Kiệt', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '4.6', `ClassCode: ${res.user.classCode}`);
  });

  // Class 5.2
  await test('Login Student in Class 5.2: Võ Minh Quân (VD5201)', async () => {
    const res = await authenticateStudent('Võ Minh Quân', '5.2', 'VD5201');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Võ Minh Quân', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '5.2', `ClassCode: ${res.user.classCode}`);
  });

  // Class 5.6 - Target student Lê Hoàng Khôi (ID 168, class_id 5, VD56017)
  await test('Login Verified Student in Class 5.6: Lê Hoàng Khôi (VD56017, ID: 168, class_id: 5)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'VD56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Lê Hoàng Khôi', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '5.6', `ClassCode: ${res.user.classCode}`);
    assert(res.user.studentCode === 'VD56017', `StudentCode: ${res.user.studentCode}`);
  });

  // Class 5.6 - Additional student Phạm Đức Anh (VD5601)
  await test('Login Student in Class 5.6: Phạm Đức Anh (VD5601)', async () => {
    const res = await authenticateStudent('Phạm Đức Anh', '5.6', 'VD5601');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Phạm Đức Anh', `Name: ${res.user.fullName}`);
    assert(res.user.classCode === '5.6', `ClassCode: ${res.user.classCode}`);
  });

  console.log('\n📌 4. ACCURACY AND SECURITY VALIDATIONS');
  await test('Reject login when wrong access code entered', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'WRONG999');
    assert(!res.success, 'Login should fail with wrong access code');
  });

  await test('Friendly message when student enters non-existent name', async () => {
    const res = await authenticateStudent('Học Sinh Không Có Thật', '5.6', 'VD56017');
    assert(!res.success, 'Login should fail for non-existent student');
    assert(res.errorMessage.includes('Không tìm thấy học sinh'), `Message: ${res.errorMessage}`);
  });

  console.log('\n===============================================================');
  console.log(`📊 FINAL RESULTS: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
  console.log('===============================================================');

  if (failed > 0) process.exit(1);
}

runTests();
