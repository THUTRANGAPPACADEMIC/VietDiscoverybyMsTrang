import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  Volume2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  CheckCircle2, 
  Trophy, 
  Lightbulb, 
  RefreshCw, 
  X, 
  Info,
  MapPin,
  Award,
  ChevronRight,
  ShieldCheck,
  Star,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VIETNAM_34_PROVINCES_GEO, Province34GeoFeature } from '../../data/vietnam34ProvincesGeoData';
import { ProvinceDetailModal } from './ProvinceDetailModal';
import { searchProvinces } from '../../data/provinces';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech } from '../../lib/speech';
import { UserProfile, GradeBand } from '../../types';

interface InteractiveMap34ProvincesGameProps {
  user?: UserProfile | null;
  gradeBand?: GradeBand;
  onUpdateProgress?: (destId: string, score: number, starsEarned: number) => void;
  onEarnStars?: (stars: number) => void;
  onClose?: () => void;
  isStandaloneModal?: boolean;
}

type GameMode = 'learn' | 'discover' | 'dragdrop';
type RegionFilter = 'All' | 'Cities' | 'North' | 'Central' | 'South';

export const InteractiveMap34ProvincesGame: React.FC<InteractiveMap34ProvincesGameProps> = ({
  user,
  gradeBand = 'grade_3',
  onUpdateProgress,
  onEarnStars,
  onClose,
  isStandaloneModal = false
}) => {
  // Modes & Filtering
  const [activeMode, setActiveMode] = useState<GameMode>('discover');
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('All');

  const normalizeGrade = (g: GradeBand): 'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5' => {
    if (g === 'grade_1_2') return 'grade_2';
    if (g === 'grade_4_5') return 'grade_4';
    if (g === 'grade_1' || g === 'grade_2' || g === 'grade_3' || g === 'grade_4' || g === 'grade_5') return g;
    return 'grade_3';
  };

  const [selectedGrade, setSelectedGrade] = useState<'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5'>(() => {
    return normalizeGrade(gradeBand || 'grade_3');
  });
  
  // Canvas Zoom & Pan
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Mode 1: Learn State
  const [showAllLabels, setShowAllLabels] = useState<boolean>(true);
  const [tappedProvince, setTappedProvince] = useState<Province34GeoFeature | null>(null);

  // Mode 2: Discover & Hover State
  const [hoveredProvince, setHoveredProvince] = useState<Province34GeoFeature | null>(null);
  const [inspectProvince, setInspectProvince] = useState<Province34GeoFeature | null>(null);

  // Search 34 Provinces State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Mode 3: Drag & Drop State
  const [activeDraggableCard, setActiveDraggableCard] = useState<Province34GeoFeature | null>(null);
  const [selectedTapCard, setSelectedTapCard] = useState<Province34GeoFeature | null>(null);
  const [masteredProvinceIds, setMasteredProvinceIds] = useState<Set<string>>(new Set());
  const [wrongFlashId, setWrongFlashId] = useState<string | null>(null);
  const [hintProvinceId, setHintProvinceId] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameStars, setGameStars] = useState<number>(0);
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState<boolean>(false);
  const [gameFeedbackMessage, setGameFeedbackMessage] = useState<{ en: string; vi: string; type: 'success' | 'retry' | 'hint' } | null>(null);

  // Active Target Provinces based on Grade Differentiation
  const activeGradeProvinces = React.useMemo(() => {
    let filtered = VIETNAM_34_PROVINCES_GEO.filter(p => p.gradeBands.includes(selectedGrade));
    if (activeRegion !== 'All') {
      if (activeRegion === 'Cities') {
        const cityCodes = ['HN', 'HP', 'HUE', 'DN', 'HCM', 'CT'];
        const cityFiltered = filtered.filter(p => cityCodes.includes(p.code));
        if (cityFiltered.length > 0) filtered = cityFiltered;
      } else {
        const regionFiltered = filtered.filter(p => p.region === activeRegion);
        if (regionFiltered.length > 0) {
          filtered = regionFiltered;
        }
      }
    }
    return filtered;
  }, [selectedGrade, activeRegion]);

  // Remaining unplaced provinces for Mode 3
  const remainingCards = React.useMemo(() => {
    return activeGradeProvinces.filter(p => !masteredProvinceIds.has(p.id));
  }, [activeGradeProvinces, masteredProvinceIds]);

  // Handle Zoom
  const handleZoomIn = () => {
    soundEffects.playClick();
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    soundEffects.playClick();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetView = () => {
    soundEffects.playClick();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse Wheel Zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.75), 3));
  };

  // Drag to Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only pan if clicking canvas background, not on interactive polygons or buttons
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).tagName === 'rect') {
      setIsPanning(true);
      setStartPan({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPanOffset({
      x: e.clientX - startPan.x,
      y: e.clientY - startPan.y
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Audio Speech Pronunciation
  const handleSpeakProvince = (prov: Province34GeoFeature, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundEffects.playHover();
    playEnglishSpeech(prov.speechEn);
  };

  // Mode 3: Validate Drag & Drop / Tap placement
  const handleValidateDrop = (targetGeo: Province34GeoFeature, droppedCard: Province34GeoFeature) => {
    if (targetGeo.id === droppedCard.id) {
      // 1. Correct Answer!
      soundEffects.playCorrect();
      const updatedMastered = new Set(masteredProvinceIds);
      updatedMastered.add(targetGeo.id);
      setMasteredProvinceIds(updatedMastered);
      setSelectedTapCard(null);
      setActiveDraggableCard(null);
      setWrongFlashId(null);
      setHintProvinceId(null);

      const nextScore = gameScore + 10;
      const nextStars = gameStars + 2;
      setGameScore(nextScore);
      setGameStars(nextStars);

      // Cheerful narration
      playEnglishSpeech(`Excellent! You found ${droppedCard.nameEn}!`);
      setGameFeedbackMessage({
        en: `Awesome! You correctly placed ${droppedCard.nameEn}! ⭐`,
        vi: `Tuyệt vời! Bạn đã xác định chính xác ${droppedCard.nameVi}!`,
        type: 'success'
      });

      if (onEarnStars) onEarnStars(2);

      // Check if mission complete for this grade
      if (updatedMastered.size >= activeGradeProvinces.length) {
        soundEffects.playStarFanfare();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setIsVictoryModalOpen(true);
        if (onUpdateProgress) {
          onUpdateProgress('map_34_provinces', 100, nextStars + 10);
        }
      }
    } else {
      // 2. Incorrect Answer
      soundEffects.playWrong();
      setWrongFlashId(targetGeo.id);
      playEnglishSpeech(`Try again! Remember ${droppedCard.nameEn} is in ${droppedCard.zone}!`);
      setGameFeedbackMessage({
        en: `Not quite! Remember ${droppedCard.nameEn} is located in ${droppedCard.zone}!`,
        vi: `Chưa đúng rồi! Hãy nhớ ${droppedCard.nameVi} thuộc ${droppedCard.zone}!`,
        type: 'retry'
      });
      setTimeout(() => setWrongFlashId(null), 1500);
    }
  };

  // Mode 3: Show Hint
  const handleShowHint = () => {
    if (remainingCards.length === 0) return;
    const target = selectedTapCard || remainingCards[0];
    soundEffects.playClick();
    setHintProvinceId(target.id);
    playEnglishSpeech(`Hint: Look closely at ${target.zone} in ${target.region} Vietnam!`);
    setGameFeedbackMessage({
      en: `💡 Hint: ${target.nameEn} is located in ${target.zone}!`,
      vi: `💡 Gợi ý: ${target.nameVi} nằm ở ${target.zone}!`,
      type: 'hint'
    });
    setTimeout(() => setHintProvinceId(null), 4000);
  };

  // Mode 3: Show Answer (auto-places 1 card)
  const handleShowAnswer = () => {
    if (remainingCards.length === 0) return;
    const target = selectedTapCard || remainingCards[0];
    soundEffects.playClick();
    handleValidateDrop(target, target);
  };

  // Mode 3: Reset Game
  const handleResetGame = () => {
    soundEffects.playClick();
    setMasteredProvinceIds(new Set());
    setGameScore(0);
    setGameStars(0);
    setSelectedTapCard(null);
    setWrongFlashId(null);
    setHintProvinceId(null);
    setIsVictoryModalOpen(false);
    setGameFeedbackMessage(null);
  };

  return (
    <div 
      className={`relative bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] rounded-3xl overflow-hidden border-2 border-sky-300 shadow-xl flex flex-col ${
        isExpanded ? 'fixed inset-0 z-50 rounded-none' : 'min-h-[720px]'
      }`}
    >
      {/* 1. TOP HEADER & MODE CONTROLS */}
      <div className="bg-white/95 backdrop-blur-md border-b border-sky-200 px-4 py-3 shadow-xs flex flex-wrap items-center justify-between gap-3 relative z-30">
        
        {/* Left: Title & 34 Provinces Official Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shadow-md text-xl shrink-0">
            🗺️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-tight">
                34 Provinces Interactive Learning
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-wider shadow-xs">
                2025 Official
              </span>
            </div>
            <p className="text-xs font-bold text-sky-800">
              Bản đồ Địa lý Tương tác 34 Tỉnh/Thành phố Chuẩn Nghị Quyết Quốc Hội 2025
            </p>
          </div>
        </div>

        {/* Center: The 3 Main Educational Modes */}
        <div className="flex items-center bg-sky-100/80 p-1 rounded-2xl border border-sky-300 shadow-inner flex-wrap">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveMode('discover');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'discover'
                ? 'bg-rose-500 text-white shadow-sm scale-102'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>🔍</span>
            <span>Discover & Hover</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveMode('learn');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'learn'
                ? 'bg-rose-500 text-white shadow-sm scale-102'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>🗺️</span>
            <span>Learn the Map</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveMode('dragdrop');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'dragdrop'
                ? 'bg-amber-500 text-amber-950 shadow-sm scale-102 ring-2 ring-amber-300'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <span>🎯</span>
            <span>Drag & Drop Game</span>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[9px] uppercase font-black">
              Hot
            </span>
          </button>
        </div>

        {/* Right: Expand / Close Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Exit Fullscreen" : "Fullscreen Map"}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 transition-colors shadow-xs cursor-pointer"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {onClose && (
            <button
              onClick={() => {
                soundEffects.playClick();
                onClose();
              }}
              title="Close"
              className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors shadow-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* 2. SUB-BAR: REGION FILTER, GRADE SELECTION, SEARCH & MODE-SPECIFIC TOGGLES */}
      <div className="bg-white/90 backdrop-blur-md border-b border-sky-100 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2.5 text-xs relative z-20">
        
        {/* Region Filters (Including 6 Centrally Governed Cities) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-bold text-slate-500 hidden sm:inline">Vùng:</span>
          {[
            { id: 'All' as RegionFilter, label: 'Toàn quốc (34)' },
            { id: 'Cities' as RegionFilter, label: '🏛️ 6 TP Trực thuộc TW' },
            { id: 'North' as RegionFilter, label: '⛰️ Miền Bắc (14)' },
            { id: 'Central' as RegionFilter, label: '🏖️ Miền Trung (8)' },
            { id: 'South' as RegionFilter, label: '🌴 Miền Nam (6)' }
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveRegion(r.id);
              }}
              className={`px-2.5 py-1 rounded-full font-black text-[11px] transition-all cursor-pointer ${
                activeRegion === r.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Quick Search for any of the 34 Provinces */}
        <div className="relative">
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1 focus-within:ring-2 focus-within:ring-sky-400 focus-within:bg-white transition-all">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm tỉnh/thành (Search 34)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-36 sm:w-48 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute right-0 top-full mt-1.5 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-sky-200 p-2 z-50 max-h-72 overflow-y-auto">
              {(() => {
                const results = searchProvinces(searchQuery);
                if (results.length === 0) {
                  return (
                    <div className="text-center py-4 text-xs text-slate-500 font-medium">
                      Không tìm thấy tỉnh/thành phù hợp
                    </div>
                  );
                }
                return (
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-slate-400 px-2 py-1">
                      Kết quả ({results.length} tỉnh/thành)
                    </div>
                    {results.map((p) => {
                      const geo = VIETNAM_34_PROVINCES_GEO.find(g => g.code === p.code || g.id === p.id);
                      return (
                        <button
                          key={p.id}
                          onClick={() => {
                            soundEffects.playClick();
                            if (geo) {
                              setInspectProvince(geo);
                            } else {
                              setInspectProvince({
                                code: p.code,
                                id: p.id,
                                nameVi: p.nameVi,
                                nameEn: p.nameEn,
                                region: p.region,
                                zone: p.zone,
                                emoji: p.emoji,
                                image: p.image,
                                speechEn: p.notableGeographicalCharacteristics.en,
                                learningEn: p.distinctiveLocalFeatures.en,
                                landmarkEn: p.famousLandmarks[0]?.nameEn || p.capitalEn,
                                gradeBands: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5'],
                                hasLeaderLine: false,
                                labelAnchor: { x: 0, y: 0 },
                                centroid: { x: 0, y: 0 },
                                svgPath: ''
                              });
                            }
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="w-full text-left px-2.5 py-2 rounded-xl hover:bg-sky-50 flex items-center justify-between gap-2 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg shrink-0">{p.emoji}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-black text-slate-900 truncate group-hover:text-sky-700">
                                {p.nameVi} <span className="text-slate-400 font-normal">({p.nameEn})</span>
                              </div>
                              <div className="text-[10px] text-slate-500 truncate">
                                {p.type === 'city' ? '🏛️ TP trực thuộc TW' : `Tỉnh lỵ: ${p.capitalVi}`} • {p.zone}
                              </div>
                            </div>
                          </div>
                          <span className="shrink-0 px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            Khám phá
                          </span>
                        </button>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Grade Differentiation Selector */}
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-slate-500 hidden sm:inline">Khối lớp:</span>
          {[
            { key: 'grade_1' as GradeBand, label: 'G1 (5 Tỉnh)' },
            { key: 'grade_2' as GradeBand, label: 'G2 (8 Tỉnh)' },
            { key: 'grade_3' as GradeBand, label: 'G3 (Cơ bản)' },
            { key: 'grade_4' as GradeBand, label: 'G4 (Khu vực)' },
            { key: 'grade_5' as GradeBand, label: 'G5 (Toàn bộ 34)' }
          ].map((g) => (
            <button
              key={g.key}
              onClick={() => {
                soundEffects.playClick();
                setSelectedGrade(normalizeGrade(g.key));
                if (activeMode === 'dragdrop') handleResetGame();
              }}
              className={`px-2.5 py-1 rounded-xl font-bold text-[11px] transition-all cursor-pointer ${
                selectedGrade === g.key
                  ? 'bg-amber-400 text-amber-950 font-black shadow-xs ring-1 ring-amber-500'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Mode 1 & Mode 3 Specific Quick Controls */}
        <div className="flex items-center gap-2">
          {activeMode === 'learn' && (
            <button
              onClick={() => {
                soundEffects.playClick();
                setShowAllLabels(!showAllLabels);
              }}
              className="px-3 py-1 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-900 font-black text-xs flex items-center gap-1.5 border border-sky-300 cursor-pointer shadow-xs transition-colors"
            >
              {showAllLabels ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAllLabels ? 'Ẩn tên tỉnh (Hide Labels)' : 'Hiện 34 tên tỉnh (Show All)'}</span>
            </button>
          )}

          {activeMode === 'dragdrop' && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleShowHint}
                title="Gợi ý vị trí"
                className="px-2.5 py-1 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-xs flex items-center gap-1 border border-amber-300 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Gợi ý</span>
              </button>

              <button
                onClick={handleShowAnswer}
                title="Hiện đáp án 1 tỉnh"
                className="px-2.5 py-1 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs flex items-center gap-1 border border-sky-300 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Đáp án</span>
              </button>

              <button
                onClick={handleResetGame}
                title="Chơi lại từ đầu"
                className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 border border-slate-300 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Chơi lại</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* 3. MODE 3 INTERACTIVE DRAGGABLE DOCK (When Drag & Drop Mode is Active) */}
      {activeMode === 'dragdrop' && (
        <div className="bg-gradient-to-r from-amber-50 via-sky-50 to-pink-50 border-b-2 border-amber-300/60 p-3 relative z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Mission Instructions & Score with Captain Trang Guide */}
            <div className="flex items-center gap-3 shrink-0">
              <div 
                className="w-14 h-10 sm:w-16 sm:h-12 rounded-xl overflow-hidden border-2 border-pink-300 shadow-sm shrink-0 bg-white cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  soundEffects.playClick();
                  playEnglishSpeech("Drag or tap each province card, then place it on the Vietnam map!");
                }}
                title="Captain Trang Guide: Tap to hear instructions!"
              >
                <img
                  src="/assets/cute/captain_trang_official.png"
                  alt="Captain Trang"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-black font-heading text-slate-900 flex items-center gap-1.5">
                  <span>🎯 Kéo thả hoặc Chạm chọn tỉnh thành:</span>
                  <span className="text-rose-600">Drag or Tap to Place</span>
                </div>
                <p className="text-[11px] text-slate-600 font-bold">
                  Khối {selectedGrade.replace('grade_', '')}: Đã xếp đúng {masteredProvinceIds.size} / {activeGradeProvinces.length} đơn vị
                </p>
              </div>

              {/* Stars badge */}
              <div className="px-3 py-1 rounded-full bg-amber-200/90 border border-amber-400 text-amber-950 font-black text-xs flex items-center gap-1 shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600 animate-spin-slow" />
                <span>+{gameStars} Stars</span>
              </div>
            </div>

            {/* Draggable Cards Shelf */}
            <div className="flex-1 overflow-x-auto py-1 max-w-full flex items-center gap-2 scrollbar-thin">
              {remainingCards.length > 0 ? (
                remainingCards.map((card) => {
                  const isSelected = selectedTapCard?.id === card.id;

                  return (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => {
                        soundEffects.playHover();
                        setActiveDraggableCard(card);
                        e.dataTransfer.setData('text/plain', card.id);
                      }}
                      onClick={() => {
                        soundEffects.playClick();
                        // Tap-to-select for mobile & touchscreens
                        if (selectedTapCard?.id === card.id) {
                          setSelectedTapCard(null);
                        } else {
                          setSelectedTapCard(card);
                          playEnglishSpeech(card.nameEn);
                        }
                      }}
                      className={`px-3 py-2 rounded-2xl bg-white border-2 transition-all cursor-grab active:cursor-grabbing select-none shrink-0 shadow-sm flex items-center gap-2 hover:scale-105 ${
                        isSelected 
                          ? 'border-amber-500 ring-3 ring-amber-300 shadow-md bg-amber-50' 
                          : 'border-sky-300 hover:border-sky-500'
                      }`}
                    >
                      <span className="text-lg">{card.emoji}</span>
                      <div className="text-left">
                        <div className="text-xs font-black text-slate-900 leading-tight">
                          {card.nameEn}
                        </div>
                        <div className="text-[10px] text-sky-800 font-bold leading-none">
                          {card.nameVi}
                        </div>
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-xs font-black text-emerald-700 bg-emerald-100 px-4 py-2 rounded-2xl border border-emerald-300 flex items-center gap-2">
                  <span>🎉 Mission Complete! You have mastered all provinces!</span>
                </div>
              )}
            </div>

          </div>

          {/* Cheerful Feedback Pill */}
          {gameFeedbackMessage && (
            <div className={`mt-2 py-1.5 px-4 rounded-xl text-xs font-black text-center flex items-center justify-center gap-2 animate-fade-in ${
              gameFeedbackMessage.type === 'success' 
                ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' 
                : gameFeedbackMessage.type === 'hint'
                ? 'bg-amber-100 text-amber-950 border border-amber-300'
                : 'bg-rose-100 text-rose-950 border border-rose-300'
            }`}>
              <span>{gameFeedbackMessage.en}</span>
              <span className="opacity-75">({gameFeedbackMessage.vi})</span>
            </div>
          )}
        </div>
      )}

      {/* 4. MAIN MAP CANVAS AREA */}
      <div 
        ref={mapContainerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="flex-1 relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none p-4"
      >
        {/* Floating Zoom & Canvas Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-md">
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetView}
            className="p-2 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            title="Reset 100%"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Mode 2: Live Hover/Inspect Float Card (Top-Left) */}
        {activeMode === 'discover' && (hoveredProvince || inspectProvince) && (
          <div className="absolute top-4 left-4 z-30 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-2 border-sky-300 animate-fade-in pointer-events-auto">
            {(() => {
              const p = hoveredProvince || inspectProvince!;
              return (
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{p.emoji}</span>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 leading-tight">
                          {p.nameEn}
                        </h4>
                        <div className="text-xs font-bold text-sky-800">
                          {p.nameVi}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleSpeakProvince(p, e)}
                      title="Listen English"
                      className="p-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 transition-colors cursor-pointer shrink-0"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.learningEn}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span>{p.zone}</span>
                    <button
                      onClick={() => setInspectProvince(p)}
                      className="text-rose-600 font-black hover:underline cursor-pointer"
                    >
                      Xem chi tiết ➔
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* HIGH-PRECISION 920 × 1120 CARTOGRAPHIC SVG CANVAS */}
        <div
          className="w-full h-full max-w-[660px] aspect-[8.2/10] transition-transform duration-150 ease-out flex items-center justify-center"
          style={{
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}
        >
          <svg
            viewBox="0 0 920 1120"
            className="w-full h-full drop-shadow-2xl select-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="oceanBg34Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>

              <filter id="landGlow34" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Ocean Background Frame */}
            <rect x="0" y="0" width="920" height="1120" rx="36" fill="url(#oceanBg34Grad)" stroke="#93c5fd" strokeWidth="1.5" />

            {/* WGS84 Coordinate Grid */}
            <g id="wgs84-grid-34" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.45">
              <line x1="40" y1="139" x2="880" y2="139" />
              <line x1="40" y1="263" x2="880" y2="263" />
              <line x1="40" y1="387" x2="880" y2="387" />
              <line x1="40" y1="510" x2="880" y2="510" />
              <line x1="40" y1="634" x2="880" y2="634" />
              <line x1="40" y1="758" x2="880" y2="758" />
              <line x1="40" y1="882" x2="880" y2="882" />
              <line x1="40" y1="1006" x2="880" y2="1006" />

              <line x1="146" y1="40" x2="146" y2="1080" />
              <line x1="255" y1="40" x2="255" y2="1080" />
              <line x1="364" y1="40" x2="364" y2="1080" />
              <line x1="473" y1="40" x2="473" y2="1080" />
              <line x1="582" y1="40" x2="582" y2="1080" />
              <line x1="691" y1="40" x2="691" y2="1080" />
              <line x1="801" y1="40" x2="801" y2="1080" />
            </g>

            {/* Ocean Typography */}
            <text x="640" y="320" fill="#0284c7" fontSize="24" fontWeight="900" letterSpacing="6" opacity="0.75" className="font-heading">
              BIỂN ĐÔNG
            </text>
            <text x="640" y="350" fill="#0369a1" fontSize="13" fontWeight="bold" letterSpacing="3" opacity="0.6">
              (VIETNAMESE EAST SEA)
            </text>
            <text x="360" y="240" fill="#0284c7" fontSize="13" fontWeight="bold" letterSpacing="2" opacity="0.55">
              VỊNH BẮC BỘ (GULF OF TONKIN)
            </text>
            <text x="90" y="1030" fill="#0284c7" fontSize="12" fontWeight="bold" letterSpacing="1.5" opacity="0.5">
              VỊNH THÁI LAN
            </text>

            {/* 34 PROVINCES DISSOLVED VECTOR POLYGONS */}
            <g id="vietnam-34-polygons" filter="url(#landGlow34)">
              {VIETNAM_34_PROVINCES_GEO.map((geo) => {
                const isMatchRegion = activeRegion === 'All' || 
                  (activeRegion === 'Cities' ? ['HN', 'HP', 'HUE', 'DN', 'HCM', 'CT'].includes(geo.code) : geo.region === activeRegion);
                const isHovered = hoveredProvince?.id === geo.id;
                const isInspected = inspectProvince?.id === geo.id;
                const isMastered = masteredProvinceIds.has(geo.id);
                const isWrong = wrongFlashId === geo.id;
                const isHint = hintProvinceId === geo.id;

                // Base Harmonic Colors by Region
                let fill = '#10b981';
                if (geo.region === 'North') fill = '#10b981';
                else if (geo.region === 'Central') fill = '#0ea5e9';
                else if (geo.region === 'South') fill = '#f59e0b';

                if (!isMatchRegion) {
                  fill = '#cbd5e1';
                }

                // Dynamic mode highlights
                if (isWrong) {
                  fill = '#ef4444'; // Red flash on wrong drop
                } else if (isHint) {
                  fill = '#eab308'; // Amber flash on hint
                } else if (isMastered) {
                  fill = '#059669'; // Emerald green when mastered
                } else if (isHovered || isInspected) {
                  fill = '#f43f5e'; // Vibrant rose highlight on hover
                }

                return (
                  <path
                    key={geo.id}
                    id={geo.id}
                    d={geo.svgPath}
                    fill={fill}
                    fillOpacity={!isMatchRegion ? 0.35 : isHovered ? 0.95 : isMastered ? 0.9 : 0.85}
                    stroke={isHovered ? '#ffffff' : isMastered ? '#ffffff' : isWrong ? '#ffffff' : '#064e3b'}
                    strokeWidth={isHovered ? 2.5 : isMastered ? 2 : 1}
                    strokeLinejoin="round"
                    className="transition-colors duration-150 cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredProvince(geo);
                      soundEffects.playHover();
                    }}
                    onMouseLeave={() => setHoveredProvince(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeMode === 'dragdrop') {
                        // If card is selected on touch/tap, validate drop!
                        if (selectedTapCard) {
                          handleValidateDrop(geo, selectedTapCard);
                        } else {
                          // Announce province name
                          handleSpeakProvince(geo);
                        }
                      } else {
                        // Mode 1 or 2: Click to inspect & hear speech
                        soundEffects.playClick();
                        setInspectProvince(geo);
                        handleSpeakProvince(geo);
                      }
                    }}
                    // HTML5 Drag and Drop Handlers
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'copy';
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (activeDraggableCard) {
                        handleValidateDrop(geo, activeDraggableCard);
                      }
                    }}
                  >
                    <title>{geo.nameEn} ({geo.nameVi}) - {geo.zone}</title>
                  </path>
                );
              })}
            </g>

            {/* PARACEL ISLANDS (Hoàng Sa - Thuộc TP. Đà Nẵng) */}
            <g id="hoang-sa-box" className="cursor-pointer" onClick={() => playEnglishSpeech('Paracel Islands, Vietnam! Under the sovereign administration of Da Nang City.')}>
              <rect x="388" y="744" width="126" height="64" rx="10" fill="#fef3c7" fillOpacity="0.95" stroke="#d97706" strokeWidth="1.2" />
              <text x="451" y="763" fill="#b45309" fontSize="10.5" fontWeight="900" textAnchor="middle">
                VN QĐ. HOÀNG SA
              </text>
              <text x="451" y="777" fill="#92400e" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                (Thuộc TP. Đà Nẵng)
              </text>
              <text x="451" y="792" fill="#78350f" fontSize="7.5" textAnchor="middle">
                Paracel Islands • 16°-17°B
              </text>
            </g>

            {/* SPRATLY ISLANDS (Trường Sa - Thuộc Tỉnh Khánh Hòa) */}
            <g id="truong-sa-box" className="cursor-pointer" onClick={() => playEnglishSpeech('Spratly Islands, Vietnam! Under the sovereign administration of Khanh Hoa Province.')}>
              <rect x="375" y="964" width="146" height="68" rx="10" fill="#fef3c7" fillOpacity="0.95" stroke="#d97706" strokeWidth="1.2" />
              <text x="448" y="984" fill="#b45309" fontSize="10.5" fontWeight="900" textAnchor="middle">
                VN QĐ. TRƯỜNG SA
              </text>
              <text x="448" y="999" fill="#92400e" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                (Thuộc Tỉnh Khánh Hòa)
              </text>
              <text x="448" y="1014" fill="#78350f" fontSize="7.5" textAnchor="middle">
                Spratly Islands • 8°-12°B
              </text>
            </g>

            {/* COLLISION-AWARE LABELS & LEADER LINES (MODE 1 OR MASTERED IN MODE 3) */}
            <g id="province-labels-and-pins">
              {VIETNAM_34_PROVINCES_GEO.map((geo) => {
                const isMastered = masteredProvinceIds.has(geo.id);
                const shouldShowLabel = (activeMode === 'learn' && showAllLabels) || 
                                       (activeMode === 'discover') || 
                                       (activeMode === 'dragdrop' && isMastered);

                if (!shouldShowLabel) return null;

                const { centroid, labelAnchor, hasLeaderLine } = geo;

                return (
                  <g key={`label-${geo.id}`} className="pointer-events-none transition-opacity duration-300">
                    {/* Leader Line if needed */}
                    {hasLeaderLine && (
                      <line
                        x1={centroid.x}
                        y1={centroid.y}
                        x2={labelAnchor.x}
                        y2={labelAnchor.y}
                        stroke="#0f172a"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                        opacity="0.8"
                      />
                    )}

                    {/* Small anchor pin dot at centroid */}
                    <circle
                      cx={centroid.x}
                      cy={centroid.y}
                      r="2.5"
                      fill="#f43f5e"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />

                    {/* Label Pill */}
                    <g transform={`translate(${labelAnchor.x}, ${labelAnchor.y})`}>
                      <rect
                        x="-48"
                        y="-12"
                        width="96"
                        height="24"
                        rx="12"
                        fill="#ffffff"
                        fillOpacity="0.95"
                        stroke="#0284c7"
                        strokeWidth="1.2"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                      />
                      <text
                        x="0"
                        y="3"
                        fill="#0f172a"
                        fontSize="9.5"
                        fontWeight="900"
                        textAnchor="middle"
                        className="font-heading"
                      >
                        {geo.nameEn.replace(' Capital', '').replace(' Province', '').replace(' City', '')}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>

          </svg>
        </div>

      </div>

      {/* 5. EDUCATIONAL PROVINCE DETAIL STUDIO (5 TABS: HERITAGE, VOCABULARY & IPA, SENTENCE PATTERNS, 4 SKILLS LISTENING & SPEAKING, CIRCULAR 27 QUIZ) */}
      {inspectProvince && (
        <ProvinceDetailModal
          provinceCode={inspectProvince.code}
          provinceId={inspectProvince.id}
          isOpen={!!inspectProvince}
          onClose={() => setInspectProvince(null)}
          onEarnStars={onEarnStars}
          onUpdateProgress={onUpdateProgress}
        />
      )}

      {/* 6. VICTORY CELEBRATION MODAL (MODE 3 MISSION COMPLETE) */}
      {isVictoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border-4 border-amber-400 animate-scale-up">
            <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center text-4xl shadow-inner animate-bounce">
              🏆
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black font-heading text-slate-900">
                Mission Complete!
              </h3>
              <p className="text-xs font-bold text-sky-800">
                Xuất sắc! Con đã làm chủ bản đồ địa lý Việt Nam 34 tỉnh/thành 2025!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-200 space-y-2">
              <div className="text-sm font-black text-amber-950">
                Total Score: {gameScore} / {activeGradeProvinces.length * 10}
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-sm shadow-md">
                <span>⭐ +{gameStars + 10} Stars Earned!</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleResetGame}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
              >
                Play Again (Chơi lại)
              </button>
              <button
                onClick={() => {
                  setIsVictoryModalOpen(false);
                  setActiveMode('discover');
                }}
                className="px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs shadow-md transition-colors cursor-pointer"
              >
                Continue Adventure ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
