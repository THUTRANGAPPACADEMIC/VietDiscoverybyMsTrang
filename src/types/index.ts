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

export interface VocabularyItem {
  word: string;
  phonetic: string;
  meaningEn: string;
  meaningVi: string;
  example: string;
  emoji?: string;
  imageUrl?: string;
}

export interface QuizQuestion {
  id: string;
  bloomLevel: BloomLevel;
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
  };
  quizScore: number;
  totalQuestions: number;
  attempts: number;
  starsEarned: number;
  lastAttemptDate: string;
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
