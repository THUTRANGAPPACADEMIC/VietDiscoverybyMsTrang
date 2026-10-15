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
  isClassMatching,
  isNameMatching,
  isAccessCodeMatching,
  getNumericClassId,
  getClassCodeFromId,
  CLASS_ID_MAP
} from '../src/lib/studentAuth.ts';

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

async function runVerifiedTests() {
  console.log('===============================================================');
  console.log('🧪 VERIFIED SUPABASE STUDENT LOGIN & SCHEMA TESTS');
  console.log('===============================================================');

  console.log('\n📌 1. SCHEMA & CLASS MAPPING (public."Classes".id = 5 <-> class_name = "5.6")');
  await test('getNumericClassId("5.6") resolves to integer 5', () => {
    assert(getNumericClassId('5.6') === 5, 'Expected 5');
    assert(getNumericClassId('cls-56') === 5, 'Expected 5');
    assert(getNumericClassId(5) === 5, 'Expected 5');
  });

  await test('getClassCodeFromId(5) resolves to "5.6"', () => {
    assert(getClassCodeFromId(5) === '5.6', 'Expected "5.6"');
    assert(getClassCodeFromId('5') === '5.6', 'Expected "5.6"');
  });

  await test('isClassMatching matches student with class_id = 5 and input "5.6"', () => {
    assert(isClassMatching(undefined, 5, '5.6'), 'student with class_id 5 must match input 5.6');
    assert(isClassMatching('5.6', 5, '5.6'), 'student with classCode 5.6 and classId 5 must match input 5.6');
    assert(isClassMatching(undefined, '5', '5.6'), 'student with string classId "5" must match input 5.6');
    assert(isClassMatching(undefined, 'cls-56', '5.6'), 'student with classId cls-56 must match input 5.6');
  });

  await test('isClassMatching rejects cross-class IDs (e.g. class_id = 3 is Class 4.6, not 5.6)', () => {
    assert(!isClassMatching(undefined, 3, '5.6'), 'class_id 3 (Class 4.6) must not match 5.6');
    assert(!isClassMatching(undefined, 4, '5.6'), 'class_id 4 (Class 5.2) must not match 5.6');
  });

  console.log('\n📌 2. VERIFIED STUDENT RECORD LOGIN (ID: 168, Lê Hoàng Khôi, VD56017, Class 5.6)');
  await test('Standard login for Lê Hoàng Khôi in Class 5.6 with VD56017', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'VD56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Lê Hoàng Khôi', `Name mismatch: ${res.user.fullName}`);
    assert(res.user.classCode === '5.6', `Class mismatch: ${res.user.classCode}`);
    assert(res.user.id === '168' || res.user.id === 'STU-56017', `ID mismatch: ${res.user.id}`);
    assert(res.user.studentCode === 'VD56017', `StudentCode mismatch: ${res.user.studentCode}`);
  });

  await test('Login with lowercase code: "vd56017"', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'vd56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Login with unaccented name: "Le Hoang Khoi"', async () => {
    const res = await authenticateStudent('Le Hoang Khoi', '5.6', 'VD56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Login with digits-only code: "56017"', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', '56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Reject incorrect PIN for Lê Hoàng Khôi in Class 5.6', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'WRONG_PIN');
    assert(!res.success, 'Expected login failure with wrong PIN');
    assert(res.errorMessage.includes('Mã số truy cập chưa chính xác'), `Unexpected error: ${res.errorMessage}`);
  });

  console.log('\n📌 3. MULTI-CLASS HOMONYM DISCRIMINATION (4.6 vs 5.6)');
  await test('Lê Hoàng Khôi in Class 4.6 (VD4617) authenticates to Class 4.6', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '4.6', 'VD4617');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.classCode === '4.6', `Expected Class 4.6, got ${res.user.classCode}`);
  });

  await test('Entering 4.6 access code while Class 5.6 selected prompts correct class guidance', async () => {
    // If student accidentally selects 5.6 but enters 4.6 code
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'VD4617');
    // In 5.6, VD4617 is invalid code
    assert(!res.success, 'Should not login to 5.6 with 4.6 code');
  });

  console.log('\n===============================================================');
  console.log(`📊 VERIFIED SUITE RESULTS: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
  console.log('===============================================================');

  if (failed > 0) process.exit(1);
}

runVerifiedTests().catch((e) => {
  console.error(e);
  process.exit(1);
});
