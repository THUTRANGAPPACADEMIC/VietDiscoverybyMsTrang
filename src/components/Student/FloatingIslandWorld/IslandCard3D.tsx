import React, { useState } from 'react';
import { FloatingIslandDef } from './floatingIslandData';
import { Island3DVisual } from './Island3DVisual';
import { soundEffects } from '../../../lib/soundEffects';
import { Sparkles, Star, ChevronRight } from 'lucide-react';

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
      className={`relative group cursor-pointer transition-all duration-300 transform ${island.floatDelay} ${
        isHovered ? '-translate-y-3 scale-[1.03]' : ''
      }`}
    >
      {/* 3D Island Glowing Pastel Aura */}
      <div
        className={`absolute -inset-2.5 rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none ${
          isSelected ? 'opacity-90' : ''
        }`}
        style={{
          background: `radial-gradient(circle, ${island.crystalHex}55 0%, transparent 75%)`
        }}
      />

      {/* Main Island Bright Frosted Glass Plinth Card */}
      <div
        className={`relative overflow-hidden rounded-[32px] p-4 sm:p-5 backdrop-blur-xl border-3 transition-all duration-300 flex flex-col items-center text-center bg-white/92 shadow-[0_12px_32px_rgba(101,200,255,0.22)] ${
          isSelected
            ? 'border-cyan-400 ring-4 ring-cyan-300/60 shadow-[0_16px_40px_rgba(6,182,212,0.35)] scale-[1.02]'
            : 'border-sky-200/80 hover:border-sky-300 hover:shadow-[0_16px_36px_rgba(101,200,255,0.3)]'
        }`}
      >
        {/* Top Header Pill & Star Reward */}
        <div className="w-full flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-xs">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: island.crystalHex }}
            />
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-900">
              {island.nameVi}
            </span>
          </div>

          {/* Reward Stars Pill */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100/95 border border-amber-300 text-amber-900 text-xs font-black shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>+{currentGradeData.starsReward}</span>
          </div>
        </div>

        {/* 3D Floating Island Artwork */}
        <div className="my-1 relative flex items-center justify-center w-full">
          <Island3DVisual
            islandId={island.id}
            size={185}
            isHovered={isHovered}
            isSelected={isSelected}
          />
        </div>

        {/* Island Titles */}
        <div className="space-y-0.5 w-full mt-1">
          <h3 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-heading">
            {island.nameVi}
          </h3>
          <p className="text-xs font-bold text-sky-700">
            {island.nameEn}
          </p>
        </div>

        {/* Mission Objectives for Selected Grade */}
        <div className="mt-2.5 w-full p-2.5 rounded-2xl bg-sky-50/90 border border-sky-200/70 text-left">
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold mb-0.5">
            <span className="text-amber-700 font-black">★ {currentGradeData.gradeBadge}</span>
            <span>{currentGradeData.steps.length} Câu hỏi</span>
          </div>
          <p className="text-xs font-bold text-slate-800 line-clamp-1">
            {currentGradeData.missionTitleVi}
          </p>
          <p className="text-[11px] text-slate-500 line-clamp-1">
            {currentGradeData.missionTitleEn}
          </p>
        </div>

        {/* Enter Island Quest Action Button */}
        <button
          onClick={handleEnterClick}
          className="mt-3 w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-102 active:scale-98 cursor-pointer bg-gradient-to-b from-[#4ade80] via-[#22c55e] to-[#16a34a] hover:from-[#22c55e] hover:to-[#15803d] border-b-2 border-[#15803d]"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-pulse" />
          <span>VÀO THÁM HIỂM</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
