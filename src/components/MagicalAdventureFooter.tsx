import React from 'react';
import { 
  Compass, 
  Gamepad2, 
  Award, 
  Trophy, 
  Sparkles, 
  Lock, 
  Star, 
  MapPin, 
  Heart,
  ChevronRight,
  ShieldCheck,
  School
} from 'lucide-react';
import { soundEffects } from '../lib/soundEffects';

interface MagicalAdventureFooterProps {
  activeStudentTab: 'explore' | 'games' | 'passport' | 'progress';
  setActiveStudentTab: (tab: 'explore' | 'games' | 'passport' | 'progress') => void;
  onOpenCreatorModal: () => void;
  onOpenStaffAuth: () => void;
  totalStars?: number;
}

export const MagicalAdventureFooter: React.FC<MagicalAdventureFooterProps> = ({
  activeStudentTab,
  setActiveStudentTab,
  onOpenCreatorModal,
  onOpenStaffAuth,
  totalStars = 0
}) => {
  const handleNavTileClick = (tab: 'explore' | 'games' | 'passport' | 'progress') => {
    soundEffects.playClick();
    setActiveStudentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTiles = [
    {
      id: 'explore' as const,
      titleEn: 'Explore Vietnam',
      titleVi: 'Khám phá Đất nước',
      iconEmoji: '🗺️',
      badgeText: '34 Tỉnh/Thành 2025',
      badgeColor: 'bg-emerald-500 text-white',
      cardBg: 'from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc]',
      borderStyle: 'border-sky-300 hover:border-sky-400',
      activeShadow: 'ring-4 ring-sky-400 shadow-[0_12px_28px_rgba(56,189,248,0.45)] scale-[1.03]',
      summary: 'Bản đồ WGS84 GIS, Kỳ quan & Di sản'
    },
    {
      id: 'games' as const,
      titleEn: 'Play Games',
      titleVi: 'Đấu trường Thám hiểm',
      iconEmoji: '🎮',
      badgeText: '5 Mini-games Hot',
      badgeColor: 'bg-rose-500 text-white',
      cardBg: 'from-[#ffe4e6] via-[#fecdd3] to-[#fda4af]',
      borderStyle: 'border-pink-300 hover:border-pink-400',
      activeShadow: 'ring-4 ring-pink-400 shadow-[0_12px_28px_rgba(244,63,94,0.45)] scale-[1.03]',
      summary: 'Kéo thả 3 Miền, Thám tử ảnh & Xếp chữ'
    },
    {
      id: 'passport' as const,
      titleEn: 'My Passport',
      titleVi: 'Hộ chiếu Văn hóa',
      iconEmoji: '🛂',
      badgeText: 'Con dấu Di sản',
      badgeColor: 'bg-purple-600 text-white',
      cardBg: 'from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe]',
      borderStyle: 'border-purple-300 hover:border-purple-400',
      activeShadow: 'ring-4 ring-purple-400 shadow-[0_12px_28px_rgba(192,132,252,0.45)] scale-[1.03]',
      summary: 'Sưu tầm huy hiệu & Chứng nhận học tập'
    },
    {
      id: 'progress' as const,
      titleEn: 'My Rewards',
      titleVi: 'Phần thưởng & Tiến độ',
      iconEmoji: '🏆',
      badgeText: `${totalStars} Stars`,
      badgeColor: 'bg-amber-500 text-amber-950',
      cardBg: 'from-[#fef3c7] via-[#fde68a] to-[#f59e0b]',
      borderStyle: 'border-amber-300 hover:border-amber-400',
      activeShadow: 'ring-4 ring-amber-400 shadow-[0_12px_28px_rgba(245,158,11,0.45)] scale-[1.03]',
      summary: 'Bảng vàng tích lũy sao & Kỷ lục học tập'
    }
  ];

  return (
    <footer className="relative mt-16 text-white overflow-hidden select-none">
      
      {/* 1. SCENIC TOP WAVE & ISLAND TRANSITION */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mb-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 text-[#0284c7] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* 2. THE MAGICAL ADVENTURE WORLD CONTAINER */}
      <div 
        className="relative bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#0c4a6e] px-4 sm:px-6 lg:px-8 pt-8 pb-12 shadow-2xl"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 65%), linear-gradient(to bottom, #0284c7, #0369a1, #0c4a6e)'
        }}
      >
        {/* Playful Floating Stars & Sparkles Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:28px_28px]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto space-y-10">

          {/* 3. BRAND CENTERPIECE & HEADLINE */}
          <div className="text-center space-y-3 pt-2">
            
            {/* Cute Mascots & Globe Cluster */}
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {/* Captain Trang Chibi Mascot */}
              <img 
                src="/assets/cute/captain_trang_clean.png" 
                alt="Captain Trang Mascot" 
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300 cursor-pointer hidden xs:block"
                onClick={() => {
                  soundEffects.playHover();
                  onOpenCreatorModal();
                }}
                title="Cô Trần Thị Thu Trang - Tác giả VietDiscovery"
              />

              {/* Official Globe Brand Logo */}
              <div 
                onClick={() => handleNavTileClick('explore')}
                className="relative cursor-pointer group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 p-2 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.35)] border-2 border-white/50 group-hover:scale-108 transition-transform duration-300 flex items-center justify-center">
                  <img 
                    src="/assets/cute/logo_vietdiscovery.png" 
                    alt="VietDiscovery by Ms. Trang Globe Logo" 
                    className="w-full h-full object-contain drop-shadow-md select-none"
                  />
                </div>
                {/* Golden Crown Perched on Globe */}
                <span className="absolute -top-2.5 -right-1 text-2xl animate-bounce">
                  👑
                </span>
              </div>

              {/* Boy Explorer Chibi Mascot */}
              <img 
                src="/assets/cute/boy_explorer_chibi.png" 
                alt="Little Explorer Mascot" 
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300 cursor-pointer hidden xs:block"
                onClick={() => soundEffects.playHover()}
                title="Little Adventurer!"
              />
            </div>

            {/* Official Brand Name + Candy Pink Ribbon */}
            <div className="space-y-1.5 inline-block">
              <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] bg-gradient-to-r from-amber-200 via-white to-sky-100 bg-clip-text text-transparent">
                VietDiscovery
              </h2>

              {/* Candy-Pink Ribbon "by Ms. Trang" */}
              <div className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1 rounded-full bg-gradient-to-r from-[#ff007f] via-[#ec4899] to-[#f43f5e] text-white font-black text-xs sm:text-sm shadow-md border-2 border-white/60 drop-shadow-sm transform hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                <span>by Ms. Trang</span>
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
              </div>
            </div>

            {/* Inspiring Headline (English First, Vietnamese Translation Underneath) */}
            <div className="pt-1 space-y-1">
              <div className="text-lg sm:text-2xl font-black font-heading text-amber-300 drop-shadow-sm flex items-center justify-center gap-2">
                <span>Your Next Adventure Awaits!</span>
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-sky-100/90 drop-shadow-xs">
                Chuyến phiêu lưu tiếp theo đang chờ bạn! Khám phá dải đất hình chữ S & chinh phục Tiếng Anh!
              </p>
            </div>
          </div>

          {/* 4. FOUR GLOSSY 3D-INSPIRED NAVIGATION TILES */}
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-sky-200 mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
              <span>🌟</span>
              <span>CHỌN KHÔNG GIAN HỌC TẬP & TRẢI NGHIỆM:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {navTiles.map((tile) => {
                const isActive = activeStudentTab === tile.id;

                return (
                  <button
                    key={tile.id}
                    onClick={() => handleNavTileClick(tile.id)}
                    onMouseEnter={() => soundEffects.playHover()}
                    className={`relative p-4 sm:p-5 rounded-[28px] bg-gradient-to-br ${tile.cardBg} border-3 ${tile.borderStyle} text-slate-900 text-left transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1.5 active:translate-y-0 group ${
                      isActive ? tile.activeShadow : 'hover:shadow-[0_12px_24px_rgba(0,0,0,0.25)]'
                    }`}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {tile.iconEmoji}
                      </div>

                      <span className={`px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider shadow-xs ${tile.badgeColor}`}>
                        {tile.badgeText}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-0.5">
                      <h4 className="text-base sm:text-lg font-black font-heading text-slate-900 group-hover:text-blue-900 leading-tight">
                        {tile.titleEn}
                      </h4>
                      <p className="text-xs font-bold text-slate-700">
                        {tile.titleVi}
                      </p>
                    </div>

                    {/* Summary Description */}
                    <p className="text-[11px] text-slate-600 font-medium mt-2 leading-snug">
                      {tile.summary}
                    </p>

                    {/* Bottom Action Pill */}
                    <div className="mt-3 pt-2.5 border-t border-slate-900/10 flex items-center justify-between text-xs font-black text-slate-800">
                      <span>{isActive ? '👉 Đang mở' : 'Vào trải nghiệm'}</span>
                      <div className="w-6 h-6 rounded-full bg-white/90 shadow-xs flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. ELEGANT CREATOR INFORMATION & OFFICIAL CREDENTIALS */}
          <div className="pt-6 border-t border-sky-400/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-sky-100">
            
            {/* School & Author Details */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="font-black text-white text-sm font-heading flex items-center gap-1.5">
                  <School className="w-4 h-4 text-amber-300" />
                  <span>Trường Tiểu học Trang Tấn Khương</span>
                </span>
                <span className="text-sky-300 hidden sm:inline">•</span>
                <span className="font-bold text-amber-200">
                  Tác giả: Cô Trần Thị Thu Trang
                </span>
                <span className="text-sky-300 hidden sm:inline">•</span>
                <span className="text-sky-200">
                  Xã Hiệp Phước, Thành phố Hồ Chí Minh
                </span>
              </div>
              <p className="text-[11px] text-sky-200/80">
                Chương trình Giáo dục Tiếng Anh Tiểu học đổi mới sáng tạo tích hợp Địa lý - Lịch sử - Văn hóa Việt Nam chuẩn GIS WGS84 2025.
              </p>
            </div>

            {/* Fast Action Buttons: Creator Modal & Staff Portal */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenCreatorModal();
                }}
                className="px-4 py-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs transition-all shadow-md hover:scale-103 cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
                <span>Về Tác Giả & Sư Phạm</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenStaffAuth();
                }}
                className="px-3.5 py-2 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5"
                title="Dành cho Giáo viên & Quản trị viên"
              >
                <Lock className="w-3.5 h-3.5 text-sky-200" />
                <span>Giáo viên / Admin</span>
              </button>
            </div>

          </div>

          {/* 6. BOTTOM SOVEREIGNTY & COPYRIGHT NOTICE */}
          <div className="pt-2 text-center text-[11px] text-sky-300/70 space-y-0.5">
            <p className="font-semibold">
              Khẳng định chủ quyền toàn vẹn lãnh thổ Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam bao gồm Quần đảo Hoàng Sa và Trường Sa.
            </p>
            <p>
              Bản quyền © 2026 Cô Trần Thị Thu Trang. Tất cả các quyền được bảo lưu.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
