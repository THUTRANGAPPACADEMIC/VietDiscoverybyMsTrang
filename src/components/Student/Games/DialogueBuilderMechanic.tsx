import React, { useState } from 'react';
import { MessageSquare, Sparkles, CheckCircle2, XCircle, Volume2 } from 'lucide-react';
import { AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech } from '../../../lib/speech';

interface DialogueBuilderMechanicProps {
  question: AdaptiveGameQuestion;
  onAnswer: (selectedOption: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export const DialogueBuilderMechanic: React.FC<DialogueBuilderMechanicProps> = ({
  question,
  onAnswer,
  disabled
}) => {
  const [selectedReply, setSelectedReply] = useState<string | null>(null);

  const dialogueText = question.metadata?.dialogueText || question.prompt;
  const personA = dialogueText.split('\n')[0] || 'A: Hello!';
  const promptVi = question.promptVi || 'Chọn câu trả lời tự nhiên nhất để hoàn thành cuộc trò chuyện:';

  const handleSelectReply = (reply: string) => {
    if (disabled || selectedReply) return;

    soundEffects.playClick();
    const isCorrect = reply.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setSelectedReply(reply);

    if (isCorrect) {
      soundEffects.playCorrect();
      playEnglishSpeech(reply);
    } else {
      soundEffects.playIncorrect();
    }

    onAnswer(reply, isCorrect);
  };

  const handlePlayPersonA = () => {
    soundEffects.playClick();
    playEnglishSpeech(personA.replace(/^[A-Z]:\s*/i, ''));
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-left">
      {/* Simulated Smartphone Chat Screen */}
      <div className="bg-slate-900 rounded-3xl p-5 border-4 border-slate-800 shadow-2xl text-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs">
              A
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">International Friend</div>
              <div className="text-[10px] text-emerald-400 font-medium">Online • English Chat</div>
            </div>
          </div>
          <button
            onClick={handlePlayPersonA}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-indigo-300 transition-colors cursor-pointer"
            title="Nghe câu hỏi"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Incoming Bubble (Person A) */}
        <div className="flex items-start gap-2 max-w-[85%] mb-4">
          <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 mt-1 font-bold">
            A
          </div>
          <div className="p-3.5 rounded-2xl rounded-tl-xs bg-slate-800 text-slate-100 text-xs sm:text-sm font-semibold shadow-xs">
            {personA.replace(/^[A-Z]:\s*/i, '')}
          </div>
        </div>

        {/* Outgoing Bubble Preview (Person B - Student) */}
        <div className="flex items-start justify-end gap-2 ml-auto max-w-[85%]">
          <div className={`p-3.5 rounded-2xl rounded-tr-xs text-xs sm:text-sm font-semibold shadow-xs ${
            selectedReply ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white' : 'bg-slate-800/60 border border-dashed border-slate-700 text-slate-400 italic'
          }`}>
            {selectedReply || 'Chạm vào câu trả lời của bạn bên dưới...'}
          </div>
          <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0 mt-1 font-bold">
            B
          </div>
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5">
        <div className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
          {promptVi}
        </div>
        {question.answerOptions.map((opt, idx) => {
          const isSelected = selectedReply === opt;
          const isCorrect = opt.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
          const showSuccess = selectedReply && isCorrect;
          const showFailure = isSelected && !isCorrect;

          return (
            <button
              key={`${opt}-${idx}`}
              onClick={() => handleSelectReply(opt)}
              disabled={disabled || selectedReply !== null}
              className={`w-full p-4 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between text-left ${
                showSuccess
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-102 ring-2 ring-emerald-300'
                  : showFailure
                  ? 'bg-rose-50 border-rose-300 text-rose-900 opacity-70'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-300 shadow-xs'
              }`}
            >
              <span>{opt}</span>
              {showSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
              {showFailure && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
