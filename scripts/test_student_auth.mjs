import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

// In-memory mock localStorage
const store = new Map();
globalThis.localStorage = {
  getItem: (key) => store.get(key) || null,
  setItem: (key, val) => store.set(key, String(val)),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear()
};

// Polyfill web crypto if needed
if (!globalThis.crypto?.subtle) {
  globalThis.crypto = crypto.webcrypto;
}

// Read INITIAL_STUDENTS and INITIAL_CLASSES from json
const rosterPath = path.resolve('scripts/students_roster.json');
const INITIAL_STUDENTS = JSON.parse(fs.readFileSync(rosterPath, 'utf-8'));

const INITIAL_CLASSES = [
  { id: 'cls-22', name: 'Class 2.2 - Little Explorers', code: '2.2', gradeLevel: 'Grade 2', gradeBand: 'grade_1_2' },
  { id: 'cls-41', name: 'Class 4.1 - Heritage Navigators', code: '4.1', gradeLevel: 'Grade 4', gradeBand: 'grade_4_5' },
  { id: 'cls-46', name: 'Class 4.6 - Global Scholars', code: '4.6', gradeLevel: 'Grade 4', gradeBand: 'grade_4_5' },
  { id: 'cls-52', name: 'Class 5.2 - Future Pioneers', code: '5.2', gradeLevel: 'Grade 5', gradeBand: 'grade_4_5' },
  { id: 'cls-56', name: 'Class 5.6 - Young Leaders', code: '5.6', gradeLevel: 'Grade 5', gradeBand: 'grade_4_5' },
];

// Helper functions mirroring src/lib/studentAuth.ts
const ACCESS_CODE_SALT = '_vietdiscovery_salt_2026';

async function hashAccessCode(code) {
  const cleanCode = code.trim().toUpperCase();
  const msgUint8 = new TextEncoder().encode(cleanCode + ACCESS_CODE_SALT);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function normalizeVietnameseName(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ');
}

function isNameMatching(inputName, candidateName) {
  if (!inputName || !candidateName) return false;
  const cleanInput = inputName.trim().replace(/\s+/g, ' ');
  const cleanCandidate = candidateName.trim().replace(/\s+/g, ' ');

  if (cleanInput.toLowerCase() === cleanCandidate.toLowerCase()) return true;
  if (cleanInput.toLowerCase().normalize('NFC') === cleanCandidate.toLowerCase().normalize('NFC')) return true;
  if (cleanInput.toLowerCase().normalize('NFD') === cleanCandidate.toLowerCase().normalize('NFD')) return true;
  if (normalizeVietnameseName(cleanInput) === normalizeVietnameseName(cleanCandidate)) return true;
  return false;
}

const CLASS_ID_MAP = {
  '1': '2.2', '2.2': 1, 'cls-22': 1,
  '2': '4.1', '4.1': 2, 'cls-41': 2,
  '3': '4.6', '4.6': 3, 'cls-46': 3,
  '4': '5.2', '5.2': 4, 'cls-52': 4,
  '5': '5.6', '5.6': 5, 'cls-56': 5,
};

function getNumericClassId(classIdentifier) {
  if (classIdentifier === undefined || classIdentifier === null) return null;
  const str = String(classIdentifier).trim().toLowerCase();
  if (['1', '2', '3', '4', '5'].includes(str)) return parseInt(str, 10);
  if (CLASS_ID_MAP[str] && typeof CLASS_ID_MAP[str] === 'number') {
    return CLASS_ID_MAP[str];
  }
  const digits = str.replace(/[^0-9]/g, '');
  if (digits === '22') return 1;
  if (digits === '41') return 2;
  if (digits === '46') return 3;
  if (digits === '52') return 4;
  if (digits === '56') return 5;
  return null;
}

function getClassCodeFromId(classIdentifier) {
  if (classIdentifier === undefined || classIdentifier === null) return '';
  const str = String(classIdentifier).trim().toLowerCase();
  if (['2.2', '4.1', '4.6', '5.2', '5.6'].includes(str)) return str;
  if (CLASS_ID_MAP[str] && typeof CLASS_ID_MAP[str] === 'string') {
    return CLASS_ID_MAP[str];
  }
  const num = getNumericClassId(str);
  if (num && CLASS_ID_MAP[String(num)]) {
    return String(CLASS_ID_MAP[String(num)]);
  }
  return str;
}

function isClassMatching(studentClassCode, studentClassId, inputClassCode) {
  if (!inputClassCode) return false;
  const cleanInput = String(inputClassCode).trim().toLowerCase();
  const cleanCode = String(studentClassCode || '').trim().toLowerCase();
  const cleanId = String(studentClassId ?? '').trim().toLowerCase();

  // 1. Direct match with code or ID
  if (cleanCode === cleanInput || cleanId === cleanInput) return true;

  // 2. Numeric database ID mapping (e.g. database class_id = 5 matches user selection '5.6')
  const inputNumericId = getNumericClassId(cleanInput);
  const studentNumericId = getNumericClassId(cleanId) || getNumericClassId(cleanCode);
  if (inputNumericId !== null && studentNumericId !== null && inputNumericId === studentNumericId) return true;

  // 3. Code resolved from ID match (e.g. student class_id = 5 -> code "5.6")
  const inputResolvedCode = getClassCodeFromId(cleanInput);
  const studentResolvedCode = getClassCodeFromId(cleanCode) || getClassCodeFromId(cleanId);
  if (inputResolvedCode && studentResolvedCode && inputResolvedCode === studentResolvedCode) return true;

  // 4. Normalized code (strip "Class", "Lớp", etc.)
  const normCode = cleanCode.replace(/^(class|lớp)\s*/i, '').trim();
  const normInput = cleanInput.replace(/^(class|lớp)\s*/i, '').trim();
  if (normCode && normCode === normInput) return true;

  // 5. Digit match (e.g. "cls-56" -> "56", "5.6" -> "56")
  const digitsCode = cleanCode.replace(/[^0-9]/g, '');
  const digitsInput = cleanInput.replace(/[^0-9]/g, '');
  if (digitsCode.length >= 2 && digitsCode === digitsInput) return true;

  const idDigits = cleanId.replace(/[^0-9]/g, '');
  if (idDigits.length >= 2 && idDigits === digitsInput) return true;

  return false;
}

function isAccessCodeMatching(inputCode, candidateAccessCode, candidateStudentCode, candidateHash, inputHash, candidateId) {
  if (!inputCode) return false;
  const cleanInput = inputCode.trim().toUpperCase();
  const cleanAccess = (candidateAccessCode || '').trim().toUpperCase();
  const cleanStudent = (candidateStudentCode || '').trim().toUpperCase();
  const cleanId = candidateId !== undefined ? String(candidateId).trim().toUpperCase() : '';

  if (cleanInput === cleanAccess || cleanInput === cleanStudent || (cleanId && cleanInput === cleanId)) return true;
  if (inputHash && candidateHash && inputHash === candidateHash) return true;

  const stripInput = cleanInput.replace(/^(VD|STU-?)/i, '');
  const stripAccess = cleanAccess.replace(/^(VD|STU-?)/i, '');
  const stripStudent = cleanStudent.replace(/^(VD|STU-?)/i, '');
  const stripId = cleanId.replace(/^(VD|STU-?)/i, '');
  if (stripInput && (stripInput === stripAccess || stripInput === stripStudent || (stripId && stripInput === stripId))) return true;

  const parseCode = (str) => {
    const digits = str.replace(/[^0-9]/g, '');
    if (digits.length >= 3) {
      const cls = digits.slice(0, 2);
      const num = parseInt(digits.slice(2), 10);
      return `${cls}-${num}`;
    }
    return digits;
  };

  const pInput = parseCode(cleanInput);
  if (pInput && (pInput === parseCode(cleanAccess) || pInput === parseCode(cleanStudent) || (cleanId && pInput === parseCode(cleanId)))) {
    return true;
  }
  return false;
}

const localStore = {
  get: (key, def) => {
    const raw = localStorage.getItem(`vietdiscovery_${key}`);
    return raw ? JSON.parse(raw) : def;
  },
  set: (key, val) => {
    localStorage.setItem(`vietdiscovery_${key}`, JSON.stringify(val));
  }
};

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000;

function checkPinRateLimit(studentId) {
  const raw = localStorage.getItem(`vietdiscovery_ratelimit_${studentId}`);
  if (!raw) return { isLocked: false, remainingSeconds: 0 };
  const record = JSON.parse(raw);
  if (record.lockedUntil && record.lockedUntil > Date.now()) {
    return { isLocked: true, remainingSeconds: Math.ceil((record.lockedUntil - Date.now()) / 1000) };
  }
  return { isLocked: false, remainingSeconds: 0 };
}

function recordFailedPinAttempt(studentId) {
  const raw = localStorage.getItem(`vietdiscovery_ratelimit_${studentId}`);
  let record = raw ? JSON.parse(raw) : { count: 0, lockedUntil: null };
  record.count += 1;
  if (record.count >= MAX_FAILED_ATTEMPTS) {
    record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
    localStorage.setItem(`vietdiscovery_ratelimit_${studentId}`, JSON.stringify(record));
    return { isNowLocked: true, remainingAttempts: 0, remainingSeconds: 60 };
  }
  localStorage.setItem(`vietdiscovery_ratelimit_${studentId}`, JSON.stringify(record));
  return { isNowLocked: false, remainingAttempts: MAX_FAILED_ATTEMPTS - record.count, remainingSeconds: 0 };
}

function resetPinRateLimit(studentId) {
  localStorage.removeItem(`vietdiscovery_ratelimit_${studentId}`);
}

async function authenticateStudent(fullName, classCode, accessCode) {
  const cleanFullName = (fullName || '').trim();
  const cleanClassCode = (classCode || '').trim();
  const cleanAccessCode = (accessCode || '').trim();

  if (!cleanFullName) return { success: false, errorMessage: 'Vui lòng nhập Họ và Tên học sinh.' };
  if (!cleanClassCode) return { success: false, errorMessage: 'Vui lòng chọn Lớp học của con.' };
  if (!cleanAccessCode) return { success: false, errorMessage: 'Vui lòng nhập Mã số truy cập riêng do cô Trang cấp.' };

  let students = localStore.get('students', INITIAL_STUDENTS);
  if (!students || students.length < INITIAL_STUDENTS.length) {
    const existingIds = new Set((students || []).map(s => s.id));
    const missing = INITIAL_STUDENTS.filter(s => !existingIds.has(s.id));
    students = [...(students || []), ...missing];
    localStore.set('students', students);
  }

  let candidate = students.find(s => {
    if (!isClassMatching(s.classCode, s.classId, cleanClassCode)) return false;
    return isNameMatching(cleanFullName, s.name);
  });

  if (!candidate) {
    const matchingStudents = students.filter(s => isNameMatching(cleanFullName, s.name));
    if (matchingStudents.length > 0) {
      const inputHashUpper = await hashAccessCode(cleanAccessCode.toUpperCase());
      const matchingByCode = matchingStudents.find(s =>
        isAccessCodeMatching(
          cleanAccessCode,
          s.accessCode || '',
          s.studentCode,
          s.accessCodeHash,
          inputHashUpper,
          s.id
        )
      );

      if (matchingByCode) {
        candidate = matchingByCode;
      } else {
        const primaryMatch = matchingStudents[0];
        const assignedClassCode = getClassCodeFromId(primaryMatch.classId) || primaryMatch.classCode;
        return {
          success: false,
          errorMessage: `Học sinh "${cleanFullName}" thuộc Lớp ${assignedClassCode}. Bé hãy chọn đúng Lớp ${assignedClassCode} nhé!`
        };
      }
    }
  }

  if (!candidate) {
    return {
      success: false,
      errorMessage: `Không tìm thấy học sinh "${cleanFullName}" trong Lớp ${cleanClassCode}. Con hãy kiểm tra lại họ tên hoặc chọn đúng lớp nhé!`
    };
  }

  const { isLocked, remainingSeconds } = checkPinRateLimit(candidate.id);
  if (isLocked) {
    return {
      success: false,
      errorMessage: `Tài khoản tạm thời bị khóa do nhập sai nhiều lần. Vui lòng chờ ${remainingSeconds} giây nữa nhé!`,
      isLocked: true,
      remainingSeconds
    };
  }

  const inputHashRaw = await hashAccessCode(cleanAccessCode);
  const inputHashUpper = await hashAccessCode(cleanAccessCode.toUpperCase());

  const isMatch = isAccessCodeMatching(
    cleanAccessCode,
    candidate.accessCode || '',
    candidate.studentCode,
    candidate.accessCodeHash,
    inputHashUpper,
    candidate.id
  ) || inputHashRaw === candidate.accessCodeHash || inputHashUpper === candidate.accessCodeHash;

  if (!isMatch) {
    const { isNowLocked, remainingAttempts, remainingSeconds: lockSec } = recordFailedPinAttempt(candidate.id);
    if (isNowLocked) {
      return {
        success: false,
        errorMessage: 'Con đã nhập sai mã 5 lần. Tài khoản tạm khóa trong 60 giây để bảo vệ!',
        isLocked: true,
        remainingSeconds: lockSec
      };
    }
    return {
      success: false,
      errorMessage: `Mã số truy cập chưa chính xác! Con còn ${remainingAttempts} lần thử.`,
      isLocked: false,
      remainingAttempts
    };
  }

  resetPinRateLimit(candidate.id);

  const matchedClass = INITIAL_CLASSES.find(c => isClassMatching(c.code, c.id, candidate.classCode)) || {
    id: String(candidate.classId),
    name: candidate.className || `Class ${candidate.classCode}`,
    code: candidate.classCode,
    gradeLevel: candidate.gradeLevel || 'Grade 5',
    gradeBand: candidate.gradeBand || 'grade_4_5'
  };

  const authenticatedUser = {
    id: String(candidate.id),
    studentCode: candidate.studentCode || candidate.id,
    fullName: candidate.name,
    role: 'student',
    classId: String(matchedClass.id),
    className: matchedClass.name,
    classCode: matchedClass.code,
    gradeLevel: matchedClass.gradeLevel,
    gradeBand: matchedClass.gradeBand,
    stars: candidate.totalStars || 200,
    avatar: candidate.avatar || 'boy_little_explorer'
  };

  return {
    success: true,
    user: authenticatedUser
  };
}

// -------------------------------------------------------------
// TEST RUNNER
// -------------------------------------------------------------
async function runTests() {
  console.log('===============================================================');
  console.log('🧪 VIETDISCOVERY STUDENT AUTHENTICATION TEST SUITE');
  console.log('===============================================================\n');

  let passed = 0;
  let failed = 0;

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

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  console.log('📌 1. TARGET REPORTED CASE: Lê Hoàng Khôi (Class 5.6)');
  await test('Lê Hoàng Khôi in Class 5.6 with VD56017 (Standard login)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'VD56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.fullName === 'Lê Hoàng Khôi', 'Wrong user name');
    assert(res.user.classCode === '5.6', 'Wrong class code');
    assert(res.user.studentCode === 'VD56017' || res.user.studentCode === 'STU-56017', 'Expected VD56017 or STU-56017');
    assert(res.user.id === '168' || res.user.id === 'STU-56017', 'Expected ID 168 or STU-56017');
    assert(res.user.classId === '5' || res.user.classId === 'cls-56', 'Expected classId 5 or cls-56');
  });

  await test('Lê Hoàng Khôi in Class 5.6 with vd56017 (Lowercase code)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'vd56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Le Hoang Khoi in Class 5.6 with VD56017 (Unaccented name)', async () => {
    const res = await authenticateStudent('Le Hoang Khoi', '5.6', 'VD56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Lê Hoàng Khôi in Class 5.6 with 56017 (Digits only without VD prefix)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', '56017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Lê Hoàng Khôi entering wrong PIN in Class 5.6', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '5.6', 'WRONG999');
    assert(!res.success, 'Expected failure');
    assert(res.errorMessage.includes('Mã số truy cập chưa chính xác'), `Unexpected message: ${res.errorMessage}`);
  });

  console.log('\n📌 2. CLASS 5.6 ROSTER & PRESERVED STUDENTS');
  await test('Phạm Đức Anh in Class 5.6 (Preserved student STU-5601)', async () => {
    const res = await authenticateStudent('Phạm Đức Anh', '5.6', 'VD5601');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.id === 'STU-5601', 'Must match preserved ID');
    assert(res.user.stars === 390, 'Must preserve stars (390)');
  });

  await test('Trần Nguyễn Thành Long in Class 5.6 (Excel STT 17, VD5617)', async () => {
    const res = await authenticateStudent('Trần Nguyễn Thành Long', '5.6', 'VD5617');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.id === 'STU-5617', 'Must match STU-5617');
  });

  console.log('\n📌 3. CLASS 4.6 ROSTER & PRESERVED STUDENTS');
  await test('Lê Hoàng Khôi in Class 4.6 (Excel STT 17, VD4617)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '4.6', 'VD4617');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.classCode === '4.6', 'Must be class 4.6');
  });

  await test('Lê Hoàng Khôi in Class 4.6 with VD46017 (3-digit index code)', async () => {
    const res = await authenticateStudent('Lê Hoàng Khôi', '4.6', 'VD46017');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Hoàng Tuấn Kiệt in Class 4.6 (Preserved student STU-4601)', async () => {
    const res = await authenticateStudent('Hoàng Tuấn Kiệt', '4.6', 'VD4601');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.stars === 350, 'Must preserve stars (350)');
  });

  await test('Nguyễn Kim Anh in Class 4.6 (Excel STT 1, VD4601)', async () => {
    const res = await authenticateStudent('Nguyễn Kim Anh', '4.6', 'VD4601');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  console.log('\n📌 4. CLASS 4.1 ROSTER & PRESERVED STUDENTS');
  await test('Nguyễn Minh Khôi in Class 4.1 (Preserved student STU-4101)', async () => {
    const res = await authenticateStudent('Nguyễn Minh Khôi', '4.1', 'VD4101');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.stars === 310, 'Must preserve stars (310)');
  });

  await test('Hà Tuệ An in Class 4.1 (Excel STT 1, VD4101)', async () => {
    const res = await authenticateStudent('Hà Tuệ An', '4.1', 'VD4101');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Lê Phương Anh in Class 4.1 with lowercase vd4102', async () => {
    const res = await authenticateStudent('Lê Phương Anh', '4.1', 'vd4102');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  console.log('\n📌 5. CLASS 2.2 ROSTER & PRESERVED STUDENTS');
  await test('Bùi Gia Huy in Class 2.2 (Preserved student STU-2201)', async () => {
    const res = await authenticateStudent('Bùi Gia Huy', '2.2', 'VD2201');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.stars === 220, 'Must preserve stars (220)');
  });

  await test('Phạm Khánh An in Class 2.2 (Excel STT 1, VD2201)', async () => {
    const res = await authenticateStudent('Phạm Khánh An', '2.2', 'VD2201');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.id === 'STU-22001', 'Expected unique ID STU-22001');
  });

  await test('Trần Bảo Ngọc in Class 2.2 (Preserved student STU-2202)', async () => {
    const res = await authenticateStudent('Trần Bảo Ngọc', '2.2', 'VD2202');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  console.log('\n📌 6. CLASS 5.2 ROSTER & PRESERVED STUDENTS');
  await test('Võ Minh Quân in Class 5.2 (Preserved student STU-5201)', async () => {
    const res = await authenticateStudent('Võ Minh Quân', '5.2', 'VD5201');
    assert(res.success, `Login failed: ${res.errorMessage}`);
    assert(res.user.stars === 320, 'Must preserve stars (320)');
  });

  await test('Đặng Lâm Đăng Khôi in Class 5.2 (Excel STT 12, VD5212)', async () => {
    const res = await authenticateStudent('Đặng Lâm Đăng Khôi', '5.2', 'VD5212');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  await test('Ngô Thùy Dương in Class 5.2 (Preserved student STU-5202)', async () => {
    const res = await authenticateStudent('Ngô Thùy Dương', '5.2', 'VD5202');
    assert(res.success, `Login failed: ${res.errorMessage}`);
  });

  console.log('\n📌 7. INVALID SCENARIOS & SECURITY CHECKS');
  await test('Non-existent student in Class 5.6', async () => {
    const res = await authenticateStudent('Học Sinh Không Có Thật', '5.6', 'VD5601');
    assert(!res.success, 'Expected failure for non-existent student');
    assert(res.errorMessage.includes('Không tìm thấy học sinh'), `Expected error message, got: ${res.errorMessage}`);
  });

  await test('Cross-class wrong class selected with wrong PIN', async () => {
    const res = await authenticateStudent('Bùi Gia Huy', '5.6', 'WRONGCODE');
    assert(!res.success, 'Expected failure');
    assert(res.errorMessage.includes('thuộc Lớp 2.2'), `Expected advice to select 2.2, got: ${res.errorMessage}`);
  });

  await test('Rate limiting / lockout after 5 consecutive failures', async () => {
    const testStudent = 'Đỗ Hà My';
    const testClass = '5.6';
    resetPinRateLimit('STU-5602');

    // Attempt 1
    let r = await authenticateStudent(testStudent, testClass, 'BAD1');
    assert(!r.success && r.remainingAttempts === 4, `Attempt 1 failed incorrectly: ${JSON.stringify(r)}`);

    // Attempt 2
    r = await authenticateStudent(testStudent, testClass, 'BAD2');
    assert(!r.success && r.remainingAttempts === 3, 'Attempt 2 failed incorrectly');

    // Attempt 3
    r = await authenticateStudent(testStudent, testClass, 'BAD3');
    assert(!r.success && r.remainingAttempts === 2, 'Attempt 3 failed incorrectly');

    // Attempt 4
    r = await authenticateStudent(testStudent, testClass, 'BAD4');
    assert(!r.success && r.remainingAttempts === 1, 'Attempt 4 failed incorrectly');

    // Attempt 5 -> Lockout!
    r = await authenticateStudent(testStudent, testClass, 'BAD5');
    assert(!r.success && r.isLocked === true, 'Attempt 5 should trigger lockout');
    assert(r.remainingSeconds > 0, 'Should have positive lockout seconds');

    // Attempt 6 while locked -> Rejected immediately without processing
    r = await authenticateStudent(testStudent, testClass, 'BAD6');
    assert(!r.success && r.isLocked === true, 'Should still be locked');
    assert(r.errorMessage.includes('khóa'), 'Should state account is locked');

    // Clean up
    resetPinRateLimit('STU-5602');
  });

  console.log('\n===============================================================');
  console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED (Total: ${passed + failed})`);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
