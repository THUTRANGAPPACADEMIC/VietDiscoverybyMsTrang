import React from 'react';
import { IslandId } from './floatingIslandData';

interface Island3DVisualProps {
  islandId: IslandId;
  size?: number;
  className?: string;
  isHovered?: boolean;
  isSelected?: boolean;
}

export const Island3DVisual: React.FC<Island3DVisualProps> = ({
  islandId,
  size = 220,
  className = '',
  isHovered = false,
  isSelected = false
}) => {
  // ----------------------------------------------------------------------------
  // 1. WONDER ISLAND – Halong Karsts, Golden Pagoda & Emerald Crystals
  // ----------------------------------------------------------------------------
  if (islandId === 'wonder') {
    return (
      <div 
        style={{ width: size, height: size * 0.85 }} 
        className={`relative select-none transition-transform duration-500 ${className} ${isHovered ? 'scale-105' : ''}`}
      >
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            {/* Emerald Gem Shimmer */}
            <linearGradient id="emeraldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            {/* Rock Base Gradient */}
            <linearGradient id="rockGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="60%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            {/* Lush Grass Gradient */}
            <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="70%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            {/* Pagoda Gold Gradient */}
            <linearGradient id="pagodaGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Base Rocks (Underbelly of Island) */}
          <path
            d="M25 120 C45 185 105 210 130 215 C155 210 215 185 235 120 C220 135 180 145 130 145 C80 145 40 135 25 120 Z"
            fill="url(#rockGrad)"
          />
          {/* Rock strata & crystalline cracks */}
          <path d="M70 145 L85 180 L100 150" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M160 145 L150 190 L135 155" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M125 175 L130 212" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          
          {/* Hanging Ivy Roots */}
          <path d="M55 135 C50 155 58 170 52 185" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M205 135 C210 155 202 170 208 185" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Mini Waterfall trickling from island edge */}
          <path d="M95 138 C94 155 96 175 95 195" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <path d="M96 195 Q98 205 102 208" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

          {/* Grass Island Top Plateau (3D Oval) */}
          <ellipse cx="130" cy="120" rx="105" ry="32" fill="url(#grassGrad)" stroke="#86efac" strokeWidth="3" />
          <ellipse cx="130" cy="116" rx="98" ry="26" fill="#22c55e" opacity="0.4" />

          {/* Halong Limestone Karst Formations (Left) */}
          <path
            d="M45 120 C42 85 55 60 65 55 C75 60 88 85 85 120 Z"
            fill="#475569"
            stroke="#64748b"
            strokeWidth="2"
          />
          <path d="M50 115 C55 80 62 65 65 55" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          {/* Green moss on Karst */}
          <path d="M58 55 C63 50 67 50 72 55 C74 65 60 70 58 55 Z" fill="#22c55e" />

          {/* Second Smaller Karst */}
          <path
            d="M75 122 C72 98 80 80 88 78 C95 82 102 98 98 122 Z"
            fill="#334155"
          />

          {/* Vietnamese Tiered Golden Pagoda (Center Right) */}
          <g transform="translate(135, 45)">
            {/* Pagoda Base */}
            <rect x="18" y="55" width="28" height="18" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="26" y="60" width="12" height="13" fill="#b91c1c" rx="1" />
            {/* Tier 1 Curved Roof */}
            <path d="M8 55 C20 53 44 53 56 55 C52 50 46 48 32 48 C18 48 12 50 8 55 Z" fill="url(#pagodaGold)" stroke="#d97706" strokeWidth="1.5" />
            {/* Tier 2 Level */}
            <rect x="22" y="38" width="20" height="12" rx="1" fill="#e2e8f0" />
            {/* Tier 2 Curved Roof */}
            <path d="M14 38 C23 36 41 36 50 38 C47 34 42 32 32 32 C22 32 17 34 14 38 Z" fill="url(#pagodaGold)" stroke="#d97706" strokeWidth="1.5" />
            {/* Spire Tower Pinnacle */}
            <path d="M30 32 L32 15 L34 32 Z" fill="#facc15" stroke="#eab308" strokeWidth="1" />
            <circle cx="32" cy="14" r="3" fill="#fef08a" />
          </g>

          {/* Tropical Palm Trees (Right) */}
          <path d="M205 120 Q202 95 198 85" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          {/* Palm Fronds */}
          <path d="M198 85 Q180 80 170 90" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 85 Q195 68 185 65" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 85 Q212 70 220 75" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 85 Q215 90 222 100" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

          {/* Glowing Emerald Crystal Gem Centerpiece */}
          <g transform="translate(108, 90)" filter="url(#emeraldGlow)">
            <polygon points="18,0 36,12 36,36 18,48 0,36 0,12" fill="url(#emeraldGrad)" stroke="#a7f3d0" strokeWidth="2" />
            <polygon points="18,0 36,12 18,24 0,12" fill="#6ee7b7" opacity="0.8" />
            <polygon points="0,12 18,24 18,48 0,36" fill="#059669" opacity="0.9" />
            <polygon points="36,12 36,36 18,48 18,24" fill="#047857" opacity="0.95" />
            {/* White Glint Highlight */}
            <circle cx="14" cy="10" r="3" fill="#ffffff" opacity="0.9" />
          </g>

          {/* Sparkling Stars around Island */}
          <circle cx="30" cy="50" r="2.5" fill="#fef08a" className="animate-star-shimmer" />
          <circle cx="230" cy="60" r="3" fill="#6ee7b7" className="animate-star-shimmer" />
          <circle cx="125" cy="30" r="2" fill="#fef08a" className="animate-star-shimmer" />
        </svg>
      </div>
    );
  }

  // ----------------------------------------------------------------------------
  // 2. LISTENING ISLAND – Acoustic Conch & 3D Glowing Cyan Headphones
  // ----------------------------------------------------------------------------
  if (islandId === 'listening') {
    return (
      <div 
        style={{ width: size, height: size * 0.85 }} 
        className={`relative select-none transition-transform duration-500 ${className} ${isHovered ? 'scale-105' : ''}`}
      >
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="sapphireGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient id="headphoneGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="listenGrass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="30%" stopColor="#059669" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <filter id="sapphireGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Base Rocks */}
          <path
            d="M25 120 C45 185 105 210 130 215 C155 210 215 185 235 120 C220 135 180 145 130 145 C80 145 40 135 25 120 Z"
            fill="#1e293b"
          />
          {/* Blue Gem Crystal Strata in Rock */}
          <polygon points="90,155 105,185 95,190 80,160" fill="#0284c7" opacity="0.7" />
          <polygon points="150,155 165,180 155,188 142,160" fill="#38bdf8" opacity="0.6" />
          {/* Hanging Blue Vines */}
          <path d="M60 135 C58 160 66 175 60 190" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
          <path d="M195 135 C200 155 192 172 198 188" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />

          {/* Grass Plateau */}
          <ellipse cx="130" cy="120" rx="105" ry="32" fill="url(#listenGrass)" stroke="#7dd3fc" strokeWidth="3" />
          <ellipse cx="130" cy="116" rx="98" ry="26" fill="#0284c7" opacity="0.25" />

          {/* Giant Glowing 3D Headphones on Center Stage */}
          <g transform="translate(65, 30)">
            {/* Headphone Arch Band */}
            <path
              d="M25 70 C25 20 105 20 105 70"
              stroke="url(#headphoneGrad)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              filter="drop-shadow(0 6px 8px rgba(0,0,0,0.4))"
            />
            {/* Cushioned Band Inner Highlight */}
            <path
              d="M36 60 C36 28 94 28 94 60"
              stroke="#e0f2fe"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Left Ear Cup */}
            <rect x="14" y="62" width="22" height="34" rx="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="25" cy="79" r="6" fill="#facc15" />
            {/* Right Ear Cup */}
            <rect x="94" y="62" width="22" height="34" rx="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="105" cy="79" r="6" fill="#facc15" />
          </g>

          {/* Central Acoustic Resonance Sphere */}
          <g transform="translate(112, 94)" filter="url(#sapphireGlow)">
            <circle cx="18" cy="18" r="18" fill="url(#sapphireGrad)" stroke="#bae6fd" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" fill="#ffffff" opacity="0.85" />
            {/* Floating Sound Waves */}
            <path d="M-10 18 C-10 8 -4 0 4 -6" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M46 18 C46 8 40 0 32 -6" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
          </g>

          {/* Coastal Conch Shell & Lotus on Island Rim */}
          <path d="M48 118 C45 110 55 105 60 112 C62 118 52 124 48 118 Z" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
          <circle cx="210" cy="115" r="8" fill="#fda4af" stroke="#f43f5e" strokeWidth="1.5" />

          {/* Twinkling Audio Sparkles */}
          <circle cx="45" cy="40" r="3" fill="#38bdf8" className="animate-star-shimmer" />
          <circle cx="215" cy="45" r="3" fill="#fef08a" className="animate-star-shimmer" />
        </svg>
      </div>
    );
  }

  // ----------------------------------------------------------------------------
  // 3. SPEAKING ISLAND – Crystal Microphone & Rainbow Echo Bridge
  // ----------------------------------------------------------------------------
  if (islandId === 'speaking') {
    return (
      <div 
        style={{ width: size, height: size * 0.85 }} 
        className={`relative select-none transition-transform duration-500 ${className} ${isHovered ? 'scale-105' : ''}`}
      >
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="amethystGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
            <linearGradient id="micMetal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="50%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id="rainbowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="25%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="amethystGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Base Rocks */}
          <path
            d="M25 120 C45 185 105 210 130 215 C155 210 215 185 235 120 C220 135 180 145 130 145 C80 145 40 135 25 120 Z"
            fill="#2e1065"
          />
          {/* Amethyst Crystals on Rock */}
          <polygon points="75,150 90,175 80,185 68,160" fill="#a855f7" opacity="0.8" />
          <polygon points="170,150 185,178 175,188 160,160" fill="#c084fc" opacity="0.75" />
          <path d="M50 135 C52 160 46 175 52 192" stroke="#d8b4fe" strokeWidth="2" strokeLinecap="round" />
          <path d="M210 135 C208 158 214 172 206 190" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />

          {/* Grass Plateau (Violet Hue) */}
          <ellipse cx="130" cy="120" rx="105" ry="32" fill="#581c87" stroke="#e9d5ff" strokeWidth="3" />
          <ellipse cx="130" cy="116" rx="98" ry="26" fill="#7e22ce" opacity="0.5" />

          {/* Rainbow Arch Bridge */}
          <path
            d="M40 115 C45 50 215 50 220 115"
            stroke="url(#rainbowGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
          />

          {/* Center 3D Crystal Microphone */}
          <g transform="translate(112, 42)">
            {/* Mic Stand */}
            <rect x="15" y="45" width="6" height="36" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <ellipse cx="18" cy="80" rx="16" ry="6" fill="#475569" />
            {/* Mic Capsule Grill (Amethyst Gem) */}
            <g filter="url(#amethystGlow)">
              <rect x="8" y="10" width="20" height="32" rx="10" fill="url(#amethystGrad)" stroke="#f3e8ff" strokeWidth="2" />
              {/* Mesh Lines */}
              <line x1="8" y1="20" x2="28" y2="20" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
              <line x1="8" y1="26" x2="28" y2="26" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
              <line x1="8" y1="32" x2="28" y2="32" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
              {/* White Gleam */}
              <circle cx="13" cy="16" r="3" fill="#ffffff" opacity="0.9" />
            </g>
          </g>

          {/* Speech Bubble with Musical Note (Left) */}
          <g transform="translate(50, 48)">
            <ellipse cx="20" cy="16" rx="18" ry="14" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
            <polygon points="12,28 18,25 16,35" fill="#ffffff" />
            <text x="14" y="22" fontSize="16" fill="#9333ea" fontWeight="bold">♪</text>
          </g>

          {/* Cheering Voice Waves (Right) */}
          <g transform="translate(170, 48)">
            <ellipse cx="20" cy="16" rx="18" ry="14" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
            <polygon points="26,28 20,25 22,35" fill="#ffffff" />
            <text x="13" y="22" fontSize="16" fill="#ec4899" fontWeight="bold">♫</text>
          </g>

          {/* Purple Sparkles */}
          <circle cx="35" cy="40" r="3" fill="#f0abfc" className="animate-star-shimmer" />
          <circle cx="225" cy="45" r="3" fill="#fef08a" className="animate-star-shimmer" />
        </svg>
      </div>
    );
  }

  // ----------------------------------------------------------------------------
  // 4. PUZZLE ISLAND – Golden Letter Citadel & Magic Scroll
  // ----------------------------------------------------------------------------
  if (islandId === 'puzzle') {
    return (
      <div 
        style={{ width: size, height: size * 0.85 }} 
        className={`relative select-none transition-transform duration-500 ${className} ${isHovered ? 'scale-105' : ''}`}
      >
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="amberGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="puzzleBlockGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Base Rocks */}
          <path
            d="M25 120 C45 185 105 210 130 215 C155 210 215 185 235 120 C220 135 180 145 130 145 C80 145 40 135 25 120 Z"
            fill="#451a03"
          />
          {/* Amber Crystal Strata */}
          <polygon points="80,150 95,180 85,188 72,160" fill="#f59e0b" opacity="0.85" />
          <polygon points="160,155 175,182 165,190 152,165" fill="#facc15" opacity="0.75" />
          <path d="M55 135 C52 160 58 175 54 190" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <path d="M205 135 C208 158 200 172 206 188" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

          {/* Grass Plateau (Golden Ochre tone) */}
          <ellipse cx="130" cy="120" rx="105" ry="32" fill="#78350f" stroke="#fde047" strokeWidth="3" />
          <ellipse cx="130" cy="116" rx="98" ry="26" fill="#d97706" opacity="0.35" />

          {/* 3D Floating Wooden/Golden Alphabet Letter Blocks ("A", "B", "C") */}
          {/* Block A (Left) */}
          <g transform="translate(62, 70) rotate(-8)">
            <rect x="0" y="0" width="32" height="32" rx="6" fill="url(#puzzleBlockGrad)" stroke="#fef08a" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
            <text x="8" y="24" fontSize="22" fill="#ffffff" fontWeight="black" fontFamily="Fredoka, sans-serif">A</text>
          </g>

          {/* Block B (Center Top) */}
          <g transform="translate(112, 45)" filter="url(#amberGlow)">
            <rect x="0" y="0" width="36" height="36" rx="6" fill="url(#amberGrad)" stroke="#ffffff" strokeWidth="2" />
            <text x="10" y="27" fontSize="24" fill="#78350f" fontWeight="black" fontFamily="Fredoka, sans-serif">B</text>
            <circle cx="8" cy="8" r="3" fill="#ffffff" opacity="0.9" />
          </g>

          {/* Block C (Right) */}
          <g transform="translate(164, 68) rotate(10)">
            <rect x="0" y="0" width="32" height="32" rx="6" fill="url(#puzzleBlockGrad)" stroke="#fef08a" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
            <text x="8" y="24" fontSize="22" fill="#ffffff" fontWeight="black" fontFamily="Fredoka, sans-serif">C</text>
          </g>

          {/* Ancient Vietnamese Golden Scroll Rolled Out at Base */}
          <g transform="translate(85, 100)">
            <rect x="10" y="8" width="70" height="20" rx="4" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
            <circle cx="10" cy="18" r="6" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
            <circle cx="80" cy="18" r="6" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
            {/* Scroll Script Lines */}
            <line x1="22" y1="14" x2="68" y2="14" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="21" x2="55" y2="21" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Golden Key on Grass */}
          <g transform="translate(185, 115) rotate(20)">
            <circle cx="6" cy="6" r="5" fill="#fde047" stroke="#b45309" strokeWidth="1.5" />
            <rect x="11" y="4" width="14" height="4" fill="#fde047" stroke="#b45309" strokeWidth="1" />
            <rect x="21" y="8" width="4" height="4" fill="#fde047" stroke="#b45309" strokeWidth="1" />
          </g>

          {/* Amber Sparkles */}
          <circle cx="35" cy="50" r="3" fill="#fde047" className="animate-star-shimmer" />
          <circle cx="225" cy="55" r="3" fill="#fde047" className="animate-star-shimmer" />
        </svg>
      </div>
    );
  }

  // ----------------------------------------------------------------------------
  // 5. CHAMPION ISLAND – Golden Trophy & Glowing 3D Treasure Chest
  // ----------------------------------------------------------------------------
  return (
    <div 
      style={{ width: size, height: size * 0.85 }} 
      className={`relative select-none transition-transform duration-500 ${className} ${isHovered ? 'scale-105' : ''}`}
    >
      <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="trophyGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="chestWood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
          <linearGradient id="rubyGlowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <filter id="goldChestGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Floating Base Rocks */}
        <path
          d="M25 120 C45 185 105 210 130 215 C155 210 215 185 235 120 C220 135 180 145 130 145 C80 145 40 135 25 120 Z"
          fill="#3b0764"
        />
        {/* Ruby & Gold Crystal veins in stone */}
        <polygon points="85,150 100,182 90,190 78,160" fill="#dc2626" opacity="0.8" />
        <polygon points="155,155 170,180 160,190 146,165" fill="#facc15" opacity="0.85" />
        <path d="M55 135 C52 160 58 175 54 190" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M205 135 C208 158 200 172 206 188" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />

        {/* Grass Plateau (Royal Gold / Emerald Edge) */}
        <ellipse cx="130" cy="120" rx="105" ry="32" fill="#831843" stroke="#facc15" strokeWidth="3" />
        <ellipse cx="130" cy="116" rx="98" ry="26" fill="#be123c" opacity="0.3" />

        {/* Marble Pedestal in Center */}
        <ellipse cx="130" cy="115" rx="45" ry="14" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="95" y="98" width="70" height="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* 3D Golden Victory Trophy */}
        <g transform="translate(108, 42)" filter="url(#goldChestGlow)">
          {/* Trophy Cup Base */}
          <rect x="14" y="44" width="16" height="8" rx="2" fill="#ca8a04" stroke="#a16207" strokeWidth="1" />
          <path d="M18 36 L22 44 L26 36 Z" fill="#eab308" />
          {/* Trophy Main Cup */}
          <path
            d="M6 10 C6 30 38 30 38 10 Z"
            fill="url(#trophyGold)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          {/* Left Handle */}
          <path d="M6 14 C-4 14 -4 26 6 26" stroke="#eab308" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Right Handle */}
          <path d="M38 14 C48 14 48 26 38 26" stroke="#eab308" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Star on Trophy */}
          <polygon points="22,14 24,19 29,19 25,22 26,27 22,24 18,27 19,22 15,19 20,19" fill="#ffffff" />
          <circle cx="15" cy="12" r="2.5" fill="#ffffff" opacity="0.9" />
        </g>

        {/* 3D Glowing Treasure Chest on Side */}
        <g transform="translate(155, 90)">
          {/* Chest Base */}
          <rect x="0" y="8" width="40" height="24" rx="4" fill="url(#chestWood)" stroke="#eab308" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
          {/* Gilded Straps */}
          <rect x="8" y="8" width="5" height="24" fill="#facc15" />
          <rect x="27" y="8" width="5" height="24" fill="#facc15" />
          {/* Keyhole Plate */}
          <circle cx="20" cy="18" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
          <circle cx="20" cy="18" r="1.5" fill="#451a03" />
          {/* Chest Lid Ajar with Radiating Star Rays */}
          <path d="M-2 8 C6 -4 34 -4 42 8 Z" fill="url(#chestWood)" stroke="#facc15" strokeWidth="2" />
          {/* Overflowing Gems */}
          <circle cx="14" cy="6" r="3" fill="#ef4444" />
          <circle cx="22" cy="4" r="3.5" fill="#38bdf8" />
          <circle cx="28" cy="6" r="3" fill="#a855f7" />
        </g>

        {/* Small Trophy / Star on Left */}
        <g transform="translate(68, 98)">
          <circle cx="12" cy="12" r="12" fill="#facc15" stroke="#ffffff" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
          <polygon points="12,5 14,9 18,9 15,12 16,16 12,14 8,16 9,12 6,9 10,9" fill="#78350f" />
        </g>

        {/* Radiant Stars */}
        <circle cx="35" cy="40" r="3.5" fill="#fde047" className="animate-star-shimmer" />
        <circle cx="230" cy="40" r="3.5" fill="#f87171" className="animate-star-shimmer" />
        <circle cx="130" cy="25" r="2.5" fill="#ffffff" className="animate-star-shimmer" />
      </svg>
    </div>
  );
};
