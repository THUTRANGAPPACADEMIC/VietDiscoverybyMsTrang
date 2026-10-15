import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, RotateCcw, CheckCircle2, Award } from 'lucide-react';
import { MatchPairItem, GradeNumber } from '../../../data/gradePathwaysData';
import { soundEffects } from '../../../lib/soundEffects';

interface MatchThePairsGameProps {
  gradeNum: GradeNumber;
  pairs: MatchPairItem[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

interface CardItem {
  id: string; // unique card id
  pairId: string;
  type: 'leftEn' | 'rightVi';
  label: string;
  emoji: string;
}

export const MatchThePairsGame: React.FC<MatchThePairsGameProps> = ({
  pairs,
  onCompleteGame
}) => {
  // Take up to 6 pairs for a clean 12-card grid
  const activePairs = pairs.slice(0, 6);

  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [movesCount, setMovesCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize and shuffle cards
  const initializeGame = () => {
    const cardList: CardItem[] = [];
    activePairs.forEach(p => {
      cardList.push({
        id: `left-${p.id}`,
        pairId: p.id,
        type: 'leftEn',
        label: p.leftEn,
        emoji: p.emoji
      });
      cardList.push({
        id: `right-${p.id}`,
        pairId: p.id,
        type: 'rightVi',
        label: p.rightVi,
        emoji: p.emoji
      });
    });

    // Shuffle cards Fisher-Yates
    for (let i = cardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    }

    setCards(cardList);
    setFlippedIds([]);
    setMatchedPairIds([]);
    setMovesCount(0);
    setIsCompleted(false);
  };

  useEffect(() => {
    initializeGame();
  }, [pairs]);

  const handleCardClick = (card: CardItem) => {
    // If already matched or already flipped, ignore
    if (matchedPairIds.includes(card.pairId) || flippedIds.includes(card.id)) return;
    if (flippedIds.length >= 2) return; // Wait for current pair to resolve

    soundEffects.playClick();
    const nextFlipped = [...flippedIds, card.id];
    setFlippedIds(nextFlipped);

    if (nextFlipped.length === 2) {
      setMovesCount(prev => prev + 1);
      const firstCard = cards.find(c => c.id === nextFlipped[0]);
      const secondCard = cards.find(c => c.id === nextFlipped[1]);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId && firstCard.id !== secondCard.id) {
        // MATCH!
        setTimeout(() => {
          soundEffects.playCorrect();
          const nextMatched = [...matchedPairIds, firstCard.pairId];
          setMatchedPairIds(nextMatched);
          setFlippedIds([]);

          // Check for full victory
          if (nextMatched.length === activePairs.length) {
            setIsCompleted(true);
            soundEffects.playStarFanfare();
            confetti({
              particleCount: 70,
              spread: 80,
              origin: { y: 0.6 }
            });
            const earnedStars = activePairs.length * 15;
            onCompleteGame(earnedStars, activePairs.length * 15, earnedStars);
          }
        }, 400);
      } else {
        // NO MATCH -> flip back after short pause
        setTimeout(() => {
          soundEffects.playWrong();
          setFlippedIds([]);
        }, 900);
      }
    }
  };

  if (isCompleted) {
    const starsWon = activePairs.length * 15;

    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-amber-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-4xl shadow-inner">
          ⭐
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-amber-950">
            Memory Master!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã ghép đúng tất cả {activePairs.length} cặp từ chỉ sau {movesCount} lượt mở thẻ!
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
          <span>+{starsWon} Stars Awarded!</span>
        </div>
        <div>
          <button
            onClick={initializeGame}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Shuffle & Play Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-amber-200 shadow-md space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-amber-100 pb-3">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase">
            Match the Pairs
          </span>
          <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 mt-1">
            Lật Thẻ Tìm Cặp Từ Tương Ứng
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-bold text-slate-500">
            Moves: <span className="font-black text-slate-800">{movesCount}</span>
          </div>
          <button
            onClick={initializeGame}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
        {cards.map(card => {
          const isFlipped = flippedIds.includes(card.id) || matchedPairIds.includes(card.pairId);
          const isMatched = matchedPairIds.includes(card.pairId);

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card)}
              disabled={isMatched}
              className={`h-24 sm:h-28 rounded-2xl border-2 transition-all duration-300 transform-gpu cursor-pointer flex flex-col items-center justify-center p-2 text-center select-none ${
                isMatched
                  ? 'bg-emerald-100/90 border-emerald-400 text-emerald-950 scale-95 shadow-none'
                  : isFlipped
                  ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-md scale-102 ring-2 ring-amber-300'
                  : 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 text-white shadow-sm hover:scale-105 active:scale-95'
              }`}
            >
              {isFlipped ? (
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl block">{card.emoji}</span>
                  <div className="font-black text-xs sm:text-sm leading-tight">
                    {card.label}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-tight opacity-60 block">
                    {card.type === 'leftEn' ? 'English' : 'Tiếng Việt'}
                  </span>
                </div>
              ) : (
                <div className="text-center space-y-1">
                  <span className="text-2xl sm:text-3xl opacity-80">❓</span>
                  <span className="text-[11px] font-black uppercase tracking-wider block opacity-75">
                    Flip Me!
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Progress Footer */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-200">
        <span>Pairs Matched: {matchedPairIds.length} / {activePairs.length}</span>
        <span className="text-amber-600">⭐ +15 Stars per match</span>
      </div>
    </div>
  );
};
