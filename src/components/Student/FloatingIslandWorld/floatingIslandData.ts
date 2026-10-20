// ==============================================================================
// VIETDISCOVERY BY MS. TRANG – 3D FLOATING ISLAND ADVENTURE WORLD DATA
// Pedagogically Aligned to Grades 1–5 & MOET Circular 27/2020/TT-BGDDT
// Full 5 Islands x 5 Grades x 4 Differentiated Activities = 100 Learning Steps
// 4-Option (A, B, C, D) Question System with Plausible Distractors
// ==============================================================================

export type IslandId = 'wonder' | 'listening' | 'speaking' | 'puzzle' | 'champion';

export interface IslandActivityStep {
  id: string;
  level?: 1 | 2 | 3 | 4; // Circular 27 level if applicable
  questionEn: string;
  questionVi: string;
  audioPrompt?: string; // Spoken audio text for native speech
  targetPhonics?: string;
  scrambleTarget?: string; // Word to unscramble
  image?: string;
  options: {
    id: string;
    textEn: string;
    textVi: string;
    icon?: string;
    image?: string;
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
  imageSrc?: string;
  gradeData: Record<number, IslandGradeContent>;
}

export const FLOATING_ISLANDS: FloatingIslandDef[] = [
  {
    "id": "wonder",
    "orderNumber": 1,
    "nameEn": "Discovery Island",
    "nameVi": "Đảo Khám Phá",
    "subtitleEn": "Discover Vietnam",
    "subtitleVi": "Khám phá Địa danh & Kỳ quan Việt Nam",
    "taglineEn": "Journey across majestic bays, ancient towers, and imperial citadels!",
    "taglineVi": "Hành trình vượt ngàn danh lam thắng cảnh Việt Nam rực rỡ!",
    "crystalName": "Emerald Crystal",
    "crystalColor": "text-emerald-400",
    "crystalHex": "#10b981",
    "glowRgba": "rgba(16, 185, 129, 0.45)",
    "badgeText": "DISCOVER VIETNAM",
    "gradientBg": "from-emerald-500/20 via-teal-600/30 to-emerald-900/60",
    "cardBorder": "border-emerald-400/60 hover:border-emerald-300",
    "floatDelay": "animate-island-1",
    "landmarkFeature": "Hạ Long Karst & Golden Pagoda",
    "imageSrc": "/assets/islands/island_1_kham_pha.webp",
    "gradeData": {
      "1": {
        "gradeNum": 1,
        "gradeBadge": "Grade 1 Starter",
        "missionTitleEn": "Magical Bay & Turtle Tower",
        "missionTitleVi": "Vịnh Thần Tiên & Tháp Rùa Kỳ Thú",
        "missionIntroEn": "Look at the pictures and tap the famous wonders of Vietnam!",
        "missionIntroVi": "Bé hãy nhìn tranh và chạm vào kỳ quan tuyệt đẹp của Việt Nam nhé!",
        "targetObjective": "Identify iconic landmarks through visual cues and short English names.",
        "starsReward": 25,
        "steps": [
          {
            "id": "w_g1_1",
            "level": 1,
            "questionEn": "Which picture shows the emerald water of Ha Long Bay?",
            "questionVi": "Bức tranh nào thể hiện Vịnh Hạ Long xanh biếc?",
            "audioPrompt": "Ha Long Bay! A natural wonder of the world!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Ha Long Bay",
                "textVi": "Vịnh Hạ Long",
                "icon": "⛵",
                "isCorrect": true,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt2",
                "textEn": "Sword Lake",
                "textVi": "Hồ Hoàn Kiếm",
                "icon": "🐢",
                "isCorrect": false,
                "image": "/destinations/hanoi_hoankiem.webp"
              },
              {
                "id": "opt3",
                "textEn": "Turtle Tower",
                "textVi": "Tháp Rùa",
                "icon": "🏛️",
                "isCorrect": false,
                "image": "/destinations/hanoi_turtle_tower.webp"
              },
              {
                "id": "opt4",
                "textEn": "One Pillar Pagoda",
                "textVi": "Chùa Một Cột",
                "icon": "🛕",
                "isCorrect": false,
                "image": "/destinations/one_pillar_pagoda_3d.png"
              }
            ],
            "explanationEn": "Ha Long Bay has thousands of limestone islands in emerald water!",
            "explanationVi": "Vịnh Hạ Long có hàng ngàn đảo đá vôi kỳ vĩ trên mặt nước xanh ngọc!"
          },
          {
            "id": "w_g1_2",
            "level": 1,
            "questionEn": "Where can you see the historic Turtle Tower in Hanoi?",
            "questionVi": "Tháp Rùa lịch sử nằm ở đâu tại Hà Nội?",
            "audioPrompt": "Turtle Tower in the middle of Sword Lake!",
            "image": "/destinations/hanoi_turtle_tower.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Sword Lake",
                "textVi": "Hồ Hoàn Kiếm",
                "icon": "🐢",
                "isCorrect": true,
                "image": "/destinations/hanoi_hoankiem.webp"
              },
              {
                "id": "opt2",
                "textEn": "West Lake",
                "textVi": "Hồ Tây",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/destinations/west_lake_hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Perfume River",
                "textVi": "Sông Hương",
                "icon": "🌸",
                "isCorrect": false,
                "image": "/destinations/perfume_river_hue.webp"
              },
              {
                "id": "opt4",
                "textEn": "Red River",
                "textVi": "Sông Hồng",
                "icon": "🌉",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              }
            ],
            "explanationEn": "The Turtle Tower stands peacefully in the center of Sword Lake!",
            "explanationVi": "Tháp Rùa cổ kính soi bóng uy nghiêm giữa lòng Hồ Hoàn Kiếm!"
          },
          {
            "id": "w_g1_3",
            "level": 2,
            "questionEn": "Which bright red bridge leads to Ngoc Son Temple in Hanoi?",
            "questionVi": "Cây cầu màu đỏ son nào dẫn vào đền Ngọc Sơn tại Hà Nội?",
            "audioPrompt": "The Huc Bridge, the morning sunlight bridge!",
            "image": "/destinations/hanoi_hoankiem.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "The Huc Bridge",
                "textVi": "Cầu Thê Húc",
                "icon": "🌉",
                "isCorrect": true,
                "image": "/destinations/the_huc_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Long Bien Bridge",
                "textVi": "Cầu Long Biên",
                "icon": "🚂",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Dragon Bridge",
                "textVi": "Cầu Rồng",
                "icon": "🐉",
                "isCorrect": false,
                "image": "/destinations/danang_dragon_bridge.webp"
              },
              {
                "id": "opt4",
                "textEn": "Nhat Tan Bridge",
                "textVi": "Cầu Nhật Tân",
                "icon": "🏗️",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              }
            ],
            "explanationEn": "The Huc Bridge is famous for its curved wooden design and bright red color.",
            "explanationVi": "Cầu Thê Húc cong cong như con tôm với màu đỏ son nổi bật giữa hồ Hoàn Kiếm."
          },
          {
            "id": "w_g1_4",
            "level": 2,
            "questionEn": "Which ancient temple in Hanoi is shaped like a blooming lotus on water?",
            "questionVi": "Ngôi chùa cổ kính nào ở Hà Nội có dáng hình tựa đóa sen nở trên mặt hồ?",
            "audioPrompt": "One Pillar Pagoda, built like a sacred lotus flower!",
            "image": "/destinations/one_pillar_pagoda_3d.png",
            "options": [
              {
                "id": "opt1",
                "textEn": "One Pillar Pagoda",
                "textVi": "Chùa Một Cột",
                "icon": "🛕",
                "isCorrect": true,
                "image": "/destinations/one_pillar_pagoda_3d.png"
              },
              {
                "id": "opt2",
                "textEn": "Tran Quoc Pagoda",
                "textVi": "Chùa Trấn Quốc",
                "icon": "🏯",
                "isCorrect": false,
                "image": "/destinations/tran_quoc_pagoda.webp"
              },
              {
                "id": "opt3",
                "textEn": "Ngoc Son Temple",
                "textVi": "Đền Ngọc Sơn",
                "icon": "⛩️",
                "isCorrect": false,
                "image": "/destinations/hanoi_hoankiem.webp"
              },
              {
                "id": "opt4",
                "textEn": "Temple of Literature",
                "textVi": "Văn Miếu Quốc Tử Giám",
                "icon": "📜",
                "isCorrect": false,
                "image": "/destinations/temple_of_literature.webp"
              }
            ],
            "explanationEn": "One Pillar Pagoda was built in 1049, designed to look like a lotus blossoming from a pond.",
            "explanationVi": "Chùa Một Cột được xây dựng từ năm 1049, mang biểu tượng đóa sen ngát hương vươn lên."
          }
        ]
      },
      "2": {
        "gradeNum": 2,
        "gradeBadge": "Grade 2 Explorer",
        "missionTitleEn": "Ancient Citadel & Colorful Lanterns",
        "missionTitleVi": "Kinh Thành Cổ & Đèn Lồng Sắc Màu",
        "missionIntroEn": "Travel from Hue Imperial City to the sparkling streets of Hoi An!",
        "missionIntroVi": "Du ngoạn Kinh thành Huế đến phố cổ Hội An lung linh sắc màu!",
        "targetObjective": "Describe landmarks using simple adjectives (ancient, colorful, majestic).",
        "starsReward": 30,
        "steps": [
          {
            "id": "w_g2_1",
            "level": 1,
            "questionEn": "Which ancient city in Central Vietnam is famous for colorful lanterns?",
            "questionVi": "Đô thị cổ nào ở miền Trung nổi tiếng với đèn lồng rực rỡ?",
            "audioPrompt": "Hoi An Ancient Town with glowing paper lanterns!",
            "image": "/destinations/hoian_ancient_town.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Hoi An Ancient Town",
                "textVi": "Phố cổ Hội An",
                "icon": "🏮",
                "isCorrect": true,
                "image": "/destinations/hoian_ancient_town.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Hue Imperial City",
                "textVi": "Cố đô Huế",
                "icon": "👑",
                "isCorrect": false,
                "image": "/destinations/hue_citadel.webp"
              },
              {
                "id": "opt3",
                "textEn": "Da Nang City",
                "textVi": "Thành phố Đà Nẵng",
                "icon": "🏙️",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              },
              {
                "id": "opt4",
                "textEn": "My Son Sanctuary",
                "textVi": "Thánh địa Mỹ Sơn",
                "icon": "🛕",
                "isCorrect": false,
                "image": "/destinations/my_son_sanctuary.webp"
              }
            ],
            "explanationEn": "Hoi An is famous for lantern festivals and the ancient Japanese Covered Bridge.",
            "explanationVi": "Hội An nổi tiếng với đêm hội đèn lồng lung linh và Chùa Cầu cổ kính."
          },
          {
            "id": "w_g2_2",
            "level": 1,
            "questionEn": "The historic Hue Citadel was home to which great era of Vietnam?",
            "questionVi": "Kinh thành Huế uy nghiêm là nơi lưu giữ di sản của triều đại nào?",
            "audioPrompt": "The royal Hue Citadel along the romantic Perfume River!",
            "image": "/destinations/hue_citadel.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Nguyen Dynasty Emperors",
                "textVi": "Các vị vua triều Nguyễn",
                "icon": "👑",
                "isCorrect": true,
                "image": "/destinations/hue_citadel.webp"
              },
              {
                "id": "opt2",
                "textEn": "Ly Dynasty Kings",
                "textVi": "Thời nhà Lý",
                "icon": "🗡️",
                "isCorrect": false,
                "image": "/destinations/thang_long_citadel.webp"
              },
              {
                "id": "opt3",
                "textEn": "Tran Dynasty Kings",
                "textVi": "Thời nhà Trần",
                "icon": "🛡️",
                "isCorrect": false,
                "image": "/destinations/temple_of_literature.webp"
              },
              {
                "id": "opt4",
                "textEn": "Le Dynasty Kings",
                "textVi": "Thời nhà Lê",
                "icon": "📜",
                "isCorrect": false,
                "image": "/destinations/hanoi_turtle_tower.webp"
              }
            ],
            "explanationEn": "Hue Imperial City was the capital of the Nguyen Dynasty from 1802 to 1945.",
            "explanationVi": "Đại Nội Huế là kinh đô của triều Nguyễn từ năm 1802 đến năm 1945."
          },
          {
            "id": "w_g2_3",
            "level": 2,
            "questionEn": "Which spectacular bridge in Da Nang breathes fire and water on weekends?",
            "questionVi": "Cây cầu độc đáo nào ở Đà Nẵng phun lửa và phun nước vào cuối tuần?",
            "audioPrompt": "The Dragon Bridge over the Han River in Da Nang!",
            "image": "/destinations/danang_dragon_bridge.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Dragon Bridge",
                "textVi": "Cầu Rồng",
                "icon": "🐉",
                "isCorrect": true,
                "image": "/destinations/danang_dragon_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Han River Swing Bridge",
                "textVi": "Cầu quay Sông Hàn",
                "icon": "🔄",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              },
              {
                "id": "opt3",
                "textEn": "Thuan Phuoc Bridge",
                "textVi": "Cầu Thuận Phước",
                "icon": "🌉",
                "isCorrect": false,
                "image": "/destinations/the_huc_bridge.webp"
              },
              {
                "id": "opt4",
                "textEn": "Tran Thi Ly Bridge",
                "textVi": "Cầu Trần Thị Lý",
                "icon": "⛵",
                "isCorrect": false,
                "image": "/destinations/danang_golden_bridge.webp"
              }
            ],
            "explanationEn": "Dragon Bridge spans the Han River and features a dragon that breathes fire and water!",
            "explanationVi": "Cầu Rồng bắc qua sông Hàn có hình dáng con rồng vàng phun lửa và phun nước kỳ thú!"
          },
          {
            "id": "w_g2_4",
            "level": 2,
            "questionEn": "What holds up the famous Golden Bridge in Ba Na Hills near Da Nang?",
            "questionVi": "Cái gì nâng đỡ Cầu Vàng nổi tiếng tại Bà Nà Hills gần Đà Nẵng?",
            "audioPrompt": "Giant stone hands holding the shimmering Golden Bridge!",
            "image": "/destinations/danang_golden_bridge.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Giant Stone Hands",
                "textVi": "Đôi bàn tay đá khổng lồ",
                "icon": "✋",
                "isCorrect": true,
                "image": "/destinations/danang_golden_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Silver Dragon Wings",
                "textVi": "Đôi cánh rồng bạc",
                "icon": "🪽",
                "isCorrect": false,
                "image": "/destinations/danang_dragon_bridge.webp"
              },
              {
                "id": "opt3",
                "textEn": "Golden Lotus Petals",
                "textVi": "Những cánh sen vàng",
                "icon": "🪷",
                "isCorrect": false,
                "image": "/assets/vocab/lotus.webp"
              },
              {
                "id": "opt4",
                "textEn": "Cloud Crystal Pillars",
                "textVi": "Trụ pha lê mây",
                "icon": "💎",
                "isCorrect": false,
                "image": "/assets/vocab/blue.webp"
              }
            ],
            "explanationEn": "Two giant moss-covered stone hands support the walkway high in the mountains.",
            "explanationVi": "Hai bàn tay đá khổng lồ rêu phong nâng dải lụa vàng giữa mây trời Bà Nà."
          }
        ]
      },
      "3": {
        "gradeNum": 3,
        "gradeBadge": "Grade 3 Foundation",
        "missionTitleEn": "Highland Pines & Floating Rivers",
        "missionTitleVi": "Ngàn Thông Đà Lạt & Sông Nước Miền Tây",
        "missionIntroEn": "Explore the cool pine hills of Da Lat and bustling floating markets of the Mekong!",
        "missionIntroVi": "Khám phá rừng thông mát mẻ Đà Lạt và chợ nổi rộn ràng miền Tây Nam Bộ!",
        "targetObjective": "Compare weather and landscapes across the three main regions of Vietnam.",
        "starsReward": 35,
        "steps": [
          {
            "id": "w_g3_1",
            "level": 1,
            "questionEn": "Which city is known as the 'City of Eternal Spring' with pine hills and waterfalls?",
            "questionVi": "Thành phố nào được mệnh danh là 'Thành phố ngàn hoa' với đồi thông và thác nước?",
            "audioPrompt": "Da Lat, the highland city of flowers, lakes, and pine forests!",
            "image": "/destinations/dalat_pine_hills.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Da Lat City",
                "textVi": "Thành phố Đà Lạt",
                "icon": "🌸",
                "isCorrect": true,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Nha Trang Beach",
                "textVi": "Biển Nha Trang",
                "icon": "🏖️",
                "isCorrect": false,
                "image": "/destinations/phu_quoc_island.webp"
              },
              {
                "id": "opt3",
                "textEn": "Phan Thiet Dunes",
                "textVi": "Đồi cát Phan Thiết",
                "icon": "🏜️",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              },
              {
                "id": "opt4",
                "textEn": "Buon Ma Thuot",
                "textVi": "Thành phố Buôn Ma Thuột",
                "icon": "☕",
                "isCorrect": false,
                "image": "/destinations/ban_gioc_waterfall.webp"
              }
            ],
            "explanationEn": "Da Lat is 1,500m above sea level with cool weather, romantic pine valleys, and fresh flowers.",
            "explanationVi": "Đà Lạt nằm ở độ cao 1.500m với khí hậu mát lành quanh năm và ngàn hoa khoe sắc."
          },
          {
            "id": "w_g3_2",
            "level": 2,
            "questionEn": "Where do farmers trade fresh fruits like mangoes and coconuts on wooden boats?",
            "questionVi": "Nơi nào nông dân buôn bán trái cây tươi như xoài, dừa trên những chiếc thuyền gỗ?",
            "audioPrompt": "Mekong Delta floating markets like Cai Rang and Phong Dien!",
            "image": "/destinations/mekong_delta.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Mekong Delta River",
                "textVi": "Đồng bằng sông Cửu Long",
                "icon": "🛶",
                "isCorrect": true,
                "image": "/destinations/mekong_delta.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Red River Delta",
                "textVi": "Đồng bằng sông Hồng",
                "icon": "🌾",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Central Highlands",
                "textVi": "Tây Nguyên đại ngàn",
                "icon": "⛰️",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt4",
                "textEn": "Northwest Mountains",
                "textVi": "Vùng núi Tây Bắc",
                "icon": "🏔️",
                "isCorrect": false,
                "image": "/destinations/ba_be_lake.webp"
              }
            ],
            "explanationEn": "The Mekong Delta is famous for vibrant floating markets where boats trade tropical produce.",
            "explanationVi": "Chợ nổi Đồng bằng sông Cửu Long là nét văn hóa sông nước độc đáo với hàng trăm ghe xuồng."
          },
          {
            "id": "w_g3_3",
            "level": 3,
            "questionEn": "Which is the tallest skyscraper in Vietnam, rising over Ho Chi Minh City?",
            "questionVi": "Tòa tháp cao nhất Việt Nam vươn lên kiêu hãnh bên bờ sông Sài Gòn là tòa nhà nào?",
            "audioPrompt": "Landmark 81 in Ho Chi Minh City, inspired by traditional bamboo bundles!",
            "image": "/destinations/hcmc_landmark81.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Landmark 81",
                "textVi": "Tòa nhà Landmark 81",
                "icon": "🏙️",
                "isCorrect": true,
                "image": "/destinations/hcmc_landmark81.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Bitexco Financial Tower",
                "textVi": "Tháp Bitexco",
                "icon": "🏢",
                "isCorrect": false,
                "image": "/destinations/hcmc_skyline.jpg"
              },
              {
                "id": "opt3",
                "textEn": "Ben Thanh Market",
                "textVi": "Chợ Bến Thành",
                "icon": "🏪",
                "isCorrect": false,
                "image": "/destinations/hcmc_benthanh.jpg"
              },
              {
                "id": "opt4",
                "textEn": "Saigon Opera House",
                "textVi": "Nhà hát Lớn Sài Gòn",
                "icon": "🎭",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              }
            ],
            "explanationEn": "Landmark 81 has 81 floors and reaches 461 meters, inspired by the strength of Vietnamese bamboo.",
            "explanationVi": "Landmark 81 cao 461m gồm 81 tầng, lấy cảm hứng từ bó tre truyền thống vươn lên mạnh mẽ."
          },
          {
            "id": "w_g3_4",
            "level": 3,
            "questionEn": "What makes the 36 Old Streets of Hanoi unique and historic?",
            "questionVi": "Điều gì làm nên nét lịch sử độc đáo của 36 phố phường Hà Nội?",
            "audioPrompt": "Each street in Hanoi Old Quarter was named after an artisan craft!",
            "image": "/destinations/hanoi_hoankiem.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Traditional artisan crafts",
                "textVi": "Các phố nghề thủ công truyền thống",
                "icon": "🧵",
                "isCorrect": true,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt2",
                "textEn": "Deep sea shipping ports",
                "textVi": "Cảng biển nước sâu",
                "icon": "⚓",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt3",
                "textEn": "Marine coral reserves",
                "textVi": "Khu bảo tồn san hô biển",
                "icon": "🪸",
                "isCorrect": false,
                "image": "/assets/vocab/marine_reserve.webp"
              },
              {
                "id": "opt4",
                "textEn": "Vast mountain caves",
                "textVi": "Hệ thống hang động núi cao",
                "icon": "⛰️",
                "isCorrect": false,
                "image": "/assets/vocab/cave.webp"
              }
            ],
            "explanationEn": "Each street historically specialized in a craft, like Silver Street (Hang Bac) or Silk Street (Hang Gai).",
            "explanationVi": "Mỗi phố cổ Hà Nội mang tên một ngành nghề thủ công truyền thống như Hàng Bạc, Hàng Gai."
          }
        ]
      },
      "4": {
        "gradeNum": 4,
        "gradeBadge": "Grade 4 Expansion",
        "missionTitleEn": "Giant Caves & Pristine Waterfalls",
        "missionTitleVi": "Hang Động Khổng Lồ & Thác Nước Hùng Vĩ",
        "missionIntroEn": "Explore Son Doong, the world's largest cave, and the thundering Ban Gioc Waterfall!",
        "missionIntroVi": "Thám hiểm Sơn Đoòng - hang động lớn nhất thế giới và thác Bản Giốc cuồn cuộn!",
        "targetObjective": "Discuss geological wonders, cave ecosystems, and conservation principles in English.",
        "starsReward": 40,
        "steps": [
          {
            "id": "w_g4_1",
            "level": 1,
            "questionEn": "Which cave in Quang Binh Province is the largest natural cave in the world?",
            "questionVi": "Hang động nào tại tỉnh Quảng Bình là hang động tự nhiên lớn nhất thế giới?",
            "audioPrompt": "Son Doong Cave, so massive it has its own subterranean clouds and jungle!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Son Doong Cave",
                "textVi": "Hang Sơn Đoòng",
                "icon": "🪨",
                "isCorrect": true,
                "image": "/destinations/son_doong_cave.webp"
              },
              {
                "id": "opt2",
                "textEn": "Phong Nha Cave",
                "textVi": "Động Phong Nha",
                "icon": "🛶",
                "isCorrect": false,
                "image": "/assets/vocab/cave.webp"
              },
              {
                "id": "opt3",
                "textEn": "Thien Duong Cave",
                "textVi": "Động Thiên Đường",
                "icon": "✨",
                "isCorrect": false,
                "image": "/assets/vocab/stalactite.webp"
              },
              {
                "id": "opt4",
                "textEn": "Tam Coc Cave",
                "textVi": "Động Tam Cốc",
                "icon": "🌾",
                "isCorrect": false,
                "image": "/destinations/trang_an_landscape.webp"
              }
            ],
            "explanationEn": "Son Doong is over 5 kilometers long and large enough to hold a 40-story skyscraper!",
            "explanationVi": "Hang Sơn Đoòng dài hơn 5km và có vòm hang cao đủ chứa cả tòa nhà chọc trời 40 tầng!"
          },
          {
            "id": "w_g4_2",
            "level": 2,
            "questionEn": "Which majestic waterfall in Cao Bang is one of the largest border waterfalls in the world?",
            "questionVi": "Thác nước hùng vĩ nào tại Cao Bằng là một trong những thác biên giới lớn nhất thế giới?",
            "audioPrompt": "Ban Gioc Waterfall with thundering emerald tiers in Cao Bang!",
            "image": "/destinations/dalat_pine_hills.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Ban Gioc Waterfall",
                "textVi": "Thác Bản Giốc",
                "icon": "🌊",
                "isCorrect": true,
                "image": "/destinations/ban_gioc_waterfall.webp"
              },
              {
                "id": "opt2",
                "textEn": "Dambri Waterfall",
                "textVi": "Thác Đamb'ri",
                "icon": "🌲",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt3",
                "textEn": "Pongour Waterfall",
                "textVi": "Thác Pongour",
                "icon": "🏞️",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt4",
                "textEn": "Dray Nur Waterfall",
                "textVi": "Thác Dray Nur",
                "icon": "💧",
                "isCorrect": false,
                "image": "/destinations/mekong_delta.jpg"
              }
            ],
            "explanationEn": "Ban Gioc Waterfall pours down multiple tiers of limestone into the peaceful Quay Son River.",
            "explanationVi": "Thác Bản Giốc đổ xuống nhiều tầng đá vôi tung bọt trắng xóa trên dòng sông Quây Sơn."
          },
          {
            "id": "w_g4_3",
            "level": 3,
            "questionEn": "Which calm freshwater lake in Bac Kan is nestled within limestone karst mountains?",
            "questionVi": "Hồ nước ngọt tự nhiên nào tại Bắc Kạn nằm trọn giữa những dãy núi đá vôi kỳ vĩ?",
            "audioPrompt": "Ba Be Lake, meaning 'Three Lakes' joined together amidst emerald forests!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Ba Be Lake",
                "textVi": "Hồ Ba Bể",
                "icon": "🛶",
                "isCorrect": true,
                "image": "/destinations/ba_be_lake.webp"
              },
              {
                "id": "opt2",
                "textEn": "West Lake",
                "textVi": "Hồ Tây",
                "icon": "⛵",
                "isCorrect": false,
                "image": "/destinations/west_lake_hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Tuyen Lam Lake",
                "textVi": "Hồ Tuyền Lâm",
                "icon": "🌲",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt4",
                "textEn": "Thac Ba Lake",
                "textVi": "Hồ Thác Bà",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/destinations/halong_bay.webp"
              }
            ],
            "explanationEn": "Ba Be Lake is one of the world's 20 largest natural freshwater lakes needing conservation.",
            "explanationVi": "Hồ Ba Bể là một trong 20 hồ nước ngọt tự nhiên lớn nhất thế giới cần được bảo vệ nguyên vẹn."
          },
          {
            "id": "w_g4_4",
            "level": 4,
            "questionEn": "Which largest island of Vietnam in Kien Giang Province is famous for marine biodiversity?",
            "questionVi": "Hòn đảo lớn nhất Việt Nam thuộc tỉnh Kiên Giang nổi tiếng với đa dạng sinh thái biển?",
            "audioPrompt": "Phu Quoc Pearl Island, with turquoise waters and coral reefs!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Phu Quoc Pearl Island",
                "textVi": "Đảo ngọc Phú Quốc",
                "icon": "🏝️",
                "isCorrect": true,
                "image": "/destinations/phu_quoc_island.webp"
              },
              {
                "id": "opt2",
                "textEn": "Con Dao Island",
                "textVi": "Quần đảo Côn Đảo",
                "icon": "🐢",
                "isCorrect": false,
                "image": "/destinations/con_dao_island.webp"
              },
              {
                "id": "opt3",
                "textEn": "Cat Ba Island",
                "textVi": "Đảo Cát Bà",
                "icon": "⛵",
                "isCorrect": false,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt4",
                "textEn": "Ly Son Island",
                "textVi": "Đảo Lý Sơn",
                "icon": "🧄",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              }
            ],
            "explanationEn": "Phu Quoc features warm seas, white sand beaches, and a UNESCO Biosphere Reserve.",
            "explanationVi": "Phú Quốc có làn nước biển ngọc bích, bãi cát trắng mịn và khu dự trữ sinh quyển thế giới."
          }
        ]
      },
      "5": {
        "gradeNum": 5,
        "gradeBadge": "Grade 5 Leadership",
        "missionTitleEn": "UNESCO Heritage & Sovereign Seas",
        "missionTitleVi": "Di Sản Kép Tràng An & Biển Đảo Quê Hương",
        "missionIntroEn": "Master cultural analysis of UNESCO heritage and demonstrate national sovereignty pride!",
        "missionIntroVi": "Làm chủ kiến thức di sản văn hóa thế giới và khẳng định lòng tự hào chủ quyền biển đảo!",
        "targetObjective": "Present cultural heritage values, conservation ethics, and national territorial pride.",
        "starsReward": 45,
        "steps": [
          {
            "id": "w_g5_1",
            "level": 1,
            "questionEn": "Which site in Ninh Binh is Southeast Asia's first UNESCO Mixed World Heritage site?",
            "questionVi": "Địa danh nào tại Ninh Bình là Di sản Thế giới Hỗn hợp đầu tiên của Đông Nam Á?",
            "audioPrompt": "Trang An Scenic Landscape Complex in Ninh Binh!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Trang An Scenic Landscape",
                "textVi": "Quần thể danh thắng Tràng An",
                "icon": "🏞️",
                "isCorrect": true,
                "image": "/destinations/trang_an_landscape.webp"
              },
              {
                "id": "opt2",
                "textEn": "Ha Long Bay",
                "textVi": "Vịnh Hạ Long",
                "icon": "⛵",
                "isCorrect": false,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt3",
                "textEn": "Phong Nha - Ke Bang",
                "textVi": "Vườn quốc gia Phong Nha - Kẻ Bàng",
                "icon": "⛰️",
                "isCorrect": false,
                "image": "/destinations/son_doong_cave.webp"
              },
              {
                "id": "opt4",
                "textEn": "Thang Long Citadel",
                "textVi": "Hoàng thành Thăng Long",
                "icon": "🏛️",
                "isCorrect": false,
                "image": "/destinations/thang_long_citadel.webp"
              }
            ],
            "explanationEn": "Trang An is recognized for both exceptional natural beauty and ancient archaeological cultural values.",
            "explanationVi": "Tràng An được UNESCO vinh danh bởi cả giá trị cảnh quan thiên nhiên kỳ vĩ lẫn văn hóa khảo cổ."
          },
          {
            "id": "w_g5_2",
            "level": 2,
            "questionEn": "What is the historical significance of the Central Sector of the Imperial Citadel of Thang Long?",
            "questionVi": "Ý nghĩa lịch sử nổi bật của Khu Trung tâm Hoàng thành Thăng Long tại Hà Nội là gì?",
            "audioPrompt": "Thang Long Imperial Citadel, standing for over ten centuries!",
            "image": "/destinations/hanoi_turtle_tower.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Over 1,000 continuous years of power and culture",
                "textVi": "Hơn 1.000 năm lịch sử quyền lực và văn hiến liên tục",
                "icon": "👑",
                "isCorrect": true,
                "image": "/destinations/thang_long_citadel.webp"
              },
              {
                "id": "opt2",
                "textEn": "Built only twenty years ago as a shopping mall",
                "textVi": "Mới xây dựng 20 năm trước làm trung tâm thương mại",
                "icon": "🏬",
                "isCorrect": false,
                "image": "/destinations/hcmc_skyline.jpg"
              },
              {
                "id": "opt3",
                "textEn": "An isolated island fortress in deep ocean",
                "textVi": "Một pháo đài cô lập ngoài biển sâu",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/destinations/con_dao_island.webp"
              },
              {
                "id": "opt4",
                "textEn": "A temporary wooden army camp",
                "textVi": "Doanh trại quân đội bằng gỗ tạm bợ",
                "icon": "⛺",
                "isCorrect": false,
                "image": "/assets/vocab/woodblock.webp"
              }
            ],
            "explanationEn": "Thang Long was the continuous political center of Vietnam through the Ly, Tran, and Le dynasties.",
            "explanationVi": "Hoàng thành Thăng Long là trung tâm quyền lực chính trị liên tục qua các triều đại Lý, Trần, Lê."
          },
          {
            "id": "w_g5_3",
            "level": 3,
            "questionEn": "In Ba Dinh Square, who rests in solemn tribute at the grand historic mausoleum?",
            "questionVi": "Tại Quảng trường Ba Đình lịch sử, lăng tẩm trang nghiêm là nơi an nghỉ của vị lãnh tụ vĩ đại nào?",
            "audioPrompt": "President Ho Chi Minh, the beloved hero of Vietnamese national liberation!",
            "image": "/destinations/hanoi_turtle_tower.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "President Ho Chi Minh",
                "textVi": "Chủ tịch Hồ Chí Minh vĩ đại",
                "icon": "⭐",
                "isCorrect": true,
                "image": "/destinations/ho_chi_minh_mausoleum.webp"
              },
              {
                "id": "opt2",
                "textEn": "General Vo Nguyen Giap",
                "textVi": "Đại tướng Võ Nguyên Giáp",
                "icon": "🎖️",
                "isCorrect": false,
                "image": "/destinations/thang_long_citadel.webp"
              },
              {
                "id": "opt3",
                "textEn": "King Le Loi",
                "textVi": "Vua Lê Lợi",
                "icon": "🗡️",
                "isCorrect": false,
                "image": "/destinations/hanoi_turtle_tower.webp"
              },
              {
                "id": "opt4",
                "textEn": "King Tran Nhan Tong",
                "textVi": "Vua Trần Nhân Tông",
                "icon": "🛕",
                "isCorrect": false,
                "image": "/destinations/one_pillar_pagoda_3d.png"
              }
            ],
            "explanationEn": "President Ho Chi Minh read the Declaration of Independence on September 2, 1945, in Ba Dinh Square.",
            "explanationVi": "Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam tại Quảng trường Ba Đình."
          },
          {
            "id": "w_g5_4",
            "level": 4,
            "questionEn": "What is the primary conservation mission of Con Dao National Park?",
            "questionVi": "Nhiệm vụ bảo tồn quan trọng hàng đầu tại Vườn quốc gia Côn Đảo là gì?",
            "audioPrompt": "Protecting endangered green sea turtles and pristine coral reefs!",
            "image": "/destinations/halong_bay.jpg",
            "options": [
              {
                "id": "opt1",
                "textEn": "Protecting sea turtles and pristine coral reefs",
                "textVi": "Bảo tồn rùa biển quý hiếm và rạn san hô nguyên sơ",
                "icon": "🐢",
                "isCorrect": true,
                "image": "/destinations/con_dao_island.webp"
              },
              {
                "id": "opt2",
                "textEn": "Industrial coal mining along the beaches",
                "textVi": "Khai thác than công nghiệp dọc bãi biển",
                "icon": "⛏️",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt3",
                "textEn": "Heavy oil drilling and refining plants",
                "textVi": "Xây dựng nhà máy lọc dầu lớn",
                "icon": "🛢️",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Clearing all native island vegetation",
                "textVi": "Chặt phá toàn bộ thảm thực vật bản địa",
                "icon": "🪓",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              }
            ],
            "explanationEn": "Con Dao is the most significant sea turtle nesting sanctuary in Vietnam with strict protection laws.",
            "explanationVi": "Côn Đảo là bãi đẻ lớn nhất của rùa biển tại Việt Nam được bảo tồn nghiêm ngặt."
          }
        ]
      }
    }
  },
  {
    "id": "listening",
    "orderNumber": 2,
    "nameEn": "AI Science Lab",
    "nameVi": "Phòng Lab Khoa Học AI",
    "subtitleEn": "Listen & Explore",
    "subtitleVi": "Luyện nghe tiếng Anh Giọng Mỹ Chuẩn & Khám phá Khoa học",
    "taglineEn": "Sharpen your listening ears with robots, futuristic drones, and acoustic science!",
    "taglineVi": "Rèn luyện đôi tai vàng cùng robot thông minh và sóng âm thanh kỳ diệu!",
    "crystalName": "Sapphire Crystal",
    "crystalColor": "text-sky-400",
    "crystalHex": "#0ea5e9",
    "glowRgba": "rgba(14, 165, 233, 0.45)",
    "badgeText": "LISTEN & LEARN",
    "gradientBg": "from-sky-500/20 via-blue-600/30 to-indigo-900/60",
    "cardBorder": "border-sky-400/60 hover:border-sky-300",
    "floatDelay": "animate-island-2",
    "landmarkFeature": "High-Tech Observatory & Acoustic Dome",
    "imageSrc": "/assets/islands/island_2_phong_lab.webp",
    "gradeData": {
      "1": {
        "gradeNum": 1,
        "gradeBadge": "Grade 1 Starter",
        "missionTitleEn": "Friendly Sounds & School Bells",
        "missionTitleVi": "Âm Thanh Quen Thuộc & Tiếng Chuông Trường",
        "missionIntroEn": "Listen to the crystal clear voice of Captain Trang and pick the right object!",
        "missionIntroVi": "Bé hãy lắng nghe giọng đọc mẫu của Cô Trang và chọn đúng đồ vật nhé!",
        "targetObjective": "Distinguish common classroom and nature sound cues in clear English.",
        "starsReward": 25,
        "steps": [
          {
            "id": "l_g1_1",
            "level": 1,
            "questionEn": "Listen! What sound is ringing happily in the primary school?",
            "questionVi": "Lắng nghe nào! Âm thanh rộn rã nào đang vang lên trong trường tiểu học?",
            "audioPrompt": "Listen! The school bell is ringing! Ding dong, ding dong! Time for English class!",
            "options": [
              {
                "id": "opt1",
                "textEn": "School Bell",
                "textVi": "Chuông trường",
                "icon": "🔔",
                "isCorrect": true,
                "image": "/assets/vocab/instrument.webp"
              },
              {
                "id": "opt2",
                "textEn": "Door Key",
                "textVi": "Chìa khóa",
                "icon": "🔑",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt3",
                "textEn": "Pencil Case",
                "textVi": "Hộp bút",
                "icon": "✏️",
                "isCorrect": false,
                "image": "/assets/vocab/adventure.webp"
              },
              {
                "id": "opt4",
                "textEn": "Toy Car",
                "textVi": "Xe đồ chơi",
                "icon": "🚗",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              }
            ],
            "explanationEn": "The school bell rings 'Ding dong' to tell pupils class is starting!",
            "explanationVi": "Tiếng chuông trường 'Kính coong' báo hiệu giờ học tiếng Anh vui vẻ đã đến!"
          },
          {
            "id": "l_g1_2",
            "level": 1,
            "questionEn": "Captain Trang says: 'Open your English book, please!' What should you open?",
            "questionVi": "Cô Trang nhắc: 'Em hãy mở sách tiếng Anh ra nào!' Em sẽ mở cái gì?",
            "audioPrompt": "Open your colorful English book, please! Let us read together!",
            "options": [
              {
                "id": "opt1",
                "textEn": "English Book",
                "textVi": "Sách tiếng Anh",
                "icon": "📖",
                "isCorrect": true,
                "image": "/assets/vocab/woodblock.webp"
              },
              {
                "id": "opt2",
                "textEn": "School Backpack",
                "textVi": "Ba lô học sinh",
                "icon": "🎒",
                "isCorrect": false,
                "image": "/assets/vocab/adventure.webp"
              },
              {
                "id": "opt3",
                "textEn": "Drawing Crayon",
                "textVi": "Bút màu sáp",
                "icon": "🖍️",
                "isCorrect": false,
                "image": "/assets/vocab/blue.webp"
              },
              {
                "id": "opt4",
                "textEn": "Water Bottle",
                "textVi": "Bình nước",
                "icon": "🍶",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              }
            ],
            "explanationEn": "'Book' is the English word for sách học sinh đọc mỗi ngày.",
            "explanationVi": "'Book' nghĩa là cuốn sách với nhiều hình ảnh và từ vựng bổ ích."
          },
          {
            "id": "l_g1_3",
            "level": 2,
            "questionEn": "Listen to the soothing nature sound: 'Pitter-patter, pitter-patter on the leaves!'",
            "questionVi": "Lắng nghe âm thanh thiên nhiên: 'Tí tách, tí tách trên tán lá cây xanh!'",
            "audioPrompt": "Listen to the gentle morning rain falling on green banana leaves: pitter-patter!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Raindrops",
                "textVi": "Hạt mưa rơi",
                "icon": "🌧️",
                "isCorrect": true,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt2",
                "textEn": "Thunder Strike",
                "textVi": "Sấm sét",
                "icon": "⚡",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              },
              {
                "id": "opt3",
                "textEn": "Ocean Wave",
                "textVi": "Sóng biển",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "River Flow",
                "textVi": "Nước sông chảy",
                "icon": "🏞️",
                "isCorrect": false,
                "image": "/destinations/perfume_river_hue.webp"
              }
            ],
            "explanationEn": "'Rain' brings cool water to the Vietnamese countryside.",
            "explanationVi": "'Rain' nghĩa là cơn mưa tắm mát đồng lúa và xóm làng quê hương."
          },
          {
            "id": "l_g1_4",
            "level": 2,
            "questionEn": "Which friendly farm animal wakes everyone up with 'Cock-a-doodle-doo'?",
            "questionVi": "Chú động vật thân quen nào đánh thức mọi người bằng tiếng gáy vang buổi sớm?",
            "audioPrompt": "Good morning Vietnam! The bright rooster crows proudly: cock-a-doodle-doo!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Morning Rooster",
                "textVi": "Chú gà trống gáy sớm",
                "icon": "🐓",
                "isCorrect": true,
                "image": "/assets/vocab/bird.webp"
              },
              {
                "id": "opt2",
                "textEn": "Puppy Barking",
                "textVi": "Chú cún con sủa",
                "icon": "🐶",
                "isCorrect": false,
                "image": "/assets/vocab/wildlife.webp"
              },
              {
                "id": "opt3",
                "textEn": "Kitten Meowing",
                "textVi": "Chú mèo kêu meo",
                "icon": "🐱",
                "isCorrect": false,
                "image": "/assets/vocab/langur.webp"
              },
              {
                "id": "opt4",
                "textEn": "Songbird in Tree",
                "textVi": "Chim hót trên cây",
                "icon": "🐦",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              }
            ],
            "explanationEn": "In English, the rooster's cheerful morning crow is 'cock-a-doodle-doo'!",
            "explanationVi": "Trong tiếng Anh, chú gà trống cất tiếng gáy 'cock-a-doodle-doo' đón chào bình minh!"
          }
        ]
      },
      "2": {
        "gradeNum": 2,
        "gradeBadge": "Grade 2 Explorer",
        "missionTitleEn": "Whispering Waves & Electric Buses",
        "missionTitleVi": "Tiếng Sóng Biển & Chuyến Xe Buýt Xanh",
        "missionIntroEn": "Listen to clean transport and nature sounds around Vietnamese coastal cities!",
        "missionIntroVi": "Luyện nghe âm thanh môi trường và xe buýt điện thông minh tại các thành phố biển!",
        "targetObjective": "Identify full phrases describing modern transport and natural phenomena.",
        "starsReward": 30,
        "steps": [
          {
            "id": "l_g2_1",
            "level": 1,
            "questionEn": "Listen: What sound echoes along My Khe Beach in Da Nang?",
            "questionVi": "Lắng nghe: Âm thanh gì đang rì rào dọc bãi biển Mỹ Khê tại Đà Nẵng?",
            "audioPrompt": "Can you hear the peaceful ocean waves splashing against the white sandy shore in Da Nang?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Ocean Waves",
                "textVi": "Sóng biển vỗ bờ",
                "icon": "🌊",
                "isCorrect": true,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt2",
                "textEn": "Mountain Stream",
                "textVi": "Suối reo đầu nguồn",
                "icon": "🏞️",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt3",
                "textEn": "Street Traffic",
                "textVi": "Tiếng xe cộ đường phố",
                "icon": "🚗",
                "isCorrect": false,
                "image": "/assets/vocab/public_transit.webp"
              },
              {
                "id": "opt4",
                "textEn": "Factory Whistle",
                "textVi": "Còi nhà máy",
                "icon": "🏭",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              }
            ],
            "explanationEn": "'Ocean waves' are the soothing natural sounds of coastal waters.",
            "explanationVi": "'Ocean waves' là những con sóng biển nhấp nhô vỗ bờ cát trắng."
          },
          {
            "id": "l_g2_2",
            "level": 1,
            "questionEn": "Which modern green vehicle arrives quietly with zero emissions?",
            "questionVi": "Phương tiện giao thông xanh hiện đại nào đang êm ái cập trạm mà không có khói xả?",
            "audioPrompt": "Listen carefully: The friendly electric bus is arriving quietly at the school bus stop!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Electric Bus",
                "textVi": "Xe buýt điện xanh",
                "icon": "🚌",
                "isCorrect": true,
                "image": "/assets/vocab/electric_bus.webp"
              },
              {
                "id": "opt2",
                "textEn": "Steam Train",
                "textVi": "Tàu hỏa chạy than",
                "icon": "🚂",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              },
              {
                "id": "opt3",
                "textEn": "Cargo Airplane",
                "textVi": "Máy bay chở hàng",
                "icon": "✈️",
                "isCorrect": false,
                "image": "/assets/vocab/aerospace.webp"
              },
              {
                "id": "opt4",
                "textEn": "Speed Motorboat",
                "textVi": "Tàu cao tốc chạy dầu",
                "icon": "🚤",
                "isCorrect": false,
                "image": "/assets/vocab/boat.webp"
              }
            ],
            "explanationEn": "Electric buses run on clean battery power, keeping our city air fresh and pure.",
            "explanationVi": "Xe buýt điện thông minh chạy bằng pin sạch, bảo vệ bầu không khí trong lành."
          },
          {
            "id": "l_g2_3",
            "level": 2,
            "questionEn": "What device makes the rhythmic sound: 'Tick-tock, tick-tock, it is time for school'?",
            "questionVi": "Đồ vật nào phát ra âm thanh nhịp nhàng: 'Tích tắc, tích tắc, đã đến giờ học bài'?",
            "audioPrompt": "The classroom clock ticks steadily: tick-tock, tick-tock. Time to practice our English!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Wall Clock",
                "textVi": "Đồng hồ treo tường",
                "icon": "⏰",
                "isCorrect": true,
                "image": "/assets/vocab/balance.webp"
              },
              {
                "id": "opt2",
                "textEn": "Computer Fan",
                "textVi": "Quạt máy tính",
                "icon": "💻",
                "isCorrect": false,
                "image": "/assets/vocab/artificial_intelligence.webp"
              },
              {
                "id": "opt3",
                "textEn": "Door Knocker",
                "textVi": "Tay nắm cửa",
                "icon": "🚪",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt4",
                "textEn": "Telephone Bell",
                "textVi": "Chuông điện thoại",
                "icon": "☎️",
                "isCorrect": false,
                "image": "/assets/vocab/smart_city.webp"
              }
            ],
            "explanationEn": "The clock measures hours and minutes so pupils can manage learning time well.",
            "explanationVi": "Đồng hồ báo giờ giấc giúp học sinh hình thành thói quen đúng giờ."
          },
          {
            "id": "l_g2_4",
            "level": 2,
            "questionEn": "Which little cheerful bird is chirping high up in the school garden tree?",
            "questionVi": "Chú chim nhỏ vui tươi nào đang líu lo ca hát trên cành cây vườn trường?",
            "audioPrompt": "Look up! A cheerful little brown sparrow is singing sweet melodies in the sunshine!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Singing Sparrow",
                "textVi": "Chim sẻ líu lo",
                "icon": "🐦",
                "isCorrect": true,
                "image": "/assets/vocab/bird.webp"
              },
              {
                "id": "opt2",
                "textEn": "Buzzing Honeybee",
                "textVi": "Ong mật vo ve",
                "icon": "🐝",
                "isCorrect": false,
                "image": "/assets/vocab/butterfly.webp"
              },
              {
                "id": "opt3",
                "textEn": "Croaking Green Frog",
                "textVi": "Chú ếch xanh",
                "icon": "🐸",
                "isCorrect": false,
                "image": "/assets/vocab/wildlife.webp"
              },
              {
                "id": "opt4",
                "textEn": "Playful Puppy",
                "textVi": "Chú cún đùa vui",
                "icon": "🐕",
                "isCorrect": false,
                "image": "/assets/vocab/animal_rescue.webp"
              }
            ],
            "explanationEn": "'Sparrow' is a sweet little songbird familiar to primary school gardens across Vietnam.",
            "explanationVi": "'Sparrow' là chú chim sẻ nhỏ bé, mang tiếng hót ríu rít chào ngày mới."
          }
        ]
      },
      "3": {
        "gradeNum": 3,
        "gradeBadge": "Grade 3 Foundation",
        "missionTitleEn": "Science Drones & Solar Energy",
        "missionTitleVi": "Flycam Khoa Học & Năng Lượng Mặt Trời",
        "missionIntroEn": "Listen to technology briefings about renewable power and aerial mapping!",
        "missionIntroVi": "Luyện nghe bản tin khoa học về năng lượng tái tạo và bản đồ bay thông minh!",
        "targetObjective": "Extract key technical information from spoken native English passages.",
        "starsReward": 35,
        "steps": [
          {
            "id": "l_g3_1",
            "level": 1,
            "questionEn": "Which high-tech device buzzes as it flies to map Vietnam's coastlines?",
            "questionVi": "Thiết bị công nghệ cao nào bay trên không trung để khảo sát bản đồ bờ biển Việt Nam?",
            "audioPrompt": "Our science camera drone takes off smoothly with four propellers to photograph coastal bays!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Science Camera Drone",
                "textVi": "Flycam khoa học",
                "icon": "🛸",
                "isCorrect": true,
                "image": "/assets/vocab/aerospace.webp"
              },
              {
                "id": "opt2",
                "textEn": "Heavy Bulldozer",
                "textVi": "Xe ủi đất",
                "icon": "🚜",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              },
              {
                "id": "opt3",
                "textEn": "Submarine",
                "textVi": "Tàu ngầm biển sâu",
                "icon": "🛥️",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Hot Air Balloon",
                "textVi": "Khinh khí cầu",
                "icon": "🎈",
                "isCorrect": false,
                "image": "/assets/vocab/rocket.webp"
              }
            ],
            "explanationEn": "Camera drones capture aerial high-definition photos for environmental research.",
            "explanationVi": "Flycam khoa học bay trên cao giúp ghi lại hình ảnh sắc nét phục vụ nghiên cứu môi trường."
          },
          {
            "id": "l_g3_2",
            "level": 2,
            "questionEn": "What absorbs bright sunlight on rooftops to produce clean green electricity?",
            "questionVi": "Hệ thống nào trên mái nhà hấp thụ ánh nắng để tạo ra dòng điện xanh sạch?",
            "audioPrompt": "Look at the rooftop solar panel system absorbing bright sunlight to generate clean green electricity!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Rooftop Solar Panels",
                "textVi": "Tấm pin năng lượng mặt trời",
                "icon": "☀️",
                "isCorrect": true,
                "image": "/assets/vocab/solar_panel.webp"
              },
              {
                "id": "opt2",
                "textEn": "Coal Furnace",
                "textVi": "Lò đốt than đá",
                "icon": "🏭",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt3",
                "textEn": "Petrol Generator",
                "textVi": "Máy nổ chạy xăng",
                "icon": "⛽",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              },
              {
                "id": "opt4",
                "textEn": "Gas Water Heater",
                "textVi": "Bình đun gas",
                "icon": "🔥",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              }
            ],
            "explanationEn": "Solar panels convert sunshine into electricity without producing any smoke or carbon.",
            "explanationVi": "Tấm pin mặt trời biến quang năng thành điện sạch, không gây khói bụi ô nhiễm."
          },
          {
            "id": "l_g3_3",
            "level": 3,
            "questionEn": "What type of data is the laboratory computer analyzing from orbit?",
            "questionVi": "Máy tính phòng Lab đang xử lý loại dữ liệu nào truyền về từ quỹ đạo không gian?",
            "audioPrompt": "Attention team: The computer is analyzing real-time weather satellite radar signals across our country!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Weather Satellite Radar Data",
                "textVi": "Dữ liệu vệ tinh khí tượng",
                "icon": "🛰️",
                "isCorrect": true,
                "image": "/assets/vocab/smart_city.webp"
              },
              {
                "id": "opt2",
                "textEn": "Video Game Audio",
                "textVi": "Âm thanh trò chơi điện tử",
                "icon": "🎮",
                "isCorrect": false,
                "image": "/assets/vocab/artificial_intelligence.webp"
              },
              {
                "id": "opt3",
                "textEn": "Pop Music Song",
                "textVi": "Bài hát ca nhạc",
                "icon": "🎵",
                "isCorrect": false,
                "image": "/assets/vocab/symphony.webp"
              },
              {
                "id": "opt4",
                "textEn": "Telephone Voicemail",
                "textVi": "Hộp thư thoại cá nhân",
                "icon": "📞",
                "isCorrect": false,
                "image": "/assets/vocab/instrument.webp"
              }
            ],
            "explanationEn": "Weather satellites monitor storm tracks and cloud formations to keep citizens safe.",
            "explanationVi": "Vệ tinh khí tượng theo dõi mây bão từ vũ trụ giúp bảo vệ an toàn cho người dân."
          },
          {
            "id": "l_g3_4",
            "level": 3,
            "questionEn": "According to the audio lesson, how do coastal mangrove trees help our homeland?",
            "questionVi": "Theo bài nghe, rừng ngập mặn ven biển giúp ích gì lớn nhất cho quê hương?",
            "audioPrompt": "Captain Trang explains: Coastal mangrove forests protect shorelines from severe erosion during stormy seasons!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Protect shorelines from erosion",
                "textVi": "Ngăn sóng sạt lở bờ biển",
                "icon": "🌳",
                "isCorrect": true,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt2",
                "textEn": "Produce firewood for burning",
                "textVi": "Khai thác làm củi đốt",
                "icon": "🪵",
                "isCorrect": false,
                "image": "/assets/vocab/bamboo.webp"
              },
              {
                "id": "opt3",
                "textEn": "Manufacture plastic bottles",
                "textVi": "Sản xuất chai nhựa",
                "icon": "🧴",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Create dry desert dust",
                "textVi": "Tạo bụi cát khô cằn",
                "icon": "🏜️",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              }
            ],
            "explanationEn": "Mangrove root systems break giant ocean waves and anchor coastal soil firmly in place.",
            "explanationVi": "Hệ rễ cây ngập mặn chằng chịt giúp chắn sóng biển và chống xói lở đất đai."
          }
        ]
      },
      "4": {
        "gradeNum": 4,
        "gradeBadge": "Grade 4 Expansion",
        "missionTitleEn": "Subterranean Rivers & Offshore Wind",
        "missionTitleVi": "Sông Ngầm Hang Động & Điện Gió Biển Khơi",
        "missionIntroEn": "Listen to acoustic hydrophones, subterranean water flows, and offshore wind turbines!",
        "missionIntroVi": "Luyện nghe tiếng sóng ngầm, thiết bị thủy âm và tuabin điện gió ngoài khơi!",
        "targetObjective": "Synthesize scientific terminology and environmental concepts from native spoken audio.",
        "starsReward": 40,
        "steps": [
          {
            "id": "l_g4_1",
            "level": 1,
            "questionEn": "What acoustic sound echoes through the subterranean caverns of Son Doong?",
            "questionVi": "Âm thanh đặc trưng nào vang vọng trong lòng hang động sâu thẳm Sơn Đoòng?",
            "audioPrompt": "Subterranean acoustics in Son Doong: Deep underground rivers create rumbling, echoing water flows through the limestone!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Deep underground river flow",
                "textVi": "Dòng sông ngầm dưới lòng đất",
                "icon": "🌊",
                "isCorrect": true,
                "image": "/destinations/son_doong_cave.webp"
              },
              {
                "id": "opt2",
                "textEn": "Helicopter rotor sound",
                "textVi": "Tiếng cánh quạt trực thăng",
                "icon": "🚁",
                "isCorrect": false,
                "image": "/assets/vocab/aerospace.webp"
              },
              {
                "id": "opt3",
                "textEn": "Highway vehicle sirens",
                "textVi": "Tiếng còi xa lộ",
                "icon": "🚗",
                "isCorrect": false,
                "image": "/assets/vocab/public_transit.webp"
              },
              {
                "id": "opt4",
                "textEn": "Thundercloud explosions",
                "textVi": "Tiếng sấm sét dồn dập",
                "icon": "⚡",
                "isCorrect": false,
                "image": "/assets/vocab/underground.webp"
              }
            ],
            "explanationEn": "Underground rivers carved out Son Doong over millions of years and still flow inside today.",
            "explanationVi": "Dòng sông ngầm đã bào mòn đá vôi qua hàng triệu năm để kiến tạo nên vòm hang kỳ vĩ."
          },
          {
            "id": "l_g4_2",
            "level": 2,
            "questionEn": "What do marine hydrophones record under the turquoise sea of Nha Trang?",
            "questionVi": "Thiết bị thủy âm dưới nước thu được âm thanh gì dưới rạn san hô Nha Trang?",
            "audioPrompt": "Acoustic hydrophones record marine life communication: colorful coral reef fish clicking and snapping underwater!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Marine life communication",
                "textVi": "Giao tiếp sinh vật biển san hô",
                "icon": "🐠",
                "isCorrect": true,
                "image": "/assets/vocab/marine_reserve.webp"
              },
              {
                "id": "opt2",
                "textEn": "Heavy cargo ship anchor",
                "textVi": "Thả neo tàu hàng lớn",
                "icon": "⚓",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt3",
                "textEn": "Fishing diesel engines",
                "textVi": "Động cơ ghe máy đánh cá",
                "icon": "🚤",
                "isCorrect": false,
                "image": "/assets/vocab/boat.webp"
              },
              {
                "id": "opt4",
                "textEn": "Underwater explosion",
                "textVi": "Mìn nổ dưới nước",
                "icon": "💥",
                "isCorrect": false,
                "image": "/assets/vocab/cave.webp"
              }
            ],
            "explanationEn": "Healthy coral reefs are full of biological clicks, snaps, and calls made by fish and shrimp.",
            "explanationVi": "Rạn san hô khỏe mạnh luôn tràn ngập âm thanh tí tách sống động của các loài thủy sinh."
          },
          {
            "id": "l_g4_3",
            "level": 3,
            "questionEn": "Which renewable power installation produces clean electricity off the coast of Binh Thuan?",
            "questionVi": "Công trình năng lượng tái tạo nào đang sản xuất điện sạch ngoài khơi tỉnh Bình Thuận?",
            "audioPrompt": "Listen to the steady humming blades of offshore wind turbines in Binh Thuan, converting ocean winds into green power!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Offshore Wind Turbines",
                "textVi": "Tua-bin điện gió ngoài khơi",
                "icon": "🌬️",
                "isCorrect": true,
                "image": "/assets/vocab/renewable.webp"
              },
              {
                "id": "opt2",
                "textEn": "Diesel Generators",
                "textVi": "Máy phát điện diesel",
                "icon": "⛽",
                "isCorrect": false,
                "image": "/assets/vocab/solar_power.webp"
              },
              {
                "id": "opt3",
                "textEn": "Offshore Oil Rig",
                "textVi": "Giàn khoan dầu mỏ",
                "icon": "🛢️",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Coal Combustion Unit",
                "textVi": "Nhà máy đốt than",
                "icon": "🏭",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              }
            ],
            "explanationEn": "Vietnam's coastal winds are among the strongest in Southeast Asia, ideal for green wind energy.",
            "explanationVi": "Gió biển Việt Nam dồi dào là nguồn năng lượng vô tận để sản xuất điện sạch cho đất nước."
          },
          {
            "id": "l_g4_4",
            "level": 4,
            "questionEn": "What critical metric do smart environmental sensors track across Hanoi and Ho Chi Minh City?",
            "questionVi": "Cảm biến môi trường thông minh đang theo dõi chỉ số quan trọng nào tại các đô thị?",
            "audioPrompt": "Autonomous environmental sensors monitor air quality index, known as AQI, ensuring clean air for all children!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Air Quality Index (AQI)",
                "textVi": "Chỉ số chất lượng không khí AQI",
                "icon": "🍃",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Highway Speed Radar",
                "textVi": "Tốc độ xe chạy",
                "icon": "🏎️",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Billboard Advertising Count",
                "textVi": "Số lượng biển quảng cáo",
                "icon": "📺",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Television Radio Channels",
                "textVi": "Kênh sóng truyền hình",
                "icon": "📻",
                "isCorrect": false
              }
            ],
            "explanationEn": "AQI measures microscopic dust and gases to help schools organize safe outdoor activities.",
            "explanationVi": "Chỉ số AQI giúp nhà trường theo dõi độ trong sạch của không khí cho học sinh vui chơi."
          }
        ]
      },
      "5": {
        "gradeNum": 5,
        "gradeBadge": "Grade 5 Leadership",
        "missionTitleEn": "Satellite Telemetry & Net-Zero 2050",
        "missionTitleVi": "Dữ Liệu Vệ Tinh & Cam Kết Net-Zero 2050",
        "missionIntroEn": "Listen to advanced scientific briefings on space research, submersibles, and clean grid balancing!",
        "missionIntroVi": "Luyện nghe bản tin khoa học cấp cao về vệ tinh không gian, tàu lặn và lưới điện thông minh!",
        "targetObjective": "Analyze complex spoken academic English, technical data, and national environmental goals.",
        "starsReward": 45,
        "steps": [
          {
            "id": "l_g5_1",
            "level": 1,
            "questionEn": "What advanced technology relays real-time telemetry from space to Vietnamese scientists?",
            "questionVi": "Công nghệ tiên tiến nào truyền dữ liệu viễn thám thời gian thực từ không gian về cho các nhà khoa học Việt Nam?",
            "audioPrompt": "Listen to the Vietnamese space satellite transmission relaying earth observation telemetry to protect our forests and seas!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Earth Observation Satellite",
                "textVi": "Vệ tinh quan sát trái đất và viễn thám",
                "icon": "🛰️",
                "isCorrect": true,
                "image": "/assets/vocab/aerospace.webp"
              },
              {
                "id": "opt2",
                "textEn": "Ground Radio Antenna",
                "textVi": "Ăng-ten vô tuyến mặt đất",
                "icon": "📡",
                "isCorrect": false,
                "image": "/assets/vocab/smart_city.webp"
              },
              {
                "id": "opt3",
                "textEn": "Microwave Oven Beep",
                "textVi": "Tiếng bíp lò vi sóng",
                "icon": "📻",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              },
              {
                "id": "opt4",
                "textEn": "Mobile Ringtone Signal",
                "textVi": "Tín hiệu nhạc chuông",
                "icon": "📱",
                "isCorrect": false,
                "image": "/assets/vocab/instrument.webp"
              }
            ],
            "explanationEn": "Earth observation satellites provide essential data for agriculture, disaster relief, and forest protection.",
            "explanationVi": "Vệ tinh viễn thám cung cấp ảnh dữ liệu quý giá giúp dự báo thiên tai và bảo vệ rừng đầu nguồn."
          },
          {
            "id": "l_g5_2",
            "level": 2,
            "questionEn": "What is the mission of the autonomous deep-sea submersible mentioned in the briefing?",
            "questionVi": "Nhiệm vụ của tàu lặn không người lái biển sâu được đề cập trong bản tin là gì?",
            "audioPrompt": "Our autonomous research submersible dives deep along the continental shelf of the East Sea to map marine geology!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Mapping the East Sea continental shelf",
                "textVi": "Khảo sát thềm lục địa Biển Đông",
                "icon": "🌊",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Commercial cruise tourism",
                "textVi": "Chở khách du lịch biển",
                "icon": "🚢",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Wooden fishing net operations",
                "textVi": "Kéo lưới cá bằng bè gỗ",
                "icon": "🛶",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Building floating swimming pools",
                "textVi": "Xây dựng bể bơi nhân tạo",
                "icon": "🏊",
                "isCorrect": false
              }
            ],
            "explanationEn": "Scientific submersibles collect oceanographic samples to affirm Vietnam's sovereign seabed rights.",
            "explanationVi": "Tàu lặn nghiên cứu thu thập mẫu địa chất khẳng định chủ quyền thềm lục địa quốc gia."
          },
          {
            "id": "l_g5_3",
            "level": 3,
            "questionEn": "What milestone commitment did Vietnam announce to the international community at COP26?",
            "questionVi": "Cam kết lịch sử mang tầm nhìn quốc tế nào đã được Việt Nam công bố tại hội nghị COP26?",
            "audioPrompt": "At the COP26 summit, Vietnam made a historic commitment to achieve Net-Zero greenhouse gas emissions by the year 2050!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Net-Zero emissions by 2050",
                "textVi": "Phát thải ròng bằng 0 (Net-Zero 2050)",
                "icon": "🌱",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Tripling coal fuel imports",
                "textVi": "Tăng gấp 3 lần than nhập khẩu",
                "icon": "🏭",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Halting all technical universities",
                "textVi": "Dừng đào tạo đại học kỹ thuật",
                "icon": "🏫",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Canceling all environmental treaties",
                "textVi": "Hủy bỏ mọi cam kết môi trường",
                "icon": "❌",
                "isCorrect": false
              }
            ],
            "explanationEn": "Vietnam's Net-Zero by 2050 pledge represents visionary leadership for climate action in Asia.",
            "explanationVi": "Cam kết Net-Zero 2050 thể hiện trách nhiệm và quyết tâm cao của Việt Nam vì một hành tinh xanh."
          },
          {
            "id": "l_g5_4",
            "level": 4,
            "questionEn": "How does an AI-powered smart grid improve national power distribution?",
            "questionVi": "Hệ thống lưới điện thông minh ứng dụng AI tối ưu hóa phân phối điện như thế nào?",
            "audioPrompt": "Smart grid algorithms automatically dispatch fluctuating wind and solar electricity across national transmission lines smoothly!",
            "options": [
              {
                "id": "opt1",
                "textEn": "Intelligent automated green grid dispatch",
                "textVi": "Điều phối tự động nguồn điện gió & mặt trời",
                "icon": "⚡",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Manual switchboard disconnection",
                "textVi": "Ngắt cầu dao thủ công ngẫu nhiên",
                "icon": "🔌",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Running emergency diesel generators only",
                "textVi": "Chỉ dựa vào máy nổ chạy dầu",
                "icon": "⛽",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Cutting city power unpredictably",
                "textVi": "Cắt điện diện rộng không báo trước",
                "icon": "🌑",
                "isCorrect": false
              }
            ],
            "explanationEn": "AI balancing balances fluctuating sunshine and wind outputs to prevent brownouts sustainably.",
            "explanationVi": "AI giúp điều tiết nhịp nhàng điện gió và điện mặt trời hòa vào lưới điện quốc gia an toàn."
          }
        ]
      }
    }
  },
  {
    "id": "speaking",
    "orderNumber": 3,
    "nameEn": "Pronunciation Stage",
    "nameVi": "Sân Khấu Phát Âm",
    "subtitleEn": "Speak & Shine",
    "subtitleVi": "Luyện phát âm chuẩn Giọng Mỹ, Ngữ điệu & Hùng biện tự tin",
    "taglineEn": "Step up to the neon stage, speak with crystal clarity, and earn roaring cheers!",
    "taglineVi": "Tự tin bước lên sân khấu ánh sáng, rèn giọng Mỹ chuẩn và tỏa sáng rực rỡ!",
    "crystalName": "Ruby Crystal",
    "crystalColor": "text-rose-400",
    "crystalHex": "#f43f5e",
    "glowRgba": "rgba(244, 63, 94, 0.45)",
    "badgeText": "SPEAK WITH PRIDE",
    "gradientBg": "from-rose-500/20 via-pink-600/30 to-purple-900/60",
    "cardBorder": "border-rose-400/60 hover:border-rose-300",
    "floatDelay": "animate-island-3",
    "landmarkFeature": "Neon Acoustic Amphitheater & Golden Microphone",
    "imageSrc": "/assets/islands/island_3_phat_am.webp",
    "gradeData": {
      "1": {
        "gradeNum": 1,
        "gradeBadge": "Grade 1 Starter",
        "missionTitleEn": "Phonics Stars: /b/, /l/, /t/, /s/",
        "missionTitleVi": "Ngôi Sao Ngữ Âm: /b/, /l/, /t/, /s/",
        "missionIntroEn": "Practice clear American English letter sounds and ending consonants!",
        "missionIntroVi": "Bé hãy luyện phát âm chuẩn các phụ âm đầu và âm cuối trong tiếng Anh nhé!",
        "targetObjective": "Pronounce initial consonant sounds /b/, /l/, /t/, /s/ accurately with clear voice.",
        "starsReward": 25,
        "steps": [
          {
            "id": "s_g1_1",
            "level": 1,
            "questionEn": "Which word starts with the strong popping sound /b/ as in 'Bay'?",
            "questionVi": "Từ nào bắt đầu bằng âm bật /b/ như trong từ 'Bay' (Vịnh)?",
            "audioPrompt": "Bay! Ha Long Bay! Repeat after me: /b/ - Bay!",
            "targetPhonics": "/b/ Sound - Bay, Boat",
            "options": [
              {
                "id": "opt1",
                "textEn": "Bay (/b/ sound)",
                "textVi": "Bay (Vịnh biển)",
                "icon": "⛵",
                "isCorrect": true,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt2",
                "textEn": "Day (/d/ sound)",
                "textVi": "Day (Ngày)",
                "icon": "☀️",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              },
              {
                "id": "opt3",
                "textEn": "Pay (/p/ sound)",
                "textVi": "Pay (Thanh toán)",
                "icon": "💵",
                "isCorrect": false,
                "image": "/assets/vocab/lucky_money.webp"
              },
              {
                "id": "opt4",
                "textEn": "Say (/s/ sound)",
                "textVi": "Say (Nói)",
                "icon": "🗣️",
                "isCorrect": false,
                "image": "/assets/vocab/symphony.webp"
              }
            ],
            "explanationEn": "The lips press together firmly and release with a voice vibration for /b/.",
            "explanationVi": "Hai bờ môi khép chặt rồi mở nhẹ bật ra âm /b/ rung thanh quản."
          },
          {
            "id": "s_g1_2",
            "level": 1,
            "questionEn": "Which word starts with the smooth liquid sound /l/ as in 'Lake'?",
            "questionVi": "Từ nào bắt đầu bằng âm đầu lưỡi chạm lợi /l/ như trong từ 'Lake' (Hồ)?",
            "audioPrompt": "Lake! Sword Lake! Repeat after me: /l/ - Lake!",
            "targetPhonics": "/l/ Sound - Lake, Lotus",
            "options": [
              {
                "id": "opt1",
                "textEn": "Lake (/l/ sound)",
                "textVi": "Lake (Hồ nước)",
                "icon": "🌊",
                "isCorrect": true,
                "image": "/destinations/ba_be_lake.webp"
              },
              {
                "id": "opt2",
                "textEn": "Make (/m/ sound)",
                "textVi": "Make (Làm ra)",
                "icon": "🛠️",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt3",
                "textEn": "Cake (/k/ sound)",
                "textVi": "Cake (Bánh ngọt)",
                "icon": "🍰",
                "isCorrect": false,
                "image": "/assets/vocab/mooncake.webp"
              },
              {
                "id": "opt4",
                "textEn": "Bake (/b/ sound)",
                "textVi": "Bake (Nướng bánh)",
                "icon": "🍞",
                "isCorrect": false,
                "image": "/assets/vocab/bread.webp"
              }
            ],
            "explanationEn": "Place the tip of your tongue behind your top front teeth for /l/.",
            "explanationVi": "Đầu lưỡi chạm nhẹ vào nướu răng cửa trên để phát âm /l/ thật chuẩn xác."
          },
          {
            "id": "s_g1_3",
            "level": 2,
            "questionEn": "Which word starts with the crisp tapping sound /t/ as in 'Tower'?",
            "questionVi": "Từ nào bắt đầu bằng âm bật hơi /t/ như trong từ 'Tower' (Tòa tháp)?",
            "audioPrompt": "Tower! Turtle Tower! Repeat after me: /t/ - Tower!",
            "targetPhonics": "/t/ Sound - Tower, Temple",
            "options": [
              {
                "id": "opt1",
                "textEn": "Tower (/t/ sound)",
                "textVi": "Tower (Tòa tháp)",
                "icon": "🏛️",
                "isCorrect": true,
                "image": "/destinations/hanoi_turtle_tower.webp"
              },
              {
                "id": "opt2",
                "textEn": "Power (/p/ sound)",
                "textVi": "Power (Năng lượng)",
                "icon": "⚡",
                "isCorrect": false,
                "image": "/assets/vocab/solar_power.webp"
              },
              {
                "id": "opt3",
                "textEn": "Shower (/ʃ/ sound)",
                "textVi": "Shower (Vòi sen)",
                "icon": "🚿",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt4",
                "textEn": "Flower (/fl/ sound)",
                "textVi": "Flower (Bông hoa)",
                "icon": "🌸",
                "isCorrect": false,
                "image": "/assets/vocab/lotus.webp"
              }
            ],
            "explanationEn": "Tap the tip of your tongue to the roof of your mouth and puff out air: /t/!",
            "explanationVi": "Bật luồng hơi nhẹ nơi đầu lưỡi để phát âm /t/ dứt khoát và thanh thoát."
          },
          {
            "id": "s_g1_4",
            "level": 2,
            "questionEn": "Which word starts with the sunny hissing sound /s/ as in 'Star'?",
            "questionVi": "Từ nào bắt đầu bằng âm gió /s/ như trong từ 'Star' (Ngôi sao vàng)?",
            "audioPrompt": "Star! The golden star on our red flag! Repeat: /s/ - Star!",
            "targetPhonics": "/s/ Sound - Star, Sun",
            "options": [
              {
                "id": "opt1",
                "textEn": "Star (/s/ sound)",
                "textVi": "Star (Ngôi sao)",
                "icon": "⭐",
                "isCorrect": true,
                "image": "/assets/vocab/star.webp"
              },
              {
                "id": "opt2",
                "textEn": "Car (/k/ sound)",
                "textVi": "Car (Xe hơi)",
                "icon": "🚗",
                "isCorrect": false,
                "image": "/assets/vocab/electric_bus.webp"
              },
              {
                "id": "opt3",
                "textEn": "Far (/f/ sound)",
                "textVi": "Far (Xa xôi)",
                "icon": "🔭",
                "isCorrect": false,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt4",
                "textEn": "Bar (/b/ sound)",
                "textVi": "Bar (Thanh ngang)",
                "icon": "📊",
                "isCorrect": false,
                "image": "/assets/vocab/bamboo.webp"
              }
            ],
            "explanationEn": "Keep teeth gently close and blow gentle air across the tongue: /s/!",
            "explanationVi": "Khép nhẹ hai hàm răng và đẩy luồng hơi êm qua kẽ răng để tạo âm /s/."
          }
        ]
      },
      "2": {
        "gradeNum": 2,
        "gradeBadge": "Grade 2 Explorer",
        "missionTitleEn": "Consonant Blends: /br/, /dr/, /fl/, /tr/",
        "missionTitleVi": "Phụ Âm Kép: /br/, /dr/, /fl/, /tr/",
        "missionIntroEn": "Master blended sounds in words like Bridge, Dragon, Floating, and Tree!",
        "missionIntroVi": "Luyện nối phụ âm đôi thật nhuần nhuyễn trong các từ ngữ danh lam thắng cảnh!",
        "targetObjective": "Pronounce two-letter consonant blends smoothly without vowel intrusion.",
        "starsReward": 30,
        "steps": [
          {
            "id": "s_g2_1",
            "level": 1,
            "questionEn": "Which word begins with the blend /br/ as in 'Bridge'?",
            "questionVi": "Từ nào mở đầu bằng phụ âm kép /br/ như trong từ 'Bridge' (Cây cầu)?",
            "audioPrompt": "Bridge! The Huc Bridge and Dragon Bridge! Pronounce: /br/ - Bridge!",
            "targetPhonics": "/br/ Blend - Bridge",
            "options": [
              {
                "id": "opt1",
                "textEn": "Bridge (/br/ blend)",
                "textVi": "Bridge (Cây cầu)",
                "icon": "🌉",
                "isCorrect": true,
                "image": "/destinations/the_huc_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Ridge (/r/ sound)",
                "textVi": "Ridge (Gờ đá)",
                "icon": "⛰️",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt3",
                "textEn": "Fridge (/fr/ blend)",
                "textVi": "Fridge (Tủ lạnh)",
                "icon": "🧊",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Edge (/e/ sound)",
                "textVi": "Edge (Mép bờ)",
                "icon": "📐",
                "isCorrect": false,
                "image": "/destinations/son_doong_cave.webp"
              }
            ],
            "explanationEn": "Blend /b/ directly into /r/ smoothly without adding an extra vowel.",
            "explanationVi": "Chuyển từ /b/ sang /r/ thật mượt mà không chèn thêm nguyên âm thừa."
          },
          {
            "id": "s_g2_2",
            "level": 1,
            "questionEn": "Which word starts with the powerful blend /dr/ as in 'Dragon'?",
            "questionVi": "Từ nào bắt đầu bằng phụ âm kép /dr/ như trong từ 'Dragon' (Con rồng)?",
            "audioPrompt": "Dragon! Dragon Bridge in Da Nang! Pronounce: /dr/ - Dragon!",
            "targetPhonics": "/dr/ Blend - Dragon",
            "options": [
              {
                "id": "opt1",
                "textEn": "Dragon (/dr/ blend)",
                "textVi": "Dragon (Con rồng)",
                "icon": "🐉",
                "isCorrect": true,
                "image": "/destinations/danang_dragon_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Wagon (/w/ sound)",
                "textVi": "Wagon (Cỗ xe kéo)",
                "icon": "🛒",
                "isCorrect": false,
                "image": "/assets/vocab/train.webp"
              },
              {
                "id": "opt3",
                "textEn": "Flag (/fl/ blend)",
                "textVi": "Flag (Lá cờ)",
                "icon": "🚩",
                "isCorrect": false,
                "image": "/destinations/vietnam_national_flag.webp"
              },
              {
                "id": "opt4",
                "textEn": "Frog (/fr/ blend)",
                "textVi": "Frog (Chú ếch)",
                "icon": "🐸",
                "isCorrect": false,
                "image": "/assets/vocab/wildlife.webp"
              }
            ],
            "explanationEn": "Round your lips slightly as tongue moves from /d/ to /r/.",
            "explanationVi": "Hơi tròn môi và uốn nhẹ lưỡi khi phát âm phụ âm đôi /dr/."
          },
          {
            "id": "s_g2_3",
            "level": 2,
            "questionEn": "Which word begins with the light breezy blend /fl/ as in 'Floating'?",
            "questionVi": "Từ nào bắt đầu bằng phụ âm kép /fl/ như trong từ 'Floating' (Nổi trên mặt nước)?",
            "audioPrompt": "Floating! Floating islands and floating markets! Pronounce: /fl/ - Floating!",
            "targetPhonics": "/fl/ Blend - Floating, Flower",
            "options": [
              {
                "id": "opt1",
                "textEn": "Floating (/fl/ blend)",
                "textVi": "Floating (Nổi trên nước)",
                "icon": "🛶",
                "isCorrect": true,
                "image": "/destinations/mekong_delta.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Boating (/b/ sound)",
                "textVi": "Boating (Chèo thuyền)",
                "icon": "⛵",
                "isCorrect": false,
                "image": "/assets/vocab/boat.webp"
              },
              {
                "id": "opt3",
                "textEn": "Coating (/k/ sound)",
                "textVi": "Coating (Lớp phủ)",
                "icon": "🧥",
                "isCorrect": false,
                "image": "/assets/vocab/silk.webp"
              },
              {
                "id": "opt4",
                "textEn": "Gloating (/gl/ blend)",
                "textVi": "Gloating (Đắc ý)",
                "icon": "😏",
                "isCorrect": false,
                "image": "/assets/vocab/star.webp"
              }
            ],
            "explanationEn": "Touch upper teeth to lower lip for /f/ then glide to /l/.",
            "explanationVi": "Răng trên chạm nhẹ môi dưới phát âm /f/ rồi lướt sang /l/ tự nhiên."
          },
          {
            "id": "s_g2_4",
            "level": 2,
            "questionEn": "Which word starts with the firm blend /tr/ as in 'Tree'?",
            "questionVi": "Từ nào bắt đầu bằng phụ âm kép /tr/ như trong từ 'Tree' (Cây xanh)?",
            "audioPrompt": "Tree! The ancient banyan tree! Pronounce clearly: /tr/ - Tree!",
            "targetPhonics": "/tr/ Blend - Tree, Train",
            "options": [
              {
                "id": "opt1",
                "textEn": "Tree (/tr/ blend)",
                "textVi": "Tree (Cây cối)",
                "icon": "🌳",
                "isCorrect": true,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt2",
                "textEn": "Free (/fr/ blend)",
                "textVi": "Free (Tự do)",
                "icon": "🕊️",
                "isCorrect": false,
                "image": "/assets/vocab/bird.webp"
              },
              {
                "id": "opt3",
                "textEn": "Bee (/b/ sound)",
                "textVi": "Bee (Chú ong)",
                "icon": "🐝",
                "isCorrect": false,
                "image": "/assets/vocab/butterfly.webp"
              },
              {
                "id": "opt4",
                "textEn": "Sea (/s/ sound)",
                "textVi": "Sea (Biển cả)",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              }
            ],
            "explanationEn": "Keep the tongue tip behind front teeth and curl smoothly into /r/.",
            "explanationVi": "Đầu lưỡi rút nhẹ về vòm họng phát âm /tr/ rõ ràng, không lẫn với /ch/."
          }
        ]
      },
      "3": {
        "gradeNum": 3,
        "gradeBadge": "Grade 3 Foundation",
        "missionTitleEn": "Vowel Lengths & Natural Diphthongs",
        "missionTitleVi": "Nguyên Âm Dài & Nhị Trùng Âm Tự Nhiên",
        "missionIntroEn": "Contrast short and long vowels in words like Beach, Island, and Ancient!",
        "missionIntroVi": "Phân biệt nguyên âm ngắn và nguyên âm đôi để nói tiếng Anh tự nhiên như người bản xứ!",
        "targetObjective": "Accurately pronounce diphthongs /aɪ/, /iː/, /eɪ/, /aʊ/ with correct vowel duration.",
        "starsReward": 35,
        "steps": [
          {
            "id": "s_g3_1",
            "level": 1,
            "questionEn": "Which word contains the opening diphthong /aɪ/ as in 'Island'?",
            "questionVi": "Từ nào chứa nguyên âm đôi /aɪ/ mở như trong từ 'Island' (Hòn đảo)?",
            "audioPrompt": "Island! Floating Island! Pronounce the diphthong: /aɪ/ - Island!",
            "targetPhonics": "/aɪ/ Diphthong - Island",
            "options": [
              {
                "id": "opt1",
                "textEn": "Island (/aɪ/ diphthong)",
                "textVi": "Island (Hòn đảo)",
                "icon": "🏝️",
                "isCorrect": true,
                "image": "/destinations/phu_quoc_island.webp"
              },
              {
                "id": "opt2",
                "textEn": "Ingot (/ɪ/ short vowel)",
                "textVi": "Ingot (Thỏi kim loại)",
                "icon": "🪙",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              },
              {
                "id": "opt3",
                "textEn": "Image (/ɪ/ short vowel)",
                "textVi": "Image (Hình ảnh)",
                "icon": "🖼️",
                "isCorrect": false,
                "image": "/assets/vocab/folk_art.webp"
              },
              {
                "id": "opt4",
                "textEn": "Insect (/ɪ/ short vowel)",
                "textVi": "Insect (Côn trùng)",
                "icon": "🦗",
                "isCorrect": false,
                "image": "/assets/vocab/butterfly.webp"
              }
            ],
            "explanationEn": "Notice that the letter 's' in 'Island' is silent! Say /aɪ-lənd/.",
            "explanationVi": "Chữ 's' trong 'Island' là âm câm, phát âm chuẩn là /ˈaɪ.lənd/."
          },
          {
            "id": "s_g3_2",
            "level": 2,
            "questionEn": "Which word has the smiling long vowel /iː/ as in 'Beach'?",
            "questionVi": "Từ nào chứa nguyên âm dài /iː/ mỉm cười như trong từ 'Beach' (Bãi biển)?",
            "audioPrompt": "Beach! Beautiful sunny beach! Stretch your smile: /iː/ - Beach!",
            "targetPhonics": "/iː/ Long Vowel - Beach",
            "options": [
              {
                "id": "opt1",
                "textEn": "Beach (/iː/ long vowel)",
                "textVi": "Beach (Bãi biển)",
                "icon": "🏖️",
                "isCorrect": true,
                "image": "/destinations/phu_quoc_island.webp"
              },
              {
                "id": "opt2",
                "textEn": "Batch (/æ/ short vowel)",
                "textVi": "Batch (Đợt hàng)",
                "icon": "📦",
                "isCorrect": false,
                "image": "/assets/vocab/bread.webp"
              },
              {
                "id": "opt3",
                "textEn": "Botch (/ɒ/ short vowel)",
                "textVi": "Botch (Hỏng việc)",
                "icon": "❌",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt4",
                "textEn": "Birch (/ɜː/ vowel)",
                "textVi": "Birch (Cây bạch dương)",
                "icon": "🌲",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              }
            ],
            "explanationEn": "Stretch your lips wide like a bright smile to produce a clear /iː/.",
            "explanationVi": "Mở rộng khóe miệng như đang mỉm cười để giữ âm /iː/ tròn dài."
          },
          {
            "id": "s_g3_3",
            "level": 3,
            "questionEn": "Which word starts with the glide diphthong /eɪ/ as in 'Ancient'?",
            "questionVi": "Từ nào bắt đầu bằng nguyên âm đôi /eɪ/ như trong từ 'Ancient' (Cổ kính)?",
            "audioPrompt": "Ancient! Hoi An Ancient Town! Pronounce: /eɪn-ʃənt/!",
            "targetPhonics": "/eɪ/ Diphthong - Ancient",
            "options": [
              {
                "id": "opt1",
                "textEn": "Ancient (/eɪ/ diphthong)",
                "textVi": "Ancient (Cổ kính)",
                "icon": "🏮",
                "isCorrect": true,
                "image": "/destinations/hoian_ancient_town.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Action (/æ/ short vowel)",
                "textVi": "Action (Hành động)",
                "icon": "🎬",
                "isCorrect": false,
                "image": "/assets/vocab/adventure.webp"
              },
              {
                "id": "opt3",
                "textEn": "Attic (/æ/ short vowel)",
                "textVi": "Attic (Gác mái)",
                "icon": "🏠",
                "isCorrect": false,
                "image": "/assets/vocab/palace.webp"
              },
              {
                "id": "opt4",
                "textEn": "Anthem (/æ/ short vowel)",
                "textVi": "Anthem (Quốc ca)",
                "icon": "🎼",
                "isCorrect": false,
                "image": "/destinations/vietnam_national_flag.webp"
              }
            ],
            "explanationEn": "Glide smoothly from /e/ to /ɪ/ so the syllable sounds rich and resonant.",
            "explanationVi": "Lướt từ âm /e/ sang /ɪ/ liền mạch để tạo nên âm đôi /eɪ/ sang trọng."
          },
          {
            "id": "s_g3_4",
            "level": 3,
            "questionEn": "Which word contains the full diphthong /aʊ/ as in 'Town'?",
            "questionVi": "Từ nào chứa nguyên âm đôi /aʊ/ như trong từ 'Town' (Phố thị)?",
            "audioPrompt": "Town! Old Town Hoi An! Pronounce: /aʊ/ - Town!",
            "targetPhonics": "/aʊ/ Diphthong - Town",
            "options": [
              {
                "id": "opt1",
                "textEn": "Town (/aʊ/ diphthong)",
                "textVi": "Town (Phố cổ / Thị trấn)",
                "icon": "🏘️",
                "isCorrect": true,
                "image": "/destinations/hoian_ancient_town.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Tone (/oʊ/ diphthong)",
                "textVi": "Tone (Tông giọng)",
                "icon": "🎵",
                "isCorrect": false,
                "image": "/assets/vocab/instrument.webp"
              },
              {
                "id": "opt3",
                "textEn": "Tin (/ɪ/ short vowel)",
                "textVi": "Tin (Hộp thiếc)",
                "icon": "🥫",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt4",
                "textEn": "Tan (/æ/ short vowel)",
                "textVi": "Tan (Màu rám nắng)",
                "icon": "🧴",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              }
            ],
            "explanationEn": "Start with open mouth at /a/ and round lips inward to /ʊ/.",
            "explanationVi": "Mở rộng khẩu hình ở /a/ rồi thu nhỏ tròn môi về /ʊ/ để tạo âm /aʊ/."
          }
        ]
      },
      "4": {
        "gradeNum": 4,
        "gradeBadge": "Grade 4 Expansion",
        "missionTitleEn": "Ending Consonant Clusters: /st/, /pr/, /kr/, /kt/",
        "missionTitleVi": "Cụm Phụ Âm Đuôi: /st/, /pr/, /kr/, /kt/",
        "missionIntroEn": "Pronounce tricky ending clusters clearly so international listeners understand 100%!",
        "missionIntroVi": "Bật rõ các cụm âm đuôi phức tạp giúp người nước ngoài nghe hiểu trọn vẹn 100%!",
        "targetObjective": "Articulate final consonant clusters /st/, /kt/ and initial clusters /pr/, /kr/ without omissions.",
        "starsReward": 40,
        "steps": [
          {
            "id": "s_g4_1",
            "level": 1,
            "questionEn": "Which word ends with the distinct double cluster /st/ as in 'Coast'?",
            "questionVi": "Từ nào kết thúc bằng cụm âm đuôi đôi /st/ như trong từ 'Coast' (Bờ biển)?",
            "audioPrompt": "Coast! Vietnam has over 3,260 kilometers of coastline! Pronounce: /st/ - Coast!",
            "targetPhonics": "Ending /st/ - Coast, Forest",
            "options": [
              {
                "id": "opt1",
                "textEn": "Coast (/st/ cluster)",
                "textVi": "Coast (Bờ biển)",
                "icon": "🏖️",
                "isCorrect": true,
                "image": "/destinations/danang.webp"
              },
              {
                "id": "opt2",
                "textEn": "Coat (/t/ single sound)",
                "textVi": "Coat (Áo choàng)",
                "icon": "🧥",
                "isCorrect": false,
                "image": "/destinations/vietnamese_ao_dai.webp"
              },
              {
                "id": "opt3",
                "textEn": "Code (/d/ sound)",
                "textVi": "Code (Mã số)",
                "icon": "💻",
                "isCorrect": false,
                "image": "/assets/vocab/smart_city.webp"
              },
              {
                "id": "opt4",
                "textEn": "Comb (/m/ sound)",
                "textVi": "Comb (Lược chải)",
                "icon": "🪮",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              }
            ],
            "explanationEn": "Do not drop the final 't'! Hiss the /s/ then immediately tap the /t/.",
            "explanationVi": "Không được bỏ rơi âm /t/ cuối! Xì âm /s/ rồi chạm bật ngay âm /t/."
          },
          {
            "id": "s_g4_2",
            "level": 2,
            "questionEn": "Which word begins with the noble cluster /pr/ as in 'Protect'?",
            "questionVi": "Từ nào mở đầu bằng cụm phụ âm /pr/ như trong từ 'Protect' (Bảo vệ di sản)?",
            "audioPrompt": "Protect! We protect our historical heritage! Pronounce: /pr/ - Protect!",
            "targetPhonics": "Initial /pr/ - Protect, Proud",
            "options": [
              {
                "id": "opt1",
                "textEn": "Protect (/pr/ blend)",
                "textVi": "Protect (Bảo vệ)",
                "icon": "🛡️",
                "isCorrect": true,
                "image": "/assets/vocab/protect.webp"
              },
              {
                "id": "opt2",
                "textEn": "Detect (/d/ sound)",
                "textVi": "Detect (Phát hiện)",
                "icon": "🔍",
                "isCorrect": false,
                "image": "/assets/vocab/smart_city.webp"
              },
              {
                "id": "opt3",
                "textEn": "Reject (/r/ sound)",
                "textVi": "Reject (Từ chối)",
                "icon": "🚫",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt4",
                "textEn": "Connect (/k/ sound)",
                "textVi": "Connect (Kết nối)",
                "icon": "🔗",
                "isCorrect": false,
                "image": "/assets/vocab/public_transit.webp"
              }
            ],
            "explanationEn": "Pop lips for /p/ and immediately draw tongue into /r/.",
            "explanationVi": "Môi bật /p/ và lưỡi uốn ngay vào /r/ tạo nên âm /pr/ dứt khoát."
          },
          {
            "id": "s_g4_3",
            "level": 3,
            "questionEn": "Which word begins with the sparkling cluster /kr/ as in 'Crystal'?",
            "questionVi": "Từ nào bắt đầu bằng cụm phụ âm /kr/ như trong từ 'Crystal' (Pha lê)?",
            "audioPrompt": "Crystal! Floating islands powered by luminous crystals! Pronounce: /kr/ - Crystal!",
            "targetPhonics": "Initial /kr/ - Crystal, Craft",
            "options": [
              {
                "id": "opt1",
                "textEn": "Crystal (/kr/ blend)",
                "textVi": "Crystal (Pha lê)",
                "icon": "💎",
                "isCorrect": true,
                "image": "/assets/vocab/star.webp"
              },
              {
                "id": "opt2",
                "textEn": "Pistol (/p/ sound)",
                "textVi": "Pistol (Khẩu súng)",
                "icon": "🔫",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt3",
                "textEn": "Bristle (/br/ blend)",
                "textVi": "Bristle (Sợi lông cứng)",
                "icon": "🖌️",
                "isCorrect": false,
                "image": "/assets/vocab/bamboo.webp"
              },
              {
                "id": "opt4",
                "textEn": "Whistle (/w/ sound)",
                "textVi": "Whistle (Cái còi)",
                "icon": "📢",
                "isCorrect": false,
                "image": "/assets/vocab/instrument.webp"
              }
            ],
            "explanationEn": "Release the throat catch /k/ into the curled /r/ with clean resonance.",
            "explanationVi": "Bật âm cuống họng /k/ hòa vào /r/ tạo nên âm /kr/ sắc sảo."
          },
          {
            "id": "s_g4_4",
            "level": 4,
            "questionEn": "Which word ends with the sharp double stop /kt/ as in 'Respect'?",
            "questionVi": "Từ nào kết thúc bằng cụm âm bật kép /kt/ như trong từ 'Respect' (Tôn trọng)?",
            "audioPrompt": "Respect! We respect our teachers and our national traditions! Pronounce: /kt/ - Respect!",
            "targetPhonics": "Ending /kt/ - Respect, Protect",
            "options": [
              {
                "id": "opt1",
                "textEn": "Respect (/kt/ cluster)",
                "textVi": "Respect (Tôn trọng)",
                "icon": "🤝",
                "isCorrect": true,
                "image": "/assets/vocab/tradition.webp"
              },
              {
                "id": "opt2",
                "textEn": "Repeat (/t/ sound)",
                "textVi": "Repeat (Lặp lại)",
                "icon": "🔁",
                "isCorrect": false,
                "image": "/assets/vocab/symphony.webp"
              },
              {
                "id": "opt3",
                "textEn": "Report (/rt/ sound)",
                "textVi": "Report (Báo cáo)",
                "icon": "📑",
                "isCorrect": false,
                "image": "/assets/vocab/woodblock.webp"
              },
              {
                "id": "opt4",
                "textEn": "Rely (/l/ sound)",
                "textVi": "Rely (Dựa vào)",
                "icon": "🤲",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              }
            ],
            "explanationEn": "Sound the throat stop /k/ followed by the front dental tap /t/: /kt/!",
            "explanationVi": "Chặn âm /k/ ở họng rồi bật tiếp âm /t/ nơi đầu răng: /-kt/ dứt khoát."
          }
        ]
      },
      "5": {
        "gradeNum": 5,
        "gradeBadge": "Grade 5 Leadership",
        "missionTitleEn": "Connected Speech & Public Speaking",
        "missionTitleVi": "Nối Âm Tự Nhiên & Thuyết Trình Hùng Biện",
        "missionIntroEn": "Deliver fluent English presentations with authentic rhythm, intonation, and linking sounds!",
        "missionIntroVi": "Luyện ngữ điệu lên xuống và nối âm mượt mà để thuyết trình tiếng Anh cuốn hút!",
        "targetObjective": "Apply rising/falling sentence intonation, content word stress, and consonant-to-vowel linking.",
        "starsReward": 45,
        "steps": [
          {
            "id": "s_g5_1",
            "level": 1,
            "questionEn": "In standard English, how does your voice pitch change at the end of a Yes/No question?",
            "questionVi": "Trong tiếng Anh chuẩn, cao độ giọng nói thay đổi thế nào ở cuối câu hỏi Yes/No?",
            "audioPrompt": "Listen to the rising tone: 'Have you ever visited Ha Long Bay?' Notice how the voice rises!",
            "targetPhonics": "Rising Intonation (Yes/No Questions)",
            "options": [
              {
                "id": "opt1",
                "textEn": "Voice rises at the end",
                "textVi": "Lên giọng ở cuối câu",
                "icon": "📈",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Voice drops sharply",
                "textVi": "Hạ giọng thật mạnh",
                "icon": "📉",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Whisper only without breath",
                "textVi": "Chỉ nói thì thào",
                "icon": "🤫",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Shout loudly like an alarm",
                "textVi": "Hét to từng từ",
                "icon": "📢",
                "isCorrect": false
              }
            ],
            "explanationEn": "Yes/No questions naturally finish with a rising intonation contour.",
            "explanationVi": "Câu hỏi Yes/No luôn có ngữ điệu lên giọng ở từ cuối cùng để thể hiện nghi vấn."
          },
          {
            "id": "s_g5_2",
            "level": 2,
            "questionEn": "When saying 'Vietnam is an ancient nation', how are 'is an' linked together naturally?",
            "questionVi": "Khi nói cụm 'is an', người bản xứ sẽ liên kết hai từ này với nhau như thế nào?",
            "audioPrompt": "Listen to the linking sound: 'Vietnam is_an ancient nation!' Sounds like 'i-zan'!",
            "targetPhonics": "Consonant-to-Vowel Linking",
            "options": [
              {
                "id": "opt1",
                "textEn": "Link consonant to vowel: 'i-zan'",
                "textVi": "Nối phụ âm sang nguyên âm: 'i-zan'",
                "icon": "🔗",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Pause for three seconds between words",
                "textVi": "Ngắt quãng 3 giây mỗi từ",
                "icon": "⏸️",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Drop the final consonant entirely",
                "textVi": "Bỏ toàn bộ phụ âm cuối",
                "icon": "✂️",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Spell each letter out loud",
                "textVi": "Đánh vần từng chữ cái",
                "icon": "🔤",
                "isCorrect": false
              }
            ],
            "explanationEn": "Linking the final consonant of one word to the starting vowel of the next creates fluent native flow.",
            "explanationVi": "Nối phụ âm cuối từ trước sang nguyên âm đầu từ sau giúp câu nói mượt mà tự nhiên."
          },
          {
            "id": "s_g5_3",
            "level": 3,
            "questionEn": "Which words should receive the most emphatic stress during an inspiring speech?",
            "questionVi": "Những từ ngữ nào cần được nhấn trọng âm nổi bật trong bài thuyết trình truyền cảm hứng?",
            "audioPrompt": "Content words like nouns, main verbs, and adjectives carry the vital message of your speech!",
            "targetPhonics": "Sentence Stress (Content Words)",
            "options": [
              {
                "id": "opt1",
                "textEn": "Key content words (nouns, main verbs, adjectives)",
                "textVi": "Từ mang nội dung chính (danh từ, động từ, tính từ)",
                "icon": "⭐",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Only small articles like 'a', 'an', 'the'",
                "textVi": "Chỉ nhấn vào các mạo từ nhỏ",
                "icon": "🔤",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "A flat robotic monotone with no emphasis",
                "textVi": "Giọng đều đều không cảm xúc",
                "icon": "🤖",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Speak the sentences backwards",
                "textVi": "Đọc ngược từ dưới lên",
                "icon": "🔄",
                "isCorrect": false
              }
            ],
            "explanationEn": "Stressing key content words directs listener attention to your most powerful ideas.",
            "explanationVi": "Nhấn vào từ chìa khóa giúp bài thuyết trình giàu năng lượng và thu hút người nghe."
          },
          {
            "id": "s_g5_4",
            "level": 4,
            "questionEn": "Which opening statement shows confidence and diplomatic poise for an international audience?",
            "questionVi": "Câu mở đầu nào thể hiện phong thái tự tin và đĩnh đạc nhất trước bạn bè quốc tế?",
            "audioPrompt": "Good morning distinguished guests! Today, I am proud to present the timeless heritage of Vietnam!",
            "targetPhonics": "Oratorical Presentation Opening",
            "options": [
              {
                "id": "opt1",
                "textEn": "'Good morning everyone! Today, I am proud to present Vietnam's heritage.'",
                "textVi": "'Xin chào mọi người! Hôm nay, em vô cùng tự hào được giới thiệu di sản Việt Nam.'",
                "icon": "🌟",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'I don't know what to say, goodbye.'",
                "textVi": "'Em không biết nói gì, tạm biệt.'",
                "icon": "🙈",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'Please don't listen to me today.'",
                "textVi": "'Xin mọi người đừng nghe em nói.'",
                "icon": "🔇",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'Everything is boring here.'",
                "textVi": "'Mọi thứ ở đây thật nhàm chán.'",
                "icon": "🥱",
                "isCorrect": false
              }
            ],
            "explanationEn": "A warm greeting combined with proud cultural conviction captures hearts immediately.",
            "explanationVi": "Lời chào tự tin cùng niềm tự hào dân tộc tạo ấn tượng mạnh mẽ cho bài phát biểu."
          }
        ]
      }
    }
  },
  {
    "id": "puzzle",
    "orderNumber": 4,
    "nameEn": "Vocabulary Kingdom",
    "nameVi": "Vương Quốc Từ Vựng",
    "subtitleEn": "Unscramble & Spell",
    "subtitleVi": "Giải mã Ô chữ, Ghép vần & Làm giàu vốn từ di sản",
    "taglineEn": "Unscramble magical letters, unlock ancient scrolls, and master rich English vocabulary!",
    "taglineVi": "Giải mã các chữ cái kỳ diệu, mở khóa kho báu tri thức và làm chủ vốn từ phong phú!",
    "crystalName": "Topaz Crystal",
    "crystalColor": "text-amber-400",
    "crystalHex": "#f59e0b",
    "glowRgba": "rgba(245, 158, 11, 0.45)",
    "badgeText": "SPELL & CONQUER",
    "gradientBg": "from-amber-500/20 via-orange-600/30 to-yellow-900/60",
    "cardBorder": "border-amber-400/60 hover:border-amber-300",
    "floatDelay": "animate-island-4",
    "landmarkFeature": "Golden Library of Alexandria & Ancient Crossword Temple",
    "imageSrc": "/assets/islands/island_4_tu_vung.webp",
    "gradeData": {
      "1": {
        "gradeNum": 1,
        "gradeBadge": "Grade 1 Starter",
        "missionTitleEn": "4-Letter Magic Words",
        "missionTitleVi": "Từ Vựng Kỳ Diệu 4 Chữ Cái",
        "missionIntroEn": "Tap the letter tiles to spell famous travel and nature words!",
        "missionIntroVi": "Bé hãy chạm vào các ô chữ cái để ghép thành từ vựng hoàn chỉnh nhé!",
        "targetObjective": "Spell basic 4-letter words: BOAT, LAKE, PARK, TOWN using visual hints.",
        "starsReward": 25,
        "steps": [
          {
            "id": "p_g1_1",
            "level": 1,
            "questionEn": "Unscramble the letters B-O-A-T: What vehicle floats across emerald bays?",
            "questionVi": "Ghép các chữ cái B-O-A-T: Phương tiện nào lướt nhẹ trên mặt vịnh xanh?",
            "scrambleTarget": "BOAT",
            "options": [
              {
                "id": "opt1",
                "textEn": "BOAT (Con thuyền)",
                "textVi": "Con thuyền lướt sóng",
                "icon": "⛵",
                "isCorrect": true,
                "image": "/assets/vocab/boat.webp"
              },
              {
                "id": "opt2",
                "textEn": "COAT (Áo khoác)",
                "textVi": "Áo khoác ấm",
                "icon": "🧥",
                "isCorrect": false,
                "image": "/destinations/vietnamese_ao_dai.webp"
              },
              {
                "id": "opt3",
                "textEn": "GOAT (Con dê)",
                "textVi": "Chú dê núi",
                "icon": "🐐",
                "isCorrect": false,
                "image": "/assets/vocab/wildlife.webp"
              },
              {
                "id": "opt4",
                "textEn": "MOAT (Hào nước)",
                "textVi": "Hào nước quanh lũy",
                "icon": "🏰",
                "isCorrect": false,
                "image": "/destinations/hue_citadel.webp"
              }
            ],
            "explanationEn": "B-O-A-T spells BOAT, the vehicle we ride to explore Ha Long Bay!",
            "explanationVi": "B-O-A-T ghép thành BOAT (Con thuyền), đưa bé thám hiểm vịnh biển kỳ quan!"
          },
          {
            "id": "p_g1_2",
            "level": 1,
            "questionEn": "Unscramble L-A-K-E: What is a peaceful body of water like Hoan Kiem?",
            "questionVi": "Ghép các chữ cái L-A-K-E: Vùng nước êm ả như Hồ Hoàn Kiếm gọi là gì?",
            "scrambleTarget": "LAKE",
            "options": [
              {
                "id": "opt1",
                "textEn": "LAKE (Hồ nước)",
                "textVi": "Hồ nước thanh bình",
                "icon": "🌊",
                "isCorrect": true,
                "image": "/destinations/ba_be_lake.webp"
              },
              {
                "id": "opt2",
                "textEn": "CAKE (Bánh ngọt)",
                "textVi": "Bánh ngọt thơm ngon",
                "icon": "🍰",
                "isCorrect": false,
                "image": "/assets/vocab/mooncake.webp"
              },
              {
                "id": "opt3",
                "textEn": "BAKE (Nướng bánh)",
                "textVi": "Nướng bánh trong lò",
                "icon": "🍞",
                "isCorrect": false,
                "image": "/assets/vocab/bread.webp"
              },
              {
                "id": "opt4",
                "textEn": "WAKE (Thức giấc)",
                "textVi": "Thức giấc đón ngày mới",
                "icon": "⏰",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              }
            ],
            "explanationEn": "L-A-K-E spells LAKE, where the historic Turtle Tower rests.",
            "explanationVi": "L-A-K-E ghép thành LAKE (Hồ nước), nơi có Tháp Rùa cổ kính soi bóng."
          },
          {
            "id": "p_g1_3",
            "level": 2,
            "questionEn": "Unscramble P-A-R-K: Where do families walk happily under green shady trees?",
            "questionVi": "Ghép các chữ cái P-A-R-K: Nơi nào các gia đình đi dạo dưới bóng cây râm mát?",
            "scrambleTarget": "PARK",
            "options": [
              {
                "id": "opt1",
                "textEn": "PARK (Công viên)",
                "textVi": "Công viên rợp bóng mát",
                "icon": "🌳",
                "isCorrect": true,
                "image": "/assets/vocab/national_park.webp"
              },
              {
                "id": "opt2",
                "textEn": "BARK (Tiếng sủa)",
                "textVi": "Tiếng cún sủa vui",
                "icon": "🐶",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt3",
                "textEn": "DARK (Trời tối)",
                "textVi": "Bầu trời ban đêm",
                "icon": "🌙",
                "isCorrect": false,
                "image": "/assets/vocab/moon.webp"
              },
              {
                "id": "opt4",
                "textEn": "MARK (Dấu vết)",
                "textVi": "Dấu tích trên giấy",
                "icon": "✏️",
                "isCorrect": false,
                "image": "/assets/vocab/folk_art.webp"
              }
            ],
            "explanationEn": "P-A-R-K spells PARK, a fresh green space in modern cities.",
            "explanationVi": "P-A-R-K ghép thành PARK (Công viên xanh) cho mọi người thư giãn."
          },
          {
            "id": "p_g1_4",
            "level": 2,
            "questionEn": "Unscramble T-O-W-N: What word describes an ancient historic district like Hoi An?",
            "questionVi": "Ghép các chữ cái T-O-W-N: Từ ngữ nào chỉ phố cổ kính như Hội An?",
            "scrambleTarget": "TOWN",
            "options": [
              {
                "id": "opt1",
                "textEn": "TOWN (Phố cổ / Thị trấn)",
                "textVi": "Phố cổ Hội An",
                "icon": "🏮",
                "isCorrect": true,
                "image": "/destinations/hoian_ancient_town.jpg"
              },
              {
                "id": "opt2",
                "textEn": "DOWN (Đi xuống)",
                "textVi": "Đi xuống phía dưới",
                "icon": "⬇️",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt3",
                "textEn": "GOWN (Áo dạ hội)",
                "textVi": "Áo choàng dạ hội",
                "icon": "👗",
                "isCorrect": false,
                "image": "/destinations/vietnamese_ao_dai.webp"
              },
              {
                "id": "opt4",
                "textEn": "CROWN (Vương miện)",
                "textVi": "Vương miện lấp lánh",
                "icon": "👑",
                "isCorrect": false,
                "image": "/assets/vocab/palace.webp"
              }
            ],
            "explanationEn": "T-O-W-N spells TOWN, as in Hoi An Ancient Town!",
            "explanationVi": "T-O-W-N ghép thành TOWN, như trong cụm từ 'Hoi An Ancient Town'."
          }
        ]
      },
      "2": {
        "gradeNum": 2,
        "gradeBadge": "Grade 2 Explorer",
        "missionTitleEn": "Geography Word Builders",
        "missionTitleVi": "Xây Dựng Từ Vựng Địa Lý",
        "missionIntroEn": "Assemble iconic Vietnamese geography terms from scattered letters!",
        "missionIntroVi": "Sắp xếp lại các chữ cái rời rạc để tạo thành thuật ngữ địa lý Việt Nam!",
        "targetObjective": "Spell 5-6 letter geography words: RIVER, TOWER, BRIDGE, ISLAND accurately.",
        "starsReward": 30,
        "steps": [
          {
            "id": "p_g2_1",
            "level": 1,
            "questionEn": "Unscramble R-I-V-E-R: What flowing water body flows through Hue and Da Nang?",
            "questionVi": "Ghép các chữ cái R-I-V-E-R: Dòng nước ngọt nào chảy qua thành phố Huế và Đà Nẵng?",
            "scrambleTarget": "RIVER",
            "options": [
              {
                "id": "opt1",
                "textEn": "RIVER (Dòng sông)",
                "textVi": "Dòng sông xanh mát",
                "icon": "🏞️",
                "isCorrect": true,
                "image": "/destinations/perfume_river_hue.webp"
              },
              {
                "id": "opt2",
                "textEn": "DIVER (Thợ lặn)",
                "textVi": "Thợ lặn thám hiểm",
                "icon": "🤿",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt3",
                "textEn": "LIVER (Lá gan)",
                "textVi": "Bộ phận cơ thể",
                "icon": "🫀",
                "isCorrect": false,
                "image": "/assets/vocab/wildlife.webp"
              },
              {
                "id": "opt4",
                "textEn": "COVER (Nắp đậy)",
                "textVi": "Nắp che đậy",
                "icon": "📦",
                "isCorrect": false,
                "image": "/assets/vocab/woodblock.webp"
              }
            ],
            "explanationEn": "R-I-V-E-R spells RIVER, like the Perfume River and Han River.",
            "explanationVi": "R-I-V-E-R ghép thành RIVER (Dòng sông), như sông Hương và sông Hàn."
          },
          {
            "id": "p_g2_2",
            "level": 1,
            "questionEn": "Unscramble T-O-W-E-R: What tall historical stone structure sits in Sword Lake?",
            "questionVi": "Ghép các chữ cái T-O-W-E-R: Công trình kiến trúc đá cổ nào nằm giữa Hồ Gươm?",
            "scrambleTarget": "TOWER",
            "options": [
              {
                "id": "opt1",
                "textEn": "TOWER (Tòa tháp)",
                "textVi": "Tháp Rùa cổ kính",
                "icon": "🏛️",
                "isCorrect": true,
                "image": "/destinations/hanoi_turtle_tower.webp"
              },
              {
                "id": "opt2",
                "textEn": "POWER (Năng lượng)",
                "textVi": "Năng lượng điện",
                "icon": "⚡",
                "isCorrect": false,
                "image": "/assets/vocab/solar_power.webp"
              },
              {
                "id": "opt3",
                "textEn": "SHOWER (Mưa rào)",
                "textVi": "Cơn mưa rào",
                "icon": "🌧️",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              },
              {
                "id": "opt4",
                "textEn": "FLOWER (Bông hoa)",
                "textVi": "Bông hoa tươi thắm",
                "icon": "🌸",
                "isCorrect": false,
                "image": "/assets/vocab/lotus.webp"
              }
            ],
            "explanationEn": "T-O-W-E-R spells TOWER, as in Turtle Tower (Tháp Rùa).",
            "explanationVi": "T-O-W-E-R ghép thành TOWER, như trong 'Turtle Tower' (Tháp Rùa)."
          },
          {
            "id": "p_g2_3",
            "level": 2,
            "questionEn": "Unscramble B-R-I-D-G-E: What structure connects two riverbanks across water?",
            "questionVi": "Ghép các chữ cái B-R-I-D-G-E: Công trình nào nối liền hai bờ sông bắc qua mặt nước?",
            "scrambleTarget": "BRIDGE",
            "options": [
              {
                "id": "opt1",
                "textEn": "BRIDGE (Cây cầu)",
                "textVi": "Cầu bắc qua sông",
                "icon": "🌉",
                "isCorrect": true,
                "image": "/destinations/the_huc_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "FRIDGE (Tủ lạnh)",
                "textVi": "Tủ lạnh gia đình",
                "icon": "🧊",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt3",
                "textEn": "BADGE (Huy hiệu)",
                "textVi": "Huy hiệu cài áo",
                "icon": "📛",
                "isCorrect": false,
                "image": "/assets/vocab/star.webp"
              },
              {
                "id": "opt4",
                "textEn": "HEDGE (Hàng rào)",
                "textVi": "Hàng rào cây xanh",
                "icon": "🌿",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              }
            ],
            "explanationEn": "B-R-I-D-G-E spells BRIDGE, like the Golden Bridge and Dragon Bridge.",
            "explanationVi": "B-R-I-D-G-E ghép thành BRIDGE (Cây cầu), như Cầu Vàng và Cầu Rồng."
          },
          {
            "id": "p_g2_4",
            "level": 2,
            "questionEn": "Unscramble I-S-L-A-N-D: What is a piece of land completely surrounded by water?",
            "questionVi": "Ghép các chữ cái I-S-L-A-N-D: Vùng đất được bao bọc bốn bề bởi sóng nước là gì?",
            "scrambleTarget": "ISLAND",
            "options": [
              {
                "id": "opt1",
                "textEn": "ISLAND (Hòn đảo)",
                "textVi": "Hòn đảo giữa biển khơi",
                "icon": "🏝️",
                "isCorrect": true,
                "image": "/destinations/phu_quoc_island.webp"
              },
              {
                "id": "opt2",
                "textEn": "INLAND (Nội địa)",
                "textVi": "Vùng sâu trong đất liền",
                "icon": "🗺️",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt3",
                "textEn": "HIGHLAND (Cao nguyên)",
                "textVi": "Vùng đất cao nguyên",
                "icon": "⛰️",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt4",
                "textEn": "LOWLAND (Vùng trũng)",
                "textVi": "Vùng đồng bằng trũng",
                "icon": "🌾",
                "isCorrect": false,
                "image": "/destinations/mekong_delta.jpg"
              }
            ],
            "explanationEn": "I-S-L-A-N-D spells ISLAND, remember the letter 's' is silent!",
            "explanationVi": "I-S-L-A-N-D ghép thành ISLAND (Hòn đảo), chữ 's' là âm câm bé nhé!"
          }
        ]
      },
      "3": {
        "gradeNum": 3,
        "gradeBadge": "Grade 3 Foundation",
        "missionTitleEn": "Cultural Heritage Lexicon",
        "missionTitleVi": "Bộ Từ Vựng Di Sản Văn Hóa",
        "missionIntroEn": "Unscramble rich cultural vocabulary: Temple, Market, Palace, and Nature!",
        "missionIntroVi": "Giải mã các từ vựng văn hóa: Đền miếu, Chợ truyền thống, Cung điện và Thiên nhiên!",
        "targetObjective": "Master 6-letter cultural vocabulary with correct spelling and contextual meaning.",
        "starsReward": 35,
        "steps": [
          {
            "id": "p_g3_1",
            "level": 1,
            "questionEn": "Unscramble T-E-M-P-L-E: What is a sacred historic place of worship like Ngoc Son?",
            "questionVi": "Ghép các chữ cái T-E-M-P-L-E: Nơi thờ tự linh thiêng cổ kính như đền Ngọc Sơn gọi là gì?",
            "scrambleTarget": "TEMPLE",
            "options": [
              {
                "id": "opt1",
                "textEn": "TEMPLE (Đền thờ)",
                "textVi": "Đền thờ linh thiêng",
                "icon": "⛩️",
                "isCorrect": true,
                "image": "/destinations/temple_of_literature.webp"
              },
              {
                "id": "opt2",
                "textEn": "SAMPLE (Mẫu thử)",
                "textVi": "Mẫu vật thử nghiệm",
                "icon": "🧪",
                "isCorrect": false,
                "image": "/assets/vocab/woodblock.webp"
              },
              {
                "id": "opt3",
                "textEn": "SIMPLE (Đơn giản)",
                "textVi": "Điều đơn giản",
                "icon": "👌",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt4",
                "textEn": "DIMPLE (Lúm đồng tiền)",
                "textVi": "Lúm đồng tiền trên má",
                "icon": "😊",
                "isCorrect": false,
                "image": "/assets/vocab/lotus.webp"
              }
            ],
            "explanationEn": "T-E-M-P-L-E spells TEMPLE, a sacred sanctuary respecting cultural ancestors.",
            "explanationVi": "T-E-M-P-L-E ghép thành TEMPLE (Ngôi đền), nơi lưu giữ truyền thống uống nước nhớ nguồn."
          },
          {
            "id": "p_g3_2",
            "level": 2,
            "questionEn": "Unscramble M-A-R-K-E-T: What bustling hub trades tropical fruits and fresh vegetables?",
            "questionVi": "Ghép các chữ cái M-A-R-K-E-T: Nơi giao thương nhộn nhịp hoa quả và đặc sản địa phương?",
            "scrambleTarget": "MARKET",
            "options": [
              {
                "id": "opt1",
                "textEn": "MARKET (Khu chợ)",
                "textVi": "Chợ truyền thống",
                "icon": "🏪",
                "isCorrect": true,
                "image": "/destinations/hcmc_benthanh.jpg"
              },
              {
                "id": "opt2",
                "textEn": "BASKET (Cái giỏ)",
                "textVi": "Giỏ đan bằng tre",
                "icon": "🧺",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt3",
                "textEn": "TARGET (Mục tiêu)",
                "textVi": "Mục tiêu hướng tới",
                "icon": "🎯",
                "isCorrect": false,
                "image": "/assets/vocab/star.webp"
              },
              {
                "id": "opt4",
                "textEn": "ROCKET (Tên lửa)",
                "textVi": "Tên lửa vũ trụ",
                "icon": "🚀",
                "isCorrect": false,
                "image": "/assets/vocab/rocket.webp"
              }
            ],
            "explanationEn": "M-A-R-K-E-T spells MARKET, like Ben Thanh Market and Cai Rang Floating Market.",
            "explanationVi": "M-A-R-K-E-T ghép thành MARKET (Khu chợ), như chợ Bến Thành và chợ nổi Cái Răng."
          },
          {
            "id": "p_g3_3",
            "level": 3,
            "questionEn": "Unscramble P-A-L-A-C-E: What magnificent royal residence sits inside Hue Citadel?",
            "questionVi": "Ghép các chữ cái P-A-L-A-C-E: Nơi ở nguy nga tráng lệ của các bậc đế vương trong Đại Nội?",
            "scrambleTarget": "PALACE",
            "options": [
              {
                "id": "opt1",
                "textEn": "PALACE (Cung điện)",
                "textVi": "Cung điện hoàng gia",
                "icon": "👑",
                "isCorrect": true,
                "image": "/assets/vocab/palace.webp"
              },
              {
                "id": "opt2",
                "textEn": "POLICE (Cảnh sát)",
                "textVi": "Lực lượng an ninh",
                "icon": "👮",
                "isCorrect": false,
                "image": "/assets/vocab/public_transit.webp"
              },
              {
                "id": "opt3",
                "textEn": "PLACE (Địa điểm)",
                "textVi": "Nơi chốn bình thường",
                "icon": "📍",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt4",
                "textEn": "PLANET (Hành tinh)",
                "textVi": "Hành tinh trong vũ trụ",
                "icon": "🪐",
                "isCorrect": false,
                "image": "/assets/vocab/aerospace.webp"
              }
            ],
            "explanationEn": "P-A-L-A-C-E spells PALACE, like Thai Hoa Palace in the Imperial City of Hue.",
            "explanationVi": "P-A-L-A-C-E ghép thành PALACE (Cung điện), như Điện Thái Hòa trong Đại Nội Huế."
          },
          {
            "id": "p_g3_4",
            "level": 3,
            "questionEn": "Unscramble N-A-T-U-R-E: What word encompasses mountains, bays, forests, and wildlife?",
            "questionVi": "Ghép các chữ cái N-A-T-U-R-E: Từ ngữ nào bao hàm núi non, vịnh biển, rừng cây và muông thú?",
            "scrambleTarget": "NATURE",
            "options": [
              {
                "id": "opt1",
                "textEn": "NATURE (Thiên nhiên)",
                "textVi": "Thiên nhiên tươi đẹp",
                "icon": "🌿",
                "isCorrect": true,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt2",
                "textEn": "FUTURE (Tương lai)",
                "textVi": "Tương lai mai sau",
                "icon": "🔮",
                "isCorrect": false,
                "image": "/assets/vocab/smart_city.webp"
              },
              {
                "id": "opt3",
                "textEn": "MATURE (Chín chắn)",
                "textVi": "Sự trưởng thành",
                "icon": "🧑",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt4",
                "textEn": "NOTICE (Thông báo)",
                "textVi": "Bảng thông báo",
                "icon": "📋",
                "isCorrect": false,
                "image": "/assets/vocab/woodblock.webp"
              }
            ],
            "explanationEn": "N-A-T-U-R-E spells NATURE, the precious environment we must cherish.",
            "explanationVi": "N-A-T-U-R-E ghép thành NATURE (Thiên nhiên), môi trường quý báu chúng ta cần yêu quý."
          }
        ]
      },
      "4": {
        "gradeNum": 4,
        "gradeBadge": "Grade 4 Expansion",
        "missionTitleEn": "Environmental & Heritage Words",
        "missionTitleVi": "Từ Vựng Môi Trường & Di Sản",
        "missionIntroEn": "Decode longer academic terms: Heritage, Lantern, Cavern, and Ecosystem!",
        "missionIntroVi": "Giải mã những từ học thuật nâng cao: Di sản, Đèn lồng, Hang động kỳ vĩ và Hệ sinh thái!",
        "targetObjective": "Spell and define multi-syllable terms related to conservation and ecology.",
        "starsReward": 40,
        "steps": [
          {
            "id": "p_g4_1",
            "level": 1,
            "questionEn": "Unscramble H-E-R-I-T-A-G-E: What valuable traditions and monuments do ancestors pass down?",
            "questionVi": "Ghép các chữ cái H-E-R-I-T-A-G-E: Những giá trị truyền thống quý báu ông cha để lại gọi là gì?",
            "scrambleTarget": "HERITAGE",
            "options": [
              {
                "id": "opt1",
                "textEn": "HERITAGE (Di sản quý báu)",
                "textVi": "Di sản văn hóa dân tộc",
                "icon": "🏛️",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "VOYAGE (Hải trình)",
                "textVi": "Chuyến hải trình trên biển",
                "icon": "🚢",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "COTTAGE (Nhà tranh)",
                "textVi": "Ngôi nhà tranh nhỏ",
                "icon": "🏡",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "STORAGE (Nhà kho)",
                "textVi": "Kho chứa đồ đạc",
                "icon": "📦",
                "isCorrect": false
              }
            ],
            "explanationEn": "H-E-R-I-T-A-G-E spells HERITAGE, celebrated across Vietnam's UNESCO World Heritage sites.",
            "explanationVi": "H-E-R-I-T-A-G-E ghép thành HERITAGE (Di sản), được vinh danh trong các di sản thế giới."
          },
          {
            "id": "p_g4_2",
            "level": 2,
            "questionEn": "Unscramble L-A-N-T-E-R-N: What glowing paper lamp illuminates the night in Hoi An?",
            "questionVi": "Ghép các chữ cái L-A-N-T-E-R-N: Đèn lồng lung linh thắp sáng phố cổ Hội An trong đêm hội?",
            "scrambleTarget": "LANTERN",
            "options": [
              {
                "id": "opt1",
                "textEn": "LANTERN (Đèn lồng lung linh)",
                "textVi": "Đèn lồng rực rỡ sắc màu",
                "icon": "🏮",
                "isCorrect": true,
                "image": "/assets/vocab/lantern.webp"
              },
              {
                "id": "opt2",
                "textEn": "PATTERN (Hoa văn)",
                "textVi": "Mẫu hoa văn vải",
                "icon": "🎨",
                "isCorrect": false,
                "image": "/assets/vocab/silk.webp"
              },
              {
                "id": "opt3",
                "textEn": "TAVERN (Quán trọ)",
                "textVi": "Quán trọ ven đường",
                "icon": "🍺",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt4",
                "textEn": "CAVERN (Hang lớn)",
                "textVi": "Hang động rộng lớn",
                "icon": "🪨",
                "isCorrect": false,
                "image": "/assets/vocab/cavern.webp"
              }
            ],
            "explanationEn": "L-A-N-T-E-R-N spells LANTERN, handcrafted with fine Vietnamese silk.",
            "explanationVi": "L-A-N-T-E-R-N ghép thành LANTERN (Đèn lồng), bọc bằng vải lụa tơ tằm tinh xảo."
          },
          {
            "id": "p_g4_3",
            "level": 3,
            "questionEn": "Unscramble C-A-V-E-R-N: What word means an immense subterranean hollow inside mountains?",
            "questionVi": "Ghép các chữ cái C-A-V-E-R-N: Thuật ngữ chỉ vòm hang động ngầm khổng lồ trong lòng núi đá?",
            "scrambleTarget": "CAVERN",
            "options": [
              {
                "id": "opt1",
                "textEn": "CAVERN (Hang động kỳ vĩ)",
                "textVi": "Vòm hang đá vĩ đại",
                "icon": "🪨",
                "isCorrect": true,
                "image": "/assets/vocab/cavern.webp"
              },
              {
                "id": "opt2",
                "textEn": "TAVERN (Quán xá)",
                "textVi": "Quán ăn nghỉ chân",
                "icon": "🏠",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt3",
                "textEn": "LANTERN (Đèn lồng)",
                "textVi": "Chiếc đèn lồng giấy",
                "icon": "🏮",
                "isCorrect": false,
                "image": "/assets/vocab/lantern.webp"
              },
              {
                "id": "opt4",
                "textEn": "CISTERN (Bể nước)",
                "textVi": "Bể chứa nước ngọt",
                "icon": "🚰",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              }
            ],
            "explanationEn": "C-A-V-E-R-N spells CAVERN, describing the geological vaults of Son Doong.",
            "explanationVi": "C-A-V-E-R-N ghép thành CAVERN (Vòm hang), miêu tả không gian vĩ đại của Sơn Đoòng."
          },
          {
            "id": "p_g4_4",
            "level": 4,
            "questionEn": "Unscramble E-C-O-S-Y-S-T-E-M: What biological community consists of living organisms and their environment?",
            "questionVi": "Ghép các chữ cái E-C-O-S-Y-S-T-E-M: Quần xã sinh học gồm muông thú, cây cối và môi trường sống?",
            "scrambleTarget": "ECOSYSTEM",
            "options": [
              {
                "id": "opt1",
                "textEn": "ECOSYSTEM (Hệ sinh thái)",
                "textVi": "Hệ sinh thái cân bằng",
                "icon": "🌱",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "COMPUTING (Hệ tính toán)",
                "textVi": "Hệ thống máy tính",
                "icon": "💻",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "ELEVATION (Độ cao địa hình)",
                "textVi": "Độ cao so với mặt biển",
                "icon": "📐",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "EMISSION (Khí phát thải)",
                "textVi": "Khí phát thải khói",
                "icon": "💨",
                "isCorrect": false
              }
            ],
            "explanationEn": "E-C-O-S-Y-S-T-E-M spells ECOSYSTEM, like the mangrove and coral ecosystems of Vietnam.",
            "explanationVi": "E-C-O-S-Y-S-T-E-M ghép thành ECOSYSTEM (Hệ sinh thái), như hệ sinh thái rừng ngập mặn."
          }
        ]
      },
      "5": {
        "gradeNum": 5,
        "gradeBadge": "Grade 5 Leadership",
        "missionTitleEn": "Academic Vocabulary of Nations",
        "missionTitleVi": "Từ Vựng Học Thuật Cấp Quốc Gia",
        "missionIntroEn": "Master university-level vocabulary: Conservation, Sovereignty, Biodiversity, and Renewable!",
        "missionIntroVi": "Làm chủ các từ ngữ học thuật tinh hoa: Bảo tồn, Chủ quyền, Đa dạng sinh học và Năng lượng tái tạo!",
        "targetObjective": "Spell and define advanced vocabulary essential for global citizenship and diplomatic communication.",
        "starsReward": 45,
        "steps": [
          {
            "id": "p_g5_1",
            "level": 1,
            "questionEn": "Unscramble C-O-N-S-E-R-V-A-T-I-O-N: What principle guides protecting natural resources for the future?",
            "questionVi": "Ghép các chữ cái C-O-N-S-E-R-V-A-T-I-O-N: Nguyên tắc bảo vệ tài nguyên thiên nhiên cho muôn đời sau là gì?",
            "scrambleTarget": "CONSERVATION",
            "options": [
              {
                "id": "opt1",
                "textEn": "CONSERVATION (Bảo tồn tài nguyên)",
                "textVi": "Bảo tồn di sản & thiên nhiên",
                "icon": "🌿",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "CONVERSATION (Cuộc trò chuyện)",
                "textVi": "Cuộc nói chuyện giao lưu",
                "icon": "💬",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "CONSTRUCTION (Công trình xây dựng)",
                "textVi": "Công trình thi công",
                "icon": "🏗️",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "CONSUMPTION (Sự tiêu thụ)",
                "textVi": "Sự tiêu thụ nhiên liệu",
                "icon": "🛒",
                "isCorrect": false
              }
            ],
            "explanationEn": "CONSERVATION ensures our mountains, oceans, and monuments endure forever.",
            "explanationVi": "CONSERVATION nghĩa là công tác bảo tồn gìn giữ di sản thiên nhiên cho thế hệ tương lai."
          },
          {
            "id": "p_g5_2",
            "level": 2,
            "questionEn": "Unscramble S-O-V-E-R-E-I-G-N-T-Y: What sacred international status defines national territorial independence?",
            "questionVi": "Ghép các chữ cái S-O-V-E-R-E-I-G-N-T-Y: Vị thế thiêng liêng khẳng định quyền độc lập và toàn vẹn lãnh thổ quốc gia?",
            "scrambleTarget": "SOVEREIGNTY",
            "options": [
              {
                "id": "opt1",
                "textEn": "SOVEREIGNTY (Chủ quyền quốc gia)",
                "textVi": "Chủ quyền toàn vẹn lãnh thổ",
                "icon": "🇻🇳",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "SOLIDARITY (Tinh thần đoàn kết)",
                "textVi": "Tình đoàn kết hữu nghị",
                "icon": "🤝",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "SOCIETY (Xã hội văn minh)",
                "textVi": "Cộng đồng xã hội",
                "icon": "🏙️",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "SECURITY (An ninh trật tự)",
                "textVi": "Công tác bảo đảm an ninh",
                "icon": "🛡️",
                "isCorrect": false
              }
            ],
            "explanationEn": "Vietnam maintains indisputable SOVEREIGNTY over its continental land, airspace, and islands.",
            "explanationVi": "Việt Nam thực thi CHỦ QUYỀN (SOVEREIGNTY) không thể chối cãi đối với đất liền, vùng trời và biển đảo."
          },
          {
            "id": "p_g5_3",
            "level": 3,
            "questionEn": "Unscramble B-I-O-D-I-V-E-R-S-I-T-Y: What term refers to the variety of life in all its forms across our planet?",
            "questionVi": "Ghép các chữ cái B-I-O-D-I-V-E-R-S-I-T-Y: Sự phong phú của muôn loài sinh vật trong các tầng sinh thái?",
            "scrambleTarget": "BIODIVERSITY",
            "options": [
              {
                "id": "opt1",
                "textEn": "BIODIVERSITY (Đa dạng sinh học)",
                "textVi": "Đa dạng sinh học phong phú",
                "icon": "🌺",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "BIOGRAPHY (Tiểu sử nhân vật)",
                "textVi": "Sách viết về cuộc đời",
                "icon": "📖",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "BIOLOGY (Môn sinh học)",
                "textVi": "Môn học sinh học",
                "icon": "🔬",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "BIOSPHERE (Sinh quyển trái đất)",
                "textVi": "Lớp vỏ sinh quyển",
                "icon": "🌍",
                "isCorrect": false
              }
            ],
            "explanationEn": "Vietnam ranks among the top countries globally in endemic BIODIVERSITY richness.",
            "explanationVi": "Việt Nam tự hào nằm trong nhóm quốc gia có độ ĐA DẠNG SINH HỌC cao hàng đầu thế giới."
          },
          {
            "id": "p_g5_4",
            "level": 4,
            "questionEn": "Unscramble R-E-N-E-W-A-B-L-E: What term describes clean energy that naturally replenishes without carbon?",
            "questionVi": "Ghép các chữ cái R-E-N-E-W-A-B-L-E: Nguồn năng lượng sạch tự nhiên tái tạo liên tục không gây ô nhiễm?",
            "scrambleTarget": "RENEWABLE",
            "options": [
              {
                "id": "opt1",
                "textEn": "RENEWABLE (Năng lượng tái tạo)",
                "textVi": "Năng lượng tái tạo sạch",
                "icon": "🌱",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "REMOVABLE (Có thể tháo rời)",
                "textVi": "Dễ dàng tháo dỡ",
                "icon": "🔧",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "REUSABLE (Có thể tái dùng)",
                "textVi": "Đồ dùng tái sử dụng",
                "icon": "♻️",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "RELIABLE (Đáng tin cậy)",
                "textVi": "Chất lượng vững chắc",
                "icon": "✅",
                "isCorrect": false
              }
            ],
            "explanationEn": "RENEWABLE wind and solar resources lead Vietnam's journey toward the Net-Zero 2050 target.",
            "explanationVi": "Năng lượng TÁI TẠO (RENEWABLE) là trụ cột giúp Việt Nam hiện thực hóa mục tiêu Net-Zero 2050."
          }
        ]
      }
    }
  },
  {
    "id": "champion",
    "orderNumber": 5,
    "nameEn": "Champion Arena",
    "nameVi": "Đấu Trường Quán Quân",
    "subtitleEn": "Circular 27 Challenge",
    "subtitleVi": "Thử thách 4 Cấp độ Đánh giá theo Thông tư 27/2020/TT-BGDĐT",
    "taglineEn": "Rise through 4 rigorous cognitive levels: Recognize, Connect, Apply, and Extend!",
    "taglineVi": "Chinh phục 4 cấp độ tư duy Thông tư 27: Nhận biết, Kết nối, Vận dụng và Mở rộng sáng tạo!",
    "crystalName": "Amethyst Crystal",
    "crystalColor": "text-purple-400",
    "crystalHex": "#a855f7",
    "glowRgba": "rgba(168, 85, 247, 0.45)",
    "badgeText": "CIRCULAR 27 ELITE",
    "gradientBg": "from-purple-500/20 via-fuchsia-600/30 to-indigo-900/60",
    "cardBorder": "border-purple-400/60 hover:border-purple-300",
    "floatDelay": "animate-island-5",
    "landmarkFeature": "Grand Coliseum of Wisdom & Victory Podium",
    "imageSrc": "/assets/islands/island_5_dau_truong.webp",
    "gradeData": {
      "1": {
        "gradeNum": 1,
        "gradeBadge": "Grade 1 Starter",
        "missionTitleEn": "Circular 27 Arena - Grade 1",
        "missionTitleVi": "Đấu Trường Quán Quân Lớp 1 (Thông tư 27)",
        "missionIntroEn": "Test basic recognition of our national capital, red flag, classroom kindness, and love for school!",
        "missionIntroVi": "Kiểm tra kiến thức cốt lõi: Thủ đô Hà Nội, lá cờ đỏ sao vàng và lòng nhân ái bạn bè!",
        "targetObjective": "Demonstrate Circular 27 Levels 1 to 4 foundational civic awareness and English greetings.",
        "starsReward": 25,
        "steps": [
          {
            "id": "c_g1_1",
            "level": 1,
            "questionEn": "[Level 1: Recognize] What is the beautiful capital city of Vietnam?",
            "questionVi": "[Cấp độ 1: Nhận biết] Thủ đô ngàn năm văn hiến của đất nước Việt Nam ta là thành phố nào?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Hanoi Capital",
                "textVi": "Thủ đô Hà Nội",
                "icon": "⭐",
                "isCorrect": true,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt2",
                "textEn": "Da Nang City",
                "textVi": "Thành phố Đà Nẵng",
                "icon": "🌉",
                "isCorrect": false,
                "image": "/destinations/danang.webp"
              },
              {
                "id": "opt3",
                "textEn": "Hai Phong Port",
                "textVi": "Thành phố Hải Phòng",
                "icon": "⚓",
                "isCorrect": false,
                "image": "/destinations/halong_bay.webp"
              },
              {
                "id": "opt4",
                "textEn": "Can Tho City",
                "textVi": "Thành phố Cần Thơ",
                "icon": "🌾",
                "isCorrect": false,
                "image": "/destinations/mekong_delta.jpg"
              }
            ],
            "explanationEn": "Hanoi is the historic heart and capital of Vietnam.",
            "explanationVi": "Hà Nội là thủ đô văn hiến ngàn năm của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam."
          },
          {
            "id": "c_g1_2",
            "level": 2,
            "questionEn": "[Level 2: Connect] What symbols appear on the national flag of Vietnam?",
            "questionVi": "[Cấp độ 2: Kết nối] Quốc kỳ Việt Nam thiêng liêng có hình ảnh và màu sắc nào?",
            "options": [
              {
                "id": "opt1",
                "textEn": "A golden five-pointed star on a red field",
                "textVi": "Ngôi sao vàng năm cánh trên nền cờ đỏ thắm",
                "icon": "🇻🇳",
                "isCorrect": true,
                "image": "/destinations/vietnam_national_flag.webp"
              },
              {
                "id": "opt2",
                "textEn": "Blue stripes and white circles",
                "textVi": "Sọc xanh và vòng tròn trắng",
                "icon": "🔵",
                "isCorrect": false,
                "image": "/assets/vocab/blue.webp"
              },
              {
                "id": "opt3",
                "textEn": "A green tree on yellow field",
                "textVi": "Cây xanh trên nền vàng",
                "icon": "🌲",
                "isCorrect": false,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt4",
                "textEn": "A white moon on dark background",
                "textVi": "Mặt trăng trắng trên nền tối",
                "icon": "🌙",
                "isCorrect": false,
                "image": "/assets/vocab/moon.webp"
              }
            ],
            "explanationEn": "The national flag of Vietnam has a brilliant five-pointed golden star on a red background.",
            "explanationVi": "Quốc kỳ Việt Nam là cờ đỏ sao vàng năm cánh tỏa sáng niềm tự hào dân tộc."
          },
          {
            "id": "c_g1_3",
            "level": 3,
            "questionEn": "[Level 3: Apply] When entering the classroom in the morning, what is the polite English greeting for your teacher?",
            "questionVi": "[Cấp độ 3: Vận dụng] Khi bước vào lớp vào buổi sáng, câu chào tiếng Anh lễ phép nào em gửi tới cô giáo?",
            "options": [
              {
                "id": "opt1",
                "textEn": "'Good morning, teacher! How are you?'",
                "textVi": "'Good morning, teacher! Em chào cô ạ!'",
                "icon": "🌸",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'Hey you, give me the toy now!'",
                "textVi": "'Này đằng kia, đưa đồ chơi đây!'",
                "icon": "😠",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'I want to go home right now!'",
                "textVi": "'Em muốn về nhà ngay bây giờ!'",
                "icon": "🏃",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'Why are you looking at me?'",
                "textVi": "'Tại sao lại nhìn tôi?'",
                "icon": "👀",
                "isCorrect": false
              }
            ],
            "explanationEn": "Polite greetings create a respectful and joyful classroom family.",
            "explanationVi": "'Good morning, teacher!' thể hiện lễ phép và nét đẹp ngoan ngoãn của học sinh."
          },
          {
            "id": "c_g1_4",
            "level": 4,
            "questionEn": "[Level 4: Extend] What everyday action demonstrates your love for your school and homeland?",
            "questionVi": "[Cấp độ 4: Vận dụng sáng tạo] Hành động đẹp nào mỗi ngày thể hiện tình yêu mái trường và quê hương?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Keeping classrooms tidy and studying English happily",
                "textVi": "Giữ lớp học sạch đẹp và chăm chỉ học tập tiếng Anh",
                "icon": "🌟",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Throwing snack wrappers on flowerbeds",
                "textVi": "Vứt vỏ kẹo bừa bãi vào bồn hoa",
                "icon": "🗑️",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Refusing to share colored pencils with friends",
                "textVi": "Không hòa đồng chia sẻ với bạn bè",
                "icon": "🚫",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Drawing scribbles all over clean wooden desks",
                "textVi": "Vẽ bậy lên mặt bàn học gỗ",
                "icon": "🖍️",
                "isCorrect": false
              }
            ],
            "explanationEn": "Small acts of daily diligence and cleanliness build a strong and civilized nation.",
            "explanationVi": "Gìn giữ vệ sinh và nỗ lực học tập mỗi ngày chính là tình yêu quê hương thiết thực nhất."
          }
        ]
      },
      "2": {
        "gradeNum": 2,
        "gradeBadge": "Grade 2 Explorer",
        "missionTitleEn": "Circular 27 Arena - Grade 2",
        "missionTitleVi": "Đấu Trường Quán Quân Lớp 2 (Thông tư 27)",
        "missionIntroEn": "Connect knowledge of river deltas, national costume, polite inquiries, and hospitality!",
        "missionIntroVi": "Kết nối kiến thức đồng bằng sông nước, trang phục truyền thống và lòng hiếu khách!",
        "targetObjective": "Master Level 1-4 Circular 27 regional knowledge, cultural dress, and hospitable English.",
        "starsReward": 30,
        "steps": [
          {
            "id": "c_g2_1",
            "level": 1,
            "questionEn": "[Level 1: Recognize] What is the longest river delta flowing across southern Vietnam?",
            "questionVi": "[Cấp độ 1: Nhận biết] Vùng đồng bằng sông nước trù phú lớn nhất miền Nam nước ta là vùng nào?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Mekong River Delta",
                "textVi": "Đồng bằng sông Cửu Long",
                "icon": "🛶",
                "isCorrect": true,
                "image": "/destinations/mekong_delta.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Red River Delta",
                "textVi": "Đồng bằng sông Hồng",
                "icon": "🌾",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Perfume River Valley",
                "textVi": "Lưu vực sông Hương",
                "icon": "🌸",
                "isCorrect": false,
                "image": "/destinations/perfume_river_hue.webp"
              },
              {
                "id": "opt4",
                "textEn": "Thu Bon River Basin",
                "textVi": "Lưu vực sông Thu Bồn",
                "icon": "🏞️",
                "isCorrect": false,
                "image": "/destinations/hoian_ancient_town.jpg"
              }
            ],
            "explanationEn": "The Mekong River Delta is known as the fertile rice bowl of southern Vietnam.",
            "explanationVi": "Đồng bằng sông Cửu Long với 9 nhánh sông đổ ra biển là vựa lúa trù phú của đất nước."
          },
          {
            "id": "c_g2_2",
            "level": 2,
            "questionEn": "[Level 2: Connect] What graceful traditional dress symbolizes Vietnamese elegance worldwide?",
            "questionVi": "[Cấp độ 2: Kết nối] Trang phục truyền thống thướt tha nào là biểu tượng văn hóa thanh lịch của Việt Nam?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Elegant Ao Dai",
                "textVi": "Tà áo dài truyền thống",
                "icon": "👘",
                "isCorrect": true,
                "image": "/destinations/vietnamese_ao_dai.webp"
              },
              {
                "id": "opt2",
                "textEn": "Western Evening Tuxedo",
                "textVi": "Bộ âu phục dạ hội",
                "icon": "🤵",
                "isCorrect": false,
                "image": "/assets/vocab/silk.webp"
              },
              {
                "id": "opt3",
                "textEn": "Japanese Kimono",
                "textVi": "Trang phục Kimono",
                "icon": "🎎",
                "isCorrect": false,
                "image": "/assets/vocab/craft.webp"
              },
              {
                "id": "opt4",
                "textEn": "Korean Hanbok",
                "textVi": "Trang phục Hanbok",
                "icon": "👗",
                "isCorrect": false,
                "image": "/assets/vocab/folk_art.webp"
              }
            ],
            "explanationEn": "The Ao Dai is celebrated globally for its flowing elegance and rich cultural heritage.",
            "explanationVi": "Áo dài là quốc phục thanh tao, thể hiện nét đẹp tâm hồn và văn hóa Việt Nam."
          },
          {
            "id": "c_g2_3",
            "level": 3,
            "questionEn": "[Level 3: Apply] How do you politely ask an English-speaking guide about a historical location?",
            "questionVi": "[Cấp độ 3: Vận dụng] Em dùng câu hỏi tiếng Anh nào để hỏi lịch sự hướng dẫn viên về vị trí một danh thắng?",
            "options": [
              {
                "id": "opt1",
                "textEn": "'Excuse me, where is Hoi An Ancient Town located?'",
                "textVi": "'Xin lỗi, phố cổ Hội An nằm ở vị trí nào ạ?'",
                "icon": "🗺️",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'What time does the pencil go to sleep?'",
                "textVi": "'Mấy giờ thì cây bút chì đi ngủ?'",
                "icon": "✏️",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'How heavy is your sandwich?'",
                "textVi": "'Bánh mì của bạn nặng bao nhiêu?'",
                "icon": "🥪",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'Why is the cloud purple?'",
                "textVi": "'Tại sao đám mây màu tím?'",
                "icon": "☁️",
                "isCorrect": false
              }
            ],
            "explanationEn": "'Excuse me, where is...' is the standard polite inquiry pattern for travel navigation.",
            "explanationVi": "'Excuse me, where is...' là mẫu câu chuẩn để hỏi thông tin địa điểm một cách nhã nhặn."
          },
          {
            "id": "c_g2_4",
            "level": 4,
            "questionEn": "[Level 4: Extend] When encountering international travelers in your town, how should young ambassadors act?",
            "questionVi": "[Cấp độ 4: Vận dụng sáng tạo] Khi gặp khách du lịch quốc tế tại quê hương, các đại sứ nhí nên hành xử thế nào?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Smile warmly and say: 'Welcome to Vietnam! May I help you?'",
                "textVi": "Cười thân thiện và nói: 'Welcome to Vietnam! Em có thể giúp gì ạ?'",
                "icon": "🌟",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Run away and hide behind trees in fear",
                "textVi": "Bỏ chạy nấp sau gốc cây vì sợ",
                "icon": "🙈",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Shout loudly to frighten them",
                "textVi": "Hét lớn dọa nạt du khách",
                "icon": "📢",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Ignore them completely with a frown",
                "textVi": "Phớt lờ và cau mày né tránh",
                "icon": "😒",
                "isCorrect": false
              }
            ],
            "explanationEn": "Hospitality and warm English greetings make international visitors fall in love with Vietnam.",
            "explanationVi": "Nụ cười rạng rỡ và sự hiếu khách giúp bạn bè thế giới thêm yêu mến đất nước Việt Nam."
          }
        ]
      },
      "3": {
        "gradeNum": 3,
        "gradeBadge": "Grade 3 Foundation",
        "missionTitleEn": "Circular 27 Arena - Grade 3",
        "missionTitleVi": "Đấu Trường Quán Quân Lớp 3 (Thông tư 27)",
        "missionIntroEn": "Challenge Level 1 to 4 questions on bridges, climates, hometown descriptions, and recycling!",
        "missionIntroVi": "Thử thách tư duy cấp độ 1 đến 4 về cầu rồng, khí hậu, miêu tả quê hương và bảo vệ môi trường!",
        "targetObjective": "Master Level 1-4 Circular 27 architectural feats, environmental stewardship, and civic pride.",
        "starsReward": 35,
        "steps": [
          {
            "id": "c_g3_1",
            "level": 1,
            "questionEn": "[Level 1: Recognize] Which famous modern bridge in Da Nang breathes fire and water on weekend evenings?",
            "questionVi": "[Cấp độ 1: Nhận biết] Cây cầu nổi tiếng nào tại Đà Nẵng phun lửa và nước vào tối cuối tuần?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Dragon Bridge",
                "textVi": "Cầu Rồng Đà Nẵng",
                "icon": "🐉",
                "isCorrect": true,
                "image": "/destinations/danang_dragon_bridge.webp"
              },
              {
                "id": "opt2",
                "textEn": "Long Bien Bridge",
                "textVi": "Cầu Long Biên Hà Nội",
                "icon": "🚂",
                "isCorrect": false,
                "image": "/destinations/hanoi.webp"
              },
              {
                "id": "opt3",
                "textEn": "Trang Tien Bridge",
                "textVi": "Cầu Tràng Tiền Huế",
                "icon": "🌉",
                "isCorrect": false,
                "image": "/destinations/perfume_river_hue.webp"
              },
              {
                "id": "opt4",
                "textEn": "Ba Son Bridge",
                "textVi": "Cầu Ba Son TP.HCM",
                "icon": "🏙️",
                "isCorrect": false,
                "image": "/destinations/hcmc_skyline.jpg"
              }
            ],
            "explanationEn": "Dragon Bridge in Da Nang is recognized worldwide for its unique dragon sculpture breathing fire.",
            "explanationVi": "Cầu Rồng Đà Nẵng là biểu tượng kiến trúc độc đáo vươn mình ra biển lớn."
          },
          {
            "id": "c_g3_2",
            "level": 2,
            "questionEn": "[Level 2: Connect] What climate condition makes Da Lat ideal for cultivating year-round temperate flowers?",
            "questionVi": "[Cấp độ 2: Kết nối] Điều kiện khí hậu nào giúp Đà Lạt trở thành thiên đường của ngàn hoa khoe sắc?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Cool highland temperate climate with fresh mountain air",
                "textVi": "Khí hậu ôn đới cao nguyên mát mẻ trong lành quanh năm",
                "icon": "🌸",
                "isCorrect": true,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt2",
                "textEn": "Scorching dry desert with constant sandstorms",
                "textVi": "Sa mạc khô cằn với bão cát liên tục",
                "icon": "🏜️",
                "isCorrect": false,
                "image": "/assets/vocab/sunlight.webp"
              },
              {
                "id": "opt3",
                "textEn": "Freezing arctic blizzards with thick glaciers",
                "textVi": "Băng giá phủ dày tuyết trắng",
                "icon": "❄️",
                "isCorrect": false,
                "image": "/assets/vocab/blue.webp"
              },
              {
                "id": "opt4",
                "textEn": "Dark permanent rain without sunlight",
                "textVi": "Rừng rậm tối tăm không có ánh nắng",
                "icon": "🌑",
                "isCorrect": false,
                "image": "/assets/vocab/stream.webp"
              }
            ],
            "explanationEn": "Da Lat's altitude of 1,500m creates perpetual spring conditions perfect for horticulture.",
            "explanationVi": "Độ cao 1.500m mang lại cho Đà Lạt khí hậu mát mẻ như mùa xuân vĩnh cửu."
          },
          {
            "id": "c_g3_3",
            "level": 3,
            "questionEn": "[Level 3: Apply] Which sentence best conveys genuine pride in your Vietnamese homeland to an exchange pen pal?",
            "questionVi": "[Cấp độ 3: Vận dụng] Câu văn nào thể hiện niềm tự hào sâu sắc nhất về quê hương khi viết thư cho bạn bè quốc tế?",
            "options": [
              {
                "id": "opt1",
                "textEn": "'I am proud of Vietnam's stunning landscapes, rich culture, and warm-hearted people.'",
                "textVi": "'Em vô cùng tự hào về cảnh đẹp tráng lệ, văn hóa đậm đà và con người nhân hậu Việt Nam.'",
                "icon": "🌟",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'My hometown has no interesting places or good food.'",
                "textVi": "'Quê hương tôi chẳng có gì thú vị cả.'",
                "icon": "😒",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'I only care about video games and nothing else.'",
                "textVi": "'Tôi chỉ quan tâm đến trò chơi điện tử thôi.'",
                "icon": "🎮",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'There are no rivers or history in our country.'",
                "textVi": "'Nước tôi không có sông ngòi hay lịch sử.'",
                "icon": "🚫",
                "isCorrect": false
              }
            ],
            "explanationEn": "Sharing our rich culture and natural beauty fosters global friendship and mutual respect.",
            "explanationVi": "Chia sẻ về vẻ đẹp quê hương với sự tự hào sẽ truyền cảm hứng đến bạn bè năm châu."
          },
          {
            "id": "c_g3_4",
            "level": 4,
            "questionEn": "[Level 4: Extend] Which practical environmental solution should primary pupils champion to safeguard local rivers?",
            "questionVi": "[Cấp độ 4: Vận dụng sáng tạo] Giải pháp bảo vệ môi trường thiết thực nào học sinh tiểu học nên tích cực thực hiện?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Planting trees, reducing single-use plastics, and sorting recyclable waste",
                "textVi": "Trồng cây xanh, giảm rác thải nhựa và phân loại rác tái chế",
                "icon": "🌱",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Throwing plastic bags into drainage canals",
                "textVi": "Vứt túi nylon xuống kênh rạch",
                "icon": "🗑️",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Leaving water faucets running continuously overnight",
                "textVi": "Xả lãng phí nước sạch cả đêm",
                "icon": "🚰",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Picking endangered wild orchids in national parks",
                "textVi": "Hái hoa quý hiếm trong vườn quốc gia",
                "icon": "🌺",
                "isCorrect": false
              }
            ],
            "explanationEn": "Sorting waste and reducing plastics directly prevents river pollution and protects ocean wildlife.",
            "explanationVi": "Phân loại rác và giảm đồ nhựa dùng một lần là hành động thiết thực giữ sạch sông ngòi."
          }
        ]
      },
      "4": {
        "gradeNum": 4,
        "gradeBadge": "Grade 4 Expansion",
        "missionTitleEn": "Circular 27 Arena - Grade 4",
        "missionTitleVi": "Đấu Trường Quán Quân Lớp 4 (Thông tư 27)",
        "missionIntroEn": "Demonstrate analytical reasoning on Son Doong Cave, mangrove biology, eco-tourism, and conservation!",
        "missionIntroVi": "Khẳng định tư duy phân tích về hang Sơn Đoòng, sinh thái rừng mặn, du lịch xanh và bảo tồn!",
        "targetObjective": "Master Level 1-4 Circular 27 scientific reasoning, ecological stewardship, and sustainable heritage ethics.",
        "starsReward": 40,
        "steps": [
          {
            "id": "c_g4_1",
            "level": 1,
            "questionEn": "[Level 1: Recognize] In which Vietnamese province was Son Doong, the largest cave on Earth, discovered?",
            "questionVi": "[Cấp độ 1: Nhận biết] Hang Sơn Đoòng - kỳ quan hang động lớn nhất hành tinh nằm tại tỉnh nào của Việt Nam?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Quang Binh Province",
                "textVi": "Tỉnh Quảng Bình",
                "icon": "⛰️",
                "isCorrect": true,
                "image": "/destinations/son_doong_cave.webp"
              },
              {
                "id": "opt2",
                "textEn": "Lam Dong Province",
                "textVi": "Tỉnh Lâm Đồng",
                "icon": "🌲",
                "isCorrect": false,
                "image": "/destinations/dalat_pine_hills.jpg"
              },
              {
                "id": "opt3",
                "textEn": "Bac Kan Province",
                "textVi": "Tỉnh Bắc Kạn",
                "icon": "🛶",
                "isCorrect": false,
                "image": "/destinations/ba_be_lake.webp"
              },
              {
                "id": "opt4",
                "textEn": "Kien Giang Province",
                "textVi": "Tỉnh Kiên Giang",
                "icon": "🏝️",
                "isCorrect": false,
                "image": "/destinations/phu_quoc_island.webp"
              }
            ],
            "explanationEn": "Son Doong is located inside Phong Nha - Ke Bang National Park in Quang Binh Province.",
            "explanationVi": "Hang Sơn Đoòng tọa lạc tại Vườn Quốc gia Phong Nha - Kẻ Bàng, tỉnh Quảng Bình."
          },
          {
            "id": "c_g4_2",
            "level": 2,
            "questionEn": "[Level 2: Connect] What is the vital ecological connection between coastal mangrove forests and marine fisheries?",
            "questionVi": "[Cấp độ 2: Kết nối] Mối liên hệ sinh thái mật thiết giữa rừng ngập mặn ven biển và nguồn lợi thủy hải sản là gì?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Mangrove roots buffer ocean storms and serve as safe nurseries for juvenile marine species",
                "textVi": "Rễ ngập mặn chắn sóng bão và là vườn ươm an toàn cho tôm cá con sinh trưởng",
                "icon": "🐟",
                "isCorrect": true,
                "image": "/assets/vocab/forest.webp"
              },
              {
                "id": "opt2",
                "textEn": "Mangroves emit toxic chemicals that poison all ocean wildlife",
                "textVi": "Rừng ngập mặn thải độc tố gây hại cho tôm cá",
                "icon": "☠️",
                "isCorrect": false,
                "image": "/assets/vocab/clean.webp"
              },
              {
                "id": "opt3",
                "textEn": "Mangrove trees consume all seawater until rivers dry completely",
                "textVi": "Rút cạn toàn bộ nước biển ven bờ",
                "icon": "🏜️",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "They have no biological connection with marine life",
                "textVi": "Hoàn toàn không có liên hệ sinh thái nào",
                "icon": "❓",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              }
            ],
            "explanationEn": "Mangroves act as nurseries where young fish and crustaceans shelter safely before venturing into the open sea.",
            "explanationVi": "Rừng ngập mặn chính là cái nôi nuôi dưỡng và duy trì sự sống cho nguồn lợi thủy sản biển khơi."
          },
          {
            "id": "c_g4_3",
            "level": 3,
            "questionEn": "[Level 3: Apply] You are drafting an English code of conduct for visitors exploring national parks. What is the most critical rule?",
            "questionVi": "[Cấp độ 3: Vận dụng] Em soạn thảo quy tắc ứng xử bằng tiếng Anh cho du khách thăm vườn quốc gia. Điều nào quan trọng nhất?",
            "options": [
              {
                "id": "opt1",
                "textEn": "'Take only photos, leave only footprints, and strictly protect all wildlife and flora.'",
                "textVi": "'Chỉ chụp ảnh, chỉ để lại dấu chân và bảo vệ nghiêm ngặt mọi động thực vật.'",
                "icon": "🌿",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'Carve your full name and date on ancient cave stalactites.'",
                "textVi": "'Khắc tên và ngày tháng lên nhũ đá hang động.'",
                "icon": "🔨",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'Play thunderous dance music near endangered animal nests.'",
                "textVi": "'Mở nhạc vũ trường lớn cạnh tổ chim quý.'",
                "icon": "📢",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'Throw plastic containers into pristine freshwater streams.'",
                "textVi": "'Ném đồ nhựa xuống dòng suối trong vắt.'",
                "icon": "🗑️",
                "isCorrect": false
              }
            ],
            "explanationEn": "'Take only pictures, leave only footprints' is the world-renowned motto for eco-conscious conservation.",
            "explanationVi": "'Take only pictures, leave only footprints' là phương châm vàng của du lịch sinh thái toàn cầu."
          },
          {
            "id": "c_g4_4",
            "level": 4,
            "questionEn": "[Level 4: Extend] Evaluate the best long-term strategy for preserving ancient wooden architecture in historic temples:",
            "questionVi": "[Cấp độ 4: Vận dụng sáng tạo] Đánh giá phương án tối ưu lâu dài để bảo tồn kiến trúc gỗ cổ kính tại các di tích lịch sử:",
            "options": [
              {
                "id": "opt1",
                "textEn": "Restoring authentic structures with traditional materials, master craftsmanship, and digital archiving",
                "textVi": "Trùng tu bằng vật liệu truyền thống nguyên bản, nghệ nhân bậc thầy và số hóa lưu trữ",
                "icon": "🏛️",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "Demolishing wooden pagodas completely to build glass high-rise towers",
                "textVi": "Phá bỏ chùa gỗ để xây tháp kính hiện đại",
                "icon": "🏢",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "Covering carved wooden dragons with synthetic bright spray paint",
                "textVi": "Xịt sơn công nghiệp màu sặc sỡ lên điêu khắc gỗ",
                "icon": "🎨",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "Abandoning ancient temples without any maintenance",
                "textVi": "Bỏ hoang phế mặc cho mưa nắng tàn phá",
                "icon": "🏚️",
                "isCorrect": false
              }
            ],
            "explanationEn": "Scientific conservation honors original craftsmanship and materials to keep heritage authentic across centuries.",
            "explanationVi": "Trùng tu khoa học tôn trọng tính nguyên bản giúp các di tích gỗ ngàn năm vững bền với thời gian."
          }
        ]
      },
      "5": {
        "gradeNum": 5,
        "gradeBadge": "Grade 5 Leadership",
        "missionTitleEn": "Supreme Grand Champion Arena",
        "missionTitleVi": "Đại Đấu Trường Quán Quân Lớp 5 (Thông tư 27)",
        "missionIntroEn": "Synthesize national sovereignty, UNESCO conservation, and renewable energy transitions!",
        "missionIntroVi": "Tổng hợp kiến thức chủ quyền quốc gia, bảo tồn UNESCO và chuyển đổi năng lượng xanh!",
        "targetObjective": "Master Level 1-4 Circular 27 critical thinking, analytical reasoning, and global citizenship.",
        "starsReward": 50,
        "steps": [
          {
            "id": "c_g5_1",
            "level": 1,
            "questionEn": "[Level 1: Recognize] Under international law and historic records, which country exercises indisputable territorial sovereignty over the Spratly and Paracel Islands?",
            "questionVi": "[Cấp độ 1: Nhận biết] Theo luật pháp quốc tế và các chứng cứ lịch sử xác thực, quốc gia nào thực thi chủ quyền không thể chối cãi đối với hai quần đảo Hoàng Sa và Trường Sa?",
            "options": [
              {
                "id": "opt1",
                "textEn": "The Socialist Republic of Vietnam",
                "textVi": "Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
                "icon": "🇻🇳",
                "isCorrect": true,
                "image": "/destinations/truong_sa_sovereignty.webp"
              },
              {
                "id": "opt2",
                "textEn": "The Arctic Polar Council",
                "textVi": "Hội đồng vùng Cực Bắc",
                "icon": "🧊",
                "isCorrect": false,
                "image": "/assets/vocab/blue.webp"
              },
              {
                "id": "opt3",
                "textEn": "Pacific Deep Trench Authority",
                "textVi": "Cơ quan Rãnh sâu Thái Bình Dương",
                "icon": "🌊",
                "isCorrect": false,
                "image": "/assets/vocab/ocean.webp"
              },
              {
                "id": "opt4",
                "textEn": "International Antarctic Treaty Members",
                "textVi": "Các nước Hiệp ước Nam Cực",
                "icon": "🐧",
                "isCorrect": false,
                "image": "/assets/vocab/renewable.webp"
              }
            ],
            "explanationEn": "Vietnam possesses full historical evidence and legal grounds proving sovereignty over Hoang Sa and Truong Sa.",
            "explanationVi": "Việt Nam có đầy đủ bằng chứng lịch sử và cơ sở pháp lý khẳng định chủ quyền với Hoàng Sa và Trường Sa."
          },
          {
            "id": "c_g5_2",
            "level": 2,
            "questionEn": "[Level 2: Connect] What is the direct relationship between protecting UNESCO World Heritage sites and sustainable economic development?",
            "questionVi": "[Cấp độ 2: Kết nối] Mối quan hệ tương hỗ trực tiếp giữa bảo tồn di sản thế giới UNESCO và phát triển kinh tế bền vững là gì?",
            "options": [
              {
                "id": "opt1",
                "textEn": "Protecting authentic heritage preserves cultural roots while supporting eco-friendly tourism for future generations",
                "textVi": "Bảo tồn nguyên gốc di sản giúp giữ gìn cội nguồn văn hóa và phát triển du lịch xanh cho mai sau",
                "icon": "🏛️",
                "isCorrect": true,
                "image": "/destinations/trang_an_landscape.webp"
              },
              {
                "id": "opt2",
                "textEn": "Selling ancient monuments for quick short-term cash",
                "textVi": "Bán cổ vật lịch sử để lấy tiền tiêu dùng ngắn hạn",
                "icon": "💵",
                "isCorrect": false,
                "image": "/assets/vocab/lucky_money.webp"
              },
              {
                "id": "opt3",
                "textEn": "Barricading all heritage sites so no citizen can ever see them",
                "textVi": "Khóa kín di tích không cho ai tiếp cận học hỏi",
                "icon": "🔒",
                "isCorrect": false,
                "image": "/assets/vocab/protect.webp"
              },
              {
                "id": "opt4",
                "textEn": "Heritage sites have zero connection with economic vitality",
                "textVi": "Di sản hoàn toàn không có mối liên hệ nào với đời sống",
                "icon": "❌",
                "isCorrect": false,
                "image": "/assets/vocab/balance.webp"
              }
            ],
            "explanationEn": "Sustainable conservation protects historical treasures while creating green jobs and cultural pride.",
            "explanationVi": "Bảo tồn bền vững gìn giữ kho báu lịch sử, đồng thời tạo việc làm xanh và củng cố niềm tự hào dân tộc."
          },
          {
            "id": "c_g5_3",
            "level": 3,
            "questionEn": "[Level 3: Apply] You are writing a letter to UNESCO ambassadors about Vietnamese youth in the 21st century. Which statement best captures our spirit?",
            "questionVi": "[Cấp độ 3: Vận dụng] Em viết thư gửi các đại sứ UNESCO về thế hệ trẻ Việt Nam thế kỷ 21. Câu văn nào thể hiện đúng nhất tinh thần đó?",
            "options": [
              {
                "id": "opt1",
                "textEn": "'Vietnamese students cherish national heritage while passionately mastering science, technology, and global languages to contribute to humanity.'",
                "textVi": "'Học sinh Việt Nam trân quý di sản dân tộc song hành với niềm say mê làm chủ khoa học, công nghệ và ngoại ngữ để cống hiến cho nhân loại.'",
                "icon": "🌟",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "'We isolate ourselves from modern technological progress.'",
                "textVi": "'Chúng em cô lập bản thân khỏi sự tiến bộ của công nghệ hiện đại.'",
                "icon": "🙈",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "'We should forget our cultural traditions entirely.'",
                "textVi": "'Chúng em muốn lãng quên hoàn toàn cội nguồn truyền thống.'",
                "icon": "🚫",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "'We only care about idle entertainment without learning.'",
                "textVi": "'Chúng em chỉ muốn vui chơi vô bổ mà không cần học hỏi.'",
                "icon": "🎮",
                "isCorrect": false
              }
            ],
            "explanationEn": "Inspiring voice! Vietnamese youth combine deep cultural grounding with boundless global aspirations.",
            "explanationVi": "Thông điệp giàu cảm hứng! Tuổi trẻ Việt Nam kết hợp hài hòa giữa gốc rễ văn hóa và khát vọng vươn tầm thế giới."
          },
          {
            "id": "c_g5_4",
            "level": 4,
            "questionEn": "[Level 4: Extend] Evaluate the comprehensive impact of Vietnam transition toward offshore wind power, solar energy, and green technology by 2050:",
            "questionVi": "[Cấp độ 4: Vận dụng nâng cao] Đánh giá tác động toàn diện của lộ trình chuyển đổi sang điện gió ngoài khơi, điện mặt trời và công nghệ xanh đến năm 2050 của Việt Nam:",
            "options": [
              {
                "id": "opt1",
                "textEn": "It achieves net-zero carbon emissions, combats climate change, creates high-tech jobs, and ensures energy independence",
                "textVi": "Hiện thực hóa mục tiêu phát thải ròng bằng 0 (Net Zero), ứng phó biến đổi khí hậu, tạo việc làm công nghệ cao và tự chủ năng lượng xanh",
                "icon": "🌱",
                "isCorrect": true
              },
              {
                "id": "opt2",
                "textEn": "It relies entirely on imported coal without any environmental filters",
                "textVi": "Phụ thuộc 100% vào than nhập khẩu không có bộ lọc",
                "icon": "🏭",
                "isCorrect": false
              },
              {
                "id": "opt3",
                "textEn": "It completely shuts down modern electricity across all cities",
                "textVi": "Làm mất điện và tắt đèn toàn bộ các thành phố",
                "icon": "🌑",
                "isCorrect": false
              },
              {
                "id": "opt4",
                "textEn": "It has no measurable economic or environmental impact",
                "textVi": "Không mang lại bất kỳ tác động tích cực nào",
                "icon": "❓",
                "isCorrect": false
              }
            ],
            "explanationEn": "At COP26, Vietnam pledged to reach Net Zero emissions by 2050, demonstrating visionary global leadership.",
            "explanationVi": "Tại COP26, Việt Nam đã cam kết đạt phát thải ròng bằng 0 vào năm 2050, thể hiện quyết tâm và trách nhiệm toàn cầu."
          }
        ]
      }
    }
  }
];
