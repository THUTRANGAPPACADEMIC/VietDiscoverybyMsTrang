# scripts/questions_data_g1.py
# Grade 1 - Little Explorer (Pre-A1 Starter)
# 5 games x 30 questions = 150 questions

def get_grade1_questions():
    q = []
    
    # -------------------------------------------------------------
    # GAME 1: Picture Pop (30 items)
    # -------------------------------------------------------------
    pop_raw = [
        # Easy (10)
        ("apple", "Quả táo", "🍎", ["apple", "banana", "cat"], "Unit 3: At the Street Market", "easy"),
        ("banana", "Quả chuối", "🍌", ["banana", "apple", "dog"], "Unit 3: At the Street Market", "easy"),
        ("cat", "Chú mèo", "🐱", ["cat", "dog", "duck"], "Unit 2: In the Dining Room", "easy"),
        ("dog", "Chú chó", "🐶", ["dog", "cat", "bird"], "Unit 4: In the Bedroom", "easy"),
        ("ball", "Quả bóng", "⚽", ["ball", "car", "doll"], "Unit 1: In the Playground", "easy"),
        ("book", "Quyển sách", "📖", ["book", "pencil", "hat"], "Unit 1: In the Playground", "easy"),
        ("car", "Xe ô tô", "🚗", ["car", "bike", "boat"], "Unit 2: In the Dining Room", "easy"),
        ("cake", "Bánh ngọt", "🍰", ["cake", "bread", "milk"], "Unit 2: In the Dining Room", "easy"),
        ("duck", "Chú vịt", "🦆", ["duck", "fish", "frog"], "Unit 4: In the Bedroom", "easy"),
        ("fish", "Chú cá", "🐟", ["fish", "bird", "cat"], "Unit 5: At the Fish Shop", "easy"),
        # Medium (10)
        ("bird", "Chú chim", "🐦", ["bird", "duck", "fox"], "Unit 16: My Pets", "medium"),
        ("frog", "Chú ếch", "🐸", ["frog", "fish", "dog"], "Unit 5: At the Fish Shop", "medium"),
        ("fox", "Chú cáo", "🦊", ["fox", "wolf", "cat"], "Unit 5: At the Fish Shop", "medium"),
        ("hat", "Cái mũ", "👒", ["hat", "bag", "cup"], "Unit 3: At the Street Market", "medium"),
        ("bag", "Cái cặp", "🎒", ["bag", "hat", "book"], "Unit 3: At the Street Market", "medium"),
        ("cup", "Cái cốc", "🍵", ["cup", "cake", "car"], "Unit 2: In the Dining Room", "medium"),
        ("door", "Cánh cửa", "🚪", ["door", "desk", "bed"], "Unit 4: In the Bedroom", "medium"),
        ("desk", "Bàn học", "🪵", ["desk", "door", "chair"], "Unit 4: In the Bedroom", "medium"),
        ("bike", "Xe đạp", "🚲", ["bike", "car", "bus"], "Unit 1: In the Playground", "medium"),
        ("boy", "Cậu bé", "👦", ["boy", "girl", "baby"], "Unit 1: In the Playground", "medium"),
        # Challenge (10)
        ("doll", "Búp bê", "🪆", ["doll", "robot", "ball"], "Unit 17: Our Toys", "challenge"),
        ("robot", "Người máy", "🤖", ["robot", "car", "doll"], "Unit 17: Our Toys", "challenge"),
        ("kite", "Cái diều", "🪁", ["kite", "ball", "plane"], "Unit 17: Our Toys", "challenge"),
        ("milk", "Hộp sữa", "🥛", ["milk", "water", "tea"], "Unit 2: In the Dining Room", "challenge"),
        ("sun", "Mặt trời", "☀️", ["sun", "star", "moon"], "Unit 1: In the Playground", "challenge"),
        ("star", "Ngôi sao", "⭐", ["star", "sun", "cloud"], "Unit 1: In the Playground", "challenge"),
        ("tree", "Cái cây", "🌳", ["tree", "flower", "leaf"], "Unit 1: In the Playground", "challenge"),
        ("flower", "Bông hoa", "🌸", ["flower", "tree", "grass"], "Unit 1: In the Playground", "challenge"),
        ("pencil", "Bút chì", "✏️", ["pencil", "book", "bag"], "Unit 1: In the Playground", "challenge"),
        ("teddy bear", "Gấu bông", "🧸", ["teddy bear", "doll", "robot"], "Unit 17: Our Toys", "challenge")
    ]
    for idx, (word, vi, emoji, opts, curr, diff) in enumerate(pop_raw, 1):
        q.append({
            "questionId": f"g1_pop_{idx:02d}",
            "grade": 1,
            "gameType": "picture_pop",
            "topic": "Early Phonics & Words",
            "difficulty": diff,
            "prompt": f"Listen and tap the {word}!",
            "promptVi": f"Nghe và chạm vào hình: {vi}",
            "answerOptions": opts,
            "correctAnswer": word,
            "explanation": f"Awesome! '{word}' is '{vi}'.",
            "explanationVi": f"Tuyệt vời! '{word}' nghĩa là '{vi}'.",
            "imageAsset": emoji,
            "audioPrompt": f"Tap the {word}!",
            "curriculumReference": f"Global Success Grade 1 - {curr}",
            "metadata": {"emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 2: Animal Friends (30 items)
    # -------------------------------------------------------------
    animals_raw = [
        # Easy (10)
        ("cat", "Meow meow!", "Chú mèo", "🐱", ["cat", "dog", "cow"], "Unit 2", "easy"),
        ("dog", "Woof woof!", "Chú chó", "🐶", ["dog", "cat", "duck"], "Unit 4", "easy"),
        ("duck", "Quack quack!", "Chú vịt", "🦆", ["duck", "chicken", "bird"], "Unit 4", "easy"),
        ("bird", "Tweet tweet!", "Chú chim", "🐦", ["bird", "bat", "fish"], "Unit 16", "easy"),
        ("fish", "Blub blub!", "Chú cá", "🐟", ["fish", "frog", "duck"], "Unit 5", "easy"),
        ("frog", "Ribbit ribbit!", "Chú ếch", "🐸", ["frog", "fish", "fox"], "Unit 5", "easy"),
        ("cow", "Moo moo!", "Con bò", "🐮", ["cow", "horse", "pig"], "Unit 16", "easy"),
        ("pig", "Oink oink!", "Con lợn", "🐷", ["pig", "cow", "sheep"], "Unit 16", "easy"),
        ("lion", "Roar!", "Sư tử dũng mãnh", "🦁", ["lion", "tiger", "bear"], "Unit 20", "easy"),
        ("monkey", "Ooh ooh aah aah!", "Chú khỉ tinh nghịch", "🐒", ["monkey", "panda", "rabbit"], "Unit 20", "easy"),
        # Medium (10)
        ("tiger", "Grrr!", "Chú hổ vằn", "🐯", ["tiger", "lion", "cat"], "Unit 20", "medium"),
        ("elephant", "Trumpet!", "Chú voi to lớn", "🐘", ["elephant", "rhino", "hippo"], "Unit 20", "medium"),
        ("bear", "Growl!", "Chú gấu", "🐻", ["bear", "lion", "panda"], "Unit 20", "medium"),
        ("rabbit", "Hop hop!", "Chú thỏ trắng", "🐰", ["rabbit", "mouse", "cat"], "Unit 16", "medium"),
        ("horse", "Neigh!", "Chú ngựa", "🐴", ["horse", "cow", "donkey"], "Unit 16", "medium"),
        ("sheep", "Baa baa!", "Chú cừu", "🐑", ["sheep", "goat", "cow"], "Unit 16", "medium"),
        ("chicken", "Cluck cluck!", "Chú gà", "🐔", ["chicken", "duck", "bird"], "Unit 16", "medium"),
        ("panda", "Munch munch!", "Gấu trúc", "🐼", ["panda", "bear", "koala"], "Unit 20", "medium"),
        ("mouse", "Squeak squeak!", "Chú chuột nhắt", "🐭", ["mouse", "cat", "rabbit"], "Unit 16", "medium"),
        ("fox", "Yip yip!", "Chú cáo thông minh", "🦊", ["fox", "wolf", "dog"], "Unit 5", "medium"),
        # Challenge (10)
        ("dolphin", "Click click!", "Cá heo thông minh", "🐬", ["dolphin", "whale", "shark"], "Unit 20", "challenge"),
        ("whale", "Whoosh!", "Cá voi khổng lồ", "🐋", ["whale", "dolphin", "fish"], "Unit 20", "challenge"),
        ("zebra", "Gallop!", "Ngựa vằn", "🦓", ["zebra", "horse", "tiger"], "Unit 20", "challenge"),
        ("giraffe", "Tall neck!", "Hươu cao cổ", "🦒", ["giraffe", "zebra", "horse"], "Unit 20", "challenge"),
        ("penguin", "Waddle waddle!", "Chim cánh cụt", "🐧", ["penguin", "duck", "bird"], "Unit 20", "challenge"),
        ("kangaroo", "Boing boing!", "Chuột túi nhảy xa", "🦘", ["kangaroo", "rabbit", "deer"], "Unit 20", "challenge"),
        ("bee", "Buzz buzz!", "Chú ong chăm chỉ", "🐝", ["bee", "butterfly", "ant"], "Unit 16", "challenge"),
        ("butterfly", "Flutter flutter!", "Bướm xinh", "🦋", ["butterfly", "bee", "bird"], "Unit 16", "challenge"),
        ("owl", "Hoo hoo!", "Cú mèo thông thái", "🦉", ["owl", "eagle", "bird"], "Unit 20", "challenge"),
        ("turtle", "Slow and steady!", "Rùa nhỏ", "🐢", ["turtle", "frog", "lizard"], "Unit 16", "challenge")
    ]
    for idx, (anim, snd, vi, emoji, opts, curr, diff) in enumerate(animals_raw, 1):
        q.append({
            "questionId": f"g1_ani_{idx:02d}",
            "grade": 1,
            "gameType": "animal_friends",
            "topic": "Animals & Nature",
            "difficulty": diff,
            "prompt": f"Which animal says: '{snd}'?",
            "promptVi": f"Đố bé con vật nào kêu: '{snd}'? ({vi})",
            "answerOptions": opts,
            "correctAnswer": anim,
            "explanation": f"The {anim} makes the sound '{snd}'! It means '{vi}'.",
            "explanationVi": f"Chính xác! Con '{anim}' kêu '{snd}'. Đó là '{vi}'.",
            "imageAsset": emoji,
            "audioPrompt": f"Which animal says {snd}? It is the {anim}!",
            "curriculumReference": f"Global Success Grade 1 - {curr}",
            "metadata": {"sound": snd, "emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 3: Color Magic (30 items)
    # -------------------------------------------------------------
    colors_raw = [
        # Easy (10)
        ("red", "Red apple", "Màu đỏ", "🍎", ["red", "blue", "yellow"], "Unit 9: Colours", "easy"),
        ("blue", "Blue sky", "Màu xanh dương", "🌊", ["blue", "green", "red"], "Unit 9: Colours", "easy"),
        ("yellow", "Yellow sun", "Màu vàng", "☀️", ["yellow", "orange", "pink"], "Unit 9: Colours", "easy"),
        ("green", "Green leaf", "Màu xanh lá", "🍃", ["green", "blue", "brown"], "Unit 9: Colours", "easy"),
        ("pink", "Pink flower", "Màu hồng", "🌸", ["pink", "purple", "red"], "Unit 9: Colours", "easy"),
        ("orange", "Orange fruit", "Màu cam", "🍊", ["orange", "yellow", "red"], "Unit 9: Colours", "easy"),
        ("purple", "Purple grape", "Màu tím", "🍇", ["purple", "blue", "pink"], "Unit 9: Colours", "easy"),
        ("white", "White cloud", "Màu trắng", "☁️", ["white", "black", "grey"], "Unit 9: Colours", "easy"),
        ("black", "Black cat", "Màu đen", "🐈‍⬛", ["black", "white", "brown"], "Unit 9: Colours", "easy"),
        ("brown", "Brown bear", "Màu nâu", "🐻", ["brown", "black", "orange"], "Unit 9: Colours", "easy"),
        # Medium (10)
        ("red", "Red fire truck", "Chiếc xe cứu hỏa màu đỏ", "🚒", ["red", "yellow", "blue"], "Unit 9", "medium"),
        ("green", "Green frog", "Chú ếch màu xanh lá", "🐸", ["green", "brown", "pink"], "Unit 9", "medium"),
        ("yellow", "Yellow star", "Ngôi sao màu vàng", "⭐", ["yellow", "white", "red"], "Unit 9", "medium"),
        ("blue", "Blue ocean", "Đại dương màu xanh biếc", "🐳", ["blue", "green", "purple"], "Unit 9", "medium"),
        ("pink", "Pink candy", "Viên kẹo ngọt màu hồng", "🍬", ["pink", "orange", "yellow"], "Unit 9", "medium"),
        ("orange", "Orange carrot", "Củ cà rốt màu cam", "🥕", ["orange", "red", "yellow"], "Unit 9", "medium"),
        ("purple", "Purple balloon", "Bóng bay màu tím", "🎈", ["purple", "blue", "red"], "Unit 9", "medium"),
        ("white", "White snowman", "Người tuyết trắng tinh", "⛄", ["white", "grey", "blue"], "Unit 9", "medium"),
        ("black", "Black hat", "Chiếc mũ ảo thuật màu đen", "🎩", ["black", "brown", "blue"], "Unit 9", "medium"),
        ("brown", "Brown chocolate", "Thanh sô cô la màu nâu", "🍫", ["brown", "black", "orange"], "Unit 9", "medium"),
        # Challenge (10)
        ("gold", "Golden crown", "Vương miện vàng lấp lánh", "👑", ["gold", "silver", "bronze"], "Unit 9", "challenge"),
        ("silver", "Silver coin", "Đồng xu bạc sáng bóng", "🪙", ["silver", "gold", "copper"], "Unit 9", "challenge"),
        ("rainbow", "Rainbow in sky", "Cầu vồng bảy sắc", "🌈", ["rainbow", "cloud", "sun"], "Unit 9", "challenge"),
        ("red", "Red strawberry", "Quả dâu tây đỏ mọng", "🍓", ["red", "purple", "green"], "Unit 9", "challenge"),
        ("yellow", "Yellow cheese", "Miếng phô mai màu vàng", "🧀", ["yellow", "white", "orange"], "Unit 9", "challenge"),
        ("green", "Green cucumber", "Quả dưa chuột xanh giòn", "🥒", ["green", "yellow", "red"], "Unit 9", "challenge"),
        ("blue", "Blue butterfly", "Cánh bướm xanh biếc", "🦋", ["blue", "purple", "pink"], "Unit 9", "challenge"),
        ("purple", "Purple eggplant", "Quả cà tím", "🍆", ["purple", "black", "green"], "Unit 9", "challenge"),
        ("pink", "Pink flamingos", "Chim hồng hạc xinh đẹp", "🦩", ["pink", "white", "red"], "Unit 9", "challenge"),
        ("orange", "Orange basketball", "Quả bóng rổ màu cam", "🏀", ["orange", "brown", "red"], "Unit 9", "challenge")
    ]
    for idx, (color, obj, vi, emoji, opts, curr, diff) in enumerate(colors_raw, 1):
        q.append({
            "questionId": f"g1_col_{idx:02d}",
            "grade": 1,
            "gameType": "color_magic",
            "topic": "Colors & Magic Objects",
            "difficulty": diff,
            "prompt": f"What color is this {obj.split()[-1]}?",
            "promptVi": f"{vi} có màu gì?",
            "answerOptions": opts,
            "correctAnswer": color,
            "explanation": f"Spot on! The {obj} is {color} ({vi}).",
            "explanationVi": f"Chính xác! {vi} có màu {color}.",
            "imageAsset": emoji,
            "audioPrompt": f"What color is this? It is {color}!",
            "curriculumReference": f"Global Success Grade 1 - {curr}",
            "metadata": {"color": color, "object": obj, "emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 4: Sound Safari (30 items)
    # -------------------------------------------------------------
    safari_raw = [
        # Easy (10)
        ("lion", "Roar in the savannah", "Tiếng sư tử gầm vang thảo nguyên", "🦁", ["lion", "monkey", "cat"], "easy"),
        ("duck", "Quack by the lotus pond", "Tiếng vịt bơi hồ sen", "🦆", ["duck", "bird", "frog"], "easy"),
        ("cat", "Meow on the garden wall", "Tiếng mèo con trên tường hoa", "🐱", ["cat", "dog", "fox"], "easy"),
        ("dog", "Bark guarding the house", "Tiếng chú chó trông nhà", "🐶", ["dog", "wolf", "cow"], "easy"),
        ("frog", "Croak near the rain puddle", "Tiếng ếch kêu bên vũng nước mưa", "🐸", ["frog", "fish", "duck"], "easy"),
        ("bird", "Singing sweet morning tune", "Tiếng chim hót líu lo buổi sớm", "🐦", ["bird", "chicken", "duck"], "easy"),
        ("bell", "Ding dong! School bell rings", "Tiếng chuông trường reo vang", "🔔", ["bell", "horn", "drum"], "easy"),
        ("drum", "Boom boom! Safari drum beat", "Tiếng trống rộn rã", "🥁", ["drum", "flute", "piano"], "easy"),
        ("car", "Beep beep! Car horn", "Tiếng còi ô tô bíp bíp", "🚗", ["car", "bike", "boat"], "easy"),
        ("baby", "Giggle! Happy baby laugh", "Tiếng em bé cười giòn tan", "👶", ["baby", "boy", "girl"], "easy"),
        # Medium (10)
        ("monkey", "Chatter in the coconut trees", "Tiếng khỉ ríu rít trên cây dừa", "🐒", ["monkey", "bird", "squirrel"], "medium"),
        ("elephant", "Deep trumpet in bamboo forest", "Tiếng voi rống trong rừng tre", "🐘", ["elephant", "lion", "bear"], "medium"),
        ("rain", "Pitter-patter falling on green leaves", "Tiếng mưa rơi tí tách trên lá xanh", "🌧️", ["rain", "wind", "thunder"], "medium"),
        ("wind", "Whoosh blowing through mountain pass", "Tiếng gió thổi qua đèo cao", "💨", ["wind", "river", "train"], "medium"),
        ("river", "Gurgle rushing through rocks", "Tiếng suối reo róc rách", "🏞️", ["river", "rain", "ocean"], "medium"),
        ("train", "Choo choo! North-South Express", "Tiếng tàu hỏa Bắc Nam xình xịch", "🚂", ["train", "car", "plane"], "medium"),
        ("plane", "Roar high in the clouds", "Tiếng máy bay vút trên tầng mây", "✈️", ["plane", "bird", "kite"], "medium"),
        ("boat", "Splash moving through Mekong waves", "Tiếng thuyền rẽ sóng miền Tây", "🛶", ["boat", "car", "train"], "medium"),
        ("clock", "Tick tock! Counting time", "Tiếng đồng hồ tích tắc", "⏰", ["clock", "bell", "phone"], "medium"),
        ("camera", "Click! Taking safari picture", "Tiếng bấm máy ảnh ghi lại khoảnh khắc", "📷", ["camera", "phone", "door"], "medium"),
        # Challenge (10)
        ("thunder", "Rumble before the tropical storm", "Tiếng sấm vang trước cơn mưa nhiệt đới", "⚡", ["thunder", "drum", "wind"], "challenge"),
        ("waterfall", "Roaring drop down the cliff", "Tiếng thác nước đổ ầm vang sườn núi", "🌊", ["waterfall", "rain", "wind"], "challenge"),
        ("owl", "Hoo in the quiet bamboo grove", "Tiếng cú mèo đêm vắng", "🦉", ["owl", "bat", "wolf"], "challenge"),
        ("bee", "Buzzing collecting sweet lotus nectar", "Tiếng ong vo ve hút mật hoa sen", "🐝", ["bee", "fly", "beetle"], "challenge"),
        ("cricket", "Chirping summer night song", "Tiếng dế gáy rỉ rả đêm hè", "🦗", ["cricket", "frog", "bird"], "challenge"),
        ("flute", "Sweet melody echoing over rice fields", "Tiếng sáo trúc vi vu đồng lúa", "🪈", ["flute", "drum", "bell"], "challenge"),
        ("ocean", "Waves lapping on Nha Trang sand", "Tiếng sóng biển vỗ bờ cát Nha Trang", "🏖️", ["ocean", "river", "rain"], "challenge"),
        ("horse", "Hoofbeats galloping along village road", "Tiếng vó ngựa phi trên đường làng", "🐎", ["horse", "cow", "car"], "challenge"),
        ("rooster", "Cock-a-doodle-doo greeting sunrise", "Tiếng gà trống gáy vang đón bình minh", "🐓", ["rooster", "duck", "bird"], "challenge"),
        ("cheering", "Hooray! Explorers win stars", "Tiếng reo vui khi chiến thắng", "🎉", ["cheering", "crying", "singing"], "challenge")
    ]
    for idx, (target, desc, vi, emoji, opts, diff) in enumerate(safari_raw, 1):
        q.append({
            "questionId": f"g1_saf_{idx:02d}",
            "grade": 1,
            "gameType": "sound_safari",
            "topic": "Safari Sounds & Listening",
            "difficulty": diff,
            "prompt": f"Listen! What sound is this? ({desc})",
            "promptVi": f"Lắng nghe! {vi}. Đó là gì?",
            "answerOptions": opts,
            "correctAnswer": target,
            "explanation": f"Brilliant! The sound belongs to: {target} ({vi}).",
            "explanationVi": f"Giỏi lắm! Âm thanh thuộc về: {target} ({vi}).",
            "imageAsset": emoji,
            "audioPrompt": f"Listen to the sound! Who makes it? The {target}!",
            "curriculumReference": "Global Success Grade 1 - Phonics & Sound Recognition",
            "metadata": {"desc": desc, "emoji": emoji}
        })

    # -------------------------------------------------------------
    # GAME 5: Treasure Bubbles (30 items)
    # -------------------------------------------------------------
    bubbles_raw = [
        # Easy (10)
        ("one", "Số 1", "1️⃣", ["one", "two", "three"], "easy"),
        ("two", "Số 2", "2️⃣", ["two", "one", "four"], "easy"),
        ("three", "Số 3", "3️⃣", ["three", "two", "five"], "easy"),
        ("four", "Số 4", "4️⃣", ["four", "three", "one"], "easy"),
        ("five", "Số 5", "5️⃣", ["five", "four", "two"], "easy"),
        ("six", "Số 6", "6️⃣", ["six", "seven", "five"], "easy"),
        ("seven", "Số 7", "7️⃣", ["seven", "six", "eight"], "easy"),
        ("eight", "Số 8", "8️⃣", ["eight", "nine", "seven"], "easy"),
        ("nine", "Số 9", "9️⃣", ["nine", "eight", "ten"], "easy"),
        ("ten", "Số 10", "🔟", ["ten", "nine", "five"], "easy"),
        # Medium (10)
        ("pizza", "Bánh pizza", "🍕", ["pizza", "bread", "cake"], "medium"),
        ("ice cream", "Kem que mát lạnh", "🍦", ["ice cream", "cake", "candy"], "medium"),
        ("candy", "Kẹo ngọt", "🍬", ["candy", "apple", "milk"], "medium"),
        ("apple", "Quả táo", "🍎", ["apple", "grape", "lemon"], "medium"),
        ("banana", "Quả chuối", "🍌", ["banana", "mango", "orange"], "medium"),
        ("orange", "Quả cam", "🍊", ["orange", "apple", "lemon"], "medium"),
        ("grape", "Chùm nho", "🍇", ["grape", "berry", "melon"], "medium"),
        ("bread", "Ổ bánh mì", "🍞", ["bread", "cake", "rice"], "medium"),
        ("egg", "Quả trứng", "🥚", ["egg", "milk", "cheese"], "medium"),
        ("water", "Cốc nước", "💧", ["water", "milk", "tea"], "medium"),
        # Challenge (10)
        ("kite", "Con diều", "🪁", ["kite", "balloon", "plane"], "challenge"),
        ("balloon", "Quả bóng bay", "🎈", ["balloon", "ball", "kite"], "challenge"),
        ("star", "Ngôi sao may mắn", "⭐", ["star", "sun", "moon"], "challenge"),
        ("heart", "Trái tim yêu thương", "💖", ["heart", "star", "diamond"], "challenge"),
        ("gem", "Viên ngọc quý", "💎", ["gem", "coin", "key"], "challenge"),
        ("key", "Chìa khóa vàng", "🗝️", ["key", "box", "lock"], "challenge"),
        ("chest", "Rương kho báu", "🪙", ["chest", "bag", "box"], "challenge"),
        ("crown", "Vương miện", "👑", ["crown", "hat", "cap"], "challenge"),
        ("flower", "Bông hoa xinh", "🌺", ["flower", "leaf", "tree"], "challenge"),
        ("rainbow", "Cầu vồng", "🌈", ["rainbow", "cloud", "sun"], "challenge")
    ]
    for idx, (target, vi, emoji, opts, diff) in enumerate(bubbles_raw, 1):
        q.append({
            "questionId": f"g1_bub_{idx:02d}",
            "grade": 1,
            "gameType": "treasure_bubbles",
            "topic": "Numbers & Treasure Bubbles",
            "difficulty": diff,
            "prompt": f"Pop the bubble with: '{target}'!",
            "promptVi": f"Bấm làm nổ bong bóng có: {vi} ({target})",
            "answerOptions": opts,
            "correctAnswer": target,
            "explanation": f"Pop! You found {target} ({vi})!",
            "explanationVi": f"Bốp! Con đã tìm đúng {target} ({vi})!",
            "imageAsset": emoji,
            "audioPrompt": f"Pop the {target} bubble!",
            "curriculumReference": "Global Success Grade 1 - Vocabulary & Numbers",
            "metadata": {"bubbleItem": target, "emoji": emoji}
        })

    return q

print("Loaded Grade 1 question builder.")
