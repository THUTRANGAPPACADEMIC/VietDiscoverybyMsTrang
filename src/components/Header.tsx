import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Award, 
  BarChart3, 
  FolderKanban, 
  Users, 
  FileCheck2, 
  Sparkles, 
  LogOut, 
  LogIn, 
  ShieldCheck,
  Eye,
  Gamepad2,
  ChevronDown,
  Cloud,
  Star,
  Volume2,
  VolumeX,
  Tv,
  Scissors,
  Camera
} from 'lucide-react';
import { UserProfile, UserRole, GradeBand } from '../types';
import { isSupabaseConfigured } from '../lib/supabase';
import { soundEffects } from '../lib/soundEffects';
import { playEnglishSpeech } from '../lib/speech';
import { AvatarImage } from './Student/AvatarImage';

interface HeaderProps {
  currentRole: UserRole;
  user: UserProfile | null;
  activeSection: 'student' | 'teacher' | 'admin';
  setActiveSection: (section: 'student' | 'teacher' | 'admin') => void;
  activeStudentTab: 'explore' | 'games' | 'videos' | 'passport' | 'progress';
  setActiveStudentTab: (tab: 'explore' | 'games' | 'videos' | 'passport' | 'progress') => void;
  activeTeacherTab: 'approval' | 'curriculum' | 'materials' | 'videos' | 'classes' | 'progress' | 'assessment' | 'ai' | 'clip_selector' | 'vocab_images';
  setActiveTeacherTab: (tab: 'approval' | 'curriculum' | 'materials' | 'videos' | 'classes' | 'progress' | 'assessment' | 'ai' | 'clip_selector' | 'vocab_images') => void;
  previewGradeBand?: GradeBand;
  onOpenStudentAuth: () => void;
  onLogout: () => void;
  totalStars: number;
  isCloudSynced?: boolean;
  onOpenCreatorModal?: () => void;
  onOpenAvatarModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  user,
  activeSection,
  setActiveSection,
  activeStudentTab,
  setActiveStudentTab,
  activeTeacherTab,
  setActiveTeacherTab,
  previewGradeBand,
  onOpenStudentAuth,
  onLogout,
  totalStars,
  isCloudSynced = false,
  onOpenCreatorModal,
  onOpenAvatarModal
}) => {
  const isOnline = isCloudSynced || isSupabaseConfigured();
  const [soundOn, setSoundOn] = React.useState(() => soundEffects.isSoundEnabled());

  React.useEffect(() => {
    const unsubscribe = soundEffects.subscribe((enabled) => {
      setSoundOn(enabled);
    });
    return unsubscribe;
  }, []);

  const handleToggleSound = () => {
    const next = soundEffects.toggleSound();
    setSoundOn(next);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* 1. TOPMOST SCHOOL & CREATOR CREDENTIAL STRIP (For Staff & Extended views) */}
      {activeSection !== 'student' && (
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white text-xs py-1 px-3 sm:px-4 shadow-xs relative z-30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-1 sm:gap-2 max-w-full overflow-hidden text-center sm:text-left">
              <span className="px-2 py-0.5 rounded-full bg-white/20 font-black text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0 border border-white/20">
                Trường Tiểu học Trang Tấn Khương
              </span>
              <span className="font-semibold text-[10px] sm:text-[11px] truncate">
                Giáo viên: <strong>Cô Trần Thị Thu Trang</strong> • Xã Hiệp Phước, TP. Hồ Chí Minh
              </span>
            </div>
            {onOpenCreatorModal && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenCreatorModal();
                }}
                className="text-[10px] sm:text-[11px] font-bold text-amber-100 hover:text-white underline flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Về Tác Giả & Website</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 2. CUTE PANORAMIC BLUE SKY HEADER BAR */}
      <div 
        className="relative bg-gradient-to-r from-[#48cae4] via-[#00b4d8] to-[#0096c7] text-white overflow-hidden shadow-md border-b-2 border-sky-300"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 120%, rgba(255,255,255,0.4) 0%, transparent 60%), linear-gradient(to right, #48cae4, #00b4d8, #0096c7)'
        }}
      >
        {/* Soft floating clouds overlay */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Left: Illustrated Explorer Character (Without nameplate) + Bilingual Title: Vietnam – Land of Wonders */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              {/* Illustrated Character Image without "Captain Trang" nameplate */}
              <div 
                className="relative group cursor-pointer shrink-0"
                onClick={() => {
                  soundEffects.playClick();
                  playEnglishSpeech("Welcome to Vietnam, Land of Wonders! Let's explore together!");
                  setActiveStudentTab('explore');
                }}
                title="Vietnam – Land of Wonders • Chạm để khám phá!"
              >
                <div className="rounded-2xl overflow-hidden border-2 border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.2)] group-hover:scale-105 group-hover:border-amber-300 transition-all duration-300 bg-white/20">
                  <img 
                    src="/assets/cute/header_character_clean.png" 
                    alt="Vietnam – Land of Wonders" 
                    className="h-10 sm:h-12 md:h-13 w-auto object-contain select-none"
                  />
                </div>
              </div>

              {/* Bilingual Title: Vietnam – Land of Wonders / Việt Nam – Vùng đất diệu kỳ */}
              <div 
                className="flex flex-col justify-center cursor-pointer select-none group text-left"
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('explore');
                }}
                title="Vietnam – Land of Wonders • Việt Nam – Vùng đất diệu kỳ"
              >
                {/* English Title: Large, bold, playful, rounded font */}
                <div className="flex items-center gap-1.5 leading-none">
                  <span 
                    className="text-base sm:text-lg md:text-[19px] lg:text-[21px] font-black font-heading tracking-tight text-white drop-shadow-[0_2px_4px_rgba(2,132,199,0.6)] group-hover:text-amber-200 transition-colors whitespace-nowrap"
                    style={{
                      textShadow: '0 2px 4px rgba(3, 105, 161, 0.7), 0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Vietnam <span className="text-amber-300 font-bold">–</span> Land of Wonders
                  </span>
                  <span className="text-xs sm:text-sm animate-pulse">✨</span>
                </div>

                {/* Vietnamese translation directly underneath in a slightly smaller font */}
                <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1 leading-none">
                  <span className="text-[11px] sm:text-xs md:text-[13px] font-bold font-heading text-sky-100 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] group-hover:text-white transition-colors whitespace-nowrap">
                    Việt Nam – Vùng đất diệu kỳ
                  </span>
                  <span className="text-[11px] inline-block">🇻🇳</span>
                </div>
              </div>
            </div>

            {/* Center: White Cloud Slogan Pill - Preserving the main homepage title */}
            <div className="hidden lg:flex bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-md border border-sky-200 flex-col items-center justify-center text-center shrink-0">
              <div className="text-xs sm:text-sm md:text-base font-black font-heading text-blue-900 leading-tight flex items-center justify-center gap-1.5 whitespace-nowrap">
                <span>The Magical Adventure Across Vietnam!</span>
                <span className="text-base">🌈</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold font-heading text-blue-800 leading-tight flex items-center justify-center gap-1 whitespace-nowrap mt-0.5">
                <span>Cuộc phiêu lưu kỳ diệu trên đất Việt!</span>
                <span className="text-red-500">❤️</span>
              </div>
            </div>

            {/* Right: Sound, Stars, Cloud Synced & Student Profile Pill */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap justify-center">
              
              {/* Sound Effects Toggle Button */}
              <button
                onClick={handleToggleSound}
                title={soundOn ? "Tắt âm thanh hiệu ứng (Mute sound)" : "Bật âm thanh hiệu ứng (Enable sound)"}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-sky-300 text-sky-800 hover:bg-sky-50 shadow-xs font-black text-xs cursor-pointer transition-all active:scale-95"
              >
                {soundOn ? (
                  <>
                    <Volume2 className="w-4 h-4 text-sky-600 animate-pulse" />
                    <span className="hidden sm:inline text-[11px]">Âm thanh</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline text-[11px] text-slate-500">Đã tắt</span>
                  </>
                )}
              </button>

              {/* Stars Counter Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/95 border border-amber-300 text-amber-900 shadow-xs font-black text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
                <span>{totalStars}</span>
                <span className="text-amber-800 font-bold hidden sm:inline">Stars</span>
              </div>

              {/* Cloud Synced vs Local Mode Badge */}
              <div 
                title={isCloudSynced ? "Supabase Cloud DB Connected & Synced (Đã đồng bộ máy chủ)" : "Local Database Mode (Chế độ lưu trên máy)"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xs font-black text-xs transition-colors ${
                  isCloudSynced
                    ? 'bg-emerald-100/95 border-emerald-300 text-emerald-800'
                    : 'bg-slate-100/95 border-slate-300 text-slate-700'
                }`}
              >
                <Cloud className={`w-4 h-4 ${isCloudSynced ? 'fill-emerald-500 text-emerald-600' : 'fill-slate-400 text-slate-500'}`} />
                <span className="hidden sm:inline">{isCloudSynced ? 'Cloud Synced' : 'Local Mode'}</span>
              </div>

              {/* Student Profile Pill with 3D Avatar */}
              {user ? (
                <div className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-full bg-white shadow-md border border-slate-200 text-slate-800">
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      if (onOpenAvatarModal) onOpenAvatarModal();
                    }}
                    title="Đổi nhân vật 3D (Change 3D Avatar)"
                    className="relative group cursor-pointer shrink-0 transition-transform hover:scale-110 active:scale-95"
                  >
                    <AvatarImage
                      avatar={user.avatar}
                      name={user.fullName}
                      className="w-8 h-8 sm:w-9 sm:h-9"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-[9px] text-amber-950 font-black flex items-center justify-center border border-white shadow-xs">
                      ✨
                    </span>
                  </button>
                  <div 
                    className="text-left min-w-0 cursor-pointer"
                    onClick={() => {
                      if (onOpenAvatarModal) {
                        soundEffects.playClick();
                        onOpenAvatarModal();
                      }
                    }}
                    title="Bấm để đổi avatar 3D"
                  >
                    <div className="text-xs font-black text-slate-800 leading-tight truncate max-w-[85px] sm:max-w-none hover:text-sky-600 transition-colors">
                      {user.fullName || 'Nguyễn Minh Anh'}
                    </div>
                    <div className="text-[10px] text-slate-400 font-bold leading-none flex items-center gap-1">
                      <span>{user.className ? user.className.split('-')[0].trim() : 'Class (Grade 3)'}</span>
                      <span className="text-[9px] text-amber-600 font-extrabold hover:underline hidden sm:inline">• Đổi avatar</span>
                    </div>
                  </div>
                  <ChevronDown 
                    onClick={() => {
                      if (onOpenAvatarModal) {
                        soundEffects.playClick();
                        onOpenAvatarModal();
                      }
                    }}
                    className="w-3.5 h-3.5 text-slate-400 hover:text-amber-500 cursor-pointer shrink-0" 
                  />
                  <span className="text-sm shrink-0">🇻🇳</span>
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onLogout();
                    }}
                    title="Sign Out"
                    className="p-1 text-slate-400 hover:text-rose-600 rounded-md transition-colors cursor-pointer shrink-0 ml-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    onOpenStudentAuth();
                  }}
                  className="px-4 py-1.5 rounded-full font-black text-xs text-white bg-rose-500 hover:bg-rose-600 shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Student Login</span>
                </button>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR */}
      {user && (
        <div className="bg-gradient-to-r from-amber-50/70 via-white/95 to-sky-50/70 backdrop-blur-md border-b-2 border-amber-200/60 py-2.5 px-3 sm:px-6 shadow-xs relative z-20">
          <div className="max-w-7xl mx-auto">
          
          {/* Staff Switchers (if Staff) */}
          {currentRole !== 'student' && (
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 overflow-x-auto">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider shrink-0">Staff Portal:</span>
              {(currentRole === 'admin' || currentRole === 'super_admin') && (
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveSection('admin');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeSection === 'admin'
                      ? 'bg-slate-900 text-amber-300 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Admin Console</span>
                </button>
              )}

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveSection('teacher');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeSection === 'teacher'
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FolderKanban className="w-4 h-4" />
                <span>Teaching Studio</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveSection('student');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeSection === 'student'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Student Preview {previewGradeBand && `(${previewGradeBand.replace('_', ' ')})`}</span>
              </button>
            </div>
          )}

          {/* Student Experience: The 4 Cute Glossy Navigation Pills */}
          {activeSection === 'student' ? (
            <div className="hidden sm:flex items-center justify-center gap-3 md:gap-4 overflow-x-auto py-1">
              
              {/* 1. Khám phá (Explore) - Pink Pill */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('explore');
                }}
                className={`min-w-[165px] md:min-w-[190px] h-[52px] md:h-[56px] px-4 py-2 rounded-full flex items-center gap-3 transition-all transform cursor-pointer border-b-4 relative overflow-hidden shrink-0 ${
                  activeStudentTab === 'explore'
                    ? 'bg-gradient-to-r from-[#ff2d75] via-[#f43f5e] to-[#e11d48] border-rose-800 text-white shadow-xl shadow-rose-500/40 ring-4 ring-rose-300 scale-102'
                    : 'bg-gradient-to-r from-[#ff2d75]/90 via-[#f43f5e]/90 to-[#e11d48]/90 border-rose-800/60 text-white shadow-md shadow-rose-500/20 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0.5'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full"></div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <Compass className="w-4 h-4 md:w-5 md:h-5 text-rose-500 animate-spin-slow" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs md:text-sm font-black font-heading text-white leading-tight">Khám phá</div>
                  <div className="text-[10px] md:text-xs font-bold text-white/90 leading-tight">(Explore)</div>
                </div>
              </button>

              {/* 2. Đấu trường (Games) - Golden Yellow Pill */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('games');
                }}
                className={`min-w-[165px] md:min-w-[190px] h-[52px] md:h-[56px] px-4 py-2 rounded-full flex items-center gap-3 transition-all transform cursor-pointer border-b-4 relative overflow-hidden shrink-0 ${
                  activeStudentTab === 'games'
                    ? 'bg-gradient-to-r from-[#ffb703] via-[#f59e0b] to-[#d97706] border-amber-700 text-white shadow-xl shadow-amber-500/40 ring-4 ring-amber-300 scale-102'
                    : 'bg-gradient-to-r from-[#ffb703]/90 via-[#f59e0b]/90 to-[#d97706]/90 border-amber-700/60 text-white shadow-md shadow-amber-500/20 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0.5'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full"></div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs md:text-sm font-black font-heading text-white leading-tight">Đấu trường</div>
                  <div className="text-[10px] md:text-xs font-bold text-white/90 leading-tight">(Games)</div>
                </div>
              </button>

              {/* 3. Video Học tập (Video Academy) - Royal Coral / Ruby Pill */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('videos');
                }}
                className={`min-w-[165px] md:min-w-[190px] h-[52px] md:h-[56px] px-4 py-2 rounded-full flex items-center gap-3 transition-all transform cursor-pointer border-b-4 relative overflow-hidden shrink-0 ${
                  activeStudentTab === 'videos'
                    ? 'bg-gradient-to-r from-[#e63946] via-[#f72585] to-[#7209b7] border-pink-900 text-white shadow-xl shadow-pink-500/40 ring-4 ring-pink-300 scale-102'
                    : 'bg-gradient-to-r from-[#e63946]/90 via-[#f72585]/90 to-[#7209b7]/90 border-pink-900/60 text-white shadow-md shadow-pink-500/20 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0.5'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full"></div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <Tv className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs md:text-sm font-black font-heading text-white leading-tight">Video Học tập</div>
                  <div className="text-[10px] md:text-xs font-bold text-white/90 leading-tight">(Academy)</div>
                </div>
              </button>

              {/* 4. Hộ chiếu (Passport) - Lavender Purple Pill */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('passport');
                }}
                className={`min-w-[165px] md:min-w-[190px] h-[52px] md:h-[56px] px-4 py-2 rounded-full flex items-center gap-3 transition-all transform cursor-pointer border-b-4 relative overflow-hidden shrink-0 ${
                  activeStudentTab === 'passport'
                    ? 'bg-gradient-to-r from-[#b57bee] via-[#9333ea] to-[#7e22ce] border-purple-900 text-white shadow-xl shadow-purple-500/40 ring-4 ring-purple-300 scale-102'
                    : 'bg-gradient-to-r from-[#b57bee]/90 via-[#9333ea]/90 to-[#7e22ce]/90 border-purple-900/60 text-white shadow-md shadow-purple-500/20 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0.5'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full"></div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs md:text-sm font-black font-heading text-white leading-tight">Hộ chiếu</div>
                  <div className="text-[10px] md:text-xs font-bold text-white/90 leading-tight">(Passport)</div>
                </div>
              </button>

              {/* 4. Tiến độ (Progress) - Mint Turquoise Pill */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('progress');
                }}
                className={`min-w-[165px] md:min-w-[190px] h-[52px] md:h-[56px] px-4 py-2 rounded-full flex items-center gap-3 transition-all transform cursor-pointer border-b-4 relative overflow-hidden shrink-0 ${
                  activeStudentTab === 'progress'
                    ? 'bg-gradient-to-r from-[#00cbb8] via-[#0d9488] to-[#0f766e] border-teal-900 text-white shadow-xl shadow-teal-500/40 ring-4 ring-teal-300 scale-102'
                    : 'bg-gradient-to-r from-[#00cbb8]/90 via-[#0d9488]/90 to-[#0f766e]/90 border-teal-900/60 text-white shadow-md shadow-teal-500/20 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0.5'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full"></div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0">
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs md:text-sm font-black font-heading text-white leading-tight">Tiến độ</div>
                  <div className="text-[10px] md:text-xs font-bold text-white/90 leading-tight">(Progress)</div>
                </div>
              </button>

            </div>
          ) : activeSection === 'teacher' ? (
            /* Teacher Sub-tabs */
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('approval');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeTeacherTab === 'approval'
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-300'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Phê duyệt nội dung (Mới)</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('curriculum');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeTeacherTab === 'curriculum'
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white shadow-md shadow-pink-200 ring-2 ring-pink-300'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Content Studio (Giáo trình độc quyền)</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('materials');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'materials'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Học liệu bài giảng</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('videos');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'videos'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Tv className="w-4 h-4 text-amber-300" />
                <span>Quản lý Video Học tập</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('clip_selector');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'clip_selector'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xs ring-2 ring-rose-300'
                    : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
                }`}
              >
                <Scissors className="w-4 h-4 text-rose-600" />
                <span>Cắt Clip YouTube (Mới)</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('vocab_images');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'vocab_images'
                    ? 'bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-xs ring-2 ring-teal-300'
                    : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200'
                }`}
              >
                <Camera className="w-4 h-4 text-teal-600" />
                <span>Ảnh Từ Vựng (Mới)</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('classes');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'classes'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Quản lý lớp học</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('progress');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'progress'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Tiến độ học sinh</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('assessment');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'assessment'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Đánh giá học tập</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTeacherTab('ai');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTeacherTab === 'ai'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Trợ lý AI</span>
              </button>
            </div>
          ) : null}

        </div>
      </div>
      )}
    </header>
  );
};
