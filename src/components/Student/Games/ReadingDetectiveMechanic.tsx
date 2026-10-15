import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, XCircle, Search, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface ReadingDetectiveMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const ReadingDetectiveMechanic: React.FC<ReadingDetectiveMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const fullText = question.metadata?.text || question.prompt;
  const parts = fullText.split('Question:');
  const passageText = parts[0]?.replace(/^Passage:\s*/i, '').trim() || '';
  const questionText = parts[1]?.trim() || question.promptVi || 'Tìm chứng cứ trong đoạn văn:';

  const handleSelectOption = (opt: string) => {
    if (disabled || selectedAnswer) return;

    soundEffects.playClick();
    const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedAnswer(opt);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(opt);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(opt, isCorrect);
  };

  const handleReadPassage = () => {
    soundEffects.playClick();
    playEnglishSpeech(passageText);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      {/* Historical Reading Passage Card */}
      <div className="p-6 rounded-3xl bg-amber-50/60 border-2 border-amber-300 shadow-md">
        <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-800" />
            <span className="text-xs font-black uppercase tracking-wider text-amber-900">
              Heritage Archive Passage (Đoạn Tư Liệu Lịch Sử)
            </span>
          </div>

          <button
            onClick={handleReadPassage}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Nghe đọc bài</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed indent-4">
          {passageText}
        </p>
      </div>

      {/* Investigation Evidence Question */}
      <div className="space-y-3">
        <div className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-2 shadow-xs">
          <Search className="w-4 h-4 text-indigo-600 shrink-0" />
          <span className="text-xs sm:text-sm font-black text-slate-900">
            {questionText}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {question.answerOptions.map((opt, idx) => {
            const isSelected = selectedAnswer === opt;
            const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
            const showSuccess = selectedAnswer && isCorrect;
            const showFailure = isSelected && !isCorrect;

            return (
              <button
                key={`${opt}-${idx}`}
                onClick={() => handleSelectOption(opt)}
                disabled={disabled || selectedAnswer !== null}
                className={`w-full p-4 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between text-left ${
                  showSuccess
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300'
                    : showFailure
                    ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-300 shadow-xs'
                }`}
              >
                <span>{opt}</span>
                {showSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                {showFailure && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
