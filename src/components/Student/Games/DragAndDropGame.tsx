import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, RotateCcw, CheckCircle2, Award, ArrowRight, HelpCircle } from 'lucide-react';
import { DragDropQuestion, GradeNumber } from '../../../data/gradePathwaysData';
import { soundEffects } from '../../../lib/soundEffects';

interface DragAndDropGameProps {
  gradeNum: GradeNumber;
  questions: DragDropQuestion[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const DragAndDropGame: React.FC<DragAndDropGameProps> = ({
  questions,
  onCompleteGame
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const q = questions[currentQIndex] || questions[0];

  // State: assignments map item.id -> category.id
  const [placedItems, setPlacedItems] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalStars, setTotalStars] = useState(0);

  // Unplaced items
  const unplacedItems = q.items.filter(item => !placedItems[item.id]);

  const handleSelectItem = (itemId: string) => {
    if (isSubmitted) return;
    soundEffects.playClick();
    setSelectedItemId(prev => prev === itemId ? null : itemId);
  };

  const handlePlaceInCategory = (categoryId: string) => {
    if (!selectedItemId || isSubmitted) return;
    soundEffects.playClick();
    setPlacedItems(prev => ({
      ...prev,
      [selectedItemId]: categoryId
    }));
    setSelectedItemId(null);
  };

  const handleRemoveItem = (itemId: string) => {
    if (isSubmitted) return;
    soundEffects.playClick();
    setPlacedItems(prev => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  const handleCheckAnswers = () => {
    soundEffects.playClick();
    setIsSubmitted(true);

    let correctCount = 0;
    q.items.forEach(item => {
      if (placedItems[item.id] === item.categoryId) {
        correctCount += 1;
      }
    });

    const isAllCorrect = correctCount === q.items.length;
    const earnedStars = correctCount * 10;
    setTotalStars(prev => prev + earnedStars);

    if (isAllCorrect) {
      soundEffects.playCorrect();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextOrFinish = () => {
    soundEffects.playClick();
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setPlacedItems({});
      setSelectedItemId(null);
      setIsSubmitted(false);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(totalStars, questions.length * q.items.length * 10, totalStars);
    }
  };

  const handleReset = () => {
    soundEffects.playClick();
    setPlacedItems({});
    setSelectedItemId(null);
    setIsSubmitted(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-emerald-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-4xl shadow-inner">
          🎉
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-emerald-900">
            Awesome Job, Adventurer!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã hoàn thành xuất sắc trò chơi Kéo & Thả phân loại từ vựng!
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
          <span>+{totalStars} Stars Won!</span>
        </div>
        <div>
          <button
            onClick={() => {
              setCurrentQIndex(0);
              setIsCompleted(false);
              setPlacedItems({});
              setTotalStars(0);
              setIsSubmitted(false);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-sky-200 shadow-md space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-100 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase">
              Drag & Drop Challenge
            </span>
            <span className="text-xs text-slate-500 font-bold">
              Level {currentQIndex + 1} of {questions.length}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 mt-1">
            {q.titleEn}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {q.instructionsEn} ({q.instructionsVi})
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-end sm:self-center px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Target Category Bins */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {q.categories.map(cat => {
          const itemsInCat = q.items.filter(item => placedItems[item.id] === cat.id);

          return (
            <div
              key={cat.id}
              onClick={() => handlePlaceInCategory(cat.id)}
              className={`min-h-[160px] p-4 rounded-2xl border-2 transition-all cursor-pointer ${cat.color} ${
                selectedItemId ? 'ring-2 ring-offset-2 ring-sky-400 bg-sky-50/70 border-dashed animate-pulse-subtle' : ''
              }`}
            >
              <div className="flex items-center justify-between font-black font-heading text-sm sm:text-base border-b border-black/10 pb-2 mb-3">
                <span>{cat.labelEn}</span>
                <span className="text-xs opacity-75 font-sans">{cat.labelVi}</span>
              </div>

              {/* Items placed in this category */}
              <div className="flex flex-wrap gap-2">
                {itemsInCat.map(item => {
                  const isCorrect = item.categoryId === cat.id;

                  return (
                    <button
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(item.id);
                      }}
                      disabled={isSubmitted}
                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-1.5 border transition-all ${
                        isSubmitted
                          ? isCorrect
                            ? 'bg-emerald-500 text-white border-emerald-600'
                            : 'bg-rose-500 text-white border-rose-600'
                          : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50 cursor-pointer'
                      }`}
                      title="Tap to return to unplaced bank"
                    >
                      <span className="text-base">{item.emoji}</span>
                      <span>{item.textEn}</span>
                      {isSubmitted && (
                        <span>{isCorrect ? '✓' : '✕'}</span>
                      )}
                    </button>
                  );
                })}

                {itemsInCat.length === 0 && (
                  <div className="w-full text-center py-6 text-xs text-slate-400 italic">
                    {selectedItemId ? '👉 Tap here to place selected item' : 'Empty box — select an item below to place here'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Unplaced Items Bank */}
      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
        <div className="text-xs font-black uppercase text-slate-500 mb-2 flex items-center justify-between">
          <span>Items to sort (Chọn từ để phân loại):</span>
          <span className="text-[11px] font-medium text-slate-400">
            {unplacedItems.length} items remaining
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {unplacedItems.map(item => {
            const isSelected = selectedItemId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
                disabled={isSubmitted}
                className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
                  isSelected
                    ? 'bg-sky-500 text-white border-sky-600 scale-105 shadow-md ring-2 ring-sky-300'
                    : 'bg-white text-slate-800 border-sky-200 hover:border-sky-400 hover:scale-102'
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                <span>{item.textEn}</span>
                <span className="text-[10px] text-slate-400 font-normal">({item.textVi})</span>
              </button>
            );
          })}

          {unplacedItems.length === 0 && !isSubmitted && (
            <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 py-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>All items placed! Tap "Check Answers" to verify.</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {!isSubmitted ? (
          <button
            onClick={handleCheckAnswers}
            disabled={unplacedItems.length > 0}
            className={`px-6 py-2.5 rounded-2xl text-sm font-black flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              unplacedItems.length === 0
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:scale-105 active:scale-95'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Check Answers (Kiểm tra)</span>
          </button>
        ) : (
          <button
            onClick={handleNextOrFinish}
            className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>{currentQIndex + 1 < questions.length ? 'Next Question' : 'Complete Game'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
