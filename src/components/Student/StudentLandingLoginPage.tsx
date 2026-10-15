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

  // Quick fill helper for teacher / demo review
  const handleQuickDemoFill = (demoName: string, demoClass: string, demoCode: string) => {
    soundEffects.playClick();
    setFullName(demoName);
    setSelectedClassCode(demoClass);
    setAccessCode(demoCode);
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center overflow-x-hidden selection:bg-rose-200 selection:text-rose-900 font-sans">
      
      {/* 1. 3D ADVENTURE BACKGROUND LAYER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('/assets/landing/vietdiscovery_3d_adventure_bg.webp')`,
          backgroundColor: '#0c122c'
        }}
        aria-hidden="true"
      >
        {/* Soft subtle radial ambient lighting for extra visual richness */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(6,182,212,0.15)_0%,transparent_65%)] pointer-events-none" />
      </div>

      {/* 2. TOP STATUS & NAVIGATION BAR */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4 flex items-center justify-between gap-3">
        {/* Left: Project Brand Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-cyan-400/40 text-white shadow-lg shadow-cyan-950/40">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-xs sm:text-sm font-extrabold font-heading text-cyan-200 tracking-wide">
            VietDiscovery 3D
          </span>
          <span className="hidden sm:inline text-[11px] text-slate-300 font-medium">
            • Khám phá Việt Nam cùng Cô Trang
          </span>
        </div>

        {/* Right: Quick Portals (Teacher / Admin & Creator Info) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenCreatorModal();
            }}
            className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 shadow-md"
            title="Thông tin tác giả & phương pháp sư phạm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Về Cô Trang</span>
            <span className="sm:hidden">Cô Trang</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenStaffAuth();
            }}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/85 to-rose-500/85 hover:from-amber-500 hover:to-rose-500 backdrop-blur-md border border-amber-300/50 text-white text-xs font-black shadow-md transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            title="Đăng nhập dành cho giáo viên và quản trị viên"
          >
            <GraduationCap className="w-4 h-4 text-amber-200" />
            <span>Giáo Viên</span>
          </button>
        </div>
      </header>

      {/* 3. CENTER HERO: TRANSLUCENT 3D GAME GLASS PANEL POSITIONED OVER CRYSTAL ISLAND */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-16 sm:pt-24 md:pt-36 lg:pt-48 xl:pt-52 pb-6 flex flex-col items-center justify-center my-auto">
        
        {/* Translucent Navy/Blue Glassmorphism Panel (Matching Reference Image 2) */}
        <div className="w-full max-w-[440px] bg-sky-950/50 sm:bg-slate-900/55 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(2,132,199,0.4),0_0_35px_rgba(34,211,238,0.35)] border-2 border-cyan-300/80 relative transition-all duration-300 hover:shadow-[0_25px_60px_rgba(2,132,199,0.5),0_0_45px_rgba(34,211,238,0.5)] animate-in fade-in zoom-in-95 duration-400">
          
          {/* Glowing Top Pill Badge */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-300/50 text-cyan-200 text-[11px] sm:text-xs font-black tracking-wide shadow-xs">
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
              <span>CỔNG HỌC SINH KHÁM PHÁ • STUDENT PORTAL</span>
            </div>
            <p className="text-[11px] text-cyan-100/90 mt-1 font-semibold">
              Nhập Họ tên, chọn Lớp và Mã thẻ học sinh
            </p>
          </div>

          {/* Error / Lockout Alert Banner */}
          {errorMsg && (
            <div className="mb-3.5 p-3 rounded-2xl bg-rose-950/80 border border-rose-400/80 text-rose-200 text-xs font-bold flex items-center gap-2.5 animate-shake shadow-md">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span className="flex-1 leading-snug">{errorMsg}</span>
            </div>
          )}

          {lockoutSeconds > 0 && (
            <div className="mb-3.5 p-3 rounded-2xl bg-amber-950/80 border border-amber-400/80 text-amber-200 text-xs font-bold flex items-center gap-2.5 shadow-md">
              <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 animate-spin" />
              <span>Tài khoản tạm khóa: Vui lòng chờ {lockoutSeconds} giây để thử lại.</span>
            </div>
          )}

          {/* Real Accessible HTML Form Controls (Styling matches rounded pills in reference image) */}
          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* 1. Full Name Input */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 z-10 w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-xs">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="student-fullname-input"
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tên đăng nhập (Họ và tên)"
                  className="w-full pl-13 pr-4 py-3 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-sm sm:text-base font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-medium focus:outline-hidden focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/40 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* 2. Classroom Selector Dropdown */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 z-10 w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                  <School className="w-4 h-4" />
                </div>
                <select
                  id="student-classroom-select"
                  value={selectedClassCode}
                  onChange={(e) => setSelectedClassCode(e.target.value)}
                  className="w-full pl-13 pr-8 py-3 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-sm sm:text-base font-bold text-slate-800 focus:outline-hidden focus:border-indigo-400 focus:ring-4 focus:ring-indigo-300/40 shadow-sm transition-all cursor-pointer appearance-none"
                >
                  {STUDENT_CLASSROOM_OPTIONS.map(c => (
                    <option key={c.code} value={c.code}>
                      Lớp {c.label} ({c.code === '2.2' ? 'Grade 2' : c.code.startsWith('4') ? 'Grade 4' : 'Grade 5'})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 pointer-events-none text-slate-400 text-xs font-black">
                  ▼
                </div>
              </div>
            </div>

            {/* 3. Private Student Access Code */}
            <div>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 z-10 w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  id="student-accesscode-input"
                  type={showAccessCode ? 'text' : 'password'}
                  required
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Mật khẩu / Mã truy cập (VD4101)"
                  className="w-full pl-13 pr-11 py-3 sm:py-3.5 rounded-full border-2 border-cyan-200/80 bg-white/95 text-sm sm:text-base font-mono font-black tracking-wider text-slate-800 placeholder:font-sans placeholder:font-medium placeholder:tracking-normal focus:outline-hidden focus:border-amber-400 focus:ring-4 focus:ring-amber-300/40 shadow-sm transition-all uppercase"
                />
                <button
                  type="button"
                  onClick={() => setShowAccessCode(!showAccessCode)}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full transition-colors cursor-pointer"
                  title={showAccessCode ? 'Ẩn mã' : 'Hiện mã'}
                >
                  {showAccessCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Help Toggle */}
              <div className="flex justify-end mt-1 px-2">
                <button
                  type="button"
                  onClick={() => setShowHelpTip(!showHelpTip)}
                  className="text-[11px] text-cyan-200 hover:text-cyan-100 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <HelpCircle className="w-3 h-3 text-cyan-300" />
                  <span>Xem mã thẻ ở đâu?</span>
                </button>
              </div>

              {showHelpTip && (
                <div className="mt-1.5 p-2.5 rounded-2xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-100 text-[11px] font-medium leading-relaxed animate-in fade-in">
                  💡 Mã truy cập riêng (VD: <strong>VD4101</strong>) được in trên thẻ học sinh VietDiscovery hoặc do cô Trang gửi riêng cho phụ huynh.
                </div>
              )}
            </div>

            {/* 4. Large 3D Colorful Green LOGIN BUTTON (Exact match to ATTACHED IMAGE 2) */}
            <button
              id="student-login-submit-button"
              type="submit"
              disabled={isLoading || lockoutSeconds > 0}
              className="w-full mt-2 py-3.5 sm:py-4 px-6 rounded-full bg-gradient-to-b from-[#84cc16] via-[#22c55e] to-[#15803d] hover:from-[#a3e635] hover:to-[#16a34a] text-white font-black text-base sm:text-lg tracking-wider border-b-4 border-[#14532d] active:border-b-0 active:translate-y-1 shadow-[0_10px_25px_rgba(34,197,94,0.55)] flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>ĐANG XÁC THỰC BẢO MẬT...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
                  <span>ĐĂNG NHẬP • START LEARNING</span>
                  <ArrowRight className="w-5 h-5 text-emerald-100" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Test Bar (For Teacher / Evaluator Testing) */}
          <div className="mt-4 pt-3 border-t border-cyan-400/30">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] sm:text-[11px] font-black text-cyan-200/80 uppercase tracking-wider">
                Thử nhanh tài khoản mẫu:
              </span>
              <span className="text-[9px] bg-cyan-400/20 text-cyan-200 border border-cyan-300/40 font-black px-2 py-0.5 rounded-full">
                1-Click Demo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoFill('Nguyễn Minh Khôi', '4.1', 'VD4101')}
                className="px-2 py-1.5 rounded-xl bg-sky-900/60 hover:bg-sky-800/80 border border-cyan-400/40 text-[11px] font-bold text-cyan-100 transition-all text-center truncate cursor-pointer hover:scale-103 active:scale-97 shadow-xs"
                title="Nguyễn Minh Khôi - Lớp 4.1"
              >
                🎒 Khôi (4.1)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoFill('Hoàng Bảo Ân', '5.6', 'VD5601')}
                className="px-2 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 border border-purple-400/40 text-[11px] font-bold text-purple-200 transition-all text-center truncate cursor-pointer hover:scale-103 active:scale-97 shadow-xs"
                title="Hoàng Bảo Ân - Lớp 5.6"
              >
                🚀 Ân (5.6)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoFill('Vũ Gia Huy', '2.2', 'VD2201')}
                className="px-2 py-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-400/40 text-[11px] font-bold text-emerald-200 transition-all text-center truncate cursor-pointer hover:scale-103 active:scale-97 shadow-xs"
                title="Vũ Gia Huy - Lớp 2.2"
              >
                🌴 Huy (2.2)
              </button>
            </div>
          </div>

          {/* Privacy & Security Note */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-cyan-200/70 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
            <span>Bảo mật theo danh sách học sinh Lớp của Cô Trang • Supabase RLS</span>
          </div>

        </div>
      </main>

      {/* 4. FOOTER STATUS BAR */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cyan-200/80 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">VietDiscovery by Ms. Trang</span>
          <span>•</span>
          <span>Chương trình Tiếng Anh Tiểu học & 34 Tỉnh/Thành 2026</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
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
