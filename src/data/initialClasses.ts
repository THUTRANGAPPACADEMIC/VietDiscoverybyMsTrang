import { ClassRoom, StudentRosterItem, MaterialItem } from '../types';

export const DEFAULT_PIN_HASH = '75020e4c266a79d5c34a2cc2d18f3af6f6152f6c06167f28a641c4a7d982aa6d'; // PIN: 1234

// The 5 Teacher-Managed Classes: 2.2, 4.1, 4.6, 5.2, 5.6
export const INITIAL_CLASSES: ClassRoom[] = [
  {
    id: 'cls-22',
    name: 'Class 2.2 - Little Explorers',
    code: '2.2',
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_1_2',
    studentCount: 26,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 2,
    schoolYear: '2026-2027'
  },
  {
    id: 'cls-41',
    name: 'Class 4.1 - Heritage Navigators',
    code: '4.1',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    studentCount: 30,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 3,
    schoolYear: '2026-2027'
  },
  {
    id: 'cls-46',
    name: 'Class 4.6 - Global Scholars',
    code: '4.6',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    studentCount: 28,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 3,
    schoolYear: '2026-2027'
  },
  {
    id: 'cls-52',
    name: 'Class 5.2 - Future Pioneers',
    code: '5.2',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    studentCount: 27,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 4,
    schoolYear: '2026-2027'
  },
  {
    id: 'cls-56',
    name: 'Class 5.6 - Young Leaders',
    code: '5.6',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    studentCount: 29,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 4,
    schoolYear: '2026-2027'
  }
];

// Pre-approved Student Roster across the 5 Classes
export const INITIAL_STUDENTS: StudentRosterItem[] = [
  // Class 2.2 Students (Grade 2)
  {
    id: 'STU-2201',
    studentCode: 'STU-2201',
    name: 'Bùi Gia Huy',
    classId: 'cls-22',
    classCode: '2.2',
    className: 'Class 2.2 - Little Explorers',
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_1_2',
    accessCode: 'VD2201',
    accessCodeHash: '5c54b8f0ec69c78ac8be8e2f976208f937152171e1e93242a67f0f7385d91e7f', // SHA-256('VD2201_vietdiscovery_salt_2026')
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 4,
    totalStars: 220,
    averageScore: 95,
    lastActive: 'Hôm nay, 08:30',
    status: 'online'
  },
  {
    id: 'STU-2202',
    studentCode: 'STU-2202',
    name: 'Trần Bảo Ngọc',
    classId: 'cls-22',
    classCode: '2.2',
    className: 'Class 2.2 - Little Explorers',
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_1_2',
    accessCode: 'VD2202',
    accessCodeHash: '5c54b8f0ec69c78ac8be8e2f976208f937152171e1e93242a67f0f7385d91e7f',
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 3,
    totalStars: 170,
    averageScore: 90,
    lastActive: 'Hôm qua, 15:45',
    status: 'offline'
  },

  // Class 4.1 Students (Grade 4)
  {
    id: 'STU-4101',
    studentCode: 'STU-4101',
    name: 'Nguyễn Minh Khôi',
    classId: 'cls-41',
    classCode: '4.1',
    className: 'Class 4.1 - Heritage Navigators',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    accessCode: 'VD4101',
    accessCodeHash: '1456b6d514f17161db91fd523525536cc41e40c17124ebcafa96e5b95985fb89', // SHA-256('VD4101_vietdiscovery_salt_2026')
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 5,
    totalStars: 310,
    averageScore: 98,
    lastActive: 'Hôm nay, 09:15',
    status: 'online'
  },
  {
    id: 'STU-4102',
    studentCode: 'STU-4102',
    name: 'Lê Phương Anh',
    classId: 'cls-41',
    classCode: '4.1',
    className: 'Class 4.1 - Heritage Navigators',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    accessCode: 'VD4102',
    accessCodeHash: '1456b6d514f17161db91fd523525536cc41e40c17124ebcafa96e5b95985fb89',
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 4,
    totalStars: 240,
    averageScore: 92,
    lastActive: 'Hôm qua, 18:20',
    status: 'offline'
  },

  // Class 4.6 Students (Grade 4)
  {
    id: 'STU-4601',
    studentCode: 'STU-4601',
    name: 'Hoàng Tuấn Kiệt',
    classId: 'cls-46',
    classCode: '4.6',
    className: 'Class 4.6 - Global Scholars',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    accessCode: 'VD4601',
    accessCodeHash: 'c28473a5d3ecc78ebe379e1571c9ad94e9de9f55a2e0ef94e046a7d19d523119', // SHA-256('VD4601_vietdiscovery_salt_2026')
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 6,
    totalStars: 350,
    averageScore: 100,
    lastActive: 'Hôm nay, 10:00',
    status: 'online'
  },
  {
    id: 'STU-4602',
    studentCode: 'STU-4602',
    name: 'Đặng Mai Linh',
    classId: 'cls-46',
    classCode: '4.6',
    className: 'Class 4.6 - Global Scholars',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4_5',
    accessCode: 'VD4602',
    accessCodeHash: 'c28473a5d3ecc78ebe379e1571c9ad94e9de9f55a2e0ef94e046a7d19d523119',
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 3,
    totalStars: 190,
    averageScore: 88,
    lastActive: '2 ngày trước',
    status: 'offline'
  },

  // Class 5.2 Students (Grade 5)
  {
    id: 'STU-5201',
    studentCode: 'STU-5201',
    name: 'Võ Minh Quân',
    classId: 'cls-52',
    classCode: '5.2',
    className: 'Class 5.2 - Future Pioneers',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    accessCode: 'VD5201',
    accessCodeHash: 'dd42d69fece5569cdc72c1e73bb7e3e08c2eb8ebba0ab98cc4492cefc88bb19a', // SHA-256('VD5201_vietdiscovery_salt_2026')
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 5,
    totalStars: 320,
    averageScore: 96,
    lastActive: 'Hôm nay, 11:20',
    status: 'online'
  },
  {
    id: 'STU-5202',
    studentCode: 'STU-5202',
    name: 'Ngô Thùy Dương',
    classId: 'cls-52',
    classCode: '5.2',
    className: 'Class 5.2 - Future Pioneers',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    accessCode: 'VD5202',
    accessCodeHash: 'dd42d69fece5569cdc72c1e73bb7e3e08c2eb8ebba0ab98cc4492cefc88bb19a',
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 4,
    totalStars: 260,
    averageScore: 91,
    lastActive: 'Hôm qua, 20:10',
    status: 'offline'
  },

  // Class 5.6 Students (Grade 5)
  {
    id: 'STU-5601',
    studentCode: 'STU-5601',
    name: 'Phạm Đức Anh',
    classId: 'cls-56',
    classCode: '5.6',
    className: 'Class 5.6 - Young Leaders',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    accessCode: 'VD5601',
    accessCodeHash: '452c5142d2dd5d522801f20aada4e77ebfe711471376a5d6d320811fbd3cf7a7', // SHA-256('VD5601_vietdiscovery_salt_2026')
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 6,
    totalStars: 390,
    averageScore: 99,
    lastActive: 'Hôm nay, 07:45',
    status: 'online'
  },
  {
    id: 'STU-5602',
    studentCode: 'STU-5602',
    name: 'Đỗ Hà My',
    classId: 'cls-56',
    classCode: '5.6',
    className: 'Class 5.6 - Young Leaders',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_4_5',
    accessCode: 'VD5602',
    accessCodeHash: '452c5142d2dd5d522801f20aada4e77ebfe711471376a5d6d320811fbd3cf7a7',
    failedPinAttempts: 0,
    isLocked: false,
    completedDestinations: 5,
    totalStars: 300,
    averageScore: 94,
    lastActive: 'Hôm qua, 17:30',
    status: 'offline'
  }
];

// Learning materials
export const INITIAL_MATERIALS: MaterialItem[] = [
  {
    id: 'mat-1',
    title: 'Ha Long Bay Nature & Caves Reading Sheet',
    destinationId: 'halong',
    gradeBand: 'grade_3',
    category: 'Reading',
    description: 'Illustrated bilingual story about limestone karst formations and Sung Sot Cave legends.',
    fileType: 'PDF Document',
    isPublished: true,
    createdAt: '2026-10-10',
    createdByName: 'Ms. Thu Trang'
  },
  {
    id: 'mat-2',
    title: 'Hanoi Historical Monuments Vocabulary Flashcards',
    destinationId: 'hanoi',
    gradeBand: 'grade_1_2',
    category: 'Vocabulary',
    description: 'Flashcards with colorful illustrations, phonetics, and sample sentences for elementary learners.',
    fileType: 'Word Cards',
    isPublished: true,
    createdAt: '2026-10-11',
    createdByName: 'Ms. Thu Trang'
  },
  {
    id: 'mat-3',
    title: 'Da Nang Dragon Bridge Speaking Prompts',
    destinationId: 'danang',
    gradeBand: 'grade_4_5',
    category: 'Speaking',
    description: 'Guided tourist guide roleplay dialogue for students to introduce the Han River and Golden Dragon.',
    fileType: 'Audio & Script',
    isPublished: true,
    createdAt: '2026-10-12',
    createdByName: 'Ms. Thu Trang'
  }
];
