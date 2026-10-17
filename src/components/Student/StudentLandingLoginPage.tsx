import React, { useState, useEffect } from 'react';
import { 
  User, 
  School, 
  KeyRound, 
  AlertCircle, 
  ShieldAlert, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ArrowRight,
  GraduationCap,
  HelpCircle,
  ShieldCheck,
  Compass,
  Star,
  Settings
} from 'lucide-react';
import { UserProfile, DestinationProgress } from '../../types';
import { authenticateStudent } from '../../lib/studentAuth';
import { soundEffects } from '../../lib/soundEffects';

interface StudentLandingLoginPageProps {
  onLoginSuccess: (user: UserProfile, progress?: Record<string, DestinationProgress>) => void;
  onOpenStaffAuth: () => void;
  onOpenCreatorModal: () => void;
}

export interface StudentClassOption {
  code: string;
  label: string;
  classId: number;
}

export const STUDENT_CLASSROOM_OPTIONS: readonly StudentClassOption[] = [
  { code: '2.2', label: 'Class 2.2', classId: 1 },
  { code: '4.1', label: 'Class 4.1', classId: 2 },
  { code: '4.6', label: 'Class 4.6', classId: 3 },
  { code: '5.2', label: 'Class 5.2', classId: 4 },
  { code: '5.6', label: 'Class 5.6', classId: 5 },
] as const;

export const StudentLandingLoginPage: React.FC<StudentLandingLoginPageProps> = ({
  onLoginSuccess,
  onOpenStaffAuth,
  onOpenCreatorModal,
}) => {
  const [selectedClassCode, setSelectedClassCode] = useState<string>('4.1');
  const [fullName, setFullName] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');
  const [showAccessCode, setShowAccessCode] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(0);
  const [showHelpTip, setShowHelpTip] = useState<boolean>(false);

  // Countdown timer when locked
  useEffect(() => {
    if (lockoutSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockoutSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutSeconds]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (lockoutSeconds > 0) {
      soundEffects.playError();
      setErrorMsg(`Tài khoản tạm khóa do thử sai nhiều lần. Bé chờ ${lockoutSeconds} giây nữa nhé.`);
      return;
    }

    setIsLoading(true);
    soundEffects.playClick();

    try {
      const result = await authenticateStudent(fullName, selectedClassCode, accessCode);

      if (result.success && result.user) {
        soundEffects.playSuccess();
        onLoginSuccess(result.user, result.progress);
      } else {
        soundEffects.playError();
        setErrorMsg(result.errorMessage || 'Thông tin đăng nhập chưa khớp.');
        if (result.isLocked && result.remainingSeconds) {
          setLockoutSeconds(result.remainingSeconds);
        }
      }
    } catch (err) {
      soundEffects.playError();
      setErrorMsg('Đã có lỗi kết nối xác thực. Bé thử lại nhé!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center overflow-x-hidden selection:bg-rose-200 selection:text-rose-900 font-sans">
      
      {/* 1. 3D ADVENTURE BACKGROUND LAYER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat transition-all duration-700 pointer-events-none select-none"
        style={{
          backgroundImage: `url('/assets/landing/vietdiscovery_3d_adventure_bg_clean.webp')`,
          backgroundColor: '#0c122c'
        }}
        aria-hidden="true"
      >
        {/* Soft subtle radial ambient lighting for extra visual richness */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(6,182,212,0.18)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* 2. TOP STATUS & NAVIGATION BAR */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4 flex items-center justify-between gap-2">
        {/* Left: Project Brand Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-cyan-400/40 text-white shadow-lg shadow-cyan-950/40">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold font-heading text-cyan-200 tracking-wide whitespace-nowrap">
            VietDiscovery 3D
          </span>
          <span className="hidden md:inline text-[11px] text-slate-300 font-medium">
            • Khám phá Việt Nam cùng Cô Trang
          </span>
        </div>

        {/* Right: Quick Portals (Teacher / Admin & Creator Info) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenCreatorModal();
            }}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer hover:scale-105 active:scale-95 shadow-md"
            title="Thông tin tác giả & phương pháp sư phạm"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
            <span className="hidden sm:inline">Về Cô Trang</span>
            <span className="sm:hidden">Cô Trang</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenStaffAuth();
            }}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/90 to-rose-500/90 hover:from-amber-500 hover:to-rose-500 backdrop-blur-md border border-amber-300/50 text-white text-[11px] sm:text-xs font-black shadow-md transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            title="Đăng nhập dành cho giáo viên và quản trị viên"
          >
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 shrink-0" />
            <span>Giáo Viên</span>
          </button>
        </div>
      </header>

      {/* 3. CENTER HERO: RESPONSIVE 3D APP TITLE & STUDENT LOGIN GLASS PANEL */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 md:py-8 flex-1 flex flex-col items-center justify-center my-auto">
        
        {/* 3.1. PROMINENT 3D APP LOGO - APPROX 3X LARGER ON LAPTOP, DESKTOP & TABLET */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-4 sm:mb-6 md:mb-8 lg:mb-9 animate-in fade-in slide-in-from-top-3 duration-500">
          <div className="w-full max-w-[92vw] sm:max-w-[82vw] md:max-w-[78vw] lg:max-w-[760px] xl:max-w-[840px] 2xl:max-w-[920px] flex items-center justify-center mx-auto transition-all duration-300">
            <img
              src="/assets/landing/vietdiscovery_logo.webp"
              alt="VietDiscovery by Ms. Trang"
              className="w-full h-auto object-contain select-none drop-shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.01]"
              loading="eager"
            />
          </div>
        </div>

        {/* 3.2. TRANSLUCENT 3D GLASS LOGIN PANEL */}
        <div className="w-full max-w-[390px] sm:max-w-[440px] bg-sky-950/65 sm:bg-slate-900/60 backdrop-blur-md rounded-3xl p-3.5 sm:p-6 md:p-7 shadow-[0_20px_50px_rgba(2,132,199,0.35),0_0_35px_rgba(34,211,238,0.25)] border-2 border-cyan-300/80 relative transition-all duration-300 hover:shadow-[0_25px_60px_rgba(2,132,199,0.45),0_0_45px_rgba(34,211,238,0.35)] animate-in fade-in zoom-in-95 duration-400">
          
          {/* Glowing Top Pill Badge */}
          <div className="text-center mb-2 sm:mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-500/20 border border-cyan-300/50 text-cyan-200 text-[10px] sm:text-xs font-black tracking-wide shadow-xs">
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
              <span>CỔNG HỌC SINH KHÁM PHÁ • STUDENT PORTAL</span>
            </div>
            <p className="text-[10.5px] sm:text-[11px] text-cyan-100/90 mt-0.5 sm:mt-1 font-semibold">
              Nhập Họ tên, chọn Lớp và Mã thẻ học sinh
            </p>
          </div>

          {/* Error / Lockout Alert Banner */}
          {errorMsg && (
            <div className="mb-2 sm:mb-3 p-2 sm:p-2.5 rounded-2xl bg-rose-950/85 border border-rose-400/80 text-rose-200 text-xs font-bold flex items-center gap-2 animate-shake shadow-md">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span className="flex-1 leading-snug">{errorMsg}</span>
            </div>
          )}

          {lockoutSeconds > 0 && (
            <div className="mb-2 sm:mb-3 p-2 sm:p-2.5 rounded-2xl bg-amber-950/85 border border-amber-400/80 text-amber-200 text-xs font-bold flex items-center gap-2 shadow-md">
              <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 animate-spin" />
              <span>Tài khoản tạm khóa: Vui lòng chờ {lockoutSeconds} giây để thử lại.</span>
            </div>
          )}

          {/* Real Accessible HTML Form Controls */}
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
            
            {/* 1. Full Name Input */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3 z-10 w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-xs">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <input
                  id="student-fullname-input"
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tên đăng nhập (Họ và tên)"
                  className="w-full pl-11 sm:pl-13 pr-4 py-2 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-xs sm:text-base font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-medium focus:outline-hidden focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/40 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* 2. Classroom Selector Dropdown */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3 z-10 w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                  <School className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <select
                  id="student-classroom-select"
                  value={selectedClassCode}
                  onChange={(e) => setSelectedClassCode(e.target.value)}
                  className="w-full pl-11 sm:pl-13 pr-8 py-2 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-xs sm:text-base font-bold text-slate-800 focus:outline-hidden focus:border-indigo-400 focus:ring-4 focus:ring-indigo-300/40 shadow-sm transition-all cursor-pointer appearance-none"
                >
                  {STUDENT_CLASSROOM_OPTIONS.map(c => (
                    <option key={c.code} value={c.code}>
                      Lớp {c.label} ({c.code === '2.2' ? 'Grade 2' : c.code.startsWith('4') ? 'Grade 4' : 'Grade 5'})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 pointer-events-none text-slate-400 text-xs font-black">
                  ▼
                </div>
              </div>
            </div>

            {/* 3. Private Student Access Code */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3 z-10 w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs">
                  <KeyRound className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <input
                  id="student-accesscode-input"
                  type={showAccessCode ? 'text' : 'password'}
                  required
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Mật khẩu / Mã truy cập (VD4101)"
                  className="w-full pl-11 sm:pl-13 pr-10 py-2 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-xs sm:text-base font-mono font-black tracking-wider text-slate-800 placeholder:font-sans placeholder:font-medium placeholder:tracking-normal focus:outline-hidden focus:border-amber-400 focus:ring-4 focus:ring-amber-300/40 shadow-sm transition-all uppercase"
                />
                <button
                  type="button"
                  onClick={() => setShowAccessCode(!showAccessCode)}
                  className="absolute right-2.5 sm:right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors cursor-pointer"
                  title={showAccessCode ? 'Ẩn mã' : 'Hiện mã'}
                >
                  {showAccessCode ? <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>
              </div>

              {/* Code Help Toggle */}
              <div className="flex justify-end mt-0.5 sm:mt-1 px-2">
                <button
                  type="button"
                  onClick={() => setShowHelpTip(!showHelpTip)}
                  className="text-[10px] sm:text-[11px] text-cyan-200 hover:text-cyan-100 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <HelpCircle className="w-3 h-3 text-cyan-300" />
                  <span>Xem mã thẻ ở đâu?</span>
                </button>
              </div>

              {showHelpTip && (
                <div className="mt-1 p-2 sm:p-2.5 rounded-2xl bg-cyan-950/85 border border-cyan-400/50 text-cyan-100 text-[10.5px] sm:text-[11px] font-medium leading-relaxed animate-in fade-in">
                  💡 Mã truy cập riêng (VD: <strong>VD4101</strong>) được in trên thẻ học sinh VietDiscovery hoặc do cô Trang gửi riêng cho phụ huynh.
                </div>
              )}
            </div>

            {/* 4. Large 3D Colorful Green LOGIN BUTTON */}
            <button
              id="student-login-submit-button"
              type="submit"
              disabled={isLoading || lockoutSeconds > 0}
              className="w-full mt-1.5 sm:mt-2 py-2.5 sm:py-3.5 md:py-4 px-5 sm:px-6 rounded-full bg-gradient-to-b from-[#84cc16] via-[#22c55e] to-[#15803d] hover:from-[#a3e635] hover:to-[#16a34a] text-white font-black text-xs sm:text-base md:text-lg tracking-wider border-b-4 border-[#14532d] active:border-b-0 active:translate-y-1 shadow-[0_10px_25px_rgba(34,197,94,0.55)] flex items-center justify-center gap-1.5 sm:gap-2 transition-all transform hover:scale-[1.02] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>ĐANG XÁC THỰC BẢO MẬT...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-yellow-200 animate-pulse" />
                  <span>ĐĂNG NHẬP • START LEARNING</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-100" />
                </>
              )}
            </button>
          </form>

          {/* Privacy & Security Note */}
          <div className="mt-2 sm:mt-4 flex items-center justify-center gap-1.5 text-[9.5px] sm:text-[10.5px] text-cyan-200/80 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
            <span>Bảo mật theo danh sách học sinh Lớp của Cô Trang • Supabase RLS</span>
          </div>

        </div>
      </main>

      {/* 4. FOOTER STATUS BAR */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 py-2 sm:py-3 pb-28 sm:pb-3 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-cyan-200/80 font-medium">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-bold text-white">VietDiscovery by Ms. Trang</span>
          <span>•</span>
          <span>Chương trình Tiếng Anh Tiểu học & 34 Tỉnh/Thành 2026</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
          <button
            onClick={onOpenStaffAuth}
            className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer font-bold"
          >
            Cổng Giáo Viên & Quản Trị
          </button>
          <span>•</span>
          <button
            onClick={onOpenCreatorModal}
            className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Tác giả: Cô Trần Thị Thu Trang
          </button>
        </div>
      </footer>

    </div>
  );
};
