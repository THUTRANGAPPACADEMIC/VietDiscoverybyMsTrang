import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface VocabularyMazeMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const VocabularyMazeMechanic: React.FC<VocabularyMazeMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedGate, setSelectedGate] = useState<string | null>(null);

  const handleGateSelect = (gateWord: string) => {
    if (disabled || selectedGate) return;

    soundEffects.playClick();
    playEnglishSpeech(gateWord, { slow: true });

    const isCorrect = gateWord.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedGate(gateWord);

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(gateWord, isCorrect);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      {/* Maze Map Visualization */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-5 border-2 border-indigo-400/40 shadow-lg">
        <div className="flex items-center justify-between border-b border-indigo-800/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌀</span>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
              Labyrinth Crossroads (Ngã Rẽ Mê Cung)
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-[10px] font-bold">
            Step Gate Explorer
          </span>
        </div>

        <p className="text-xs sm:text-sm font-bold text-amber-300 mb-2">
          {question.promptVi || 'Chọn từ khóa chính xác để mở cổng mê cung tiếp theo!'}
        </p>

        {/* 2D Mini Maze Path Representation */}
        <div className="flex items-center justify-center gap-2 py-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg font-black shadow-md">
            🚶
          </div>
          <div className="h-1.5 w-12 bg-indigo-500/50 rounded-full animate-pulse" />
          <div className="w-12 h-12 rounded-2xl bg-amber-500/30 border-2 border-amber-400 text-amber-300 flex items-center justify-center text-xl font-bold animate-bounce-subtle">
            🚪
          </div>
          <div className="h-1.5 w-12 bg-indigo-500/50 rounded-full" />
          <div className="w-10 h-10 rounded-xl bg-purple-500/30 border border-purple-400/50 text-white flex items-center justify-center text-lg">
            ⭐
          </div>
        </div>
      </div>

      {/* Word Gates to Pick */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedGate === opt;
          const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedGate && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleGateSelect(opt)}
              disabled={disabled || selectedGate !== null}
              className={`p-4 rounded-2xl border-2 font-black text-sm transition-all transform cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-105 shadow-md ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70 scale-95'
                  : 'bg-white hover:bg-indigo-50/60 border-slate-200 text-slate-800 hover:border-indigo-300 hover:scale-102'
              }`}
            >
              <span className="text-xs text-slate-400 font-semibold">Gate #{idx + 1}</span>
              <span className="text-base uppercase tracking-wider">{opt}</span>
              {showSuccess && (
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Gate Opened!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
