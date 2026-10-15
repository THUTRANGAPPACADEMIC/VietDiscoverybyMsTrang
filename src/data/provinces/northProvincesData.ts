import { ProvinceEducationalData } from './types';

export const NORTH_PROVINCES_DATA: ProvinceEducationalData[] = [
  // 1. TỈNH TUYÊN QUANG
  {
    code: 'TQ',
    id: 'vn-34-tq',
    type: 'province',
    nameVi: 'Tỉnh Tuyên Quang',
    nameEn: 'Tuyen Quang Province',
    capitalVi: 'TP. Tuyên Quang',
    capitalEn: 'Tuyen Quang City',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    emoji: '🏮',
    image: '/destinations/tuyen_quang_lantern.jpg',
    geographicLocation: {
      latitude: 21.8234,
      longitude: 105.2155,
      borders: 'Bordered by Ha Giang to the north, Cao Bang and Bac Kan to the east, Yen Bai to the west, and Phu Tho and Thai Nguyen to the south.',
      terrain: 'Forested karst mountains, clear rivers (Gam and Lo rivers), and vast emerald hydroelectric reservoirs.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Tuyên Quang', 'Tỉnh Hà Giang (không gian cao nguyên đá)'],
      summaryVi: 'Thủ đô Khu giải phóng, Thủ đô Kháng chiến; liên kết không gian phát triển cao nguyên đá Đồng Văn và lòng hồ sinh thái Na Hang - Lâm Bình theo quy hoạch 2025.',
      summaryEn: 'The revolutionary cradle and historic resistance capital, linking the ecological wonders of Na Hang lake with the dramatic northern karst plateaus.'
    },
    notableGeographicalCharacteristics: {
      en: 'Lush green mountain valleys crossed by the Lo and Gam rivers, featuring the breathtaking Na Hang ecological lake.',
      vi: 'Thung lũng núi rừng xanh ngát bên dòng sông Lô và sông Gâm, nổi bật với lòng hồ sinh thái Na Hang kỳ vĩ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Tan Trao Special National Historic Site',
        nameVi: 'Khu di tích Quốc gia đặc biệt Tân Trào',
        descriptionEn: 'The historic headquarters of the August 1945 Revolution with the sacred Tan Trao Banyan Tree.',
        descriptionVi: 'Thủ đô Kháng chiến nơi Bác Hồ và Trung ương Đảng lãnh đạo Cách mạng Tháng Tám năm 1945.',
        emoji: '🌳'
      },
      {
        nameEn: 'Na Hang - Lam Binh Ecological Lake',
        nameVi: 'Khu sinh thái Na Hang – Lâm Bình',
        descriptionEn: 'Known as "Ha Long Bay amidst the mountains" with 99 limestone peaks and Pac Ta mountain.',
        descriptionVi: 'Được mệnh danh là "Vịnh Hạ Long giữa đại ngàn" với 99 ngọn núi đá vôi trùng điệp soi bóng hồ xanh ngọc.',
        emoji: '🏞️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Ham Yen King Orange',
        nameVi: 'Cam sành Hàm Yên',
        descriptionEn: 'Sweet, juicy, thin-skinned citrus oranges harvested from high mountain hillsides.',
        descriptionVi: 'Cam sành mọng nước, vị ngọt thanh mát nức tiếng trồng trên các sườn núi cao.',
        emoji: '🍊'
      },
      {
        nameEn: 'Na Hang Dried Fish & Five-Color Sticky Rice',
        nameVi: 'Cá lăng Na Hang & Xôi ngũ sắc',
        descriptionEn: 'Grilled river fish seasoned with wild herbs paired with festive five-color steamed rice.',
        descriptionVi: 'Cá suối nướng lá dong thơm lừng ăn kèm xôi nếp dẻo thơm năm màu rực rỡ.',
        emoji: '🍚'
      }
    ],
    culturalTraditions: {
      en: 'Rich heritage of the Tay, Dao, and Hmong ethnic groups, accompanied by the gentle melodies of the Dan Tinh lute.',
      vi: 'Bản sắc văn hóa độc đáo của đồng bào Tày, Dao, Mông bên tiếng đàn Tính và điệu hát Then ngọt ngào.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Thanh Tuyen Mid-Autumn Lantern Festival',
        nameVi: 'Lễ hội Thành Tuyên',
        unescoHeritage: false,
        descriptionEn: 'Vietnam’s largest street lantern parade featuring giant illuminated mythical floats.',
        descriptionVi: 'Lễ hội Trung thu lớn nhất Việt Nam với những mô hình đèn lồng khổng lồ rực rỡ trên đường phố.',
        emoji: '🏮'
      },
      {
        nameEn: 'Then Singing and Dan Tinh Lute Practice',
        nameVi: 'Thực hành Hát Then đàn Tính của người Tày, Nùng, Thái',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Intangible Cultural Heritage celebrating spiritual healing and communal harmony.',
        descriptionVi: 'Di sản Phi vật thể Thế giới UNESCO tôn vinh tiếng hát Then thiêng liêng cầu chúc an lành.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Shan Tuyet High Mountain Tea',
        productVi: 'Chè Shan Tuyết cổ thụ Na Hang',
        occupationEn: 'Forest honey collector & tea farmer',
        occupationVi: 'Người thu hái mật ong rừng & thợ làm chè cổ thụ'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Mo Waterfall (Thac Mo)',
        nameVi: 'Thác Mơ (Thác Pác Ban)',
        type: 'Waterfall',
        descriptionEn: 'Three-tiered cascading waterfall tumbling through virgin rainforest like a silver silk ribbon.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Famed as the "Capital of the Revolutionary Resistance" and home to Vietnam’s most spectacular giant lantern parade.',
      vi: 'Được tôn vinh là "Thủ đô Kháng chiến" và nơi tổ chức lễ hội rước đèn lồng Trung thu kỷ lục thế giới.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Lantern',
        phonetic: '/ˈlæn.tɚn/',
        partOfSpeech: 'noun',
        meaningEn: 'A light inside a colorful decorative frame that can be carried in parades.',
        meaningVi: 'Đèn lồng rước Trung thu',
        exampleSentence: 'Children carry giant glowing lanterns through Tuyen Quang City.',
        emoji: '🏮'
      },
      {
        word: 'Revolution',
        phonetic: '/ˌrev.əˈluː.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'A historic great change when people work together to achieve freedom and peace.',
        meaningVi: 'Cách mạng, thời kỳ đấu tranh giành độc lập',
        exampleSentence: 'Tan Trao was the base of Vietnam’s historic revolution.',
        emoji: '⭐'
      },
      {
        word: 'Reservoir',
        phonetic: '/ˈrez.ɚ.vwɑːr/',
        partOfSpeech: 'noun',
        meaningEn: 'A large natural or man-made lake used to store water and generate clean power.',
        meaningVi: 'Hồ chứa nước, hồ thủy điện sinh thái',
        exampleSentence: 'Na Hang is a crystal-clear mountain reservoir.',
        emoji: '🏞️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Tuyen Quang is famous for the colorful [festival / landmark].',
        patternMeaningVi: 'Tuyên Quang nổi tiếng với [lễ hội / địa danh] rực rỡ sắc màu.',
        exampleEn: 'Tuyen Quang is famous for the colorful Thanh Tuyen Lantern Festival.',
        exampleVi: 'Tuyên Quang nổi tiếng với Lễ hội Đèn lồng Thành Tuyên rực rỡ sắc màu.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Welcome to Tuyen Quang! In autumn, the city comes alive with the Thanh Tuyen Festival. People build giant lanterns shaped like shining dragons, golden fish, and flying birds. It is Vietnam’s biggest lantern festival!',
        question: 'What shapes do people build for the giant lanterns in Tuyen Quang?',
        options: ['Dragons, golden fish, and flying birds 🐉🐟', 'Snowmen and polar bears ⛄', 'Space rockets only 🚀', 'Empty boxes 📦'],
        correctIndex: 0,
        explanationEn: 'Artisans craft giant creative lanterns resembling dragons, peacocks, and folk legends.',
        explanationVi: 'Các nghệ nhân khéo léo làm những chiếc đèn khổng lồ hình rồng phượng, cá chép hóa rồng.'
      },
      speakingMission: {
        roleplayPromptEn: 'Tell an English-speaking penpal about Tuyen Quang’s lanterns!',
        roleplayPromptVi: 'Kể cho bạn bè quốc tế nghe về lễ hội đèn lồng khổng lồ ở Tuyên Quang nào!',
        targetSpeech: 'Tuyen Quang has the biggest giant lantern festival in Vietnam!',
        sampleAudioPhonetic: '/twiːən kwɑːŋ hæz ðə ˈbɪɡ.ɪst ˈdʒaɪ.ənt ˈlæn.tɚn ˈfes.tə.vəl ɪn ˌvjetˈnɑːm!/',
        pronunciationTips: 'Stress "BIG-GEST" and "LAN-TERN" clearly and joyfully!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'tq-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous festival in Tuyen Quang is known for giant glowing street lanterns?',
        questionVi: 'Lễ hội nổi tiếng nào ở Tuyên Quang được biết đến với những chiếc đèn lồng khổng lồ trên phố?',
        options: ['Thanh Tuyen Festival (Lễ hội Thành Tuyên) 🏮', 'Cherry Blossom Festival', 'Tulip Festival', 'Ice Festival'],
        correctIndex: 0,
        explanationEn: 'Thanh Tuyen Festival is famous for Vietnam’s largest creative Mid-Autumn lantern parade.',
        explanationVi: 'Lễ hội Thành Tuyên nổi danh cả nước với những mô hình đèn lồng rước trên phố hoành tráng nhất.'
      },
      {
        id: 'tq-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why is Tan Trao in Tuyen Quang revered as the "Resistance Capital" of Vietnam?',
        questionVi: 'Vì sao Tân Trào (Tuyên Quang) được trân trọng gọi là "Thủ đô Kháng chiến" của Việt Nam?',
        options: [
          'It served as the revolutionary headquarters of President Ho Chi Minh in 1945 ⭐',
          'It was an ancient ocean port ⚓',
          'It is the biggest modern desert in Asia 🏜️',
          'It was an ancient Roman palace 🏛️'
        ],
        correctIndex: 0,
        explanationEn: 'Tan Trao was the cradle of the August Revolution where President Ho Chi Minh stayed and worked.',
        explanationVi: 'Tân Trào là căn cứ địa cách mạng nơi Bác Hồ và Trung ương chỉ đạo Tổng khởi nghĩa Tháng Tám.'
      },
      {
        id: 'tq-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Choose the best English invitation to visit Na Hang lake in Tuyen Quang:',
        questionVi: 'Chọn câu rủ bạn đi khám phá hồ Na Hang ở Tuyên Quang hay nhất bằng tiếng Anh:',
        options: [
          '"Let’s cruise on Na Hang Lake to see the emerald water and 99 limestone peaks!" 🏞️',
          '"We should stay inside and look at a blank wall." ⏹️',
          '"The lake is made of plastic." 🥤',
          '"Do not look at the water." 🚫'
        ],
        correctIndex: 0,
        explanationEn: '"Let\'s cruise on Na Hang Lake..." expresses a welcoming, enthusiastic invitation to experience the scenic peaks.',
        explanationVi: 'Câu mời rủ ngắm làn nước ngọc bích và 99 ngọn núi đá vôi là lời giới thiệu tuyệt đẹp về Na Hang.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 2. TỈNH CAO BẰNG
  {
    code: 'CB',
    id: 'vn-34-cb',
    type: 'province',
    nameVi: 'Tỉnh Cao Bằng',
    nameEn: 'Cao Bang Province',
    capitalVi: 'TP. Cao Bằng',
    capitalEn: 'Cao Bang City',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    emoji: '🌊',
    image: '/destinations/ban_gioc_waterfall.jpg',
    geographicLocation: {
      latitude: 22.6667,
      longitude: 106.2667,
      borders: 'Bordered by China to the north and east, Ha Giang and Tuyen Quang to the west, and Bac Kan and Lang Son to the south.',
      terrain: 'Dramatic karst mountains, clear border rivers (Quay Son River), pristine underground caves, and fertile highland valleys.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Cao Bằng'],
      summaryVi: 'Địa bàn cội nguồn cách mạng Pác Bó, danh thắng thác Bản Giốc hùng vĩ và Công viên địa chất toàn cầu UNESCO Non nước Cao Bằng.',
      summaryEn: 'Home to the revolutionary cradle of Pac Bo, the majestic Ban Gioc Waterfall, and the UNESCO Non Nuoc Cao Bang Global Geopark.'
    },
    notableGeographicalCharacteristics: {
      en: 'Dominated by towering limestone peaks, subterranean karst river systems, and Southeast Asia’s most spectacular international border waterfall.',
      vi: 'Địa hình núi đá vôi trùng điệp, hệ thống sông ngầm kỳ vĩ và ngọn thác xuyên biên giới đẹp nhất Đông Nam Á.'
    },
    famousLandmarks: [
      {
        nameEn: 'Ban Gioc Waterfall',
        nameVi: 'Thác Bản Giốc',
        descriptionEn: 'The fourth largest border waterfall in the world, cascading in multiple tiers of thundering white foam.',
        descriptionVi: 'Ngọn thác tự nhiên lớn thứ tư thế giới nằm trên đường biên giới quốc gia, nước đổ trắng xóa tầng tầng lớp lớp.',
        emoji: '🌊'
      },
      {
        nameEn: 'Pac Bo Special National Historic Site',
        nameVi: 'Khu di tích Quốc gia đặc biệt Pác Bó',
        descriptionEn: 'The sacred cave and Lenin Stream where President Ho Chi Minh lived after returning to Vietnam in 1941.',
        descriptionVi: 'Hang Cốc Bó và dòng suối Lê-nin trong vắt nơi Bác Hồ trở về Tổ quốc lãnh đạo cách mạng mùa xuân năm 1941.',
        emoji: '🏞️'
      },
      {
        nameEn: 'Nguom Ngao Cave',
        nameVi: 'Động Ngườm Ngao',
        descriptionEn: 'An astonishing natural limestone cave filled with millions of years old sparkling stalactites shaped like stone lotuses.',
        descriptionVi: 'Kỳ quan hang động đá vôi dài hàng ngàn mét với nhũ đá hình búp sen vàng lấp lánh kỳ ảo.',
        emoji: '🪨'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Cao Bang Steamed Rice Rolls (Banh Cuon Cao Bang)',
        nameVi: 'Bánh cuốn canh Cao Bằng',
        descriptionEn: 'Delicate steamed rice sheets filled with minced pork served with a bowl of hot bone broth and egg.',
        descriptionVi: 'Bánh cuốn mềm mướt ăn cùng bát nước dùng xương ninh ngọt thanh nóng hổi và trứng chần.',
        emoji: '🍲'
      },
      {
        nameEn: 'Trung Khanh Chestnuts',
        nameVi: 'Hạt dẻ Trùng Khánh',
        descriptionEn: 'Large, plump, naturally sweet roasted chestnuts gathered from autumn mountain orchards.',
        descriptionVi: 'Hạt dẻ to tròn, vỏ mỏng, khi nướng chín bùi ngọt thơm phức của xứ sở Trùng Khánh.',
        emoji: '🌰'
      }
    ],
    culturalTraditions: {
      en: 'Folk songs of the Tay and Nung peoples (Sli and Luon singing), stone stilt houses in Phuc Sen village, and blacksmithing artistry.',
      vi: 'Làn điệu lượn Slương, điệu then ngân vang, làng rèn truyền thống Phúc Sen và nếp nhà sàn đá cổ kính.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Non Nuoc Cao Bang UNESCO Global Geopark',
        nameVi: 'Công viên Địa chất Toàn cầu UNESCO Non nước Cao Bằng',
        unescoHeritage: true,
        descriptionEn: 'World Geopark recognized for 500 million years of geological history and rich ethnic diversity.',
        descriptionVi: 'Công viên địa chất toàn cầu lưu giữ dấu ấn tiến hóa 500 triệu năm của vỏ Trái Đất và văn hóa bản địa.'
      },
      {
        nameEn: 'Ban Gioc Waterfall Tourism Festival',
        nameVi: 'Lễ hội Du lịch Thác Bản Giốc',
        unescoHeritage: false,
        descriptionEn: 'Annual autumn festival celebrating border peace, local crafts, and ethnic dances beside the roaring falls.',
        descriptionVi: 'Lễ hội mùa thu tôn vinh vẻ đẹp ngọn thác biên cương hữu nghị và tình đoàn kết các dân tộc anh em.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Phuc Sen Hand-forged Knives & Blacksmith Tools',
        productVi: 'Dao rèn thủ công Phúc Sen',
        occupationEn: 'Traditional blacksmith artisan',
        occupationVi: 'Nghệ nhân thợ rèn người Nùng An'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Mat Than Mountain (Angel Eye Mountain)',
        nameVi: 'Núi Mắt Thần (Núi Thủng)',
        type: 'Geopark',
        descriptionEn: 'A unique mountain with a giant natural circular hole piercing completely through its rocky peak.',
        descriptionVi: 'Ngọn núi độc nhất vô nhị với hang thủng tròn kỳ vĩ xuyên qua lòng núi giữa thảo nguyên cỏ xanh.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The land of emerald waters, roaring international waterfalls, and deep patriotic history where the revolutionary journey began.',
      vi: 'Mảnh đất cội nguồn non nước nghìn thu, ngọn thác biên cương Bản Giốc kiêu hãnh và suối Lê-nin trong vắt.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Waterfall',
        phonetic: '/ˈwɑː.t̬ɚ.fɑːl/',
        partOfSpeech: 'noun',
        meaningEn: 'Water falling from a higher place to a lower place over steep rocks.',
        meaningVi: 'Thác nước',
        exampleSentence: 'Ban Gioc is the most magnificent waterfall in Vietnam.',
        emoji: '🌊'
      },
      {
        word: 'Stalactite',
        phonetic: '/stəˈlæk.taɪt/',
        partOfSpeech: 'noun',
        meaningEn: 'A mineral stone column hanging down from the ceiling of a cave like an icicle.',
        meaningVi: 'Thạch nhũ đá rủ từ trần hang động',
        exampleSentence: 'Sparkling stalactites hang inside Nguom Ngao Cave.',
        emoji: '🪨'
      },
      {
        word: 'Geopark',
        phonetic: '/ˈdʒiː.oʊ.pɑːrk/',
        partOfSpeech: 'noun',
        meaningEn: 'A protected area with rare rocks, fossils, and mountains recognized globally by UNESCO.',
        meaningVi: 'Công viên địa chất toàn cầu',
        exampleSentence: 'Non Nuoc Cao Bang is an international UNESCO Geopark.',
        emoji: '🗺️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Ban Gioc Waterfall in Cao Bang is one of the most beautiful [natural wonders / waterfalls] in the world.',
        patternMeaningVi: 'Thác Bản Giốc ở Cao Bằng là một trong những [kỳ quan thiên nhiên / thác nước] đẹp nhất thế giới.',
        exampleEn: 'Ban Gioc Waterfall in Cao Bang is one of the most beautiful waterfalls in the world.',
        exampleVi: 'Thác Bản Giốc ở Cao Bằng là một trong những thác nước đẹp nhất thế giới.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Listen to the roaring water! You are standing near Ban Gioc Waterfall in Cao Bang Province. The river Quay Son flows gently between green rice fields before plunging over white limestone ledges into a deep turquoise pool.',
        question: 'What color is the pool of water below Ban Gioc Waterfall?',
        options: ['Deep turquoise blue 🌊', 'Bright orange 🟠', 'Dark purple 🟣', 'Chocolate brown 🟤'],
        correctIndex: 0,
        explanationEn: 'The mineral-rich river water forms a sparkling deep turquoise pool at the base of the waterfall.',
        explanationVi: 'Làn nước giàu khoáng chất tạo nên hồ nước trong xanh màu ngọc bích dưới chân thác.'
      },
      speakingMission: {
        roleplayPromptEn: 'Describe the wonder of Ban Gioc Waterfall out loud to your classmates!',
        roleplayPromptVi: 'Hãy mô tả vẻ đẹp hùng vĩ của Thác Bản Giốc cho các bạn trong lớp nghe nào!',
        targetSpeech: 'Ban Gioc is a breathtaking waterfall with roaring white water!',
        sampleAudioPhonetic: '/bɑːn zɒk ɪz ə ˈbreθˌteɪ.kɪŋ ˈwɑː.t̬ɚ.fɑːl wɪð ˈrɔːr.ɪŋ waɪt ˈwɑː.t̬ɚ!/',
        pronunciationTips: 'Say "breath-taking" with clear enthusiasm and emphasize "roaring".'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'cb-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which world-famous international waterfall is located in Cao Bang Province?',
        questionVi: 'Thác nước quốc tế nổi tiếng thế giới nào tọa lạc tại Tỉnh Cao Bằng?',
        options: ['Ban Gioc Waterfall (Thác Bản Giốc) 🌊', 'Niagara Falls', 'Victoria Falls', 'Datanla Waterfall'],
        correctIndex: 0,
        explanationEn: 'Ban Gioc Waterfall on the Quay Son river is Cao Bang’s most famous natural wonder.',
        explanationVi: 'Thác Bản Giốc bên dòng sông Quây Sơn là danh thắng nổi tiếng nhất của Cao Bằng.'
      },
      {
        id: 'cb-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What historic place in Cao Bang did Uncle Ho return to in 1941 to direct the Vietnamese revolution?',
        questionVi: 'Địa danh lịch sử nào ở Cao Bằng nơi Bác Hồ trở về Tổ quốc vào mùa xuân năm 1941?',
        options: [
          'Pac Bo Cave and Lenin Stream (Hang Cốc Bó & Suối Lê-nin) 🏞️',
          'Cat Ba Island',
          'Ben Thanh Market',
          'Hue Citadel'
        ],
        correctIndex: 0,
        explanationEn: 'Uncle Ho lived in Coc Bo Cave at Pac Bo and named the crystal stream after Lenin in 1941.',
        explanationVi: 'Bác Hồ đã sống tại hang Cốc Bó (Pác Bó) và đặt tên cho dòng suối trong vắt là Suối Lê-nin.'
      },
      {
        id: 'cb-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Which English sentence expresses your admiration for Cao Bang’s natural beauty best?',
        questionVi: 'Câu tiếng Anh nào bày tỏ sự thán phục trước vẻ đẹp thiên nhiên Cao Bằng hay nhất?',
        options: [
          '"Cao Bang is truly a paradise of towering limestone mountains and crystal waterfalls!" 🏞️',
          '"Cao Bang has no plants or water." 🌵',
          '"Cao Bang is under the ocean surface." 🤿',
          '"There are no mountains in Cao Bang." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Calling Cao Bang a "paradise of towering limestone mountains and crystal waterfalls" reflects its UNESCO geopark landscape.',
        explanationVi: 'Mô tả Cao Bằng là thiên đường của núi đá vôi và thác nước trong vắt thể hiện trọn vẹn cảnh sắc nơi đây.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 3. TỈNH LÀO CAI
  {
    code: 'LCA',
    id: 'vn-34-lca',
    type: 'province',
    nameVi: 'Tỉnh Lào Cai',
    nameEn: 'Lao Cai Province',
    capitalVi: 'TP. Lào Cai',
    capitalEn: 'Lao Cai City',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    emoji: '🏔️',
    image: '/destinations/fansipan_peak.jpg',
    geographicLocation: {
      latitude: 22.4856,
      longitude: 103.9707,
      borders: 'Bordered by China to the north, Ha Giang to the east, Yen Bai to the south, and Lai Chau to the west.',
      terrain: 'Highest mountain ranges in Indochina (Hoang Lien Son), deep alpine valleys, cascading streams, and terraced rice hills.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Lào Cai', 'Tỉnh Yên Bái (kết nối hành lang sông Hồng & Thác Bà)'],
      summaryVi: 'Địa bàn có đỉnh Fansipan 3.143m (nóc nhà Đông Dương), khu du lịch quốc gia Sa Pa và cửa khẩu quốc tế đường sắt, đường bộ; liên kết không gian phát triển Tây Bắc.',
      summaryEn: 'Home to Mount Fansipan (3,143m, "Roof of Indochina"), the misty national resort town of Sa Pa, and vital international railway and road gateways.'
    },
    notableGeographicalCharacteristics: {
      en: 'Dominated by the formidable Hoang Lien Son range, misty sub-alpine climate, snow in winter, and sculpted rice terraces.',
      vi: 'Dãy Hoàng Liên Sơn hùng vĩ bậc nhất, khí hậu á nhiệt đới trong sương mù, tuyết rơi mùa đông và ruộng bậc thang kỳ vĩ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Fansipan Peak ("The Roof of Indochina")',
        nameVi: 'Đỉnh Fansipan (3.143m)',
        descriptionEn: 'The highest summit in Vietnam and Indochina rising 3,143 meters into the sea of clouds.',
        descriptionVi: 'Đỉnh núi cao nhất Việt Nam và toàn cõi Đông Dương với cột mốc 3.143m sừng sững giữa biển mây.',
        emoji: '🏔️'
      },
      {
        nameEn: 'Sa Pa Stone Church & Central Square',
        nameVi: 'Nhà thờ Đá Sa Pa',
        descriptionEn: 'Gothic stone church built by the French in 1895 standing majestically at the center of misty Sa Pa town.',
        descriptionVi: 'Nhà thờ đá cổ phong cách Gothic xây dựng từ năm 1895 biểu tượng cho thị xã sương mù Sa Pa.',
        emoji: '⛪'
      },
      {
        nameEn: 'Muong Hoa Valley Terraced Fields',
        nameVi: 'Ruộng bậc thang Thung lũng Mường Hoa',
        descriptionEn: 'Endless golden cascading rice terraces carved into mountain slopes by generations of Hmong and Giay farmers.',
        descriptionVi: 'Những thửa ruộng bậc thang uốn lượn như dải lụa vàng óng ả chảy dài theo thung lũng Mường Hoa.',
        emoji: '🌾'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Sa Pa Grilled Salmon & Sturgeon Hotpot',
        nameVi: 'Lẩu cá tầm & cá hồi Sa Pa',
        descriptionEn: 'Fresh cold-water fish raised in icy alpine springs served with mountain forest vegetables and bamboo shoots.',
        descriptionVi: 'Cá hồi cá tầm nuôi trong dòng nước lạnh trên núi cao nấu lẩu chua thanh ấm áp giữa mùa đông sương mây.',
        emoji: '🍲'
      },
      {
        nameEn: 'Thang Co (Traditional Highland Stew)',
        nameVi: 'Thắng cố ngựa Bắc Hà',
        descriptionEn: 'Traditional savory stew simmered in large iron cauldrons seasoned with cardamom and star anise.',
        descriptionVi: 'Món ăn truyền thống đậm đà của đồng bào Mông nấu trong chảo lớn với thảo quả thơm nức.',
        emoji: '🥘'
      }
    ],
    culturalTraditions: {
      en: 'Vibrant highland love markets, colorful brocade weaving of Hmong and Red Dao women, and spring Gầu Tào festivals.',
      vi: 'Chợ phiên rực rỡ sắc màu thổ cẩm, nét văn hóa chợ tình Sa Pa và lễ hội Gầu Tào cầu may đầu năm.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Bac Ha Sunday Ethnic Fair',
        nameVi: 'Chợ phiên Bắc Hà',
        unescoHeritage: false,
        descriptionEn: 'Famous mountain fair where villagers gather in festive costumes to trade horses, brocade, and forest honey.',
        descriptionVi: 'Chợ phiên vùng cao nổi tiếng nhất Tây Bắc rực rỡ váy hoa của thiếu nữ Mông hoa và người Dao đỏ.'
      },
      {
        nameEn: 'Red Dao Herbal Bath Heritage',
        nameVi: 'Bài thuốc tắm lá người Dao đỏ',
        unescoHeritage: false,
        descriptionEn: 'Traditional medicine heritage using dozens of wild forest herbs for vitality and rejuvenation.',
        descriptionVi: 'Tri thức bản địa quý giá về các loài thảo dược rừng sâu giúp phục hồi sức khỏe diệu kỳ.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Handmade brocade bags and embroidered jackets',
        productVi: 'Thổ cẩm thêu tay Sa Pa',
        occupationEn: 'Brocade weaver & mountain trek guide',
        occupationVi: 'Người thêu thổ cẩm & Hướng dẫn viên leo núi Fansipan'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'O Quy Ho Pass (Heaven’s Gate)',
        nameVi: 'Đèo Ô Quy Hồ (Cổng Trời)',
        type: 'Mountain',
        descriptionEn: 'One of Vietnam’s "Four Great Mountain Passes" winding around towering cliffs above a sea of white clouds.'
      },
      {
        nameEn: 'Silver Waterfall (Thac Bac)',
        nameVi: 'Thác Bạc Sa Pa',
        type: 'Waterfall',
        descriptionEn: 'A thundering 200-meter silver cascade falling from the mountain heights into a green ravine.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Known for its magical misty atmosphere, winter snowfalls, and the iconic conquest of Mount Fansipan.',
      vi: 'Xứ sở mù sương kỳ ảo, nơi có tuyết trắng mùa đông và ước mơ chinh phục đỉnh Fansipan của tuổi trẻ.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Summit',
        phonetic: '/ˈsʌm.ɪt/',
        partOfSpeech: 'noun',
        meaningEn: 'The highest point or top of a mountain.',
        meaningVi: 'Đỉnh núi cao nhất',
        exampleSentence: 'We reached the summit of Mount Fansipan above the clouds.',
        emoji: '🏔️'
      },
      {
        word: 'Terrace',
        phonetic: '/ˈter.əs/',
        partOfSpeech: 'noun',
        meaningEn: 'A flat strip of ground on a hillside like a giant step used for farming rice.',
        meaningVi: 'Ruộng bậc thang',
        exampleSentence: 'Golden rice grows on the mountain terraces.',
        emoji: '🌾'
      },
      {
        word: 'Mist',
        phonetic: '/mɪst/',
        partOfSpeech: 'noun',
        meaningEn: 'A light cloud of tiny water drops hanging in the mountain air.',
        meaningVi: 'Làn sương mù mờ ảo',
        exampleSentence: 'Cool mist floats gently over Sa Pa in the morning.',
        emoji: '🌫️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Mount Fansipan in Lao Cai is known as the [Roof of Indochina / highest mountain].',
        patternMeaningVi: 'Đỉnh Fansipan ở Lào Cai được biết đến là [Nóc nhà Đông Dương / ngọn núi cao nhất].',
        exampleEn: 'Mount Fansipan in Lao Cai is known as the Roof of Indochina.',
        exampleVi: 'Đỉnh Fansipan ở Lào Cai được biết đến là Nóc nhà Đông Dương.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'High up in the Hoang Lien Son mountains of Lao Cai Province, Mount Fansipan touches the sky at 3,143 meters. In autumn, the terraced fields of Muong Hoa Valley turn a brilliant golden color under the mountain sunshine.',
        question: 'How high is Mount Fansipan, the Roof of Indochina?',
        options: ['3,143 meters 🏔️', '100 meters', '5,000 meters', '500 meters'],
        correctIndex: 0,
        explanationEn: 'Fansipan stands at an exact elevation of 3,143 meters, making it the highest summit in Vietnam and Indochina.',
        explanationVi: 'Đỉnh Fansipan cao 3.143 mét, là đỉnh núi cao nhất Việt Nam và ba nước Đông Dương.'
      },
      speakingMission: {
        roleplayPromptEn: 'Imagine standing at the summit of Fansipan. Shout your accomplishment proudly in English!',
        roleplayPromptVi: 'Hãy tưởng tượng em đang đứng trên đỉnh Fansipan và hô to câu này đầy tự hào!',
        targetSpeech: 'I reached the summit of Mount Fansipan, the Roof of Indochina!',
        sampleAudioPhonetic: '/aɪ riːtʃt ðə ˈsʌm.ɪt əv maʊnt ˈfæn.sɪ.pæn, ðə ruːf əv ˌɪn.doʊˈtʃaɪ.nə!/',
        pronunciationTips: 'Pronounce "summit" cleanly: SUM-mit, and speak with triumphant energy!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'lca-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'What is the title given to Mount Fansipan (3,143m) in Lao Cai Province?',
        questionVi: 'Danh hiệu nào được trao cho đỉnh núi Fansipan (3.143m) tại Tỉnh Lào Cai?',
        options: ['The Roof of Indochina (Nóc nhà Đông Dương) 🏔️', 'The Desert Oasis', 'The Ocean Gateway', 'The Coral Reef'],
        correctIndex: 0,
        explanationEn: 'Fansipan is proudly titled the "Roof of Indochina" because it is the highest peak in Vietnam, Laos, and Cambodia.',
        explanationVi: 'Fansipan được gọi là Nóc nhà Đông Dương vì là đỉnh núi cao nhất ba nước Việt Nam, Lào và Campuchia.'
      },
      {
        id: 'lca-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why do farmers in Sa Pa sculpt rice into steep mountain terraces?',
        questionVi: 'Vì sao đồng bào các dân tộc ở Sa Pa làm ruộng bậc thang trên sườn núi dốc?',
        options: [
          'To conserve water and prevent soil erosion while growing rice on steep slopes 🌾',
          'To build tennis courts 🎾',
          'To park airplanes ✈️',
          'To make water slides 🌊'
        ],
        correctIndex: 0,
        explanationEn: 'Terraces allow mountain farmers to hold water and cultivate wet rice on steep mountainsides effectively.',
        explanationVi: 'Ruộng bậc thang giúp giữ nước và chống xói mòn để trồng lúa nước trên địa hình núi dốc.'
      },
      {
        id: 'lca-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Which English sentence would you use to suggest visiting Sa Pa in the winter?',
        questionVi: 'Câu tiếng Anh nào em dùng để gợi ý bạn đến thăm Sa Pa vào mùa đông?',
        options: [
          '"Bundle up in warm clothes and come to Sa Pa to see the magical mountain mist and white snow!" ❄️',
          '"Wear swimming trunks because it is boiling hot." 🩳',
          '"Sa Pa is located underwater." 🐠',
          '"Do not look at the sky in Sa Pa." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Advising to "bundle up" and enjoy the "mist and white snow" accurately describes Sa Pa’s alpine winter experience.',
        explanationVi: 'Lời khuyên mặc ấm ngắm sương mây và tuyết trắng thể hiện nét độc đáo của mùa đông Sa Pa.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 4. TỈNH ĐIỆN BIÊN
  {
    code: 'DB',
    id: 'vn-34-db',
    type: 'province',
    nameVi: 'Tỉnh Điện Biên',
    nameEn: 'Dien Bien Province',
    capitalVi: 'TP. Điện Biên Phủ',
    capitalEn: 'Dien Bien Phu City',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    emoji: '🌸',
    image: '/destinations/dien_bien_monument.jpg',
    geographicLocation: {
      latitude: 21.3869,
      longitude: 103.0234,
      borders: 'Bordered by China and Laos to the west and northwest, Lai Chau to the north, and Son La to the east.',
      terrain: 'Broad Muong Thanh mountain valley surrounded by towering jagged peaks and deep mountain passes.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Điện Biên'],
      summaryVi: 'Địa bàn ngã ba biên giới Việt - Lào - Trung (A Pa Chải); quần thể di tích Chiến thắng lịch sử Điện Biên Phủ "Lừng lẫy năm châu, chấn động địa cầu".',
      summaryEn: 'Home to the tri-border milestone A Pa Chải (Vietnam - Laos - China) and the historic Dien Bien Phu Victory battlefield sites.'
    },
    notableGeographicalCharacteristics: {
      en: 'Centered around Muong Thanh Valley, the largest fertile valley in the Northwest, famous for blooming white Ban flowers in spring.',
      vi: 'Trung tâm là cánh đồng Mường Thanh bạt ngàn - cánh đồng lớn nhất Tây Bắc, nở rộ hoa ban trắng tinh khôi mỗi độ xuân về.'
    },
    famousLandmarks: [
      {
        nameEn: 'Dien Bien Phu Victory Monument',
        nameVi: 'Tượng đài Chiến thắng Điện Biên Phủ',
        descriptionEn: 'Monumental bronze statue on D1 Hill commemorating the historic victory of May 7, 1954.',
        descriptionVi: 'Tượng đài đồng sừng sững trên đồi D1 ghi dấu chiến thắng hiển hách ngày 7/5/1954.',
        emoji: '⭐'
      },
      {
        nameEn: 'A1 Hill Historical Battlefield',
        nameVi: 'Di tích Đồi A1',
        descriptionEn: 'Strategic fortified hilltop with underground tunnels, French bunker, and commemorative underground mine crater.',
        descriptionVi: 'Cứ điểm khốc liệt đồi A1 với hầm hào, xe tăng và hố bộc phá nghìn cân lịch sử.',
        emoji: '🛡️'
      },
      {
        nameEn: 'A Pa Chai Westernmost Point',
        nameVi: 'Cột mốc ngã ba biên giới A Pa Chải',
        descriptionEn: 'Vietnam’s westernmost border milestone where "one rooster crow is heard across three countries" (Vietnam, Laos, China).',
        descriptionVi: 'Điểm cực Tây của Tổ quốc tại xã Sín Thầu nơi "một tiếng gà gáy ba nước cùng nghe".',
        emoji: '🚩'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Dien Bien Fragrant Seng Cu Rice',
        nameVi: 'Gạo Séng Cù Điện Biên',
        descriptionEn: 'Sweet, fragrant, pearl-white rice grown with pure mineral water in the Muong Thanh basin.',
        descriptionVi: 'Hạt gạo Séng Cù dẻo thơm nức tiếng được nuôi dưỡng bởi phù sa cánh đồng Mường Thanh.',
        emoji: '🍚'
      },
      {
        nameEn: 'Smoked Buffalo Meat (Thit Trau Gac Bep)',
        nameVi: 'Thịt trâu gác bếp Điện Biên',
        descriptionEn: 'Lean buffalo meat marinated with wild Mac Khen pepper slowly wood-smoked over kitchen hearths.',
        descriptionVi: 'Thịt trâu tẩm ướp hạt mắc khén và ớt rừng hong khói bếp củi thơm đượm vị núi rừng.',
        emoji: '🥩'
      }
    ],
    culturalTraditions: {
      en: 'Gracious Xoe dance of the Thai people around bonfires, graceful Han Khuong singing, and spring white Ban flower festivals.',
      vi: 'Điệu múa Xòe Thái uyển chuyển trong vòng tay bạn bè, hội Hạn Khuống và Lễ hội Hoa Ban trắng ngần.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'White Ban Flower Festival',
        nameVi: 'Lễ hội Hoa Ban Điện Biên',
        unescoHeritage: false,
        descriptionEn: 'Annual spring cultural festival celebrating the blooming of pure white Ban blossoms across mountain ridges.',
        descriptionVi: 'Lễ hội mùa xuân rực rỡ khi hoa ban trắng nở ngập các sườn đồi, tôn vinh tình yêu và văn hóa Tây Bắc.',
        emoji: '🌸'
      },
      {
        nameEn: 'Art of Xoe Dance of the Thai People',
        nameVi: 'Nghệ thuật Xòe Thái',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Intangible Cultural Heritage of Humanity symbolizing unity, hospitality, and joy.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể của Nhân loại đại diện cho tinh thần đoàn kết và lòng hiếu khách nồng hậu.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Mac Khen wild mountain pepper & woven Thai brocade scarves (Khan Pieu)',
        productVi: 'Gia vị Mắc khén & Khăn Piêu Thái',
        occupationEn: 'Rice farmer & traditional brocade weaver',
        occupationVi: 'Nông dân cấy lúa Mường Thanh & Nghệ nhân thêu khăn piêu'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Pa Khoang Lake',
        nameVi: 'Hồ Pá Khoang',
        type: 'Lake',
        descriptionEn: 'Tranquil freshwater lake famous for Cherry Blossom Island blooming pink in the early spring mist.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'World-renowned for the legendary Dien Bien Phu Victory of 1954 and the fragrant sea of white Ban blossoms in March.',
      vi: 'Nổi tiếng năm châu với Chiến thắng Điện Biên Phủ chấn động địa cầu và mùa hoa ban nở trắng ngút ngàn tháng Ba.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Victory',
        phonetic: '/ˈvɪk.tɚ.i/',
        partOfSpeech: 'noun',
        meaningEn: 'Success in a struggle, contest, or battle.',
        meaningVi: 'Chiến thắng vinh quang',
        exampleSentence: 'The Dien Bien Phu victory brought peace to Vietnam.',
        emoji: '⭐'
      },
      {
        word: 'Blossom',
        phonetic: '/ˈblɑː.səm/',
        partOfSpeech: 'noun',
        meaningEn: 'A flower on a tree or bush, especially blooming in spring.',
        meaningVi: 'Hoa nở rực rỡ vào mùa xuân',
        exampleSentence: 'White Ban blossoms cover the green hills in March.',
        emoji: '🌸'
      },
      {
        word: 'Milestone',
        phonetic: '/ˈmaɪl.stoʊn/',
        partOfSpeech: 'noun',
        meaningEn: 'A stone pillar marking a border or an important historic event.',
        meaningVi: 'Cột mốc biên cương hoặc dấu mốc lịch sử',
        exampleSentence: 'A Pa Chai is Vietnam’s westernmost border milestone.',
        emoji: '🚩'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Dien Bien is world-famous for its [historic victory / white Ban flowers].',
        patternMeaningVi: 'Điện Biên nổi tiếng khắp thế giới với [chiến thắng lịch sử / hoa ban trắng].',
        exampleEn: 'Dien Bien is world-famous for its historic Dien Bien Phu victory in 1954.',
        exampleVi: 'Điện Biên nổi tiếng khắp thế giới với chiến thắng lịch sử Điện Biên Phủ năm 1954.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Spring has arrived in Dien Bien! Pure white Ban flowers bloom on every hillside along Muong Thanh Valley. Listen to the joyful laughter of dancers joining hands in the traditional Xoe dance around a warm bonfire.',
        question: 'Which dance brings people together in a circle of friendship in Dien Bien?',
        options: ['The traditional Xoe dance (Múa Xòe Thái) 💃', 'Ballet dancing 🩰', 'Tap dancing 👞', 'Hip-hop breakdance 🎧'],
        correctIndex: 0,
        explanationEn: 'The traditional Xoe dance brings people together holding hands in circle dances recognized by UNESCO.',
        explanationVi: 'Điệu múa Xòe Thái kết nối mọi người nắm chặt tay nhau trong vòng xòe đoàn kết được UNESCO vinh danh.'
      },
      speakingMission: {
        roleplayPromptEn: 'Practice saying this sentence with respect and admiration!',
        roleplayPromptVi: 'Đọc to câu nói tôn vinh chiến thắng lịch sử Điện Biên Phủ bằng tiếng Anh nhé!',
        targetSpeech: 'Dien Bien Phu is a historic city famous for the victory of 1954!',
        sampleAudioPhonetic: '/diːən biːən ˈfuː ɪz ə hɪˈstɔːr.ɪk ˈsɪt.i ˈfeɪ.məs fɔːr ðə ˈvɪk.tɚ.i əv naɪnˈtiːn ˈfɪf.ti fɔːr!/',
        pronunciationTips: 'Pronounce "his-TOR-ic" with gentle stress on the middle syllable.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'db-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which flower is the beloved poetic symbol of Dien Bien Province blooming in spring?',
        questionVi: 'Loài hoa nào là biểu tượng thơ mộng của Điện Biên nở rộ vào mùa xuân?',
        options: ['White Ban Flower (Hoa Ban trắng) 🌸', 'Sunflower 🌻', 'Yellow Tulip 🌷', 'Red Rose 🌹'],
        correctIndex: 0,
        explanationEn: 'White Ban flowers blanket the mountain passes and valleys of Dien Bien every spring.',
        explanationVi: 'Hoa ban trắng tinh khôi nở rộ khắp núi đồi thung lũng Điện Biên khi mùa xuân về.'
      },
      {
        id: 'db-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why is A Pa Chai in Dien Bien called the place where "one rooster crow is heard across three countries"?',
        questionVi: 'Vì sao A Pa Chải ở Điện Biên được gọi là nơi "một tiếng gà gáy ba nước cùng nghe"?',
        options: [
          'It is the tri-border junction milestone of Vietnam, Laos, and China 🚩',
          'It has the loudest roosters in the world 🐓',
          'It is built on a radio tower 📻',
          'It is located on an airplane wing ✈️'
        ],
        correctIndex: 0,
        explanationEn: 'A Pa Chai marks the exact junction point where the borders of Vietnam, Laos, and China meet.',
        explanationVi: 'Cột mốc A Pa Chải là ngã ba biên giới giáp ranh giữa ba nước Việt Nam, Lào và Trung Quốc.'
      },
      {
        id: 'db-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How should you introduce the historic Muong Thanh Valley to an international friend in English?',
        questionVi: 'Em nên giới thiệu cánh đồng lịch sử Mường Thanh cho bạn bè quốc tế như thế nào bằng tiếng Anh?',
        options: [
          '"Muong Thanh is the largest fertile valley in the Northwest, famous for sweet rice and heroic history!" 🌾',
          '"Muong Thanh is filled with boiling hot volcanic lava." 🌋',
          '"Muong Thanh has no soil or crops." 🚫',
          '"Muong Thanh is frozen solid all year round." 🧊'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting Muong Thanh as the largest fertile valley famous for rice and history is accurate and educational.',
        explanationVi: 'Giới thiệu Mường Thanh là cánh đồng lớn nhất Tây Bắc với gạo thơm và lịch sử hào hùng rất chuẩn xác.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 5. TỈNH LAI CHÂU
  {
    code: 'LC',
    id: 'vn-34-lc',
    type: 'province',
    nameVi: 'Tỉnh Lai Châu',
    nameEn: 'Lai Chau Province',
    capitalVi: 'TP. Lai Châu',
    capitalEn: 'Lai Chau City',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    emoji: '🏔️',
    image: '/destinations/fansipan_peak.jpg',
    geographicLocation: {
      latitude: 22.3962,
      longitude: 103.4589,
      borders: 'Bordered by China to the north, Lao Cai to the east, Dien Bien to the southwest, and Son La to the south.',
      terrain: 'Serrated mountain peaks including Pu Si Lung (3,083m) and Bach Moc Luong Tu, deep river gorges of the Da River, and cool high plateaus.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Lai Châu'],
      summaryVi: 'Tỉnh biên giới Tây Bắc có vị trí quốc phòng chiến lược; địa hình núi cao với đỉnh Pu Si Lung và dòng sông Đà hùng vĩ.',
      summaryEn: 'Strategic northwestern border province characterized by soaring peaks like Pu Si Lung (3,083m) and the mighty Da River basin.'
    },
    notableGeographicalCharacteristics: {
      en: 'Home to 6 of the 10 highest mountain summits in Vietnam, mist-veiled Sin Ho Plateau, and dramatic caves like Tien Son.',
      vi: 'Sở hữu 6 trong 10 đỉnh núi cao nhất Việt Nam, cao nguyên Sìn Hồ bồng bềnh mây trắng và quần thể hang động Tiên Sơn kỳ vĩ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Pu Si Lung Mountain Peak (3,083m)',
        nameVi: 'Đỉnh núi Pu Si Lung (3.083m)',
        descriptionEn: 'Vietnam’s second highest and most remote peak guarding border milestone 42.',
        descriptionVi: 'Ngọn núi hoang sơ cao thứ hai Việt Nam sừng sững bên cột mốc biên cương 42 huyền thoại.',
        emoji: '⛰️'
      },
      {
        nameEn: 'Sin Ho Cloud Plateau',
        nameVi: 'Cao nguyên Sìn Hồ',
        descriptionEn: 'Cool highland plateau shrouded in year-round clouds, famous for medicinal herb gardens and clean springs.',
        descriptionVi: 'Cao nguyên mây ngàn quanh năm mát lạnh được ví như Sa Pa thứ hai của vùng Tây Bắc.',
        emoji: '☁️'
      },
      {
        nameEn: 'Na Khuong Giant Water Wheels',
        nameVi: 'Cọn nước Nà Khương',
        descriptionEn: 'Traditional bamboo water wheels built by Thai villagers lifting river water to hillside rice paddies.',
        descriptionVi: 'Hàng chục guồng nước tre khổng lồ quay đều ngày đêm đưa nước tưới mát đồng lúa bản Nà Khương.',
        emoji: '🎡'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Lai Chau Black Chicken & Forest Cordyceps',
        nameVi: 'Gà đen H’Mông & Đông trùng hạ thảo Lai Châu',
        descriptionEn: 'Nutritious herbal soup prepared with native black chicken and precious highland cordyceps.',
        descriptionVi: 'Món súp gà đen hầm đông trùng hạ thảo bổ dưỡng của vùng núi cao quanh năm sương lạnh.',
        emoji: '🍲'
      },
      {
        nameEn: 'Smoked Pork in Forest Herbs',
        nameVi: 'Thịt lợn cắp nách hun khói Lai Châu',
        descriptionEn: 'Free-range sweet pork marinated in wild cardamom, seeds, and roasted over fragrant cinnamon wood.',
        descriptionVi: 'Thịt lợn cắp nách ướp hạt dổi và nướng than hồng thơm ngọt tự nhiên.',
        emoji: '🍖'
      }
    ],
    culturalTraditions: {
      en: 'Unique customs of 20 ethnic groups including the Lu people with black-lacquered teeth and exquisite brocade loom artistry.',
      vi: 'Văn hóa đặc sắc của 20 dân tộc anh em như tục nhuộm răng đen của người Lự và khung cửi dệt thổ cẩm cầu kỳ.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Then Kin Pang Festival of the White Thai',
        nameVi: 'Lễ hội Then Kin Pang của người Thái trắng',
        unescoHeritage: false,
        descriptionEn: 'Joyful spring river festival thanking heaven for good health, abundant rains, and bumper harvests.',
        descriptionVi: 'Lễ hội tạ ơn trời đất ban mưa thuận gió hòa, cầu mùa màng tươi tốt bên dòng suối rộn rã tiếng cười.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Tan Uyen Ancient Tea & Lai Chau Ginseng',
        productVi: 'Chè búp Tân Uyên & Sâm Lai Châu quý hiếm',
        occupationEn: 'Ginseng botanist & highland tea cultivator',
        occupationVi: 'Người trồng sâm quý & Người chăm sóc chè búp'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Tien Son Grotto Complex',
        nameVi: 'Quần thể Động Tiên Sơn (Động Đao)',
        type: 'Cave',
        descriptionEn: 'Fairyland cave system filled with colorful limestone curtains and clear underground streams.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The rugged kingdom of towering peaks, giant bamboo water wheels, and rare mountain ginseng.',
      vi: 'Xứ sở của những đỉnh núi chọc trời, cọn nước tre kỳ diệu và loài sâm Lai Châu vô cùng quý báu.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Plateau',
        phonetic: '/plætˈoʊ/',
        partOfSpeech: 'noun',
        meaningEn: 'A large, high area of flat land high above sea level.',
        meaningVi: 'Cao nguyên trên cao',
        exampleSentence: 'Sin Ho is a cool green plateau in Lai Chau.',
        emoji: '🏞️'
      },
      {
        word: 'Water wheel',
        phonetic: '/ˈwɑː.t̬ɚ wiːl/',
        partOfSpeech: 'noun',
        meaningEn: 'A big round wheel turned by running river water to lift water to fields.',
        meaningVi: 'Cọn nước, guồng nước tre',
        exampleSentence: 'Giant water wheels turn slowly along the river in Na Khuong.',
        emoji: '🎡'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Lai Chau is home to majestic mountains like [mountain name].',
        patternMeaningVi: 'Lai Châu là quê hương của những ngọn núi hùng vĩ như [tên ngọn núi].',
        exampleEn: 'Lai Chau is home to majestic mountains like Pu Si Lung.',
        exampleVi: 'Lai Châu là quê hương của những ngọn núi hùng vĩ như Pu Si Lung.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'High up in Lai Chau Province, look down at the river! Villagers have built giant wooden wheels made entirely from bamboo. The wheels turn quietly with the current, scooping up cold water and lifting it up to thirsty rice terraces.',
        question: 'What are the giant water wheels in Lai Chau made of?',
        options: ['Natural mountain bamboo 🎋', 'Heavy metal iron 🔩', 'Plastic bottles 🧴', 'Car tires 🛞'],
        correctIndex: 0,
        explanationEn: 'The traditional water wheels (cọn nước) are crafted entirely by hand using natural bamboo.',
        explanationVi: 'Các cọn nước truyền thống được bà con làm hoàn toàn thủ công từ tre nứa tự nhiên.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an inspiring line about Lai Chau’s towering peaks!',
        roleplayPromptVi: 'Đọc to câu giới thiệu về vùng núi cao Lai Châu đầy nhiệt huyết!',
        targetSpeech: 'Lai Chau has towering mountains and magical bamboo water wheels!',
        sampleAudioPhonetic: '/laɪ tʃaʊ hæz ˈtaʊ.ɚ.ɪŋ ˈmaʊn.tɪnz ænd ˈmædʒ.ɪ.kəl bæmˈbuː ˈwɑː.t̬ɚ wiːlz!/',
        pronunciationTips: 'Keep "TOW-er-ing" tall and powerful, and smile on "magical"!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'lc-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous mountain summit in Lai Chau rises over 3,083 meters near border milestone 42?',
        questionVi: 'Đỉnh núi nổi tiếng nào ở Lai Châu cao 3.083m tọa lạc gần cột mốc biên cương 42?',
        options: ['Pu Si Lung Peak ⛰️', 'Ba Vi Mountain', 'Ngu Hanh Son', 'Lang Biang Peak'],
        correctIndex: 0,
        explanationEn: 'Pu Si Lung at 3,083m is Vietnam’s second highest mountain, located in Lai Chau.',
        explanationVi: 'Đỉnh Pu Si Lung cao 3.083m là ngọn núi cao thứ hai của nước ta thuộc Tỉnh Lai Châu.'
      },
      {
        id: 'lc-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'How do traditional bamboo water wheels help mountain farmers in Lai Chau?',
        questionVi: 'Cọn nước tre truyền thống giúp ích gì cho người nông dân vùng cao Lai Châu?',
        options: [
          'They lift water from rivers up into hillside rice paddies naturally without electricity 🌾',
          'They generate wind to fly kites 🪁',
          'They cook hot rice noodles 🍜',
          'They catch sea fish 🎣'
        ],
        correctIndex: 0,
        explanationEn: 'Water wheels use the river current to raise water into bamboo troughs that water terraced fields.',
        explanationVi: 'Cọn nước tận dụng sức nước tự nhiên để đưa nước lên cao tưới tiêu cho các chân ruộng bậc thang.'
      },
      {
        id: 'lc-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Choose the best sentence to describe Lai Chau’s Sin Ho Plateau in English:',
        questionVi: 'Chọn câu văn tiếng Anh hay nhất để miêu tả Cao nguyên Sìn Hồ ở Lai Châu:',
        options: [
          '"Sin Ho is a breathtaking highland plateau surrounded by cool floating clouds and fresh mountain air!" ☁️',
          '"Sin Ho is an underwater submarine base." ⚓',
          '"There is no air on Sin Ho Plateau." 🚫',
          '"Sin Ho is made of candy." 🍬'
        ],
        correctIndex: 0,
        explanationEn: 'Describing Sin Ho as a highland plateau with floating clouds and fresh mountain air captures its nature perfectly.',
        explanationVi: 'Miêu tả Sìn Hồ là cao nguyên bồng bềnh mây trắng và không khí trong lành thể hiện đúng nét đặc trưng.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 6. TỈNH SƠN LA
  {
    code: 'SL',
    id: 'vn-34-sl',
    type: 'province',
    nameVi: 'Tỉnh Sơn La',
    nameEn: 'Son La Province',
    capitalVi: 'TP. Sơn La',
    capitalEn: 'Son La City',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    emoji: '🥛',
    image: '/destinations/moc_chau_tea.jpg',
    geographicLocation: {
      latitude: 21.3283,
      longitude: 103.9148,
      borders: 'Bordered by Yen Bai and Lai Chau to the north, Dien Bien to the west, Phu Tho and Hoa Binh to the east, and Laos to the south.',
      terrain: 'Spacious rolling green plateaus (Moc Chau and Na San) traversed by the mighty Da and Ma rivers.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Sơn La', 'Tỉnh Hòa Bình (không gian lưu vực hồ sông Đà)'],
      summaryVi: 'Vùng cao nguyên Mộc Châu - Nà Sản, hệ thống thủy điện Hòa Bình - Sơn La trên lưu vực sông Đà; thủ phủ sữa tươi, chè ô long và mận hậu Tây Bắc.',
      summaryEn: 'Home to the lush Moc Chau Plateau, Southeast Asia’s largest Son La Hydroelectric Dam on the Da River, and rich fruit orchards.'
    },
    notableGeographicalCharacteristics: {
      en: 'Famed for the cool Moc Chau Plateau with heart-shaped tea hills, white plum blossom orchards, and massive hydro power reservoirs.',
      vi: 'Nổi danh với Cao nguyên Mộc Châu bốn mùa xanh ngát, đồi chè trái tim, rừng mận trắng tinh khôi và hồ thủy điện sông Đà kỳ vĩ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Moc Chau Heart-Shaped Tea Hill',
        nameVi: 'Đồi chè Trái Tim Mộc Châu',
        descriptionEn: 'Artistic swirling green tea plantation planted in the romantic shape of a giant heart.',
        descriptionVi: 'Đồi chè xanh mướt uốn lượn được tạo hình trái tim khổng lồ ngọt ngào giữa cao nguyên.',
        emoji: '💚'
      },
      {
        nameEn: 'Son La Hydroelectric Power Plant',
        nameVi: 'Nhà máy Thủy điện Sơn La',
        descriptionEn: 'The largest hydroelectric dam in Southeast Asia spanning the mighty Da River.',
        descriptionVi: 'Công trình thủy điện thế kỷ lớn nhất Đông Nam Á kiêu hãnh trên dòng sông Đà cuộn sóng.',
        emoji: '⚡'
      },
      {
        nameEn: 'Son La Historic Prison & To Hieu Peach Tree',
        nameVi: 'Nhà tù Sơn La & Cây đào Tô Hiệu',
        descriptionEn: 'French colonial prison fortress where revolutionary fighter To Hieu tended a blooming peach tree symbol of resilience.',
        descriptionVi: 'Di tích lịch sử nhà tù thực dân và cây đào Tô Hiệu biểu tượng cho khí phách kiên trung bất khuất.',
        emoji: '🌸'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Moc Chau Fresh Milk & Sweet Dairy Treats',
        nameVi: 'Sữa tươi & Bánh sữa Mộc Châu',
        descriptionEn: 'Pure creamy cow milk and sweet milk cakes produced by happy herds grazing on cool plateau pastures.',
        descriptionVi: 'Dòng sữa tươi béo ngậy ngọt lành từ những đàn bò sữa khỏe mạnh gặm cỏ trên đồng cỏ xanh.',
        emoji: '🥛'
      },
      {
        nameEn: 'Moc Chau Crisp Ruby Plums (Man Hau)',
        nameVi: 'Mận hậu Mộc Châu',
        descriptionEn: 'Juicy ruby-red plums dusted with white bloom picked fresh in the Na Ka Valley.',
        descriptionVi: 'Những trái mận hậu đỏ mọng căng tràn phủ lớp phấn trắng giòn ngọt nức tiếng thung lũng Nà Ka.',
        emoji: '🍒'
      }
    ],
    culturalTraditions: {
      en: 'Warm hospitality of 12 fraternal ethnic groups, graceful Thai circle dances, and lively spring flower harvest festivals.',
      vi: 'Tình cảm nồng hậu của 12 dân tộc anh em, điệu xòe hoa bên bếp lửa nhà sàn và lễ hội hái mận đầu hạ rộn ràng.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Moc Chau Plum Picking Festival',
        nameVi: 'Lễ hội Hái mận Mộc Châu',
        unescoHeritage: false,
        descriptionEn: 'Summer agricultural festival in Na Ka Valley where visitors pick and taste fresh sun-ripened plums.',
        descriptionVi: 'Ngày hội hái mận đầu mùa rộn rã tại thung lũng mận Nà Ka thu hút đông đảo du khách.',
        emoji: '🧺'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Oolong green tea & Moc Chau natural yogurt',
        productVi: 'Chè Ô Long Mộc Châu & Sữa chua nếp cẩm',
        occupationEn: 'Dairy farm manager & tea master',
        occupationVi: 'Chủ trang trại bò sữa & Nghệ nhân chế biến trà ô long'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Dai Yem Waterfall (Glass Bridge)',
        nameVi: 'Thác Dải Yếm & Cầu kính Tình Yêu',
        type: 'Waterfall',
        descriptionEn: 'A graceful multi-tiered waterfall cascading like a delicate silk sash across limestone cliffs.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Celebrated as the "Green Pearl of the Northwest" producing rich milk, fragrant tea, and powering millions of Vietnamese homes.',
      vi: 'Được mệnh danh là "Viên ngọc xanh Tây Bắc", vựa sữa tươi, đồi chè và cái nôi thắp sáng nguồn điện năng quốc gia.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Hydroelectric',
        phonetic: '/ˌhaɪ.droʊ.ɪˈlek.trɪk/',
        partOfSpeech: 'adjective',
        meaningEn: 'Producing electricity by the force of rushing water.',
        meaningVi: 'Thủy điện (dùng sức nước tạo ra dòng điện)',
        exampleSentence: 'Son La has the biggest hydroelectric plant in Southeast Asia.',
        emoji: '⚡'
      },
      {
        word: 'Pasture',
        phonetic: '/ˈpæs.tʃɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A large green field covered with sweet grass where dairy cows eat.',
        meaningVi: 'Đồng cỏ chăn thả gia súc',
        exampleSentence: 'Spotted dairy cows graze peacefully on the Moc Chau pasture.',
        emoji: '🐄'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Moc Chau in Son La is famous for its [green tea hills / fresh milk / sweet plums].',
        patternMeaningVi: 'Mộc Châu ở Sơn La nổi tiếng với [đồi chè xanh / sữa tươi / mận ngọt].',
        exampleEn: 'Moc Chau in Son La is famous for its fresh milk and heart-shaped tea hills.',
        exampleVi: 'Mộc Châu ở Sơn La nổi tiếng với sữa tươi thơm ngon và đồi chè hình trái tim.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Take a deep breath of fresh mountain air in Moc Chau, Son La Province! Everywhere you look, rolling hills are blanketed with neat rows of green tea. Friendly black-and-white cows munch on grass in the morning sunshine.',
        question: 'What animals graze happily on the green pastures of Moc Chau?',
        options: ['Spotted dairy cows 🐄🥛', 'Wild sea penguins 🐧', 'Desert camels 🐪', 'Polar bears 🐻‍❄️'],
        correctIndex: 0,
        explanationEn: 'Moc Chau is renowned for its happy dairy herds producing delicious fresh milk.',
        explanationVi: 'Mộc Châu nổi tiếng với các nông trường bò sữa cung cấp dòng sữa tươi thơm mát cho cả nước.'
      },
      speakingMission: {
        roleplayPromptEn: 'Invite your friends to explore the rolling green hills of Moc Chau!',
        roleplayPromptVi: 'Rủ bạn bè cùng đi khám phá đồi chè Mộc Châu bằng tiếng Anh thật hay nào!',
        targetSpeech: 'Moc Chau is a beautiful plateau with delicious fresh milk and green tea!',
        sampleAudioPhonetic: '/mɒk tʃaʊ ɪz ə ˈbjuː.t̬ə.fəl plætˈoʊ wɪð dɪˈlɪʃ.əs freʃ mɪlk ænd ɡriːn tiː!/',
        pronunciationTips: 'Pronounce "plateau" with style: pla-TOE, and sound warm on "fresh milk".'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'sl-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which clean energy power plant on the Da River in Son La is the largest in Southeast Asia?',
        questionVi: 'Nhà máy năng lượng sạch nào trên sông Đà ở Sơn La lớn nhất Đông Nam Á?',
        options: ['Son La Hydroelectric Power Plant ⚡', 'Coal power station', 'Solar panel farm', 'Windmill garden'],
        correctIndex: 0,
        explanationEn: 'The Son La Hydroelectric Power Plant is the largest hydro dam facility in Southeast Asia.',
        explanationVi: 'Thủy điện Sơn La là nhà máy thủy điện lớn nhất Đông Nam Á trên dòng sông Đà.'
      },
      {
        id: 'sl-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What shape are the tea bushes famously sculpted into on the rolling hills of Moc Chau?',
        questionVi: 'Những luống chè trên đồi Mộc Châu được tạo hình nghệ thuật thành hình gì nổi tiếng?',
        options: ['A giant Heart shape 💚', 'A star ⭐', 'A triangle 🔺', 'A square ⬛'],
        correctIndex: 0,
        explanationEn: 'The famous Heart-shaped Tea Hill in Moc Chau is loved by visitors for its romantic design.',
        explanationVi: 'Đồi chè hình trái tim là danh thắng biểu tượng được đông đảo du khách ghé thăm ở Mộc Châu.'
      },
      {
        id: 'sl-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Son La’s Moc Chau Plateau in a healthy breakfast blog post in English?',
        questionVi: 'Em sẽ viết câu tiếng Anh nào giới thiệu Mộc Châu cho một bài đăng về bữa sáng bổ dưỡng?',
        options: [
          '"Start your day like Moc Chau with pure fresh milk and antioxidant-rich green tea!" 🥛🍵',
          '"Eat plastic spoons for breakfast." 🥄',
          '"Only drink salty ocean water." 🌊',
          '"Breakfast does not exist." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Connecting Moc Chau to pure fresh milk and green tea highlights its wholesome, healthy farm culture.',
        explanationVi: 'Mô tả Mộc Châu gắn liền với sữa tươi thanh khiết và trà xanh thể hiện đúng nét nông nghiệp sạch.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 7. TỈNH THÁI NGUYÊN
  {
    code: 'TNG',
    id: 'vn-34-tng',
    type: 'province',
    nameVi: 'Tỉnh Thái Nguyên',
    nameEn: 'Thai Nguyen Province',
    capitalVi: 'TP. Thái Nguyên',
    capitalEn: 'Thai Nguyen City',
    region: 'North',
    zone: 'Trung du và Miền núi phía Bắc',
    emoji: '🍵',
    image: '/destinations/thai_nguyen_tea.jpg',
    geographicLocation: {
      latitude: 21.5942,
      longitude: 105.8482,
      borders: 'Bordered by Bac Kan to the north, Tuyen Quang and Vinh Phuc to the west, Lang Son and Bac Giang to the east, and Hanoi to the south.',
      terrain: 'Rolling emerald tea hills, picturesque freshwater lake Nui Coc, and the historic ATK Dinh Hoa resistance valley.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Thái Nguyên'],
      summaryVi: 'Trung tâm công nghiệp, giáo dục đại học vùng Đông Bắc; gắn với vùng chè đặc sản Tân Cương "Đệ nhất danh trà" và khu du lịch hồ Núi Cốc.',
      summaryEn: 'Industrial, high-tech, and educational powerhouse of Northern Vietnam, famed as the "First Grand Tea Capital" (Tan Cuong Tea).'
    },
    notableGeographicalCharacteristics: {
      en: 'Undulating fertile hills blessed with mineral-rich soil and cool breezes from the Tam Dao range, creating the world’s finest green tea.',
      vi: 'Những triền đồi bát úp trù phú đón gió mát từ dãy Tam Đảo, tạo nên chất đất màu mỡ cho cây chè hảo hạng nhất thế giới.'
    },
    famousLandmarks: [
      {
        nameEn: 'Tan Cuong Special Tea Specialty Zone',
        nameVi: 'Vùng chè đặc sản Tân Cương',
        descriptionEn: 'The cradle of premium Vietnamese green tea with spiraling green tea hills stretching to the horizon.',
        descriptionVi: 'Cái nôi của "Đệ nhất danh trà" với những đồi chè xanh ngát hương thơm cốm non thuần khiết.',
        emoji: '🍵'
      },
      {
        nameEn: 'Nui Coc Lake (Ho Nui Coc)',
        nameVi: 'Khu du lịch Hồ Núi Cốc',
        descriptionEn: 'Scenic freshwater reservoir linked to the touching folk legend of the lovers Chang Coc and Nang Song.',
        descriptionVi: 'Hồ nước nhân tạo thơ mộng với 89 hòn đảo lớn nhỏ gắn với thiên tình sử Chàng Cốc và Nàng Song.',
        emoji: '⛵'
      },
      {
        nameEn: 'ATK Dinh Hoa Special National Historic Site',
        nameVi: 'Khu di tích Quốc gia đặc biệt ATK Định Hóa',
        descriptionEn: 'The "Windy Capital" resistance headquarters where President Ho Chi Minh and military leaders planned key campaigns.',
        descriptionVi: 'Thủ đô Gió ngàn - căn cứ an toàn khu nơi Bác Hồ và Bộ Tổng tư lệnh chỉ đạo cuộc kháng chiến trường kỳ.',
        emoji: '⭐'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Tan Cuong "Dinh" Premium Green Tea',
        nameVi: 'Trà Đinh Tân Cương thượng hạng',
        descriptionEn: 'Prized green tea picked only from the tender topmost single bud, boasting a delicate young rice fragrance.',
        descriptionVi: 'Loại trà tinh túy chỉ hái một búp non trên cùng, nước xanh trong sánh vàng và hậu vị ngọt sâu lắng.',
        emoji: '🍵'
      },
      {
        nameEn: 'Dinh Hoa Bamboo Tube Rice (Com Lam)',
        nameVi: 'Cơm lam Định Hóa',
        descriptionEn: 'Fragrant sticky rice roasted slowly inside sweet green forest bamboo stems.',
        descriptionVi: 'Cơm nếp nương nấu trong ống tre nứa thơm dẻo chấm cùng muối vừng bùi bùi.',
        emoji: '🎋'
      }
    ],
    culturalTraditions: {
      en: 'Deep respect for tea ceremony hospitality, Tay and San Diu folk songs (Soong Co singing), and educational excellence.',
      vi: 'Nghệ thuật thưởng trà thanh cao, làn điệu Soọng cô của người Sán Dìu và truyền thống hiếu học của trung tâm đại học lớn.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Tan Cuong Tea Fragrance and Taste Festival',
        nameVi: 'Lễ hội Hương sắc Trà xuân Tân Cương',
        unescoHeritage: false,
        descriptionEn: 'Spring festival where master tea artisans compete in hand-roasting the most fragrant tea leaves.',
        descriptionVi: 'Lễ hội đầu xuân nơi các nghệ nhân thi tài sao chè thủ công giữ trọn hương vị cốm non.',
        emoji: '🌿'
      },
      {
        nameEn: 'Museum of the Cultures of Vietnam’s Ethnic Groups',
        nameVi: 'Bảo tàng Văn hóa các Dân tộc Việt Nam',
        unescoHeritage: false,
        descriptionEn: 'National museum in Thai Nguyen displaying the heritage, costumes, and musical instruments of all 54 ethnic groups.',
        descriptionVi: 'Bảo tàng quốc gia lưu giữ hơn 40.000 hiện vật quý giá về văn hóa 54 dân tộc anh em.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'High-tech electronics, smartphones, and steel products',
        productVi: 'Điện thoại thông minh & Thép Thái Nguyên',
        occupationEn: 'Electronics engineer & tea roaster',
        occupationVi: 'Kỹ sư công nghệ cao & Nghệ nhân sao chè gia truyền'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Ghenh Che Lake & Pine Forest',
        nameVi: 'Hồ Ghềnh Chè',
        type: 'Lake',
        descriptionEn: 'Tranquil eco-lake surrounded by fragrant pine woods and peaceful bird sanctuaries.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Famed across Asia as the "Kingdom of Vietnamese Green Tea" and Northern Vietnam’s booming high-tech electronics manufacturing center.',
      vi: 'Được mệnh danh là "Thủ phủ Đệ nhất danh trà" và trung tâm sản xuất thiết bị điện tử công nghệ cao hàng đầu miền Bắc.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Fragrance',
        phonetic: '/ˈfreɪ.ɡrəns/',
        partOfSpeech: 'noun',
        meaningEn: 'A sweet, pleasant, and gentle natural smell.',
        meaningVi: 'Hương thơm thanh mát, dịu dàng',
        exampleSentence: 'Tan Cuong green tea has the fragrance of fresh young rice.',
        emoji: '🍵'
      },
      {
        word: 'Brew',
        phonetic: '/bruː/',
        partOfSpeech: 'verb',
        meaningEn: 'To make a hot drink like tea by pouring boiling water over dried leaves.',
        meaningVi: 'Pha trà, hãm trà',
        exampleSentence: 'Grandfather brews a warm pot of green tea every morning.',
        emoji: '🫖'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Thai Nguyen is celebrated for producing the finest [green tea / steel].',
        patternMeaningVi: 'Thái Nguyên được ca tụng vì sản xuất ra [chè xanh / thép] hảo hạng nhất.',
        exampleEn: 'Thai Nguyen is celebrated for producing the finest green tea in Vietnam.',
        exampleVi: 'Thái Nguyên được ca tụng vì sản xuất ra loại chè xanh hảo hạng nhất Việt Nam.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step into the green fields of Tan Cuong in Thai Nguyen Province! Early in the morning, dewdrops sparkle on the baby tea leaves. When you brew this special tea, the room fills with the sweet scent of autumn rice.',
        question: 'What special scent does authentic Tan Cuong green tea have?',
        options: ['Sweet fragrance of fresh young rice 🌾🍵', 'Burnt toast', 'Salty sea fish', 'Gasoline smell'],
        correctIndex: 0,
        explanationEn: 'Tan Cuong tea is famous for its distinctive sweet aroma resembling fresh green sticky rice flakes (cốm non).',
        explanationVi: 'Trà Tân Cương nổi tiếng với hương thơm cốm non tự nhiên quyến rũ đặc trưng.'
      },
      speakingMission: {
        roleplayPromptEn: 'Offer a warm cup of Thai Nguyen green tea to a guest with polite courtesy!',
        roleplayPromptVi: 'Hãy mời khách một chén trà xanh Thái Nguyên bằng câu tiếng Anh lễ phép này nhé!',
        targetSpeech: 'Would you like to try a cup of famous Thai Nguyen green tea?',
        sampleAudioPhonetic: '/wʊd juː laɪk tuː traɪ ə kʌp əv ˈfeɪ.məs twiːən ˈɡriːn tiː?/',
        pronunciationTips: 'Use a gentle rising polite intonation at the end: "...green TEA?"'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'tng-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous beverage is Thai Nguyen Province honored for producing as "The First Grand Tea"?',
        questionVi: 'Thức uống nổi tiếng nào giúp Thái Nguyên được mệnh danh là "Đệ nhất danh trà"?',
        options: ['Tan Cuong Green Tea (Chè xanh Tân Cương) 🍵', 'Orange juice', 'Hot chocolate', 'Sparkling soda'],
        correctIndex: 0,
        explanationEn: 'Thai Nguyen is celebrated throughout Vietnam as the capital of the finest green tea.',
        explanationVi: 'Thái Nguyên tự hào là vùng đất chè danh tiếng bậc nhất với thương hiệu chè Tân Cương.'
      },
      {
        id: 'tng-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which touching folk legend is associated with Nui Coc Lake in Thai Nguyen?',
        questionVi: 'Truyền thuyết cảm động nào gắn liền với danh thắng Hồ Núi Cốc ở Thái Nguyên?',
        options: [
          'The love story of Chang Coc and Nang Song ⛰️💧',
          'The legend of Aladdin and the magic lamp',
          'The Little Mermaid',
          'Cinderella’s glass slipper'
        ],
        correctIndex: 0,
        explanationEn: 'Nui Coc Lake is born from the legend of Chang Coc who waited until he turned into a mountain, and Nang Song whose tears became a river.',
        explanationVi: 'Hồ Núi Cốc gắn với câu chuyện Chàng Cốc hóa núi và Nàng Song khóc cạn nước mắt hóa dòng sông Công.'
      },
      {
        id: 'tng-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Choose the best English sentence to write on a gift box of Thai Nguyen tea:',
        questionVi: 'Chọn câu tiếng Anh ý nghĩa nhất để in lên hộp quà tặng chè Thái Nguyên:',
        options: [
          '"A prestigious gift of nature: authentic Thai Nguyen Green Tea with the pure fragrance of young rice!" 🎁🍵',
          '"This is an empty cardboard box with nothing inside." 📦',
          '"Throw this away immediately." 🗑️',
          '"This tea was made on the moon." 🌕'
        ],
        correctIndex: 0,
        explanationEn: 'Celebrating the authentic tea as a prestigious gift of nature with pure fragrance makes it an elegant gift description.',
        explanationVi: 'Câu mô tả món quà quý từ thiên nhiên với hương cốm non tinh khiết rất trang trọng và ý nghĩa.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 8. TỈNH LẠNG SƠN
  {
    code: 'LS',
    id: 'vn-34-ls',
    type: 'province',
    nameVi: 'Tỉnh Lạng Sơn',
    nameEn: 'Lang Son Province',
    capitalVi: 'TP. Lạng Sơn',
    capitalEn: 'Lang Son City',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    emoji: '⭐',
    image: '/destinations/lang_son_gate.jpg',
    geographicLocation: {
      latitude: 21.8533,
      longitude: 106.7618,
      borders: 'Bordered by China to the northeast, Cao Bang to the northwest, Bac Kan and Thai Nguyen to the west, and Bac Giang and Quang Ninh to the south.',
      terrain: 'Strategic mountain passes (Chi Lang Pass), winding Ky Cung River flowing uniquely northwest, and bustling border gateways.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Lạng Sơn'],
      summaryVi: 'Cửa ngõ mậu dịch đường bộ quốc tế với các cửa khẩu quốc tế Hữu Nghị, Đồng Đăng, Chi Ma; Ải Chi Lăng lịch sử và động Tam Thanh.',
      summaryEn: 'Northern international land trade gateway featuring Huu Nghi and Dong Dang border crossings, historic Chi Lang Pass, and Tam Thanh Pagoda.'
    },
    notableGeographicalCharacteristics: {
      en: 'Features the unique Ky Cung River which flows backward towards the north, dramatic limestone caves, and star anise fragrant hills.',
      vi: 'Dòng sông Kỳ Cùng độc đáo chảy ngược về hướng bắc, quần thể hang động đá vôi kỳ ảo và những cánh rừng hoa hồi thơm ngát.'
    },
    famousLandmarks: [
      {
        nameEn: 'Chi Lang Historic Pass (Ai Chi Lang)',
        nameVi: 'Khu di tích lịch sử Ải Chi Lăng',
        descriptionEn: 'Imposing mountain gateway where Vietnamese ancestors defeated foreign invaders throughout centuries.',
        descriptionVi: 'Hẻm núi hiểm trở ghi dấu những chiến công hiển hách đánh tan quân xâm lược phương Bắc bảo vệ độc lập non sông.',
        emoji: '🛡️'
      },
      {
        nameEn: 'Tam Thanh Cave & To Thi Rock (Nang To Thi)',
        nameVi: 'Động Tam Thanh & Tượng đá Nàng Tô Thị',
        descriptionEn: 'Scenic grotto and natural rock pillar resembling a faithful mother holding her baby looking to the horizon.',
        descriptionVi: 'Động chùa thanh tịnh và phiến đá thiên nhiên mang dáng hình người phụ nữ bồng con chung thủy sắt son.',
        emoji: '🪨'
      },
      {
        nameEn: 'Huu Nghi International Border Gate',
        nameVi: 'Cửa khẩu Quốc tế Hữu Nghị',
        descriptionEn: 'Major international roadway border crossing connecting Vietnam directly with China and continental trade routes.',
        descriptionVi: 'Cửa khẩu đường bộ quốc tế huyết mạch kết nối giao thương giữa Việt Nam và các nước trong khu vực.',
        emoji: '🚪'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Lang Son Roasted Duck with Mac Mat Leaves',
        nameVi: 'Vịt quay lá mắc mật Lạng Sơn',
        descriptionEn: 'Golden crispy-skinned roasted duck stuffed with wild Mac Mat berry leaves and honey spices.',
        descriptionVi: 'Vịt quay da giòn bóng bẩy tẩm ướp lá và quả mắc mật thơm lừng nức tiếng xứ Lạng.',
        emoji: '🍗'
      },
      {
        nameEn: 'Khau Nhuc (Caramelized Pork Belly)',
        nameVi: 'Khau nhục Lạng Sơn',
        descriptionEn: 'Slow-steamed pork belly layered with taro, dried mountain herbs, and savory spices until melt-in-your-mouth tender.',
        descriptionVi: 'Món ăn truyền thống cầu kỳ với thịt ba chỉ hầm nhừ cùng khoai môn và các vị thảo mộc núi rừng béo bùi.',
        emoji: '🍲'
      }
    ],
    culturalTraditions: {
      en: 'Folk Sli singing of the Nung and Luon singing of the Tay, vibrant spring Ky Cua and Tam Thanh temple festivals.',
      vi: 'Điệu Sli của người Nùng, câu lượn của người Tày và hội Chùa Tam Thanh rộn ràng trống hội đầu năm.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Ky Cung - Ta Phu Temple Festival',
        nameVi: 'Lễ hội Đền Kỳ Cùng – Tả Phủ',
        unescoHeritage: false,
        descriptionEn: 'Lang Son’s largest spring festival featuring colorful palanquin processions across the Ky Cung river.',
        descriptionVi: 'Lễ hội lớn nhất xứ Lạng với lễ rước kiệu hoành tráng qua sông Kỳ Cùng cầu quốc thái dân an.',
        emoji: '🏮'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Star Anise Essential Oil & Mac Mat Spices',
        productVi: 'Hoa hồi & Tinh dầu hồi Lạng Sơn',
        occupationEn: 'Border logistics trader & star anise grower',
        occupationVi: 'Chuyên gia thương mại logistics & Người trồng rừng hồi'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Mau Son Mountain Resort',
        nameVi: 'Khu du lịch Mẫu Sơn',
        type: 'Mountain',
        descriptionEn: 'High mountain range rising over 1,500m with ancient French stone villas where white winter snow falls.',
        descriptionVi: 'Đỉnh núi cao hơn 1.500m nơi có tuyết phủ trắng xóa vào mùa đông và những biệt thự đá cổ kính.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Celebrated in folklore: "Đồng Đăng có phố Kỳ Lừa / Có nàng Tô Thị, có chùa Tam Thanh", a land of border gates and fragrant star anise.',
      vi: 'Xứ Lạng đi vào câu ca dao bất hủ với phố Kỳ Lừa, nàng Tô Thị, chùa Tam Thanh và ngát hương hoa hồi biên cương.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Pass',
        phonetic: '/pæs/',
        partOfSpeech: 'noun',
        meaningEn: 'A narrow, natural pathway between high mountain peaks.',
        meaningVi: 'Đèo, cửa ải hiểm trở',
        exampleSentence: 'Chi Lang Pass was a heroic mountain gateway in Vietnamese history.',
        emoji: '⛰️'
      },
      {
        word: 'Star anise',
        phonetic: '/ˌstɑːr ˈæn.ɪs/',
        partOfSpeech: 'noun',
        meaningEn: 'A star-shaped spice with a sweet, aromatic licorice scent.',
        meaningVi: 'Hoa hồi (hoa có hình ngôi sao)',
        exampleSentence: 'Lang Son is famous worldwide for fragrant star anise.',
        emoji: '⭐'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Lang Son is a vital border province famous for [historic pass / landmark].',
        patternMeaningVi: 'Lạng Sơn là một tỉnh biên cương trọng yếu nổi tiếng với [cửa ải lịch sử / danh thắng].',
        exampleEn: 'Lang Son is a vital border province famous for Chi Lang Pass and Huu Nghi Border Gate.',
        exampleVi: 'Lạng Sơn là một tỉnh biên cương trọng yếu nổi tiếng với Ải Chi Lăng và Cửa khẩu Hữu Nghị.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'High up in the hills of Lang Son, the air smells of sweet star anise. Listen to the famous folk rhyme: "Dong Dang has Ky Lua Street, it has Lady To Thi, and Tam Thanh Pagoda." Lang Son has welcomed travelers for hundreds of years!',
        question: 'Which sweet-smelling spice grows abundantly on Lang Son’s mountain slopes?',
        options: ['Star anise (Hoa hồi) ⭐', 'Cocoa powder 🍫', 'Sea salt 🧂', 'Black pepper only'],
        correctIndex: 0,
        explanationEn: 'Lang Son is globally renowned for star anise, a star-shaped fragrant spice used in pho broth and perfumes.',
        explanationVi: 'Lạng Sơn là xứ sở của hoa hồi thơm ngát nức tiếng thế giới dùng trong nấu phở và chiết xuất tinh dầu.'
      },
      speakingMission: {
        roleplayPromptEn: 'Recite a proud sentence introducing historic Lang Son!',
        roleplayPromptVi: 'Đọc to câu văn giới thiệu vùng đất lịch sử Lạng Sơn bằng tiếng Anh!',
        targetSpeech: 'Lang Son is a historic border province with Chi Lang Pass and fragrant star anise!',
        sampleAudioPhonetic: '/læŋ sɒn ɪz ə hɪˈstɔːr.ɪk ˈbɔːr.dɚ ˈprɑː.vɪns wɪð tʃiː læŋ pæs ænd ˈfreɪ.ɡrənt stɑːr ˈæn.ɪs!/',
        pronunciationTips: 'Pronounce "border province" clearly: BOR-der PROV-ince.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'ls-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which natural stone formation in Lang Son resembles a devoted mother waiting with her child?',
        questionVi: 'Phiến đá thiên nhiên nào ở Lạng Sơn mang hình dáng người mẹ bồng con đứng chờ?',
        options: ['To Thi Rock (Nàng Tô Thị) 🪨', 'Turtle Tower', 'Stone Stonehenge', 'Dragon Rock'],
        correctIndex: 0,
        explanationEn: 'Nang To Thi rock on the mountain near Tam Thanh Pagoda symbolizes maternal love and devotion.',
        explanationVi: 'Tượng đá nàng Tô Thị trên sườn núi Tam Thanh là biểu tượng của tình mẫu tử và lòng thủy chung.'
      },
      {
        id: 'ls-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why was Chi Lang Pass so important in Vietnamese national defense history?',
        questionVi: 'Vì sao Ải Chi Lăng lại có ý nghĩa trọng đại trong lịch sử giữ nước của dân tộc ta?',
        options: [
          'It was a strategic narrow mountain valley where Vietnamese forces successfully halted foreign invasions 🛡️',
          'It had the deepest coral reef',
          'It was a giant indoor ice arena',
          'It had an ancient submarine station'
        ],
        correctIndex: 0,
        explanationEn: 'Chi Lang Pass was a fortress of terrain where heroes like Le Hoan, Ly Thuong Kiet, and Le Loi defeated invaders.',
        explanationVi: 'Ải Chi Lăng là địa thế hiểm trở nơi cha ông ta lập nên những chiến thắng oanh liệt chống giặc ngoại xâm.'
      },
      {
        id: 'ls-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What is the best English phrase to recommend Lang Son’s roasted duck to a food lover?',
        questionVi: 'Cụm từ tiếng Anh nào chuẩn nhất để giới thiệu món vịt quay Lạng Sơn cho người mê ẩm thực?',
        options: [
          '"You must taste Lang Son roasted duck, seasoned with fragrant wild Mac Mat berries and crispy skin!" 🍗',
          '"The duck is completely cold and uncooked." 🚫',
          '"It tastes like plastic." ❌',
          '"Never try roasted duck." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Recommending the crispy skin and aromatic Mac Mat berries highlights what makes Lang Son duck unique.',
        explanationVi: 'Gợi ý da giòn và thơm lá mắc mật là cách giới thiệu chuẩn xác món vịt quay đặc sản xứ Lạng.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 9. TỈNH QUẢNG NINH
  {
    code: 'QN',
    id: 'vn-34-qn',
    type: 'province',
    nameVi: 'Tỉnh Quảng Ninh',
    nameEn: 'Quang Ninh Province',
    capitalVi: 'TP. Hạ Long',
    capitalEn: 'Ha Long City',
    region: 'North',
    zone: 'Vùng Đông Bắc Bộ',
    emoji: '🐉',
    image: '/destinations/halong_bay.jpg',
    geographicLocation: {
      latitude: 21.0069,
      longitude: 107.2925,
      borders: 'Bordered by China to the north, Lang Son, Bac Giang, and Hai Duong to the west, Hai Phong to the south, and the Gulf of Tonkin to the east.',
      terrain: 'Spectacular coastal karst seascape with thousands of limestone islands, forested mountains, and offshore island archipelagos.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Quảng Ninh', 'Huyện đảo Cô Tô', 'Huyện đảo Vân Đồn'],
      summaryVi: 'Địa bàn có Di sản thiên nhiên thế giới Vịnh Hạ Long, Vịnh Bái Tử Long, Quần đảo Cô Tô và trung tâm khai thác than, công nghiệp cảng biển hiện đại.',
      summaryEn: 'Home to UNESCO World Natural Heritage Ha Long Bay, Bai Tu Long Bay, Co To Archipelago, and Vietnam’s premier coal and maritime industries.',
      islandDistricts: ['Huyện đảo Cô Tô', 'Huyện đảo Vân Đồn']
    },
    notableGeographicalCharacteristics: {
      en: 'A wonderland of over 2,000 karst limestone islands rising from emerald waters, sacred Yen Tu mountain peak, and pristine sandy border beaches.',
      vi: 'Kỳ quan với gần 2.000 hòn đảo đá vôi nhô lên từ làn nước xanh ngọc bích, non thiêng Yên Tử và các quần đảo tiền tiêu xinh đẹp.'
    },
    famousLandmarks: [
      {
        nameEn: 'Ha Long Bay (UNESCO World Heritage)',
        nameVi: 'Vịnh Hạ Long',
        descriptionEn: 'World-renowned natural wonder featuring thousands of dramatic karst towers, hidden grottos, and floating fishing villages.',
        descriptionVi: 'Kỳ quan Thiên nhiên Thế giới với hàng ngàn đảo đá vôi kỳ vĩ, hang Đầu Gỗ, động Thiên Cung lộng lẫy.',
        emoji: '🐉'
      },
      {
        nameEn: 'Sacred Yen Tu Mountain Peak',
        nameVi: 'Non thiêng Yên Tử',
        descriptionEn: 'The cradle of Truc Lam Zen Buddhism founded by King-Monk Tran Nhan Tong, crowned by the bronze Dong Pagoda at 1,068m.',
        descriptionVi: 'Đất tổ của Thiền phái Trúc Lâm do Phật hoàng Trần Nhân Tông sáng lập với Chùa Đồng uy nghiêm trên đỉnh núi.',
        emoji: '🛕'
      },
      {
        nameEn: 'Co To Island Archipelago',
        nameVi: 'Quần đảo Cô Tô',
        descriptionEn: 'Pristine sovereign island paradise with white sandy beaches, turquoise waters, and coastal lighthouses.',
        descriptionVi: 'Thiên đường biển đảo tiền tiêu với bãi biển Hồng Vàn, Vàn Chảy nước trong vắt và ngọn hải đăng sừng sững.',
        emoji: '🏝️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Ha Long Hand-Pounded Squid Patties (Cha Muc)',
        nameVi: 'Chả mực giã tay Hạ Long',
        descriptionEn: 'Fresh squid hand-pounded in stone mortars, deep-fried to golden, crunchy, savory perfection.',
        descriptionVi: 'Mực nang tươi rói giã tay truyền thống trong cối đá, chiên vàng giòn sần sật thơm nức mũi.',
        emoji: '🦑'
      },
      {
        nameEn: 'Tien Yen "Hill-Climbing" Chicken',
        nameVi: 'Gà đồi Tiên Yên',
        descriptionEn: 'Firm, sweet free-range chicken roasted to golden skin served with sour ginger dipping sauce.',
        descriptionVi: 'Thịt gà thả đồi Tiên Yên da vàng óng giòn sần sật chấm cùng nước chấm gừng thơm nồng.',
        emoji: '🍗'
      }
    ],
    culturalTraditions: {
      en: 'Heroic maritime seafaring traditions, deep spiritual Zen Buddhist philosophy, and the proud comradeship of coal mining heritage.',
      vi: 'Tinh thần kiên cường của người dân vùng mỏ, triết lý Phật giáo Trúc Lâm an yên và tình đoàn kết của người thợ mỏ anh hùng.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Yen Tu Spring Pilgrimage Festival',
        nameVi: 'Lễ hội Xuân Yên Tử',
        unescoHeritage: false,
        descriptionEn: 'Annual spring pilgrimage where millions climb misty stone stairs to the bronze Dong Pagoda seeking peace.',
        descriptionVi: 'Lễ hội hành hương mùa xuân quy tụ hàng triệu tăng ni phật tử về chốn tổ Trúc Lâm thanh tịnh.',
        emoji: '🏮'
      },
      {
        nameEn: 'Ha Long Bay - Cat Ba Archipelago World Heritage',
        nameVi: 'Di sản Thiên nhiên Thế giới Vịnh Hạ Long – Quần đảo Cát Bà',
        unescoHeritage: true,
        descriptionEn: 'Expanded UNESCO Natural World Heritage site recognized for extraordinary marine limestone karst geomophology.',
        descriptionVi: 'Di sản Thiên nhiên Thế giới UNESCO liên tỉnh với giá trị địa chất địa mạo và cảnh quan biển đảo vô giá.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Sea cultured pearls, fine coal art carvings, and marine oysters',
        productVi: 'Ngọc trai Hạ Long & Điêu khắc mỹ nghệ than đá',
        occupationEn: 'Maritime tour captain, marine biologist & miner',
        occupationVi: 'Thuyền trưởng tàu du lịch vịnh & Thợ mỏ than vùng than'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Sung Sot Cave (Surprise Cave)',
        nameVi: 'Hang Sửng Sốt',
        type: 'Cave',
        descriptionEn: 'One of Ha Long’s largest caverns featuring massive chambers filled with illuminated stalactites and stone forms.'
      },
      {
        nameEn: 'Bai Tu Long National Park',
        nameVi: 'Vườn quốc gia Bái Tử Long',
        type: 'National Park',
        descriptionEn: 'Marine and terrestrial sanctuary protecting rare coral reefs, sea turtles, and pristine forested karst islets.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Vietnam’s premier tourism gem where descending dragons created thousands of emerald islands according to ancient folklore.',
      vi: 'Viên ngọc du lịch quốc tế nơi Rồng Mẹ hạ giới phun châu nhả ngọc tạo nên muôn vàn đảo đá diệu kỳ.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Emerald',
        phonetic: '/ˈem.ər.əld/',
        partOfSpeech: 'noun',
        meaningEn: 'A bright, sparkling green color like a precious gem.',
        meaningVi: 'Màu xanh ngọc bích',
        exampleSentence: 'Boats cruise quietly across the emerald water of Ha Long Bay.',
        emoji: '💎'
      },
      {
        word: 'Karst',
        phonetic: '/kɑːrst/',
        partOfSpeech: 'noun',
        meaningEn: 'A landscape of limestone rocks carved by water over millions of years into towers and caves.',
        meaningVi: 'Địa hình núi đá vôi karst',
        exampleSentence: 'Ha Long Bay has world-famous limestone karst towers.',
        emoji: '🏝️'
      },
      {
        word: 'Pilgrimage',
        phonetic: '/ˈpɪl.ɡrə.mɪdʒ/',
        partOfSpeech: 'noun',
        meaningEn: 'A journey to a sacred spiritual place for prayer or contemplation.',
        meaningVi: 'Chuyến hành hương về đất Phật thiêng liêng',
        exampleSentence: 'People make a peaceful pilgrimage to Yen Tu Mountain every spring.',
        emoji: '🛕'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Ha Long Bay in Quang Ninh is a UNESCO World Heritage site famous for [emerald water / caves / islands].',
        patternMeaningVi: 'Vịnh Hạ Long ở Quảng Ninh là Di sản Thế giới UNESCO nổi tiếng với [nước xanh ngọc / hang động / các hòn đảo].',
        exampleEn: 'Ha Long Bay in Quang Ninh is a UNESCO World Heritage site famous for emerald waters and thousands of islands.',
        exampleVi: 'Vịnh Hạ Long ở Quảng Ninh là Di sản Thế giới UNESCO nổi tiếng với làn nước xanh ngọc và hàng ngàn hòn đảo.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Welcome aboard our wooden cruise boat in Ha Long Bay, Quang Ninh! Look out the window: thousands of green limestone islands rise like friendly dragons from the sparkling emerald sea. Did you know "Ha Long" means "Descending Dragon"?',
        question: 'What does the name "Ha Long" mean in Vietnamese legend?',
        options: ['Descending Dragon (Nơi Rồng đáp xuống) 🐉', 'Flying Eagle 🦅', 'Golden Turtle 🐢', 'Silver River 🌊'],
        correctIndex: 0,
        explanationEn: 'According to legend, "Ha Long" translates to "Where the Mother Dragon descended to protect Vietnam".',
        explanationVi: 'Theo truyền thuyết, "Hạ Long" có nghĩa là nơi Rồng Mẹ đáp xuống giúp người dân đánh giặc giữ nước.'
      },
      speakingMission: {
        roleplayPromptEn: 'Act as a proud tourist guide welcoming visitors to Ha Long Bay!',
        roleplayPromptVi: 'Đóng vai hướng dẫn viên du lịch nhí giới thiệu Vịnh Hạ Long cho du khách nước ngoài!',
        targetSpeech: 'Welcome to Ha Long Bay, one of the seven natural wonders of the world!',
        sampleAudioPhonetic: '/ˈwel.kəm tuː hæ lɒŋ beɪ, wʌn əv ðə ˈsev.ən ˈnætʃ.ɚ.əl ˈwʌn.dɚz əv ðə wɜːld!/',
        pronunciationTips: 'Speak with warmth and wonder, emphasizing "NA-TUR-AL WON-DERS".'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'qn-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which UNESCO World Natural Heritage site is located in Quang Ninh Province?',
        questionVi: 'Di sản Thiên nhiên Thế giới UNESCO nào tọa lạc tại Tỉnh Quảng Ninh?',
        options: ['Ha Long Bay (Vịnh Hạ Long) 🐉', 'Sword Lake', 'Perfume River', 'Ben Thanh Market'],
        correctIndex: 0,
        explanationEn: 'Ha Long Bay in Quang Ninh is recognized twice by UNESCO as a World Natural Heritage site.',
        explanationVi: 'Vịnh Hạ Long thuộc Tỉnh Quảng Ninh hai lần được UNESCO ghi danh là Di sản Thiên nhiên Thế giới.'
      },
      {
        id: 'qn-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which Buddhist Zen tradition was founded on Yen Tu Mountain by King-Monk Tran Nhan Tong?',
        questionVi: 'Dòng thiền Phật giáo nào được Phật hoàng Trần Nhân Tông sáng lập trên núi Yên Tử?',
        options: [
          'Truc Lam Zen Buddhism (Thiền phái Trúc Lâm Yên Tử) 🛕',
          'Shaolin martial arts',
          'Tibetan astrology',
          'Western classical choir'
        ],
        correctIndex: 0,
        explanationEn: 'Truc Lam Yen Tu is the unique Vietnamese Zen Buddhist tradition founded by King Tran Nhan Tong.',
        explanationVi: 'Thiền phái Trúc Lâm Yên Tử là dòng thiền mang đậm bản sắc văn hóa Việt Nam do vua Trần Nhân Tông sáng lập.'
      },
      {
        id: 'qn-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How would you describe Ha Long’s famous "Cha Muc" in English to a foreign tourist?',
        questionVi: 'Em sẽ giới thiệu món "Chả mực giã tay Hạ Long" bằng tiếng Anh cho du khách như thế nào?',
        options: [
          '"Cha Muc is crispy golden patties made from fresh squid hand-pounded in stone mortars!" 🦑',
          '"Cha Muc is sweet blueberry candy." 🍬',
          '"Cha Muc is cold frozen soup." 🥣',
          '"Cha Muc is made of wood." 🪵'
        ],
        correctIndex: 0,
        explanationEn: 'Describing Cha Muc as crispy golden patties made from fresh hand-pounded squid explains its delicious quality clearly.',
        explanationVi: 'Giới thiệu chả mực là chả vàng giòn làm từ mực nang tươi giã tay truyền thống là cách giải thích hấp dẫn nhất.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 10. TỈNH BẮC NINH
  {
    code: 'BN',
    id: 'vn-34-bn',
    type: 'province',
    nameVi: 'Tỉnh Bắc Ninh',
    nameEn: 'Bac Ninh Province',
    capitalVi: 'TP. Bắc Ninh',
    capitalEn: 'Bac Ninh City',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    emoji: '🏮',
    image: '/destinations/quan_ho_singing.jpg',
    geographicLocation: {
      latitude: 21.1861,
      longitude: 106.0763,
      borders: 'Bordered by Bac Giang to the north and east, Hanoi to the west, and Hung Yen and Hai Duong to the south.',
      terrain: 'Fertile Red River delta alluvial plain crossed by the Cau and Duong rivers, rich in ancient cultural villages.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Bắc Ninh', 'Tỉnh Bắc Giang (không gian Kinh Bắc & hành lang công nghệ cao)'],
      summaryVi: 'Trung tâm công nghiệp điện tử công nghệ cao, quê hương Quan họ và vùng văn hóa Kinh Bắc giàu truyền thống; kết nối vùng vải thiều Lục Ngạn và chốn tổ Vĩnh Nghiêm.',
      summaryEn: 'High-tech electronics center and ancestral homeland of UNESCO Quan Ho folk songs in the traditional Kinh Bac cultural heartland.'
    },
    notableGeographicalCharacteristics: {
      en: 'Located along the gentle Cau River (Sông Cầu - Sông Như Nguyệt), a peaceful riverine plain rich in ancient pagodas and craft villages.',
      vi: 'Nằm bên dòng sông Cầu (sông Như Nguyệt) thơ mộng, vùng đồng bằng trù phú với dày đặc đình chùa cổ kính và làng nghề trăm tuổi.'
    },
    famousLandmarks: [
      {
        nameEn: 'Dau Pagoda (Chua Dau)',
        nameVi: 'Chùa Dâu (Cổ Châu Tự)',
        descriptionEn: 'The oldest Buddhist pagoda in Vietnam dating back to the 2nd century AD, the cradle of Vietnamese Buddhism.',
        descriptionVi: 'Ngôi chùa cổ nhất Việt Nam khởi dựng từ thế kỷ thứ 2 sau Công nguyên, cái nôi của Phật giáo nước nhà.',
        emoji: '🛕'
      },
      {
        nameEn: 'Do Temple (Den Do)',
        nameVi: 'Đền Đô (Cổ Pháp Điện)',
        descriptionEn: 'Sacred temple complex in Dinh Bang dedicated to the eight emperors of the glorious Ly Dynasty.',
        descriptionVi: 'Quần thể đền thiêng tại làng Đình Bảng thờ phụng 8 vị hoàng đế triều Lý rạng danh sử sách.',
        emoji: '👑'
      },
      {
        nameEn: 'Dong Ho Folk Painting Village',
        nameVi: 'Làng tranh dân gian Đông Hồ',
        descriptionEn: 'Historic woodblock printing village famous for natural colors made from seashells, soot, and garden flowers.',
        descriptionVi: 'Làng tranh khắc gỗ dân gian với giấy điệp óng ánh và màu sắc tự nhiên từ hoa hòe, vỏ sò điệp và than lá tre.',
        emoji: '🎨'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Dinh Bang Phu The Cake (Husband & Wife Cake)',
        nameVi: 'Bánh phu thê Đình Bảng',
        descriptionEn: 'Jelly-soft sticky cake made of gardenia flower essence, green beans, coconut, wrapped in green banana leaves.',
        descriptionVi: 'Chiếc bánh dẻo thơm sắc vàng hoa dành dành, nhân đậu xanh dừa ngọt ngào tượng trưng cho tình nghĩa vợ chồng.',
        emoji: '🥮'
      },
      {
        nameEn: 'Diem Village Rice Paper (Banh Da Diem)',
        nameVi: 'Bánh khúc làng Diềm',
        descriptionEn: 'Traditional savory rice cake made with wild cudweed leaves and tender green beans eaten at Quan Ho gatherings.',
        descriptionVi: 'Bánh khúc thơm thảo lá rau khúc đồng quê nhân đậu xanh và thịt ba chỉ gắn với những canh hát Quan họ.',
        emoji: '🥟'
      }
    ],
    culturalTraditions: {
      en: 'UNESCO Quan Ho folk singing with emotional call-and-response melodies, hospitable betel nut offering ("Trầu têm cánh phượng"), and polite manners.',
      vi: 'Dân ca Quan họ Bắc Ninh mượt mà tha thiết với văn hóa mời trầu têm cánh phượng và nếp sống trọng tình nghĩa.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Lim Spring Festival (Hoi Lim)',
        nameVi: 'Hội Lim',
        unescoHeritage: false,
        descriptionEn: 'Fabulous spring festival where male and female singers in traditional scarves and conical hats sing Quan Ho across dragon boats.',
        descriptionVi: 'Lễ hội mùa xuân đặc sắc nơi liền anh liền chị hát đối đáp Quan họ trên thuyền rồng và đồi Lim lộng gió.',
        emoji: '🏮'
      },
      {
        nameEn: 'Quan Ho Bac Ninh Folk Songs',
        nameVi: 'Dân ca Quan họ Bắc Ninh',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Representative List of Intangible Cultural Heritage of Humanity recognized in 2009.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể của Nhân loại được UNESCO ghi danh năm 2009 với bài bản đối đáp tinh hoa.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Phu Lang rustic pottery & Dong Kỵ fine woodcarvings',
        productVi: 'Gốm mộc Phù Lãng & Đồ gỗ mỹ nghệ Đồng Kỵ',
        occupationEn: 'Quan Ho folk artist & high-tech microchip engineer',
        occupationVi: 'Nghệ nhân Quan họ & Kỹ sư vi mạch điện tử công nghệ cao'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Tieu Son Pagoda & Forest Hill',
        nameVi: 'Chùa Tiêu (Tiêu Sơn Tự)',
        type: 'Mountain',
        descriptionEn: 'Tranquil forested mountain where Zen master Van Hanh educated King Ly Thai To during his childhood.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The cultural soul of Kinh Bac, home to heartfelt Quan Ho songs: "Người ơi người ở đừng về", harmonized with cutting-edge electronics factories.',
      vi: 'Cái nôi văn hóa Kinh Bắc giàu truyền thống, câu hát "Người ơi người ở đừng về" hòa cùng nhịp đập công nghệ hiện đại.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Folk song',
        phonetic: '/ˈfoʊk sɑːŋ/',
        partOfSpeech: 'noun',
        meaningEn: 'A traditional song passed down through generations by people in a culture.',
        meaningVi: 'Bài hát dân ca cổ truyền',
        exampleSentence: 'Quan Ho is a sweet folk song loved all over Vietnam.',
        emoji: '🎶'
      },
      {
        word: 'Melody',
        phonetic: '/ˈmel.ə.di/',
        partOfSpeech: 'noun',
        meaningEn: 'A sweet and pleasant tune of musical notes.',
        meaningVi: 'Giai điệu âm nhạc ngọt ngào',
        exampleSentence: 'The melody of Quan Ho singing touches everyone’s heart.',
        emoji: '🎵'
      },
      {
        word: 'Conical hat',
        phonetic: '/ˈkɑː.nɪ.kəl hæt/',
        partOfSpeech: 'noun',
        meaningEn: 'A round wide palm leaf hat shaped like a cone that shields from sun and rain.',
        meaningVi: 'Nón quai thao / Nón lá',
        exampleSentence: 'Quan Ho singers wear elegant round conical hats.',
        emoji: '👒'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Bac Ninh is world-famous for its sweet [Quan Ho folk songs / ancient pagodas].',
        patternMeaningVi: 'Bắc Ninh nổi tiếng thế giới với [những làn điệu dân ca Quan họ / các ngôi chùa cổ].',
        exampleEn: 'Bac Ninh is world-famous for its sweet Quan Ho folk songs.',
        exampleVi: 'Bắc Ninh nổi tiếng thế giới với những làn điệu dân ca Quan họ ngọt ngào.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Listen to the beautiful singing floating over the river at the Lim Festival in Bac Ninh! Male and female singers wear silk scarves and holding round hats. They sing polite, sweet songs of friendship and welcome guests with kind smiles.',
        question: 'What festival in Bac Ninh is celebrated for sweet Quan Ho singing on dragon boats?',
        options: ['Lim Festival (Hội Lim) 🏮', 'Halloween festival 🎃', 'Film festival 🎬', 'Snow festival ❄️'],
        correctIndex: 0,
        explanationEn: 'The Lim Festival in Bac Ninh is the premier celebration of UNESCO Quan Ho singing.',
        explanationVi: 'Hội Lim tại Bắc Ninh là ngày hội dân ca Quan họ lớn nhất thu hút đông đảo du khách trẩy hội.'
      },
      speakingMission: {
        roleplayPromptEn: 'Sing or say this polite welcoming sentence with Quan Ho warmth!',
        roleplayPromptVi: 'Hãy nói câu chào đón bạn bè về với quê hương Quan họ bằng tiếng Anh!',
        targetSpeech: 'Welcome to Bac Ninh, the proud cradle of sweet Quan Ho folk songs!',
        sampleAudioPhonetic: '/ˈwel.kəm tuː bæk nɪŋ, ðə praʊd ˈkreɪ.dəl əv swiːt kwɑːn hɔː ˈfoʊk sɑːŋz!/',
        pronunciationTips: 'Say "cradle" smoothly like CRAY-dl, and make "sweet" sound melodic.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'bn-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous UNESCO intangible musical heritage originated in Bac Ninh Province?',
        questionVi: 'Di sản âm nhạc phi vật thể UNESCO nổi tiếng nào có nguồn gốc từ Tỉnh Bắc Ninh?',
        options: ['Quan Ho Bac Ninh Folk Songs (Dân ca Quan họ) 🎶', 'Rock and Roll', 'Opera', 'Jazz music'],
        correctIndex: 0,
        explanationEn: 'Quan Ho Bac Ninh was inscribed on UNESCO’s Representative List of Intangible Cultural Heritage in 2009.',
        explanationVi: 'Dân ca Quan họ Bắc Ninh được UNESCO vinh danh là Di sản Văn hóa Phi vật thể của Nhân loại năm 2009.'
      },
      {
        id: 'bn-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which historic temple in Bac Ninh is dedicated to the eight kings of the Ly Dynasty?',
        questionVi: 'Ngôi đền lịch sử nào ở Bắc Ninh thờ phụng 8 vị vua triều Lý?',
        options: ['Do Temple (Đền Đô) 👑', 'Literature Temple', 'Tran Temple', 'Hung Temple'],
        correctIndex: 0,
        explanationEn: 'Den Do in Dinh Bang, Bac Ninh is the sacred memorial temple of the eight Ly kings.',
        explanationVi: 'Đền Đô ở Đình Bảng (Bắc Ninh) là nơi thờ tự trang nghiêm 8 vị hoàng đế triều Lý.'
      },
      {
        id: 'bn-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you explain the beauty of Dong Ho woodblock paintings in English?',
        questionVi: 'Em giải thích vẻ đẹp độc đáo của tranh dân gian Đông Hồ bằng tiếng Anh như thế nào?',
        options: [
          '"Dong Ho paintings are printed with wooden blocks using sparkling shell paper and natural garden colors!" 🎨',
          '"They are drawn on plastic bags." 🛍️',
          '"They are printed with computer printers." 🖨️',
          '"They are only drawn in black ink on stone." 🪨'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting hand-carved woodblocks, sparkling scallop shell paper, and natural colors captures Dong Ho artistry.',
        explanationVi: 'Mô tả bản khắc gỗ, giấy điệp óng ánh và màu tự nhiên làm nổi bật giá trị nghệ thuật tranh Đông Hồ.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 11. TỈNH PHÚ THỌ
  {
    code: 'PT',
    id: 'vn-34-pt',
    type: 'province',
    nameVi: 'Tỉnh Phú Thọ',
    nameEn: 'Phu Tho Province',
    capitalVi: 'TP. Việt Trì',
    capitalEn: 'Viet Tri City',
    region: 'North',
    zone: 'Trung du và Miền núi phía Bắc',
    emoji: '👑',
    image: '/destinations/hung_kings_temple.jpg',
    geographicLocation: {
      latitude: 21.3167,
      longitude: 105.2333,
      borders: 'Bordered by Tuyen Quang and Yen Bai to the north, Son La and Hoa Binh to the west, Hanoi to the east, and Vinh Phuc to the northeast.',
      terrain: 'Midland undulating tea hills, confluence of three great rivers (Red, Da, and Lo rivers), and sacred Nghia Linh mountain.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Phú Thọ', 'Tỉnh Vĩnh Phúc (kết nối không gian cội nguồn Tam Đảo & Tây Thiên)'],
      summaryVi: 'Đất Tổ Hùng Vương, cội nguồn dân tộc Việt Nam với Di tích lịch sử Đền Hùng và di sản Hát Xoan; liên kết không gian phát triển trung du Bắc Bộ.',
      summaryEn: 'The sacred Ancestral Land of the Hung Kings, cradle of the Vietnamese nation featuring the Hung Kings Temple and UNESCO Xoan singing.'
    },
    notableGeographicalCharacteristics: {
      en: 'The historic crossroads where three legendary rivers meet (Bach Hac confluence), rolling bowl-shaped green tea hills, and ancient ancestral forests.',
      vi: 'Ngã ba sông ngã ba cầu huyền thoại nơi sông Hồng, sông Đà và sông Lô gặp nhau, những đồi chè hình bát úp Long Cốc tuyệt mỹ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Hung Kings Temple Special National Monument',
        nameVi: 'Khu di tích lịch sử Đền Hùng',
        descriptionEn: 'Sacred mountain sanctuary on Nghia Linh Mountain honoring the ancestral founders of the Van Lang kingdom.',
        descriptionVi: 'Khu di tích Quốc gia đặc biệt trên đỉnh núi Nghĩa Lĩnh nơi phụng thờ các Vua Hùng dựng nên nước Văn Lang.',
        emoji: '👑'
      },
      {
        nameEn: 'Long Coc Tea Hills (Oasis of Green Hills)',
        nameVi: 'Đồi chè Long Cốc',
        descriptionEn: 'Hundreds of undulating emerald dome-shaped tea hills resembling giant upside-down bowls floating in morning clouds.',
        descriptionVi: 'Hàng trăm quả đồi chè xanh mướt hình bát úp bồng bềnh giữa làn sương sớm như tranh thủy mặc.',
        emoji: '🍵'
      },
      {
        nameEn: 'Bach Hac River Confluence',
        nameVi: 'Ngã ba sông Bạch Hạc',
        descriptionEn: 'The scenic confluence where the Red River, Lo River, and Black River meet before flowing to the plains.',
        descriptionVi: 'Vùng sông nước linh thiêng nơi hợp lưu của ba con sông lớn gắn với truyền thuyết Sơn Tinh - Thủy Tinh.',
        emoji: '🌊'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Thanh Son Sour Fermented Pork (Thit Chua Thanh Son)',
        nameVi: 'Thịt chua Thanh Sơn',
        descriptionEn: 'Lean mountain pork naturally fermented in toasted corn powder and wrapped in fragrant guava leaves.',
        descriptionVi: 'Thịt lợn mán lên men tự nhiên với thính ngô thơm bùi cuộn lá ổi giòn sần sật.',
        emoji: '🥩'
      },
      {
        nameEn: 'Doan Hung Sweet Grapefruit (Buoi Doan Hung)',
        nameVi: 'Bưởi Đoan Hùng',
        descriptionEn: 'Famed sweet heirloom pomelo with golden skin and juicy, translucent amber flesh that stays fresh for months.',
        descriptionVi: 'Đặc sản bưởi tiến vua tép mọng nước ngọt mát, hương thơm thanh khiết để càng lâu càng ngọt ngào.',
        emoji: '🍈'
      }
    ],
    culturalTraditions: {
      en: 'Sacred national ancestry worship: "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba", and UNESCO Xoan singing heritage.',
      vi: 'Đạo lý "Uống nước nhớ nguồn", Tín ngưỡng thờ cúng Hùng Vương và điệu Hát Xoan cửa đình độc đáo.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Hung Kings Commemoration Festival (Giỗ Tổ Hùng Vương)',
        nameVi: 'Giỗ Tổ Hùng Vương (10 tháng 3 âm lịch)',
        unescoHeritage: true,
        descriptionEn: 'Vietnam’s national ancestral holiday celebrating the unity and roots of all Vietnamese people as children of the Fairy and Dragon.',
        descriptionVi: 'Quốc giỗ thiêng liêng gắn kết hàng triệu trái tim người Việt cùng chung dòng máu con Rồng cháu Tiên.'
      },
      {
        nameEn: 'Xoan Singing of Phu Tho',
        nameVi: 'Hát Xoan Phú Thọ',
        unescoHeritage: true,
        descriptionEn: 'Ancient ritual singing performed in communal house courtyards to honor village guardian spirits and ancestral kings.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể của Nhân loại với những làn điệu múa hát cửa đình mộc mạc trang nghiêm.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Cassava vermicelli & Long Coc green tea',
        productVi: 'Miến dong Tân Sơn & Chè xanh Long Cốc',
        occupationEn: 'Tea farmer & heritage caretaker',
        occupationVi: 'Người làm chè đồi & Người coi sóc di tích Đền Hùng'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Xuan Son National Park',
        nameVi: 'Vườn quốc gia Xuân Sơn',
        type: 'National Park',
        descriptionEn: 'Primeval sub-tropical forest with pristine karst limestone caves and rare white-cheeked gibbons.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The sacred ancestral homeland where King Hung planted the roots of Vietnam’s 4,000-year history of civilization.',
      vi: 'Miền đất Tổ thiêng liêng, nơi các Vua Hùng đã có công dựng nước và thắp lên ngọn lửa trường tồn của dân tộc.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Ancestor',
        phonetic: '/ˈæn.ses.tɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A person related to you who lived many generations ago.',
        meaningVi: 'Tổ tiên, cội nguồn cha ông',
        exampleSentence: 'We honor our royal ancestors at the Hung Kings Temple.',
        emoji: '👑'
      },
      {
        word: 'Homeland',
        phonetic: '/ˈhoʊm.lænd/',
        partOfSpeech: 'noun',
        meaningEn: 'The country or region that is your native home.',
        meaningVi: 'Quê cha đất tổ, quê hương',
        exampleSentence: 'Phu Tho is the ancestral homeland of all Vietnamese people.',
        emoji: '🇻🇳'
      },
      {
        word: 'Commemoration',
        phonetic: '/kəˌmem.əˈreɪ.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'An official ceremony to remember and respect an important historic event.',
        meaningVi: 'Lễ tưởng niệm, ngày Giỗ Tổ',
        exampleSentence: 'Millions visit the Hung Kings Commemoration every spring.',
        emoji: '🏛️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Phu Tho is known as the sacred ancestral [land / roots] of Vietnam.',
        patternMeaningVi: 'Phú Thọ được biết đến là vùng đất [tổ / cội nguồn] thiêng liêng của Việt Nam.',
        exampleEn: 'Phu Tho is known as the sacred ancestral land of Vietnam.',
        exampleVi: 'Phú Thọ được biết đến là vùng đất tổ thiêng liêng của Việt Nam.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Every spring on the tenth day of the third lunar month, millions of Vietnamese families climb the stone stairs of Mount Nghia Linh in Phu Tho Province. They light incense to remember the Hung Kings who founded our country four thousand years ago.',
        question: 'When is the sacred Hung Kings Temple Festival celebrated every year?',
        options: [
          'On the 10th day of the 3rd lunar month 👑',
          'On New Year’s Eve only',
          'On Mid-Autumn night',
          'In the middle of winter'
        ],
        correctIndex: 0,
        explanationEn: 'The Hung Kings Commemoration takes place on the 10th day of the 3rd lunar month.',
        explanationVi: 'Ngày Giỗ Tổ Hùng Vương được tổ chức trọng thể vào ngày mùng 10 tháng 3 âm lịch hàng năm.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share Uncle Ho’s famous historical quote said at the Hung Kings Temple in English!',
        roleplayPromptVi: 'Đọc to lời căn dặn thiêng liêng của Bác Hồ tại Đền Hùng bằng tiếng Anh nhé!',
        targetSpeech: 'The Hung Kings founded our nation; we must protect it together!',
        sampleAudioPhonetic: '/ðə hʊŋ kɪŋz ˈfaʊn.dɪd aʊ.ɚ ˈneɪ.ʃən; wiː mʌst prəˈtekt ɪt təˈɡeð.ɚ!/',
        pronunciationTips: 'Speak with conviction and courage: "The Hung Kings founded our nation; we must protect it together!"'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'pt-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which sacred historic sanctuary is located on Mount Nghia Linh in Phu Tho Province?',
        questionVi: 'Di tích lịch sử thiêng liêng nào tọa lạc trên núi Nghĩa Lĩnh tại Tỉnh Phú Thọ?',
        options: ['Hung Kings Temple (Đền Hùng) 👑', 'One Pillar Pagoda', 'Hue Citadel', 'Dragon Bridge'],
        correctIndex: 0,
        explanationEn: 'The Hung Kings Temple stands on Nghia Linh Mountain honoring the ancient founders of Vietnam.',
        explanationVi: 'Khu di tích Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng.'
      },
      {
        id: 'pt-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which ancient folk singing genre from Phu Tho is recognized by UNESCO as Intangible Cultural Heritage?',
        questionVi: 'Làn điệu dân ca cổ truyền nào của Phú Thọ được UNESCO vinh danh là Di sản Văn hóa Phi vật thể?',
        options: ['Hát Xoan (Xoan Singing of Phu Tho) 🎶', 'Dan Ca Tai Tu', 'Quan Ho Singing', 'Cheo Singing'],
        correctIndex: 0,
        explanationEn: 'Xoan singing is a unique ritual performance originating in ancestral Phu Tho villages.',
        explanationVi: 'Hát Xoan Phú Thọ là di sản văn hóa phi vật thể quý báu gắn liền với tín ngưỡng thờ cúng Hùng Vương.'
      },
      {
        id: 'pt-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How should you explain the Vietnamese saying "Uống nước nhớ nguồn" in English to an international penpal?',
        questionVi: 'Em giải thích đạo lý "Uống nước nhớ nguồn" bằng tiếng Anh cho bạn bè quốc tế như thế nào?',
        options: [
          '"It means: When you drink fresh water, always remember and honor its source and your ancestors!" 💧',
          '"It means only drink cold iced soda." 🥤',
          '"It means do not remember anything." 🚫',
          '"It means rivers do not have water." ❌'
        ],
        correctIndex: 0,
        explanationEn: '"When you drink fresh water, remember its source" captures the core Vietnamese virtue of gratitude to roots and ancestors.',
        explanationVi: 'Đạo lý "Uống nước nhớ nguồn" nhắc nhở con cháu luôn tri ân cội nguồn và công lao tổ tiên.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 12. TỈNH HƯNG YÊN
  {
    code: 'HY',
    id: 'vn-34-hy',
    type: 'province',
    nameVi: 'Tỉnh Hưng Yên',
    nameEn: 'Hung Yen Province',
    capitalVi: 'TP. Hưng Yên',
    capitalEn: 'Hung Yen City',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    emoji: '🍈',
    image: '/destinations/pho_hien_heritage.jpg',
    geographicLocation: {
      latitude: 20.6500,
      longitude: 106.0500,
      borders: 'Bordered by Hanoi and Bac Ninh to the north, Ha Nam to the west, Thai Binh to the south, and Hai Duong to the east.',
      terrain: 'Fertile alluvial plain of the Red River delta, historic river ports, lush longan orchards, and lotus lakes.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Hưng Yên', 'Tỉnh Hải Dương (kết nối không gian văn hóa Chu Đậu & Côn Sơn)'],
      summaryVi: 'Vùng châu thổ trù phú ven sông Hồng; phát triển chuỗi đô thị - công nghiệp liên kết vành đai kinh tế Thủ đô; quê hương nhãn lồng tiến vua và thương cảng Phố Hiến lừng danh.',
      summaryEn: 'Fertile Red River delta hub, connecting high-tech industrial parks with the historic Pho Hien trading port and sweet longan orchards.'
    },
    notableGeographicalCharacteristics: {
      en: 'Blessed with deep river silt along the Red River, forming Vietnam’s premier longan fruit belt and tranquil crescent lakes.',
      vi: 'Được bồi đắp bởi lớp phù sa màu mỡ sông Hồng, tạo nên vành đai nhãn lồng trứ danh và hồ Bán Nguyệt soi bóng cổ tự.'
    },
    famousLandmarks: [
      {
        nameEn: 'Pho Hien Ancient River Trading Port',
        nameVi: 'Khu di tích Quốc gia đặc biệt Phố Hiến',
        descriptionEn: 'Famous 17th-century international maritime port: "First is the Capital (Kinh Ky), second is Pho Hien".',
        descriptionVi: 'Thương cảng quốc tế sầm uất thế kỷ 17 với câu ca lưu truyền: "Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến".',
        emoji: '⛵'
      },
      {
        nameEn: 'Chu Dong Tu – Tien Dung Temple',
        nameVi: 'Đền Đa Hòa & Đền Dạ Trạch (Chu Dong Tu)',
        descriptionEn: 'Sacred riverside shrines honoring Chu Dong Tu, one of the Four Immortals of Vietnamese mythology, and Princess Tien Dung.',
        descriptionVi: 'Đền thờ Đức Thánh Chử Đồng Tử - một trong Tứ bất tử của tín ngưỡng Việt - cùng Công chúa Tiên Dung.',
        emoji: '🏛️'
      },
      {
        nameEn: 'Ban Nguyet Crescent Lake',
        nameVi: 'Hồ Bán Nguyệt',
        descriptionEn: 'A poetic crescent moon-shaped lake reflecting ancient banyan trees and historic pagodas in Hung Yen City.',
        descriptionVi: 'Hồ nước hình vầng trăng khuyết thơ mộng nằm giữa trung tâm Phố Hiến cổ kính.',
        emoji: '🌙'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Hung Yen Royal Longan (Nhan Long Hung Yen)',
        nameVi: 'Nhãn lồng tiến vua Hưng Yên',
        descriptionEn: 'Sweet, juicy, translucent longans with thick crunchy pulp wrapped around small black seeds, once offered to emperors.',
        descriptionVi: 'Đặc sản tiến vua với cùi dày giòn ngọt lịm, róc hạt và thơm nức tiếng cả nước.',
        emoji: '🍈'
      },
      {
        nameEn: 'Ban Fermented Soybean Sauce (Tuong Ban)',
        nameVi: 'Tương Bần Hưng Yên',
        descriptionEn: 'Traditional amber dipping sauce naturally brewed from sticky rice, soybeans, and golden sunshine.',
        descriptionVi: 'Nước tương truyền thống thơm bùi sánh vàng nấu từ nếp cái hoa vàng và đậu tương ủ nắng.',
        emoji: '🍯'
      }
    ],
    culturalTraditions: {
      en: 'Cherished commercial integrity from ancient Pho Hien, harmonious love legends of Chu Dong Tu, and sweet hospitality.',
      vi: 'Tinh hoa văn hóa buôn bán văn minh Phố Hiến xưa, huyền tích tình yêu Chử Đồng Tử và tình người đôn hậu nồng ấm.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Chu Dong Tu Festival',
        nameVi: 'Lễ hội Đền Chử Đồng Tử',
        unescoHeritage: false,
        descriptionEn: 'Splendid spring river festival with colorful dragon boat water-fetching processions along the Red River.',
        descriptionVi: 'Lễ hội rước nước du thuyền rồng trên sông Hồng tôn vinh tình yêu và đạo hiếu của Đức Thánh Chử.',
        emoji: '🏮'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Lotus seed longan dessert (Che sen long nhan) & Ban soybean sauce',
        productVi: 'Chè sen long nhãn & Tương Bần truyền thống',
        occupationEn: 'Longan orchardist & modern smart-factory engineer',
        occupationVi: 'Nhà vườn trồng nhãn lồng & Kỹ sư khu công nghiệp thông minh'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Red River Alluvial Sandbanks & Eco-orchards',
        nameVi: 'Bãi bồi sông Hồng & Vườn sinh thái',
        type: 'Wetland',
        descriptionEn: 'Lush green riverbanks filled with blooming sunflowers, yellow mustard flowers, and fruit groves.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Famed in folklore: "Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến", the land of golden sweet longans and serene crescent waters.',
      vi: 'Vùng đất Phố Hiến vang bóng một thời, nơi có quả nhãn lồng ngọt lịm dâng vua và hồ Bán Nguyệt êm đềm.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Longan',
        phonetic: '/ˈlɑːŋ.ɡən/',
        partOfSpeech: 'noun',
        meaningEn: 'A sweet round tropical fruit with thin brown skin and translucent juicy white flesh.',
        meaningVi: 'Quả nhãn lồng',
        exampleSentence: 'Hung Yen longans are juicy, sweet, and fragrant.',
        emoji: '🍈'
      },
      {
        word: 'Trading port',
        phonetic: '/ˈtreɪ.dɪŋ pɔːrt/',
        partOfSpeech: 'noun',
        meaningEn: 'A historic river or ocean harbor where merchants from around the world buy and sell goods.',
        meaningVi: 'Thương cảng buôn bán giao thương',
        exampleSentence: 'Pho Hien was a bustling international trading port.',
        emoji: '⛵'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Hung Yen is famous for its sweet royal [longan fruit / historic Pho Hien port].',
        patternMeaningVi: 'Hưng Yên nổi tiếng với [trái nhãn lồng tiến vua / thương cảng Phố Hiến lịch sử].',
        exampleEn: 'Hung Yen is famous for its sweet royal longan fruit and historic Pho Hien port.',
        exampleVi: 'Hưng Yên nổi tiếng với quả nhãn lồng tiến vua ngọt ngào và thương cảng Phố Hiến lịch sử.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Long ago, foreign merchant ships sailed up the Red River to Pho Hien in Hung Yen. In the summer, sweet longan fruit ripens across every village. The fruit is so sweet and delicious that people called it the "King’s Longan"!',
        question: 'What special title was given to the sweet longan fruit of Hung Yen?',
        options: ['The Royal King’s Longan (Nhãn tiến vua) 🍈', 'The Ice Fruit 🧊', 'The Salty Melon 🧂', 'The Rock Fruit 🪨'],
        correctIndex: 0,
        explanationEn: 'Hung Yen longans were so sweet and crisp that they were presented as tribute to ancient Vietnamese emperors.',
        explanationVi: 'Nhãn lồng Hưng Yên với cùi dày giòn ngọt lịm từ xưa đã được chọn làm sản vật tiến vua.'
      },
      speakingMission: {
        roleplayPromptEn: 'Introduce Hung Yen’s historic trade port and sweet fruit!',
        roleplayPromptVi: 'Đọc to câu văn giới thiệu Phố Hiến và nhãn lồng Hưng Yên bằng tiếng Anh!',
        targetSpeech: 'Hung Yen has the historic Pho Hien port and the sweetest royal longan fruit!',
        sampleAudioPhonetic: '/hʊŋ iːən hæz ðə hɪˈstɔːr.ɪk foʊ hiːən pɔːrt ænd ðə ˈswiː.tɪst ˈrɔɪ.əl ˈlɑːŋ.ɡən fruːt!/',
        pronunciationTips: 'Pronounce "sweetest royal longan" smoothly and clearly.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'hy-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which delicious tropical fruit is Hung Yen Province celebrated for producing?',
        questionVi: 'Loại quả nhiệt đới thơm ngọt nào làm nên thương hiệu nổi tiếng của Tỉnh Hưng Yên?',
        options: ['Royal Longan Fruit (Nhãn lồng) 🍈', 'Apple', 'Watermelon', 'Strawberry'],
        correctIndex: 0,
        explanationEn: 'Hung Yen is known across Vietnam for its sweet, juicy, thick-fleshed royal longans.',
        explanationVi: 'Hưng Yên nổi tiếng khắp cả nước với quả nhãn lồng thơm ngon, ngọt sắc và dày cùi.'
      },
      {
        id: 'hy-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What does the famous folk proverb "Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến" say about Hung Yen?',
        questionVi: 'Câu thành ngữ "Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến" nói lên điều gì về Hưng Yên?',
        options: [
          'Pho Hien was the second most bustling and prosperous trading center in Vietnam after Hanoi ⛵',
          'Pho Hien was a frozen polar glacier',
          'Pho Hien had no boats or shops',
          'Pho Hien was in the deep desert'
        ],
        correctIndex: 0,
        explanationEn: 'The proverb affirms that in the 17th century, Pho Hien was second only to the capital in trade and vibrancy.',
        explanationVi: 'Câu ca khẳng định vị thế thương cảng sầm uất bậc nhất của Phố Hiến chỉ đứng sau kinh thành Thăng Long.'
      },
      {
        id: 'hy-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How would you invite an international guest to try Hung Yen’s lotus seed and longan sweet soup?',
        questionVi: 'Em sẽ mời du khách quốc tế thưởng thức món chè sen long nhãn Hưng Yên bằng câu tiếng Anh nào?',
        options: [
          '"Please try this delicious lotus seed and longan dessert, a royal delicacy of Hung Yen!" 🍧',
          '"This soup is made of hot chili peppers." 🌶️',
          '"Do not taste this food." 🚫',
          '"It is frozen seawater." 🌊'
        ],
        correctIndex: 0,
        explanationEn: 'Calling it a delicious dessert and royal delicacy is polite, inviting, and culturally accurate.',
        explanationVi: 'Lời mời thưởng thức món chè thanh tao nức tiếng cung đình thể hiện sự hiếu khách và hiểu biết ẩm thực.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 13. TỈNH NINH BÌNH
  {
    code: 'NB',
    id: 'vn-34-nb',
    type: 'province',
    nameVi: 'Tỉnh Ninh Bình',
    nameEn: 'Ninh Binh Province',
    capitalVi: 'TP. Ninh Bình',
    capitalEn: 'Ninh Binh City',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    emoji: '🛶',
    image: '/destinations/trang_an_landscape.jpg',
    geographicLocation: {
      latitude: 20.2506,
      longitude: 105.9745,
      borders: 'Bordered by Hoa Binh and Ha Nam to the north, Nam Dinh to the east, Thanh Hoa to the south, and the Gulf of Tonkin.',
      terrain: 'Dramatic limestone karst towers rising from emerald waterways, peaceful submerged rice valleys, and coastal estuaries.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Ninh Bình', 'Tỉnh Nam Định', 'Tỉnh Hà Nam (không gian kết nối Tam Chúc & Đền Trần)'],
      summaryVi: 'Quần thể Di sản Văn hóa và Thiên nhiên thế giới Tràng An, Cố đô Hoa Lư - Đô thị di sản thiên niên kỷ đầu tiên; liên kết chuỗi di sản Cố đô - Tam Chúc - Đền Trần.',
      summaryEn: 'Home to Southeast Asia’s first dual UNESCO World Cultural and Natural Heritage site (Trang An), and the ancient imperial capital Hoa Lu.'
    },
    notableGeographicalCharacteristics: {
      en: 'Often called "Ha Long Bay on Land" where sheer limestone karst cliffs rise vertically from emerald rivers dotted with yellow water lilies.',
      vi: 'Được mệnh danh là "Vịnh Hạ Long trên cạn" với những vách đá vôi dựng đứng soi bóng xuống dòng sông xanh ngắt hoa súng nở.'
    },
    famousLandmarks: [
      {
        nameEn: 'Trang An Scenic Landscape Complex (UNESCO Dual Heritage)',
        nameVi: 'Quần thể Danh thắng Tràng An',
        descriptionEn: 'Southeast Asia’s first and only mixed World Heritage site combining spectacular karst nature with 30,000 years of human history.',
        descriptionVi: 'Di sản thế giới kép đầu tiên và duy nhất ở Đông Nam Á kết hợp cảnh quan karst tuyệt mỹ và dấu ấn con người tiền sử.',
        emoji: '🛶'
      },
      {
        nameEn: 'Hoa Lu Ancient Imperial Capital',
        nameVi: 'Cố đô Hoa Lư',
        descriptionEn: 'The historic capital of Vietnam in the 10th century under the Dinh and Early Le dynasties nestled among protective karst peaks.',
        descriptionVi: 'Kinh đô đầu tiên của nước Đại Cồ Việt thế kỷ thứ 10 thời vua Đinh Tiên Hoàng và Lê Đại Hành.',
        emoji: '🏯'
      },
      {
        nameEn: 'Bai Dinh Pagoda Sanctuary',
        nameVi: 'Quần thể Chùa Bái Đính',
        descriptionEn: 'A magnificent Buddhist temple complex holding numerous Asian records including the largest bronze Buddha statues.',
        descriptionVi: 'Ngôi chùa kỷ lục với tượng Phật bằng đồng dát vàng khổng lồ và hành lang La Hán dài nhất châu Á.',
        emoji: '🛕'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Crispy Rice with Savory Pork Floss (Com Chay Ninh Binh)',
        nameVi: 'Cơm cháy ruốc Ninh Bình',
        descriptionEn: 'Golden, crispy, deep-fried puffed rice crust topped with savory seasoned pork floss and rich goat gravy.',
        descriptionVi: 'Miếng cơm cháy vàng giòn rụm phủ lớp chà bông thơm bùi chấm nước sốt dê đậm đà.',
        emoji: '🍘'
      },
      {
        nameEn: 'Mountain Goat Meat Specialties',
        nameVi: 'Thịt dê núi Ninh Bình',
        descriptionEn: 'Tender mountain goat meat grazed on limestone wild herbs, prepared with fresh ginger, lemongrass, and green bananas.',
        descriptionVi: 'Thịt dê núi ăn lá thuốc trên vách đá vôi thịt chắc thơm bùi ăn kèm tương gừng ấm nóng.',
        emoji: '🥩'
      }
    ],
    culturalTraditions: {
      en: 'Heroic nation-founding spirit of King Dinh Tien Hoang, peaceful wooden sampan rowing heritage, and Buddhist harmony.',
      vi: 'Ý chí quật cường của vua Đinh Tiên Hoàng dẹp loạn 12 sứ quân, nét chèo đò bằng chân độc đáo và tâm hồn hướng Phật.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Hoa Lu Ancient Capital Festival',
        nameVi: 'Lễ hội Cố đô Hoa Lư (Trường Yên)',
        unescoHeritage: false,
        descriptionEn: 'Annual spring festival commemorating King Dinh Tien Hoang’s unification of the realm and the founding of Dai Co Viet in 968.',
        descriptionVi: 'Lễ hội mùa xuân tưởng nhớ vua Đinh Tiên Hoàng thống nhất giang sơn lập nên nhà nước Đại Cồ Việt năm 968.',
        emoji: '👑'
      },
      {
        nameEn: 'Trang An Landscape Mixed World Heritage',
        nameVi: 'Di sản Văn hóa và Thiên nhiên Thế giới Tràng An',
        unescoHeritage: true,
        descriptionEn: 'Inscribed by UNESCO in 2014 for outstanding geological karst towers and archaeological evidence of prehistoric habitation.',
        descriptionVi: 'Di sản thế giới được UNESCO công nhận năm 2014 với giá trị nổi bật toàn cầu về địa mạo và khảo cổ học.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Kim Son sedge mats & fine stone handicrafts',
        productVi: 'Chiếu cói Kim Sơn & Điêu khắc đá mỹ nghệ Ninh Vân',
        occupationEn: 'Eco-boat rower & stone carver',
        occupationVi: 'Người chèo đò du lịch Tràng An & Nghệ nhân chế tác đá mỹ nghệ'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Tam Coc - Bich Dong ("Second Cave of the Southern Sky")',
        nameVi: 'Tam Cốc – Bích Động',
        type: 'Cave',
        descriptionEn: 'Three water-carved caves along the winding Ngo Dong River bordered by golden ripening rice fields.'
      },
      {
        nameEn: 'Van Long Wetland Nature Reserve',
        nameVi: 'Khu bảo tồn đất ngập nước Vân Long',
        type: 'Wetland',
        descriptionEn: 'Tranquil "wave-free bay" sanctuary home to the largest wild population of Delacour’s langur monkeys.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Celebrated as Vietnam’s first Millennium Heritage City, where you glide quietly on wooden sampans through water-filled stone caves.',
      vi: 'Đô thị di sản thiên niên kỷ đầu tiên của Việt Nam, nơi thuyền nan lướt nhẹ qua những hang động xuyên thủy kỳ ảo.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Grotto',
        phonetic: '/ˈɡrɑː.toʊ/',
        partOfSpeech: 'noun',
        meaningEn: 'A picturesque cave, especially one carved by water under rocks.',
        meaningVi: 'Hang động nước lung linh kỳ ảo',
        exampleSentence: 'Sampan boats float quietly through the water grottos of Trang An.',
        emoji: '🛶'
      },
      {
        word: 'Millennium',
        phonetic: '/mɪˈlen.i.əm/',
        partOfSpeech: 'noun',
        meaningEn: 'A period of one thousand years of history.',
        meaningVi: 'Thiên niên kỷ (một nghìn năm)',
        exampleSentence: 'Hoa Lu is a historic city with more than a millennium of stories.',
        emoji: '⏳'
      },
      {
        word: 'Heritage',
        phonetic: '/ˈher.ɪ.t̬ɪdʒ/',
        partOfSpeech: 'noun',
        meaningEn: 'Treasures of culture and nature passed down through generations.',
        meaningVi: 'Di sản văn hóa và thiên nhiên quý giá',
        exampleSentence: 'Trang An is a world-famous dual UNESCO heritage site.',
        emoji: '🏛️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Trang An in Ninh Binh is Southeast Asia’s first [mixed World Heritage / scenic wonderland].',
        patternMeaningVi: 'Tràng An ở Ninh Bình là [di sản thế giới kép / kỳ quan phong cảnh] đầu tiên của Đông Nam Á.',
        exampleEn: 'Trang An in Ninh Binh is Southeast Asia’s first mixed World Heritage site.',
        exampleVi: 'Tràng An ở Ninh Bình là di sản thế giới kép đầu tiên của Đông Nam Á.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step onto a wooden sampan boat in Ninh Binh! The boat rower glides silently down the emerald Ngo Dong River. Towering limestone mountains rise straight up to the sky, and you duck your head as your boat passes through cool stone caves!',
        question: 'How do travelers explore the water caves of Trang An and Tam Coc?',
        options: [
          'On wooden sampan boats guided by local rowers 🛶',
          'In giant jet airplanes ✈️',
          'On roller coasters 🎢',
          'By riding camels 🐪'
        ],
        correctIndex: 0,
        explanationEn: 'Visitors ride gentle wooden sampan boats rowed by friendly local residents through the karst caves.',
        explanationVi: 'Du khách ngồi trên những chiếc thuyền nan êm ả do người dân địa phương chèo qua các hang động.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this sentence with awe and excitement!',
        roleplayPromptVi: 'Đọc to câu văn ca ngợi vẻ đẹp tuyệt mỹ của Tràng An Ninh Bình nhé!',
        targetSpeech: 'Trang An is a breathtaking UNESCO wonderland with majestic caves and emerald rivers!',
        sampleAudioPhonetic: '/trɑːŋ æn ɪz ə ˈbreθˌteɪ.kɪŋ juːˈnes.koʊ ˈwʌn.dɚ.lænd wɪð məˈdʒes.tɪk keɪvz ænd ˈem.ər.əld ˈrɪv.ɚz!/',
        pronunciationTips: 'Speak "breathtaking UNESCO wonderland" with joyful expression!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'nb-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous dual cultural and natural UNESCO World Heritage site is located in Ninh Binh?',
        questionVi: 'Di sản Thế giới kép (văn hóa & thiên nhiên) của UNESCO nào tọa lạc tại Ninh Bình?',
        options: ['Trang An Scenic Landscape Complex (Tràng An) 🛶', 'Ha Long Bay only', 'My Son Sanctuary', 'Phong Nha Caves'],
        correctIndex: 0,
        explanationEn: 'Trang An was inscribed as Southeast Asia’s first mixed (dual) UNESCO World Heritage site in 2014.',
        explanationVi: 'Tràng An được UNESCO ghi danh là Di sản Văn hóa và Thiên nhiên Thế giới kép năm 2014.'
      },
      {
        id: 'nb-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which historic 10th-century Vietnamese kingdom chose Hoa Lu in Ninh Binh as its royal capital?',
        questionVi: 'Triều đại thế kỷ thứ 10 nào đã chọn Hoa Lư (Ninh Bình) làm kinh đô nước Đại Cồ Việt?',
        options: [
          'The Dinh and Early Le Dynasties (King Dinh Tien Hoang) 👑',
          'The Roman Empire',
          'The Greek Dynasty',
          'The Egyptian Pharaohs'
        ],
        correctIndex: 0,
        explanationEn: 'King Dinh Tien Hoang unified Vietnam and chose Hoa Lu surrounded by protective mountains as the capital.',
        explanationVi: 'Vua Đinh Tiên Hoàng sau khi dẹp loạn 12 sứ quân đã đóng đô tại Hoa Lư non nước hiểm trở.'
      },
      {
        id: 'nb-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What is the best English description of Ninh Binh’s popular snack "Com Chay"?',
        questionVi: 'Câu tiếng Anh nào mô tả chính xác nhất món ăn vặt nổi tiếng "Cơm cháy" của Ninh Bình?',
        options: [
          '"Com Chay is delicious crispy puffed rice topped with savory shredded pork floss!" 🍘',
          '"Com Chay is cold vanilla ice cream." 🍦',
          '"Com Chay is boiled grass." 🌾',
          '"Com Chay is dark bitter coffee." ☕'
        ],
        correctIndex: 0,
        explanationEn: 'Describing Com Chay as crispy puffed rice topped with savory pork floss captures this beloved Ninh Binh treat.',
        explanationVi: 'Miêu tả cơm cháy giòn rụm phủ ruốc thơm bùi là cách giải thích chính xác và hấp dẫn.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 14. TỈNH THANH HÓA
  {
    code: 'TH',
    id: 'vn-34-th',
    type: 'province',
    nameVi: 'Tỉnh Thanh Hóa',
    nameEn: 'Thanh Hoa Province',
    capitalVi: 'TP. Thanh Hóa',
    capitalEn: 'Thanh Hoa City',
    region: 'North',
    zone: 'Bắc Trung Bộ',
    emoji: '🏰',
    image: '/destinations/ho_citadel_stone.jpg',
    geographicLocation: {
      latitude: 19.8067,
      longitude: 105.7852,
      borders: 'Bordered by Son La, Hoa Binh, and Ninh Binh to the north, Nghe An to the south, Laos to the west, and the Gulf of Tonkin to the east.',
      terrain: 'Expansive landmass connecting Northern and Central Vietnam, from Pu Luong forested limestone ranges to vast coastal beaches.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Thanh Hóa'],
      summaryVi: 'Tỉnh cửa ngõ nối liền Bắc Bộ và Trung Bộ; quy mô diện tích và dân số lớn với Di sản văn hóa Thành Nhà Hồ và bãi biển Sầm Sơn.',
      summaryEn: 'Gateway province bridging Northern and Central Vietnam, home to the UNESCO World Heritage Citadel of the Ho Dynasty and vibrant coastal resorts.',
      islandDistricts: ['Hòn Mê']
    },
    notableGeographicalCharacteristics: {
      en: 'A diverse land spanning the Ma and Chu river basins, pristine Pu Luong rainforest terraces, and sweeping sunny beaches like Sam Son.',
      vi: 'Địa hình đa dạng nối liền hai miền đất nước với lưu vực sông Mã, sông Chu, vùng sinh thái Pù Luông và bãi biển Sầm Sơn sóng vỗ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Citadel of the Ho Dynasty (UNESCO World Heritage)',
        nameVi: 'Thành Nhà Hồ (Thành Tây Đô)',
        descriptionEn: 'Remarkable 14th-century royal stone citadel built entirely of giant stone slabs without mortar, a unique masterpiece in East Asia.',
        descriptionVi: 'Di sản Văn hóa Thế giới UNESCO với kỹ thuật ghép những khối đá vôi nặng hàng chục tấn không dùng vữa độc nhất vô nhị.',
        emoji: '🏰'
      },
      {
        nameEn: 'Sam Son Coastal Beach',
        nameVi: 'Bãi biển Sầm Sơn',
        descriptionEn: 'Vietnam’s premier century-old summer seaside resort with soft golden sand, powerful surf, and Truong Le mountain cliffs.',
        descriptionVi: 'Bãi tắm nổi tiếng hơn 100 năm với bờ cát thoai thoải, sóng biển dạt dào và dãy núi Trường Lệ hùng vĩ.',
        emoji: '🏖️'
      },
      {
        nameEn: 'Pu Luong Nature Reserve',
        nameVi: 'Khu bảo tồn thiên nhiên Pù Luông',
        descriptionEn: 'A breathtaking ecotourism sanctuary with cascading rice terraces, traditional Thai stilt houses, and cool mountain clouds.',
        descriptionVi: 'Thiên đường sinh thái với những bản làng nhà sàn người Thái nép mình bên thung lũng ruộng bậc thang xanh mát.',
        emoji: '🌾'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Thanh Hoa Fermented Pork Rolls (Nem Chua Thanh Hoa)',
        nameVi: 'Nem chua Thanh Hóa',
        descriptionEn: 'Tangy, savory fermented lean pork mixed with pork skin, garlic, chili, and wrapped in green banana leaves.',
        descriptionVi: 'Món đặc sản trứ danh với vị chua ngọt cay giòn từ thịt nạc tươi, thính gạo, tỏi ớt cuộn lá chuối xanh.',
        emoji: '🌯'
      },
      {
        nameEn: 'Tu Tru Gai Cakes (Banh Gai Tu Tru)',
        nameVi: 'Bánh gai Tứ Trụ',
        descriptionEn: 'Jet-black sweet chewy rice cake infused with wild Gai leaves, filled with golden mung beans, coconut, and lotus seeds.',
        descriptionVi: 'Bánh dẻo đen nhánh màu lá gai thơm nức, nhân đậu xanh dừa ngọt ngào béo ngậy.',
        emoji: '🥮'
      }
    ],
    culturalTraditions: {
      en: 'Heroic Dong Son bronze drum culture, legendary courage of Lady Trieu (Ba Trieu), and peaceful Muong and Thai folk epics.',
      vi: 'Cái nôi văn hóa Đông Sơn rực rỡ trống đồng, khí phách anh hùng của Nữ tướng Bà Triệu và các trường ca dân tộc Thái, Mường.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Ba Trieu Temple Festival',
        nameVi: 'Lễ hội Đền Bà Triệu',
        unescoHeritage: false,
        descriptionEn: 'Grand spring festival on Tung Mountain honoring the 3rd-century heroine Lady Trieu who rode elephants against invaders.',
        descriptionVi: 'Lễ hội mùa xuân trên núi Tùng tưởng nhớ nữ anh hùng kiệt xuất cưỡi voi đánh đuổi quân Đông Ngô giữ vững khí tiết.',
        emoji: '🐘'
      },
      {
        nameEn: 'Citadel of the Ho Dynasty World Heritage',
        nameVi: 'Di sản Văn hóa Thế giới Thành Nhà Hồ',
        unescoHeritage: true,
        descriptionEn: 'Inscribed in 2011 as a testament to advanced imperial defensive architecture using massive interlocking stone blocks.',
        descriptionVi: 'Được UNESCO vinh danh năm 2011 là kiệt tác kiến trúc thành đá kỳ vĩ bậc nhất Đông Nam Á thời Trung cổ.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Dong Son replica bronze drums & Thanh Hoa fish sauce',
        productVi: 'Đúc đồng phỏng cổ Đông Sơn & Nước mắm Ba Làng',
        occupationEn: 'Bronze caster & tourism guide',
        occupationVi: 'Nghệ nhân đúc đồng truyền thống & Hướng dẫn viên du lịch di sản'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Cam Luong Holy Fish Stream',
        nameVi: 'Suối cá thần Cẩm Lương',
        type: 'Lake',
        descriptionEn: 'Mysterious freshwater mountain stream teeming with thousands of colorful sacred mountain carp guarded by villagers.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The land of heroic figures, monumental stone palaces, ancient bronze drums, and the gateway linking North and Central Vietnam.',
      vi: 'Vùng đất "địa linh nhân kiệt", cái nôi của văn hóa trống đồng Đông Sơn và thành lũy bằng đá sừng sững giữa đất trời.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Citadel',
        phonetic: '/ˈsɪt̬.ə.dəl/',
        partOfSpeech: 'noun',
        meaningEn: 'A strong stone fortress built to protect an imperial capital.',
        meaningVi: 'Thành lũy, tòa thành kiên cố',
        exampleSentence: 'The Ho Dynasty Citadel is built with massive stone blocks.',
        emoji: '🏰'
      },
      {
        word: 'Mortar',
        phonetic: '/ˈmɔːr.t̬ɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A mixture of sand and cement used to stick building stones together.',
        meaningVi: 'Vữa xây (vữa kết dính gạch đá)',
        exampleSentence: 'The ancient stone walls stand strong without any mortar.',
        emoji: '🧱'
      },
      {
        word: 'Gateway',
        phonetic: '/ˈɡeɪt.weɪ/',
        partOfSpeech: 'noun',
        meaningEn: 'An opening or province that connects two large regions together.',
        meaningVi: 'Cửa ngõ kết nối các vùng đất',
        exampleSentence: 'Thanh Hoa is the grand gateway connecting Northern and Central Vietnam.',
        emoji: '🚪'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Thanh Hoa is famous for the UNESCO-recognized [Citadel of the Ho Dynasty / Sam Son beach].',
        patternMeaningVi: 'Thanh Hóa nổi tiếng với [Thành Nhà Hồ được UNESCO công nhận / bãi biển Sầm Sơn].',
        exampleEn: 'Thanh Hoa is famous for the UNESCO-recognized Citadel of the Ho Dynasty.',
        exampleVi: 'Thanh Hóa nổi tiếng với Di tích Thành Nhà Hồ được UNESCO công nhận.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Stand before the ancient south gate of the Ho Dynasty Citadel in Thanh Hoa! Look closely at the huge stone blocks: each one weighs over twenty tons! Skilled builders carved and fitted them together so tightly without any cement mortar six hundred years ago!',
        question: 'What is special about the stone walls of the Ho Dynasty Citadel?',
        options: [
          'They were built with huge stones fitted together without mortar 🏰',
          'They are made of colorful plastic blocks 🧱',
          'They were made of cardboard paper 📦',
          'They were painted with chocolate 🍫'
        ],
        correctIndex: 0,
        explanationEn: 'The citadel is world-renowned for its architectural feat of interlocking massive limestone slabs without mortar.',
        explanationVi: 'Thành Nhà Hồ nổi danh thế giới nhờ kỹ thuật ghép các khối đá vôi khổng lồ ăn khớp không cần vữa kết dính.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share this exciting sentence about Thanh Hoa’s heritage with confidence!',
        roleplayPromptVi: 'Đọc to câu giới thiệu về vùng đất lịch sử Thành Nhà Hồ bằng tiếng Anh!',
        targetSpeech: 'Thanh Hoa has the magnificent stone Citadel of the Ho Dynasty!',
        sampleAudioPhonetic: '/tæŋ hwɑː hæz ðə mæɡˈnɪf.ə.sənt stoʊn ˈsɪt̬.ə.dəl əv ðə hoʊ ˈdɪn.ə.sti!/',
        pronunciationTips: 'Say "mag-NIF-i-cent" with proud energy and emphasize "stone Citadel".'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'th-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which UNESCO World Cultural Heritage stone citadel is located in Thanh Hoa Province?',
        questionVi: 'Thành cổ bằng đá nào là Di sản Văn hóa Thế giới UNESCO tọa lạc tại Tỉnh Thanh Hóa?',
        options: ['Citadel of the Ho Dynasty (Thành Nhà Hồ) 🏰', 'Hanoi Opera House', 'Ben Thanh Market', 'My Son Sanctuary'],
        correctIndex: 0,
        explanationEn: 'The Citadel of the Ho Dynasty was recognized by UNESCO as a World Cultural Heritage site in 2011.',
        explanationVi: 'Thành Nhà Hồ tại Thanh Hóa được UNESCO công nhận là Di sản Văn hóa Thế giới năm 2011.'
      },
      {
        id: 'th-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why is Thanh Hoa called the "gateway province" of Vietnam?',
        questionVi: 'Vì sao Thanh Hóa được gọi là "tỉnh cửa ngõ" của Việt Nam?',
        options: [
          'It connects Northern Vietnam with Central Vietnam geographically and culturally 🚪',
          'It is located on an island in the Pacific Ocean 🏝️',
          'It has no roads or bridges 🚫',
          'It is covered in desert sand dunes 🏜️'
        ],
        correctIndex: 0,
        explanationEn: 'Thanh Hoa serves as the natural bridge and transit corridor linking the Northern delta with Central regions.',
        explanationVi: 'Thanh Hóa là cầu nối địa lý và văn hóa quan trọng nối liền vùng đồng bằng Bắc Bộ với dải đất miền Trung.'
      },
      {
        id: 'th-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Thanh Hoa’s popular specialty "Nem Chua" in English?',
        questionVi: 'Em miêu tả món đặc sản "Nem chua Thanh Hóa" bằng tiếng Anh như thế nào cho chuẩn xác?',
        options: [
          '"Nem Chua is a famous tangy and savory fermented pork roll seasoned with garlic, chili, and wrapped in banana leaves!" 🌯',
          '"Nem Chua is a sweet chocolate ice cream bar." 🍦',
          '"Nem Chua is a hot cup of tea." ☕',
          '"Nem Chua is boiled plain rice." 🍚'
        ],
        correctIndex: 0,
        explanationEn: 'Describing Nem Chua as tangy and savory fermented pork with garlic and chili wrapped in banana leaves is accurate and enticing.',
        explanationVi: 'Miêu tả nem chua với vị chua ngọt giòn cay từ tỏi ớt cuộn lá chuối là cách giới thiệu chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  }
];
