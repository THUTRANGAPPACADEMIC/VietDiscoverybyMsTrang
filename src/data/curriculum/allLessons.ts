// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — 25 GRADE-SPECIFIC THEMATIC ADVENTURES (ALL LESSONS)
// 5 Grades x 5 Thematic Adventures = 25 Fully Functional Curriculum Lessons
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import { CurriculumLesson } from '../../types/curriculum';
import { GRADE_1_LESSONS } from './lessonsGrade1';
import { GRADE_2_LESSONS } from './lessonsGrade2';
import { GRADE_3_LESSONS } from './lessonsGrade3';
import { GRADE_4_LESSONS } from './lessonsGrade4';
import { GRADE_5_LESSONS } from './lessonsGrade5';

export const ALL_25_CURRICULUM_LESSONS: CurriculumLesson[] = [
  ...GRADE_1_LESSONS,
  ...GRADE_2_LESSONS,
  ...GRADE_3_LESSONS,
  ...GRADE_4_LESSONS,
  ...GRADE_5_LESSONS,
];

export {
  GRADE_1_LESSONS,
  GRADE_2_LESSONS,
  GRADE_3_LESSONS,
  GRADE_4_LESSONS,
  GRADE_5_LESSONS,
};
