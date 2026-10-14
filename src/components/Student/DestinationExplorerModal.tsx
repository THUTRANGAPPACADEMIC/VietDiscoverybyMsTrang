import React, { useState } from 'react';
import { Destination, GradeBand } from '../../types';
import { soundEffects } from '../../lib/soundEffects';
import { playSpeech, stopSpeech } from '../../lib/speech';
import { X, Volume2, Sparkles, MapPin, Compass, ArrowRight, Star } from 'lucide-react';

interface DestinationExplorerModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onStartAdventure: (destination: Destination, initialTab?: 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'quiz') => void;
  gradeBand?: GradeBand;
}

export const DestinationExplorerModal: React.FC<DestinationExplorerModalProps> = ({
  destination,
  isOpen,
  onClose,
  onStartAdventure,
  gradeBand = 'grade_1'
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen || !destination) return null;

  const lat = destination.geoCoordinates?.latitude || 20.910;
  const lng = destination.geoCoordinates?.longitude || 107.184;

  const handlePlayVoice = () => {
    soundEffects.playClick();
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(destination.summaryEn, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleLaunch = () => {
    soundEffects.playClick();
    stopSpeech();
    onStartAdventure(destination, 'vocabulary');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#ecfdf5] rounded-[36px] p-4 sm:p-6 shadow-2xl border-4 border-white/90 space-y-3.5 my-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            stopSpeech();
            onClose();
          }}
          className="absolute right-3.5 top-3.5 z-30 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-600 shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
          title="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. TOP HERO SCENERY CARD WITH CAPTAIN TRANG */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white group h-48 sm:h-56">
          <img
            src={destination.image || '/destinations/halong_bay.jpg'}
            alt={destination.name}
            className="w-full h-full object-cover select-none group-hover:scale-103 transition-transform duration-500"
          />

          {/* Destination Location Pill (Top-Left) */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-black border border-white/80">
            <MapPin className="w-3.5 h-3.5 fill-white text-rose-500 shrink-0" />
            <span className="font-heading tracking-wide drop-shadow-xs truncate max-w-[200px] sm:max-w-xs">
              {destination.name}
            </span>
          </div>

          {/* Sub Location Ribbon under Pill */}
          <div className="absolute top-11 left-4 text-[11px] font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
            <span>{destination.vietnameseName}</span>
            <span>•</span>
            <span>{destination.province}</span>
          </div>

          {/* Captain Trang Chibi Sticker + Speech Bubble (Top-Right) */}
          <div className="absolute -right-1 -bottom-2 sm:-bottom-1 flex items-end pointer-events-none z-20">
            {/* Cute Speech Bubble */}
            <div className="mb-8 mr-[-10px] bg-white/95 rounded-2xl px-3 py-1 shadow-md border border-pink-200 text-center animate-bounce-subtle">
              <div className="text-[11px] sm:text-xs font-black text-blue-900 leading-tight">Vietnam</div>
              <div className="text-[10px] sm:text-[11px] font-bold text-pink-600 leading-tight">is so beautiful! ❤️</div>
            </div>

            {/* Chibi Mascot */}
            <img
              src="/assets/cute/captain_trang_chibi.png"
              alt="Captain Trang"
              className="w-24 sm:w-28 h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* 2. WGS84 COORDINATES BAR */}
        <div className="bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 shadow-xs border border-sky-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-black text-slate-800 font-heading">
              Tọa độ WGS84:
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black text-sky-900 font-mono tracking-tight">
              {lat.toFixed(2)}°N, {lng.toFixed(3)}°E
            </span>
            <span className="text-base">🗺️</span>
          </div>
        </div>

        {/* 3. NGHE & LUYỆN ĐỌC (AUDIO PLAYER CARD) */}
        <div className="bg-gradient-to-r from-amber-50/95 via-amber-100/70 to-amber-50/95 rounded-3xl p-3 sm:p-3.5 shadow-sm border border-amber-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Sailboat Badge */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-200 to-amber-100 border-2 border-amber-300 shadow-xs flex items-center justify-center text-2xl shrink-0">
              ⛵
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-black text-blue-950 font-heading flex items-center gap-1 truncate">
                <span>Nghe & Luyện đọc:</span>
                <span className="text-amber-500">✨</span>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 truncate">
                {destination.name} ({destination.vietnameseName})
              </div>
            </div>
          </div>

          {/* Golden Glossy Audio Button */}
          <button
            onClick={handlePlayVoice}
            className={`px-3.5 sm:px-4 py-2 rounded-full font-black text-xs sm:text-sm text-amber-950 shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border-2 border-white/80 ${
              isPlayingAudio
                ? 'bg-gradient-to-r from-amber-300 to-yellow-400 scale-103 ring-2 ring-amber-400'
                : 'bg-gradient-to-b from-[#ffd166] via-[#ffb703] to-[#fb8500] hover:brightness-105 active:scale-95'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-amber-900' : 'text-amber-950'}`} />
            <span className="drop-shadow-xs">{isPlayingAudio ? 'Đang đọc...' : 'Nghe giọng mẫu'}</span>
          </button>
        </div>

        {/* 4. BILINGUAL TEXT & TRANSLATION */}
        <div className="space-y-2">
          {/* English sentence */}
          <div className="flex items-start gap-2 bg-white/90 rounded-2xl p-3 border border-sky-100 shadow-xs">
            <span className="text-lg shrink-0 -mt-0.5">⭐</span>
            <p className="text-xs sm:text-sm font-extrabold text-blue-950 leading-snug">
              {destination.summaryEn}
            </p>
          </div>

          {/* Cute Dolphin Vietnamese translation bubble */}
          <div className="flex items-center gap-2.5 bg-sky-100/80 rounded-2xl p-2.5 px-3 border border-sky-200 shadow-xs">
            <span className="text-2xl shrink-0">🐬</span>
            <p className="text-xs sm:text-[13px] font-bold text-sky-950 italic leading-snug flex-1">
              {destination.summaryVi}
            </p>
            <span className="text-amber-500 text-sm shrink-0">✨</span>
          </div>
        </div>

        {/* 5. THREE STAT BADGES (4 TỪ VỰNG | 1 CÂU HỎI BLOOM | +50 PHẦN THƯỞNG) */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {/* Badge 1: 4 Từ vựng */}
          <div className="bg-gradient-to-b from-sky-100 to-sky-50 rounded-2xl p-2.5 text-center border-2 border-sky-200 shadow-xs flex flex-col items-center justify-center">
            <span className="text-2xl mb-0.5">🏔️</span>
            <div className="text-base sm:text-lg font-black font-heading text-sky-950 leading-none">
              4
            </div>
            <div className="text-[9.5px] sm:text-[10px] font-black text-sky-700 uppercase tracking-tight mt-0.5">
              TỪ VỰNG
            </div>
          </div>

          {/* Badge 2: 1 Câu hỏi Bloom */}
          <div className="bg-gradient-to-b from-purple-100 to-purple-50 rounded-2xl p-2.5 text-center border-2 border-purple-200 shadow-xs flex flex-col items-center justify-center">
            <span className="text-2xl mb-0.5">🌸</span>
            <div className="text-base sm:text-lg font-black font-heading text-purple-950 leading-none">
              1
            </div>
            <div className="text-[9.5px] sm:text-[10px] font-black text-purple-700 uppercase tracking-tight mt-0.5">
              CÂU HỎI BLOOM
            </div>
          </div>

          {/* Badge 3: +50 Phần thưởng */}
          <div className="bg-gradient-to-b from-amber-100 to-amber-50 rounded-2xl p-2.5 text-center border-2 border-amber-200 shadow-xs flex flex-col items-center justify-center">
            <span className="text-2xl mb-0.5">⭐</span>
            <div className="text-base sm:text-lg font-black font-heading text-amber-950 leading-none">
              +50
            </div>
            <div className="text-[9.5px] sm:text-[10px] font-black text-amber-700 uppercase tracking-tight mt-0.5">
              PHẦN THƯỞNG
            </div>
          </div>
        </div>

        {/* 6. BIG LAUNCH BUTTON (BẮT ĐẦU HÀNH TRÌNH KHÁM PHÁ) */}
        <div className="pt-1">
          <button
            onClick={handleLaunch}
            className="w-full bg-gradient-to-r from-[#ff007f] via-[#ff2a85] to-[#f72585] hover:brightness-105 active:scale-98 text-white rounded-full p-2.5 sm:p-3 shadow-xl hover:shadow-2xl transition-all flex items-center justify-between px-3.5 sm:px-5 cursor-pointer border-3 border-white group relative overflow-hidden"
          >
            {/* Shimmer reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-[45%] pointer-events-none rounded-t-full"></div>

            {/* Left Compass in Circle */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-rose-600 text-lg sm:text-xl shrink-0 group-hover:rotate-45 transition-transform duration-300">
              🧭
            </div>

            {/* Center Text */}
            <div className="font-heading font-black text-sm sm:text-base md:text-lg tracking-wider drop-shadow-sm uppercase text-center flex-1 mx-2">
              BẮT ĐẦU HÀNH TRÌNH KHÁM PHÁ
            </div>

            {/* Right Pink Arrow Circle */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 border border-white/60 flex items-center justify-center text-white text-base shrink-0 group-hover:translate-x-1 transition-transform">
              ➜
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};
