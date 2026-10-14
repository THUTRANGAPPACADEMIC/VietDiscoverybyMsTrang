import React from 'react';
import { NavIconExplore, NavIconGames, NavIconPassport, NavIconProgress } from './Student/Game3DAssets';
import { soundEffects } from '../lib/soundEffects';

interface MobileBottomNavProps {
  activeStudentTab: 'explore' | 'games' | 'passport' | 'progress';
  setActiveStudentTab: (tab: 'explore' | 'games' | 'passport' | 'progress') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeStudentTab,
  setActiveStudentTab
}) => {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t-2 border-amber-300 py-1.5 px-2 shadow-[0_-6px_25px_rgba(0,0,0,0.18)] flex items-center justify-around gap-1.5"
    >
      {/* 1. Explore */}
      <button
        onClick={() => {
          soundEffects.playClick();
          setActiveStudentTab('explore');
        }}
        className={`flex-1 min-h-[56px] py-1 px-1 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
          activeStudentTab === 'explore'
            ? 'bg-gradient-to-b from-pink-400 via-rose-500 to-rose-600 text-white font-black shadow-md border-b-3 border-rose-800 scale-102 ring-2 ring-rose-300'
            : 'text-slate-600 hover:bg-slate-100 font-bold'
        }`}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-0.5 ${activeStudentTab === 'explore' ? 'bg-white shadow-xs' : ''}`}>
          <NavIconExplore size={16} />
        </div>
        <span className="text-[11px] font-black leading-tight">Explore</span>
        <span className="text-[9px] opacity-80 leading-tight">Khám phá</span>
      </button>

      {/* 2. Games */}
      <button
        onClick={() => {
          soundEffects.playClick();
          setActiveStudentTab('games');
        }}
        className={`flex-1 min-h-[56px] py-1 px-1 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
          activeStudentTab === 'games'
            ? 'bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-500 text-amber-950 font-black shadow-md border-b-3 border-amber-700 scale-102 ring-2 ring-amber-300'
            : 'text-slate-600 hover:bg-slate-100 font-bold'
        }`}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-0.5 ${activeStudentTab === 'games' ? 'bg-white shadow-xs' : ''}`}>
          <NavIconGames size={16} />
        </div>
        <span className="text-[11px] font-black leading-tight">Games</span>
        <span className="text-[9px] opacity-80 leading-tight">Đấu trường</span>
      </button>

      {/* 3. Passport */}
      <button
        onClick={() => {
          soundEffects.playClick();
          setActiveStudentTab('passport');
        }}
        className={`flex-1 min-h-[56px] py-1 px-1 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
          activeStudentTab === 'passport'
            ? 'bg-gradient-to-b from-purple-400 via-indigo-500 to-purple-600 text-white font-black shadow-md border-b-3 border-purple-900 scale-102 ring-2 ring-purple-300'
            : 'text-slate-600 hover:bg-slate-100 font-bold'
        }`}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-0.5 ${activeStudentTab === 'passport' ? 'bg-white shadow-xs' : ''}`}>
          <NavIconPassport size={16} />
        </div>
        <span className="text-[11px] font-black leading-tight">Passport</span>
        <span className="text-[9px] opacity-80 leading-tight">Hộ chiếu</span>
      </button>

      {/* 4. Progress */}
      <button
        onClick={() => {
          soundEffects.playClick();
          setActiveStudentTab('progress');
        }}
        className={`flex-1 min-h-[56px] py-1 px-1 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
          activeStudentTab === 'progress'
            ? 'bg-gradient-to-b from-emerald-300 via-teal-400 to-emerald-600 text-white font-black shadow-md border-b-3 border-teal-900 scale-102 ring-2 ring-teal-300'
            : 'text-slate-600 hover:bg-slate-100 font-bold'
        }`}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-0.5 ${activeStudentTab === 'progress' ? 'bg-white shadow-xs' : ''}`}>
          <NavIconProgress size={16} />
        </div>
        <span className="text-[11px] font-black leading-tight">Progress</span>
        <span className="text-[9px] opacity-80 leading-tight">Tiến độ</span>
      </button>
    </nav>
  );
};
