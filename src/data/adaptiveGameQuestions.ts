// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — PREMIUM ADAPTIVE GAME QUESTION BANK
// 25 Grade-Differentiated Games across Grades 1–5 | 750 Verified Question Records
// Aligned with Global Success Curriculum, Circular 27/2020/TT-BGDDT & Vietnamese Cultural Heritage
// ==============================================================================

export type GradeNumber = 1 | 2 | 3 | 4 | 5;

export interface AdaptiveGameQuestion {
  questionId: string;
  grade: GradeNumber;
  gameType: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'challenge';
  prompt: string;
  promptVi?: string;
  answerOptions: string[];
  correctAnswer: string;
  explanation: string;
  explanationVi?: string;
  imageAsset?: string;
  audioPrompt?: string;
  curriculumReference: string;
  metadata?: Record<string, any>;
}

export interface GameMetadata {
  id: string;
  gradeNum: GradeNumber;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  icon: string;
  badge: string;
  color: string;
  mechanics: string;
}

export const GRADE_GAMES_CATALOG: Record<GradeNumber, GameMetadata[]> = {
  "1": [
    {
      "id": "picture_pop",
      "gradeNum": 1,
      "titleEn": "Picture Pop",
      "titleVi": "Bong Bóng Hình Ảnh",
      "descriptionEn": "Listen to the English word and pop the matching picture card!",
      "descriptionVi": "Lắng nghe từ vựng tiếng Anh và chạm làm nổ thẻ hình tương ứng!",
      "icon": "🎈",
      "badge": "Audio Phonics",
      "color": "from-sky-500 to-blue-600",
      "mechanics": "listen_tap_picture"
    },
    {
      "id": "animal_friends",
      "gradeNum": 1,
      "titleEn": "Animal Friends",
      "titleVi": "Những Người Bạn Động Vật",
      "descriptionEn": "Match cute animal friends with their funny sounds and English names.",
      "descriptionVi": "Ghép các bạn động vật đáng yêu với âm thanh và tên tiếng Anh.",
      "icon": "🐾",
      "badge": "Animals & Nature",
      "color": "from-emerald-500 to-teal-600",
      "mechanics": "sound_match_animal"
    },
    {
      "id": "color_magic",
      "gradeNum": 1,
      "titleEn": "Color Magic",
      "titleVi": "Sắc Màu Phép Thuật",
      "descriptionEn": "Wave your magic palette to identify vibrant colors and colorful objects.",
      "descriptionVi": "Vung cây cọ phép thuật nhận biết màu sắc và các đồ vật rực rỡ.",
      "icon": "🎨",
      "badge": "Visual Colors",
      "color": "from-pink-500 to-rose-600",
      "mechanics": "color_object_identification"
    },
    {
      "id": "sound_safari",
      "gradeNum": 1,
      "titleEn": "Sound Safari",
      "titleVi": "Thám Hiểm Âm Thanh",
      "descriptionEn": "Use your safari binoculars to discover what made the jungle sound!",
      "descriptionVi": "Dùng ống nhòm thám hiểm tìm xem âm thanh bí ẩn do ai phát ra!",
      "icon": "🦁",
      "badge": "Listening Safari",
      "color": "from-amber-500 to-orange-600",
      "mechanics": "safari_listening_clues"
    },
    {
      "id": "treasure_bubbles",
      "gradeNum": 1,
      "titleEn": "Treasure Bubbles",
      "titleVi": "Bong Bóng Kho Báu",
      "descriptionEn": "Pop floating bubbles to collect numbers, fruits, and treasure stars!",
      "descriptionVi": "Chạm nổ các bong bóng trôi nổi để thu thập số đếm và ngôi sao kho báu!",
      "icon": "🫧",
      "badge": "Action Pop",
      "color": "from-purple-500 to-indigo-600",
      "mechanics": "bubble_popping_action"
    }
  ],
  "2": [
    {
      "id": "memory_flip",
      "gradeNum": 2,
      "titleEn": "Memory Flip Cards",
      "titleVi": "Lật Thẻ Trí Nhớ",
      "descriptionEn": "Flip cards to reveal and pair classroom tools, clothes, and words.",
      "descriptionVi": "Lật mở các cặp thẻ ghép từ vựng dụng cụ học tập và trang phục.",
      "icon": "🃏",
      "badge": "Memory Pairing",
      "color": "from-blue-500 to-indigo-600",
      "mechanics": "3d_card_flip_memory"
    },
    {
      "id": "word_picture_match",
      "gradeNum": 2,
      "titleEn": "Word & Picture Match",
      "titleVi": "Nối Từ & Tranh",
      "descriptionEn": "Connect vocabulary labels to colorful illustrations in tactile slots.",
      "descriptionVi": "Nối từ vựng tiếng Anh với hình ảnh minh họa tương ứng.",
      "icon": "🔗",
      "badge": "Visual Association",
      "color": "from-teal-500 to-emerald-600",
      "mechanics": "slot_drag_matching"
    },
    {
      "id": "sentence_builder",
      "gradeNum": 2,
      "titleEn": "Magical Sentence Builder",
      "titleVi": "Xếp Câu Thần Kỳ",
      "descriptionEn": "Snap colorful syntax blocks into rails to form complete English sentences.",
      "descriptionVi": "Lắp ghép các khối từ vào đường ray để tạo thành câu hoàn chỉnh.",
      "icon": "🧩",
      "badge": "Syntax Rail",
      "color": "from-purple-500 to-pink-600",
      "mechanics": "word_block_sentence_rail"
    },
    {
      "id": "treasure_hunt",
      "gradeNum": 2,
      "titleEn": "Listening Treasure Hunt",
      "titleVi": "Truy Tìm Kho Báu Lắng Nghe",
      "descriptionEn": "Follow spoken audio clues to unlock hidden treasure chests.",
      "descriptionVi": "Lắng nghe các chỉ dẫn âm thanh để mở các rương báu bí mật.",
      "icon": "🗺️",
      "badge": "Audio Navigation",
      "color": "from-amber-500 to-yellow-600",
      "mechanics": "map_location_audio_clues"
    },
    {
      "id": "vocabulary_maze",
      "gradeNum": 2,
      "titleEn": "Vocabulary Maze",
      "titleVi": "Mê Cung Từ Vựng",
      "descriptionEn": "Navigate your explorer character through labyrinth gates by choosing words.",
      "descriptionVi": "Dẫn đường cho nhà thám hiểm vượt mê cung qua các cổng từ vựng.",
      "icon": "🌀",
      "badge": "Maze Labyrinth",
      "color": "from-rose-500 to-red-600",
      "mechanics": "2d_grid_maze_gates"
    }
  ],
  "3": [
    {
      "id": "landmark_drag_drop",
      "gradeNum": 3,
      "titleEn": "Vietnam Landmark Drag & Drop",
      "titleVi": "Kéo Thả Kỳ Quan Ba Miền",
      "descriptionEn": "Classify iconic national monuments into North, Central, and South regions.",
      "descriptionVi": "Phân loại các danh lam thắng cảnh tiêu biểu vào Miền Bắc, Miền Trung, Miền Nam.",
      "icon": "🏛️",
      "badge": "Regional Geography",
      "color": "from-sky-500 to-indigo-600",
      "mechanics": "regional_drop_zones"
    },
    {
      "id": "map_quest",
      "gradeNum": 3,
      "titleEn": "Interactive Vietnam Map Quest",
      "titleVi": "Hành Trình Bản Đồ Việt Nam",
      "descriptionEn": "Pinpoint provinces and heritage wonders on the interactive map.",
      "descriptionVi": "Khám phá và ghim vị trí các tỉnh thành, di sản trên bản đồ tương tác.",
      "icon": "📍",
      "badge": "Cartography Quest",
      "color": "from-emerald-500 to-teal-600",
      "mechanics": "interactive_svg_map_pins"
    },
    {
      "id": "sentence_puzzle",
      "gradeNum": 3,
      "titleEn": "Sentence Puzzle",
      "titleVi": "Mảnh Ghép Cú Pháp",
      "descriptionEn": "Piece together compound sentences and clauses with proper punctuation.",
      "descriptionVi": "Ghép các mảnh câu hoàn chỉnh với dấu câu và liên từ chuẩn xác.",
      "icon": "🧩",
      "badge": "Clause Puzzle",
      "color": "from-amber-500 to-orange-600",
      "mechanics": "clause_connector_puzzle"
    },
    {
      "id": "listening_detective",
      "gradeNum": 3,
      "titleEn": "Listening Detective",
      "titleVi": "Thám Tử Nhí Lắng Nghe",
      "descriptionEn": "Use your detective magnifying glass to solve audio riddles and clues.",
      "descriptionVi": "Dùng kính lúp thám tử phá giải các câu đố âm thanh bí mật.",
      "icon": "🔍",
      "badge": "Audio Riddles",
      "color": "from-indigo-600 to-purple-700",
      "mechanics": "detective_clue_investigation"
    },
    {
      "id": "cultural_quiz",
      "gradeNum": 3,
      "titleEn": "Cultural Discovery Quiz",
      "titleVi": "Đố Vui Văn Hóa & Lễ Hội",
      "descriptionEn": "Explore Mid-Autumn, Tet, and Vietnamese traditions in simple English.",
      "descriptionVi": "Tìm hiểu Tết Trung Thu, Tết cổ truyền và phong tục Việt Nam bằng tiếng Anh.",
      "icon": "🏮",
      "badge": "Heritage Quiz",
      "color": "from-rose-500 to-pink-600",
      "mechanics": "cultural_trivia_quiz"
    }
  ],
  "4": [
    {
      "id": "escape_room",
      "gradeNum": 4,
      "titleEn": "English Escape Room",
      "titleVi": "Phòng Thoát Hiểm Bí Mật",
      "descriptionEn": "Crack code doors and solve reading clues to successfully escape each room.",
      "descriptionVi": "Giải mã các ổ khóa và đọc gợi ý để thoát hiểm khỏi các căn phòng bí ẩn.",
      "icon": "🔐",
      "badge": "Escape Logic",
      "color": "from-indigo-600 to-blue-700",
      "mechanics": "multi_door_code_escape"
    },
    {
      "id": "word_decoder",
      "gradeNum": 4,
      "titleEn": "Mystery Word Decoder",
      "titleVi": "Giải Mã Mật Thư",
      "descriptionEn": "Unscramble secret letter ciphers and decode cultural definitions.",
      "descriptionVi": "Giải mật mã chữ cái và tìm từ khóa văn hóa bí mật.",
      "icon": "🔤",
      "badge": "Cipher Decoding",
      "color": "from-purple-600 to-indigo-700",
      "mechanics": "cipher_scramble_decoder"
    },
    {
      "id": "dialogue_builder",
      "gradeNum": 4,
      "titleEn": "Dialogue Builder",
      "titleVi": "Kiến Tạo Hội Thoại",
      "descriptionEn": "Arrange conversational chat bubbles in logical, natural sequence.",
      "descriptionVi": "Sắp xếp các bong bóng trò chuyện theo trình tự hội thoại tự nhiên.",
      "icon": "💬",
      "badge": "Chat Sequencing",
      "color": "from-teal-600 to-cyan-700",
      "mechanics": "conversational_bubble_sequencing"
    },
    {
      "id": "listening_mission",
      "gradeNum": 4,
      "titleEn": "Listening Mission",
      "titleVi": "Nhiệm Vụ Nghe Hiểu",
      "descriptionEn": "Listen to radio broadcasts, museum announcements, and complete checkpoints.",
      "descriptionVi": "Lắng nghe các thông báo phát thanh, hướng dẫn bảo tàng để vượt ải.",
      "icon": "🎧",
      "badge": "Radio Checkpoints",
      "color": "from-amber-500 to-rose-600",
      "mechanics": "audio_broadcast_checkpoint"
    },
    {
      "id": "culture_challenge",
      "gradeNum": 4,
      "titleEn": "Vietnam Culture Challenge",
      "titleVi": "Thử Thách Bản Sắc Dân Tộc",
      "descriptionEn": "Conquer advanced trivia cards celebrating Vietnamese art, craft, and nature.",
      "descriptionVi": "Chinh phục các thẻ bài văn hóa tôn vinh nghệ thuật và di sản dân tộc.",
      "icon": "🇻🇳",
      "badge": "Heritage Mastery",
      "color": "from-rose-600 to-red-700",
      "mechanics": "jeopardy_category_board"
    }
  ],
  "5": [
    {
      "id": "champion_quiz",
      "gradeNum": 5,
      "titleEn": "English Champion Quiz Show",
      "titleVi": "Đấu Trường Vô Địch Tiếng Anh",
      "descriptionEn": "TV stage quiz show with 50:50 lifelines, countdown timer, and star ladder.",
      "descriptionVi": "Trường quay Đấu trường Vô địch với quyền trợ giúp 50:50, đồng hồ đếm ngược.",
      "icon": "🏆",
      "badge": "Quiz Show Stage",
      "color": "from-amber-400 via-orange-500 to-rose-600",
      "mechanics": "tv_stage_lifelines_ladder"
    },
    {
      "id": "tour_guide",
      "gradeNum": 5,
      "titleEn": "Virtual Vietnam Tour Guide",
      "titleVi": "Hướng Dẫn Viên Du Lịch Nhí",
      "descriptionEn": "Guide international tourists with professional, courteous cultural answers.",
      "descriptionVi": "Hướng dẫn du khách quốc tế với những lời giải thích văn hóa chuẩn mực.",
      "icon": "🧭",
      "badge": "Situational Roleplay",
      "color": "from-sky-500 to-blue-700",
      "mechanics": "tourist_q_and_a_roleplay"
    },
    {
      "id": "reading_detective",
      "gradeNum": 5,
      "titleEn": "Reading Detective",
      "titleVi": "Thám Tử Đọc Hiểu Truy Vết",
      "descriptionEn": "Examine historical passages and extract verified factual textual evidence.",
      "descriptionVi": "Khám nghiệm các đoạn văn lịch sử và trích xuất chứng cứ xác thực.",
      "icon": "📖",
      "badge": "Evidence Extraction",
      "color": "from-indigo-600 to-purple-700",
      "mechanics": "passage_evidence_analysis"
    },
    {
      "id": "speaking_mission",
      "gradeNum": 5,
      "titleEn": "Speaking Mission",
      "titleVi": "Sứ Mệnh Phát Âm Chuẩn",
      "descriptionEn": "Listen to native audio models and practice spoken cadence, rhythm, and intonation.",
      "descriptionVi": "Lắng nghe phát âm bản ngữ và luyện ngữ điệu, nhịp điệu tiếng Anh chuẩn xác.",
      "icon": "🎙️",
      "badge": "Spoken Fluency",
      "color": "from-emerald-500 to-teal-700",
      "mechanics": "speech_synthesis_model_practice"
    },
    {
      "id": "final_adventure",
      "gradeNum": 5,
      "titleEn": "Final Adventure Challenge",
      "titleVi": "Đại Thử Thách Vượt Ải",
      "descriptionEn": "High-speed multi-stage championship sprint testing all English skills.",
      "descriptionVi": "Đại thử thách vượt ải tốc độ cao kiểm tra toàn diện các kỹ năng tiếng Anh.",
      "icon": "⚡",
      "badge": "Speed Sprint",
      "color": "from-rose-500 via-pink-600 to-purple-700",
      "mechanics": "timed_multi_stage_sprint"
    }
  ]
};


import { GRADE12_QUESTION_BANK } from './games/grade12Questions';
import { GRADE345_QUESTION_BANK } from './games/grade345Questions';

export const ADAPTIVE_QUESTION_BANK: Record<string, AdaptiveGameQuestion[]> = {
  ...GRADE12_QUESTION_BANK,
  ...GRADE345_QUESTION_BANK,
};


/**
 * Retrieve all questions for a specific gameType and optional grade
 */
export function getQuestionsByGame(gameType: string, gradeNum?: GradeNumber): AdaptiveGameQuestion[] {
  const list = ADAPTIVE_QUESTION_BANK[gameType] || [];
  if (gradeNum) {
    return list.filter(q => q.grade === gradeNum);
  }
  return list;
}

/**
 * Retrieve the 5 game metadata items designated for a specific grade
 */
export function getAvailableGamesForGrade(gradeNum: GradeNumber): GameMetadata[] {
  return GRADE_GAMES_CATALOG[gradeNum] || GRADE_GAMES_CATALOG[1];
}

/**
 * Retrieve total number of verified questions across all games
 */
export function getTotalQuestionCount(): number {
  return Object.values(ADAPTIVE_QUESTION_BANK).reduce((sum, list) => sum + list.length, 0);
}
