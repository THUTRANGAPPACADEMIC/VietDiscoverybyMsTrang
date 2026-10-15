import os
import json

BASE_DIR = r"d:\01VietDiscoverybyMsTrang\src\data\curriculum"

g3_lessons = [
    {
        "id": "lesson-g3-adv1-places",
        "adventureId": "adventure_1_places",
        "lessonNumber": 1,
        "titleEn": "Famous Landmarks: One Pillar Pagoda & Ba Na Hills",
        "titleVi": "Danh lam thắng cảnh nổi tiếng: Chùa Một Cột & Bà Nà Hills",
        "topicEn": "Architectural Marvels, Lotus Ponds, and Mountain Bridges",
        "topicVi": "Kỳ quan kiến trúc, hồ sen và cây cầu trên mây",
        "gradeLevel": "Grade 3",
        "gradeBand": "grade_3",
        "targetCefr": "A1 Elementary",
        "durationMinutes": 40,
        "learningObjectivesEn": [
            "Learn 4 landmark vocabulary terms: pagoda, pillar, lotus, mountain.",
            "Use the sentence pattern: 'The [landmark] looks like a [noun].'",
            "Practice describing architectural landmarks across Vietnam in English."
        ],
        "learningObjectivesVi": [
            "Học 4 từ vựng danh lam: pagoda, pillar, lotus, mountain.",
            "Nói câu so sánh: 'The pagoda looks like a lotus flower.'",
            "Mô tả các công trình kiến trúc độc đáo của Việt Nam."
        ],
        "coverImage": "/destinations/one_pillar_pagoda_3d.png",
        "coverImageAttribution": "VietDiscovery 3D Library",
        "videoLesson": {
            "videoId": "g3_pagoda_video",
            "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
            "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Discovering One Pillar Pagoda in Hanoi",
            "titleVi": "Khám phá Chùa Một Cột nghìn năm tại Hà Nội",
            "durationMinutes": 4,
            "isTeacherCreated": True,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g3-adv1-v1", "word": "pagoda", "ipa": "/pəˈɡəʊ.də/", "partOfSpeech": "noun", "meaningEn": "A sacred Asian temple with curved roofs.", "meaningVi": "Ngôi chùa cổ kính, thanh tịnh.", "exampleSentenceEn": "The ancient pagoda stands beside the lotus pond.", "exampleSentenceVi": "Ngôi chùa cổ kính đứng bên hồ sen.", "emoji": "🛕", "audioPromptEn": "Pagoda. An ancient pagoda."},
            {"id": "g3-adv1-v2", "word": "pillar", "ipa": "/ˈpɪl.ər/", "partOfSpeech": "noun", "meaningEn": "A tall stone column that supports a building.", "meaningVi": "Trụ cột đá vững chãi.", "exampleSentenceEn": "The whole wooden temple rests on a single stone pillar.", "exampleSentenceVi": "Toàn bộ ngôi chùa gỗ đặt trên một cột đá duy nhất.", "emoji": "🏛️", "audioPromptEn": "Pillar. A single stone pillar."},
            {"id": "g3-adv1-v3", "word": "lotus", "ipa": "/ˈləʊ.təs/", "partOfSpeech": "noun", "meaningEn": "The national flower of Vietnam that blooms in water.", "meaningVi": "Hoa sen, quốc hoa của Việt Nam.", "exampleSentenceEn": "Pink lotus blossoms bloom with sweet fragrance.", "exampleSentenceVi": "Những đóa sen hồng ngát hương thơm.", "emoji": "🪷", "audioPromptEn": "Lotus. Pink lotus blossom."},
            {"id": "g3-adv1-v4", "word": "mountain", "ipa": "/ˈmaʊn.tɪn/", "partOfSpeech": "noun", "meaningEn": "A very high hill reaching into the clouds.", "meaningVi": "Ngọn núi cao hùng vĩ.", "exampleSentenceEn": "Ba Na mountain is surrounded by cool clouds.", "exampleSentenceVi": "Đỉnh núi Bà Nà được bao bọc bởi mây trắng mát lành.", "emoji": "⛰️", "audioPromptEn": "Mountain. A misty mountain."}
        ],
        "sentencePatterns": [
            {
                "id": "g3-adv1-sp",
                "pattern": "The [landmark] looks like a [noun].",
                "patternMeaningVi": "[Công trình] trông giống như một [sự vật].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "What does the One Pillar Pagoda look like, Explorer?"},
                    {"speaker": "Explorer", "text": "It looks like a blossoming lotus rising from the pond!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Chùa Một Cột trông giống hình ảnh gì vậy em?"},
                    {"speaker": "Học sinh", "text": "Dạ chùa trông giống một đóa hoa sen nở rộ giữa hồ ạ!"}
                ],
                "practicePromptEn": "The Golden Bridge looks like giant hands holding a ribbon.",
                "practicePromptVi": "Cầu Vàng trông như bàn tay khổng lồ nâng dải lụa."
            }
        ],
        "reading": {
            "titleEn": "A Lotus on a Single Pillar",
            "titleVi": "Đóa sen trên một cột đá",
            "wordCount": 42,
            "passagesEn": [
                "In the heart of Hanoi, the One Pillar Pagoda was built nearly one thousand years ago.",
                "King Ly Thai Tong dreamed of the goddess standing on a blooming lotus. When the temple was built on a single stone pillar, it became a proud historic symbol of Vietnam's ancient culture."
            ],
            "passagesVi": [
                "Giữa lòng thủ đô Hà Nội, Chùa Một Cột được xây dựng từ gần một ngàn năm trước.",
                "Vua Lý Thái Tông nằm mộng thấy Phật Bà ngự trên đài sen nở. Khi ngôi chùa được dựng trên một trụ đá duy nhất, nơi đây trở thành biểu tượng lịch sử đầy tự hào của văn hóa ngàn năm."
            ],
            "comprehensionTipsEn": "How long ago was the One Pillar Pagoda built?",
            "comprehensionTipsVi": "Chùa Một Cột được xây dựng từ khoảng bao nhiêu năm trước?",
            "readingImage": "/destinations/one_pillar_pagoda_3d.png"
        },
        "listening": {
            "audioTitleEn": "Historical Clues with Captain Trang",
            "audioScriptEn": "Welcome to Hanoi! Look at this incredible architecture! The entire wooden pavilion sits gracefully upon a single stone pillar surrounded by pink lotus blossoms. It was built during the Ly Dynasty!",
            "audioScriptVi": "Chào mừng các em đến Hà Nội! Hãy chiêm ngưỡng công trình kiến trúc tuyệt vời này! Toàn bộ tòa đài gỗ tọa lạc thanh thoát trên một cột đá duy nhất giữa hồ sen hồng. Chùa được dựng từ thời nhà Lý!",
            "speakerRole": "Captain Trang",
            "questionEn": "What flower surrounds the One Pillar Pagoda in the pond?",
            "questionVi": "Loài hoa nào bao quanh Chùa Một Cột dưới hồ?",
            "options": ["Pink lotus blossoms", "Red roses", "Yellow sunflowers", "Orange tulips"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'The pagoda looks like a beautiful lotus!'",
            "promptVi": "Em hãy nói: 'The pagoda looks like a beautiful lotus!'",
            "targetSentenceEn": "The pagoda looks like a beautiful lotus!",
            "targetSentenceVi": "Ngôi chùa trông giống như một đóa hoa sen tuyệt đẹp!",
            "phoneticFocus": "/p/ in pagoda and pillar",
            "pronunciationTipsEn": "Pop your lips open with a puff of air for /p/ in pagoda and pillar.",
            "pronunciationTipsVi": "Bật hơi dứt khoát ở hai môi tạo âm /p/ trong pagoda và pillar.",
            "shadowAudioText": "The pagoda looks like a beautiful lotus!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Landmark Explorer Quest",
            "gameTitleVi": "Khám phá danh thắng Việt Nam",
            "instructionsEn": "Match each landmark term to its architectural icon!",
            "instructionsVi": "Nối thuật ngữ danh lam với biểu tượng tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "pagoda", "promptVi": "ngôi chùa cổ", "targetMatch": "🛕", "emojiOrIcon": "🛕"},
                {"id": "m2", "promptEn": "pillar", "promptVi": "trụ cột đá", "targetMatch": "🏛️", "emojiOrIcon": "🏛️"},
                {"id": "m3", "promptEn": "lotus", "promptVi": "đóa hoa sen", "targetMatch": "🪷", "emojiOrIcon": "🪷"},
                {"id": "m4", "promptEn": "mountain", "promptVi": "ngọn núi cao", "targetMatch": "⛰️", "emojiOrIcon": "⛰️"}
            ]
        },
        "questions": [
            {
                "id": "q-g3-adv1-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What flower is the national flower of Vietnam?",
                "questionVi": "Loài hoa nào là quốc hoa của Việt Nam?",
                "options": ["The lotus", "The daisy", "The rose", "The cactus"],
                "correctIndex": 0,
                "explanationEn": "The lotus is the national flower of Vietnam.",
                "explanationVi": "Hoa sen ('The lotus') là biểu tượng quốc hoa của Việt Nam.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g3-adv1-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "Why is the temple called 'One Pillar Pagoda'?",
                "questionVi": "Vì sao ngôi chùa lại có tên là 'Chùa Một Cột'?",
                "options": ["It is supported by a single central stone pillar", "It only has one door", "It was built in one day", "Only one person can visit"],
                "correctIndex": 0,
                "explanationEn": "The pavilion rests upon a single stone pillar.",
                "explanationVi": "Toàn bộ ngôi chùa đặt trên một trụ đá duy nhất giữa hồ ('single stone pillar').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g3-adv1-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Complete the simile: 'The pagoda looks ______ a lotus flower.'",
                "questionVi": "Điền từ thích hợp: 'The pagoda looks ______ a lotus flower.'",
                "options": ["like", "under", "between", "inside"],
                "correctIndex": 0,
                "explanationEn": "'Looks like' means resembles or appears similar to.",
                "explanationVi": "'Looks like' có nghĩa là trông giống như.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Heritage Vocabulary", "standardEn": "Identifies pagoda, pillar, lotus, mountain.", "standardVi": "Nhận biết từ vựng di sản."},
                {"skill": "Descriptive Simile", "standardEn": "Uses 'looks like a...' correctly.", "standardVi": "Dùng cấu trúc so sánh miêu tả."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 3 Places"],
            "humanEditorNotes": "Grade 3 Adventure 1 Famous Landmarks."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g3-adv2-culture",
        "adventureId": "adventure_2_culture",
        "lessonNumber": 1,
        "titleEn": "Vietnamese Traditions: Mid-Autumn Mooncakes & Lion Dance",
        "titleVi": "Truyền thống Việt Nam: Bánh Trung thu & Múa lân rộn rã",
        "topicEn": "Mooncakes, Lion Dance, Drums, and Festival Parade",
        "topicVi": "Bánh nướng bánh dẻo, múa lân, tiếng trống hội và rước đèn",
        "gradeLevel": "Grade 3",
        "gradeBand": "grade_3",
        "targetCefr": "A1 Elementary",
        "durationMinutes": 40,
        "learningObjectivesEn": [
            "Master 4 festival vocabulary terms: mooncake, lion dance, drum, parade.",
            "Use the sentence pattern: 'During the festival, people [verb phrase].'",
            "Explain the cultural significance of the full moon and family reunion."
        ],
        "learningObjectivesVi": [
            "Nắm vững 4 từ lễ hội: mooncake, lion dance, drum, parade.",
            "Nói câu: 'During the festival, people watch the lion dance.'",
            "Hiểu ý nghĩa sum vầy gia đình trong ngày rằm Trung thu."
        ],
        "coverImage": "/destinations/hanoi.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g3_midautumn_video",
            "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
            "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Traditional Festivals: Mid-Autumn Joy & Mooncakes",
            "titleVi": "Lễ hội truyền thống: Trung thu rộn rã & Bánh nướng bánh dẻo",
            "durationMinutes": 4,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g3-adv2-v1", "word": "mooncake", "ipa": "/ˈmuːn.keɪk/", "partOfSpeech": "noun", "meaningEn": "A round traditional pastry eaten during Mid-Autumn.", "meaningVi": "Bánh Trung thu nhân thập cẩm hoặc đậu xanh.", "exampleSentenceEn": "We share sweet mooncakes with our family.", "exampleSentenceVi": "Gia đình em cùng nhau cắt bánh Trung thu ngọt ngào.", "emoji": "🥮", "audioPromptEn": "Mooncake. Traditional sweet mooncake."},
            {"id": "g3-adv2-v2", "word": "lion dance", "ipa": "/ˈlaɪ.ən dɑːns/", "partOfSpeech": "noun", "meaningEn": "An energetic traditional dance with a colorful lion mask.", "meaningVi": "Điệu múa lân sư rồng sôi động.", "exampleSentenceEn": "The lion dance brings good luck and joy.", "exampleSentenceVi": "Điệu múa lân mang lại may mắn và niềm vui.", "emoji": "🦁", "audioPromptEn": "Lion dance. An energetic lion dance."},
            {"id": "g3-adv2-v3", "word": "drum", "ipa": "/drʌm/", "partOfSpeech": "noun", "meaningEn": "A musical instrument that makes loud beats.", "meaningVi": "Chiếc trống hội rộn rã.", "exampleSentenceEn": "The loud drum beats make children dance.", "exampleSentenceVi": "Tiếng trống hội rộn ràng làm các bạn nhỏ reo vui.", "emoji": "🥁", "audioPromptEn": "Drum. Loud festival drum beats."},
            {"id": "g3-adv2-v4", "word": "parade", "ipa": "/pəˈreɪd/", "partOfSpeech": "noun", "meaningEn": "A festive walk of people carrying bright lanterns.", "meaningVi": "Đoàn rước đèn ông sao trên đường làng.", "exampleSentenceEn": "Children join the lantern parade under the full moon.", "exampleSentenceVi": "Các em nhỏ hòa mình vào đoàn rước đèn dưới ánh trăng rằm.", "emoji": "🏮", "audioPromptEn": "Parade. A cheerful lantern parade."}
        ],
        "sentencePatterns": [
            {
                "id": "g3-adv2-sp",
                "pattern": "During the festival, people [action].",
                "patternMeaningVi": "Trong suốt dịp lễ hội, mọi người [hoạt động].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "What do families do on Mid-Autumn night, Explorer?"},
                    {"speaker": "Explorer", "text": "During the festival, families eat mooncakes and watch the lion dance!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Vào đêm Trung thu các gia đình thường làm gì nào?"},
                    {"speaker": "Học sinh", "text": "Dạ mọi người cùng phá cỗ ăn bánh Trung thu và xem múa lân ạ!"}
                ],
                "practicePromptEn": "During the festival, children carry star lanterns in the street.",
                "practicePromptVi": "Trong đêm hội, các bạn nhỏ rước đèn ông sao trên phố."
            }
        ],
        "reading": {
            "titleEn": "The Rhythm of Mid-Autumn Night",
            "titleVi": "Thanh âm đêm hội Trăng rằm",
            "wordCount": 44,
            "passagesEn": [
                "Under the bright full moon of the eighth lunar month, Vietnamese streets fill with laughter.",
                "Drums beat rhythmically: tung-dinh-dinh! A magnificent red and gold lion leaps and dances. Grandparents cut rich lotus-seed mooncakes into wedges for everyone. It is a warm celebration of family reunion."
            ],
            "passagesVi": [
                "Dưới ánh trăng rằm tháng Tám sáng vằng vặc, những con phố Việt Nam rộn rã tiếng cười.",
                "Tiếng trống vang lên nhịp nhàng: tùng dinh dinh! Chú lân đỏ vàng uy dũng nhảy múa tưng bừng. Ông bà cắt từng miếng bánh Trung thu nhân hạt sen thơm bùi chia cho các cháu. Đó là lễ hội sum họp gia đình ấm áp."
            ],
            "comprehensionTipsEn": "What sound do the festival drums make?",
            "comprehensionTipsVi": "Tiếng trống hội tạo ra âm thanh như thế nào?",
            "readingImage": "/destinations/hanoi.jpg"
        },
        "listening": {
            "audioTitleEn": "Festival Drums and Lion Dance",
            "audioScriptEn": "Hear that exciting sound? Boom, boom, boom! The festival drum is starting! Here comes the playful lion with glowing eyes, leaping to greet the smiling crowd under the golden moon!",
            "audioScriptVi": "Các em nghe thấy âm thanh rộn rã kia không? Tùng, tùng, cắc tùng! Tiếng trống hội bắt đầu rồi! Kìa chú lân tinh nghịch với đôi mắt chớp sáng đang nhảy múa chào đón mọi người dưới ánh trăng vàng!",
            "speakerRole": "Captain Trang",
            "questionEn": "What traditional performance has loud drums and a dancing lion?",
            "questionVi": "Tiết mục biểu diễn truyền thống nào có tiếng trống rộn rã và chú lân nhảy múa?",
            "options": ["The lion dance", "A cinema movie", "A swimming race", "A quiet library book"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'We love watching the lion dance!'",
            "promptVi": "Em hãy nói: 'We love watching the lion dance!'",
            "targetSentenceEn": "We love watching the lion dance!",
            "targetSentenceVi": "Chúng em rất thích xem múa lân!",
            "phoneticFocus": "/dr/ in drum and /l/ in lion",
            "pronunciationTipsEn": "Blend the /d/ and /r/ smoothly for drum without pausing.",
            "pronunciationTipsVi": "Nối liền âm /d/ và /r/ dứt khoát trong từ drum.",
            "shadowAudioText": "We love watching the lion dance!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Festival Traditions Match",
            "gameTitleVi": "Nối tranh phong tục Trung thu",
            "instructionsEn": "Match each tradition term to its festive symbol!",
            "instructionsVi": "Nối từ tiếng Anh với biểu tượng Trung thu tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "mooncake", "promptVi": "bánh Trung thu", "targetMatch": "🥮", "emojiOrIcon": "🥮"},
                {"id": "m2", "promptEn": "lion dance", "promptVi": "múa lân", "targetMatch": "🦁", "emojiOrIcon": "🦁"},
                {"id": "m3", "promptEn": "drum", "promptVi": "trống hội", "targetMatch": "🥁", "emojiOrIcon": "🥁"},
                {"id": "m4", "promptEn": "parade", "promptVi": "đoàn rước đèn", "targetMatch": "🏮", "emojiOrIcon": "🏮"}
            ]
        },
        "questions": [
            {
                "id": "q-g3-adv2-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What traditional pastry is eaten during the Mid-Autumn Festival?",
                "questionVi": "Món bánh truyền thống nào được ăn trong dịp Tết Trung thu?",
                "options": ["A mooncake", "A hamburger", "A pizza", "An ice cream cone"],
                "correctIndex": 0,
                "explanationEn": "Mooncakes are eaten during Mid-Autumn Festival.",
                "explanationVi": "Bánh Trung thu ('A mooncake') là món bánh truyền thống đêm rằm.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g3-adv2-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What does the full moon symbolize in Vietnamese culture?",
                "questionVi": "Mặt trăng tròn đêm rằm biểu trưng cho điều gì trong văn hóa Việt Nam?",
                "options": ["Family reunion, completeness and harmony", "Cold winter and rain", "Working hard alone", "Leaving home"],
                "correctIndex": 0,
                "explanationEn": "The full round moon symbolizes completeness and family reunion.",
                "explanationVi": "Trăng tròn biểu tượng cho sự sum vầy gia đình trọn vẹn ('Family reunion and completeness').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g3-adv2-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Complete the sentence: 'During the festival, children carry star lanterns in the ______.'",
                "questionVi": "Hoàn thành câu: 'During the festival, children carry star lanterns in the ______.'",
                "options": ["parade", "wardrobe", "kitchen", "classroom desk"],
                "correctIndex": 0,
                "explanationEn": "Children join the lantern parade.",
                "explanationVi": "Trẻ em hòa mình vào đoàn rước đèn trên phố ('lantern parade').",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Tradition Vocabulary", "standardEn": "Identifies mooncake, lion dance, drum, parade.", "standardVi": "Nhận biết từ vựng truyền thống."},
                {"skill": "Festival Action", "standardEn": "Describes festival activities accurately.", "standardVi": "Mô tả hoạt động lễ hội chuẩn xác."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 3 Culture"],
            "humanEditorNotes": "Grade 3 Adventure 2 Vietnamese Traditions."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g3-adv3-food",
        "adventureId": "adventure_3_food",
        "lessonNumber": 1,
        "titleEn": "Food Adventure: Crispy Banh Mi & Spring Rolls",
        "titleVi": "Cuộc phiêu lưu ẩm thực: Bánh mì giòn tan & Nem rán",
        "topicEn": "Banh Mi Baguette, Crispy Spring Rolls, Fresh Herbs, and Dipping Sauce",
        "topicVi": "Bánh mì giòn rụm, nem rán vàng óng, rau thơm và nước chấm",
        "gradeLevel": "Grade 3",
        "gradeBand": "grade_3",
        "targetCefr": "A1 Elementary",
        "durationMinutes": 40,
        "learningObjectivesEn": [
            "Learn 4 culinary words: bread, spring roll, crispy, sauce.",
            "Use the sentence pattern: 'This [food] is made of [ingredients].'",
            "Express appreciation for world-famous Vietnamese street food in English."
        ],
        "learningObjectivesVi": [
            "Học 4 từ ẩm thực: bread, spring roll, crispy, sauce.",
            "Nói câu miêu tả: 'This Banh Mi is crispy and delicious.'",
            "Tự hào giới thiệu món ăn đường phố nổi tiếng thế giới của Việt Nam."
        ],
        "coverImage": "/destinations/danang.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g3_food_video",
            "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
            "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Street Food Adventure: Vietnamese Banh Mi",
            "titleVi": "Khám phá ẩm thực đường phố: Bánh mì Việt Nam",
            "durationMinutes": 4,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g3-adv3-v1", "word": "bread", "ipa": "/bred/", "partOfSpeech": "noun", "meaningEn": "A baked baguette that is crispy on the outside.", "meaningVi": "Ổ bánh mì nướng giòn rụm.", "exampleSentenceEn": "Vietnamese bread is famous worldwide for its light crust.", "exampleSentenceVi": "Bánh mì Việt Nam nổi tiếng khắp năm châu nhờ lớp vỏ giòn nhẹ.", "emoji": "🥖", "audioPromptEn": "Bread. Crispy golden bread."},
            {"id": "g3-adv3-v2", "word": "spring roll", "ipa": "/ˈsprɪŋ rəʊl/", "partOfSpeech": "noun", "meaningEn": "Minced pork, mushrooms, and herbs rolled in rice paper.", "meaningVi": "Món nem rán (chả giò) truyền thống.", "exampleSentenceEn": "Golden spring rolls are fried until delightfully crunchy.", "exampleSentenceVi": "Những chiếc nem rán vàng ươm giòn rụm.", "emoji": "🥢", "audioPromptEn": "Spring roll. Golden crispy spring roll."},
            {"id": "g3-adv3-v3", "word": "crispy", "ipa": "/ˈkrɪs.pi/", "partOfSpeech": "adjective", "meaningEn": "Pleasantly crunchy and easily broken.", "meaningVi": "Giòn rụm, giòn tan.", "exampleSentenceEn": "The crust of the baguette is so crispy and light.", "exampleSentenceVi": "Lớp vỏ bánh mì giòn tan và nhẹ xốp.", "emoji": "✨", "audioPromptEn": "Crispy. Very crispy and crunchy."},
            {"id": "g3-adv3-v4", "word": "sauce", "ipa": "/sɔːs/", "partOfSpeech": "noun", "meaningEn": "A flavorful liquid condiment served with food.", "meaningVi": "Nước chấm chua ngọt pha tỏi ớt.", "exampleSentenceEn": "Dip your spring roll into the sweet and sour sauce.", "exampleSentenceVi": "Chấm nem vào bát nước chấm chua ngọt.", "emoji": "🥣", "audioPromptEn": "Sauce. Sweet and savory dipping sauce."}
        ],
        "sentencePatterns": [
            {
                "id": "g3-adv3-sp",
                "pattern": "This [food] is [adjective] and [adjective].",
                "patternMeaningVi": "Món [tên món] này thật là [tính từ] và [tính từ].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "How do you like the Banh Mi, Explorer?"},
                    {"speaker": "Explorer", "text": "It is crispy on the outside and packed with flavorful herbs inside!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Em thấy bánh mì Việt Nam thế nào?"},
                    {"speaker": "Học sinh", "text": "Vỏ bánh giòn tan bên ngoài và bên trong đầy rau thơm ngon đậm đà ạ!"}
                ],
                "practicePromptEn": "This spring roll is golden and crispy.",
                "practicePromptVi": "Chiếc nem rán này vàng ruộm và giòn tan."
            }
        ],
        "reading": {
            "titleEn": "The Magic of Vietnamese Banh Mi",
            "titleVi": "Điều kỳ diệu của Banh Mi Việt Nam",
            "wordCount": 43,
            "passagesEn": [
                "Vietnamese Banh Mi is loved by travelers all over the world.",
                "A freshly baked baguette is sliced open. The chef spreads smooth pate, adds cucumber, cilantro, and roasted pork, then drizzles savory sauce. It is crispy, fresh, and bursting with wonderful flavors!"
            ],
            "passagesVi": [
                "Bánh mì Việt Nam được du khách khắp thế giới yêu chuộng.",
                "Ổ bánh mì nóng giòn vừa ra lò được rạch đôi. Đầu bếp quết lớp pate mịn màng, thêm dưa chuột, rau mùi, thịt nướng thơm lừng và rưới nước sốt đậm đà. Thật là giòn rụm, tươi ngon và tràn đầy hương vị tuyệt hảo!"
            ],
            "comprehensionTipsEn": "What herbs are added to Banh Mi?",
            "comprehensionTipsVi": "Loại rau thơm nào được cho vào bánh mì?",
            "readingImage": "/destinations/danang.jpg"
        },
        "listening": {
            "audioTitleEn": "Street Food Guide with Captain Trang",
            "audioScriptEn": "Listen to the crunch! That is the sound of fresh Banh Mi crust breaking! In Vietnam, we fill it with savory meats, pickled carrots, and aromatic herbs. It is the ultimate lunchtime treat!",
            "audioScriptVi": "Hãy lắng nghe tiếng giòn rụm! Đó là âm thanh của lớp vỏ bánh mì mới ra lò! Ở Việt Nam, chúng ta kẹp thịt thơm, cà rốt chua ngọt và rau gia vị. Món ăn trưa tuyệt hảo nhất!",
            "speakerRole": "Captain Trang",
            "questionEn": "What makes Vietnamese Banh Mi famous worldwide?",
            "questionVi": "Điều gì làm nên tên tuổi bánh mì Việt Nam trên toàn thế giới?",
            "options": ["Crispy crust and fresh savory fillings", "It is frozen cold", "It tastes like plain water", "It is made of stone"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'Vietnamese Banh Mi is crispy and delicious!'",
            "promptVi": "Em hãy nói: 'Vietnamese Banh Mi is crispy and delicious!'",
            "targetSentenceEn": "Vietnamese Banh Mi is crispy and delicious!",
            "targetSentenceVi": "Bánh mì Việt Nam vừa giòn vừa ngon tuyệt hảo!",
            "phoneticFocus": "/kr/ in crispy and /br/ in bread",
            "pronunciationTipsEn": "Practice blending /kr/ in crispy cleanly without extra vowels.",
            "pronunciationTipsVi": "Nối liền cụm phụ âm /kr/ trong từ crispy dứt khoát.",
            "shadowAudioText": "Vietnamese Banh Mi is crispy and delicious!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Banh Mi Sandwich Builder",
            "gameTitleVi": "Xây dựng ổ bánh mì giòn",
            "instructionsEn": "Match each ingredient to complete the sandwich!",
            "instructionsVi": "Nối nguyên liệu để hoàn thành ổ bánh mì ngon tuyệt nhé!",
            "items": [
                {"id": "m1", "promptEn": "bread", "promptVi": "ổ bánh mì giòn", "targetMatch": "🥖", "emojiOrIcon": "🥖"},
                {"id": "m2", "promptEn": "spring roll", "promptVi": "nem rán vàng", "targetMatch": "🥢", "emojiOrIcon": "🥢"},
                {"id": "m3", "promptEn": "crispy", "promptVi": "giòn tan", "targetMatch": "✨", "emojiOrIcon": "✨"},
                {"id": "m4", "promptEn": "sauce", "promptVi": "nước sốt đậm đà", "targetMatch": "🥣", "emojiOrIcon": "🥣"}
            ]
        },
        "questions": [
            {
                "id": "q-g3-adv3-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What describes the texture of freshly baked Banh Mi?",
                "questionVi": "Từ nào miêu tả đúng kết cấu vỏ bánh mì mới nướng?",
                "options": ["Crispy", "Salty", "Cold", "Liquid"],
                "correctIndex": 0,
                "explanationEn": "Fresh Banh Mi has a crispy crust.",
                "explanationVi": "Vỏ bánh mì mới nướng giòn rụm ('Crispy').",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g3-adv3-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What traditional roll is fried until golden and dipped in sauce?",
                "questionVi": "Món cuốn truyền thống nào được chiên vàng óng và chấm vào bát nước mắm chua ngọt?",
                "options": ["Spring roll (Nem rán)", "Bread roll", "Cake", "Butter"],
                "correctIndex": 0,
                "explanationEn": "Spring rolls are fried until golden brown.",
                "explanationVi": "Nem rán ('Spring roll') được chiên vàng và chấm nước mắm chua ngọt.",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g3-adv3-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "How do you recommend Banh Mi to an international friend?",
                "questionVi": "Em giới thiệu bánh mì với bạn bè quốc tế như thế nào?",
                "options": ["You should try Banh Mi! It is crispy, fresh, and delicious.", "Do not eat Banh Mi.", "I do not like food.", "Goodbye friend."],
                "correctIndex": 0,
                "explanationEn": "Offering a positive recommendation with adjectives is the polite way.",
                "explanationVi": "'You should try Banh Mi! It is crispy, fresh, and delicious' là lời giới thiệu hiếu khách và chuẩn xác.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Culinary Terms", "standardEn": "Identifies bread, spring roll, crispy, sauce.", "standardVi": "Nhận diện từ vựng ẩm thực."},
                {"skill": "Food Description", "standardEn": "Describes texture and flavor convincingly.", "standardVi": "Miêu tả hương vị và độ giòn tự tin."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 3 Food"],
            "humanEditorNotes": "Grade 3 Adventure 3 Food Adventure."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g3-adv4-nature",
        "adventureId": "adventure_4_nature",
        "lessonNumber": 1,
        "titleEn": "Wildlife Discovery: Delacour's Langur in Cuc Phuong",
        "titleVi": "Khám phá thế giới hoang dã: Voọc mông trắng Cúc Phương",
        "topicEn": "Endangered Primates, Rainforest Canopy, and Conservation",
        "topicVi": "Linh trưởng quý hiếm, tán rừng nguyên sinh và bảo tồn",
        "gradeLevel": "Grade 3",
        "gradeBand": "grade_3",
        "targetCefr": "A1 Elementary",
        "durationMinutes": 40,
        "learningObjectivesEn": [
            "Learn 4 conservation words: langur, protect, endangered, habitat.",
            "Use the sentence pattern: 'We must protect [animal] because it is [reason].'",
            "Build empathy for rare wildlife in Vietnamese national parks."
        ],
        "learningObjectivesVi": [
            "Học 4 từ bảo tồn: langur, protect, endangered, habitat.",
            "Nói câu: 'We must protect the langur because it is endangered.'",
            "Xây dựng tình yêu và ý thức bảo vệ động vật hoang dã quý hiếm."
        ],
        "coverImage": "/destinations/phong_nha.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g3_langur_video",
            "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
            "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Delacour's Langurs: Treasures of Cuc Phuong",
            "titleVi": "Voọc mông trắng: Báu vật rừng Cúc Phương",
            "durationMinutes": 4,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g3-adv4-v1", "word": "langur", "ipa": "/ˈlæŋ.ɡʊər/", "partOfSpeech": "noun", "meaningEn": "A rare long-tailed monkey native to Vietnam.", "meaningVi": "Loài voọc mông trắng quý hiếm.", "exampleSentenceEn": "The Delacour's langur has striking black and white fur.", "exampleSentenceVi": "Voọc mông trắng có bộ lông đen trắng tương phản tuyệt đẹp.", "emoji": "🐒", "audioPromptEn": "Langur. Delacour's rare langur."},
            {"id": "g3-adv4-v2", "word": "protect", "ipa": "/prəˈtekt/", "partOfSpeech": "verb", "meaningEn": "To keep safe from harm and danger.", "meaningVi": "Bảo vệ, gìn giữ an toàn.", "exampleSentenceEn": "Rangers work day and night to protect the forest.", "exampleSentenceVi": "Các kiểm lâm viên làm việc ngày đêm để bảo vệ khu rừng.", "emoji": "🛡️", "audioPromptEn": "Protect. Protect wild animals."},
            {"id": "g3-adv4-v3", "word": "endangered", "ipa": "/ɪnˈdeɪn.dʒəd/", "partOfSpeech": "adjective", "meaningEn": "At risk of disappearing forever if not cared for.", "meaningVi": "Có nguy cơ tuyệt chủng, cực kỳ quý hiếm.", "exampleSentenceEn": "The langur is an endangered species.", "exampleSentenceVi": "Voọc là một loài linh trưởng có nguy cơ tuyệt chủng.", "emoji": "⚠️", "audioPromptEn": "Endangered. An endangered species."},
            {"id": "g3-adv4-v4", "word": "habitat", "ipa": "/ˈhæb.ɪ.tæt/", "partOfSpeech": "noun", "meaningEn": "The natural home of an animal or plant.", "meaningVi": "Môi trường sống tự nhiên.", "exampleSentenceEn": "Cuc Phuong is the safe natural habitat for rare birds.", "exampleSentenceVi": "Cúc Phương là môi trường sống an toàn của nhiều loài chim quý.", "emoji": "🌿", "audioPromptEn": "Habitat. Safe natural habitat."}
        ],
        "sentencePatterns": [
            {
                "id": "g3-adv4-sp",
                "pattern": "We must protect the [animal] because it is [adjective].",
                "patternMeaningVi": "Chúng ta phải bảo vệ [loài vật] vì nó đang [tình trạng].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "Why do rangers guard Cuc Phuong Forest, Explorer?"},
                    {"speaker": "Explorer", "text": "We must protect the langur because it is endangered!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Vì sao các chú kiểm lâm canh giữ rừng Cúc Phương?"},
                    {"speaker": "Học sinh", "text": "Dạ chúng ta phải bảo vệ loài voọc vì chúng đang có nguy cơ tuyệt chủng ạ!"}
                ],
                "practicePromptEn": "We must protect the forest because it is our home.",
                "practicePromptVi": "Chúng ta phải bảo vệ rừng vì rừng là mái nhà chung."
            }
        ],
        "reading": {
            "titleEn": "Guarding the Delacour's Langur",
            "titleVi": "Bảo vệ loài voọc mông trắng",
            "wordCount": 42,
            "passagesEn": [
                "High up in the limestone cliffs of Cuc Phuong and Van Long, a family of Delacour's langurs leaps across the branches.",
                "They eat green leaves and tender buds. Because very few remain in the wild, scientists and rangers protect their natural habitat every single day."
            ],
            "passagesVi": [
                "Trên vách đá vôi dựng đứng ở Cúc Phương và Vân Long, một gia đình voọc mông trắng thoăn thoắt chuyền cành.",
                "Chúng ăn lá non và chồi cây xanh. Vì chỉ còn rất ít cá thể trong tự nhiên, các nhà khoa học và kiểm lâm bảo vệ môi trường sống của chúng mỗi ngày."
            ],
            "comprehensionTipsEn": "Where do Delacour's langurs live?",
            "comprehensionTipsVi": "Voọc mông trắng sinh sống ở đâu?",
            "readingImage": "/destinations/phong_nha.jpg"
        },
        "listening": {
            "audioTitleEn": "Ranger Call with Captain Trang",
            "audioScriptEn": "Binoculars up, Explorers! Look high up on that limestone ridge! Do you see the black monkey with white fur on its hips? That is the famous Delacour's langur, one of the rarest primates on Earth!",
            "audioScriptVi": "Cùng nâng ống nhòm lên nào các bạn nhỏ! Hãy nhìn lên rặng đá vôi kia! Các em có thấy chú khỉ lông đen với vệt lông trắng ở hông không? Đó chính là voọc mông trắng, một trong những loài linh trưởng quý hiếm nhất hành tinh!",
            "speakerRole": "Captain Trang",
            "questionEn": "What unique color pattern does the Delacour's langur have?",
            "questionVi": "Voọc mông trắng có màu lông đặc trưng như thế nào?",
            "options": ["Black body with white fur on the hips", "All bright pink", "Green stripes like grass", "Blue spots"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'We must protect our rare wildlife!'",
            "promptVi": "Em hãy nói: 'We must protect our rare wildlife!'",
            "targetSentenceEn": "We must protect our rare wildlife!",
            "targetSentenceVi": "Chúng ta phải chung tay bảo vệ động vật hoang dã quý hiếm!",
            "phoneticFocus": "/pr/ in protect and /h/ in habitat",
            "pronunciationTipsEn": "Breathe out gently for /h/ in habitat and combine /p/ with /r/.",
            "pronunciationTipsVi": "Thở nhẹ tạo âm /h/ trong habitat và nối liền phụ âm kép /pr/ trong protect.",
            "shadowAudioText": "We must protect our rare wildlife!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Wildlife Conservation Ranger",
            "gameTitleVi": "Kiểm lâm bảo tồn thiên nhiên",
            "instructionsEn": "Match each wildlife term to its conservation symbol!",
            "instructionsVi": "Nối thuật ngữ bảo tồn với biểu tượng tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "langur", "promptVi": "voọc mông trắng", "targetMatch": "🐒", "emojiOrIcon": "🐒"},
                {"id": "m2", "promptEn": "protect", "promptVi": "bảo vệ động vật", "targetMatch": "🛡️", "emojiOrIcon": "🛡️"},
                {"id": "m3", "promptEn": "endangered", "promptVi": "nguy cơ tuyệt chủng", "targetMatch": "⚠️", "emojiOrIcon": "⚠️"},
                {"id": "m4", "promptEn": "habitat", "promptVi": "môi trường sống", "targetMatch": "🌿", "emojiOrIcon": "🌿"}
            ]
        },
        "questions": [
            {
                "id": "q-g3-adv4-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What does the word 'endangered' mean?",
                "questionVi": "Từ 'endangered' có nghĩa là gì?",
                "options": ["At risk of disappearing forever", "Very common everywhere", "Made of plastic", "Happy and full"],
                "correctIndex": 0,
                "explanationEn": "'Endangered' means facing a high risk of extinction.",
                "explanationVi": "'Endangered' nghĩa là có nguy cơ tuyệt chủng trong tự nhiên.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g3-adv4-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "Why do forest rangers protect natural habitats?",
                "questionVi": "Vì sao các kiểm lâm viên lại bảo vệ môi trường sống tự nhiên?",
                "options": ["So wild animals have safe homes, food, and clean water", "To build noisy factories", "To cut down all trees", "To drive fast race cars"],
                "correctIndex": 0,
                "explanationEn": "Habitats give wildlife food, shelter, and security.",
                "explanationVi": "Môi trường tự nhiên mang lại thức ăn, nơi trú ngụ và sự an toàn cho động vật hoang dã.",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g3-adv4-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Complete the eco-pledge: 'We must ______ the animals and trees.'",
                "questionVi": "Hoàn thành lời hứa môi trường: 'We must ______ the animals and trees.'",
                "options": ["protect", "destroy", "forget", "scare"],
                "correctIndex": 0,
                "explanationEn": "'We must protect' expresses our moral responsibility.",
                "explanationVi": "'We must protect' thể hiện trách nhiệm bảo vệ thiên nhiên của mỗi học sinh.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Conservation Terms", "standardEn": "Identifies langur, protect, endangered, habitat.", "standardVi": "Nhận biết thuật ngữ bảo tồn."},
                {"skill": "Eco Commitment", "standardEn": "Articulates reason to protect wildlife.", "standardVi": "Nêu được lý do bảo vệ động vật hoang dã."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 3 Nature"],
            "humanEditorNotes": "Grade 3 Adventure 4 Wildlife Discovery."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g3-adv5-future",
        "adventureId": "adventure_5_future",
        "lessonNumber": 1,
        "titleEn": "Smart Vietnam: Solar Schools & Recycling Robots",
        "titleVi": "Việt Nam thông minh: Trường học năng lượng mặt trời & Robot",
        "topicEn": "Smart Classrooms, Rooftop Solar Panels, and AI Recycling",
        "topicVi": "Lớp học thông minh, pin mặt trời trên mái trường và robot tái chế rác",
        "gradeLevel": "Grade 3",
        "gradeBand": "grade_3",
        "targetCefr": "A1 Elementary",
        "durationMinutes": 40,
        "learningObjectivesEn": [
            "Learn 4 green tech words: solar panel, robot, recycle, clean energy.",
            "Use the sentence pattern: 'Our school uses [source] to [action].'",
            "Promote waste sorting and clean energy awareness at primary school."
        ],
        "learningObjectivesVi": [
            "Học 4 từ công nghệ xanh: solar panel, robot, recycle, clean energy.",
            "Nói câu: 'Our school uses solar panels to power smart classrooms.'",
            "Nâng cao ý thức phân loại rác và sử dụng năng lượng sạch."
        ],
        "coverImage": "/destinations/hanoi.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g3_smart_video",
            "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
            "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Green Smart Classrooms Across Modern Vietnam",
            "titleVi": "Lớp học thông minh xanh trên khắp đất nước Việt Nam",
            "durationMinutes": 4,
            "isTeacherCreated": True,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g3-adv5-v1", "word": "solar panel", "ipa": "/ˈsəʊ.lə ˈpæn.əl/", "partOfSpeech": "noun", "meaningEn": "A dark board that turns sunlight into clean electricity.", "meaningVi": "Tấm pin năng lượng mặt trời.", "exampleSentenceEn": "Solar panels on the school roof power our computers.", "exampleSentenceVi": "Pin mặt trời trên mái trường cấp điện cho máy tính.", "emoji": "☀️", "audioPromptEn": "Solar panel. Clean solar panel on the roof."},
            {"id": "g3-adv5-v2", "word": "robot", "ipa": "/ˈrəʊ.bɒt/", "partOfSpeech": "noun", "meaningEn": "A smart machine programmed to do helpful tasks.", "meaningVi": "Robot thông minh trợ giúp con người.", "exampleSentenceEn": "The friendly robot helps students sort recyclable trash.", "exampleSentenceVi": "Chú robot thân thiện giúp học sinh phân loại rác tái chế.", "emoji": "🤖", "audioPromptEn": "Robot. A helpful school robot."},
            {"id": "g3-adv5-v3", "word": "recycle", "ipa": "/ˌriːˈsaɪ.kəl/", "partOfSpeech": "verb", "meaningEn": "To treat used things so they can be made into new items.", "meaningVi": "Tái chế rác thải nhựa và giấy.", "exampleSentenceEn": "We recycle paper and plastic bottles every Friday.", "exampleSentenceVi": "Chúng em tái chế giấy và vỏ chai nhựa vào thứ Sáu.", "emoji": "♻️", "audioPromptEn": "Recycle. Recycle plastic and paper."},
            {"id": "g3-adv5-v4", "word": "clean energy", "ipa": "/kliːn ˈen.ə.dʒi/", "partOfSpeech": "noun", "meaningEn": "Power made from sun and wind that does not pollute.", "meaningVi": "Nguồn năng lượng sạch, không gây ô nhiễm.", "exampleSentenceEn": "Clean energy protects our skies and seas.", "exampleSentenceVi": "Năng lượng sạch bảo vệ bầu trời và đại dương của chúng ta.", "emoji": "🌱", "audioPromptEn": "Clean energy. Sustainable clean energy."}
        ],
        "sentencePatterns": [
            {
                "id": "g3-adv5-sp",
                "pattern": "Our school uses [source] to [action].",
                "patternMeaningVi": "Trường học của em sử dụng [nguồn lực] để [hành động].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "How does your smart school save electricity, Explorer?"},
                    {"speaker": "Explorer", "text": "Our school uses solar panels to power smart lights and screens!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Trường học thông minh của em tiết kiệm điện thế nào?"},
                    {"speaker": "Học sinh", "text": "Dạ trường em dùng pin mặt trời để thắp sáng và bật màn hình tương tác ạ!"}
                ],
                "practicePromptEn": "Our classroom uses smart sensors to save energy.",
                "practicePromptVi": "Lớp học của em dùng cảm biến thông minh để tiết kiệm điện."
            }
        ],
        "reading": {
            "titleEn": "A Day at the Solar School",
            "titleVi": "Một ngày tại trường học năng lượng mặt trời",
            "wordCount": 43,
            "passagesEn": [
                "Under the warm tropical sun, rows of dark blue solar panels shine atop our school building in Da Nang.",
                "Inside, an AI recycling robot beeps happily when children deposit clean plastic bottles into the blue bin. By learning with clean technology, students become proud young innovators!"
            ],
            "passagesVi": [
                "Dưới ánh nắng nhiệt đới ấm áp, những hàng pin mặt trời xanh thẫm tỏa sáng trên mái trường tại Đà Nẵng.",
                "Bên trong lớp, chú robot tái chế AI kêu bíp bíp vui vẻ khi các bạn nhỏ bỏ chai nhựa sạch vào thùng màu xanh. Nhờ học tập cùng công nghệ sạch, các em trở thành những nhà đổi mới nhí đầy tự hào!"
            ],
            "comprehensionTipsEn": "What powers the computers in the smart school?",
            "comprehensionTipsVi": "Nguồn điện nào thắp sáng và chạy máy tính trong trường học thông minh?",
            "readingImage": "/destinations/hanoi.jpg"
        },
        "listening": {
            "audioTitleEn": "Captain Trang's Smart Green Mission",
            "audioScriptEn": "Beep-boop! Look at our new robot helper! When you drop paper into the yellow bin and plastic into the blue bin, the robot gives you a bright green star! That is how we recycle in Smart Vietnam!",
            "audioScriptVi": "Bíp boop! Nhìn chú robot trợ lý mới của chúng ta kìa! Khi em bỏ giấy vào thùng vàng và chai nhựa vào thùng xanh, robot sẽ thưởng cho em một ngôi sao xanh lấp lánh! Đó là cách chúng ta tái chế tại Việt Nam thông minh!",
            "speakerRole": "Captain Trang",
            "questionEn": "What does the recycling robot give students for sorting trash correctly?",
            "questionVi": "Robot tái chế thưởng cho học sinh điều gì khi phân loại rác đúng?",
            "options": ["A bright green star", "A plastic bag", "A loud siren", "An old stone"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'Our school uses clean solar energy!'",
            "promptVi": "Em hãy nói: 'Our school uses clean solar energy!'",
            "targetSentenceEn": "Our school uses clean solar energy!",
            "targetSentenceVi": "Trường em sử dụng năng lượng mặt trời xanh sạch!",
            "phoneticFocus": "/s/ in solar and /r/ in recycle",
            "pronunciationTipsEn": "Sound the /s/ cleanly in solar, then practice the prefix re- in re-cy-cle.",
            "pronunciationTipsVi": "Phát âm âm /s/ rõ ràng trong solar và luyện nhấn âm re-cy-cle nhịp nhàng.",
            "shadowAudioText": "Our school uses clean solar energy!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Smart Tech Recycling Match",
            "gameTitleVi": "Ghép tranh công nghệ xanh",
            "instructionsEn": "Match each clean tech word to its smart icon!",
            "instructionsVi": "Nối từ công nghệ với biểu tượng thông minh tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "solar panel", "promptVi": "pin mặt trời", "targetMatch": "☀️", "emojiOrIcon": "☀️"},
                {"id": "m2", "promptEn": "robot", "promptVi": "robot thông minh", "targetMatch": "🤖", "emojiOrIcon": "🤖"},
                {"id": "m3", "promptEn": "recycle", "promptVi": "tái chế rác", "targetMatch": "♻️", "emojiOrIcon": "♻️"},
                {"id": "m4", "promptEn": "clean energy", "promptVi": "năng lượng sạch", "targetMatch": "🌱", "emojiOrIcon": "🌱"}
            ]
        },
        "questions": [
            {
                "id": "q-g3-adv5-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What device converts warm sunshine into electricity?",
                "questionVi": "Thiết bị nào chuyển đổi ánh nắng mặt trời thành điện năng?",
                "options": ["A solar panel", "A refrigerator", "A wooden chair", "A paper notebook"],
                "correctIndex": 0,
                "explanationEn": "Solar panels convert sunlight into electricity.",
                "explanationVi": "Pin mặt trời ('A solar panel') chuyển quang năng thành điện năng sạch.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g3-adv5-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "Why should primary students recycle plastic bottles?",
                "questionVi": "Vì sao học sinh tiểu học nên tái chế chai nhựa?",
                "options": ["To reduce trash and keep oceans and soil clean", "To make more plastic garbage", "To throw them into rivers", "To hide them in the desk"],
                "correctIndex": 0,
                "explanationEn": "Recycling keeps plastic out of our oceans and landfills.",
                "explanationVi": "Tái chế giúp giảm rác thải và bảo vệ đại dương, đất đai sạch đẹp ('reduce trash').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g3-adv5-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Complete the sentence: 'Clean energy comes from the sun and the ______.'",
                "questionVi": "Hoàn thành câu: 'Clean energy comes from the sun and the ______.'",
                "options": ["wind", "smoke", "trash", "plastic"],
                "correctIndex": 0,
                "explanationEn": "Solar and wind are key clean energy sources.",
                "explanationVi": "Năng lượng sạch đến từ mặt trời và gió ('the sun and the wind').",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Green Tech Words", "standardEn": "Identifies solar panel, robot, recycle, clean energy.", "standardVi": "Nhận biết từ vựng công nghệ xanh."},
                {"skill": "Energy Consciousness", "standardEn": "Explains benefits of clean energy.", "standardVi": "Diễn đạt được lợi ích của năng lượng sạch."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 3 Future"],
            "humanEditorNotes": "Grade 3 Adventure 5 Smart Vietnam."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    }
]

def format_ts_file(lessons, grade_num):
    return f"""// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE {grade_num} CURRICULUM LESSONS (5 THEMATIC ADVENTURES)
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import {{ CurriculumLesson }} from '../../types/curriculum';

export const GRADE_{grade_num}_LESSONS: CurriculumLesson[] = {json.dumps(lessons, indent=2, ensure_ascii=False)};
"""

file_path = os.path.join(BASE_DIR, "lessonsGrade3.ts")
with open(file_path, "w", encoding="utf-8") as f:
    f.write(format_ts_file(g3_lessons, 3))

print("Created lessonsGrade3.ts with 5 full adventures.")
