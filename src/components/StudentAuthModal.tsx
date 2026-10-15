import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  User, 
  School, 
  KeyRound, 
  AlertCircle, 
  ShieldAlert, 
  Sparkles, 
  Eye, 
  EyeOff,
  CheckCircle2,
  ArrowRight,
  Compass
} from 'lucide-react';
import { UserProfile, ClassRoom, StudentRosterItem, DestinationProgress } from '../types';
import { authenticateStudent } from '../lib/studentAuth';

interface StudentAuthModalProps {
  isOpen: boolean;
  classes: ClassRoom[];
  students: StudentRosterItem[];
  onClose: () => void;
  onStudentLoginSuccess: (studentUser: UserProfile, progress?: Record<string, DestinationProgress>) => void;
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

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({
  isOpen,
  classes,
  students,
  onClose,
  onStudentLoginSuccess
}) => {
  const [selectedClassCode, setSelectedClassCode] = useState<string>('4.1');
  const [fullName, setFullName] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');
  const [showAccessCode, setShowAccessCode] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(0);

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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (lockoutSeconds > 0) {
      setErrorMsg(`Tài khoản tạm khóa do thử sai nhiều lần. Bé chờ ${lockoutSeconds} giây nữa nhé.`);
      return;
    }

    setIsLoading(true);

    try {
      const result = await authenticateStudent(fullName, selectedClassCode, accessCode);

      if (result.success && result.user) {
        onStudentLoginSuccess(result.user, result.progress);
        onClose();
      } else {
        setErrorMsg(result.errorMessage || 'Thông tin đăng nhập chưa khớp.');
        if (result.isLocked && result.remainingSeconds) {
          setLockoutSeconds(result.remainingSeconds);
        }
      }
    } catch (err) {
      setErrorMsg('Đã có lỗi kết nối xác thực. Bé thử lại nhé!');
    } finally {
      setIsLoading(false);
    }
  };

  // Quick fill helper for teacher / demo review
  const handleQuickDemoFill = (demoName: string, demoClass: string, demoCode: string) => {
    setFullName(demoName);
    setSelectedClassCode(demoClass);
    setAccessCode(demoCode);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          title="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-rose-200 text-3xl">
            🎓
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
            Cổng Học Sinh Khám Phá
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Student Explorer Portal • VietDiscovery by Ms. Trang
          </p>
          <p className="text-[11px] text-rose-600 font-semibold mt-0.5">
            Nhập Họ tên, chọn Lớp và Mã truy cập riêng do cô giáo cấp
          </p>
        </div>

        {/* Error / Lockout Banner */}
        {errorMsg && (
          <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {lockoutSeconds > 0 && (
          <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 animate-spin" />
            <span>Tạm khóa: Vui lòng chờ {lockoutSeconds} giây để thử lại.</span>
          </div>
        )}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* 1. Full Name Input */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-rose-500" />
              <span>Họ và Tên Học Sinh (Full Name)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Minh Khôi"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-normal focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-slate-50/50 hover:bg-white"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              Nhập đúng họ và tên có dấu như trong danh sách lớp của cô Trang
            </p>
          </div>

          {/* 2. Classroom Selector Dropdown */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-indigo-500" />
              <span>Lớp Học (Classroom)</span>
            </label>
            <div className="relative">
              <select
                id="student-classroom-select"
                value={selectedClassCode}
                onChange={(e) => setSelectedClassCode(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all cursor-pointer shadow-xs"
              >
                {STUDENT_CLASSROOM_OPTIONS.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Private Student Access Code */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-500" />
                <span>Mã Số Truy Cập Riêng (Access Code)</span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Mã riêng của con</span>
            </label>
            <div className="relative">
              <input
                type={showAccessCode ? 'text' : 'password'}
                required
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="VD: VD4101"
                className="w-full px-4 py-3 pr-11 rounded-2xl border border-slate-200 text-sm font-mono font-bold tracking-wider text-slate-800 placeholder:font-sans placeholder:font-normal placeholder:tracking-normal focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-slate-50/50 hover:bg-white"
              />
              <button
                type="button"
                onClick={() => setShowAccessCode(!showAccessCode)}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                title={showAccessCode ? 'Ẩn mã' : 'Hiện mã'}
              >
                {showAccessCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[10.5px] text-slate-500 mt-1 italic">
              🔒 Mã truy cập bảo mật được cô giáo gửi cho phụ huynh hoặc phát thẻ học tập tại lớp.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || lockoutSeconds > 0}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-rose-200 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span>Đang xác thực bảo mật...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>VÀO HỌC NGAY (START LEARNING)</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Helper for Teacher / Judges Review */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="text-[11px] font-bold text-slate-600 mb-2 flex items-center justify-between">
            <span>✨ Chọn mẫu kiểm thử nhanh (Demo Fast-Fill):</span>
            <span className="text-[10px] text-indigo-600 font-semibold">5 Khối Lớp</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-left">
            <button
              type="button"
              onClick={() => handleQuickDemoFill('Bùi Gia Huy', '2.2', 'VD2201')}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-slate-900">Bùi Gia Huy</div>
              <div className="text-[9.5px] text-rose-600">Class 2.2 • VD2201</div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoFill('Nguyễn Minh Khôi', '4.1', 'VD4101')}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-slate-900">Nguyễn Minh Khôi</div>
              <div className="text-[9.5px] text-indigo-600">Class 4.1 • VD4101</div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoFill('Hoàng Tuấn Kiệt', '4.6', 'VD4601')}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-slate-900">Hoàng Tuấn Kiệt</div>
              <div className="text-[9.5px] text-indigo-600">Class 4.6 • VD4601</div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoFill('Võ Minh Quân', '5.2', 'VD5201')}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-slate-900">Võ Minh Quân</div>
              <div className="text-[9.5px] text-emerald-600">Class 5.2 • VD5201</div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoFill('Phạm Đức Anh', '5.6', 'VD5601')}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-slate-900">Phạm Đức Anh</div>
              <div className="text-[9.5px] text-emerald-600">Class 5.6 • VD5601</div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoFill('Lê Hoàng Khôi', '5.6', 'VD56017')}
              className="p-2 rounded-xl bg-rose-50/70 hover:bg-rose-100/70 border border-rose-200 hover:border-rose-400 text-[10.5px] text-slate-700 transition-all text-left"
            >
              <div className="font-bold text-rose-900">Lê Hoàng Khôi ⭐</div>
              <div className="text-[9.5px] text-rose-600 font-bold">Class 5.6 • VD56017</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
