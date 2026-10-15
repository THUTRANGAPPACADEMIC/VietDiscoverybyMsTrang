import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface TreasureHuntMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const TreasureHuntMechanic: React.FC<TreasureHuntMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);

  const handleSpotClick = (spot: string) => {
    if (disabled || selectedSpot) return;

    const isCorrect = spot.toLowerCase() === question.correctAnswer.toLowerCase();
    setSelectedSpot(spot);

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(spot, isCorrect);
  };

  const handlePlayAudioClue = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.audioPrompt || question.prompt, { slow: true });
  };

  return (
    <div className="space-y-6 text-center max-w-xl mx-auto">
      {/* Audio Clue Banner */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl">🗺️</span>
          <span className="text-xs font-black uppercase tracking-wider text-amber-900">
            Treasure Map Clue (Manh Mối Bản Đồ Kho Báu)
          </span>
        </div>

        <button
          onClick={handlePlayAudioClue}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-amber-200 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span>Play Audio Clue (Nghe gợi ý kho báu)</span>
        </button>

        <p className="text-xs font-bold text-amber-950 mt-2">
          {question.promptVi || 'Lắng nghe gợi ý và chọn vị trí cất giấu kho báu!'}
        </p>
      </div>

      {/* Secret Treasure Spots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {question.answerOptions.map((spot, idx) => {
          const isSelected = selectedSpot === spot;
          const isCorrect = spot.toLowerCase() === question.correctAnswer.toLowerCase();
          const showSuccess = selectedSpot && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${spot}-${idx}`}
              onClick={() => handleSpotClick(spot)}
              disabled={disabled || selectedSpot !== null}
              className={`p-5 rounded-3xl border-3 flex flex-col items-center justify-center gap-2.5 transition-all transform cursor-pointer ${
                showSuccess
                  ? 'bg-amber-50 border-amber-400 scale-105 shadow-xl ring-4 ring-amber-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 opacity-70 scale-95'
                  : 'bg-white hover:bg-amber-50/50 border-slate-200 hover:border-amber-300 hover:scale-105 hover:shadow-md'
              }`}
            >
              <div className="w-18 h-18 rounded-2xl bg-amber-100/70 flex items-center justify-center text-4xl">
                {showSuccess ? '🪙' : '📦'}
              </div>

              <div className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">
                {spot}
              </div>

              {showSuccess && (
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Treasure Unlocked!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
