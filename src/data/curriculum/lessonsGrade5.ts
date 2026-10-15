// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE 5 CURRICULUM LESSONS (5 THEMATIC ADVENTURES)
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import { CurriculumLesson } from '../../types/curriculum';

export const GRADE_5_LESSONS: CurriculumLesson[] = [
  {
    "id": "lesson-g5-adv1-places",
    "adventureId": "adventure_1_places",
    "lessonNumber": 1,
    "titleEn": "Discover Vietnam's Wonders: Son Doong Cave Expedition",
    "titleVi": "Khám phá kỳ quan Việt Nam: Thám hiểm Sơn Đoòng",
    "topicEn": "Colossal Caverns, Jungle Sinkholes, and Subterranean Clouds",
    "topicVi": "Hang động lớn nhất hành tinh, hố sụt rừng nguyên sinh và mây ngầm",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Master 4 expedition vocabulary terms: expedition, cavern, sinkhole, colossal.",
      "Deliver an informational presentation: 'Son Doong is so colossal that it contains [features].'",
      "Explain how geological forces created the world's largest natural cave in Vietnam."
    ],
    "learningObjectivesVi": [
      "Nắm vững 4 thuật ngữ thám hiểm: expedition, cavern, sinkhole, colossal.",
      "Thực hành thuyết trình: 'Son Doong is so colossal that it has its own weather system.'",
      "Giải thích quá trình kiến tạo địa chất kỳ vĩ của hang động lớn nhất thế giới."
    ],
    "coverImage": "/destinations/phong_nha.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g5_sondoong_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "The Wonders of Son Doong: World's Largest Cave",
      "titleVi": "Kỳ quan Sơn Đoòng: Hang động lớn nhất thế giới",
      "durationMinutes": 5,
      "isTeacherCreated": true,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g5-adv1-v1",
        "word": "expedition",
        "ipa": "/ˌek.spəˈdɪʃ.ən/",
        "partOfSpeech": "noun",
        "meaningEn": "An organized journey with a specific scientific or exploratory purpose.",
        "meaningVi": "Chuyến thám hiểm khoa học kỳ thú.",
        "exampleSentenceEn": "The international expedition explored deep inside Son Doong Cave.",
        "exampleSentenceVi": "Đoàn thám hiểm quốc tế đã tiến sâu vào khám phá hang Sơn Đoòng.",
        "emoji": "🧗",
        "audioPromptEn": "Expedition. A scientific cave expedition."
      },
      {
        "id": "g5-adv1-v2",
        "word": "cavern",
        "ipa": "/ˈkæv.ən/",
        "partOfSpeech": "noun",
        "meaningEn": "An immense underground chamber carved by ancient rivers.",
        "meaningVi": "Khoang hang khổng lồ kỳ vĩ.",
        "exampleSentenceEn": "A Boeing 747 airplane could fly through the main cavern.",
        "exampleSentenceVi": "Một chiếc máy bay Boeing 747 có thể bay lọt qua khoang hang chính.",
        "emoji": "🕳️",
        "audioPromptEn": "Cavern. An immense underground cavern."
      },
      {
        "id": "g5-adv1-v3",
        "word": "sinkhole",
        "ipa": "/ˈsɪŋk.həʊl/",
        "partOfSpeech": "noun",
        "meaningEn": "A giant opening where the ceiling collapsed, letting sunlight create a jungle.",
        "meaningVi": "Hố sụt địa chất nơi ánh sáng tạo nên cả khu rừng nguyên sinh.",
        "exampleSentenceEn": "Sunlight beams down through the sinkhole into the subterranean jungle.",
        "exampleSentenceVi": "Ánh nắng rọi qua hố sụt rực rỡ xuống khu rừng nguyên sinh dưới lòng đất.",
        "emoji": "🌳",
        "audioPromptEn": "Sinkhole. A magnificent jungle sinkhole."
      },
      {
        "id": "g5-adv1-v4",
        "word": "colossal",
        "ipa": "/kəˈlɒs.əl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Extremely huge, gigantic, beyond normal imagination.",
        "meaningVi": "Khổng lồ, đồ sộ phi thường.",
        "exampleSentenceEn": "The stalagmites inside Son Doong reach colossal heights of seventy meters.",
        "exampleSentenceVi": "Những măng đá trong Sơn Đoòng cao sừng sững tới bảy mươi mét.",
        "emoji": "🏔️",
        "audioPromptEn": "Colossal. Colossal natural wonder."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv1-sp",
        "pattern": "Son Doong is so colossal that it [remarkable capability/feature].",
        "patternMeaningVi": "Hang Sơn Đoòng đồ sộ đến mức nó [đặc điểm phi thường].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What surprised world explorers most about Son Doong, Young Leaders?"
          },
          {
            "speaker": "Explorer",
            "text": "It is so colossal that it forms its own localized clouds and pristine underground rainforest!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Điều gì làm các nhà thám hiểm quốc tế kinh ngạc nhất về Sơn Đoòng?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ hang đồ sộ đến mức tự hình thành mây ngầm và cả một khu rừng nguyên sinh trong lòng đất ạ!"
          }
        ],
        "practicePromptEn": "Son Doong is so immense that forty-story skyscrapers could stand inside its highest chamber.",
        "practicePromptVi": "Sơn Đoòng rộng lớn đến mức những tòa nhà 40 tầng có thể đứng trọn trong khoang cao nhất."
      }
    ],
    "reading": {
      "titleEn": "Inside the Kingdom of Son Doong",
      "titleVi": "Bên trong vương quốc kỳ vĩ Sơn Đoòng",
      "wordCount": 60,
      "passagesEn": [
        "Hidden deep within the dense jungle of Quang Binh, Hang Son Doong is officially documented as the largest natural cave passage on planet Earth.",
        "Discovered by local woodsman Ho Khanh and surveyed by the British Cave Research Association, the cavern spans over nine kilometers. Inside, two gigantic sinkholes allow sunlight to nourish an intact prehistoric rainforest called the 'Garden of Edam', home to monkeys, hornbills, and subterranean clouds."
      ],
      "passagesVi": [
        "Ẩn mình sâu trong cánh rừng già Quảng Bình, Hang Sơn Đoòng được ghi nhận chính thức là hang động tự nhiên có thể tích lớn nhất trên hành tinh Trái Đất.",
        "Được phát hiện bởi người thợ rừng Hồ Khanh và khảo sát bởi Hiệp hội Hang động Hoàng gia Anh, hang kéo dài hơn chín cây số. Bên trong, hai hố sụt khổng lồ đón ánh nắng nuôi dưỡng cả một khu rừng nguyên sinh tiền sử mang tên 'Vườn Địa Đàng', nơi sinh sống của khỉ, chim hồng hoàng và những tầng mây ngầm kỳ ảo."
      ],
      "comprehensionTipsEn": "Who first discovered the entrance to Son Doong?",
      "comprehensionTipsVi": "Ai là người đầu tiên phát hiện ra lối vào hang Sơn Đoòng?",
      "readingImage": "/destinations/phong_nha.jpg"
    },
    "listening": {
      "audioTitleEn": "Scientific Expedition Briefing",
      "audioScriptEn": "Team, adjust your headlamps! We are descending eighty meters into the dark entrance of Son Doong! Listen to the roar of the subterranean river below! Ahead of us, the Great Wall of Vietnam rises ninety meters high inside the cavern! Welcome to Earth's greatest natural masterpiece!",
      "audioScriptVi": "Cả đội hãy kiểm tra đèn pin đội đầu! Chúng ta đang đu dây tụt xuống 80 mét vào cửa hang Sơn Đoòng! Hãy lắng nghe tiếng gầm vang của dòng sông ngầm bên dưới! Phía trước là Bức tường Việt Nam cao 90 mét sừng sững trong lòng hang! Chào mừng các em đến kiệt tác thiên nhiên vĩ đại nhất của Trái Đất!",
      "speakerRole": "Captain Trang",
      "questionEn": "What natural feature roars powerfully inside the depths of Son Doong?",
      "questionVi": "Kỳ quan tự nhiên nào gầm vang mạnh mẽ dưới đáy sâu của hang Sơn Đoòng?",
      "options": [
        "A roaring subterranean river",
        "A giant diesel train",
        "A highway with traffic",
        "A volcanic lava lake"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Son Doong is the largest cave in the world!'",
      "promptVi": "Em hãy nói: 'Son Doong is the largest cave in the world!'",
      "targetSentenceEn": "Son Doong is the largest cave in the world!",
      "targetSentenceVi": "Sơn Đoòng là hang động tự nhiên lớn nhất trên thế giới!",
      "phoneticFocus": "/kəˈlɒs/ in colossal and /ek.spəˈdɪʃ/ in expedition",
      "pronunciationTipsEn": "Place stress on the second syllable of co-LOS-sal.",
      "pronunciationTipsVi": "Nhấn trọng âm rõ ràng vào âm tiết thứ hai trong từ co-LOS-sal.",
      "shadowAudioText": "Son Doong is the largest cave in the world!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Son Doong Expedition Quest",
      "gameTitleVi": "Thám hiểm vương quốc Sơn Đoòng",
      "instructionsEn": "Match each scientific term to its geological discovery!",
      "instructionsVi": "Nối thuật ngữ khoa học với kỳ quan địa chất tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "expedition",
          "promptVi": "đoàn thám hiểm khoa học",
          "targetMatch": "🧗",
          "emojiOrIcon": "🧗"
        },
        {
          "id": "m2",
          "promptEn": "cavern",
          "promptVi": "khoang hang ngầm",
          "targetMatch": "🕳️",
          "emojiOrIcon": "🕳️"
        },
        {
          "id": "m3",
          "promptEn": "sinkhole",
          "promptVi": "hố sụt rừng nguyên sinh",
          "targetMatch": "🌳",
          "emojiOrIcon": "🌳"
        },
        {
          "id": "m4",
          "promptEn": "colossal",
          "promptVi": "đồ sộ vĩ đại",
          "targetMatch": "🏔️",
          "emojiOrIcon": "🏔️"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g5-adv1-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What world record does Hang Son Doong proudly hold?",
        "questionVi": "Hang Sơn Đoòng tự hào nắm giữ kỷ lục thế giới nào?",
        "options": [
          "The largest natural cave passage by volume on Earth",
          "The deepest ocean trench",
          "The highest mountain peak",
          "The oldest active volcano"
        ],
        "correctIndex": 0,
        "explanationEn": "Son Doong is officially recognized as the world's largest natural cave passage.",
        "explanationVi": "Sơn Đoòng được công nhận là hang động tự nhiên có thể tích lớn nhất thế giới.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g5-adv1-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "How did prehistoric jungles manage to flourish deep inside Son Doong?",
        "questionVi": "Làm thế nào mà cả một khu rừng nguyên sinh tiền sử có thể phát triển trong lòng hang Sơn Đoòng?",
        "options": [
          "Giant sinkholes where the ceiling collapsed let in abundant sunlight and rain",
          "Explorers brought electric light bulbs",
          "The trees do not need any light",
          "They were painted on the stone walls"
        ],
        "correctIndex": 0,
        "explanationEn": "Collapsed ceiling sinkholes allow sunlight and rainwater to sustain a subterranean forest.",
        "explanationVi": "Các hố sụt khổng lồ đón ánh nắng và nước mưa giúp rừng nguyên sinh tươi tốt dưới lòng đất.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv1-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Deliver an impressive opening line for an international presentation on Son Doong:",
        "questionVi": "Chọn câu mở đầu ấn tượng cho bài thuyết trình quốc tế về Sơn Đoòng:",
        "options": [
          "'Welcome everyone! Today I am thrilled to introduce Son Doong, Vietnam’s colossal subterranean kingdom that rewrites our understanding of Earth’s natural wonders.'",
          "'Hello, I have a cat.'",
          "'I do not like speaking English today.'",
          "'Goodbye, thank you.'"
        ],
        "correctIndex": 0,
        "explanationEn": "A confident, descriptive presentation hook engages the audience with academic pride.",
        "explanationVi": "Câu mở đầu đầy sức hút và học thuật giúp giới thiệu kỳ quan đất nước đến bạn bè năm châu một cách tự hào.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Scientific Exploration Terms",
          "standardEn": "Mastery of expedition, cavern, sinkhole, colossal.",
          "standardVi": "Nắm vững thuật ngữ thám hiểm địa chất."
        },
        {
          "skill": "Presentation Delivery",
          "standardEn": "Presents world wonder status with eloquence.",
          "standardVi": "Thuyết trình về kỳ quan thế giới lưu loát và tự hào."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 5 Places",
        "Guinness World Records: Largest Cave by Volume (Son Doong)"
      ],
      "humanEditorNotes": "Grade 5 Adventure 1 Discover Vietnam's Wonders."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g5-adv2-culture",
    "adventureId": "adventure_2_culture",
    "lessonNumber": 1,
    "titleEn": "Heritage Explorers: UNESCO Royal Court Music & Dong Ho Art",
    "titleVi": "Nhà thám hiểm di sản: Nhã nhạc cung đình Huế & Tranh Đông Hồ",
    "topicEn": "Intangible Cultural Heritage, Court Orchestras, and Folk Woodblock Printing",
    "topicVi": "Di sản văn hóa phi vật thể, dàn nhạc cung đình và tranh khắc gỗ dân gian",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 cultural heritage terms: intangible, symphony, woodblock, folklore.",
      "Use the sentence pattern: 'Nha Nhac was recognized by UNESCO as an Intangible Cultural Heritage because [reason].'",
      "Analyze how traditional folk art and music preserve Vietnamese national identity."
    ],
    "learningObjectivesVi": [
      "Học 4 thuật ngữ di sản: intangible, symphony, woodblock, folklore.",
      "Nói câu phân tích: 'Nha Nhac was recognized by UNESCO as a Masterpiece of Intangible Heritage.'",
      "Phân tích nét đặc sắc của tranh khắc gỗ Đông Hồ và nhã nhạc cung đình Huế."
    ],
    "coverImage": "/destinations/hue.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g5_nhanhac_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Preserving Vietnamese Cultural Heritage & Royal Music",
      "titleVi": "Bảo tồn di sản văn hóa Việt Nam & Nhã nhạc cung đình",
      "durationMinutes": 5,
      "isTeacherCreated": true,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g5-adv2-v1",
        "word": "intangible",
        "ipa": "/ɪnˈtæn.dʒə.bəl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Living heritage consisting of music, dances, and customs rather than stone buildings.",
        "meaningVi": "Phi vật thể, di sản văn hóa tinh thần sống mãi.",
        "exampleSentenceEn": "UNESCO honors Nha Nhac as intangible cultural heritage of humanity.",
        "exampleSentenceVi": "UNESCO vinh danh Nhã nhạc là di sản văn hóa phi vật thể của nhân loại.",
        "emoji": "🎶",
        "audioPromptEn": "Intangible. Intangible cultural heritage."
      },
      {
        "id": "g5-adv2-v2",
        "word": "symphony",
        "ipa": "/ˈsɪm.fə.ni/",
        "partOfSpeech": "noun",
        "meaningEn": "An elaborate musical composition performed by a traditional orchestra.",
        "meaningVi": "Bản hòa tấu cung đình tinh tế và trang trọng.",
        "exampleSentenceEn": "The royal symphony features drums, bronze bells, and two-string moon lutes.",
        "exampleSentenceVi": "Dàn nhạc cung đình hòa tấu trống, chuông đồng và đàn nguyệt réo rắt.",
        "emoji": "🎻",
        "audioPromptEn": "Symphony. Traditional royal symphony."
      },
      {
        "id": "g5-adv2-v3",
        "word": "woodblock",
        "ipa": "/ˈwʊd.blɒk/",
        "partOfSpeech": "noun",
        "meaningEn": "A carved block of wood used to print colorful folk paintings.",
        "meaningVi": "Khuôn khắc gỗ in tranh dân gian Đông Hồ.",
        "exampleSentenceEn": "Artisans apply natural plant dyes to the carved woodblock.",
        "exampleSentenceVi": "Nghệ nhân quét màu tự nhiên từ lá cây lên bản khắc gỗ.",
        "emoji": "🖼️",
        "audioPromptEn": "Woodblock. Carved woodblock print."
      },
      {
        "id": "g5-adv2-v4",
        "word": "folklore",
        "ipa": "/ˈfəʊk.lɔːr/",
        "partOfSpeech": "noun",
        "meaningEn": "The traditional beliefs, legends, and customs of a people.",
        "meaningVi": "Văn hóa dân gian, truyện tích cổ truyền.",
        "exampleSentenceEn": "Dong Ho paintings depict joyful folklore such as the Mouse Wedding.",
        "exampleSentenceVi": "Tranh Đông Hồ khắc họa các tích dân gian vui tươi như Đám cưới Chuột.",
        "emoji": "📜",
        "audioPromptEn": "Folklore. Rich Vietnamese folklore."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv2-sp",
        "pattern": "[Heritage masterpiece] is celebrated worldwide because it embodies [cultural value].",
        "patternMeaningVi": "[Kiệt tác di sản] được tôn vinh trên toàn cầu vì nó kết tinh [giá trị văn hóa].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "Why did UNESCO proclaim Hue Royal Court Music as a Masterpiece of Humanity?"
          },
          {
            "speaker": "Explorer",
            "text": "Because it embodies centuries of refined courtly philosophy, harmony, and Vietnamese musical artistry!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Vì sao UNESCO tôn vinh Nhã nhạc cung đình Huế là Kiệt tác của nhân loại?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ vì Nhã nhạc kết tinh hàng thế kỷ triết lý cung đình tao nhã, sự hòa hợp và nghệ thuật âm nhạc đỉnh cao của Việt Nam ạ!"
          }
        ],
        "practicePromptEn": "Dong Ho woodblock paintings are prized because they use 100% organic natural colors from scallop shells and garden plants.",
        "practicePromptVi": "Tranh khắc gỗ Đông Hồ được trân quý vì dùng màu sắc tự nhiên 100% từ vỏ sò điệp và cỏ cây vườn nhà."
      }
    ],
    "reading": {
      "titleEn": "Harmony of Hue Court Music and Folk Art",
      "titleVi": "Giao hưởng Nhã nhạc cung đình và Tranh dân gian",
      "wordCount": 61,
      "passagesEn": [
        "Vietnamese cultural heritage shines across both royal palaces and rural craft villages.",
        "In the royal court of Hue, Nha Nhac was performed during solemn coronation ceremonies and banquets. Musicians dressed in silk robes played bronze bells, drums, and flutes with serene precision. Meanwhile, in Bac Ninh, Dong Ho folk artisans pressed engraved woodblocks onto sparkling clam-shell paper, recording festive rural life for posterity."
      ],
      "passagesVi": [
        "Di sản văn hóa Việt Nam tỏa sáng rực rỡ từ chốn cung đình nguy nga đến các làng nghề dân gian mộc mạc.",
        "Tại hoàng cung Huế, Nhã nhạc được tấu lên trong các đại lễ đăng quang và yến tiệc hoàng triều. Các nhạc công trang phục lụa là hòa tấu chuông đồng, trống và tiêu sáo trang nghiêm, chuẩn xác. Trong khi đó ở Bắc Ninh, nghệ nhân Đông Hồ ấn những bản khắc gỗ tinh xảo lên giấy điệp óng ánh, lưu giữ nếp sống hội hè làng quê cho muôn đời sau."
      ],
      "comprehensionTipsEn": "What unique paper gives Dong Ho prints their glittering sheen?",
      "comprehensionTipsVi": "Loại giấy độc đáo nào tạo nên lớp óng ánh lấp lánh cho tranh Đông Hồ?",
      "readingImage": "/destinations/hue.jpg"
    },
    "listening": {
      "audioTitleEn": "The Royal Court Melody with Captain Trang",
      "audioScriptEn": "Close your eyes, Young Leaders! Listen to the sweet sound of the bamboo flute and the resonant ring of the stone chime! This is Nha Nhac, the ancient royal music performed before emperors in the Imperial City of Hue! It is peaceful, elegant, and majestic!",
      "audioScriptVi": "Hãy nhắm mắt lại nào các bạn nhỏ! Lắng nghe tiếng sáo trúc du dương và tiếng khánh đá ngân vang! Đây chính là Nhã nhạc, bản nhạc hoàng gia cổ xưa từng được tấu trước các bậc hoàng đế tại Cố đô Huế! Thật thanh bình, trang nhã và uy nghiêm!",
      "speakerRole": "Captain Trang",
      "questionEn": "What instruments create the resonant sound of Nha Nhac?",
      "questionVi": "Những nhạc cụ nào tạo nên âm vang đặc trưng của Nhã nhạc cung đình Huế?",
      "options": [
        "Bamboo flutes, bronze bells, and stone chimes",
        "Electric guitars with loudspeakers",
        "Computer synthesizers",
        "Heavy construction tools"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Nha Nhac Hue is an intangible cultural masterpiece!'",
      "promptVi": "Em hãy nói: 'Nha Nhac Hue is an intangible cultural masterpiece!'",
      "targetSentenceEn": "Nha Nhac Hue is an intangible cultural masterpiece!",
      "targetSentenceVi": "Nhã nhạc cung đình Huế là kiệt tác di sản văn hóa phi vật thể của nhân loại!",
      "phoneticFocus": "/ɪnˈtæn.dʒə.bəl/ in intangible and /ˈmɑː.stə.piːs/ in masterpiece",
      "pronunciationTipsEn": "Emphasize the second syllable in in-TAN-gi-ble.",
      "pronunciationTipsVi": "Nhấn trọng âm vào âm tiết thứ hai trong in-TAN-gi-ble.",
      "shadowAudioText": "Nha Nhac Hue is an intangible cultural masterpiece!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Cultural Heritage Curator",
      "gameTitleVi": "Giám tuyển di sản văn hóa",
      "instructionsEn": "Match each heritage form to its artistic icon!",
      "instructionsVi": "Nối loại hình nghệ thuật với biểu tượng tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "intangible",
          "promptVi": "di sản phi vật thể",
          "targetMatch": "🎶",
          "emojiOrIcon": "🎶"
        },
        {
          "id": "m2",
          "promptEn": "symphony",
          "promptVi": "hòa tấu cung đình",
          "targetMatch": "🎻",
          "emojiOrIcon": "🎻"
        },
        {
          "id": "m3",
          "promptEn": "woodblock",
          "promptVi": "tranh khắc gỗ",
          "targetMatch": "🖼️",
          "emojiOrIcon": "🖼️"
        },
        {
          "id": "m4",
          "promptEn": "folklore",
          "promptVi": "văn hóa dân gian",
          "targetMatch": "📜",
          "emojiOrIcon": "📜"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g5-adv2-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What does 'intangible cultural heritage' mean?",
        "questionVi": "Thuật ngữ 'di sản văn hóa phi vật thể' có nghĩa là gì?",
        "options": [
          "Traditions, music, and performing arts passed on by living humans",
          "Stone bricks and physical castle walls only",
          "Plastic toys in a factory",
          "Computer software programs"
        ],
        "correctIndex": 0,
        "explanationEn": "Intangible heritage encompasses living cultural practices, music, and traditions.",
        "explanationVi": "Di sản phi vật thể là các tập tục sống, âm nhạc, nghệ thuật biểu diễn được con người gìn giữ và truyền thừa qua các thế hệ.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g5-adv2-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What natural organic material gives Dong Ho folk paintings their sparkling sheen?",
        "questionVi": "Chất liệu tự nhiên nào mang lại lớp ánh bạc lấp lánh cho tranh dân gian Đông Hồ?",
        "options": [
          "Ground scallop and clam shells (Điệp)",
          "Chemical glitter plastic",
          "Silver metal coins",
          "Synthetic oil paint"
        ],
        "correctIndex": 0,
        "explanationEn": "Crushed scallop and clam shells mixed with sticky rice glue create the famous 'diep' paper.",
        "explanationVi": "Vỏ sò điệp nghiền mịn quét cùng hồ nếp tạo nên mặt giấy điệp óng ánh độc nhất vô nhị ('Điệp').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv2-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Why should young generations continue learning and celebrating traditional folklore?",
        "questionVi": "Vì sao thế hệ trẻ cần tiếp nối và phát huy các giá trị văn hóa dân gian truyền thống?",
        "options": [
          "To preserve our national roots, cultural identity, and share Vietnam’s beauty with the world",
          "To stop playing with computers",
          "Because textbooks say so without reason",
          "To sell expensive souvenirs only"
        ],
        "correctIndex": 0,
        "explanationEn": "Preserving cultural heritage strengthens national identity and promotes international cultural dialogue.",
        "explanationVi": "Gìn giữ di sản giúp bảo tồn cội nguồn dân tộc, hun đúc bản sắc và lan tỏa vẻ đẹp Việt Nam ra toàn cầu.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Intangible Heritage Terms",
          "standardEn": "Understands intangible, symphony, woodblock, folklore.",
          "standardVi": "Nắm vững thuật ngữ di sản văn hóa phi vật thể."
        },
        {
          "skill": "Cultural Pride Discourse",
          "standardEn": "Articulates deep appreciation of national traditions.",
          "standardVi": "Bày tỏ niềm tự hào dân tộc sâu sắc bằng tiếng Anh."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 5 Culture",
        "UNESCO Intangible Cultural Heritage List (Nha Nhac Hue)"
      ],
      "humanEditorNotes": "Grade 5 Adventure 2 Heritage Explorers."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g5-adv3-food",
    "adventureId": "adventure_3_food",
    "lessonNumber": 1,
    "titleEn": "Vietnamese Cuisine Challenge: Yin & Yang Harmony and Master Pho Secrets",
    "titleVi": "Thử thách bếp trưởng nhí: Nghệ thuật Âm Dương & Bí quyết nấu phở",
    "topicEn": "Five Element Flavors, Yin-Yang Balance, Star Anise, and Culinary Philosophy",
    "topicVi": "Ngũ hành ẩm thực, cân bằng Âm Dương, hoa hồi và triết lý nấu ăn truyền thống",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Learn 4 culinary philosophy terms: harmony, balance, star anise, nutritional.",
      "Use the sentence pattern: 'Vietnamese cuisine balances Yin and Yang by pairing [ingredient] with [counterpart].'",
      "Explain how the five basic tastes (sweet, sour, salty, bitter, spicy) correlate with Vietnamese natural health."
    ],
    "learningObjectivesVi": [
      "Học 4 từ triết lý ẩm thực: harmony, balance, star anise, nutritional.",
      "Nói câu phân tích: 'Vietnamese cooking balances cooling Yin and warming Yang ingredients.'",
      "Giải thích sự kết hợp hài hòa ngũ vị (chua, cay, mặn, ngọt, đắng) tốt cho sức khỏe."
    ],
    "coverImage": "/destinations/danang.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g5_culinary_video",
      "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
      "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Masterchef Secrets: The Five Taste Harmony of Pho",
      "titleVi": "Bí mật Masterchef: Ngũ vị ngũ hành trong tô phở Việt",
      "durationMinutes": 5,
      "isTeacherCreated": false,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g5-adv3-v1",
        "word": "harmony",
        "ipa": "/ˈhɑː.mə.ni/",
        "partOfSpeech": "noun",
        "meaningEn": "A pleasing combination of contrasting flavors and textures.",
        "meaningVi": "Sự hài hòa tinh tế trong hương vị và kết cấu món ăn.",
        "exampleSentenceEn": "A bowl of Pho achieves culinary harmony between herbs and rich broth.",
        "exampleSentenceVi": "Tô phở đạt đến sự hòa quyện tuyệt hảo giữa rau thơm và nước dùng.",
        "emoji": "☯️",
        "audioPromptEn": "Harmony. Culinary harmony of flavors."
      },
      {
        "id": "g5-adv3-v2",
        "word": "balance",
        "ipa": "/ˈbæl.əns/",
        "partOfSpeech": "noun",
        "meaningEn": "Equal distribution of cooling (Yin) and warming (Yang) ingredients.",
        "meaningVi": "Sự cân bằng Âm Dương ngũ hành tốt cho sức khỏe.",
        "exampleSentenceEn": "Ginger provides warming Yang to balance cooling seafood dishes.",
        "exampleSentenceVi": "Gừng ấm (Dương) cân bằng hoàn hảo tính hàn (Âm) của hải sản.",
        "emoji": "⚖️",
        "audioPromptEn": "Balance. Healthy Yin-Yang balance."
      },
      {
        "id": "g5-adv3-v3",
        "word": "star anise",
        "ipa": "/ˌstɑːr ˈæn.ɪs/",
        "partOfSpeech": "noun",
        "meaningEn": "A star-shaped spice that imparts sweet aromatic depth to Pho broth.",
        "meaningVi": "Hoa hồi (tai vị) tạo hương thơm nồng nàn quyến rũ cho nước phở.",
        "exampleSentenceEn": "Roasted star anise and cinnamon bark perfume the simmering beef broth.",
        "exampleSentenceVi": "Hoa hồi nướng và quế chi lan tỏa hương thơm nồng nàn khắp nồi nước dùng.",
        "emoji": "⭐",
        "audioPromptEn": "Star anise. Fragrant star anise spice."
      },
      {
        "id": "g5-adv3-v4",
        "word": "nutritional",
        "ipa": "/njuːˈtrɪʃ.ən.əl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Providing nourishing vitamins and minerals for optimal health.",
        "meaningVi": "Giàu giá trị dinh dưỡng, bồi bổ sức khỏe.",
        "exampleSentenceEn": "Vietnamese food is light, fresh, and exceptionally nutritional.",
        "exampleSentenceVi": "Món ăn Việt Nam nhẹ nhàng, tươi mát và cực kỳ giàu dinh dưỡng.",
        "emoji": "🥗",
        "audioPromptEn": "Nutritional. Fresh nutritional ingredients."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv3-sp",
        "pattern": "Vietnamese chefs balance Yin and Yang by [culinary technique].",
        "patternMeaningVi": "Các đầu bếp Việt cân bằng Âm và Dương bằng cách [kỹ thuật nấu ăn].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What makes Vietnamese cuisine among the healthiest in the world, Masterchef?"
          },
          {
            "speaker": "Explorer",
            "text": "It balances cooling Yin and warming Yang while using minimal oil and abundant fresh garden herbs!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Điều gì khiến ẩm thực Việt Nam được đánh giá là một trong những nền ẩm thực lành mạnh nhất thế giới?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ nhờ sự cân bằng Âm Dương hoàn hảo, dùng rất ít dầu mỡ và dồi dào rau thơm tươi sạch ạ!"
          }
        ],
        "practicePromptEn": "Simmering roasted ginger and star anise for twelve hours gives Pho broth its signature natural sweetness.",
        "practicePromptVi": "Ninh gừng nướng và hoa hồi suốt 12 tiếng tạo nên vị ngọt thanh tự nhiên cho nước dùng phở."
      }
    ],
    "reading": {
      "titleEn": "The Philosophy Behind the Bowl",
      "titleVi": "Triết lý sâu xa sau mỗi tô phở",
      "wordCount": 62,
      "passagesEn": [
        "Vietnamese cooking is far more than recipes; it is an ancient philosophy rooted in the balance of Yin and Yang and the Five Elements.",
        "Cooling foods (Yin) like duck and shellfish are always paired with warming seasonings (Yang) like ginger and chili. When preparing the national treasure—Pho—master chefs roast cinnamon, star anise, cardamom, and shallots over charcoal, coaxing pure natural sweetness from marrow bones without artificial additives."
      ],
      "passagesVi": [
        "Ẩm thực Việt Nam vượt xa khỏi những công thức nấu nướng thông thường; đó là triết lý sâu sắc bắt nguồn từ sự cân bằng Âm Dương và Ngũ hành.",
        "Món ăn mang tính hàn (Âm) như vịt hay thủy hải sản luôn được kết hợp với gia vị tính nhiệt (Dương) như gừng và ớt. Khi nấu quốc hồn quốc túy - Phở Việt - các nghệ nhân nướng quế, hoa hồi, thảo quả và hành khô trên than hồng, chắt chiu vị ngọt thanh tự nhiên từ xương tủy mà không cần phụ gia nhân tạo."
      ],
      "comprehensionTipsEn": "What spice is roasted over charcoal to scent Pho broth?",
      "comprehensionTipsVi": "Gia vị nào được nướng trên than hồng để tạo hương thơm cho nước phở?",
      "readingImage": "/destinations/danang.jpg"
    },
    "listening": {
      "audioTitleEn": "Masterchef Secret Kitchen Briefing",
      "audioScriptEn": "Welcome to the Masterchef kitchen! Take a deep breath! That sweet, licorice-like aroma is roasted star anise and cinnamon simmering with beef bones for twelve straight hours! Notice how we balance spicy chili with cooling lime juice! That is pure culinary harmony!",
      "audioScriptVi": "Chào mừng các em vào gian bếp Masterchef! Hãy hít một hơi thật sâu! Hương thơm ngọt ngào như cam thảo kia chính là hoa hồi và quế nướng đang được ninh cùng xương bò suốt 12 tiếng liên tục! Hãy chú ý cách chúng ta cân bằng vị ớt cay nồng bằng nước cốt chanh thanh mát! Đó chính là sự hòa hợp đỉnh cao!",
      "speakerRole": "Captain Trang",
      "questionEn": "How long do master chefs gently simmer the authentic Pho broth?",
      "questionVi": "Các nghệ nhân nấu phở thường ninh nước dùng trong khoảng thời gian bao lâu?",
      "options": [
        "Twelve straight hours",
        "Two minutes",
        "One week in the sun",
        "Ten seconds"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'Vietnamese cuisine balances Yin and Yang perfectly!'",
      "promptVi": "Em hãy nói: 'Vietnamese cuisine balances Yin and Yang perfectly!'",
      "targetSentenceEn": "Vietnamese cuisine balances Yin and Yang perfectly!",
      "targetSentenceVi": "Ẩm thực Việt Nam đạt đến sự cân bằng Âm Dương hoàn hảo!",
      "phoneticFocus": "/ˈhɑː.mə.ni/ in harmony and /ˌæn.ɪs/ in anise",
      "pronunciationTipsEn": "Enunciate har-mo-ny smoothly with a relaxed throat.",
      "pronunciationTipsVi": "Phát âm từ har-mo-ny mềm mại với trọng âm rơi vào âm tiết đầu tiên.",
      "shadowAudioText": "Vietnamese cuisine balances Yin and Yang perfectly!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Masterchef Flavor Alchemist",
      "gameTitleVi": "Nghệ nhân hòa vị ẩm thực",
      "instructionsEn": "Match each culinary concept to its philosophical symbol!",
      "instructionsVi": "Nối khái niệm ẩm thực với biểu tượng triết học tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "harmony",
          "promptVi": "hài hòa ngũ vị",
          "targetMatch": "☯️",
          "emojiOrIcon": "☯️"
        },
        {
          "id": "m2",
          "promptEn": "balance",
          "promptVi": "cân bằng Âm Dương",
          "targetMatch": "⚖️",
          "emojiOrIcon": "⚖️"
        },
        {
          "id": "m3",
          "promptEn": "star anise",
          "promptVi": "hoa hồi thơm nồng",
          "targetMatch": "⭐",
          "emojiOrIcon": "⭐"
        },
        {
          "id": "m4",
          "promptEn": "nutritional",
          "promptVi": "giàu dinh dưỡng",
          "targetMatch": "🥗",
          "emojiOrIcon": "🥗"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g5-adv3-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "Which star-shaped spice is famous for giving authentic Pho its unforgettable aroma?",
        "questionVi": "Loại gia vị hình ngôi sao nào nổi tiếng tạo nên hương thơm khó quên cho phở truyền thống?",
        "options": [
          "Star anise (Hoa hồi)",
          "White sugar",
          "Butter",
          "Mustard paste"
        ],
        "correctIndex": 0,
        "explanationEn": "Star anise is the signature aromatic spice of Vietnamese Pho.",
        "explanationVi": "Hoa hồi ('Star anise') là hương liệu linh hồn tạo nên mùi thơm đặc trưng của phở Việt.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g5-adv3-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "How does Vietnamese cooking apply the Yin-Yang balance in seafood dishes?",
        "questionVi": "Ẩm thực Việt áp dụng nguyên lý cân bằng Âm Dương trong món hải sản như thế nào?",
        "options": [
          "Cooling (Yin) seafood is paired with warming (Yang) ginger, lemongrass, or chili",
          "Seafood is eaten with ice cream",
          "Seafood is kept in the dark",
          "It is fried with sugar only"
        ],
        "correctIndex": 0,
        "explanationEn": "Warming Yang spices balance the cold Yin nature of fresh seafood.",
        "explanationVi": "Gia vị mang tính nhiệt (Dương) như gừng, sả, ớt giúp trung hòa tính hàn (Âm) của thủy hải sản.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv3-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Explain why Vietnamese food is praised internationally as a benchmark of healthy eating:",
        "questionVi": "Giải thích vì sao món ăn Việt Nam được quốc tế ngợi ca là chuẩn mực ẩm thực lành mạnh:",
        "options": [
          "It prioritizes fresh greens, lean proteins, minimal dairy/fat, and balanced medicinal herbs.",
          "It uses huge amounts of processed cheese.",
          "It is deep-fried in heavy butter.",
          "It contains zero vitamins."
        ],
        "correctIndex": 0,
        "explanationEn": "Fresh herbs, low fat, and balanced spices make Vietnamese cooking exceptionally wholesome.",
        "explanationVi": "Sự dồi dào rau thơm, ít dầu mỡ và giàu thảo mộc giúp ẩm thực Việt vô cùng thanh nhẹ và bổ dưỡng.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Culinary Philosophy Terms",
          "standardEn": "Mastery of harmony, balance, star anise, nutritional.",
          "standardVi": "Nắm vững thuật ngữ triết lý ẩm thực."
        },
        {
          "skill": "Health Communication",
          "standardEn": "Explains nutritional virtues of Vietnamese cooking.",
          "standardVi": "Giải thích được giá trị dinh dưỡng của món ăn Việt Nam."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 5 Food",
        "Vietnam Culinary Culture Association (VCCA)"
      ],
      "humanEditorNotes": "Grade 5 Adventure 3 Vietnamese Cuisine Challenge."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g5-adv4-nature",
    "adventureId": "adventure_4_nature",
    "lessonNumber": 1,
    "titleEn": "Eco Heroes: Saving the Cat Ba Langur & Sea Turtles",
    "titleVi": "Anh hùng bảo vệ hệ sinh thái: Cứu hộ Voọc Cát Bà & Rùa biển",
    "topicEn": "Critically Endangered Primates, Marine Sanctuaries, and Coastal Biodiversity",
    "topicVi": "Linh trưởng cực kỳ nguy cấp, khu bảo tồn biển và đa dạng sinh học đại dương",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Acquire 4 biodiversity conservation terms: biodiversity, sanctuary, marine reserve, ecosystem.",
      "Use the sentence pattern: 'Unless we take action to [verb], the [species] will [consequence].'",
      "Formulate an action plan for youth ocean stewardship and biodiversity protection in Vietnam."
    ],
    "learningObjectivesVi": [
      "Học 4 thuật ngữ bảo tồn: biodiversity, sanctuary, marine reserve, ecosystem.",
      "Nói câu điều kiện: 'Unless we protect their nesting beaches, sea turtles will disappear.'",
      "Xây dựng kế hoạch hành động nhí bảo vệ đại dương và hệ sinh thái Việt Nam."
    ],
    "coverImage": "/destinations/phong_nha.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g5_ecoheroes_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Eco Heroes: Protecting Sea Turtles & Langurs",
      "titleVi": "Anh hùng sinh thái: Cứu hộ rùa biển và voọc Cát Bà",
      "durationMinutes": 5,
      "isTeacherCreated": false,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g5-adv4-v1",
        "word": "biodiversity",
        "ipa": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "partOfSpeech": "noun",
        "meaningEn": "The variety of all plant and animal life in a specific natural habitat.",
        "meaningVi": "Đa dạng sinh học, sự phong phú muôn loài.",
        "exampleSentenceEn": "Vietnam is recognized as one of the world's most biodiverse nations.",
        "exampleSentenceVi": "Việt Nam được vinh danh là một trong những quốc gia đa dạng sinh học hàng đầu thế giới.",
        "emoji": "🌍",
        "audioPromptEn": "Biodiversity. Rich global biodiversity."
      },
      {
        "id": "g5-adv4-v2",
        "word": "sanctuary",
        "ipa": "/ˈsæŋk.tʃʊə.ri/",
        "partOfSpeech": "noun",
        "meaningEn": "A safe protected reserve where animals are guarded from hunting.",
        "meaningVi": "Khu bảo tồn an toàn cho muông thú.",
        "exampleSentenceEn": "Cat Ba National Park serves as a peaceful sanctuary for the last langurs.",
        "exampleSentenceVi": "Vườn quốc gia Cát Bà là mái nhà bảo tồn bình yên của những cá thể voọc cuối cùng.",
        "emoji": "🛡️",
        "audioPromptEn": "Sanctuary. A safe wildlife sanctuary."
      },
      {
        "id": "g5-adv4-v3",
        "word": "marine reserve",
        "ipa": "/məˈriːn rɪˈzɜːv/",
        "partOfSpeech": "noun",
        "meaningEn": "An ocean protected area where coral reefs and sea life flourish safely.",
        "meaningVi": "Khu bảo tồn biển bảo vệ rạn san hô và sinh vật đại dương.",
        "exampleSentenceEn": "Volunteers patrol the Con Dao marine reserve to guard turtle nests.",
        "exampleSentenceVi": "Các tình nguyện viên tuần tra khu bảo tồn biển Côn Đảo để bảo vệ tổ rùa.",
        "emoji": "🐢",
        "audioPromptEn": "Marine reserve. Con Dao marine reserve."
      },
      {
        "id": "g5-adv4-v4",
        "word": "ecosystem",
        "ipa": "/ˈiː.kəʊˌsɪs.təm/",
        "partOfSpeech": "noun",
        "meaningEn": "A biological community of interacting organisms and their physical environment.",
        "meaningVi": "Hệ sinh thái tự nhiên hài hòa và gắn kết.",
        "exampleSentenceEn": "Coral reefs provide a vital ecosystem for countless colorful marine species.",
        "exampleSentenceVi": "Rạn san hô tạo nên hệ sinh thái sống còn cho muôn loài sinh vật biển.",
        "emoji": "🪸",
        "audioPromptEn": "Ecosystem. Fragile marine ecosystem."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv4-sp",
        "pattern": "Unless we take active measures to [protect], [species] will face [threat].",
        "patternMeaningVi": "Nếu chúng ta không có biện pháp hành động để [bảo vệ], [loài vật] sẽ đối mặt [nguy cơ].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What is our responsibility as Young Eco Heroes, Explorers?"
          },
          {
            "speaker": "Explorer",
            "text": "Unless we eliminate plastic pollution and protect breeding beaches, rare sea turtles will face extinction!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Trách nhiệm của chúng ta với vai trò Đại sứ sinh thái nhí là gì?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ nếu chúng ta không chấm dứt rác thải nhựa và bảo vệ bãi đẻ, loài rùa biển quý sẽ đối mặt với nguy cơ tuyệt chủng ạ!"
          }
        ],
        "practicePromptEn": "By protecting pristine coral reefs, we safeguard marine biodiversity for generations to come.",
        "practicePromptVi": "Bằng cách bảo vệ các rạn san hô nguyên vẹn, chúng ta gìn giữ đa dạng sinh học đại dương cho muôn đời sau."
      }
    ],
    "reading": {
      "titleEn": "Guardians of Archipelago Biodiversity",
      "titleVi": "Những người canh giữ đa dạng sinh học biển đảo",
      "wordCount": 61,
      "passagesEn": [
        "With over three thousand kilometers of coastline and thousands of limestone islands, Vietnam is home to remarkable endemic wildlife.",
        "On Cat Ba Island, only about seventy Cat Ba langurs—the world’s rarest primate—cling to sheer seaside cliffs. Further south in the turquoise waters of Con Dao, dedicated volunteers patrol moonlit beaches to safely rescue fragile green sea turtle hatchlings and guide them into the safety of the open ocean."
      ],
      "passagesVi": [
        "Với hơn ba ngàn cây số bờ biển cùng hàng ngàn hòn đảo đá vôi, Việt Nam là ngôi nhà của nhiều loài động vật đặc hữu kỳ diệu.",
        "Tại đảo Cát Bà, chỉ còn khoảng bảy mươi cá thể voọc Cát Bà - loài linh trưởng quý hiếm nhất hành tinh - sinh sống bám vào vách đá cheo leo. Xuôi về phía nam giữa làn nước xanh ngọc Côn Đảo, các tình nguyện viên tuần tra bãi biển đêm trăng để ấp nở an toàn những chú rùa con và đưa chúng về với đại dương bao la."
      ],
      "comprehensionTipsEn": "Approximately how many Cat Ba langurs survive in the wild today?",
      "comprehensionTipsVi": "Hiện nay còn khoảng bao nhiêu cá thể voọc Cát Bà sinh sống trong tự nhiên?",
      "readingImage": "/destinations/phong_nha.jpg"
    },
    "listening": {
      "audioTitleEn": "Con Dao Turtle Hatching Mission",
      "audioScriptEn": "Midnight patrol on Bay Canh Island! Look down at the sand! Tiny baby sea turtles are pushing through the surface! One, two, three... dozens of hatchlings scuttling toward the foaming waves! Good luck, little voyagers! Grow strong in our protected marine reserve!",
      "audioScriptVi": "Ca tuần tra nửa đêm trên đảo Hòn Bảy Cạnh! Hãy nhìn xuống bờ cát! Những chú rùa biển con bé xíu đang đội cát chui lên! Một, hai, ba... hàng chục chú rùa tí hon bò thoăn thoắt về phía sóng biển! Chúc các em may mắn, những nhà hải hành nhí! Hãy lớn nhanh và an toàn trong khu bảo tồn biển nhé!",
      "speakerRole": "Captain Trang",
      "questionEn": "Where do newly hatched green sea turtles instinctively crawl immediately after birth?",
      "questionVi": "Những chú rùa biển mới nở bò theo bản năng về hướng nào ngay sau khi chào đời?",
      "options": [
        "Toward the ocean waves and open water",
        "Toward bright city streetlamps",
        "Deep into a dark cave",
        "Into a cardboard box"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'We are proud eco heroes protecting Vietnam's wildlife!'",
      "promptVi": "Em hãy nói: 'We are proud eco heroes protecting Vietnam's wildlife!'",
      "targetSentenceEn": "We are proud eco heroes protecting Vietnam's wildlife!",
      "targetSentenceVi": "Chúng em là những anh hùng sinh thái tự hào bảo vệ động vật hoang dã Việt Nam!",
      "phoneticFocus": "/ˌbaɪ.əʊ/ in biodiversity and /ˈiː.kəʊ/ in ecosystem",
      "pronunciationTipsEn": "Say bio-di-ver-si-ty clearly as six rhythmic syllables.",
      "pronunciationTipsVi": "Phát âm chuẩn xác 6 âm tiết của từ bio-di-ver-si-ty: /ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/.",
      "shadowAudioText": "We are proud eco heroes protecting Vietnam's wildlife!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Eco Hero Marine Mission",
      "gameTitleVi": "Nhiệm vụ anh hùng sinh thái đại dương",
      "instructionsEn": "Match each eco term to its conservation mission icon!",
      "instructionsVi": "Nối thuật ngữ môi trường với biểu tượng sứ mệnh tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "biodiversity",
          "promptVi": "đa dạng sinh học",
          "targetMatch": "🌍",
          "emojiOrIcon": "🌍"
        },
        {
          "id": "m2",
          "promptEn": "sanctuary",
          "promptVi": "khu bảo tồn an toàn",
          "targetMatch": "🛡️",
          "emojiOrIcon": "🛡️"
        },
        {
          "id": "m3",
          "promptEn": "marine reserve",
          "promptVi": "khu bảo tồn biển",
          "targetMatch": "🐢",
          "emojiOrIcon": "🐢"
        },
        {
          "id": "m4",
          "promptEn": "ecosystem",
          "promptVi": "hệ sinh thái biển",
          "targetMatch": "🪸",
          "emojiOrIcon": "🪸"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g5-adv4-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What critically endangered primate species lives exclusively on Cat Ba Island?",
        "questionVi": "Loài linh trưởng cực kỳ nguy cấp nào chỉ sinh sống duy nhất tại đảo Cát Bà?",
        "options": [
          "The Cat Ba langur (Voọc Cát Bà)",
          "The African chimpanzee",
          "The polar bear",
          "The ring-tailed lemur"
        ],
        "correctIndex": 0,
        "explanationEn": "The Cat Ba langur is one of the world's most critically endangered endemic primates.",
        "explanationVi": "Voọc Cát Bà ('The Cat Ba langur') là loài linh trưởng đặc hữu quý hiếm bậc nhất thế giới.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g5-adv4-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "Why is plastic pollution particularly lethal to marine sea turtles?",
        "questionVi": "Vì sao rác thải nhựa đại dương lại đặc biệt nguy hiểm chết người đối với rùa biển?",
        "options": [
          "Turtles mistake floating plastic bags for jellyfish and choke when swallowing them",
          "Turtles use plastic to build houses",
          "Turtles eat plastic for vitamins",
          "Plastic makes turtles fly"
        ],
        "correctIndex": 0,
        "explanationEn": "Sea turtles mistake floating plastic bags for their natural food (jellyfish), causing fatal blockages.",
        "explanationVi": "Rùa biển thường nhầm túi nylon trôi nổi là con sứa (thức ăn ưa thích) dẫn đến tắc nghẽn dạ dày và tử vong.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv4-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Propose an effective school campaign action to protect Vietnam's coastal biodiversity:",
        "questionVi": "Đề xuất một hành động thiết thực trong trường học để bảo vệ đa dạng sinh học biển Việt Nam:",
        "options": [
          "'Say No to Single-Use Plastics and organize weekly recycling & coastal awareness drives.'",
          "'Throw more plastic into the ocean.'",
          "'Ignore all environmental news.'",
          "'Capture wild turtles for pets.'"
        ],
        "correctIndex": 0,
        "explanationEn": "Refusing single-use plastics directly addresses the root cause of marine debris.",
        "explanationVi": "Chiến dịch nói không với rác thải nhựa dùng một lần là hành động bảo vệ đại dương thiết thực và hiệu quả nhất.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Ecology Terms",
          "standardEn": "Mastery of biodiversity, sanctuary, marine reserve, ecosystem.",
          "standardVi": "Nắm vững thuật ngữ sinh thái học đại dương."
        },
        {
          "skill": "Youth Leadership Advocacy",
          "standardEn": "Advocates concrete environmental conservation steps.",
          "standardVi": "Vận động hành động bảo vệ môi trường thiết thực."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 5 Nature",
        "IUCN Red List (Cat Ba Langur - Trachypithecus poliocephalus)"
      ],
      "humanEditorNotes": "Grade 5 Adventure 4 Eco Heroes."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  },
  {
    "id": "lesson-g5-adv5-future",
    "adventureId": "adventure_5_future",
    "lessonNumber": 1,
    "titleEn": "Vietnam 2050: High-Speed Maglev & AI Aerospace Innovation",
    "titleVi": "Việt Nam năm 2050: Tàu đệm từ siêu tốc & Hàng không vũ trụ AI",
    "topicEn": "Magnetic Levitation Transit, AI Smart Grids, Space Research, and Carbon Neutrality",
    "topicVi": "Tàu đệm từ trường, lưới điện thông minh AI, công nghiệp vũ trụ và trung hòa carbon",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Acquire 4 visionary STEM English terms: maglev, artificial intelligence, aerospace, carbon-neutral.",
      "Construct complex future conditional statements: 'By 2050, Vietnam will achieve [goal] through [innovation].'",
      "Articulate a bold 21st-century vision for Vietnam's youth leadership on the world stage."
    ],
    "learningObjectivesVi": [
      "Học 4 thuật ngữ STEM tương lai: maglev, artificial intelligence, aerospace, carbon-neutral.",
      "Nói câu tầm nhìn tương lai: 'By 2050, Vietnam will achieve net-zero carbon through clean technology.'",
      "Khẳng định khát vọng và vai trò tiên phong của thế hệ trẻ Việt Nam năm 2050."
    ],
    "coverImage": "/destinations/halong_bay.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "videoLesson": {
      "videoId": "g5_future_video",
      "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
      "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
      "titleEn": "Vietnam 2050: High-Tech Smart Nation & Net Zero",
      "titleVi": "Việt Nam 2050: Quốc gia công nghệ cao & Net Zero",
      "durationMinutes": 5,
      "isTeacherCreated": true,
      "status": "approved"
    },
    "vocabulary": [
      {
        "id": "g5-adv5-v1",
        "word": "maglev",
        "ipa": "/ˈmæɡ.lev/",
        "partOfSpeech": "noun",
        "meaningEn": "Magnetic levitation train that floats friction-free at speeds over 600 km/h.",
        "meaningVi": "Tàu đệm từ trường siêu tốc không ma sát.",
        "exampleSentenceEn": "The North-South Maglev will connect Hanoi and Ho Chi Minh City in under three hours.",
        "exampleSentenceVi": "Tuyến tàu đệm từ Bắc Nam sẽ kết nối Hà Nội và TP.HCM dưới 3 giờ đồng hồ.",
        "emoji": "🚅",
        "audioPromptEn": "Maglev. Ultra-fast maglev train."
      },
      {
        "id": "g5-adv5-v2",
        "word": "artificial intelligence",
        "ipa": "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/",
        "partOfSpeech": "noun",
        "meaningEn": "Computer systems capable of performing complex human-like problem solving.",
        "meaningVi": "Trí tuệ nhân tạo (AI) điều hành đô thị thông minh.",
        "exampleSentenceEn": "Artificial intelligence balances green renewable energy across national power grids.",
        "exampleSentenceVi": "Trí tuệ nhân tạo điều tiết năng lượng tái tạo trên mạng lưới điện quốc gia.",
        "emoji": "🧠",
        "audioPromptEn": "Artificial intelligence. Smart AI technology."
      },
      {
        "id": "g5-adv5-v3",
        "word": "aerospace",
        "ipa": "/ˈeə.rəʊ.speɪs/",
        "partOfSpeech": "noun",
        "meaningEn": "The branch of technology concerned with aviation and space exploration.",
        "meaningVi": "Ngành công nghệ hàng không và khám phá vũ trụ.",
        "exampleSentenceEn": "Vietnamese aerospace engineers design Earth-observation satellites.",
        "exampleSentenceVi": "Các kỹ sư hàng không vũ trụ Việt Nam thiết kế vệ tinh quan sát Trái Đất.",
        "emoji": "🚀",
        "audioPromptEn": "Aerospace. Visionary aerospace exploration."
      },
      {
        "id": "g5-adv5-v4",
        "word": "carbon-neutral",
        "ipa": "/ˌkɑː.bən ˈnjuː.trəl/",
        "partOfSpeech": "adjective",
        "meaningEn": "Releasing no net greenhouse gases into the atmosphere.",
        "meaningVi": "Trung hòa carbon, không phát thải ròng gây hiệu ứng nhà kính.",
        "exampleSentenceEn": "Vietnam has committed to becoming fully carbon-neutral by mid-century.",
        "exampleSentenceVi": "Việt Nam cam kết trở thành quốc gia hoàn toàn trung hòa carbon vào giữa thế kỷ.",
        "emoji": "🌱",
        "audioPromptEn": "Carbon-neutral. A carbon-neutral nation."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv5-sp",
        "pattern": "By 2050, Vietnam will [action] by leveraging [breakthrough technology].",
        "patternMeaningVi": "Đến năm 2050, Việt Nam sẽ [mục tiêu] bằng cách tận dụng [công nghệ đột phá].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What is your vision for Vietnam in 2050, Young Leaders?"
          },
          {
            "speaker": "Explorer",
            "text": "By 2050, Vietnam will achieve net-zero carbon and operate ultra-fast magnetic levitation transit across the country!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Tầm nhìn của các em về đất nước Việt Nam năm 2050 là gì?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ đến năm 2050, Việt Nam sẽ đạt phát thải ròng bằng không và vận hành mạng lưới tàu đệm từ siêu tốc xuyên suốt đất nước ạ!"
          }
        ],
        "practicePromptEn": "Vietnamese young scientists will pioneer green AI aerospace solutions for our planet.",
        "practicePromptVi": "Các nhà khoa học trẻ Việt Nam sẽ tiên phong đưa ra giải pháp hàng không vũ trụ AI xanh cho hành tinh."
      }
    ],
    "reading": {
      "titleEn": "Dawn of Vietnam 2050",
      "titleVi": "Bình minh Việt Nam năm 2050",
      "wordCount": 63,
      "passagesEn": [
        "In the year 2050, Vietnam stands as a beacon of sustainable innovation, green prosperity, and advanced science.",
        "Sleek silver maglev trains whisper along elevated vacuum corridors at six hundred kilometers per hour, linking Hanoi, Da Nang, and Ho Chi Minh City seamlessly. Powered by deep offshore floating wind turbines and orbital solar stations, our carbon-neutral cities celebrate harmonious coexistence between nature, heritage, and human genius."
      ],
      "passagesVi": [
        "Vào năm 2050, Việt Nam vươn lên thành biểu tượng của sự đổi mới bền vững, thịnh vượng xanh và khoa học công nghệ tiên tiến.",
        "Những đoàn tàu đệm từ bạc bóng loáng lướt êm ru trong đường ống chân không trên cao với vận tốc sáu trăm cây số một giờ, kết nối liền mạch Hà Nội, Đà Nẵng và TP. Hồ Chí Minh. Được tiếp sức bởi các trang trại điện gió ngoài khơi xa và trạm năng lượng mặt trời trên quỹ đạo, những thành phố trung hòa carbon tôn vinh sự hài hòa giữa thiên nhiên, di sản và trí tuệ con người."
      ],
      "comprehensionTipsEn": "What speed do maglev trains achieve in the 2050 vision?",
      "comprehensionTipsVi": "Tàu đệm từ maglev đạt vận tốc bao nhiêu trong tầm nhìn năm 2050?",
      "readingImage": "/destinations/halong_bay.jpg"
    },
    "listening": {
      "audioTitleEn": "Captain Trang's 2050 Visionary Address",
      "audioScriptEn": "Young Leaders of Vietnam, look toward the horizon! You are the engineers, artists, and leaders who will shape the year 2050! With sharp minds, caring hearts, and global English skills, you will lead our beloved nation toward a brilliant, green, and boundless future! The future begins today!",
      "audioScriptVi": "Hỡi các nhà lãnh đạo tương lai của Việt Nam, hãy hướng tầm mắt về phía chân trời! Chính các em là những kỹ sư, nghệ sĩ và thủ lĩnh sẽ kiến tạo nên năm 2050! Với trí tuệ sắc bén, trái tim nhân ái và kỹ năng tiếng Anh toàn cầu, các em sẽ dẫn dắt đất nước thân yêu tới tương lai rạng rỡ, xanh mát và không giới hạn! Tương lai bắt đầu từ ngày hôm nay!",
      "speakerRole": "Captain Trang",
      "questionEn": "Who does Captain Trang state will build the inspiring future of Vietnam in 2050?",
      "questionVi": "Cô Trang khẳng định ai sẽ là người kiến tạo nên tương lai rực rỡ của Việt Nam năm 2050?",
      "options": [
        "The talented young students and explorers of today",
        "Supercomputers alone without people",
        "Visitors from outer space",
        "Old history books"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'We will build a smart, green Vietnam in 2050!'",
      "promptVi": "Em hãy nói: 'We will build a smart, green Vietnam in 2050!'",
      "targetSentenceEn": "We will build a smart, green Vietnam in 2050!",
      "targetSentenceVi": "Chúng em sẽ chung tay kiến tạo một Việt Nam thông minh và xanh tươi năm 2050!",
      "phoneticFocus": "/ˈmæɡ.lev/ in maglev and /ˈeə.rəʊ.speɪs/ in aerospace",
      "pronunciationTipsEn": "Speak with inspiring rhythm, clarity, and bold forward-looking conviction.",
      "pronunciationTipsVi": "Phát âm với ngữ điệu tự hào, mạch lạc và tràn đầy nhiệt huyết khát vọng tương lai.",
      "shadowAudioText": "We will build a smart, green Vietnam in 2050!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Vietnam 2050 Visionary Builder",
      "gameTitleVi": "Kiến tạo Việt Nam 2050",
      "instructionsEn": "Match each 2050 innovation to its futuristic icon!",
      "instructionsVi": "Nối công nghệ tương lai với biểu tượng đột phá tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "maglev",
          "promptVi": "tàu đệm từ siêu tốc",
          "targetMatch": "🚅",
          "emojiOrIcon": "🚅"
        },
        {
          "id": "m2",
          "promptEn": "artificial intelligence",
          "promptVi": "trí tuệ nhân tạo AI",
          "targetMatch": "🧠",
          "emojiOrIcon": "🧠"
        },
        {
          "id": "m3",
          "promptEn": "aerospace",
          "promptVi": "công nghệ vũ trụ",
          "targetMatch": "🚀",
          "emojiOrIcon": "🚀"
        },
        {
          "id": "m4",
          "promptEn": "carbon-neutral",
          "promptVi": "trung hòa carbon",
          "targetMatch": "🌱",
          "emojiOrIcon": "🌱"
        }
      ]
    },
    "questions": [
      {
        "id": "q-g5-adv5-1",
        "challengeLevel": 1,
        "levelNameEn": "Recognize",
        "levelNameVi": "Nhận biết",
        "questionEn": "What cutting-edge transit technology eliminates track friction using magnetic levitation?",
        "questionVi": "Công nghệ giao thông đột phá nào xóa bỏ ma sát đường ray nhờ đệm từ trường?",
        "options": [
          "Maglev train",
          "Horse carriage",
          "Steam locomotive",
          "Wooden raft"
        ],
        "correctIndex": 0,
        "explanationEn": "Maglev uses magnetic repulsion to float friction-free over guideways.",
        "explanationVi": "Tàu đệm từ ('Maglev train') sử dụng lực đẩy từ trường để bay lơ lửng không ma sát trên đường dẫn.",
        "learningSkill": "Vocabulary Recognition"
      },
      {
        "id": "q-g5-adv5-2",
        "challengeLevel": 2,
        "levelNameEn": "Connect",
        "levelNameVi": "Kết nối",
        "questionEn": "What does achieving 'carbon neutrality' mean for Vietnam by 2050?",
        "questionVi": "Mục tiêu 'trung hòa carbon' có ý nghĩa gì đối với Việt Nam vào năm 2050?",
        "options": [
          "Balancing greenhouse gas emissions with absorption, releasing zero net carbon into the atmosphere",
          "Stopping all technological development",
          "Cutting down all forests",
          "Closing all schools and factories"
        ],
        "correctIndex": 0,
        "explanationEn": "Carbon neutrality means balancing human carbon output with absorption, halting global warming.",
        "explanationVi": "Trung hòa carbon là cân bằng lượng phát thải với khả năng hấp thụ, đưa phát thải ròng về bằng 0 ('zero net carbon').",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv5-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "Deliver a powerful closing pledge for a student conference on Vietnam 2050:",
        "questionVi": "Chọn lời cam kết bế mạc mạnh mẽ cho hội nghị học sinh về Việt Nam năm 2050:",
        "options": [
          "'Equipped with knowledge, innovation, and pride in our heritage, we pledge to lead Vietnam into a prosperous, sustainable, and carbon-neutral 2050!'",
          "'I just want to go home and sleep.'",
          "'Nothing will ever change.'",
          "'Technology is too difficult for us.'"
        ],
        "correctIndex": 0,
        "explanationEn": "A forward-looking pledge unites knowledge, sustainability, and national pride in eloquent English.",
        "explanationVi": "Lời cam kết truyền cảm hứng gắn kết tri thức, đổi mới sáng tạo và niềm tự hào di sản để kiến tạo tương lai đất nước.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "2050 STEM Terms",
          "standardEn": "Mastery of maglev, artificial intelligence, aerospace, carbon-neutral.",
          "standardVi": "Nắm vững thuật ngữ STEM và công nghệ tương lai."
        },
        {
          "skill": "Visionary Leadership",
          "standardEn": "Articulates forward-looking citizenship and climate goals.",
          "standardVi": "Thể hiện tư duy lãnh đạo tương lai và cam kết bảo vệ khí hậu."
        }
      ]
    },
    "status": "published",
    "verification": {
      "isVerifiedByTeacher": true,
      "teacherName": "Ms. Trần Thị Thu Trang",
      "isAiGenerated": false,
      "sourceReferences": [
        "Circular 27/2020/TT-BGDDT Grade 5 Future",
        "Vietnam National Green Growth Strategy & Net Zero 2050 Commitments"
      ],
      "humanEditorNotes": "Grade 5 Adventure 5 Vietnam 2050."
    },
    "createdAt": "2026-10-15",
    "updatedAt": "2026-10-15"
  }
];
