import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  FileText,
  Star,
  Tv
} from 'lucide-react';
import { EducationalVideo, StudentVideoProgress } from '../../../types';
import { VideoQuizSection } from './VideoQuizSection';
import { soundEffects } from '../../../lib/soundEffects';
import { backgroundMusic } from '../../../lib/backgroundMusic';

interface VideoPlayerModalProps {
  video: EducationalVideo | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveProgress: (progress: StudentVideoProgress) => void;
  onEarnStars?: (stars: number) => void;
  studentId?: string;
  studentName?: string;
  classCode?: string;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  onSaveProgress,
  onEarnStars,
  studentId = 'guest_student',
  studentName = 'Học sinh Khám Phá',
  classCode = '5.6'
}) => {
  // Lazy-load state: video iframe only loads when student explicitly clicks "Play"
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'quiz' | 'details' | 'objectives'>('quiz');

  // Intelligent Audio: Duck background music while video lesson is playing
  useEffect(() => {
    if (isOpen && isPlaying) {
      backgroundMusic.duck('video');
    } else {
      backgroundMusic.unduck('video');
    }
    return () => {
      backgroundMusic.unduck('video');
    };
  }, [isOpen, isPlaying]);

  if (!isOpen || !video) return null;

  const handleStartPlay = () => {
    soundEffects.playClick();
    setIsPlaying(true);
    // Mark as watched
    onSaveProgress({
      videoId: video.id,
      studentId,
      studentName,
      classCode,
      watched: true,
      attempts: 1,
      starsEarned: 10,
      completedAt: new Date().toISOString()
    });
    if (onEarnStars) onEarnStars(10);
  };

  const handleQuizCompletion = (score: number, stars: number) => {
    onSaveProgress({
      videoId: video.id,
      studentId,
      studentName,
      classCode,
      watched: true,
      quizScore: score,
      quizTotal: video.questions?.length || 2,
      attempts: 1,
      starsEarned: stars,
      completedAt: new Date().toISOString()
    });
    if (onEarnStars) onEarnStars(stars);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-3xl shadow-2xl border-2 border-slate-100 flex flex-col overflow-hidden my-auto">
        
        {/* Modal Topbar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-4">
            <span className="px-2.5 py-0.5 rounded-lg bg-rose-500 text-white font-extrabold text-[11px] shrink-0">
              Khối Lớp {video.grade}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-200 truncate">
              {video.titleEn}
            </span>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              setIsPlaying(false);
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Child-Safe Video Player Frame (Lazy Loading & Privacy-Enhanced) */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-800">
            {isPlaying ? (
              <iframe
                src={video.embedUrl}
                title={video.titleEn}
                className="w-full h-full border-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              /* Lazy Facade Card with Thumbnail & Big Play Button */
              <div 
                onClick={handleStartPlay}
                className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
              >
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                <div className="relative z-10 text-center space-y-3 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300 border-4 border-white/80">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-black text-white font-heading drop-shadow-md">
                      Bấm để bắt đầu xem & học tập
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Thời lượng: {video.durationMinutes} phút • Bảo mật an toàn cho trẻ em
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Child-Safe Protection Strip */}
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between text-[11px] text-sky-900 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Chế độ Giáo dục An toàn (Child-Safe Mode): Không quảng cáo độc hại • Không theo dõi cookie</span>
            </div>
            <span className="hidden sm:inline text-sky-600 font-bold">Nguồn: {video.channelOrAuthor}</span>
          </div>

          {/* Bilingual Video Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              {video.isTeacherCreated && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] shadow-xs">
                  ⭐ BẢN QUYỀN CỦA CÔ THU TRANG
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-extrabold text-[10.5px]">
                {video.topic}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[10.5px]">
                Cấp độ: {video.difficulty}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
              {video.titleEn}
            </h3>
            <p className="text-sm font-semibold text-slate-500 italic">
              {video.titleVi}
            </p>
          </div>

          {/* Interactive Navigation Subtabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('quiz');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Thử thách Đố vui ({video.questions?.length || 2} câu)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('details');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Tóm tắt bài học (Descriptions)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('objectives');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'objectives'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>Mục tiêu học tập (Objectives)</span>
            </button>
          </div>

          {/* Tab 1: Interactive Quiz Section */}
          {activeTab === 'quiz' && (
            <VideoQuizSection
              video={video}
              onCompleteQuiz={handleQuizCompletion}
            />
          )}

          {/* Tab 2: Detailed Bilingual Descriptions */}
          {activeTab === 'details' && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                  English Lesson Overview
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {video.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                  Nội dung tóm tắt tiếng Việt
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {video.descriptionVi}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Learning Objectives */}
          {activeTab === 'objectives' && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div>
                <div className="text-xs font-black text-indigo-700 uppercase tracking-wider mb-2">
                  Key English Competencies & Learning Goals
                </div>
                <ul className="space-y-2">
                  {video.learningObjectivesEn?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {video.learningObjectivesVi && video.learningObjectivesVi.length > 0 && (
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-2">
                    Mục tiêu đạt được sau bài học (Tiếng Việt)
                  </div>
                  <ul className="space-y-2">
                    {video.learningObjectivesVi.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
