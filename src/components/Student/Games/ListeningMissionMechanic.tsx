import React, { useState } from 'react';
import { Radio, Volume2, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface ListeningMissionMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const ListeningMissionMechanic: React.FC<ListeningMissionMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const announcement = question.metadata?.announcement || question.audioPrompt || question.prompt;
  const missionQuestion = question.metadata?.question || question.promptVi || 'Nhiệm vụ nghe hiểu:';

  const handleSelectAnswer = (ans: string) => {
    if (disabled || selectedAnswer) return;

    soundEffects.playClick();
    const isCorrect = ans.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedAnswer(ans);

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(ans, isCorrect);
  };

  const handlePlayAnnouncement = () => {
    soundEffects.playClick();
    playEnglishSpeech(announcement);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      {/* Radio Broadcast Player Station */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-200 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-amber-100">
              VietDiscovery Radio Broadcast (Nhiệm Vụ Phát Thanh)
            </span>
          </div>
          <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
            LIVE AUDIO
          </span>
        </div>

        <button
          onClick={handlePlayAnnouncement}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Volume2 className="w-5 h-5 text-rose-500 animate-pulse" />
          <span>Play Mission Broadcast (Nghe thông báo)</span>
        </button>

        <p className="text-xs text-white/90 font-medium mt-3 italic">
          "{announcement}"
        </p>
      </div>

      {/* Checkpoint Question & Options */}
      <div className="space-y-3 text-left">
        <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <span className="text-xs font-black text-rose-600 block mb-0.5">CHECKPOINT QUESTION:</span>
          <p className="text-sm font-bold text-slate-800">{missionQuestion}</p>
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
                onClick={() => handleSelectAnswer(opt)}
                disabled={disabled || selectedAnswer !== null}
                className={`w-full p-4 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between text-left ${
                  showSuccess
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300'
                    : showFailure
                    ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-rose-300 shadow-xs'
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
