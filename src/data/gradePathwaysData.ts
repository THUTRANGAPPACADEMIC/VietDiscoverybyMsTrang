// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE-SPECIFIC LEARNING PATHWAYS DATA
// Curriculum-aligned data for Grades 1–5 | Global Success & Circular 27/2020/TT-BGDDT
// ==============================================================================

export type GradeNumber = 1 | 2 | 3 | 4 | 5;

export interface GradeConfig {
  gradeNum: GradeNumber;
  gradeKey: string;
  route: string;
  title: string;
  sub: string;
  badge: string;
  cefrLevel: string;
  icon: string;
  hasCrown?: boolean;
  pillBg: string;
  borderStyle: string;
  glowColor: string;
  shadowColor: string;
  textColor: string;
  arrowBg: string;
  accentGradient: string;
  heroGradient: string;
  bannerBg: string;
  mascotName: string;
  mascotImage: string;
  mottoEn: string;
  mottoVi: string;
  overviewEn: string;
  overviewVi: string;
  accentHex: string;
  learningJourney: {
    stationNumber: number;
    titleEn: string;
    titleVi: string;
    descriptionEn: string;
    descriptionVi: string;
    icon: string;
    starsReward: number;
  }[];
}

export interface PathwayLesson {
  id: string;
  gradeNum: GradeNumber;
  lessonNumber: number;
  titleEn: string;
  titleVi: string;
  unitTag: string;
  topicEn: string;
  topicVi: string;
  cefr: string;
  durationMinutes: number;
  objectivesEn: string[];
  objectivesVi: string[];
  coverImage: string;
  vocabulary: {
    word: string;
    ipa: string;
    meaningVi: string;
    meaningEn: string;
    emoji: string;
    exampleEn: string;
  }[];
  sentencePattern: {
    pattern: string;
    meaningVi: string;
    dialogue: { speaker: string; text: string; textVi: string }[];
  };
  readingPassage: {
    titleEn: string;
    titleVi: string;
    sentencesEn: string[];
    sentencesVi: string[];
  };
}

export interface DragDropQuestion {
  id: string;
  titleEn: string;
  titleVi: string;
  instructionsEn: string;
  instructionsVi: string;
  categories: { id: string; labelEn: string; labelVi: string; color: string }[];
  items: { id: string; textEn: string; textVi: string; emoji: string; categoryId: string }[];
}

export interface ListenChooseQuestion {
  id: string;
  audioPromptEn: string;
  questionEn: string;
  questionVi: string;
  options: { id: string; textEn: string; textVi: string; emoji: string; isCorrect: boolean }[];
  explanationEn: string;
  explanationVi: string;
}

export interface MatchPairItem {
  id: string;
  leftEn: string;
  rightVi: string;
  emoji: string;
}

export interface WordPuzzleItem {
  id: string;
  targetWord: string;
  hintEn: string;
  hintVi: string;
  emoji: string;
  partOfSpeech: string;
}

export interface SentenceBuilderItem {
  id: string;
  scrambledWords: string[];
  correctSentence: string;
  meaningVi: string;
  hintEn: string;
}

export interface MultipleChoiceItem {
  id: string;
  level: 1 | 2 | 3;
  levelNameEn: 'Recognize' | 'Connect' | 'Apply';
  levelNameVi: 'Nhận biết' | 'Kết nối' | 'Vận dụng';
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
  starsAwarded: number;
}

export interface AdventureChallengeStage {
  stageNumber: number;
  stageNameEn: string;
  stageNameVi: string;
  type: 'listen_pick' | 'word_rush' | 'sentence_scramble';
  promptEn: string;
  promptVi: string;
  options?: string[];
  correctAnswer: string | number;
  timerSeconds: number;
  bonusStars: number;
}

export interface GradeBadge {
  id: string;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  icon: string;
  criteria: string;
  starsValue: number;
}

export interface GradeChallenge {
  id: string;
  titleEn: string;
  titleVi: string;
  rewardStars: number;
  icon: string;
  targetCount: number;
  unit: string;
  activityType: 'lesson' | 'game' | 'listening' | 'quiz';
}

// ------------------------------------------------------------------------------
// 1. GRADE CONFIGURATIONS (GRADES 1–5)
// ------------------------------------------------------------------------------
export const GRADE_CONFIGS: Record<GradeNumber, GradeConfig> = {
  1: {
    gradeNum: 1,
    gradeKey: 'grade_1',
    route: '/grade/1',
    title: 'Grade 1',
    sub: 'Little Explorer',
    badge: 'PRE-A1 STARTER',
    cefrLevel: 'Pre-A1 Starter (Ages 6-7)',
    icon: '🏔️',
    pillBg: 'from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc]',
    borderStyle: 'border-sky-300',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    shadowColor: 'shadow-sky-200/50',
    textColor: 'text-sky-950',
    arrowBg: 'bg-sky-500 text-white',
    accentGradient: 'from-sky-500 to-blue-600',
    heroGradient: 'from-sky-100 via-blue-50 to-emerald-50',
    bannerBg: 'bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500',
    mascotName: 'Captain Trang & Explorer Puppy',
    mascotImage: '/assets/cute/captain_trang_official.png',
    mottoEn: 'Big eyes, happy ears, and first joyful English words!',
    mottoVi: 'Mắt tinh anh, tai lắng nghe, tự tin nói những từ tiếng Anh đầu đời!',
    overviewEn: 'Designed for 6-year-old starters: huge tactile buttons, joyful picture vocabulary, phonics listening, colors, animals, and friendly sea wonders.',
    overviewVi: 'Thiết kế riêng cho học sinh lớp 1: nút bấm siêu to, từ vựng trực quan kèm tranh ảnh, luyện nghe ngữ âm vui nhộn, màu sắc và động vật.',
    accentHex: '#0284c7',
    learningJourney: [
      {
        stationNumber: 1,
        titleEn: 'Ha Long Emerald Sea',
        titleVi: 'Biển Ngọc Hạ Long',
        descriptionEn: 'Discover sea, boat, island, and cave with Captain Trang!',
        descriptionVi: 'Học 4 từ vựng biển cả đầu tiên cùng cô Trang!',
        icon: '🌊',
        starsReward: 20
      },
      {
        stationNumber: 2,
        titleEn: 'Colorful Forest Friends',
        titleVi: 'Bạn Rừng Đầy Màu Sắc',
        descriptionEn: 'Learn animal words: bird, monkey, butterfly, and tiger.',
        descriptionVi: 'Khám phá các loài thú thân thiện trong rừng Cúc Phương.',
        icon: '🐒',
        starsReward: 25
      },
      {
        stationNumber: 3,
        titleEn: 'Counting Smiles (1-10)',
        titleVi: 'Đếm Số Nụ Cười (1-10)',
        descriptionEn: 'Count fruits and boats along the coastline.',
        descriptionVi: 'Đếm hoa quả và thuyền buồm từ 1 đến 10.',
        icon: '🔢',
        starsReward: 30
      },
      {
        stationNumber: 4,
        titleEn: 'My Happy Family',
        titleVi: 'Gia Đình Yêu Thương',
        descriptionEn: 'Introduce mom, dad, brother, and sister on a trip.',
        descriptionVi: 'Giới thiệu các thành viên gia đình trong chuyến du lịch.',
        icon: '👨‍👩‍👧‍👦',
        starsReward: 35
      },
      {
        stationNumber: 5,
        titleEn: 'Little Explorer Star Graduation',
        titleVi: 'Tốt Nghiệp Thám Hiểm Nhí',
        descriptionEn: 'Complete all quests to earn your first Star Medal!',
        descriptionVi: 'Chinh phục tất cả thử thách để nhận Huy hiệu Ngôi sao!',
        icon: '🏅',
        starsReward: 50
      }
    ]
  },
  2: {
    gradeNum: 2,
    gradeKey: 'grade_2',
    route: '/grade/2',
    title: 'Grade 2',
    sub: 'Magical Backpack',
    badge: 'PRE-A1 BEGINNER',
    cefrLevel: 'Pre-A1 Beginner (Ages 7-8)',
    icon: '🎒',
    pillBg: 'from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe]',
    borderStyle: 'border-purple-300',
    glowColor: 'rgba(192, 132, 252, 0.4)',
    shadowColor: 'shadow-purple-200/50',
    textColor: 'text-purple-950',
    arrowBg: 'bg-purple-500 text-white',
    accentGradient: 'from-purple-500 to-indigo-600',
    heroGradient: 'from-purple-100 via-fuchsia-50 to-pink-50',
    bannerBg: 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500',
    mascotName: 'Backpack Bunny & Captain Trang',
    mascotImage: '/assets/cute/captain_trang_official.png',
    mottoEn: 'Pack your words, taste delicious dishes, and speak in sentences!',
    mottoVi: 'Thu thập từ vựng, thưởng thức ẩm thực và nói câu trọn vẹn!',
    overviewEn: 'Build foundational vocabulary: Vietnamese food, classroom supplies, simple sentence patterns like "I like warm phở" and tactile word matching.',
    overviewVi: 'Mở rộng vốn từ lớp 2: món ngon Việt Nam, đồ dùng học tập, cấu trúc câu "I like...", rèn luyện nghe hiểu và ghép nối từ vựng.',
    accentHex: '#9333ea',
    learningJourney: [
      {
        stationNumber: 1,
        titleEn: 'A Bowl of Warm Phở',
        titleVi: 'Tô Phở Nóng Hổi',
        descriptionEn: 'Learn soup, noodles, beef, herbs, and lemon in Hanoi.',
        descriptionVi: 'Học từ vựng món phở truyền thống và cách gọi món.',
        icon: '🍜',
        starsReward: 25
      },
      {
        stationNumber: 2,
        titleEn: 'Magic Classroom Backpack',
        titleVi: 'Chiếc Ba Lô Diệu Kỳ',
        descriptionEn: 'Name book, pen, pencil, eraser, and ruler with pride.',
        descriptionVi: 'Gọi tên chính xác các dụng cụ học tập trong ba lô.',
        icon: '✏️',
        starsReward: 30
      },
      {
        stationNumber: 3,
        titleEn: 'Sweet Mekong Fruits',
        titleVi: 'Trái Cây Miền Tây',
        descriptionEn: 'Taste mango, coconut, banana, and dragon fruit.',
        descriptionVi: 'Khám phá hoa quả nhiệt đới tươi ngon miền sông nước.',
        icon: '🥭',
        starsReward: 35
      },
      {
        stationNumber: 4,
        titleEn: 'My Favorite Meals',
        titleVi: 'Bữa Ăn Em Yêu Thích',
        descriptionEn: 'Express what you like: "I like rice and chicken!"',
        descriptionVi: 'Nói về món ăn yêu thích bằng mẫu câu hoàn chỉnh.',
        icon: '🍱',
        starsReward: 40
      },
      {
        stationNumber: 5,
        titleEn: 'Magical Backpack Master',
        titleVi: 'Bậc Thầy Ba Lô Diệu Kỳ',
        descriptionEn: 'Pass the food quest and unlock your Gourmet Badge!',
        descriptionVi: 'Vượt qua chặng thi ẩm thực và nhận Huy hiệu Ẩm thực!',
        icon: '🏆',
        starsReward: 55
      }
    ]
  },
  3: {
    gradeNum: 3,
    gradeKey: 'grade_3',
    route: '/grade/3',
    title: 'Grade 3',
    sub: 'Golden Adventure',
    badge: 'PRE-A1 FOUNDATION',
    cefrLevel: 'Pre-A1 Foundation (Ages 8-9)',
    icon: '🗺️',
    hasCrown: true,
    pillBg: 'from-[#fef3c7] via-[#fde68a] to-[#f59e0b]',
    borderStyle: 'border-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    shadowColor: 'shadow-amber-200/60',
    textColor: 'text-amber-950',
    arrowBg: 'bg-amber-500 text-white',
    accentGradient: 'from-amber-500 to-orange-600',
    heroGradient: 'from-amber-100 via-orange-50 to-yellow-50',
    bannerBg: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500',
    mascotName: 'Golden Dragon & Captain Trang',
    mascotImage: '/assets/cute/captain_trang_official.png',
    mottoEn: 'Crown your knowledge with rich stories, festivals, and bright dialogues!',
    mottoVi: 'Tỏa sáng kiến thức với lễ hội truyền thống, văn hóa và hội thoại tự tin!',
    overviewEn: 'The flagship golden adventure: Mid-Autumn festival, lanterns, lion dances, sentence completion, dialogue matching, and rich interactive word games.',
    overviewVi: 'Chặng thám hiểm vàng: Lễ hội Trung thu, đèn ông sao, múa lân, điền từ vào câu, ghép nối hội thoại và trò chơi từ vựng hấp dẫn.',
    accentHex: '#d97706',
    learningJourney: [
      {
        stationNumber: 1,
        titleEn: 'Mid-Autumn Moon Festival',
        titleVi: 'Lễ Hội Đèn Trăng Trung Thu',
        descriptionEn: 'Learn lantern, mooncake, full moon, and lion dance.',
        descriptionVi: 'Học từ vựng đêm rằm, bánh trung thu và đèn ông sao.',
        icon: '🏮',
        starsReward: 30
      },
      {
        stationNumber: 2,
        titleEn: 'Imperial Citadel of Hue',
        titleVi: 'Hoàng Thành Cố Đô Huế',
        descriptionEn: 'Explore royal palaces, traditional music, and history.',
        descriptionVi: 'Thăm kinh thành cổ kính, lắng nghe nhã nhạc cung đình.',
        icon: '🏯',
        starsReward: 35
      },
      {
        stationNumber: 3,
        titleEn: 'Weekend Fun & Hobbies',
        titleVi: 'Sở Thích & Cuối Tuần Vui Vẻ',
        descriptionEn: 'Talk about reading, swimming, singing, and cycling.',
        descriptionVi: 'Mô tả các hoạt động cuối tuần và sở thích của bản thân.',
        icon: '🎨',
        starsReward: 40
      },
      {
        stationNumber: 4,
        titleEn: 'Lantern Making Workshop',
        titleVi: 'Xưởng Làm Đèn Lồng Hội An',
        descriptionEn: 'Follow instructions to craft a beautiful bamboo star.',
        descriptionVi: 'Lắng nghe các bước làm đèn ông sao bằng nan tre.',
        icon: '⭐',
        starsReward: 45
      },
      {
        stationNumber: 5,
        titleEn: 'Golden Adventure Crown',
        titleVi: 'Vương Miện Thám Hiểm Vàng',
        descriptionEn: 'Claim the Golden Crown badge and celebrate!',
        descriptionVi: 'Đạt danh hiệu Quán quân Thám hiểm Vàng rực rỡ!',
        icon: '👑',
        starsReward: 60
      }
    ]
  },
  4: {
    gradeNum: 4,
    gradeKey: 'grade_4',
    route: '/grade/4',
    title: 'Grade 4',
    sub: 'Discovery Rocket',
    badge: 'PRE-A1 TO A1',
    cefrLevel: 'Pre-A1 to A1 Elementary (Ages 9-10)',
    icon: '🚀',
    pillBg: 'from-[#ccfbf1] via-[#99f6e4] to-[#5eead4]',
    borderStyle: 'border-teal-300',
    glowColor: 'rgba(45, 212, 191, 0.4)',
    shadowColor: 'shadow-teal-200/50',
    textColor: 'text-teal-950',
    arrowBg: 'bg-teal-500 text-white',
    accentGradient: 'from-teal-500 to-emerald-600',
    heroGradient: 'from-teal-100 via-emerald-50 to-cyan-50',
    bannerBg: 'bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600',
    mascotName: 'Ranger Owl & Captain Trang',
    mascotImage: '/assets/cute/captain_trang_official.png',
    mottoEn: 'Blast off into deep rainforests, mysterious caves, and science English!',
    mottoVi: 'Phóng tên lửa khám phá rừng nguyên sinh, hang động kỳ vĩ và khoa học!',
    overviewEn: 'Elevate language mastery: complex sentences, reading comprehension passages, Phong Nha-Ke Bang caves, red-shanked douc langurs, and listening challenges.',
    overviewVi: 'Nâng cao năng lực ngôn ngữ: câu ghép, bài đọc hiểu dài, vườn quốc gia Phong Nha, voọc chà vá chân nâu quý hiếm và thử thách nghe nâng cao.',
    accentHex: '#0d9488',
    learningJourney: [
      {
        stationNumber: 1,
        titleEn: 'Secret Caves of Phong Nha',
        titleVi: 'Hang Động Bí Mật Phong Nha',
        descriptionEn: 'Master stalactite, underground river, cave, and limestone.',
        descriptionVi: 'Tìm hiểu thạch nhũ, sông ngầm và địa chất karst kỳ quan.',
        icon: '🪨',
        starsReward: 35
      },
      {
        stationNumber: 2,
        titleEn: 'Guardians of the Rainforest',
        titleVi: 'Người Bảo Vệ Rừng Xanh',
        descriptionEn: 'Protect red-shanked douc langurs and ancient trees.',
        descriptionVi: 'Bảo vệ loài voọc ngũ sắc quý hiếm trên bán đảo Sơn Trà.',
        icon: '🌿',
        starsReward: 40
      },
      {
        stationNumber: 3,
        titleEn: 'Highland Coffee & Waterfalls',
        titleVi: 'Thác Nước & Cà Phê Tây Nguyên',
        descriptionEn: 'Describe majestic waterfalls and fertile basalt soil.',
        descriptionVi: 'Miêu tả thác ghềnh hùng vĩ và đồn điền trù phú Tây Nguyên.',
        icon: '☕',
        starsReward: 45
      },
      {
        stationNumber: 4,
        titleEn: 'Forest Ranger Interview',
        titleVi: 'Phỏng Vấn Bác Kiểm Lâm',
        descriptionEn: 'Listen to real conservation audio and answer questions.',
        descriptionVi: 'Nghe đoạn phỏng vấn kiểm lâm bảo tồn thiên nhiên.',
        icon: '🎙️',
        starsReward: 50
      },
      {
        stationNumber: 5,
        titleEn: 'Discovery Rocket Commander',
        titleVi: 'Chỉ Huy Tên Lửa Thám Hiểm',
        descriptionEn: 'Complete all missions to win the Eco-Explorer Rocket Badge!',
        descriptionVi: 'Chinh phục toàn bộ thử thách nhận Huy hiệu Tên lửa Sinh thái!',
        icon: '🚀',
        starsReward: 65
      }
    ]
  },
  5: {
    gradeNum: 5,
    gradeKey: 'grade_5',
    route: '/grade/5',
    title: 'Grade 5',
    sub: 'English Champion',
    badge: 'A1/A2 EXTENSION',
    cefrLevel: 'A1-A2 Extension & Primary Champion (Ages 10-11)',
    icon: '🏆',
    pillBg: 'from-[#ffe4e6] via-[#fecdd3] to-[#fda4af]',
    borderStyle: 'border-pink-300',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    shadowColor: 'shadow-pink-200/50',
    textColor: 'text-pink-950',
    arrowBg: 'bg-pink-500 text-white',
    accentGradient: 'from-pink-500 to-rose-600',
    heroGradient: 'from-pink-100 via-rose-50 to-indigo-50',
    bannerBg: 'bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600',
    mascotName: 'Champion Captain Trang',
    mascotImage: '/assets/cute/captain_trang_official.png',
    mottoEn: 'Innovate, articulate, and champion clean smart cities of the future!',
    mottoVi: 'Tư duy đổi mới, diễn đạt lưu loát, chinh phục đô thị xanh tương lai!',
    overviewEn: 'Top primary echelon: smart cities, electric metro, clean energy, reading synthesis, multi-stage dialogue, speaking practice with mic, and graduation challenges.',
    overviewVi: 'Đỉnh cao tiểu học: đô thị thông minh, tàu điện metro, năng lượng sạch, tổng hợp đọc hiểu, hội thoại đa bước, luyện nói thu âm và tốt nghiệp xuất sắc.',
    accentHex: '#e11d48',
    learningJourney: [
      {
        stationNumber: 1,
        titleEn: 'Smart Green Metro Lines',
        titleVi: 'Tuyến Metro Đô Thị Xanh',
        descriptionEn: 'Explore Hanoi & HCMC modern elevated transit networks.',
        descriptionVi: 'Học tiếng Anh về hệ thống tàu điện metro hiện đại tại Hà Nội & TP.HCM.',
        icon: '🚆',
        starsReward: 40
      },
      {
        stationNumber: 2,
        titleEn: 'Clean Solar & Wind Energy',
        titleVi: 'Năng Lượng Mặt Trời & Gió Sạch',
        descriptionEn: 'Discuss solar panels, wind turbines, and eco-friendly buses.',
        descriptionVi: 'Thảo luận về tấm pin năng lượng mặt trời và tuabin gió.',
        icon: '☀️',
        starsReward: 45
      },
      {
        stationNumber: 3,
        titleEn: 'Young Inventors STEM Expo',
        titleVi: 'Triển Lãm Sáng Tạo Khoa Học Trẻ',
        descriptionEn: 'Present eco-friendly inventions in fluent English.',
        descriptionVi: 'Thuyết trình mô hình sáng chế bảo vệ môi trường.',
        icon: '💡',
        starsReward: 50
      },
      {
        stationNumber: 4,
        titleEn: 'Champion Speaking Challenge',
        titleVi: 'Thử Thách Thuyết Trình Quán Quân',
        descriptionEn: 'Record your voice describing your dream green city.',
        descriptionVi: 'Thu âm giọng nói mô tả thành phố tương lai của em.',
        icon: '🎙️',
        starsReward: 55
      },
      {
        stationNumber: 5,
        titleEn: 'VietDiscovery Champion Trophy',
        titleVi: 'Cúp Quán Quân Toàn Quốc VietDiscovery',
        descriptionEn: 'Earn the ultimate Primary English Champion Trophy!',
        descriptionVi: 'Đoạt Cúp Vàng Quán Quân Tiếng Anh Tiểu Học danh giá!',
        icon: '🏆',
        starsReward: 75
      }
    ]
  }
};

// ------------------------------------------------------------------------------
// 2. VERIFIED LESSONS FOR EACH GRADE
// ------------------------------------------------------------------------------
export const GRADE_LESSONS: Record<GradeNumber, PathwayLesson[]> = {
  1: [
    {
      id: 'lesson-g1-places-halong',
      gradeNum: 1,
      lessonNumber: 1,
      titleEn: 'Ha Long Bay: Emerald Sea & Limestone Islands',
      titleVi: 'Vịnh Hạ Long: Biển ngọc & Đảo đá vôi',
      unitTag: 'Unit 1 • Nature & Colors',
      topicEn: 'Natural Wonders & Colors in the Sea',
      topicVi: 'Kỳ quan thiên nhiên & Màu sắc trên biển',
      cefr: 'Pre-A1 Starter',
      durationMinutes: 35,
      objectivesEn: [
        'Identify 4 natural landscape words: sea, boat, island, cave.',
        'Use the simple communicative pattern: "Look at the [noun]! It is [adjective]."',
        'Recognize the phoneme /iː/ in "sea" and "green".',
        'Learn that Ha Long Bay is a world natural heritage site.'
      ],
      objectivesVi: [
        'Nhận biết và phát âm 4 từ phong cảnh biển: sea, boat, island, cave.',
        'Nói được mẫu câu quan sát: "Look at the sea! It is blue."',
        'Nhận diện âm /iː/ trong từ sea và green.',
        'Biết Vịnh Hạ Long là di sản thiên nhiên thế giới tại Việt Nam.'
      ],
      coverImage: '/destinations/halong_bay.jpg',
      vocabulary: [
        { word: 'sea', ipa: '/siː/', meaningVi: 'Biển xanh', meaningEn: 'A large area of salty water.', emoji: '🌊', exampleEn: 'The sea is emerald green.' },
        { word: 'boat', ipa: '/bəʊt/', meaningVi: 'Con thuyền', meaningEn: 'A small water vehicle.', emoji: '⛵', exampleEn: 'We sail on a wooden boat.' },
        { word: 'island', ipa: '/ˈaɪ.lənd/', meaningVi: 'Hòn đảo', meaningEn: 'Land surrounded by water.', emoji: '🏝️', exampleEn: 'Green trees grow on the island.' },
        { word: 'cave', ipa: '/keɪv/', meaningVi: 'Hang đá', meaningEn: 'A large hole in a rock or hill.', emoji: '🪨', exampleEn: 'The magical cave is cool.' }
      ],
      sentencePattern: {
        pattern: 'Look at the [noun]! It is [adjective].',
        meaningVi: 'Nhìn kìa [danh từ]! Nó thật là [tính từ].',
        dialogue: [
          { speaker: 'Captain Trang', text: 'Hello, Little Explorer! Look at the sea!', textVi: 'Chào nhà thám hiểm nhí! Hãy nhìn ra biển kìa!' },
          { speaker: 'Student', text: 'Wow! It is big and green!', textVi: 'Oa! Biển thật rộng lớn và xanh ngắt!' }
        ]
      },
      readingPassage: {
        titleEn: 'A Sunny Day at Ha Long Bay',
        titleVi: 'Ngày Nắng Đẹp Trên Vịnh Hạ Long',
        sentencesEn: [
          'Welcome to Ha Long Bay!',
          'The sea is calm and green.',
          'We sail on a wooden boat.',
          'Look at the high islands and magical caves!',
          'Vietnam is so beautiful!'
        ],
        sentencesVi: [
          'Chào mừng các em đến với Vịnh Hạ Long!',
          'Nước biển êm đềm và xanh ngắt.',
          'Chúng em dạo chơi trên con thuyền gỗ.',
          'Hãy nhìn những hòn đảo cao và hang đá kỳ ảo kìa!',
          'Đất nước Việt Nam thật tươi đẹp!'
        ]
      }
    },
    {
      id: 'lesson-g1-animals-cucphuong',
      gradeNum: 1,
      lessonNumber: 2,
      titleEn: 'Cuc Phuong Forest: Cute Animal Friends',
      titleVi: 'Rừng Cúc Phương: Những Người Bạn Động Vật',
      unitTag: 'Unit 2 • Forest Friends',
      topicEn: 'Animals & Phonics Sounds',
      topicVi: 'Động vật hoang dã & Phát âm âm vần',
      cefr: 'Pre-A1 Starter',
      durationMinutes: 30,
      objectivesEn: [
        'Recognize 4 animal names: bird, monkey, butterfly, turtle.',
        'Say what animal you see: "I see a cute monkey."',
        'Practice counting from 1 to 5.'
      ],
      objectivesVi: [
        'Nhận biết 4 con vật thân quen: bird, monkey, butterfly, turtle.',
        'Mẫu câu diễn đạt: "I see a cute monkey."',
        'Tập đếm số lượng từ 1 đến 5.'
      ],
      coverImage: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=800&q=80',
      vocabulary: [
        { word: 'bird', ipa: '/bɜːd/', meaningVi: 'Chú chim nhỏ', meaningEn: 'A feathered flying animal.', emoji: '🐦', exampleEn: 'A yellow bird sings in the tree.' },
        { word: 'monkey', ipa: '/ˈmʌŋ.ki/', meaningVi: 'Chú khỉ tinh nghịch', meaningEn: 'A playful tree-dwelling animal.', emoji: '🐒', exampleEn: 'The monkey swings on vines.' },
        { word: 'butterfly', ipa: '/ˈbʌt.ə.flaɪ/', meaningVi: 'Con bướm rực rỡ', meaningEn: 'An insect with colorful wings.', emoji: '🦋', exampleEn: 'The butterfly visits flowers.' },
        { word: 'turtle', ipa: '/ˈtɜː.təl/', meaningVi: 'Chú rùa hiền lành', meaningEn: 'A slow animal with a hard shell.', emoji: '🐢', exampleEn: 'The turtle swims in the pond.' }
      ],
      sentencePattern: {
        pattern: 'I see a [color] [animal]!',
        meaningVi: 'Tôi nhìn thấy một con [động vật] màu [màu sắc]!',
        dialogue: [
          { speaker: 'Captain Trang', text: 'Look into the trees! What do you see?', textVi: 'Nhìn lên cây kìa! Con thấy gì thế?' },
          { speaker: 'Student', text: 'I see a brown monkey!', textVi: 'Em nhìn thấy một chú khỉ màu nâu ạ!' }
        ]
      },
      readingPassage: {
        titleEn: 'Walking in the Green Forest',
        titleVi: 'Đi Dạo Trong Rừng Xanh',
        sentencesEn: [
          'We walk in Cuc Phuong forest.',
          'One, two, three colorful butterflies fly.',
          'A quiet turtle sits on a warm rock.',
          'We love our forest friends!'
        ],
        sentencesVi: [
          'Chúng em đi dạo trong rừng Cúc Phương.',
          'Một, hai, ba chú bướm nhiều màu đang bay.',
          'Một chú rùa yên lặng ngồi trên tảng đá ấm.',
          'Chúng em rất yêu quý các bạn nhỏ trong rừng!'
        ]
      }
    }
  ],
  2: [
    {
      id: 'lesson-g2-food-pho',
      gradeNum: 2,
      lessonNumber: 1,
      titleEn: 'A Bowl of Warm Phở: Vietnam’s Famous Soup',
      titleVi: 'Tô Phở Nóng Hổi: Món Súp Nổi Tiếng Việt Nam',
      unitTag: 'Unit 1 • Delicious Vietnam',
      topicEn: 'Vietnamese Culinary Heritage & Food Words',
      topicVi: 'Ẩm thực truyền thống & Từ vựng món ăn',
      cefr: 'Pre-A1 Beginner',
      durationMinutes: 35,
      objectivesEn: [
        'Learn 5 food and ingredient words: soup, noodles, beef, herbs, lemon.',
        'Express food preferences: "I like warm phở. It smells delicious!"',
        'Order food politely: "A bowl of noodles, please."'
      ],
      objectivesVi: [
        'Học 5 từ vựng ẩm thực: soup, noodles, beef, herbs, lemon.',
        'Mẫu câu sở thích: "I like warm phở. It smells delicious!"',
        'Cách gọi món lịch sự: "A bowl of noodles, please."'
      ],
      coverImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
      vocabulary: [
        { word: 'soup', ipa: '/suːp/', meaningVi: 'Nước dùng súp', meaningEn: 'Liquid food cooked with herbs and meat.', emoji: '🥣', exampleEn: 'The warm soup is fragrant.' },
        { word: 'noodles', ipa: '/ˈnuː.dəlz/', meaningVi: 'Sợi bánh phở', meaningEn: 'Long thin strips made of rice.', emoji: '🍜', exampleEn: 'White rice noodles are soft.' },
        { word: 'beef', ipa: '/biːf/', meaningVi: 'Thịt bò tươi', meaningEn: 'Meat from cattle.', emoji: '🥩', exampleEn: 'Fresh beef is cooked quickly.' },
        { word: 'herbs', ipa: '/hɜːbz/', meaningVi: 'Rau thơm gia vị', meaningEn: 'Leaves used for flavoring food.', emoji: '🌿', exampleEn: 'Green herbs make phở taste fresh.' },
        { word: 'lemon', ipa: '/ˈlem.ən/', meaningVi: 'Quả chanh tươi', meaningEn: 'A yellow or green sour fruit.', emoji: '🍋', exampleEn: 'Squeeze a fresh lemon into your soup.' }
      ],
      sentencePattern: {
        pattern: 'I like [food]! It is [adjective].',
        meaningVi: 'Tôi thích [món ăn]! Nó rất là [tính từ].',
        dialogue: [
          { speaker: 'Chef Trang', text: 'Good morning! What would you like to eat?', textVi: 'Chào buổi sáng! Em muốn dùng món gì?' },
          { speaker: 'Student', text: 'I like warm phở, please. It smells wonderful!', textVi: 'Em thích một bát phở nóng ạ. Mùi thơm quá!' }
        ]
      },
      readingPassage: {
        titleEn: 'Breakfast in Hanoi Old Quarter',
        titleVi: 'Bữa Sáng Phố Cổ Hà Nội',
        sentencesEn: [
          'The morning in Hanoi is cool and breezy.',
          'People sit at friendly tables on the street.',
          'Chef Trang serves steaming bowls of beef phở.',
          'Add fresh herbs and lemon juice.',
          'It is the most delicious breakfast in the world!'
        ],
        sentencesVi: [
          'Buổi sáng Hà Nội mát mẻ và trong lành.',
          'Mọi người ngồi quanh những chiếc bàn nhỏ thân quen.',
          'Đầu bếp Trang bưng ra những tô phở bò bốc khói nghi ngút.',
          'Thêm một chút rau thơm và vắt lát chanh tươi.',
          'Đó là bữa sáng ngon lành nhất trần đời!'
        ]
      }
    }
  ],
  3: [
    {
      id: 'lesson-g3-culture-midautumn',
      gradeNum: 3,
      lessonNumber: 1,
      titleEn: 'Mid-Autumn Moon Festival: Lanterns & Starry Nights',
      titleVi: 'Đêm Hội Trăng Rằm: Đèn Lồng & Ngàn Sao Lấp Lánh',
      unitTag: 'Unit 1 • Vietnamese Culture',
      topicEn: 'Cultural Celebrations & Storytelling',
      topicVi: 'Lễ hội truyền thống & Kể chuyện dân gian',
      cefr: 'Pre-A1 Foundation',
      durationMinutes: 40,
      objectivesEn: [
        'Learn festival terms: lantern, mooncake, lion dance, full moon.',
        'Describe traditional celebrations: "Children carry star lanterns under the full moon."',
        'Understand Vietnamese folklore about the Moon Lady (Chị Hằng) and Cuội.'
      ],
      objectivesVi: [
        'Học từ vựng lễ hội: lantern, mooncake, lion dance, full moon.',
        'Mô tả đêm hội rằm: "Children carry star lanterns under the full moon."',
        'Tìm hiểu câu chuyện chị Hằng và chú Cuội bằng tiếng Anh.'
      ],
      coverImage: 'https://images.unsplash.com/photo-1533230393619-3fdd1f9d6c4c?auto=format&fit=crop&w=800&q=80',
      vocabulary: [
        { word: 'lantern', ipa: '/ˈlæn.tən/', meaningVi: 'Đèn lồng ông sao', meaningEn: 'A light inside a decorative colorful frame.', emoji: '🏮', exampleEn: 'My star lantern glows brightly.' },
        { word: 'mooncake', ipa: '/ˈmuːn.keɪk/', meaningVi: 'Bánh trung thu', meaningEn: 'A round pastry eaten during the festival.', emoji: '🥮', exampleEn: 'Sweet lotus mooncake is yummy.' },
        { word: 'lion dance', ipa: '/ˈlaɪ.ən dɑːns/', meaningVi: 'Múa lân sư rồng', meaningEn: 'A traditional dance with drum beats.', emoji: '🦁', exampleEn: 'The playful lion dances to the drum.' },
        { word: 'full moon', ipa: '/fʊl muːn/', meaningVi: 'Mặt trăng tròn', meaningEn: 'The moon when completely illuminated.', emoji: '🌕', exampleEn: 'The golden full moon shines in the sky.' }
      ],
      sentencePattern: {
        pattern: 'We celebrate [festival] by [verb-ing] [noun].',
        meaningVi: 'Chúng em đón mừng [lễ hội] bằng cách [hành động].',
        dialogue: [
          { speaker: 'Captain Trang', text: 'How do you celebrate Mid-Autumn Festival?', textVi: 'Các em đón Tết Trung Thu như thế nào?' },
          { speaker: 'Student', text: 'We carry colorful star lanterns and share mooncakes with family!', textVi: 'Chúng em rước đèn ông sao và cùng gia đình phá cỗ trung thu!' }
        ]
      },
      readingPassage: {
        titleEn: 'The Night of Glowing Stars',
        titleVi: 'Đêm Hội Ngàn Sao Rực Rỡ',
        sentencesEn: [
          'On the fifteenth night of the eighth lunar month, the moon is round and bright.',
          'Drums beat loudly: Tung! Tung! Zing! Zing!',
          'A colorful lion leaps joyfully across the school yard.',
          'Children hold bamboo star lanterns and sing Vietnamese folk songs.',
          'It is a night of warmth, friendship, and sparkling dreams.'
        ],
        sentencesVi: [
          'Vào đêm rằm tháng tám âm lịch, vầng trăng tròn vành vạnh và sáng tỏ.',
          'Tiếng trống rộn rã: Tùng! Tùng! Dinh! Dinh!',
          'Chú lân rực rỡ uốn lượn uyển chuyển giữa sân trường.',
          'Trẻ em cầm đèn ông sao bằng tre và cùng cất cao lời hát dân ca.',
          'Đó là một đêm ấm áp của tình thân và ước mơ tuổi thơ.'
        ]
      }
    }
  ],
  4: [
    {
      id: 'lesson-g4-nature-phongnha',
      gradeNum: 4,
      lessonNumber: 1,
      titleEn: 'The Secret Caves of Phong Nha & Douc Langurs',
      titleVi: 'Hang Động Kỳ Bí Phong Nha & Voọc Chà Vá Chân Nâu',
      unitTag: 'Unit 1 • Nature & Wildlife',
      topicEn: 'Rainforest Conservation & Geological Wonders',
      topicVi: 'Bảo tồn rừng nhiệt đới & Kỳ quan địa chất',
      cefr: 'Pre-A1 to A1',
      durationMinutes: 40,
      objectivesEn: [
        'Learn eco-science vocabulary: stalactite, rainforest, underground river, endangered langur.',
        'Express cause and environmental responsibility: "We should protect the rainforest because animals live there."',
        'Read an interview with a national park ranger.'
      ],
      objectivesVi: [
        'Học từ vựng khoa học tự nhiên: stalactite, rainforest, underground river, endangered langur.',
        'Mẫu câu giải thích trách nhiệm môi trường: "We should protect the rainforest..."',
        'Đọc hiểu bài phỏng vấn với bác kiểm lâm vườn quốc gia.'
      ],
      coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      vocabulary: [
        { word: 'rainforest', ipa: '/ˈreɪn.fɒr.ɪst/', meaningVi: 'Rừng mưa nhiệt đới', meaningEn: 'A dense forest rich in biodiversity.', emoji: '🌳', exampleEn: 'Phong Nha rainforest is home to rare plants.' },
        { word: 'stalactite', ipa: '/ˈstæl.ək.taɪt/', meaningVi: 'Khối thạch nhũ', meaningEn: 'An icicle-shaped rock hanging from a cave roof.', emoji: '🪨', exampleEn: 'Water drops create beautiful stalactites.' },
        { word: 'langur', ipa: '/læŋˈɡʊər/', meaningVi: 'Loài voọc chà vá', meaningEn: 'An endangered colorful primate.', emoji: '🐒', exampleEn: 'The red-shanked douc langur has five colors.' },
        { word: 'protect', ipa: '/prəˈtekt/', meaningVi: 'Bảo vệ, giữ gìn', meaningEn: 'To keep safe from harm.', emoji: '🛡️', exampleEn: 'We must protect our national parks.' }
      ],
      sentencePattern: {
        pattern: 'We should [verb] because [reason].',
        meaningVi: 'Chúng ta nên [hành động] bởi vì [lý do].',
        dialogue: [
          { speaker: 'Ranger Trang', text: 'Why are douc langurs called the queen of primates?', textVi: 'Tại sao voọc chà vá được gọi là nữ hoàng linh trưởng?' },
          { speaker: 'Student', text: 'Because their coats have five brilliant colors, and they leap gracefully across the treetops!', textVi: 'Bởi vì bộ lông của chúng có 5 sắc màu rực rỡ và chúng chuyền cành vô cùng duyên dáng!' }
        ]
      },
      readingPassage: {
        titleEn: 'Guardians of the Ancient Rainforest',
        titleVi: 'Người Gác Rừng Nguyên Sinh Cổ Kính',
        sentencesEn: [
          'Deep inside Central Vietnam lies Phong Nha-Ke Bang National Park.',
          'Millions of years of water carving limestone formed gigantic subterranean caves.',
          'An underground river flows silently in the cool darkness.',
          'High above in the forest canopy, red-shanked douc langurs feast on tender leaves.',
          'Young explorers pledge to safeguard this paradise forever.'
        ],
        sentencesVi: [
          'Sâu trong dải đất miền Trung là Vườn quốc gia Phong Nha - Kẻ Bàng.',
          'Hàng triệu năm dòng nước bào mòn đá vôi đã tạo nên những hang động ngầm khổng lồ.',
          'Một dòng sông ngầm êm đềm trôi trong bóng tối mát lạnh.',
          'Trên tầng tán rừng nguyên sinh, những chú voọc chà vá chân nâu tìm ăn chồi non.',
          'Các nhà thám hiểm nhí cùng cam kết bảo vệ thiên đường xanh mãi mãi.'
        ]
      }
    }
  ],
  5: [
    {
      id: 'lesson-g5-future-smartcity',
      gradeNum: 5,
      lessonNumber: 1,
      titleEn: 'Smart Green Cities & Modern Metro Lines',
      titleVi: 'Đô Thị Thông Minh & Tuyến Metro Xanh Hiện Đại',
      unitTag: 'Unit 1 • Future Vietnam',
      topicEn: 'Sustainable Urban Development & STEM Innovation',
      topicVi: 'Đô thị tương lai, năng lượng sạch & Đổi mới sáng tạo',
      cefr: 'A1-A2 Extension',
      durationMinutes: 45,
      objectivesEn: [
        'Master advanced 21st-century vocabulary: elevated metro, solar panel, sustainable city, electric vehicle.',
        'Discuss future city plans: "In the future, our city will rely on 100% clean solar energy."',
        'Conduct a speech presentation introducing your vision for smart Vietnam.'
      ],
      objectivesVi: [
        'Làm chủ từ vựng thế kỷ 21: elevated metro, solar panel, sustainable city, electric vehicle.',
        'Mẫu câu tầm nhìn tương lai: "In the future, our city will rely on clean solar energy."',
        'Thực hành thuyết trình giới thiệu thành phố thông minh trong mơ.'
      ],
      coverImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
      vocabulary: [
        { word: 'metro', ipa: '/ˈmet.rəʊ/', meaningVi: 'Tàu điện đô thị', meaningEn: 'An urban electric railway system.', emoji: '🚆', exampleEn: 'The electric metro connects the city fast.' },
        { word: 'solar panel', ipa: '/ˈsəʊ.lə ˈpæn.əl/', meaningVi: 'Tấm pin mặt trời', meaningEn: 'A device that turns sunlight into clean electricity.', emoji: '☀️', exampleEn: 'Rooftop solar panels power modern schools.' },
        { word: 'sustainable', ipa: '/səˈsteɪ.nə.bəl/', meaningVi: 'Phát triển bền vững', meaningEn: 'Causing little or no damage to the environment.', emoji: '🌱', exampleEn: 'Cycling makes our neighborhood sustainable.' },
        { word: 'electric bus', ipa: '/iˈlek.trɪk bʌs/', meaningVi: 'Xe buýt điện xanh', meaningEn: 'A zero-emission passenger bus.', emoji: '🚌', exampleEn: 'Electric buses keep the city air fresh and quiet.' }
      ],
      sentencePattern: {
        pattern: 'In the future, our city will [verb] to [purpose].',
        meaningVi: 'Trong tương lai, thành phố của chúng ta sẽ [làm gì] để [mục đích].',
        dialogue: [
          { speaker: 'Architect Trang', text: 'How will Vietnamese children travel in 2030?', textVi: 'Học sinh Việt Nam sẽ đến trường bằng cách nào vào năm 2030?' },
          { speaker: 'Champion Student', text: 'We will ride quiet electric metros and zero-emission sky buses powered by clean solar energy!', textVi: 'Chúng em sẽ đi tàu điện metro êm ái và xe buýt điện chạy bằng năng lượng mặt trời sạch!' }
        ]
      },
      readingPassage: {
        titleEn: 'Hanoi & Ho Chi Minh City: The Green Metro Era',
        titleVi: 'Hà Nội & TP.HCM: Kỷ Nguyên Giao Thông Xanh',
        sentencesEn: [
          'Vietnam is rapidly transforming into a beacon of sustainable smart urban living.',
          'Elevated metro railways glide smoothly across gleaming skylines, replacing heavy traffic.',
          'Modern residential buildings harvest clean electricity from sunlight and rooftop gardens.',
          'Automated sorting systems recycle paper, glass, and compost for organic farming.',
          'Young Vietnamese champions are designing the greenest, happiest homeland for all generations.'
        ],
        sentencesVi: [
          'Việt Nam đang chuyển mình mạnh mẽ thành ngọn hải đăng của lối sống đô thị xanh thông minh.',
          'Các tuyến đường sắt đô thị trên cao lướt êm qua đường chân trời rực rỡ, thay thế ùn tắc giao thông.',
          'Các tòa nhà hiện đại thu nhận điện sạch từ ánh sáng mặt trời và các khu vườn trên mái.',
          'Hệ thống phân loại tự động tái chế giấy, thủy tinh và ủ phân hữu cơ cho nông nghiệp sạch.',
          'Những mầm non quán quân Việt Nam đang kiến tạo nên quê hương tươi đẹp và hạnh phúc cho mai sau.'
        ]
      }
    }
  ]
};

// ------------------------------------------------------------------------------
// 3. COMPLETE FUNCTIONING QUESTION BANKS FOR ALL 7 GAME ENGINES
// ------------------------------------------------------------------------------

// GAME 1: DRAG AND DROP
export const DRAG_DROP_BANK: Record<GradeNumber, DragDropQuestion[]> = {
  1: [
    {
      id: 'dd-g1-1',
      titleEn: 'Sea vs. Land Wonders',
      titleVi: 'Kỳ Quan Biển Cả & Núi Rừng',
      instructionsEn: 'Drag each picture to the correct natural home!',
      instructionsVi: 'Kéo thả từng hình ảnh vào đúng môi trường tự nhiên!',
      categories: [
        { id: 'cat-sea', labelEn: 'Sea & Water 🌊', labelVi: 'Biển Cả', color: 'bg-sky-100 text-sky-800 border-sky-300' },
        { id: 'cat-land', labelEn: 'Land & Forest 🌳', labelVi: 'Đất Liền', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
      ],
      items: [
        { id: 'item-boat', textEn: 'Wooden Boat', textVi: 'Thuyền gỗ', emoji: '⛵', categoryId: 'cat-sea' },
        { id: 'item-island', textEn: 'Emerald Island', textVi: 'Hòn đảo', emoji: '🏝️', categoryId: 'cat-sea' },
        { id: 'item-monkey', textEn: 'Playful Monkey', textVi: 'Chú khỉ', emoji: '🐒', categoryId: 'cat-land' },
        { id: 'item-tree', textEn: 'Tall Green Tree', textVi: 'Cây cổ thụ', emoji: '🌲', categoryId: 'cat-land' }
      ]
    }
  ],
  2: [
    {
      id: 'dd-g2-1',
      titleEn: 'Breakfast Foods vs. Classroom Tools',
      titleVi: 'Món Ăn Sáng & Dụng Cụ Học Tập',
      instructionsEn: 'Sort words into Delicious Food or School Tools!',
      instructionsVi: 'Phân loại từ vựng vào nhóm Món Ăn hoặc Đồ Dùng Học Tập!',
      categories: [
        { id: 'cat-food', labelEn: 'Delicious Food 🍜', labelVi: 'Món Ăn Ngon', color: 'bg-amber-100 text-amber-800 border-amber-300' },
        { id: 'cat-school', labelEn: 'Classroom Tools 🎒', labelVi: 'Đồ Dùng Học Tập', color: 'bg-purple-100 text-purple-800 border-purple-300' }
      ],
      items: [
        { id: 'item-pho', textEn: 'Beef Phở', textVi: 'Phở bò', emoji: '🍜', categoryId: 'cat-food' },
        { id: 'item-soup', textEn: 'Warm Soup', textVi: 'Tô súp', emoji: '🥣', categoryId: 'cat-food' },
        { id: 'item-pencil', textEn: 'Colored Pencil', textVi: 'Bút chì', emoji: '✏️', categoryId: 'cat-school' },
        { id: 'item-ruler', textEn: 'Long Ruler', textVi: 'Thước kẻ', emoji: '📏', categoryId: 'cat-school' }
      ]
    }
  ],
  3: [
    {
      id: 'dd-g3-1',
      titleEn: 'Mid-Autumn Festival vs. Everyday Life',
      titleVi: 'Lễ Hội Trung Thu & Đời Sống Hàng Ngày',
      instructionsEn: 'Categorize cultural festival items vs everyday items!',
      instructionsVi: 'Sắp xếp các đồ vật lễ hội truyền thống và vật dụng hàng ngày!',
      categories: [
        { id: 'cat-fest', labelEn: 'Festival Wonders 🏮', labelVi: 'Lễ Hội Trung Thu', color: 'bg-rose-100 text-rose-800 border-rose-300' },
        { id: 'cat-daily', labelEn: 'Everyday Life 🚲', labelVi: 'Sinh Hoạt Hàng Ngày', color: 'bg-blue-100 text-blue-800 border-blue-300' }
      ],
      items: [
        { id: 'item-mooncake', textEn: 'Lotus Mooncake', textVi: 'Bánh trung thu', emoji: '🥮', categoryId: 'cat-fest' },
        { id: 'item-lion', textEn: 'Lion Dance Mask', textVi: 'Đầu lân sư', emoji: '🦁', categoryId: 'cat-fest' },
        { id: 'item-bike', textEn: 'Bicycle', textVi: 'Xe đạp', emoji: '🚲', categoryId: 'cat-daily' },
        { id: 'item-book', textEn: 'Story Book', textVi: 'Sách truyện', emoji: '📖', categoryId: 'cat-daily' }
      ]
    }
  ],
  4: [
    {
      id: 'dd-g4-1',
      titleEn: 'Rainforest Wildlife vs. Cave Geography',
      titleVi: 'Sinh Vật Rừng & Địa Chất Hang Động',
      instructionsEn: 'Sort geological cave terms and forest wildlife!',
      instructionsVi: 'Phân loại từ ngữ địa mạo hang động và động vật rừng nguyên sinh!',
      categories: [
        { id: 'cat-cave', labelEn: 'Cave Geography 🪨', labelVi: 'Hang Động Địa Chất', color: 'bg-slate-100 text-slate-800 border-slate-300' },
        { id: 'cat-wild', labelEn: 'Forest Wildlife 🦜', labelVi: 'Sinh Vật Rừng', color: 'bg-teal-100 text-teal-800 border-teal-300' }
      ],
      items: [
        { id: 'item-stalactite', textEn: 'Limestone Stalactite', textVi: 'Khối thạch nhũ', emoji: '🪨', categoryId: 'cat-cave' },
        { id: 'item-river', textEn: 'Subterranean River', textVi: 'Sông ngầm', emoji: '💧', categoryId: 'cat-cave' },
        { id: 'item-douc', textEn: 'Red-shanked Douc', textVi: 'Voọc chà vá', emoji: '🐒', categoryId: 'cat-wild' },
        { id: 'item-hornbill', textEn: 'Great Hornbill Bird', textVi: 'Chim hồng hoàng', emoji: '🦜', categoryId: 'cat-wild' }
      ]
    }
  ],
  5: [
    {
      id: 'dd-g5-1',
      titleEn: 'Clean Green Tech vs. Polluting Energy',
      titleVi: 'Công Nghệ Xanh Bền Vững & Năng Lượng Ô Nhiễm',
      instructionsEn: 'Group future smart city technologies vs traditional fossil fuels!',
      instructionsVi: 'Phân loại công nghệ thành phố thông minh xanh và nguồn năng lượng hóa thạch!',
      categories: [
        { id: 'cat-green', labelEn: 'Clean Green Energy 🌱', labelVi: 'Năng Lượng Xanh', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
        { id: 'cat-fossil', labelEn: 'Fossil Emissions 🏭', labelVi: 'Phát Thải Hóa Thạch', color: 'bg-stone-200 text-stone-800 border-stone-400' }
      ],
      items: [
        { id: 'item-solar', textEn: 'Solar Panel Array', textVi: 'Tấm pin mặt trời', emoji: '☀️', categoryId: 'cat-green' },
        { id: 'item-metro', textEn: 'Electric Metro Rail', textVi: 'Tàu điện ngầm metro', emoji: '🚆', categoryId: 'cat-green' },
        { id: 'item-diesel', textEn: 'Diesel Smoke Bus', textVi: 'Xe khói dầu diesel', emoji: '💨', categoryId: 'cat-fossil' },
        { id: 'item-coal', textEn: 'Coal Power Plant', textVi: 'Nhà máy đốt than', emoji: '🏭', categoryId: 'cat-fossil' }
      ]
    }
  ]
};

// GAME 2: LISTEN AND CHOOSE
export const LISTEN_CHOOSE_BANK: Record<GradeNumber, ListenChooseQuestion[]> = {
  1: [
    {
      id: 'lc-g1-1',
      audioPromptEn: 'Look at the emerald sea! The water is calm.',
      questionEn: 'Listen carefully! What is green and calm?',
      questionVi: 'Lắng nghe cô Trang! Thứ gì xanh mát và êm dịu?',
      options: [
        { id: 'o1', textEn: 'The Sea', textVi: 'Biển cả', emoji: '🌊', isCorrect: true },
        { id: 'o2', textEn: 'A Fast Train', textVi: 'Tàu hỏa', emoji: '🚆', isCorrect: false },
        { id: 'o3', textEn: 'A Red Airplane', textVi: 'Máy bay đỏ', emoji: '✈️', isCorrect: false }
      ],
      explanationEn: 'The audio said: "Look at the emerald sea! The water is calm."',
      explanationVi: 'Cô Trang vừa đọc: "Look at the emerald sea!" (Hãy nhìn ra biển ngọc kìa!).'
    },
    {
      id: 'lc-g1-2',
      audioPromptEn: 'A playful monkey swings from the tall tree.',
      questionEn: 'Which animal is swinging in the tree?',
      questionVi: 'Con vật nào đang chuyền cành trên cây cao?',
      options: [
        { id: 'o1', textEn: 'Monkey', textVi: 'Chú khỉ', emoji: '🐒', isCorrect: true },
        { id: 'o2', textEn: 'Turtle', textVi: 'Chú rùa', emoji: '🐢', isCorrect: false },
        { id: 'o3', textEn: 'Fish', textVi: 'Con cá', emoji: '🐟', isCorrect: false }
      ],
      explanationEn: 'The audio said: "A playful monkey swings from the tall tree."',
      explanationVi: 'Lời đọc: "A playful monkey..." (Một chú khỉ tinh nghịch chuyền cành).'
    }
  ],
  2: [
    {
      id: 'lc-g2-1',
      audioPromptEn: 'Good morning! I would like a warm bowl of beef phở, please.',
      questionEn: 'What delicious breakfast did Captain Trang order?',
      questionVi: 'Cô Trang vừa gọi món ăn sáng thơm ngon nào?',
      options: [
        { id: 'o1', textEn: 'Beef Phở', textVi: 'Phở bò', emoji: '🍜', isCorrect: true },
        { id: 'o2', textEn: 'Ice Cream', textVi: 'Kem lạnh', emoji: '🍦', isCorrect: false },
        { id: 'o3', textEn: 'Pizza', textVi: 'Bánh pizza', emoji: '🍕', isCorrect: false }
      ],
      explanationEn: 'The audio said: "I would like a warm bowl of beef phở, please."',
      explanationVi: 'Cô Trang nói: "I would like a warm bowl of beef phở, please."'
    }
  ],
  3: [
    {
      id: 'lc-g3-1',
      audioPromptEn: 'Under the bright full moon, children sing songs with glowing star lanterns.',
      questionEn: 'What do children carry in their hands?',
      questionVi: 'Các bạn nhỏ đang cầm vật gì rực rỡ trên tay?',
      options: [
        { id: 'o1', textEn: 'Star Lanterns', textVi: 'Đèn lồng ông sao', emoji: '🏮', isCorrect: true },
        { id: 'o2', textEn: 'Umbrellas', textVi: 'Chiếc ô', emoji: '☂️', isCorrect: false },
        { id: 'o3', textEn: 'Tennis Rackets', textVi: 'Vợt tennis', emoji: '🎾', isCorrect: false }
      ],
      explanationEn: 'The audio said: "...children sing songs with glowing star lanterns."',
      explanationVi: 'Đoạn băng đọc: "children sing songs with glowing star lanterns".'
    }
  ],
  4: [
    {
      id: 'lc-g4-1',
      audioPromptEn: 'The red-shanked douc langur has five vibrant colors and lives high in the forest canopy.',
      questionEn: 'Where does the rare douc langur live?',
      questionVi: 'Loài voọc ngũ sắc quý hiếm sinh sống ở đâu?',
      options: [
        { id: 'o1', textEn: 'High in the forest canopy', textVi: 'Trên tầng tán rừng cao', emoji: '🌳', isCorrect: true },
        { id: 'o2', textEn: 'Under the ocean sand', textVi: 'Dưới đáy cát biển', emoji: '🏖️', isCorrect: false },
        { id: 'o3', textEn: 'Inside a city garage', textVi: 'Trong nhà để xe', emoji: '🚗', isCorrect: false }
      ],
      explanationEn: 'The audio said: "...lives high in the forest canopy."',
      explanationVi: 'Đoạn băng đọc: "lives high in the forest canopy" (sống trên tầng tán rừng cao).'
    }
  ],
  5: [
    {
      id: 'lc-g5-1',
      audioPromptEn: 'Modern electric metros and rooftop solar panels create a peaceful, emission-free city.',
      questionEn: 'What is the main benefit of electric transit and solar panels?',
      questionVi: 'Lợi ích chính của tàu điện metro và pin mặt trời là gì?',
      options: [
        { id: 'o1', textEn: 'An emission-free, peaceful city', textVi: 'Thành phố xanh không khói bụi', emoji: '🌱', isCorrect: true },
        { id: 'o2', textEn: 'More traffic jams', textVi: 'Gây ùn tắc xe cộ', emoji: '🚗', isCorrect: false },
        { id: 'o3', textEn: 'Loud factory smoke', textVi: 'Tạo nhiều khói nhà máy', emoji: '🏭', isCorrect: false }
      ],
      explanationEn: 'The audio stated they create a peaceful, emission-free city.',
      explanationVi: 'Đoạn ghi âm nhấn mạnh mục tiêu: "peaceful, emission-free city" (thành phố không phát thải).'
    }
  ]
};

// GAME 3: MATCH THE PAIRS
export const MATCH_PAIRS_BANK: Record<GradeNumber, MatchPairItem[]> = {
  1: [
    { id: 'p1', leftEn: 'Sea', rightVi: 'Biển cả', emoji: '🌊' },
    { id: 'p2', leftEn: 'Boat', rightVi: 'Con thuyền', emoji: '⛵' },
    { id: 'p3', leftEn: 'Island', rightVi: 'Hòn đảo', emoji: '🏝️' },
    { id: 'p4', leftEn: 'Cave', rightVi: 'Hang đá', emoji: '🪨' },
    { id: 'p5', leftEn: 'Bird', rightVi: 'Chú chim', emoji: '🐦' },
    { id: 'p6', leftEn: 'Monkey', rightVi: 'Con khỉ', emoji: '🐒' }
  ],
  2: [
    { id: 'p1', leftEn: 'Soup', rightVi: 'Tô súp phở', emoji: '🥣' },
    { id: 'p2', leftEn: 'Noodles', rightVi: 'Sợi phở', emoji: '🍜' },
    { id: 'p3', leftEn: 'Beef', rightVi: 'Thịt bò', emoji: '🥩' },
    { id: 'p4', leftEn: 'Herbs', rightVi: 'Rau thơm', emoji: '🌿' },
    { id: 'p5', leftEn: 'Lemon', rightVi: 'Quả chanh', emoji: '🍋' },
    { id: 'p6', leftEn: 'Pencil', rightVi: 'Bút chì', emoji: '✏️' }
  ],
  3: [
    { id: 'p1', leftEn: 'Lantern', rightVi: 'Đèn lồng', emoji: '🏮' },
    { id: 'p2', leftEn: 'Mooncake', rightVi: 'Bánh trung thu', emoji: '🥮' },
    { id: 'p3', leftEn: 'Full Moon', rightVi: 'Trăng rằm', emoji: '🌕' },
    { id: 'p4', leftEn: 'Lion Dance', rightVi: 'Múa lân', emoji: '🦁' },
    { id: 'p5', leftEn: 'Citadel', rightVi: 'Kinh thành', emoji: '🏯' },
    { id: 'p6', leftEn: 'Drum', rightVi: 'Tiếng trống', emoji: '🥁' }
  ],
  4: [
    { id: 'p1', leftEn: 'Rainforest', rightVi: 'Rừng nhiệt đới', emoji: '🌳' },
    { id: 'p2', leftEn: 'Stalactite', rightVi: 'Khối thạch nhũ', emoji: '🪨' },
    { id: 'p3', leftEn: 'Langur', rightVi: 'Voọc ngũ sắc', emoji: '🐒' },
    { id: 'p4', leftEn: 'Protect', rightVi: 'Bảo vệ', emoji: '🛡️' },
    { id: 'p5', leftEn: 'River', rightVi: 'Dòng sông ngầm', emoji: '💧' },
    { id: 'p6', leftEn: 'Canopy', rightVi: 'Tán rừng', emoji: '🌿' }
  ],
  5: [
    { id: 'p1', leftEn: 'Metro', rightVi: 'Tàu điện đô thị', emoji: '🚆' },
    { id: 'p2', leftEn: 'Solar Panel', rightVi: 'Pin mặt trời', emoji: '☀️' },
    { id: 'p3', leftEn: 'Electric Bus', rightVi: 'Xe buýt điện', emoji: '🚌' },
    { id: 'p4', leftEn: 'Sustainable', rightVi: 'Bền vững', emoji: '🌱' },
    { id: 'p5', leftEn: 'Innovation', rightVi: 'Đổi mới sáng tạo', emoji: '💡' },
    { id: 'p6', leftEn: 'Skyline', rightVi: 'Đường chân trời', emoji: '🏙️' }
  ]
};

// GAME 4: WORD PUZZLE (LETTER TILES)
export const WORD_PUZZLE_BANK: Record<GradeNumber, WordPuzzleItem[]> = {
  1: [
    { id: 'wp-g1-1', targetWord: 'SEA', hintEn: 'Large salty blue water.', hintVi: 'Vùng nước mặn xanh ngắt.', emoji: '🌊', partOfSpeech: 'noun' },
    { id: 'wp-g1-2', targetWord: 'BOAT', hintEn: 'Travels on the water.', hintVi: 'Phương tiện nổi trên mặt nước.', emoji: '⛵', partOfSpeech: 'noun' },
    { id: 'wp-g1-3', targetWord: 'CAVE', hintEn: 'A magical natural hole in rocks.', hintVi: 'Hang động kỳ bí trong núi.', emoji: '🪨', partOfSpeech: 'noun' }
  ],
  2: [
    { id: 'wp-g2-1', targetWord: 'SOUP', hintEn: 'Warm liquid in a bowl.', hintVi: 'Nước dùng ấm trong bát.', emoji: '🥣', partOfSpeech: 'noun' },
    { id: 'wp-g2-2', targetWord: 'LEMON', hintEn: 'Sour green or yellow fruit.', hintVi: 'Quả chua vắt vào phở.', emoji: '🍋', partOfSpeech: 'noun' },
    { id: 'wp-g2-3', targetWord: 'BEEF', hintEn: 'Meat used in warm phở.', hintVi: 'Thịt bò tươi ngon.', emoji: '🥩', partOfSpeech: 'noun' }
  ],
  3: [
    { id: 'wp-g3-1', targetWord: 'MOON', hintEn: 'Shines brightly on full moon nights.', hintVi: 'Mặt trăng tròn vằng vặc.', emoji: '🌕', partOfSpeech: 'noun' },
    { id: 'wp-g3-2', targetWord: 'DRUM', hintEn: 'Plays loud Tung Tung beats during lion dance.', hintVi: 'Trống hội múa lân rộn rã.', emoji: '🥁', partOfSpeech: 'noun' }
  ],
  4: [
    { id: 'wp-g4-1', targetWord: 'FOREST', hintEn: 'A large area with many trees and animals.', hintVi: 'Rừng cây nguyên sinh rộng lớn.', emoji: '🌳', partOfSpeech: 'noun' },
    { id: 'wp-g4-2', targetWord: 'LANGUR', hintEn: 'Colorful monkey living in treetops.', hintVi: 'Loài voọc quý hiếm trên cây.', emoji: '🐒', partOfSpeech: 'noun' }
  ],
  5: [
    { id: 'wp-g5-1', targetWord: 'METRO', hintEn: 'Fast urban electric transit.', hintVi: 'Tàu điện hiện đại thành phố.', emoji: '🚆', partOfSpeech: 'noun' },
    { id: 'wp-g5-2', targetWord: 'SOLAR', hintEn: 'Energy harnessed from sunlight.', hintVi: 'Năng lượng từ ánh sáng mặt trời.', emoji: '☀️', partOfSpeech: 'adjective' }
  ]
};

// GAME 5: SENTENCE BUILDER
export const SENTENCE_BUILDER_BANK: Record<GradeNumber, SentenceBuilderItem[]> = {
  1: [
    {
      id: 'sb-g1-1',
      scrambledWords: ['Look', 'the', 'at', 'sea!'],
      correctSentence: 'Look at the sea!',
      meaningVi: 'Hãy nhìn ra biển cả kìa!',
      hintEn: 'Start with the verb "Look".'
    },
    {
      id: 'sb-g1-2',
      scrambledWords: ['It', 'green.', 'is', 'big', 'and'],
      correctSentence: 'It is big and green.',
      meaningVi: 'Nó thật to lớn và xanh ngắt.',
      hintEn: 'Subject is "It".'
    }
  ],
  2: [
    {
      id: 'sb-g2-1',
      scrambledWords: ['I', 'warm', 'phở.', 'like'],
      correctSentence: 'I like warm phở.',
      meaningVi: 'Tôi thích một tô phở nóng.',
      hintEn: 'Express your preference with "I like".'
    },
    {
      id: 'sb-g2-2',
      scrambledWords: ['The', 'delicious.', 'smells', 'soup'],
      correctSentence: 'The soup smells delicious.',
      meaningVi: 'Tô súp này tỏa hương thật thơm.',
      hintEn: 'Start with "The soup".'
    }
  ],
  3: [
    {
      id: 'sb-g3-1',
      scrambledWords: ['Children', 'lanterns.', 'star', 'carry'],
      correctSentence: 'Children carry star lanterns.',
      meaningVi: 'Các bạn nhỏ rước đèn ông sao.',
      hintEn: 'Who carries what?'
    },
    {
      id: 'sb-g3-2',
      scrambledWords: ['The', 'moon', 'full', 'shines', 'brightly.'],
      correctSentence: 'The full moon shines brightly.',
      meaningVi: 'Trăng tròn tỏa sáng rực rỡ.',
      hintEn: 'What shines in the sky?'
    }
  ],
  4: [
    {
      id: 'sb-g4-1',
      scrambledWords: ['We', 'protect', 'the', 'should', 'rainforest.'],
      correctSentence: 'We should protect the rainforest.',
      meaningVi: 'Chúng ta nên bảo vệ rừng nguyên sinh.',
      hintEn: 'Modal verb "should" follows the subject.'
    },
    {
      id: 'sb-g4-2',
      scrambledWords: ['Douc', 'live', 'canopy.', 'the', 'langurs', 'in'],
      correctSentence: 'Douc langurs live in the canopy.',
      meaningVi: 'Những chú voọc sinh sống trên tán rừng.',
      hintEn: 'Subject is "Douc langurs".'
    }
  ],
  5: [
    {
      id: 'sb-g5-1',
      scrambledWords: ['Electric', 'buses', 'keep', 'clean.', 'our', 'city'],
      correctSentence: 'Electric buses keep our city clean.',
      meaningVi: 'Xe buýt điện giúp giữ cho thành phố sạch đẹp.',
      hintEn: 'Start with "Electric buses".'
    },
    {
      id: 'sb-g5-2',
      scrambledWords: ['Solar', 'panels', 'provide', 'clean', 'energy.'],
      correctSentence: 'Solar panels provide clean energy.',
      meaningVi: 'Những tấm pin mặt trời cung cấp nguồn năng lượng sạch.',
      hintEn: 'What provides clean energy?'
    }
  ]
};

// GAME 6: MULTIPLE CHOICE QUIZ (CIRCULAR 27 LEVELS 1, 2, 3)
export const MULTIPLE_CHOICE_BANK: Record<GradeNumber, MultipleChoiceItem[]> = {
  1: [
    {
      id: 'mc-g1-1',
      level: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'What is a vehicle that sails across Ha Long Bay?',
      questionVi: 'Phương tiện nào di chuyển trên mặt nước ở Vịnh Hạ Long?',
      options: ['Boat', 'Train', 'Airplane', 'Motorbike'],
      correctIndex: 0,
      explanationEn: 'A wooden boat sails across the emerald waters of Ha Long Bay.',
      explanationVi: '"Boat" là con thuyền buồm lướt trên mặt nước biển.',
      starsAwarded: 5
    },
    {
      id: 'mc-g1-2',
      level: 2,
      levelNameEn: 'Connect',
      levelNameVi: 'Kết nối',
      questionEn: 'The sea in Ha Long is calm and...',
      questionVi: 'Nước biển ở Vịnh Hạ Long êm đềm và có màu...',
      options: ['Green', 'Black', 'Red', 'Snow white'],
      correctIndex: 0,
      explanationEn: 'The story says the sea water is emerald green.',
      explanationVi: 'Bài học mô tả nước biển màu xanh ngọc (green).',
      starsAwarded: 10
    },
    {
      id: 'mc-g1-3',
      level: 3,
      levelNameEn: 'Apply',
      levelNameVi: 'Vận dụng',
      questionEn: 'You see a friendly monkey in the tree. What do you say to Captain Trang?',
      questionVi: 'Em nhìn thấy một chú khỉ trên cây. Em nói gì với cô Trang bằng tiếng Anh?',
      options: ['Look at the monkey! It is cute.', 'Goodbye teacher!', 'I am hungry.', 'Close the book.'],
      correctIndex: 0,
      explanationEn: 'Use the observation pattern: "Look at the [noun]! It is [adjective]."',
      explanationVi: 'Dùng mẫu câu quan sát: "Look at the monkey! It is cute."',
      starsAwarded: 15
    }
  ],
  2: [
    {
      id: 'mc-g2-1',
      level: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'What ingredient gives phở soup a fresh, sour taste?',
      questionVi: 'Nguyên liệu nào tạo vị chua thanh thơm ngon cho tô phở?',
      options: ['Lemon', 'Sugar', 'Chili candy', 'Butter'],
      correctIndex: 0,
      explanationEn: 'Lemon juice is squeezed into phở for a delicious fresh taste.',
      explanationVi: 'Chanh tươi (lemon) tạo vị chua thanh mát cho bát phở.',
      starsAwarded: 5
    },
    {
      id: 'mc-g2-2',
      level: 2,
      levelNameEn: 'Connect',
      levelNameVi: 'Kết nối',
      questionEn: 'Why do people in Hanoi enjoy phở in the morning?',
      questionVi: 'Vì sao mọi người ở Hà Nội thích ăn phở vào buổi sáng?',
      options: ['Because it is warm, nutritious, and fragrant', 'Because it is freezing cold like ice', 'Because it is too salty', 'Because it is blue'],
      correctIndex: 0,
      explanationEn: 'Phở is a warm, nutritious, and comforting traditional breakfast.',
      explanationVi: 'Phở là món ăn sáng ấm nóng, bổ dưỡng và dậy mùi thơm thảo mộc.',
      starsAwarded: 10
    },
    {
      id: 'mc-g2-3',
      level: 3,
      levelNameEn: 'Apply',
      levelNameVi: 'Vận dụng',
      questionEn: 'How do you politely order noodles in an English-speaking restaurant?',
      questionVi: 'Làm sao để gọi món mì/phở một cách lịch sự bằng tiếng Anh?',
      options: ['A bowl of noodles, please.', 'Give me food right now!', 'No, I don’t like it.', 'Where is my ball?'],
      correctIndex: 0,
      explanationEn: 'Always say "..., please" for polite dining requests.',
      explanationVi: 'Dùng cấu trúc lịch sự: "A bowl of noodles, please."',
      starsAwarded: 15
    }
  ],
  3: [
    {
      id: 'mc-g3-1',
      level: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'When is the Mid-Autumn Moon Festival celebrated?',
      questionVi: 'Tết Trung Thu được tổ chức vào thời điểm nào?',
      options: ['On the 15th day of the 8th lunar month', 'In the middle of snowy winter', 'On Monday morning', 'During summer vacation'],
      correctIndex: 0,
      explanationEn: 'It takes place on the full moon night of the 8th lunar month.',
      explanationVi: 'Tết Trung Thu diễn ra vào đêm rằm tháng 8 âm lịch hàng năm.',
      starsAwarded: 5
    },
    {
      id: 'mc-g3-2',
      level: 2,
      levelNameEn: 'Connect',
      levelNameVi: 'Kết nối',
      questionEn: 'What legendary character is said to live on the moon in Vietnamese folklore?',
      questionVi: 'Nhân vật cổ tích nào gắn liền với cung trăng trong văn hóa Việt Nam?',
      options: ['Moon Lady (Chị Hằng) and Cuội', 'A golden robot', 'An astronaut from Mars', 'A pirate captain'],
      correctIndex: 0,
      explanationEn: 'Chị Hằng and Chú Cuội are the beloved folklore figures of the moon.',
      explanationVi: 'Chị Hằng và Chú Cuội ngồi gốc cây đa là tích truyện cổ tích quen thuộc.',
      starsAwarded: 10
    },
    {
      id: 'mc-g3-3',
      level: 3,
      levelNameEn: 'Apply',
      levelNameVi: 'Vận dụng',
      questionEn: 'Your foreign penpal asks what children do at Mid-Autumn. What do you explain?',
      questionVi: 'Bạn bè quốc tế hỏi các bạn nhỏ làm gì trong Tết Trung Thu. Em trả lời ra sao?',
      options: ['We carry star lanterns and share mooncakes with family.', 'We sleep all day and night.', 'We paint snowmen.', 'We ride skateboards to school.'],
      correctIndex: 0,
      explanationEn: 'Carrying star lanterns and sharing mooncakes are iconic traditions.',
      explanationVi: 'Rước đèn ông sao và phá cỗ bánh trung thu là nét đẹp truyền thống.',
      starsAwarded: 15
    }
  ],
  4: [
    {
      id: 'mc-g4-1',
      level: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'What is a stalactite?',
      questionVi: 'Khối thạch nhũ (stalactite) là gì?',
      options: ['A rock formation hanging from a cave ceiling', 'A wild forest fruit', 'A type of wooden boat', 'A kind of bamboo lantern'],
      correctIndex: 0,
      explanationEn: 'Stalactites hang like icicles from the roofs of limestone caves.',
      explanationVi: 'Thạch nhũ rủ từ vòm trần hang động đá vôi qua hàng vạn năm.',
      starsAwarded: 5
    },
    {
      id: 'mc-g4-2',
      level: 2,
      levelNameEn: 'Connect',
      levelNameVi: 'Kết nối',
      questionEn: 'Why is the red-shanked douc langur considered an endangered species?',
      questionVi: 'Vì sao loài voọc chà vá chân nâu lại là loài động vật quý hiếm cần được bảo tồn?',
      options: ['Because habitat loss and poaching threaten their small population', 'Because they can fly to other planets', 'Because they live in busy supermarkets', 'Because they are very noisy'],
      correctIndex: 0,
      explanationEn: 'Habitat destruction and hunting put their survival at risk.',
      explanationVi: 'Do diện tích rừng thu hẹp và nạn săn bắt đe dọa số lượng của chúng.',
      starsAwarded: 10
    },
    {
      id: 'mc-g4-3',
      level: 3,
      levelNameEn: 'Apply',
      levelNameVi: 'Vận dụng',
      questionEn: 'What is an effective way primary students can help protect national parks?',
      questionVi: 'Cách thiết thực học sinh tiểu học có thể làm để bảo vệ các vườn quốc gia?',
      options: ['Do not litter and raise awareness about wildlife protection.', 'Pick rare wild flowers to bring home.', 'Make loud noises to scare the animals.', 'Cut small branches for fun.'],
      correctIndex: 0,
      explanationEn: 'Never litter and advocate for wildlife conservation.',
      explanationVi: 'Không xả rác và cùng lan tỏa tình yêu bảo vệ động thực vật hoang dã.',
      starsAwarded: 15
    }
  ],
  5: [
    {
      id: 'mc-g5-1',
      level: 1,
      levelNameEn: 'Recognize',
      levelNameVi: 'Nhận biết',
      questionEn: 'What is an electric metro railway?',
      questionVi: 'Tàu điện đô thị (electric metro) là phương tiện giao thông như thế nào?',
      options: ['A zero-emission urban railway powered by electricity', 'A horse carriage', 'A diesel boat', 'A hot air balloon'],
      correctIndex: 0,
      explanationEn: 'An electric metro runs on clean electricity with no tailpipe emissions.',
      explanationVi: 'Tàu điện ngầm/trên cao chạy bằng năng lượng điện, không gây khói thải.',
      starsAwarded: 5
    },
    {
      id: 'mc-g5-2',
      level: 2,
      levelNameEn: 'Connect',
      levelNameVi: 'Kết nối',
      questionEn: 'How do rooftop solar panels contribute to sustainable development in Vietnam?',
      questionVi: 'Pin năng lượng mặt trời trên mái nhà đóng góp gì cho sự phát triển bền vững ở Việt Nam?',
      options: ['They generate clean green electricity from abundant sunshine without pollution', 'They make buildings heavier', 'They attract more rain', 'They make the sky dark'],
      correctIndex: 0,
      explanationEn: 'Solar panels harness renewable sunlight without emitting greenhouse gases.',
      explanationVi: 'Tận dụng nguồn ánh nắng nhiệt đới dồi dào để sản xuất điện sạch không ô nhiễm.',
      starsAwarded: 10
    },
    {
      id: 'mc-g5-3',
      level: 3,
      levelNameEn: 'Apply',
      levelNameVi: 'Vận dụng',
      questionEn: 'You are presenting at the Youth STEM Conference. What sentence best describes your dream city?',
      questionVi: 'Em thuyết trình tại hội nghị khoa học trẻ. Câu nào diễn đạt xuất sắc nhất về thành phố trong mơ?',
      options: [
        'Our smart city combines clean solar energy, electric metros, and green parks for all citizens.',
        'I do not care about pollution.',
        'Cities should have more dirty smoke and cars.',
        'We should stop using electricity.'
      ],
      correctIndex: 0,
      explanationEn: 'Combining renewable energy, clean transit, and green spaces represents smart sustainability.',
      explanationVi: 'Kết hợp năng lượng sạch, giao thông điện và không gian xanh là tầm nhìn đô thị thông minh chuẩn mực.',
      starsAwarded: 15
    }
  ]
};

// GAME 7: ADVENTURE CHALLENGE (MULTI-ROUND SPRINT)
export const ADVENTURE_CHALLENGE_BANK: Record<GradeNumber, AdventureChallengeStage[]> = {
  1: [
    {
      stageNumber: 1,
      stageNameEn: 'Speedy Sea Word',
      stageNameVi: 'Truy Tìm Từ Biển Cả',
      type: 'listen_pick',
      promptEn: 'Listen to Captain Trang: "Look at the wooden boat sailing by!" What did she say?',
      promptVi: 'Lắng nghe cô Trang nói và chọn đồ vật cô vừa nhắc tới!',
      options: ['Boat ⛵', 'Car 🚗', 'House 🏠'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 10
    },
    {
      stageNumber: 2,
      stageNameEn: 'Animal Safari Sprint',
      stageNameVi: 'Bắt Trọn Bạn Khỉ Tinh Nghịch',
      type: 'word_rush',
      promptEn: 'Spell the 3-letter word for the salty blue water: S - _ - A',
      promptVi: 'Điền chữ cái còn thiếu trong từ SEA: S - _ - A',
      options: ['E', 'O', 'U'],
      correctAnswer: 0,
      timerSeconds: 12,
      bonusStars: 15
    },
    {
      stageNumber: 3,
      stageNameEn: 'Island Explorer Riddle',
      stageNameVi: 'Câu Đố Hòn Đảo Xanh',
      type: 'listen_pick',
      promptEn: 'I am green land completely surrounded by emerald sea water. What am I?',
      promptVi: 'Tôi là vùng đất xanh ngát nằm giữa biển ngọc bao la. Tôi là gì?',
      options: ['An Island 🏝️', 'A Cloud ☁️', 'A Motorcycle 🛵'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 20
    }
  ],
  2: [
    {
      stageNumber: 1,
      stageNameEn: 'Breakfast Chef Speed Run',
      stageNameVi: 'Đầu Bếp Nhí Siêu Tốc',
      type: 'listen_pick',
      promptEn: 'Listen: "Squeeze fresh lemon into the beef phở!" Which fruit was mentioned?',
      promptVi: 'Loại quả nào vừa được nhắc tới để vắt vào phở?',
      options: ['Lemon 🍋', 'Watermelon 🍉', 'Apple 🍎'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 10
    },
    {
      stageNumber: 2,
      stageNameEn: 'Food Scramble Rush',
      stageNameVi: 'Xếp Chữ Súp Phở',
      type: 'word_rush',
      promptEn: 'Spell the 4-letter word for hot liquid food: S - _ - U - P',
      promptVi: 'Điền chữ cái còn thiếu trong từ SOUP: S - _ - U - P',
      options: ['O', 'A', 'I'],
      correctAnswer: 0,
      timerSeconds: 12,
      bonusStars: 15
    },
    {
      stageNumber: 3,
      stageNameEn: 'Backpack Riddle',
      stageNameVi: 'Câu Đố Ba Lô Thần Kỳ',
      type: 'listen_pick',
      promptEn: 'I am made of long white rice strips and cooked in delicious hot broth. What am I?',
      promptVi: 'Tôi được làm từ hạt gạo dẻo thơm, chan ngập nước dùng thơm ngọt. Tôi là món gì?',
      options: ['Noodles 🍜', 'Candy 🍬', 'Bread 🍞'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 20
    }
  ],
  3: [
    {
      stageNumber: 1,
      stageNameEn: 'Moon Festival Parade',
      stageNameVi: 'Hành Trình Rước Đèn Đêm Trăng',
      type: 'listen_pick',
      promptEn: 'Which golden shape shines in the sky on the 15th night of the eighth lunar month?',
      promptVi: 'Hình ảnh nào tỏa sáng trên bầu trời đêm rằm tháng 8?',
      options: ['The Full Moon 🌕', 'The Sunrise 🌅', 'A Storm Cloud ⛈️'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 15
    },
    {
      stageNumber: 2,
      stageNameEn: 'Lantern Spelling Challenge',
      stageNameVi: 'Thử Thách Đánh Vần Đèn Lồng',
      type: 'word_rush',
      promptEn: 'Complete the word: M - O - O - N - _ - A - K - E',
      promptVi: 'Điền chữ cái còn thiếu: MOON_AKE',
      options: ['C', 'K', 'T'],
      correctAnswer: 0,
      timerSeconds: 12,
      bonusStars: 15
    },
    {
      stageNumber: 3,
      stageNameEn: 'Golden Adventure Crown Riddle',
      stageNameVi: 'Câu Đố Vương Miện Vàng',
      type: 'listen_pick',
      promptEn: 'What traditional pastry is filled with lotus seeds and shared with family?',
      promptVi: 'Bánh truyền thống nhân hạt sen thơm bùi được chia sẻ cùng gia đình là bánh gì?',
      options: ['Mooncake 🥮', 'Hamburger 🍔', 'Donut 🍩'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 25
    }
  ],
  4: [
    {
      stageNumber: 1,
      stageNameEn: 'Cave Echo Sprint',
      stageNameVi: 'Tiếng Vang Hang Động',
      type: 'listen_pick',
      promptEn: 'What geological formation hangs like an icicle from a cave ceiling?',
      promptVi: 'Khối địa chất nào rủ từ vòm hang đá vôi tựa cột băng?',
      options: ['Stalactite 🪨', 'Volcano 🌋', 'Ocean Coral 🪸'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 15
    },
    {
      stageNumber: 2,
      stageNameEn: 'Rainforest Canopy Rush',
      stageNameVi: 'Tốc Biến Tầng Tán Rừng',
      type: 'word_rush',
      promptEn: 'What does the word "PROTECT" mean in Vietnamese?',
      promptVi: 'Từ "PROTECT" có nghĩa là gì trong tiếng Việt?',
      options: ['Bảo vệ 🛡️', 'Chạy nhanh 🏃', 'Phá hủy 💥'],
      correctAnswer: 0,
      timerSeconds: 12,
      bonusStars: 15
    },
    {
      stageNumber: 3,
      stageNameEn: 'Discovery Commander Mission',
      stageNameVi: 'Nhiệm Vụ Chỉ Huy Tên Lửa',
      type: 'listen_pick',
      promptEn: 'Why do douc langurs have five colors on their fur coat?',
      promptVi: 'Điểm đặc biệt nhất về ngoại hình của voọc chà vá chân nâu là gì?',
      options: ['They are celebrated as the queen of primates with 5 vibrant colors 🐒', 'They are completely white ⚪', 'They have scales like fish 🐟'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 25
    }
  ],
  5: [
    {
      stageNumber: 1,
      stageNameEn: 'Smart Grid Rapid Fire',
      stageNameVi: 'Mạng Điện Thông Minh Tốc Độ Cao',
      type: 'listen_pick',
      promptEn: 'Which clean transport runs smoothly on elevated tracks with zero emissions?',
      promptVi: 'Phương tiện công cộng xanh nào chạy êm ái trên đường ray trên cao không phát thải?',
      options: ['Electric Metro 🚆', 'Steam Train 🚂', 'Heavy Truck 🚛'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 15
    },
    {
      stageNumber: 2,
      stageNameEn: 'Clean Energy Coding',
      stageNameVi: 'Giải Mã Năng Lượng Sạch',
      type: 'word_rush',
      promptEn: 'Which word means "using resources without destroying them for future generations"?',
      promptVi: 'Thuật ngữ nào mang nghĩa phát triển mà không làm cạn kiệt tài nguyên cho thế hệ mai sau?',
      options: ['Sustainable 🌱', 'Dangerous ⚠️', 'Temporary ⏳'],
      correctAnswer: 0,
      timerSeconds: 12,
      bonusStars: 20
    },
    {
      stageNumber: 3,
      stageNameEn: 'National Champion Final Stage',
      stageNameVi: 'Chặng Chung Kết Quán Quân Toàn Quốc',
      type: 'listen_pick',
      promptEn: 'What powers clean electric buses in modern eco-smart cities?',
      promptVi: 'Nguồn năng lượng nào vận hành xe buýt điện trong thành phố thông minh?',
      options: ['Renewable Solar and Battery Power ☀️🔋', 'Black Coal Dust 🪨', 'Kerosene Smoke 🛢️'],
      correctAnswer: 0,
      timerSeconds: 15,
      bonusStars: 30
    }
  ]
};

// ------------------------------------------------------------------------------
// 4. ACHIEVEMENT BADGES BY GRADE
// ------------------------------------------------------------------------------
export const GRADE_BADGES: Record<GradeNumber, GradeBadge[]> = {
  1: [
    { id: 'b1-starter', titleEn: 'First Footprint', titleVi: 'Dấu Chân Đầu Tiên', descriptionEn: 'Completed your very first English lesson!', descriptionVi: 'Hoàn thành bài học tiếng Anh đầu tiên!', icon: '👣', criteria: 'Complete 1 lesson', starsValue: 20 },
    { id: 'b1-sea', titleEn: 'Ha Long Sailor', titleVi: 'Thủy Thủ Vịnh Hạ Long', descriptionEn: 'Mastered sea, boat, island, and cave words.', descriptionVi: 'Làm chủ 4 từ vựng biển đảo kỳ quan.', icon: '🌊', criteria: 'Pass Sea lesson quiz', starsValue: 25 },
    { id: 'b1-match', titleEn: 'Picture Detective', titleVi: 'Thám Tử Hình Ảnh', descriptionEn: 'Matched 6 pairs with 100% accuracy.', descriptionVi: 'Nối đúng 6 cặp hình ảnh không sai sót.', icon: '🔍', criteria: 'Win Match the Pairs', starsValue: 30 },
    { id: 'b1-word', titleEn: 'Spelling Beetle', titleVi: 'Chú Bọ Đánh Vần', descriptionEn: 'Solved all 3 letter puzzles.', descriptionVi: 'Xếp đúng tất cả các khối chữ cái.', icon: '🔤', criteria: 'Finish Word Puzzle', starsValue: 35 },
    { id: 'b1-champ', titleEn: 'Little Explorer Star', titleVi: 'Ngôi Sao Thám Hiểm Nhí', descriptionEn: 'Accumulated over 150 stars in Grade 1.', descriptionVi: 'Thu thập trên 150 ngôi sao Lớp 1.', icon: '🌟', criteria: 'Earn 150 stars', starsValue: 50 }
  ],
  2: [
    { id: 'b2-gourmet', titleEn: 'Hanoi Foodie', titleVi: 'Thực Khách Hà Nội', descriptionEn: 'Learned all ingredients for beef phở.', descriptionVi: 'Thuộc tất cả từ vựng nguyên liệu phở.', icon: '🍜', criteria: 'Complete Food lesson', starsValue: 25 },
    { id: 'b2-backpack', titleEn: 'Neat Backpack', titleVi: 'Ba Lô Gọn Gàng', descriptionEn: 'Sorted all classroom school supplies.', descriptionVi: 'Phân loại đồ dùng học tập chính xác.', icon: '🎒', criteria: 'Complete Drag and Drop', starsValue: 30 },
    { id: 'b2-builder', titleEn: 'Sentence Maker', titleVi: 'Kiến Trúc Sư Câu', descriptionEn: 'Built 2 complete sentences without errors.', descriptionVi: 'Tạo 2 câu tiếng Anh hoàn chỉnh.', icon: '🧩', criteria: 'Win Sentence Builder', starsValue: 35 },
    { id: 'b2-ear', titleEn: 'Golden Ear', titleVi: 'Đôi Tai Vàng', descriptionEn: 'Aced the Listen and Choose challenge.', descriptionVi: 'Đạt điểm tối đa phần Luyện nghe.', icon: '🎧', criteria: 'Pass Listening game', starsValue: 40 },
    { id: 'b2-champ', titleEn: 'Magical Backpack Master', titleVi: 'Bậc Thầy Ba Lô Diệu Kỳ', descriptionEn: 'Achieved 200 stars in Grade 2.', descriptionVi: 'Đạt trên 200 sao tại khối Lớp 2.', icon: '🏆', criteria: 'Earn 200 stars', starsValue: 55 }
  ],
  3: [
    { id: 'b3-lantern', titleEn: 'Lantern Bearer', titleVi: 'Người Rước Đèn Đêm Trăng', descriptionEn: 'Celebrated the Mid-Autumn Festival lesson.', descriptionVi: 'Hoàn thành chặng Lễ hội Trung Thu.', icon: '🏮', criteria: 'Complete Mid-Autumn lesson', starsValue: 30 },
    { id: 'b3-culture', titleEn: 'Heritage Explorer', titleVi: 'Sứ Giả Di Sản', descriptionEn: 'Answered all cultural quiz questions.', descriptionVi: 'Vượt qua bài trắc nghiệm văn hóa.', icon: '🏯', criteria: 'Score 100% on Grade 3 Quiz', starsValue: 35 },
    { id: 'b3-words', titleEn: 'Word Alchemist', titleVi: 'Phù Thủy Chữ Cái', descriptionEn: 'Solved the Mooncake letter puzzle.', descriptionVi: 'Giải mã thành công ô chữ bánh trung thu.', icon: '✨', criteria: 'Win Word Puzzle', starsValue: 40 },
    { id: 'b3-sprint', titleEn: 'Festival Sprinter', titleVi: 'Vận Động Viên Đêm Hội', descriptionEn: 'Completed all 3 rounds of the Adventure Challenge.', descriptionVi: 'Chinh phục cả 3 vòng Thử thách Phiêu lưu.', icon: '⚡', criteria: 'Win Adventure Challenge', starsValue: 45 },
    { id: 'b3-crown', titleEn: 'Golden Adventure Crown', titleVi: 'Vương Miện Vàng Lớp 3', descriptionEn: 'Earned 250 stars and crowned Grade 3 champion!', descriptionVi: 'Đạt trên 250 sao và đội Vương miện Vàng!', icon: '👑', criteria: 'Earn 250 stars', starsValue: 65 }
  ],
  4: [
    { id: 'b4-caver', titleEn: 'Cave Speleologist', titleVi: 'Nhà Thám Hiểm Hang Động', descriptionEn: 'Discovered the secrets of Phong Nha karst.', descriptionVi: 'Khám phá địa chất hang động Phong Nha.', icon: '🪨', criteria: 'Complete Cave lesson', starsValue: 35 },
    { id: 'b4-ranger', titleEn: 'Rainforest Guardian', titleVi: 'Người Giữ Rừng Xanh', descriptionEn: 'Mastered environmental protection vocabulary.', descriptionVi: 'Thuộc từ vựng bảo tồn thiên nhiên.', icon: '🌿', criteria: 'Pass Eco Drag and Drop', starsValue: 40 },
    { id: 'b4-grammar', titleEn: 'Syntax Engineer', titleVi: 'Kỹ Sư Cú Pháp', descriptionEn: 'Constructed advanced complex sentences.', descriptionVi: 'Ghép câu ghép nâng cao chính xác.', icon: '🧱', criteria: 'Win Sentence Builder', starsValue: 45 },
    { id: 'b4-douc', titleEn: 'Protector of the Douc', titleVi: 'Hiệp Sĩ Voọc Chà Vá', descriptionEn: 'Aced the endangered wildlife quiz.', descriptionVi: 'Đạt điểm tuyệt đối bài thi động vật hoang dã.', icon: '🐒', criteria: 'Pass Level 3 Quiz Question', starsValue: 50 },
    { id: 'b4-rocket', titleEn: 'Discovery Rocket Commander', titleVi: 'Chỉ Huy Tên Lửa Thám Hiểm', descriptionEn: 'Earned 300 stars in Grade 4.', descriptionVi: 'Đạt mốc 300 sao Lớp 4 rực rỡ.', icon: '🚀', criteria: 'Earn 300 stars', starsValue: 70 }
  ],
  5: [
    { id: 'b5-metro', titleEn: 'Metro Navigator', titleVi: 'Thuyền Trưởng Tàu Điện Metro', descriptionEn: 'Learned modern transit and urban vocabulary.', descriptionVi: 'Làm chủ từ vựng giao thông đô thị xanh.', icon: '🚆', criteria: 'Complete Smart City lesson', starsValue: 40 },
    { id: 'b5-green', titleEn: 'Solar Architect', titleVi: 'Kiến Trúc Sư Năng Lượng Sạch', descriptionEn: 'Categorized future green technologies.', descriptionVi: 'Phân loại công nghệ xanh và phát thải.', icon: '☀️', criteria: 'Win Tech Drag and Drop', starsValue: 45 },
    { id: 'b5-speaker', titleEn: 'Orator Champion', titleVi: 'Nhà Thuyết Trình Quán Quân', descriptionEn: 'Practiced speaking about the 2030 smart city.', descriptionVi: 'Luyện nói và thu âm bài thuyết trình.', icon: '🎙️', criteria: 'Practice Speaking mission', starsValue: 50 },
    { id: 'b5-stem', titleEn: 'STEM Pioneer', titleVi: 'Nhà Đổi Mới Sáng Tạo', descriptionEn: 'Completed the multi-round Adventure Sprint.', descriptionVi: 'Vượt qua chặng đua tốc độ thử thách.', icon: '💡', criteria: 'Win Adventure Challenge', starsValue: 60 },
    { id: 'b5-trophy', titleEn: 'Primary English Champion Trophy', titleVi: 'Cúp Quán Quân Tiếng Anh Tiểu Học', descriptionEn: 'Surpassed 400 stars and graduated primary champion!', descriptionVi: 'Đạt trên 400 sao và chạm tay vào Cúp Vàng!', icon: '🏆', criteria: 'Earn 400 stars', starsValue: 100 }
  ]
};

// ------------------------------------------------------------------------------
// 5. LEARNING CHALLENGES (DAILY & WEEKLY MISSIONS) BY GRADE
// ------------------------------------------------------------------------------
export const GRADE_CHALLENGES: Record<GradeNumber, GradeChallenge[]> = {
  1: [
    { id: 'ch-g1-1', titleEn: 'Learn 4 Sea Words', titleVi: 'Học 4 Từ Vựng Biển Cả', rewardStars: 20, icon: '🌊', targetCount: 4, unit: 'words', activityType: 'lesson' },
    { id: 'ch-g1-2', titleEn: 'Win Match the Pairs', titleVi: 'Chiến Thắng Nối Cặp Hình', rewardStars: 25, icon: '🃏', targetCount: 1, unit: 'game', activityType: 'game' },
    { id: 'ch-g1-3', titleEn: 'Listen to Captain Trang', titleVi: 'Lắng Nghe Giọng Cô Trang', rewardStars: 15, icon: '🎧', targetCount: 2, unit: 'audios', activityType: 'listening' },
    { id: 'ch-g1-4', titleEn: 'Pass the Star Quiz', titleVi: 'Vượt Qua Bài Trắc Nghiệm', rewardStars: 30, icon: '⭐', targetCount: 3, unit: 'questions', activityType: 'quiz' }
  ],
  2: [
    { id: 'ch-g2-1', titleEn: 'Order Phở in English', titleVi: 'Gọi Món Phở Bằng Tiếng Anh', rewardStars: 25, icon: '🍜', targetCount: 1, unit: 'dialogue', activityType: 'lesson' },
    { id: 'ch-g2-2', titleEn: 'Sort School Supplies', titleVi: 'Phân Loại Đồ Dùng Học Tập', rewardStars: 30, icon: '🎒', targetCount: 1, unit: 'game', activityType: 'game' },
    { id: 'ch-g2-3', titleEn: 'Assemble 2 Sentences', titleVi: 'Xếp 2 Câu Hoàn Chỉnh', rewardStars: 30, icon: '🧩', targetCount: 2, unit: 'sentences', activityType: 'game' },
    { id: 'ch-g2-4', titleEn: 'Complete Food Quiz', titleVi: 'Hoàn Thành Trắc Nghiệm Ẩm Thực', rewardStars: 35, icon: '🥣', targetCount: 3, unit: 'questions', activityType: 'quiz' }
  ],
  3: [
    { id: 'ch-g3-1', titleEn: 'Explore Mid-Autumn Traditions', titleVi: 'Khám Phá Phong Tục Trung Thu', rewardStars: 30, icon: '🏮', targetCount: 1, unit: 'lesson', activityType: 'lesson' },
    { id: 'ch-g3-2', titleEn: 'Solve the Moon Letter Puzzle', titleVi: 'Giải Ô Chữ Vầng Trăng', rewardStars: 35, icon: '🔤', targetCount: 1, unit: 'puzzle', activityType: 'game' },
    { id: 'ch-g3-3', titleEn: 'Match Cultural Dialogues', titleVi: 'Nối Cặp Hội Thoại Văn Hóa', rewardStars: 35, icon: '💬', targetCount: 1, unit: 'pairs', activityType: 'game' },
    { id: 'ch-g3-4', titleEn: 'Win the Golden Crown Sprint', titleVi: 'Chinh Phục Thử Thách Vương Miện', rewardStars: 50, icon: '👑', targetCount: 3, unit: 'stages', activityType: 'quiz' }
  ],
  4: [
    { id: 'ch-g4-1', titleEn: 'Investigate Phong Nha Karst', titleVi: 'Nghiên Cứu Hang Karst Phong Nha', rewardStars: 35, icon: '🪨', targetCount: 1, unit: 'lesson', activityType: 'lesson' },
    { id: 'ch-g4-2', titleEn: 'Eco-Sort Wildlife & Caves', titleVi: 'Phân Loại Sinh Thái & Địa Chất', rewardStars: 40, icon: '🌿', targetCount: 1, unit: 'game', activityType: 'game' },
    { id: 'ch-g4-3', titleEn: 'Construct 2 Complex Sentences', titleVi: 'Xây Dựng 2 Câu Ghép Môi Trường', rewardStars: 45, icon: '🧱', targetCount: 2, unit: 'sentences', activityType: 'game' },
    { id: 'ch-g4-4', titleEn: 'Score 100% on Ranger Challenge', titleVi: 'Đạt Điểm Tối Đa Thử Thách Kiểm Lâm', rewardStars: 55, icon: '🚀', targetCount: 3, unit: 'questions', activityType: 'quiz' }
  ],
  5: [
    { id: 'ch-g5-1', titleEn: 'Study Hanoi & HCMC Metro', titleVi: 'Tìm Hiểu Metro Tuyến Xanh', rewardStars: 40, icon: '🚆', targetCount: 1, unit: 'lesson', activityType: 'lesson' },
    { id: 'ch-g5-2', titleEn: 'Categorize Clean Tech', titleVi: 'Phân Loại Công Nghệ Xanh', rewardStars: 45, icon: '☀️', targetCount: 1, unit: 'game', activityType: 'game' },
    { id: 'ch-g5-3', titleEn: 'Sprint the STEM Adventure', titleVi: 'Đua Tốc Độ Thử Thách Khoa Học', rewardStars: 60, icon: '💡', targetCount: 3, unit: 'stages', activityType: 'game' },
    { id: 'ch-g5-4', titleEn: 'Deliver Future City Speech', titleVi: 'Thuyết Trình Thành Phố Tương Lai', rewardStars: 70, icon: '🏆', targetCount: 1, unit: 'presentation', activityType: 'quiz' }
  ]
};
