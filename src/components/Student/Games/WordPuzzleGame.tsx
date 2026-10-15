import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, Star, RotateCcw, CheckCircle2, ArrowRight, Delete } from 'lucide-react';
import { WordPuzzleItem, GradeNumber } from '../../../data/gradePathwaysData';
import { playEnglishSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface WordPuzzleGameProps {
  gradeNum: GradeNumber;
  puzzles: WordPuzzleItem[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const WordPuzzleGame: React.FC<WordPuzzleGameProps> = ({
  puzzles,
  onCompleteGame
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = puzzles[currentIndex] || puzzles[0];

  const targetUpper = current.targetWord.toUpperCase();
  const targetLetters = targetUpper.split('');

  // Scrambled letters with IDs so duplicate letters can be tracked individually
  const [availableLetters, setAvailableLetters] = useState<{ id: string; char: string; isUsed: boolean }[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<{ id: string; char: string }[]>([]);
  const [isWordCorrect, setIsWordCorrect] = useState(false);
  const [totalStars, setTotalStars] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize letters on puzzle change
  useEffect(() => {
    const list = targetLetters.map((char, index) => ({
      id: `${char}-${index}-${Math.random()}`,
      char,
      isUsed: false
    }));

    // Add 1-2 random distractor letters for grades 3-5
    const distractors = ['A', 'E', 'O', 'T', 'S', 'R', 'N'];
    const extraChar = distractors[Math.floor(Math.random() * distractors.length)];
    list.push({ id: `extra-${extraChar}`, char: extraChar, isUsed: false });

    // Shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    setAvailableLetters(list);
    setSelectedLetters([]);
    setIsWordCorrect(false);
  }, [currentIndex, current]);

  const handlePickLetter = (item: { id: string; char: string; isUsed: boolean }) => {
    if (item.isUsed || isWordCorrect) return;
    soundEffects.playClick();

    const nextSelected = [...selectedLetters, { id: item.id, char: item.char }];
    setSelectedLetters(nextSelected);

    setAvailableLetters(prev =>
      prev.map(l => l.id === item.id ? { ...l, isUsed: true } : l)
    );

    // Check if word is complete
    const currentWord = nextSelected.map(l => l.char).join('');
    if (currentWord === targetUpper) {
      setIsWordCorrect(true);
      soundEffects.playCorrect();
      setTotalStars(prev => prev + 25);
      playEnglishSpeech(current.targetWord);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else if (currentWord.length === targetUpper.length) {
      soundEffects.playWrong();
    }
  };

  const handleRemoveLetter = (index: number) => {
    if (isWordCorrect) return;
    soundEffects.playClick();
    const removed = selectedLetters[index];
    setSelectedLetters(prev => prev.filter((_, i) => i !== index));

    setAvailableLetters(prev =>
      prev.map(l => l.id === removed.id ? { ...l, isUsed: false } : l)
    );
  };

  const handleClear = () => {
    soundEffects.playClick();
    setSelectedLetters([]);
    setAvailableLetters(prev => prev.map(l => ({ ...l, isUsed: false })));
  };

  const handleNextOrFinish = () => {
    soundEffects.playClick();
    if (currentIndex + 1 < puzzles.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(totalStars, puzzles.length * 25, totalStars);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-teal-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 flex items-center justify-center text-4xl shadow-inner">
          🔤
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-teal-950">
            Word Wizardry!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã giải mã và đánh vần chính xác toàn bộ {puzzles.length} từ vựng!
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
          <span>+{totalStars} Stars Won!</span>
        </div>
        <div>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setTotalStars(0);
              setIsCompleted(false);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-teal-200 shadow-md space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-teal-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-black uppercase">
            Word Puzzle
          </span>
          <span className="text-xs text-slate-500 font-bold">
            Word {currentIndex + 1} of {puzzles.length}
          </span>
        </div>

        <button
          onClick={() => playEnglishSpeech(current.targetWord)}
          className="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-black flex items-center gap-1.5 border border-teal-200 cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>Pronounce</span>
        </button>
      </div>

      {/* Clue Box */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 flex items-center gap-4">
        <div className="text-4xl shrink-0 p-2 bg-white rounded-2xl shadow-xs">
          {current.emoji}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            Clue ({current.partOfSpeech}):
          </div>
          <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
            {current.hintEn}
          </div>
          <div className="text-xs text-slate-600 font-medium">
            Gợi ý: {current.hintVi}
          </div>
        </div>
      </div>

      {/* Selected Letter Slots */}
      <div className="space-y-2">
        <div className="text-xs font-black uppercase text-slate-400">
          Spell the word (Chạm các ô chữ để ghép từ):
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 min-h-[58px] p-2 bg-slate-100/80 rounded-2xl border-2 border-dashed border-slate-300">
          {Array.from({ length: targetUpper.length }).map((_, idx) => {
            const letter = selectedLetters[idx];

            return (
              <button
                key={idx}
                onClick={() => letter && handleRemoveLetter(idx)}
                disabled={isWordCorrect}
                className={`w-11 h-12 sm:w-13 sm:h-14 rounded-2xl font-black text-lg sm:text-xl flex items-center justify-center shadow-xs transition-all ${
                  letter
                    ? isWordCorrect
                      ? 'bg-emerald-500 text-white scale-105 shadow-md ring-2 ring-emerald-300'
                      : 'bg-white text-slate-900 border-2 border-teal-300 hover:border-rose-400 hover:text-rose-600 cursor-pointer'
                    : 'bg-white/60 border-2 border-slate-300 text-slate-300'
                }`}
                title={letter ? 'Tap to remove' : ''}
              >
                {letter ? letter.char : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* Available Letter Tiles */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">Letter Bank:</span>
          {selectedLetters.length > 0 && !isWordCorrect && (
            <button
              onClick={handleClear}
              className="text-xs text-rose-600 font-black hover:underline cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {availableLetters.map(item => (
            <button
              key={item.id}
              onClick={() => handlePickLetter(item)}
              disabled={item.isUsed || isWordCorrect}
              className={`w-11 h-12 sm:w-13 sm:h-14 rounded-2xl font-black text-lg sm:text-xl shadow-xs transition-all cursor-pointer flex items-center justify-center ${
                item.isUsed
                  ? 'bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed opacity-40 scale-95'
                  : 'bg-gradient-to-b from-white to-teal-50 border-2 border-teal-300 text-teal-950 hover:border-teal-500 hover:scale-110 active:scale-95 shadow-sm'
              }`}
            >
              {item.char}
            </button>
          ))}
        </div>
      </div>

      {/* Word Success Banner */}
      {isWordCorrect && (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-950">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <div>
              <div className="font-black text-base">
                Brilliant! You spelled "{current.targetWord}"!
              </div>
              <div className="text-xs text-emerald-800">
                +25 Stars earned for your explorer passport!
              </div>
            </div>
          </div>

          <button
            onClick={handleNextOrFinish}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>{currentIndex + 1 < puzzles.length ? 'Next Word' : 'Complete Puzzle'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
