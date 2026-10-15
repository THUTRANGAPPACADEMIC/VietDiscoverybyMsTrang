import { ProvinceEducationalData } from './types';

export const CITIES_DATA: ProvinceEducationalData[] = [
  // 1. THỦ ĐÔ HÀ NỘI
  {
    code: 'HN',
    id: 'vn-34-hn',
    type: 'city',
    nameVi: 'Thủ đô Hà Nội',
    nameEn: 'Hanoi Capital',
    capitalVi: 'Quận Hoàn Kiếm',
    capitalEn: 'Hoan Kiem District',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    emoji: '🐢',
    image: '/destinations/hanoi_turtle_tower.jpg',
    geographicLocation: {
      latitude: 21.0285,
      longitude: 105.8542,
      borders: 'Bordered by Thai Nguyen, Vinh Phuc, Bac Giang, Bac Ninh, Hung Yen, Ha Nam, Hoa Binh, and Phu Tho.',
      terrain: 'Fertile Red River delta plains with historic urban lakes and northern hills.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết Quốc hội khóa XV & Quy hoạch Thủ đô 2025',
      previousUnitsInvolved: ['Thủ đô Hà Nội', 'Khu vực vành đai đô thị vệ tinh'],
      summaryVi: 'Thủ đô nước CHXHCN Việt Nam, trung tâm đầu não chính trị, hành chính quốc gia, trung tâm lớn về văn hóa, khoa học, giáo dục, kinh tế và giao dịch quốc tế.',
      summaryEn: 'The thousand-year-old capital city of Vietnam, national political, cultural, educational, and economic hub.'
    },
    notableGeographicalCharacteristics: {
      en: 'Centered around the majestic Red River with picturesque lakes like Sword Lake and West Lake.',
      vi: 'Nằm hai bên bờ sông Hồng thơ mộng với hệ thống hồ nước cổ kính nổi tiếng như Hồ Hoàn Kiếm và Hồ Tây.'
    },
    famousLandmarks: [
      {
        nameEn: 'Sword Lake & Turtle Tower',
        nameVi: 'Hồ Hoàn Kiếm & Tháp Rùa',
        descriptionEn: 'The sacred heart of Hanoi linked to the legend of the Magic Golden Turtle.',
        descriptionVi: 'Trái tim thiêng liêng của Thủ đô gắn với truyền thuyết Rùa Vàng trả gươm thần.',
        emoji: '🐢'
      },
      {
        nameEn: 'Temple of Literature',
        nameVi: 'Văn Miếu – Quốc Tử Giám',
        descriptionEn: 'Vietnam’s first national university founded in 1070 celebrating scholastic excellence.',
        descriptionVi: 'Trường đại học đầu tiên của Việt Nam thành lập năm 1070 tôn vinh truyền thống hiếu học.',
        emoji: '📜'
      },
      {
        nameEn: 'One Pillar Pagoda',
        nameVi: 'Chùa Một Cột',
        descriptionEn: 'An iconic historic wooden pagoda built on a single stone pillar shaped like a blooming lotus.',
        descriptionVi: 'Ngôi chùa độc đáo hình bông sen nở trên một cột đá thời vua Lý Thái Tông.',
        emoji: '🪷'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Hanoi Beef Pho',
        nameVi: 'Phở bò Hà Nội',
        descriptionEn: 'World-famous fragrant noodle soup with tender beef slices and savory clear broth.',
        descriptionVi: 'Món quốc hồn quốc túy với nước dùng thanh ngọt đậm đà và thịt bò mềm.',
        emoji: '🍜'
      },
      {
        nameEn: 'Bun Cha Hanoi',
        nameVi: 'Bún chả Hà Nội',
        descriptionEn: 'Grilled pork patties and pork belly served over fresh rice noodles and herbs.',
        descriptionVi: 'Chả thịt nướng thơm lừng chấm nước mắm chua ngọt ăn kèm bún tươi.',
        emoji: '🥗'
      },
      {
        nameEn: 'Egg Coffee',
        nameVi: 'Cà phê trứng',
        descriptionEn: 'Rich Vietnamese robusta coffee topped with a creamy whipped egg foam.',
        descriptionVi: 'Cà phê thơm đậm kết hợp cùng lớp kem trứng đánh bông béo ngậy.',
        emoji: '☕'
      }
    ],
    culturalTraditions: {
      en: 'Elegant craft guilds of 36 ancient guild streets, imperial scholar celebrations, and traditional Thang Long water puppetry.',
      vi: 'Nét thanh lịch Tràng An, 36 phố phường truyền thống ngàn năm và nghệ thuật múa rối nước Thăng Long.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Thang Long Imperial Citadel Heritage',
        nameVi: 'Hoàng thành Thăng Long',
        unescoHeritage: true,
        descriptionEn: 'UNESCO World Cultural Heritage site marking over 1,300 years of royal Vietnamese history.',
        descriptionVi: 'Di sản Văn hóa Thế giới UNESCO minh chứng cho hơn 1.300 năm lịch sử triều đại Việt Nam.'
      },
      {
        nameEn: 'Dong Da Mound Victory Festival',
        nameVi: 'Lễ hội gò Đống Đa',
        unescoHeritage: false,
        descriptionEn: 'Annual spring festival honoring King Quang Trung’s heroic 1789 victory.',
        descriptionVi: 'Lễ hội mùa xuân tưởng nhớ chiến công hiển hách của Hoàng đế Quang Trung năm Kỷ Dậu 1789.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Bat Trang Ceramic & Pottery',
        productVi: 'Gốm sứ Bát Tràng',
        occupationEn: 'Ceramic artisan',
        occupationVi: 'Nghệ nhân làm gốm'
      },
      {
        productEn: 'Van Phuc Silk',
        productVi: 'Lụa Vạn Phúc (Hà Đông)',
        occupationEn: 'Silk weaver',
        occupationVi: 'Thợ dệt lụa'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Ba Vi National Park',
        nameVi: 'Vườn quốc gia Ba Vì',
        type: 'National Park',
        descriptionEn: 'Misty green mountain peaks with ancient French villas and rare sub-tropical biodiversity.'
      },
      {
        nameEn: 'West Lake & Lotus Ponds',
        nameVi: 'Hồ Tây & Đầm sen',
        type: 'Lake',
        descriptionEn: 'Hanoi’s largest freshwater lake famous for summer lotus flowers and evening sunsets.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The harmonious coexistence of millennia-old temples, French colonial boulevards, and vibrant modern innovation.',
      vi: 'Sự hòa quyện giữa nét trầm mặc ngàn năm văn hiến, kiến trúc cổ điển và nhịp sống đổi mới hiện đại.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Capital',
        phonetic: '/ˈkæp.ə.t̬əl/',
        partOfSpeech: 'noun',
        meaningEn: 'The most important city of a country where the government works.',
        meaningVi: 'Thủ đô',
        exampleSentence: 'Hanoi is the peaceful capital of Vietnam.',
        emoji: '🏛️'
      },
      {
        word: 'Ancient',
        phonetic: '/ˈeɪn.ʃənt/',
        partOfSpeech: 'adjective',
        meaningEn: 'Belonging to a period of history that is thousands of years in the past.',
        meaningVi: 'Cổ kính, ngàn năm tuổi',
        exampleSentence: 'The temple has ancient stone turtles.',
        emoji: '📜'
      },
      {
        word: 'Lotus',
        phonetic: '/ˈloʊ.t̬əs/',
        partOfSpeech: 'noun',
        meaningEn: 'A beautiful fragrant water lily flower that is Vietnam’s national floral symbol.',
        meaningVi: 'Hoa sen',
        exampleSentence: 'Pink lotus flowers bloom across West Lake in the summer.',
        emoji: '🪷'
      },
      {
        word: 'Guild Street',
        phonetic: '/ɡɪld striːt/',
        partOfSpeech: 'noun',
        meaningEn: 'A street where traditional artisans sell special handmade craft goods.',
        meaningVi: 'Phố nghề cổ truyền (Hàng Gai, Hàng Bạc...)',
        exampleSentence: 'Hanoi Old Quarter has thirty-six guild streets.',
        emoji: '🏮'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Hanoi is famous for its [landmark / dish].',
        patternMeaningVi: 'Hà Nội nổi tiếng với [địa danh / món ăn].',
        exampleEn: 'Hanoi is famous for its delicious beef pho and historic Sword Lake.',
        exampleVi: 'Hà Nội nổi tiếng với món phở bò thơm ngon và Hồ Gươm cổ kính.',
        targetSkill: 'speaking'
      },
      {
        pattern: 'I would like to visit [landmark] in Hanoi because [reason].',
        patternMeaningVi: 'Em muốn đến thăm [địa danh] ở Hà Nội vì [lý do].',
        exampleEn: 'I would like to visit the Temple of Literature because I love learning about history.',
        exampleVi: 'Em muốn đến thăm Văn Miếu vì em thích tìm hiểu về lịch sử.',
        targetSkill: 'writing'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Welcome to Hanoi Capital! Look at the green water of Sword Lake. Can you see the ancient Turtle Tower in the middle? Many years ago, King Le Loi returned the magic sword to the Golden Turtle here.',
        question: 'Who did King Le Loi return the magic sword to in Sword Lake?',
        options: ['The Magic Golden Turtle 🐢', 'A red dragon 🐉', 'A white tiger 🐅', 'A golden bird 🦅'],
        correctIndex: 0,
        explanationEn: 'According to legend, King Le Loi returned the magic heaven-sent sword to the Golden Turtle in Sword Lake.',
        explanationVi: 'Theo truyền thuyết, vua Lê Lợi đã hoàn gươm thần cho Rùa Vàng tại Hồ Gươm.'
      },
      speakingMission: {
        roleplayPromptEn: 'Imagine you are a friendly youth tour guide welcoming foreign students to Hanoi. Say this sentence with proud energy!',
        roleplayPromptVi: 'Hãy đóng vai hướng dẫn viên nhí chào đón các bạn quốc tế đến thăm Hà Nội!',
        targetSpeech: 'Welcome to Hanoi! It is the beautiful capital city of Vietnam.',
        sampleAudioPhonetic: '/ˈwel.kəm tuː hæˈnɔɪ! ɪt ɪz ðə ˈbjuː.t̬ə.fəl ˈkæp.ə.t̬əl ˈsɪt.i əv ˌvjetˈnɑːm/',
        pronunciationTips: 'Pronounce "Capital" with three soft syllables: CAP-i-tal, and put a warm smile in your voice!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'hn-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'What is the sacred landmark located in the center of Sword Lake in Hanoi?',
        questionVi: 'Danh thắng linh thiêng nằm giữa lòng Hồ Gươm tại Hà Nội là gì?',
        options: ['Turtle Tower (Tháp Rùa)', 'Dragon Bridge', 'Ben Thanh Market', 'Trang Tien Bridge'],
        correctIndex: 0,
        explanationEn: 'Turtle Tower stands proudly on an islet in the middle of Sword Lake.',
        explanationVi: 'Tháp Rùa uy nghiêm tọa lạc trên gò đất nổi giữa lòng Hồ Hoàn Kiếm.'
      },
      {
        id: 'hn-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why was the Temple of Literature (Quốc Tử Giám) founded in Hanoi in 1070?',
        questionVi: 'Vì sao Văn Miếu – Quốc Tử Giám được thành lập tại Hà Nội vào năm 1070?',
        options: [
          'To serve as Vietnam’s first university honoring education and scholars 📜',
          'To build a naval shipyard for trading boats ⛵',
          'To manufacture bronze weapons ⚔️',
          'To grow green tea crops 🍵'
        ],
        correctIndex: 0,
        explanationEn: 'The Temple of Literature was established in 1070 as Vietnam’s first imperial university.',
        explanationVi: 'Văn Miếu – Quốc Tử Giám là trường đại học đầu tiên của nước ta, cái nôi của đạo học và hiền tài.'
      },
      {
        id: 'hn-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'A visiting foreign friend asks: "What special breakfast should I try in Hanoi?" Which English reply is best?',
        questionVi: 'Một người bạn nước ngoài hỏi: "Tôi nên thử món ăn sáng đặc biệt nào ở Hà Nội?" Câu trả lời nào chuẩn nhất?',
        options: [
          '"You should definitely try a hot bowl of traditional Hanoi Pho beef noodle soup!" 🍜',
          '"You should swim in the deep sea." 🏊',
          '"You should ride a camel in the desert." 🐪',
          '"You should buy a snowman." ⛄'
        ],
        correctIndex: 0,
        explanationEn: 'Pho is Hanoi’s globally renowned morning dish, served with warm broth and fresh herbs.',
        explanationVi: 'Phở bò Hà Nội là món ăn sáng truyền thống nổi tiếng thế giới của Thủ đô.'
      }
    ],
    verifiedSource: 'Nghị quyết Quốc hội khóa XV & Quy hoạch Thủ đô Hà Nội 2025'
  },

  // 2. THÀNH PHỐ HẢI PHÒNG
  {
    code: 'HP',
    id: 'vn-34-hp',
    type: 'city',
    nameVi: 'Thành phố Hải Phòng',
    nameEn: 'Hai Phong Port City',
    capitalVi: 'Quận Hồng Bàng',
    capitalEn: 'Hong Bang District',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    emoji: '⚓',
    image: '/destinations/halong_bay.jpg',
    geographicLocation: {
      latitude: 20.8449,
      longitude: 106.6881,
      borders: 'Bordered by Quang Ninh to the north, Hai Duong to the west, Thai Binh to the south, and the Gulf of Tonkin to the east.',
      terrain: 'Coastal port delta with deep sea harbors, limestone karst islands, and tidal estuaries.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Thành phố Hải Phòng', 'Huyện đảo Bạch Long Vĩ', 'Huyện Cát Hải'],
      summaryVi: 'Đô thị cảng biển quốc tế cửa ngõ phía Bắc, trung tâm logistics hiện đại kết nối hành lang kinh tế biển; quản lý đảo tiền tiêu Bạch Long Vĩ và quần đảo Cát Bà.',
      summaryEn: 'Major international seaport gateway in Northern Vietnam, managing the strategic Bach Long Vi Island and Cat Ba Biosphere Archipelago.',
      islandDistricts: ['Huyện đảo Bạch Long Vĩ', 'Huyện đảo Cát Hải (Quần đảo Cát Bà)']
    },
    notableGeographicalCharacteristics: {
      en: 'Major maritime crossroads where rivers meet the East Sea, flanked by hundreds of emerald karst islands.',
      vi: 'Giao điểm cửa ngõ sông đổ ra biển Đông, sở hữu hàng trăm hòn đảo đá vôi xanh biếc thuộc quần đảo Cát Bà.'
    },
    famousLandmarks: [
      {
        nameEn: 'Cat Ba Archipelago & Lan Ha Bay',
        nameVi: 'Quần đảo Cát Bà & Vịnh Lan Hạ',
        descriptionEn: 'UNESCO World Natural Heritage site shared with Ha Long Bay featuring biodiverse marine forests.',
        descriptionVi: 'Di sản Thiên nhiên Thế giới UNESCO liên tỉnh với hàng trăm hòn đảo nguyên sinh và nước biển xanh ngọc.',
        emoji: '🏝️'
      },
      {
        nameEn: 'Hai Phong Opera House',
        nameVi: 'Nhà hát lớn Hải Phòng',
        descriptionEn: 'Historic neoclassical cultural landmark standing in the city square shaded by red poinciana trees.',
        descriptionVi: 'Công trình kiến trúc Pháp cổ kính kiêu hãnh giữa quảng trường rực rỡ hoa phượng đỏ.',
        emoji: '🏛️'
      },
      {
        nameEn: 'Bach Long Vi Island Lighthouse',
        nameVi: 'Hải đăng Đảo Bạch Long Vĩ',
        descriptionEn: 'Strategic sovereign island outpost safeguarding maritime fishing waters in the Gulf of Tonkin.',
        descriptionVi: 'Ngọn hải đăng trên đảo tiền tiêu bảo vệ chủ quyền và dẫn đường cho ngư dân giữa Vịnh Bắc Bộ.',
        emoji: '🏮'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Crab Red Noodle Soup',
        nameVi: 'Bánh đa cua Hải Phòng',
        descriptionEn: 'Savory red rice noodles served with rich freshwater field crab broth, pork rolls, and water spinach.',
        descriptionVi: 'Món bánh đa màu nâu đỏ hòa quyện cùng riêu cua đồng béo ngậy, chả lá lốt và rau muống giòn.',
        emoji: '🍲'
      },
      {
        nameEn: 'Spicy Baguette',
        nameVi: 'Bánh mì que cay Hải Phòng',
        descriptionEn: 'Crispy slender bread stick filled with savory pork liver pate and fiery Chi Chuong chili sauce.',
        descriptionVi: 'Bánh mì que giòn rụm kẹp pate thơm béo chấm tương ớt Chí Chương cay nồng.',
        emoji: '🥖'
      }
    ],
    culturalTraditions: {
      en: 'Heroic seafaring bravery, bustling harbor trade, and the thrilling Do Son Buffalo Fighting heritage.',
      vi: 'Tinh thần kiên cường của người con miền sóng nước, nhịp sống bến cảng tấp nập và Lễ hội Chọi trâu Đồ Sơn truyền thống.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Red Flamboyant Flower Festival',
        nameVi: 'Lễ hội Hoa Phượng Đỏ',
        unescoHeritage: false,
        descriptionEn: 'Annual vibrant May festival celebrating the city’s beloved official red blossom.',
        descriptionVi: 'Lễ hội hoa tháng Năm bừng sáng sắc đỏ đặc trưng của thành phố cảng anh hùng.'
      },
      {
        nameEn: 'Cat Ba Archipelago World Heritage',
        nameVi: 'Di sản Thiên nhiên Thế giới Quần đảo Cát Bà',
        unescoHeritage: true,
        descriptionEn: 'Joint UNESCO World Heritage recognition for outstanding karst landscape and endemic white-headed langur.',
        descriptionVi: 'Di sản UNESCO với giá trị đa dạng sinh học độc đáo và loài voọc Cát Bà quý hiếm.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Cat Hai Fish Sauce',
        productVi: 'Nước mắm Cát Hải',
        occupationEn: 'Maritime fisherman & port engineer',
        occupationVi: 'Ngư dân đánh bắt hải sản & kỹ sư cảng biển'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Cat Ba National Park',
        nameVi: 'Vườn quốc gia Cát Bà',
        type: 'National Park',
        descriptionEn: 'Pristine coastal tropical forest home to the endangered golden-headed langur primate.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Known nationwide as "The City of Red Flamboyant Flowers" (Thành phố Hoa Phượng Đỏ) and Vietnam’s bustling northern seaport.',
      vi: 'Được mệnh danh là "Thành phố Hoa Phượng Đỏ", trung tâm công nghiệp và cảng biển cửa ngõ sầm uất bậc nhất.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Harbor',
        phonetic: '/ˈhɑːr.bɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A safe sheltered deep-water port where big cargo ships dock.',
        meaningVi: 'Bến cảng, vũng tàu đậu',
        exampleSentence: 'Huge container ships arrive at Hai Phong harbor every morning.',
        emoji: '🚢'
      },
      {
        word: 'Flamboyant',
        phonetic: '/flæmˈbɔɪ.ənt/',
        partOfSpeech: 'noun',
        meaningEn: 'A majestic tree with radiant bright red flame flowers blooming in summer.',
        meaningVi: 'Cây hoa phượng đỏ rực rỡ',
        exampleSentence: 'Bright red flamboyant flowers line every avenue in Hai Phong.',
        emoji: '🌺'
      },
      {
        word: 'Seaport',
        phonetic: '/ˈsiː.pɔːrt/',
        partOfSpeech: 'noun',
        meaningEn: 'A city with harbors where ocean ships load and unload goods.',
        meaningVi: 'Thành phố cảng biển',
        exampleSentence: 'Hai Phong is Vietnam’s biggest northern seaport.',
        emoji: '⚓'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Hai Phong is known as the City of [symbol / flower].',
        patternMeaningVi: 'Hải Phòng được biết đến là Thành phố của [biểu tượng / hoa].',
        exampleEn: 'Hai Phong is known as the City of Red Flamboyant Flowers.',
        exampleVi: 'Hải Phòng được biết đến là Thành phố Hoa Phượng Đỏ.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Hai Phong is a lively coastal seaport. In May, thousands of red flamboyant trees bloom all over the streets. Big ships bring containers from around the world into its modern harbors.',
        question: 'What blooms brightly across Hai Phong streets in May?',
        options: ['Red flamboyant flowers 🌺', 'Yellow sunflowers 🌻', 'White snowflakes ❄️', 'Purple daisies 🌸'],
        correctIndex: 0,
        explanationEn: 'Hai Phong is famed for its red flamboyant flowers blooming in May.',
        explanationVi: 'Hải Phòng nổi tiếng với hoa phượng vĩ đỏ rực rỡ nở vào tháng Năm.'
      },
      speakingMission: {
        roleplayPromptEn: 'Introduce Hai Phong harbor to an international audience. Speak clearly and proudly!',
        roleplayPromptVi: 'Giới thiệu về cảng biển Hải Phòng cho các bạn quốc tế nghe nào!',
        targetSpeech: 'Hai Phong is a famous seaport city with beautiful red flowers!',
        sampleAudioPhonetic: '/haɪ ˈfɒŋ ɪz ə ˈfeɪ.məs ˈsiː.pɔːrt ˈsɪt.i wɪð ˈbjuː.t̬ə.fəl red ˈflaʊ.ɚz!/',
        pronunciationTips: 'Stress "SEA-port" firmly on the first syllable and say "flamboyant" smoothly.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'hp-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which flower is the beloved proud symbol of Hai Phong City?',
        questionVi: 'Loài hoa nào là biểu tượng đáng tự hào của Thành phố Hải Phòng?',
        options: ['Red Flamboyant (Hoa phượng đỏ) 🌺', 'Yellow Apricot (Hoa mai) 🌼', 'Cherry Blossom (Hoa anh đào) 🌸', 'Lavender (Hoa oải hương) 🪻'],
        correctIndex: 0,
        explanationEn: 'Hai Phong is celebrated across Vietnam as the City of Red Flamboyant Flowers.',
        explanationVi: 'Hải Phòng tự hào được cả nước gọi tên là Thành phố Hoa Phượng Đỏ.'
      },
      {
        id: 'hp-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which famous biosphere archipelago in Hai Phong is recognized by UNESCO as a World Natural Heritage site?',
        questionVi: 'Quần đảo sinh quyển nổi tiếng nào ở Hải Phòng được UNESCO công nhận là Di sản Thiên nhiên Thế giới?',
        options: ['Cat Ba Archipelago (Quần đảo Cát Bà) 🏝️', 'Con Dao Islands', 'Phu Quoc Island', 'Cham Islands'],
        correctIndex: 0,
        explanationEn: 'Cat Ba Archipelago features extraordinary karst biodiversity recognized by UNESCO.',
        explanationVi: 'Quần đảo Cát Bà sở hữu hệ sinh thái rừng ngập mặn và núi đá vôi kỳ vĩ được UNESCO vinh danh.'
      },
      {
        id: 'hp-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Hai Phong’s geographic importance in English?',
        questionVi: 'Em hãy chọn câu mô tả chính xác nhất về tầm quan trọng địa lý của Hải Phòng bằng tiếng Anh?',
        options: [
          '"Hai Phong is the main northern international maritime seaport connecting Vietnam to world trade." ⚓',
          '"Hai Phong is located in the high Sahara desert." 🏜️',
          '"Hai Phong has no access to the ocean." 🚫',
          '"Hai Phong is covered in frozen glaciers." 🧊'
        ],
        correctIndex: 0,
        explanationEn: 'Hai Phong is the premier maritime trade hub and deep-water gateway in Northern Vietnam.',
        explanationVi: 'Hải Phòng là cửa ngõ cảng biển quốc tế chiến lược kết nối miền Bắc với thương mại toàn cầu.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 3. THÀNH PHỐ HUẾ
  {
    code: 'HUE',
    id: 'vn-34-hue',
    type: 'city',
    nameVi: 'Thành phố Huế',
    nameEn: 'Hue Imperial City',
    capitalVi: 'Quận Trung tâm Huế',
    capitalEn: 'Central Hue District',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    emoji: '🏯',
    image: '/destinations/hue_citadel.jpg',
    geographicLocation: {
      latitude: 16.4637,
      longitude: 107.5909,
      borders: 'Bordered by Quang Tri to the north, Da Nang to the south, the Truong Son range and Laos to the west, and the East Sea to the east.',
      terrain: 'Narrow coastal plains along the gentle Perfume River framed by forested mountain passes and Tam Giang Lagoon.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết Quốc hội khóa XV về thành lập Thành phố Huế trực thuộc Trung ương',
      previousUnitsInvolved: ['Tỉnh Thừa Thiên Huế trở thành Thành phố Huế trực thuộc Trung ương'],
      summaryVi: 'Thành phố trực thuộc Trung ương theo Nghị quyết Quốc hội khóa XV; đô thị di sản văn hóa thế giới đầu tiên của Việt Nam với cảnh quan đôi bờ sông Hương và quần thể di tích Cố đô.',
      summaryEn: 'Centrally governed city under the 15th National Assembly Resolution; Vietnam’s first imperial world heritage city spanning the poetic Perfume River.'
    },
    notableGeographicalCharacteristics: {
      en: 'Bisected by the poetic Perfume River (Sông Hương), with Ngu Binh Mountain standing as a natural royal royal screen.',
      vi: 'Dòng sông Hương thơ mộng chia đôi thành phố, núi Ngự Bình uy nghi che chắn như bức bình phong thiên nhiên.'
    },
    famousLandmarks: [
      {
        nameEn: 'Hue Imperial Citadel (The Purple Forbidden City)',
        nameVi: 'Đại Nội Huế (Hoàng thành Huế)',
        descriptionEn: 'The fortified seat of the Nguyen Dynasty emperors with royal palaces, moat, and majestic gates.',
        descriptionVi: 'Kinh đô triều Nguyễn với hệ thống thành quách, điện Thái Hòa và Ngọ Môn tráng lệ.',
        emoji: '🏯'
      },
      {
        nameEn: 'Thien Mu Pagoda',
        nameVi: 'Chùa Thiên Mụ',
        descriptionEn: 'Seven-story octagonal pagoda built on Ha Khe hill overlooking the winding Perfume River.',
        descriptionVi: 'Ngôi chùa cổ kính 7 tầng soi bóng xuống dòng sông Hương gắn với tiếng chuông ngân trầm bổng.',
        emoji: '🔔'
      },
      {
        nameEn: 'Trang Tien Bridge',
        nameVi: 'Cầu Tràng Tiền',
        descriptionEn: 'Graceful steel arched bridge designed by Gustave Eiffel spanning the Perfume River.',
        descriptionVi: 'Cây cầu thép 6 vài 12 nhịp nối đôi bờ sông Hương soi bóng hoa phượng đỏ.',
        emoji: '🌉'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Bun Bo Hue (Spicy Beef Noodle Soup)',
        nameVi: 'Bún bò Huế',
        descriptionEn: 'Rich, spicy noodle soup with lemongrass fragrance, tender beef shanks, and crab balls.',
        descriptionVi: 'Món bún bò cay nồng đậm đà sả ớt, chả cua và nước dùng thơm lừng nức tiếng.',
        emoji: '🍲'
      },
      {
        nameEn: 'Hue Royal Sweet Soup (Che Hue)',
        nameVi: 'Chè Huế cung đình',
        descriptionEn: 'Royal dessert sweet soups featuring lotus seeds, green beans, and roasted pork in tapioca.',
        descriptionVi: 'Nghệ thuật chè cung đình thanh tao từ hạt sen hồ Tịnh Tâm đến chè bột lọc heo quay độc đáo.',
        emoji: '🍧'
      }
    ],
    culturalTraditions: {
      en: 'Royal Court Music (Nha Nhac), royal banquet etiquette, tranquil Buddhist vegetarian cuisine, and purple Ao Dai elegance.',
      vi: 'Nhã nhạc Cung đình Huế, phong vị ẩm thực cung đình cầu kỳ, nét đằm thắm của tà áo dài tím và nón bài thơ.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Complex of Hue Monuments',
        nameVi: 'Quần thể Di tích Cố đô Huế',
        unescoHeritage: true,
        descriptionEn: 'Vietnam’s first UNESCO World Cultural Heritage site inscribed in 1993.',
        descriptionVi: 'Di sản Văn hóa Thế giới đầu tiên của Việt Nam được UNESCO ghi danh năm 1993.'
      },
      {
        nameEn: 'Hue Royal Court Music (Nha Nhac)',
        nameVi: 'Nhã nhạc Cung đình Huế',
        unescoHeritage: true,
        descriptionEn: 'Masterpiece of the Oral and Intangible Heritage of Humanity celebrating royal ceremonial music.',
        descriptionVi: 'Kiệt tác Di sản Phi vật thể của Nhân loại với dàn nhạc và bài bản cung đình uy nghiêm.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Hue Poem Conical Hat',
        productVi: 'Nón bài thơ xứ Huế',
        occupationEn: 'Conical hat artisan',
        occupationVi: 'Nghệ nhân chằm nón lá bài thơ'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Bach Ma National Park',
        nameVi: 'Vườn quốc gia Bạch Mã',
        type: 'National Park',
        descriptionEn: 'Lush mountain summit with cool alpine air, dramatic Do Quyen waterfalls, and mountain mist.'
      },
      {
        nameEn: 'Tam Giang - Cau Hai Lagoon',
        nameVi: 'Phá Tam Giang',
        type: 'Wetland',
        descriptionEn: 'The largest brackish water lagoon system in Southeast Asia shining golden at sunset.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The former royal capital of unified Vietnam from 1802 to 1945, renowned for gentleness, poetry, and heritage architecture.',
      vi: 'Kinh đô cổ kính của triều Nguyễn, nổi tiếng với nét đằm thắm dịu dàng, nón bài thơ và di sản cung đình.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Imperial',
        phonetic: '/ɪmˈpɪr.i.əl/',
        partOfSpeech: 'adjective',
        meaningEn: 'Relating to royal kings, queens, and emperors of a great dynasty.',
        meaningVi: 'Thuộc về hoàng gia, cung đình',
        exampleSentence: 'The Imperial Citadel was home to Vietnamese emperors.',
        emoji: '👑'
      },
      {
        word: 'Citadel',
        phonetic: '/ˈsɪt̬.ə.dəl/',
        partOfSpeech: 'noun',
        meaningEn: 'A strong fortress protecting a royal city.',
        meaningVi: 'Kinh thành, pháo đài hoàng thành',
        exampleSentence: 'Thick brick walls protect Hue Citadel.',
        emoji: '🏯'
      },
      {
        word: 'Pagoda',
        phonetic: '/pəˈɡoʊ.də/',
        partOfSpeech: 'noun',
        meaningEn: 'A sacred Asian temple tower with tiered roofs.',
        meaningVi: 'Chùa, tháp cổ',
        exampleSentence: 'Thien Mu Pagoda stands beside the Perfume River.',
        emoji: '🛕'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Hue is the imperial city of Vietnam, famous for [monument / river].',
        patternMeaningVi: 'Huế là thành phố cố đô của Việt Nam, nổi tiếng với [di tích / dòng sông].',
        exampleEn: 'Hue is the imperial city of Vietnam, famous for the peaceful Perfume River.',
        exampleVi: 'Huế là thành phố cố đô của Việt Nam, nổi tiếng với dòng sông Hương thanh bình.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step inside the Imperial Citadel of Hue! Long ago, Nguyen Dynasty emperors walked through these majestic golden gates. Listen to the gentle bell of Thien Mu Pagoda chiming over the Perfume River.',
        question: 'Which river flows peacefully through the heart of Hue City?',
        options: ['The Perfume River (Sông Hương) 🌸', 'The Red River (Sông Hồng)', 'The Mekong River (Sông Cửu Long)', 'The Saigon River'],
        correctIndex: 0,
        explanationEn: 'The Perfume River (Sông Hương) is Hue’s poetic symbol flowing past its temples and palaces.',
        explanationVi: 'Sông Hương thơ mộng là dòng sông biểu tượng êm đềm chảy qua trung tâm xứ Huế.'
      },
      speakingMission: {
        roleplayPromptEn: 'Act as a polite student introducing Hue’s world heritage to a guest. Speak with warmth and poise!',
        roleplayPromptVi: 'Hãy đóng vai học sinh thanh lịch xứ Huế giới thiệu di sản cố đô cho bạn bè muôn phương!',
        targetSpeech: 'Hue is a peaceful imperial city with magnificent royal palaces!',
        sampleAudioPhonetic: '/hjuː ɪz ə ˈpiːs.fəl ɪmˈpɪr.i.əl ˈsɪt.i wɪð mæɡˈnɪf.ə.sənt ˈrɔɪ.əl ˈpæl.ə.sɪz!/',
        pronunciationTips: 'Pronounce "IM-PE-RI-AL" clearly in four melodic parts: im-peer-ee-uhl.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'hue-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous UNESCO-recognized royal citadel is located in Hue City?',
        questionVi: 'Kinh thành hoàng gia nổi tiếng nào được UNESCO công nhận tọa lạc tại TP. Huế?',
        options: ['Hue Imperial Citadel (Đại Nội Huế) 🏯', 'Buckingham Palace', 'Sydney Opera House', 'Angkor Wat'],
        correctIndex: 0,
        explanationEn: 'The Complex of Hue Monuments includes the glorious Imperial Citadel of the Nguyen Dynasty.',
        explanationVi: 'Đại Nội Huế là trung tâm của Quần thể Di tích Cố đô Huế được UNESCO ghi danh.'
      },
      {
        id: 'hue-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What is "Nha Nhac Hue" and why is it celebrated globally?',
        questionVi: '"Nhã nhạc Cung đình Huế" là gì và vì sao được thế giới tôn vinh?',
        options: [
          'Vietnamese Royal Court Music recognized as a UNESCO Masterpiece of Intangible Heritage 🎶',
          'A modern pop rock festival',
          'A martial arts competition',
          'A floating wooden market'
        ],
        correctIndex: 0,
        explanationEn: 'Nha Nhac was performed during royal ceremonies and was recognized by UNESCO in 2003.',
        explanationVi: 'Nhã nhạc là âm nhạc cung đình truyền thống tinh hoa được UNESCO vinh danh năm 2003.'
      },
      {
        id: 'hue-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'If you want to describe Hue’s special noodle soup to a tourist, what should you say?',
        questionVi: 'Nếu muốn giới thiệu món bún đặc sản của Huế cho du khách, em sẽ nói câu nào?',
        options: [
          '"You must taste Bun Bo Hue, a famous spicy beef noodle soup infused with fragrant lemongrass!" 🍲',
          '"Hue only has cold pizza." 🍕',
          '"People in Hue eat only dry cereal." 🥣',
          '"Hue food has no spices at all." 🧂'
        ],
        correctIndex: 0,
        explanationEn: 'Bun Bo Hue is widely praised worldwide for its robust lemongrass aroma and tender beef slices.',
        explanationVi: 'Bún bò Huế là món ăn đặc sắc với vị cay nồng của sả ớt và thịt bò mềm đậm đà.'
      }
    ],
    verifiedSource: 'Nghị quyết Quốc hội khóa XV & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 4. THÀNH PHỐ ĐÀ NẴNG
  {
    code: 'DN',
    id: 'vn-34-dn',
    type: 'city',
    nameVi: 'Thành phố Đà Nẵng',
    nameEn: 'Da Nang City',
    capitalVi: 'Quận Hải Châu',
    capitalEn: 'Hai Chau District',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    emoji: '🌉',
    image: '/destinations/danang_dragon_bridge.jpg',
    geographicLocation: {
      latitude: 16.0544,
      longitude: 108.2022,
      borders: 'Bordered by Hue to the north, Quang Nam to the south and west, and the East Sea to the east.',
      terrain: 'Coastal bay surrounded by Son Tra Peninsula, the Marble Mountains, Hai Van Pass, and offshore Paracel Islands (Hoàng Sa).'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Thành phố Đà Nẵng', 'Huyện đảo Hoàng Sa'],
      summaryVi: 'Trung tâm kinh tế biển, công nghệ cao, logistics và đổi mới sáng tạo miền Trung; khẳng định và thực thi chủ quyền toàn vẹn đối với Huyện đảo Hoàng Sa thiêng liêng.',
      summaryEn: 'Central Vietnam’s economic, high-tech, and innovation engine; exercising sacred national sovereignty over the Paracel Islands (Hoàng Sa).',
      islandDistricts: ['Huyện đảo Hoàng Sa (Quần đảo Hoàng Sa, VN)', 'Cù Lao Chàm']
    },
    notableGeographicalCharacteristics: {
      en: 'A dynamic bay city nestled between the misty Hai Van Pass, Son Tra jungle peninsula, and sparkling My Khe Beach.',
      vi: 'Thành phố vịnh biển tuyệt đẹp nép mình dưới chân đèo Hải Vân hùng vĩ, bán đảo Sơn Trà và bãi biển Mỹ Khê.'
    },
    famousLandmarks: [
      {
        nameEn: 'Dragon Bridge (Cầu Rồng)',
        nameVi: 'Cầu Rồng',
        descriptionEn: 'Golden dragon-shaped steel bridge breathing fire and water over the Han River on weekend nights.',
        descriptionVi: 'Cây cầu thép hình rồng vàng kiêu hãnh phun lửa và phun nước bắc qua sông Hàn.',
        emoji: '🐉'
      },
      {
        nameEn: 'Golden Bridge (Bana Hills)',
        nameVi: 'Cầu Vàng (Bà Nà Hills)',
        descriptionEn: 'World-renowned pedestrian sky bridge held aloft by two colossal weathered stone hands in the clouds.',
        descriptionVi: 'Cây cầu đi bộ trên đỉnh núi Bà Nà được nâng đỡ bởi đôi bàn tay khổng lồ giữa làn mây trắng.',
        emoji: '✋'
      },
      {
        nameEn: 'Marble Mountains (Ngu Hanh Son)',
        nameVi: 'Ngũ Hành Sơn',
        descriptionEn: 'Cluster of five dramatic marble and limestone peaks named after the five elements.',
        descriptionVi: 'Quần thể năm ngọn núi đá cẩm thạch mang tên Kim, Mộc, Thủy, Hỏa, Thổ với hang động huyền bí.',
        emoji: '⛰️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Mi Quang (Quang Style Noodles)',
        nameVi: 'Mì Quảng Đà Nẵng',
        descriptionEn: 'Flat rice noodles with shrimp, pork, roasted peanuts, crunchy rice crackers, and fragrant herbs.',
        descriptionVi: 'Món mì sợi dẹt vàng óng ăn kèm tôm thịt, bánh tráng nướng giòn rụm và rau sống tươi mát.',
        emoji: '🍜'
      },
      {
        nameEn: 'Pork Rice Paper Rolls',
        nameVi: 'Bánh tráng cuốn thịt heo',
        descriptionEn: 'Thin tender pork slices with fresh vegetables and green bananas rolled in soft rice paper with Mam Nem dipping sauce.',
        descriptionVi: 'Thịt heo luộc hai đầu da cuộn rau sống bánh tráng chấm mắm nêm đậm đà.',
        emoji: '🌯'
      }
    ],
    culturalTraditions: {
      en: 'Lively coastal hospitality, high-tech modernization, international fireworks festivals, and deep reverence for maritime sovereignty.',
      vi: 'Lòng hiếu khách của người dân miền biển, thành phố đáng sống văn minh, Lễ hội pháo hoa quốc tế và tình yêu chủ quyền biển đảo.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Da Nang International Fireworks Festival (DIFF)',
        nameVi: 'Lễ hội Pháo hoa Quốc tế Đà Nẵng',
        unescoHeritage: false,
        descriptionEn: 'Summer riverfront festival featuring breathtaking musical pyrotechnic teams from around the world.',
        descriptionVi: 'Lễ hội trình diễn pháo hoa quốc tế rực rỡ bên bờ sông Hàn thu hút hàng triệu du khách muôn nơi.'
      },
      {
        nameEn: 'Sovereignty of Hoang Sa (Paracel Islands)',
        nameVi: 'Chủ quyền Huyện đảo Hoàng Sa (Đà Nẵng)',
        unescoHeritage: false,
        descriptionEn: 'Exhibitions and museum affirming Vietnam’s indisputable sacred historical sovereignty over Hoang Sa.',
        descriptionVi: 'Nhà trưng bày Hoàng Sa minh chứng lịch sử khẳng định chủ quyền biển đảo thiêng liêng của Tổ quốc.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Non Nuoc Stone Carvings',
        productVi: 'Điêu khắc đá mỹ nghệ Non Nước',
        occupationEn: 'Stone sculptor & IT software engineer',
        occupationVi: 'Nghệ nhân điêu khắc đá & Kỹ sư phần mềm công nghệ cao'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Son Tra Peninsula Nature Reserve',
        nameVi: 'Bán đảo Sơn Trà',
        type: 'National Park',
        descriptionEn: 'Green lung of Da Nang home to the majestic red-shanked douc langur ("queen of primates").'
      },
      {
        nameEn: 'My Khe Beach',
        nameVi: 'Bãi biển Mỹ Khê',
        type: 'Beach',
        descriptionEn: 'Internationally praised beach with soft golden sands, coconut palms, and gentle rolling surf.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Celebrated as Vietnam’s most livable modern coastal city with innovative architecture and pristine sandy beaches.',
      vi: 'Được tôn vinh là thành phố đáng sống nhất Việt Nam với những cây cầu độc đáo và bờ biển tuyệt mỹ.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Bridge',
        phonetic: '/brɪdʒ/',
        partOfSpeech: 'noun',
        meaningEn: 'A structure built over a river or road so people and cars can cross.',
        meaningVi: 'Cây cầu',
        exampleSentence: 'Dragon Bridge lights up the night sky over Da Nang.',
        emoji: '🌉'
      },
      {
        word: 'Coastal',
        phonetic: '/ˈkoʊ.stəl/',
        partOfSpeech: 'adjective',
        meaningEn: 'Located near or on the coast beside the sea.',
        meaningVi: 'Thuộc miền duyên hải, ven biển',
        exampleSentence: 'Da Nang is a vibrant coastal city with blue waters.',
        emoji: '🌊'
      },
      {
        word: 'Sovereignty',
        phonetic: '/ˈsɑːv.rən.ti/',
        partOfSpeech: 'noun',
        meaningEn: 'The sacred supreme power of a country over its territory, skies, and islands.',
        meaningVi: 'Chủ quyền lãnh thổ thiêng liêng',
        exampleSentence: 'Vietnam holds sacred sovereignty over the Hoang Sa Islands.',
        emoji: '🇻🇳'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Da Nang is famous for its modern bridges and beautiful [beach / mountain].',
        patternMeaningVi: 'Đà Nẵng nổi tiếng với những cây cầu hiện đại và [bãi biển / ngọn núi] xinh đẹp.',
        exampleEn: 'Da Nang is famous for its modern bridges and beautiful My Khe Beach.',
        exampleVi: 'Đà Nẵng nổi tiếng với những cây cầu hiện đại và bãi biển Mỹ Khê tuyệt đẹp.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Look at the Han River in Da Nang! On Saturday and Sunday nights, thousands of people gather near the golden Dragon Bridge. At nine o’clock sharp, the dragon breathes bright fire and water into the starry night sky!',
        question: 'What does the Dragon Bridge do on weekend evenings in Da Nang?',
        options: ['It breathes fire and water 🐉🔥', 'It plays piano music 🎹', 'It flies up into space 🚀', 'It turns into a submarine ⚓'],
        correctIndex: 0,
        explanationEn: 'The famous Dragon Bridge in Da Nang breathes real fire and shoots water on weekend nights.',
        explanationVi: 'Cầu Rồng Đà Nẵng phun lửa và phun nước ấn tượng vào tối thứ Bảy và Chủ Nhật.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an exciting fact about Da Nang with an international classmate!',
        roleplayPromptVi: 'Hãy chia sẻ một điều thú vị về thành phố đáng sống Đà Nẵng cho bạn bè nghe nhé!',
        targetSpeech: 'Da Nang is an amazing city with the famous Dragon Bridge and clean beaches!',
        sampleAudioPhonetic: '/də ˈnæŋ ɪz ən əˈmeɪ.zɪŋ ˈsɪt.i wɪð ðə ˈfeɪ.məs ˈdræɡ.ən brɪdʒ ænd kliːn ˈbiː.tʃɪz!/',
        pronunciationTips: 'Enunciate "A-ma-zing" with excitement, and make "Dragon Bridge" crisp.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'dn-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which animal is the iconic bridge spanning the Han River in Da Nang shaped like?',
        questionVi: 'Cây cầu biểu tượng bắc qua sông Hàn tại Đà Nẵng có hình dáng con vật nào?',
        options: ['A Golden Dragon (Rồng Vàng) 🐉', 'A giant turtle 🐢', 'A white horse 🐴', 'A blue dolphin 🐬'],
        correctIndex: 0,
        explanationEn: 'The Dragon Bridge is designed in the shape of a magnificent golden Ly Dynasty dragon.',
        explanationVi: 'Cầu Rồng Đà Nẵng được thiết kế uy nghi theo dáng hình rồng thời Lý vươn ra biển lớn.'
      },
      {
        id: 'dn-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which island district is under the sovereign administrative governance of Da Nang City?',
        questionVi: 'Huyện đảo nào thuộc quyền quản lý hành chính và chủ quyền thiêng liêng của TP. Đà Nẵng?',
        options: [
          'Hoang Sa Island District (Huyện đảo Hoàng Sa) 🇻🇳',
          'Truong Sa Island District',
          'Phu Quoc Island',
          'Bach Long Vi Island'
        ],
        correctIndex: 0,
        explanationEn: 'Hoang Sa (Paracel Islands) is an administrative island district of Da Nang City, Vietnam.',
        explanationVi: 'Huyện đảo Hoàng Sa là đơn vị hành chính thuộc Thành phố Đà Nẵng, Việt Nam.'
      },
      {
        id: 'dn-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What is the best way to invite a friend to visit the Marble Mountains in Da Nang in English?',
        questionVi: 'Cách tốt nhất để rủ một người bạn đi tham quan Ngũ Hành Sơn ở Đà Nẵng bằng tiếng Anh là gì?',
        options: [
          '"Let’s climb the Marble Mountains to explore the secret stone caves and enjoy the view!" ⛰️',
          '"Don’t ever look at the mountains." ❌',
          '"We should bring a snowman to the beach." ⛄',
          '"The mountains are made of ice cream." 🍦'
        ],
        correctIndex: 0,
        explanationEn: 'Inviting enthusiastically with "Let\'s climb..." and highlighting the caves is natural and polite.',
        explanationVi: 'Câu rủ "Let\'s climb..." lịch sự và hấp dẫn khi giới thiệu danh thắng Ngũ Hành Sơn.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 5. THÀNH PHỐ HỒ CHÍ MINH
  {
    code: 'HCM',
    id: 'vn-34-hcm',
    type: 'city',
    nameVi: 'Thành phố Hồ Chí Minh',
    nameEn: 'Ho Chi Minh City',
    capitalVi: 'Quận 1',
    capitalEn: 'District 1',
    region: 'South',
    zone: 'Đông Nam Bộ',
    emoji: '🏙️',
    image: '/destinations/hcmc_skyline.jpg',
    geographicLocation: {
      latitude: 10.8231,
      longitude: 106.6297,
      borders: 'Bordered by Tay Ninh, Binh Phuoc, Dong Nai, and the East Sea; integrated development space with Binh Duong and Ba Ria - Vung Tau.',
      terrain: 'Dynamic southern metropolis expanding from the Saigon River delta to the mangrove biosphere of Can Gio and offshore Con Dao.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['TP. Hồ Chí Minh', 'Tỉnh Bình Dương', 'Tỉnh Bà Rịa – Vũng Tàu'],
      summaryVi: 'Đô thị đặc biệt, trung tâm kinh tế, tài chính, đổi mới sáng tạo lớn nhất cả nước; sáp nhập và hợp nhất không gian phát triển toàn diện giữa TP. Hồ Chí Minh, Bình Dương và Bà Rịa – Vũng Tàu theo Nghị quyết 202/2025/QH15; quản lý toàn bộ Quần đảo Côn Sơn (Côn Đảo).',
      summaryEn: 'Special national economic, financial, and innovation megacity integrating the industrial corridor of Binh Duong and maritime hub of Ba Ria - Vung Tau; administering Con Son Archipelago (Con Dao).',
      islandDistricts: ['Quần đảo Côn Sơn (Côn Đảo - TP. Hồ Chí Minh)']
    },
    notableGeographicalCharacteristics: {
      en: 'A sprawling megalopolis on the Saigon River branching south to the UNESCO Can Gio Mangrove Forest and oceanic Con Dao Archipelago.',
      vi: 'Đô thị siêu lớn bên sông Sài Gòn, trải dài xuống Khu dự trữ sinh quyển rừng ngập mặn Cần Giờ và quần đảo Côn Sơn ngoài khơi.'
    },
    famousLandmarks: [
      {
        nameEn: 'Independence Palace (Reunification Hall)',
        nameVi: 'Dinh Độc Lập (Hội trường Thống Nhất)',
        descriptionEn: 'Historic national landmark marking the reunification of Vietnam on April 30, 1975.',
        descriptionVi: 'Di tích quốc gia đặc biệt ghi dấu mốc son lịch sử thống nhất non sông ngày 30/4/1975.',
        emoji: '🏛️'
      },
      {
        nameEn: 'Ben Thanh Market',
        nameVi: 'Chợ Bến Thành',
        descriptionEn: 'Iconic bustling central market with its historic four-faced clock tower built in 1914.',
        descriptionVi: 'Ngôi chợ sầm uất với tháp đồng hồ bốn mặt biểu tượng được xây dựng từ năm 1914.',
        emoji: '🏪'
      },
      {
        nameEn: 'Landmark 81 Skyscraper',
        nameVi: 'Tòa nhà Landmark 81',
        descriptionEn: 'The tallest skyscraper in Vietnam rising 461 meters inspired by a bundle of traditional bamboo.',
        descriptionVi: 'Tòa tháp chọc trời cao nhất Việt Nam 461m lấy cảm hứng từ bó tre truyền thống vươn lên mạnh mẽ.',
        emoji: '🏢'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Saigon Broken Rice (Com Tam)',
        nameVi: 'Cơm tấm sườn bì chả Sài Gòn',
        descriptionEn: 'Fragrant broken rice served with caramelized grilled pork chop, egg meatloaf, and sweet fish sauce.',
        descriptionVi: 'Hạt gạo tấm thơm lừng ăn kèm sườn nướng mật ong, bì, chả trứng và nước mắm ớt chua ngọt.',
        emoji: '🍛'
      },
      {
        nameEn: 'Crispy Southern Pancake (Banh Xeo)',
        nameVi: 'Bánh xèo Nam Bộ',
        descriptionEn: 'Golden crispy rice flour crepe filled with pork, shrimp, and bean sprouts wrapped in garden greens.',
        descriptionVi: 'Bánh xèo vàng giòn rụm nhân tôm thịt giá đỗ cuốn cùng các loại rau rừng tươi ngon.',
        emoji: '🥞'
      }
    ],
    culturalTraditions: {
      en: 'Vibrant entrepreneurial spirit, dynamic young creativity, generous southern warmth, and round-the-clock cultural energy.',
      vi: 'Tinh thần năng động sáng tạo, sự hào sảng bao dung của người phương Nam và nhịp sống đô thị không ngủ.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Nghinh Ong (Whale Worship) Festival Can Gio',
        nameVi: 'Lễ hội Nghinh Ông Cần Giờ',
        unescoHeritage: false,
        descriptionEn: 'National intangible cultural heritage honoring the protective sacred whale god of fishermen.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể Quốc gia tôn vinh thần Nam Hải che chở ngư dân bám biển.'
      },
      {
        nameEn: 'Can Gio Mangrove Biosphere Reserve',
        nameVi: 'Khu dự trữ sinh quyển Rừng ngập mặn Cần Giờ',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Biosphere Reserve serving as the vital green lung protecting the metropolis from storms.',
        descriptionVi: 'Khu dự trữ sinh quyển thế giới UNESCO được ví như "lá phổi xanh" thanh lọc không khí cho thành phố.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'High-tech electronics & aerospace software',
        productVi: 'Thiết bị điện tử công nghệ cao & phần mềm',
        occupationEn: 'Tech entrepreneur & logistics specialist',
        occupationVi: 'Chuyên gia công nghệ, tài chính & thương mại'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Con Dao National Park & Marine Sanctuary',
        nameVi: 'Vườn quốc gia Côn Đảo',
        type: 'National Park',
        descriptionEn: 'Pristine oceanic archipelago home to nesting green sea turtles and rare dugong sea cows.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Vietnam’s largest economic powerhouse, technological innovation capital, and educational leader buzzing day and night.',
      vi: 'Đầu tàu kinh tế, trung tâm tài chính, công nghệ và giáo dục lớn nhất cả nước tràn đầy sức sống thanh xuân.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Skyscraper',
        phonetic: '/ˈskaɪˌskreɪ.pɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A very tall, modern building that reaches high into the sky.',
        meaningVi: 'Tòa nhà chọc trời',
        exampleSentence: 'Landmark 81 is a gleaming skyscraper in Ho Chi Minh City.',
        emoji: '🏢'
      },
      {
        word: 'Bustling',
        phonetic: '/ˈbʌs.lɪŋ/',
        partOfSpeech: 'adjective',
        meaningEn: 'Full of lively activity, energy, and happy movement.',
        meaningVi: 'Nhộn nhịp, sôi động',
        exampleSentence: 'The streets of Saigon are bustling with motorbikes and cafes.',
        emoji: '🛵'
      },
      {
        word: 'Metropolis',
        phonetic: '/məˈtrɑː.pəl.ɪs/',
        partOfSpeech: 'noun',
        meaningEn: 'A very large, important, and busy city.',
        meaningVi: 'Đại đô thị hiện đại',
        exampleSentence: 'Ho Chi Minh City is a modern metropolis in Southeast Asia.',
        emoji: '🏙️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Ho Chi Minh City is Vietnam’s largest center of [economy / innovation / culture].',
        patternMeaningVi: 'Thành phố Hồ Chí Minh là trung tâm [kinh tế / đổi mới sáng tạo / văn hóa] lớn nhất Việt Nam.',
        exampleEn: 'Ho Chi Minh City is Vietnam’s largest center of business and innovation.',
        exampleVi: 'Thành phố Hồ Chí Minh là trung tâm kinh tế và đổi mới sáng tạo lớn nhất Việt Nam.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Welcome to Ho Chi Minh City! Look at Landmark 81 shining beside the Saigon River. During the day, colorful boats cruise the river while students enjoy sweet iced milk coffee and crispy broken rice at lively sidewalk cafes.',
        question: 'What is the name of the tall skyscraper beside the Saigon River?',
        options: ['Landmark 81 🏢', 'Eiffel Tower', 'Empire State Building', 'Big Ben'],
        correctIndex: 0,
        explanationEn: 'Landmark 81 is Vietnam’s tallest building standing proudly on the bank of the Saigon River.',
        explanationVi: 'Landmark 81 là tòa nhà chọc trời cao nhất Việt Nam kiêu hãnh bên sông Sài Gòn.'
      },
      speakingMission: {
        roleplayPromptEn: 'Introduce Ho Chi Minh City with vibrant enthusiasm!',
        roleplayPromptVi: 'Hãy giới thiệu về Thành phố Hồ Chí Minh với giọng hào hứng, tràn đầy sức sống!',
        targetSpeech: 'Ho Chi Minh City is a vibrant, modern city full of energy and friendly smiles!',
        sampleAudioPhonetic: '/hoʊ tʃiː mɪn ˈsɪt.i ɪz ə ˈvaɪ.brənt, ˈmɑː.dɚn ˈsɪt.i fʊl əv ˈen.ɚ.dʒi ænd ˈfrend.li smaɪlz!/',
        pronunciationTips: 'Keep "VI-BRANT" punchy and clear, with an energetic pace.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'hcm-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous historic market with a clock tower is an iconic symbol of Ho Chi Minh City?',
        questionVi: 'Ngôi chợ lịch sử nổi tiếng với tháp đồng hồ là biểu tượng của TP. Hồ Chí Minh?',
        options: ['Ben Thanh Market (Chợ Bến Thành) 🏪', 'Dong Xuan Market', 'Han Market', 'Dam Market'],
        correctIndex: 0,
        explanationEn: 'Ben Thanh Market is an enduring architectural symbol of Ho Chi Minh City.',
        explanationVi: 'Chợ Bến Thành là biểu tượng kiến trúc lịch sử tiêu biểu của Sài Gòn - TP. Hồ Chí Minh.'
      },
      {
        id: 'hcm-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Under Resolution 202/2025/QH15, which historic offshore archipelago is administered as part of Ho Chi Minh City?',
        questionVi: 'Theo Nghị quyết 202/2025/QH15, quần đảo ngoài khơi nào do TP. Hồ Chí Minh quản lý?',
        options: [
          'Con Son Archipelago (Con Dao - TP. Hồ Chí Minh) 🏝️',
          'Hoang Sa Archipelago',
          'Co To Archipelago',
          'Cat Ba Archipelago'
        ],
        correctIndex: 0,
        explanationEn: 'Con Dao Archipelago is administered with Ho Chi Minh City under the 2025 reorganization.',
        explanationVi: 'Quần đảo Côn Đảo được sáp nhập quản lý cùng TP. Hồ Chí Minh theo bản đồ hành chính 2025.'
      },
      {
        id: 'hcm-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How would you describe the favorite local dish "Com Tam" in English to a foreign tourist?',
        questionVi: 'Em sẽ giới thiệu món "Cơm tấm" bằng tiếng Anh cho du khách nước ngoài như thế nào?',
        options: [
          '"Com Tam is fragrant broken rice served with savory grilled pork, steamed egg meatloaf, and sweet fish sauce!" 🍛',
          '"Com Tam is a frozen ice cream bar." 🍦',
          '"Com Tam is boiled potato soup." 🥔',
          '"Com Tam is bitter black tea." 🍵'
        ],
        correctIndex: 0,
        explanationEn: 'Com Tam features fragrant broken rice and marinated grilled pork cutlet, a Saigon culinary pride.',
        explanationVi: 'Cơm tấm sườn bì chả là niềm tự hào ẩm thực đường phố Sài Gòn nức tiếng năm châu.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 6. THÀNH PHỐ CẦN THƠ
  {
    code: 'CT',
    id: 'vn-34-ct',
    type: 'city',
    nameVi: 'Thành phố Cần Thơ',
    nameEn: 'Can Tho River City',
    capitalVi: 'Quận Ninh Kiều',
    capitalEn: 'Ninh Kieu District',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    emoji: '🛶',
    image: '/destinations/mekong_delta.jpg',
    geographicLocation: {
      latitude: 10.0452,
      longitude: 105.7469,
      borders: 'Bordered by An Giang, Dong Thap, Vinh Long, and the sea; unified central hub of the Southwest.',
      terrain: 'Fertile alluvial delta crisscrossed by the mighty Hau River, tranquil canals, and fruit orchards.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['TP. Cần Thơ', 'Tỉnh Hậu Giang', 'Tỉnh Sóc Trăng'],
      summaryVi: 'Đô thị hạt nhân trung tâm kinh tế, văn hóa và đầu mối liên kết sản xuất nông thủy sản toàn vùng Tây Nam Bộ, hợp nhất Cần Thơ, Hậu Giang và Sóc Trăng theo Nghị quyết 202/2025/QH15.',
      summaryEn: 'Core metropolitan center of the Mekong Delta, uniting Can Tho, Hau Giang, and Soc Trang into an integrated agricultural, cultural, and eco-tourism hub.'
    },
    notableGeographicalCharacteristics: {
      en: 'Located on the southwest bank of the Hau River, with lush fruit orchards, interconnected riverways, and bustling floating markets.',
      vi: 'Nằm bên bờ tây nam sông Hậu trù phú, bốn mùa cây lành trái ngọt cùng mạng lưới kênh rạch chằng chịt.'
    },
    famousLandmarks: [
      {
        nameEn: 'Cai Rang Floating Market',
        nameVi: 'Chợ nổi Cái Răng',
        descriptionEn: 'Famous wholesale floating market on the river where traders hang samples on bamboo "beo" poles.',
        descriptionVi: 'Chợ nổi bán buôn sầm uất trên sông nơi tiểu thương treo nông sản trên cây bẹo đón khách.',
        emoji: '🛶'
      },
      {
        nameEn: 'Ninh Kieu Wharf',
        nameVi: 'Bến Ninh Kiều',
        descriptionEn: 'Poetic riverfront park overlooking the Hau River, illuminated by cruise boats and lotus footbridges.',
        descriptionVi: 'Bến thuyền thơ mộng bên bờ sông Hậu với cầu đi bộ hoa sen lung linh ánh đèn đêm.',
        emoji: '🌸'
      },
      {
        nameEn: 'Binh Thuy Ancient House',
        nameVi: 'Nhà cổ Bình Thủy',
        descriptionEn: 'Five-compartment French-colonial style mansion with traditional Vietnamese wooden altars built in 1870.',
        descriptionVi: 'Ngôi nhà cổ 5 gian phong cách Pháp - Việt tuyệt mỹ xây dựng từ năm 1870 của gia tộc họ Dương.',
        emoji: '🏡'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Can Tho Grilled Snakehead Fish',
        nameVi: 'Cá lóc nướng trui Cần Thơ',
        descriptionEn: 'Whole freshwater snakehead fish roasted inside fresh rice straw wrapped in lotus leaves.',
        descriptionVi: 'Cá lóc đồng nướng rơm thơm lừng cuốn lá sen non và chấm mắm me chua ngọt.',
        emoji: '🐟'
      },
      {
        nameEn: 'Crispy Banh Cong (Mung Bean & Shrimp Cake)',
        nameVi: 'Bánh cống Cần Thơ',
        descriptionEn: 'Golden deep-fried cup-shaped cake made of rice flour, mung beans, pork, and whole shrimp.',
        descriptionVi: 'Bánh cống giòn rụm với đậu xanh, thịt băm và tôm tươi ăn cùng đĩa rau sống xanh mướt.',
        emoji: '🍤'
      }
    ],
    culturalTraditions: {
      en: 'Gentle riverine lifestyle, Dan Ca Tai Tu chamber folk music, and warm Southwestern hospitality ("Gạo trắng nước trong").',
      vi: 'Lối sống hào sảng sông nước, nghệ thuật Đờn ca tài tử Nam Bộ và truyền thống "Gạo trắng nước trong".'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Southern Traditional Folk Cake Festival',
        nameVi: 'Lễ hội Bánh Dân gian Nam Bộ',
        unescoHeritage: false,
        descriptionEn: 'Annual feast showcasing over 100 varieties of traditional handmade rice cakes and sweet dumplings.',
        descriptionVi: 'Lễ hội quy tụ hàng trăm món bánh truyền thống từ bàn tay tài hoa của các nghệ nhân sông nước.',
        emoji: '🥮'
      },
      {
        nameEn: 'Ok Om Bok Festival & Ngo Boat Race (Soc Trang heritage)',
        nameVi: 'Lễ hội Ok Om Bok & Đua ghe Ngo',
        unescoHeritage: false,
        descriptionEn: 'Vibrant Khmer moon-worshiping festival with thrilling longboat regattas on the Maspero River.',
        descriptionVi: 'Lễ hội cúng Trăng của đồng bào Khmer với giải đua ghe Ngo xé nước tưng bừng.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Phong Dien tropical fruits (durian, mango, mangosteen)',
        productVi: 'Trái cây Phong Điền (sầu riêng, xoài, măng cụt)',
        occupationEn: 'Fruit orchard farmer & aquaculture producer',
        occupationVi: 'Nhà vườn sinh thái & Nuôi trồng thủy sản xuất khẩu'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Lung Ngoc Hoang Nature Reserve (Hau Giang area)',
        nameVi: 'Khu bảo tồn thiên nhiên Lung Ngọc Hoàng',
        type: 'Wetland',
        descriptionEn: 'Biodiverse wetland sanctuary known as the "green lung" of the Mekong Delta with thousands of birds.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Known as the "Western Capital" (Tây Đô), celebrated in folk songs: "Cần Thơ gạo trắng nước trong / Ai đi đến đó lòng không muốn về".',
      vi: 'Mệnh danh là "Thủ phủ miền Tây Đô" thanh bình, gạo trắng nước trong làm say lòng lữ khách.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Floating market',
        phonetic: '/ˈfloʊ.t̬ɪŋ ˈmɑːr.kɪt/',
        partOfSpeech: 'noun',
        meaningEn: 'A vibrant market where vendors buy and sell goods directly on boats on a river.',
        meaningVi: 'Chợ nổi trên sông',
        exampleSentence: 'Boats gather early every dawn at Cai Rang floating market.',
        emoji: '🛶'
      },
      {
        word: 'Orchard',
        phonetic: '/ˈɔːr.tʃɚd/',
        partOfSpeech: 'noun',
        meaningEn: 'A garden or farm where fruit trees grow.',
        meaningVi: 'Vườn cây ăn quả',
        exampleSentence: 'We picked sweet mangos and rambutan in the green orchard.',
        emoji: '🌳'
      },
      {
        word: 'Delta',
        phonetic: '/ˈdel.t̬ə/',
        partOfSpeech: 'noun',
        meaningEn: 'An area of low, flat land where a river divides into several branches before entering the sea.',
        meaningVi: 'Vùng châu thổ sông',
        exampleSentence: 'Can Tho is the heart of the Mekong Delta.',
        emoji: '🌾'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Can Tho is known for its lively floating market and delicious [fruit / fish].',
        patternMeaningVi: 'Cần Thơ được biết đến với chợ nổi nhộn nhịp và [trái cây / cá] tươi ngon.',
        exampleEn: 'Can Tho is known for its lively floating market and sweet tropical fruits.',
        exampleVi: 'Cần Thơ được biết đến với chợ nổi nhộn nhịp và trái cây nhiệt đới ngọt ngào.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Good morning from Can Tho! Hop onto a wooden sampan boat and visit Cai Rang floating market. The river breeze is fresh, and friendly traders hang pineapples and watermelons on tall bamboo poles so buyers can see them from far away.',
        question: 'Why do traders hang fruits on tall bamboo poles at the floating market?',
        options: [
          'So buyers can see what they are selling from far away 🍍',
          'To feed flying wild birds 🕊️',
          'To keep the fruits away from fish 🐟',
          'To decorate Christmas trees 🎄'
        ],
        correctIndex: 0,
        explanationEn: 'Vendors use "beo" poles to hang samples of their produce so passing boats can spot them easily.',
        explanationVi: 'Tiểu thương treo mẫu trái cây trên cây bẹo để người mua từ xa dễ dàng nhận biết món hàng.'
      },
      speakingMission: {
        roleplayPromptEn: 'Invite your friends to take a wooden boat tour in Can Tho!',
        roleplayPromptVi: 'Hãy mời bạn bè cùng ngồi thuyền tham quan sông nước miền Tây Cần Thơ nhé!',
        targetSpeech: 'Come visit Can Tho to explore the amazing floating market!',
        sampleAudioPhonetic: '/kʌm ˈvɪz.ɪt kən ˈtəʊ tuː ɪkˈsplɔːr ðiː əˈmeɪ.zɪŋ ˈfloʊ.t̬ɪŋ ˈmɑːr.kɪt!/',
        pronunciationTips: 'Say "floating market" smoothly: FLOW-ting mar-ket.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'ct-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous floating market on the river is located in Can Tho City?',
        questionVi: 'Chợ nổi trên sông nổi tiếng nào tọa lạc tại Thành phố Cần Thơ?',
        options: ['Cai Rang Floating Market (Chợ nổi Cái Răng) 🛶', 'Nga Nam Market', 'Phung Hiep Market', 'Long Xuyen Market'],
        correctIndex: 0,
        explanationEn: 'Cai Rang is the most famous floating market in Can Tho and the entire Mekong Delta.',
        explanationVi: 'Chợ nổi Cái Răng là chợ nổi lớn và tiêu biểu nhất của thủ phủ miền Tây Cần Thơ.'
      },
      {
        id: 'ct-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What traditional title has Can Tho been lovingly called for generations?',
        questionVi: 'Danh xưng thân thương nào đã gắn liền với Cần Thơ qua nhiều thế hệ?',
        options: [
          'Tay Do (The Western Capital) 🌾',
          'The High Mountain Peak',
          'The Desert Oasis',
          'The Polar City'
        ],
        correctIndex: 0,
        explanationEn: 'Can Tho is affectionately called "Tây Đô", meaning the capital city of the western region.',
        explanationVi: 'Cần Thơ từ lâu đã được mệnh danh là Tây Đô - đô thị hạt nhân trù phú của miền Tây.'
      },
      {
        id: 'ct-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What English sentence would you write in your travel diary about a morning in Can Tho?',
        questionVi: 'Câu tiếng Anh nào em sẽ viết vào nhật ký du lịch về một buổi sáng tại Cần Thơ?',
        options: [
          '"I loved riding a wooden boat at sunrise to taste sweet pineapples at Cai Rang Floating Market!" 🛶',
          '"I skated on frozen ice cubes." ⛸️',
          '"I built a snowman on the sand dune." ⛄',
          '"I drove a rocket to Mars." 🚀'
        ],
        correctIndex: 0,
        explanationEn: 'Riding a wooden boat at sunrise to taste fresh fruits captures the genuine Can Tho experience.',
        explanationVi: 'Ngắm bình minh trên thuyền gỗ và thưởng thức hoa quả chợ nổi là kỷ niệm đẹp nhất ở Cần Thơ.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  }
];
