import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Sparkles, Star, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { ListenChooseQuestion, GradeNumber } from '../../../data/gradePathwaysData';
import { playEnglishSpeech, stopSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface ListenAndChooseGameProps {
  gradeNum: GradeNumber;
  questions: ListenChooseQuestion[];
  onCompleteGame: (score: number, maxScore: number, stars: number) => void;
}

export const ListenAndChooseGame: React.FC<ListenAndChooseGameProps> = ({
  questions,
  onCompleteGame
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const q = questions[currentIndex] || questions[0];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePlayAudio = (slow: boolean = isSlowMode) => {
    soundEffects.playClick();
    stopSpeech();
    setIsSpeaking(true);
    playEnglishSpeech(q.audioPromptEn, {
      rate: slow ? 0.72 : 0.9,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false)
    });
  };

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    soundEffects.playClick();
    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const chosen = q.options.find(o => o.id === optionId);
    if (chosen?.isCorrect) {
      soundEffects.playCorrect();
      setScore(prev => prev + 20);
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
    stopSpeech();
    setIsSpeaking(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
      soundEffects.playStarFanfare();
      onCompleteGame(score, questions.length * 20, score);
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center space-y-5 border-2 border-indigo-300 shadow-lg animate-float-gentle">
        <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-4xl shadow-inner">
          🎧
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-indigo-950">
            Great Listening Ears!
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Con đã hoàn thành xuất sắc thử thách Nghe & Chọn đáp án!
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
          <span>+{score} Stars Earned!</span>
        </div>
        <div>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSelectedOptionId(null);
              setIsAnswerSubmitted(false);
              setScore(0);
              setIsCompleted(false);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    );
  }

  const selectedOption = q.options.find(o => o.id === selectedOptionId);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-purple-200 shadow-md space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-purple-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase">
            Listen & Choose
          </span>
          <span className="text-xs text-slate-500 font-bold">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span>{score} Stars</span>
        </div>
      </div>

      {/* Audio Prompt Player Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 border-2 border-purple-200 text-center space-y-3">
        <div className="text-xs font-black uppercase tracking-wider text-purple-900">
          Listen to the voice prompt (Chạm để nghe đoạn hội thoại):
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => handlePlayAudio(false)}
            className={`px-5 py-3 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2 shadow-md transition-all cursor-pointer ${
              isSpeaking && !isSlowMode
                ? 'bg-purple-600 text-white ring-4 ring-purple-300 scale-105 animate-pulse'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 active:scale-95'
            }`}
          >
            <Volume2 className="w-5 h-5" />
            <span>Play Audio (Nghe)</span>
          </button>

          <button
            onClick={() => {
              setIsSlowMode(!isSlowMode);
              handlePlayAudio(!isSlowMode);
            }}
            className={`px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer border ${
              isSlowMode
                ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Nghe chậm rõ từng từ"
          >
            <span>🐢</span>
            <span>Slow Speech ({isSlowMode ? 'ON' : 'OFF'})</span>
          </button>
        </div>

        {/* Question Title */}
        <div className="pt-2">
          <div className="text-base sm:text-lg font-black font-heading text-slate-900">
            {q.questionEn}
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium">
            {q.questionVi}
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {q.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let btnStyle = 'bg-white border-slate-200 hover:border-purple-300 hover:scale-102';

          if (isAnswerSubmitted) {
            if (opt.isCorrect) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300';
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-300';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              disabled={isAnswerSubmitted}
              className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer shadow-xs flex flex-col items-center justify-center gap-2 min-h-[120px] ${btnStyle}`}
            >
              <span className="text-3xl sm:text-4xl">{opt.emoji}</span>
              <div>
                <div className="font-black text-sm sm:text-base leading-tight">
                  {opt.textEn}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {opt.textVi}
                </div>
              </div>

              {isAnswerSubmitted && opt.isCorrect && (
                <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Correct!</span>
                </span>
              )}
              {isAnswerSubmitted && isSelected && !opt.isCorrect && (
                <span className="inline-flex items-center gap-1 text-[11px] font-black text-rose-600">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Incorrect</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback Banner & Next Button */}
      {isAnswerSubmitted && (
        <div className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${
          selectedOption?.isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
        }`}>
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-black text-sm flex items-center gap-1.5 justify-center sm:justify-start">
              {selectedOption?.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Spot on! +20 Stars</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Not quite! Listen again next time.</span>
                </>
              )}
            </div>
            <p className="text-xs font-medium opacity-90">
              {q.explanationEn} ({q.explanationVi})
            </p>
          </div>

          <button
            onClick={handleNextOrFinish}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
