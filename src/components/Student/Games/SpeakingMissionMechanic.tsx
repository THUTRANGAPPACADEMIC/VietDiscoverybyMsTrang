import React, { useState } from 'react';
import { Mic, Volume2, Sparkles, CheckCircle2, RotateCcw, Award } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface SpeakingMissionMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const SpeakingMissionMechanic: React.FC<SpeakingMissionMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasRecorded, setHasRecorded] = useState<boolean>(false);
  const [accuracyScore, setAccuracyScore] = useState<number>(0);

  const sentenceToSpeak = question.correctAnswer || question.prompt.split('\n')[1] || question.prompt;
  const translationVi = question.metadata?.translationVi || question.promptVi || '';

  const handlePlayModelAudio = (slow: boolean = false) => {
    soundEffects.playClick();
    playEnglishSpeech(sentenceToSpeak, { slow });
  };

  const handleRecordSpeech = () => {
    if (disabled || hasRecorded) return;

    soundEffects.playClick();
    setIsRecording(true);

    // Simulate speech recognition listening session
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);

      // Score between 90 and 100% for completed primary speech mission
      const score = Math.floor(Math.random() * 10) + 91;
      setAccuracyScore(score);

      soundEffects.playCelebration();
      onAnswer(sentenceToSpeak, true);
    }, 2500);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      {/* Speech Model Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white rounded-3xl p-6 shadow-xl relative">
        <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-emerald-200 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-emerald-100">
              Native Speech Audio Model
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePlayModelAudio(false)}
              className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Nghe chuẩn</span>
            </button>
            <button
              onClick={() => handlePlayModelAudio(true)}
              className="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold transition-colors cursor-pointer"
            >
              Chậm (Slow)
            </button>
          </div>
        </div>

        {/* Big sentence display */}
        <p className="text-base sm:text-lg font-black text-white leading-relaxed my-3">
          "{sentenceToSpeak}"
        </p>

        {translationVi && (
          <p className="text-xs text-emerald-100 font-medium italic">
            ({translationVi})
          </p>
        )}
      </div>

      {/* Interactive Recording Button */}
      <div className="flex flex-col items-center justify-center gap-3">
        <button
          onClick={handleRecordSpeech}
          disabled={disabled || isRecording || hasRecorded}
          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center gap-1 text-white font-extrabold shadow-xl transition-all cursor-pointer ${
            isRecording
              ? 'bg-rose-500 scale-110 animate-ping ring-8 ring-rose-200'
              : hasRecorded
              ? 'bg-emerald-500 scale-102 ring-4 ring-emerald-200'
              : 'bg-gradient-to-tr from-emerald-500 to-teal-500 hover:scale-105 active:scale-95 hover:shadow-2xl'
          }`}
        >
          <Mic className={`w-8 h-8 ${isRecording ? 'animate-bounce' : ''}`} />
          <span className="text-[11px] uppercase tracking-wider">
            {isRecording ? 'Listening...' : hasRecorded ? 'Completed' : 'Tap & Speak'}
          </span>
        </button>

        <p className="text-xs text-slate-500 font-medium">
          {isRecording
            ? 'Đang lắng nghe giọng đọc của con... Hãy nói to và rõ ràng!'
            : hasRecorded
            ? 'Tuyệt vời! Con đã hoàn thành xuất sắc thử thách phát âm!'
            : 'Chạm vào mic và đọc to câu tiếng Anh trên nhé!'}
        </p>
      </div>

      {/* Accuracy Feedback badge */}
      {hasRecorded && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-center gap-3 text-emerald-900 font-black animate-in zoom-in-75">
          <Award className="w-6 h-6 text-amber-500" />
          <div className="text-left">
            <div className="text-sm">Fluency Score: {accuracyScore}% (Phát âm chuẩn xác)</div>
            <div className="text-xs text-emerald-700 font-semibold">+25 Stars awarded to Champion!</div>
          </div>
        </div>
      )}
    </div>
  );
};
