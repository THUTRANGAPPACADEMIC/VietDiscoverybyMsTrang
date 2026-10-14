import React from 'react';

// ============================================================================
// PREMIUM 3D CARTOON ADVENTURE ASSETS FOR VIETDISCOVERY BY MS. TRANG
// Clean, lightweight vector 3D illustrations with rich gradients and depth shadows
// ============================================================================

// 1. CUTE 3D EXPLORER MASCOT ("Captain Trang" / "Bé Bắp Explorer")
export const MascotExplorer: React.FC<{
  size?: number;
  className?: string;
  mood?: 'waving' | 'happy' | 'thinking' | 'celebrating';
}> = ({ size = 96, className = '', mood = 'waving' }) => {
  return (
    <div style={{ width: size, height: size }} className={`relative shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <linearGradient id="hatGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="hatBand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="faceSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
          <linearGradient id="shirtGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer ambient shadow */}
        <ellipse cx="60" cy="112" rx="38" ry="6" fill="#0f172a" opacity="0.15" />

        {/* Shirt & Explorer Vest */}
        <path
          d="M36 84 C36 72, 84 72, 84 84 L90 108 C90 114, 30 114, 30 108 Z"
          fill="url(#shirtGradient)"
        />
        {/* Explorer collar & golden star badge */}
        <polygon points="60,78 48,92 72,92" fill="#ffffff" opacity="0.9" />
        <circle cx="60" cy="98" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
        <path d="M60 94 L61.5 97 L65 97.5 L62.5 99.5 L63 103 L60 101 L57 103 L57.5 99.5 L55 97.5 L58.5 97 Z" fill="#ffffff" />

        {/* Head */}
        <circle cx="60" cy="56" r="28" fill="url(#faceSkin)" filter="url(#softGlow)" />

        {/* Cheeks blush */}
        <circle cx="43" cy="62" r="5" fill="#f43f5e" opacity="0.45" />
        <circle cx="77" cy="62" r="5" fill="#f43f5e" opacity="0.45" />

        {/* Eyes with sparkle */}
        <ellipse cx="49" cy="54" rx="4" ry="5.5" fill="#1e293b" />
        <circle cx="47.5" cy="52" r="1.8" fill="#ffffff" />
        <ellipse cx="71" cy="54" rx="4" ry="5.5" fill="#1e293b" />
        <circle cx="69.5" cy="52" r="1.8" fill="#ffffff" />

        {/* Friendly big smile */}
        <path
          d="M50 64 Q60 74 70 64"
          stroke="#0f172a"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Safari Explorer Pith Helmet Hat */}
        <g id="explorer-hat">
          {/* Hat dome */}
          <path
            d="M32 40 C32 16, 88 16, 88 40 Z"
            fill="url(#hatGradient)"
          />
          {/* Top compass dome button */}
          <ellipse cx="60" cy="20" rx="8" ry="4" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          {/* Hat brim */}
          <ellipse cx="60" cy="40" rx="46" ry="10" fill="url(#hatGradient)" filter="url(#softGlow)" />
          {/* Hat ribbon */}
          <path
            d="M33 38 C42 34, 78 34, 87 38 L87 41 C78 37, 42 37, 33 41 Z"
            fill="url(#hatBand)"
          />
          {/* Vietnam gold star pin on hat */}
          <circle cx="60" cy="34" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
          <polygon points="60,30.5 61.2,33 64,33.2 62,35 62.5,37.5 60,36.2 57.5,37.5 58,35 56,33.2 58.8,33" fill="#fef08a" />
        </g>

        {/* Waving Hand or Binoculars */}
        {mood === 'waving' && (
          <g transform="translate(86, 68) rotate(-15)">
            <ellipse cx="8" cy="8" rx="8" ry="10" fill="url(#faceSkin)" />
            <circle cx="4" cy="2" r="3" fill="url(#faceSkin)" />
            <circle cx="9" cy="1" r="3" fill="url(#faceSkin)" />
            <circle cx="14" cy="3" r="3" fill="url(#faceSkin)" />
          </g>
        )}
      </svg>
    </div>
  );
};

// 2. 3D GOLDEN COMPASS
export const Icon3DCompass: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="compassRing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="compassDial" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <circle cx="32" cy="36" r="24" fill="#000000" opacity="0.12" />
    {/* Brass casing */}
    <circle cx="32" cy="32" r="26" fill="url(#compassRing)" stroke="#78350f" strokeWidth="2" />
    <circle cx="32" cy="32" r="21" fill="url(#compassDial)" stroke="#cbd5e1" strokeWidth="1.5" />
    {/* Dial tick marks */}
    <circle cx="32" cy="32" r="18" stroke="#94a3b8" strokeDasharray="2,6" strokeWidth="1" fill="none" />
    {/* Needle North (Red 3D) */}
    <polygon points="32,15 37,32 32,30" fill="#ef4444" />
    <polygon points="32,15 27,32 32,30" fill="#dc2626" />
    {/* Needle South (Blue 3D) */}
    <polygon points="32,49 37,32 32,34" fill="#0284c7" />
    <polygon points="32,49 27,32 32,34" fill="#0369a1" />
    {/* Center brass pivot */}
    <circle cx="32" cy="32" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
    {/* Cardinal letters */}
    <text x="32" y="21" fontSize="6" fontWeight="900" fill="#dc2626" textAnchor="middle">N</text>
    <text x="32" y="47" fontSize="5" fontWeight="bold" fill="#0369a1" textAnchor="middle">S</text>
    <text x="44" y="34" fontSize="5" fontWeight="bold" fill="#64748b" textAnchor="middle">E</text>
    <text x="20" y="34" fontSize="5" fontWeight="bold" fill="#64748b" textAnchor="middle">W</text>
  </svg>
);

// 3. 3D GOLDEN STAR WITH SHINE
export const Icon3DStar: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="starGradTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="60%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="starGradDark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {/* Soft drop shadow */}
    <path
      d="M24 4 L30 17 L44 19 L34 29 L36 43 L24 36 L12 43 L14 29 L4 19 L18 17 Z"
      fill="#000000"
      opacity="0.15"
      transform="translate(0, 3)"
    />
    {/* Base star */}
    <path
      d="M24 4 L30 17 L44 19 L34 29 L36 43 L24 36 L12 43 L14 29 L4 19 L18 17 Z"
      fill="url(#starGradTop)"
      stroke="#b45309"
      strokeWidth="1.5"
    />
    {/* Facets for 3D gem look */}
    <polygon points="24,4 30,17 24,25" fill="#fef9c3" opacity="0.6" />
    <polygon points="44,19 34,29 24,25" fill="url(#starGradDark)" opacity="0.4" />
    <polygon points="36,43 24,36 24,25" fill="url(#starGradDark)" opacity="0.5" />
    <polygon points="12,43 24,36 24,25" fill="#fef9c3" opacity="0.5" />
    <polygon points="4,19 14,29 24,25" fill="#fef08a" opacity="0.4" />
    {/* Sparkle glint */}
    <circle cx="21" cy="14" r="2.5" fill="#ffffff" />
  </svg>
);

// 4. 3D TREASURE CHEST
export const Icon3DTreasureChest: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="chestWood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="chestGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <ellipse cx="32" cy="56" rx="24" ry="5" fill="#000000" opacity="0.18" />
    {/* Chest Body */}
    <rect x="10" y="26" width="44" height="26" rx="4" fill="url(#chestWood)" stroke="#451a03" strokeWidth="2" />
    {/* Chest Lid Curved */}
    <path
      d="M8 26 C8 14, 56 14, 56 26 Z"
      fill="url(#chestWood)"
      stroke="#451a03"
      strokeWidth="2"
    />
    {/* Golden Straps */}
    <rect x="18" y="16" width="6" height="36" fill="url(#chestGold)" stroke="#92400e" strokeWidth="1" />
    <rect x="40" y="16" width="6" height="36" fill="url(#chestGold)" stroke="#92400e" strokeWidth="1" />
    {/* Big Golden Keyhole Plate */}
    <rect x="27" y="24" width="10" height="12" rx="2" fill="url(#chestGold)" stroke="#78350f" strokeWidth="1.5" />
    <circle cx="32" cy="28" r="2" fill="#451a03" />
    <polygon points="31,28 33,28 34,34 30,34" fill="#451a03" />
    {/* Glowing Gems on top rim */}
    <circle cx="21" cy="26" r="1.5" fill="#38bdf8" />
    <circle cx="43" cy="26" r="1.5" fill="#38bdf8" />
  </svg>
);

// 5. 3D EXPLORER BACKPACK
export const Icon3DBackpack: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="packColor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="pocketColor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="56" rx="20" ry="4" fill="#000000" opacity="0.15" />
    {/* Main backpack body */}
    <path
      d="M16 22 C16 12, 48 12, 48 22 L50 52 C50 56, 14 56, 14 52 Z"
      fill="url(#packColor)"
      stroke="#7c2d12"
      strokeWidth="2"
    />
    {/* Top handle loop */}
    <path d="M26 12 C26 6, 38 6, 38 12" stroke="#7c2d12" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Front storage pocket */}
    <rect x="20" y="32" width="24" height="18" rx="4" fill="url(#pocketColor)" stroke="#78350f" strokeWidth="1.5" />
    {/* Buckle straps */}
    <rect x="24" y="20" width="4" height="28" rx="1" fill="#78350f" />
    <rect x="36" y="20" width="4" height="28" rx="1" fill="#78350f" />
    {/* Golden metal clasps */}
    <rect x="23" y="30" width="6" height="4" rx="1" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
    <rect x="35" y="30" width="6" height="4" rx="1" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
    {/* Canteen water bottle on side */}
    <rect x="10" y="34" width="6" height="14" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
  </svg>
);

// 6. 3D ACTIVITY BUTTON ICONS (Listen, Speak, Read, Play, Translate)
export const Icon3DHeadphones: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="headphoneGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* Headband */}
    <path d="M6 18 C6 10, 26 10, 26 18" stroke="url(#headphoneGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Ear cushions */}
    <rect x="4" y="16" width="5" height="11" rx="2.5" fill="#10b981" stroke="#047857" strokeWidth="1" />
    <rect x="23" y="16" width="5" height="11" rx="2.5" fill="#10b981" stroke="#047857" strokeWidth="1" />
    {/* Sound waves */}
    <path d="M2 18 Q0 21 2 24" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M30 18 Q32 21 30 24" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const Icon3DMicrophone: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="micGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {/* Mic Capsule */}
    <rect x="11" y="4" width="10" height="16" rx="5" fill="url(#micGrad)" stroke="#0369a1" strokeWidth="1.5" />
    {/* Grill mesh line */}
    <line x1="11" y1="11" x2="21" y2="11" stroke="#e0f2fe" strokeWidth="1.5" />
    {/* Mic Stand Cradle */}
    <path d="M8 14 C8 22, 24 22, 24 14" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Stem & Base */}
    <line x1="16" y1="22" x2="16" y2="28" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="11" y1="28" x2="21" y2="28" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Icon3DOpenBook: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="bookCover" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6b21a8" />
      </linearGradient>
    </defs>
    {/* Left Page */}
    <path d="M16 26 C12 24, 4 24, 3 26 L3 8 C4 6, 12 6, 16 8 Z" fill="#ffffff" stroke="#6b21a8" strokeWidth="1.5" />
    {/* Right Page */}
    <path d="M16 26 C20 24, 28 24, 29 26 L29 8 C28 6, 20 6, 16 8 Z" fill="#f8fafc" stroke="#6b21a8" strokeWidth="1.5" />
    {/* Book Spine */}
    <line x1="16" y1="8" x2="16" y2="26" stroke="#9333ea" strokeWidth="2" />
    {/* Lines of text */}
    <line x1="6" y1="12" x2="13" y2="12" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="16" x2="13" y2="16" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19" y1="12" x2="26" y2="12" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19" y1="16" x2="26" y2="16" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    {/* Gold Bookmark Ribbon */}
    <polygon points="16,8 18,14 16,13 14,14" fill="#fbbf24" />
  </svg>
);

export const Icon3DGamepad: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="padGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    {/* Gamepad body */}
    <path
      d="M7 10 C3 10, 2 24, 6 26 C9 27, 12 23, 14 20 L18 20 C20 23, 23 27, 26 26 C30 24, 29 10, 25 10 Z"
      fill="url(#padGrad)"
      stroke="#b45309"
      strokeWidth="1.5"
    />
    {/* D-Pad cross */}
    <rect x="7" y="14" width="6" height="2" fill="#78350f" />
    <rect x="9" y="12" width="2" height="6" fill="#78350f" />
    {/* Colored Action buttons */}
    <circle cx="22" cy="13" r="1.5" fill="#ef4444" />
    <circle cx="25" cy="15" r="1.5" fill="#3b82f6" />
    <circle cx="22" cy="17" r="1.5" fill="#10b981" />
    <circle cx="19" cy="15" r="1.5" fill="#eab308" />
  </svg>
);

export const Icon3DTranslate: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={`shrink-0 ${className}`}>
    <defs>
      <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4338ca" />
      </linearGradient>
    </defs>
    {/* English speech bubble */}
    <rect x="3" y="4" width="16" height="12" rx="4" fill="url(#globeGrad)" stroke="#3730a3" strokeWidth="1" />
    <text x="11" y="12" fontSize="7" fontWeight="900" fill="#ffffff" textAnchor="middle">EN</text>
    {/* Vietnamese speech bubble */}
    <rect x="13" y="14" width="16" height="12" rx="4" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
    <text x="21" y="22" fontSize="7" fontWeight="900" fill="#fef08a" textAnchor="middle">VN</text>
  </svg>
);

// ============================================================================
// ILLUSTRATED NAVIGATION ICONS (MATCHING 4 GLOSSY BUTTONS)
// ============================================================================

// 1. Khám phá (Explore) - 3D Compass & Treasure Map with Candy Pink & Golden Accents
export const NavIconExplore: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`shrink-0 drop-shadow-md ${className}`}>
    <defs>
      <linearGradient id="navExpGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="navExpPink" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="50%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#be123c" />
      </linearGradient>
      <linearGradient id="navExpDial" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fff1f2" />
      </linearGradient>
    </defs>
    {/* Map scroll backing */}
    <rect x="6" y="8" width="36" height="32" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" transform="rotate(-6 24 24)" />
    <path d="M12 14 Q24 18 34 14" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2,3" transform="rotate(-6 24 24)" />
    {/* Compass outer casing */}
    <circle cx="26" cy="24" r="17" fill="url(#navExpGold)" stroke="#b45309" strokeWidth="2" />
    <circle cx="26" cy="24" r="14" fill="url(#navExpDial)" stroke="#f43f5e" strokeWidth="1.5" />
    {/* Star markers */}
    <circle cx="26" cy="13" r="1.5" fill="#f43f5e" />
    <circle cx="26" cy="35" r="1.5" fill="#0284c7" />
    <circle cx="15" cy="24" r="1.5" fill="#64748b" />
    <circle cx="37" cy="24" r="1.5" fill="#64748b" />
    {/* 3D Direction Needle */}
    <polygon points="26,13 30,24 26,22" fill="#f43f5e" />
    <polygon points="26,13 22,24 26,22" fill="#be123c" />
    <polygon points="26,35 30,24 26,26" fill="#38bdf8" />
    <polygon points="26,35 22,24 26,26" fill="#0284c7" />
    {/* Jewel core */}
    <circle cx="26" cy="24" r="3" fill="url(#navExpPink)" stroke="#ffffff" strokeWidth="1" />
    {/* Sparkle */}
    <path d="M38 10 L40 6 L42 10 L46 12 L42 14 L40 18 L38 14 L34 12 Z" fill="#fde047" />
  </svg>
);

// 2. Đấu trường (Games) - 3D Golden Arcade Controller with Sparks & Stars
export const NavIconGames: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`shrink-0 drop-shadow-md ${className}`}>
    <defs>
      <linearGradient id="navGameYellow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="navGameScreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    {/* Gamepad base */}
    <path
      d="M12 14 C6 14, 4 32, 9 36 C13 39, 17 33, 20 28 L28 28 C31 33, 35 39, 39 36 C44 32, 42 14, 36 14 Z"
      fill="url(#navGameYellow)"
      stroke="#78350f"
      strokeWidth="2"
    />
    {/* Top gloss highlight */}
    <path
      d="M15 16 C20 15, 28 15, 33 16 C37 17, 39 20, 39 23 C37 20, 33 18, 24 18 C15 18, 11 20, 9 23 C9 20, 11 17, 15 16 Z"
      fill="#ffffff"
      opacity="0.45"
    />
    {/* D-Pad */}
    <rect x="11" y="21" width="9" height="3.5" rx="1" fill="#78350f" />
    <rect x="13.7" y="18.2" width="3.5" height="9" rx="1" fill="#78350f" />
    {/* Center screen badge */}
    <circle cx="24" cy="23" r="2.5" fill="#fde047" stroke="#b45309" strokeWidth="1" />
    {/* Action Buttons with 3D gems */}
    <circle cx="34" cy="20" r="2.2" fill="#ef4444" stroke="#ffffff" strokeWidth="0.8" />
    <circle cx="37.5" cy="23.5" r="2.2" fill="#3b82f6" stroke="#ffffff" strokeWidth="0.8" />
    <circle cx="34" cy="27" r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="0.8" />
    <circle cx="30.5" cy="23.5" r="2.2" fill="#ec4899" stroke="#ffffff" strokeWidth="0.8" />
    {/* Golden Lightning Sparkle */}
    <path d="M22 8 L27 8 L24 13 L28 13 L21 21 L23 15 L19 15 Z" fill="#facc15" stroke="#78350f" strokeWidth="0.8" />
  </svg>
);

// 3. Hộ chiếu (Passport) - 3D Magical Purple Passport with Gold Ribbon & Star
export const NavIconPassport: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`shrink-0 drop-shadow-md ${className}`}>
    <defs>
      <linearGradient id="navPassPurple" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#581c87" />
      </linearGradient>
      <linearGradient id="navPassGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="60%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {/* Passport Book Cover */}
    <rect x="9" y="8" width="28" height="34" rx="4" fill="url(#navPassPurple)" stroke="#3b0764" strokeWidth="2" />
    {/* Gold trim border */}
    <rect x="12" y="11" width="22" height="28" rx="2" stroke="url(#navPassGold)" strokeWidth="1.5" fill="none" />
    {/* Emblem Seal */}
    <circle cx="23" cy="22" r="6.5" fill="none" stroke="url(#navPassGold)" strokeWidth="1.5" />
    <polygon points="23,17.5 24.5,21 28,21.5 25.5,23.5 26,27 23,25.2 20,27 20.5,23.5 18,21.5 21.5,21" fill="url(#navPassGold)" />
    {/* Passport Text Lines */}
    <line x1="16" y1="31" x2="30" y2="31" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="34" x2="28" y2="34" stroke="#e9d5ff" strokeWidth="1.2" strokeLinecap="round" />
    {/* Ceremonial Ribbon & Seal */}
    <g transform="translate(26, 26)">
      <polygon points="6,6 9,14 6,12 3,14" fill="#f43f5e" />
      <polygon points="10,6 13,14 10,12 7,14" fill="#fb7185" />
      <circle cx="8" cy="6" r="4.5" fill="url(#navPassGold)" stroke="#ffffff" strokeWidth="1" />
      <circle cx="8" cy="6" r="2.5" fill="#f43f5e" />
    </g>
  </svg>
);

// 4. Tiến độ (Progress) - 3D Turquoise Trophy Cup & Crystal Growth Chart
export const NavIconProgress: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`shrink-0 drop-shadow-md ${className}`}>
    <defs>
      <linearGradient id="navProgTeal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="50%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
      <linearGradient id="navProgGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {/* Trophy pedestal */}
    <rect x="18" y="37" width="12" height="4" rx="1.5" fill="#0f766e" stroke="#134e4a" strokeWidth="1.2" />
    <path d="M21 34 L27 34 L25 37 L23 37 Z" fill="url(#navProgTeal)" />
    {/* Trophy Cup Body */}
    <path
      d="M16 11 L32 11 L30 25 C29 30, 19 30, 18 25 Z"
      fill="url(#navProgTeal)"
      stroke="#134e4a"
      strokeWidth="2"
    />
    {/* Trophy handles */}
    <path d="M16 14 C11 14, 11 22, 17 22" stroke="url(#navProgGold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M32 14 C37 14, 37 22, 31 22" stroke="url(#navProgGold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Cup gloss sheen */}
    <path d="M19 13 Q24 16 29 13 Q24 23 19 23 Z" fill="#ffffff" opacity="0.3" />
    {/* Star medal on cup */}
    <circle cx="24" cy="20" r="3.5" fill="url(#navProgGold)" stroke="#ffffff" strokeWidth="0.8" />
    <polygon points="24,18 24.8,19.6 26.5,19.8 25.2,21 25.6,22.5 24,21.7 22.4,22.5 22.8,21 21.5,19.8 23.2,19.6" fill="#ffffff" />
    {/* Rising crystal stars */}
    <circle cx="34" cy="8" r="2.2" fill="#fde047" />
    <circle cx="14" cy="9" r="1.8" fill="#5eead4" />
  </svg>
);

// ============================================================================
// PANORAMIC VIETNAMESE LANDSCAPE HEADER ARTWORK
// ============================================================================
export const VietnamHeaderPanoramicLandscape: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 1440 240"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full opacity-40 mix-blend-screen"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="karstMountains" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="greenHills" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Sun glow on horizon */}
      <circle cx="1080" cy="90" r="140" fill="#fde047" opacity="0.3" />
      <circle cx="1080" cy="90" r="70" fill="#fef08a" opacity="0.4" />

      {/* Layer 1: Distant Ha Long Karst Limestone Pillars */}
      <path
        d="M0 160 Q80 120 140 145 Q210 90 280 140 Q360 80 430 130 Q510 100 580 150 Q660 70 730 135 Q820 90 900 145 Q980 60 1060 130 Q1140 85 1220 140 Q1320 90 1440 150 L1440 240 L0 240 Z"
        fill="url(#karstMountains)"
      />

      {/* Layer 2: Rolling Terraced Rice Hills (Sapa / Central Highlands) */}
      <path
        d="M0 180 Q120 140 240 165 Q360 130 480 160 Q620 120 740 160 Q860 130 980 165 Q1100 125 1240 160 Q1340 135 1440 170 L1440 240 L0 240 Z"
        fill="url(#greenHills)"
      />

      {/* Vietnamese Pagoda / Temple of Literature Silhouette (Khue Van Cac) */}
      <g transform="translate(560, 105) scale(0.65)" fill="#ffffff" opacity="0.6">
        <rect x="20" y="30" width="30" height="20" rx="2" />
        {/* Curved pagoda multi-tier roof */}
        <path d="M5 32 Q35 22 65 32 L60 26 Q35 18 10 26 Z" />
        <rect x="25" y="16" width="20" height="10" />
        <path d="M12 18 Q35 10 58 18 L54 13 Q35 6 16 13 Z" />
        <circle cx="35" cy="5" r="3" />
      </g>

      {/* Traditional Junk Boat with Red Fan Sails (Thuyen Buom Ha Long) */}
      <g transform="translate(820, 140) scale(0.7)" fill="#ffffff" opacity="0.7">
        {/* Boat hull */}
        <path d="M5 35 Q30 42 55 35 L50 40 Q30 44 10 40 Z" fill="#d97706" />
        {/* Tall front fan sail */}
        <path d="M22 34 L22 8 Q38 12 40 34 Z" fill="#ef4444" opacity="0.9" />
        <path d="M22 15 Q34 18 38 22 M22 22 Q34 25 39 30" stroke="#fef08a" strokeWidth="1.2" />
        {/* Rear smaller fan sail */}
        <path d="M10 34 L10 16 Q20 18 21 34 Z" fill="#f59e0b" opacity="0.85" />
      </g>

      {/* Sampan boat with conical hat explorer in distance */}
      <g transform="translate(320, 175) scale(0.55)" fill="#ffffff" opacity="0.65">
        <path d="M0 20 Q18 26 36 20 L32 23 Q18 27 4 23 Z" fill="#78350f" />
        <circle cx="16" cy="14" r="3" fill="#fbbf24" />
        {/* Conical hat Non La */}
        <polygon points="16,8 8,14 24,14" fill="#fef08a" />
        {/* Oar paddle */}
        <line x1="18" y1="14" x2="30" y2="28" stroke="#78350f" strokeWidth="1.5" />
      </g>

      {/* Floating 3D Clouds */}
      <g fill="#ffffff" opacity="0.6">
        {/* Cloud 1 */}
        <path d="M120 45 Q135 25 155 35 Q175 15 195 30 Q215 25 225 45 Q235 65 210 65 L130 65 Q105 65 120 45 Z" />
        {/* Cloud 2 */}
        <path d="M720 30 Q735 15 750 22 Q765 8 780 20 Q795 15 805 30 Q815 45 795 45 L730 45 Q710 45 720 30 Z" opacity="0.5" />
        {/* Cloud 3 */}
        <path d="M1260 50 Q1275 35 1290 40 Q1305 28 1320 38 Q1335 32 1345 48 Q1355 60 1335 60 L1270 60 Q1250 60 1260 50 Z" />
      </g>

      {/* Floating Traditional Kites (Dieu Sao) */}
      <g transform="translate(440, 40) rotate(-15) scale(0.6)">
        <polygon points="15,0 30,15 15,30 0,15" fill="#f43f5e" />
        <polygon points="15,0 20,15 15,30 10,15" fill="#fbbf24" />
        <path d="M15 30 Q20 45 15 60 Q10 75 18 90" stroke="#f43f5e" strokeWidth="1.5" fill="none" strokeDasharray="2,3" />
      </g>

      {/* Water layer at very bottom with soft wave ripples */}
      <path
        d="M0 215 Q120 205 240 215 Q360 225 480 215 Q600 205 720 215 Q840 225 960 215 Q1080 205 1200 215 Q1320 225 1440 215 L1440 240 L0 240 Z"
        fill="url(#waterGrad)"
      />
      <path
        d="M60 228 Q180 220 300 228 M420 228 Q540 220 660 228 M780 228 Q900 220 1020 228 M1140 228 Q1260 220 1380 228"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  </div>
);

