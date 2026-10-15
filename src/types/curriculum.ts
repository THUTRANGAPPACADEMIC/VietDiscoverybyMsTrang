// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — INDEPENDENT CURRICULUM DATA TYPES
// Original English-First Educational Framework through Vietnamese Themes
// ==============================================================================

import { GradeBand, GradeLevel, ChallengeLevel } from './index';

export type AdventureThemeId = 
  | 'adventure_1_places'    // Adventure 1: Amazing Places (Địa danh kỳ thú)
  | 'adventure_2_culture'   // Adventure 2: Vietnamese Culture (Văn hóa Việt Nam)
  | 'adventure_3_food'      // Adventure 3: Delicious Vietnam (Ẩm thực ba miền)
  | 'adventure_4_nature'    // Adventure 4: Nature & Wildlife (Thiên nhiên & Động vật hoang dã)
  | 'adventure_5_future';   // Adventure 5: Future Vietnam (Việt Nam tương lai)

export type ContentStatus = 'draft' | 'in_review' | 'approved' | 'published' | 'archived';

export interface CurriculumAdventure {
  id: AdventureThemeId;
  orderNumber: number;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  icon: string;
  badgeImg?: string;
  bannerGradient: string;
  accentColor: string;
  descriptionEn: string;
  descriptionVi: string;
}

export interface LeveledVocabulary {
  id: string;
  word: string;
  ipa: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'phrase';
  meaningEn: string;
  meaningVi: string;
  exampleSentenceEn: string;
  exampleSentenceVi: string;
  emoji?: string;
  imageUrl?: string;
  audioPromptEn?: string;
}

export interface CommunicativeSentencePattern {
  id: string;
  pattern: string; // e.g. "Look at the [noun]! It is [adjective]."
  patternMeaningVi: string;
  dialogueEn: {
    speaker: string;
    text: string;
  }[];
  dialogueVi: {
    speaker: string;
    text: string;
  }[];
  practicePromptEn: string;
  practicePromptVi: string;
}

export interface LeveledReadingContent {
  titleEn: string;
  titleVi: string;
  wordCount: number;
  lexileEstimate?: string;
  passagesEn: string[];
  passagesVi: string[];
  comprehensionTipsEn: string;
  comprehensionTipsVi: string;
  readingImage?: string;
  imageAttribution?: string;
}

export interface LeveledListeningContent {
  audioTitleEn: string;
  audioScriptEn: string;
  audioScriptVi: string;
  speakerRole: 'Captain Trang' | 'Tour Guide' | 'Local Friend' | 'Child Explorer';
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  audioSlowAvailable: boolean;
}

export interface LeveledSpeakingContent {
  promptEn: string;
  promptVi: string;
  targetSentenceEn: string;
  targetSentenceVi: string;
  phoneticFocus: string; // e.g. "/iː/ in sea, green, beach"
  pronunciationTipsEn: string;
  pronunciationTipsVi: string;
  shadowAudioText: string;
}

export interface LeveledInteractiveGame {
  gameType: 'word_picture_match' | 'sentence_builder' | 'region_sorter' | 'speed_challenge';
  gameTitleEn: string;
  gameTitleVi: string;
  instructionsEn: string;
  instructionsVi: string;
  items: {
    id: string;
    promptEn: string;
    promptVi?: string;
    targetMatch: string;
    emojiOrIcon?: string;
    image?: string;
  }[];
}

export interface Circular27CurriculumQuestion {
  id: string;
  challengeLevel: ChallengeLevel; // 1: Recognize, 2: Connect, 3: Apply
  levelNameEn: 'Recognize' | 'Connect' | 'Apply';
  levelNameVi: 'Nhận biết' | 'Kết nối' | 'Vận dụng';
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
  learningSkill: 'Vocabulary Recognition' | 'Reading Detail' | 'Cultural Connection' | 'Communicative Application';
}

export interface AssessmentRubric {
  starsAwarded: number;
  minimumPassScorePercent: number;
  criteria: {
    skill: string;
    standardEn: string;
    standardVi: string;
  }[];
}

export interface ContentVerificationMetadata {
  isVerifiedByTeacher: boolean;
  teacherVerifiedAt?: string;
  teacherName: string;
  isAiGenerated: boolean;
  aiModelRef?: string;
  humanEditorNotes?: string;
  sourceReferences: string[];
  imageLicenseSource?: string;
}

export interface CurriculumLesson {
  id: string;
  adventureId: AdventureThemeId;
  lessonNumber: number;
  titleEn: string;
  titleVi: string;
  topicEn: string;
  topicVi: string;
  gradeLevel: GradeLevel; // 'Grade 1' | 'Grade 2' | 'Grade 3' | 'Grade 4' | 'Grade 5'
  gradeBand: GradeBand;
  targetCefr: 'Pre-A1 Starter' | 'Pre-A1 Beginner' | 'Pre-A1 Foundation' | 'A1' | 'A1-A2 Extension';
  durationMinutes: number;
  learningObjectivesEn: string[];
  learningObjectivesVi: string[];
  coverImage: string;
  coverImageAttribution: string;
  
  // Leveled Pedagogical Components
  vocabulary: LeveledVocabulary[];
  sentencePatterns: CommunicativeSentencePattern[];
  reading: LeveledReadingContent;
  listening: LeveledListeningContent;
  speaking: LeveledSpeakingContent;
  interactiveGame: LeveledInteractiveGame;
  questions: Circular27CurriculumQuestion[];
  assessment: AssessmentRubric;
  
  // Status and Verification
  status: ContentStatus;
  verification: ContentVerificationMetadata;
  createdAt: string;
  updatedAt: string;
}
