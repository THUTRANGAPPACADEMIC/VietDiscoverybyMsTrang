import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface AdventureLoadingFallbackProps {
  message?: string;
  subMessage?: string;
}

export const AdventureLoadingFallback: React.FC<AdventureLoadingFallbackProps> = ({
  message = 'Loading your magical adventure...',
  subMessage = 'Đang tải dữ liệu học tập khám phá...'
}) => {
  return (
    <div className="w-full min-h-[360px] flex flex-col items-center justify-center p-8 my-6 rounded-3xl bg-gradient-to-b from-sky-100/90 via-sky-50/80 to-amber-50/70 border-2 border-sky-200/80 shadow-lg backdrop-blur-sm animate-pulse">
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center shadow-md animate-spin" style={{ animationDuration: '4s' }}>
          <Compass className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center shadow">
          <Sparkles className="w-4 h-4 text-white animate-bounce" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-black text-sky-950 tracking-tight text-center">
        {message}
      </h3>
      <p className="text-xs sm:text-sm font-semibold text-sky-700/80 mt-1 text-center">
        {subMessage}
      </p>
    </div>
  );
};
