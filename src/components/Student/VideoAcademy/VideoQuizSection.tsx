import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Star, 
  ArrowRight, 
  RotateCcw,
  Award
} from 'lucide-react';
import { EducationalVideo, VideoQuestion } from '../../../types';
import { playEnglishSpeech } from '../../../lib/speech';
import { soundEffects } from '../../../lib/soundEffects';

interface VideoQuizSectionProps {
  video: EducationalVideo;
  onCompleteQuiz: (score: number, starsEarned: number) => void;
  previousScore?: number;
}

export const VideoQuizSection: React.FC<VideoQuizSectionProps> = ({
  video,
  onCompleteQuiz,
  previousScore
}) => {
  const questions: VideoQuestion[] = video.questions && video.questions.length > 0 ? video.questions : [
    {
      id: 'q-default-1',
      questionEn: 'What is the main topic of this educational video?',
      questionVi: 'Chủ đề chính của video học tập này là gì?',
      options: [video.topic, 'Space Traveling to Mars', 'Deep Ocean Submarine'],
      correctIndex: 0,
      explanationEn: `This video focuses on ${video.topic} across Vietnam.`,
      explanationVi: `Video tập trung vào chủ đề ${video.topic} trên đất nước Việt Nam.`,
      difficulty: 'easy'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSpeak = (text: string) => {
    soundEffects.playClick();
    setIsSpeaking(true);
    playEnglishSpeech(text, {
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false)
    });
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      soundEffects.playSuccess();
      setCorrectCount(prev => prev + 1);
    } else {
      soundEffects.playError();
    }
  };

  const handleNext = () => {
    soundEffects.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz Finished!
      const total = questions.length;
      const finalScore = Math.round(((correctCount + (selectedOption === currentQ.correctIndex ? 0 : 0)) / total) * 100);
      const earnedStars = finalScore >= 80 ? 30 : finalScore >= 50 ? 20 : 10;

      setIsFinished(true);
      if (finalScore >= 70) {
        soundEffects.playVictory();
      } else {
        soundEffects.playSuccess();
      }
      onCompleteQuiz(finalScore, earnedStars);
    }
  };

  const handleRestart = () => {
    soundEffects.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setIsFinished(false);
  };

  // Render Finished Summary Card
  if (isFinished) {
    const total = questions.length;
    const finalScore = Math.round((correctCount / total) * 100);
    const earnedStars = finalScore >= 80 ? 30 : finalScore >= 50 ? 20 : 10;

    return (
      <div className="bg-gradient-to-b from-amber-50 to-rose-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-200 text-center space-y-4 shadow-sm animate-fade-in">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-400 text-white flex items-center justify-center text-3xl shadow-md">
          {finalScore >= 70 ? '🎉' : '⭐'}
        </div>

        <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
          {finalScore >= 80 ? 'Xuất sắc! Bé đã hiểu bài rất tốt!' : 'Hoan hô bé đã hoàn thành bài tập!'}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto">
          Bé đã trả lời đúng <strong>{correctCount} / {total} câu hỏi</strong> về video <em>{video.titleEn}</em>.
        </p>

        {/* Reward Stars Banner */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-sm sm:text-base shadow-md">
          <Star className="w-5 h-5 fill-white" />
          <span>+{earnedStars} Sao Khám Phá Nhận Được!</span>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại thử thách</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-indigo-100 shadow-md space-y-5">
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600 font-bold">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 font-heading">
              Thử thách Nghe & Hiểu (Listening & Comprehension)
            </h4>
            <p className="text-[11px] text-slate-400 font-medium">
              Câu {currentIndex + 1} / {questions.length} • Khối Lớp {video.grade} ({video.difficulty})
            </p>
          </div>
        </div>

        <button
          onClick={() => handleSpeak(`${currentQ.questionEn}. ${currentQ.options.join(', ')}`)}
          disabled={isSpeaking}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Nghe cô đọc câu hỏi bằng tiếng Anh"
        >
          <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce text-rose-600' : ''}`} />
          <span className="hidden sm:inline">Nghe phát âm</span>
        </button>
      </div>

      {/* Question Card */}
      <div className="space-y-1.5">
        <div className="text-sm sm:text-base font-extrabold text-slate-900">
          {currentQ.questionEn}
        </div>
        <div className="text-xs sm:text-sm text-slate-500 italic">
          {currentQ.questionVi}
        </div>
      </div>

      {/* Multiple-Choice Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === currentQ.correctIndex;

          let btnClass = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50/50 hover:border-indigo-300';
          if (isAnswered) {
            if (isCorrect) {
              btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-300 font-black';
            } else if (isSelected) {
              btnClass = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
            } else {
              btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer ${btnClass}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-600 shrink-0 shadow-xs">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </div>

              {isAnswered && (
                isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : isSelected ? (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                ) : null
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner (Appears after answer) */}
      {isAnswered && (
        <div className={`p-4 rounded-2xl text-xs space-y-1 animate-fade-in border ${
          selectedOption === currentQ.correctIndex 
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
            : 'bg-amber-50/80 border-amber-200 text-amber-900'
        }`}>
          <div className="font-extrabold flex items-center gap-1.5">
            <span>{selectedOption === currentQ.correctIndex ? '🎉 Chính xác!' : '💡 Gợi ý học tập:'}</span>
            <span>{currentQ.explanationEn}</span>
          </div>
          <div className="text-[11px] text-slate-600 italic">
            {currentQ.explanationVi}
          </div>
        </div>
      )}

      {/* Next Question Button */}
      {isAnswered && (
        <div className="flex justify-end pt-2">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>{currentIndex + 1 < questions.length ? 'Câu tiếp theo' : 'Hoàn thành thử thách'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
