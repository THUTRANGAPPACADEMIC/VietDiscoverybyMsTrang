import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface SentenceRailMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const SentenceRailMechanic: React.FC<SentenceRailMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  // Tokens from question metadata or split
  const rawTokens: string[] = question.metadata?.tokens || question.metadata?.sentenceParts || question.answerOptions;
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);
  const [placedTokens, setPlacedTokens] = useState<string[]>([]);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    // Shuffle tokens for player to assemble
    const shuffled = [...rawTokens].sort(() => Math.random() - 0.5);
    setAvailableTokens(shuffled);
    setPlacedTokens([]);
    setIsEvaluated(false);
    setIsCorrect(false);
  }, [question]);

  const handlePickToken = (token: string, index: number) => {
    if (disabled || isEvaluated) return;
    soundEffects.playClick();
    playEnglishSpeech(token, { slow: true });

    const nextAvailable = [...availableTokens];
    nextAvailable.splice(index, 1);
    setAvailableTokens(nextAvailable);
    setPlacedTokens(prev => [...prev, token]);
  };

  const handleRemoveToken = (token: string, index: number) => {
    if (disabled || isEvaluated) return;
    soundEffects.playClick();

    const nextPlaced = [...placedTokens];
    nextPlaced.splice(index, 1);
    setPlacedTokens(nextPlaced);
    setAvailableTokens(prev => [...prev, token]);
  };

  const handleResetRail = () => {
    if (disabled || isEvaluated) return;
    soundEffects.playClick();
    setAvailableTokens([...rawTokens].sort(() => Math.random() - 0.5));
    setPlacedTokens([]);
  };

  const handleCheckSentence = () => {
    if (disabled || isEvaluated || placedTokens.length === 0) return;

    const constructed = placedTokens.join(' ').trim();
    const targetClean = question.correctAnswer.replace(/\s+/g, ' ').trim();
    // Compare constructed against correct answer (flexible on spacing)
    const matches = constructed.toLowerCase() === targetClean.toLowerCase() ||
      constructed.replace(/[.,?!]/g, '').toLowerCase() === targetClean.replace(/[.,?!]/g, '').toLowerCase();

    setIsEvaluated(true);
    setIsCorrect(matches);

    if (matches) {
      soundEffects.playCorrect();
      playEnglishSpeech(question.correctAnswer);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(constructed, matches);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Target prompt guidance */}
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-3xl">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">🧩</span>
          <span className="text-xs font-black uppercase text-purple-900 tracking-wider">
            Sentence Rail (Đường Ray Kiến Trúc Câu)
          </span>
        </div>
        <p className="text-xs sm:text-sm font-bold text-slate-700">
          {question.promptVi || 'Chạm vào các khối từ theo đúng thứ tự để tạo thành câu hoàn chỉnh!'}
        </p>
      </div>

      {/* The Sentence Rail Dropzone */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900 text-white min-h-[90px] flex flex-wrap items-center justify-center gap-2 border-3 border-indigo-400/50 shadow-inner">
        {placedTokens.length === 0 ? (
          <span className="text-xs sm:text-sm font-medium text-slate-400 italic">
            Chạm vào các khối từ bên dưới để đưa vào đường ray...
          </span>
        ) : (
          placedTokens.map((tok, idx) => (
            <button
              key={`placed-${tok}-${idx}`}
              onClick={() => handleRemoveToken(tok, idx)}
              disabled={disabled || isEvaluated}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer animate-in zoom-in-75"
            >
              {tok}
            </button>
          ))
        )}
      </div>

      {/* Available Word Blocks to Pick */}
      <div className="space-y-2">
        <div className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
          Available Blocks (Khối từ sẵn có):
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {availableTokens.map((tok, idx) => (
            <button
              key={`avail-${tok}-${idx}`}
              onClick={() => handlePickToken(tok, idx)}
              disabled={disabled || isEvaluated}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-purple-50 border-2 border-slate-200 hover:border-purple-300 font-black text-sm text-slate-800 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {tok}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={handleResetRail}
          disabled={disabled || isEvaluated || placedTokens.length === 0}
          className="px-4 py-2.5 rounded-2xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-40"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Làm lại (Reset)</span>
        </button>

        <button
          onClick={handleCheckSentence}
          disabled={disabled || isEvaluated || placedTokens.length === 0}
          className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-40"
        >
          <Sparkles className="w-4 h-4" />
          <span>Kiểm tra câu (Verify Sentence)</span>
        </button>
      </div>

      {/* Outcome feedback */}
      {isEvaluated && (
        <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 animate-in fade-in ${
          isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Perfect! "{question.correctAnswer}"</span>
            </>
          ) : (
            <span>Correct order is: "{question.correctAnswer}"</span>
          )}
        </div>
      )}
    </div>
  );
};
