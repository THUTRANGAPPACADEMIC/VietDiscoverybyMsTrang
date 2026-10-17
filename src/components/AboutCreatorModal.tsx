import React, { useEffect } from 'react';
import { 
  X, 
  GraduationCap, 
  School, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Award,
  Globe,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface AboutCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutCreatorModal: React.FC<AboutCreatorModalProps> = ({ isOpen, onClose }) => {
  // ESC key handler for accessibility
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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-author-title"
    >
      <div 
        className="bg-white rounded-[28px] sm:rounded-[36px] max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-[0_25px_70px_rgba(7,59,122,0.35)] border-2 border-white/80 overflow-hidden relative animate-in zoom-in-95 duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ==================================================================== */}
        {/* 1. MODAL HEADER: ROYAL BLUE -> PREMIUM VIOLET GRADIENT               */}
        {/* ==================================================================== */}
        <div className="shrink-0 bg-gradient-to-r from-[#073B7A] via-[#3B28B0] to-[#7040E8] text-white p-4 sm:p-6 relative overflow-hidden border-b-2 border-[#00B8D9]/40 shadow-md">
          {/* Subtle Decorative Ambient Glows */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#00B8D9]/25 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#FF4F8B]/20 blur-xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-16 bg-[#FFB627]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-3">
            {/* Left: Icon + Titles */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner shrink-0">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFB627] animate-pulse" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00B8D9]/25 border border-[#00B8D9]/50 text-cyan-200 text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#FFB627]" />
                    <span>Dự án giáo dục • VietDiscovery</span>
                  </span>
                </div>
                <h3 
                  id="modal-author-title"
                  className="font-black text-white text-base sm:text-xl md:text-2xl font-heading tracking-tight leading-tight mt-1 truncate sm:whitespace-normal"
                >
                  THÔNG TIN VỀ TÁC GIẢ VÀ DỰ ÁN
                </h3>
                <p className="text-cyan-200 text-xs sm:text-sm font-semibold mt-0.5 flex items-center gap-1.5">
                  <span>About the Author & Project</span>
                  <span className="text-white/40">•</span>
                  <span className="text-amber-300 font-bold">VietDiscovery by Ms. Trang</span>
                </p>
              </div>
            </div>

            {/* Right: High-contrast Close Button */}
            <button 
              onClick={onClose}
              aria-label="Đóng cửa sổ"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0 hover:rotate-90 duration-200"
              title="Đóng cửa sổ (Esc)"
            >
              <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. SCROLLABLE MODAL CONTENT BODY                                     */}
        {/* ==================================================================== */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-7 space-y-4 sm:space-y-5 bg-gradient-to-b from-slate-50/60 to-white">
          
          {/* CARD 1: AUTHOR INFORMATION CARD (Premium White with Gold Accent) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-slate-100 shadow-[0_10px_30px_rgba(7,59,122,0.06)] space-y-3.5 relative overflow-hidden transition-all hover:border-[#FFB627]/40">
            {/* Top gold accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFB627] via-[#FF4F8B] to-[#7040E8]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-black uppercase tracking-wider shadow-xs w-fit">
                <Award className="w-3.5 h-3.5 text-amber-100" />
                <span>Tác giả & Chủ nhiệm Dự án Giáo dục</span>
              </div>
              <span className="text-[11px] font-bold text-slate-400">
                Chuyên viên Tiếng Anh Tiểu học
              </span>
            </div>

            {/* Author Profile Main Block */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#073B7A] via-[#352599] to-[#7040E8] text-white flex items-center justify-center text-2xl sm:text-3xl font-black font-heading shadow-md shadow-[#073B7A]/20 border-2 border-white shrink-0">
                👩‍🏫
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-xl sm:text-2xl text-[#073B7A] font-heading tracking-tight">
                    Cô Trần Thị Thu Trang
                  </h4>
                  <span className="inline-flex items-center text-emerald-600" title="Đã xác thực danh tính giáo viên">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-bold">
                  <School className="w-4 h-4 text-[#7040E8] shrink-0" />
                  <span>Đơn vị công tác:</span>
                  <span className="text-indigo-950 font-extrabold">Trường Tiểu học Trang Tấn Khương</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <MapPin className="w-4 h-4 text-[#FF4F8B] shrink-0" />
                  <span>Địa bàn:</span>
                  <strong className="text-slate-800">Xã Hiệp Phước, Thành phố Hồ Chí Minh, Việt Nam</strong>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: EDUCATIONAL PURPOSE CARD (Vibrant Cyan / Royal Blue) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-cyan-50/90 via-sky-50/60 to-white border-2 border-[#00B8D9]/40 shadow-[0_8px_25px_rgba(0,184,217,0.08)] space-y-3">
            <div className="flex items-center gap-2 text-[#073B7A]">
              <div className="w-8 h-8 rounded-xl bg-[#00B8D9]/15 text-[#00B8D9] flex items-center justify-center shrink-0">
                <Heart className="w-4.5 h-4.5 fill-[#00B8D9] text-[#00B8D9]" />
              </div>
              <div>
                <h5 className="font-black text-sm sm:text-base font-heading text-[#073B7A]">
                  Mục Tiêu & Triết Lý Sư Phạm
                </h5>
                <p className="text-[11px] font-semibold text-cyan-800">
                  Educational Purpose & Pedagogical Philosophy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Dự án kết hợp phương pháp <strong>EdTech hiện đại</strong> và <strong>Gamification (học qua trò chơi)</strong> nhằm khơi dậy tình yêu quê hương, đất nước và văn hóa Việt Nam trong từng bài học tiếng Anh. Trải nghiệm được phân hóa sư phạm chặt chẽ theo từng khối lớp từ Lớp 1 đến Lớp 5.
            </p>

            {/* Key Pedagogical Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {[
                { icon: '🚀', label: 'EdTech Hiện Đại' },
                { icon: '🎮', label: 'Gamification' },
                { icon: '🇻🇳', label: 'Tình Yêu Quê Hương' },
                { icon: '📚', label: 'Phân Hóa Lớp 1–5' }
              ].map((pill, idx) => (
                <div 
                  key={idx}
                  className="px-2.5 py-1.5 rounded-xl bg-white/90 border border-cyan-200/80 text-[11px] font-bold text-slate-800 shadow-2xs flex items-center gap-1.5 justify-center text-center"
                >
                  <span>{pill.icon}</span>
                  <span className="truncate">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 3: VIETNAM MAP & SOVEREIGNTY CARD (Sophisticated Teal / Emerald) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-white border-2 border-emerald-300/70 shadow-[0_8px_25px_rgba(16,185,129,0.08)] space-y-3">
            <div className="flex items-center gap-2 text-emerald-950">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-black text-sm sm:text-base font-heading text-emerald-950">
                  Dữ Liệu Bản Đồ & Chủ Quyền Quốc Gia
                </h5>
                <p className="text-[11px] font-semibold text-emerald-700">
                  Geographic Integrity & National Sovereignty
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Bản đồ tương tác ứng dụng hệ tọa độ <strong>WGS84 GIS chuẩn xác</strong> từ <em>Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam</em>. Dự án giáo dục khẳng định chủ quyền toàn vẹn và bất khả xâm phạm của Việt Nam đối với <strong>Quần đảo Hoàng Sa (TP. Đà Nẵng)</strong>, <strong>Quần đảo Trường Sa (Tỉnh Khánh Hòa)</strong> cùng toàn bộ các hải đảo thiêng liêng trên Biển Đông.
            </p>

            {/* National Sovereignty Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-black shadow-2xs">
                <span>🇻🇳</span>
                <span>Quần đảo Hoàng Sa (TP. Đà Nẵng)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-black shadow-2xs">
                <span>🇻🇳</span>
                <span>Quần đảo Trường Sa (Tỉnh Khánh Hòa)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-teal-100/90 text-teal-900 border border-teal-300 text-xs font-bold shadow-2xs">
                <span>🌐</span>
                <span>Hệ tọa độ WGS84 GIS</span>
              </span>
            </div>
          </div>

          {/* CARD 4: PILOT CLASSES CARD (Soft Violet / Pink Accent) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-50/90 via-pink-50/50 to-white border-2 border-[#7040E8]/30 shadow-[0_8px_25px_rgba(112,64,232,0.08)] space-y-3">
            <div className="flex items-center gap-2 text-purple-950">
              <div className="w-8 h-8 rounded-xl bg-[#7040E8]/15 text-[#7040E8] flex items-center justify-center shrink-0">
                <BookOpen className="w-4.5 h-4.5 text-[#7040E8]" />
              </div>
              <div>
                <h5 className="font-black text-sm sm:text-base font-heading text-purple-950">
                  Các Lớp Học Thực Nghiệm
                </h5>
                <p className="text-[11px] font-semibold text-purple-700">
                  Pilot Educational Classrooms
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Hệ thống đã triển khai danh sách học sinh và phân hóa học liệu cho 5 lớp: <strong>2.2, 4.1, 4.6, 5.2, và 5.6</strong>, có mã bảo mật học sinh và lưu trữ tiến độ tự động trên máy chủ trường học.
            </p>

            {/* 5 Distinct Classroom Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
              {[
                { name: 'Lớp 2.2', grade: 'Khối 2', color: 'border-purple-300 bg-purple-100 text-purple-900' },
                { name: 'Lớp 4.1', grade: 'Khối 4', color: 'border-pink-300 bg-pink-100 text-pink-900' },
                { name: 'Lớp 4.6', grade: 'Khối 4', color: 'border-pink-300 bg-pink-100 text-pink-900' },
                { name: 'Lớp 5.2', grade: 'Khối 5', color: 'border-indigo-300 bg-indigo-100 text-indigo-900' },
                { name: 'Lớp 5.6', grade: 'Khối 5', color: 'border-indigo-300 bg-indigo-100 text-indigo-900' }
              ].map((cls, idx) => (
                <div 
                  key={idx}
                  className={`p-2 rounded-2xl border-2 text-center shadow-2xs ${cls.color}`}
                >
                  <div className="font-black text-xs sm:text-sm font-heading">{cls.name}</div>
                  <div className="text-[10px] font-bold opacity-80">{cls.grade}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* 3. MODAL FOOTER                                                      */}
        {/* ==================================================================== */}
        <div className="shrink-0 bg-slate-50 border-t border-slate-200/80 px-5 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>VietDiscovery by Ms. Trang • Ứng dụng học tập thông minh</span>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#073B7A] to-[#7040E8] hover:from-[#062f62] hover:to-[#5c30c9] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Đóng cửa sổ</span>
            <span>✕</span>
          </button>
        </div>

      </div>
    </div>
  );
};
