import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  KeyRound, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Mail,
  School,
  AlertTriangle
} from 'lucide-react';
import { UserProfile } from '../types';
import { setStaffInitialPassword } from '../lib/staffAuth';
import { soundEffects } from '../lib/soundEffects';

interface TeacherAcceptInviteModalProps {
  isOpen: boolean;
  mode: 'setup' | 'error' | 'success';
  userEmail?: string;
  errorTitle?: string;
  errorMessage?: string;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
  onOpenStaffLogin: () => void;
}

export const TeacherAcceptInviteModal: React.FC<TeacherAcceptInviteModalProps> = ({
  isOpen,
  mode,
  userEmail,
  errorTitle,
  errorMessage,
  onClose,
  onSuccess,
  onOpenStaffLogin,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  // Real-time validations
  const isLengthValid = password.length >= 8;
  const hasLetterAndNumber = /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
  const doPasswordsMatch = password.length > 0 && password === confirmPassword;
  const isFormValid = isLengthValid && hasLetterAndNumber && doPasswordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!isLengthValid) {
      setFormError('Mật khẩu cần có ít nhất 8 ký tự.');
      soundEffects.playError();
      return;
    }

    if (!hasLetterAndNumber) {
      setFormError('Mật khẩu cần kết hợp cả chữ cái và số.');
      soundEffects.playError();
      return;
    }

    if (!doPasswordsMatch) {
      setFormError('Mật khẩu xác nhận không khớp.');
      soundEffects.playError();
      return;
    }

    setIsLoading(true);
    soundEffects.playClick();

    try {
      const res = await setStaffInitialPassword(password);
      if (res.success && res.user) {
        soundEffects.playSuccess();
        onSuccess(res.user);
      } else {
        soundEffects.playError();
        setFormError(res.error || 'Không thể thiết lập mật khẩu. Vui lòng thử lại.');
      }
    } catch (err: any) {
      soundEffects.playError();
      setFormError(err.message || 'Đã có lỗi xảy ra trong quá trình thiết lập.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ------------------------------------------------------------- */}
        {/* CASE 1: EXPIRED OR INVALID INVITATION LINK                    */}
        {/* ------------------------------------------------------------- */}
        {mode === 'error' && (
          <div className="text-center py-2">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-xs text-3xl">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              {errorTitle || 'Liên kết không còn hiệu lực'}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 font-medium">
              Invitation Link Expired or Already Used
            </p>

            <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-left text-xs text-amber-900 leading-relaxed">
              <p className="font-semibold mb-1">
                {errorMessage || 'Liên kết lời mời đã quá hạn sử dụng hoặc đã được kích hoạt trước đó.'}
              </p>
              <p className="text-[11px] text-amber-800 mt-2">
                • Nếu Thầy/Cô chưa từng thiết lập mật khẩu: Vui lòng nhắn Cô Trần Thị Thu Trang để nhận lại liên kết mới.
              </p>
              <p className="text-[11px] text-amber-800 mt-1">
                • Nếu Thầy/Cô đã từng tạo mật khẩu: Bấm "Đăng nhập Giáo viên" hoặc "Quên mật khẩu" bên dưới để vào hệ thống.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onClose();
                  onOpenStaffLogin();
                }}
                className="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Đăng nhập Cổng Giáo viên (Staff Login)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Quay lại Trang chủ
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* CASE 2: INITIAL PASSWORD SETUP FORM (INVITATION ACCEPTANCE)    */}
        {/* ------------------------------------------------------------- */}
        {mode === 'setup' && (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 text-3xl">
                🌸
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                Chào mừng Thầy/Cô gia nhập!
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Kích hoạt tài khoản Giáo viên • VietDiscovery by Ms. Trang
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[11px] font-bold text-indigo-700">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>{userEmail || 'Tài khoản được Cô Trang mời'}</span>
              </div>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mật khẩu khởi tạo mới (New Password)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    placeholder="Tối thiểu 8 ký tự (chữ & số)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                    title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Xác nhận lại mật khẩu (Confirm Password)
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    placeholder="Nhập lại mật khẩu vừa gõ"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                    title={showConfirmPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Real-time Checklist */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isLengthValid ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span className={isLengthValid ? 'text-slate-800 font-semibold' : 'text-slate-400'}>
                    Độ dài tối thiểu 8 ký tự
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${hasLetterAndNumber ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span className={hasLetterAndNumber ? 'text-slate-800 font-semibold' : 'text-slate-400'}>
                    Kết hợp cả chữ cái và chữ số
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${doPasswordsMatch ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span className={doPasswordsMatch ? 'text-slate-800 font-semibold' : 'text-slate-400'}>
                    Hai mật khẩu trùng khớp
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className="w-full mt-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span>Đang bảo mật lưu mật khẩu...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span>LƯU MẬT KHẨU & VÀO DẠY (START TEACHING)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* CASE 3: SUCCESS CELEBRATION                                  */}
        {/* ------------------------------------------------------------- */}
        {mode === 'success' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs text-3xl">
              🎉
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              Kích hoạt thành công!
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Chào mừng Thầy/Cô gia nhập đội ngũ VietDiscovery!
            </p>
            <p className="text-[11px] text-emerald-700 font-bold mt-3">
              Đang chuyển hướng vào Không gian Giảng dạy (Teaching Studio)...
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
