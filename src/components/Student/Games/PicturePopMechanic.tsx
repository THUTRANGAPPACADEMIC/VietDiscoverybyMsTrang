import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { playEnglishSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface PicturePopMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const PicturePopMechanic: React.FC<PicturePopMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [poppedOption, setPoppedOption] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (disabled || selectedAnswer) return;

    const isCorrect = option.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedAnswer(option);
    setPoppedOption(option);

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
      {/* Audio Prompt Player */}
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          onClick={handlePlayAudio}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-sky-200 hover:scale-105 active:scale-95 transition-all cursor-pointer animate-bounce-subtle"
        >
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span>Listen: "{question.correctAnswer}" (Nghe phát âm)</span>
        </button>
        <p className="text-xs text-slate-500 font-medium">
          {question.promptVi || 'Chạm vào bong bóng hình ảnh đúng để làm nổ!'}
        </p>
      </div>

      {/* Floating Picture Bubble Cards */}
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
              className={`relative p-6 sm:p-7 rounded-3xl border-3 flex flex-col items-center justify-center gap-3 transition-all transform cursor-pointer group ${
                showSuccess
                  ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-400 scale-105 shadow-xl ring-4 ring-emerald-300 ring-offset-2'
                  : showFailure
                  ? 'bg-rose-50 border-rose-400 opacity-70 scale-95'
                  : 'bg-white/95 hover:bg-sky-50/80 border-sky-200 hover:border-sky-400 hover:scale-106 hover:shadow-xl active:scale-95 shadow-md'
              }`}
            >
              {/* Floating Bubble Background Ring */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-sky-100/70 via-indigo-50/50 to-pink-100/70 flex items-center justify-center text-5xl sm:text-6xl shadow-inner group-hover:rotate-6 transition-transform">
                {isCorrect && question.imageAsset ? question.imageAsset : '🎈'}
              </div>

              {/* Word Label */}
              <span className="text-base sm:text-lg font-black tracking-wide text-slate-800 group-hover:text-sky-600 transition-colors uppercase">
                {opt}
              </span>

              {/* Status Icons */}
              {showSuccess && (
                <div className="absolute top-3 right-3 text-emerald-500 animate-in zoom-in-50">
                  <CheckCircle2 className="w-6 h-6 fill-emerald-100" />
                </div>
              )}
              {showFailure && (
                <div className="absolute top-3 right-3 text-rose-500 animate-in zoom-in-50">
                  <XCircle className="w-6 h-6 fill-rose-100" />
                </div>
              )}

              {/* Sparkle pop effect */}
              {poppedOption === opt && isCorrect && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Sparkles className="w-16 h-16 text-amber-400 animate-ping" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
