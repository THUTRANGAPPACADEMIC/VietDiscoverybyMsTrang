import { GradeLevel, GradeBand, ChallengeLevel } from './index';

export type VideoSourceType = 'teacher_youtube' | 'curated_youtube' | 'ai_generated';
export type VideoStatus = 'draft' | 'approved' | 'archived';
export type VideoDifficulty = 'Pre-A1 Starter' | 'Pre-A1 Beginner' | 'Pre-A1 Foundation' | 'A1 Elementary' | 'A1+ Explorer';

export interface VideoQuestion {
  id: string;
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
  timestampSeconds?: number;
  difficulty: 'easy' | 'medium' | 'challenge';
}

export interface EducationalVideo {
  id: string;
  titleEn: string;
  titleVi: string;
  videoUrl: string; // Original URL entered by teacher
  embedUrl: string; // Sanitized privacy-enhanced embed URL
  sourceType: VideoSourceType;
  channelOrAuthor: string;
  grade: 1 | 2 | 3 | 4 | 5;
  gradeLevel: GradeLevel;
  gradeBand: GradeBand;
  topic: string;
  difficulty: VideoDifficulty;
  learningObjectivesEn: string[];
  learningObjectivesVi: string[];
  descriptionEn: string;
  descriptionVi: string;
  durationMinutes: number;
  thumbnailUrl: string;
  status: VideoStatus; // 'draft' | 'approved' | 'archived'
  isTeacherCreated: boolean; // Priority flag for Ms. Thu Trang's original content
  allowEmbedding: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  questions: VideoQuestion[];
}

export interface StudentVideoProgress {
  videoId: string;
  studentId: string;
  studentName?: string;
  classCode?: string;
  watched: boolean;
  completedAt?: string;
  quizScore?: number;
  quizTotal?: number;
  attempts: number;
  starsEarned: number;
  answeredQuestions?: Record<string, number>;
  lastAttemptAt?: string;
}

export interface VideoFilterOptions {
  grade?: 1 | 2 | 3 | 4 | 5 | 'all';
  topic?: string;
  difficulty?: VideoDifficulty | 'all';
  sourceType?: VideoSourceType | 'all';
  searchQuery?: string;
  onlyTeacherCreated?: boolean;
}
