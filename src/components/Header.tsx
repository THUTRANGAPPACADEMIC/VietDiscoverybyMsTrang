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
  Star
} from 'lucide-react';
import { UserProfile, UserRole, GradeBand } from '../types';
import { isSupabaseConfigured } from '../lib/supabase';
import { soundEffects } from '../lib/soundEffects';

interface HeaderProps {
  currentRole: UserRole;
  user: UserProfile | null;
  activeSection: 'student' | 'teacher' | 'admin';
  setActiveSection: (section: 'student' | 'teacher' | 'admin') => void;
  activeStudentTab: 'explore' | 'games' | 'passport' | 'progress';
  setActiveStudentTab: (tab: 'explore' | 'games' | 'passport' | 'progress') => void;
  activeTeacherTab: 'materials' | 'classes' | 'progress' | 'assessment' | 'ai';
  setActiveTeacherTab: (tab: 'materials' | 'classes' | 'progress' | 'assessment' | 'ai') => void;
  previewGradeBand?: GradeBand;
  onOpenStudentAuth: () => void;
  onLogout: () => void;
  totalStars: number;
  onOpenCreatorModal?: () => void;
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
  onOpenCreatorModal
}) => {
  const isOnline = isSupabaseConfigured();

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
                <span>Về Tác Giả & Dự Án</span>
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
            
            {/* Left: Captain Trang Mascot + 3D Globe + VietDiscovery Banner */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <img 
                src="/assets/cute/captain_trang_clean.png" 
                alt="Captain Trang" 
                className="h-10 sm:h-12 md:h-13 w-auto object-contain drop-shadow-md select-none rounded-xl"
              />
              <img 
                src="/assets/cute/logo_vietdiscovery.png" 
                alt="VietDiscovery by Ms. Trang" 
                className="h-10 sm:h-12 md:h-13 object-contain drop-shadow-md select-none hover:scale-102 transition-transform cursor-pointer"
                onClick={() => {
                  soundEffects.playClick();
                  setActiveStudentTab('explore');
                }}
              />
            </div>

            {/* Center: White Cloud Slogan Pill */}
            <div className="bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-md border border-sky-200 flex flex-col items-center justify-center text-center">
              <div className="text-xs sm:text-sm md:text-base font-black font-heading text-blue-900 leading-tight flex items-center justify-center gap-1.5 whitespace-nowrap">
                <span>The Magical Adventure Across Vietnam!</span>
                <span className="text-base">🌈</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold font-heading text-blue-800 leading-tight flex items-center justify-center gap-1 whitespace-nowrap mt-0.5">
                <span>Cuộc phiêu lưu kỳ diệu trên đất Việt!</span>
                <span className="text-red-500">❤️</span>
              </div>
            </div>

            {/* Right: Stars, Cloud Synced & Student Profile Pill */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap justify-center">
              
              {/* Stars Counter Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/95 border border-amber-300 text-amber-900 shadow-xs font-black text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
                <span>{totalStars}</span>
                <span className="text-amber-800 font-bold hidden sm:inline">Stars</span>
              </div>

              {/* Cloud Synced Badge */}
              <div 
                title={isOnline ? "Supabase Cloud DB Connected" : "Local Database Mode"}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/95 border border-emerald-300 text-emerald-800 shadow-xs font-black text-xs"
              >
                <Cloud className="w-4 h-4 fill-emerald-500 text-emerald-600" />
                <span className="hidden sm:inline">Cloud Synced</span>
              </div>

              {/* Student Profile Pill */}
              {user ? (
                <div className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-full bg-white shadow-md border border-slate-200 text-slate-800">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-500 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-xs shrink-0">
                    {user.fullName?.charAt(0) || 'N'}
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-black text-slate-800 leading-tight truncate max-w-[85px] sm:max-w-none">
                      {user.fullName || 'Nguyễn Minh Anh'}
                    </div>
                    <div className="text-[10px] text-slate-400 font-bold leading-none">
                      {user.className ? user.className.split('-')[0].trim() : 'Class (Grade 3)'}
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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

      {/* 3. MAIN NAVIGATION BAR (When on Games, Passport, Progress, or Staff views) */}
      {(currentRole !== 'student' || activeSection !== 'student' || activeStudentTab !== 'explore') && (
        <div className="bg-gradient-to-r from-amber-50/70 via-white/95 to-sky-50/70 backdrop-blur-md border-b-2 border-amber-200/60 py-2.5 px-3 sm:px-6 shadow-xs relative z-20">
          <div className="max-w-7xl mx-auto">
          
          {/* Staff Switchers (if Staff) */}
          {currentRole !== 'student' && (
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 overflow-x-auto">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider shrink-0">Staff Portal:</span>
              {currentRole === 'admin' && (
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

              {/* 3. Hộ chiếu (Passport) - Lavender Purple Pill */}
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
