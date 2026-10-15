import React, { useState } from 'react';
import { Compass, Volume2, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface TourGuideMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const TourGuideMechanic: React.FC<TourGuideMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const touristQuestion = question.metadata?.touristQuestion || question.prompt.split('\n')[0] || question.prompt;
  const guidePromptVi = question.promptVi || 'Hướng dẫn viên nhí hãy giải thích bằng tiếng Anh cho du khách:';

  const handleSelect = (ans: string) => {
    if (disabled || selectedResponse) return;

    soundEffects.playClick();
    const isCorrect = ans.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedResponse(ans);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(ans);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(ans, isCorrect);
  };

  const handlePlayTourist = () => {
    soundEffects.playClick();
    playEnglishSpeech(touristQuestion.replace(/^Tourist:\s*/i, ''));
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-left">
      {/* Tourist Inquiry Dialogue Bubble */}
      <div className="p-6 rounded-3xl bg-sky-50 border-2 border-sky-300 shadow-md">
        <div className="flex items-center justify-between border-b border-sky-200 pb-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl">
              🧑‍🌾
            </div>
            <div>
              <span className="text-xs font-black uppercase text-sky-900 block">
                International Tourist Inquiry
              </span>
              <span className="text-[10px] text-sky-600 font-semibold">
                Visiting Vietnam Heritage Sites
              </span>
            </div>
          </div>

          <button
            onClick={handlePlayTourist}
            className="p-2 rounded-full bg-white text-sky-600 shadow-xs hover:bg-sky-100 transition-colors cursor-pointer"
            title="Nghe câu hỏi du khách"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm sm:text-base font-bold text-slate-800 italic leading-relaxed">
          "{touristQuestion.replace(/^Tourist:\s*/i, '')}"
        </p>

        <p className="text-xs text-sky-800 font-bold mt-2">
          {guidePromptVi}
        </p>
      </div>

      {/* Tour Guide Explanations to Select */}
      <div className="space-y-3">
        <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
          Tour Guide Ambassador Options:
        </div>
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedResponse === opt;
          const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
          const showSuccess = selectedResponse && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelect(opt)}
              disabled={disabled || selectedResponse !== null}
              className={`w-full p-4 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between text-left ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                  : 'bg-white hover:bg-sky-50/50 border-slate-200 text-slate-800 hover:border-sky-300 shadow-xs'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                  #{idx + 1}
                </span>
                <span className="leading-snug">{opt}</span>
              </div>

              {showSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />}
              {showFailure && <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
