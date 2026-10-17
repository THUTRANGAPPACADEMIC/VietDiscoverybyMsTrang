import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  AlertCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import { UserProfile, UserRole } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface StaffAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStaffLoginSuccess: (user: UserProfile) => void;
  onOpenPreview?: () => void;
}

// ---------------------------------------------------------------------------
// 3D Glowing Globe with Golden Shield & Golden Star (Exact match to reference)
// ---------------------------------------------------------------------------
const GlowingGlobeShieldIcon: React.FC = () => (
  <div className="relative w-20 h-20 sm:w-22 sm:h-22 mx-auto flex items-center justify-center mb-2.5 sm:mb-3">
    {/* Ambient radial halo */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-amber-300/20 blur-lg pointer-events-none" />
    
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full relative z-10 drop-shadow-[0_8px_16px_rgba(2,132,199,0.25)] select-none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Globe radial gradient */}
        <radialGradient id="globeSphere" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="25%" stopColor="#38BDF8" />
          <stop offset="65%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
        
        {/* Continent fill */}
        <radialGradient id="continentGlow" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.95" />
          <stop offset="80%" stopColor="#22C55E" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#15803D" stopOpacity="0.8" />
        </radialGradient>

        {/* Shield gold border gradient */}
        <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FDE047" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Shield inner blue gradient */}
        <linearGradient id="shieldCore" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.95" />
        </linearGradient>

        {/* Golden star shine */}
        <radialGradient id="starShineGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#FACC15" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 3D Holographic Globe */}
      <circle cx="50" cy="50" r="38" fill="url(#globeSphere)" />
      
      {/* Globe continents */}
      <path 
        d="M 28 35 C 32 30 40 28 45 32 C 48 35 44 42 38 45 C 32 48 26 42 28 35 Z 
           M 22 55 C 25 50 32 52 35 58 C 38 65 30 72 25 68 C 20 64 20 58 22 55 Z
           M 60 26 C 68 25 76 30 78 36 C 80 42 74 46 68 44 C 64 42 58 32 60 26 Z" 
        fill="url(#continentGlow)" 
      />

      {/* Globe grid wireframe */}
      <ellipse cx="50" cy="50" rx="38" ry="18" stroke="#E0F2FE" strokeOpacity="0.3" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="20" ry="38" stroke="#E0F2FE" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="12" y1="50" x2="88" y2="50" stroke="#E0F2FE" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="50" y1="12" x2="50" y2="88" stroke="#E0F2FE" strokeOpacity="0.25" strokeWidth="1" />
      
      {/* Glossy top-left highlight */}
      <ellipse cx="38" cy="28" rx="20" ry="10" fill="#FFFFFF" fillOpacity="0.4" transform="rotate(-25 38 28)" />

      {/* 3D Golden Protective Shield */}
      <path 
        d="M 50 26 C 58 26 68 21 72 18 C 72 38 68 56 50 68 C 32 56 28 38 28 18 C 32 21 42 26 50 26 Z" 
        fill="url(#shieldBorder)" 
        stroke="#FEF3C7" 
        strokeWidth="1.2"
        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))"
      />

      {/* Inner Crystal Core */}
      <path 
        d="M 50 30 C 56 30 64 26 67 23 C 67 39 64 53 50 63 C 36 53 33 39 33 23 C 36 26 44 30 50 30 Z" 
        fill="url(#shieldCore)" 
        stroke="#BAE6FD" 
        strokeWidth="1"
      />

      {/* Golden Star in Center (matching reference image) */}
      <circle cx="50" cy="46" r="8" fill="url(#starShineGold)" />
      <path 
        d="M 50 34 L 52.8 43.5 L 62 46 L 52.8 48.5 L 50 58 L 47.2 48.5 L 38 46 L 47.2 43.5 Z" 
        fill="#FDE047" 
        stroke="#EAB308" 
        strokeWidth="0.5"
        filter="drop-shadow(0 0 4px rgba(250,204,21,0.6))"
      />
      <circle cx="50" cy="46" r="2.5" fill="#FFFFFF" />
    </svg>
  </div>
);

// ---------------------------------------------------------------------------
// Outline Key Icon for Password Field (Exact match to reference)
// ---------------------------------------------------------------------------
const OutlineKeyIcon: React.FC = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 text-slate-400 shrink-0 select-none" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="M11 12l8.5-8.5M16 5l2.5 2.5M19 8l2 2" />
    <circle cx="7.5" cy="15.5" r="1.5" fill="currentColor" />
  </svg>
);

// ---------------------------------------------------------------------------
// Email Badge Icon (Right side of Email Input - exact match to reference)
// ---------------------------------------------------------------------------
const EmailBadgeIcon: React.FC = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0 select-none drop-shadow-xs" fill="none">
    {/* Blue Mail Envelope */}
    <rect x="2" y="9" width="28" height="18" rx="4" fill="#38BDF8" />
    {/* Inner Letter */}
    <rect x="6" y="5" width="20" height="14" rx="2" fill="#FEF3C7" />
    <line x1="9" y1="9" x2="23" y2="9" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="9" y1="13" x2="19" y2="13" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
    {/* Flap lines */}
    <path d="M2 12L14.6 20.4C15.5 21 16.5 21 17.4 20.4L30 12" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
    {/* Red Notification Badge with X */}
    <circle cx="25" cy="24" r="4.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M23.5 22.5L26.5 25.5M26.5 22.5L23.5 25.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------------------
// Password Gear Badge with Shield (Right side of Password Input - exact match)
// ---------------------------------------------------------------------------
const PasswordGearBadge: React.FC<{ onClick?: () => void; isVisible?: boolean }> = ({ onClick, isVisible }) => (
  <button
    type="button"
    onClick={onClick}
    className="shrink-0 p-0.5 hover:scale-105 active:scale-95 transition-transform cursor-pointer focus:outline-hidden"
    title={isVisible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
    aria-label={isVisible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
  >
    <svg viewBox="0 0 32 32" className="w-6 h-6 select-none drop-shadow-xs" fill="none">
      {/* Purple Gear with 8 teeth */}
      <circle cx="15" cy="15" r="9.5" fill="#8B5CF6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 15 + Math.cos(rad) * 9.5;
        const y = 15 + Math.sin(rad) * 9.5;
        return (
          <circle key={angle} cx={x} cy={y} r="3" fill="#8B5CF6" />
        );
      })}
      {/* Gear inner hole */}
      <circle cx="15" cy="15" r="4" fill="#FFFFFF" />
      <circle cx="15" cy="15" r="2.5" fill="#A855F7" />
      
      {/* Green Security Shield at bottom right */}
      <path 
        d="M 23 16 C 25.5 16 27.5 14.5 28 13.5 C 28 20 27 23.5 23 26 C 19 23.5 18 20 18 13.5 C 18.5 14.5 20.5 16 23 16 Z" 
        fill="#10B981" 
        stroke="#FFFFFF" 
        strokeWidth="1.2"
      />
      {/* Gold star dot in shield */}
      <circle cx="23" cy="19.5" r="1.6" fill="#FEF08A" />
    </svg>
  </button>
);

export const StaffAuthModal: React.FC<StaffAuthModalProps> = ({
  isOpen,
  onClose,
  onStaffLoginSuccess,
  onOpenPreview
}) => {
  const [mode, setMode] = useState<'login' | 'forgot_password'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [resetSuccessMsg, setResetSuccessMsg] = useState('');

  // Accessibility: handle ESC key & prevent body scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setResetSuccessMsg('');
    setLoading(true);

    try {
      const cleanEmail = email.trim();
      if (!cleanEmail) {
        setErrorMsg('Vui lòng nhập địa chỉ email của bạn.');
        return;
      }

      if (isSupabaseConfigured() && supabase) {
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: window.location.origin
        });

        if (error) throw error;

        setResetSuccessMsg(
          `Đã gửi liên kết khôi phục mật khẩu đến ${cleanEmail}. Vui lòng kiểm tra hộp thư (hoặc mục Spam).`
        );
      } else {
        setResetSuccessMsg(
          `Hệ thống đang hoạt động ở chế độ ngoại tuyến. Vui lòng liên hệ Quản trị viên để đặt lại mật khẩu.`
        );
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Không thể gửi email khôi phục. Vui lòng kiểm tra lại địa chỉ email.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setResetSuccessMsg('');
    setLoading(true);

    try {
      const isCloud = isSupabaseConfigured();

      if (isCloud && supabase) {
        // 1. Authenticate with Supabase Auth (email/password)
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password
        });
        if (error) throw error;
        if (!data.user) throw new Error('Không nhận được thông tin xác thực tài khoản.');

        // 2. Query public.profiles securely by the confirmed auth.users.id
        let userRole: UserRole = 'teacher';
        let fullName = data.user.user_metadata?.full_name || data.user.user_metadata?.display_name || 'Ms. Thu Trang';

        try {
          const { data: profile, error: profileErr } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .maybeSingle();

          if (!profileErr && profile) {
            if (profile.role === 'super_admin' || profile.role === 'admin' || profile.role === 'teacher') {
              userRole = profile.role as UserRole;
            }
            if (profile.display_name) {
              fullName = profile.display_name;
            } else if (profile.full_name) {
              fullName = profile.full_name;
            }
          } else if (data.user.app_metadata?.role) {
            userRole = data.user.app_metadata.role as UserRole;
          }
        } catch (dbErr) {
          console.warn('[VietDiscovery Auth] Profile query warning:', dbErr);
        }

        const isSuperOrAdmin = userRole === 'super_admin' || userRole === 'admin';
        const staffUser: UserProfile = {
          id: data.user.id,
          email: data.user.email || email,
          fullName: fullName,
          role: userRole,
          stars: 500,
          avatar: userRole === 'super_admin' ? 'fa-crown' : isSuperOrAdmin ? 'fa-shield-halved' : 'fa-chalkboard-user'
        };

        onStaffLoginSuccess(staffUser);
        onClose();
      } else {
        // Fallback for offline demo only when Supabase is unconfigured
        const userRole: UserRole = 'teacher';
        const staffUser: UserProfile = {
          id: 'teacher-offline',
          email,
          fullName: 'Cô Trần Thị Thu Trang',
          role: userRole,
          stars: 500,
          avatar: 'fa-chalkboard-user'
        };

        onStaffLoginSuccess(staffUser);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Xác thực không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-900/35 backdrop-blur-[2px] animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* ==================================================================== */}
      {/* BRIGHT WHITE ELEGANT CARD WITH SKY-BLUE BORDER (EXACT MATCH TO IMAGE) */}
      {/* ==================================================================== */}
      <div 
        className="relative w-full max-w-[440px] sm:max-w-[480px] bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_rgba(15,23,42,0.18),0_0_0_2px_#38bdf8] border-2 border-sky-400 overflow-hidden my-auto animate-in zoom-in-95 duration-250 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP-RIGHT CLEAN CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title="Đóng cửa sổ (Esc)"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 2. CENTER HEADER WITH 3D GLOBE & GOLD SHIELD */}
        <div className="text-center mb-5 sm:mb-6">
          <GlowingGlobeShieldIcon />

          <h3 className="text-xl sm:text-[25px] font-black font-heading text-slate-900 tracking-tight leading-tight">
            {mode === 'login' ? 'Educator & Admin Portal' : 'Khôi phục Mật khẩu'}
          </h3>
          <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 mt-1.5 leading-snug max-w-sm mx-auto">
            {mode === 'login' ? (
              <>
                Chào mừng <span className="font-bold text-slate-900">Cô Thu Trang</span> trở lại trạm điều khiển VietDiscovery!
              </>
            ) : (
              'Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu mới'
            )}
          </p>
        </div>

        {/* 3. ERROR & SUCCESS NOTIFICATIONS */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2 shadow-xs animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span className="leading-snug">{errorMsg}</span>
          </div>
        )}

        {resetSuccessMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2 shadow-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span className="leading-snug">{resetSuccessMsg}</span>
          </div>
        )}

        {/* 4. FORM VIEW */}
        {mode === 'login' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 4.1. EMAIL FIELD */}
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5 text-left">
                Địa chỉ Email Công vụ / Giảng dạy
              </label>
              <div className="relative rounded-2xl bg-white border-2 border-sky-400 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 shadow-xs flex items-center px-3.5 py-2.5 sm:py-3 transition-all">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="thutrang@vietdiscovery.edu.vn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-xs sm:text-sm font-medium placeholder:text-slate-400 outline-none pl-2.5 pr-2"
                />
                <EmailBadgeIcon />
              </div>
            </div>

            {/* 4.2. PASSWORD FIELD */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs sm:text-[13px] font-bold text-slate-900">
                  Mật khẩu
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg('');
                    setResetSuccessMsg('');
                    setMode('forgot_password');
                  }}
                  className="text-xs sm:text-[12.5px] font-bold text-sky-600 hover:text-sky-700 hover:underline transition-colors cursor-pointer"
                >
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative rounded-2xl bg-white border-2 border-sky-400 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 shadow-xs flex items-center px-3.5 py-2.5 sm:py-3 transition-all">
                <OutlineKeyIcon />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-xs sm:text-sm font-medium placeholder:text-slate-400 outline-none pl-2.5 pr-2 font-mono"
                />
                <PasswordGearBadge onClick={() => setShowPassword(!showPassword)} isVisible={showPassword} />
              </div>
            </div>

            {/* 4.3. SECURITY PANEL (PALE MINT GREEN BOX WITH SHIELD CHECK) */}
            <div className="relative rounded-2xl bg-[#e6fcf5] border border-emerald-300 p-3 sm:p-3.5 shadow-xs text-left">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-[11.5px] sm:text-xs font-semibold text-emerald-950 leading-snug">
                  Phân quyền (Teacher / Admin / Super Admin) được xác thực tự động từ Supabase.
                </span>
              </div>
            </div>

            {/* 4.4. CORAL RED TO GOLDEN ORANGE GRADIENT BUTTON (EXACT MATCH TO REFERENCE) */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 rounded-2xl text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 disabled:opacity-60 cursor-pointer flex items-center justify-center hover:brightness-105 active:scale-[0.985]"
              style={{
                background: 'linear-gradient(90deg, #ff4e3e 0%, #ff682b 45%, #ff9a1c 100%)',
                boxShadow: '0 8px 20px -2px rgba(255, 104, 43, 0.4)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Đang xác thực...</span>
                </span>
              ) : (
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                  Đăng nhập Studio / Console
                </span>
              )}
            </button>

            {onOpenPreview && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPreview();
                  }}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 hover:underline transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>🛡️ Mở bản xem trước Content Approval Center (Không cần đăng nhập)</span>
                </button>
              </div>
            )}
          </form>
        ) : (
          /* FORGOT PASSWORD FORM */
          <form onSubmit={handleResetPassword} className="space-y-4 text-left">
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5">
                Nhập Email tài khoản cần đặt lại mật khẩu
              </label>
              <div className="relative rounded-2xl bg-white border-2 border-sky-400 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 shadow-xs flex items-center px-3.5 py-2.5 sm:py-3 transition-all">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="thutrang@vietdiscovery.edu.vn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-slate-800 text-xs sm:text-sm font-medium placeholder:text-slate-400 outline-none pl-2.5 pr-2"
                />
                <EmailBadgeIcon />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 rounded-2xl text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 disabled:opacity-60 cursor-pointer flex items-center justify-center hover:brightness-105 active:scale-[0.985]"
              style={{
                background: 'linear-gradient(90deg, #ff4e3e 0%, #ff682b 45%, #ff9a1c 100%)',
                boxShadow: '0 8px 20px -2px rgba(255, 104, 43, 0.4)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Đang gửi...</span>
                </span>
              ) : (
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                  Gửi liên kết đặt lại mật khẩu
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setErrorMsg('');
                setResetSuccessMsg('');
                setMode('login');
              }}
              className="w-full py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại Đăng nhập</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
