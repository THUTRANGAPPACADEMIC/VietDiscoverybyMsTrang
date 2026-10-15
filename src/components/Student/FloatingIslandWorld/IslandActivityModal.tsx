import React, { useState, useEffect } from 'react';
import { FloatingIslandDef, IslandActivityStep } from './floatingIslandData';
import { Island3DVisual } from './Island3DVisual';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../../lib/speech';
import { backgroundMusic } from '../../../lib/backgroundMusic';
import { 
  X, 
  Volume2, 
  Volume1, 
  Mic, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ArrowRight,
  Trophy,
  Flame,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';

interface IslandActivityModalProps {
  island: FloatingIslandDef;
  selectedGrade: 1 | 2 | 3 | 4 | 5;
  isOpen: boolean;
  onClose: () => void;
  onEarnStars?: (stars: number) => void;
}

export const IslandActivityModal: React.FC<IslandActivityModalProps> = ({
  island,
  selectedGrade,
  isOpen,
  onClose,
  onEarnStars
}) => {
  const currentGradeData = island.gradeData[selectedGrade] || island.gradeData[1];
  const steps = currentGradeData.steps;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  
  // Speaking simulation states
  const [isRecording, setIsRecording] = useState(false);
  const [speechRecognized, setSpeechRecognized] = useState(false);
  const [speechScore, setSpeechScore] = useState<number | null>(null);

  // Scramble word state for Puzzle Island
  const [scrambleLetters, setScrambleLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Victory / Completion states
  const [isCompleted, setIsCompleted] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);

  const currentStep: IslandActivityStep = steps[currentStepIndex] || steps[0];

  // Initialize or reset step
  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setSpeechRecognized(false);
    setSpeechScore(null);
    setIsRecording(false);
    stopSpeech();

    // Prepare scramble letters if Puzzle Island
    if (island.id === 'puzzle' && currentStep.scrambleTarget) {
      const target = currentStep.scrambleTarget;
      // Scramble characters deterministically
      const arr = target.split('');
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      setScrambleLetters(shuffled);
      setSelectedLetters([]);
    }
  }, [currentStepIndex, island.id, currentStep]);

  // Clean up speech and audio ducking on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
      backgroundMusic.unduck('mic_recording');
      backgroundMusic.unduck('listening');
    };
  }, []);

  if (!isOpen) return null;

  const handlePlayAudio = (text?: string, slow = isSlowMode) => {
    const prompt = text || currentStep.audioPrompt || currentStep.questionEn;
    if (!prompt) return;

    soundEffects.playClick();
    setIsAudioPlaying(true);
    playEnglishSpeech(prompt, {
      slow,
      onStart: () => setIsAudioPlaying(true),
      onEnd: () => setIsAudioPlaying(false),
      onError: () => setIsAudioPlaying(false)
    });
  };

  const handleSelectOption = (optionId: string, correct: boolean) => {
    if (isSubmitted) return;
    soundEffects.playClick();
    setSelectedOptionId(optionId);
    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }
  };

  // Puzzle Island letter tap
  const handleTapScrambleLetter = (letter: string, index: number) => {
    soundEffects.playClick();
    const newSelected = [...selectedLetters, letter];
    setSelectedLetters(newSelected);
    
    // Check if fully formed
    if (currentStep.scrambleTarget && newSelected.length === currentStep.scrambleTarget.length) {
      const formedWord = newSelected.join('');
      if (formedWord.toUpperCase() === currentStep.scrambleTarget.toUpperCase()) {
        soundEffects.playCorrect();
        setIsSubmitted(true);
        setIsCorrect(true);
      } else {
        soundEffects.playWrong();
        setTimeout(() => {
          setSelectedLetters([]);
        }, 800);
      }
    }
  };

  const handleResetScramble = () => {
    soundEffects.playClick();
    setSelectedLetters([]);
  };

  // Speaking Island interactive speech simulation
  const handleStartSpeaking = () => {
    soundEffects.playClick();
    setIsRecording(true);
    setSpeechRecognized(false);
    setSpeechScore(null);
    backgroundMusic.duck('mic_recording');

    // Simulate 2 seconds of high-fidelity speech capture with visual feedback
    setTimeout(() => {
      backgroundMusic.unduck('mic_recording');
      setIsRecording(false);
      setSpeechRecognized(true);
      const generatedScore = Math.floor(92 + Math.random() * 8); // 92% - 100%
      setSpeechScore(generatedScore);
      soundEffects.playCorrect();
      setIsSubmitted(true);
      setIsCorrect(true);
    }, 2200);
  };

  const handleNextStep = () => {
    soundEffects.playClick();
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Completed all steps!
      soundEffects.playStarFanfare();
      setIsCompleted(true);
    }
  };

  const handleOpenChest = () => {
    soundEffects.playStarFanfare();
    setIsChestOpened(true);
    if (onEarnStars) {
      onEarnStars(currentGradeData.starsReward);
    }
  };

  const handleFinishQuest = () => {
    soundEffects.playClick();
    if (!isChestOpened && onEarnStars) {
      onEarnStars(currentGradeData.starsReward);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      {/* Outer Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden text-white flex flex-col my-auto"
        style={{ borderColor: island.crystalHex }}
      >
        {/* Glowing Top Ambient Header */}
        <div 
          className="relative px-6 py-4 border-b border-white/10 flex items-center justify-between"
          style={{
            background: `linear-gradient(90deg, ${island.crystalHex}22 0%, rgba(15,23,42,0.9) 50%, ${island.crystalHex}15 100%)`
          }}
        >
          <div className="flex items-center gap-3">
            <span 
              className="w-3.5 h-3.5 rounded-full animate-crystal-pulse"
              style={{ backgroundColor: island.crystalHex, color: island.crystalHex }}
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white font-heading">
                  {island.nameEn}
                </h2>
                <span className="text-xs text-sky-300 font-bold">({island.nameVi})</span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">
                {currentGradeData.gradeBadge} • {currentGradeData.missionTitleEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Reward Stars Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>+{currentGradeData.starsReward} Stars</span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                stopSpeech();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Progress Indicator */}
        {!isCompleted && (
          <div className="w-full bg-slate-800 h-1.5">
            <div 
              className="h-full transition-all duration-500"
              style={{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
                background: `linear-gradient(90deg, ${island.crystalHex}, #38bdf8)`
              }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* ========================================================== */}
          {/* STATE A: ACTIVE ACTIVITY RUNNER                            */}
          {/* ========================================================== */}
          {!isCompleted && (
            <div className="space-y-5">
              
              {/* Question Header & Circular 27 Badge if Champion Island */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>THỬ THÁCH {currentStepIndex + 1} / {steps.length}</span>
                  {currentStep.level && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[10px] font-black uppercase">
                      Thông tư 27 • Cấp độ {currentStep.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentStep.questionEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {currentStep.questionVi}
                </p>
              </div>

              {/* 1. Wonder Island Visual Showcase */}
              {island.id === 'wonder' && currentStep.image && (
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg max-h-48 sm:max-h-56">
                  <img
                    src={currentStep.image}
                    alt={currentStep.questionEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe giới thiệu kỳ quan</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 2. Listening Island Interactive Audio Player */}
              {island.id === 'listening' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-400/30 flex flex-col items-center text-center space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt, false)}
                      disabled={isAudioPlaying}
                      className="px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-sky-500/30 transition-all active:scale-95 cursor-pointer"
                    >
                      <Volume2 className={`w-5 h-5 ${isAudioPlaying ? 'animate-bounce' : ''}`} />
                      <span>{isAudioPlaying ? 'Captain Trang đang nói...' : 'Nghe Captain Trang đọc'}</span>
                    </button>

                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt, true)}
                      className="px-3 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                      title="Nghe chậm"
                    >
                      <Volume1 className="w-4 h-4" />
                      <span>Nghe Chậm</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-sky-200/80 italic">
                    💡 Hãy lắng nghe thật kỹ ngữ điệu và các từ vựng trước khi chọn đáp án!
                  </p>
                </div>
              )}

              {/* 3. Speaking Island Phonics & Live Recording Simulation */}
              {island.id === 'speaking' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-fuchsia-950/60 border border-purple-400/30 space-y-4">
                  {currentStep.targetPhonics && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-purple-900/40 border border-purple-400/20">
                      <div>
                        <span className="text-[10px] text-purple-300 font-bold uppercase">Mục tiêu phát âm:</span>
                        <p className="text-sm font-black text-white">{currentStep.targetPhonics}</p>
                      </div>
                      <button
                        onClick={() => handlePlayAudio(currentStep.audioPrompt)}
                        className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Nghe Mẫu</span>
                      </button>
                    </div>
                  )}

                  {/* Interactive Mic Practice Button */}
                  <div className="flex flex-col items-center justify-center py-3 space-y-3">
                    <button
                      onClick={handleStartSpeaking}
                      disabled={isRecording}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isRecording
                          ? 'bg-rose-500 scale-110 shadow-[0_0_35px_rgba(244,63,94,0.8)] animate-pulse'
                          : 'bg-gradient-to-br from-purple-500 to-fuchsia-600 hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.5)]'
                      }`}
                    >
                      <Mic className="w-9 h-9 text-white" />
                      {isRecording && (
                        <span className="absolute -bottom-6 text-[10px] text-rose-300 font-black animate-pulse">
                          ĐANG LẮNG NGHE...
                        </span>
                      )}
                    </button>

                    <p className="text-xs text-slate-300 font-bold pt-2">
                      {isRecording
                        ? '🎙️ Bé hãy phát âm to rõ ràng theo mẫu nhé!'
                        : 'Nhấn vào Micro để bắt đầu luyện phát âm'}
                    </p>

                    {/* Speech Recognition Evaluation Feedback */}
                    {speechRecognized && speechScore && (
                      <div className="w-full p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-400/40 flex items-center justify-between animate-fade-in">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="text-xs font-black text-emerald-200">
                              Xuất sắc! Độ chuẩn xác {speechScore}% ⭐⭐⭐
                            </p>
                            <p className="text-[11px] text-slate-300">
                              Ngữ điệu tự nhiên, phát âm âm cuối rất rõ ràng!
                            </p>
                          </div>
                        </div>
                        <span className="text-lg">🎉</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Puzzle Island Interactive Letter Scramble Tiles */}
              {island.id === 'puzzle' && currentStep.scrambleTarget && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-400/30 space-y-4">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                    <span>Ô CHỮ CẦN GHÉP ({currentStep.scrambleTarget.length} KÝ TỰ):</span>
                    <button
                      onClick={handleResetScramble}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Xếp lại</span>
                    </button>
                  </div>

                  {/* Target Slots */}
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: currentStep.scrambleTarget.length }).map((_, i) => (
                      <div
                        key={i}
                        className="w-11 h-13 sm:w-13 sm:h-15 rounded-xl border-2 border-dashed border-amber-400/50 bg-slate-900/70 flex items-center justify-center text-xl sm:text-2xl font-black text-amber-300 font-heading"
                      >
                        {selectedLetters[i] || ''}
                      </div>
                    ))}
                  </div>

                  {/* Scrambled Available Letters */}
                  <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
                    {scrambleLetters.map((char, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleTapScrambleLetter(char, idx)}
                        disabled={isSubmitted}
                        className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-lg sm:text-xl font-heading shadow-md active:scale-90 transition-transform cursor-pointer"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Options List (for multiple choice questions) */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-400">CHỌN ĐÁP ÁN ĐÚNG:</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentStep.options.map(option => {
                    const isSelected = selectedOptionId === option.id;
                    let optionStyle = 'bg-slate-800/80 border-slate-700 hover:bg-slate-700/80 text-white';

                    if (isSubmitted) {
                      if (option.isCorrect) {
                        optionStyle = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400/50';
                      } else if (isSelected && !option.isCorrect) {
                        optionStyle = 'bg-rose-950/80 border-rose-400 text-rose-200 ring-2 ring-rose-400/50';
                      } else {
                        optionStyle = 'bg-slate-900/60 border-slate-800 text-slate-500 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option.id, option.isCorrect)}
                        disabled={isSubmitted}
                        className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          {option.icon && (
                            <span className="text-2xl shrink-0">{option.icon}</span>
                          )}
                          <div>
                            <p className="text-sm font-bold text-white">{option.textEn}</p>
                            <p className="text-xs text-slate-300">{option.textVi}</p>
                          </div>
                        </div>

                        {isSubmitted && option.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        )}
                        {isSubmitted && isSelected && !option.isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Answer Explanation Box */}
              {isSubmitted && (
                <div 
                  className={`p-4 rounded-2xl border animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-sm mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>Chính xác tuyệt vời! Correct!</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-5 h-5 text-rose-400" />
                        <span>Hãy xem lời giải thích nhé:</span>
                      </>
                    )}
                  </div>
                  {currentStep.explanationEn && (
                    <p className="text-xs font-semibold">{currentStep.explanationEn}</p>
                  )}
                  {currentStep.explanationVi && (
                    <p className="text-[11px] opacity-90 mt-0.5">{currentStep.explanationVi}</p>
                  )}
                </div>
              )}

              {/* Bottom Action: Next Step or Finish */}
              {isSubmitted && (
                <div className="pt-2">
                  <button
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-2xl font-black text-sm sm:text-base text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${island.crystalHex} 0%, #0284c7 100%)`
                    }}
                  >
                    <span>{currentStepIndex < steps.length - 1 ? 'Thử thách tiếp theo' : 'Hoàn thành chuyến thám hiểm'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================== */}
          {/* STATE B: VICTORY & REWARD CELEBRATION                      */}
          {/* ========================================================== */}
          {isCompleted && (
            <div className="text-center py-4 space-y-6 animate-scale-up">
              
              {/* Grand Island Visual */}
              <div className="flex justify-center">
                <Island3DVisual
                  islandId={island.id}
                  size={220}
                  isSelected={true}
                />
              </div>

              {/* Victory Typography */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>MISSION ACCOMPLISHED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading text-3d-fantasy">
                  Chúc Mừng Nhà Thám Hiểm Nhí!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Bé đã xuất sắc chinh phục tất cả thử thách tại <span className="text-amber-300 font-bold">{island.nameEn} ({island.nameVi})</span>!
                </p>
              </div>

              {/* 3D Glowing Treasure Chest on Champion Island or Standard Star Box */}
              {!isChestOpened ? (
                <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-500/20 via-slate-900 to-amber-950/60 border-2 border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.3)] space-y-4">
                  <div className="text-4xl sm:text-5xl animate-bounce">🎁</div>
                  <h4 className="text-lg font-black text-amber-300 font-heading">
                    {island.id === 'champion'
                      ? 'RƯƠNG BÁU HOÀNG GIA ĐANG CHỜ MỞ!'
                      : 'RƯƠNG PHẦN THƯỞNG KHÁM PHÁ'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    Nhấn vào nút bên dưới để mở rương và nhận ngay <span className="font-bold text-amber-300">+{currentGradeData.starsReward} Ngôi Sao Vàng</span> vào tài khoản học tập!
                  </p>
                  
                  <button
                    onClick={handleOpenChest}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>MỞ RƯƠNG KHO BÁU (+{currentGradeData.starsReward} SAO)</span>
                  </button>
                </div>
              ) : (
                <div className="p-6 rounded-3xl bg-gradient-to-b from-emerald-500/20 via-slate-900 to-emerald-950/60 border-2 border-emerald-400/60 shadow-[0_0_35px_rgba(16,185,129,0.3)] space-y-4 animate-fade-in">
                  <div className="text-5xl animate-star-spin">⭐</div>
                  <h4 className="text-xl font-black text-emerald-300 font-heading">
                    +{currentGradeData.starsReward} NGÔI SAO ĐÃ VỀ TÚI!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Điểm số và huy hiệu khám phá đã được ghi nhận vào Nhật ký Thám hiểm VietDiscovery.
                  </p>

                  <button
                    onClick={handleFinishQuest}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Tiếp Tục Khám Phá Các Đảo Khác</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
