# scripts/questions_data_g2.py
# Grade 2 - Magical Backpack (Pre-A1 Beginner)
# 5 games x 30 questions = 150 questions

def get_grade2_questions():
    q = []
    
    # -------------------------------------------------------------
    # GAME 1: Memory Flip Cards (30 items)
    # -------------------------------------------------------------
    memory_raw = [
        # Easy (10)
        ("pencil", "Cây bút chì", "✏️", ["pencil", "pen", "ruler"], "Unit 5: In the Classroom", "easy"),
        ("ruler", "Cây thước kẻ", "📏", ["ruler", "eraser", "pencil"], "Unit 5: In the Classroom", "easy"),
        ("eraser", "Cục tẩy", "🧼", ["eraser", "ruler", "book"], "Unit 5: In the Classroom", "easy"),
        ("book", "Quyển sách", "📖", ["book", "bag", "pencil"], "Unit 5: In the Classroom", "easy"),
        ("pen", "Cây bút mực", "🖊️", ["pen", "pencil", "crayon"], "Unit 5: In the Classroom", "easy"),
        ("bag", "Chiếc cặp", "🎒", ["bag", "hat", "shoes"], "Unit 5: In the Classroom", "easy"),
        ("desk", "Bàn học", "🪑", ["desk", "chair", "bed"], "Unit 5: In the Classroom", "easy"),
        ("chair", "Cái ghế", "🪑", ["chair", "desk", "door"], "Unit 5: In the Classroom", "easy"),
        ("crayon", "Bút sáp màu", "🖍️", ["crayon", "pencil", "ruler"], "Unit 5: In the Classroom", "easy"),
        ("clock", "Đồng hồ treo tường", "⏰", ["clock", "watch", "bell"], "Unit 5: In the Classroom", "easy"),
        # Medium (10)
        ("shirt", "Áo sơ mi", "👔", ["shirt", "dress", "hat"], "Unit 7: My Clothes", "medium"),
        ("dress", "Chiếc váy xinh", "👗", ["dress", "skirt", "shirt"], "Unit 7: My Clothes", "medium"),
        ("shoes", "Đôi giày", "👟", ["shoes", "socks", "boots"], "Unit 7: My Clothes", "medium"),
        ("socks", "Đôi tất", "🧦", ["socks", "shoes", "gloves"], "Unit 7: My Clothes", "medium"),
        ("hat", "Chiếc mũ che nắng", "👒", ["hat", "cap", "bag"], "Unit 7: My Clothes", "medium"),
        ("shorts", "Quần soóc", "🩳", ["shorts", "pants", "skirt"], "Unit 7: My Clothes", "medium"),
        ("jacket", "Áo khoác", "🧥", ["jacket", "shirt", "coat"], "Unit 7: My Clothes", "medium"),
        ("bread", "Bánh mì giòn", "🥖", ["bread", "rice", "cake"], "Unit 1: At My Birthday Party", "medium"),
        ("milk", "Ly sữa tươi", "🥛", ["milk", "water", "juice"], "Unit 1: At My Birthday Party", "medium"),
        ("apple", "Quả táo đỏ", "🍎", ["apple", "banana", "orange"], "Unit 1: At My Birthday Party", "medium"),
        # Challenge (10)
        ("river", "Dòng sông êm đềm", "🏞️", ["river", "lake", "sea"], "Unit 4: In the Countryside", "challenge"),
        ("rainbow", "Cầu vồng rực rỡ", "🌈", ["rainbow", "cloud", "sun"], "Unit 4: In the Countryside", "challenge"),
        ("road", "Con đường làng", "🛣️", ["road", "street", "bridge"], "Unit 4: In the Countryside", "challenge"),
        ("sea", "Biển xanh bao la", "🌊", ["sea", "lake", "river"], "Unit 3: At the Seaside", "challenge"),
        ("sand", "Bãi cát trắng mịn", "🏖️", ["sand", "rock", "shell"], "Unit 3: At the Seaside", "challenge"),
        ("sail", "Cánh buồm đón gió", "⛵", ["sail", "boat", "ship"], "Unit 3: At the Seaside", "challenge"),
        ("sunflower", "Hoa hướng dương", "🌻", ["sunflower", "rose", "lotus"], "Unit 4: In the Countryside", "challenge"),
        ("butterfly", "Chú bướm xinh", "🦋", ["butterfly", "bee", "bird"], "Unit 2: In the Backyard", "challenge"),
        ("kitten", "Mèo con đáng yêu", "🐱", ["kitten", "puppy", "rabbit"], "Unit 2: In the Backyard", "challenge"),
        ("kite", "Cánh diều bay cao", "🪁", ["kite", "balloon", "plane"], "Unit 2: In the Backyard", "challenge")
    ]
    for idx, (word, vi, emoji, opts, curr, diff) in enumerate(memory_raw, 1):
        q.append({
            "questionId": f"g2_mem_{idx:02d}",
            "grade": 2,
            "gameType": "memory_flip",
            "topic": "Classroom & Daily Life Memory",
            "difficulty": diff,
            "prompt": f"Flip and match: Find '{word}'!",
            "promptVi": f"Lật thẻ tìm cặp từ tương ứng: {vi} ({word})",
            "answerOptions": opts,
            "correctAnswer": word,
            "explanation": f"Match found! '{word}' means '{vi}'.",
            "explanationVi": f"Đã ghép đúng! '{word}' nghĩa là '{vi}'.",
            "imageAsset": emoji,
            "audioPrompt": f"Can you find the {word}?",
            "curriculumReference": f"Global Success Grade 2 - {curr}",
            "metadata": {"pairWord": word, "pairImage": emoji, "meaningVi": vi}
        })

    # -------------------------------------------------------------
    # GAME 2: Word & Picture Match (30 items)
    # -------------------------------------------------------------
    match_raw = [
        # Easy (10)
        ("notebook", "Quyển vở ghi chép", "📓", ["notebook", "book", "pencil"], "easy"),
        ("pencil case", "Hộp bút", "👝", ["pencil case", "bag", "box"], "easy"),
        ("scissors", "Cái kéo", "✂️", ["scissors", "ruler", "pen"], "easy"),
        ("glue", "Lọ keo dán", "🧴", ["glue", "ink", "paint"], "easy"),
        ("table", "Cái bàn lớn", "🪵", ["table", "chair", "desk"], "easy"),
        ("window", "Cửa sổ", "🪟", ["window", "door", "wall"], "easy"),
        ("blackboard", "Bảng đen", "⬛", ["blackboard", "picture", "door"], "easy"),
        ("school yard", "Sân trường", "🏫", ["school yard", "classroom", "garden"], "easy"),
        ("teacher", "Cô giáo", "👩‍🏫", ["teacher", "student", "friend"], "easy"),
        ("classmate", "Bạn cùng lớp", "🧑‍🤝‍🧑", ["classmate", "teacher", "sister"], "easy"),
        # Medium (10)
        ("banana", "Quả chuối", "🍌", ["banana", "apple", "grape"], "medium"),
        ("orange", "Quả cam", "🍊", ["orange", "lemon", "apple"], "medium"),
        ("watermelon", "Quả dưa hấu", "🍉", ["watermelon", "melon", "grape"], "medium"),
        ("mango", "Quả xoài", "🥭", ["mango", "banana", "papaya"], "medium"),
        ("coconut", "Quả dừa", "🥥", ["coconut", "apple", "lime"], "medium"),
        ("noodles", "Bát mì/phở", "🍜", ["noodles", "rice", "bread"], "medium"),
        ("rice", "Bát cơm trắng", "🍚", ["rice", "noodles", "soup"], "medium"),
        ("egg", "Quả trứng", "🥚", ["egg", "cake", "bread"], "medium"),
        ("soup", "Bát canh", "🥣", ["soup", "tea", "milk"], "medium"),
        ("juice", "Nước ép hoa quả", "🧃", ["juice", "water", "milk"], "medium"),
        # Challenge (10)
        ("living room", "Phòng khách", "🛋️", ["living room", "bedroom", "kitchen"], "challenge"),
        ("bedroom", "Phòng ngủ", "🛏️", ["bedroom", "bathroom", "kitchen"], "challenge"),
        ("kitchen", "Phòng bếp", "🍳", ["kitchen", "living room", "garden"], "challenge"),
        ("bathroom", "Phòng tắm", "🚿", ["bathroom", "bedroom", "yard"], "challenge"),
        ("garden", "Khu vườn hoa", "🏡", ["garden", "field", "park"], "challenge"),
        ("playground", "Khu vui chơi", "🛝", ["playground", "classroom", "library"], "challenge"),
        ("library", "Thư viện trường", "📚", ["library", "shop", "hall"], "challenge"),
        ("guitar", "Cây đàn ghi-ta", "🎸", ["guitar", "piano", "drum"], "challenge"),
        ("piano", "Đàn dương cầm", "🎹", ["piano", "guitar", "bell"], "challenge"),
        ("camera", "Máy chụp ảnh", "📷", ["camera", "phone", "watch"], "challenge")
    ]
    for idx, (word, vi, emoji, opts, diff) in enumerate(match_raw, 1):
        q.append({
            "questionId": f"g2_wpm_{idx:02d}",
            "grade": 2,
            "gameType": "word_picture_match",
            "topic": "Vocabulary & Objects Match",
            "difficulty": diff,
            "prompt": f"Connect the word '{word}' to its picture!",
            "promptVi": f"Nối từ '{word}' với hình ảnh tương ứng ({vi})",
            "answerOptions": opts,
            "correctAnswer": word,
            "explanation": f"Correct connection! '{word}' corresponds to '{vi}'.",
            "explanationVi": f"Nối chính xác! '{word}' tương ứng với '{vi}'.",
            "imageAsset": emoji,
            "audioPrompt": f"Connect {word} to the picture!",
            "curriculumReference": "Global Success Grade 2 - Vocabulary Connections",
            "metadata": {"matchWord": word, "emoji": emoji, "vi": vi}
        })

    # -------------------------------------------------------------
    # GAME 3: Magical Sentence Builder (30 items)
    # -------------------------------------------------------------
    sentence_raw = [
        # Easy (10)
        ("I like apples.", "Tôi thích những quả táo.", ["I", "like", "apples."], "Unit 1", "easy"),
        ("This is my bag.", "Đây là chiếc cặp của tôi.", ["This", "is", "my", "bag."], "Unit 5", "easy"),
        ("I have a cat.", "Tôi có một chú mèo.", ["I", "have", "a", "cat."], "Unit 2", "easy"),
        ("It is a red pen.", "Nó là một cây bút đỏ.", ["It", "is", "a", "red", "pen."], "Unit 5", "easy"),
        ("She has two dogs.", "Cô ấy có hai chú chó.", ["She", "has", "two", "dogs."], "Unit 2", "easy"),
        ("We like milk.", "Chúng tôi thích sữa.", ["We", "like", "milk."], "Unit 1", "easy"),
        ("I can swim.", "Tôi biết bơi.", ["I", "can", "swim."], "Unit 3", "easy"),
        ("He is my brother.", "Cậu ấy là anh trai tôi.", ["He", "is", "my", "brother."], "Unit 6", "easy"),
        ("This is my book.", "Đây là quyển sách của tôi.", ["This", "is", "my", "book."], "Unit 5", "easy"),
        ("I see a bird.", "Tôi nhìn thấy một chú chim.", ["I", "see", "a", "bird."], "Unit 4", "easy"),
        # Medium (10)
        ("I have a blue ruler.", "Tôi có một cây thước màu xanh.", ["I", "have", "a", "blue", "ruler."], "Unit 5", "medium"),
        ("She wears a pink dress.", "Cô ấy mặc một chiếc váy màu hồng.", ["She", "wears", "a", "pink", "dress."], "Unit 7", "medium"),
        ("The dog is under the desk.", "Chú chó ở dưới bàn học.", ["The", "dog", "is", "under", "the", "desk."], "Unit 5", "medium"),
        ("I ride my bicycle to school.", "Tôi đạp xe đạp tới trường.", ["I", "ride", "my", "bicycle", "to", "school."], "Unit 4", "medium"),
        ("We play in the garden.", "Chúng tôi chơi đùa trong vườn.", ["We", "play", "in", "the", "garden."], "Unit 2", "medium"),
        ("Look at the beautiful rainbow.", "Hãy nhìn cầu vồng tuyệt đẹp kìa.", ["Look", "at", "the", "beautiful", "rainbow."], "Unit 4", "medium"),
        ("He has three yellow pencils.", "Cậu ấy có ba cây bút chì vàng.", ["He", "has", "three", "yellow", "pencils."], "Unit 5", "medium"),
        ("I can sing English songs.", "Tôi có thể hát các bài hát tiếng Anh.", ["I", "can", "sing", "English", "songs."], "Unit 8", "medium"),
        ("The cat sleeps on the bed.", "Chú mèo ngủ trên giường.", ["The", "cat", "sleeps", "on", "the", "bed."], "Unit 2", "medium"),
        ("My mother cooks delicious food.", "Mẹ tôi nấu thức ăn rất ngon.", ["My", "mother", "cooks", "delicious", "food."], "Unit 1", "medium"),
        # Challenge (10)
        ("There is a big boat on the river.", "Có một con thuyền lớn trên sông.", ["There", "is", "a", "big", "boat", "on", "the", "river."], "Unit 4", "challenge"),
        ("I want to visit the seaside in summer.", "Tôi muốn đi biển vào mùa hè.", ["I", "want", "to", "visit", "the", "seaside", "in", "summer."], "Unit 3", "challenge"),
        ("She opens her backpack to get a notebook.", "Cô ấy mở cặp để lấy quyển vở.", ["She", "opens", "her", "backpack", "to", "get", "a", "notebook."], "Unit 5", "challenge"),
        ("The yellow sun shines brightly in the sky.", "Mặt trời vàng chiếu sáng rực rỡ trên bầu trời.", ["The", "yellow", "sun", "shines", "brightly", "in", "the", "sky."], "Unit 3", "challenge"),
        ("My family eats breakfast together every morning.", "Gia đình tôi ăn sáng cùng nhau mỗi sáng.", ["My", "family", "eats", "breakfast", "together", "every", "morning."], "Unit 1", "challenge"),
        ("Birds are singing happily on the tall tree.", "Những chú chim đang hót líu lo trên cây cao.", ["Birds", "are", "singing", "happily", "on", "the", "tall", "tree."], "Unit 4", "challenge"),
        ("Can you help me find my missing eraser?", "Bạn có thể giúp tôi tìm cục tẩy bị thất lạc không?", ["Can", "you", "help", "me", "find", "my", "missing", "eraser?"], "Unit 5", "challenge"),
        ("Vietnamese students love learning English with Ms. Trang.", "Học sinh Việt Nam rất thích học tiếng Anh cùng cô Trang.", ["Vietnamese", "students", "love", "learning", "English", "with", "Ms.", "Trang."], "Unit 8", "challenge"),
        ("We build sandcastles on the golden beach.", "Chúng tôi xây lâu đài cát trên bãi biển vàng.", ["We", "build", "sandcastles", "on", "the", "golden", "beach."], "Unit 3", "challenge"),
        ("Green trees make the school yard cool and fresh.", "Những cây xanh làm cho sân trường râm mát và trong lành.", ["Green", "trees", "make", "the", "school", "yard", "cool", "and", "fresh."], "Unit 5", "challenge")
    ]
    for idx, (sent, vi, tokens, curr, diff) in enumerate(sentence_raw, 1):
        q.append({
            "questionId": f"g2_snb_{idx:02d}",
            "grade": 2,
            "gameType": "sentence_builder",
            "topic": "Sentence Construction & Syntax",
            "difficulty": diff,
            "prompt": f"Build the sentence: '{sent}'",
            "promptVi": f"Xếp các khối từ thành câu: '{vi}'",
            "answerOptions": tokens,
            "correctAnswer": sent,
            "explanation": f"Perfect sentence! '{sent}' ({vi}).",
            "explanationVi": f"Câu hoàn hảo! '{sent}' ({vi}).",
            "imageAsset": "🧩",
            "audioPrompt": sent,
            "curriculumReference": f"Global Success Grade 2 - {curr}",
            "metadata": {"tokens": tokens, "fullSentence": sent, "translation": vi}
        })

    # -------------------------------------------------------------
    # GAME 4: Listening Treasure Hunt (30 items)
    # -------------------------------------------------------------
    hunt_raw = [
        # Easy (10)
        ("red backpack", "Look inside the red backpack!", "Chiếc ba lô màu đỏ", "🎒", ["red backpack", "blue box", "green desk"], "easy"),
        ("blue box", "Open the blue wooden box!", "Chiếc hộp gỗ màu xanh", "📦", ["blue box", "yellow bag", "black hat"], "easy"),
        ("wooden desk", "Check under the wooden desk!", "Dưới bàn học gỗ", "🪵", ["wooden desk", "white door", "pink chair"], "easy"),
        ("yellow hat", "Find the shiny yellow hat!", "Chiếc mũ màu vàng", "👒", ["yellow hat", "red shirt", "blue socks"], "easy"),
        ("green chair", "Look behind the green chair!", "Đằng sau chiếc ghế xanh", "🪑", ["green chair", "black desk", "white bed"], "easy"),
        ("pencil case", "The silver key is in the pencil case!", "Trong hộp bút", "👝", ["pencil case", "book", "ruler"], "easy"),
        ("school bag", "The gold coin is inside the school bag!", "Trong cặp sách", "🎒", ["school bag", "hat", "shoes"], "easy"),
        ("white door", "The secret mark is on the white door!", "Trên cánh cửa trắng", "🚪", ["white door", "green tree", "blue desk"], "easy"),
        ("tall tree", "Look up at the tall green tree!", "Trên cây cổ thụ cao", "🌳", ["tall tree", "flower", "grass"], "easy"),
        ("flower pot", "The clue is near the yellow flower pot!", "Bên cạnh chậu hoa vàng", "🪴", ["flower pot", "bench", "fence"], "easy"),
        # Medium (10)
        ("bookshelf", "Search the third shelf of the bookshelf!", "Tầng thứ ba của giá sách", "📚", ["bookshelf", "table", "clock"], "medium"),
        ("teacher's desk", "The golden star rests on the teacher's desk!", "Trên bàn của cô giáo", "👩‍🏫", ["teacher's desk", "playground", "door"], "medium"),
        ("clock", "The treasure map is pinned near the wall clock!", "Gần chiếc đồng hồ treo tường", "⏰", ["clock", "window", "blackboard"], "medium"),
        ("blackboard", "A secret clue is written on the blackboard!", "Trên bảng đen lớp học", "⬛", ["blackboard", "door", "floor"], "medium"),
        ("window sill", "Find the crystal on the sunny window sill!", "Bên bậu cửa sổ đón nắng", "🪟", ["window sill", "desk", "closet"], "medium"),
        ("playground bench", "Look under the wooden playground bench!", "Dưới ghế dài sân trường", "🪑", ["playground bench", "tree", "gate"], "medium"),
        ("library corner", "The ancient scroll is in the quiet library corner!", "Góc thư viện yên tĩnh", "📖", ["library corner", "canteen", "gym"], "medium"),
        ("art table", "Find the colourful brush on the art table!", "Trên bàn mỹ thuật", "🎨", ["art table", "computer", "desk"], "medium"),
        ("music room", "The magic bell is kept inside the music room!", "Trong phòng âm nhạc", "🎵", ["music room", "hallway", "office"], "medium"),
        ("garden gate", "Unlock the silver lock at the garden gate!", "Ổ khóa ở cổng vườn hoa", "🚪", ["garden gate", "tree", "pond"], "medium"),
        # Challenge (10)
        ("science lab", "Find the glowing compass in the science lab!", "Chiếc la bàn trong phòng thí nghiệm", "🔬", ["science lab", "canteen", "playground"], "challenge"),
        ("lotus pond", "Look for the floating bottle in the lotus pond!", "Chiếc lọ trôi trên hồ sen", "🪷", ["lotus pond", "river", "well"], "challenge"),
        ("heritage museum", "The mystery badge is displayed in the heritage room!", "Huy hiệu trong phòng truyền thống", "🏛️", ["heritage museum", "library", "corridor"], "challenge"),
        ("flag pole", "Gather near the national flag pole!", "Gần cột cờ Tổ quốc", "🚩", ["flag pole", "gate", "tree"], "challenge"),
        ("rooftop garden", "The telescope is mounted on the rooftop garden!", "Kính viễn vọng trên vườn sân thượng", "🔭", ["rooftop garden", "balcony", "stair"], "challenge"),
        ("wooden bridge", "Cross the stream over the small wooden bridge!", "Cây cầu gỗ nhỏ bắc qua suối", "🌉", ["wooden bridge", "road", "tunnel"], "challenge"),
        ("old stone wall", "Inspect the mossy carving on the old stone wall!", "Bức tường đá phủ rêu phong", "🧱", ["old stone wall", "wooden fence", "hedge"], "challenge"),
        ("bamboo path", "Follow the lantern light along the bamboo path!", "Lối đi rợp bóng tre", "🎋", ["bamboo path", "highway", "hall"], "challenge"),
        ("coconut shade", "Rest and find the treasure under the coconut shade!", "Dưới bóng râm cây dừa", "🥥", ["coconut shade", "umbrella", "tent"], "challenge"),
        ("compass case", "The final coordinates are stored in the compass case!", "Hộp đựng la bàn thám hiểm", "🧭", ["compass case", "backpack", "pouch"], "challenge")
    ]
    for idx, (target, clue, vi, emoji, opts, diff) in enumerate(hunt_raw, 1):
        q.append({
            "questionId": f"g2_hnt_{idx:02d}",
            "grade": 2,
            "gameType": "treasure_hunt",
            "topic": "Listening Clues & Locations",
            "difficulty": diff,
            "prompt": f"Listen to the clue: '{clue}'",
            "promptVi": f"Nghe gợi ý tìm kho báu: '{clue}' ({vi})",
            "answerOptions": opts,
            "correctAnswer": target,
            "explanation": f"Treasure found! Clue directed to: {target} ({vi}).",
            "explanationVi": f"Đã tìm thấy kho báu! Gợi ý dẫn đến: {target} ({vi}).",
            "imageAsset": emoji,
            "audioPrompt": clue,
            "curriculumReference": "Global Success Grade 2 - Prepositions & Location Listening",
            "metadata": {"location": target, "clue": clue, "emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 5: Vocabulary Maze (30 items)
    # -------------------------------------------------------------
    maze_raw = [
        # Easy (10)
        ("turn left", "Để rẽ trái, chọn từ có nghĩa 'bút chì'", "pencil", ["pencil", "chair", "shoes"], "easy"),
        ("turn right", "Để rẽ phải, chọn từ có nghĩa 'quyển sách'", "book", ["book", "apple", "hat"], "easy"),
        ("go straight", "Để đi thẳng, chọn từ chỉ 'quả táo'", "apple", ["apple", "ruler", "milk"], "easy"),
        ("jump", "Để nhảy qua vũng nước, chọn từ chỉ 'chú mèo'", "cat", ["cat", "desk", "bread"], "easy"),
        ("open gate", "Để mở cổng gỗ, chọn từ chỉ 'cánh cửa'", "door", ["door", "tree", "ball"], "easy"),
        ("step up", "Để bước lên bậc đá, chọn từ chỉ 'màu xanh lá'", "green", ["green", "dog", "pen"], "easy"),
        ("climb ladder", "Để leo thang dây, chọn từ chỉ 'màu vàng'", "yellow", ["yellow", "red", "cat"], "easy"),
        ("cross bridge", "Để qua cầu khỉ, chọn từ chỉ 'dòng sông'", "river", ["river", "road", "cake"], "easy"),
        ("ring bell", "Để rung chuông bí mật, chọn từ chỉ 'số 5'", "five", ["five", "nine", "two"], "easy"),
        ("open chest", "Để mở rương vàng, chọn từ chỉ 'ngôi sao'", "star", ["star", "sun", "cloud"], "easy"),
        # Medium (10)
        ("bamboo path", "Lối vào rừng trúc: chọn từ có nghĩa 'cây thước'", "ruler", ["ruler", "eraser", "pencil"], "medium"),
        ("flower meadow", "Băng qua đồng hoa: chọn từ có nghĩa 'bướm xinh'", "butterfly", ["butterfly", "bee", "bird"], "medium"),
        ("lotus pond", "Vượt qua hồ sen: chọn từ có nghĩa 'chú vịt'", "duck", ["duck", "fish", "frog"], "medium"),
        ("pine hill", "Lên đồi thông: chọn từ chỉ 'bộ quần áo'", "clothes", ["clothes", "food", "toys"], "medium"),
        ("secret cave", "Vào hang động: chọn từ có nghĩa 'cây đuốc sáng'", "torch", ["torch", "knife", "rope"], "medium"),
        ("river bank", "Dọc theo bờ sông: chọn từ có nghĩa 'chiếc thuyền'", "boat", ["boat", "car", "train"], "medium"),
        ("village road", "Đường làng quê: chọn từ có nghĩa 'xe đạp'", "bicycle", ["bicycle", "plane", "horse"], "medium"),
        ("sunny beach", "Bãi biển đầy nắng: chọn từ có nghĩa 'cát trắng'", "sand", ["sand", "rock", "grass"], "medium"),
        ("rainbow arch", "Cổng vòm cầu vồng: chọn từ có nghĩa 'bầu trời'", "sky", ["sky", "sea", "earth"], "medium"),
        ("old castle", "Lâu đài cổ tích: chọn từ có nghĩa 'vương miện'", "crown", ["crown", "helmet", "cap"], "medium"),
        # Challenge (10)
        ("maze center", "Tâm điểm mê cung: chọn từ có nghĩa 'la bàn'", "compass", ["compass", "map", "clock"], "challenge"),
        ("crystal chamber", "Căn phòng pha lê: chọn từ có nghĩa 'viên ngọc quý'", "gem", ["gem", "coin", "stone"], "challenge"),
        ("dragon peak", "Đỉnh núi Rồng: chọn từ có nghĩa 'đám mây trắng'", "cloud", ["cloud", "smoke", "fog"], "challenge"),
        ("whispering wind", "Gió thì thầm: chọn từ có nghĩa 'tiếng hát'", "singing", ["singing", "talking", "crying"], "challenge"),
        ("lantern avenue", "Đại lộ đèn lồng: chọn từ có nghĩa 'lễ hội'", "festival", ["festival", "meeting", "class"], "challenge"),
        ("golden gate", "Cổng thành dát vàng: chọn từ có nghĩa 'chiến thắng'", "victory", ["victory", "loss", "start"], "challenge"),
        ("star observatory", "Đài thiên văn: chọn từ có nghĩa 'kính thiên văn'", "telescope", ["telescope", "microscope", "camera"], "challenge"),
        ("emerald oasis", "Ốc đảo ngọc lục bảo: chọn từ có nghĩa 'nguồn nước'", "water", ["water", "juice", "oil"], "challenge"),
        ("explorer's camp", "Doanh trại thám hiểm: chọn từ có nghĩa 'ba lô'", "backpack", ["backpack", "suitcase", "basket"], "challenge"),
        ("victory pedestal", "Bục vinh quang: chọn từ có nghĩa 'nhà vô địch'", "champion", ["champion", "runner", "beginner"], "challenge")
    ]
    for idx, (step, vi, correct, opts, diff) in enumerate(maze_raw, 1):
        q.append({
            "questionId": f"g2_mze_{idx:02d}",
            "grade": 2,
            "gameType": "vocabulary_maze",
            "topic": "Maze Navigation & Word Gates",
            "difficulty": diff,
            "prompt": f"Maze Crossroads ({step}): Pick the correct word to advance!",
            "promptVi": f"Ngã rẽ mê cung: {vi}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"The gate opens! '{correct}' moves you through the {step}.",
            "explanationVi": f"Cổng mở ra! '{correct}' giúp con vượt qua {step}.",
            "imageAsset": "🧭",
            "audioPrompt": f"Choose {correct} to pass the gate!",
            "curriculumReference": "Global Success Grade 2 - Vocabulary Maze & Action Directions",
            "metadata": {"step": step, "gateVi": vi}
        })

    return q

print("Loaded Grade 2 question builder.")
