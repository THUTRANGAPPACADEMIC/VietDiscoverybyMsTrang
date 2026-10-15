import { Destination, GradeBandContent } from '../types';

// Helper to provide aliases for backward compatibility
const createGradeContent = (
  g1: GradeBandContent,
  g2: GradeBandContent,
  g3: GradeBandContent,
  g4: GradeBandContent,
  g5: GradeBandContent
) => ({
  grade_1: g1,
  grade_2: g2,
  grade_3: g3,
  grade_4: g4,
  grade_5: g5,
  grade_1_2: g1, // legacy fallback to starter/beginner
  grade_4_5: g4  // legacy fallback to upper elementary
});

export const DESTINATIONS: Destination[] = [
  // 1. HA LONG BAY (Vịnh Hạ Long)
  {
    id: 'halong',
    name: 'Ha Long Bay',
    vietnameseName: 'Vịnh Hạ Long',
    province: 'Quảng Ninh',
    region: 'North',
    theme: 'Nature',
    geoCoordinates: { latitude: 20.910, longitude: 107.184 },
    coordinates: { x: 74, y: 19 },
    image: '/destinations/halong_bay.jpg',
    photoAttribution: {
      author: 'Amstram Gram',
      source: 'Verified Photography Archive',
      license: 'Educational Creative Commons License',
      landmark: 'Limestone Karst Islands & Emerald Sea, Ha Long Bay'
    },
    summaryEn: 'A magical natural wonder with thousands of limestone islands rising from emerald waters.',
    summaryVi: 'Kỳ quan thiên nhiên kỳ vĩ với hàng ngàn hòn đảo đá vôi nhô lên giữa làn nước xanh ngọc bích.',
    badge: {
      name: 'Ha Long Ocean Explorer',
      icon: '🌊',
      titleEn: 'Ha Long Bay Master Explorer',
      titleVi: 'Nhà Thám Hiểm Vịnh Hạ Long'
    },
    gradeContent: createGradeContent(
      // Grade 1: Pre-A1 Starter (Pictures, audio, single words)
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'Water', phonetic: '/ˈwɔː.t̬ɚ/', meaningEn: 'Clear blue liquid in the sea', meaningVi: 'Nước biển', example: 'The water is blue.', emoji: '💧' },
          { word: 'Boat', phonetic: '/boʊt/', meaningEn: 'A small ship that rides on waves', meaningVi: 'Con thuyền', example: 'We ride a green boat.', emoji: '⛵' },
          { word: 'Dragon', phonetic: '/ˈdræɡ.ən/', meaningEn: 'A friendly magic creature in legends', meaningVi: 'Con rồng', example: 'The mother dragon flew down.', emoji: '🐉' },
          { word: 'Island', phonetic: '/ˈaɪ.lənd/', meaningEn: 'Land in the middle of water', meaningVi: 'Hòn đảo', example: 'Look at the green island!', emoji: '🏝️' }
        ],
        reading: {
          titleEn: 'Friendly Dragon Bay',
          textEn: 'Look at Ha Long Bay! The water is green. Friendly boats sail past rocky islands. A happy dragon smiles in the sky!',
          textVi: 'Hãy nhìn Vịnh Hạ Long kìa! Làn nước xanh biếc. Những con thuyền lướt nhẹ qua các hòn đảo đá. Chú rồng vui vẻ mỉm cười trên bầu trời!'
        },
        listening: {
          audioScriptEn: 'Listen! Splash, splash! The little boat sails on the blue water.',
          question: 'What is sailing on the blue water?',
          options: ['A friendly boat ⛵', 'A big airplane ✈️', 'A yellow school bus 🚌', 'A racing car 🚗'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this word clearly out loud:',
          promptVi: 'Đọc to từ tiếng Anh này nhé:',
          sampleSentence: 'Green Dragon Boat!',
          tips: 'Smile and say "Dra-gon" like a friendly hero!'
        },
        quiz: [
          {
            id: 'hl-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'What color is the beautiful sea water?',
            questionVi: 'Nước biển ở Vịnh Hạ Long có màu gì tuyệt đẹp?',
            options: ['Green and blue 🌊', 'Hot pink 🌸', 'Deep purple 🍇', 'Dark black ⬛'],
            correctIndex: 0,
            explanationEn: 'The sea water is famous for its bright emerald green color!',
            explanationVi: 'Nước biển Hạ Long nổi tiếng với sắc xanh ngọc bích!'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Boat', emoji: '⛵', meaningVi: 'Con thuyền' },
            { word: 'Dragon', emoji: '🐉', meaningVi: 'Con rồng' },
            { word: 'Island', emoji: '🏝️', meaningVi: 'Hòn đảo' }
          ]
        }
      },
      // Grade 2: Pre-A1 Beginner (Short phrases, actions)
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Emerald', phonetic: '/ˈem.ər.əld/', meaningEn: 'Sparkling gem green color', meaningVi: 'Xanh ngọc bích', example: 'The sea is emerald green.', emoji: '💎' },
          { word: 'Sail', phonetic: '/seɪl/', meaningEn: 'Travel on water with wind', meaningVi: 'Chèo thuyền / Lướt sóng', example: 'Boats sail every morning.', emoji: '⛵' },
          { word: 'Cliff', phonetic: '/klɪf/', meaningEn: 'A high steep rock wall', meaningVi: 'Vách đá cao', example: 'Green trees grow on the cliff.', emoji: '🧗' },
          { word: 'Cave', phonetic: '/keɪv/', meaningEn: 'A cool natural hollow in the rock', meaningVi: 'Hang động', example: 'We walk inside the cave.', emoji: '🕳️' }
        ],
        reading: {
          titleEn: 'Sailing with the Mother Dragon',
          textEn: 'Ha Long Bay has two thousand islands! Long ago, a kind mother dragon flew down to protect Vietnam. She dropped pearls of jade into the sea. The pearls became tall rock islands. Today, children ride colorful boats and wave at flying seagulls.',
          textVi: 'Vịnh Hạ Long có hai ngàn hòn đảo! Ngày xưa, rồng mẹ tốt bụng đã bay xuống để bảo vệ đất nước Việt Nam. Rồng nhả những viên ngọc bích xuống biển. Những viên ngọc hóa thành các đảo đá cao lớn. Ngày nay, các bạn nhỏ đi thuyền và vẫy tay chào những chú hải âu bay lượn.'
        },
        listening: {
          audioScriptEn: 'Welcome aboard! Can you spot the two rooster rocks touching beaks? That is the famous Fighting Cocks Island!',
          question: 'What do the two famous rocks look like?',
          options: ['Fighting Roosters 🐓', 'Dancing Monkeys 🐒', 'Sleeping Bears 🐻', 'Swimming Whales 🐋'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Practice saying this sentence out loud:',
          promptVi: 'Luyện đọc to câu tiếng Anh này nhé:',
          sampleSentence: 'The emerald water sparkles in Ha Long Bay.',
          tips: 'Pronounce "em-er-ald" clearly with a soft "d" sound.'
        },
        quiz: [
          {
            id: 'hl-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'What did the mother dragon drop into the sea in the legend?',
            questionVi: 'Rồng mẹ đã nhả thứ gì xuống biển theo truyền thuyết?',
            options: ['Pearls of jade 💎', 'Iron hammers 🔨', 'Plastic bottles 🧴', 'Paper airplanes ✈️'],
            correctIndex: 0,
            explanationEn: 'The mother dragon dropped pearls that transformed into limestone islands!',
            explanationVi: 'Rồng mẹ đã nhả những viên ngọc biến thành muôn vàn đảo đá vôi kỳ vĩ!'
          }
        ]
      },
      // Grade 3: Pre-A1 Foundation (Simple sentences, short Q&A, bilingual hints)
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Bay', phonetic: '/beɪ/', meaningEn: 'A body of water partially enclosed by land', meaningVi: 'Vịnh biển', example: 'Ha Long Bay is famous around the world.' },
          { word: 'Limestone', phonetic: '/ˈlaɪm.stoʊn/', meaningEn: 'A hard rock formed from ancient marine shells', meaningVi: 'Đá vôi tự nhiên', example: 'The limestone pillars rise from the sea.' },
          { word: 'Kayak', phonetic: '/ˈkaɪ.æk/', meaningEn: 'A light, narrow canoe operated with a double-bladed paddle', meaningVi: 'Thuyền kayak', example: 'Tourists paddle kayaks through quiet caves.' },
          { word: 'Formation', phonetic: '/fɔːrˈmeɪ.ʃən/', meaningEn: 'A rock shaped in a particular artistic way by nature', meaningVi: 'Khối thạch nhũ / Kiến tạo đá', example: 'Look at the rock formation shaped like a rooster.' }
        ],
        reading: {
          titleEn: 'A Day on Ha Long Bay',
          textEn: 'Ha Long Bay is in Quang Ninh Province in northern Vietnam. The name Ha Long means "descending dragon". According to legend, a mother dragon flew down to help the Vietnamese people protect their land. Today, travelers ride friendly cruise boats across the calm emerald sea. You can see funny rock formations shaped like a fighting rooster and an incense burner. In the afternoon, explore cool caves with colorful lights and paddle small kayaks through quiet sea arches.',
          textVi: 'Vịnh Hạ Long nằm ở tỉnh Quảng Ninh, miền Bắc Việt Nam. Tên gọi Hạ Long có nghĩa là "rồng đáp xuống". Theo truyền thuyết, rồng mẹ đã bay xuống để giúp người dân Việt Nam bảo vệ đất nước. Ngày nay, du khách đi trên những con tàu du lịch thân thiện lướt qua làn nước xanh ngọc thanh bình. Em có thể thấy những khối đá ngộ nghĩnh hình hòn Trống Mái và hòn Đỉnh Hương. Vào buổi chiều, em có thể khám phá hang động mát rượi với ánh đèn lung linh và chèo thuyền kayak qua các cổng đá biển yên tĩnh.'
        },
        listening: {
          audioScriptEn: 'Welcome aboard! Ha Long Bay has almost two thousand limestone islands. Look to your right, and you will see the famous Fighting Cocks Island!',
          question: 'According to the boat guide, what famous island can visitors see on the right?',
          options: ['Fighting Cocks Island', 'Turtle Island', 'Dragon Mountain', 'Golden Monkey Cave'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Practice saying this sentence about Ha Long Bay out loud:',
          promptVi: 'Luyện đọc to câu giới thiệu về Vịnh Hạ Long sau đây:',
          sampleSentence: 'Ha Long Bay is a wonderful natural heritage of Vietnam.',
          tips: 'Remember to stress "WON-der-ful" and pronounce the ending "d" in "heritage".'
        },
        quiz: [
          {
            id: 'hl-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'Where is Ha Long Bay located in Vietnam?',
            questionVi: 'Vịnh Hạ Long nằm ở tỉnh nào của Việt Nam?',
            options: ['Quang Ninh Province', 'Da Nang City', 'Lam Dong Province', 'Kien Giang Province'],
            correctIndex: 0,
            explanationEn: 'Ha Long Bay is located in Quang Ninh Province in the northern part of Vietnam.',
            explanationVi: 'Vịnh Hạ Long tọa lạc tại tỉnh Quảng Ninh thuộc vùng Đông Bắc Việt Nam.'
          },
          {
            id: 'hl-g3-2',
            bloomLevel: 'Understand',
            questionEn: 'What does the name "Ha Long" mean in Vietnamese legend?',
            questionVi: 'Tên gọi "Hạ Long" mang ý nghĩa gì theo truyền thuyết Việt Nam?',
            options: ['Descending Dragon', 'Golden Lotus', 'Flying Tiger', 'Emerald Ocean'],
            correctIndex: 0,
            explanationEn: '"Ha" means descending and "Long" means dragon in Sino-Vietnamese.',
            explanationVi: '"Hạ" có nghĩa là giáng xuống, "Long" nghĩa là rồng (Rồng đáp xuống).'
          }
        ]
      },
      // Grade 4: Pre-A1 to A1 (Short descriptions, conversations, guided speaking)
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, environmental care',
        vocabulary: [
          { word: 'Heritage', phonetic: '/ˈher.ɪ.t̬ɪdʒ/', meaningEn: 'Valuable traditions and nature preserved across generations', meaningVi: 'Di sản thế giới', example: 'UNESCO designated Ha Long Bay a World Heritage site.' },
          { word: 'Ecosystem', phonetic: '/ˈiː.koʊˌsɪs.təm/', meaningEn: 'All living plants, animals, and corals in an area', meaningVi: 'Hệ sinh thái biển', example: 'Coral reefs support the marine ecosystem.' },
          { word: 'Stalactite', phonetic: '/stəˈlæk.taɪt/', meaningEn: 'An icicle-shaped rock hanging down from a cave ceiling', meaningVi: 'Thạch nhũ đá rủ xuống', example: 'Sung Sot Cave has sparkling stalactites.' },
          { word: 'Protect', phonetic: '/prəˈtekt/', meaningEn: 'Keep safe from harm or pollution', meaningVi: 'Bảo vệ môi trường', example: 'We must protect the bay from plastic waste.' }
        ],
        reading: {
          titleEn: 'Treasures of Sung Sot Cave',
          textEn: 'Deep inside Ha Long Bay lies Sung Sot Cave, also known as the Surprise Cave. Discovered by French explorers in 1901, the cave features two giant chambers filled with incredible stalactites and stalagmites formed over millions of years by dripping water. Outside, scientists study over 60 rare plants and animal species that only live on these limestone cliffs. By keeping the bay clean and using eco-friendly electric boats, students help preserve this global treasure for children of the future.',
          textVi: 'Sâu trong lòng Vịnh Hạ Long là Hang Sửng Sốt. Được phát hiện vào năm 1901, hang gồm hai gian phòng khổng lồ ngập tràn thạch nhũ lấp lánh hình thành qua hàng triệu năm từ những giọt nước giàu khoáng chất. Bên ngoài vách đá, các nhà khoa học đang nghiên cứu hơn 60 loài thực vật và động vật quý hiếm chỉ sinh sống trên vách đá vôi nơi đây. Bằng việc giữ gìn vịnh sạch sẽ và đi thuyền điện thân thiện, các bạn học sinh đang chung tay bảo vệ di sản quý giá cho muôn đời sau.'
        },
        listening: {
          audioScriptEn: 'Park ranger report: To safeguard our marine wildlife, visitors are kindly reminded to use reusable water flasks and never drop plastic bags into the ocean.',
          question: 'What eco-friendly action does the park ranger recommend?',
          options: ['Use reusable water flasks', 'Throw plastic bottles into the sea', 'Touch fragile stalactites', 'Feed sweet candy to monkeys'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this eco-pledge clearly:',
          promptVi: 'Đọc lời cam kết bảo vệ môi trường biển:',
          sampleSentence: 'We promise to keep Ha Long Bay clean and green for future generations.',
          tips: 'Emphasize "clean and green" with a confident, cheerful tone.'
        },
        quiz: [
          {
            id: 'hl-g4-1',
            bloomLevel: 'Apply',
            questionEn: 'How can primary school students help protect Ha Long Bay when visiting?',
            questionVi: 'Các bạn học sinh tiểu học có thể làm gì để bảo vệ Vịnh Hạ Long khi đến tham quan?',
            options: ['Never litter plastic and always collect recyclable trash', 'Carve names on cave walls with stones', 'Shout loudly inside caves', 'Throw food to wild birds'],
            correctIndex: 0,
            explanationEn: 'Avoiding littering and using reusable containers keeps the bay pristine!',
            explanationVi: 'Không xả rác và sử dụng bình nước tái chế giúp gìn giữ vịnh luôn trong xanh!'
          }
        ]
      },
      // Grade 5: A1 with A2 extension (Reading comprehension, academic presentation)
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic descriptions, environmental stewardship',
        vocabulary: [
          { word: 'Karst Landform', phonetic: '/kɑːrst ˈlænd.fɔːrm/', meaningEn: 'A distinctive landscape sculpted by the dissolution of soluble limestone', meaningVi: 'Địa hình karst đá vôi', example: 'Ha Long Bay exhibits globally significant tropical karst geomorphology.' },
          { word: 'Biodiversity', phonetic: '/ˌbaɪ.oʊ.daɪˈvɝː.sə.t̬i/', meaningEn: 'The variety of plant and animal species in an ecosystem', meaningVi: 'Đa dạng sinh học', example: 'Endemic orchids thrive on isolated cliff crevices.' },
          { word: 'Stewardship', phonetic: '/ˈstuː.ɚd.ʃɪp/', meaningEn: 'Responsible planning and management of natural resources', meaningVi: 'Tinh thần gìn giữ di sản', example: 'Youth environmental stewardship safeguards marine biosphere reserves.' },
          { word: 'Geomorphology', phonetic: '/ˌdʒiː.oʊ.mɔːrˈfɑː.lə.dʒi/', meaningEn: 'The scientific study of physical features of the surface of the earth', meaningVi: 'Địa mạo học', example: 'UNESCO recognized the bay twice for aesthetic and geomorphological values.' }
        ],
        reading: {
          titleEn: 'Ha Long Bay: Geological Marvel & Global Heritage',
          textEn: 'Ha Long Bay in northeastern Vietnam represents one of the world\'s most breathtaking karst landforms, shaped by more than 500 million years of geological evolution under tropical climates. With nearly 2,000 limestone islets distributed over 1,553 square kilometers, the bay shelters extraordinary endemic species, mangrove forests, and underwater coral ecosystems. Recognized twice by UNESCO for both its aesthetic value and geomorphological significance, the bay presents a vital ecological responsibility: balancing eco-tourism development with rigorous marine conservation so that its legendary emerald waterways thrive perpetually.',
          textVi: 'Vịnh Hạ Long ở vùng Đông Bắc Việt Nam là một trong những cảnh quan karst đá vôi ngoạn mục nhất thế giới, được định hình qua hơn 500 triệu năm tiến hóa địa chất dưới khí hậu nhiệt đới ẩm. Với gần 2.000 hòn đảo đá vôi phân bố trên diện tích 1.553 km², vịnh là nơi che chở cho nhiều loài sinh vật đặc hữu, rừng ngập mặn và hệ sinh thái san hô ngầm. Được UNESCO hai lần công nhận Di sản Thiên nhiên Thế giới về giá trị thẩm mỹ và địa chất, vịnh đặt ra trách nhiệm sinh thái quan trọng: cân bằng hài hòa giữa du lịch sinh thái và bảo tồn biển nghiêm ngặt để dòng nước ngọc bích trường tồn.'
        },
        listening: {
          audioScriptEn: 'Scientific survey update: Researchers have identified over 60 endemic fauna and flora species uniquely adapted to the limestone cliff microclimates of Ha Long Bay.',
          question: 'According to researchers, what unique habitat do endemic species adapt to in Ha Long Bay?',
          options: ['Limestone cliff microclimates', 'Desert sand dunes', 'Deep ocean trenches', 'Polar ice sheets'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this environmental stewardship statement:',
          promptVi: 'Thuyết trình câu cam kết bảo vệ môi trường di sản:',
          sampleSentence: 'Preserving the pristine marine ecosystem of Ha Long Bay is our shared responsibility to future global generations.',
          tips: 'Enunciate "pristine marine ecosystem" with confident academic pacing.'
        },
        quiz: [
          {
            id: 'hl-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'Why is sustainable eco-tourism superior to mass unrestricted tourism for World Heritage sites?',
            questionVi: 'Vì sao du lịch sinh thái bền vững lại vượt trội hơn du lịch ồ ạt đối với các di sản thế giới?',
            options: [
              'It limits environmental footprint, safeguards fragile ecosystems, and ensures long-term economic prosperity for local communities',
              'It allows unlimited numbers of cruise ships with zero inspection',
              'It bans all visitors forever so nobody can ever see the site',
              'It replaces natural caves with concrete shopping malls'
            ],
            correctIndex: 0,
            explanationEn: 'Eco-tourism protects biodiversity and natural beauty while supporting sustainable livelihood.',
            explanationVi: 'Du lịch sinh thái bảo vệ môi trường sống mong manh đồng thời mang lại lợi ích kinh tế lâu dài cho người dân bản địa.'
          }
        ]
      }
    )
  },

  // 2. HANOI CAPITAL (Thủ đô Hà Nội - Hoan Kiem Lake & Van Mieu)
  {
    id: 'hanoi',
    name: 'Hanoi Capital',
    vietnameseName: 'Thủ đô Hà Nội',
    province: 'Hà Nội',
    region: 'North',
    theme: 'History',
    geoCoordinates: { latitude: 21.028, longitude: 105.854 },
    coordinates: { x: 62, y: 18 },
    // AUTHENTIC PHOTO: Hoan Kiem Lake with iconic ancient Turtle Tower reflecting in green water
    image: '/destinations/hanoi_turtle_tower.jpg',
    photoAttribution: {
      author: 'Wikimedia Commons / Public Domain',
      source: 'Wikimedia Commons',
      license: 'CC BY-SA 3.0 / Educational Public Domain',
      landmark: 'Turtle Tower & Sword Lake (Tháp Rùa Hồ Gươm), Hanoi'
    },
    summaryEn: 'The thousand-year-old capital with peaceful lakes, the ancient Temple of Literature, and joyful streets.',
    summaryVi: 'Thủ đô ngàn năm văn hiến với những hồ nước thanh bình, Văn Miếu cổ kính và phố phường rộn rã.',
    badge: {
      name: 'Hanoi Historian',
      icon: '🏛️',
      titleEn: 'Hanoi Cultural Historian',
      titleVi: 'Nhà Sử Học Thủ Đô'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'City', phonetic: '/ˈsɪt.i/', meaningEn: 'A big place with houses and schools', meaningVi: 'Thành phố', example: 'Hanoi is our capital city.', emoji: '🏙️' },
          { word: 'Lake', phonetic: '/leɪk/', meaningEn: 'A quiet body of fresh water', meaningVi: 'Hồ nước', example: 'Sword Lake is green and pretty.', emoji: '🌊' },
          { word: 'Turtle', phonetic: '/ˈtɝː.t̬əl/', meaningEn: 'A friendly animal with a green shell', meaningVi: 'Chú rùa', example: 'The Golden Turtle swims in the lake.', emoji: '🐢' },
          { word: 'Tower', phonetic: '/ˈtaʊ.ɚ/', meaningEn: 'A tall stone building on the lake', meaningVi: 'Tòa tháp', example: 'Turtle Tower is very old.', emoji: '🗼' }
        ],
        reading: {
          titleEn: 'Hello Hanoi!',
          textEn: 'Hanoi is the capital of Vietnam! Big green trees shade Sword Lake. A friendly Golden Turtle lived in the lake long ago. We love our green city!',
          textVi: 'Hà Nội là thủ đô của Việt Nam! Những hàng cây xanh lớn rợp bóng quanh Hồ Gươm. Chú Rùa Vàng thân thiện đã sống ở hồ từ ngày xưa. Chúng em yêu thành phố xanh của mình!'
        },
        listening: {
          audioScriptEn: 'Listen to the bell! Ding, dong! King Le Loi returned the magic sword to the Golden Turtle in the lake.',
          question: 'What special animal lives in Sword Lake in the story?',
          options: ['A friendly Golden Turtle 🐢', 'A playful monkey 🐒', 'A baby puppy 🐶', 'A swimming duck 🦆'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this greeting proudly:',
          promptVi: 'Đọc câu chào thân ái này nhé:',
          sampleSentence: 'Hello Hanoi Capital!',
          tips: 'Say "Ha-noi" with joy and a big smile!'
        },
        quiz: [
          {
            id: 'hn-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'What is the capital city of Vietnam?',
            questionVi: 'Thủ đô của nước Việt Nam là thành phố nào?',
            options: ['Hanoi 🇻🇳', 'Paris 🗼', 'Tokyo 🌸', 'London 🏰'],
            correctIndex: 0,
            explanationEn: 'Hanoi is the historic capital city of Vietnam!',
            explanationVi: 'Hà Nội là thủ đô ngàn năm văn hiến của đất nước Việt Nam ta!'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Turtle', emoji: '🐢', meaningVi: 'Chú rùa' },
            { word: 'Lake', emoji: '🌊', meaningVi: 'Hồ nước' },
            { word: 'Tower', emoji: '🗼', meaningVi: 'Tòa tháp' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Capital', phonetic: '/ˈkæp.ə.t̬əl/', meaningEn: 'The main center city of a nation', meaningVi: 'Thủ đô đất nước', example: 'Hanoi is the heart of Vietnam.', emoji: '🏛️' },
          { word: 'Bridge', phonetic: '/brɪdʒ/', meaningEn: 'A red wooden bridge over water', meaningVi: 'Cây cầu gỗ', example: 'The red Huc Bridge shines in the sun.', emoji: '🌉' },
          { word: 'Sword', phonetic: '/sɔːrd/', meaningEn: 'A magical weapon in ancient stories', meaningVi: 'Thanh gươm thần', example: 'The king held a magic sword.', emoji: '⚔️' },
          { word: 'Temple', phonetic: '/ˈtem.pəl/', meaningEn: 'A sacred building where people study and pray', meaningVi: 'Ngôi đền / Văn Miếu', example: 'We visit the quiet temple.', emoji: '⛩️' }
        ],
        reading: {
          titleEn: 'The Red Wooden Bridge',
          textEn: 'Walk across the bright red Huc Bridge! It leads to Ngoc Son Temple on a tiny island. The bridge looks like a rising sunbeam. In the water below, fish swim happily while morning birds sing in the willow trees.',
          textVi: 'Cùng bước qua cây cầu Thê Húc đỏ tươi nhé! Cây cầu dẫn tới Đền Ngọc Sơn trên một gò đảo nhỏ. Cây cầu cong cong như một tia nắng sớm mai. Dưới mặt nước, đàn cá bơi lội tung tăng trong khi chim hót líu lo trên những rặng liễu rủ.'
        },
        listening: {
          audioScriptEn: 'Listen to the temple drum! Thump, thump! Students come to the Temple of Literature to bow and pray for wisdom.',
          question: 'What color is the famous Huc Bridge at Sword Lake?',
          options: ['Bright Red 🔴', 'Neon Yellow 🟡', 'Dark Purple 🟣', 'Snow White ⚪'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this welcoming sentence:',
          promptVi: 'Đọc câu chào đón du khách đến Hà Nội:',
          sampleSentence: 'Welcome to peaceful Sword Lake!',
          tips: 'Smile and pronounce "peace-ful" with a gentle tone.'
        },
        quiz: [
          {
            id: 'hn-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'Which famous wooden bridge connects to Ngoc Son Temple?',
            questionVi: 'Cây cầu gỗ màu đỏ nối vào Đền Ngọc Sơn có tên là gì?',
            options: ['The Huc Bridge 🌉', 'Golden Gate Bridge 🌁', 'London Bridge 🏰', 'Dragon Bridge 🐉'],
            correctIndex: 0,
            explanationEn: 'The Huc Bridge (Bridge of the Rising Sun) is painted bright red!',
            explanationVi: 'Cầu Thê Húc mang ý nghĩa là nơi ngưng tụ ánh sáng mặt trời sớm mai!'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Capital', phonetic: '/ˈkæp.ə.t̬əl/', meaningEn: 'The most important city and center of a country', meaningVi: 'Thủ đô', example: 'Hanoi is the capital of Vietnam.' },
          { word: 'Ancient', phonetic: '/ˈeɪn.ʃənt/', meaningEn: 'Belonging to times long ago; very old', meaningVi: 'Cổ kính, lâu đời', example: 'Hanoi has an ancient Old Quarter.' },
          { word: 'Scholar', phonetic: '/ˈskɑː.lɚ/', meaningEn: 'A person who studies hard and has great knowledge', meaningVi: 'Học giả, nhà nho', example: 'The Temple of Literature honors scholars.' },
          { word: 'Tradition', phonetic: '/trəˈdɪʃ.ən/', meaningEn: 'A belief or custom passed down through time', meaningVi: 'Truyền thống quý báu', example: 'Vietnamese people have a great tradition of learning.' }
        ],
        reading: {
          titleEn: 'Discovering Hanoi',
          textEn: 'Hanoi is the heart of Vietnam. Over one thousand years ago, King Ly Thai To saw a golden dragon soaring up into the sky and decided to build his capital here, naming it Thang Long. Today, walking around Hoan Kiem Lake in the early morning is peaceful. You can see the historic Turtle Tower sitting quietly on a tiny green island. Nearby, the Temple of Literature was Vietnam\'s very first national university, where students still come to pray for good exam luck.',
          textVi: 'Hà Nội là trái tim của đất nước Việt Nam. Hơn một ngàn năm trước, Vua Lý Thái Tổ nhìn thấy rồng vàng bay lên trời và đã quyết định chọn nơi này làm kinh đô, đặt tên là Thăng Long. Ngày nay, đi dạo quanh hồ Hoàn Kiếm vào buổi sáng sớm thật thanh bình. Em có thể ngắm tháp Rùa cổ kính nằm yên bình trên một gò đảo nhỏ xanh tươi. Gần đó, Văn Miếu - Quốc Tử Giám là trường đại học đầu tiên của Việt Nam, nơi các bạn học sinh vẫn đến để cầu chúc may mắn trong học tập.'
        },
        listening: {
          audioScriptEn: 'Listen closely! Long ago, King Le Loi returned the magic sword to the Golden Turtle in this lake. That is why we call it Hoan Kiem, the Lake of the Returned Sword.',
          question: 'What did King Le Loi return to the Golden Turtle?',
          options: ['A magic sword ⚔️', 'A golden crown 👑', 'A bag of pearls 📿', 'A silk robe 👘'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this greeting about Hanoi proudly:',
          promptVi: 'Đọc câu chào thân ái về Hà Nội:',
          sampleSentence: 'Welcome to Hanoi, the thousand-year-old capital of Vietnam!',
          tips: 'Speak with a friendly, inviting tone. Practice linking "Welcome to".'
        },
        quiz: [
          {
            id: 'hn-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'What was the ancient name of Hanoi chosen by King Ly Thai To in 1010?',
            questionVi: 'Tên cổ lịch sử của Hà Nội do Vua Lý Thái Tổ đặt năm 1010 là gì?',
            options: ['Thang Long (Ascending Dragon)', 'Gia Dinh', 'Bach Dang', 'Phu Xuan'],
            correctIndex: 0,
            explanationEn: 'In 1010, King Ly Thai To named the capital Thang Long (Ascending Dragon).',
            explanationVi: 'Năm 1010, Vua Lý Thái Tổ đã đặt tên kinh đô là Thăng Long.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, historical reflection',
        vocabulary: [
          { word: 'Dynasty', phonetic: '/ˈdaɪ.nə.sti/', meaningEn: 'A series of rulers from the same royal family', meaningVi: 'Triều đại lịch sử', example: 'The Ly Dynasty founded the capital in 1010.' },
          { word: 'Literature', phonetic: '/ˈlɪt̬.ɚ.ə.tʃɚ/', meaningEn: 'Written works of artistic value and knowledge', meaningVi: 'Văn học & Tri thức', example: 'Van Mieu is the Temple of Literature.' },
          { word: 'Doctorate', phonetic: '/ˈdɑːk.tɚ.ət/', meaningEn: 'The highest academic degree awarded by universities', meaningVi: 'Học vị Tiến sĩ', example: 'Doctoral scholars had their names carved on stone.' },
          { word: 'Pavilion', phonetic: '/pəˈvɪl.jən/', meaningEn: 'An ornamental open building with traditional architecture', meaningVi: 'Gác son, đình tạ (Khuê Văn Các)', example: 'Khue Van Cac is the iconic pavilion symbol of Hanoi.' }
        ],
        reading: {
          titleEn: 'The Temple of Wisdom',
          textEn: 'Built in 1070 under Emperor Ly Thanh Tong, the Temple of Literature (Van Mieu - Quoc Tu Giam) served as Vietnam\'s premier seat of classical higher education for over seven hundred years. Inside the lush green courtyards stands the Khue Van Cac pavilion, representing the constellation of literature and culture. In the third courtyard, 82 stone stelae resting on stone tortoises record the names and birthplaces of 1,304 doctors who passed rigorous royal court examinations. These turtles remind every generation that patience and moral character are the true foundation of learning.',
          textVi: 'Được khởi dựng vào năm 1070 dưới thời Vua Lý Thánh Tông, Văn Miếu - Quốc Tử Giám là trường đại học quốc gia đầu tiên đào tạo hiền tài cho đất nước suốt hơn 700 năm. Bước vào không gian rợp mát bóng cây là Khuê Văn Các—biểu tượng của sao Khuê tỏa sáng văn hóa Thăng Long. Tại khu vườn thứ ba, 82 tấm bia tiến sĩ đặt trên lưng rùa đá khắc ghi danh tính của 1.304 vị đỗ đại khoa. Hình tượng rùa đá nhắc nhở mỗi thế hệ học sinh rằng đức tính kiên trì và đạo đức chính là nền tảng vững chắc của tri thức.'
        },
        listening: {
          audioScriptEn: 'Historical archive guide: Look closely at the tortoise pedestals! In Vietnamese culture, the tortoise represents steadfast endurance, ensuring that the honor of learning lasts forever.',
          question: 'What does the stone tortoise underneath the doctoral stelae symbolize?',
          options: ['Steadfast endurance and longevity of wisdom', 'Fast running speed in sports', 'Ancient cooking tools', 'Ocean weather forecasts'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Recite this historical quote with pride:',
          promptVi: 'Đọc to lời nhắc nhở về hiền tài đất nước:',
          sampleSentence: 'Talented scholars are the vital strength of the nation.',
          tips: 'Speak with dignified confidence and steady pacing.'
        },
        quiz: [
          {
            id: 'hn-g4-1',
            bloomLevel: 'Understand',
            questionEn: 'Why was the Temple of Literature (Van Mieu) famous in Vietnam\'s history?',
            questionVi: 'Vì sao Văn Miếu - Quốc Tử Giám lại nổi tiếng trong lịch sử Việt Nam?',
            options: [
              'It was Vietnam\'s first national university honoring education and scholars',
              'It was the largest toy marketplace',
              'It was a secret mountain cave',
              'It was an ice fortress'
            ],
            correctIndex: 0,
            explanationEn: 'It was built in 1070 and became Vietnam\'s first university in 1076.',
            explanationVi: 'Văn Miếu - Quốc Tử Giám là trường đại học đầu tiên tôn vinh truyền thống hiếu học.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic descriptions, UNESCO documentary heritage',
        vocabulary: [
          { word: 'Millennium', phonetic: '/mɪˈlen.i.əm/', meaningEn: 'A period of one thousand years of history', meaningVi: 'Thiên niên kỷ (ngàn năm)', example: 'Hanoi celebrated its millennium anniversary in 2010.' },
          { word: 'Documentary Heritage', phonetic: '/ˌdɑːk.jəˈmen.tər.i ˈher.ɪ.t̬ɪdʒ/', meaningEn: 'Important recorded archives recognized globally by UNESCO', meaningVi: 'Di sản tư liệu thế giới', example: 'The 82 Doctors\' Stelae are inscribed on the Memory of the World Register.' },
          { word: 'Pedestrianization', phonetic: '/pəˌdes.tri.ə.naɪˈzeɪ.ʃən/', meaningEn: 'Converting city streets into walking-only zones', meaningVi: 'Không gian phố đi bộ', example: 'Weekend pedestrian zones around Sword Lake cultivate community arts.' },
          { word: 'Resilience', phonetic: '/rɪˈzɪl.jəns/', meaningEn: 'The capacity to recover quickly from difficulties and withstand change', meaningVi: 'Sức sống kiên cường', example: 'Hanoi reflects ten centuries of cultural resilience.' }
        ],
        reading: {
          titleEn: 'Hanoi: Symphony of Heritage and Civic Rejuvenation',
          textEn: 'Established in the autumn of 1010 by King Ly Thai To upon his vision of an ascending golden dragon, Hanoi embodies over ten centuries of civilizational resilience. At its intellectual core lies the Temple of Literature (Van Mieu - Quoc Tu Giam), where 82 Doctor Stelae carved on stone tortoises honor scholars from the 15th to 18th centuries—a testimony to Vietnam\'s enduring reverence for knowledge. Today, Hanoi harmoniously juxtaposes ancient 36 guild streets with modern eco-friendly urban masterplans, exemplifying a City for Peace that bridges sovereign heritage with global educational integration.',
          textVi: 'Được Vua Lý Thái Tổ khai sáng vào mùa thu năm 1010 sau khi thấy rồng vàng bay lên, Hà Nội kết tinh hơn mười thế kỷ kiên cường của nền văn minh Đại Việt. Trung tâm trí tuệ của thủ đô là Văn Miếu - Quốc Tử Giám, nơi 82 tấm Bia Tiến sĩ đặt trên lưng rùa đá vinh danh các bậc hiền tài từ thế kỷ 15 đến 18—minh chứng cho truyền thống tôn sư trọng đạo của dân tộc. Ngày nay, Hà Nội kết hợp hài hòa giữa 36 phố phường cổ kính với quy hoạch đô thị sinh thái thông minh, xứng danh Thành phố vì Hòa bình nối kết di sản với hội nhập quốc tế.'
        },
        listening: {
          audioScriptEn: 'Heritage archive announcement: The 82 Doctors\' Stelae at the Temple of Literature were recognized by UNESCO as Memory of the World Global Documentary Heritage due to their exceptional stone-carving craftsmanship and biographical records.',
          question: 'Why were the 82 stone stelae awarded UNESCO Memory of the World status?',
          options: [
            'Because of their biographical records of doctoral laureates and stone-carving artistry',
            'Because they are made of solid gold',
            'Because they were imported from Europe',
            'Because they predict the future weather'
          ],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Recite this historical tribute with formal cadence:',
          promptVi: 'Đọc to lời tri ân truyền thống hiếu học của cha ông:',
          sampleSentence: 'The historic Doctor Stelae in Hanoi symbolize the eternal value of education in building a prosperous Vietnam.',
          tips: 'Articulate "eternal value of education" clearly and solemnly.'
        },
        quiz: [
          {
            id: 'hn-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does the symbol of the stone tortoise supporting doctoral stelae convey cultural values?',
            questionVi: 'Hình tượng rùa đá đội bia tiến sĩ truyền tải thông điệp văn hóa sâu sắc nào?',
            options: [
              'The tortoise symbolizes longevity, endurance, and the permanent foundation of wisdom in society',
              'It suggests students should walk slowly like turtles',
              'It was simply the cheapest stone available',
              'It shows turtles were pets of ancient kings'
            ],
            correctIndex: 0,
            explanationEn: 'The tortoise is one of the four sacred creatures symbolizing longevity, steadfastness, and enduring wisdom.',
            explanationVi: 'Rùa là linh vật biểu trưng cho sự trường tồn, bền bỉ và nền tảng tri thức vững chắc của quốc gia.'
          }
        ]
      }
    )
  },

  // 3. HUE IMPERIAL CITY (Cố đô Huế - Ngo Mon Gate & Royal Citadel)
  {
    id: 'hue',
    name: 'Hue Imperial City',
    vietnameseName: 'Cố đô Huế',
    province: 'Thừa Thiên Huế',
    region: 'Central',
    theme: 'Culture',
    geoCoordinates: { latitude: 16.470, longitude: 107.578 },
    coordinates: { x: 67, y: 44 },
    // AUTHENTIC PHOTO: Ngo Mon Gate & Imperial Citadel with traditional tiled dragon roofs and lotus moats
    image: '/destinations/hue_citadel.jpg',
    photoAttribution: {
      author: 'Wikimedia Commons',
      source: 'Wikimedia Commons',
      license: 'CC BY-SA 4.0 / Educational Public Domain',
      landmark: 'Meridian Gate (Ngọ Môn), Hue Imperial Citadel'
    },
    summaryEn: 'The historic royal capital by the Perfume River with grand palaces, royal music, and delicate cuisine.',
    summaryVi: 'Cố đô lịch sử bên dòng sông Hương thơ mộng với cung điện nguy nga, nhã nhạc cung đình và ẩm thực tinh tế.',
    badge: {
      name: 'Hue Royal Scholar',
      icon: '👑',
      titleEn: 'Hue Imperial Heritage Scholar',
      titleVi: 'Học Giả Di Sản Cố Đô'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'King', phonetic: '/kɪŋ/', meaningEn: 'The royal ruler who wore golden silk robes', meaningVi: 'Vị vua', example: 'The king lived in the palace.', emoji: '👑' },
          { word: 'River', phonetic: '/ˈrɪv.ɚ/', meaningEn: 'A flowing stream of water', meaningVi: 'Dòng sông', example: 'The Perfume River is peaceful.', emoji: '🏞️' },
          { word: 'Gate', phonetic: '/ɡeɪt/', meaningEn: 'A giant stone entrance to the palace', meaningVi: 'Cổng thành', example: 'Ngo Mon Gate is big and tall.', emoji: '⛩️' },
          { word: 'Music', phonetic: '/ˈmjuː.zɪk/', meaningEn: 'Pleasant sounds of drums and flutes', meaningVi: 'Âm nhạc', example: 'We listen to royal music.', emoji: '🎶' }
        ],
        reading: {
          titleEn: 'The Royal City by the River',
          textEn: 'Hue is a royal city! The gentle Perfume River smells sweet like flowers. Golden palaces shine in the sun. Kings and queens listened to sweet music here!',
          textVi: 'Huế là một thành phố hoàng gia! Dòng sông Hương dịu êm thơm ngát hương hoa. Những cung điện vàng tỏa sáng dưới ánh mặt trời. Các vị vua chúa ngày xưa đã thưởng thức âm nhạc ngọt ngào nơi đây!'
        },
        listening: {
          audioScriptEn: 'Listen to the wooden boat on the river! Clack, clack! Artists play traditional drums and flutes.',
          question: 'What river flows through Hue?',
          options: ['Perfume River 🏞️', 'Red River 🌊', 'Amazon River 🌴', 'Ice River ❄️'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this sweet sentence:',
          promptVi: 'Đọc câu miêu tả sông Hương:',
          sampleSentence: 'Beautiful Perfume River!',
          tips: 'Say "Beau-ti-ful" softly like the river breeze!'
        },
        quiz: [
          {
            id: 'hue-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'Who lived inside the imperial palaces in Hue long ago?',
            questionVi: 'Ai từng sinh sống trong cung điện nguy nga ngày xưa?',
            options: ['Kings and royal families 👑', 'Aliens from space 🛸', 'Snowmen ⛄', 'Robots 🤖'],
            correctIndex: 0,
            explanationEn: 'Kings and emperors of the Nguyen Dynasty lived in Hue.',
            explanationVi: 'Các vị vua và hoàng tộc triều Nguyễn đã từng ngự tại Cố đô Huế.'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'King', emoji: '👑', meaningVi: 'Vị vua' },
            { word: 'River', emoji: '🏞️', meaningVi: 'Dòng sông' },
            { word: 'Gate', emoji: '⛩️', meaningVi: 'Cổng thành' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Palace', phonetic: '/ˈpæl.ɪs/', meaningEn: 'A magnificent royal residence', meaningVi: 'Cung điện hoàng gia', example: 'The palace has golden dragon tiles.', emoji: '🏰' },
          { word: 'Lotus', phonetic: '/ˈloʊ.t̬əs/', meaningEn: 'A sacred pink flower growing in water', meaningVi: 'Hoa sen thơm ngát', example: 'Pink lotus flowers bloom in the moat.', emoji: '🪷' },
          { word: 'Dragon Boat', phonetic: '/ˈdræɡ.ən boʊt/', meaningEn: 'A wooden royal boat shaped like a dragon', meaningVi: 'Thuyền rồng', example: 'We ride a dragon boat at night.', emoji: '🛶' },
          { word: 'Silk', phonetic: '/sɪlk/', meaningEn: 'Smooth, shiny royal cloth', meaningVi: 'Vải tơ lụa quý', example: 'The royal queen wore purple silk.', emoji: '👘' }
        ],
        reading: {
          titleEn: 'Evening on the Perfume River',
          textEn: 'When the sun sets in Hue, the Perfume River turns golden pink. Traditional dragon boats glide past the old Thien Mu Pagoda. Musicians dressed in colorful silk play soft songs with zithers and moon lutes. It feels like stepping into a fairy tale!',
          textVi: 'Khi hoàng hôn buông xuống cố đô Huế, dòng sông Hương nhuộm một màu hồng vàng êm ả. Những chiếc thuyền rồng truyền thống lướt nhẹ qua Chùa Thiên Mụ cổ kính. Các nghệ sĩ mặc trang phục lụa ngũ thân gảy đàn tranh và đàn nguyệt thánh thót. Cảm giác như bước vào một thế giới cổ tích nhiệm màu!'
        },
        listening: {
          audioScriptEn: 'Clink, chime! Stone chimes and bronze bells ring out together in the palace courtyard.',
          question: 'What special boat sails on the Perfume River at dusk?',
          options: ['A traditional Dragon Boat 🛶', 'A yellow submarine 🤿', 'A fire truck 🚒', 'A racing scooter 🛴'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence about Hue:',
          promptVi: 'Đọc to câu miêu tả Cố đô Huế:',
          sampleSentence: 'The gentle river flows past ancient royal palaces.',
          tips: 'Pronounce "gen-tle" and "an-cient" softly and rhythmically.'
        },
        quiz: [
          {
            id: 'hue-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'Which sacred pink flower blooms in the moats around Hue Citadel?',
            questionVi: 'Loài hoa màu hồng ngát hương nào nở rộ dưới hào nước quanh Kinh thành?',
            options: ['Pink Lotus Flower 🪷', 'Prickly Cactus 🌵', 'Sunflowers 🌻', 'Pine Cones 🌲'],
            correctIndex: 0,
            explanationEn: 'Fragrant pink lotus flowers bloom abundantly in the citadel moats!',
            explanationVi: 'Hoa sen hồng nở rộ trong các hào nước tạo nên nét thanh tao đặc trưng của Huế!'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          {
            word: 'Citadel',
            phonetic: '/ˈsɪt̬.ə.dəl/',
            britishPhonetic: '/ˈsɪt.ə.dəl/',
            meaningEn: 'A fortified imperial fortress with stone ramparts protecting royal palaces',
            meaningVi: 'Kinh thành kiên cố, thành lũy hoàng gia',
            example: 'The ancient imperial citadel of Hue has magnificent stone walls and golden gates.',
            exampleVi: 'Kinh thành Huế có những bức tường thành bằng đá tráng lệ và cổng son mạ vàng.',
            imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85',
            imageAttribution: 'Photo by Nguyen Huy on Unsplash (Ngo Mon Gate, Hue Imperial Citadel)'
          },
          {
            word: 'Perfume River',
            phonetic: '/ˈpɝː.fjuːm ˈrɪv.ɚ/',
            britishPhonetic: '/ˈpɜː.fjuːm ˈrɪv.ər/',
            meaningEn: 'The peaceful and poetic river flowing through the heart of Hue',
            meaningVi: 'Sông Hương thơ mộng của xứ Huế',
            example: 'Wooden dragon boats glide peacefully along the romantic Perfume River.',
            exampleVi: 'Những chiếc thuyền rồng bằng gỗ lướt êm đềm trên dòng sông Hương thơ mộng.',
            imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85',
            imageAttribution: 'Photo by Tron Le on Unsplash (Perfume River Dragon Boats, Hue)'
          },
          {
            word: 'Heritage',
            phonetic: '/ˈher.ə.t̬ɪdʒ/',
            britishPhonetic: '/ˈher.ɪ.tɪdʒ/',
            meaningEn: 'Valuable traditions, royal monuments, and court music passed down by ancestors',
            meaningVi: 'Di sản văn hóa quý báu truyền từ ngàn xưa',
            example: 'Hue Court Music and royal architecture are precious world cultural heritage.',
            exampleVi: 'Nhã nhạc cung đình Huế và kiến trúc hoàng gia là di sản văn hóa thế giới quý giá.',
            imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
            imageAttribution: 'Photo by Silver Ringvein on Unsplash (UNESCO Heritage of Hue)'
          },
          {
            word: 'Harmony',
            phonetic: '/ˈhɑːr.mə.ni/',
            britishPhonetic: '/ˈhɑː.mə.ni/',
            meaningEn: 'The peaceful relationship between royal wooden architecture and natural surroundings',
            meaningVi: 'Sự hài hòa cảnh quan giữa kiến trúc và thiên nhiên',
            example: 'Hue royal tombs were planned in perfect harmony with surrounding pine forests and lakes.',
            exampleVi: 'Lăng tẩm các vua triều Nguyễn được quy hoạch hài hòa tuyệt mỹ với rừng thông và hồ nước.',
            imageUrl: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=85',
            imageAttribution: 'Photo by Doan Tuan on Unsplash (Hue Royal Pavilion on Lotus Lake)'
          }
        ],
        reading: {
          titleEn: 'The Royal Charms of Hue',
          textEn: 'Hue was the imperial capital of Vietnam during the Nguyen Dynasty from 1802 to 1945. Sitting by the romantic Perfume River, the Citadel has thick stone ramparts and the famous Ngo Mon Gate. Inside, kings held official ceremonies and celebrated traditional lunar new year festivals. In the evening, tourists ride wooden dragon boats to listen to Hue royal court music (Nha Nhac), where artists play traditional instruments in colorful silk royal costumes.',
          textVi: 'Huế từng là kinh đô của Việt Nam dưới triều đại nhà Nguyễn từ năm 1802 đến năm 1945. Nằm bên dòng sông Hương thơ mộng, Kinh thành Huế có những bức tường thành bằng đá kiên cố và cửa Ngọ Môn tráng lệ. Phía trong cung điện là nơi các vị vua tổ chức các nghi lễ lớn và đón Tết cổ truyền. Khi chiều buông, du khách có thể đi thuyền rồng ngắm cảnh và thưởng thức Nhã nhạc cung đình Huế, nơi các nghệ sĩ biểu diễn nhạc cụ truyền thống trong tà áo ngũ thân rực rỡ.'
        },
        listening: {
          audioScriptEn: 'Did you know? Nha Nhac Hue was the official court music played during royal ceremonies. UNESCO honored it as a Masterpiece of Oral and Intangible Heritage.',
          question: 'What special recognition did Nha Nhac Hue receive from UNESCO?',
          options: ['Masterpiece of Intangible Heritage', 'Modern Pop Music Prize', 'Fastest Violin Award', 'Best Stadium'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence about Hue:',
          promptVi: 'Đọc to câu miêu tả Cố đô Huế:',
          sampleSentence: 'The Perfume River in Hue flows gently past ancient royal tombs.',
          tips: 'Pronounce the "f" sound clearly in "Perfume" and soft "t" in "gent-ly".'
        },
        quiz: [
          {
            id: 'hue-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'Which dynasty chose Hue as the imperial capital of Vietnam?',
            questionVi: 'Triều đại phong kiến nào đã chọn Huế làm kinh đô của Việt Nam?',
            options: ['The Nguyen Dynasty', 'The Tran Dynasty', 'The Dinh Dynasty', 'The Ly Dynasty'],
            correctIndex: 0,
            explanationEn: 'The Nguyen Dynasty ruled Vietnam from Hue starting from 1802.',
            explanationVi: 'Nhà Nguyễn đã đặt kinh đô tại Huế từ năm 1802 đến năm 1945.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, cultural appreciation',
        vocabulary: [
          { word: 'Imperial', phonetic: '/ɪmˈpɪr.i.əl/', meaningEn: 'Relating to an empire, emperor, or majesty', meaningVi: 'Hoàng triều, đế vương', example: 'The imperial archives recorded dynastic edicts.' },
          { word: 'Intangible', phonetic: '/ɪnˈtæn.dʒə.bəl/', meaningEn: 'Not physical; existing as traditions, songs, and customs', meaningVi: 'Phi vật thể', example: 'Nha Nhac Court Music is intangible heritage.' },
          { word: 'Mausoleum', phonetic: '/ˌmɑː.zəˈliː.əm/', meaningEn: 'A grand stone tomb celebrating an emperor\'s life', meaningVi: 'Lăng tẩm hoàng gia', example: 'The Royal Tombs of Tu Duc are nestled in pine woods.' },
          { word: 'Architecture', phonetic: '/ˈɑːr.kə.tek.tʃɚ/', meaningEn: 'The art and design of erecting buildings', meaningVi: 'Nghệ thuật kiến trúc', example: 'Hue architecture features wooden columns and dragon roof ridges.' }
        ],
        reading: {
          titleEn: 'Royal Architecture and Natural Harmony',
          textEn: 'The architects of Hue did not simply build walls; they harmonized stone palaces with the natural landscape. In front of the Citadel, Mount Ngu Binh stands as a natural protective screen, while the curving Perfume River brings peaceful energy and balance. Beyond the city center, the royal tombs of emperors like Tu Duc and Khai Dinh were constructed as tranquil retreat gardens surrounded by pine forests and lotus lakes, illustrating how Vietnamese builders respected and elevated natural beauty.',
          textVi: 'Các kiến trúc sư triều Nguyễn không chỉ xây tường thành mà còn hòa quyện cung điện với cảnh quan thiên nhiên. Phía trước Kinh thành, núi Ngự Bình sừng sững như một bức bình phong che chắn, trong khi dòng sông Hương uốn lượn mang lại nguồn năng lượng an lành. Xa xa ngoài ngoại ô, lăng tẩm của các vị vua như Tự Đức, Khải Định được xây dựng như những khu vườn thiền thanh tịnh giữa rừng thông và hồ sen, cho thấy cha ông ta luôn tôn trọng và nâng niu vẻ đẹp thiên nhiên.'
        },
        listening: {
          audioScriptEn: 'Cultural guide note: Nha Nhac musicians used 8 instrument families called Bat Am: metal bells, stone chimes, silk strings, bamboo flutes, gourds, clay drums, leather drums, and wood castanets.',
          question: 'How many instrument families make up the traditional Bat Am ensemble in Hue court music?',
          options: ['Eight instrument families (Bat Am)', 'Only one drum', 'Twenty electric guitars', 'Two toy pianos'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this appreciation speech:',
          promptVi: 'Đọc câu ca ngợi vẻ đẹp văn hóa Huế:',
          sampleSentence: 'Hue represents a magnificent balance between human artistry and natural serenity.',
          tips: 'Enunciate "magnificent balance" and "serenity" clearly.'
        },
        quiz: [
          {
            id: 'hue-g4-1',
            bloomLevel: 'Understand',
            questionEn: 'How did the builders of Hue Citadel utilize natural geography in their masterplan?',
            questionVi: 'Các kiến trúc sư triều Nguyễn đã tận dụng địa hình tự nhiên ra sao khi quy hoạch Kinh thành?',
            options: [
              'They integrated Mount Ngu Binh as a protective front screen and the Perfume River as an auspicious water element',
              'They cut down all trees and flattened all hills',
              'They built entirely underwater',
              'They ignored the river completely'
            ],
            correctIndex: 0,
            explanationEn: 'The citadel masterplan incorporated Mount Ngu Binh as "Tien An" and the river as "Minh Duong" for natural protection and balance.',
            explanationVi: 'Quy hoạch kết hợp núi Ngự Bình làm tiền án che chắn và sông Hương làm minh đường phong thủy.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic presentation, Eastern philosophy',
        vocabulary: [
          { word: 'Geomancy', phonetic: '/ˈdʒiː.ə.mæn.si/', meaningEn: 'Eastern philosophical system (Feng Shui) balancing spatial energy', meaningVi: 'Thuật phong thủy phương Đông', example: 'Hue was planned according to ancient principles of geomancy.' },
          { word: 'Sovereignty', phonetic: '/ˈsɑːv.rən.ti/', meaningEn: 'Supreme authority and territorial integrity of a state', meaningVi: 'Chủ quyền quốc gia toàn vẹn', example: 'The royal dynastic urns in Hue Citadel record national maritime territory.' },
          { word: 'Restoration', phonetic: '/ˌres.təˈreɪ.ʃən/', meaningEn: 'Repairing and returning historic structures to their original state', meaningVi: 'Công tác trùng tu di sản', example: 'Thai Hoa Palace underwent meticulous wooden restoration.' },
          { word: 'Masterpiece', phonetic: '/ˈmæs.tɚ.piːs/', meaningEn: 'A work of outstanding artistry and human creative genius', meaningVi: 'Kiệt tác nhân loại', example: 'Nha Nhac Court Music is a UNESCO Masterpiece of Intangible Heritage.' }
        ],
        reading: {
          titleEn: 'Hue: The Philosophy of Royal Geomancy and Court Music',
          textEn: 'Serving as the political, cultural, and spiritual nucleus of the Nguyen Dynasty for 143 years, Hue is recognized worldwide for its unified complex of monuments. Constructed under strict principles of Eastern geomancy (Feng Shui), the Citadel incorporates Mount Ngu Binh as a natural front screen (Tien An) and the meandering Perfume River as an auspicious water element (Minh Duong). Complementing this architectural grandeur is Nha Nhac—the solemn royal court music performed during coronations and ancestral rites using sophisticated sets of bronze bells, stone chimes, and bamboo flutes. Preserving Hue entails both maintaining physical stone structures and revitalizing centuries of oral musical heritage.',
          textVi: 'Là trung tâm chính trị, văn hóa và tâm linh của triều Nguyễn suốt 143 năm, Cố đô Huế được thế giới vinh danh nhờ quần thể di tích kiến trúc độc đáo. Được xây dựng theo nguyên lý phong thủy phương Đông nghiêm ngặt, Kinh thành lấy núi Ngự Bình làm tiền án và dòng sông Hương êm đềm làm minh đường tụ thủy. Tôn vinh vẻ nguy nga ấy là Nhã nhạc cung đình—nghệ thuật diễn xướng trang trọng trong các đại lễ tế trời và lễ đăng quang với dàn chuông đồng, khánh đá và sáo trúc tinh xảo. Bảo tồn Cố đô Huế vừa là gìn giữ những công trình kiến trúc kiên cố vừa là trao truyền ngọn lửa di sản âm nhạc sống động.'
        },
        listening: {
          audioScriptEn: 'Acoustic research recording: Traditional court music ensembles in Hue utilized 8 categories of instruments (Bat Am) corresponding to materials: metal, stone, silk, bamboo, gourd, clay, leather, and wood to symbolize cosmic harmony.',
          question: 'What do the 8 instrument categories (Bat Am) symbolize in royal Hue music?',
          options: ['Cosmic balance and natural elements', 'Eight different food dishes', 'Eight fast race horses', 'Eight winter months'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this academic critique on cultural preservation:',
          promptVi: 'Đọc câu bình luận học thuật về bảo tồn di sản:',
          sampleSentence: 'The synthesis of Eastern geomancy and refined court music makes Hue a masterwork of human creative genius.',
          tips: 'Enunciate "geomancy" (GEE-oh-man-see) and "creative genius" with expressiveness.'
        },
        quiz: [
          {
            id: 'hue-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does the preservation of both tangible palaces and intangible Nha Nhac court music present a holistic view of Vietnamese cultural heritage?',
            questionVi: 'Vì sao việc bảo tồn đồng thời di tích vật thể và nhã nhạc phi vật thể lại mang lại cái nhìn toàn diện về văn hóa Việt Nam?',
            options: [
              'Because architecture provides the physical historical stage, while court music breathes living spiritual and artistic soul into the heritage space',
              'Because music makes stone walls heavier',
              'Because kings only cared about musical instruments',
              'Because modern tourists only like loud sounds'
            ],
            correctIndex: 0,
            explanationEn: 'Tangible monuments and intangible rituals together form an authentic, living cultural ecosystem.',
            explanationVi: 'Di tích vật thể tạo nên không gian lịch sử, trong khi di sản phi vật thể thổi bùng linh hồn văn hóa sống động.'
          }
        ]
      }
    )
  },

  // 4. DA NANG & HOI AN (Đà Nẵng & Hội An)
  {
    id: 'danang_hoian',
    name: 'Da Nang & Hoi An',
    vietnameseName: 'Đà Nẵng & Hội An',
    province: 'Đà Nẵng & Quảng Nam',
    region: 'Central',
    theme: 'Culture',
    geoCoordinates: { latitude: 16.054, longitude: 108.202 },
    coordinates: { x: 74, y: 47 },
    // AUTHENTIC PHOTO: Golden Bridge (Cau Vang) held by giant hands overlooking the misty Da Nang mountains
    image: '/destinations/danang_golden_bridge.jpg',
    photoAttribution: {
      author: 'Tran Tuan Viet / Verified Archive',
      source: 'Verified High-Resolution Photography',
      license: 'Educational Creative Commons License',
      landmark: 'Golden Bridge (Cầu Vàng Bà Nà Hills), Da Nang'
    },
    summaryEn: 'A dynamic coastal city featuring the Golden Dragon Bridge paired with the ancient glowing lantern town.',
    summaryVi: 'Thành phố biển hiện đại với Cầu Rồng phun lửa bên cạnh phố cổ Hội An rực rỡ sắc đèn lồng.',
    badge: {
      name: 'Central Coast Champion',
      icon: '🏮',
      titleEn: 'Lantern City Champion',
      titleVi: 'Đại Sứ Phố Đèn Lồng'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'Bridge', phonetic: '/brɪdʒ/', meaningEn: 'Crosses over a river', meaningVi: 'Cây cầu', example: 'Look at the giant bridge!', emoji: '🌉' },
          { word: 'Lantern', phonetic: '/ˈlæn.tɚn/', meaningEn: 'A pretty glowing paper or silk light', meaningVi: 'Đèn lồng', example: 'Colorful silk lanterns glow.', emoji: '🏮' },
          { word: 'Beach', phonetic: '/biːtʃ/', meaningEn: 'Sandy land by the ocean waves', meaningVi: 'Bãi biển', example: 'We play on the warm beach.', emoji: '🏖️' },
          { word: 'Fire', phonetic: '/faɪr/', meaningEn: 'Warm bright light from the dragon', meaningVi: 'Ngọn lửa', example: 'The dragon breathes fire!', emoji: '🔥' }
        ],
        reading: {
          titleEn: 'Bridges and Lanterns',
          textEn: 'Da Nang has a huge Dragon Bridge that breathes real fire! Nearby, Hoi An is full of bright yellow houses and shining silk lanterns. Children ride bicycles and smile happily!',
          textVi: 'Đà Nẵng có cây Cầu Rồng khổng lồ biết phun lửa thật! Gần đó, Hội An có những ngôi nhà quét vôi vàng tươi và đèn lồng lụa lấp lánh. Các bạn nhỏ đạp xe dạo chơi vui vẻ!'
        },
        listening: {
          audioScriptEn: 'Whoosh! Look up at the golden dragon! At night, the bridge lights up with yellow and blue lights.',
          question: 'What glows in the streets of Hoi An at night?',
          options: ['Colorful silk lanterns 🏮', 'Snowballs ❄️', 'Traffic lights 🚦', 'Alarm clocks ⏰'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this cheerful sentence:',
          promptVi: 'Đọc câu vui tươi về đèn lồng Hội An:',
          sampleSentence: 'Shining Silk Lanterns!',
          tips: 'Stress "Shi-ning" with excitement!'
        },
        quiz: [
          {
            id: 'dn-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'What special animal shape does Da Nang\'s famous bridge have?',
            questionVi: 'Cây cầu nổi tiếng ở Đà Nẵng mang hình dáng con vật nào?',
            options: ['A majestic Dragon 🐉', 'A Penguin 🐧', 'A Bear 🐻', 'A Frog 🐸'],
            correctIndex: 0,
            explanationEn: 'The bridge is in the shape of a majestic dragon!',
            explanationVi: 'Cây cầu được đúc theo hình tượng một chú rồng vàng dũng mãnh!'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Bridge', emoji: '🌉', meaningVi: 'Cây cầu' },
            { word: 'Lantern', emoji: '🏮', meaningVi: 'Đèn lồng' },
            { word: 'Beach', emoji: '🏖️', meaningVi: 'Bãi biển' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Bicycle', phonetic: '/ˈbaɪ.sə.kəl/', meaningEn: 'Two-wheeled pedal vehicle', meaningVi: 'Xe đạp', example: 'We ride bicycles in old streets.', emoji: '🚲' },
          { word: 'Yellow', phonetic: '/ˈjel.oʊ/', meaningEn: 'Warm sunshine color', meaningVi: 'Màu vàng ấm áp', example: 'Old houses are painted yellow.', emoji: '💛' },
          { word: 'River', phonetic: '/ˈrɪv.ɚ/', meaningEn: 'Water where wishing boats float', meaningVi: 'Dòng sông Hoài', example: 'Paper lanterns float on the river.', emoji: '🌊' },
          { word: 'Night', phonetic: '/naɪt/', meaningEn: 'When stars and lanterns shine', meaningVi: 'Buổi tối lung linh', example: 'The town shines at night.', emoji: '🌙' }
        ],
        reading: {
          titleEn: 'Cycling in Ancient Hoi An',
          textEn: 'In Hoi An, there are no noisy cars or motorbikes in the old town. You can rent a shiny bicycle and pedal past hundred-year-old wooden houses. In the evening, people light little paper flower candles and float them gently onto the Hoai River to make a wish for peace.',
          textVi: 'Tại phố cổ Hội An, xe máy và ô tô không được đi vào trung tâm phố đi bộ. Em có thể thuê một chiếc xe đạp xinh xắn dạo qua những ngôi nhà gỗ trăm tuổi. Buổi tối, mọi người thắp những ngọn nến hoa đăng nhỏ thả trôi êm đềm trên sông Hoài để cầu chúc bình an.'
        },
        listening: {
          audioScriptEn: 'Listen to the bicycle bell! Ring, ring! Children eat sweet mango cakes and watch colorful lanterns sway in the warm breeze.',
          question: 'What do people float onto the Hoai River to make a peaceful wish?',
          options: ['Glowing paper flower lanterns 🪷', 'Old plastic toys 🧸', 'Heavy rocks 🪨', 'Broken clocks ⏰'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this cheerful sentence:',
          promptVi: 'Đọc to câu miêu tả phố cổ Hội An:',
          sampleSentence: 'Glowing lanterns brighten up the ancient streets!',
          tips: 'Pronounce "bright-en up" with warmth and energy.'
        },
        quiz: [
          {
            id: 'dn-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'What color are most of the historic shophouses in Hoi An?',
            questionVi: 'Hầu hết các ngôi nhà cổ kính ở Hội An được quét vôi màu gì?',
            options: ['Bright Sunshine Yellow 💛', 'Dark Grey 🔘', 'Jet Black ⬛', 'Neon Green 🟢'],
            correctIndex: 0,
            explanationEn: 'Hoi An is famous worldwide for its iconic golden yellow walls!',
            explanationVi: 'Hội An nổi tiếng khắp thế giới với sắc vàng ấm áp của những ngôi nhà cổ!'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Lantern', phonetic: '/ˈlæn.tɚn/', meaningEn: 'A decorative light made of silk', meaningVi: 'Đèn lồng lụa', example: 'Hoi An is lit with silk lanterns.' },
          { word: 'Bridge', phonetic: '/brɪdʒ/', meaningEn: 'A structure built over a river', meaningVi: 'Cây cầu bắc qua sông', example: 'The Dragon Bridge breathes fire on weekends.' },
          { word: 'Coastline', phonetic: '/ˈkoʊst.laɪn/', meaningEn: 'Land along the ocean with sandy beaches', meaningVi: 'Bờ biển cát trắng', example: 'Da Nang has long white coastlines.' },
          { word: 'Hospitality', phonetic: '/ˌhɑː.spɪˈtæl.ə.t̬i/', meaningEn: 'Warm and friendly welcoming behavior', meaningVi: 'Lòng hiếu khách mến thương', example: 'Locals are famous for their hospitality.' }
        ],
        reading: {
          titleEn: 'Bridges and Lanterns of Central Vietnam',
          textEn: 'Da Nang is known as the city of fantastic bridges. Crossing the Han River, the giant Dragon Bridge shines with thousands of LED lights. On Saturday and Sunday nights, children cheer as the dragon breathes real fire and spray water into the cool air! Just thirty minutes south is Hoi An, a peaceful UNESCO ancient town. In Hoi An, cars are not allowed in the center. Instead, visitors ride bicycles past cheerful yellow-walled houses, across the wooden Japanese Covered Bridge, and float wishing lanterns down the Hoai River.',
          textVi: 'Đà Nẵng được mệnh danh là thành phố của những cây cầu tuyệt đẹp. Bắt qua sông Hàn, cây Cầu Rồng khổng lồ tỏa sáng với hàng ngàn ánh đèn LED. Vào tối thứ Bảy và Chủ Nhật, các bạn nhỏ thích thú reo hò khi rồng phun lửa và phun nước vào không trung mát lành! Chỉ cách đó 30 phút về phía nam là Hội An, một đô thị cổ thanh bình được UNESCO công nhận. Ở Hội An, ô tô không được đi vào trung tâm phố cổ. Thay vào đó, du khách đạp xe qua những ngôi nhà quét vôi vàng tươi, bước qua Chùa Cầu gỗ cổ kính và thả đèn hoa đăng lung linh trên dòng sông Hoài.'
        },
        listening: {
          audioScriptEn: 'Attention all passengers! On Saturday evening at 9 PM, the Dragon Bridge will perform its famous fire and water breathing show. Please stay behind the safety yellow lines!',
          question: 'What time does the Dragon Bridge show start on Saturday evening?',
          options: ['9:00 PM', '6:00 AM', '12:00 Midnight', '3:00 PM'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Practice saying this sentence with clear expression:',
          promptVi: 'Luyện nói câu miêu tả Hội An:',
          sampleSentence: 'Colorful silk lanterns brighten up the ancient streets of Hoi An.',
          tips: 'Make the "b" sound punchy in "brighten" and pronounce "lan-terns" clearly.'
        },
        quiz: [
          {
            id: 'dn-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'Which animal inspires the design of Da Nang\'s most famous weekend show bridge?',
            questionVi: 'Cây cầu trình diễn phun lửa cuối tuần ở Đà Nẵng mang hình dáng con vật nào?',
            options: ['A majestic Dragon', 'A Sea Turtle', 'A Parrot', 'A Dolphin'],
            correctIndex: 0,
            explanationEn: 'The Dragon Bridge is shaped like a golden dragon flying across the Han River.',
            explanationVi: 'Cầu Rồng được thiết kế theo hình tượng con rồng vàng thời Lý bay qua sông Hàn.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, trade history',
        vocabulary: [
          { word: 'Merchant', phonetic: '/ˈmɝː.tʃənt/', meaningEn: 'A person who buys and sells goods internationally', meaningVi: 'Thương nhân quốc tế', example: 'Merchants from Japan traded silk in Hoi An.' },
          { word: 'Port', phonetic: '/pɔːrt/', meaningEn: 'A harbor town where trading ships arrive', meaningVi: 'Thương cảng', example: 'Hoi An was a thriving international port.' },
          { word: 'Covered Bridge', phonetic: '/ˈkʌv.ɚd brɪdʒ/', meaningEn: 'A bridge with a tiled roof protecting pedestrians', meaningVi: 'Cầu có mái ngói (Chùa Cầu)', example: 'The Japanese Covered Bridge is over 400 years old.' },
          { word: 'Preservation', phonetic: '/ˌprez.ɚˈveɪ.ʃən/', meaningEn: 'Keeping something safe from decay or demolition', meaningVi: 'Sự bảo tồn nguyên vẹn', example: 'Strict laws protect the wooden shophouses of Hoi An.' }
        ],
        reading: {
          titleEn: 'The Meeting Place of Merchants',
          textEn: 'Between the 15th and 19th centuries, Hoi An was one of the busiest international trading ports in Southeast Asia. Merchant ships from Japan, China, the Netherlands, and Portugal sailed up the Thu Bon River loaded with spices, porcelain, and silk. Because merchants stayed for many months waiting for seasonal monsoon winds, they built sturdy wooden community halls and houses combining Vietnamese tile roofs with Japanese wooden brackets and Chinese calligraphy carvings. The Japanese Covered Bridge (Chua Cau) remains a historic symbol of friendship between diverse cultures.',
          textVi: 'Từ thế kỷ 15 đến thế kỷ 19, Hội An là một trong những thương cảng quốc tế sầm uất nhất Đông Nam Á. Thuyền buôn từ Nhật Bản, Trung Hoa, Hà Lan và Bồ Đào Nha xuôi ngược trên dòng sông Thu Bồn chở đầy tơ lụa, gốm sứ và hương liệu. Do thương nhân phải lưu lại nhiều tháng chờ gió mùa đổi hướng, họ đã dựng nên những ngôi nhà gỗ và hội quán kiên cố kết hợp mái ngói âm dương Việt Nam với rường cột Nhật Bản và chạm khắc Trung Hoa. Chùa Cầu là biểu tượng lịch sử minh chứng cho tình hữu nghị hòa bình giữa các nền văn hóa.'
        },
        listening: {
          audioScriptEn: 'Historical maritime archive: The Japanese Covered Bridge in Hoi An was constructed in the early 17th century by Japanese traders to link the Japanese quarter with the Chinese quarter across the canal.',
          question: 'Who originally built the Japanese Covered Bridge (Chua Cau) in Hoi An?',
          options: ['Japanese merchant community', 'Roman architects', 'Modern construction engineers', 'French sailors in 1950'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this speech on cultural harmony:',
          promptVi: 'Đọc to nhận định về giao thoa văn hóa:',
          sampleSentence: 'The architectural harmony of Hoi An demonstrates centuries of peaceful international trade.',
          tips: 'Emphasize "architectural harmony" and "peaceful international trade".'
        },
        quiz: [
          {
            id: 'dn-g4-1',
            bloomLevel: 'Understand',
            questionEn: 'Why did ancient merchant ships stay in Hoi An for several months at a time?',
            questionVi: 'Vì sao thuyền buôn quốc tế ngày xưa thường lưu lại Hội An suốt nhiều tháng?',
            options: [
              'They had to wait for seasonal monsoon winds to sail back home safely',
              'Their ships broke down every time',
              'They forgot where their countries were',
              'They were hiding from sea monsters'
            ],
            correctIndex: 0,
            explanationEn: 'Sailing ships relied on trade winds (monsoons) to cross the oceans.',
            explanationVi: 'Tàu buồm ngày xưa phụ thuộc vào các đợt gió mùa định kỳ để giong buồm vượt đại dương về nước.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic presentation, smart city development',
        vocabulary: [
          { word: 'Maritime Trade', phonetic: '/ˈmær.ə.taɪm treɪd/', meaningEn: 'Commercial shipping and exchange of goods across international seas', meaningVi: 'Thương mại hàng hải', example: 'Hoi An was a preeminent international maritime trading port from the 15th to 19th centuries.' },
          { word: 'Cosmopolitan', phonetic: '/ˌkɑːz.məˈpɑː.lɪ.t̬ən/', meaningEn: 'Including people and elements from many different countries', meaningVi: 'Giao thoa quốc tế', example: 'The architecture represents a cosmopolitan blend of Vietnamese, Japanese, and Chinese styles.' },
          { word: 'Infrastructure', phonetic: '/ˈɪn.frəˌstrʌk.tʃɚ/', meaningEn: 'The basic physical systems of a modern city like bridges and transport', meaningVi: 'Cơ sở hạ tầng hiện đại', example: 'Da Nang is hailed for its progressive smart-city infrastructure.' },
          { word: 'Preservation', phonetic: '/ˌprez.ɚˈveɪ.ʃən/', meaningEn: 'Keeping something safe from decay, loss, or destruction', meaningVi: 'Sự gìn giữ, bảo tồn', example: 'Strict zoning regulations guarantee the authentic preservation of Hoi An\'s wooden shophouses.' }
        ],
        reading: {
          titleEn: 'From Silk Route Port to Modern Coastal Smart City',
          textEn: 'Situated along the central coast, Da Nang and Hoi An illustrate Vietnam\'s remarkable capacity to bridge centuries of trade heritage with cutting-edge 21st-century urbanization. Hoi An, formerly known as Faifo, flourished as a prominent Asian maritime hub where merchants from Japan, China, Portugal, and the Netherlands traded silk, porcelain, and spices. Its unique architectural fabric remains miraculously intact due to active civic conservation. Concurrently, Da Nang has emerged as Vietnam\'s benchmark for high-tech industrial parks, environmental cleanliness, and award-winning bridge engineering, illustrating how coastal connectivity fuels sustainable national development.',
          textVi: 'Nằm dọc theo dải duyên hải miền Trung, Đà Nẵng và Hội An là minh chứng cho năng lực kết nối tuyệt vời giữa di sản thương cảng nhiều thế kỷ với đô thị hóa hiện đại thế kỷ 21. Hội An, từng được biết đến với tên gọi Faifo, từng là thương cảng quốc tế sầm uất nơi thương nhân Nhật Bản, Trung Hoa, Bồ Đào Nha và Hà Lan cập bến trao đổi tơ lụa, gốm sứ và hương liệu. Không gian kiến trúc gỗ độc đáo của phố cổ được bảo tồn gần như nguyên vẹn nhờ ý thức cộng đồng cao. Song hành cùng đó, Đà Nẵng vươn mình trở thành đô thị thông minh tiêu biểu về công nghệ cao, môi trường xanh sạch và những công trình cầu đường tầm cỡ quốc tế.'
        },
        listening: {
          audioScriptEn: 'Historical maritime archive: The Japanese Covered Bridge (Chua Cau) in Hoi An was constructed in the early 17th century by the local Japanese merchant community to link Japanese and Chinese trading quarters across the stream.',
          question: 'Why was Hoi An able to preserve its historic timber architecture while many other Asian trading ports modernized completely?',
          options: [
            'Because river silt shifted commercial shipping to Da Nang in the 19th century, leaving Hoi An preserved from heavy industrial redevelopment',
            'Because nobody lived there for five hundred years',
            'Because it was built inside a cave',
            'Because wooden houses cannot be rebuilt'
          ],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this speech on cultural fusion:',
          promptVi: 'Đọc to câu nhận định về sự giao thoa văn hóa:',
          sampleSentence: 'The architectural harmony of Hoi An demonstrates centuries of peaceful international trade and cultural synthesis.',
          tips: 'Emphasize "architectural harmony" and "peaceful international trade".'
        },
        quiz: [
          {
            id: 'dn-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does modern Da Nang balance high-tech growth with environmental quality along its beaches?',
            questionVi: 'Đà Nẵng hiện đại đã cân bằng giữa phát triển công nghệ cao và giữ gìn môi trường biển thế nào?',
            options: [
              'By establishing green industrial zones and strictly monitoring public beaches to keep coastal waters pristine',
              'By dumping industrial chemicals into the ocean',
              'By banning all computers from the city',
              'By cutting down all coconut trees along the coast'
            ],
            correctIndex: 0,
            explanationEn: 'Da Nang maintains eco-industrial zones and active clean-beach stewardship.',
            explanationVi: 'Đà Nẵng tiên phong quy hoạch các khu công nghiệp sạch và quản lý bãi biển văn minh.'
          }
        ]
      }
    )
  },

  // 5. DA LAT PINE CITY (Thành phố Ngàn hoa Đà Lạt)
  {
    id: 'dalat',
    name: 'Da Lat Pine City',
    vietnameseName: 'Thành phố Ngàn Hoa Đà Lạt',
    province: 'Lâm Đồng',
    region: 'Central',
    theme: 'Nature',
    geoCoordinates: { latitude: 11.940, longitude: 108.458 },
    coordinates: { x: 65, y: 72 },
    // AUTHENTIC PHOTO: Mist-shrouded green pine hills, Xuan Huong Lake & flowers
    image: '/destinations/dalat_pine_hills.jpg',
    photoAttribution: {
      author: 'Wikimedia Commons',
      source: 'Wikimedia Commons',
      license: 'CC BY-SA 4.0 / Educational Public Domain',
      landmark: 'Xuan Huong Lake & Pine Hills (Hồ Xuân Hương), Da Lat'
    },
    summaryEn: 'The dreamy city of eternal spring nestled amidst pine hills, vibrant flower gardens, and sparkling lakes.',
    summaryVi: 'Thành phố sương mù mộng mơ với đồi thông xanh ngát, ngàn hoa đua nở và hồ Xuân Hương thơ mộng.',
    badge: {
      name: 'Da Lat Flower Ranger',
      icon: '🌸',
      titleEn: 'Highland Flower Ranger',
      titleVi: 'Kiểm Lâm Viên Rừng Thông'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'Flower', phonetic: '/ˈflaʊ.ɚ/', meaningEn: 'A sweet-smelling colorful blossom', meaningVi: 'Bông hoa', example: 'Look at the pink flower!', emoji: '🌸' },
          { word: 'Pine Tree', phonetic: '/paɪn triː/', meaningEn: 'A tall green evergreen tree', meaningVi: 'Cây thông', example: 'Green pine trees grow high.', emoji: '🌲' },
          { word: 'Cloud', phonetic: '/klaʊd/', meaningEn: 'Soft white mist in the cool sky', meaningVi: 'Đám mây / Sương mù', example: 'White clouds float in the valley.', emoji: '☁️' },
          { word: 'Strawberry', phonetic: '/ˈstrɑːˌber.i/', meaningEn: 'A sweet red berry', meaningVi: 'Quả dâu tây', example: 'I eat a sweet strawberry.', emoji: '🍓' }
        ],
        reading: {
          titleEn: 'The City in the Clouds',
          textEn: 'Da Lat is cool and breezy! Green pine trees wave in the wind. Beautiful hydrangeas and roses bloom in every yard. Children pick sweet red strawberries in sunny gardens!',
          textVi: 'Đà Lạt mát lành và lộng gió! Những hàng thông xanh reo vui trong gió. Hoa cẩm tú cầu và hoa hồng khoe sắc ở mọi góc sân. Các bạn nhỏ hào hứng hái những quả dâu tây đỏ mọng trong vườn nắng!'
        },
        listening: {
          audioScriptEn: 'Listen to the highland breeze! Whoosh! The wind whispers gently through the tall pine forest.',
          question: 'What delicious red fruit do children pick in Da Lat?',
          options: ['Sweet Strawberries 🍓', 'Salty Potato Chips 🍟', 'Spicy Peppers 🌶️', 'Green Onions 🧅'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this sweet sentence:',
          promptVi: 'Đọc câu miêu tả Đà Lạt mát mẻ:',
          sampleSentence: 'Cool Pine Trees and Fresh Flowers!',
          tips: 'Smile and say "Fresh Flow-ers" with joy!'
        },
        quiz: [
          {
            id: 'dl-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'Why is Da Lat famous for its weather?',
            questionVi: 'Vì sao Đà Lạt nổi tiếng với thời tiết của mình?',
            options: ['It is pleasantly cool all year round 🌸', 'It is a boiling hot desert 🏜️', 'It is frozen in ice forever ❄️', 'It has no sunshine 🌑'],
            correctIndex: 0,
            explanationEn: 'Da Lat is nestled on a high plateau with pleasant spring weather all year!',
            explanationVi: 'Đà Lạt nằm trên cao nguyên nên có khí hậu mát mẻ như mùa xuân quanh năm!'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Flower', emoji: '🌸', meaningVi: 'Bông hoa' },
            { word: 'Pine Tree', emoji: '🌲', meaningVi: 'Cây thông' },
            { word: 'Strawberry', emoji: '🍓', meaningVi: 'Quả dâu tây' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Valley', phonetic: '/ˈvæl.i/', meaningEn: 'Low land between green hills', meaningVi: 'Thung lũng', example: 'The Valley of Love is green.', emoji: '🏞️' },
          { word: 'Waterfall', phonetic: '/ˈwɑː.t̬ɚ.fɑːl/', meaningEn: 'Water falling over a rocky cliff', meaningVi: 'Thác nước', example: 'Datanla waterfall splashes white.', emoji: '🌊' },
          { word: 'Cool', phonetic: '/kuːl/', meaningEn: 'Pleasantly cold and fresh', meaningVi: 'Mát mẻ dễ chịu', example: 'The weather is cool in the hills.', emoji: '🍃' },
          { word: 'Garden', phonetic: '/ˈɡɑːr.dən/', meaningEn: 'Ground planted with flowers and vegetables', meaningVi: 'Vườn hoa', example: 'We walk in the flower garden.', emoji: '🌷' }
        ],
        reading: {
          titleEn: 'A Morning by Xuan Huong Lake',
          textEn: 'In the morning, Xuan Huong Lake is covered in a soft blanket of mist. You can wear a warm woolen sweater and ride a swan paddleboat on the calm water. Along the lakeside, bright yellow wild sunflowers bloom every autumn, turning the mountains into golden carpets.',
          textVi: 'Vào buổi sáng sớm, hồ Xuân Hương phủ một tấm khăn sương mù mỏng manh. Em có thể mặc chiếc áo len ấm áp và đạp thuyền thiên nga trên mặt hồ phẳng lặng. Dọc theo triền đồi, hoa dã quỳ vàng rực nở rộ mỗi độ thu về, biến sườn núi thành những tấm thảm vàng rực rỡ.'
        },
        listening: {
          audioScriptEn: 'Splash, splash! The swan boat glides across Xuan Huong Lake. The morning air smells like pine needles and fresh roses.',
          question: 'What do people wear in the cool morning air of Da Lat?',
          options: ['Warm woolen sweaters 🧥', 'Heavy swimming fins 🤿', 'Paper hats 🎩', 'Space helmets 🧑‍🚀'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence about Da Lat:',
          promptVi: 'Đọc to câu miêu tả hồ Xuân Hương:',
          sampleSentence: 'The calm lake reflects green pine hills in the morning mist.',
          tips: 'Pronounce "re-flects" and "morn-ing mist" clearly.'
        },
        quiz: [
          {
            id: 'dl-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'Which famous wild yellow flower blooms across the hills of Da Lat every autumn?',
            questionVi: 'Loài hoa dại màu vàng rực rỡ nào nở khắp triền đồi Đà Lạt vào mùa thu?',
            options: ['Wild Sunflower (Dã Quỳ) 🌻', 'Blue Lotus 🪷', 'Cactus Flower 🌵', 'White Snowdrop ❄️'],
            correctIndex: 0,
            explanationEn: 'Wild sunflowers (Hoa Dã Quỳ) paint the hills of Da Lat in vivid yellow every autumn!',
            explanationVi: 'Hoa dã quỳ nở rộ báo hiệu mùa khô và khoác lên phố núi một sắc vàng rực rỡ!'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Plateau', phonetic: '/plæˈtoʊ/', meaningEn: 'A large high area of flat land', meaningVi: 'Cao nguyên Lang Biang', example: 'Da Lat sits on the Lang Biang plateau.' },
          { word: 'Breeze', phonetic: '/briːz/', meaningEn: 'A gentle, refreshing wind', meaningVi: 'Làn gió mát lành', example: 'A fresh pine breeze cools the town.' },
          { word: 'Hydrangea', phonetic: '/haɪˈdreɪn.dʒə/', meaningEn: 'A big round flower that changes color with soil', meaningVi: 'Hoa cẩm tú cầu', example: 'Big blue hydrangeas bloom in the garden.' },
          { word: 'Vegetation', phonetic: '/ˌvedʒ.əˈteɪ.ʃən/', meaningEn: 'Plants, trees, and flowers considered collectively', meaningVi: 'Thảm thực vật', example: 'The high altitude supports unique temperate vegetation.' }
        ],
        reading: {
          titleEn: 'Da Lat: The City of Eternal Spring',
          textEn: 'Located 1,500 meters above sea level on the Lang Biang Plateau in Lam Dong Province, Da Lat enjoys mild temperate weather all year round. In 1893, the Swiss-French physician Alexandre Yersin explored these cool highlands and suggested building a resort city here. Today, Da Lat is Vietnam\'s premier agricultural center for clean vegetables, Arabica coffee, and colorful flowers like hydrangeas, lavender, and orchids. Cycling past French colonial villas and smelling fresh pine needles makes Da Lat an unforgettable mountain retreat.',
          textVi: 'Tọa lạc ở độ cao 1.500m so với mực nước biển trên cao nguyên Lang Biang thuộc tỉnh Lâm Đồng, Đà Lạt quanh năm mát mẻ như mùa xuân. Năm 1893, bác sĩ Alexandre Yersin đã đặt chân thám hiểm cao nguyên này và đề xuất xây dựng một thành phố nghỉ dưỡng. Ngày nay, Đà Lạt là trung tâm nông nghiệp công nghệ cao hàng đầu Việt Nam về rau sạch, cà phê Arabica và các loài hoa rực rỡ như cẩm tú cầu, oải hương và phong lan. Đạp xe qua những ngôi biệt thự cổ và hít hà hương thông ngát khiến Đà Lạt trở thành điểm đến khó quên.'
        },
        listening: {
          audioScriptEn: 'Travel advisory: Did you know that Da Lat is famous for having no traffic lights? Traffic flows smoothly around gentle roundabouts surrounded by flower beds.',
          question: 'What modern street feature is traditionally absent in the center of Da Lat?',
          options: ['Traffic lights 🚦', 'Flower gardens 🌺', 'Pine trees 🌲', 'Lakes 🌊'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Practice saying this sentence with clear expression:',
          promptVi: 'Luyện nói câu giới thiệu về Đà Lạt:',
          sampleSentence: 'Da Lat is famous for fresh pine air, sweet strawberries, and endless flower gardens.',
          tips: 'Pronounce "pine air" and "end-less" smoothly.'
        },
        quiz: [
          {
            id: 'dl-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'How high is Da Lat above sea level?',
            questionVi: 'Đà Lạt nằm ở độ cao khoảng bao nhiêu mét so với mực nước biển?',
            options: ['1,500 meters', '50 meters', '10,000 meters', 'At sea level'],
            correctIndex: 0,
            explanationEn: 'Da Lat is situated on the Lang Biang plateau at 1,500 meters above sea level.',
            explanationVi: 'Đà Lạt tọa lạc trên cao nguyên Lang Biang ở độ cao 1.500m.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, agriculture and science',
        vocabulary: [
          { word: 'High-Tech Farming', phonetic: '/haɪ tek ˈfɑːr.mɪŋ/', meaningEn: 'Using automated greenhouses and sensor drip irrigation to grow crops', meaningVi: 'Nông nghiệp công nghệ cao', example: 'Greenhouses use sensor drip irrigation to grow clean strawberries.' },
          { word: 'Temperate', phonetic: '/ˈtem.pɚ.ət/', meaningEn: 'Mild climate without extreme heat or freezing cold', meaningVi: 'Khí hậu ôn đới', example: 'Da Lat has a temperate highland climate.' },
          { word: 'Ecotourism', phonetic: '/ˈiː.koʊˌtʊr.ɪ.zəm/', meaningEn: 'Responsible travel to natural areas conserving the environment', meaningVi: 'Du lịch sinh thái bền vững', example: 'Pine hill trekking is popular in ecotourism.' },
          { word: 'Watershed', phonetic: '/ˈwɑː.t̬ɚ.ʃed/', meaningEn: 'An area of land that channels rainfall into rivers and lakes', meaningVi: 'Lưu vực đầu nguồn', example: 'Protecting pine forests preserves water tables.' }
        ],
        reading: {
          titleEn: 'Green Agriculture in the Highlands',
          textEn: 'Da Lat has transformed from a quiet colonial hill station into Vietnam\'s capital of high-tech green farming. In modern glass and plastic greenhouses, farmers use computer-controlled drip irrigation and organic pest management to harvest premium bell peppers, crisp lettuces, and sweet strawberries without chemical runoff. Furthermore, scientists at Da Lat University study biological tissue culture to clone disease-free orchids. This blend of highland climate and scientific innovation makes Da Lat a model of sustainable agriculture.',
          textVi: 'Đà Lạt đã chuyển mình từ một phố núi nghỉ dưỡng thành thủ phủ nông nghiệp công nghệ cao của cả nước. Trong các nhà kính hiện đại, người nông dân ứng dụng hệ thống tưới nhỏ giọt tự động và kiểm soát sinh học để thu hoạch ớt chuông, xà lách giòn và dâu tây ngọt lành mà không gây ô nhiễm đất. Thêm vào đó, các nhà khoa học tại Đại học Đà Lạt đang ứng dụng nuôi cấy mô để nhân giống hoa lan sạch bệnh. Sự kết hợp giữa khí hậu ưu đãi và khoa học hiện đại giúp Đà Lạt trở thành hình mẫu nông nghiệp bền vững.'
        },
        listening: {
          audioScriptEn: 'Agricultural bulletin: Sensor systems inside Da Lat greenhouses automatically adjust ventilation and water mist to maintain optimal growing temperatures of 20 to 24 degrees Celsius.',
          question: 'What do automated greenhouse sensors in Da Lat control?',
          options: ['Ventilation and water mist for optimal plant growth', 'Car alarms on the highway', 'Airplane landing radar', 'Television games'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence on agricultural innovation:',
          promptVi: 'Đọc to nhận định về nông nghiệp công nghệ cao:',
          sampleSentence: 'High-tech agriculture in Da Lat combines environmental care with modern food production.',
          tips: 'Enunciate "high-tech agriculture" and "modern food production" clearly.'
        },
        quiz: [
          {
            id: 'dl-g4-1',
            bloomLevel: 'Apply',
            questionEn: 'How does automated greenhouse drip irrigation save water in Da Lat?',
            questionVi: 'Hệ thống tưới nhỏ giọt tự động trong nhà kính ở Đà Lạt giúp tiết kiệm nước như thế nào?',
            options: [
              'It delivers precise droplets of water directly to plant roots, preventing wasteful evaporation',
              'It dumps ocean water onto dry mountains',
              'It stops plants from ever drinking water',
              'It washes mud into city streets'
            ],
            correctIndex: 0,
            explanationEn: 'Drip irrigation delivers water and nutrients directly to roots with minimal waste.',
            explanationVi: 'Tưới nhỏ giọt đưa nước và dinh dưỡng trực tiếp vào gốc rễ, giảm thất thoát do bay hơi.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic presentation, biodiversity conservation',
        vocabulary: [
          { word: 'Biosphere Reserve', phonetic: '/ˈbaɪ.oʊ.sfɪr rɪˈzɝːv/', meaningEn: 'An internationally designated protected ecosystem', meaningVi: 'Khu dự trữ sinh quyển thế giới', example: 'Bidoup Nui Ba National Park is part of a UNESCO Biosphere Reserve.' },
          { word: 'Microclimate', phonetic: '/ˈmaɪ.kroʊˌklaɪ.mət/', meaningEn: 'The climate of a very small or restricted area differing from surrounding regions', meaningVi: 'Tiểu khí hậu đặc thù', example: 'The misty valleys create unique moss and fern microclimates.' },
          { word: 'Endemic Flora', phonetic: '/enˈdem.ɪk ˈflɔːr.ə/', meaningEn: 'Plant species native exclusively to a specific geographic territory', meaningVi: 'Hệ thực vật bản địa đặc hữu', example: 'The Pinus krempfii flat-needle pine is endemic to these mountains.' },
          { word: 'Urban Planning', phonetic: '/ˈɝː.bən ˈplæn.ɪŋ/', meaningEn: 'Designing infrastructure to balance urban expansion with green spaces', meaningVi: 'Quy hoạch đô thị xanh', example: 'Preserving green tree belts is essential in Da Lat\'s urban planning.' }
        ],
        reading: {
          titleEn: 'Da Lat & Bidoup: Biodiversity Sanctuary of the Central Highlands',
          textEn: 'Rising above the Lang Biang plateau, Da Lat is enveloped by the pristine evergreen forests of the Langbiang UNESCO World Biosphere Reserve, centered around Bidoup Nui Ba National Park. This highland sanctuary harbors ancient coniferous trees dating back hundreds of years, including the rare two-flat-needle pine (Pinus krempfii), a living botanical fossil found nowhere else on Earth. Furthermore, the misty cloud forests serve as an indispensable watershed catchment, feeding major rivers that supply clean drinking water and irrigation to millions downstream across southern Vietnam. Balancing urban growth with rigorous watershed conservation remains Da Lat\'s most vital environmental mission.',
          textVi: 'Vươn mình trên cao nguyên Lang Biang, Đà Lạt được bao bọc bởi những cánh rừng nguyên sinh xanh ngát thuộc Khu dự trữ sinh quyển thế giới Langbiang, với hạt nhân là Vườn quốc gia Bidoup - Núi Bà. Khu bảo tồn này là nơi sinh sống của nhiều loài cổ thụ hàng trăm năm tuổi, tiêu biểu là loài thông hai lá dẹt (Pinus krempfii)—hóa thạch sống thực vật không thể tìm thấy ở bất kỳ nơi nào khác trên Trái Đất. Thêm vào đó, rừng sương mù đóng vai trò là lưu vực đầu nguồn vô cùng quan trọng, nuôi dưỡng các dòng sông lớn cung cấp nước sinh hoạt và tưới tiêu cho hàng triệu người dân phía Nam. Cân bằng giữa phát triển đô thị và bảo vệ rừng đầu nguồn là sứ mệnh sống còn của Đà Lạt.'
        },
        listening: {
          audioScriptEn: 'Botanical expedition report: Scientists have cataloged over 300 bird species and dozens of rare endemic orchids within the Bidoup Nui Ba cloud forest microclimates.',
          question: 'Why is the two-flat-needle pine (Pinus krempfii) considered scientifically extraordinary?',
          options: [
            'Because it is an ancient endemic botanical fossil found nowhere else on Earth',
            'Because it grows underwater in the ocean',
            'Because its leaves are made of plastic',
            'Because it blooms flowers in one minute'
          ],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Deliver this environmental stewardship speech:',
          promptVi: 'Đọc lời thuyết trình bảo vệ rừng đầu nguồn:',
          sampleSentence: 'Protecting the ancient pine watersheds of Da Lat secures freshwater and climate resilience for southern Vietnam.',
          tips: 'Enunciate "ancient pine watersheds" with authority and conviction.'
        },
        quiz: [
          {
            id: 'dl-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does conserving the high-altitude cloud forests of Bidoup Nui Ba directly benefit communities far downstream in southern Vietnam?',
            questionVi: 'Việc bảo tồn rừng sương mù trên đỉnh Bidoup mang lại lợi ích trực tiếp nào cho người dân ở hạ lưu phương Nam?',
            options: [
              'The highland forests act as a natural sponge, absorbing monsoon rainfall, preventing devastating flash floods, and ensuring steady clean river flow during dry seasons',
              'It sends snow downstream to make ice cubes',
              'It blocks all wind from reaching other cities',
              'It stops trains from running on railways'
            ],
            correctIndex: 0,
            explanationEn: 'Highland cloud forests act as natural hydrological sponges regulating water flow and preventing catastrophic downstream droughts and floods.',
            explanationVi: 'Rừng đầu nguồn như một miếng bọt biển khổng lồ, điều tiết nước mưa, ngăn lũ quét mùa mưa và chống hạn hán mùa khô.'
          }
        ]
      }
    )
  },

  // 6. HO CHI MINH CITY (Thành phố Hồ Chí Minh - Modern Skyline, Saigon River & Innovation)
  {
    id: 'hochiminh',
    name: 'Ho Chi Minh City',
    vietnameseName: 'Thành phố Hồ Chí Minh',
    province: 'Thành phố Hồ Chí Minh',
    region: 'South',
    theme: 'Modern Innovation',
    geoCoordinates: { latitude: 10.823, longitude: 106.630 },
    coordinates: { x: 58, y: 79 },
    // AUTHENTIC PHOTO: Saigon River skyline featuring Landmark 81 soaring into the sunset clouds
    image: '/destinations/hcmc_skyline.jpg',
    photoAttribution: {
      author: 'Wikimedia Commons',
      source: 'Wikimedia Commons',
      license: 'CC BY-SA 4.0 / Educational Public Domain',
      landmark: 'Landmark 81 & Saigon Skyline Sunset, Ho Chi Minh City'
    },
    summaryEn: 'The energetic economic and technology metropolis of Vietnam, full of history, innovation, and warm smiles.',
    summaryVi: 'Đô thị kinh tế và công nghệ sôi động bậc nhất Việt Nam, giàu truyền thống lịch sử, đổi mới sáng tạo và lòng mến khách.',
    badge: {
      name: 'Future Innovator',
      icon: '🚀',
      titleEn: 'Smart City Innovation Star',
      titleVi: 'Ngôi Sao Sáng Tạo Trẻ'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'Tall', phonetic: '/tɑːl/', meaningEn: 'Reaching high up into the clouds', meaningVi: 'Cao vút', example: 'The building is very tall!', emoji: '🏙️' },
          { word: 'Rocket', phonetic: '/ˈrɑː.kɪt/', meaningEn: 'Flies fast into the sky', meaningVi: 'Tên lửa / Tòa tháp', example: 'Landmark 81 looks like a rocket.', emoji: '🚀' },
          { word: 'River', phonetic: '/ˈrɪv.ɚ/', meaningEn: 'Water where ships sail by', meaningVi: 'Sông Sài Gòn', example: 'Boats sail on Saigon River.', emoji: '🚢' },
          { word: 'Smile', phonetic: '/smaɪl/', meaningEn: 'A happy welcoming face expression', meaningVi: 'Nụ cười', example: 'Friendly people smile at you.', emoji: '😊' }
        ],
        reading: {
          titleEn: 'Sunny City Adventure',
          textEn: 'Ho Chi Minh City is bright and sunny! Super tall buildings reach up to the clouds. Ships wave hello on the Saigon River. Everyone has a warm, welcoming smile!',
          textVi: 'Thành phố Hồ Chí Minh rực rỡ nắng ấm! Những tòa nhà chọc trời vươn tới trời mây. Tàu thuyền qua lại chào nhau trên sông Sài Gòn. Mọi người đều nở nụ cười ấm áp thân thiện!'
        },
        listening: {
          audioScriptEn: 'Beep beep! Ships sail along the Saigon River carrying fruit and toys into the city harbor.',
          question: 'What river flows through Ho Chi Minh City?',
          options: ['Saigon River 🚢', 'Snow River ⛄', 'Candyland River 🍭', 'Moon River 🌙'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this energetic phrase:',
          promptVi: 'Đọc to cụm từ sôi động này:',
          sampleSentence: 'Super Tall Skyscraper!',
          tips: 'Put enthusiasm and high energy into "Su-per Tall"!'
        },
        quiz: [
          {
            id: 'hcm-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'Which giant skyscraper in the city reaches into the clouds?',
            questionVi: 'Tòa nhà chọc trời nổi tiếng vươn cao lên bầu trời thành phố là gì?',
            options: ['Landmark 81 🏙️', 'A wooden doghouse 🐶', 'A tiny tent ⛺', 'A sandcastle 🏖️'],
            correctIndex: 0,
            explanationEn: 'Landmark 81 is one of the tallest skyscrapers in Southeast Asia!',
            explanationVi: 'Landmark 81 là một trong những tòa tháp cao nhất Đông Nam Á!'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Tall', emoji: '🏙️', meaningVi: 'Cao vút' },
            { word: 'Rocket', emoji: '🚀', meaningVi: 'Tên lửa' },
            { word: 'Smile', emoji: '😊', meaningVi: 'Nụ cười' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Skyscraper', phonetic: '/ˈskaɪˌskreɪ.pɚ/', meaningEn: 'A very tall modern tower', meaningVi: 'Tòa tháp chọc trời', example: 'Landmark 81 touches the sky.', emoji: '🏢' },
          { word: 'Market', phonetic: '/ˈmɑːr.kɪt/', meaningEn: 'A busy historic clock tower shopping hall', meaningVi: 'Chợ Bến Thành', example: 'Ben Thanh Market has a big clock.', emoji: '🏪' },
          { word: 'Train', phonetic: '/treɪn/', meaningEn: 'Electric railway cars moving fast', meaningVi: 'Tàu điện Metro', example: 'The green metro train glides fast.', emoji: '🚆' },
          { word: 'Park', phonetic: '/pɑːrk/', meaningEn: 'Green grass and shady trees in the city', meaningVi: 'Công viên xanh', example: 'Children play in Tao Dan park.', emoji: '🌳' }
        ],
        reading: {
          titleEn: 'A Ride through the City',
          textEn: 'Look at the electric Metro train sliding smoothly across the bridge! In the city center, Ben Thanh Market has a famous clock tower where visitors find delicious tropical treats like banh mi and sweet iced tea. In the evening, streetlights sparkle like a river of golden stars.',
          textVi: 'Hãy nhìn đoàn tàu Metro điện lướt êm ru qua cây cầu hiện đại kìa! Ở trung tâm thành phố, Chợ Bến Thành có tháp đồng hồ bốn mặt nổi tiếng nơi du khách thưởng thức bánh mì giòn tan và trà đá mát lành. Buổi tối, ánh đèn đường lấp lánh như một dòng sông sao vàng rực rỡ.'
        },
        listening: {
          audioScriptEn: 'Ding dong! Passengers board the clean electric metro train at the Central Station next to Ben Thanh Market.',
          question: 'What famous clock tower stands proudly in the historic city center?',
          options: ['Ben Thanh Market 🏪', 'An Igloo 🧊', 'A Bird Cage 🦜', 'A Lighthouse 🗼'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence about the city:',
          promptVi: 'Đọc câu miêu tả thành phố sôi động:',
          sampleSentence: 'The electric metro train glides smoothly across the river bridge.',
          tips: 'Practice linking "glides smoothly" with a confident smile.'
        },
        quiz: [
          {
            id: 'hcm-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'What fast and clean transportation system crosses the city on elevated tracks?',
            questionVi: 'Phương tiện giao thông công cộng hiện đại, sạch đẹp nào lướt trên đường ray cao?',
            options: ['The Electric Metro Train 🚆', 'A Horse Carriage 🐎', 'A Camel 🐪', 'A Rocket Ship 🚀'],
            correctIndex: 0,
            explanationEn: 'The modern electric Metro train connects districts quickly and cleanly!',
            explanationVi: 'Tuyến tàu điện Metro hiện đại giúp kết nối các quận nhanh chóng và bảo vệ môi trường!'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Metropolis', phonetic: '/məˈtrɑː.pəl.ɪs/', meaningEn: 'A very large, important city', meaningVi: 'Đại đô thị trung tâm', example: 'Ho Chi Minh City is a metropolis.' },
          { word: 'Innovation', phonetic: '/ˌɪn.əˈveɪ.ʃən/', meaningEn: 'A creative new idea or technology', meaningVi: 'Sự đổi mới sáng tạo', example: 'Green technology innovations start here.' },
          { word: 'Harbor', phonetic: '/ˈhɑːr.bɚ/', meaningEn: 'A safe area for ships to dock', meaningVi: 'Bến cảng lịch sử', example: 'Nha Rong Harbor is historic.' },
          { word: 'Skyscraper', phonetic: '/ˈskaɪˌskreɪ.pɚ/', meaningEn: 'A very tall modern building', meaningVi: 'Tòa nhà chọc trời', example: 'Landmark 81 is a famous skyscraper.' }
        ],
        reading: {
          titleEn: 'Energy of the Southern Hub',
          textEn: 'Ho Chi Minh City, lovingly called Saigon by many, never sleeps. It blends historic landmarks with futuristic smart city developments. At Nha Rong Harbor on the Saigon River, President Ho Chi Minh set sail in 1911 in search of national independence. A short drive away, Landmark 81 rises like a bunch of bamboo into the clouds, symbolizing Vietnamese strength and unity. From busy green parks to high-tech science parks, young people in this vibrant city are actively learning coding, science, and foreign languages to connect Vietnam to the global world.',
          textVi: 'Thành phố Hồ Chí Minh, nơi nhiều người vẫn yêu thương gọi là Sài Gòn, là thành phố không ngủ tràn đầy sức sống. Nơi đây kết hợp hài hòa giữa các di tích lịch sử và những công trình đô thị thông minh hiện đại. Tại Bến Nhà Rồng bên bờ sông Sài Gòn, người thanh niên yêu nước Nguyễn Tất Thành đã ra đi tìm đường cứu nước năm 1911. Cách đó không xa, tòa tháp Landmark 81 vươn cao như một lũy tre xanh vươn tới trời mây, tượng trưng cho sức mạnh đoàn kết của dân tộc Việt Nam. Từ những công viên rợp bóng mát đến các khu công nghệ cao, thế hệ trẻ thành phố đang hăng say học lập trình, khoa học và ngoại ngữ để đưa Việt Nam vươn tầm thế giới.'
        },
        listening: {
          audioScriptEn: 'Good morning young explorers! From the observation deck of Landmark 81, you can see ships traveling toward the sea. The building is 461 meters tall!',
          question: 'How tall is Landmark 81?',
          options: ['461 meters', '100 meters', '1,000 meters', '50 meters'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence about Vietnam\'s modern achievements:',
          promptVi: 'Nói câu giới thiệu về thành phố mang tên Bác:',
          sampleSentence: 'Ho Chi Minh City is a vibrant hub of science, culture, and innovation.',
          tips: 'Ensure correct pronunciation of "vibrant" (VAI-brənt) and "innovation".'
        },
        quiz: [
          {
            id: 'hcm-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'In what year did President Ho Chi Minh depart from Nha Rong Harbor?',
            questionVi: 'Bác Hồ đã ra đi tìm đường cứu nước từ Bến Nhà Rồng vào năm nào?',
            options: ['1911', '1945', '1975', '2000'],
            correctIndex: 0,
            explanationEn: 'On June 5, 1911, young patriot Nguyen Tat Thanh set sail from Nha Rong Harbor.',
            explanationVi: 'Ngày 5 tháng 6 năm 1911, người thanh niên yêu nước Nguyễn Tất Thành lên đường tìm đường cứu nước.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, STEM and history',
        vocabulary: [
          { word: 'High-Tech Park', phonetic: '/haɪ tek pɑːrk/', meaningEn: 'Specialized zone for microchips and software', meaningVi: 'Khu công nghệ cao', example: 'Engineers design computer chips in the Hi-Tech Park.' },
          { word: 'Patriotism', phonetic: '/ˈpeɪ.tri.ə.tɪ.zəm/', meaningEn: 'Love and devotion to one\'s homeland', meaningVi: 'Lòng yêu nước nồng nàn', example: 'Nha Rong Harbor teaches youths about patriotism.' },
          { word: 'Architecture', phonetic: '/ˈɑːr.kə.tek.tʃɚ/', meaningEn: 'The art of designing functional buildings', meaningVi: 'Kiến trúc đô thị', example: 'Landmark 81 is shaped like a bundle of bamboo.' },
          { word: 'Symbolize', phonetic: '/ˈsɪm.bə.laɪz/', meaningEn: 'Represent something meaningful with an object or icon', meaningVi: 'Tượng trưng cho', example: 'Bamboo bundles symbolize solidarity and resilience.' }
        ],
        reading: {
          titleEn: 'Bamboo Tower in the Clouds',
          textEn: 'When architects designed Landmark 81, they did not copy foreign skyscrapers. Instead, they looked at the traditional Vietnamese bamboo bundle (Bó Tre), which has protected Vietnamese villages for thousands of years against storms and invaders. Tied together, slender bamboo stalks become unbreakable. Soaring 461 meters beside the Saigon River, Landmark 81 incorporates smart green glass and rainwater recycling, proving that modern engineering can honor cultural roots while pioneering sustainable construction.',
          textVi: 'Khi các kiến trúc sư thiết kế tòa tháp Landmark 81, họ không sao chép những tòa nhà chọc trời phương Tây. Thay vào đó, họ lấy cảm hứng từ hình ảnh bó tre làng thân thuộc—hình ảnh đã gắn bó che chở làng quê Việt Nam qua bao thế hệ bão giông. Từng thân tre đơn lẻ khi được bó kết lại sẽ tạo nên sức mạnh không thể bẻ gãy. Cao 461 mét kiêu hãnh bên bờ sông Sài Gòn, Landmark 81 ứng dụng kính thông minh tiết kiệm năng lượng và hệ thống tái sử dụng nước mưa, chứng minh công nghệ hiện đại có thể nâng tầm văn hóa dân tộc.'
        },
        listening: {
          audioScriptEn: 'Engineering review: Landmark 81 uses Low-E insulated glass that blocks 95% of harmful ultraviolet rays, keeping the interior cool naturally under the tropical sun.',
          question: 'What traditional Vietnamese plant inspired the architectural silhouette of Landmark 81?',
          options: ['A bundle of bamboo stalks (Bó tre)', 'A pine cone', 'A water lily', 'A coconut tree'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Recite this aspirational vision for Vietnam:',
          promptVi: 'Đọc to tuyên ngôn về khát vọng phát triển của thế hệ trẻ:',
          sampleSentence: 'By mastering science, technology, and English, we empower Vietnam to shine brightly on the international stage.',
          tips: 'Speak with inspirational clarity and strong projection.'
        },
        quiz: [
          {
            id: 'hcm-g4-1',
            bloomLevel: 'Understand',
            questionEn: 'How does the bamboo-bundle design of Landmark 81 symbolize Vietnamese values?',
            questionVi: 'Thiết kế hình tượng bó tre của Landmark 81 thể hiện giá trị tinh thần nào của dân tộc?',
            options: [
              'It symbolizes unity, resilience, and collective strength overcoming adversity',
              'It means people should eat bamboo shoots',
              'It shows that tall buildings are made of real wood',
              'It was chosen because bamboo is green'
            ],
            correctIndex: 0,
            explanationEn: 'The bamboo bundle symbolizes solidarity: united together, the nation is strong.',
            explanationVi: 'Hình tượng bó tre biểu trưng cho sức mạnh đại đoàn kết và ý chí vươn lên kiên cường của dân tộc.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic presentation, knowledge economy',
        vocabulary: [
          { word: 'Megacity', phonetic: '/ˈmeɡ.ə.sɪt̬.i/', meaningEn: 'A massive urban agglomeration with a population exceeding 10 million inhabitants', meaningVi: 'Siêu đô thị hiện đại', example: 'Managing public transit and drainage in a megacity requires smart IoT sensors.' },
          { word: 'Knowledge Economy', phonetic: '/ˈnɑː.lɪdʒ ɪˈkɑː.nə.mi/', meaningEn: 'An economic system focused on research, software, and human brainpower', meaningVi: 'Nền kinh tế tri thức', example: 'Young students in Vietnam are leaders in the knowledge economy.' },
          { word: 'Sustainability', phonetic: '/səˌsteɪ.nəˈbɪl.ə.t̬i/', meaningEn: 'Balancing economic growth with renewable energy and environmental care', meaningVi: 'Sự phát triển bền vững', example: 'Urban sustainability initiatives promote electric buses and rooftop solar panels.' },
          { word: 'Fintech Hub', phonetic: '/ˈfɪn.tek hʌb/', meaningEn: 'A financial center leveraging software to revolutionize banking and trade', meaningVi: 'Trung tâm tài chính số', example: 'Thu Thiem is developing into an international financial center.' }
        ],
        reading: {
          titleEn: 'Ho Chi Minh City: Engine of Innovation and National Progress',
          textEn: 'Serving as the economic locomotive of Vietnam, Ho Chi Minh City produces nearly one-fourth of national GDP while driving innovation across Southeast Asia. Rooted profoundly in historical significance at Nha Rong Harbor, where young patriot Nguyen Tat Thanh embarked upon his 30-year odyssey for liberation, the city has transformed into a thriving entrepreneurial center. Today, through institutions like Saigon Hi-Tech Park and rapid transit metro networks, Vietnam\'s southern megacity demonstrates how technological progress, digital education, and cultural warmth combine to propel the nation into the global knowledge economy.',
          textVi: 'Là đầu tàu kinh tế của cả nước, Thành phố Hồ Chí Minh đóng góp gần một phần tư GDP quốc gia và dẫn đầu phong trào đổi mới sáng tạo tại Đông Nam Á. Khởi nguồn từ dấu mốc lịch sử thiêng liêng tại Bến Nhà Rồng, nơi người thanh niên yêu nước Nguyễn Tất Thành bắt đầu hành trình 30 năm tìm đường cứu nước, thành phố đã chuyển mình mạnh mẽ thành trung tâm khởi nghiệp sôi động. Ngày nay, thông qua Khu Công nghệ cao và các tuyến metro hiện đại, siêu đô thị phương Nam cho thấy sự kết hợp hoàn hảo giữa công nghệ, giáo dục số và lòng hiếu khách để đưa đất nước vươn ra biển lớn.'
        },
        listening: {
          audioScriptEn: 'Economic forum bulletin: Ho Chi Minh City is establishing the International Financial Center in Thu Thiem alongside semiconductor design labs to attract premier technology research investments.',
          question: 'What major financial and technology infrastructure is being accelerated in Thu Thiem?',
          options: ['An International Financial Center and microchip labs', 'A giant coal power plant', 'A vintage steam locomotive depot', 'A plastic toy factory'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Recite this aspirational vision for Vietnam:',
          promptVi: 'Đọc to tuyên ngôn về khát vọng phát triển của thế hệ trẻ:',
          sampleSentence: 'By mastering science, technology, and English, we empower Vietnam to shine brightly on the international stage.',
          tips: 'Speak with inspirational clarity and strong projection.'
        },
        quiz: [
          {
            id: 'hcm-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does advancing semiconductor engineering and English fluency empower Vietnamese students globally?',
            questionVi: 'Việc làm chủ công nghệ bán dẫn và thành thạo tiếng Anh giúp học sinh Việt Nam hội nhập thế nào?',
            options: [
              'It enables young Vietnamese to collaborate in international research, design green technologies, and lead global economic innovations',
              'It forces students to stay in one room forever',
              'It prevents computers from being manufactured',
              'It is only useful for playing mobile games'
            ],
            correctIndex: 0,
            explanationEn: 'STEM proficiency coupled with English language fluency unlocks worldwide career opportunities and drives national self-reliance.',
            explanationVi: 'Làm chủ công nghệ và tiếng Anh mở ra cánh cửa hợp tác quốc tế, giúp thế hệ trẻ tự tin làm chủ tương lai đất nước.'
          }
        ]
      }
    )
  },

  // 7. MEKONG RIVER DELTA (Đồng bằng sông Cửu Long - Floating Market & Fruit Orchards)
  {
    id: 'mekong',
    name: 'Mekong River Delta',
    vietnameseName: 'Đồng bằng sông Cửu Long',
    province: 'Cần Thơ & Miền Tây',
    region: 'South',
    theme: 'Nature',
    geoCoordinates: { latitude: 10.045, longitude: 105.784 },
    coordinates: { x: 50, y: 88 },
    // AUTHENTIC PHOTO: Cai Rang Floating Market bustling with boats and tropical fruits
    image: '/destinations/mekong_delta.jpg',
    photoAttribution: {
      author: 'Wikimedia Commons',
      source: 'Wikimedia Commons',
      license: 'CC BY-SA 4.0 / Educational Public Domain',
      landmark: 'Cai Rang Floating Market (Chợ nổi Cái Răng), Mekong Delta'
    },
    summaryEn: 'The fertile land of nine dragons with bustling floating markets, tropical fruit orchards, and friendly songs.',
    summaryVi: 'Vùng đất chín rồng màu mỡ với chợ nổi tấp nập, miệt vườn cây trái trĩu quả và câu hò mộc mạc ân tình.',
    badge: {
      name: 'Mekong River Navigator',
      icon: '🛶',
      titleEn: 'Mekong Delta Navigator',
      titleVi: 'Thủy Thủ Dòng Sông Cửu Long'
    },
    gradeContent: createGradeContent(
      // Grade 1
      {
        cefrLevel: 'Pre-A1 Starter',
        instructionalTarget: 'Picture vocabulary, sounds, audio recognition, 1-word responses',
        vocabulary: [
          { word: 'Fruit', phonetic: '/fruːt/', meaningEn: 'Sweet food grown on trees', meaningVi: 'Trái cây', example: 'Sweet mango fruit!', emoji: '🥭' },
          { word: 'Fish', phonetic: '/fɪʃ/', meaningEn: 'Swims in the river waves', meaningVi: 'Con cá', example: 'Little fish swim fast.', emoji: '🐟' },
          { word: 'Market', phonetic: '/ˈmɑːr.kɪt/', meaningEn: 'Boats buying and selling food', meaningVi: 'Chợ nổi', example: 'Look at the boat market!', emoji: '🛶' },
          { word: 'Rice', phonetic: '/raɪs/', meaningEn: 'Golden grain fields in the sun', meaningVi: 'Lúa gạo vàng', example: 'Golden rice grows tall.', emoji: '🌾' }
        ],
        reading: {
          titleEn: 'Floating Market Fun',
          textEn: 'In the Mekong Delta, people shop on wooden boats! Sweet yellow mangoes and watermelons are hung on bamboo poles. The water sparkles like nine friendly dragons!',
          textVi: 'Ở miền Tây sông nước, mọi người đi chợ trên những chiếc ghe xuồng gỗ! Những quả xoài vàng ươm và dưa hấu ngọt lịm được treo trên cây sào tre. Mặt nước lấp lánh như chín chú rồng thân thiện!'
        },
        listening: {
          audioScriptEn: 'Splash! Look at that bamboo pole. Three fresh pineapples are hanging high so everyone can see!',
          question: 'What delicious food is hanging on the bamboo pole?',
          options: ['Fresh sweet pineapples 🍍', 'Toy cars 🚗', 'Books 📚', 'Ice cream cones 🍦'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this sweet sentence:',
          promptVi: 'Đọc câu miêu tả trái cây miền Tây:',
          sampleSentence: 'Sweet Tropical Fruits!',
          tips: 'Smile as you say "Sweet Trop-i-cal Fruits"!'
        },
        quiz: [
          {
            id: 'mk-g1-1',
            bloomLevel: 'Remember',
            questionEn: 'Where do people buy and sell delicious fruit in Cai Rang?',
            questionVi: 'Người dân ở Chợ nổi Cái Răng mua bán trái cây trên phương tiện gì?',
            options: ['On wooden boats on the river 🛶', 'Inside an airplane ✈️', 'On a snowy mountain 🏔️', 'Under a volcano 🌋'],
            correctIndex: 0,
            explanationEn: 'Cai Rang is a world-famous floating market where merchants trade on boats.',
            explanationVi: 'Chợ nổi Cái Răng là nơi bà con buôn bán tấp nập trên sông nước.'
          }
        ],
        game: {
          type: 'picture_match',
          pairs: [
            { word: 'Fruit', emoji: '🥭', meaningVi: 'Trái cây' },
            { word: 'Fish', emoji: '🐟', meaningVi: 'Con cá' },
            { word: 'Market', emoji: '🛶', meaningVi: 'Chợ nổi' }
          ]
        }
      },
      // Grade 2
      {
        cefrLevel: 'Pre-A1 Beginner',
        instructionalTarget: 'Basic vocabulary, phrases, very short sentences, listening tasks',
        vocabulary: [
          { word: 'Sampan', phonetic: '/ˈsæm.pæn/', meaningEn: 'A light wooden rowboat', meaningVi: 'Chiếc xuồng ba lá', example: 'We row a wooden sampan.', emoji: '🛶' },
          { word: 'Coconut', phonetic: '/ˈkoʊ.kə.nʌt/', meaningEn: 'A big round fruit with sweet water', meaningVi: 'Quả dừa xiêm', example: 'Coconut palms shade the canal.', emoji: '🥥' },
          { word: 'Canal', phonetic: '/kəˈnæl/', meaningEn: 'A narrow waterway between gardens', meaningVi: 'Kênh rạch rợp bóng dừa', example: 'The sampan turns down the canal.', emoji: '🌊' },
          { word: 'Song', phonetic: '/sɑːŋ/', meaningEn: 'Sweet folk tune sung across the river', meaningVi: 'Câu hò điệu lý', example: 'Grandmother sings a sweet river song.', emoji: '🎶' }
        ],
        reading: {
          titleEn: 'Rowing down the Coconut Canal',
          textEn: 'Put on a traditional conical leaf hat (Non La) and step into a wooden sampan boat! Water coconut trees arch overhead like a green natural tunnel. As you glide along the quiet canal, you can hear folk songs floating across orchards heavy with ripe rambutan and jackfruit.',
          textVi: 'Cùng đội chiếc nón lá thân thương và bước lên chiếc xuồng ba lá nhé! Những hàng dừa nước đan vòm trên cao như một đường hầm xanh mát tự nhiên. Khi xuồng lướt êm ả qua con rạch nhỏ, em có thể nghe tiếng câu hò ngọt ngào vọng lại từ những miệt vườn trĩu quả chôm chôm và mít chín.'
        },
        listening: {
          audioScriptEn: 'Listen to the paddle dipping in the water! Swish, swish! The boat lady wears a checkered scarf (Khan Ran) and smiles warmly.',
          question: 'What traditional hat protects visitors from the warm sunshine?',
          options: ['Conical Leaf Hat (Non La) 👒', 'A heavy winter wool hat 🧶', 'A bicycle helmet ⛑️', 'A knight helmet 🪖'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this sweet sentence:',
          promptVi: 'Đọc câu miêu tả dòng sông miền Tây:',
          sampleSentence: 'The sampan boat glides gently under green coconut palms.',
          tips: 'Pronounce "glides gen-tly" with a smooth, soft rhythm.'
        },
        quiz: [
          {
            id: 'mk-g2-1',
            bloomLevel: 'Remember',
            questionEn: 'What traditional black-and-white checkered scarf do delta people wear?',
            questionVi: 'Chiếc khăn rằn kẻ ô đen trắng quen thuộc của người dân miền Tây có tên là gì?',
            options: ['Khan Ran (Checkered Scarf) 🧣', 'A Silk Necktie 👔', 'A Gold Medal 🥇', 'A Wool Scarf 🧣'],
            correctIndex: 0,
            explanationEn: 'The Khan Ran is the beloved iconic checkered scarf of the Mekong Delta.',
            explanationVi: 'Khăn rằn là biểu tượng mộc mạc, gần gũi của người dân Nam Bộ.'
          }
        ]
      },
      // Grade 3
      {
        cefrLevel: 'Pre-A1 Foundation',
        instructionalTarget: 'Simple sentences, basic questions, short listening tasks, bilingual hints',
        vocabulary: [
          { word: 'Delta', phonetic: '/ˈdel.t̬ə/', meaningEn: 'A fertile triangle where a river splits before the sea', meaningVi: 'Đồng bằng châu thổ', example: 'The Mekong Delta is Vietnam\'s rice bowl.' },
          { word: 'Floating Market', phonetic: '/ˈfloʊ.t̬ɪŋ ˈmɑːr.kɪt/', meaningEn: 'A market where people trade on boats', meaningVi: 'Chợ nổi trên sông', example: 'Cai Rang Floating Market opens at sunrise.' },
          { word: 'Orchard', phonetic: '/ˈɔːr.tʃɚd/', meaningEn: 'Land planted with abundant fruit trees', meaningVi: 'Miệt vườn cây trái', example: 'Pick fresh mangoes in the orchard.' },
          { word: 'Fertile', phonetic: '/ˈfɝː.t̬əl/', meaningEn: 'Soil that produces abundant crops', meaningVi: 'Màu mỡ, phì nhiêu', example: 'River silt makes the soil fertile.' }
        ],
        reading: {
          titleEn: 'Morning at the Floating Market',
          textEn: 'In the Mekong River Delta in southern Vietnam, life flows with the water. The river splits into nine branches, so the Vietnamese call it Cuu Long, the Nine Dragons. Every morning at sunrise, hundreds of painted wooden boats gather at Cai Rang Floating Market. Farmers hang the fruit they want to sell—like pineapples, watermelons, or sweet durians—on tall bamboo poles called "beo". From a tiny rowboat, you can even buy a steaming bowl of hot Hu Tieu noodle soup!',
          textVi: 'Ở Đồng bằng sông Cửu Long miền Tây Nam Bộ, nhịp sống gắn liền với sông nước. Dòng sông Mê Kông đổ ra biển bằng chín nhánh, nên người dân Việt Nam gọi là dòng Cửu Long (Chín Rồng). Mỗi sớm bình minh, hàng trăm chiếc ghe xuồng rực rỡ tụ hội tại chợ nổi Cái Răng. Nhà vườn treo các loại trái cây muốn bán—như dứa, dưa hấu, chôm chôm hay sầu riêng—lên những cây sào tre cao gọi là cây "bẹo". Ngay trên chiếc thuyền con lướt sóng, em còn có thể thưởng thức một tô hủ tiếu nóng hổi thơm lừng!'
        },
        listening: {
          audioScriptEn: 'Look up at that bamboo pole! The trader has hung three ripe pineapples on top. That means their boat has fresh pineapples for sale today!',
          question: 'What does a fruit hung on the bamboo pole "beo" mean?',
          options: ['That fruit is for sale on the boat', 'The boat is closed for repair', 'The boat is in a race', 'It is a birthday party'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Say this sentence about the Mekong Delta:',
          promptVi: 'Đọc câu giới thiệu về miệt vườn miền Tây:',
          sampleSentence: 'The Mekong Delta produces sweet tropical fruits and golden rice fields.',
          tips: 'Notice the rhythm: "tro-pi-cal FRUITS and gol-den RICE fields".'
        },
        quiz: [
          {
            id: 'mk-g3-1',
            bloomLevel: 'Remember',
            questionEn: 'What does the Vietnamese name "Cuu Long" mean?',
            questionVi: 'Tên gọi "Cửu Long" mang ý nghĩa gì?',
            options: ['Nine Dragons', 'Seven Stars', 'Nine Golden Mountains', 'One Hundred Flowers'],
            correctIndex: 0,
            explanationEn: '"Cuu" means nine and "Long" means dragon in Sino-Vietnamese.',
            explanationVi: '"Cửu" là chín, "Long" là rồng. Dòng sông Mê Kông khi chảy ra biển qua chín cửa sông nên gọi là Cửu Long.'
          }
        ]
      },
      // Grade 4
      {
        cefrLevel: 'Pre-A1 to A1',
        instructionalTarget: 'Short descriptions, conversations, guided speaking, water ecosystem',
        vocabulary: [
          { word: 'Alluvium', phonetic: '/əˈluː.vi.əm/', meaningEn: 'Nutrient-rich sediment deposited by river floods', meaningVi: 'Phù sa châu thổ', example: 'Mekong alluvium enriches rice paddies naturally.' },
          { word: 'Granary', phonetic: '/ˈɡræn.ɚ.i/', meaningEn: 'A region that produces large amounts of grain for a nation', meaningVi: 'Vựa lúa quốc gia', example: 'The Mekong Delta is the primary granary of Vietnam.' },
          { word: 'Mangrove', phonetic: '/ˈmæŋ.ɡroʊv/', meaningEn: 'Salt-tolerant trees with tangled stilt roots along coasts', meaningVi: 'Rừng ngập mặn Cà Mau', example: 'Mangrove forests protect coasts from storm erosion.' },
          { word: 'Seasonal Flood', phonetic: '/ˈsiː.zən.əl flʌd/', meaningEn: 'The gentle annual rising of water bringing fish and soil', meaningVi: 'Mùa nước nổi hiền hòa', example: 'The seasonal flood brings abundant fish and rich soil.' }
        ],
        reading: {
          titleEn: 'The Gentle Floating Season',
          textEn: 'Unlike sudden violent river floods in other continents, the annual flood season in the Mekong Delta is affectionately called "Mua Nuoc Noi" (The Floating Water Season). Rising gently from August to November, the overflow brings millions of tons of rich alluvium that fertilize the rice paddies without need for chemical fertilizers. It also brings millions of freshwater fish, water lilies, and yellow Sesbania flowers (Bong Dien Dien), inspiring delightful folk cuisine and sustaining generations of hospitable delta families.',
          textVi: 'Khác với những cơn lũ quét dữ dội ở các châu lục khác, mùa nước dâng hằng năm ở Đồng bằng sông Cửu Long được người dân trìu mến gọi là "Mùa Nước Nổi". Nước dâng lên từ tốn từ tháng 8 đến tháng 11, mang theo hàng triệu tấn phù sa màu mỡ bồi đắp cho ruộng đồng mà không cần phân bón hóa học. Mùa nước son còn mang về tôm cá dồi dào, hoa súng tím ngát và sắc vàng hoa điên điển, tạo nên nét ẩm thực dân dã đậm đà tình làng nghĩa xóm.'
        },
        listening: {
          audioScriptEn: 'Fisherman story: When the floating season arrives, my family sets gentle bamboo nets to catch linh fish. We eat crisp Sesbania flower soup while listening to traditional vọng cổ music.',
          question: 'What special yellow blossom is harvested during the Floating Water Season?',
          options: ['Sesbania flower (Bong Dien Dien) 🌼', 'A Sunflower 🌻', 'A Yellow Rose 🌹', 'A Dandelion 🌾'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Speak this sentence with warmth:',
          promptVi: 'Đọc câu miêu tả mùa nước nổi:',
          sampleSentence: 'The annual floating season brings rich alluvial soil and bountiful harvests to the delta.',
          tips: 'Pronounce "al-lu-vi-al soil" and "boun-ti-ful" clearly.'
        },
        quiz: [
          {
            id: 'mk-g4-1',
            bloomLevel: 'Understand',
            questionEn: 'Why do delta farmers welcome the annual Floating Water Season (Mua Nuoc Noi)?',
            questionVi: 'Vì sao bà con nông dân miền Tây lại mong đợi Mùa Nước Nổi hằng năm?',
            options: [
              'Because the floodwaters deposit fertile alluvial soil and provide abundant freshwater fish',
              'Because they can swim all day and stop farming',
              'Because it turns the soil into salt',
              'Because it makes cars drive faster'
            ],
            correctIndex: 0,
            explanationEn: 'The floods bring mineral-rich silt, cleanse soil acidity, and provide aquatic foods.',
            explanationVi: 'Nước lũ mang phù sa bồi đắp dinh dưỡng, thau chua rửa phèn và mang lại nguồn lợi thủy sản dồi dào.'
          }
        ]
      },
      // Grade 5
      {
        cefrLevel: 'A1 with A2 Extension',
        instructionalTarget: 'Reading comprehension, academic presentation, climate resilience',
        vocabulary: [
          { word: 'Alluvial Silt', phonetic: '/əˈluː.vi.əl sɪlt/', meaningEn: 'Fine mineral-rich soil deposited by flowing river floods', meaningVi: 'Phù sa màu mỡ', example: 'Annual alluvial silt naturally replenishes rice paddies and orchards.' },
          { word: 'Hydrology', phonetic: '/haɪˈdrɑː.lə.dʒi/', meaningEn: 'The scientific study of the properties and circulation of water on land', meaningVi: 'Thủy văn học dòng sông', example: 'Monitoring the hydrology of the Mekong Basin protects freshwater aquifers.' },
          { word: 'Aquaculture', phonetic: '/ˈæk.wəˌkʌl.tʃɚ/', meaningEn: 'The rearing of aquatic animals or cultivation of aquatic plants for food', meaningVi: 'Nuôi trồng thủy sản', example: 'Sustainable pangasius and shrimp aquaculture drives national export vitality.' },
          { word: 'Climate Adaptation', phonetic: '/ˈklaɪ.mət ˌæd.æpˈteɪ.ʃən/', meaningEn: 'Adjusting agricultural practices to salinity intrusion and rainfall variations', meaningVi: 'Thích ứng với biến đổi khí hậu', example: 'Mekong farmers implement climate adaptation by shifting to salinity-tolerant organic rice varieties.' }
        ],
        reading: {
          titleEn: 'Mekong Delta: Water Sovereignty and Climate Resilience',
          textEn: 'Traversing six nations before terminating in the East Sea, the Mekong River culminates in Vietnam\'s southwestern granary—the Mekong Delta. Responsible for over fifty percent of national rice production and seventy percent of exported fruit, this fertile plain represents an intricate socio-ecological web intertwined with seasonal flood cycles (Mua Nuoc Noi). Today, environmental stewardship in the delta demands urgent regional scientific collaboration to counteract upstream dam hydrology, combat saltwater intrusion, and advance organic agro-ecology, ensuring that the legendary nine dragon waterways continue sustaining millions of livelihoods.',
          textVi: 'Chảy qua sáu quốc gia trước khi đổ ra Biển Đông, dòng sông Mê Kông bồi đắp nên vựa lúa lớn nhất của Việt Nam—Đồng bằng sông Cửu Long. Đóng góp hơn 50% sản lượng lúa gạo và 70% trái cây xuất khẩu của cả nước, dải đồng bằng châu thổ này là một hệ sinh thái xã hội - tự nhiên gắn liền với mùa nước nổi hiền hòa. Ngày nay, sứ mệnh bảo vệ vựa lương thực quốc gia đòi hỏi sự phối hợp khoa học liên vùng để ứng phó với việc tích nước thủy điện thượng nguồn, ngăn chặn xâm nhập mặn và thúc đẩy nông nghiệp hữu cơ thích ứng biến đổi khí hậu.'
        },
        listening: {
          audioScriptEn: 'Agro-ecological research report: Salinity intrusion sensors deployed across the delta now provide real-time water data to farmers, allowing timely gate control for freshwater storage during dry seasons.',
          question: 'What do deployed salinity sensors help delta farmers achieve?',
          options: ['Control irrigation sluice gates to store freshwater during dry periods', 'Build big concrete towers', 'Make the ocean water turn into sugar', 'Stop all boats from floating'],
          correctIndex: 0
        },
        speaking: {
          promptEn: 'Articulate this environmental commitment with authority:',
          promptVi: 'Đọc to tuyên ngôn về bảo vệ nguồn nước Cửu Long:',
          sampleSentence: 'Safeguarding the freshwater resources of the Mekong Delta is indispensable for regional food security and climate resilience.',
          tips: 'Enunciate "indispensable" and "climate resilience" with steady confidence.'
        },
        quiz: [
          {
            id: 'mk-g5-1',
            bloomLevel: 'Analyze',
            questionEn: 'How does the traditional seasonal flood cycle ("Mua Nuoc Noi") naturally benefit delta farming without chemical fertilizers?',
            questionVi: 'Mùa nước nổi mang lại lợi ích tự nhiên to lớn nào cho nông nghiệp mà không cần dùng phân hóa học?',
            options: [
              'Floodwaters deposit millions of tons of fertile alluvial silt, wash away soil acidity, and exterminate crop pests naturally',
              'Floods bring salty ocean water that stops all plants from growing',
              'Floods turn all soil into dry sand',
              'Floods prevent any fish from swimming in the rivers'
            ],
            correctIndex: 0,
            explanationEn: 'The annual floods bring nutrient-rich silt, cleanse pests, and recharge aquifers.',
            explanationVi: 'Nước lũ mang theo hàng triệu tấn phù sa màu mỡ bồi đắp cho ruộng đồng, thau chua rửa phèn và tiêu diệt sâu bọ tự nhiên.'
          }
        ]
      }
    )
  }
];
