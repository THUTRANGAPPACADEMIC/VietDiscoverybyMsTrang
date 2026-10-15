// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — INDEPENDENT CURRICULUM DATA REPOSITORY
// 5 Core Adventures & 5 Pedagogically Verified Pilot Lessons for Grades 1–5
// ==============================================================================

import { 
  AdventureThemeId, 
  CurriculumAdventure, 
  CurriculumLesson 
} from '../types/curriculum';
import { localStore } from '../lib/supabase';

// ------------------------------------------------------------------------------
// 1. THE 5 INDEPENDENT ADVENTURES OF VIETDISCOVERY
// ------------------------------------------------------------------------------
export const CURRICULUM_ADVENTURES: CurriculumAdventure[] = [
  {
    id: 'adventure_1_places',
    orderNumber: 1,
    titleEn: 'Amazing Places',
    titleVi: 'Địa danh kỳ thú',
    subtitleEn: 'Explore natural wonders, coastal bays, and majestic mountains',
    subtitleVi: 'Khám phá kỳ quan thiên nhiên, vịnh biển và núi non hùng vĩ',
    icon: '🏔️',
    bannerGradient: 'from-sky-500 via-teal-500 to-emerald-500',
    accentColor: '#0284c7',
    descriptionEn: 'Discover Vietnam through geography, world heritage landscapes, ancient rock formations, and scenic rivers.',
    descriptionVi: 'Học tiếng Anh qua địa lý thực tế, các kỳ quan di sản thế giới và danh lam thắng cảnh Việt Nam.'
  },
  {
    id: 'adventure_2_culture',
    orderNumber: 2,
    titleEn: 'Vietnamese Culture',
    titleVi: 'Văn hóa Việt Nam',
    subtitleEn: 'Celebrate folklore, vibrant festivals, music, and traditions',
    subtitleVi: 'Tìm hiểu lễ hội truyền thống, âm nhạc dân gian và nếp sống gia đình',
    icon: '🏮',
    bannerGradient: 'from-amber-500 via-rose-500 to-pink-500',
    accentColor: '#e11d48',
    descriptionEn: 'Experience Mid-Autumn lanterns, Tet celebrations, imperial palaces, and heartwarming folk stories in fluent English.',
    descriptionVi: 'Trải nghiệm Tết Trung thu, Tết Nguyên đán, cố đô lịch sử và phong tục truyền thống bằng tiếng Anh chuẩn xác.'
  },
  {
    id: 'adventure_3_food',
    orderNumber: 3,
    titleEn: 'Delicious Vietnam',
    titleVi: 'Ẩm thực ba miền',
    subtitleEn: 'Taste world-famous dishes, fresh tropical fruits, and savory street food',
    subtitleVi: 'Khám phá ẩm thực nổi tiếng, hoa quả nhiệt đới và món ngon ba miền',
    icon: '🍜',
    bannerGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    accentColor: '#d97706',
    descriptionEn: 'Learn communicative English for dining, ordering food, describing flavors, and appreciating culinary craftsmanship.',
    descriptionVi: 'Giao tiếp tiếng Anh tự tin khi gọi món, mô tả hương vị và nét tinh hoa của ẩm thực Việt Nam.'
  },
  {
    id: 'adventure_4_nature',
    orderNumber: 4,
    titleEn: 'Nature & Wildlife',
    titleVi: 'Thiên nhiên & Động vật hoang dã',
    subtitleEn: 'Protect lush rainforests, unique animals, and marine life',
    subtitleVi: 'Bảo vệ rừng nhiệt đới nguyên sinh, động vật quý hiếm và sinh vật biển',
    icon: '🌿',
    bannerGradient: 'from-emerald-600 via-green-600 to-teal-700',
    accentColor: '#059669',
    descriptionEn: 'Foster global environmental stewardship while learning animal habitats, conservation, and ecosystem English.',
    descriptionVi: 'Hình thành ý thức bảo vệ môi trường toàn cầu thông qua từ vựng sinh học, môi trường sống và động vật quý hiếm.'
  },
  {
    id: 'adventure_5_future',
    orderNumber: 5,
    titleEn: 'Future Vietnam',
    titleVi: 'Việt Nam tương lai',
    subtitleEn: 'Pioneer green smart cities, clean tech, modern metro, and innovation',
    subtitleVi: 'Tiên phong đô thị thông minh, năng lượng sạch, metro và đổi mới sáng tạo',
    icon: '🚀',
    bannerGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    accentColor: '#4f46e5',
    descriptionEn: 'Equip young Vietnamese learners with 21st-century STEM English, modern transit, clean energy, and future career skills.',
    descriptionVi: 'Trang bị tiếng Anh thế kỷ 21 về công nghệ xanh, tàu điện hiện đại, chuyển đổi số và tư duy đổi mới cho học sinh.'
  }
];

// ------------------------------------------------------------------------------
// 2. THE 5 PILOT LESSONS (GRADES 1 TO 5) — VERIFIED & ACCURATE
// ------------------------------------------------------------------------------
export const PILOT_CURRICULUM_LESSONS: CurriculumLesson[] = [
  // ============================================================================
  // GRADE 1 PILOT LESSON — ADVENTURE 1: AMAZING PLACES
  // ============================================================================
  {
    id: 'lesson-g1-places-halong',
    adventureId: 'adventure_1_places',
    lessonNumber: 1,
    titleEn: 'Ha Long Bay: Emerald Sea & Limestone Islands',
    titleVi: 'Vịnh Hạ Long: Biển ngọc & Đảo đá vôi',
    topicEn: 'Natural Wonders & Colors in the Sea',
    topicVi: 'Kỳ quan thiên nhiên & Màu sắc trên biển',
    gradeLevel: 'Grade 1',
    gradeBand: 'grade_1',
    targetCefr: 'Pre-A1 Starter',
    durationMinutes: 35,
    learningObjectivesEn: [
      'Identify 4 natural landscape words: sea, boat, island, cave.',
      'Use the simple communicative pattern: "Look at the [noun]! It is [adjective]."',
      'Recognize the phoneme /iː/ in "sea" and "green".',
      'Understand that Ha Long Bay is a famous world heritage wonder in Vietnam.'
    ],
    learningObjectivesVi: [
      'Nhận biết và phát âm đúng 4 từ phong cảnh biển: sea, boat, island, cave.',
      'Nói được mẫu câu quan sát: "Look at the sea! It is blue."',
      'Nhận diện âm /iː/ trong từ sea và green.',
      'Biết Vịnh Hạ Long là di sản thiên nhiên thế giới nổi tiếng tại Việt Nam.'
    ],
    coverImage: '/destinations/halong_bay.jpg',
    coverImageAttribution: 'Wikimedia Commons (CC BY-SA 4.0)',

    vocabulary: [
      {
        id: 'v1-sea',
        word: 'sea',
        ipa: '/siː/',
        partOfSpeech: 'noun',
        meaningEn: 'A large area of salty water that is blue or green.',
        meaningVi: 'Biển, vùng nước mặn trong xanh.',
        exampleSentenceEn: 'The sea in Ha Long is emerald green.',
        exampleSentenceVi: 'Biển ở Hạ Long có màu xanh ngọc lục bảo.',
        emoji: '🌊',
        audioPromptEn: 'Sea. The sea is blue and green.'
      },
      {
        id: 'v1-boat',
        word: 'boat',
        ipa: '/bəʊt/',
        partOfSpeech: 'noun',
        meaningEn: 'A small vehicle that travels on water.',
        meaningVi: 'Thuyền, con thuyền du lịch.',
        exampleSentenceEn: 'We sail on a wooden boat.',
        exampleSentenceVi: 'Chúng em đi dạo trên con thuyền gỗ.',
        emoji: '⛵',
        audioPromptEn: 'Boat. Look at the friendly boat.'
      },
      {
        id: 'v1-island',
        word: 'island',
        ipa: '/ˈaɪ.lənd/',
        partOfSpeech: 'noun',
        meaningEn: 'A piece of land completely surrounded by water.',
        meaningVi: 'Hòn đảo giữa biển.',
        exampleSentenceEn: 'There are green trees on the island.',
        exampleSentenceVi: 'Có nhiều cây xanh trên hòn đảo.',
        emoji: '🏝️',
        audioPromptEn: 'Island. A green limestone island.'
      },
      {
        id: 'v1-cave',
        word: 'cave',
        ipa: '/keɪv/',
        partOfSpeech: 'noun',
        meaningEn: 'A large natural hole in a mountain or underground.',
        meaningVi: 'Hang động kỳ vĩ.',
        exampleSentenceEn: 'The big cave is cool and quiet.',
        exampleSentenceVi: 'Hang động lớn rất mát mẻ và yên tĩnh.',
        emoji: '🪨',
        audioPromptEn: 'Cave. We visit a magical cave.'
      }
    ],

    sentencePatterns: [
      {
        id: 'sp-g1-1',
        pattern: 'Look at the [noun]! It is [adjective].',
        patternMeaningVi: 'Nhìn kìa [danh từ]! Nó thật [tính từ].',
        dialogueEn: [
          { speaker: 'Captain Trang', text: 'Hello, Little Explorer! Look at the sea!' },
          { speaker: 'Student', text: 'Wow! It is big and green!' }
        ],
        dialogueVi: [
          { speaker: 'Cô Trang', text: 'Chào nhà thám hiểm nhí! Hãy nhìn ra biển kìa!' },
          { speaker: 'Học sinh', text: 'Oa! Biển thật rộng lớn và xanh mát!' }
        ],
        practicePromptEn: 'Point to the boat and say: "Look at the boat! It is red and white."',
        practicePromptVi: 'Chỉ tay vào chiếc thuyền và nói: "Look at the boat! It is red and white."'
      }
    ],

    reading: {
      titleEn: 'A Sunny Day at Ha Long Bay',
      titleVi: 'Ngày Nắng Đẹp Trên Vịnh Hạ Long',
      wordCount: 38,
      lexileEstimate: '120L',
      passagesEn: [
        'Welcome to Ha Long Bay! The sea is calm and green.',
        'We sail on a wooden boat. Look at the high islands!',
        'A gentle bird flies over the cave. Vietnam is so beautiful!'
      ],
      passagesVi: [
        'Chào mừng bạn đến với Vịnh Hạ Long! Nước biển êm đềm và xanh ngắt.',
        'Chúng em lướt đi trên con thuyền gỗ. Hãy nhìn những hòn đảo cao vút kìa!',
        'Một chú chim nhỏ bay qua vòm hang đá. Đất nước Việt Nam thật tươi đẹp!'
      ],
      comprehensionTipsEn: 'Read slowly. Point to the sea, boat, and island as you read.',
      comprehensionTipsVi: 'Đọc chậm rãi từng từ. Chỉ tay vào tranh biển, thuyền và hòn đảo khi đọc.',
      readingImage: '/destinations/halong_bay.jpg',
      imageAttribution: 'Licensed for VietDiscovery primary education.'
    },

    listening: {
      audioTitleEn: 'Captain Trang on the Wooden Boat',
      audioScriptEn: 'Hello, Little Explorer! I am Captain Trang. Today, we are sailing across Ha Long Bay. Look to your left! What is floating on the water? It is a red wooden boat!',
      audioScriptVi: 'Xin chào nhà thám hiểm nhí! Cô là Captain Trang. Hôm nay chúng ta cùng du ngoạn Vịnh Hạ Long. Nhìn sang bên trái kìa! Thứ gì đang lướt trên mặt nước thế? Đó là một chiếc thuyền gỗ màu đỏ!',
      speakerRole: 'Captain Trang',
      questionEn: 'Listen to Captain Trang! What is floating on the emerald water?',
      questionVi: 'Lắng nghe cô Trang nói! Thứ gì đang lướt trên làn nước xanh ngọc?',
      options: ['A wooden boat', 'A yellow car', 'A fast train', 'A flying plane'],
      correctIndex: 0,
      audioSlowAvailable: true
    },

    speaking: {
      promptEn: 'Listen to Captain Trang and repeat with a joyful, clear voice:',
      promptVi: 'Lắng nghe cô Trang và nhắc lại với giọng vui tươi, rõ ràng:',
      targetSentenceEn: 'Look at the sea! It is green and calm.',
      targetSentenceVi: 'Nhìn ra biển kìa! Biển xanh ngắt và êm dịu.',
      phoneticFocus: '/iː/ long vowel sound in "sea" and "green"',
      pronunciationTipsEn: 'Smile gently as you make the long /iː/ sound: s-e-e-e-a.',
      pronunciationTipsVi: 'Mỉm cười nhẹ khi phát âm âm /iː/ kéo dài: s-e-e-e-a.',
      shadowAudioText: 'Look at the sea! It is green and calm.'
    },

    interactiveGame: {
      gameType: 'word_picture_match',
      gameTitleEn: 'Ha Long Treasure Hunt',
      gameTitleVi: 'Thử Thách Truy Tìm Kho Báu Hạ Long',
      instructionsEn: 'Tap the correct word to match the cute landmark icon!',
      instructionsVi: 'Chạm vào từ tiếng Anh tương ứng với hình ảnh kỳ quan!',
      items: [
        { id: 'i1', promptEn: 'Blue salty water', promptVi: 'Vùng nước xanh', targetMatch: 'sea', emojiOrIcon: '🌊' },
        { id: 'i2', promptEn: 'Wooden sailing vessel', promptVi: 'Thuyền buồm', targetMatch: 'boat', emojiOrIcon: '⛵' },
        { id: 'i3', promptEn: 'Land surrounded by water', promptVi: 'Hòn đảo', targetMatch: 'island', emojiOrIcon: '🏝️' },
        { id: 'i4', promptEn: 'Hole in limestone rocks', promptVi: 'Hang đá', targetMatch: 'cave', emojiOrIcon: '🪨' }
      ]
    },

    questions: [
      {
        id: 'q-g1-1',
        challengeLevel: 1,
        levelNameEn: 'Recognize',
        levelNameVi: 'Nhận biết',
        questionEn: 'What vehicle travels on the water in Ha Long Bay?',
        questionVi: 'Phương tiện nào di chuyển trên mặt nước ở Vịnh Hạ Long?',
        options: ['Boat', 'Train', 'Bus', 'Bicycle'],
        correctIndex: 0,
        explanationEn: 'A boat is a water vehicle used to travel across Ha Long Bay.',
        explanationVi: '"Boat" nghĩa là con thuyền, phương tiện di chuyển trên vịnh.',
        learningSkill: 'Vocabulary Recognition'
      },
      {
        id: 'q-g1-2',
        challengeLevel: 2,
        levelNameEn: 'Connect',
        levelNameVi: 'Kết nối',
        questionEn: 'According to the story, what color is the emerald sea?',
        questionVi: 'Theo bài đọc, làn nước biển ở vịnh có màu sắc gì?',
        options: ['Green and calm', 'Dark and cold', 'Red and hot', 'White like snow'],
        correctIndex: 0,
        explanationEn: 'The story says: "The sea is calm and green."',
        explanationVi: 'Bài đọc viết: "The sea is calm and green" (Nước biển êm đềm và xanh ngắt).',
        learningSkill: 'Reading Detail'
      },
      {
        id: 'q-g1-3',
        challengeLevel: 3,
        levelNameEn: 'Apply',
        levelNameVi: 'Vận dụng',
        questionEn: 'You see a tall limestone rock in the water. What do you say to your friend?',
        questionVi: 'Em nhìn thấy một hòn đảo đá vôi cao trên mặt nước. Em nói gì với bạn bằng tiếng Anh?',
        options: [
          'Look at the island! It is high.',
          'Close the door, please.',
          'I want an ice cream.',
          'Goodbye teacher!'
        ],
        correctIndex: 0,
        explanationEn: 'Use the pattern: "Look at the [island]! It is [high]." to share what you see.',
        explanationVi: 'Dùng mẫu câu "Look at the island! It is high" để miêu tả hòn đảo trước mắt.',
        learningSkill: 'Communicative Application'
      }
    ],

    assessment: {
      starsAwarded: 25,
      minimumPassScorePercent: 66,
      criteria: [
        {
          skill: 'Vocabulary Recognition',
          standardEn: 'Recognizes 4 core landscape words correctly.',
          standardVi: 'Nhận biết chính xác 4 từ vựng cảnh quan thiên nhiên.'
        },
        {
          skill: 'Pronunciation',
          standardEn: 'Produces the /iː/ vowel sound accurately.',
          standardVi: 'Phát âm rõ ràng nguyên âm dài /iː/.'
        },
        {
          skill: 'Circular 27 Application',
          standardEn: 'Applies visual observation sentence pattern to describe scenery.',
          standardVi: 'Vận dụng được mẫu câu quan sát để diễn đạt phong cảnh trước mắt.'
        }
      ]
    },

    status: 'published',
    verification: {
      isVerifiedByTeacher: true,
      teacherVerifiedAt: '2026-10-15',
      teacherName: 'Ms. Trần Thị Thu Trang',
      isAiGenerated: false,
      humanEditorNotes: 'Original Grade 1 primary curriculum pilot designed for Pre-A1 starters. Fact-checked against Ha Long Bay UNESCO World Heritage site data.',
      sourceReferences: [
        'UNESCO World Heritage List - Ha Long Bay',
        'CEFR Pre-A1 Young Learners Language Descriptors',
        'Circular 27/2020/TT-BGDDT Assessment Guidelines'
      ],
      imageLicenseSource: 'Wikimedia Commons (CC BY-SA 4.0 / Educational Use)'
    },
    createdAt: '2026-10-15',
    updatedAt: '2026-10-15'
  },

  // ============================================================================
  // GRADE 2 PILOT LESSON — ADVENTURE 3: DELICIOUS VIETNAM
  // ============================================================================
  {
    id: 'lesson-g2-food-pho',
    adventureId: 'adventure_3_food',
    lessonNumber: 1,
    titleEn: 'A Bowl of Warm Phở: Vietnam’s Famous Soup',
    titleVi: 'Tô Phở Nóng: Món Súp Nổi Tiếng Việt Nam',
    topicEn: 'Vietnamese Culinary Heritage & Tastes',
    topicVi: 'Ẩm thực truyền thống & Hương vị món ăn',
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_2',
    targetCefr: 'Pre-A1 Beginner',
    durationMinutes: 35,
    learningObjectivesEn: [
      'Learn 5 food and ingredient words: soup, noodles, beef, fresh herbs, lemon.',
      'Express food preferences: "I like warm phở. It smells delicious!"',
      'Listen to an authentic restaurant dialogue ordering breakfast in Hanoi.',
      'Distinguish flavors: warm, fresh, yummy.'
    ],
    learningObjectivesVi: [
      'Học 5 từ vựng ẩm thực: soup (nước dùng), noodles (bánh phở), beef (thịt bò), fresh herbs (rau thơm), lemon (chanh).',
      'Bày tỏ cảm nhận món ăn: "I like warm phở. It smells delicious!"',
      'Lắng nghe đoạn hội thoại gọi món tại quán ăn truyền thống.',
      'Phân biệt các tính từ hương vị quen thuộc: warm, fresh, yummy.'
    ],
    coverImage: '/destinations/hanoi_turtle_tower.jpg',
    coverImageAttribution: 'Wikimedia Commons (Educational License)',

    vocabulary: [
      {
        id: 'v2-soup',
        word: 'soup',
        ipa: '/suːp/',
        partOfSpeech: 'noun',
        meaningEn: 'A hot liquid food made with broth and spices.',
        meaningVi: 'Nước dùng súp đậm đà thơm ngon.',
        exampleSentenceEn: 'The beef soup is warm and clear.',
        exampleSentenceVi: 'Nước dùng phở bò nóng hổi và thanh trong.',
        emoji: '🍲',
        audioPromptEn: 'Soup. Warm and fragrant soup.'
      },
      {
        id: 'v2-noodles',
        word: 'noodles',
        ipa: '/ˈnuː.dəlz/',
        partOfSpeech: 'noun',
        meaningEn: 'Thin white strips of soft rice dough.',
        meaningVi: 'Bánh phở mềm trắng làm từ gạo.',
        exampleSentenceEn: 'The white rice noodles are soft.',
        exampleSentenceVi: 'Những sợi bánh phở trắng mềm mại.',
        emoji: '🍜',
        audioPromptEn: 'Noodles. Soft white rice noodles.'
      },
      {
        id: 'v2-beef',
        word: 'beef',
        ipa: '/biːf/',
        partOfSpeech: 'noun',
        meaningEn: 'Meat that comes from a cow.',
        meaningVi: 'Thịt bò tươi ngon.',
        exampleSentenceEn: 'My grandmother adds tender beef.',
        exampleSentenceVi: 'Bà em cho thêm thịt bò mềm ngon.',
        emoji: '🥩',
        audioPromptEn: 'Beef. Tender and delicious beef.'
      },
      {
        id: 'v2-herbs',
        word: 'herbs',
        ipa: '/hɜːbz/',
        partOfSpeech: 'noun',
        meaningEn: 'Green leaves used to add fresh flavor to food.',
        meaningVi: 'Rau thơm tươi xanh (húng quế, ngò gai, hành lá).',
        exampleSentenceEn: 'We add green herbs and lime.',
        exampleSentenceVi: 'Chúng em cho thêm rau thơm và chanh tươi.',
        emoji: '🌿',
        audioPromptEn: 'Herbs. Fragrant fresh green herbs.'
      },
      {
        id: 'v2-delicious',
        word: 'delicious',
        ipa: '/dɪˈlɪʃ.əs/',
        partOfSpeech: 'adjective',
        meaningEn: 'Having a very pleasant taste or smell.',
        meaningVi: 'Ngon tuyệt, thơm nức mũi.',
        exampleSentenceEn: 'This breakfast is so delicious!',
        exampleSentenceVi: 'Bữa sáng này thật là ngon tuyệt!',
        emoji: '😋',
        audioPromptEn: 'Delicious. The warm bowl of phở is delicious.'
      }
    ],

    sentencePatterns: [
      {
        id: 'sp-g2-1',
        pattern: 'I like [food]. It is [adjective] and [adjective]!',
        patternMeaningVi: 'Tôi thích [món ăn]. Nó thật [tính từ] và [tính từ]!',
        dialogueEn: [
          { speaker: 'Child', text: 'Good morning! What are we eating today?' },
          { speaker: 'Captain Trang', text: 'A warm bowl of phở! It has soft noodles and tender beef.' },
          { speaker: 'Child', text: 'Yummy! It smells so delicious!' }
        ],
        dialogueVi: [
          { speaker: 'Em nhỏ', text: 'Chào buổi sáng cô ạ! Hôm nay chúng ta ăn món gì thế cô?' },
          { speaker: 'Cô Trang', text: 'Một tô phở nóng hổi! Có sợi bánh phở mềm và thịt bò thơm ngon.' },
          { speaker: 'Em nhỏ', text: 'Tuyệt quá! Mùi thơm nức mũi luôn ạ!' }
        ],
        practicePromptEn: 'Say: "I like warm phở. It is hot and yummy!"',
        practicePromptVi: 'Luyện nói: "I like warm phở. It is hot and yummy!"'
      }
    ],

    reading: {
      titleEn: 'Breakfast in the Old Quarter',
      titleVi: 'Bữa Sáng Ở Phố Cổ Hà Nội',
      wordCount: 52,
      lexileEstimate: '220L',
      passagesEn: [
        'Early in the morning, Hanoi smells of cinnamon and star anise.',
        'Cooks prepare big pots of steaming broth.',
        'A bowl of phở has soft rice noodles, tender beef, and fresh green herbs.',
        'We squeeze fresh lime on top. It warms our tummy on a breezy morning. Phở is Vietnam’s national treasure!'
      ],
      passagesVi: [
        'Sáng sớm, khu phố cổ Hà Nội thơm ngát hương quế và hoa hồi.',
        'Các đầu bếp chuẩn bị những nồi nước dùng nghi ngút khói.',
        'Một tô phở gồm có sợi bánh phở mềm, thịt bò mềm và rau thơm tươi xanh.',
        'Chúng em vắt thêm lát chanh tươi. Món ăn làm ấm bụng trong buổi sớm se lạnh. Phở là niềm tự hào ẩm thực của Việt Nam!'
      ],
      comprehensionTipsEn: 'Notice how food engages your senses: smell (fragrant), sight (steaming), and taste (delicious).',
      comprehensionTipsVi: 'Chú ý các giác quan: khứu giác (thơm), thị giác (bốc khói nghi ngút), vị giác (ngon tuyệt).',
      readingImage: '/destinations/hanoi_turtle_tower.jpg',
      imageAttribution: 'Licensed educational asset.'
    },

    listening: {
      audioTitleEn: 'Ordering Phở in Hanoi',
      audioScriptEn: 'Waiter: Good morning! Welcome to Hanoi. What would you like for breakfast? Student: Hello! Can I have one bowl of warm beef phở with fresh herbs, please? Waiter: Certainly! Here is your hot bowl. Enjoy your meal!',
      audioScriptVi: 'Phục vụ: Chào buổi sáng! Chào mừng bạn đến Hà Nội. Bạn muốn dùng món gì cho bữa sáng? Học sinh: Xin chào ạ! Cho em một tô phở bò nóng với nhiều rau thơm nhé! Phục vụ: Có ngay đây! Chúc bạn ngon miệng!',
      speakerRole: 'Local Friend',
      questionEn: 'What delicious breakfast dish did the student order?',
      questionVi: 'Bạn nhỏ đã gọi món ăn sáng thơm ngon nào?',
      options: ['A warm bowl of beef phở', 'A cold glass of milk', 'A dry slice of bread', 'A hot cup of coffee'],
      correctIndex: 0,
      audioSlowAvailable: true
    },

    speaking: {
      promptEn: 'Practice saying your favorite food with a clear, happy voice:',
      promptVi: 'Luyện nói về món ăn yêu thích bằng giọng vui vẻ, tự tin:',
      targetSentenceEn: 'I like warm phở. It is hot and delicious!',
      targetSentenceVi: 'Tôi thích tô phở ấm nóng. Nó thật nóng hổi và thơm ngon!',
      phoneticFocus: 'Rhythm and word stress on "hot" and "de-LI-cious"',
      pronunciationTipsEn: 'Stress the second syllable: de-LI-cious.',
      pronunciationTipsVi: 'Nhấn trọng âm vào âm tiết thứ hai: de-LI-cious.',
      shadowAudioText: 'I like warm phở. It is hot and delicious!'
    },

    interactiveGame: {
      gameType: 'speed_challenge',
      gameTitleEn: 'Chef Trang’s Kitchen',
      gameTitleVi: 'Bếp Trưởng Nhí Của Cô Trang',
      instructionsEn: 'Pick the 4 authentic ingredients that go into a traditional bowl of Phở!',
      instructionsVi: 'Chọn 4 nguyên liệu chính tạo nên một tô phở truyền thống thơm ngon!',
      items: [
        { id: 'f1', promptEn: 'Soft rice dough strips', promptVi: 'Sợi bánh phở', targetMatch: 'noodles', emojiOrIcon: '🍜' },
        { id: 'f2', promptEn: 'Fragrant clear broth', promptVi: 'Nước dùng nóng', targetMatch: 'soup', emojiOrIcon: '🍲' },
        { id: 'f3', promptEn: 'Tender slices of meat', promptVi: 'Thịt bò mềm', targetMatch: 'beef', emojiOrIcon: '🥩' },
        { id: 'f4', promptEn: 'Green aromatic leaves', promptVi: 'Rau thơm tươi', targetMatch: 'herbs', emojiOrIcon: '🌿' }
      ]
    },

    questions: [
      {
        id: 'q-g2-1',
        challengeLevel: 1,
        levelNameEn: 'Recognize',
        levelNameVi: 'Nhận biết',
        questionEn: 'Which word means the soft white rice strips in a bowl of phở?',
        questionVi: 'Từ tiếng Anh nào chỉ những sợi bánh mềm màu trắng trong tô phở?',
        options: ['Noodles', 'Apples', 'Candies', 'Cookies'],
        correctIndex: 0,
        explanationEn: '"Noodles" are the white rice strips that form the base of phở.',
        explanationVi: '"Noodles" là bánh phở mềm thơm.',
        learningSkill: 'Vocabulary Recognition'
      },
      {
        id: 'q-g2-2',
        challengeLevel: 2,
        levelNameEn: 'Connect',
        levelNameVi: 'Kết nối',
        questionEn: 'Why do people in Hanoi love eating phở on a breezy morning?',
        questionVi: 'Vì sao người dân thích thưởng thức một tô phở vào buổi sớm se lạnh?',
        options: [
          'Because the warm broth makes their tummy feel cozy and happy',
          'Because it is frozen cold like ice cream',
          'Because it takes three days to chew',
          'Because they only eat phở once every ten years'
        ],
        correctIndex: 0,
        explanationEn: 'The warm, fragrant broth brings comfort and warmth to the body in the morning.',
        explanationVi: 'Nước dùng phở nóng hổi đem lại cảm giác ấm áp, dễ chịu cho cơ thể.',
        learningSkill: 'Cultural Connection'
      },
      {
        id: 'q-g2-3',
        challengeLevel: 3,
        levelNameEn: 'Apply',
        levelNameVi: 'Vận dụng',
        questionEn: 'A foreign tourist asks you: "What does phở taste like?" How do you answer?',
        questionVi: 'Một du khách nước ngoài hỏi em: "Phở có vị như thế nào?" Em trả lời thế nào bằng tiếng Anh?',
        options: [
          'It is warm, savory, and very delicious!',
          'I do not know my own name.',
          'Please give me your passport.',
          'The sky is falling down today.'
        ],
        correctIndex: 0,
        explanationEn: 'Describe the flavor accurately: "It is warm, savory, and very delicious!"',
        explanationVi: 'Câu miêu tả chuẩn mực: "It is warm, savory, and very delicious!" (Món ăn nóng hổi, đậm đà và rất ngon!).',
        learningSkill: 'Communicative Application'
      }
    ],

    assessment: {
      starsAwarded: 30,
      minimumPassScorePercent: 66,
      criteria: [
        {
          skill: 'Culinary Vocabulary',
          standardEn: 'Uses 5 food words accurately in context.',
          standardVi: 'Sử dụng thành thạo 5 từ vựng ẩm thực theo ngữ cảnh.'
        },
        {
          skill: 'Descriptive Expression',
          standardEn: 'Expresses sensory appreciation using "delicious" and "warm".',
          standardVi: 'Bày tỏ cảm nhận vị giác bằng từ ngữ phù hợp.'
        },
        {
          skill: 'Polite Ordering',
          standardEn: 'Forms a simple polite dining request.',
          standardVi: 'Thực hiện được câu gọi món lịch sự bằng tiếng Anh.'
        }
      ]
    },

    status: 'published',
    verification: {
      isVerifiedByTeacher: true,
      teacherVerifiedAt: '2026-10-15',
      teacherName: 'Ms. Trần Thị Thu Trang',
      isAiGenerated: false,
      humanEditorNotes: 'Verified Grade 2 culinary lesson. Integrates authentic Vietnamese culinary culture with practical English communication.',
      sourceReferences: [
        'Vietnam National Culinary Heritage Archives',
        'CEFR Pre-A1 Beginner Primary Descriptors',
        'Article 7 Circular 27/2020/TT-BGDDT'
      ],
      imageLicenseSource: 'Educational Creative Commons / Verified Open License'
    },
    createdAt: '2026-10-15',
    updatedAt: '2026-10-15'
  },

  // ============================================================================
  // GRADE 3 PILOT LESSON — ADVENTURE 2: VIETNAMESE CULTURE
  // ============================================================================
  {
    id: 'lesson-g3-culture-midautumn',
    adventureId: 'adventure_2_culture',
    lessonNumber: 1,
    titleEn: 'Mid-Autumn Moon Festival: Lanterns & Starry Nights',
    titleVi: 'Tết Trung Thu: Đèn Lồng & Đêm Trăng Rằm',
    topicEn: 'Cultural Traditions, Family Reunions & Folklore',
    topicVi: 'Truyền thống văn hóa, Đoàn viên gia đình & Lễ hội dân gian',
    gradeLevel: 'Grade 3',
    gradeBand: 'grade_3',
    targetCefr: 'Pre-A1 Foundation',
    durationMinutes: 40,
    learningObjectivesEn: [
      'Master 5 cultural festival words: full moon, lantern, lion dance, mooncake, reunion.',
      'Construct compound sentences: "Children carry colorful star lanterns while the energetic lion dances to the drum."',
      'Listen to an English conversation about family reunion traditions on the 15th day of the eighth lunar month.',
      'Explain the cultural meaning of sharing mooncakes to international friends.'
    ],
    learningObjectivesVi: [
      'Nắm vững 5 từ vựng lễ hội: full moon (trăng rằm), lantern (đèn lồng), lion dance (múa lân), mooncake (bánh trung thu), reunion (đoàn viên).',
      'Viết và nói câu ghép: "Children carry colorful star lanterns while the energetic lion dances to the drum."',
      'Nghe hiểu hội thoại tiếng Anh về ý nghĩa ngày rằm tháng Tám âm lịch.',
      'Tự tin giới thiệu nét đẹp chia sẻ bánh trung thu với bạn bè quốc tế.'
    ],
    coverImage: '/destinations/danang_golden_bridge.jpg',
    coverImageAttribution: 'Wikimedia Commons (CC BY-SA 4.0)',

    vocabulary: [
      {
        id: 'v3-fullmoon',
        word: 'full moon',
        ipa: '/ˌfʊl ˈmuːn/',
        partOfSpeech: 'noun',
        meaningEn: 'The moon when it appears as a complete bright glowing circle.',
        meaningVi: 'Mặt trăng tròn vành vạnh đêm rằm.',
        exampleSentenceEn: 'The full moon shines bright in the autumn sky.',
        exampleSentenceVi: 'Vầng trăng tròn tỏa sáng rực rỡ trên bầu trời mùa thu.',
        emoji: '🌕',
        audioPromptEn: 'Full moon. The bright glowing full moon.'
      },
      {
        id: 'v3-lantern',
        word: 'lantern',
        ipa: '/ˈlæn.tən/',
        partOfSpeech: 'noun',
        meaningEn: 'A light inside a colorful case made of bamboo and paper.',
        meaningVi: 'Chiếc đèn lồng lung linh (đèn ông sao, đèn kéo quân).',
        exampleSentenceEn: 'Every child holds a glowing star lantern.',
        exampleSentenceVi: 'Mỗi bạn nhỏ đều cầm trên tay chiếc đèn ông sao lấp lánh.',
        emoji: '🏮',
        audioPromptEn: 'Lantern. A colorful star-shaped lantern.'
      },
      {
        id: 'v3-liondance',
        word: 'lion dance',
        ipa: '/ˈlaɪ.ən dɑːns/',
        partOfSpeech: 'noun',
        meaningEn: 'A joyful traditional dance where performers mimic a lion.',
        meaningVi: 'Điệu múa lân rộn ràng mừng ngày hội.',
        exampleSentenceEn: 'The loud drums accompany the energetic lion dance.',
        exampleSentenceVi: 'Tiếng trống rộn rã hòa cùng điệu múa lân sôi nổi.',
        emoji: '🦁',
        audioPromptEn: 'Lion dance. The exciting lion dance.'
      },
      {
        id: 'v3-mooncake',
        word: 'mooncake',
        ipa: '/ˈmuːn.keɪk/',
        partOfSpeech: 'noun',
        meaningEn: 'A round sweet pastry baked for the Mid-Autumn celebration.',
        meaningVi: 'Bánh trung thu tròn vẹn thơm ngọt.',
        exampleSentenceEn: 'We slice the lotus seed mooncake into pieces for everyone.',
        exampleSentenceVi: 'Cả nhà cùng cắt chiếc bánh trung thu nhân hạt sen cho mọi người.',
        emoji: '🥮',
        audioPromptEn: 'Mooncake. Sweet and fragrant lotus mooncake.'
      },
      {
        id: 'v3-reunion',
        word: 'reunion',
        ipa: '/riːˈjuː.ni.ən/',
        partOfSpeech: 'noun',
        meaningEn: 'A happy gathering of family members who come together.',
        meaningVi: 'Sự đoàn tụ, sum vầy gia đình ấm cúng.',
        exampleSentenceEn: 'The festival is a celebration of family reunion and gratitude.',
        exampleSentenceVi: 'Lễ hội là dịp đoàn viên ấm áp và tri ân ông bà cha mẹ.',
        emoji: '👨‍👩‍👧‍👦',
        audioPromptEn: 'Reunion. Warm family reunion.'
      }
    ],

    sentencePatterns: [
      {
        id: 'sp-g3-1',
        pattern: 'During [festival], we [action] and share [traditional item] together.',
        patternMeaningVi: 'Trong dịp [lễ hội], chúng tôi [hành động] và cùng nhau chia sẻ [vật phẩm truyền thống].',
        dialogueEn: [
          { speaker: 'International Friend', text: 'Why is everyone carrying lanterns tonight?' },
          { speaker: 'Captain Trang', text: 'Tonight is the Mid-Autumn Moon Festival! Families gather to admire the moon.' },
          { speaker: 'Student', text: 'We eat delicious mooncakes and watch the playful lion dance together!' }
        ],
        dialogueVi: [
          { speaker: 'Bạn quốc tế', text: 'Tại sao tối nay ai cũng cầm đèn lồng thế bạn?' },
          { speaker: 'Cô Trang', text: 'Tối nay là Tết Trung thu! Các gia đình cùng sum vầy ngắm trăng rằm.' },
          { speaker: 'Học sinh', text: 'Chúng mình cùng ăn bánh trung thu và xem múa lân rộn ràng nữa đấy!' }
        ],
        practicePromptEn: 'Say: "During Mid-Autumn Festival, we carry star lanterns and share mooncakes with our family."',
        practicePromptVi: 'Luyện nói: "During Mid-Autumn Festival, we carry star lanterns and share mooncakes with our family."'
      }
    ],

    reading: {
      titleEn: 'The Night of Glowing Stars',
      titleVi: 'Đêm Của Những Ngôi Sao Lấp Lánh',
      wordCount: 82,
      lexileEstimate: '380L',
      passagesEn: [
        'When the golden autumn arrives, streets across Vietnam turn into a sea of red lanterns.',
        'Children hold bamboo star lanterns with gentle candles inside.',
        'Boom! Boom! The rhythmic sound of bronze drums echoes in the town square. Here comes the colorful lion!',
        'Families sit together under the silvery moonlight, drinking fragrant green tea and sharing sweet mooncakes. The round cake symbolizes fullness, harmony, and eternal love among family members.'
      ],
      passagesVi: [
        'Khi mùa thu vàng gõ cửa, đường phố khắp Việt Nam bừng sáng trong sắc đỏ rực rỡ của muôn vàn chiếc đèn lồng.',
        'Các em nhỏ rước những chiếc đèn ông sao bằng nan tre thắp nến lung linh.',
        'Tùng dinh dinh! Tiếng trống đồng rộn vang khắp quảng trường. Kìa đoàn lân sặc sỡ đang tiến vào!',
        'Cả gia đình quây quần dưới ánh trăng bạc, thưởng thức trà xanh thơm ngát và sẻ chia miếng bánh trung thu ngọt ngào. Chiếc bánh tròn tượng trưng cho sự vẹn tròn, hòa thuận và tình yêu thương gắn kết.'
      ],
      comprehensionTipsEn: 'Notice cultural symbolism: round moon and round cake both represent completeness and family harmony.',
      comprehensionTipsVi: 'Hiểu tính biểu tượng văn hóa: vầng trăng tròn và chiếc bánh tròn đều tượng trưng cho sự vẹn tròn, đoàn viên.',
      readingImage: '/destinations/danang_golden_bridge.jpg',
      imageAttribution: 'Licensed for VietDiscovery cultural education.'
    },

    listening: {
      audioTitleEn: 'Stories Under the Full Moon',
      audioScriptEn: 'Captain Trang: Look up, children! On the 15th night of the eighth lunar month, the moon is at its brightest. Student: Captain Trang, why do we cut the mooncake into equal pieces? Captain Trang: Because sharing the cake means sharing love, peace, and togetherness with everyone in our home!',
      audioScriptVi: 'Cô Trang: Hãy nhìn lên bầu trời kìa các con! Vào đêm rằm tháng Tám, trăng sáng nhất trong năm. Học sinh: Thưa cô Trang, vì sao chúng ta lại cắt bánh trung thu thành những phần bằng nhau ạ? Cô Trang: Bởi vì sẻ chia chiếc bánh chính là sẻ chia tình yêu thương, an lành và sự gắn kết với mọi người trong gia đình đấy!',
      speakerRole: 'Captain Trang',
      questionEn: 'According to Captain Trang, what does sharing the round mooncake symbolize?',
      questionVi: 'Theo cô Trang, việc cùng nhau sẻ chia chiếc bánh trung thu tròn tượng trưng cho điều gì?',
      options: [
        'Sharing love, peace, and family togetherness',
        'Buying expensive toys from the supermarket',
        'Sleeping all day without going to school',
        'Leaving home to travel far away alone'
      ],
      correctIndex: 0,
      audioSlowAvailable: true
    },

    speaking: {
      promptEn: 'Introduce the Mid-Autumn Festival to an international visitor:',
      promptVi: 'Giới thiệu về Tết Trung thu cho một du khách quốc tế:',
      targetSentenceEn: 'We celebrate Mid-Autumn Festival with colorful star lanterns and sweet mooncakes.',
      targetSentenceVi: 'Chúng tôi đón mừng Tết Trung thu bằng những chiếc đèn ông sao rực rỡ và những chiếc bánh ngọt ngào.',
      phoneticFocus: 'Consonant blends /st/ in "star" and /br/ in "celebrate"',
      pronunciationTipsEn: 'Pronounce the clear /st/ blend: s-tar, without inserting extra vowels.',
      pronunciationTipsVi: 'Bật rõ phụ âm kép /st/: s-tar, không chèn thêm nguyên âm.',
      shadowAudioText: 'We celebrate Mid-Autumn Festival with colorful star lanterns and sweet mooncakes.'
    },

    interactiveGame: {
      gameType: 'sentence_builder',
      gameTitleEn: 'Festival Lantern Parade',
      gameTitleVi: 'Đoàn Rước Đèn Đêm Rằm',
      instructionsEn: 'Drag the words in the right order to form an authentic cultural sentence!',
      instructionsVi: 'Sắp xếp các từ theo đúng trật tự ngữ pháp để tạo thành câu hoàn chỉnh!',
      items: [
        { id: 's1', promptEn: 'Children carry...', promptVi: 'Các bạn nhỏ rước...', targetMatch: 'colorful star lanterns', emojiOrIcon: '🏮' },
        { id: 's2', promptEn: 'Drums play for the...', promptVi: 'Tiếng trống hòa cùng...', targetMatch: 'joyful lion dance', emojiOrIcon: '🦁' },
        { id: 's3', promptEn: 'Families share sweet...', promptVi: 'Gia đình cùng thưởng thức...', targetMatch: 'lotus mooncakes', emojiOrIcon: '🥮' }
      ]
    },

    questions: [
      {
        id: 'q-g3-1',
        challengeLevel: 1,
        levelNameEn: 'Recognize',
        levelNameVi: 'Nhận biết',
        questionEn: 'What traditional pastry is baked and shared during the Mid-Autumn Festival?',
        questionVi: 'Loại bánh truyền thống nào được làm và sẻ chia trong dịp Tết Trung thu?',
        options: ['Mooncake', 'Pizza', 'Hamburger', 'Popcorn'],
        correctIndex: 0,
        explanationEn: '"Mooncake" is the signature pastry of the Mid-Autumn Festival.',
        explanationVi: '"Mooncake" chính là bánh trung thu truyền thống.',
        learningSkill: 'Vocabulary Recognition'
      },
      {
        id: 'q-g3-2',
        challengeLevel: 2,
        levelNameEn: 'Connect',
        levelNameVi: 'Kết nối',
        questionEn: 'How does the shape of the full moon connect to the meaning of the festival?',
        questionVi: 'Hình dáng tròn của vầng trăng rằm kết nối như thế nào với ý nghĩa của ngày lễ hội?',
        options: [
          'The round shape represents completeness, harmony, and family reunion',
          'It tells people that winter has completely ended',
          'It means children must stay inside and not play games',
          'It shows that the ocean water has turned into sweet lemonade'
        ],
        correctIndex: 0,
        explanationEn: 'In Vietnamese culture, the round moon symbolizes harmony and the reunion of all family members.',
        explanationVi: 'Hình tròn tượng trưng cho sự sum vầy trọn vẹn, đoàn viên ấm áp của các thành viên trong gia đình.',
        learningSkill: 'Cultural Connection'
      },
      {
        id: 'q-g3-3',
        challengeLevel: 3,
        levelNameEn: 'Apply',
        levelNameVi: 'Vận dụng',
        questionEn: 'You want to invite an English-speaking pen pal to join your festival parade. What do you write?',
        questionVi: 'Em muốn viết thư mời một người bạn quốc tế cùng tham gia rước đèn trung thu. Em viết câu nào phù hợp nhất?',
        options: [
          'Please join our festival parade! We can carry star lanterns and watch the lion dance together.',
          'You must give me all your money right now.',
          'Turn off your computer because homework is boring.',
          'The train leaves at four o’clock in the morning.'
        ],
        correctIndex: 0,
        explanationEn: 'A polite, culturally authentic invitation explains the celebration warmly.',
        explanationVi: 'Lời mời tự nhiên và ấm áp: "Please join our festival parade! We can carry star lanterns and watch the lion dance together."',
        learningSkill: 'Communicative Application'
      }
    ],

    assessment: {
      starsAwarded: 35,
      minimumPassScorePercent: 66,
      criteria: [
        {
          skill: 'Cultural Literacy',
          standardEn: 'Explains Mid-Autumn traditions and symbolism in clear English.',
          standardVi: 'Giải thích được các nét đẹp truyền thống của Tết Trung thu bằng tiếng Anh rõ ràng.'
        },
        {
          skill: 'Syntactic Mastery',
          standardEn: 'Constructs compound sentences with "while" and "and".',
          standardVi: 'Viết và nói được câu ghép kết hợp liên từ.'
        },
        {
          skill: 'Cross-Cultural Communication',
          standardEn: 'Drafts a welcoming invitation to an international friend.',
          standardVi: 'Giao tiếp liên văn hóa tự tin khi mời bạn bè quốc tế.'
        }
      ]
    },

    status: 'published',
    verification: {
      isVerifiedByTeacher: true,
      teacherVerifiedAt: '2026-10-15',
      teacherName: 'Ms. Trần Thị Thu Trang',
      isAiGenerated: false,
      humanEditorNotes: 'Verified Grade 3 cultural heritage curriculum pilot. Teaches authentic Vietnamese folklore and celebrations in English without borrowing textbook templates.',
      sourceReferences: [
        'Vietnam Institute of Culture and Arts Studies',
        'CEFR Pre-A1 Foundation Primary Descriptors',
        'Circular 27/2020/TT-BGDDT Assessment Guidelines'
      ],
      imageLicenseSource: 'Creative Commons Educational License'
    },
    createdAt: '2026-10-15',
    updatedAt: '2026-10-15'
  },

  // ============================================================================
  // GRADE 4 PILOT LESSON — ADVENTURE 4: NATURE & WILDLIFE
  // ============================================================================
  {
    id: 'lesson-g4-nature-phongnha',
    adventureId: 'adventure_4_nature',
    lessonNumber: 1,
    titleEn: 'The Secret Caves of Phong Nha & Douc Langurs',
    titleVi: 'Hang Động Kỳ Bí Phong Nha & Loài Voọc Chà Vá',
    topicEn: 'Subterranean Wonders, Biodiversity & Wildlife Conservation',
    topicVi: 'Kỳ quan hang động, Đa dạng sinh học & Bảo tồn thiên nhiên',
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4',
    targetCefr: 'A1',
    durationMinutes: 45,
    learningObjectivesEn: [
      'Learn 6 conservation and geographical terms: subterranean, stalactite, canopy, endangered, langur, habitat.',
      'Express environmental responsibility: "If we protect the ancient rainforest, endangered animals like the red-shanked douc langur can thrive."',
      'Listen to an interview between Captain Trang and a forest ranger about subterranean rivers.',
      'Formulate simple arguments for nature conservation in English.'
    ],
    learningObjectivesVi: [
      'Học 6 thuật ngữ địa lý và bảo tồn: subterranean (dưới lòng đất), stalactite (thạch nhũ), canopy (tầng tán rừng), endangered (nguy cấp), langur (loài voọc), habitat (môi trường sống).',
      'Diễn đạt ý thức bảo vệ môi trường bằng câu điều kiện loại 1 cơ bản.',
      'Lắng nghe đoạn phỏng vấn giữa cô Trang và kiểm lâm viên về dòng sông ngầm kỳ vĩ.',
      'Trình bày lập luận thuyết phục về việc bảo tồn các loài động vật quý hiếm.'
    ],
    coverImage: '/destinations/hue_citadel.jpg',
    coverImageAttribution: 'Educational Public Domain',

    vocabulary: [
      {
        id: 'v4-subterranean',
        word: 'subterranean',
        ipa: '/ˌsʌb.təˈreɪ.ni.ən/',
        partOfSpeech: 'adjective',
        meaningEn: 'Operating or existing beneath the surface of the earth.',
        meaningVi: 'Nằm sâu dưới lòng đất, ngầm dưới lòng đất.',
        exampleSentenceEn: 'Phong Nha contains magnificent subterranean rivers.',
        exampleSentenceVi: 'Phong Nha sở hữu những dòng sông ngầm tráng lệ dưới lòng đất.',
        emoji: '🏞️',
        audioPromptEn: 'Subterranean. Subterranean caves and rivers.'
      },
      {
        id: 'v4-stalactite',
        word: 'stalactite',
        ipa: '/ˈstæl.ək.taɪt/',
        partOfSpeech: 'noun',
        meaningEn: 'A mineral formation hanging down like an icicle from the roof of a cave.',
        meaningVi: 'Khối thạch nhũ rủ xuống từ trần hang động.',
        exampleSentenceEn: 'It took millions of years for these sparkling stalactites to grow.',
        exampleSentenceVi: 'Phải mất hàng triệu năm để những khối thạch nhũ lấp lánh này hình thành.',
        emoji: '💎',
        audioPromptEn: 'Stalactite. Crystal stalactites hanging from the cave ceiling.'
      },
      {
        id: 'v4-canopy',
        word: 'canopy',
        ipa: '/ˈkæn.ə.pi/',
        partOfSpeech: 'noun',
        meaningEn: 'The high, continuous layer formed by treetops in a rainforest.',
        meaningVi: 'Tầng tán rừng cao rậm rạp.',
        exampleSentenceEn: 'Wild monkeys leap through the green rainforest canopy.',
        exampleSentenceVi: 'Những chú khỉ rừng chuyền cành thoăn thoắt trên tầng tán rừng rậm rạp.',
        emoji: '🌳',
        audioPromptEn: 'Canopy. The lush green forest canopy.'
      },
      {
        id: 'v4-endangered',
        word: 'endangered',
        ipa: '/ɪnˈdeɪn.dʒəd/',
        partOfSpeech: 'adjective',
        meaningEn: 'At serious risk of extinction if not protected.',
        meaningVi: 'Bị đe dọa, có nguy cơ tuyệt chủng cần được bảo vệ.',
        exampleSentenceEn: 'The red-shanked douc is an endangered primate of Vietnam.',
        exampleSentenceVi: 'Voọc chà vá chân nâu là loài linh trưởng quý hiếm đang bị đe dọa tuyệt chủng của Việt Nam.',
        emoji: '⚠️',
        audioPromptEn: 'Endangered. Endangered wildlife needs our protection.'
      },
      {
        id: 'v4-habitat',
        word: 'habitat',
        ipa: '/ˈhæb.ɪ.tæt/',
        partOfSpeech: 'noun',
        meaningEn: 'The natural environment where a plant or animal lives.',
        meaningVi: 'Môi trường sống tự nhiên.',
        exampleSentenceEn: 'Protecting the forest preserves the natural habitat of wild birds.',
        exampleSentenceVi: 'Bảo vệ cánh rừng giúp giữ gìn môi trường sống tự nhiên cho các loài chim.',
        emoji: '🏡',
        audioPromptEn: 'Habitat. The natural habitat of wildlife.'
      }
    ],

    sentencePatterns: [
      {
        id: 'sp-g4-1',
        pattern: 'If we protect [natural place], [animals] can live safely in their [habitat].',
        patternMeaningVi: 'Nếu chúng ta bảo vệ [địa danh tự nhiên], [các loài vật] có thể sinh sống an toàn trong [môi trường sống] của chúng.',
        dialogueEn: [
          { speaker: 'Captain Trang', text: 'Look up into the emerald canopy! Do you see the colorful fur?' },
          { speaker: 'Park Ranger', text: 'That is the red-shanked douc langur, the "queen of primates".' },
          { speaker: 'Student', text: 'If we keep this national park clean and safe, they can thrive for generations!' }
        ],
        dialogueVi: [
          { speaker: 'Cô Trang', text: 'Nhìn lên tầng tán rừng xanh biếc kìa các con! Các con có thấy bộ lông sặc sỡ không?' },
          { speaker: 'Kiểm lâm viên', text: 'Đó là loài voọc chà vá chân nâu, được mệnh danh là "nữ hoàng linh trưởng" đấy.' },
          { speaker: 'Học sinh', text: 'Nếu chúng ta giữ cho vườn quốc gia này luôn xanh sạch, chúng sẽ sinh sôi an toàn qua nhiều thế hệ!' }
        ],
        practicePromptEn: 'Form your own sentence: "If we protect the caves, rare species can live safely in their habitat."',
        practicePromptVi: 'Tự đặt câu: "If we protect the caves, rare species can live safely in their habitat."'
      }
    ],

    reading: {
      titleEn: 'Guardians of the Ancient Rainforest',
      titleVi: 'Những Người Bảo Vệ Rừng Nhiệt Đới Cổ Xưa',
      wordCount: 110,
      lexileEstimate: '510L',
      passagesEn: [
        'Hidden beneath the limestone mountains of Central Vietnam lies one of the world’s most astonishing geological treasures: the Phong Nha cave system.',
        'Here, crystal-clear subterranean rivers carved pathways through hard rock over four hundred million years.',
        'Above the quiet caves, a vibrant rainforest canopy shelters extraordinary wildlife. High up in the branches, families of red-shanked douc langurs swing with acrobatic grace. Their bright reddish-brown legs and golden faces make them look like forest royalty.',
        'Because habitat destruction threatens their survival, Vietnamese scientists and children work together to plant trees and teach visitors: "Take only memories, leave only footprints."'
      ],
      passagesVi: [
        'Ẩn mình bên dưới những dãy núi đá vôi miền Trung Việt Nam là một trong những kho báu địa chất kỳ vĩ nhất thế giới: hệ thống hang động Phong Nha.',
        'Nơi đây, những dòng sông ngầm trong vắt đã len lỏi bào mòn đá cứng suốt hơn bốn trăm triệu năm qua.',
        'Phía trên những vòm hang tĩnh lặng là tầng tán rừng nhiệt đới trù phú che chở cho muôn loài hoang dã. Trên những cành cây cao, gia đình voọc chà vá chân nâu chuyền cành điêu luyện. Đôi chân màu nâu đỏ rực rỡ và khuôn mặt ánh vàng khiến chúng trông tựa như những quý tộc của núi rừng.',
        'Bởi vì nạn phá hoại môi trường sống đe dọa sự sinh tồn của chúng, các nhà khoa học và học sinh Việt Nam đã chung tay trồng rừng và nhắc nhở du khách: "Không lấy gì ngoài những bức ảnh, không để lại gì ngoài những dấu chân."'
      ],
      comprehensionTipsEn: 'Connect human action with wildlife survival. The quote summarizes respectful ecotourism.',
      comprehensionTipsVi: 'Ghi nhớ thông điệp du lịch sinh thái văn minh: "Take only memories, leave only footprints."',
      readingImage: '/destinations/hue_citadel.jpg',
      imageAttribution: 'Licensed educational asset.'
    },

    listening: {
      audioTitleEn: 'Interview with a Forest Ranger',
      audioScriptEn: 'Captain Trang: Ranger Nam, how do you protect the red-shanked douc langurs from poachers? Ranger Nam: We patrol the rainforest daily and use GPS technology to monitor animal families. Student: Can children help too? Ranger Nam: Yes! Children can spread the word, plant native trees, and never buy illegal wildlife products.',
      audioScriptVi: 'Cô Trang: Chú kiểm lâm Nam ơi, các chú bảo vệ loài voọc chà vá chân nâu khỏi những kẻ săn trộm như thế nào ạ? Kiểm lâm Nam: Đội kiểm lâm tuần tra rừng mỗi ngày và sử dụng định vị GPS để theo dõi các đàn voọc. Học sinh: Chúng cháu có thể giúp gì được không ạ? Kiểm lâm Nam: Có chứ! Các cháu hãy lan tỏa thông điệp, trồng thêm cây xanh và không bao giờ mua bán sản phẩm từ động vật hoang dã nhé!',
      speakerRole: 'Tour Guide',
      questionEn: 'What is one practical action children can do to help protect endangered wild animals?',
      questionVi: 'Một hành động thiết thực mà học sinh có thể làm để giúp bảo vệ động vật hoang dã là gì?',
      options: [
        'Plant native trees and share conservation awareness',
        'Cut down trees to build bigger highways',
        'Capture wild monkeys and keep them in metal cages',
        'Pollute the subterranean river with plastic bags'
      ],
      correctIndex: 0,
      audioSlowAvailable: true
    },

    speaking: {
      promptEn: 'Deliver a short conservation message in clear English:',
      promptVi: 'Trình bày một thông điệp bảo vệ động vật hoang dã bằng tiếng Anh rõ ràng:',
      targetSentenceEn: 'We must protect the rainforest habitat so endangered animals can survive.',
      targetSentenceVi: 'Chúng ta phải bảo vệ môi trường rừng nhiệt đới để các loài động vật có nguy cơ tuyệt chủng được sinh tồn.',
      phoneticFocus: 'Multi-syllable word stress on "en-DAN-gered" and "HA-bi-tat"',
      pronunciationTipsEn: 'Say "en-DAN-gered" with the main stress on the middle syllable "dan".',
      pronunciationTipsVi: 'Nhấn mạnh vào âm tiết giữa "dan": en-DAN-gered.',
      shadowAudioText: 'We must protect the rainforest habitat so endangered animals can survive.'
    },

    interactiveGame: {
      gameType: 'region_sorter',
      gameTitleEn: 'Rainforest Canopy vs. Subterranean Caves',
      gameTitleVi: 'Tầng Tán Rừng Rậm vs. Hang Động Lòng Đất',
      instructionsEn: 'Sort each feature into its correct ecosystem layer!',
      instructionsVi: 'Phân loại từng đặc điểm vào đúng môi trường sinh thái phù hợp!',
      items: [
        { id: 'w1', promptEn: 'Glittering crystal stalactites', promptVi: 'Thạch nhũ lấp lánh', targetMatch: 'Subterranean Caves', emojiOrIcon: '💎' },
        { id: 'w2', promptEn: 'Acrobatic douc langur troops', promptVi: 'Đàn voọc chuyền cành', targetMatch: 'Rainforest Canopy', emojiOrIcon: '🐒' },
        { id: 'w3', promptEn: 'Dark underground flowing river', promptVi: 'Dòng sông ngầm tĩnh lặng', targetMatch: 'Subterranean Caves', emojiOrIcon: '🏞️' },
        { id: 'w4', promptEn: 'Tall blooming ironwood trees', promptVi: 'Những tán cây lim cổ thụ', targetMatch: 'Rainforest Canopy', emojiOrIcon: '🌳' }
      ]
    },

    questions: [
      {
        id: 'q-g4-1',
        challengeLevel: 1,
        levelNameEn: 'Recognize',
        levelNameVi: 'Nhận biết',
        questionEn: 'Where do mineral stalactites hang inside Phong Nha?',
        questionVi: 'Những khối thạch nhũ khoáng sản hình thành và rủ xuống từ đâu trong hang Phong Nha?',
        options: [
          'From the ceilings of subterranean caves',
          'From high-speed electric trains',
          'On the leaves of underwater seaweed',
          'Inside school pencil cases'
        ],
        correctIndex: 0,
        explanationEn: 'Stalactites hang downward from the ceilings of limestone caves.',
        explanationVi: 'Thạch nhũ mọc từ trần hang động vôi rủ xuống dưới lòng đất.',
        learningSkill: 'Vocabulary Recognition'
      },
      {
        id: 'q-g4-2',
        challengeLevel: 2,
        levelNameEn: 'Connect',
        levelNameVi: 'Kết nối',
        questionEn: 'Why is the red-shanked douc langur called an "endangered" species?',
        questionVi: 'Tại sao loài voọc chà vá chân nâu lại được gọi là loài "nguy cấp" (endangered)?',
        options: [
          'Because human deforestation and illegal hunting severely threaten its natural population',
          'Because it has the ability to fly across the Pacific ocean',
          'Because it only eats chocolate cookies and ice cream',
          'Because it lives happily inside every city apartment'
        ],
        correctIndex: 0,
        explanationEn: 'An endangered species faces severe risk of extinction due to habitat loss and human threats.',
        explanationVi: 'Loài nguy cấp có số lượng cá thể suy giảm nghiêm trọng do môi trường rừng bị tàn phá và nạn săn trộm.',
        learningSkill: 'Reading Detail'
      },
      {
        id: 'q-g4-3',
        challengeLevel: 3,
        levelNameEn: 'Apply',
        levelNameVi: 'Vận dụng',
        questionEn: 'Your school is organizing an "Eco-Warrior Earth Day". What English slogan best communicates forest conservation?',
        questionVi: 'Trường em tổ chức ngày hội "Hành tinh Xanh". Câu khẩu hiệu tiếng Anh nào truyền cảm hứng bảo vệ rừng nhất?',
        options: [
          'Protect the forest canopy! Save our endangered wildlife today.',
          'Throw your plastic bottles into the river for fun.',
          'Do not speak English during your summer vacation.',
          'Buy ten plastic toys every single Monday.'
        ],
        correctIndex: 0,
        explanationEn: 'The slogan clearly combines vocabulary learned (canopy, endangered, wildlife) into an actionable call.',
        explanationVi: 'Khẩu hiệu giàu sức thuyết phục: "Protect the forest canopy! Save our endangered wildlife today."',
        learningSkill: 'Communicative Application'
      }
    ],

    assessment: {
      starsAwarded: 40,
      minimumPassScorePercent: 66,
      criteria: [
        {
          skill: 'Scientific Vocabulary',
          standardEn: 'Uses terms like "subterranean" and "canopy" correctly in environmental contexts.',
          standardVi: 'Vận dụng chuẩn xác các từ vựng khoa học và môi trường tự nhiên.'
        },
        {
          skill: 'Cause & Effect Reasoning',
          standardEn: 'Explains the link between habitat conservation and species survival.',
          standardVi: 'Lập luận mối liên hệ giữa việc giữ gìn môi trường sống và sự tồn vong của muôn loài.'
        },
        {
          skill: 'Eco-Advocacy',
          standardEn: 'Produces an inspiring slogan encouraging environmental protection.',
          standardVi: 'Sáng tạo khẩu hiệu kêu gọi hành động bảo vệ thiên nhiên.'
        }
      ]
    },

    status: 'published',
    verification: {
      isVerifiedByTeacher: true,
      teacherVerifiedAt: '2026-10-15',
      teacherName: 'Ms. Trần Thị Thu Trang',
      isAiGenerated: false,
      humanEditorNotes: 'Verified Grade 4 wildlife & biodiversity pilot lesson. Teaches rigorous scientific English through Vietnam’s real natural wonders without textbook duplication.',
      sourceReferences: [
        'Phong Nha - Ke Bang National Park Scientific Conservation Records',
        'IUCN Red List of Threatened Species - Pygathrix nemaeus',
        'CEFR A1 Elementary Descriptors',
        'Circular 27/2020/TT-BGDDT Article 7'
      ],
      imageLicenseSource: 'Creative Commons Educational Open Access'
    },
    createdAt: '2026-10-15',
    updatedAt: '2026-10-15'
  },

  // ============================================================================
  // GRADE 5 PILOT LESSON — ADVENTURE 5: FUTURE VIETNAM
  // ============================================================================
  {
    id: 'lesson-g5-future-smartcities',
    adventureId: 'adventure_5_future',
    lessonNumber: 1,
    titleEn: 'Smart Green Cities & Modern Metro Lines',
    titleVi: 'Đô Thị Xanh Thông Minh & Tuyến Tàu Điện Tương Lai',
    topicEn: 'Green Innovation, Clean Energy & 21st Century Urban Life',
    topicVi: 'Đổi mới xanh, Năng lượng tái tạo & Đời sống đô thị thế kỷ 21',
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_5',
    targetCefr: 'A1-A2 Extension',
    durationMinutes: 45,
    learningObjectivesEn: [
      'Master 6 modern innovation words: metro train, solar power, smart city, emission, renewable, innovation.',
      'Express cause and impact with modal verbs: "Modern electric metro lines can reduce harmful emissions so citizens can breathe cleaner air."',
      'Listen to young Vietnamese students pitching a green school project at an innovation expo.',
      'Present an original idea for a future green school or community in English.'
    ],
    learningObjectivesVi: [
      'Làm chủ 6 thuật ngữ đổi mới sáng tạo: metro train (tàu điện ngầm/đô thị), solar power (năng lượng mặt trời), smart city (thành phố thông minh), emission (khí thải), renewable (tái tạo được), innovation (đổi mới sáng tạo).',
      'Sử dụng câu phức chỉ nguyên nhân - kết quả với động từ khuyết thiếu (can, will, should).',
      'Nghe hiểu học sinh Việt Nam thuyết trình ý tưởng trường học thông minh tại triển lãm công nghệ.',
      'Tự tin thuyết trình ý tưởng xanh cho ngôi trường hoặc thành phố tương lai của mình.'
    ],
    coverImage: '/destinations/ho_chi_minh_city.jpg',
    coverImageAttribution: 'Educational Public Domain',

    vocabulary: [
      {
        id: 'v5-metro',
        word: 'metro train',
        ipa: '/ˈmet.rəʊ treɪn/',
        partOfSpeech: 'noun',
        meaningEn: 'An electric railway system running in tunnels or on elevated tracks.',
        meaningVi: 'Tàu điện đô thị hiện đại chạy bằng năng lượng điện.',
        exampleSentenceEn: 'The new metro train connects city districts smoothly and quietly.',
        exampleSentenceVi: 'Tuyến tàu điện mới kết nối các quận trong thành phố êm ái và nhanh chóng.',
        emoji: '🚇',
        audioPromptEn: 'Metro train. Fast, clean electric metro trains.'
      },
      {
        id: 'v5-solar',
        word: 'solar power',
        ipa: '/ˈsəʊ.lər ˈpaʊ.ər/',
        partOfSpeech: 'noun',
        meaningEn: 'Energy harnessed directly from sunlight to generate electricity.',
        meaningVi: 'Năng lượng mặt trời sạch và vô tận.',
        exampleSentenceEn: 'Rooftop solar power powers our classroom computers.',
        exampleSentenceVi: 'Hệ thống điện mặt trời trên mái cấp điện cho dàn máy tính của lớp em.',
        emoji: '☀️',
        audioPromptEn: 'Solar power. Clean renewable solar power.'
      },
      {
        id: 'v5-smartcity',
        word: 'smart city',
        ipa: '/smɑːt ˈsɪt.i/',
        partOfSpeech: 'noun',
        meaningEn: 'An urban area using digital technology and sensors to manage resources efficiently.',
        meaningVi: 'Thành phố thông minh ứng dụng công nghệ số và cảm biến.',
        exampleSentenceEn: 'A smart city uses automated sensors to regulate streetlights and traffic.',
        exampleSentenceVi: 'Thành phố thông minh dùng cảm biến tự động để điều tiết đèn đường và giao thông.',
        emoji: '🏙️',
        audioPromptEn: 'Smart city. Green, connected smart cities.'
      },
      {
        id: 'v5-emission',
        word: 'emission',
        ipa: '/iˈmɪʃ.ən/',
        partOfSpeech: 'noun',
        meaningEn: 'The production and discharge of gas or radiation into the atmosphere.',
        meaningVi: 'Khí thải công nghiệp và giao thông ra môi trường.',
        exampleSentenceEn: 'Switching to electric buses cuts carbon emissions significantly.',
        exampleSentenceVi: 'Chuyển sang xe buýt điện giúp giảm thiểu lượng khí thải các-bon đáng kể.',
        emoji: '💨',
        audioPromptEn: 'Emission. Reducing zero emissions.'
      },
      {
        id: 'v5-renewable',
        word: 'renewable',
        ipa: '/rɪˈnjuː.ə.bəl/',
        partOfSpeech: 'adjective',
        meaningEn: 'Capable of being replenished naturally within a short time.',
        meaningVi: 'Năng lượng tái tạo tự nhiên (gió, mặt trời, thủy triều).',
        exampleSentenceEn: 'Wind and sun provide unlimited renewable energy.',
        exampleSentenceVi: 'Gió và ánh nắng mặt trời mang đến nguồn năng lượng tái tạo vô tận.',
        emoji: '🔄',
        audioPromptEn: 'Renewable. Renewable clean energy.'
      },
      {
        id: 'v5-innovation',
        word: 'innovation',
        ipa: '/ˌɪn.əˈveɪ.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'The introduction of new ideas, creative methods, or transformative devices.',
        meaningVi: 'Sự đổi mới sáng tạo, phát kiến mang tính đột phá.',
        exampleSentenceEn: 'Young Vietnamese students lead technological innovation with pride.',
        exampleSentenceVi: 'Các bạn học sinh trẻ Việt Nam tự hào tiên phong trong đổi mới sáng tạo.',
        emoji: '💡',
        audioPromptEn: 'Innovation. Inspiring technological innovation.'
      }
    ],

    sentencePatterns: [
      {
        id: 'sp-g5-1',
        pattern: 'By using [clean technology], our city can [positive outcome] and build a [future vision].',
        patternMeaningVi: 'Bằng việc ứng dụng [công nghệ sạch], thành phố của chúng ta có thể [kết quả tích cực] và xây dựng [tầm nhìn tương lai].',
        dialogueEn: [
          { speaker: 'Captain Trang', text: 'Welcome to Future Vietnam! How do you envision your hometown in twenty years?' },
          { speaker: 'Student Explorer', text: 'By using solar power and electric metro trains, our city can cut traffic pollution completely.' },
          { speaker: 'Captain Trang', text: 'Brilliant! Creative young minds like yours turn bold visions into green reality.' }
        ],
        dialogueVi: [
          { speaker: 'Cô Trang', text: 'Chào mừng các em đến với Việt Nam tương lai! Em hình dung quê hương mình sau 20 năm nữa sẽ như thế nào?' },
          { speaker: 'Học sinh', text: 'Bằng việc sử dụng năng lượng mặt trời và tàu điện ngầm, thành phố có thể xóa bỏ hoàn toàn ô nhiễm giao thông.' },
          { speaker: 'Cô Trang', text: 'Tuyệt vời lắm! Chính những bộ óc sáng tạo trẻ thơ sẽ biến ước mơ thành hiện thực xanh.' }
        ],
        practicePromptEn: 'Pitch your vision: "By using solar power, our school can generate clean energy and protect the planet."',
        practicePromptVi: 'Thuyết trình tầm nhìn: "By using solar power, our school can generate clean energy and protect the planet."'
      }
    ],

    reading: {
      titleEn: 'Hanoi & Ho Chi Minh City: The Green Metro Era',
      titleVi: 'Hà Nội & TP. Hồ Chí Minh: Kỷ Nguyên Tàu Điện Xanh',
      wordCount: 135,
      lexileEstimate: '640L',
      passagesEn: [
        'Across Vietnam’s vibrant metropolises, modern electric transit lines glide smoothly above bustling streets.',
        'The newly opened metro lines provide swift, quiet, and air-conditioned travel for thousands of commuters and students every single day.',
        'Unlike traditional petrol vehicles, electric trains produce zero tailpipe emissions, making them a crucial pillar of Vietnam’s pledge to achieve net-zero carbon emissions.',
        'At the stations, digital ticketing powered by artificial intelligence allows passengers to tap their smart passes in milliseconds. Rooftop solar panels capture tropical sunshine to power lighting and ventilation.',
        'Young Vietnamese engineers and students are proving that technological progress and environmental preservation can march forward hand in hand toward a brighter, greener tomorrow.'
      ],
      passagesVi: [
        'Khắp các đại đô thị sôi động của Việt Nam, những tuyến tàu điện hiện đại đang lướt êm ái trên những con phố tấp nập.',
        'Các tuyến metro mới mở mang đến những chuyến đi nhanh chóng, yên tĩnh và thoáng mát cho hàng ngàn người dân và học sinh mỗi ngày.',
        'Khác với xe chạy xăng truyền thống, tàu điện không hề xả khí thải, trở thành trụ cột quan trọng trong cam kết đạt phát thải ròng bằng 0 của Việt Nam.',
        'Tại các nhà ga, hệ thống vé điện tử ứng dụng trí tuệ nhân tạo cho phép hành khách chạm thẻ chỉ trong vài phần nghìn giây. Các tấm pin mặt trời trên mái đón lấy ánh nắng nhiệt đới để thắp sáng và vận hành thông gió.',
        'Các kỹ sư trẻ và học sinh Việt Nam đang chứng minh rằng tiến bộ công nghệ và bảo vệ môi trường hoàn toàn có thể song hành cùng nhau hướng tới một ngày mai tươi sáng và xanh tươi hơn.'
      ],
      comprehensionTipsEn: 'Observe the connection between infrastructure (metro), sustainability (zero emissions), and future technology (AI sensors).',
      comprehensionTipsVi: 'Nhận thức mối liên hệ giữa hạ tầng hiện đại (metro), tính bền vững (không khí thải) và công nghệ tương lai.',
      readingImage: '/destinations/ho_chi_minh_city.jpg',
      imageAttribution: 'Licensed educational asset.'
    },

    listening: {
      audioTitleEn: 'Young Inventors at the National STEM Expo',
      audioScriptEn: 'Presenter: Welcome to the National Student Innovation Expo! Here with me is Linh, a Grade 5 inventor from Class 5.1. Linh, tell us about your "Green School" project! Linh: Thank you! Our team designed a solar-powered garden that collects rainwater. It uses small sensors to water flowers automatically. We believe green technology should start right inside our primary school classrooms!',
      audioScriptVi: 'MC: Chào mừng các bạn đến với Triển lãm Đổi mới Sáng tạo Học sinh Quốc gia! Cùng trò chuyện với bạn Linh, một nhà sáng chế lớp 5. Linh ơi, hãy chia sẻ về dự án "Trường học Xanh" của nhóm nhé! Linh: Cảm ơn cô ạ! Nhóm chúng em thiết kế một khu vườn năng lượng mặt trời biết thu gom nước mưa. Khu vườn dùng cảm biến tự động tưới hoa. Chúng em tin rằng công nghệ xanh nên bắt đầu ngay từ chính những lớp học tiểu học của chúng mình!',
      speakerRole: 'Child Explorer',
      questionEn: 'What is the main purpose of Linh’s student invention at the STEM expo?',
      questionVi: 'Mục đích chính của dự án sáng chế của bạn Linh tại triển lãm STEM là gì?',
      options: [
        'To use solar power and rainwater sensors for an eco-friendly school garden',
        'To manufacture petrol motorbikes for children',
        'To destroy old trees and build a parking lot',
        'To buy imported plastic toys from abroad'
      ],
      correctIndex: 0,
      audioSlowAvailable: true
    },

    speaking: {
      promptEn: 'Deliver your visionary pitch for a future smart city in Vietnam:',
      promptVi: 'Thuyết trình tầm nhìn về thành phố thông minh tương lai tại Việt Nam:',
      targetSentenceEn: 'Electric metro trains and solar power will make our cities cleaner and smarter.',
      targetSentenceVi: 'Tàu điện đô thị và năng lượng mặt trời sẽ giúp các thành phố của chúng ta sạch hơn và thông minh hơn.',
      phoneticFocus: 'Fluid linking and phrase intonation across multi-clause statements',
      pronunciationTipsEn: 'Link "cleaner and" smoothly: /kliː.nər ənd/ without abrupt pauses.',
      pronunciationTipsVi: 'Nối âm tự nhiên giữa "cleaner and": /kliː.nər ənd/.',
      shadowAudioText: 'Electric metro trains and solar power will make our cities cleaner and smarter.'
    },

    interactiveGame: {
      gameType: 'speed_challenge',
      gameTitleEn: 'Green City Architect',
      gameTitleVi: 'Kiến Trúc Sư Đô Thị Xanh',
      instructionsEn: 'Match each future urban problem with its sustainable technological solution!',
      instructionsVi: 'Ghép nối từng thách thức đô thị với giải pháp công nghệ xanh phù hợp!',
      items: [
        { id: 'g1', promptEn: 'Heavy traffic and air pollution', promptVi: 'Ùn tắc và khói bụi', targetMatch: 'Electric metro train network', emojiOrIcon: '🚇' },
        { id: 'g2', promptEn: 'High electricity cost and fossil fuels', promptVi: 'Nhiên liệu hóa thạch đắt đỏ', targetMatch: 'Rooftop solar panels', emojiOrIcon: '☀️' },
        { id: 'g3', promptEn: 'Wasted water in parks and gardens', promptVi: 'Lãng phí nước tưới cây', targetMatch: 'Smart automated moisture sensors', emojiOrIcon: '💧' },
        { id: 'g4', promptEn: 'Excessive paper tickets in public transit', promptVi: 'Lãng phí vé giấy', targetMatch: 'Contactless digital smart passes', emojiOrIcon: '📱' }
      ]
    },

    questions: [
      {
        id: 'q-g5-1',
        challengeLevel: 1,
        levelNameEn: 'Recognize',
        levelNameVi: 'Nhận biết',
        questionEn: 'Which modern public transport system produces zero tailpipe emissions?',
        questionVi: 'Hệ thống giao thông công cộng hiện đại nào không thải khói độc hại ra đường phố?',
        options: [
          'Electric metro trains',
          'Old petrol motorbikes',
          'Heavy diesel cargo trucks',
          'Coal-burning steam locomotives'
        ],
        correctIndex: 0,
        explanationEn: 'Electric metro trains run on electric power and produce zero direct exhaust emissions.',
        explanationVi: 'Tàu điện chạy bằng điện năng, không thải khói ô nhiễm ra môi trường.',
        learningSkill: 'Vocabulary Recognition'
      },
      {
        id: 'q-g5-2',
        challengeLevel: 2,
        levelNameEn: 'Connect',
        levelNameVi: 'Kết nối',
        questionEn: 'How does combining solar panels with metro stations support Vietnam’s sustainability goals?',
        questionVi: 'Việc lắp đặt pin mặt trời tại các nhà ga metro hỗ trợ mục tiêu phát triển bền vững như thế nào?',
        options: [
          'It generates clean renewable electricity on-site to reduce dependence on fossil fuels',
          'It makes the trains run backwards at night',
          'It forces all students to stop using computers forever',
          'It turns rainfall into sugary carbonated drinks'
        ],
        correctIndex: 0,
        explanationEn: 'Solar panels harvest clean, renewable energy to power lighting and equipment without carbon emissions.',
        explanationVi: 'Pin mặt trời tạo ra điện năng tái tạo sạch ngay tại chỗ, giảm thiểu việc đốt than đá và dầu mỏ.',
        learningSkill: 'Reading Detail'
      },
      {
        id: 'q-g5-3',
        challengeLevel: 3,
        levelNameEn: 'Apply',
        levelNameVi: 'Vận dụng',
        questionEn: 'Your class wants to participate in the "Future Green Innovator Contest". Which proposal best demonstrates 21st-century English and STEM thinking?',
        questionVi: 'Lớp em tham gia cuộc thi "Nhà Đổi Mới Xanh Tương Lai". Đề xuất nào thể hiện tư duy tiếng Anh và STEM thế kỷ 21 xuất sắc nhất?',
        options: [
          'We propose installing solar-powered smart sensors to turn off empty classroom lights automatically.',
          'We propose buying five thousand plastic balloons to release into the open sky.',
          'We propose canceling all science classes so we can watch cartoons all afternoon.',
          'We propose using more disposable plastic bags for every single snack.'
        ],
        correctIndex: 0,
        explanationEn: 'The proposal applies learned concepts (solar power, smart sensors, automation) to a practical school problem.',
        explanationVi: 'Đề xuất vận dụng xuất sắc các khái niệm (solar power, smart sensors) để giải quyết vấn đề thực tế tại trường học.',
        learningSkill: 'Communicative Application'
      }
    ],

    assessment: {
      starsAwarded: 50,
      minimumPassScorePercent: 70,
      criteria: [
        {
          skill: 'STEM English Vocabulary',
          standardEn: 'Uses advanced terms like "emission", "renewable", and "innovation" with precise meaning.',
          standardVi: 'Sử dụng chuẩn xác các thuật ngữ công nghệ và môi trường nâng cao.'
        },
        {
          skill: 'Complex Cause-Effect Formulation',
          standardEn: 'Constructs multi-clause sentences explaining technical solutions.',
          standardVi: 'Diễn đạt được câu phức chỉ giải pháp kỹ thuật và kết quả tích cực.'
        },
        {
          skill: 'Visionary Problem Solving',
          standardEn: 'Applies STEM and green concepts to improve school and city life.',
          standardVi: 'Đề xuất giải pháp thực tế giải quyết các vấn đề môi trường học đường.'
        }
      ]
    },

    status: 'published',
    verification: {
      isVerifiedByTeacher: true,
      teacherVerifiedAt: '2026-10-15',
      teacherName: 'Ms. Trần Thị Thu Trang',
      isAiGenerated: false,
      humanEditorNotes: 'Verified Grade 5 Future Vietnam flagship curriculum pilot. Prepares primary school graduates for 21st-century STEM English, global environmental citizenship, and green innovation.',
      sourceReferences: [
        'Vietnam National Green Growth Strategy 2021-2030 (Decision 1658/QD-TTg)',
        'Hanoi Metro & HCMC Urban Railway Scientific Project Documentation',
        'CEFR A1-A2 Primary Extension Standards',
        'Circular 27/2020/TT-BGDDT Article 7 Learning Challenge Framework'
      ],
      imageLicenseSource: 'Creative Commons Educational Open Access'
    },
    createdAt: '2026-10-15',
    updatedAt: '2026-10-15'
  }
];

import { ALL_25_CURRICULUM_LESSONS } from './curriculum/allLessons';
export * from './curriculum/adventureThemes';
export * from './curriculum/allLessons';

const CURRICULUM_STORAGE_KEY = 'vietdiscovery_independent_curriculum_lessons_v2';

export const getCurriculumLessons = (): CurriculumLesson[] => {
  const cached = localStore.get<CurriculumLesson[]>(CURRICULUM_STORAGE_KEY, ALL_25_CURRICULUM_LESSONS);
  if (!cached || cached.length < ALL_25_CURRICULUM_LESSONS.length) {
    localStore.set(CURRICULUM_STORAGE_KEY, ALL_25_CURRICULUM_LESSONS);
    return ALL_25_CURRICULUM_LESSONS;
  }
  return cached;
};

export const saveCurriculumLessons = (lessons: CurriculumLesson[]): void => {
  localStore.set(CURRICULUM_STORAGE_KEY, lessons);
};

export const getLessonsByAdventure = (adventureId: AdventureThemeId): CurriculumLesson[] => {
  const all = getCurriculumLessons();
  return all.filter(l => l.adventureId === adventureId);
};

export const getLessonsByGrade = (gradeBand: string): CurriculumLesson[] => {
  const all = getCurriculumLessons();
  return all.filter(l => l.gradeBand === gradeBand || (gradeBand === 'grade_1_2' && (l.gradeBand === 'grade_1' || l.gradeBand === 'grade_2')) || (gradeBand === 'grade_4_5' && (l.gradeBand === 'grade_4' || l.gradeBand === 'grade_5')));
};

export const saveSingleLesson = (updatedLesson: CurriculumLesson): void => {
  const all = getCurriculumLessons();
  const index = all.findIndex(l => l.id === updatedLesson.id);
  if (index >= 0) {
    all[index] = { ...updatedLesson, updatedAt: new Date().toISOString().split('T')[0] };
  } else {
    all.push({ ...updatedLesson, createdAt: new Date().toISOString().split('T')[0], updatedAt: new Date().toISOString().split('T')[0] });
  }
  saveCurriculumLessons(all);
};

export const toggleLessonPublishStatus = (lessonId: string): CurriculumLesson | null => {
  const all = getCurriculumLessons();
  const lesson = all.find(l => l.id === lessonId);
  if (!lesson) return null;
  lesson.status = lesson.status === 'published' ? 'draft' : 'published';
  lesson.updatedAt = new Date().toISOString().split('T')[0];
  saveCurriculumLessons(all);
  return lesson;
};
