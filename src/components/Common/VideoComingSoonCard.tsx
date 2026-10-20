import React from 'react';
import { Film, Sparkles, ArrowRight, Clock, ShieldCheck, Plus, CheckCircle2 } from 'lucide-react';

interface VideoComingSoonCardProps {
  lessonTitle?: string;
  lessonViTitle?: string;
  gradeLevel?: string;
  onContinue?: () => void;
  onTeacherConfigure?: () => void;
  isTeacher?: boolean;
  className?: string;
}

export const VideoComingSoonCard: React.FC<VideoComingSoonCardProps> = ({
  lessonTitle = 'Bài học Khám phá Việt Nam',
  lessonViTitle,
  gradeLevel,
  onContinue,
  onTeacherConfigure,
  isTeacher = false,
  className = ''
}) => {
  return (
    <div className={`relative aspect-video w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#311042] border-2 border-indigo-400/30 shadow-2xl flex flex-col items-center justify-center p-6 text-center text-white select-none ${className}`}>
      
      {/* Background Decorative Blur Rings */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-[10px] sm:text-[11px] font-black uppercase tracking-wider backdrop-blur-md">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Video đang cập nhật • Coming Soon</span>
        </span>
        {gradeLevel && (
          <span className="hidden sm:inline px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-bold">
            {gradeLevel}
          </span>
        )}
      </div>

      {/* Center Icon & Notice */}
      <div className="relative z-10 max-w-lg mx-auto space-y-3 px-4">
        {/* Film / Clapperboard Avatar */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-inner group">
          <Film className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
        </div>

        <div className="space-y-1">
          <h4 className="text-base sm:text-xl font-black font-heading text-white tracking-tight drop-shadow-sm">
            {lessonTitle}
          </h4>
          {lessonViTitle && (
            <p className="text-xs text-indigo-200 font-medium">
              {lessonViTitle}
            </p>
          )}
        </div>

        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-indigo-100 leading-relaxed text-center shadow-sm">
          <p className="font-semibold text-white/95">
            🎬 Bài học đang được Cô Trang chuẩn bị video thực tế chuẩn giọng Mỹ.
          </p>
          <p className="text-[11px] text-indigo-200 mt-0.5">
            Các em hãy tiếp tục học từ vựng, mẫu câu và tham gia các hoạt động tương tác nhé!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          {onContinue && (
            <button
              onClick={onContinue}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-900/40 hover:scale-103 active:scale-97 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Tiếp tục học Từ Vựng (Learn Vocab)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {isTeacher && onTeacherConfigure && (
            <button
              onClick={onTeacherConfigure}
              className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs shadow-md hover:scale-103 active:scale-97 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Cô Trang: Nhúng Link YouTube</span>
            </button>
          )}
        </div>
      </div>

      {/* Child-Safe Bottom Guarantee */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-[10px] sm:text-[11px] text-indigo-300/80 font-medium">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Nội dung tuyển chọn 100% an toàn cho trẻ em</span>
        </span>
        <span className="hidden sm:inline">
          Không chèn video quảng cáo hay video sai bài học
        </span>
      </div>

    </div>
  );
};
