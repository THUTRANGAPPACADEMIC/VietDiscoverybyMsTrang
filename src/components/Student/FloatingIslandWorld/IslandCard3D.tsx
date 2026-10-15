import React, { useState } from 'react';
import { FloatingIslandDef } from './floatingIslandData';
import { Island3DVisual } from './Island3DVisual';
import { soundEffects } from '../../../lib/soundEffects';
import { Sparkles, Star, ChevronRight, Compass } from 'lucide-react';

interface IslandCard3DProps {
  island: FloatingIslandDef;
  selectedGrade: 1 | 2 | 3 | 4 | 5;
  isSelected: boolean;
  onSelect: () => void;
  onEnterActivity: () => void;
}

export const IslandCard3D: React.FC<IslandCard3DProps> = ({
  island,
  selectedGrade,
  isSelected,
  onSelect,
  onEnterActivity
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentGradeData = island.gradeData[selectedGrade] || island.gradeData[1];

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundEffects.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    soundEffects.playClick();
    onSelect();
  };

  const handleEnterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    onEnterActivity();
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer transition-all duration-500 transform ${island.floatDelay} ${
        isHovered ? '-translate-y-4 scale-[1.04]' : ''
      }`}
      style={{
        perspective: '1000px'
      }}
    >
      {/* 3D Island Glowing Aura */}
      <div
        className={`absolute -inset-3 rounded-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none ${
          isSelected ? 'opacity-100' : ''
        }`}
        style={{
          background: `radial-gradient(circle, ${island.crystalHex}66 0%, transparent 75%)`
        }}
      />

      {/* Main Island 3D Floating Plinth Card */}
      <div
        className={`relative overflow-hidden rounded-[32px] p-5 sm:p-6 backdrop-blur-xl border-2 transition-all duration-500 flex flex-col items-center text-center shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${
          island.cardBorder
        } ${
          isSelected
            ? 'ring-4 ring-offset-2 ring-offset-slate-950 scale-[1.02]'
            : 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
        }`}
        style={{
          background: `linear-gradient(175deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.9) 60%, ${island.crystalHex}22 100%)`,
          boxShadow: isSelected
            ? `0 0 35px ${island.glowRgba}, 0 20px 40px rgba(0,0,0,0.5)`
            : undefined
        }}
      >
        {/* Crystal Shimmer Banner at Top */}
        <div className="w-full flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <span
              className="w-2.5 h-2.5 rounded-full animate-crystal-pulse"
              style={{ backgroundColor: island.crystalHex, color: island.crystalHex }}
            />
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-200">
              {island.badgeText}
            </span>
          </div>

          {/* Reward Stars Pill */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black shadow-inner">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>+{currentGradeData.starsReward}</span>
          </div>
        </div>

        {/* 3D Vector Island Illustration */}
        <div className="my-2 relative flex items-center justify-center">
          <Island3DVisual
            islandId={island.id}
            size={200}
            isHovered={isHovered}
            isSelected={isSelected}
          />
        </div>

        {/* Island Typography (English & Vietnamese 3D Titles) */}
        <div className="space-y-1 w-full mt-2">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading text-3d-fantasy">
            {island.nameEn}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-sky-200/90 tracking-wide">
            {island.nameVi}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-300/80 font-medium line-clamp-1 italic pt-0.5">
            "{island.subtitleEn}"
          </p>
        </div>

        {/* Mission Objectives for Selected Grade */}
        <div className="mt-3.5 w-full p-2.5 rounded-2xl bg-slate-900/60 border border-white/10 text-left">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
            <span className="text-amber-400">★ {currentGradeData.gradeBadge}</span>
            <span>{currentGradeData.steps.length} Steps</span>
          </div>
          <p className="text-xs font-semibold text-slate-200 line-clamp-1">
            {currentGradeData.missionTitleEn}
          </p>
          <p className="text-[11px] text-slate-400 line-clamp-1">
            {currentGradeData.missionTitleVi}
          </p>
        </div>

        {/* Enter Island Quest Action Button */}
        <button
          onClick={handleEnterClick}
          className="mt-4 w-full py-2.5 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-102 cursor-pointer active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${island.crystalHex} 0%, #0284c7 100%)`,
            boxShadow: `0 8px 20px ${island.glowRgba}`
          }}
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Vào Thám Hiểm</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
