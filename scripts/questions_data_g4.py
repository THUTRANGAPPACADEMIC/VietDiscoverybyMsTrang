# scripts/questions_data_g4.py
# Grade 4 - Discovery Rocket (Pre-A1 to A1)
# 5 games x 30 questions = 150 questions

def get_grade4_questions():
    q = []
    
    # -------------------------------------------------------------
    # GAME 1: English Escape Room (30 items)
    # -------------------------------------------------------------
    escape_raw = [
        # Easy (10)
        ("Room 1 Clue: I have hands and a face, but I cannot smile. I tell you when school starts. What am I?", "Manh mối phòng 1: Tôi có kim và mặt đồng hồ nhưng không biết cười...", "CLOCK", ["CLOCK", "DOOR", "BOOK"], "easy"),
        ("Room 1 Door Code: I have pages and words, but I cannot speak. Read me to find the secret number.", "Mã số cửa: Tôi có nhiều trang và từ ngữ...", "BOOK", ["BOOK", "DESK", "CHAIR"], "easy"),
        ("Room 1 Chest: I am tall when young, and short when old. I glow with light in the dark.", "Rương bí mật: Khi trẻ tôi cao, già tôi lùn, thắp sáng màn đêm...", "CANDLE", ["CANDLE", "TREE", "PENCIL"], "easy"),
        ("Room 2 Clue: The password is what students write with made of graphite and cedar wood.", "Mật khẩu là dụng cụ viết bằng than chì...", "PENCIL", ["PENCIL", "ERASER", "RULER"], "easy"),
        ("Room 2 Lock: What has four legs, a wooden top, but cannot walk around the classroom?", "Ổ khóa: Có 4 chân, mặt gỗ, nhưng không biết đi...", "TABLE", ["TABLE", "DOG", "CAT"], "easy"),
        ("Room 2 Key: I have teeth but no mouth. I untangle messy hair in the morning.", "Chìa khóa: Tôi có răng nhưng không có miệng...", "COMB", ["COMB", "BRUSH", "FORK"], "easy"),
        ("Room 3 Door: What gets wet while it is drying your hands after washing?", "Cửa thoát hiểm: Thứ gì bị ướt khi đang lau khô tay bạn?", "TOWEL", ["TOWEL", "SPONGE", "WATER"], "easy"),
        ("Room 3 Clue: I have an eye in the middle of a storm, but I cannot see anything.", "Manh mối: Có mắt bão nhưng không nhìn thấy gì...", "STORM", ["STORM", "NEEDLE", "POTATO"], "easy"),
        ("Room 3 Lock: What has many keys that can open no real doors, but make lovely melodies?", "Ổ khóa: Có nhiều phím nhưng không mở được cửa, chỉ phát ra nhạc...", "PIANO", ["PIANO", "GUITAR", "DRUM"], "easy"),
        ("Escape Hatch: What goes up when rain comes down from the grey clouds?", "Cửa thoát cuối: Thứ gì giương lên khi mưa rơi xuống?", "UMBRELLA", ["UMBRELLA", "KITE", "BALLOON"], "easy"),
        # Medium (10)
        ("Vault Clue: A historic city with 36 ancient guild streets where artisans once made silver, silk, and pottery.", "Manh mối kho báu: Thành phố có 36 phố phường...", "HANOI", ["HANOI", "HUE", "SAIGON"], "medium"),
        ("Vault Lock: The famous cave in Quang Binh where you explore stalactites by dragon boat.", "Ổ khóa kho báu: Hang động ở Quảng Binh đi thuyền rồng vào...", "PHONG NHA", ["PHONG NHA", "SON DOONG", "TAM COC"], "medium"),
        ("Cipher Clue: What month in Vietnam has Teachers' Day on the twentieth day?", "Mật mã: Tháng nào có Ngày Nhà giáo Việt Nam 20?", "NOVEMBER", ["NOVEMBER", "OCTOBER", "DECEMBER"], "medium"),
        ("Library Riddle: What room in your school has thousands of books, silent rules, and study desks?", "Câu đố thư viện: Phòng nào có hàng ngàn cuốn sách và giữ trật tự?", "LIBRARY", ["LIBRARY", "CANTEEN", "GYM"], "medium"),
        ("Map Cipher: The river that flows through Hue ancient capital, named after a sweet fragrance.", "Mật mã sông: Dòng sông chảy qua cố đô Huế mang tên hương thơm...", "PERFUME RIVER", ["PERFUME RIVER", "RED RIVER", "HAN RIVER"], "medium"),
        ("Secret Passage: The bridge in Da Nang shaped like a mythical creature that breathes fire on weekends.", "Lối đi bí mật: Cây cầu hình sinh vật huyền thoại phun lửa...", "DRAGON BRIDGE", ["DRAGON BRIDGE", "GOLDEN BRIDGE", "LONG BIEN"], "medium"),
        ("Code Breaker: The high mountain pass between Hue and Da Nang, meaning 'Ocean Cloud Pass'.", "Giải mã đèo: Đèo mây nối Huế và Đà Nẵng...", "HAI VAN", ["HAI VAN", "MA PI LENG", "O QUY HO"], "medium"),
        ("Treasure Chamber: The traditional silk dress with two long panels worn on national ceremonies.", "Phòng kho báu: Trang phục lụa hai tà duyên dáng...", "AO DAI", ["AO DAI", "KIMONO", "HANBOK"], "medium"),
        ("Heritage Lock: The highest mountain in Indochina where frost and snow can fall in winter.", "Khóa di sản: Đỉnh núi cao nhất Đông Dương...", "FANSIPAN", ["FANSIPAN", "BA DEN", "LANGBIANG"], "medium"),
        ("Escape Gate: The southern city once called 'The Pearl of the Orient'.", "Cổng thoát hiểm: Thành phố phương Nam từng được gọi là 'Hòn ngọc Viễn Đông'...", "SAIGON", ["SAIGON", "CAN THO", "VUNG TAU"], "medium"),
        # Challenge (10)
        ("Master Vault: Decipher the code: 3,143 meters high, located in Hoang Lien Son range.", "Kho báu tối thượng: Cao 3.143m thuộc dãy Hoàng Liên Sơn...", "FANSIPAN", ["FANSIPAN", "PU SI LUNG", "BACH MOC"], "challenge"),
        ("Chamber of Caves: The largest natural cave on planet Earth, located inside Phong Nha-Ke Bang.", "Phòng hang động: Hang động tự nhiên lớn nhất Trái Đất...", "SON DOONG", ["SON DOONG", "EN CAVE", "PARADISE CAVE"], "challenge"),
        ("Ancient Gate: The royal palace complex where 13 Nguyen Dynasty emperors once ruled.", "Cổng hoàng cung: Quần thể cung điện nơi 13 vị vua triều Nguyễn từng trị vì...", "HUE CITADEL", ["HUE CITADEL", "THANG LONG", "HO CITADEL"], "challenge"),
        ("Lantern Hall: The UNESCO trade port that flourished from the 15th to the 19th century.", "Đại sảnh đèn lồng: Đô thị thương cảng hưng thịnh thế kỷ 15-19...", "HOI AN", ["HOI AN", "PHO HIEN", "VAN DON"], "challenge"),
        ("Water Gate: The vast river delta in the south made of nine dragon mouths flowing to the East Sea.", "Cổng nước: Vùng đồng bằng chín nhánh rồng đổ ra Biển Đông...", "MEKONG DELTA", ["MEKONG DELTA", "RED RIVER DELTA", "MA RIVER"], "challenge"),
        ("Botanical Mystery: The ancient 1000-year-old pine forest surrounded by mist and romantic lakes.", "Bí ẩn thực vật: Xứ sở sương mù và đồi thông lãng mạn...", "DA LAT", ["DA LAT", "SAPA", "TAM DAO"], "challenge"),
        ("Maritime Crypt: The volcanic island famous for sweet white garlic and crystal sea.", "Mật mã hải đảo: Đảo núi lửa nổi tiếng với tỏi cô đơn...", "LY SON", ["LY SON", "PHU QUOC", "CON DAO"], "challenge"),
        ("Ceramic Crypt: The riverside village where clay is spun on wooden kick-wheels for 700 years.", "Mật mã gốm sứ: Làng ven sông xoay bàn gốm 700 năm...", "BAT TRANG", ["BAT TRANG", "VAN PHUC", "DONG HO"], "challenge"),
        ("Independence Room: The historical wharf where young teacher Nguyen Tat Thanh embarked on his voyage in 1911.", "Phòng Độc Lập: Bến cảng lịch sử nơi người thanh niên yêu nước ra đi tìm đường cứu nước...", "NHA RONG WHARF", ["NHA RONG WHARF", "HAI PHONG PORT", "SAIGON PORT"], "challenge"),
        ("Final Victory Door: The national spirit representing 54 ethnic groups living united in peace.", "Cửa vinh quang: Tinh thần đại đoàn kết các dân tộc anh em...", "SOLIDARITY", ["SOLIDARITY", "SOLITUDE", "DIVISION"], "challenge")
    ]
    for idx, (prompt, vi, correct, opts, diff) in enumerate(escape_raw, 1):
        q.append({
            "questionId": f"g4_esc_{idx:02d}",
            "grade": 4,
            "gameType": "escape_room",
            "topic": "Escape Room Clues & Cryptograms",
            "difficulty": diff,
            "prompt": prompt,
            "promptVi": vi,
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Door unlocked! '{correct}' successfully cracks the puzzle.",
            "explanationVi": f"Cửa đã mở! '{correct}' giải mã chính xác câu đố.",
            "imageAsset": "🔐",
            "audioPrompt": prompt,
            "curriculumReference": "Global Success Grade 4 - Problem Solving & Inferences",
            "metadata": {"escapePassword": correct, "clueVi": vi}
        })

    # -------------------------------------------------------------
    # GAME 2: Mystery Word Decoder (30 items)
    # -------------------------------------------------------------
    decoder_raw = [
        # Easy (10)
        ("A-P-P-L-E", "A sweet crunchy red fruit that doctors love", "APPLE", ["APPLE", "PEAR", "PLUM"], "easy"),
        ("S-C-H-O-O-L", "The place where we learn English with Ms. Trang", "SCHOOL", ["SCHOOL", "CHURCH", "MARKET"], "easy"),
        ("T-E-A-C-H-E-R", "The person who guides and inspires students in class", "TEACHER", ["TEACHER", "DOCTOR", "FARMER"], "easy"),
        ("S-U-M-M-E-R", "The warm sunny season when students enjoy beach holidays", "SUMMER", ["SUMMER", "WINTER", "SPRING"], "easy"),
        ("F-A-M-I-L-Y", "The people who love and support you at home", "FAMILY", ["FAMILY", "FRIENDS", "GUESTS"], "easy"),
        ("D-O-C-T-O-R", "The kind person who cures patients in the hospital", "DOCTOR", ["DOCTOR", "PILOT", "SINGER"], "easy"),
        ("A-N-I-M-A-L", "Living creatures like lions, elephants, cats, and birds", "ANIMAL", ["ANIMAL", "PLANT", "MINERAL"], "easy"),
        ("F-R-I-E-N-D", "Someone you enjoy playing and studying with", "FRIEND", ["FRIEND", "ENEMY", "STRANGER"], "easy"),
        ("P-E-N-C-I-L", "A wooden tool with lead used for drawing and writing", "PENCIL", ["PENCIL", "BRUSH", "CRAYON"], "easy"),
        ("B-I-C-Y-C-L-E", "A two-wheeled vehicle you pedal with your legs", "BICYCLE", ["BICYCLE", "MOTORBIKE", "CAR"], "easy"),
        # Medium (10)
        ("V-I-E-T-N-A-M", "Our beloved homeland shaped like an energetic letter S", "VIETNAM", ["VIETNAM", "THAILAND", "JAPAN"], "medium"),
        ("L-A-N-T-E-R-N", "Colourful paper light used in Hoi An and Mid-Autumn", "LANTERN", ["LANTERN", "CANDLE", "TORCH"], "medium"),
        ("C-A-P-I-T-A-L", "The primary city where the national government resides", "CAPITAL", ["CAPITAL", "VILLAGE", "ISLAND"], "medium"),
        ("H-E-R-I-T-A-G-E", "Valuable historical traditions passed down through generations", "HERITAGE", ["HERITAGE", "BUSINESS", "FASHION"], "medium"),
        ("P-A-S-S-P-O-R-T", "A small booklet you need when traveling across international borders", "PASSPORT", ["PASSPORT", "TICKET", "LICENSE"], "medium"),
        ("M-O-U-N-T-A-I-N", "A very tall landform higher than a hill with rocky peaks", "MOUNTAIN", ["MOUNTAIN", "VALLEY", "DESERT"], "medium"),
        ("W-A-T-E-R-F-A-L-L", "River water cascading down a steep rocky cliff", "WATERFALL", ["WATERFALL", "GEYSER", "FOUNTAIN"], "medium"),
        ("F-E-S-T-I-V-A-L", "A joyful celebration with music, food, and games", "FESTIVAL", ["FESTIVAL", "EXAM", "CONFERENCE"], "medium"),
        ("C-U-L-T-U-R-E", "The beliefs, customs, arts, and way of life of a society", "CULTURE", ["CULTURE", "WEATHER", "CLIMATE"], "medium"),
        ("L-A-N-D-M-A-R-K", "A prominent recognizable building or natural feature", "LANDMARK", ["LANDMARK", "HIGHWAY", "BRIDGE"], "medium"),
        # Challenge (10)
        ("C-I-T-A-D-E-L", "A strongly fortified fortress protecting a royal city", "CITADEL", ["CITADEL", "COTTAGE", "MANSION"], "challenge"),
        ("E-X-P-L-O-R-E-R", "A brave person who journeys into unknown lands to learn", "EXPLORER", ["EXPLORER", "PASSENGER", "OBSERVER"], "challenge"),
        ("C-O-M-P-A-S-S", "A navigation device with a magnetic needle pointing North", "COMPASS", ["COMPASS", "THERMOMETER", "BAROMETER"], "challenge"),
        ("P-R-O-V-I-N-C-E", "An administrative territorial region of a country", "PROVINCE", ["PROVINCE", "CONTINENT", "DISTRICT"], "challenge"),
        ("T-O-U-R-I-S-T", "A traveler who visits scenic locations for leisure and learning", "TOURIST", ["TOURIST", "RESIDENT", "IMMIGRANT"], "challenge"),
        ("A-R-C-H-I-P-E-L-A-G-O", "A large cluster or group of numerous islands in the sea", "ARCHIPELAGO", ["ARCHIPELAGO", "PENINSULA", "CONTINENT"], "challenge"),
        ("S-T-A-L-A-C-T-I-T-E", "An icicle-shaped mineral deposit hanging from cave ceilings", "STALACTITE", ["STALACTITE", "STALAGMITE", "BOULDER"], "challenge"),
        ("B-I-O-S-P-H-E-R-E", "The natural ecological zone where life thrives harmoniously", "BIOSPHERE", ["BIOSPHERE", "ATMOSPHERE", "STRATOSPHERE"], "challenge"),
        ("P-A-G-O-D-A", "A Buddhist religious monument or temple tower", "PAGODA", ["PAGODA", "CHURCH", "CASTLE"], "challenge"),
        ("C-H-A-M-P-I-O-N", "A victorious explorer who achieves first place through dedication", "CHAMPION", ["CHAMPION", "FINALIST", "RUNNER"], "challenge")
    ]
    for idx, (cipher, clue, correct, opts, diff) in enumerate(decoder_raw, 1):
        q.append({
            "questionId": f"g4_dec_{idx:02d}",
            "grade": 4,
            "gameType": "word_decoder",
            "topic": "Cipher & Vocabulary Decoding",
            "difficulty": diff,
            "prompt": f"Decode the cipher '{cipher}': {clue}",
            "promptVi": f"Giải mã mật thư '{cipher}': {clue}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Decoded successfully! '{cipher}' spells '{correct}'.",
            "explanationVi": f"Giải mã thành công! '{cipher}' ghép thành từ '{correct}'.",
            "imageAsset": "🔤",
            "audioPrompt": f"The secret word is {correct}!",
            "curriculumReference": "Global Success Grade 4 - Spelling & Word Analysis",
            "metadata": {"cipher": cipher, "definition": clue}
        })

    # -------------------------------------------------------------
    # GAME 3: Dialogue Builder (30 items)
    # -------------------------------------------------------------
    dialogue_raw = [
        # Easy (10)
        ("A: Hello! What is your name?\nB: My name is Mai. Nice to meet you!", "Chào hỏi và làm quen", "My name is Mai.", ["My name is Mai.", "I am ten years old.", "I like pizza."], "easy"),
        ("A: How old are you, Nam?\nB: I am nine years old.", "Hỏi và trả lời tuổi", "I am nine years old.", ["I am nine years old.", "I am fine, thanks.", "He is ten."], "easy"),
        ("A: Where are you from?\nB: I am from Vietnam.", "Hỏi quê hương", "I am from Vietnam.", ["I am from Vietnam.", "I live in a house.", "I like football."], "easy"),
        ("A: What is your favourite subject?\nB: I like English best.", "Hỏi môn học yêu thích", "I like English best.", ["I like English best.", "It is Monday.", "At eight o'clock."], "easy"),
        ("A: Can you ride a bicycle?\nB: Yes, I can ride it very well.", "Hỏi khả năng", "Yes, I can ride it very well.", ["Yes, I can ride it very well.", "No, I am not.", "Yes, it is."], "easy"),
        ("A: What time is it now?\nB: It is seven o'clock in the morning.", "Hỏi giờ", "It is seven o'clock.", ["It is seven o'clock.", "It is sunny.", "On Monday."], "easy"),
        ("A: What day is it today?\nB: Today is Friday. Tomorrow is the weekend!", "Hỏi thứ trong tuần", "Today is Friday.", ["Today is Friday.", "At 8 PM.", "It is summer."], "easy"),
        ("A: What are you doing?\nB: I am reading a book about Vietnam.", "Hỏi hành động đang diễn ra", "I am reading a book.", ["I am reading a book.", "I read yesterday.", "I will read."], "easy"),
        ("A: Do you have any pets?\nB: Yes, I have a playful puppy.", "Hỏi về thú cưng", "Yes, I have a playful puppy.", ["Yes, I have a playful puppy.", "No, it is green.", "I am twelve."], "easy"),
        ("A: Where were you yesterday?\nB: I was at home with my grandparents.", "Hỏi địa điểm trong quá khứ", "I was at home.", ["I was at home.", "I am at school.", "I will be home."], "easy"),
        # Medium (10)
        ("A: How do you get to school every day?\nB: I usually walk with my best friend.", "Hỏi phương tiện đi học", "I usually walk.", ["I usually walk.", "It is five kilometers.", "At seven."], "medium"),
        ("A: Why do you want to learn English?\nB: Because I want to travel and talk to people around the world.", "Hỏi lý do học tiếng Anh", "Because I want to travel.", ["Because I want to travel.", "Yes, I do.", "On weekends."], "medium"),
        ("A: What did you do on your summer holiday?\nB: We visited Ha Long Bay and swam in the sea.", "Hỏi kỳ nghỉ hè đã làm gì", "We visited Ha Long Bay.", ["We visited Ha Long Bay.", "We will visit tomorrow.", "We are visiting now."], "medium"),
        ("A: What is the weather like in Da Lat?\nB: It is cool, breezy, and pleasant all year round.", "Hỏi thời tiết Đà Lạt", "It is cool and pleasant.", ["It is cool and pleasant.", "It was hot yesterday.", "I love Da Lat."], "medium"),
        ("A: How often do you practice speaking English?\nB: I practice speaking every single day with Ms. Trang.", "Hỏi tần suất luyện tập", "Every single day.", ["Every single day.", "Yesterday morning.", "At the library."], "medium"),
        ("A: Would you like some warm lotus tea?\nB: Yes, please. It smells wonderful!", "Lời mời thưởng thức trà sen", "Yes, please.", ["Yes, please.", "No, I can't.", "You are welcome."], "medium"),
        ("A: What does your mother look like?\nB: She is tall and has long black hair and warm eyes.", "Mô tả ngoại hình mẹ", "She is tall with long hair.", ["She is tall with long hair.", "She is a teacher.", "She likes cooking."], "medium"),
        ("A: Where is the nearest bookstore?\nB: Go straight ahead and turn right at the traffic lights.", "Hỏi đường đi hiệu sách", "Go straight and turn right.", ["Go straight and turn right.", "It has many books.", "At five PM."], "medium"),
        ("A: When is your school sports day?\nB: It will take place next month in November.", "Hỏi ngày hội thể thao", "Next month in November.", ["Next month in November.", "On the playground.", "We play badminton."], "medium"),
        ("A: What can tourists do in Hoi An?\nB: They can ride bicycles, taste local food, and release river lanterns.", "Gợi ý hoạt động ở Hội An", "Release river lanterns.", ["Release river lanterns.", "They are happy.", "Hoi An is ancient."], "medium"),
        # Challenge (10)
        ("A: Could you tell me more about the One Pillar Pagoda?\nB: It was built in 1049 to resemble a sacred lotus flower blossoming from a pond.", "Tìm hiểu lịch sử Chùa Một Cột", "It resembles a sacred lotus.", ["It resembles a sacred lotus.", "It is near a market.", "Yes, I can."], "challenge"),
        ("A: How long does the cruise tour around Ha Long Bay take?\nB: It takes about four hours to see the famous limestone grottos.", "Hỏi thời gian tour du thuyền", "It takes about four hours.", ["It takes about four hours.", "It is very green.", "By bus."], "challenge"),
        ("A: What is the significance of the Dong Ho folk paintings?\nB: They represent wishes for peace, prosperity, and happiness in the new year.", "Ý nghĩa tranh Đông Hồ", "Wishes for prosperity and peace.", ["Wishes for prosperity and peace.", "They are made of paper.", "In Bac Ninh."], "challenge"),
        ("A: How did King Le Loi return the magical sword?\nB: A sacred golden turtle surfaced and took the sword back to the depths of the lake.", "Truyền thuyết hoàn gươm", "A sacred golden turtle surfaced.", ["A sacred golden turtle surfaced.", "He bought a new sword.", "In Hanoi."], "challenge"),
        ("A: Why is the Mekong Delta known as the rice bowl of Vietnam?\nB: Because its rich, fertile soil produces most of the nation's rice and tropical fruits.", "Vựa lúa miền Tây", "It produces most of the rice.", ["It produces most of the rice.", "It has nine rivers.", "People use boats."], "challenge"),
        ("A: What should visitors wear when visiting Buddhist pagodas?\nB: Visitors should wear modest, respectful clothing that covers their shoulders and knees.", "Trang phục lịch sự khi đi lễ chùa", "Modest, respectful clothing.", ["Modest, respectful clothing.", "Swimsuits and shorts.", "Bright party hats."], "challenge"),
        ("A: What makes Son Doong Cave unique in the world?\nB: It has its own localized weather system, clouds, and an underground rainforest.", "Điểm độc nhất của Sơn Đoòng", "Its own weather and rainforest.", ["Its own weather and rainforest.", "It is painted yellow.", "Near the sea."], "challenge"),
        ("A: How do children celebrate the Mid-Autumn Festival in your village?\nB: We parade star lanterns, watch lion dances, and feast on mooncakes under the moon.", "Lễ rước đèn Trung Thu", "Parade lanterns and watch lion dances.", ["Parade lanterns and watch lion dances.", "We go to sleep early.", "We plant trees."], "challenge"),
        ("A: What makes Vietnamese Pho taste so rich and delicious?\nB: The broth is simmered slowly for hours with roasted spices, ginger, and beef bones.", "Bí quyết phở ngon", "Broth simmered slowly with spices.", ["Broth simmered slowly with spices.", "Lots of sugar.", "Cold water."], "challenge"),
        ("A: What is our responsibility as young cultural ambassadors?\nB: To study English diligently and proudly share Vietnam's heritage with the world.", "Trách nhiệm đại sứ văn hóa nhí", "Share Vietnam's heritage proudly.", ["Share Vietnam's heritage proudly.", "Just stay at home.", "Forget our traditions."], "challenge")
    ]
    for idx, (dialogue, topic_vi, correct, opts, diff) in enumerate(dialogue_raw, 1):
        q.append({
            "questionId": f"g4_dlg_{idx:02d}",
            "grade": 4,
            "gameType": "dialogue_builder",
            "topic": "Dialogue Flow & Conversational English",
            "difficulty": diff,
            "prompt": f"Complete the dialogue naturally: \n{dialogue.split('B:')[0]} B: ...",
            "promptVi": f"Hoàn thành đoạn hội thoại: {topic_vi}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Natural conversational response! '{correct}' fits the context smoothly.",
            "explanationVi": f"Phản hồi hội thoại tự nhiên! '{correct}' phù hợp hoàn hảo với ngữ cảnh.",
            "imageAsset": "💬",
            "audioPrompt": dialogue,
            "curriculumReference": "Global Success Grade 4 - Daily Dialogues & Social Communication",
            "metadata": {"dialogueText": dialogue, "topicVi": topic_vi}
        })

    # -------------------------------------------------------------
    # GAME 4: Listening Mission (30 items)
    # -------------------------------------------------------------
    mission_raw = [
        # Easy (10)
        ("Attention passengers! Flight VN123 to Da Nang is now boarding at Gate Number 4.", "Chuyến bay đi Đà Nẵng khởi hành ở cửa nào?", "Gate 4", ["Gate 4", "Gate 12", "Gate 2"], "easy"),
        ("Good morning students! Today's English storytelling contest begins at 8:30 AM in the school hall.", "Cuộc thi kể chuyện bắt đầu lúc mấy giờ?", "8:30 AM", ["8:30 AM", "9:00 AM", "7:30 AM"], "easy"),
        ("Welcome to the zoo! Please remember that feeding the monkeys is not allowed.", "Không được cho con vật nào ăn?", "Monkeys", ["Monkeys", "Birds", "Elephants"], "easy"),
        ("Look at the weather forecast: Today will be bright, sunny, and warm with gentle breeze.", "Thời tiết hôm nay thế nào?", "Bright and sunny", ["Bright and sunny", "Rainy and cold", "Snowy"], "easy"),
        ("Hello Nam! Don't forget to bring your colored pencils and drawing paper tomorrow.", "Nam cần mang dụng cụ gì ngày mai?", "Colored pencils", ["Colored pencils", "Ruler", "Compass"], "easy"),
        ("The library will be closed this Friday afternoon for book cleaning.", "Thư viện đóng cửa vào buổi nào?", "Friday afternoon", ["Friday afternoon", "Monday morning", "Sunday"], "easy"),
        ("Tomorrow we are planting fifty green young trees in the school garden.", "Học sinh sẽ trồng bao nhiêu cây?", "Fifty trees", ["Fifty trees", "Five trees", "Fifteen trees"], "easy"),
        ("Hi Mai! Please lend me your English dictionary for the homework tonight.", "Mai được nhờ cho mượn đồ gì?", "English dictionary", ["English dictionary", "Notebook", "Pen"], "easy"),
        ("The school bus arrives at the main gate at 6:45 every morning.", "Xe buýt trường đến lúc mấy giờ?", "6:45 AM", ["6:45 AM", "7:15 AM", "6:00 AM"], "easy"),
        ("Our swimming lesson will take place in the outdoor pool on Wednesday.", "Tiết học bơi diễn ra vào thứ mấy?", "Wednesday", ["Wednesday", "Tuesday", "Thursday"], "easy"),
        # Medium (10)
        ("Welcome to the Vietnam National History Museum! The royal bronze drum exhibition is on the second floor.", "Triển lãm trống đồng ở tầng mấy?", "Second floor", ["Second floor", "First floor", "Third floor"], "medium"),
        ("Today's lunch menu features warm beef Pho, fresh cucumber salad, and sweet watermelon slices.", "Món ăn chính của bữa trưa là gì?", "Beef Pho", ["Beef Pho", "Fried chicken", "Pizza"], "medium"),
        ("The boat tour around Ha Long Bay leaves the harbor at 9:00 AM and returns at 1:00 PM.", "Tour du thuyền kéo dài mấy tiếng?", "Four hours", ["Four hours", "Two hours", "Six hours"], "medium"),
        ("Please note that visitors must remove their shoes before entering the ancient temple hall.", "Du khách phải làm gì trước khi vào đền cổ?", "Remove shoes", ["Remove shoes", "Wear hats", "Turn off phone"], "medium"),
        ("In Da Lat, the morning temperature is sixteen degrees Celsius, so wear a warm cardigan.", "Nhiệt độ buổi sáng ở Đà Lạt là bao nhiêu?", "16 degrees Celsius", ["16 degrees Celsius", "25 degrees", "10 degrees"], "medium"),
        ("The train to Lao Cai and Sapa departs from Hanoi Central Railway Station at 10:00 PM tonight.", "Chuyến tàu đi Lào Cai xuất phát lúc mấy giờ?", "10:00 PM", ["10:00 PM", "8:00 PM", "6:00 PM"], "medium"),
        ("For our school project, group one will research traditional water puppetry.", "Nhóm một nghiên cứu chủ đề gì?", "Water puppetry", ["Water puppetry", "Silk weaving", "Ceramics"], "medium"),
        ("Attention hikers! Please stay on the marked forest trail to protect the rare orchids.", "Người đi bộ cần làm gì để bảo vệ hoa lan?", "Stay on marked trail", ["Stay on marked trail", "Pick flowers", "Run fast"], "medium"),
        ("Hoi An's lantern festival takes place on the fourteenth day of the lunar month.", "Lễ hội đèn lồng diễn ra vào ngày mấy âm lịch?", "14th lunar day", ["14th lunar day", "1st lunar day", "30th lunar day"], "medium"),
        ("The sports day has been rescheduled to next Saturday because of the heavy rain forecast.", "Ngày hội thể thao được dời sang ngày nào?", "Next Saturday", ["Next Saturday", "Tomorrow", "Next Sunday"], "medium"),
        # Challenge (10)
        ("Audio Mission 21: Son Doong Cave expedition requires participants to trek six kilometers through pristine rainforest before reaching the entrance.", "Người thám hiểm phải đi bộ bao nhiêu km?", "6 kilometers", ["6 kilometers", "16 kilometers", "2 kilometers"], "challenge"),
        ("Audio Mission 22: The ancient bell of Thien Mu Pagoda weighs two tons and was cast over three hundred years ago in 1710.", "Chuông chùa Thiên Mụ được đúc vào năm nào?", "1710", ["1710", "1910", "1810"], "challenge"),
        ("Audio Mission 23: The Cu Chi tunnel system spans more than two hundred and fifty kilometers of underground passages on three distinct levels.", "Địa đạo Củ Chi dài hơn bao nhiêu km?", "250 kilometers", ["250 kilometers", "150 kilometers", "50 kilometers"], "challenge"),
        ("Audio Mission 24: Traditional artisans in Bat Trang bake ceramic wares in kilns at temperatures exceeding one thousand two hundred degrees Celsius.", "Gốm Bát Tràng được nung ở nhiệt độ nào?", "Over 1,200 °C", ["Over 1,200 °C", "500 °C", "2,000 °C"], "challenge"),
        ("Audio Mission 25: The Red-crowned Crane arrives at Tram Chim National Park between December and May when water levels are low.", "Sếu đầu đỏ về Tràm Chim vào khoảng thời gian nào?", "December to May", ["December to May", "June to August", "September to November"], "challenge"),
        ("Audio Mission 26: Ban Gioc Waterfall is thirty meters high and three hundred meters wide, making it the widest waterfall in Vietnam.", "Thác Bản Giốc rộng bao nhiêu mét?", "300 meters wide", ["300 meters wide", "100 meters wide", "500 meters wide"], "challenge"),
        ("Audio Mission 27: The Dong Van Karst Plateau was officially recognized as a UNESCO Global Geopark in the year 2010.", "Cao nguyên đá Đồng Văn được UNESCO công nhận năm nào?", "2010", ["2010", "2000", "2020"], "challenge"),
        ("Audio Mission 28: A traditional set of Dan Da (lithophone) stone musical slabs was discovered in Binh Da, dating back more than three thousand years.", "Đàn đá Bình Đa có niên đại hơn bao nhiêu năm?", "Over 3,000 years", ["Over 3,000 years", "500 years", "1,000 years"], "challenge"),
        ("Audio Mission 29: Sapa's iconic rice terraces were carved by ethnic minorities over centuries to cultivate rice on steep mountain slopes.", "Ruộng bậc thang Sa Pa do ai kiến tạo?", "Ethnic minorities", ["Ethnic minorities", "Foreign tourists", "City workers"], "challenge"),
        ("Audio Mission 30: The Golden Bridge on Ba Na Hills is situated at an altitude of one thousand four hundred meters above sea level.", "Cầu Vàng Bà Nà nằm ở độ cao bao nhiêu?", "1,400 meters", ["1,400 meters", "500 meters", "3,000 meters"], "challenge")
    ]
    for idx, (announcement, question_vi, correct, opts, diff) in enumerate(mission_raw, 1):
        q.append({
            "questionId": f"g4_mis_{idx:02d}",
            "grade": 4,
            "gameType": "listening_mission",
            "topic": "Radio Announcements & Listening Comprehension",
            "difficulty": diff,
            "prompt": f"Listen to the announcement: '{announcement}'\nQuestion: {question_vi}",
            "promptVi": f"Nghe thông báo và trả lời: {question_vi}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Mission accomplished! The announcement confirms: {correct}.",
            "explanationVi": f"Hoàn thành nhiệm vụ! Thông báo xác nhận: {correct}.",
            "imageAsset": "🎧",
            "audioPrompt": announcement,
            "curriculumReference": "Global Success Grade 4 - Listening Comprehension Missions",
            "metadata": {"announcement": announcement, "question": question_vi}
        })

    # -------------------------------------------------------------
    # GAME 5: Vietnam Culture Challenge (30 items)
    # -------------------------------------------------------------
    challenge_raw = [
        # Easy (10)
        ("What traditional hat made of palm leaves is worn by Vietnamese schoolgirls and farmers?", "Nón lá truyền thống", "Conical hat (Non la)", ["Conical hat (Non la)", "Baseball cap", "Beret"], "easy"),
        ("What do Vietnamese people eat during the Lunar New Year (Tet) for good fortune?", "Món ăn truyền thống ngày Tết", "Square sticky rice cake (Banh chung)", ["Square sticky rice cake (Banh chung)", "Pizza", "Spaghetti"], "easy"),
        ("Which animal is the traditional companion of Vietnamese farmers in the rice fields?", "Con vật gắn bó với nhà nông trên đồng ruộng", "Water buffalo", ["Water buffalo", "Camel", "Kangaroo"], "easy"),
        ("What is the traditional long silk tunic with two flaps worn on special occasions?", "Trang phục áo dài truyền thống", "Ao Dai", ["Ao Dai", "Kimono", "Sari"], "easy"),
        ("Which festival on the fifteenth day of the eighth lunar month celebrates children?", "Tết Trung Thu cho thiếu nhi", "Mid-Autumn Festival", ["Mid-Autumn Festival", "Halloween", "Christmas"], "easy"),
        ("What hot noodle soup with aromatic beef broth is recognized as a national dish?", "Món quốc hồn quốc túy", "Pho", ["Pho", "Banh Mi", "Spring Roll"], "easy"),
        ("What musical puppets dance on the water while puppeteers hide behind a screen?", "Nghệ thuật múa rối nước", "Water puppets", ["Water puppets", "Shadow dolls", "Clay statues"], "easy"),
        ("Which famous body of water in Hanoi is associated with the legend of the Magic Sword?", "Hồ Hoàn Kiếm linh thiêng", "Hoan Kiem Lake", ["Hoan Kiem Lake", "West Lake", "Truc Bach Lake"], "easy"),
        ("Which famous bay has nearly two thousand limestone karst islands rising from the sea?", "Kỳ quan Vịnh Hạ Long", "Ha Long Bay", ["Ha Long Bay", "Red River", "Nha Trang Bay"], "easy"),
        ("Which lantern-lit town in central Vietnam has yellow-painted ancient shophouses?", "Đô thị cổ Hội An", "Hoi An", ["Hoi An", "Da Nang", "Hue"], "easy"),
        # Medium (10)
        ("What traditional instrument has only one string and produces expressive pitch-bending melodies?", "Đàn bầu độc huyền cầm", "Dan Bau", ["Dan Bau", "Dan Tranh", "Guitar"], "medium"),
        ("Which ancient village on the outskirts of Hanoi is famous for ceramics for 700 years?", "Làng nghề gốm Bát Tràng", "Bat Trang", ["Bat Trang", "Van Phuc", "Dong Ho"], "medium"),
        ("Which ancient village near Hanoi is famous for soft, shimmering mulberry silk?", "Làng nghề lụa Vạn Phúc", "Van Phuc", ["Van Phuc", "Bat Trang", "Tho Ha"], "medium"),
        ("What folk paintings printed on Do paper often feature fat pigs, roosters, and folk tales?", "Tranh dân gian Đông Hồ", "Dong Ho paintings", ["Dong Ho paintings", "Modern posters", "Oil portraits"], "medium"),
        ("Which UNESCO biosphere reserve in Can Gio features mangrove roots and playful monkeys?", "Rừng ngập mặn Cần Giờ", "Can Gio Mangrove", ["Can Gio Mangrove", "Cat Tien", "Ba Be"], "medium"),
        ("Which bridge in Da Nang has two giant stone hands supporting a gold pedestrian walkway?", "Cầu Vàng Bà Nà", "Golden Bridge", ["Golden Bridge", "Dragon Bridge", "Han River Bridge"], "medium"),
        ("Which highest mountain in Indochina stands at an elevation of 3,143 meters?", "Đỉnh Fansipan nóc nhà Đông Dương", "Fansipan", ["Fansipan", "Ba Den", "Ngoc Linh"], "medium"),
        ("What is the name of the ancient Champa Hindu temple complex in Quang Nam?", "Thánh địa Mỹ Sơn", "My Son Sanctuary", ["My Son Sanctuary", "Po Nagar", "Angkor Wat"], "medium"),
        ("Which historical wharf in Ho Chi Minh City commemorates the journey of President Ho Chi Minh?", "Bến Nhà Rồng", "Nha Rong Wharf", ["Nha Rong Wharf", "Ben Thanh", "Cu Chi"], "medium"),
        ("Which traditional musical ensemble in the Central Highlands is recognized by UNESCO?", "Không gian văn hóa Cồng chiêng Tây Nguyên", "Space of Gong Culture", ["Space of Gong Culture", "Chau Van", "Quan Ho"], "medium"),
        # Challenge (10)
        ("Which mountain plateau in Ha Giang is renowned for dramatic limestone peaks and buckwheat blossoms?", "Cao nguyên đá Đồng Văn", "Dong Van Karst Plateau", ["Dong Van Karst Plateau", "Moc Chau", "Lam Dong"], "challenge"),
        ("What is the world's largest natural cave chamber, discovered in Quang Binh in 1990?", "Hang Sơn Đoòng kỳ vĩ", "Son Doong Cave", ["Son Doong Cave", "Phong Nha", "Paradise Cave"], "challenge"),
        ("Which traditional folk singing style from Bac Ninh features 'lien anh' and 'lien chi' duets?", "Dân ca Quan họ Bắc Ninh", "Quan Ho folk singing", ["Quan Ho folk singing", "Ca Tru", "Cheo"], "challenge"),
        ("Which ancient hydraulic system in Ninh Binh connects limestone peaks with scenic sampan waterways?", "Quần thể danh thắng Tràng An", "Trang An Scenic Landscape", ["Trang An Scenic Landscape", "Ha Long", "Tam Dao"], "challenge"),
        ("What ancient bronze drum symbolizes the ingenuity and metallurgical skill of early Vietnamese civilization?", "Trống đồng Đông Sơn", "Dong Son Bronze Drum", ["Dong Son Bronze Drum", "Wooden Drum", "Clay Drum"], "challenge"),
        ("Which epic pass through the Annamite Range separates Da Nang and Thua Thien Hue?", "Đèo Hải Vân hùng vĩ", "Hai Van Pass", ["Hai Van Pass", "Ma Pi Leng", "Pha Din"], "challenge"),
        ("Which volcanic island off the coast of Quang Ngai is nicknamed the 'Kingdom of Garlic'?", "Huyện đảo Lý Sơn", "Ly Son Island", ["Ly Son Island", "Phu Quoc", "Con Dao"], "challenge"),
        ("What sweet soup is traditional in Hue royal cuisine, made of lotus seeds and longan fruit?", "Chè hạt sen long nhãn Huế", "Lotus seed longan sweet soup", ["Lotus seed longan sweet soup", "Tofu pudding", "Ice cream"], "challenge"),
        ("Which ethnic minority in northern Vietnam is famous for indigo-dyed hemp clothing and batik patterns?", "Đồng bào H'Mông với trang phục chàm", "H'Mong ethnic group", ["H'Mong ethnic group", "Kinh", "Tay"], "challenge"),
        ("What is the national motto of the Socialist Republic of Vietnam?", "Tiêu ngữ của nước Việt Nam", "Independence - Freedom - Happiness", ["Independence - Freedom - Happiness", "Peace - Love - Hope", "Unity - Strength - Joy"], "challenge")
    ]
    for idx, (question, q_vi, correct, opts, diff) in enumerate(challenge_raw, 1):
        q.append({
            "questionId": f"g4_clc_{idx:02d}",
            "grade": 4,
            "gameType": "culture_challenge",
            "topic": "Advanced Cultural Heritage & Traditions",
            "difficulty": diff,
            "prompt": question,
            "promptVi": q_vi,
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Outstanding cultural knowledge! '{correct}' ({q_vi}) is correct.",
            "explanationVi": f"Hiểu biết văn hóa tuyệt vời! '{correct}' ({q_vi}) hoàn toàn chính xác.",
            "imageAsset": "🇻🇳",
            "audioPrompt": question,
            "curriculumReference": "Global Success Grade 4 - National Culture & Heritage",
            "metadata": {"questionVi": q_vi, "answer": correct}
        })

    return q

print("Loaded Grade 4 question builder.")
