// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE 4 CURRICULUM LESSONS (5 THEMATIC ADVENTURES)
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import { CurriculumLesson } from '../../types/curriculum';

export const GRADE_4_LESSONS: CurriculumLesson[] = [
  {
    "id": "lesson-g4-adv1-places",
    "adventureId": "adventure_1_places",
    "lessonNumber": 1,
    "titleEn": "Vietnam Travel Quest: The Imperial Citadel of Hue",
    "titleVi": "Hành trình khám phá Việt Nam: Đại Nội Huế cổ kính",
    "topicEn": "Imperial Fortresses, Royal Dynasties, and Dragon Boats on Perfume River",
    "topicVi": "Kinh thành hoàng gia, triều đại phong kiến và thuyền rồng sông Hương",
    "gradeLevel": "Grade 4",
    "gradeBand": "grade_4",
    "targetCefr": "A1+ Intermediate",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Acquire 4 historical travel vocabulary terms: citadel, emperor, dynasty, royal.",
      "Use past and present descriptive structures: 'The citadel was built in [year] by [emperor].'",
      "Narrate a cultural travel itinerary along the Perfume River in Hue."
    ],
    "learningObjectivesVi": [
      "Học 4 từ lịch sử du lịch: citadel, emperor, dynasty, royal.",
      "Nói câu miêu tả lịch sử: 'The citadel was built by the Nguyen Dynasty.'",
      "Thuyết minh chuyến du ngoạn trên sông Hương bằng tiếng Anh trôi chảy."
    ],
    "coverImage": "/destinations/hue.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g4_hue_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "The Ancient Capital of Hue: Royal Treasures",
      "titleVi": "Cố đô Huế: Kho báu hoàng triều ngàn năm",
      "durationMinutes": 5,
      "isTeacherCreated": true,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g4-adv1-v1",
        "word": "citadel",
        "ipa": "/ˈsɪt.ə.del/",
        "partOfSpeech": "noun",
        "meaningEn": "A strong historic fortress that protected royal palaces.",
        "meaningVi": "Kinh thành hoàng gia kiên cố.",
        "exampleSentenceEn": "The stone walls of Hue Citadel are surrounded by a moat.",
        "exampleSentenceVi": "Tường đá Đại Nội Huế được bao bọc bởi hào nước sâu.",
        "emoji": "🏰",
        "audioPromptEn": "Citadel. The Imperial Citadel of Hue."
      },
      {
        "id": "g4-adv1-v2",
        "word": "emperor",
        "ipa": "/ˈem.pər.ər/",
        "partOfSpeech": "noun",
        "meaningEn": "The supreme royal ruler of an empire.",
        "meaningVi": "Vị hoàng đế, người đứng đầu triều đại.",
        "exampleSentenceEn": "Emperor Gia Long established Hue as the capital city.",
        "exampleSentenceVi": "Vua Gia Long đã chọn Huế làm kinh đô đất nước.",
        "emoji": "👑",
        "audioPromptEn": "Emperor. The Nguyen Dynasty emperor."
      },
      {
        "id": "g4-adv1-v3",
        "word": "dynasty",
        "ipa": "/ˈdɪn.ə.sti/",
        "partOfSpeech": "noun",
        "meaningEn": "A succession of rulers belonging to the same family.",
        "meaningVi": "Triều đại lịch sử phong kiến.",
        "exampleSentenceEn": "The Nguyen Dynasty ruled Vietnam from 1802 to 1945.",
        "exampleSentenceVi": "Nhà Nguyễn trị vì đất nước từ năm 1802 đến 1945.",
        "emoji": "📜",
        "audioPromptEn": "Dynasty. The historic Nguyen Dynasty."
      },
      {
        "id": "g4-adv1-v4",
        "word": "royal",
        "ipa": "/ˈrɔɪ.əl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Connected with the king, queen, or imperial court.",
        "meaningVi": "Thuộc về hoàng gia, cung đình.",
        "exampleSentenceEn": "We listened to royal court music on a dragon boat.",
        "exampleSentenceVi": "Chúng em lắng nghe nhã nhạc cung đình trên thuyền rồng.",
        "emoji": "🐉",
        "audioPromptEn": "Royal. Royal palaces and gardens."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g4-adv1-sp",
        "pattern": "The [landmark] was built during the [dynasty] and is recognized by UNESCO.",
        "patternMeaningVi": "[Công trình] được xây dựng thời [triều đại] và được UNESCO công nhận.",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What makes the Hue Citadel so special in our history?"
          },
          {
            "speaker": "Explorer",
            "text": "It was the royal capital of the Nguyen Dynasty and is a UNESCO World Heritage site!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Điều gì khiến Đại Nội Huế trở nên đặc biệt trong lịch sử dân tộc?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ nơi đây từng là kinh đô của nhà Nguyễn và là di sản thế giới được UNESCO công nhận ạ!"
          }
        ],
        "practicePromptEn": "The Imperial City of Hue was built beside the peaceful Perfume River.",
        "practicePromptVi": "Hoàng thành Huế được xây dựng bên dòng sông Hương thơ mộng."
      }
    ],
    "reading": {
      "titleEn": "Echoes of the Imperial Capital",
      "titleVi": "Tiếng vọng cố đô ngàn năm",
      "wordCount": 54,
      "passagesEn": [
        "Hue was the imperial capital of Vietnam under the thirteen emperors of the Nguyen Dynasty.",
        "Surrounded by thick stone ramparts and lotus-filled moats, the Forbidden Purple City houses ornate palaces with painted dragon pillars. As evening falls, golden dragon boats drift serenely along the Perfume River, carrying the timeless melodies of royal court music across the water."
      ],
      "passagesVi": [
        "Huế từng là kinh đô của Việt Nam dưới thời mười ba vị vua triều Nguyễn.",
        "Được bao bọc bởi tường thành đá kiên cố và hào sen thơm mát, Tử Cấm Thành lưu giữ những cung điện lộng lẫy với cột gỗ chạm khắc hình rồng. Khi hoàng hôn buông xuống, những chiếc thuyền rồng lướt êm đềm trên sông Hương, đưa giai điệu nhã nhạc cung đình vang vọng khắp mặt nước."
      ],
      "comprehensionTipsEn": "How many emperors ruled from Hue?",
      "comprehensionTipsVi": "Có bao nhiêu vị vua đã trị vì tại kinh đô Huế?",
      "readingImage": "/destinations/hue.jpg"
    },
    "listening": {
      "audioTitleEn": "The Perfume River Dragon Boat Tour",
      "audioScriptEn": "Good afternoon, young historians! We are embarking on our dragon boat along the legendary Perfume River. Ahead lies Thien Mu Pagoda and the imposing gates of the Citadel! Notice the intricate yellow dragon carved on our boat's prow!",
      "audioScriptVi": "Chào buổi chiều các nhà sử học nhí! Chúng ta đang bước lên thuyền rồng xuôi dòng sông Hương huyền thoại. Phía trước là Chùa Thiên Mụ và cổng thành Đại Nội uy nghi! Hãy chú ý hình rồng vàng chạm khắc tinh xảo nơi mũi thuyền!",
      "speakerRole": "Captain Trang",
      "questionEn": "What creature is carved on the prow of the historic tour boat in Hue?",
      "questionVi": "Con vật huyền thoại nào được chạm khắc ở mũi thuyền du ngoạn tại Huế?",
      "options": [
        "A golden dragon",
        "A pink flamingo",
        "A white rabbit",
        "A cartoon panda"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Hue Citadel is a UNESCO World Heritage site!'",
      "promptVi": "Em hãy nói: 'Hue Citadel is a UNESCO World Heritage site!'",
      "targetSentenceEn": "Hue Citadel is a UNESCO World Heritage site!",
      "targetSentenceVi": "Đại Nội Huế là Di sản Văn hóa Thế giới được UNESCO công nhận!",
      "phoneticFocus": "/sɪ/ in citadel and /dɪ/ in dynasty",
      "pronunciationTipsEn": "Pronounce citadel as three syllables: /ˈsɪt.ə.del/.",
      "pronunciationTipsVi": "Phát âm chuẩn xác ba âm tiết: /ˈsɪt.ə.del/ với trọng âm rơi vào âm đầu tiên.",
      "shadowAudioText": "Hue Citadel is a UNESCO World Heritage site!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Royal Heritage Detective",
      "gameTitleVi": "Thám tử hoàng triều Huế",
      "instructionsEn": "Match each royal concept to its historical icon!",
      "instructionsVi": "Nối thuật ngữ hoàng gia với biểu tượng lịch sử tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "citadel",
          "promptVi": "kinh thành hoàng gia",
          "targetMatch": "🏰",
          "emojiOrIcon": "🏰"
        },
        {
          "id": "m2",
          "promptEn": "emperor",
          "promptVi": "vị hoàng đế",
          "targetMatch": "👑",
          "emojiOrIcon": "👑"
        },
        {
          "id": "m3",
          "promptEn": "dynasty",
          "promptVi": "triều đại phong kiến",
          "targetMatch": "📜",
          "emojiOrIcon": "📜"
        },
        {
          "id": "m4",
          "promptEn": "royal",
          "promptVi": "thuộc cung đình",
          "targetMatch": "🐉",
          "emojiOrIcon": "🐉"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g4-adv1-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "Which royal dynasty built the Imperial Citadel of Hue?",
        "questionVi": "Triều đại hoàng gia nào đã xây dựng Kinh thành Huế?",
        "options": [
          "The Nguyen Dynasty",
          "The Roman Empire",
          "The Tudor Dynasty",
          "The Ming Dynasty"
        ],
        "correctIndex": 0,
        "explanationEn": "The Nguyen Dynasty built and ruled from the Hue Citadel.",
        "explanationVi": "Triều Nguyễn ('The Nguyen Dynasty') đã xây dựng và định đô tại Huế.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g4-adv1-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What famous river flows gently past the monuments of Hue?",
        "questionVi": "Dòng sông thơ mộng nổi tiếng nào chảy qua các di tích của cố đô Huế?",
        "options": [
          "The Perfume River (Sông Hương)",
          "The Red River",
          "The Mekong River",
          "The Thames"
        ],
        "correctIndex": 0,
        "explanationEn": "The Perfume River flows through the city of Hue.",
        "explanationVi": "Sông Hương ('The Perfume River') chảy qua lòng thành phố Huế.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g4-adv1-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "How do you explain the global significance of Hue Citadel in English?",
        "questionVi": "Em giải thích tầm quan trọng toàn cầu của Đại Nội Huế bằng tiếng Anh thế nào?",
        "options": [
          "Hue Citadel is recognized by UNESCO as a World Cultural Heritage site.",
          "Hue is just a normal village.",
          "No one visits Hue anymore.",
          "Hue was built yesterday."
        ],
        "correctIndex": 0,
        "explanationEn": "Explaining UNESCO World Cultural Heritage recognition is accurate and prestigious.",
        "explanationVi": "Khẳng định danh hiệu Di sản Thế giới của UNESCO là câu giải thích chuẩn mực và đầy tự hào.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Historical Vocabulary",
          "standardEn": "Identifies citadel, emperor, dynasty, royal.",
          "standardVi": "Nhận diện từ vựng lịch sử cố đô."
        },
        {
          "skill": "Heritage Presentation",
          "standardEn": "Describes UNESCO World Heritage status accurately.",
          "standardVi": "Thuyết minh danh hiệu di sản thế giới chuẩn xác."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 4 Places",
        "UNESCO World Heritage Centre Hue (Ref 678)"
      ],
      "humanEditorNotes": "Grade 4 Adventure 1 Vietnam Travel Quest."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g4-adv2-culture",
    "adventureId": "adventure_2_culture",
    "lessonNumber": 1,
    "titleEn": "Cultural Heritage: The Lantern Town of Hoi An",
    "titleVi": "Di sản văn hóa: Phố cổ đèn lồng Hội An",
    "topicEn": "UNESCO Trading Port, Silk Lanterns, and Japanese Covered Bridge",
    "topicVi": "Thương cảng cổ UNESCO, đèn lồng lụa và Chùa Cầu trăm năm",
    "gradeLevel": "Grade 4",
    "gradeBand": "grade_4",
    "targetCefr": "A1+ Intermediate",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 cultural heritage terms: heritage, ancient, lantern, craft.",
      "Use the sentence pattern: 'Hoi An is famous for its [adjective] [noun].'",
      "Explain how Vietnamese, Japanese, and international traders created Hoi An's unique charm."
    ],
    "learningObjectivesVi": [
      "Học 4 từ di sản văn hóa: heritage, ancient, lantern, craft.",
      "Nói câu: 'Hoi An is famous for its glowing silk lanterns.'",
      "Hiểu lịch sử giao thương quốc tế tạo nên nét độc đáo của phố cổ Hội An."
    ],
    "coverImage": "/destinations/danang.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g4_hoian_video",
      "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
      "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "The Lanterns of Hoi An Ancient Town",
      "titleVi": "Những ngọn đèn lồng lung linh phố cổ Hội An",
      "durationMinutes": 4,
      "isTeacherCreated": false,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g4-adv2-v1",
        "word": "heritage",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "partOfSpeech": "noun",
        "meaningEn": "Valuable traditions and monuments passed down through generations.",
        "meaningVi": "Di sản văn hóa quý báu của dân tộc.",
        "exampleSentenceEn": "Hoi An is a preserved UNESCO cultural heritage site.",
        "exampleSentenceVi": "Hội An là di sản văn hóa được UNESCO bảo tồn nguyên vẹn.",
        "emoji": "🏮",
        "audioPromptEn": "Heritage. World cultural heritage."
      },
      {
        "id": "g4-adv2-v2",
        "word": "ancient",
        "ipa": "/ˈeɪn.ʃənt/",
        "partOfSpeech": "adjective",
        "meaningEn": "Belonging to a time long ago, centuries old.",
        "meaningVi": "Cổ kính, hàng trăm năm tuổi.",
        "exampleSentenceEn": "We walked down the ancient cobblestone street.",
        "exampleSentenceVi": "Chúng em bước trên con phố cổ kính hàng trăm năm.",
        "emoji": "🏛️",
        "audioPromptEn": "Ancient. An ancient trading town."
      },
      {
        "id": "g4-adv2-v3",
        "word": "craft",
        "ipa": "/krɑːft/",
        "partOfSpeech": "noun",
        "meaningEn": "Skillful handmade art such as pottery, silk, or lantern making.",
        "meaningVi": "Nghề thủ công mỹ nghệ tinh xảo.",
        "exampleSentenceEn": "Villagers make silk lanterns with exquisite craft.",
        "exampleSentenceVi": "Người dân làng nghề làm đèn lồng lụa với tay nghề thủ công tinh xảo.",
        "emoji": "🎨",
        "audioPromptEn": "Craft. Traditional handmade craft."
      },
      {
        "id": "g4-adv2-v4",
        "word": "silk",
        "ipa": "/sɪlk/",
        "partOfSpeech": "noun",
        "meaningEn": "A smooth, delicate cloth spun by silkworms.",
        "meaningVi": "Lụa tơ tằm mềm mại, quý phái.",
        "exampleSentenceEn": "Colorful silk gives the lanterns a soft glowing light.",
        "exampleSentenceVi": "Vải lụa muôn màu giúp đèn lồng tỏa ra ánh sáng dịu dàng.",
        "emoji": "🧵",
        "audioPromptEn": "Silk. Smooth Vietnamese silk."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g4-adv2-sp",
        "pattern": "Hoi An is famous for its [adjective] [noun].",
        "patternMeaningVi": "Hội An nổi tiếng với [danh từ] [tính từ] của mình.",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What is Hoi An most famous for at night, Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "Hoi An is famous for its glowing silk lanterns and peaceful canals!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Hội An nổi tiếng nhất về điều gì vào ban đêm vậy em?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ Hội An nổi tiếng với những chiếc đèn lồng lụa lung linh và dòng kênh yên ả ạ!"
          }
        ],
        "practicePromptEn": "Hoi An is famous for its ancient wooden houses.",
        "practicePromptVi": "Hội An nổi tiếng với những ngôi nhà gỗ cổ kính."
      }
    ],
    "reading": {
      "titleEn": "Under the Lantern Glow of Hoi An",
      "titleVi": "Dưới ánh đèn lồng lung linh phố cổ Hội An",
      "wordCount": 56,
      "passagesEn": [
        "From the 15th to the 19th century, Hoi An was one of Southeast Asia's busiest international trading ports.",
        "Today, vehicles are kept outside the historic district. Yellow-walled merchant homes, timber bridges, and thousand-year-old traditions remain lovingly preserved. On full moon nights, electric lights are turned off, and the entire ancient town glows warmly under the magic of colorful silk lanterns."
      ],
      "passagesVi": [
        "Từ thế kỷ 15 đến thế kỷ 19, Hội An từng là một trong những thương cảng quốc tế sầm uất nhất Đông Nam Á.",
        "Ngày nay, xe cơ giới không được đi vào khu phố cổ. Những ngôi nhà thương nhân tường vàng, cây cầu gỗ trăm năm và nếp sống xưa vẫn được gìn giữ nguyên vẹn. Vào đêm rằm, đèn điện nhường chỗ cho muôn vàn chiếc đèn lồng lụa tỏa ánh sáng ấm áp diệu kỳ."
      ],
      "comprehensionTipsEn": "What happens on full moon nights in Hoi An?",
      "comprehensionTipsVi": "Điều gì đặc biệt diễn ra vào đêm rằm ở Hội An?",
      "readingImage": "/destinations/danang.jpg"
    },
    "listening": {
      "audioTitleEn": "A Lantern Artisan in Hoi An",
      "audioScriptEn": "Welcome to my lantern workshop in Hoi An! First, we bend flexible bamboo strips into melon or lotus shapes. Then, we stretch pure Vietnamese silk over the frame. When the candle is lit inside, the warm color lights up your smile!",
      "audioScriptVi": "Chào mừng các em ghé thăm xưởng làm đèn lồng tại Hội An! Đầu tiên, nghệ nhân uốn những nan tre dẻo dai thành hình quả trám hoặc đóa hoa sen. Sau đó, căng lớp lụa tơ tằm mềm mại lên khung. Khi thắp nến bên trong, ánh sáng ấm áp sẽ soi sáng nụ cười của em!",
      "speakerRole": "Local Friend",
      "questionEn": "What natural materials are used to create traditional Hoi An lanterns?",
      "questionVi": "Những nguyên liệu tự nhiên nào được dùng để làm đèn lồng Hội An truyền thống?",
      "options": [
        "Bamboo strips and smooth Vietnamese silk",
        "Heavy iron and concrete",
        "Old newspaper and glue",
        "Plastic bottles"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Hoi An is famous for its glowing lanterns!'",
      "promptVi": "Em hãy nói: 'Hoi An is famous for its glowing lanterns!'",
      "targetSentenceEn": "Hoi An is famous for its glowing lanterns!",
      "targetSentenceVi": "Hội An nổi tiếng với những ngọn đèn lồng lung linh rực rỡ!",
      "phoneticFocus": "/h/ in heritage and /kr/ in craft",
      "pronunciationTipsEn": "Say her-i-tage cleanly with short vowels.",
      "pronunciationTipsVi": "Phát âm từ her-i-tage dứt khoát với ba âm tiết gọn gàng.",
      "shadowAudioText": "Hoi An is famous for its glowing lanterns!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Hoi An Heritage Match",
      "gameTitleVi": "Nối tranh di sản Hội An",
      "instructionsEn": "Match each heritage term to its historic symbol!",
      "instructionsVi": "Nối từ tiếng Anh với biểu tượng phố cổ tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "heritage",
          "promptVi": "di sản văn hóa",
          "targetMatch": "🏮",
          "emojiOrIcon": "🏮"
        },
        {
          "id": "m2",
          "promptEn": "ancient",
          "promptVi": "phố cổ kính",
          "targetMatch": "🏛️",
          "emojiOrIcon": "🏛️"
        },
        {
          "id": "m3",
          "promptEn": "craft",
          "promptVi": "nghề thủ công",
          "targetMatch": "🎨",
          "emojiOrIcon": "🎨"
        },
        {
          "id": "m4",
          "promptEn": "silk",
          "promptVi": "lụa tơ tằm",
          "targetMatch": "🧵",
          "emojiOrIcon": "🧵"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g4-adv2-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What famous material is stretched over the frames of Hoi An lanterns?",
        "questionVi": "Chất liệu quý nổi tiếng nào được bọc trên khung đèn lồng Hội An?",
        "options": [
          "Vietnamese silk",
          "Cardboard",
          "Metal foil",
          "Plastic wrap"
        ],
        "correctIndex": 0,
        "explanationEn": "Vietnamese silk gives Hoi An lanterns their gentle glow.",
        "explanationVi": "Lụa tơ tằm ('Vietnamese silk') tạo nên ánh sáng dịu dàng đặc trưng của đèn lồng Hội An.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g4-adv2-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Why is Hoi An preserved as a UNESCO Cultural Heritage site?",
        "questionVi": "Vì sao Hội An được công nhận và bảo tồn là Di sản Văn hóa Thế giới?",
        "options": [
          "It is an exceptionally well-preserved example of a Southeast Asian trading port",
          "It has the tallest skyscrapers in the world",
          "It is an underwater amusement park",
          "It was built last year"
        ],
        "correctIndex": 0,
        "explanationEn": "Hoi An is an authentic, remarkably preserved historic trading port.",
        "explanationVi": "Hội An là hình mẫu bảo tồn nguyên vẹn xuất sắc của một thương cảng truyền thống Đông Nam Á.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g4-adv2-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Complete the sentence: 'Hoi An is famous ______ its yellow houses and silk lanterns.'",
        "questionVi": "Điền giới từ thích hợp: 'Hoi An is famous ______ its yellow houses and silk lanterns.'",
        "options": [
          "for",
          "at",
          "under",
          "behind"
        ],
        "correctIndex": 0,
        "explanationEn": "'Famous for' is the correct prepositional combination.",
        "explanationVi": "Cụm 'famous for' có nghĩa là nổi tiếng về điều gì.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Heritage Terms",
          "standardEn": "Identifies heritage, ancient, craft, silk.",
          "standardVi": "Nhận diện từ vựng văn hóa di sản."
        },
        {
          "skill": "Cultural Description",
          "standardEn": "Uses 'famous for' accurately.",
          "standardVi": "Sử dụng đúng cấu trúc giới thiệu địa danh."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 4 Culture",
        "UNESCO World Heritage Centre Hoi An (Ref 948)"
      ],
      "humanEditorNotes": "Grade 4 Adventure 2 Cultural Heritage."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g4-adv3-food",
    "adventureId": "adventure_3_food",
    "lessonNumber": 1,
    "titleEn": "Vietnamese Food Tour: Regional Culinary Masterpieces",
    "titleVi": "Chuyến du lịch ẩm thực ba miền: Tinh hoa món ngon Việt Nam",
    "topicEn": "Quang Turmeric Noodles, Hue Spicy Beef Soup, and Mekong Crispy Pancakes",
    "topicVi": "Mì Quảng nghệ vàng, bún bò Huế cay nồng và bánh xèo miền Tây",
    "gradeLevel": "Grade 4",
    "gradeBand": "grade_4",
    "targetCefr": "A1+ Intermediate",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 culinary words: turmeric, broth, pancake, regional.",
      "Use the sentence pattern: 'In [region], people enjoy [dish] with [side].'",
      "Compare regional culinary traditions between North, Central, and South Vietnam."
    ],
    "learningObjectivesVi": [
      "Học 4 từ ẩm thực: turmeric, broth, pancake, regional.",
      "Nói câu so sánh: 'In Central Vietnam, people enjoy spicy broth and turmeric noodles.'",
      "So sánh đặc trưng văn hóa ẩm thực ba miền Bắc - Trung - Nam."
    ],
    "coverImage": "/destinations/danang.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g4_foodtour_video",
      "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
      "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "A Food Tour Across Vietnam: 3 Regions",
      "titleVi": "Hành trình ẩm thực ba miền Bắc Trung Nam",
      "durationMinutes": 5,
      "isTeacherCreated": false,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g4-adv3-v1",
        "word": "turmeric",
        "ipa": "/ˈtɜː.mər.ɪk/",
        "partOfSpeech": "noun",
        "meaningEn": "A fragrant golden root spice that adds vibrant yellow color.",
        "meaningVi": "Củ nghệ tươi tạo sắc vàng óng ả và hương thơm thảo mộc.",
        "exampleSentenceEn": "Turmeric gives Quang noodles their warm golden color.",
        "exampleSentenceVi": "Nghệ tạo cho sợi mì Quảng sắc vàng ấm áp đặc trưng.",
        "emoji": "🧄",
        "audioPromptEn": "Turmeric. Golden fragrant turmeric."
      },
      {
        "id": "g4-adv3-v2",
        "word": "broth",
        "ipa": "/brɒθ/",
        "partOfSpeech": "noun",
        "meaningEn": "A rich flavorful soup simmered slowly with bones and herbs.",
        "meaningVi": "Nước dùng ninh từ xương và thảo quả đậm đà.",
        "exampleSentenceEn": "The beef broth in Hue is simmered with lemongrass and chili.",
        "exampleSentenceVi": "Nước dùng bún bò Huế được ninh thơm lừng với sả và ớt.",
        "emoji": "🍲",
        "audioPromptEn": "Broth. Rich savory broth."
      },
      {
        "id": "g4-adv3-v3",
        "word": "pancake",
        "ipa": "/ˈpæn.keɪk/",
        "partOfSpeech": "noun",
        "meaningEn": "Crispy savory Banh Xeo filled with shrimp and bean sprouts.",
        "meaningVi": "Bánh xèo giòn rụm nhân tôm thịt và giá đỗ.",
        "exampleSentenceEn": "We wrap the crispy pancake in fresh mustard greens.",
        "exampleSentenceVi": "Chúng em cuốn bánh xèo giòn rụm trong lá cải xanh.",
        "emoji": "🥞",
        "audioPromptEn": "Pancake. Crispy Vietnamese pancake."
      },
      {
        "id": "g4-adv3-v4",
        "word": "regional",
        "ipa": "/ˈriː.dʒən.əl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Belonging to a specific geographical area or culture.",
        "meaningVi": "Mang nét đặc trưng của từng vùng miền.",
        "exampleSentenceEn": "Vietnam has rich regional food traditions.",
        "exampleSentenceVi": "Việt Nam có nền ẩm thực vùng miền vô cùng phong phú.",
        "emoji": "🗺️",
        "audioPromptEn": "Regional. Regional flavors of Vietnam."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g4-adv3-sp",
        "pattern": "In [region], the food is known for its [flavor/ingredient].",
        "patternMeaningVi": "Ở miền [vùng], món ăn nổi danh với [hương vị/nguyên liệu] của nó.",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "How do Central and Southern Vietnamese dishes differ, Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "In Central Vietnam, food is bold and spicy, while Southern dishes are sweet and fresh!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Món ăn miền Trung và miền Nam có điểm gì khác biệt vậy em?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ miền Trung đậm đà cay nồng, còn miền Nam ngọt thanh và tươi mát ạ!"
          }
        ],
        "practicePromptEn": "In Central Vietnam, Quang noodles are served with crunchy toasted sesame rice crackers.",
        "practicePromptVi": "Ở miền Trung, mì Quảng được ăn kèm bánh tráng mè nướng giòn tan."
      }
    ],
    "reading": {
      "titleEn": "A Journey of Three Flavors",
      "titleVi": "Hành trình của ba phong vị ẩm thực",
      "wordCount": 55,
      "passagesEn": [
        "Vietnamese cuisine reflects the harmony of geography, climate, and culture across three distinct regions.",
        "In the North, Hanoi Pho offers subtle, delicate, and clear broth. In Central Vietnam, Da Nang’s Quang noodles showcase golden turmeric noodles served with toasted peanuts and rice crackers. In the South, giant crispy Banh Xeo pancakes sizzle with sweet prawns and tropical coconut milk."
      ],
      "passagesVi": [
        "Ẩm thực Việt Nam phản ánh sự hài hòa giữa địa lý, khí hậu và văn hóa của ba miền đất nước.",
        "Ở miền Bắc, phở Hà Nội mang nước dùng thanh tao, tinh tế và trong vắt. Về miền Trung, mì Quảng Đà Nẵng rực rỡ với sợi mì vàng óng từ nghệ, rắc đậu phộng rang và bánh tráng giòn. Vào miền Nam, những chiếc bánh xèo khổng lồ xèo xèo giòn rụm với tôm tươi và nước cốt dừa béo ngậy."
      ],
      "comprehensionTipsEn": "What spice gives Quang noodles their golden color?",
      "comprehensionTipsVi": "Loại gia vị nào tạo nên màu vàng đặc trưng của mì Quảng?",
      "readingImage": "/destinations/danang.jpg"
    },
    "listening": {
      "audioTitleEn": "Food Tour Guide with Captain Trang",
      "audioScriptEn": "Sizzle, sizzle! Can you hear that sound in the kitchen? That is where Banh Xeo gets its lively name! The rice batter hits the hot skillet, cooking thin and crispy around sweet shrimp, pork slices, and crunchy bean sprouts!",
      "audioScriptVi": "Xèo xèo! Các em có nghe thấy âm thanh rộn rã trong bếp không? Đó chính là nguồn gốc tên gọi bánh xèo đấy! Bột gạo chạm chảo gang nóng rực, tạo lớp vỏ mỏng giòn bọc quanh tôm tươi, thịt ngọt và giá đỗ giòn mát!",
      "speakerRole": "Captain Trang",
      "questionEn": "Why is the crispy Vietnamese pancake called 'Banh Xeo'?",
      "questionVi": "Vì sao món bánh pancake giòn của Việt Nam lại có tên gọi là 'Bánh Xèo'?",
      "options": [
        "From the sizzling sound 'xeo-xeo' when poured into the hot pan",
        "It was named after a king",
        "It is very quiet to make",
        "It means ice cream"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Vietnamese cuisine is rich in regional flavors!'",
      "promptVi": "Em hãy nói: 'Vietnamese cuisine is rich in regional flavors!'",
      "targetSentenceEn": "Vietnamese cuisine is rich in regional flavors!",
      "targetSentenceVi": "Ẩm thực Việt Nam vô cùng phong phú hương vị ba miền!",
      "phoneticFocus": "/tɜː/ in turmeric and /br/ in broth",
      "pronunciationTipsEn": "Focus on the long /ɜː/ vowel sound in tur-mer-ic.",
      "pronunciationTipsVi": "Kéo dài âm /ɜː/ trong tur-mer-ic và phát âm âm cuối /θ/ trong broth bằng cách đặt lưỡi giữa hai hàm răng.",
      "shadowAudioText": "Vietnamese cuisine is rich in regional flavors!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Regional Food Explorer",
      "gameTitleVi": "Khám phá ẩm thực ba miền",
      "instructionsEn": "Match each culinary word to its delicious regional dish!",
      "instructionsVi": "Nối từ tiếng Anh với món ăn đặc sắc tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "turmeric",
          "promptVi": "nghệ vàng",
          "targetMatch": "🧄",
          "emojiOrIcon": "🧄"
        },
        {
          "id": "m2",
          "promptEn": "broth",
          "promptVi": "nước dùng ninh",
          "targetMatch": "🍲",
          "emojiOrIcon": "🍲"
        },
        {
          "id": "m3",
          "promptEn": "pancake",
          "promptVi": "bánh xèo giòn",
          "targetMatch": "🥞",
          "emojiOrIcon": "🥞"
        },
        {
          "id": "m4",
          "promptEn": "regional",
          "promptVi": "đặc sản vùng miền",
          "targetMatch": "🗺️",
          "emojiOrIcon": "🗺️"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g4-adv3-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What natural yellow root spice is essential in making authentic Quang noodles?",
        "questionVi": "Loại củ gia vị màu vàng tự nhiên nào không thể thiếu trong món mì Quảng chính gốc?",
        "options": [
          "Turmeric (Nghệ)",
          "Chocolate",
          "Vanilla",
          "Black pepper only"
        ],
        "correctIndex": 0,
        "explanationEn": "Turmeric provides the distinctive golden hue of Quang noodles.",
        "explanationVi": "Nghệ tươi ('Turmeric') tạo nên sắc vàng đặc trưng của sợi mì Quảng.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g4-adv3-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "How do Central Vietnamese dishes like Hue beef soup differ from Northern Pho?",
        "questionVi": "Món ăn miền Trung như bún bò Huế khác với phở miền Bắc ở điểm nào?",
        "options": [
          "Central broths are bolder, spicier, and rich with lemongrass",
          "Central broths have no flavor at all",
          "They are identical in every way",
          "Central food is always frozen"
        ],
        "correctIndex": 0,
        "explanationEn": "Central Vietnamese cuisine favors bold, aromatic spices like lemongrass and chili.",
        "explanationVi": "Ẩm thực miền Trung đậm đà hơn, cay nồng và thơm lừng hương sả ớt ('bolder and spicier').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g4-adv3-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "How do you explain the eating style of Vietnamese Banh Xeo to a foreign tourist?",
        "questionVi": "Em hướng dẫn một du khách nước ngoài cách thưởng thức món bánh xèo như thế nào?",
        "options": [
          "Wrap a piece of crispy pancake with fresh mustard greens and dip in sweet fish sauce.",
          "Drink the whole pancake in one sip.",
          "Throw the herbs away.",
          "Eat it with a giant knife only."
        ],
        "correctIndex": 0,
        "explanationEn": "Wrapping with fresh leafy greens and herbs is the authentic culinary tradition.",
        "explanationVi": "Cuốn bánh xèo trong lá cải xanh cùng rau thơm và chấm nước mắm là cách thưởng thức đúng điệu nhất.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Regional Cuisine Words",
          "standardEn": "Identifies turmeric, broth, pancake, regional.",
          "standardVi": "Nhận diện từ vựng ẩm thực vùng miền."
        },
        {
          "skill": "Culinary Comparison",
          "standardEn": "Compares flavor profiles across Vietnam.",
          "standardVi": "So sánh được đặc trưng ẩm thực ba miền."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 4 Food",
        "Vietnam National Tourism Administration Culinary Heritage Guide"
      ],
      "humanEditorNotes": "Grade 4 Adventure 3 Vietnamese Food Tour."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g4-adv4-nature",
    "adventureId": "adventure_4_nature",
    "lessonNumber": 1,
    "titleEn": "Protect Our Planet: The Karst Wonders of Phong Nha",
    "titleVi": "Bảo vệ hành tinh chúng ta: Kỳ quan Karst Phong Nha",
    "topicEn": "Underground Rivers, Limestone Stalactites, and Rainforest Ecosystems",
    "topicVi": "Sông ngầm, thạch nhũ đá vôi và hệ sinh thái rừng nhiệt đới",
    "gradeLevel": "Grade 4",
    "gradeBand": "grade_4",
    "targetCefr": "A1+ Intermediate",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 geological science terms: cave, stalactite, underground, conservation.",
      "Use the sentence pattern: 'Scientists discovered [noun] that formed over [time].'",
      "Promote eco-tourism ethics and cave preservation in UNESCO natural heritage sites."
    ],
    "learningObjectivesVi": [
      "Học 4 từ khoa học địa chất: cave, stalactite, underground, conservation.",
      "Nói câu: 'Stalactites took millions of years to grow drop by drop.'",
      "Nâng cao ý thức du lịch sinh thái và bảo vệ thạch nhũ trong hang động."
    ],
    "coverImage": "/destinations/phong_nha.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g4_caves_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Protecting Vietnam's Endangered Wildlife & Caves",
      "titleVi": "Bảo vệ động vật hoang dã và kỳ quan hang động Việt Nam",
      "durationMinutes": 5,
      "isTeacherCreated": false,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g4-adv4-v1",
        "word": "cave",
        "ipa": "/keɪv/",
        "partOfSpeech": "noun",
        "meaningEn": "A large natural chamber hollowed out within a mountain or underground.",
        "meaningVi": "Hang động tự nhiên trong lòng núi đá vôi.",
        "exampleSentenceEn": "Phong Nha has some of the longest underground river caves in Asia.",
        "exampleSentenceVi": "Phong Nha sở hữu những hang động có sông ngầm dài nhất châu Á.",
        "emoji": "🕳️",
        "audioPromptEn": "Cave. Ancient limestone cave."
      },
      {
        "id": "g4-adv4-v2",
        "word": "stalactite",
        "ipa": "/ˈstæl.ək.taɪt/",
        "partOfSpeech": "noun",
        "meaningEn": "An icicle-shaped mineral deposit hanging from a cave ceiling.",
        "meaningVi": "Thạch nhũ rủ từ trần hang động xuống.",
        "exampleSentenceEn": "Water drops slowly build magnificent crystal stalactites.",
        "exampleSentenceVi": "Từng giọt nước tí tách kiến tạo nên thạch nhũ pha lê tráng lệ.",
        "emoji": "🪨",
        "audioPromptEn": "Stalactite. Glowing mineral stalactite."
      },
      {
        "id": "g4-adv4-v3",
        "word": "underground",
        "ipa": "/ˌʌn.dəˈɡraʊnd/",
        "partOfSpeech": "adjective",
        "meaningEn": "Located beneath the surface of the earth.",
        "meaningVi": "Dưới lòng đất sâu thẳm.",
        "exampleSentenceEn": "Boats glide silently along the underground river.",
        "exampleSentenceVi": "Thuyền trôi nhẹ nhàng trên dòng sông ngầm dưới lòng đất.",
        "emoji": "🌊",
        "audioPromptEn": "Underground. A mysterious underground river."
      },
      {
        "id": "g4-adv4-v4",
        "word": "conservation",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən/",
        "partOfSpeech": "noun",
        "meaningEn": "The protection of animals, plants, and natural resources.",
        "meaningVi": "Công tác bảo tồn thiên nhiên và di sản.",
        "exampleSentenceEn": "Park rangers enforce strict conservation rules to preserve the caves.",
        "exampleSentenceVi": "Các kiểm lâm viên thực thi quy định bảo tồn nghiêm ngặt để bảo vệ hang động.",
        "emoji": "🌿",
        "audioPromptEn": "Conservation. Environmental conservation."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g4-adv4-sp",
        "pattern": "These [natural features] took [number] of years to form, so we must [action].",
        "patternMeaningVi": "Những [kỳ quan này] mất [khoảng thời gian] để hình thành, vì vậy chúng ta phải [hành động].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "Why must visitors never touch the stalactites in the cave?"
          },
          {
            "speaker": "Explorer",
            "text": "Because they take millions of years to grow and the oils on our hands can damage them!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Vì sao du khách tuyệt đối không được chạm tay vào thạch nhũ trong hang?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ vì thạch nhũ mất hàng triệu năm để lớn lên và mồ hôi tay có thể làm hỏng chúng ạ!"
          }
        ],
        "practicePromptEn": "We must practice sustainable eco-tourism to preserve our national parks.",
        "practicePromptVi": "Chúng ta phải thực hành du lịch sinh thái bền vững để bảo tồn các vườn quốc gia."
      }
    ],
    "reading": {
      "titleEn": "The Ancient Caves of Quang Binh",
      "titleVi": "Kỳ quan hang động cổ tích Quảng Bình",
      "wordCount": 54,
      "passagesEn": [
        "Beneath the rainforest canopy of Phong Nha - Ke Bang National Park lies one of the oldest karst systems in Asia, dating back over 400 million years.",
        "As explorers venture into the dark caverns by boat, majestic stalactites sparkle like diamond curtains. Because these mineral sculptures took millennia to grow, conservation teams work tirelessly to protect this subterranean wonderland for future generations."
      ],
      "passagesVi": [
        "Dưới tán rừng nhiệt đới của Vườn quốc gia Phong Nha - Kẻ Bàng là một trong những hệ thống karst cổ xưa nhất châu Á với niên đại hơn 400 triệu năm.",
        "Khi các nhà thám hiểm đi thuyền vào hang sâu, những khối thạch nhũ lấp lánh như bức rèm kim cương. Vì các tác phẩm khoáng thạch này mất hàng thiên niên kỷ để phát triển, các đội bảo tồn làm việc không ngừng nghỉ để bảo vệ xứ sở kỳ diệu dưới lòng đất cho mai sau."
      ],
      "comprehensionTipsEn": "How old is the karst landscape of Phong Nha?",
      "comprehensionTipsVi": "Cảnh quan karst Phong Nha có niên đại khoảng bao nhiêu năm?",
      "readingImage": "/destinations/phong_nha.jpg"
    },
    "listening": {
      "audioTitleEn": "Inside the Cavern with Captain Trang",
      "audioScriptEn": "Drip... drip... drip... Can you hear that single water droplet falling in the silence? Every drop carries invisible mineral particles. Over hundreds of years, that droplet helps build a glittering stalactite! Never touch them, just admire their ancient beauty!",
      "audioScriptVi": "Tí... tách... tí... tách... Các em có nghe thấy từng giọt nước rơi trong tĩnh lặng không? Mỗi giọt nước mang theo những hạt khoáng chất li ti. Trải qua hàng trăm năm, từng giọt nước ấy đã kiến tạo nên thạch nhũ lấp lánh! Đừng chạm tay vào mà hãy ngắm nhìn vẻ đẹp ngàn năm của chúng nhé!",
      "speakerRole": "Captain Trang",
      "questionEn": "What creates stalactites drop by drop over millions of years?",
      "questionVi": "Yếu tố nào kiến tạo nên thạch nhũ từng giọt một qua hàng triệu năm?",
      "options": [
        "Mineral-rich water droplets falling from the ceiling",
        "Hot kitchen smoke",
        "Paint from brushes",
        "Plastic glue"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'We must protect our natural karst caves!'",
      "promptVi": "Em hãy nói: 'We must protect our natural karst caves!'",
      "targetSentenceEn": "We must protect our natural karst caves!",
      "targetSentenceVi": "Chúng ta phải chung tay bảo vệ các hang động karst tự nhiên!",
      "phoneticFocus": "/st/ in stalactite and /k/ in cave",
      "pronunciationTipsEn": "Remember that stalactite hangs tightly from the ceiling: sta-lac-tite.",
      "pronunciationTipsVi": "Mẹo ghi nhớ: sta-lac-tite rủ từ trần hang xuống, phát âm ba âm tiết rõ ràng.",
      "shadowAudioText": "We must protect our natural karst caves!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Cave Conservation Ranger",
      "gameTitleVi": "Kiểm lâm bảo vệ hang động",
      "instructionsEn": "Match each geological term to its natural wonder!",
      "instructionsVi": "Nối thuật ngữ địa chất với kỳ quan tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "cave",
          "promptVi": "hang động karst",
          "targetMatch": "🕳️",
          "emojiOrIcon": "🕳️"
        },
        {
          "id": "m2",
          "promptEn": "stalactite",
          "promptVi": "thạch nhũ rủ",
          "targetMatch": "🪨",
          "emojiOrIcon": "🪨"
        },
        {
          "id": "m3",
          "promptEn": "underground",
          "promptVi": "dưới lòng đất",
          "targetMatch": "🌊",
          "emojiOrIcon": "🌊"
        },
        {
          "id": "m4",
          "promptEn": "conservation",
          "promptVi": "công tác bảo tồn",
          "targetMatch": "🌿",
          "emojiOrIcon": "🌿"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g4-adv4-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What mineral formation hangs down from the ceiling of a cave?",
        "questionVi": "Cấu trúc khoáng thạch nào rủ từ trần hang động xuống?",
        "options": [
          "A stalactite",
          "A tree branch",
          "A cloud",
          "A wooden chair"
        ],
        "correctIndex": 0,
        "explanationEn": "Stalactites hang down from the cave ceiling.",
        "explanationVi": "Thạch nhũ ('A stalactite') mọc từ trên trần hang rủ xuống dưới.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g4-adv4-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Why should tourists never touch the growing stalactites?",
        "questionVi": "Vì sao khách du lịch tuyệt đối không nên chạm vào thạch nhũ đang phát triển?",
        "options": [
          "Oils and dirt from human hands stop the mineral growth forever",
          "They are made of hot fire",
          "They will fly away like birds",
          "They will turn into bread"
        ],
        "correctIndex": 0,
        "explanationEn": "Human touch deposits oil that prevents minerals from adhering, damaging the formation.",
        "explanationVi": "Chất dầu và mồ hôi tay con người sẽ ngăn khoáng chất bám dính và làm hỏng thạch nhũ vĩnh viễn.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g4-adv4-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "What does 'eco-tourism' encourage visitors to do?",
        "questionVi": "Khái niệm 'du lịch sinh thái' khuyến khích du khách hành động như thế nào?",
        "options": [
          "Take only photos, leave only footprints, and protect nature",
          "Leave plastic trash behind",
          "Break off stalactites to take home",
          "Make loud noise in quiet caves"
        ],
        "correctIndex": 0,
        "explanationEn": "'Take only photos, leave only footprints' is the core rule of eco-conservation.",
        "explanationVi": "'Chỉ chụp những bức ảnh, chỉ để lại những dấu chân' là quy tắc cốt lõi của du lịch sinh thái.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Geological Science Terms",
          "standardEn": "Identifies cave, stalactite, underground, conservation.",
          "standardVi": "Nhận diện từ vựng địa chất hang động."
        },
        {
          "skill": "Environmental Responsibility",
          "standardEn": "Articulates reasons for cave preservation.",
          "standardVi": "Giải thích được trách nhiệm bảo tồn di sản thiên nhiên."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 4 Nature",
        "UNESCO World Heritage Centre Phong Nha - Ke Bang (Ref 951)"
      ],
      "humanEditorNotes": "Grade 4 Adventure 4 Protect Our Planet."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g4-adv5-future",
    "adventureId": "adventure_5_future",
    "lessonNumber": 1,
    "titleEn": "Green Smart Cities: Renewable Energy & Clean Transit",
    "titleVi": "Thành phố thông minh & Xanh: Năng lượng tái tạo & Giao thông sạch",
    "topicEn": "Offshore Wind Farms, Solar Skyscrapers, and Zero-Emission Metro Networks",
    "topicVi": "Trang trại điện gió ngoài khơi, tòa nhà điện mặt trời và mạng lưới metro không khói",
    "gradeLevel": "Grade 4",
    "gradeBand": "grade_4",
    "targetCefr": "A1+ Intermediate",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 green city words: wind turbine, renewable, public transit, zero-emission.",
      "Use the sentence pattern: 'By using [clean tech], our cities can reduce [pollution].'",
      "Debate sustainable solutions for urban modernization in Vietnam."
    ],
    "learningObjectivesVi": [
      "Học 4 từ thành phố xanh: wind turbine, renewable, public transit, zero-emission.",
      "Nói câu giải pháp: 'By using renewable wind energy, our cities can reduce air pollution.'",
      "Đề xuất các ý tưởng xây dựng đô thị thông minh bền vững tại Việt Nam."
    ],
    "coverImage": "/destinations/hanoi.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g4_smartcities_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Vietnam's Modern Cities & Green Future",
      "titleVi": "Các đô thị hiện đại và tương lai xanh của Việt Nam",
      "durationMinutes": 5,
      "isTeacherCreated": true,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g4-adv5-v1",
        "word": "wind turbine",
        "ipa": "/ˈwɪnd ˌtɜː.baɪn/",
        "partOfSpeech": "noun",
        "meaningEn": "A tall tower with giant blades that turns sea wind into electricity.",
        "meaningVi": "Tua-bin điện gió khổng lồ ngoài khơi.",
        "exampleSentenceEn": "Offshore wind turbines spin gracefully along the coast of Ninh Thuan.",
        "exampleSentenceVi": "Tua-bin gió ngoài khơi quay đều dọc bờ biển Ninh Thuận.",
        "emoji": "🌬️",
        "audioPromptEn": "Wind turbine. Offshore wind turbines."
      },
      {
        "id": "g4-adv5-v2",
        "word": "renewable",
        "ipa": "/rɪˈnjuː.ə.bəl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Energy that comes from infinite natural resources like sun and wind.",
        "meaningVi": "Năng lượng tái tạo vô tận và sạch sẽ.",
        "exampleSentenceEn": "Solar and wind power are 100% renewable energy sources.",
        "exampleSentenceVi": "Năng lượng mặt trời và gió là những nguồn năng lượng tái tạo hoàn toàn.",
        "emoji": "♻️",
        "audioPromptEn": "Renewable. Clean renewable energy."
      },
      {
        "id": "g4-adv5-v3",
        "word": "public transit",
        "ipa": "/ˈpʌb.lɪk ˈtræn.zɪt/",
        "partOfSpeech": "noun",
        "meaningEn": "Shared buses, trains, and subways available to all citizens.",
        "meaningVi": "Hệ thống phương tiện giao thông công cộng hiện đại.",
        "exampleSentenceEn": "Efficient public transit reduces city traffic jams.",
        "exampleSentenceVi": "Giao thông công cộng thuận tiện giúp giảm ùn tắc đô thị.",
        "emoji": "🚊",
        "audioPromptEn": "Public transit. Electric public transit."
      },
      {
        "id": "g4-adv5-v4",
        "word": "zero-emission",
        "ipa": "/ˌzɪə.rəʊ iˈmɪʃ.ən/",
        "partOfSpeech": "adjective",
        "meaningEn": "Producing no harmful exhaust gases or pollution.",
        "meaningVi": "Không phát thải khí gây hại ra môi trường.",
        "exampleSentenceEn": "Electric buses provide zero-emission transportation.",
        "exampleSentenceVi": "Xe buýt điện mang lại phương thức di chuyển không phát thải.",
        "emoji": "🌿",
        "audioPromptEn": "Zero-emission. Zero-emission green vehicles."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g4-adv5-sp",
        "pattern": "By using [technology], smart cities can reduce [problem].",
        "patternMeaningVi": "Bằng cách sử dụng [công nghệ], các đô thị thông minh có thể giảm bớt [vấn nạn].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "How can Vietnam's future cities keep our air fresh and clean, Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "By using wind turbines and electric transit, smart cities can eliminate smoke and pollution!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Làm thế nào để các đô thị tương lai của Việt Nam giữ được không khí trong lành?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ bằng cách dùng điện gió và phương tiện điện, các thành phố thông minh sẽ xóa bỏ khói bụi ô nhiễm ạ!"
          }
        ],
        "practicePromptEn": "By using rooftop solar panels, schools can save electricity and teach green science.",
        "practicePromptVi": "Bằng cách lắp pin mặt trời trên mái, trường học có thể tiết kiệm điện và giáo dục khoa học xanh."
      }
    ],
    "reading": {
      "titleEn": "Pioneering Green Cities in Vietnam",
      "titleVi": "Tiên phong xây dựng đô thị xanh Việt Nam",
      "wordCount": 55,
      "passagesEn": [
        "Along the sunny coastlines of Ninh Thuan and Binh Thuan, hundreds of towering white wind turbines harvest sea breezes to power clean modern cities.",
        "In Hanoi and Ho Chi Minh City, elevated metro tracks glide quietly over green streets. With smart sensors turning off unused lights and automated recycling centers, Vietnam’s young generation is turning green technology into a reality."
      ],
      "passagesVi": [
        "Dọc theo bờ biển chan hòa ánh nắng ở Ninh Thuận và Bình Thuận, hàng trăm cột tua-bin gió trắng muốt sừng sững đón gió biển, tạo ra nguồn điện xanh nuôi sống các đô thị hiện đại.",
        "Tại Hà Nội và TP. Hồ Chí Minh, những tuyến tàu điện trên cao lướt êm ả trên các con đường rợp bóng cây. Cùng với cảm biến thông minh tự ngắt điện và các trạm tái chế tự động, thế hệ trẻ Việt Nam đang biến giấc mơ công nghệ xanh thành hiện thực."
      ],
      "comprehensionTipsEn": "Where are major coastal wind farms located in Vietnam?",
      "comprehensionTipsVi": "Những trang trại điện gió ven biển lớn của Việt Nam nằm ở đâu?",
      "readingImage": "/destinations/hanoi.jpg"
    },
    "listening": {
      "audioTitleEn": "Coastal Wind Farm with Captain Trang",
      "audioScriptEn": "Feel the refreshing sea wind! Look at those towering white blades spinning against the deep blue sky! Each rotation of these offshore turbines generates clean, renewable power for thousands of homes without burning coal! This is the future of our nation!",
      "audioScriptVi": "Cùng cảm nhận ngọn gió biển mát rượi nào! Hãy ngắm những cánh quạt trắng khổng lồ đang quay đều trên nền trời xanh biếc! Mỗi vòng quay của tua-bin ngoài khơi tạo ra nguồn năng lượng tái tạo sạch cho hàng ngàn gia đình mà không cần đốt than đá! Đó chính là tương lai đất nước chúng ta!",
      "speakerRole": "Captain Trang",
      "questionEn": "What powers offshore wind turbines along Vietnam's coast?",
      "questionVi": "Nguồn lực tự nhiên nào giúp các tua-bin gió ven biển Việt Nam quay đều?",
      "options": [
        "Natural sea breezes and coastal winds",
        "Burning coal",
        "Gasoline fuel",
        "Batteries that need charging"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Renewable energy creates clean, green cities!'",
      "promptVi": "Em hãy nói: 'Renewable energy creates clean, green cities!'",
      "targetSentenceEn": "Renewable energy creates clean, green cities!",
      "targetSentenceVi": "Năng lượng tái tạo kiến tạo nên những thành phố xanh và sạch!",
      "phoneticFocus": "/rɪˈnjuː/ in renewable and /tɜː/ in turbine",
      "pronunciationTipsEn": "Stress the second syllable in re-NEW-a-ble.",
      "pronunciationTipsVi": "Nhấn trọng âm vào âm tiết thứ hai trong re-NEW-a-ble.",
      "shadowAudioText": "Renewable energy creates clean, green cities!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Smart City Engineering Quest",
      "gameTitleVi": "Kỹ sư kiến tạo thành phố xanh",
      "instructionsEn": "Match each clean city innovation to its modern icon!",
      "instructionsVi": "Nối công nghệ xanh với biểu tượng thành phố tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "wind turbine",
          "promptVi": "tua-bin gió ngoài khơi",
          "targetMatch": "🌬️",
          "emojiOrIcon": "🌬️"
        },
        {
          "id": "m2",
          "promptEn": "renewable",
          "promptVi": "năng lượng tái tạo",
          "targetMatch": "♻️",
          "emojiOrIcon": "♻️"
        },
        {
          "id": "m3",
          "promptEn": "public transit",
          "promptVi": "giao thông công cộng",
          "targetMatch": "🚊",
          "emojiOrIcon": "🚊"
        },
        {
          "id": "m4",
          "promptEn": "zero-emission",
          "promptVi": "không phát thải khói",
          "targetMatch": "🌿",
          "emojiOrIcon": "🌿"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g4-adv5-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "Which of the following is a renewable source of energy?",
        "questionVi": "Nguồn năng lượng nào sau đây là năng lượng tái tạo?",
        "options": [
          "Offshore wind and sunlight",
          "Coal smoke",
          "Plastic garbage",
          "Old petroleum oil"
        ],
        "correctIndex": 0,
        "explanationEn": "Wind and sunlight naturally replenish without polluting.",
        "explanationVi": "Gió và ánh sáng mặt trời là nguồn năng lượng tái tạo tự nhiên ('Wind and sunlight').",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g4-adv5-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What is the key benefit of zero-emission electric buses?",
        "questionVi": "Lợi ích then chốt của xe buýt điện không phát thải là gì?",
        "options": [
          "They produce no harmful exhaust smoke, keeping city air clean",
          "They can fly over mountains",
          "They are made of chocolate",
          "They never stop moving"
        ],
        "correctIndex": 0,
        "explanationEn": "Zero-emission transit prevents toxic exhaust emissions.",
        "explanationVi": "Phương tiện không phát thải giúp xóa bỏ khói độc hại, bảo vệ bầu không khí đô thị trong lành.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g4-adv5-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Complete the urban vision: 'By expanding public transit, we can reduce traffic ______.'",
        "questionVi": "Hoàn thành tầm nhìn đô thị: 'By expanding public transit, we can reduce traffic ______.'",
        "options": [
          "congestion and pollution",
          "trees and flowers",
          "fresh air",
          "school classrooms"
        ],
        "correctIndex": 0,
        "explanationEn": "Public transit reduces traffic congestion and air pollution.",
        "explanationVi": "Giao thông công cộng giúp giảm thiểu ùn tắc giao thông và ô nhiễm môi trường.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Sustainability Vocabulary",
          "standardEn": "Identifies wind turbine, renewable, public transit, zero-emission.",
          "standardVi": "Nhận diện từ vựng phát triển bền vững."
        },
        {
          "skill": "Solution Proposal",
          "standardEn": "Proposes green energy solutions for cities.",
          "standardVi": "Đề xuất được giải pháp năng lượng sạch cho đô thị."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 4 Future",
        "Vietnam National Green Growth Strategy 2021-2030"
      ],
      "humanEditorNotes": "Grade 4 Adventure 5 Green Smart Cities."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  }
];
