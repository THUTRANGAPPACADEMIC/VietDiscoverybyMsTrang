// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — 34 PROVINCES & CITIES EDUCATIONAL TYPES
// Aligned with Circular 27/2020/TT-BGDĐT, CEFR Pre-A1 to A2.1, and Resolution 202/2025/QH15
// ==============================================================================

export type AdministrativeType = 'city' | 'province';
export type Region = 'North' | 'Central' | 'South';

export interface GeographicLocation {
  latitude: number;
  longitude: number;
  borders: string;
  terrain: string;
}

export interface AdministrativeReorganization2025 {
  resolution: string;
  previousUnitsInvolved: string[];
  summaryVi: string;
  summaryEn: string;
  islandDistricts?: string[];
}

export interface LandmarkInfo {
  nameEn: string;
  nameVi: string;
  descriptionEn: string;
  descriptionVi: string;
  emoji: string;
}

export interface FoodSpecialtyInfo {
  nameEn: string;
  nameVi: string;
  descriptionEn: string;
  descriptionVi: string;
  emoji: string;
}

export interface FestivalHeritageInfo {
  nameEn: string;
  nameVi: string;
  unescoHeritage?: boolean;
  descriptionEn: string;
  descriptionVi: string;
  emoji?: string;
}

export interface LocalProductOccupationInfo {
  productEn: string;
  productVi: string;
  occupationEn: string;
  occupationVi: string;
}

export interface NaturalAttractionInfo {
  nameEn: string;
  nameVi: string;
  type: 'Cave' | 'National Park' | 'Waterfall' | 'Beach' | 'Mountain' | 'Lake' | 'Wetland' | 'Geopark';
  descriptionEn: string;
  descriptionVi?: string;
  emoji?: string;
}

export interface VocabularyItem {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningEn: string;
  meaningVi: string;
  exampleSentence: string;
  emoji: string;
  imageUrl?: string;
  imageAttribution?: string;
  britishPhonetic?: string;
  exampleSentenceVi?: string;
}

export interface SentencePatternItem {
  pattern: string;
  patternMeaningVi: string;
  exampleEn: string;
  exampleVi: string;
  targetSkill: 'speaking' | 'writing' | 'communication';
}

export interface ListeningActivity {
  audioScriptEn: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
}

export interface SpeakingActivity {
  roleplayPromptEn: string;
  roleplayPromptVi: string;
  targetSpeech: string;
  sampleAudioPhonetic: string;
  pronunciationTips: string;
}

export interface LeveledQuestion {
  id: string;
  level: 1 | 2 | 3; // Circular 27 Levels: Level 1 = Recognize, Level 2 = Connect/Understand, Level 3 = Apply
  levelLabel: 'Level 1: Nhận biết' | 'Level 2: Kết nối & Hiểu' | 'Level 3: Vận dụng thực tế';
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
}

export interface ProvinceEducationalData {
  code: string;
  id: string;
  type: AdministrativeType;
  nameVi: string;
  nameEn: string;
  capitalVi: string;
  capitalEn: string;
  region: Region;
  zone: string;
  emoji: string;
  image: string;
  geographicLocation: GeographicLocation;
  administrativeReorganization2025: AdministrativeReorganization2025;
  notableGeographicalCharacteristics: {
    en: string;
    vi: string;
  };
  famousLandmarks: LandmarkInfo[];
  localFoodSpecialties: FoodSpecialtyInfo[];
  culturalTraditions: {
    en: string;
    vi: string;
  };
  festivalsAndHeritage: FestivalHeritageInfo[];
  localProductsAndOccupations: LocalProductOccupationInfo[];
  naturalAttractions: NaturalAttractionInfo[];
  distinctiveLocalFeatures: {
    en: string;
    vi: string;
  };
  ageAppropriateEnglishVocabulary: VocabularyItem[];
  englishSentencePatterns: SentencePatternItem[];
  listeningAndSpeakingActivities: {
    listeningChallenge: ListeningActivity;
    speakingMission: SpeakingActivity;
  };
  interactiveLearningQuestions: LeveledQuestion[];
  verifiedSource: string;
}
