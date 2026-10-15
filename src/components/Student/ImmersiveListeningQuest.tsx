import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Play, 
  Square, 
  CheckCircle2, 
  AlertCircle, 
  Star, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Headphones,
  Compass,
  Award,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';

export interface ImmersiveListeningQuestProps {
  destinationName: string;
  destinationProvince: string;
  landmarkName?: string;
  landmarkImage: string;
  photoAttribution?: {
    author?: string;
    source?: string;
    license?: string;
    landmark?: string;
  };
  audioScriptEn: string;
  audioScriptVi?: string;
  audioTitleEn?: string;
  speakerRole?: string;
  questionEn: string;
  questionVi?: string;
  options: string[];
  correctIndex: number;
  explanationEn?: string;
  explanationVi?: string;
  gradeBadge?: string;
  avatarUrl?: string;
  avatarName?: string;
  onEarnStars?: (stars: number) => void;
  onContinue?: () => void;
}

export const ImmersiveListeningQuest: React.FC<ImmersiveListeningQuestProps> = ({
  destinationName,
  destinationProvince,
  landmarkName = 'Dragon Bridge (Cầu Rồng)',
  landmarkImage,
  photoAttribution,
  audioScriptEn,
  audioScriptVi,
  audioTitleEn = 'Tour Guide Live Broadcast',
  speakerRole = 'Captain Trang',
  questionEn,
  questionVi,
  options,
  correctIndex,
  explanationEn = 'The Dragon Bridge breathes real fire and spray water every Saturday and Sunday evening at 9:00 PM!',
  explanationVi = 'Cầu Rồng trình diễn phun lửa và phun nước vào đúng 21h00 các tối Thứ Bảy và Chủ Nhật hàng tuần!',
  gradeBadge = 'Grade 3 Explorer Mission',
  avatarUrl = '/assets/cute/captain_trang_clean.png',
  avatarName = 'Captain Trang',
  onEarnStars,
  onContinue
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [starsAwarded, setStarsAwarded] = useState(false);
  const [showHintTranscript, setShowHintTranscript] = useState(false);
  const [imgSrc, setImgSrc] = useState(landmarkImage || '/destinations/danang_dragon_bridge.jpg');

  // Sync image source if prop changes
  useEffect(() => {
    if (landmarkImage) {
      setImgSrc(landmarkImage);
    }
  }, [landmarkImage]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  // Play audio
  const handleTogglePlayAudio = (overrideSlow?: boolean) => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
      return;
    }

    const useSlow = overrideSlow !== undefined ? overrideSlow : isSlowMode;
    soundEffects.playClick();
    setIsPlaying(true);

    playEnglishSpeech(audioScriptEn, {
      slow: useSlow,
      pitch: 1.05, // Child-friendly warm pitch
      lang: 'en-GB', // Default British English standard
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false)
    });
  };

  const handleToggleSlowSpeed = () => {
    const nextSlow = !isSlowMode;
    setIsSlowMode(nextSlow);
    soundEffects.playClick();
    if (isPlaying) {
      stopSpeech();
      handleTogglePlayAudio(nextSlow);
    }
  };

  const handleSelectOption = (index: number) => {
    if (hasAnswered && isCorrect) return; // Already solved

    setSelectedOption(index);
    setHasAnswered(true);

    if (index === correctIndex) {
      setIsCorrect(true);
      soundEffects.playCorrect();
      soundEffects.playStarFanfare();

      if (!starsAwarded) {
        setStarsAwarded(true);
        if (onEarnStars) {
          onEarnStars(30);
        }
      }

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      setIsCorrect(false);
      soundEffects.playIncorrect();
    }
  };

  const handleTryAgain = () => {
    soundEffects.playClick();
    setSelectedOption(null);
    setHasAnswered(false);
    setIsCorrect(null);
  };

  // 4 Pastel color palettes for choices
  const optionThemes = [
    {
      bg: 'bg-sky-50/80 hover:bg-sky-100/90',
      border: 'border-sky-300 hover:border-sky-400',
      badgeBg: 'bg-sky-500 text-white',
      textColor: 'text-sky-950',
      glow: 'shadow-sky-200'
    },
    {
      bg: 'bg-purple-50/80 hover:bg-purple-100/90',
      border: 'border-purple-300 hover:border-purple-400',
      badgeBg: 'bg-purple-500 text-white',
      textColor: 'text-purple-950',
      glow: 'shadow-purple-200'
    },
    {
      bg: 'bg-amber-50/80 hover:bg-amber-100/90',
      border: 'border-amber-300 hover:border-amber-400',
      badgeBg: 'bg-amber-500 text-white',
      textColor: 'text-amber-950',
      glow: 'shadow-amber-200'
    },
    {
      bg: 'bg-emerald-50/80 hover:bg-emerald-100/90',
      border: 'border-emerald-300 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-950',
      glow: 'shadow-emerald-200'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. HERO LISTENING MISSION BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 p-5 sm:p-6 text-white shadow-xl shadow-indigo-200">
        {/* Decorative background glows & stars */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                <span>{gradeBadge}</span>
              </span>

              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Star className="w-3 h-3 fill-amber-950" />
                <span>+30 Stars Mission</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight drop-shadow-xs">
              Listening Quest: {destinationName}
            </h3>

            <div className="flex items-center gap-2 text-xs font-medium text-sky-100">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{destinationProvince} • Landmark: {landmarkName}</span>
            </div>
          </div>

          {/* Quick Score Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shrink-0">
            <Headphones className="w-5 h-5 text-amber-300" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-sky-200">Challenge</div>
              <div className="text-xs font-black text-white">Audio Comprehension</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DUAL-COLUMN INTERACTIVE ARENA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT COLUMN (5 cols): Authentic Destination Photography + Companion Avatar */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Authentic Destination Photograph Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-sky-100 bg-slate-900 group aspect-[4/3] sm:aspect-[16/11]">
            <img
              src={imgSrc}
              alt={landmarkName}
              onError={() => setImgSrc('/destinations/danang_dragon_bridge.jpg')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Scrim for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Landmark Label Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none">
              <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/20 text-white max-w-[85%]">
                <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  📍 Verified Landmark
                </div>
                <div className="text-xs font-bold truncate">
                  {landmarkName}
                </div>
              </div>

              {photoAttribution?.source && (
                <div className="text-[9px] text-white/70 bg-black/60 px-2 py-0.5 rounded-lg border border-white/10 shrink-0" title={photoAttribution.source}>
                  📸 Verified
                </div>
              )}
            </div>
          </div>

          {/* Explorer Companion Dialogue Box */}
          <div className="p-4 rounded-3xl bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 border-2 border-indigo-100 shadow-sm flex items-start gap-3.5">
            <div className="relative shrink-0">
              <img
                src={avatarUrl}
                alt={avatarName}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/cute/captain_trang_clean.png';
                }}
                className="w-14 h-14 rounded-2xl object-cover bg-white p-0.5 shadow-md border-2 border-white ring-2 ring-indigo-200"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                ✓
              </span>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-indigo-950 font-heading">
                  {speakerRole}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-200/60 text-indigo-800 font-bold">
                  Explorer Guide
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-snug font-medium">
                {hasAnswered && isCorrect
                  ? "🎉 Amazing listening skills, Explorer! You cracked the mission clue!"
                  : hasAnswered && !isCorrect
                  ? "💡 Don't worry! Click 'Try Again' and listen carefully to the exact time mentioned."
                  : isPlaying
                  ? "🎧 Shh! Listen to the announcement. What important detail can you hear?"
                  : "Tap the big 'Play Audio' button below to hear my secret tour guide report!"}
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (7 cols): Prominent Audio Engine + Question + 4 Big Colorful Answer Options */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5 bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-100 shadow-sm">
          
          {/* AUDIO ENGINE CENTERPIECE WITH WAVEFORM */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-sky-50/70 via-indigo-50/40 to-slate-50 border-2 border-sky-200/80 shadow-inner space-y-4">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-all ${
                  isPlaying 
                    ? 'bg-rose-500 shadow-rose-300 scale-105 animate-pulse' 
                    : 'bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-sky-200'
                }`}>
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-700">
                    Audio Broadcast
                  </span>
                  <h4 className="text-sm font-black text-slate-900 font-heading">
                    {audioTitleEn}
                  </h4>
                </div>
              </div>

              {/* Slow Pacing Speed Toggle */}
              <button
                type="button"
                onClick={handleToggleSlowSpeed}
                className={`px-3 py-1.5 rounded-xl border text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSlowMode
                    ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                title="Toggle Slow / Normal Speaking Pacing for Elementary Students"
              >
                <span>{isSlowMode ? '🐢 Slow (0.8x)' : '🐇 Normal'}</span>
              </button>
            </div>

            {/* ANIMATED SOUND WAVEFORM BAR */}
            <div className="flex items-center justify-center gap-1.5 h-10 px-4 bg-white/80 rounded-xl border border-sky-100">
              {[4, 8, 14, 22, 16, 26, 18, 28, 12, 20, 10, 6].map((barHeight, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 rounded-full transition-all duration-200 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-sky-500 to-indigo-600 animate-pulse'
                      : 'bg-slate-200'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(6, (barHeight * (0.8 + ((idx % 3) * 0.3))))}px` : '6px'
                  }}
                />
              ))}
              <span className="text-[11px] font-bold text-slate-500 ml-2">
                {isPlaying ? 'Broadcasting live audio...' : 'Audio Ready'}
              </span>
            </div>

            {/* ACTION BUTTONS: Big Play Audio + Replay */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleTogglePlayAudio()}
                className={`flex-1 py-3 px-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] ${
                  isPlaying
                    ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200'
                    : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-sky-300'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-4 h-4 fill-white" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Play Tour Guide Audio 🎧</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleTogglePlayAudio()}
                className="p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 transition-colors shadow-xs"
                title="Replay Audio"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* THE LISTENING QUESTION */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
              Quest Question:
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading leading-snug">
              ❓ {questionEn}
            </h4>
            {questionVi && (
              <p className="text-xs text-slate-500 font-medium italic">
                (🇻🇳 {questionVi})
              </p>
            )}
          </div>

          {/* 4 BIG COLORFUL ANSWER PODIUMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((option, idx) => {
              const theme = optionThemes[idx % optionThemes.length];
              const isSelected = selectedOption === idx;
              const isOptionCorrect = idx === correctIndex;
              const letter = String.fromCharCode(65 + idx); // A, B, C, D

              let buttonStyle = `${theme.bg} ${theme.border} ${theme.textColor}`;

              if (hasAnswered) {
                if (isOptionCorrect) {
                  buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 shadow-md';
                } else if (isSelected && !isOptionCorrect) {
                  buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950 opacity-90';
                } else {
                  buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={hasAnswered && isCorrect === true}
                  onClick={() => handleSelectOption(idx)}
                  className={`relative p-4 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] shadow-xs ${buttonStyle}`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-xs ${
                    hasAnswered && isOptionCorrect
                      ? 'bg-emerald-500 text-white'
                      : hasAnswered && isSelected && !isOptionCorrect
                      ? 'bg-rose-500 text-white'
                      : theme.badgeBg
                  }`}>
                    {hasAnswered && isOptionCorrect ? '✓' : letter}
                  </span>

                  <span className="flex-1 leading-snug">
                    {option}
                  </span>

                  {hasAnswered && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-bounce" />
                  )}
                  {hasAnswered && isSelected && !isOptionCorrect && (
                    <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK BANNER: CELEBRATION (CORRECT) OR ENCOURAGEMENT (INCORRECT) */}
          {hasAnswered && (
            <div className={`p-4 rounded-2xl border-2 animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-2 ${
              isCorrect
                ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/90 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-black text-sm">
                  {isCorrect ? (
                    <>
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>🎉 EXCELLENT EXPLORER! That is 100% correct!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                      <span>Not quite right yet! Listen closely again.</span>
                    </>
                  )}
                </div>

                {isCorrect && (
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-950" />
                    <span>+30 Stars Earned!</span>
                  </span>
                )}
              </div>

              {/* Explanations */}
              <div className="text-xs space-y-1">
                <p className="font-semibold text-slate-800">
                  {explanationEn}
                </p>
                {explanationVi && (
                  <p className="text-slate-600 italic">
                    (🇻🇳 {explanationVi})
                  </p>
                )}
              </div>

              {/* Actions: Try Again (if wrong) or Continue (if correct) */}
              <div className="pt-2 flex items-center justify-end gap-3">
                {!isCorrect ? (
                  <button
                    type="button"
                    onClick={handleTryAgain}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again (Thử lại nhé!)</span>
                  </button>
                ) : onContinue ? (
                  <button
                    type="button"
                    onClick={onContinue}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-102"
                  >
                    <span>Continue to Speaking Quest</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                ) : null}
              </div>
            </div>
          )}

          {/* TEACHER / HINT ACCORDION (OPTIONAL) */}
          <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setShowHintTranscript(!showHintTranscript)}
              className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" />
              <span>{showHintTranscript ? 'Hide Audio Script' : 'Xem nội dung bài nghe (Transcript)'}</span>
            </button>

            <span className="text-[10px] text-slate-400">
              Circular 27/2020 Elementary English Standards
            </span>
          </div>

          {showHintTranscript && (
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 space-y-1 animate-in fade-in duration-200">
              <div className="font-bold">📜 Audio Script Transcript:</div>
              <p className="font-medium italic">"{audioScriptEn}"</p>
              {audioScriptVi && (
                <p className="text-[11px] text-indigo-700">🇻🇳 {audioScriptVi}</p>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
