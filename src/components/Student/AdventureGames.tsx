import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Star, 
  Trophy, 
  Volume2, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MapPin, 
  Compass, 
  Search, 
  Award, 
  Shuffle, 
  Play,
  HelpCircle,
  Eye,
  Layers,
  Flame,
  VolumeX
} from 'lucide-react';
import { GradeBand, Destination } from '../../types';
import { playEnglishSpeech, playSpeech, stopSpeech } from '../../lib/speech';
import { LandmarkDragDropGame } from './LandmarkDragDropGame';
import { InteractiveMap34ProvincesGame } from './InteractiveMap34ProvincesGame';

interface AdventureGamesProps {
  gradeBand?: GradeBand;
  onEarnStars: (stars: number) => void;
  destinations: Destination[];
}

type GameMode = 'map-drop' | '34-provinces-game' | 'province-match' | 'photo-mystery' | 'audio-explorer' | 'vocab-scramble';

// Web Audio sound synthesizer for instant playful feedback
const playTone = (type: 'success' | 'wrong' | 'complete' | 'click') => {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'click') {
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.setValueAtTime(260, now + 0.12);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'complete') {
      // Fanfare chord
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.setValueAtTime(freq, now + i * 0.08);
        g.gain.setValueAtTime(0.1, now + i * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        o.start(now + i * 0.08);
        o.stop(now + 0.6);
      });
    }
  } catch {
    // AudioContext not allowed before user interaction
  }
};

const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#f59e0b', '#10b981', '#38bdf8', '#a855f7']
    });
  } catch {
    // fallback
  }
};

// 1. DATA FOR LANDMARK MAP DROP
interface LandmarkItem {
  id: string;
  nameEn: string;
  nameVi: string;
  region: 'North' | 'Central' | 'South';
  icon: string;
  image: string;
  funFactEn: string;
  funFactVi: string;
}

const LANDMARKS_MAP_DROP: LandmarkItem[] = [
  {
    id: 'hanoi-pagoda',
    nameEn: 'One Pillar Pagoda (Hanoi)',
    nameVi: 'Chùa Một Cột (Thủ đô Hà Nội)',
    region: 'North',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'Built like a blooming lotus flower standing proudly on a single stone pillar.',
    funFactVi: 'Được xây dựng tựa bông sen ngát hương vươn lên từ mặt hồ linh thiêng.'
  },
  {
    id: 'halong-islands',
    nameEn: 'Ha Long Bay Emerald Islands',
    nameVi: 'Vịnh Hạ Long (Quảng Ninh)',
    region: 'North',
    icon: '⛵',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'World Natural Heritage with nearly two thousand mystical limestone islands.',
    funFactVi: 'Kỳ quan thiên nhiên thế giới với gần hai ngàn đảo đá vôi kỳ vĩ.'
  },
  {
    id: 'hue-citadel',
    nameEn: 'Hue Imperial Citadel',
    nameVi: 'Đại Nội Huế (Cố đô Huế)',
    region: 'Central',
    icon: '👑',
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'Royal capital of the Nguyen Dynasty with peaceful Perfume River palaces.',
    funFactVi: 'Kinh đô triều Nguyễn uy nghiêm bên dòng sông Hương thơ mộng di sản.'
  },
  {
    id: 'danang-dragon',
    nameEn: 'Dragon Bridge & Hoi An Lanterns',
    nameVi: 'Cầu Rồng Đà Nẵng & Đèn lồng Hội An',
    region: 'Central',
    icon: '🐉',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'The Golden Dragon breathes real fire and water over the poetic Han River!',
    funFactVi: 'Cầu Rồng vàng rực rỡ có khả năng phun lửa và phun nước kỳ diệu.'
  },
  {
    id: 'hcmc-ben-thanh',
    nameEn: 'Ben Thanh Market (Ho Chi Minh City)',
    nameVi: 'Chợ Bến Thành (TP. Hồ Chí Minh)',
    region: 'South',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'Historic clock tower clock landmark in the bustling energetic southern metropolis.',
    funFactVi: 'Biểu tượng lịch sử hơn trăm năm tuổi của thành phố năng động mang tên Bác.'
  },
  {
    id: 'mekong-floating-market',
    nameEn: 'Cai Rang Floating Market',
    nameVi: 'Chợ Nổi Cái Răng (Cần Thơ)',
    region: 'South',
    icon: '🛶',
    image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=600&q=80',
    funFactEn: 'Boats trade fresh tropical fruits under the sunny skies of nine dragon rivers.',
    funFactVi: 'Ghe xuồng tấp nập buôn bán hoa trái ngọt ngào miền sông nước Cửu Long.'
  }
];

// 2. DATA FOR VOCABULARY SCRAMBLE
interface ScrambleWord {
  word: string;
  hintEn: string;
  hintVi: string;
  emoji: string;
  gradeTier: 'grade_1_2' | 'grade_3' | 'grade_4_5';
}

const VOCAB_SCRAMBLE_LIST: ScrambleWord[] = [
  { word: 'BOAT', hintEn: 'A water vehicle for sailing Ha Long Bay and Mekong River', hintVi: 'Thuyền, ghe buồm', emoji: '⛵', gradeTier: 'grade_1_2' },
  { word: 'FISH', hintEn: 'Lives in the blue ocean and rivers of Vietnam', hintVi: 'Con cá', emoji: '🐟', gradeTier: 'grade_1_2' },
  { word: 'TREE', hintEn: 'Green plants growing tall in Ba Be and Cuc Phuong forests', hintVi: 'Cây cối xanh tươi', emoji: '🌳', gradeTier: 'grade_1_2' },
  { word: 'LOTUS', hintEn: 'The graceful national flower of Vietnam', hintVi: 'Hoa sen thanh khiết', emoji: '🪷', gradeTier: 'grade_3' },
  { word: 'DRAGON', hintEn: 'Mythical golden creature breathing fire in Da Nang', hintVi: 'Con Rồng dũng mãnh', emoji: '🐉', gradeTier: 'grade_3' },
  { word: 'PAGODA', hintEn: 'Sacred Buddhist temple with peaceful bells', hintVi: 'Ngôi chùa linh thiêng', emoji: '🏛️', gradeTier: 'grade_3' },
  { word: 'ISLAND', hintEn: 'Land surrounded completely by the sea like Phu Quoc & Truong Sa', hintVi: 'Hòn đảo giữa biển khơi', emoji: '🏝️', gradeTier: 'grade_3' },
  { word: 'CITADEL', hintEn: 'Ancient imperial fortress where kings and emperors ruled', hintVi: 'Hoàng thành, Kinh thành', emoji: '👑', gradeTier: 'grade_4_5' },
  { word: 'HERITAGE', hintEn: 'Treasured culture and nature preserved for future generations', hintVi: 'Di sản văn hóa & thiên nhiên', emoji: '📜', gradeTier: 'grade_4_5' },
  { word: 'LANTERN', hintEn: 'Colorful silk lights glowing across ancient Hoi An streets', hintVi: 'Đèn lồng lung linh', emoji: '🏮', gradeTier: 'grade_4_5' }
];

// 3. DATA FOR AUDIO EXPLORER (Differentiated Grades 1–5, English-First)
interface AudioMysteryItem {
  id: string;
  gradeBand: 'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5';
  audioScriptEn: string;
  audioScriptVi: string; // Translation for visual reference only - never spoken
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  revealedInfo: string;
}

const AUDIO_EXPLORER_QUESTIONS: AudioMysteryItem[] = [
  // --- GRADE 1: SINGLE WORDS & SIMPLE PHONICS ---
  {
    id: 'aud-g1-1',
    gradeBand: 'grade_1',
    audioScriptEn: "Boat! A wooden boat on the emerald water. Can you hear the boat?",
    audioScriptVi: "Con thuyền! Chiếc thuyền gỗ trên làn nước xanh biếc. Bé nghe thấy tiếng thuyền không?",
    questionEn: "Listen carefully! What did the tour guide say?",
    questionVi: "Nghe kỹ nhé! Hướng dẫn viên vừa nói từ gì?",
    options: ['Boat (Con thuyền)', 'Plane (Máy bay)', 'Train (Tàu hỏa)', 'Car (Xe hơi)'],
    correctIndex: 0,
    revealedInfo: 'Boat (Con thuyền) - Thuyền buồm lướt sóng trên Vịnh Hạ Long xinh đẹp!'
  },
  {
    id: 'aud-g1-2',
    gradeBand: 'grade_1',
    audioScriptEn: "Lantern! Look at the red lantern, yellow lantern glowing in the night.",
    audioScriptVi: "Đèn lồng! Ngắm nhìn chiếc đèn lồng đỏ, đèn lồng vàng lung linh trong đêm.",
    questionEn: "Listen carefully! What is glowing at night?",
    questionVi: "Nghe kỹ nhé! Vật gì đang tỏa sáng lung linh trong đêm?",
    options: ['Clock (Đồng hồ)', 'Lantern (Đèn lồng)', 'Book (Cuốn sách)', 'Chair (Cái ghế)'],
    correctIndex: 1,
    revealedInfo: 'Lantern (Đèn lồng) - Lung linh sắc màu di sản phố cổ Hội An!'
  },
  {
    id: 'aud-g1-3',
    gradeBand: 'grade_1',
    audioScriptEn: "King! The king lives in the majestic golden palace.",
    audioScriptVi: "Vua! Nhà vua sống trong cung điện nguy nga tráng lệ.",
    questionEn: "Listen carefully! Who lives in the golden palace?",
    questionVi: "Nghe kỹ nhé! Ai sống trong cung điện nguy nga tráng lệ?",
    options: ['King (Nhà vua)', 'Doctor (Bác sĩ)', 'Teacher (Cô giáo)', 'Pilot (Phi công)'],
    correctIndex: 0,
    revealedInfo: 'King (Nhà vua) - Hoàng cung Cố đô Huế bên dòng sông Hương!'
  },

  // --- GRADE 2: SHORT, CLEAR SENTENCES ---
  {
    id: 'aud-g2-1',
    gradeBand: 'grade_2',
    audioScriptEn: "The wooden boat is sailing smoothly on the emerald green water of Ha Long Bay.",
    audioScriptVi: "Chiếc thuyền gỗ đang lướt đi êm ả trên làn nước xanh ngọc bích của Vịnh Hạ Long.",
    questionEn: "Listen carefully! Where is the boat sailing smoothly?",
    questionVi: "Nghe kỹ nhé! Chiếc thuyền đang lướt đi êm ả ở đâu?",
    options: ['On emerald green water', 'On the highway road', 'In the cloudy sky', 'On the football field'],
    correctIndex: 0,
    revealedInfo: 'Emerald green water - Làn nước ngọc bích đặc trưng của kỳ quan Vịnh Hạ Long!'
  },
  {
    id: 'aud-g2-2',
    gradeBand: 'grade_2',
    audioScriptEn: "Look at the colorful glowing lanterns shining along the ancient streets at night.",
    audioScriptVi: "Ngắm nhìn những chiếc đèn lồng rực rỡ sắc màu tỏa sáng dọc các con phố cổ kính lúc về đêm.",
    questionEn: "Listen carefully! What shines along the ancient streets at night?",
    questionVi: "Nghe kỹ nhé! Thứ gì tỏa sáng dọc các con phố cổ kính ban đêm?",
    options: ['Glowing lanterns', 'Traffic street lights', 'Computer screens', 'Automobiles'],
    correctIndex: 0,
    revealedInfo: 'Glowing lanterns - Đèn lồng truyền thống lung linh khắp phố cổ Hội An!'
  },
  {
    id: 'aud-g2-3',
    gradeBand: 'grade_2',
    audioScriptEn: "The peaceful green lake has a historic tower called Turtle Tower.",
    audioScriptVi: "Hồ nước xanh êm đềm có một ngọn tháp cổ kính mang tên Tháp Rùa.",
    questionEn: "Listen carefully! What historic tower is in the peaceful green lake?",
    questionVi: "Nghe kỹ nhé! Ngọn tháp cổ kính nào nằm giữa hồ nước xanh êm đềm?",
    options: ['Turtle Tower', 'Eiffel Tower', 'Big Ben Clock Tower', 'Sky Scraper'],
    correctIndex: 0,
    revealedInfo: 'Turtle Tower (Tháp Rùa) - Biểu tượng ngàn năm văn hiến giữa lòng Hồ Hoàn Kiếm, Hà Nội!'
  },

  // --- GRADE 3: SIMPLE DESCRIPTIONS AND QUESTIONS ---
  {
    id: 'aud-g3-1',
    gradeBand: 'grade_3',
    audioScriptEn: "Hello young explorers! I am standing on a majestic golden dragon spanning across the Han River. When night falls, this bridge breathes real fire and sprays cool water! Where am I?",
    audioScriptVi: "Chào các bạn nhỏ! Cô đang đứng trên cây cầu Rồng vàng rực rỡ bắc qua dòng sông Hàn. Đố con biết cô đang ở đâu nào?",
    questionEn: "Listen carefully! Where is our tour guide standing?",
    questionVi: "Lắng nghe cẩn thận! Hướng dẫn viên đang ở địa danh nào?",
    options: ['Dragon Bridge (Da Nang)', 'One Pillar Pagoda (Hanoi)', 'Ben Thanh Market (HCMC)', 'Cai Rang Floating Market'],
    correctIndex: 0,
    revealedInfo: 'Đà Nẵng - Cầu Rồng phun lửa huyền thoại bên bờ sông Hàn!'
  },
  {
    id: 'aud-g3-2',
    gradeBand: 'grade_3',
    audioScriptEn: "Listen to the gentle waves and boat paddles. Here on the river, farmers sell sweet mangoes, coconuts, and watermelons right from wooden boats. Where are we traveling?",
    audioScriptVi: "Hãy lắng nghe tiếng sóng nước rì rào và tiếng chèo thuyền. Nơi đây bà con bán xoài, dừa và dưa hấu ngay trên ghe xuồng!",
    questionEn: "Listen carefully! Which destination is famous for bustling river markets?",
    questionVi: "Lắng nghe cẩn thận! Điểm đến nào nổi tiếng với chợ nổi tấp nập trên sông?",
    options: ['Ha Long Bay', 'Mekong River Floating Market', 'Hue Imperial City', 'Hoan Kiem Lake'],
    correctIndex: 1,
    revealedInfo: 'Đồng bằng Sông Cửu Long - Miền sông nước trù phú với chợ nổi Cái Răng!'
  },
  {
    id: 'aud-g3-3',
    gradeBand: 'grade_3',
    audioScriptEn: "I hear the peaceful bronze bell echoing over the Perfume River. Behind me stands the majestic Meridian Gate of the ancient emperors. Welcome to...",
    audioScriptVi: "Tiếng chuông chùa Thiên Mụ vang vọng bên dòng sông Hương êm đềm. Phía sau là Ngọ Môn kinh thành cổ kính. Chào mừng con đến...",
    questionEn: "Listen carefully! Where can you visit ancient palaces and the Perfume River?",
    questionVi: "Lắng nghe cẩn thận! Nơi nào có cung điện nguy nga và dòng sông Hương êm đềm?",
    options: ['Hue Imperial City', 'Da Nang City', 'Phu Quoc Island', 'Hanoi Capital'],
    correctIndex: 0,
    revealedInfo: 'Cố đô Huế - Vùng đất di sản triều Nguyễn bên dòng sông Hương!'
  },

  // --- GRADE 4: SHORT CONVERSATIONS AND DESTINATION DESCRIPTIONS ---
  {
    id: 'aud-g4-1',
    gradeBand: 'grade_4',
    audioScriptEn: "Tour guide: Welcome to the capital city of Hanoi! Today we are walking around Hoan Kiem Lake. Student: Look across the water! Is that the ancient Turtle Tower? Tour guide: Yes, exactly! It is the eternal symbol of peace and heritage in Vietnam.",
    audioScriptVi: "Hướng dẫn viên: Chào mừng các con đến với Thủ đô Hà Nội! Hôm nay chúng ta đi dạo quanh Hồ Hoàn Kiếm. Học sinh: Nhìn qua mặt nước kìa cô! Đó có phải Tháp Rùa cổ kính không ạ? Hướng dẫn viên: Đúng rồi, chính là biểu tượng thanh bình ngàn năm văn hiến!",
    questionEn: "Listen to the conversation! What historic landmark are the guide and student observing?",
    questionVi: "Lắng nghe đoạn đối thoại! Hướng dẫn viên và học sinh đang quan sát địa danh nào?",
    options: ['Turtle Tower at Hoan Kiem Lake', 'Golden Dragon Bridge', 'Bana Hills Cable Car', 'Ben Thanh Clock Tower'],
    correctIndex: 0,
    revealedInfo: 'Hồ Hoàn Kiếm & Tháp Rùa - Trái tim ngàn năm văn hiến của Thủ đô Hà Nội!'
  },
  {
    id: 'aud-g4-2',
    gradeBand: 'grade_4',
    audioScriptEn: "Tour guide: Listen to the gentle pine trees whispering in the cool highland breeze. Here, visitors pick sweet red strawberries and admire fresh flower gardens all year round. Where are we exploring?",
    audioScriptVi: "Hướng dẫn viên: Hãy lắng nghe tiếng ngàn thông reo trong gió cao nguyên mát lành. Nơi đây du khách hái dâu tây chín đỏ và ngắm nhìn muôn hoa khoe sắc bốn mùa. Chúng ta đang khám phá ở đâu?",
    questionEn: "Listen to the description! Which highland destination is famous for pine trees and cool fresh air?",
    questionVi: "Lắng nghe mô tả! Thành phố cao nguyên nào nổi tiếng với ngàn thông và khí hậu mát lành quanh năm?",
    options: ['Da Lat Pine City', 'Ha Long Bay', 'Hue Citadel', 'Can Tho City'],
    correctIndex: 0,
    revealedInfo: 'Đà Lạt - Thành phố Festival hoa mộng mơ giữa cao nguyên Lâm Đồng!'
  },
  {
    id: 'aud-g4-3',
    gradeBand: 'grade_4',
    audioScriptEn: "Tour guide: In Ho Chi Minh City, modern skyscrapers like Landmark 81 rise beside the iconic Ben Thanh Market. It is the most energetic center of innovation, culture, and commerce in southern Vietnam!",
    audioScriptVi: "Hướng dẫn viên: Tại Thành phố Hồ Chí Minh, những tòa nhà chọc trời hiện đại như Landmark 81 vươn cao bên cạnh Chợ Bến Thành lịch sử. Đây là trung tâm đổi mới, văn hóa và kinh tế sôi động nhất miền Nam!",
    questionEn: "Listen carefully! Which energetic metropolis features Landmark 81 and Ben Thanh Market?",
    questionVi: "Lắng nghe cẩn thận! Đô thị năng động nào nổi tiếng với Landmark 81 và Chợ Bến Thành?",
    options: ['Ho Chi Minh City', 'Hanoi Capital', 'Hue Imperial City', 'Nha Trang Beach'],
    correctIndex: 0,
    revealedInfo: 'TP. Hồ Chí Minh - Trung tâm kinh tế, văn hóa và công nghệ hiện đại hàng đầu Việt Nam!'
  },

  // --- GRADE 5: EXTENDED PASSAGES & COMPREHENSION CHALLENGES ---
  {
    id: 'aud-g5-1',
    gradeBand: 'grade_5',
    audioScriptEn: "Ha Long Bay, situated in Quang Ninh province in northeastern Vietnam, is a renowned UNESCO World Heritage site. It features more than one thousand six hundred towering limestone karsts and islets rising dramatically from calm emerald waters. Formed over hundreds of millions of years of geological evolution, the bay creates a breathtaking seascape celebrated worldwide.",
    audioScriptVi: "Vịnh Hạ Long, nằm tại tỉnh Quảng Ninh phía Đông Bắc Việt Nam, là di sản thiên nhiên thế giới UNESCO nổi tiếng. Nơi đây sở hữu hơn 1.600 đảo đá vôi và thạch nhũ kỳ vĩ nhô lên giữa làn nước xanh ngọc bích, được kiến tạo qua hàng trăm triệu năm tiến hóa địa chất.",
    questionEn: "Listen to the passage! What natural process shaped the towering limestone islands over millions of years?",
    questionVi: "Lắng nghe đoạn văn! Quá trình tự nhiên nào đã kiến tạo nên hàng nghìn hòn đảo đá vôi qua hàng trăm triệu năm?",
    options: ['Geological evolution and ocean erosion', 'Active volcanic eruptions', 'Glacial ice movements', 'Human construction'],
    correctIndex: 0,
    revealedInfo: 'Geological evolution - Tiến hóa địa chất và sự xói mòn của đại dương tạo nên kỳ quan thiên nhiên thế giới!'
  },
  {
    id: 'aud-g5-2',
    gradeBand: 'grade_5',
    audioScriptEn: "The Imperial City of Hue served as the sovereign capital of Vietnam under the Nguyen Dynasty from 1802 to 1945. Situated along the peaceful Perfume River, its palace complex preserves royal architecture and court music, known as Nha Nhac, inscribed by UNESCO as an intangible cultural heritage of humanity.",
    audioScriptVi: "Kinh thành Huế từng là thủ đô của Việt Nam dưới triều Nguyễn từ năm 1802 đến 1945. Nằm bên dòng sông Hương êm đềm, quần thể bảo tồn kiến trúc hoàng cung và Nhã nhạc cung đình Huế - di sản văn hóa phi vật thể của nhân loại.",
    questionEn: "Listen carefully! What royal musical heritage of Hue was inscribed by UNESCO?",
    questionVi: "Lắng nghe cẩn thận! Di sản âm nhạc hoàng gia nào của Cố đô Huế đã được UNESCO vinh danh?",
    options: ['Nha Nhac Royal Court Music', 'Quan Ho Folk Singing', 'Don Ca Tai Tu', 'Cheo Traditional Opera'],
    correctIndex: 0,
    revealedInfo: 'Nha Nhac Royal Court Music - Nhã nhạc cung đình Huế, kiệt tác truyền khẩu và phi vật thể của nhân loại!'
  },
  {
    id: 'aud-g5-3',
    gradeBand: 'grade_5',
    audioScriptEn: "The fertile Mekong River Delta in southern Vietnam produces more than half of the nation's rice and abundant tropical fruits. Known as the Nine Dragon River Delta, everyday life flourishes around an extensive network of waterways, floating markets, and lush orchards.",
    audioScriptVi: "Đồng bằng Sông Cửu Long màu mỡ tại miền Nam sản xuất hơn một nửa sản lượng lúa gạo và trái cây nhiệt đới của cả nước. Nơi đây được gọi là vùng đồng bằng chín rồng với mạng lưới sông ngòi, chợ nổi và miệt vườn trù phú.",
    questionEn: "Listen carefully! Why is the Mekong Delta known as the agricultural heart of Vietnam?",
    questionVi: "Lắng nghe cẩn thận! Vì sao Đồng bằng Sông Cửu Long được xem là vựa nông sản trọng yếu của Việt Nam?",
    options: ['It produces more than half of the nation\'s rice via its fertile waterways', 'It is located on high freezing mountains', 'It has no water resources or canals', 'It only produces industrial machinery'],
    correctIndex: 0,
    revealedInfo: 'Produces over half of Vietnam\'s rice - Vựa lúa và cây ăn trái lớn nhất cả nước bên dòng Cửu Long Giang!'
  }
];

export const AdventureGames: React.FC<AdventureGamesProps> = ({
  gradeBand = 'grade_3',
  onEarnStars,
  destinations
}) => {
  const [activeGame, setActiveGame] = useState<GameMode>('map-drop');
  const [selectedGradeBand, setSelectedGradeBand] = useState<GradeBand>(gradeBand);
  const [starsEarnedThisSession, setStarsEarnedThisSession] = useState(0);
  const [streakCount, setStreakCount] = useState(0);

  // Sync with prop when changed
  useEffect(() => {
    setSelectedGradeBand(gradeBand);
  }, [gradeBand]);

  // Handle common star reward
  const awardGameStars = (amount: number, bonusStreak = true) => {
    const total = bonusStreak ? amount + Math.min(streakCount * 5, 20) : amount;
    setStarsEarnedThisSession(prev => prev + total);
    setStreakCount(prev => prev + 1);
    onEarnStars(total);
    triggerConfetti();
    playTone('success');
  };

  // ----------------------------------------------------
  // GAME 1: LANDMARK MAP DROP (Kéo thả địa danh lên Miền)
  // ----------------------------------------------------
  const [unplacedLandmarks, setUnplacedLandmarks] = useState<LandmarkItem[]>(LANDMARKS_MAP_DROP);
  const [placedLandmarks, setPlacedLandmarks] = useState<{ landmark: LandmarkItem; zone: 'North' | 'Central' | 'South' }[]>([]);
  const [selectedLandmarkForDrop, setSelectedLandmarkForDrop] = useState<LandmarkItem | null>(null);
  const [dropFeedback, setDropFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const handleZoneDrop = (targetZone: 'North' | 'Central' | 'South') => {
    if (!selectedLandmarkForDrop) return;

    if (selectedLandmarkForDrop.region === targetZone) {
      // Correct!
      setPlacedLandmarks(prev => [...prev, { landmark: selectedLandmarkForDrop, zone: targetZone }]);
      setUnplacedLandmarks(prev => prev.filter(l => l.id !== selectedLandmarkForDrop.id));
      setDropFeedback({
        message: `🎉 Chính xác tuyệt vời! ${selectedLandmarkForDrop.nameVi} thuộc ${targetZone === 'North' ? 'Miền Bắc' : targetZone === 'Central' ? 'Miền Trung' : 'Miền Nam'}!`,
        isCorrect: true
      });
      awardGameStars(20);
      setSelectedLandmarkForDrop(null);

      if (unplacedLandmarks.length <= 1) {
        playTone('complete');
      }
    } else {
      // Incorrect zone
      setDropFeedback({
        message: `💡 Thử lại nhé! "${selectedLandmarkForDrop.nameVi}" không thuộc ${targetZone === 'North' ? 'Miền Bắc' : targetZone === 'Central' ? 'Miền Trung' : 'Miền Nam'} đâu bé ơi.`,
        isCorrect: false
      });
      playTone('wrong');
      setStreakCount(0);
    }
  };

  const handleResetMapDrop = () => {
    setUnplacedLandmarks(LANDMARKS_MAP_DROP);
    setPlacedLandmarks([]);
    setSelectedLandmarkForDrop(null);
    setDropFeedback(null);
    playTone('click');
  };

  // ----------------------------------------------------
  // GAME 2: PROVINCE MATCHING (Nối Danh lam với Tỉnh/Thành)
  // ----------------------------------------------------
  const MATCHING_PAIRS = [
    { id: 'p1', landmark: 'Chùa Một Cột', landmarkEn: 'One Pillar Pagoda', province: 'Thủ đô Hà Nội', provinceEn: 'Hanoi Capital', icon: '🏛️' },
    { id: 'p2', landmark: 'Vịnh Hạ Long', landmarkEn: 'Ha Long Bay', province: 'Tỉnh Quảng Ninh', provinceEn: 'Quang Ninh Province', icon: '⛵' },
    { id: 'p3', landmark: 'Đại Nội Huế', landmarkEn: 'Hue Imperial Citadel', province: 'Thừa Thiên Huế', provinceEn: 'Thua Thien Hue', icon: '👑' },
    { id: 'p4', landmark: 'Cầu Rồng Sông Hàn', landmarkEn: 'Dragon Bridge', province: 'Thành phố Đà Nẵng', provinceEn: 'Da Nang City', icon: '🐉' },
    { id: 'p5', landmark: 'Chợ Bến Thành', landmarkEn: 'Ben Thanh Market', province: 'TP. Hồ Chí Minh', provinceEn: 'Ho Chi Minh City', icon: '🏢' },
    { id: 'p6', landmark: 'Chợ Nổi Cái Răng', landmarkEn: 'Floating Market', province: 'Thành phố Cần Thơ', provinceEn: 'Can Tho City', icon: '🛶' }
  ];

  const [selectedLandmarkMatch, setSelectedLandmarkMatch] = useState<string | null>(null);
  const [selectedProvinceMatch, setSelectedProvinceMatch] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [matchFeedback, setMatchFeedback] = useState<string | null>(null);

  const handleLandmarkSelect = (id: string) => {
    if (matchedIds.includes(id)) return;
    setSelectedLandmarkMatch(id);
    playTone('click');
    if (selectedProvinceMatch) {
      checkMatch(id, selectedProvinceMatch);
    }
  };

  const handleProvinceSelect = (id: string) => {
    if (matchedIds.includes(id)) return;
    setSelectedProvinceMatch(id);
    playTone('click');
    if (selectedLandmarkMatch) {
      checkMatch(selectedLandmarkMatch, id);
    }
  };

  const checkMatch = (landmarkId: string, provinceId: string) => {
    if (landmarkId === provinceId) {
      // Success match!
      setMatchedIds(prev => [...prev, landmarkId]);
      const matched = MATCHING_PAIRS.find(p => p.id === landmarkId);
      setMatchFeedback(`✨ Đúng rồi! ${matched?.landmark} nằm ở ${matched?.province}!`);
      awardGameStars(25);
    } else {
      setMatchFeedback('❌ Chưa chính xác, hãy chọn lại cặp tương ứng nhé!');
      playTone('wrong');
      setStreakCount(0);
    }
    setSelectedLandmarkMatch(null);
    setSelectedProvinceMatch(null);
  };

  const handleResetMatch = () => {
    setMatchedIds([]);
    setSelectedLandmarkMatch(null);
    setSelectedProvinceMatch(null);
    setMatchFeedback(null);
    playTone('click');
  };

  // ----------------------------------------------------
  // GAME 3: PHOTO MYSTERY DETECTIVE (Thám tử ảnh bí ẩn)
  // ----------------------------------------------------
  const [mysteryStep, setMysteryStep] = useState(0);
  const [revealedTiles, setRevealedTiles] = useState<number[]>([1]); // First tile open
  const [mysteryAnswered, setMysteryAnswered] = useState(false);
  const [mysteryResult, setMysteryResult] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const MYSTERY_CASES = [
    {
      id: 'case-1',
      titleEn: 'Mystery Case #1: The Floating Wonderland',
      titleVi: 'Vụ án Thám tử #1: Kỳ quan Nước biếc Kỳ ảo',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      clues: [
        '📍 Vị trí: Vùng Đông Bắc Việt Nam, thuộc Vịnh Bắc Bộ.',
        '⛵ Nổi bật: Hàng ngàn hòn đảo đá vôi xanh ngọc bích sừng sững.',
        '🌟 Danh hiệu: Được UNESCO công nhận là Di sản Thiên nhiên Thế giới.'
      ],
      options: ['Ha Long Bay (Quang Ninh)', 'Hoan Kiem Lake (Hanoi)', 'Phu Quoc Island', 'Nha Trang Beach'],
      correctIndex: 0
    },
    {
      id: 'case-2',
      titleEn: 'Mystery Case #2: The Golden Fire Breather',
      titleVi: 'Vụ án Thám tử #2: Cây cầu Thần rực lửa',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
      clues: [
        '📍 Vị trí: Thành phố đáng sống bên bờ biển miền Trung.',
        '🐉 Nổi bật: Rồng vàng uốn lượn dài 666 mét qua sông Hàn.',
        '🔥 Biểu diễn: Phun lửa và phun nước rực sáng vào tối cuối tuần.'
      ],
      options: ['One Pillar Pagoda (Hanoi)', 'Dragon Bridge (Da Nang)', 'Ben Thanh Market (HCMC)', 'Imperial Citadel (Hue)'],
      correctIndex: 1
    }
  ];

  const currentMystery = MYSTERY_CASES[mysteryStep % MYSTERY_CASES.length];

  const handleRevealTile = (index: number) => {
    if (!revealedTiles.includes(index)) {
      setRevealedTiles(prev => [...prev, index]);
      playTone('click');
    }
  };

  const handleGuessMystery = (choiceIndex: number) => {
    if (mysteryAnswered) return;
    setMysteryAnswered(true);

    if (choiceIndex === currentMystery.correctIndex) {
      setMysteryResult({
        isCorrect: true,
        message: `🏆 Chúc mừng Thám tử nhí! Con đã giải mã chính xác "${currentMystery.options[choiceIndex]}"!`
      });
      // Higher reward if fewer tiles revealed
      const stars = 50 - (revealedTiles.length - 1) * 8;
      awardGameStars(Math.max(stars, 20));
    } else {
      setMysteryResult({
        isCorrect: false,
        message: `❌ Tiếc quá! Đáp án đúng là "${currentMystery.options[currentMystery.correctIndex]}".`
      });
      playTone('wrong');
      setStreakCount(0);
    }
  };

  const handleNextMystery = () => {
    setMysteryStep(prev => prev + 1);
    setRevealedTiles([1]);
    setMysteryAnswered(false);
    setMysteryResult(null);
    playTone('click');
  };

  // ----------------------------------------------------
  // GAME 4: AUDIO EXPLORER (Nhà thám hiểm âm thanh - English First)
  // ----------------------------------------------------
  const [audioQuestionIdx, setAudioQuestionIdx] = useState(0);
  const [isPlayingAudioPrompt, setIsPlayingAudioPrompt] = useState(false);
  const [isSlowAudioMode, setIsSlowAudioMode] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioErrorMessage, setAudioErrorMessage] = useState<string | null>(null);
  const [audioAnswerStatus, setAudioAnswerStatus] = useState<{ isCorrect: boolean; message: string } | null>(null);

  // Filter differentiated questions based on student's selected grade band
  const gradeAudioQuestions = AUDIO_EXPLORER_QUESTIONS.filter(q => {
    if (selectedGradeBand === 'grade_1' || selectedGradeBand === 'grade_1_2') {
      return q.gradeBand === 'grade_1' || q.gradeBand === 'grade_2';
    }
    if (selectedGradeBand === 'grade_2') {
      return q.gradeBand === 'grade_2';
    }
    if (selectedGradeBand === 'grade_3') {
      return q.gradeBand === 'grade_3';
    }
    if (selectedGradeBand === 'grade_4') {
      return q.gradeBand === 'grade_4';
    }
    if (selectedGradeBand === 'grade_5' || selectedGradeBand === 'grade_4_5') {
      return q.gradeBand === 'grade_5' || q.gradeBand === 'grade_4';
    }
    return true;
  });

  const activeAudioQuestions = gradeAudioQuestions.length > 0 ? gradeAudioQuestions : AUDIO_EXPLORER_QUESTIONS;
  const currentAudioQ = activeAudioQuestions[audioQuestionIdx % activeAudioQuestions.length];

  const handlePlayTourGuideAudio = (slowOverride?: boolean) => {
    const useSlow = slowOverride !== undefined ? slowOverride : isSlowAudioMode;
    setAudioErrorMessage(null);
    setIsPlayingAudioPrompt(true);

    // ENGLISH SPEECH ONLY - NEVER mix Vietnamese into speech playback
    playEnglishSpeech(currentAudioQ.audioScriptEn, {
      slow: useSlow,
      onStart: () => setIsPlayingAudioPrompt(true),
      onEnd: () => setIsPlayingAudioPrompt(false),
      onError: (err) => {
        setIsPlayingAudioPrompt(false);
        setAudioErrorMessage('Trình duyệt chưa sẵn sàng phát âm thanh tiếng Anh. Vui lòng kiểm tra quyền micro/loa thiết bị.');
      }
    });
  };

  const handleToggleSlow = () => {
    const nextSlow = !isSlowAudioMode;
    setIsSlowAudioMode(nextSlow);
    playTone('click');
    if (isPlayingAudioPrompt) {
      handlePlayTourGuideAudio(nextSlow);
    }
  };

  const handleAnswerAudio = (selectedIdx: number) => {
    stopSpeech();
    setIsPlayingAudioPrompt(false);

    if (selectedIdx === currentAudioQ.correctIndex) {
      setAudioAnswerStatus({
        isCorrect: true,
        message: `🌟 Excellent! Correct answer: ${currentAudioQ.revealedInfo}`
      });
      awardGameStars(30);
    } else {
      setAudioAnswerStatus({
        isCorrect: false,
        message: `💡 Not quite right! Tap "Replay" or "Slow" to listen again!`
      });
      playTone('wrong');
      setStreakCount(0);
    }
  };

  const handleNextAudio = () => {
    setAudioQuestionIdx(prev => prev + 1);
    setAudioAnswerStatus(null);
    setShowTranscript(false);
    setAudioErrorMessage(null);
    stopSpeech();
    setIsPlayingAudioPrompt(false);
    playTone('click');
  };

  // ----------------------------------------------------
  // GAME 5: VOCABULARY SCRAMBLE (Thử thách Xếp chữ)
  // ----------------------------------------------------
  const filteredVocabList = VOCAB_SCRAMBLE_LIST.filter(item => {
    if (selectedGradeBand === 'grade_1_2') return item.gradeTier === 'grade_1_2';
    if (selectedGradeBand === 'grade_3') return item.gradeTier === 'grade_1_2' || item.gradeTier === 'grade_3';
    return true;
  });

  const [vocabIdx, setVocabIdx] = useState(0);
  const currentVocab = filteredVocabList[vocabIdx % filteredVocabList.length] || VOCAB_SCRAMBLE_LIST[0];
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [scrambleStatus, setScrambleStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  // Shuffle letters when vocab changes
  useEffect(() => {
    const letters = currentVocab.word.split('');
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffled);
    setSelectedLetters([]);
    setScrambleStatus('playing');
  }, [currentVocab]);

  const handleLetterClick = (letter: string, index: number) => {
    if (scrambleStatus === 'correct') return;
    playTone('click');
    const newSelected = [...selectedLetters, letter];
    setSelectedLetters(newSelected);

    // Remove this letter instance from available
    const newScrambled = [...scrambledLetters];
    newScrambled.splice(index, 1);
    setScrambledLetters(newScrambled);

    // If all letters used, check
    if (newSelected.length === currentVocab.word.length) {
      if (newSelected.join('') === currentVocab.word) {
        setScrambleStatus('correct');
        awardGameStars(25);
        playSpeech(currentVocab.word, 'en-US');
      } else {
        setScrambleStatus('wrong');
        playTone('wrong');
      }
    }
  };

  const handleResetCurrentWord = () => {
    const letters = currentVocab.word.split('');
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffled);
    setSelectedLetters([]);
    setScrambleStatus('playing');
    playTone('click');
  };

  const handleNextWord = () => {
    setVocabIdx(prev => prev + 1);
    playTone('click');
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header Toolbar with Game Modes & Grade Band Filter */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-amber-50/60 via-white to-rose-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-md shadow-amber-200">
              <Trophy className="w-5 h-5 animate-bounce" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
                <span>Đấu trường Thám hiểm</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 hidden sm:inline-block">
                  Adventure Learning Games
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Vừa chơi vừa học tiếng Anh về đất nước, con người & văn hóa Việt Nam!
              </p>
            </div>
          </div>
        </div>

        {/* Live Rewards & Grade Selector */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
          
          {/* Grade Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl text-xs font-bold">
            {(['grade_1_2', 'grade_3', 'grade_4_5'] as const).map(g => (
              <button
                key={g}
                onClick={() => { setSelectedGradeBand(g); playTone('click'); }}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  selectedGradeBand === g
                    ? 'bg-white text-rose-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {g === 'grade_1_2' ? 'Lớp 1–2' : g === 'grade_3' ? 'Lớp 3' : 'Lớp 4–5'}
              </button>
            ))}
          </div>

          {/* Session Stars */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-amber-400/90 text-amber-950 font-extrabold text-xs shadow-xs">
            <Star className="w-4 h-4 fill-amber-950 text-amber-950" />
            <span>+{starsEarnedThisSession} Sao đã tích lũy</span>
          </div>

          {/* Streak Indicator */}
          {streakCount > 1 && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold animate-pulse">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>Chuỗi x{streakCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Game Mode Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'map-drop', labelVi: '1. Kéo thả Địa danh', labelEn: 'Landmark Map Drop', icon: '📍' },
          { id: '34-provinces-game', labelVi: '2. Bản đồ 34 Tỉnh 2025', labelEn: '34 Provinces Map Game', icon: '🗺️' },
          { id: 'province-match', labelVi: '3. Nối Tỉnh/Thành', labelEn: 'Province Matching', icon: '🔗' },
          { id: 'photo-mystery', labelVi: '4. Thám tử Ảnh bí ẩn', labelEn: 'Photo Detective', icon: '🔍' },
          { id: 'audio-explorer', labelVi: '5. Thám hiểm Âm thanh', labelEn: 'Audio Explorer', icon: '🎧' },
          { id: 'vocab-scramble', labelVi: '6. Thử thách Xếp chữ', labelEn: 'Word Challenge', icon: '🔠' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveGame(tab.id as GameMode); playTone('click'); }}
            className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all border ${
              activeGame === tab.id
                ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200 scale-102'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <div className="text-left">
              <div>{tab.labelVi}</div>
              <div className={`text-[10px] font-normal ${activeGame === tab.id ? 'text-rose-100' : 'text-slate-400'}`}>
                {tab.labelEn}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* 3. GAME CONTAINERS */}

      {/* ========================================================= */}
      {/* GAME 1: LANDMARK MAP DROP                                 */}
      {/* ========================================================= */}
      {activeGame === 'map-drop' && (
        <LandmarkDragDropGame
          gradeBand={selectedGradeBand}
          onEarnStars={awardGameStars}
        />
      )}

      {/* ========================================================= */}
      {/* GAME 2: 34 PROVINCES INTERACTIVE MAP LEARNING GAME        */}
      {/* ========================================================= */}
      {activeGame === '34-provinces-game' && (
        <InteractiveMap34ProvincesGame
          gradeBand={selectedGradeBand}
          onEarnStars={awardGameStars}
        />
      )}

      {/* ========================================================= */}
      {/* GAME 2: PROVINCE MATCHING (Nối Tỉnh/Thành)                 */}
      {/* ========================================================= */}
      {activeGame === 'province-match' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading flex items-center gap-2">
                <span>Trò chơi 2: Nối Danh lam Thắng cảnh với Tỉnh / Thành</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  +25 Sao / cặp
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Bấm vào 1 danh thắng ở Cột Trái rồi bấm vào Tỉnh/Thành phố tương ứng ở Cột Phải để ghép đôi!
              </p>
            </div>

            <button
              onClick={handleResetMatch}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ghép lại</span>
            </button>
          </div>

          {matchFeedback && (
            <div className={`p-3 rounded-2xl text-xs font-bold ${
              matchFeedback.startsWith('✨') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}>
              {matchFeedback}
            </div>
          )}

          {matchedIds.length === MATCHING_PAIRS.length ? (
            <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 text-center space-y-3">
              <div className="text-5xl">🏆</div>
              <h4 className="text-xl font-extrabold text-emerald-900 font-heading">
                Hoan hô! Bé đã ghép nối thành công 100% các Tỉnh/Thành!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Con là một nhà địa lý và ngoại ngữ tài ba của VietDiscovery!
              </p>
              <button
                onClick={handleResetMatch}
                className="mt-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-200"
              >
                Chơi lại một lần nữa
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Column A: Landmarks */}
              <div className="space-y-3">
                <div className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Cột A: Danh lam Thắng cảnh (Landmarks)
                </div>
                {MATCHING_PAIRS.map(item => {
                  const isMatched = matchedIds.includes(item.id);
                  const isSelected = selectedLandmarkMatch === item.id;
                  return (
                    <button
                      key={item.id}
                      disabled={isMatched}
                      onClick={() => handleLandmarkSelect(item.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                          : isSelected
                          ? 'bg-indigo-50 border-indigo-600 shadow-md scale-102 ring-2 ring-indigo-200'
                          : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-extrabold text-slate-900 text-sm font-heading">{item.landmark}</div>
                          <div className="text-xs text-slate-500 font-medium">{item.landmarkEn}</div>
                        </div>
                      </div>
                      {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Column B: Provinces (Shuffled) */}
              <div className="space-y-3">
                <div className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Cột B: Tỉnh / Thành phố tương ứng (Provinces)
                </div>
                {[...MATCHING_PAIRS].reverse().map(item => {
                  const isMatched = matchedIds.includes(item.id);
                  const isSelected = selectedProvinceMatch === item.id;
                  return (
                    <button
                      key={item.id}
                      disabled={isMatched}
                      onClick={() => handleProvinceSelect(item.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 opacity-60 cursor-default'
                          : isSelected
                          ? 'bg-indigo-50 border-indigo-600 shadow-md scale-102 ring-2 ring-indigo-200'
                          : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                          📍
                        </span>
                        <div>
                          <div className="font-extrabold text-slate-900 text-sm font-heading">{item.province}</div>
                          <div className="text-xs text-slate-500 font-medium">{item.provinceEn}</div>
                        </div>
                      </div>
                      {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME 3: PHOTO MYSTERY DETECTIVE (Thám tử ảnh bí ẩn)        */}
      {/* ========================================================= */}
      {activeGame === 'photo-mystery' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading flex items-center gap-2">
                <span>Trò chơi 3: Thám tử Ảnh Bí ẩn (Photo Detective)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Thưởng tới +50 Sao
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Bức ảnh bí mật đang bị các mảnh ghép che khuất. Hãy mở ít mảnh ghép nhất và đoán đúng danh thắng nhé!
              </p>
            </div>

            <button
              onClick={handleNextMystery}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Vụ án tiếp theo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left 6 cols: Mystery Photo with 4 Grid Cover Tiles */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md">
                <img
                  src={currentMystery.image}
                  alt="Mystery Destination"
                  className="w-full h-full object-cover"
                />

                {/* 4 Scratch/Cover Tiles */}
                {!mysteryAnswered && (
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-slate-950/40">
                    {[1, 2, 3, 4].map(tileNum => {
                      const isRevealed = revealedTiles.includes(tileNum);
                      return (
                        <div
                          key={tileNum}
                          onClick={() => handleRevealTile(tileNum)}
                          className={`flex items-center justify-center font-extrabold text-base transition-all select-none ${
                            isRevealed
                              ? 'opacity-0 pointer-events-none'
                              : 'bg-gradient-to-tr from-slate-900 to-indigo-900 text-amber-300 border border-slate-700/80 cursor-pointer hover:bg-indigo-800'
                          }`}
                        >
                          {!isRevealed && (
                            <div className="text-center">
                              <Search className="w-5 h-5 mx-auto mb-1 opacity-80" />
                              <span className="text-xs">Mở mảnh #{tileNum}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Status Overlay */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-white text-[11px] font-bold backdrop-blur-md">
                  Đã mở: {revealedTiles.length}/4 mảnh ghép
                </div>
              </div>

              <div className="text-center text-xs text-slate-500 font-medium">
                💡 Mẹo thám tử: Bấm vào mảnh ghép tối màu để xem thêm một phần bức ảnh!
              </div>
            </div>

            {/* Right 6 cols: Clues & Multiple Choice options */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  {currentMystery.titleVi}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {currentMystery.titleEn}
                </p>
              </div>

              {/* Clue cards */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Manh mối thám tử thu thập được:
                </div>
                {currentMystery.clues.map((clue, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 font-medium">
                    {clue}
                  </div>
                ))}
              </div>

              {/* Result banner */}
              {mysteryResult && (
                <div className={`p-4 rounded-2xl text-xs font-bold flex items-center justify-between ${
                  mysteryResult.isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  <span>{mysteryResult.message}</span>
                  <button
                    onClick={handleNextMystery}
                    className="ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
                  >
                    Tiếp theo ➜
                  </button>
                </div>
              )}

              {/* Multiple Choice Guess Buttons */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Con hãy chọn đáp án đúng nhất:
                </div>
                {currentMystery.options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={mysteryAnswered}
                    onClick={() => handleGuessMystery(idx)}
                    className={`w-full p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-extrabold transition-all ${
                      mysteryAnswered
                        ? idx === currentMystery.correctIndex
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                        : 'bg-white border-slate-200 hover:border-rose-400 hover:bg-rose-50/40 text-slate-800'
                    }`}
                  >
                    <span>{String.fromCharCode(65 + idx)}. {option}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME 4: AUDIO EXPLORER (Nhà thám hiểm âm thanh - English First) */}
      {/* ========================================================= */}
      {activeGame === 'audio-explorer' && (
        <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-5 sm:p-7 border-3 border-sky-300/80 shadow-[0_12px_36px_rgba(56,189,248,0.18)] space-y-6">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-sky-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center text-sm shadow-xs font-bold shrink-0">
                  🎧
                </span>
                <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900 flex items-center gap-2">
                  <span>Audio Explorer</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 uppercase font-black tracking-wider">
                    {selectedGradeBand.replace('_', ' ').toUpperCase()} LISTENING
                  </span>
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Luyện kỹ năng Nghe tiếng Anh chuẩn bản ngữ qua các câu đố thám hiểm địa danh Việt Nam!
              </p>
            </div>

            <button
              onClick={handleNextAudio}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-black transition-all cursor-pointer shadow-xs hover:scale-102 active:scale-98"
            >
              <span>Next Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="max-w-xl mx-auto space-y-6 text-center">
            
            {/* Audio Play Centerpiece with Cute 3D Mascot */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-b from-sky-50/80 via-indigo-50/40 to-pink-50/40 border-2 border-sky-200/80 shadow-inner space-y-4">
              
              {/* Cute 3D Headphone Mascot */}
              <div className="relative inline-block my-1">
                <div className={`w-32 h-32 sm:w-36 sm:h-36 mx-auto relative rounded-3xl flex items-center justify-center transition-transform ${isPlayingAudioPrompt ? 'scale-105' : 'hover:scale-102'}`}>
                  <img
                    src="/assets/cute/cute_3d_headphones.png"
                    alt="Cute 3D Audio Explorer Mascot"
                    className="w-full h-full object-contain drop-shadow-xl select-none animate-bounce-subtle"
                  />
                  {isPlayingAudioPrompt && (
                    <span className="absolute -top-2 -right-2 flex h-6 w-6">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-pink-500 text-white text-[10px] items-center justify-center font-bold">
                        🔊
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {/* Main Instruction: English FIRST and PROMINENT */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-widest text-sky-600 font-heading">
                  LISTEN CAREFULLY • NGHE KỸ NHÉ!
                </div>
                <h4 className="font-black text-slate-900 text-lg sm:text-2xl font-heading leading-snug tracking-tight">
                  {currentAudioQ.questionEn}
                </h4>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-slate-600 text-xs font-semibold border border-slate-200/80 shadow-2xs">
                    {currentAudioQ.questionVi}
                  </span>
                </div>
              </div>

              {/* Primary Audio Action Buttons: Listen, Replay, Slow */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                {/* 1. Listen / Play Button */}
                <button
                  onClick={() => handlePlayTourGuideAudio(false)}
                  className={`px-5 py-3 rounded-2xl font-black text-sm text-white shadow-md transition-all flex items-center gap-2 cursor-pointer ${
                    isPlayingAudioPrompt
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 ring-4 ring-pink-200 animate-pulse'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-emerald-200 hover:scale-102 active:scale-98'
                  }`}
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isPlayingAudioPrompt ? 'Playing Audio... 🔊' : 'Listen (Nghe)'}</span>
                </button>

                {/* 2. Replay Button */}
                <button
                  onClick={() => handlePlayTourGuideAudio(isSlowAudioMode)}
                  className="px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-300 font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102 active:scale-98"
                  title="Replay from beginning"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Replay (Phát lại)</span>
                </button>

                {/* 3. Slow Playback Toggle */}
                <button
                  onClick={handleToggleSlow}
                  className={`px-4 py-3 rounded-2xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:scale-102 active:scale-98 border-2 ${
                    isSlowAudioMode
                      ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-200'
                      : 'bg-white hover:bg-amber-50/50 text-slate-700 border-slate-200'
                  }`}
                  title="Toggle slow playback speed"
                >
                  <span>🐢</span>
                  <span>Slow {isSlowAudioMode ? '(ON)' : '(Chậm)'}</span>
                </button>
              </div>

              {/* Optional English Transcript Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setShowTranscript(prev => !prev)}
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 cursor-pointer underline underline-offset-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showTranscript ? 'Hide English Transcript (Ẩn lời đọc)' : 'Show English Transcript (Xem lời đọc tiếng Anh)'}</span>
                </button>
              </div>

              {/* Transcript Drawer */}
              {showTranscript && (
                <div className="p-4 rounded-2xl bg-white border border-sky-200 text-left text-xs sm:text-sm text-slate-800 space-y-1.5 animate-in fade-in duration-200 shadow-xs">
                  <div className="font-black text-sky-900 text-xs uppercase tracking-wider flex items-center gap-1.5 font-heading">
                    <span>📜</span>
                    <span>ENGLISH AUDIO SCRIPT:</span>
                  </div>
                  <p className="italic font-medium text-slate-800 leading-relaxed">
                    "{currentAudioQ.audioScriptEn}"
                  </p>
                  <div className="pt-1.5 border-t border-sky-100 text-xs text-slate-500">
                    <span className="font-bold text-slate-600">Bản dịch: </span>
                    <span>{currentAudioQ.audioScriptVi}</span>
                  </div>
                </div>
              )}

              {/* Audio error banner if any */}
              {audioErrorMessage && (
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-center gap-2">
                  <span>⚠️</span>
                  <span>{audioErrorMessage}</span>
                </div>
              )}
            </div>

            {/* Feedback alert */}
            {audioAnswerStatus && (
              <div className={`p-4 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-between shadow-xs animate-in fade-in duration-200 ${
                audioAnswerStatus.isCorrect 
                  ? 'bg-emerald-50 text-emerald-900 border-2 border-emerald-300' 
                  : 'bg-rose-50 text-rose-900 border-2 border-rose-300'
              }`}>
                <div className="flex items-center gap-2">
                  <span>{audioAnswerStatus.isCorrect ? '🎉' : '💡'}</span>
                  <span>{audioAnswerStatus.message}</span>
                </div>
                <button
                  onClick={handleNextAudio}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black cursor-pointer shrink-0 transition-transform active:scale-95"
                >
                  Next Question ›
                </button>
              </div>
            )}

            {/* Answer Options (English Primary) */}
            <div className="space-y-2 text-left">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 font-heading">
                SELECT YOUR ANSWER (CHỌN ĐÁP ÁN ĐÚNG):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentAudioQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerAudio(idx)}
                    className="p-4 rounded-2xl border-2 border-sky-100 hover:border-sky-400 hover:bg-sky-50/70 bg-white text-xs sm:text-sm font-bold text-slate-800 transition-all flex items-center gap-3 cursor-pointer shadow-xs hover:scale-101 active:scale-99 min-h-[52px]"
                  >
                    <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 font-black font-mono flex items-center justify-center text-xs shrink-0 border border-sky-200">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME 5: VOCABULARY SCRAMBLE (Thử thách Xếp chữ)           */}
      {/* ========================================================= */}
      {activeGame === 'vocab-scramble' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading flex items-center gap-2">
                <span>Trò chơi 5: Thử thách Xếp chữ Tiếng Anh (Word Scramble)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  Chính tả & Từ vựng
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Bấm vào các ô chữ cái xáo trộn để sắp xếp thành từ tiếng Anh đúng chính tả nhé!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetCurrentWord}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Xếp lại</span>
              </button>
              <button
                onClick={handleNextWord}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                <span>Từ tiếp theo ➜</span>
              </button>
            </div>
          </div>

          <div className="max-w-lg mx-auto space-y-6 text-center">
            
            {/* Clue and Emoji */}
            <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200 space-y-3">
              <div className="text-6xl drop-shadow-sm">{currentVocab.emoji}</div>
              <div>
                <h4 className="font-extrabold text-purple-950 text-base font-heading">
                  Gợi ý: {currentVocab.hintVi}
                </h4>
                <p className="text-xs text-purple-700 italic mt-0.5">
                  "{currentVocab.hintEn}"
                </p>
              </div>

              <button
                onClick={() => playSpeech(currentVocab.word, 'en-US')}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-200 text-purple-900 text-xs font-bold hover:bg-purple-300 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe phát âm chuẩn</span>
              </button>
            </div>

            {/* Answer Slots Display */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Các ô chữ bé đang xếp:
              </div>
              <div className="flex justify-center gap-2 flex-wrap">
                {Array.from({ length: currentVocab.word.length }).map((_, idx) => {
                  const letter = selectedLetters[idx];
                  return (
                    <div
                      key={idx}
                      className={`w-12 h-14 rounded-2xl border-2 flex items-center justify-center font-extrabold text-xl shadow-xs transition-all ${
                        scrambleStatus === 'correct'
                          ? 'bg-emerald-500 border-emerald-600 text-white animate-bounce'
                          : scrambleStatus === 'wrong'
                          ? 'bg-rose-50 border-rose-400 text-rose-700'
                          : letter
                          ? 'bg-white border-purple-500 text-purple-900'
                          : 'bg-slate-100 border-dashed border-slate-300 text-transparent'
                      }`}
                    >
                      {letter || ''}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scramble Status result message */}
            {scrambleStatus === 'correct' && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold animate-pulse">
                🎉 Hoàn hảo! Con đã xếp đúng từ "{currentVocab.word}" (+25 Sao)!
              </div>
            )}
            {scrambleStatus === 'wrong' && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
                ❌ Chưa chính xác rồi, bé hãy bấm nút "Xếp lại" để thử lại nhé!
              </div>
            )}

            {/* Letter Pool to pick from */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Bấm vào các chữ cái bên dưới:
              </div>
              <div className="flex justify-center gap-2.5 flex-wrap">
                {scrambledLetters.map((l, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLetterClick(l, idx)}
                    className="w-12 h-14 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-500 text-slate-800 font-extrabold text-xl shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
