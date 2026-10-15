import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Info } from 'lucide-react';
import { MultipleChoiceItem, GradeNumber } from '../../../data/gradePathwaysData';
import { soundEffects } from '../../../lib/soundEffects';

interface MultipleChoiceQuizGameProps {
  gradeNum: GradeNumber;
  questions: MultipleChoiceItem[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const MultipleChoiceQuizGame: React.FC<MultipleChoiceQuizGameProps> = ({
  questions,
  onCompleteGame
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const q = questions[currentIndex] || questions[0];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const maxPossibleScore = questions.reduce((sum, item) => sum + item.starsAwarded, 0);

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    soundEffects.playClick();
    setSelectedOptionIndex(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === q.correctIndex;
    if (isCorrect) {
      soundEffects.playCorrect();
      setTotalScore(prev => prev + q.starsAwarded);
      setCorrectAnswersCount(prev => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextOrFinish = () => {
    soundEffects.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(totalScore, maxPossibleScore, totalScore);
    }
  };

  if (isCompleted) {
    const accuracy = Math.round((correctAnswersCount / questions.length) * 100);

    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-rose-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-4xl shadow-inner">
          🏆
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-rose-950">
            Quiz Champion!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã trả lời đúng {correctAnswersCount}/{questions.length} câu ({accuracy}% chính xác)!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
            <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
            <span>+{totalScore} Stars Awarded!</span>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-100 border-2 border-rose-300 text-rose-900 font-black text-sm">
            <Award className="w-5 h-5 text-rose-500" />
            <span>Circular 27 Mastered</span>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSelectedOptionIndex(null);
              setIsAnswerSubmitted(false);
              setTotalScore(0);
              setCorrectAnswersCount(0);
              setIsCompleted(false);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-rose-200 shadow-md space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-rose-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase">
            Circular 27 Assessment
          </span>
          <span className="text-xs text-slate-500 font-bold">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        {/* Level Badge */}
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-black border ${
            q.level === 1 ? 'bg-sky-100 text-sky-800 border-sky-300' :
            q.level === 2 ? 'bg-amber-100 text-amber-800 border-amber-300' :
            'bg-purple-100 text-purple-800 border-purple-300'
          }`}>
            Level {q.level}: {q.levelNameEn} ({q.levelNameVi})
          </span>
          <span className="text-xs font-black text-amber-600 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>+{q.starsAwarded}</span>
          </span>
        </div>
      </div>

      {/* Question Prompt */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 border border-rose-200 space-y-1">
        <h4 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-snug">
          {q.questionEn}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {q.questionVi}
        </p>
      </div>

      {/* 4 Choices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const isCorrect = idx === q.correctIndex;

          let btnClass = 'bg-white border-slate-200 hover:border-rose-300 hover:scale-102';

          if (isAnswerSubmitted) {
            if (isCorrect) {
              btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300 shadow-sm';
            } else if (isSelected && !isCorrect) {
              btnClass = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-300 shadow-sm';
            } else {
              btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswerSubmitted}
              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer shadow-xs flex items-center justify-between gap-3 ${btnClass}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center font-black text-xs shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-bold text-sm sm:text-base leading-snug">
                  {option}
                </span>
              </div>

              {isAnswerSubmitted && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {isAnswerSubmitted && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {isAnswerSubmitted && (
        <div className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${
          selectedOptionIndex === q.correctIndex
            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
            : 'bg-rose-50 border-rose-200 text-rose-900'
        }`}>
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-black text-sm flex items-center gap-1.5 justify-center sm:justify-start">
              <Info className="w-4 h-4" />
              <span>Explanation (Giải thích):</span>
            </div>
            <p className="text-xs font-semibold">
              {q.explanationEn}
            </p>
            <p className="text-xs opacity-85">
              {q.explanationVi}
            </p>
          </div>

          <button
            onClick={handleNextOrFinish}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
