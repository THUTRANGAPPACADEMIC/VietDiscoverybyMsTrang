import os
import json

BASE_DIR = r"d:\01VietDiscoverybyMsTrang\src\data\curriculum"
os.makedirs(BASE_DIR, exist_ok=True)

# Grade 1 Lessons (5 Adventures)
g1_lessons = [
    {
        "id": "lesson-g1-adv1-places",
        "adventureId": "adventure_1_places",
        "lessonNumber": 1,
        "titleEn": "My Beautiful Vietnam: Ha Long Bay",
        "titleVi": "Việt Nam tươi đẹp của em: Vịnh Hạ Long",
        "topicEn": "Colors of the Emerald Sea and Green Islands",
        "topicVi": "Sắc màu biển ngọc và đảo xanh",
        "gradeLevel": "Grade 1",
        "gradeBand": "grade_1",
        "targetCefr": "Pre-A1 Starter",
        "durationMinutes": 30,
        "learningObjectivesEn": [
            "Identify 4 sea landscape words: sea, boat, island, cave.",
            "Use the sentence pattern: 'Look at the [noun]! It is [adjective].'",
            "Practice the /iː/ phonics sound in 'sea' and 'green'."
        ],
        "learningObjectivesVi": [
            "Nhận biết 4 từ phong cảnh biển: sea, boat, island, cave.",
            "Nói câu quan sát: 'Look at the sea! It is blue.'",
            "Luyện phát âm /iː/ trong từ sea và green."
        ],
        "coverImage": "/destinations/halong_bay.jpg",
        "coverImageAttribution": "Wikimedia Commons (CC BY-SA 4.0)",
        "videoLesson": {
            "videoId": "g1_halong_video",
            "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
            "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Magic Colors of Ha Long Bay",
            "titleVi": "Sắc màu kỳ diệu Vịnh Hạ Long",
            "durationMinutes": 4,
            "isTeacherCreated": True,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g1-adv1-v1", "word": "sea", "ipa": "/siː/", "partOfSpeech": "noun", "meaningEn": "A large area of blue salty water.", "meaningVi": "Biển, nước biển xanh.", "exampleSentenceEn": "The sea is blue and beautiful.", "exampleSentenceVi": "Biển xanh và rất đẹp.", "emoji": "🌊", "audioPromptEn": "Sea. The sea is blue."},
            {"id": "g1-adv1-v2", "word": "boat", "ipa": "/bəʊt/", "partOfSpeech": "noun", "meaningEn": "A vehicle that sails on water.", "meaningVi": "Con thuyền gỗ.", "exampleSentenceEn": "Look at the wooden boat.", "exampleSentenceVi": "Hãy nhìn con thuyền gỗ kìa.", "emoji": "⛵", "audioPromptEn": "Boat. Look at the boat."},
            {"id": "g1-adv1-v3", "word": "island", "ipa": "/ˈaɪ.lənd/", "partOfSpeech": "noun", "meaningEn": "Land surrounded by water.", "meaningVi": "Hòn đảo giữa biển.", "exampleSentenceEn": "The green island is big.", "exampleSentenceVi": "Hòn đảo xanh rất lớn.", "emoji": "🏝️", "audioPromptEn": "Island. A green island."},
            {"id": "g1-adv1-v4", "word": "blue", "ipa": "/bluː/", "partOfSpeech": "adjective", "meaningEn": "The color of the sky and sea.", "meaningVi": "Màu xanh da trời, xanh nước biển.", "exampleSentenceEn": "The sky and sea are blue.", "exampleSentenceVi": "Bầu trời và biển có màu xanh.", "emoji": "💙", "audioPromptEn": "Blue. Blue sky and blue sea."}
        ],
        "sentencePatterns": [
            {
                "id": "g1-adv1-sp",
                "pattern": "Look at the [noun]! It is [adjective].",
                "patternMeaningVi": "Hãy nhìn [danh từ] kìa! Nó thật là [tính từ].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "Look at the sea, Little Explorer!"},
                    {"speaker": "Explorer", "text": "It is blue and shiny!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Nhìn biển kìa, nhà thám hiểm nhí!"},
                    {"speaker": "Học sinh", "text": "Biển xanh và lấp lánh quá!"}
                ],
                "practicePromptEn": "Look at the boat! It is red.",
                "practicePromptVi": "Hãy nhìn chiếc thuyền! Nó có màu đỏ."
            }
        ],
        "reading": {
            "titleEn": "A Sunny Day in Ha Long",
            "titleVi": "Một ngày nắng đẹp ở Hạ Long",
            "wordCount": 26,
            "passagesEn": [
                "Hello Vietnam! Today is a sunny day in Ha Long Bay.",
                "I see the blue sea. I see a brown boat. The green islands are very pretty!"
            ],
            "passagesVi": [
                "Xin chào Việt Nam! Hôm nay là một ngày nắng đẹp ở Vịnh Hạ Long.",
                "Em nhìn thấy biển xanh. Em nhìn thấy con thuyền màu nâu. Những hòn đảo xanh thật là xinh đẹp!"
            ],
            "comprehensionTipsEn": "Point to the sea and the boat on the picture.",
            "comprehensionTipsVi": "Chỉ tay vào biển và con thuyền trên bức tranh.",
            "readingImage": "/destinations/halong_bay.jpg"
        },
        "listening": {
            "audioTitleEn": "Captain Trang on the Emerald Sea",
            "audioScriptEn": "Hello Little Explorer! What color is the sea in Ha Long Bay? Yes, it is blue and green!",
            "audioScriptVi": "Chào bạn nhỏ! Nước biển ở Vịnh Hạ Long có màu gì? Đúng rồi, màu xanh ngọc!",
            "speakerRole": "Captain Trang",
            "questionEn": "What color is the sea in Ha Long Bay?",
            "questionVi": "Nước biển ở Vịnh Hạ Long có màu gì?",
            "options": ["Blue", "Red", "Pink", "Black"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'Look at the blue sea!'",
            "promptVi": "Em hãy nói: 'Look at the blue sea!'",
            "targetSentenceEn": "Look at the blue sea!",
            "targetSentenceVi": "Hãy nhìn biển xanh kìa!",
            "phoneticFocus": "/iː/ in sea and green",
            "pronunciationTipsEn": "Smile and stretch your lips for the long /iː/ sound.",
            "pronunciationTipsVi": "Cười mỉm và kéo dài môi khi phát âm âm /iː/ dài.",
            "shadowAudioText": "Look at the blue sea!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Sea Explorer Picture Match",
            "gameTitleVi": "Ghép tranh thế giới biển",
            "instructionsEn": "Match each English word with its lovely picture!",
            "instructionsVi": "Em hãy nối từ tiếng Anh với hình ảnh tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "sea", "promptVi": "biển", "targetMatch": "🌊", "emojiOrIcon": "🌊"},
                {"id": "m2", "promptEn": "boat", "promptVi": "thuyền", "targetMatch": "⛵", "emojiOrIcon": "⛵"},
                {"id": "m3", "promptEn": "island", "promptVi": "đảo", "targetMatch": "🏝️", "emojiOrIcon": "🏝️"},
                {"id": "m4", "promptEn": "blue", "promptVi": "màu xanh", "targetMatch": "💙", "emojiOrIcon": "💙"}
            ]
        },
        "questions": [
            {
                "id": "q-g1-adv1-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What travels on the water in Ha Long Bay?",
                "questionVi": "Phương tiện nào di chuyển trên mặt nước ở Vịnh Hạ Long?",
                "options": ["A boat", "A car", "A plane", "A bicycle"],
                "correctIndex": 0,
                "explanationEn": "'Boat' travels on water.",
                "explanationVi": "'Boat' (thuyền) di chuyển trên mặt nước.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g1-adv1-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "Complete the sentence: 'The sea is ______.'",
                "questionVi": "Hoàn thành câu: 'The sea is ______.'",
                "options": ["blue", "purple", "orange", "grey"],
                "correctIndex": 0,
                "explanationEn": "The sea in Ha Long is blue.",
                "explanationVi": "Biển Hạ Long trong xanh ('blue').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g1-adv1-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Which word begins with the sound /s/?",
                "questionVi": "Từ nào bắt đầu bằng âm /s/?",
                "options": ["Sea", "Boat", "Island", "Red"],
                "correctIndex": 0,
                "explanationEn": "'Sea' begins with the sound /s/.",
                "explanationVi": "Từ 'Sea' bắt đầu bằng âm /s/.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Listening Recognition", "standardEn": "Identifies sea landscape words.", "standardVi": "Nhận biết từ vựng về biển."},
                {"skill": "Speaking Clarity", "standardEn": "Pronounces /iː/ clearly.", "standardVi": "Phát âm âm /iː/ rõ ràng."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 1 Starter"],
            "humanEditorNotes": "Grade 1 Adventure 1 My Beautiful Vietnam."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g1-adv2-culture",
        "adventureId": "adventure_2_culture",
        "lessonNumber": 1,
        "titleEn": "Colors & Festivals: Mid-Autumn Star Lantern",
        "titleVi": "Sắc màu & Lễ hội: Đèn ông sao Trung thu",
        "topicEn": "Lanterns, Moon, and Red & Yellow Colors",
        "topicVi": "Đèn lồng, mặt trăng và sắc màu đỏ vàng",
        "gradeLevel": "Grade 1",
        "gradeBand": "grade_1",
        "targetCefr": "Pre-A1 Starter",
        "durationMinutes": 30,
        "learningObjectivesEn": [
            "Recognize festival words: lantern, star, moon, red, yellow.",
            "Say: 'I have a red lantern.'",
            "Identify the colors red and yellow in Vietnamese lanterns."
        ],
        "learningObjectivesVi": [
            "Nhận biết các từ lễ hội: lantern, star, moon, red, yellow.",
            "Nói được câu: 'I have a red lantern.'",
            "Nhận diện màu đỏ và vàng của đèn ông sao."
        ],
        "coverImage": "/destinations/hanoi.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g1_lantern_video",
            "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
            "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "My Little Family & Mid-Autumn Lantern",
            "titleVi": "Gia đình nhỏ và chiếc đèn ông sao",
            "durationMinutes": 3,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g1-adv2-v1", "word": "lantern", "ipa": "/ˈlæn.tən/", "partOfSpeech": "noun", "meaningEn": "A lamp with a light inside.", "meaningVi": "Đèn lồng, đèn ông sao.", "exampleSentenceEn": "I hold a bright lantern.", "exampleSentenceVi": "Em cầm chiếc đèn lồng sáng rực.", "emoji": "🏮", "audioPromptEn": "Lantern. A bright lantern."},
            {"id": "g1-adv2-v2", "word": "star", "ipa": "/stɑːr/", "partOfSpeech": "noun", "meaningEn": "A bright shape in the sky.", "meaningVi": "Ngôi sao năm cánh.", "exampleSentenceEn": "The star lantern is shining.", "exampleSentenceVi": "Đèn ông sao đang tỏa sáng.", "emoji": "⭐", "audioPromptEn": "Star. Look at the star."},
            {"id": "g1-adv2-v3", "word": "moon", "ipa": "/muːn/", "partOfSpeech": "noun", "meaningEn": "The big round light in the night sky.", "meaningVi": "Mặt trăng rằm tròn vành vạnh.", "exampleSentenceEn": "The moon is round and yellow.", "exampleSentenceVi": "Mặt trăng tròn và có màu vàng.", "emoji": "🌕", "audioPromptEn": "Moon. A round yellow moon."},
            {"id": "g1-adv2-v4", "word": "red", "ipa": "/red/", "partOfSpeech": "adjective", "meaningEn": "The bright color of apples and stars.", "meaningVi": "Màu đỏ may mắn.", "exampleSentenceEn": "My star lantern is red.", "exampleSentenceVi": "Đèn ông sao của em có màu đỏ.", "emoji": "🔴", "audioPromptEn": "Red. Red lantern."}
        ],
        "sentencePatterns": [
            {
                "id": "g1-adv2-sp",
                "pattern": "I have a [adjective] [noun].",
                "patternMeaningVi": "Em có một chiếc [danh từ] màu [tính từ].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "What do you have for Mid-Autumn?"},
                    {"speaker": "Explorer", "text": "I have a red star lantern!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Em có gì để đón Trung thu nào?"},
                    {"speaker": "Học sinh", "text": "Em có một chiếc đèn ông sao màu đỏ ạ!"}
                ],
                "practicePromptEn": "I have a yellow star.",
                "practicePromptVi": "Em có một ngôi sao màu vàng."
            }
        ],
        "reading": {
            "titleEn": "Mid-Autumn Night",
            "titleVi": "Đêm hội Trăng rằm",
            "wordCount": 24,
            "passagesEn": [
                "Tonight is Mid-Autumn Festival in Vietnam.",
                "Look up at the yellow moon! Children sing happily with red star lanterns."
            ],
            "passagesVi": [
                "Tối nay là đêm hội Trung thu ở Việt Nam.",
                "Hãy nhìn lên mặt trăng vàng! Các bạn nhỏ vui ca với chiếc đèn ông sao màu đỏ."
            ],
            "comprehensionTipsEn": "Find the word 'moon' in the story.",
            "comprehensionTipsVi": "Tìm từ 'moon' trong câu chuyện.",
            "readingImage": "/destinations/hanoi.jpg"
        },
        "listening": {
            "audioTitleEn": "Singing with Captain Trang",
            "audioScriptEn": "Hello friends! Look at my lantern! It has five points like a star, and it is bright red!",
            "audioScriptVi": "Chào các bạn! Hãy nhìn đèn lồng của cô Trang! Đèn có năm cánh như ngôi sao và màu đỏ rực rỡ!",
            "speakerRole": "Captain Trang",
            "questionEn": "What shape is Captain Trang's lantern?",
            "questionVi": "Đèn lồng của cô Trang có hình gì?",
            "options": ["A star", "A square", "A cloud", "A circle"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'I love my red lantern!'",
            "promptVi": "Em hãy nói: 'I love my red lantern!'",
            "targetSentenceEn": "I love my red lantern!",
            "targetSentenceVi": "Em yêu chiếc đèn lồng màu đỏ của em!",
            "phoneticFocus": "/ɑː/ in star and lantern",
            "pronunciationTipsEn": "Open your mouth wide for the /ɑː/ sound in star.",
            "pronunciationTipsVi": "Mở rộng khẩu hình khi phát âm âm /ɑː/ trong từ star.",
            "shadowAudioText": "I love my red lantern!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Festival Colors Pop",
            "gameTitleVi": "Ghép tranh sắc màu lễ hội",
            "instructionsEn": "Tap the matching festival item!",
            "instructionsVi": "Chạm vào biểu tượng lễ hội tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "lantern", "promptVi": "đèn lồng", "targetMatch": "🏮", "emojiOrIcon": "🏮"},
                {"id": "m2", "promptEn": "star", "promptVi": "ngôi sao", "targetMatch": "⭐", "emojiOrIcon": "⭐"},
                {"id": "m3", "promptEn": "moon", "promptVi": "mặt trăng", "targetMatch": "🌕", "emojiOrIcon": "🌕"},
                {"id": "m4", "promptEn": "red", "promptVi": "màu đỏ", "targetMatch": "🔴", "emojiOrIcon": "🔴"}
            ]
        },
        "questions": [
            {
                "id": "q-g1-adv2-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "What shines round and bright in the night sky?",
                "questionVi": "Vật gì tròn và sáng trên bầu trời đêm?",
                "options": ["The moon", "The car", "The table", "The pencil"],
                "correctIndex": 0,
                "explanationEn": "The moon shines at night.",
                "explanationVi": "Mặt trăng ('The moon') tỏa sáng vào ban đêm.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g1-adv2-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What color is the Mid-Autumn star lantern?",
                "questionVi": "Chiếc đèn ông sao Trung thu có màu gì?",
                "options": ["Red", "Black", "Brown", "Grey"],
                "correctIndex": 0,
                "explanationEn": "Traditional star lanterns are bright red and yellow.",
                "explanationVi": "Đèn ông sao truyền thống có màu đỏ rực rỡ ('Red').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g1-adv2-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "How do you say: 'Tôi có một chiếc đèn lồng'?",
                "questionVi": "Nói 'Tôi có một chiếc đèn lồng' bằng tiếng Anh như thế nào?",
                "options": ["I have a lantern.", "I am a boat.", "It is a tree.", "Goodbye teacher."],
                "correctIndex": 0,
                "explanationEn": "'I have a lantern' means 'Tôi có một chiếc đèn lồng'.",
                "explanationVi": "'I have a lantern' nghĩa là 'Tôi có một chiếc đèn lồng'.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Festival Word Recognition", "standardEn": "Identifies lantern, moon, star.", "standardVi": "Nhận biết từ vựng lễ hội."},
                {"skill": "Color Expression", "standardEn": "Uses red and yellow correctly.", "standardVi": "Sử dụng đúng màu sắc đỏ, vàng."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 1 Culture"],
            "humanEditorNotes": "Grade 1 Adventure 2 Colors & Festivals."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g1-adv3-food",
        "adventureId": "adventure_3_food",
        "lessonNumber": 1,
        "titleEn": "Yummy Food: Sweet Tropical Fruits",
        "titleVi": "Món ngon tuyệt vời: Trái cây nhiệt đới ngọt lành",
        "topicEn": "Mango, Watermelon, Banana, and Yummy Fruits",
        "topicVi": "Xoài, dưa hấu, chuối và trái cây ngon",
        "gradeLevel": "Grade 1",
        "gradeBand": "grade_1",
        "targetCefr": "Pre-A1 Starter",
        "durationMinutes": 30,
        "learningObjectivesEn": [
            "Learn 4 fruit words: mango, watermelon, banana, apple.",
            "Say: 'I like [fruit]. It is yummy!'",
            "Express simple food preferences in English."
        ],
        "learningObjectivesVi": [
            "Học 4 từ trái cây: mango, watermelon, banana, apple.",
            "Nói câu: 'I like [fruit]. It is yummy!'",
            "Bày tỏ sở thích ăn uống đơn giản."
        ],
        "coverImage": "/destinations/danang.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g1_fruits_video",
            "videoUrl": "https://www.youtube.com/watch?v=FjU_xYlVD4g",
            "embedUrl": "https://www.youtube-nocookie.com/embed/FjU_xYlVD4g?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Delicious Tropical Fruits of Vietnam",
            "titleVi": "Hoa quả nhiệt đới tươi ngon Việt Nam",
            "durationMinutes": 3,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g1-adv3-v1", "word": "mango", "ipa": "/ˈmæŋ.ɡəʊ/", "partOfSpeech": "noun", "meaningEn": "A sweet yellow tropical fruit.", "meaningVi": "Quả xoài ngọt lịm.", "exampleSentenceEn": "The yellow mango is very sweet.", "exampleSentenceVi": "Quả xoài vàng rất ngọt.", "emoji": "🥭", "audioPromptEn": "Mango. Sweet mango."},
            {"id": "g1-adv3-v2", "word": "watermelon", "ipa": "/ˈwɔː.təˌmel.ən/", "partOfSpeech": "noun", "meaningEn": "A big green fruit that is red inside.", "meaningVi": "Quả dưa hấu mát lành.", "exampleSentenceEn": "Watermelon is juicy and red.", "exampleSentenceVi": "Dưa hấu nhiều nước và có ruột đỏ.", "emoji": "🍉", "audioPromptEn": "Watermelon. Juicy watermelon."},
            {"id": "g1-adv3-v3", "word": "banana", "ipa": "/bəˈnɑː.nə/", "partOfSpeech": "noun", "meaningEn": "A long yellow sweet fruit.", "meaningVi": "Quả chuối chín vàng.", "exampleSentenceEn": "I eat a yellow banana.", "exampleSentenceVi": "Em ăn một quả chuối vàng.", "emoji": "🍌", "audioPromptEn": "Banana. Yellow banana."},
            {"id": "g1-adv3-v4", "word": "yummy", "ipa": "/ˈjʌm.i/", "partOfSpeech": "adjective", "meaningEn": "Very tasty and delicious.", "meaningVi": "Ngon miệng, thơm ngon tuyệt vời.", "exampleSentenceEn": "This fruit is yummy!", "exampleSentenceVi": "Trái cây này ngon quá!", "emoji": "😋", "audioPromptEn": "Yummy! It is yummy."}
        ],
        "sentencePatterns": [
            {
                "id": "g1-adv3-sp",
                "pattern": "I like [fruit]. It is yummy!",
                "patternMeaningVi": "Em thích [trái cây]. Nó thật là ngon!",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "Do you like watermelon, Explorer?"},
                    {"speaker": "Explorer", "text": "Yes, I do! It is sweet and yummy!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Em có thích dưa hấu không?"},
                    {"speaker": "Học sinh", "text": "Dạ có ạ! Dưa hấu ngọt và ngon lắm!"}
                ],
                "practicePromptEn": "I like mango. It is sweet.",
                "practicePromptVi": "Em thích xoài. Xoài rất ngọt."
            }
        ],
        "reading": {
            "titleEn": "Fruit Garden in Vietnam",
            "titleVi": "Vườn trái cây Việt Nam",
            "wordCount": 25,
            "passagesEn": [
                "Welcome to the sunny fruit garden in Vietnam!",
                "Look at the yellow mango on the tree. Look at the big green watermelon. Yummy fruits for everyone!"
            ],
            "passagesVi": [
                "Chào mừng các em đến vườn cây ăn trái ở Việt Nam!",
                "Hãy nhìn quả xoài vàng trên cây. Hãy nhìn quả dưa hấu to xanh. Hoa quả thơm ngon cho tất cả mọi người!"
            ],
            "comprehensionTipsEn": "Which fruit is yellow on the tree?",
            "comprehensionTipsVi": "Quả nào màu vàng ở trên cây?",
            "readingImage": "/destinations/danang.jpg"
        },
        "listening": {
            "audioTitleEn": "Tasting Fruits with Captain Trang",
            "audioScriptEn": "Mmm, this fruit is yellow and sweet. Monkeys love to eat it too! What fruit is it? It is a banana!",
            "audioScriptVi": "Mmm, quả này màu vàng và ngọt. Các chú khỉ cũng rất thích ăn! Đó là quả gì nhỉ? Quả chuối!",
            "speakerRole": "Captain Trang",
            "questionEn": "What fruit is yellow and monkeys love to eat?",
            "questionVi": "Quả gì màu vàng mà các chú khỉ rất thích ăn?",
            "options": ["A banana", "A fish", "A stone", "A pen"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'I like sweet mango!'",
            "promptVi": "Em hãy nói: 'I like sweet mango!'",
            "targetSentenceEn": "I like sweet mango!",
            "targetSentenceVi": "Em thích quả xoài ngọt!",
            "phoneticFocus": "/m/ in mango and yummy",
            "pronunciationTipsEn": "Close your lips gently to make the humming /m/ sound.",
            "pronunciationTipsVi": "Khép nhẹ hai môi tạo âm /m/ vang ấm.",
            "shadowAudioText": "I like sweet mango!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Fruit Basket Matching",
            "gameTitleVi": "Giỏ hoa quả ngọt lành",
            "instructionsEn": "Match the fruit name with its yummy emoji!",
            "instructionsVi": "Nối tên tiếng Anh với hình trái cây tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "mango", "promptVi": "xoài", "targetMatch": "🥭", "emojiOrIcon": "🥭"},
                {"id": "m2", "promptEn": "watermelon", "promptVi": "dưa hấu", "targetMatch": "🍉", "emojiOrIcon": "🍉"},
                {"id": "m3", "promptEn": "banana", "promptVi": "chuối", "targetMatch": "🍌", "emojiOrIcon": "🍌"},
                {"id": "m4", "promptEn": "yummy", "promptVi": "thơm ngon", "targetMatch": "😋", "emojiOrIcon": "😋"}
            ]
        },
        "questions": [
            {
                "id": "q-g1-adv3-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "Which fruit is green outside and red inside?",
                "questionVi": "Quả nào vỏ xanh ruột đỏ?",
                "options": ["Watermelon", "Banana", "Milk", "Bread"],
                "correctIndex": 0,
                "explanationEn": "Watermelon is green on the outside and red inside.",
                "explanationVi": "Dưa hấu ('Watermelon') vỏ ngoài màu xanh, bên trong màu đỏ.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g1-adv3-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What does 'yummy' mean?",
                "questionVi": "Từ 'yummy' có nghĩa là gì?",
                "options": ["Delicious and tasty", "Cold and scary", "Big and loud", "Sad"],
                "correctIndex": 0,
                "explanationEn": "'Yummy' means delicious.",
                "explanationVi": "'Yummy' nghĩa là ngon miệng ('Delicious and tasty').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g1-adv3-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "How do you say: 'Em thích dưa hấu'?",
                "questionVi": "Em nói 'Em thích dưa hấu' bằng tiếng Anh như thế nào?",
                "options": ["I like watermelon.", "I am a boat.", "Look at the cat.", "Good morning."],
                "correctIndex": 0,
                "explanationEn": "'I like watermelon' means 'Em thích dưa hấu'.",
                "explanationVi": "'I like watermelon' có nghĩa là 'Em thích dưa hấu'.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Fruit Vocabulary", "standardEn": "Identifies tropical fruits.", "standardVi": "Nhận diện hoa quả nhiệt đới."},
                {"skill": "Preference Statement", "standardEn": "Says 'I like [fruit]'.", "standardVi": "Nói được câu 'I like [fruit]'."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 1 Food"],
            "humanEditorNotes": "Grade 1 Adventure 3 Yummy Food."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g1-adv4-nature",
        "adventureId": "adventure_4_nature",
        "lessonNumber": 1,
        "titleEn": "Animal Friends: Friendly Forest Friends",
        "titleVi": "Những người bạn động vật: Bạn nhỏ trong rừng",
        "topicEn": "Bird, Monkey, Cat, Fish, and Animal Sounds",
        "topicVi": "Chim, khỉ, mèo, cá và tiếng kêu động vật",
        "gradeLevel": "Grade 1",
        "gradeBand": "grade_1",
        "targetCefr": "Pre-A1 Starter",
        "durationMinutes": 30,
        "learningObjectivesEn": [
            "Learn 4 animal words: bird, monkey, cat, fish.",
            "Use the sentence: 'The [animal] can [action].' (e.g. sing, swim).",
            "Practice the /b/ phonics sound in 'bird'."
        ],
        "learningObjectivesVi": [
            "Học 4 từ động vật: bird, monkey, cat, fish.",
            "Nói câu: 'The bird can sing. The fish can swim.'",
            "Luyện phát âm âm /b/ trong từ bird."
        ],
        "coverImage": "/destinations/phong_nha.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g1_animals_video",
            "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
            "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "Animals of Cuc Phuong National Park",
            "titleVi": "Thế giới muông thú rừng Cúc Phương",
            "durationMinutes": 4,
            "isTeacherCreated": False,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g1-adv4-v1", "word": "bird", "ipa": "/bɜːd/", "partOfSpeech": "noun", "meaningEn": "An animal that has wings and feathers.", "meaningVi": "Chú chim biết bay và hót líu lo.", "exampleSentenceEn": "The little bird can sing.", "exampleSentenceVi": "Chú chim nhỏ biết hót líu lo.", "emoji": "🐦", "audioPromptEn": "Bird. A singing bird."},
            {"id": "g1-adv4-v2", "word": "monkey", "ipa": "/ˈmʌŋ.ki/", "partOfSpeech": "noun", "meaningEn": "A clever animal that climbs trees.", "meaningVi": "Chú khỉ tinh nghịch leo trèo.", "exampleSentenceEn": "The playful monkey climbs the tree.", "exampleSentenceVi": "Chú khỉ tinh nghịch trèo cây.", "emoji": "🐒", "audioPromptEn": "Monkey. A playful monkey."},
            {"id": "g1-adv4-v3", "word": "fish", "ipa": "/fɪʃ/", "partOfSpeech": "noun", "meaningEn": "An animal that lives and swims in water.", "meaningVi": "Chú cá bơi lội dưới nước.", "exampleSentenceEn": "The colorful fish can swim.", "exampleSentenceVi": "Chú cá nhiều màu biết bơi.", "emoji": "🐟", "audioPromptEn": "Fish. A swimming fish."},
            {"id": "g1-adv4-v4", "word": "cat", "ipa": "/kæt/", "partOfSpeech": "noun", "meaningEn": "A small furry pet that purrs.", "meaningVi": "Mèo con kêu meo meo đáng yêu.", "exampleSentenceEn": "My cute cat says meow.", "exampleSentenceVi": "Mèo con của em kêu meo meo.", "emoji": "🐱", "audioPromptEn": "Cat. A cute cat."}
        ],
        "sentencePatterns": [
            {
                "id": "g1-adv4-sp",
                "pattern": "The [animal] can [verb].",
                "patternMeaningVi": "[Động vật] có thể [hành động].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "What can the bird do, Explorer?"},
                    {"speaker": "Explorer", "text": "The bird can fly and sing!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Chú chim có thể làm gì nào?"},
                    {"speaker": "Học sinh", "text": "Dạ chú chim biết bay và hót ạ!"}
                ],
                "practicePromptEn": "The fish can swim.",
                "practicePromptVi": "Chú cá biết bơi lội."
            }
        ],
        "reading": {
            "titleEn": "Friends in the Forest",
            "titleVi": "Những người bạn trong rừng",
            "wordCount": 24,
            "passagesEn": [
                "Good morning, forest friends! In the green trees, a little bird sings.",
                "A clever monkey jumps happily. In the clear river, a silver fish swims."
            ],
            "passagesVi": [
                "Chào buổi sáng những bạn nhỏ trong rừng! Trên cành cây xanh, chú chim nhỏ hót ca.",
                "Chú khỉ tinh khôn nhảy nhót vui vẻ. Dưới dòng sông trong vắt, chú cá bơi lội."
            ],
            "comprehensionTipsEn": "What does the little bird do?",
            "comprehensionTipsVi": "Chú chim nhỏ làm gì?",
            "readingImage": "/destinations/phong_nha.jpg"
        },
        "listening": {
            "audioTitleEn": "Animal Sounds with Captain Trang",
            "audioScriptEn": "Listen carefully! Chirp, chirp, chirp! What animal friend makes that cheerful sound? It is a bird!",
            "audioScriptVi": "Lắng nghe thật kỹ nhé! Chíp, chíp, chíp! Bạn động vật nào kêu vui tai thế? Đó là chú chim!",
            "speakerRole": "Captain Trang",
            "questionEn": "What animal sings 'chirp, chirp' in the tree?",
            "questionVi": "Bạn động vật nào kêu 'chíp, chíp' trên cây?",
            "options": ["A bird", "A fish", "A bus", "A chair"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'The bird can sing!'",
            "promptVi": "Em hãy nói: 'The bird can sing!'",
            "targetSentenceEn": "The bird can sing!",
            "targetSentenceVi": "Chú chim nhỏ biết hót!",
            "phoneticFocus": "/b/ in bird and banana",
            "pronunciationTipsEn": "Press both lips together and release with voice for /b/.",
            "pronunciationTipsVi": "Mím môi và bật nhẹ hơi có rung thanh quản tạo âm /b/.",
            "shadowAudioText": "The bird can sing!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Animal Safari Match",
            "gameTitleVi": "Ghép bạn động vật",
            "instructionsEn": "Match each animal with its cute picture!",
            "instructionsVi": "Nối từ tiếng Anh với hình bạn động vật tương ứng nhé!",
            "items": [
                {"id": "m1", "promptEn": "bird", "promptVi": "chim", "targetMatch": "🐦", "emojiOrIcon": "🐦"},
                {"id": "m2", "promptEn": "monkey", "promptVi": "khỉ", "targetMatch": "🐒", "emojiOrIcon": "🐒"},
                {"id": "m3", "promptEn": "fish", "promptVi": "cá", "targetMatch": "🐟", "emojiOrIcon": "🐟"},
                {"id": "m4", "promptEn": "cat", "promptVi": "mèo", "targetMatch": "🐱", "emojiOrIcon": "🐱"}
            ]
        },
        "questions": [
            {
                "id": "q-g1-adv4-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "Which animal lives and swims in the water?",
                "questionVi": "Con vật nào sống và bơi dưới nước?",
                "options": ["A fish", "A monkey", "A cat", "A bird"],
                "correctIndex": 0,
                "explanationEn": "A fish swims in the water.",
                "explanationVi": "Cá ('A fish') bơi dưới nước.",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g1-adv4-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What can a bird do?",
                "questionVi": "Chú chim có thể làm gì?",
                "options": ["Fly and sing", "Drive a car", "Cook soup", "Read books"],
                "correctIndex": 0,
                "explanationEn": "Birds can fly and sing.",
                "explanationVi": "Loài chim có thể bay và hót ('Fly and sing').",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g1-adv4-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Which animal climbs green trees?",
                "questionVi": "Con vật nào leo trèo trên cây xanh?",
                "options": ["A monkey", "A boat", "A table", "A bed"],
                "correctIndex": 0,
                "explanationEn": "Monkeys climb trees.",
                "explanationVi": "Khỉ ('A monkey') leo trèo trên cây.",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "Animal Vocabulary", "standardEn": "Identifies bird, monkey, fish, cat.", "standardVi": "Nhận biết các con vật."},
                {"skill": "Ability Expression", "standardEn": "Uses 'can sing / can swim'.", "standardVi": "Sử dụng được câu 'can swim / can sing'."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 1 Nature"],
            "humanEditorNotes": "Grade 1 Adventure 4 Animal Friends."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    },

    {
        "id": "lesson-g1-adv5-future",
        "adventureId": "adventure_5_future",
        "lessonNumber": 1,
        "titleEn": "My Dream City: Clean & Green Playground",
        "titleVi": "Thành phố mơ ước: Sân chơi xanh sạch đẹp",
        "topicEn": "Park, Electric Bus, Tall Trees, and Clean City",
        "topicVi": "Công viên, xe buýt điện, cây xanh và thành phố sạch",
        "gradeLevel": "Grade 1",
        "gradeBand": "grade_1",
        "targetCefr": "Pre-A1 Starter",
        "durationMinutes": 30,
        "learningObjectivesEn": [
            "Learn 4 city words: park, bus, tree, clean.",
            "Use the sentence: 'My city is [adjective].' (clean, green).",
            "Develop an early love for green parks and clean environments."
        ],
        "learningObjectivesVi": [
            "Học 4 từ thành phố: park, bus, tree, clean.",
            "Nói câu: 'My city is clean and green.'",
            "Hình thành tình yêu môi trường xanh sạch đẹp."
        ],
        "coverImage": "/destinations/hanoi.jpg",
        "coverImageAttribution": "VietDiscovery Team",
        "videoLesson": {
            "videoId": "g1_city_video",
            "videoUrl": "https://www.youtube.com/watch?v=k1BneeJTDcU",
            "embedUrl": "https://www.youtube-nocookie.com/embed/k1BneeJTDcU?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1",
            "titleEn": "My Little Family in a Clean Green City",
            "titleVi": "Gia đình em trong thành phố xanh mát",
            "durationMinutes": 3,
            "isTeacherCreated": True,
            "status": "approved"
        },
        "vocabulary": [
            {"id": "g1-adv5-v1", "word": "park", "ipa": "/pɑːk/", "partOfSpeech": "noun", "meaningEn": "A green open place where children play.", "meaningVi": "Công viên rợp bóng mát.", "exampleSentenceEn": "We play happily in the park.", "exampleSentenceVi": "Chúng em vui chơi trong công viên.", "emoji": "🏞️", "audioPromptEn": "Park. A green park."},
            {"id": "g1-adv5-v2", "word": "bus", "ipa": "/bʌs/", "partOfSpeech": "noun", "meaningEn": "A large electric vehicle for many people.", "meaningVi": "Xe buýt điện thân thiện môi trường.", "exampleSentenceEn": "The electric bus is clean.", "exampleSentenceVi": "Xe buýt điện rất sạch sẽ.", "emoji": "🚌", "audioPromptEn": "Bus. An electric bus."},
            {"id": "g1-adv5-v3", "word": "tree", "ipa": "/triː/", "partOfSpeech": "noun", "meaningEn": "A tall plant with leaves and wood.", "meaningVi": "Cây xanh cho bóng mát.", "exampleSentenceEn": "There are green trees in my school.", "exampleSentenceVi": "Trường em có nhiều cây xanh.", "emoji": "🌳", "audioPromptEn": "Tree. A green tree."},
            {"id": "g1-adv5-v4", "word": "clean", "ipa": "/kliːn/", "partOfSpeech": "adjective", "meaningEn": "Free from dirt, fresh and tidy.", "meaningVi": "Sạch sẽ, không có rác.", "exampleSentenceEn": "Our dream city is clean.", "exampleSentenceVi": "Thành phố mơ ước của em rất sạch.", "emoji": "✨", "audioPromptEn": "Clean. Clean and green."}
        ],
        "sentencePatterns": [
            {
                "id": "g1-adv5-sp",
                "pattern": "My city is [adjective] and [adjective].",
                "patternMeaningVi": "Thành phố của em thật là [tính từ] và [tính từ].",
                "dialogueEn": [
                    {"speaker": "Captain Trang", "text": "How is your dream city, Explorer?"},
                    {"speaker": "Explorer", "text": "My city is clean and green!"}
                ],
                "dialogueVi": [
                    {"speaker": "Cô Trang", "text": "Thành phố mơ ước của em như thế nào?"},
                    {"speaker": "Học sinh", "text": "Thành phố của em xanh và sạch đẹp ạ!"}
                ],
                "practicePromptEn": "My school is clean and beautiful.",
                "practicePromptVi": "Trường học của em sạch và đẹp."
            }
        ],
        "reading": {
            "titleEn": "Dream City of Vietnam",
            "titleVi": "Thành phố mơ ước của Việt Nam",
            "wordCount": 25,
            "passagesEn": [
                "In my dream city, the streets are clean.",
                "Quiet electric buses carry smiling children. Tall green trees give cool shade in the park. We love our green home!"
            ],
            "passagesVi": [
                "Trong thành phố mơ ước của em, đường phố thật sạch sẽ.",
                "Những chiếc xe buýt điện êm ái chở các bạn nhỏ rạng rỡ nụ cười. Những hàng cây xanh tỏa bóng mát trong công viên!"
            ],
            "comprehensionTipsEn": "What vehicles carry children in the city?",
            "comprehensionTipsVi": "Phương tiện nào chở các bạn nhỏ trong thành phố?",
            "readingImage": "/destinations/hanoi.jpg"
        },
        "listening": {
            "audioTitleEn": "Walking in the Park with Captain Trang",
            "audioScriptEn": "Breathe in the fresh air! Look around! We have tall trees, a quiet electric bus, and no trash on the ground. It is clean!",
            "audioScriptVi": "Hãy hít thở không khí trong lành! Nhìn quanh xem, có cây xanh, xe buýt điện êm ái và không có rác trên đường. Thật là sạch!",
            "speakerRole": "Captain Trang",
            "questionEn": "What makes the air in the dream city fresh?",
            "questionVi": "Điều gì giúp không khí trong thành phố mơ ước trong lành?",
            "options": ["Tall green trees", "Dark smoke", "Plastic trash", "Old engines"],
            "correctIndex": 0,
            "audioSlowAvailable": True
        },
        "speaking": {
            "promptEn": "Say: 'My city is clean and green!'",
            "promptVi": "Em hãy nói: 'My city is clean and green!'",
            "targetSentenceEn": "My city is clean and green!",
            "targetSentenceVi": "Thành phố của em xanh và sạch!",
            "phoneticFocus": "/ɡ/ in green and /kl/ in clean",
            "pronunciationTipsEn": "Sound the /ɡ/ gently at the back of your mouth.",
            "pronunciationTipsVi": "Phát âm âm /ɡ/ nhẹ nhàng ở cuống họng.",
            "shadowAudioText": "My city is clean and green!"
        },
        "interactiveGame": {
            "gameType": "word_picture_match",
            "gameTitleEn": "Green City Builder",
            "gameTitleVi": "Xây dựng thành phố xanh",
            "instructionsEn": "Match the word to make our city beautiful!",
            "instructionsVi": "Ghép từ tiếng Anh để xây dựng thành phố tươi đẹp nhé!",
            "items": [
                {"id": "m1", "promptEn": "park", "promptVi": "công viên", "targetMatch": "🏞️", "emojiOrIcon": "🏞️"},
                {"id": "m2", "promptEn": "bus", "promptVi": "xe buýt", "targetMatch": "🚌", "emojiOrIcon": "🚌"},
                {"id": "m3", "promptEn": "tree", "promptVi": "cây xanh", "targetMatch": "🌳", "emojiOrIcon": "🌳"},
                {"id": "m4", "promptEn": "clean", "promptVi": "sạch sẽ", "targetMatch": "✨", "emojiOrIcon": "✨"}
            ]
        },
        "questions": [
            {
                "id": "q-g1-adv5-1",
                "challengeLevel": 1,
                "levelNameEn": "Recognize",
                "levelNameVi": "Nhận biết",
                "questionEn": "Where do children run and play outdoors?",
                "questionVi": "Nơi nào trẻ em có thể chạy nhảy vui chơi ngoài trời?",
                "options": ["In the park", "In the car", "Under the bed", "Inside a box"],
                "correctIndex": 0,
                "explanationEn": "Children play in the park.",
                "explanationVi": "Trẻ em vui chơi trong công viên ('In the park').",
                "learningSkill": "Vocabulary Recognition"
            },
            {
                "id": "q-g1-adv5-2",
                "challengeLevel": 2,
                "levelNameEn": "Connect",
                "levelNameVi": "Kết nối",
                "questionEn": "What kind of bus keeps the air clean and quiet?",
                "questionVi": "Loại xe buýt nào giữ không khí trong lành và êm ái?",
                "options": ["An electric bus", "A smoky bus", "A broken bus", "A flying bus"],
                "correctIndex": 0,
                "explanationEn": "Electric buses run on clean energy without smoke.",
                "explanationVi": "Xe buýt điện ('An electric bus') không khói bụi và êm ái.",
                "learningSkill": "Cultural Connection"
            },
            {
                "id": "q-g1-adv5-3",
                "challengeLevel": 3,
                "levelNameEn": "Apply",
                "levelNameVi": "Vận dụng",
                "questionEn": "Complete the motto: 'My city is clean and ______.'",
                "questionVi": "Hoàn thành khẩu hiệu: 'My city is clean and ______.'",
                "options": ["green", "dirty", "grey", "cold"],
                "correctIndex": 0,
                "explanationEn": "Our dream city is clean and green.",
                "explanationVi": "Thành phố mơ ước của em xanh và sạch ('clean and green').",
                "learningSkill": "Communicative Application"
            }
        ],
        "assessment": {
            "starsAwarded": 30,
            "minimumPassScorePercent": 60,
            "criteria": [
                {"skill": "City Words", "standardEn": "Identifies park, bus, tree, clean.", "standardVi": "Nhận biết từ vựng về thành phố."},
                {"skill": "Environmental Description", "standardEn": "Expresses clean and green.", "standardVi": "Diễn đạt được ý thành phố sạch và xanh."}
            ]
        },
        "status": "published",
        "verification": {
            "isVerifiedByTeacher": True,
            "teacherName": "Ms. Trần Thị Thu Trang",
            "isAiGenerated": False,
            "sourceReferences": ["Circular 27/2020/TT-BGDDT Grade 1 Future"],
            "humanEditorNotes": "Grade 1 Adventure 5 My Dream City."
        },
        "createdAt": "2026-10-15",
        "updatedAt": "2026-10-15"
    }
]

def format_ts_file(lessons, grade_num):
    content = f"""// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — GRADE {grade_num} CURRICULUM LESSONS (5 THEMATIC ADVENTURES)
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import {{ CurriculumLesson }} from '../../types/curriculum';

export const GRADE_{grade_num}_LESSONS: CurriculumLesson[] = {json.dumps(lessons, indent=2, ensure_ascii=False)};
"""
    return content

file_path = os.path.join(BASE_DIR, "lessonsGrade1.ts")
with open(file_path, "w", encoding="utf-8") as f:
    f.write(format_ts_file(g1_lessons, 1))

print("Created lessonsGrade1.ts with 5 full adventures.")
