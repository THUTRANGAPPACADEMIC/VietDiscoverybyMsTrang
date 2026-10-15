import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, KeyRound, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface WordDecoderMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const WordDecoderMechanic: React.FC<WordDecoderMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const cipherText = question.metadata?.cipher || question.prompt.split("'")[1] || question.correctAnswer;
  const clueDef = question.metadata?.definition || question.prompt.split(':')[1] || '';

  const handleSelect = (word: string) => {
    if (disabled || selectedWord) return;

    soundEffects.playClick();
    const isCorrect = word.toUpperCase() === question.correctAnswer.toUpperCase();
    setSelectedWord(word);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(`Secret word decoded: ${word}!`);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(word, isCorrect);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {/* Secret Spy Decoder Board */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 border-3 border-purple-500/50 shadow-xl">
        <div className="flex items-center justify-between border-b border-purple-700/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🕵️‍♂️</span>
            <span className="text-xs font-black uppercase tracking-wider text-purple-300">
              Top Secret Word Decoder
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-[10px] font-bold">
            Cipher Unit 04
          </span>
        </div>

        {/* Scrambled Cipher Display */}
        <div className="flex items-center justify-center gap-2 py-3">
          {cipherText.split('-').map((letter: string, idx: number) => (
            <span
              key={`cip-${letter}-${idx}`}
              className="w-10 h-12 rounded-xl bg-purple-800/80 border-2 border-purple-400/80 text-amber-300 flex items-center justify-center font-mono font-black text-xl shadow-inner animate-pulse"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Clue definition */}
        <p className="text-xs sm:text-sm font-bold text-purple-100 mt-2">
          Clue: "{clueDef.trim() || question.prompt}"
        </p>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedWord === opt;
          const isCorrect = opt.toUpperCase() === question.correctAnswer.toUpperCase();
          const showSuccess = selectedWord && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelect(opt)}
              disabled={disabled || selectedWord !== null}
              className={`p-4 rounded-2xl border-2 font-mono font-black text-sm tracking-wider transition-all transform cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-105 shadow-md ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70 scale-95'
                  : 'bg-white hover:bg-purple-50/50 border-slate-200 text-slate-800 hover:border-purple-300 hover:scale-102'
              }`}
            >
              <KeyRound className={`w-4 h-4 ${showSuccess ? 'text-emerald-600' : 'text-purple-500'}`} />
              <span className="text-base">{opt.toUpperCase()}</span>
              {showSuccess && (
                <div className="flex items-center gap-1 text-[11px] font-sans font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>DECODED!</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
