// ==============================================================================
// VIETDISCOVERY BY MS. TRANG – 3D FLOATING ISLAND ADVENTURE WORLD DATA
// Pedagogically Aligned to Grades 1–5 & MOET Circular 27/2020/TT-BGDDT
// ==============================================================================

export type IslandId = 'wonder' | 'listening' | 'speaking' | 'puzzle' | 'champion';

export interface IslandActivityStep {
  id: string;
  level?: 1 | 2 | 3; // Circular 27 level if applicable
  questionEn: string;
  questionVi: string;
  audioPrompt?: string; // Spoken audio text
  targetPhonics?: string;
  scrambleTarget?: string; // Word to unscramble
  image?: string;
  options: {
    id: string;
    textEn: string;
    textVi: string;
    icon?: string;
    isCorrect: boolean;
  }[];
  explanationEn?: string;
  explanationVi?: string;
}

export interface IslandGradeContent {
  gradeNum: 1 | 2 | 3 | 4 | 5;
  gradeBadge: string;
  missionTitleEn: string;
  missionTitleVi: string;
  missionIntroEn: string;
  missionIntroVi: string;
  targetObjective: string;
  starsReward: number;
  steps: IslandActivityStep[];
}

export interface FloatingIslandDef {
  id: IslandId;
  orderNumber: number;
  nameEn: string;
  nameVi: string;
  subtitleEn: string;
  subtitleVi: string;
  taglineEn: string;
  taglineVi: string;
  crystalName: string;
  crystalColor: string;
  crystalHex: string;
  glowRgba: string;
  badgeText: string;
  gradientBg: string;
  cardBorder: string;
  floatDelay: string;
  landmarkFeature: string;
  gradeData: Record<number, IslandGradeContent>;
}

export const FLOATING_ISLANDS: FloatingIslandDef[] = [
  // ----------------------------------------------------------------------------
  // 1. WONDER ISLAND – DISCOVER VIETNAM
  // ----------------------------------------------------------------------------
  {
    id: 'wonder',
    orderNumber: 1,
    nameEn: 'Wonder Island',
    nameVi: 'Đảo Kỳ Quan',
    subtitleEn: 'Discover Vietnam',
    subtitleVi: 'Khám phá Địa danh & Kỳ quan Việt Nam',
    taglineEn: 'Journey across majestic bays, ancient towers, and imperial citadels!',
    taglineVi: 'Hành trình vượt ngàn danh lam thắng cảnh Việt Nam rực rỡ!',
    crystalName: 'Emerald Crystal',
    crystalColor: 'text-emerald-400',
    crystalHex: '#10b981',
    glowRgba: 'rgba(16, 185, 129, 0.45)',
    badgeText: 'DISCOVER VIETNAM',
    gradientBg: 'from-emerald-500/20 via-teal-600/30 to-emerald-900/60',
    cardBorder: 'border-emerald-400/60 hover:border-emerald-300',
    floatDelay: 'animate-island-1',
    landmarkFeature: 'Hạ Long Karst & Golden Pagoda',
    gradeData: {
      1: {
        gradeNum: 1,
        gradeBadge: 'Grade 1 Starter',
        missionTitleEn: 'Magical Bay & Turtle Tower',
        missionTitleVi: 'Vịnh Thần Tiên & Tháp Rùa Kỳ Thú',
        missionIntroEn: 'Look at the pictures and tap the famous wonders of Vietnam!',
        missionIntroVi: 'Bé hãy nhìn tranh và chạm vào kỳ quan tuyệt đẹp của Việt Nam nhé!',
        targetObjective: 'Identify iconic landmarks through visual cues and short English names.',
        starsReward: 25,
        steps: [
          {
            id: 'w_g1_1',
            questionEn: 'Which picture shows the emerald water of Ha Long Bay?',
            questionVi: 'Bức tranh nào thể hiện Vịnh Hạ Long xanh biếc?',
            audioPrompt: 'Ha Long Bay! A natural wonder of the world!',
            image: '/destinations/halong_bay.jpg',
            options: [
              { id: 'opt1', textEn: 'Ha Long Bay', textVi: 'Vịnh Hạ Long', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'Big City', textVi: 'Thành phố lớn', icon: '🏢', isCorrect: false },
              { id: 'opt3', textEn: 'Desert', textVi: 'Sa mạc cát', icon: '🏜️', isCorrect: false }
            ],
            explanationEn: 'Ha Long Bay has thousands of limestone islands in emerald water!',
            explanationVi: 'Vịnh Hạ Long có hàng ngàn đảo đá vôi kỳ vĩ trên mặt nước xanh ngọc!'
          },
          {
            id: 'w_g1_2',
            questionEn: 'Where can you see the historic Turtle Tower in Hanoi?',
            questionVi: 'Tháp Rùa lịch sử nằm ở đâu tại Hà Nội?',
            audioPrompt: 'Turtle Tower in the middle of Sword Lake!',
            image: '/destinations/hanoi_turtle_tower.jpg',
            options: [
              { id: 'opt1', textEn: 'Sword Lake', textVi: 'Hồ Hoàn Kiếm', icon: '🐢', isCorrect: true },
              { id: 'opt2', textEn: 'The Beach', textVi: 'Bãi biển', icon: '🏖️', isCorrect: false },
              { id: 'opt3', textEn: 'The Airport', textVi: 'Sân bay', icon: '✈️', isCorrect: false }
            ],
            explanationEn: 'The Turtle Tower stands peacefully in the center of Sword Lake!',
            explanationVi: 'Tháp Rùa cổ kính soi bóng uy nghiêm giữa lòng Hồ Hoàn Kiếm!'
          }
        ]
      },
      2: {
        gradeNum: 2,
        gradeBadge: 'Grade 2 Explorer',
        missionTitleEn: 'Ancient Citadel & Colorful Lanterns',
        missionTitleVi: 'Kinh Thành Cổ & Đèn Lồng Sắc Màu',
        missionIntroEn: 'Travel from Hue Imperial City to the sparkling streets of Hoi An!',
        missionIntroVi: 'Du ngoạn Kinh thành Huế đến phố cổ Hội An lung linh sắc màu!',
        targetObjective: 'Describe landmarks using simple adjectives (ancient, colorful, majestic).',
        starsReward: 30,
        steps: [
          {
            id: 'w_g2_1',
            questionEn: 'Which ancient city in Central Vietnam is famous for colorful lanterns?',
            questionVi: 'Đô thị cổ nào ở miền Trung nổi tiếng với đèn lồng rực rỡ?',
            audioPrompt: 'Hoi An Ancient Town with glowing paper lanterns!',
            image: '/destinations/hoian_ancient_town.jpg',
            options: [
              { id: 'opt1', textEn: 'Hoi An Ancient Town', textVi: 'Phố cổ Hội An', icon: '🏮', isCorrect: true },
              { id: 'opt2', textEn: 'Modern Subway', textVi: 'Tàu điện ngầm', icon: '🚇', isCorrect: false },
              { id: 'opt3', textEn: 'Snowy Peak', textVi: 'Đỉnh núi tuyết', icon: '❄️', isCorrect: false }
            ],
            explanationEn: 'Hoi An is famous for lantern festivals and the ancient Japanese Covered Bridge.',
            explanationVi: 'Hội An nổi tiếng với đêm hội đèn lồng lung linh và Chùa Cầu cổ kính.'
          },
          {
            id: 'w_g2_2',
            questionEn: 'The historic Hue Citadel was home to which great era of Vietnam?',
            questionVi: 'Kinh thành Huế uy nghiêm là nơi lưu giữ di sản của triều đại nào?',
            audioPrompt: 'The royal Hue Citadel along the romantic Perfume River!',
            image: '/destinations/hue_citadel.jpg',
            options: [
              { id: 'opt1', textEn: 'Nguyen Dynasty Emperors', textVi: 'Các vị vua triều Nguyễn', icon: '👑', isCorrect: true },
              { id: 'opt2', textEn: 'Space Astronauts', textVi: 'Phi hành gia', icon: '🚀', isCorrect: false },
              { id: 'opt3', textEn: 'Deep Sea Divers', textVi: 'Thợ lặn biển sâu', icon: '🤿', isCorrect: false }
            ],
            explanationEn: 'Hue Citadel was the imperial capital of Vietnam with grand royal gates.',
            explanationVi: 'Kinh thành Huế là cố đô hoa lệ của triều Nguyễn bên dòng sông Hương thơ mộng.'
          }
        ]
      },
      3: {
        gradeNum: 3,
        gradeBadge: 'Grade 3 Pioneer',
        missionTitleEn: 'Three Regions of Wonders',
        missionTitleVi: 'Khám Phá Địa Danh Ba Miền Bắc - Trung - Nam',
        missionIntroEn: 'Classify landmarks into North, Central, and South Vietnam!',
        missionIntroVi: 'Phân loại các danh lam thắng cảnh tiêu biểu của ba miền đất nước!',
        targetObjective: 'Master geographical regions and iconic architectural wonders.',
        starsReward: 35,
        steps: [
          {
            id: 'w_g3_1',
            questionEn: 'Which modern marvel in Da Nang looks like two giant hands holding a golden pathway in the sky?',
            questionVi: 'Kỳ quan hiện đại nào ở Đà Nẵng có hình hai bàn tay khổng lồ nâng đỡ dải lụa vàng giữa mây trời?',
            audioPrompt: 'The world-famous Golden Bridge on Ba Na Hills!',
            image: '/destinations/danang_golden_bridge.jpg',
            options: [
              { id: 'opt1', textEn: 'The Golden Bridge', textVi: 'Cầu Vàng Bà Nà Hills', icon: '🌉', isCorrect: true },
              { id: 'opt2', textEn: 'One Pillar Pagoda', textVi: 'Chùa Một Cột', icon: '🛕', isCorrect: false },
              { id: 'opt3', textEn: 'Ben Thanh Clock Tower', textVi: 'Tháp Đồng hồ Bến Thành', icon: '🕰️', isCorrect: false }
            ],
            explanationEn: 'The Golden Bridge in Da Nang attracts visitors from all over the world!',
            explanationVi: 'Cầu Vàng tại Đà Nẵng là biểu tượng kiến trúc ấn tượng được du khách năm châu khen ngợi!'
          },
          {
            id: 'w_g3_2',
            questionEn: 'Which bustling market is an iconic symbol of Ho Chi Minh City in Southern Vietnam?',
            questionVi: 'Ngôi chợ sầm uất nào là biểu tượng lâu đời của Thành phố Hồ Chí Minh?',
            audioPrompt: 'Ben Thanh Market, the vibrant heart of Saigon!',
            image: '/destinations/hcmc_benthanh.jpg',
            options: [
              { id: 'opt1', textEn: 'Ben Thanh Market', textVi: 'Chợ Bến Thành', icon: '🏪', isCorrect: true },
              { id: 'opt2', textEn: 'Trang An Grottoes', textVi: 'Quần thể Tràng An', icon: '🚣', isCorrect: false },
              { id: 'opt3', textEn: 'Fansipan Cable Car', textVi: 'Cáp treo Fansipan', icon: '🚡', isCorrect: false }
            ],
            explanationEn: 'Ben Thanh Market has stood in the city center for over a century!',
            explanationVi: 'Chợ Bến Thành là trái tim giao thương và văn hóa ẩm thực rực rỡ hơn 100 năm qua.'
          }
        ]
      },
      4: {
        gradeNum: 4,
        gradeBadge: 'Grade 4 Voyager',
        missionTitleEn: 'Natural Ecosystems & Majestic Highlands',
        missionTitleVi: 'Hệ Sinh Thái Kỳ Thú & Đại Ngàn Hùng Vĩ',
        missionIntroEn: 'Explore cool pine hills in Da Lat and the lush floating waterways of Mekong Delta!',
        missionIntroVi: 'Khám phá đồi thông ngát hương Đà Lạt và miệt vườn sông nước Cửu Long!',
        targetObjective: 'Use rich descriptive vocabulary to explain regional climate and biodiversity.',
        starsReward: 40,
        steps: [
          {
            id: 'w_g4_1',
            questionEn: 'Why is Da Lat in the Central Highlands known as the "City of Eternal Spring"?',
            questionVi: 'Tại sao Đà Lạt ở Tây Nguyên được mệnh danh là "Thành phố Mùa xuân Vĩnh cửu"?',
            audioPrompt: 'Da Lat has cool mountain air, pine forests, and blooming flowers all year round!',
            image: '/destinations/dalat_pine_hills.jpg',
            options: [
              { id: 'opt1', textEn: 'Cool climate, pine hills, and blooming flowers', textVi: 'Khí hậu mát mẻ, đồi thông xanh và hoa nở quanh năm', icon: '🌸', isCorrect: true },
              { id: 'opt2', textEn: 'It is surrounded by salty ocean waters', textVi: 'Bao quanh bởi biển mặn', icon: '🌊', isCorrect: false },
              { id: 'opt3', textEn: 'It has scorching tropical heat', textVi: 'Nắng nóng gay gắt', icon: '☀️', isCorrect: false }
            ],
            explanationEn: 'Located at 1,500m above sea level, Da Lat enjoys refreshing cool weather year-round.',
            explanationVi: 'Nằm trên cao nguyên 1.500m, Đà Lạt có thời tiết mát dịu và muôn hoa khoe sắc bốn mùa.'
          },
          {
            id: 'w_g4_2',
            questionEn: 'How do people trade goods and fresh tropical fruits in the Mekong Delta?',
            questionVi: 'Người dân miền Tây Nam Bộ giao thương hoa quả tươi trên sông như thế nào?',
            audioPrompt: 'Vibrant floating markets on the waterways of the Mekong Delta!',
            image: '/destinations/mekong_delta.jpg',
            options: [
              { id: 'opt1', textEn: 'On colorful wooden boats in floating markets', textVi: 'Trên ghe xuồng tại các chợ nổi sinh động', icon: '🛶', isCorrect: true },
              { id: 'opt2', textEn: 'Inside underground railway tunnels', textVi: 'Trong đường hầm ngầm', icon: '🚇', isCorrect: false },
              { id: 'opt3', textEn: 'Using high-speed airplanes only', textVi: 'Chỉ dùng máy bay', icon: '🛫', isCorrect: false }
            ],
            explanationEn: 'Famous floating markets like Cai Rang showcase the lively river life of Southern Vietnam.',
            explanationVi: 'Chợ nổi Cái Răng là nét văn hóa sông nước độc đáo mang đậm tình người Nam Bộ.'
          }
        ]
      },
      5: {
        gradeNum: 5,
        gradeBadge: 'Grade 5 Champion',
        missionTitleEn: 'UNESCO World Heritages of Vietnam',
        missionTitleVi: 'Di Sản Thế Giới UNESCO & Tương Lai Xanh',
        missionIntroEn: 'Lead international friends on an English heritage expedition across Vietnam!',
        missionIntroVi: 'Trở thành hướng dẫn viên nhí giới thiệu các di sản UNESCO Việt Nam bằng tiếng Anh!',
        targetObjective: 'Express complex geographical knowledge and cultural pride in fluent English.',
        starsReward: 50,
        steps: [
          {
            id: 'w_g5_1',
            questionEn: 'Which dual UNESCO World Heritage site in Ninh Binh combines breathtaking limestone peaks with ancient historic palaces?',
            questionVi: 'Quần thể di sản kép UNESCO nào tại Ninh Bình kết hợp núi non kỳ vĩ và cố đô nghìn năm?',
            audioPrompt: 'Trang An Landscape Complex, UNESCO Mixed World Heritage Site!',
            image: '/destinations/halong_bay.jpg',
            options: [
              { id: 'opt1', textEn: 'Trang An Scenic Landscape Complex', textVi: 'Quần thể danh thắng Tràng An', icon: '🏞️', isCorrect: true },
              { id: 'opt2', textEn: 'Industrial Factory Park', textVi: 'Khu công nghiệp nặng', icon: '🏭', isCorrect: false },
              { id: 'opt3', textEn: 'Underwater Coral Submarine', textVi: 'Tàu ngầm đáy biển', icon: '🚢', isCorrect: false }
            ],
            explanationEn: 'Trang An is Southeast Asia’s first UNESCO Mixed Heritage site for both nature and culture.',
            explanationVi: 'Tràng An là di sản thế giới hỗn hợp đầu tiên của Đông Nam Á ghi dấu văn hóa và thiên nhiên.'
          },
          {
            id: 'w_g5_2',
            questionEn: 'What is the tallest skyscraper in Vietnam that represents modern innovation and national ambition?',
            questionVi: 'Tòa nhà chọc trời cao nhất Việt Nam thể hiện khát vọng phát triển hiện đại là gì?',
            audioPrompt: 'Landmark 81, reaching high into the sky of Ho Chi Minh City!',
            image: '/destinations/hcmc_landmark81.jpg',
            options: [
              { id: 'opt1', textEn: 'Landmark 81 in Ho Chi Minh City', textVi: 'Tòa tháp Landmark 81 tại TP.HCM', icon: '🏙️', isCorrect: true },
              { id: 'opt2', textEn: 'An Ancient Cave Shelter', textVi: 'Hang đá tiền sử', icon: '🪨', isCorrect: false },
              { id: 'opt3', textEn: 'A Traditional Bamboo Hut', textVi: 'Túp lều tre', icon: '🛖', isCorrect: false }
            ],
            explanationEn: 'Inspired by traditional bamboo bundles, Landmark 81 stands 461 meters tall!',
            explanationVi: 'Lấy cảm hứng từ bó tre truyền thống đoàn kết, Landmark 81 vươn cao 461 mét kiêu hãnh.'
          }
        ]
      }
    }
  },

  // ----------------------------------------------------------------------------
  // 2. LISTENING ISLAND – CAPTAIN AUDIO LAB
  // ----------------------------------------------------------------------------
  {
    id: 'listening',
    orderNumber: 2,
    nameEn: 'Listening Island',
    nameVi: 'Đảo Lắng Nghe',
    subtitleEn: 'English Listening Challenges',
    subtitleVi: 'Thử thách Nghe Tiếng Anh cùng Captain Trang',
    taglineEn: 'Tune your ears, catch the secret words, and earn golden listening stars!',
    taglineVi: 'Luyện đôi tai thần kỳ cùng Captain Trang, khám phá câu chuyện tiếng Anh!',
    crystalName: 'Sapphire Crystal',
    crystalColor: 'text-sky-400',
    crystalHex: '#38bdf8',
    glowRgba: 'rgba(56, 189, 248, 0.45)',
    badgeText: 'CAPTAIN AUDIO LAB',
    gradientBg: 'from-sky-500/20 via-blue-600/30 to-indigo-950/60',
    cardBorder: 'border-sky-400/60 hover:border-sky-300',
    floatDelay: 'animate-island-2',
    landmarkFeature: 'Acoustic Conch Shell & 3D Headphones',
    gradeData: {
      1: {
        gradeNum: 1,
        gradeBadge: 'Grade 1 Starter',
        missionTitleEn: 'Listen to Little Words',
        missionTitleVi: 'Nghe Từ Vựng Khởi Đầu',
        missionIntroEn: 'Listen to Captain Trang say simple words and pick the correct object!',
        missionIntroVi: 'Bé hãy lắng nghe Captain Trang đọc từ vựng và chọn đúng hình nhé!',
        targetObjective: 'Distinguish elementary English words through clean phonemic playback.',
        starsReward: 25,
        steps: [
          {
            id: 'l_g1_1',
            questionEn: 'Listen carefully! What did Captain Trang say?',
            questionVi: 'Bé lắng nghe thật kỹ: Captain Trang vừa đọc từ gì?',
            audioPrompt: 'Boat! A little wooden boat on the river!',
            options: [
              { id: 'opt1', textEn: 'Boat', textVi: 'Chiếc thuyền', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'Apple', textVi: 'Quả táo', icon: '🍎', isCorrect: false },
              { id: 'opt3', textEn: 'Clock', textVi: 'Đồng hồ', icon: '⏰', isCorrect: false }
            ],
            explanationEn: 'The word is "Boat"! Great listening ear!',
            explanationVi: 'Từ đúng là "Boat" (Thuyền)! Bé có đôi tai thật xuất sắc!'
          },
          {
            id: 'l_g1_2',
            questionEn: 'Listen again! Which national flower did Captain Trang mention?',
            questionVi: 'Nghe lần nữa nhé: Captain Trang nhắc tới loài hoa nào?',
            audioPrompt: 'Lotus! A beautiful pink lotus flower!',
            options: [
              { id: 'opt1', textEn: 'Lotus', textVi: 'Hoa sen hồng', icon: '🪷', isCorrect: true },
              { id: 'opt2', textEn: 'Starfish', textVi: 'Sao biển', icon: '⭐', isCorrect: false },
              { id: 'opt3', textEn: 'Car', textVi: 'Ô tô', icon: '🚗', isCorrect: false }
            ],
            explanationEn: 'The national flower of Vietnam is the pink Lotus!',
            explanationVi: 'Quốc hoa thanh khiết của Việt Nam là đóa Hoa Sen rạng rỡ!'
          }
        ]
      },
      2: {
        gradeNum: 2,
        gradeBadge: 'Grade 2 Explorer',
        missionTitleEn: 'Listen & Catch the Colors',
        missionTitleVi: 'Nghe & Bắt Màu Sắc Kỳ Thú',
        missionIntroEn: 'Listen to short phrases and match objects with their bright colors!',
        missionIntroVi: 'Lắng nghe các cụm từ ngắn và chọn đúng đồ vật cùng màu sắc nhé!',
        targetObjective: 'Comprehend color + noun combinations in daily context.',
        starsReward: 30,
        steps: [
          {
            id: 'l_g2_1',
            questionEn: 'What does the student have in the magical backpack?',
            questionVi: 'Bạn nhỏ mang đồ vật gì trong chiếc ba lô thần kỳ?',
            audioPrompt: 'I have a yellow hat and a shiny notebook in my backpack.',
            options: [
              { id: 'opt1', textEn: 'A yellow hat', textVi: 'Một chiếc mũ vàng', icon: '👒', isCorrect: true },
              { id: 'opt2', textEn: 'A green frog', textVi: 'Một chú ếch xanh', icon: '🐸', isCorrect: false },
              { id: 'opt3', textEn: 'A silver rocket', textVi: 'Một tên lửa bạc', icon: '🚀', isCorrect: false }
            ],
            explanationEn: 'You heard "a yellow hat"! Super explorer!',
            explanationVi: 'Bé đã nghe chính xác "a yellow hat" (mũ vàng)!'
          },
          {
            id: 'l_g2_2',
            questionEn: 'Listen to Captain Trang: What can you see floating in the sky?',
            questionVi: 'Nghe Captain Trang: Bé nhìn thấy gì bay lượn trên bầu trời?',
            audioPrompt: 'Look up! I can see a colorful dragon kite flying in the wind!',
            options: [
              { id: 'opt1', textEn: 'A colorful dragon kite', textVi: 'Cánh diều rồng rực rỡ', icon: '🪁', isCorrect: true },
              { id: 'opt2', textEn: 'A submarine', textVi: 'Tàu ngầm dưới biển', icon: '🚢', isCorrect: false },
              { id: 'opt3', textEn: 'A tennis ball', textVi: 'Bóng tennis', icon: '🎾', isCorrect: false }
            ],
            explanationEn: 'Dragon kites are traditional toys flown across Vietnamese fields.',
            explanationVi: 'Diều rồng là trò chơi truyền thống gắn liền với tuổi thơ đồng quê Việt Nam.'
          }
        ]
      },
      3: {
        gradeNum: 3,
        gradeBadge: 'Grade 3 Pioneer',
        missionTitleEn: 'Directions & Landmark Audio Quest',
        missionTitleVi: 'Lắng Nghe Chỉ Đường Đến Kỳ Quan',
        missionIntroEn: 'Listen to the traveler asking for directions across Vietnamese destinations!',
        missionIntroVi: 'Nghe bạn du khách hỏi đường đến các danh lam thắng cảnh!',
        targetObjective: 'Comprehend prepositions of place and simple directional dialogues.',
        starsReward: 35,
        steps: [
          {
            id: 'l_g3_1',
            questionEn: 'Where does Captain Trang suggest we visit this weekend?',
            questionVi: 'Captain Trang gợi ý chúng mình đi tham quan nơi nào cuối tuần này?',
            audioPrompt: 'Let us take the boat and explore the mysterious caves of Ha Long Bay!',
            options: [
              { id: 'opt1', textEn: 'Mysterious caves of Ha Long Bay', textVi: 'Hang động kỳ ảo ở Vịnh Hạ Long', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'Snow mountain in Antarctica', textVi: 'Núi tuyết Nam Cực', icon: '🏔️', isCorrect: false },
              { id: 'opt3', textEn: 'Underground coal mine', textVi: 'Mỏ than đá', icon: '⛏️', isCorrect: false }
            ],
            explanationEn: 'Ha Long Bay has marvelous limestone caves like Sung Sot and Thien Cung.',
            explanationVi: 'Vịnh Hạ Long có những hang động kỳ vĩ như hang Sửng Sốt và Thiên Cung!'
          },
          {
            id: 'l_g3_2',
            questionEn: 'What time does the water puppet show start in Hanoi?',
            questionVi: 'Vở múa rối nước tại Hà Nội bắt đầu lúc mấy giờ?',
            audioPrompt: 'The traditional water puppet theater begins at four o clock in the afternoon.',
            options: [
              { id: 'opt1', textEn: 'At 4:00 PM', textVi: 'Lúc 4 giờ chiều', icon: '🕓', isCorrect: true },
              { id: 'opt2', textEn: 'At midnight', textVi: 'Lúc nửa đêm', icon: '🕛', isCorrect: false },
              { id: 'opt3', textEn: 'At 6:00 AM', textVi: 'Lúc 6 giờ sáng', icon: '🌅', isCorrect: false }
            ],
            explanationEn: 'Water puppetry is an exquisite 1,000-year-old art form from the Red River Delta.',
            explanationVi: 'Múa rối nước là nghệ thuật dân gian ngàn năm độc đáo của châu thổ sông Hồng.'
          }
        ]
      },
      4: {
        gradeNum: 4,
        gradeBadge: 'Grade 4 Voyager',
        missionTitleEn: 'Culinary Flavors & Daily Life Stories',
        missionTitleVi: 'Lắng Nghe Câu Chuyện Ẩm Thực Ba Miền',
        missionIntroEn: 'Listen to people describe the ingredients and aromas of Vietnamese dishes!',
        missionIntroVi: 'Lắng nghe cách giới thiệu hương vị đặc sản ba miền Việt Nam!',
        targetObjective: 'Identify key details in short narrative paragraphs about culture and cuisine.',
        starsReward: 40,
        steps: [
          {
            id: 'l_g4_1',
            questionEn: 'Which world-famous noodle soup is being described in the audio?',
            questionVi: 'Món súp mì nổi tiếng thế giới nào đang được miêu tả trong đoạn băng?',
            audioPrompt: 'Pho is Vietnam national noodle soup, served with tender beef, fresh herbs, and fragrant cinnamon broth.',
            options: [
              { id: 'opt1', textEn: 'Traditional Vietnamese Pho', textVi: 'Phở bò truyền thống Việt Nam', icon: '🍜', isCorrect: true },
              { id: 'opt2', textEn: 'Spaghetti with tomato sauce', textVi: 'Mỳ Ý sốt cà chua', icon: '🍝', isCorrect: false },
              { id: 'opt3', textEn: 'Fried french fries', textVi: 'Khoai tây chiên giòn', icon: '🍟', isCorrect: false }
            ],
            explanationEn: 'Pho is celebrated worldwide for its aromatic broth simmered with star anise and ginger.',
            explanationVi: 'Phở là tinh hoa ẩm thực Việt Nam nức tiếng năm châu với nước dùng thanh ngọt.'
          },
          {
            id: 'l_g4_2',
            questionEn: 'What special fruit is grown on the floating orchards of the Mekong Delta?',
            questionVi: 'Loại quả đặc sản nào ngọt thơm được nhắc tới tại miệt vườn miền Tây?',
            audioPrompt: 'Sweet mangoes, juicy pomelos, and fragrant durians thrive in the fertile soil.',
            options: [
              { id: 'opt1', textEn: 'Sweet mangoes and pomelos', textVi: 'Xoài ngọt và bưởi da xanh mọng nước', icon: '🥭', isCorrect: true },
              { id: 'opt2', textEn: 'Arctic blueberries', textVi: 'Việt quất băng giá', icon: '🫐', isCorrect: false },
              { id: 'opt3', textEn: 'Desert dates', textVi: 'Quả chà là sa mạc', icon: '🌴', isCorrect: false }
            ],
            explanationEn: 'The Mekong Delta produces the sweetest tropical fruits in Vietnam.',
            explanationVi: 'Đồng bằng sông Cửu Long là vựa trái cây nhiệt đới ngọt lành bậc nhất nước ta.'
          }
        ]
      },
      5: {
        gradeNum: 5,
        gradeBadge: 'Grade 5 Champion',
        missionTitleEn: 'Smart Cities & Green Innovation Broadcast',
        missionTitleVi: 'Bản Tin Tiếng Anh: Thành Phố Thông Minh & Năng Lượng Xanh',
        missionIntroEn: 'Listen to a youth environmental podcast about the future of Vietnam!',
        missionIntroVi: 'Nghe bản tin podcast thanh thiếu niên về tương lai xanh của đất nước!',
        targetObjective: 'Analyze authentic speech for main ideas, causes, and sustainable solutions.',
        starsReward: 50,
        steps: [
          {
            id: 'l_g5_1',
            questionEn: 'According to the youth news report, how will students travel to school in future green cities?',
            questionVi: 'Theo bản tin thanh thiếu niên, học sinh sẽ đến trường bằng phương tiện xanh nào?',
            audioPrompt: 'Vietnamese cities are rapidly introducing electric buses and solar-powered electric scooters to reduce carbon emissions.',
            options: [
              { id: 'opt1', textEn: 'Clean electric buses and metro lines', textVi: 'Xe buýt điện sạch và tàu điện ngầm', icon: '🚊', isCorrect: true },
              { id: 'opt2', textEn: 'Gasoline diesel trucks', textVi: 'Xe tải chạy dầu khói bụi', icon: '🚛', isCorrect: false },
              { id: 'opt3', textEn: 'Rocket boosters only', textVi: 'Tên lửa cá nhân', icon: '🚀', isCorrect: false }
            ],
            explanationEn: 'Electric public transport is making Vietnamese cities greener and cleaner for everyone.',
            explanationVi: 'Giao thông công cộng xanh bằng điện đang giúp các thành phố Việt Nam trong lành hơn.'
          },
          {
            id: 'l_g5_2',
            questionEn: 'What renewable energy is being developed along the central coast and windy plains?',
            questionVi: 'Nguồn năng lượng tái tạo nào đang phát triển mạnh mẽ dọc bờ biển miền Trung?',
            audioPrompt: 'Vast wind turbines and rooftop solar farms capture abundant clean energy along the coast of Ninh Thuan and Binh Thuan.',
            options: [
              { id: 'opt1', textEn: 'Wind turbines and solar farms', textVi: 'Tua-bin gió và trang trại năng lượng mặt trời', icon: '🌬️', isCorrect: true },
              { id: 'opt2', textEn: 'Coal-burning furnaces', textVi: 'Lò đốt than đá', icon: '🔥', isCorrect: false },
              { id: 'opt3', textEn: 'Plastic trash incinerators', textVi: 'Đốt rác nhựa', icon: '🗑️', isCorrect: false }
            ],
            explanationEn: 'Coastal Vietnam boasts tremendous wind and solar potential to power our future!',
            explanationVi: 'Duyên hải Việt Nam tràn đầy tiềm năng điện gió và điện mặt trời dồi dào!'
          }
        ]
      }
    }
  },

  // ----------------------------------------------------------------------------
  // 3. SPEAKING ISLAND – PHONICS & VOICE STUDIO
  // ----------------------------------------------------------------------------
  {
    id: 'speaking',
    orderNumber: 3,
    nameEn: 'Speaking Island',
    nameVi: 'Đảo Tiếng Nói',
    subtitleEn: 'Avatar-Guided Speaking',
    subtitleVi: 'Luyện Phát Âm & Giao Tiếp cùng Avatar',
    taglineEn: 'Master clean phonics, speak clear English sentences, and shine on the crystal stage!',
    taglineVi: 'Tự tin phát âm chuẩn bản ngữ, nói tiếng Anh lưu loát trên sân khấu pha lê!',
    crystalName: 'Amethyst Crystal',
    crystalColor: 'text-purple-400',
    crystalHex: '#c084fc',
    glowRgba: 'rgba(192, 132, 252, 0.45)',
    badgeText: 'PHONICS & VOICE',
    gradientBg: 'from-purple-500/20 via-fuchsia-600/30 to-purple-950/60',
    cardBorder: 'border-purple-400/60 hover:border-purple-300',
    floatDelay: 'animate-island-3',
    landmarkFeature: 'Crystal Microphone & Rainbow Echo Bridge',
    gradeData: {
      1: {
        gradeNum: 1,
        gradeBadge: 'Grade 1 Starter',
        missionTitleEn: 'Phonics Sounds: /b/, /l/, /s/',
        missionTitleVi: 'Luyện Âm Đầu: /b/, /l/, /s/',
        missionIntroEn: 'Listen to Captain Trang pronounce the sounds, then tap Speak to repeat!',
        missionIntroVi: 'Bé nghe Captain Trang phát âm từng chữ cái, sau đó nhấn Nói để tập nhé!',
        targetObjective: 'Produce core English consonants and vowels with correct mouth shape.',
        starsReward: 25,
        steps: [
          {
            id: 's_g1_1',
            questionEn: 'Practice saying: "B – Boat!"',
            questionVi: 'Bé tập nói to rõ ràng: "B – Boat!"',
            targetPhonics: '/b/ - Boat',
            audioPrompt: 'B - Boat! A lovely boat in Ha Long Bay!',
            options: [
              { id: 'opt1', textEn: 'I spoke: "B - Boat!"', textVi: 'Con đã phát âm: "B - Boat!"', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'Listen again first', textVi: 'Nghe lại mẫu phát âm', icon: '🔊', isCorrect: false }
            ],
            explanationEn: 'Keep your lips closed, then release softly: /b/ - Boat!',
            explanationVi: 'Khép nhẹ môi rồi bật hơi tự nhiên: /b/ - Boat (Thuyền)!'
          },
          {
            id: 's_g1_2',
            questionEn: 'Practice saying: "S – Sun!"',
            questionVi: 'Bé tập nói to rõ ràng: "S – Sun!"',
            targetPhonics: '/s/ - Sun',
            audioPrompt: 'S - Sun! The bright warm sun of Vietnam!',
            options: [
              { id: 'opt1', textEn: 'I spoke: "S - Sun!"', textVi: 'Con đã phát âm: "S - Sun!"', icon: '☀️', isCorrect: true },
              { id: 'opt2', textEn: 'Listen again first', textVi: 'Nghe lại mẫu phát âm', icon: '🔊', isCorrect: false }
            ],
            explanationEn: 'Gently smile and blow air smoothly: /s/ - Sun!',
            explanationVi: 'Mỉm cười nhẹ và đẩy luồng hơi êm ái: /s/ - Sun (Mặt trời)!'
          }
        ]
      },
      2: {
        gradeNum: 2,
        gradeBadge: 'Grade 2 Explorer',
        missionTitleEn: 'Everyday Explorer Greetings',
        missionTitleVi: 'Câu Chào Khám Phá Mỗi Ngày',
        missionIntroEn: 'Speak cheerful everyday phrases with your chosen explorer avatar!',
        missionIntroVi: 'Nói những câu tiếng Anh vui tươi cùng người bạn đồng hành nhé!',
        targetObjective: 'Build natural intonation for friendly greetings and self-introductions.',
        starsReward: 30,
        steps: [
          {
            id: 's_g2_1',
            questionEn: 'Say cheerfully: "Hello Vietnam! Let us explore!"',
            questionVi: 'Hãy nói hào hứng: "Hello Vietnam! Let us explore!"',
            targetPhonics: 'Intonation: Rising pitch on "explore"',
            audioPrompt: 'Hello Vietnam! Let us explore together!',
            options: [
              { id: 'opt1', textEn: 'I said it with high energy!', textVi: 'Em đã nói thật to và tự tin!', icon: '🌟', isCorrect: true },
              { id: 'opt2', textEn: 'Listen one more time', textVi: 'Nghe lại cô đọc mẫu', icon: '🎧', isCorrect: false }
            ],
            explanationEn: 'Speaking with confidence gives you a real English explorer voice!',
            explanationVi: 'Nói tràn đầy năng lượng giúp bé giao tiếp tự nhiên như người bản ngữ!'
          },
          {
            id: 's_g2_2',
            questionEn: 'Say: "I love my school and my lovely teacher!"',
            questionVi: 'Hãy phát âm trọn vẹn: "I love my school and my lovely teacher!"',
            targetPhonics: 'Connected speech: /lʌv maɪ skuːl/',
            audioPrompt: 'I love my school and my lovely teacher!',
            options: [
              { id: 'opt1', textEn: 'I spoke clearly and smoothly!', textVi: 'Em đã phát âm trôi chảy!', icon: '🏫', isCorrect: true },
              { id: 'opt2', textEn: 'Practice again', textVi: 'Luyện tập thêm lần nữa', icon: '🔁', isCorrect: false }
            ],
            explanationEn: 'Wonderful sentence rhythm and warm expression!',
            explanationVi: 'Nhịp điệu câu nói rất ấm áp và chuẩn xác!'
          }
        ]
      },
      3: {
        gradeNum: 3,
        gradeBadge: 'Grade 3 Pioneer',
        missionTitleEn: 'Tour Guide Mini Speech',
        missionTitleVi: 'Hướng Dẫn Viên Nhí Thuyết Trình',
        missionIntroEn: 'Roleplay as a junior tour guide introducing a famous bridge in Vietnam!',
        missionIntroVi: 'Hóa thân làm hướng dẫn viên nhí giới thiệu cây cầu nổi tiếng của Việt Nam!',
        targetObjective: 'Deliver 2-sentence descriptive presentations with good cadence.',
        starsReward: 35,
        steps: [
          {
            id: 's_g3_1',
            questionEn: 'Present the Dragon Bridge in Da Nang:',
            questionVi: 'Thuyết trình về Cầu Rồng Đà Nẵng bằng tiếng Anh:',
            targetPhonics: 'Stress on: "Dragon" and "fire"',
            audioPrompt: 'Welcome to Da Nang! This is the Dragon Bridge. It breathes real fire at night!',
            options: [
              { id: 'opt1', textEn: 'I gave the tour presentation!', textVi: 'Em đã hoàn thành bài thuyết minh!', icon: '🐉', isCorrect: true },
              { id: 'opt2', textEn: 'Listen to Captain Trang again', textVi: 'Nghe lại giọng cô Trang', icon: '🎙️', isCorrect: false }
            ],
            explanationEn: 'Great job emphasizing the words Dragon Bridge and fire!',
            explanationVi: 'Bé đã nhấn trọng âm rất tốt vào các từ khóa chính!'
          },
          {
            id: 's_g3_2',
            questionEn: 'Describe traditional Vietnamese street food:',
            questionVi: 'Giới thiệu món ăn đường phố hấp dẫn:',
            targetPhonics: 'Smooth link: "crispy and delicious"',
            audioPrompt: 'Vietnamese banh mi is crispy, warm, and delicious!',
            options: [
              { id: 'opt1', textEn: 'I spoke with great pronunciation!', textVi: 'Em đã phát âm rất chuẩn!', icon: '🥖', isCorrect: true },
              { id: 'opt2', textEn: 'Listen one more time', textVi: 'Nghe lại để luyện thêm', icon: '🎧', isCorrect: false }
            ],
            explanationEn: 'Delicious is pronounced with the /ʃ/ sound: de-li-cious!',
            explanationVi: 'Từ "delicious" có âm /ʃ/ uốn nhẹ đầu lưỡi rất hay!'
          }
        ]
      },
      4: {
        gradeNum: 4,
        gradeBadge: 'Grade 4 Voyager',
        missionTitleEn: 'Cultural Festival Storytelling',
        missionTitleVi: 'Kể Chuyện Lễ Hội Dân Gian Sôi Động',
        missionIntroEn: 'Speak in complete sentences describing the joyful Mid-Autumn Festival!',
        missionIntroVi: 'Thuyết minh về Tết Trung Thu rộn ràng tiếng trống lân và đèn ông sao!',
        targetObjective: 'Construct compound sentences with coordinating conjunctions (and, because).',
        starsReward: 40,
        steps: [
          {
            id: 's_g4_1',
            questionEn: 'Speak about the Mid-Autumn lantern parade:',
            questionVi: 'Nói về đêm hội rước đèn Trung Thu rực rỡ:',
            targetPhonics: 'Compound rhythm with "because"',
            audioPrompt: 'Children carry star lanterns in the street because they want to welcome the full moon!',
            options: [
              { id: 'opt1', textEn: 'I spoken the complete story!', textVi: 'Em đã kể trọn vẹn câu chuyện!', icon: '🏮', isCorrect: true },
              { id: 'opt2', textEn: 'Replay audio guide', textVi: 'Nghe lại hướng dẫn', icon: '🔊', isCorrect: false }
            ],
            explanationEn: 'Smooth breathing and excellent pause before "because"!',
            explanationVi: 'Bé ngắt nghỉ đúng chỗ trước liên từ "because", rất tự nhiên!'
          },
          {
            id: 's_g4_2',
            questionEn: 'Express your environmental pledge for Vietnam:',
            questionVi: 'Nói lời hứa bảo vệ môi trường biển đảo quê hương:',
            targetPhonics: 'Clear ending sounds: /t/ in protect, /n/ in clean',
            audioPrompt: 'We must protect our green forests and keep our blue oceans clean!',
            options: [
              { id: 'opt1', textEn: 'I delivered the environmental pledge!', textVi: 'Em đã tuyên thệ thông điệp xanh!', icon: '🌿', isCorrect: true },
              { id: 'opt2', textEn: 'Listen once again', textVi: 'Nghe lại câu mẫu', icon: '🎧', isCorrect: false }
            ],
            explanationEn: 'Ending sounds /t/ and /n/ were crisp and clear!',
            explanationVi: 'Âm đuôi bật rất rõ ràng, chuẩn phong cách thuyết trình quốc tế!'
          }
        ]
      },
      5: {
        gradeNum: 5,
        gradeBadge: 'Grade 5 Champion',
        missionTitleEn: 'Global Ambassador Keynote',
        missionTitleVi: 'Diễn Thuyết Đại Sứ Thiếu Nhi Toàn Cầu',
        missionIntroEn: 'Deliver an inspirational speech welcoming international friends to Vietnam!',
        missionIntroVi: 'Diễn thuyết truyền cảm hứng chào đón bạn bè quốc tế đến với Việt Nam!',
        targetObjective: 'Demonstrate public speaking presence, emotion, and flawless phonetics.',
        starsReward: 50,
        steps: [
          {
            id: 's_g5_1',
            questionEn: 'Deliver your welcoming keynote to the world:',
            questionVi: 'Đọc bài diễn văn đại sứ chào đón bạn bè quốc tế:',
            targetPhonics: 'Rhetorical pacing & emotional resonance',
            audioPrompt: 'Vietnam is a land of timeless charm, rich history, and warm-hearted people. Welcome to our homeland!',
            options: [
              { id: 'opt1', textEn: 'I gave an inspiring ambassador speech!', textVi: 'Em đã diễn thuyết thật truyền cảm!', icon: '🌏', isCorrect: true },
              { id: 'opt2', textEn: 'Listen to Captain Trang demonstration', textVi: 'Nghe Captain Trang làm mẫu', icon: '🎙️', isCorrect: false }
            ],
            explanationEn: 'Inspiring tone! You sound like a true global youth ambassador!',
            explanationVi: 'Giọng điệu đầy tự hào và bản lĩnh của một đại sứ thiếu nhi toàn cầu!'
          },
          {
            id: 's_g5_2',
            questionEn: 'Speak about Vietnam digital future:',
            questionVi: 'Nói về thế hệ trẻ Việt Nam làm chủ công nghệ:',
            targetPhonics: 'Complex multisyllabic words: "innovative", "creativity"',
            audioPrompt: 'With education and creativity, Vietnamese students are building an innovative green future!',
            options: [
              { id: 'opt1', textEn: 'Flawlessly pronounced multisyllabic terms!', textVi: 'Em đã phát âm chuẩn xác các từ đa âm tiết!', icon: '🚀', isCorrect: true },
              { id: 'opt2', textEn: 'Listen again to refine syllables', textVi: 'Nghe lại để luyện phát âm', icon: '🎧', isCorrect: false }
            ],
            explanationEn: 'In-no-va-tive and cre-a-tiv-i-ty were articulated impeccably!',
            explanationVi: 'Các từ dài được phát âm nhấn trọng âm cực kỳ chuẩn xác!'
          }
        ]
      }
    }
  },

  // ----------------------------------------------------------------------------
  // 4. PUZZLE ISLAND – INTERACTIVE WORD WIZARD
  // ----------------------------------------------------------------------------
  {
    id: 'puzzle',
    orderNumber: 4,
    nameEn: 'Puzzle Island',
    nameVi: 'Đảo Câu Đố',
    subtitleEn: 'Interactive Word Games',
    subtitleVi: 'Trò Chơi Xếp Chữ & Ghép Cặp Thông Minh',
    taglineEn: 'Tap golden letter tiles, crack the scrambled puzzles, and unlock ancient scrolls!',
    taglineVi: 'Chạm những khối chữ vàng óng, giải mã câu đố từ vựng để mở cuốn thư cổ tích!',
    crystalName: 'Amber Crystal',
    crystalColor: 'text-amber-400',
    crystalHex: '#fbbf24',
    glowRgba: 'rgba(251, 191, 36, 0.45)',
    badgeText: 'WORD WIZARD',
    gradientBg: 'from-amber-500/20 via-orange-600/30 to-amber-950/60',
    cardBorder: 'border-amber-400/60 hover:border-amber-300',
    floatDelay: 'animate-island-4',
    landmarkFeature: 'Golden Letter Citadel & Magic Scroll',
    gradeData: {
      1: {
        gradeNum: 1,
        gradeBadge: 'Grade 1 Starter',
        missionTitleEn: '3-Letter Word Scramble',
        missionTitleVi: 'Xếp Chữ 3 Ký Tự Khởi Đầu',
        missionIntroEn: 'Tap the scrambled letter tiles in the correct order to spell the word!',
        missionIntroVi: 'Chạm vào các ô chữ bị xáo trộn theo đúng thứ tự để tạo thành từ có nghĩa!',
        targetObjective: 'Reinforce alphabet letter recognition and 3-letter spelling.',
        starsReward: 25,
        steps: [
          {
            id: 'p_g1_1',
            questionEn: 'Unscramble the letters to spell: "BAY" (A body of water like Ha Long)',
            questionVi: 'Sắp xếp các chữ cái để tạo thành từ "BAY" (Vịnh biển như Vịnh Hạ Long):',
            scrambleTarget: 'BAY',
            options: [
              { id: 'opt1', textEn: 'B - A - Y', textVi: 'BAY (Vịnh)', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'A - B - Y', textVi: 'ABY', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'Y - B - A', textVi: 'YBA', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'B-A-Y spells BAY! Exactly like Ha Long Bay!',
            explanationVi: 'B-A-Y ghép thành từ BAY (Vịnh biển)!'
          },
          {
            id: 'p_g1_2',
            questionEn: 'Unscramble the letters to spell: "SUN" (Shining over the sea)',
            questionVi: 'Sắp xếp các chữ cái để tạo thành từ "SUN" (Mặt trời tỏa nắng):',
            scrambleTarget: 'SUN',
            options: [
              { id: 'opt1', textEn: 'S - U - N', textVi: 'SUN (Mặt trời)', icon: '☀️', isCorrect: true },
              { id: 'opt2', textEn: 'N - U - S', textVi: 'NUS', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'U - S - N', textVi: 'USN', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'S-U-N spells SUN! Sunshine gives life to tropical Vietnam!',
            explanationVi: 'S-U-N ghép thành SUN (Mặt trời ấm áp)!'
          }
        ]
      },
      2: {
        gradeNum: 2,
        gradeBadge: 'Grade 2 Explorer',
        missionTitleEn: 'Explorer Gear Spelling Quest',
        missionTitleVi: 'Giải Mã Đồ Dùng Khám Phá',
        missionIntroEn: 'Unscramble words for things you take on an adventure in Vietnam!',
        missionIntroVi: 'Xếp đúng tên các món đồ bé mang theo khi đi thám hiểm!',
        targetObjective: 'Master 4 to 5 letter high-frequency explorer nouns.',
        starsReward: 30,
        steps: [
          {
            id: 'p_g2_1',
            questionEn: 'What do you use to float on the river? (B - O - A - T)',
            questionVi: 'Vật dụng giúp bé di chuyển lướt đi trên mặt sông nước là gì? (B - O - A - T)',
            scrambleTarget: 'BOAT',
            options: [
              { id: 'opt1', textEn: 'B - O - A - T', textVi: 'BOAT (Thuyền)', icon: '🛶', isCorrect: true },
              { id: 'opt2', textEn: 'T - A - O - B', textVi: 'TAOB', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'O - B - T - A', textVi: 'OBTA', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'B-O-A-T spells BOAT! Ready to sail across the rivers!',
            explanationVi: 'B-O-A-T là thuyền gỗ thân thuộc của miền quê sông nước!'
          },
          {
            id: 'p_g2_2',
            questionEn: 'Where do fish swim and lotus flowers bloom? (L - A - K - E)',
            questionVi: 'Nơi cá tung tăng bơi lội và hoa sen nở ngát hương là gì? (L - A - K - E)',
            scrambleTarget: 'LAKE',
            options: [
              { id: 'opt1', textEn: 'L - A - K - E', textVi: 'LAKE (Hồ nước)', icon: '🌊', isCorrect: true },
              { id: 'opt2', textEn: 'E - K - A - L', textVi: 'EKAL', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'K - A - L - E', textVi: 'KALE', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'L-A-K-E spells LAKE! Like Hoan Kiem Lake in Hanoi!',
            explanationVi: 'L-A-K-E là hồ nước trong xanh như Hồ Gươm, Hồ Tây!'
          }
        ]
      },
      3: {
        gradeNum: 3,
        gradeBadge: 'Grade 3 Pioneer',
        missionTitleEn: 'Capital & Heritage Landmark Scramble',
        missionTitleVi: 'Giải Mã Tên Thủ Đô & Di Tích Lịch Sử',
        missionIntroEn: 'Spell the names of historic cities and monuments of Vietnam!',
        missionIntroVi: 'Xếp đúng tên các thành phố lịch sử và cây cầu nổi tiếng!',
        targetObjective: 'Consolidate proper geographical names and architectural terms.',
        starsReward: 35,
        steps: [
          {
            id: 'p_g3_1',
            questionEn: 'Spell the beloved thousand-year-old capital of Vietnam:',
            questionVi: 'Ghép tên thủ đô ngàn năm văn hiến của đất nước ta:',
            scrambleTarget: 'HANOI',
            options: [
              { id: 'opt1', textEn: 'H - A - N - O - I', textVi: 'HANOI (Thủ đô Hà Nội)', icon: '🏛️', isCorrect: true },
              { id: 'opt2', textEn: 'N - O - I - H - A', textVi: 'NOIHA', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'H - O - A - N - I', textVi: 'HOANI', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'H-A-N-O-I is the heart of Vietnam with 36 guild streets!',
            explanationVi: 'Hà Nội là thủ đô yêu dấu với 36 phố phường rêu phong cổ kính!'
          },
          {
            id: 'p_g3_2',
            questionEn: 'What structure connects two riverbanks? (B - R - I - D - G - E)',
            questionVi: 'Công trình vắt qua hai bờ sông để xe cộ qua lại là gì? (B - R - I - D - G - E)',
            scrambleTarget: 'BRIDGE',
            options: [
              { id: 'opt1', textEn: 'B - R - I - D - G - E', textVi: 'BRIDGE (Cây cầu)', icon: '🌉', isCorrect: true },
              { id: 'opt2', textEn: 'G - E - D - I - R - B', textVi: 'GEDIRB', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'B - I - R - D - G - E', textVi: 'BIRDGE', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'Like the Dragon Bridge in Da Nang or Long Bien Bridge in Hanoi!',
            explanationVi: 'Cầu Rồng Đà Nẵng, Cầu Long Biên lịch sử hay Cầu Cần Thơ!'
          }
        ]
      },
      4: {
        gradeNum: 4,
        gradeBadge: 'Grade 4 Voyager',
        missionTitleEn: 'Geological Wonder & Biodiversity Words',
        missionTitleVi: 'Từ Vựng Địa Chất & Sinh Thái Học',
        missionIntroEn: 'Crack vocabulary related to caves, mountains, and wildlife in Vietnam!',
        missionIntroVi: 'Giải mã từ vựng về hang động, rừng nguyên sinh và muôn loài!',
        targetObjective: 'Master multisyllabic natural science and geography vocabulary.',
        starsReward: 40,
        steps: [
          {
            id: 'p_g4_1',
            questionEn: 'Unscramble the word for a giant underground cave system: (C - A - V - E - R - N)',
            questionVi: 'Xếp từ vựng chỉ hệ thống hang động ngầm kỳ vĩ: (C - A - V - E - R - N)',
            scrambleTarget: 'CAVERN',
            options: [
              { id: 'opt1', textEn: 'C - A - V - E - R - N', textVi: 'CAVERN (Hang động kỳ vĩ)', icon: '🪨', isCorrect: true },
              { id: 'opt2', textEn: 'V - A - C - E - R - N', textVi: 'VACERN', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'C - A - N - E - R - V', textVi: 'CANERV', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'Son Doong is the largest natural cavern in the entire world!',
            explanationVi: 'Sơn Đoòng là hang động tự nhiên tráng lệ lớn nhất trên thế giới!'
          },
          {
            id: 'p_g4_2',
            questionEn: 'What do we call a high rocky landmass? (M - O - U - N - T - A - I - N)',
            questionVi: 'Vùng đất đá cao sừng sững chạm tới tầng mây gọi là gì? (M - O - U - N - T - A - I - N)',
            scrambleTarget: 'MOUNTAIN',
            options: [
              { id: 'opt1', textEn: 'M - O - U - N - T - A - I - N', textVi: 'MOUNTAIN (Núi cao)', icon: '⛰️', isCorrect: true },
              { id: 'opt2', textEn: 'M - O - T - U - N - I - A - N', textVi: 'MOTUNIAN', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'N - I - A - T - N - U - O - M', textVi: 'NIATNUOM', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'Fansipan is the highest mountain peak in Indochina at 3,143m!',
            explanationVi: 'Đỉnh Fansipan cao 3.143m là nóc nhà Đông Dương sừng sững giữa ngàn mây!'
          }
        ]
      },
      5: {
        gradeNum: 5,
        gradeBadge: 'Grade 5 Champion',
        missionTitleEn: 'UNESCO Heritage & Civilization Lexicon',
        missionTitleVi: 'Từ Vựng Di Sản UNESCO & Văn Minh Nhân Loại',
        missionIntroEn: 'Assemble advanced vocabulary describing historical preservation and culture!',
        missionIntroVi: 'Ghép nối từ vựng học thuật về bảo tồn di sản và văn hóa dân tộc!',
        targetObjective: 'Master advanced academic vocabulary aligned with A2 English standards.',
        starsReward: 50,
        steps: [
          {
            id: 'p_g5_1',
            questionEn: 'Unscramble the word: "H - E - R - I - T - A - G - E" (Precious legacy passed down through generations)',
            questionVi: 'Ghép từ chỉ di sản vô giá được cha ông truyền lại qua nhiều thế hệ: (H - E - R - I - T - A - G - E)',
            scrambleTarget: 'HERITAGE',
            options: [
              { id: 'opt1', textEn: 'H - E - R - I - T - A - G - E', textVi: 'HERITAGE (Di sản văn hóa / thiên nhiên)', icon: '🏛️', isCorrect: true },
              { id: 'opt2', textEn: 'H - E - T - I - R - A - G - E', textVi: 'HETIRAGE', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'G - A - T - I - R - E - H - E', textVi: 'GATIREHE', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'Vietnam is blessed with world-renowned UNESCO cultural and natural heritage sites.',
            explanationVi: 'Việt Nam tự hào sở hữu nhiều di sản thế giới được UNESCO công nhận!'
          },
          {
            id: 'p_g5_2',
            questionEn: 'What royal fortified castle in Hue served as the center of government? (C - I - T - A - D - E - L)',
            questionVi: 'Tòa thành hoàng gia kiên cố tại Huế từng là trung tâm triều đình gọi là gì? (C - I - T - A - D - E - L)',
            scrambleTarget: 'CITADEL',
            options: [
              { id: 'opt1', textEn: 'C - I - T - A - D - E - L', textVi: 'CITADEL (Hoàng thành / Kinh thành)', icon: '🏰', isCorrect: true },
              { id: 'opt2', textEn: 'D - E - L - C - I - T - A', textVi: 'DELCITA', icon: '❌', isCorrect: false },
              { id: 'opt3', textEn: 'C - A - T - I - D - E - L', textVi: 'CATIDEL', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'The Imperial Citadel of Hue features the Purple Forbidden City and majestic gates.',
            explanationVi: 'Hoàng thành Huế lưu giữ Tử Cấm Thành uy nghiêm và Cổng Ngọ Môn tráng lệ!'
          }
        ]
      }
    }
  },

  // ----------------------------------------------------------------------------
  // 5. CHAMPION ISLAND – CIRCULAR 27 ARENA & TREASURE CHEST
  // ----------------------------------------------------------------------------
  {
    id: 'champion',
    orderNumber: 5,
    nameEn: 'Champion Island',
    nameVi: 'Đảo Quán Quân',
    subtitleEn: 'Quizzes and Rewards',
    subtitleVi: 'Đấu Trường Đánh Giá Thông Tư 27 & Rương Kho Báu Vàng',
    taglineEn: 'Conquer Level 1, 2, and 3 challenges, unlock the magical 3D chest, and claim 50 golden stars!',
    taglineVi: 'Vượt qua 3 cấp độ Thông tư 27 (Nhận biết - Kết nối - Vận dụng) để mở Rương báu!',
    crystalName: 'Ruby Flame & Sun Gold Crystal',
    crystalColor: 'text-amber-400',
    crystalHex: '#eab308',
    glowRgba: 'rgba(234, 179, 8, 0.55)',
    badgeText: 'CIRCULAR 27 ARENA',
    gradientBg: 'from-amber-500/20 via-rose-600/30 to-amber-950/60',
    cardBorder: 'border-amber-400/80 hover:border-amber-300 ring-2 ring-amber-400/30',
    floatDelay: 'animate-island-5',
    landmarkFeature: 'Golden Trophy Tower & Glowing 3D Treasure Chest',
    gradeData: {
      1: {
        gradeNum: 1,
        gradeBadge: 'Grade 1 Starter',
        missionTitleEn: 'Grade 1 Champion Trophy Quest',
        missionTitleVi: 'Thử Thách Quán Quân Lớp 1 (Thông tư 27)',
        missionIntroEn: 'Test your vocabulary recognition and unlock the glowing treasure chest!',
        missionIntroVi: 'Kiểm tra nhận biết từ vựng lớp 1 và mở rương kho báu vàng óng ả!',
        targetObjective: 'Circular 27 Evaluation: Article 7 Level 1 (Recognize) & Level 2 (Connect).',
        starsReward: 50,
        steps: [
          {
            id: 'c_g1_1',
            level: 1,
            questionEn: '[Level 1: Recognize] What is the English word for "Hòn đảo"?',
            questionVi: '[Cấp độ 1: Nhận biết] Từ tiếng Anh chỉ "Hòn đảo" là gì?',
            options: [
              { id: 'opt1', textEn: 'Island', textVi: 'Hòn đảo', icon: '🏝️', isCorrect: true },
              { id: 'opt2', textEn: 'Book', textVi: 'Quyển sách', icon: '📖', isCorrect: false },
              { id: 'opt3', textEn: 'Chair', textVi: 'Cái ghế', icon: '🪑', isCorrect: false }
            ],
            explanationEn: 'Island means a piece of land surrounded by water!',
            explanationVi: 'Island là hòn đảo xinh đẹp được bao bọc bởi đại dương xanh biếc!'
          },
          {
            id: 'c_g1_2',
            level: 2,
            questionEn: '[Level 2: Connect] Complete the sentence: "I see a blue _______ in the sea."',
            questionVi: '[Cấp độ 2: Kết nối] Hoàn thiện câu: "I see a blue _______ in the sea."',
            options: [
              { id: 'opt1', textEn: 'boat', textVi: 'chiếc thuyền buồm', icon: '⛵', isCorrect: true },
              { id: 'opt2', textEn: 'pencil', textVi: 'cây bút chì', icon: '✏️', isCorrect: false },
              { id: 'opt3', textEn: 'pillow', textVi: 'chiếc gối ngủ', icon: '🛏️', isCorrect: false }
            ],
            explanationEn: 'Boats sail across the sea, so "a blue boat" is correct!',
            explanationVi: 'Thuyền buồm lướt sóng trên biển, ghép "blue boat" là chuẩn nhất!'
          },
          {
            id: 'c_g1_3',
            level: 3,
            questionEn: '[Level 3: Apply] Point to the flag of Vietnam:',
            questionVi: '[Cấp độ 3: Vận dụng] Chỉ vào Quốc kỳ thân yêu của nước Việt Nam:',
            options: [
              { id: 'opt1', textEn: 'Red flag with a central golden star', textVi: 'Cờ đỏ sao vàng năm cánh', icon: '🇻🇳', isCorrect: true },
              { id: 'opt2', textEn: 'Blue flag with white stripes', textVi: 'Cờ sọc xanh', icon: '🏁', isCorrect: false },
              { id: 'opt3', textEn: 'Plain white sheet', textVi: 'Tấm vải trắng', icon: '🏳️', isCorrect: false }
            ],
            explanationEn: 'The red flag with a golden star is the proud national flag of Vietnam!',
            explanationVi: 'Lá cờ đỏ sao vàng thiêng liêng là niềm tự hào của muôn triệu trái tim Việt Nam!'
          }
        ]
      },
      2: {
        gradeNum: 2,
        gradeBadge: 'Grade 2 Explorer',
        missionTitleEn: 'Grade 2 Explorer Assessment',
        missionTitleVi: 'Thử Thách Quán Quân Lớp 2 (Thông tư 27)',
        missionIntroEn: 'Demonstrate your knowledge of classroom objects and Vietnamese wonders!',
        missionIntroVi: 'Thể hiện kiến thức tiếng Anh lớp 2 và rinh về rương vàng rực rỡ!',
        targetObjective: 'Circular 27 Evaluation: Recognize, Connect & Apply in Grade 2 context.',
        starsReward: 50,
        steps: [
          {
            id: 'c_g2_1',
            level: 1,
            questionEn: '[Level 1: Recognize] What do we call a bridge shaped like a mythical creature in Da Nang?',
            questionVi: '[Cấp độ 1: Nhận biết] Cây cầu uốn lượn mang hình sinh vật thần thoại ở Đà Nẵng là gì?',
            options: [
              { id: 'opt1', textEn: 'Dragon Bridge', textVi: 'Cầu Rồng', icon: '🐉', isCorrect: true },
              { id: 'opt2', textEn: 'Tiger Ladder', textVi: 'Thang Hổ', icon: '🪜', isCorrect: false },
              { id: 'opt3', textEn: 'Elephant Gate', textVi: 'Cổng Voi', icon: '🐘', isCorrect: false }
            ],
            explanationEn: 'Da Nang is famous for its majestic Dragon Bridge!',
            explanationVi: 'Đà Nẵng rực rỡ với cây Cầu Rồng phun lửa, phun nước vào cuối tuần!'
          },
          {
            id: 'c_g2_2',
            level: 2,
            questionEn: '[Level 2: Connect] Which pair matches correctly?',
            questionVi: '[Cấp độ 2: Kết nối] Cặp từ nào sau đây ghép đôi chính xác nhất?',
            options: [
              { id: 'opt1', textEn: 'Hanoi -> Turtle Tower', textVi: 'Hà Nội -> Tháp Rùa Hồ Gươm', icon: '🐢', isCorrect: true },
              { id: 'opt2', textEn: 'Ha Long -> High snowy glacier', textVi: 'Hạ Long -> Sông băng tuyết', icon: '🧊', isCorrect: false },
              { id: 'opt3', textEn: 'Da Lat -> Tropical desert cactus', textVi: 'Đà Lạt -> Xương rồng sa mạc', icon: '🌵', isCorrect: false }
            ],
            explanationEn: 'Turtle Tower is right in Hanoi at Hoan Kiem Lake!',
            explanationVi: 'Tháp Rùa nằm ngay giữa Hồ Gươm tại thủ đô Hà Nội!'
          },
          {
            id: 'c_g2_3',
            level: 3,
            questionEn: '[Level 3: Apply] What sentence should you say when greeting Captain Trang in the morning?',
            questionVi: '[Cấp độ 3: Vận dụng] Em sẽ nói câu nào khi chào cô giáo vào buổi sáng?',
            options: [
              { id: 'opt1', textEn: '"Good morning, teacher! Nice to see you!"', textVi: '"Chào buổi sáng cô giáo! Rất vui được gặp cô!"', icon: '👋', isCorrect: true },
              { id: 'opt2', textEn: '"Good night! Go to sleep!"', textVi: '"Chúc ngủ ngon! Đi ngủ thôi!"', icon: '😴', isCorrect: false },
              { id: 'opt3', textEn: '"Goodbye! See you next year!"', textVi: '"Tạm biệt! Hẹn gặp lại năm sau!"', icon: '👋', isCorrect: false }
            ],
            explanationEn: 'Always greet politely with "Good morning" at school!',
            explanationVi: 'Lời chào lễ phép "Good morning" thể hiện nét đẹp văn minh học đường!'
          }
        ]
      },
      3: {
        gradeNum: 3,
        gradeBadge: 'Grade 3 Pioneer',
        missionTitleEn: 'Grade 3 Master Challenge',
        missionTitleVi: 'Thử Thách Đấu Trường Lớp 3 (Thông tư 27)',
        missionIntroEn: 'Master past tense, directions, and regional Vietnamese culture!',
        missionIntroVi: 'Chinh phục ngữ pháp và di sản ba miền để mở rương châu báu!',
        targetObjective: 'Circular 27: Multi-tiered evaluation of A1 grammar and culture.',
        starsReward: 50,
        steps: [
          {
            id: 'c_g3_1',
            level: 1,
            questionEn: '[Level 1: Recognize] What is the English name for "Cố đô Huế"?',
            questionVi: '[Cấp độ 1: Nhận biết] Tên tiếng Anh của "Cố đô Huế" là gì?',
            options: [
              { id: 'opt1', textEn: 'Hue Imperial City', textVi: 'Kinh thành Huế / Cố đô Huế', icon: '👑', isCorrect: true },
              { id: 'opt2', textEn: 'Space City', textVi: 'Thành phố vũ trụ', icon: '🛰️', isCorrect: false },
              { id: 'opt3', textEn: 'Ocean Harbor', textVi: 'Cảng biển khơi', icon: '⚓', isCorrect: false }
            ],
            explanationEn: 'Hue was the imperial capital of the Nguyen Dynasty from 1802 to 1945.',
            explanationVi: 'Huế là kinh đô hoa lệ của triều đại nhà Nguyễn từ 1802 đến 1945.'
          },
          {
            id: 'c_g3_2',
            level: 2,
            questionEn: '[Level 2: Connect] "Yesterday, our class ________ to Ha Long Bay by bus."',
            questionVi: '[Cấp độ 2: Kết nối] Chọn dạng đúng của động từ: "Yesterday, our class ________ to Ha Long Bay by bus."',
            options: [
              { id: 'opt1', textEn: 'traveled', textVi: 'đã du lịch (quá khứ)', icon: '🚌', isCorrect: true },
              { id: 'opt2', textEn: 'is traveling now', textVi: 'đang đi bây giờ', icon: '⏱️', isCorrect: false },
              { id: 'opt3', textEn: 'will travel tomorrow', textVi: 'sẽ đi ngày mai', icon: '📅', isCorrect: false }
            ],
            explanationEn: 'Since "yesterday" indicates past time, we use the past tense "traveled"!',
            explanationVi: 'Dấu hiệu "yesterday" (hôm qua) chỉ thì quá khứ đơn, nên dùng "traveled"!'
          },
          {
            id: 'c_g3_3',
            level: 3,
            questionEn: '[Level 3: Apply] How would you describe Hoi An to a foreign tourist in English?',
            questionVi: '[Cấp độ 3: Vận dụng] Em sẽ miêu tả Hội An thế nào với một du khách nước ngoài?',
            options: [
              { id: 'opt1', textEn: '"Hoi An is an ancient town with glowing lantern streets and delicious Cao Lau noodles!"', textVi: '"Hội An là phố cổ lung linh đèn lồng và có món mì Cao Lầu tuyệt hảo!"', icon: '🏮', isCorrect: true },
              { id: 'opt2', textEn: '"Hoi An is a snowy polar ice cap with polar bears."', textVi: '"Hội An là vùng băng tuyết bắc cực có gấu trắng."', icon: '🐻‍❄️', isCorrect: false },
              { id: 'opt3', textEn: '"Hoi An has no rivers, no people, and no history."', textVi: '"Hội An không có sông, không người và không lịch sử."', icon: '🚫', isCorrect: false }
            ],
            explanationEn: 'That is a vivid, culturally accurate, and inviting description!',
            explanationVi: 'Câu miêu tả sống động, đậm đà văn hóa và thể hiện lòng mến khách!'
          }
        ]
      },
      4: {
        gradeNum: 4,
        gradeBadge: 'Grade 4 Voyager',
        missionTitleEn: 'Grade 4 Regional Arena',
        missionTitleVi: 'Đấu Trường Di Sản Lớp 4 (Thông tư 27)',
        missionIntroEn: 'Evaluate comparative adjectives, ecosystems, and Vietnamese traditions!',
        missionIntroVi: 'Đánh giá kỹ năng so sánh, hệ sinh thái và phong tục dân gian Việt Nam!',
        targetObjective: 'Circular 27: Rigorous Article 7 assessment covering Bloom levels.',
        starsReward: 50,
        steps: [
          {
            id: 'c_g4_1',
            level: 1,
            questionEn: '[Level 1: Recognize] Fansipan is the ________ peak in Vietnam.',
            questionVi: '[Cấp độ 1: Nhận biết] Đỉnh Fansipan là đỉnh núi ________ ở Việt Nam.',
            options: [
              { id: 'opt1', textEn: 'highest', textVi: 'cao nhất (3.143m)', icon: '🏔️', isCorrect: true },
              { id: 'opt2', textEn: 'shortest', textVi: 'thấp nhất', icon: '📉', isCorrect: false },
              { id: 'opt3', textEn: 'narrowest', textVi: 'hẹp nhất', icon: '📏', isCorrect: false }
            ],
            explanationEn: 'Fansipan is known as "The Roof of Indochina" because it is the highest peak!',
            explanationVi: 'Fansipan được mệnh danh là Nóc nhà Đông Dương vì độ cao 3.143m ngất ngưởng!'
          },
          {
            id: 'c_g4_2',
            level: 2,
            questionEn: '[Level 2: Connect] Why do farmers create terraced rice fields in Mu Cang Chai and Sa Pa?',
            questionVi: '[Cấp độ 2: Kết nối] Vì sao đồng bào vùng cao tạo nên những thửa ruộng bậc thang kỳ vĩ?',
            options: [
              { id: 'opt1', textEn: 'To farm rice on steep mountain slopes and retain water', textVi: 'Để canh tác lúa trên sườn núi dốc và giữ nước tưới tiêu', icon: '🌾', isCorrect: true },
              { id: 'opt2', textEn: 'To build submarine docks', textVi: 'Để làm bến tàu ngầm', icon: '🚢', isCorrect: false },
              { id: 'opt3', textEn: 'To dig deep diamond mines', textVi: 'Để đào mỏ kim cương', icon: '💎', isCorrect: false }
            ],
            explanationEn: 'Terraced rice fields are masterpieces of indigenous agriculture and engineering!',
            explanationVi: 'Ruộng bậc thang là kiệt tác trí tuệ canh tác độc đáo của đồng bào vùng cao!'
          },
          {
            id: 'c_g4_3',
            level: 3,
            questionEn: '[Level 3: Apply] If a guest asks: "What should I wear when visiting a historic pagoda in Vietnam?", what is the polite advice?',
            questionVi: '[Cấp độ 3: Vận dụng] Du khách hỏi: "Nên mặc trang phục gì khi vào viếng chùa cổ?", em tư vấn thế nào?',
            options: [
              { id: 'opt1', textEn: '"You should wear respectful and modest clothes covering shoulders and knees."', textVi: '"Bạn nên mặc trang phục lịch sự, trang nghiêm và kín đáo."', icon: '🛕', isCorrect: true },
              { id: 'opt2', textEn: '"You should wear swimming trunks and flip flops."', textVi: '"Mặc đồ bơi và dép lê."', icon: '🩳', isCorrect: false },
              { id: 'opt3', textEn: '"Wear astronaut space helmets."', textVi: '"Đội mũ du hành vũ trụ."', icon: '🧑‍🚀', isCorrect: false }
            ],
            explanationEn: 'Showing respect at cultural sanctuaries is an essential part of Vietnamese etiquette.',
            explanationVi: 'Tôn trọng nơi thờ tự tâm linh là nét đẹp văn hóa truyền thống của người Việt.'
          }
        ]
      },
      5: {
        gradeNum: 5,
        gradeBadge: 'Grade 5 Champion',
        missionTitleEn: 'Grade 5 Grand Champion Trophy',
        missionTitleVi: 'Đại Đấu Trường Quán Quân Lớp 5 (Thông tư 27)',
        missionIntroEn: 'Conquer the supreme challenge of A2 extension, national pride, and futuristic vision!',
        missionIntroVi: 'Chinh phục đỉnh cao A2 mở rộng, niềm tự hào dân tộc và khát vọng tương lai!',
        targetObjective: 'Circular 27: Full Article 7 Mastery across all three cognitive dimensions.',
        starsReward: 50,
        steps: [
          {
            id: 'c_g5_1',
            level: 1,
            questionEn: '[Level 1: Recognize] Which international declaration recognizes the Spratly and Paracel islands as sovereign territories of Vietnam?',
            questionVi: '[Cấp độ 1: Nhận biết] Hai quần đảo thiêng liêng Hoàng Sa và Trường Sa là một phần không thể tách rời của lãnh thổ nào?',
            options: [
              { id: 'opt1', textEn: 'The Socialist Republic of Vietnam', textVi: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam', icon: '🇻🇳', isCorrect: true },
              { id: 'opt2', textEn: 'The Arctic Ocean Pole', textVi: 'Vùng cực bắc', icon: '🧊', isCorrect: false },
              { id: 'opt3', textEn: 'Outer Space Federation', textVi: 'Liên đoàn không gian', icon: '🌌', isCorrect: false }
            ],
            explanationEn: 'Hoang Sa and Truong Sa are the sacred, inseparable maritime islands of Vietnam!',
            explanationVi: 'Hoàng Sa và Trường Sa là lãnh thổ thiêng liêng ngàn đời của Tổ quốc Việt Nam!'
          },
          {
            id: 'c_g5_2',
            level: 2,
            questionEn: '[Level 2: Connect] What is the relationship between preserving UNESCO cultural heritage and promoting sustainable tourism?',
            questionVi: '[Cấp độ 2: Kết nối] Mối quan hệ giữa bảo tồn di sản UNESCO và phát triển du lịch bền vững là gì?',
            options: [
              { id: 'opt1', textEn: 'Protecting monuments ensures future generations and visitors can appreciate authentic history', textVi: 'Bảo vệ di tích giúp thế hệ mai sau và du khách thấu hiểu giá trị lịch sử đích thực', icon: '🤝', isCorrect: true },
              { id: 'opt2', textEn: 'We should demolish ancient temples to build plastic amusement parks', textVi: 'Phá hủy chùa cổ để làm công viên nhựa', icon: '🚫', isCorrect: false },
              { id: 'opt3', textEn: 'Tourism has no connection with cultural heritage', textVi: 'Du lịch không liên quan tới di sản', icon: '❓', isCorrect: false }
            ],
            explanationEn: 'Sustainable tourism balances economic development with environmental and historical preservation.',
            explanationVi: 'Du lịch bền vững hài hòa giữa phát triển kinh tế và gìn giữ di sản cha ông.'
          },
          {
            id: 'c_g5_3',
            level: 3,
            questionEn: '[Level 3: Apply] You are writing a letter to UNESCO ambassadors about Vietnamese youth in the 21st century. Which statement best captures our spirit?',
            questionVi: '[Cấp độ 3: Vận dụng] Thông điệp nào thể hiện sâu sắc nhất tinh thần thế hệ trẻ Việt Nam thời đại mới?',
            options: [
              { id: 'opt1', textEn: '"Vietnamese students cherish national heritage while passionately mastering science, technology, and global languages to contribute to humanity."', textVi: '"Học sinh Việt Nam trân quý di sản dân tộc, nỗ lực làm chủ khoa học công nghệ và ngoại ngữ để cống hiến cho nhân loại."', icon: '🕊️', isCorrect: true },
              { id: 'opt2', textEn: '"We only play video games and do not care about the future of our country."', textVi: '"Chỉ chơi game và không quan tâm tương lai đất nước."', icon: '🎮', isCorrect: false },
              { id: 'opt3', textEn: '"We want to forget our traditions and culture."', textVi: '"Quên đi truyền thống văn hóa."', icon: '❌', isCorrect: false }
            ],
            explanationEn: 'Inspiring, noble, and worthy of a true VietDiscovery champion! The treasure chest is yours!',
            explanationVi: 'Thông điệp ngời sáng trí tuệ và khát vọng của thiếu nhi Việt Nam! Rương báu chính thức mở ra!'
          }
        ]
      }
    }
  }
];
