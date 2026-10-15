import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Search, 
  Sparkles, 
  Star, 
  Filter, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Flame, 
  PlayCircle,
  Video,
  Layers,
  ArrowRight
} from 'lucide-react';
import { EducationalVideo, StudentVideoProgress, UserProfile, VideoDifficulty, VideoSourceType } from '../../../types';
import { getEducationalVideos, getStudentVideoProgressMap, saveStudentVideoProgress } from '../../../lib/videoAcademyService';
import { VideoCard } from './VideoCard';
import { VideoPlayerModal } from './VideoPlayerModal';
import { soundEffects } from '../../../lib/soundEffects';

interface VideoAcademyHubProps {
  user: UserProfile | null;
  onEarnStars?: (stars: number) => void;
}

export const VideoAcademyHub: React.FC<VideoAcademyHubProps> = ({
  user,
  onEarnStars
}) => {
  // Determine default grade from student's profile
  const userGradeNum = user?.gradeLevel 
    ? (parseInt(user.gradeLevel.replace(/[^0-9]/g, ''), 10) || 4)
    : 4;

  const [selectedGrade, setSelectedGrade] = useState<1 | 2 | 3 | 4 | 5 | 'all'>(userGradeNum as any);
  const [selectedSourceType, setSelectedSourceType] = useState<VideoSourceType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<VideoDifficulty | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [videos, setVideos] = useState<EducationalVideo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progressMap, setProgressMap] = useState<Record<string, StudentVideoProgress>>({});
  
  // Selected video for player modal
  const [activeVideo, setActiveVideo] = useState<EducationalVideo | null>(null);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

  // Load videos and student progress on mount or filter changes
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const loaded = await getEducationalVideos({
          grade: selectedGrade,
          sourceType: selectedSourceType,
          difficulty: selectedDifficulty,
          topic: selectedTopic,
          searchQuery
        }, false); // isStaffViewer: false -> only approved videos for students!
        setVideos(loaded);
        setProgressMap(getStudentVideoProgressMap());
      } catch (err) {
        console.error('Failed to load educational videos:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [selectedGrade, selectedSourceType, selectedDifficulty, selectedTopic, searchQuery]);

  const handleSaveProgress = async (progress: StudentVideoProgress) => {
    await saveStudentVideoProgress(progress);
    setProgressMap(getStudentVideoProgressMap());
  };

  const handleOpenVideo = (video: EducationalVideo) => {
    soundEffects.playClick();
    setActiveVideo(video);
    setIsPlayerModalOpen(true);
  };

  // Extract unique topics for filter dropdown
  const uniqueTopics = ['all', 'Heritage & Landmarks', 'Colors & Animals', 'Greetings & Friends', 'Traditional Festivals', 'Geography & Local Life', 'Food & Culture', 'Caves & Geology', 'Modern Vietnam & Global Integration', 'Wildlife & Biodiversity', 'Science & Innovation'];

  // Metrics calculation
  const totalWatched = Object.values(progressMap).filter(p => p.watched).length;
  const totalStarsEarned = Object.values(progressMap).reduce((acc, p) => acc + (p.starsEarned || 0), 0);
  const totalQuizzesPassed = Object.values(progressMap).filter(p => (p.quizScore ?? 0) >= 70).length;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in pb-16">
      
      {/* 1. ACADEMY HERO BANNER */}
      <div 
        className="relative rounded-3xl p-6 sm:p-8 text-white overflow-hidden shadow-xl border-2 border-sky-300"
        style={{
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 40%, #0f172a 100%)',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.4) 0%, transparent 40%), linear-gradient(135deg, #0284c7 0%, #0369a1 45%, #0f172a 100%)'
        }}
      >
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
            <span>VIETDISCOVERY MULTI-SOURCE VIDEO ACADEMY</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-white drop-shadow-md">
            Học tiếng Anh qua Video Sinh Động 🎬
          </h1>

          <p className="text-xs sm:text-sm text-sky-100 font-medium leading-relaxed">
            Khám phá vẻ đẹp đất nước Việt Nam qua bài giảng độc quyền của Cô Trang, video giáo dục chuẩn quốc tế và hoạt hình 3D trực quan. Đã được kiểm duyệt 100% an toàn cho học sinh tiểu học!
          </p>

          {/* Student Progress Metrics Strip */}
          <div className="pt-2 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-md">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-center">
              <div className="text-lg sm:text-2xl font-black text-amber-300">{totalWatched}</div>
              <div className="text-[10px] sm:text-xs text-sky-200 font-bold">Video đã xem</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-center">
              <div className="text-lg sm:text-2xl font-black text-emerald-300">{totalQuizzesPassed}</div>
              <div className="text-[10px] sm:text-xs text-sky-200 font-bold">Đố vui đạt chuẩn</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-center">
              <div className="text-lg sm:text-2xl font-black text-rose-300">+{totalStarsEarned}</div>
              <div className="text-[10px] sm:text-xs text-sky-200 font-bold">Sao tích lũy</div>
            </div>
          </div>
        </div>

        {/* Mascot / Cinema Icon Decoration */}
        <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block text-8xl">
          🎬
        </div>
      </div>

      {/* 2. GRADE SELECTOR PILLS (1–5 & ALL) */}
      <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between gap-2 overflow-x-auto">
        <span className="text-xs font-black text-slate-500 uppercase tracking-wider shrink-0 hidden md:inline ml-2">
          Chọn Khối Lớp:
        </span>

        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => {
              soundEffects.playClick();
              setSelectedGrade('all');
            }}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
              selectedGrade === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Tất cả Khối Lớp
          </button>

          {([1, 2, 3, 4, 5] as const).map(g => (
            <button
              key={g}
              onClick={() => {
                soundEffects.playClick();
                setSelectedGrade(g);
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                selectedGrade === g
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-200 ring-2 ring-rose-300'
                  : 'bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700'
              }`}
            >
              <span>Lớp {g}</span>
              {g === userGradeNum && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[9px]">Lớp của bé</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MULTI-FACETED FILTER BAR */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm video, địa danh, từ khóa..."
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 placeholder:font-normal placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Source Type Filter */}
          <select
            value={selectedSourceType}
            onChange={(e) => setSelectedSourceType(e.target.value as any)}
            className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
          >
            <option value="all">Tất cả Nguồn Video</option>
            <option value="teacher_youtube">⭐ Bài giảng Cô Trang</option>
            <option value="curated_youtube">📺 YouTube Giáo Dục Quốc Tế</option>
            <option value="ai_generated">🤖 AI Đồ Họa 3D Trực Quan</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as any)}
            className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
          >
            <option value="all">Tất cả Cấp độ (CEFR)</option>
            <option value="Pre-A1 Starter">Pre-A1 Starter (Lớp 1)</option>
            <option value="Pre-A1 Beginner">Pre-A1 Beginner (Lớp 2)</option>
            <option value="Pre-A1 Foundation">Pre-A1 Foundation (Lớp 3)</option>
            <option value="A1 Elementary">A1 Elementary (Lớp 4)</option>
            <option value="A1+ Explorer">A1+ Explorer (Lớp 5)</option>
          </select>

          {/* Topic Filter */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
          >
            <option value="all">Tất cả Chủ đề (Topics)</option>
            <option value="Colors & Animals">Sắc màu & Động vật</option>
            <option value="Greetings & Friends">Chào hỏi & Giao tiếp</option>
            <option value="Heritage & Landmarks">Di sản & Thắng cảnh</option>
            <option value="Traditional Festivals">Lễ hội Truyền thống</option>
            <option value="Geography & Local Life">Địa lý & Đời sống</option>
            <option value="Food & Culture">Ẩm thực & Văn hóa</option>
            <option value="Caves & Geology">Hang động & Địa chất</option>
            <option value="Modern Vietnam & Global Integration">Việt Nam Hiện đại & Hội nhập</option>
            <option value="Wildlife & Biodiversity">Động vật Hoang dã & Sinh thái</option>
            <option value="Science & Innovation">Khoa học & Đổi mới sáng tạo</option>
          </select>

        </div>
      </div>

      {/* 4. VIDEO GRID */}
      {isLoading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold text-slate-500">Đang tải học viện video chuẩn giáo dục...</p>
        </div>
      ) : videos.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center space-y-3 border border-slate-200">
          <div className="text-4xl">🎬</div>
          <h4 className="text-base font-black text-slate-800">Không tìm thấy video phù hợp</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Bé hãy thử chọn lại bộ lọc khối lớp hoặc tìm kiếm với từ khóa khác nhé!
          </p>
          <button
            onClick={() => {
              setSelectedGrade('all');
              setSelectedSourceType('all');
              setSelectedDifficulty('all');
              setSelectedTopic('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-bold text-xs hover:bg-rose-100 transition-colors cursor-pointer"
          >
            Xem toàn bộ video
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map(vid => (
            <VideoCard
              key={vid.id}
              video={vid}
              progress={progressMap[vid.id]}
              onSelectVideo={handleOpenVideo}
            />
          ))}
        </div>
      )}

      {/* 5. INTERACTIVE VIDEO PLAYER MODAL */}
      <VideoPlayerModal
        video={activeVideo}
        isOpen={isPlayerModalOpen}
        onClose={() => setIsPlayerModalOpen(false)}
        onSaveProgress={handleSaveProgress}
        onEarnStars={onEarnStars}
        studentId={user?.id || 'guest_student'}
        studentName={user?.fullName || 'Học sinh Khám Phá'}
        classCode={user?.classCode || '5.6'}
      />

    </div>
  );
};
