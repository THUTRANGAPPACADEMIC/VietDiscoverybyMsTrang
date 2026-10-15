import React, { useState } from 'react';
import { FLOATING_ISLANDS, FloatingIslandDef, IslandId } from './floatingIslandData';
import { IslandCard3D } from './IslandCard3D';
import { IslandActivityModal } from './IslandActivityModal';
import { Island3DVisual } from './Island3DVisual';
import { UserProfile, GradeBand } from '../../../types';
import { soundEffects } from '../../../lib/soundEffects';
import { 
  Sparkles, 
  Star, 
  Compass, 
  Trophy, 
  Volume2, 
  VolumeX, 
  HelpCircle, 
  ChevronRight, 
  Flame, 
  MapPin, 
  ArrowLeft,
  GraduationCap
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

  const GRADE_OPTIONS: { grade: 1 | 2 | 3 | 4 | 5; label: string; sub: string; badge: string; color: string }[] = [
    { grade: 1, label: 'Lớp 1', sub: 'Little Explorer', badge: 'Pre-A1 Starter', color: 'from-sky-400 to-blue-500' },
    { grade: 2, label: 'Lớp 2', sub: 'Magical Backpack', badge: 'Pre-A1 Beginner', color: 'from-purple-400 to-indigo-500' },
    { grade: 3, label: 'Lớp 3', sub: 'Golden Adventure', badge: 'Pre-A1 Foundation', color: 'from-amber-400 to-orange-500' },
    { grade: 4, label: 'Lớp 4', sub: 'Discovery Rocket', badge: 'Pre-A1 to A1', color: 'from-teal-400 to-emerald-500' },
    { grade: 5, label: 'Lớp 5', sub: 'English Champion', badge: 'A1/A2 Extension', color: 'from-rose-400 to-pink-500' }
  ];

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] border-3 border-cyan-400/50">
      
      {/* ============================================================== */}
      {/* LAYER 1: MAGICAL SKY & VIBRANT TURQUOISE OCEAN BACKGROUND       */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Magical Purple-Blue Twilight Sky with Nebulae */}
        <div 
          className="absolute inset-x-0 top-0 h-[65%] z-0"
          style={{
            background: 'linear-gradient(180deg, #12032e 0%, #1c0b47 30%, #1e1b64 60%, #164e63 100%)'
          }}
        >
          {/* Glowing Purple/Cyan Nebulae */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-indigo-500/20 rounded-full blur-3xl" />

          {/* Twinkling Fantasy Stars */}
          <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-yellow-200 animate-star-shimmer shadow-[0_0_8px_#fef08a]" />
          <div className="absolute top-24 left-1/3 w-3 h-3 rounded-full bg-white animate-star-shimmer shadow-[0_0_12px_#ffffff]" />
          <div className="absolute top-16 right-20 w-2.5 h-2.5 rounded-full bg-cyan-200 animate-star-shimmer shadow-[0_0_10px_#67e8f9]" />
          <div className="absolute top-36 right-1/3 w-2 h-2 rounded-full bg-purple-200 animate-star-shimmer shadow-[0_0_8px_#d8b4fe]" />
          <div className="absolute top-12 left-2/3 w-3 h-3 rounded-full bg-amber-200 animate-star-shimmer shadow-[0_0_10px_#fde047]" />
        </div>

        {/* Vibrant Turquoise Tropical Ocean (Bottom 40%) */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[42%] z-0 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0891b2 0%, #06b6d4 35%, #0284c7 70%, #0369a1 100%)'
          }}
        >
          {/* Animated Wave Strips */}
          <div className="absolute top-0 inset-x-0 h-8 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-cyan-200 to-transparent" />
          
          <svg className="absolute -top-4 inset-x-0 w-[200%] h-12 text-white/20 animate-ocean-waves" viewBox="0 0 1200 40" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,20 C150,35 350,5 500,20 C650,35 850,5 1000,20 C1150,35 1350,5 1500,20 L1500,40 L0,40 Z" />
          </svg>

          <svg className="absolute top-3 inset-x-0 w-[200%] h-12 text-cyan-200/25 animate-ocean-waves" style={{ animationDuration: '14s' }} viewBox="0 0 1200 40" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,15 C200,5 400,30 600,15 C800,5 1000,30 1200,15 L1200,40 L0,40 Z" />
          </svg>

          {/* Tropical Island Water Reflections */}
          <div className="absolute top-8 inset-x-0 h-16 bg-gradient-to-b from-cyan-400/30 to-transparent blur-md" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* LAYER 2: INTERACTIVE CONTENT LAYER                             */}
      {/* ============================================================== */}
      <div className="relative z-10 p-5 sm:p-8 space-y-8">
        
        {/* TOP BAR: BRANDING, TITLE & CONTROLS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-4 border-b border-white/15 backdrop-blur-md bg-slate-950/40 p-4 sm:p-6 rounded-[32px]">
          
          {/* Left: 3D Grand Title */}
          <div className="text-center lg:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>PREMIUM 3D ADVENTURE ARCHIPELAGO</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading text-3d-fantasy">
              THẾ GIỚI ĐẢO NỔI 3D
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-200/90 max-w-xl">
              Năm hòn đảo kỳ thú bay lượn giữa bầu trời sao và đại dương xanh biếc • Khám phá danh lam thắng cảnh Việt Nam & nâng cao tiếng Anh chuẩn Thông tư 27!
            </p>
          </div>

          {/* Right: Controls (Stars Counter, Sound & Overview Back) */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Star Counter */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/20 border border-amber-400/50 text-amber-300 backdrop-blur-md shadow-lg shadow-amber-500/10">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 animate-spin-slow" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-amber-200/80 block leading-none">Kho Sao Thám Hiểm</span>
                <span className="text-base sm:text-lg font-black text-amber-300 font-heading leading-tight">{totalStars} Sao</span>
              </div>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                soundEnabled 
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30' 
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
              }`}
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Back Button if callback provided */}
            {onBackToOverview && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onBackToOverview();
                }}
                className="px-4 py-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay Lại</span>
              </button>
            )}
          </div>
        </div>

        {/* GRADE DIFFERENTIATION SELECTION BAR */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 px-2">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              CHỌN KHỐI LỚP THÁM HIỂM (GRADE-DIFFERENTIATED CURRICULUM):
            </span>
            <span className="text-amber-400 hidden sm:inline">Phân hóa sư phạm Chuẩn Thông tư 27</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
            {GRADE_OPTIONS.map(opt => {
              const isGradeActive = selectedGrade === opt.grade;
              return (
                <button
                  key={opt.grade}
                  onClick={() => handleSelectGrade(opt.grade)}
                  className={`p-3 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer active:scale-95 ${
                    isGradeActive
                      ? 'bg-slate-900/90 border-cyan-300 ring-2 ring-cyan-400/60 shadow-[0_8px_20px_rgba(34,211,238,0.35)] scale-102'
                      : 'bg-slate-900/50 border-white/10 hover:bg-slate-900/70 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs sm:text-sm font-black font-heading ${isGradeActive ? 'text-white' : 'text-slate-300'}`}>
                      {opt.label}
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isGradeActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'}`}>
                      {opt.grade === 3 ? '★ Core' : `G${opt.grade}`}
                    </span>
                  </div>
                  <div>
                    <p className={`text-[11px] font-bold truncate ${isGradeActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                      {opt.sub}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate opacity-80">
                      {opt.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* THE 5 FLOATING ISLANDS ARCHIPELAGO (3D GRID / MAP)            */}
        {/* ============================================================== */}
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white font-heading text-3d-fantasy flex items-center justify-center sm:justify-start gap-2">
              <span>🏝️</span>
              <span>QUẦN ĐẢO NỔI 5 KỲ QUAN (5 FLOATING ISLANDS)</span>
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200/80">
              Nhấn vào từng hòn đảo để xem chi tiết hoặc bấm "Vào Thám Hiểm" để mở phòng học tương tác!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 pt-2">
            {FLOATING_ISLANDS.map(island => (
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

        {/* ============================================================== */}
        {/* SELECTED ISLAND DETAILS BANNER                                 */}
        {/* ============================================================== */}
        <div 
          className="relative overflow-hidden rounded-[32px] p-6 sm:p-8 backdrop-blur-xl border-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            borderColor: selectedIsland.crystalHex,
            background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 60%, ${selectedIsland.crystalHex}25 100%)`
          }}
        >
          {/* Left: Island Mascot & Name */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="shrink-0 p-3 rounded-2xl bg-slate-900/80 border border-white/10 shadow-inner">
              <Island3DVisual
                islandId={selectedIsland.id}
                size={140}
                isSelected={true}
              />
            </div>
            
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedIsland.crystalHex }} />
                <span>{selectedIsland.crystalName}</span>
                <span>•</span>
                <span className="text-amber-400">{selectedIsland.landmarkFeature}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading text-3d-fantasy">
                {selectedIsland.nameEn} ({selectedIsland.nameVi})
              </h3>
              
              <p className="text-xs sm:text-sm text-cyan-200/90 max-w-xl">
                {selectedIsland.taglineVi}
              </p>

              <div className="pt-1 flex items-center gap-3 text-xs text-slate-300 font-medium">
                <span className="text-amber-300 font-bold">🎯 Nhiệm vụ {currentGradeContent.gradeBadge}:</span>
                <span>{currentGradeContent.missionTitleVi}</span>
              </div>
            </div>
          </div>

          {/* Right: Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => handleOpenIslandActivity(selectedIsland)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider text-white shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${selectedIsland.crystalHex} 0%, #0284c7 100%)`,
                boxShadow: `0 10px 25px ${selectedIsland.glowRgba}`
              }}
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>BẮT ĐẦU THÁM HIỂM (+{currentGradeContent.starsReward} SAO)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* REAL ACTIVITY RUNNER MODAL                                     */}
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
