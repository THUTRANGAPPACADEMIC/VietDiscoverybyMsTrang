import React, { useState, useEffect } from 'react';
import { FLOATING_ISLANDS, FloatingIslandDef, IslandId } from './floatingIslandData';
import { IslandCard3D } from './IslandCard3D';
import { IslandActivityModal } from './IslandActivityModal';
import { Island3DVisual } from './Island3DVisual';
import { UserProfile, GradeBand } from '../../../types';
import { soundEffects } from '../../../lib/soundEffects';
import { 
  Sparkles, 
  Star, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  ArrowLeft,
  GraduationCap,
  Compass
} from 'lucide-react';

interface FloatingIslandWorldProps {
  user: UserProfile | null;
  activeGradeBand?: GradeBand;
  totalStars?: number;
  onEarnStars?: (stars: number) => void;
  onBackToOverview?: () => void;
}

export const FloatingIslandWorld: React.FC<FloatingIslandWorldProps> = ({
  user,
  activeGradeBand = 'grade_3',
  totalStars = 0,
  onEarnStars,
  onBackToOverview
}) => {
  // Convert gradeBand to gradeNum (1 to 5)
  const initialGradeNum = (): 1 | 2 | 3 | 4 | 5 => {
    if (activeGradeBand === 'grade_1') return 1;
    if (activeGradeBand === 'grade_2') return 2;
    if (activeGradeBand === 'grade_4') return 4;
    if (activeGradeBand === 'grade_5') return 5;
    return 3;
  };

  const [selectedGrade, setSelectedGrade] = useState<1 | 2 | 3 | 4 | 5>(initialGradeNum());

  // Synchronize grade whenever parent activeGradeBand changes
  useEffect(() => {
    setSelectedGrade(initialGradeNum());
  }, [activeGradeBand]);

  const [selectedIslandId, setSelectedIslandId] = useState<IslandId>('wonder');
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [activeIslandForModal, setActiveIslandForModal] = useState<FloatingIslandDef>(FLOATING_ISLANDS[0]);
  const [soundEnabled, setSoundEnabled] = useState(() => soundEffects.isSoundEnabled());

  const selectedIsland = FLOATING_ISLANDS.find(i => i.id === selectedIslandId) || FLOATING_ISLANDS[0];
  const currentGradeContent = selectedIsland.gradeData[selectedGrade] || selectedIsland.gradeData[1];

  const handleSelectGrade = (grade: 1 | 2 | 3 | 4 | 5) => {
    soundEffects.playClick();
    setSelectedGrade(grade);
  };

  const handleSelectIsland = (island: FloatingIslandDef) => {
    setSelectedIslandId(island.id);
  };

  const handleOpenIslandActivity = (island: FloatingIslandDef) => {
    soundEffects.playClick();
    setActiveIslandForModal(island);
    setIsActivityModalOpen(true);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEffects.setSoundEnabled(next);
  };

  // Grade cards matching reference image
  const GRADE_CARDS: {
    grade: 1 | 2 | 3 | 4 | 5;
    label: string;
    sub: string;
    badgeIcon: string;
    textColor: string;
    subColor: string;
    borderColor: string;
    activeRing: string;
    activeShadow: string;
    bgGradient: string;
  }[] = [
    { 
      grade: 1, 
      label: 'Lớp 1', 
      sub: 'Little Explorer', 
      badgeIcon: '🪽',
      textColor: 'text-pink-600',
      subColor: 'text-purple-600',
      borderColor: 'border-[#ffb6e9]',
      activeRing: 'ring-pink-300',
      activeShadow: 'shadow-[0_8px_25px_rgba(244,114,182,0.45)]',
      bgGradient: 'from-white/95 via-[#fff5fb]/95 to-[#ffe4f2]/95'
    },
    { 
      grade: 2, 
      label: 'Lớp 2', 
      sub: 'Magical Backpack', 
      badgeIcon: '🎒',
      textColor: 'text-amber-600',
      subColor: 'text-amber-800',
      borderColor: 'border-[#fed7aa]',
      activeRing: 'ring-amber-300',
      activeShadow: 'shadow-[0_8px_25px_rgba(251,146,60,0.45)]',
      bgGradient: 'from-white/95 via-[#fff7ed]/95 to-[#ffedd5]/95'
    },
    { 
      grade: 3, 
      label: 'Lớp 3', 
      sub: 'Golden Adventure', 
      badgeIcon: '⭐',
      textColor: 'text-yellow-600',
      subColor: 'text-yellow-800',
      borderColor: 'border-[#fef08a]',
      activeRing: 'ring-yellow-300',
      activeShadow: 'shadow-[0_8px_25px_rgba(250,204,21,0.5)]',
      bgGradient: 'from-white/95 via-[#fefce8]/95 to-[#fef08a]/80'
    },
    { 
      grade: 4, 
      label: 'Lớp 4', 
      sub: 'Discovery Rocket', 
      badgeIcon: '🚀',
      textColor: 'text-cyan-600',
      subColor: 'text-sky-800',
      borderColor: 'border-[#a5f3fc]',
      activeRing: 'ring-cyan-300',
      activeShadow: 'shadow-[0_8px_25px_rgba(34,211,238,0.45)]',
      bgGradient: 'from-white/95 via-[#ecfeff]/95 to-[#cffafe]/95'
    },
    { 
      grade: 5, 
      label: 'Lớp 5', 
      sub: 'English Champion', 
      badgeIcon: '🏆',
      textColor: 'text-blue-600',
      subColor: 'text-indigo-800',
      borderColor: 'border-[#bfdbfe]',
      activeRing: 'ring-blue-300',
      activeShadow: 'shadow-[0_8px_25px_rgba(96,165,250,0.45)]',
      bgGradient: 'from-white/95 via-[#eff6ff]/95 to-[#dbeafe]/95'
    }
  ];

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(101,200,255,0.35)] border-4 border-sky-200/90 select-none">
      
      {/* ============================================================== */}
      {/* LAYER 1: BRIGHT MAGICAL SKY BACKGROUND (EXACT PALETTE & ART)    */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background: `
            linear-gradient(180deg, 
              #65C8FF 0%, 
              #C6EDFF 32%, 
              #E5D5FF 60%, 
              #FFD9EE 80%, 
              #FFE5D1 92%, 
              #FFF2B5 100%
            )
          `
        }}
      >
        {/* Soft Rainbow Arch across top-left */}
        <div 
          className="absolute -top-12 -left-12 w-96 h-96 rounded-full opacity-60 blur-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(254,205,211,0.7) 0%, rgba(253,230,138,0.6) 30%, rgba(167,243,208,0.5) 55%, rgba(186,230,253,0.4) 75%, transparent 100%)'
          }}
        />

        {/* Floating Pastel Clouds, Stars & Sparkles */}
        <div className="absolute top-6 left-1/4 text-2xl opacity-80 animate-bounce pointer-events-none">⭐</div>
        <div className="absolute top-10 right-1/4 text-xl opacity-75 animate-pulse pointer-events-none">✨</div>
        <div className="absolute top-16 left-10 text-2xl opacity-70 pointer-events-none">☁️</div>
        <div className="absolute top-20 right-16 text-3xl opacity-80 pointer-events-none">🎈</div>
        <div className="absolute top-24 left-1/3 text-lg opacity-70 pointer-events-none">✨</div>
        <div className="absolute top-32 right-1/3 text-2xl opacity-80 pointer-events-none">⭐</div>

        {/* Lower Fluffy Cloud Sea (Soft White / Lavender / Baby Pink) */}
        <div 
          className="absolute inset-x-0 bottom-0 h-48 opacity-75 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,217,238,0.7) 45%, rgba(229,213,255,0.4) 75%, transparent 100%)'
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* LAYER 2: INTERACTIVE CONTENT LAYER                             */}
      {/* ============================================================== */}
      <div className="relative z-10 p-4 sm:p-7 space-y-6 sm:space-y-8">
        
        {/* 1. TOP HEADER: 3D GOLDEN TITLE & FLOATING CORNER BADGES */}
        <div className="relative flex flex-col items-center justify-center text-center pt-2">
          
          {/* Top Left Compass Badge */}
          <div className="absolute top-0 left-0 hidden sm:flex items-center gap-1.5 p-2 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-amber-300 shadow-md transform hover:rotate-12 transition-transform cursor-pointer" title="Compass 🧭">
            <span className="text-2xl">🧭</span>
          </div>

          {/* Top Right Backpack Badge */}
          <div className="absolute top-0 right-0 hidden sm:flex items-center gap-1.5 p-2 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-amber-300 shadow-md transform hover:-rotate-12 transition-transform cursor-pointer" title="Explorer Backpack 🎒">
            <span className="text-2xl">🎒</span>
          </div>

          {/* Controls Bar on Top Right (Stars & Sound & Back) */}
          <div className="w-full flex items-center justify-between sm:justify-end gap-2.5 mb-2">
            
            {/* Star Counter */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border-2 border-amber-300 text-amber-900 shadow-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-spin" />
              <span className="text-xs font-black font-heading">{totalStars} Sao</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-full border-2 transition-all cursor-pointer shadow-md ${
                soundEnabled 
                  ? 'bg-white/95 border-sky-300 text-sky-700 hover:bg-sky-50' 
                  : 'bg-slate-100 border-slate-300 text-slate-400'
              }`}
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Back Button */}
            {onBackToOverview && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onBackToOverview();
                }}
                className="px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-white border-2 border-pink-200 text-pink-700 font-bold text-xs flex items-center gap-1 shadow-md transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quay Lại</span>
              </button>
            )}
          </div>

          {/* 3D Golden Title: THẾ GIỚI ĐẢO NỔI 3D (From Sliced Asset & 3D Typography) */}
          <div className="relative group cursor-pointer" onClick={() => soundEffects.playHover()}>
            <img
              src="/assets/islands/the_gioi_dao_noi_3d_title.webp"
              alt="THẾ GIỚI ĐẢO NỔI 3D"
              className="h-16 sm:h-22 md:h-26 w-auto object-contain drop-shadow-[0_8px_20px_rgba(234,88,12,0.35)] select-none block mx-auto group-hover:scale-105 transition-transform duration-300"
            />
            {/* Accessible fallback heading */}
            <h1 className="sr-only">THẾ GIỚI ĐẢO NỔI 3D</h1>
          </div>

          {/* Bilingual Subtitle Badge */}
          <div className="mt-1 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 text-sky-900 text-xs sm:text-sm font-bold shadow-xs">
            <span>✨</span>
            <span>Khám phá 5 hòn đảo kỳ thú trên bầu trời diệu kỳ Việt Nam</span>
            <span>🌈</span>
          </div>
        </div>

        {/* 2. FIVE GRADE SELECTION CARDS (EXACT MATCH TO REFERENCE IMAGE) */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3.5">
            {GRADE_CARDS.map(card => {
              const isActive = selectedGrade === card.grade;
              return (
                <button
                  key={card.grade}
                  onClick={() => handleSelectGrade(card.grade)}
                  className={`relative p-3 sm:p-4 rounded-3xl border-2 transition-all duration-300 text-center flex flex-col items-center justify-between cursor-pointer active:scale-95 shadow-md ${
                    card.borderColor
                  } ${
                    isActive
                      ? `bg-gradient-to-b ${card.bgGradient} ring-4 ${card.activeRing} ${card.activeShadow} scale-103 sm:scale-105 z-10`
                      : 'bg-white/85 hover:bg-white/95 hover:scale-102 opacity-90'
                  }`}
                >
                  {/* Top-Right Winged / Star Badge */}
                  <span className="absolute -top-2.5 -right-2 text-xl drop-shadow-sm animate-bounce-subtle">
                    {card.badgeIcon}
                  </span>

                  {/* Grade Title */}
                  <div className={`text-base sm:text-xl font-black font-heading tracking-tight ${card.textColor}`}>
                    {card.label}
                  </div>

                  {/* Subtitle */}
                  <div className={`text-[11px] sm:text-xs font-bold leading-tight mt-0.5 ${card.subColor}`}>
                    {card.sub}
                  </div>

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <div className="mt-1.5 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-[10px] font-black text-amber-700">Đang chọn</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. FIVE 3D FLOATING ISLANDS ROW (EXACT MATCH TO REFERENCE IMAGE) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-extrabold text-sky-950 px-1">
            <span className="flex items-center gap-1.5">
              <span>🏝️</span>
              <span>5 HÒN ĐẢO NỔI 3D (CHẠM VÀO ĐỂ KHÁM PHÁ):</span>
            </span>
            <span className="text-pink-600 font-bold hidden sm:inline">Phát âm • Từ vựng • Phòng Lab • Đấu trường</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {FLOATING_ISLANDS.map((island) => (
              <IslandCard3D
                key={island.id}
                island={island}
                selectedGrade={selectedGrade}
                isSelected={selectedIslandId === island.id}
                onSelect={() => handleSelectIsland(island)}
                onEnterActivity={() => handleOpenIslandActivity(island)}
              />
            ))}
          </div>
        </div>

        {/* 4. SELECTED ISLAND DETAILS BANNER (BRIGHT PASTEL GLASS) */}
        <div 
          className="relative overflow-hidden rounded-[32px] p-5 sm:p-7 backdrop-blur-xl border-3 border-sky-300/80 shadow-[0_16px_40px_rgba(101,200,255,0.25)] flex flex-col md:flex-row items-center justify-between gap-5 bg-white/92"
        >
          {/* Left: Island Visual & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="shrink-0 p-2 rounded-2xl bg-sky-50 border border-sky-200 shadow-sm">
              <Island3DVisual
                islandId={selectedIsland.id}
                size={130}
                isSelected={true}
              />
            </div>
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedIsland.crystalHex }} />
                <span>{selectedIsland.nameVi}</span>
                <span>•</span>
                <span className="text-amber-600">{selectedIsland.landmarkFeature}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                {selectedIsland.nameVi} • {selectedIsland.nameEn}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium">
                {selectedIsland.taglineVi}
              </p>

              <div className="pt-1 flex items-center gap-2 text-xs text-slate-700 font-bold">
                <span className="text-amber-600">🎯 Nhiệm vụ {currentGradeContent.gradeBadge}:</span>
                <span>{currentGradeContent.missionTitleVi}</span>
              </div>
            </div>
          </div>

          {/* Right: Big 3D Start Quest Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => handleOpenIslandActivity(selectedIsland)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer bg-gradient-to-b from-[#4ade80] via-[#22c55e] to-[#16a34a] hover:from-[#22c55e] hover:to-[#15803d] border-b-4 border-[#15803d]"
            >
              <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
              <span>BẮT ĐẦU THÁM HIỂM (+{currentGradeContent.starsReward} SAO)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 5. ACTIVITY RUNNER MODAL                                        */}
      {/* ============================================================== */}
      <IslandActivityModal
        island={activeIslandForModal}
        selectedGrade={selectedGrade}
        isOpen={isActivityModalOpen}
        onClose={() => setIsActivityModalOpen(false)}
        onEarnStars={onEarnStars}
      />

    </div>
  );
};
