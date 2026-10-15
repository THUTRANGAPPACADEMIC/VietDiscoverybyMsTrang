import json
import os

# Definition of the 25 games across 5 grades
GAMES_CONFIG = [
    # Grade 1
    (1, 'picture_pop', 'Picture Pop', 'Chạm Bong Bóng Hình Ảnh', 'Tap the correct picture as you listen!'),
    (1, 'animal_friends', 'Animal Friends', 'Những Người Bạn Động Vật', 'Match cute animals with their English names and sounds.'),
    (1, 'color_magic', 'Color Magic', 'Sắc Màu Phép Thuật', 'Identify vivid colors and magical objects.'),
    (1, 'sound_safari', 'Sound Safari', 'Chuyến Thám Hiểm Âm Thanh', 'Listen carefully to safari sounds and identify the right word.'),
    (1, 'treasure_bubbles', 'Treasure Bubbles', 'Bong Bóng Kho Báu', 'Pop the floating bubbles with the correct vocabulary.'),

    # Grade 2
    (2, 'memory_flip', 'Memory Flip Cards', 'Lật Thẻ Trí Nhớ Diệu Kỳ', 'Flip cards to discover matching words and pictures.'),
    (2, 'word_picture_match', 'Word & Picture Match', 'Nối Từ & Tranh Tương Tác', 'Connect English vocabulary words to their pictures.'),
    (2, 'sentence_builder', 'Magical Sentence Builder', 'Xếp Câu Thần Kỳ', 'Arrange colorful word blocks into perfect English sentences.'),
    (2, 'treasure_hunt', 'Listening Treasure Hunt', 'Truy Tìm Kho Báu Lắng Nghe', 'Listen to English clues to unlock hidden treasure chests.'),
    (2, 'vocabulary_maze', 'Vocabulary Maze', 'Mê Cung Từ Vựng', 'Navigate through the labyrinth gates by answering correctly.'),

    # Grade 3
    (3, 'landmark_drag_drop', 'Vietnam Landmark Drag & Drop', 'Kéo Thả Kỳ Quan Ba Miền', 'Sort iconic Vietnamese landmarks into North, Central, and South regions.'),
    (3, 'map_quest', 'Interactive Vietnam Map Quest', 'Hành Trình Bản Đồ Việt Nam', 'Locate heritage sites and provinces across the map.'),
    (3, 'sentence_puzzle', 'Sentence Puzzle', 'Mảnh Ghép Cú Pháp', 'Piece together compound clauses and sentence blocks.'),
    (3, 'listening_detective', 'Listening Detective', 'Thám Tử Nhí Lắng Nghe', 'Solve mysterious riddle clues with your detective ears.'),
    (3, 'cultural_quiz', 'Cultural Discovery Quiz', 'Đố Vui Văn Hóa & Lễ Hội', 'Explore Vietnamese festivals, cuisine, and heritage in English.'),

    # Grade 4
    (4, 'escape_room', 'English Escape Room', 'Phòng Thoát Hiểm Bí Mật', 'Solve English riddles and read secret clues to unlock escape doors.'),
    (4, 'word_decoder', 'Mystery Word Decoder', 'Giải Mã Mật Thư', 'Decode secret letter ciphers and unscramble vocabulary.'),
    (4, 'dialogue_builder', 'Dialogue Builder', 'Kiến Tạo Hội Thoại', 'Reorder conversational chat bubbles in natural order.'),
    (4, 'listening_mission', 'Listening Mission', 'Nhiệm Vụ Nghe Hiểu', 'Listen to radio announcements and conversations to complete mission checklists.'),
    (4, 'culture_challenge', 'Vietnam Culture Challenge', 'Thử Thách Bản Sắc Dân Tộc', 'Conquer high-level cultural, geographic, and historical cards.'),

    # Grade 5
    (5, 'champion_quiz', 'English Champion Quiz Show', 'Đấu Trường Vô Địch Tiếng Anh', 'Studio quiz show with 50:50 lifelines, star ladder, and timed rounds.'),
    (5, 'tour_guide', 'Virtual Vietnam Tour Guide', 'Hướng Dẫn Viên Du Lịch Nhí', 'Guide international tourists and explain Vietnamese culture in English.'),
    (5, 'reading_detective', 'Reading Detective', 'Thám Tử Đọc Hiểu Truy Vết', 'Read short heritage passages and extract factual evidence.'),
    (5, 'speaking_mission', 'Speaking Mission', 'Sứ Mệnh Phát Âm Chuẩn', 'Practice English pronunciation, intonation, and spoken missions.'),
    (5, 'final_adventure', 'Final Adventure Challenge', 'Đại Thử Thách Vượt Ải', 'High-speed multi-stage championship sprint testing all skills.')
]

print(f"Configured {len(GAMES_CONFIG)} games across 5 grades.")
