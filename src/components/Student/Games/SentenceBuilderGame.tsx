import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, Star, RotateCcw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { SentenceBuilderItem, GradeNumber } from '../../../data/gradePathwaysData';
import { playEnglishSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface SentenceBuilderGameProps {
  gradeNum: GradeNumber;
  items: SentenceBuilderItem[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const SentenceBuilderGame: React.FC<SentenceBuilderGameProps> = ({
  items,
  onCompleteGame
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = items[currentIndex] || items[0];

  const [availableWords, setAvailableWords] = useState<{ id: string; word: string; isUsed: boolean }[]>([]);
  const [placedWords, setPlacedWords] = useState<{ id: string; word: string }[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isSentenceCorrect, setIsSentenceCorrect] = useState(false);
  const [totalStars, setTotalStars] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const list = current.scrambledWords.map((word, i) => ({
      id: `${word}-${i}-${Math.random()}`,
      word,
      isUsed: false
    }));

    // Shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    setAvailableWords(list);
    setPlacedWords([]);
    setIsAnswerSubmitted(false);
    setIsSentenceCorrect(false);
  }, [currentIndex, current]);

  const handlePickWord = (item: { id: string; word: string; isUsed: boolean }) => {
    if (item.isUsed || isAnswerSubmitted) return;
    soundEffects.playClick();

    setPlacedWords(prev => [...prev, { id: item.id, word: item.word }]);
    setAvailableWords(prev =>
      prev.map(w => w.id === item.id ? { ...w, isUsed: true } : w)
    );
  };

  const handleRemoveWord = (index: number) => {
    if (isAnswerSubmitted) return;
    soundEffects.playClick();
    const removed = placedWords[index];
    setPlacedWords(prev => prev.filter((_, i) => i !== index));

    setAvailableWords(prev =>
      prev.map(w => w.id === removed.id ? { ...w, isUsed: false } : w)
    );
  };

  const handleReset = () => {
    soundEffects.playClick();
    setPlacedWords([]);
    setAvailableWords(prev => prev.map(w => ({ ...w, isUsed: false })));
    setIsAnswerSubmitted(false);
    setIsSentenceCorrect(false);
  };

  const handleCheckSentence = () => {
    soundEffects.playClick();
    const constructed = placedWords.map(w => w.word).join(' ');
    const isCorrect = constructed.trim().toLowerCase() === current.correctSentence.trim().toLowerCase();

    setIsAnswerSubmitted(true);
    setIsSentenceCorrect(isCorrect);

    if (isCorrect) {
      soundEffects.playCorrect();
      setTotalStars(prev => prev + 30);
      playEnglishSpeech(current.correctSentence);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextOrFinish = () => {
    soundEffects.playClick();
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(totalStars, items.length * 30, totalStars);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-blue-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-4xl shadow-inner">
          🧩
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-blue-950">
            Master Sentence Architect!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã ghép nối thành công toàn bộ {items.length} câu tiếng Anh hoàn chỉnh!
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
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-blue-200 shadow-md space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-blue-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase">
            Sentence Builder
          </span>
          <span className="text-xs text-slate-500 font-bold">
            Sentence {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={handleReset}
          disabled={isAnswerSubmitted && isSentenceCorrect}
          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Words</span>
        </button>
      </div>

      {/* Target Clue & Meaning */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 space-y-1">
        <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">
          Target Sentence Meaning (Ý nghĩa câu cần ghép):
        </div>
        <div className="text-base sm:text-lg font-black text-slate-900">
          "{current.meaningVi}"
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Hint: {current.hintEn}
        </div>
      </div>

      {/* Sentence Construction Tray */}
      <div className="space-y-2">
        <div className="text-xs font-black uppercase text-slate-400">
          Your Sentence (Chạm vào từ bên dưới để ghép vào đây):
        </div>

        <div className="min-h-[70px] p-3 rounded-2xl bg-white border-2 border-dashed border-blue-300 flex flex-wrap items-center gap-2 shadow-inner">
          {placedWords.map((item, index) => (
            <button
              key={index}
              onClick={() => handleRemoveWord(index)}
              disabled={isAnswerSubmitted && isSentenceCorrect}
              className={`px-3.5 py-2 rounded-xl text-sm font-black shadow-xs border transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnswerSubmitted
                  ? isSentenceCorrect
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-rose-500 text-white border-rose-600'
                  : 'bg-blue-600 text-white border-blue-700 hover:bg-rose-500 hover:border-rose-600'
              }`}
              title="Tap to return word to bank"
            >
              <span>{item.word}</span>
            </button>
          ))}

          {placedWords.length === 0 && (
            <div className="w-full text-center text-xs text-slate-400 italic">
              Tap the word tiles below in the correct order to construct your sentence!
            </div>
          )}
        </div>
      </div>

      {/* Word Tiles Bank */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-500">Available Words:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {availableWords.map(item => (
            <button
              key={item.id}
              onClick={() => handlePickWord(item)}
              disabled={item.isUsed || (isAnswerSubmitted && isSentenceCorrect)}
              className={`px-4 py-2.5 rounded-2xl font-black text-sm shadow-xs transition-all cursor-pointer ${
                item.isUsed
                  ? 'bg-slate-200 text-slate-400 border border-slate-300 opacity-40 cursor-not-allowed scale-95'
                  : 'bg-white border-2 border-blue-300 text-blue-950 hover:border-blue-500 hover:scale-105 active:scale-95 shadow-sm'
              }`}
            >
              {item.word}
            </button>
          ))}
        </div>
      </div>

      {/* Verification & Action Bar */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        {isAnswerSubmitted && (
          <div className="flex items-center gap-2">
            {isSentenceCorrect ? (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <span>Perfect sentence structure! +30 Stars</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-rose-600">
                <XCircle className="w-5 h-5" />
                <span>Try again: "{current.correctSentence}"</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 ml-auto">
          {!isAnswerSubmitted ? (
            <button
              onClick={handleCheckSentence}
              disabled={placedWords.length === 0}
              className={`px-6 py-2.5 rounded-2xl text-sm font-black flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                placedWords.length > 0
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify Sentence (Kiểm tra)</span>
            </button>
          ) : (
            <button
              onClick={handleNextOrFinish}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>{currentIndex + 1 < items.length ? 'Next Sentence' : 'Complete Challenge'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
