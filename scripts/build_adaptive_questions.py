# scripts/build_adaptive_questions.py
import json

def get_grade1_questions():
    questions = []
    
    # 1. Picture Pop (30 items)
    pop_items = [
        # Easy (10)
        ("A red apple", "Quả táo màu đỏ", "🍎", "apple", ["apple", "banana", "orange"], "Unit 3: At the Street Market", "easy"),
        ("A yellow banana", "Quả chuối màu vàng", "🍌", "banana", ["banana", "grape", "lemon"], "Unit 3: At the Street Market", "easy"),
        ("A blue ball", "Quả bóng màu xanh dương", "⚽", "ball", ["ball", "car", "doll"], "Unit 1: In the School Playground", "easy"),
        ("A little cat", "Chú mèo nhỏ", "🐱", "cat", ["cat", "dog", "duck"], "Unit 2: In the Dining Room", "easy"),
        ("A friendly dog", "Chú chó thân thiện", "🐶", "dog", ["dog", "cat", "bird"], "Unit 4: In the Bedroom", "easy"),
        ("A green book", "Quyển sách màu xanh lá", "📖", "book", ["book", "pencil", "bag"], "Unit 1: In the School Playground", "easy"),
        ("A brown teddy bear", "Chú gấu bông màu nâu", "🧸", "teddy bear", ["teddy bear", "robot", "puzzle"], "Unit 17: Our Toys", "easy"),
        ("A sweet cake", "Chiếc bánh ngọt", "🍰", "cake", ["cake", "bread", "milk"], "Unit 2: In the Dining Room", "easy"),
        ("A shiny red car", "Chiếc xe ô tô màu đỏ", "🚗", "car", ["car", "bike", "bus"], "Unit 2: In the Dining Room", "easy"),
        ("A flying bird", "Chú chim đang bay", "🐦", "bird", ["bird", "fish", "frog"], "Unit 16: My Pets", "easy"),
        
        # Medium (10)
        ("A yellow duck swimming", "Chú vịt vàng đang bơi", "🦆", "duck", ["duck", "chicken", "bird"], "Unit 4: In the Bedroom", "medium"),
        ("A warm cup of milk", "Tách sữa ấm", "🥛", "milk", ["milk", "water", "juice"], "Unit 2: In the Dining Room", "medium"),
        ("A blue school bag", "Chiếc cặp sách màu xanh", "🎒", "bag", ["bag", "hat", "cap"], "Unit 3: At the Street Market", "medium"),
        ("A cool sun hat", "Chiếc mũ che nắng", "👒", "hat", ["hat", "bag", "shoe"], "Unit 3: At the Street Market", "medium"),
        ("A funny jumping frog", "Chú ếch nhảy vui nhộn", "🐸", "frog", ["frog", "fish", "duck"], "Unit 5: At the Fish Shop", "medium"),
        ("A swimming gold fish", "Chú cá vàng đang bơi", "🐟", "fish", ["fish", "frog", "fox"], "Unit 5: At the Fish Shop", "medium"),
        ("A cute orange fox", "Chú cáo màu cam", "🦊", "fox", ["fox", "wolf", "dog"], "Unit 5: At the Fish Shop", "medium"),
        ("A wooden desk in bedroom", "Chiếc bàn học trong phòng", "🪵", "desk", ["desk", "door", "bed"], "Unit 4: In the Bedroom", "medium"),
        ("An open room door", "Cánh cửa phòng mở", "🚪", "door", ["door", "window", "desk"], "Unit 4: In the Bedroom", "medium"),
        ("A green bicycle", "Chiếc xe đạp màu xanh", "🚲", "bike", ["bike", "car", "boat"], "Unit 1: In the Playground", "medium"),
        
        # Challenge (10)
        ("My loving mother", "Người mẹ yêu quý của em", "👩", "mother", ["mother", "father", "sister"], "Unit 11: My Family", "challenge"),
        ("My kind father", "Người cha hiền từ của em", "👨", "father", ["father", "brother", "baby"], "Unit 11: My Family", "challenge"),
        ("My sweet baby sister", "Em gái nhỏ đáng yêu", "👧", "sister", ["sister", "brother", "mother"], "Unit 11: My Family", "challenge"),
        ("My tall brother", "Người anh trai cao lớn", "👦", "brother", ["brother", "father", "baby"], "Unit 11: My Family", "challenge"),
        ("A colorful flying kite", "Chiếc diều rực rỡ trên bầu trời", "🪁", "kite", ["kite", "balloon", "plane"], "Unit 17: Our Toys", "challenge"),
        ("A smart toy robot", "Chú người máy đồ chơi thông minh", "🤖", "robot", ["robot", "car", "doll"], "Unit 17: Our Toys", "challenge"),
        ("Fresh sweet orange", "Quả cam tươi ngọt", "🍊", "orange", ["orange", "apple", "mango"], "Unit 3: At the Street Market", "challenge"),
        ("A lovely baby doll", "Búp bê em bé xinh xắn", "🪆", "doll", ["doll", "robot", "ball"], "Unit 17: Our Toys", "challenge"),
        ("A cozy bedroom", "Phòng ngủ ấm cúng", "🛏️", "bed", ["bed", "chair", "table"], "Unit 4: In the Bedroom", "challenge"),
        ("A bright sunshine", "Ánh nắng mặt trời rực rỡ", "☀️", "sun", ["sun", "moon", "star"], "Unit 1: In the Playground", "challenge")
    ]
    
    for idx, (p_en, p_vi, emoji, correct, opts, curr, diff) in enumerate(pop_items, 1):
        questions.append({
            "questionId": f"g1_pop_{idx:02d}",
            "grade": 1,
            "gameType": "picture_pop",
            "topic": "Early Vocabulary & Phonics",
            "difficulty": diff,
            "prompt": f"Listen and tap: '{correct}'",
            "promptVi": f"Nghe và chạm vào hình: {p_vi}",
            "answerOptions": opts,
            "correctAnswer": correct,
            "explanation": f"Great job! '{correct}' means '{p_vi}' in Vietnamese.",
            "explanationVi": f"Tuyệt vời! '{correct}' nghĩa là '{p_vi}'.",
            "imageAsset": emoji,
            "audioPrompt": f"Tap the {correct}!",
            "curriculumReference": f"Global Success Grade 1 - {curr}",
            "metadata": {"emoji": emoji, "fullPhrase": p_en}
        })
        
    return questions

print("Grade 1 Pop helper defined.")
