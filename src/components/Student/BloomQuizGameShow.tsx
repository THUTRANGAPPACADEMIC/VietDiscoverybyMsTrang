import React, { useState } from 'react';
import { 
  Award, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw,
  Trophy,
  HelpCircle,
  Zap,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion, BloomLevel } from '../../types';
import { soundEffects } from '../../lib/soundEffects';

export interface BloomQuizGameShowProps {
  questions: QuizQuestion[];
  destinationName: string;
  destinationProvince: string;
  destinationImage: string;
  onCompleteQuiz: (scorePercent: number, starsEarned: number) => void;
  avatarUrl?: string;
  avatarName?: string;
}

export const BloomQuizGameShow: React.FC<BloomQuizGameShowProps> = ({
  questions,
  destinationName,
  destinationProvince,
  destinationImage,
  onCompleteQuiz,
  avatarUrl = '/assets/cute/captain_trang_clean.png',
  avatarName = 'Captain Trang'
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [hasValidated, setHasValidated] = useState<Record<number, boolean>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [imgSrc, setImgSrc] = useState(destinationImage || '/destinations/danang_dragon_bridge.jpg');

  const currentQ = questions[currentIdx] || questions[0];
  const totalQuestions = questions.length;
  const currentSelected = selectedAnswers[currentIdx];
  const isCurrentValidated = hasValidated[currentIdx];

  // Helper for Bloom level styling
  const getBloomBadge = (level?: BloomLevel) => {
    switch (level) {
      case 'Remember':
        return {
          title: 'Remember • Nhận biết',
          bg: 'bg-amber-100 text-amber-900 border-amber-300'
        };
      case 'Understand':
        return {
          title: 'Understand • Thông hiểu',
          bg: 'bg-sky-100 text-sky-900 border-sky-300'
        };
      case 'Apply':
        return {
          title: 'Apply • Vận dụng',
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
        };
      case 'Analyze':
        return {
          title: 'Analyze • Phân tích',
          bg: 'bg-purple-100 text-purple-900 border-purple-300'
        };
      default:
        return {
          title: 'Elementary Bloom Quest',
          bg: 'bg-slate-100 text-slate-800 border-slate-300'
        };
    }
  };

  const handleSelectOption = (optIdx: number) => {
    if (isCurrentValidated) return; // Already validated for this question

    soundEffects.playClick();
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
    setHasValidated(prev => ({ ...prev, [currentIdx]: true }));

    const isCorrect = optIdx === currentQ.correctIndex;
    if (isCorrect) {
      soundEffects.playCorrect();
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    soundEffects.playClick();
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(idx => idx + 1);
    } else {
      // Calculate final score
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctIndex) {
          correctCount++;
        }
      });
      const percent = Math.round((correctCount / totalQuestions) * 100);
      setIsQuizCompleted(true);

      soundEffects.playStarFanfare();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });

      onCompleteQuiz(percent, 50);
    }
  };

  const handlePrevQuestion = () => {
    soundEffects.playClick();
    if (currentIdx > 0) {
      setCurrentIdx(idx => idx - 1);
    }
  };

  // 4 Game Show Podium Color Palettes
  const podiumThemes = [
    {
      bg: 'bg-amber-50/90 hover:bg-amber-100',
      border: 'border-amber-300 hover:border-amber-400',
      badgeBg: 'bg-amber-500 text-white',
      textColor: 'text-amber-950',
      glow: 'shadow-amber-200'
    },
    {
      bg: 'bg-sky-50/90 hover:bg-sky-100',
      border: 'border-sky-300 hover:border-sky-400',
      badgeBg: 'bg-sky-500 text-white',
      textColor: 'text-sky-950',
      glow: 'shadow-sky-200'
    },
    {
      bg: 'bg-emerald-50/90 hover:bg-emerald-100',
      border: 'border-emerald-300 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-950',
      glow: 'shadow-emerald-200'
    },
    {
      bg: 'bg-rose-50/90 hover:bg-rose-100',
      border: 'border-rose-300 hover:border-rose-400',
      badgeBg: 'bg-rose-500 text-white',
      textColor: 'text-rose-950',
      glow: 'shadow-rose-200'
    }
  ];

  // VICTORY SUMMARY SCREEN
  if (isQuizCompleted) {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correctCount++;
    });
    const percent = Math.round((correctCount / totalQuestions) * 100);

    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-50 via-white to-purple-50 border-3 border-amber-300 text-center space-y-6 shadow-xl animate-in zoom-in-95 duration-300">
        
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-xl shadow-amber-200 animate-bounce">
          <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-amber-200 text-amber-900 font-black text-xs uppercase tracking-wider">
            Game Show Victory Ceremony
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            {percent >= 80 ? '🌟 Grand Champion Explorer!' : '🎉 Well Done, Explorer!'}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            You scored <strong className="text-slate-900 font-black">{correctCount} / {totalQuestions}</strong> correct answers ({percent}%) in the {destinationName} Bloom Arena!
          </p>
        </div>

        {/* Star Rating Display */}
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3].map(starNum => {
            const isEarned = (percent >= 33 && starNum === 1) || (percent >= 66 && starNum <= 2) || (percent >= 90 && starNum <= 3);
            return (
              <div
                key={starNum}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all ${
                  isEarned
                    ? 'bg-amber-400 text-amber-950 scale-110'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                <Star className="w-7 h-7 fill-current" />
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300 text-amber-950 font-black text-sm max-w-sm mx-auto shadow-xs">
          ⭐ +50 Destination Adventure Stars Awarded!
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onCompleteQuiz(percent, 50)}
            className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm shadow-xl transition-all cursor-pointer transform hover:scale-105"
          >
            Complete Lesson & Return to Map 🗺️
          </button>
        </div>

      </div>
    );
  }

  const bloomMeta = getBloomBadge(currentQ.bloomLevel);

  return (
    <div className="space-y-6">
      
      {/* 1. TOP GAME SHOW SCOREBOARD BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 p-5 sm:p-6 text-white shadow-xl shadow-purple-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 border border-white/25">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>Bloom Quiz Game Show</span>
              </span>

              <span className={`px-3 py-1 rounded-full font-bold text-xs border ${bloomMeta.bg}`}>
                {bloomMeta.title}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight drop-shadow-xs">
              {destinationName} Arena: Question {currentIdx + 1} of {totalQuestions}
            </h3>

            <p className="text-xs text-purple-100">
              Answer accurately to prove your mastery of {destinationProvince}!
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shrink-0">
            <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-purple-200">Grand Prize</div>
              <div className="text-xs font-black text-white">+50 Stars</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. QUESTION SCREEN + 4 COLORFUL ANSWER PODIUMS */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-100 shadow-sm space-y-6">
        
        {/* Question Header Card with Landmark Thumbnail */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50/70 via-indigo-50/50 to-sky-50/50 border border-indigo-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white bg-slate-900">
            <img
              src={imgSrc}
              alt={destinationName}
              onError={() => setImgSrc('/destinations/danang_dragon_bridge.jpg')}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1 flex-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700">
              Game Show Challenge:
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading leading-snug">
              ❓ {currentQ.questionEn}
            </h4>
            {currentQ.questionVi && (
              <p className="text-xs text-slate-500 font-medium italic">
                (🇻🇳 {currentQ.questionVi})
              </p>
            )}
          </div>
        </div>

        {/* 4 Large Colorful Game-Show Podiums */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {currentQ.options.map((option, idx) => {
            const theme = podiumThemes[idx % podiumThemes.length];
            const isSelected = currentSelected === idx;
            const isOptionCorrect = idx === currentQ.correctIndex;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D

            let buttonClass = `${theme.bg} ${theme.border} ${theme.textColor}`;

            if (isCurrentValidated) {
              if (isOptionCorrect) {
                buttonClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 shadow-md';
              } else if (isSelected && !isOptionCorrect) {
                buttonClass = 'bg-rose-50 border-rose-400 text-rose-950 opacity-90';
              } else {
                buttonClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isCurrentValidated}
                onClick={() => handleSelectOption(idx)}
                className={`relative p-4 rounded-2xl border-2 text-left font-bold text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] shadow-xs ${buttonClass}`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-xs ${
                  isCurrentValidated && isOptionCorrect
                    ? 'bg-emerald-500 text-white'
                    : isCurrentValidated && isSelected && !isOptionCorrect
                    ? 'bg-rose-500 text-white'
                    : theme.badgeBg
                }`}>
                  {isCurrentValidated && isOptionCorrect ? '✓' : letter}
                </span>

                <span className="flex-1 leading-snug">
                  {option}
                </span>

                {isCurrentValidated && isOptionCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-bounce" />
                )}
                {isCurrentValidated && isSelected && !isOptionCorrect && (
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* FEEDBACK & EXPLANATION BANNER */}
        {isCurrentValidated && (
          <div className={`p-4 rounded-2xl border-2 animate-in fade-in duration-200 space-y-2 ${
            currentSelected === currentQ.correctIndex
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
              : 'bg-rose-50/90 border-rose-300 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-black text-sm">
              {currentSelected === currentQ.correctIndex ? (
                <>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>Correct Answer! You earned arena points!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>That's okay! Here is the verified answer:</span>
                </>
              )}
            </div>

            {/* Bilingual Explanation */}
            <div className="text-xs space-y-1">
              {currentQ.explanationEn && (
                <p className="font-semibold text-slate-800">
                  {currentQ.explanationEn}
                </p>
              )}
              {currentQ.explanationVi && (
                <p className="text-slate-600 italic">
                  (🇻🇳 {currentQ.explanationVi})
                </p>
              )}
            </div>
          </div>
        )}

        {/* STEP CONTROLS */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <button
            type="button"
            disabled={currentIdx === 0}
            onClick={handlePrevQuestion}
            className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentIdx === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1.5">
            {questions.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIdx
                    ? 'bg-purple-600 w-6'
                    : hasValidated[i]
                    ? 'bg-emerald-400'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            disabled={!isCurrentValidated}
            onClick={handleNextQuestion}
            className={`px-5 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 shadow-sm transition-all ${
              !isCurrentValidated
                ? 'opacity-50 cursor-not-allowed bg-slate-300 text-slate-500'
                : 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer transform hover:scale-102'
            }`}
          >
            <span>{currentIdx < totalQuestions - 1 ? 'Next Question' : 'Complete Arena 🏆'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>

    </div>
  );
};
