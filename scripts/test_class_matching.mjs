const CLASS_ID_MAP = {
  '1': '2.2', '2.2': '1', 'cls-22': '1',
  '2': '4.1', '4.1': '2', 'cls-41': '2',
  '3': '4.6', '4.6': '3', 'cls-46': '3',
  '4': '5.2', '5.2': '4', 'cls-52': '4',
  '5': '5.6', '5.6': '5', 'cls-56': '5',
};

function isClassMatching(studentClassCode, studentClassId, inputClassCode) {
  if (!inputClassCode) return false;
  const cleanInput = String(inputClassCode).trim().toLowerCase();
  const cleanCode = String(studentClassCode || '').trim().toLowerCase();
  const cleanId = String(studentClassId || '').trim().toLowerCase();

  // 1. Direct match
  if (cleanCode === cleanInput || cleanId === cleanInput) return true;

  // 2. Map-based ID <-> Code match (e.g. ID 5 <-> 5.6)
  if (CLASS_ID_MAP[cleanId] && String(CLASS_ID_MAP[cleanId]).toLowerCase() === cleanInput) return true;
  if (CLASS_ID_MAP[cleanInput] && String(CLASS_ID_MAP[cleanInput]).toLowerCase() === cleanId) return true;
  if (CLASS_ID_MAP[cleanCode] && String(CLASS_ID_MAP[cleanCode]).toLowerCase() === cleanInput) return true;

  // 3. Strip 'Class' or 'Lớp'
  const normCode = cleanCode.replace(/^(class|lớp)\s*/i, '').trim();
  const normInput = cleanInput.replace(/^(class|lớp)\s*/i, '').trim();
  if (normCode && normCode === normInput) return true;

  // 4. Digits check (e.g. '5.6' -> '56', 'cls-56' -> '56')
  const digitsInput = cleanInput.replace(/[^0-9]/g, '');
  const digitsCode = cleanCode.replace(/[^0-9]/g, '');
  if (digitsCode.length >= 2 && digitsCode === digitsInput) return true;
  const idDigits = cleanId.replace(/[^0-9]/g, '');
  if (idDigits.length >= 2 && idDigits === digitsInput) return true;

  return false;
}

console.log('1. Student class_id=5, code=undefined vs input=5.6:', isClassMatching(undefined, 5, '5.6'));
console.log('2. Student class_id=5, code="5.6" vs input=5.6:', isClassMatching('5.6', 5, '5.6'));
console.log('3. Student class_id="cls-56", code="5.6" vs input=5.6:', isClassMatching('5.6', 'cls-56', '5.6'));
console.log('4. Student class_id=4 (5.2) vs input=5.6:', isClassMatching(undefined, 4, '5.6'));
console.log('5. Student class_id=3 (4.6) vs input=5.6:', isClassMatching(undefined, 3, '5.6'));
