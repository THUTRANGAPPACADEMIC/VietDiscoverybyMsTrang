import React, { useState, useEffect, useRef } from 'react';
import { 
  backgroundMusic, 
  BackgroundMusicState, 
  SUPABASE_PIANO_MUSIC_URL 
} from '../lib/backgroundMusic';
import { soundEffects } from '../lib/soundEffects';
import { 
  Music, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles,
  Sliders,
  Settings,
  RotateCcw,
  Check,
  ExternalLink
} from 'lucide-react';

export const FloatingMusicPlayer: React.FC = () => {
  const [state, setState] = useState<BackgroundMusicState>(() => backgroundMusic.getState());
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  const [showTeacherConfig, setShowTeacherConfig] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState(state.musicUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = backgroundMusic.subscribe((nextState) => {
      setState(nextState);
      setCustomUrlInput(nextState.musicUrl);
    });
    return unsub;
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowVolumePopup(false);
        setShowTeacherConfig(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const handleToggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    backgroundMusic.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    backgroundMusic.setVolume(val);
  };

  const handleSaveCustomUrl = () => {
    soundEffects.playClick();
    backgroundMusic.setCustomUrl(customUrlInput);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleResetDefaultUrl = () => {
    soundEffects.playClick();
    backgroundMusic.resetDefaultUrl();
    setCustomUrlInput(SUPABASE_PIANO_MUSIC_URL);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const isActuallyAudible = state.isPlaying && !state.isDucked;

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-22 sm:bottom-6 right-4 sm:right-6 z-40 select-none flex flex-col items-end pointer-events-auto"
      style={{ isolation: 'isolate' }}
    >
      {/* Optional Smooth Volume Slider & Settings Popover */}
      {showVolumePopup && (
        <div 
          className="mb-2.5 p-4 rounded-3xl border-2 backdrop-blur-xl shadow-[0_16px_36px_rgba(139,74,232,0.28)] space-y-3 animate-scale-up w-64 sm:w-72 text-slate-800"
          style={{
            background: 'linear-gradient(135deg, rgba(233, 221, 255, 0.96) 0%, rgba(217, 240, 255, 0.96) 100%)',
            borderColor: '#8B4AE8'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-purple-200">
            <span className="flex items-center gap-1.5 text-xs font-black text-purple-950 font-heading">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Nhạc Nền Piano Dịu Êm</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white font-mono text-[10px] font-bold">
              {Math.round(state.volume * 100)}%
            </span>
          </div>

          {/* Volume Slider: Default 10% */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-purple-900">
              <span className="flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Âm lượng (Mặc định 10%):</span>
              </span>
              <span className="font-mono font-bold text-purple-700">{Math.round(state.volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={state.volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 rounded-lg bg-purple-200 accent-purple-600 cursor-pointer"
            />
            <div className="flex items-center justify-between text-[9px] text-purple-700 font-semibold">
              <span>0% (Tắt)</span>
              <span className="text-purple-950 font-black">10% (Chuẩn dịu êm)</span>
              <span>100%</span>
            </div>
          </div>

          {/* Intelligent Audio Ducking Status Alert */}
          {state.isDucked && (
            <div className="p-2 rounded-xl bg-amber-100/90 border border-amber-300 text-[10px] text-amber-900 font-bold text-center animate-pulse">
              🔇 Tự động tạm tắt cho bài nghe / nói / video
            </div>
          )}

          {/* Track Source Info */}
          <div className="text-[10px] text-purple-900 bg-white/70 p-2 rounded-xl border border-purple-200">
            <div className="flex items-center justify-between font-bold">
              <span>Nguồn: {state.isCustomUrl ? 'Giáo viên tùy chỉnh' : 'Supabase Storage'}</span>
              <span className="text-emerald-700 font-bold">● Đã xác minh</span>
            </div>
            <p className="truncate text-slate-600 font-medium mt-0.5">{state.trackTitle}</p>
          </div>

          {/* Teacher URL Configuration Toggle */}
          <div className="pt-1">
            <button
              onClick={() => setShowTeacherConfig(prev => !prev)}
              className="w-full py-1.5 px-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-between transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Settings className="w-3 h-3 text-purple-700" />
                <span>Cấu hình Link MP3 Giáo viên</span>
              </span>
              <span>{showTeacherConfig ? '▲ Đóng' : '▼ Mở'}</span>
            </button>

            {showTeacherConfig && (
              <div className="mt-2 space-y-2 p-2.5 rounded-xl bg-white/80 border border-purple-200 animate-fade-in text-[10px]">
                <p className="text-slate-600 font-medium">
                  Nhập đường link MP3 trực tuyến (64–96 kbps, miễn phí bản quyền):
                </p>
                <input
                  type="url"
                  placeholder="https://.../music.mp3"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  className="w-full px-2 py-1.5 rounded-lg bg-white border border-purple-300 font-mono text-[10px] text-slate-800 focus:outline-none focus:border-purple-600"
                />

                {saveSuccess && (
                  <p className="text-emerald-600 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Đã lưu thành công!</span>
                  </p>
                )}

                <div className="flex items-center justify-between gap-1.5 pt-1">
                  <button
                    onClick={handleResetDefaultUrl}
                    className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Mặc định</span>
                  </button>
                  <button
                    onClick={handleSaveCustomUrl}
                    className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-black flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Check className="w-2.5 h-2.5" />
                    <span>Lưu & Phát</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Floating Music Pill: Pastel Lavender (#E9DDFF) & Pastel Blue (#D9F0FF) */}
      <div
        className="group relative flex items-center gap-2 p-1.5 pr-3 sm:pr-3.5 rounded-full border-2 transition-all duration-300 shadow-[0_8px_25px_rgba(139,74,232,0.25)] hover:scale-105 cursor-pointer backdrop-blur-md active:scale-95"
        style={{
          background: isActuallyAudible
            ? 'linear-gradient(135deg, #E9DDFF 0%, #D9F0FF 100%)'
            : 'linear-gradient(135deg, rgba(248, 250, 252, 0.94) 0%, rgba(241, 245, 249, 0.94) 100%)',
          borderColor: isActuallyAudible ? '#8B4AE8' : '#cbd5e1'
        }}
        onClick={handleToggleMusic}
        title={isActuallyAudible ? 'Nhạc Piano đang phát (Bấm để tắt)' : 'Bấm để bật Nhạc Piano Thần Tiên'}
      >
        {/* Soft Lavender Glow Ring when Playing */}
        {isActuallyAudible && (
          <div 
            className="absolute -inset-1 rounded-full opacity-60 blur-md pointer-events-none animate-pulse"
            style={{ background: 'radial-gradient(circle, #8B4AE8 0%, #0798E4 100%)' }}
          />
        )}

        {/* Small Musical Note Icon / Equalizer */}
        <div 
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-colors"
          style={{
            background: isActuallyAudible
              ? 'linear-gradient(135deg, #8B4AE8 0%, #0798E4 100%)'
              : '#e2e8f0',
            color: isActuallyAudible ? '#ffffff' : '#64748b'
          }}
        >
          {isActuallyAudible ? (
            /* Animated bouncing equalizer bars */
            <div className="flex items-end gap-0.5 h-3.5">
              <span className="w-0.5 bg-white rounded-full animate-bounce duration-300" style={{ height: '65%' }} />
              <span className="w-0.5 bg-white rounded-full animate-bounce duration-500" style={{ height: '100%' }} />
              <span className="w-0.5 bg-white rounded-full animate-bounce duration-400" style={{ height: '50%' }} />
            </div>
          ) : (
            /* Muted musical note */
            <div className="relative">
              <Music className="w-4 h-4 text-slate-500" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-slate-400 border border-white" />
            </div>
          )}
        </div>

        {/* Label & State */}
        <div className="relative text-left">
          <div className="flex items-center gap-1">
            <span 
              className="text-xs font-black font-heading tracking-tight"
              style={{ color: isActuallyAudible ? '#5b21b6' : '#475569' }}
            >
              {isActuallyAudible ? 'Nhạc Piano: BẬT' : state.isDucked ? 'Tạm Tắt' : 'Nhạc Piano: TẮT'}
            </span>
            <span 
              className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full"
              style={{
                background: isActuallyAudible ? 'rgba(139, 74, 232, 0.15)' : '#e2e8f0',
                color: isActuallyAudible ? '#6b21a8' : '#64748b'
              }}
            >
              {Math.round(state.volume * 100)}%
            </span>
          </div>
          <p 
            className="text-[9px] sm:text-[10px] font-bold line-clamp-1 max-w-[90px] sm:max-w-[110px]"
            style={{ color: isActuallyAudible ? '#7c3aed' : '#94a3b8' }}
          >
            {state.isDucked ? 'Đang nói / nghe' : 'Soft Piano Solo'}
          </p>
        </div>

        {/* Small Sliders Button to open Volume & Teacher Config */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            soundEffects.playClick();
            setShowVolumePopup(prev => !prev);
          }}
          className="relative ml-0.5 p-1 rounded-full hover:bg-white/60 transition-colors text-purple-700 cursor-pointer"
          title="Tùy chỉnh âm lượng & nguồn nhạc"
        >
          <Sliders className="w-3.5 h-3.5 text-slate-500 hover:text-purple-700" />
        </button>
      </div>
    </div>
  );
};
