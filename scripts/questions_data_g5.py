# scripts/questions_data_g5.py
# Grade 5 - English Champion (A1 with optional A2 extension)
# 5 games x 30 questions = 150 questions

def get_grade5_questions():
    q = []
    
    # -------------------------------------------------------------
    # GAME 1: English Champion Quiz Show (30 items)
    # -------------------------------------------------------------
    champion_raw = [
        # Easy (10)
        ("Which auxiliary verb is used for questions in the simple past tense?", "Trợ động từ nào dùng trong câu hỏi thì quá khứ đơn?", "Did", ["Did", "Do", "Does"], "easy"),
        ("What is the plural form of the noun 'child'?", "Dạng số nhiều của danh từ 'child' là gì?", "Children", ["Children", "Childs", "Childes"], "easy"),
        ("Which preposition is used for specific dates like 'the second of September'?", "Giới từ nào dùng cho ngày cụ thể như 2 tháng 9?", "On", ["On", "In", "At"], "easy"),
        ("Choose the correct comparative: 'Fansipan is _______ than Ba Den Mountain.'", "Chọn dạng so sánh hơn của từ 'tall'", "taller", ["taller", "tallest", "more tall"], "easy"),
        ("What is the past form of the irregular verb 'go'?", "Dạng quá khứ của động từ 'go' là gì?", "Went", ["Went", "Goed", "Gone"], "easy"),
        ("Which pronoun replaces 'my brother and I' as the subject of a sentence?", "Đại từ nào thay thế cho 'anh trai tôi và tôi'?", "We", ["We", "They", "Us"], "easy"),
        ("Which word describes the climate of southern Vietnam with dry and rainy seasons?", "Từ nào chỉ khí hậu nhiệt đới?", "Tropical", ["Tropical", "Polar", "Arctic"], "easy"),
        ("Choose the correct article: 'We visited _______ ancient pagoda in Hue.'", "Chọn mạo từ thích hợp trước 'ancient pagoda'", "an", ["an", "a", "the"], "easy"),
        ("What is the opposite meaning of the adjective 'noisy'?", "Từ trái nghĩa với từ 'noisy' (ồn ào) là gì?", "Quiet", ["Quiet", "Busy", "Loud"], "easy"),
        ("Choose the correct question word: '_______ is the biggest cave in Vietnam?'", "Từ để hỏi địa điểm nào thích hợp?", "Where", ["Where", "When", "Who"], "easy"),
        # Medium (10)
        ("Which sentence demonstrates correct subject-verb agreement?", "Câu nào chia động từ đúng với chủ ngữ?", "She always practices English every evening.", ["She always practices English every evening.", "She always practice English every evening.", "She always practicing English every evening."], "medium"),
        ("Choose the correct modal verb for obligation: 'Students _______ wear their school uniforms on Mondays.'", "Động từ khuyết thiếu chỉ nghĩa vụ bắt buộc", "must", ["must", "might", "can"], "medium"),
        ("What is the superlative form of the adjective 'good'?", "Dạng so sánh nhất của tính từ 'good' là gì?", "The best", ["The best", "The goodest", "The better"], "medium"),
        ("Which tense is used in: 'While we were cruising in Ha Long Bay, it began to rain'?", "Thì nào được sử dụng trong mệnh đề thứ nhất?", "Past Continuous", ["Past Continuous", "Present Simple", "Future Simple"], "medium"),
        ("Select the correct conjunction: 'We wanted to climb the mountain peak, _______ the weather was too stormy.'", "Liên từ chỉ sự tương phản", "but", ["but", "so", "and"], "medium"),
        ("What does the idiom 'piece of cake' mean in English?", "Thành ngữ 'piece of cake' có nghĩa là gì?", "Very easy", ["Very easy", "Very sweet", "Very difficult"], "medium"),
        ("Choose the correct tag question: 'You visited Hoi An Ancient Town last year, _______?'", "Câu hỏi đuôi cho câu khẳng định thì quá khứ đơn", "didn't you", ["didn't you", "did you", "haven't you"], "medium"),
        ("Which word is an adverb of frequency: 'always', 'happy', 'quick'?", "Từ nào là trạng từ chỉ tần suất?", "always", ["always", "happy", "quick"], "medium"),
        ("Choose the correct possessive pronoun: 'This English notebook belongs to Nam. It is _______.'", "Đại từ sở hữu thay thế cho 'Nam's notebook'", "his", ["his", "him", "he"], "medium"),
        ("Which prefix turns the word 'patient' into its opposite meaning?", "Tiền tố nào tạo từ trái nghĩa của 'patient'?", "im- (impatient)", ["im- (impatient)", "un- (unpatient)", "dis- (dispatient)"], "medium"),
        # Challenge (10)
        ("Identify the correct conditional sentence (Type 1): 'If it rains tomorrow, _______.'", "Câu điều kiện loại 1 hoàn chỉnh", "we will stay indoors and read books.", ["we will stay indoors and read books.", "we stayed indoors and read books.", "we would stay indoors."], "challenge"),
        ("Which relative pronoun correctly joins: 'The artisan _______ crafted this vase lives in Bat Trang'?", "Đại từ quan hệ chỉ người làm chủ ngữ", "who", ["who", "which", "where"], "challenge"),
        ("Choose the correct passive voice: 'Nguyen Du wrote the masterpiece Tale of Kieu.'", "Câu bị động chính xác", "The Tale of Kieu was written by Nguyen Du.", ["The Tale of Kieu was written by Nguyen Du.", "The Tale of Kieu is written by Nguyen Du.", "The Tale of Kieu wrote by Nguyen Du."], "challenge"),
        ("What is the meaning of the adjective 'magnificent' describing a natural landscape?", "Nghĩa của tính từ 'magnificent' khi mô tả phong cảnh", "Extremely beautiful and impressive", ["Extremely beautiful and impressive", "Small and delicate", "Ordinary and dull"], "challenge"),
        ("Choose the correct reported speech: 'Mai said: \"I love learning English.\"'", "Câu gián tiếp chính xác", "Mai said that she loved learning English.", ["Mai said that she loved learning English.", "Mai said that I love learning English.", "Mai says she loved learning English."], "challenge"),
        ("Which word correctly functions as both a noun and a verb?", "Từ nào vừa là danh từ vừa là động từ?", "Travel", ["Travel", "Beautiful", "Quickly"], "challenge"),
        ("What does 'sustainable tourism' emphasize for young travelers in Vietnam?", "Khái niệm 'du lịch bền vững' nhấn mạnh điều gì?", "Protecting nature and respecting local cultures", ["Protecting nature and respecting local cultures", "Buying as much plastic as possible", "Traveling as fast as possible"], "challenge"),
        ("Select the correct phrasal verb: 'Don't forget to _______ your shoes before entering the temple.'", "Cụm động từ chỉ hành động cởi giày", "take off", ["take off", "put on", "look for"], "challenge"),
        ("Choose the correct sentence with inversion for emphasis: 'Never before _______ such a stunning sunset over Ha Long Bay.'", "Cấu trúc đảo ngữ nhấn mạnh", "have I seen", ["have I seen", "I have seen", "I saw"], "challenge"),
        ("What qualities define a true VietDiscovery English Champion?", "Phẩm chất của một nhà vô địch tiếng Anh VietDiscovery", "Confidence, cultural pride, and lifelong curiosity", ["Confidence, cultural pride, and lifelong curiosity", "Only memorizing for tests", "Forgetting national traditions"], "challenge")
    ]
    for idx, (question, q_vi, correct, opts, diff) in enumerate(champion_raw, 1):
        q.append({
            "questionId": f"g5_chp_{idx:02d}",
            "grade": 5,
            "gameType": "champion_quiz",
            "topic": "Advanced Grammar & Language Mastery",
            "difficulty": diff,
            "prompt": question,
            "promptVi": q_vi,
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Champion answer! '{correct}' ({q_vi}) is grammatically and contextually correct.",
            "explanationVi": f"Câu trả lời của nhà vô địch! '{correct}' ({q_vi}) hoàn toàn chuẩn xác.",
            "imageAsset": "🏆",
            "audioPrompt": question,
            "curriculumReference": "Global Success Grade 5 - Grammar Champions & Syntax",
            "metadata": {"questionVi": q_vi, "answer": correct}
        })

    # -------------------------------------------------------------
    # GAME 2: Virtual Vietnam Tour Guide (30 items)
    # -------------------------------------------------------------
    tour_raw = [
        # Easy (10)
        ("Tourist: 'Excuse me, where can I buy some sweet traditional mooncakes?'", "Khách hỏi: 'Tôi có thể mua bánh trung thu truyền thống ở đâu?'", "You can buy them at bakeries on Hang Ma Street.", ["You can buy them at bakeries on Hang Ma Street.", "You can buy them at the pharmacy.", "In the library."], "easy"),
        ("Tourist: 'What is the best way to travel around Hoi An Ancient Town?'", "Khách hỏi: 'Cách tốt nhất để tham quan phố cổ Hội An là gì?'", "Riding a bicycle or walking peacefully on foot.", ["Riding a bicycle or walking peacefully on foot.", "By taking a big airplane.", "Driving a heavy truck."], "easy"),
        ("Tourist: 'What noodle dish should I definitely try in Hanoi?'", "Khách hỏi: 'Món mì nước nào nhất định phải thử ở Hà Nội?'", "You must try traditional beef or chicken Pho.", ["You must try traditional beef or chicken Pho.", "You should eat ice cream only.", "Spaghetti with tomato."], "easy"),
        ("Tourist: 'Why are there so many limestone islands in Ha Long Bay?'", "Khách hỏi: 'Vì sao Vịnh Hạ Long lại có nhiều đảo đá vôi như vậy?'", "They were formed by nature over millions of years.", ["They were formed by nature over millions of years.", "People built them last year.", "They floated from the ocean."], "easy"),
        ("Tourist: 'What do the two giant stone hands on the Golden Bridge symbolize?'", "Khách hỏi: 'Hai bàn tay đá nâng Cầu Vàng tượng trưng cho điều gì?'", "They symbolize the hands of the Mountain God.", ["They symbolize the hands of the Mountain God.", "They are holding a sword.", "They are building a ship."], "easy"),
        ("Tourist: 'Can I take photos inside the Imperial Citadel of Hue?'", "Khách hỏi: 'Tôi có thể chụp ảnh trong Đại Nội Huế không?'", "Yes, photography is welcome in the courtyard areas.", ["Yes, photography is welcome in the courtyard areas.", "No, cameras are forbidden everywhere.", "Only at night."], "easy"),
        ("Tourist: 'What does the conical hat protect people from?'", "Khách hỏi: 'Nón lá che chắn cho người đội khỏi điều gì?'", "It shields from both bright tropical sunshine and rain.", ["It shields from both bright tropical sunshine and rain.", "Only from cold winter snow.", "From flying birds."], "easy"),
        ("Tourist: 'What is the famous clock tower in Ho Chi Minh City?'", "Khách hỏi: 'Tháp đồng hồ nổi tiếng ở TP.HCM là gì?'", "That is the iconic southern gate of Ben Thanh Market.", ["That is the iconic southern gate of Ben Thanh Market.", "That is Hanoi Opera House.", "That is Long Bien Bridge."], "easy"),
        ("Tourist: 'Where is the highest cable car in Vietnam located?'", "Khách hỏi: 'Tuyến cáp treo lên đỉnh núi cao nhất nằm ở đâu?'", "It takes visitors to the summit of Fansipan in Sapa.", ["It takes visitors to the summit of Fansipan in Sapa.", "In Da Nang city center.", "In Hue city."], "easy"),
        ("Tourist: 'What fruit is hanging on the bamboo poles at Cai Rang market?'", "Khách hỏi: 'Người ta treo trái cây gì trên cây bẹo ở chợ nổi?'", "Vendors hang the exact fruit they are selling from their boat.", ["Vendors hang the exact fruit they are selling from their boat.", "Just colourful decorations.", "Signs for fuel."], "easy"),
        # Medium (10)
        ("Tourist: 'Why do local people release paper lanterns onto the river in Hoi An?'", "Khách hỏi: 'Tại sao người ta thả đèn hoa đăng trên sông Hoài?'", "They pray for peace, health, and good luck for their family.", ["They pray for peace, health, and good luck for their family.", "They are trying to catch fish.", "It is a swimming race."], "medium"),
        ("Tourist: 'How deep is Son Doong Cave and can beginners enter easily?'", "Khách hỏi: 'Hang Sơn Đoòng sâu bao nhiêu và người mới có dễ vào không?'", "It requires specialized hiking gear and professional guides.", ["It requires specialized hiking gear and professional guides.", "Anyone can walk in without a guide.", "It is only five meters deep."], "medium"),
        ("Tourist: 'What makes Bat Trang ceramic pottery so famous for centuries?'", "Khách hỏi: 'Điều gì làm gốm Bát Tràng nổi tiếng hàng thế kỷ?'", "Artisans hand-paint traditional motifs with unique natural glazes.", ["Artisans hand-paint traditional motifs with unique natural glazes.", "They use plastic molds from factories.", "They import everything."], "medium"),
        ("Tourist: 'What is the legend behind the naming of Hoan Kiem Lake?'", "Khách hỏi: 'Truyền thuyết tên gọi Hồ Hoàn Kiếm là gì?'", "King Le Loi returned the magical sword to the Golden Turtle.", ["King Le Loi returned the magical sword to the Golden Turtle.", "A dragon drank all the water.", "A fisherman found gold."], "medium"),
        ("Tourist: 'Why is Hue royal court music recognized by UNESCO?'", "Khách hỏi: 'Vì sao Nhã nhạc cung đình Huế được UNESCO vinh danh?'", "It preserves ancient ceremonial royal melodies and orchestra instruments.", ["It preserves ancient ceremonial royal melodies and orchestra instruments.", "It is modern rock music.", "It was created yesterday."], "medium"),
        ("Tourist: 'What should we wear when visiting sacred temples in Vietnam?'", "Khách hỏi: 'Nên mặc trang phục gì khi thăm chùa chiền linh thiêng?'", "Modest attire covering your shoulders and knees out of respect.", ["Modest attire covering your shoulders and knees out of respect.", "Beach swimwear and flip flops.", "Loud party costumes."], "medium"),
        ("Tourist: 'What are the Cu Chi tunnels and how long are they?'", "Khách hỏi: 'Địa đạo Củ Chi là gì và dài bao nhiêu?'", "They form an underground network over 250 kilometers long.", ["They form an underground network over 250 kilometers long.", "A shallow ditch near the river.", "An underwater tunnel under the sea."], "medium"),
        ("Tourist: 'How do farmers grow rice on steep hills in Sapa?'", "Khách hỏi: 'Nông dân trồng lúa thế nào trên sườn đồi dốc Sa Pa?'", "They construct stepped terraces that trap mountain rainwater.", ["They construct stepped terraces that trap mountain rainwater.", "They plant trees upside down.", "They only grow rice in greenhouses."], "medium"),
        ("Tourist: 'What is the special ingredient in Vietnamese egg coffee?'", "Khách hỏi: 'Thành phần đặc biệt trong cà phê trứng Hà Nội là gì?'", "Whipped egg yolk with condensed milk over robust coffee.", ["Whipped egg yolk with condensed milk over robust coffee.", "Boiled scrambled eggs on tea.", "Cold fruit juice with eggs."], "medium"),
        ("Tourist: 'What does the Ao Dai symbolize in Vietnamese culture?'", "Khách hỏi: 'Áo dài tượng trưng cho điều gì trong văn hóa Việt Nam?'", "Elegance, national identity, and cultural grace.", ["Elegance, national identity, and cultural grace.", "Military strength.", "Modern industrial work."], "medium"),
        # Challenge (10)
        ("Tourist: 'Can you explain the historical significance of the Dien Bien Phu victory?'", "Khách hỏi: 'Ý nghĩa lịch sử của chiến thắng Điện Biên Phủ là gì?'", "It demonstrated national determination and ended colonial rule in 1954.", ["It demonstrated national determination and ended colonial rule in 1954.", "It was an ordinary sports game.", "It was a commercial treaty."], "challenge"),
        ("Tourist: 'What is the ecological importance of Can Gio Biosphere Reserve?'", "Khách hỏi: 'Tầm quan trọng sinh thái của rừng ngập mặn Cần Giờ?'", "It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.", ["It shields Ho Chi Minh City from storm surges and cleans wastewater naturally.", "It provides space for skyscrapers.", "It produces plastic products."], "challenge"),
        ("Tourist: 'Why are Dong Ho folk woodcut prints so culturally cherished?'", "Khách hỏi: 'Vì sao tranh khắc gỗ Đông Hồ lại được trân trọng?'", "They depict peaceful rural life, folk morality, and wishes for abundance.", ["They depict peaceful rural life, folk morality, and wishes for abundance.", "They are imported from overseas.", "They are printed by computer."], "challenge"),
        ("Tourist: 'How does the Mekong Delta contribute to national and global food security?'", "Khách hỏi: 'Đồng bằng sông Cửu Long đóng góp gì cho an ninh lương thực?'", "It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.", ["It produces over fifty percent of Vietnam's rice and ninety percent of rice exports.", "It only produces timber.", "It imports food from abroad."], "challenge"),
        ("Tourist: 'What makes the Tu San Canyon in Ha Giang geographically extraordinary?'", "Khách hỏi: 'Hẻm vực Tu San ở Hà Giang có gì đặc biệt về địa chất?'", "It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.", ["It is Southeast Asia's deepest canyon with cliff walls rising over 700 meters.", "It is completely flat.", "It is located underwater."], "challenge"),
        ("Tourist: 'What is the message behind the ancient legend of Banh Chung and Banh Giay?'", "Khách hỏi: 'Thông điệp của sự tích Bánh chưng bánh giầy là gì?'", "Filial piety, gratitude to nature, and the balance of Earth and Sky.", ["Filial piety, gratitude to nature, and the balance of Earth and Sky.", "Only that square cakes are tasty.", "How to sell cakes in markets."], "challenge"),
        ("Tourist: 'Why do so many ethnic groups gather at northern highland love markets?'", "Khách hỏi: 'Vì sao các dân tộc tụ họp ở chợ phiên vùng cao?'", "To trade handicrafts, play traditional panpipes, and meet friends.", ["To trade handicrafts, play traditional panpipes, and meet friends.", "To watch television.", "To attend flight boarding."], "challenge"),
        ("Tourist: 'How do Cham towers maintain their structural stability without visible mortar?'", "Khách hỏi: 'Các tháp Chăm đứng vững thế nào mà không thấy vữa liên kết?'", "Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.", ["Ancient builders ground resin and brick powder to fuse clay bricks seamlessly.", "They used modern steel beams.", "They used chemical cement."], "challenge"),
        ("Tourist: 'What makes Vietnam an inspiring destination for sustainable eco-tourism?'", "Khách hỏi: 'Điều gì biến Việt Nam thành điểm đến sinh thái truyền cảm hứng?'", "Rich biodiversity, welcoming people, and living cultural traditions.", ["Rich biodiversity, welcoming people, and living cultural traditions.", "Only shopping malls.", "Desert highways."], "challenge"),
        ("Tourist: 'Thank you for being such an extraordinary young tour guide!'", "Khách khen ngợi: 'Cảm ơn em đã là một hướng dẫn viên nhí tuyệt vời!'", "You are very welcome! Welcome to Vietnam, the land of wonders!", ["You are very welcome! Welcome to Vietnam, the land of wonders!", "Goodbye forever.", "Give me your bag."], "challenge")
    ]
    for idx, (tourist_q, q_vi, correct, opts, diff) in enumerate(tour_raw, 1):
        q.append({
            "questionId": f"g5_tour_{idx:02d}",
            "grade": 5,
            "gameType": "tour_guide",
            "topic": "Tour Guide Situational English",
            "difficulty": diff,
            "prompt": f"{tourist_q}\nHow should the Tour Guide respond professionally?",
            "promptVi": f"{q_vi}\nHướng dẫn viên nên trả lời khách thế nào cho chuyên nghiệp và hiếu khách?",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Professional and culturally accurate! '{correct}' guides the tourist with courtesy and pride.",
            "explanationVi": f"Chuyên nghiệp và chuẩn xác! '{correct}' hướng dẫn du khách với sự mến khách và niềm tự hào dân tộc.",
            "imageAsset": "🧭",
            "audioPrompt": tourist_q,
            "curriculumReference": "Global Success Grade 5 - Situational English & Tourist Dialogues",
            "metadata": {"touristQuestion": tourist_q, "guideAnswer": correct}
        })

    # -------------------------------------------------------------
    # GAME 3: Reading Detective (30 items)
    # -------------------------------------------------------------
    reading_raw = [
        # Easy (10)
        ("Passage: Thang Long Imperial Citadel in Hanoi was the political center of Vietnam for eight centuries. Emperor Ly Thai To moved the capital here in 1010 after seeing a golden dragon rising into the sky.\nQuestion: In what year was the capital moved to Thang Long?", "Năm nào Lý Thái Tổ dời đô về Thăng Long?", "1010", ["1010", "1210", "1910"], "easy"),
        ("Passage: Mount Fansipan, located in the Hoang Lien Son range, stands at 3,143 meters above sea level. It is lovingly nicknamed the 'Roof of Indochina' because it is the highest peak in Vietnam, Laos, and Cambodia.\nQuestion: What is Fansipan's nickname?", "Biệt danh của đỉnh Fansipan là gì?", "Roof of Indochina", ["Roof of Indochina", "Pearl of the Sea", "King of Caves"], "easy"),
        ("Passage: Ha Long Bay has nearly two thousand limestone islets scattered across emerald waters. In 1994, UNESCO officially recognized Ha Long Bay as a World Natural Heritage Site for its outstanding geological value.\nQuestion: What year was Ha Long Bay recognized by UNESCO?", "Năm nào Vịnh Hạ Long được UNESCO công nhận?", "1994", ["1994", "2004", "1984"], "easy"),
        ("Passage: Hoi An was a major Southeast Asian trading port from the 15th to the 19th century. Merchants from Japan, China, Portugal, and the Netherlands sailed here to trade spices, ceramics, and silk.\nQuestion: What goods were traded in ancient Hoi An?", "Hàng hóa nào được giao thương ở Hội An cổ?", "Spices, ceramics, and silk", ["Spices, ceramics, and silk", "Modern cars and planes", "Computers and phones"], "easy"),
        ("Passage: The Perfume River gently meanders through the city of Hue. In autumn, flowers from surrounding orchards fall into the river water, giving the stream its famous poetic fragrance.\nQuestion: Why is the river named Perfume River?", "Tại sao dòng sông lại có tên là sông Hương?", "Flowers fall into the water giving it a sweet fragrance", ["Flowers fall into the water giving it a sweet fragrance", "People pour perfume into it", "It is near a perfume shop"], "easy"),
        ("Passage: Ben Thanh Market was constructed in 1912 in Ho Chi Minh City. Its iconic south gate with a large three-sided clock tower is recognized as one of the most famous city symbols.\nQuestion: When was Ben Thanh Market constructed?", "Chợ Bến Thành được xây dựng vào năm nào?", "1912", ["1912", "1812", "2012"], "easy"),
        ("Passage: Da Nang Golden Bridge is a 150-meter-long pedestrian walkway built 1,400 meters up on the Ba Na Hills. Two colossal stone hands lift the golden path through the mountain mist.\nQuestion: How long is the Golden Bridge walkway?", "Lối đi bộ Cầu Vàng dài bao nhiêu mét?", "150 meters", ["150 meters", "500 meters", "1,000 meters"], "easy"),
        ("Passage: The Mekong River originates in the Tibetan Plateau and flows through six countries before dividing into nine branches in southern Vietnam, nourishing the fertile delta.\nQuestion: How many branches does the Mekong divide into in Vietnam?", "Sông Mê Kông chia thành mấy nhánh ở Nam Bộ?", "Nine branches", ["Nine branches", "Two branches", "Five branches"], "easy"),
        ("Passage: One Pillar Pagoda was designed by King Ly Thai Tong in 1049. The wooden temple stands on a single stone pillar rising from a lotus pond, symbolizing purity and enlightenment.\nQuestion: What flower inspired the design of the One Pillar Pagoda?", "Loài hoa nào truyền cảm hứng cho kiến trúc Chùa Một Cột?", "Lotus flower", ["Lotus flower", "Rose", "Sunflower"], "easy"),
        ("Passage: Traditional water puppetry was invented by rice farmers in the Red River Delta around the 11th century during seasonal flood times to celebrate harvest festivals.\nQuestion: Where did water puppetry originate?", "Nghệ thuật múa rối nước bắt nguồn từ đâu?", "Red River Delta", ["Red River Delta", "Mekong Delta", "Central Highlands"], "easy"),
        # Medium (10)
        ("Passage: Son Doong Cave in Quang Binh is so vast that it possesses its own localized weather system, clouds, and an underground rainforest called the 'Garden of Edam' nourished by skylights.\nQuestion: What special feature exists inside Son Doong Cave?", "Đặc điểm kỳ vĩ nào tồn tại bên trong hang Sơn Đoòng?", "Its own localized weather and rainforest", ["Its own localized weather and rainforest", "A large commercial airport", "A modern railway station"], "medium"),
        ("Passage: The Imperial Citadel of Hue was built according to ancient geomancy and the natural elements of the Perfume River and Mount Ngu Binh, serving as the political capital for 143 years.\nQuestion: How many years did Hue serve as the royal capital?", "Huế từng là kinh đô trong bao nhiêu năm?", "143 years", ["143 years", "50 years", "300 years"], "medium"),
        ("Passage: Bat Trang ceramic village has maintained pottery kilns along the Red River since the Ly Dynasty. Artisans use white clay and traditional glaze recipes passed down through familial generations.\nQuestion: Along which river is Bat Trang village located?", "Làng gốm Bát Tràng tọa lạc bên bờ dòng sông nào?", "Red River", ["Red River", "Perfume River", "Han River"], "medium"),
        ("Passage: Cu Chi Tunnels were hand-dug with simple picks and baskets. The multi-tiered network contained secret kitchens with smoke-diffusing chimneys called Hoang Cam stoves.\nQuestion: What was the purpose of Hoang Cam stoves?", "Bếp Hoàng Cầm có tác dụng đặc biệt gì?", "Diffusing smoke underground to avoid detection", ["Diffusing smoke underground to avoid detection", "Baking sweet French pastries", "Warming swimming pools"], "medium"),
        ("Passage: Sapa's picturesque rice terraces in Muong Hoa Valley reflect green in spring and radiant gold during the autumn harvest season, attracting photographers from every continent.\nQuestion: When do the terraces turn radiant gold?", "Ruộng bậc thang Mường Hoa chuyển sang màu vàng óng vào mùa nào?", "During the autumn harvest", ["During the autumn harvest", "In the winter freeze", "In the early spring"], "medium"),
        ("Passage: Da Lat was established as a highland resort in 1893 by Dr. Alexandre Yersin. Its cool elevation at 1,500 meters earned it the affectionate title 'The City of Eternal Spring'.\nQuestion: Who founded Da Lat as a mountain station in 1893?", "Ai là người khám phá và đề xuất xây dựng Đà Lạt năm 1893?", "Dr. Alexandre Yersin", ["Dr. Alexandre Yersin", "King Le Loi", "Emperor Bao Dai"], "medium"),
        ("Passage: The Dong Son Bronze Drum was crafted during the Bronze Age, adorned with geometric rings, flying hornbill birds, deer, and scenes of community boat racing.\nQuestion: Which ancient age produced the Dong Son bronze drums?", "Trống đồng Đông Sơn được chế tác trong thời kỳ nào?", "The Bronze Age", ["The Bronze Age", "The Plastic Age", "The Space Age"], "medium"),
        ("Passage: Phong Nha Cave contains the longest subterranean river in the world, with spectacular dry and wet chambers illuminated by natural mineral hues.\nQuestion: What remarkable world record is associated with Phong Nha?", "Kỷ lục thế giới nào gắn liền với động Phong Nha?", "Longest subterranean river", ["Longest subterranean river", "Highest waterfall", "Deepest ocean trench"], "medium"),
        ("Passage: Ban Gioc Waterfall on the Quay Son River has three tiers separated by limestone boulders. During sunny mornings, mists create shimmering rainbows over the cascading waters.\nQuestion: On which river is Ban Gioc Waterfall situated?", "Thác Bản Giốc nằm trên dòng sông nào?", "Quay Son River", ["Quay Son River", "Red River", "Mekong River"], "medium"),
        ("Passage: Trang An Eco-tourism Complex in Ninh Binh features vertical karst towers rising from rice paddies, traversed by rowing sampans guided by local village women.\nQuestion: How do visitors journey through the Trang An water caves?", "Du khách di chuyển tham quan các hang nước Tràng An bằng phương tiện gì?", "By rowing sampans", ["By rowing sampans", "By high-speed motorboats", "By helicopters"], "medium"),
        # Challenge (10)
        ("Passage: The UNESCO-recognized Space of Gong Culture spans five Central Highlands provinces: Kon Tum, Gia Lai, Dak Lak, Dak Nong, and Lam Dong. Gongs serve as sacred bridges between humans and deities.\nQuestion: How many Central Highlands provinces comprise the Gong Culture space?", "Không gian văn hóa Cồng chiêng trải rộng trên bao nhiêu tỉnh Tây Nguyên?", "Five provinces", ["Five provinces", "Two provinces", "Ten provinces"], "challenge"),
        ("Passage: Ca Mau Cape National Park is the only place on Vietnam's mainland where visitors can witness the sun rising from the East Sea and setting into the Gulf of Thailand on the same day.\nQuestion: What unique phenomenon can be observed at Ca Mau Cape?", "Hiện tượng độc đáo nào có thể quan sát được tại Mũi Cà Mau?", "Watching sunrise from East Sea and sunset into Gulf of Thailand", ["Watching sunrise from East Sea and sunset into Gulf of Thailand", "Snow falling in summer", "Seeing northern lights"], "challenge"),
        ("Passage: The ancient Cham temples of My Son were built between the 4th and 13th centuries, dedicated to Shiva. The distinctive fired red bricks were mortared with tree resin extract without mortar joints.\nQuestion: What natural material bonded the bricks of My Son?", "Chất kết dính tự nhiên nào gắn kết các viên gạch ở Mỹ Sơn?", "Tree resin extract", ["Tree resin extract", "Modern cement", "Animal glue"], "challenge"),
        ("Passage: Dong Van Karst Plateau in Ha Giang contains rock layers dating back 540 million years, with fossil traces from ancient oceans that once submerged the northern mountains.\nQuestion: How far back do the geological rock strata of Dong Van date?", "Các tầng địa chất ở Đồng Văn có niên đại bao nhiêu năm?", "540 million years", ["540 million years", "1 million years", "1,000 years"], "challenge"),
        ("Passage: Van Phuc silk village has woven high-grade silk cloth known as 'Lua Van' for more than a millennium, praised for feeling cool in summer and cozy in winter.\nQuestion: What unique quality is characteristic of 'Lua Van' silk?", "Đặc tính độc đáo nào làm nên danh tiếng của 'Lụa Vạn'?", "Cool in summer and cozy in winter", ["Cool in summer and cozy in winter", "Heavier than wool", "Waterproof like rubber"], "challenge"),
        ("Passage: Can Gio Mangrove Forest was designated as Vietnam's first UNESCO Biosphere Reserve in 2000, home to over 200 animal species and lush Rhizophora mangrove trees.\nQuestion: When was Can Gio designated as a UNESCO Biosphere Reserve?", "Rừng ngập mặn Cần Giờ được UNESCO công nhận vào năm nào?", "In the year 2000", ["In the year 2000", "In the year 1980", "In the year 2020"], "challenge"),
        ("Passage: The Tu San Canyon on the Nho Que River was carved over millions of years, featuring vertical cliff faces rising up to 800 meters, making it Southeast Asia's most spectacular chasm.\nQuestion: What river flows directly through the base of Tu San Canyon?", "Dòng sông nào xanh ngắt chảy qua dưới đáy hẻm Tu Sản?", "Nho Que River", ["Nho Que River", "Da River", "Ma River"], "challenge"),
        ("Passage: The ancient village of Duong Lam in Hanoi preserves nearly a thousand traditional houses built of laterite (rock honeycomb clay), maintaining five historic village gates.\nQuestion: What special building material characterizes the homes in Duong Lam?", "Vật liệu xây dựng ong tổ ong đặc trưng của làng cổ Đường Lâm là gì?", "Laterite honeycomb stone (Đá ong)", ["Laterite honeycomb stone (Đá ong)", "White marble", "Glass and steel"], "challenge"),
        ("Passage: Phu Quoc Island in Kien Giang province is famous for producing fish sauce aged for twelve months in giant wooden barrels made of tropical hardwood trees like Ca Mit and Bo De.\nQuestion: How long is traditional Phu Quoc fish sauce aged in barrels?", "Nước mắm truyền thống Phú Quốc được ủ chượp trong thùng gỗ bao lâu?", "Twelve months", ["Twelve months", "Two weeks", "Five years"], "challenge"),
        ("Passage: The historic Ho Chi Minh Trail through the Truong Son mountains was an engineering feat spanning 20,000 kilometers of roads, trails, and bridges built to support the struggle for national reunification.\nQuestion: How extensive was the network of the Ho Chi Minh Trail?", "Mạng lưới đường Trường Sơn lịch sử dài bao nhiêu km?", "20,000 kilometers", ["20,000 kilometers", "5,000 kilometers", "50,000 kilometers"], "challenge")
    ]
    for idx, (passage_and_q, q_vi, correct, opts, diff) in enumerate(reading_raw, 1):
        q.append({
            "questionId": f"g5_rd_{idx:02d}",
            "grade": 5,
            "gameType": "reading_detective",
            "topic": "Reading Comprehension & Factual Evidence",
            "difficulty": diff,
            "prompt": passage_and_q,
            "promptVi": f"Đọc đoạn văn và tìm chứng cứ: {q_vi}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Evidence verified! The text confirms: '{correct}'.",
            "explanationVi": f"Chứng cứ xác thực! Đoạn văn xác nhận: '{correct}'.",
            "imageAsset": "📖",
            "audioPrompt": passage_and_q.split('Question:')[0],
            "curriculumReference": "Global Success Grade 5 - Reading Comprehension & Evidence Extraction",
            "metadata": {"text": passage_and_q, "answer": correct}
        })

    # -------------------------------------------------------------
    # GAME 4: Speaking Mission (30 items)
    # -------------------------------------------------------------
    speaking_raw = [
        # Easy (10)
        ("Hello world, I love Vietnam!", "Chào thế giới, tôi yêu Việt Nam!", "Hello world, I love Vietnam!", ["Hello world, I love Vietnam!", "Hello world, I hate Vietnam!", "Hi earth, I leave Vietnam!"], "easy"),
        ("Welcome to my beautiful school.", "Chào mừng bạn đến với ngôi trường tươi đẹp của tôi.", "Welcome to my beautiful school.", ["Welcome to my beautiful school.", "Welcome to my big house.", "Welcome to my classroom."], "easy"),
        ("I can speak English with confidence.", "Tôi có thể nói tiếng Anh đầy tự tin.", "I can speak English with confidence.", ["I can speak English with confidence.", "I cannot speak English.", "I speak Vietnamese only."], "easy"),
        ("We are proud of our Vietnamese heritage.", "Chúng tôi tự hào về di sản văn hóa Việt Nam.", "We are proud of our Vietnamese heritage.", ["We are proud of our Vietnamese heritage.", "We are tired of our heritage.", "We like our heritage."], "easy"),
        ("Ha Long Bay is a wonder of nature.", "Vịnh Hạ Long là một kỳ quan thiên nhiên.", "Ha Long Bay is a wonder of nature.", ["Ha Long Bay is a wonder of nature.", "Ha Long Bay is a small lake.", "Ha Long Bay is in the south."], "easy"),
        ("Hanoi is the thousand-year-old capital.", "Hà Nội là thủ đô ngàn năm văn hiến.", "Hanoi is the thousand-year-old capital.", ["Hanoi is the thousand-year-old capital.", "Hanoi is a new town.", "Hanoi has no history."], "easy"),
        ("Hoi An shines with colourful lanterns.", "Hội An rực rỡ với những chiếc đèn lồng sắc màu.", "Hoi An shines with colourful lanterns.", ["Hoi An shines with colourful lanterns.", "Hoi An has no lanterns.", "Hoi An is dark."], "easy"),
        ("Vietnamese food is delicious and healthy.", "Ẩm thực Việt Nam thơm ngon và bổ dưỡng.", "Vietnamese food is delicious and healthy.", ["Vietnamese food is delicious and healthy.", "Vietnamese food is very spicy.", "Vietnamese food is cold."], "easy"),
        ("I practice speaking English every day.", "Tôi luyện nói tiếng Anh mỗi ngày.", "I practice speaking English every day.", ["I practice speaking English every day.", "I rarely speak English.", "I speak English once a year."], "easy"),
        ("Together we explore our amazing homeland.", "Chúng ta cùng nhau khám phá quê hương tươi đẹp.", "Together we explore our amazing homeland.", ["Together we explore our amazing homeland.", "Together we stay indoors.", "We do not travel."], "easy"),
        # Medium (10)
        ("VietDiscovery empowers young Vietnamese learners to achieve global success.", "VietDiscovery tiếp sức cho các bạn nhỏ vươn tầm quốc tế.", "VietDiscovery empowers young learners.", ["VietDiscovery empowers young learners.", "VietDiscovery is a simple game.", "VietDiscovery teaches math."], "medium"),
        ("Vietnam has fifty-four ethnic groups living harmoniously in solidarity.", "Việt Nam có 54 dân tộc anh em cùng chung sống hòa thuận.", "Vietnam has fifty-four ethnic groups.", ["Vietnam has fifty-four ethnic groups.", "Vietnam has only ten ethnic groups.", "Vietnam has no groups."], "medium"),
        ("The Golden Bridge on Ba Na Hills attracts travelers from every continent.", "Cầu Vàng Bà Nà thu hút du khách khắp năm châu.", "The Golden Bridge attracts travelers.", ["The Golden Bridge attracts travelers.", "The bridge is broken.", "No one visits the bridge."], "medium"),
        ("Respecting elderly grandparents and teachers is a core Vietnamese virtue.", "Kính trọng ông bà và thầy cô là đạo lý cốt lõi của người Việt.", "Respecting elders is a core virtue.", ["Respecting elders is a core virtue.", "Elders do not need respect.", "We only study books."], "medium"),
        ("The Mekong Delta produces tropical fruits and nourishes southern communities.", "Đồng bằng sông Cửu Long trù phú hoa trái và nuôi dưỡng người dân Nam Bộ.", "The Mekong Delta produces tropical fruits.", ["The Mekong Delta produces tropical fruits.", "The delta is a desert.", "No fruits grow in the south."], "medium"),
        ("Mount Fansipan stands tall as the majestic Roof of Indochina.", "Đỉnh Fansipan sừng sững nóc nhà Đông Dương hùng vĩ.", "Mount Fansipan is the Roof of Indochina.", ["Mount Fansipan is the Roof of Indochina.", "Fansipan is a small hill.", "Fansipan is near the ocean."], "medium"),
        ("The Perfume River carries the royal echoes of ancient Hue citadel.", "Dòng sông Hương mang âm hưởng cung đình Huế cổ kính.", "The Perfume River carries royal echoes.", ["The Perfume River carries royal echoes.", "The river is completely dry.", "Hue has no river."], "medium"),
        ("Lotus blossoms symbolize purity, resilience, and optimism in Vietnamese life.", "Hoa sen tượng trưng cho sự thuần khiết, kiên cường và lạc quan.", "Lotus blossoms symbolize purity and resilience.", ["Lotus blossoms symbolize purity and resilience.", "Lotus is an ordinary weed.", "Lotus has no meaning."], "medium"),
        ("Children celebrate Mid-Autumn with star lanterns under the autumn moon.", "Trẻ em đón Tết Trung Thu với đèn ông sao dưới ánh trăng thu.", "Children celebrate Mid-Autumn with lanterns.", ["Children celebrate Mid-Autumn with lanterns.", "Mid-Autumn happens in winter.", "Children sleep during Tet."], "medium"),
        ("Learning international languages connects our local culture with the world.", "Học ngoại ngữ kết nối văn hóa quê hương với bạn bè quốc tế.", "Languages connect our culture with the world.", ["Languages connect our culture with the world.", "Languages separate people.", "We only talk to neighbors."], "medium"),
        # Challenge (10)
        ("Son Doong Cave represents the breathtaking geological grandeur of Quang Binh.", "Hang Sơn Đoòng đại diện cho vẻ tráng lệ kỳ vĩ của Quảng Bình.", "Son Doong represents geological grandeur.", ["Son Doong represents geological grandeur.", "Son Doong is a small pit.", "Son Doong is man-made."], "challenge"),
        ("Protecting national cultural heritage is the shared mission of every generation.", "Bảo tồn di sản văn hóa dân tộc là sứ mệnh chung của mọi thế hệ.", "Protecting heritage is our shared mission.", ["Protecting heritage is our shared mission.", "Heritage should be forgotten.", "Only teachers protect heritage."], "challenge"),
        ("Sustainable eco-tourism preserves pristine natural habitats for future explorers.", "Du lịch sinh thái bền vững gìn giữ môi trường nguyên sơ cho tương lai.", "Eco-tourism preserves pristine habitats.", ["Eco-tourism preserves pristine habitats.", "Eco-tourism destroys forests.", "Nature needs no protection."], "challenge"),
        ("Traditional Dong Ho folk paintings convey eternal aspirations for peace and abundance.", "Tranh dân gian Đông Hồ gửi gắm khát vọng muôn đời về hòa bình và ấm no.", "Dong Ho paintings convey aspirations for peace.", ["Dong Ho paintings convey aspirations for peace.", "Paintings are for advertisements.", "Folk art has no soul."], "challenge"),
        ("The Space of Gong Culture reverberates across the lush Central Highlands.", "Không gian văn hóa Cồng chiêng vang vọng khắp đại ngàn Tây Nguyên.", "Gong culture reverberates across the highlands.", ["Gong culture reverberates across the highlands.", "Gongs are ordinary metal plates.", "Highlands have no music."], "challenge"),
        ("Emperor Ly Thai To envisioned a thriving millennium when founding Thang Long in 1010.", "Vua Lý Thái Tổ đã nhìn thấy thiên niên kỷ thịnh vượng khi định đô Thăng Long năm 1010.", "Emperor Ly Thai To founded Thang Long in 1010.", ["Emperor Ly Thai To founded Thang Long in 1010.", "Thang Long was built yesterday.", "Ly Thai To lived in modern times."], "challenge"),
        ("The Truong Son mountain range forms the sturdy backbone of our beloved motherland.", "Dãy Trường Sơn là dải xương sống kiên cường của non sông đất Việt.", "The Truong Son range forms our backbone.", ["The Truong Son range forms our backbone.", "The mountains are flat.", "There are no mountains."], "challenge"),
        ("Youthful innovators lead Vietnam into an era of digital science and green energy.", "Thế hệ trẻ đưa đất nước bước vào kỷ nguyên khoa học số và năng lượng xanh.", "Youthful innovators lead our nation forward.", ["Youthful innovators lead our nation forward.", "Technology is not important.", "We remain in the past."], "challenge"),
        ("Diligent practice with Ms. Trang unlocks your highest educational potential.", "Chăm chỉ rèn luyện cùng cô Trang mở khóa tiềm năng học tập cao nhất của con.", "Diligent practice unlocks your potential.", ["Diligent practice unlocks your potential.", "Practice is unnecessary.", "We never practice."], "challenge"),
        ("I am proud to be a student ambassador for Vietnam's cultural discovery!", "Tôi tự hào là đại sứ học trò lan tỏa hành trình khám phá Việt Nam!", "I am proud to be a student ambassador!", ["I am proud to be a student ambassador!", "I have no pride in learning.", "I do not know Vietnam."], "challenge")
    ]
    for idx, (sentence, s_vi, correct, opts, diff) in enumerate(speaking_raw, 1):
        q.append({
            "questionId": f"g5_spk_{idx:02d}",
            "grade": 5,
            "gameType": "speaking_mission",
            "topic": "Pronunciation, Intonation & Spoken Missions",
            "difficulty": diff,
            "prompt": f"Listen and practice speaking this mission sentence:\n'{sentence}'",
            "promptVi": f"Nghe phát âm chuẩn và luyện nói: '{sentence}' ({s_vi})",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Fluent pronunciation! '{sentence}' spoken with clear natural cadence.",
            "explanationVi": f"Phát âm lưu loát! '{sentence}' được phát âm với ngữ điệu tự nhiên, tự tin.",
            "imageAsset": "🎙️",
            "audioPrompt": sentence,
            "curriculumReference": "Global Success Grade 5 - Spoken Intonation & Fluency",
            "metadata": {"speechText": sentence, "translationVi": s_vi}
        })

    # -------------------------------------------------------------
    # GAME 5: Final Adventure Challenge (30 items)
    # -------------------------------------------------------------
    final_raw = [
        # Easy (10)
        ("Stage 1 Sprint: Spell the English name of the sacred flower: L-O-T-U-S", "Đánh vần tên loài hoa quốc hoa", "LOTUS", ["LOTUS", "ROSE", "LILY"], "easy"),
        ("Stage 1 Sprint: What color is the sky on a sunny summer afternoon?", "Bầu trời mùa hè màu gì?", "Blue", ["Blue", "Green", "Red"], "easy"),
        ("Stage 1 Sprint: How many days are there in one complete week?", "Một tuần có bao nhiêu ngày?", "Seven", ["Seven", "Five", "Ten"], "easy"),
        ("Stage 1 Sprint: Which animal is known as the faithful domestic guardian?", "Con vật trông nhà trung thành", "Dog", ["Dog", "Cat", "Bird"], "easy"),
        ("Stage 1 Sprint: What do students write with on school notebooks?", "Học sinh viết vào vở bằng gì?", "Pen", ["Pen", "Fork", "Knife"], "easy"),
        ("Stage 1 Sprint: What meal do people eat right after waking up in the morning?", "Bữa ăn sáng tiếng Anh là gì?", "Breakfast", ["Breakfast", "Lunch", "Dinner"], "easy"),
        ("Stage 1 Sprint: What season comes right after the cold winter?", "Mùa nào đến ngay sau mùa đông lạnh?", "Spring", ["Spring", "Summer", "Autumn"], "easy"),
        ("Stage 1 Sprint: Which famous lake is located right in the center of Hanoi?", "Hồ nước ở trung tâm thủ đô Hà Nội", "Hoan Kiem Lake", ["Hoan Kiem Lake", "West Lake", "Ba Be Lake"], "easy"),
        ("Stage 1 Sprint: What is the Vietnamese currency unit called?", "Đơn vị tiền tệ Việt Nam", "Dong", ["Dong", "Dollar", "Euro"], "easy"),
        ("Stage 1 Sprint: What do young children receive in red envelopes during Tet?", "Phong bao lì xì ngày Tết đựng gì?", "Lucky money", ["Lucky money", "Candies", "Books"], "easy"),
        # Medium (10)
        ("Stage 2 Challenge: Choose the correct preposition: 'Ha Long Bay is located _______ northern Vietnam.'", "Giới từ chỉ vị trí miền Bắc", "in", ["in", "on", "at"], "medium"),
        ("Stage 2 Challenge: Identify the correct past tense: 'Last summer, my family _______ to Da Nang by train.'", "Thì quá khứ của động từ 'travel'", "traveled", ["traveled", "travel", "will travel"], "medium"),
        ("Stage 2 Challenge: What is the highest peak in the Indochinese peninsula?", "Đỉnh núi cao nhất Đông Dương", "Mount Fansipan", ["Mount Fansipan", "Ba Den", "Langbiang"], "medium"),
        ("Stage 2 Challenge: Which bridge breathes real fire and sprays water on weekend evenings?", "Cầu Rồng phun lửa phun nước", "Dragon Bridge", ["Dragon Bridge", "Golden Bridge", "Thuan Phuoc"], "medium"),
        ("Stage 2 Challenge: What traditional art form uses puppets dancing upon water?", "Nghệ thuật múa rối nước", "Water puppetry", ["Water puppetry", "Shadow play", "Magic show"], "medium"),
        ("Stage 2 Challenge: Which famous market in southern Vietnam has a prominent clock tower?", "Chợ có tháp đồng hồ ở TP.HCM", "Ben Thanh Market", ["Ben Thanh Market", "Dong Xuan", "Han Market"], "medium"),
        ("Stage 2 Challenge: What is the traditional round pastry with sweet filling eaten during Mid-Autumn?", "Bánh trung thu truyền thống", "Mooncake", ["Mooncake", "Chung cake", "Banh pia"], "medium"),
        ("Stage 2 Challenge: Which ancient town in central Vietnam is famous for tailors and silk lanterns?", "Đô thị cổ may đo và đèn lồng", "Hoi An", ["Hoi An", "Hue", "Nha Trang"], "medium"),
        ("Stage 2 Challenge: Which province is home to both Phong Nha and Son Doong caves?", "Tỉnh có Phong Nha và Sơn Đoòng", "Quang Binh", ["Quang Binh", "Quang Tri", "Ha Tinh"], "medium"),
        ("Stage 2 Challenge: What is the sweet national beverage made with whipped egg cream and robust coffee?", "Cà phê trứng Hà Nội", "Egg coffee", ["Egg coffee", "Iced tea", "Lemonade"], "medium"),
        # Challenge (10)
        ("Championship Boss: In 1010, King Ly Thai To moved the capital to Thang Long after seeing a golden dragon. What does 'Thang Long' literally mean in English?", "Thăng Long nghĩa là gì?", "Rising Dragon", ["Rising Dragon", "Sleeping Dragon", "Hidden Dragon"], "challenge"),
        ("Championship Boss: What geological process created the thousands of dramatic limestone towers in Ha Long Bay?", "Quá trình địa chất tạo nên Vịnh Hạ Long", "Karst erosion over 500 million years", ["Karst erosion over 500 million years", "Earthquake last century", "Volcano eruption"], "challenge"),
        ("Championship Boss: Why did King Le Loi's sacred sword become known as Thuan Thien (Heaven's Will)?", "Ý nghĩa gươm Thuận Thiên", "It symbolized divine mandate to defend national independence", ["It symbolized divine mandate to defend national independence", "It was bought from a foreign king", "It was made of ordinary iron"], "challenge"),
        ("Championship Boss: How many UNESCO World Heritage Sites are currently preserved across Vietnam?", "Số lượng di sản thế giới tại Việt Nam", "Eight heritage sites", ["Eight heritage sites", "Three sites", "Twenty sites"], "challenge"),
        ("Championship Boss: Which river basin in southern Vietnam sustains nine dragon estuaries flowing to the East Sea?", "Dòng sông Cửu Long chín nhánh", "Mekong River Basin", ["Mekong River Basin", "Red River Basin", "Dong Nai Basin"], "challenge"),
        ("Championship Boss: What ancient royal court orchestra was inscribed on UNESCO's Representative List in 2003?", "Di sản Nhã nhạc cung đình", "Nha Nhac - Vietnamese Court Music", ["Nha Nhac - Vietnamese Court Music", "Modern pop music", "Military marching band"], "challenge"),
        ("Championship Boss: What unique natural phenomenon distinguishes Son Doong Cave from all other caves on Earth?", "Hiện tượng thời tiết riêng trong Sơn Đoòng", "Internal weather clouds and subterranean rainforest", ["Internal weather clouds and subterranean rainforest", "Underground lava rivers", "Subterranean glaciers"], "challenge"),
        ("Championship Boss: What core message is reflected in the traditional legend of Banh Chung and Banh Giay?", "Thông điệp bánh chưng bánh giầy", "Gratitude to heaven and earth, and honor for filial piety", ["Gratitude to heaven and earth, and honor for filial piety", "How to prepare for market trade", "Making cakes fast"], "challenge"),
        ("Championship Boss: What is the highest grade of educational achievement awarded in VietDiscovery?", "Danh hiệu cao nhất của VietDiscovery", "VietDiscovery English Grand Champion", ["VietDiscovery English Grand Champion", "Bronze Explorer", "Beginner Scout"], "challenge"),
        ("Championship Boss: Congratulations! You have conquered the entire five-grade learning journey. What is your pledge?", "Lời cam kết của nhà vô địch", "To study English diligently and shine with pride!", ["To study English diligently and shine with pride!", "To stop studying today", "To forget my lessons"], "challenge")
    ]
    for idx, (question, q_vi, correct, opts, diff) in enumerate(final_raw, 1):
        q.append({
            "questionId": f"g5_adv_{idx:02d}",
            "grade": 5,
            "gameType": "final_adventure",
            "topic": "Grand Championship Sprint & Multi-Skill Mission",
            "difficulty": diff,
            "prompt": question,
            "promptVi": q_vi,
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Grand Champion victory! '{correct}' passes the stage with highest honors.",
            "explanationVi": f"Chiến thắng đỉnh cao! '{correct}' vượt ải xuất sắc với điểm số tối đa.",
            "imageAsset": "⚡",
            "audioPrompt": question,
            "curriculumReference": "Global Success Grade 5 - Grand Adventure Championship",
            "metadata": {"stage": idx, "questionVi": q_vi, "answer": correct}
        })

    return q

print("Loaded Grade 5 question builder.")
