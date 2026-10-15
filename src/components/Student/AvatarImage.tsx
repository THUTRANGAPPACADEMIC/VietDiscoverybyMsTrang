import React, { useState } from 'react';
import { getAvatarById } from '../../data/avatarsData';
import { Sparkles, User } from 'lucide-react';

interface AvatarImageProps {
  avatar?: string;
  name?: string;
  className?: string;
  alt?: string;
  showSparkle?: boolean;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  avatar,
  name = 'Student',
  className = 'w-10 h-10',
  alt,
  showSparkle = false
}) => {
  const [hasError, setHasError] = useState(false);

  // Check if avatar matches a 3D character ID or path
  const avatarMeta = avatar ? getAvatarById(avatar) : undefined;
  const imageSrc = avatarMeta?.image || (avatar && avatar.startsWith('/') ? avatar : null);

  // If we have a valid 3D cartoon character image and no load error
  if (imageSrc && !hasError) {
    return (
      <div className={`relative inline-block shrink-0 select-none ${className}`}>
        <img
          src={imageSrc}
          alt={alt || avatarMeta?.name || name}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-full border-2 border-white/90 shadow-xs transition-transform"
          loading="lazy"
        />
        {showSparkle && (
          <span className="absolute -top-1 -right-1 text-[10px] animate-bounce">
            ✨
          </span>
        )}
      </div>
    );
  }

  // Graceful Fallback: Colorful Initials / User Icon
  const initial = name ? name.trim().charAt(0).toUpperCase() : 'S';
  
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-black shadow-xs shrink-0 select-none ${className}`}
      title={name}
    >
      <span className="text-xs sm:text-sm drop-shadow-xs">{initial}</span>
      {showSparkle && (
        <span className="absolute -top-1 -right-1 text-[10px]">
          ✨
        </span>
      )}
    </div>
  );
};
