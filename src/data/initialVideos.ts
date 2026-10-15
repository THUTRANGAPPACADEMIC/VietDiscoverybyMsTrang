import { EducationalVideo } from '../types';

export const INITIAL_VIDEOS: EducationalVideo[] = [
  // ==========================================================================
  // GRADE 1 – LITTLE EXPLORER (Pre-A1 Starter)
  // ==========================================================================
  {
    id: 'vid-g1-01',
    titleEn: 'Colors & Animals of Vietnam with Ms. Trang',
    titleVi: 'Sắc màu & Động vật Việt Nam cùng Cô Trang',
    videoUrl: 'https://www.youtube.com/watch?v=kYJzX2eQ9h4',
    embedUrl: 'https://www.youtube-nocookie.com/embed/kYJzX2eQ9h4?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'teacher_youtube',
    channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
    grade: 1,
    gradeLevel: 'Grade 1',
    gradeBand: 'grade_1',
    topic: 'Colors & Animals',
    difficulty: 'Pre-A1 Starter',
    learningObjectivesEn: [
      'Recognize primary colors: green, yellow, red, and blue',
      'Name cute animals: buffalo, bird, fish, and cat',
      'Repeat simple phrases: "I see a green bird"'
    ],
    learningObjectivesVi: [
      'Nhận biết các màu sắc cơ bản: xanh lá, vàng, đỏ, xanh dương',
      'Gọi tên các con vật quen thuộc: con trâu, chú chim, chú cá, bé mèo',
      'Lặp lại câu ngắn: "I see a green bird"'
    ],
    descriptionEn: 'Join Captain Trang in a cheerful morning adventure! Look at the green rice paddies and identify vibrant colors and friendly animals across rural Vietnam.',
    descriptionVi: 'Cùng Cô Trang bước vào chuyến phiêu lưu buổi sáng rực rỡ! Ngắm nhìn cánh đồng lúa xanh ngát và gọi tên các màu sắc cùng động vật đáng yêu.',
    durationMinutes: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: true,
    allowEmbedding: true,
    createdAt: '2026-10-01',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g1-01-1',
        questionEn: 'What color is the rice field in the video?',
        questionVi: 'Cánh đồng lúa trong video có màu gì?',
        options: ['Green (Màu xanh lá)', 'Red (Màu đỏ)', 'Black (Màu đen)'],
        correctIndex: 0,
        explanationEn: 'The rice field in Vietnam is green and beautiful!',
        explanationVi: 'Cánh đồng lúa ở làng quê Việt Nam tươi tốt màu xanh lá!',
        difficulty: 'easy'
      },
      {
        id: 'q-g1-01-2',
        questionEn: 'Which animal helps farmers in the fields?',
        questionVi: 'Con vật nào giúp các bác nông dân trên đồng ruộng?',
        options: ['Water Buffalo (Con trâu)', 'Elephant (Con voi)', 'Lion (Sư tử)'],
        correctIndex: 0,
        explanationEn: 'The water buffalo is a gentle friend of Vietnamese farmers.',
        explanationVi: 'Con trâu là người bạn hiền của nhà nông Việt Nam.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g1-02',
    titleEn: 'Hello Vietnam! Friendly Greetings Song for Kids',
    titleVi: 'Xin chào Việt Nam! Bài hát chào hỏi vui nhộn cho bé',
    videoUrl: 'https://www.youtube.com/watch?v=tVlcKp3bWH8',
    embedUrl: 'https://www.youtube-nocookie.com/embed/tVlcKp3bWH8?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'curated_youtube',
    channelOrAuthor: 'English Singsing for Children',
    grade: 1,
    gradeLevel: 'Grade 1',
    gradeBand: 'grade_1',
    topic: 'Greetings & Friends',
    difficulty: 'Pre-A1 Starter',
    learningObjectivesEn: [
      'Sing along with "Hello", "Good morning", and "Goodbye"',
      'Practice smiling and greeting classmates in English',
      'Build confidence in simple classroom English'
    ],
    learningObjectivesVi: [
      'Hát theo các từ chào hỏi: "Hello", "Good morning", "Goodbye"',
      'Thực hành mỉm cười và chào hỏi bạn bè bằng tiếng Anh',
      'Xây dựng sự tự tin khi nói tiếng Anh trong lớp học'
    ],
    descriptionEn: 'A delightful musical video teaching primary grade 1 students how to warmly say hello and goodbye with bright cartoon characters.',
    descriptionVi: 'Video âm nhạc vui nhộn dạy các bé lớp 1 cách nói lời chào và tạm biệt ấm áp cùng các nhân vật hoạt hình dễ thương.',
    durationMinutes: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-02',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g1-02-1',
        questionEn: 'What do you say when you meet your teacher in the morning?',
        questionVi: 'Bé nói gì khi gặp cô giáo vào buổi sáng?',
        options: ['Good morning! (Chào buổi sáng!)', 'Good night! (Chúc ngủ ngon!)'],
        correctIndex: 0,
        explanationEn: 'We cheerfully say "Good morning!" when we meet in the morning.',
        explanationVi: 'Chúng mình vui vẻ nói "Good morning!" khi gặp nhau vào buổi sáng.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g1-03',
    titleEn: 'Welcome to Ha Long Bay – Nature Safari Animation',
    titleVi: 'Chào mừng đến Vịnh Hạ Long – Hoạt hình khám phá thiên nhiên',
    videoUrl: 'https://www.youtube.com/watch?v=jW_5e6Yk0wI',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jW_5e6Yk0wI?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'ai_generated',
    channelOrAuthor: 'VietDiscovery AI Animation Studio',
    grade: 1,
    gradeLevel: 'Grade 1',
    gradeBand: 'grade_1',
    topic: 'Nature & Landmarks',
    difficulty: 'Pre-A1 Starter',
    learningObjectivesEn: [
      'Discover Ha Long Bay’s emerald water and limestone islands',
      'Learn the words: island, boat, water, and sun',
      'Trace natural shapes with sound effects'
    ],
    learningObjectivesVi: [
      'Khám phá làn nước xanh ngọc và các hòn đảo tại Vịnh Hạ Long',
      'Học các từ vựng: island (hòn đảo), boat (con thuyền), water (nước), sun (mặt trời)',
      'Nhận biết các hình khối thiên nhiên qua âm thanh sinh động'
    ],
    descriptionEn: 'A magical animated voyage created with AI visualization showing the emerald waters of Ha Long Bay designed especially for Grade 1 children.',
    descriptionVi: 'Chuyến hải trình hoạt hình thần tiên ứng dụng đồ họa AI trực quan, tái hiện làn nước ngọc bích của Vịnh Hạ Long dành riêng cho học sinh Lớp 1.',
    durationMinutes: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-05',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g1-03-1',
        questionEn: 'What sails on the water in Ha Long Bay?',
        questionVi: 'Vật gì đang lướt trên làn nước Vịnh Hạ Long?',
        options: ['A boat (Một con thuyền)', 'A car (Một chiếc ô tô)'],
        correctIndex: 0,
        explanationEn: 'Boats and junks sail peacefully on the emerald bay.',
        explanationVi: 'Những chiếc thuyền buồm lướt êm đềm trên vịnh xanh.',
        difficulty: 'easy'
      }
    ]
  },

  // ==========================================================================
  // GRADE 2 – MAGICAL BACKPACK (Pre-A1 Beginner)
  // ==========================================================================
  {
    id: 'vid-g2-01',
    titleEn: 'Pack Your Magical Adventure Backpack with Ms. Trang',
    titleVi: 'Soạn ba lô phiêu lưu thần kỳ cùng Cô Trang',
    videoUrl: 'https://www.youtube.com/watch?v=Fj7n0w8j4p8',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Fj7n0w8j4p8?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'teacher_youtube',
    channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
    grade: 2,
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_2',
    topic: 'School & Adventure Items',
    difficulty: 'Pre-A1 Beginner',
    learningObjectivesEn: [
      'Identify travel essentials: map, water bottle, camera, notebook',
      'Use sentence frame: "In my backpack, I have a..."',
      'Demonstrate listening for specific items in sequence'
    ],
    learningObjectivesVi: [
      'Nhận biết đồ dùng khám phá: bản đồ, bình nước, máy ảnh, sổ tay',
      'Sử dụng mẫu câu: "In my backpack, I have a..."',
      'Luyện nghe ghi nhớ thứ tự các món đồ dùng'
    ],
    descriptionEn: 'Ms. Trang unboxes her bright yellow adventure backpack! Learn how to pack for a school trip to the museum and practice essential English phrases.',
    descriptionVi: 'Cô Trang mở chiếc ba lô vàng phiêu lưu! Cùng học cách chuẩn bị đồ dùng cho chuyến dã ngoại bảo tàng và luyện các mẫu câu tiếng Anh cần thiết.',
    durationMinutes: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: true,
    allowEmbedding: true,
    createdAt: '2026-10-03',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g2-01-1',
        questionEn: 'What does Ms. Trang use to take pictures?',
        questionVi: 'Cô Trang dùng vật dụng gì để chụp ảnh kỷ niệm?',
        options: ['A camera (Chiếc máy ảnh)', 'A ruler (Cây thước kẻ)', 'An apple (Quả táo)'],
        correctIndex: 0,
        explanationEn: 'We use a camera to capture beautiful memories in Vietnam!',
        explanationVi: 'Chúng mình dùng máy ảnh để lưu giữ những khoảnh khắc tuyệt đẹp!',
        difficulty: 'easy'
      },
      {
        id: 'q-g2-01-2',
        questionEn: 'Which sentence is correct when describing your map?',
        questionVi: 'Câu nào đúng khi nói bé có một tấm bản đồ?',
        options: [
          'I have a map. (Tớ có một tấm bản đồ.)',
          'I am a map. (Tớ là tấm bản đồ.)',
          'I see no map. (Tớ không thấy bản đồ.)'
        ],
        correctIndex: 0,
        explanationEn: '"I have a map" shows ownership of your travel guide.',
        explanationVi: '"I have a map" diễn tả bé đang có một tấm bản đồ đồng hành.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'vid-g2-02',
    titleEn: 'Hoi An Lantern Festival – Light, Colors & Joy',
    titleVi: 'Lễ hội Đèn lồng Hội An – Ánh sáng, Sắc màu & Niềm vui',
    videoUrl: 'https://www.youtube.com/watch?v=3n8e6wY8n74',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3n8e6wY8n74?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'curated_youtube',
    channelOrAuthor: 'National Geographic Kids Asia',
    grade: 2,
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_2',
    topic: 'Traditional Festivals',
    difficulty: 'Pre-A1 Beginner',
    learningObjectivesEn: [
      'Learn festival vocabulary: lantern, river, night, bright, festival',
      'Appreciate traditional silk craft and riverside heritage in Hoi An',
      'Answer simple comprehension questions about night celebrations'
    ],
    learningObjectivesVi: [
      'Học từ vựng lễ hội: lantern (đèn lồng), river (dòng sông), night (ban đêm), bright (rực rỡ)',
      'Cảm nhận nét đẹp làng nghề đèn lồng và phố cổ ven sông Hoài',
      'Trả lời các câu hỏi nghe hiểu về đêm hội đèn hoa đăng'
    ],
    descriptionEn: 'Discover the ancient town of Hoi An at night as thousands of colorful paper and silk lanterns illuminate the serene river.',
    descriptionVi: 'Khám phá vẻ đẹp phố cổ Hội An về đêm khi hàng ngàn ngọn đèn hoa đăng bằng lụa và giấy thắp sáng dòng sông Hoài thơ mộng.',
    durationMinutes: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-04',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g2-02-1',
        questionEn: 'Where do people float lanterns in Hoi An?',
        questionVi: 'Mọi người thả đèn hoa đăng ở đâu tại Hội An?',
        options: ['On the river (Trên dòng sông)', 'On the roof (Trên mái nhà)', 'In the forest (Trong rừng sâu)'],
        correctIndex: 0,
        explanationEn: 'People gently float lanterns on the peaceful river.',
        explanationVi: 'Du khách thả những ngọn đèn lồng cầu chúc may mắn trên sông.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g2-03',
    titleEn: 'Floating Markets of the Mekong Delta – 3D Story',
    titleVi: 'Chợ nổi Đồng bằng Sông Cửu Long – Câu chuyện 3D trực quan',
    videoUrl: 'https://www.youtube.com/watch?v=0kL9m8e3n94',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0kL9m8e3n94?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'ai_generated',
    channelOrAuthor: 'VietDiscovery AI Animation Studio',
    grade: 2,
    gradeLevel: 'Grade 2',
    gradeBand: 'grade_2',
    topic: 'Geography & Local Life',
    difficulty: 'Pre-A1 Beginner',
    learningObjectivesEn: [
      'Identify fruits of Southern Vietnam: mango, pineapple, watermelon, coconut',
      'Understand how people trade goods on wooden boats',
      'Practice listening for fruit names and simple numbers'
    ],
    learningObjectivesVi: [
      'Nhận biết các loại trái cây miền Nam: xoài, dứa (khóm), dưa hấu, dừa',
      'Hiểu nét sinh hoạt giao thương độc đáo trên những chiếc ghe thuyền',
      'Luyện nghe tên các loại quả và số đếm đơn giản'
    ],
    descriptionEn: 'An immersive 3D animated voyage through Cai Rang floating market, showcasing tropical fruit boats and Southern water culture.',
    descriptionVi: 'Chuyến tham quan hoạt hình 3D sống động tại chợ nổi Cái Răng, chiêm ngưỡng những ghe thuyền chở đầy trái cây nhiệt đới.',
    durationMinutes: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-06',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g2-03-1',
        questionEn: 'What do boats sell at the floating market?',
        questionVi: 'Các ghe thuyền bán gì tại chợ nổi miền Tây?',
        options: ['Fresh fruits & food (Trái cây tươi & đồ ăn)', 'Shoes only (Chỉ bán giày dép)', 'Cars (Ô tô)'],
        correctIndex: 0,
        explanationEn: 'Boats sell delicious tropical fruits like mangoes, coconuts, and pineapples.',
        explanationVi: 'Các ghe thuyền bán nhiều trái cây nhiệt đới tươi ngon như xoài, dừa, khóm.',
        difficulty: 'easy'
      }
    ]
  },

  // ==========================================================================
  // GRADE 3 – GOLDEN ADVENTURE (Pre-A1 Foundation)
  // ==========================================================================
  {
    id: 'vid-g3-01',
    titleEn: 'Ha Long Bay & Hanoi Old Quarter Journey with Ms. Trang',
    titleVi: 'Hành trình Vịnh Hạ Long & Phố cổ Hà Nội cùng Cô Trang',
    videoUrl: 'https://www.youtube.com/watch?v=7uK8m4P9x30',
    embedUrl: 'https://www.youtube-nocookie.com/embed/7uK8m4P9x30?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'teacher_youtube',
    channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
    grade: 3,
    gradeLevel: 'Grade 3',
    gradeBand: 'grade_3',
    topic: 'Heritage & Landmarks',
    difficulty: 'Pre-A1 Foundation',
    learningObjectivesEn: [
      'Compare natural landmarks (Ha Long Bay) with historical streets (Hanoi Old Quarter)',
      'Use descriptive adjectives: ancient, wonderful, peaceful, bustling',
      'Explain travel experiences using simple past and present tense'
    ],
    learningObjectivesVi: [
      'So sánh danh lam thắng cảnh tự nhiên (Hạ Long) và phố cổ lịch sử (Hà Nội)',
      'Sử dụng tính từ miêu tả: ancient (cổ kính), wonderful (tuyệt vời), bustling (nhộn nhịp)',
      'Tập kể trải nghiệm du lịch qua các câu văn ngắn hoàn chỉnh'
    ],
    descriptionEn: 'Explore Northern Vietnam with Ms. Trang! From kayaking through limestone caves to tasting traditional egg coffee in the 36 Old Streets of Hanoi.',
    descriptionVi: 'Khám phá miền Bắc cùng Cô Trang! Từ chèo thuyền kayak qua các hang động kỳ vĩ đến thưởng thức cà phê trứng tại 36 phố phường Hà Nội.',
    durationMinutes: 6,
    thumbnailUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: true,
    allowEmbedding: true,
    createdAt: '2026-10-05',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g3-01-1',
        questionEn: 'Why is Ha Long Bay famous around the world?',
        questionVi: 'Vì sao Vịnh Hạ Long nổi tiếng khắp thế giới?',
        options: [
          'It has thousands of limestone islands. (Có hàng ngàn đảo đá vôi kỳ vĩ.)',
          'It has tall desert sand dunes. (Có những cồn cát sa mạc cao vút.)',
          'It is covered in thick snow. (Bao phủ bởi tuyết trắng dày.)'
        ],
        correctIndex: 0,
        explanationEn: 'Ha Long Bay is a UNESCO World Heritage Site with thousands of limestone karsts.',
        explanationVi: 'Vịnh Hạ Long là Di sản Thế giới được UNESCO công nhận với hàng ngàn đảo đá vôi độc đáo.',
        difficulty: 'medium'
      },
      {
        id: 'q-g3-01-2',
        questionEn: 'How many guilds or historic craft streets are in Hanoi’s ancient quarter?',
        questionVi: 'Khu phố cổ Hà Nội nổi tiếng với bao nhiêu phố nghề truyền thống?',
        options: ['36 streets (36 phố phường)', '10 streets (10 con phố)', '100 streets (100 con phố)'],
        correctIndex: 0,
        explanationEn: 'Hanoi Old Quarter is traditionally known for its 36 craft streets.',
        explanationVi: 'Khu phố cổ Hà Nội nổi danh trong thơ ca và lịch sử với 36 phố phường.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g3-02',
    titleEn: 'The Imperial City of Hue – Royal History & Music',
    titleVi: 'Kinh thành Huế – Lịch sử Hoàng gia & Âm nhạc Cung đình',
    videoUrl: 'https://www.youtube.com/watch?v=9jK4n8e5p72',
    embedUrl: 'https://www.youtube-nocookie.com/embed/9jK4n8e5p72?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'curated_youtube',
    channelOrAuthor: 'Discover Vietnam Education Channel',
    grade: 3,
    gradeLevel: 'Grade 3',
    gradeBand: 'grade_3',
    topic: 'Royal History & Music',
    difficulty: 'Pre-A1 Foundation',
    learningObjectivesEn: [
      'Identify key royal architecture: Citadel, Ngo Mon Gate, Perfume River',
      'Learn about Nha Nhac (Vietnamese Court Music)',
      'Describe historical monuments using respectful language'
    ],
    learningObjectivesVi: [
      'Nhận biết kiến trúc cung đình: Đại Nội, Cửa Ngọ Môn, Sông Hương',
      'Tìm hiểu về Nhã nhạc Cung đình Huế (Di sản văn hóa phi vật thể)',
      'Miêu tả các di tích lịch sử với ngôn từ trang trọng và tự hào'
    ],
    descriptionEn: 'Travel back in time to the Nguyen Dynasty in Hue! Walk through grand imperial gates and listen to traditional instruments on the Perfume River.',
    descriptionVi: 'Ngược dòng thời gian về thời triều Nguyễn tại cố đô Huế! Dạo bước qua Cửa Ngọ Môn uy nghi và lắng nghe nhã nhạc êm đềm trên dòng Hương Giang.',
    durationMinutes: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-07',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g3-02-1',
        questionEn: 'Which river flows gently through the city of Hue?',
        questionVi: 'Dòng sông nào êm đềm chảy qua trung tâm thành phố Huế?',
        options: ['Perfume River (Sông Hương)', 'Red River (Sông Hồng)', 'Amazon River (Sông Amazon)'],
        correctIndex: 0,
        explanationEn: 'The Perfume River (Sông Hương) flows through the romantic city of Hue.',
        explanationVi: 'Sông Hương gắn liền với nét đẹp trầm mặc và thơ mộng của xứ Huế.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g3-03',
    titleEn: 'Ban Gioc Waterfall – Majestic Borderland Nature',
    titleVi: 'Thác Bản Giốc – Hùng vĩ non nước biên cương',
    videoUrl: 'https://www.youtube.com/watch?v=2n8jK4e0p93',
    embedUrl: 'https://www.youtube-nocookie.com/embed/2n8jK4e0p93?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'ai_generated',
    channelOrAuthor: 'VietDiscovery AI Animation Studio',
    grade: 3,
    gradeLevel: 'Grade 3',
    gradeBand: 'grade_3',
    topic: 'Waterfalls & Mountains',
    difficulty: 'Pre-A1 Foundation',
    learningObjectivesEn: [
      'Learn geographical terms: waterfall, border, valley, stream, mountain',
      'Observe the seasonal water flow and rainbow mist effects',
      'Practice expressing awe and admiration: "It is breathtaking!"'
    ],
    learningObjectivesVi: [
      'Học các thuật ngữ địa lý: thác nước, biên giới, thung lũng, dòng suối, ngọn núi',
      'Quan sát dòng chảy theo mùa và cầu vồng tỏa sáng giữa làn sương mù',
      'Luyện tập mẫu câu cảm thán ngợi ca cảnh đẹp quê hương'
    ],
    descriptionEn: 'A breathtaking AI 3D visualization showcasing the multi-tiered cascades of Ban Gioc Waterfall in Cao Bang province.',
    descriptionVi: 'Thước phim 3D AI tuyệt đẹp tái hiện những tầng thác cuồn cuộn trắng xóa của Thác Bản Giốc tại tỉnh Cao Bằng.',
    durationMinutes: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-08',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g3-03-1',
        questionEn: 'In which province is the famous Ban Gioc Waterfall located?',
        questionVi: 'Thác Bản Giốc nổi tiếng nằm tại tỉnh nào của nước ta?',
        options: ['Cao Bang province (Tỉnh Cao Bằng)', 'Ca Mau province (Tỉnh Cà Mau)', 'Hue city (Thành phố Huế)'],
        correctIndex: 0,
        explanationEn: 'Ban Gioc Waterfall is in Trung Khanh district, Cao Bang province.',
        explanationVi: 'Thác Bản Giốc nằm tại huyện Trùng Khánh, tỉnh Cao Bằng vùng Đông Bắc.',
        difficulty: 'medium'
      }
    ]
  },

  // ==========================================================================
  // GRADE 4 – HERITAGE NAVIGATOR (A1 Elementary)
  // ==========================================================================
  {
    id: 'vid-g4-01',
    titleEn: 'Central Vietnam Coastal Wonders with Ms. Trang',
    titleVi: 'Kỳ quan duyên hải miền Trung cùng Cô Trang',
    videoUrl: 'https://www.youtube.com/watch?v=1bK8n9P4x21',
    embedUrl: 'https://www.youtube-nocookie.com/embed/1bK8n9P4x21?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'teacher_youtube',
    channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
    grade: 4,
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4',
    topic: 'Bridges & Ancient Temples',
    difficulty: 'A1 Elementary',
    learningObjectivesEn: [
      'Describe Da Nang’s modern architecture (Dragon Bridge, Golden Hands Bridge)',
      'Explore ancient Cham sanctuary at My Son and explain historical significance',
      'Use connective adverbs: First, Then, Furthermore, Finally'
    ],
    learningObjectivesVi: [
      'Miêu tả kiến trúc hiện đại của Đà Nẵng (Cầu Rồng, Cầu Vàng Bàn Tay)',
      'Khám phá thánh địa Mỹ Sơn cổ kính và giá trị khảo cổ di sản',
      'Sử dụng các từ nối trình tự thời gian khi thuyết trình'
    ],
    descriptionEn: 'Travel with Ms. Trang through Da Nang and Quang Nam! Witness the Dragon Bridge breathing fire and discover the red-brick temples of My Son Sanctuary.',
    descriptionVi: 'Cùng Cô Trang du hành qua Đà Nẵng và Quảng Nam! Chiêm ngưỡng Cầu Rồng phun lửa ấn tượng và khám phá các đền tháp gạch nung cổ kính tại Thánh địa Mỹ Sơn.',
    durationMinutes: 7,
    thumbnailUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: true,
    allowEmbedding: true,
    createdAt: '2026-10-07',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g4-01-1',
        questionEn: 'What special action can the Dragon Bridge perform on weekend evenings?',
        questionVi: 'Cầu Rồng tại Đà Nẵng có màn trình diễn đặc sắc gì vào cuối tuần?',
        options: [
          'It breathes fire and sprays water. (Phun lửa và phun nước.)',
          'It turns completely green. (Biến đổi hoàn toàn thành màu xanh.)',
          'It opens like a giant door. (Mở ra như cánh cửa lớn.)'
        ],
        correctIndex: 0,
        explanationEn: 'The Dragon Bridge famously breathes fire and sprays water on Saturday and Sunday nights.',
        explanationVi: 'Cầu Rồng Đà Nẵng biểu diễn phun lửa và phun nước sống động vào tối thứ Bảy và Chủ Nhật.',
        difficulty: 'easy'
      },
      {
        id: 'q-g4-01-2',
        questionEn: 'What material was used to build the ancient My Son towers without visible mortar?',
        questionVi: 'Vật liệu chính xây dựng các tháp Chăm Mỹ Sơn cổ kính không lộ vữa là gì?',
        options: [
          'Fired red bricks (Gạch nung đỏ truyền thống)',
          'Modern concrete (Bê tông hiện đại)',
          'White marble only (Đá cẩm thạch trắng)'
        ],
        correctIndex: 0,
        explanationEn: 'Ancient builders crafted the towers using meticulously fitted red bricks.',
        explanationVi: 'Người xưa đã sử dụng gạch nung đỏ với kỹ thuật gắn kết bí truyền kỳ diệu.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'vid-g4-02',
    titleEn: 'Delicious Vietnam! Traditional Food & Culinary Heritage',
    titleVi: 'Ẩm thực Việt Nam! Tinh hoa món ngon & Di sản văn hóa',
    videoUrl: 'https://www.youtube.com/watch?v=5mK9j0P4x91',
    embedUrl: 'https://www.youtube-nocookie.com/embed/5mK9j0P4x91?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'curated_youtube',
    channelOrAuthor: 'Culinary World for Young Learners',
    grade: 4,
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4',
    topic: 'Food & Culture',
    difficulty: 'A1 Elementary',
    learningObjectivesEn: [
      'Name key Vietnamese dishes: Pho, Banh mi, Spring rolls, Bun cha',
      'Describe flavors: savory, fragrant, fresh, sweet, and herbal',
      'Explain healthy culinary balance and the use of fresh herbs'
    ],
    learningObjectivesVi: [
      'Gọi tên các món ăn quốc tế yêu thích: Phở, Bánh mì, Gỏi cuốn, Bún chả',
      'Miêu tả hương vị ẩm thực bằng tiếng Anh: savory (đậm đà), fragrant (thơm lừng), fresh (tươi ngon)',
      'Hiểu sự cân bằng dinh dưỡng và nét độc đáo từ rau thơm Việt Nam'
    ],
    descriptionEn: 'An appetizing educational video exploring how Vietnamese cuisine balances fresh herbs, warm broths, and crispy textures to create world-famous dishes.',
    descriptionVi: 'Video sinh động khám phá nghệ thuật ẩm thực Việt Nam, sự kết hợp tinh tế giữa rau mùi thơm mát, nước dùng đậm đà và vỏ bánh mì giòn tan.',
    durationMinutes: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-09',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g4-02-1',
        questionEn: 'Which warm noodle soup is internationally celebrated as a culinary symbol of Vietnam?',
        questionVi: 'Món súp sợi truyền thống nào được xem là biểu tượng ẩm thực quốc tế của Việt Nam?',
        options: ['Pho (Phở)', 'Pizza (Bánh pizza)', 'Sushi (Cơm cuộn)'],
        correctIndex: 0,
        explanationEn: 'Pho is Vietnam’s national dish, simmered with aromatic spices.',
        explanationVi: 'Phở là tinh hoa ẩm thực Việt Nam với nước dùng ninh ngọt thanh cùng quế, hồi thơm nồng.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g4-03',
    titleEn: 'Phong Nha Caves – Underground Geological Wonders',
    titleVi: 'Hệ thống Hang động Phong Nha – Kỳ quan địa chất trong lòng đất',
    videoUrl: 'https://www.youtube.com/watch?v=8mK2n7P5x12',
    embedUrl: 'https://www.youtube-nocookie.com/embed/8mK2n7P5x12?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'ai_generated',
    channelOrAuthor: 'VietDiscovery AI Animation Studio',
    grade: 4,
    gradeLevel: 'Grade 4',
    gradeBand: 'grade_4',
    topic: 'Caves & Geology',
    difficulty: 'A1 Elementary',
    learningObjectivesEn: [
      'Understand how stalactites and stalagmites form over millions of years',
      'Discover subterranean rivers and UNESCO National Park biodiversity',
      'Practice scientific vocabulary: limestone, mineral, cavern, erosion'
    ],
    learningObjectivesVi: [
      'Hiểu cách măng đá và nhũ đá hình thành qua hàng triệu năm giọt nước lắng đọng',
      'Khám phá sông ngầm bí ẩn và sự đa dạng sinh học tại Vườn quốc gia Phong Nha - Kẻ Bàng',
      'Luyện từ vựng khoa học tự nhiên bằng tiếng Anh'
    ],
    descriptionEn: 'Fly deep into the illuminated caverns of Paradise Cave and Son Doong with realistic 3D AI modeling explaining cave geology to Grade 4 learners.',
    descriptionVi: 'Du hành vào lòng hang Động Thiên Đường và Sơn Đoòng qua mô phỏng 3D AI kỳ vĩ, giải thích hiện tượng địa chất đá vôi dành cho học sinh Lớp 4.',
    durationMinutes: 6,
    thumbnailUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-10',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g4-03-1',
        questionEn: 'What hangs from the ceiling of a limestone cave?',
        questionVi: 'Khối đá thạch nhũ nào rủ xuống từ trần hang động đá vôi?',
        options: ['Stalactites (Nhũ đá buông từ trần)', 'Stalagmites (Măng đá mọc từ nền đất)', 'Clouds (Mây bay)'],
        correctIndex: 0,
        explanationEn: 'Stalactites hold tight to the ceiling ("C" for ceiling).',
        explanationVi: 'Nhũ đá (Stalactites) hình thành từ trần hang rủ xuống do nước nhỏ giọt mang khoáng chất.',
        difficulty: 'medium'
      }
    ]
  },

  // ==========================================================================
  // GRADE 5 – YOUNG LEADER (A1+ Explorer)
  // ==========================================================================
  {
    id: 'vid-g5-01',
    titleEn: 'Ho Chi Minh City: Heritage Navigators & Modern Dynamism with Ms. Trang',
    titleVi: 'TP. Hồ Chí Minh: Dấu ấn di sản & Khát vọng tương lai cùng Cô Trang',
    videoUrl: 'https://www.youtube.com/watch?v=4mK1n8P7x93',
    embedUrl: 'https://www.youtube-nocookie.com/embed/4mK1n8P7x93?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'teacher_youtube',
    channelOrAuthor: 'Ms. Thu Trang (VietDiscovery)',
    grade: 5,
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_5',
    topic: 'Modern Vietnam & Global Integration',
    difficulty: 'A1+ Explorer',
    learningObjectivesEn: [
      'Compare iconic landmarks: Ben Thanh Market, Saigon Central Post Office, Landmark 81',
      'Discuss how Vietnam connects rich cultural traditions with innovative green technologies',
      'Construct compound sentences to express opinions on community development'
    ],
    learningObjectivesVi: [
      'Khảo sát các địa danh tiêu biểu: Chợ Bến Thành, Bưu điện Trung tâm, Tòa nhà Landmark 81',
      'Thảo luận cách Việt Nam kết nối truyền thống lịch sử với công nghệ xanh đổi mới sáng tạo',
      'Xây dựng các câu ghép phức tạp để bày tỏ quan điểm phát triển cộng đồng'
    ],
    descriptionEn: 'Join Ms. Trang in Vietnam’s bustling economic metropolis! From French-colonial architecture in District 1 to modern smart transportation and youthful ambitions.',
    descriptionVi: 'Cùng Cô Trang khám phá trung tâm kinh tế sôi động nhất nước! Từ kiến trúc cổ kính ở Quận 1 đến tàu điện Metro hiện đại và khát vọng vươn tầm của thế hệ trẻ.',
    durationMinutes: 8,
    thumbnailUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: true,
    allowEmbedding: true,
    createdAt: '2026-10-09',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g5-01-1',
        questionEn: 'Which tall skyscraper in Ho Chi Minh City stands as a symbol of modern Vietnamese engineering?',
        questionVi: 'Tòa nhà chọc trời nào tại TP.HCM là biểu tượng cho sự phát triển hiện đại của Việt Nam?',
        options: ['Landmark 81', 'Eiffel Tower', 'Big Ben'],
        correctIndex: 0,
        explanationEn: 'Landmark 81 is the tallest skyscraper in Vietnam, inspired by a traditional bamboo bundle.',
        explanationVi: 'Landmark 81 là tòa tháp cao nhất Việt Nam, lấy cảm hứng từ bó tre truyền thống đoàn kết.',
        difficulty: 'easy'
      },
      {
        id: 'q-g5-01-2',
        questionEn: 'What historic market with a famous clock tower is situated in the heart of District 1?',
        questionVi: 'Khu chợ lịch sử với tháp đồng hồ nổi tiếng nào tọa lạc tại trung tâm Quận 1?',
        options: ['Ben Thanh Market (Chợ Bến Thành)', 'Dong Xuan Market (Chợ Đồng Xuân)', 'Chatuchak Market'],
        correctIndex: 0,
        explanationEn: 'Ben Thanh Market is a historic hub of commerce and culture in Ho Chi Minh City.',
        explanationVi: 'Chợ Bến Thành là trung tâm giao thương và văn hóa lâu đời gắn liền với hình ảnh TP.HCM.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vid-g5-02',
    titleEn: 'Preserving Vietnam’s Wildlife: Endangered Species & National Parks',
    titleVi: 'Bảo tồn Động vật Hoang dã Việt Nam: Vườn quốc gia & Loài nguy cấp',
    videoUrl: 'https://www.youtube.com/watch?v=6mK3n9P8x44',
    embedUrl: 'https://www.youtube-nocookie.com/embed/6mK3n9P8x44?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'curated_youtube',
    channelOrAuthor: 'World Wildlife Fund (WWF) Vietnam Youth',
    grade: 5,
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_5',
    topic: 'Wildlife & Biodiversity',
    difficulty: 'A1+ Explorer',
    learningObjectivesEn: [
      'Learn about rare endemic animals: Red-shanked Douc langur, Saola, Asian elephant',
      'Understand habitat protection and eco-friendly conservation habits',
      'Present an eco-action pledge in clear English'
    ],
    learningObjectivesVi: [
      'Tìm hiểu các loài động vật đặc hữu quý hiếm: Voọc chà vá chân nâu, Sao la, Voi châu Á',
      'Hiểu tầm quan trọng của việc bảo vệ môi trường sống tự nhiên và thói quen sinh thái',
      'Thực hành cam kết hành động xanh bằng tiếng Anh lưu loát'
    ],
    descriptionEn: 'Discover the lush canopy of Son Tra Peninsula and Cuc Phuong National Park, learning how young Vietnamese rangers protect endangered animals.',
    descriptionVi: 'Khám phá thảm rừng xanh tươi tại Bán đảo Sơn Trà và Vườn quốc gia Cúc Phương, tìm hiểu công việc bảo tồn động vật quý hiếm của các kiểm lâm viên trẻ.',
    durationMinutes: 7,
    thumbnailUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-11',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g5-02-1',
        questionEn: 'Which colorful primate living on Son Tra Peninsula is nicknamed the "Queen of Primates"?',
        questionVi: 'Loài linh trưởng rực rỡ sắc màu sinh sống tại Bán đảo Sơn Trà được mệnh danh là gì?',
        options: [
          'Red-shanked Douc Langur (Voọc chà vá chân nâu)',
          'Brown Bear (Gấu nâu)',
          'Golden Retriever'
        ],
        correctIndex: 0,
        explanationEn: 'The Red-shanked Douc Langur is celebrated as one of the most colorful and beautiful primates in the world.',
        explanationVi: 'Voọc chà vá chân nâu được vinh danh là nữ hoàng linh trưởng nhờ bộ lông 5 màu lộng lẫy.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'vid-g5-03',
    titleEn: 'Digital Vietnam: Satellite Technology & Young Scientists',
    titleVi: 'Việt Nam Kỷ nguyên số: Công nghệ Vệ tinh & Nhà khoa học Trẻ',
    videoUrl: 'https://www.youtube.com/watch?v=3mK8n2P9x55',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3mK8n2P9x55?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1',
    sourceType: 'ai_generated',
    channelOrAuthor: 'VietDiscovery AI Animation Studio',
    grade: 5,
    gradeLevel: 'Grade 5',
    gradeBand: 'grade_5',
    topic: 'Science & Innovation',
    difficulty: 'A1+ Explorer',
    learningObjectivesEn: [
      'Explore aerospace engineering and Earth-observation satellites (VNREDSat-1)',
      'Use STEM terminology: orbit, sensor, climate monitoring, solar array',
      'Inspire future careers in science, technology, and global communication'
    ],
    learningObjectivesVi: [
      'Tìm hiểu ngành khoa học vũ trụ và vệ tinh quan sát Trái Đất của Việt Nam',
      'Học thuật ngữ STEM: orbit (quỹ đạo), sensor (cảm biến), solar array (tấm pin mặt trời)',
      'Truyền cảm hứng đam mê khoa học, công nghệ và khả năng hội nhập quốc tế'
    ],
    descriptionEn: 'A cinematic AI animation following Vietnamese engineers launching climate-monitoring micro-satellites into Earth orbit.',
    descriptionVi: 'Thước phim hoạt họa AI điện ảnh theo chân các kỹ sư trẻ Việt Nam phát triển và phóng vệ tinh quan sát khí hậu vào quỹ đạo Trái Đất.',
    durationMinutes: 6,
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    isTeacherCreated: false,
    allowEmbedding: true,
    createdAt: '2026-10-12',
    updatedAt: '2026-10-15',
    questions: [
      {
        id: 'q-g5-03-1',
        questionEn: 'How do Earth-observation satellites help Vietnamese farmers and fishermen?',
        questionVi: 'Vệ tinh quan sát Trái Đất giúp ích gì cho các bác nông dân và ngư dân Việt Nam?',
        options: [
          'By forecasting weather and tracking tropical storms. (Dự báo thời tiết & theo dõi bão nhiệt đới.)',
          'By cooking food directly. (Nấu đồ ăn trực tiếp.)',
          'By playing music in the sky. (Phát nhạc trên bầu trời.)'
        ],
        correctIndex: 0,
        explanationEn: 'Satellites monitor climate patterns and track storms to ensure coastal safety.',
        explanationVi: 'Vệ tinh cung cấp hình ảnh mây bão và khí hậu chính xác giúp ngư dân an tâm bám biển.',
        difficulty: 'medium'
      }
    ]
  }
];
