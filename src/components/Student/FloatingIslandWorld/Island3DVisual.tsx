import React, { useState } from 'react';
import { IslandId } from './floatingIslandData';

interface Island3DVisualProps {
  islandId: IslandId;
  size?: number;
  className?: string;
  isHovered?: boolean;
  isSelected?: boolean;
}

const ISLAND_IMAGE_MAP: Record<IslandId, { src: string; alt: string; glow: string }> = {
  wonder: { 
    src: '/assets/islands/island_1_kham_pha.webp', 
    alt: 'Đảo Khám Phá - Traditional Vietnamese Gate & Waterfall',
    glow: 'rgba(56, 189, 248, 0.5)'
  },
  listening: { 
    src: '/assets/islands/island_2_phong_lab.webp', 
    alt: 'Phòng Lab - Futuristic Flying Robot UFO with Orbital Rings',
    glow: 'rgba(6, 182, 212, 0.5)'
  },
  speaking: { 
    src: '/assets/islands/island_3_phat_am.webp', 
    alt: 'Phát Âm - Neon Microphone Stage with Musical Notes',
    glow: 'rgba(236, 72, 153, 0.5)'
  },
  puzzle: { 
    src: '/assets/islands/island_4_tu_vung.webp', 
    alt: 'Từ Vựng - Giant Fairy Book & 3D ABC Blocks',
    glow: 'rgba(168, 85, 247, 0.5)'
  },
  champion: { 
    src: '/assets/islands/island_5_dau_truong.webp', 
    alt: 'Đấu Trường - Golden Championship Arena & Trophy',
    glow: 'rgba(245, 158, 11, 0.5)'
  }
};

export const Island3DVisual: React.FC<Island3DVisualProps> = ({
  islandId,
  size = 220,
  className = '',
  isHovered = false,
  isSelected = false
}) => {
  const [imageError, setImageError] = useState(false);
  const data = ISLAND_IMAGE_MAP[islandId] || ISLAND_IMAGE_MAP.wonder;

  return (
    <div 
      style={{ 
        width: size, 
        height: size * 1.15
      }} 
      className={`relative select-none flex flex-col items-center justify-center transition-all duration-500 ${className} ${
        isHovered ? 'scale-108 -translate-y-2' : ''
      }`}
    >
      {/* Gentle Floating Atmospheric Glow */}
      <div 
        className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
          isSelected || isHovered ? 'opacity-80 scale-110' : 'opacity-40'
        }`}
        style={{
          background: `radial-gradient(circle, ${data.glow} 0%, transparent 70%)`
        }}
      />

      {/* Primary High-Resolution 3D Artwork */}
      <img
        src={data.src}
        alt={data.alt}
        className={`w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 pointer-events-none select-none ${
          isHovered ? 'brightness-105' : ''
        }`}
        onError={() => setImageError(true)}
      />
    </div>
  );
};
