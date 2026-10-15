const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('vietnam_provinces_raw.geojson', 'utf8'));

// Calibrated Bounding Box matching VietnamMap.tsx WGS84
const minLon = 101.8;
const maxLon = 117.2;
const minLat = 6.8;
const maxLat = 23.6;

const svgWidth = 920;
const svgHeight = 1120;
const paddingX = 40;
const paddingY = 40;

const drawW = svgWidth - paddingX * 2;
const drawH = svgHeight - paddingY * 2;

function project(lon, lat) {
  const x = paddingX + ((lon - minLon) / (maxLon - minLon)) * drawW;
  const y = paddingY + ((maxLat - lat) / (maxLat - minLat)) * drawH;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function rdp(points, epsilon) {
  if (points.length <= 2) return points;
  let dmax = 0;
  let index = 0;
  const [x1, y1] = points[0];
  const [x2, y2] = points[points.length - 1];

  for (let i = 1; i < points.length - 1; i++) {
    const d = distToSegment(points[i][0], points[i][1], x1, y1, x2, y2);
    if (d > dmax) {
      dmax = d;
      index = i;
    }
  }

  if (dmax > epsilon) {
    const rec1 = rdp(points.slice(0, index + 1), epsilon);
    const rec2 = rdp(points.slice(index), epsilon);
    return rec1.slice(0, rec1.length - 1).concat(rec2);
  } else {
    return [points[0], points[points.length - 1]];
  }
}

function key(p) { return p[0].toFixed(5) + ',' + p[1].toFixed(5); }

function dissolveFeatures(features) {
  const allSegs = [];
  for (const f of features) {
    const geom = f.geometry;
    const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
    for (const poly of polys) {
      for (const ring of poly) {
        if (!ring || ring.length < 3) continue;
        for (let i = 0; i < ring.length - 1; i++) {
          allSegs.push([ring[i], ring[i+1]]);
        }
      }
    }
  }

  // Count undirected edges
  const edgeCount = new Map();
  for (const s of allSegs) {
    const k1 = key(s[0]) + '|' + key(s[1]);
    const k2 = key(s[1]) + '|' + key(s[0]);
    if (edgeCount.has(k2)) {
      edgeCount.set(k2, edgeCount.get(k2) + 1);
    } else {
      edgeCount.set(k1, (edgeCount.get(k1) || 0) + 1);
    }
  }

  // Filter boundary segments only
  const boundarySegs = [];
  for (const s of allSegs) {
    const k1 = key(s[0]) + '|' + key(s[1]);
    const k2 = key(s[1]) + '|' + key(s[0]);
    if (edgeCount.get(k1) === 1 || edgeCount.get(k2) === 1) {
      boundarySegs.push(s);
    }
  }

  // Build adjacency
  const nextMap = new Map();
  for (const s of boundarySegs) {
    const from = key(s[0]);
    if (!nextMap.has(from)) nextMap.set(from, []);
    nextMap.get(from).push(s);
  }

  const rings = [];
  const used = new Set();

  for (const s of boundarySegs) {
    const startKey = key(s[0]);
    const segKey = key(s[0]) + '->' + key(s[1]);
    if (used.has(segKey)) continue;

    const currentRing = [s[0]];
    let curr = s[1];
    used.add(segKey);

    let steps = 0;
    while (steps < 10000) {
      steps++;
      currentRing.push(curr);
      const currKey = key(curr);
      if (currKey === startKey) break;
      const candidates = nextMap.get(currKey) || [];
      const nextSeg = candidates.find(cand => !used.has(key(cand[0]) + '->' + key(cand[1])));
      if (!nextSeg) break;
      used.add(key(nextSeg[0]) + '->' + key(nextSeg[1]));
      curr = nextSeg[1];
    }

    if (currentRing.length > 3) {
      rings.push(currentRing);
    }
  }

  return rings;
}

// 34 Official Units Metadata & Mapping from 63 raw provinces
const PROVINCES_34_CONFIG = [
  // 1-6: CENTRALLY-RUN CITIES
  {
    code: 'HN',
    id: 'vn-34-hn',
    nameVi: 'Thủ đô Hà Nội',
    nameEn: 'Hanoi Capital',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    rawNames: ['Ha Noi city'],
    emoji: '🐢',
    image: '/destinations/hanoi_turtle_tower.jpg',
    speechEn: 'Hanoi Capital! The peaceful thousand-year-old capital city of Vietnam with historic Sword Lake.',
    learningEn: 'The historic capital city of Vietnam, famous for Sword Lake, Temple of Literature, and delicious Pho.',
    landmarkEn: 'Sword Lake & Turtle Tower',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 200, y: 175 }
  },
  {
    code: 'HP',
    id: 'vn-34-hp',
    nameVi: 'Thành phố Hải Phòng',
    nameEn: 'Hai Phong Port City',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    rawNames: ['Hai Phong city'],
    emoji: '⚓',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Hai Phong City! The major northern port city, home to Cat Ba Archipelago and Bach Long Vi Island.',
    learningEn: 'The Red Flamboyant flower city and northern maritime gateway with Cat Ba Biosphere Reserve.',
    landmarkEn: 'Cat Ba Archipelago & Port',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 375, y: 220 }
  },
  {
    code: 'HUE',
    id: 'vn-34-hue',
    nameVi: 'Thành phố Huế',
    nameEn: 'Hue Imperial City',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    rawNames: ['Thua Thien - Hue'],
    emoji: '🏯',
    image: '/destinations/hue_citadel.jpg',
    speechEn: 'Hue City! The magnificent imperial heritage capital along the gentle Perfume River.',
    learningEn: 'The ancient royal capital with the UNESCO Imperial Citadel, royal tombs, and Trang Tien Bridge.',
    landmarkEn: 'Hue Imperial Citadel & Perfume River',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 290, y: 460 }
  },
  {
    code: 'DN',
    id: 'vn-34-dn',
    nameVi: 'Thành phố Đà Nẵng',
    nameEn: 'Da Nang City',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    rawNames: ['Da Nang city'],
    emoji: '🌉',
    image: '/destinations/danang_golden_bridge.jpg',
    speechEn: 'Da Nang City! Modern coastal metropolis with the Golden Bridge and Paracel Islands (Hoang Sa).',
    learningEn: 'Modern coastal hub famous for the Golden Bridge held by giant stone hands and Dragon Bridge.',
    landmarkEn: 'Golden Bridge & Dragon Bridge (Includes Hoang Sa Islands)',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 440, y: 490 }
  },
  {
    code: 'HCM',
    id: 'vn-34-hcm',
    nameVi: 'Thành phố Hồ Chí Minh',
    nameEn: 'Ho Chi Minh City',
    region: 'South',
    zone: 'Đông Nam Bộ',
    rawNames: ['Ho Chi Minh city', 'Binh Duong', 'Ba Ria - Vung Tau'],
    emoji: '🏙️',
    image: '/destinations/hcmc_benthanh.jpg',
    speechEn: 'Ho Chi Minh City! The bustling economic heartbeat of Vietnam, including Binh Duong, Vung Tau, and Con Dao Islands.',
    learningEn: 'The vibrant economic center combining Saigon, Thu Dau Mot, Vung Tau coast, Landmark 81, and beautiful Con Dao Islands.',
    landmarkEn: 'Ben Thanh Market & Vung Tau Coast (Includes Con Dao)',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: false,
    labelAnchor: { x: 300, y: 830 }
  },
  {
    code: 'CT',
    id: 'vn-34-ct',
    nameVi: 'Thành phố Cần Thơ',
    nameEn: 'Can Tho City',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    rawNames: ['Can Tho city', 'Hau Giang', 'Soc Trang'],
    emoji: '🛶',
    image: '/destinations/mekong_delta.jpg',
    speechEn: 'Can Tho City! The vibrant heart of Mekong Delta, renowned for Cai Rang Floating Market.',
    learningEn: 'The capital of the Southwest, world-famous for colorful floating markets and fruitful orchards.',
    landmarkEn: 'Cai Rang Floating Market & Ninh Kieu Wharf',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 215, y: 920 }
  },

  // 7-20: 14 NORTHERN PROVINCES
  {
    code: 'LC',
    id: 'vn-34-lc',
    nameVi: 'Tỉnh Lai Châu',
    nameEn: 'Lai Chau Province',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    rawNames: ['Lai Chau'],
    emoji: '🏔️',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Lai Chau Province! Majestic northwestern mountain ranges and the mighty Da River.',
    learningEn: 'Northwestern frontier surrounded by majestic mountain passes and dramatic limestone valleys.',
    landmarkEn: 'O Quy Ho Pass & Pu Si Lung Peak',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'DB',
    id: 'vn-34-db',
    nameVi: 'Tỉnh Điện Biên',
    nameEn: 'Dien Bien Province',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    rawNames: ['Dien Bien'],
    emoji: '🎖️',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Dien Bien Province! Famous for the historic victory of Dien Bien Phu and Muong Thanh Valley.',
    learningEn: 'Historic valley of the heroic Dien Bien Phu victory and the junction border of three nations.',
    landmarkEn: 'Dien Bien Phu Victory Monument & A Pa Chai',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'SL',
    id: 'vn-34-sl',
    nameVi: 'Tỉnh Sơn La',
    nameEn: 'Son La Province',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    rawNames: ['Son La', 'Hoa Binh'],
    emoji: '🌸',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Son La Province! Green Moc Chau Tea Hills and the giant Son La and Hoa Binh Hydropower Dams.',
    learningEn: 'Famous for cool green tea hills of Moc Chau, plum blossoms, and the largest clean hydropower dams.',
    landmarkEn: 'Moc Chau Tea Hills & Son La Hydropower Dam',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'LCA',
    id: 'vn-34-lca',
    nameVi: 'Tỉnh Lào Cai',
    nameEn: 'Lao Cai Province',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    rawNames: ['Lao Cai', 'Yen Bai'],
    emoji: '⛰️',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Lao Cai Province! Home to Mount Fansipan, the Roof of Indochina, and golden Sa Pa rice terraces.',
    learningEn: 'Home of Mount Fansipan (3,143m) and Mu Cang Chai golden terraced rice fields.',
    landmarkEn: 'Mount Fansipan & Sa Pa Terraced Fields',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'TQ',
    id: 'vn-34-tq',
    nameVi: 'Tỉnh Tuyên Quang',
    nameEn: 'Tuyen Quang Province',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    rawNames: ['Tuyen Quang', 'Ha Giang'],
    emoji: '🌾',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Tuyen Quang Province! Historic revolutionary capital and the spectacular Dong Van Karst Plateau.',
    learningEn: 'Encompasses historic Tan Trao banyan tree and the UNESCO Dong Van Karst Plateau Geopark.',
    landmarkEn: 'Dong Van Karst Plateau & Na Hang Lake',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'PT',
    id: 'vn-34-pt',
    nameVi: 'Tỉnh Phú Thọ',
    nameEn: 'Phu Tho Province',
    region: 'North',
    zone: 'Trung du & Miền núi phía Bắc',
    rawNames: ['Phu Tho', 'Vinh Phuc'],
    emoji: '👑',
    image: '/destinations/hanoi_turtle_tower.jpg',
    speechEn: 'Phu Tho Province! Sacred ancestral land of the Hung Kings and Tam Dao mist-shrouded peaks.',
    learningEn: 'The sacred cradle of the Vietnamese nation with Hung King Temple and UNESCO Xoan singing.',
    landmarkEn: 'Hung King Temple & Tam Dao Nature Reserve',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'CB',
    id: 'vn-34-cb',
    nameVi: 'Tỉnh Cao Bằng',
    nameEn: 'Cao Bang Province',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    rawNames: ['Cao Bang', 'Bac Kan'],
    emoji: '🌊',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Cao Bang Province! Home of magnificent Ban Gioc Waterfall and pristine Ba Be Lake.',
    learningEn: 'Features breathtaking Ban Gioc Waterfall on the border and tranquil Ba Be freshwater lake.',
    landmarkEn: 'Ban Gioc Waterfall & Ba Be Lake',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'LS',
    id: 'vn-34-ls',
    nameVi: 'Tỉnh Lạng Sơn',
    nameEn: 'Lang Son Province',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    rawNames: ['Lang Son'],
    emoji: '🚩',
    image: '/destinations/hanoi_turtle_tower.jpg',
    speechEn: 'Lang Son Province! Northern frontier gateway, famous for Chi Lang Pass and Huu Nghi Border Gate.',
    learningEn: 'Historic gateway of international trade with Huu Nghi border gate and Tam Thanh sacred grotto.',
    landmarkEn: 'Chi Lang Historic Pass & Tam Thanh Pagoda',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'TNG',
    id: 'vn-34-tng',
    nameVi: 'Tỉnh Thái Nguyên',
    nameEn: 'Thai Nguyen Province',
    region: 'North',
    zone: 'Trung du & Miền núi phía Bắc',
    rawNames: ['Thai Nguyen', 'Bac Giang'],
    emoji: '🍵',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Thai Nguyen Province! The renowned capital of premium Vietnamese green tea and Nui Coc Lake.',
    learningEn: 'The green tea heartland of Vietnam with Tan Cuong tea hills, Nui Coc lake, and Tay Yen Tu pagoda.',
    landmarkEn: 'Tan Cuong Green Tea Hills & Nui Coc Lake',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'BN',
    id: 'vn-34-bn',
    nameVi: 'Tỉnh Bắc Ninh',
    nameEn: 'Bac Ninh Province',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    rawNames: ['Bac Ninh'],
    emoji: '🎶',
    image: '/destinations/hanoi_turtle_tower.jpg',
    speechEn: 'Bac Ninh Province! Cradle of UNESCO Quan Ho folk songs and traditional Kinh Bac culture.',
    learningEn: 'Birthplace of enchanting Quan Ho folk melodies, ancient pagodas, and thriving high-tech manufacturing.',
    landmarkEn: 'Dau Ancient Pagoda & Quan Ho Cultural Cradle',
    gradeBands: ['grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 315, y: 160 }
  },
  {
    code: 'HY',
    id: 'vn-34-hy',
    nameVi: 'Tỉnh Hưng Yên',
    nameEn: 'Hung Yen Province',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    rawNames: ['Hung Yen', 'Hai Duong'],
    emoji: '🍇',
    image: '/destinations/hanoi_turtle_tower.jpg',
    speechEn: 'Hung Yen Province! Famous for sweet longan fruit and the ancient bustling Pho Hien trading port.',
    learningEn: 'Historic Pho Hien trading port along the Red River, celebrated for sweet honey longans and Con Son heritage.',
    landmarkEn: 'Pho Hien Historic Port & Con Son Kiep Bac',
    gradeBands: ['grade_3', 'grade_4', 'grade_5'],
    hasLeaderLine: true,
    labelAnchor: { x: 330, y: 200 }
  },
  {
    code: 'NB',
    id: 'vn-34-nb',
    nameVi: 'Tỉnh Ninh Bình',
    nameEn: 'Ninh Binh Province',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    rawNames: ['Ninh Binh', 'Ha Nam', 'Nam Dinh', 'Thai Binh'],
    emoji: '🛶',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Ninh Binh Province! Trang An UNESCO World Heritage, Hoa Lu Ancient Capital, and Tam Chuc Pagoda.',
    learningEn: 'The Millennium Heritage city with UNESCO Trang An limestone peaks, Hoa Lu ancient capital, and coastal deltas.',
    landmarkEn: 'Trang An World Heritage & Tam Chuc Pagoda',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'QN',
    id: 'vn-34-qn',
    nameVi: 'Tỉnh Quảng Ninh',
    nameEn: 'Quang Ninh Province',
    region: 'North',
    zone: 'Vùng Đông Bắc Bộ',
    rawNames: ['Quang Ninh'],
    emoji: '⛵',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Quang Ninh Province! World Wonder Ha Long Bay with thousands of emerald limestone islands.',
    learningEn: 'Home of UNESCO Ha Long Bay, Bai Tu Long, Co To Island, and the Yen Tu sacred Buddhist mountain.',
    landmarkEn: 'Ha Long Bay & Co To Archipelago',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'TH',
    id: 'vn-34-th',
    nameVi: 'Tỉnh Thanh Hóa',
    nameEn: 'Thanh Hoa Province',
    region: 'North',
    zone: 'Bắc Trung Bộ',
    rawNames: ['Thanh Hoa'],
    emoji: '🏰',
    image: '/destinations/hue_citadel.jpg',
    speechEn: 'Thanh Hoa Province! Gateway between North and Central Vietnam, with UNESCO Citadel of the Ho Dynasty.',
    learningEn: 'Vast province with the UNESCO stone Citadel of Ho Dynasty, Ben En National Park, and Sam Son beach.',
    landmarkEn: 'Ho Dynasty Citadel & Sam Son Beach',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },

  // 21-28: 8 CENTRAL & HIGHLANDS PROVINCES
  {
    code: 'NA',
    id: 'vn-34-na',
    nameVi: 'Tỉnh Nghệ An',
    nameEn: 'Nghe An Province',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    rawNames: ['Nghe An'],
    emoji: '⭐',
    image: '/destinations/hue_citadel.jpg',
    speechEn: 'Nghe An Province! Largest province by land area in Vietnam, birthplace of President Ho Chi Minh in Sen Village.',
    learningEn: 'The largest natural area in Vietnam, birthplace of President Ho Chi Minh and sunny Cua Lo coastal beach.',
    landmarkEn: 'Sen Village & Pu Mat National Park',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'HT',
    id: 'vn-34-ht',
    nameVi: 'Tỉnh Hà Tĩnh',
    nameEn: 'Ha Tinh Province',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    rawNames: ['Ha Tinh'],
    emoji: '📖',
    image: '/destinations/hue_citadel.jpg',
    speechEn: 'Ha Tinh Province! Homeland of great poet Nguyen Du and the famous Hong Linh Mountain.',
    learningEn: 'Homeland of the masterpiece Tale of Kieu by Nguyen Du, Ngang Pass, and heroic Dong Loc Junction.',
    landmarkEn: 'Nguyen Du Memorial & Dong Loc Junction',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'QT',
    id: 'vn-34-qt',
    nameVi: 'Tỉnh Quảng Trị',
    nameEn: 'Quang Tri Province',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    rawNames: ['Quang Tri', 'Quang Binh'],
    emoji: '🦇',
    image: '/destinations/halong_bay.jpg',
    speechEn: 'Quang Tri Province! World natural wonder Phong Nha-Ke Bang caves and heroic Hien Luong Bridge.',
    learningEn: 'Home of Son Doong (world\'s largest cave), Phong Nha-Ke Bang UNESCO Park, and Con Co Island.',
    landmarkEn: 'Son Doong Cave & Hien Luong Bridge (Includes Con Co)',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'QNG',
    id: 'vn-34-qng',
    nameVi: 'Tỉnh Quảng Ngãi',
    nameEn: 'Quang Ngai Province',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    rawNames: ['Quang Ngai', 'Quang Nam', 'Binh Dinh', 'Phu Yen'],
    emoji: '🏮',
    image: '/destinations/hoian_ancient_town.jpg',
    speechEn: 'Quang Ngai Province! Heritage coast of Hoi An Ancient Town, My Son Sanctuary, and volcanic Ly Son Island.',
    learningEn: 'Scenic coast with UNESCO Hoi An lantern town, My Son Sanctuary, Ganh Da Dia, and Ly Son garlic island.',
    landmarkEn: 'Hoi An Ancient Town & Ly Son Island',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'GL',
    id: 'vn-34-gl',
    nameVi: 'Tỉnh Gia Lai',
    nameEn: 'Gia Lai Province',
    region: 'Central',
    zone: 'Tây Nguyên',
    rawNames: ['Gia Lai', 'Kon Tum'],
    emoji: '🥁',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Gia Lai Province! Enchanting T\'Nung Sea Lake, Mang Den pine forest, and UNESCO Gong Culture.',
    learningEn: 'Northern Central Highlands with turquoise volcanic Sea Lake (T\'Nung) and iconic Rong tall houses.',
    landmarkEn: 'T\'Nung Sea Lake & Kon Tum Wooden Cathedral',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'DL',
    id: 'vn-34-dl',
    nameVi: 'Tỉnh Đắk Lắk',
    nameEn: 'Dak Lak Province',
    region: 'Central',
    zone: 'Tây Nguyên',
    rawNames: ['Dak Lak', 'Dak Nong'],
    emoji: '☕',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Dak Lak Province! World coffee capital of Buon Ma Thuot and the legendary Serepok river.',
    learningEn: 'The coffee capital of Vietnam, home of friendly Buon Don elephants and UNESCO volcanic caves.',
    landmarkEn: 'Buon Ma Thuot Coffee Valley & Dray Nur Waterfall',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'KH',
    id: 'vn-34-kh',
    nameVi: 'Tỉnh Khánh Hòa',
    nameEn: 'Khanh Hoa Province',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    rawNames: ['Khanh Hoa'],
    emoji: '🐬',
    image: '/destinations/danang_golden_bridge.jpg',
    speechEn: 'Khanh Hoa Province! Coastal paradise of Nha Trang Bay, Van Phong, and Spratly Islands (Truong Sa).',
    learningEn: 'World-class turquoise marine bays, coral reefs, Ponagar Cham towers, and sovereign Truong Sa archipelago.',
    landmarkEn: 'Nha Trang Bay & Truong Sa Archipelago (Spratly Islands)',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'LD',
    id: 'vn-34-ld',
    nameVi: 'Tỉnh Lâm Đồng',
    nameEn: 'Lam Dong Province',
    region: 'Central',
    zone: 'Nam Tây Nguyên & Duyên hải',
    rawNames: ['Lam Dong', 'Binh Thuan', 'Ninh Thuan'],
    emoji: '🌲',
    image: '/destinations/dalat_pine_hills.jpg',
    speechEn: 'Lam Dong Province! Dalat City of Eternal Spring, Lang Biang peak, Mui Ne sand dunes, and Phu Quy Island.',
    learningEn: 'The dreamy highland city of thousands of flowers, pine hills, golden Mui Ne sand dunes, and pristine Phu Quy.',
    landmarkEn: 'Dalat Valley of Love & Mui Ne Sand Dunes',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  },

  // 29-34: 6 SOUTHERN PROVINCES
  {
    code: 'DNA',
    id: 'vn-34-dna',
    nameVi: 'Tỉnh Đồng Nai',
    nameEn: 'Dong Nai Province',
    region: 'South',
    zone: 'Đông Nam Bộ',
    rawNames: ['Dong Nai', 'Binh Phuoc'],
    emoji: '✈️',
    image: '/destinations/hcmc_skyline.jpg',
    speechEn: 'Dong Nai Province! Long Thanh International Airport and Cat Tien UNESCO Biosphere Reserve.',
    learningEn: 'The industrial powerhouse of the Southeast with Long Thanh Mega Airport, Cat Tien jungle, and Bu Gia Map.',
    landmarkEn: 'Long Thanh Airport & Cat Tien National Park',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'TNI',
    id: 'vn-34-tni',
    nameVi: 'Tỉnh Tây Ninh',
    nameEn: 'Tay Ninh Province',
    region: 'South',
    zone: 'Đông Nam Bộ',
    rawNames: ['Tay Ninh'],
    emoji: '⛰️',
    image: '/destinations/hcmc_skyline.jpg',
    speechEn: 'Tay Ninh Province! Home to Ba Den Mountain, the highest peak in Southern Vietnam, and Dau Tieng Lake.',
    learningEn: 'Famous for Ba Den Mountain (Roof of Southern Vietnam) with its golden Buddha statue and Cao Dai Holy See.',
    landmarkEn: 'Ba Den Mountain (986m) & Dau Tieng Lake',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'DT',
    id: 'vn-34-dt',
    nameVi: 'Tỉnh Đồng Tháp',
    nameEn: 'Dong Thap Province',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    rawNames: ['Dong Thap', 'Long An', 'Tien Giang'],
    emoji: '🪷',
    image: '/destinations/mekong_delta.jpg',
    speechEn: 'Dong Thap Province! Land of pink lotus blossoms, Tram Chim crane sanctuary, and Sa Dec Flower Village.',
    learningEn: 'Fabled pink lotus heartland, conserving rare Sarus cranes at Tram Chim and century-old Sa Dec flower nursery.',
    landmarkEn: 'Tram Chim National Park & Sa Dec Flower Village',
    gradeBands: ['grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'VL',
    id: 'vn-34-vl',
    nameVi: 'Tỉnh Vĩnh Long',
    nameEn: 'Vinh Long Province',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    rawNames: ['Vinh Long', 'Ben Tre', 'Tra Vinh'],
    emoji: '🥥',
    image: '/destinations/mekong_delta.jpg',
    speechEn: 'Vinh Long Province! Green islands embraced by Tien and Hau rivers, coconut kingdom of Ben Tre.',
    learningEn: 'Encircled by freshwater rivers, known for sweet tropical fruit orchards, coconut palms, and Khmer pagodas.',
    landmarkEn: 'An Binh Island & Ben Tre Coconut Groves',
    gradeBands: ['grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'AG',
    id: 'vn-34-ag',
    nameVi: 'Tỉnh An Giang',
    nameEn: 'An Giang Province',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    rawNames: ['An Giang', 'Kien Giang'],
    emoji: '🌴',
    image: '/destinations/mekong_delta.jpg',
    speechEn: 'An Giang Province! The mysterious Seven Mountains, Tra Su cajuput forest, and Pearl Island Phu Quoc.',
    learningEn: 'Headwaters of the Mekong River featuring Tra Su cajeput forest, Ba Chua Xu temple, and Phu Quoc Pearl Island.',
    landmarkEn: 'Tra Su Cajuput Forest & Phu Quoc Pearl Island',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  },
  {
    code: 'CM',
    id: 'vn-34-cm',
    nameVi: 'Tỉnh Cà Mau',
    nameEn: 'Ca Mau Province',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    rawNames: ['Ca Mau', 'Bac Lieu'],
    emoji: '🦀',
    image: '/destinations/mekong_delta.jpg',
    speechEn: 'Ca Mau Province! The southernmost tip of Vietnam, where pristine mangrove forests touch two oceans.',
    learningEn: 'The southernmost tip of the homeland with Cape Ca Mau monument, U Minh Ha mangrove forest, and Bac Lieu wind farm.',
    landmarkEn: 'Cape Ca Mau (GPS 0001) & U Minh Forest',
    gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5']
  }
];

// Generate features
const provinceFeatures = PROVINCES_34_CONFIG.map((cfg) => {
  const feats = raw.features.filter(f => cfg.rawNames.includes(f.properties.Name));
  const rings = dissolveFeatures(feats);

  let totalX = 0;
  let totalY = 0;
  let pointCount = 0;
  let pathStr = '';

  const eps = 0.007; // Smooth precision

  rings.forEach(ring => {
    if (!ring || ring.length < 3) return;
    const simplified = rdp(ring, eps);
    if (simplified.length < 3) return;

    for (let i = 0; i < simplified.length; i++) {
      const [px, py] = project(simplified[i][0], simplified[i][1]);
      totalX += px;
      totalY += py;
      pointCount++;
      if (i === 0) {
        pathStr += 'M ' + px + ' ' + py + ' ';
      } else {
        pathStr += 'L ' + px + ' ' + py + ' ';
      }
    }
    pathStr += 'Z ';
  });

  const calculatedCentroid = pointCount > 0 
    ? { x: Math.round((totalX / pointCount) * 10) / 10, y: Math.round((totalY / pointCount) * 10) / 10 }
    : { x: 450, y: 550 };

  // Manual fine-tuning for centroids of non-convex shapes to ensure labels are placed visually inside the polygon
  let visualCentroid = { ...calculatedCentroid };
  if (cfg.code === 'HN') visualCentroid = { x: 258, y: 198 };
  else if (cfg.code === 'HP') visualCentroid = { x: 325, y: 215 };
  else if (cfg.code === 'HUE') visualCentroid = { x: 355, y: 480 };
  else if (cfg.code === 'DN') visualCentroid = { x: 410, y: 505 };
  else if (cfg.code === 'HCM') visualCentroid = { x: 310, y: 830 };
  else if (cfg.code === 'CT') visualCentroid = { x: 260, y: 880 };
  else if (cfg.code === 'BN') visualCentroid = { x: 285, y: 192 };
  else if (cfg.code === 'HY') visualCentroid = { x: 295, y: 220 };
  else if (cfg.code === 'QN') visualCentroid = { x: 345, y: 190 };
  else if (cfg.code === 'QNG') visualCentroid = { x: 420, y: 580 };
  else if (cfg.code === 'LD') visualCentroid = { x: 385, y: 760 };
  else if (cfg.code === 'AG') visualCentroid = { x: 210, y: 865 };
  else if (cfg.code === 'CM') visualCentroid = { x: 235, y: 940 };

  return {
    code: cfg.code,
    id: cfg.id,
    nameVi: cfg.nameVi,
    nameEn: cfg.nameEn,
    region: cfg.region,
    zone: cfg.zone,
    emoji: cfg.emoji,
    image: cfg.image,
    speechEn: cfg.speechEn,
    learningEn: cfg.learningEn,
    landmarkEn: cfg.landmarkEn,
    gradeBands: cfg.gradeBands,
    hasLeaderLine: cfg.hasLeaderLine || false,
    labelAnchor: cfg.labelAnchor || visualCentroid,
    centroid: visualCentroid,
    svgPath: pathStr.trim()
  };
});

const tsCode = `// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — OFFICIAL 34 PROVINCES GIS GEODATA
// Authoritative 2025 Administrative Units matching National Assembly Decrees & BẢN ĐỒ(3).pdf
// 100% Genuine Dissolved Vector Boundaries from WGS84 Cartographic Survey
// Calibrated to SVG ViewBox: 0 0 920 1120
// ==============================================================================

export interface Province34GeoFeature {
  code: string;
  id: string;
  nameVi: string;
  nameEn: string;
  region: 'North' | 'Central' | 'South';
  zone: string;
  emoji: string;
  image: string;
  speechEn: string;
  learningEn: string;
  landmarkEn: string;
  gradeBands: string[];
  hasLeaderLine: boolean;
  labelAnchor: { x: number; y: number };
  centroid: { x: number; y: number };
  svgPath: string;
}

export const VIETNAM_34_PROVINCES_GEO: Province34GeoFeature[] = ${JSON.stringify(provinceFeatures, null, 2)};
`;

fs.writeFileSync('src/data/vietnam34ProvincesGeoData.ts', tsCode, 'utf8');
console.log('Successfully generated src/data/vietnam34ProvincesGeoData.ts! Total 34 units:', provinceFeatures.length);
