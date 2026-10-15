import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { GradeNumber, GRADE_CONFIGS } from '../../data/gradePathwaysData';
import { soundEffects } from '../../lib/soundEffects';

interface GradePathwaySelectionProps {
  activeGradeNum?: GradeNumber;
  onSelectGrade: (gradeNum: GradeNumber) => void;
  className?: string;
}

export const GradePathwaySelection: React.FC<GradePathwaySelectionProps> = ({
  activeGradeNum,
  onSelectGrade,
  className = ''
}) => {
  // Global Sound Toggle State
  const [isSoundOn, setIsSoundOn] = useState(() => soundEffects.isSoundEnabled());

  useEffect(() => {
    const unsubscribe = soundEffects.subscribe((enabled) => {
      setIsSoundOn(enabled);
    });
    return unsubscribe;
  }, []);

  const handleToggleSound = () => {
    const next = soundEffects.toggleSound();
    setIsSoundOn(next);
  };

  const gradeList: GradeNumber[] = [1, 2, 3, 4, 5];

  const handleCardClick = (gradeNum: GradeNumber) => {
    soundEffects.playClick();
    onSelectGrade(gradeNum);
  };

  const handleKeyDown = (e: React.KeyboardEvent, gradeNum: GradeNumber) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(gradeNum);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      
      {/* Header bar: Section Title, Subtitle & Global Sound Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl animate-bounce-subtle select-none">🎯</span>
          <div>
            <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-blue-950 font-heading leading-tight">
              SELECT LEARNING PATHWAY (CHỌN KHỐI LỚP TRẢI NGHIỆM)
            </h2>
            <p className="text-[11px] sm:text-xs text-sky-800 font-medium">
              Chạm vào khối lớp để mở bảng điều khiển học tập & 7 trò chơi tương tác chuẩn Quốc gia
            </p>
          </div>
        </div>

        {/* Global Sound ON/OFF Toggle Pill */}
        <button
          onClick={handleToggleSound}
          aria-label={isSoundOn ? 'Tắt âm thanh hệ thống' : 'Bật âm thanh hệ thống'}
          className={`self-start sm:self-center px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 border shadow-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-sky-400 focus-visible:outline-none ${
            isSoundOn
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 hover:scale-105 active:scale-95'
              : 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100 hover:scale-105 active:scale-95'
          }`}
          title="Global Sound Toggle: Mute or Unmute all game & audio effects"
        >
          {isSoundOn ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Sound: ON 🔊</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-rose-600" />
              <span>Sound: OFF 🔇</span>
            </>
          )}
        </button>
      </div>

      {/* 5 Grade Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
        {gradeList.map((g) => {
          const cfg = GRADE_CONFIGS[g];
          const isSelected = activeGradeNum === g;

          return (
            <button
              key={g}
              type="button"
              role="button"
              tabIndex={0}
              aria-label={`Select ${cfg.title} - ${cfg.sub} learning pathway, route ${cfg.route}`}
              onClick={() => handleCardClick(g)}
              onKeyDown={(e) => handleKeyDown(e, g)}
              onMouseEnter={() => soundEffects.playHover()}
              className={`
                group relative p-3 sm:p-3.5 rounded-[26px] bg-gradient-to-r ${cfg.pillBg} border-2.5 ${cfg.borderStyle}
                text-left flex items-center justify-between gap-2.5 cursor-pointer select-none
                transform-gpu will-change-transform transition-all duration-300 ease-out
                hover:scale-[1.06] active:scale-95 touch-manipulation
                motion-reduce:hover:scale-100 motion-reduce:transition-none
                focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:outline-none
                ${isSelected 
                  ? `ring-4 ring-offset-2 ring-sky-400 scale-[1.04] shadow-lg shadow-sky-300/40` 
                  : 'shadow-sm hover:shadow-xl hover:shadow-sky-200/50 opacity-95 hover:opacity-100'
                }
              `}
              style={{
                boxShadow: isSelected 
                  ? `0 10px 25px ${cfg.glowColor}` 
                  : undefined
              }}
            >
              {/* Golden Crown perched on Grade 3 */}
              {cfg.hasCrown && (
                <div className="absolute -top-3.5 left-2 z-20 pointer-events-none drop-shadow-md animate-bounce-subtle">
                  <img
                    src="/assets/cute/golden_crown_clean.png"
                    alt="Golden Crown"
                    className="w-7 h-auto object-contain"
                  />
                </div>
              )}

              {/* Sparkle Twinkle Badge */}
              <div className="absolute top-1 right-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-300 animate-sparkle" />
              </div>

              {/* Left Circular Badge with Grade Icon */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 shadow-xs flex items-center justify-center text-2xl shrink-0 group-hover:scale-[1.15] transition-transform duration-300 ease-out border border-white"
                >
                  <span className="select-none">{cfg.icon}</span>
                </div>

                {/* Grade Info */}
                <div className="min-w-0">
                  {/* Upper CEFR Badge */}
                  <div className="inline-block px-1.5 py-0.5 rounded-full bg-white/90 text-[9px] font-black uppercase tracking-tight text-slate-800 shadow-2xs leading-none mb-1 border border-black/5 truncate max-w-full">
                    {cfg.badge}
                  </div>

                  {/* Title */}
                  <div className={`text-sm sm:text-base font-black font-heading leading-tight truncate ${cfg.textColor}`}>
                    {cfg.title}
                  </div>

                  {/* Subtitle */}
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-700/90 leading-tight truncate">
                    {cfg.sub}
                  </div>
                </div>
              </div>

              {/* Right Arrow Circle */}
              <div 
                className={`w-6 h-6 rounded-full ${cfg.arrowBg} shadow-xs flex items-center justify-center text-xs font-black shrink-0 group-hover:translate-x-1 transition-transform duration-300`}
              >
                ›
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
