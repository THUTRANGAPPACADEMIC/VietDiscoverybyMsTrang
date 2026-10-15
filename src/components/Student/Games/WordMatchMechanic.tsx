import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface WordMatchMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const WordMatchMechanic: React.FC<WordMatchMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Available options
  const options = question.answerOptions;

  const handleWordSelect = (word: string) => {
    if (disabled || isAnswered) return;
    soundEffects.playClick();
    playEnglishSpeech(word, { slow: true });
    setSelectedWord(word);

    if (selectedImage) {
      checkMatch(word, selectedImage);
    }
  };

  const handleImageSelect = (imgWord: string) => {
    if (disabled || isAnswered) return;
    soundEffects.playClick();
    setSelectedImage(imgWord);

    if (selectedWord) {
      checkMatch(selectedWord, imgWord);
    }
  };

  const checkMatch = (w: string, imgWord: string) => {
    setIsAnswered(true);
    const isCorrect = w.toLowerCase() === question.correctAnswer.toLowerCase() && imgWord.toLowerCase() === question.correctAnswer.toLowerCase();

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(w, isCorrect);
  };

  return (
    <div className="space-y-6 text-center max-w-xl mx-auto">
      <div className="bg-teal-50 border border-teal-200 p-3 rounded-2xl">
        <p className="text-xs sm:text-sm font-black text-teal-900">
          🔗 Connect the Word (left) to the correct Picture Slot (right)!
        </p>
        <p className="text-[11px] text-slate-500 font-medium">
          {question.promptVi || 'Chọn từ tiếng Anh và ghép với hình ảnh tương ứng.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 items-center">
        {/* Left: Word Slots */}
        <div className="space-y-3">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">Word Labels</div>
          {options.map(opt => {
            const isSelected = selectedWord === opt;
            const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
            const showSuccess = isAnswered && isCorrect;

            return (
              <button
                key={`word-${opt}`}
                onClick={() => handleWordSelect(opt)}
                disabled={disabled || isAnswered}
                className={`w-full p-4 rounded-2xl border-2 font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${
                  showSuccess
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300'
                    : isSelected
                    ? 'bg-teal-500 text-white border-teal-600 shadow-md scale-102'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <span>{opt.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </button>
            );
          })}
        </div>

        {/* Right: Picture Slots */}
        <div className="space-y-3">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">Picture Slots</div>
          {options.map((opt, idx) => {
            const isTarget = opt.toLowerCase() === question.correctAnswer.toLowerCase();
            const emoji = isTarget && question.imageAsset ? question.imageAsset : (idx === 0 ? '🎒' : idx === 1 ? '✏️' : '📖');
            const isSelected = selectedImage === opt;
            const showSuccess = isAnswered && isTarget;

            return (
              <button
                key={`img-${opt}`}
                onClick={() => handleImageSelect(opt)}
                disabled={disabled || isAnswered}
                className={`w-full p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  showSuccess
                    ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300 scale-102'
                    : isSelected
                    ? 'bg-teal-100 border-teal-500 shadow-md'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-3xl">{emoji}</span>
                {showSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
