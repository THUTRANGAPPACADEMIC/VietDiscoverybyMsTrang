import React from 'react';
import { 
  Play, 
  Clock, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Tv, 
  Cpu, 
  Award,
  Video
} from 'lucide-react';
import { EducationalVideo, StudentVideoProgress } from '../../../types';
import { soundEffects } from '../../../lib/soundEffects';

interface VideoCardProps {
  video: EducationalVideo;
  progress?: StudentVideoProgress;
  onSelectVideo: (video: EducationalVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  progress,
  onSelectVideo
}) => {
  const isCompleted = progress?.watched && (progress?.quizScore ?? 0) >= 70;
  const isWatched = progress?.watched;

  const getSourceBadge = () => {
    switch (video.sourceType) {
      case 'teacher_youtube':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-extrabold text-[10px] shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-200 fill-amber-200" />
            <span>Bài giảng Cô Trang</span>
          </span>
        );
      case 'curated_youtube':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500 text-white font-bold text-[10px] shadow-xs">
            <Tv className="w-3 h-3" />
            <span>YouTube Giáo Dục</span>
          </span>
        );
      case 'ai_generated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-bold text-[10px] shadow-xs">
            <Cpu className="w-3 h-3" />
            <span>AI Đồ Họa 3D</span>
          </span>
        );
    }
  };

  const getGradeColor = () => {
    switch (video.grade) {
      case 1: return 'from-pink-500 to-rose-500 border-pink-300';
      case 2: return 'from-amber-500 to-orange-500 border-amber-300';
      case 3: return 'from-emerald-500 to-teal-500 border-emerald-300';
      case 4: return 'from-sky-500 to-blue-500 border-sky-300';
      case 5: return 'from-indigo-600 to-purple-600 border-indigo-300';
      default: return 'from-rose-500 to-pink-500 border-rose-300';
    }
  };

  return (
    <div 
      onClick={() => {
        soundEffects.playClick();
        onSelectVideo(video);
      }}
      className={`group relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between ${
        video.isTeacherCreated 
          ? 'border-amber-300 shadow-md shadow-amber-100 ring-2 ring-amber-200/50' 
          : 'border-slate-200 hover:border-sky-300 shadow-xs'
      }`}
    >
      {/* Teacher-created Golden Crown Ribbon */}
      {video.isTeacherCreated && (
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-400 text-amber-950 font-black text-[10px] shadow-md border border-white">
          <span>👑</span>
          <span>BẢN QUYỀN CÔ TRANG</span>
        </div>
      )}

      {/* Completion Status Badge */}
      {isCompleted && (
        <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500 text-white font-black text-[10px] shadow-md border border-white animate-fade-in">
          <CheckCircle2 className="w-3 h-3" />
          <span>Đã hoàn thành</span>
        </div>
      )}

      {/* Lazy-Loaded Facade Thumbnail Container */}
      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
        <img 
          src={video.thumbnailUrl} 
          alt={video.titleEn}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

        {/* Play Button Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-115 group-hover:bg-rose-600 transition-all duration-300 border-2 border-white/80">
            <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
          </div>
        </div>

        {/* Bottom Bar: Duration & Grade */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className={`px-2.5 py-0.5 rounded-lg text-white font-extrabold text-[10.5px] bg-gradient-to-r shadow-xs ${getGradeColor()}`}>
            Lớp {video.grade} • {video.difficulty}
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-xs text-white font-mono font-bold text-[10px]">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>{video.durationMinutes}:00</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Source & Topic */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {getSourceBadge()}
            <span className="text-[10.5px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
              {video.topic}
            </span>
          </div>

          {/* Bilingual Titles */}
          <h4 className="text-sm sm:text-base font-black text-slate-900 font-heading leading-snug line-clamp-2 group-hover:text-rose-600 transition-colors">
            {video.titleEn}
          </h4>
          <p className="text-xs font-semibold text-slate-500 line-clamp-1 italic">
            {video.titleVi}
          </p>
        </div>

        {/* Footer: Quiz Questions Count & Star Reward */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
          <div className="flex items-center gap-1 text-slate-600">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
            <span>{video.questions?.length || 2} câu hỏi đố vui</span>
          </div>

          <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>+25 sao</span>
          </div>
        </div>
      </div>
    </div>
  );
};
