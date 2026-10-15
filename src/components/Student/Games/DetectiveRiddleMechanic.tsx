import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, Search, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface DetectiveRiddleMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const DetectiveRiddleMechanic: React.FC<DetectiveRiddleMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const handleSelectCase = (option: string) => {
    if (disabled || selectedCase) return;

    soundEffects.playClick();
    const isCorrect = option.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedCase(option);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(`Case solved! It is ${option}!`);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(option, isCorrect);
  };

  const handlePlayRiddle = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.audioPrompt || question.prompt, { slow: true });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Detective Notepad Container */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-3 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-md relative text-left">
        <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-base">
              🕵️
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-amber-900">
              Detective Notebook Clue #07
            </span>
          </div>

          <button
            onClick={handlePlayRiddle}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Nghe câu đố</span>
          </button>
        </div>

        <p className="text-sm sm:text-base font-bold text-slate-800 italic leading-relaxed">
          "{question.prompt}"
        </p>

        <p className="text-xs text-amber-900 font-semibold mt-2">
          {question.promptVi || 'Đọc/nghe manh mối thám tử và giải mã đối tượng bí mật!'}
        </p>
      </div>

      {/* Suspect / Landmark Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedCase === opt;
          const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedCase && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelectCase(opt)}
              disabled={disabled || selectedCase !== null}
              className={`p-5 rounded-2xl border-2 font-black text-sm transition-all transform cursor-pointer flex flex-col items-center justify-center gap-2 ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-105 shadow-md ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70 scale-95'
                  : 'bg-white hover:bg-amber-50/60 border-slate-200 text-slate-800 hover:border-amber-300 hover:scale-102 shadow-xs'
              }`}
            >
              <Search className={`w-5 h-5 ${showSuccess ? 'text-emerald-600' : 'text-amber-500'}`} />
              <span className="text-base uppercase">{opt}</span>
              {showSuccess && (
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Case Solved!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
