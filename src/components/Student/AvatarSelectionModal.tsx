import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  Smile, 
  Heart, 
  Award, 
  Compass, 
  Wand2, 
  ChevronRight,
  Info
} from 'lucide-react';
import { BOY_AVATARS, GIRL_AVATARS, ALL_AVATARS, AvatarItem, getAvatarById } from '../../data/avatarsData';
import { soundEffects } from '../../lib/soundEffects';

interface AvatarSelectionModalProps {
  isOpen: boolean;
  currentAvatarId?: string;
  onClose: () => void;
  onSelectAvatar: (avatarId: string) => void;
}

export const AvatarSelectionModal: React.FC<AvatarSelectionModalProps> = ({
  isOpen,
  currentAvatarId,
  onClose,
  onSelectAvatar
}) => {
  const [activeTab, setActiveTab] = useState<'boys' | 'girls'>('boys');
  const [selectedId, setSelectedId] = useState<string>(() => {
    return currentAvatarId || BOY_AVATARS[0].id;
  });
  const [isBouncing, setIsBouncing] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Sync selectedId when modal opens with a current avatar
  useEffect(() => {
    if (isOpen && currentAvatarId) {
      setSelectedId(currentAvatarId);
      const matched = getAvatarById(currentAvatarId);
      if (matched?.gender === 'girl') {
        setActiveTab('girls');
      } else {
        setActiveTab('boys');
      }
    }
  }, [isOpen, currentAvatarId]);

  if (!isOpen) return null;

  const currentList = activeTab === 'boys' ? BOY_AVATARS : GIRL_AVATARS;
  const selectedAvatar: AvatarItem = getAvatarById(selectedId) || currentList[0];

  const handleCardClick = (avatar: AvatarItem) => {
    soundEffects.playAvatarSelect();
    setSelectedId(avatar.id);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  const handleConfirm = () => {
    soundEffects.playStarFanfare();
    setShowCelebration(true);
    setTimeout(() => {
      onSelectAvatar(selectedAvatar.id);
      setShowCelebration(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-gradient-to-b from-sky-50 via-white to-amber-50 rounded-3xl shadow-2xl border-4 border-sky-300 flex flex-col overflow-hidden"
        style={{
          boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.35)'
        }}
      >
        {/* TOP HEADER BAR */}
        <div className="relative px-5 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white flex items-center justify-between shrink-0 shadow-sm border-b-2 border-sky-200">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xs border border-white/30 text-amber-200">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black font-heading tracking-tight drop-shadow-xs">
                  Choose Your 3D Avatar
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider uppercase shadow-xs">
                  40 Characters
                </span>
              </div>
              <p className="text-xs text-sky-100 font-semibold">
                Chọn nhân vật 3D đáng yêu đồng hành trên hành trình khám phá Việt Nam!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 active:scale-90"
            title="Đóng (Close)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY (Two Column on Desktop: Left Gallery, Right Preview) */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT COLUMN: FILTER TABS & 40 AVATAR GRID (Scrollable) */}
          <div className="flex-1 flex flex-col min-w-0 border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
            
            {/* Filter Tabs Header */}
            <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                {/* BOYS (20) Tab */}
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveTab('boys');
                  }}
                  className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'boys'
                      ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-md scale-102 border-2 border-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>👦</span>
                  <span>BOYS</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${activeTab === 'boys' ? 'bg-white/30 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    20
                  </span>
                </button>

                {/* GIRLS (20) Tab */}
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveTab('girls');
                  }}
                  className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'girls'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-md scale-102 border-2 border-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>👧</span>
                  <span>GIRLS</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${activeTab === 'girls' ? 'bg-white/30 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    20
                  </span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-bold bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                <Info className="w-3.5 h-3.5 text-amber-600" />
                <span>Con có thể chọn bất kỳ nhân vật nào mình thích!</span>
              </div>
            </div>

            {/* Avatar Cards Grid */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {currentList.map((avatar) => {
                  const isSelected = selectedId === avatar.id;
                  return (
                    <div
                      key={avatar.id}
                      onClick={() => handleCardClick(avatar)}
                      onMouseEnter={() => soundEffects.playHover()}
                      className={`relative group rounded-2xl p-2.5 sm:p-3 text-center cursor-pointer transition-all duration-200 select-none flex flex-col items-center justify-between ${
                        isSelected
                          ? 'bg-gradient-to-b from-amber-50 via-white to-sky-50 ring-4 ring-amber-400 shadow-[0_8px_20px_rgba(251,191,36,0.35)] scale-105 z-10'
                          : 'bg-white/90 hover:bg-white border-2 border-slate-200 hover:border-sky-300 hover:shadow-lg hover:scale-110'
                      }`}
                    >
                      {/* Selected Floating Checkmark Badge */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-md border-2 border-white z-20 animate-bounce">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}

                      {/* 3D Avatar Image Container */}
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-sky-100 to-amber-100 mb-2 border border-slate-100 shadow-inner">
                        <img
                          src={avatar.image}
                          alt={avatar.name}
                          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                            isSelected && isBouncing ? 'animate-bounce' : ''
                          }`}
                          loading="lazy"
                        />
                        {/* Soft shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10 pointer-events-none"></div>
                      </div>

                      {/* Character Title */}
                      <div className="w-full">
                        <div className="font-black text-xs sm:text-[13px] text-slate-800 font-heading leading-tight truncate">
                          {avatar.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-bold text-sky-600 truncate mt-0.5">
                          {avatar.vietnameseName}
                        </div>
                      </div>

                      {/* Role Pill */}
                      <div className="mt-1.5 w-full">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-800 transition-colors">
                          {avatar.role}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LARGE CHARACTER PREVIEW & CONFIRMATION PANE */}
          <div className="w-full lg:w-88 xl:w-96 p-4 sm:p-6 bg-gradient-to-b from-white via-sky-50/50 to-amber-50/50 flex flex-col justify-between shrink-0 overflow-y-auto">
            
            <div className="space-y-4 text-center">
              {/* Preview Header Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black mx-auto">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
                <span>Nhân vật được chọn (Selected Preview)</span>
              </div>

              {/* Big 3D Avatar Frame */}
              <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-2 bg-gradient-to-tr from-amber-300 via-rose-300 to-sky-400 shadow-xl border-4 border-white">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-inner relative group">
                  <img
                    src={selectedAvatar.image}
                    alt={selectedAvatar.name}
                    className={`w-full h-full object-cover select-none transition-transform duration-300 ${
                      isBouncing ? 'animate-bounce' : 'group-hover:scale-105'
                    }`}
                  />
                  {/* Glowing halo */}
                  <div className="absolute inset-0 ring-4 ring-inset ring-white/40 pointer-events-none rounded-2xl"></div>
                </div>

                {/* Floating sparkles badge */}
                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[10px] shadow-md border-2 border-white flex items-center gap-1">
                  <span>3D CUTE</span>
                  <span>✨</span>
                </div>
              </div>

              {/* Character Identity */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                  {selectedAvatar.name}
                </h3>
                <div className="text-sm font-bold text-rose-500 font-heading">
                  {selectedAvatar.vietnameseName}
                </div>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-sky-100 text-sky-800 border border-sky-200">
                    {selectedAvatar.role}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                    {selectedAvatar.gender === 'boy' ? 'Boy Hero 👦' : 'Girl Hero 👧'}
                  </span>
                </div>
              </div>

              {/* Character Motto */}
              <div className="p-3 rounded-2xl bg-white/90 border border-sky-100 shadow-xs text-left">
                <div className="text-[10px] font-black uppercase tracking-wider text-sky-600 mb-1 flex items-center gap-1">
                  <Wand2 className="w-3 h-3" />
                  <span>Lời hiệu triệu (Motto):</span>
                </div>
                <p className="text-xs font-bold text-slate-800 italic">
                  "{selectedAvatar.motto}"
                </p>
              </div>

              {/* Bilingual Story / Description */}
              <div className="p-3 rounded-2xl bg-white/90 border border-amber-100 shadow-xs text-left space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-amber-700 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  <span>Giới thiệu (About):</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedAvatar.descriptionVi}
                </p>
                <p className="text-[11px] text-slate-500 italic leading-relaxed border-t border-slate-100 pt-1">
                  {selectedAvatar.descriptionEn}
                </p>
              </div>

            </div>

            {/* CONFIRM / CHOOSE MY AVATAR BUTTON */}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <button
                onClick={handleConfirm}
                disabled={showCelebration}
                className="w-full py-3.5 px-4 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 active:scale-95 shadow-lg shadow-orange-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-white/60"
              >
                {showCelebration ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>Đang lưu nhân vật...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 stroke-[3]" />
                    <span>Choose My Avatar! • Chọn nhân vật này</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-slate-400 font-bold mt-2">
                Con có thể đổi nhân vật bất cứ lúc nào mà không bị mất điểm sao!
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
