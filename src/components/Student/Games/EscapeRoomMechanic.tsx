import React, { useState } from 'react';
import { Lock, Unlock, Key, Sparkles, CheckCircle2, XCircle, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface EscapeRoomMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const EscapeRoomMechanic: React.FC<EscapeRoomMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleKeySelect = (keyWord: string) => {
    if (disabled || selectedKey) return;

    soundEffects.playClick();
    const isCorrect = keyWord.toUpperCase() === question.correctAnswer.toUpperCase();
    setSelectedKey(keyWord);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(`Door unlocked! The password is ${keyWord}!`);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(keyWord, isCorrect);
  };

  const handlePlayAudio = () => {
    soundEffects.playClick();
    playEnglishSpeech(question.prompt);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Escape Room Vault Interface */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 border-3 border-indigo-500/50 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-indigo-800 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/80 flex items-center justify-center text-lg">
              {selectedKey && selectedKey.toUpperCase() === question.correctAnswer.toUpperCase() ? (
                <Unlock className="w-5 h-5 text-emerald-400" />
              ) : (
                <Lock className="w-5 h-5 text-amber-400" />
              )}
            </div>
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-300 block">
                Escape Room Door Chamber #04
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Solve the riddle to unlock the electronic vault
              </span>
            </div>
          </div>

          <button
            onClick={handlePlayAudio}
            className="p-2 rounded-xl bg-indigo-800/80 hover:bg-indigo-700 text-indigo-200 transition-colors"
            title="Nghe manh mối"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Cryptic Clue */}
        <p className="text-sm sm:text-base font-bold text-amber-300 leading-relaxed italic bg-black/30 p-4 rounded-2xl border border-indigo-800/60">
          "{question.prompt}"
        </p>

        <p className="text-xs text-indigo-200 font-medium mt-3">
          {question.promptVi || 'Chọn từ khóa chính xác để mở khóa cửa phòng bí mật!'}
        </p>
      </div>

      {/* Cipher Key Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedKey === opt;
          const isCorrect = opt.toUpperCase() === question.correctAnswer.toUpperCase();
          const showSuccess = selectedKey && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleKeySelect(opt)}
              disabled={disabled || selectedKey !== null}
              className={`p-4 sm:p-5 rounded-2xl border-2 font-mono font-black text-sm sm:text-base tracking-widest transition-all transform cursor-pointer flex flex-col items-center justify-center gap-2 ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-105 shadow-md ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70 scale-95'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-400 hover:scale-102 shadow-xs'
              }`}
            >
              <Key className={`w-5 h-5 ${showSuccess ? 'text-emerald-600' : 'text-indigo-500'}`} />
              <span>{opt.toUpperCase()}</span>
              {showSuccess && (
                <div className="flex items-center gap-1 text-[11px] font-sans font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>DOOR UNLOCKED</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
