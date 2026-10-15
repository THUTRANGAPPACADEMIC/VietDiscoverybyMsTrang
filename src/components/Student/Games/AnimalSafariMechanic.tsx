import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, XCircle, Compass } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { playEnglishSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface AnimalSafariMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const AnimalSafariMechanic: React.FC<AnimalSafariMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (disabled || selectedAnswer) return;

    const isCorrect = option.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedAnswer(option);

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(option, isCorrect);
  };

  const handlePlayAudio = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.audioPrompt || question.prompt, { slow: true });
  };

  return (
    <div className="space-y-6 text-center">
      {/* Binoculars Safari Spotlight */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 rounded-3xl p-5 border-2 border-emerald-200/80 shadow-inner max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl">🔭</span>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
            Jungle Safari Binoculars (Ống Nhòm Thám Hiểm)
          </span>
        </div>

        <button
          onClick={handlePlayAudio}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-emerald-200 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span>Play Safari Sound (Nghe tiếng gọi)</span>
        </button>

        <p className="text-xs text-emerald-900 font-semibold mt-2">
          {question.promptVi || 'Đố bé con vật nào phát ra âm thanh này?'}
        </p>
      </div>

      {/* Safari Animal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedAnswer === opt;
          const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedAnswer && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelect(opt)}
              disabled={disabled || selectedAnswer !== null}
              className={`p-6 rounded-3xl border-3 flex flex-col items-center justify-center gap-3 transition-all transform cursor-pointer ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 scale-105 shadow-xl ring-4 ring-emerald-300 ring-offset-2'
                  : showFailure
                  ? 'bg-rose-50 border-rose-400 opacity-70 scale-95'
                  : 'bg-white hover:bg-emerald-50/70 border-slate-200 hover:border-emerald-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-sm'
              }`}
            >
              <div className="w-20 h-20 rounded-2xl bg-emerald-100/60 flex items-center justify-center text-5xl">
                {isCorrect && question.imageAsset ? question.imageAsset : '🐾'}
              </div>

              <div className="text-base font-black text-slate-800 uppercase tracking-wide">
                {opt}
              </div>

              {showSuccess && (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Correct Animal!</span>
                </div>
              )}
              {showFailure && (
                <div className="flex items-center gap-1 text-xs font-bold text-rose-600">
                  <XCircle className="w-4 h-4" />
                  <span>Try Again!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
