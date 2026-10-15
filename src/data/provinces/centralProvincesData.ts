import { ProvinceEducationalData } from './types';

export const CENTRAL_PROVINCES_DATA: ProvinceEducationalData[] = [
  // 15. TỈNH NGHỆ AN
  {
    code: 'NA',
    id: 'vn-34-na',
    type: 'province',
    nameVi: 'Tỉnh Nghệ An',
    nameEn: 'Nghe An Province',
    capitalVi: 'TP. Vinh',
    capitalEn: 'Vinh City',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    emoji: '⭐',
    image: '/destinations/kim_lien_uncle_ho.jpg',
    geographicLocation: {
      latitude: 19.3000,
      longitude: 104.9000,
      borders: 'Bordered by Thanh Hoa to the north, Ha Tinh to the south, Laos to the west, and the Gulf of Tonkin to the east.',
      terrain: 'The largest natural province in Vietnam spanning western Pu Mat mountain ranges, Lam River basin, and Cua Lo coastline.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Nghệ An'],
      summaryVi: 'Tỉnh có diện tích tự nhiên lớn nhất cả nước; quê hương Chủ tịch Hồ Chí Minh (Nam Đàn), đô thị biển Vinh – Cửa Lò và cái nôi Dân ca Ví, Giặm UNESCO.',
      summaryEn: 'Vietnam’s largest province by land area, birthplace of President Ho Chi Minh in Nam Dan, and home to UNESCO Vi-Giam folk singing.',
      islandDistricts: ['Hòn Mắt', 'Hòn Ngư']
    },
    notableGeographicalCharacteristics: {
      en: 'Vast forested mountains in Pu Mat National Park, the meandering Lam River, and long golden sandy beaches at Cua Lo.',
      vi: 'Rừng nguyên sinh Pù Mát trập trùng, dòng sông Lam xanh biếc soi bóng núi Hồng và bãi biển Cửa Lò cát mịn thoai thoải.'
    },
    famousLandmarks: [
      {
        nameEn: 'Kim Lien Special National Historic Site',
        nameVi: 'Khu di tích Quốc gia đặc biệt Kim Liên (Nam Đàn)',
        descriptionEn: 'The peaceful village home where President Ho Chi Minh spent his childhood under thatched roofs shaded by bamboo.',
        descriptionVi: 'Quê nội Làng Sen và quê ngoại Làng Hoàng Trù nơi Bác Hồ cất tiếng khóc chào đời và trải qua thời niên thiếu.',
        emoji: '🏡'
      },
      {
        nameEn: 'Cua Lo Beach & Fishery Island',
        nameVi: 'Đô thị biển Cửa Lò & Đảo Hòn Ngư',
        descriptionEn: 'Famous summer coastal resort with gentle surf, pine-shaded boulevards, and fresh seafood harbor.',
        descriptionVi: 'Bãi biển cát trắng nước trong với hàng phi lao chắn gió và đảo Hòn Ngư che chắn phía ngoài khơi.',
        emoji: '🏖️'
      },
      {
        nameEn: 'Pu Mat National Park',
        nameVi: 'Vườn quốc gia Pù Mát',
        descriptionEn: 'Biosphere sanctuary of the Truong Son range home to the rare Saola ("Asian Unicorn") and majestic Khe Kem waterfall.',
        descriptionVi: 'Khu bảo tồn sinh thái rừng nguyên sinh nơi sinh sống của loài Sao la quý hiếm và thác Khe Kèm tuyệt mỹ.',
        emoji: '🌿'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Nghe An Savory Swamp Eel Soup (Chao Luon Nghe An)',
        nameVi: 'Cháo lươn & Súp lươn xứ Nghệ',
        descriptionEn: 'Spicy, tender field eel simmered with turmeric, fresh shallots, and spicy chili served with crisp bread or banh muot.',
        descriptionVi: 'Thịt lươn đồng xào nghệ vàng óng đậm đà cay nồng ăn cùng cháo hoa hoặc bánh mướt nóng hổi.',
        emoji: '🍲'
      },
      {
        nameEn: 'Xa Doai Sweet Oranges',
        nameVi: 'Cam Xã Đoài',
        descriptionEn: 'Golden, thin-skinned heritage oranges celebrated for their sweet fragrance and honey nectar.',
        descriptionVi: 'Giống cam tiến vua thơm nức mọng nước ngọt thanh đượm sắc vàng óng ả xứ Đoài.',
        emoji: '🍊'
      }
    ],
    culturalTraditions: {
      en: 'Fervent scholarly dedication, deep revolutionary patriotism, and the heartfelt communal melodies of Vi-Giam folk songs.',
      vi: 'Truyền thống hiếu học đất học xứ Nghệ, khí phách kiên trung cách mạng và những câu hò điệu Ví, Giặm nghĩa tình.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Sen Village Festival (Lễ hội Làng Sen)',
        nameVi: 'Lễ hội Làng Sen',
        unescoHeritage: false,
        descriptionEn: 'Annual May cultural festival held on President Ho Chi Minh’s birthday celebrating national unity and arts.',
        descriptionVi: 'Lễ hội tổ chức vào dịp sinh nhật Bác 19/5 với tiếng hát dâng Người và hương sen thơm ngát quê nhà.',
        emoji: '🪷'
      },
      {
        nameEn: 'Vi and Giam Folk Songs of Nghe Tinh',
        nameVi: 'Dân ca Ví, Giặm Nghệ Tĩnh',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Intangible Cultural Heritage of Humanity celebrating lyrical call-and-response singing along the Lam river.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể của Nhân loại ghi danh năm 2014 tôn vinh câu hát ví đò đưa thấm đượm tình quê.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Con Cuong brocade weaving & Cua Lo marine squid',
        productVi: 'Thổ cẩm Môn Sơn & Mực nháy Cửa Lò',
        occupationEn: 'Fisherman & orange orchard farmer',
        occupationVi: 'Ngư dân đánh bắt hải sản & Người làm vườn cam'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Khe Kem Waterfall',
        nameVi: 'Thác Khe Kèm',
        type: 'Waterfall',
        descriptionEn: 'A thundering 500-meter virgin waterfall tumbling down mossy rocks in the heart of Pu Mat rainforest.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The largest province in Vietnam and the sacred cradle where President Ho Chi Minh began his journey to liberate the nation.',
      vi: 'Tỉnh có diện tích lớn nhất Việt Nam, quê hương Bác Hồ kính yêu và mảnh đất địa linh nhân kiệt kiên trung.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Patriotism',
        phonetic: '/ˈpeɪ.tri.ə.tɪ.zəm/',
        partOfSpeech: 'noun',
        meaningEn: 'Deep love and devotion for your country and its people.',
        meaningVi: 'Lòng yêu nước nồng nàn',
        exampleSentence: 'President Ho Chi Minh dedicated his life to patriotism and freedom.',
        emoji: '❤️'
      },
      {
        word: 'Thatched roof',
        phonetic: '/θætʃt ruːf/',
        partOfSpeech: 'noun',
        meaningEn: 'A simple house roof made of dried palm straw or reed grass.',
        meaningVi: 'Mái tranh mộc mạc',
        exampleSentence: 'Uncle Ho grew up under a simple thatched roof in Kim Lien village.',
        emoji: '🏡'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Nghe An is proud to be the birthplace of [President Ho Chi Minh / Vi-Giam songs].',
        patternMeaningVi: 'Nghệ An tự hào là quê hương của [Chủ tịch Hồ Chí Minh / Dân ca Ví, Giặm].',
        exampleEn: 'Nghe An is proud to be the birthplace of President Ho Chi Minh.',
        exampleVi: 'Nghệ An tự hào là quê hương của Chủ tịch Hồ Chí Minh.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Welcome to Kim Lien village in Nghe An Province! Walk down the peaceful red dirt path lined with green bamboo and pink lotus ponds. Here in this simple cottage with a thatched roof, our beloved President Ho Chi Minh was born in May 1890.',
        question: 'Who was born in the simple cottage in Kim Lien village, Nghe An?',
        options: ['President Ho Chi Minh 🇻🇳', 'A fairy king', 'An ancient warrior', 'An astronaut'],
        correctIndex: 0,
        explanationEn: 'Kim Lien village in Nam Dan, Nghe An is the beloved birthplace of President Ho Chi Minh.',
        explanationVi: 'Làng Sen (Kim Liên, Nam Đàn, Nghệ An) là quê hương yêu dấu nơi Chủ tịch Hồ Chí Minh cất tiếng khóc chào đời.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this proud sentence honoring Nghe An and Uncle Ho in English!',
        roleplayPromptVi: 'Đọc to câu nói tôn vinh quê hương Bác Hồ bằng tiếng Anh nhé!',
        targetSpeech: 'Nghe An is the proud homeland of President Ho Chi Minh!',
        sampleAudioPhonetic: '/ŋeɪ æn ɪz ðə praʊd ˈhoʊm.lænd əv ˈprez.ɪ.dənt hoʊ tʃiː mɪn!/',
        pronunciationTips: 'Speak with heartfelt pride: "Nghe An is the PROUD homeland of President Ho Chi Minh!"'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'na-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which beloved national leader was born in Kim Lien Village, Nghe An Province?',
        questionVi: 'Vị lãnh tụ vĩ đại nào của dân tộc ta sinh ra tại Làng Kim Liên, Tỉnh Nghệ An?',
        options: ['President Ho Chi Minh (Chủ tịch Hồ Chí Minh) 🇻🇳', 'General Vo Nguyen Giap', 'King Tran Nhan Tong', 'King Le Loi'],
        correctIndex: 0,
        explanationEn: 'President Ho Chi Minh was born in Kim Lien (Sen Village), Nam Dan District, Nghe An Province.',
        explanationVi: 'Chủ tịch Hồ Chí Minh sinh ra tại Làng Sen (Kim Liên), huyện Nam Đàn, Tỉnh Nghệ An.'
      },
      {
        id: 'na-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which lyrical folk singing genre shared by Nghe An and Ha Tinh is honored by UNESCO?',
        questionVi: 'Làn điệu dân ca trữ tình nào chung của Nghệ An và Hà Tĩnh được UNESCO vinh danh?',
        options: [
          'Vi and Giam Folk Songs of Nghe Tinh (Dân ca Ví, Giặm) 🎶',
          'Chau Van Singing',
          'Hau Dong Ritual',
          'Samba Dance'
        ],
        correctIndex: 0,
        explanationEn: 'Vi and Giam folk songs were inscribed on UNESCO’s Intangible Cultural Heritage list in 2014.',
        explanationVi: 'Dân ca Ví, Giặm Nghệ Tĩnh được UNESCO vinh danh là Di sản Văn hóa Phi vật thể của Nhân loại năm 2014.'
      },
      {
        id: 'na-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Choose the best English sentence to describe Nghe An’s land area and spirit:',
        questionVi: 'Chọn câu tiếng Anh miêu tả đúng nhất về diện tích và tinh thần con người Nghệ An:',
        options: [
          '"Nghe An is Vietnam’s largest province, celebrated for its heroic history, scenic beaches, and sweet lotus ponds!" 🪷',
          '"Nghe An is smaller than a football field." ⚽',
          '"There is no history in Nghe An." 🚫',
          '"Nghe An is located on an icy iceberg." 🧊'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting it as Vietnam’s largest province with heroic history and scenic beauty captures its essence.',
        explanationVi: 'Khẳng định Nghệ An là tỉnh lớn nhất nước với lịch sử anh hùng và cảnh sắc hữu tình là chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 16. TỈNH HÀ TĨNH
  {
    code: 'HT',
    id: 'vn-34-ht',
    type: 'province',
    nameVi: 'Tỉnh Hà Tĩnh',
    nameEn: 'Ha Tinh Province',
    capitalVi: 'TP. Hà Tĩnh',
    capitalEn: 'Ha Tinh City',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    emoji: '📜',
    image: '/destinations/dong_loc_crossroads.jpg',
    geographicLocation: {
      latitude: 18.3559,
      longitude: 105.8997,
      borders: 'Bordered by Nghe An to the north, Quang Binh (Quang Tri) to the south, Laos to the west, and the East Sea to the east.',
      terrain: 'Framed by the legendary 99 peaks of Hong Linh Mountain, the gentle La River, and the Vung Ang coastal deep-water port.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Hà Tĩnh'],
      summaryVi: 'Địa bàn Khu kinh tế Vũng Áng ven biển; quê hương Đại thi hào Nguyễn Du (Tác giả Truyện Kiều) và di tích lịch sử Ngã ba Đồng Lộc anh hùng.',
      summaryEn: 'Home to world cultural figure Nguyen Du (author of The Tale of Kieu), Dong Loc Junction heroic monument, and Vung Ang deep seaport.'
    },
    notableGeographicalCharacteristics: {
      en: 'Dominated by the 99 rocky ridges of Hong Linh Mountain facing the blue La River, and vast coastal pine forests along Thien Cam Beach.',
      vi: 'Ngọn núi Hồng Lĩnh 99 ngọn hùng vĩ soi bóng xuống dòng sông La thơ mộng và bãi biển Thiên Cầm "tiếng đàn trời" êm đềm.'
    },
    famousLandmarks: [
      {
        nameEn: 'Dong Loc T-Junction Heroic Monument',
        nameVi: 'Khu di tích lịch sử Ngã ba Đồng Lộc',
        descriptionEn: 'Sacred historic crossroads where ten young brave female youth volunteers sacrificed their lives to keep the supply road open in 1968.',
        descriptionVi: 'Khu tưởng niệm 10 cô gái thanh niên xung phong anh dũng hy sinh giữ vững huyết mạch giao thông chi viện miền Nam.',
        emoji: '⭐'
      },
      {
        nameEn: 'Nguyen Du Memorial Monument (Tien Dien)',
        nameVi: 'Khu lưu niệm Đại thi hào Nguyễn Du',
        descriptionEn: 'Memorial honoring Vietnam’s world-celebrated literary master Nguyen Du, author of the immortal epic poem "The Tale of Kieu".',
        descriptionVi: 'Khu lưu niệm Danh nhân văn hóa thế giới Nguyễn Du - tác giả kiệt tác Truyện Kiều bất hủ ngàn đời.',
        emoji: '📜'
      },
      {
        nameEn: 'Thien Cam Beach ("Heaven’s Lute")',
        nameVi: 'Biển Thiên Cầm',
        descriptionEn: 'Curved bay named "Heaven’s Lute" where gentle waves striking coastal cliffs create the relaxing musical sound of a harp.',
        descriptionVi: 'Bãi biển hình cây đàn huyền cầm nơi tiếng sóng vỗ vào vách đá tạo nên bản hòa ca êm dịu của trời đất.',
        emoji: '🏖️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Ha Tinh Cu Do Peanut Molasses Candy (Keo Cu Do)',
        nameVi: 'Kẹo Cu Đơ Hà Tĩnh',
        descriptionEn: 'Crunchy roasted peanuts and fresh spicy ginger embedded in golden cane molasses between two crispy rice crackers.',
        descriptionVi: 'Kẹo lạc giòn rụm nấu cùng mật mía sánh đặc và gừng cay kẹp giữa hai chiếc bánh tráng nướng thơm phức.',
        emoji: '🥜'
      },
      {
        nameEn: 'Huong Son Medicinal Honey Pomelo (Cam Bu Huong Son)',
        nameVi: 'Cam bù Hương Sơn',
        descriptionEn: 'Juicy winter citrus fruit with thick fragrant peel and sweet refreshing flesh prized for health and vitality.',
        descriptionVi: 'Trái cam chín mọng vào dịp Tết vỏ vàng thơm phức, vị ngọt đậm đà thanh nhiệt bổ dưỡng.',
        emoji: '🍊'
      }
    ],
    culturalTraditions: {
      en: 'Fervent passion for poetry, moral loyalty, indomitable resilience through typhoons, and soothing Vi-Giam singing on river boats.',
      vi: 'Tình yêu thơ ca Truyện Kiều sâu nặng, khí phách kiên cường vượt qua bão lũ và câu hò ví đò đưa trên dòng sông La.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Nguyen Du World Cultural Commemoration',
        nameVi: 'Lễ kỷ niệm Đại thi hào Nguyễn Du',
        unescoHeritage: true,
        descriptionEn: 'Global UNESCO cultural commemoration honoring the literary humanist philosophy of Nguyen Du.',
        descriptionVi: 'Sự kiện văn hóa được UNESCO vinh danh tôn vinh giá trị nhân văn cao đẹp của tác phẩm Truyện Kiều.'
      },
      {
        nameEn: 'Huong Tich Pagoda Spring Festival (Hong Linh)',
        nameVi: 'Lễ hội Chùa Hương Tích (Núi Hồng Lĩnh)',
        unescoHeritage: false,
        descriptionEn: 'Ancient mountain pilgrimage pagoda perched among pine clouds on the slopes of Hong Linh mountain.',
        descriptionVi: 'Ngôi chùa cổ kính xây dựng từ thời nhà Trần ẩn hiện giữa làn sương mây đỉnh núi Hồng Lĩnh.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Huong Son deer antlers (Nhung huou) & Phuc Trach pomelo',
        productVi: 'Nhung hươu Hương Sơn & Bưởi Phúc Trạch',
        occupationEn: 'Deer breeder & steel harbor engineer',
        occupationVi: 'Người nuôi hươu sao lấy nhung & Kỹ sư cảng biển công nghiệp Vũng Áng'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Ke Go Lake Nature Reserve',
        nameVi: 'Khu bảo tồn thiên nhiên Hồ Kẻ Gỗ',
        type: 'Lake',
        descriptionEn: 'Vast forest reservoir celebrating Vietnam’s green engineering, home to endangered pheasants and clear waters.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The land of Hong Linh’s 99 peaks, immortal verses of The Tale of Kieu, and the sacred courage of Dong Loc crossroads.',
      vi: 'Vùng đất 99 ngọn núi Hồng, tiếng thơ Kiều lay động triệu trái tim và khúc tráng ca bất tử Ngã ba Đồng Lộc.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Epic poem',
        phonetic: '/ˈep.ɪk ˈpoʊ.əm/',
        partOfSpeech: 'noun',
        meaningEn: 'A long, grand poem telling the story of brave heroes and great journeys.',
        meaningVi: 'Trường ca, kiệt tác truyện thơ',
        exampleSentence: 'The Tale of Kieu is Vietnam’s most celebrated epic poem.',
        emoji: '📜'
      },
      {
        word: 'Molasses',
        phonetic: '/məˈlæs.ɪz/',
        partOfSpeech: 'noun',
        meaningEn: 'Thick, sweet, dark syrup made from boiled sugarcane juice.',
        meaningVi: 'Mật mía cô đặc ngọt ngào',
        exampleSentence: 'Cu Do candy is made with sweet golden cane molasses and ginger.',
        emoji: '🍯'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Ha Tinh is the proud homeland of the great poet [poet name].',
        patternMeaningVi: 'Hà Tĩnh là quê hương đáng tự hào của đại thi hào [tên nhà thơ].',
        exampleEn: 'Ha Tinh is the proud homeland of the great poet Nguyen Du.',
        exampleVi: 'Hà Tĩnh là quê hương đáng tự hào của đại thi hào Nguyễn Du.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Listen to the gentle waves of Thien Cam Beach in Ha Tinh Province! Ancient travelers named this bay "Heaven’s Lute" because the sea breeze whispering through the pine trees sounds like a magical harp playing in the sky.',
        question: 'Why is Thien Cam Beach in Ha Tinh named "Heaven’s Lute"?',
        options: [
          'The sea breeze and waves sound like a magical harp playing music 🎶',
          'It has the tallest roller coaster',
          'A giant piano was built on the water',
          'It is made of gold coins'
        ],
        correctIndex: 0,
        explanationEn: 'Thien Cam translates to "Heaven’s Lute" because the waves and wind create natural musical chords against the cliffs.',
        explanationVi: 'Thiên Cầm có nghĩa là "Đàn trời" vì tiếng sóng gió dội vào vách núi tạo nên âm thanh như tiếng đàn du dương.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an inspiring line honoring the heroines of Dong Loc!',
        roleplayPromptVi: 'Đọc to câu văn tưởng nhớ 10 cô gái anh hùng Ngã ba Đồng Lộc bằng tiếng Anh!',
        targetSpeech: 'Dong Loc in Ha Tinh is a sacred monument of courage and patriotism!',
        sampleAudioPhonetic: '/dɒŋ lɒk ɪn hæ tɪŋ ɪz ə ˈseɪ.krɪd ˈmɑːn.jə.mənt əv ˈkɝː.ɪdʒ ænd ˈpeɪ.tri.ə.tɪ.zəm!/',
        pronunciationTips: 'Say "sacred monument" with heartfelt respect: SAY-krid MON-yoo-ment.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'ht-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which world-renowned Vietnamese poet, author of "The Tale of Kieu", was born in Ha Tinh?',
        questionVi: 'Đại thi hào dân tộc nào, tác giả của kiệt tác "Truyện Kiều", sinh ra tại Hà Tĩnh?',
        options: ['Great Poet Nguyen Du (Đại thi hào Nguyễn Du) 📜', 'William Shakespeare', 'Hans Christian Andersen', 'Homer'],
        correctIndex: 0,
        explanationEn: 'Nguyen Du was born into the noble Nguyen clan of Tien Dien, Nghi Xuan, Ha Tinh Province.',
        explanationVi: 'Đại thi hào Nguyễn Du sinh ra tại làng Tiên Điền, huyện Nghi Xuân, Tỉnh Hà Tĩnh.'
      },
      {
        id: 'ht-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What is the signature snack of Ha Tinh made of crunchy peanuts, cane molasses, and ginger?',
        questionVi: 'Món kẹo đặc sản của Hà Tĩnh làm từ lạc giòn, mật mía và gừng kẹp bánh tráng là gì?',
        options: ['Keo Cu Do (Cu Do Peanut Candy) 🥜', 'Chocolate bar', 'Cotton candy', 'Bubble gum'],
        correctIndex: 0,
        explanationEn: 'Keo Cu Do is Ha Tinh’s beloved treat, pairing roasted peanuts with ginger cane molasses.',
        explanationVi: 'Kẹo Cu Đơ giòn cay bùi ngọt là món quà quê nức tiếng của người dân Hà Tĩnh.'
      },
      {
        id: 'ht-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe the significance of Dong Loc Junction in English to a foreign student?',
        questionVi: 'Em giải thích ý nghĩa lịch sử của Ngã ba Đồng Lộc bằng tiếng Anh như thế nào?',
        options: [
          '"Dong Loc Junction is a sacred historic site honoring the heroic sacrifice of ten brave young women for Vietnam’s peace!" ⭐',
          '"Dong Loc is a shopping mall with video games." 🎮',
          '"It is an amusement waterpark." 🏊',
          '"Nothing happened at Dong Loc." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Describing it as a sacred site honoring the heroic sacrifice of ten young women captures its profound patriotic meaning.',
        explanationVi: 'Mô tả Ngã ba Đồng Lộc là di tích thiêng liêng tôn vinh sự hy sinh anh dũng của 10 cô gái thanh niên xung phong là rất chuẩn xác.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 17. TỈNH QUẢNG TRỊ
  {
    code: 'QT',
    id: 'vn-34-qt',
    type: 'province',
    nameVi: 'Tỉnh Quảng Trị',
    nameEn: 'Quang Tri Province',
    capitalVi: 'TP. Đông Hà',
    capitalEn: 'Dong Ha City',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    emoji: '🕊️',
    image: '/destinations/hien_luong_bridge.jpg',
    geographicLocation: {
      latitude: 16.8167,
      longitude: 107.1000,
      borders: 'Bordered by Ha Tinh to the north, Hue to the south, Laos to the west, and the East Sea to the east.',
      terrain: 'Heroic land connecting the Truong Son mountains, Phong Nha karst caves to the north, Ben Hai River, and offshore Con Co Island.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Quảng Trị', 'Tỉnh Quảng Bình (không gian di sản Phong Nha – Kẻ Bàng)'],
      summaryVi: 'Vùng đất lịch sử anh hùng nối liền Quảng Bình – Quảng Trị theo quy hoạch 2025; sở hữu Di sản Thiên nhiên Thế giới Vườn quốc gia Phong Nha – Kẻ Bàng, Sông Bến Hải – Cầu Hiền Lương và Huyện đảo tiền tiêu Cồn Cỏ.',
      summaryEn: 'Heroic historical land uniting Quang Binh and Quang Tri, home to the UNESCO World Heritage Phong Nha - Ke Bang National Park, Hien Luong Bridge on the 17th Parallel, and sovereign Con Co Island.',
      islandDistricts: ['Huyện đảo Cồn Cỏ', 'Hòn Gió']
    },
    notableGeographicalCharacteristics: {
      en: 'Home to the world’s largest subterranean cave systems (Son Doong, En Cave), pure turquoise underground rivers, and peaceful white sand beaches.',
      vi: 'Sở hữu hệ thống hang động đá vôi lớn nhất hành tinh (Hang Sơn Đoòng, Hang Én), sông ngầm xanh biếc và dải cát trắng mịn màng.'
    },
    famousLandmarks: [
      {
        nameEn: 'Son Doong Cave & Phong Nha – Ke Bang (UNESCO)',
        nameVi: 'Hang Sơn Đoòng & Vườn quốc gia Phong Nha – Kẻ Bàng',
        descriptionEn: 'The largest natural cave on planet Earth with its own underground rainforest, river, and subterranean cloud system.',
        descriptionVi: 'Hang động tự nhiên lớn nhất thế giới với rừng nguyên sinh trong lòng đất, sông ngầm và mây mù kỳ ảo.',
        emoji: '🪨'
      },
      {
        nameEn: 'Hien Luong Bridge & Ben Hai River (17th Parallel)',
        nameVi: 'Cầu Hiền Lương & Sông Bến Hải (Vĩ tuyến 17)',
        descriptionEn: 'Historic demarcation bridge symbolizing the pain of national division and the glorious triumph of national reunification in 1975.',
        descriptionVi: 'Cây cầu lịch sử bắc qua vĩ tuyến 17 chứng nhân cho khát vọng thống nhất non sông cháy bỏng của dân tộc.',
        emoji: '🌉'
      },
      {
        nameEn: 'Quang Tri Ancient Citadel',
        nameVi: 'Thành cổ Quảng Trị',
        descriptionEn: 'Sacred memorial fortress marking the heroic 81-day and night battle in the fierce summer of 1972.',
        descriptionVi: 'Chiến trường khốc liệt mùa hè đỏ lửa 1972 nơi từng tấc đất ngọn cỏ thấm đượm máu đào của các anh hùng liệt sĩ.',
        emoji: '🏰'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Mai Xa Mussel Noodle Soup (Bun Hen Mai Xa)',
        nameVi: 'Bún hến Mai Xá',
        descriptionEn: 'Sweet river mussel noodle soup seasoned with fresh ginger, coriander, and crispy chili crackers.',
        descriptionVi: 'Món bún hến chắt Mai Xá ngọt thanh béo bùi từ dòng sông Thạch Hãn thơm nồng vị gừng cay.',
        emoji: '🍜'
      },
      {
        nameEn: 'Quang Tri Herbal Che Vang Tea',
        nameVi: 'Cao chè vằng Quảng Trị',
        descriptionEn: 'Bitter sweet wild medicinal tea extracted from mountain herbs celebrated for cleansing and digestion.',
        descriptionVi: 'Cao thảo dược thiên nhiên có vị đắng trước ngọt sau giúp thanh nhiệt giải độc và bồi bổ sức khỏe.',
        emoji: '🍵'
      }
    ],
    culturalTraditions: {
      en: 'Unshakable yearning for national peace, sacred lantern releases on the Thach Han river, and unyielding courage.',
      vi: 'Khát vọng hòa bình bất diệt, nét đẹp thả hoa đăng tưởng niệm bên dòng Thạch Hãn và tinh thần quật khởi phi thường.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Festival for Peace (Lễ hội Vì Hòa bình)',
        nameVi: 'Lễ hội Vì Hòa bình',
        unescoHeritage: false,
        descriptionEn: 'International cultural festival celebrating peace, reconciliation, and humanity at Hien Luong Bridge.',
        descriptionVi: 'Lễ hội quốc tế tôn vinh giá trị hòa bình và sự hàn gắn vết thương chiến tranh nơi vĩ tuyến 17.',
        emoji: '🕊️'
      },
      {
        nameEn: 'Phong Nha - Ke Bang National Park UNESCO World Heritage',
        nameVi: 'Di sản Thiên nhiên Thế giới Phong Nha – Kẻ Bàng',
        unescoHeritage: true,
        descriptionEn: 'Twice inscribed by UNESCO for outstanding geological history, karst evolution, and global biodiversity.',
        descriptionVi: 'Hai lần được UNESCO vinh danh về địa chất địa mạo và hệ sinh thái rừng nhiệt đới trên núi đá vôi.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Forest Che Vang tea blocks & cave trekking guide',
        productVi: 'Cao chè vằng Định Sơn & Dịch vụ thám hiểm hang động',
        occupationEn: 'Cave expedition expert & peace monument curator',
        occupationVi: 'Chuyên gia thám hiểm hang động quốc tế & Người bảo tồn di tích'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Con Co Island Nature Reserve',
        nameVi: 'Huyện đảo Cồn Cỏ',
        type: 'National Park',
        descriptionEn: 'Volcanic emerald island rising from the sea, covered with virgin forest and pristine marine coral sanctuaries.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The world capital of colossal limestone caves and the historic symbol of Vietnam’s relentless struggle for national reunification and peace.',
      vi: 'Thủ đô hang động của thế giới và biểu tượng thiêng liêng cho khát vọng hòa bình, thống nhất non sông.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Demarcation',
        phonetic: '/ˌdiː.mɑːrˈkeɪ.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'A boundary line or border separating two zones.',
        meaningVi: 'Đường ranh giới phân định tạm thời',
        exampleSentence: 'The 17th Parallel was a historic demarcation line.',
        emoji: '📏'
      },
      {
        word: 'Expedition',
        phonetic: '/ˌek.spəˈdɪʃ.ən/',
        partOfSpeech: 'noun',
        meaningEn: 'A bold, organized journey made for discovery and exploration.',
        meaningVi: 'Chuyến thám hiểm khám phá thế giới',
        exampleSentence: 'Scientists made an exciting expedition into Son Doong Cave.',
        emoji: '🧗'
      },
      {
        word: 'Reunification',
        phonetic: '/ˌriː.juː.nə.fəˈkeɪ.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'The historic joining together of a country that was previously divided.',
        meaningVi: 'Sự thống nhất non sông đất nước',
        exampleSentence: 'Hien Luong Bridge is a symbol of Vietnam’s peaceful reunification.',
        emoji: '🤝'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Quang Tri is home to the historic [bridge / monument] and the wonder of [Son Doong Cave / Phong Nha].',
        patternMeaningVi: 'Quảng Trị là quê hương của [cây cầu / di tích] lịch sử và kỳ quan [Hang Sơn Đoòng / Phong Nha].',
        exampleEn: 'Quang Tri is home to the historic Hien Luong Bridge and the wonder of Son Doong Cave.',
        exampleVi: 'Quảng Trị là quê hương của Cầu Hiền Lương lịch sử và kỳ quan Hang Sơn Đoòng.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step into the colossal chamber of Son Doong Cave! It is so gigantic that a Boeing 747 airplane could fly through it without touching the ceiling. Inside, there is an entire underground jungle where sunlight beams through giant sinkholes!',
        question: 'What astonishing natural feature exists inside Son Doong Cave?',
        options: [
          'An underground jungle with trees and sunlight 🌳☀️',
          'A modern shopping mall 🏬',
          'A factory of plastic toys 🧸',
          'A frozen skating rink ⛸️'
        ],
        correctIndex: 0,
        explanationEn: 'Son Doong Cave contains its own subterranean rainforest and microclimate ecosystem under giant roof dolines.',
        explanationVi: 'Hang Sơn Đoòng có cả một cánh rừng nguyên sinh và hệ sinh thái độc lập ngay trong lòng đất.'
      },
      speakingMission: {
        roleplayPromptEn: 'Recite a powerful message of peace at Hien Luong Bridge in English!',
        roleplayPromptVi: 'Đọc to thông điệp hòa bình thiêng liêng bên Cầu Hiền Lương bằng tiếng Anh!',
        targetSpeech: 'Hien Luong Bridge reminds us to cherish peace, unity, and friendship!',
        sampleAudioPhonetic: '/hiːən luːɒŋ brɪdʒ rɪˈmaɪndz ʌs tuː ˈtʃer.ɪʃ piːs, ˈjuː.nə.t̬i, ænd ˈfrend.ʃɪp!/',
        pronunciationTips: 'Speak with deep sincerity: "cherish PEACE, UNITY, and FRIENDSHIP".'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'qt-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which world-famous colossal cave, the largest in the world, is located in this regional national park?',
        questionVi: 'Hang động tự nhiên khổng lồ lớn nhất thế giới nào tọa lạc tại Vườn quốc gia khu vực này?',
        options: ['Son Doong Cave (Hang Sơn Đoòng) 🪨', 'Mammoth Cave', 'Blue Grotto', 'Crystal Cave'],
        correctIndex: 0,
        explanationEn: 'Son Doong Cave in Phong Nha - Ke Bang is officially recognized as the largest natural cave on Earth.',
        explanationVi: 'Hang Sơn Đoòng tại Phong Nha – Kẻ Bàng là hang động tự nhiên có thể tích lớn nhất hành tinh.'
      },
      {
        id: 'qt-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What historic river in Quang Tri marked the 17th Parallel boundary during the years of division?',
        questionVi: 'Dòng sông lịch sử nào ở Quảng Trị là giới tuyến vĩ tuyến 17 trong những năm tháng chia cắt?',
        options: [
          'Ben Hai River and Hien Luong Bridge (Sông Bến Hải & Cầu Hiền Lương) 🌉',
          'The Amazon River',
          'The Nile River',
          'The Thames River'
        ],
        correctIndex: 0,
        explanationEn: 'The Ben Hai River crossed by Hien Luong Bridge served as the temporary military demarcation line from 1954 to 1975.',
        explanationVi: 'Sông Bến Hải và Cầu Hiền Lương là giới tuyến quân sự tạm thời chia cắt hai miền Nam - Bắc suốt 21 năm.'
      },
      {
        id: 'qt-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'Choose the best sentence to promote Quang Tri’s "Festival for Peace" in English:',
        questionVi: 'Chọn câu tiếng Anh hay nhất để quảng bá cho "Lễ hội Vì Hòa bình" tại Quảng Trị:',
        options: [
          '"Join us in Quang Tri to celebrate peace, remember history, and release lanterns on the Thach Han river!" 🕊️',
          '"We should stay home and fight." ⚔️',
          '"Peace is boring." ❌',
          '"Turn off all the lights forever." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Inviting visitors to celebrate peace and release lanterns honors the province’s sacred historical message.',
        explanationVi: 'Lời mời cùng tôn vinh hòa bình và thả hoa đăng trên sông Thạch Hãn thể hiện trọn vẹn tinh thần lễ hội.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 18. TỈNH QUẢNG NGÃI
  {
    code: 'QNG',
    id: 'vn-34-qng',
    type: 'province',
    nameVi: 'Tỉnh Quảng Ngãi',
    nameEn: 'Quang Ngai Province',
    capitalVi: 'TP. Quảng Ngãi',
    capitalEn: 'Quang Ngai City',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    emoji: '🧄',
    image: '/destinations/ly_son_island.jpg',
    geographicLocation: {
      latitude: 15.1205,
      longitude: 108.7923,
      borders: 'Bordered by Quang Nam (Da Nang) to the north, Binh Dinh (Gia Lai) to the south, Kon Tum to the west, and the East Sea to the east.',
      terrain: 'Rich coastal strip with Dung Quat deep harbor, Tra Khuc River basin, Sa Huynh ancient salt flats, and offshore volcanic island Ly Son.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Quảng Ngãi', 'Tỉnh Kon Tum (không gian kết nối Măng Đen & ngã ba Đông Dương)'],
      summaryVi: 'Không gian kinh tế biển Dung Quất – Sa Huỳnh; quản lý và phát triển bền vững Huyện đảo tiền tiêu Lý Sơn – "Vương quốc tỏi" và cái nôi Đội hùng binh Hoàng Sa kiêm quản Trường Sa.',
      summaryEn: 'Vibrant maritime economy integrating Dung Quat and Sa Huynh, safeguarding sovereign Ly Son Island ("Kingdom of Garlic") and the Hoang Sa flotilla heritage.',
      islandDistricts: ['Huyện đảo Lý Sơn']
    },
    notableGeographicalCharacteristics: {
      en: 'Fascinating volcanic crater landscapes on Ly Son Island, pristine coral reefs, and the Tra Khuc River flowing beneath Thien An Mountain.',
      vi: 'Miệng núi lửa cổ triệu năm trên đảo Lý Sơn, rạn san hô nguyên sơ, dòng sông Trà Khúc hiền hòa dưới chân núi Thiên Ấn thiêng liêng.'
    },
    famousLandmarks: [
      {
        nameEn: 'Ly Son Island & Hoang Sa Flotilla Monument',
        nameVi: 'Huyện đảo Lý Sơn & Tượng đài Đội Hoàng Sa kiêm quản Trường Sa',
        descriptionEn: 'Sacred volcanic island and memorial honoring the brave Vietnamese sailors who set sail in wooden boats to protect Hoang Sa centuries ago.',
        descriptionVi: 'Quần đảo tiền tiêu nơi triều Nguyễn thành lập Đội Hoàng Sa giong buồm đo đạc cắm mốc chủ quyền biển đảo từ thế kỷ 17.',
        emoji: '🏝️'
      },
      {
        nameEn: 'Thien An Mountain & Pagoda',
        nameVi: 'Núi Thiên Ấn & Chùa Thiên Ấn',
        descriptionEn: 'The symbolic "Seal of Heaven" mountain shaped like a jade seal beside the Tra Khuc River, revered in Vietnamese poetry.',
        descriptionVi: 'Ngọn núi thiêng mang hình ấn trời soi bóng xuống sông Trà Khúc, biểu tượng văn hóa ngàn đời của người xứ Quảng.',
        emoji: '⛰️'
      },
      {
        nameEn: 'Sa Huynh Ancient Archaeological Culture & Salt Fields',
        nameVi: 'Khu khảo cổ Văn hóa Sa Huỳnh & Đồng muối Sa Huỳnh',
        descriptionEn: '3,000-year-old Iron Age civilization cradle famous for giant burial jars and gleaming coastal sea salt beds.',
        descriptionVi: 'Cái nôi văn hóa Sa Huỳnh thời kỳ đồ sắt với những mộ chum độc đáo và đồng muối trắng tinh lấp lánh nắng mai.',
        emoji: '🧂'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Ly Son "Single-Clove" Garlic (Toi Co Don Ly Son)',
        nameVi: 'Tỏi cô đơn Lý Sơn',
        descriptionEn: 'Precious pearl-white single-clove garlic grown in mineral-rich volcanic basalt soil and sea coral sand, bursting with sweet aroma.',
        descriptionVi: 'Vương quốc tỏi với tép tỏi cô đơn trắng muốt trồng trên đất dung nham núi lửa và cát san hô thơm dịu không cay nồng.',
        emoji: '🧄'
      },
      {
        nameEn: 'Tra Khuc River Simmered Goby Fish (Ca Bong Song Tra)',
        nameVi: 'Cá bống kho tiêu Sông Trà',
        descriptionEn: 'Tiny river goby fish simmered in earthen clay pots with black pepper, chili, and fish sauce until golden and firm.',
        descriptionVi: 'Cá bống sông Trà kho tiêu cay nồng trong niêu đất ăn cùng cơm nóng là món ngon nhớ mãi của người xứ Quảng.',
        emoji: '🐟'
      }
    ],
    culturalTraditions: {
      en: 'Solemn Khao Le The Linh Hoang Sa festival honoring heroic ocean voyagers, seafaring courage, and vibrant Ba Trao rowing songs.',
      vi: 'Lễ khao lề thế lính Hoàng Sa linh thiêng tri ân các bậc tiền nhân, tinh thần kiên cường bám biển và điệu hát bả trạo hào sảng.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Khao Le The Linh Hoang Sa Ceremony',
        nameVi: 'Lễ khao lề thế lính Hoàng Sa (Đảo Lý Sơn)',
        unescoHeritage: false,
        descriptionEn: 'National Intangible Cultural Heritage honoring the brave ancestors who sailed into the East Sea to assert Vietnam’s sovereignty.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể Quốc gia tưởng nhớ công ơn đội hùng binh giong thuyền nan ra Hoàng Sa cắm mốc chủ quyền.',
        emoji: '⛵'
      },
      {
        nameEn: 'Sa Huynh Culture Special National Heritage',
        nameVi: 'Di tích Quốc gia đặc biệt Văn hóa Sa Huỳnh',
        unescoHeritage: false,
        descriptionEn: 'Ancient maritime cultural civilization recognized as one of the three foundational cultures of ancient Vietnam.',
        descriptionVi: 'Một trong ba cái nôi văn minh cổ xưa của Việt Nam rực rỡ nghề gốm, trang sức mã não và luyện kim đồ sắt.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Ly Son volcanic garlic, mirror candy (Keo guong) & sea swallow nests',
        productVi: 'Tỏi Lý Sơn & Kẹo gương đậu phụng',
        occupationEn: 'Offshore fisherman & volcanic garlic grower',
        occupationVi: 'Ngư dân đánh bắt hải sản xa bờ & Người nông dân trồng tỏi cát'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'To Vo Volcanic Arch (Cong To Vo)',
        nameVi: 'Cổng Tò Vò (Đảo Lý Sơn)',
        type: 'Geopark',
        descriptionEn: 'Spectacular natural volcanic basalt sea arch formed by cooling lava over millions of years at the ocean’s edge.'
      },
      {
        nameEn: 'Thoi Loi Volcanic Crater Lake',
        nameVi: 'Miệng núi lửa Thới Lới',
        type: 'Geopark',
        descriptionEn: 'Ancient dormant volcano summit with a freshwater emerald crater lake and national flagpole commanding the sea.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Renowned as the "Kingdom of Volcanic Garlic" and the historic home of the immortal Hoang Sa Flotilla defending Vietnam’s sea sovereignty.',
      vi: 'Được tôn vinh là "Vương quốc Tỏi" và quê hương của Đội hùng binh Hoàng Sa kiên cường bảo vệ chủ quyền biển đảo Tổ quốc.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Volcano',
        phonetic: '/vɑːlˈkeɪ.noʊ/',
        partOfSpeech: 'noun',
        meaningEn: 'A mountain with a crater that erupted red-hot lava millions of years ago.',
        meaningVi: 'Núi lửa cổ xưa',
        exampleSentence: 'Ly Son Island was formed by ancient undersea volcanoes.',
        emoji: '🌋'
      },
      {
        word: 'Flotilla',
        phonetic: '/floʊˈtɪl.ə/',
        partOfSpeech: 'noun',
        meaningEn: 'A fleet of courageous boats on an official sea mission.',
        meaningVi: 'Đội thuyền, đoàn thuyền anh dũng',
        exampleSentence: 'The Hoang Sa flotilla sailed bravely to protect Vietnamese islands.',
        emoji: '⛵'
      },
      {
        word: 'Garlic',
        phonetic: '/ˈɡɑːr.lɪk/',
        partOfSpeech: 'noun',
        meaningEn: 'A healthy bulb plant with a rich aroma used to flavor delicious food.',
        meaningVi: 'Củ tỏi thơm',
        exampleSentence: 'Ly Son single-clove garlic is famous all over the world.',
        emoji: '🧄'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Ly Son Island in Quang Ngai is world-famous as the [Kingdom of Garlic / cradle of Hoang Sa flotilla].',
        patternMeaningVi: 'Đảo Lý Sơn ở Quảng Ngãi nổi tiếng thế giới là [Vương quốc Tỏi / cái nôi Đội Hoàng Sa].',
        exampleEn: 'Ly Son Island in Quang Ngai is world-famous as the Kingdom of Garlic.',
        exampleVi: 'Đảo Lý Sơn ở Quảng Ngãi nổi tiếng thế giới là Vương quốc Tỏi.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step onto the volcanic black cliffs of Ly Son Island in Quang Ngai! Look at the green fields: farmers cover the dark volcanic soil with sparkling white sea coral sand to grow delicious, sweet single-clove garlic. Ly Son is truly the Kingdom of Garlic!',
        question: 'What special sand do farmers use to grow sweet garlic on Ly Son Island?',
        options: [
          'White sea coral sand mixed with volcanic soil 🪸🌋',
          'Black plastic sand',
          'Sugar grains from candy',
          'Crushed red bricks'
        ],
        correctIndex: 0,
        explanationEn: 'Farmers on Ly Son layer sea coral sand over mineral volcanic earth, creating the ideal soil for sweet garlic.',
        explanationVi: 'Bà con nông dân đảo Lý Sơn rải cát san hô biển lên lớp đất đỏ bazan núi lửa giúp củ tỏi có vị thơm dịu đặc trưng.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this sentence with patriotic pride about Ly Son’s sailors!',
        roleplayPromptVi: 'Đọc to câu văn tôn vinh Đội hùng binh Hoàng Sa trên đảo Lý Sơn bằng tiếng Anh!',
        targetSpeech: 'Ly Son Island is the proud home of the brave Hoang Sa flotilla!',
        sampleAudioPhonetic: '/liː sɒn ˈaɪ.lənd ɪz ðə praʊd hoʊm əv ðə breɪv hwɑːŋ sɑː floʊˈtɪl.ə!/',
        pronunciationTips: 'Pronounce "flotilla" melodiously: flo-TIL-uh.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'qng-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which island in Quang Ngai is celebrated throughout Vietnam as the "Kingdom of Garlic"?',
        questionVi: 'Hòn đảo nào ở Quảng Ngãi được cả nước tôn vinh là "Vương quốc Tỏi"?',
        options: ['Ly Son Island (Đảo Lý Sơn) 🧄', 'Phu Quoc Island', 'Cat Ba Island', 'Co To Island'],
        correctIndex: 0,
        explanationEn: 'Ly Son Island is widely known as the Kingdom of Garlic for its premium single-clove garlic.',
        explanationVi: 'Đảo Lý Sơn được mệnh danh là Vương quốc Tỏi nhờ sản phẩm tỏi cô đơn thơm ngon nức tiếng.'
      },
      {
        id: 'qng-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What historic ceremony on Ly Son Island honors ancestors who sailed to assert sovereignty over the Hoang Sa Islands?',
        questionVi: 'Nghi lễ lịch sử nào trên đảo Lý Sơn tri ân các bậc tiền nhân giong buồm khẳng định chủ quyền Hoàng Sa?',
        options: [
          'Khao Le The Linh Hoang Sa (Lễ khao lề thế lính Hoàng Sa) ⛵',
          'Mid-Autumn lantern parade',
          'Elephant racing festival',
          'Ice sculpture festival'
        ],
        correctIndex: 0,
        explanationEn: 'The Khao Le The Linh Hoang Sa ceremony is an official national heritage preserving sacred maritime history.',
        explanationVi: 'Lễ khao lề thế lính Hoàng Sa là nghi lễ thiêng liêng lưu giữ chứng cứ lịch sử chủ quyền biển đảo của Tổ quốc.'
      },
      {
        id: 'qng-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What is the best English sentence to describe the To Vo volcanic arch on Ly Son?',
        questionVi: 'Câu tiếng Anh nào miêu tả đẹp nhất Cổng Tò Vò núi lửa trên đảo Lý Sơn?',
        options: [
          '"To Vo Gate is a magnificent natural stone arch formed by ancient cooling volcanic lava right at the ocean’s edge!" 🌋',
          '"It is a plastic doorway built in a toy store." 🚪',
          '"It is a metal ladder." 🪜',
          '"It was made by aliens yesterday." 👽'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting the natural stone arch formed by ancient volcanic lava at the ocean’s edge accurately captures To Vo Gate.',
        explanationVi: 'Mô tả vòm đá thiên nhiên kỳ vĩ tạo nên từ dòng nham thạch núi lửa triệu năm bên bờ sóng vỗ là chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 19. TỈNH GIA LAI
  {
    code: 'GL',
    id: 'vn-34-gl',
    type: 'province',
    nameVi: 'Tỉnh Gia Lai',
    nameEn: 'Gia Lai Province',
    capitalVi: 'TP. Pleiku',
    capitalEn: 'Pleiku City',
    region: 'Central',
    zone: 'Tây Nguyên',
    emoji: '🌋',
    image: '/destinations/bien_ho_pleiku.jpg',
    geographicLocation: {
      latitude: 13.9833,
      longitude: 108.0000,
      borders: 'Bordered by Kon Tum to the north, Dak Lak to the south, Binh Dinh and Phu Yen to the east, and Cambodia to the west.',
      terrain: 'Expansive red basalt plateau with volcanic craters, vast coffee and rubber plantations, and the Se San river valley.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Gia Lai', 'Tỉnh Bình Định (kết nối không gian Tây Sơn & duyên hải Quy Nhơn)'],
      summaryVi: 'Trung tâm cao nguyên Bắc Tây Nguyên; không gian Di sản Không gian văn hóa Cồng chiêng Tây Nguyên UNESCO và Biển Hồ T’Nưng – "Đôi mắt Pleiku"; kết nối duyên hải Bình Định.',
      summaryEn: 'Northern Central Highlands engine, home to the UNESCO Space of Gong Culture, the emerald volcanic crater lake Bien Ho T’Nưng, and vast coffee plateaus.'
    },
    notableGeographicalCharacteristics: {
      en: 'Famed for its deep volcanic crater lakes (Bien Ho), dormant volcano Chu Dang Ya carpeted in yellow wild sunflowers, and red basalt earth.',
      vi: 'Nổi danh với hồ miệng núi lửa T’Nưng xanh ngắt, miệng núi lửa Chư Đăng Ya rực rỡ hoa dã quỳ và đất đỏ bazan màu mỡ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Bien Ho T’Nung (Sea Lake of Pleiku)',
        nameVi: 'Biển Hồ T’Nưng ("Đôi mắt Pleiku")',
        descriptionEn: 'A breathtaking emerald freshwater lake filling the deep crater of an extinct volcano, celebrated as the "Eyes of Pleiku".',
        descriptionVi: 'Hồ nước ngọt trong veo tuyệt mỹ nằm trọn trong miệng núi lửa cổ đại hàng triệu năm được ví như "Đôi mắt Pleiku".',
        emoji: '🌊'
      },
      {
        nameEn: 'Chu Dang Ya Volcano & Wild Sunflowers',
        nameVi: 'Núi lửa Chư Đăng Ya',
        descriptionEn: 'Ancient funnel-shaped volcano crater where thousands of wild yellow sunflowers (Hoa Da Quy) bloom in vibrant gold every autumn.',
        descriptionVi: 'Miệng núi lửa hình phễu kỳ vĩ bừng sáng sắc vàng rực rỡ của thảm hoa dã quỳ mỗi độ đông về.',
        emoji: '🌻'
      },
      {
        nameEn: 'Pleiku Communal Rong House (Nha Rong)',
        nameVi: 'Nhà Rông văn hóa Tây Nguyên',
        descriptionEn: 'Soaring axe-blade shaped communal wooden stilt house where village elders gather to discuss tribal affairs and celebrate.',
        descriptionVi: 'Ngôi nhà sàn truyền thống hình lưỡi búa vươn cao kiêu hãnh giữa buôn làng nơi diễn ra các lễ hội thiêng liêng.',
        emoji: '🛖'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Pleiku "Two-Bowl" Dry Pho (Pho Kho Gia Lai)',
        nameVi: 'Phở khô Gia Lai ("Phở hai tô")',
        descriptionEn: 'Unique noodle specialty served in two bowls: one bowl of tossed dry rice noodles with minced pork and brown bean paste, and one bowl of rich beef broth.',
        descriptionVi: 'Món ăn độc đáo gồm hai tô tách biệt: một tô bánh phở trộn tóp mỡ tương đen đậm đà và một tô súp thịt bò thanh ngọt.',
        emoji: '🍜'
      },
      {
        nameEn: 'Sun-Dried Beef with Golden Weaver Ant Salt',
        nameVi: 'Bò một nắng muối kiến vàng Krông Pa',
        descriptionEn: 'Charcoal-grilled tender beef dipped in tangy, crunchy salt made from wild golden weaver ants gathered in the forest.',
        descriptionVi: 'Thịt bò tươi nướng than hồng chấm muối kiến vàng rừng Krông Pa với vị chua bùi cay nồng vô cùng độc đáo.',
        emoji: '🥩'
      }
    ],
    culturalTraditions: {
      en: 'The sacred thunderous rhythm of UNESCO Gong ensembles, wood-carved tomb statues, and the legendary tales of Dam San.',
      vi: 'Âm vang cồng chiêng ngân nga qua nghìn thế hệ, nghệ thuật tạc tượng nhà mồ nguyên sơ và trường ca Đam San bất diệt.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Space of Gong Culture in the Central Highlands',
        nameVi: 'Không gian văn hóa Cồng chiêng Tây Nguyên',
        unescoHeritage: true,
        descriptionEn: 'Masterpiece of the Oral and Intangible Heritage of Humanity inscribed by UNESCO in 2005.',
        descriptionVi: 'Kiệt tác Di sản Phi vật thể của Nhân loại được UNESCO vinh danh năm 2005 với âm vang cồng chiêng thiêng liêng.'
      },
      {
        nameEn: 'Chu Dang Ya Wild Sunflower Volcano Festival',
        nameVi: 'Lễ hội Hoa Dã quỳ – Núi lửa Chư Đăng Ya',
        unescoHeritage: false,
        descriptionEn: 'Annual festival celebrating the blooming of golden sunflowers on the volcanic slopes with folk games and gong performances.',
        descriptionVi: 'Lễ hội mùa đông rực rỡ sắc vàng hoa dã quỳ kết hợp trình diễn cồng chiêng và ẩm thực cơm lam gà nướng.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Robusta highland coffee beans, pure wild forest honey & black pepper',
        productVi: 'Cà phê Robusta Pleiku & Hạt tiêu Chư Sê',
        occupationEn: 'Gong musician & organic coffee farm cultivator',
        occupationVi: 'Nghệ nhân cồng chiêng Bahnar/Jrai & Người trồng cà phê hữu cơ'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Kon Ka Kinh National Park',
        nameVi: 'Vườn quốc gia Kon Ka Kinh (ASEAN Heritage Park)',
        type: 'National Park',
        descriptionEn: 'Pristine biodiversity park known as the "Roof of Gia Lai" home to the endangered grey-shanked douc langur.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The resonant heartland of the Central Highlands, where volcanic lakes meet the stirring sound of sacred bronze gongs.',
      vi: 'Trái tim rực lửa của đại ngàn Tây Nguyên, nơi có hồ trên núi lửa và tiếng cồng chiêng trầm hùng rung chuyển núi rừng.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Gong',
        phonetic: '/ɡɑːŋ/',
        partOfSpeech: 'noun',
        meaningEn: 'A round metal musical disc struck with a padded mallet to make a deep echoing ringing sound.',
        meaningVi: 'Chiêng, cồng chiêng Tây Nguyên',
        exampleSentence: 'Villagers play bronze gongs together around the dancing fire.',
        emoji: '🥁'
      },
      {
        word: 'Crater',
        phonetic: '/ˈkreɪ.t̬ɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A large bowl-shaped circular hollow at the top of a volcano.',
        meaningVi: 'Miệng núi lửa cổ đại',
        exampleSentence: 'Bien Ho is a crystal-clear lake inside an extinct volcano crater.',
        emoji: '🌋'
      },
      {
        word: 'Sunflower',
        phonetic: '/ˈsʌnˌflaʊ.ɚ/',
        partOfSpeech: 'noun',
        meaningEn: 'A radiant golden yellow flower that blooms facing the sun.',
        meaningVi: 'Hoa dã quỳ vàng rực rỡ',
        exampleSentence: 'Wild sunflowers bloom in yellow sheets across Chu Dang Ya volcano.',
        emoji: '🌻'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Gia Lai is famous for the UNESCO Space of Gong Culture and [Bien Ho Lake / coffee].',
        patternMeaningVi: 'Gia Lai nổi tiếng với Không gian văn hóa Cồng chiêng UNESCO và [Biển Hồ / cà phê].',
        exampleEn: 'Gia Lai is famous for the UNESCO Space of Gong Culture and Bien Ho Lake.',
        exampleVi: 'Gia Lai nổi tiếng với Không gian văn hóa Cồng chiêng UNESCO và Biển Hồ T’Nưng.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Listen to the deep boom of bronze gongs echoing through the pine forests of Gia Lai! As dusk falls in the village, young and old gather around the tall Rong House. They play sacred gongs, dance in step, and drink sweet Can wine from bamboo straws.',
        question: 'Around what tall traditional house do villagers gather to play bronze gongs in Gia Lai?',
        options: [
          'The tall traditional Rong House (Nhà Rông) 🛖',
          'A glass skyscraper 🏢',
          'A plastic tent ⛺',
          'A stone igloo 🧊'
        ],
        correctIndex: 0,
        explanationEn: 'The Rong House is the spiritual and cultural heart of Central Highlands villages.',
        explanationVi: 'Nhà Rông là trung tâm văn hóa và linh hồn của buôn làng đồng bào các dân tộc Tây Nguyên.'
      },
      speakingMission: {
        roleplayPromptEn: 'Introduce Bien Ho Lake with poetry and excitement in English!',
        roleplayPromptVi: 'Đọc to câu giới thiệu về Biển Hồ Pleiku bằng tiếng Anh đầy cảm xúc nhé!',
        targetSpeech: 'Bien Ho in Gia Lai is a magnificent emerald lake inside a volcano crater!',
        sampleAudioPhonetic: '/biːən hoʊ ɪn ziːə laɪ ɪz ə mæɡˈnɪf.ə.sənt ˈem.ər.əld leɪk ɪnˈsaɪd ə vɑːlˈkeɪ.noʊ ˈkreɪ.t̬ɚ!/',
        pronunciationTips: 'Pronounce "emerald lake" smoothly, and say "volcano crater" with awe!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'gl-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous crater lake in Gia Lai is affectionately called "The Eyes of Pleiku"?',
        questionVi: 'Hồ nước miệng núi lửa nổi tiếng nào ở Gia Lai được ví von là "Đôi mắt Pleiku"?',
        options: ['Bien Ho T’Nung (Biển Hồ) 🌊', 'West Lake', 'Sword Lake', 'Ba Be Lake'],
        correctIndex: 0,
        explanationEn: 'Bien Ho T’Nung fills an ancient volcano crater and is celebrated in song as the "Eyes of Pleiku".',
        explanationVi: 'Biển Hồ T’Nưng nằm trọn trong miệng núi lửa cổ đại và đi vào thơ ca với danh xưng "Đôi mắt Pleiku".'
      },
      {
        id: 'gl-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which musical heritage of the Central Highlands, centered in Gia Lai, was recognized by UNESCO in 2005?',
        questionVi: 'Di sản âm nhạc nào của vùng đất Tây Nguyên được UNESCO vinh danh năm 2005?',
        options: [
          'Space of Gong Culture (Không gian văn hóa Cồng chiêng Tây Nguyên) 🥁',
          'Electronic disco',
          'Western opera',
          'Classical violin concerto'
        ],
        correctIndex: 0,
        explanationEn: 'The Space of Gong Culture in the Central Highlands is a UNESCO Intangible Masterpiece.',
        explanationVi: 'Không gian văn hóa Cồng chiêng Tây Nguyên là Kiệt tác Di sản Phi vật thể của Nhân loại được UNESCO công nhận.'
      },
      {
        id: 'gl-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you explain Pleiku’s "Two-Bowl Pho" (Pho Kho Gia Lai) in English to a foreign foodie?',
        questionVi: 'Em giải thích món "Phở khô hai tô Gia Lai" bằng tiếng Anh cho một người sành ăn như thế nào?',
        options: [
          '"It is unique because you get two separate bowls: one bowl of dry noodles with black bean paste, and one bowl of savory beef broth!" 🍜',
          '"It is just plain ice cubes." 🧊',
          '"It is soup poured into your shoes." 👟',
          '"You do not eat it with a spoon." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Explaining the two-bowl concept (one dry noodle bowl, one broth bowl) highlights what makes Pho Kho Gia Lai special.',
        explanationVi: 'Giải thích phong cách hai tô tách biệt (một tô phở khô trộn tương và một tô nước dùng) làm nổi bật nét độc đáo của món ăn.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 20. TỈNH KHÁNH HÒA
  {
    code: 'KH',
    id: 'vn-34-kh',
    type: 'province',
    nameVi: 'Tỉnh Khánh Hòa',
    nameEn: 'Khanh Hoa Province',
    capitalVi: 'TP. Nha Trang',
    capitalEn: 'Nha Trang City',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    emoji: '🏝️',
    image: '/destinations/nha_trang_bay.jpg',
    geographicLocation: {
      latitude: 12.2388,
      longitude: 109.1967,
      borders: 'Bordered by Phu Yen to the north, Dak Lak and Lam Dong to the west, Ninh Thuan to the south, and the East Sea to the east.',
      terrain: 'Breathtaking coastal bays (Nha Trang, Van Phong, Cam Ranh), offshore coral atolls, and the sovereign Spratly Islands (Trường Sa).'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Khánh Hòa', 'Huyện đảo Trường Sa'],
      summaryVi: 'Trung tâm dịch vụ du lịch biển tầm cỡ quốc tế với các vịnh Nha Trang, Vân Phong, Cam Ranh; khẳng định và thực thi chủ quyền toàn vẹn đối với Huyện đảo Trường Sa thiêng liêng.',
      summaryEn: 'Premier international coastal tourism and maritime hub managing Nha Trang Bay, Cam Ranh deep port, and the sacred sovereign Spratly Islands (Trường Sa).',
      islandDistricts: ['Huyện đảo Trường Sa (Quần đảo Trường Sa, VN)']
    },
    notableGeographicalCharacteristics: {
      en: 'Home to Nha Trang Bay (one of the most beautiful bays in the world), rich coral reefs of Hon Mun, and the remote Spratly Islands archipelago.',
      vi: 'Sở hữu Vịnh Nha Trang - một trong những vịnh biển đẹp nhất thế giới, rạn san hô Hòn Mun rực rỡ và Quần đảo Trường Sa thiêng liêng.'
    },
    famousLandmarks: [
      {
        nameEn: 'Ponagar Cham Towers (Thap Ba Ponagar)',
        nameVi: 'Tháp Bà Ponagar',
        descriptionEn: 'Majestic red-brick Cham temple towers built between the 8th and 13th centuries dedicated to the goddess Yan Po Nagar.',
        descriptionVi: 'Quần thể tháp Chăm gạch đỏ cổ kính nghìn năm tuổi tọa lạc trên đồi Cù Lao soi bóng dòng sông Cái.',
        emoji: '🛕'
      },
      {
        nameEn: 'Truong Sa Island District (Spratly Islands)',
        nameVi: 'Huyện đảo Trường Sa (Khánh Hòa)',
        descriptionEn: 'Sacred archipelago of sovereign coral islands, lighthouses, and brave naval outposts defending Vietnam’s maritime frontier.',
        descriptionVi: 'Huyện đảo tiền tiêu thiêng liêng nơi đầu sóng ngọn gió với những ngọn hải đăng và người chiến sĩ hải quân kiên cường bảo vệ chủ quyền.',
        emoji: '🇻🇳'
      },
      {
        nameEn: 'Hon Mun Marine Protected Area',
        nameVi: 'Khu bảo tồn biển Hòn Mun',
        descriptionEn: 'Vietnam’s first marine sanctuary boasting over 350 species of vibrant reef-building corals and tropical sea life.',
        descriptionVi: 'Khu bảo tồn biển đầu tiên của Việt Nam với hơn 350 loài san hô rực rỡ sắc màu và thế giới sinh vật biển phong phú.',
        emoji: '🪸'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Khanh Hoa Edible Bird’s Nest (Yen Sao Khanh Hoa)',
        nameVi: 'Yến sào Khánh Hòa',
        descriptionEn: 'World-renowned natural swiftlet nests gathered from sheer ocean sea caves, prized for supreme nutrition and vitality.',
        descriptionVi: 'Đệ nhất sản vật yến đảo thiên nhiên khai thác từ các hang đá cheo leo giữa biển khơi bổ dưỡng tuyệt hảo.',
        emoji: '🪺'
      },
      {
        nameEn: 'Nha Trang Grilled Pork Sausage Rolls (Nem Nuong Nha Trang)',
        nameVi: 'Nem nướng Ninh Hòa – Nha Trang',
        descriptionEn: 'Fragrant grilled pork skewers wrapped in soft rice paper with fried crispy rolls, green mango, and warm golden peanut sauce.',
        descriptionVi: 'Xiên thịt nướng thơm lừng cuộn bánh tráng, ram giòn rụm, xoài chua chấm cùng nước sốt tương đậu phộng béo bùi.',
        emoji: '🌯'
      }
    ],
    culturalTraditions: {
      en: 'Deep reverence for sea goddesses, traditional Cham Kate dances, Nghinh Ong whale worship, and patriotic pride for Truong Sa.',
      vi: 'Tục thờ Mẫu Thiên Y A Na, lễ hội Ka-tê rộn rã trống Paranưng, lễ hội Cầu ngư và tình yêu biển đảo Trường Sa cháy bỏng.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Thap Ba Ponagar Temple Festival',
        nameVi: 'Lễ hội Tháp Bà Ponagar',
        unescoHeritage: false,
        descriptionEn: 'National Intangible Cultural Heritage celebrated in March with colorful Cham shadow dances and sacred incense offerings.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể Quốc gia tôn vinh Mẹ Xứ Sở với điệu múa Chăm uyển chuyển bên tháp cổ nghìn năm.',
        emoji: '🏮'
      },
      {
        nameEn: 'Nha Trang Sea Festival (Festival Biển)',
        nameVi: 'Festival Biển Nha Trang',
        unescoHeritage: false,
        descriptionEn: 'Biennial international summer carnival celebrating ocean sports, light shows, and marine conservation.',
        descriptionVi: 'Lễ hội biển mùa hè sôi động với các giải đua thuyền buồm, dù lượn và lễ hội trình diễn ánh sáng rực rỡ.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Agarwood incense (Tram Huong) & natural swiftlet bird nests',
        productVi: 'Trầm hương Khánh Hòa & Yến sào đảo yến',
        occupationEn: 'Marine swiftlet guardian & ocean diver',
        occupationVi: 'Người canh gác đảo yến & Thợ lặn bảo tồn san hô biển'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Nha Trang Bay & Hon Tam Island',
        nameVi: 'Vịnh Nha Trang & Đảo Hòn Tằm',
        type: 'Beach',
        descriptionEn: 'Crescent-shaped tropical bay with sparkling turquoise surf, coconut palm walkways, and warm year-round sun.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Known as the "Land of Agarwood and Swiftlet Nests" (Xứ Trầm Biển Yến), home to sovereign Truong Sa and world-class marine diving.',
      vi: 'Mệnh danh là "Xứ Trầm Biển Yến", nơi có Quần đảo Trường Sa thiêng liêng và vịnh biển Nha Trang đẹp tựa thiên đường.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Swiftlet',
        phonetic: '/ˈswɪft.lət/',
        partOfSpeech: 'noun',
        meaningEn: 'A small fast-flying sea bird that builds natural nests in coastal island caves.',
        meaningVi: 'Chim yến biển làm tổ',
        exampleSentence: 'Khanh Hoa is celebrated for high-quality natural swiftlet nests.',
        emoji: '🕊️'
      },
      {
        word: 'Coral reef',
        phonetic: '/ˈkɔːr.əl riːf/',
        partOfSpeech: 'noun',
        meaningEn: 'A colorful underwater ridge formed in warm ocean waters by colonies of tiny marine animals.',
        meaningVi: 'Rạn san hô biển tuyệt đẹp',
        exampleSentence: 'Divers swim past sparkling coral reefs at Hon Mun Island.',
        emoji: '🪸'
      },
      {
        word: 'Archipelago',
        phonetic: '/ˌɑːr.kəˈpel.ə.ɡoʊ/',
        partOfSpeech: 'noun',
        meaningEn: 'A group or chain of many small islands scattered across the sea.',
        meaningVi: 'Quần đảo giữa đại dương',
        exampleSentence: 'Truong Sa is Vietnam’s sacred sovereign archipelago in the East Sea.',
        emoji: '🏝️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Khanh Hoa is famous for the beautiful Nha Trang Bay and sovereign [Truong Sa Islands / swiftlet nests].',
        patternMeaningVi: 'Khánh Hòa nổi tiếng với Vịnh Nha Trang tuyệt đẹp và [Quần đảo Trường Sa / yến sào đảo yến].',
        exampleEn: 'Khanh Hoa is famous for the beautiful Nha Trang Bay and sovereign Truong Sa Islands.',
        exampleVi: 'Khánh Hòa nổi tiếng với Vịnh Nha Trang tuyệt đẹp và Quần đảo Trường Sa thiêng liêng.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Put on your diving mask and dive into the crystal turquoise waters of Hon Mun in Khanh Hoa! Beneath the waves, a rainbow garden of living corals comes alive with striped clownfish, sea turtles, and starfish. Khanh Hoa is truly a paradise of the sea!',
        question: 'What colorful living underwater garden can divers explore at Hon Mun Island?',
        options: ['Living coral reefs and tropical fish 🪸🐠', 'A forest of pine trees 🌲', 'A field of wheat 🌾', 'A snow cave ❄️'],
        correctIndex: 0,
        explanationEn: 'Hon Mun Island in Khanh Hoa is home to over 350 species of colorful reef-building corals.',
        explanationVi: 'Đảo Hòn Mun ở Khánh Hòa sở hữu rạn san hô phong phú bậc nhất Việt Nam với hơn 350 loài san hô sống.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this proud sentence about Vietnam’s Truong Sa Islands in Khanh Hoa!',
        roleplayPromptVi: 'Đọc to câu khẳng định chủ quyền Trường Sa thiêng liêng bằng tiếng Anh nhé!',
        targetSpeech: 'The Spratly Islands of Truong Sa belong indisputably to Vietnam!',
        sampleAudioPhonetic: '/ðə ˈspræt.li ˈaɪ.ləndz əv trɨəŋ saː bɪˈlɑːŋ ˌɪn.dɪˈspjuː.t̬ə.bli tuː ˌvjetˈnɑːm!/',
        pronunciationTips: 'Speak with firm confidence and unwavering clarity: "belong indisputably to Vietnam!"'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'kh-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which sacred island district in the East Sea is under the sovereign administration of Khanh Hoa Province?',
        questionVi: 'Huyện đảo thiêng liêng nào ở Biển Đông thuộc quyền quản lý hành chính của Tỉnh Khánh Hòa?',
        options: ['Truong Sa Island District (Huyện đảo Trường Sa) 🇻🇳', 'Greenland', 'Hawaii', 'Madagascar'],
        correctIndex: 0,
        explanationEn: 'Truong Sa (Spratly Islands) is an administrative island district belonging to Khanh Hoa Province, Vietnam.',
        explanationVi: 'Huyện đảo Trường Sa là đơn vị hành chính thuộc Tỉnh Khánh Hòa, khẳng định chủ quyền bất khả xâm phạm của Việt Nam.'
      },
      {
        id: 'kh-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Why is Khanh Hoa lovingly called the "Land of Agarwood and Swiftlet Nests" (Xứ Trầm Biển Yến)?',
        questionVi: 'Vì sao Khánh Hòa được gọi bằng danh xưng mỹ miều là "Xứ Trầm Biển Yến"?',
        options: [
          'It is famous for fragrant agarwood from mountain forests and nutritious swiftlet bird nests from ocean caves 🪺',
          'It only produces ice cubes',
          'It is covered in dry desert cactus',
          'It has no birds or trees'
        ],
        correctIndex: 0,
        explanationEn: 'Khanh Hoa is renowned nationwide for high-grade fragrant agarwood and natural sea swiftlet bird nests.',
        explanationVi: 'Khánh Hòa nổi danh khắp thế giới với trầm hương quý từ rừng sâu và yến sào thiên nhiên bổ dưỡng từ vách đá đảo yến.'
      },
      {
        id: 'kh-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How should you invite an international friend to visit Nha Trang Bay in English?',
        questionVi: 'Em dùng câu tiếng Anh nào để mời bạn bè quốc tế đến thăm Vịnh Nha Trang tuyệt đẹp?',
        options: [
          '"Come to Nha Trang to swim in crystal turquoise waters and explore ancient Cham towers!" 🏖️🛕',
          '"Stay inside because the water is dangerous fire." 🔥',
          '"The bay is made of concrete." 🧱',
          '"Do not look at the sea." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting crystal turquoise waters and ancient Cham towers captures Nha Trang’s coastal and cultural charm.',
        explanationVi: 'Mời bạn tắm biển trong vắt và thăm tháp Chăm cổ kính thể hiện trọn vẹn sức hút kỳ diệu của Nha Trang.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 21. TỈNH ĐẮK LẮK
  {
    code: 'DL',
    id: 'vn-34-dl',
    type: 'province',
    nameVi: 'Tỉnh Đắk Lắk',
    nameEn: 'Dak Lak Province',
    capitalVi: 'TP. Buôn Ma Thuột',
    capitalEn: 'Buon Ma Thuot City',
    region: 'Central',
    zone: 'Tây Nguyên',
    emoji: '☕',
    image: '/destinations/buon_ma_thuot_coffee.jpg',
    geographicLocation: {
      latitude: 12.6667,
      longitude: 108.0333,
      borders: 'Bordered by Gia Lai to the north, Lam Dong to the south, Khanh Hoa and Phu Yen to the east, and Cambodia to the west.',
      terrain: 'Spacious red basalt plateaus, mighty Serepok river system flowing backward into the Mekong, and vast coffee plantations.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Đắk Lắk', 'Tỉnh Đắk Nông (hợp nhất phân vùng cao nguyên cà phê)'],
      summaryVi: 'Thủ phủ cà phê của Việt Nam (Buôn Ma Thuột), vùng đất voi Buôn Đôn, hệ thống sông Sêrêpôk huyền thoại và chuỗi thác Dray Nur – Dray Sap hùng vĩ.',
      summaryEn: 'The Coffee Capital of Vietnam in Buon Ma Thuot, legendary elephant land of Buon Don, and the majestic Serepok river waterfalls.'
    },
    notableGeographicalCharacteristics: {
      en: 'Fertile red volcanic soils ideal for Robusta coffee, the unique Serepok River flowing westward, and the serene Lak freshwater lake.',
      vi: 'Đất đỏ bazan màu mỡ bậc nhất nuôi dưỡng cây cà phê Robusta, dòng sông Sêrêpôk chảy ngược huyền thoại và hồ Lắk thơ mộng.'
    },
    famousLandmarks: [
      {
        nameEn: 'Buon Ma Thuot World Coffee City & Museum',
        nameVi: 'Bảo tàng Thế giới Cà phê (Buôn Ma Thuột)',
        descriptionEn: 'Iconic curved curved architectural complex inspired by the communal Rong house, showcasing coffee history from around the world.',
        descriptionVi: 'Bảo tàng kiến trúc uốn lượn lấy cảm hứng từ nhà rông Tây Nguyên trưng bày hơn 10.000 hiện vật cà phê nhân loại.',
        emoji: '☕'
      },
      {
        nameEn: 'Buon Don Legendary Elephant Village',
        nameVi: 'Bản Đôn (Buôn Đôn) – Xứ sở voi Tây Nguyên',
        descriptionEn: 'Historic village famous for the humane care of friendly Asian elephants and the legendary elephant king Khun Ju Nop.',
        descriptionVi: 'Vùng đất huyền thoại nổi tiếng với truyền thống thuần dưỡng voi rừng và mô hình du lịch thân thiện bảo vệ đàn voi.',
        emoji: '🐘'
      },
      {
        nameEn: 'Dray Nur & Dray Sap Waterfalls',
        nameVi: 'Cụm thác Dray Nur – Dray Sap',
        descriptionEn: 'Colossal 250-meter-wide waterfalls cascading over volcanic basalt walls on the roaring Serepok River.',
        descriptionVi: 'Ngọn thác vợ thác chồng hùng vĩ bậc nhất Tây Nguyên nước đổ ầm ầm tung bọt trắng xóa như bức rèm nước khổng lồ.',
        emoji: '🌊'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Buon Ma Thuot Robusta Coffee',
        nameVi: 'Cà phê Robusta Buôn Ma Thuột',
        descriptionEn: 'World-renowned dark aromatic drip coffee brewed through traditional aluminum filters (phin) with thick golden crema.',
        descriptionVi: 'Hạt cà phê Robusta thơm nồng đượm vị đắng thanh quyến rũ pha phin đậm đà phong vị cao nguyên.',
        emoji: '☕'
      },
      {
        nameEn: 'Dak Lak Red Noodle Soup (Bun Do Ban Me)',
        nameVi: 'Bún đỏ Buôn Ma Thuột',
        descriptionEn: 'Savory thick noodles colored deep red with annatto oil, served with quail eggs, crab meatball paste, and water spinach.',
        descriptionVi: 'Tô bún sợi to nhuộm màu hạt điều đỏ thắm ăn cùng riêu cua đồng, trứng cút và rau cần giòn ngọt.',
        emoji: '🍜'
      }
    ],
    culturalTraditions: {
      en: 'Matrilineal Ede family traditions, long wooden stilt houses (Nha Dai), and the sacred friendship oath with Asian elephants.',
      vi: 'Chế độ mẫu hệ mẫu mực của người Ê Đê, nếp nhà dài như tiếng chiêng ngân và tình bạn keo sơn gắn bó với loài voi đại ngàn.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Buon Ma Thuot International Coffee Festival',
        nameVi: 'Lễ hội Cà phê Buôn Ma Thuột',
        unescoHeritage: false,
        descriptionEn: 'Major biennial festival celebrating coffee growers, street carnivals, barista competitions, and global trade.',
        descriptionVi: 'Lễ hội quốc tế lớn định kỳ hai năm một lần tôn vinh hạt cà phê Việt Nam và người nông dân cần lao.'
      },
      {
        nameEn: 'Lak Lake Dugout Canoe Heritage',
        nameVi: 'Văn hóa thuyền độc mộc Hồ Lắk',
        unescoHeritage: false,
        descriptionEn: 'Ancient custom of paddling traditional wooden dugout canoes carved from single tree trunks across misty Lak Lake.',
        descriptionVi: 'Nét văn hóa chèo thuyền độc mộc đẽo từ thân cây gỗ nguyên khối lướt nhẹ trên mặt hồ Lắk thơ mộng.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Single-origin Robusta coffee, raw cocoa, and macadamia nuts',
        productVi: 'Cà phê đặc sản Robusta & Hạt Mắc ca Đắk Lắk',
        occupationEn: 'Specialty coffee roaster & elephant welfare caretaker',
        occupationVi: 'Chuyên gia rang xay cà phê & Người chăm sóc bảo tồn voi'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Yok Don National Park',
        nameVi: 'Vườn quốc gia Yok Đôn',
        type: 'National Park',
        descriptionEn: 'Vietnam’s largest dipterocarp dry deciduous forest sanctuary home to wild Asian elephants, leopards, and peacocks.'
      },
      {
        nameEn: 'Lak Lake (Ho Lak)',
        nameVi: 'Hồ Lắk',
        type: 'Lake',
        descriptionEn: 'The largest natural freshwater lake in the Central Highlands, surrounded by traditional Jun village stilt homes.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Proudly titled "The Coffee Capital of Vietnam", famed for the rhythmic thunder of Dray Nur falls and gentle giants in Buon Don.',
      vi: 'Tự hào là "Thủ phủ Cà phê của Việt Nam", nơi có tiếng thác Dray Nur ầm vang và bóng voi hiền hòa soi nước hồ Lắk.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Deciduous',
        phonetic: '/dɪˈsɪdʒ.u.əs/',
        partOfSpeech: 'adjective',
        meaningEn: 'Relating to trees that shed their leaves naturally each autumn or dry season.',
        meaningVi: 'Rừng rụng lá mùa khô (rừng khộp)',
        exampleSentence: 'Yok Don is Vietnam’s largest deciduous dipterocarp forest.',
        emoji: '🍂'
      },
      {
        word: 'Barista',
        phonetic: '/bəˈriː.stə/',
        partOfSpeech: 'noun',
        meaningEn: 'A skilled person who prepares and serves delicious coffee drinks.',
        meaningVi: 'Chuyên gia pha chế cà phê',
        exampleSentence: 'The barista brewed rich Robusta coffee in Buon Ma Thuot.',
        emoji: '☕'
      },
      {
        word: 'Elephant',
        phonetic: '/ˈel.ə.fənt/',
        partOfSpeech: 'noun',
        meaningEn: 'A very large gentle mammal with a long trunk, big ears, and ivory tusks.',
        meaningVi: 'Con voi hiền hòa',
        exampleSentence: 'Friendly elephants roam peacefully in Buon Don.',
        emoji: '🐘'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Dak Lak is celebrated worldwide as the [Coffee Capital / land of friendly elephants].',
        patternMeaningVi: 'Đắk Lắk được ca ngợi khắp thế giới là [Thủ phủ Cà phê / vùng đất của những chú voi hiền hòa].',
        exampleEn: 'Dak Lak is celebrated worldwide as the Coffee Capital of Vietnam.',
        exampleVi: 'Đắk Lắk được ca ngợi khắp thế giới là Thủ phủ Cà phê của Việt Nam.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Smell the rich aroma of roasting coffee beans! You are in Buon Ma Thuot, Dak Lak Province. Farmers on red basalt hills harvest bright red coffee cherries by hand. Every March, visitors gather for the exciting Coffee Festival to taste the finest coffee in Vietnam!',
        question: 'What is Buon Ma Thuot in Dak Lak Province celebrated as across Vietnam?',
        options: ['The Coffee Capital of Vietnam ☕', 'The Ice Cream Capital', 'The Potato Farm', 'The Lemon City'],
        correctIndex: 0,
        explanationEn: 'Buon Ma Thuot is recognized globally as the Coffee Capital of Vietnam.',
        explanationVi: 'Buôn Ma Thuột được tôn vinh là Thủ phủ Cà phê của Việt Nam với sản lượng và chất lượng xuất khẩu hàng đầu.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an enthusiastic line about Dak Lak’s coffee and wildlife!',
        roleplayPromptVi: 'Đọc to câu văn giới thiệu thủ phủ cà phê Đắk Lắk bằng tiếng Anh thật hay!',
        targetSpeech: 'Dak Lak is the Coffee Capital of Vietnam with amazing waterfalls and friendly elephants!',
        sampleAudioPhonetic: '/dæk læk ɪz ðə ˈkɑː.fi ˈkæp.ə.t̬əl əv ˌvjetˈnɑːm wɪð əˈmeɪ.zɪŋ ˈwɑː.t̬ɚ.fɑːlz ænd ˈfrend.li ˈel.ə.fənts!/',
        pronunciationTips: 'Keep "Coffee Capital" crisp, and say "friendly elephants" with warmth.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'dl-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous agricultural title does Buon Ma Thuot in Dak Lak proudly hold?',
        questionVi: 'Danh hiệu nông sản nổi tiếng nào thuộc về Buôn Ma Thuột (Đắk Lắk)?',
        options: ['The Coffee Capital of Vietnam (Thủ phủ Cà phê) ☕', 'The Apple Capital', 'The Polar Bear Island', 'The Desert Oasis'],
        correctIndex: 0,
        explanationEn: 'Buon Ma Thuot is celebrated as the Coffee Capital of Vietnam for its exceptional Robusta coffee.',
        explanationVi: 'Buôn Ma Thuột tự hào là Thủ phủ Cà phê của nước ta với thương hiệu cà phê Robusta vươn tầm thế giới.'
      },
      {
        id: 'dl-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which historic village in Dak Lak is famous for the humane conservation and heritage of Asian elephants?',
        questionVi: 'Bản làng lịch sử nào ở Đắk Lắk nổi tiếng với văn hóa voi và bảo tồn voi thân thiện?',
        options: [
          'Buon Don (Bản Đôn) 🐘',
          'Bat Trang Village',
          'Dong Ho Village',
          'Kim Lien Village'
        ],
        correctIndex: 0,
        explanationEn: 'Buon Don is renowned for its centuries-old tradition of living harmoniously alongside Asian elephants.',
        explanationVi: 'Bản Đôn nổi danh với truyền thống sống hài hòa gắn bó và mô hình bảo tồn voi thân thiện.'
      },
      {
        id: 'dl-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Dak Lak’s magnificent Dray Nur Waterfall in English to an international visitor?',
        questionVi: 'Em miêu tả Thác Dray Nur hùng vĩ ở Đắk Lắk bằng tiếng Anh như thế nào cho du khách quốc tế?',
        options: [
          '"Dray Nur is a gigantic 250-meter-wide waterfall thundering over ancient volcanic basalt cliffs into emerald pools!" 🌊',
          '"It is a tiny glass of warm milk." 🥛',
          '"It is a dry sandy ditch." 🏜️',
          '"It has no running water." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Describing Dray Nur as a 250-meter-wide thundering waterfall over volcanic basalt cliffs accurately captures its majestic scale.',
        explanationVi: 'Miêu tả thác Dray Nur rộng 250m đổ ầm ầm qua vách đá bazan núi lửa thể hiện chuẩn xác quy mô kỳ vĩ của ngọn thác.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 22. TỈNH LÂM ĐỒNG
  {
    code: 'LD',
    id: 'vn-34-ld',
    type: 'province',
    nameVi: 'Tỉnh Lâm Đồng',
    nameEn: 'Lam Dong Province',
    capitalVi: 'TP. Đà Lạt',
    capitalEn: 'Da Lat City',
    region: 'Central',
    zone: 'Nam Tây Nguyên & Duyên hải',
    emoji: '🌸',
    image: '/destinations/dalat_valley.jpg',
    geographicLocation: {
      latitude: 11.9404,
      longitude: 108.4583,
      borders: 'Bordered by Dak Lak and Khanh Hoa to the north, Dong Nai and Ho Chi Minh City to the southwest, and the sea to the southeast; connects to Phu Quy Island.',
      terrain: 'Misty pine-clad Lang Biang Plateau rising 1,500m above sea level, cascading waterfalls, temperate flower valleys, and oceanic island links.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Lâm Đồng', 'Tỉnh Bình Thuận (vùng ven biển Mũi Né)', 'Tỉnh Ninh Thuận (tháp Chàm & vườn nho)'],
      summaryVi: 'Thành phố Festival hoa Đà Lạt trên cao nguyên Lang Biang; theo bản đồ hành chính 2025 kết nối dải ven biển và quản lý Đảo tiền tiêu Phú Quý; vương quốc hoa ôn đới, atiso và cà phê Arabica hảo hạng.',
      summaryEn: 'The "City of Eternal Spring" on Lang Biang Plateau, connecting highlands to coastal sand dunes and administering sovereign Phu Quy Island.',
      islandDistricts: ['Huyện đảo Phú Quý (Đ. Phú Quý)']
    },
    notableGeographicalCharacteristics: {
      en: 'Year-round cool temperate climate with four seasons in a single day, surrounded by whispering pine forests and Xuan Huong Lake.',
      vi: 'Khí hậu ôn đới mát mẻ quanh năm với bốn mùa trong một ngày, rừng thông reo ngút ngàn và Hồ Xuân Hương êm đềm giữa lòng thành phố.'
    },
    famousLandmarks: [
      {
        nameEn: 'Da Lat Flower Park & Xuan Huong Lake',
        nameVi: 'Công viên Hoa Đà Lạt & Hồ Xuân Hương',
        descriptionEn: 'The romantic heart of the city adorned with millions of blooming hydrangeas, roses, orchids, and purple poinciana.',
        descriptionVi: 'Trái tim thơ mộng của thành phố ngàn hoa với hồ nước soi bóng rừng thông và muôn đóa hoa cẩm tú cầu, hoa mai anh đào rực rỡ.',
        emoji: '🌸'
      },
      {
        nameEn: 'Lang Biang Mountain Summit (2,167m)',
        nameVi: 'Đỉnh núi Lang Biang huyền thoại',
        descriptionEn: 'The "Roof of Da Lat" linked to the legendary love story of K’Lang and H’Biang overlooking the Golden and Silver streams.',
        descriptionVi: 'Đỉnh núi cao hơn 2.167m gắn với thiên tình sử chàng K’Lang và nàng H’Biang phóng tầm mắt ngắm toàn cảnh thung lũng suối Vàng suối Bạc.',
        emoji: '⛰️'
      },
      {
        nameEn: 'Phu Quy Island Sanctuary',
        nameVi: 'Huyện đảo Phú Quý',
        descriptionEn: 'Pristine sovereign oceanic volcanic island known for emerald waters, giant wind turbines, and Linh Son Pagoda.',
        descriptionVi: 'Hòn đảo ngọc giữa đại dương với làn nước trong vắt, quạt gió khổng lồ và đỉnh Cao Cát hùng vĩ.',
        emoji: '🏝️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Da Lat Grilled Rice Paper ("Vietnamese Pizza")',
        nameVi: 'Bánh tráng nướng Đà Lạt',
        descriptionEn: 'Crispy rice paper grilled over red-hot charcoal topped with butter, quail eggs, scallions, dried beef, and sausage.',
        descriptionVi: 'Món ăn vặt đường phố nổi tiếng thế giới nướng than hồng giòn rụm với trứng cút, mỡ hành, bò khô và xúc xích.',
        emoji: '🍕'
      },
      {
        nameEn: 'Air-Dried Sweet Persimmons (Hong Treo Gio)',
        nameVi: 'Hồng treo gió Đà Lạt',
        descriptionEn: 'Whole honey persimmons naturally massaged and air-dried in cool mountain breezes until sweet, amber, and jelly-soft.',
        descriptionVi: 'Những trái hồng vàng ươm treo gió tự nhiên theo công nghệ Nhật Bản, dẻo quánh mật ngọt thanh tao.',
        emoji: '🍯'
      }
    ],
    culturalTraditions: {
      en: 'Gentle, polite, and hospitable highland demeanor ("Hiền hòa, thanh lịch, mến khách"), flower cultivation artistry, and K’Ho gong music.',
      vi: 'Nét sống hiền hòa thanh lịch của người Đà Lạt, nghệ thuật ươm hoa trăm năm và tiếng cồng chiêng K’Ho rộn rã chân núi Lang Biang.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Da Lat Flower Festival',
        nameVi: 'Festival Hoa Đà Lạt',
        unescoHeritage: false,
        descriptionEn: 'Vietnam’s premier biennial flower festival showcasing living floral carpets, music galas, and agricultural exhibitions.',
        descriptionVi: 'Lễ hội hoa quốc gia định kỳ hai năm một lần biến cả thành phố thành một đại công viên hoa rực rỡ sắc màu.',
        emoji: '🌺'
      },
      {
        nameEn: 'Lang Biang World Biosphere Reserve',
        nameVi: 'Khu dự trữ sinh quyển thế giới Lang Biang',
        unescoHeritage: true,
        descriptionEn: 'UNESCO World Biosphere Reserve protecting ancient pine forests and endangered flora and fauna.',
        descriptionVi: 'Khu dự trữ sinh quyển thế giới được UNESCO vinh danh với hệ sinh thái rừng thông ba lá và đa dạng sinh học vô giá.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Cau Dat Arabica coffee, artichoke tea, fresh strawberries & cut flowers',
        productVi: 'Cà phê Cầu Đất Arabica, Trà Atiso & Dâu tây Đà Lạt',
        occupationEn: 'Floriculturist & highland greenhouse horticulturist',
        occupationVi: 'Nghệ nhân trồng hoa trong nhà kính & Người chế biến trà atiso'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Datanla Waterfall & Alpine Coaster',
        nameVi: 'Thác Datanla',
        type: 'Waterfall',
        descriptionEn: 'Exciting forest waterfall cascading through deep pine ravines, explored by a thrilling alpine mountain coaster.'
      },
      {
        nameEn: 'Tuyen Lam Lake Eco-Sanctuary',
        nameVi: 'Hồ Tuyền Lâm & Thiền viện Trúc Lâm',
        type: 'Lake',
        descriptionEn: 'The largest freshwater lake in Da Lat surrounded by deep pine forests and the tranquil Truc Lam Zen Monastery.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Known affectionately as the "City of Eternal Spring", the "City of a Thousand Flowers", and Vietnam’s romantic capital of love.',
      vi: 'Được yêu mến gọi là "Thành phố ngàn hoa", "Thành phố sương mù" và xứ sở tình yêu lãng mạn bậc nhất Việt Nam.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Temperate',
        phonetic: '/ˈtem.pɚ.ət/',
        partOfSpeech: 'adjective',
        meaningEn: 'Having a mild, cool climate that is never extremely hot or freezing cold.',
        meaningVi: 'Khí hậu ôn đới mát mẻ',
        exampleSentence: 'Da Lat enjoys a cool temperate climate all year round.',
        emoji: '🌤️'
      },
      {
        word: 'Hydrangea',
        phonetic: '/haɪˈdreɪn.dʒə/',
        partOfSpeech: 'noun',
        meaningEn: 'A garden bush with giant round balls of pink, blue, or white flowers.',
        meaningVi: 'Hoa cẩm tú cầu',
        exampleSentence: 'Giant blue hydrangeas bloom beside the pine trees in Da Lat.',
        emoji: '💐'
      },
      {
        word: 'Greenhouse',
        phonetic: '/ˈɡriːn.haʊs/',
        partOfSpeech: 'noun',
        meaningEn: 'A glass or transparent building where flowers and vegetables are grown in controlled warmth.',
        meaningVi: 'Nhà kính trồng hoa công nghệ cao',
        exampleSentence: 'Glowing greenhouses light up the night hills of Da Lat like stars.',
        emoji: '🏡'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Da Lat in Lam Dong is known as the [City of a Thousand Flowers / City of Eternal Spring].',
        patternMeaningVi: 'Đà Lạt ở Lâm Đồng được biết đến là [Thành phố Ngàn Hoa / Thành phố Mùa Xuân Vĩnh Cửu].',
        exampleEn: 'Da Lat in Lam Dong is known as the City of a Thousand Flowers.',
        exampleVi: 'Đà Lạt ở Lâm Đồng được biết đến là Thành phố Ngàn Hoa.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Put on a cozy woolen sweater and welcome to Da Lat! The morning mist glides softly over Xuan Huong Lake. In the evening, the night hills sparkle with golden light from thousands of flower greenhouses, while street vendors serve crispy grilled rice paper.',
        question: 'What popular street food is known as "Vietnamese Pizza" in Da Lat?',
        options: [
          'Grilled rice paper (Bánh tráng nướng) 🍕',
          'Ice cream cones 🍦',
          'Spicy hotdogs 🌭',
          'Cotton candy 🍬'
        ],
        correctIndex: 0,
        explanationEn: 'Crispy grilled rice paper (bánh tráng nướng) is famous worldwide as "Vietnamese Pizza" from Da Lat.',
        explanationVi: 'Bánh tráng nướng Đà Lạt giòn rụm thơm lừng được du khách quốc tế thích thú gọi là "Pizza Việt Nam".'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this welcoming line with cozy warmth and charm!',
        roleplayPromptVi: 'Đọc to câu văn giới thiệu thành phố ngàn hoa Đà Lạt bằng tiếng Anh!',
        targetSpeech: 'Da Lat is the romantic City of a Thousand Flowers with cool pine breezes!',
        sampleAudioPhonetic: '/dɑː læt ɪz ðə roʊˈmæn.tɪk ˈsɪt.i əv ə ˈθaʊ.zənd ˈflaʊ.ɚz wɪð kuːl paɪn ˈbriː.zɪz!/',
        pronunciationTips: 'Make "romantic City of a Thousand Flowers" sound melodic and gentle.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'ld-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which poetic title is lovingly given to Da Lat City in Lam Dong Province?',
        questionVi: 'Danh hiệu thơ mộng nào được trao cho Thành phố Đà Lạt thuộc Tỉnh Lâm Đồng?',
        options: ['The City of a Thousand Flowers (Thành phố Ngàn Hoa) 🌸', 'The Desert City', 'The Iceberg City', 'The Volcano Town'],
        correctIndex: 0,
        explanationEn: 'Da Lat is celebrated throughout Vietnam and the world as the "City of a Thousand Flowers".',
        explanationVi: 'Đà Lạt tự hào được mệnh danh là Thành phố Ngàn Hoa với muôn sắc hoa rực rỡ quanh năm.'
      },
      {
        id: 'ld-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which mountain summit in Lam Dong is associated with the legendary romance of K’Lang and H’Biang?',
        questionVi: 'Đỉnh núi nào ở Lâm Đồng gắn liền với thiên tình sử huyền thoại của chàng K’Lang và nàng H’Biang?',
        options: [
          'Lang Biang Mountain (Đỉnh núi Lang Biang) ⛰️',
          'Fansipan Peak',
          'Mount Everest',
          'Pu Si Lung Peak'
        ],
        correctIndex: 0,
        explanationEn: 'Lang Biang Mountain is named after the legendary lovers K’Lang and H’Biang of the K’Ho people.',
        explanationVi: 'Núi Lang Biang mang tên ghép của chàng K’Lang và nàng H’Biang trong thiên tình sử bất tử của người K’Ho.'
      },
      {
        id: 'ld-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'What advice in English would you give a friend packing for a trip to Da Lat?',
        questionVi: 'Lời khuyên bằng tiếng Anh nào em sẽ dành cho bạn khi chuẩn bị hành lý đi du lịch Đà Lạt?',
        options: [
          '"Pack a warm woolen sweater and jacket because Da Lat gets pleasantly cool in the morning and evening!" 🧥🧣',
          '"Bring a heavy snow shovel for blizzards." ❄️',
          '"Only wear summer swimwear everywhere." 🩱',
          '"Do not pack any clothes." 🚫'
        ],
        correctIndex: 0,
        explanationEn: 'Advising a cozy sweater and jacket fits Da Lat’s cool highland temperate climate perfectly.',
        explanationVi: 'Khuyên mang áo len và áo khoác ấm là lời khuyên chuẩn xác và chu đáo nhất khi đến với xứ lạnh Đà Lạt.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  }
];
