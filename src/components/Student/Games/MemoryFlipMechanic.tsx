import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, RotateCcw, CheckCircle2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface MemoryCard {
  uid: string;
  matchId: string;
  type: 'word' | 'image';
  content: string;
  labelVi?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryFlipMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const MemoryFlipMechanic: React.FC<MemoryFlipMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedUids, setFlippedUids] = useState<string[]>([]);
  const [matchedPairsCount, setMatchedPairsCount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Initialize 3 card pairs (6 cards) based on question and options
  useEffect(() => {
    const rawPairs = [
      { id: 'pair-1', word: question.correctAnswer, image: question.imageAsset || '🎒', vi: question.metadata?.meaningVi || question.promptVi || '' },
      { id: 'pair-2', word: question.answerOptions[0] !== question.correctAnswer ? question.answerOptions[0] : question.answerOptions[1], image: '✏️', vi: 'Dụng cụ' },
      { id: 'pair-3', word: question.answerOptions[2] !== question.correctAnswer ? question.answerOptions[2] : (question.answerOptions[1] || 'book'), image: '📖', vi: 'Bài học' }
    ];

    const initialCards: MemoryCard[] = [];
    rawPairs.forEach(p => {
      // Word card
      initialCards.push({
        uid: `${p.id}-word`,
        matchId: p.id,
        type: 'word',
        content: p.word,
        labelVi: p.vi,
        isFlipped: false,
        isMatched: false
      });
      // Image card
      initialCards.push({
        uid: `${p.id}-image`,
        matchId: p.id,
        type: 'image',
        content: p.image,
        labelVi: p.word,
        isFlipped: false,
        isMatched: false
      });
    });

    // Shuffle cards
    const shuffled = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedUids([]);
    setMatchedPairsCount(0);
    setIsCompleted(false);
  }, [question]);

  const handleCardClick = (card: MemoryCard) => {
    if (disabled || card.isFlipped || card.isMatched || flippedUids.length >= 2) return;

    soundEffects.playClick();
    if (card.type === 'word') {
      playEnglishSpeech(card.content, { slow: true });
    }

    const nextFlipped = [...flippedUids, card.uid];
    setFlippedUids(nextFlipped);

    // Flip card visually
    setCards(prev => prev.map(c => c.uid === card.uid ? { ...c, isFlipped: true } : c));

    if (nextFlipped.length === 2) {
      const firstCard = cards.find(c => c.uid === nextFlipped[0]);
      const secondCard = card;

      if (firstCard && firstCard.matchId === secondCard.matchId) {
        // Matched pair!
        soundEffects.playCorrect();
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.uid === firstCard.uid || c.uid === secondCard.uid
              ? { ...c, isMatched: true }
              : c
          ));
          setFlippedUids([]);
          const newMatched = matchedPairsCount + 1;
          setMatchedPairsCount(newMatched);

          if (newMatched === 3) {
            setIsCompleted(true);
            soundEffects.playCelebration();
            onAnswer(question.correctAnswer, true);
          }
        }, 500);
      } else {
        // Not a match, flip back
        soundEffects.playIncorrect();
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            nextFlipped.includes(c.uid) ? { ...c, isFlipped: false } : c
          ));
          setFlippedUids([]);
        }, 900);
      }
    }
  };

  return (
    <div className="space-y-5 text-center">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3.5 rounded-2xl border border-blue-200 inline-block">
        <p className="text-xs sm:text-sm font-black text-indigo-900">
          🃏 Flip cards to match pairs: Word ↔ Picture (Lật thẻ tìm cặp tương ứng!)
        </p>
        <p className="text-[11px] text-slate-500 font-medium">
          Matches: {matchedPairsCount} / 3 pairs found
        </p>
      </div>

      {/* 3D Flip Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-xl mx-auto">
        {cards.map((card) => {
          const isOpen = card.isFlipped || card.isMatched;

          return (
            <button
              key={card.uid}
              onClick={() => handleCardClick(card)}
              disabled={disabled || card.isMatched}
              className={`h-28 sm:h-32 rounded-2xl border-2 transition-all transform cursor-pointer flex flex-col items-center justify-center p-3 relative ${
                card.isMatched
                  ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-200 opacity-90'
                  : isOpen
                  ? 'bg-white border-indigo-400 shadow-md scale-102'
                  : 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-600 shadow-md hover:scale-105 active:scale-95'
              }`}
            >
              {isOpen ? (
                <div className="flex flex-col items-center justify-center gap-1.5 animate-in zoom-in-50">
                  {card.type === 'image' ? (
                    <span className="text-4xl sm:text-5xl">{card.content}</span>
                  ) : (
                    <span className="text-sm sm:text-base font-black text-indigo-900 uppercase">
                      {card.content}
                    </span>
                  )}
                  {card.labelVi && (
                    <span className="text-[10px] font-semibold text-slate-500">
                      {card.labelVi}
                    </span>
                  )}
                  {card.isMatched && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute top-2 right-2" />
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-white/90">
                  <span className="text-2xl sm:text-3xl">✨</span>
                  <span className="text-[11px] font-black uppercase tracking-wider mt-1">FLIP</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {isCompleted && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-800 text-xs font-black inline-flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>All 3 pairs matched successfully! (+15 Stars)</span>
        </div>
      )}
    </div>
  );
};
