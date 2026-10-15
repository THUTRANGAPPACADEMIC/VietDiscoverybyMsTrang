import React, { useState } from 'react';
import { MapPin, Sparkles, CheckCircle2, Compass, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface VietnamMapQuestMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const VietnamMapQuestMechanic: React.FC<VietnamMapQuestMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const handleSelectProvince = (prov: string) => {
    if (disabled || selectedTarget) return;

    soundEffects.playClick();
    const isCorrect = prov.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedTarget(prov);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(`${prov} is correct!`);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(prov, isCorrect);
  };

  const handlePlayAudio = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.prompt);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Map Quest Header & Clue */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600 animate-spin" />
            <span className="text-xs font-black uppercase tracking-wider text-emerald-900">
              Interactive Vietnam Map Quest
            </span>
          </div>
          <button
            onClick={handlePlayAudio}
            className="p-1.5 rounded-full bg-white text-emerald-700 shadow-xs hover:scale-105"
            title="Nghe câu hỏi"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">
          {question.prompt}
        </p>
        <p className="text-xs text-slate-500 font-medium mt-1">
          {question.promptVi || 'Định vị địa danh hoặc tỉnh thành trên bản đồ Việt Nam:'}
        </p>
      </div>

      {/* Stylized Vietnam S-Curve Mini Map Pin Representation */}
      <div className="p-4 bg-slate-900 text-white rounded-3xl border-2 border-emerald-500/40 flex items-center justify-around shadow-inner">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-red-400">North (Miền Bắc)</span>
          <span className="text-2xl mt-1">🚩</span>
          <span className="text-[10px] text-slate-400">Hanoi • Ha Long</span>
        </div>
        <div className="h-8 w-px bg-slate-700" />
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-amber-400">Central (Miền Trung)</span>
          <span className="text-2xl mt-1">🏖️</span>
          <span className="text-[10px] text-slate-400">Hue • Da Nang • Hoi An</span>
        </div>
        <div className="h-8 w-px bg-slate-700" />
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-emerald-400">South (Miền Nam)</span>
          <span className="text-2xl mt-1">🌴</span>
          <span className="text-[10px] text-slate-400">HCMC • Mekong Delta</span>
        </div>
      </div>

      {/* Pin Location Answer Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedTarget === opt;
          const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedTarget && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelectProvince(opt)}
              disabled={disabled || selectedTarget !== null}
              className={`p-4 rounded-2xl border-2 font-black text-sm sm:text-base transition-all transform cursor-pointer flex items-center justify-center gap-2 ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-105 shadow-md ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70 scale-95'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-300 hover:scale-102 shadow-xs'
              }`}
            >
              <MapPin className={`w-4 h-4 ${showSuccess ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{opt}</span>
              {showSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-1" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
