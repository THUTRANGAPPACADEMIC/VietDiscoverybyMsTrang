// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — DISCOVERY ADVENTURE HUB
// Premium 3-Card Discovery Mode Selector
// CARD 1: 3D Island World (Sky Blue & Turquoise)
// CARD 2: 5 Learning Adventures (Lavender, Peach & Pink)
// CARD 3: Vietnam 2025 Map (Mint Green & Emerald)
// Positioned directly below Grade Selection Cards (16-24px vertical spacing)
// ==============================================================================

import React from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  GraduationCap,
  Award,
  Waves,
  ShieldCheck,
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
  activeGradeBand,
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
      className={`relative overflow-hidden rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#f8fafc] via-[#f0f9ff]/90 to-[#fdf2f8]/80 p-5 sm:p-7 lg:p-8 border-2 border-indigo-100/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-md ${className}`}
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-200/30 via-pink-200/20 to-transparent rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none select-none" />

      {/* 1. SECTION HEADER BAR */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-indigo-100/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 text-white shadow-md shadow-indigo-200 text-sm">
              🧭
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs uppercase tracking-wider">
              Discovery Adventure Hub
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
              <span>Lớp {activeGradeNum} (Grade {activeGradeNum}) Đang Đồng Bộ</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Choose Your Discovery Adventure!
          </h2>
          <p className="text-sm sm:text-base font-extrabold text-indigo-700 font-heading mt-0.5 flex items-center gap-1.5">
            <span>Chọn hành trình khám phá của em</span>
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          </p>
        </div>

        {/* Quick Helper Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 border border-indigo-100 shadow-xs text-xs font-bold text-slate-600 shrink-0">
          <Eye className="w-4 h-4 text-cyan-600" />
          <span>3 chế độ học tập đa dạng & đồng bộ theo khối lớp</span>
        </div>
      </div>

      {/* 2. THREE LARGE INTERACTIVE ADVENTURE CARDS */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        
        {/* ================================================================ */}
        {/* CARD 1: 3D ISLAND WORLD (Sky Blue & Turquoise)                   */}
        {/* ================================================================ */}
        <div
          onClick={() => handleModeClick('floating_islands')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('floating_islands');
            }
          }}
          className={`group relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none outline-none transform hover:scale-[1.04] ${
            activeMode === 'floating_islands'
              ? 'bg-gradient-to-br from-[#0284c7] via-[#0891b2] to-[#0d9488] text-white shadow-[0_20px_45px_rgba(6,182,212,0.42)] ring-4 ring-cyan-300 border-2 border-white/60'
              : 'bg-gradient-to-b from-[#e0f7fa] via-[#e0f2fe] to-white text-slate-900 border-2 border-cyan-200/90 shadow-md shadow-cyan-100/60 hover:border-cyan-400 hover:shadow-[0_18px_36px_rgba(6,182,212,0.25)]'
          }`}
        >
          {/* Active selection ribbon */}
          {activeMode === 'floating_islands' && (
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 font-black text-xs shadow-md border-2 border-white flex items-center gap-1 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-950" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Tag & Category Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'floating_islands'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
              }`}>
                🏝️ 3D World • Đảo Nổi
              </span>
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                activeMode === 'floating_islands'
                  ? 'bg-cyan-400/30 text-cyan-100'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-xl sm:text-2xl font-black font-heading tracking-tight leading-tight ${
              activeMode === 'floating_islands' ? 'text-white' : 'text-cyan-950'
            }`}>
              3D Island World
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'floating_islands' ? 'text-cyan-100' : 'text-cyan-700'
            }`}>
              Thế giới đảo nổi 3D
            </p>

            {/* Visual: Magical 3D Floating Island Vector Art */}
            <div className="my-4 relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-400/20 via-cyan-300/30 to-teal-400/30 flex items-center justify-center border border-cyan-200/60 shadow-inner">
              <div className="w-full h-full p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="skyGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7dd3fc" />
                      <stop offset="60%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="oceanGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <linearGradient id="rockGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#78716c" />
                      <stop offset="50%" stopColor="#57534e" />
                      <stop offset="100%" stopColor="#292524" />
                    </linearGradient>
                    <linearGradient id="grassGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="60%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                    <linearGradient id="crystalGrad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>

                  {/* Ocean Horizon & Gentle Waves */}
                  <rect x="0" y="140" width="320" height="60" fill="url(#oceanGrad1)" opacity="0.6" />
                  <path d="M0 150 Q40 145, 80 150 T160 150 T240 150 T320 150 L320 200 L0 200 Z" fill="url(#oceanGrad1)" />
                  <path d="M0 162 Q40 157, 80 162 T160 162 T240 162 T320 162 L320 200 L0 200 Z" fill="#0e7490" opacity="0.5" />

                  {/* Distant Floating Mini-Islands */}
                  <g opacity="0.75" transform="translate(30, 45) scale(0.45)">
                    <polygon points="50,90 20,40 80,40" fill="url(#rockGrad1)" />
                    <ellipse cx="50" cy="40" rx="36" ry="12" fill="url(#grassGrad1)" />
                    <polygon points="50,20 44,40 56,40" fill="#f59e0b" />
                  </g>
                  <g opacity="0.8" transform="translate(230, 35) scale(0.55)">
                    <polygon points="50,90 20,40 80,40" fill="url(#rockGrad1)" />
                    <ellipse cx="50" cy="40" rx="36" ry="12" fill="url(#grassGrad1)" />
                    <polygon points="50,15 42,40 58,40" fill="#ec4899" />
                  </g>

                  {/* Main Central 3D Floating Island */}
                  <g transform="translate(60, 20)">
                    {/* Crystalline Underbelly of Floating Island */}
                    <path d="M40 95 L100 155 L160 95 Z" fill="url(#rockGrad1)" filter="drop-shadow(0px 8px 8px rgba(0,0,0,0.3))" />
                    <path d="M70 95 L100 155 L130 95 Z" fill="#44403c" opacity="0.9" />
                    
                    {/* Glowing Turquoise Crystals on Island Bottom */}
                    <polygon points="100,165 92,150 108,150" fill="url(#crystalGrad1)" />
                    <polygon points="65,115 58,105 72,105" fill="url(#crystalGrad1)" />
                    <polygon points="135,115 128,105 142,105" fill="url(#crystalGrad1)" />

                    {/* Lush Green Island Surface Plateau */}
                    <ellipse cx="100" cy="95" rx="72" ry="22" fill="url(#grassGrad1)" />
                    <ellipse cx="100" cy="92" rx="66" ry="18" fill="#86efac" opacity="0.4" />

                    {/* Cute 3D Waterfall flowing into thin air */}
                    <path d="M125 96 C128 110, 126 125, 128 135" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="128" cy="136" r="3" fill="#ffffff" />

                    {/* Cute Coconut Palm Trees */}
                    <path d="M60 92 Q68 75 70 65" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
                    <ellipse cx="64" cy="62" rx="14" ry="5" fill="#15803d" transform="rotate(-20 64 62)" />
                    <ellipse cx="76" cy="62" rx="14" ry="5" fill="#16a34a" transform="rotate(25 76 62)" />
                    <ellipse cx="70" cy="58" rx="12" ry="5" fill="#22c55e" transform="rotate(80 70 58)" />

                    {/* Golden Explorer Pagoda on Hill */}
                    <polygon points="100,56 86,72 114,72" fill="#f59e0b" />
                    <rect x="90" y="72" width="20" height="18" fill="#fbbf24" rx="2" />
                    <rect x="96" y="78" width="8" height="12" fill="#78350f" rx="1" />
                    <polygon points="100,50 97,56 103,56" fill="#fef08a" />
                    <circle cx="100" cy="48" r="3" fill="#fef08a" />

                    {/* Golden Stars & Magic Sparkles */}
                    <path d="M145 60 L148 68 L156 69 L150 74 L152 82 L145 77 L138 82 L140 74 L134 69 L142 68 Z" fill="#fef08a" />
                    <circle cx="50" cy="70" r="2" fill="#ffffff" />
                    <circle cx="150" cy="50" r="2.5" fill="#ffffff" />
                    <circle cx="90" cy="40" r="2" fill="#ffffff" />
                  </g>

                  {/* Soft Puffy Clouds in Sky */}
                  <g opacity="0.85">
                    <ellipse cx="40" cy="30" rx="22" ry="10" fill="#ffffff" />
                    <ellipse cx="50" cy="26" rx="16" ry="12" fill="#ffffff" />
                    <ellipse cx="280" cy="45" rx="26" ry="12" fill="#ffffff" />
                    <ellipse cx="290" cy="40" rx="18" ry="14" fill="#ffffff" />
                  </g>
                </svg>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-2 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-cyan-900 shadow-xs border border-cyan-200">
                ✨ 5 Floating Islands 3D
              </div>
            </div>

            {/* Bullet Highlights */}
            <ul className={`space-y-1.5 text-xs font-semibold ${
              activeMode === 'floating_islands' ? 'text-cyan-50' : 'text-slate-600'
            }`}>
              <li className="flex items-center gap-2">
                <span className="text-sm">🌊</span>
                <span>Vịnh biển ngọc lam & 5 đảo nổi thần tiên</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🎧</span>
                <span>Wonder, Listening, Speaking, Puzzle & Champions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🧭</span>
                <span>Thực hành nghe nói tương tác cùng Captain Trang</span>
              </li>
            </ul>
          </div>

          {/* Action Button at Bottom */}
          <div className="mt-5 pt-3 border-t border-cyan-200/50">
            <div className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
              activeMode === 'floating_islands'
                ? 'bg-white text-cyan-950 shadow-md shadow-cyan-900/20'
                : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm'
            }`}>
              <span>{activeMode === 'floating_islands' ? 'Đang Khám Phá • Active' : 'Khám Phá Đảo 3D'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CARD 2: 5 LEARNING ADVENTURES (Lavender, Peach & Pink)           */}
        {/* ================================================================ */}
        <div
          onClick={() => handleModeClick('curriculum_pathways')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('curriculum_pathways');
            }
          }}
          className={`group relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none outline-none transform hover:scale-[1.04] ${
            activeMode === 'curriculum_pathways'
              ? 'bg-gradient-to-br from-[#8b5cf6] via-[#ec4899] to-[#f97316] text-white shadow-[0_20px_45px_rgba(236,72,153,0.42)] ring-4 ring-pink-300 border-2 border-white/60'
              : 'bg-gradient-to-b from-[#f3e8ff] via-[#fdf2f8] to-[#fff7ed] text-slate-900 border-2 border-pink-200/90 shadow-md shadow-pink-100/60 hover:border-pink-400 hover:shadow-[0_18px_36px_rgba(236,72,153,0.25)]'
          }`}
        >
          {/* Active selection ribbon */}
          {activeMode === 'curriculum_pathways' && (
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 font-black text-xs shadow-md border-2 border-white flex items-center gap-1 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-950" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Tag & Category Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'curriculum_pathways'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-purple-100 text-purple-800 border border-purple-200'
              }`}>
                🎒 5 Pathways • Giáo Trình
              </span>
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                activeMode === 'curriculum_pathways'
                  ? 'bg-pink-400/30 text-pink-100'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-xl sm:text-2xl font-black font-heading tracking-tight leading-tight ${
              activeMode === 'curriculum_pathways' ? 'text-white' : 'text-purple-950'
            }`}>
              5 Learning Adventures
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'curriculum_pathways' ? 'text-pink-100' : 'text-purple-700'
            }`}>
              5 chặng khám phá
            </p>

            {/* Visual: 5 Themed Floating Islands Arc Vector Art */}
            <div className="my-4 relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-300/20 via-pink-300/30 to-amber-200/30 flex items-center justify-center border border-pink-200/60 shadow-inner">
              <div className="w-full h-full p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="rainbowBridge" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="25%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="75%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="adv1Grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="adv2Grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#7e22ce" />
                    </linearGradient>
                    <linearGradient id="adv3Grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                    <linearGradient id="adv4Grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                    <linearGradient id="adv5Grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#be185d" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Rainbow Ribbon Pathway */}
                  <path d="M30 130 Q160 50, 290 130" stroke="url(#rainbowBridge)" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />
                  <path d="M30 130 Q160 50, 290 130" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.9" />

                  {/* Island 1: Amazing Places (Geography / Mountain & Flag) */}
                  <g transform="translate(18, 95)">
                    <ellipse cx="25" cy="45" rx="24" ry="9" fill="#0284c7" opacity="0.3" />
                    <polygon points="25,50 5,20 45,20" fill="#475569" />
                    <ellipse cx="25" cy="20" rx="22" ry="7" fill="url(#adv1Grad)" />
                    <polygon points="25,2 15,20 35,20" fill="#e0f2fe" />
                    <line x1="25" y1="2" x2="25" y2="-6" stroke="#f59e0b" strokeWidth="1.5" />
                    <polygon points="25,-6 33,-2 25,2" fill="#ef4444" />
                    <text x="25" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">ADV 1</text>
                  </g>

                  {/* Island 2: Vietnamese Culture (Pagoda / Silk Lantern) */}
                  <g transform="translate(75, 55)">
                    <ellipse cx="25" cy="45" rx="24" ry="9" fill="#7e22ce" opacity="0.3" />
                    <polygon points="25,50 5,20 45,20" fill="#475569" />
                    <ellipse cx="25" cy="20" rx="22" ry="7" fill="url(#adv2Grad)" />
                    <rect x="18" y="6" width="14" height="14" fill="#fbbf24" rx="2" />
                    <polygon points="25,0 12,8 38,8" fill="#f43f5e" />
                    <circle cx="25" cy="13" r="3" fill="#fef08a" />
                    <text x="25" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">ADV 2</text>
                  </g>

                  {/* Island 3: Delicious Vietnam (Food / Steaming Bowl) - Peak of Arc */}
                  <g transform="translate(135, 30)">
                    <ellipse cx="25" cy="45" rx="24" ry="9" fill="#c2410c" opacity="0.3" />
                    <polygon points="25,50 5,20 45,20" fill="#475569" />
                    <ellipse cx="25" cy="20" rx="22" ry="7" fill="url(#adv3Grad)" />
                    <ellipse cx="25" cy="12" rx="12" ry="6" fill="#fef3c7" />
                    <path d="M15 12 Q25 22 35 12" fill="#d97706" />
                    <path d="M22 6 Q25 0 23 -4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M28 6 Q30 0 28 -4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="25" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">ADV 3</text>
                  </g>

                  {/* Island 4: Nature & Wildlife (Jungle Tree & Animal) */}
                  <g transform="translate(195, 55)">
                    <ellipse cx="25" cy="45" rx="24" ry="9" fill="#15803d" opacity="0.3" />
                    <polygon points="25,50 5,20 45,20" fill="#475569" />
                    <ellipse cx="25" cy="20" rx="22" ry="7" fill="url(#adv4Grad)" />
                    <rect x="23" y="10" width="4" height="10" fill="#78350f" />
                    <circle cx="25" cy="6" r="10" fill="#22c55e" />
                    <circle cx="20" cy="8" r="6" fill="#16a34a" />
                    <circle cx="30" cy="8" r="6" fill="#4ade80" />
                    <text x="25" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">ADV 4</text>
                  </g>

                  {/* Island 5: Future Vietnam (Space Rocket & Innovation) */}
                  <g transform="translate(250, 95)">
                    <ellipse cx="25" cy="45" rx="24" ry="9" fill="#be185d" opacity="0.3" />
                    <polygon points="25,50 5,20 45,20" fill="#475569" />
                    <ellipse cx="25" cy="20" rx="22" ry="7" fill="url(#adv5Grad)" />
                    {/* Futuristic Rocket */}
                    <polygon points="25,-6 20,12 30,12" fill="#ffffff" />
                    <polygon points="25,-8 22,-4 28,-4" fill="#ef4444" />
                    <circle cx="25" cy="3" r="2.5" fill="#38bdf8" />
                    <polygon points="17,12 21,8 21,14" fill="#f97316" />
                    <polygon points="33,12 29,8 29,14" fill="#f97316" />
                    <text x="25" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">ADV 5</text>
                  </g>
                </svg>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-2 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-purple-900 shadow-xs border border-purple-200">
                ✨ 5 Themed Floating Islands
              </div>
            </div>

            {/* Bullet Highlights */}
            <ul className={`space-y-1.5 text-xs font-semibold ${
              activeMode === 'curriculum_pathways' ? 'text-pink-50' : 'text-slate-600'
            }`}>
              <li className="flex items-center gap-2">
                <span className="text-sm">🌟</span>
                <span>Amazing Places • Culture • Food • Nature • Future</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">📖</span>
                <span>25 chặng học chuẩn Thông tư 27 & CEFR Pre-A1–A2</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">📺</span>
                <span>Quy trình chuẩn: Xem, Học, Đọc, Chơi, Đấu trí</span>
              </li>
            </ul>
          </div>

          {/* Action Button at Bottom */}
          <div className="mt-5 pt-3 border-t border-pink-200/50">
            <div className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
              activeMode === 'curriculum_pathways'
                ? 'bg-white text-pink-950 shadow-md shadow-pink-900/20'
                : 'bg-pink-600 hover:bg-pink-700 text-white shadow-sm'
            }`}>
              <span>{activeMode === 'curriculum_pathways' ? 'Đang Khám Phá • Active' : 'Bắt Đầu 5 Chặng'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CARD 3: VIETNAM 2025 MAP (Mint Green & Emerald)                  */}
        {/* ================================================================ */}
        <div
          onClick={() => handleModeClick('map_and_units')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleModeClick('map_and_units');
            }
          }}
          className={`group relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none outline-none transform hover:scale-[1.04] ${
            activeMode === 'map_and_units'
              ? 'bg-gradient-to-br from-[#059669] via-[#10b981] to-[#0f766e] text-white shadow-[0_20px_45px_rgba(16,185,129,0.42)] ring-4 ring-emerald-300 border-2 border-white/60'
              : 'bg-gradient-to-b from-[#dcfce7] via-[#f0fdf4] to-white text-slate-900 border-2 border-emerald-200/90 shadow-md shadow-emerald-100/60 hover:border-emerald-400 hover:shadow-[0_18px_36px_rgba(16,185,129,0.25)]'
          }`}
        >
          {/* Active selection ribbon */}
          {activeMode === 'map_and_units' && (
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 font-black text-xs shadow-md border-2 border-white flex items-center gap-1 animate-bounce duration-1000">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-950" />
              <span>Đang Chọn • Active Mode</span>
            </div>
          )}

          <div>
            {/* Top Tag & Category Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                activeMode === 'map_and_units'
                  ? 'bg-white/20 text-white backdrop-blur-md'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}>
                🗺️ Official 2025 Map • 34 Tỉnh
              </span>
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                activeMode === 'map_and_units'
                  ? 'bg-emerald-400/30 text-emerald-100'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                Lớp {activeGradeNum}
              </span>
            </div>

            {/* Titles */}
            <h3 className={`text-xl sm:text-2xl font-black font-heading tracking-tight leading-tight ${
              activeMode === 'map_and_units' ? 'text-white' : 'text-emerald-950'
            }`}>
              Vietnam 2025 Map
            </h3>
            <p className={`text-xs sm:text-sm font-extrabold font-heading mt-0.5 ${
              activeMode === 'map_and_units' ? 'text-emerald-100' : 'text-emerald-700'
            }`}>
              Bản đồ 34 tỉnh, thành phố
            </p>

            {/* Visual: Official Vietnam 2025 Map Silhouette & Archipelagos Vector Art */}
            <div className="my-4 relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-300/20 via-teal-200/30 to-emerald-400/30 flex items-center justify-center border border-emerald-200/60 shadow-inner">
              <div className="w-full h-full p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="mapVnGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="compassGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* Sea wave ripples & compass rose */}
                  <g opacity="0.35">
                    <circle cx="255" cy="50" r="32" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="255" cy="50" r="22" stroke="#10b981" strokeWidth="1" />
                    {/* Compass 4-point Star */}
                    <polygon points="255,26 258,47 279,50 258,53 255,74 252,53 231,50 252,47" fill="url(#compassGrad)" />
                    <text x="255" y="22" textAnchor="middle" fontSize="9" fontWeight="black" fill="#047857">N</text>
                  </g>

                  {/* Topographic elevation contours */}
                  <path d="M40 160 Q80 140, 140 170 T280 165" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <path d="M20 180 Q100 160, 180 185 T310 180" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                  {/* Accurate Verified Vietnam S-Shape Administrative Curve */}
                  <g transform="translate(105, 8)">
                    {/* Northern Region (Hà Giang, Cao Bằng, Hà Nội, Hải Phòng, Quảng Ninh) */}
                    <path 
                      d="M20 15 C35 5, 55 5, 75 12 C85 20, 75 35, 65 38 C55 42, 50 48, 52 58 C53 68, 62 78, 66 88 C70 98, 66 112, 60 125 C55 135, 50 148, 45 158 C42 165, 30 172, 22 170 C15 168, 12 155, 18 145 C25 135, 35 125, 42 115 C48 105, 48 95, 42 85 C35 75, 28 65, 25 52 C22 40, 10 25, 20 15 Z" 
                      fill="url(#mapVnGrad)" 
                      stroke="#ffffff" 
                      strokeWidth="2" 
                      filter="drop-shadow(0px 6px 10px rgba(4,120,87,0.35))"
                    />

                    {/* Regional Divider Lines (Accurate 2025 Regional Planning) */}
                    <path d="M38 45 Q55 48, 65 42" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                    <path d="M52 68 Q58 72, 64 74" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                    <path d="M48 105 Q56 108, 64 110" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                    <path d="M42 135 Q30 142, 25 145" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

                    {/* 1. Capital Hanoi – Golden National Star Marker */}
                    <g transform="translate(48, 36)">
                      <circle cx="0" cy="0" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                      <polygon points="0,-4 1.2,-1 4.5,-1 1.8,1 2.8,4.2 0,2.2 -2.8,4.2 -1.8,1 -4.5,-1 -1.2,-1" fill="#fef08a" />
                      <text x="10" y="2" fontSize="8" fontWeight="black" fill="#ffffff" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))">Hà Nội</text>
                    </g>

                    {/* 2. Da Nang – Coastal Bridge Pin Marker */}
                    <g transform="translate(64, 82)">
                      <circle cx="0" cy="0" r="5.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="2" fill="#ffffff" />
                      <text x="9" y="3" fontSize="8" fontWeight="black" fill="#ffffff" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))">Đà Nẵng</text>
                    </g>

                    {/* 3. Ho Chi Minh City – Southern Star Marker */}
                    <g transform="translate(32, 142)">
                      <circle cx="0" cy="0" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                      <polygon points="0,-3 1,-0.8 3.5,-0.8 1.5,0.8 2.2,3.2 0,1.8 -2.2,3.2 -1.5,0.8 -3.5,-0.8 -1,-0.8" fill="#ffffff" />
                      <text x="9" y="3" fontSize="8" fontWeight="black" fill="#ffffff" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))">TP.HCM</text>
                    </g>

                    {/* 4. Mekong Delta Hub – Can Tho */}
                    <g transform="translate(20, 158)">
                      <circle cx="0" cy="0" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                    </g>
                  </g>

                  {/* Sacred Sovereignty Archipelagos (Paracel & Spratly Islands) */}
                  {/* Quần đảo Hoàng Sa (Paracel Islands) */}
                  <g transform="translate(225, 78)">
                    <circle cx="0" cy="0" r="3" fill="#ef4444" />
                    <circle cx="7" cy="4" r="2.5" fill="#ef4444" />
                    <circle cx="12" cy="-2" r="2" fill="#ef4444" />
                    <line x1="0" y1="0" x2="0" y2="-9" stroke="#f59e0b" strokeWidth="1" />
                    <polygon points="0,-9 6,-6 0,-3" fill="#ef4444" />
                    <text x="-4" y="14" fontSize="7.5" fontWeight="black" fill="#065f46">QĐ. Hoàng Sa</text>
                  </g>

                  {/* Quần đảo Trường Sa (Spratly Islands) */}
                  <g transform="translate(220, 142)">
                    <circle cx="0" cy="0" r="3" fill="#ef4444" />
                    <circle cx="8" cy="6" r="2.5" fill="#ef4444" />
                    <circle cx="15" cy="2" r="2" fill="#ef4444" />
                    <circle cx="6" cy="-6" r="2.5" fill="#ef4444" />
                    <line x1="0" y1="0" x2="0" y2="-9" stroke="#f59e0b" strokeWidth="1" />
                    <polygon points="0,-9 6,-6 0,-3" fill="#ef4444" />
                    <text x="-4" y="15" fontSize="7.5" fontWeight="black" fill="#065f46">QĐ. Trường Sa</text>
                  </g>

                  {/* Phú Quốc Island */}
                  <g transform="translate(85, 172)">
                    <ellipse cx="0" cy="0" rx="4" ry="7" fill="#10b981" stroke="#ffffff" strokeWidth="1" transform="rotate(-25)" />
                    <text x="-18" y="12" fontSize="6.5" fontWeight="bold" fill="#065f46">Phú Quốc</text>
                  </g>
                </svg>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-2 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-emerald-900 shadow-xs border border-emerald-200">
                ✨ 34 Tỉnh/Thành Chuẩn Quy Hoạch 2025
              </div>
            </div>

            {/* Bullet Highlights */}
            <ul className={`space-y-1.5 text-xs font-semibold ${
              activeMode === 'map_and_units' ? 'text-emerald-50' : 'text-slate-600'
            }`}>
              <li className="flex items-center gap-2">
                <span className="text-sm">📍</span>
                <span>Ranh giới 34 tỉnh/thành chuẩn hóa quy hoạch 2025</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🏝️</span>
                <span>Trọn vẹn chủ quyền QĐ Hoàng Sa & Trường Sa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🧩</span>
                <span>Game kéo thả địa danh & thử thách theo khối lớp</span>
              </li>
            </ul>
          </div>

          {/* Action Button at Bottom */}
          <div className="mt-5 pt-3 border-t border-emerald-200/50">
            <div className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
              activeMode === 'map_and_units'
                ? 'bg-white text-emerald-950 shadow-md shadow-emerald-900/20'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
            }`}>
              <span>{activeMode === 'map_and_units' ? 'Đang Khám Phá • Active' : 'Mở Bản Đồ 2025'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
