import { GradeLevel, GradeBand, ChallengeLevel } from './index';

export type VideoSourceType = 'teacher_youtube' | 'curated_youtube' | 'ai_generated';
export type VideoStatus = 'draft' | 'approved' | 'published' | 'archived';
export type VideoDifficulty = 'Pre-A1 Starter' | 'Pre-A1 Beginner' | 'Pre-A1 Foundation' | 'A1 Elementary' | 'A1+ Explorer';
export type VideoLearningAdventure = 'heritage' | 'nature' | 'culture' | 'cuisine' | 'ecotourism' | 'general';

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

export interface VideoListeningTask {
  keyPhraseEn: string;
  keyPhraseVi: string;
  audioPrompt?: string;
  vocabularyKeywords?: { word: string; ipa: string; meaningVi: string }[];
}

export interface VideoSpeakingTask {
  modelSentenceEn: string;
  modelSentenceVi: string;
  targetPhonemes?: string[];
  tipsEn?: string;
  tipsVi?: string;
}

export interface VideoApplyTask {
  missionPromptEn: string;
  missionPromptVi: string;
  sentenceFrames?: string[];
  suggestedAnswerEn?: string;
}

export interface EducationalVideo {
  id: string;
  titleEn: string;
  titleVi: string;
  videoUrl: string; // Original URL entered by teacher
  embedUrl: string; // Sanitized privacy-enhanced embed URL (youtube-nocookie.com)
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
  status: VideoStatus; // 'draft' | 'approved' | 'published' | 'archived'
  isTeacherCreated: boolean; // Priority flag for Ms. Thu Trang's original content
  allowEmbedding: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  questions: VideoQuestion[];
  
  // 34-Province & Learning Adventure Mapping
  provinceCode?: string; // e.g. 'HN', 'HP', 'HUE', 'DN', 'HCM', 'CT', etc.
  provinceName?: string; // e.g. 'Thủ đô Hà Nội', 'Thành phố Đà Nẵng'
  learningAdventure?: VideoLearningAdventure;

  // 5-Step Learning Flow Integration (WATCH -> LISTEN -> SPEAK -> PLAY -> APPLY)
  listeningTask?: VideoListeningTask;
  speakingTask?: VideoSpeakingTask;
  applyTask?: VideoApplyTask;
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
  completed5Steps?: boolean;
}

export interface VideoFilterOptions {
  grade?: 1 | 2 | 3 | 4 | 5 | 'all';
  topic?: string;
  difficulty?: VideoDifficulty | 'all';
  sourceType?: VideoSourceType | 'all';
  searchQuery?: string;
  onlyTeacherCreated?: boolean;
  provinceCode?: string | 'all';
  learningAdventure?: VideoLearningAdventure | 'all';
  status?: VideoStatus | 'all';
}
