import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Tv, 
  ShieldCheck, 
  Sparkles, 
  Edit3, 
  Check, 
  X, 
  ExternalLink,
  AlertCircle,
  Clock,
  Scissors
} from 'lucide-react';
import { localStore } from '../../lib/supabase';
import { soundEffects } from '../../lib/soundEffects';
import { SmartYouTubeClipPlayer } from './SmartYouTubeClipPlayer';
import { 
  parseTimeToSeconds, 
  formatSecondsToTime, 
  validateClipTiming 
} from '../../lib/youtubeClipHelper';
import { VideoComingSoonCard } from './VideoComingSoonCard';

export interface YouTubeLessonEmbedProps {
  destinationId?: string;
  gradeBand?: string;
  defaultUrl?: string;
  startSeconds?: number;
  endSeconds?: number;
  title?: string;
  subtitle?: string;
  isTeacher?: boolean;
  onUrlChange?: (newUrl: string) => void;
  className?: string;
}

/**
 * Universal YouTube Video ID Extractor
 * Supports all common formats: youtu.be, watch?v=, embed, shorts, /v/, and raw 11-char ID
 */
export function extractYouTubeId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const clean = url.trim();
  const match = clean.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/i
  );
  if (match && match[1]) return match[1];
  if (/^[\w-]{11}$/.test(clean)) return clean;
  return null;
}

export const YouTubeLessonEmbed: React.FC<YouTubeLessonEmbedProps> = ({
  destinationId = 'halong',
  gradeBand = 'grade_3',
  defaultUrl,
  startSeconds,
  endSeconds,
  title = 'Video Khám Phá Bài Học (Interactive Discovery Video)',
  subtitle = 'Xem video sinh động về thiên nhiên và văn hóa Việt Nam • Phát trực tiếp không rời bài học',
  isTeacher = false,
  onUrlChange,
  className = ''
}) => {
  // Resolve effective teacher status: explicit prop OR teacher/admin role OR running on localhost for local testing
  const currentUser = localStore.get<any>('current_user', null);
  const effectiveIsTeacher = isTeacher || 
    currentUser?.role === 'teacher' || 
    currentUser?.role === 'admin' || 
    currentUser?.role === 'super_admin' || 
    (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'));

  // Storage key for teacher-customized video and clip timing per destination
  const storageKey = `lesson_youtube_${destinationId}_${gradeBand}`;
  const timingKey = `lesson_youtube_timing_${destinationId}_${gradeBand}`;

  // Resolve active URL: local saved > defaultUrl > empty string (NEVER auto-assign unauthorized videos)
  const [videoUrl, setVideoUrl] = useState<string>(() => {
    const saved = localStore.get<string | null>(storageKey, null);
    if (saved && extractYouTubeId(saved)) return saved;
    if (defaultUrl && extractYouTubeId(defaultUrl)) return defaultUrl;
    return '';
  });

  // Clip timing state (startSeconds & endSeconds)
  const [clipTiming, setClipTiming] = useState<{ startSeconds?: number; endSeconds?: number }>(() => {
    const saved = localStore.get<{ startSeconds?: number; endSeconds?: number } | null>(timingKey, null);
    if (saved && typeof saved.startSeconds === 'number' && typeof saved.endSeconds === 'number') {
      return saved;
    }
    if (typeof startSeconds === 'number' && typeof endSeconds === 'number') {
      return { startSeconds, endSeconds };
    }
    return {};
  });

  // Lazy-load state: ZERO iframes loaded until student clicks Play
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);
  const [inputUrl, setInputUrl] = useState<string>(videoUrl);
  const [inputStartTime, setInputStartTime] = useState<string>(
    clipTiming.startSeconds !== undefined ? formatSecondsToTime(clipTiming.startSeconds) : '00:00'
  );
  const [inputEndTime, setInputEndTime] = useState<string>(
    clipTiming.endSeconds !== undefined ? formatSecondsToTime(clipTiming.endSeconds) : ''
  );
  const [inputError, setInputError] = useState<string>('');

  const videoId = extractYouTubeId(videoUrl);

  // Sync state if destinationId changes
  useEffect(() => {
    const saved = localStore.get<string | null>(storageKey, null);
    const resolved = (saved && extractYouTubeId(saved)) || (defaultUrl && extractYouTubeId(defaultUrl)) || '';
    setVideoUrl(resolved);
    setInputUrl(resolved);

    const savedTiming = localStore.get<{ startSeconds?: number; endSeconds?: number } | null>(timingKey, null);
    const resolvedTiming = savedTiming || { startSeconds, endSeconds };
    setClipTiming(resolvedTiming);
    setInputStartTime(resolvedTiming.startSeconds !== undefined ? formatSecondsToTime(resolvedTiming.startSeconds) : '00:00');
    setInputEndTime(resolvedTiming.endSeconds !== undefined ? formatSecondsToTime(resolvedTiming.endSeconds) : '');

    setIsPlaying(false);
  }, [destinationId, gradeBand, defaultUrl, startSeconds, endSeconds]);

  // Handle Play Click
  const handleStartPlay = () => {
    soundEffects.playClick();
    setIsPlaying(true);
  };

  const handleStartTimeChange = (val: string) => {
    setInputStartTime(val);
    const sec = parseTimeToSeconds(val);
    if (sec !== null) {
      setInputEndTime(formatSecondsToTime(sec + 60));
    }
  };

  const handleEndTimeChange = (val: string) => {
    setInputEndTime(val);
    const endSec = parseTimeToSeconds(val);
    const startSec = parseTimeToSeconds(inputStartTime) ?? 0;
    if (endSec !== null && endSec > startSec + 60) {
      setInputEndTime(formatSecondsToTime(startSec + 60));
    }
  };

  // Handle Teacher Save URL & Timing
  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setInputError('');
    const id = extractYouTubeId(inputUrl);
    if (!id) {
      setInputError('Đường dẫn không hợp lệ. Vui lòng dán liên kết YouTube chuẩn (ví dụ: https://www.youtube.com/watch?v=...)');
      return;
    }

    let parsedStart: number | undefined;
    let parsedEnd: number | undefined;

    if (inputEndTime.trim()) {
      const s = parseTimeToSeconds(inputStartTime) ?? 0;
      const eSec = parseTimeToSeconds(inputEndTime);
      if (eSec === null || eSec <= 0) {
        setInputError('End Time không hợp lệ (định dạng mm:ss, ví dụ 01:30)');
        return;
      }
      if (s >= eSec) {
        setInputError('Thời gian bắt đầu (Start Time) phải nhỏ hơn thời gian kết thúc (End Time)');
        return;
      }
      // Strict 60-second limit (Requirement 1 & 3)
      const clampedEnd = Math.min(eSec, s + 60);
      parsedStart = s;
      parsedEnd = clampedEnd;
    }

    const cleanUrl = inputUrl.trim();
    setVideoUrl(cleanUrl);
    localStore.set(storageKey, cleanUrl);

    if (parsedStart !== undefined && parsedEnd !== undefined) {
      const timingObj = { startSeconds: parsedStart, endSeconds: parsedEnd };
      setClipTiming(timingObj);
      localStore.set(timingKey, timingObj);
    } else {
      setClipTiming({});
      localStore.remove(timingKey);
    }

    setIsEditingUrl(false);
    setIsPlaying(false);
    if (onUrlChange) onUrlChange(cleanUrl);
    soundEffects.playVictory();
  };

  // Remove video / reset to Coming Soon
  const handleRemoveVideo = () => {
    setVideoUrl('');
    setInputUrl('');
    setClipTiming({});
    setInputStartTime('00:00');
    setInputEndTime('');
    localStore.remove(storageKey);
    localStore.remove(timingKey);
    setIsEditingUrl(false);
    setIsPlaying(false);
    if (onUrlChange) onUrlChange('');
    soundEffects.playClick();
  };

  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1280&q=80';

  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`
    : '';

  return (
    <div className={`space-y-3 ${className}`}>
      
      {/* Top Title & Info Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-rose-100 text-rose-600 font-bold">
              <Tv className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading">
              {title}
            </h4>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              YouTube 16:9
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Teacher Edit Trigger */}
        {effectiveIsTeacher && (
          <button
            onClick={() => {
              soundEffects.playClick();
              setIsEditingUrl(!isEditingUrl);
            }}
            className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
            title="Dán liên kết YouTube cho bài học này"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditingUrl ? 'Đóng cài đặt' : 'Dán Link YouTube (Giáo viên)'}</span>
          </button>
        )}
      </div>

      {/* Teacher URL Input Box (Collapsible) */}
      {effectiveIsTeacher && isEditingUrl && (
        <form onSubmit={handleSaveUrl} className="p-4 rounded-2xl bg-amber-50/90 border-2 border-amber-300 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-950 flex items-center gap-1.5">
              <span>🔗</span>
              <span>Dán liên kết YouTube bài học:</span>
            </span>
            <button
              type="button"
              onClick={handleRemoveVideo}
              className="text-[11px] font-bold text-rose-700 hover:text-rose-900 underline cursor-pointer"
            >
              Gỡ video (Coming Soon)
            </button>
          </div>

          {/* Clip Start and End Time Settings */}
          <div className="p-3 rounded-xl bg-white border border-amber-300/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase text-amber-950 flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-amber-600" />
                <span>Cắt đoạn ngắn thông minh (Tùy chọn - Không bắt buộc):</span>
              </span>
              <span className="text-[10.5px] text-slate-400 font-mono">Định dạng: mm:ss</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[10.5px] font-bold text-emerald-800 mb-0.5">
                  Bắt đầu (Start):
                </label>
                <input
                  type="text"
                  value={inputStartTime}
                  onChange={(e) => handleStartTimeChange(e.target.value)}
                  placeholder="00:00"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 text-xs font-mono font-bold text-emerald-900 bg-emerald-50/20"
                />
              </div>

              <div>
                <label className="block text-[10.5px] font-bold text-rose-800 mb-0.5">
                  Kết thúc (End - Tối đa +60s):
                </label>
                <input
                  type="text"
                  value={inputEndTime}
                  onChange={(e) => handleEndTimeChange(e.target.value)}
                  placeholder="01:00"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 text-xs font-mono font-bold text-rose-900 bg-rose-50/20"
                />
              </div>
            </div>
            <p className="text-[10px] text-amber-800/80 italic">
              ⚡ <strong>Quy định:</strong> Mỗi đoạn clip tối đa 60 giây. Khi chọn Start Time, End Time sẽ tự động là +60s.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              value={inputUrl}
              onChange={(e) => {
                setInputUrl(e.target.value);
                setInputError('');
              }}
              placeholder="https://www.youtube.com/watch?v=..."
              className="flex-1 px-3.5 py-2 text-xs font-mono rounded-xl border border-amber-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-slate-800"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-amber-950 font-extrabold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1 shrink-0"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Lưu Video</span>
            </button>
            {videoId && (
              <button
                type="button"
                onClick={handleRemoveVideo}
                className="px-3.5 py-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1 shrink-0"
                title="Gỡ video này khỏi bài học và hiển thị Coming Soon"
              >
                <X className="w-3.5 h-3.5" />
                <span>Gỡ Video</span>
              </button>
            )}
          </div>

          {inputError && (
            <p className="text-[11px] font-bold text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{inputError}</span>
            </p>
          )}

          <p className="text-[11px] text-amber-900/80">
            💡 <strong>Mẹo:</strong> Giáo viên chỉ cần sao chép link từ YouTube trên máy tính hoặc điện thoại rồi dán vào đây. Hệ thống sẽ tự động tạo thumbnail và chế độ phát an toàn cho học sinh.
          </p>
        </form>
      )}

      {/* RENDER SMART CLIP PLAYER IF TIMING IS CONFIGURED */}
      {videoId && clipTiming.startSeconds !== undefined && clipTiming.endSeconds !== undefined ? (
        <SmartYouTubeClipPlayer
          videoId={videoId}
          title={title}
          subtitle={subtitle}
          startSeconds={clipTiming.startSeconds}
          endSeconds={clipTiming.endSeconds}
          thumbnailUrl={thumbnailUrl}
          showDetails={false}
        />
      ) : videoId ? (
        /* 16:9 HIGH-PERFORMANCE VIDEO CONTAINER (LAZY-LOADED FACADE FOR FULL VIDEO) */
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-950 shadow-lg border-2 border-slate-200/90 group">
          {isPlaying && embedUrl ? (
            <div className="relative w-full h-full">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full border-0 rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
              {/* Overlay Reset Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/85 text-white/90 text-xs font-bold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1 opacity-0 hover:opacity-100 group-hover:opacity-90 shadow-md"
                title="Đóng chế độ phát để xem lại bìa"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đóng video</span>
              </button>
            </div>
          ) : (
            <div
              onClick={handleStartPlay}
              className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center select-none"
              title="Bấm để phát video bài học"
            >
              {/* Background Thumbnail (Lazy Loaded, No Iframe) */}
              <img 
                src={thumbnailUrl} 
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              
              {/* Gradient Dimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

              {/* Top Protection Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chế độ Học tập An toàn • Không Rời Trang</span>
              </div>

              {/* Center: Large YouTube Red Play Button */}
              <div className="relative z-10 text-center space-y-3 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-rose-600 to-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:from-rose-500 group-hover:to-red-500 transition-all duration-300 border-3 border-white/90">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white drop-shadow-sm" />
                </div>
                <div>
                  <h5 className="text-sm sm:text-lg font-black text-white font-heading drop-shadow-md">
                    Bấm để bắt đầu xem video bài học
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium drop-shadow-xs mt-0.5">
                    Tỷ lệ chuẩn 16:9 • Tương thích mọi màn hình điện thoại & máy tính
                  </p>
                </div>
              </div>

              {/* Bottom Bar Info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between text-white/80 text-[10.5px] sm:text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <span>🔴</span>
                  <span>Nền tảng YouTube Embed (youtube-nocookie)</span>
                </span>
                <span className="hidden sm:inline bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  100% Nhẹ &amp; Không tốn bộ nhớ máy chủ
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Video Coming Soon Card when teacher has not approved a video */
        <VideoComingSoonCard
          lessonTitle={title}
          isTeacher={effectiveIsTeacher}
          onTeacherConfigure={() => setIsEditingUrl(true)}
        />
      )}

      {/* Safety & Performance Guarantee Strip */}
      <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
        <span className="flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Video phát trực tiếp qua YouTube API nhẹ, không lưu trữ tệp MP4, không làm chậm tốc độ tải trang.</span>
        </span>
        <span className="text-slate-400 font-mono text-[10px] hidden sm:inline">
          {videoId ? `ID: ${videoId}` : ''}
        </span>
      </div>

    </div>
  );
};
