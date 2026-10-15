import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, Flame, Timer, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { AdventureChallengeStage, GradeNumber } from '../../../data/gradePathwaysData';
import { soundEffects } from '../../../lib/soundEffects';

interface AdventureChallengeGameProps {
  gradeNum: GradeNumber;
  stages: AdventureChallengeStage[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const AdventureChallengeGame: React.FC<AdventureChallengeGameProps> = ({
  stages,
  onCompleteGame
}) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const stage = stages[currentStageIdx] || stages[0];

  const [timeLeft, setTimeLeft] = useState(stage.timerSeconds);
  const [timerActive, setTimerActive] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [totalStarsEarned, setTotalStarsEarned] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Timer countdown
  useEffect(() => {
    setTimeLeft(stage.timerSeconds);
    setTimerActive(true);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  }, [currentStageIdx, stage]);

  useEffect(() => {
    if (!timerActive || isAnswerSubmitted || isCompleted) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, timerActive, isAnswerSubmitted, isCompleted]);

  const handleTimeOut = () => {
    soundEffects.playWrong();
    setIsAnswerSubmitted(true);
    setStreak(0);
  };

  const handleSelectAnswer = (ans: number | string) => {
    if (isAnswerSubmitted) return;
    soundEffects.playClick();
    setSelectedAnswer(ans);
    setIsAnswerSubmitted(true);
    setTimerActive(false);

    const isCorrect = ans === stage.correctAnswer;
    if (isCorrect) {
      soundEffects.playCorrect();
      const bonusForStreak = streak * 5;
      const roundStars = stage.bonusStars + bonusForStreak;
      setTotalStarsEarned(prev => prev + roundStars);
      setStreak(prev => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playWrong();
      setStreak(0);
    }
  };

  const handleNextStage = () => {
    soundEffects.playClick();
    if (currentStageIdx + 1 < stages.length) {
      setCurrentStageIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(totalStarsEarned, stages.length * 30, totalStarsEarned);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-amber-400 shadow-xl animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-4xl shadow-md">
          🏆
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-amber-950">
            Adventure Mission Champion!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã vượt qua cả {stages.length} chặng thử thách phiêu lưu với tinh thần dũng cảm!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
            <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
            <span>+{totalStarsEarned} Stars Conquered!</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-300 text-rose-900 font-black text-sm">
            <Flame className="w-5 h-5 text-rose-500" />
            <span>Max Streak: {streak} Combos</span>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              setCurrentStageIdx(0);
              setStreak(0);
              setTotalStarsEarned(0);
              setIsCompleted(false);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay Adventure Sprint</span>
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === stage.correctAnswer;

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-amber-300 shadow-md space-y-5">
      {/* Top Bar with Timer & Streak */}
      <div className="flex items-center justify-between border-b border-amber-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase">
            Sprint Round {currentStageIdx + 1} of {stages.length}
          </span>
          <span className="text-xs text-slate-500 font-bold">
            {stage.stageNameEn}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Combo Flame */}
          {streak > 0 && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-black shadow-xs animate-bounce">
              <Flame className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{streak}x Combo!</span>
            </div>
          )}

          {/* Countdown Clock */}
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border ${
            timeLeft <= 5 ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse' : 'bg-slate-100 text-slate-700 border-slate-200'
          }`}>
            <Timer className="w-4 h-4" />
            <span>{timeLeft}s</span>
          </div>
        </div>
      </div>

      {/* Stage Mission Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Mission Briefing: {stage.stageNameVi}
        </div>
        <h4 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-snug">
          {stage.promptEn}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {stage.promptVi}
        </p>
      </div>

      {/* Options */}
      {stage.options && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stage.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isThisCorrect = idx === stage.correctAnswer;

            let btnStyle = 'bg-white border-slate-200 hover:border-amber-400 hover:scale-102';

            if (isAnswerSubmitted) {
              if (isThisCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300 shadow-sm';
              } else if (isSelected && !isThisCorrect) {
                btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-300 shadow-sm';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                disabled={isAnswerSubmitted}
                className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer shadow-xs flex flex-col items-center justify-center gap-2 min-h-[90px] font-black text-sm sm:text-base ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswerSubmitted && isThisCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                )}
                {isAnswerSubmitted && isSelected && !isThisCorrect && (
                  <XCircle className="w-4 h-4 text-rose-600" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Feedback Bar */}
      {isAnswerSubmitted && (
        <div className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'
        }`}>
          <div>
            <div className="font-black text-sm flex items-center gap-1.5">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Mission Conquered! +{stage.bonusStars} Stars</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Time or answer expired! Keep pushing forward!</span>
                </>
              )}
            </div>
            <p className="text-xs opacity-85 mt-0.5">
              Round {currentStageIdx + 1} finalized.
            </p>
          </div>

          <button
            onClick={handleNextStage}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span>{currentStageIdx + 1 < stages.length ? 'Next Sprint' : 'Claim Grand Trophy'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
