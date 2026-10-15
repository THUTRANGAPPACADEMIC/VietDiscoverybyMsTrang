// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — 25 THEMATIC ADVENTURES COLOR SYSTEM & METADATA
// Premium Pastel Color System & Grade-Specific Adventure Themes for Grades 1–5
// ==============================================================================

import { AdventureThemeId } from '../../types/curriculum';
import { GradeLevel } from '../../types';

export interface AdventureColorTheme {
  adventureId: AdventureThemeId;
  orderNumber: number;
  themeNameEn: string;
  themeNameVi: string;
  icon: string;
  // User-specified Premium Pastel Color System
  pastelBg: string;
  selectedBg: string;
  borderPastel: string;
  borderSelected: string;
  textPastel: string;
  textSelected: string;
  badgePastelBg: string;
  badgeSelectedBg: string;
  glowShadow: string;
  accentColor: string;
  bannerGradient: string;
}

export const ADVENTURE_COLOR_SYSTEM: Record<AdventureThemeId, AdventureColorTheme> = {
  adventure_1_places: {
    adventureId: 'adventure_1_places',
    orderNumber: 1,
    themeNameEn: 'Amazing Places',
    themeNameVi: 'Địa danh kỳ thú',
    icon: '🏔️',
    // ADV 1 – Amazing Places
    // Pastel Sky Blue: #D9F0FF, Selected: #0798E4
    pastelBg: '#D9F0FF',
    selectedBg: '#0798E4',
    borderPastel: '#B8E2FB',
    borderSelected: '#0579B7',
    textPastel: '#004F7C',
    textSelected: '#FFFFFF',
    badgePastelBg: '#C2E7FC',
    badgeSelectedBg: 'rgba(255, 255, 255, 0.25)',
    glowShadow: '0 12px 28px -4px rgba(7, 152, 228, 0.45)',
    accentColor: '#0798E4',
    bannerGradient: 'from-sky-500 via-cyan-500 to-blue-600'
  },
  adventure_2_culture: {
    adventureId: 'adventure_2_culture',
    orderNumber: 2,
    themeNameEn: 'Vietnamese Culture',
    themeNameVi: 'Văn hóa Việt Nam',
    icon: '🏮',
    // ADV 2 – Vietnamese Culture
    // Pastel Lavender: #E9DDFF, Selected: #8B4AE8
    pastelBg: '#E9DDFF',
    selectedBg: '#8B4AE8',
    borderPastel: '#D5C2FA',
    borderSelected: '#6F32C4',
    textPastel: '#4A1D96',
    textSelected: '#FFFFFF',
    badgePastelBg: '#DAC4FA',
    badgeSelectedBg: 'rgba(255, 255, 255, 0.25)',
    glowShadow: '0 12px 28px -4px rgba(139, 74, 232, 0.45)',
    accentColor: '#8B4AE8',
    bannerGradient: 'from-purple-500 via-indigo-500 to-purple-700'
  },
  adventure_3_food: {
    adventureId: 'adventure_3_food',
    orderNumber: 3,
    themeNameEn: 'Delicious Vietnam',
    themeNameVi: 'Ẩm thực ba miền',
    icon: '🍜',
    // ADV 3 – Delicious Vietnam
    // Pastel Peach: #FFE3CB, Selected: #F27A16
    pastelBg: '#FFE3CB',
    selectedBg: '#F27A16',
    borderPastel: '#FED0A8',
    borderSelected: '#C95E09',
    textPastel: '#7C2D12',
    textSelected: '#FFFFFF',
    badgePastelBg: '#FED5B2',
    badgeSelectedBg: 'rgba(255, 255, 255, 0.25)',
    glowShadow: '0 12px 28px -4px rgba(242, 122, 22, 0.45)',
    accentColor: '#F27A16',
    bannerGradient: 'from-amber-500 via-orange-500 to-amber-600'
  },
  adventure_4_nature: {
    adventureId: 'adventure_4_nature',
    orderNumber: 4,
    themeNameEn: 'Nature & Wildlife',
    themeNameVi: 'Thiên nhiên & Động vật hoang dã',
    icon: '🌿',
    // ADV 4 – Nature & Wildlife
    // Pastel Mint Green: #DDF5DD, Selected: #209B60
    pastelBg: '#DDF5DD',
    selectedBg: '#209B60',
    borderPastel: '#BEE7BE',
    borderSelected: '#167648',
    textPastel: '#14532D',
    textSelected: '#FFFFFF',
    badgePastelBg: '#C8ECC8',
    badgeSelectedBg: 'rgba(255, 255, 255, 0.25)',
    glowShadow: '0 12px 28px -4px rgba(32, 155, 96, 0.45)',
    accentColor: '#209B60',
    bannerGradient: 'from-emerald-500 via-green-600 to-teal-700'
  },
  adventure_5_future: {
    adventureId: 'adventure_5_future',
    orderNumber: 5,
    themeNameEn: 'Future Vietnam',
    themeNameVi: 'Việt Nam tương lai',
    icon: '🚀',
    // ADV 5 – Future Vietnam
    // Pastel Pink: #FFE0EE, Selected: #E43D91
    pastelBg: '#FFE0EE',
    selectedBg: '#E43D91',
    borderPastel: '#FCC4DE',
    borderSelected: '#BA226F',
    textPastel: '#831843',
    textSelected: '#FFFFFF',
    badgePastelBg: '#FDCDE4',
    badgeSelectedBg: 'rgba(255, 255, 255, 0.25)',
    glowShadow: '0 12px 28px -4px rgba(228, 61, 145, 0.45)',
    accentColor: '#E43D91',
    bannerGradient: 'from-pink-500 via-rose-500 to-fuchsia-600'
  }
};

export interface GradeAdventureMeta {
  gradeLevel: GradeLevel;
  gradeNumber: number;
  adventureId: AdventureThemeId;
  orderNumber: number;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  targetCefr: 'Pre-A1 Starter' | 'Pre-A1 Beginner' | 'A1 Elementary' | 'A1+ Intermediate' | 'A1+ Explorer';
  coverImage: string;
}

// 25 DISTINCT THEMATIC ADVENTURES (5 GRADES x 5 ADVENTURES)
export const GRADE_ADVENTURES_DATA: Record<GradeLevel, Record<AdventureThemeId, GradeAdventureMeta>> = {
  'Grade 1': {
    adventure_1_places: {
      gradeLevel: 'Grade 1',
      gradeNumber: 1,
      adventureId: 'adventure_1_places',
      orderNumber: 1,
      titleEn: 'My Beautiful Vietnam',
      titleVi: 'Việt Nam tươi đẹp của em',
      subtitleEn: 'Colors of emerald sea, islands, boats, and gentle waves',
      subtitleVi: 'Sắc màu biển xanh ngọc, hòn đảo, con thuyền và sóng biển',
      descriptionEn: 'Discover Ha Long Bay and Vietnamese sea colors with simple nouns and adjectives.',
      descriptionVi: 'Khám phá Vịnh Hạ Long và màu sắc biển quê hương bằng từ vựng đơn giản, phát âm chuẩn.',
      targetCefr: 'Pre-A1 Starter',
      coverImage: '/destinations/halong_bay.jpg'
    },
    adventure_2_culture: {
      gradeLevel: 'Grade 1',
      gradeNumber: 1,
      adventureId: 'adventure_2_culture',
      orderNumber: 2,
      titleEn: 'Colors & Festivals',
      titleVi: 'Sắc màu & Lễ hội',
      subtitleEn: 'Mid-Autumn lanterns, bright red star, yellow moon, and family joy',
      subtitleVi: 'Đèn ông sao đỏ tươi, mặt trăng vàng và nụ cười rạng rỡ của bé',
      descriptionEn: 'Experience glowing lanterns and festival colors through fun listening and speaking.',
      descriptionVi: 'Làm quen với đèn lồng ông sao, bánh dẻo ngọt và màu sắc lễ hội truyền thống Việt Nam.',
      targetCefr: 'Pre-A1 Starter',
      coverImage: '/destinations/hanoi.jpg'
    },
    adventure_3_food: {
      gradeLevel: 'Grade 1',
      gradeNumber: 1,
      adventureId: 'adventure_3_food',
      orderNumber: 3,
      titleEn: 'Yummy Food',
      titleVi: 'Món ngon tuyệt vời',
      subtitleEn: 'Sweet mango, juicy watermelon, yellow banana, and fresh milk',
      subtitleVi: 'Xoài ngọt lịm, dưa hấu mát lành, chuối vàng ươm và sữa tươi',
      descriptionEn: 'Say what you like to eat with yummy tropical fruits of Vietnam.',
      descriptionVi: 'Nói câu "I like mango!" và nhận biết các loại hoa quả nhiệt đới quen thuộc.',
      targetCefr: 'Pre-A1 Starter',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_4_nature: {
      gradeLevel: 'Grade 1',
      gradeNumber: 1,
      adventureId: 'adventure_4_nature',
      orderNumber: 4,
      titleEn: 'Animal Friends',
      titleVi: 'Những người bạn động vật',
      subtitleEn: 'Playful birds, friendly monkeys, cute cats, and swimming fish',
      subtitleVi: 'Chim hót líu lo, chú khỉ tinh nghịch, mèo con đáng yêu và cá bơi',
      descriptionEn: 'Meet cute animal friends in Vietnam and practice simple animal sounds and words.',
      descriptionVi: 'Gặp gỡ những bạn động vật quen thuộc quanh ta và học từ vựng tiếng Anh vui nhộn.',
      targetCefr: 'Pre-A1 Starter',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_5_future: {
      gradeLevel: 'Grade 1',
      gradeNumber: 1,
      adventureId: 'adventure_5_future',
      orderNumber: 5,
      titleEn: 'My Dream City',
      titleVi: 'Thành phố mơ ước',
      subtitleEn: 'Green parks, clean electric buses, tall trees, and blue sky',
      subtitleVi: 'Công viên xanh mát, xe buýt điện êm ái, hàng cây xanh và bầu trời cao',
      descriptionEn: 'Imagine a clean, sunny, eco-friendly green playground in future Vietnam.',
      descriptionVi: 'Hình dung thành phố xanh sạch đẹp nơi các em vui chơi và học tập an toàn.',
      targetCefr: 'Pre-A1 Starter',
      coverImage: '/destinations/hanoi.jpg'
    }
  },

  'Grade 2': {
    adventure_1_places: {
      gradeLevel: 'Grade 2',
      gradeNumber: 2,
      adventureId: 'adventure_1_places',
      orderNumber: 1,
      titleEn: "Let's Visit Vietnam",
      titleVi: 'Hãy cùng đi thăm Việt Nam',
      subtitleEn: 'Sword Lake, historic red bridge, peaceful turtle, and willow trees',
      subtitleVi: 'Hồ Gươm, cầu Thê Húc đỏ tươi, cụ rùa bình yên và rặng liễu rủ',
      descriptionEn: 'Take a pleasant walk around famous lakes and bridges with communicative questions.',
      descriptionVi: 'Dạo bước quanh Hồ Hoàn Kiếm, ngắm cầu Thê Húc và học mẫu câu hỏi đáp cơ bản.',
      targetCefr: 'Pre-A1 Beginner',
      coverImage: '/destinations/hanoi.jpg'
    },
    adventure_2_culture: {
      gradeLevel: 'Grade 2',
      gradeNumber: 2,
      adventureId: 'adventure_2_culture',
      orderNumber: 2,
      titleEn: 'Happy Festivals',
      titleVi: 'Lễ hội vui tươi',
      subtitleEn: 'Lunar New Year, lucky red envelopes, sweet peach blossoms, and family greetings',
      subtitleVi: 'Tết Nguyên đán, phong bao lì xì may mắn, hoa đào hồng thắm và lời chúc bình an',
      descriptionEn: 'Wish family happy new year and learn traditional Tet customs in English.',
      descriptionVi: 'Chúc Tết ông bà cha mẹ bằng tiếng Anh và tìm hiểu phong tục lì xì đầu xuân ấm áp.',
      targetCefr: 'Pre-A1 Beginner',
      coverImage: '/destinations/hanoi.jpg'
    },
    adventure_3_food: {
      gradeLevel: 'Grade 2',
      gradeNumber: 2,
      adventureId: 'adventure_3_food',
      orderNumber: 3,
      titleEn: 'My Favorite Food',
      titleVi: 'Món ăn em yêu thích',
      subtitleEn: 'Warm bowl of Pho, fresh herbs, lime, and savory rice noodles',
      subtitleVi: 'Tô phở ấm nóng, rau thơm ngát, lát chanh tươi và sợi bánh phở trắng mềm',
      descriptionEn: 'Learn how to order and describe traditional Vietnamese noodle soup.',
      descriptionVi: 'Tập gọi món phở Việt Nam bằng tiếng Anh tự nhiên và mô tả hương vị thơm ngon.',
      targetCefr: 'Pre-A1 Beginner',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_4_nature: {
      gradeLevel: 'Grade 2',
      gradeNumber: 2,
      adventureId: 'adventure_4_nature',
      orderNumber: 4,
      titleEn: 'Nature Detectives',
      titleVi: 'Thám tử thiên nhiên',
      subtitleEn: 'Lush green forests, colorful butterflies, gentle streams, and tall bamboo',
      subtitleVi: 'Khu rừng xanh ngút ngàn, đàn bướm muôn màu, suối trong veo và lũy tre xanh',
      descriptionEn: 'Spot hidden natural treasures in national parks with fun detective listening clues.',
      descriptionVi: 'Cùng làm thám tử khám phá hệ sinh thái tự nhiên và những chú bướm rực rỡ.',
      targetCefr: 'Pre-A1 Beginner',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_5_future: {
      gradeLevel: 'Grade 2',
      gradeNumber: 2,
      adventureId: 'adventure_5_future',
      orderNumber: 5,
      titleEn: 'Future Transport',
      titleVi: 'Phương tiện tương lai',
      subtitleEn: 'Smooth elevated metro, solar scooter, safe bicycle highway, and green trains',
      subtitleVi: 'Tàu điện trên cao êm ru, xe máy điện năng lượng mặt trời và làn đường đạp xe an toàn',
      descriptionEn: 'Travel on modern green transit systems that keep our Vietnamese skies clean and blue.',
      descriptionVi: 'Khám phá các phương tiện giao thông tương lai thân thiện với môi trường.',
      targetCefr: 'Pre-A1 Beginner',
      coverImage: '/destinations/halong_bay.jpg'
    }
  },

  'Grade 3': {
    adventure_1_places: {
      gradeLevel: 'Grade 3',
      gradeNumber: 3,
      adventureId: 'adventure_1_places',
      orderNumber: 1,
      titleEn: 'Famous Landmarks',
      titleVi: 'Danh lam thắng cảnh nổi tiếng',
      subtitleEn: 'One Pillar Pagoda, ancient lotus pond, Dragon Bridge, and Ba Na Hills',
      subtitleVi: 'Chùa Một Cột, hồ sen cổ kính, Cầu Rồng phun lửa và đỉnh Bà Nà mây phủ',
      descriptionEn: 'Locate iconic landmarks across North, Central, and South Vietnam with prepositional phrases.',
      descriptionVi: 'Xác định vị trí các danh thắng tiêu biểu của ba miền và giới thiệu với bạn bè quốc tế.',
      targetCefr: 'A1 Elementary',
      coverImage: '/destinations/one_pillar_pagoda_3d.png'
    },
    adventure_2_culture: {
      gradeLevel: 'Grade 3',
      gradeNumber: 3,
      adventureId: 'adventure_2_culture',
      orderNumber: 2,
      titleEn: 'Vietnamese Traditions',
      titleVi: 'Truyền thống Việt Nam',
      subtitleEn: 'Mid-Autumn mooncakes, energetic lion dance, drum beats, and moon watching',
      subtitleVi: 'Bánh nướng bánh dẻo thơm lừng, múa lân rộn rã, tiếng trống tùng dinh phá cỗ',
      descriptionEn: 'Explain Mid-Autumn Festival rituals, share mooncakes, and express excitement.',
      descriptionVi: 'Kể về đêm rằm Trung thu, sự tích Chú Cuội và chia sẻ bánh ngọt cùng bạn bè.',
      targetCefr: 'A1 Elementary',
      coverImage: '/destinations/hanoi.jpg'
    },
    adventure_3_food: {
      gradeLevel: 'Grade 3',
      gradeNumber: 3,
      adventureId: 'adventure_3_food',
      orderNumber: 3,
      titleEn: 'Food Adventure',
      titleVi: 'Cuộc phiêu lưu ẩm thực',
      subtitleEn: 'Crispy Banh Mi, golden spring rolls, savory dipping sauce, and sweet lotus seeds',
      subtitleVi: 'Bánh mì giòn rụm, nem rán vàng ươm, nước chấm đậm đà và hạt sen thơm bùi',
      descriptionEn: 'Describe ingredients, flavors, textures, and dining etiquette in English.',
      descriptionVi: 'Tập làm hướng dẫn viên ẩm thực giới thiệu các món ăn đường phố nổi tiếng Việt Nam.',
      targetCefr: 'A1 Elementary',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_4_nature: {
      gradeLevel: 'Grade 3',
      gradeNumber: 3,
      adventureId: 'adventure_4_nature',
      orderNumber: 4,
      titleEn: 'Wildlife Discovery',
      titleVi: 'Khám phá thế giới hoang dã',
      subtitleEn: 'Cuc Phuong rainforest, Delacour’s langurs, ancient thousand-year trees, and cave shelters',
      subtitleVi: 'Rừng nguyên sinh Cúc Phương, loài voọc mông trắng quý hiếm, cây chò ngàn năm',
      descriptionEn: 'Learn animal habitats, endangered species preservation, and forest protection vocabulary.',
      descriptionVi: 'Tìm hiểu về khu bảo tồn thiên nhiên và ý thức bảo vệ các loài động vật có nguy cơ tuyệt chủng.',
      targetCefr: 'A1 Elementary',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_5_future: {
      gradeLevel: 'Grade 3',
      gradeNumber: 3,
      adventureId: 'adventure_5_future',
      orderNumber: 5,
      titleEn: 'Smart Vietnam',
      titleVi: 'Việt Nam thông minh',
      subtitleEn: 'Interactive smart school, rooftop solar panels, recycling robots, and AI helpers',
      subtitleVi: 'Lớp học số tương tác, pin mặt trời trên mái trường, robot phân loại rác và trợ lý AI',
      descriptionEn: 'Discuss technology in education, clean energy sources, and sustainable daily habits.',
      descriptionVi: 'Thảo luận về ứng dụng công nghệ số và thói quen tiết kiệm năng lượng trong học đường.',
      targetCefr: 'A1 Elementary',
      coverImage: '/destinations/hanoi.jpg'
    }
  },

  'Grade 4': {
    adventure_1_places: {
      gradeLevel: 'Grade 4',
      gradeNumber: 4,
      adventureId: 'adventure_1_places',
      orderNumber: 1,
      titleEn: 'Vietnam Travel Quest',
      titleVi: 'Hành trình khám phá Việt Nam',
      subtitleEn: 'Hue Imperial Citadel, Perfume River dragon boat, royal tombs, and Thien Mu Pagoda',
      subtitleVi: 'Đại Nội Huế cổ kính, thuyền rồng trên sông Hương, lăng tẩm hoàng gia và chùa Thiên Mụ',
      descriptionEn: 'Narrate travel itineraries, historical monuments, and geographical landmarks using past and present tense.',
      descriptionVi: 'Thuyết minh về lịch sử cố đô Huế và cảnh sắc sông Hương bằng tiếng Anh tự tin.',
      targetCefr: 'A1+ Intermediate',
      coverImage: '/destinations/hue.jpg'
    },
    adventure_2_culture: {
      gradeLevel: 'Grade 4',
      gradeNumber: 4,
      adventureId: 'adventure_2_culture',
      orderNumber: 2,
      titleEn: 'Cultural Heritage',
      titleVi: 'Di sản văn hóa',
      subtitleEn: 'Hoi An ancient town, silk lantern making, Japanese Covered Bridge, and folk craft villages',
      subtitleVi: 'Phố cổ Hội An, nghề làm lồng đèn lụa, Chùa Cầu trăm năm và làng nghề truyền thống',
      descriptionEn: 'Examine UNESCO cultural heritage preservation, traditional architecture, and craftsmanship.',
      descriptionVi: 'Tìm hiểu giá trị di sản thế giới của phố cổ Hội An và nghệ thuật thủ công truyền thống.',
      targetCefr: 'A1+ Intermediate',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_3_food: {
      gradeLevel: 'Grade 4',
      gradeNumber: 4,
      adventureId: 'adventure_3_food',
      orderNumber: 3,
      titleEn: 'Vietnamese Food Tour',
      titleVi: 'Chuyến du lịch ẩm thực ba miền',
      subtitleEn: 'Quang turmeric noodles, Hue spicy beef soup, savory Banh Xeo, and floating market feasts',
      subtitleVi: 'Mì Quảng sợi vàng óng, bún bò Huế cay nồng, bánh xèo giòn rụm và chợ nổi miền Tây',
      descriptionEn: 'Compare regional culinary styles, flavor profiles, cooking methods, and hospitality traditions.',
      descriptionVi: 'So sánh văn hóa ẩm thực ba miền Bắc - Trung - Nam và phong tục hiếu khách của người Việt.',
      targetCefr: 'A1+ Intermediate',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_4_nature: {
      gradeLevel: 'Grade 4',
      gradeNumber: 4,
      adventureId: 'adventure_4_nature',
      orderNumber: 4,
      titleEn: 'Protect Our Planet',
      titleVi: 'Bảo vệ hành tinh chúng ta',
      subtitleEn: 'Phong Nha - Ke Bang karst caves, underground rivers, fossil evidence, and rainforest conservation',
      subtitleVi: 'Hệ thống hang động Phong Nha, dòng sông ngầm kỳ bí và công tác bảo tồn rừng di sản',
      descriptionEn: 'Explore natural geological formations, biodiversity protection, and sustainable eco-tourism.',
      descriptionVi: 'Tìm hiểu địa chất hang động đá vôi và tuyên truyền bảo vệ tài nguyên thiên nhiên quốc gia.',
      targetCefr: 'A1+ Intermediate',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_5_future: {
      gradeLevel: 'Grade 4',
      gradeNumber: 4,
      adventureId: 'adventure_5_future',
      orderNumber: 5,
      titleEn: 'Green Smart Cities',
      titleVi: 'Thành phố thông minh & Xanh',
      subtitleEn: 'Offshore wind farms, urban solar rooftops, automated electric metro, and waste recycling networks',
      subtitleVi: 'Trang trại điện gió ngoài khơi, mái nhà năng lượng mặt trời, metro tự động và tái chế thông minh',
      descriptionEn: 'Propose green urban solutions, renewable energy adoption, and carbon footprint reduction.',
      descriptionVi: 'Học tiếng Anh về giải pháp thành phố xanh, năng lượng tái tạo và giảm thiểu rác thải nhựa.',
      targetCefr: 'A1+ Intermediate',
      coverImage: '/destinations/hanoi.jpg'
    }
  },

  'Grade 5': {
    adventure_1_places: {
      gradeLevel: 'Grade 5',
      gradeNumber: 5,
      adventureId: 'adventure_1_places',
      orderNumber: 1,
      titleEn: "Discover Vietnam's Wonders",
      titleVi: 'Khám phá kỳ quan Việt Nam',
      subtitleEn: 'Son Doong - the world’s largest cave, giant stalagmites, pristine jungle sinkholes, and underground clouds',
      subtitleVi: 'Sơn Đoòng - hang động lớn nhất thế giới, thạch nhũ khổng lồ, hố sụt rừng nguyên sinh và mây ngầm',
      descriptionEn: 'Deliver presentations on natural world records, geological expeditions, and environmental wonder preservation.',
      descriptionVi: 'Thực hành thuyết trình tiếng Anh về kỳ quan thiên nhiên thế giới Sơn Đoòng và niềm tự hào dân tộc.',
      targetCefr: 'A1+ Explorer',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_2_culture: {
      gradeLevel: 'Grade 5',
      gradeNumber: 5,
      adventureId: 'adventure_2_culture',
      orderNumber: 2,
      titleEn: 'Heritage Explorers',
      titleVi: 'Nhà thám hiểm di sản',
      subtitleEn: 'UNESCO Royal Court Music (Nha Nhac Hue), Dong Ho folk woodblock prints, and timeless cultural identity',
      subtitleVi: 'Nhã nhạc cung đình Huế, tranh khắc gỗ dân gian Đông Hồ và bản sắc văn hóa trường tồn',
      descriptionEn: 'Articulate complex cultural meanings, artistic mastery, and international recognition of Vietnamese traditions.',
      descriptionVi: 'Diễn đạt chiều sâu di sản phi vật thể nhân loại và truyền bá nét đẹp văn hóa Việt ra năm châu.',
      targetCefr: 'A1+ Explorer',
      coverImage: '/destinations/hue.jpg'
    },
    adventure_3_food: {
      gradeLevel: 'Grade 5',
      gradeNumber: 5,
      adventureId: 'adventure_3_food',
      orderNumber: 3,
      titleEn: 'Vietnamese Cuisine Challenge',
      titleVi: 'Thử thách bếp trưởng nhí',
      subtitleEn: 'Mastering the harmony of Yin & Yang (Âm Dương), secret Pho broth spices, and healthy balanced nutrition',
      subtitleVi: 'Nghệ thuật cân bằng Âm Dương trong ẩm thực, bí quyết nước dùng phở và chế độ dinh dưỡng lành mạnh',
      descriptionEn: 'Explain culinary philosophy, step-by-step cooking recipes, and cultural hospitality in advanced English.',
      descriptionVi: 'Giải thích triết lý ngũ hành trong món ăn Việt và tự tin hướng dẫn công thức nấu ăn bằng tiếng Anh.',
      targetCefr: 'A1+ Explorer',
      coverImage: '/destinations/danang.jpg'
    },
    adventure_4_nature: {
      gradeLevel: 'Grade 5',
      gradeNumber: 5,
      adventureId: 'adventure_4_nature',
      orderNumber: 4,
      titleEn: 'Eco Heroes',
      titleVi: 'Anh hùng bảo vệ hệ sinh thái',
      subtitleEn: 'Saving the critically endangered Cat Ba Langur, Con Dao sea turtles, and marine reef ecosystems',
      subtitleVi: 'Bảo vệ loài voọc Cát Bà cực kỳ nguy cấp, rùa biển Côn Đảo và rạn san hô đại dương',
      descriptionEn: 'Act as youth ambassadors for wildlife conservation, global climate action, and biodiversity protection.',
      descriptionVi: 'Đóng vai trò đại sứ nhí bảo vệ động vật hoang dã và hành động vì khí hậu toàn cầu.',
      targetCefr: 'A1+ Explorer',
      coverImage: '/destinations/phong_nha.jpg'
    },
    adventure_5_future: {
      gradeLevel: 'Grade 5',
      gradeNumber: 5,
      adventureId: 'adventure_5_future',
      orderNumber: 5,
      titleEn: 'Vietnam 2050',
      titleVi: 'Việt Nam năm 2050',
      subtitleEn: 'High-speed magnetic levitation trains, AI-powered smart grids, aerospace research, and zero-carbon innovation',
      subtitleVi: 'Tàu đệm từ siêu tốc, lưới điện thông minh AI, trung tâm vũ trụ và quốc gia không phát thải carbon',
      descriptionEn: 'Envision visionary 21st-century STEM careers, scientific inventions, and sustainable leadership in English.',
      descriptionVi: 'Tự tin thảo luận về công nghệ đột phá năm 2050, định hướng nghề nghiệp STEM và khát vọng phát triển đất nước.',
      targetCefr: 'A1+ Explorer',
      coverImage: '/destinations/halong_bay.jpg'
    }
  }
};

export const getAdventureThemeConfig = (
  adventureId: AdventureThemeId,
  gradeLevel: GradeLevel = 'Grade 1'
) => {
  const colorConfig = ADVENTURE_COLOR_SYSTEM[adventureId];
  const gradeMeta = GRADE_ADVENTURES_DATA[gradeLevel]?.[adventureId] || GRADE_ADVENTURES_DATA['Grade 1'][adventureId];

  return {
    ...colorConfig,
    ...gradeMeta
  };
};
