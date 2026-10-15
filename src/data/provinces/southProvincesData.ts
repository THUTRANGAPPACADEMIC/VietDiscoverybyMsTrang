import { ProvinceEducationalData } from './types';

export const SOUTH_PROVINCES_DATA: ProvinceEducationalData[] = [
  // 23. TỈNH ĐỒNG NAI
  {
    code: 'DNA',
    id: 'vn-34-dna',
    type: 'province',
    nameVi: 'Tỉnh Đồng Nai',
    nameEn: 'Dong Nai Province',
    capitalVi: 'TP. Biên Hòa',
    capitalEn: 'Bien Hoa City',
    region: 'South',
    zone: 'Đông Nam Bộ',
    emoji: '✈️',
    image: '/destinations/cat_tien_national_park.jpg',
    geographicLocation: {
      latitude: 11.0000,
      longitude: 107.0000,
      borders: 'Bordered by Lam Dong to the north, Binh Thuan to the east, Ba Ria - Vung Tau and Ho Chi Minh City to the south, and Binh Duong to the west.',
      terrain: 'Spacious rolling plains, Dong Nai River basin, UNESCO Cat Tien biosphere rainforest, and the Long Thanh international aero-metropolis.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Đồng Nai', 'Tỉnh Bình Phước'],
      summaryVi: 'Cửa ngõ công nghiệp và logistics lớn của vùng Đông Nam Bộ, hợp nhất Đồng Nai và Bình Phước theo Nghị quyết 2025; trung tâm hàng không quốc tế Long Thành, Vườn quốc gia Cát Tiên và Bù Gia Mập; thủ phủ hạt điều và cao su.',
      summaryEn: 'Southern logistics and high-tech industrial powerhouse uniting Dong Nai and Binh Phuoc, hosting Long Thanh International Airport and UNESCO Cat Tien National Park.'
    },
    notableGeographicalCharacteristics: {
      en: 'Traversed by the mighty Dong Nai River, lush tropical rainforest reserves at Cat Tien and Bu Gia Map, and vast cashew and rubber plantations.',
      vi: 'Dòng sông Đồng Nai uốn lượn, cánh rừng mưa nhiệt đới nguyên sinh Cát Tiên và Bù Gia Mập cùng những rừng cao su, vườn điều bạt ngàn.'
    },
    famousLandmarks: [
      {
        nameEn: 'Cat Tien National Park (UNESCO Biosphere Reserve)',
        nameVi: 'Vườn quốc gia Cát Tiên',
        descriptionEn: 'Internationally protected tropical rainforest home to ancient Tung trees, gibbons, wild crocodiles at Bau Sau, and Asian elephants.',
        descriptionVi: 'Khu dự trữ sinh quyển thế giới UNESCO với cây tung cổ thụ ngàn năm, bàu Sấu hoang dã và vượn má vàng cất tiếng hót đón bình minh.',
        emoji: '🌿'
      },
      {
        nameEn: 'Long Thanh International Airport Megaproject',
        nameVi: 'Cảng hàng không Quốc tế Long Thành',
        descriptionEn: 'Vietnam’s monumental 4F mega-airport terminal shaped like an elegant blooming lotus blossom, serving as Southeast Asia’s global aviation hub.',
        descriptionVi: 'Đại dự án sân bay quốc tế quy mô thế kỷ hình bông sen cách điệu, cửa ngõ bầu trời kết nối Việt Nam với năm châu.',
        emoji: '✈️'
      },
      {
        nameEn: 'Bien Hoa Ancient Ceramics & Buu Long Scenic Park',
        nameVi: 'Gốm Biên Hòa & Khu danh thắng Bửu Long',
        descriptionEn: 'Historic 300-year-old pottery town on the Dong Nai River and the scenic "Ha Long Bay of the South" at Buu Long.',
        descriptionVi: 'Cái nôi gốm men xanh trứ danh 300 năm tuổi và danh thắng hồ Long Ẩn soi bóng những vách đá nhô lên giữa làn nước biếc.',
        emoji: '🏺'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Tan Trieu Sugar Pomelo (Buoi Tan Trieu)',
        nameVi: 'Bưởi đường Tân Triều',
        descriptionEn: 'Sweet, fragrant heirloom pomelos grown along the alluvial soil of Dong Nai River, crafted into unique pomelo salad and pomelo wine.',
        descriptionVi: 'Đặc sản bưởi cù lao Tân Triều mọng nước ngọt thanh được chế biến thành gỏi bưởi và rượu bưởi thơm lừng.',
        emoji: '🍈'
      },
      {
        nameEn: 'Binh Phuoc Roasted Salted Cashews',
        nameVi: 'Hạt điều rang muối Bình Phước',
        descriptionEn: 'Giant, plump, crunchy cashews wood-roasted with sea salt, prized globally for their rich buttery sweetness.',
        descriptionVi: 'Hạt điều vàng giòn béo ngậy rang củi với muối biển, niềm tự hào xuất khẩu nông sản số một thế giới.',
        emoji: '🥜'
      }
    ],
    culturalTraditions: {
      en: 'Historic 300-year southern pioneer spirit of Nguyen Huu Canh, skilled ceramics pottery craftsmanship, and Stieng ethnic gong culture.',
      vi: 'Tinh thần mở cõi hào sảng của Lễ Thành Hầu Nguyễn Hữu Cảnh, nghệ thuật gốm Biên Hòa tài hoa và lễ hội đâm trâu của đồng bào S’tiêng.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Nguyen Huu Canh Memorial Festival (Tran Bien Temple)',
        nameVi: 'Lễ hội Đền thờ Nguyễn Hữu Cảnh (Văn miếu Trấn Biên)',
        unescoHeritage: false,
        descriptionEn: 'Grand commemoration honoring the pioneer general who founded Gia Dinh - Saigon and the southern realm in 1698.',
        descriptionVi: 'Lễ hội tri ân công đức Lễ Thành Hầu Nguyễn Hữu Cảnh có công mở mang bờ cõi phương Nam năm 1698.',
        emoji: '👑'
      },
      {
        nameEn: 'Cat Tien National Park UNESCO World Biosphere',
        nameVi: 'Khu Dự trữ Sinh quyển Thế giới Cát Tiên',
        unescoHeritage: true,
        descriptionEn: 'Inscribed by UNESCO in 2001 protecting 72,000 hectares of critical lowland tropical rainforest and wetland biodiversity.',
        descriptionVi: 'Được UNESCO công nhận năm 2001 là vùng đất ngập nước Ramsar quốc tế và mái nhà của muôn loài động thực vật quý hiếm.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Bien Hoa colored-glaze pottery & export cashew kernels',
        productVi: 'Gốm mỹ nghệ Biên Hòa & Hạt điều chế biến sâu',
        occupationEn: 'Aviation engineer & ceramic glaze master',
        occupationVi: 'Kỹ sư hàng không Long Thành & Nghệ nhân chế tác men gốm'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Bau Sau Crocodile Wetland Sanctuary',
        nameVi: 'Khu Ramsar Bàu Sấu (Vườn quốc gia Cát Tiên)',
        type: 'Wetland',
        descriptionEn: 'International Ramsar wetland where hundreds of Siamese freshwater crocodiles swim peacefully among blooming lotus.',
        emoji: '🐊'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The dynamic mega-gateway of the South where 300-year-old ceramic history meets supersonic flight at Long Thanh Airport.',
      vi: 'Cửa ngõ cất cánh của phương Nam, nơi di sản gốm Biên Hòa 300 năm giao hòa cùng khát vọng bầu trời sân bay Long Thành.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Aviation',
        phonetic: '/ˌeɪ.viˈeɪ.ʃən/',
        partOfSpeech: 'noun',
        meaningEn: 'The design, development, and flying of airplanes.',
        meaningVi: 'Ngành hàng không, chuyến bay bầu trời',
        exampleSentence: 'Long Thanh is a world-class international aviation hub.',
        emoji: '✈️'
      },
      {
        word: 'Rainforest',
        phonetic: '/ˈreɪn.fɔːr.ɪst/',
        partOfSpeech: 'noun',
        meaningEn: 'A thick evergreen tropical forest that receives abundant rainfall all year.',
        meaningVi: 'Rừng mưa nhiệt đới nguyên sinh',
        exampleSentence: 'Cat Tien is a pristine tropical rainforest in Dong Nai.',
        emoji: '🌳'
      },
      {
        word: 'Cashew',
        phonetic: '/ˈkæʃ.uː/',
        partOfSpeech: 'noun',
        meaningEn: 'A kidney-shaped nut with a buttery, sweet, and crunchy taste.',
        meaningVi: 'Hạt điều béo ngậy',
        exampleSentence: 'Vietnam exports delicious roasted cashews around the world.',
        emoji: '🥜'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Dong Nai is a bustling southern province famous for [Cat Tien National Park / Long Thanh Airport].',
        patternMeaningVi: 'Đồng Nai là tỉnh phía Nam sôi động nổi tiếng với [Vườn quốc gia Cát Tiên / Sân bay Long Thành].',
        exampleEn: 'Dong Nai is a bustling southern province famous for Cat Tien National Park and Long Thanh Airport.',
        exampleVi: 'Đồng Nai là tỉnh phía Nam sôi động nổi tiếng với Vườn quốc gia Cát Tiên và Sân bay Long Thành.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Walk under the giant canopy of ancient trees in Cat Tien National Park, Dong Nai! Look high up into the leafy branches: can you hear the cheerful calls of wild yellow-cheeked gibbons? Down in Bau Sau lake, gentle lotus blossoms float on calm waters.',
        question: 'What famous national park in Dong Nai is protected by UNESCO for its wild rainforest?',
        options: ['Cat Tien National Park 🌳', 'Central Park in New York', 'Hyde Park in London', 'Yellowstone desert'],
        correctIndex: 0,
        explanationEn: 'Cat Tien National Park in Dong Nai is a world-renowned UNESCO Biosphere Reserve.',
        explanationVi: 'Vườn quốc gia Cát Tiên tại Đồng Nai là Khu dự trữ sinh quyển thế giới được UNESCO bảo tồn nghiêm ngặt.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an enthusiastic line about Dong Nai’s modern future and natural wonder!',
        roleplayPromptVi: 'Đọc to câu văn ca ngợi sự phát triển và vẻ đẹp thiên nhiên Đồng Nai bằng tiếng Anh!',
        targetSpeech: 'Dong Nai is an amazing province with ancient rainforests and modern airports!',
        sampleAudioPhonetic: '/dɒŋ naɪ ɪz ən əˈmeɪ.zɪŋ ˈprɑː.vɪns wɪð ˈeɪn.ʃənt ˈreɪnˌfɔːr.ɪsts ænd ˈmɑː.dɚn ˈer.pɔːrts!/',
        pronunciationTips: 'Make "ancient rainforests" sound mysterious and "modern airports" energetic!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'dna-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which monumental international airport megaproject is being constructed in Dong Nai Province?',
        questionVi: 'Đại dự án sân bay quốc tế thế kỷ nào đang được xây dựng tại Tỉnh Đồng Nai?',
        options: ['Long Thanh International Airport ✈️', 'Noi Bai Airport', 'Tan Son Nhat Airport', 'Da Nang Airport'],
        correctIndex: 0,
        explanationEn: 'Long Thanh International Airport in Dong Nai is Vietnam’s premier future aviation gateway.',
        explanationVi: 'Cảng hàng không quốc tế Long Thành tại Đồng Nai là cửa ngõ hàng không hiện đại bậc nhất khu vực.'
      },
      {
        id: 'dna-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which famous delicious nut is exported in massive quantities from the regional orchards of this province?',
        questionVi: 'Loại hạt thơm ngon bổ dưỡng nào được xuất khẩu hàng đầu từ các nông trường vùng này?',
        options: [
          'Crunchy roasted cashews (Hạt điều rang muối) 🥜',
          'Hazelnuts from the North Pole',
          'Walnuts from the desert',
          'Pecan pies'
        ],
        correctIndex: 0,
        explanationEn: 'The Binh Phuoc - Dong Nai belt is Vietnam’s and the world’s leading producer of premium cashews.',
        explanationVi: 'Vùng đất Đồng Nai – Bình Phước là thủ phủ hạt điều số 1 thế giới với chất lượng thơm béo tuyệt hảo.'
      },
      {
        id: 'dna-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Cat Tien National Park in English to an eco-tourist?',
        questionVi: 'Em miêu tả Vườn quốc gia Cát Tiên bằng tiếng Anh cho du khách yêu thiên nhiên như thế nào?',
        options: [
          '"Cat Tien is a pristine UNESCO tropical rainforest teeming with ancient Tung trees, singing gibbons, and rare wildlife!" 🌳🐒',
          '"Cat Tien is a shopping mall with parking lots." 🚗',
          '"It is a factory of plastic bottles." 🧴',
          '"Cat Tien is made of desert sand." 🏜️'
        ],
        correctIndex: 0,
        explanationEn: 'Describing it as a pristine UNESCO rainforest teeming with ancient trees and singing gibbons captures its rich biodiversity.',
        explanationVi: 'Miêu tả khu rừng nhiệt đới nguyên sinh UNESCO với cây tung cổ thụ và vượn má vàng thể hiện đúng giá trị sinh thái.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 24. TỈNH TÂY NINH
  {
    code: 'TNI',
    id: 'vn-34-tni',
    type: 'province',
    nameVi: 'Tỉnh Tây Ninh',
    nameEn: 'Tay Ninh Province',
    capitalVi: 'TP. Tây Ninh',
    capitalEn: 'Tay Ninh City',
    region: 'South',
    zone: 'Đông Nam Bộ',
    emoji: '⛰️',
    image: '/destinations/ba_den_mountain.jpg',
    geographicLocation: {
      latitude: 11.3100,
      longitude: 106.1000,
      borders: 'Bordered by Cambodia to the north and west, Binh Duong and Binh Phuoc to the east, and Long An and Ho Chi Minh City to the south.',
      terrain: 'Spacious plains dominated by Mount Ba Den (986m, "Roof of Southern Vietnam"), Dau Tieng Lake, and cross-border trade corridors.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Tây Ninh'],
      summaryVi: 'Trung tâm kinh tế cửa khẩu biên giới Tây Nam (Mộc Bài, Xa Mát) theo Nghị quyết 202/2025/QH15; địa danh Núi Bà Đen cao nhất Nam Bộ (986m) và hồ thủy lợi Dầu Tiếng lớn nhất Đông Nam Á.',
      summaryEn: 'Strategic southwestern international border trade hub (Moc Bai), home to Mount Ba Den ("Roof of the South", 986m) and the Cao Dai Holy See.'
    },
    notableGeographicalCharacteristics: {
      en: 'The majestic solitary volcanic peak of Mount Ba Den soaring 986 meters above flat fertile plains, and the vast artificial lake Dau Tieng.',
      vi: 'Ngọn núi Bà Đen 986m sừng sững độc tôn giữa đồng bằng bao la và hồ nhân tạo Dầu Tiếng mênh mông như biển hồ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Mount Ba Den ("The Roof of Southern Vietnam")',
        nameVi: 'Núi Bà Đen (986m)',
        descriptionEn: 'The highest summit in the South, crowned by the giant bronze statue of Lady Buddha (Tay Bo Da Son) holding Asian records.',
        descriptionVi: 'Ngọn núi cao nhất Nam Bộ với tượng Phật Bà Tây Bổ Đà Sơn bằng đồng đúc tinh xảo lập kỷ lục châu Á trên đỉnh núi mây phủ.',
        emoji: '⛰️'
      },
      {
        nameEn: 'Tay Ninh Holy See (Toa Thanh Tay Ninh)',
        nameVi: 'Tòa Thánh Tây Ninh (Đạo Cao Đài)',
        descriptionEn: 'The grand architectural mother temple of Cao Dai philosophy, adorned with colorful dragon pillars and the Divine Eye symbol.',
        descriptionVi: 'Trung tâm tôn giáo Cao Đài lộng lẫy với những cột rồng uốn lượn rực rỡ và biểu tượng Thiên Nhãn linh thiêng.',
        emoji: '👁️'
      },
      {
        nameEn: 'Dau Tieng Lake Reservoir',
        nameVi: 'Hồ Dầu Tiếng',
        descriptionEn: 'The largest artificial freshwater irrigation lake in Southeast Asia, cooling the region and providing vital water.',
        descriptionVi: 'Hồ thủy nông nhân tạo lớn nhất Đông Nam Á với mặt nước trong xanh bao la điều tiết nguồn nước cho cả vùng.',
        emoji: '🏞️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Trang Bang Dew-Wetted Rice Paper (Banh Trang Phoi Suong)',
        nameVi: 'Bánh tráng phơi sương Trảng Bàng',
        descriptionEn: 'Soft, pliable rice paper baked over embers and left out in midnight dew, rolled with boiled pork, fresh forest herbs, and fish sauce.',
        descriptionVi: 'Chiếc bánh tráng dẻo thơm hứng từng giọt sương đêm cuộn thịt heo luộc và hàng chục loại rau rừng độc đáo chấm mắm tỏi ớt.',
        emoji: '🌯'
      },
      {
        nameEn: 'Tay Ninh Shrimp Chili Salt (Muoi Tom Tay Ninh)',
        nameVi: 'Muối tôm Tây Ninh',
        descriptionEn: 'Iconic spicy, savory, and sweet condiment made from dried sea shrimp, sun-ripened red chilies, garlic, and sea salt.',
        descriptionVi: 'Món muối chấm quốc dân đậm đà thơm lừng làm từ tôm biển, ớt đỏ cay nồng và muối hạt rang khô giòn.',
        emoji: '🧂'
      }
    ],
    culturalTraditions: {
      en: 'Syncretic harmony of Cao Dai universal love, legendary loyalty of Lady Den (Ba Den), and the unique art of dewy rice paper crafting.',
      vi: 'Tinh thần hòa ái của đạo Cao Đài, huyền tích linh thiêng về nàng Lý Thị Thiên Hương (Bà Đen) và làng nghề làm bánh tráng phơi sương.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Mount Ba Den Spring Pilgrimage Festival',
        nameVi: 'Hội Xuân Núi Bà Đen',
        unescoHeritage: false,
        descriptionEn: 'Vietnam’s largest spring pilgrimage attracting millions of travelers to pray for peace, health, and prosperity among cloud temples.',
        descriptionVi: 'Lễ hội hành hương lớn bậc nhất phương Nam mỗi độ tết đến xuân về thu hút hàng triệu du khách chiêm bái cầu an.',
        emoji: '🏮'
      },
      {
        nameEn: 'Dew-Wetted Rice Paper Craft Heritage',
        nameVi: 'Nghề làm bánh tráng phơi sương Trảng Bàng',
        unescoHeritage: false,
        descriptionEn: 'National Intangible Cultural Heritage honoring the patient artistry of catching cool night dew to soften baked rice paper.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể Quốc gia tôn vinh sự cần cù sáng tạo của nghệ nhân thức trọn đêm hứng sương trời.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Tay Ninh shrimp salt, soursop fruit (Mang cau Ba Den) & tapioca starch',
        productVi: 'Muối tôm Tây Ninh & Mãng cầu ta Núi Bà Đen',
        occupationEn: 'Rice paper artisan & border cross-trade specialist',
        occupationVi: 'Nghệ nhân phơi sương bánh tráng & Chuyên viên logistics cửa khẩu Mộc Bài'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Lo Go - Xa Mat National Park',
        nameVi: 'Vườn quốc gia Lò Gò – Xa Mát (ASEAN Heritage Park)',
        type: 'National Park',
        descriptionEn: 'Cross-border ASEAN Heritage sanctuary preserving rare lowland deciduous and semi-evergreen monsoon forests.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The sacred rooftop of the South where the bronze Lady Buddha presides above the clouds and the vibrant flavors of shrimp salt delight all.',
      vi: 'Nóc nhà Nam Bộ thiêng liêng nơi tượng Phật Bà ngự giữa biển mây và hương vị muối tôm nức lòng muôn khách.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Dew',
        phonetic: '/duː/',
        partOfSpeech: 'noun',
        meaningEn: 'Tiny drops of fresh water that form on grass and rice paper in the cool night air.',
        meaningVi: 'Giọt sương đêm thanh khiết',
        exampleSentence: 'Dew-wetted rice paper is left outside to catch the midnight dew.',
        emoji: '💧'
      },
      {
        word: 'Syncretism',
        phonetic: '/ˈsɪŋ.krə.tɪ.zəm/',
        partOfSpeech: 'noun',
        meaningEn: 'The peaceful combination of different religious beliefs and philosophical traditions.',
        meaningVi: 'Sự hòa hợp tôn giáo và triết học',
        exampleSentence: 'Cao Dai philosophy teaches universal syncretism and peace.',
        emoji: '🕊️'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Mount Ba Den in Tay Ninh is proudly known as the [Roof of Southern Vietnam / highest peak].',
        patternMeaningVi: 'Núi Bà Đen ở Tây Ninh tự hào được gọi là [Nóc nhà Nam Bộ / ngọn núi cao nhất].',
        exampleEn: 'Mount Ba Den in Tay Ninh is proudly known as the Roof of Southern Vietnam.',
        exampleVi: 'Núi Bà Đen ở Tây Ninh tự hào được gọi là Nóc nhà Nam Bộ.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step inside the modern cable car cabin and glide up into the clouds of Mount Ba Den in Tay Ninh! At 986 meters, you reach the summit where a giant bronze Lady Buddha statue gazes peacefully across the sunlit plains below.',
        question: 'How high is Mount Ba Den, the Roof of Southern Vietnam?',
        options: ['986 meters high ⛰️', '100 meters high', '10,000 meters high', '50 meters high'],
        correctIndex: 0,
        explanationEn: 'Mount Ba Den rises to an exact elevation of 986 meters, making it the highest mountain in Southern Vietnam.',
        explanationVi: 'Núi Bà Đen cao 986m, kiêu hãnh là ngọn núi cao nhất vùng đất Nam Bộ.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this exciting line about Mount Ba Den with cheerful spirit!',
        roleplayPromptVi: 'Đọc to câu giới thiệu về Núi Bà Đen Tây Ninh bằng tiếng Anh thật hay!',
        targetSpeech: 'Mount Ba Den is the magnificent Roof of Southern Vietnam touched by white clouds!',
        sampleAudioPhonetic: '/maʊnt bɑː den ɪz ðə mæɡˈnɪf.ə.sənt ruːf əv ˈsʌð.ɚn ˌvjetˈnɑːm tʌtʃt baɪ waɪt klaʊdz!/',
        pronunciationTips: 'Say "Roof of Southern Vietnam" proudly, and smile on "white clouds"!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'tni-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which mountain in Tay Ninh rising 986 meters is crowned the "Roof of Southern Vietnam"?',
        questionVi: 'Ngọn núi nào ở Tây Ninh cao 986m được tôn vinh là "Nóc nhà Nam Bộ"?',
        options: ['Mount Ba Den (Núi Bà Đen) ⛰️', 'Ba Vi Mountain', 'Fansipan Mountain', 'Marble Mountain'],
        correctIndex: 0,
        explanationEn: 'Mount Ba Den at 986 meters is the highest mountain peak in Southern Vietnam.',
        explanationVi: 'Núi Bà Đen cao 986m là đỉnh núi cao nhất Nam Bộ và là điểm đến hành hương nổi tiếng.'
      },
      {
        id: 'tni-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What makes Trang Bang "Banh Trang Phoi Suong" rice paper uniquely soft and delicious?',
        questionVi: 'Điều gì làm cho bánh tráng phơi sương Trảng Bàng có độ dẻo mềm thơm ngon độc đáo?',
        options: [
          'It is left out in the cool night breeze to absorb the natural morning dew 💧',
          'It is soaked in chocolate syrup 🍫',
          'It is frozen in an ice cave 🧊',
          'It is cooked in microwave ovens ⚡'
        ],
        correctIndex: 0,
        explanationEn: 'Artisans expose baked rice paper to the overnight dew, naturally softening the texture.',
        explanationVi: 'Bánh tráng nướng được phơi ngoài trời đêm để hứng trọn giọt sương mát lành giúp bánh mềm dẻo.'
      },
      {
        id: 'tni-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Tay Ninh’s world-famous "Muoi Tom" (shrimp chili salt) in English?',
        questionVi: 'Em miêu tả món gia vị nổi tiếng "Muối tôm Tây Ninh" bằng tiếng Anh như thế nào cho chuẩn?',
        options: [
          '"Muoi Tom is a delicious spicy and savory salt made with dried shrimp, chili, and garlic that pairs wonderfully with fresh fruits!" 🧄🌶️',
          '"It is sweet ice cream." 🍦',
          '"It is boiling tea." 🍵',
          '"It is tasteless water." 💧'
        ],
        correctIndex: 0,
        explanationEn: 'Describing it as a spicy and savory salt made with dried shrimp, chili, and garlic that pairs with fruit captures its culinary fame.',
        explanationVi: 'Miêu tả muối tôm với vị mặn mà cay nồng từ tôm khô, ớt đỏ và tỏi thơm chấm cùng trái cây là cách giới thiệu chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 25. TỈNH ĐỒNG THÁP
  {
    code: 'DT',
    id: 'vn-34-dt',
    type: 'province',
    nameVi: 'Tỉnh Đồng Tháp',
    nameEn: 'Dong Thap Province',
    capitalVi: 'TP. Cao Lãnh',
    capitalEn: 'Cao Lanh City',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    emoji: '🪷',
    image: '/destinations/dong_thap_lotus.jpg',
    geographicLocation: {
      latitude: 10.4500,
      longitude: 105.6333,
      borders: 'Bordered by Cambodia to the north, Long An and Tien Giang to the east, Vinh Long and Can Tho to the south, and An Giang to the west.',
      terrain: 'Sprawling fertile delta wetland (Dong Thap Muoi basin), interconnected riverways of the Tien River, and blooming lotus fields.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Đồng Tháp', 'Tỉnh Tiền Giang', 'Tỉnh Long An (vùng kết nối Đồng Tháp Mười)'],
      summaryVi: 'Vùng châu thổ trù phú hợp nhất Đồng Tháp, Tiền Giang và Long An theo quy hoạch 2025; bảo tồn Vườn quốc gia Tràm Chim (Khu Ramsar thế giới), Làng hoa Sa Đéc trăm tuổi và xứ sở hoa sen thanh tao.',
      summaryEn: 'Fertile delta agricultural engine uniting Dong Thap, Tiền Giang, and Long An, preserving Tram Chim National Park (Ramsar site) and Sa Dec century-old flower village.'
    },
    notableGeographicalCharacteristics: {
      en: 'The iconic heart of the Dong Thap Muoi wetland plain, blanketed with pure pink lotus ponds, cajeput forests, and blooming flower canals.',
      vi: 'Trái tim của vùng đất ngập nước Đồng Tháp Mười, ngút ngàn đầm sen hồng thanh khiết, rừng tràm xanh thẳm và làng hoa Sa Đéc rực rỡ.'
    },
    famousLandmarks: [
      {
        nameEn: 'Tram Chim National Park (UNESCO Ramsar Wetland)',
        nameVi: 'Vườn quốc gia Tràm Chim',
        descriptionEn: 'Internationally protected wetland sanctuary famous as the seasonal dancing home of the rare Red-Crowned Crane (Sếu đầu đỏ).',
        descriptionVi: 'Khu Ramsar thế giới lưu giữ hệ sinh thái đất ngập nước quý hiếm nơi vũ điệu của loài Sếu đầu đỏ thắp sáng hoàng hôn.',
        emoji: '🦩'
      },
      {
        nameEn: 'Sa Dec Century-Old Flower Village',
        nameVi: 'Làng hoa kiểng Sa Đéc',
        descriptionEn: 'Over 100-year-old flower garden capital of the Mekong Delta where colorful roses and chrysanthemums grow on bamboo shelves above river canals.',
        descriptionVi: 'Thủ phủ hoa kiểng hơn 100 năm tuổi miền Tây nơi nông dân chèo thuyền giữa các luống hoa trồng trên giàn tre trên mặt nước.',
        emoji: '💐'
      },
      {
        nameEn: 'Xeo Quyt Historic Ecological Relic',
        nameVi: 'Khu di tích sinh thái Xẻo Quýt',
        descriptionEn: 'Heroic revolutionary forest base hidden under thick mangrove canopies and giant wild vines explored by wooden sampans.',
        descriptionVi: 'Căn cứ cách mạng kiên cường ẩn mình dưới tán rừng tràm rợp bóng và dây leo bòng bong hoang sơ.',
        emoji: '🛶'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Lotus Seed Milk & Grilled Fish in Young Lotus Leaves',
        nameVi: 'Sữa hạt sen & Cá lóc nướng cuốn lá sen non',
        descriptionEn: 'Rich sweet lotus seed milk paired with fresh field snakehead fish roasted over straw wrapped in tender young lotus leaves.',
        descriptionVi: 'Cá lóc đồng nướng rơm cuốn lá sen non chấm mắm me chua ngọt và sữa hạt sen thanh mát ngọt bùi.',
        emoji: '🪷'
      },
      {
        nameEn: 'Sa Dec Rice Noodle Soup (Hu Tieu Sa Dec)',
        nameVi: 'Hủ tiếu Sa Đéc',
        descriptionEn: 'Chewy, translucent rice noodles made from pure Sa Dec rice flour, served with sweet pork bone broth, shrimp, liver, and fresh chives.',
        descriptionVi: 'Tô hủ tiếu với sợi bánh trắng trong dai mềm làm từ bột gạo Sa Đéc truyền thống hòa quyện cùng nước súp ngọt thanh.',
        emoji: '🍜'
      }
    ],
    culturalTraditions: {
      en: 'Folk admiration for the pure lotus flower: "Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ", and peaceful sampan paddling songs.',
      vi: 'Câu ca dao bất hủ ngợi ca hoa sen và Bác Hồ, tấm lòng hiền hòa thuần hậu của người Nam Bộ và điệu hò Đồng Tháp mênh mang.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Dong Thap Lotus Festival',
        nameVi: 'Lễ hội Sen Đồng Tháp',
        unescoHeritage: false,
        descriptionEn: 'Magnificent cultural festival celebrating the lotus flower with culinary feasts featuring 200 lotus dishes and art shows.',
        descriptionVi: 'Lễ hội tôn vinh hoa sen với đại tiệc xác lập kỷ lục 200 món ăn chế biến từ sen và thời trang áo dài sen.',
        emoji: '🪷'
      },
      {
        nameEn: 'Sa Dec Rice Flour Craft Heritage',
        nameVi: 'Làng nghề làm bột gạo Sa Đéc',
        unescoHeritage: false,
        descriptionEn: 'Century-old traditional craft of grinding mineral river water with rice to produce Vietnam’s finest noodle flour.',
        descriptionVi: 'Làng nghề trăm năm chế biến bột gạo nức tiếng cung cấp nguyên liệu làm hủ tiếu, bánh phở cho cả nước.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Lai Vung fermented pork (Nem Lai Vung), lotus tea & dried mango',
        productVi: 'Nem Lai Vung, Trà tim sen & Xoài cát Chu Choa',
        occupationEn: 'Florist cultivator & wetland conservation ranger',
        occupationVi: 'Nghệ nhân trồng hoa Sa Đéc & Kiểm lâm bảo tồn sếu đầu đỏ'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Gao Giong Ecotourism Oasis',
        nameVi: 'Khu du lịch sinh thái Gáo Giồng',
        type: 'National Park',
        descriptionEn: 'Lush green cajeput sanctuary where tens of thousands of white storks and herons nest in tree canopies.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Celebrated as the "Land of the Pink Lotus" (Đất Sen Hồng), home to flowers growing above canals and the rare dancing Red-Crowned Crane.',
      vi: 'Được cả nước yêu mến với danh xưng "Đất Sen Hồng", xứ sở của những luống hoa nổi trên mặt nước và loài Sếu đầu đỏ huyền thoại.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Lotus',
        phonetic: '/ˈloʊ.t̬əs/',
        partOfSpeech: 'noun',
        meaningEn: 'A sacred pink and white water flower that grows pure and fragrant above muddy waters.',
        meaningVi: 'Bông hoa sen thanh cao',
        exampleSentence: 'Dong Thap is famous nationwide as the Land of the Pink Lotus.',
        emoji: '🪷'
      },
      {
        word: 'Crane',
        phonetic: '/kreɪn/',
        partOfSpeech: 'noun',
        meaningEn: 'A tall, graceful water bird with long legs, a long neck, and majestic wings.',
        meaningVi: 'Chim sếu đầu đỏ quý hiếm',
        exampleSentence: 'The rare Red-Crowned Crane dances in Tram Chim National Park.',
        emoji: '🦩'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Dong Thap is lovingly called the Land of the [Pink Lotus / dancing cranes].',
        patternMeaningVi: 'Đồng Tháp được yêu mến gọi là Đất của [Sen Hồng / loài sếu múa].',
        exampleEn: 'Dong Thap is lovingly called the Land of the Pink Lotus.',
        exampleVi: 'Đồng Tháp được yêu mến gọi là Đất Sen Hồng.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Paddle your wooden boat through the pink lotus ponds of Dong Thap! The air smells sweet with lotus nectar. In Sa Dec flower village, farmers row small boats between floating bamboo shelves filled with yellow daisies and red roses.',
        question: 'How do gardeners care for flowers in Sa Dec Flower Village in Dong Thap?',
        options: [
          'They row wooden boats between bamboo flower shelves over water canals 🛶🌸',
          'They drive big monster trucks 🚜',
          'They use snowplows ❄️',
          'They plant flowers on the ceiling 🏠'
        ],
        correctIndex: 0,
        explanationEn: 'In Sa Dec, flowers are grown on raised bamboo platforms above water canals, and gardeners row boats to care for them.',
        explanationVi: 'Tại làng hoa Sa Đéc, hoa được trồng trên giàn tre trên mặt nước và người dân chèo xuồng chăm sóc.'
      },
      speakingMission: {
        roleplayPromptEn: 'Recite Vietnam’s beloved folk verse about Dong Thap’s lotus in English!',
        roleplayPromptVi: 'Đọc to câu thơ ca dao về hoa sen Tháp Mười bằng tiếng Anh nhé!',
        targetSpeech: 'Dong Thap is famous for the pure and beautiful pink lotus flower!',
        sampleAudioPhonetic: '/dɒŋ tæp ɪz ˈfeɪ.məs fɔːr ðə pjʊr ænd ˈbjuː.t̬ə.fəl pɪŋk ˈloʊ.t̬əs ˈflaʊ.ɚ!/',
        pronunciationTips: 'Speak "pure and beautiful pink lotus" with poetic warmth!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'dt-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which flower is the beloved proud symbol of Dong Thap Province?',
        questionVi: 'Loài hoa nào là biểu tượng đáng tự hào của Tỉnh Đồng Tháp?',
        options: ['Pink Lotus (Hoa sen hồng) 🪷', 'Cactus flower', 'Snow daisy', 'Dandelion'],
        correctIndex: 0,
        explanationEn: 'Dong Thap is celebrated as the "Land of the Pink Lotus" (Đất Sen Hồng).',
        explanationVi: 'Đồng Tháp tự hào được mệnh danh là Đất Sen Hồng với những đầm sen bát ngát thơm ngát.'
      },
      {
        id: 'dt-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which rare and endangered bird species famously chooses Tram Chim National Park in Dong Thap as its seasonal home?',
        questionVi: 'Loài chim quý hiếm nào chọn Vườn quốc gia Tràm Chim (Đồng Tháp) làm nơi sinh sống theo mùa?',
        options: [
          'Red-Crowned Crane (Sếu đầu đỏ) 🦩',
          'Penguin from the South Pole',
          'Ostrich from the desert',
          'Hummingbird'
        ],
        correctIndex: 0,
        explanationEn: 'The Red-Crowned Crane (Grus antigone) is the symbolic bird of Tram Chim Ramsar wetland.',
        explanationVi: 'Sếu đầu đỏ là loài chim quý hiếm biểu tượng của khu đất ngập nước Tràm Chim.'
      },
      {
        id: 'dt-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Sa Dec Flower Village in English to an international garden lover?',
        questionVi: 'Em miêu tả Làng hoa Sa Đéc bằng tiếng Anh cho một người yêu cây cảnh như thế nào?',
        options: [
          '"Sa Dec is a century-old flower capital where vibrant blossoms grow on bamboo shelves above river canals!" 🌸🛶',
          '"It is a factory of concrete bricks." 🧱',
          '"There are no plants or flowers in Sa Dec." 🚫',
          '"Flowers are made of iron wire." ⛓️'
        ],
        correctIndex: 0,
        explanationEn: 'Describing it as a century-old flower capital with blossoms on bamboo shelves above water canals captures its genuine charm.',
        explanationVi: 'Miêu tả thủ phủ hoa trăm năm với những giàn hoa trên mặt nước thể hiện nét độc đáo có một không hai của Sa Đéc.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 26. TỈNH VĨNH LONG
  {
    code: 'VL',
    id: 'vn-34-vl',
    type: 'province',
    nameVi: 'Tỉnh Vĩnh Long',
    nameEn: 'Vinh Long Province',
    capitalVi: 'TP. Vĩnh Long',
    capitalEn: 'Vinh Long City',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    emoji: '🥥',
    image: '/destinations/vinh_long_orchard.jpg',
    geographicLocation: {
      latitude: 10.2537,
      longitude: 105.9722,
      borders: 'Bordered by Tien Giang to the north, Dong Thap to the northwest, Can Tho and Hau Giang to the west, and the sea to the southeast.',
      terrain: 'Embraced between the Tien and Hau rivers, crisscrossed by thousands of canals, fruit islets (An Binh Island), and red pottery kilns.'
    },
    administrativeReorganization2025: {
      resolution: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Vĩnh Long', 'Tỉnh Bến Tre (Xứ dừa)', 'Tỉnh Trà Vinh (Văn hóa Khmer)'],
      summaryVi: 'Hợp nhất không gian sinh thái sông nước giữa Vĩnh Long, Bến Tre và Trà Vinh theo Nghị quyết 2025; mạng lưới sông Tiền, sông Cổ Chiên, cù lao An Bình, xứ sở dừa Bến Tre và vương quốc gốm đỏ Mang Thít.',
      summaryEn: 'Harmonious riverine eco-province uniting Vinh Long, Ben Tre ("Coconut Kingdom"), and Tra Vinh, famous for An Binh fruit islets, Mang Thit red pottery, and Khmer cultural pagodas.'
    },
    notableGeographicalCharacteristics: {
      en: 'Nestled between two branches of the mighty Mekong (Tien and Hau rivers), creating lush silt islets, shady coconut groves, and thousands of red-brick kilns.',
      vi: 'Nằm trọn giữa hai nhánh sông Tiền và sông Hậu bồi đắp phù sa quanh năm, rợp bóng dừa xanh và hàng ngàn lò gạch gốm đỏ Mang Thít.'
    },
    famousLandmarks: [
      {
        nameEn: 'An Binh Eco-Islet & Fruit Gardens',
        nameVi: 'Cù lao An Bình',
        descriptionEn: 'Lush all-season tropical fruit islet in the middle of the Co Chien River where visitors pick rambutan, longan, and mango directly from trees.',
        descriptionVi: 'Cù lao xanh ngát giữa dòng Cổ Chiên trĩu quả bốn mùa chôm chôm, nhãn xuồng, sầu riêng và bưởi năm roi.',
        emoji: '🌳'
      },
      {
        nameEn: 'Mang Thit Red Pottery Kingdom (Heritage Kilns)',
        nameVi: 'Vương quốc gạch gốm đỏ Mang Thít',
        descriptionEn: 'Over 1,000 historic domed brick kilns along the Thay Cai canal resembling giant terracotta pyramids glowing under the sun.',
        descriptionVi: 'Quần thể hơn 1.000 lò nung gạch gốm đỏ hình mái vòm cổ kính như những kim tự tháp gốm rực rỡ bên dòng kênh Thầy Cai.',
        emoji: '🏺'
      },
      {
        nameEn: 'Ben Tre Coconut Realm & Dong Khoi Cradle',
        nameVi: 'Xứ sở Dừa Bến Tre & Di tích Đồng Khởi',
        descriptionEn: 'The world-famous land of green coconuts and the historic 1960 Dong Khoi movement cradle led by female general Nguyen Thi Dinh.',
        descriptionVi: 'Quê hương Đồng Khởi quật khởi và rợp bóng dừa xanh bạt ngàn với kẹo dừa nức tiếng gần xa.',
        emoji: '🥥'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Nam Roi Sweet Pomelo (Buoi Nam Roi Binh Minh)',
        nameVi: 'Bưởi Năm Roi Bình Minh',
        descriptionEn: 'Seedless, juicy sweet-tart pomelo shaped like an antique pear with crisp translucent segments, celebrated nationwide.',
        descriptionVi: 'Đặc sản bưởi Năm Roi không hạt tép giòn mọng nước ngọt thanh dịu chấm muối ớt cay nồng.',
        emoji: '🍈'
      },
      {
        nameEn: 'Traditional Ben Tre Coconut Candy (Keo Dua Ben Tre)',
        nameVi: 'Kẹo dừa Bến Tre truyền thống',
        descriptionEn: 'Creamy, chewy sweet confection made of fresh coconut cream, malt syrup, and durian or pandan fragrance.',
        descriptionVi: 'Món kẹo dẻo béo ngậy nấu từ nước cốt dừa tươi nguyên chất và mạch nha thơm lừng.',
        emoji: '🍬'
      }
    ],
    culturalTraditions: {
      en: 'Gentle southern river manners, soul-stirring Don Ca Tai Tu music on canal boats, and the peaceful harmony of Kinh, Khmer, and Hoa cultures.',
      vi: 'Lối sống đôn hậu nghĩa tình, tiếng đờn ca tài tử réo rắt bên bến nước và sự giao thoa văn hóa Kinh – Khmer – Hoa chan hòa.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Ok Om Bok Moon Festival (Tra Vinh Khmer Heritage)',
        nameVi: 'Lễ hội Ok Om Bok cúng Trăng của đồng bào Khmer',
        unescoHeritage: false,
        descriptionEn: 'Spectacular moon-worshiping festival featuring young pounded sticky rice (Cốm Dẹp) and thrilling Ngo boat races.',
        descriptionVi: 'Di sản văn hóa phi vật thể quốc gia với lễ cúng trăng đút cốm dẹp và giải đua ghe Ngo náo nức dòng sông.',
        emoji: '🌕'
      },
      {
        nameEn: 'Mang Thit Contemporary Heritage Project',
        nameVi: 'Di sản Đương đại Mang Thít',
        unescoHeritage: false,
        descriptionEn: 'International conservation project transforming thousands of red brick kilns into a unique open-air eco-museum.',
        descriptionVi: 'Đề án quốc tế bảo tồn quần thể lò gạch truyền thống thành bảo tàng sinh thái gốm đỏ độc nhất vô nhị.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Mang Thit terracotta pottery, coconut shell handicrafts & Son Doc puff cakes',
        productVi: 'Gốm đỏ nung Mang Thít & Thủ công mỹ nghệ từ dừa',
        occupationEn: 'Ceramic artisan & coconut candy confectioner',
        occupationVi: 'Nghệ nhân nung gốm đỏ & Thợ làm kẹo dừa thủ công'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Ba Om Pond Eco-Sanctuary (Ao Ba Om)',
        nameVi: 'Danh thắng Ao Bà Om & Chùa Âng cổ kính',
        type: 'Lake',
        descriptionEn: 'Tranquil square lotus pond surrounded by centuries-old Sao and Dau trees with enormous twisting roots.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The sweet embrace of the Tien and Hau rivers, where red pottery pyramids stand beside swaying coconut palms and fruit orchards.',
      vi: 'Trọn vẹn vẻ đẹp miệt vườn sông nước Cửu Long, nơi vương quốc gốm đỏ soi bóng bên những rặng dừa xanh mướt.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Kiln',
        phonetic: '/kɪln/',
        partOfSpeech: 'noun',
        meaningEn: 'A very hot brick oven used for baking clay pots, ceramics, and bricks until hard.',
        meaningVi: 'Lò nung gốm, lò nung gạch',
        exampleSentence: 'Over a thousand red kilns line the canals in Mang Thit.',
        emoji: '🏺'
      },
      {
        word: 'Coconut',
        phonetic: '/ˈkoʊ.kə.nʌt/',
        partOfSpeech: 'noun',
        meaningEn: 'A large brown oval fruit with a hard shell, sweet white meat, and refreshing water.',
        meaningVi: 'Quả dừa xanh ngọt mát',
        exampleSentence: 'Tall green coconut trees sway gently in the river breeze.',
        emoji: '🥥'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Vinh Long is famous for sweet tropical fruit islets and [red pottery kilns / coconut groves].',
        patternMeaningVi: 'Vĩnh Long nổi tiếng với các cù lao trái cây nhiệt đới ngọt ngào và [những lò gốm đỏ / rặng dừa xanh].',
        exampleEn: 'Vinh Long is famous for sweet tropical fruit islets and red pottery kilns.',
        exampleVi: 'Vĩnh Long nổi tiếng với các cù lao trái cây nhiệt đới và những lò gốm đỏ.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Listen to the soothing river water splashing against our wooden boat! You are in Vinh Long. In the middle of the river lies An Binh Islet where branches of rambutan and mango trees hang low over garden paths. Farmers invite you to pick fresh sweet fruit right off the tree!',
        question: 'What sweet treat can visitors pick straight from the trees on An Binh Islet?',
        options: ['Fresh tropical fruits like rambutan and mango 🥭', 'Candy bars from factories', 'Ice cream cones', 'Pizza slices'],
        correctIndex: 0,
        explanationEn: 'Visitors on An Binh Islet enjoy picking sweet rambutans, pomelos, and longans directly from lush orchards.',
        explanationVi: 'Du khách ghé thăm cù lao An Bình được tự tay hái và thưởng thức hoa quả nhiệt đới ngọt lịm ngay tại vườn.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this cheerful welcoming sentence about Vinh Long’s fruit orchards!',
        roleplayPromptVi: 'Đọc to câu văn chào đón bạn bè về thăm miệt vườn Vĩnh Long bằng tiếng Anh!',
        targetSpeech: 'Welcome to Vinh Long with lush fruit orchards and historic red pottery kilns!',
        sampleAudioPhonetic: '/ˈwel.kəm tuː vɪŋ lɒŋ wɪð lʌʃ fruːt ˈɔːr.tʃɚdz ænd hɪˈstɔːr.ɪk red ˈpɑː.t̬ɚ.i kɪlnz!/',
        pronunciationTips: 'Say "lush fruit orchards" warmly, and pronounce "kilns" cleanly like KILNZ.'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'vl-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which unique architectural heritage along the canal in Vinh Long is called the "Kingdom of Red Pottery"?',
        questionVi: 'Quần thể di sản kiến trúc độc đáo nào dọc bờ kênh ở Vĩnh Long được gọi là "Vương quốc Gốm đỏ"?',
        options: ['Mang Thit Red Pottery Kilns (Gốm đỏ Mang Thít) 🏺', 'The Eiffel Tower', 'The Statue of Liberty', 'The Pyramids of Giza'],
        correctIndex: 0,
        explanationEn: 'Mang Thit has over a thousand traditional dome-shaped brick and pottery kilns along the Thay Cai canal.',
        explanationVi: 'Mang Thít sở hữu hơn một nghìn lò gạch gốm đỏ hình vòm độc đáo tạo nên cảnh quan kỳ vĩ.'
      },
      {
        id: 'vl-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which famous seedless pomelo variety originated in Binh Minh in this province?',
        questionVi: 'Giống bưởi không hạt mọng nước ngọt thanh nổi tiếng nào có xuất xứ từ Bình Minh thuộc vùng này?',
        options: ['Nam Roi Pomelo (Bưởi Năm Roi) 🍈', 'Grapefruit from Florida', 'Red lemon', 'Orange juice'],
        correctIndex: 0,
        explanationEn: 'Nam Roi Pomelo from Binh Minh is famous across Vietnam for its sweet, juicy, seedless flesh.',
        explanationVi: 'Bưởi Năm Roi Bình Minh nổi tiếng cả nước với tép bưởi ngọt thanh mọng nước và không có hạt.'
      },
      {
        id: 'vl-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe traditional coconut candy from the regional orchards in English?',
        questionVi: 'Em miêu tả kẹo dừa truyền thống bằng tiếng Anh như thế nào cho hấp dẫn?',
        options: [
          '"Coconut candy is a rich, chewy sweet treat cooked from fresh creamy coconut milk and golden malt!" 🍬🥥',
          '"It is sour vinegar." 🫙',
          '"It is made of plain sand." 🏜️',
          '"It is hard cold iron." ⛓️'
        ],
        correctIndex: 0,
        explanationEn: 'Describing it as a rich, chewy sweet treat cooked from fresh creamy coconut milk captures this classic delicacy.',
        explanationVi: 'Miêu tả kẹo dừa béo ngậy ngọt dẻo nấu từ nước cốt dừa tươi và mạch nha là cách giới thiệu chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Nghị quyết số 202/2025/QH15 & Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 27. TỈNH AN GIANG
  {
    code: 'AG',
    id: 'vn-34-ag',
    type: 'province',
    nameVi: 'Tỉnh An Giang',
    nameEn: 'An Giang Province',
    capitalVi: 'TP. Long Xuyên',
    capitalEn: 'Long Xuyen City',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    emoji: '🌾',
    image: '/destinations/tra_su_cajeput.jpg',
    geographicLocation: {
      latitude: 10.3833,
      longitude: 105.4167,
      borders: 'Bordered by Cambodia to the north and northwest, Dong Thap to the east, Can Tho to the southeast, and the Gulf of Thailand to the southwest.',
      terrain: 'Mekong River gateway, mystical Seven Mountains (That Son), emerald Tra Su cajeput forest, and the southwestern sea connecting Phu Quoc Island.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh An Giang', 'Tỉnh Kiên Giang (kết nối TP. đảo Phú Quốc & vùng biển Tây Nam)'],
      summaryVi: 'Vùng đầu nguồn sông Cửu Long gắn với dãy Thất Sơn (Bảy Núi) hùng vĩ; theo bản đồ 2025 kết nối bờ biển Tây Nam, quản lý TP. đảo Phú Quốc và Quần đảo Thổ Chu; vựa lúa gạo, cá tra và du lịch tâm linh Sam Mountain.',
      summaryEn: 'Mekong headwaters powerhouse uniting An Giang and Kien Giang, home to the Seven Mountains, Tra Su cajeput sanctuary, and sovereign pearl island Phu Quoc.',
      islandDistricts: ['TP. Phú Quốc (Đảo Phú Quốc)', 'Quần đảo Thổ Chu', 'Quần đảo Nam Du', 'Quần đảo An Thới']
    },
    notableGeographicalCharacteristics: {
      en: 'The dramatic contrast of mysterious mountains rising from flat water delta, floating duckweed carpet forests, and offshore tropical island archipelagos.',
      vi: 'Sự hòa quyện kỳ diệu giữa núi non Thất Sơn sừng sững giữa đồng bằng, rừng tràm Trà Sư thảm bèo xanh mướt và hòn đảo ngọc Phú Quốc giữa biển Tây.'
    },
    famousLandmarks: [
      {
        nameEn: 'Tra Su Cajeput Forest (Rung Tram Tra Su)',
        nameVi: 'Rừng tràm Trà Su',
        descriptionEn: 'Fairy-tale flooded cajeput sanctuary where wooden boats glide over a thick floating emerald carpet of green duckweed.',
        descriptionVi: 'Khu rừng ngập nước tuyệt mỹ nơi chiếc xuồng ba lá lướt nhẹ trên thảm bèo cám xanh ngắt rợp bóng chim bay.',
        emoji: '🌿'
      },
      {
        nameEn: 'Ba Chua Xu Temple on Sam Mountain',
        nameVi: 'Miếu Bà Chúa Xứ Núi Sam (Châu Đốc)',
        descriptionEn: 'Sacred national pilgrimage sanctuary on Sam Mountain where millions come to pray for blessings, health, and good fortune.',
        descriptionVi: 'Trung tâm hành hương tâm linh nổi tiếng bậc nhất Nam Bộ với lễ hội Vía Bà Chúa Xứ thu hút hàng triệu phật tử chiêm bái.',
        emoji: '🛕'
      },
      {
        nameEn: 'Phu Quoc Pearl Island Sanctuary',
        nameVi: 'Thành phố Đảo Phú Quốc (Đảo Ngọc)',
        descriptionEn: 'Vietnam’s largest oceanic paradise island famous for white sandy beaches (Sao Beach), coral sanctuaries, and sunset cable cars.',
        descriptionVi: 'Hòn đảo ngọc thiên đường lớn nhất Việt Nam với bãi Sao cát trắng mịn, ngọc trai biển và cáp treo vượt biển kỷ lục thế giới.',
        emoji: '🏝️'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Chau Doc Fish Noodle Soup (Bun Ca Chau Doc)',
        nameVi: 'Bún cá Châu Đốc',
        descriptionEn: 'Aromatic turmeric-colored noodle soup with flaky golden field snakehead fish and fragrant Điên Điển river flowers.',
        descriptionVi: 'Tô bún cá vàng ươm sắc nghệ thơm nồng vị ngải bún ăn kèm bông điên điển mùa nước nổi ngọt mát.',
        emoji: '🍜'
      },
      {
        nameEn: 'Palmyra Palm Sweet Treats (Thot Not An Giang)',
        nameVi: 'Bánh bò thốt nốt & Nước thốt nốt tươi',
        descriptionEn: 'Refreshing sweet juice and golden spongy honeycomb cakes sweetened with pure Palmyra palm sugar.',
        descriptionVi: 'Món bánh bò vàng óng béo ngậy và ly nước thốt nốt ngọt lịm từ loài cây biểu tượng của vùng Bảy Núi.',
        emoji: '🍯'
      }
    ],
    culturalTraditions: {
      en: 'Bảy Núi bull racing festival (Đua bò Bảy Núi), sacred Cham weaving villages with patterned brocades, and vibrant river trade.',
      vi: 'Hội đua bò Bảy Núi kịch tính nghẹt thở của đồng bào Khmer, làng dệt thổ cẩm Chăm Châu Phong và nếp sống mến khách vùng biên cương.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Ba Chua Xu Festival on Sam Mountain',
        nameVi: 'Lễ hội Vía Bà Chúa Xứ Núi Sam',
        unescoHeritage: true,
        descriptionEn: 'UNESCO Intangible Cultural Heritage of Humanity recognized for communal devotion, sacred bath rituals, and harmony.',
        descriptionVi: 'Di sản Văn hóa Phi vật thể của Nhân loại với nghi thức tắm Bà trang nghiêm cầu cho quốc thái dân an mưa thuận gió hòa.'
      },
      {
        nameEn: 'Bay Nui Ox Racing Festival (Hoi Dua Bo Bay Nui)',
        nameVi: 'Hội Đua bò Bảy Núi',
        unescoHeritage: false,
        descriptionEn: 'Thrilling traditional mud-track bull race celebrating the Khmer Sene Dolta festival of filial piety.',
        descriptionVi: 'Ngày hội thể thao dân gian độc đáo nơi các đôi bò phi nước đại tung bọt nước trắng xóa trên ruộng bùn rộn rã tiếng reo hò.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'Chau Doc fermented fish sauce (Mam Chau Doc), Phu Quoc fish sauce & palm sugar',
        productVi: 'Mắm Châu Đốc & Nước mắm Phú Quốc truyền thống',
        occupationEn: 'Cajeput ecotourism boat rower & pearl diver',
        occupationVi: 'Người chèo xuồng rừng tràm Trà Sư & Thợ lặn nuôi cấy ngọc trai'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Phu Quoc Marine & Coral Sanctuary',
        nameVi: 'Vườn quốc gia & Khu bảo tồn biển Phú Quốc',
        type: 'National Park',
        descriptionEn: 'Pristine oceanic tropical rainforest and coral sanctuary home to rare dugong sea cows and green sea turtles.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'Where the mighty Mekong River enters Vietnam, blessed with the mystical Seven Mountains, green Tra Su waterways, and tropical Pearl Island.',
      vi: 'Nơi đầu nguồn sông Mẹ đổ vào đất Việt, hội tụ dãy Thất Sơn huyền bí, rừng tràm Trà Sư xanh ngắt và hòn đảo ngọc Phú Quốc rạng ngời.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Duckweed',
        phonetic: '/ˈdʌk.wiːd/',
        partOfSpeech: 'noun',
        meaningEn: 'Tiny green water plants that float like a green velvet carpet across swamps and ponds.',
        meaningVi: 'Bèo cám xanh phủ kín mặt nước',
        exampleSentence: 'A thick green carpet of duckweed covers the water in Tra Su forest.',
        emoji: '🌿'
      },
      {
        word: 'Palmyra',
        phonetic: '/pælˈmaɪ.rə/',
        partOfSpeech: 'noun',
        meaningEn: 'A majestic tall tropical palm tree with fan-shaped leaves producing sweet nectar.',
        meaningVi: 'Cây thốt nốt',
        exampleSentence: 'Tall Palmyra palm trees dot the horizon in An Giang.',
        emoji: '🌴'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'An Giang is famous for the emerald [Tra Su forest / Sam Mountain sanctuary].',
        patternMeaningVi: 'An Giang nổi tiếng với [rừng tràm Trà Sư xanh ngọc / danh thắng Núi Sam linh thiêng].',
        exampleEn: 'An Giang is famous for the emerald Tra Su cajeput forest.',
        exampleVi: 'An Giang nổi tiếng với rừng tràm Trà Sư xanh biếc như ngọc.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'Step into a wooden sampan boat in Tra Su Cajeput Forest, An Giang! As the boat moves forward, it parts a bright green blanket of floating duckweed. High above in the cajeput trees, thousands of white herons call softly in the peaceful green light.',
        question: 'What covers the calm water like a bright green blanket in Tra Su forest?',
        options: ['Floating emerald duckweed 🌿', 'Ice cubes 🧊', 'Red autumn leaves 🍁', 'Paper boats ⛵'],
        correctIndex: 0,
        explanationEn: 'Tra Su is world-famous for its bright green floating duckweed that blankets the flooded cajeput waterways.',
        explanationVi: 'Rừng tràm Trà Sư nổi danh thế giới với thảm bèo cám xanh mướt phủ kín mặt nước như tấm thảm nhung biếc.'
      },
      speakingMission: {
        roleplayPromptEn: 'Share an enthusiastic sentence about An Giang’s green wonders in English!',
        roleplayPromptVi: 'Đọc to câu giới thiệu về cảnh đẹp thiên nhiên An Giang bằng tiếng Anh thật hay!',
        targetSpeech: 'An Giang has the magical green Tra Su forest and the mystical Seven Mountains!',
        sampleAudioPhonetic: '/æn ziːæŋ hæz ðə ˈmædʒ.ɪ.kəl ɡriːn trɑː suː ˈfɔːr.ɪst ænd ðə ˈmɪs.tɪ.kəl ˈsev.ən ˈmaʊn.tɪnz!/',
        pronunciationTips: 'Pronounce "magical green Tra Su forest" with pure wonder and delight!'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'ag-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'Which famous flooded forest sanctuary in An Giang is known for its emerald carpet of floating duckweed?',
        questionVi: 'Khu rừng ngập nước nổi tiếng nào ở An Giang được biết đến với thảm bèo cám xanh mướt?',
        options: ['Tra Su Cajeput Forest (Rừng tràm Trà Sư) 🌿', 'Central Park', 'Sherwood Forest', 'Black Forest'],
        correctIndex: 0,
        explanationEn: 'Tra Su Cajeput Forest is iconic for its peaceful green waterways covered in velvet duckweed.',
        explanationVi: 'Rừng tràm Trà Sư là biểu tượng sinh thái ngập nước tuyệt đẹp với thảm bèo xanh và đàn chim ríu rít.'
      },
      {
        id: 'ag-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'What thrilling folk sport takes place in the muddy fields of the Seven Mountains in An Giang during the Khmer Sene Dolta festival?',
        questionVi: 'Môn thể thao dân gian kịch tính nào diễn ra trên ruộng bùn vùng Bảy Núi (An Giang) dịp lễ Sene Dolta?',
        options: [
          'Bay Nui Ox Racing (Đua bò Bảy Núi) 🐂',
          'Ice hockey competition 🏒',
          'Golf tournament ⛳',
          'Snow skiing 🎿'
        ],
        correctIndex: 0,
        explanationEn: 'The Bay Nui Ox Racing Festival is an exciting traditional sporting heritage of the Khmer people.',
        explanationVi: 'Lễ hội Đua bò Bảy Núi là môn thể thao dân gian kịch tính và độc đáo của đồng bào Khmer vùng Thất Sơn.'
      },
      {
        id: 'ag-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe Phu Quoc Pearl Island, administered under this southwestern domain, in English?',
        questionVi: 'Em miêu tả Thành phố Đảo Phú Quốc bằng tiếng Anh như thế nào cho chuẩn xác?',
        options: [
          '"Phu Quoc is Vietnam’s largest paradise island, world-famous for white sandy beaches, sparkling pearls, and turquoise coral waters!" 🏝️🪸',
          '"Phu Quoc is a cold mountain cave with no sea." 🚫',
          '"It is a factory of concrete." 🧱',
          '"Phu Quoc has no sun or water." ❌'
        ],
        correctIndex: 0,
        explanationEn: 'Highlighting it as Vietnam’s largest paradise island with white sand beaches, pearls, and coral waters captures its international renown.',
        explanationVi: 'Mô tả đảo ngọc Phú Quốc là đảo thiên đường lớn nhất Việt Nam với bãi cát trắng và san hô tuyệt mỹ là chuẩn xác nhất.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  },

  // 28. TỈNH CÀ MAU
  {
    code: 'CM',
    id: 'vn-34-cm',
    type: 'province',
    nameVi: 'Tỉnh Cà Mau',
    nameEn: 'Ca Mau Province',
    capitalVi: 'TP. Cà Mau',
    capitalEn: 'Ca Mau City',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    emoji: '🦀',
    image: '/destinations/cape_ca_mau.jpg',
    geographicLocation: {
      latitude: 9.1833,
      longitude: 105.1500,
      borders: 'Bordered by Kien Giang and Bac Lieu to the north, the East Sea to the east, and the Gulf of Thailand to the south and west.',
      terrain: 'The southernmost tip of Vietnam, vast tidal mangrove forests, Cape Ca Mau (GPS 0001), U Minh Ha cajeput forests, and Hon Khoai offshore islands.'
    },
    administrativeReorganization2025: {
      resolution: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
      previousUnitsInvolved: ['Tỉnh Cà Mau', 'Tỉnh Bạc Liêu (quê hương Dạ cổ hoài lang & điện gió ven biển)'],
      summaryVi: 'Địa đầu cực Nam của Tổ quốc với Mũi Cà Mau (vĩ độ 8°37’B), nơi duy nhất ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây; Vườn quốc gia Mũi Cà Mau, Hòn Khoai, rừng U Minh Hạ; hợp nhất không gian văn hóa Bạc Liêu.',
      summaryEn: 'The southernmost sacred tip of Vietnam at Cape Ca Mau (8°37’N), home to UNESCO mangrove biospheres, Hon Khoai island, and the cultural cradle of Da Co Hoai Lang.',
      islandDistricts: ['Cụm đảo Hòn Khoai', 'Hòn Chuối', 'Hòn Đá Lẻ (Mốc cơ sở A2)']
    },
    notableGeographicalCharacteristics: {
      en: 'The legendary southernmost cape of the fatherland where mangrove roots continuously advance into the sea, witnessing sunrise and sunset over two oceans.',
      vi: 'Điểm cực Nam thiêng liêng nơi rừng đước vươn mình lấn biển mỗi ngày, nơi duy nhất trên đất liền ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây.'
    },
    famousLandmarks: [
      {
        nameEn: 'Cape Ca Mau & GPS 0001 National Milestone',
        nameVi: 'Mũi Cà Mau & Cột mốc Tọa độ Quốc gia GPS 0001',
        descriptionEn: 'The iconic ship-shaped monument and sacred national border coordinate milestone at the southern end of the motherland.',
        descriptionVi: 'Mũi tàu no gió kiêu hãnh vươn khơi và cột mốc tọa độ quốc gia GPS 0001 thiêng liêng nơi cuối trời Tổ quốc.',
        emoji: '🚩'
      },
      {
        nameEn: 'U Minh Ha National Park',
        nameVi: 'Vườn quốc gia U Minh Hạ',
        descriptionEn: 'Vast peatland cajeput forest famous for the traditional wild honey harvesting craft of "gao keo" passed down generations.',
        descriptionVi: 'Khu rừng tràm U Minh Hạ trên đất than bùn trứ danh với nghề gác kèo ong lấy mật rừng nguyên chất độc đáo.',
        emoji: '🐝'
      },
      {
        nameEn: 'Hon Khoai Island & Heritage Lighthouse',
        nameVi: 'Cụm đảo Hòn Khoai & Hải đăng Hòn Khoai',
        descriptionEn: 'Pristine stone island with lush rainforest and an 1899 French stone lighthouse guiding international maritime ships.',
        descriptionVi: 'Hòn đảo ngọc đá cuội xanh ngắt với ngọn hải đăng hơn 120 năm tuổi dẫn đường cho tàu bè quốc tế trên biển Tây Nam.',
        emoji: '🏮'
      }
    ],
    localFoodSpecialties: [
      {
        nameEn: 'Ca Mau Giant Mud Crab (Cua Ca Mau)',
        nameVi: 'Cua biển Cà Mau',
        descriptionEn: 'Firm, naturally sweet, nutrient-rich mangrove mud crabs celebrated as Vietnam’s finest seafood delicacy.',
        descriptionVi: 'Món cua biển tự nhiên thịt chắc nịch ngọt lịm gạch béo ngậy nuôi dưỡng dưới tán rừng ngập mặn nức tiếng thế giới.',
        emoji: '🦀'
      },
      {
        nameEn: 'Rach Goc Sun-Dried Shrimp (Tom Kho Rach Goc)',
        nameVi: 'Tôm khô Rạch Gốc',
        descriptionEn: 'Plump ruby-red wild sea shrimp naturally boiled and sun-dried on salt beds with intense natural sweetness.',
        descriptionVi: 'Tôm đất tự nhiên phơi nắng biển đỏ ươm đậm đà vị ngọt tinh túy của vùng đất bãi bồi.',
        emoji: '🦐'
      }
    ],
    culturalTraditions: {
      en: 'Heroic pioneer bravery in taming wild mangrove swamps, witty Uncle Ba Phi tall tales (Chuyen Bac Ba Phi), and the soulful cradle of Vong Co music.',
      vi: 'Ý chí kiên cường khẩn hoang vùng đất ngập mặn, tiếng cười sảng khoái từ truyện cười Bác Ba Phi và điệu Dạ cổ hoài lang bất hủ xứ Bạc Liêu.'
    },
    festivalsAndHeritage: [
      {
        nameEn: 'Nghinh Ong Song Doc Festival',
        nameVi: 'Lễ hội Nghinh Ông Sông Đốc',
        unescoHeritage: false,
        descriptionEn: 'Ca Mau’s largest maritime festival where hundreds of colorful fishing boats steam out into the sea to honor the whale deity.',
        descriptionVi: 'Lễ hội rước Ông Nam Hải lớn nhất tỉnh quy tụ hàng trăm tàu thuyền giăng cờ hoa rực rỡ ra biển cầu sóng yên biển lặng.',
        emoji: '🚢'
      },
      {
        nameEn: 'Ca Mau Cape UNESCO World Biosphere Reserve',
        nameVi: 'Khu dự trữ sinh quyển thế giới Mũi Cà Mau',
        unescoHeritage: true,
        descriptionEn: 'Inscribed in 2009 as the second largest mangrove forest in the world, expanding naturally into the sea each year.',
        descriptionVi: 'Được UNESCO vinh danh năm 2009 là cánh rừng ngập mặn lớn thứ hai thế giới bảo vệ bờ cõi và cân bằng sinh thái biển.'
      }
    ],
    localProductsAndOccupations: [
      {
        productEn: 'U Minh wild cajeput honey & Rach Goc fermented mud crabs (Ba khia Rach Goc)',
        productVi: 'Mật ong rừng tràm U Minh & Ba khía muối Rạch Gốc',
        occupationEn: 'Wild honey collector (Tho gac keo ong) & mangrove ecotour guide',
        occupationVi: 'Thợ gác kèo ong U Minh & Hướng dẫn viên rừng ngập mặn'
      }
    ],
    naturalAttractions: [
      {
        nameEn: 'Cape Ca Mau Mangrove Mudflat Forest',
        nameVi: 'Bãi bồi Mũi Cà Mau & Rừng đước nguyên sinh',
        type: 'National Park',
        descriptionEn: 'Dynamic coastal mudflats where walking fish (ca thoi loi) climb trees and mangroves push forward green roots every dawn.'
      }
    ],
    distinctiveLocalFeatures: {
      en: 'The sacred southern tip of Vietnam: "Đất Mũi Cà Mau", where the forest advances into the sea and the sun rises and sets over two oceans.',
      vi: 'Điểm cực Nam thiêng liêng của Tổ quốc, nơi đất nở ra và rừng biết đi, nơi ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây.'
    },
    ageAppropriateEnglishVocabulary: [
      {
        word: 'Mangrove',
        phonetic: '/ˈmæŋ.ɡroʊv/',
        partOfSpeech: 'noun',
        meaningEn: 'A coastal tropical tree with tangled roots that grow above water in salty coastal mud.',
        meaningVi: 'Cây đước, rừng ngập mặn',
        exampleSentence: 'Mangrove roots protect the coastline at Cape Ca Mau.',
        emoji: '🌳'
      },
      {
        word: 'Cape',
        phonetic: '/keɪp/',
        partOfSpeech: 'noun',
        meaningEn: 'A high point of land that juts out into the sea.',
        meaningVi: 'Mũi đất nhô ra biển',
        exampleSentence: 'Cape Ca Mau is the southernmost tip of Vietnam.',
        emoji: '🚩'
      },
      {
        word: 'Mudflat',
        phonetic: '/ˈmʌd.flæt/',
        partOfSpeech: 'noun',
        meaningEn: 'A flat area of very wet soil uncovered at low tide.',
        meaningVi: 'Bãi bồi phù sa ven biển',
        exampleSentence: 'Walking fish hop across the tidal mudflats at Cape Ca Mau.',
        emoji: '🐟'
      }
    ],
    englishSentencePatterns: [
      {
        pattern: 'Cape Ca Mau is the sacred southernmost [point / tip] of Vietnam.',
        patternMeaningVi: 'Mũi Cà Mau là [điểm / địa đầu] cực Nam thiêng liêng của Việt Nam.',
        exampleEn: 'Cape Ca Mau is the sacred southernmost tip of Vietnam.',
        exampleVi: 'Mũi Cà Mau là điểm cực Nam thiêng liêng của Việt Nam.',
        targetSkill: 'speaking'
      }
    ],
    listeningAndSpeakingActivities: {
      listeningChallenge: {
        audioScriptEn: 'You are standing at the very tip of Vietnam: Cape Ca Mau! Look around: on your left is the East Sea where the golden morning sun rises. On your right is the Gulf of Thailand where the sun sets in purple and pink clouds. Ca Mau is the only place in Vietnam where you can watch both sunrise and sunset over the ocean from the same shore!',
        question: 'What unique wonder can you watch from the shore at Cape Ca Mau?',
        options: [
          'Both sunrise over the East Sea and sunset over the West Sea 🌅🌇',
          'A flying whale',
          'Snow falling on palm trees',
          'A volcanic eruption'
        ],
        correctIndex: 0,
        explanationEn: 'Cape Ca Mau is unique in Vietnam as the land tip where you can watch sunrise over the East Sea and sunset over the West Sea from the same spot.',
        explanationVi: 'Mũi Cà Mau là nơi duy nhất trên đất liền Việt Nam có thể ngắm cả bình minh ở biển Đông và hoàng hôn ở biển Tây từ cùng một bờ biển.'
      },
      speakingMission: {
        roleplayPromptEn: 'Say this proud sentence honoring the southern tip of our country in English!',
        roleplayPromptVi: 'Đọc to câu văn thiêng liêng về Mũi Cà Mau bằng tiếng Anh nhé!',
        targetSpeech: 'Cape Ca Mau is the sacred southernmost tip of our beloved Vietnam!',
        sampleAudioPhonetic: '/keɪp kɑː maʊ ɪz ðə ˈseɪ.krɪd ˈsʌð.ɚn.moʊst tɪp əv aʊ.ɚ bɪˈlʌv.ɪd ˌvjetˈnɑːm!/',
        pronunciationTips: 'Speak with deep pride: "the SACRED SOUTHERNMOST TIP of our beloved Vietnam!"'
      }
    },
    interactiveLearningQuestions: [
      {
        id: 'cm-q1',
        level: 1,
        levelLabel: 'Level 1: Nhận biết',
        questionEn: 'What is the sacred geographic coordinate milestone located at Cape Ca Mau?',
        questionVi: 'Cột mốc tọa độ địa lý thiêng liêng nào tọa lạc tại Mũi Cà Mau?',
        options: ['National Coordinate Milestone GPS 0001 (Mốc tọa độ GPS 0001) 🚩', 'North Pole Marker', 'Equator Marker', 'Greenwich Line'],
        correctIndex: 0,
        explanationEn: 'National Coordinate Milestone GPS 0001 marks the southernmost point of the Vietnamese mainland.',
        explanationVi: 'Cột mốc tọa độ Quốc gia GPS 0001 ghi dấu điểm mốc cực Nam thiêng liêng trên đất liền của Tổ quốc.'
      },
      {
        id: 'cm-q2',
        level: 2,
        levelLabel: 'Level 2: Kết nối & Hiểu',
        questionEn: 'Which world-famous seafood delicacy from the mangrove forests of this province is celebrated across Vietnam?',
        questionVi: 'Món hải sản đặc sản nức tiếng thế giới nào từ rừng ngập mặn Cà Mau được cả nước khen ngợi?',
        options: [
          'Ca Mau Giant Mud Crab (Cua biển Cà Mau) 🦀',
          'Arctic salmon',
          'Alaska king crab',
          'River trout'
        ],
        correctIndex: 0,
        explanationEn: 'Ca Mau mud crabs are famous for their firm, sweet, and nutrient-rich meat fed by rich mangrove ecosystems.',
        explanationVi: 'Cua biển Cà Mau nổi tiếng thế giới nhờ thịt chắc ngọt thơm ngon tự nhiên từ môi trường rừng ngập mặn màu mỡ.'
      },
      {
        id: 'cm-q3',
        level: 3,
        levelLabel: 'Level 3: Vận dụng thực tế',
        questionEn: 'How can you describe the phenomenon of "the forest advancing into the sea" at Cape Ca Mau in English?',
        questionVi: 'Em miêu tả hiện tượng "rừng đước biết đi lấn biển" ở Mũi Cà Mau bằng tiếng Anh như thế nào?',
        options: [
          '"Alluvial silt accumulates every day, and mangrove roots grow outward into the sea, naturally expanding Vietnam’s territory!" 🌳🌊',
          '"The forest is sinking into the center of the earth." 🕳️',
          '"Trees are cut down to make a parking lot." 🚗',
          '"The sea has dried up completely." 🏜️'
        ],
        correctIndex: 0,
        explanationEn: 'Alluvial silt and advancing mangrove roots naturally expanding the nation’s land area captures the poetry and science of Cape Ca Mau.',
        explanationVi: 'Phù sa bồi đắp và rễ đước vươn ra biển giúp đất nở hoa và lãnh thổ Tổ quốc không ngừng mở rộng ra biển lớn.'
      }
    ],
    verifiedSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025'
  }
];
