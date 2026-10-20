// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE 2 CURRICULUM LESSONS (5 THEMATIC ADVENTURES)
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import { CurriculumLesson } from '../../types/curriculum';

export const GRADE_2_LESSONS: CurriculumLesson[] = [
  {
    "id": "lesson-g2-adv1-places",
    "adventureId": "adventure_1_places",
    "lessonNumber": 1,
    "titleEn": "Let's Visit Vietnam: Sword Lake & Turtle Tower",
    "titleVi": "Hãy cùng đi thăm Việt Nam: Hồ Hoàn Kiếm & Tháp Rùa",
    "topicEn": "Lakes, Historic Bridges, and Friendly Turtles in Hanoi",
    "topicVi": "Hồ nước, cây cầu lịch sử và rùa thiêng tại Hà Nội",
    "gradeLevel": "Grade 2",
    "gradeBand": "grade_2",
    "targetCefr": "Pre-A1 Beginner",
    "durationMinutes": 35,
    "learningObjectivesEn": [
      "Learn 4 landmark words: lake, turtle, bridge, tower.",
      "Ask and answer: 'Where is the lake? - It is in Hanoi.'",
      "Practice the /t/ and /l/ phonics sounds in 'turtle' and 'lake'."
    ],
    "learningObjectivesVi": [
      "Học 4 từ danh thắng: lake, turtle, bridge, tower.",
      "Hỏi và trả lời: 'Where is the lake? - It is in Hanoi.'",
      "Luyện phát âm âm /t/ và /l/ trong từ turtle và lake."
    ],
    "coverImage": "/destinations/hanoi.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g2-adv1-v1",
        "word": "lake",
        "ipa": "/leɪk/",
        "partOfSpeech": "noun",
        "meaningEn": "A large area of water surrounded by land.",
        "meaningVi": "Hồ nước trong xanh.",
        "exampleSentenceEn": "Sword Lake is peaceful and green.",
        "exampleSentenceVi": "Hồ Hoàn Kiếm thanh bình và xanh mát.",
        "emoji": "🏞️",
        "audioPromptEn": "Lake. A peaceful lake."
      },
      {
        "id": "g2-adv1-v2",
        "word": "turtle",
        "ipa": "/ˈtɜː.təl/",
        "partOfSpeech": "noun",
        "meaningEn": "A gentle animal with a protective shell.",
        "meaningVi": "Cụ rùa thiêng trong truyền thuyết.",
        "exampleSentenceEn": "The golden turtle swam in the lake.",
        "exampleSentenceVi": "Cụ rùa vàng bơi lội dưới hồ.",
        "emoji": "🐢",
        "audioPromptEn": "Turtle. A friendly turtle."
      },
      {
        "id": "g2-adv1-v3",
        "word": "bridge",
        "ipa": "/brɪdʒ/",
        "partOfSpeech": "noun",
        "meaningEn": "A structure built over water for crossing.",
        "meaningVi": "Cây cầu bắc qua mặt nước.",
        "exampleSentenceEn": "The red bridge leads to Ngoc Son Temple.",
        "exampleSentenceVi": "Cây cầu màu đỏ dẫn vào Đền Ngọc Sơn.",
        "emoji": "🌉",
        "audioPromptEn": "Bridge. A red wooden bridge."
      },
      {
        "id": "g2-adv1-v4",
        "word": "tower",
        "ipa": "/taʊər/",
        "partOfSpeech": "noun",
        "meaningEn": "A tall ancient structure on an island.",
        "meaningVi": "Ngọn tháp cổ kính.",
        "exampleSentenceEn": "Turtle Tower stands in the middle of the lake.",
        "exampleSentenceVi": "Tháp Rùa đứng sừng sững giữa lòng hồ.",
        "emoji": "🏛️",
        "audioPromptEn": "Tower. Turtle Tower in the lake."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g2-adv1-sp",
        "pattern": "Where is the [noun]? - It is in [city].",
        "patternMeaningVi": "[Danh thắng] ở đâu? - Nó ở [thành phố].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "Where is Sword Lake, Little Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "It is in Hanoi, the capital of Vietnam!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Hồ Hoàn Kiếm ở đâu vậy em?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ ở Hà Nội, thủ đô của Việt Nam ạ!"
          }
        ],
        "practicePromptEn": "Where is the red bridge? - It is in Hanoi.",
        "practicePromptVi": "Cây cầu đỏ ở đâu? - Nó ở Hà Nội."
      }
    ],
    "reading": {
      "titleEn": "Walking Around Sword Lake",
      "titleVi": "Dạo bước quanh Hồ Gươm",
      "wordCount": 32,
      "passagesEn": [
        "Today, Captain Trang takes us on a walk around Sword Lake in Hanoi.",
        "We see the red wooden bridge over the water. In the center, ancient Turtle Tower looks quiet and beautiful. We love visiting Hanoi!"
      ],
      "passagesVi": [
        "Hôm nay, cô Trang dẫn chúng em dạo quanh Hồ Gươm tại Hà Nội.",
        "Chúng em thấy cây cầu gỗ màu đỏ bắc qua làn nước. Ở chính giữa hồ, Tháp Rùa cổ kính trông thật yên bình và xinh đẹp. Chúng em rất thích đến thăm Hà Nội!"
      ],
      "comprehensionTipsEn": "What color is the bridge over Sword Lake?",
      "comprehensionTipsVi": "Cây cầu bắc qua Hồ Gươm có màu gì?",
      "readingImage": "/destinations/hanoi.jpg"
    },
    "listening": {
      "audioTitleEn": "Captain Trang at the Red Bridge",
      "audioScriptEn": "Hello! I am standing on the beautiful red wooden bridge at Sword Lake. Look at the water! Can you see the famous Turtle Tower in the distance?",
      "audioScriptVi": "Xin chào! Cô đang đứng trên cây cầu gỗ màu đỏ tuyệt đẹp tại Hồ Gươm. Hãy nhìn ra mặt nước! Các em có thấy Tháp Rùa nổi tiếng ở đằng xa không?",
      "speakerRole": "Captain Trang",
      "questionEn": "Where is Captain Trang standing in the audio?",
      "questionVi": "Cô Trang đang đứng ở đâu trong đoạn băng?",
      "options": [
        "On a red wooden bridge",
        "Inside a fast plane",
        "At an airport",
        "On a football field"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Sword Lake is in Hanoi!'",
      "promptVi": "Em hãy nói: 'Sword Lake is in Hanoi!'",
      "targetSentenceEn": "Sword Lake is in Hanoi!",
      "targetSentenceVi": "Hồ Hoàn Kiếm ở Hà Nội!",
      "phoneticFocus": "/t/ in turtle and tower",
      "pronunciationTipsEn": "Tap the tip of your tongue behind your upper teeth for crisp /t/.",
      "pronunciationTipsVi": "Chạm đầu lưỡi vào sau chân răng cửa hàm trên để bật âm /t/ dứt khoát.",
      "shadowAudioText": "Sword Lake is in Hanoi!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Landmark Detective Match",
      "gameTitleVi": "Thám tử nối tranh danh lam",
      "instructionsEn": "Match the word to its Hanoi landmark!",
      "instructionsVi": "Nối từ tiếng Anh với hình ảnh danh thắng Hà Nội nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "lake",
          "promptVi": "hồ nước",
          "targetMatch": "🏞️",
          "emojiOrIcon": "🏞️"
        },
        {
          "id": "m2",
          "promptEn": "turtle",
          "promptVi": "cụ rùa",
          "targetMatch": "🐢",
          "emojiOrIcon": "🐢"
        },
        {
          "id": "m3",
          "promptEn": "bridge",
          "promptVi": "cây cầu",
          "targetMatch": "🌉",
          "emojiOrIcon": "🌉"
        },
        {
          "id": "m4",
          "promptEn": "tower",
          "promptVi": "tháp",
          "targetMatch": "🏛️",
          "emojiOrIcon": "🏛️"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g2-adv1-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "Which animal is connected to the legend of Sword Lake?",
        "questionVi": "Con vật nào gắn liền với truyền thuyết Hồ Hoàn Kiếm?",
        "options": [
          "The turtle",
          "The lion",
          "The tiger",
          "The monkey"
        ],
        "correctIndex": 0,
        "explanationEn": "The golden turtle returned King Le Loi's sword.",
        "explanationVi": "Rùa thần ('The turtle') đã nhận lại gươm báu từ vua Lê Lợi.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g2-adv1-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Where is Sword Lake located?",
        "questionVi": "Hồ Hoàn Kiếm nằm ở thành phố nào?",
        "options": [
          "In Hanoi",
          "In London",
          "In Paris",
          "In Tokyo"
        ],
        "correctIndex": 0,
        "explanationEn": "Sword Lake is in Hanoi.",
        "explanationVi": "Hồ Hoàn Kiếm nằm ở thủ đô Hà Nội ('In Hanoi').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g2-adv1-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Choose the correct question: '______ is the lake?' - 'It is in Hanoi.'",
        "questionVi": "Chọn từ để hỏi đúng: '______ is the lake?' - 'It is in Hanoi.'",
        "options": [
          "Where",
          "What color",
          "How many",
          "Who"
        ],
        "correctIndex": 0,
        "explanationEn": "'Where' asks about location.",
        "explanationVi": "'Where' dùng để hỏi về địa điểm, nơi chốn.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Landmark Words",
          "standardEn": "Identifies lake, turtle, bridge, tower.",
          "standardVi": "Nhận biết từ vựng danh thắng."
        },
        {
          "skill": "Location Query",
          "standardEn": "Uses 'Where is...?' correctly.",
          "standardVi": "Sử dụng đúng cấu trúc hỏi địa điểm."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 2 Places"
      ],
      "humanEditorNotes": "Grade 2 Adventure 1 Let's Visit Vietnam."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g2-adv2-culture",
    "adventureId": "adventure_2_culture",
    "lessonNumber": 1,
    "titleEn": "Happy Festivals: Lunar New Year (Tet)",
    "titleVi": "Lễ hội vui tươi: Tết Nguyên đán",
    "topicEn": "Tet Traditions, Lucky Money, and Family Wishes",
    "topicVi": "Phong tục Tết, lì xì và lời chúc gia đình",
    "gradeLevel": "Grade 2",
    "gradeBand": "grade_2",
    "targetCefr": "Pre-A1 Beginner",
    "durationMinutes": 35,
    "learningObjectivesEn": [
      "Learn 4 Tet festival words: Tet, lucky money, peach blossom, wish.",
      "Say: 'Happy New Year! I wish you good health.'",
      "Appreciate Vietnamese family respect and New Year customs."
    ],
    "learningObjectivesVi": [
      "Học 4 từ lễ hội Tết: Tet, lucky money, peach blossom, wish.",
      "Nói câu: 'Happy New Year! I wish you good health.'",
      "Hiểu nét đẹp kính trọng ông bà cha mẹ ngày Tết."
    ],
    "coverImage": "/destinations/hanoi.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g2-adv2-v1",
        "word": "Tet",
        "ipa": "/tet/",
        "partOfSpeech": "noun",
        "meaningEn": "Vietnamese Lunar New Year, the biggest festival.",
        "meaningVi": "Tết Nguyên đán cổ truyền.",
        "exampleSentenceEn": "Tet is a happy festival for every family.",
        "exampleSentenceVi": "Tết là lễ hội đầm ấm của mỗi gia đình.",
        "emoji": "🧧",
        "audioPromptEn": "Tet. Happy Tet!"
      },
      {
        "id": "g2-adv2-v2",
        "word": "lucky money",
        "ipa": "/ˈlʌk.i ˈmʌn.i/",
        "partOfSpeech": "noun",
        "meaningEn": "Money given in red envelopes for good fortune.",
        "meaningVi": "Tiền lì xì mừng tuổi đầu năm.",
        "exampleSentenceEn": "Grandpa gives me lucky money in a red envelope.",
        "exampleSentenceVi": "Ông tặng em phong bao lì xì đỏ may mắn.",
        "emoji": "💰",
        "audioPromptEn": "Lucky money. Red lucky money."
      },
      {
        "id": "g2-adv2-v3",
        "word": "peach blossom",
        "ipa": "/piːtʃ ˈblɒs.əm/",
        "partOfSpeech": "noun",
        "meaningEn": "Pink springtime flowers blooming at Tet.",
        "meaningVi": "Hoa đào hồng tươi đón xuân sang.",
        "exampleSentenceEn": "The pink peach blossom is blooming.",
        "exampleSentenceVi": "Cành hoa đào phai đang khoe sắc.",
        "emoji": "🌸",
        "audioPromptEn": "Peach blossom. Beautiful peach blossom."
      },
      {
        "id": "g2-adv2-v4",
        "word": "wish",
        "ipa": "/wɪʃ/",
        "partOfSpeech": "verb",
        "meaningEn": "To say good words of hope and happiness.",
        "meaningVi": "Gửi lời chúc tốt lành, chúc phúc.",
        "exampleSentenceEn": "I wish you good health and happiness.",
        "exampleSentenceVi": "Cháu chúc ông bà dồi dào sức khỏe và hạnh phúc.",
        "emoji": "✨",
        "audioPromptEn": "Wish. Make a good wish."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g2-adv2-sp",
        "pattern": "Happy New Year! I wish you [noun].",
        "patternMeaningVi": "Chúc mừng năm mới! Con chúc [ông bà/bố mẹ] [điều tốt lành].",
        "dialogueEn": [
          {
            "speaker": "Explorer",
            "text": "Happy New Year, Grandma! I wish you good health!"
          },
          {
            "speaker": "Grandma",
            "text": "Thank you, my dear! Here is a red envelope for you."
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Học sinh",
            "text": "Chúc mừng năm mới bà ạ! Cháu chúc bà luôn mạnh khỏe!"
          },
          {
            "speaker": "Bà",
            "text": "Bà cảm ơn cháu ngoan! Đây là lì xì mừng tuổi cháu nhé."
          }
        ],
        "practicePromptEn": "Happy New Year! I wish you happiness.",
        "practicePromptVi": "Chúc mừng năm mới! Em chúc bạn hạnh phúc."
      }
    ],
    "reading": {
      "titleEn": "Spring Morning at Tet",
      "titleVi": "Buổi sáng mùa xuân ngày Tết",
      "wordCount": 33,
      "passagesEn": [
        "Spring arrives in Vietnam with warm sunshine. Pink peach blossoms bloom in the living room.",
        "We wear colorful new clothes and greet our grandparents. They give us lucky money and gentle smiles. Tet is filled with love!"
      ],
      "passagesVi": [
        "Mùa xuân về trên quê hương Việt Nam cùng ánh nắng ấm áp. Những bông hoa đào phai nở rộ trong phòng khách.",
        "Chúng em diện quần áo mới rực rỡ và chúc Tết ông bà. Ông bà tặng chúng em bao lì xì đỏ cùng nụ cười hiền từ. Tết thật tràn ngập yêu thương!"
      ],
      "comprehensionTipsEn": "What flowers bloom in the living room at Tet?",
      "comprehensionTipsVi": "Loài hoa nào nở trong phòng khách ngày Tết?",
      "readingImage": "/destinations/hanoi.jpg"
    },
    "listening": {
      "audioTitleEn": "Grandpa's New Year Blessing",
      "audioScriptEn": "Hello Little Explorer! On the first morning of Tet, what do grandparents usually give to polite children in red envelopes? Yes, lucky money!",
      "audioScriptVi": "Chào bạn nhỏ! Vào sáng mồng một Tết, ông bà thường tặng các bạn nhỏ ngoan điều gì trong phong bao đỏ? Đúng rồi, tiền lì xì may mắn!",
      "speakerRole": "Captain Trang",
      "questionEn": "What do grandparents give to children at Tet in red envelopes?",
      "questionVi": "Ông bà thường tặng các bạn nhỏ điều gì trong phong bao đỏ ngày Tết?",
      "options": [
        "Lucky money",
        "A toy car",
        "A pencil case",
        "A cold drink"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Happy New Year, everyone!'",
      "promptVi": "Em hãy nói: 'Happy New Year, everyone!'",
      "targetSentenceEn": "Happy New Year, everyone!",
      "targetSentenceVi": "Chúc mừng năm mới tất cả mọi người!",
      "phoneticFocus": "/w/ in wish and /t/ in Tet",
      "pronunciationTipsEn": "Round your lips into a small circle for the /w/ sound in wish.",
      "pronunciationTipsVi": "Tròn môi tạo âm /w/ mềm mại trong từ wish.",
      "shadowAudioText": "Happy New Year, everyone!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Tet Festival Match",
      "gameTitleVi": "Nối tranh phong tục Tết",
      "instructionsEn": "Match each Tet word to its celebratory item!",
      "instructionsVi": "Nối từ tiếng Anh với hình ảnh Tết rộn rã nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "Tet",
          "promptVi": "Tết cổ truyền",
          "targetMatch": "🧧",
          "emojiOrIcon": "🧧"
        },
        {
          "id": "m2",
          "promptEn": "lucky money",
          "promptVi": "tiền lì xì",
          "targetMatch": "💰",
          "emojiOrIcon": "💰"
        },
        {
          "id": "m3",
          "promptEn": "peach blossom",
          "promptVi": "hoa đào",
          "targetMatch": "🌸",
          "emojiOrIcon": "🌸"
        },
        {
          "id": "m4",
          "promptEn": "wish",
          "promptVi": "lời chúc",
          "targetMatch": "✨",
          "emojiOrIcon": "✨"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g2-adv2-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What color is the lucky money envelope at Tet?",
        "questionVi": "Phong bao lì xì ngày Tết thường có màu gì?",
        "options": [
          "Red",
          "Black",
          "Grey",
          "Blue"
        ],
        "correctIndex": 0,
        "explanationEn": "Lucky money envelopes are bright red for good fortune.",
        "explanationVi": "Phong bao lì xì có màu đỏ may mắn ('Red').",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g2-adv2-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What pink flower blooms during Tet in Northern Vietnam?",
        "questionVi": "Loài hoa màu hồng nào nở vào dịp Tết ở miền Bắc Việt Nam?",
        "options": [
          "Peach blossom",
          "Sunflower",
          "Water lily",
          "Daisy"
        ],
        "correctIndex": 0,
        "explanationEn": "Peach blossom blooms during springtime at Tet.",
        "explanationVi": "Hoa đào ('Peach blossom') khoe sắc đón Tết xuân về.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g2-adv2-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "What do you say to grandparents at Tet?",
        "questionVi": "Em chúc ông bà thế nào vào dịp Tết?",
        "options": [
          "Happy New Year! I wish you good health.",
          "Good night, go to bed.",
          "Give me a car.",
          "Goodbye teacher."
        ],
        "correctIndex": 0,
        "explanationEn": "'Happy New Year! I wish you good health' is the polite wish.",
        "explanationVi": "'Happy New Year! I wish you good health' là lời chúc lễ phép đầu xuân.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Tet Vocabulary",
          "standardEn": "Identifies Tet, lucky money, peach blossom.",
          "standardVi": "Nhận diện từ vựng Tết."
        },
        {
          "skill": "Wish Expression",
          "standardEn": "Expresses polite New Year wishes.",
          "standardVi": "Nói lời chúc mừng năm mới lễ phép."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 2 Culture"
      ],
      "humanEditorNotes": "Grade 2 Adventure 2 Happy Festivals."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g2-adv3-food",
    "adventureId": "adventure_3_food",
    "lessonNumber": 1,
    "titleEn": "My Favorite Food: Warm Bowl of Pho",
    "titleVi": "Món ăn em yêu thích: Tô phở ấm nồng",
    "topicEn": "Pho Noodles, Hot Savory Broth, Fresh Herbs, and Lime",
    "topicVi": "Bánh phở, nước dùng đậm đà, rau thơm và chanh tươi",
    "gradeLevel": "Grade 2",
    "gradeBand": "grade_2",
    "targetCefr": "Pre-A1 Beginner",
    "durationMinutes": 35,
    "learningObjectivesEn": [
      "Learn 4 food words: noodles, soup, beef, lime.",
      "Ask and answer: 'Do you like Pho? - Yes, I do! It is delicious.'",
      "Describe the taste and smell of Vietnamese Pho in English."
    ],
    "learningObjectivesVi": [
      "Học 4 từ ẩm thực: noodles, soup, beef, lime.",
      "Hỏi và đáp: 'Do you like Pho? - Yes, I do! It is delicious.'",
      "Mô tả hương vị thơm ngon của phở Việt Nam."
    ],
    "coverImage": "/destinations/danang.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g2-adv3-v1",
        "word": "noodles",
        "ipa": "/ˈnuː.dəl/",
        "partOfSpeech": "noun",
        "meaningEn": "Long thin strips made of white rice flour.",
        "meaningVi": "Sợi bánh phở mềm dẻo từ gạo.",
        "exampleSentenceEn": "The soft rice noodles are white and warm.",
        "exampleSentenceVi": "Sợi bánh phở mềm trắng và ấm nóng.",
        "emoji": "🍜",
        "audioPromptEn": "Noodles. White rice noodles."
      },
      {
        "id": "g2-adv3-v2",
        "word": "soup",
        "ipa": "/suːp/",
        "partOfSpeech": "noun",
        "meaningEn": "Hot savory broth cooked with spices.",
        "meaningVi": "Nước dùng thơm ngon, đậm đà.",
        "exampleSentenceEn": "The soup smells sweet and fragrant.",
        "exampleSentenceVi": "Nước dùng tỏa hương thơm lừng.",
        "emoji": "🍲",
        "audioPromptEn": "Soup. Hot savory soup."
      },
      {
        "id": "g2-adv3-v3",
        "word": "beef",
        "ipa": "/biːf/",
        "partOfSpeech": "noun",
        "meaningEn": "Meat from a cow, tender and tasty.",
        "meaningVi": "Thịt bò mềm ngọt.",
        "exampleSentenceEn": "I love Pho with tender beef slices.",
        "exampleSentenceVi": "Em thích ăn phở bò với từng lát thịt mềm.",
        "emoji": "🥩",
        "audioPromptEn": "Beef. Tender beef slices."
      },
      {
        "id": "g2-adv3-v4",
        "word": "lime",
        "ipa": "/laɪm/",
        "partOfSpeech": "noun",
        "meaningEn": "A small green sour citrus fruit.",
        "meaningVi": "Quả chanh tươi vắt vào tô phở.",
        "exampleSentenceEn": "Squeeze fresh lime into your soup.",
        "exampleSentenceVi": "Vắt lát chanh tươi vào tô nước dùng.",
        "emoji": "🍋",
        "audioPromptEn": "Lime. Fresh green lime."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g2-adv3-sp",
        "pattern": "Do you like [food]? - Yes, I do! It is [adjective].",
        "patternMeaningVi": "Bạn có thích [món ăn] không? - Có chứ! Nó rất là [tính từ].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "Do you like Vietnamese Pho, Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "Yes, I do! It is warm and delicious!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Em có thích phở Việt Nam không?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ có ạ! Phở ấm nóng và ngon tuyệt vời!"
          }
        ],
        "practicePromptEn": "Do you like noodles? - Yes, I do!",
        "practicePromptVi": "Bạn có thích ăn mì/phở không? - Có chứ!"
      }
    ],
    "reading": {
      "titleEn": "Breakfast at the Pho Restaurant",
      "titleVi": "Bữa sáng tại quán phở thân quen",
      "wordCount": 31,
      "passagesEn": [
        "Every Sunday morning, my family visits a cozy Pho restaurant.",
        "The chef puts white rice noodles and tender beef into a big bowl. He pours hot savory soup over the top. Fresh green herbs and lime make it perfect!"
      ],
      "passagesVi": [
        "Mỗi sáng Chủ nhật, gia đình em ghé thăm một quán phở ấm cúng.",
        "Bác đầu bếp cho bánh phở trắng và thịt bò mềm vào tô lớn, rồi chan nước dùng nóng hổi thơm phức. Rau thơm xanh và lát chanh tươi làm món ăn thật hoàn hảo!"
      ],
      "comprehensionTipsEn": "What does the chef pour over the noodles?",
      "comprehensionTipsVi": "Bác đầu bếp chan thứ gì lên bánh phở?",
      "readingImage": "/destinations/danang.jpg"
    },
    "listening": {
      "audioTitleEn": "Ordering Breakfast with Captain Trang",
      "audioScriptEn": "Good morning! Can I have a bowl of hot beef Pho, please? Don't forget a slice of green lime and fresh herbs! It smells so good!",
      "audioScriptVi": "Chào buổi sáng! Cho em một tô phở bò nóng hổi được không ạ? Đừng quên một lát chanh xanh và rau thơm nhé! Thơm quá đi thôi!",
      "speakerRole": "Captain Trang",
      "questionEn": "What fruit does Captain Trang ask to squeeze into the soup?",
      "questionVi": "Cô Trang nhờ cho thêm lát quả gì vào tô phở?",
      "options": [
        "A green lime",
        "A sweet banana",
        "An orange",
        "A mango"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Vietnamese Pho is delicious!'",
      "promptVi": "Em hãy nói: 'Vietnamese Pho is delicious!'",
      "targetSentenceEn": "Vietnamese Pho is delicious!",
      "targetSentenceVi": "Phở Việt Nam ngon tuyệt vời!",
      "phoneticFocus": "/n/ in noodles and /s/ in soup",
      "pronunciationTipsEn": "Make the /s/ sound softly like the sound of wind in soup.",
      "pronunciationTipsVi": "Phát âm âm /s/ nhẹ nhàng như tiếng gió thổi trong từ soup.",
      "shadowAudioText": "Vietnamese Pho is delicious!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Pho Kitchen Master",
      "gameTitleVi": "Đầu bếp nhí nấu phở",
      "instructionsEn": "Match each ingredient for our delicious bowl of Pho!",
      "instructionsVi": "Nối đúng nguyên liệu để tạo nên tô phở thơm ngon nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "noodles",
          "promptVi": "bánh phở",
          "targetMatch": "🍜",
          "emojiOrIcon": "🍜"
        },
        {
          "id": "m2",
          "promptEn": "soup",
          "promptVi": "nước dùng",
          "targetMatch": "🍲",
          "emojiOrIcon": "🍲"
        },
        {
          "id": "m3",
          "promptEn": "beef",
          "promptVi": "thịt bò",
          "targetMatch": "🥩",
          "emojiOrIcon": "🥩"
        },
        {
          "id": "m4",
          "promptEn": "lime",
          "promptVi": "chanh tươi",
          "targetMatch": "🍋",
          "emojiOrIcon": "🍋"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g2-adv3-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What is the white food made from rice in Pho?",
        "questionVi": "Sợi trắng làm từ gạo trong tô phở gọi là gì?",
        "options": [
          "Rice noodles",
          "Bread",
          "Chocolate",
          "Pizza"
        ],
        "correctIndex": 0,
        "explanationEn": "Rice noodles are long and white in Pho.",
        "explanationVi": "Bánh phở ('Rice noodles') làm từ gạo trắng mềm thơm.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g2-adv3-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Why do people squeeze fresh lime into Pho soup?",
        "questionVi": "Vì sao mọi người vắt chanh tươi vào nước phở?",
        "options": [
          "To add fresh sour flavor",
          "To make it sweet like candy",
          "To make it cold",
          "To change it into milk"
        ],
        "correctIndex": 0,
        "explanationEn": "Lime adds a fresh, zesty flavor to the broth.",
        "explanationVi": "Chanh tạo vị chua thanh dịu mát cho nước dùng ('fresh sour flavor').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g2-adv3-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "How do you answer: 'Do you like Pho?'",
        "questionVi": "Em trả lời thế nào cho câu hỏi 'Do you like Pho?'?",
        "options": [
          "Yes, I do! It is delicious.",
          "I have three pencils.",
          "Goodbye teacher.",
          "No, it is a table."
        ],
        "correctIndex": 0,
        "explanationEn": "'Yes, I do! It is delicious' answers the question politely.",
        "explanationVi": "'Yes, I do! It is delicious' là câu trả lời đúng và tự nhiên.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Pho Ingredients",
          "standardEn": "Identifies noodles, soup, beef, lime.",
          "standardVi": "Nhận biết nguyên liệu nấu phở."
        },
        {
          "skill": "Food Conversation",
          "standardEn": "Responds to 'Do you like...?'",
          "standardVi": "Giao tiếp về sở thích ẩm thực."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 2 Food"
      ],
      "humanEditorNotes": "Grade 2 Adventure 3 My Favorite Food."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g2-adv4-nature",
    "adventureId": "adventure_4_nature",
    "lessonNumber": 1,
    "titleEn": "Nature Detectives: In the Green Forest",
    "titleVi": "Thám tử thiên nhiên: Giữa rừng xanh thẳm",
    "topicEn": "Forests, Colorful Butterflies, Fresh Streams, and Bamboo",
    "topicVi": "Khu rừng, đàn bướm rực rỡ, dòng suối mát và lũy tre",
    "gradeLevel": "Grade 2",
    "gradeBand": "grade_2",
    "targetCefr": "Pre-A1 Beginner",
    "durationMinutes": 35,
    "learningObjectivesEn": [
      "Learn 4 nature words: forest, butterfly, stream, bamboo.",
      "Use the pattern: 'I see a [adjective] [noun] near the [noun].'",
      "Practice observation and listening skills in nature."
    ],
    "learningObjectivesVi": [
      "Học 4 từ thiên nhiên: forest, butterfly, stream, bamboo.",
      "Nói câu: 'I see a colorful butterfly near the stream.'",
      "Rèn luyện kỹ năng quan sát và lắng nghe âm thanh tự nhiên."
    ],
    "coverImage": "/destinations/phong_nha.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g2-adv4-v1",
        "word": "forest",
        "ipa": "/ˈfɔːr.ɪst/",
        "partOfSpeech": "noun",
        "meaningEn": "A large area covered with many green trees.",
        "meaningVi": "Khu rừng nguyên sinh bạt ngàn.",
        "exampleSentenceEn": "The national park has a deep green forest.",
        "exampleSentenceVi": "Vườn quốc gia có khu rừng xanh bạt ngàn.",
        "emoji": "🌲",
        "audioPromptEn": "Forest. A green rainforest."
      },
      {
        "id": "g2-adv4-v2",
        "word": "butterfly",
        "ipa": "/ˈbʌt.ə.flaɪ/",
        "partOfSpeech": "noun",
        "meaningEn": "An insect with two large colorful wings.",
        "meaningVi": "Chú bướm rực rỡ sắc màu.",
        "exampleSentenceEn": "A yellow butterfly lands on the flower.",
        "exampleSentenceVi": "Chú bướm vàng đậu trên cành hoa.",
        "emoji": "🦋",
        "audioPromptEn": "Butterfly. A colorful butterfly."
      },
      {
        "id": "g2-adv4-v3",
        "word": "stream",
        "ipa": "/striːm/",
        "partOfSpeech": "noun",
        "meaningEn": "A small narrow river of clear fresh water.",
        "meaningVi": "Dòng suối trong veo mát rượi.",
        "exampleSentenceEn": "The stream water is cool and clear.",
        "exampleSentenceVi": "Nước suối mát rượi và trong vắt.",
        "emoji": "🏞️",
        "audioPromptEn": "Stream. A cool clear stream."
      },
      {
        "id": "g2-adv4-v4",
        "word": "bamboo",
        "ipa": "/bæmˈbuː/",
        "partOfSpeech": "noun",
        "meaningEn": "A tall fast-growing plant with hollow stems.",
        "meaningVi": "Cây tre xanh dẻo dai của Việt Nam.",
        "exampleSentenceEn": "Green bamboo grows tall beside the village.",
        "exampleSentenceVi": "Lũy tre xanh vươn cao bên bờ xóm.",
        "emoji": "🎋",
        "audioPromptEn": "Bamboo. Tall green bamboo."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g2-adv4-sp",
        "pattern": "I see a [adjective] [noun] near the [noun].",
        "patternMeaningVi": "Em nhìn thấy một [danh từ] [tính từ] ở gần [danh từ].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What do you see near the stream, Detective?"
          },
          {
            "speaker": "Explorer",
            "text": "I see a blue butterfly near the clear stream!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Em thấy gì ở gần dòng suối thế, thám tử nhí?"
          },
          {
            "speaker": "Học sinh",
            "text": "Em thấy một chú bướm xanh bay gần dòng suối trong ạ!"
          }
        ],
        "practicePromptEn": "I see green bamboo near the path.",
        "practicePromptVi": "Em thấy bụi tre xanh bên lối đi."
      }
    ],
    "reading": {
      "titleEn": "A Day in Cuc Phuong Forest",
      "titleVi": "Một ngày tại rừng Cúc Phương",
      "wordCount": 33,
      "passagesEn": [
        "We walk softly through the cool green forest with Captain Trang.",
        "Thousands of yellow and white butterflies dance in the sunshine. Beside the gentle stream, tall bamboo trees whisper in the breeze. Nature is wonderful!"
      ],
      "passagesVi": [
        "Chúng em nhẹ nhàng bước đi qua khu rừng xanh mát cùng cô Trang.",
        "Hàng ngàn chú bướm vàng và trắng bay lượn dưới nắng ấm. Bên dòng suối êm đềm, rặng tre cao rì rào trong gió nhẹ. Thiên nhiên thật kỳ diệu!"
      ],
      "comprehensionTipsEn": "What dances in the sunshine in the forest?",
      "comprehensionTipsVi": "Những bạn nào đang bay lượn dưới ánh nắng trong rừng?",
      "readingImage": "/destinations/phong_nha.jpg"
    },
    "listening": {
      "audioTitleEn": "Forest Detective Clues",
      "audioScriptEn": "Hush! Listen to the gentle water flowing over the rocks! Splish, splash! That is the forest stream, and a blue butterfly is fluttering right beside it!",
      "audioScriptVi": "Khẽ thôi nào! Lắng nghe tiếng nước chảy róc rách qua từng khe đá! Đó là dòng suối trong rừng, và một chú bướm xanh đang bay lượn ngay bên cạnh!",
      "speakerRole": "Captain Trang",
      "questionEn": "What sound does the clear stream make in the forest?",
      "questionVi": "Dòng suối trong rừng tạo ra âm thanh như thế nào?",
      "options": [
        "Splish, splash (water flowing)",
        "Beep, beep (car horn)",
        "Tick, tock (clock)",
        "Ring, ring (bell)"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Look at the colorful butterfly!'",
      "promptVi": "Em hãy nói: 'Look at the colorful butterfly!'",
      "targetSentenceEn": "Look at the colorful butterfly!",
      "targetSentenceVi": "Hãy nhìn chú bướm rực rỡ sắc màu kìa!",
      "phoneticFocus": "/b/ in butterfly and bamboo",
      "pronunciationTipsEn": "Practice saying butterfly three times smoothly: but-ter-fly.",
      "pronunciationTipsVi": "Luyện nói ba âm tiết nhịp nhàng: but-ter-fly.",
      "shadowAudioText": "Look at the colorful butterfly!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Nature Detective Match",
      "gameTitleVi": "Thám tử rừng xanh",
      "instructionsEn": "Match the nature clue to its forest symbol!",
      "instructionsVi": "Nối manh mối tiếng Anh với biểu tượng thiên nhiên nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "forest",
          "promptVi": "khu rừng",
          "targetMatch": "🌲",
          "emojiOrIcon": "🌲"
        },
        {
          "id": "m2",
          "promptEn": "butterfly",
          "promptVi": "chú bướm",
          "targetMatch": "🦋",
          "emojiOrIcon": "🦋"
        },
        {
          "id": "m3",
          "promptEn": "stream",
          "promptVi": "dòng suối",
          "targetMatch": "🏞️",
          "emojiOrIcon": "🏞️"
        },
        {
          "id": "m4",
          "promptEn": "bamboo",
          "promptVi": "cây tre",
          "targetMatch": "🎋",
          "emojiOrIcon": "🎋"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g2-adv4-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "Which insect has colorful wings and flutters near flowers?",
        "questionVi": "Loài côn trùng nào có đôi cánh muôn màu và bay quanh cành hoa?",
        "options": [
          "A butterfly",
          "A tiger",
          "A fish",
          "A frog"
        ],
        "correctIndex": 0,
        "explanationEn": "Butterflies have delicate, colorful wings.",
        "explanationVi": "Bướm ('A butterfly') có đôi cánh rực rỡ sắc màu.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g2-adv4-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What famous tall plant grows green and strong in Vietnam?",
        "questionVi": "Loài cây cao và dẻo dai nổi tiếng ở làng quê Việt Nam là cây gì?",
        "options": [
          "Bamboo",
          "Apple tree",
          "Cactus",
          "Seaweed"
        ],
        "correctIndex": 0,
        "explanationEn": "Bamboo is a traditional symbol of Vietnam.",
        "explanationVi": "Cây tre ('Bamboo') là biểu tượng kiên cường của làng quê Việt Nam.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g2-adv4-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Complete the sentence: 'The water in the forest stream is ______.'",
        "questionVi": "Hoàn thành câu: 'The water in the forest stream is ______.'",
        "options": [
          "cool and clear",
          "hot and spicy",
          "black and smoky",
          "salty like soup"
        ],
        "correctIndex": 0,
        "explanationEn": "Stream water in nature is cool and clear.",
        "explanationVi": "Nước suối tự nhiên mát mẻ và trong vắt ('cool and clear').",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Nature Vocabulary",
          "standardEn": "Identifies forest, butterfly, stream, bamboo.",
          "standardVi": "Nhận diện từ vựng thiên nhiên."
        },
        {
          "skill": "Observation Phrasing",
          "standardEn": "Says 'I see a... near the...'",
          "standardVi": "Diễn đạt được câu miêu tả vị trí."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 2 Nature"
      ],
      "humanEditorNotes": "Grade 2 Adventure 4 Nature Detectives."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g2-adv5-future",
    "adventureId": "adventure_5_future",
    "lessonNumber": 1,
    "titleEn": "Future Transport: Riding the Elevated Metro",
    "titleVi": "Phương tiện tương lai: Trải nghiệm tàu điện trên cao",
    "topicEn": "Metro Trains, Solar Scooters, Clean Stations, and Fast Travel",
    "topicVi": "Tàu điện metro, xe điện mặt trời, nhà ga sạch đẹp và di chuyển nhanh",
    "gradeLevel": "Grade 2",
    "gradeBand": "grade_2",
    "targetCefr": "Pre-A1 Beginner",
    "durationMinutes": 35,
    "learningObjectivesEn": [
      "Learn 4 transport words: metro, train, electric, fast.",
      "Use the sentence: 'We take the [transport] to [destination].'",
      "Understand why electric trains help keep our city air fresh."
    ],
    "learningObjectivesVi": [
      "Học 4 từ giao thông: metro, train, electric, fast.",
      "Nói câu: 'We take the metro train to school.'",
      "Hiểu lợi ích của tàu điện giúp giữ bầu không khí xanh mát."
    ],
    "coverImage": "/destinations/halong_bay.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g2-adv5-v1",
        "word": "metro",
        "ipa": "/ˈmet.rəʊ/",
        "partOfSpeech": "noun",
        "meaningEn": "An electric railway system for city passengers.",
        "meaningVi": "Hệ thống tàu điện đô thị hiện đại.",
        "exampleSentenceEn": "The Hanoi metro glides smoothly on the track.",
        "exampleSentenceVi": "Tàu điện Hà Nội lướt êm ái trên đường ray.",
        "emoji": "🚇",
        "audioPromptEn": "Metro. The modern metro."
      },
      {
        "id": "g2-adv5-v2",
        "word": "train",
        "ipa": "/treɪn/",
        "partOfSpeech": "noun",
        "meaningEn": "Connected railway cars pulled on a track.",
        "meaningVi": "Đoàn tàu chở khách.",
        "exampleSentenceEn": "The green train carries many passengers.",
        "exampleSentenceVi": "Đoàn tàu màu xanh chở nhiều hành khách.",
        "emoji": "🚆",
        "audioPromptEn": "Train. An electric train."
      },
      {
        "id": "g2-adv5-v3",
        "word": "electric",
        "ipa": "/iˈlek.trɪk/",
        "partOfSpeech": "adjective",
        "meaningEn": "Powered by electricity without smoke.",
        "meaningVi": "Chạy bằng điện, không khói bụi.",
        "exampleSentenceEn": "Electric vehicles keep our streets quiet.",
        "exampleSentenceVi": "Phương tiện điện giúp đường phố yên tĩnh và sạch.",
        "emoji": "⚡",
        "audioPromptEn": "Electric. Clean electric energy."
      },
      {
        "id": "g2-adv5-v4",
        "word": "fast",
        "ipa": "/fɑːst/",
        "partOfSpeech": "adjective",
        "meaningEn": "Moving quickly in a short time.",
        "meaningVi": "Nhanh chóng, tốc độ cao.",
        "exampleSentenceEn": "The metro is fast and safe.",
        "exampleSentenceVi": "Tàu điện di chuyển nhanh và an toàn.",
        "emoji": "⏩",
        "audioPromptEn": "Fast. Fast and safe."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g2-adv5-sp",
        "pattern": "We take the [transport] to [destination].",
        "patternMeaningVi": "Chúng em đi [phương tiện] đến [địa điểm].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "How do you go to the museum, Explorer?"
          },
          {
            "speaker": "Explorer",
            "text": "We take the green metro train! It is fast and quiet."
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Em đi đến bảo tàng bằng cách nào?"
          },
          {
            "speaker": "Học sinh",
            "text": "Chúng em đi tàu điện màu xanh ạ! Tàu chạy nhanh và êm lắm."
          }
        ],
        "practicePromptEn": "We take the electric bus to school.",
        "practicePromptVi": "Chúng em đi xe buýt điện đến trường."
      }
    ],
    "reading": {
      "titleEn": "A Ride on the Cat Linh Metro",
      "titleVi": "Chuyến tàu điện Cát Linh",
      "wordCount": 32,
      "passagesEn": [
        "Captain Trang and children step onto the elevated metro station.",
        "The sleek green train glides in without any smoke. Through wide glass windows, we look down at the bustling city below. Future travel in Vietnam is wonderful!"
      ],
      "passagesVi": [
        "Cô Trang và các bạn nhỏ bước lên nhà ga tàu điện trên cao.",
        "Đoàn tàu màu xanh bóng loáng lướt vào ga không hề có khói bụi. Qua ô cửa kính lớn, chúng em ngắm nhìn thành phố nhộn nhịp bên dưới. Giao thông tương lai thật tuyệt vời!"
      ],
      "comprehensionTipsEn": "Does the electric train make smoke?",
      "comprehensionTipsVi": "Đoàn tàu điện có xả khói bụi không?",
      "readingImage": "/destinations/halong_bay.jpg"
    },
    "listening": {
      "audioTitleEn": "Metro Announcement with Captain Trang",
      "audioScriptEn": "Ding-dong! Welcome aboard the VietDiscovery green metro line! Next stop: National Stadium! Please hold on and enjoy the fast, clean ride!",
      "audioScriptVi": "Kính coong! Chào mừng quý khách lên tuyến tàu điện xanh VietDiscovery! Điểm dừng tiếp theo: Sân vận động Quốc gia! Chúc các em có một chuyến đi nhanh và xanh mát!",
      "speakerRole": "Captain Trang",
      "questionEn": "What kind of ride does Captain Trang announce on the train?",
      "questionVi": "Cô Trang thông báo chuyến đi tàu điện như thế nào?",
      "options": [
        "Fast and clean",
        "Slow and noisy",
        "Hot and dirty",
        "Dark and scary"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'The metro is fast and green!'",
      "promptVi": "Em hãy nói: 'The metro is fast and green!'",
      "targetSentenceEn": "The metro is fast and green!",
      "targetSentenceVi": "Tàu điện vừa nhanh vừa thân thiện môi trường!",
      "phoneticFocus": "/tr/ in train and /m/ in metro",
      "pronunciationTipsEn": "Blend the /t/ and /r/ smoothly together for train.",
      "pronunciationTipsVi": "Nối liền âm /t/ và /r/ nhẹ nhàng khi phát âm từ train.",
      "shadowAudioText": "The metro is fast and green!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Green Transport Sorter",
      "gameTitleVi": "Phân loại phương tiện xanh",
      "instructionsEn": "Match each transport term to its modern emoji!",
      "instructionsVi": "Nối từ tiếng Anh với phương tiện tương lai tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "metro",
          "promptVi": "tàu điện đô thị",
          "targetMatch": "🚇",
          "emojiOrIcon": "🚇"
        },
        {
          "id": "m2",
          "promptEn": "train",
          "promptVi": "đoàn tàu",
          "targetMatch": "🚆",
          "emojiOrIcon": "🚆"
        },
        {
          "id": "m3",
          "promptEn": "electric",
          "promptVi": "năng lượng điện",
          "targetMatch": "⚡",
          "emojiOrIcon": "⚡"
        },
        {
          "id": "m4",
          "promptEn": "fast",
          "promptVi": "tốc độ cao",
          "targetMatch": "⏩",
          "emojiOrIcon": "⏩"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g2-adv5-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What vehicle runs on electric tracks in the city?",
        "questionVi": "Phương tiện nào chạy trên đường ray điện trong thành phố?",
        "options": [
          "A metro train",
          "A wooden boat",
          "A bicycle",
          "A horse"
        ],
        "correctIndex": 0,
        "explanationEn": "Metro trains run on dedicated electric tracks.",
        "explanationVi": "Tàu điện metro ('A metro train') di chuyển trên đường ray riêng.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g2-adv5-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Why is an electric train good for the environment?",
        "questionVi": "Tại sao tàu điện lại tốt cho môi trường?",
        "options": [
          "It produces zero smoke and keeps air clean",
          "It flies in the clouds",
          "It is made of candy",
          "It swims in rivers"
        ],
        "correctIndex": 0,
        "explanationEn": "Electric transit produces zero exhaust smoke.",
        "explanationVi": "Tàu điện không xả khói bụi và giữ không khí sạch ('zero smoke').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g2-adv5-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Complete the sentence: 'We take the ______ to school every morning.'",
        "questionVi": "Hoàn thành câu: 'We take the ______ to school every morning.'",
        "options": [
          "metro",
          "sofa",
          "bed",
          "spoon"
        ],
        "correctIndex": 0,
        "explanationEn": "We take the metro to travel.",
        "explanationVi": "'We take the metro' là câu đúng ngữ pháp và ngữ cảnh đi lại.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Transport Terms",
          "standardEn": "Identifies metro, train, electric, fast.",
          "standardVi": "Nhận diện từ vựng giao thông hiện đại."
        },
        {
          "skill": "Travel Sentence",
          "standardEn": "Uses 'We take the... to...'",
          "standardVi": "Nói được câu phương tiện di chuyển."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 2 Future"
      ],
      "humanEditorNotes": "Grade 2 Adventure 5 Future Transport."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  }
];
