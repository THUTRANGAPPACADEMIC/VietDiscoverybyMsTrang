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

export const ADAPTIVE_QUESTION_BANK: Record<string, AdaptiveGameQuestion[]> = {
  "picture_pop": [
    {
      "questionId": "g1_pop_01",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the apple!",
      "promptVi": "Nghe và chạm vào hình: Quả táo",
      "answerOptions": [
        "apple",
        "banana",
        "cat"
      ],
      "correctAnswer": "apple",
      "explanation": "Awesome! 'apple' is 'Quả táo'.",
      "explanationVi": "Tuyệt vời! 'apple' nghĩa là 'Quả táo'.",
      "imageAsset": "🍎",
      "audioPrompt": "Tap the apple!",
      "curriculumReference": "Global Success Grade 1 - Unit 3: At the Street Market",
      "metadata": {
        "emoji": "🍎"
      }
    },
    {
      "questionId": "g1_pop_02",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the banana!",
      "promptVi": "Nghe và chạm vào hình: Quả chuối",
      "answerOptions": [
        "banana",
        "apple",
        "dog"
      ],
      "correctAnswer": "banana",
      "explanation": "Awesome! 'banana' is 'Quả chuối'.",
      "explanationVi": "Tuyệt vời! 'banana' nghĩa là 'Quả chuối'.",
      "imageAsset": "🍌",
      "audioPrompt": "Tap the banana!",
      "curriculumReference": "Global Success Grade 1 - Unit 3: At the Street Market",
      "metadata": {
        "emoji": "🍌"
      }
    },
    {
      "questionId": "g1_pop_03",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the cat!",
      "promptVi": "Nghe và chạm vào hình: Chú mèo",
      "answerOptions": [
        "cat",
        "dog",
        "duck"
      ],
      "correctAnswer": "cat",
      "explanation": "Awesome! 'cat' is 'Chú mèo'.",
      "explanationVi": "Tuyệt vời! 'cat' nghĩa là 'Chú mèo'.",
      "imageAsset": "🐱",
      "audioPrompt": "Tap the cat!",
      "curriculumReference": "Global Success Grade 1 - Unit 2: In the Dining Room",
      "metadata": {
        "emoji": "🐱"
      }
    },
    {
      "questionId": "g1_pop_04",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the dog!",
      "promptVi": "Nghe và chạm vào hình: Chú chó",
      "answerOptions": [
        "dog",
        "cat",
        "bird"
      ],
      "correctAnswer": "dog",
      "explanation": "Awesome! 'dog' is 'Chú chó'.",
      "explanationVi": "Tuyệt vời! 'dog' nghĩa là 'Chú chó'.",
      "imageAsset": "🐶",
      "audioPrompt": "Tap the dog!",
      "curriculumReference": "Global Success Grade 1 - Unit 4: In the Bedroom",
      "metadata": {
        "emoji": "🐶"
      }
    },
    {
      "questionId": "g1_pop_05",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the ball!",
      "promptVi": "Nghe và chạm vào hình: Quả bóng",
      "answerOptions": [
        "ball",
        "car",
        "doll"
      ],
      "correctAnswer": "ball",
      "explanation": "Awesome! 'ball' is 'Quả bóng'.",
      "explanationVi": "Tuyệt vời! 'ball' nghĩa là 'Quả bóng'.",
      "imageAsset": "⚽",
      "audioPrompt": "Tap the ball!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "⚽"
      }
    },
    {
      "questionId": "g1_pop_06",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the book!",
      "promptVi": "Nghe và chạm vào hình: Quyển sách",
      "answerOptions": [
        "book",
        "pencil",
        "hat"
      ],
      "correctAnswer": "book",
      "explanation": "Awesome! 'book' is 'Quyển sách'.",
      "explanationVi": "Tuyệt vời! 'book' nghĩa là 'Quyển sách'.",
      "imageAsset": "📖",
      "audioPrompt": "Tap the book!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "📖"
      }
    },
    {
      "questionId": "g1_pop_07",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the car!",
      "promptVi": "Nghe và chạm vào hình: Xe ô tô",
      "answerOptions": [
        "car",
        "bike",
        "boat"
      ],
      "correctAnswer": "car",
      "explanation": "Awesome! 'car' is 'Xe ô tô'.",
      "explanationVi": "Tuyệt vời! 'car' nghĩa là 'Xe ô tô'.",
      "imageAsset": "🚗",
      "audioPrompt": "Tap the car!",
      "curriculumReference": "Global Success Grade 1 - Unit 2: In the Dining Room",
      "metadata": {
        "emoji": "🚗"
      }
    },
    {
      "questionId": "g1_pop_08",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the cake!",
      "promptVi": "Nghe và chạm vào hình: Bánh ngọt",
      "answerOptions": [
        "cake",
        "bread",
        "milk"
      ],
      "correctAnswer": "cake",
      "explanation": "Awesome! 'cake' is 'Bánh ngọt'.",
      "explanationVi": "Tuyệt vời! 'cake' nghĩa là 'Bánh ngọt'.",
      "imageAsset": "🍰",
      "audioPrompt": "Tap the cake!",
      "curriculumReference": "Global Success Grade 1 - Unit 2: In the Dining Room",
      "metadata": {
        "emoji": "🍰"
      }
    },
    {
      "questionId": "g1_pop_09",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the duck!",
      "promptVi": "Nghe và chạm vào hình: Chú vịt",
      "answerOptions": [
        "duck",
        "fish",
        "frog"
      ],
      "correctAnswer": "duck",
      "explanation": "Awesome! 'duck' is 'Chú vịt'.",
      "explanationVi": "Tuyệt vời! 'duck' nghĩa là 'Chú vịt'.",
      "imageAsset": "🦆",
      "audioPrompt": "Tap the duck!",
      "curriculumReference": "Global Success Grade 1 - Unit 4: In the Bedroom",
      "metadata": {
        "emoji": "🦆"
      }
    },
    {
      "questionId": "g1_pop_10",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "easy",
      "prompt": "Listen and tap the fish!",
      "promptVi": "Nghe và chạm vào hình: Chú cá",
      "answerOptions": [
        "fish",
        "bird",
        "cat"
      ],
      "correctAnswer": "fish",
      "explanation": "Awesome! 'fish' is 'Chú cá'.",
      "explanationVi": "Tuyệt vời! 'fish' nghĩa là 'Chú cá'.",
      "imageAsset": "🐟",
      "audioPrompt": "Tap the fish!",
      "curriculumReference": "Global Success Grade 1 - Unit 5: At the Fish Shop",
      "metadata": {
        "emoji": "🐟"
      }
    },
    {
      "questionId": "g1_pop_11",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the bird!",
      "promptVi": "Nghe và chạm vào hình: Chú chim",
      "answerOptions": [
        "bird",
        "duck",
        "fox"
      ],
      "correctAnswer": "bird",
      "explanation": "Awesome! 'bird' is 'Chú chim'.",
      "explanationVi": "Tuyệt vời! 'bird' nghĩa là 'Chú chim'.",
      "imageAsset": "🐦",
      "audioPrompt": "Tap the bird!",
      "curriculumReference": "Global Success Grade 1 - Unit 16: My Pets",
      "metadata": {
        "emoji": "🐦"
      }
    },
    {
      "questionId": "g1_pop_12",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the frog!",
      "promptVi": "Nghe và chạm vào hình: Chú ếch",
      "answerOptions": [
        "frog",
        "fish",
        "dog"
      ],
      "correctAnswer": "frog",
      "explanation": "Awesome! 'frog' is 'Chú ếch'.",
      "explanationVi": "Tuyệt vời! 'frog' nghĩa là 'Chú ếch'.",
      "imageAsset": "🐸",
      "audioPrompt": "Tap the frog!",
      "curriculumReference": "Global Success Grade 1 - Unit 5: At the Fish Shop",
      "metadata": {
        "emoji": "🐸"
      }
    },
    {
      "questionId": "g1_pop_13",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the fox!",
      "promptVi": "Nghe và chạm vào hình: Chú cáo",
      "answerOptions": [
        "fox",
        "wolf",
        "cat"
      ],
      "correctAnswer": "fox",
      "explanation": "Awesome! 'fox' is 'Chú cáo'.",
      "explanationVi": "Tuyệt vời! 'fox' nghĩa là 'Chú cáo'.",
      "imageAsset": "🦊",
      "audioPrompt": "Tap the fox!",
      "curriculumReference": "Global Success Grade 1 - Unit 5: At the Fish Shop",
      "metadata": {
        "emoji": "🦊"
      }
    },
    {
      "questionId": "g1_pop_14",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the hat!",
      "promptVi": "Nghe và chạm vào hình: Cái mũ",
      "answerOptions": [
        "hat",
        "bag",
        "cup"
      ],
      "correctAnswer": "hat",
      "explanation": "Awesome! 'hat' is 'Cái mũ'.",
      "explanationVi": "Tuyệt vời! 'hat' nghĩa là 'Cái mũ'.",
      "imageAsset": "👒",
      "audioPrompt": "Tap the hat!",
      "curriculumReference": "Global Success Grade 1 - Unit 3: At the Street Market",
      "metadata": {
        "emoji": "👒"
      }
    },
    {
      "questionId": "g1_pop_15",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the bag!",
      "promptVi": "Nghe và chạm vào hình: Cái cặp",
      "answerOptions": [
        "bag",
        "hat",
        "book"
      ],
      "correctAnswer": "bag",
      "explanation": "Awesome! 'bag' is 'Cái cặp'.",
      "explanationVi": "Tuyệt vời! 'bag' nghĩa là 'Cái cặp'.",
      "imageAsset": "🎒",
      "audioPrompt": "Tap the bag!",
      "curriculumReference": "Global Success Grade 1 - Unit 3: At the Street Market",
      "metadata": {
        "emoji": "🎒"
      }
    },
    {
      "questionId": "g1_pop_16",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the cup!",
      "promptVi": "Nghe và chạm vào hình: Cái cốc",
      "answerOptions": [
        "cup",
        "cake",
        "car"
      ],
      "correctAnswer": "cup",
      "explanation": "Awesome! 'cup' is 'Cái cốc'.",
      "explanationVi": "Tuyệt vời! 'cup' nghĩa là 'Cái cốc'.",
      "imageAsset": "🍵",
      "audioPrompt": "Tap the cup!",
      "curriculumReference": "Global Success Grade 1 - Unit 2: In the Dining Room",
      "metadata": {
        "emoji": "🍵"
      }
    },
    {
      "questionId": "g1_pop_17",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the door!",
      "promptVi": "Nghe và chạm vào hình: Cánh cửa",
      "answerOptions": [
        "door",
        "desk",
        "bed"
      ],
      "correctAnswer": "door",
      "explanation": "Awesome! 'door' is 'Cánh cửa'.",
      "explanationVi": "Tuyệt vời! 'door' nghĩa là 'Cánh cửa'.",
      "imageAsset": "🚪",
      "audioPrompt": "Tap the door!",
      "curriculumReference": "Global Success Grade 1 - Unit 4: In the Bedroom",
      "metadata": {
        "emoji": "🚪"
      }
    },
    {
      "questionId": "g1_pop_18",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the desk!",
      "promptVi": "Nghe và chạm vào hình: Bàn học",
      "answerOptions": [
        "desk",
        "door",
        "chair"
      ],
      "correctAnswer": "desk",
      "explanation": "Awesome! 'desk' is 'Bàn học'.",
      "explanationVi": "Tuyệt vời! 'desk' nghĩa là 'Bàn học'.",
      "imageAsset": "🪵",
      "audioPrompt": "Tap the desk!",
      "curriculumReference": "Global Success Grade 1 - Unit 4: In the Bedroom",
      "metadata": {
        "emoji": "🪵"
      }
    },
    {
      "questionId": "g1_pop_19",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the bike!",
      "promptVi": "Nghe và chạm vào hình: Xe đạp",
      "answerOptions": [
        "bike",
        "car",
        "bus"
      ],
      "correctAnswer": "bike",
      "explanation": "Awesome! 'bike' is 'Xe đạp'.",
      "explanationVi": "Tuyệt vời! 'bike' nghĩa là 'Xe đạp'.",
      "imageAsset": "🚲",
      "audioPrompt": "Tap the bike!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "🚲"
      }
    },
    {
      "questionId": "g1_pop_20",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "medium",
      "prompt": "Listen and tap the boy!",
      "promptVi": "Nghe và chạm vào hình: Cậu bé",
      "answerOptions": [
        "boy",
        "girl",
        "baby"
      ],
      "correctAnswer": "boy",
      "explanation": "Awesome! 'boy' is 'Cậu bé'.",
      "explanationVi": "Tuyệt vời! 'boy' nghĩa là 'Cậu bé'.",
      "imageAsset": "👦",
      "audioPrompt": "Tap the boy!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "👦"
      }
    },
    {
      "questionId": "g1_pop_21",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the doll!",
      "promptVi": "Nghe và chạm vào hình: Búp bê",
      "answerOptions": [
        "doll",
        "robot",
        "ball"
      ],
      "correctAnswer": "doll",
      "explanation": "Awesome! 'doll' is 'Búp bê'.",
      "explanationVi": "Tuyệt vời! 'doll' nghĩa là 'Búp bê'.",
      "imageAsset": "🪆",
      "audioPrompt": "Tap the doll!",
      "curriculumReference": "Global Success Grade 1 - Unit 17: Our Toys",
      "metadata": {
        "emoji": "🪆"
      }
    },
    {
      "questionId": "g1_pop_22",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the robot!",
      "promptVi": "Nghe và chạm vào hình: Người máy",
      "answerOptions": [
        "robot",
        "car",
        "doll"
      ],
      "correctAnswer": "robot",
      "explanation": "Awesome! 'robot' is 'Người máy'.",
      "explanationVi": "Tuyệt vời! 'robot' nghĩa là 'Người máy'.",
      "imageAsset": "🤖",
      "audioPrompt": "Tap the robot!",
      "curriculumReference": "Global Success Grade 1 - Unit 17: Our Toys",
      "metadata": {
        "emoji": "🤖"
      }
    },
    {
      "questionId": "g1_pop_23",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the kite!",
      "promptVi": "Nghe và chạm vào hình: Cái diều",
      "answerOptions": [
        "kite",
        "ball",
        "plane"
      ],
      "correctAnswer": "kite",
      "explanation": "Awesome! 'kite' is 'Cái diều'.",
      "explanationVi": "Tuyệt vời! 'kite' nghĩa là 'Cái diều'.",
      "imageAsset": "🪁",
      "audioPrompt": "Tap the kite!",
      "curriculumReference": "Global Success Grade 1 - Unit 17: Our Toys",
      "metadata": {
        "emoji": "🪁"
      }
    },
    {
      "questionId": "g1_pop_24",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the milk!",
      "promptVi": "Nghe và chạm vào hình: Hộp sữa",
      "answerOptions": [
        "milk",
        "water",
        "tea"
      ],
      "correctAnswer": "milk",
      "explanation": "Awesome! 'milk' is 'Hộp sữa'.",
      "explanationVi": "Tuyệt vời! 'milk' nghĩa là 'Hộp sữa'.",
      "imageAsset": "🥛",
      "audioPrompt": "Tap the milk!",
      "curriculumReference": "Global Success Grade 1 - Unit 2: In the Dining Room",
      "metadata": {
        "emoji": "🥛"
      }
    },
    {
      "questionId": "g1_pop_25",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the sun!",
      "promptVi": "Nghe và chạm vào hình: Mặt trời",
      "answerOptions": [
        "sun",
        "star",
        "moon"
      ],
      "correctAnswer": "sun",
      "explanation": "Awesome! 'sun' is 'Mặt trời'.",
      "explanationVi": "Tuyệt vời! 'sun' nghĩa là 'Mặt trời'.",
      "imageAsset": "☀️",
      "audioPrompt": "Tap the sun!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "☀️"
      }
    },
    {
      "questionId": "g1_pop_26",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the star!",
      "promptVi": "Nghe và chạm vào hình: Ngôi sao",
      "answerOptions": [
        "star",
        "sun",
        "cloud"
      ],
      "correctAnswer": "star",
      "explanation": "Awesome! 'star' is 'Ngôi sao'.",
      "explanationVi": "Tuyệt vời! 'star' nghĩa là 'Ngôi sao'.",
      "imageAsset": "⭐",
      "audioPrompt": "Tap the star!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "⭐"
      }
    },
    {
      "questionId": "g1_pop_27",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the tree!",
      "promptVi": "Nghe và chạm vào hình: Cái cây",
      "answerOptions": [
        "tree",
        "flower",
        "leaf"
      ],
      "correctAnswer": "tree",
      "explanation": "Awesome! 'tree' is 'Cái cây'.",
      "explanationVi": "Tuyệt vời! 'tree' nghĩa là 'Cái cây'.",
      "imageAsset": "🌳",
      "audioPrompt": "Tap the tree!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "🌳"
      }
    },
    {
      "questionId": "g1_pop_28",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the flower!",
      "promptVi": "Nghe và chạm vào hình: Bông hoa",
      "answerOptions": [
        "flower",
        "tree",
        "grass"
      ],
      "correctAnswer": "flower",
      "explanation": "Awesome! 'flower' is 'Bông hoa'.",
      "explanationVi": "Tuyệt vời! 'flower' nghĩa là 'Bông hoa'.",
      "imageAsset": "🌸",
      "audioPrompt": "Tap the flower!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "🌸"
      }
    },
    {
      "questionId": "g1_pop_29",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the pencil!",
      "promptVi": "Nghe và chạm vào hình: Bút chì",
      "answerOptions": [
        "pencil",
        "book",
        "bag"
      ],
      "correctAnswer": "pencil",
      "explanation": "Awesome! 'pencil' is 'Bút chì'.",
      "explanationVi": "Tuyệt vời! 'pencil' nghĩa là 'Bút chì'.",
      "imageAsset": "✏️",
      "audioPrompt": "Tap the pencil!",
      "curriculumReference": "Global Success Grade 1 - Unit 1: In the Playground",
      "metadata": {
        "emoji": "✏️"
      }
    },
    {
      "questionId": "g1_pop_30",
      "grade": 1,
      "gameType": "picture_pop",
      "topic": "Early Phonics & Words",
      "difficulty": "challenge",
      "prompt": "Listen and tap the teddy bear!",
      "promptVi": "Nghe và chạm vào hình: Gấu bông",
      "answerOptions": [
        "teddy bear",
        "doll",
        "robot"
      ],
      "correctAnswer": "teddy bear",
      "explanation": "Awesome! 'teddy bear' is 'Gấu bông'.",
      "explanationVi": "Tuyệt vời! 'teddy bear' nghĩa là 'Gấu bông'.",
      "imageAsset": "🧸",
      "audioPrompt": "Tap the teddy bear!",
      "curriculumReference": "Global Success Grade 1 - Unit 17: Our Toys",
      "metadata": {
        "emoji": "🧸"
      }
    }
  ],
  "animal_friends": [
    {
      "questionId": "g1_ani_01",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Meow meow!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Meow meow!'? (Chú mèo)",
      "answerOptions": [
        "cat",
        "dog",
        "cow"
      ],
      "correctAnswer": "cat",
      "explanation": "The cat makes the sound 'Meow meow!'! It means 'Chú mèo'.",
      "explanationVi": "Chính xác! Con 'cat' kêu 'Meow meow!'. Đó là 'Chú mèo'.",
      "imageAsset": "🐱",
      "audioPrompt": "Which animal says Meow meow!? It is the cat!",
      "curriculumReference": "Global Success Grade 1 - Unit 2",
      "metadata": {
        "sound": "Meow meow!",
        "emoji": "🐱"
      }
    },
    {
      "questionId": "g1_ani_02",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Woof woof!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Woof woof!'? (Chú chó)",
      "answerOptions": [
        "dog",
        "cat",
        "duck"
      ],
      "correctAnswer": "dog",
      "explanation": "The dog makes the sound 'Woof woof!'! It means 'Chú chó'.",
      "explanationVi": "Chính xác! Con 'dog' kêu 'Woof woof!'. Đó là 'Chú chó'.",
      "imageAsset": "🐶",
      "audioPrompt": "Which animal says Woof woof!? It is the dog!",
      "curriculumReference": "Global Success Grade 1 - Unit 4",
      "metadata": {
        "sound": "Woof woof!",
        "emoji": "🐶"
      }
    },
    {
      "questionId": "g1_ani_03",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Quack quack!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Quack quack!'? (Chú vịt)",
      "answerOptions": [
        "duck",
        "chicken",
        "bird"
      ],
      "correctAnswer": "duck",
      "explanation": "The duck makes the sound 'Quack quack!'! It means 'Chú vịt'.",
      "explanationVi": "Chính xác! Con 'duck' kêu 'Quack quack!'. Đó là 'Chú vịt'.",
      "imageAsset": "🦆",
      "audioPrompt": "Which animal says Quack quack!? It is the duck!",
      "curriculumReference": "Global Success Grade 1 - Unit 4",
      "metadata": {
        "sound": "Quack quack!",
        "emoji": "🦆"
      }
    },
    {
      "questionId": "g1_ani_04",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Tweet tweet!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Tweet tweet!'? (Chú chim)",
      "answerOptions": [
        "bird",
        "bat",
        "fish"
      ],
      "correctAnswer": "bird",
      "explanation": "The bird makes the sound 'Tweet tweet!'! It means 'Chú chim'.",
      "explanationVi": "Chính xác! Con 'bird' kêu 'Tweet tweet!'. Đó là 'Chú chim'.",
      "imageAsset": "🐦",
      "audioPrompt": "Which animal says Tweet tweet!? It is the bird!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Tweet tweet!",
        "emoji": "🐦"
      }
    },
    {
      "questionId": "g1_ani_05",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Blub blub!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Blub blub!'? (Chú cá)",
      "answerOptions": [
        "fish",
        "frog",
        "duck"
      ],
      "correctAnswer": "fish",
      "explanation": "The fish makes the sound 'Blub blub!'! It means 'Chú cá'.",
      "explanationVi": "Chính xác! Con 'fish' kêu 'Blub blub!'. Đó là 'Chú cá'.",
      "imageAsset": "🐟",
      "audioPrompt": "Which animal says Blub blub!? It is the fish!",
      "curriculumReference": "Global Success Grade 1 - Unit 5",
      "metadata": {
        "sound": "Blub blub!",
        "emoji": "🐟"
      }
    },
    {
      "questionId": "g1_ani_06",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Ribbit ribbit!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Ribbit ribbit!'? (Chú ếch)",
      "answerOptions": [
        "frog",
        "fish",
        "fox"
      ],
      "correctAnswer": "frog",
      "explanation": "The frog makes the sound 'Ribbit ribbit!'! It means 'Chú ếch'.",
      "explanationVi": "Chính xác! Con 'frog' kêu 'Ribbit ribbit!'. Đó là 'Chú ếch'.",
      "imageAsset": "🐸",
      "audioPrompt": "Which animal says Ribbit ribbit!? It is the frog!",
      "curriculumReference": "Global Success Grade 1 - Unit 5",
      "metadata": {
        "sound": "Ribbit ribbit!",
        "emoji": "🐸"
      }
    },
    {
      "questionId": "g1_ani_07",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Moo moo!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Moo moo!'? (Con bò)",
      "answerOptions": [
        "cow",
        "horse",
        "pig"
      ],
      "correctAnswer": "cow",
      "explanation": "The cow makes the sound 'Moo moo!'! It means 'Con bò'.",
      "explanationVi": "Chính xác! Con 'cow' kêu 'Moo moo!'. Đó là 'Con bò'.",
      "imageAsset": "🐮",
      "audioPrompt": "Which animal says Moo moo!? It is the cow!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Moo moo!",
        "emoji": "🐮"
      }
    },
    {
      "questionId": "g1_ani_08",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Oink oink!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Oink oink!'? (Con lợn)",
      "answerOptions": [
        "pig",
        "cow",
        "sheep"
      ],
      "correctAnswer": "pig",
      "explanation": "The pig makes the sound 'Oink oink!'! It means 'Con lợn'.",
      "explanationVi": "Chính xác! Con 'pig' kêu 'Oink oink!'. Đó là 'Con lợn'.",
      "imageAsset": "🐷",
      "audioPrompt": "Which animal says Oink oink!? It is the pig!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Oink oink!",
        "emoji": "🐷"
      }
    },
    {
      "questionId": "g1_ani_09",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Roar!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Roar!'? (Sư tử dũng mãnh)",
      "answerOptions": [
        "lion",
        "tiger",
        "bear"
      ],
      "correctAnswer": "lion",
      "explanation": "The lion makes the sound 'Roar!'! It means 'Sư tử dũng mãnh'.",
      "explanationVi": "Chính xác! Con 'lion' kêu 'Roar!'. Đó là 'Sư tử dũng mãnh'.",
      "imageAsset": "🦁",
      "audioPrompt": "Which animal says Roar!? It is the lion!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Roar!",
        "emoji": "🦁"
      }
    },
    {
      "questionId": "g1_ani_10",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "easy",
      "prompt": "Which animal says: 'Ooh ooh aah aah!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Ooh ooh aah aah!'? (Chú khỉ tinh nghịch)",
      "answerOptions": [
        "monkey",
        "panda",
        "rabbit"
      ],
      "correctAnswer": "monkey",
      "explanation": "The monkey makes the sound 'Ooh ooh aah aah!'! It means 'Chú khỉ tinh nghịch'.",
      "explanationVi": "Chính xác! Con 'monkey' kêu 'Ooh ooh aah aah!'. Đó là 'Chú khỉ tinh nghịch'.",
      "imageAsset": "🐒",
      "audioPrompt": "Which animal says Ooh ooh aah aah!? It is the monkey!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Ooh ooh aah aah!",
        "emoji": "🐒"
      }
    },
    {
      "questionId": "g1_ani_11",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Grrr!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Grrr!'? (Chú hổ vằn)",
      "answerOptions": [
        "tiger",
        "lion",
        "cat"
      ],
      "correctAnswer": "tiger",
      "explanation": "The tiger makes the sound 'Grrr!'! It means 'Chú hổ vằn'.",
      "explanationVi": "Chính xác! Con 'tiger' kêu 'Grrr!'. Đó là 'Chú hổ vằn'.",
      "imageAsset": "🐯",
      "audioPrompt": "Which animal says Grrr!? It is the tiger!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Grrr!",
        "emoji": "🐯"
      }
    },
    {
      "questionId": "g1_ani_12",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Trumpet!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Trumpet!'? (Chú voi to lớn)",
      "answerOptions": [
        "elephant",
        "rhino",
        "hippo"
      ],
      "correctAnswer": "elephant",
      "explanation": "The elephant makes the sound 'Trumpet!'! It means 'Chú voi to lớn'.",
      "explanationVi": "Chính xác! Con 'elephant' kêu 'Trumpet!'. Đó là 'Chú voi to lớn'.",
      "imageAsset": "🐘",
      "audioPrompt": "Which animal says Trumpet!? It is the elephant!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Trumpet!",
        "emoji": "🐘"
      }
    },
    {
      "questionId": "g1_ani_13",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Growl!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Growl!'? (Chú gấu)",
      "answerOptions": [
        "bear",
        "lion",
        "panda"
      ],
      "correctAnswer": "bear",
      "explanation": "The bear makes the sound 'Growl!'! It means 'Chú gấu'.",
      "explanationVi": "Chính xác! Con 'bear' kêu 'Growl!'. Đó là 'Chú gấu'.",
      "imageAsset": "🐻",
      "audioPrompt": "Which animal says Growl!? It is the bear!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Growl!",
        "emoji": "🐻"
      }
    },
    {
      "questionId": "g1_ani_14",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Hop hop!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Hop hop!'? (Chú thỏ trắng)",
      "answerOptions": [
        "rabbit",
        "mouse",
        "cat"
      ],
      "correctAnswer": "rabbit",
      "explanation": "The rabbit makes the sound 'Hop hop!'! It means 'Chú thỏ trắng'.",
      "explanationVi": "Chính xác! Con 'rabbit' kêu 'Hop hop!'. Đó là 'Chú thỏ trắng'.",
      "imageAsset": "🐰",
      "audioPrompt": "Which animal says Hop hop!? It is the rabbit!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Hop hop!",
        "emoji": "🐰"
      }
    },
    {
      "questionId": "g1_ani_15",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Neigh!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Neigh!'? (Chú ngựa)",
      "answerOptions": [
        "horse",
        "cow",
        "donkey"
      ],
      "correctAnswer": "horse",
      "explanation": "The horse makes the sound 'Neigh!'! It means 'Chú ngựa'.",
      "explanationVi": "Chính xác! Con 'horse' kêu 'Neigh!'. Đó là 'Chú ngựa'.",
      "imageAsset": "🐴",
      "audioPrompt": "Which animal says Neigh!? It is the horse!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Neigh!",
        "emoji": "🐴"
      }
    },
    {
      "questionId": "g1_ani_16",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Baa baa!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Baa baa!'? (Chú cừu)",
      "answerOptions": [
        "sheep",
        "goat",
        "cow"
      ],
      "correctAnswer": "sheep",
      "explanation": "The sheep makes the sound 'Baa baa!'! It means 'Chú cừu'.",
      "explanationVi": "Chính xác! Con 'sheep' kêu 'Baa baa!'. Đó là 'Chú cừu'.",
      "imageAsset": "🐑",
      "audioPrompt": "Which animal says Baa baa!? It is the sheep!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Baa baa!",
        "emoji": "🐑"
      }
    },
    {
      "questionId": "g1_ani_17",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Cluck cluck!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Cluck cluck!'? (Chú gà)",
      "answerOptions": [
        "chicken",
        "duck",
        "bird"
      ],
      "correctAnswer": "chicken",
      "explanation": "The chicken makes the sound 'Cluck cluck!'! It means 'Chú gà'.",
      "explanationVi": "Chính xác! Con 'chicken' kêu 'Cluck cluck!'. Đó là 'Chú gà'.",
      "imageAsset": "🐔",
      "audioPrompt": "Which animal says Cluck cluck!? It is the chicken!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Cluck cluck!",
        "emoji": "🐔"
      }
    },
    {
      "questionId": "g1_ani_18",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Munch munch!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Munch munch!'? (Gấu trúc)",
      "answerOptions": [
        "panda",
        "bear",
        "koala"
      ],
      "correctAnswer": "panda",
      "explanation": "The panda makes the sound 'Munch munch!'! It means 'Gấu trúc'.",
      "explanationVi": "Chính xác! Con 'panda' kêu 'Munch munch!'. Đó là 'Gấu trúc'.",
      "imageAsset": "🐼",
      "audioPrompt": "Which animal says Munch munch!? It is the panda!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Munch munch!",
        "emoji": "🐼"
      }
    },
    {
      "questionId": "g1_ani_19",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Squeak squeak!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Squeak squeak!'? (Chú chuột nhắt)",
      "answerOptions": [
        "mouse",
        "cat",
        "rabbit"
      ],
      "correctAnswer": "mouse",
      "explanation": "The mouse makes the sound 'Squeak squeak!'! It means 'Chú chuột nhắt'.",
      "explanationVi": "Chính xác! Con 'mouse' kêu 'Squeak squeak!'. Đó là 'Chú chuột nhắt'.",
      "imageAsset": "🐭",
      "audioPrompt": "Which animal says Squeak squeak!? It is the mouse!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Squeak squeak!",
        "emoji": "🐭"
      }
    },
    {
      "questionId": "g1_ani_20",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "medium",
      "prompt": "Which animal says: 'Yip yip!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Yip yip!'? (Chú cáo thông minh)",
      "answerOptions": [
        "fox",
        "wolf",
        "dog"
      ],
      "correctAnswer": "fox",
      "explanation": "The fox makes the sound 'Yip yip!'! It means 'Chú cáo thông minh'.",
      "explanationVi": "Chính xác! Con 'fox' kêu 'Yip yip!'. Đó là 'Chú cáo thông minh'.",
      "imageAsset": "🦊",
      "audioPrompt": "Which animal says Yip yip!? It is the fox!",
      "curriculumReference": "Global Success Grade 1 - Unit 5",
      "metadata": {
        "sound": "Yip yip!",
        "emoji": "🦊"
      }
    },
    {
      "questionId": "g1_ani_21",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Click click!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Click click!'? (Cá heo thông minh)",
      "answerOptions": [
        "dolphin",
        "whale",
        "shark"
      ],
      "correctAnswer": "dolphin",
      "explanation": "The dolphin makes the sound 'Click click!'! It means 'Cá heo thông minh'.",
      "explanationVi": "Chính xác! Con 'dolphin' kêu 'Click click!'. Đó là 'Cá heo thông minh'.",
      "imageAsset": "🐬",
      "audioPrompt": "Which animal says Click click!? It is the dolphin!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Click click!",
        "emoji": "🐬"
      }
    },
    {
      "questionId": "g1_ani_22",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Whoosh!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Whoosh!'? (Cá voi khổng lồ)",
      "answerOptions": [
        "whale",
        "dolphin",
        "fish"
      ],
      "correctAnswer": "whale",
      "explanation": "The whale makes the sound 'Whoosh!'! It means 'Cá voi khổng lồ'.",
      "explanationVi": "Chính xác! Con 'whale' kêu 'Whoosh!'. Đó là 'Cá voi khổng lồ'.",
      "imageAsset": "🐋",
      "audioPrompt": "Which animal says Whoosh!? It is the whale!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Whoosh!",
        "emoji": "🐋"
      }
    },
    {
      "questionId": "g1_ani_23",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Gallop!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Gallop!'? (Ngựa vằn)",
      "answerOptions": [
        "zebra",
        "horse",
        "tiger"
      ],
      "correctAnswer": "zebra",
      "explanation": "The zebra makes the sound 'Gallop!'! It means 'Ngựa vằn'.",
      "explanationVi": "Chính xác! Con 'zebra' kêu 'Gallop!'. Đó là 'Ngựa vằn'.",
      "imageAsset": "🦓",
      "audioPrompt": "Which animal says Gallop!? It is the zebra!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Gallop!",
        "emoji": "🦓"
      }
    },
    {
      "questionId": "g1_ani_24",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Tall neck!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Tall neck!'? (Hươu cao cổ)",
      "answerOptions": [
        "giraffe",
        "zebra",
        "horse"
      ],
      "correctAnswer": "giraffe",
      "explanation": "The giraffe makes the sound 'Tall neck!'! It means 'Hươu cao cổ'.",
      "explanationVi": "Chính xác! Con 'giraffe' kêu 'Tall neck!'. Đó là 'Hươu cao cổ'.",
      "imageAsset": "🦒",
      "audioPrompt": "Which animal says Tall neck!? It is the giraffe!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Tall neck!",
        "emoji": "🦒"
      }
    },
    {
      "questionId": "g1_ani_25",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Waddle waddle!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Waddle waddle!'? (Chim cánh cụt)",
      "answerOptions": [
        "penguin",
        "duck",
        "bird"
      ],
      "correctAnswer": "penguin",
      "explanation": "The penguin makes the sound 'Waddle waddle!'! It means 'Chim cánh cụt'.",
      "explanationVi": "Chính xác! Con 'penguin' kêu 'Waddle waddle!'. Đó là 'Chim cánh cụt'.",
      "imageAsset": "🐧",
      "audioPrompt": "Which animal says Waddle waddle!? It is the penguin!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Waddle waddle!",
        "emoji": "🐧"
      }
    },
    {
      "questionId": "g1_ani_26",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Boing boing!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Boing boing!'? (Chuột túi nhảy xa)",
      "answerOptions": [
        "kangaroo",
        "rabbit",
        "deer"
      ],
      "correctAnswer": "kangaroo",
      "explanation": "The kangaroo makes the sound 'Boing boing!'! It means 'Chuột túi nhảy xa'.",
      "explanationVi": "Chính xác! Con 'kangaroo' kêu 'Boing boing!'. Đó là 'Chuột túi nhảy xa'.",
      "imageAsset": "🦘",
      "audioPrompt": "Which animal says Boing boing!? It is the kangaroo!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Boing boing!",
        "emoji": "🦘"
      }
    },
    {
      "questionId": "g1_ani_27",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Buzz buzz!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Buzz buzz!'? (Chú ong chăm chỉ)",
      "answerOptions": [
        "bee",
        "butterfly",
        "ant"
      ],
      "correctAnswer": "bee",
      "explanation": "The bee makes the sound 'Buzz buzz!'! It means 'Chú ong chăm chỉ'.",
      "explanationVi": "Chính xác! Con 'bee' kêu 'Buzz buzz!'. Đó là 'Chú ong chăm chỉ'.",
      "imageAsset": "🐝",
      "audioPrompt": "Which animal says Buzz buzz!? It is the bee!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Buzz buzz!",
        "emoji": "🐝"
      }
    },
    {
      "questionId": "g1_ani_28",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Flutter flutter!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Flutter flutter!'? (Bướm xinh)",
      "answerOptions": [
        "butterfly",
        "bee",
        "bird"
      ],
      "correctAnswer": "butterfly",
      "explanation": "The butterfly makes the sound 'Flutter flutter!'! It means 'Bướm xinh'.",
      "explanationVi": "Chính xác! Con 'butterfly' kêu 'Flutter flutter!'. Đó là 'Bướm xinh'.",
      "imageAsset": "🦋",
      "audioPrompt": "Which animal says Flutter flutter!? It is the butterfly!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Flutter flutter!",
        "emoji": "🦋"
      }
    },
    {
      "questionId": "g1_ani_29",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Hoo hoo!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Hoo hoo!'? (Cú mèo thông thái)",
      "answerOptions": [
        "owl",
        "eagle",
        "bird"
      ],
      "correctAnswer": "owl",
      "explanation": "The owl makes the sound 'Hoo hoo!'! It means 'Cú mèo thông thái'.",
      "explanationVi": "Chính xác! Con 'owl' kêu 'Hoo hoo!'. Đó là 'Cú mèo thông thái'.",
      "imageAsset": "🦉",
      "audioPrompt": "Which animal says Hoo hoo!? It is the owl!",
      "curriculumReference": "Global Success Grade 1 - Unit 20",
      "metadata": {
        "sound": "Hoo hoo!",
        "emoji": "🦉"
      }
    },
    {
      "questionId": "g1_ani_30",
      "grade": 1,
      "gameType": "animal_friends",
      "topic": "Animals & Nature",
      "difficulty": "challenge",
      "prompt": "Which animal says: 'Slow and steady!'?",
      "promptVi": "Đố bé con vật nào kêu: 'Slow and steady!'? (Rùa nhỏ)",
      "answerOptions": [
        "turtle",
        "frog",
        "lizard"
      ],
      "correctAnswer": "turtle",
      "explanation": "The turtle makes the sound 'Slow and steady!'! It means 'Rùa nhỏ'.",
      "explanationVi": "Chính xác! Con 'turtle' kêu 'Slow and steady!'. Đó là 'Rùa nhỏ'.",
      "imageAsset": "🐢",
      "audioPrompt": "Which animal says Slow and steady!? It is the turtle!",
      "curriculumReference": "Global Success Grade 1 - Unit 16",
      "metadata": {
        "sound": "Slow and steady!",
        "emoji": "🐢"
      }
    }
  ],
  "color_magic": [
    {
      "questionId": "g1_col_01",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this apple?",
      "promptVi": "Màu đỏ có màu gì?",
      "answerOptions": [
        "red",
        "blue",
        "yellow"
      ],
      "correctAnswer": "red",
      "explanation": "Spot on! The Red apple is red (Màu đỏ).",
      "explanationVi": "Chính xác! Màu đỏ có màu red.",
      "imageAsset": "🍎",
      "audioPrompt": "What color is this? It is red!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "red",
        "object": "Red apple",
        "emoji": "🍎"
      }
    },
    {
      "questionId": "g1_col_02",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this sky?",
      "promptVi": "Màu xanh dương có màu gì?",
      "answerOptions": [
        "blue",
        "green",
        "red"
      ],
      "correctAnswer": "blue",
      "explanation": "Spot on! The Blue sky is blue (Màu xanh dương).",
      "explanationVi": "Chính xác! Màu xanh dương có màu blue.",
      "imageAsset": "🌊",
      "audioPrompt": "What color is this? It is blue!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "blue",
        "object": "Blue sky",
        "emoji": "🌊"
      }
    },
    {
      "questionId": "g1_col_03",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this sun?",
      "promptVi": "Màu vàng có màu gì?",
      "answerOptions": [
        "yellow",
        "orange",
        "pink"
      ],
      "correctAnswer": "yellow",
      "explanation": "Spot on! The Yellow sun is yellow (Màu vàng).",
      "explanationVi": "Chính xác! Màu vàng có màu yellow.",
      "imageAsset": "☀️",
      "audioPrompt": "What color is this? It is yellow!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "yellow",
        "object": "Yellow sun",
        "emoji": "☀️"
      }
    },
    {
      "questionId": "g1_col_04",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this leaf?",
      "promptVi": "Màu xanh lá có màu gì?",
      "answerOptions": [
        "green",
        "blue",
        "brown"
      ],
      "correctAnswer": "green",
      "explanation": "Spot on! The Green leaf is green (Màu xanh lá).",
      "explanationVi": "Chính xác! Màu xanh lá có màu green.",
      "imageAsset": "🍃",
      "audioPrompt": "What color is this? It is green!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "green",
        "object": "Green leaf",
        "emoji": "🍃"
      }
    },
    {
      "questionId": "g1_col_05",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this flower?",
      "promptVi": "Màu hồng có màu gì?",
      "answerOptions": [
        "pink",
        "purple",
        "red"
      ],
      "correctAnswer": "pink",
      "explanation": "Spot on! The Pink flower is pink (Màu hồng).",
      "explanationVi": "Chính xác! Màu hồng có màu pink.",
      "imageAsset": "🌸",
      "audioPrompt": "What color is this? It is pink!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "pink",
        "object": "Pink flower",
        "emoji": "🌸"
      }
    },
    {
      "questionId": "g1_col_06",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this fruit?",
      "promptVi": "Màu cam có màu gì?",
      "answerOptions": [
        "orange",
        "yellow",
        "red"
      ],
      "correctAnswer": "orange",
      "explanation": "Spot on! The Orange fruit is orange (Màu cam).",
      "explanationVi": "Chính xác! Màu cam có màu orange.",
      "imageAsset": "🍊",
      "audioPrompt": "What color is this? It is orange!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "orange",
        "object": "Orange fruit",
        "emoji": "🍊"
      }
    },
    {
      "questionId": "g1_col_07",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this grape?",
      "promptVi": "Màu tím có màu gì?",
      "answerOptions": [
        "purple",
        "blue",
        "pink"
      ],
      "correctAnswer": "purple",
      "explanation": "Spot on! The Purple grape is purple (Màu tím).",
      "explanationVi": "Chính xác! Màu tím có màu purple.",
      "imageAsset": "🍇",
      "audioPrompt": "What color is this? It is purple!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "purple",
        "object": "Purple grape",
        "emoji": "🍇"
      }
    },
    {
      "questionId": "g1_col_08",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this cloud?",
      "promptVi": "Màu trắng có màu gì?",
      "answerOptions": [
        "white",
        "black",
        "grey"
      ],
      "correctAnswer": "white",
      "explanation": "Spot on! The White cloud is white (Màu trắng).",
      "explanationVi": "Chính xác! Màu trắng có màu white.",
      "imageAsset": "☁️",
      "audioPrompt": "What color is this? It is white!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "white",
        "object": "White cloud",
        "emoji": "☁️"
      }
    },
    {
      "questionId": "g1_col_09",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this cat?",
      "promptVi": "Màu đen có màu gì?",
      "answerOptions": [
        "black",
        "white",
        "brown"
      ],
      "correctAnswer": "black",
      "explanation": "Spot on! The Black cat is black (Màu đen).",
      "explanationVi": "Chính xác! Màu đen có màu black.",
      "imageAsset": "🐈‍⬛",
      "audioPrompt": "What color is this? It is black!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "black",
        "object": "Black cat",
        "emoji": "🐈‍⬛"
      }
    },
    {
      "questionId": "g1_col_10",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "easy",
      "prompt": "What color is this bear?",
      "promptVi": "Màu nâu có màu gì?",
      "answerOptions": [
        "brown",
        "black",
        "orange"
      ],
      "correctAnswer": "brown",
      "explanation": "Spot on! The Brown bear is brown (Màu nâu).",
      "explanationVi": "Chính xác! Màu nâu có màu brown.",
      "imageAsset": "🐻",
      "audioPrompt": "What color is this? It is brown!",
      "curriculumReference": "Global Success Grade 1 - Unit 9: Colours",
      "metadata": {
        "color": "brown",
        "object": "Brown bear",
        "emoji": "🐻"
      }
    },
    {
      "questionId": "g1_col_11",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this truck?",
      "promptVi": "Chiếc xe cứu hỏa màu đỏ có màu gì?",
      "answerOptions": [
        "red",
        "yellow",
        "blue"
      ],
      "correctAnswer": "red",
      "explanation": "Spot on! The Red fire truck is red (Chiếc xe cứu hỏa màu đỏ).",
      "explanationVi": "Chính xác! Chiếc xe cứu hỏa màu đỏ có màu red.",
      "imageAsset": "🚒",
      "audioPrompt": "What color is this? It is red!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "red",
        "object": "Red fire truck",
        "emoji": "🚒"
      }
    },
    {
      "questionId": "g1_col_12",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this frog?",
      "promptVi": "Chú ếch màu xanh lá có màu gì?",
      "answerOptions": [
        "green",
        "brown",
        "pink"
      ],
      "correctAnswer": "green",
      "explanation": "Spot on! The Green frog is green (Chú ếch màu xanh lá).",
      "explanationVi": "Chính xác! Chú ếch màu xanh lá có màu green.",
      "imageAsset": "🐸",
      "audioPrompt": "What color is this? It is green!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "green",
        "object": "Green frog",
        "emoji": "🐸"
      }
    },
    {
      "questionId": "g1_col_13",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this star?",
      "promptVi": "Ngôi sao màu vàng có màu gì?",
      "answerOptions": [
        "yellow",
        "white",
        "red"
      ],
      "correctAnswer": "yellow",
      "explanation": "Spot on! The Yellow star is yellow (Ngôi sao màu vàng).",
      "explanationVi": "Chính xác! Ngôi sao màu vàng có màu yellow.",
      "imageAsset": "⭐",
      "audioPrompt": "What color is this? It is yellow!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "yellow",
        "object": "Yellow star",
        "emoji": "⭐"
      }
    },
    {
      "questionId": "g1_col_14",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this ocean?",
      "promptVi": "Đại dương màu xanh biếc có màu gì?",
      "answerOptions": [
        "blue",
        "green",
        "purple"
      ],
      "correctAnswer": "blue",
      "explanation": "Spot on! The Blue ocean is blue (Đại dương màu xanh biếc).",
      "explanationVi": "Chính xác! Đại dương màu xanh biếc có màu blue.",
      "imageAsset": "🐳",
      "audioPrompt": "What color is this? It is blue!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "blue",
        "object": "Blue ocean",
        "emoji": "🐳"
      }
    },
    {
      "questionId": "g1_col_15",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this candy?",
      "promptVi": "Viên kẹo ngọt màu hồng có màu gì?",
      "answerOptions": [
        "pink",
        "orange",
        "yellow"
      ],
      "correctAnswer": "pink",
      "explanation": "Spot on! The Pink candy is pink (Viên kẹo ngọt màu hồng).",
      "explanationVi": "Chính xác! Viên kẹo ngọt màu hồng có màu pink.",
      "imageAsset": "🍬",
      "audioPrompt": "What color is this? It is pink!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "pink",
        "object": "Pink candy",
        "emoji": "🍬"
      }
    },
    {
      "questionId": "g1_col_16",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this carrot?",
      "promptVi": "Củ cà rốt màu cam có màu gì?",
      "answerOptions": [
        "orange",
        "red",
        "yellow"
      ],
      "correctAnswer": "orange",
      "explanation": "Spot on! The Orange carrot is orange (Củ cà rốt màu cam).",
      "explanationVi": "Chính xác! Củ cà rốt màu cam có màu orange.",
      "imageAsset": "🥕",
      "audioPrompt": "What color is this? It is orange!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "orange",
        "object": "Orange carrot",
        "emoji": "🥕"
      }
    },
    {
      "questionId": "g1_col_17",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this balloon?",
      "promptVi": "Bóng bay màu tím có màu gì?",
      "answerOptions": [
        "purple",
        "blue",
        "red"
      ],
      "correctAnswer": "purple",
      "explanation": "Spot on! The Purple balloon is purple (Bóng bay màu tím).",
      "explanationVi": "Chính xác! Bóng bay màu tím có màu purple.",
      "imageAsset": "🎈",
      "audioPrompt": "What color is this? It is purple!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "purple",
        "object": "Purple balloon",
        "emoji": "🎈"
      }
    },
    {
      "questionId": "g1_col_18",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this snowman?",
      "promptVi": "Người tuyết trắng tinh có màu gì?",
      "answerOptions": [
        "white",
        "grey",
        "blue"
      ],
      "correctAnswer": "white",
      "explanation": "Spot on! The White snowman is white (Người tuyết trắng tinh).",
      "explanationVi": "Chính xác! Người tuyết trắng tinh có màu white.",
      "imageAsset": "⛄",
      "audioPrompt": "What color is this? It is white!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "white",
        "object": "White snowman",
        "emoji": "⛄"
      }
    },
    {
      "questionId": "g1_col_19",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this hat?",
      "promptVi": "Chiếc mũ ảo thuật màu đen có màu gì?",
      "answerOptions": [
        "black",
        "brown",
        "blue"
      ],
      "correctAnswer": "black",
      "explanation": "Spot on! The Black hat is black (Chiếc mũ ảo thuật màu đen).",
      "explanationVi": "Chính xác! Chiếc mũ ảo thuật màu đen có màu black.",
      "imageAsset": "🎩",
      "audioPrompt": "What color is this? It is black!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "black",
        "object": "Black hat",
        "emoji": "🎩"
      }
    },
    {
      "questionId": "g1_col_20",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "medium",
      "prompt": "What color is this chocolate?",
      "promptVi": "Thanh sô cô la màu nâu có màu gì?",
      "answerOptions": [
        "brown",
        "black",
        "orange"
      ],
      "correctAnswer": "brown",
      "explanation": "Spot on! The Brown chocolate is brown (Thanh sô cô la màu nâu).",
      "explanationVi": "Chính xác! Thanh sô cô la màu nâu có màu brown.",
      "imageAsset": "🍫",
      "audioPrompt": "What color is this? It is brown!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "brown",
        "object": "Brown chocolate",
        "emoji": "🍫"
      }
    },
    {
      "questionId": "g1_col_21",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this crown?",
      "promptVi": "Vương miện vàng lấp lánh có màu gì?",
      "answerOptions": [
        "gold",
        "silver",
        "bronze"
      ],
      "correctAnswer": "gold",
      "explanation": "Spot on! The Golden crown is gold (Vương miện vàng lấp lánh).",
      "explanationVi": "Chính xác! Vương miện vàng lấp lánh có màu gold.",
      "imageAsset": "👑",
      "audioPrompt": "What color is this? It is gold!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "gold",
        "object": "Golden crown",
        "emoji": "👑"
      }
    },
    {
      "questionId": "g1_col_22",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this coin?",
      "promptVi": "Đồng xu bạc sáng bóng có màu gì?",
      "answerOptions": [
        "silver",
        "gold",
        "copper"
      ],
      "correctAnswer": "silver",
      "explanation": "Spot on! The Silver coin is silver (Đồng xu bạc sáng bóng).",
      "explanationVi": "Chính xác! Đồng xu bạc sáng bóng có màu silver.",
      "imageAsset": "🪙",
      "audioPrompt": "What color is this? It is silver!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "silver",
        "object": "Silver coin",
        "emoji": "🪙"
      }
    },
    {
      "questionId": "g1_col_23",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this sky?",
      "promptVi": "Cầu vồng bảy sắc có màu gì?",
      "answerOptions": [
        "rainbow",
        "cloud",
        "sun"
      ],
      "correctAnswer": "rainbow",
      "explanation": "Spot on! The Rainbow in sky is rainbow (Cầu vồng bảy sắc).",
      "explanationVi": "Chính xác! Cầu vồng bảy sắc có màu rainbow.",
      "imageAsset": "🌈",
      "audioPrompt": "What color is this? It is rainbow!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "rainbow",
        "object": "Rainbow in sky",
        "emoji": "🌈"
      }
    },
    {
      "questionId": "g1_col_24",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this strawberry?",
      "promptVi": "Quả dâu tây đỏ mọng có màu gì?",
      "answerOptions": [
        "red",
        "purple",
        "green"
      ],
      "correctAnswer": "red",
      "explanation": "Spot on! The Red strawberry is red (Quả dâu tây đỏ mọng).",
      "explanationVi": "Chính xác! Quả dâu tây đỏ mọng có màu red.",
      "imageAsset": "🍓",
      "audioPrompt": "What color is this? It is red!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "red",
        "object": "Red strawberry",
        "emoji": "🍓"
      }
    },
    {
      "questionId": "g1_col_25",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this cheese?",
      "promptVi": "Miếng phô mai màu vàng có màu gì?",
      "answerOptions": [
        "yellow",
        "white",
        "orange"
      ],
      "correctAnswer": "yellow",
      "explanation": "Spot on! The Yellow cheese is yellow (Miếng phô mai màu vàng).",
      "explanationVi": "Chính xác! Miếng phô mai màu vàng có màu yellow.",
      "imageAsset": "🧀",
      "audioPrompt": "What color is this? It is yellow!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "yellow",
        "object": "Yellow cheese",
        "emoji": "🧀"
      }
    },
    {
      "questionId": "g1_col_26",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this cucumber?",
      "promptVi": "Quả dưa chuột xanh giòn có màu gì?",
      "answerOptions": [
        "green",
        "yellow",
        "red"
      ],
      "correctAnswer": "green",
      "explanation": "Spot on! The Green cucumber is green (Quả dưa chuột xanh giòn).",
      "explanationVi": "Chính xác! Quả dưa chuột xanh giòn có màu green.",
      "imageAsset": "🥒",
      "audioPrompt": "What color is this? It is green!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "green",
        "object": "Green cucumber",
        "emoji": "🥒"
      }
    },
    {
      "questionId": "g1_col_27",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this butterfly?",
      "promptVi": "Cánh bướm xanh biếc có màu gì?",
      "answerOptions": [
        "blue",
        "purple",
        "pink"
      ],
      "correctAnswer": "blue",
      "explanation": "Spot on! The Blue butterfly is blue (Cánh bướm xanh biếc).",
      "explanationVi": "Chính xác! Cánh bướm xanh biếc có màu blue.",
      "imageAsset": "🦋",
      "audioPrompt": "What color is this? It is blue!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "blue",
        "object": "Blue butterfly",
        "emoji": "🦋"
      }
    },
    {
      "questionId": "g1_col_28",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this eggplant?",
      "promptVi": "Quả cà tím có màu gì?",
      "answerOptions": [
        "purple",
        "black",
        "green"
      ],
      "correctAnswer": "purple",
      "explanation": "Spot on! The Purple eggplant is purple (Quả cà tím).",
      "explanationVi": "Chính xác! Quả cà tím có màu purple.",
      "imageAsset": "🍆",
      "audioPrompt": "What color is this? It is purple!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "purple",
        "object": "Purple eggplant",
        "emoji": "🍆"
      }
    },
    {
      "questionId": "g1_col_29",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this flamingos?",
      "promptVi": "Chim hồng hạc xinh đẹp có màu gì?",
      "answerOptions": [
        "pink",
        "white",
        "red"
      ],
      "correctAnswer": "pink",
      "explanation": "Spot on! The Pink flamingos is pink (Chim hồng hạc xinh đẹp).",
      "explanationVi": "Chính xác! Chim hồng hạc xinh đẹp có màu pink.",
      "imageAsset": "🦩",
      "audioPrompt": "What color is this? It is pink!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "pink",
        "object": "Pink flamingos",
        "emoji": "🦩"
      }
    },
    {
      "questionId": "g1_col_30",
      "grade": 1,
      "gameType": "color_magic",
      "topic": "Colors & Magic Objects",
      "difficulty": "challenge",
      "prompt": "What color is this basketball?",
      "promptVi": "Quả bóng rổ màu cam có màu gì?",
      "answerOptions": [
        "orange",
        "brown",
        "red"
      ],
      "correctAnswer": "orange",
      "explanation": "Spot on! The Orange basketball is orange (Quả bóng rổ màu cam).",
      "explanationVi": "Chính xác! Quả bóng rổ màu cam có màu orange.",
      "imageAsset": "🏀",
      "audioPrompt": "What color is this? It is orange!",
      "curriculumReference": "Global Success Grade 1 - Unit 9",
      "metadata": {
        "color": "orange",
        "object": "Orange basketball",
        "emoji": "🏀"
      }
    }
  ],
  "sound_safari": [
    {
      "questionId": "g1_saf_01",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Roar in the savannah)",
      "promptVi": "Lắng nghe! Tiếng sư tử gầm vang thảo nguyên. Đó là gì?",
      "answerOptions": [
        "lion",
        "monkey",
        "cat"
      ],
      "correctAnswer": "lion",
      "explanation": "Brilliant! The sound belongs to: lion (Tiếng sư tử gầm vang thảo nguyên).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: lion (Tiếng sư tử gầm vang thảo nguyên).",
      "imageAsset": "🦁",
      "audioPrompt": "Listen to the sound! Who makes it? The lion!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Roar in the savannah",
        "emoji": "🦁"
      }
    },
    {
      "questionId": "g1_saf_02",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Quack by the lotus pond)",
      "promptVi": "Lắng nghe! Tiếng vịt bơi hồ sen. Đó là gì?",
      "answerOptions": [
        "duck",
        "bird",
        "frog"
      ],
      "correctAnswer": "duck",
      "explanation": "Brilliant! The sound belongs to: duck (Tiếng vịt bơi hồ sen).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: duck (Tiếng vịt bơi hồ sen).",
      "imageAsset": "🦆",
      "audioPrompt": "Listen to the sound! Who makes it? The duck!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Quack by the lotus pond",
        "emoji": "🦆"
      }
    },
    {
      "questionId": "g1_saf_03",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Meow on the garden wall)",
      "promptVi": "Lắng nghe! Tiếng mèo con trên tường hoa. Đó là gì?",
      "answerOptions": [
        "cat",
        "dog",
        "fox"
      ],
      "correctAnswer": "cat",
      "explanation": "Brilliant! The sound belongs to: cat (Tiếng mèo con trên tường hoa).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: cat (Tiếng mèo con trên tường hoa).",
      "imageAsset": "🐱",
      "audioPrompt": "Listen to the sound! Who makes it? The cat!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Meow on the garden wall",
        "emoji": "🐱"
      }
    },
    {
      "questionId": "g1_saf_04",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Bark guarding the house)",
      "promptVi": "Lắng nghe! Tiếng chú chó trông nhà. Đó là gì?",
      "answerOptions": [
        "dog",
        "wolf",
        "cow"
      ],
      "correctAnswer": "dog",
      "explanation": "Brilliant! The sound belongs to: dog (Tiếng chú chó trông nhà).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: dog (Tiếng chú chó trông nhà).",
      "imageAsset": "🐶",
      "audioPrompt": "Listen to the sound! Who makes it? The dog!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Bark guarding the house",
        "emoji": "🐶"
      }
    },
    {
      "questionId": "g1_saf_05",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Croak near the rain puddle)",
      "promptVi": "Lắng nghe! Tiếng ếch kêu bên vũng nước mưa. Đó là gì?",
      "answerOptions": [
        "frog",
        "fish",
        "duck"
      ],
      "correctAnswer": "frog",
      "explanation": "Brilliant! The sound belongs to: frog (Tiếng ếch kêu bên vũng nước mưa).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: frog (Tiếng ếch kêu bên vũng nước mưa).",
      "imageAsset": "🐸",
      "audioPrompt": "Listen to the sound! Who makes it? The frog!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Croak near the rain puddle",
        "emoji": "🐸"
      }
    },
    {
      "questionId": "g1_saf_06",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Singing sweet morning tune)",
      "promptVi": "Lắng nghe! Tiếng chim hót líu lo buổi sớm. Đó là gì?",
      "answerOptions": [
        "bird",
        "chicken",
        "duck"
      ],
      "correctAnswer": "bird",
      "explanation": "Brilliant! The sound belongs to: bird (Tiếng chim hót líu lo buổi sớm).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: bird (Tiếng chim hót líu lo buổi sớm).",
      "imageAsset": "🐦",
      "audioPrompt": "Listen to the sound! Who makes it? The bird!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Singing sweet morning tune",
        "emoji": "🐦"
      }
    },
    {
      "questionId": "g1_saf_07",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Ding dong! School bell rings)",
      "promptVi": "Lắng nghe! Tiếng chuông trường reo vang. Đó là gì?",
      "answerOptions": [
        "bell",
        "horn",
        "drum"
      ],
      "correctAnswer": "bell",
      "explanation": "Brilliant! The sound belongs to: bell (Tiếng chuông trường reo vang).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: bell (Tiếng chuông trường reo vang).",
      "imageAsset": "🔔",
      "audioPrompt": "Listen to the sound! Who makes it? The bell!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Ding dong! School bell rings",
        "emoji": "🔔"
      }
    },
    {
      "questionId": "g1_saf_08",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Boom boom! Safari drum beat)",
      "promptVi": "Lắng nghe! Tiếng trống rộn rã. Đó là gì?",
      "answerOptions": [
        "drum",
        "flute",
        "piano"
      ],
      "correctAnswer": "drum",
      "explanation": "Brilliant! The sound belongs to: drum (Tiếng trống rộn rã).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: drum (Tiếng trống rộn rã).",
      "imageAsset": "🥁",
      "audioPrompt": "Listen to the sound! Who makes it? The drum!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Boom boom! Safari drum beat",
        "emoji": "🥁"
      }
    },
    {
      "questionId": "g1_saf_09",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Beep beep! Car horn)",
      "promptVi": "Lắng nghe! Tiếng còi ô tô bíp bíp. Đó là gì?",
      "answerOptions": [
        "car",
        "bike",
        "boat"
      ],
      "correctAnswer": "car",
      "explanation": "Brilliant! The sound belongs to: car (Tiếng còi ô tô bíp bíp).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: car (Tiếng còi ô tô bíp bíp).",
      "imageAsset": "🚗",
      "audioPrompt": "Listen to the sound! Who makes it? The car!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Beep beep! Car horn",
        "emoji": "🚗"
      }
    },
    {
      "questionId": "g1_saf_10",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "easy",
      "prompt": "Listen! What sound is this? (Giggle! Happy baby laugh)",
      "promptVi": "Lắng nghe! Tiếng em bé cười giòn tan. Đó là gì?",
      "answerOptions": [
        "baby",
        "boy",
        "girl"
      ],
      "correctAnswer": "baby",
      "explanation": "Brilliant! The sound belongs to: baby (Tiếng em bé cười giòn tan).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: baby (Tiếng em bé cười giòn tan).",
      "imageAsset": "👶",
      "audioPrompt": "Listen to the sound! Who makes it? The baby!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Giggle! Happy baby laugh",
        "emoji": "👶"
      }
    },
    {
      "questionId": "g1_saf_11",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Chatter in the coconut trees)",
      "promptVi": "Lắng nghe! Tiếng khỉ ríu rít trên cây dừa. Đó là gì?",
      "answerOptions": [
        "monkey",
        "bird",
        "squirrel"
      ],
      "correctAnswer": "monkey",
      "explanation": "Brilliant! The sound belongs to: monkey (Tiếng khỉ ríu rít trên cây dừa).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: monkey (Tiếng khỉ ríu rít trên cây dừa).",
      "imageAsset": "🐒",
      "audioPrompt": "Listen to the sound! Who makes it? The monkey!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Chatter in the coconut trees",
        "emoji": "🐒"
      }
    },
    {
      "questionId": "g1_saf_12",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Deep trumpet in bamboo forest)",
      "promptVi": "Lắng nghe! Tiếng voi rống trong rừng tre. Đó là gì?",
      "answerOptions": [
        "elephant",
        "lion",
        "bear"
      ],
      "correctAnswer": "elephant",
      "explanation": "Brilliant! The sound belongs to: elephant (Tiếng voi rống trong rừng tre).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: elephant (Tiếng voi rống trong rừng tre).",
      "imageAsset": "🐘",
      "audioPrompt": "Listen to the sound! Who makes it? The elephant!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Deep trumpet in bamboo forest",
        "emoji": "🐘"
      }
    },
    {
      "questionId": "g1_saf_13",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Pitter-patter falling on green leaves)",
      "promptVi": "Lắng nghe! Tiếng mưa rơi tí tách trên lá xanh. Đó là gì?",
      "answerOptions": [
        "rain",
        "wind",
        "thunder"
      ],
      "correctAnswer": "rain",
      "explanation": "Brilliant! The sound belongs to: rain (Tiếng mưa rơi tí tách trên lá xanh).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: rain (Tiếng mưa rơi tí tách trên lá xanh).",
      "imageAsset": "🌧️",
      "audioPrompt": "Listen to the sound! Who makes it? The rain!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Pitter-patter falling on green leaves",
        "emoji": "🌧️"
      }
    },
    {
      "questionId": "g1_saf_14",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Whoosh blowing through mountain pass)",
      "promptVi": "Lắng nghe! Tiếng gió thổi qua đèo cao. Đó là gì?",
      "answerOptions": [
        "wind",
        "river",
        "train"
      ],
      "correctAnswer": "wind",
      "explanation": "Brilliant! The sound belongs to: wind (Tiếng gió thổi qua đèo cao).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: wind (Tiếng gió thổi qua đèo cao).",
      "imageAsset": "💨",
      "audioPrompt": "Listen to the sound! Who makes it? The wind!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Whoosh blowing through mountain pass",
        "emoji": "💨"
      }
    },
    {
      "questionId": "g1_saf_15",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Gurgle rushing through rocks)",
      "promptVi": "Lắng nghe! Tiếng suối reo róc rách. Đó là gì?",
      "answerOptions": [
        "river",
        "rain",
        "ocean"
      ],
      "correctAnswer": "river",
      "explanation": "Brilliant! The sound belongs to: river (Tiếng suối reo róc rách).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: river (Tiếng suối reo róc rách).",
      "imageAsset": "🏞️",
      "audioPrompt": "Listen to the sound! Who makes it? The river!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Gurgle rushing through rocks",
        "emoji": "🏞️"
      }
    },
    {
      "questionId": "g1_saf_16",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Choo choo! North-South Express)",
      "promptVi": "Lắng nghe! Tiếng tàu hỏa Bắc Nam xình xịch. Đó là gì?",
      "answerOptions": [
        "train",
        "car",
        "plane"
      ],
      "correctAnswer": "train",
      "explanation": "Brilliant! The sound belongs to: train (Tiếng tàu hỏa Bắc Nam xình xịch).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: train (Tiếng tàu hỏa Bắc Nam xình xịch).",
      "imageAsset": "🚂",
      "audioPrompt": "Listen to the sound! Who makes it? The train!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Choo choo! North-South Express",
        "emoji": "🚂"
      }
    },
    {
      "questionId": "g1_saf_17",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Roar high in the clouds)",
      "promptVi": "Lắng nghe! Tiếng máy bay vút trên tầng mây. Đó là gì?",
      "answerOptions": [
        "plane",
        "bird",
        "kite"
      ],
      "correctAnswer": "plane",
      "explanation": "Brilliant! The sound belongs to: plane (Tiếng máy bay vút trên tầng mây).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: plane (Tiếng máy bay vút trên tầng mây).",
      "imageAsset": "✈️",
      "audioPrompt": "Listen to the sound! Who makes it? The plane!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Roar high in the clouds",
        "emoji": "✈️"
      }
    },
    {
      "questionId": "g1_saf_18",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Splash moving through Mekong waves)",
      "promptVi": "Lắng nghe! Tiếng thuyền rẽ sóng miền Tây. Đó là gì?",
      "answerOptions": [
        "boat",
        "car",
        "train"
      ],
      "correctAnswer": "boat",
      "explanation": "Brilliant! The sound belongs to: boat (Tiếng thuyền rẽ sóng miền Tây).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: boat (Tiếng thuyền rẽ sóng miền Tây).",
      "imageAsset": "🛶",
      "audioPrompt": "Listen to the sound! Who makes it? The boat!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Splash moving through Mekong waves",
        "emoji": "🛶"
      }
    },
    {
      "questionId": "g1_saf_19",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Tick tock! Counting time)",
      "promptVi": "Lắng nghe! Tiếng đồng hồ tích tắc. Đó là gì?",
      "answerOptions": [
        "clock",
        "bell",
        "phone"
      ],
      "correctAnswer": "clock",
      "explanation": "Brilliant! The sound belongs to: clock (Tiếng đồng hồ tích tắc).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: clock (Tiếng đồng hồ tích tắc).",
      "imageAsset": "⏰",
      "audioPrompt": "Listen to the sound! Who makes it? The clock!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Tick tock! Counting time",
        "emoji": "⏰"
      }
    },
    {
      "questionId": "g1_saf_20",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "medium",
      "prompt": "Listen! What sound is this? (Click! Taking safari picture)",
      "promptVi": "Lắng nghe! Tiếng bấm máy ảnh ghi lại khoảnh khắc. Đó là gì?",
      "answerOptions": [
        "camera",
        "phone",
        "door"
      ],
      "correctAnswer": "camera",
      "explanation": "Brilliant! The sound belongs to: camera (Tiếng bấm máy ảnh ghi lại khoảnh khắc).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: camera (Tiếng bấm máy ảnh ghi lại khoảnh khắc).",
      "imageAsset": "📷",
      "audioPrompt": "Listen to the sound! Who makes it? The camera!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Click! Taking safari picture",
        "emoji": "📷"
      }
    },
    {
      "questionId": "g1_saf_21",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Rumble before the tropical storm)",
      "promptVi": "Lắng nghe! Tiếng sấm vang trước cơn mưa nhiệt đới. Đó là gì?",
      "answerOptions": [
        "thunder",
        "drum",
        "wind"
      ],
      "correctAnswer": "thunder",
      "explanation": "Brilliant! The sound belongs to: thunder (Tiếng sấm vang trước cơn mưa nhiệt đới).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: thunder (Tiếng sấm vang trước cơn mưa nhiệt đới).",
      "imageAsset": "⚡",
      "audioPrompt": "Listen to the sound! Who makes it? The thunder!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Rumble before the tropical storm",
        "emoji": "⚡"
      }
    },
    {
      "questionId": "g1_saf_22",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Roaring drop down the cliff)",
      "promptVi": "Lắng nghe! Tiếng thác nước đổ ầm vang sườn núi. Đó là gì?",
      "answerOptions": [
        "waterfall",
        "rain",
        "wind"
      ],
      "correctAnswer": "waterfall",
      "explanation": "Brilliant! The sound belongs to: waterfall (Tiếng thác nước đổ ầm vang sườn núi).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: waterfall (Tiếng thác nước đổ ầm vang sườn núi).",
      "imageAsset": "🌊",
      "audioPrompt": "Listen to the sound! Who makes it? The waterfall!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Roaring drop down the cliff",
        "emoji": "🌊"
      }
    },
    {
      "questionId": "g1_saf_23",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Hoo in the quiet bamboo grove)",
      "promptVi": "Lắng nghe! Tiếng cú mèo đêm vắng. Đó là gì?",
      "answerOptions": [
        "owl",
        "bat",
        "wolf"
      ],
      "correctAnswer": "owl",
      "explanation": "Brilliant! The sound belongs to: owl (Tiếng cú mèo đêm vắng).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: owl (Tiếng cú mèo đêm vắng).",
      "imageAsset": "🦉",
      "audioPrompt": "Listen to the sound! Who makes it? The owl!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Hoo in the quiet bamboo grove",
        "emoji": "🦉"
      }
    },
    {
      "questionId": "g1_saf_24",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Buzzing collecting sweet lotus nectar)",
      "promptVi": "Lắng nghe! Tiếng ong vo ve hút mật hoa sen. Đó là gì?",
      "answerOptions": [
        "bee",
        "fly",
        "beetle"
      ],
      "correctAnswer": "bee",
      "explanation": "Brilliant! The sound belongs to: bee (Tiếng ong vo ve hút mật hoa sen).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: bee (Tiếng ong vo ve hút mật hoa sen).",
      "imageAsset": "🐝",
      "audioPrompt": "Listen to the sound! Who makes it? The bee!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Buzzing collecting sweet lotus nectar",
        "emoji": "🐝"
      }
    },
    {
      "questionId": "g1_saf_25",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Chirping summer night song)",
      "promptVi": "Lắng nghe! Tiếng dế gáy rỉ rả đêm hè. Đó là gì?",
      "answerOptions": [
        "cricket",
        "frog",
        "bird"
      ],
      "correctAnswer": "cricket",
      "explanation": "Brilliant! The sound belongs to: cricket (Tiếng dế gáy rỉ rả đêm hè).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: cricket (Tiếng dế gáy rỉ rả đêm hè).",
      "imageAsset": "🦗",
      "audioPrompt": "Listen to the sound! Who makes it? The cricket!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Chirping summer night song",
        "emoji": "🦗"
      }
    },
    {
      "questionId": "g1_saf_26",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Sweet melody echoing over rice fields)",
      "promptVi": "Lắng nghe! Tiếng sáo trúc vi vu đồng lúa. Đó là gì?",
      "answerOptions": [
        "flute",
        "drum",
        "bell"
      ],
      "correctAnswer": "flute",
      "explanation": "Brilliant! The sound belongs to: flute (Tiếng sáo trúc vi vu đồng lúa).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: flute (Tiếng sáo trúc vi vu đồng lúa).",
      "imageAsset": "🪈",
      "audioPrompt": "Listen to the sound! Who makes it? The flute!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Sweet melody echoing over rice fields",
        "emoji": "🪈"
      }
    },
    {
      "questionId": "g1_saf_27",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Waves lapping on Nha Trang sand)",
      "promptVi": "Lắng nghe! Tiếng sóng biển vỗ bờ cát Nha Trang. Đó là gì?",
      "answerOptions": [
        "ocean",
        "river",
        "rain"
      ],
      "correctAnswer": "ocean",
      "explanation": "Brilliant! The sound belongs to: ocean (Tiếng sóng biển vỗ bờ cát Nha Trang).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: ocean (Tiếng sóng biển vỗ bờ cát Nha Trang).",
      "imageAsset": "🏖️",
      "audioPrompt": "Listen to the sound! Who makes it? The ocean!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Waves lapping on Nha Trang sand",
        "emoji": "🏖️"
      }
    },
    {
      "questionId": "g1_saf_28",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Hoofbeats galloping along village road)",
      "promptVi": "Lắng nghe! Tiếng vó ngựa phi trên đường làng. Đó là gì?",
      "answerOptions": [
        "horse",
        "cow",
        "car"
      ],
      "correctAnswer": "horse",
      "explanation": "Brilliant! The sound belongs to: horse (Tiếng vó ngựa phi trên đường làng).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: horse (Tiếng vó ngựa phi trên đường làng).",
      "imageAsset": "🐎",
      "audioPrompt": "Listen to the sound! Who makes it? The horse!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Hoofbeats galloping along village road",
        "emoji": "🐎"
      }
    },
    {
      "questionId": "g1_saf_29",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Cock-a-doodle-doo greeting sunrise)",
      "promptVi": "Lắng nghe! Tiếng gà trống gáy vang đón bình minh. Đó là gì?",
      "answerOptions": [
        "rooster",
        "duck",
        "bird"
      ],
      "correctAnswer": "rooster",
      "explanation": "Brilliant! The sound belongs to: rooster (Tiếng gà trống gáy vang đón bình minh).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: rooster (Tiếng gà trống gáy vang đón bình minh).",
      "imageAsset": "🐓",
      "audioPrompt": "Listen to the sound! Who makes it? The rooster!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Cock-a-doodle-doo greeting sunrise",
        "emoji": "🐓"
      }
    },
    {
      "questionId": "g1_saf_30",
      "grade": 1,
      "gameType": "sound_safari",
      "topic": "Safari Sounds & Listening",
      "difficulty": "challenge",
      "prompt": "Listen! What sound is this? (Hooray! Explorers win stars)",
      "promptVi": "Lắng nghe! Tiếng reo vui khi chiến thắng. Đó là gì?",
      "answerOptions": [
        "cheering",
        "crying",
        "singing"
      ],
      "correctAnswer": "cheering",
      "explanation": "Brilliant! The sound belongs to: cheering (Tiếng reo vui khi chiến thắng).",
      "explanationVi": "Giỏi lắm! Âm thanh thuộc về: cheering (Tiếng reo vui khi chiến thắng).",
      "imageAsset": "🎉",
      "audioPrompt": "Listen to the sound! Who makes it? The cheering!",
      "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
      "metadata": {
        "desc": "Hooray! Explorers win stars",
        "emoji": "🎉"
      }
    }
  ],
  "treasure_bubbles": [
    {
      "questionId": "g1_bub_01",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'one'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 1 (one)",
      "answerOptions": [
        "one",
        "two",
        "three"
      ],
      "correctAnswer": "one",
      "explanation": "Pop! You found one (Số 1)!",
      "explanationVi": "Bốp! Con đã tìm đúng one (Số 1)!",
      "imageAsset": "1️⃣",
      "audioPrompt": "Pop the one bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "one",
        "emoji": "1️⃣"
      }
    },
    {
      "questionId": "g1_bub_02",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'two'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 2 (two)",
      "answerOptions": [
        "two",
        "one",
        "four"
      ],
      "correctAnswer": "two",
      "explanation": "Pop! You found two (Số 2)!",
      "explanationVi": "Bốp! Con đã tìm đúng two (Số 2)!",
      "imageAsset": "2️⃣",
      "audioPrompt": "Pop the two bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "two",
        "emoji": "2️⃣"
      }
    },
    {
      "questionId": "g1_bub_03",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'three'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 3 (three)",
      "answerOptions": [
        "three",
        "two",
        "five"
      ],
      "correctAnswer": "three",
      "explanation": "Pop! You found three (Số 3)!",
      "explanationVi": "Bốp! Con đã tìm đúng three (Số 3)!",
      "imageAsset": "3️⃣",
      "audioPrompt": "Pop the three bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "three",
        "emoji": "3️⃣"
      }
    },
    {
      "questionId": "g1_bub_04",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'four'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 4 (four)",
      "answerOptions": [
        "four",
        "three",
        "one"
      ],
      "correctAnswer": "four",
      "explanation": "Pop! You found four (Số 4)!",
      "explanationVi": "Bốp! Con đã tìm đúng four (Số 4)!",
      "imageAsset": "4️⃣",
      "audioPrompt": "Pop the four bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "four",
        "emoji": "4️⃣"
      }
    },
    {
      "questionId": "g1_bub_05",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'five'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 5 (five)",
      "answerOptions": [
        "five",
        "four",
        "two"
      ],
      "correctAnswer": "five",
      "explanation": "Pop! You found five (Số 5)!",
      "explanationVi": "Bốp! Con đã tìm đúng five (Số 5)!",
      "imageAsset": "5️⃣",
      "audioPrompt": "Pop the five bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "five",
        "emoji": "5️⃣"
      }
    },
    {
      "questionId": "g1_bub_06",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'six'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 6 (six)",
      "answerOptions": [
        "six",
        "seven",
        "five"
      ],
      "correctAnswer": "six",
      "explanation": "Pop! You found six (Số 6)!",
      "explanationVi": "Bốp! Con đã tìm đúng six (Số 6)!",
      "imageAsset": "6️⃣",
      "audioPrompt": "Pop the six bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "six",
        "emoji": "6️⃣"
      }
    },
    {
      "questionId": "g1_bub_07",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'seven'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 7 (seven)",
      "answerOptions": [
        "seven",
        "six",
        "eight"
      ],
      "correctAnswer": "seven",
      "explanation": "Pop! You found seven (Số 7)!",
      "explanationVi": "Bốp! Con đã tìm đúng seven (Số 7)!",
      "imageAsset": "7️⃣",
      "audioPrompt": "Pop the seven bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "seven",
        "emoji": "7️⃣"
      }
    },
    {
      "questionId": "g1_bub_08",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'eight'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 8 (eight)",
      "answerOptions": [
        "eight",
        "nine",
        "seven"
      ],
      "correctAnswer": "eight",
      "explanation": "Pop! You found eight (Số 8)!",
      "explanationVi": "Bốp! Con đã tìm đúng eight (Số 8)!",
      "imageAsset": "8️⃣",
      "audioPrompt": "Pop the eight bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "eight",
        "emoji": "8️⃣"
      }
    },
    {
      "questionId": "g1_bub_09",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'nine'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 9 (nine)",
      "answerOptions": [
        "nine",
        "eight",
        "ten"
      ],
      "correctAnswer": "nine",
      "explanation": "Pop! You found nine (Số 9)!",
      "explanationVi": "Bốp! Con đã tìm đúng nine (Số 9)!",
      "imageAsset": "9️⃣",
      "audioPrompt": "Pop the nine bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "nine",
        "emoji": "9️⃣"
      }
    },
    {
      "questionId": "g1_bub_10",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "easy",
      "prompt": "Pop the bubble with: 'ten'!",
      "promptVi": "Bấm làm nổ bong bóng có: Số 10 (ten)",
      "answerOptions": [
        "ten",
        "nine",
        "five"
      ],
      "correctAnswer": "ten",
      "explanation": "Pop! You found ten (Số 10)!",
      "explanationVi": "Bốp! Con đã tìm đúng ten (Số 10)!",
      "imageAsset": "🔟",
      "audioPrompt": "Pop the ten bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "ten",
        "emoji": "🔟"
      }
    },
    {
      "questionId": "g1_bub_11",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'pizza'!",
      "promptVi": "Bấm làm nổ bong bóng có: Bánh pizza (pizza)",
      "answerOptions": [
        "pizza",
        "bread",
        "cake"
      ],
      "correctAnswer": "pizza",
      "explanation": "Pop! You found pizza (Bánh pizza)!",
      "explanationVi": "Bốp! Con đã tìm đúng pizza (Bánh pizza)!",
      "imageAsset": "🍕",
      "audioPrompt": "Pop the pizza bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "pizza",
        "emoji": "🍕"
      }
    },
    {
      "questionId": "g1_bub_12",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'ice cream'!",
      "promptVi": "Bấm làm nổ bong bóng có: Kem que mát lạnh (ice cream)",
      "answerOptions": [
        "ice cream",
        "cake",
        "candy"
      ],
      "correctAnswer": "ice cream",
      "explanation": "Pop! You found ice cream (Kem que mát lạnh)!",
      "explanationVi": "Bốp! Con đã tìm đúng ice cream (Kem que mát lạnh)!",
      "imageAsset": "🍦",
      "audioPrompt": "Pop the ice cream bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "ice cream",
        "emoji": "🍦"
      }
    },
    {
      "questionId": "g1_bub_13",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'candy'!",
      "promptVi": "Bấm làm nổ bong bóng có: Kẹo ngọt (candy)",
      "answerOptions": [
        "candy",
        "apple",
        "milk"
      ],
      "correctAnswer": "candy",
      "explanation": "Pop! You found candy (Kẹo ngọt)!",
      "explanationVi": "Bốp! Con đã tìm đúng candy (Kẹo ngọt)!",
      "imageAsset": "🍬",
      "audioPrompt": "Pop the candy bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "candy",
        "emoji": "🍬"
      }
    },
    {
      "questionId": "g1_bub_14",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'apple'!",
      "promptVi": "Bấm làm nổ bong bóng có: Quả táo (apple)",
      "answerOptions": [
        "apple",
        "grape",
        "lemon"
      ],
      "correctAnswer": "apple",
      "explanation": "Pop! You found apple (Quả táo)!",
      "explanationVi": "Bốp! Con đã tìm đúng apple (Quả táo)!",
      "imageAsset": "🍎",
      "audioPrompt": "Pop the apple bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "apple",
        "emoji": "🍎"
      }
    },
    {
      "questionId": "g1_bub_15",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'banana'!",
      "promptVi": "Bấm làm nổ bong bóng có: Quả chuối (banana)",
      "answerOptions": [
        "banana",
        "mango",
        "orange"
      ],
      "correctAnswer": "banana",
      "explanation": "Pop! You found banana (Quả chuối)!",
      "explanationVi": "Bốp! Con đã tìm đúng banana (Quả chuối)!",
      "imageAsset": "🍌",
      "audioPrompt": "Pop the banana bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "banana",
        "emoji": "🍌"
      }
    },
    {
      "questionId": "g1_bub_16",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'orange'!",
      "promptVi": "Bấm làm nổ bong bóng có: Quả cam (orange)",
      "answerOptions": [
        "orange",
        "apple",
        "lemon"
      ],
      "correctAnswer": "orange",
      "explanation": "Pop! You found orange (Quả cam)!",
      "explanationVi": "Bốp! Con đã tìm đúng orange (Quả cam)!",
      "imageAsset": "🍊",
      "audioPrompt": "Pop the orange bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "orange",
        "emoji": "🍊"
      }
    },
    {
      "questionId": "g1_bub_17",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'grape'!",
      "promptVi": "Bấm làm nổ bong bóng có: Chùm nho (grape)",
      "answerOptions": [
        "grape",
        "berry",
        "melon"
      ],
      "correctAnswer": "grape",
      "explanation": "Pop! You found grape (Chùm nho)!",
      "explanationVi": "Bốp! Con đã tìm đúng grape (Chùm nho)!",
      "imageAsset": "🍇",
      "audioPrompt": "Pop the grape bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "grape",
        "emoji": "🍇"
      }
    },
    {
      "questionId": "g1_bub_18",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'bread'!",
      "promptVi": "Bấm làm nổ bong bóng có: Ổ bánh mì (bread)",
      "answerOptions": [
        "bread",
        "cake",
        "rice"
      ],
      "correctAnswer": "bread",
      "explanation": "Pop! You found bread (Ổ bánh mì)!",
      "explanationVi": "Bốp! Con đã tìm đúng bread (Ổ bánh mì)!",
      "imageAsset": "🍞",
      "audioPrompt": "Pop the bread bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "bread",
        "emoji": "🍞"
      }
    },
    {
      "questionId": "g1_bub_19",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'egg'!",
      "promptVi": "Bấm làm nổ bong bóng có: Quả trứng (egg)",
      "answerOptions": [
        "egg",
        "milk",
        "cheese"
      ],
      "correctAnswer": "egg",
      "explanation": "Pop! You found egg (Quả trứng)!",
      "explanationVi": "Bốp! Con đã tìm đúng egg (Quả trứng)!",
      "imageAsset": "🥚",
      "audioPrompt": "Pop the egg bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "egg",
        "emoji": "🥚"
      }
    },
    {
      "questionId": "g1_bub_20",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "medium",
      "prompt": "Pop the bubble with: 'water'!",
      "promptVi": "Bấm làm nổ bong bóng có: Cốc nước (water)",
      "answerOptions": [
        "water",
        "milk",
        "tea"
      ],
      "correctAnswer": "water",
      "explanation": "Pop! You found water (Cốc nước)!",
      "explanationVi": "Bốp! Con đã tìm đúng water (Cốc nước)!",
      "imageAsset": "💧",
      "audioPrompt": "Pop the water bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "water",
        "emoji": "💧"
      }
    },
    {
      "questionId": "g1_bub_21",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'kite'!",
      "promptVi": "Bấm làm nổ bong bóng có: Con diều (kite)",
      "answerOptions": [
        "kite",
        "balloon",
        "plane"
      ],
      "correctAnswer": "kite",
      "explanation": "Pop! You found kite (Con diều)!",
      "explanationVi": "Bốp! Con đã tìm đúng kite (Con diều)!",
      "imageAsset": "🪁",
      "audioPrompt": "Pop the kite bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "kite",
        "emoji": "🪁"
      }
    },
    {
      "questionId": "g1_bub_22",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'balloon'!",
      "promptVi": "Bấm làm nổ bong bóng có: Quả bóng bay (balloon)",
      "answerOptions": [
        "balloon",
        "ball",
        "kite"
      ],
      "correctAnswer": "balloon",
      "explanation": "Pop! You found balloon (Quả bóng bay)!",
      "explanationVi": "Bốp! Con đã tìm đúng balloon (Quả bóng bay)!",
      "imageAsset": "🎈",
      "audioPrompt": "Pop the balloon bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "balloon",
        "emoji": "🎈"
      }
    },
    {
      "questionId": "g1_bub_23",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'star'!",
      "promptVi": "Bấm làm nổ bong bóng có: Ngôi sao may mắn (star)",
      "answerOptions": [
        "star",
        "sun",
        "moon"
      ],
      "correctAnswer": "star",
      "explanation": "Pop! You found star (Ngôi sao may mắn)!",
      "explanationVi": "Bốp! Con đã tìm đúng star (Ngôi sao may mắn)!",
      "imageAsset": "⭐",
      "audioPrompt": "Pop the star bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "star",
        "emoji": "⭐"
      }
    },
    {
      "questionId": "g1_bub_24",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'heart'!",
      "promptVi": "Bấm làm nổ bong bóng có: Trái tim yêu thương (heart)",
      "answerOptions": [
        "heart",
        "star",
        "diamond"
      ],
      "correctAnswer": "heart",
      "explanation": "Pop! You found heart (Trái tim yêu thương)!",
      "explanationVi": "Bốp! Con đã tìm đúng heart (Trái tim yêu thương)!",
      "imageAsset": "💖",
      "audioPrompt": "Pop the heart bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "heart",
        "emoji": "💖"
      }
    },
    {
      "questionId": "g1_bub_25",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'gem'!",
      "promptVi": "Bấm làm nổ bong bóng có: Viên ngọc quý (gem)",
      "answerOptions": [
        "gem",
        "coin",
        "key"
      ],
      "correctAnswer": "gem",
      "explanation": "Pop! You found gem (Viên ngọc quý)!",
      "explanationVi": "Bốp! Con đã tìm đúng gem (Viên ngọc quý)!",
      "imageAsset": "💎",
      "audioPrompt": "Pop the gem bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "gem",
        "emoji": "💎"
      }
    },
    {
      "questionId": "g1_bub_26",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'key'!",
      "promptVi": "Bấm làm nổ bong bóng có: Chìa khóa vàng (key)",
      "answerOptions": [
        "key",
        "box",
        "lock"
      ],
      "correctAnswer": "key",
      "explanation": "Pop! You found key (Chìa khóa vàng)!",
      "explanationVi": "Bốp! Con đã tìm đúng key (Chìa khóa vàng)!",
      "imageAsset": "🗝️",
      "audioPrompt": "Pop the key bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "key",
        "emoji": "🗝️"
      }
    },
    {
      "questionId": "g1_bub_27",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'chest'!",
      "promptVi": "Bấm làm nổ bong bóng có: Rương kho báu (chest)",
      "answerOptions": [
        "chest",
        "bag",
        "box"
      ],
      "correctAnswer": "chest",
      "explanation": "Pop! You found chest (Rương kho báu)!",
      "explanationVi": "Bốp! Con đã tìm đúng chest (Rương kho báu)!",
      "imageAsset": "🪙",
      "audioPrompt": "Pop the chest bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "chest",
        "emoji": "🪙"
      }
    },
    {
      "questionId": "g1_bub_28",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'crown'!",
      "promptVi": "Bấm làm nổ bong bóng có: Vương miện (crown)",
      "answerOptions": [
        "crown",
        "hat",
        "cap"
      ],
      "correctAnswer": "crown",
      "explanation": "Pop! You found crown (Vương miện)!",
      "explanationVi": "Bốp! Con đã tìm đúng crown (Vương miện)!",
      "imageAsset": "👑",
      "audioPrompt": "Pop the crown bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "crown",
        "emoji": "👑"
      }
    },
    {
      "questionId": "g1_bub_29",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'flower'!",
      "promptVi": "Bấm làm nổ bong bóng có: Bông hoa xinh (flower)",
      "answerOptions": [
        "flower",
        "leaf",
        "tree"
      ],
      "correctAnswer": "flower",
      "explanation": "Pop! You found flower (Bông hoa xinh)!",
      "explanationVi": "Bốp! Con đã tìm đúng flower (Bông hoa xinh)!",
      "imageAsset": "🌺",
      "audioPrompt": "Pop the flower bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "flower",
        "emoji": "🌺"
      }
    },
    {
      "questionId": "g1_bub_30",
      "grade": 1,
      "gameType": "treasure_bubbles",
      "topic": "Numbers & Treasure Bubbles",
      "difficulty": "challenge",
      "prompt": "Pop the bubble with: 'rainbow'!",
      "promptVi": "Bấm làm nổ bong bóng có: Cầu vồng (rainbow)",
      "answerOptions": [
        "rainbow",
        "cloud",
        "sun"
      ],
      "correctAnswer": "rainbow",
      "explanation": "Pop! You found rainbow (Cầu vồng)!",
      "explanationVi": "Bốp! Con đã tìm đúng rainbow (Cầu vồng)!",
      "imageAsset": "🌈",
      "audioPrompt": "Pop the rainbow bubble!",
      "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
      "metadata": {
        "bubbleItem": "rainbow",
        "emoji": "🌈"
      }
    }
  ],
  "memory_flip": [
    {
      "questionId": "g2_mem_01",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'pencil'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cây bút chì (pencil)",
      "answerOptions": [
        "pencil",
        "pen",
        "ruler"
      ],
      "correctAnswer": "pencil",
      "explanation": "Match found! 'pencil' means 'Cây bút chì'.",
      "explanationVi": "Đã ghép đúng! 'pencil' nghĩa là 'Cây bút chì'.",
      "imageAsset": "✏️",
      "audioPrompt": "Can you find the pencil?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "pencil",
        "pairImage": "✏️",
        "meaningVi": "Cây bút chì"
      }
    },
    {
      "questionId": "g2_mem_02",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'ruler'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cây thước kẻ (ruler)",
      "answerOptions": [
        "ruler",
        "eraser",
        "pencil"
      ],
      "correctAnswer": "ruler",
      "explanation": "Match found! 'ruler' means 'Cây thước kẻ'.",
      "explanationVi": "Đã ghép đúng! 'ruler' nghĩa là 'Cây thước kẻ'.",
      "imageAsset": "📏",
      "audioPrompt": "Can you find the ruler?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "ruler",
        "pairImage": "📏",
        "meaningVi": "Cây thước kẻ"
      }
    },
    {
      "questionId": "g2_mem_03",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'eraser'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cục tẩy (eraser)",
      "answerOptions": [
        "eraser",
        "ruler",
        "book"
      ],
      "correctAnswer": "eraser",
      "explanation": "Match found! 'eraser' means 'Cục tẩy'.",
      "explanationVi": "Đã ghép đúng! 'eraser' nghĩa là 'Cục tẩy'.",
      "imageAsset": "🧼",
      "audioPrompt": "Can you find the eraser?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "eraser",
        "pairImage": "🧼",
        "meaningVi": "Cục tẩy"
      }
    },
    {
      "questionId": "g2_mem_04",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'book'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Quyển sách (book)",
      "answerOptions": [
        "book",
        "bag",
        "pencil"
      ],
      "correctAnswer": "book",
      "explanation": "Match found! 'book' means 'Quyển sách'.",
      "explanationVi": "Đã ghép đúng! 'book' nghĩa là 'Quyển sách'.",
      "imageAsset": "📖",
      "audioPrompt": "Can you find the book?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "book",
        "pairImage": "📖",
        "meaningVi": "Quyển sách"
      }
    },
    {
      "questionId": "g2_mem_05",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'pen'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cây bút mực (pen)",
      "answerOptions": [
        "pen",
        "pencil",
        "crayon"
      ],
      "correctAnswer": "pen",
      "explanation": "Match found! 'pen' means 'Cây bút mực'.",
      "explanationVi": "Đã ghép đúng! 'pen' nghĩa là 'Cây bút mực'.",
      "imageAsset": "🖊️",
      "audioPrompt": "Can you find the pen?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "pen",
        "pairImage": "🖊️",
        "meaningVi": "Cây bút mực"
      }
    },
    {
      "questionId": "g2_mem_06",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'bag'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Chiếc cặp (bag)",
      "answerOptions": [
        "bag",
        "hat",
        "shoes"
      ],
      "correctAnswer": "bag",
      "explanation": "Match found! 'bag' means 'Chiếc cặp'.",
      "explanationVi": "Đã ghép đúng! 'bag' nghĩa là 'Chiếc cặp'.",
      "imageAsset": "🎒",
      "audioPrompt": "Can you find the bag?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "bag",
        "pairImage": "🎒",
        "meaningVi": "Chiếc cặp"
      }
    },
    {
      "questionId": "g2_mem_07",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'desk'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Bàn học (desk)",
      "answerOptions": [
        "desk",
        "chair",
        "bed"
      ],
      "correctAnswer": "desk",
      "explanation": "Match found! 'desk' means 'Bàn học'.",
      "explanationVi": "Đã ghép đúng! 'desk' nghĩa là 'Bàn học'.",
      "imageAsset": "🪑",
      "audioPrompt": "Can you find the desk?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "desk",
        "pairImage": "🪑",
        "meaningVi": "Bàn học"
      }
    },
    {
      "questionId": "g2_mem_08",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'chair'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cái ghế (chair)",
      "answerOptions": [
        "chair",
        "desk",
        "door"
      ],
      "correctAnswer": "chair",
      "explanation": "Match found! 'chair' means 'Cái ghế'.",
      "explanationVi": "Đã ghép đúng! 'chair' nghĩa là 'Cái ghế'.",
      "imageAsset": "🪑",
      "audioPrompt": "Can you find the chair?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "chair",
        "pairImage": "🪑",
        "meaningVi": "Cái ghế"
      }
    },
    {
      "questionId": "g2_mem_09",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'crayon'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Bút sáp màu (crayon)",
      "answerOptions": [
        "crayon",
        "pencil",
        "ruler"
      ],
      "correctAnswer": "crayon",
      "explanation": "Match found! 'crayon' means 'Bút sáp màu'.",
      "explanationVi": "Đã ghép đúng! 'crayon' nghĩa là 'Bút sáp màu'.",
      "imageAsset": "🖍️",
      "audioPrompt": "Can you find the crayon?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "crayon",
        "pairImage": "🖍️",
        "meaningVi": "Bút sáp màu"
      }
    },
    {
      "questionId": "g2_mem_10",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "easy",
      "prompt": "Flip and match: Find 'clock'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Đồng hồ treo tường (clock)",
      "answerOptions": [
        "clock",
        "watch",
        "bell"
      ],
      "correctAnswer": "clock",
      "explanation": "Match found! 'clock' means 'Đồng hồ treo tường'.",
      "explanationVi": "Đã ghép đúng! 'clock' nghĩa là 'Đồng hồ treo tường'.",
      "imageAsset": "⏰",
      "audioPrompt": "Can you find the clock?",
      "curriculumReference": "Global Success Grade 2 - Unit 5: In the Classroom",
      "metadata": {
        "pairWord": "clock",
        "pairImage": "⏰",
        "meaningVi": "Đồng hồ treo tường"
      }
    },
    {
      "questionId": "g2_mem_11",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'shirt'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Áo sơ mi (shirt)",
      "answerOptions": [
        "shirt",
        "dress",
        "hat"
      ],
      "correctAnswer": "shirt",
      "explanation": "Match found! 'shirt' means 'Áo sơ mi'.",
      "explanationVi": "Đã ghép đúng! 'shirt' nghĩa là 'Áo sơ mi'.",
      "imageAsset": "👔",
      "audioPrompt": "Can you find the shirt?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "shirt",
        "pairImage": "👔",
        "meaningVi": "Áo sơ mi"
      }
    },
    {
      "questionId": "g2_mem_12",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'dress'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Chiếc váy xinh (dress)",
      "answerOptions": [
        "dress",
        "skirt",
        "shirt"
      ],
      "correctAnswer": "dress",
      "explanation": "Match found! 'dress' means 'Chiếc váy xinh'.",
      "explanationVi": "Đã ghép đúng! 'dress' nghĩa là 'Chiếc váy xinh'.",
      "imageAsset": "👗",
      "audioPrompt": "Can you find the dress?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "dress",
        "pairImage": "👗",
        "meaningVi": "Chiếc váy xinh"
      }
    },
    {
      "questionId": "g2_mem_13",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'shoes'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Đôi giày (shoes)",
      "answerOptions": [
        "shoes",
        "socks",
        "boots"
      ],
      "correctAnswer": "shoes",
      "explanation": "Match found! 'shoes' means 'Đôi giày'.",
      "explanationVi": "Đã ghép đúng! 'shoes' nghĩa là 'Đôi giày'.",
      "imageAsset": "👟",
      "audioPrompt": "Can you find the shoes?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "shoes",
        "pairImage": "👟",
        "meaningVi": "Đôi giày"
      }
    },
    {
      "questionId": "g2_mem_14",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'socks'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Đôi tất (socks)",
      "answerOptions": [
        "socks",
        "shoes",
        "gloves"
      ],
      "correctAnswer": "socks",
      "explanation": "Match found! 'socks' means 'Đôi tất'.",
      "explanationVi": "Đã ghép đúng! 'socks' nghĩa là 'Đôi tất'.",
      "imageAsset": "🧦",
      "audioPrompt": "Can you find the socks?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "socks",
        "pairImage": "🧦",
        "meaningVi": "Đôi tất"
      }
    },
    {
      "questionId": "g2_mem_15",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'hat'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Chiếc mũ che nắng (hat)",
      "answerOptions": [
        "hat",
        "cap",
        "bag"
      ],
      "correctAnswer": "hat",
      "explanation": "Match found! 'hat' means 'Chiếc mũ che nắng'.",
      "explanationVi": "Đã ghép đúng! 'hat' nghĩa là 'Chiếc mũ che nắng'.",
      "imageAsset": "👒",
      "audioPrompt": "Can you find the hat?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "hat",
        "pairImage": "👒",
        "meaningVi": "Chiếc mũ che nắng"
      }
    },
    {
      "questionId": "g2_mem_16",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'shorts'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Quần soóc (shorts)",
      "answerOptions": [
        "shorts",
        "pants",
        "skirt"
      ],
      "correctAnswer": "shorts",
      "explanation": "Match found! 'shorts' means 'Quần soóc'.",
      "explanationVi": "Đã ghép đúng! 'shorts' nghĩa là 'Quần soóc'.",
      "imageAsset": "🩳",
      "audioPrompt": "Can you find the shorts?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "shorts",
        "pairImage": "🩳",
        "meaningVi": "Quần soóc"
      }
    },
    {
      "questionId": "g2_mem_17",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'jacket'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Áo khoác (jacket)",
      "answerOptions": [
        "jacket",
        "shirt",
        "coat"
      ],
      "correctAnswer": "jacket",
      "explanation": "Match found! 'jacket' means 'Áo khoác'.",
      "explanationVi": "Đã ghép đúng! 'jacket' nghĩa là 'Áo khoác'.",
      "imageAsset": "🧥",
      "audioPrompt": "Can you find the jacket?",
      "curriculumReference": "Global Success Grade 2 - Unit 7: My Clothes",
      "metadata": {
        "pairWord": "jacket",
        "pairImage": "🧥",
        "meaningVi": "Áo khoác"
      }
    },
    {
      "questionId": "g2_mem_18",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'bread'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Bánh mì giòn (bread)",
      "answerOptions": [
        "bread",
        "rice",
        "cake"
      ],
      "correctAnswer": "bread",
      "explanation": "Match found! 'bread' means 'Bánh mì giòn'.",
      "explanationVi": "Đã ghép đúng! 'bread' nghĩa là 'Bánh mì giòn'.",
      "imageAsset": "🥖",
      "audioPrompt": "Can you find the bread?",
      "curriculumReference": "Global Success Grade 2 - Unit 1: At My Birthday Party",
      "metadata": {
        "pairWord": "bread",
        "pairImage": "🥖",
        "meaningVi": "Bánh mì giòn"
      }
    },
    {
      "questionId": "g2_mem_19",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'milk'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Ly sữa tươi (milk)",
      "answerOptions": [
        "milk",
        "water",
        "juice"
      ],
      "correctAnswer": "milk",
      "explanation": "Match found! 'milk' means 'Ly sữa tươi'.",
      "explanationVi": "Đã ghép đúng! 'milk' nghĩa là 'Ly sữa tươi'.",
      "imageAsset": "🥛",
      "audioPrompt": "Can you find the milk?",
      "curriculumReference": "Global Success Grade 2 - Unit 1: At My Birthday Party",
      "metadata": {
        "pairWord": "milk",
        "pairImage": "🥛",
        "meaningVi": "Ly sữa tươi"
      }
    },
    {
      "questionId": "g2_mem_20",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "medium",
      "prompt": "Flip and match: Find 'apple'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Quả táo đỏ (apple)",
      "answerOptions": [
        "apple",
        "banana",
        "orange"
      ],
      "correctAnswer": "apple",
      "explanation": "Match found! 'apple' means 'Quả táo đỏ'.",
      "explanationVi": "Đã ghép đúng! 'apple' nghĩa là 'Quả táo đỏ'.",
      "imageAsset": "🍎",
      "audioPrompt": "Can you find the apple?",
      "curriculumReference": "Global Success Grade 2 - Unit 1: At My Birthday Party",
      "metadata": {
        "pairWord": "apple",
        "pairImage": "🍎",
        "meaningVi": "Quả táo đỏ"
      }
    },
    {
      "questionId": "g2_mem_21",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'river'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Dòng sông êm đềm (river)",
      "answerOptions": [
        "river",
        "lake",
        "sea"
      ],
      "correctAnswer": "river",
      "explanation": "Match found! 'river' means 'Dòng sông êm đềm'.",
      "explanationVi": "Đã ghép đúng! 'river' nghĩa là 'Dòng sông êm đềm'.",
      "imageAsset": "🏞️",
      "audioPrompt": "Can you find the river?",
      "curriculumReference": "Global Success Grade 2 - Unit 4: In the Countryside",
      "metadata": {
        "pairWord": "river",
        "pairImage": "🏞️",
        "meaningVi": "Dòng sông êm đềm"
      }
    },
    {
      "questionId": "g2_mem_22",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'rainbow'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cầu vồng rực rỡ (rainbow)",
      "answerOptions": [
        "rainbow",
        "cloud",
        "sun"
      ],
      "correctAnswer": "rainbow",
      "explanation": "Match found! 'rainbow' means 'Cầu vồng rực rỡ'.",
      "explanationVi": "Đã ghép đúng! 'rainbow' nghĩa là 'Cầu vồng rực rỡ'.",
      "imageAsset": "🌈",
      "audioPrompt": "Can you find the rainbow?",
      "curriculumReference": "Global Success Grade 2 - Unit 4: In the Countryside",
      "metadata": {
        "pairWord": "rainbow",
        "pairImage": "🌈",
        "meaningVi": "Cầu vồng rực rỡ"
      }
    },
    {
      "questionId": "g2_mem_23",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'road'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Con đường làng (road)",
      "answerOptions": [
        "road",
        "street",
        "bridge"
      ],
      "correctAnswer": "road",
      "explanation": "Match found! 'road' means 'Con đường làng'.",
      "explanationVi": "Đã ghép đúng! 'road' nghĩa là 'Con đường làng'.",
      "imageAsset": "🛣️",
      "audioPrompt": "Can you find the road?",
      "curriculumReference": "Global Success Grade 2 - Unit 4: In the Countryside",
      "metadata": {
        "pairWord": "road",
        "pairImage": "🛣️",
        "meaningVi": "Con đường làng"
      }
    },
    {
      "questionId": "g2_mem_24",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'sea'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Biển xanh bao la (sea)",
      "answerOptions": [
        "sea",
        "lake",
        "river"
      ],
      "correctAnswer": "sea",
      "explanation": "Match found! 'sea' means 'Biển xanh bao la'.",
      "explanationVi": "Đã ghép đúng! 'sea' nghĩa là 'Biển xanh bao la'.",
      "imageAsset": "🌊",
      "audioPrompt": "Can you find the sea?",
      "curriculumReference": "Global Success Grade 2 - Unit 3: At the Seaside",
      "metadata": {
        "pairWord": "sea",
        "pairImage": "🌊",
        "meaningVi": "Biển xanh bao la"
      }
    },
    {
      "questionId": "g2_mem_25",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'sand'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Bãi cát trắng mịn (sand)",
      "answerOptions": [
        "sand",
        "rock",
        "shell"
      ],
      "correctAnswer": "sand",
      "explanation": "Match found! 'sand' means 'Bãi cát trắng mịn'.",
      "explanationVi": "Đã ghép đúng! 'sand' nghĩa là 'Bãi cát trắng mịn'.",
      "imageAsset": "🏖️",
      "audioPrompt": "Can you find the sand?",
      "curriculumReference": "Global Success Grade 2 - Unit 3: At the Seaside",
      "metadata": {
        "pairWord": "sand",
        "pairImage": "🏖️",
        "meaningVi": "Bãi cát trắng mịn"
      }
    },
    {
      "questionId": "g2_mem_26",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'sail'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cánh buồm đón gió (sail)",
      "answerOptions": [
        "sail",
        "boat",
        "ship"
      ],
      "correctAnswer": "sail",
      "explanation": "Match found! 'sail' means 'Cánh buồm đón gió'.",
      "explanationVi": "Đã ghép đúng! 'sail' nghĩa là 'Cánh buồm đón gió'.",
      "imageAsset": "⛵",
      "audioPrompt": "Can you find the sail?",
      "curriculumReference": "Global Success Grade 2 - Unit 3: At the Seaside",
      "metadata": {
        "pairWord": "sail",
        "pairImage": "⛵",
        "meaningVi": "Cánh buồm đón gió"
      }
    },
    {
      "questionId": "g2_mem_27",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'sunflower'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Hoa hướng dương (sunflower)",
      "answerOptions": [
        "sunflower",
        "rose",
        "lotus"
      ],
      "correctAnswer": "sunflower",
      "explanation": "Match found! 'sunflower' means 'Hoa hướng dương'.",
      "explanationVi": "Đã ghép đúng! 'sunflower' nghĩa là 'Hoa hướng dương'.",
      "imageAsset": "🌻",
      "audioPrompt": "Can you find the sunflower?",
      "curriculumReference": "Global Success Grade 2 - Unit 4: In the Countryside",
      "metadata": {
        "pairWord": "sunflower",
        "pairImage": "🌻",
        "meaningVi": "Hoa hướng dương"
      }
    },
    {
      "questionId": "g2_mem_28",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'butterfly'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Chú bướm xinh (butterfly)",
      "answerOptions": [
        "butterfly",
        "bee",
        "bird"
      ],
      "correctAnswer": "butterfly",
      "explanation": "Match found! 'butterfly' means 'Chú bướm xinh'.",
      "explanationVi": "Đã ghép đúng! 'butterfly' nghĩa là 'Chú bướm xinh'.",
      "imageAsset": "🦋",
      "audioPrompt": "Can you find the butterfly?",
      "curriculumReference": "Global Success Grade 2 - Unit 2: In the Backyard",
      "metadata": {
        "pairWord": "butterfly",
        "pairImage": "🦋",
        "meaningVi": "Chú bướm xinh"
      }
    },
    {
      "questionId": "g2_mem_29",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'kitten'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Mèo con đáng yêu (kitten)",
      "answerOptions": [
        "kitten",
        "puppy",
        "rabbit"
      ],
      "correctAnswer": "kitten",
      "explanation": "Match found! 'kitten' means 'Mèo con đáng yêu'.",
      "explanationVi": "Đã ghép đúng! 'kitten' nghĩa là 'Mèo con đáng yêu'.",
      "imageAsset": "🐱",
      "audioPrompt": "Can you find the kitten?",
      "curriculumReference": "Global Success Grade 2 - Unit 2: In the Backyard",
      "metadata": {
        "pairWord": "kitten",
        "pairImage": "🐱",
        "meaningVi": "Mèo con đáng yêu"
      }
    },
    {
      "questionId": "g2_mem_30",
      "grade": 2,
      "gameType": "memory_flip",
      "topic": "Classroom & Daily Life Memory",
      "difficulty": "challenge",
      "prompt": "Flip and match: Find 'kite'!",
      "promptVi": "Lật thẻ tìm cặp từ tương ứng: Cánh diều bay cao (kite)",
      "answerOptions": [
        "kite",
        "balloon",
        "plane"
      ],
      "correctAnswer": "kite",
      "explanation": "Match found! 'kite' means 'Cánh diều bay cao'.",
      "explanationVi": "Đã ghép đúng! 'kite' nghĩa là 'Cánh diều bay cao'.",
      "imageAsset": "🪁",
      "audioPrompt": "Can you find the kite?",
      "curriculumReference": "Global Success Grade 2 - Unit 2: In the Backyard",
      "metadata": {
        "pairWord": "kite",
        "pairImage": "🪁",
        "meaningVi": "Cánh diều bay cao"
      }
    }
  ],
  "word_picture_match": [
    {
      "questionId": "g2_wpm_01",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'notebook' to its picture!",
      "promptVi": "Nối từ 'notebook' với hình ảnh tương ứng (Quyển vở ghi chép)",
      "answerOptions": [
        "notebook",
        "book",
        "pencil"
      ],
      "correctAnswer": "notebook",
      "explanation": "Correct connection! 'notebook' corresponds to 'Quyển vở ghi chép'.",
      "explanationVi": "Nối chính xác! 'notebook' tương ứng với 'Quyển vở ghi chép'.",
      "imageAsset": "📓",
      "audioPrompt": "Connect notebook to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "notebook",
        "emoji": "📓",
        "vi": "Quyển vở ghi chép"
      }
    },
    {
      "questionId": "g2_wpm_02",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'pencil case' to its picture!",
      "promptVi": "Nối từ 'pencil case' với hình ảnh tương ứng (Hộp bút)",
      "answerOptions": [
        "pencil case",
        "bag",
        "box"
      ],
      "correctAnswer": "pencil case",
      "explanation": "Correct connection! 'pencil case' corresponds to 'Hộp bút'.",
      "explanationVi": "Nối chính xác! 'pencil case' tương ứng với 'Hộp bút'.",
      "imageAsset": "👝",
      "audioPrompt": "Connect pencil case to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "pencil case",
        "emoji": "👝",
        "vi": "Hộp bút"
      }
    },
    {
      "questionId": "g2_wpm_03",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'scissors' to its picture!",
      "promptVi": "Nối từ 'scissors' với hình ảnh tương ứng (Cái kéo)",
      "answerOptions": [
        "scissors",
        "ruler",
        "pen"
      ],
      "correctAnswer": "scissors",
      "explanation": "Correct connection! 'scissors' corresponds to 'Cái kéo'.",
      "explanationVi": "Nối chính xác! 'scissors' tương ứng với 'Cái kéo'.",
      "imageAsset": "✂️",
      "audioPrompt": "Connect scissors to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "scissors",
        "emoji": "✂️",
        "vi": "Cái kéo"
      }
    },
    {
      "questionId": "g2_wpm_04",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'glue' to its picture!",
      "promptVi": "Nối từ 'glue' với hình ảnh tương ứng (Lọ keo dán)",
      "answerOptions": [
        "glue",
        "ink",
        "paint"
      ],
      "correctAnswer": "glue",
      "explanation": "Correct connection! 'glue' corresponds to 'Lọ keo dán'.",
      "explanationVi": "Nối chính xác! 'glue' tương ứng với 'Lọ keo dán'.",
      "imageAsset": "🧴",
      "audioPrompt": "Connect glue to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "glue",
        "emoji": "🧴",
        "vi": "Lọ keo dán"
      }
    },
    {
      "questionId": "g2_wpm_05",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'table' to its picture!",
      "promptVi": "Nối từ 'table' với hình ảnh tương ứng (Cái bàn lớn)",
      "answerOptions": [
        "table",
        "chair",
        "desk"
      ],
      "correctAnswer": "table",
      "explanation": "Correct connection! 'table' corresponds to 'Cái bàn lớn'.",
      "explanationVi": "Nối chính xác! 'table' tương ứng với 'Cái bàn lớn'.",
      "imageAsset": "🪵",
      "audioPrompt": "Connect table to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "table",
        "emoji": "🪵",
        "vi": "Cái bàn lớn"
      }
    },
    {
      "questionId": "g2_wpm_06",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'window' to its picture!",
      "promptVi": "Nối từ 'window' với hình ảnh tương ứng (Cửa sổ)",
      "answerOptions": [
        "window",
        "door",
        "wall"
      ],
      "correctAnswer": "window",
      "explanation": "Correct connection! 'window' corresponds to 'Cửa sổ'.",
      "explanationVi": "Nối chính xác! 'window' tương ứng với 'Cửa sổ'.",
      "imageAsset": "🪟",
      "audioPrompt": "Connect window to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "window",
        "emoji": "🪟",
        "vi": "Cửa sổ"
      }
    },
    {
      "questionId": "g2_wpm_07",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'blackboard' to its picture!",
      "promptVi": "Nối từ 'blackboard' với hình ảnh tương ứng (Bảng đen)",
      "answerOptions": [
        "blackboard",
        "picture",
        "door"
      ],
      "correctAnswer": "blackboard",
      "explanation": "Correct connection! 'blackboard' corresponds to 'Bảng đen'.",
      "explanationVi": "Nối chính xác! 'blackboard' tương ứng với 'Bảng đen'.",
      "imageAsset": "⬛",
      "audioPrompt": "Connect blackboard to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "blackboard",
        "emoji": "⬛",
        "vi": "Bảng đen"
      }
    },
    {
      "questionId": "g2_wpm_08",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'school yard' to its picture!",
      "promptVi": "Nối từ 'school yard' với hình ảnh tương ứng (Sân trường)",
      "answerOptions": [
        "school yard",
        "classroom",
        "garden"
      ],
      "correctAnswer": "school yard",
      "explanation": "Correct connection! 'school yard' corresponds to 'Sân trường'.",
      "explanationVi": "Nối chính xác! 'school yard' tương ứng với 'Sân trường'.",
      "imageAsset": "🏫",
      "audioPrompt": "Connect school yard to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "school yard",
        "emoji": "🏫",
        "vi": "Sân trường"
      }
    },
    {
      "questionId": "g2_wpm_09",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'teacher' to its picture!",
      "promptVi": "Nối từ 'teacher' với hình ảnh tương ứng (Cô giáo)",
      "answerOptions": [
        "teacher",
        "student",
        "friend"
      ],
      "correctAnswer": "teacher",
      "explanation": "Correct connection! 'teacher' corresponds to 'Cô giáo'.",
      "explanationVi": "Nối chính xác! 'teacher' tương ứng với 'Cô giáo'.",
      "imageAsset": "👩‍🏫",
      "audioPrompt": "Connect teacher to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "teacher",
        "emoji": "👩‍🏫",
        "vi": "Cô giáo"
      }
    },
    {
      "questionId": "g2_wpm_10",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "easy",
      "prompt": "Connect the word 'classmate' to its picture!",
      "promptVi": "Nối từ 'classmate' với hình ảnh tương ứng (Bạn cùng lớp)",
      "answerOptions": [
        "classmate",
        "teacher",
        "sister"
      ],
      "correctAnswer": "classmate",
      "explanation": "Correct connection! 'classmate' corresponds to 'Bạn cùng lớp'.",
      "explanationVi": "Nối chính xác! 'classmate' tương ứng với 'Bạn cùng lớp'.",
      "imageAsset": "🧑‍🤝‍🧑",
      "audioPrompt": "Connect classmate to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "classmate",
        "emoji": "🧑‍🤝‍🧑",
        "vi": "Bạn cùng lớp"
      }
    },
    {
      "questionId": "g2_wpm_11",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'banana' to its picture!",
      "promptVi": "Nối từ 'banana' với hình ảnh tương ứng (Quả chuối)",
      "answerOptions": [
        "banana",
        "apple",
        "grape"
      ],
      "correctAnswer": "banana",
      "explanation": "Correct connection! 'banana' corresponds to 'Quả chuối'.",
      "explanationVi": "Nối chính xác! 'banana' tương ứng với 'Quả chuối'.",
      "imageAsset": "🍌",
      "audioPrompt": "Connect banana to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "banana",
        "emoji": "🍌",
        "vi": "Quả chuối"
      }
    },
    {
      "questionId": "g2_wpm_12",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'orange' to its picture!",
      "promptVi": "Nối từ 'orange' với hình ảnh tương ứng (Quả cam)",
      "answerOptions": [
        "orange",
        "lemon",
        "apple"
      ],
      "correctAnswer": "orange",
      "explanation": "Correct connection! 'orange' corresponds to 'Quả cam'.",
      "explanationVi": "Nối chính xác! 'orange' tương ứng với 'Quả cam'.",
      "imageAsset": "🍊",
      "audioPrompt": "Connect orange to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "orange",
        "emoji": "🍊",
        "vi": "Quả cam"
      }
    },
    {
      "questionId": "g2_wpm_13",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'watermelon' to its picture!",
      "promptVi": "Nối từ 'watermelon' với hình ảnh tương ứng (Quả dưa hấu)",
      "answerOptions": [
        "watermelon",
        "melon",
        "grape"
      ],
      "correctAnswer": "watermelon",
      "explanation": "Correct connection! 'watermelon' corresponds to 'Quả dưa hấu'.",
      "explanationVi": "Nối chính xác! 'watermelon' tương ứng với 'Quả dưa hấu'.",
      "imageAsset": "🍉",
      "audioPrompt": "Connect watermelon to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "watermelon",
        "emoji": "🍉",
        "vi": "Quả dưa hấu"
      }
    },
    {
      "questionId": "g2_wpm_14",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'mango' to its picture!",
      "promptVi": "Nối từ 'mango' với hình ảnh tương ứng (Quả xoài)",
      "answerOptions": [
        "mango",
        "banana",
        "papaya"
      ],
      "correctAnswer": "mango",
      "explanation": "Correct connection! 'mango' corresponds to 'Quả xoài'.",
      "explanationVi": "Nối chính xác! 'mango' tương ứng với 'Quả xoài'.",
      "imageAsset": "🥭",
      "audioPrompt": "Connect mango to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "mango",
        "emoji": "🥭",
        "vi": "Quả xoài"
      }
    },
    {
      "questionId": "g2_wpm_15",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'coconut' to its picture!",
      "promptVi": "Nối từ 'coconut' với hình ảnh tương ứng (Quả dừa)",
      "answerOptions": [
        "coconut",
        "apple",
        "lime"
      ],
      "correctAnswer": "coconut",
      "explanation": "Correct connection! 'coconut' corresponds to 'Quả dừa'.",
      "explanationVi": "Nối chính xác! 'coconut' tương ứng với 'Quả dừa'.",
      "imageAsset": "🥥",
      "audioPrompt": "Connect coconut to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "coconut",
        "emoji": "🥥",
        "vi": "Quả dừa"
      }
    },
    {
      "questionId": "g2_wpm_16",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'noodles' to its picture!",
      "promptVi": "Nối từ 'noodles' với hình ảnh tương ứng (Bát mì/phở)",
      "answerOptions": [
        "noodles",
        "rice",
        "bread"
      ],
      "correctAnswer": "noodles",
      "explanation": "Correct connection! 'noodles' corresponds to 'Bát mì/phở'.",
      "explanationVi": "Nối chính xác! 'noodles' tương ứng với 'Bát mì/phở'.",
      "imageAsset": "🍜",
      "audioPrompt": "Connect noodles to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "noodles",
        "emoji": "🍜",
        "vi": "Bát mì/phở"
      }
    },
    {
      "questionId": "g2_wpm_17",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'rice' to its picture!",
      "promptVi": "Nối từ 'rice' với hình ảnh tương ứng (Bát cơm trắng)",
      "answerOptions": [
        "rice",
        "noodles",
        "soup"
      ],
      "correctAnswer": "rice",
      "explanation": "Correct connection! 'rice' corresponds to 'Bát cơm trắng'.",
      "explanationVi": "Nối chính xác! 'rice' tương ứng với 'Bát cơm trắng'.",
      "imageAsset": "🍚",
      "audioPrompt": "Connect rice to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "rice",
        "emoji": "🍚",
        "vi": "Bát cơm trắng"
      }
    },
    {
      "questionId": "g2_wpm_18",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'egg' to its picture!",
      "promptVi": "Nối từ 'egg' với hình ảnh tương ứng (Quả trứng)",
      "answerOptions": [
        "egg",
        "cake",
        "bread"
      ],
      "correctAnswer": "egg",
      "explanation": "Correct connection! 'egg' corresponds to 'Quả trứng'.",
      "explanationVi": "Nối chính xác! 'egg' tương ứng với 'Quả trứng'.",
      "imageAsset": "🥚",
      "audioPrompt": "Connect egg to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "egg",
        "emoji": "🥚",
        "vi": "Quả trứng"
      }
    },
    {
      "questionId": "g2_wpm_19",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'soup' to its picture!",
      "promptVi": "Nối từ 'soup' với hình ảnh tương ứng (Bát canh)",
      "answerOptions": [
        "soup",
        "tea",
        "milk"
      ],
      "correctAnswer": "soup",
      "explanation": "Correct connection! 'soup' corresponds to 'Bát canh'.",
      "explanationVi": "Nối chính xác! 'soup' tương ứng với 'Bát canh'.",
      "imageAsset": "🥣",
      "audioPrompt": "Connect soup to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "soup",
        "emoji": "🥣",
        "vi": "Bát canh"
      }
    },
    {
      "questionId": "g2_wpm_20",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "medium",
      "prompt": "Connect the word 'juice' to its picture!",
      "promptVi": "Nối từ 'juice' với hình ảnh tương ứng (Nước ép hoa quả)",
      "answerOptions": [
        "juice",
        "water",
        "milk"
      ],
      "correctAnswer": "juice",
      "explanation": "Correct connection! 'juice' corresponds to 'Nước ép hoa quả'.",
      "explanationVi": "Nối chính xác! 'juice' tương ứng với 'Nước ép hoa quả'.",
      "imageAsset": "🧃",
      "audioPrompt": "Connect juice to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "juice",
        "emoji": "🧃",
        "vi": "Nước ép hoa quả"
      }
    },
    {
      "questionId": "g2_wpm_21",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'living room' to its picture!",
      "promptVi": "Nối từ 'living room' với hình ảnh tương ứng (Phòng khách)",
      "answerOptions": [
        "living room",
        "bedroom",
        "kitchen"
      ],
      "correctAnswer": "living room",
      "explanation": "Correct connection! 'living room' corresponds to 'Phòng khách'.",
      "explanationVi": "Nối chính xác! 'living room' tương ứng với 'Phòng khách'.",
      "imageAsset": "🛋️",
      "audioPrompt": "Connect living room to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "living room",
        "emoji": "🛋️",
        "vi": "Phòng khách"
      }
    },
    {
      "questionId": "g2_wpm_22",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'bedroom' to its picture!",
      "promptVi": "Nối từ 'bedroom' với hình ảnh tương ứng (Phòng ngủ)",
      "answerOptions": [
        "bedroom",
        "bathroom",
        "kitchen"
      ],
      "correctAnswer": "bedroom",
      "explanation": "Correct connection! 'bedroom' corresponds to 'Phòng ngủ'.",
      "explanationVi": "Nối chính xác! 'bedroom' tương ứng với 'Phòng ngủ'.",
      "imageAsset": "🛏️",
      "audioPrompt": "Connect bedroom to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "bedroom",
        "emoji": "🛏️",
        "vi": "Phòng ngủ"
      }
    },
    {
      "questionId": "g2_wpm_23",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'kitchen' to its picture!",
      "promptVi": "Nối từ 'kitchen' với hình ảnh tương ứng (Phòng bếp)",
      "answerOptions": [
        "kitchen",
        "living room",
        "garden"
      ],
      "correctAnswer": "kitchen",
      "explanation": "Correct connection! 'kitchen' corresponds to 'Phòng bếp'.",
      "explanationVi": "Nối chính xác! 'kitchen' tương ứng với 'Phòng bếp'.",
      "imageAsset": "🍳",
      "audioPrompt": "Connect kitchen to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "kitchen",
        "emoji": "🍳",
        "vi": "Phòng bếp"
      }
    },
    {
      "questionId": "g2_wpm_24",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'bathroom' to its picture!",
      "promptVi": "Nối từ 'bathroom' với hình ảnh tương ứng (Phòng tắm)",
      "answerOptions": [
        "bathroom",
        "bedroom",
        "yard"
      ],
      "correctAnswer": "bathroom",
      "explanation": "Correct connection! 'bathroom' corresponds to 'Phòng tắm'.",
      "explanationVi": "Nối chính xác! 'bathroom' tương ứng với 'Phòng tắm'.",
      "imageAsset": "🚿",
      "audioPrompt": "Connect bathroom to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "bathroom",
        "emoji": "🚿",
        "vi": "Phòng tắm"
      }
    },
    {
      "questionId": "g2_wpm_25",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'garden' to its picture!",
      "promptVi": "Nối từ 'garden' với hình ảnh tương ứng (Khu vườn hoa)",
      "answerOptions": [
        "garden",
        "field",
        "park"
      ],
      "correctAnswer": "garden",
      "explanation": "Correct connection! 'garden' corresponds to 'Khu vườn hoa'.",
      "explanationVi": "Nối chính xác! 'garden' tương ứng với 'Khu vườn hoa'.",
      "imageAsset": "🏡",
      "audioPrompt": "Connect garden to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "garden",
        "emoji": "🏡",
        "vi": "Khu vườn hoa"
      }
    },
    {
      "questionId": "g2_wpm_26",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'playground' to its picture!",
      "promptVi": "Nối từ 'playground' với hình ảnh tương ứng (Khu vui chơi)",
      "answerOptions": [
        "playground",
        "classroom",
        "library"
      ],
      "correctAnswer": "playground",
      "explanation": "Correct connection! 'playground' corresponds to 'Khu vui chơi'.",
      "explanationVi": "Nối chính xác! 'playground' tương ứng với 'Khu vui chơi'.",
      "imageAsset": "🛝",
      "audioPrompt": "Connect playground to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "playground",
        "emoji": "🛝",
        "vi": "Khu vui chơi"
      }
    },
    {
      "questionId": "g2_wpm_27",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'library' to its picture!",
      "promptVi": "Nối từ 'library' với hình ảnh tương ứng (Thư viện trường)",
      "answerOptions": [
        "library",
        "shop",
        "hall"
      ],
      "correctAnswer": "library",
      "explanation": "Correct connection! 'library' corresponds to 'Thư viện trường'.",
      "explanationVi": "Nối chính xác! 'library' tương ứng với 'Thư viện trường'.",
      "imageAsset": "📚",
      "audioPrompt": "Connect library to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "library",
        "emoji": "📚",
        "vi": "Thư viện trường"
      }
    },
    {
      "questionId": "g2_wpm_28",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'guitar' to its picture!",
      "promptVi": "Nối từ 'guitar' với hình ảnh tương ứng (Cây đàn ghi-ta)",
      "answerOptions": [
        "guitar",
        "piano",
        "drum"
      ],
      "correctAnswer": "guitar",
      "explanation": "Correct connection! 'guitar' corresponds to 'Cây đàn ghi-ta'.",
      "explanationVi": "Nối chính xác! 'guitar' tương ứng với 'Cây đàn ghi-ta'.",
      "imageAsset": "🎸",
      "audioPrompt": "Connect guitar to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "guitar",
        "emoji": "🎸",
        "vi": "Cây đàn ghi-ta"
      }
    },
    {
      "questionId": "g2_wpm_29",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'piano' to its picture!",
      "promptVi": "Nối từ 'piano' với hình ảnh tương ứng (Đàn dương cầm)",
      "answerOptions": [
        "piano",
        "guitar",
        "bell"
      ],
      "correctAnswer": "piano",
      "explanation": "Correct connection! 'piano' corresponds to 'Đàn dương cầm'.",
      "explanationVi": "Nối chính xác! 'piano' tương ứng với 'Đàn dương cầm'.",
      "imageAsset": "🎹",
      "audioPrompt": "Connect piano to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "piano",
        "emoji": "🎹",
        "vi": "Đàn dương cầm"
      }
    },
    {
      "questionId": "g2_wpm_30",
      "grade": 2,
      "gameType": "word_picture_match",
      "topic": "Vocabulary & Objects Match",
      "difficulty": "challenge",
      "prompt": "Connect the word 'camera' to its picture!",
      "promptVi": "Nối từ 'camera' với hình ảnh tương ứng (Máy chụp ảnh)",
      "answerOptions": [
        "camera",
        "phone",
        "watch"
      ],
      "correctAnswer": "camera",
      "explanation": "Correct connection! 'camera' corresponds to 'Máy chụp ảnh'.",
      "explanationVi": "Nối chính xác! 'camera' tương ứng với 'Máy chụp ảnh'.",
      "imageAsset": "📷",
      "audioPrompt": "Connect camera to the picture!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
      "metadata": {
        "matchWord": "camera",
        "emoji": "📷",
        "vi": "Máy chụp ảnh"
      }
    }
  ],
  "sentence_builder": [
    {
      "questionId": "g2_snb_01",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'I like apples.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi thích những quả táo.'",
      "answerOptions": [
        "I",
        "like",
        "apples."
      ],
      "correctAnswer": "I like apples.",
      "explanation": "Perfect sentence! 'I like apples.' (Tôi thích những quả táo.).",
      "explanationVi": "Câu hoàn hảo! 'I like apples.' (Tôi thích những quả táo.).",
      "imageAsset": "🧩",
      "audioPrompt": "I like apples.",
      "curriculumReference": "Global Success Grade 2 - Unit 1",
      "metadata": {
        "tokens": [
          "I",
          "like",
          "apples."
        ],
        "fullSentence": "I like apples.",
        "translation": "Tôi thích những quả táo."
      }
    },
    {
      "questionId": "g2_snb_02",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'This is my bag.'",
      "promptVi": "Xếp các khối từ thành câu: 'Đây là chiếc cặp của tôi.'",
      "answerOptions": [
        "This",
        "is",
        "my",
        "bag."
      ],
      "correctAnswer": "This is my bag.",
      "explanation": "Perfect sentence! 'This is my bag.' (Đây là chiếc cặp của tôi.).",
      "explanationVi": "Câu hoàn hảo! 'This is my bag.' (Đây là chiếc cặp của tôi.).",
      "imageAsset": "🧩",
      "audioPrompt": "This is my bag.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "This",
          "is",
          "my",
          "bag."
        ],
        "fullSentence": "This is my bag.",
        "translation": "Đây là chiếc cặp của tôi."
      }
    },
    {
      "questionId": "g2_snb_03",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'I have a cat.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi có một chú mèo.'",
      "answerOptions": [
        "I",
        "have",
        "a",
        "cat."
      ],
      "correctAnswer": "I have a cat.",
      "explanation": "Perfect sentence! 'I have a cat.' (Tôi có một chú mèo.).",
      "explanationVi": "Câu hoàn hảo! 'I have a cat.' (Tôi có một chú mèo.).",
      "imageAsset": "🧩",
      "audioPrompt": "I have a cat.",
      "curriculumReference": "Global Success Grade 2 - Unit 2",
      "metadata": {
        "tokens": [
          "I",
          "have",
          "a",
          "cat."
        ],
        "fullSentence": "I have a cat.",
        "translation": "Tôi có một chú mèo."
      }
    },
    {
      "questionId": "g2_snb_04",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'It is a red pen.'",
      "promptVi": "Xếp các khối từ thành câu: 'Nó là một cây bút đỏ.'",
      "answerOptions": [
        "It",
        "is",
        "a",
        "red",
        "pen."
      ],
      "correctAnswer": "It is a red pen.",
      "explanation": "Perfect sentence! 'It is a red pen.' (Nó là một cây bút đỏ.).",
      "explanationVi": "Câu hoàn hảo! 'It is a red pen.' (Nó là một cây bút đỏ.).",
      "imageAsset": "🧩",
      "audioPrompt": "It is a red pen.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "It",
          "is",
          "a",
          "red",
          "pen."
        ],
        "fullSentence": "It is a red pen.",
        "translation": "Nó là một cây bút đỏ."
      }
    },
    {
      "questionId": "g2_snb_05",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'She has two dogs.'",
      "promptVi": "Xếp các khối từ thành câu: 'Cô ấy có hai chú chó.'",
      "answerOptions": [
        "She",
        "has",
        "two",
        "dogs."
      ],
      "correctAnswer": "She has two dogs.",
      "explanation": "Perfect sentence! 'She has two dogs.' (Cô ấy có hai chú chó.).",
      "explanationVi": "Câu hoàn hảo! 'She has two dogs.' (Cô ấy có hai chú chó.).",
      "imageAsset": "🧩",
      "audioPrompt": "She has two dogs.",
      "curriculumReference": "Global Success Grade 2 - Unit 2",
      "metadata": {
        "tokens": [
          "She",
          "has",
          "two",
          "dogs."
        ],
        "fullSentence": "She has two dogs.",
        "translation": "Cô ấy có hai chú chó."
      }
    },
    {
      "questionId": "g2_snb_06",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'We like milk.'",
      "promptVi": "Xếp các khối từ thành câu: 'Chúng tôi thích sữa.'",
      "answerOptions": [
        "We",
        "like",
        "milk."
      ],
      "correctAnswer": "We like milk.",
      "explanation": "Perfect sentence! 'We like milk.' (Chúng tôi thích sữa.).",
      "explanationVi": "Câu hoàn hảo! 'We like milk.' (Chúng tôi thích sữa.).",
      "imageAsset": "🧩",
      "audioPrompt": "We like milk.",
      "curriculumReference": "Global Success Grade 2 - Unit 1",
      "metadata": {
        "tokens": [
          "We",
          "like",
          "milk."
        ],
        "fullSentence": "We like milk.",
        "translation": "Chúng tôi thích sữa."
      }
    },
    {
      "questionId": "g2_snb_07",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'I can swim.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi biết bơi.'",
      "answerOptions": [
        "I",
        "can",
        "swim."
      ],
      "correctAnswer": "I can swim.",
      "explanation": "Perfect sentence! 'I can swim.' (Tôi biết bơi.).",
      "explanationVi": "Câu hoàn hảo! 'I can swim.' (Tôi biết bơi.).",
      "imageAsset": "🧩",
      "audioPrompt": "I can swim.",
      "curriculumReference": "Global Success Grade 2 - Unit 3",
      "metadata": {
        "tokens": [
          "I",
          "can",
          "swim."
        ],
        "fullSentence": "I can swim.",
        "translation": "Tôi biết bơi."
      }
    },
    {
      "questionId": "g2_snb_08",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'He is my brother.'",
      "promptVi": "Xếp các khối từ thành câu: 'Cậu ấy là anh trai tôi.'",
      "answerOptions": [
        "He",
        "is",
        "my",
        "brother."
      ],
      "correctAnswer": "He is my brother.",
      "explanation": "Perfect sentence! 'He is my brother.' (Cậu ấy là anh trai tôi.).",
      "explanationVi": "Câu hoàn hảo! 'He is my brother.' (Cậu ấy là anh trai tôi.).",
      "imageAsset": "🧩",
      "audioPrompt": "He is my brother.",
      "curriculumReference": "Global Success Grade 2 - Unit 6",
      "metadata": {
        "tokens": [
          "He",
          "is",
          "my",
          "brother."
        ],
        "fullSentence": "He is my brother.",
        "translation": "Cậu ấy là anh trai tôi."
      }
    },
    {
      "questionId": "g2_snb_09",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'This is my book.'",
      "promptVi": "Xếp các khối từ thành câu: 'Đây là quyển sách của tôi.'",
      "answerOptions": [
        "This",
        "is",
        "my",
        "book."
      ],
      "correctAnswer": "This is my book.",
      "explanation": "Perfect sentence! 'This is my book.' (Đây là quyển sách của tôi.).",
      "explanationVi": "Câu hoàn hảo! 'This is my book.' (Đây là quyển sách của tôi.).",
      "imageAsset": "🧩",
      "audioPrompt": "This is my book.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "This",
          "is",
          "my",
          "book."
        ],
        "fullSentence": "This is my book.",
        "translation": "Đây là quyển sách của tôi."
      }
    },
    {
      "questionId": "g2_snb_10",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "easy",
      "prompt": "Build the sentence: 'I see a bird.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi nhìn thấy một chú chim.'",
      "answerOptions": [
        "I",
        "see",
        "a",
        "bird."
      ],
      "correctAnswer": "I see a bird.",
      "explanation": "Perfect sentence! 'I see a bird.' (Tôi nhìn thấy một chú chim.).",
      "explanationVi": "Câu hoàn hảo! 'I see a bird.' (Tôi nhìn thấy một chú chim.).",
      "imageAsset": "🧩",
      "audioPrompt": "I see a bird.",
      "curriculumReference": "Global Success Grade 2 - Unit 4",
      "metadata": {
        "tokens": [
          "I",
          "see",
          "a",
          "bird."
        ],
        "fullSentence": "I see a bird.",
        "translation": "Tôi nhìn thấy một chú chim."
      }
    },
    {
      "questionId": "g2_snb_11",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'I have a blue ruler.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi có một cây thước màu xanh.'",
      "answerOptions": [
        "I",
        "have",
        "a",
        "blue",
        "ruler."
      ],
      "correctAnswer": "I have a blue ruler.",
      "explanation": "Perfect sentence! 'I have a blue ruler.' (Tôi có một cây thước màu xanh.).",
      "explanationVi": "Câu hoàn hảo! 'I have a blue ruler.' (Tôi có một cây thước màu xanh.).",
      "imageAsset": "🧩",
      "audioPrompt": "I have a blue ruler.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "I",
          "have",
          "a",
          "blue",
          "ruler."
        ],
        "fullSentence": "I have a blue ruler.",
        "translation": "Tôi có một cây thước màu xanh."
      }
    },
    {
      "questionId": "g2_snb_12",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'She wears a pink dress.'",
      "promptVi": "Xếp các khối từ thành câu: 'Cô ấy mặc một chiếc váy màu hồng.'",
      "answerOptions": [
        "She",
        "wears",
        "a",
        "pink",
        "dress."
      ],
      "correctAnswer": "She wears a pink dress.",
      "explanation": "Perfect sentence! 'She wears a pink dress.' (Cô ấy mặc một chiếc váy màu hồng.).",
      "explanationVi": "Câu hoàn hảo! 'She wears a pink dress.' (Cô ấy mặc một chiếc váy màu hồng.).",
      "imageAsset": "🧩",
      "audioPrompt": "She wears a pink dress.",
      "curriculumReference": "Global Success Grade 2 - Unit 7",
      "metadata": {
        "tokens": [
          "She",
          "wears",
          "a",
          "pink",
          "dress."
        ],
        "fullSentence": "She wears a pink dress.",
        "translation": "Cô ấy mặc một chiếc váy màu hồng."
      }
    },
    {
      "questionId": "g2_snb_13",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'The dog is under the desk.'",
      "promptVi": "Xếp các khối từ thành câu: 'Chú chó ở dưới bàn học.'",
      "answerOptions": [
        "The",
        "dog",
        "is",
        "under",
        "the",
        "desk."
      ],
      "correctAnswer": "The dog is under the desk.",
      "explanation": "Perfect sentence! 'The dog is under the desk.' (Chú chó ở dưới bàn học.).",
      "explanationVi": "Câu hoàn hảo! 'The dog is under the desk.' (Chú chó ở dưới bàn học.).",
      "imageAsset": "🧩",
      "audioPrompt": "The dog is under the desk.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "The",
          "dog",
          "is",
          "under",
          "the",
          "desk."
        ],
        "fullSentence": "The dog is under the desk.",
        "translation": "Chú chó ở dưới bàn học."
      }
    },
    {
      "questionId": "g2_snb_14",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'I ride my bicycle to school.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi đạp xe đạp tới trường.'",
      "answerOptions": [
        "I",
        "ride",
        "my",
        "bicycle",
        "to",
        "school."
      ],
      "correctAnswer": "I ride my bicycle to school.",
      "explanation": "Perfect sentence! 'I ride my bicycle to school.' (Tôi đạp xe đạp tới trường.).",
      "explanationVi": "Câu hoàn hảo! 'I ride my bicycle to school.' (Tôi đạp xe đạp tới trường.).",
      "imageAsset": "🧩",
      "audioPrompt": "I ride my bicycle to school.",
      "curriculumReference": "Global Success Grade 2 - Unit 4",
      "metadata": {
        "tokens": [
          "I",
          "ride",
          "my",
          "bicycle",
          "to",
          "school."
        ],
        "fullSentence": "I ride my bicycle to school.",
        "translation": "Tôi đạp xe đạp tới trường."
      }
    },
    {
      "questionId": "g2_snb_15",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'We play in the garden.'",
      "promptVi": "Xếp các khối từ thành câu: 'Chúng tôi chơi đùa trong vườn.'",
      "answerOptions": [
        "We",
        "play",
        "in",
        "the",
        "garden."
      ],
      "correctAnswer": "We play in the garden.",
      "explanation": "Perfect sentence! 'We play in the garden.' (Chúng tôi chơi đùa trong vườn.).",
      "explanationVi": "Câu hoàn hảo! 'We play in the garden.' (Chúng tôi chơi đùa trong vườn.).",
      "imageAsset": "🧩",
      "audioPrompt": "We play in the garden.",
      "curriculumReference": "Global Success Grade 2 - Unit 2",
      "metadata": {
        "tokens": [
          "We",
          "play",
          "in",
          "the",
          "garden."
        ],
        "fullSentence": "We play in the garden.",
        "translation": "Chúng tôi chơi đùa trong vườn."
      }
    },
    {
      "questionId": "g2_snb_16",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'Look at the beautiful rainbow.'",
      "promptVi": "Xếp các khối từ thành câu: 'Hãy nhìn cầu vồng tuyệt đẹp kìa.'",
      "answerOptions": [
        "Look",
        "at",
        "the",
        "beautiful",
        "rainbow."
      ],
      "correctAnswer": "Look at the beautiful rainbow.",
      "explanation": "Perfect sentence! 'Look at the beautiful rainbow.' (Hãy nhìn cầu vồng tuyệt đẹp kìa.).",
      "explanationVi": "Câu hoàn hảo! 'Look at the beautiful rainbow.' (Hãy nhìn cầu vồng tuyệt đẹp kìa.).",
      "imageAsset": "🧩",
      "audioPrompt": "Look at the beautiful rainbow.",
      "curriculumReference": "Global Success Grade 2 - Unit 4",
      "metadata": {
        "tokens": [
          "Look",
          "at",
          "the",
          "beautiful",
          "rainbow."
        ],
        "fullSentence": "Look at the beautiful rainbow.",
        "translation": "Hãy nhìn cầu vồng tuyệt đẹp kìa."
      }
    },
    {
      "questionId": "g2_snb_17",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'He has three yellow pencils.'",
      "promptVi": "Xếp các khối từ thành câu: 'Cậu ấy có ba cây bút chì vàng.'",
      "answerOptions": [
        "He",
        "has",
        "three",
        "yellow",
        "pencils."
      ],
      "correctAnswer": "He has three yellow pencils.",
      "explanation": "Perfect sentence! 'He has three yellow pencils.' (Cậu ấy có ba cây bút chì vàng.).",
      "explanationVi": "Câu hoàn hảo! 'He has three yellow pencils.' (Cậu ấy có ba cây bút chì vàng.).",
      "imageAsset": "🧩",
      "audioPrompt": "He has three yellow pencils.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "He",
          "has",
          "three",
          "yellow",
          "pencils."
        ],
        "fullSentence": "He has three yellow pencils.",
        "translation": "Cậu ấy có ba cây bút chì vàng."
      }
    },
    {
      "questionId": "g2_snb_18",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'I can sing English songs.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi có thể hát các bài hát tiếng Anh.'",
      "answerOptions": [
        "I",
        "can",
        "sing",
        "English",
        "songs."
      ],
      "correctAnswer": "I can sing English songs.",
      "explanation": "Perfect sentence! 'I can sing English songs.' (Tôi có thể hát các bài hát tiếng Anh.).",
      "explanationVi": "Câu hoàn hảo! 'I can sing English songs.' (Tôi có thể hát các bài hát tiếng Anh.).",
      "imageAsset": "🧩",
      "audioPrompt": "I can sing English songs.",
      "curriculumReference": "Global Success Grade 2 - Unit 8",
      "metadata": {
        "tokens": [
          "I",
          "can",
          "sing",
          "English",
          "songs."
        ],
        "fullSentence": "I can sing English songs.",
        "translation": "Tôi có thể hát các bài hát tiếng Anh."
      }
    },
    {
      "questionId": "g2_snb_19",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'The cat sleeps on the bed.'",
      "promptVi": "Xếp các khối từ thành câu: 'Chú mèo ngủ trên giường.'",
      "answerOptions": [
        "The",
        "cat",
        "sleeps",
        "on",
        "the",
        "bed."
      ],
      "correctAnswer": "The cat sleeps on the bed.",
      "explanation": "Perfect sentence! 'The cat sleeps on the bed.' (Chú mèo ngủ trên giường.).",
      "explanationVi": "Câu hoàn hảo! 'The cat sleeps on the bed.' (Chú mèo ngủ trên giường.).",
      "imageAsset": "🧩",
      "audioPrompt": "The cat sleeps on the bed.",
      "curriculumReference": "Global Success Grade 2 - Unit 2",
      "metadata": {
        "tokens": [
          "The",
          "cat",
          "sleeps",
          "on",
          "the",
          "bed."
        ],
        "fullSentence": "The cat sleeps on the bed.",
        "translation": "Chú mèo ngủ trên giường."
      }
    },
    {
      "questionId": "g2_snb_20",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "medium",
      "prompt": "Build the sentence: 'My mother cooks delicious food.'",
      "promptVi": "Xếp các khối từ thành câu: 'Mẹ tôi nấu thức ăn rất ngon.'",
      "answerOptions": [
        "My",
        "mother",
        "cooks",
        "delicious",
        "food."
      ],
      "correctAnswer": "My mother cooks delicious food.",
      "explanation": "Perfect sentence! 'My mother cooks delicious food.' (Mẹ tôi nấu thức ăn rất ngon.).",
      "explanationVi": "Câu hoàn hảo! 'My mother cooks delicious food.' (Mẹ tôi nấu thức ăn rất ngon.).",
      "imageAsset": "🧩",
      "audioPrompt": "My mother cooks delicious food.",
      "curriculumReference": "Global Success Grade 2 - Unit 1",
      "metadata": {
        "tokens": [
          "My",
          "mother",
          "cooks",
          "delicious",
          "food."
        ],
        "fullSentence": "My mother cooks delicious food.",
        "translation": "Mẹ tôi nấu thức ăn rất ngon."
      }
    },
    {
      "questionId": "g2_snb_21",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'There is a big boat on the river.'",
      "promptVi": "Xếp các khối từ thành câu: 'Có một con thuyền lớn trên sông.'",
      "answerOptions": [
        "There",
        "is",
        "a",
        "big",
        "boat",
        "on",
        "the",
        "river."
      ],
      "correctAnswer": "There is a big boat on the river.",
      "explanation": "Perfect sentence! 'There is a big boat on the river.' (Có một con thuyền lớn trên sông.).",
      "explanationVi": "Câu hoàn hảo! 'There is a big boat on the river.' (Có một con thuyền lớn trên sông.).",
      "imageAsset": "🧩",
      "audioPrompt": "There is a big boat on the river.",
      "curriculumReference": "Global Success Grade 2 - Unit 4",
      "metadata": {
        "tokens": [
          "There",
          "is",
          "a",
          "big",
          "boat",
          "on",
          "the",
          "river."
        ],
        "fullSentence": "There is a big boat on the river.",
        "translation": "Có một con thuyền lớn trên sông."
      }
    },
    {
      "questionId": "g2_snb_22",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'I want to visit the seaside in summer.'",
      "promptVi": "Xếp các khối từ thành câu: 'Tôi muốn đi biển vào mùa hè.'",
      "answerOptions": [
        "I",
        "want",
        "to",
        "visit",
        "the",
        "seaside",
        "in",
        "summer."
      ],
      "correctAnswer": "I want to visit the seaside in summer.",
      "explanation": "Perfect sentence! 'I want to visit the seaside in summer.' (Tôi muốn đi biển vào mùa hè.).",
      "explanationVi": "Câu hoàn hảo! 'I want to visit the seaside in summer.' (Tôi muốn đi biển vào mùa hè.).",
      "imageAsset": "🧩",
      "audioPrompt": "I want to visit the seaside in summer.",
      "curriculumReference": "Global Success Grade 2 - Unit 3",
      "metadata": {
        "tokens": [
          "I",
          "want",
          "to",
          "visit",
          "the",
          "seaside",
          "in",
          "summer."
        ],
        "fullSentence": "I want to visit the seaside in summer.",
        "translation": "Tôi muốn đi biển vào mùa hè."
      }
    },
    {
      "questionId": "g2_snb_23",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'She opens her backpack to get a notebook.'",
      "promptVi": "Xếp các khối từ thành câu: 'Cô ấy mở cặp để lấy quyển vở.'",
      "answerOptions": [
        "She",
        "opens",
        "her",
        "backpack",
        "to",
        "get",
        "a",
        "notebook."
      ],
      "correctAnswer": "She opens her backpack to get a notebook.",
      "explanation": "Perfect sentence! 'She opens her backpack to get a notebook.' (Cô ấy mở cặp để lấy quyển vở.).",
      "explanationVi": "Câu hoàn hảo! 'She opens her backpack to get a notebook.' (Cô ấy mở cặp để lấy quyển vở.).",
      "imageAsset": "🧩",
      "audioPrompt": "She opens her backpack to get a notebook.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "She",
          "opens",
          "her",
          "backpack",
          "to",
          "get",
          "a",
          "notebook."
        ],
        "fullSentence": "She opens her backpack to get a notebook.",
        "translation": "Cô ấy mở cặp để lấy quyển vở."
      }
    },
    {
      "questionId": "g2_snb_24",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'The yellow sun shines brightly in the sky.'",
      "promptVi": "Xếp các khối từ thành câu: 'Mặt trời vàng chiếu sáng rực rỡ trên bầu trời.'",
      "answerOptions": [
        "The",
        "yellow",
        "sun",
        "shines",
        "brightly",
        "in",
        "the",
        "sky."
      ],
      "correctAnswer": "The yellow sun shines brightly in the sky.",
      "explanation": "Perfect sentence! 'The yellow sun shines brightly in the sky.' (Mặt trời vàng chiếu sáng rực rỡ trên bầu trời.).",
      "explanationVi": "Câu hoàn hảo! 'The yellow sun shines brightly in the sky.' (Mặt trời vàng chiếu sáng rực rỡ trên bầu trời.).",
      "imageAsset": "🧩",
      "audioPrompt": "The yellow sun shines brightly in the sky.",
      "curriculumReference": "Global Success Grade 2 - Unit 3",
      "metadata": {
        "tokens": [
          "The",
          "yellow",
          "sun",
          "shines",
          "brightly",
          "in",
          "the",
          "sky."
        ],
        "fullSentence": "The yellow sun shines brightly in the sky.",
        "translation": "Mặt trời vàng chiếu sáng rực rỡ trên bầu trời."
      }
    },
    {
      "questionId": "g2_snb_25",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'My family eats breakfast together every morning.'",
      "promptVi": "Xếp các khối từ thành câu: 'Gia đình tôi ăn sáng cùng nhau mỗi sáng.'",
      "answerOptions": [
        "My",
        "family",
        "eats",
        "breakfast",
        "together",
        "every",
        "morning."
      ],
      "correctAnswer": "My family eats breakfast together every morning.",
      "explanation": "Perfect sentence! 'My family eats breakfast together every morning.' (Gia đình tôi ăn sáng cùng nhau mỗi sáng.).",
      "explanationVi": "Câu hoàn hảo! 'My family eats breakfast together every morning.' (Gia đình tôi ăn sáng cùng nhau mỗi sáng.).",
      "imageAsset": "🧩",
      "audioPrompt": "My family eats breakfast together every morning.",
      "curriculumReference": "Global Success Grade 2 - Unit 1",
      "metadata": {
        "tokens": [
          "My",
          "family",
          "eats",
          "breakfast",
          "together",
          "every",
          "morning."
        ],
        "fullSentence": "My family eats breakfast together every morning.",
        "translation": "Gia đình tôi ăn sáng cùng nhau mỗi sáng."
      }
    },
    {
      "questionId": "g2_snb_26",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'Birds are singing happily on the tall tree.'",
      "promptVi": "Xếp các khối từ thành câu: 'Những chú chim đang hót líu lo trên cây cao.'",
      "answerOptions": [
        "Birds",
        "are",
        "singing",
        "happily",
        "on",
        "the",
        "tall",
        "tree."
      ],
      "correctAnswer": "Birds are singing happily on the tall tree.",
      "explanation": "Perfect sentence! 'Birds are singing happily on the tall tree.' (Những chú chim đang hót líu lo trên cây cao.).",
      "explanationVi": "Câu hoàn hảo! 'Birds are singing happily on the tall tree.' (Những chú chim đang hót líu lo trên cây cao.).",
      "imageAsset": "🧩",
      "audioPrompt": "Birds are singing happily on the tall tree.",
      "curriculumReference": "Global Success Grade 2 - Unit 4",
      "metadata": {
        "tokens": [
          "Birds",
          "are",
          "singing",
          "happily",
          "on",
          "the",
          "tall",
          "tree."
        ],
        "fullSentence": "Birds are singing happily on the tall tree.",
        "translation": "Những chú chim đang hót líu lo trên cây cao."
      }
    },
    {
      "questionId": "g2_snb_27",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'Can you help me find my missing eraser?'",
      "promptVi": "Xếp các khối từ thành câu: 'Bạn có thể giúp tôi tìm cục tẩy bị thất lạc không?'",
      "answerOptions": [
        "Can",
        "you",
        "help",
        "me",
        "find",
        "my",
        "missing",
        "eraser?"
      ],
      "correctAnswer": "Can you help me find my missing eraser?",
      "explanation": "Perfect sentence! 'Can you help me find my missing eraser?' (Bạn có thể giúp tôi tìm cục tẩy bị thất lạc không?).",
      "explanationVi": "Câu hoàn hảo! 'Can you help me find my missing eraser?' (Bạn có thể giúp tôi tìm cục tẩy bị thất lạc không?).",
      "imageAsset": "🧩",
      "audioPrompt": "Can you help me find my missing eraser?",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "Can",
          "you",
          "help",
          "me",
          "find",
          "my",
          "missing",
          "eraser?"
        ],
        "fullSentence": "Can you help me find my missing eraser?",
        "translation": "Bạn có thể giúp tôi tìm cục tẩy bị thất lạc không?"
      }
    },
    {
      "questionId": "g2_snb_28",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'Vietnamese students love learning English with Ms. Trang.'",
      "promptVi": "Xếp các khối từ thành câu: 'Học sinh Việt Nam rất thích học tiếng Anh cùng cô Trang.'",
      "answerOptions": [
        "Vietnamese",
        "students",
        "love",
        "learning",
        "English",
        "with",
        "Ms.",
        "Trang."
      ],
      "correctAnswer": "Vietnamese students love learning English with Ms. Trang.",
      "explanation": "Perfect sentence! 'Vietnamese students love learning English with Ms. Trang.' (Học sinh Việt Nam rất thích học tiếng Anh cùng cô Trang.).",
      "explanationVi": "Câu hoàn hảo! 'Vietnamese students love learning English with Ms. Trang.' (Học sinh Việt Nam rất thích học tiếng Anh cùng cô Trang.).",
      "imageAsset": "🧩",
      "audioPrompt": "Vietnamese students love learning English with Ms. Trang.",
      "curriculumReference": "Global Success Grade 2 - Unit 8",
      "metadata": {
        "tokens": [
          "Vietnamese",
          "students",
          "love",
          "learning",
          "English",
          "with",
          "Ms.",
          "Trang."
        ],
        "fullSentence": "Vietnamese students love learning English with Ms. Trang.",
        "translation": "Học sinh Việt Nam rất thích học tiếng Anh cùng cô Trang."
      }
    },
    {
      "questionId": "g2_snb_29",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'We build sandcastles on the golden beach.'",
      "promptVi": "Xếp các khối từ thành câu: 'Chúng tôi xây lâu đài cát trên bãi biển vàng.'",
      "answerOptions": [
        "We",
        "build",
        "sandcastles",
        "on",
        "the",
        "golden",
        "beach."
      ],
      "correctAnswer": "We build sandcastles on the golden beach.",
      "explanation": "Perfect sentence! 'We build sandcastles on the golden beach.' (Chúng tôi xây lâu đài cát trên bãi biển vàng.).",
      "explanationVi": "Câu hoàn hảo! 'We build sandcastles on the golden beach.' (Chúng tôi xây lâu đài cát trên bãi biển vàng.).",
      "imageAsset": "🧩",
      "audioPrompt": "We build sandcastles on the golden beach.",
      "curriculumReference": "Global Success Grade 2 - Unit 3",
      "metadata": {
        "tokens": [
          "We",
          "build",
          "sandcastles",
          "on",
          "the",
          "golden",
          "beach."
        ],
        "fullSentence": "We build sandcastles on the golden beach.",
        "translation": "Chúng tôi xây lâu đài cát trên bãi biển vàng."
      }
    },
    {
      "questionId": "g2_snb_30",
      "grade": 2,
      "gameType": "sentence_builder",
      "topic": "Sentence Construction & Syntax",
      "difficulty": "challenge",
      "prompt": "Build the sentence: 'Green trees make the school yard cool and fresh.'",
      "promptVi": "Xếp các khối từ thành câu: 'Những cây xanh làm cho sân trường râm mát và trong lành.'",
      "answerOptions": [
        "Green",
        "trees",
        "make",
        "the",
        "school",
        "yard",
        "cool",
        "and",
        "fresh."
      ],
      "correctAnswer": "Green trees make the school yard cool and fresh.",
      "explanation": "Perfect sentence! 'Green trees make the school yard cool and fresh.' (Những cây xanh làm cho sân trường râm mát và trong lành.).",
      "explanationVi": "Câu hoàn hảo! 'Green trees make the school yard cool and fresh.' (Những cây xanh làm cho sân trường râm mát và trong lành.).",
      "imageAsset": "🧩",
      "audioPrompt": "Green trees make the school yard cool and fresh.",
      "curriculumReference": "Global Success Grade 2 - Unit 5",
      "metadata": {
        "tokens": [
          "Green",
          "trees",
          "make",
          "the",
          "school",
          "yard",
          "cool",
          "and",
          "fresh."
        ],
        "fullSentence": "Green trees make the school yard cool and fresh.",
        "translation": "Những cây xanh làm cho sân trường râm mát và trong lành."
      }
    }
  ],
  "treasure_hunt": [
    {
      "questionId": "g2_hnt_01",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Look inside the red backpack!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Look inside the red backpack!' (Chiếc ba lô màu đỏ)",
      "answerOptions": [
        "red backpack",
        "blue box",
        "green desk"
      ],
      "correctAnswer": "red backpack",
      "explanation": "Treasure found! Clue directed to: red backpack (Chiếc ba lô màu đỏ).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: red backpack (Chiếc ba lô màu đỏ).",
      "imageAsset": "🎒",
      "audioPrompt": "Look inside the red backpack!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "red backpack",
        "clue": "Look inside the red backpack!",
        "emoji": "🎒"
      }
    },
    {
      "questionId": "g2_hnt_02",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Open the blue wooden box!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Open the blue wooden box!' (Chiếc hộp gỗ màu xanh)",
      "answerOptions": [
        "blue box",
        "yellow bag",
        "black hat"
      ],
      "correctAnswer": "blue box",
      "explanation": "Treasure found! Clue directed to: blue box (Chiếc hộp gỗ màu xanh).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: blue box (Chiếc hộp gỗ màu xanh).",
      "imageAsset": "📦",
      "audioPrompt": "Open the blue wooden box!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "blue box",
        "clue": "Open the blue wooden box!",
        "emoji": "📦"
      }
    },
    {
      "questionId": "g2_hnt_03",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Check under the wooden desk!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Check under the wooden desk!' (Dưới bàn học gỗ)",
      "answerOptions": [
        "wooden desk",
        "white door",
        "pink chair"
      ],
      "correctAnswer": "wooden desk",
      "explanation": "Treasure found! Clue directed to: wooden desk (Dưới bàn học gỗ).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: wooden desk (Dưới bàn học gỗ).",
      "imageAsset": "🪵",
      "audioPrompt": "Check under the wooden desk!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "wooden desk",
        "clue": "Check under the wooden desk!",
        "emoji": "🪵"
      }
    },
    {
      "questionId": "g2_hnt_04",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Find the shiny yellow hat!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Find the shiny yellow hat!' (Chiếc mũ màu vàng)",
      "answerOptions": [
        "yellow hat",
        "red shirt",
        "blue socks"
      ],
      "correctAnswer": "yellow hat",
      "explanation": "Treasure found! Clue directed to: yellow hat (Chiếc mũ màu vàng).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: yellow hat (Chiếc mũ màu vàng).",
      "imageAsset": "👒",
      "audioPrompt": "Find the shiny yellow hat!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "yellow hat",
        "clue": "Find the shiny yellow hat!",
        "emoji": "👒"
      }
    },
    {
      "questionId": "g2_hnt_05",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Look behind the green chair!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Look behind the green chair!' (Đằng sau chiếc ghế xanh)",
      "answerOptions": [
        "green chair",
        "black desk",
        "white bed"
      ],
      "correctAnswer": "green chair",
      "explanation": "Treasure found! Clue directed to: green chair (Đằng sau chiếc ghế xanh).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: green chair (Đằng sau chiếc ghế xanh).",
      "imageAsset": "🪑",
      "audioPrompt": "Look behind the green chair!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "green chair",
        "clue": "Look behind the green chair!",
        "emoji": "🪑"
      }
    },
    {
      "questionId": "g2_hnt_06",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'The silver key is in the pencil case!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The silver key is in the pencil case!' (Trong hộp bút)",
      "answerOptions": [
        "pencil case",
        "book",
        "ruler"
      ],
      "correctAnswer": "pencil case",
      "explanation": "Treasure found! Clue directed to: pencil case (Trong hộp bút).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: pencil case (Trong hộp bút).",
      "imageAsset": "👝",
      "audioPrompt": "The silver key is in the pencil case!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "pencil case",
        "clue": "The silver key is in the pencil case!",
        "emoji": "👝"
      }
    },
    {
      "questionId": "g2_hnt_07",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'The gold coin is inside the school bag!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The gold coin is inside the school bag!' (Trong cặp sách)",
      "answerOptions": [
        "school bag",
        "hat",
        "shoes"
      ],
      "correctAnswer": "school bag",
      "explanation": "Treasure found! Clue directed to: school bag (Trong cặp sách).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: school bag (Trong cặp sách).",
      "imageAsset": "🎒",
      "audioPrompt": "The gold coin is inside the school bag!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "school bag",
        "clue": "The gold coin is inside the school bag!",
        "emoji": "🎒"
      }
    },
    {
      "questionId": "g2_hnt_08",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'The secret mark is on the white door!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The secret mark is on the white door!' (Trên cánh cửa trắng)",
      "answerOptions": [
        "white door",
        "green tree",
        "blue desk"
      ],
      "correctAnswer": "white door",
      "explanation": "Treasure found! Clue directed to: white door (Trên cánh cửa trắng).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: white door (Trên cánh cửa trắng).",
      "imageAsset": "🚪",
      "audioPrompt": "The secret mark is on the white door!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "white door",
        "clue": "The secret mark is on the white door!",
        "emoji": "🚪"
      }
    },
    {
      "questionId": "g2_hnt_09",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'Look up at the tall green tree!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Look up at the tall green tree!' (Trên cây cổ thụ cao)",
      "answerOptions": [
        "tall tree",
        "flower",
        "grass"
      ],
      "correctAnswer": "tall tree",
      "explanation": "Treasure found! Clue directed to: tall tree (Trên cây cổ thụ cao).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: tall tree (Trên cây cổ thụ cao).",
      "imageAsset": "🌳",
      "audioPrompt": "Look up at the tall green tree!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "tall tree",
        "clue": "Look up at the tall green tree!",
        "emoji": "🌳"
      }
    },
    {
      "questionId": "g2_hnt_10",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "easy",
      "prompt": "Listen to the clue: 'The clue is near the yellow flower pot!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The clue is near the yellow flower pot!' (Bên cạnh chậu hoa vàng)",
      "answerOptions": [
        "flower pot",
        "bench",
        "fence"
      ],
      "correctAnswer": "flower pot",
      "explanation": "Treasure found! Clue directed to: flower pot (Bên cạnh chậu hoa vàng).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: flower pot (Bên cạnh chậu hoa vàng).",
      "imageAsset": "🪴",
      "audioPrompt": "The clue is near the yellow flower pot!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "flower pot",
        "clue": "The clue is near the yellow flower pot!",
        "emoji": "🪴"
      }
    },
    {
      "questionId": "g2_hnt_11",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'Search the third shelf of the bookshelf!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Search the third shelf of the bookshelf!' (Tầng thứ ba của giá sách)",
      "answerOptions": [
        "bookshelf",
        "table",
        "clock"
      ],
      "correctAnswer": "bookshelf",
      "explanation": "Treasure found! Clue directed to: bookshelf (Tầng thứ ba của giá sách).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: bookshelf (Tầng thứ ba của giá sách).",
      "imageAsset": "📚",
      "audioPrompt": "Search the third shelf of the bookshelf!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "bookshelf",
        "clue": "Search the third shelf of the bookshelf!",
        "emoji": "📚"
      }
    },
    {
      "questionId": "g2_hnt_12",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'The golden star rests on the teacher's desk!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The golden star rests on the teacher's desk!' (Trên bàn của cô giáo)",
      "answerOptions": [
        "teacher's desk",
        "playground",
        "door"
      ],
      "correctAnswer": "teacher's desk",
      "explanation": "Treasure found! Clue directed to: teacher's desk (Trên bàn của cô giáo).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: teacher's desk (Trên bàn của cô giáo).",
      "imageAsset": "👩‍🏫",
      "audioPrompt": "The golden star rests on the teacher's desk!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "teacher's desk",
        "clue": "The golden star rests on the teacher's desk!",
        "emoji": "👩‍🏫"
      }
    },
    {
      "questionId": "g2_hnt_13",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'The treasure map is pinned near the wall clock!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The treasure map is pinned near the wall clock!' (Gần chiếc đồng hồ treo tường)",
      "answerOptions": [
        "clock",
        "window",
        "blackboard"
      ],
      "correctAnswer": "clock",
      "explanation": "Treasure found! Clue directed to: clock (Gần chiếc đồng hồ treo tường).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: clock (Gần chiếc đồng hồ treo tường).",
      "imageAsset": "⏰",
      "audioPrompt": "The treasure map is pinned near the wall clock!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "clock",
        "clue": "The treasure map is pinned near the wall clock!",
        "emoji": "⏰"
      }
    },
    {
      "questionId": "g2_hnt_14",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'A secret clue is written on the blackboard!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'A secret clue is written on the blackboard!' (Trên bảng đen lớp học)",
      "answerOptions": [
        "blackboard",
        "door",
        "floor"
      ],
      "correctAnswer": "blackboard",
      "explanation": "Treasure found! Clue directed to: blackboard (Trên bảng đen lớp học).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: blackboard (Trên bảng đen lớp học).",
      "imageAsset": "⬛",
      "audioPrompt": "A secret clue is written on the blackboard!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "blackboard",
        "clue": "A secret clue is written on the blackboard!",
        "emoji": "⬛"
      }
    },
    {
      "questionId": "g2_hnt_15",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'Find the crystal on the sunny window sill!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Find the crystal on the sunny window sill!' (Bên bậu cửa sổ đón nắng)",
      "answerOptions": [
        "window sill",
        "desk",
        "closet"
      ],
      "correctAnswer": "window sill",
      "explanation": "Treasure found! Clue directed to: window sill (Bên bậu cửa sổ đón nắng).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: window sill (Bên bậu cửa sổ đón nắng).",
      "imageAsset": "🪟",
      "audioPrompt": "Find the crystal on the sunny window sill!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "window sill",
        "clue": "Find the crystal on the sunny window sill!",
        "emoji": "🪟"
      }
    },
    {
      "questionId": "g2_hnt_16",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'Look under the wooden playground bench!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Look under the wooden playground bench!' (Dưới ghế dài sân trường)",
      "answerOptions": [
        "playground bench",
        "tree",
        "gate"
      ],
      "correctAnswer": "playground bench",
      "explanation": "Treasure found! Clue directed to: playground bench (Dưới ghế dài sân trường).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: playground bench (Dưới ghế dài sân trường).",
      "imageAsset": "🪑",
      "audioPrompt": "Look under the wooden playground bench!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "playground bench",
        "clue": "Look under the wooden playground bench!",
        "emoji": "🪑"
      }
    },
    {
      "questionId": "g2_hnt_17",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'The ancient scroll is in the quiet library corner!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The ancient scroll is in the quiet library corner!' (Góc thư viện yên tĩnh)",
      "answerOptions": [
        "library corner",
        "canteen",
        "gym"
      ],
      "correctAnswer": "library corner",
      "explanation": "Treasure found! Clue directed to: library corner (Góc thư viện yên tĩnh).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: library corner (Góc thư viện yên tĩnh).",
      "imageAsset": "📖",
      "audioPrompt": "The ancient scroll is in the quiet library corner!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "library corner",
        "clue": "The ancient scroll is in the quiet library corner!",
        "emoji": "📖"
      }
    },
    {
      "questionId": "g2_hnt_18",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'Find the colourful brush on the art table!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Find the colourful brush on the art table!' (Trên bàn mỹ thuật)",
      "answerOptions": [
        "art table",
        "computer",
        "desk"
      ],
      "correctAnswer": "art table",
      "explanation": "Treasure found! Clue directed to: art table (Trên bàn mỹ thuật).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: art table (Trên bàn mỹ thuật).",
      "imageAsset": "🎨",
      "audioPrompt": "Find the colourful brush on the art table!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "art table",
        "clue": "Find the colourful brush on the art table!",
        "emoji": "🎨"
      }
    },
    {
      "questionId": "g2_hnt_19",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'The magic bell is kept inside the music room!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The magic bell is kept inside the music room!' (Trong phòng âm nhạc)",
      "answerOptions": [
        "music room",
        "hallway",
        "office"
      ],
      "correctAnswer": "music room",
      "explanation": "Treasure found! Clue directed to: music room (Trong phòng âm nhạc).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: music room (Trong phòng âm nhạc).",
      "imageAsset": "🎵",
      "audioPrompt": "The magic bell is kept inside the music room!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "music room",
        "clue": "The magic bell is kept inside the music room!",
        "emoji": "🎵"
      }
    },
    {
      "questionId": "g2_hnt_20",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "medium",
      "prompt": "Listen to the clue: 'Unlock the silver lock at the garden gate!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Unlock the silver lock at the garden gate!' (Ổ khóa ở cổng vườn hoa)",
      "answerOptions": [
        "garden gate",
        "tree",
        "pond"
      ],
      "correctAnswer": "garden gate",
      "explanation": "Treasure found! Clue directed to: garden gate (Ổ khóa ở cổng vườn hoa).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: garden gate (Ổ khóa ở cổng vườn hoa).",
      "imageAsset": "🚪",
      "audioPrompt": "Unlock the silver lock at the garden gate!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "garden gate",
        "clue": "Unlock the silver lock at the garden gate!",
        "emoji": "🚪"
      }
    },
    {
      "questionId": "g2_hnt_21",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Find the glowing compass in the science lab!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Find the glowing compass in the science lab!' (Chiếc la bàn trong phòng thí nghiệm)",
      "answerOptions": [
        "science lab",
        "canteen",
        "playground"
      ],
      "correctAnswer": "science lab",
      "explanation": "Treasure found! Clue directed to: science lab (Chiếc la bàn trong phòng thí nghiệm).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: science lab (Chiếc la bàn trong phòng thí nghiệm).",
      "imageAsset": "🔬",
      "audioPrompt": "Find the glowing compass in the science lab!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "science lab",
        "clue": "Find the glowing compass in the science lab!",
        "emoji": "🔬"
      }
    },
    {
      "questionId": "g2_hnt_22",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Look for the floating bottle in the lotus pond!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Look for the floating bottle in the lotus pond!' (Chiếc lọ trôi trên hồ sen)",
      "answerOptions": [
        "lotus pond",
        "river",
        "well"
      ],
      "correctAnswer": "lotus pond",
      "explanation": "Treasure found! Clue directed to: lotus pond (Chiếc lọ trôi trên hồ sen).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: lotus pond (Chiếc lọ trôi trên hồ sen).",
      "imageAsset": "🪷",
      "audioPrompt": "Look for the floating bottle in the lotus pond!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "lotus pond",
        "clue": "Look for the floating bottle in the lotus pond!",
        "emoji": "🪷"
      }
    },
    {
      "questionId": "g2_hnt_23",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'The mystery badge is displayed in the heritage room!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The mystery badge is displayed in the heritage room!' (Huy hiệu trong phòng truyền thống)",
      "answerOptions": [
        "heritage museum",
        "library",
        "corridor"
      ],
      "correctAnswer": "heritage museum",
      "explanation": "Treasure found! Clue directed to: heritage museum (Huy hiệu trong phòng truyền thống).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: heritage museum (Huy hiệu trong phòng truyền thống).",
      "imageAsset": "🏛️",
      "audioPrompt": "The mystery badge is displayed in the heritage room!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "heritage museum",
        "clue": "The mystery badge is displayed in the heritage room!",
        "emoji": "🏛️"
      }
    },
    {
      "questionId": "g2_hnt_24",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Gather near the national flag pole!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Gather near the national flag pole!' (Gần cột cờ Tổ quốc)",
      "answerOptions": [
        "flag pole",
        "gate",
        "tree"
      ],
      "correctAnswer": "flag pole",
      "explanation": "Treasure found! Clue directed to: flag pole (Gần cột cờ Tổ quốc).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: flag pole (Gần cột cờ Tổ quốc).",
      "imageAsset": "🚩",
      "audioPrompt": "Gather near the national flag pole!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "flag pole",
        "clue": "Gather near the national flag pole!",
        "emoji": "🚩"
      }
    },
    {
      "questionId": "g2_hnt_25",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'The telescope is mounted on the rooftop garden!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The telescope is mounted on the rooftop garden!' (Kính viễn vọng trên vườn sân thượng)",
      "answerOptions": [
        "rooftop garden",
        "balcony",
        "stair"
      ],
      "correctAnswer": "rooftop garden",
      "explanation": "Treasure found! Clue directed to: rooftop garden (Kính viễn vọng trên vườn sân thượng).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: rooftop garden (Kính viễn vọng trên vườn sân thượng).",
      "imageAsset": "🔭",
      "audioPrompt": "The telescope is mounted on the rooftop garden!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "rooftop garden",
        "clue": "The telescope is mounted on the rooftop garden!",
        "emoji": "🔭"
      }
    },
    {
      "questionId": "g2_hnt_26",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Cross the stream over the small wooden bridge!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Cross the stream over the small wooden bridge!' (Cây cầu gỗ nhỏ bắc qua suối)",
      "answerOptions": [
        "wooden bridge",
        "road",
        "tunnel"
      ],
      "correctAnswer": "wooden bridge",
      "explanation": "Treasure found! Clue directed to: wooden bridge (Cây cầu gỗ nhỏ bắc qua suối).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: wooden bridge (Cây cầu gỗ nhỏ bắc qua suối).",
      "imageAsset": "🌉",
      "audioPrompt": "Cross the stream over the small wooden bridge!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "wooden bridge",
        "clue": "Cross the stream over the small wooden bridge!",
        "emoji": "🌉"
      }
    },
    {
      "questionId": "g2_hnt_27",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Inspect the mossy carving on the old stone wall!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Inspect the mossy carving on the old stone wall!' (Bức tường đá phủ rêu phong)",
      "answerOptions": [
        "old stone wall",
        "wooden fence",
        "hedge"
      ],
      "correctAnswer": "old stone wall",
      "explanation": "Treasure found! Clue directed to: old stone wall (Bức tường đá phủ rêu phong).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: old stone wall (Bức tường đá phủ rêu phong).",
      "imageAsset": "🧱",
      "audioPrompt": "Inspect the mossy carving on the old stone wall!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "old stone wall",
        "clue": "Inspect the mossy carving on the old stone wall!",
        "emoji": "🧱"
      }
    },
    {
      "questionId": "g2_hnt_28",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Follow the lantern light along the bamboo path!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Follow the lantern light along the bamboo path!' (Lối đi rợp bóng tre)",
      "answerOptions": [
        "bamboo path",
        "highway",
        "hall"
      ],
      "correctAnswer": "bamboo path",
      "explanation": "Treasure found! Clue directed to: bamboo path (Lối đi rợp bóng tre).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: bamboo path (Lối đi rợp bóng tre).",
      "imageAsset": "🎋",
      "audioPrompt": "Follow the lantern light along the bamboo path!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "bamboo path",
        "clue": "Follow the lantern light along the bamboo path!",
        "emoji": "🎋"
      }
    },
    {
      "questionId": "g2_hnt_29",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'Rest and find the treasure under the coconut shade!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'Rest and find the treasure under the coconut shade!' (Dưới bóng râm cây dừa)",
      "answerOptions": [
        "coconut shade",
        "umbrella",
        "tent"
      ],
      "correctAnswer": "coconut shade",
      "explanation": "Treasure found! Clue directed to: coconut shade (Dưới bóng râm cây dừa).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: coconut shade (Dưới bóng râm cây dừa).",
      "imageAsset": "🥥",
      "audioPrompt": "Rest and find the treasure under the coconut shade!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "coconut shade",
        "clue": "Rest and find the treasure under the coconut shade!",
        "emoji": "🥥"
      }
    },
    {
      "questionId": "g2_hnt_30",
      "grade": 2,
      "gameType": "treasure_hunt",
      "topic": "Listening Clues & Locations",
      "difficulty": "challenge",
      "prompt": "Listen to the clue: 'The final coordinates are stored in the compass case!'",
      "promptVi": "Nghe gợi ý tìm kho báu: 'The final coordinates are stored in the compass case!' (Hộp đựng la bàn thám hiểm)",
      "answerOptions": [
        "compass case",
        "backpack",
        "pouch"
      ],
      "correctAnswer": "compass case",
      "explanation": "Treasure found! Clue directed to: compass case (Hộp đựng la bàn thám hiểm).",
      "explanationVi": "Đã tìm thấy kho báu! Gợi ý dẫn đến: compass case (Hộp đựng la bàn thám hiểm).",
      "imageAsset": "🧭",
      "audioPrompt": "The final coordinates are stored in the compass case!",
      "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
      "metadata": {
        "location": "compass case",
        "clue": "The final coordinates are stored in the compass case!",
        "emoji": "🧭"
      }
    }
  ],
  "vocabulary_maze": [
    {
      "questionId": "g2_mze_01",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (turn left): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để rẽ trái, chọn từ có nghĩa 'bút chì'",
      "answerOptions": [
        "pencil",
        "chair",
        "shoes"
      ],
      "correctAnswer": "pencil",
      "explanation": "The gate opens! 'pencil' moves you through the turn left.",
      "explanationVi": "Cổng mở ra! 'pencil' giúp con vượt qua turn left.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose pencil to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "turn left",
        "gateVi": "Để rẽ trái, chọn từ có nghĩa 'bút chì'"
      }
    },
    {
      "questionId": "g2_mze_02",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (turn right): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để rẽ phải, chọn từ có nghĩa 'quyển sách'",
      "answerOptions": [
        "book",
        "apple",
        "hat"
      ],
      "correctAnswer": "book",
      "explanation": "The gate opens! 'book' moves you through the turn right.",
      "explanationVi": "Cổng mở ra! 'book' giúp con vượt qua turn right.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose book to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "turn right",
        "gateVi": "Để rẽ phải, chọn từ có nghĩa 'quyển sách'"
      }
    },
    {
      "questionId": "g2_mze_03",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (go straight): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để đi thẳng, chọn từ chỉ 'quả táo'",
      "answerOptions": [
        "apple",
        "ruler",
        "milk"
      ],
      "correctAnswer": "apple",
      "explanation": "The gate opens! 'apple' moves you through the go straight.",
      "explanationVi": "Cổng mở ra! 'apple' giúp con vượt qua go straight.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose apple to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "go straight",
        "gateVi": "Để đi thẳng, chọn từ chỉ 'quả táo'"
      }
    },
    {
      "questionId": "g2_mze_04",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (jump): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để nhảy qua vũng nước, chọn từ chỉ 'chú mèo'",
      "answerOptions": [
        "cat",
        "desk",
        "bread"
      ],
      "correctAnswer": "cat",
      "explanation": "The gate opens! 'cat' moves you through the jump.",
      "explanationVi": "Cổng mở ra! 'cat' giúp con vượt qua jump.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose cat to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "jump",
        "gateVi": "Để nhảy qua vũng nước, chọn từ chỉ 'chú mèo'"
      }
    },
    {
      "questionId": "g2_mze_05",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (open gate): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để mở cổng gỗ, chọn từ chỉ 'cánh cửa'",
      "answerOptions": [
        "door",
        "tree",
        "ball"
      ],
      "correctAnswer": "door",
      "explanation": "The gate opens! 'door' moves you through the open gate.",
      "explanationVi": "Cổng mở ra! 'door' giúp con vượt qua open gate.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose door to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "open gate",
        "gateVi": "Để mở cổng gỗ, chọn từ chỉ 'cánh cửa'"
      }
    },
    {
      "questionId": "g2_mze_06",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (step up): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để bước lên bậc đá, chọn từ chỉ 'màu xanh lá'",
      "answerOptions": [
        "green",
        "dog",
        "pen"
      ],
      "correctAnswer": "green",
      "explanation": "The gate opens! 'green' moves you through the step up.",
      "explanationVi": "Cổng mở ra! 'green' giúp con vượt qua step up.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose green to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "step up",
        "gateVi": "Để bước lên bậc đá, chọn từ chỉ 'màu xanh lá'"
      }
    },
    {
      "questionId": "g2_mze_07",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (climb ladder): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để leo thang dây, chọn từ chỉ 'màu vàng'",
      "answerOptions": [
        "yellow",
        "red",
        "cat"
      ],
      "correctAnswer": "yellow",
      "explanation": "The gate opens! 'yellow' moves you through the climb ladder.",
      "explanationVi": "Cổng mở ra! 'yellow' giúp con vượt qua climb ladder.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose yellow to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "climb ladder",
        "gateVi": "Để leo thang dây, chọn từ chỉ 'màu vàng'"
      }
    },
    {
      "questionId": "g2_mze_08",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (cross bridge): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để qua cầu khỉ, chọn từ chỉ 'dòng sông'",
      "answerOptions": [
        "river",
        "road",
        "cake"
      ],
      "correctAnswer": "river",
      "explanation": "The gate opens! 'river' moves you through the cross bridge.",
      "explanationVi": "Cổng mở ra! 'river' giúp con vượt qua cross bridge.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose river to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "cross bridge",
        "gateVi": "Để qua cầu khỉ, chọn từ chỉ 'dòng sông'"
      }
    },
    {
      "questionId": "g2_mze_09",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (ring bell): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để rung chuông bí mật, chọn từ chỉ 'số 5'",
      "answerOptions": [
        "five",
        "nine",
        "two"
      ],
      "correctAnswer": "five",
      "explanation": "The gate opens! 'five' moves you through the ring bell.",
      "explanationVi": "Cổng mở ra! 'five' giúp con vượt qua ring bell.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose five to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "ring bell",
        "gateVi": "Để rung chuông bí mật, chọn từ chỉ 'số 5'"
      }
    },
    {
      "questionId": "g2_mze_10",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "easy",
      "prompt": "Maze Crossroads (open chest): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Để mở rương vàng, chọn từ chỉ 'ngôi sao'",
      "answerOptions": [
        "star",
        "sun",
        "cloud"
      ],
      "correctAnswer": "star",
      "explanation": "The gate opens! 'star' moves you through the open chest.",
      "explanationVi": "Cổng mở ra! 'star' giúp con vượt qua open chest.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose star to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "open chest",
        "gateVi": "Để mở rương vàng, chọn từ chỉ 'ngôi sao'"
      }
    },
    {
      "questionId": "g2_mze_11",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (bamboo path): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Lối vào rừng trúc: chọn từ có nghĩa 'cây thước'",
      "answerOptions": [
        "ruler",
        "eraser",
        "pencil"
      ],
      "correctAnswer": "ruler",
      "explanation": "The gate opens! 'ruler' moves you through the bamboo path.",
      "explanationVi": "Cổng mở ra! 'ruler' giúp con vượt qua bamboo path.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose ruler to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "bamboo path",
        "gateVi": "Lối vào rừng trúc: chọn từ có nghĩa 'cây thước'"
      }
    },
    {
      "questionId": "g2_mze_12",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (flower meadow): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Băng qua đồng hoa: chọn từ có nghĩa 'bướm xinh'",
      "answerOptions": [
        "butterfly",
        "bee",
        "bird"
      ],
      "correctAnswer": "butterfly",
      "explanation": "The gate opens! 'butterfly' moves you through the flower meadow.",
      "explanationVi": "Cổng mở ra! 'butterfly' giúp con vượt qua flower meadow.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose butterfly to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "flower meadow",
        "gateVi": "Băng qua đồng hoa: chọn từ có nghĩa 'bướm xinh'"
      }
    },
    {
      "questionId": "g2_mze_13",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (lotus pond): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Vượt qua hồ sen: chọn từ có nghĩa 'chú vịt'",
      "answerOptions": [
        "duck",
        "fish",
        "frog"
      ],
      "correctAnswer": "duck",
      "explanation": "The gate opens! 'duck' moves you through the lotus pond.",
      "explanationVi": "Cổng mở ra! 'duck' giúp con vượt qua lotus pond.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose duck to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "lotus pond",
        "gateVi": "Vượt qua hồ sen: chọn từ có nghĩa 'chú vịt'"
      }
    },
    {
      "questionId": "g2_mze_14",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (pine hill): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Lên đồi thông: chọn từ chỉ 'bộ quần áo'",
      "answerOptions": [
        "clothes",
        "food",
        "toys"
      ],
      "correctAnswer": "clothes",
      "explanation": "The gate opens! 'clothes' moves you through the pine hill.",
      "explanationVi": "Cổng mở ra! 'clothes' giúp con vượt qua pine hill.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose clothes to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "pine hill",
        "gateVi": "Lên đồi thông: chọn từ chỉ 'bộ quần áo'"
      }
    },
    {
      "questionId": "g2_mze_15",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (secret cave): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Vào hang động: chọn từ có nghĩa 'cây đuốc sáng'",
      "answerOptions": [
        "torch",
        "knife",
        "rope"
      ],
      "correctAnswer": "torch",
      "explanation": "The gate opens! 'torch' moves you through the secret cave.",
      "explanationVi": "Cổng mở ra! 'torch' giúp con vượt qua secret cave.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose torch to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "secret cave",
        "gateVi": "Vào hang động: chọn từ có nghĩa 'cây đuốc sáng'"
      }
    },
    {
      "questionId": "g2_mze_16",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (river bank): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Dọc theo bờ sông: chọn từ có nghĩa 'chiếc thuyền'",
      "answerOptions": [
        "boat",
        "car",
        "train"
      ],
      "correctAnswer": "boat",
      "explanation": "The gate opens! 'boat' moves you through the river bank.",
      "explanationVi": "Cổng mở ra! 'boat' giúp con vượt qua river bank.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose boat to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "river bank",
        "gateVi": "Dọc theo bờ sông: chọn từ có nghĩa 'chiếc thuyền'"
      }
    },
    {
      "questionId": "g2_mze_17",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (village road): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Đường làng quê: chọn từ có nghĩa 'xe đạp'",
      "answerOptions": [
        "bicycle",
        "plane",
        "horse"
      ],
      "correctAnswer": "bicycle",
      "explanation": "The gate opens! 'bicycle' moves you through the village road.",
      "explanationVi": "Cổng mở ra! 'bicycle' giúp con vượt qua village road.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose bicycle to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "village road",
        "gateVi": "Đường làng quê: chọn từ có nghĩa 'xe đạp'"
      }
    },
    {
      "questionId": "g2_mze_18",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (sunny beach): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Bãi biển đầy nắng: chọn từ có nghĩa 'cát trắng'",
      "answerOptions": [
        "sand",
        "rock",
        "grass"
      ],
      "correctAnswer": "sand",
      "explanation": "The gate opens! 'sand' moves you through the sunny beach.",
      "explanationVi": "Cổng mở ra! 'sand' giúp con vượt qua sunny beach.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose sand to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "sunny beach",
        "gateVi": "Bãi biển đầy nắng: chọn từ có nghĩa 'cát trắng'"
      }
    },
    {
      "questionId": "g2_mze_19",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (rainbow arch): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Cổng vòm cầu vồng: chọn từ có nghĩa 'bầu trời'",
      "answerOptions": [
        "sky",
        "sea",
        "earth"
      ],
      "correctAnswer": "sky",
      "explanation": "The gate opens! 'sky' moves you through the rainbow arch.",
      "explanationVi": "Cổng mở ra! 'sky' giúp con vượt qua rainbow arch.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose sky to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "rainbow arch",
        "gateVi": "Cổng vòm cầu vồng: chọn từ có nghĩa 'bầu trời'"
      }
    },
    {
      "questionId": "g2_mze_20",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "medium",
      "prompt": "Maze Crossroads (old castle): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Lâu đài cổ tích: chọn từ có nghĩa 'vương miện'",
      "answerOptions": [
        "crown",
        "helmet",
        "cap"
      ],
      "correctAnswer": "crown",
      "explanation": "The gate opens! 'crown' moves you through the old castle.",
      "explanationVi": "Cổng mở ra! 'crown' giúp con vượt qua old castle.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose crown to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "old castle",
        "gateVi": "Lâu đài cổ tích: chọn từ có nghĩa 'vương miện'"
      }
    },
    {
      "questionId": "g2_mze_21",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (maze center): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Tâm điểm mê cung: chọn từ có nghĩa 'la bàn'",
      "answerOptions": [
        "compass",
        "map",
        "clock"
      ],
      "correctAnswer": "compass",
      "explanation": "The gate opens! 'compass' moves you through the maze center.",
      "explanationVi": "Cổng mở ra! 'compass' giúp con vượt qua maze center.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose compass to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "maze center",
        "gateVi": "Tâm điểm mê cung: chọn từ có nghĩa 'la bàn'"
      }
    },
    {
      "questionId": "g2_mze_22",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (crystal chamber): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Căn phòng pha lê: chọn từ có nghĩa 'viên ngọc quý'",
      "answerOptions": [
        "gem",
        "coin",
        "stone"
      ],
      "correctAnswer": "gem",
      "explanation": "The gate opens! 'gem' moves you through the crystal chamber.",
      "explanationVi": "Cổng mở ra! 'gem' giúp con vượt qua crystal chamber.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose gem to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "crystal chamber",
        "gateVi": "Căn phòng pha lê: chọn từ có nghĩa 'viên ngọc quý'"
      }
    },
    {
      "questionId": "g2_mze_23",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (dragon peak): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Đỉnh núi Rồng: chọn từ có nghĩa 'đám mây trắng'",
      "answerOptions": [
        "cloud",
        "smoke",
        "fog"
      ],
      "correctAnswer": "cloud",
      "explanation": "The gate opens! 'cloud' moves you through the dragon peak.",
      "explanationVi": "Cổng mở ra! 'cloud' giúp con vượt qua dragon peak.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose cloud to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "dragon peak",
        "gateVi": "Đỉnh núi Rồng: chọn từ có nghĩa 'đám mây trắng'"
      }
    },
    {
      "questionId": "g2_mze_24",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (whispering wind): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Gió thì thầm: chọn từ có nghĩa 'tiếng hát'",
      "answerOptions": [
        "singing",
        "talking",
        "crying"
      ],
      "correctAnswer": "singing",
      "explanation": "The gate opens! 'singing' moves you through the whispering wind.",
      "explanationVi": "Cổng mở ra! 'singing' giúp con vượt qua whispering wind.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose singing to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "whispering wind",
        "gateVi": "Gió thì thầm: chọn từ có nghĩa 'tiếng hát'"
      }
    },
    {
      "questionId": "g2_mze_25",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (lantern avenue): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Đại lộ đèn lồng: chọn từ có nghĩa 'lễ hội'",
      "answerOptions": [
        "festival",
        "meeting",
        "class"
      ],
      "correctAnswer": "festival",
      "explanation": "The gate opens! 'festival' moves you through the lantern avenue.",
      "explanationVi": "Cổng mở ra! 'festival' giúp con vượt qua lantern avenue.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose festival to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "lantern avenue",
        "gateVi": "Đại lộ đèn lồng: chọn từ có nghĩa 'lễ hội'"
      }
    },
    {
      "questionId": "g2_mze_26",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (golden gate): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Cổng thành dát vàng: chọn từ có nghĩa 'chiến thắng'",
      "answerOptions": [
        "victory",
        "loss",
        "start"
      ],
      "correctAnswer": "victory",
      "explanation": "The gate opens! 'victory' moves you through the golden gate.",
      "explanationVi": "Cổng mở ra! 'victory' giúp con vượt qua golden gate.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose victory to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "golden gate",
        "gateVi": "Cổng thành dát vàng: chọn từ có nghĩa 'chiến thắng'"
      }
    },
    {
      "questionId": "g2_mze_27",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (star observatory): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Đài thiên văn: chọn từ có nghĩa 'kính thiên văn'",
      "answerOptions": [
        "telescope",
        "microscope",
        "camera"
      ],
      "correctAnswer": "telescope",
      "explanation": "The gate opens! 'telescope' moves you through the star observatory.",
      "explanationVi": "Cổng mở ra! 'telescope' giúp con vượt qua star observatory.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose telescope to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "star observatory",
        "gateVi": "Đài thiên văn: chọn từ có nghĩa 'kính thiên văn'"
      }
    },
    {
      "questionId": "g2_mze_28",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (emerald oasis): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Ốc đảo ngọc lục bảo: chọn từ có nghĩa 'nguồn nước'",
      "answerOptions": [
        "water",
        "juice",
        "oil"
      ],
      "correctAnswer": "water",
      "explanation": "The gate opens! 'water' moves you through the emerald oasis.",
      "explanationVi": "Cổng mở ra! 'water' giúp con vượt qua emerald oasis.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose water to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "emerald oasis",
        "gateVi": "Ốc đảo ngọc lục bảo: chọn từ có nghĩa 'nguồn nước'"
      }
    },
    {
      "questionId": "g2_mze_29",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (explorer's camp): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Doanh trại thám hiểm: chọn từ có nghĩa 'ba lô'",
      "answerOptions": [
        "backpack",
        "suitcase",
        "basket"
      ],
      "correctAnswer": "backpack",
      "explanation": "The gate opens! 'backpack' moves you through the explorer's camp.",
      "explanationVi": "Cổng mở ra! 'backpack' giúp con vượt qua explorer's camp.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose backpack to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "explorer's camp",
        "gateVi": "Doanh trại thám hiểm: chọn từ có nghĩa 'ba lô'"
      }
    },
    {
      "questionId": "g2_mze_30",
      "grade": 2,
      "gameType": "vocabulary_maze",
      "topic": "Maze Navigation & Word Gates",
      "difficulty": "challenge",
      "prompt": "Maze Crossroads (victory pedestal): Pick the correct word to advance!",
      "promptVi": "Ngã rẽ mê cung: Bục vinh quang: chọn từ có nghĩa 'nhà vô địch'",
      "answerOptions": [
        "champion",
        "runner",
        "beginner"
      ],
      "correctAnswer": "champion",
      "explanation": "The gate opens! 'champion' moves you through the victory pedestal.",
      "explanationVi": "Cổng mở ra! 'champion' giúp con vượt qua victory pedestal.",
      "imageAsset": "🧭",
      "audioPrompt": "Choose champion to pass the gate!",
      "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
      "metadata": {
        "step": "victory pedestal",
        "gateVi": "Bục vinh quang: chọn từ có nghĩa 'nhà vô địch'"
      }
    }
  ],
  "landmark_drag_drop": [
    {
      "questionId": "g3_lm_01",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'One Pillar Pagoda' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chùa Một Cột' (Hanoi) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! One Pillar Pagoda is located in Hanoi, in North Vietnam.",
      "explanationVi": "Chính xác! Chùa Một Cột tọa lạc tại Hanoi, thuộc miền Bắc.",
      "imageAsset": "🏛️",
      "audioPrompt": "One Pillar Pagoda is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "One Pillar Pagoda",
        "province": "Hanoi",
        "region": "North",
        "emoji": "🏛️"
      }
    },
    {
      "questionId": "g3_lm_02",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Ha Long Bay' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Vịnh Hạ Long' (Quang Ninh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Ha Long Bay is located in Quang Ninh, in North Vietnam.",
      "explanationVi": "Chính xác! Vịnh Hạ Long tọa lạc tại Quang Ninh, thuộc miền Bắc.",
      "imageAsset": "⛵",
      "audioPrompt": "Ha Long Bay is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Ha Long Bay",
        "province": "Quang Ninh",
        "region": "North",
        "emoji": "⛵"
      }
    },
    {
      "questionId": "g3_lm_03",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Hoan Kiem Lake' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Hồ Hoàn Kiếm' (Hanoi) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Hoan Kiem Lake is located in Hanoi, in North Vietnam.",
      "explanationVi": "Chính xác! Hồ Hoàn Kiếm tọa lạc tại Hanoi, thuộc miền Bắc.",
      "imageAsset": "🐢",
      "audioPrompt": "Hoan Kiem Lake is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Hoan Kiem Lake",
        "province": "Hanoi",
        "region": "North",
        "emoji": "🐢"
      }
    },
    {
      "questionId": "g3_lm_04",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Fansipan Peak' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Đỉnh Fansipan - Nóc nhà Đông Dương' (Lao Cai / Sapa) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Fansipan Peak is located in Lao Cai / Sapa, in North Vietnam.",
      "explanationVi": "Chính xác! Đỉnh Fansipan - Nóc nhà Đông Dương tọa lạc tại Lao Cai / Sapa, thuộc miền Bắc.",
      "imageAsset": "⛰️",
      "audioPrompt": "Fansipan Peak is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Fansipan Peak",
        "province": "Lao Cai / Sapa",
        "region": "North",
        "emoji": "⛰️"
      }
    },
    {
      "questionId": "g3_lm_05",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Ba Be Lake' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Hồ Ba Bể' (Bac Kan) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Ba Be Lake is located in Bac Kan, in North Vietnam.",
      "explanationVi": "Chính xác! Hồ Ba Bể tọa lạc tại Bac Kan, thuộc miền Bắc.",
      "imageAsset": "🚣",
      "audioPrompt": "Ba Be Lake is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Ba Be Lake",
        "province": "Bac Kan",
        "region": "North",
        "emoji": "🚣"
      }
    },
    {
      "questionId": "g3_lm_06",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Trang An Complex' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Quần thể danh thắng Tràng An' (Ninh Binh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Trang An Complex is located in Ninh Binh, in North Vietnam.",
      "explanationVi": "Chính xác! Quần thể danh thắng Tràng An tọa lạc tại Ninh Binh, thuộc miền Bắc.",
      "imageAsset": "🛶",
      "audioPrompt": "Trang An Complex is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Trang An Complex",
        "province": "Ninh Binh",
        "region": "North",
        "emoji": "🛶"
      }
    },
    {
      "questionId": "g3_lm_07",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Ban Gioc Waterfall' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Thác Bản Giốc' (Cao Bang) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Ban Gioc Waterfall is located in Cao Bang, in North Vietnam.",
      "explanationVi": "Chính xác! Thác Bản Giốc tọa lạc tại Cao Bang, thuộc miền Bắc.",
      "imageAsset": "🌊",
      "audioPrompt": "Ban Gioc Waterfall is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Ban Gioc Waterfall",
        "province": "Cao Bang",
        "region": "North",
        "emoji": "🌊"
      }
    },
    {
      "questionId": "g3_lm_08",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Dong Van Karst Plateau' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Cao nguyên đá Đồng Văn' (Ha Giang) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Dong Van Karst Plateau is located in Ha Giang, in North Vietnam.",
      "explanationVi": "Chính xác! Cao nguyên đá Đồng Văn tọa lạc tại Ha Giang, thuộc miền Bắc.",
      "imageAsset": "🪨",
      "audioPrompt": "Dong Van Karst Plateau is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Dong Van Karst Plateau",
        "province": "Ha Giang",
        "region": "North",
        "emoji": "🪨"
      }
    },
    {
      "questionId": "g3_lm_09",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Perfume Pagoda' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chùa Hương' (Hanoi) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Perfume Pagoda is located in Hanoi, in North Vietnam.",
      "explanationVi": "Chính xác! Chùa Hương tọa lạc tại Hanoi, thuộc miền Bắc.",
      "imageAsset": "🛕",
      "audioPrompt": "Perfume Pagoda is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Perfume Pagoda",
        "province": "Hanoi",
        "region": "North",
        "emoji": "🛕"
      }
    },
    {
      "questionId": "g3_lm_10",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Tam Coc Bich Dong' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Tam Cốc - Bích Động' (Ninh Binh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "North",
      "explanation": "Exactly! Tam Coc Bich Dong is located in Ninh Binh, in North Vietnam.",
      "explanationVi": "Chính xác! Tam Cốc - Bích Động tọa lạc tại Ninh Binh, thuộc miền Bắc.",
      "imageAsset": "🌾",
      "audioPrompt": "Tam Coc Bich Dong is located in North Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Tam Coc Bich Dong",
        "province": "Ninh Binh",
        "region": "North",
        "emoji": "🌾"
      }
    },
    {
      "questionId": "g3_lm_11",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Hue Imperial Citadel' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Đại Nội Huế' (Thua Thien Hue) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Hue Imperial Citadel is located in Thua Thien Hue, in Central Vietnam.",
      "explanationVi": "Chính xác! Đại Nội Huế tọa lạc tại Thua Thien Hue, thuộc miền Trung.",
      "imageAsset": "🏰",
      "audioPrompt": "Hue Imperial Citadel is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Hue Imperial Citadel",
        "province": "Thua Thien Hue",
        "region": "Central",
        "emoji": "🏰"
      }
    },
    {
      "questionId": "g3_lm_12",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Hoi An Ancient Town' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Phố Cổ Hội An' (Quang Nam) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Hoi An Ancient Town is located in Quang Nam, in Central Vietnam.",
      "explanationVi": "Chính xác! Phố Cổ Hội An tọa lạc tại Quang Nam, thuộc miền Trung.",
      "imageAsset": "🏮",
      "audioPrompt": "Hoi An Ancient Town is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Hoi An Ancient Town",
        "province": "Quang Nam",
        "region": "Central",
        "emoji": "🏮"
      }
    },
    {
      "questionId": "g3_lm_13",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Da Nang Golden Bridge' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Cầu Vàng Bà Nà Hills' (Da Nang) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Da Nang Golden Bridge is located in Da Nang, in Central Vietnam.",
      "explanationVi": "Chính xác! Cầu Vàng Bà Nà Hills tọa lạc tại Da Nang, thuộc miền Trung.",
      "imageAsset": "🌉",
      "audioPrompt": "Da Nang Golden Bridge is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Da Nang Golden Bridge",
        "province": "Da Nang",
        "region": "Central",
        "emoji": "🌉"
      }
    },
    {
      "questionId": "g3_lm_14",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Phong Nha Cave' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Động Phong Nha' (Quang Binh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Phong Nha Cave is located in Quang Binh, in Central Vietnam.",
      "explanationVi": "Chính xác! Động Phong Nha tọa lạc tại Quang Binh, thuộc miền Trung.",
      "imageAsset": "🦇",
      "audioPrompt": "Phong Nha Cave is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Phong Nha Cave",
        "province": "Quang Binh",
        "region": "Central",
        "emoji": "🦇"
      }
    },
    {
      "questionId": "g3_lm_15",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'My Son Sanctuary' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Thánh địa Mỹ Sơn' (Quang Nam) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! My Son Sanctuary is located in Quang Nam, in Central Vietnam.",
      "explanationVi": "Chính xác! Thánh địa Mỹ Sơn tọa lạc tại Quang Nam, thuộc miền Trung.",
      "imageAsset": "🛕",
      "audioPrompt": "My Son Sanctuary is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "My Son Sanctuary",
        "province": "Quang Nam",
        "region": "Central",
        "emoji": "🛕"
      }
    },
    {
      "questionId": "g3_lm_16",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Lang Co Bay' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Vịnh Lăng Cô' (Thua Thien Hue) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Lang Co Bay is located in Thua Thien Hue, in Central Vietnam.",
      "explanationVi": "Chính xác! Vịnh Lăng Cô tọa lạc tại Thua Thien Hue, thuộc miền Trung.",
      "imageAsset": "🏖️",
      "audioPrompt": "Lang Co Bay is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Lang Co Bay",
        "province": "Thua Thien Hue",
        "region": "Central",
        "emoji": "🏖️"
      }
    },
    {
      "questionId": "g3_lm_17",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Hai Van Pass' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Đèo Hải Vân' (Da Nang / Hue) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Hai Van Pass is located in Da Nang / Hue, in Central Vietnam.",
      "explanationVi": "Chính xác! Đèo Hải Vân tọa lạc tại Da Nang / Hue, thuộc miền Trung.",
      "imageAsset": "🏍️",
      "audioPrompt": "Hai Van Pass is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Hai Van Pass",
        "province": "Da Nang / Hue",
        "region": "Central",
        "emoji": "🏍️"
      }
    },
    {
      "questionId": "g3_lm_18",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Son Doong Cave' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Hang Sơn Đoòng' (Quang Binh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Son Doong Cave is located in Quang Binh, in Central Vietnam.",
      "explanationVi": "Chính xác! Hang Sơn Đoòng tọa lạc tại Quang Binh, thuộc miền Trung.",
      "imageAsset": "🧗",
      "audioPrompt": "Son Doong Cave is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Son Doong Cave",
        "province": "Quang Binh",
        "region": "Central",
        "emoji": "🧗"
      }
    },
    {
      "questionId": "g3_lm_19",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Thien Mu Pagoda' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chùa Thiên Mụ' (Thua Thien Hue) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! Thien Mu Pagoda is located in Thua Thien Hue, in Central Vietnam.",
      "explanationVi": "Chính xác! Chùa Thiên Mụ tọa lạc tại Thua Thien Hue, thuộc miền Trung.",
      "imageAsset": "🔔",
      "audioPrompt": "Thien Mu Pagoda is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Thien Mu Pagoda",
        "province": "Thua Thien Hue",
        "region": "Central",
        "emoji": "🔔"
      }
    },
    {
      "questionId": "g3_lm_20",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'An Dinh Palace' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Cung An Định' (Thua Thien Hue) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "Central",
      "explanation": "Exactly! An Dinh Palace is located in Thua Thien Hue, in Central Vietnam.",
      "explanationVi": "Chính xác! Cung An Định tọa lạc tại Thua Thien Hue, thuộc miền Trung.",
      "imageAsset": "🏛️",
      "audioPrompt": "An Dinh Palace is located in Central Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "An Dinh Palace",
        "province": "Thua Thien Hue",
        "region": "Central",
        "emoji": "🏛️"
      }
    },
    {
      "questionId": "g3_lm_21",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Ben Thanh Market' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chợ Bến Thành' (Ho Chi Minh City) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Ben Thanh Market is located in Ho Chi Minh City, in South Vietnam.",
      "explanationVi": "Chính xác! Chợ Bến Thành tọa lạc tại Ho Chi Minh City, thuộc miền Nam.",
      "imageAsset": "🏬",
      "audioPrompt": "Ben Thanh Market is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Ben Thanh Market",
        "province": "Ho Chi Minh City",
        "region": "South",
        "emoji": "🏬"
      }
    },
    {
      "questionId": "g3_lm_22",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Landmark 81' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Tòa nhà Landmark 81' (Ho Chi Minh City) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Landmark 81 is located in Ho Chi Minh City, in South Vietnam.",
      "explanationVi": "Chính xác! Tòa nhà Landmark 81 tọa lạc tại Ho Chi Minh City, thuộc miền Nam.",
      "imageAsset": "🏙️",
      "audioPrompt": "Landmark 81 is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Landmark 81",
        "province": "Ho Chi Minh City",
        "region": "South",
        "emoji": "🏙️"
      }
    },
    {
      "questionId": "g3_lm_23",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "easy",
      "prompt": "Drag 'Cu Chi Tunnels' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Địa đạo Củ Chi' (Ho Chi Minh City) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Cu Chi Tunnels is located in Ho Chi Minh City, in South Vietnam.",
      "explanationVi": "Chính xác! Địa đạo Củ Chi tọa lạc tại Ho Chi Minh City, thuộc miền Nam.",
      "imageAsset": "🎖️",
      "audioPrompt": "Cu Chi Tunnels is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Cu Chi Tunnels",
        "province": "Ho Chi Minh City",
        "region": "South",
        "emoji": "🎖️"
      }
    },
    {
      "questionId": "g3_lm_24",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Cai Rang Floating Market' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chợ nổi Cái Răng' (Can Tho) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Cai Rang Floating Market is located in Can Tho, in South Vietnam.",
      "explanationVi": "Chính xác! Chợ nổi Cái Răng tọa lạc tại Can Tho, thuộc miền Nam.",
      "imageAsset": "🛶",
      "audioPrompt": "Cai Rang Floating Market is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Cai Rang Floating Market",
        "province": "Can Tho",
        "region": "South",
        "emoji": "🛶"
      }
    },
    {
      "questionId": "g3_lm_25",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Phu Quoc Island' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Đảo Ngọc Phú Quốc' (Kien Giang) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Phu Quoc Island is located in Kien Giang, in South Vietnam.",
      "explanationVi": "Chính xác! Đảo Ngọc Phú Quốc tọa lạc tại Kien Giang, thuộc miền Nam.",
      "imageAsset": "🏝️",
      "audioPrompt": "Phu Quoc Island is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Phu Quoc Island",
        "province": "Kien Giang",
        "region": "South",
        "emoji": "🏝️"
      }
    },
    {
      "questionId": "g3_lm_26",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Ba Den Mountain' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Núi Bà Đen' (Tay Ninh) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Ba Den Mountain is located in Tay Ninh, in South Vietnam.",
      "explanationVi": "Chính xác! Núi Bà Đen tọa lạc tại Tay Ninh, thuộc miền Nam.",
      "imageAsset": "🚠",
      "audioPrompt": "Ba Den Mountain is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Ba Den Mountain",
        "province": "Tay Ninh",
        "region": "South",
        "emoji": "🚠"
      }
    },
    {
      "questionId": "g3_lm_27",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "medium",
      "prompt": "Drag 'Nha Rong Wharf' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Bến Nhà Rồng' (Ho Chi Minh City) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Nha Rong Wharf is located in Ho Chi Minh City, in South Vietnam.",
      "explanationVi": "Chính xác! Bến Nhà Rồng tọa lạc tại Ho Chi Minh City, thuộc miền Nam.",
      "imageAsset": "⚓",
      "audioPrompt": "Nha Rong Wharf is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Nha Rong Wharf",
        "province": "Ho Chi Minh City",
        "region": "South",
        "emoji": "⚓"
      }
    },
    {
      "questionId": "g3_lm_28",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Can Gio Mangrove Forest' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Rừng ngập mặn Cần Giờ' (Ho Chi Minh City) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Can Gio Mangrove Forest is located in Ho Chi Minh City, in South Vietnam.",
      "explanationVi": "Chính xác! Rừng ngập mặn Cần Giờ tọa lạc tại Ho Chi Minh City, thuộc miền Nam.",
      "imageAsset": "🦀",
      "audioPrompt": "Can Gio Mangrove Forest is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Can Gio Mangrove Forest",
        "province": "Ho Chi Minh City",
        "region": "South",
        "emoji": "🦀"
      }
    },
    {
      "questionId": "g3_lm_29",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Vinh Trang Pagoda' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Chùa Vĩnh Tràng' (Tien Giang) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Vinh Trang Pagoda is located in Tien Giang, in South Vietnam.",
      "explanationVi": "Chính xác! Chùa Vĩnh Tràng tọa lạc tại Tien Giang, thuộc miền Nam.",
      "imageAsset": "🛕",
      "audioPrompt": "Vinh Trang Pagoda is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Vinh Trang Pagoda",
        "province": "Tien Giang",
        "region": "South",
        "emoji": "🛕"
      }
    },
    {
      "questionId": "g3_lm_30",
      "grade": 3,
      "gameType": "landmark_drag_drop",
      "topic": "Vietnam Heritage & Geography",
      "difficulty": "challenge",
      "prompt": "Drag 'Tram Chim National Park' to its geographical region in Vietnam!",
      "promptVi": "Kéo thả 'Vườn quốc gia Tràm Chim' (Dong Thap) vào đúng miền của Việt Nam!",
      "answerOptions": [
        "North",
        "Central",
        "South"
      ],
      "correctAnswer": "South",
      "explanation": "Exactly! Tram Chim National Park is located in Dong Thap, in South Vietnam.",
      "explanationVi": "Chính xác! Vườn quốc gia Tràm Chim tọa lạc tại Dong Thap, thuộc miền Nam.",
      "imageAsset": "🦩",
      "audioPrompt": "Tram Chim National Park is located in South Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
      "metadata": {
        "landmarkName": "Tram Chim National Park",
        "province": "Dong Thap",
        "region": "South",
        "emoji": "🦩"
      }
    }
  ],
  "map_quest": [
    {
      "questionId": "g3_mq_01",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: The thousand-year capital city with Hoan Kiem Lake. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thủ đô ngàn năm văn hiến. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Hanoi",
        "Hue",
        "Da Nang"
      ],
      "correctAnswer": "Hanoi",
      "explanation": "Spot on! 'Hanoi' matches the description: The thousand-year capital city with Hoan Kiem Lake.",
      "explanationVi": "Chính xác! 'Hanoi' (Thủ đô ngàn năm văn hiến).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Hanoi!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Hanoi",
        "description": "The thousand-year capital city with Hoan Kiem Lake"
      }
    },
    {
      "questionId": "g3_mq_02",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: The largest bustling economic hub in southern Vietnam. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thành phố sôi động nhất phương Nam. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ho Chi Minh City",
        "Hanoi",
        "Hai Phong"
      ],
      "correctAnswer": "Ho Chi Minh City",
      "explanation": "Spot on! 'Ho Chi Minh City' matches the description: The largest bustling economic hub in southern Vietnam.",
      "explanationVi": "Chính xác! 'Ho Chi Minh City' (Thành phố sôi động nhất phương Nam).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ho Chi Minh City!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ho Chi Minh City",
        "description": "The largest bustling economic hub in southern Vietnam"
      }
    },
    {
      "questionId": "g3_mq_03",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Coastal city famous for the Golden Bridge held by giant stone hands. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thành phố đáng sống với Cầu Vàng. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Da Nang",
        "Nha Trang",
        "Vung Tau"
      ],
      "correctAnswer": "Da Nang",
      "explanation": "Spot on! 'Da Nang' matches the description: Coastal city famous for the Golden Bridge held by giant stone hands.",
      "explanationVi": "Chính xác! 'Da Nang' (Thành phố đáng sống với Cầu Vàng).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Da Nang!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Da Nang",
        "description": "Coastal city famous for the Golden Bridge held by giant stone hands"
      }
    },
    {
      "questionId": "g3_mq_04",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Province home to the world wonder Ha Long Bay. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có Vịnh Hạ Long. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Quang Ninh",
        "Hai Phong",
        "Nam Dinh"
      ],
      "correctAnswer": "Quang Ninh",
      "explanation": "Spot on! 'Quang Ninh' matches the description: Province home to the world wonder Ha Long Bay.",
      "explanationVi": "Chính xác! 'Quang Ninh' (Tỉnh có Vịnh Hạ Long).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Quang Ninh!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Quang Ninh",
        "description": "Province home to the world wonder Ha Long Bay"
      }
    },
    {
      "questionId": "g3_mq_05",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Former imperial capital beside the Perfume River. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Cố đô bên dòng sông Hương. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Thua Thien Hue",
        "Quang Tri",
        "Quang Binh"
      ],
      "correctAnswer": "Thua Thien Hue",
      "explanation": "Spot on! 'Thua Thien Hue' matches the description: Former imperial capital beside the Perfume River.",
      "explanationVi": "Chính xác! 'Thua Thien Hue' (Cố đô bên dòng sông Hương).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Thua Thien Hue!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Thua Thien Hue",
        "description": "Former imperial capital beside the Perfume River"
      }
    },
    {
      "questionId": "g3_mq_06",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Province famous for Hoi An Ancient Town with yellow walls. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có phố cổ Hội An. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Quang Nam",
        "Da Nang",
        "Binh Dinh"
      ],
      "correctAnswer": "Quang Nam",
      "explanation": "Spot on! 'Quang Nam' matches the description: Province famous for Hoi An Ancient Town with yellow walls.",
      "explanationVi": "Chính xác! 'Quang Nam' (Tỉnh có phố cổ Hội An).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Quang Nam!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Quang Nam",
        "description": "Province famous for Hoi An Ancient Town with yellow walls"
      }
    },
    {
      "questionId": "g3_mq_07",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: The vibrant heart of the Mekong Delta with floating markets. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thủ phủ miền Tây với chợ nổi Cái Răng. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Can Tho",
        "Ben Tre",
        "Ca Mau"
      ],
      "correctAnswer": "Can Tho",
      "explanation": "Spot on! 'Can Tho' matches the description: The vibrant heart of the Mekong Delta with floating markets.",
      "explanationVi": "Chính xác! 'Can Tho' (Thủ phủ miền Tây với chợ nổi Cái Răng).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Can Tho!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Can Tho",
        "description": "The vibrant heart of the Mekong Delta with floating markets"
      }
    },
    {
      "questionId": "g3_mq_08",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Mountain province home to Sapa and Fansipan Peak. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh vùng cao có Sa Pa và đỉnh Fansipan. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Lao Cai",
        "Yen Bai",
        "Ha Giang"
      ],
      "correctAnswer": "Lao Cai",
      "explanation": "Spot on! 'Lao Cai' matches the description: Mountain province home to Sapa and Fansipan Peak.",
      "explanationVi": "Chính xác! 'Lao Cai' (Tỉnh vùng cao có Sa Pa và đỉnh Fansipan).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Lao Cai!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Lao Cai",
        "description": "Mountain province home to Sapa and Fansipan Peak"
      }
    },
    {
      "questionId": "g3_mq_09",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Highland province famous for cool Da Lat pine hills and flowers. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có thành phố ngàn hoa Đà Lạt. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Lam Dong",
        "Dak Lak",
        "Gia Lai"
      ],
      "correctAnswer": "Lam Dong",
      "explanation": "Spot on! 'Lam Dong' matches the description: Highland province famous for cool Da Lat pine hills and flowers.",
      "explanationVi": "Chính xác! 'Lam Dong' (Tỉnh có thành phố ngàn hoa Đà Lạt).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Lam Dong!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Lam Dong",
        "description": "Highland province famous for cool Da Lat pine hills and flowers"
      }
    },
    {
      "questionId": "g3_mq_10",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "easy",
      "prompt": "Map Clue: Island territory home to Phu Quoc Pearl Island. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có đảo ngọc Phú Quốc. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Kien Giang",
        "Ca Mau",
        "Bac Lieu"
      ],
      "correctAnswer": "Kien Giang",
      "explanation": "Spot on! 'Kien Giang' matches the description: Island territory home to Phu Quoc Pearl Island.",
      "explanationVi": "Chính xác! 'Kien Giang' (Tỉnh có đảo ngọc Phú Quốc).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Kien Giang!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Kien Giang",
        "description": "Island territory home to Phu Quoc Pearl Island"
      }
    },
    {
      "questionId": "g3_mq_11",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Ancient land known as 'Ha Long Bay on land' with Trang An. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Vùng đất cố đô với quần thể Tràng An. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ninh Binh",
        "Thanh Hoa",
        "Nam Dinh"
      ],
      "correctAnswer": "Ninh Binh",
      "explanation": "Spot on! 'Ninh Binh' matches the description: Ancient land known as 'Ha Long Bay on land' with Trang An.",
      "explanationVi": "Chính xác! 'Ninh Binh' (Vùng đất cố đô với quần thể Tràng An).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ninh Binh!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ninh Binh",
        "description": "Ancient land known as 'Ha Long Bay on land' with Trang An"
      }
    },
    {
      "questionId": "g3_mq_12",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: World capital of caves with Phong Nha and Son Doong. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Vương quốc hang động thế giới. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Quang Binh",
        "Quang Tri",
        "Ha Tinh"
      ],
      "correctAnswer": "Quang Binh",
      "explanation": "Spot on! 'Quang Binh' matches the description: World capital of caves with Phong Nha and Son Doong.",
      "explanationVi": "Chính xác! 'Quang Binh' (Vương quốc hang động thế giới).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Quang Binh!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Quang Binh",
        "description": "World capital of caves with Phong Nha and Son Doong"
      }
    },
    {
      "questionId": "g3_mq_13",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Northernmost province with majestic Dong Van Karst Plateau. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Vùng đất địa đầu Tổ quốc với cao nguyên đá. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ha Giang",
        "Cao Bang",
        "Tuyen Quang"
      ],
      "correctAnswer": "Ha Giang",
      "explanation": "Spot on! 'Ha Giang' matches the description: Northernmost province with majestic Dong Van Karst Plateau.",
      "explanationVi": "Chính xác! 'Ha Giang' (Vùng đất địa đầu Tổ quốc với cao nguyên đá).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ha Giang!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ha Giang",
        "description": "Northernmost province with majestic Dong Van Karst Plateau"
      }
    },
    {
      "questionId": "g3_mq_14",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Border province home to the grand Ban Gioc Waterfall. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có thác Bản Giốc hùng vĩ. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Cao Bang",
        "Bac Kan",
        "Lang Son"
      ],
      "correctAnswer": "Cao Bang",
      "explanation": "Spot on! 'Cao Bang' matches the description: Border province home to the grand Ban Gioc Waterfall.",
      "explanationVi": "Chính xác! 'Cao Bang' (Tỉnh có thác Bản Giốc hùng vĩ).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Cao Bang!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Cao Bang",
        "description": "Border province home to the grand Ban Gioc Waterfall"
      }
    },
    {
      "questionId": "g3_mq_15",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Province blessed with the pristine Ba Be freshwater lake. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Vùng đất có hồ nước ngọt Ba Bể. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Bac Kan",
        "Thai Nguyen",
        "Tuyen Quang"
      ],
      "correctAnswer": "Bac Kan",
      "explanation": "Spot on! 'Bac Kan' matches the description: Province blessed with the pristine Ba Be freshwater lake.",
      "explanationVi": "Chính xác! 'Bac Kan' (Vùng đất có hồ nước ngọt Ba Bể).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Bac Kan!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Bac Kan",
        "description": "Province blessed with the pristine Ba Be freshwater lake"
      }
    },
    {
      "questionId": "g3_mq_16",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Coastal paradise home to beautiful Nha Trang Bay. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Xứ sở trầm hương với vịnh Nha Trang. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Khanh Hoa",
        "Phu Yen",
        "Binh Thuan"
      ],
      "correctAnswer": "Khanh Hoa",
      "explanation": "Spot on! 'Khanh Hoa' matches the description: Coastal paradise home to beautiful Nha Trang Bay.",
      "explanationVi": "Chính xác! 'Khanh Hoa' (Xứ sở trầm hương với vịnh Nha Trang).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Khanh Hoa!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Khanh Hoa",
        "description": "Coastal paradise home to beautiful Nha Trang Bay"
      }
    },
    {
      "questionId": "g3_mq_17",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Martial arts land home to ancient Cham towers in Quy Nhon. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Miền đất võ với tháp Chăm Quy Nhơn. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Binh Dinh",
        "Phu Yen",
        "Quang Ngai"
      ],
      "correctAnswer": "Binh Dinh",
      "explanation": "Spot on! 'Binh Dinh' matches the description: Martial arts land home to ancient Cham towers in Quy Nhon.",
      "explanationVi": "Chính xác! 'Binh Dinh' (Miền đất võ với tháp Chăm Quy Nhơn).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Binh Dinh!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Binh Dinh",
        "description": "Martial arts land home to ancient Cham towers in Quy Nhon"
      }
    },
    {
      "questionId": "g3_mq_18",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Coastal gem famous for Ganh Da Dia hexagonal stone columns. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Xứ sở 'hoa vàng trên cỏ xanh' có Gành Đá Đĩa. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Phu Yen",
        "Khanh Hoa",
        "Binh Dinh"
      ],
      "correctAnswer": "Phu Yen",
      "explanation": "Spot on! 'Phu Yen' matches the description: Coastal gem famous for Ganh Da Dia hexagonal stone columns.",
      "explanationVi": "Chính xác! 'Phu Yen' (Xứ sở 'hoa vàng trên cỏ xanh' có Gành Đá Đĩa).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Phu Yen!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Phu Yen",
        "description": "Coastal gem famous for Ganh Da Dia hexagonal stone columns"
      }
    },
    {
      "questionId": "g3_mq_19",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Southern homeland of sweet green coconuts and winding canals. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Xứ dừa Bến Tre với những con rạch rợp bóng. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ben Tre",
        "Tien Giang",
        "Vinh Long"
      ],
      "correctAnswer": "Ben Tre",
      "explanation": "Spot on! 'Ben Tre' matches the description: Southern homeland of sweet green coconuts and winding canals.",
      "explanationVi": "Chính xác! 'Ben Tre' (Xứ dừa Bến Tre với những con rạch rợp bóng).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ben Tre!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ben Tre",
        "description": "Southern homeland of sweet green coconuts and winding canals"
      }
    },
    {
      "questionId": "g3_mq_20",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "medium",
      "prompt": "Map Clue: Land of pink lotus blooms and Tram Chim red-crowned cranes. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Đất sen hồng Đồng Tháp với sếu đầu đỏ. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Dong Thap",
        "An Giang",
        "Long An"
      ],
      "correctAnswer": "Dong Thap",
      "explanation": "Spot on! 'Dong Thap' matches the description: Land of pink lotus blooms and Tram Chim red-crowned cranes.",
      "explanationVi": "Chính xác! 'Dong Thap' (Đất sen hồng Đồng Tháp với sếu đầu đỏ).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Dong Thap!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Dong Thap",
        "description": "Land of pink lotus blooms and Tram Chim red-crowned cranes"
      }
    },
    {
      "questionId": "g3_mq_21",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Province home to Mount Ba Den, the highest peak in the South. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có đỉnh núi Bà Đen cao nhất Nam Bộ. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Tay Ninh",
        "Binh Duong",
        "Binh Phuoc"
      ],
      "correctAnswer": "Tay Ninh",
      "explanation": "Spot on! 'Tay Ninh' matches the description: Province home to Mount Ba Den, the highest peak in the South.",
      "explanationVi": "Chính xác! 'Tay Ninh' (Tỉnh có đỉnh núi Bà Đen cao nhất Nam Bộ).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Tay Ninh!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Tay Ninh",
        "description": "Province home to Mount Ba Den, the highest peak in the South"
      }
    },
    {
      "questionId": "g3_mq_22",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Border province featuring the Tra Su Cajuput Forest. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có rừng tràm Trà Sư xanh mướt. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "An Giang",
        "Kien Giang",
        "Dong Thap"
      ],
      "correctAnswer": "An Giang",
      "explanation": "Spot on! 'An Giang' matches the description: Border province featuring the Tra Su Cajuput Forest.",
      "explanationVi": "Chính xác! 'An Giang' (Tỉnh có rừng tràm Trà Sư xanh mướt).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is An Giang!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "An Giang",
        "description": "Border province featuring the Tra Su Cajuput Forest"
      }
    },
    {
      "questionId": "g3_mq_23",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Southernmost tip of Vietnam where forest meets the sea. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Mũi Cà Mau - điểm cực Nam Tổ quốc. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ca Mau",
        "Bac Lieu",
        "Soc Trang"
      ],
      "correctAnswer": "Ca Mau",
      "explanation": "Spot on! 'Ca Mau' matches the description: Southernmost tip of Vietnam where forest meets the sea.",
      "explanationVi": "Chính xác! 'Ca Mau' (Mũi Cà Mau - điểm cực Nam Tổ quốc).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ca Mau!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ca Mau",
        "description": "Southernmost tip of Vietnam where forest meets the sea"
      }
    },
    {
      "questionId": "g3_mq_24",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Historic valley known for the glorious Dien Bien Phu victory. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thung lũng lịch sử Điện Biên Phủ. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Dien Bien",
        "Lai Chau",
        "Son La"
      ],
      "correctAnswer": "Dien Bien",
      "explanation": "Spot on! 'Dien Bien' matches the description: Historic valley known for the glorious Dien Bien Phu victory.",
      "explanationVi": "Chính xác! 'Dien Bien' (Thung lũng lịch sử Điện Biên Phủ).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Dien Bien!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Dien Bien",
        "description": "Historic valley known for the glorious Dien Bien Phu victory"
      }
    },
    {
      "questionId": "g3_mq_25",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Moc Chau highland plateau famous for green tea hills and plum blossoms. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Cao nguyên Mộc Châu đồi chè và hoa mận. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Son La",
        "Hoa Binh",
        "Yen Bai"
      ],
      "correctAnswer": "Son La",
      "explanation": "Spot on! 'Son La' matches the description: Moc Chau highland plateau famous for green tea hills and plum blossoms.",
      "explanationVi": "Chính xác! 'Son La' (Cao nguyên Mộc Châu đồi chè và hoa mận).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Son La!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Son La",
        "description": "Moc Chau highland plateau famous for green tea hills and plum blossoms"
      }
    },
    {
      "questionId": "g3_mq_26",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Central Highlands province with the 100-year-old Wooden Church. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Vùng đất Tây Nguyên với Nhà thờ gỗ 100 tuổi. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Kon Tum",
        "Gia Lai",
        "Dak Lak"
      ],
      "correctAnswer": "Kon Tum",
      "explanation": "Spot on! 'Kon Tum' matches the description: Central Highlands province with the 100-year-old Wooden Church.",
      "explanationVi": "Chính xác! 'Kon Tum' (Vùng đất Tây Nguyên với Nhà thờ gỗ 100 tuổi).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Kon Tum!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Kon Tum",
        "description": "Central Highlands province with the 100-year-old Wooden Church"
      }
    },
    {
      "questionId": "g3_mq_27",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Coffee capital of Vietnam with Buon Ma Thuot city. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thủ phủ cà phê Buôn Ma Thuột. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Dak Lak",
        "Lam Dong",
        "Dak Nong"
      ],
      "correctAnswer": "Dak Lak",
      "explanation": "Spot on! 'Dak Lak' matches the description: Coffee capital of Vietnam with Buon Ma Thuot city.",
      "explanationVi": "Chính xác! 'Dak Lak' (Thủ phủ cà phê Buôn Ma Thuột).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Dak Lak!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Dak Lak",
        "description": "Coffee capital of Vietnam with Buon Ma Thuot city"
      }
    },
    {
      "questionId": "g3_mq_28",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Peninsula province famous for seaside beaches and Statue of Christ. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Thành phố biển Vũng Tàu. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Ba Ria - Vung Tau",
        "Binh Thuan",
        "Dong Nai"
      ],
      "correctAnswer": "Ba Ria - Vung Tau",
      "explanation": "Spot on! 'Ba Ria - Vung Tau' matches the description: Peninsula province famous for seaside beaches and Statue of Christ.",
      "explanationVi": "Chính xác! 'Ba Ria - Vung Tau' (Thành phố biển Vũng Tàu).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Ba Ria - Vung Tau!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Ba Ria - Vung Tau",
        "description": "Peninsula province famous for seaside beaches and Statue of Christ"
      }
    },
    {
      "questionId": "g3_mq_29",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Coastal province home to Ly Son volcanic garlic island. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Tỉnh có đảo tỏi núi lửa Lý Sơn. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Quang Ngai",
        "Quang Nam",
        "Binh Dinh"
      ],
      "correctAnswer": "Quang Ngai",
      "explanation": "Spot on! 'Quang Ngai' matches the description: Coastal province home to Ly Son volcanic garlic island.",
      "explanationVi": "Chính xác! 'Quang Ngai' (Tỉnh có đảo tỏi núi lửa Lý Sơn).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Quang Ngai!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Quang Ngai",
        "description": "Coastal province home to Ly Son volcanic garlic island"
      }
    },
    {
      "questionId": "g3_mq_30",
      "grade": 3,
      "gameType": "map_quest",
      "topic": "Vietnam Geography & Provinces",
      "difficulty": "challenge",
      "prompt": "Map Clue: Border trading province home to Mau Son mountain peak. Which province or city is it?",
      "promptVi": "Manh mối bản đồ: Xứ Lạng với đỉnh Mẫu Sơn quanh năm mây phủ. Đó là tỉnh/thành phố nào?",
      "answerOptions": [
        "Lang Son",
        "Bac Giang",
        "Quang Ninh"
      ],
      "correctAnswer": "Lang Son",
      "explanation": "Spot on! 'Lang Son' matches the description: Border trading province home to Mau Son mountain peak.",
      "explanationVi": "Chính xác! 'Lang Son' (Xứ Lạng với đỉnh Mẫu Sơn quanh năm mây phủ).",
      "imageAsset": "🗺️",
      "audioPrompt": "Which province is this? It is Lang Son!",
      "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
      "metadata": {
        "province": "Lang Son",
        "description": "Border trading province home to Mau Son mountain peak"
      }
    }
  ],
  "sentence_puzzle": [
    {
      "questionId": "g3_puz_01",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'I like reading English comic books.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Tôi thích đọc truyện tranh tiếng Anh.'",
      "answerOptions": [
        "I like reading",
        "English comic books."
      ],
      "correctAnswer": "I like reading English comic books.",
      "explanation": "Splendid! The pieces join together to form: 'I like reading English comic books.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'I like reading English comic books.'.",
      "imageAsset": "🧩",
      "audioPrompt": "I like reading English comic books.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "I like reading",
          "English comic books."
        ],
        "fullSentence": "I like reading English comic books."
      }
    },
    {
      "questionId": "g3_puz_02",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'Hanoi is the capital of Vietnam.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Hà Nội là thủ đô của Việt Nam.'",
      "answerOptions": [
        "Hanoi is",
        "the capital of Vietnam."
      ],
      "correctAnswer": "Hanoi is the capital of Vietnam.",
      "explanation": "Splendid! The pieces join together to form: 'Hanoi is the capital of Vietnam.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Hanoi is the capital of Vietnam.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Hanoi is the capital of Vietnam.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Hanoi is",
          "the capital of Vietnam."
        ],
        "fullSentence": "Hanoi is the capital of Vietnam."
      }
    },
    {
      "questionId": "g3_puz_03",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'Ha Long Bay has many green islands.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Vịnh Hạ Long có rất nhiều hòn đảo xanh.'",
      "answerOptions": [
        "Ha Long Bay has",
        "many green islands."
      ],
      "correctAnswer": "Ha Long Bay has many green islands.",
      "explanation": "Splendid! The pieces join together to form: 'Ha Long Bay has many green islands.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Ha Long Bay has many green islands.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Ha Long Bay has many green islands.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Ha Long Bay has",
          "many green islands."
        ],
        "fullSentence": "Ha Long Bay has many green islands."
      }
    },
    {
      "questionId": "g3_puz_04",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'Hoi An is famous for colourful lanterns.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Hội An nổi tiếng với những chiếc đèn lồng rực rỡ.'",
      "answerOptions": [
        "Hoi An is famous",
        "for colourful lanterns."
      ],
      "correctAnswer": "Hoi An is famous for colourful lanterns.",
      "explanation": "Splendid! The pieces join together to form: 'Hoi An is famous for colourful lanterns.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Hoi An is famous for colourful lanterns.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Hoi An is famous for colourful lanterns.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Hoi An is famous",
          "for colourful lanterns."
        ],
        "fullSentence": "Hoi An is famous for colourful lanterns."
      }
    },
    {
      "questionId": "g3_puz_05",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'Hue Citadel has ancient royal palaces.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Đại Nội Huế có những cung điện hoàng gia cổ kính.'",
      "answerOptions": [
        "Hue Citadel has",
        "ancient royal palaces."
      ],
      "correctAnswer": "Hue Citadel has ancient royal palaces.",
      "explanation": "Splendid! The pieces join together to form: 'Hue Citadel has ancient royal palaces.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Hue Citadel has ancient royal palaces.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Hue Citadel has ancient royal palaces.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Hue Citadel has",
          "ancient royal palaces."
        ],
        "fullSentence": "Hue Citadel has ancient royal palaces."
      }
    },
    {
      "questionId": "g3_puz_06",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'We eat delicious beef Pho for breakfast.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Chúng tôi ăn phở bò thơm ngon cho bữa sáng.'",
      "answerOptions": [
        "We eat delicious",
        "beef Pho for breakfast."
      ],
      "correctAnswer": "We eat delicious beef Pho for breakfast.",
      "explanation": "Splendid! The pieces join together to form: 'We eat delicious beef Pho for breakfast.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'We eat delicious beef Pho for breakfast.'.",
      "imageAsset": "🧩",
      "audioPrompt": "We eat delicious beef Pho for breakfast.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "We eat delicious",
          "beef Pho for breakfast."
        ],
        "fullSentence": "We eat delicious beef Pho for breakfast."
      }
    },
    {
      "questionId": "g3_puz_07",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'My sister plays the piano very well.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Em gái tôi chơi đàn piano rất giỏi.'",
      "answerOptions": [
        "My sister plays",
        "the piano very well."
      ],
      "correctAnswer": "My sister plays the piano very well.",
      "explanation": "Splendid! The pieces join together to form: 'My sister plays the piano very well.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'My sister plays the piano very well.'.",
      "imageAsset": "🧩",
      "audioPrompt": "My sister plays the piano very well.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "My sister plays",
          "the piano very well."
        ],
        "fullSentence": "My sister plays the piano very well."
      }
    },
    {
      "questionId": "g3_puz_08",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'They travel to Da Nang by plane.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Họ đi du lịch đến Đà Nẵng bằng máy bay.'",
      "answerOptions": [
        "They travel to",
        "Da Nang by plane."
      ],
      "correctAnswer": "They travel to Da Nang by plane.",
      "explanation": "Splendid! The pieces join together to form: 'They travel to Da Nang by plane.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'They travel to Da Nang by plane.'.",
      "imageAsset": "🧩",
      "audioPrompt": "They travel to Da Nang by plane.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "They travel to",
          "Da Nang by plane."
        ],
        "fullSentence": "They travel to Da Nang by plane."
      }
    },
    {
      "questionId": "g3_puz_09",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'There is a big clock on the classroom wall.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Có một chiếc đồng hồ lớn trên tường lớp học.'",
      "answerOptions": [
        "There is a big clock",
        "on the classroom wall."
      ],
      "correctAnswer": "There is a big clock on the classroom wall.",
      "explanation": "Splendid! The pieces join together to form: 'There is a big clock on the classroom wall.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'There is a big clock on the classroom wall.'.",
      "imageAsset": "🧩",
      "audioPrompt": "There is a big clock on the classroom wall.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "There is a big clock",
          "on the classroom wall."
        ],
        "fullSentence": "There is a big clock on the classroom wall."
      }
    },
    {
      "questionId": "g3_puz_10",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "easy",
      "prompt": "Snap the puzzle pieces together to build: 'Students wear white shirts on Monday.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Học sinh mặc áo sơ mi trắng vào thứ Hai.'",
      "answerOptions": [
        "Students wear white shirts",
        "on Monday."
      ],
      "correctAnswer": "Students wear white shirts on Monday.",
      "explanation": "Splendid! The pieces join together to form: 'Students wear white shirts on Monday.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Students wear white shirts on Monday.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Students wear white shirts on Monday.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Students wear white shirts",
          "on Monday."
        ],
        "fullSentence": "Students wear white shirts on Monday."
      }
    },
    {
      "questionId": "g3_puz_11",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'During the Mid-Autumn Festival, children carry star lanterns.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Trong dịp Tết Trung Thu, trẻ em rước đèn ông sao.'",
      "answerOptions": [
        "During the Mid-Autumn Festival,",
        "children carry star lanterns."
      ],
      "correctAnswer": "During the Mid-Autumn Festival, children carry star lanterns.",
      "explanation": "Splendid! The pieces join together to form: 'During the Mid-Autumn Festival, children carry star lanterns.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'During the Mid-Autumn Festival, children carry star lanterns.'.",
      "imageAsset": "🧩",
      "audioPrompt": "During the Mid-Autumn Festival, children carry star lanterns.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "During the Mid-Autumn Festival,",
          "children carry star lanterns."
        ],
        "fullSentence": "During the Mid-Autumn Festival, children carry star lanterns."
      }
    },
    {
      "questionId": "g3_puz_12",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Tourists take wooden cruise boats to explore limestone caves.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Du khách đi thuyền gỗ để khám phá các hang động đá vôi.'",
      "answerOptions": [
        "Tourists take wooden cruise boats",
        "to explore limestone caves."
      ],
      "correctAnswer": "Tourists take wooden cruise boats to explore limestone caves.",
      "explanation": "Splendid! The pieces join together to form: 'Tourists take wooden cruise boats to explore limestone caves.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Tourists take wooden cruise boats to explore limestone caves.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Tourists take wooden cruise boats to explore limestone caves.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Tourists take wooden cruise boats",
          "to explore limestone caves."
        ],
        "fullSentence": "Tourists take wooden cruise boats to explore limestone caves."
      }
    },
    {
      "questionId": "g3_puz_13",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Chợ Bến Thành là địa điểm mua sắm nổi tiếng ở TP.HCM.'",
      "answerOptions": [
        "Ben Thanh Market is a famous",
        "shopping landmark in Ho Chi Minh City."
      ],
      "correctAnswer": "Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.",
      "explanation": "Splendid! The pieces join together to form: 'Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Ben Thanh Market is a famous",
          "shopping landmark in Ho Chi Minh City."
        ],
        "fullSentence": "Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City."
      }
    },
    {
      "questionId": "g3_puz_14",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Fansipan is the highest mountain peak in Indochina.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Fansipan là đỉnh núi cao nhất Đông Dương.'",
      "answerOptions": [
        "Fansipan is the highest",
        "mountain peak in Indochina."
      ],
      "correctAnswer": "Fansipan is the highest mountain peak in Indochina.",
      "explanation": "Splendid! The pieces join together to form: 'Fansipan is the highest mountain peak in Indochina.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Fansipan is the highest mountain peak in Indochina.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Fansipan is the highest mountain peak in Indochina.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Fansipan is the highest",
          "mountain peak in Indochina."
        ],
        "fullSentence": "Fansipan is the highest mountain peak in Indochina."
      }
    },
    {
      "questionId": "g3_puz_15",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'My grandmother makes sweet lotus tea every spring morning.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Bà tôi pha trà sen thơm ngát vào mỗi buổi sáng mùa xuân.'",
      "answerOptions": [
        "My grandmother makes sweet",
        "lotus tea every spring morning."
      ],
      "correctAnswer": "My grandmother makes sweet lotus tea every spring morning.",
      "explanation": "Splendid! The pieces join together to form: 'My grandmother makes sweet lotus tea every spring morning.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'My grandmother makes sweet lotus tea every spring morning.'.",
      "imageAsset": "🧩",
      "audioPrompt": "My grandmother makes sweet lotus tea every spring morning.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "My grandmother makes sweet",
          "lotus tea every spring morning."
        ],
        "fullSentence": "My grandmother makes sweet lotus tea every spring morning."
      }
    },
    {
      "questionId": "g3_puz_16",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'We rode bicycles around West Lake yesterday afternoon.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Chúng tôi đạp xe quanh Hồ Tây vào chiều qua.'",
      "answerOptions": [
        "We rode bicycles around",
        "West Lake yesterday afternoon."
      ],
      "correctAnswer": "We rode bicycles around West Lake yesterday afternoon.",
      "explanation": "Splendid! The pieces join together to form: 'We rode bicycles around West Lake yesterday afternoon.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'We rode bicycles around West Lake yesterday afternoon.'.",
      "imageAsset": "🧩",
      "audioPrompt": "We rode bicycles around West Lake yesterday afternoon.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "We rode bicycles around",
          "West Lake yesterday afternoon."
        ],
        "fullSentence": "We rode bicycles around West Lake yesterday afternoon."
      }
    },
    {
      "questionId": "g3_puz_17",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Many colourful boats sell fresh fruits on Cai Rang floating market.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Nhiều thuyền ghe rực rỡ bán hoa quả tươi trên chợ nổi Cái Răng.'",
      "answerOptions": [
        "Many colourful boats sell",
        "fresh fruits on Cai Rang floating market."
      ],
      "correctAnswer": "Many colourful boats sell fresh fruits on Cai Rang floating market.",
      "explanation": "Splendid! The pieces join together to form: 'Many colourful boats sell fresh fruits on Cai Rang floating market.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Many colourful boats sell fresh fruits on Cai Rang floating market.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Many colourful boats sell fresh fruits on Cai Rang floating market.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Many colourful boats sell",
          "fresh fruits on Cai Rang floating market."
        ],
        "fullSentence": "Many colourful boats sell fresh fruits on Cai Rang floating market."
      }
    },
    {
      "questionId": "g3_puz_18",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'The golden turtle returned the magic sword to King Le Loi.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Rùa vàng đã hoàn trả gươm thần cho vua Lê Lợi.'",
      "answerOptions": [
        "The golden turtle returned",
        "the magic sword to King Le Loi."
      ],
      "correctAnswer": "The golden turtle returned the magic sword to King Le Loi.",
      "explanation": "Splendid! The pieces join together to form: 'The golden turtle returned the magic sword to King Le Loi.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'The golden turtle returned the magic sword to King Le Loi.'.",
      "imageAsset": "🧩",
      "audioPrompt": "The golden turtle returned the magic sword to King Le Loi.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "The golden turtle returned",
          "the magic sword to King Le Loi."
        ],
        "fullSentence": "The golden turtle returned the magic sword to King Le Loi."
      }
    },
    {
      "questionId": "g3_puz_19",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Cầu Vàng Đà Nẵng trông như hai bàn tay đá nâng dải lụa.'",
      "answerOptions": [
        "Da Nang Golden Bridge looks like",
        "two stone hands holding a silk ribbon."
      ],
      "correctAnswer": "Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.",
      "explanation": "Splendid! The pieces join together to form: 'Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Da Nang Golden Bridge looks like",
          "two stone hands holding a silk ribbon."
        ],
        "fullSentence": "Da Nang Golden Bridge looks like two stone hands holding a silk ribbon."
      }
    },
    {
      "questionId": "g3_puz_20",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "medium",
      "prompt": "Snap the puzzle pieces together to build: 'Vietnamese students love speaking English with Ms. Trang.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Học sinh Việt Nam rất thích nói tiếng Anh cùng cô Trang.'",
      "answerOptions": [
        "Vietnamese students love",
        "speaking English with Ms. Trang."
      ],
      "correctAnswer": "Vietnamese students love speaking English with Ms. Trang.",
      "explanation": "Splendid! The pieces join together to form: 'Vietnamese students love speaking English with Ms. Trang.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Vietnamese students love speaking English with Ms. Trang.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Vietnamese students love speaking English with Ms. Trang.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Vietnamese students love",
          "speaking English with Ms. Trang."
        ],
        "fullSentence": "Vietnamese students love speaking English with Ms. Trang."
      }
    },
    {
      "questionId": "g3_puz_21",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Because it was sunny and breezy, we flew our kites on the grass field.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Vì trời nắng và có gió nhẹ, chúng tôi thả diều trên bãi cỏ.'",
      "answerOptions": [
        "Because it was sunny and breezy,",
        "we flew our kites on the grass field."
      ],
      "correctAnswer": "Because it was sunny and breezy, we flew our kites on the grass field.",
      "explanation": "Splendid! The pieces join together to form: 'Because it was sunny and breezy, we flew our kites on the grass field.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Because it was sunny and breezy, we flew our kites on the grass field.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Because it was sunny and breezy, we flew our kites on the grass field.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Because it was sunny and breezy,",
          "we flew our kites on the grass field."
        ],
        "fullSentence": "Because it was sunny and breezy, we flew our kites on the grass field."
      }
    },
    {
      "questionId": "g3_puz_22",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Khi bạn ghé thăm phố cổ Hội An về đêm, cả dòng sông bừng sáng ánh đèn hoa đăng.'",
      "answerOptions": [
        "When you visit Hoi An Ancient Town at night,",
        "the whole river glows with lanterns."
      ],
      "correctAnswer": "When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.",
      "explanation": "Splendid! The pieces join together to form: 'When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.'.",
      "imageAsset": "🧩",
      "audioPrompt": "When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "When you visit Hoi An Ancient Town at night,",
          "the whole river glows with lanterns."
        ],
        "fullSentence": "When you visit Hoi An Ancient Town at night, the whole river glows with lanterns."
      }
    },
    {
      "questionId": "g3_puz_23",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Although the mountain trail was steep, we reached the scenic summit safely.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Dù đường mòn lên núi khá dốc, chúng tôi vẫn lên đến đỉnh an toàn.'",
      "answerOptions": [
        "Although the mountain trail was steep,",
        "we reached the scenic summit safely."
      ],
      "correctAnswer": "Although the mountain trail was steep, we reached the scenic summit safely.",
      "explanation": "Splendid! The pieces join together to form: 'Although the mountain trail was steep, we reached the scenic summit safely.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Although the mountain trail was steep, we reached the scenic summit safely.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Although the mountain trail was steep, we reached the scenic summit safely.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Although the mountain trail was steep,",
          "we reached the scenic summit safely."
        ],
        "fullSentence": "Although the mountain trail was steep, we reached the scenic summit safely."
      }
    },
    {
      "questionId": "g3_puz_24",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'In the Mekong Delta, people travel by small boats along winding coconut canals.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Ở đồng bằng sông Cửu Long, người dân di chuyển bằng xuồng ba lá ven rạch dừa.'",
      "answerOptions": [
        "In the Mekong Delta, people travel",
        "by small boats along winding coconut canals."
      ],
      "correctAnswer": "In the Mekong Delta, people travel by small boats along winding coconut canals.",
      "explanation": "Splendid! The pieces join together to form: 'In the Mekong Delta, people travel by small boats along winding coconut canals.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'In the Mekong Delta, people travel by small boats along winding coconut canals.'.",
      "imageAsset": "🧩",
      "audioPrompt": "In the Mekong Delta, people travel by small boats along winding coconut canals.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "In the Mekong Delta, people travel",
          "by small boats along winding coconut canals."
        ],
        "fullSentence": "In the Mekong Delta, people travel by small boats along winding coconut canals."
      }
    },
    {
      "questionId": "g3_puz_25",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Before the school bell rings, students gather in the yard to do morning exercises.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Trước khi chuông reo, học sinh tập trung dưới sân để tập thể dục buổi sáng.'",
      "answerOptions": [
        "Before the school bell rings,",
        "students gather in the yard to do morning exercises."
      ],
      "correctAnswer": "Before the school bell rings, students gather in the yard to do morning exercises.",
      "explanation": "Splendid! The pieces join together to form: 'Before the school bell rings, students gather in the yard to do morning exercises.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Before the school bell rings, students gather in the yard to do morning exercises.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Before the school bell rings, students gather in the yard to do morning exercises.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Before the school bell rings,",
          "students gather in the yard to do morning exercises."
        ],
        "fullSentence": "Before the school bell rings, students gather in the yard to do morning exercises."
      }
    },
    {
      "questionId": "g3_puz_26",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'If you climb to the top of Turtle Tower, you can view the peaceful green lake.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Nếu nhìn từ Tháp Rùa, bạn sẽ thấy mặt hồ trong xanh thanh bình.'",
      "answerOptions": [
        "If you climb to the top of Turtle Tower,",
        "you can view the peaceful green lake."
      ],
      "correctAnswer": "If you climb to the top of Turtle Tower, you can view the peaceful green lake.",
      "explanation": "Splendid! The pieces join together to form: 'If you climb to the top of Turtle Tower, you can view the peaceful green lake.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'If you climb to the top of Turtle Tower, you can view the peaceful green lake.'.",
      "imageAsset": "🧩",
      "audioPrompt": "If you climb to the top of Turtle Tower, you can view the peaceful green lake.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "If you climb to the top of Turtle Tower,",
          "you can view the peaceful green lake."
        ],
        "fullSentence": "If you climb to the top of Turtle Tower, you can view the peaceful green lake."
      }
    },
    {
      "questionId": "g3_puz_27",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Traditional water puppetry tells funny folk stories with wooden puppets on water.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Múa rối nước truyền thống kể các câu chuyện dân gian bằng con rối gỗ trên nước.'",
      "answerOptions": [
        "Traditional water puppetry tells",
        "funny folk stories with wooden puppets on water."
      ],
      "correctAnswer": "Traditional water puppetry tells funny folk stories with wooden puppets on water.",
      "explanation": "Splendid! The pieces join together to form: 'Traditional water puppetry tells funny folk stories with wooden puppets on water.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Traditional water puppetry tells funny folk stories with wooden puppets on water.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Traditional water puppetry tells funny folk stories with wooden puppets on water.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Traditional water puppetry tells",
          "funny folk stories with wooden puppets on water."
        ],
        "fullSentence": "Traditional water puppetry tells funny folk stories with wooden puppets on water."
      }
    },
    {
      "questionId": "g3_puz_28",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'My family traveled to Phu Quoc Island to swim in the crystal blue sea.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Gia đình tôi đi đảo Phú Quốc để tắm biển xanh trong vắt.'",
      "answerOptions": [
        "My family traveled to Phu Quoc Island",
        "to swim in the crystal blue sea."
      ],
      "correctAnswer": "My family traveled to Phu Quoc Island to swim in the crystal blue sea.",
      "explanation": "Splendid! The pieces join together to form: 'My family traveled to Phu Quoc Island to swim in the crystal blue sea.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'My family traveled to Phu Quoc Island to swim in the crystal blue sea.'.",
      "imageAsset": "🧩",
      "audioPrompt": "My family traveled to Phu Quoc Island to swim in the crystal blue sea.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "My family traveled to Phu Quoc Island",
          "to swim in the crystal blue sea."
        ],
        "fullSentence": "My family traveled to Phu Quoc Island to swim in the crystal blue sea."
      }
    },
    {
      "questionId": "g3_puz_29",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Nghệ nhân gốm Bát Tràng tạo ra những chiếc bát và bình gốm tuyệt đẹp.'",
      "answerOptions": [
        "Local artisans in Bat Trang ceramic village craft",
        "beautiful clay bowls and vases."
      ],
      "correctAnswer": "Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.",
      "explanation": "Splendid! The pieces join together to form: 'Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Local artisans in Bat Trang ceramic village craft",
          "beautiful clay bowls and vases."
        ],
        "fullSentence": "Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases."
      }
    },
    {
      "questionId": "g3_puz_30",
      "grade": 3,
      "gameType": "sentence_puzzle",
      "topic": "Sentence Construction & Clauses",
      "difficulty": "challenge",
      "prompt": "Snap the puzzle pieces together to build: 'Learning English helps young explorers introduce Vietnam's beauty to foreign friends.'",
      "promptVi": "Ghép các mảnh câu hoàn chỉnh: 'Học tiếng Anh giúp các nhà thám hiểm nhí giới thiệu vẻ đẹp Việt Nam với bạn bè quốc tế.'",
      "answerOptions": [
        "Learning English helps young explorers",
        "introduce Vietnam's beauty to foreign friends."
      ],
      "correctAnswer": "Learning English helps young explorers introduce Vietnam's beauty to foreign friends.",
      "explanation": "Splendid! The pieces join together to form: 'Learning English helps young explorers introduce Vietnam's beauty to foreign friends.'.",
      "explanationVi": "Xuất sắc! Các mảnh ghép hoàn chỉnh: 'Learning English helps young explorers introduce Vietnam's beauty to foreign friends.'.",
      "imageAsset": "🧩",
      "audioPrompt": "Learning English helps young explorers introduce Vietnam's beauty to foreign friends.",
      "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
      "metadata": {
        "sentenceParts": [
          "Learning English helps young explorers",
          "introduce Vietnam's beauty to foreign friends."
        ],
        "fullSentence": "Learning English helps young explorers introduce Vietnam's beauty to foreign friends."
      }
    }
  ],
  "listening_detective": [
    {
      "questionId": "g3_det_01",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am a stone tower in the middle of a lake in Hanoi. A golden turtle lives nearby. What am I?' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a stone tower in the middle of a lake in Hanoi. A golden turtle lives nearby. What am I?' (Tháp Rùa Hồ Gươm)",
      "answerOptions": [
        "Turtle Tower",
        "Big Ben",
        "Eiffel Tower"
      ],
      "correctAnswer": "Turtle Tower",
      "explanation": "Case solved, Detective! It is Turtle Tower (Tháp Rùa Hồ Gươm).",
      "explanationVi": "Phá án thành công! Đó chính là Turtle Tower (Tháp Rùa Hồ Gươm).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a stone tower in the middle of a lake in Hanoi. A golden turtle lives nearby. What am I?",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a stone tower in the middle of a lake in Hanoi. A golden turtle lives nearby. What am I?",
        "answer": "Turtle Tower"
      }
    },
    {
      "questionId": "g3_det_02",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I have thousands of green limestone islands in the sea. People sleep on cruise ships here. Who am I?' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I have thousands of green limestone islands in the sea. People sleep on cruise ships here. Who am I?' (Vịnh Hạ Long)",
      "answerOptions": [
        "Ha Long Bay",
        "Red River",
        "West Lake"
      ],
      "correctAnswer": "Ha Long Bay",
      "explanation": "Case solved, Detective! It is Ha Long Bay (Vịnh Hạ Long).",
      "explanationVi": "Phá án thành công! Đó chính là Ha Long Bay (Vịnh Hạ Long).",
      "imageAsset": "🔍",
      "audioPrompt": "I have thousands of green limestone islands in the sea. People sleep on cruise ships here. Who am I?",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I have thousands of green limestone islands in the sea. People sleep on cruise ships here. Who am I?",
        "answer": "Ha Long Bay"
      }
    },
    {
      "questionId": "g3_det_03",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I was home to Vietnamese emperors. I have ancient stone gates and thrones beside the Perfume River.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I was home to Vietnamese emperors. I have ancient stone gates and thrones beside the Perfume River.' (Đại Nội Huế)",
      "answerOptions": [
        "Hue Citadel",
        "Hanoi Opera House",
        "Ben Thanh Market"
      ],
      "correctAnswer": "Hue Citadel",
      "explanation": "Case solved, Detective! It is Hue Citadel (Đại Nội Huế).",
      "explanationVi": "Phá án thành công! Đó chính là Hue Citadel (Đại Nội Huế).",
      "imageAsset": "🔍",
      "audioPrompt": "I was home to Vietnamese emperors. I have ancient stone gates and thrones beside the Perfume River.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I was home to Vietnamese emperors. I have ancient stone gates and thrones beside the Perfume River.",
        "answer": "Hue Citadel"
      }
    },
    {
      "questionId": "g3_det_04",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am an ancient town with yellow walls, tailor shops, and glowing river lanterns at night.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am an ancient town with yellow walls, tailor shops, and glowing river lanterns at night.' (Phố cổ Hội An)",
      "answerOptions": [
        "Hoi An",
        "Da Nang",
        "Nha Trang"
      ],
      "correctAnswer": "Hoi An",
      "explanation": "Case solved, Detective! It is Hoi An (Phố cổ Hội An).",
      "explanationVi": "Phá án thành công! Đó chính là Hoi An (Phố cổ Hội An).",
      "imageAsset": "🔍",
      "audioPrompt": "I am an ancient town with yellow walls, tailor shops, and glowing river lanterns at night.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am an ancient town with yellow walls, tailor shops, and glowing river lanterns at night.",
        "answer": "Hoi An"
      }
    },
    {
      "questionId": "g3_det_05",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I have a big clock tower at my front entrance in Ho Chi Minh City. Inside, vendors sell souvenirs and food.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I have a big clock tower at my front entrance in Ho Chi Minh City. Inside, vendors sell souvenirs and food.' (Chợ Bến Thành)",
      "answerOptions": [
        "Ben Thanh Market",
        "Dong Xuan Market",
        "Dam Market"
      ],
      "correctAnswer": "Ben Thanh Market",
      "explanation": "Case solved, Detective! It is Ben Thanh Market (Chợ Bến Thành).",
      "explanationVi": "Phá án thành công! Đó chính là Ben Thanh Market (Chợ Bến Thành).",
      "imageAsset": "🔍",
      "audioPrompt": "I have a big clock tower at my front entrance in Ho Chi Minh City. Inside, vendors sell souvenirs and food.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I have a big clock tower at my front entrance in Ho Chi Minh City. Inside, vendors sell souvenirs and food.",
        "answer": "Ben Thanh Market"
      }
    },
    {
      "questionId": "g3_det_06",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am a pedestrian bridge in Da Nang held up by two giant mossy stone hands. Who am I?' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a pedestrian bridge in Da Nang held up by two giant mossy stone hands. Who am I?' (Cầu Vàng)",
      "answerOptions": [
        "Golden Bridge",
        "Dragon Bridge",
        "Long Bien Bridge"
      ],
      "correctAnswer": "Golden Bridge",
      "explanation": "Case solved, Detective! It is Golden Bridge (Cầu Vàng).",
      "explanationVi": "Phá án thành công! Đó chính là Golden Bridge (Cầu Vàng).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a pedestrian bridge in Da Nang held up by two giant mossy stone hands. Who am I?",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a pedestrian bridge in Da Nang held up by two giant mossy stone hands. Who am I?",
        "answer": "Golden Bridge"
      }
    },
    {
      "questionId": "g3_det_07",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am 3,143 meters tall. People call me the 'Roof of Indochina'. You can take a cable car to my peak.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am 3,143 meters tall. People call me the 'Roof of Indochina'. You can take a cable car to my peak.' (Đỉnh Fansipan)",
      "answerOptions": [
        "Fansipan",
        "Ba Den",
        "Langbiang"
      ],
      "correctAnswer": "Fansipan",
      "explanation": "Case solved, Detective! It is Fansipan (Đỉnh Fansipan).",
      "explanationVi": "Phá án thành công! Đó chính là Fansipan (Đỉnh Fansipan).",
      "imageAsset": "🔍",
      "audioPrompt": "I am 3,143 meters tall. People call me the 'Roof of Indochina'. You can take a cable car to my peak.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am 3,143 meters tall. People call me the 'Roof of Indochina'. You can take a cable car to my peak.",
        "answer": "Fansipan"
      }
    },
    {
      "questionId": "g3_det_08",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am a yellow bridge shaped like a giant dragon in Da Nang. On weekends, I breathe fire and spray water!' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a yellow bridge shaped like a giant dragon in Da Nang. On weekends, I breathe fire and spray water!' (Cầu Rồng Đà Nẵng)",
      "answerOptions": [
        "Dragon Bridge",
        "Golden Bridge",
        "Han River Bridge"
      ],
      "correctAnswer": "Dragon Bridge",
      "explanation": "Case solved, Detective! It is Dragon Bridge (Cầu Rồng Đà Nẵng).",
      "explanationVi": "Phá án thành công! Đó chính là Dragon Bridge (Cầu Rồng Đà Nẵng).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a yellow bridge shaped like a giant dragon in Da Nang. On weekends, I breathe fire and spray water!",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a yellow bridge shaped like a giant dragon in Da Nang. On weekends, I breathe fire and spray water!",
        "answer": "Dragon Bridge"
      }
    },
    {
      "questionId": "g3_det_09",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am Vietnam's national flower. I grow pure and pink from the muddy water with a sweet fragrance.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am Vietnam's national flower. I grow pure and pink from the muddy water with a sweet fragrance.' (Hoa sen)",
      "answerOptions": [
        "Lotus",
        "Rose",
        "Sunflower"
      ],
      "correctAnswer": "Lotus",
      "explanation": "Case solved, Detective! It is Lotus (Hoa sen).",
      "explanationVi": "Phá án thành công! Đó chính là Lotus (Hoa sen).",
      "imageAsset": "🔍",
      "audioPrompt": "I am Vietnam's national flower. I grow pure and pink from the muddy water with a sweet fragrance.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am Vietnam's national flower. I grow pure and pink from the muddy water with a sweet fragrance.",
        "answer": "Lotus"
      }
    },
    {
      "questionId": "g3_det_10",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "easy",
      "prompt": "Detective Clue: 'I am a graceful traditional Vietnamese costume with two long silk flaps worn over trousers.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a graceful traditional Vietnamese costume with two long silk flaps worn over trousers.' (Áo dài truyền thống)",
      "answerOptions": [
        "Ao Dai",
        "Kimono",
        "Hanbok"
      ],
      "correctAnswer": "Ao Dai",
      "explanation": "Case solved, Detective! It is Ao Dai (Áo dài truyền thống).",
      "explanationVi": "Phá án thành công! Đó chính là Ao Dai (Áo dài truyền thống).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a graceful traditional Vietnamese costume with two long silk flaps worn over trousers.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a graceful traditional Vietnamese costume with two long silk flaps worn over trousers.",
        "answer": "Ao Dai"
      }
    },
    {
      "questionId": "g3_det_11",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a famous Vietnamese noodle soup with aromatic broth, cinnamon, ginger, herbs, and tender beef.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a famous Vietnamese noodle soup with aromatic broth, cinnamon, ginger, herbs, and tender beef.' (Phở bò truyền thống)",
      "answerOptions": [
        "Pho",
        "Banh Mi",
        "Spring Roll"
      ],
      "correctAnswer": "Pho",
      "explanation": "Case solved, Detective! It is Pho (Phở bò truyền thống).",
      "explanationVi": "Phá án thành công! Đó chính là Pho (Phở bò truyền thống).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a famous Vietnamese noodle soup with aromatic broth, cinnamon, ginger, herbs, and tender beef.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a famous Vietnamese noodle soup with aromatic broth, cinnamon, ginger, herbs, and tender beef.",
        "answer": "Pho"
      }
    },
    {
      "questionId": "g3_det_12",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a crispy French-style baguette stuffed with pate, pork, fresh cilantro, cucumber, and spicy chili.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a crispy French-style baguette stuffed with pate, pork, fresh cilantro, cucumber, and spicy chili.' (Bánh mì Việt Nam)",
      "answerOptions": [
        "Banh Mi",
        "Hamburger",
        "Pizza"
      ],
      "correctAnswer": "Banh Mi",
      "explanation": "Case solved, Detective! It is Banh Mi (Bánh mì Việt Nam).",
      "explanationVi": "Phá án thành công! Đó chính là Banh Mi (Bánh mì Việt Nam).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a crispy French-style baguette stuffed with pate, pork, fresh cilantro, cucumber, and spicy chili.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a crispy French-style baguette stuffed with pate, pork, fresh cilantro, cucumber, and spicy chili.",
        "answer": "Banh Mi"
      }
    },
    {
      "questionId": "g3_det_13",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am made of dried palm leaves and bamboo rings. I protect farmers and schoolgirls from the tropical sun.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am made of dried palm leaves and bamboo rings. I protect farmers and schoolgirls from the tropical sun.' (Nón lá bài thơ)",
      "answerOptions": [
        "Conical Hat (Non La)",
        "Helmet",
        "Cap"
      ],
      "correctAnswer": "Conical Hat (Non La)",
      "explanation": "Case solved, Detective! It is Conical Hat (Non La) (Nón lá bài thơ).",
      "explanationVi": "Phá án thành công! Đó chính là Conical Hat (Non La) (Nón lá bài thơ).",
      "imageAsset": "🔍",
      "audioPrompt": "I am made of dried palm leaves and bamboo rings. I protect farmers and schoolgirls from the tropical sun.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am made of dried palm leaves and bamboo rings. I protect farmers and schoolgirls from the tropical sun.",
        "answer": "Conical Hat (Non La)"
      }
    },
    {
      "questionId": "g3_det_14",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a round pastry baked during the Mid-Autumn festival, stuffed with lotus seeds, salted egg yolk, and nuts.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a round pastry baked during the Mid-Autumn festival, stuffed with lotus seeds, salted egg yolk, and nuts.' (Bánh trung thu)",
      "answerOptions": [
        "Mooncake",
        "Chung Cake",
        "Cupcake"
      ],
      "correctAnswer": "Mooncake",
      "explanation": "Case solved, Detective! It is Mooncake (Bánh trung thu).",
      "explanationVi": "Phá án thành công! Đó chính là Mooncake (Bánh trung thu).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a round pastry baked during the Mid-Autumn festival, stuffed with lotus seeds, salted egg yolk, and nuts.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a round pastry baked during the Mid-Autumn festival, stuffed with lotus seeds, salted egg yolk, and nuts.",
        "answer": "Mooncake"
      }
    },
    {
      "questionId": "g3_det_15",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'We are wooden figures dancing on the water surface while musicians play traditional bamboo flutes behind a bamboo screen.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'We are wooden figures dancing on the water surface while musicians play traditional bamboo flutes behind a bamboo screen.' (Múa rối nước)",
      "answerOptions": [
        "Water Puppetry",
        "Shadow Puppet",
        "Circus"
      ],
      "correctAnswer": "Water Puppetry",
      "explanation": "Case solved, Detective! It is Water Puppetry (Múa rối nước).",
      "explanationVi": "Phá án thành công! Đó chính là Water Puppetry (Múa rối nước).",
      "imageAsset": "🔍",
      "audioPrompt": "We are wooden figures dancing on the water surface while musicians play traditional bamboo flutes behind a bamboo screen.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "We are wooden figures dancing on the water surface while musicians play traditional bamboo flutes behind a bamboo screen.",
        "answer": "Water Puppetry"
      }
    },
    {
      "questionId": "g3_det_16",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a floating market where farmers hang pineapples, watermelons, and mangoes on tall bamboo poles called 'cay beo'.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a floating market where farmers hang pineapples, watermelons, and mangoes on tall bamboo poles called 'cay beo'.' (Chợ nổi Cái Răng)",
      "answerOptions": [
        "Cai Rang Market",
        "Ben Thanh Market",
        "Dong Xuan Market"
      ],
      "correctAnswer": "Cai Rang Market",
      "explanation": "Case solved, Detective! It is Cai Rang Market (Chợ nổi Cái Răng).",
      "explanationVi": "Phá án thành công! Đó chính là Cai Rang Market (Chợ nổi Cái Răng).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a floating market where farmers hang pineapples, watermelons, and mangoes on tall bamboo poles called 'cay beo'.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a floating market where farmers hang pineapples, watermelons, and mangoes on tall bamboo poles called 'cay beo'.",
        "answer": "Cai Rang Market"
      }
    },
    {
      "questionId": "g3_det_17",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am an underground cave system with majestic stalactites, stalagmites, and a long subterranean river.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am an underground cave system with majestic stalactites, stalagmites, and a long subterranean river.' (Động Phong Nha)",
      "answerOptions": [
        "Phong Nha Cave",
        "Cu Chi Tunnels",
        "Ba Be Lake"
      ],
      "correctAnswer": "Phong Nha Cave",
      "explanation": "Case solved, Detective! It is Phong Nha Cave (Động Phong Nha).",
      "explanationVi": "Phá án thành công! Đó chính là Phong Nha Cave (Động Phong Nha).",
      "imageAsset": "🔍",
      "audioPrompt": "I am an underground cave system with majestic stalactites, stalagmites, and a long subterranean river.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am an underground cave system with majestic stalactites, stalagmites, and a long subterranean river.",
        "answer": "Phong Nha Cave"
      }
    },
    {
      "questionId": "g3_det_18",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a legendary underground tunnel network with hospitals, kitchens, and meeting rooms used during the war.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a legendary underground tunnel network with hospitals, kitchens, and meeting rooms used during the war.' (Địa đạo Củ Chi)",
      "answerOptions": [
        "Cu Chi Tunnels",
        "Phong Nha Cave",
        "Marble Mountains"
      ],
      "correctAnswer": "Cu Chi Tunnels",
      "explanation": "Case solved, Detective! It is Cu Chi Tunnels (Địa đạo Củ Chi).",
      "explanationVi": "Phá án thành công! Đó chính là Cu Chi Tunnels (Địa đạo Củ Chi).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a legendary underground tunnel network with hospitals, kitchens, and meeting rooms used during the war.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a legendary underground tunnel network with hospitals, kitchens, and meeting rooms used during the war.",
        "answer": "Cu Chi Tunnels"
      }
    },
    {
      "questionId": "g3_det_19",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am folk art printed on traditional 'Do' paper made from tree bark using natural leaf and shell colors.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am folk art printed on traditional 'Do' paper made from tree bark using natural leaf and shell colors.' (Tranh dân gian Đông Hồ)",
      "answerOptions": [
        "Dong Ho Painting",
        "Oil Painting",
        "Comic Book"
      ],
      "correctAnswer": "Dong Ho Painting",
      "explanation": "Case solved, Detective! It is Dong Ho Painting (Tranh dân gian Đông Hồ).",
      "explanationVi": "Phá án thành công! Đó chính là Dong Ho Painting (Tranh dân gian Đông Hồ).",
      "imageAsset": "🔍",
      "audioPrompt": "I am folk art printed on traditional 'Do' paper made from tree bark using natural leaf and shell colors.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am folk art printed on traditional 'Do' paper made from tree bark using natural leaf and shell colors.",
        "answer": "Dong Ho Painting"
      }
    },
    {
      "questionId": "g3_det_20",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "medium",
      "prompt": "Detective Clue: 'I am a five-pointed star made of red cellophane and bamboo sticks, carried by children under the full autumn moon.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a five-pointed star made of red cellophane and bamboo sticks, carried by children under the full autumn moon.' (Đèn ông sao)",
      "answerOptions": [
        "Star Lantern",
        "Flashlight",
        "Candle"
      ],
      "correctAnswer": "Star Lantern",
      "explanation": "Case solved, Detective! It is Star Lantern (Đèn ông sao).",
      "explanationVi": "Phá án thành công! Đó chính là Star Lantern (Đèn ông sao).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a five-pointed star made of red cellophane and bamboo sticks, carried by children under the full autumn moon.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a five-pointed star made of red cellophane and bamboo sticks, carried by children under the full autumn moon.",
        "answer": "Star Lantern"
      }
    },
    {
      "questionId": "g3_det_21",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am officially the largest natural cave on Earth, so huge that an entire Boeing 747 could fly through my chambers.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am officially the largest natural cave on Earth, so huge that an entire Boeing 747 could fly through my chambers.' (Hang Sơn Đoòng)",
      "answerOptions": [
        "Son Doong",
        "Phong Nha",
        "Paradise Cave"
      ],
      "correctAnswer": "Son Doong",
      "explanation": "Case solved, Detective! It is Son Doong (Hang Sơn Đoòng).",
      "explanationVi": "Phá án thành công! Đó chính là Son Doong (Hang Sơn Đoòng).",
      "imageAsset": "🔍",
      "audioPrompt": "I am officially the largest natural cave on Earth, so huge that an entire Boeing 747 could fly through my chambers.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am officially the largest natural cave on Earth, so huge that an entire Boeing 747 could fly through my chambers.",
        "answer": "Son Doong"
      }
    },
    {
      "questionId": "g3_det_22",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a UNESCO World Heritage site near Ninh Binh where peaceful sampans float through eleven limestone water caves.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a UNESCO World Heritage site near Ninh Binh where peaceful sampans float through eleven limestone water caves.' (Tràng An Ninh Bình)",
      "answerOptions": [
        "Trang An",
        "Tam Coc",
        "Ha Long"
      ],
      "correctAnswer": "Trang An",
      "explanation": "Case solved, Detective! It is Trang An (Tràng An Ninh Bình).",
      "explanationVi": "Phá án thành công! Đó chính là Trang An (Tràng An Ninh Bình).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a UNESCO World Heritage site near Ninh Binh where peaceful sampans float through eleven limestone water caves.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a UNESCO World Heritage site near Ninh Binh where peaceful sampans float through eleven limestone water caves.",
        "answer": "Trang An"
      }
    },
    {
      "questionId": "g3_det_23",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a breathtaking four-tier waterfall straddling the border between Vietnam and China in Cao Bang province.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a breathtaking four-tier waterfall straddling the border between Vietnam and China in Cao Bang province.' (Thác Bản Giốc)",
      "answerOptions": [
        "Ban Gioc",
        "Datanla",
        "Pongour"
      ],
      "correctAnswer": "Ban Gioc",
      "explanation": "Case solved, Detective! It is Ban Gioc (Thác Bản Giốc).",
      "explanationVi": "Phá án thành công! Đó chính là Ban Gioc (Thác Bản Giốc).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a breathtaking four-tier waterfall straddling the border between Vietnam and China in Cao Bang province.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a breathtaking four-tier waterfall straddling the border between Vietnam and China in Cao Bang province.",
        "answer": "Ban Gioc"
      }
    },
    {
      "questionId": "g3_det_24",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am an ancient artisan village on the Red River famous for handcrafted porcelain and ceramic bowls for 700 years.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am an ancient artisan village on the Red River famous for handcrafted porcelain and ceramic bowls for 700 years.' (Làng gốm Bát Tràng)",
      "answerOptions": [
        "Bat Trang",
        "Van Phuc",
        "Dong Ho"
      ],
      "correctAnswer": "Bat Trang",
      "explanation": "Case solved, Detective! It is Bat Trang (Làng gốm Bát Tràng).",
      "explanationVi": "Phá án thành công! Đó chính là Bat Trang (Làng gốm Bát Tràng).",
      "imageAsset": "🔍",
      "audioPrompt": "I am an ancient artisan village on the Red River famous for handcrafted porcelain and ceramic bowls for 700 years.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am an ancient artisan village on the Red River famous for handcrafted porcelain and ceramic bowls for 700 years.",
        "answer": "Bat Trang"
      }
    },
    {
      "questionId": "g3_det_25",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a historic handicraft village near Hanoi renowned for weaving smooth, lustrous mulberry silk textiles.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a historic handicraft village near Hanoi renowned for weaving smooth, lustrous mulberry silk textiles.' (Làng lụa Vạn Phúc)",
      "answerOptions": [
        "Van Phuc",
        "Bat Trang",
        "Tho Ha"
      ],
      "correctAnswer": "Van Phuc",
      "explanation": "Case solved, Detective! It is Van Phuc (Làng lụa Vạn Phúc).",
      "explanationVi": "Phá án thành công! Đó chính là Van Phuc (Làng lụa Vạn Phúc).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a historic handicraft village near Hanoi renowned for weaving smooth, lustrous mulberry silk textiles.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a historic handicraft village near Hanoi renowned for weaving smooth, lustrous mulberry silk textiles.",
        "answer": "Van Phuc"
      }
    },
    {
      "questionId": "g3_det_26",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a unique traditional musical instrument with only one single string that produces a haunting, soulful melody.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a unique traditional musical instrument with only one single string that produces a haunting, soulful melody.' (Đàn bầu)",
      "answerOptions": [
        "Dan Bau",
        "Guitar",
        "Violin"
      ],
      "correctAnswer": "Dan Bau",
      "explanation": "Case solved, Detective! It is Dan Bau (Đàn bầu).",
      "explanationVi": "Phá án thành công! Đó chính là Dan Bau (Đàn bầu).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a unique traditional musical instrument with only one single string that produces a haunting, soulful melody.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a unique traditional musical instrument with only one single string that produces a haunting, soulful melody.",
        "answer": "Dan Bau"
      }
    },
    {
      "questionId": "g3_det_27",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a square green cake wrapped in 'dong' leaves, filled with sticky rice, mung beans, and pork for the Lunar New Year.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a square green cake wrapped in 'dong' leaves, filled with sticky rice, mung beans, and pork for the Lunar New Year.' (Bánh chưng ngày Tết)",
      "answerOptions": [
        "Banh Chung",
        "Mooncake",
        "Banh Pia"
      ],
      "correctAnswer": "Banh Chung",
      "explanation": "Case solved, Detective! It is Banh Chung (Bánh chưng ngày Tết).",
      "explanationVi": "Phá án thành công! Đó chính là Banh Chung (Bánh chưng ngày Tết).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a square green cake wrapped in 'dong' leaves, filled with sticky rice, mung beans, and pork for the Lunar New Year.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a square green cake wrapped in 'dong' leaves, filled with sticky rice, mung beans, and pork for the Lunar New Year.",
        "answer": "Banh Chung"
      }
    },
    {
      "questionId": "g3_det_28",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am the largest natural freshwater lake in northern Vietnam, surrounded by limestone peaks and Tay ethnic villages.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am the largest natural freshwater lake in northern Vietnam, surrounded by limestone peaks and Tay ethnic villages.' (Hồ Ba Bể)",
      "answerOptions": [
        "Ba Be Lake",
        "West Lake",
        "Tuyen Lam Lake"
      ],
      "correctAnswer": "Ba Be Lake",
      "explanation": "Case solved, Detective! It is Ba Be Lake (Hồ Ba Bể).",
      "explanationVi": "Phá án thành công! Đó chính là Ba Be Lake (Hồ Ba Bể).",
      "imageAsset": "🔍",
      "audioPrompt": "I am the largest natural freshwater lake in northern Vietnam, surrounded by limestone peaks and Tay ethnic villages.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am the largest natural freshwater lake in northern Vietnam, surrounded by limestone peaks and Tay ethnic villages.",
        "answer": "Ba Be Lake"
      }
    },
    {
      "questionId": "g3_det_29",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a mysterious cluster of red-brick Hindu temples built by the ancient Champa kingdom in Quang Nam.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a mysterious cluster of red-brick Hindu temples built by the ancient Champa kingdom in Quang Nam.' (Thánh địa Mỹ Sơn)",
      "answerOptions": [
        "My Son Sanctuary",
        "Po Nagar",
        "Angkor Wat"
      ],
      "correctAnswer": "My Son Sanctuary",
      "explanation": "Case solved, Detective! It is My Son Sanctuary (Thánh địa Mỹ Sơn).",
      "explanationVi": "Phá án thành công! Đó chính là My Son Sanctuary (Thánh địa Mỹ Sơn).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a mysterious cluster of red-brick Hindu temples built by the ancient Champa kingdom in Quang Nam.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a mysterious cluster of red-brick Hindu temples built by the ancient Champa kingdom in Quang Nam.",
        "answer": "My Son Sanctuary"
      }
    },
    {
      "questionId": "g3_det_30",
      "grade": 3,
      "gameType": "listening_detective",
      "topic": "Detective Riddles & Deductions",
      "difficulty": "challenge",
      "prompt": "Detective Clue: 'I am a UNESCO Global Geopark in Ha Giang with sharp limestone peaks, buckwheat flower fields, and the deep Tu San canyon.' What is it?",
      "promptVi": "Thám tử nhí phá án: 'I am a UNESCO Global Geopark in Ha Giang with sharp limestone peaks, buckwheat flower fields, and the deep Tu San canyon.' (Cao nguyên đá Đồng Văn)",
      "answerOptions": [
        "Dong Van Plateau",
        "Moc Chau",
        "Da Lat"
      ],
      "correctAnswer": "Dong Van Plateau",
      "explanation": "Case solved, Detective! It is Dong Van Plateau (Cao nguyên đá Đồng Văn).",
      "explanationVi": "Phá án thành công! Đó chính là Dong Van Plateau (Cao nguyên đá Đồng Văn).",
      "imageAsset": "🔍",
      "audioPrompt": "I am a UNESCO Global Geopark in Ha Giang with sharp limestone peaks, buckwheat flower fields, and the deep Tu San canyon.",
      "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
      "metadata": {
        "riddle": "I am a UNESCO Global Geopark in Ha Giang with sharp limestone peaks, buckwheat flower fields, and the deep Tu San canyon.",
        "answer": "Dong Van Plateau"
      }
    }
  ],
  "cultural_quiz": [
    {
      "questionId": "g3_clt_01",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What do Vietnamese children carry during Mid-Autumn Festival?",
      "promptVi": "Trẻ em Việt Nam rước gì đêm Trung Thu?",
      "answerOptions": [
        "Star lanterns",
        "School bags",
        "Toy cars"
      ],
      "correctAnswer": "Star lanterns",
      "explanation": "Correct! Star lanterns is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Star lanterns là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What do Vietnamese children carry during Mid-Autumn Festival?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Trẻ em Việt Nam rước gì đêm Trung Thu?",
        "answer": "Star lanterns"
      }
    },
    {
      "questionId": "g3_clt_02",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What special round pastry is eaten under the full autumn moon?",
      "promptVi": "Bánh gì tròn đặc trưng đêm rằm Trung Thu?",
      "answerOptions": [
        "Mooncake",
        "Cupcake",
        "Pancake"
      ],
      "correctAnswer": "Mooncake",
      "explanation": "Correct! Mooncake is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Mooncake là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What special round pastry is eaten under the full autumn moon?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Bánh gì tròn đặc trưng đêm rằm Trung Thu?",
        "answer": "Mooncake"
      }
    },
    {
      "questionId": "g3_clt_03",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What is Vietnam's national flower?",
      "promptVi": "Quốc hoa của Việt Nam là loài hoa nào?",
      "answerOptions": [
        "Lotus",
        "Rose",
        "Daisy"
      ],
      "correctAnswer": "Lotus",
      "explanation": "Correct! Lotus is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Lotus là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is Vietnam's national flower?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Quốc hoa của Việt Nam là loài hoa nào?",
        "answer": "Lotus"
      }
    },
    {
      "questionId": "g3_clt_04",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What color is the star on the Vietnamese national flag?",
      "promptVi": "Ngôi sao trên cờ đỏ sao vàng có màu gì?",
      "answerOptions": [
        "Yellow",
        "White",
        "Blue"
      ],
      "correctAnswer": "Yellow",
      "explanation": "Correct! Yellow is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Yellow là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What color is the star on the Vietnamese national flag?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Ngôi sao trên cờ đỏ sao vàng có màu gì?",
        "answer": "Yellow"
      }
    },
    {
      "questionId": "g3_clt_05",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What famous traditional costume do Vietnamese women wear?",
      "promptVi": "Trang phục truyền thống phụ nữ Việt Nam là gì?",
      "answerOptions": [
        "Ao Dai",
        "Hanbok",
        "Kimono"
      ],
      "correctAnswer": "Ao Dai",
      "explanation": "Correct! Ao Dai is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Ao Dai là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What famous traditional costume do Vietnamese women wear?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Trang phục truyền thống phụ nữ Việt Nam là gì?",
        "answer": "Ao Dai"
      }
    },
    {
      "questionId": "g3_clt_06",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What hot noodle soup is popular for breakfast in Vietnam?",
      "promptVi": "Món súp mì nước nổi tiếng cho bữa sáng là gì?",
      "answerOptions": [
        "Pho",
        "Spaghetti",
        "Ramen"
      ],
      "correctAnswer": "Pho",
      "explanation": "Correct! Pho is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Pho là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What hot noodle soup is popular for breakfast in Vietnam?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Món súp mì nước nổi tiếng cho bữa sáng là gì?",
        "answer": "Pho"
      }
    },
    {
      "questionId": "g3_clt_07",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What is the name of the capital city of Vietnam?",
      "promptVi": "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là gì?",
      "answerOptions": [
        "Hanoi",
        "Ho Chi Minh City",
        "Da Nang"
      ],
      "correctAnswer": "Hanoi",
      "explanation": "Correct! Hanoi is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Hanoi là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is the name of the capital city of Vietnam?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là gì?",
        "answer": "Hanoi"
      }
    },
    {
      "questionId": "g3_clt_08",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What creature is believed to live in Hoan Kiem Lake?",
      "promptVi": "Sinh vật huyền thoại nào gắn liền với Hồ Gươm?",
      "answerOptions": [
        "Golden Turtle",
        "Dragon",
        "Phoenix"
      ],
      "correctAnswer": "Golden Turtle",
      "explanation": "Correct! Golden Turtle is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Golden Turtle là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What creature is believed to live in Hoan Kiem Lake?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Sinh vật huyền thoại nào gắn liền với Hồ Gươm?",
        "answer": "Golden Turtle"
      }
    },
    {
      "questionId": "g3_clt_09",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What famous bread sandwich is loved by international tourists?",
      "promptVi": "Món bánh mì kẹp giòn ngon nổi tiếng thế giới của Việt Nam là gì?",
      "answerOptions": [
        "Banh Mi",
        "Burger",
        "Hotdog"
      ],
      "correctAnswer": "Banh Mi",
      "explanation": "Correct! Banh Mi is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Banh Mi là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What famous bread sandwich is loved by international tourists?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Món bánh mì kẹp giòn ngon nổi tiếng thế giới của Việt Nam là gì?",
        "answer": "Banh Mi"
      }
    },
    {
      "questionId": "g3_clt_10",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "easy",
      "prompt": "What lion or dragon dance is performed during festivals for good luck?",
      "promptVi": "Điệu múa nào mang lại may mắn trong dịp lễ hội?",
      "answerOptions": [
        "Lion Dance",
        "Ballet",
        "Tap Dance"
      ],
      "correctAnswer": "Lion Dance",
      "explanation": "Correct! Lion Dance is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Lion Dance là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What lion or dragon dance is performed during festivals for good luck?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Điệu múa nào mang lại may mắn trong dịp lễ hội?",
        "answer": "Lion Dance"
      }
    },
    {
      "questionId": "g3_clt_11",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What square green cake is made during the Vietnamese Lunar New Year (Tet)?",
      "promptVi": "Bánh vuông màu xanh đặc trưng ngày Tết là gì?",
      "answerOptions": [
        "Banh Chung",
        "Mooncake",
        "Banh Pia"
      ],
      "correctAnswer": "Banh Chung",
      "explanation": "Correct! Banh Chung is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Banh Chung là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What square green cake is made during the Vietnamese Lunar New Year (Tet)?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Bánh vuông màu xanh đặc trưng ngày Tết là gì?",
        "answer": "Banh Chung"
      }
    },
    {
      "questionId": "g3_clt_12",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What traditional art form features puppets performing on the water?",
      "promptVi": "Nghệ thuật dân gian nào có con rối biểu diễn trên mặt nước?",
      "answerOptions": [
        "Water Puppetry",
        "Shadow Play",
        "Circus"
      ],
      "correctAnswer": "Water Puppetry",
      "explanation": "Correct! Water Puppetry is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Water Puppetry là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What traditional art form features puppets performing on the water?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Nghệ thuật dân gian nào có con rối biểu diễn trên mặt nước?",
        "answer": "Water Puppetry"
      }
    },
    {
      "questionId": "g3_clt_13",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "Which UNESCO natural wonder has thousands of emerald limestone islands?",
      "promptVi": "Kỳ quan thiên nhiên thế giới nào có hàng nghìn đảo đá vôi xanh biếc?",
      "answerOptions": [
        "Ha Long Bay",
        "Ba Be Lake",
        "Nha Trang Bay"
      ],
      "correctAnswer": "Ha Long Bay",
      "explanation": "Correct! Ha Long Bay is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Ha Long Bay là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which UNESCO natural wonder has thousands of emerald limestone islands?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Kỳ quan thiên nhiên thế giới nào có hàng nghìn đảo đá vôi xanh biếc?",
        "answer": "Ha Long Bay"
      }
    },
    {
      "questionId": "g3_clt_14",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "Which ancient town in central Vietnam is famous for its glowing lanterns?",
      "promptVi": "Phố cổ nào ở miền Trung nổi tiếng với đèn lồng lung linh?",
      "answerOptions": [
        "Hoi An",
        "Hue",
        "Da Lat"
      ],
      "correctAnswer": "Hoi An",
      "explanation": "Correct! Hoi An is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Hoi An là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which ancient town in central Vietnam is famous for its glowing lanterns?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Phố cổ nào ở miền Trung nổi tiếng với đèn lồng lung linh?",
        "answer": "Hoi An"
      }
    },
    {
      "questionId": "g3_clt_15",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "Which city is home to the historical Ben Thanh Market?",
      "promptVi": "Thành phố nào có chợ Bến Thành lịch sử?",
      "answerOptions": [
        "Ho Chi Minh City",
        "Hanoi",
        "Hai Phong"
      ],
      "correctAnswer": "Ho Chi Minh City",
      "explanation": "Correct! Ho Chi Minh City is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Ho Chi Minh City là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which city is home to the historical Ben Thanh Market?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Thành phố nào có chợ Bến Thành lịch sử?",
        "answer": "Ho Chi Minh City"
      }
    },
    {
      "questionId": "g3_clt_16",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What is the name of the longest cave system located in Quang Binh?",
      "promptVi": "Hệ thống hang động kỳ vĩ ở Quảng Bình là gì?",
      "answerOptions": [
        "Phong Nha - Ke Bang",
        "Trang An",
        "Tam Coc"
      ],
      "correctAnswer": "Phong Nha - Ke Bang",
      "explanation": "Correct! Phong Nha - Ke Bang is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Phong Nha - Ke Bang là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is the name of the longest cave system located in Quang Binh?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Hệ thống hang động kỳ vĩ ở Quảng Bình là gì?",
        "answer": "Phong Nha - Ke Bang"
      }
    },
    {
      "questionId": "g3_clt_17",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What musical instrument has only one single string in Vietnam?",
      "promptVi": "Nhạc cụ dân tộc nào của Việt Nam chỉ có duy nhất một dây?",
      "answerOptions": [
        "Dan Bau (Monochord)",
        "Guitar",
        "Violin"
      ],
      "correctAnswer": "Dan Bau (Monochord)",
      "explanation": "Correct! Dan Bau (Monochord) is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Dan Bau (Monochord) là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What musical instrument has only one single string in Vietnam?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Nhạc cụ dân tộc nào của Việt Nam chỉ có duy nhất một dây?",
        "answer": "Dan Bau (Monochord)"
      }
    },
    {
      "questionId": "g3_clt_18",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What do people burn during Tet to welcome ancestors?",
      "promptVi": "Người ta thắp gì trong dịp Tết để tưởng nhớ tổ tiên?",
      "answerOptions": [
        "Incense",
        "Paper",
        "Leaves"
      ],
      "correctAnswer": "Incense",
      "explanation": "Correct! Incense is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Incense là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What do people burn during Tet to welcome ancestors?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Người ta thắp gì trong dịp Tết để tưởng nhớ tổ tiên?",
        "answer": "Incense"
      }
    },
    {
      "questionId": "g3_clt_19",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What fruit is known as the 'King of Fruits' grown in the southern gardens?",
      "promptVi": "Trái cây nào được mệnh danh là vua của các loài quả ở miệt vườn Nam Bộ?",
      "answerOptions": [
        "Durian",
        "Apple",
        "Grape"
      ],
      "correctAnswer": "Durian",
      "explanation": "Correct! Durian is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Durian là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What fruit is known as the 'King of Fruits' grown in the southern gardens?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Trái cây nào được mệnh danh là vua của các loài quả ở miệt vườn Nam Bộ?",
        "answer": "Durian"
      }
    },
    {
      "questionId": "g3_clt_20",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "medium",
      "prompt": "What is the biggest floating market in Can Tho city?",
      "promptVi": "Chợ nổi lớn nhất ở thành phố Cần Thơ là gì?",
      "answerOptions": [
        "Cai Rang",
        "Nga Nam",
        "Phung Hiep"
      ],
      "correctAnswer": "Cai Rang",
      "explanation": "Correct! Cai Rang is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Cai Rang là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is the biggest floating market in Can Tho city?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Chợ nổi lớn nhất ở thành phố Cần Thơ là gì?",
        "answer": "Cai Rang"
      }
    },
    {
      "questionId": "g3_clt_21",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "Which ancient Vietnamese king received the magical sword from the Golden Turtle?",
      "promptVi": "Vị vua nào đã nhận thanh gươm thần từ rùa vàng?",
      "answerOptions": [
        "King Le Loi",
        "King Hung",
        "King Dinh"
      ],
      "correctAnswer": "King Le Loi",
      "explanation": "Correct! King Le Loi is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! King Le Loi là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which ancient Vietnamese king received the magical sword from the Golden Turtle?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Vị vua nào đã nhận thanh gươm thần từ rùa vàng?",
        "answer": "King Le Loi"
      }
    },
    {
      "questionId": "g3_clt_22",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "What traditional painting style uses Do paper made from mulberry tree bark?",
      "promptVi": "Dòng tranh dân gian nào sử dụng giấy điệp làm từ vỏ cây dướng?",
      "answerOptions": [
        "Dong Ho folk painting",
        "Oil painting",
        "Modern art"
      ],
      "correctAnswer": "Dong Ho folk painting",
      "explanation": "Correct! Dong Ho folk painting is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Dong Ho folk painting là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What traditional painting style uses Do paper made from mulberry tree bark?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Dòng tranh dân gian nào sử dụng giấy điệp làm từ vỏ cây dướng?",
        "answer": "Dong Ho folk painting"
      }
    },
    {
      "questionId": "g3_clt_23",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "Which UNESCO world heritage site was the imperial capital of the Nguyen Dynasty?",
      "promptVi": "Di sản văn hóa thế giới nào từng là kinh đô của triều Nguyễn?",
      "answerOptions": [
        "Hue Citadel",
        "Thang Long Citadel",
        "Hoi An"
      ],
      "correctAnswer": "Hue Citadel",
      "explanation": "Correct! Hue Citadel is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Hue Citadel là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which UNESCO world heritage site was the imperial capital of the Nguyen Dynasty?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Di sản văn hóa thế giới nào từng là kinh đô của triều Nguyễn?",
        "answer": "Hue Citadel"
      }
    },
    {
      "questionId": "g3_clt_24",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "What is the deepest natural canyon in Southeast Asia located in Ha Giang?",
      "promptVi": "Hẻm vực sâu nhất Đông Nam Á ở Hà Giang tên là gì?",
      "answerOptions": [
        "Tu San Canyon",
        "Hai Van Pass",
        "Ma Pi Leng"
      ],
      "correctAnswer": "Tu San Canyon",
      "explanation": "Correct! Tu San Canyon is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Tu San Canyon là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is the deepest natural canyon in Southeast Asia located in Ha Giang?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Hẻm vực sâu nhất Đông Nam Á ở Hà Giang tên là gì?",
        "answer": "Tu San Canyon"
      }
    },
    {
      "questionId": "g3_clt_25",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "Which traditional craft village near Hanoi is world-famous for ceramics for 700 years?",
      "promptVi": "Làng nghề gốm sứ truyền thống nổi tiếng gần Hà Nội là làng nào?",
      "answerOptions": [
        "Bat Trang",
        "Van Phuc",
        "Dong Ho"
      ],
      "correctAnswer": "Bat Trang",
      "explanation": "Correct! Bat Trang is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Bat Trang là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which traditional craft village near Hanoi is world-famous for ceramics for 700 years?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Làng nghề gốm sứ truyền thống nổi tiếng gần Hà Nội là làng nào?",
        "answer": "Bat Trang"
      }
    },
    {
      "questionId": "g3_clt_26",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "Which mountain peak is recognized as the 'Roof of Indochina' at 3,143m?",
      "promptVi": "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương' cao 3.143m?",
      "answerOptions": [
        "Fansipan",
        "Ba Den",
        "Pu Si Lung"
      ],
      "correctAnswer": "Fansipan",
      "explanation": "Correct! Fansipan is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Fansipan là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which mountain peak is recognized as the 'Roof of Indochina' at 3,143m?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương' cao 3.143m?",
        "answer": "Fansipan"
      }
    },
    {
      "questionId": "g3_clt_27",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "What traditional tree blossom is displayed in northern homes during Tet?",
      "promptVi": "Loài hoa nào đặc trưng cho ngày Tết ở miền Bắc?",
      "answerOptions": [
        "Peach blossom (Hoa đào)",
        "Apricot blossom",
        "Rose"
      ],
      "correctAnswer": "Peach blossom (Hoa đào)",
      "explanation": "Correct! Peach blossom (Hoa đào) is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Peach blossom (Hoa đào) là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What traditional tree blossom is displayed in northern homes during Tet?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Loài hoa nào đặc trưng cho ngày Tết ở miền Bắc?",
        "answer": "Peach blossom (Hoa đào)"
      }
    },
    {
      "questionId": "g3_clt_28",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "What yellow blossom is displayed in southern homes during Tet?",
      "promptVi": "Loài hoa màu vàng đặc trưng cho ngày Tết ở miền Nam?",
      "answerOptions": [
        "Yellow apricot blossom (Hoa mai)",
        "Peach blossom",
        "Lotus"
      ],
      "correctAnswer": "Yellow apricot blossom (Hoa mai)",
      "explanation": "Correct! Yellow apricot blossom (Hoa mai) is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Yellow apricot blossom (Hoa mai) là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What yellow blossom is displayed in southern homes during Tet?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Loài hoa màu vàng đặc trưng cho ngày Tết ở miền Nam?",
        "answer": "Yellow apricot blossom (Hoa mai)"
      }
    },
    {
      "questionId": "g3_clt_29",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "Which UNESCO bios reserve in Ho Chi Minh City is called the 'green lung'?",
      "promptVi": "Khu dự trữ sinh quyển nào được ví như 'lá phổi xanh' của TP.HCM?",
      "answerOptions": [
        "Can Gio Mangrove Forest",
        "Cat Tien",
        "Cuc Phuong"
      ],
      "correctAnswer": "Can Gio Mangrove Forest",
      "explanation": "Correct! Can Gio Mangrove Forest is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Can Gio Mangrove Forest là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "Which UNESCO bios reserve in Ho Chi Minh City is called the 'green lung'?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Khu dự trữ sinh quyển nào được ví như 'lá phổi xanh' của TP.HCM?",
        "answer": "Can Gio Mangrove Forest"
      }
    },
    {
      "questionId": "g3_clt_30",
      "grade": 3,
      "gameType": "cultural_quiz",
      "topic": "Vietnamese Cultural Discovery",
      "difficulty": "challenge",
      "prompt": "What is the special bronze drum from the ancient Dong Son culture called?",
      "promptVi": "Trống đồng cổ nổi tiếng của nền văn hóa Đông Sơn tên là gì?",
      "answerOptions": [
        "Dong Son Bronze Drum",
        "Wooden Drum",
        "Ceramic Drum"
      ],
      "correctAnswer": "Dong Son Bronze Drum",
      "explanation": "Correct! Dong Son Bronze Drum is a cherished part of Vietnamese culture.",
      "explanationVi": "Chính xác! Dong Son Bronze Drum là nét đẹp văn hóa tiêu biểu của Việt Nam.",
      "imageAsset": "🏮",
      "audioPrompt": "What is the special bronze drum from the ancient Dong Son culture called?",
      "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
      "metadata": {
        "questionVi": "Trống đồng cổ nổi tiếng của nền văn hóa Đông Sơn tên là gì?",
        "answer": "Dong Son Bronze Drum"
      }
    }
  ],
  "escape_room": [
    {
      "questionId": "g4_esc_01",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 1 Clue: I have hands and a face, but I cannot smile. I tell you when school starts. What am I?",
      "promptVi": "Manh mối phòng 1: Tôi có kim và mặt đồng hồ nhưng không biết cười...",
      "answerOptions": [
        "CLOCK",
        "DOOR",
        "BOOK"
      ],
      "correctAnswer": "CLOCK",
      "explanation": "Door unlocked! 'CLOCK' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'CLOCK' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 1 Clue: I have hands and a face, but I cannot smile. I tell you when school starts. What am I?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "CLOCK",
        "clueVi": "Manh mối phòng 1: Tôi có kim và mặt đồng hồ nhưng không biết cười..."
      }
    },
    {
      "questionId": "g4_esc_02",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 1 Door Code: I have pages and words, but I cannot speak. Read me to find the secret number.",
      "promptVi": "Mã số cửa: Tôi có nhiều trang và từ ngữ...",
      "answerOptions": [
        "BOOK",
        "DESK",
        "CHAIR"
      ],
      "correctAnswer": "BOOK",
      "explanation": "Door unlocked! 'BOOK' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'BOOK' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 1 Door Code: I have pages and words, but I cannot speak. Read me to find the secret number.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "BOOK",
        "clueVi": "Mã số cửa: Tôi có nhiều trang và từ ngữ..."
      }
    },
    {
      "questionId": "g4_esc_03",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 1 Chest: I am tall when young, and short when old. I glow with light in the dark.",
      "promptVi": "Rương bí mật: Khi trẻ tôi cao, già tôi lùn, thắp sáng màn đêm...",
      "answerOptions": [
        "CANDLE",
        "TREE",
        "PENCIL"
      ],
      "correctAnswer": "CANDLE",
      "explanation": "Door unlocked! 'CANDLE' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'CANDLE' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 1 Chest: I am tall when young, and short when old. I glow with light in the dark.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "CANDLE",
        "clueVi": "Rương bí mật: Khi trẻ tôi cao, già tôi lùn, thắp sáng màn đêm..."
      }
    },
    {
      "questionId": "g4_esc_04",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 2 Clue: The password is what students write with made of graphite and cedar wood.",
      "promptVi": "Mật khẩu là dụng cụ viết bằng than chì...",
      "answerOptions": [
        "PENCIL",
        "ERASER",
        "RULER"
      ],
      "correctAnswer": "PENCIL",
      "explanation": "Door unlocked! 'PENCIL' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'PENCIL' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 2 Clue: The password is what students write with made of graphite and cedar wood.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "PENCIL",
        "clueVi": "Mật khẩu là dụng cụ viết bằng than chì..."
      }
    },
    {
      "questionId": "g4_esc_05",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 2 Lock: What has four legs, a wooden top, but cannot walk around the classroom?",
      "promptVi": "Ổ khóa: Có 4 chân, mặt gỗ, nhưng không biết đi...",
      "answerOptions": [
        "TABLE",
        "DOG",
        "CAT"
      ],
      "correctAnswer": "TABLE",
      "explanation": "Door unlocked! 'TABLE' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'TABLE' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 2 Lock: What has four legs, a wooden top, but cannot walk around the classroom?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "TABLE",
        "clueVi": "Ổ khóa: Có 4 chân, mặt gỗ, nhưng không biết đi..."
      }
    },
    {
      "questionId": "g4_esc_06",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 2 Key: I have teeth but no mouth. I untangle messy hair in the morning.",
      "promptVi": "Chìa khóa: Tôi có răng nhưng không có miệng...",
      "answerOptions": [
        "COMB",
        "BRUSH",
        "FORK"
      ],
      "correctAnswer": "COMB",
      "explanation": "Door unlocked! 'COMB' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'COMB' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 2 Key: I have teeth but no mouth. I untangle messy hair in the morning.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "COMB",
        "clueVi": "Chìa khóa: Tôi có răng nhưng không có miệng..."
      }
    },
    {
      "questionId": "g4_esc_07",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 3 Door: What gets wet while it is drying your hands after washing?",
      "promptVi": "Cửa thoát hiểm: Thứ gì bị ướt khi đang lau khô tay bạn?",
      "answerOptions": [
        "TOWEL",
        "SPONGE",
        "WATER"
      ],
      "correctAnswer": "TOWEL",
      "explanation": "Door unlocked! 'TOWEL' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'TOWEL' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 3 Door: What gets wet while it is drying your hands after washing?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "TOWEL",
        "clueVi": "Cửa thoát hiểm: Thứ gì bị ướt khi đang lau khô tay bạn?"
      }
    },
    {
      "questionId": "g4_esc_08",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 3 Clue: I have an eye in the middle of a storm, but I cannot see anything.",
      "promptVi": "Manh mối: Có mắt bão nhưng không nhìn thấy gì...",
      "answerOptions": [
        "STORM",
        "NEEDLE",
        "POTATO"
      ],
      "correctAnswer": "STORM",
      "explanation": "Door unlocked! 'STORM' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'STORM' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 3 Clue: I have an eye in the middle of a storm, but I cannot see anything.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "STORM",
        "clueVi": "Manh mối: Có mắt bão nhưng không nhìn thấy gì..."
      }
    },
    {
      "questionId": "g4_esc_09",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Room 3 Lock: What has many keys that can open no real doors, but make lovely melodies?",
      "promptVi": "Ổ khóa: Có nhiều phím nhưng không mở được cửa, chỉ phát ra nhạc...",
      "answerOptions": [
        "PIANO",
        "GUITAR",
        "DRUM"
      ],
      "correctAnswer": "PIANO",
      "explanation": "Door unlocked! 'PIANO' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'PIANO' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Room 3 Lock: What has many keys that can open no real doors, but make lovely melodies?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "PIANO",
        "clueVi": "Ổ khóa: Có nhiều phím nhưng không mở được cửa, chỉ phát ra nhạc..."
      }
    },
    {
      "questionId": "g4_esc_10",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "easy",
      "prompt": "Escape Hatch: What goes up when rain comes down from the grey clouds?",
      "promptVi": "Cửa thoát cuối: Thứ gì giương lên khi mưa rơi xuống?",
      "answerOptions": [
        "UMBRELLA",
        "KITE",
        "BALLOON"
      ],
      "correctAnswer": "UMBRELLA",
      "explanation": "Door unlocked! 'UMBRELLA' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'UMBRELLA' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Escape Hatch: What goes up when rain comes down from the grey clouds?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "UMBRELLA",
        "clueVi": "Cửa thoát cuối: Thứ gì giương lên khi mưa rơi xuống?"
      }
    },
    {
      "questionId": "g4_esc_11",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Vault Clue: A historic city with 36 ancient guild streets where artisans once made silver, silk, and pottery.",
      "promptVi": "Manh mối kho báu: Thành phố có 36 phố phường...",
      "answerOptions": [
        "HANOI",
        "HUE",
        "SAIGON"
      ],
      "correctAnswer": "HANOI",
      "explanation": "Door unlocked! 'HANOI' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'HANOI' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Vault Clue: A historic city with 36 ancient guild streets where artisans once made silver, silk, and pottery.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "HANOI",
        "clueVi": "Manh mối kho báu: Thành phố có 36 phố phường..."
      }
    },
    {
      "questionId": "g4_esc_12",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Vault Lock: The famous cave in Quang Binh where you explore stalactites by dragon boat.",
      "promptVi": "Ổ khóa kho báu: Hang động ở Quảng Binh đi thuyền rồng vào...",
      "answerOptions": [
        "PHONG NHA",
        "SON DOONG",
        "TAM COC"
      ],
      "correctAnswer": "PHONG NHA",
      "explanation": "Door unlocked! 'PHONG NHA' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'PHONG NHA' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Vault Lock: The famous cave in Quang Binh where you explore stalactites by dragon boat.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "PHONG NHA",
        "clueVi": "Ổ khóa kho báu: Hang động ở Quảng Binh đi thuyền rồng vào..."
      }
    },
    {
      "questionId": "g4_esc_13",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Cipher Clue: What month in Vietnam has Teachers' Day on the twentieth day?",
      "promptVi": "Mật mã: Tháng nào có Ngày Nhà giáo Việt Nam 20?",
      "answerOptions": [
        "NOVEMBER",
        "OCTOBER",
        "DECEMBER"
      ],
      "correctAnswer": "NOVEMBER",
      "explanation": "Door unlocked! 'NOVEMBER' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'NOVEMBER' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Cipher Clue: What month in Vietnam has Teachers' Day on the twentieth day?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "NOVEMBER",
        "clueVi": "Mật mã: Tháng nào có Ngày Nhà giáo Việt Nam 20?"
      }
    },
    {
      "questionId": "g4_esc_14",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Library Riddle: What room in your school has thousands of books, silent rules, and study desks?",
      "promptVi": "Câu đố thư viện: Phòng nào có hàng ngàn cuốn sách và giữ trật tự?",
      "answerOptions": [
        "LIBRARY",
        "CANTEEN",
        "GYM"
      ],
      "correctAnswer": "LIBRARY",
      "explanation": "Door unlocked! 'LIBRARY' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'LIBRARY' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Library Riddle: What room in your school has thousands of books, silent rules, and study desks?",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "LIBRARY",
        "clueVi": "Câu đố thư viện: Phòng nào có hàng ngàn cuốn sách và giữ trật tự?"
      }
    },
    {
      "questionId": "g4_esc_15",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Map Cipher: The river that flows through Hue ancient capital, named after a sweet fragrance.",
      "promptVi": "Mật mã sông: Dòng sông chảy qua cố đô Huế mang tên hương thơm...",
      "answerOptions": [
        "PERFUME RIVER",
        "RED RIVER",
        "HAN RIVER"
      ],
      "correctAnswer": "PERFUME RIVER",
      "explanation": "Door unlocked! 'PERFUME RIVER' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'PERFUME RIVER' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Map Cipher: The river that flows through Hue ancient capital, named after a sweet fragrance.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "PERFUME RIVER",
        "clueVi": "Mật mã sông: Dòng sông chảy qua cố đô Huế mang tên hương thơm..."
      }
    },
    {
      "questionId": "g4_esc_16",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Secret Passage: The bridge in Da Nang shaped like a mythical creature that breathes fire on weekends.",
      "promptVi": "Lối đi bí mật: Cây cầu hình sinh vật huyền thoại phun lửa...",
      "answerOptions": [
        "DRAGON BRIDGE",
        "GOLDEN BRIDGE",
        "LONG BIEN"
      ],
      "correctAnswer": "DRAGON BRIDGE",
      "explanation": "Door unlocked! 'DRAGON BRIDGE' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'DRAGON BRIDGE' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Secret Passage: The bridge in Da Nang shaped like a mythical creature that breathes fire on weekends.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "DRAGON BRIDGE",
        "clueVi": "Lối đi bí mật: Cây cầu hình sinh vật huyền thoại phun lửa..."
      }
    },
    {
      "questionId": "g4_esc_17",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Code Breaker: The high mountain pass between Hue and Da Nang, meaning 'Ocean Cloud Pass'.",
      "promptVi": "Giải mã đèo: Đèo mây nối Huế và Đà Nẵng...",
      "answerOptions": [
        "HAI VAN",
        "MA PI LENG",
        "O QUY HO"
      ],
      "correctAnswer": "HAI VAN",
      "explanation": "Door unlocked! 'HAI VAN' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'HAI VAN' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Code Breaker: The high mountain pass between Hue and Da Nang, meaning 'Ocean Cloud Pass'.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "HAI VAN",
        "clueVi": "Giải mã đèo: Đèo mây nối Huế và Đà Nẵng..."
      }
    },
    {
      "questionId": "g4_esc_18",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Treasure Chamber: The traditional silk dress with two long panels worn on national ceremonies.",
      "promptVi": "Phòng kho báu: Trang phục lụa hai tà duyên dáng...",
      "answerOptions": [
        "AO DAI",
        "KIMONO",
        "HANBOK"
      ],
      "correctAnswer": "AO DAI",
      "explanation": "Door unlocked! 'AO DAI' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'AO DAI' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Treasure Chamber: The traditional silk dress with two long panels worn on national ceremonies.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "AO DAI",
        "clueVi": "Phòng kho báu: Trang phục lụa hai tà duyên dáng..."
      }
    },
    {
      "questionId": "g4_esc_19",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Heritage Lock: The highest mountain in Indochina where frost and snow can fall in winter.",
      "promptVi": "Khóa di sản: Đỉnh núi cao nhất Đông Dương...",
      "answerOptions": [
        "FANSIPAN",
        "BA DEN",
        "LANGBIANG"
      ],
      "correctAnswer": "FANSIPAN",
      "explanation": "Door unlocked! 'FANSIPAN' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'FANSIPAN' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Heritage Lock: The highest mountain in Indochina where frost and snow can fall in winter.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "FANSIPAN",
        "clueVi": "Khóa di sản: Đỉnh núi cao nhất Đông Dương..."
      }
    },
    {
      "questionId": "g4_esc_20",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "medium",
      "prompt": "Escape Gate: The southern city once called 'The Pearl of the Orient'.",
      "promptVi": "Cổng thoát hiểm: Thành phố phương Nam từng được gọi là 'Hòn ngọc Viễn Đông'...",
      "answerOptions": [
        "SAIGON",
        "CAN THO",
        "VUNG TAU"
      ],
      "correctAnswer": "SAIGON",
      "explanation": "Door unlocked! 'SAIGON' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'SAIGON' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Escape Gate: The southern city once called 'The Pearl of the Orient'.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "SAIGON",
        "clueVi": "Cổng thoát hiểm: Thành phố phương Nam từng được gọi là 'Hòn ngọc Viễn Đông'..."
      }
    },
    {
      "questionId": "g4_esc_21",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Master Vault: Decipher the code: 3,143 meters high, located in Hoang Lien Son range.",
      "promptVi": "Kho báu tối thượng: Cao 3.143m thuộc dãy Hoàng Liên Sơn...",
      "answerOptions": [
        "FANSIPAN",
        "PU SI LUNG",
        "BACH MOC"
      ],
      "correctAnswer": "FANSIPAN",
      "explanation": "Door unlocked! 'FANSIPAN' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'FANSIPAN' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Master Vault: Decipher the code: 3,143 meters high, located in Hoang Lien Son range.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "FANSIPAN",
        "clueVi": "Kho báu tối thượng: Cao 3.143m thuộc dãy Hoàng Liên Sơn..."
      }
    },
    {
      "questionId": "g4_esc_22",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Chamber of Caves: The largest natural cave on planet Earth, located inside Phong Nha-Ke Bang.",
      "promptVi": "Phòng hang động: Hang động tự nhiên lớn nhất Trái Đất...",
      "answerOptions": [
        "SON DOONG",
        "EN CAVE",
        "PARADISE CAVE"
      ],
      "correctAnswer": "SON DOONG",
      "explanation": "Door unlocked! 'SON DOONG' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'SON DOONG' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Chamber of Caves: The largest natural cave on planet Earth, located inside Phong Nha-Ke Bang.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "SON DOONG",
        "clueVi": "Phòng hang động: Hang động tự nhiên lớn nhất Trái Đất..."
      }
    },
    {
      "questionId": "g4_esc_23",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Ancient Gate: The royal palace complex where 13 Nguyen Dynasty emperors once ruled.",
      "promptVi": "Cổng hoàng cung: Quần thể cung điện nơi 13 vị vua triều Nguyễn từng trị vì...",
      "answerOptions": [
        "HUE CITADEL",
        "THANG LONG",
        "HO CITADEL"
      ],
      "correctAnswer": "HUE CITADEL",
      "explanation": "Door unlocked! 'HUE CITADEL' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'HUE CITADEL' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Ancient Gate: The royal palace complex where 13 Nguyen Dynasty emperors once ruled.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "HUE CITADEL",
        "clueVi": "Cổng hoàng cung: Quần thể cung điện nơi 13 vị vua triều Nguyễn từng trị vì..."
      }
    },
    {
      "questionId": "g4_esc_24",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Lantern Hall: The UNESCO trade port that flourished from the 15th to the 19th century.",
      "promptVi": "Đại sảnh đèn lồng: Đô thị thương cảng hưng thịnh thế kỷ 15-19...",
      "answerOptions": [
        "HOI AN",
        "PHO HIEN",
        "VAN DON"
      ],
      "correctAnswer": "HOI AN",
      "explanation": "Door unlocked! 'HOI AN' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'HOI AN' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Lantern Hall: The UNESCO trade port that flourished from the 15th to the 19th century.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "HOI AN",
        "clueVi": "Đại sảnh đèn lồng: Đô thị thương cảng hưng thịnh thế kỷ 15-19..."
      }
    },
    {
      "questionId": "g4_esc_25",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Water Gate: The vast river delta in the south made of nine dragon mouths flowing to the East Sea.",
      "promptVi": "Cổng nước: Vùng đồng bằng chín nhánh rồng đổ ra Biển Đông...",
      "answerOptions": [
        "MEKONG DELTA",
        "RED RIVER DELTA",
        "MA RIVER"
      ],
      "correctAnswer": "MEKONG DELTA",
      "explanation": "Door unlocked! 'MEKONG DELTA' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'MEKONG DELTA' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Water Gate: The vast river delta in the south made of nine dragon mouths flowing to the East Sea.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "MEKONG DELTA",
        "clueVi": "Cổng nước: Vùng đồng bằng chín nhánh rồng đổ ra Biển Đông..."
      }
    },
    {
      "questionId": "g4_esc_26",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Botanical Mystery: The ancient 1000-year-old pine forest surrounded by mist and romantic lakes.",
      "promptVi": "Bí ẩn thực vật: Xứ sở sương mù và đồi thông lãng mạn...",
      "answerOptions": [
        "DA LAT",
        "SAPA",
        "TAM DAO"
      ],
      "correctAnswer": "DA LAT",
      "explanation": "Door unlocked! 'DA LAT' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'DA LAT' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Botanical Mystery: The ancient 1000-year-old pine forest surrounded by mist and romantic lakes.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "DA LAT",
        "clueVi": "Bí ẩn thực vật: Xứ sở sương mù và đồi thông lãng mạn..."
      }
    },
    {
      "questionId": "g4_esc_27",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Maritime Crypt: The volcanic island famous for sweet white garlic and crystal sea.",
      "promptVi": "Mật mã hải đảo: Đảo núi lửa nổi tiếng với tỏi cô đơn...",
      "answerOptions": [
        "LY SON",
        "PHU QUOC",
        "CON DAO"
      ],
      "correctAnswer": "LY SON",
      "explanation": "Door unlocked! 'LY SON' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'LY SON' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Maritime Crypt: The volcanic island famous for sweet white garlic and crystal sea.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "LY SON",
        "clueVi": "Mật mã hải đảo: Đảo núi lửa nổi tiếng với tỏi cô đơn..."
      }
    },
    {
      "questionId": "g4_esc_28",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Ceramic Crypt: The riverside village where clay is spun on wooden kick-wheels for 700 years.",
      "promptVi": "Mật mã gốm sứ: Làng ven sông xoay bàn gốm 700 năm...",
      "answerOptions": [
        "BAT TRANG",
        "VAN PHUC",
        "DONG HO"
      ],
      "correctAnswer": "BAT TRANG",
      "explanation": "Door unlocked! 'BAT TRANG' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'BAT TRANG' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Ceramic Crypt: The riverside village where clay is spun on wooden kick-wheels for 700 years.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "BAT TRANG",
        "clueVi": "Mật mã gốm sứ: Làng ven sông xoay bàn gốm 700 năm..."
      }
    },
    {
      "questionId": "g4_esc_29",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Independence Room: The historical wharf where young teacher Nguyen Tat Thanh embarked on his voyage in 1911.",
      "promptVi": "Phòng Độc Lập: Bến cảng lịch sử nơi người thanh niên yêu nước ra đi tìm đường cứu nước...",
      "answerOptions": [
        "NHA RONG WHARF",
        "HAI PHONG PORT",
        "SAIGON PORT"
      ],
      "correctAnswer": "NHA RONG WHARF",
      "explanation": "Door unlocked! 'NHA RONG WHARF' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'NHA RONG WHARF' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Independence Room: The historical wharf where young teacher Nguyen Tat Thanh embarked on his voyage in 1911.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "NHA RONG WHARF",
        "clueVi": "Phòng Độc Lập: Bến cảng lịch sử nơi người thanh niên yêu nước ra đi tìm đường cứu nước..."
      }
    },
    {
      "questionId": "g4_esc_30",
      "grade": 4,
      "gameType": "escape_room",
      "topic": "Escape Room Clues & Cryptograms",
      "difficulty": "challenge",
      "prompt": "Final Victory Door: The national spirit representing 54 ethnic groups living united in peace.",
      "promptVi": "Cửa vinh quang: Tinh thần đại đoàn kết các dân tộc anh em...",
      "answerOptions": [
        "SOLIDARITY",
        "SOLITUDE",
        "DIVISION"
      ],
      "correctAnswer": "SOLIDARITY",
      "explanation": "Door unlocked! 'SOLIDARITY' successfully cracks the puzzle.",
      "explanationVi": "Cửa đã mở! 'SOLIDARITY' giải mã chính xác câu đố.",
      "imageAsset": "🔐",
      "audioPrompt": "Final Victory Door: The national spirit representing 54 ethnic groups living united in peace.",
      "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
      "metadata": {
        "escapePassword": "SOLIDARITY",
        "clueVi": "Cửa vinh quang: Tinh thần đại đoàn kết các dân tộc anh em..."
      }
    }
  ],
  "word_decoder": [
    {
      "questionId": "g4_dec_01",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'A-P-P-L-E': A sweet crunchy red fruit that doctors love",
      "promptVi": "Giải mã mật thư 'A-P-P-L-E': A sweet crunchy red fruit that doctors love",
      "answerOptions": [
        "APPLE",
        "PEAR",
        "PLUM"
      ],
      "correctAnswer": "APPLE",
      "explanation": "Decoded successfully! 'A-P-P-L-E' spells 'APPLE'.",
      "explanationVi": "Giải mã thành công! 'A-P-P-L-E' ghép thành từ 'APPLE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is APPLE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "A-P-P-L-E",
        "definition": "A sweet crunchy red fruit that doctors love"
      }
    },
    {
      "questionId": "g4_dec_02",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'S-C-H-O-O-L': The place where we learn English with Ms. Trang",
      "promptVi": "Giải mã mật thư 'S-C-H-O-O-L': The place where we learn English with Ms. Trang",
      "answerOptions": [
        "SCHOOL",
        "CHURCH",
        "MARKET"
      ],
      "correctAnswer": "SCHOOL",
      "explanation": "Decoded successfully! 'S-C-H-O-O-L' spells 'SCHOOL'.",
      "explanationVi": "Giải mã thành công! 'S-C-H-O-O-L' ghép thành từ 'SCHOOL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is SCHOOL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "S-C-H-O-O-L",
        "definition": "The place where we learn English with Ms. Trang"
      }
    },
    {
      "questionId": "g4_dec_03",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'T-E-A-C-H-E-R': The person who guides and inspires students in class",
      "promptVi": "Giải mã mật thư 'T-E-A-C-H-E-R': The person who guides and inspires students in class",
      "answerOptions": [
        "TEACHER",
        "DOCTOR",
        "FARMER"
      ],
      "correctAnswer": "TEACHER",
      "explanation": "Decoded successfully! 'T-E-A-C-H-E-R' spells 'TEACHER'.",
      "explanationVi": "Giải mã thành công! 'T-E-A-C-H-E-R' ghép thành từ 'TEACHER'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is TEACHER!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "T-E-A-C-H-E-R",
        "definition": "The person who guides and inspires students in class"
      }
    },
    {
      "questionId": "g4_dec_04",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'S-U-M-M-E-R': The warm sunny season when students enjoy beach holidays",
      "promptVi": "Giải mã mật thư 'S-U-M-M-E-R': The warm sunny season when students enjoy beach holidays",
      "answerOptions": [
        "SUMMER",
        "WINTER",
        "SPRING"
      ],
      "correctAnswer": "SUMMER",
      "explanation": "Decoded successfully! 'S-U-M-M-E-R' spells 'SUMMER'.",
      "explanationVi": "Giải mã thành công! 'S-U-M-M-E-R' ghép thành từ 'SUMMER'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is SUMMER!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "S-U-M-M-E-R",
        "definition": "The warm sunny season when students enjoy beach holidays"
      }
    },
    {
      "questionId": "g4_dec_05",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'F-A-M-I-L-Y': The people who love and support you at home",
      "promptVi": "Giải mã mật thư 'F-A-M-I-L-Y': The people who love and support you at home",
      "answerOptions": [
        "FAMILY",
        "FRIENDS",
        "GUESTS"
      ],
      "correctAnswer": "FAMILY",
      "explanation": "Decoded successfully! 'F-A-M-I-L-Y' spells 'FAMILY'.",
      "explanationVi": "Giải mã thành công! 'F-A-M-I-L-Y' ghép thành từ 'FAMILY'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is FAMILY!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "F-A-M-I-L-Y",
        "definition": "The people who love and support you at home"
      }
    },
    {
      "questionId": "g4_dec_06",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'D-O-C-T-O-R': The kind person who cures patients in the hospital",
      "promptVi": "Giải mã mật thư 'D-O-C-T-O-R': The kind person who cures patients in the hospital",
      "answerOptions": [
        "DOCTOR",
        "PILOT",
        "SINGER"
      ],
      "correctAnswer": "DOCTOR",
      "explanation": "Decoded successfully! 'D-O-C-T-O-R' spells 'DOCTOR'.",
      "explanationVi": "Giải mã thành công! 'D-O-C-T-O-R' ghép thành từ 'DOCTOR'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is DOCTOR!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "D-O-C-T-O-R",
        "definition": "The kind person who cures patients in the hospital"
      }
    },
    {
      "questionId": "g4_dec_07",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'A-N-I-M-A-L': Living creatures like lions, elephants, cats, and birds",
      "promptVi": "Giải mã mật thư 'A-N-I-M-A-L': Living creatures like lions, elephants, cats, and birds",
      "answerOptions": [
        "ANIMAL",
        "PLANT",
        "MINERAL"
      ],
      "correctAnswer": "ANIMAL",
      "explanation": "Decoded successfully! 'A-N-I-M-A-L' spells 'ANIMAL'.",
      "explanationVi": "Giải mã thành công! 'A-N-I-M-A-L' ghép thành từ 'ANIMAL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is ANIMAL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "A-N-I-M-A-L",
        "definition": "Living creatures like lions, elephants, cats, and birds"
      }
    },
    {
      "questionId": "g4_dec_08",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'F-R-I-E-N-D': Someone you enjoy playing and studying with",
      "promptVi": "Giải mã mật thư 'F-R-I-E-N-D': Someone you enjoy playing and studying with",
      "answerOptions": [
        "FRIEND",
        "ENEMY",
        "STRANGER"
      ],
      "correctAnswer": "FRIEND",
      "explanation": "Decoded successfully! 'F-R-I-E-N-D' spells 'FRIEND'.",
      "explanationVi": "Giải mã thành công! 'F-R-I-E-N-D' ghép thành từ 'FRIEND'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is FRIEND!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "F-R-I-E-N-D",
        "definition": "Someone you enjoy playing and studying with"
      }
    },
    {
      "questionId": "g4_dec_09",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'P-E-N-C-I-L': A wooden tool with lead used for drawing and writing",
      "promptVi": "Giải mã mật thư 'P-E-N-C-I-L': A wooden tool with lead used for drawing and writing",
      "answerOptions": [
        "PENCIL",
        "BRUSH",
        "CRAYON"
      ],
      "correctAnswer": "PENCIL",
      "explanation": "Decoded successfully! 'P-E-N-C-I-L' spells 'PENCIL'.",
      "explanationVi": "Giải mã thành công! 'P-E-N-C-I-L' ghép thành từ 'PENCIL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is PENCIL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "P-E-N-C-I-L",
        "definition": "A wooden tool with lead used for drawing and writing"
      }
    },
    {
      "questionId": "g4_dec_10",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "easy",
      "prompt": "Decode the cipher 'B-I-C-Y-C-L-E': A two-wheeled vehicle you pedal with your legs",
      "promptVi": "Giải mã mật thư 'B-I-C-Y-C-L-E': A two-wheeled vehicle you pedal with your legs",
      "answerOptions": [
        "BICYCLE",
        "MOTORBIKE",
        "CAR"
      ],
      "correctAnswer": "BICYCLE",
      "explanation": "Decoded successfully! 'B-I-C-Y-C-L-E' spells 'BICYCLE'.",
      "explanationVi": "Giải mã thành công! 'B-I-C-Y-C-L-E' ghép thành từ 'BICYCLE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is BICYCLE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "B-I-C-Y-C-L-E",
        "definition": "A two-wheeled vehicle you pedal with your legs"
      }
    },
    {
      "questionId": "g4_dec_11",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'V-I-E-T-N-A-M': Our beloved homeland shaped like an energetic letter S",
      "promptVi": "Giải mã mật thư 'V-I-E-T-N-A-M': Our beloved homeland shaped like an energetic letter S",
      "answerOptions": [
        "VIETNAM",
        "THAILAND",
        "JAPAN"
      ],
      "correctAnswer": "VIETNAM",
      "explanation": "Decoded successfully! 'V-I-E-T-N-A-M' spells 'VIETNAM'.",
      "explanationVi": "Giải mã thành công! 'V-I-E-T-N-A-M' ghép thành từ 'VIETNAM'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is VIETNAM!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "V-I-E-T-N-A-M",
        "definition": "Our beloved homeland shaped like an energetic letter S"
      }
    },
    {
      "questionId": "g4_dec_12",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'L-A-N-T-E-R-N': Colourful paper light used in Hoi An and Mid-Autumn",
      "promptVi": "Giải mã mật thư 'L-A-N-T-E-R-N': Colourful paper light used in Hoi An and Mid-Autumn",
      "answerOptions": [
        "LANTERN",
        "CANDLE",
        "TORCH"
      ],
      "correctAnswer": "LANTERN",
      "explanation": "Decoded successfully! 'L-A-N-T-E-R-N' spells 'LANTERN'.",
      "explanationVi": "Giải mã thành công! 'L-A-N-T-E-R-N' ghép thành từ 'LANTERN'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is LANTERN!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "L-A-N-T-E-R-N",
        "definition": "Colourful paper light used in Hoi An and Mid-Autumn"
      }
    },
    {
      "questionId": "g4_dec_13",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'C-A-P-I-T-A-L': The primary city where the national government resides",
      "promptVi": "Giải mã mật thư 'C-A-P-I-T-A-L': The primary city where the national government resides",
      "answerOptions": [
        "CAPITAL",
        "VILLAGE",
        "ISLAND"
      ],
      "correctAnswer": "CAPITAL",
      "explanation": "Decoded successfully! 'C-A-P-I-T-A-L' spells 'CAPITAL'.",
      "explanationVi": "Giải mã thành công! 'C-A-P-I-T-A-L' ghép thành từ 'CAPITAL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is CAPITAL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "C-A-P-I-T-A-L",
        "definition": "The primary city where the national government resides"
      }
    },
    {
      "questionId": "g4_dec_14",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'H-E-R-I-T-A-G-E': Valuable historical traditions passed down through generations",
      "promptVi": "Giải mã mật thư 'H-E-R-I-T-A-G-E': Valuable historical traditions passed down through generations",
      "answerOptions": [
        "HERITAGE",
        "BUSINESS",
        "FASHION"
      ],
      "correctAnswer": "HERITAGE",
      "explanation": "Decoded successfully! 'H-E-R-I-T-A-G-E' spells 'HERITAGE'.",
      "explanationVi": "Giải mã thành công! 'H-E-R-I-T-A-G-E' ghép thành từ 'HERITAGE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is HERITAGE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "H-E-R-I-T-A-G-E",
        "definition": "Valuable historical traditions passed down through generations"
      }
    },
    {
      "questionId": "g4_dec_15",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'P-A-S-S-P-O-R-T': A small booklet you need when traveling across international borders",
      "promptVi": "Giải mã mật thư 'P-A-S-S-P-O-R-T': A small booklet you need when traveling across international borders",
      "answerOptions": [
        "PASSPORT",
        "TICKET",
        "LICENSE"
      ],
      "correctAnswer": "PASSPORT",
      "explanation": "Decoded successfully! 'P-A-S-S-P-O-R-T' spells 'PASSPORT'.",
      "explanationVi": "Giải mã thành công! 'P-A-S-S-P-O-R-T' ghép thành từ 'PASSPORT'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is PASSPORT!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "P-A-S-S-P-O-R-T",
        "definition": "A small booklet you need when traveling across international borders"
      }
    },
    {
      "questionId": "g4_dec_16",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'M-O-U-N-T-A-I-N': A very tall landform higher than a hill with rocky peaks",
      "promptVi": "Giải mã mật thư 'M-O-U-N-T-A-I-N': A very tall landform higher than a hill with rocky peaks",
      "answerOptions": [
        "MOUNTAIN",
        "VALLEY",
        "DESERT"
      ],
      "correctAnswer": "MOUNTAIN",
      "explanation": "Decoded successfully! 'M-O-U-N-T-A-I-N' spells 'MOUNTAIN'.",
      "explanationVi": "Giải mã thành công! 'M-O-U-N-T-A-I-N' ghép thành từ 'MOUNTAIN'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is MOUNTAIN!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "M-O-U-N-T-A-I-N",
        "definition": "A very tall landform higher than a hill with rocky peaks"
      }
    },
    {
      "questionId": "g4_dec_17",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'W-A-T-E-R-F-A-L-L': River water cascading down a steep rocky cliff",
      "promptVi": "Giải mã mật thư 'W-A-T-E-R-F-A-L-L': River water cascading down a steep rocky cliff",
      "answerOptions": [
        "WATERFALL",
        "GEYSER",
        "FOUNTAIN"
      ],
      "correctAnswer": "WATERFALL",
      "explanation": "Decoded successfully! 'W-A-T-E-R-F-A-L-L' spells 'WATERFALL'.",
      "explanationVi": "Giải mã thành công! 'W-A-T-E-R-F-A-L-L' ghép thành từ 'WATERFALL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is WATERFALL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "W-A-T-E-R-F-A-L-L",
        "definition": "River water cascading down a steep rocky cliff"
      }
    },
    {
      "questionId": "g4_dec_18",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'F-E-S-T-I-V-A-L': A joyful celebration with music, food, and games",
      "promptVi": "Giải mã mật thư 'F-E-S-T-I-V-A-L': A joyful celebration with music, food, and games",
      "answerOptions": [
        "FESTIVAL",
        "EXAM",
        "CONFERENCE"
      ],
      "correctAnswer": "FESTIVAL",
      "explanation": "Decoded successfully! 'F-E-S-T-I-V-A-L' spells 'FESTIVAL'.",
      "explanationVi": "Giải mã thành công! 'F-E-S-T-I-V-A-L' ghép thành từ 'FESTIVAL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is FESTIVAL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "F-E-S-T-I-V-A-L",
        "definition": "A joyful celebration with music, food, and games"
      }
    },
    {
      "questionId": "g4_dec_19",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'C-U-L-T-U-R-E': The beliefs, customs, arts, and way of life of a society",
      "promptVi": "Giải mã mật thư 'C-U-L-T-U-R-E': The beliefs, customs, arts, and way of life of a society",
      "answerOptions": [
        "CULTURE",
        "WEATHER",
        "CLIMATE"
      ],
      "correctAnswer": "CULTURE",
      "explanation": "Decoded successfully! 'C-U-L-T-U-R-E' spells 'CULTURE'.",
      "explanationVi": "Giải mã thành công! 'C-U-L-T-U-R-E' ghép thành từ 'CULTURE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is CULTURE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "C-U-L-T-U-R-E",
        "definition": "The beliefs, customs, arts, and way of life of a society"
      }
    },
    {
      "questionId": "g4_dec_20",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "medium",
      "prompt": "Decode the cipher 'L-A-N-D-M-A-R-K': A prominent recognizable building or natural feature",
      "promptVi": "Giải mã mật thư 'L-A-N-D-M-A-R-K': A prominent recognizable building or natural feature",
      "answerOptions": [
        "LANDMARK",
        "HIGHWAY",
        "BRIDGE"
      ],
      "correctAnswer": "LANDMARK",
      "explanation": "Decoded successfully! 'L-A-N-D-M-A-R-K' spells 'LANDMARK'.",
      "explanationVi": "Giải mã thành công! 'L-A-N-D-M-A-R-K' ghép thành từ 'LANDMARK'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is LANDMARK!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "L-A-N-D-M-A-R-K",
        "definition": "A prominent recognizable building or natural feature"
      }
    },
    {
      "questionId": "g4_dec_21",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'C-I-T-A-D-E-L': A strongly fortified fortress protecting a royal city",
      "promptVi": "Giải mã mật thư 'C-I-T-A-D-E-L': A strongly fortified fortress protecting a royal city",
      "answerOptions": [
        "CITADEL",
        "COTTAGE",
        "MANSION"
      ],
      "correctAnswer": "CITADEL",
      "explanation": "Decoded successfully! 'C-I-T-A-D-E-L' spells 'CITADEL'.",
      "explanationVi": "Giải mã thành công! 'C-I-T-A-D-E-L' ghép thành từ 'CITADEL'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is CITADEL!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "C-I-T-A-D-E-L",
        "definition": "A strongly fortified fortress protecting a royal city"
      }
    },
    {
      "questionId": "g4_dec_22",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'E-X-P-L-O-R-E-R': A brave person who journeys into unknown lands to learn",
      "promptVi": "Giải mã mật thư 'E-X-P-L-O-R-E-R': A brave person who journeys into unknown lands to learn",
      "answerOptions": [
        "EXPLORER",
        "PASSENGER",
        "OBSERVER"
      ],
      "correctAnswer": "EXPLORER",
      "explanation": "Decoded successfully! 'E-X-P-L-O-R-E-R' spells 'EXPLORER'.",
      "explanationVi": "Giải mã thành công! 'E-X-P-L-O-R-E-R' ghép thành từ 'EXPLORER'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is EXPLORER!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "E-X-P-L-O-R-E-R",
        "definition": "A brave person who journeys into unknown lands to learn"
      }
    },
    {
      "questionId": "g4_dec_23",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'C-O-M-P-A-S-S': A navigation device with a magnetic needle pointing North",
      "promptVi": "Giải mã mật thư 'C-O-M-P-A-S-S': A navigation device with a magnetic needle pointing North",
      "answerOptions": [
        "COMPASS",
        "THERMOMETER",
        "BAROMETER"
      ],
      "correctAnswer": "COMPASS",
      "explanation": "Decoded successfully! 'C-O-M-P-A-S-S' spells 'COMPASS'.",
      "explanationVi": "Giải mã thành công! 'C-O-M-P-A-S-S' ghép thành từ 'COMPASS'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is COMPASS!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "C-O-M-P-A-S-S",
        "definition": "A navigation device with a magnetic needle pointing North"
      }
    },
    {
      "questionId": "g4_dec_24",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'P-R-O-V-I-N-C-E': An administrative territorial region of a country",
      "promptVi": "Giải mã mật thư 'P-R-O-V-I-N-C-E': An administrative territorial region of a country",
      "answerOptions": [
        "PROVINCE",
        "CONTINENT",
        "DISTRICT"
      ],
      "correctAnswer": "PROVINCE",
      "explanation": "Decoded successfully! 'P-R-O-V-I-N-C-E' spells 'PROVINCE'.",
      "explanationVi": "Giải mã thành công! 'P-R-O-V-I-N-C-E' ghép thành từ 'PROVINCE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is PROVINCE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "P-R-O-V-I-N-C-E",
        "definition": "An administrative territorial region of a country"
      }
    },
    {
      "questionId": "g4_dec_25",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'T-O-U-R-I-S-T': A traveler who visits scenic locations for leisure and learning",
      "promptVi": "Giải mã mật thư 'T-O-U-R-I-S-T': A traveler who visits scenic locations for leisure and learning",
      "answerOptions": [
        "TOURIST",
        "RESIDENT",
        "IMMIGRANT"
      ],
      "correctAnswer": "TOURIST",
      "explanation": "Decoded successfully! 'T-O-U-R-I-S-T' spells 'TOURIST'.",
      "explanationVi": "Giải mã thành công! 'T-O-U-R-I-S-T' ghép thành từ 'TOURIST'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is TOURIST!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "T-O-U-R-I-S-T",
        "definition": "A traveler who visits scenic locations for leisure and learning"
      }
    },
    {
      "questionId": "g4_dec_26",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'A-R-C-H-I-P-E-L-A-G-O': A large cluster or group of numerous islands in the sea",
      "promptVi": "Giải mã mật thư 'A-R-C-H-I-P-E-L-A-G-O': A large cluster or group of numerous islands in the sea",
      "answerOptions": [
        "ARCHIPELAGO",
        "PENINSULA",
        "CONTINENT"
      ],
      "correctAnswer": "ARCHIPELAGO",
      "explanation": "Decoded successfully! 'A-R-C-H-I-P-E-L-A-G-O' spells 'ARCHIPELAGO'.",
      "explanationVi": "Giải mã thành công! 'A-R-C-H-I-P-E-L-A-G-O' ghép thành từ 'ARCHIPELAGO'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is ARCHIPELAGO!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "A-R-C-H-I-P-E-L-A-G-O",
        "definition": "A large cluster or group of numerous islands in the sea"
      }
    },
    {
      "questionId": "g4_dec_27",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'S-T-A-L-A-C-T-I-T-E': An icicle-shaped mineral deposit hanging from cave ceilings",
      "promptVi": "Giải mã mật thư 'S-T-A-L-A-C-T-I-T-E': An icicle-shaped mineral deposit hanging from cave ceilings",
      "answerOptions": [
        "STALACTITE",
        "STALAGMITE",
        "BOULDER"
      ],
      "correctAnswer": "STALACTITE",
      "explanation": "Decoded successfully! 'S-T-A-L-A-C-T-I-T-E' spells 'STALACTITE'.",
      "explanationVi": "Giải mã thành công! 'S-T-A-L-A-C-T-I-T-E' ghép thành từ 'STALACTITE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is STALACTITE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "S-T-A-L-A-C-T-I-T-E",
        "definition": "An icicle-shaped mineral deposit hanging from cave ceilings"
      }
    },
    {
      "questionId": "g4_dec_28",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'B-I-O-S-P-H-E-R-E': The natural ecological zone where life thrives harmoniously",
      "promptVi": "Giải mã mật thư 'B-I-O-S-P-H-E-R-E': The natural ecological zone where life thrives harmoniously",
      "answerOptions": [
        "BIOSPHERE",
        "ATMOSPHERE",
        "STRATOSPHERE"
      ],
      "correctAnswer": "BIOSPHERE",
      "explanation": "Decoded successfully! 'B-I-O-S-P-H-E-R-E' spells 'BIOSPHERE'.",
      "explanationVi": "Giải mã thành công! 'B-I-O-S-P-H-E-R-E' ghép thành từ 'BIOSPHERE'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is BIOSPHERE!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "B-I-O-S-P-H-E-R-E",
        "definition": "The natural ecological zone where life thrives harmoniously"
      }
    },
    {
      "questionId": "g4_dec_29",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'P-A-G-O-D-A': A Buddhist religious monument or temple tower",
      "promptVi": "Giải mã mật thư 'P-A-G-O-D-A': A Buddhist religious monument or temple tower",
      "answerOptions": [
        "PAGODA",
        "CHURCH",
        "CASTLE"
      ],
      "correctAnswer": "PAGODA",
      "explanation": "Decoded successfully! 'P-A-G-O-D-A' spells 'PAGODA'.",
      "explanationVi": "Giải mã thành công! 'P-A-G-O-D-A' ghép thành từ 'PAGODA'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is PAGODA!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "P-A-G-O-D-A",
        "definition": "A Buddhist religious monument or temple tower"
      }
    },
    {
      "questionId": "g4_dec_30",
      "grade": 4,
      "gameType": "word_decoder",
      "topic": "Cipher & Vocabulary Decoding",
      "difficulty": "challenge",
      "prompt": "Decode the cipher 'C-H-A-M-P-I-O-N': A victorious explorer who achieves first place through dedication",
      "promptVi": "Giải mã mật thư 'C-H-A-M-P-I-O-N': A victorious explorer who achieves first place through dedication",
      "answerOptions": [
        "CHAMPION",
        "FINALIST",
        "RUNNER"
      ],
      "correctAnswer": "CHAMPION",
      "explanation": "Decoded successfully! 'C-H-A-M-P-I-O-N' spells 'CHAMPION'.",
      "explanationVi": "Giải mã thành công! 'C-H-A-M-P-I-O-N' ghép thành từ 'CHAMPION'.",
      "imageAsset": "🔤",
      "audioPrompt": "The secret word is CHAMPION!",
      "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
      "metadata": {
        "cipher": "C-H-A-M-P-I-O-N",
        "definition": "A victorious explorer who achieves first place through dedication"
      }
    }
  ],
  "dialogue_builder": [
    {
      "questionId": "g4_dlg_01",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: Hello! What is your name?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Chào hỏi và làm quen",
      "answerOptions": [
        "My name is Mai.",
        "I am ten years old.",
        "I like pizza."
      ],
      "correctAnswer": "My name is Mai.",
      "explanation": "Natural conversational response! 'My name is Mai.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'My name is Mai.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Hello! What is your name?\nB: My name is Mai. Nice to meet you!",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Hello! What is your name?\nB: My name is Mai. Nice to meet you!",
        "topicVi": "Chào hỏi và làm quen"
      }
    },
    {
      "questionId": "g4_dlg_02",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: How old are you, Nam?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi và trả lời tuổi",
      "answerOptions": [
        "I am nine years old.",
        "I am fine, thanks.",
        "He is ten."
      ],
      "correctAnswer": "I am nine years old.",
      "explanation": "Natural conversational response! 'I am nine years old.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I am nine years old.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How old are you, Nam?\nB: I am nine years old.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How old are you, Nam?\nB: I am nine years old.",
        "topicVi": "Hỏi và trả lời tuổi"
      }
    },
    {
      "questionId": "g4_dlg_03",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: Where are you from?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi quê hương",
      "answerOptions": [
        "I am from Vietnam.",
        "I live in a house.",
        "I like football."
      ],
      "correctAnswer": "I am from Vietnam.",
      "explanation": "Natural conversational response! 'I am from Vietnam.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I am from Vietnam.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Where are you from?\nB: I am from Vietnam.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Where are you from?\nB: I am from Vietnam.",
        "topicVi": "Hỏi quê hương"
      }
    },
    {
      "questionId": "g4_dlg_04",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: What is your favourite subject?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi môn học yêu thích",
      "answerOptions": [
        "I like English best.",
        "It is Monday.",
        "At eight o'clock."
      ],
      "correctAnswer": "I like English best.",
      "explanation": "Natural conversational response! 'I like English best.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I like English best.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What is your favourite subject?\nB: I like English best.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What is your favourite subject?\nB: I like English best.",
        "topicVi": "Hỏi môn học yêu thích"
      }
    },
    {
      "questionId": "g4_dlg_05",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: Can you ride a bicycle?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi khả năng",
      "answerOptions": [
        "Yes, I can ride it very well.",
        "No, I am not.",
        "Yes, it is."
      ],
      "correctAnswer": "Yes, I can ride it very well.",
      "explanation": "Natural conversational response! 'Yes, I can ride it very well.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Yes, I can ride it very well.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Can you ride a bicycle?\nB: Yes, I can ride it very well.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Can you ride a bicycle?\nB: Yes, I can ride it very well.",
        "topicVi": "Hỏi khả năng"
      }
    },
    {
      "questionId": "g4_dlg_06",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: What time is it now?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi giờ",
      "answerOptions": [
        "It is seven o'clock.",
        "It is sunny.",
        "On Monday."
      ],
      "correctAnswer": "It is seven o'clock.",
      "explanation": "Natural conversational response! 'It is seven o'clock.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'It is seven o'clock.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What time is it now?\nB: It is seven o'clock in the morning.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What time is it now?\nB: It is seven o'clock in the morning.",
        "topicVi": "Hỏi giờ"
      }
    },
    {
      "questionId": "g4_dlg_07",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: What day is it today?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi thứ trong tuần",
      "answerOptions": [
        "Today is Friday.",
        "At 8 PM.",
        "It is summer."
      ],
      "correctAnswer": "Today is Friday.",
      "explanation": "Natural conversational response! 'Today is Friday.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Today is Friday.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What day is it today?\nB: Today is Friday. Tomorrow is the weekend!",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What day is it today?\nB: Today is Friday. Tomorrow is the weekend!",
        "topicVi": "Hỏi thứ trong tuần"
      }
    },
    {
      "questionId": "g4_dlg_08",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: What are you doing?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi hành động đang diễn ra",
      "answerOptions": [
        "I am reading a book.",
        "I read yesterday.",
        "I will read."
      ],
      "correctAnswer": "I am reading a book.",
      "explanation": "Natural conversational response! 'I am reading a book.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I am reading a book.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What are you doing?\nB: I am reading a book about Vietnam.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What are you doing?\nB: I am reading a book about Vietnam.",
        "topicVi": "Hỏi hành động đang diễn ra"
      }
    },
    {
      "questionId": "g4_dlg_09",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: Do you have any pets?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi về thú cưng",
      "answerOptions": [
        "Yes, I have a playful puppy.",
        "No, it is green.",
        "I am twelve."
      ],
      "correctAnswer": "Yes, I have a playful puppy.",
      "explanation": "Natural conversational response! 'Yes, I have a playful puppy.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Yes, I have a playful puppy.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Do you have any pets?\nB: Yes, I have a playful puppy.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Do you have any pets?\nB: Yes, I have a playful puppy.",
        "topicVi": "Hỏi về thú cưng"
      }
    },
    {
      "questionId": "g4_dlg_10",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "easy",
      "prompt": "Complete the dialogue naturally: \nA: Where were you yesterday?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi địa điểm trong quá khứ",
      "answerOptions": [
        "I was at home.",
        "I am at school.",
        "I will be home."
      ],
      "correctAnswer": "I was at home.",
      "explanation": "Natural conversational response! 'I was at home.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I was at home.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Where were you yesterday?\nB: I was at home with my grandparents.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Where were you yesterday?\nB: I was at home with my grandparents.",
        "topicVi": "Hỏi địa điểm trong quá khứ"
      }
    },
    {
      "questionId": "g4_dlg_11",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: How do you get to school every day?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi phương tiện đi học",
      "answerOptions": [
        "I usually walk.",
        "It is five kilometers.",
        "At seven."
      ],
      "correctAnswer": "I usually walk.",
      "explanation": "Natural conversational response! 'I usually walk.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'I usually walk.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How do you get to school every day?\nB: I usually walk with my best friend.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How do you get to school every day?\nB: I usually walk with my best friend.",
        "topicVi": "Hỏi phương tiện đi học"
      }
    },
    {
      "questionId": "g4_dlg_12",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: Why do you want to learn English?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi lý do học tiếng Anh",
      "answerOptions": [
        "Because I want to travel.",
        "Yes, I do.",
        "On weekends."
      ],
      "correctAnswer": "Because I want to travel.",
      "explanation": "Natural conversational response! 'Because I want to travel.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Because I want to travel.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Why do you want to learn English?\nB: Because I want to travel and talk to people around the world.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Why do you want to learn English?\nB: Because I want to travel and talk to people around the world.",
        "topicVi": "Hỏi lý do học tiếng Anh"
      }
    },
    {
      "questionId": "g4_dlg_13",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: What did you do on your summer holiday?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi kỳ nghỉ hè đã làm gì",
      "answerOptions": [
        "We visited Ha Long Bay.",
        "We will visit tomorrow.",
        "We are visiting now."
      ],
      "correctAnswer": "We visited Ha Long Bay.",
      "explanation": "Natural conversational response! 'We visited Ha Long Bay.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'We visited Ha Long Bay.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What did you do on your summer holiday?\nB: We visited Ha Long Bay and swam in the sea.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What did you do on your summer holiday?\nB: We visited Ha Long Bay and swam in the sea.",
        "topicVi": "Hỏi kỳ nghỉ hè đã làm gì"
      }
    },
    {
      "questionId": "g4_dlg_14",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: What is the weather like in Da Lat?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi thời tiết Đà Lạt",
      "answerOptions": [
        "It is cool and pleasant.",
        "It was hot yesterday.",
        "I love Da Lat."
      ],
      "correctAnswer": "It is cool and pleasant.",
      "explanation": "Natural conversational response! 'It is cool and pleasant.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'It is cool and pleasant.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What is the weather like in Da Lat?\nB: It is cool, breezy, and pleasant all year round.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What is the weather like in Da Lat?\nB: It is cool, breezy, and pleasant all year round.",
        "topicVi": "Hỏi thời tiết Đà Lạt"
      }
    },
    {
      "questionId": "g4_dlg_15",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: How often do you practice speaking English?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi tần suất luyện tập",
      "answerOptions": [
        "Every single day.",
        "Yesterday morning.",
        "At the library."
      ],
      "correctAnswer": "Every single day.",
      "explanation": "Natural conversational response! 'Every single day.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Every single day.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How often do you practice speaking English?\nB: I practice speaking every single day with Ms. Trang.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How often do you practice speaking English?\nB: I practice speaking every single day with Ms. Trang.",
        "topicVi": "Hỏi tần suất luyện tập"
      }
    },
    {
      "questionId": "g4_dlg_16",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: Would you like some warm lotus tea?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Lời mời thưởng thức trà sen",
      "answerOptions": [
        "Yes, please.",
        "No, I can't.",
        "You are welcome."
      ],
      "correctAnswer": "Yes, please.",
      "explanation": "Natural conversational response! 'Yes, please.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Yes, please.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Would you like some warm lotus tea?\nB: Yes, please. It smells wonderful!",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Would you like some warm lotus tea?\nB: Yes, please. It smells wonderful!",
        "topicVi": "Lời mời thưởng thức trà sen"
      }
    },
    {
      "questionId": "g4_dlg_17",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: What does your mother look like?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Mô tả ngoại hình mẹ",
      "answerOptions": [
        "She is tall with long hair.",
        "She is a teacher.",
        "She likes cooking."
      ],
      "correctAnswer": "She is tall with long hair.",
      "explanation": "Natural conversational response! 'She is tall with long hair.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'She is tall with long hair.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What does your mother look like?\nB: She is tall and has long black hair and warm eyes.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What does your mother look like?\nB: She is tall and has long black hair and warm eyes.",
        "topicVi": "Mô tả ngoại hình mẹ"
      }
    },
    {
      "questionId": "g4_dlg_18",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: Where is the nearest bookstore?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi đường đi hiệu sách",
      "answerOptions": [
        "Go straight and turn right.",
        "It has many books.",
        "At five PM."
      ],
      "correctAnswer": "Go straight and turn right.",
      "explanation": "Natural conversational response! 'Go straight and turn right.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Go straight and turn right.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Where is the nearest bookstore?\nB: Go straight ahead and turn right at the traffic lights.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Where is the nearest bookstore?\nB: Go straight ahead and turn right at the traffic lights.",
        "topicVi": "Hỏi đường đi hiệu sách"
      }
    },
    {
      "questionId": "g4_dlg_19",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: When is your school sports day?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi ngày hội thể thao",
      "answerOptions": [
        "Next month in November.",
        "On the playground.",
        "We play badminton."
      ],
      "correctAnswer": "Next month in November.",
      "explanation": "Natural conversational response! 'Next month in November.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Next month in November.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: When is your school sports day?\nB: It will take place next month in November.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: When is your school sports day?\nB: It will take place next month in November.",
        "topicVi": "Hỏi ngày hội thể thao"
      }
    },
    {
      "questionId": "g4_dlg_20",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "medium",
      "prompt": "Complete the dialogue naturally: \nA: What can tourists do in Hoi An?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Gợi ý hoạt động ở Hội An",
      "answerOptions": [
        "Release river lanterns.",
        "They are happy.",
        "Hoi An is ancient."
      ],
      "correctAnswer": "Release river lanterns.",
      "explanation": "Natural conversational response! 'Release river lanterns.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Release river lanterns.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What can tourists do in Hoi An?\nB: They can ride bicycles, taste local food, and release river lanterns.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What can tourists do in Hoi An?\nB: They can ride bicycles, taste local food, and release river lanterns.",
        "topicVi": "Gợi ý hoạt động ở Hội An"
      }
    },
    {
      "questionId": "g4_dlg_21",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: Could you tell me more about the One Pillar Pagoda?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Tìm hiểu lịch sử Chùa Một Cột",
      "answerOptions": [
        "It resembles a sacred lotus.",
        "It is near a market.",
        "Yes, I can."
      ],
      "correctAnswer": "It resembles a sacred lotus.",
      "explanation": "Natural conversational response! 'It resembles a sacred lotus.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'It resembles a sacred lotus.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Could you tell me more about the One Pillar Pagoda?\nB: It was built in 1049 to resemble a sacred lotus flower blossoming from a pond.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Could you tell me more about the One Pillar Pagoda?\nB: It was built in 1049 to resemble a sacred lotus flower blossoming from a pond.",
        "topicVi": "Tìm hiểu lịch sử Chùa Một Cột"
      }
    },
    {
      "questionId": "g4_dlg_22",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: How long does the cruise tour around Ha Long Bay take?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Hỏi thời gian tour du thuyền",
      "answerOptions": [
        "It takes about four hours.",
        "It is very green.",
        "By bus."
      ],
      "correctAnswer": "It takes about four hours.",
      "explanation": "Natural conversational response! 'It takes about four hours.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'It takes about four hours.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How long does the cruise tour around Ha Long Bay take?\nB: It takes about four hours to see the famous limestone grottos.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How long does the cruise tour around Ha Long Bay take?\nB: It takes about four hours to see the famous limestone grottos.",
        "topicVi": "Hỏi thời gian tour du thuyền"
      }
    },
    {
      "questionId": "g4_dlg_23",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: What is the significance of the Dong Ho folk paintings?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Ý nghĩa tranh Đông Hồ",
      "answerOptions": [
        "Wishes for prosperity and peace.",
        "They are made of paper.",
        "In Bac Ninh."
      ],
      "correctAnswer": "Wishes for prosperity and peace.",
      "explanation": "Natural conversational response! 'Wishes for prosperity and peace.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Wishes for prosperity and peace.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What is the significance of the Dong Ho folk paintings?\nB: They represent wishes for peace, prosperity, and happiness in the new year.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What is the significance of the Dong Ho folk paintings?\nB: They represent wishes for peace, prosperity, and happiness in the new year.",
        "topicVi": "Ý nghĩa tranh Đông Hồ"
      }
    },
    {
      "questionId": "g4_dlg_24",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: How did King Le Loi return the magical sword?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Truyền thuyết hoàn gươm",
      "answerOptions": [
        "A sacred golden turtle surfaced.",
        "He bought a new sword.",
        "In Hanoi."
      ],
      "correctAnswer": "A sacred golden turtle surfaced.",
      "explanation": "Natural conversational response! 'A sacred golden turtle surfaced.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'A sacred golden turtle surfaced.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How did King Le Loi return the magical sword?\nB: A sacred golden turtle surfaced and took the sword back to the depths of the lake.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How did King Le Loi return the magical sword?\nB: A sacred golden turtle surfaced and took the sword back to the depths of the lake.",
        "topicVi": "Truyền thuyết hoàn gươm"
      }
    },
    {
      "questionId": "g4_dlg_25",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: Why is the Mekong Delta known as the rice bowl of Vietnam?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Vựa lúa miền Tây",
      "answerOptions": [
        "It produces most of the rice.",
        "It has nine rivers.",
        "People use boats."
      ],
      "correctAnswer": "It produces most of the rice.",
      "explanation": "Natural conversational response! 'It produces most of the rice.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'It produces most of the rice.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: Why is the Mekong Delta known as the rice bowl of Vietnam?\nB: Because its rich, fertile soil produces most of the nation's rice and tropical fruits.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: Why is the Mekong Delta known as the rice bowl of Vietnam?\nB: Because its rich, fertile soil produces most of the nation's rice and tropical fruits.",
        "topicVi": "Vựa lúa miền Tây"
      }
    },
    {
      "questionId": "g4_dlg_26",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: What should visitors wear when visiting Buddhist pagodas?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Trang phục lịch sự khi đi lễ chùa",
      "answerOptions": [
        "Modest, respectful clothing.",
        "Swimsuits and shorts.",
        "Bright party hats."
      ],
      "correctAnswer": "Modest, respectful clothing.",
      "explanation": "Natural conversational response! 'Modest, respectful clothing.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Modest, respectful clothing.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What should visitors wear when visiting Buddhist pagodas?\nB: Visitors should wear modest, respectful clothing that covers their shoulders and knees.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What should visitors wear when visiting Buddhist pagodas?\nB: Visitors should wear modest, respectful clothing that covers their shoulders and knees.",
        "topicVi": "Trang phục lịch sự khi đi lễ chùa"
      }
    },
    {
      "questionId": "g4_dlg_27",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: What makes Son Doong Cave unique in the world?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Điểm độc nhất của Sơn Đoòng",
      "answerOptions": [
        "Its own weather and rainforest.",
        "It is painted yellow.",
        "Near the sea."
      ],
      "correctAnswer": "Its own weather and rainforest.",
      "explanation": "Natural conversational response! 'Its own weather and rainforest.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Its own weather and rainforest.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What makes Son Doong Cave unique in the world?\nB: It has its own localized weather system, clouds, and an underground rainforest.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What makes Son Doong Cave unique in the world?\nB: It has its own localized weather system, clouds, and an underground rainforest.",
        "topicVi": "Điểm độc nhất của Sơn Đoòng"
      }
    },
    {
      "questionId": "g4_dlg_28",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: How do children celebrate the Mid-Autumn Festival in your village?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Lễ rước đèn Trung Thu",
      "answerOptions": [
        "Parade lanterns and watch lion dances.",
        "We go to sleep early.",
        "We plant trees."
      ],
      "correctAnswer": "Parade lanterns and watch lion dances.",
      "explanation": "Natural conversational response! 'Parade lanterns and watch lion dances.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Parade lanterns and watch lion dances.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: How do children celebrate the Mid-Autumn Festival in your village?\nB: We parade star lanterns, watch lion dances, and feast on mooncakes under the moon.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: How do children celebrate the Mid-Autumn Festival in your village?\nB: We parade star lanterns, watch lion dances, and feast on mooncakes under the moon.",
        "topicVi": "Lễ rước đèn Trung Thu"
      }
    },
    {
      "questionId": "g4_dlg_29",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: What makes Vietnamese Pho taste so rich and delicious?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Bí quyết phở ngon",
      "answerOptions": [
        "Broth simmered slowly with spices.",
        "Lots of sugar.",
        "Cold water."
      ],
      "correctAnswer": "Broth simmered slowly with spices.",
      "explanation": "Natural conversational response! 'Broth simmered slowly with spices.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Broth simmered slowly with spices.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What makes Vietnamese Pho taste so rich and delicious?\nB: The broth is simmered slowly for hours with roasted spices, ginger, and beef bones.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What makes Vietnamese Pho taste so rich and delicious?\nB: The broth is simmered slowly for hours with roasted spices, ginger, and beef bones.",
        "topicVi": "Bí quyết phở ngon"
      }
    },
    {
      "questionId": "g4_dlg_30",
      "grade": 4,
      "gameType": "dialogue_builder",
      "topic": "Dialogue Flow & Conversational English",
      "difficulty": "challenge",
      "prompt": "Complete the dialogue naturally: \nA: What is our responsibility as young cultural ambassadors?\n B: ...",
      "promptVi": "Hoàn thành đoạn hội thoại: Trách nhiệm đại sứ văn hóa nhí",
      "answerOptions": [
        "Share Vietnam's heritage proudly.",
        "Just stay at home.",
        "Forget our traditions."
      ],
      "correctAnswer": "Share Vietnam's heritage proudly.",
      "explanation": "Natural conversational response! 'Share Vietnam's heritage proudly.' fits the context smoothly.",
      "explanationVi": "Phản hồi hội thoại tự nhiên! 'Share Vietnam's heritage proudly.' phù hợp hoàn hảo với ngữ cảnh.",
      "imageAsset": "💬",
      "audioPrompt": "A: What is our responsibility as young cultural ambassadors?\nB: To study English diligently and proudly share Vietnam's heritage with the world.",
      "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
      "metadata": {
        "dialogueText": "A: What is our responsibility as young cultural ambassadors?\nB: To study English diligently and proudly share Vietnam's heritage with the world.",
        "topicVi": "Trách nhiệm đại sứ văn hóa nhí"
      }
    }
  ],
  "listening_mission": [
    {
      "questionId": "g4_mis_01",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Attention passengers! Flight VN123 to Da Nang is now boarding at Gate Number 4.'\nQuestion: Chuyến bay đi Đà Nẵng khởi hành ở cửa nào?",
      "promptVi": "Nghe thông báo và trả lời: Chuyến bay đi Đà Nẵng khởi hành ở cửa nào?",
      "answerOptions": [
        "Gate 4",
        "Gate 12",
        "Gate 2"
      ],
      "correctAnswer": "Gate 4",
      "explanation": "Mission accomplished! The announcement confirms: Gate 4.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Gate 4.",
      "imageAsset": "🎧",
      "audioPrompt": "Attention passengers! Flight VN123 to Da Nang is now boarding at Gate Number 4.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Attention passengers! Flight VN123 to Da Nang is now boarding at Gate Number 4.",
        "question": "Chuyến bay đi Đà Nẵng khởi hành ở cửa nào?"
      }
    },
    {
      "questionId": "g4_mis_02",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Good morning students! Today's English storytelling contest begins at 8:30 AM in the school hall.'\nQuestion: Cuộc thi kể chuyện bắt đầu lúc mấy giờ?",
      "promptVi": "Nghe thông báo và trả lời: Cuộc thi kể chuyện bắt đầu lúc mấy giờ?",
      "answerOptions": [
        "8:30 AM",
        "9:00 AM",
        "7:30 AM"
      ],
      "correctAnswer": "8:30 AM",
      "explanation": "Mission accomplished! The announcement confirms: 8:30 AM.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 8:30 AM.",
      "imageAsset": "🎧",
      "audioPrompt": "Good morning students! Today's English storytelling contest begins at 8:30 AM in the school hall.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Good morning students! Today's English storytelling contest begins at 8:30 AM in the school hall.",
        "question": "Cuộc thi kể chuyện bắt đầu lúc mấy giờ?"
      }
    },
    {
      "questionId": "g4_mis_03",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Welcome to the zoo! Please remember that feeding the monkeys is not allowed.'\nQuestion: Không được cho con vật nào ăn?",
      "promptVi": "Nghe thông báo và trả lời: Không được cho con vật nào ăn?",
      "answerOptions": [
        "Monkeys",
        "Birds",
        "Elephants"
      ],
      "correctAnswer": "Monkeys",
      "explanation": "Mission accomplished! The announcement confirms: Monkeys.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Monkeys.",
      "imageAsset": "🎧",
      "audioPrompt": "Welcome to the zoo! Please remember that feeding the monkeys is not allowed.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Welcome to the zoo! Please remember that feeding the monkeys is not allowed.",
        "question": "Không được cho con vật nào ăn?"
      }
    },
    {
      "questionId": "g4_mis_04",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Look at the weather forecast: Today will be bright, sunny, and warm with gentle breeze.'\nQuestion: Thời tiết hôm nay thế nào?",
      "promptVi": "Nghe thông báo và trả lời: Thời tiết hôm nay thế nào?",
      "answerOptions": [
        "Bright and sunny",
        "Rainy and cold",
        "Snowy"
      ],
      "correctAnswer": "Bright and sunny",
      "explanation": "Mission accomplished! The announcement confirms: Bright and sunny.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Bright and sunny.",
      "imageAsset": "🎧",
      "audioPrompt": "Look at the weather forecast: Today will be bright, sunny, and warm with gentle breeze.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Look at the weather forecast: Today will be bright, sunny, and warm with gentle breeze.",
        "question": "Thời tiết hôm nay thế nào?"
      }
    },
    {
      "questionId": "g4_mis_05",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Hello Nam! Don't forget to bring your colored pencils and drawing paper tomorrow.'\nQuestion: Nam cần mang dụng cụ gì ngày mai?",
      "promptVi": "Nghe thông báo và trả lời: Nam cần mang dụng cụ gì ngày mai?",
      "answerOptions": [
        "Colored pencils",
        "Ruler",
        "Compass"
      ],
      "correctAnswer": "Colored pencils",
      "explanation": "Mission accomplished! The announcement confirms: Colored pencils.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Colored pencils.",
      "imageAsset": "🎧",
      "audioPrompt": "Hello Nam! Don't forget to bring your colored pencils and drawing paper tomorrow.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Hello Nam! Don't forget to bring your colored pencils and drawing paper tomorrow.",
        "question": "Nam cần mang dụng cụ gì ngày mai?"
      }
    },
    {
      "questionId": "g4_mis_06",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'The library will be closed this Friday afternoon for book cleaning.'\nQuestion: Thư viện đóng cửa vào buổi nào?",
      "promptVi": "Nghe thông báo và trả lời: Thư viện đóng cửa vào buổi nào?",
      "answerOptions": [
        "Friday afternoon",
        "Monday morning",
        "Sunday"
      ],
      "correctAnswer": "Friday afternoon",
      "explanation": "Mission accomplished! The announcement confirms: Friday afternoon.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Friday afternoon.",
      "imageAsset": "🎧",
      "audioPrompt": "The library will be closed this Friday afternoon for book cleaning.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "The library will be closed this Friday afternoon for book cleaning.",
        "question": "Thư viện đóng cửa vào buổi nào?"
      }
    },
    {
      "questionId": "g4_mis_07",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Tomorrow we are planting fifty green young trees in the school garden.'\nQuestion: Học sinh sẽ trồng bao nhiêu cây?",
      "promptVi": "Nghe thông báo và trả lời: Học sinh sẽ trồng bao nhiêu cây?",
      "answerOptions": [
        "Fifty trees",
        "Five trees",
        "Fifteen trees"
      ],
      "correctAnswer": "Fifty trees",
      "explanation": "Mission accomplished! The announcement confirms: Fifty trees.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Fifty trees.",
      "imageAsset": "🎧",
      "audioPrompt": "Tomorrow we are planting fifty green young trees in the school garden.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Tomorrow we are planting fifty green young trees in the school garden.",
        "question": "Học sinh sẽ trồng bao nhiêu cây?"
      }
    },
    {
      "questionId": "g4_mis_08",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Hi Mai! Please lend me your English dictionary for the homework tonight.'\nQuestion: Mai được nhờ cho mượn đồ gì?",
      "promptVi": "Nghe thông báo và trả lời: Mai được nhờ cho mượn đồ gì?",
      "answerOptions": [
        "English dictionary",
        "Notebook",
        "Pen"
      ],
      "correctAnswer": "English dictionary",
      "explanation": "Mission accomplished! The announcement confirms: English dictionary.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: English dictionary.",
      "imageAsset": "🎧",
      "audioPrompt": "Hi Mai! Please lend me your English dictionary for the homework tonight.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Hi Mai! Please lend me your English dictionary for the homework tonight.",
        "question": "Mai được nhờ cho mượn đồ gì?"
      }
    },
    {
      "questionId": "g4_mis_09",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'The school bus arrives at the main gate at 6:45 every morning.'\nQuestion: Xe buýt trường đến lúc mấy giờ?",
      "promptVi": "Nghe thông báo và trả lời: Xe buýt trường đến lúc mấy giờ?",
      "answerOptions": [
        "6:45 AM",
        "7:15 AM",
        "6:00 AM"
      ],
      "correctAnswer": "6:45 AM",
      "explanation": "Mission accomplished! The announcement confirms: 6:45 AM.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 6:45 AM.",
      "imageAsset": "🎧",
      "audioPrompt": "The school bus arrives at the main gate at 6:45 every morning.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "The school bus arrives at the main gate at 6:45 every morning.",
        "question": "Xe buýt trường đến lúc mấy giờ?"
      }
    },
    {
      "questionId": "g4_mis_10",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "easy",
      "prompt": "Listen to the announcement: 'Our swimming lesson will take place in the outdoor pool on Wednesday.'\nQuestion: Tiết học bơi diễn ra vào thứ mấy?",
      "promptVi": "Nghe thông báo và trả lời: Tiết học bơi diễn ra vào thứ mấy?",
      "answerOptions": [
        "Wednesday",
        "Tuesday",
        "Thursday"
      ],
      "correctAnswer": "Wednesday",
      "explanation": "Mission accomplished! The announcement confirms: Wednesday.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Wednesday.",
      "imageAsset": "🎧",
      "audioPrompt": "Our swimming lesson will take place in the outdoor pool on Wednesday.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Our swimming lesson will take place in the outdoor pool on Wednesday.",
        "question": "Tiết học bơi diễn ra vào thứ mấy?"
      }
    },
    {
      "questionId": "g4_mis_11",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'Welcome to the Vietnam National History Museum! The royal bronze drum exhibition is on the second floor.'\nQuestion: Triển lãm trống đồng ở tầng mấy?",
      "promptVi": "Nghe thông báo và trả lời: Triển lãm trống đồng ở tầng mấy?",
      "answerOptions": [
        "Second floor",
        "First floor",
        "Third floor"
      ],
      "correctAnswer": "Second floor",
      "explanation": "Mission accomplished! The announcement confirms: Second floor.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Second floor.",
      "imageAsset": "🎧",
      "audioPrompt": "Welcome to the Vietnam National History Museum! The royal bronze drum exhibition is on the second floor.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Welcome to the Vietnam National History Museum! The royal bronze drum exhibition is on the second floor.",
        "question": "Triển lãm trống đồng ở tầng mấy?"
      }
    },
    {
      "questionId": "g4_mis_12",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'Today's lunch menu features warm beef Pho, fresh cucumber salad, and sweet watermelon slices.'\nQuestion: Món ăn chính của bữa trưa là gì?",
      "promptVi": "Nghe thông báo và trả lời: Món ăn chính của bữa trưa là gì?",
      "answerOptions": [
        "Beef Pho",
        "Fried chicken",
        "Pizza"
      ],
      "correctAnswer": "Beef Pho",
      "explanation": "Mission accomplished! The announcement confirms: Beef Pho.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Beef Pho.",
      "imageAsset": "🎧",
      "audioPrompt": "Today's lunch menu features warm beef Pho, fresh cucumber salad, and sweet watermelon slices.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Today's lunch menu features warm beef Pho, fresh cucumber salad, and sweet watermelon slices.",
        "question": "Món ăn chính của bữa trưa là gì?"
      }
    },
    {
      "questionId": "g4_mis_13",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'The boat tour around Ha Long Bay leaves the harbor at 9:00 AM and returns at 1:00 PM.'\nQuestion: Tour du thuyền kéo dài mấy tiếng?",
      "promptVi": "Nghe thông báo và trả lời: Tour du thuyền kéo dài mấy tiếng?",
      "answerOptions": [
        "Four hours",
        "Two hours",
        "Six hours"
      ],
      "correctAnswer": "Four hours",
      "explanation": "Mission accomplished! The announcement confirms: Four hours.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Four hours.",
      "imageAsset": "🎧",
      "audioPrompt": "The boat tour around Ha Long Bay leaves the harbor at 9:00 AM and returns at 1:00 PM.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "The boat tour around Ha Long Bay leaves the harbor at 9:00 AM and returns at 1:00 PM.",
        "question": "Tour du thuyền kéo dài mấy tiếng?"
      }
    },
    {
      "questionId": "g4_mis_14",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'Please note that visitors must remove their shoes before entering the ancient temple hall.'\nQuestion: Du khách phải làm gì trước khi vào đền cổ?",
      "promptVi": "Nghe thông báo và trả lời: Du khách phải làm gì trước khi vào đền cổ?",
      "answerOptions": [
        "Remove shoes",
        "Wear hats",
        "Turn off phone"
      ],
      "correctAnswer": "Remove shoes",
      "explanation": "Mission accomplished! The announcement confirms: Remove shoes.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Remove shoes.",
      "imageAsset": "🎧",
      "audioPrompt": "Please note that visitors must remove their shoes before entering the ancient temple hall.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Please note that visitors must remove their shoes before entering the ancient temple hall.",
        "question": "Du khách phải làm gì trước khi vào đền cổ?"
      }
    },
    {
      "questionId": "g4_mis_15",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'In Da Lat, the morning temperature is sixteen degrees Celsius, so wear a warm cardigan.'\nQuestion: Nhiệt độ buổi sáng ở Đà Lạt là bao nhiêu?",
      "promptVi": "Nghe thông báo và trả lời: Nhiệt độ buổi sáng ở Đà Lạt là bao nhiêu?",
      "answerOptions": [
        "16 degrees Celsius",
        "25 degrees",
        "10 degrees"
      ],
      "correctAnswer": "16 degrees Celsius",
      "explanation": "Mission accomplished! The announcement confirms: 16 degrees Celsius.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 16 degrees Celsius.",
      "imageAsset": "🎧",
      "audioPrompt": "In Da Lat, the morning temperature is sixteen degrees Celsius, so wear a warm cardigan.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "In Da Lat, the morning temperature is sixteen degrees Celsius, so wear a warm cardigan.",
        "question": "Nhiệt độ buổi sáng ở Đà Lạt là bao nhiêu?"
      }
    },
    {
      "questionId": "g4_mis_16",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'The train to Lao Cai and Sapa departs from Hanoi Central Railway Station at 10:00 PM tonight.'\nQuestion: Chuyến tàu đi Lào Cai xuất phát lúc mấy giờ?",
      "promptVi": "Nghe thông báo và trả lời: Chuyến tàu đi Lào Cai xuất phát lúc mấy giờ?",
      "answerOptions": [
        "10:00 PM",
        "8:00 PM",
        "6:00 PM"
      ],
      "correctAnswer": "10:00 PM",
      "explanation": "Mission accomplished! The announcement confirms: 10:00 PM.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 10:00 PM.",
      "imageAsset": "🎧",
      "audioPrompt": "The train to Lao Cai and Sapa departs from Hanoi Central Railway Station at 10:00 PM tonight.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "The train to Lao Cai and Sapa departs from Hanoi Central Railway Station at 10:00 PM tonight.",
        "question": "Chuyến tàu đi Lào Cai xuất phát lúc mấy giờ?"
      }
    },
    {
      "questionId": "g4_mis_17",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'For our school project, group one will research traditional water puppetry.'\nQuestion: Nhóm một nghiên cứu chủ đề gì?",
      "promptVi": "Nghe thông báo và trả lời: Nhóm một nghiên cứu chủ đề gì?",
      "answerOptions": [
        "Water puppetry",
        "Silk weaving",
        "Ceramics"
      ],
      "correctAnswer": "Water puppetry",
      "explanation": "Mission accomplished! The announcement confirms: Water puppetry.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Water puppetry.",
      "imageAsset": "🎧",
      "audioPrompt": "For our school project, group one will research traditional water puppetry.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "For our school project, group one will research traditional water puppetry.",
        "question": "Nhóm một nghiên cứu chủ đề gì?"
      }
    },
    {
      "questionId": "g4_mis_18",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'Attention hikers! Please stay on the marked forest trail to protect the rare orchids.'\nQuestion: Người đi bộ cần làm gì để bảo vệ hoa lan?",
      "promptVi": "Nghe thông báo và trả lời: Người đi bộ cần làm gì để bảo vệ hoa lan?",
      "answerOptions": [
        "Stay on marked trail",
        "Pick flowers",
        "Run fast"
      ],
      "correctAnswer": "Stay on marked trail",
      "explanation": "Mission accomplished! The announcement confirms: Stay on marked trail.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Stay on marked trail.",
      "imageAsset": "🎧",
      "audioPrompt": "Attention hikers! Please stay on the marked forest trail to protect the rare orchids.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Attention hikers! Please stay on the marked forest trail to protect the rare orchids.",
        "question": "Người đi bộ cần làm gì để bảo vệ hoa lan?"
      }
    },
    {
      "questionId": "g4_mis_19",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'Hoi An's lantern festival takes place on the fourteenth day of the lunar month.'\nQuestion: Lễ hội đèn lồng diễn ra vào ngày mấy âm lịch?",
      "promptVi": "Nghe thông báo và trả lời: Lễ hội đèn lồng diễn ra vào ngày mấy âm lịch?",
      "answerOptions": [
        "14th lunar day",
        "1st lunar day",
        "30th lunar day"
      ],
      "correctAnswer": "14th lunar day",
      "explanation": "Mission accomplished! The announcement confirms: 14th lunar day.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 14th lunar day.",
      "imageAsset": "🎧",
      "audioPrompt": "Hoi An's lantern festival takes place on the fourteenth day of the lunar month.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Hoi An's lantern festival takes place on the fourteenth day of the lunar month.",
        "question": "Lễ hội đèn lồng diễn ra vào ngày mấy âm lịch?"
      }
    },
    {
      "questionId": "g4_mis_20",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "medium",
      "prompt": "Listen to the announcement: 'The sports day has been rescheduled to next Saturday because of the heavy rain forecast.'\nQuestion: Ngày hội thể thao được dời sang ngày nào?",
      "promptVi": "Nghe thông báo và trả lời: Ngày hội thể thao được dời sang ngày nào?",
      "answerOptions": [
        "Next Saturday",
        "Tomorrow",
        "Next Sunday"
      ],
      "correctAnswer": "Next Saturday",
      "explanation": "Mission accomplished! The announcement confirms: Next Saturday.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Next Saturday.",
      "imageAsset": "🎧",
      "audioPrompt": "The sports day has been rescheduled to next Saturday because of the heavy rain forecast.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "The sports day has been rescheduled to next Saturday because of the heavy rain forecast.",
        "question": "Ngày hội thể thao được dời sang ngày nào?"
      }
    },
    {
      "questionId": "g4_mis_21",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 21: Son Doong Cave expedition requires participants to trek six kilometers through pristine rainforest before reaching the entrance.'\nQuestion: Người thám hiểm phải đi bộ bao nhiêu km?",
      "promptVi": "Nghe thông báo và trả lời: Người thám hiểm phải đi bộ bao nhiêu km?",
      "answerOptions": [
        "6 kilometers",
        "16 kilometers",
        "2 kilometers"
      ],
      "correctAnswer": "6 kilometers",
      "explanation": "Mission accomplished! The announcement confirms: 6 kilometers.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 6 kilometers.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 21: Son Doong Cave expedition requires participants to trek six kilometers through pristine rainforest before reaching the entrance.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 21: Son Doong Cave expedition requires participants to trek six kilometers through pristine rainforest before reaching the entrance.",
        "question": "Người thám hiểm phải đi bộ bao nhiêu km?"
      }
    },
    {
      "questionId": "g4_mis_22",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 22: The ancient bell of Thien Mu Pagoda weighs two tons and was cast over three hundred years ago in 1710.'\nQuestion: Chuông chùa Thiên Mụ được đúc vào năm nào?",
      "promptVi": "Nghe thông báo và trả lời: Chuông chùa Thiên Mụ được đúc vào năm nào?",
      "answerOptions": [
        "1710",
        "1910",
        "1810"
      ],
      "correctAnswer": "1710",
      "explanation": "Mission accomplished! The announcement confirms: 1710.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 1710.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 22: The ancient bell of Thien Mu Pagoda weighs two tons and was cast over three hundred years ago in 1710.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 22: The ancient bell of Thien Mu Pagoda weighs two tons and was cast over three hundred years ago in 1710.",
        "question": "Chuông chùa Thiên Mụ được đúc vào năm nào?"
      }
    },
    {
      "questionId": "g4_mis_23",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 23: The Cu Chi tunnel system spans more than two hundred and fifty kilometers of underground passages on three distinct levels.'\nQuestion: Địa đạo Củ Chi dài hơn bao nhiêu km?",
      "promptVi": "Nghe thông báo và trả lời: Địa đạo Củ Chi dài hơn bao nhiêu km?",
      "answerOptions": [
        "250 kilometers",
        "150 kilometers",
        "50 kilometers"
      ],
      "correctAnswer": "250 kilometers",
      "explanation": "Mission accomplished! The announcement confirms: 250 kilometers.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 250 kilometers.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 23: The Cu Chi tunnel system spans more than two hundred and fifty kilometers of underground passages on three distinct levels.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 23: The Cu Chi tunnel system spans more than two hundred and fifty kilometers of underground passages on three distinct levels.",
        "question": "Địa đạo Củ Chi dài hơn bao nhiêu km?"
      }
    },
    {
      "questionId": "g4_mis_24",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 24: Traditional artisans in Bat Trang bake ceramic wares in kilns at temperatures exceeding one thousand two hundred degrees Celsius.'\nQuestion: Gốm Bát Tràng được nung ở nhiệt độ nào?",
      "promptVi": "Nghe thông báo và trả lời: Gốm Bát Tràng được nung ở nhiệt độ nào?",
      "answerOptions": [
        "Over 1,200 °C",
        "500 °C",
        "2,000 °C"
      ],
      "correctAnswer": "Over 1,200 °C",
      "explanation": "Mission accomplished! The announcement confirms: Over 1,200 °C.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Over 1,200 °C.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 24: Traditional artisans in Bat Trang bake ceramic wares in kilns at temperatures exceeding one thousand two hundred degrees Celsius.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 24: Traditional artisans in Bat Trang bake ceramic wares in kilns at temperatures exceeding one thousand two hundred degrees Celsius.",
        "question": "Gốm Bát Tràng được nung ở nhiệt độ nào?"
      }
    },
    {
      "questionId": "g4_mis_25",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 25: The Red-crowned Crane arrives at Tram Chim National Park between December and May when water levels are low.'\nQuestion: Sếu đầu đỏ về Tràm Chim vào khoảng thời gian nào?",
      "promptVi": "Nghe thông báo và trả lời: Sếu đầu đỏ về Tràm Chim vào khoảng thời gian nào?",
      "answerOptions": [
        "December to May",
        "June to August",
        "September to November"
      ],
      "correctAnswer": "December to May",
      "explanation": "Mission accomplished! The announcement confirms: December to May.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: December to May.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 25: The Red-crowned Crane arrives at Tram Chim National Park between December and May when water levels are low.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 25: The Red-crowned Crane arrives at Tram Chim National Park between December and May when water levels are low.",
        "question": "Sếu đầu đỏ về Tràm Chim vào khoảng thời gian nào?"
      }
    },
    {
      "questionId": "g4_mis_26",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 26: Ban Gioc Waterfall is thirty meters high and three hundred meters wide, making it the widest waterfall in Vietnam.'\nQuestion: Thác Bản Giốc rộng bao nhiêu mét?",
      "promptVi": "Nghe thông báo và trả lời: Thác Bản Giốc rộng bao nhiêu mét?",
      "answerOptions": [
        "300 meters wide",
        "100 meters wide",
        "500 meters wide"
      ],
      "correctAnswer": "300 meters wide",
      "explanation": "Mission accomplished! The announcement confirms: 300 meters wide.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 300 meters wide.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 26: Ban Gioc Waterfall is thirty meters high and three hundred meters wide, making it the widest waterfall in Vietnam.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 26: Ban Gioc Waterfall is thirty meters high and three hundred meters wide, making it the widest waterfall in Vietnam.",
        "question": "Thác Bản Giốc rộng bao nhiêu mét?"
      }
    },
    {
      "questionId": "g4_mis_27",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 27: The Dong Van Karst Plateau was officially recognized as a UNESCO Global Geopark in the year 2010.'\nQuestion: Cao nguyên đá Đồng Văn được UNESCO công nhận năm nào?",
      "promptVi": "Nghe thông báo và trả lời: Cao nguyên đá Đồng Văn được UNESCO công nhận năm nào?",
      "answerOptions": [
        "2010",
        "2000",
        "2020"
      ],
      "correctAnswer": "2010",
      "explanation": "Mission accomplished! The announcement confirms: 2010.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 2010.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 27: The Dong Van Karst Plateau was officially recognized as a UNESCO Global Geopark in the year 2010.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 27: The Dong Van Karst Plateau was officially recognized as a UNESCO Global Geopark in the year 2010.",
        "question": "Cao nguyên đá Đồng Văn được UNESCO công nhận năm nào?"
      }
    },
    {
      "questionId": "g4_mis_28",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 28: A traditional set of Dan Da (lithophone) stone musical slabs was discovered in Binh Da, dating back more than three thousand years.'\nQuestion: Đàn đá Bình Đa có niên đại hơn bao nhiêu năm?",
      "promptVi": "Nghe thông báo và trả lời: Đàn đá Bình Đa có niên đại hơn bao nhiêu năm?",
      "answerOptions": [
        "Over 3,000 years",
        "500 years",
        "1,000 years"
      ],
      "correctAnswer": "Over 3,000 years",
      "explanation": "Mission accomplished! The announcement confirms: Over 3,000 years.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Over 3,000 years.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 28: A traditional set of Dan Da (lithophone) stone musical slabs was discovered in Binh Da, dating back more than three thousand years.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 28: A traditional set of Dan Da (lithophone) stone musical slabs was discovered in Binh Da, dating back more than three thousand years.",
        "question": "Đàn đá Bình Đa có niên đại hơn bao nhiêu năm?"
      }
    },
    {
      "questionId": "g4_mis_29",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 29: Sapa's iconic rice terraces were carved by ethnic minorities over centuries to cultivate rice on steep mountain slopes.'\nQuestion: Ruộng bậc thang Sa Pa do ai kiến tạo?",
      "promptVi": "Nghe thông báo và trả lời: Ruộng bậc thang Sa Pa do ai kiến tạo?",
      "answerOptions": [
        "Ethnic minorities",
        "Foreign tourists",
        "City workers"
      ],
      "correctAnswer": "Ethnic minorities",
      "explanation": "Mission accomplished! The announcement confirms: Ethnic minorities.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: Ethnic minorities.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 29: Sapa's iconic rice terraces were carved by ethnic minorities over centuries to cultivate rice on steep mountain slopes.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 29: Sapa's iconic rice terraces were carved by ethnic minorities over centuries to cultivate rice on steep mountain slopes.",
        "question": "Ruộng bậc thang Sa Pa do ai kiến tạo?"
      }
    },
    {
      "questionId": "g4_mis_30",
      "grade": 4,
      "gameType": "listening_mission",
      "topic": "Radio Announcements & Listening Comprehension",
      "difficulty": "challenge",
      "prompt": "Listen to the announcement: 'Audio Mission 30: The Golden Bridge on Ba Na Hills is situated at an altitude of one thousand four hundred meters above sea level.'\nQuestion: Cầu Vàng Bà Nà nằm ở độ cao bao nhiêu?",
      "promptVi": "Nghe thông báo và trả lời: Cầu Vàng Bà Nà nằm ở độ cao bao nhiêu?",
      "answerOptions": [
        "1,400 meters",
        "500 meters",
        "3,000 meters"
      ],
      "correctAnswer": "1,400 meters",
      "explanation": "Mission accomplished! The announcement confirms: 1,400 meters.",
      "explanationVi": "Hoàn thành nhiệm vụ! Thông báo xác nhận: 1,400 meters.",
      "imageAsset": "🎧",
      "audioPrompt": "Audio Mission 30: The Golden Bridge on Ba Na Hills is situated at an altitude of one thousand four hundred meters above sea level.",
      "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
      "metadata": {
        "announcement": "Audio Mission 30: The Golden Bridge on Ba Na Hills is situated at an altitude of one thousand four hundred meters above sea level.",
        "question": "Cầu Vàng Bà Nà nằm ở độ cao bao nhiêu?"
      }
    }
  ],
  "culture_challenge": [
    {
      "questionId": "g4_clc_01",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "What traditional hat made of palm leaves is worn by Vietnamese schoolgirls and farmers?",
      "promptVi": "Nón lá truyền thống",
      "answerOptions": [
        "Conical hat (Non la)",
        "Baseball cap",
        "Beret"
      ],
      "correctAnswer": "Conical hat (Non la)",
      "explanation": "Outstanding cultural knowledge! 'Conical hat (Non la)' (Nón lá truyền thống) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Conical hat (Non la)' (Nón lá truyền thống) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What traditional hat made of palm leaves is worn by Vietnamese schoolgirls and farmers?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Nón lá truyền thống",
        "answer": "Conical hat (Non la)"
      }
    },
    {
      "questionId": "g4_clc_02",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "What do Vietnamese people eat during the Lunar New Year (Tet) for good fortune?",
      "promptVi": "Món ăn truyền thống ngày Tết",
      "answerOptions": [
        "Square sticky rice cake (Banh chung)",
        "Pizza",
        "Spaghetti"
      ],
      "correctAnswer": "Square sticky rice cake (Banh chung)",
      "explanation": "Outstanding cultural knowledge! 'Square sticky rice cake (Banh chung)' (Món ăn truyền thống ngày Tết) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Square sticky rice cake (Banh chung)' (Món ăn truyền thống ngày Tết) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What do Vietnamese people eat during the Lunar New Year (Tet) for good fortune?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Món ăn truyền thống ngày Tết",
        "answer": "Square sticky rice cake (Banh chung)"
      }
    },
    {
      "questionId": "g4_clc_03",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "Which animal is the traditional companion of Vietnamese farmers in the rice fields?",
      "promptVi": "Con vật gắn bó với nhà nông trên đồng ruộng",
      "answerOptions": [
        "Water buffalo",
        "Camel",
        "Kangaroo"
      ],
      "correctAnswer": "Water buffalo",
      "explanation": "Outstanding cultural knowledge! 'Water buffalo' (Con vật gắn bó với nhà nông trên đồng ruộng) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Water buffalo' (Con vật gắn bó với nhà nông trên đồng ruộng) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which animal is the traditional companion of Vietnamese farmers in the rice fields?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Con vật gắn bó với nhà nông trên đồng ruộng",
        "answer": "Water buffalo"
      }
    },
    {
      "questionId": "g4_clc_04",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "What is the traditional long silk tunic with two flaps worn on special occasions?",
      "promptVi": "Trang phục áo dài truyền thống",
      "answerOptions": [
        "Ao Dai",
        "Kimono",
        "Sari"
      ],
      "correctAnswer": "Ao Dai",
      "explanation": "Outstanding cultural knowledge! 'Ao Dai' (Trang phục áo dài truyền thống) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Ao Dai' (Trang phục áo dài truyền thống) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What is the traditional long silk tunic with two flaps worn on special occasions?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Trang phục áo dài truyền thống",
        "answer": "Ao Dai"
      }
    },
    {
      "questionId": "g4_clc_05",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "Which festival on the fifteenth day of the eighth lunar month celebrates children?",
      "promptVi": "Tết Trung Thu cho thiếu nhi",
      "answerOptions": [
        "Mid-Autumn Festival",
        "Halloween",
        "Christmas"
      ],
      "correctAnswer": "Mid-Autumn Festival",
      "explanation": "Outstanding cultural knowledge! 'Mid-Autumn Festival' (Tết Trung Thu cho thiếu nhi) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Mid-Autumn Festival' (Tết Trung Thu cho thiếu nhi) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which festival on the fifteenth day of the eighth lunar month celebrates children?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Tết Trung Thu cho thiếu nhi",
        "answer": "Mid-Autumn Festival"
      }
    },
    {
      "questionId": "g4_clc_06",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "What hot noodle soup with aromatic beef broth is recognized as a national dish?",
      "promptVi": "Món quốc hồn quốc túy",
      "answerOptions": [
        "Pho",
        "Banh Mi",
        "Spring Roll"
      ],
      "correctAnswer": "Pho",
      "explanation": "Outstanding cultural knowledge! 'Pho' (Món quốc hồn quốc túy) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Pho' (Món quốc hồn quốc túy) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What hot noodle soup with aromatic beef broth is recognized as a national dish?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Món quốc hồn quốc túy",
        "answer": "Pho"
      }
    },
    {
      "questionId": "g4_clc_07",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "What musical puppets dance on the water while puppeteers hide behind a screen?",
      "promptVi": "Nghệ thuật múa rối nước",
      "answerOptions": [
        "Water puppets",
        "Shadow dolls",
        "Clay statues"
      ],
      "correctAnswer": "Water puppets",
      "explanation": "Outstanding cultural knowledge! 'Water puppets' (Nghệ thuật múa rối nước) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Water puppets' (Nghệ thuật múa rối nước) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What musical puppets dance on the water while puppeteers hide behind a screen?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Nghệ thuật múa rối nước",
        "answer": "Water puppets"
      }
    },
    {
      "questionId": "g4_clc_08",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "Which famous body of water in Hanoi is associated with the legend of the Magic Sword?",
      "promptVi": "Hồ Hoàn Kiếm linh thiêng",
      "answerOptions": [
        "Hoan Kiem Lake",
        "West Lake",
        "Truc Bach Lake"
      ],
      "correctAnswer": "Hoan Kiem Lake",
      "explanation": "Outstanding cultural knowledge! 'Hoan Kiem Lake' (Hồ Hoàn Kiếm linh thiêng) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Hoan Kiem Lake' (Hồ Hoàn Kiếm linh thiêng) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which famous body of water in Hanoi is associated with the legend of the Magic Sword?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Hồ Hoàn Kiếm linh thiêng",
        "answer": "Hoan Kiem Lake"
      }
    },
    {
      "questionId": "g4_clc_09",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "Which famous bay has nearly two thousand limestone karst islands rising from the sea?",
      "promptVi": "Kỳ quan Vịnh Hạ Long",
      "answerOptions": [
        "Ha Long Bay",
        "Red River",
        "Nha Trang Bay"
      ],
      "correctAnswer": "Ha Long Bay",
      "explanation": "Outstanding cultural knowledge! 'Ha Long Bay' (Kỳ quan Vịnh Hạ Long) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Ha Long Bay' (Kỳ quan Vịnh Hạ Long) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which famous bay has nearly two thousand limestone karst islands rising from the sea?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Kỳ quan Vịnh Hạ Long",
        "answer": "Ha Long Bay"
      }
    },
    {
      "questionId": "g4_clc_10",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "easy",
      "prompt": "Which lantern-lit town in central Vietnam has yellow-painted ancient shophouses?",
      "promptVi": "Đô thị cổ Hội An",
      "answerOptions": [
        "Hoi An",
        "Da Nang",
        "Hue"
      ],
      "correctAnswer": "Hoi An",
      "explanation": "Outstanding cultural knowledge! 'Hoi An' (Đô thị cổ Hội An) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Hoi An' (Đô thị cổ Hội An) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which lantern-lit town in central Vietnam has yellow-painted ancient shophouses?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Đô thị cổ Hội An",
        "answer": "Hoi An"
      }
    },
    {
      "questionId": "g4_clc_11",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "What traditional instrument has only one string and produces expressive pitch-bending melodies?",
      "promptVi": "Đàn bầu độc huyền cầm",
      "answerOptions": [
        "Dan Bau",
        "Dan Tranh",
        "Guitar"
      ],
      "correctAnswer": "Dan Bau",
      "explanation": "Outstanding cultural knowledge! 'Dan Bau' (Đàn bầu độc huyền cầm) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Dan Bau' (Đàn bầu độc huyền cầm) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What traditional instrument has only one string and produces expressive pitch-bending melodies?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Đàn bầu độc huyền cầm",
        "answer": "Dan Bau"
      }
    },
    {
      "questionId": "g4_clc_12",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which ancient village on the outskirts of Hanoi is famous for ceramics for 700 years?",
      "promptVi": "Làng nghề gốm Bát Tràng",
      "answerOptions": [
        "Bat Trang",
        "Van Phuc",
        "Dong Ho"
      ],
      "correctAnswer": "Bat Trang",
      "explanation": "Outstanding cultural knowledge! 'Bat Trang' (Làng nghề gốm Bát Tràng) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Bat Trang' (Làng nghề gốm Bát Tràng) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which ancient village on the outskirts of Hanoi is famous for ceramics for 700 years?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Làng nghề gốm Bát Tràng",
        "answer": "Bat Trang"
      }
    },
    {
      "questionId": "g4_clc_13",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which ancient village near Hanoi is famous for soft, shimmering mulberry silk?",
      "promptVi": "Làng nghề lụa Vạn Phúc",
      "answerOptions": [
        "Van Phuc",
        "Bat Trang",
        "Tho Ha"
      ],
      "correctAnswer": "Van Phuc",
      "explanation": "Outstanding cultural knowledge! 'Van Phuc' (Làng nghề lụa Vạn Phúc) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Van Phuc' (Làng nghề lụa Vạn Phúc) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which ancient village near Hanoi is famous for soft, shimmering mulberry silk?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Làng nghề lụa Vạn Phúc",
        "answer": "Van Phuc"
      }
    },
    {
      "questionId": "g4_clc_14",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "What folk paintings printed on Do paper often feature fat pigs, roosters, and folk tales?",
      "promptVi": "Tranh dân gian Đông Hồ",
      "answerOptions": [
        "Dong Ho paintings",
        "Modern posters",
        "Oil portraits"
      ],
      "correctAnswer": "Dong Ho paintings",
      "explanation": "Outstanding cultural knowledge! 'Dong Ho paintings' (Tranh dân gian Đông Hồ) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Dong Ho paintings' (Tranh dân gian Đông Hồ) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What folk paintings printed on Do paper often feature fat pigs, roosters, and folk tales?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Tranh dân gian Đông Hồ",
        "answer": "Dong Ho paintings"
      }
    },
    {
      "questionId": "g4_clc_15",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which UNESCO biosphere reserve in Can Gio features mangrove roots and playful monkeys?",
      "promptVi": "Rừng ngập mặn Cần Giờ",
      "answerOptions": [
        "Can Gio Mangrove",
        "Cat Tien",
        "Ba Be"
      ],
      "correctAnswer": "Can Gio Mangrove",
      "explanation": "Outstanding cultural knowledge! 'Can Gio Mangrove' (Rừng ngập mặn Cần Giờ) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Can Gio Mangrove' (Rừng ngập mặn Cần Giờ) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which UNESCO biosphere reserve in Can Gio features mangrove roots and playful monkeys?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Rừng ngập mặn Cần Giờ",
        "answer": "Can Gio Mangrove"
      }
    },
    {
      "questionId": "g4_clc_16",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which bridge in Da Nang has two giant stone hands supporting a gold pedestrian walkway?",
      "promptVi": "Cầu Vàng Bà Nà",
      "answerOptions": [
        "Golden Bridge",
        "Dragon Bridge",
        "Han River Bridge"
      ],
      "correctAnswer": "Golden Bridge",
      "explanation": "Outstanding cultural knowledge! 'Golden Bridge' (Cầu Vàng Bà Nà) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Golden Bridge' (Cầu Vàng Bà Nà) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which bridge in Da Nang has two giant stone hands supporting a gold pedestrian walkway?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Cầu Vàng Bà Nà",
        "answer": "Golden Bridge"
      }
    },
    {
      "questionId": "g4_clc_17",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which highest mountain in Indochina stands at an elevation of 3,143 meters?",
      "promptVi": "Đỉnh Fansipan nóc nhà Đông Dương",
      "answerOptions": [
        "Fansipan",
        "Ba Den",
        "Ngoc Linh"
      ],
      "correctAnswer": "Fansipan",
      "explanation": "Outstanding cultural knowledge! 'Fansipan' (Đỉnh Fansipan nóc nhà Đông Dương) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Fansipan' (Đỉnh Fansipan nóc nhà Đông Dương) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which highest mountain in Indochina stands at an elevation of 3,143 meters?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Đỉnh Fansipan nóc nhà Đông Dương",
        "answer": "Fansipan"
      }
    },
    {
      "questionId": "g4_clc_18",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "What is the name of the ancient Champa Hindu temple complex in Quang Nam?",
      "promptVi": "Thánh địa Mỹ Sơn",
      "answerOptions": [
        "My Son Sanctuary",
        "Po Nagar",
        "Angkor Wat"
      ],
      "correctAnswer": "My Son Sanctuary",
      "explanation": "Outstanding cultural knowledge! 'My Son Sanctuary' (Thánh địa Mỹ Sơn) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'My Son Sanctuary' (Thánh địa Mỹ Sơn) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What is the name of the ancient Champa Hindu temple complex in Quang Nam?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Thánh địa Mỹ Sơn",
        "answer": "My Son Sanctuary"
      }
    },
    {
      "questionId": "g4_clc_19",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which historical wharf in Ho Chi Minh City commemorates the journey of President Ho Chi Minh?",
      "promptVi": "Bến Nhà Rồng",
      "answerOptions": [
        "Nha Rong Wharf",
        "Ben Thanh",
        "Cu Chi"
      ],
      "correctAnswer": "Nha Rong Wharf",
      "explanation": "Outstanding cultural knowledge! 'Nha Rong Wharf' (Bến Nhà Rồng) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Nha Rong Wharf' (Bến Nhà Rồng) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which historical wharf in Ho Chi Minh City commemorates the journey of President Ho Chi Minh?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Bến Nhà Rồng",
        "answer": "Nha Rong Wharf"
      }
    },
    {
      "questionId": "g4_clc_20",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "medium",
      "prompt": "Which traditional musical ensemble in the Central Highlands is recognized by UNESCO?",
      "promptVi": "Không gian văn hóa Cồng chiêng Tây Nguyên",
      "answerOptions": [
        "Space of Gong Culture",
        "Chau Van",
        "Quan Ho"
      ],
      "correctAnswer": "Space of Gong Culture",
      "explanation": "Outstanding cultural knowledge! 'Space of Gong Culture' (Không gian văn hóa Cồng chiêng Tây Nguyên) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Space of Gong Culture' (Không gian văn hóa Cồng chiêng Tây Nguyên) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which traditional musical ensemble in the Central Highlands is recognized by UNESCO?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Không gian văn hóa Cồng chiêng Tây Nguyên",
        "answer": "Space of Gong Culture"
      }
    },
    {
      "questionId": "g4_clc_21",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which mountain plateau in Ha Giang is renowned for dramatic limestone peaks and buckwheat blossoms?",
      "promptVi": "Cao nguyên đá Đồng Văn",
      "answerOptions": [
        "Dong Van Karst Plateau",
        "Moc Chau",
        "Lam Dong"
      ],
      "correctAnswer": "Dong Van Karst Plateau",
      "explanation": "Outstanding cultural knowledge! 'Dong Van Karst Plateau' (Cao nguyên đá Đồng Văn) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Dong Van Karst Plateau' (Cao nguyên đá Đồng Văn) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which mountain plateau in Ha Giang is renowned for dramatic limestone peaks and buckwheat blossoms?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Cao nguyên đá Đồng Văn",
        "answer": "Dong Van Karst Plateau"
      }
    },
    {
      "questionId": "g4_clc_22",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "What is the world's largest natural cave chamber, discovered in Quang Binh in 1990?",
      "promptVi": "Hang Sơn Đoòng kỳ vĩ",
      "answerOptions": [
        "Son Doong Cave",
        "Phong Nha",
        "Paradise Cave"
      ],
      "correctAnswer": "Son Doong Cave",
      "explanation": "Outstanding cultural knowledge! 'Son Doong Cave' (Hang Sơn Đoòng kỳ vĩ) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Son Doong Cave' (Hang Sơn Đoòng kỳ vĩ) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What is the world's largest natural cave chamber, discovered in Quang Binh in 1990?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Hang Sơn Đoòng kỳ vĩ",
        "answer": "Son Doong Cave"
      }
    },
    {
      "questionId": "g4_clc_23",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which traditional folk singing style from Bac Ninh features 'lien anh' and 'lien chi' duets?",
      "promptVi": "Dân ca Quan họ Bắc Ninh",
      "answerOptions": [
        "Quan Ho folk singing",
        "Ca Tru",
        "Cheo"
      ],
      "correctAnswer": "Quan Ho folk singing",
      "explanation": "Outstanding cultural knowledge! 'Quan Ho folk singing' (Dân ca Quan họ Bắc Ninh) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Quan Ho folk singing' (Dân ca Quan họ Bắc Ninh) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which traditional folk singing style from Bac Ninh features 'lien anh' and 'lien chi' duets?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Dân ca Quan họ Bắc Ninh",
        "answer": "Quan Ho folk singing"
      }
    },
    {
      "questionId": "g4_clc_24",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which ancient hydraulic system in Ninh Binh connects limestone peaks with scenic sampan waterways?",
      "promptVi": "Quần thể danh thắng Tràng An",
      "answerOptions": [
        "Trang An Scenic Landscape",
        "Ha Long",
        "Tam Dao"
      ],
      "correctAnswer": "Trang An Scenic Landscape",
      "explanation": "Outstanding cultural knowledge! 'Trang An Scenic Landscape' (Quần thể danh thắng Tràng An) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Trang An Scenic Landscape' (Quần thể danh thắng Tràng An) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which ancient hydraulic system in Ninh Binh connects limestone peaks with scenic sampan waterways?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Quần thể danh thắng Tràng An",
        "answer": "Trang An Scenic Landscape"
      }
    },
    {
      "questionId": "g4_clc_25",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "What ancient bronze drum symbolizes the ingenuity and metallurgical skill of early Vietnamese civilization?",
      "promptVi": "Trống đồng Đông Sơn",
      "answerOptions": [
        "Dong Son Bronze Drum",
        "Wooden Drum",
        "Clay Drum"
      ],
      "correctAnswer": "Dong Son Bronze Drum",
      "explanation": "Outstanding cultural knowledge! 'Dong Son Bronze Drum' (Trống đồng Đông Sơn) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Dong Son Bronze Drum' (Trống đồng Đông Sơn) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What ancient bronze drum symbolizes the ingenuity and metallurgical skill of early Vietnamese civilization?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Trống đồng Đông Sơn",
        "answer": "Dong Son Bronze Drum"
      }
    },
    {
      "questionId": "g4_clc_26",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which epic pass through the Annamite Range separates Da Nang and Thua Thien Hue?",
      "promptVi": "Đèo Hải Vân hùng vĩ",
      "answerOptions": [
        "Hai Van Pass",
        "Ma Pi Leng",
        "Pha Din"
      ],
      "correctAnswer": "Hai Van Pass",
      "explanation": "Outstanding cultural knowledge! 'Hai Van Pass' (Đèo Hải Vân hùng vĩ) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Hai Van Pass' (Đèo Hải Vân hùng vĩ) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which epic pass through the Annamite Range separates Da Nang and Thua Thien Hue?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Đèo Hải Vân hùng vĩ",
        "answer": "Hai Van Pass"
      }
    },
    {
      "questionId": "g4_clc_27",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which volcanic island off the coast of Quang Ngai is nicknamed the 'Kingdom of Garlic'?",
      "promptVi": "Huyện đảo Lý Sơn",
      "answerOptions": [
        "Ly Son Island",
        "Phu Quoc",
        "Con Dao"
      ],
      "correctAnswer": "Ly Son Island",
      "explanation": "Outstanding cultural knowledge! 'Ly Son Island' (Huyện đảo Lý Sơn) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Ly Son Island' (Huyện đảo Lý Sơn) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which volcanic island off the coast of Quang Ngai is nicknamed the 'Kingdom of Garlic'?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Huyện đảo Lý Sơn",
        "answer": "Ly Son Island"
      }
    },
    {
      "questionId": "g4_clc_28",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "What sweet soup is traditional in Hue royal cuisine, made of lotus seeds and longan fruit?",
      "promptVi": "Chè hạt sen long nhãn Huế",
      "answerOptions": [
        "Lotus seed longan sweet soup",
        "Tofu pudding",
        "Ice cream"
      ],
      "correctAnswer": "Lotus seed longan sweet soup",
      "explanation": "Outstanding cultural knowledge! 'Lotus seed longan sweet soup' (Chè hạt sen long nhãn Huế) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Lotus seed longan sweet soup' (Chè hạt sen long nhãn Huế) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What sweet soup is traditional in Hue royal cuisine, made of lotus seeds and longan fruit?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Chè hạt sen long nhãn Huế",
        "answer": "Lotus seed longan sweet soup"
      }
    },
    {
      "questionId": "g4_clc_29",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "Which ethnic minority in northern Vietnam is famous for indigo-dyed hemp clothing and batik patterns?",
      "promptVi": "Đồng bào H'Mông với trang phục chàm",
      "answerOptions": [
        "H'Mong ethnic group",
        "Kinh",
        "Tay"
      ],
      "correctAnswer": "H'Mong ethnic group",
      "explanation": "Outstanding cultural knowledge! 'H'Mong ethnic group' (Đồng bào H'Mông với trang phục chàm) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'H'Mong ethnic group' (Đồng bào H'Mông với trang phục chàm) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "Which ethnic minority in northern Vietnam is famous for indigo-dyed hemp clothing and batik patterns?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Đồng bào H'Mông với trang phục chàm",
        "answer": "H'Mong ethnic group"
      }
    },
    {
      "questionId": "g4_clc_30",
      "grade": 4,
      "gameType": "culture_challenge",
      "topic": "Advanced Cultural Heritage & Traditions",
      "difficulty": "challenge",
      "prompt": "What is the national motto of the Socialist Republic of Vietnam?",
      "promptVi": "Tiêu ngữ của nước Việt Nam",
      "answerOptions": [
        "Independence - Freedom - Happiness",
        "Peace - Love - Hope",
        "Unity - Strength - Joy"
      ],
      "correctAnswer": "Independence - Freedom - Happiness",
      "explanation": "Outstanding cultural knowledge! 'Independence - Freedom - Happiness' (Tiêu ngữ của nước Việt Nam) is correct.",
      "explanationVi": "Hiểu biết văn hóa tuyệt vời! 'Independence - Freedom - Happiness' (Tiêu ngữ của nước Việt Nam) hoàn toàn chính xác.",
      "imageAsset": "🇻🇳",
      "audioPrompt": "What is the national motto of the Socialist Republic of Vietnam?",
      "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
      "metadata": {
        "questionVi": "Tiêu ngữ của nước Việt Nam",
        "answer": "Independence - Freedom - Happiness"
      }
    }
  ],
  "champion_quiz": [
    {
      "questionId": "g5_chp_01",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Which auxiliary verb is used for questions in the simple past tense?",
      "promptVi": "Trợ động từ nào dùng trong câu hỏi thì quá khứ đơn?",
      "answerOptions": [
        "Did",
        "Do",
        "Does"
      ],
      "correctAnswer": "Did",
      "explanation": "Champion answer! 'Did' (Trợ động từ nào dùng trong câu hỏi thì quá khứ đơn?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Did' (Trợ động từ nào dùng trong câu hỏi thì quá khứ đơn?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which auxiliary verb is used for questions in the simple past tense?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Trợ động từ nào dùng trong câu hỏi thì quá khứ đơn?",
        "answer": "Did"
      }
    },
    {
      "questionId": "g5_chp_02",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "What is the plural form of the noun 'child'?",
      "promptVi": "Dạng số nhiều của danh từ 'child' là gì?",
      "answerOptions": [
        "Children",
        "Childs",
        "Childes"
      ],
      "correctAnswer": "Children",
      "explanation": "Champion answer! 'Children' (Dạng số nhiều của danh từ 'child' là gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Children' (Dạng số nhiều của danh từ 'child' là gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What is the plural form of the noun 'child'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Dạng số nhiều của danh từ 'child' là gì?",
        "answer": "Children"
      }
    },
    {
      "questionId": "g5_chp_03",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Which preposition is used for specific dates like 'the second of September'?",
      "promptVi": "Giới từ nào dùng cho ngày cụ thể như 2 tháng 9?",
      "answerOptions": [
        "On",
        "In",
        "At"
      ],
      "correctAnswer": "On",
      "explanation": "Champion answer! 'On' (Giới từ nào dùng cho ngày cụ thể như 2 tháng 9?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'On' (Giới từ nào dùng cho ngày cụ thể như 2 tháng 9?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which preposition is used for specific dates like 'the second of September'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Giới từ nào dùng cho ngày cụ thể như 2 tháng 9?",
        "answer": "On"
      }
    },
    {
      "questionId": "g5_chp_04",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Choose the correct comparative: 'Fansipan is _______ than Ba Den Mountain.'",
      "promptVi": "Chọn dạng so sánh hơn của từ 'tall'",
      "answerOptions": [
        "taller",
        "tallest",
        "more tall"
      ],
      "correctAnswer": "taller",
      "explanation": "Champion answer! 'taller' (Chọn dạng so sánh hơn của từ 'tall') is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'taller' (Chọn dạng so sánh hơn của từ 'tall') hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct comparative: 'Fansipan is _______ than Ba Den Mountain.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Chọn dạng so sánh hơn của từ 'tall'",
        "answer": "taller"
      }
    },
    {
      "questionId": "g5_chp_05",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "What is the past form of the irregular verb 'go'?",
      "promptVi": "Dạng quá khứ của động từ 'go' là gì?",
      "answerOptions": [
        "Went",
        "Goed",
        "Gone"
      ],
      "correctAnswer": "Went",
      "explanation": "Champion answer! 'Went' (Dạng quá khứ của động từ 'go' là gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Went' (Dạng quá khứ của động từ 'go' là gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What is the past form of the irregular verb 'go'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Dạng quá khứ của động từ 'go' là gì?",
        "answer": "Went"
      }
    },
    {
      "questionId": "g5_chp_06",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Which pronoun replaces 'my brother and I' as the subject of a sentence?",
      "promptVi": "Đại từ nào thay thế cho 'anh trai tôi và tôi'?",
      "answerOptions": [
        "We",
        "They",
        "Us"
      ],
      "correctAnswer": "We",
      "explanation": "Champion answer! 'We' (Đại từ nào thay thế cho 'anh trai tôi và tôi'?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'We' (Đại từ nào thay thế cho 'anh trai tôi và tôi'?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which pronoun replaces 'my brother and I' as the subject of a sentence?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Đại từ nào thay thế cho 'anh trai tôi và tôi'?",
        "answer": "We"
      }
    },
    {
      "questionId": "g5_chp_07",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Which word describes the climate of southern Vietnam with dry and rainy seasons?",
      "promptVi": "Từ nào chỉ khí hậu nhiệt đới?",
      "answerOptions": [
        "Tropical",
        "Polar",
        "Arctic"
      ],
      "correctAnswer": "Tropical",
      "explanation": "Champion answer! 'Tropical' (Từ nào chỉ khí hậu nhiệt đới?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Tropical' (Từ nào chỉ khí hậu nhiệt đới?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which word describes the climate of southern Vietnam with dry and rainy seasons?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Từ nào chỉ khí hậu nhiệt đới?",
        "answer": "Tropical"
      }
    },
    {
      "questionId": "g5_chp_08",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Choose the correct article: 'We visited _______ ancient pagoda in Hue.'",
      "promptVi": "Chọn mạo từ thích hợp trước 'ancient pagoda'",
      "answerOptions": [
        "an",
        "a",
        "the"
      ],
      "correctAnswer": "an",
      "explanation": "Champion answer! 'an' (Chọn mạo từ thích hợp trước 'ancient pagoda') is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'an' (Chọn mạo từ thích hợp trước 'ancient pagoda') hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct article: 'We visited _______ ancient pagoda in Hue.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Chọn mạo từ thích hợp trước 'ancient pagoda'",
        "answer": "an"
      }
    },
    {
      "questionId": "g5_chp_09",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "What is the opposite meaning of the adjective 'noisy'?",
      "promptVi": "Từ trái nghĩa với từ 'noisy' (ồn ào) là gì?",
      "answerOptions": [
        "Quiet",
        "Busy",
        "Loud"
      ],
      "correctAnswer": "Quiet",
      "explanation": "Champion answer! 'Quiet' (Từ trái nghĩa với từ 'noisy' (ồn ào) là gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Quiet' (Từ trái nghĩa với từ 'noisy' (ồn ào) là gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What is the opposite meaning of the adjective 'noisy'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Từ trái nghĩa với từ 'noisy' (ồn ào) là gì?",
        "answer": "Quiet"
      }
    },
    {
      "questionId": "g5_chp_10",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "easy",
      "prompt": "Choose the correct question word: '_______ is the biggest cave in Vietnam?'",
      "promptVi": "Từ để hỏi địa điểm nào thích hợp?",
      "answerOptions": [
        "Where",
        "When",
        "Who"
      ],
      "correctAnswer": "Where",
      "explanation": "Champion answer! 'Where' (Từ để hỏi địa điểm nào thích hợp?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Where' (Từ để hỏi địa điểm nào thích hợp?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct question word: '_______ is the biggest cave in Vietnam?'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Từ để hỏi địa điểm nào thích hợp?",
        "answer": "Where"
      }
    },
    {
      "questionId": "g5_chp_11",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Which sentence demonstrates correct subject-verb agreement?",
      "promptVi": "Câu nào chia động từ đúng với chủ ngữ?",
      "answerOptions": [
        "She always practices English every evening.",
        "She always practice English every evening.",
        "She always practicing English every evening."
      ],
      "correctAnswer": "She always practices English every evening.",
      "explanation": "Champion answer! 'She always practices English every evening.' (Câu nào chia động từ đúng với chủ ngữ?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'She always practices English every evening.' (Câu nào chia động từ đúng với chủ ngữ?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which sentence demonstrates correct subject-verb agreement?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Câu nào chia động từ đúng với chủ ngữ?",
        "answer": "She always practices English every evening."
      }
    },
    {
      "questionId": "g5_chp_12",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Choose the correct modal verb for obligation: 'Students _______ wear their school uniforms on Mondays.'",
      "promptVi": "Động từ khuyết thiếu chỉ nghĩa vụ bắt buộc",
      "answerOptions": [
        "must",
        "might",
        "can"
      ],
      "correctAnswer": "must",
      "explanation": "Champion answer! 'must' (Động từ khuyết thiếu chỉ nghĩa vụ bắt buộc) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'must' (Động từ khuyết thiếu chỉ nghĩa vụ bắt buộc) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct modal verb for obligation: 'Students _______ wear their school uniforms on Mondays.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Động từ khuyết thiếu chỉ nghĩa vụ bắt buộc",
        "answer": "must"
      }
    },
    {
      "questionId": "g5_chp_13",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "What is the superlative form of the adjective 'good'?",
      "promptVi": "Dạng so sánh nhất của tính từ 'good' là gì?",
      "answerOptions": [
        "The best",
        "The goodest",
        "The better"
      ],
      "correctAnswer": "The best",
      "explanation": "Champion answer! 'The best' (Dạng so sánh nhất của tính từ 'good' là gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'The best' (Dạng so sánh nhất của tính từ 'good' là gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What is the superlative form of the adjective 'good'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Dạng so sánh nhất của tính từ 'good' là gì?",
        "answer": "The best"
      }
    },
    {
      "questionId": "g5_chp_14",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Which tense is used in: 'While we were cruising in Ha Long Bay, it began to rain'?",
      "promptVi": "Thì nào được sử dụng trong mệnh đề thứ nhất?",
      "answerOptions": [
        "Past Continuous",
        "Present Simple",
        "Future Simple"
      ],
      "correctAnswer": "Past Continuous",
      "explanation": "Champion answer! 'Past Continuous' (Thì nào được sử dụng trong mệnh đề thứ nhất?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Past Continuous' (Thì nào được sử dụng trong mệnh đề thứ nhất?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which tense is used in: 'While we were cruising in Ha Long Bay, it began to rain'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Thì nào được sử dụng trong mệnh đề thứ nhất?",
        "answer": "Past Continuous"
      }
    },
    {
      "questionId": "g5_chp_15",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Select the correct conjunction: 'We wanted to climb the mountain peak, _______ the weather was too stormy.'",
      "promptVi": "Liên từ chỉ sự tương phản",
      "answerOptions": [
        "but",
        "so",
        "and"
      ],
      "correctAnswer": "but",
      "explanation": "Champion answer! 'but' (Liên từ chỉ sự tương phản) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'but' (Liên từ chỉ sự tương phản) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Select the correct conjunction: 'We wanted to climb the mountain peak, _______ the weather was too stormy.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Liên từ chỉ sự tương phản",
        "answer": "but"
      }
    },
    {
      "questionId": "g5_chp_16",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "What does the idiom 'piece of cake' mean in English?",
      "promptVi": "Thành ngữ 'piece of cake' có nghĩa là gì?",
      "answerOptions": [
        "Very easy",
        "Very sweet",
        "Very difficult"
      ],
      "correctAnswer": "Very easy",
      "explanation": "Champion answer! 'Very easy' (Thành ngữ 'piece of cake' có nghĩa là gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Very easy' (Thành ngữ 'piece of cake' có nghĩa là gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What does the idiom 'piece of cake' mean in English?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Thành ngữ 'piece of cake' có nghĩa là gì?",
        "answer": "Very easy"
      }
    },
    {
      "questionId": "g5_chp_17",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Choose the correct tag question: 'You visited Hoi An Ancient Town last year, _______?'",
      "promptVi": "Câu hỏi đuôi cho câu khẳng định thì quá khứ đơn",
      "answerOptions": [
        "didn't you",
        "did you",
        "haven't you"
      ],
      "correctAnswer": "didn't you",
      "explanation": "Champion answer! 'didn't you' (Câu hỏi đuôi cho câu khẳng định thì quá khứ đơn) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'didn't you' (Câu hỏi đuôi cho câu khẳng định thì quá khứ đơn) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct tag question: 'You visited Hoi An Ancient Town last year, _______?'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Câu hỏi đuôi cho câu khẳng định thì quá khứ đơn",
        "answer": "didn't you"
      }
    },
    {
      "questionId": "g5_chp_18",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Which word is an adverb of frequency: 'always', 'happy', 'quick'?",
      "promptVi": "Từ nào là trạng từ chỉ tần suất?",
      "answerOptions": [
        "always",
        "happy",
        "quick"
      ],
      "correctAnswer": "always",
      "explanation": "Champion answer! 'always' (Từ nào là trạng từ chỉ tần suất?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'always' (Từ nào là trạng từ chỉ tần suất?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which word is an adverb of frequency: 'always', 'happy', 'quick'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Từ nào là trạng từ chỉ tần suất?",
        "answer": "always"
      }
    },
    {
      "questionId": "g5_chp_19",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Choose the correct possessive pronoun: 'This English notebook belongs to Nam. It is _______.'",
      "promptVi": "Đại từ sở hữu thay thế cho 'Nam's notebook'",
      "answerOptions": [
        "his",
        "him",
        "he"
      ],
      "correctAnswer": "his",
      "explanation": "Champion answer! 'his' (Đại từ sở hữu thay thế cho 'Nam's notebook') is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'his' (Đại từ sở hữu thay thế cho 'Nam's notebook') hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct possessive pronoun: 'This English notebook belongs to Nam. It is _______.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Đại từ sở hữu thay thế cho 'Nam's notebook'",
        "answer": "his"
      }
    },
    {
      "questionId": "g5_chp_20",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "medium",
      "prompt": "Which prefix turns the word 'patient' into its opposite meaning?",
      "promptVi": "Tiền tố nào tạo từ trái nghĩa của 'patient'?",
      "answerOptions": [
        "im- (impatient)",
        "un- (unpatient)",
        "dis- (dispatient)"
      ],
      "correctAnswer": "im- (impatient)",
      "explanation": "Champion answer! 'im- (impatient)' (Tiền tố nào tạo từ trái nghĩa của 'patient'?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'im- (impatient)' (Tiền tố nào tạo từ trái nghĩa của 'patient'?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which prefix turns the word 'patient' into its opposite meaning?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Tiền tố nào tạo từ trái nghĩa của 'patient'?",
        "answer": "im- (impatient)"
      }
    },
    {
      "questionId": "g5_chp_21",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Identify the correct conditional sentence (Type 1): 'If it rains tomorrow, _______.'",
      "promptVi": "Câu điều kiện loại 1 hoàn chỉnh",
      "answerOptions": [
        "we will stay indoors and read books.",
        "we stayed indoors and read books.",
        "we would stay indoors."
      ],
      "correctAnswer": "we will stay indoors and read books.",
      "explanation": "Champion answer! 'we will stay indoors and read books.' (Câu điều kiện loại 1 hoàn chỉnh) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'we will stay indoors and read books.' (Câu điều kiện loại 1 hoàn chỉnh) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Identify the correct conditional sentence (Type 1): 'If it rains tomorrow, _______.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Câu điều kiện loại 1 hoàn chỉnh",
        "answer": "we will stay indoors and read books."
      }
    },
    {
      "questionId": "g5_chp_22",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Which relative pronoun correctly joins: 'The artisan _______ crafted this vase lives in Bat Trang'?",
      "promptVi": "Đại từ quan hệ chỉ người làm chủ ngữ",
      "answerOptions": [
        "who",
        "which",
        "where"
      ],
      "correctAnswer": "who",
      "explanation": "Champion answer! 'who' (Đại từ quan hệ chỉ người làm chủ ngữ) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'who' (Đại từ quan hệ chỉ người làm chủ ngữ) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which relative pronoun correctly joins: 'The artisan _______ crafted this vase lives in Bat Trang'?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Đại từ quan hệ chỉ người làm chủ ngữ",
        "answer": "who"
      }
    },
    {
      "questionId": "g5_chp_23",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Choose the correct passive voice: 'Nguyen Du wrote the masterpiece Tale of Kieu.'",
      "promptVi": "Câu bị động chính xác",
      "answerOptions": [
        "The Tale of Kieu was written by Nguyen Du.",
        "The Tale of Kieu is written by Nguyen Du.",
        "The Tale of Kieu wrote by Nguyen Du."
      ],
      "correctAnswer": "The Tale of Kieu was written by Nguyen Du.",
      "explanation": "Champion answer! 'The Tale of Kieu was written by Nguyen Du.' (Câu bị động chính xác) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'The Tale of Kieu was written by Nguyen Du.' (Câu bị động chính xác) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct passive voice: 'Nguyen Du wrote the masterpiece Tale of Kieu.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Câu bị động chính xác",
        "answer": "The Tale of Kieu was written by Nguyen Du."
      }
    },
    {
      "questionId": "g5_chp_24",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "What is the meaning of the adjective 'magnificent' describing a natural landscape?",
      "promptVi": "Nghĩa của tính từ 'magnificent' khi mô tả phong cảnh",
      "answerOptions": [
        "Extremely beautiful and impressive",
        "Small and delicate",
        "Ordinary and dull"
      ],
      "correctAnswer": "Extremely beautiful and impressive",
      "explanation": "Champion answer! 'Extremely beautiful and impressive' (Nghĩa của tính từ 'magnificent' khi mô tả phong cảnh) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Extremely beautiful and impressive' (Nghĩa của tính từ 'magnificent' khi mô tả phong cảnh) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What is the meaning of the adjective 'magnificent' describing a natural landscape?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Nghĩa của tính từ 'magnificent' khi mô tả phong cảnh",
        "answer": "Extremely beautiful and impressive"
      }
    },
    {
      "questionId": "g5_chp_25",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Choose the correct reported speech: 'Mai said: \"I love learning English.\"'",
      "promptVi": "Câu gián tiếp chính xác",
      "answerOptions": [
        "Mai said that she loved learning English.",
        "Mai said that I love learning English.",
        "Mai says she loved learning English."
      ],
      "correctAnswer": "Mai said that she loved learning English.",
      "explanation": "Champion answer! 'Mai said that she loved learning English.' (Câu gián tiếp chính xác) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Mai said that she loved learning English.' (Câu gián tiếp chính xác) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct reported speech: 'Mai said: \"I love learning English.\"'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Câu gián tiếp chính xác",
        "answer": "Mai said that she loved learning English."
      }
    },
    {
      "questionId": "g5_chp_26",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Which word correctly functions as both a noun and a verb?",
      "promptVi": "Từ nào vừa là danh từ vừa là động từ?",
      "answerOptions": [
        "Travel",
        "Beautiful",
        "Quickly"
      ],
      "correctAnswer": "Travel",
      "explanation": "Champion answer! 'Travel' (Từ nào vừa là danh từ vừa là động từ?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Travel' (Từ nào vừa là danh từ vừa là động từ?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Which word correctly functions as both a noun and a verb?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Từ nào vừa là danh từ vừa là động từ?",
        "answer": "Travel"
      }
    },
    {
      "questionId": "g5_chp_27",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "What does 'sustainable tourism' emphasize for young travelers in Vietnam?",
      "promptVi": "Khái niệm 'du lịch bền vững' nhấn mạnh điều gì?",
      "answerOptions": [
        "Protecting nature and respecting local cultures",
        "Buying as much plastic as possible",
        "Traveling as fast as possible"
      ],
      "correctAnswer": "Protecting nature and respecting local cultures",
      "explanation": "Champion answer! 'Protecting nature and respecting local cultures' (Khái niệm 'du lịch bền vững' nhấn mạnh điều gì?) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Protecting nature and respecting local cultures' (Khái niệm 'du lịch bền vững' nhấn mạnh điều gì?) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What does 'sustainable tourism' emphasize for young travelers in Vietnam?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Khái niệm 'du lịch bền vững' nhấn mạnh điều gì?",
        "answer": "Protecting nature and respecting local cultures"
      }
    },
    {
      "questionId": "g5_chp_28",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Select the correct phrasal verb: 'Don't forget to _______ your shoes before entering the temple.'",
      "promptVi": "Cụm động từ chỉ hành động cởi giày",
      "answerOptions": [
        "take off",
        "put on",
        "look for"
      ],
      "correctAnswer": "take off",
      "explanation": "Champion answer! 'take off' (Cụm động từ chỉ hành động cởi giày) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'take off' (Cụm động từ chỉ hành động cởi giày) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Select the correct phrasal verb: 'Don't forget to _______ your shoes before entering the temple.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Cụm động từ chỉ hành động cởi giày",
        "answer": "take off"
      }
    },
    {
      "questionId": "g5_chp_29",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "Choose the correct sentence with inversion for emphasis: 'Never before _______ such a stunning sunset over Ha Long Bay.'",
      "promptVi": "Cấu trúc đảo ngữ nhấn mạnh",
      "answerOptions": [
        "have I seen",
        "I have seen",
        "I saw"
      ],
      "correctAnswer": "have I seen",
      "explanation": "Champion answer! 'have I seen' (Cấu trúc đảo ngữ nhấn mạnh) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'have I seen' (Cấu trúc đảo ngữ nhấn mạnh) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "Choose the correct sentence with inversion for emphasis: 'Never before _______ such a stunning sunset over Ha Long Bay.'",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Cấu trúc đảo ngữ nhấn mạnh",
        "answer": "have I seen"
      }
    },
    {
      "questionId": "g5_chp_30",
      "grade": 5,
      "gameType": "champion_quiz",
      "topic": "Advanced Grammar & Language Mastery",
      "difficulty": "challenge",
      "prompt": "What qualities define a true VietDiscovery English Champion?",
      "promptVi": "Phẩm chất của một nhà vô địch tiếng Anh VietDiscovery",
      "answerOptions": [
        "Confidence, cultural pride, and lifelong curiosity",
        "Only memorizing for tests",
        "Forgetting national traditions"
      ],
      "correctAnswer": "Confidence, cultural pride, and lifelong curiosity",
      "explanation": "Champion answer! 'Confidence, cultural pride, and lifelong curiosity' (Phẩm chất của một nhà vô địch tiếng Anh VietDiscovery) is grammatically and contextually correct.",
      "explanationVi": "Câu trả lời của nhà vô địch! 'Confidence, cultural pride, and lifelong curiosity' (Phẩm chất của một nhà vô địch tiếng Anh VietDiscovery) hoàn toàn chuẩn xác.",
      "imageAsset": "🏆",
      "audioPrompt": "What qualities define a true VietDiscovery English Champion?",
      "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
      "metadata": {
        "questionVi": "Phẩm chất của một nhà vô địch tiếng Anh VietDiscovery",
        "answer": "Confidence, cultural pride, and lifelong curiosity"
      }
    }
  ],
  "tour_guide": [
    {
      "questionId": "g5_tour_01",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'Excuse me, where can I buy some sweet traditional mooncakes?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tôi có thể mua bánh trung thu truyền thống ở đâu?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "You can buy them at bakeries on Hang Ma Street.",
        "You can buy them at the pharmacy.",
        "In the library."
      ],
      "correctAnswer": "You can buy them at bakeries on Hang Ma Street.",
      "explanation": "Professional and culturally accurate! 'You can buy them at bakeries on Hang Ma Street.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'You can buy them at bakeries on Hang Ma Street.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Excuse me, where can I buy some sweet traditional mooncakes?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Excuse me, where can I buy some sweet traditional mooncakes?'",
        "guideAnswer": "You can buy them at bakeries on Hang Ma Street."
      }
    },
    {
      "questionId": "g5_tour_02",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What is the best way to travel around Hoi An Ancient Town?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Cách tốt nhất để tham quan phố cổ Hội An là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Riding a bicycle or walking peacefully on foot.",
        "By taking a big airplane.",
        "Driving a heavy truck."
      ],
      "correctAnswer": "Riding a bicycle or walking peacefully on foot.",
      "explanation": "Professional and culturally accurate! 'Riding a bicycle or walking peacefully on foot.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Riding a bicycle or walking peacefully on foot.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the best way to travel around Hoi An Ancient Town?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the best way to travel around Hoi An Ancient Town?'",
        "guideAnswer": "Riding a bicycle or walking peacefully on foot."
      }
    },
    {
      "questionId": "g5_tour_03",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What noodle dish should I definitely try in Hanoi?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Món mì nước nào nhất định phải thử ở Hà Nội?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "You must try traditional beef or chicken Pho.",
        "You should eat ice cream only.",
        "Spaghetti with tomato."
      ],
      "correctAnswer": "You must try traditional beef or chicken Pho.",
      "explanation": "Professional and culturally accurate! 'You must try traditional beef or chicken Pho.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'You must try traditional beef or chicken Pho.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What noodle dish should I definitely try in Hanoi?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What noodle dish should I definitely try in Hanoi?'",
        "guideAnswer": "You must try traditional beef or chicken Pho."
      }
    },
    {
      "questionId": "g5_tour_04",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'Why are there so many limestone islands in Ha Long Bay?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Vì sao Vịnh Hạ Long lại có nhiều đảo đá vôi như vậy?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They were formed by nature over millions of years.",
        "People built them last year.",
        "They floated from the ocean."
      ],
      "correctAnswer": "They were formed by nature over millions of years.",
      "explanation": "Professional and culturally accurate! 'They were formed by nature over millions of years.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They were formed by nature over millions of years.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Why are there so many limestone islands in Ha Long Bay?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Why are there so many limestone islands in Ha Long Bay?'",
        "guideAnswer": "They were formed by nature over millions of years."
      }
    },
    {
      "questionId": "g5_tour_05",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What do the two giant stone hands on the Golden Bridge symbolize?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Hai bàn tay đá nâng Cầu Vàng tượng trưng cho điều gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They symbolize the hands of the Mountain God.",
        "They are holding a sword.",
        "They are building a ship."
      ],
      "correctAnswer": "They symbolize the hands of the Mountain God.",
      "explanation": "Professional and culturally accurate! 'They symbolize the hands of the Mountain God.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They symbolize the hands of the Mountain God.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What do the two giant stone hands on the Golden Bridge symbolize?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What do the two giant stone hands on the Golden Bridge symbolize?'",
        "guideAnswer": "They symbolize the hands of the Mountain God."
      }
    },
    {
      "questionId": "g5_tour_06",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'Can I take photos inside the Imperial Citadel of Hue?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tôi có thể chụp ảnh trong Đại Nội Huế không?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Yes, photography is welcome in the courtyard areas.",
        "No, cameras are forbidden everywhere.",
        "Only at night."
      ],
      "correctAnswer": "Yes, photography is welcome in the courtyard areas.",
      "explanation": "Professional and culturally accurate! 'Yes, photography is welcome in the courtyard areas.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Yes, photography is welcome in the courtyard areas.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Can I take photos inside the Imperial Citadel of Hue?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Can I take photos inside the Imperial Citadel of Hue?'",
        "guideAnswer": "Yes, photography is welcome in the courtyard areas."
      }
    },
    {
      "questionId": "g5_tour_07",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What does the conical hat protect people from?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Nón lá che chắn cho người đội khỏi điều gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It shields from both bright tropical sunshine and rain.",
        "Only from cold winter snow.",
        "From flying birds."
      ],
      "correctAnswer": "It shields from both bright tropical sunshine and rain.",
      "explanation": "Professional and culturally accurate! 'It shields from both bright tropical sunshine and rain.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It shields from both bright tropical sunshine and rain.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What does the conical hat protect people from?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What does the conical hat protect people from?'",
        "guideAnswer": "It shields from both bright tropical sunshine and rain."
      }
    },
    {
      "questionId": "g5_tour_08",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What is the famous clock tower in Ho Chi Minh City?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tháp đồng hồ nổi tiếng ở TP.HCM là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "That is the iconic southern gate of Ben Thanh Market.",
        "That is Hanoi Opera House.",
        "That is Long Bien Bridge."
      ],
      "correctAnswer": "That is the iconic southern gate of Ben Thanh Market.",
      "explanation": "Professional and culturally accurate! 'That is the iconic southern gate of Ben Thanh Market.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'That is the iconic southern gate of Ben Thanh Market.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the famous clock tower in Ho Chi Minh City?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the famous clock tower in Ho Chi Minh City?'",
        "guideAnswer": "That is the iconic southern gate of Ben Thanh Market."
      }
    },
    {
      "questionId": "g5_tour_09",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'Where is the highest cable car in Vietnam located?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tuyến cáp treo lên đỉnh núi cao nhất nằm ở đâu?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It takes visitors to the summit of Fansipan in Sapa.",
        "In Da Nang city center.",
        "In Hue city."
      ],
      "correctAnswer": "It takes visitors to the summit of Fansipan in Sapa.",
      "explanation": "Professional and culturally accurate! 'It takes visitors to the summit of Fansipan in Sapa.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It takes visitors to the summit of Fansipan in Sapa.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Where is the highest cable car in Vietnam located?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Where is the highest cable car in Vietnam located?'",
        "guideAnswer": "It takes visitors to the summit of Fansipan in Sapa."
      }
    },
    {
      "questionId": "g5_tour_10",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "easy",
      "prompt": "Tourist: 'What fruit is hanging on the bamboo poles at Cai Rang market?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Người ta treo trái cây gì trên cây bẹo ở chợ nổi?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Vendors hang the exact fruit they are selling from their boat.",
        "Just colourful decorations.",
        "Signs for fuel."
      ],
      "correctAnswer": "Vendors hang the exact fruit they are selling from their boat.",
      "explanation": "Professional and culturally accurate! 'Vendors hang the exact fruit they are selling from their boat.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Vendors hang the exact fruit they are selling from their boat.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What fruit is hanging on the bamboo poles at Cai Rang market?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What fruit is hanging on the bamboo poles at Cai Rang market?'",
        "guideAnswer": "Vendors hang the exact fruit they are selling from their boat."
      }
    },
    {
      "questionId": "g5_tour_11",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'Why do local people release paper lanterns onto the river in Hoi An?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tại sao người ta thả đèn hoa đăng trên sông Hoài?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They pray for peace, health, and good luck for their family.",
        "They are trying to catch fish.",
        "It is a swimming race."
      ],
      "correctAnswer": "They pray for peace, health, and good luck for their family.",
      "explanation": "Professional and culturally accurate! 'They pray for peace, health, and good luck for their family.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They pray for peace, health, and good luck for their family.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Why do local people release paper lanterns onto the river in Hoi An?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Why do local people release paper lanterns onto the river in Hoi An?'",
        "guideAnswer": "They pray for peace, health, and good luck for their family."
      }
    },
    {
      "questionId": "g5_tour_12",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'How deep is Son Doong Cave and can beginners enter easily?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Hang Sơn Đoòng sâu bao nhiêu và người mới có dễ vào không?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It requires specialized hiking gear and professional guides.",
        "Anyone can walk in without a guide.",
        "It is only five meters deep."
      ],
      "correctAnswer": "It requires specialized hiking gear and professional guides.",
      "explanation": "Professional and culturally accurate! 'It requires specialized hiking gear and professional guides.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It requires specialized hiking gear and professional guides.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'How deep is Son Doong Cave and can beginners enter easily?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'How deep is Son Doong Cave and can beginners enter easily?'",
        "guideAnswer": "It requires specialized hiking gear and professional guides."
      }
    },
    {
      "questionId": "g5_tour_13",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What makes Bat Trang ceramic pottery so famous for centuries?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Điều gì làm gốm Bát Tràng nổi tiếng hàng thế kỷ?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Artisans hand-paint traditional motifs with unique natural glazes.",
        "They use plastic molds from factories.",
        "They import everything."
      ],
      "correctAnswer": "Artisans hand-paint traditional motifs with unique natural glazes.",
      "explanation": "Professional and culturally accurate! 'Artisans hand-paint traditional motifs with unique natural glazes.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Artisans hand-paint traditional motifs with unique natural glazes.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What makes Bat Trang ceramic pottery so famous for centuries?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What makes Bat Trang ceramic pottery so famous for centuries?'",
        "guideAnswer": "Artisans hand-paint traditional motifs with unique natural glazes."
      }
    },
    {
      "questionId": "g5_tour_14",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What is the legend behind the naming of Hoan Kiem Lake?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Truyền thuyết tên gọi Hồ Hoàn Kiếm là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "King Le Loi returned the magical sword to the Golden Turtle.",
        "A dragon drank all the water.",
        "A fisherman found gold."
      ],
      "correctAnswer": "King Le Loi returned the magical sword to the Golden Turtle.",
      "explanation": "Professional and culturally accurate! 'King Le Loi returned the magical sword to the Golden Turtle.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'King Le Loi returned the magical sword to the Golden Turtle.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the legend behind the naming of Hoan Kiem Lake?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the legend behind the naming of Hoan Kiem Lake?'",
        "guideAnswer": "King Le Loi returned the magical sword to the Golden Turtle."
      }
    },
    {
      "questionId": "g5_tour_15",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'Why is Hue royal court music recognized by UNESCO?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Vì sao Nhã nhạc cung đình Huế được UNESCO vinh danh?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It preserves ancient ceremonial royal melodies and orchestra instruments.",
        "It is modern rock music.",
        "It was created yesterday."
      ],
      "correctAnswer": "It preserves ancient ceremonial royal melodies and orchestra instruments.",
      "explanation": "Professional and culturally accurate! 'It preserves ancient ceremonial royal melodies and orchestra instruments.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It preserves ancient ceremonial royal melodies and orchestra instruments.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Why is Hue royal court music recognized by UNESCO?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Why is Hue royal court music recognized by UNESCO?'",
        "guideAnswer": "It preserves ancient ceremonial royal melodies and orchestra instruments."
      }
    },
    {
      "questionId": "g5_tour_16",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What should we wear when visiting sacred temples in Vietnam?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Nên mặc trang phục gì khi thăm chùa chiền linh thiêng?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Modest attire covering your shoulders and knees out of respect.",
        "Beach swimwear and flip flops.",
        "Loud party costumes."
      ],
      "correctAnswer": "Modest attire covering your shoulders and knees out of respect.",
      "explanation": "Professional and culturally accurate! 'Modest attire covering your shoulders and knees out of respect.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Modest attire covering your shoulders and knees out of respect.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What should we wear when visiting sacred temples in Vietnam?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What should we wear when visiting sacred temples in Vietnam?'",
        "guideAnswer": "Modest attire covering your shoulders and knees out of respect."
      }
    },
    {
      "questionId": "g5_tour_17",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What are the Cu Chi tunnels and how long are they?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Địa đạo Củ Chi là gì và dài bao nhiêu?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They form an underground network over 250 kilometers long.",
        "A shallow ditch near the river.",
        "An underwater tunnel under the sea."
      ],
      "correctAnswer": "They form an underground network over 250 kilometers long.",
      "explanation": "Professional and culturally accurate! 'They form an underground network over 250 kilometers long.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They form an underground network over 250 kilometers long.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What are the Cu Chi tunnels and how long are they?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What are the Cu Chi tunnels and how long are they?'",
        "guideAnswer": "They form an underground network over 250 kilometers long."
      }
    },
    {
      "questionId": "g5_tour_18",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'How do farmers grow rice on steep hills in Sapa?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Nông dân trồng lúa thế nào trên sườn đồi dốc Sa Pa?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They construct stepped terraces that trap mountain rainwater.",
        "They plant trees upside down.",
        "They only grow rice in greenhouses."
      ],
      "correctAnswer": "They construct stepped terraces that trap mountain rainwater.",
      "explanation": "Professional and culturally accurate! 'They construct stepped terraces that trap mountain rainwater.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They construct stepped terraces that trap mountain rainwater.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'How do farmers grow rice on steep hills in Sapa?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'How do farmers grow rice on steep hills in Sapa?'",
        "guideAnswer": "They construct stepped terraces that trap mountain rainwater."
      }
    },
    {
      "questionId": "g5_tour_19",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What is the special ingredient in Vietnamese egg coffee?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Thành phần đặc biệt trong cà phê trứng Hà Nội là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Whipped egg yolk with condensed milk over robust coffee.",
        "Boiled scrambled eggs on tea.",
        "Cold fruit juice with eggs."
      ],
      "correctAnswer": "Whipped egg yolk with condensed milk over robust coffee.",
      "explanation": "Professional and culturally accurate! 'Whipped egg yolk with condensed milk over robust coffee.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Whipped egg yolk with condensed milk over robust coffee.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the special ingredient in Vietnamese egg coffee?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the special ingredient in Vietnamese egg coffee?'",
        "guideAnswer": "Whipped egg yolk with condensed milk over robust coffee."
      }
    },
    {
      "questionId": "g5_tour_20",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "medium",
      "prompt": "Tourist: 'What does the Ao Dai symbolize in Vietnamese culture?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Áo dài tượng trưng cho điều gì trong văn hóa Việt Nam?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Elegance, national identity, and cultural grace.",
        "Military strength.",
        "Modern industrial work."
      ],
      "correctAnswer": "Elegance, national identity, and cultural grace.",
      "explanation": "Professional and culturally accurate! 'Elegance, national identity, and cultural grace.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Elegance, national identity, and cultural grace.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What does the Ao Dai symbolize in Vietnamese culture?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What does the Ao Dai symbolize in Vietnamese culture?'",
        "guideAnswer": "Elegance, national identity, and cultural grace."
      }
    },
    {
      "questionId": "g5_tour_21",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'Can you explain the historical significance of the Dien Bien Phu victory?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Ý nghĩa lịch sử của chiến thắng Điện Biên Phủ là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It demonstrated national determination and ended colonial rule in 1954.",
        "It was an ordinary sports game.",
        "It was a commercial treaty."
      ],
      "correctAnswer": "It demonstrated national determination and ended colonial rule in 1954.",
      "explanation": "Professional and culturally accurate! 'It demonstrated national determination and ended colonial rule in 1954.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It demonstrated national determination and ended colonial rule in 1954.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Can you explain the historical significance of the Dien Bien Phu victory?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Can you explain the historical significance of the Dien Bien Phu victory?'",
        "guideAnswer": "It demonstrated national determination and ended colonial rule in 1954."
      }
    },
    {
      "questionId": "g5_tour_22",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'What is the ecological importance of Can Gio Biosphere Reserve?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Tầm quan trọng sinh thái của rừng ngập mặn Cần Giờ?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.",
        "It provides space for skyscrapers.",
        "It produces plastic products."
      ],
      "correctAnswer": "It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.",
      "explanation": "Professional and culturally accurate! 'It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the ecological importance of Can Gio Biosphere Reserve?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the ecological importance of Can Gio Biosphere Reserve?'",
        "guideAnswer": "It shields Ho Chi Minh City from storm surges and cleans wastewater naturally."
      }
    },
    {
      "questionId": "g5_tour_23",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'Why are Dong Ho folk woodcut prints so culturally cherished?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Vì sao tranh khắc gỗ Đông Hồ lại được trân trọng?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "They depict peaceful rural life, folk morality, and wishes for abundance.",
        "They are imported from overseas.",
        "They are printed by computer."
      ],
      "correctAnswer": "They depict peaceful rural life, folk morality, and wishes for abundance.",
      "explanation": "Professional and culturally accurate! 'They depict peaceful rural life, folk morality, and wishes for abundance.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'They depict peaceful rural life, folk morality, and wishes for abundance.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Why are Dong Ho folk woodcut prints so culturally cherished?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Why are Dong Ho folk woodcut prints so culturally cherished?'",
        "guideAnswer": "They depict peaceful rural life, folk morality, and wishes for abundance."
      }
    },
    {
      "questionId": "g5_tour_24",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'How does the Mekong Delta contribute to national and global food security?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Đồng bằng sông Cửu Long đóng góp gì cho an ninh lương thực?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.",
        "It only produces timber.",
        "It imports food from abroad."
      ],
      "correctAnswer": "It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.",
      "explanation": "Professional and culturally accurate! 'It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'How does the Mekong Delta contribute to national and global food security?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'How does the Mekong Delta contribute to national and global food security?'",
        "guideAnswer": "It produces over fifty percent of Vietnam's rice and ninety percent of rice exports."
      }
    },
    {
      "questionId": "g5_tour_25",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'What makes the Tu San Canyon in Ha Giang geographically extraordinary?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Hẻm vực Tu San ở Hà Giang có gì đặc biệt về địa chất?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.",
        "It is completely flat.",
        "It is located underwater."
      ],
      "correctAnswer": "It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.",
      "explanation": "Professional and culturally accurate! 'It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What makes the Tu San Canyon in Ha Giang geographically extraordinary?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What makes the Tu San Canyon in Ha Giang geographically extraordinary?'",
        "guideAnswer": "It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters."
      }
    },
    {
      "questionId": "g5_tour_26",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'What is the message behind the ancient legend of Banh Chung and Banh Giay?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Thông điệp của sự tích Bánh chưng bánh giầy là gì?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Filial piety, gratitude to nature, and the balance of Earth and Sky.",
        "Only that square cakes are tasty.",
        "How to sell cakes in markets."
      ],
      "correctAnswer": "Filial piety, gratitude to nature, and the balance of Earth and Sky.",
      "explanation": "Professional and culturally accurate! 'Filial piety, gratitude to nature, and the balance of Earth and Sky.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Filial piety, gratitude to nature, and the balance of Earth and Sky.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What is the message behind the ancient legend of Banh Chung and Banh Giay?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What is the message behind the ancient legend of Banh Chung and Banh Giay?'",
        "guideAnswer": "Filial piety, gratitude to nature, and the balance of Earth and Sky."
      }
    },
    {
      "questionId": "g5_tour_27",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'Why do so many ethnic groups gather at northern highland love markets?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Vì sao các dân tộc tụ họp ở chợ phiên vùng cao?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "To trade handicrafts, play traditional panpipes, and meet friends.",
        "To watch television.",
        "To attend flight boarding."
      ],
      "correctAnswer": "To trade handicrafts, play traditional panpipes, and meet friends.",
      "explanation": "Professional and culturally accurate! 'To trade handicrafts, play traditional panpipes, and meet friends.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'To trade handicrafts, play traditional panpipes, and meet friends.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Why do so many ethnic groups gather at northern highland love markets?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Why do so many ethnic groups gather at northern highland love markets?'",
        "guideAnswer": "To trade handicrafts, play traditional panpipes, and meet friends."
      }
    },
    {
      "questionId": "g5_tour_28",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'How do Cham towers maintain their structural stability without visible mortar?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Các tháp Chăm đứng vững thế nào mà không thấy vữa liên kết?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.",
        "They used modern steel beams.",
        "They used chemical cement."
      ],
      "correctAnswer": "Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.",
      "explanation": "Professional and culturally accurate! 'Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'How do Cham towers maintain their structural stability without visible mortar?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'How do Cham towers maintain their structural stability without visible mortar?'",
        "guideAnswer": "Ancient builders ground resin and brick powder to fuse clay bricks seamlessly."
      }
    },
    {
      "questionId": "g5_tour_29",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'What makes Vietnam an inspiring destination for sustainable eco-tourism?'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách hỏi: 'Điều gì biến Việt Nam thành điểm đến sinh thái truyền cảm hứng?'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "Rich biodiversity, welcoming people, and living cultural traditions.",
        "Only shopping malls.",
        "Desert highways."
      ],
      "correctAnswer": "Rich biodiversity, welcoming people, and living cultural traditions.",
      "explanation": "Professional and culturally accurate! 'Rich biodiversity, welcoming people, and living cultural traditions.' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'Rich biodiversity, welcoming people, and living cultural traditions.' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'What makes Vietnam an inspiring destination for sustainable eco-tourism?'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'What makes Vietnam an inspiring destination for sustainable eco-tourism?'",
        "guideAnswer": "Rich biodiversity, welcoming people, and living cultural traditions."
      }
    },
    {
      "questionId": "g5_tour_30",
      "grade": 5,
      "gameType": "tour_guide",
      "topic": "Tour Guide Situational English",
      "difficulty": "challenge",
      "prompt": "Tourist: 'Thank you for being such an extraordinary young tour guide!'\nHow should the Tour Guide respond professionally?",
      "promptVi": "Khách khen ngợi: 'Cảm ơn em đã là một hướng dẫn viên nhí tuyệt vời!'\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
      "answerOptions": [
        "You are very welcome! Welcome to Vietnam, the land of wonders!",
        "Goodbye forever.",
        "Give me your bag."
      ],
      "correctAnswer": "You are very welcome! Welcome to Vietnam, the land of wonders!",
      "explanation": "Professional and culturally accurate! 'You are very welcome! Welcome to Vietnam, the land of wonders!' guides the tourist with courtesy and pride.",
      "explanationVi": "Chuyên nghiệp và chuẩn xác! 'You are very welcome! Welcome to Vietnam, the land of wonders!' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
      "imageAsset": "🧭",
      "audioPrompt": "Tourist: 'Thank you for being such an extraordinary young tour guide!'",
      "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
      "metadata": {
        "touristQuestion": "Tourist: 'Thank you for being such an extraordinary young tour guide!'",
        "guideAnswer": "You are very welcome! Welcome to Vietnam, the land of wonders!"
      }
    }
  ],
  "reading_detective": [
    {
      "questionId": "g5_rd_01",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Thang Long Imperial Citadel in Hanoi was the political center of Vietnam for eight centuries. Emperor Ly Thai To moved the capital here in 1010 after seeing a golden dragon rising into the sky.\nQuestion: In what year was the capital moved to Thang Long?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Năm nào Lý Thái Tổ dời đô về Thăng Long?",
      "answerOptions": [
        "1010",
        "1210",
        "1910"
      ],
      "correctAnswer": "1010",
      "explanation": "Evidence verified! The text confirms: '1010'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '1010'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Thang Long Imperial Citadel in Hanoi was the political center of Vietnam for eight centuries. Emperor Ly Thai To moved the capital here in 1010 after seeing a golden dragon rising into the sky.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Thang Long Imperial Citadel in Hanoi was the political center of Vietnam for eight centuries. Emperor Ly Thai To moved the capital here in 1010 after seeing a golden dragon rising into the sky.\nQuestion: In what year was the capital moved to Thang Long?",
        "answer": "1010"
      }
    },
    {
      "questionId": "g5_rd_02",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Mount Fansipan, located in the Hoang Lien Son range, stands at 3,143 meters above sea level. It is lovingly nicknamed the 'Roof of Indochina' because it is the highest peak in Vietnam, Laos, and Cambodia.\nQuestion: What is Fansipan's nickname?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Biệt danh của đỉnh Fansipan là gì?",
      "answerOptions": [
        "Roof of Indochina",
        "Pearl of the Sea",
        "King of Caves"
      ],
      "correctAnswer": "Roof of Indochina",
      "explanation": "Evidence verified! The text confirms: 'Roof of Indochina'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Roof of Indochina'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Mount Fansipan, located in the Hoang Lien Son range, stands at 3,143 meters above sea level. It is lovingly nicknamed the 'Roof of Indochina' because it is the highest peak in Vietnam, Laos, and Cambodia.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Mount Fansipan, located in the Hoang Lien Son range, stands at 3,143 meters above sea level. It is lovingly nicknamed the 'Roof of Indochina' because it is the highest peak in Vietnam, Laos, and Cambodia.\nQuestion: What is Fansipan's nickname?",
        "answer": "Roof of Indochina"
      }
    },
    {
      "questionId": "g5_rd_03",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Ha Long Bay has nearly two thousand limestone islets scattered across emerald waters. In 1994, UNESCO officially recognized Ha Long Bay as a World Natural Heritage Site for its outstanding geological value.\nQuestion: What year was Ha Long Bay recognized by UNESCO?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Năm nào Vịnh Hạ Long được UNESCO công nhận?",
      "answerOptions": [
        "1994",
        "2004",
        "1984"
      ],
      "correctAnswer": "1994",
      "explanation": "Evidence verified! The text confirms: '1994'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '1994'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Ha Long Bay has nearly two thousand limestone islets scattered across emerald waters. In 1994, UNESCO officially recognized Ha Long Bay as a World Natural Heritage Site for its outstanding geological value.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Ha Long Bay has nearly two thousand limestone islets scattered across emerald waters. In 1994, UNESCO officially recognized Ha Long Bay as a World Natural Heritage Site for its outstanding geological value.\nQuestion: What year was Ha Long Bay recognized by UNESCO?",
        "answer": "1994"
      }
    },
    {
      "questionId": "g5_rd_04",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Hoi An was a major Southeast Asian trading port from the 15th to the 19th century. Merchants from Japan, China, Portugal, and the Netherlands sailed here to trade spices, ceramics, and silk.\nQuestion: What goods were traded in ancient Hoi An?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Hàng hóa nào được giao thương ở Hội An cổ?",
      "answerOptions": [
        "Spices, ceramics, and silk",
        "Modern cars and planes",
        "Computers and phones"
      ],
      "correctAnswer": "Spices, ceramics, and silk",
      "explanation": "Evidence verified! The text confirms: 'Spices, ceramics, and silk'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Spices, ceramics, and silk'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Hoi An was a major Southeast Asian trading port from the 15th to the 19th century. Merchants from Japan, China, Portugal, and the Netherlands sailed here to trade spices, ceramics, and silk.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Hoi An was a major Southeast Asian trading port from the 15th to the 19th century. Merchants from Japan, China, Portugal, and the Netherlands sailed here to trade spices, ceramics, and silk.\nQuestion: What goods were traded in ancient Hoi An?",
        "answer": "Spices, ceramics, and silk"
      }
    },
    {
      "questionId": "g5_rd_05",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: The Perfume River gently meanders through the city of Hue. In autumn, flowers from surrounding orchards fall into the river water, giving the stream its famous poetic fragrance.\nQuestion: Why is the river named Perfume River?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Tại sao dòng sông lại có tên là sông Hương?",
      "answerOptions": [
        "Flowers fall into the water giving it a sweet fragrance",
        "People pour perfume into it",
        "It is near a perfume shop"
      ],
      "correctAnswer": "Flowers fall into the water giving it a sweet fragrance",
      "explanation": "Evidence verified! The text confirms: 'Flowers fall into the water giving it a sweet fragrance'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Flowers fall into the water giving it a sweet fragrance'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The Perfume River gently meanders through the city of Hue. In autumn, flowers from surrounding orchards fall into the river water, giving the stream its famous poetic fragrance.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The Perfume River gently meanders through the city of Hue. In autumn, flowers from surrounding orchards fall into the river water, giving the stream its famous poetic fragrance.\nQuestion: Why is the river named Perfume River?",
        "answer": "Flowers fall into the water giving it a sweet fragrance"
      }
    },
    {
      "questionId": "g5_rd_06",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Ben Thanh Market was constructed in 1912 in Ho Chi Minh City. Its iconic south gate with a large three-sided clock tower is recognized as one of the most famous city symbols.\nQuestion: When was Ben Thanh Market constructed?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Chợ Bến Thành được xây dựng vào năm nào?",
      "answerOptions": [
        "1912",
        "1812",
        "2012"
      ],
      "correctAnswer": "1912",
      "explanation": "Evidence verified! The text confirms: '1912'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '1912'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Ben Thanh Market was constructed in 1912 in Ho Chi Minh City. Its iconic south gate with a large three-sided clock tower is recognized as one of the most famous city symbols.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Ben Thanh Market was constructed in 1912 in Ho Chi Minh City. Its iconic south gate with a large three-sided clock tower is recognized as one of the most famous city symbols.\nQuestion: When was Ben Thanh Market constructed?",
        "answer": "1912"
      }
    },
    {
      "questionId": "g5_rd_07",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Da Nang Golden Bridge is a 150-meter-long pedestrian walkway built 1,400 meters up on the Ba Na Hills. Two colossal stone hands lift the golden path through the mountain mist.\nQuestion: How long is the Golden Bridge walkway?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Lối đi bộ Cầu Vàng dài bao nhiêu mét?",
      "answerOptions": [
        "150 meters",
        "500 meters",
        "1,000 meters"
      ],
      "correctAnswer": "150 meters",
      "explanation": "Evidence verified! The text confirms: '150 meters'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '150 meters'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Da Nang Golden Bridge is a 150-meter-long pedestrian walkway built 1,400 meters up on the Ba Na Hills. Two colossal stone hands lift the golden path through the mountain mist.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Da Nang Golden Bridge is a 150-meter-long pedestrian walkway built 1,400 meters up on the Ba Na Hills. Two colossal stone hands lift the golden path through the mountain mist.\nQuestion: How long is the Golden Bridge walkway?",
        "answer": "150 meters"
      }
    },
    {
      "questionId": "g5_rd_08",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: The Mekong River originates in the Tibetan Plateau and flows through six countries before dividing into nine branches in southern Vietnam, nourishing the fertile delta.\nQuestion: How many branches does the Mekong divide into in Vietnam?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Sông Mê Kông chia thành mấy nhánh ở Nam Bộ?",
      "answerOptions": [
        "Nine branches",
        "Two branches",
        "Five branches"
      ],
      "correctAnswer": "Nine branches",
      "explanation": "Evidence verified! The text confirms: 'Nine branches'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Nine branches'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The Mekong River originates in the Tibetan Plateau and flows through six countries before dividing into nine branches in southern Vietnam, nourishing the fertile delta.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The Mekong River originates in the Tibetan Plateau and flows through six countries before dividing into nine branches in southern Vietnam, nourishing the fertile delta.\nQuestion: How many branches does the Mekong divide into in Vietnam?",
        "answer": "Nine branches"
      }
    },
    {
      "questionId": "g5_rd_09",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: One Pillar Pagoda was designed by King Ly Thai Tong in 1049. The wooden temple stands on a single stone pillar rising from a lotus pond, symbolizing purity and enlightenment.\nQuestion: What flower inspired the design of the One Pillar Pagoda?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Loài hoa nào truyền cảm hứng cho kiến trúc Chùa Một Cột?",
      "answerOptions": [
        "Lotus flower",
        "Rose",
        "Sunflower"
      ],
      "correctAnswer": "Lotus flower",
      "explanation": "Evidence verified! The text confirms: 'Lotus flower'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Lotus flower'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: One Pillar Pagoda was designed by King Ly Thai Tong in 1049. The wooden temple stands on a single stone pillar rising from a lotus pond, symbolizing purity and enlightenment.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: One Pillar Pagoda was designed by King Ly Thai Tong in 1049. The wooden temple stands on a single stone pillar rising from a lotus pond, symbolizing purity and enlightenment.\nQuestion: What flower inspired the design of the One Pillar Pagoda?",
        "answer": "Lotus flower"
      }
    },
    {
      "questionId": "g5_rd_10",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "easy",
      "prompt": "Passage: Traditional water puppetry was invented by rice farmers in the Red River Delta around the 11th century during seasonal flood times to celebrate harvest festivals.\nQuestion: Where did water puppetry originate?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Nghệ thuật múa rối nước bắt nguồn từ đâu?",
      "answerOptions": [
        "Red River Delta",
        "Mekong Delta",
        "Central Highlands"
      ],
      "correctAnswer": "Red River Delta",
      "explanation": "Evidence verified! The text confirms: 'Red River Delta'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Red River Delta'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Traditional water puppetry was invented by rice farmers in the Red River Delta around the 11th century during seasonal flood times to celebrate harvest festivals.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Traditional water puppetry was invented by rice farmers in the Red River Delta around the 11th century during seasonal flood times to celebrate harvest festivals.\nQuestion: Where did water puppetry originate?",
        "answer": "Red River Delta"
      }
    },
    {
      "questionId": "g5_rd_11",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Son Doong Cave in Quang Binh is so vast that it possesses its own localized weather system, clouds, and an underground rainforest called the 'Garden of Edam' nourished by skylights.\nQuestion: What special feature exists inside Son Doong Cave?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Đặc điểm kỳ vĩ nào tồn tại bên trong hang Sơn Đoòng?",
      "answerOptions": [
        "Its own localized weather and rainforest",
        "A large commercial airport",
        "A modern railway station"
      ],
      "correctAnswer": "Its own localized weather and rainforest",
      "explanation": "Evidence verified! The text confirms: 'Its own localized weather and rainforest'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Its own localized weather and rainforest'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Son Doong Cave in Quang Binh is so vast that it possesses its own localized weather system, clouds, and an underground rainforest called the 'Garden of Edam' nourished by skylights.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Son Doong Cave in Quang Binh is so vast that it possesses its own localized weather system, clouds, and an underground rainforest called the 'Garden of Edam' nourished by skylights.\nQuestion: What special feature exists inside Son Doong Cave?",
        "answer": "Its own localized weather and rainforest"
      }
    },
    {
      "questionId": "g5_rd_12",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: The Imperial Citadel of Hue was built according to ancient geomancy and the natural elements of the Perfume River and Mount Ngu Binh, serving as the political capital for 143 years.\nQuestion: How many years did Hue serve as the royal capital?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Huế từng là kinh đô trong bao nhiêu năm?",
      "answerOptions": [
        "143 years",
        "50 years",
        "300 years"
      ],
      "correctAnswer": "143 years",
      "explanation": "Evidence verified! The text confirms: '143 years'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '143 years'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The Imperial Citadel of Hue was built according to ancient geomancy and the natural elements of the Perfume River and Mount Ngu Binh, serving as the political capital for 143 years.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The Imperial Citadel of Hue was built according to ancient geomancy and the natural elements of the Perfume River and Mount Ngu Binh, serving as the political capital for 143 years.\nQuestion: How many years did Hue serve as the royal capital?",
        "answer": "143 years"
      }
    },
    {
      "questionId": "g5_rd_13",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Bat Trang ceramic village has maintained pottery kilns along the Red River since the Ly Dynasty. Artisans use white clay and traditional glaze recipes passed down through familial generations.\nQuestion: Along which river is Bat Trang village located?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Làng gốm Bát Tràng tọa lạc bên bờ dòng sông nào?",
      "answerOptions": [
        "Red River",
        "Perfume River",
        "Han River"
      ],
      "correctAnswer": "Red River",
      "explanation": "Evidence verified! The text confirms: 'Red River'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Red River'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Bat Trang ceramic village has maintained pottery kilns along the Red River since the Ly Dynasty. Artisans use white clay and traditional glaze recipes passed down through familial generations.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Bat Trang ceramic village has maintained pottery kilns along the Red River since the Ly Dynasty. Artisans use white clay and traditional glaze recipes passed down through familial generations.\nQuestion: Along which river is Bat Trang village located?",
        "answer": "Red River"
      }
    },
    {
      "questionId": "g5_rd_14",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Cu Chi Tunnels were hand-dug with simple picks and baskets. The multi-tiered network contained secret kitchens with smoke-diffusing chimneys called Hoang Cam stoves.\nQuestion: What was the purpose of Hoang Cam stoves?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Bếp Hoàng Cầm có tác dụng đặc biệt gì?",
      "answerOptions": [
        "Diffusing smoke underground to avoid detection",
        "Baking sweet French pastries",
        "Warming swimming pools"
      ],
      "correctAnswer": "Diffusing smoke underground to avoid detection",
      "explanation": "Evidence verified! The text confirms: 'Diffusing smoke underground to avoid detection'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Diffusing smoke underground to avoid detection'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Cu Chi Tunnels were hand-dug with simple picks and baskets. The multi-tiered network contained secret kitchens with smoke-diffusing chimneys called Hoang Cam stoves.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Cu Chi Tunnels were hand-dug with simple picks and baskets. The multi-tiered network contained secret kitchens with smoke-diffusing chimneys called Hoang Cam stoves.\nQuestion: What was the purpose of Hoang Cam stoves?",
        "answer": "Diffusing smoke underground to avoid detection"
      }
    },
    {
      "questionId": "g5_rd_15",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Sapa's picturesque rice terraces in Muong Hoa Valley reflect green in spring and radiant gold during the autumn harvest season, attracting photographers from every continent.\nQuestion: When do the terraces turn radiant gold?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Ruộng bậc thang Mường Hoa chuyển sang màu vàng óng vào mùa nào?",
      "answerOptions": [
        "During the autumn harvest",
        "In the winter freeze",
        "In the early spring"
      ],
      "correctAnswer": "During the autumn harvest",
      "explanation": "Evidence verified! The text confirms: 'During the autumn harvest'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'During the autumn harvest'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Sapa's picturesque rice terraces in Muong Hoa Valley reflect green in spring and radiant gold during the autumn harvest season, attracting photographers from every continent.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Sapa's picturesque rice terraces in Muong Hoa Valley reflect green in spring and radiant gold during the autumn harvest season, attracting photographers from every continent.\nQuestion: When do the terraces turn radiant gold?",
        "answer": "During the autumn harvest"
      }
    },
    {
      "questionId": "g5_rd_16",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Da Lat was established as a highland resort in 1893 by Dr. Alexandre Yersin. Its cool elevation at 1,500 meters earned it the affectionate title 'The City of Eternal Spring'.\nQuestion: Who founded Da Lat as a mountain station in 1893?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Ai là người khám phá và đề xuất xây dựng Đà Lạt năm 1893?",
      "answerOptions": [
        "Dr. Alexandre Yersin",
        "King Le Loi",
        "Emperor Bao Dai"
      ],
      "correctAnswer": "Dr. Alexandre Yersin",
      "explanation": "Evidence verified! The text confirms: 'Dr. Alexandre Yersin'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Dr. Alexandre Yersin'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Da Lat was established as a highland resort in 1893 by Dr. Alexandre Yersin. Its cool elevation at 1,500 meters earned it the affectionate title 'The City of Eternal Spring'.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Da Lat was established as a highland resort in 1893 by Dr. Alexandre Yersin. Its cool elevation at 1,500 meters earned it the affectionate title 'The City of Eternal Spring'.\nQuestion: Who founded Da Lat as a mountain station in 1893?",
        "answer": "Dr. Alexandre Yersin"
      }
    },
    {
      "questionId": "g5_rd_17",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: The Dong Son Bronze Drum was crafted during the Bronze Age, adorned with geometric rings, flying hornbill birds, deer, and scenes of community boat racing.\nQuestion: Which ancient age produced the Dong Son bronze drums?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Trống đồng Đông Sơn được chế tác trong thời kỳ nào?",
      "answerOptions": [
        "The Bronze Age",
        "The Plastic Age",
        "The Space Age"
      ],
      "correctAnswer": "The Bronze Age",
      "explanation": "Evidence verified! The text confirms: 'The Bronze Age'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'The Bronze Age'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The Dong Son Bronze Drum was crafted during the Bronze Age, adorned with geometric rings, flying hornbill birds, deer, and scenes of community boat racing.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The Dong Son Bronze Drum was crafted during the Bronze Age, adorned with geometric rings, flying hornbill birds, deer, and scenes of community boat racing.\nQuestion: Which ancient age produced the Dong Son bronze drums?",
        "answer": "The Bronze Age"
      }
    },
    {
      "questionId": "g5_rd_18",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Phong Nha Cave contains the longest subterranean river in the world, with spectacular dry and wet chambers illuminated by natural mineral hues.\nQuestion: What remarkable world record is associated with Phong Nha?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Kỷ lục thế giới nào gắn liền với động Phong Nha?",
      "answerOptions": [
        "Longest subterranean river",
        "Highest waterfall",
        "Deepest ocean trench"
      ],
      "correctAnswer": "Longest subterranean river",
      "explanation": "Evidence verified! The text confirms: 'Longest subterranean river'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Longest subterranean river'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Phong Nha Cave contains the longest subterranean river in the world, with spectacular dry and wet chambers illuminated by natural mineral hues.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Phong Nha Cave contains the longest subterranean river in the world, with spectacular dry and wet chambers illuminated by natural mineral hues.\nQuestion: What remarkable world record is associated with Phong Nha?",
        "answer": "Longest subterranean river"
      }
    },
    {
      "questionId": "g5_rd_19",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Ban Gioc Waterfall on the Quay Son River has three tiers separated by limestone boulders. During sunny mornings, mists create shimmering rainbows over the cascading waters.\nQuestion: On which river is Ban Gioc Waterfall situated?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Thác Bản Giốc nằm trên dòng sông nào?",
      "answerOptions": [
        "Quay Son River",
        "Red River",
        "Mekong River"
      ],
      "correctAnswer": "Quay Son River",
      "explanation": "Evidence verified! The text confirms: 'Quay Son River'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Quay Son River'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Ban Gioc Waterfall on the Quay Son River has three tiers separated by limestone boulders. During sunny mornings, mists create shimmering rainbows over the cascading waters.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Ban Gioc Waterfall on the Quay Son River has three tiers separated by limestone boulders. During sunny mornings, mists create shimmering rainbows over the cascading waters.\nQuestion: On which river is Ban Gioc Waterfall situated?",
        "answer": "Quay Son River"
      }
    },
    {
      "questionId": "g5_rd_20",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "medium",
      "prompt": "Passage: Trang An Eco-tourism Complex in Ninh Binh features vertical karst towers rising from rice paddies, traversed by rowing sampans guided by local village women.\nQuestion: How do visitors journey through the Trang An water caves?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Du khách di chuyển tham quan các hang nước Tràng An bằng phương tiện gì?",
      "answerOptions": [
        "By rowing sampans",
        "By high-speed motorboats",
        "By helicopters"
      ],
      "correctAnswer": "By rowing sampans",
      "explanation": "Evidence verified! The text confirms: 'By rowing sampans'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'By rowing sampans'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Trang An Eco-tourism Complex in Ninh Binh features vertical karst towers rising from rice paddies, traversed by rowing sampans guided by local village women.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Trang An Eco-tourism Complex in Ninh Binh features vertical karst towers rising from rice paddies, traversed by rowing sampans guided by local village women.\nQuestion: How do visitors journey through the Trang An water caves?",
        "answer": "By rowing sampans"
      }
    },
    {
      "questionId": "g5_rd_21",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: The UNESCO-recognized Space of Gong Culture spans five Central Highlands provinces: Kon Tum, Gia Lai, Dak Lak, Dak Nong, and Lam Dong. Gongs serve as sacred bridges between humans and deities.\nQuestion: How many Central Highlands provinces comprise the Gong Culture space?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Không gian văn hóa Cồng chiêng trải rộng trên bao nhiêu tỉnh Tây Nguyên?",
      "answerOptions": [
        "Five provinces",
        "Two provinces",
        "Ten provinces"
      ],
      "correctAnswer": "Five provinces",
      "explanation": "Evidence verified! The text confirms: 'Five provinces'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Five provinces'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The UNESCO-recognized Space of Gong Culture spans five Central Highlands provinces: Kon Tum, Gia Lai, Dak Lak, Dak Nong, and Lam Dong. Gongs serve as sacred bridges between humans and deities.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The UNESCO-recognized Space of Gong Culture spans five Central Highlands provinces: Kon Tum, Gia Lai, Dak Lak, Dak Nong, and Lam Dong. Gongs serve as sacred bridges between humans and deities.\nQuestion: How many Central Highlands provinces comprise the Gong Culture space?",
        "answer": "Five provinces"
      }
    },
    {
      "questionId": "g5_rd_22",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: Ca Mau Cape National Park is the only place on Vietnam's mainland where visitors can witness the sun rising from the East Sea and setting into the Gulf of Thailand on the same day.\nQuestion: What unique phenomenon can be observed at Ca Mau Cape?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Hiện tượng độc đáo nào có thể quan sát được tại Mũi Cà Mau?",
      "answerOptions": [
        "Watching sunrise from East Sea and sunset into Gulf of Thailand",
        "Snow falling in summer",
        "Seeing northern lights"
      ],
      "correctAnswer": "Watching sunrise from East Sea and sunset into Gulf of Thailand",
      "explanation": "Evidence verified! The text confirms: 'Watching sunrise from East Sea and sunset into Gulf of Thailand'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Watching sunrise from East Sea and sunset into Gulf of Thailand'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Ca Mau Cape National Park is the only place on Vietnam's mainland where visitors can witness the sun rising from the East Sea and setting into the Gulf of Thailand on the same day.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Ca Mau Cape National Park is the only place on Vietnam's mainland where visitors can witness the sun rising from the East Sea and setting into the Gulf of Thailand on the same day.\nQuestion: What unique phenomenon can be observed at Ca Mau Cape?",
        "answer": "Watching sunrise from East Sea and sunset into Gulf of Thailand"
      }
    },
    {
      "questionId": "g5_rd_23",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: The ancient Cham temples of My Son were built between the 4th and 13th centuries, dedicated to Shiva. The distinctive fired red bricks were mortared with tree resin extract without mortar joints.\nQuestion: What natural material bonded the bricks of My Son?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Chất kết dính tự nhiên nào gắn kết các viên gạch ở Mỹ Sơn?",
      "answerOptions": [
        "Tree resin extract",
        "Modern cement",
        "Animal glue"
      ],
      "correctAnswer": "Tree resin extract",
      "explanation": "Evidence verified! The text confirms: 'Tree resin extract'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Tree resin extract'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The ancient Cham temples of My Son were built between the 4th and 13th centuries, dedicated to Shiva. The distinctive fired red bricks were mortared with tree resin extract without mortar joints.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The ancient Cham temples of My Son were built between the 4th and 13th centuries, dedicated to Shiva. The distinctive fired red bricks were mortared with tree resin extract without mortar joints.\nQuestion: What natural material bonded the bricks of My Son?",
        "answer": "Tree resin extract"
      }
    },
    {
      "questionId": "g5_rd_24",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: Dong Van Karst Plateau in Ha Giang contains rock layers dating back 540 million years, with fossil traces from ancient oceans that once submerged the northern mountains.\nQuestion: How far back do the geological rock strata of Dong Van date?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Các tầng địa chất ở Đồng Văn có niên đại bao nhiêu năm?",
      "answerOptions": [
        "540 million years",
        "1 million years",
        "1,000 years"
      ],
      "correctAnswer": "540 million years",
      "explanation": "Evidence verified! The text confirms: '540 million years'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '540 million years'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Dong Van Karst Plateau in Ha Giang contains rock layers dating back 540 million years, with fossil traces from ancient oceans that once submerged the northern mountains.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Dong Van Karst Plateau in Ha Giang contains rock layers dating back 540 million years, with fossil traces from ancient oceans that once submerged the northern mountains.\nQuestion: How far back do the geological rock strata of Dong Van date?",
        "answer": "540 million years"
      }
    },
    {
      "questionId": "g5_rd_25",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: Van Phuc silk village has woven high-grade silk cloth known as 'Lua Van' for more than a millennium, praised for feeling cool in summer and cozy in winter.\nQuestion: What unique quality is characteristic of 'Lua Van' silk?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Đặc tính độc đáo nào làm nên danh tiếng của 'Lụa Vạn'?",
      "answerOptions": [
        "Cool in summer and cozy in winter",
        "Heavier than wool",
        "Waterproof like rubber"
      ],
      "correctAnswer": "Cool in summer and cozy in winter",
      "explanation": "Evidence verified! The text confirms: 'Cool in summer and cozy in winter'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Cool in summer and cozy in winter'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Van Phuc silk village has woven high-grade silk cloth known as 'Lua Van' for more than a millennium, praised for feeling cool in summer and cozy in winter.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Van Phuc silk village has woven high-grade silk cloth known as 'Lua Van' for more than a millennium, praised for feeling cool in summer and cozy in winter.\nQuestion: What unique quality is characteristic of 'Lua Van' silk?",
        "answer": "Cool in summer and cozy in winter"
      }
    },
    {
      "questionId": "g5_rd_26",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: Can Gio Mangrove Forest was designated as Vietnam's first UNESCO Biosphere Reserve in 2000, home to over 200 animal species and lush Rhizophora mangrove trees.\nQuestion: When was Can Gio designated as a UNESCO Biosphere Reserve?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Rừng ngập mặn Cần Giờ được UNESCO công nhận vào năm nào?",
      "answerOptions": [
        "In the year 2000",
        "In the year 1980",
        "In the year 2020"
      ],
      "correctAnswer": "In the year 2000",
      "explanation": "Evidence verified! The text confirms: 'In the year 2000'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'In the year 2000'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Can Gio Mangrove Forest was designated as Vietnam's first UNESCO Biosphere Reserve in 2000, home to over 200 animal species and lush Rhizophora mangrove trees.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Can Gio Mangrove Forest was designated as Vietnam's first UNESCO Biosphere Reserve in 2000, home to over 200 animal species and lush Rhizophora mangrove trees.\nQuestion: When was Can Gio designated as a UNESCO Biosphere Reserve?",
        "answer": "In the year 2000"
      }
    },
    {
      "questionId": "g5_rd_27",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: The Tu San Canyon on the Nho Que River was carved over millions of years, featuring vertical cliff faces rising up to 800 meters, making it Southeast Asia's most spectacular chasm.\nQuestion: What river flows directly through the base of Tu San Canyon?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Dòng sông nào xanh ngắt chảy qua dưới đáy hẻm Tu Sản?",
      "answerOptions": [
        "Nho Que River",
        "Da River",
        "Ma River"
      ],
      "correctAnswer": "Nho Que River",
      "explanation": "Evidence verified! The text confirms: 'Nho Que River'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Nho Que River'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The Tu San Canyon on the Nho Que River was carved over millions of years, featuring vertical cliff faces rising up to 800 meters, making it Southeast Asia's most spectacular chasm.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The Tu San Canyon on the Nho Que River was carved over millions of years, featuring vertical cliff faces rising up to 800 meters, making it Southeast Asia's most spectacular chasm.\nQuestion: What river flows directly through the base of Tu San Canyon?",
        "answer": "Nho Que River"
      }
    },
    {
      "questionId": "g5_rd_28",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: The ancient village of Duong Lam in Hanoi preserves nearly a thousand traditional houses built of laterite (rock honeycomb clay), maintaining five historic village gates.\nQuestion: What special building material characterizes the homes in Duong Lam?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Vật liệu xây dựng ong tổ ong đặc trưng của làng cổ Đường Lâm là gì?",
      "answerOptions": [
        "Laterite honeycomb stone (Đá ong)",
        "White marble",
        "Glass and steel"
      ],
      "correctAnswer": "Laterite honeycomb stone (Đá ong)",
      "explanation": "Evidence verified! The text confirms: 'Laterite honeycomb stone (Đá ong)'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Laterite honeycomb stone (Đá ong)'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The ancient village of Duong Lam in Hanoi preserves nearly a thousand traditional houses built of laterite (rock honeycomb clay), maintaining five historic village gates.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The ancient village of Duong Lam in Hanoi preserves nearly a thousand traditional houses built of laterite (rock honeycomb clay), maintaining five historic village gates.\nQuestion: What special building material characterizes the homes in Duong Lam?",
        "answer": "Laterite honeycomb stone (Đá ong)"
      }
    },
    {
      "questionId": "g5_rd_29",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: Phu Quoc Island in Kien Giang province is famous for producing fish sauce aged for twelve months in giant wooden barrels made of tropical hardwood trees like Ca Mit and Bo De.\nQuestion: How long is traditional Phu Quoc fish sauce aged in barrels?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Nước mắm truyền thống Phú Quốc được ủ chượp trong thùng gỗ bao lâu?",
      "answerOptions": [
        "Twelve months",
        "Two weeks",
        "Five years"
      ],
      "correctAnswer": "Twelve months",
      "explanation": "Evidence verified! The text confirms: 'Twelve months'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: 'Twelve months'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: Phu Quoc Island in Kien Giang province is famous for producing fish sauce aged for twelve months in giant wooden barrels made of tropical hardwood trees like Ca Mit and Bo De.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: Phu Quoc Island in Kien Giang province is famous for producing fish sauce aged for twelve months in giant wooden barrels made of tropical hardwood trees like Ca Mit and Bo De.\nQuestion: How long is traditional Phu Quoc fish sauce aged in barrels?",
        "answer": "Twelve months"
      }
    },
    {
      "questionId": "g5_rd_30",
      "grade": 5,
      "gameType": "reading_detective",
      "topic": "Reading Comprehension & Factual Evidence",
      "difficulty": "challenge",
      "prompt": "Passage: The historic Ho Chi Minh Trail through the Truong Son mountains was an engineering feat spanning 20,000 kilometers of roads, trails, and bridges built to support the struggle for national reunification.\nQuestion: How extensive was the network of the Ho Chi Minh Trail?",
      "promptVi": "Đọc đoạn văn và tìm chứng cứ: Mạng lưới đường Trường Sơn lịch sử dài bao nhiêu km?",
      "answerOptions": [
        "20,000 kilometers",
        "5,000 kilometers",
        "50,000 kilometers"
      ],
      "correctAnswer": "20,000 kilometers",
      "explanation": "Evidence verified! The text confirms: '20,000 kilometers'.",
      "explanationVi": "Chứng cứ xác thực! Đoạn văn xác nhận: '20,000 kilometers'.",
      "imageAsset": "📖",
      "audioPrompt": "Passage: The historic Ho Chi Minh Trail through the Truong Son mountains was an engineering feat spanning 20,000 kilometers of roads, trails, and bridges built to support the struggle for national reunification.\n",
      "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
      "metadata": {
        "text": "Passage: The historic Ho Chi Minh Trail through the Truong Son mountains was an engineering feat spanning 20,000 kilometers of roads, trails, and bridges built to support the struggle for national reunification.\nQuestion: How extensive was the network of the Ho Chi Minh Trail?",
        "answer": "20,000 kilometers"
      }
    }
  ],
  "speaking_mission": [
    {
      "questionId": "g5_spk_01",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Hello world, I love Vietnam!'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Hello world, I love Vietnam!' (Chào thế giới, tôi yêu Việt Nam!)",
      "answerOptions": [
        "Hello world, I love Vietnam!",
        "Hello world, I hate Vietnam!",
        "Hi earth, I leave Vietnam!"
      ],
      "correctAnswer": "Hello world, I love Vietnam!",
      "explanation": "Fluent pronunciation! 'Hello world, I love Vietnam!' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Hello world, I love Vietnam!' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Hello world, I love Vietnam!",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Hello world, I love Vietnam!",
        "translationVi": "Chào thế giới, tôi yêu Việt Nam!"
      }
    },
    {
      "questionId": "g5_spk_02",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Welcome to my beautiful school.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Welcome to my beautiful school.' (Chào mừng bạn đến với ngôi trường tươi đẹp của tôi.)",
      "answerOptions": [
        "Welcome to my beautiful school.",
        "Welcome to my big house.",
        "Welcome to my classroom."
      ],
      "correctAnswer": "Welcome to my beautiful school.",
      "explanation": "Fluent pronunciation! 'Welcome to my beautiful school.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Welcome to my beautiful school.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Welcome to my beautiful school.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Welcome to my beautiful school.",
        "translationVi": "Chào mừng bạn đến với ngôi trường tươi đẹp của tôi."
      }
    },
    {
      "questionId": "g5_spk_03",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'I can speak English with confidence.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'I can speak English with confidence.' (Tôi có thể nói tiếng Anh đầy tự tin.)",
      "answerOptions": [
        "I can speak English with confidence.",
        "I cannot speak English.",
        "I speak Vietnamese only."
      ],
      "correctAnswer": "I can speak English with confidence.",
      "explanation": "Fluent pronunciation! 'I can speak English with confidence.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'I can speak English with confidence.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "I can speak English with confidence.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "I can speak English with confidence.",
        "translationVi": "Tôi có thể nói tiếng Anh đầy tự tin."
      }
    },
    {
      "questionId": "g5_spk_04",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'We are proud of our Vietnamese heritage.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'We are proud of our Vietnamese heritage.' (Chúng tôi tự hào về di sản văn hóa Việt Nam.)",
      "answerOptions": [
        "We are proud of our Vietnamese heritage.",
        "We are tired of our heritage.",
        "We like our heritage."
      ],
      "correctAnswer": "We are proud of our Vietnamese heritage.",
      "explanation": "Fluent pronunciation! 'We are proud of our Vietnamese heritage.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'We are proud of our Vietnamese heritage.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "We are proud of our Vietnamese heritage.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "We are proud of our Vietnamese heritage.",
        "translationVi": "Chúng tôi tự hào về di sản văn hóa Việt Nam."
      }
    },
    {
      "questionId": "g5_spk_05",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Ha Long Bay is a wonder of nature.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Ha Long Bay is a wonder of nature.' (Vịnh Hạ Long là một kỳ quan thiên nhiên.)",
      "answerOptions": [
        "Ha Long Bay is a wonder of nature.",
        "Ha Long Bay is a small lake.",
        "Ha Long Bay is in the south."
      ],
      "correctAnswer": "Ha Long Bay is a wonder of nature.",
      "explanation": "Fluent pronunciation! 'Ha Long Bay is a wonder of nature.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Ha Long Bay is a wonder of nature.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Ha Long Bay is a wonder of nature.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Ha Long Bay is a wonder of nature.",
        "translationVi": "Vịnh Hạ Long là một kỳ quan thiên nhiên."
      }
    },
    {
      "questionId": "g5_spk_06",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Hanoi is the thousand-year-old capital.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Hanoi is the thousand-year-old capital.' (Hà Nội là thủ đô ngàn năm văn hiến.)",
      "answerOptions": [
        "Hanoi is the thousand-year-old capital.",
        "Hanoi is a new town.",
        "Hanoi has no history."
      ],
      "correctAnswer": "Hanoi is the thousand-year-old capital.",
      "explanation": "Fluent pronunciation! 'Hanoi is the thousand-year-old capital.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Hanoi is the thousand-year-old capital.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Hanoi is the thousand-year-old capital.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Hanoi is the thousand-year-old capital.",
        "translationVi": "Hà Nội là thủ đô ngàn năm văn hiến."
      }
    },
    {
      "questionId": "g5_spk_07",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Hoi An shines with colourful lanterns.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Hoi An shines with colourful lanterns.' (Hội An rực rỡ với những chiếc đèn lồng sắc màu.)",
      "answerOptions": [
        "Hoi An shines with colourful lanterns.",
        "Hoi An has no lanterns.",
        "Hoi An is dark."
      ],
      "correctAnswer": "Hoi An shines with colourful lanterns.",
      "explanation": "Fluent pronunciation! 'Hoi An shines with colourful lanterns.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Hoi An shines with colourful lanterns.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Hoi An shines with colourful lanterns.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Hoi An shines with colourful lanterns.",
        "translationVi": "Hội An rực rỡ với những chiếc đèn lồng sắc màu."
      }
    },
    {
      "questionId": "g5_spk_08",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Vietnamese food is delicious and healthy.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Vietnamese food is delicious and healthy.' (Ẩm thực Việt Nam thơm ngon và bổ dưỡng.)",
      "answerOptions": [
        "Vietnamese food is delicious and healthy.",
        "Vietnamese food is very spicy.",
        "Vietnamese food is cold."
      ],
      "correctAnswer": "Vietnamese food is delicious and healthy.",
      "explanation": "Fluent pronunciation! 'Vietnamese food is delicious and healthy.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Vietnamese food is delicious and healthy.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Vietnamese food is delicious and healthy.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Vietnamese food is delicious and healthy.",
        "translationVi": "Ẩm thực Việt Nam thơm ngon và bổ dưỡng."
      }
    },
    {
      "questionId": "g5_spk_09",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'I practice speaking English every day.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'I practice speaking English every day.' (Tôi luyện nói tiếng Anh mỗi ngày.)",
      "answerOptions": [
        "I practice speaking English every day.",
        "I rarely speak English.",
        "I speak English once a year."
      ],
      "correctAnswer": "I practice speaking English every day.",
      "explanation": "Fluent pronunciation! 'I practice speaking English every day.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'I practice speaking English every day.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "I practice speaking English every day.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "I practice speaking English every day.",
        "translationVi": "Tôi luyện nói tiếng Anh mỗi ngày."
      }
    },
    {
      "questionId": "g5_spk_10",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "easy",
      "prompt": "Listen and practice speaking this mission sentence:\n'Together we explore our amazing homeland.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Together we explore our amazing homeland.' (Chúng ta cùng nhau khám phá quê hương tươi đẹp.)",
      "answerOptions": [
        "Together we explore our amazing homeland.",
        "Together we stay indoors.",
        "We do not travel."
      ],
      "correctAnswer": "Together we explore our amazing homeland.",
      "explanation": "Fluent pronunciation! 'Together we explore our amazing homeland.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Together we explore our amazing homeland.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Together we explore our amazing homeland.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Together we explore our amazing homeland.",
        "translationVi": "Chúng ta cùng nhau khám phá quê hương tươi đẹp."
      }
    },
    {
      "questionId": "g5_spk_11",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'VietDiscovery empowers young Vietnamese learners to achieve global success.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'VietDiscovery empowers young Vietnamese learners to achieve global success.' (VietDiscovery tiếp sức cho các bạn nhỏ vươn tầm quốc tế.)",
      "answerOptions": [
        "VietDiscovery empowers young learners.",
        "VietDiscovery is a simple game.",
        "VietDiscovery teaches math."
      ],
      "correctAnswer": "VietDiscovery empowers young learners.",
      "explanation": "Fluent pronunciation! 'VietDiscovery empowers young Vietnamese learners to achieve global success.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'VietDiscovery empowers young Vietnamese learners to achieve global success.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "VietDiscovery empowers young Vietnamese learners to achieve global success.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "VietDiscovery empowers young Vietnamese learners to achieve global success.",
        "translationVi": "VietDiscovery tiếp sức cho các bạn nhỏ vươn tầm quốc tế."
      }
    },
    {
      "questionId": "g5_spk_12",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Vietnam has fifty-four ethnic groups living harmoniously in solidarity.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Vietnam has fifty-four ethnic groups living harmoniously in solidarity.' (Việt Nam có 54 dân tộc anh em cùng chung sống hòa thuận.)",
      "answerOptions": [
        "Vietnam has fifty-four ethnic groups.",
        "Vietnam has only ten ethnic groups.",
        "Vietnam has no groups."
      ],
      "correctAnswer": "Vietnam has fifty-four ethnic groups.",
      "explanation": "Fluent pronunciation! 'Vietnam has fifty-four ethnic groups living harmoniously in solidarity.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Vietnam has fifty-four ethnic groups living harmoniously in solidarity.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Vietnam has fifty-four ethnic groups living harmoniously in solidarity.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Vietnam has fifty-four ethnic groups living harmoniously in solidarity.",
        "translationVi": "Việt Nam có 54 dân tộc anh em cùng chung sống hòa thuận."
      }
    },
    {
      "questionId": "g5_spk_13",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'The Golden Bridge on Ba Na Hills attracts travelers from every continent.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'The Golden Bridge on Ba Na Hills attracts travelers from every continent.' (Cầu Vàng Bà Nà thu hút du khách khắp năm châu.)",
      "answerOptions": [
        "The Golden Bridge attracts travelers.",
        "The bridge is broken.",
        "No one visits the bridge."
      ],
      "correctAnswer": "The Golden Bridge attracts travelers.",
      "explanation": "Fluent pronunciation! 'The Golden Bridge on Ba Na Hills attracts travelers from every continent.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'The Golden Bridge on Ba Na Hills attracts travelers from every continent.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "The Golden Bridge on Ba Na Hills attracts travelers from every continent.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "The Golden Bridge on Ba Na Hills attracts travelers from every continent.",
        "translationVi": "Cầu Vàng Bà Nà thu hút du khách khắp năm châu."
      }
    },
    {
      "questionId": "g5_spk_14",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Respecting elderly grandparents and teachers is a core Vietnamese virtue.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Respecting elderly grandparents and teachers is a core Vietnamese virtue.' (Kính trọng ông bà và thầy cô là đạo lý cốt lõi của người Việt.)",
      "answerOptions": [
        "Respecting elders is a core virtue.",
        "Elders do not need respect.",
        "We only study books."
      ],
      "correctAnswer": "Respecting elders is a core virtue.",
      "explanation": "Fluent pronunciation! 'Respecting elderly grandparents and teachers is a core Vietnamese virtue.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Respecting elderly grandparents and teachers is a core Vietnamese virtue.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Respecting elderly grandparents and teachers is a core Vietnamese virtue.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Respecting elderly grandparents and teachers is a core Vietnamese virtue.",
        "translationVi": "Kính trọng ông bà và thầy cô là đạo lý cốt lõi của người Việt."
      }
    },
    {
      "questionId": "g5_spk_15",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'The Mekong Delta produces tropical fruits and nourishes southern communities.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'The Mekong Delta produces tropical fruits and nourishes southern communities.' (Đồng bằng sông Cửu Long trù phú hoa trái và nuôi dưỡng người dân Nam Bộ.)",
      "answerOptions": [
        "The Mekong Delta produces tropical fruits.",
        "The delta is a desert.",
        "No fruits grow in the south."
      ],
      "correctAnswer": "The Mekong Delta produces tropical fruits.",
      "explanation": "Fluent pronunciation! 'The Mekong Delta produces tropical fruits and nourishes southern communities.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'The Mekong Delta produces tropical fruits and nourishes southern communities.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "The Mekong Delta produces tropical fruits and nourishes southern communities.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "The Mekong Delta produces tropical fruits and nourishes southern communities.",
        "translationVi": "Đồng bằng sông Cửu Long trù phú hoa trái và nuôi dưỡng người dân Nam Bộ."
      }
    },
    {
      "questionId": "g5_spk_16",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Mount Fansipan stands tall as the majestic Roof of Indochina.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Mount Fansipan stands tall as the majestic Roof of Indochina.' (Đỉnh Fansipan sừng sững nóc nhà Đông Dương hùng vĩ.)",
      "answerOptions": [
        "Mount Fansipan is the Roof of Indochina.",
        "Fansipan is a small hill.",
        "Fansipan is near the ocean."
      ],
      "correctAnswer": "Mount Fansipan is the Roof of Indochina.",
      "explanation": "Fluent pronunciation! 'Mount Fansipan stands tall as the majestic Roof of Indochina.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Mount Fansipan stands tall as the majestic Roof of Indochina.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Mount Fansipan stands tall as the majestic Roof of Indochina.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Mount Fansipan stands tall as the majestic Roof of Indochina.",
        "translationVi": "Đỉnh Fansipan sừng sững nóc nhà Đông Dương hùng vĩ."
      }
    },
    {
      "questionId": "g5_spk_17",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'The Perfume River carries the royal echoes of ancient Hue citadel.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'The Perfume River carries the royal echoes of ancient Hue citadel.' (Dòng sông Hương mang âm hưởng cung đình Huế cổ kính.)",
      "answerOptions": [
        "The Perfume River carries royal echoes.",
        "The river is completely dry.",
        "Hue has no river."
      ],
      "correctAnswer": "The Perfume River carries royal echoes.",
      "explanation": "Fluent pronunciation! 'The Perfume River carries the royal echoes of ancient Hue citadel.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'The Perfume River carries the royal echoes of ancient Hue citadel.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "The Perfume River carries the royal echoes of ancient Hue citadel.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "The Perfume River carries the royal echoes of ancient Hue citadel.",
        "translationVi": "Dòng sông Hương mang âm hưởng cung đình Huế cổ kính."
      }
    },
    {
      "questionId": "g5_spk_18",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.' (Hoa sen tượng trưng cho sự thuần khiết, kiên cường và lạc quan.)",
      "answerOptions": [
        "Lotus blossoms symbolize purity and resilience.",
        "Lotus is an ordinary weed.",
        "Lotus has no meaning."
      ],
      "correctAnswer": "Lotus blossoms symbolize purity and resilience.",
      "explanation": "Fluent pronunciation! 'Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.",
        "translationVi": "Hoa sen tượng trưng cho sự thuần khiết, kiên cường và lạc quan."
      }
    },
    {
      "questionId": "g5_spk_19",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Children celebrate Mid-Autumn with star lanterns under the autumn moon.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Children celebrate Mid-Autumn with star lanterns under the autumn moon.' (Trẻ em đón Tết Trung Thu với đèn ông sao dưới ánh trăng thu.)",
      "answerOptions": [
        "Children celebrate Mid-Autumn with lanterns.",
        "Mid-Autumn happens in winter.",
        "Children sleep during Tet."
      ],
      "correctAnswer": "Children celebrate Mid-Autumn with lanterns.",
      "explanation": "Fluent pronunciation! 'Children celebrate Mid-Autumn with star lanterns under the autumn moon.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Children celebrate Mid-Autumn with star lanterns under the autumn moon.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Children celebrate Mid-Autumn with star lanterns under the autumn moon.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Children celebrate Mid-Autumn with star lanterns under the autumn moon.",
        "translationVi": "Trẻ em đón Tết Trung Thu với đèn ông sao dưới ánh trăng thu."
      }
    },
    {
      "questionId": "g5_spk_20",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "medium",
      "prompt": "Listen and practice speaking this mission sentence:\n'Learning international languages connects our local culture with the world.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Learning international languages connects our local culture with the world.' (Học ngoại ngữ kết nối văn hóa quê hương với bạn bè quốc tế.)",
      "answerOptions": [
        "Languages connect our culture with the world.",
        "Languages separate people.",
        "We only talk to neighbors."
      ],
      "correctAnswer": "Languages connect our culture with the world.",
      "explanation": "Fluent pronunciation! 'Learning international languages connects our local culture with the world.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Learning international languages connects our local culture with the world.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Learning international languages connects our local culture with the world.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Learning international languages connects our local culture with the world.",
        "translationVi": "Học ngoại ngữ kết nối văn hóa quê hương với bạn bè quốc tế."
      }
    },
    {
      "questionId": "g5_spk_21",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.' (Hang Sơn Đoòng đại diện cho vẻ tráng lệ kỳ vĩ của Quảng Bình.)",
      "answerOptions": [
        "Son Doong represents geological grandeur.",
        "Son Doong is a small pit.",
        "Son Doong is man-made."
      ],
      "correctAnswer": "Son Doong represents geological grandeur.",
      "explanation": "Fluent pronunciation! 'Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.",
        "translationVi": "Hang Sơn Đoòng đại diện cho vẻ tráng lệ kỳ vĩ của Quảng Bình."
      }
    },
    {
      "questionId": "g5_spk_22",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Protecting national cultural heritage is the shared mission of every generation.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Protecting national cultural heritage is the shared mission of every generation.' (Bảo tồn di sản văn hóa dân tộc là sứ mệnh chung của mọi thế hệ.)",
      "answerOptions": [
        "Protecting heritage is our shared mission.",
        "Heritage should be forgotten.",
        "Only teachers protect heritage."
      ],
      "correctAnswer": "Protecting heritage is our shared mission.",
      "explanation": "Fluent pronunciation! 'Protecting national cultural heritage is the shared mission of every generation.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Protecting national cultural heritage is the shared mission of every generation.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Protecting national cultural heritage is the shared mission of every generation.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Protecting national cultural heritage is the shared mission of every generation.",
        "translationVi": "Bảo tồn di sản văn hóa dân tộc là sứ mệnh chung của mọi thế hệ."
      }
    },
    {
      "questionId": "g5_spk_23",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Sustainable eco-tourism preserves pristine natural habitats for future explorers.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Sustainable eco-tourism preserves pristine natural habitats for future explorers.' (Du lịch sinh thái bền vững gìn giữ môi trường nguyên sơ cho tương lai.)",
      "answerOptions": [
        "Eco-tourism preserves pristine habitats.",
        "Eco-tourism destroys forests.",
        "Nature needs no protection."
      ],
      "correctAnswer": "Eco-tourism preserves pristine habitats.",
      "explanation": "Fluent pronunciation! 'Sustainable eco-tourism preserves pristine natural habitats for future explorers.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Sustainable eco-tourism preserves pristine natural habitats for future explorers.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Sustainable eco-tourism preserves pristine natural habitats for future explorers.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Sustainable eco-tourism preserves pristine natural habitats for future explorers.",
        "translationVi": "Du lịch sinh thái bền vững gìn giữ môi trường nguyên sơ cho tương lai."
      }
    },
    {
      "questionId": "g5_spk_24",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.' (Tranh dân gian Đông Hồ gửi gắm khát vọng muôn đời về hòa bình và ấm no.)",
      "answerOptions": [
        "Dong Ho paintings convey aspirations for peace.",
        "Paintings are for advertisements.",
        "Folk art has no soul."
      ],
      "correctAnswer": "Dong Ho paintings convey aspirations for peace.",
      "explanation": "Fluent pronunciation! 'Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.",
        "translationVi": "Tranh dân gian Đông Hồ gửi gắm khát vọng muôn đời về hòa bình và ấm no."
      }
    },
    {
      "questionId": "g5_spk_25",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'The Space of Gong Culture reverberates across the lush Central Highlands.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'The Space of Gong Culture reverberates across the lush Central Highlands.' (Không gian văn hóa Cồng chiêng vang vọng khắp đại ngàn Tây Nguyên.)",
      "answerOptions": [
        "Gong culture reverberates across the highlands.",
        "Gongs are ordinary metal plates.",
        "Highlands have no music."
      ],
      "correctAnswer": "Gong culture reverberates across the highlands.",
      "explanation": "Fluent pronunciation! 'The Space of Gong Culture reverberates across the lush Central Highlands.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'The Space of Gong Culture reverberates across the lush Central Highlands.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "The Space of Gong Culture reverberates across the lush Central Highlands.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "The Space of Gong Culture reverberates across the lush Central Highlands.",
        "translationVi": "Không gian văn hóa Cồng chiêng vang vọng khắp đại ngàn Tây Nguyên."
      }
    },
    {
      "questionId": "g5_spk_26",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.' (Vua Lý Thái Tổ đã nhìn thấy thiên niên kỷ thịnh vượng khi định đô Thăng Long năm 1010.)",
      "answerOptions": [
        "Emperor Ly Thai To founded Thang Long in 1010.",
        "Thang Long was built yesterday.",
        "Ly Thai To lived in modern times."
      ],
      "correctAnswer": "Emperor Ly Thai To founded Thang Long in 1010.",
      "explanation": "Fluent pronunciation! 'Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.",
        "translationVi": "Vua Lý Thái Tổ đã nhìn thấy thiên niên kỷ thịnh vượng khi định đô Thăng Long năm 1010."
      }
    },
    {
      "questionId": "g5_spk_27",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'The Truong Son mountain range forms the sturdy backbone of our beloved motherland.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'The Truong Son mountain range forms the sturdy backbone of our beloved motherland.' (Dãy Trường Sơn là dải xương sống kiên cường của non sông đất Việt.)",
      "answerOptions": [
        "The Truong Son range forms our backbone.",
        "The mountains are flat.",
        "There are no mountains."
      ],
      "correctAnswer": "The Truong Son range forms our backbone.",
      "explanation": "Fluent pronunciation! 'The Truong Son mountain range forms the sturdy backbone of our beloved motherland.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'The Truong Son mountain range forms the sturdy backbone of our beloved motherland.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "The Truong Son mountain range forms the sturdy backbone of our beloved motherland.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "The Truong Son mountain range forms the sturdy backbone of our beloved motherland.",
        "translationVi": "Dãy Trường Sơn là dải xương sống kiên cường của non sông đất Việt."
      }
    },
    {
      "questionId": "g5_spk_28",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Youthful innovators lead Vietnam into an era of digital science and green energy.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Youthful innovators lead Vietnam into an era of digital science and green energy.' (Thế hệ trẻ đưa đất nước bước vào kỷ nguyên khoa học số và năng lượng xanh.)",
      "answerOptions": [
        "Youthful innovators lead our nation forward.",
        "Technology is not important.",
        "We remain in the past."
      ],
      "correctAnswer": "Youthful innovators lead our nation forward.",
      "explanation": "Fluent pronunciation! 'Youthful innovators lead Vietnam into an era of digital science and green energy.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Youthful innovators lead Vietnam into an era of digital science and green energy.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Youthful innovators lead Vietnam into an era of digital science and green energy.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Youthful innovators lead Vietnam into an era of digital science and green energy.",
        "translationVi": "Thế hệ trẻ đưa đất nước bước vào kỷ nguyên khoa học số và năng lượng xanh."
      }
    },
    {
      "questionId": "g5_spk_29",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'Diligent practice with Ms. Trang unlocks your highest educational potential.'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'Diligent practice with Ms. Trang unlocks your highest educational potential.' (Chăm chỉ rèn luyện cùng cô Trang mở khóa tiềm năng học tập cao nhất của con.)",
      "answerOptions": [
        "Diligent practice unlocks your potential.",
        "Practice is unnecessary.",
        "We never practice."
      ],
      "correctAnswer": "Diligent practice unlocks your potential.",
      "explanation": "Fluent pronunciation! 'Diligent practice with Ms. Trang unlocks your highest educational potential.' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'Diligent practice with Ms. Trang unlocks your highest educational potential.' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "Diligent practice with Ms. Trang unlocks your highest educational potential.",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "Diligent practice with Ms. Trang unlocks your highest educational potential.",
        "translationVi": "Chăm chỉ rèn luyện cùng cô Trang mở khóa tiềm năng học tập cao nhất của con."
      }
    },
    {
      "questionId": "g5_spk_30",
      "grade": 5,
      "gameType": "speaking_mission",
      "topic": "Pronunciation, Intonation & Spoken Missions",
      "difficulty": "challenge",
      "prompt": "Listen and practice speaking this mission sentence:\n'I am proud to be a student ambassador for Vietnam's cultural discovery!'",
      "promptVi": "Nghe phát âm chuẩn và luyện nói: 'I am proud to be a student ambassador for Vietnam's cultural discovery!' (Tôi tự hào là đại sứ học trò lan tỏa hành trình khám phá Việt Nam!)",
      "answerOptions": [
        "I am proud to be a student ambassador!",
        "I have no pride in learning.",
        "I do not know Vietnam."
      ],
      "correctAnswer": "I am proud to be a student ambassador!",
      "explanation": "Fluent pronunciation! 'I am proud to be a student ambassador for Vietnam's cultural discovery!' spoken with clear natural cadence.",
      "explanationVi": "Phát âm lưu loát! 'I am proud to be a student ambassador for Vietnam's cultural discovery!' được phát âm với ngữ điệu tự nhiên, tự tin.",
      "imageAsset": "🎙️",
      "audioPrompt": "I am proud to be a student ambassador for Vietnam's cultural discovery!",
      "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
      "metadata": {
        "speechText": "I am proud to be a student ambassador for Vietnam's cultural discovery!",
        "translationVi": "Tôi tự hào là đại sứ học trò lan tỏa hành trình khám phá Việt Nam!"
      }
    }
  ],
  "final_adventure": [
    {
      "questionId": "g5_adv_01",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: Spell the English name of the sacred flower: L-O-T-U-S",
      "promptVi": "Đánh vần tên loài hoa quốc hoa",
      "answerOptions": [
        "LOTUS",
        "ROSE",
        "LILY"
      ],
      "correctAnswer": "LOTUS",
      "explanation": "Grand Champion victory! 'LOTUS' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'LOTUS' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: Spell the English name of the sacred flower: L-O-T-U-S",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 1,
        "questionVi": "Đánh vần tên loài hoa quốc hoa",
        "answer": "LOTUS"
      }
    },
    {
      "questionId": "g5_adv_02",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What color is the sky on a sunny summer afternoon?",
      "promptVi": "Bầu trời mùa hè màu gì?",
      "answerOptions": [
        "Blue",
        "Green",
        "Red"
      ],
      "correctAnswer": "Blue",
      "explanation": "Grand Champion victory! 'Blue' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Blue' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What color is the sky on a sunny summer afternoon?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 2,
        "questionVi": "Bầu trời mùa hè màu gì?",
        "answer": "Blue"
      }
    },
    {
      "questionId": "g5_adv_03",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: How many days are there in one complete week?",
      "promptVi": "Một tuần có bao nhiêu ngày?",
      "answerOptions": [
        "Seven",
        "Five",
        "Ten"
      ],
      "correctAnswer": "Seven",
      "explanation": "Grand Champion victory! 'Seven' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Seven' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: How many days are there in one complete week?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 3,
        "questionVi": "Một tuần có bao nhiêu ngày?",
        "answer": "Seven"
      }
    },
    {
      "questionId": "g5_adv_04",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: Which animal is known as the faithful domestic guardian?",
      "promptVi": "Con vật trông nhà trung thành",
      "answerOptions": [
        "Dog",
        "Cat",
        "Bird"
      ],
      "correctAnswer": "Dog",
      "explanation": "Grand Champion victory! 'Dog' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Dog' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: Which animal is known as the faithful domestic guardian?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 4,
        "questionVi": "Con vật trông nhà trung thành",
        "answer": "Dog"
      }
    },
    {
      "questionId": "g5_adv_05",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What do students write with on school notebooks?",
      "promptVi": "Học sinh viết vào vở bằng gì?",
      "answerOptions": [
        "Pen",
        "Fork",
        "Knife"
      ],
      "correctAnswer": "Pen",
      "explanation": "Grand Champion victory! 'Pen' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Pen' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What do students write with on school notebooks?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 5,
        "questionVi": "Học sinh viết vào vở bằng gì?",
        "answer": "Pen"
      }
    },
    {
      "questionId": "g5_adv_06",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What meal do people eat right after waking up in the morning?",
      "promptVi": "Bữa ăn sáng tiếng Anh là gì?",
      "answerOptions": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "correctAnswer": "Breakfast",
      "explanation": "Grand Champion victory! 'Breakfast' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Breakfast' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What meal do people eat right after waking up in the morning?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 6,
        "questionVi": "Bữa ăn sáng tiếng Anh là gì?",
        "answer": "Breakfast"
      }
    },
    {
      "questionId": "g5_adv_07",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What season comes right after the cold winter?",
      "promptVi": "Mùa nào đến ngay sau mùa đông lạnh?",
      "answerOptions": [
        "Spring",
        "Summer",
        "Autumn"
      ],
      "correctAnswer": "Spring",
      "explanation": "Grand Champion victory! 'Spring' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Spring' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What season comes right after the cold winter?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 7,
        "questionVi": "Mùa nào đến ngay sau mùa đông lạnh?",
        "answer": "Spring"
      }
    },
    {
      "questionId": "g5_adv_08",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: Which famous lake is located right in the center of Hanoi?",
      "promptVi": "Hồ nước ở trung tâm thủ đô Hà Nội",
      "answerOptions": [
        "Hoan Kiem Lake",
        "West Lake",
        "Ba Be Lake"
      ],
      "correctAnswer": "Hoan Kiem Lake",
      "explanation": "Grand Champion victory! 'Hoan Kiem Lake' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Hoan Kiem Lake' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: Which famous lake is located right in the center of Hanoi?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 8,
        "questionVi": "Hồ nước ở trung tâm thủ đô Hà Nội",
        "answer": "Hoan Kiem Lake"
      }
    },
    {
      "questionId": "g5_adv_09",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What is the Vietnamese currency unit called?",
      "promptVi": "Đơn vị tiền tệ Việt Nam",
      "answerOptions": [
        "Dong",
        "Dollar",
        "Euro"
      ],
      "correctAnswer": "Dong",
      "explanation": "Grand Champion victory! 'Dong' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Dong' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What is the Vietnamese currency unit called?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 9,
        "questionVi": "Đơn vị tiền tệ Việt Nam",
        "answer": "Dong"
      }
    },
    {
      "questionId": "g5_adv_10",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "easy",
      "prompt": "Stage 1 Sprint: What do young children receive in red envelopes during Tet?",
      "promptVi": "Phong bao lì xì ngày Tết đựng gì?",
      "answerOptions": [
        "Lucky money",
        "Candies",
        "Books"
      ],
      "correctAnswer": "Lucky money",
      "explanation": "Grand Champion victory! 'Lucky money' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Lucky money' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 1 Sprint: What do young children receive in red envelopes during Tet?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 10,
        "questionVi": "Phong bao lì xì ngày Tết đựng gì?",
        "answer": "Lucky money"
      }
    },
    {
      "questionId": "g5_adv_11",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Choose the correct preposition: 'Ha Long Bay is located _______ northern Vietnam.'",
      "promptVi": "Giới từ chỉ vị trí miền Bắc",
      "answerOptions": [
        "in",
        "on",
        "at"
      ],
      "correctAnswer": "in",
      "explanation": "Grand Champion victory! 'in' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'in' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Choose the correct preposition: 'Ha Long Bay is located _______ northern Vietnam.'",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 11,
        "questionVi": "Giới từ chỉ vị trí miền Bắc",
        "answer": "in"
      }
    },
    {
      "questionId": "g5_adv_12",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Identify the correct past tense: 'Last summer, my family _______ to Da Nang by train.'",
      "promptVi": "Thì quá khứ của động từ 'travel'",
      "answerOptions": [
        "traveled",
        "travel",
        "will travel"
      ],
      "correctAnswer": "traveled",
      "explanation": "Grand Champion victory! 'traveled' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'traveled' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Identify the correct past tense: 'Last summer, my family _______ to Da Nang by train.'",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 12,
        "questionVi": "Thì quá khứ của động từ 'travel'",
        "answer": "traveled"
      }
    },
    {
      "questionId": "g5_adv_13",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: What is the highest peak in the Indochinese peninsula?",
      "promptVi": "Đỉnh núi cao nhất Đông Dương",
      "answerOptions": [
        "Mount Fansipan",
        "Ba Den",
        "Langbiang"
      ],
      "correctAnswer": "Mount Fansipan",
      "explanation": "Grand Champion victory! 'Mount Fansipan' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Mount Fansipan' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: What is the highest peak in the Indochinese peninsula?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 13,
        "questionVi": "Đỉnh núi cao nhất Đông Dương",
        "answer": "Mount Fansipan"
      }
    },
    {
      "questionId": "g5_adv_14",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Which bridge breathes real fire and sprays water on weekend evenings?",
      "promptVi": "Cầu Rồng phun lửa phun nước",
      "answerOptions": [
        "Dragon Bridge",
        "Golden Bridge",
        "Thuan Phuoc"
      ],
      "correctAnswer": "Dragon Bridge",
      "explanation": "Grand Champion victory! 'Dragon Bridge' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Dragon Bridge' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Which bridge breathes real fire and sprays water on weekend evenings?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 14,
        "questionVi": "Cầu Rồng phun lửa phun nước",
        "answer": "Dragon Bridge"
      }
    },
    {
      "questionId": "g5_adv_15",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: What traditional art form uses puppets dancing upon water?",
      "promptVi": "Nghệ thuật múa rối nước",
      "answerOptions": [
        "Water puppetry",
        "Shadow play",
        "Magic show"
      ],
      "correctAnswer": "Water puppetry",
      "explanation": "Grand Champion victory! 'Water puppetry' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Water puppetry' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: What traditional art form uses puppets dancing upon water?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 15,
        "questionVi": "Nghệ thuật múa rối nước",
        "answer": "Water puppetry"
      }
    },
    {
      "questionId": "g5_adv_16",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Which famous market in southern Vietnam has a prominent clock tower?",
      "promptVi": "Chợ có tháp đồng hồ ở TP.HCM",
      "answerOptions": [
        "Ben Thanh Market",
        "Dong Xuan",
        "Han Market"
      ],
      "correctAnswer": "Ben Thanh Market",
      "explanation": "Grand Champion victory! 'Ben Thanh Market' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Ben Thanh Market' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Which famous market in southern Vietnam has a prominent clock tower?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 16,
        "questionVi": "Chợ có tháp đồng hồ ở TP.HCM",
        "answer": "Ben Thanh Market"
      }
    },
    {
      "questionId": "g5_adv_17",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: What is the traditional round pastry with sweet filling eaten during Mid-Autumn?",
      "promptVi": "Bánh trung thu truyền thống",
      "answerOptions": [
        "Mooncake",
        "Chung cake",
        "Banh pia"
      ],
      "correctAnswer": "Mooncake",
      "explanation": "Grand Champion victory! 'Mooncake' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Mooncake' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: What is the traditional round pastry with sweet filling eaten during Mid-Autumn?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 17,
        "questionVi": "Bánh trung thu truyền thống",
        "answer": "Mooncake"
      }
    },
    {
      "questionId": "g5_adv_18",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Which ancient town in central Vietnam is famous for tailors and silk lanterns?",
      "promptVi": "Đô thị cổ may đo và đèn lồng",
      "answerOptions": [
        "Hoi An",
        "Hue",
        "Nha Trang"
      ],
      "correctAnswer": "Hoi An",
      "explanation": "Grand Champion victory! 'Hoi An' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Hoi An' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Which ancient town in central Vietnam is famous for tailors and silk lanterns?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 18,
        "questionVi": "Đô thị cổ may đo và đèn lồng",
        "answer": "Hoi An"
      }
    },
    {
      "questionId": "g5_adv_19",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: Which province is home to both Phong Nha and Son Doong caves?",
      "promptVi": "Tỉnh có Phong Nha và Sơn Đoòng",
      "answerOptions": [
        "Quang Binh",
        "Quang Tri",
        "Ha Tinh"
      ],
      "correctAnswer": "Quang Binh",
      "explanation": "Grand Champion victory! 'Quang Binh' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Quang Binh' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: Which province is home to both Phong Nha and Son Doong caves?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 19,
        "questionVi": "Tỉnh có Phong Nha và Sơn Đoòng",
        "answer": "Quang Binh"
      }
    },
    {
      "questionId": "g5_adv_20",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "medium",
      "prompt": "Stage 2 Challenge: What is the sweet national beverage made with whipped egg cream and robust coffee?",
      "promptVi": "Cà phê trứng Hà Nội",
      "answerOptions": [
        "Egg coffee",
        "Iced tea",
        "Lemonade"
      ],
      "correctAnswer": "Egg coffee",
      "explanation": "Grand Champion victory! 'Egg coffee' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Egg coffee' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Stage 2 Challenge: What is the sweet national beverage made with whipped egg cream and robust coffee?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 20,
        "questionVi": "Cà phê trứng Hà Nội",
        "answer": "Egg coffee"
      }
    },
    {
      "questionId": "g5_adv_21",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: In 1010, King Ly Thai To moved the capital to Thang Long after seeing a golden dragon. What does 'Thang Long' literally mean in English?",
      "promptVi": "Thăng Long nghĩa là gì?",
      "answerOptions": [
        "Rising Dragon",
        "Sleeping Dragon",
        "Hidden Dragon"
      ],
      "correctAnswer": "Rising Dragon",
      "explanation": "Grand Champion victory! 'Rising Dragon' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Rising Dragon' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: In 1010, King Ly Thai To moved the capital to Thang Long after seeing a golden dragon. What does 'Thang Long' literally mean in English?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 21,
        "questionVi": "Thăng Long nghĩa là gì?",
        "answer": "Rising Dragon"
      }
    },
    {
      "questionId": "g5_adv_22",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: What geological process created the thousands of dramatic limestone towers in Ha Long Bay?",
      "promptVi": "Quá trình địa chất tạo nên Vịnh Hạ Long",
      "answerOptions": [
        "Karst erosion over 500 million years",
        "Earthquake last century",
        "Volcano eruption"
      ],
      "correctAnswer": "Karst erosion over 500 million years",
      "explanation": "Grand Champion victory! 'Karst erosion over 500 million years' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Karst erosion over 500 million years' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: What geological process created the thousands of dramatic limestone towers in Ha Long Bay?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 22,
        "questionVi": "Quá trình địa chất tạo nên Vịnh Hạ Long",
        "answer": "Karst erosion over 500 million years"
      }
    },
    {
      "questionId": "g5_adv_23",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: Why did King Le Loi's sacred sword become known as Thuan Thien (Heaven's Will)?",
      "promptVi": "Ý nghĩa gươm Thuận Thiên",
      "answerOptions": [
        "It symbolized divine mandate to defend national independence",
        "It was bought from a foreign king",
        "It was made of ordinary iron"
      ],
      "correctAnswer": "It symbolized divine mandate to defend national independence",
      "explanation": "Grand Champion victory! 'It symbolized divine mandate to defend national independence' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'It symbolized divine mandate to defend national independence' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: Why did King Le Loi's sacred sword become known as Thuan Thien (Heaven's Will)?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 23,
        "questionVi": "Ý nghĩa gươm Thuận Thiên",
        "answer": "It symbolized divine mandate to defend national independence"
      }
    },
    {
      "questionId": "g5_adv_24",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: How many UNESCO World Heritage Sites are currently preserved across Vietnam?",
      "promptVi": "Số lượng di sản thế giới tại Việt Nam",
      "answerOptions": [
        "Eight heritage sites",
        "Three sites",
        "Twenty sites"
      ],
      "correctAnswer": "Eight heritage sites",
      "explanation": "Grand Champion victory! 'Eight heritage sites' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Eight heritage sites' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: How many UNESCO World Heritage Sites are currently preserved across Vietnam?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 24,
        "questionVi": "Số lượng di sản thế giới tại Việt Nam",
        "answer": "Eight heritage sites"
      }
    },
    {
      "questionId": "g5_adv_25",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: Which river basin in southern Vietnam sustains nine dragon estuaries flowing to the East Sea?",
      "promptVi": "Dòng sông Cửu Long chín nhánh",
      "answerOptions": [
        "Mekong River Basin",
        "Red River Basin",
        "Dong Nai Basin"
      ],
      "correctAnswer": "Mekong River Basin",
      "explanation": "Grand Champion victory! 'Mekong River Basin' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Mekong River Basin' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: Which river basin in southern Vietnam sustains nine dragon estuaries flowing to the East Sea?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 25,
        "questionVi": "Dòng sông Cửu Long chín nhánh",
        "answer": "Mekong River Basin"
      }
    },
    {
      "questionId": "g5_adv_26",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: What ancient royal court orchestra was inscribed on UNESCO's Representative List in 2003?",
      "promptVi": "Di sản Nhã nhạc cung đình",
      "answerOptions": [
        "Nha Nhac - Vietnamese Court Music",
        "Modern pop music",
        "Military marching band"
      ],
      "correctAnswer": "Nha Nhac - Vietnamese Court Music",
      "explanation": "Grand Champion victory! 'Nha Nhac - Vietnamese Court Music' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Nha Nhac - Vietnamese Court Music' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: What ancient royal court orchestra was inscribed on UNESCO's Representative List in 2003?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 26,
        "questionVi": "Di sản Nhã nhạc cung đình",
        "answer": "Nha Nhac - Vietnamese Court Music"
      }
    },
    {
      "questionId": "g5_adv_27",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: What unique natural phenomenon distinguishes Son Doong Cave from all other caves on Earth?",
      "promptVi": "Hiện tượng thời tiết riêng trong Sơn Đoòng",
      "answerOptions": [
        "Internal weather clouds and subterranean rainforest",
        "Underground lava rivers",
        "Subterranean glaciers"
      ],
      "correctAnswer": "Internal weather clouds and subterranean rainforest",
      "explanation": "Grand Champion victory! 'Internal weather clouds and subterranean rainforest' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Internal weather clouds and subterranean rainforest' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: What unique natural phenomenon distinguishes Son Doong Cave from all other caves on Earth?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 27,
        "questionVi": "Hiện tượng thời tiết riêng trong Sơn Đoòng",
        "answer": "Internal weather clouds and subterranean rainforest"
      }
    },
    {
      "questionId": "g5_adv_28",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: What core message is reflected in the traditional legend of Banh Chung and Banh Giay?",
      "promptVi": "Thông điệp bánh chưng bánh giầy",
      "answerOptions": [
        "Gratitude to heaven and earth, and honor for filial piety",
        "How to prepare for market trade",
        "Making cakes fast"
      ],
      "correctAnswer": "Gratitude to heaven and earth, and honor for filial piety",
      "explanation": "Grand Champion victory! 'Gratitude to heaven and earth, and honor for filial piety' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'Gratitude to heaven and earth, and honor for filial piety' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: What core message is reflected in the traditional legend of Banh Chung and Banh Giay?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 28,
        "questionVi": "Thông điệp bánh chưng bánh giầy",
        "answer": "Gratitude to heaven and earth, and honor for filial piety"
      }
    },
    {
      "questionId": "g5_adv_29",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: What is the highest grade of educational achievement awarded in VietDiscovery?",
      "promptVi": "Danh hiệu cao nhất của VietDiscovery",
      "answerOptions": [
        "VietDiscovery English Grand Champion",
        "Bronze Explorer",
        "Beginner Scout"
      ],
      "correctAnswer": "VietDiscovery English Grand Champion",
      "explanation": "Grand Champion victory! 'VietDiscovery English Grand Champion' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'VietDiscovery English Grand Champion' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: What is the highest grade of educational achievement awarded in VietDiscovery?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 29,
        "questionVi": "Danh hiệu cao nhất của VietDiscovery",
        "answer": "VietDiscovery English Grand Champion"
      }
    },
    {
      "questionId": "g5_adv_30",
      "grade": 5,
      "gameType": "final_adventure",
      "topic": "Grand Championship Sprint & Multi-Skill Mission",
      "difficulty": "challenge",
      "prompt": "Championship Boss: Congratulations! You have conquered the entire five-grade learning journey. What is your pledge?",
      "promptVi": "Lời cam kết của nhà vô địch",
      "answerOptions": [
        "To study English diligently and shine with pride!",
        "To stop studying today",
        "To forget my lessons"
      ],
      "correctAnswer": "To study English diligently and shine with pride!",
      "explanation": "Grand Champion victory! 'To study English diligently and shine with pride!' passes the stage with highest honors.",
      "explanationVi": "Chiến thắng đỉnh cao! 'To study English diligently and shine with pride!' vượt ải xuất sắc với điểm số tối đa.",
      "imageAsset": "⚡",
      "audioPrompt": "Championship Boss: Congratulations! You have conquered the entire five-grade learning journey. What is your pledge?",
      "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
      "metadata": {
        "stage": 30,
        "questionVi": "Lời cam kết của nhà vô địch",
        "answer": "To study English diligently and shine with pride!"
      }
    }
  ]
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
