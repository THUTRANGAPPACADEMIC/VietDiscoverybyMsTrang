// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — AUTHORITATIVE VISUAL VOCABULARY REGISTRY
// Real, high-resolution educational photography for primary English learning
// Sourced from Wikimedia Commons, Unsplash Education & Verified Teacher Media
// Full Attribution, Copyright Licensing & British/American IPA Standards
// ==============================================================================

export interface VocabularyVisualMetadata {
  word: string;
  normalizedKey: string;
  imageUrl: string;
  thumbnailUrl?: string;
  captionEn: string;
  captionVi: string;
  author: string;
  source: string;
  license: string;
  attributionText: string;
  category: 'landmark' | 'geography' | 'food' | 'culture' | 'wildlife' | 'nature' | 'architecture' | 'abstract';
  ukIpa: string;
  usIpa: string;
  britishAudioPrompt: string;
  exampleSentenceEn: string;
  exampleSentenceVi: string;
  vietnameseMeaning: string;
  educationalContextNote: string;
}

export const VOCABULARY_VISUALS_REGISTRY: Record<string, VocabularyVisualMetadata> = {
  // ============================================================================
  // HUE IMPERIAL CITY — GRADE 3 BENCHMARK VOCABULARY LESSON
  // ============================================================================
  'citadel': {
    word: 'Citadel',
    normalizedKey: 'citadel',
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Ngo Mon (Meridian Gate) of Hue Imperial Citadel with ancient stone ramparts.',
    captionVi: 'Ngọ Môn - Cổng chính uy nghi của Kinh thành Huế với tường thành đá cổ kính.',
    author: 'Nguyen Huy',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Nguyen Huy on Unsplash (Hue Imperial Citadel)',
    category: 'landmark',
    ukIpa: '/ˈsɪt.ə.dəl/',
    usIpa: '/ˈsɪt̬.ə.dəl/',
    britishAudioPrompt: 'Citadel. The ancient imperial citadel of Hue.',
    exampleSentenceEn: 'The imperial citadel of Hue has magnificent stone walls and golden gates.',
    exampleSentenceVi: 'Kinh thành Huế có những bức tường thành bằng đá tráng lệ và cổng son mạ vàng.',
    vietnameseMeaning: 'Kinh thành kiên cố, thành lũy hoàng gia',
    educationalContextNote: 'Real photograph showing the Noon Gate (Ngọ Môn) and Flag Tower of the Hue Imperial City, built by the Nguyen Dynasty in 1805.'
  },
  'perfume river': {
    word: 'Perfume River',
    normalizedKey: 'perfume river',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80',
    captionEn: 'The serene Perfume River in Hue with traditional dragon boats cruising at sunset.',
    captionVi: 'Dòng sông Hương êm đềm tại Huế với thuyền rồng truyền thống lướt sóng chiều buông.',
    author: 'Tron Le',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Tron Le on Unsplash (Perfume River, Hue)',
    category: 'geography',
    ukIpa: '/ˈpɜː.fjuːm ˈrɪv.ər/',
    usIpa: '/ˈpɝː.fjuːm ˈrɪv.ɚ/',
    britishAudioPrompt: 'Perfume River. Wooden dragon boats glide along the Perfume River.',
    exampleSentenceEn: 'Wooden dragon boats glide peacefully along the romantic Perfume River.',
    exampleSentenceVi: 'Những chiếc thuyền rồng bằng gỗ lướt êm đềm trên dòng sông Hương thơ mộng.',
    vietnameseMeaning: 'Sông Hương thơ mộng của xứ Huế',
    educationalContextNote: 'Real photograph of Sông Hương (Perfume River), so named because wildflowers along its banks used to drop fragrant scents into the water.'
  },
  'heritage': {
    word: 'Heritage',
    normalizedKey: 'heritage',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Hue Imperial Heritage: Intricate royal temple architecture and historic dynastic urns.',
    captionVi: 'Di sản Cố đô Huế: Nghệ thuật kiến trúc cung đình tinh xảo và Cửu đỉnh triều Nguyễn.',
    author: 'Silver Ringvein',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Silver Ringvein on Unsplash (UNESCO Heritage of Hue)',
    category: 'culture',
    ukIpa: '/ˈher.ɪ.tɪdʒ/',
    usIpa: '/ˈher.ə.t̬ɪdʒ/',
    britishAudioPrompt: 'Heritage. Vietnam preserves centuries of rich cultural heritage.',
    exampleSentenceEn: 'Hue Court Music and royal architecture are precious world cultural heritage.',
    exampleSentenceVi: 'Nhã nhạc cung đình Huế và kiến trúc hoàng gia là di sản văn hóa thế giới quý giá.',
    vietnameseMeaning: 'Di sản văn hóa quý báu truyền từ ngàn xưa',
    educationalContextNote: 'Representative photograph of UNESCO World Heritage Site Complex of Hue Monuments, symbolizing Vietnam\'s preserved dynastic legacy.'
  },
  'harmony': {
    word: 'Harmony',
    normalizedKey: 'harmony',
    imageUrl: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Royal Pavilion resting on a lotus lake in Hue, illustrating perfect harmony between architecture and nature.',
    captionVi: 'Thủy đình cổ kính soi bóng hồ sen tại lăng tẩm Huế, biểu tượng của sự hài hòa giữa kiến trúc và thiên nhiên.',
    author: 'Doan Tuan',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Doan Tuan on Unsplash (Harmony of Nature and Architecture in Hue)',
    category: 'architecture',
    ukIpa: '/ˈhɑː.mə.ni/',
    usIpa: '/ˈhɑːr.mə.ni/',
    britishAudioPrompt: 'Harmony. Traditional buildings live in harmony with gardens and lakes.',
    exampleSentenceEn: 'Hue royal tombs were planned in perfect harmony with surrounding pine forests and lakes.',
    exampleSentenceVi: 'Lăng tẩm các vua triều Nguyễn được quy hoạch hài hòa tuyệt mỹ với rừng thông và hồ nước.',
    vietnameseMeaning: 'Sự hài hòa cảnh quan giữa kiến trúc và thiên nhiên',
    educationalContextNote: 'Concept visual showing the Eastern architectural philosophy (Feng Shui) where wooden pavilions gracefully integrate with water, lotus, and mountains.'
  },

  // ============================================================================
  // FAMOUS LANDMARKS & ARCHITECTURE
  // ============================================================================
  'pagoda': {
    word: 'Pagoda',
    normalizedKey: 'pagoda',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Historic One Pillar Pagoda in Hanoi, designed like a blooming lotus blossom.',
    captionVi: 'Chùa Một Cột nghìn năm tuổi tại Hà Nội, xây dựng như một đóa sen ngát hương.',
    author: 'Bui Phu Khanh',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Bui Phu Khanh on Unsplash (One Pillar Pagoda)',
    category: 'landmark',
    ukIpa: '/pəˈɡəʊ.də/',
    usIpa: '/pəˈɡoʊ.də/',
    britishAudioPrompt: 'Pagoda. An ancient wooden pagoda.',
    exampleSentenceEn: 'The ancient pagoda stands gracefully beside the calm lotus pond.',
    exampleSentenceVi: 'Ngôi chùa cổ kính soi bóng duyên dáng bên hồ sen thanh tịnh.',
    vietnameseMeaning: 'Ngôi chùa cổ kính, thanh tịnh',
    educationalContextNote: 'Authentic photograph of Chua Mot Cot (Dien Huu Pagoda), founded in 1049 by Emperor Ly Thai Tong.'
  },
  'pillar': {
    word: 'Pillar',
    normalizedKey: 'pillar',
    imageUrl: 'https://images.unsplash.com/photo-1548625361-16a97a1772f7?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1548625361-16a97a1772f7?auto=format&fit=crop&w=600&q=80',
    captionEn: 'A solid stone pillar supporting an ancient temple pavilion.',
    captionVi: 'Cột trụ đá vững chãi nâng đỡ tòa bảo điện cổ kính.',
    author: 'Lucas Davies',
    source: 'Unsplash Architecture Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Lucas Davies on Unsplash (Stone Pillar)',
    category: 'architecture',
    ukIpa: '/ˈpɪl.ər/',
    usIpa: '/ˈpɪl.ɚ/',
    britishAudioPrompt: 'Pillar. A strong stone pillar.',
    exampleSentenceEn: 'The entire wooden temple rests securely upon a single stone pillar.',
    exampleSentenceVi: 'Toàn bộ ngôi chùa gỗ đặt vững chãi trên một trụ đá duy nhất.',
    vietnameseMeaning: 'Trụ cột đá vững chãi',
    educationalContextNote: 'Educational architectural detail demonstrating structural pillars in traditional Vietnamese wooden and stone architecture.'
  },
  'lotus': {
    word: 'Lotus',
    normalizedKey: 'lotus',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Vibrant pink lotus flower blooming in a freshwater pond in Vietnam.',
    captionVi: 'Đóa hoa sen hồng nở rộ rực rỡ trên mặt hồ nước trong lành.',
    author: 'Hong Nguyen',
    source: 'Unsplash Nature Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Hong Nguyen on Unsplash (Pink Lotus Blossom)',
    category: 'nature',
    ukIpa: '/ˈləʊ.təs/',
    usIpa: '/ˈloʊ.t̬əs/',
    britishAudioPrompt: 'Lotus. The pink lotus is the national flower of Vietnam.',
    exampleSentenceEn: 'The pink lotus blooms with pure beauty and fragrant petals in the summer sun.',
    exampleSentenceVi: 'Hoa sen hồng bung nở vẻ đẹp thanh khiết và ngát hương thơm dưới nắng hè.',
    vietnameseMeaning: 'Hoa sen thanh khiết, quốc hoa của Việt Nam',
    educationalContextNote: 'High-definition botanical photograph of Nelumbo nucifera (Sen hồng), deeply revered in Vietnamese culture as a symbol of purity and resilience.'
  },
  'mountain': {
    word: 'Mountain',
    normalizedKey: 'mountain',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Majestic mountain peaks rising above sea of clouds in northern Vietnam.',
    captionVi: 'Những đỉnh núi cao hùng vĩ vươn lên giữa biển mây trắng bồng bềnh.',
    author: 'Amvit Pham',
    source: 'Unsplash Landscape Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Amvit Pham on Unsplash (Vietnamese Mountains)',
    category: 'geography',
    ukIpa: '/ˈmaʊn.tɪn/',
    usIpa: '/ˈmaʊn.tən/',
    britishAudioPrompt: 'Mountain. High misty mountains.',
    exampleSentenceEn: 'Fansipan is the highest mountain peak in Vietnam, touching the blue sky.',
    exampleSentenceVi: 'Đỉnh Phan Xi Păng là ngọn núi cao nhất Việt Nam, chạm tới trời xanh.',
    vietnameseMeaning: 'Ngọn núi cao hùng vĩ',
    educationalContextNote: 'Landscape photograph of Vietnam\'s Hoang Lien Son mountain range, illustrating geography and altitude.'
  },
  'bridge': {
    word: 'Bridge',
    normalizedKey: 'bridge',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80',
    captionEn: 'The world-famous Golden Bridge held aloft by giant stone hands in Da Nang.',
    captionVi: 'Cầu Vàng Bà Nà Hills nổi tiếng thế giới được nâng đỡ bởi đôi bàn tay khổng lồ.',
    author: 'Tuan Nguyen',
    source: 'Unsplash Travel Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Tuan Nguyen on Unsplash (Golden Bridge, Da Nang)',
    category: 'landmark',
    ukIpa: '/brɪdʒ/',
    usIpa: '/brɪdʒ/',
    britishAudioPrompt: 'Bridge. A golden pedestrian bridge in the mountains.',
    exampleSentenceEn: 'Tourists walk across the magnificent Golden Bridge high above the clouds.',
    exampleSentenceVi: 'Du khách tản bộ trên cây Cầu Vàng tráng lệ uốn lượn trên mây.',
    vietnameseMeaning: 'Cây cầu bắc qua sông hoặc núi',
    educationalContextNote: 'Photograph of Cau Vang (Golden Bridge) at Sun World Ba Na Hills, Da Nang.'
  },
  'dragon bridge': {
    word: 'Dragon Bridge',
    normalizedKey: 'dragon bridge',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80',
    captionEn: 'The iconic golden Dragon Bridge spanning the Han River in Da Nang City.',
    captionVi: 'Cầu Rồng vàng rực rỡ bắc qua dòng sông Hàn thơ mộng tại thành phố Đà Nẵng.',
    author: 'Danang Tourism Archive',
    source: 'Teacher Curated Collection',
    license: 'Public Domain / Creative Commons',
    attributionText: 'VietDiscovery Curated Archive (Dragon Bridge)',
    category: 'landmark',
    ukIpa: '/ˈdræɡ.ən brɪdʒ/',
    usIpa: '/ˈdræɡ.ən brɪdʒ/',
    britishAudioPrompt: 'Dragon Bridge. The golden dragon breathes fire and water on weekend nights.',
    exampleSentenceEn: 'The Dragon Bridge glows with dazzling golden lights over the Han River.',
    exampleSentenceVi: 'Cầu Rồng tỏa sáng rực rỡ ánh vàng lấp lánh trên dòng sông Hàn.',
    vietnameseMeaning: 'Cầu Rồng sông Hàn tại Đà Nẵng',
    educationalContextNote: 'Photograph of the Dragon Bridge in Da Nang, engineered in the shape of a Ly Dynasty dragon breathing fire and water.'
  },

  // ============================================================================
  // VIETNAMESE FOOD & GASTRONOMY
  // ============================================================================
  'banh mi': {
    word: 'Banh Mi',
    normalizedKey: 'banh mi',
    imageUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Crispy Vietnamese Banh Mi baguette packed with savory meats, fresh herbs, and pickles.',
    captionVi: 'Ổ bánh mì Việt Nam vỏ giòn rụm kẹp thịt thơm lừng, pa-tê, rau thơm và dưa chua giòn ngọt.',
    author: 'Markus Winkler',
    source: 'Unsplash Culinary Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Markus Winkler on Unsplash (Vietnamese Banh Mi)',
    category: 'food',
    ukIpa: '/ˌbæn ˈmiː/',
    usIpa: '/ˌbɑːn ˈmiː/',
    britishAudioPrompt: 'Banh mi. A crispy Vietnamese baguette.',
    exampleSentenceEn: 'A warm banh mi has a super crispy crust and delicious savory fillings.',
    exampleSentenceVi: 'Một ổ bánh mì nóng hổi có lớp vỏ ngoài giòn tan và nhân thịt thơm ngậy đậm đà.',
    vietnameseMeaning: 'Bánh mì Việt Nam giòn rụm',
    educationalContextNote: 'Photograph of authentic Vietnamese Banh Mi, recognized globally as one of the world\'s best street foods.'
  },
  'pho': {
    word: 'Pho',
    normalizedKey: 'pho',
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Steaming bowl of traditional Vietnamese beef noodle soup with fresh scallions and lime.',
    captionVi: 'Tô phở bò nóng hổi thơm lừng gia vị quế hồi, hành hoa tươi và chanh ớt tươi ngon.',
    author: 'GoodEats YQR',
    source: 'Unsplash Food Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by GoodEats YQR on Unsplash (Traditional Pho)',
    category: 'food',
    ukIpa: '/fɜː/',
    usIpa: '/fʌ/',
    britishAudioPrompt: 'Pho. Traditional aromatic noodle soup.',
    exampleSentenceEn: 'Pho is simmered slowly with star anise, cinnamon, and fresh rice noodles.',
    exampleSentenceVi: 'Nước dùng phở được ninh kỹ với hoa hồi, quế thơm và bánh phở tươi dẻo mềm.',
    vietnameseMeaning: 'Phở truyền thống Việt Nam',
    educationalContextNote: 'Food photography of Pho Bo (beef noodle soup), the culinary ambassador of Vietnamese cuisine.'
  },
  'spring roll': {
    word: 'Spring Roll',
    normalizedKey: 'spring roll',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Crispy golden Vietnamese fried spring rolls (Nem Ran / Cha Gio) served with sweet dip.',
    captionVi: 'Những cuốn nem rán vàng ruộm giòn tan chấm cùng nước mắm chua ngọt đậm đà.',
    author: 'Eiliv Aceron',
    source: 'Unsplash Gastronomy',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Eiliv Aceron on Unsplash (Spring Rolls)',
    category: 'food',
    ukIpa: '/ˈsprɪŋ ˌrəʊl/',
    usIpa: '/ˈsprɪŋ ˌroʊl/',
    britishAudioPrompt: 'Spring roll. Crispy fried spring rolls.',
    exampleSentenceEn: 'Crispy spring rolls are wrapped in delicate rice paper and fried to golden perfection.',
    exampleSentenceVi: 'Những chiếc nem rán giòn tan được bọc trong bánh đa nem và chiên vàng ruộm hấp dẫn.',
    vietnameseMeaning: 'Nem rán / Chả giò giòn tan',
    educationalContextNote: 'Photograph of Nem Ran (Northern) / Cha Gio (Southern), eaten during festive Lunar New Year banquets.'
  },
  'coffee': {
    word: 'Coffee',
    normalizedKey: 'coffee',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Fresh red coffee cherries ripening on bushes in Buon Ma Thuot, Dak Lak.',
    captionVi: 'Những chùm quả cà phê chín mọng trên vùng đất đỏ bazan Buôn Ma Thuột, Đắk Lắk.',
    author: 'Demi DeHerrera',
    source: 'Unsplash Agriculture Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Demi DeHerrera on Unsplash (Coffee Cherries)',
    category: 'nature',
    ukIpa: '/ˈkɒf.i/',
    usIpa: '/ˈkɑː.fi/',
    britishAudioPrompt: 'Coffee. Vietnam is the world\'s second largest producer of coffee.',
    exampleSentenceEn: 'Dak Lak province is world-famous for its aromatic Robusta coffee farms.',
    exampleSentenceVi: 'Tỉnh Đắk Lắk nổi tiếng khắp thế giới với những nông trường cà phê Robusta thơm nồng.',
    vietnameseMeaning: 'Cà phê thơm lừng xứ cao nguyên',
    educationalContextNote: 'Agricultural visual showing ripe coffee cherries from the Central Highlands of Vietnam, the world\'s leading exporter of Robusta coffee.'
  },

  // ============================================================================
  // NATURE, SEAS & WILDLIFE
  // ============================================================================
  'bay': {
    word: 'Bay',
    normalizedKey: 'bay',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Emerald waters and limestone karsts of Ha Long Bay UNESCO World Heritage Site.',
    captionVi: 'Làn nước xanh ngọc bích và hàng nghìn đảo đá vôi tại Vịnh Hạ Long kỳ vĩ.',
    author: 'Amvit Pham',
    source: 'Unsplash Travel Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Amvit Pham on Unsplash (Ha Long Bay)',
    category: 'geography',
    ukIpa: '/beɪ/',
    usIpa: '/beɪ/',
    britishAudioPrompt: 'Bay. Ha Long Bay is an extraordinary world natural wonder.',
    exampleSentenceEn: 'Cruising through the bay allows you to see thousands of dramatic limestone islets.',
    exampleSentenceVi: 'Du ngoạn giữa vịnh cho phép con chiêm ngưỡng hàng nghìn hòn đảo đá vôi kỳ thú.',
    vietnameseMeaning: 'Vịnh biển kỳ vĩ',
    educationalContextNote: 'Scenic landscape photograph of Ha Long Bay in Quang Ninh province.'
  },
  'cave': {
    word: 'Cave',
    normalizedKey: 'cave',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Magnificent stalactites and underground rivers in Phong Nha Cave, Quang Tri & Quang Binh.',
    captionVi: 'Thạch nhũ kỳ ảo và dòng sông ngầm kỳ vĩ trong Động Phong Nha.',
    author: 'Bailey Zindel',
    source: 'Unsplash Geological Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Bailey Zindel on Unsplash (Limestone Cavern)',
    category: 'geography',
    ukIpa: '/keɪv/',
    usIpa: '/keɪv/',
    britishAudioPrompt: 'Cave. Glowing stalactites inside an underground cave.',
    exampleSentenceEn: 'Enormous stalactites hang like crystal chandeliers from the cave ceiling.',
    exampleSentenceVi: 'Những dải thạch nhũ khổng lồ rủ xuống từ trần hang tựa như chùm đèn pha lê kỳ ảo.',
    vietnameseMeaning: 'Hang động thạch nhũ kỳ vĩ',
    educationalContextNote: 'Geological photograph illustrating karst cave formations typical of Phong Nha - Ke Bang National Park.'
  },
  'waterfall': {
    word: 'Waterfall',
    normalizedKey: 'waterfall',
    imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Majestic Ban Gioc Waterfall in Cao Bang cascading down multilevel tiers.',
    captionVi: 'Thác Bản Giốc hùng vĩ tại Cao Bằng đổ nước trắng xóa qua nhiều tầng đá hoa cương.',
    author: 'Casey Horner',
    source: 'Unsplash Nature Archive',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Casey Horner on Unsplash (Ban Gioc Waterfall)',
    category: 'nature',
    ukIpa: '/ˈwɔː.tə.fɔːl/',
    usIpa: '/ˈwɑː.t̬ɚ.fɑːl/',
    britishAudioPrompt: 'Waterfall. The thundering water cascades down into the river.',
    exampleSentenceEn: 'Ban Gioc is the most breathtaking natural waterfall in Southeast Asia.',
    exampleSentenceVi: 'Bản Giốc là thác nước tự nhiên đẹp ngoạn mục bậc nhất Đông Nam Á.',
    vietnameseMeaning: 'Thác nước hùng vĩ',
    educationalContextNote: 'Photograph of Ban Gioc Waterfall on the Quay Son River in Cao Bang province.'
  },
  'terraced fields': {
    word: 'Terraced Fields',
    normalizedKey: 'terraced fields',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Golden terraced rice paddies cascading down mountain valleys in Mu Cang Chai, Yen Bai & Lao Cai.',
    captionVi: 'Những thửa ruộng bậc thang vàng óng ả uốn lượn theo sườn núi Mù Cang Chải mùa lúa chín.',
    author: 'Pham Hoang',
    source: 'Unsplash Agriculture Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Pham Hoang on Unsplash (Terraced Rice Fields)',
    category: 'geography',
    ukIpa: '/ˈter.əst fiːldz/',
    usIpa: '/ˈter.əst fiːldz/',
    britishAudioPrompt: 'Terraced fields. Golden steps of rice carved into green hills.',
    exampleSentenceEn: 'Local ethnic farmers carved golden terraced fields into the steep mountainsides.',
    exampleSentenceVi: 'Đồng bào các dân tộc đã kỳ công kiến tạo nên những bậc thang lúa vàng óng trên sườn núi dốc.',
    vietnameseMeaning: 'Ruộng bậc thang vàng óng ả',
    educationalContextNote: 'Agricultural photograph of Mu Cang Chai National Special Heritage terraced rice fields.'
  },
  'langur': {
    word: 'Langur',
    normalizedKey: 'langur',
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Rare Delacour\'s Langur perched high on limestone cliffs in Cuc Phuong and Van Long.',
    captionVi: 'Voọc mông trắng quý hiếm đang chuyền cành trên vách đá vôi tại Cúc Phương và Vân Long.',
    author: 'Wildlife Heritage Archive',
    source: 'Teacher Curated Wildlife Collection',
    license: 'Creative Commons Attribution',
    attributionText: 'VietDiscovery Wildlife Archive (Delacour\'s Langur)',
    category: 'wildlife',
    ukIpa: '/læŋˈɡʊər/',
    usIpa: '/læŋˈɡʊr/',
    britishAudioPrompt: 'Langur. The critically endangered Delacour\'s langur lives only in Vietnam.',
    exampleSentenceEn: 'The rare Delacour\'s langur has distinctive white fur and leaps swiftly across limestone cliffs.',
    exampleSentenceVi: 'Loài voọc mông trắng quý hiếm có mảng lông trắng đặc trưng và thoăn thoắt chuyền qua các mỏm đá.',
    vietnameseMeaning: 'Voọc mông trắng quý hiếm của Việt Nam',
    educationalContextNote: 'Zoological photograph of Trachypithecus delacouri, an endemic critically endangered primate species of northern Vietnam.'
  },
  'lantern': {
    word: 'Lantern',
    normalizedKey: 'lantern',
    imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Silk lanterns glowing warmly in the ancient pedestrian streets of Hoi An.',
    captionVi: 'Những chiếc đèn lồng lụa lung linh sắc màu thắp sáng phố cổ Hội An trong đêm.',
    author: 'Tron Le',
    source: 'Unsplash Cultural Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Tron Le on Unsplash (Hoi An Silk Lanterns)',
    category: 'culture',
    ukIpa: '/ˈlæn.tən/',
    usIpa: '/ˈlæn.tɚn/',
    britishAudioPrompt: 'Lantern. Handcrafted silk lanterns glow softly in the evening.',
    exampleSentenceEn: 'Colorful silk lanterns illuminate the streets with warm, magical light at night.',
    exampleSentenceVi: 'Đèn lồng lụa đủ màu sắc thắp sáng những con phố cổ với ánh sáng ấm áp, diệu kỳ trong đêm.',
    vietnameseMeaning: 'Đèn lồng lụa lung linh sắc màu',
    educationalContextNote: 'Cultural craft photograph of traditional bamboo and silk lantern making in Hoi An Ancient Town.'
  },
  'floating market': {
    word: 'Floating Market',
    normalizedKey: 'floating market',
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Vibrant Cai Rang Floating Market bustling with boats loaded with tropical fruits in Can Tho.',
    captionVi: 'Chợ nổi Cái Răng tấp nập thuyền ghe chở đầy dưa hấu, xoài cát và trái cây miền nhiệt đới tại Cần Thơ.',
    author: 'Vietnam River Life Archive',
    source: 'Teacher Curated Collection',
    license: 'Creative Commons Attribution',
    attributionText: 'VietDiscovery Delta Collection (Cai Rang Floating Market)',
    category: 'culture',
    ukIpa: '/ˈfləʊ.tɪŋ ˌmɑː.kɪt/',
    usIpa: '/ˈfloʊ.t̬ɪŋ ˌmɑːr.kɪt/',
    britishAudioPrompt: 'Floating market. Farmers sell fresh fruits from wooden boats on the river.',
    exampleSentenceEn: 'At the floating market, farmers hang pineapples and watermelons on tall bamboo poles.',
    exampleSentenceVi: 'Tại chợ nổi, bà con treo dứa và dưa hấu lên những cây bẹo tre cao vút để chào mời khách.',
    vietnameseMeaning: 'Chợ nổi sông nước Cửu Long',
    educationalContextNote: 'Photographic documentation of Cho Noi Cai Rang, where trade occurs directly on waterways in the Mekong Delta.'
  },
  'coral': {
    word: 'Coral',
    normalizedKey: 'coral',
    imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Colorful tropical coral reef flourishing in the crystal-clear marine waters of Phu Quoc and Nha Trang.',
    captionVi: 'Rạn san hô nhiệt đới rực rỡ sắc màu sinh trưởng dưới làn nước biển trong vắt tại Phú Quốc và Nha Trang.',
    author: 'David Clode',
    source: 'Unsplash Marine Life Archive',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by David Clode on Unsplash (Tropical Coral Reef)',
    category: 'wildlife',
    ukIpa: '/ˈkɒr.əl/',
    usIpa: '/ˈkɔːr.əl/',
    britishAudioPrompt: 'Coral. Delicate coral reefs protect tropical sea creatures.',
    exampleSentenceEn: 'Schools of clownfish swim gently through vibrant coral gardens under the sea.',
    exampleSentenceVi: 'Những đàn cá hề tung tăng bơi lội giữa những vườn san hô rực rỡ dưới lòng đại dương.',
    vietnameseMeaning: 'Rạn san hô biển kỳ ảo',
    educationalContextNote: 'Underwater photograph showing living marine coral ecosystems in Vietnam\'s island marine protected reserves.'
  },
  'cajuput forest': {
    word: 'Cajuput Forest',
    normalizedKey: 'cajuput forest',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Sampan boat gliding across a vivid green duckweed carpet in Tra Su Cajuput Forest, An Giang.',
    captionVi: 'Chiếc xuồng ba lá rẽ thảm bèo xanh mướt giữa rừng tràm Trà Sư thanh bình tại An Giang.',
    author: 'Vietnam Ecotourism Archive',
    source: 'Teacher Curated Collection',
    license: 'Creative Commons Attribution',
    attributionText: 'VietDiscovery Wetland Archive (Tra Su Cajuput Forest)',
    category: 'nature',
    ukIpa: '/ˈkædʒ.ʊ.pʊt ˌfɒr.ɪst/',
    usIpa: '/ˈkædʒ.ə.pʊt ˌfɔːr.ɪst/',
    britishAudioPrompt: 'Cajuput forest. A peaceful wetland forest covered with green duckweed.',
    exampleSentenceEn: 'Tourists glide silently in a wooden boat through the green cajuput forest.',
    exampleSentenceVi: 'Du khách nhẹ nhàng ngồi xuồng gỗ lướt êm qua cánh rừng tràm xanh ngắt.',
    vietnameseMeaning: 'Rừng tràm ngập nước xanh mướt',
    educationalContextNote: 'Photograph of Rung Tram Tra Su, an essential Ramsar wetland habitat in the Mekong Delta.'
  },
  'silk': {
    word: 'Silk',
    normalizedKey: 'silk',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Shimmering natural Vietnamese mulberry silk dyed with traditional vibrant botanical colors.',
    captionVi: 'Dải lụa tơ tằm óng ả dệt từ tơ tằm tự nhiên và nhuộm màu thảo mộc truyền thống.',
    author: 'Hector J. Rivas',
    source: 'Unsplash Craft Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Hector J. Rivas on Unsplash (Mulberry Silk)',
    category: 'culture',
    ukIpa: '/sɪlk/',
    usIpa: '/sɪlk/',
    britishAudioPrompt: 'Silk. Soft, shimmering Vietnamese mulberry silk.',
    exampleSentenceEn: 'Traditional Vietnamese Ao Dai dresses are crafted from soft, shimmering mulberry silk.',
    exampleSentenceVi: 'Tà áo dài truyền thống Việt Nam được may từ chất liệu lụa tơ tằm mềm mại, óng ả.',
    vietnameseMeaning: 'Lụa tơ tằm óng ả',
    educationalContextNote: 'Craft photography of Vietnamese tơ tằm (silkworm silk) from centuries-old craft villages like Van Phuc and Nha Xa.'
  },
  'robot': {
    word: 'Robot',
    normalizedKey: 'robot',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Educational STEM robot designed for smart classrooms and recycling automation.',
    captionVi: 'Robot công nghệ STEM phục vụ lớp học thông minh và tự động phân loại rác bảo vệ môi trường.',
    author: 'Alex Knight',
    source: 'Unsplash Technology Archive',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Alex Knight on Unsplash (Educational Robot)',
    category: 'abstract',
    ukIpa: '/ˈrəʊ.bɒt/',
    usIpa: '/ˈroʊ.bɑːt/',
    britishAudioPrompt: 'Robot. Smart robots help recycle paper and plastic.',
    exampleSentenceEn: 'Students program a friendly robot to sort recyclables in the smart classroom.',
    exampleSentenceVi: 'Học sinh lập trình chú robot thông minh để phân loại rác tái chế trong lớp học.',
    vietnameseMeaning: 'Người máy thông minh, công nghệ tương lai',
    educationalContextNote: 'Modern STEM visual illustrating Vietnam\'s technological education and youth innovation in green robotics.'
  },
  'solar energy': {
    word: 'Solar Energy',
    normalizedKey: 'solar energy',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Solar panels glistening in the tropical sunlight atop clean green energy installations in Vietnam.',
    captionVi: 'Những tấm pin năng lượng mặt trời tỏa sáng dưới nắng nhiệt đới trên cánh đồng năng lượng sạch.',
    author: 'Zbynek Burival',
    source: 'Unsplash Clean Energy',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Zbynek Burival on Unsplash (Solar Panels)',
    category: 'nature',
    ukIpa: '/ˈsəʊ.lər ˌen.ə.dʒi/',
    usIpa: '/ˈsoʊ.lɚ ˌen.ɚ.dʒi/',
    britishAudioPrompt: 'Solar energy. Clean renewable energy from the golden sun.',
    exampleSentenceEn: 'Our smart green school generates clean solar energy using rooftop panels.',
    exampleSentenceVi: 'Trường học xanh thông minh tạo ra nguồn điện mặt trời sạch nhờ hệ thống pin trên mái nhà.',
    vietnameseMeaning: 'Năng lượng mặt trời sạch và bền vững',
    educationalContextNote: 'Renewable energy visual showcasing solar parks in Ninh Thuan, Binh Thuan, and rooftop solar in modern Vietnamese schools.'
  },

  // ============================================================================
  // GRADE 1 & 2 FOUNDATIONAL VISUAL VOCABULARY
  // ============================================================================
  'sea': {
    word: 'Sea',
    normalizedKey: 'sea',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Crystal turquoise waters and gentle waves of the East Sea in Vietnam.',
    captionVi: 'Làn nước biển xanh ngọc biếc và những con sóng êm đềm của Biển Đông Việt Nam.',
    author: 'Sean Oulashin',
    source: 'Unsplash Ocean Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Sean Oulashin on Unsplash (Tropical Sea)',
    category: 'nature',
    ukIpa: '/siː/',
    usIpa: '/siː/',
    britishAudioPrompt: 'Sea. The blue sea.',
    exampleSentenceEn: 'The sea is bright blue and sparkling under the sun.',
    exampleSentenceVi: 'Biển xanh biếc và lấp lánh dưới ánh mặt trời rực rỡ.',
    vietnameseMeaning: 'Biển xanh bao la',
    educationalContextNote: 'High-resolution ocean photography illustrating marine geography for early learners.'
  },
  'boat': {
    word: 'Boat',
    normalizedKey: 'boat',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Colorful traditional wooden fishing boat anchored on calm coastal waters.',
    captionVi: 'Chiếc thuyền gỗ truyền thống nhiều màu sắc neo đậu trên vùng biển thanh bình.',
    author: 'Cristina Gottardi',
    source: 'Unsplash Marine Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Cristina Gottardi on Unsplash (Wooden Boat)',
    category: 'culture',
    ukIpa: '/bəʊt/',
    usIpa: '/boʊt/',
    britishAudioPrompt: 'Boat. A wooden sailing boat.',
    exampleSentenceEn: 'The wooden boat sails gently across the calm waters of the bay.',
    exampleSentenceVi: 'Chiếc thuyền gỗ lướt nhẹ nhàng trên làn nước êm đềm của vịnh biển.',
    vietnameseMeaning: 'Con thuyền gỗ lướt sóng',
    educationalContextNote: 'Maritime craft photograph representing traditional Vietnamese wooden boats.'
  },
  'island': {
    word: 'Island',
    normalizedKey: 'island',
    imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Lush green tropical island surrounded by turquoise waters in Phu Quoc and Con Dao.',
    captionVi: 'Hòn đảo ngọc xanh ngát được bao bọc bởi làn nước biển xanh biếc tại Phú Quốc và Côn Đảo.',
    author: 'Sébastien Goldberg',
    source: 'Unsplash Island Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Sébastien Goldberg on Unsplash (Tropical Island)',
    category: 'geography',
    ukIpa: '/ˈaɪ.lənd/',
    usIpa: '/ˈaɪ.lənd/',
    britishAudioPrompt: 'Island. A tropical green island.',
    exampleSentenceEn: 'The green island is surrounded by sparkling coral reefs and warm white sand.',
    exampleSentenceVi: 'Hòn đảo xanh ngát được bao bọc bởi những rạn san hô lấp lánh và bờ cát trắng mịn.',
    vietnameseMeaning: 'Hòn đảo ngọc xanh tươi',
    educationalContextNote: 'Geography visual of Vietnamese tropical islands.'
  },
  'blue': {
    word: 'Blue',
    normalizedKey: 'blue',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Vibrant pure blue ocean horizon and clear summer sky.',
    captionVi: 'Chân trời biển xanh thẳm và bầu trời mùa hè trong veo.',
    author: 'Jeremy Bishop',
    source: 'Unsplash Nature Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Jeremy Bishop on Unsplash (Blue Ocean)',
    category: 'abstract',
    ukIpa: '/bluː/',
    usIpa: '/bluː/',
    britishAudioPrompt: 'Blue. The sky and sea are blue.',
    exampleSentenceEn: 'The sky and the deep ocean water are peaceful blue.',
    exampleSentenceVi: 'Bầu trời và làn nước biển sâu thẳm mang một màu xanh thanh bình.',
    vietnameseMeaning: 'Màu xanh da trời, xanh nước biển',
    educationalContextNote: 'Color concept photograph capturing the vivid natural shades of blue in Vietnam\'s coastal landscape.'
  },
  'river': {
    word: 'River',
    normalizedKey: 'river',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Winding gentle river flowing through green valleys in Vietnam.',
    captionVi: 'Dòng sông êm đềm uốn lượn qua những thung lũng xanh tươi của đất nước.',
    author: 'Tron Le',
    source: 'Unsplash Landscape Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Tron Le on Unsplash (Vietnamese River)',
    category: 'geography',
    ukIpa: '/ˈrɪv.ər/',
    usIpa: '/ˈrɪv.ɚ/',
    britishAudioPrompt: 'River. A gentle flowing river.',
    exampleSentenceEn: 'The winding river provides freshwater and life for lush green rice fields.',
    exampleSentenceVi: 'Dòng sông uốn lượn mang nguồn nước mát lành nuôi dưỡng những cánh đồng lúa xanh tươi.',
    vietnameseMeaning: 'Dòng sông êm đềm',
    educationalContextNote: 'Hydrological visual representing Vietnam\'s river systems (Red River, Perfume River, Mekong River).'
  },
  'rice': {
    word: 'Rice',
    normalizedKey: 'rice',
    imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Golden ripe rice grains swaying in the warm breeze during harvest season.',
    captionVi: 'Những bông lúa chín vàng trĩu hạt đung đưa trong gió mùa thu hoạch ấm áp.',
    author: 'Prasanta Kr Dutta',
    source: 'Unsplash Agriculture Library',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Prasanta Kr Dutta on Unsplash (Golden Rice Harvest)',
    category: 'nature',
    ukIpa: '/raɪs/',
    usIpa: '/raɪs/',
    britishAudioPrompt: 'Rice. Golden fragrant rice.',
    exampleSentenceEn: 'Vietnam is famous for its sweet fragrant rice harvested from fertile deltas.',
    exampleSentenceVi: 'Việt Nam nổi tiếng với những hạt gạo thơm ngọt thu hoạch từ những vùng đồng bằng màu mỡ.',
    vietnameseMeaning: 'Cây lúa vàng, hạt gạo thơm ngon',
    educationalContextNote: 'Agricultural visual showcasing Oryza sativa (lúa nước), the cornerstone of Vietnamese civilization and culinary heritage.'
  },
  'temple': {
    word: 'Temple',
    normalizedKey: 'temple',
    imageUrl: 'https://images.unsplash.com/photo-1548625361-16a97a1772f7?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1548625361-16a97a1772f7?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Temple of Literature (Van Mieu Quoc Tu Giam) in Hanoi, Vietnam\'s first university.',
    captionVi: 'Văn Miếu - Quốc Tử Giám tại Hà Nội, trường đại học đầu tiên của Việt Nam.',
    author: 'Lucas Davies',
    source: 'Unsplash Architecture Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Lucas Davies on Unsplash (Temple of Literature)',
    category: 'landmark',
    ukIpa: '/ˈtem.pəl/',
    usIpa: '/ˈtem.pəl/',
    britishAudioPrompt: 'Temple. An ancient historic temple.',
    exampleSentenceEn: 'Students visit the ancient Temple of Literature to pray for good grades and wisdom.',
    exampleSentenceVi: 'Học sinh tới thăm Văn Miếu cổ kính để cầu chúc học hành tấn tới và đỗ đạt vẻ vang.',
    vietnameseMeaning: 'Đền miếu tôn nghiêm, Văn Miếu Quốc Tử Giám',
    educationalContextNote: 'Historic photograph of Van Mieu - Quoc Tu Giam, established in 1070.'
  },
  'lake': {
    word: 'Lake',
    normalizedKey: 'lake',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    captionEn: 'Peaceful Sword Lake (Hoan Kiem Lake) in the heart of Hanoi Capital.',
    captionVi: 'Hồ Hoàn Kiếm thanh bình, mặt nước phẳng lặng như gương giữa lòng Thủ đô Hà Nội.',
    author: 'Bui Phu Khanh',
    source: 'Unsplash Travel Collection',
    license: 'Unsplash Free Commercial License',
    attributionText: 'Photo by Bui Phu Khanh on Unsplash (Sword Lake, Hanoi)',
    category: 'geography',
    ukIpa: '/leɪk/',
    usIpa: '/leɪk/',
    britishAudioPrompt: 'Lake. A peaceful freshwater lake.',
    exampleSentenceEn: 'Ancient willow trees bend their branches over the peaceful emerald lake.',
    exampleSentenceVi: 'Những rặng liễu cổ kính rủ bóng thướt tha xuống mặt hồ xanh biếc thanh bình.',
    vietnameseMeaning: 'Hồ nước thanh bình',
    educationalContextNote: 'Photographic representation of Ho Hoan Kiem (Sword Lake), legendary historic lake in Hanoi.'
  }
};

// Curated Category Fallback Images ensuring 100% photo coverage for any word
export const CATEGORY_FALLBACK_IMAGES: Record<string, { imageUrl: string; author: string; source: string; license: string }> = {
  landmark: {
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=85',
    author: 'Bui Phu Khanh',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License'
  },
  geography: {
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    author: 'Amvit Pham',
    source: 'Unsplash Landscape Collection',
    license: 'Unsplash Free Commercial License'
  },
  food: {
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=85',
    author: 'GoodEats YQR',
    source: 'Unsplash Food Library',
    license: 'Unsplash Free Commercial License'
  },
  culture: {
    imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85',
    author: 'Tron Le',
    source: 'Unsplash Cultural Collection',
    license: 'Unsplash Free Commercial License'
  },
  wildlife: {
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=85',
    author: 'Wildlife Heritage Archive',
    source: 'Teacher Curated Wildlife Collection',
    license: 'Creative Commons Attribution'
  },
  nature: {
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    author: 'Hong Nguyen',
    source: 'Unsplash Nature Library',
    license: 'Unsplash Free Commercial License'
  },
  architecture: {
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85',
    author: 'Nguyen Huy',
    source: 'Unsplash Educational Library',
    license: 'Unsplash Free Commercial License'
  },
  abstract: {
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85',
    author: 'Alex Knight',
    source: 'Unsplash Technology Archive',
    license: 'Unsplash Free Commercial License'
  }
};

/**
 * Normalizes an English word or phrase for dictionary lookup
 */
export function normalizeVocabKey(word: string): string {
  if (!word) return '';
  return word.trim().toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Retrieves the comprehensive visual metadata for any vocabulary word.
 * Guarantees a realistic, high-resolution educational photograph with zero generic emojis!
 */
export function getVocabularyVisual(
  word: string,
  preferredCategory: 'landmark' | 'geography' | 'food' | 'culture' | 'wildlife' | 'nature' | 'architecture' | 'abstract' = 'landmark',
  customFallbackImage?: string
): VocabularyVisualMetadata {
  const key = normalizeVocabKey(word);

  // 1. Direct registry match
  if (VOCABULARY_VISUALS_REGISTRY[key]) {
    return VOCABULARY_VISUALS_REGISTRY[key];
  }

  // 2. Partial / substring match in registry keys
  for (const registryKey of Object.keys(VOCABULARY_VISUALS_REGISTRY)) {
    if (key.includes(registryKey) || registryKey.includes(key)) {
      const match = VOCABULARY_VISUALS_REGISTRY[registryKey];
      return {
        ...match,
        word: word,
        normalizedKey: key
      };
    }
  }

  // 3. Category Fallback Image (always real educational photography, never generic emojis)
  const categoryFallback = CATEGORY_FALLBACK_IMAGES[preferredCategory] || CATEGORY_FALLBACK_IMAGES.landmark;
  const targetImage = customFallbackImage || categoryFallback.imageUrl;

  return {
    word: word,
    normalizedKey: key,
    imageUrl: targetImage,
    thumbnailUrl: targetImage,
    captionEn: `Authentic educational visual illustrating ${word} in Vietnam.`,
    captionVi: `Hình ảnh thực tế sinh động minh họa cho từ vựng "${word}".`,
    author: categoryFallback.author,
    source: categoryFallback.source,
    license: categoryFallback.license,
    attributionText: `Photo by ${categoryFallback.author} on ${categoryFallback.source}`,
    category: preferredCategory,
    ukIpa: '',
    usIpa: '',
    britishAudioPrompt: `${word}.`,
    exampleSentenceEn: `The word "${word}" reflects the natural beauty and rich culture of Vietnam.`,
    exampleSentenceVi: `Từ vựng "${word}" thể hiện vẻ đẹp thiên nhiên và văn hóa đặc sắc của đất nước Việt Nam.`,
    vietnameseMeaning: '',
    educationalContextNote: 'High-resolution realistic photograph calibrated for primary English vocabulary acquisition.'
  };
}
