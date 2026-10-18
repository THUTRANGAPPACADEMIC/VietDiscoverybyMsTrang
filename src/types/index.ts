export type UserRole = 'student' | 'teacher' | 'admin' | 'super_admin';

export type GradeLevel = 'Grade 1' | 'Grade 2' | 'Grade 3' | 'Grade 4' | 'Grade 5';
export type GradeBand = 'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5' | 'grade_1_2' | 'grade_4_5';

export interface UserProfile {
  id: string;
  studentCode?: string;
  email?: string;
  fullName: string;
  role: UserRole;
  classId?: string;
  className?: string;
  classCode?: string;
  gradeLevel?: GradeLevel;
  gradeBand?: GradeBand;
  stars: number;
  avatar: string;
}

export type Region = 'North' | 'Central' | 'South';
export type Theme = 'Nature' | 'Culture' | 'History' | 'Modern Innovation';
export type BloomLevel = 'Remember' | 'Understand' | 'Apply' | 'Analyze';

// Circular 27/2020/TT-BGDDT Article 7 Elementary Learning Challenge Levels:
// Level 1: Recognize (Nhận biết)
// Level 2: Connect (Kết nối)
// Level 3: Apply (Vận dụng)
export type ChallengeLevel = 1 | 2 | 3;
export type ChallengeLevelName = 'Recognize' | 'Connect' | 'Apply';

export interface ChallengeBreakdownItem {
  correct: number;
  total: number;
}

export interface ChallengeBreakdown {
  level1: ChallengeBreakdownItem; // Level 1: Recognize (Nhận biết)
  level2: ChallengeBreakdownItem; // Level 2: Connect (Kết nối)
  level3: ChallengeBreakdownItem; // Level 3: Apply (Vận dụng)
}

export interface VocabularyItem {
  word: string;
  phonetic: string;
  meaningEn: string;
  meaningVi: string;
  example: string;
  emoji?: string;
  imageUrl?: string;
  imageAttribution?: string;
  britishPhonetic?: string;
  exampleVi?: string;
}

export interface QuizQuestion {
  id: string;
  bloomLevel?: BloomLevel;
  challengeLevel?: ChallengeLevel; // Circular 27 Level (1 | 2 | 3)
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
}

export interface GradeBandContent {
  cefrLevel?: string;
  instructionalTarget?: string;
  vocabulary: VocabularyItem[];
  reading: {
    titleEn: string;
    textEn: string;
    textVi: string;
  };
  listening: {
    audioScriptEn: string;
    question: string;
    options: string[];
    correctIndex: number;
  };
  speaking: {
    promptEn: string;
    promptVi: string;
    sampleSentence: string;
    tips: string;
  };
  quiz: QuizQuestion[];
  game?: {
    type: 'picture_match' | 'bubble_pop';
    pairs: { word: string; emoji: string; meaningVi: string }[];
  };
}

export interface DestinationPhotoAttribution {
  author: string;
  source: string;
  license: string;
  landmark: string;
}

export interface Destination {
  id: string;
  name: string;
  vietnameseName: string;
  province: string;
  region: Region;
  theme: Theme;
  geoCoordinates: { latitude: number; longitude: number };
  coordinates: { x: number; y: number }; // SVG map percentage or legacy coords
  image: string;
  fallbackImage?: string;
  photoAttribution?: DestinationPhotoAttribution;
  summaryEn: string;
  summaryVi: string;
  badge: {
    name: string;
    icon: string;
    titleEn: string;
    titleVi: string;
  };
  // Differentiated content for Grade 1 through Grade 5
  gradeContent: Record<GradeBand, GradeBandContent>;
}

export interface DestinationProgress {
  destinationId: string;
  completedSteps: {
    vocabulary: boolean;
    reading: boolean;
    listening: boolean;
    speaking: boolean;
    quiz: boolean;
    placedLandmarks?: string[];
    completed?: boolean;
    [key: string]: any;
  };
  quizScore: number;
  totalQuestions: number;
  attempts: number;
  starsEarned: number;
  lastAttemptDate: string;
  challengeBreakdown?: ChallengeBreakdown;
}

// Helper: Map Bloom's taxonomy or explicit challengeLevel to Circular 27 Levels (1, 2, 3)
export function getChallengeLevel(q: { bloomLevel?: BloomLevel; challengeLevel?: ChallengeLevel }): ChallengeLevel {
  if (q.challengeLevel) return q.challengeLevel;
  switch (q.bloomLevel) {
    case 'Remember': return 1;
    case 'Understand': return 2;
    case 'Apply':
    case 'Analyze': return 3;
    default: return 1;
  }
}

export function getChallengeLevelInfo(level: ChallengeLevel) {
  switch (level) {
    case 1:
      return {
        level: 1,
        nameEn: 'Recognize',
        nameVi: 'Nhận biết',
        fullLabel: 'Level 1: Recognize (Nhận biết)',
        badgeText: 'MỨC 1 • RECOGNIZE',
        colorTheme: 'emerald',
        icon: '🔍',
        summaryEn: 'Recalling vocabulary, sounds, landmarks, and familiar phrases accurately.',
        summaryVi: 'Nhận biết từ vựng, hình ảnh, âm thanh và mẫu câu giao tiếp quen thuộc.'
      };
    case 2:
      return {
        level: 2,
        nameEn: 'Connect',
        nameVi: 'Kết nối',
        fullLabel: 'Level 2: Connect (Kết nối)',
        badgeText: 'MỨC 2 • CONNECT',
        colorTheme: 'sky',
        icon: '🧩',
        summaryEn: 'Connecting cultural contexts, reading details, and similar situations.',
        summaryVi: 'Kết nối ý nghĩa văn hóa, hội thoại và giải quyết các tình huống tương tự.'
      };
    case 3:
      return {
        level: 3,
        nameEn: 'Apply',
        nameVi: 'Vận dụng',
        fullLabel: 'Level 3: Apply (Vận dụng)',
        badgeText: 'MỨC 3 • APPLY',
        colorTheme: 'amber',
        icon: '🚀',
        summaryEn: 'Applying English sentences to travel scenarios, practical problems, and real-world expression.',
        summaryVi: 'Vận dụng tiếng Anh tự tin giải quyết tình huống du lịch và trải nghiệm thực tế.'
      };
  }
}

export interface ClassRoom {
  id: string;
  name: string; // e.g. "Class 3.2"
  code: string; // e.g. "TRANG32"
  gradeLevel: GradeLevel;
  gradeBand: GradeBand;
  teacherId: string;
  teacherName: string;
  studentCount: number;
  activeAssignments: number;
  schoolYear: string;
}

export interface StudentRosterItem {
  id: string;
  studentCode: string; // e.g. "STU-2201"
  name: string;
  classId: string;
  classCode: string; // "2.2", "4.1", "4.6", "5.2", "5.6"
  className: string;
  gradeLevel: GradeLevel;
  gradeBand: GradeBand;
  accessCode?: string; // Only visible to teacher for card printing/distribution
  accessCodeHash: string; // SHA-256 hash + salt
  pinHash?: string; // backwards compatibility
  failedPinAttempts: number;
  isLocked: boolean;
  completedDestinations: number;
  totalStars: number;
  averageScore: number;
  lastActive: string;
  status: 'online' | 'offline';
  avatar?: string;
}

export interface StudentLoginResult {
  success: boolean;
  user?: UserProfile;
  progress?: Record<string, DestinationProgress>;
  errorMessage?: string;
  isLocked?: boolean;
  remainingAttempts?: number;
  remainingSeconds?: number;
}

export interface MaterialItem {
  id: string;
  title: string;
  destinationId: string;
  gradeBand: GradeBand;
  category: 'Reading' | 'Vocabulary' | 'Speaking' | 'Worksheet' | 'Video';
  description: string;
  fileType: string;
  fileUrl?: string;
  isPublished: boolean;
  createdAt: string;
  createdByName: string;
}

export interface AssignmentItem {
  id: string;
  classId: string;
  destinationId: string;
  title: string;
  dueDate: string;
  instructions: string;
  gradeLevel: GradeLevel;
}

export interface AIGeneratedPlan {
  id: string;
  topic: string;
  gradeLevel: GradeLevel;
  gradeBand: GradeBand;
  suggestedActivities: string[];
  vocabularyList: string[];
  bloomQuestions: {
    bloomLevel: BloomLevel;
    question: string;
    options: string[];
    answer: string;
  }[];
  approved: boolean;
}

// Multi-Source Video Learning Academy types
export * from './video';
