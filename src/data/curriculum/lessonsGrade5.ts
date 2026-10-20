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
      "Master 4 cave adventure vocabulary terms: adventure, cavern, sinkhole, giant.",
      "Deliver an informational presentation: 'Son Doong is such a giant cave that it contains [features].'",
      "Explain how geological forces created the world's largest natural cave in Vietnam."
    ],
    "learningObjectivesVi": [
      "Nắm vững 4 từ vựng thám hiểm: adventure, cavern, sinkhole, giant.",
      "Thực hành thuyết trình: 'Son Doong is such a giant cave that it has its own weather system.'",
      "Giải thích quá trình kiến tạo địa chất kỳ vĩ của hang động lớn nhất thế giới."
    ],
    "coverImage": "/destinations/phong_nha.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g5-adv1-v1",
        "word": "adventure",
        "ipa": "/ədˈven.tʃɚ/",
        "partOfSpeech": "noun",
        "meaningEn": "An exciting and daring journey or experience.",
        "meaningVi": "Chuyến phiêu lưu khám phá kỳ thú.",
        "exampleSentenceEn": "Exploring Son Doong Cave is an exciting adventure.",
        "exampleSentenceVi": "Khám phá hang Sơn Đoòng là một chuyến phiêu lưu kỳ thú.",
        "emoji": "🧗",
        "audioPromptEn": "Adventure. An exciting cave adventure."
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
        "word": "giant",
        "ipa": "/ˈdʒaɪ.ənt/",
        "partOfSpeech": "adjective",
        "meaningEn": "Extremely large, huge, and impressive.",
        "meaningVi": "Khổng lồ, to lớn đồ sộ.",
        "exampleSentenceEn": "Son Doong is a giant cave in Vietnam.",
        "exampleSentenceVi": "Sơn Đoòng là hang động khổng lồ có cả khu rừng bên trong.",
        "emoji": "🏔️",
        "audioPromptEn": "Giant. A giant natural cave."
      }
    ],
    "sentencePatterns": [
      {
        "id": "g5-adv1-sp",
        "pattern": "Son Doong is such a giant cave that it [remarkable capability/feature].",
        "patternMeaningVi": "Hang Sơn Đoòng đồ sộ đến mức nó [đặc điểm phi thường].",
        "dialogueEn": [
          {
            "speaker": "Captain Trang",
            "text": "What surprised world explorers most about Son Doong, Young Leaders?"
          },
          {
            "speaker": "Explorer",
            "text": "It is such a giant cave that it forms its own clouds and a pristine underground rainforest!"
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
      "audioTitleEn": "Cave Adventure Briefing",
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
      "phoneticFocus": "/dʒaɪ/ in giant and /ədˈven/ in adventure",
      "pronunciationTipsEn": "Place stress on the second syllable of co-LOS-sal.",
      "pronunciationTipsVi": "Nhấn trọng âm rõ ràng vào âm tiết thứ hai trong từ co-LOS-sal.",
      "shadowAudioText": "Son Doong is the largest cave in the world!"
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Son Doong Adventure Quest",
      "gameTitleVi": "Thám hiểm vương quốc Sơn Đoòng",
      "instructionsEn": "Match each scientific term to its geological discovery!",
      "instructionsVi": "Nối thuật ngữ khoa học với kỳ quan địa chất tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "adventure",
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
          "promptEn": "giant",
          "promptVi": "khổng lồ, to lớn",
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
          "'Welcome everyone! Today I am thrilled to introduce Son Doong, Vietnam’s giant subterranean kingdom that rewrites our understanding of Earth’s natural wonders.'",
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
          "standardEn": "Mastery of adventure, cavern, sinkhole, giant.",
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
      "Learn 4 cultural heritage terms: tradition, instrument, woodblock, folk art.",
      "Use the sentence pattern: 'Nha Nhac is a treasured Vietnamese musical tradition because [reason].'",
      "Analyze how traditional folk art and music preserve Vietnamese national identity."
    ],
    "learningObjectivesVi": [
      "Học 4 từ di sản văn hóa: tradition, instrument, woodblock, folk art.",
      "Nói câu phân tích: 'Nha Nhac is a proud traditional court music of Vietnam.'",
      "Phân tích nét đặc sắc của tranh khắc gỗ Đông Hồ và nhã nhạc cung đình Huế."
    ],
    "coverImage": "/destinations/hue.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g5-adv2-v1",
        "word": "tradition",
        "ipa": "/trəˈdɪʃ.ən/",
        "partOfSpeech": "noun",
        "meaningEn": "A custom or belief passed down through generations.",
        "meaningVi": "Truyền thống văn hóa tốt đẹp của dân tộc.",
        "exampleSentenceEn": "Nha Nhac royal music is an ancient Vietnamese tradition.",
        "exampleSentenceVi": "Nhã nhạc cung đình là truyền thống văn hóa lâu đời của Việt Nam.",
        "emoji": "🎶",
        "audioPromptEn": "Tradition. A proud musical tradition."
      },
      {
        "id": "g5-adv2-v2",
        "word": "instrument",
        "ipa": "/ˈɪn.strə.mənt/",
        "partOfSpeech": "noun",
        "meaningEn": "An object or device used for producing musical sounds.",
        "meaningVi": "Nhạc cụ cổ truyền dân tộc.",
        "exampleSentenceEn": "Musicians play traditional instruments like drums and lutes.",
        "exampleSentenceVi": "Các nghệ nhân hòa tấu các nhạc cụ truyền thống như trống và đàn nguyệt.",
        "emoji": "🪕",
        "audioPromptEn": "Instrument. Traditional musical instruments."
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
        "word": "folk art",
        "ipa": "/foʊk ɑːrt/",
        "partOfSpeech": "noun",
        "meaningEn": "Traditional art created by common people expressing cultural life.",
        "meaningVi": "Nghệ thuật tranh dân gian truyền thống.",
        "exampleSentenceEn": "Dong Ho folk art shows happy village life.",
        "exampleSentenceVi": "Tranh dân gian Đông Hồ khắc họa những cảnh sinh hoạt làng quê vui tươi.",
        "emoji": "🖼️",
        "audioPromptEn": "Folk art. Dong Ho folk art."
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
            "text": "Because it embodies centuries of refined courtly philosophy, musical artistry, and Vietnamese tradition!"
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
      "promptEn": "Say: 'Nha Nhac Hue is a treasured cultural tradition!'",
      "promptVi": "Em hãy nói: 'Nha Nhac Hue is a treasured cultural tradition!'",
      "targetSentenceEn": "Nha Nhac Hue is a treasured cultural tradition!",
      "targetSentenceVi": "Nhã nhạc cung đình Huế là kiệt tác di sản văn hóa phi vật thể của nhân loại!",
      "phoneticFocus": "/trəˈdɪʃ/ in tradition and /ˈɪn.strə/ in instrument",
      "pronunciationTipsEn": "Emphasize the second syllable in in-TAN-gi-ble.",
      "pronunciationTipsVi": "Nhấn trọng âm vào âm tiết thứ hai trong in-TAN-gi-ble.",
      "shadowAudioText": "Nha Nhac Hue is a treasured cultural tradition!"
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
          "promptEn": "tradition",
          "promptVi": "truyền thống văn hóa",
          "targetMatch": "🎶",
          "emojiOrIcon": "🎶"
        },
        {
          "id": "m2",
          "promptEn": "instrument",
          "promptVi": "nhạc cụ cổ truyền",
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
          "promptEn": "folk art",
          "promptVi": "nghệ thuật dân gian",
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
        "questionEn": "What does 'cultural tradition' mean in Vietnamese heritage?",
        "questionVi": "'Truyền thống văn hóa' trong di sản Việt Nam có ý nghĩa là gì?",
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
          "skill": "Cultural Heritage Terms",
          "standardEn": "Understands tradition, instrument, woodblock, folk art.",
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
      "Learn 4 culinary terms: flavor, balance, star anise, healthy.",
      "Use the sentence pattern: 'Vietnamese cuisine balances Yin and Yang by pairing [ingredient] with [counterpart].'",
      "Explain how the five basic tastes (sweet, sour, salty, bitter, spicy) correlate with Vietnamese natural health."
    ],
    "learningObjectivesVi": [
      "Học 4 từ ẩm thực truyền thống: flavor, balance, star anise, healthy.",
      "Nói câu phân tích: 'Vietnamese cooking balances cooling Yin and warming Yang ingredients.'",
      "Giải thích sự kết hợp hài hòa ngũ vị (chua, cay, mặn, ngọt, đắng) tốt cho sức khỏe."
    ],
    "coverImage": "/destinations/danang.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g5-adv3-v1",
        "word": "flavor",
        "ipa": "/ˈfleɪ.vɚ/",
        "partOfSpeech": "noun",
        "meaningEn": "The distinctive taste of food or drink.",
        "meaningVi": "Hương vị thơm ngon đậm đà của món ăn.",
        "exampleSentenceEn": "Traditional spices give Vietnamese pho a rich flavor.",
        "exampleSentenceVi": "Các loại gia vị truyền thống mang lại hương vị đậm đà cho phở Việt.",
        "emoji": "🍜",
        "audioPromptEn": "Flavor. Rich culinary flavor."
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
        "word": "healthy",
        "ipa": "/ˈhel.θi/",
        "partOfSpeech": "adjective",
        "meaningEn": "Good for your body, helping you stay well and strong.",
        "meaningVi": "Lành mạnh, bổ dưỡng, tốt cho sức khỏe.",
        "exampleSentenceEn": "Fresh herbs and greens make pho soup very healthy.",
        "exampleSentenceVi": "Rau thơm tươi giúp món phở rất tốt cho sức khỏe.",
        "emoji": "🥗",
        "audioPromptEn": "Healthy. Fresh healthy food."
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
      "audioScriptEn": "Welcome to the Masterchef kitchen! Take a deep breath! That sweet, licorice-like aroma is roasted star anise and cinnamon simmering with beef bones for twelve straight hours! Notice how we balance spicy chili with cooling lime juice! That is pure culinary flavor!",
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
      "phoneticFocus": "/ˈfleɪ.vɚ/ in flavor and /ˌæn.ɪs/ in anise",
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
          "promptEn": "flavor",
          "promptVi": "hương vị thơm ngon",
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
          "promptEn": "healthy",
          "promptVi": "tốt cho sức khỏe",
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
          "standardEn": "Mastery of flavor, balance, star anise, healthy.",
          "standardVi": "Nắm vững thuật ngữ triết lý ẩm thực."
        },
        {
          "skill": "Health Communication",
          "standardEn": "Explains healthy virtues of Vietnamese cooking.",
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
    "titleEn": "Eco Heroes: Saving the Cat Ba Langur",
    "titleVi": "Anh hùng bảo vệ hệ sinh thái: Cứu hộ Voọc Cát Bà",
    "topicEn": "Critically Endangered Primates, National Parks, and Island Conservation",
    "topicVi": "Linh trưởng cực kỳ nguy cấp, vườn quốc gia và bảo tồn đảo Cát Bà",
    "gradeLevel": "Grade 5",
    "gradeBand": "grade_5",
    "targetCefr": "A1-A2 Extension",
    "durationMinutes": 45,
    "learningObjectivesEn": [
      "Acquire 4 wildlife conservation terms: wildlife, animal rescue, national park, island.",
      "Use the sentence pattern: 'Unless we protect the forest, rare langurs will face extinction.'",
      "Formulate an action plan for youth wildlife stewardship in Cat Ba National Park."
    ],
    "learningObjectivesVi": [
      "Học 4 từ vựng bảo tồn thiên nhiên: wildlife, animal rescue, national park, island.",
      "Nói câu điều kiện: 'Unless we protect the forest, rare langurs will face extinction.'",
      "Xây dựng kế hoạch hành động nhí bảo vệ loài voọc tại Vườn quốc gia Cát Bà."
    ],
    "coverImage": "/assets/vocab/national_park.webp",
    "coverImageAttribution": "Cat Ba National Park / VietDiscovery Archive",
    "vocabulary": [
      {
        "id": "g5-adv4-v1",
        "word": "wildlife",
        "ipa": "/ˈwaɪld.laɪf/",
        "partOfSpeech": "noun",
        "meaningEn": "Wild animals, birds, and plants living in their natural environment.",
        "meaningVi": "Động thực vật hoang dã.",
        "exampleSentenceEn": "Cat Ba Island is home to rare forest wildlife.",
        "exampleSentenceVi": "Đảo Cát Bà là ngôi nhà của nhiều loài động vật hoang dã quý hiếm.",
        "emoji": "🐒",
        "audioPromptEn": "Wildlife. Rare forest wildlife."
      },
      {
        "id": "g5-adv4-v2",
        "word": "animal rescue",
        "ipa": "/ˈæn.ə.məl ˈres.kjuː/",
        "partOfSpeech": "noun",
        "meaningEn": "The caring act of saving injured or endangered animals.",
        "meaningVi": "Hoạt động cứu hộ động vật hoang dã.",
        "exampleSentenceEn": "Rangers run an animal rescue center to protect langurs.",
        "exampleSentenceVi": "Các kiểm lâm viên điều hành trung tâm cứu hộ động vật để bảo vệ loài voọc.",
        "emoji": "🛡️",
        "audioPromptEn": "Animal rescue. Forest animal rescue."
      },
      {
        "id": "g5-adv4-v3",
        "word": "national park",
        "ipa": "/ˌnæʃ.ən.əl ˈpɑːrk/",
        "partOfSpeech": "noun",
        "meaningEn": "A protected natural area where rare wildlife is conserved.",
        "meaningVi": "Vườn quốc gia bảo tồn thiên nhiên hoang dã.",
        "exampleSentenceEn": "Cat Ba National Park protects rare langurs on cliffs.",
        "exampleSentenceVi": "Vườn quốc gia Cát Bà bảo vệ loài voọc quý trên vách đá.",
        "emoji": "🏞️",
        "audioPromptEn": "National park. Cat Ba National Park."
      },
      {
        "id": "g5-adv4-v4",
        "word": "island",
        "ipa": "/ˈaɪ.lənd/",
        "partOfSpeech": "noun",
        "meaningEn": "A piece of land surrounded by water, like Cat Ba.",
        "meaningVi": "Hòn đảo xanh giữa biển khơi.",
        "exampleSentenceEn": "Cat Ba is a green island with rare langurs.",
        "exampleSentenceVi": "Cát Bà là hòn đảo xanh với loài voọc quý hiếm.",
        "emoji": "🏝️",
        "audioPromptEn": "Island. Cat Ba green island."
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
            "text": "Unless we protect the forest and stop hunting, rare Cat Ba langurs will face extinction!"
          }
        ],
        "dialogueVi": [
          {
            "speaker": "Cô Trang",
            "text": "Trách nhiệm của chúng ta với vai trò Đại sứ sinh thái nhí là gì?"
          },
          {
            "speaker": "Học sinh",
            "text": "Dạ nếu chúng ta không bảo vệ rừng và ngăn chặn săn bắt, loài voọc Cát Bà quý sẽ đối mặt với nguy cơ tuyệt chủng ạ!"
          }
        ],
        "practicePromptEn": "By protecting Cat Ba Island, we safeguard rare wildlife for generations to come.",
        "practicePromptVi": "Bằng cách bảo vệ đảo Cát Bà, chúng ta gìn giữ động thực vật hoang dã quý hiếm cho muôn đời sau."
      }
    ],
    "reading": {
      "titleEn": "Guardians of Cat Ba Langurs",
      "titleVi": "Những người canh giữ loài voọc Cát Bà",
      "wordCount": 58,
      "passagesEn": [
        "With thousands of green limestone islands, Cat Ba is home to remarkable endemic wildlife.",
        "In Cat Ba National Park, only about seventy golden-headed langurs—the world's rarest primate—live along sheer seaside cliffs. Dedicated rangers and volunteers run an animal rescue mission to protect their forest habitat, ensuring these precious primates thrive safely on the island."
      ],
      "passagesVi": [
        "Với hàng ngàn hòn đảo đá vôi xanh ngát, Cát Bà là ngôi nhà của nhiều loài động vật đặc hữu kỳ diệu.",
        "Tại Vườn quốc gia Cát Bà, chỉ còn khoảng bảy mươi cá thể voọc đầu vàng - loài linh trưởng quý hiếm nhất hành tinh - sinh sống dọc vách đá cheo leo. Các kiểm lâm viên và tình nguyện viên tận tụy điều hành sứ mệnh cứu hộ động vật để bảo vệ môi trường rừng, giúp loài linh trưởng quý giá phát triển an toàn trên đảo."
      ],
      "comprehensionTipsEn": "Approximately how many Cat Ba langurs survive in the wild today?",
      "comprehensionTipsVi": "Hiện nay còn khoảng bao nhiêu cá thể voọc Cát Bà sinh sống trong tự nhiên?",
      "readingImage": "/assets/vocab/national_park.webp"
    },
    "listening": {
      "audioTitleEn": "Cat Ba Langur Forest Patrol",
      "audioScriptEn": "Morning patrol in Cat Ba National Park! Look up at the high limestone cliffs! A family of rare golden-headed langurs is leaping through the green trees! One, two, three... young langurs staying close to their mother! Rangers guard their forest day and night so this endangered wildlife stays safe on Cat Ba Island!",
      "audioScriptVi": "Ca tuần tra buổi sớm tại Vườn quốc gia Cát Bà! Hãy nhìn lên những vách đá vôi cao vút! Một gia đình voọc đầu vàng quý hiếm đang chuyền cành qua những tán cây xanh! Một, hai, ba... những chú voọc con quấn quýt bên mẹ! Các kiểm lâm viên ngày đêm canh gác rừng xanh để loài động vật hoang dã nguy cấp được an toàn trên đảo Cát Bà!",
      "speakerRole": "Captain Trang",
      "questionEn": "Where do rare Cat Ba langurs live safely inside Cat Ba National Park?",
      "questionVi": "Loài voọc Cát Bà quý hiếm sinh sống an toàn ở đâu trong Vườn quốc gia Cát Bà?",
      "options": [
        "High on limestone cliffs and green forest canopies",
        "Deep beneath the ocean floor",
        "Inside crowded city streets",
        "In underground coal mines"
      ],
      "correctIndex": 0,
      "audioSlowAvailable": true
    },
    "speaking": {
      "promptEn": "Say: 'We must protect Cat Ba langurs and their forest.'",
      "promptVi": "Em hãy nói: 'We must protect Cat Ba langurs and their forest.'",
      "targetSentenceEn": "We must protect Cat Ba langurs and their forest.",
      "targetSentenceVi": "Chúng ta phải bảo vệ loài voọc Cát Bà và khu rừng của chúng.",
      "phoneticFocus": "/prəˈtekt/ in protect and /ˈfɔːr.ɪst/ in forest",
      "pronunciationTipsEn": "Say pro-tect clearly, then emphasize forest.",
      "pronunciationTipsVi": "Phát âm rõ ràng từ pro-tect (/prəˈtekt/) và nhấn trọng âm từ forest (/ˈfɔːr.ɪst/).",
      "shadowAudioText": "We must protect Cat Ba langurs and their forest."
    },
    "interactiveGame": {
      "gameType": "word_picture_match",
      "gameTitleEn": "Cat Ba Langur Eco Mission",
      "gameTitleVi": "Nhiệm vụ sinh thái Cát Bà",
      "instructionsEn": "Match each eco term to its conservation mission icon!",
      "instructionsVi": "Nối thuật ngữ môi trường với biểu tượng sứ mệnh tương ứng nhé!",
      "items": [
        {
          "id": "m1",
          "promptEn": "wildlife",
          "promptVi": "động vật hoang dã",
          "targetMatch": "🌍",
          "emojiOrIcon": "🌍"
        },
        {
          "id": "m2",
          "promptEn": "animal rescue",
          "promptVi": "cứu hộ động vật",
          "targetMatch": "🛡️",
          "emojiOrIcon": "🛡️"
        },
        {
          "id": "m3",
          "promptEn": "national park",
          "promptVi": "vườn quốc gia",
          "targetMatch": "🏞️",
          "emojiOrIcon": "🏞️"
        },
        {
          "id": "m4",
          "promptEn": "island",
          "promptVi": "hòn đảo xanh",
          "targetMatch": "🏝️",
          "emojiOrIcon": "🏝️"
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
        "questionEn": "Why is Cat Ba National Park vital for the survival of the Cat Ba langur?",
        "questionVi": "Vì sao Vườn quốc gia Cát Bà lại có vai trò sống còn đối với sự sinh tồn của loài voọc Cát Bà?",
        "options": [
          "It protects their natural forest habitat and prevents illegal hunting",
          "It teaches langurs how to drive electric cars",
          "It provides air conditioning for the limestone caves",
          "It moves all the animals into shopping malls"
        ],
        "correctIndex": 0,
        "explanationEn": "Cat Ba National Park protects the limestone forest ecosystem and strictly prevents poaching of rare langurs.",
        "explanationVi": "Vườn quốc gia Cát Bà bảo vệ hệ sinh thái rừng vách đá tự nhiên và ngăn chặn triệt để nạn săn bắt voọc quý.",
        "learningSkill": "Cultural Connection"
      },
      {
        "id": "q-g5-adv4-3",
        "challengeLevel": 3,
        "levelNameEn": "Apply",
        "levelNameVi": "Vận dụng",
        "questionEn": "What should students do to help protect Cat Ba langurs and wildlife?",
        "questionVi": "Học sinh nên làm gì để góp phần bảo vệ loài voọc Cát Bà và động vật hoang dã?",
        "options": [
          "Protect forests, say no to wild animal products, and raise eco awareness",
          "Feed wild langurs candy and plastic bottles",
          "Cut down forest trees on the limestone hills",
          "Ignore all nature conservation activities"
        ],
        "correctIndex": 0,
        "explanationEn": "Refusing wildlife trade and supporting forest protection safeguards endangered species.",
        "explanationVi": "Không tiêu thụ sản phẩm từ động vật hoang dã và tuyên truyền bảo vệ rừng là hành động thiết thực của học sinh.",
        "learningSkill": "Communicative Application"
      }
    ],
    "assessment": {
      "starsAwarded": 30,
      "minimumPassScorePercent": 60,
      "criteria": [
        {
          "skill": "Ecology Terms",
          "standardEn": "Mastery of wildlife, animal rescue, national park, island.",
          "standardVi": "Nắm vững thuật ngữ bảo tồn loài voọc và vườn quốc gia Cát Bà."
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
      "Acquire 4 future city English terms: high-speed train, smart city, rocket, plant trees.",
      "Construct complex future conditional statements: 'By 2050, Vietnam will achieve [goal] through [innovation].'",
      "Articulate a bold 21st-century vision for Vietnam's youth leadership on the world stage."
    ],
    "learningObjectivesVi": [
      "Học 4 từ vựng thành phố tương lai: high-speed train, smart city, rocket, plant trees.",
      "Nói câu tầm nhìn tương lai: 'By 2050, Vietnam will achieve net-zero carbon through clean technology.'",
      "Khẳng định khát vọng và vai trò tiên phong của thế hệ trẻ Việt Nam năm 2050."
    ],
    "coverImage": "/destinations/halong_bay.jpg",
    "coverImageAttribution": "VietDiscovery Team",
    "vocabulary": [
      {
        "id": "g5-adv5-v1",
        "word": "high-speed train",
        "ipa": "/ˌhaɪˈspiːd ˈtreɪn/",
        "partOfSpeech": "noun",
        "meaningEn": "A very fast passenger train operating at high speeds.",
        "meaningVi": "Đoàn tàu cao tốc hiện đại chạy êm ru.",
        "exampleSentenceEn": "A modern high-speed train connects big cities quickly.",
        "exampleSentenceVi": "Đoàn tàu cao tốc hiện đại kết nối các thành phố lớn thật nhanh chóng.",
        "emoji": "🚅",
        "audioPromptEn": "High-speed train. Modern high-speed train."
      },
      {
        "id": "g5-adv5-v2",
        "word": "smart city",
        "ipa": "/ˈsmɑːrt ˌsɪt.i/",
        "partOfSpeech": "noun",
        "meaningEn": "An urban area that uses modern technology and green energy.",
        "meaningVi": "Đô thị thông minh hiện đại và bền vững.",
        "exampleSentenceEn": "Clean technology powers our green smart city.",
        "exampleSentenceVi": "Công nghệ sạch cung cấp năng lượng cho đô thị thông minh của chúng ta.",
        "emoji": "🏙️",
        "audioPromptEn": "Smart city. A green smart city."
      },
      {
        "id": "g5-adv5-v3",
        "word": "rocket",
        "ipa": "/ˈrɑː.kɪt/",
        "partOfSpeech": "noun",
        "meaningEn": "A powerful vehicle that travels into outer space.",
        "meaningVi": "Tên lửa vũ trụ vút bay vào không gian.",
        "exampleSentenceEn": "A powerful rocket carries satellites into space.",
        "exampleSentenceVi": "Tên lửa mạnh mẽ mang theo các vệ tinh bay vào vũ trụ.",
        "emoji": "🚀",
        "audioPromptEn": "Rocket. A modern space rocket."
      },
      {
        "id": "g5-adv5-v4",
        "word": "plant trees",
        "ipa": "/plænt triːz/",
        "partOfSpeech": "verb",
        "meaningEn": "To put young trees into the ground so they will grow.",
        "meaningVi": "Trồng cây xanh bảo vệ môi trường.",
        "exampleSentenceEn": "Students plant trees to make our city green.",
        "exampleSentenceVi": "Các bạn học sinh trồng cây xanh để giữ cho thành phố luôn trong lành tươi đẹp.",
        "emoji": "🌱",
        "audioPromptEn": "Plant trees. Plant trees for the future."
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
        "practicePromptEn": "Vietnamese young scientists will pioneer green smart city and rocket solutions for our planet.",
        "practicePromptVi": "Các nhà khoa học trẻ Việt Nam sẽ tiên phong đưa ra giải pháp hàng không vũ trụ AI xanh cho hành tinh."
      }
    ],
    "reading": {
      "titleEn": "Dawn of Vietnam 2050",
      "titleVi": "Bình minh Việt Nam năm 2050",
      "wordCount": 63,
      "passagesEn": [
        "In the year 2050, Vietnam stands as a beacon of sustainable innovation, green prosperity, and advanced science.",
        "Sleek silver high-speed trains whisper along elevated modern corridors at six hundred kilometers per hour, linking Hanoi, Da Nang, and Ho Chi Minh City seamlessly. Powered by deep offshore floating wind turbines and orbital solar stations, our green smart cities celebrate harmonious coexistence between nature, heritage, and human genius."
      ],
      "passagesVi": [
        "Vào năm 2050, Việt Nam vươn lên thành biểu tượng của sự đổi mới bền vững, thịnh vượng xanh và khoa học công nghệ tiên tiến.",
        "Những đoàn tàu đệm từ bạc bóng loáng lướt êm ru trong đường ống chân không trên cao với vận tốc sáu trăm cây số một giờ, kết nối liền mạch Hà Nội, Đà Nẵng và TP. Hồ Chí Minh. Được tiếp sức bởi các trang trại điện gió ngoài khơi xa và trạm năng lượng mặt trời trên quỹ đạo, những thành phố trung hòa carbon tôn vinh sự hài hòa giữa thiên nhiên, di sản và trí tuệ con người."
      ],
      "comprehensionTipsEn": "What speed do high-speed trains achieve in the 2050 vision?",
      "comprehensionTipsVi": "Đoàn tàu cao tốc đạt vận tốc bao nhiêu trong tầm nhìn năm 2050?",
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
      "phoneticFocus": "/ˌhaɪˈspiːd/ in high-speed train and /ˈrɑː.kɪt/ in rocket",
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
          "promptEn": "high-speed train",
          "promptVi": "tàu cao tốc",
          "targetMatch": "🚅",
          "emojiOrIcon": "🚅"
        },
        {
          "id": "m2",
          "promptEn": "smart city",
          "promptVi": "đô thị thông minh",
          "targetMatch": "🧠",
          "emojiOrIcon": "🧠"
        },
        {
          "id": "m3",
          "promptEn": "rocket",
          "promptVi": "tên lửa vũ trụ",
          "targetMatch": "🚀",
          "emojiOrIcon": "🚀"
        },
        {
          "id": "m4",
          "promptEn": "plant trees",
          "promptVi": "trồng cây xanh",
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
          "'Equipped with knowledge, innovation, and pride in our heritage, we pledge to lead Vietnam into a prosperous, sustainable, and green 2050!'",
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
          "standardEn": "Mastery of high-speed train, smart city, rocket, plant trees.",
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
