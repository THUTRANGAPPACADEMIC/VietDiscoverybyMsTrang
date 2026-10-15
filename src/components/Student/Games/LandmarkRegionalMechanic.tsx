import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, MapPin } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface LandmarkRegionalMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const LandmarkRegionalMechanic: React.FC<LandmarkRegionalMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const landmarkName = question.metadata?.landmarkName || question.prompt.split("'")[1] || 'Landmark';
  const province = question.metadata?.province || '';
  const emoji = question.imageAsset || '🏛️';

  const regions: { id: string; labelEn: string; labelVi: string; color: string; badgeBg: string }[] = [
    { id: 'North', labelEn: 'North Vietnam', labelVi: 'Miền Bắc', color: 'border-red-300 hover:border-red-500 bg-red-50/50', badgeBg: 'bg-red-500 text-white' },
    { id: 'Central', labelEn: 'Central Vietnam', labelVi: 'Miền Trung', color: 'border-amber-300 hover:border-amber-500 bg-amber-50/50', badgeBg: 'bg-amber-500 text-white' },
    { id: 'South', labelEn: 'South Vietnam', labelVi: 'Miền Nam', color: 'border-emerald-300 hover:border-emerald-500 bg-emerald-50/50', badgeBg: 'bg-emerald-500 text-white' }
  ];

  const handleSelectRegion = (regionId: string) => {
    if (disabled || selectedRegion) return;

    soundEffects.playClick();
    const isCorrect = regionId.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedRegion(regionId);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(`${landmarkName} is located in ${regionId} Vietnam.`);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(regionId, isCorrect);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Draggable / Focus Landmark Card */}
      <div className="p-6 rounded-3xl bg-white border-3 border-indigo-200 shadow-lg flex flex-col items-center justify-center gap-2">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-100 flex items-center justify-center text-5xl shadow-inner">
          {emoji}
        </div>
        <div className="font-black text-lg sm:text-xl text-slate-900 tracking-tight">
          {landmarkName}
        </div>
        {province && (
          <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>{province}</span>
          </div>
        )}
        <p className="text-xs text-slate-500 font-medium mt-1">
          {question.promptVi || 'Chọn miền địa lý tương ứng của danh lam thắng cảnh này:'}
        </p>
      </div>

      {/* 3 Regional Drop Zones */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {regions.map((reg) => {
          const isSelected = selectedRegion === reg.id;
          const isCorrect = reg.id.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedRegion && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={reg.id}
              onClick={() => handleSelectRegion(reg.id)}
              disabled={disabled || selectedRegion !== null}
              className={`p-5 rounded-3xl border-3 flex flex-col items-center justify-between gap-3 transition-all cursor-pointer ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-500 scale-105 shadow-xl ring-4 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-400 opacity-70 scale-95'
                  : `${reg.color} hover:scale-104 hover:shadow-lg`
              }`}
            >
              <div className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${reg.badgeBg}`}>
                {reg.labelEn}
              </div>

              <div className="text-sm font-extrabold text-slate-800">
                {reg.labelVi}
              </div>

              {showSuccess && (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Correct Region!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
