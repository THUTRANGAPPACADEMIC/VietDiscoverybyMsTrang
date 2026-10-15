import React, { useState, useEffect } from 'react';
import { Trophy, Sparkles, CheckCircle2, XCircle, Clock, HelpCircle, Flame } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface ChampionQuizShowMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const ChampionQuizShowMechanic: React.FC<ChampionQuizShowMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  // Timer countdown
  useEffect(() => {
    if (selectedOption || disabled) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedOption, disabled]);

  const handleTimeOut = () => {
    soundEffects.playIncorrect();
    onAnswer('', false);
  };

  const handleUseFiftyFifty = () => {
    if (usedFiftyFifty || selectedOption || disabled) return;
    soundEffects.playClick();
    setUsedFiftyFifty(true);

    const wrongOptions = question.answerOptions.filter(
      opt => opt.toLowerCase().trim() !== question.correctAnswer.toLowerCase().trim()
    );
    // Eliminate 2 wrong options if possible, or 1
    const toEliminate = wrongOptions.slice(0, 2);
    setEliminatedOptions(toEliminate);
  };

  const handleUseHint = () => {
    if (usedHint || selectedOption || disabled) return;
    soundEffects.playClick();
    setUsedHint(true);
    setShowHint(true);
  };

  const handleSelect = (option: string) => {
    if (disabled || selectedOption) return;

    soundEffects.playClick();
    const isCorrect = option.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedOption(option);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(option);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(option, isCorrect);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Quiz Show Stage Spotlight Header */}
      <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 border-3 border-amber-400/60 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400 animate-bounce" />
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 block">
                English Champion Grand Stage
              </span>
              <span className="text-[10px] text-slate-300">
                Studio Round • 500 Stars Prize Ladder
              </span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-bold text-xs ${
            timeLeft <= 10 ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-amber-300 border border-amber-500/40'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Lifeline Buttons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={handleUseFiftyFifty}
            disabled={usedFiftyFifty || selectedOption !== null || disabled}
            className={`px-3 py-1.5 rounded-full text-xs font-black border transition-all cursor-pointer ${
              usedFiftyFifty ? 'bg-slate-800 text-slate-500 border-slate-700 opacity-50' : 'bg-amber-500/20 text-amber-300 border-amber-400 hover:bg-amber-500 hover:text-white'
            }`}
          >
            50:50 Lifeline
          </button>

          <button
            onClick={handleUseHint}
            disabled={usedHint || selectedOption !== null || disabled}
            className={`px-3 py-1.5 rounded-full text-xs font-black border transition-all cursor-pointer ${
              usedHint ? 'bg-slate-800 text-slate-500 border-slate-700 opacity-50' : 'bg-sky-500/20 text-sky-300 border-sky-400 hover:bg-sky-500 hover:text-white'
            }`}
          >
            💡 Hint Lifeline
          </button>
        </div>

        {/* Question Text */}
        <h4 className="text-base sm:text-lg font-black text-white leading-relaxed">
          {question.prompt}
        </h4>

        {showHint && (
          <div className="mt-3 p-3 rounded-2xl bg-sky-950/80 border border-sky-400/50 text-xs text-sky-200 animate-in fade-in">
            💡 Gợi ý cô Trang: {question.explanationVi || question.promptVi}
          </div>
        )}
      </div>

      {/* 4 Multi-Choice Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {question.answerOptions.map((opt, idx) => {
          const isEliminated = eliminatedOptions.includes(opt);
          const isSelected = selectedOption === opt;
          const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
          const showSuccess = selectedOption && isCorrect;
          const showFailure = isSelected && !isCorrect;

          const letter = String.fromCharCode(65 + idx);

          if (isEliminated) {
            return (
              <div
                key={`elim-${opt}`}
                className="p-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 opacity-30 text-xs text-slate-400 flex items-center justify-center font-bold"
              >
                <s>{letter}. {opt}</s>
              </div>
            );
          }

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelect(opt)}
              disabled={disabled || selectedOption !== null}
              className={`p-4 rounded-2xl border-2 font-bold text-sm sm:text-base transition-all transform cursor-pointer flex items-center justify-between text-left ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                  : 'bg-white hover:bg-amber-50/50 border-slate-200 text-slate-800 hover:border-amber-400 hover:scale-101 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 ${
                  showSuccess ? 'bg-emerald-500 text-white' : showFailure ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {letter}
                </span>
                <span>{opt}</span>
              </div>

              {showSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
              {showFailure && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
