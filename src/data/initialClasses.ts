import { ClassRoom, StudentRosterItem, MaterialItem } from '../types';

export const DEFAULT_PIN_HASH = '75020e4c266a79d5c34a2cc2d18f3af6f6152f6c06167f28a641c4a7d982aa6d'; // PIN: 1234

// The 5 Teacher-Managed Classes: 2.2, 4.1, 4.6, 5.2, 5.6
// Sĩ số lớp được tải động từ CSDL Supabase, không sử dụng số lượng hardcode
export const INITIAL_CLASSES: ClassRoom[] = [
  {
    id: 'cls-22',
    name: 'Class 2.2 - Little Explorers',
    code: '2.2',
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_1_2',
    studentCount: 0,
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
    studentCount: 0,
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
    studentCount: 0,
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
    studentCount: 0,
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
    studentCount: 0,
    teacherId: 'teacher-trang',
    teacherName: 'Ms. Thu Trang',
    activeAssignments: 4,
    schoolYear: '2026-2027'
  }
];

// Danh sách học sinh thật được tải trực tiếp từ máy chủ Supabase (182 học sinh thuộc 5 lớp)
// Tuyệt đối không dùng dữ liệu giả hoặc số lượng hardcode
export const INITIAL_STUDENTS: StudentRosterItem[] = [];

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
