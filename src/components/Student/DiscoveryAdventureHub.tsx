// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — DISCOVERY ADVENTURE HUB
// Exact 1:1 UI Replacement Matching Reference Master Artwork
// CARD 1: 3D Island World (Sky Blue / Vibrant Turquoise)
// CARD 2: 5 Learning Adventures (Sunny Warm Peach / Orange)
// CARD 3: Vietnam 2025 Map (Pastel Mint / Emerald Green)
// Positioned directly below Grade Selection Cards (16-24px vertical spacing)
// ==============================================================================

import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  GraduationCap,
  Eye
} from 'lucide-react';
import { soundEffects } from '../../lib/soundEffects';
import { GradeBand } from '../../types';

export type DiscoveryAdventureMode = 'floating_islands' | 'curriculum_pathways' | 'map_and_units';

export interface DiscoveryAdventureHubProps {
  activeMode: DiscoveryAdventureMode;
  onSelectMode: (mode: DiscoveryAdventureMode) => void;
  activeGradeNum: 1 | 2 | 3 | 4 | 5;
  activeGradeBand: GradeBand;
  className?: string;
}

export const DiscoveryAdventureHub: React.FC<DiscoveryAdventureHubProps> = ({
  activeMode,
  onSelectMode,
  activeGradeNum,
  className = ''
}) => {
  const handleModeClick = (mode: DiscoveryAdventureMode) => {
    soundEffects.playClick();
    onSelectMode(mode);

    // Smooth scroll down to the active discovery arena
    setTimeout(() => {
      const arena = document.getElementById('discovery-experience-arena');
      if (arena) {
        arena.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  return (
    <section 
      aria-label="Discovery Adventure Hub" 
      className={`relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#e3f4ff] via-[#f1f8ff] to-[#fbfbff] p-5 sm:p-7 lg:p-8 border-2 border-white/90 shadow-[0_20px_50px_rgba(147,197,253,0.25)] backdrop-blur-md select-none ${className}`}
    >
      {/* ==================================================================== */}
      {/* MAGICAL SKY AMBIENT DECORATIONS (Fluffy clouds, sparkles, meteor)    */}
      {/* ==================================================================== */}
      {/* Top right fluffy cloud */}
      <img 
        src="/assets/hub/hub_cloud_clean.webp" 
        alt="" 
        aria-hidden="true" 
        className="absolute top-2 right-1/4 w-24 sm:w-28 opacity-80 pointer-events-none select-none z-0 hidden md:block" 
      />

      {/* Far right cloud */}
      <img 
        src="/assets/hub/hub_cloud_clean.webp" 
        alt="" 
        aria-hidden="true" 
        className="absolute top-24 -right-6 w-32 sm:w-40 opacity-70 pointer-events-none select-none z-0 transform scale-x-[-1]" 
      />

      {/* Bottom left cloud */}
      <img 
        src="/assets/hub/hub_cloud_clean.webp" 
        alt="" 
        aria-hidden="true" 
        className="absolute -bottom-8 -left-6 w-32 sm:w-44 opacity-60 pointer-events-none select-none z-0" 
      />

      {/* Whimsical shooting star / meteor trail in top right */}
      <div 
        aria-hidden="true" 
        className="absolute top-6 right-20 sm:right-32 pointer-events-none select-none z-0 flex items-center opacity-85"
      >
        <div className="w-28 sm:w-36 h-[3px] bg-gradient-to-r from-transparent via-cyan-200 to-white transform -rotate-[30deg] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.95)]" />
        <span className="text-white text-xs -ml-1 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]">✨</span>
      </div>

      {/* Glowing Star Sparkles */}
      <div aria-hidden="true" className="absolute top-12 right-1/3 text-amber-300 text-xs animate-pulse duration-1000 select-none pointer-events-none">⭐</div>
      <div aria-hidden="true" className="absolute top-20 right-12 text-cyan-200 text-sm animate-pulse duration-700 select-none pointer-events-none">✨</div>
      <div aria-hidden="true" className="absolute top-6 left-1/3 text-white text-xs select-none pointer-events-none">⭐</div>

      {/* ==================================================================== */}
      {/* 1. SECTION HEADER BAR                                                */}
      {/* ==================================================================== */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-2">
        <div>
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {/* Glowing Compass Badge */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] p-0.5 shadow-md flex items-center justify-center shrink-0">
              <span className="text-base select-none">🧭</span>
            </div>

            {/* Hub Title Pill */}
            <span className="px-3.5 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] font-black text-xs uppercase tracking-wider shadow-2xs">
              Discovery Adventure Hub
            </span>

            {/* Synchronized Grade Pill */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] border border-[#fde68a] text-xs font-black shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Lớp {activeGradeNum} (Grade {activeGradeNum}) Đang Đồng Bộ</span>
            </span>
          </div>

          {/* Large Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-heading text-[#0D2644] tracking-tight leading-tight">
            Choose Your Discovery Adventure!
          </h2>

          {/* Subtitle with Sparkle */}
          <p className="text-sm sm:text-base md:text-lg font-black font-heading text-[#1E4E8C] mt-1 flex items-center gap-1.5">
            <span>Chọn hành trình khám phá của em</span>
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 inline" />
          </p>
        </div>

        {/* Right Info Pill */}
        <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-cyan-100 shadow-xs text-xs font-extrabold text-[#0e7490] shrink-0 self-start md:self-auto">
          <Eye className="w-4 h-4 text-cyan-600" />
          <span>3 chế độ học tập đa dạng & đồng bộ theo khối lớp</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. THREE LARGE INTERACTIVE ADVENTURE CARDS                           */}
      {/* ==================================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch pt-2">
        
        {/* ================================================================== */}
        {/* CARD 1: 3D ISLAND WORLD (Sky Blue / Vibrant Turquoise)             */}
        {/* ================================================================== */}
        <div
          onClick={() => handleModeClick('floating_islands')}
          role="button"
          tabIndex={0}
          aria-label="3D Island World - Thế giới đảo nổi 3D"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('floating_islands');
            }
          }}
          className={`group relative rounded-[32px] sm:rounded-[36px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer outline-none transform hover:-translate-y-1 hover:scale-[1.02] ${
            activeMode === 'floating_islands'
              ? 'bg-gradient-to-b from-[#0ea5a0] via-[#0d9488] to-[#0f766e] text-white shadow-[0_24px_50px_rgba(13,148,136,0.38)] ring-4 ring-[#2dd4bf]/40 border-2 border-[#5eead4]'
              : 'bg-gradient-to-b from-[#cffafe] via-[#e0f7fa] to-[#f0fdfa] text-[#083344] border-2 border-cyan-200/90 shadow-[0_12px_32px_rgba(6,182,212,0.15)] hover:border-cyan-400 hover:shadow-[0_18px_40px_rgba(6,182,212,0.25)]'
          }`}
        >
          {/* Active selection badge on top */}
          {activeMode === 'floating_islands' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#451a03] font-black text-xs shadow-md border-2 border-white flex items-center gap-1.5 whitespace-nowrap z-20 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#451a03]" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Category Badge & Grade Pill */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'floating_islands'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-cyan-100/90 text-cyan-900 border border-cyan-200/80'
              }`}>
                🏝️ 3D World • Đảo Nổi
              </span>
              <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                activeMode === 'floating_islands'
                  ? 'bg-white/25 text-white'
                  : 'bg-cyan-100/90 text-cyan-900'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-2xl sm:text-[26px] font-black font-heading tracking-tight leading-tight ${
              activeMode === 'floating_islands' ? 'text-white' : 'text-[#083344]'
            }`}>
              3D Island World
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'floating_islands' ? 'text-white/90' : 'text-[#0e7490]'
            }`}>
              Thế giới đảo nổi 3D
            </p>

            {/* Illustration Frame */}
            <div className="my-4 relative rounded-2xl overflow-hidden bg-white/20 p-1 border border-white/40 shadow-inner aspect-[4/3] flex items-center justify-center">
              <img 
                src="/assets/hub/hub_card1_island_world.webp" 
                alt="3D Island World" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Bullet Highlights */}
            <ul className={`mt-4 space-y-2 text-xs sm:text-[13px] font-bold ${
              activeMode === 'floating_islands' ? 'text-white' : 'text-[#155e75]'
            }`}>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">🌊</span>
                <span>Vịnh biển ngọc lam & 5 đảo nổi thần tiên</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">🎧</span>
                <span>Wonder, Listening, Speaking, Puzzle & Champions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">👩‍✈️</span>
                <span>Thực hành nghe nói tương tác cùng Captain Trang</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================================================================== */}
        {/* CARD 2: 5 LEARNING ADVENTURES (Sunny Warm Peach / Orange)          */}
        {/* ================================================================== */}
        <div
          onClick={() => handleModeClick('curriculum_pathways')}
          role="button"
          tabIndex={0}
          aria-label="5 Learning Adventures - 5 chặng khám phá"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('curriculum_pathways');
            }
          }}
          className={`group relative rounded-[32px] sm:rounded-[36px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer outline-none transform hover:-translate-y-1 hover:scale-[1.02] ${
            activeMode === 'curriculum_pathways'
              ? 'bg-gradient-to-b from-[#f97316] via-[#ea580c] to-[#c2410c] text-white shadow-[0_24px_50px_rgba(234,88,12,0.38)] ring-4 ring-[#fb923c]/40 border-2 border-[#fed7aa]'
              : 'bg-gradient-to-b from-[#fed7aa] via-[#ffedd5] to-[#fff7ed] text-[#7c2d12] border-2 border-[#fdba74] shadow-[0_12px_32px_rgba(251,146,60,0.18)] hover:border-[#fb923c] hover:shadow-[0_18px_40px_rgba(251,146,60,0.28)]'
          }`}
        >
          {/* Active selection badge on top */}
          {activeMode === 'curriculum_pathways' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#451a03] font-black text-xs shadow-md border-2 border-white flex items-center gap-1.5 whitespace-nowrap z-20 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#451a03]" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Category Badge & Grade Pill */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'curriculum_pathways'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-white/50 backdrop-blur text-[#7c2d12] border border-orange-200/60'
              }`}>
                🎒 5 Pathways • Giáo Trình
              </span>
              <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                activeMode === 'curriculum_pathways'
                  ? 'bg-white/25 text-white'
                  : 'bg-white/50 text-[#7c2d12] border border-orange-200/60'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-2xl sm:text-[26px] font-black font-heading tracking-tight leading-tight ${
              activeMode === 'curriculum_pathways' ? 'text-white' : 'text-[#7c2d12]'
            }`}>
              5 Learning Adventures
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'curriculum_pathways' ? 'text-white/90' : 'text-[#9a3412]'
            }`}>
              5 chặng khám phá
            </p>

            {/* Illustration Frame */}
            <div className="my-4 relative rounded-2xl overflow-hidden bg-white/40 p-1 border border-white/60 shadow-inner aspect-[4/3] flex items-center justify-center">
              <img 
                src="/assets/hub/hub_card2_learning_adventures.webp" 
                alt="5 Learning Adventures" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Bullet Highlights */}
            <ul className={`mt-4 space-y-2 text-xs sm:text-[13px] font-bold ${
              activeMode === 'curriculum_pathways' ? 'text-white' : 'text-[#7c2d12]'
            }`}>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">☀️</span>
                <span>Amazing Places • Culture • Food • Nature • Future</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">📖</span>
                <span>25 chặng học chuẩn Thông tư 27 & CEFR Pre-A1-A2</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">🖥️</span>
                <span>Quy trình chuẩn: Xem, Học, Đọc, Chơi, Đấu trí</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================================================================== */}
        {/* CARD 3: VIETNAM 2025 MAP (Pastel Mint / Emerald Green)             */}
        {/* ================================================================== */}
        <div
          onClick={() => handleModeClick('map_and_units')}
          role="button"
          tabIndex={0}
          aria-label="Vietnam 2025 Map - Bản đồ 34 tỉnh, thành phố"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('map_and_units');
            }
          }}
          className={`group relative rounded-[32px] sm:rounded-[36px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer outline-none transform hover:-translate-y-1 hover:scale-[1.02] ${
            activeMode === 'map_and_units'
              ? 'bg-gradient-to-b from-[#059669] via-[#047857] to-[#065f46] text-white shadow-[0_24px_50px_rgba(5,150,105,0.38)] ring-4 ring-[#34d399]/40 border-2 border-[#a7f3d0]'
              : 'bg-gradient-to-b from-[#bbf7d0] via-[#dcfce7] to-[#f0fdf4] text-[#064e3b] border-2 border-[#86efac] shadow-[0_12px_32px_rgba(34,197,94,0.18)] hover:border-[#4ade80] hover:shadow-[0_18px_40px_rgba(34,197,94,0.28)]'
          }`}
        >
          {/* Active selection badge on top */}
          {activeMode === 'map_and_units' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#451a03] font-black text-xs shadow-md border-2 border-white flex items-center gap-1.5 whitespace-nowrap z-20 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#451a03]" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Category Badge & Grade Pill */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'map_and_units'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-[#064e3b]/10 backdrop-blur text-[#064e3b] border border-emerald-300/40'
              }`}>
                📖 Official 2025 Map • 34 Tỉnh
              </span>
              <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                activeMode === 'map_and_units'
                  ? 'bg-white/25 text-white'
                  : 'bg-[#064e3b]/10 text-[#064e3b] border border-emerald-300/40'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-2xl sm:text-[26px] font-black font-heading tracking-tight leading-tight ${
              activeMode === 'map_and_units' ? 'text-white' : 'text-[#064e3b]'
            }`}>
              Vietnam 2025 Map
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'map_and_units' ? 'text-white/90' : 'text-[#065f46]'
            }`}>
              Bản đồ 34 tỉnh, thành phố
            </p>

            {/* Illustration Frame */}
            <div className="my-4 relative rounded-2xl overflow-hidden bg-white/50 p-1 border border-white/70 shadow-inner aspect-[4/3] flex items-center justify-center">
              <img 
                src="/assets/hub/hub_card3_vietnam_map.webp" 
                alt="Vietnam 2025 Map" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Bullet Highlights */}
            <ul className={`mt-4 space-y-2 text-xs sm:text-[13px] font-bold ${
              activeMode === 'map_and_units' ? 'text-white' : 'text-[#064e3b]'
            }`}>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">📍</span>
                <span>Ranh giới 34 tỉnh/thành chuẩn hóa quy hoạch 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">🏝️</span>
                <span>Trọn vẹn chủ quyền QĐ Hoàng Sa & Trường Sa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm shrink-0">🧩</span>
                <span>Game kéo thả địa danh & thử thách theo khối lớp</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
};
