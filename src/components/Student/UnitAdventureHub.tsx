import React, { useState } from 'react';
import { Destination, DestinationProgress, GradeBand } from '../../types';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech } from '../../lib/speech';
import { getVocabularyVisual } from '../../data/vocabularyVisualsRegistry';
import { Volume2, Sparkles, BookOpen, ChevronRight, CheckCircle2, Eye, Compass, Map, X } from 'lucide-react';

interface UnitAdventureHubProps {
  destinations: Destination[];
  progressMap: Record<string, DestinationProgress>;
  gradeBand: GradeBand;
  onOpenLesson: (destination: Destination, initialTab?: 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'quiz') => void;
  onOpenDestinationModal?: (destination: Destination) => void;
  onToggleMapView?: () => void;
  isMapVisible?: boolean;
  onSelectStudentTab?: (tab: 'explore' | 'games' | 'passport' | 'progress') => void;
  activeStudentTab?: 'explore' | 'games' | 'passport' | 'progress';
}

interface VocabItem {
  word: string;
  icon: string;
  vi: string;
  phonetic: string;
  example: string;
}

interface UnitData {
  unitNumber: number;
  destId: string;
  title: string;
  quoteEn: string;
  viSummary: string;
  sceneryImg?: string;
  headerPhotoWebp?: string;
  headerPhotoFallback: string;
  badgeImg: string;
  badgeAlt: string;
  vocabList: VocabItem[];
  progressText: string;
  progressPercent: number;
  isMastered: boolean;
}

export const UnitAdventureHub: React.FC<UnitAdventureHubProps> = ({
  destinations,
  progressMap,
  gradeBand,
  onOpenLesson,
  onOpenDestinationModal,
  onToggleMapView,
  isMapVisible,
  onSelectStudentTab,
  activeStudentTab
}) => {
  // Active unit pair: 0 = Unit 1 & 2 (Hạ Long & Hà Nội), 1 = Unit 3 & 4 (Huế & Đà Nẵng)
  const [activePairIndex, setActivePairIndex] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [viewingVocabUnit, setViewingVocabUnit] = useState<UnitData | null>(null);

  // Play word audio via Jenny Neural / Audio Engine
  const speakWord = (word: string) => {
    soundEffects.playClick();
    setSpeakingWord(word);
    playEnglishSpeech(word, {
      onEnd: () => setSpeakingWord(null),
      onError: () => setSpeakingWord(null)
    });
  };

  // Find destinations matching units
  const halongDest = destinations.find(d => d.id === 'halong') || destinations[0];
  const hanoiDest = destinations.find(d => d.id === 'hanoi') || destinations[1];
  const hueDest = destinations.find(d => d.id === 'hue') || destinations[2];
  const danangDest = destinations.find(d => d.id === 'danang_hoian' || d.id === 'danang') || destinations[3];

  // UNIT DEFINITIONS MATCHING USER REFERENCE MOCKUPS
  const UNITS_PAIR_0: [UnitData, UnitData] = [
    {
      unitNumber: 1,
      destId: 'halong',
      title: "Vietnam's limestone islands rising from emerald waters",
      quoteEn: "Vietnam's limestone islands rising from emerald waters.",
      viSummary: "Vịnh Hạ Long — Kỳ quan thiên nhiên thế giới nổi tiếng với làn nước trong xanh như ngọc bích và hàng nghìn hòn đảo đá vôi kỳ vĩ.",
      headerPhotoWebp: '/destinations/halong_bay.webp',
      headerPhotoFallback: '/destinations/halong_bay.jpg',
      badgeImg: '/assets/cute/btn1_mountain.png',
      badgeAlt: 'Mountain Flag',
      vocabList: [
        { word: 'Water', icon: '💧', vi: 'Nước', phonetic: '/ˈwɔː.tər/', example: 'The emerald water is warm and clear.' },
        { word: 'Boat', icon: '⛵', vi: 'Thuyền buồm', phonetic: '/bəʊt/', example: 'A traditional red sailing boat is in the bay.' },
        { word: 'Dragon', icon: '🐉', vi: 'Con rồng', phonetic: '/ˈdræɡ.ən/', example: 'Ha Long means Descending Dragon.' },
        { word: 'Island', icon: '🏝️', vi: 'Hòn đảo', phonetic: '/ˈaɪ.lənd/', example: 'Vietnam has thousands of green limestone islands.' }
      ],
      progressText: '0% - Ready to explore!',
      progressPercent: 0,
      isMastered: false
    },
    {
      unitNumber: 2,
      destId: 'hanoi',
      title: "The ancient Temple of Literature, and joyful streets",
      quoteEn: "The ancient Temple of Literature, and joyful streets.",
      viSummary: "Hà Nội — Thủ đô ngàn năm văn hiến với Văn Miếu Quốc Tử Giám, Tháp Rùa Hồ Gươm và 36 phố phường rộn rã.",
      headerPhotoWebp: '/destinations/hanoi_turtle_tower.webp',
      headerPhotoFallback: '/destinations/hanoi_turtle_tower.jpg',
      badgeImg: '/assets/cute/btn2_temple.png',
      badgeAlt: 'Ancient Temple',
      vocabList: [
        { word: 'City', icon: '🏙️', vi: 'Thành phố', phonetic: '/ˈsɪt.i/', example: 'Hanoi is the ancient capital city of Vietnam.' },
        { word: 'Lake', icon: '🌊', vi: 'Hồ nước', phonetic: '/leɪk/', example: 'Hoan Kiem Lake is in the heart of Hanoi.' },
        { word: 'Turtle', icon: '🐢', vi: 'Rùa thần', phonetic: '/ˈtɜː.təl/', example: 'The Golden Turtle is a Vietnamese cultural legend.' },
        { word: 'Tower', icon: '🗼', vi: 'Tháp rùa', phonetic: '/ˈtaʊ.ər/', example: 'Turtle Tower stands peacefully in Hoan Kiem Lake.' }
      ],
      progressText: '0% - Ready to explore!',
      progressPercent: 0,
      isMastered: false
    }
  ];

  const UNITS_PAIR_1: [UnitData, UnitData] = [
    {
      unitNumber: 3,
      destId: 'hue',
      title: "The historic royal capital by the Perfume River with grand palaces, royal music, and delicate cuisine.",
      quoteEn: "The historic royal capital by the Perfume River with grand palaces, royal music, and delicate cuisine.",
      viSummary: "Cố đô Huế — Di sản hoàng triều bên dòng sông Hương thơ mộng với Đại Nội nguy nga, nhã nhạc cung đình và ẩm thực thanh tao.",
      headerPhotoWebp: '/destinations/hue_citadel.webp',
      headerPhotoFallback: '/destinations/hue_citadel.jpg',
      badgeImg: '/assets/cute/btn2_temple.png',
      badgeAlt: 'Imperial Gate',
      vocabList: [
        { word: 'King', icon: '👑', vi: 'Nhà vua', phonetic: '/kɪŋ/', example: 'The King lived in the grand Imperial Palace of Hue.' },
        { word: 'River', icon: '🏞️', vi: 'Dòng sông', phonetic: '/ˈrɪv.ər/', example: 'The Perfume River flows gently through the royal capital.' },
        { word: 'Gate', icon: '⛩️', vi: 'Cổng thành', phonetic: '/ɡeɪt/', example: 'Ngo Mon Gate is the majestic main entrance to the Citadel.' },
        { word: 'Music', icon: '🎶', vi: 'Nhã nhạc', phonetic: '/ˈmjuː.zɪk/', example: 'Royal court music is an intangible world cultural heritage.' }
      ],
      progressText: '0% - Ready to explore!',
      progressPercent: 0,
      isMastered: false
    },
    {
      unitNumber: 4,
      destId: 'danang_hoian',
      title: "A dynamic coastal city featuring the Golden Dragon Bridge paired with the ancient glowing lantern town.",
      quoteEn: "A dynamic coastal city featuring the Golden Dragon Bridge paired with the ancient glowing lantern town.",
      viSummary: "Đà Nẵng & Hội An — Thành phố biển năng động với Cầu Rồng phun lửa kỳ vĩ hòa cùng vẻ đẹp cổ kính của phố Hội lung linh đèn lồng.",
      headerPhotoWebp: '/destinations/danang_golden_bridge.webp',
      headerPhotoFallback: '/destinations/danang_golden_bridge.jpg',
      badgeImg: '/assets/cute/btn1_mountain.png',
      badgeAlt: 'Dragon Bridge',
      vocabList: [
        { word: 'Bridge', icon: '🌉', vi: 'Cây cầu', phonetic: '/brɪdʒ/', example: 'The Dragon Bridge breathes fire and water on weekend nights.' },
        { word: 'Lantern', icon: '🏮', vi: 'Đèn lồng', phonetic: '/ˈlæn.tən/', example: 'Colorful silk lanterns light up the streets of Hoi An.' },
        { word: 'Beach', icon: '🏖️', vi: 'Bãi biển', phonetic: '/biːtʃ/', example: 'My Khe Beach has warm turquoise water and soft white sand.' },
        { word: 'Fire', icon: '🔥', vi: 'Ngọn lửa', phonetic: '/faɪər/', example: 'The golden dragon breathes brilliant flames into the sky.' }
      ],
      progressText: '0% - Ready to explore!',
      progressPercent: 0,
      isMastered: false
    }
  ];

  const currentUnits = activePairIndex === 0 ? UNITS_PAIR_0 : UNITS_PAIR_1;

  const getDestinationForUnit = (unit: UnitData): Destination => {
    if (unit.destId === 'halong') return halongDest;
    if (unit.destId === 'hanoi') return hanoiDest;
    if (unit.destId === 'hue') return hueDest;
    return danangDest;
  };

  const handleStartAdventure = (unit: UnitData) => {
    soundEffects.playClick();
    const dest = getDestinationForUnit(unit);
    if (onOpenDestinationModal) {
      onOpenDestinationModal(dest);
    } else {
      onOpenLesson(dest, 'vocabulary');
    }
  };

  return (
    <div className="relative w-full space-y-5">
      
      {/* Unit Selector Pills & Map Toggle Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 sm:px-2">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActivePairIndex(0);
            }}
            className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
              activePairIndex === 0
                ? 'bg-rose-500 text-white shadow-rose-200 shadow-md ring-2 ring-rose-300 scale-102'
                : 'bg-white/95 hover:bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <span>🧭</span>
            <span>Unit 1 & 2 (Hạ Long & Hà Nội)</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActivePairIndex(1);
            }}
            className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
              activePairIndex === 1
                ? 'bg-rose-500 text-white shadow-rose-200 shadow-md ring-2 ring-rose-300 scale-102'
                : 'bg-white/95 hover:bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <span>🏛️</span>
            <span>Unit 3 & 4 (Huế & Đà Nẵng)</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {onSelectStudentTab && (
            <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full border border-slate-200 shadow-xs">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onSelectStudentTab('games');
                }}
                className="px-3 py-1 rounded-full text-xs font-black text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>🎮</span>
                <span>Đấu trường</span>
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onSelectStudentTab('passport');
                }}
                className="px-3 py-1 rounded-full text-xs font-black text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>🏆</span>
                <span>Hộ chiếu</span>
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onSelectStudentTab('progress');
                }}
                className="px-3 py-1 rounded-full text-xs font-black text-teal-700 hover:bg-teal-100 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>📊</span>
                <span>Tiến độ</span>
              </button>
            </div>
          )}

          {onToggleMapView && (
            <button
              onClick={() => {
                soundEffects.playClick();
                onToggleMapView();
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer border border-emerald-300/60"
            >
              <Map className="w-3.5 h-3.5" />
              <span>{isMapVisible ? 'Ẩn Bản Đồ' : '🗺️ Xem Bản Đồ Việt Nam (WGS84 GIS)'}</span>
            </button>
          )}
        </div>
      </div>

      {/* TWO MAIN UNIT ADVENTURE CARDS SIDE-BY-SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 relative">
        {currentUnits.map((unit, idx) => {
          const dest = getDestinationForUnit(unit);
          const isLeftCard = idx === 0;

          // Compute dynamic progress strictly from genuine progressMap
          const destProg = progressMap[unit.destId] || progressMap[dest.id];
          const starsEarned = destProg?.starsEarned || 0;
          const isMastered = Boolean(destProg?.completedSteps?.quiz && (destProg.quizScore >= 3 || starsEarned >= 20));
          const completedStepsCount = destProg?.completedSteps ? Object.values(destProg.completedSteps).filter(Boolean).length : 0;
          const progressPercent = isMastered 
            ? 100 
            : completedStepsCount > 0 
              ? Math.min(100, Math.round((completedStepsCount / 5) * 100)) 
              : 0;
          const progressText = isMastered 
            ? '100% Mastered' 
            : progressPercent > 0 
              ? `${progressPercent}% in progress` 
              : '0% - Ready to explore!';

          return (
            <div
              key={unit.unitNumber}
              className="relative bg-white/98 backdrop-blur-md rounded-[32px] p-4 sm:p-5 border-3 border-sky-300/80 shadow-[0_12px_36px_rgba(56,189,248,0.18)] flex flex-col justify-between transition-all hover:shadow-[0_16px_40px_rgba(56,189,248,0.25)]"
            >
              <div className="space-y-3.5">
                
                {/* 1. Header Scenery Banner - Authentic High-Resolution Landmark Photo (WebP + JPG fallback) */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-white/80 group h-44 sm:h-52 md:h-56 bg-slate-900">
                    <picture>
                      <source type="image/webp" srcSet={unit.headerPhotoWebp || dest.image} />
                      <img
                        src={dest.fallbackImage || unit.headerPhotoFallback || dest.image}
                        alt={`${dest.name} (${dest.vietnameseName})`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src.endsWith('.webp')) {
                            target.src = unit.headerPhotoFallback || '/destinations/halong_bay.jpg';
                          } else if (!target.src.includes('halong_bay.jpg')) {
                            target.src = '/destinations/halong_bay.jpg';
                          }
                        }}
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
                    
                    {/* Playful Unit Pill Badge */}
                    <div className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-black text-xs shadow-md border border-white/80 flex items-center gap-1.5 z-10">
                      <span>{unit.unitNumber === 1 ? '🌊' : unit.unitNumber === 2 ? '🏛️' : unit.unitNumber === 3 ? '👑' : '🐉'}</span>
                      <span>Unit {unit.unitNumber}</span>
                    </div>

                    {/* Sparkles / Theme badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 font-black text-[11px] shadow-md border border-white/30 flex items-center gap-1 z-10">
                      <span>✨</span>
                      <span>{dest.theme || 'Discovery'}</span>
                    </div>

                    {/* Bottom Banner Title */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white z-10">
                      <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-amber-300 drop-shadow-sm truncate">
                        {dest.region === 'North' ? 'Northern Vietnam' : dest.region === 'Central' ? 'Central Vietnam' : 'Southern Vietnam'} • {dest.province}
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-black font-heading leading-tight drop-shadow-md truncate">
                        {dest.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-white/90 font-bold drop-shadow-sm truncate">
                        🇻🇳 {dest.vietnameseName}
                      </p>
                    </div>
                  </div>

                  {/* Playful Quote Box */}
                  <div className="bg-sky-50/90 rounded-2xl p-2.5 px-3.5 border border-sky-200/70 shadow-2xs">
                    <p className="text-xs sm:text-sm font-black text-blue-950 leading-snug font-heading tracking-tight">
                      "{unit.quoteEn}"
                    </p>
                  </div>
                </div>

                {/* 2. Bilingual Support Bar: "VN Hỗ trợ Tiếng Việt (Bấm để xem)" */}
                <div className="bg-amber-50/90 rounded-2xl p-2.5 px-3.5 sm:px-4 flex items-center justify-between border border-amber-200/70 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-amber-950 font-heading">
                      <span className="text-rose-600 font-extrabold mr-1">VN</span>
                      Hỗ trợ Tiếng Việt
                    </span>
                    <span className="text-[11px] text-amber-700 font-semibold hidden sm:inline">
                      (Bấm để xem)
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setViewingVocabUnit(unit);
                    }}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/80 rounded-full px-3 sm:px-3.5 py-1 text-xs font-black flex items-center gap-1.5 shadow-xs transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-700" />
                    <span>Xem bản dịch</span>
                  </button>
                </div>

                {/* 3. Key Vocabulary Pills with Audio */}
                <div>
                  <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-sky-900 flex items-center gap-1.5 mb-2">
                    <span className="text-rose-500">🎯</span>
                    <span>KEY VOCABULARY FOR GRADE 1:</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {unit.vocabList.map((item) => (
                      <button
                        key={item.word}
                        onClick={() => speakWord(item.word)}
                        className={`py-2 px-2.5 rounded-2xl bg-white border-2 transition-all cursor-pointer flex items-center justify-between gap-1 shadow-xs hover:scale-104 ${
                          speakingWord === item.word
                            ? 'border-amber-400 bg-amber-50 ring-2 ring-amber-300 scale-104'
                            : 'border-slate-100 hover:border-sky-300 hover:bg-sky-50/50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          {getVocabularyVisual(item.word).imageUrl ? (
                            <img 
                              src={getVocabularyVisual(item.word).imageUrl} 
                              alt={item.word} 
                              className="w-5 h-5 rounded-md object-cover shrink-0" 
                            />
                          ) : (
                            <span className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-[10px] shrink-0 select-none">
                              🖼️
                            </span>
                          )}
                          <span className="text-xs sm:text-sm font-black text-slate-800 truncate">
                            {item.word}
                          </span>
                        </div>
                        <Volume2 className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                          speakingWord === item.word ? 'text-amber-600 animate-pulse' : 'text-slate-400 hover:text-sky-600'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Adventure Progress */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-500">Adventure Progress:</span>
                    <span className={`font-black flex items-center gap-1 ${
                      isMastered ? 'text-amber-600' : 'text-slate-500'
                    }`}>
                      <span>{progressText}</span>
                      {isMastered && <span className="text-amber-500">⭐</span>}
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden shadow-inner p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isMastered 
                          ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                          : progressPercent > 0
                          ? 'bg-gradient-to-r from-sky-400 to-blue-500'
                          : 'bg-slate-200'
                      }`} 
                      style={{ width: isMastered ? '100%' : `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* 5. 4 Activity Action Buttons (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  {/* Listen */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'listening');
                    }}
                    className="bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer border-b-3 border-emerald-700"
                  >
                    <span className="text-xl sm:text-2xl">🎧</span>
                    <div className="text-left leading-tight">
                      <div className="text-sm sm:text-base font-black font-heading">Listen</div>
                      <div className="text-[10px] sm:text-[11px] text-emerald-100 font-bold">Nghe</div>
                    </div>
                  </button>

                  {/* Speak */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'speaking');
                    }}
                    className="bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer border-b-3 border-blue-800"
                  >
                    <span className="text-xl sm:text-2xl">🎙️</span>
                    <div className="text-left leading-tight">
                      <div className="text-sm sm:text-base font-black font-heading">Speak</div>
                      <div className="text-[10px] sm:text-[11px] text-sky-100 font-bold">Luyện nói</div>
                    </div>
                  </button>

                  {/* Read */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'reading');
                    }}
                    className="bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer border-b-3 border-indigo-800"
                  >
                    <span className="text-xl sm:text-2xl">📖</span>
                    <div className="text-left leading-tight">
                      <div className="text-sm sm:text-base font-black font-heading">Read</div>
                      <div className="text-[10px] sm:text-[11px] text-purple-100 font-bold">Đọc hiểu</div>
                    </div>
                  </button>

                  {/* Play */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'quiz');
                    }}
                    className="bg-gradient-to-b from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl p-2.5 sm:p-3 shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer border-b-3 border-orange-700"
                  >
                    <span className="text-xl sm:text-2xl">🎮</span>
                    <div className="text-left leading-tight">
                      <div className="text-sm sm:text-base font-black font-heading">Play</div>
                      <div className="text-[10px] sm:text-[11px] text-amber-100 font-bold">Thử thách</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* 6. Big Glossy Launch Button at Bottom */}
              <button
                onClick={() => handleStartAdventure(unit)}
                className="w-full mt-3.5 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-orange-500 text-white rounded-full p-2.5 sm:p-3 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-between px-3.5 sm:px-5 cursor-pointer border-2 border-white/80 group"
              >
                {/* Left Compass in Circle */}
                <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-rose-500 text-base shrink-0 group-hover:rotate-45 transition-transform">
                  🧭
                </div>

                {/* Center Text */}
                <div className="font-heading font-black text-sm sm:text-base md:text-lg tracking-wider drop-shadow-sm flex items-center gap-1.5 uppercase">
                  <span>START ADVENTURE</span>
                  <span className="text-amber-200">•</span>
                  <span>BẮT ĐẦU</span>
                  <span className="text-lg">›</span>
                </div>

                {/* Right Badge Icon */}
                <div className="h-7 w-auto shrink-0 flex items-center">
                  <img
                    src={unit.badgeImg}
                    alt={unit.badgeAlt}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </button>

              {/* Cute Cartoon Mascots at bottom corners matching reference */}
              {isLeftCard ? (
                /* Captain Trang Official Artwork on the left corner */
                <div className="absolute -left-6 sm:-left-8 -bottom-3 sm:-bottom-5 w-22 sm:w-28 h-18 sm:h-22 rounded-2xl overflow-hidden border-3 border-white shadow-xl z-20 pointer-events-none bg-sky-100 animate-bounce-subtle ring-2 ring-pink-300/80">
                  <img
                    src="/assets/cute/captain_trang_official.png"
                    alt="Captain Trang"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                /* Little Explorers duo surrounded by lanterns on the right corner */
                <div className="absolute -right-6 sm:-right-9 -bottom-3 sm:-bottom-5 w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-xl z-20 pointer-events-none bg-amber-100 animate-bounce-subtle ring-2 ring-pink-300/80">
                  <img
                    src="/assets/cute/little_explorers_duo.webp"
                    alt="Little Explorers"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Decorative Bottom Wildflowers Border matching mockup */}
      <div className="pt-2">
        <img
          src="/assets/cute/bottom_flowers.png"
          alt="Lush flora"
          className="w-full h-8 sm:h-12 object-cover object-bottom select-none pointer-events-none rounded-2xl opacity-90"
        />
      </div>

      {/* ============================================================== */}
      {/* BILINGUAL VOCABULARY MODAL                                     */}
      {/* ============================================================== */}
      {viewingVocabUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border-2 border-amber-300 relative space-y-4">
            
            {/* Close Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setViewingVocabUnit(null);
              }}
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl shadow-xs">
                📖
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900">
                  Unit {viewingVocabUnit.unitNumber} — Vocabulary Focus
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {viewingVocabUnit.viSummary}
                </p>
              </div>
            </div>

            {/* Vocabulary Cards List */}
            <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {viewingVocabUnit.vocabList.map((item) => (
                <div
                  key={item.word}
                  className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-3 hover:bg-amber-100/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {getVocabularyVisual(item.word).imageUrl ? (
                      <img
                        src={getVocabularyVisual(item.word).imageUrl}
                        alt={item.word}
                        className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-amber-200 shadow-2xs"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-2xl shrink-0 select-none">
                        🖼️
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm sm:text-base text-slate-900">{item.word}</span>
                        <span className="text-xs text-amber-700 font-mono font-semibold">{item.phonetic}</span>
                      </div>
                      <div className="text-xs font-bold text-rose-600">{item.vi}</div>
                      <div className="text-[11px] text-slate-600 italic truncate mt-0.5">"{item.example}"</div>
                    </div>
                  </div>

                  <button
                    onClick={() => speakWord(item.word)}
                    className="p-2 rounded-xl bg-white hover:bg-amber-200 text-amber-700 shadow-xs cursor-pointer transition-transform hover:scale-105 shrink-0"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setViewingVocabUnit(null);
                }}
                className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  const dest = getDestinationForUnit(viewingVocabUnit);
                  setViewingVocabUnit(null);
                  onOpenLesson(dest, 'vocabulary');
                }}
                className="px-5 py-2 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-xs shadow-md cursor-pointer transition-all hover:scale-102"
              >
                Luyện Tập Ngay ›
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
