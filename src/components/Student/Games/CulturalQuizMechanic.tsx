import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface CulturalQuizMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const CulturalQuizMechanic: React.FC<CulturalQuizMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelectOption = (opt: string) => {
    if (disabled || selectedAnswer) return;

    soundEffects.playClick();
    const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedAnswer(opt);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(opt);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(opt, isCorrect);
  };

  const handlePlayAudio = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.prompt);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Question Card */}
      <div className="p-6 rounded-3xl bg-white border-2 border-rose-200 shadow-md text-left">
        <div className="flex items-center justify-between border-b border-rose-100 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏮</span>
            <span className="text-xs font-black uppercase tracking-wider text-rose-600">
              {question.topic}
            </span>
          </div>
          <button
            onClick={handlePlayAudio}
            className="p-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
            title="Nghe câu hỏi"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
          {question.prompt}
        </h4>
        <p className="text-xs text-slate-500 font-medium mt-1">
          {question.promptVi}
        </p>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 gap-3">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedAnswer === opt;
          const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedAnswer && isCorrect;
          const showFailure = isSelected && !isCorrect;

          const letter = String.fromCharCode(65 + idx); // A, B, C, D

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelectOption(opt)}
              disabled={disabled || selectedAnswer !== null}
              className={`p-4 rounded-2xl border-2 font-bold text-sm sm:text-base transition-all transform cursor-pointer flex items-center justify-between text-left ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300 shadow-sm'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                  : 'bg-white hover:bg-rose-50/50 border-slate-200 text-slate-800 hover:border-rose-300 hover:scale-101 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                  showSuccess ? 'bg-emerald-500 text-white' : showFailure ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-600'
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
