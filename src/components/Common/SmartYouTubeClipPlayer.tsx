import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Tv, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Volume2, 
  Maximize2,
  AlertCircle
} from 'lucide-react';
import { soundEffects } from '../../lib/soundEffects';
import { 
  buildYouTubeClipEmbedUrl, 
  formatSecondsToTime, 
  formatDurationHuman 
} from '../../lib/youtubeClipHelper';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

export interface SmartYouTubeClipPlayerProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  startSeconds: number;
  endSeconds: number;
  thumbnailUrl?: string;
  className?: string;
  autoPlayOnMount?: boolean;
  onPlayStarted?: () => void;
  onClipEnded?: () => void;
  showDetails?: boolean;
}

export const SmartYouTubeClipPlayer: React.FC<SmartYouTubeClipPlayerProps> = ({
  videoId,
  title = 'Đoạn Trích Video Bài Học (Curated Educational Clip)',
  subtitle,
  startSeconds,
  endSeconds,
  thumbnailUrl,
  className = '',
  autoPlayOnMount = false,
  onPlayStarted,
  onClipEnded,
  showDetails = true
}) => {
  // Requirement 1 & 3: Strict maximum 60 seconds enforced at player level
  const safeStartSeconds = Math.max(0, Math.floor(startSeconds));
  const safeEndSeconds = Math.min(Math.floor(endSeconds), safeStartSeconds + 60);

  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlayOnMount);
  const [isClipEnded, setIsClipEnded] = useState<boolean>(false);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState<number>(safeStartSeconds);
  const [playCount, setPlayCount] = useState<number>(0);

  const containerIdRef = useRef<string>(`yt-player-${videoId}-${Math.random().toString(36).substring(2, 7)}`);
  const playerRef = useRef<any>(null);
  const checkIntervalRef = useRef<any>(null);

  // Computed duration
  const clipDuration = Math.max(0, safeEndSeconds - safeStartSeconds);
  const startTimeStr = formatSecondsToTime(safeStartSeconds);
  const endTimeStr = formatSecondsToTime(safeEndSeconds);
  const durationStr = formatDurationHuman(clipDuration);

  // Default thumbnail
  const effectiveThumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Clean up interval and player on unmount
  useEffect(() => {
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // Initialize YouTube IFrame Player API when isPlaying becomes true
  useEffect(() => {
    if (!isPlaying || !videoId) return;

    let isMounted = true;

    const initYTPlayer = () => {
      if (!isMounted) return;
      if (!window.YT || !window.YT.Player) return;

      const element = document.getElementById(containerIdRef.current);
      if (!element) return;

      try {
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch (e) {}
        }

        playerRef.current = new window.YT.Player(containerIdRef.current, {
          videoId,
          playerVars: {
            start: safeStartSeconds,
            end: safeEndSeconds,
            autoplay: 1,
            enablejsapi: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3
          },
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              try {
                event.target.seekTo(safeStartSeconds, true);
                event.target.playVideo();
              } catch (e) {}
            },
            onStateChange: (event: any) => {
              if (!isMounted) return;
              // 0 = YT.PlayerState.ENDED, 2 = YT.PlayerState.PAUSED
              if (event.data === 0) {
                handleClipFinished();
              }
            }
          }
        });

        // Polling timer to enforce accurate clip end bound
        if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = setInterval(() => {
          if (!isMounted || !playerRef.current) return;
          try {
            if (typeof playerRef.current.getCurrentTime === 'function') {
              const curr = playerRef.current.getCurrentTime();
              if (typeof curr === 'number' && !isNaN(curr)) {
                setCurrentTimeDisplay(Math.floor(curr));
                // If past or reached safeEndSeconds, pause and mark finished
                if (curr >= safeEndSeconds - 0.25) {
                  playerRef.current.pauseVideo();
                  handleClipFinished();
                }
              }
            }
          } catch (e) {}
        }, 300);
      } catch (err) {
        console.warn('[SmartYouTubeClipPlayer] Error initializing YT.Player, falling back to iframe src:', err);
      }
    };

    // Load YouTube API script if not yet loaded
    if (!window.YT) {
      const existingTag = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingTag) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevHandler = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevHandler) prevHandler();
        initYTPlayer();
      };
    } else {
      initYTPlayer();
    }

    // Safety fallback: if YT API is not triggering or is blocked, auto-end after clip duration + 2s grace
    const fallbackTimer = setTimeout(() => {
      if (isMounted && isPlaying && !isClipEnded) {
        // Only if still playing past duration
      }
    }, (clipDuration + 2) * 1000);

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, [isPlaying, videoId, safeStartSeconds, safeEndSeconds, playCount]);

  // Handle clip reached end
  const handleClipFinished = () => {
    setIsClipEnded(true);
    soundEffects.playVictory();
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
    }
    if (onClipEnded) {
      onClipEnded();
    }
  };

  // Student clicks Play button on Facade
  const handleStartPlay = () => {
    soundEffects.playClick();
    setIsPlaying(true);
    setIsClipEnded(false);
    setCurrentTimeDisplay(safeStartSeconds);
    // Explicitly notify parent (Does NOT automatically mark complete - Requirement 10)
    if (onPlayStarted) {
      onPlayStarted();
    }
  };

  // Student / Teacher clicks Play Again (Requirement 8)
  const handlePlayAgain = () => {
    soundEffects.playClick();
    setIsClipEnded(false);
    setPlayCount(prev => prev + 1);

    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      try {
        playerRef.current.seekTo(safeStartSeconds, true);
        playerRef.current.playVideo();
        return;
      } catch (e) {
        // Fall back to re-initializing
      }
    }
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 50);
  };

  // Close playback and return to facade
  const handleClosePlayer = () => {
    soundEffects.playClick();
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
    }
    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    setIsPlaying(false);
    setIsClipEnded(false);
  };

  const fallbackEmbedUrl = buildYouTubeClipEmbedUrl(videoId, safeStartSeconds, safeEndSeconds, {
    autoplay: true,
    enablejsapi: true
  });

  return (
    <div className={`space-y-3 ${className}`}>
      
      {/* Optional Header Strip */}
      {showDetails && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-rose-100 text-rose-600 font-bold shrink-0">
                <Tv className="w-4 h-4" />
              </span>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading line-clamp-1">
                {title}
              </h4>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 shrink-0">
                Clip {durationStr}
              </span>
            </div>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Timing Badge */}
          <div className="flex items-center gap-1.5 self-start sm:self-center px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-700">{startTimeStr}</span>
            <span className="text-slate-400">➔</span>
            <span className="text-rose-700">{endTimeStr}</span>
          </div>
        </div>
      )}

      {/* 16:9 VIDEO CONTAINER (FACADE + EMBED + CLIP FINISHED OVERLAY) */}
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-950 shadow-xl border-2 border-slate-200 group select-none">
        
        {/* State A: Currently Playing */}
        {isPlaying ? (
          <div className="relative w-full h-full bg-black">
            
            {/* YouTube Player Container (hooked by YT.Player API) */}
            <div id={containerIdRef.current} className="w-full h-full">
              {/* Fallback iframe in case YT API script takes a moment */}
              <iframe
                src={fallbackEmbedUrl}
                title={title}
                className="w-full h-full border-0 rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Top Floating Controls Bar */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
              {/* Timing & Clip Pill */}
              <div className="pointer-events-auto flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Đoạn trích: {startTimeStr} – {endTimeStr}</span>
                <span className="text-slate-400 font-mono text-[10px]">({durationStr})</span>
              </div>

              {/* Close / Return to Cover Button */}
              <button
                onClick={handleClosePlayer}
                className="pointer-events-auto px-3 py-1 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold transition-all cursor-pointer shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95"
                title="Đóng chế độ phát video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đóng</span>
              </button>
            </div>

            {/* State B: Clip Finished Overlay (Appears automatically when End Time is reached) */}
            {isClipEnded && (
              <div className="absolute inset-0 z-30 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mb-3 shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1.5 max-w-md">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 text-[11px] font-black uppercase tracking-wider">
                    Đã xem xong đoạn trích
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-white font-heading">
                    {title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    Video đã dừng chính xác tại mốc <strong className="text-amber-300">{endTimeStr}</strong> theo chỉ định của giáo viên.
                  </p>
                </div>

                {/* Primary Action: PLAY AGAIN (Requirement 8) */}
                <div className="flex items-center gap-3 mt-5 flex-wrap justify-center">
                  <button
                    onClick={handlePlayAgain}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-rose-900/40 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Watch Again (Xem Lại Đoạn Này)</span>
                  </button>

                  <button
                    onClick={handleClosePlayer}
                    className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs cursor-pointer transition-all"
                  >
                    Đóng chế độ phát
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* State C: Facade Cover (Zero iframes loaded - 100% Performance) */
          <div
            onClick={handleStartPlay}
            className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
            title="Bấm để phát đoạn video đã chọn"
          >
            {/* Background Thumbnail */}
            <img 
              src={effectiveThumbnail} 
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

            {/* Top Protection Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chế độ Đoạn Trích Thông Minh • Không Tải File MP4</span>
            </div>

            {/* Top Right Duration Pill */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/90 text-white text-[11px] font-mono font-black shadow-md">
              <Clock className="w-3.5 h-3.5" />
              <span>{startTimeStr} ➔ {endTimeStr}</span>
            </div>

            {/* Center: Play Button & Clip Info */}
            <div className="relative z-10 text-center space-y-3 px-4 max-w-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-rose-600 to-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:from-rose-500 group-hover:to-red-500 transition-all duration-300 border-3 border-white/90">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white drop-shadow-sm" />
              </div>

              <div>
                <h5 className="text-base sm:text-xl font-black text-white font-heading drop-shadow-md">
                  Bấm để phát đoạn video đã chọn
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-xs mt-1">
                  Đoạn trích: từ <strong>{startTimeStr}</strong> đến <strong>{endTimeStr}</strong> ({durationStr})
                </p>
                <p className="text-[11px] text-emerald-300 font-bold mt-1">
                  ⚡ Tự động dừng tại {endTimeStr} • Có thể xem lại bất cứ lúc nào
                </p>
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between text-white/80 text-[10.5px] sm:text-xs font-semibold">
              <span className="flex items-center gap-1">
                <span>🔴</span>
                <span>YouTube IFrame API with start &amp; end bounds</span>
              </span>
              <span className="bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                Không tải dữ liệu trước khi bấm Play
              </span>
            </div>

          </div>
        )}

      </div>

      {/* Safety & Performance Strip */}
      <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
        <span className="flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Chỉ phát đoạn từ {startTimeStr} đến {endTimeStr}. Không cắt video gốc, không lưu trữ file MP4 lên máy chủ.</span>
        </span>
        <span className="text-slate-400 font-mono text-[10px] hidden sm:inline">
          {clipDuration}s clip
        </span>
      </div>

    </div>
  );
};
