# scripts/questions_data_g3.py
# Grade 3 - Golden Adventure (Pre-A1 Foundation)
# 5 games x 30 questions = 150 questions

def get_grade3_questions():
    q = []
    
    # -------------------------------------------------------------
    # GAME 1: Vietnam Landmark Drag & Drop (30 items)
    # Categorizing into North (Miền Bắc), Central (Miền Trung), South (Miền Nam)
    # -------------------------------------------------------------
    landmarks_raw = [
        # North (10)
        ("One Pillar Pagoda", "Chùa Một Cột", "Hanoi", "North", "North", "🏛️", "easy"),
        ("Ha Long Bay", "Vịnh Hạ Long", "Quang Ninh", "North", "North", "⛵", "easy"),
        ("Hoan Kiem Lake", "Hồ Hoàn Kiếm", "Hanoi", "North", "North", "🐢", "easy"),
        ("Fansipan Peak", "Đỉnh Fansipan - Nóc nhà Đông Dương", "Lao Cai / Sapa", "North", "North", "⛰️", "easy"),
        ("Ba Be Lake", "Hồ Ba Bể", "Bac Kan", "North", "North", "🚣", "medium"),
        ("Trang An Complex", "Quần thể danh thắng Tràng An", "Ninh Binh", "North", "North", "🛶", "medium"),
        ("Ban Gioc Waterfall", "Thác Bản Giốc", "Cao Bang", "North", "North", "🌊", "medium"),
        ("Dong Van Karst Plateau", "Cao nguyên đá Đồng Văn", "Ha Giang", "North", "North", "🪨", "challenge"),
        ("Perfume Pagoda", "Chùa Hương", "Hanoi", "North", "North", "🛕", "challenge"),
        ("Tam Coc Bich Dong", "Tam Cốc - Bích Động", "Ninh Binh", "North", "North", "🌾", "challenge"),
        
        # Central (10)
        ("Hue Imperial Citadel", "Đại Nội Huế", "Thua Thien Hue", "Central", "Central", "🏰", "easy"),
        ("Hoi An Ancient Town", "Phố Cổ Hội An", "Quang Nam", "Central", "Central", "🏮", "easy"),
        ("Da Nang Golden Bridge", "Cầu Vàng Bà Nà Hills", "Da Nang", "Central", "Central", "🌉", "easy"),
        ("Phong Nha Cave", "Động Phong Nha", "Quang Binh", "Central", "Central", "🦇", "medium"),
        ("My Son Sanctuary", "Thánh địa Mỹ Sơn", "Quang Nam", "Central", "Central", "🛕", "medium"),
        ("Lang Co Bay", "Vịnh Lăng Cô", "Thua Thien Hue", "Central", "Central", "🏖️", "medium"),
        ("Hai Van Pass", "Đèo Hải Vân", "Da Nang / Hue", "Central", "Central", "🏍️", "medium"),
        ("Son Doong Cave", "Hang Sơn Đoòng", "Quang Binh", "Central", "Central", "🧗", "challenge"),
        ("Thien Mu Pagoda", "Chùa Thiên Mụ", "Thua Thien Hue", "Central", "Central", "🔔", "challenge"),
        ("An Dinh Palace", "Cung An Định", "Thua Thien Hue", "Central", "Central", "🏛️", "challenge"),

        # South (10)
        ("Ben Thanh Market", "Chợ Bến Thành", "Ho Chi Minh City", "South", "South", "🏬", "easy"),
        ("Landmark 81", "Tòa nhà Landmark 81", "Ho Chi Minh City", "South", "South", "🏙️", "easy"),
        ("Cu Chi Tunnels", "Địa đạo Củ Chi", "Ho Chi Minh City", "South", "South", "🎖️", "easy"),
        ("Cai Rang Floating Market", "Chợ nổi Cái Răng", "Can Tho", "South", "South", "🛶", "medium"),
        ("Phu Quoc Island", "Đảo Ngọc Phú Quốc", "Kien Giang", "South", "South", "🏝️", "medium"),
        ("Ba Den Mountain", "Núi Bà Đen", "Tay Ninh", "South", "South", "🚠", "medium"),
        ("Nha Rong Wharf", "Bến Nhà Rồng", "Ho Chi Minh City", "South", "South", "⚓", "medium"),
        ("Can Gio Mangrove Forest", "Rừng ngập mặn Cần Giờ", "Ho Chi Minh City", "South", "South", "🦀", "challenge"),
        ("Vinh Trang Pagoda", "Chùa Vĩnh Tràng", "Tien Giang", "South", "South", "🛕", "challenge"),
        ("Tram Chim National Park", "Vườn quốc gia Tràm Chim", "Dong Thap", "South", "South", "🦩", "challenge")
    ]
    for idx, (name, vi, prov, region, correct, emoji, diff) in enumerate(landmarks_raw, 1):
        q.append({
            "questionId": f"g3_lm_{idx:02d}",
            "grade": 3,
            "gameType": "landmark_drag_drop",
            "topic": "Vietnam Heritage & Geography",
            "difficulty": diff,
            "prompt": f"Drag '{name}' to its geographical region in Vietnam!",
            "promptVi": f"Kéo thả '{vi}' ({prov}) vào đúng miền của Việt Nam!",
            "answerOptions": ["North", "Central", "South"],
            "correctAnswer": correct,
            "explanation": f"Exactly! {name} is located in {prov}, in {region} Vietnam.",
            "explanationVi": f"Chính xác! {vi} tọa lạc tại {prov}, thuộc miền {region == 'North' and 'Bắc' or region == 'Central' and 'Trung' or 'Nam'}.",
            "imageAsset": emoji,
            "audioPrompt": f"{name} is located in {region} Vietnam.",
            "curriculumReference": "Global Success Grade 3 - Places in Vietnam",
            "metadata": {"landmarkName": name, "province": prov, "region": region, "emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 2: Interactive Vietnam Map Quest (30 items)
    # -------------------------------------------------------------
    map_raw = [
        # Easy (10)
        ("Hanoi", "The thousand-year capital city with Hoan Kiem Lake", "Thủ đô ngàn năm văn hiến", ["Hanoi", "Hue", "Da Nang"], "easy"),
        ("Ho Chi Minh City", "The largest bustling economic hub in southern Vietnam", "Thành phố sôi động nhất phương Nam", ["Ho Chi Minh City", "Hanoi", "Hai Phong"], "easy"),
        ("Da Nang", "Coastal city famous for the Golden Bridge held by giant stone hands", "Thành phố đáng sống với Cầu Vàng", ["Da Nang", "Nha Trang", "Vung Tau"], "easy"),
        ("Quang Ninh", "Province home to the world wonder Ha Long Bay", "Tỉnh có Vịnh Hạ Long", ["Quang Ninh", "Hai Phong", "Nam Dinh"], "easy"),
        ("Thua Thien Hue", "Former imperial capital beside the Perfume River", "Cố đô bên dòng sông Hương", ["Thua Thien Hue", "Quang Tri", "Quang Binh"], "easy"),
        ("Quang Nam", "Province famous for Hoi An Ancient Town with yellow walls", "Tỉnh có phố cổ Hội An", ["Quang Nam", "Da Nang", "Binh Dinh"], "easy"),
        ("Can Tho", "The vibrant heart of the Mekong Delta with floating markets", "Thủ phủ miền Tây với chợ nổi Cái Răng", ["Can Tho", "Ben Tre", "Ca Mau"], "easy"),
        ("Lao Cai", "Mountain province home to Sapa and Fansipan Peak", "Tỉnh vùng cao có Sa Pa và đỉnh Fansipan", ["Lao Cai", "Yen Bai", "Ha Giang"], "easy"),
        ("Lam Dong", "Highland province famous for cool Da Lat pine hills and flowers", "Tỉnh có thành phố ngàn hoa Đà Lạt", ["Lam Dong", "Dak Lak", "Gia Lai"], "easy"),
        ("Kien Giang", "Island territory home to Phu Quoc Pearl Island", "Tỉnh có đảo ngọc Phú Quốc", ["Kien Giang", "Ca Mau", "Bac Lieu"], "easy"),
        # Medium (10)
        ("Ninh Binh", "Ancient land known as 'Ha Long Bay on land' with Trang An", "Vùng đất cố đô với quần thể Tràng An", ["Ninh Binh", "Thanh Hoa", "Nam Dinh"], "medium"),
        ("Quang Binh", "World capital of caves with Phong Nha and Son Doong", "Vương quốc hang động thế giới", ["Quang Binh", "Quang Tri", "Ha Tinh"], "medium"),
        ("Ha Giang", "Northernmost province with majestic Dong Van Karst Plateau", "Vùng đất địa đầu Tổ quốc với cao nguyên đá", ["Ha Giang", "Cao Bang", "Tuyen Quang"], "medium"),
        ("Cao Bang", "Border province home to the grand Ban Gioc Waterfall", "Tỉnh có thác Bản Giốc hùng vĩ", ["Cao Bang", "Bac Kan", "Lang Son"], "medium"),
        ("Bac Kan", "Province blessed with the pristine Ba Be freshwater lake", "Vùng đất có hồ nước ngọt Ba Bể", ["Bac Kan", "Thai Nguyen", "Tuyen Quang"], "medium"),
        ("Khanh Hoa", "Coastal paradise home to beautiful Nha Trang Bay", "Xứ sở trầm hương với vịnh Nha Trang", ["Khanh Hoa", "Phu Yen", "Binh Thuan"], "medium"),
        ("Binh Dinh", "Martial arts land home to ancient Cham towers in Quy Nhon", "Miền đất võ với tháp Chăm Quy Nhơn", ["Binh Dinh", "Phu Yen", "Quang Ngai"], "medium"),
        ("Phu Yen", "Coastal gem famous for Ganh Da Dia hexagonal stone columns", "Xứ sở 'hoa vàng trên cỏ xanh' có Gành Đá Đĩa", ["Phu Yen", "Khanh Hoa", "Binh Dinh"], "medium"),
        ("Ben Tre", "Southern homeland of sweet green coconuts and winding canals", "Xứ dừa Bến Tre với những con rạch rợp bóng", ["Ben Tre", "Tien Giang", "Vinh Long"], "medium"),
        ("Dong Thap", "Land of pink lotus blooms and Tram Chim red-crowned cranes", "Đất sen hồng Đồng Tháp với sếu đầu đỏ", ["Dong Thap", "An Giang", "Long An"], "medium"),
        # Challenge (10)
        ("Tay Ninh", "Province home to Mount Ba Den, the highest peak in the South", "Tỉnh có đỉnh núi Bà Đen cao nhất Nam Bộ", ["Tay Ninh", "Binh Duong", "Binh Phuoc"], "challenge"),
        ("An Giang", "Border province featuring the Tra Su Cajuput Forest", "Tỉnh có rừng tràm Trà Sư xanh mướt", ["An Giang", "Kien Giang", "Dong Thap"], "challenge"),
        ("Ca Mau", "Southernmost tip of Vietnam where forest meets the sea", "Mũi Cà Mau - điểm cực Nam Tổ quốc", ["Ca Mau", "Bac Lieu", "Soc Trang"], "challenge"),
        ("Dien Bien", "Historic valley known for the glorious Dien Bien Phu victory", "Thung lũng lịch sử Điện Biên Phủ", ["Dien Bien", "Lai Chau", "Son La"], "challenge"),
        ("Son La", "Moc Chau highland plateau famous for green tea hills and plum blossoms", "Cao nguyên Mộc Châu đồi chè và hoa mận", ["Son La", "Hoa Binh", "Yen Bai"], "challenge"),
        ("Kon Tum", "Central Highlands province with the 100-year-old Wooden Church", "Vùng đất Tây Nguyên với Nhà thờ gỗ 100 tuổi", ["Kon Tum", "Gia Lai", "Dak Lak"], "challenge"),
        ("Dak Lak", "Coffee capital of Vietnam with Buon Ma Thuot city", "Thủ phủ cà phê Buôn Ma Thuột", ["Dak Lak", "Lam Dong", "Dak Nong"], "challenge"),
        ("Ba Ria - Vung Tau", "Peninsula province famous for seaside beaches and Statue of Christ", "Thành phố biển Vũng Tàu", ["Ba Ria - Vung Tau", "Binh Thuan", "Dong Nai"], "challenge"),
        ("Quang Ngai", "Coastal province home to Ly Son volcanic garlic island", "Tỉnh có đảo tỏi núi lửa Lý Sơn", ["Quang Ngai", "Quang Nam", "Binh Dinh"], "challenge"),
        ("Lang Son", "Border trading province home to Mau Son mountain peak", "Xứ Lạng với đỉnh Mẫu Sơn quanh năm mây phủ", ["Lang Son", "Bac Giang", "Quang Ninh"], "challenge")
    ]
    for idx, (target, clue, vi, opts, diff) in enumerate(map_raw, 1):
        q.append({
            "questionId": f"g3_mq_{idx:02d}",
            "grade": 3,
            "gameType": "map_quest",
            "topic": "Vietnam Geography & Provinces",
            "difficulty": diff,
            "prompt": f"Map Clue: {clue}. Which province or city is it?",
            "promptVi": f"Manh mối bản đồ: {vi}. Đó là tỉnh/thành phố nào?",
            "answerOptions": opts,
            "correctAnswer": target,
            "explanation": f"Spot on! '{target}' matches the description: {clue}.",
            "explanationVi": f"Chính xác! '{target}' ({vi}).",
            "imageAsset": "🗺️",
            "audioPrompt": f"Which province is this? It is {target}!",
            "curriculumReference": "Global Success Grade 3 - Vietnam Geography Quest",
            "metadata": {"province": target, "description": clue}
        })

    # -------------------------------------------------------------
    # GAME 3: Sentence Puzzle (30 items)
    # -------------------------------------------------------------
    puzzle_raw = [
        # Easy (10)
        ("I like reading English comic books.", "Tôi thích đọc truyện tranh tiếng Anh.", ["I like reading", "English comic books."], "easy"),
        ("Hanoi is the capital of Vietnam.", "Hà Nội là thủ đô của Việt Nam.", ["Hanoi is", "the capital of Vietnam."], "easy"),
        ("Ha Long Bay has many green islands.", "Vịnh Hạ Long có rất nhiều hòn đảo xanh.", ["Ha Long Bay has", "many green islands."], "easy"),
        ("Hoi An is famous for colourful lanterns.", "Hội An nổi tiếng với những chiếc đèn lồng rực rỡ.", ["Hoi An is famous", "for colourful lanterns."], "easy"),
        ("Hue Citadel has ancient royal palaces.", "Đại Nội Huế có những cung điện hoàng gia cổ kính.", ["Hue Citadel has", "ancient royal palaces."], "easy"),
        ("We eat delicious beef Pho for breakfast.", "Chúng tôi ăn phở bò thơm ngon cho bữa sáng.", ["We eat delicious", "beef Pho for breakfast."], "easy"),
        ("My sister plays the piano very well.", "Em gái tôi chơi đàn piano rất giỏi.", ["My sister plays", "the piano very well."], "easy"),
        ("They travel to Da Nang by plane.", "Họ đi du lịch đến Đà Nẵng bằng máy bay.", ["They travel to", "Da Nang by plane."], "easy"),
        ("There is a big clock on the classroom wall.", "Có một chiếc đồng hồ lớn trên tường lớp học.", ["There is a big clock", "on the classroom wall."], "easy"),
        ("Students wear white shirts on Monday.", "Học sinh mặc áo sơ mi trắng vào thứ Hai.", ["Students wear white shirts", "on Monday."], "easy"),
        # Medium (10)
        ("During the Mid-Autumn Festival, children carry star lanterns.", "Trong dịp Tết Trung Thu, trẻ em rước đèn ông sao.", ["During the Mid-Autumn Festival,", "children carry star lanterns."], "medium"),
        ("Tourists take wooden cruise boats to explore limestone caves.", "Du khách đi thuyền gỗ để khám phá các hang động đá vôi.", ["Tourists take wooden cruise boats", "to explore limestone caves."], "medium"),
        ("Ben Thanh Market is a famous shopping landmark in Ho Chi Minh City.", "Chợ Bến Thành là địa điểm mua sắm nổi tiếng ở TP.HCM.", ["Ben Thanh Market is a famous", "shopping landmark in Ho Chi Minh City."], "medium"),
        ("Fansipan is the highest mountain peak in Indochina.", "Fansipan là đỉnh núi cao nhất Đông Dương.", ["Fansipan is the highest", "mountain peak in Indochina."], "medium"),
        ("My grandmother makes sweet lotus tea every spring morning.", "Bà tôi pha trà sen thơm ngát vào mỗi buổi sáng mùa xuân.", ["My grandmother makes sweet", "lotus tea every spring morning."], "medium"),
        ("We rode bicycles around West Lake yesterday afternoon.", "Chúng tôi đạp xe quanh Hồ Tây vào chiều qua.", ["We rode bicycles around", "West Lake yesterday afternoon."], "medium"),
        ("Many colourful boats sell fresh fruits on Cai Rang floating market.", "Nhiều thuyền ghe rực rỡ bán hoa quả tươi trên chợ nổi Cái Răng.", ["Many colourful boats sell", "fresh fruits on Cai Rang floating market."], "medium"),
        ("The golden turtle returned the magic sword to King Le Loi.", "Rùa vàng đã hoàn trả gươm thần cho vua Lê Lợi.", ["The golden turtle returned", "the magic sword to King Le Loi."], "medium"),
        ("Da Nang Golden Bridge looks like two stone hands holding a silk ribbon.", "Cầu Vàng Đà Nẵng trông như hai bàn tay đá nâng dải lụa.", ["Da Nang Golden Bridge looks like", "two stone hands holding a silk ribbon."], "medium"),
        ("Vietnamese students love speaking English with Ms. Trang.", "Học sinh Việt Nam rất thích nói tiếng Anh cùng cô Trang.", ["Vietnamese students love", "speaking English with Ms. Trang."], "medium"),
        # Challenge (10)
        ("Because it was sunny and breezy, we flew our kites on the grass field.", "Vì trời nắng và có gió nhẹ, chúng tôi thả diều trên bãi cỏ.", ["Because it was sunny and breezy,", "we flew our kites on the grass field."], "challenge"),
        ("When you visit Hoi An Ancient Town at night, the whole river glows with lanterns.", "Khi bạn ghé thăm phố cổ Hội An về đêm, cả dòng sông bừng sáng ánh đèn hoa đăng.", ["When you visit Hoi An Ancient Town at night,", "the whole river glows with lanterns."], "challenge"),
        ("Although the mountain trail was steep, we reached the scenic summit safely.", "Dù đường mòn lên núi khá dốc, chúng tôi vẫn lên đến đỉnh an toàn.", ["Although the mountain trail was steep,", "we reached the scenic summit safely."], "challenge"),
        ("In the Mekong Delta, people travel by small boats along winding coconut canals.", "Ở đồng bằng sông Cửu Long, người dân di chuyển bằng xuồng ba lá ven rạch dừa.", ["In the Mekong Delta, people travel", "by small boats along winding coconut canals."], "challenge"),
        ("Before the school bell rings, students gather in the yard to do morning exercises.", "Trước khi chuông reo, học sinh tập trung dưới sân để tập thể dục buổi sáng.", ["Before the school bell rings,", "students gather in the yard to do morning exercises."], "challenge"),
        ("If you climb to the top of Turtle Tower, you can view the peaceful green lake.", "Nếu nhìn từ Tháp Rùa, bạn sẽ thấy mặt hồ trong xanh thanh bình.", ["If you climb to the top of Turtle Tower,", "you can view the peaceful green lake."], "challenge"),
        ("Traditional water puppetry tells funny folk stories with wooden puppets on water.", "Múa rối nước truyền thống kể các câu chuyện dân gian bằng con rối gỗ trên nước.", ["Traditional water puppetry tells", "funny folk stories with wooden puppets on water."], "challenge"),
        ("My family traveled to Phu Quoc Island to swim in the crystal blue sea.", "Gia đình tôi đi đảo Phú Quốc để tắm biển xanh trong vắt.", ["My family traveled to Phu Quoc Island", "to swim in the crystal blue sea."], "challenge"),
        ("Local artisans in Bat Trang ceramic village craft beautiful clay bowls and vases.", "Nghệ nhân gốm Bát Tràng tạo ra những chiếc bát và bình gốm tuyệt đẹp.", ["Local artisans in Bat Trang ceramic village craft", "beautiful clay bowls and vases."], "challenge"),
        ("Learning English helps young explorers introduce Vietnam's beauty to foreign friends.", "Học tiếng Anh giúp các nhà thám hiểm nhí giới thiệu vẻ đẹp Việt Nam với bạn bè quốc tế.", ["Learning English helps young explorers", "introduce Vietnam's beauty to foreign friends."], "challenge")
    ]
    for idx, (sent, vi, parts, diff) in enumerate(puzzle_raw, 1):
        q.append({
            "questionId": f"g3_puz_{idx:02d}",
            "grade": 3,
            "gameType": "sentence_puzzle",
            "topic": "Sentence Construction & Clauses",
            "difficulty": diff,
            "prompt": f"Snap the puzzle pieces together to build: '{sent}'",
            "promptVi": f"Ghép các mảnh câu hoàn chỉnh: '{vi}'",
            "answerOptions": parts,
            "correctAnswer": sent,
            "explanation": f"Splendid! The pieces join together to form: '{sent}'.",
            "explanationVi": f"Xuất sắc! Các mảnh ghép hoàn chỉnh: '{sent}'.",
            "imageAsset": "🧩",
            "audioPrompt": sent,
            "curriculumReference": "Global Success Grade 3 - Sentence Syntax & Punctuation",
            "metadata": {"sentenceParts": parts, "fullSentence": sent}
        })

    # -------------------------------------------------------------
    # GAME 4: Listening Detective (30 items)
    # -------------------------------------------------------------
    detective_raw = [
        # Easy (10)
        ("Turtle Tower", "I am a stone tower in the middle of a lake in Hanoi. A golden turtle lives nearby. What am I?", "Tháp Rùa Hồ Gươm", ["Turtle Tower", "Big Ben", "Eiffel Tower"], "easy"),
        ("Ha Long Bay", "I have thousands of green limestone islands in the sea. People sleep on cruise ships here. Who am I?", "Vịnh Hạ Long", ["Ha Long Bay", "Red River", "West Lake"], "easy"),
        ("Hue Citadel", "I was home to Vietnamese emperors. I have ancient stone gates and thrones beside the Perfume River.", "Đại Nội Huế", ["Hue Citadel", "Hanoi Opera House", "Ben Thanh Market"], "easy"),
        ("Hoi An", "I am an ancient town with yellow walls, tailor shops, and glowing river lanterns at night.", "Phố cổ Hội An", ["Hoi An", "Da Nang", "Nha Trang"], "easy"),
        ("Ben Thanh Market", "I have a big clock tower at my front entrance in Ho Chi Minh City. Inside, vendors sell souvenirs and food.", "Chợ Bến Thành", ["Ben Thanh Market", "Dong Xuan Market", "Dam Market"], "easy"),
        ("Golden Bridge", "I am a pedestrian bridge in Da Nang held up by two giant mossy stone hands. Who am I?", "Cầu Vàng", ["Golden Bridge", "Dragon Bridge", "Long Bien Bridge"], "easy"),
        ("Fansipan", "I am 3,143 meters tall. People call me the 'Roof of Indochina'. You can take a cable car to my peak.", "Đỉnh Fansipan", ["Fansipan", "Ba Den", "Langbiang"], "easy"),
        ("Dragon Bridge", "I am a yellow bridge shaped like a giant dragon in Da Nang. On weekends, I breathe fire and spray water!", "Cầu Rồng Đà Nẵng", ["Dragon Bridge", "Golden Bridge", "Han River Bridge"], "easy"),
        ("Lotus", "I am Vietnam's national flower. I grow pure and pink from the muddy water with a sweet fragrance.", "Hoa sen", ["Lotus", "Rose", "Sunflower"], "easy"),
        ("Ao Dai", "I am a graceful traditional Vietnamese costume with two long silk flaps worn over trousers.", "Áo dài truyền thống", ["Ao Dai", "Kimono", "Hanbok"], "easy"),
        # Medium (10)
        ("Pho", "I am a famous Vietnamese noodle soup with aromatic broth, cinnamon, ginger, herbs, and tender beef.", "Phở bò truyền thống", ["Pho", "Banh Mi", "Spring Roll"], "medium"),
        ("Banh Mi", "I am a crispy French-style baguette stuffed with pate, pork, fresh cilantro, cucumber, and spicy chili.", "Bánh mì Việt Nam", ["Banh Mi", "Hamburger", "Pizza"], "medium"),
        ("Conical Hat (Non La)", "I am made of dried palm leaves and bamboo rings. I protect farmers and schoolgirls from the tropical sun.", "Nón lá bài thơ", ["Conical Hat (Non La)", "Helmet", "Cap"], "medium"),
        ("Mooncake", "I am a round pastry baked during the Mid-Autumn festival, stuffed with lotus seeds, salted egg yolk, and nuts.", "Bánh trung thu", ["Mooncake", "Chung Cake", "Cupcake"], "medium"),
        ("Water Puppetry", "We are wooden figures dancing on the water surface while musicians play traditional bamboo flutes behind a bamboo screen.", "Múa rối nước", ["Water Puppetry", "Shadow Puppet", "Circus"], "medium"),
        ("Cai Rang Market", "I am a floating market where farmers hang pineapples, watermelons, and mangoes on tall bamboo poles called 'cay beo'.", "Chợ nổi Cái Răng", ["Cai Rang Market", "Ben Thanh Market", "Dong Xuan Market"], "medium"),
        ("Phong Nha Cave", "I am an underground cave system with majestic stalactites, stalagmites, and a long subterranean river.", "Động Phong Nha", ["Phong Nha Cave", "Cu Chi Tunnels", "Ba Be Lake"], "medium"),
        ("Cu Chi Tunnels", "I am a legendary underground tunnel network with hospitals, kitchens, and meeting rooms used during the war.", "Địa đạo Củ Chi", ["Cu Chi Tunnels", "Phong Nha Cave", "Marble Mountains"], "medium"),
        ("Dong Ho Painting", "I am folk art printed on traditional 'Do' paper made from tree bark using natural leaf and shell colors.", "Tranh dân gian Đông Hồ", ["Dong Ho Painting", "Oil Painting", "Comic Book"], "medium"),
        ("Star Lantern", "I am a five-pointed star made of red cellophane and bamboo sticks, carried by children under the full autumn moon.", "Đèn ông sao", ["Star Lantern", "Flashlight", "Candle"], "medium"),
        # Challenge (10)
        ("Son Doong", "I am officially the largest natural cave on Earth, so huge that an entire Boeing 747 could fly through my chambers.", "Hang Sơn Đoòng", ["Son Doong", "Phong Nha", "Paradise Cave"], "challenge"),
        ("Trang An", "I am a UNESCO World Heritage site near Ninh Binh where peaceful sampans float through eleven limestone water caves.", "Tràng An Ninh Bình", ["Trang An", "Tam Coc", "Ha Long"], "challenge"),
        ("Ban Gioc", "I am a breathtaking four-tier waterfall straddling the border between Vietnam and China in Cao Bang province.", "Thác Bản Giốc", ["Ban Gioc", "Datanla", "Pongour"], "challenge"),
        ("Bat Trang", "I am an ancient artisan village on the Red River famous for handcrafted porcelain and ceramic bowls for 700 years.", "Làng gốm Bát Tràng", ["Bat Trang", "Van Phuc", "Dong Ho"], "challenge"),
        ("Van Phuc", "I am a historic handicraft village near Hanoi renowned for weaving smooth, lustrous mulberry silk textiles.", "Làng lụa Vạn Phúc", ["Van Phuc", "Bat Trang", "Tho Ha"], "challenge"),
        ("Dan Bau", "I am a unique traditional musical instrument with only one single string that produces a haunting, soulful melody.", "Đàn bầu", ["Dan Bau", "Guitar", "Violin"], "challenge"),
        ("Banh Chung", "I am a square green cake wrapped in 'dong' leaves, filled with sticky rice, mung beans, and pork for the Lunar New Year.", "Bánh chưng ngày Tết", ["Banh Chung", "Mooncake", "Banh Pia"], "challenge"),
        ("Ba Be Lake", "I am the largest natural freshwater lake in northern Vietnam, surrounded by limestone peaks and Tay ethnic villages.", "Hồ Ba Bể", ["Ba Be Lake", "West Lake", "Tuyen Lam Lake"], "challenge"),
        ("My Son Sanctuary", "I am a mysterious cluster of red-brick Hindu temples built by the ancient Champa kingdom in Quang Nam.", "Thánh địa Mỹ Sơn", ["My Son Sanctuary", "Po Nagar", "Angkor Wat"], "challenge"),
        ("Dong Van Plateau", "I am a UNESCO Global Geopark in Ha Giang with sharp limestone peaks, buckwheat flower fields, and the deep Tu San canyon.", "Cao nguyên đá Đồng Văn", ["Dong Van Plateau", "Moc Chau", "Da Lat"], "challenge")
    ]
    for idx, (target, riddle, vi, opts, diff) in enumerate(detective_raw, 1):
        q.append({
            "questionId": f"g3_det_{idx:02d}",
            "grade": 3,
            "gameType": "listening_detective",
            "topic": "Detective Riddles & Deductions",
            "difficulty": diff,
            "prompt": f"Detective Clue: '{riddle}' What is it?",
            "promptVi": f"Thám tử nhí phá án: '{riddle}' ({vi})",
            "answerOptions": opts,
            "correctAnswer": target,
            "explanation": f"Case solved, Detective! It is {target} ({vi}).",
            "explanationVi": f"Phá án thành công! Đó chính là {target} ({vi}).",
            "imageAsset": "🔍",
            "audioPrompt": riddle,
            "curriculumReference": "Global Success Grade 3 - Listening Comprehension & Deductions",
            "metadata": {"riddle": riddle, "answer": target}
        })

    # -------------------------------------------------------------
    # GAME 5: Cultural Discovery Quiz (30 items)
    # -------------------------------------------------------------
    culture_raw = [
        # Easy (10)
        ("What do Vietnamese children carry during Mid-Autumn Festival?", "Trẻ em Việt Nam rước gì đêm Trung Thu?", "Star lanterns", ["Star lanterns", "School bags", "Toy cars"], "easy"),
        ("What special round pastry is eaten under the full autumn moon?", "Bánh gì tròn đặc trưng đêm rằm Trung Thu?", "Mooncake", ["Mooncake", "Cupcake", "Pancake"], "easy"),
        ("What is Vietnam's national flower?", "Quốc hoa của Việt Nam là loài hoa nào?", "Lotus", ["Lotus", "Rose", "Daisy"], "easy"),
        ("What color is the star on the Vietnamese national flag?", "Ngôi sao trên cờ đỏ sao vàng có màu gì?", "Yellow", ["Yellow", "White", "Blue"], "easy"),
        ("What famous traditional costume do Vietnamese women wear?", "Trang phục truyền thống phụ nữ Việt Nam là gì?", "Ao Dai", ["Ao Dai", "Hanbok", "Kimono"], "easy"),
        ("What hot noodle soup is popular for breakfast in Vietnam?", "Món súp mì nước nổi tiếng cho bữa sáng là gì?", "Pho", ["Pho", "Spaghetti", "Ramen"], "easy"),
        ("What is the name of the capital city of Vietnam?", "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là gì?", "Hanoi", ["Hanoi", "Ho Chi Minh City", "Da Nang"], "easy"),
        ("What creature is believed to live in Hoan Kiem Lake?", "Sinh vật huyền thoại nào gắn liền với Hồ Gươm?", "Golden Turtle", ["Golden Turtle", "Dragon", "Phoenix"], "easy"),
        ("What famous bread sandwich is loved by international tourists?", "Món bánh mì kẹp giòn ngon nổi tiếng thế giới của Việt Nam là gì?", "Banh Mi", ["Banh Mi", "Burger", "Hotdog"], "easy"),
        ("What lion or dragon dance is performed during festivals for good luck?", "Điệu múa nào mang lại may mắn trong dịp lễ hội?", "Lion Dance", ["Lion Dance", "Ballet", "Tap Dance"], "easy"),
        # Medium (10)
        ("What square green cake is made during the Vietnamese Lunar New Year (Tet)?", "Bánh vuông màu xanh đặc trưng ngày Tết là gì?", "Banh Chung", ["Banh Chung", "Mooncake", "Banh Pia"], "medium"),
        ("What traditional art form features puppets performing on the water?", "Nghệ thuật dân gian nào có con rối biểu diễn trên mặt nước?", "Water Puppetry", ["Water Puppetry", "Shadow Play", "Circus"], "medium"),
        ("Which UNESCO natural wonder has thousands of emerald limestone islands?", "Kỳ quan thiên nhiên thế giới nào có hàng nghìn đảo đá vôi xanh biếc?", "Ha Long Bay", ["Ha Long Bay", "Ba Be Lake", "Nha Trang Bay"], "medium"),
        ("Which ancient town in central Vietnam is famous for its glowing lanterns?", "Phố cổ nào ở miền Trung nổi tiếng với đèn lồng lung linh?", "Hoi An", ["Hoi An", "Hue", "Da Lat"], "medium"),
        ("Which city is home to the historical Ben Thanh Market?", "Thành phố nào có chợ Bến Thành lịch sử?", "Ho Chi Minh City", ["Ho Chi Minh City", "Hanoi", "Hai Phong"], "medium"),
        ("What is the name of the longest cave system located in Quang Binh?", "Hệ thống hang động kỳ vĩ ở Quảng Bình là gì?", "Phong Nha - Ke Bang", ["Phong Nha - Ke Bang", "Trang An", "Tam Coc"], "medium"),
        ("What musical instrument has only one single string in Vietnam?", "Nhạc cụ dân tộc nào của Việt Nam chỉ có duy nhất một dây?", "Dan Bau (Monochord)", ["Dan Bau (Monochord)", "Guitar", "Violin"], "medium"),
        ("What do people burn during Tet to welcome ancestors?", "Người ta thắp gì trong dịp Tết để tưởng nhớ tổ tiên?", "Incense", ["Incense", "Paper", "Leaves"], "medium"),
        ("What fruit is known as the 'King of Fruits' grown in the southern gardens?", "Trái cây nào được mệnh danh là vua của các loài quả ở miệt vườn Nam Bộ?", "Durian", ["Durian", "Apple", "Grape"], "medium"),
        ("What is the biggest floating market in Can Tho city?", "Chợ nổi lớn nhất ở thành phố Cần Thơ là gì?", "Cai Rang", ["Cai Rang", "Nga Nam", "Phung Hiep"], "medium"),
        # Challenge (10)
        ("Which ancient Vietnamese king received the magical sword from the Golden Turtle?", "Vị vua nào đã nhận thanh gươm thần từ rùa vàng?", "King Le Loi", ["King Le Loi", "King Hung", "King Dinh"], "challenge"),
        ("What traditional painting style uses Do paper made from mulberry tree bark?", "Dòng tranh dân gian nào sử dụng giấy điệp làm từ vỏ cây dướng?", "Dong Ho folk painting", ["Dong Ho folk painting", "Oil painting", "Modern art"], "challenge"),
        ("Which UNESCO world heritage site was the imperial capital of the Nguyen Dynasty?", "Di sản văn hóa thế giới nào từng là kinh đô của triều Nguyễn?", "Hue Citadel", ["Hue Citadel", "Thang Long Citadel", "Hoi An"], "challenge"),
        ("What is the deepest natural canyon in Southeast Asia located in Ha Giang?", "Hẻm vực sâu nhất Đông Nam Á ở Hà Giang tên là gì?", "Tu San Canyon", ["Tu San Canyon", "Hai Van Pass", "Ma Pi Leng"], "challenge"),
        ("Which traditional craft village near Hanoi is world-famous for ceramics for 700 years?", "Làng nghề gốm sứ truyền thống nổi tiếng gần Hà Nội là làng nào?", "Bat Trang", ["Bat Trang", "Van Phuc", "Dong Ho"], "challenge"),
        ("Which mountain peak is recognized as the 'Roof of Indochina' at 3,143m?", "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương' cao 3.143m?", "Fansipan", ["Fansipan", "Ba Den", "Pu Si Lung"], "challenge"),
        ("What traditional tree blossom is displayed in northern homes during Tet?", "Loài hoa nào đặc trưng cho ngày Tết ở miền Bắc?", "Peach blossom (Hoa đào)", ["Peach blossom (Hoa đào)", "Apricot blossom", "Rose"], "challenge"),
        ("What yellow blossom is displayed in southern homes during Tet?", "Loài hoa màu vàng đặc trưng cho ngày Tết ở miền Nam?", "Yellow apricot blossom (Hoa mai)", ["Yellow apricot blossom (Hoa mai)", "Peach blossom", "Lotus"], "challenge"),
        ("Which UNESCO bios reserve in Ho Chi Minh City is called the 'green lung'?", "Khu dự trữ sinh quyển nào được ví như 'lá phổi xanh' của TP.HCM?", "Can Gio Mangrove Forest", ["Can Gio Mangrove Forest", "Cat Tien", "Cuc Phuong"], "challenge"),
        ("What is the special bronze drum from the ancient Dong Son culture called?", "Trống đồng cổ nổi tiếng của nền văn hóa Đông Sơn tên là gì?", "Dong Son Bronze Drum", ["Dong Son Bronze Drum", "Wooden Drum", "Ceramic Drum"], "challenge")
    ]
    for idx, (question, q_vi, correct, opts, diff) in enumerate(culture_raw, 1):
        q.append({
            "questionId": f"g3_clt_{idx:02d}",
            "grade": 3,
            "gameType": "cultural_quiz",
            "topic": "Vietnamese Cultural Discovery",
            "difficulty": diff,
            "prompt": question,
            "promptVi": q_vi,
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Correct! {correct} is a cherished part of Vietnamese culture.",
            "explanationVi": f"Chính xác! {correct} là nét đẹp văn hóa tiêu biểu của Việt Nam.",
            "imageAsset": "🏮",
            "audioPrompt": question,
            "curriculumReference": "Global Success Grade 3 - Cultural Exploration",
            "metadata": {"questionVi": q_vi, "answer": correct}
        })

    return q

print("Loaded Grade 3 question builder.")
