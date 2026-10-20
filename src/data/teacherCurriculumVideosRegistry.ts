// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — PERMANENT CURRICULUM VIDEOS REGISTRY (25 LESSONS)
// Persisted directly into project source code for cross-device availability
// ==============================================================================

import permanentVideos from './teacherCurriculumVideos.json';

export interface CurriculumVideoRecord {
  id: string;
  grade: 1 | 2 | 3 | 4 | 5;
  gradeBand: 'grade_1_2' | 'grade_3' | 'grade_4_5';
  lessonId: string;
  lessonNumber: number;
  adventureId: string;
  lessonTitleEn: string;
  lessonTitleVi: string;
  activityId: string;
  activityName: string;
  videoTitle: string;
  videoUrl: string;
  videoId: string;
  startSeconds: number;
  endSeconds: number;
  durationSeconds: number;
  status: 'approved' | 'missing' | 'needs_review' | 'unavailable';
  updatedAt: string;
  updatedBy: string;
  notes?: string;
}

export const PERMANENT_CURRICULUM_VIDEOS: CurriculumVideoRecord[] = permanentVideos as CurriculumVideoRecord[];
