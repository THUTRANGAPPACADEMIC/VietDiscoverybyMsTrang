import React, { useState } from 'react';
import { Flame, Zap, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface FinalAdventureMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const FinalAdventureMechanic: React.FC<FinalAdventureMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const stage = question.metadata?.stage || 1;

  const handleSelect = (opt: string) => {
    if (disabled || selectedOption) return;

    soundEffects.playClick();
    const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedOption(opt);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(opt);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(opt, isCorrect);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      {/* Speed Sprint Stage Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-300 animate-bounce" />
            <span className="text-xs font-black uppercase tracking-wider text-amber-200">
              Championship Final Sprint • Stage #{stage}
            </span>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-xs">
            ⚡ 2X STARS COMBO
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-black leading-snug my-2">
          {question.prompt}
        </h4>

        <p className="text-xs text-rose-100 font-medium">
          {question.promptVi || 'Đưa ra đáp án chính xác trong thời gian nhanh nhất!'}
        </p>
      </div>

      {/* Action Options */}
      <div className="grid grid-cols-1 gap-3">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedOption === opt;
          const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
          const showSuccess = selectedOption && isCorrect;
          const showFailure = isSelected && !isCorrect;

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
                  : 'bg-white hover:bg-rose-50/50 border-slate-200 text-slate-800 hover:border-rose-400 hover:scale-101 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                  showSuccess ? 'bg-emerald-500 text-white' : showFailure ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  #{idx + 1}
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
