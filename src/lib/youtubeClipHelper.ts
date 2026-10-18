/**
 * VIETDISCOVERY BY MS. TRANG - SMART YOUTUBE VIDEO CLIP HELPER
 * Utilities for extracting YouTube IDs, parsing mm:ss / hh:mm:ss timestamps,
 * calculating clip bounds, and constructing privacy-enhanced embed URLs.
 */
import { localStore } from './supabase';

export interface SavedVideoClip {
  id: string;
  title: string;
  videoUrl: string;
  videoId: string;
  startSeconds: number;
  endSeconds: number;
  startTimeStr: string;
  endTimeStr: string;
  durationSeconds: number;
  destinationId?: string;
  gradeBand?: string;
  topic?: string;
  notes?: string;
  createdAt: string;
  createdByName?: string;
}

/**
 * Universal YouTube Video ID Extractor
 * Supports standard watch, youtu.be, embed, shorts, timestamped URLs, and raw 11-char IDs
 */
export function extractYouTubeId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const clean = url.trim();

  // Pattern 1: youtu.be/ID or youtube.com/(embed|v|shorts|watch?v=)ID
  const match = clean.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/i
  );
  if (match && match[1]) return match[1];

  // Pattern 2: Raw 11-character video ID
  if (/^[\w-]{11}$/.test(clean)) return clean;

  return null;
}

/**
 * Extract time parameter from YouTube URL if present (e.g. ?t=90, ?t=1m30s)
 */
export function extractUrlTimestamp(url: string): number | null {
  if (!url) return null;
  const match = url.match(/[?&]t=([0-9hms]+)/i);
  if (!match || !match[1]) return null;

  const raw = match[1];
  // Simple number: t=90
  if (/^\d+$/.test(raw)) return parseInt(raw, 10);

  // Composite: 1h20m30s or 1m30s or 45s
  let seconds = 0;
  const hoursMatch = raw.match(/(\d+)h/i);
  const minsMatch = raw.match(/(\d+)m/i);
  const secsMatch = raw.match(/(\d+)s/i);

  if (hoursMatch) seconds += parseInt(hoursMatch[1], 10) * 3600;
  if (minsMatch) seconds += parseInt(minsMatch[1], 10) * 60;
  if (secsMatch) seconds += parseInt(secsMatch[1], 10);

  return seconds > 0 ? seconds : null;
}

/**
 * Parse a time string into total seconds.
 * Supports:
 * - "mm:ss" (e.g. "01:30" -> 90, "5:00" -> 300)
 * - "hh:mm:ss" (e.g. "01:05:20" -> 3920, "1:00:00" -> 3600)
 * - Plain integer string or number (e.g. "90" -> 90, 90 -> 90)
 * - YouTube short format like "1m30s" or "45s"
 * Returns null if format is invalid.
 */
export function parseTimeToSeconds(input: string | number | null | undefined): number | null {
  if (input === null || input === undefined) return null;
  if (typeof input === 'number') {
    return isNaN(input) || input < 0 ? null : Math.floor(input);
  }

  const str = input.trim();
  if (!str) return null;

  // Format: "1m30s", "45s", "1h2m"
  if (/[hms]/i.test(str)) {
    let secs = 0;
    const h = str.match(/(\d+)\s*h/i);
    const m = str.match(/(\d+)\s*m/i);
    const s = str.match(/(\d+)\s*s/i);
    if (!h && !m && !s) return null;
    if (h) secs += parseInt(h[1], 10) * 3600;
    if (m) secs += parseInt(m[1], 10) * 60;
    if (s) secs += parseInt(s[1], 10);
    return secs;
  }

  // Format: "hh:mm:ss" or "mm:ss" or "ss"
  const parts = str.split(':').map(p => p.trim());

  if (parts.length === 1) {
    // Single number "90"
    if (/^\d+$/.test(parts[0])) {
      return parseInt(parts[0], 10);
    }
    return null;
  }

  if (parts.length === 2) {
    // "mm:ss"
    const [minStr, secStr] = parts;
    if (!/^\d+$/.test(minStr) || !/^\d+$/.test(secStr)) return null;
    const minutes = parseInt(minStr, 10);
    const seconds = parseInt(secStr, 10);
    if (seconds >= 60) {
      // Allowed if overflowing, but usually invalid
      return minutes * 60 + seconds;
    }
    return minutes * 60 + seconds;
  }

  if (parts.length === 3) {
    // "hh:mm:ss"
    const [hrStr, minStr, secStr] = parts;
    if (!/^\d+$/.test(hrStr) || !/^\d+$/.test(minStr) || !/^\d+$/.test(secStr)) return null;
    const hours = parseInt(hrStr, 10);
    const minutes = parseInt(minStr, 10);
    const seconds = parseInt(secStr, 10);
    return hours * 3600 + minutes * 60 + seconds;
  }

  return null;
}

/**
 * Format total seconds into mm:ss or hh:mm:ss
 */
export function formatSecondsToTime(totalSeconds: number, forceHours: boolean = false): string {
  if (isNaN(totalSeconds) || totalSeconds < 0) return '00:00';
  const floored = Math.floor(totalSeconds);

  const hours = Math.floor(floored / 3600);
  const minutes = Math.floor((floored % 3600) / 60);
  const seconds = floored % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (hours > 0 || forceHours) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Human readable Vietnamese duration
 * e.g. 75 -> "1 phút 15 giây", 45 -> "45 giây"
 */
export function formatDurationHuman(seconds: number): string {
  if (isNaN(seconds) || seconds <= 0) return '0 giây';
  const floored = Math.floor(seconds);
  const hours = Math.floor(floored / 3600);
  const minutes = Math.floor((floored % 3600) / 60);
  const secs = floored % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} giờ`);
  if (minutes > 0) parts.push(`${minutes} phút`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs} giây`);

  return parts.join(' ');
}

export const MAX_CLIP_DURATION_SECONDS = 60;

/**
 * Automatically calculate End Time = Start Time + 60s (clamped if video duration is known)
 * Requirement 2: Giáo viên chỉ cần chọn Start Time; End Time tự động bằng Start Time + 60 giây.
 * Requirement 4: Nếu video còn ít hơn 60 giây thì phát đến hết.
 */
export function calculateAutoEndTime(
  startSeconds: number,
  videoDurationSeconds?: number
): { endSeconds: number; endTimeStr: string; durationSeconds: number } {
  const safeStart = Math.max(0, Math.floor(startSeconds));
  let calculatedEnd = safeStart + MAX_CLIP_DURATION_SECONDS;

  if (videoDurationSeconds && videoDurationSeconds > 0 && calculatedEnd > videoDurationSeconds) {
    calculatedEnd = Math.max(safeStart + 1, Math.floor(videoDurationSeconds));
  }

  const duration = calculatedEnd - safeStart;
  return {
    endSeconds: calculatedEnd,
    endTimeStr: formatSecondsToTime(calculatedEnd),
    durationSeconds: duration
  };
}

/**
 * Validate clip start and end timing
 * Rule 1 & 3: Maximum 60 seconds per clip
 * Rule 9: Check that start time is strictly less than end time
 */
export function validateClipTiming(
  startSeconds: number | null,
  endSeconds: number | null
): {
  isValid: boolean;
  errorMessage?: string;
  durationSeconds: number;
} {
  if (startSeconds === null || isNaN(startSeconds) || startSeconds < 0) {
    return {
      isValid: false,
      errorMessage: 'Thời gian bắt đầu (Start Time) không hợp lệ hoặc nhỏ hơn 00:00.',
      durationSeconds: 0
    };
  }

  if (endSeconds === null || isNaN(endSeconds) || endSeconds <= 0) {
    return {
      isValid: false,
      errorMessage: 'Thời gian kết thúc (End Time) không hợp lệ hoặc chưa được nhập.',
      durationSeconds: 0
    };
  }

  if (startSeconds >= endSeconds) {
    return {
      isValid: false,
      errorMessage: `Thời gian bắt đầu (${formatSecondsToTime(startSeconds)}) phải nhỏ hơn thời gian kết thúc (${formatSecondsToTime(endSeconds)}).`,
      durationSeconds: 0
    };
  }

  const duration = endSeconds - startSeconds;

  // Requirement 1 & 3: Maximum 60 seconds enforcement
  if (duration > MAX_CLIP_DURATION_SECONDS) {
    return {
      isValid: false,
      errorMessage: `Mỗi đoạn clip tối đa 60 giây (Quy định bắt buộc). Thời lượng hiện tại đang là ${formatDurationHuman(duration)} (${duration}s). Vui lòng chọn đoạn ≤ 60s.`,
      durationSeconds: duration
    };
  }

  return {
    isValid: true,
    durationSeconds: duration
  };
}

/**
 * Build privacy-enhanced YouTube embed URL with start and end parameters
 * Uses youtube-nocookie.com domain
 */
export function buildYouTubeClipEmbedUrl(
  videoId: string,
  startSeconds?: number,
  endSeconds?: number,
  options?: {
    autoplay?: boolean;
    enablejsapi?: boolean;
    rel?: number;
    controls?: number;
  }
): string {
  if (!videoId) return '';

  const params = new URLSearchParams();
  if (options?.autoplay !== false) {
    params.set('autoplay', '1');
  } else {
    params.set('autoplay', '0');
  }

  if (startSeconds !== undefined && startSeconds >= 0) {
    params.set('start', Math.floor(startSeconds).toString());
  }

  if (endSeconds !== undefined && endSeconds > 0) {
    // Hard cap at startSeconds + MAX_CLIP_DURATION_SECONDS
    const effectiveEnd = (startSeconds !== undefined)
      ? Math.min(Math.floor(endSeconds), Math.floor(startSeconds) + MAX_CLIP_DURATION_SECONDS)
      : Math.floor(endSeconds);
    params.set('end', effectiveEnd.toString());
  }

  params.set('enablejsapi', options?.enablejsapi !== false ? '1' : '0');
  params.set('rel', (options?.rel ?? 0).toString());
  params.set('modestbranding', '1');
  params.set('playsinline', '1');
  params.set('iv_load_policy', '3');

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/**
 * LocalStorage management for saved teacher clips
 */
const CLIPS_STORAGE_KEY = 'vietdiscovery_saved_youtube_clips';

export function getSavedTeacherClips(): SavedVideoClip[] {
  const list = localStore.get<SavedVideoClip[]>(CLIPS_STORAGE_KEY, []);
  return Array.isArray(list) ? list : [];
}

export function saveTeacherClip(clip: Omit<SavedVideoClip, 'id' | 'createdAt'>): SavedVideoClip {
  const existing = getSavedTeacherClips();

  // Strict enforcement: Clamp endSeconds to startSeconds + MAX_CLIP_DURATION_SECONDS (Requirement 3)
  const safeStart = Math.max(0, clip.startSeconds);
  const clampedEnd = Math.min(clip.endSeconds, safeStart + MAX_CLIP_DURATION_SECONDS);
  const clampedDuration = Math.max(0, clampedEnd - safeStart);

  const newClip: SavedVideoClip = {
    ...clip,
    startSeconds: safeStart,
    endSeconds: clampedEnd,
    startTimeStr: formatSecondsToTime(safeStart),
    endTimeStr: formatSecondsToTime(clampedEnd),
    durationSeconds: clampedDuration,
    id: 'clip_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString()
  };

  const updated = [newClip, ...existing.filter(c => c.id !== newClip.id)];
  localStore.set(CLIPS_STORAGE_KEY, updated);
  return newClip;
}

export function deleteTeacherClip(clipId: string): void {
  const existing = getSavedTeacherClips();
  const updated = existing.filter(c => c.id !== clipId);
  localStore.set(CLIPS_STORAGE_KEY, updated);
}
