import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Play, 
  RotateCcw, 
  Clock, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Save, 
  Trash2, 
  ExternalLink, 
  Tv, 
  Layers, 
  Bookmark, 
  Copy,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Film
} from 'lucide-react';
import { 
  extractYouTubeId, 
  extractUrlTimestamp,
  parseTimeToSeconds, 
  formatSecondsToTime, 
  formatDurationHuman, 
  validateClipTiming,
  calculateAutoEndTime,
  MAX_CLIP_DURATION_SECONDS,
  saveTeacherClip,
  getSavedTeacherClips,
  deleteTeacherClip,
  SavedVideoClip
} from '../../lib/youtubeClipHelper';
import { SmartYouTubeClipPlayer } from '../Common/SmartYouTubeClipPlayer';
import { soundEffects } from '../../lib/soundEffects';

interface SmartYouTubeClipSelectorProps {
  initialUrl?: string;
  initialStartSeconds?: number;
  initialEndSeconds?: number;
  destinationId?: string;
  onApplyClip?: (clip: {
    videoUrl: string;
    videoId: string;
    startSeconds: number;
    endSeconds: number;
    title: string;
  }) => void;
  className?: string;
}

export const SmartYouTubeClipSelector: React.FC<SmartYouTubeClipSelectorProps> = ({
  initialUrl = '',
  initialStartSeconds = 0,
  initialEndSeconds = 60,
  destinationId,
  onApplyClip,
  className = ''
}) => {
  // Input fields
  const [urlInput, setUrlInput] = useState<string>(initialUrl);
  const [titleInput, setTitleInput] = useState<string>('');
  const [startTimeInput, setStartTimeInput] = useState<string>(formatSecondsToTime(initialStartSeconds));
  const [endTimeInput, setEndTimeInput] = useState<string>(formatSecondsToTime(initialEndSeconds));
  const [selectedDestination, setSelectedDestination] = useState<string>(destinationId || 'halong');
  const [notesInput, setNotesInput] = useState<string>('');

  // Parsed and validated states
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>('');
  const [savedClips, setSavedClips] = useState<SavedVideoClip[]>([]);
  const [previewKey, setPreviewKey] = useState<number>(1);

  // Load saved clips on mount
  useEffect(() => {
    setSavedClips(getSavedTeacherClips());
  }, []);

  // Compute parsed timing
  const parsedVideoId = extractYouTubeId(urlInput);
  const parsedStartSec = parseTimeToSeconds(startTimeInput);
  const parsedEndSec = parseTimeToSeconds(endTimeInput);

  // Validate timing
  const timingValidation = validateClipTiming(parsedStartSec, parsedEndSec);

  // Requirement 2: Giáo viên chỉ cần chọn Start Time; End Time tự động bằng Start Time + 60 giây
  const handleStartTimeChange = (val: string) => {
    setStartTimeInput(val);
    const sec = parseTimeToSeconds(val);
    if (sec !== null) {
      const auto = calculateAutoEndTime(sec);
      setEndTimeInput(auto.endTimeStr);
    }
  };

  const handleEndTimeChange = (val: string) => {
    setEndTimeInput(val);
    const endSec = parseTimeToSeconds(val);
    const startSec = parsedStartSec ?? 0;
    // Requirement 3: Hard limit max 60 seconds
    if (endSec !== null && endSec > startSec + MAX_CLIP_DURATION_SECONDS) {
      setEndTimeInput(formatSecondsToTime(startSec + MAX_CLIP_DURATION_SECONDS));
    }
  };

  // Quick adjust helpers
  const handleAdjustStart = (deltaSec: number) => {
    soundEffects.playClick();
    const current = parsedStartSec ?? 0;
    const next = Math.max(0, current + deltaSec);
    setStartTimeInput(formatSecondsToTime(next));
    // Automatically recalculate End Time = Start + 60s
    const auto = calculateAutoEndTime(next);
    setEndTimeInput(auto.endTimeStr);
  };

  const handleAdjustEnd = (deltaSec: number) => {
    soundEffects.playClick();
    const startSec = parsedStartSec ?? 0;
    const current = parsedEndSec ?? (startSec + MAX_CLIP_DURATION_SECONDS);
    // Can adjust downwards, but cannot exceed startSec + 60s
    const next = Math.max(startSec + 1, Math.min(startSec + MAX_CLIP_DURATION_SECONDS, current + deltaSec));
    setEndTimeInput(formatSecondsToTime(next));
  };

  // Reset to sample video
  const handleLoadSample = (sampleUrl: string, start: number, end: number, title: string) => {
    soundEffects.playClick();
    const safeStart = Math.max(0, start);
    // Strict clamp to 60s max
    const safeEnd = Math.min(end, safeStart + MAX_CLIP_DURATION_SECONDS);
    setUrlInput(sampleUrl);
    setTitleInput(title);
    setStartTimeInput(formatSecondsToTime(safeStart));
    setEndTimeInput(formatSecondsToTime(safeEnd));
    setPreviewKey(prev => prev + 1);
  };

  // Save clip to Teacher Library
  const handleSaveClip = () => {
    if (!parsedVideoId) {
      alert('Vui lòng dán một liên kết YouTube hợp lệ.');
      return;
    }
    if (!timingValidation.isValid || parsedStartSec === null || parsedEndSec === null) {
      alert(timingValidation.errorMessage || 'Thời gian bắt đầu hoặc kết thúc không hợp lệ.');
      return;
    }

    const safeStart = Math.max(0, parsedStartSec);
    // Requirement 3: Không cho phép lưu đoạn dài hơn 60 giây, kể cả khi dữ liệu được chỉnh sửa thủ công
    const clampedEnd = Math.min(parsedEndSec, safeStart + MAX_CLIP_DURATION_SECONDS);
    const clampedDuration = Math.max(1, clampedEnd - safeStart);

    soundEffects.playVictory();
    const saved = saveTeacherClip({
      title: titleInput.trim() || 'Đoạn trích video YouTube (Tối đa 60s)',
      videoUrl: urlInput.trim(),
      videoId: parsedVideoId,
      startSeconds: safeStart,
      endSeconds: clampedEnd,
      startTimeStr: formatSecondsToTime(safeStart),
      endTimeStr: formatSecondsToTime(clampedEnd),
      durationSeconds: clampedDuration,
      destinationId: selectedDestination,
      notes: notesInput.trim(),
      createdByName: 'Cô Thu Trang'
    });

    setSavedClips(getSavedTeacherClips());
    setSaveSuccessMsg('Đã lưu đoạn clip thành công vào Thư viện Giáo viên!');
    setTimeout(() => setSaveSuccessMsg(''), 4000);

    if (onApplyClip) {
      onApplyClip({
        videoUrl: urlInput.trim(),
        videoId: parsedVideoId,
        startSeconds: parsedStartSec,
        endSeconds: parsedEndSec,
        title: titleInput.trim()
      });
    }
  };

  // Delete clip from library
  const handleDeleteClip = (id: string) => {
    if (!window.confirm('Cô có chắc chắn muốn xóa đoạn clip này khỏi thư viện?')) return;
    soundEffects.playClick();
    deleteTeacherClip(id);
    setSavedClips(getSavedTeacherClips());
  };

  // Load a saved clip into the editor
  const handleSelectSavedClip = (clip: SavedVideoClip) => {
    soundEffects.playClick();
    setUrlInput(clip.videoUrl);
    setTitleInput(clip.title);
    setStartTimeInput(clip.startTimeStr);
    setEndTimeInput(clip.endTimeStr);
    if (clip.destinationId) setSelectedDestination(clip.destinationId);
    if (clip.notes) setNotesInput(clip.notes);
    setPreviewKey(prev => prev + 1);
  };

  // Copy shareable parameter link
  const handleCopyEmbedParams = () => {
    soundEffects.playClick();
    if (!parsedVideoId || !timingValidation.isValid) return;
    const textToCopy = `https://www.youtube.com/watch?v=${parsedVideoId}&start=${parsedStartSec}&end=${parsedEndSec}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-700 text-white p-5 sm:p-7 rounded-3xl shadow-lg border border-rose-300/40 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-2xl shadow-inner shrink-0">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-[11px] uppercase font-black px-2.5 py-0.5 rounded-full bg-white/25 text-white border border-white/30 tracking-wider">
                  YouTube Smart Clip Selector
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-400/30 text-emerald-100 border border-emerald-300/40">
                  ⚡ Không Tải File MP4 • Tự Động Dừng Chuẩn Xác
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading mt-1">
                Công Cụ Chọn Đoạn Video YouTube Thông Minh
              </h3>
              <p className="text-xs text-rose-100 mt-0.5 max-w-2xl">
                Giáo viên chỉ cần dán URL và nhập thời gian bắt đầu/kết thúc (mm:ss). Học sinh chỉ xem đúng đoạn được chọn mà không cần cắt video gốc.
              </p>
            </div>
          </div>

          {/* Quick Preset Buttons for 3 Test Cases (00:00, 03:20, Near End) */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={() => handleLoadSample('https://www.youtube.com/watch?v=R2rX6w7i4J0', 0, 60, 'Mẫu 1: Bắt đầu tại 00:00 (Hạ Long - 60s)')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
              title="Test Case 1: Bắt đầu 00:00 -> 01:00 (Tối đa 60s)"
            >
              Test 1: 00:00 ➔ 01:00
            </button>
            <button
              onClick={() => handleLoadSample('https://www.youtube.com/watch?v=kYJzX2eQ9h4', 200, 260, 'Mẫu 2: Bắt đầu tại 03:20 (Hà Nội - 60s)')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
              title="Test Case 2: Bắt đầu 03:20 -> 04:20 (Tối đa 60s)"
            >
              Test 2: 03:20 ➔ 04:20
            </button>
            <button
              onClick={() => handleLoadSample('https://www.youtube.com/watch?v=q6gJq3lVvB8', 75, 120, 'Mẫu 3: Gần cuối video (01:15 ➔ 02:00, 45s)')}
              className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
              title="Test Case 3: Gần cuối video (01:15 -> 02:00, còn 45s phát đến hết)"
            >
              Test 3: Gần cuối (01:15 ➔ 02:00)
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Two-Column Layout: Controls & Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Input Configuration Form (7 cols) */}
        <div className="lg:col-span-7 space-y-5 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading flex items-center gap-2">
              <span className="p-1 rounded-lg bg-rose-50 text-rose-600">
                <Film className="w-4 h-4" />
              </span>
              <span>1. Thiết lập Đoạn Trích Video (Clip Configuration)</span>
            </h4>
            <span className="text-[11px] text-slate-400 font-medium">Định dạng: mm:ss hoặc hh:mm:ss</span>
          </div>

          {/* Input 1: YouTube URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
              Liên kết Video YouTube (YouTube URL) *
            </label>
            <div className="relative">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  // Check if URL contains timestamp
                  const t = extractUrlTimestamp(e.target.value);
                  if (t !== null && !startTimeInput) {
                    setStartTimeInput(formatSecondsToTime(t));
                  }
                }}
                placeholder="https://www.youtube.com/watch?v=... hoặc https://youtu.be/..."
                className={`w-full px-4 py-2.5 rounded-xl border text-xs font-mono font-bold text-slate-800 focus:outline-hidden focus:ring-2 ${
                  parsedVideoId 
                    ? 'border-emerald-300 bg-emerald-50/30 focus:ring-emerald-500' 
                    : 'border-slate-200 bg-white focus:ring-rose-500'
                }`}
              />
              {parsedVideoId && (
                <span className="absolute right-3 top-2.5 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black font-mono">
                  ID: {parsedVideoId}
                </span>
              )}
            </div>
            {!parsedVideoId && urlInput.trim() && (
              <p className="text-[11px] font-bold text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Không nhận diện được ID YouTube. Vui lòng kiểm tra lại đường dẫn.</span>
              </p>
            )}
          </div>

          {/* Input 2: Clip Title & Destination Assignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                Tên đoạn trích (Clip Title) *
              </label>
              <input
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="VD: Giới thiệu Vịnh Hạ Long (01:15 - 02:30)"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                Gán cho Địa danh / Bài học
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white"
              >
                <option value="halong">Vịnh Hạ Long (Ha Long Bay)</option>
                <option value="hanoi">Thủ đô Hà Nội (Hanoi Capital)</option>
                <option value="hue">Cố đô Huế (Hue Imperial City)</option>
                <option value="danang_hoian">Đà Nẵng & Hội An</option>
                <option value="dalat">Thành phố Đà Lạt (Da Lat)</option>
                <option value="hochiminh">TP. Hồ Chí Minh</option>
                <option value="mekong">Đồng bằng Sông Cửu Long</option>
                <option value="sapa">Sa Pa & Fansipan</option>
                <option value="trangan">Danh thắng Tràng An</option>
                <option value="phuquoc">Đảo Ngọc Phú Quốc</option>
                <option value="custom">Bài học Tùy chỉnh khác</option>
              </select>
            </div>
          </div>

          {/* Input 3: Start Time & End Time with Steppers (CRITICAL REQUIREMENT 2 & 9) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Thời gian bắt đầu và kết thúc (Start & End Time)</span>
              </span>
              {timingValidation.isValid && (
                <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Thời lượng clip: {formatDurationHuman(timingValidation.durationSeconds)}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* START TIME BOX */}
              <div className="p-3.5 rounded-xl bg-white border-2 border-emerald-300 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-black uppercase text-emerald-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Start Time (Bắt đầu):</span>
                  </label>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">
                    {parsedStartSec !== null ? `${parsedStartSec}s` : 'Chưa hợp lệ'}
                  </span>
                </div>

                <input
                  type="text"
                  value={startTimeInput}
                  onChange={(e) => handleStartTimeChange(e.target.value)}
                  placeholder="00:00"
                  className="w-full px-3 py-2 rounded-lg border border-emerald-300 text-sm font-mono font-black text-emerald-950 text-center bg-emerald-50/20 focus:ring-2 focus:ring-emerald-500"
                />

                {/* Quick Adjust Buttons */}
                <div className="flex items-center justify-center gap-1 text-[10.5px] font-bold">
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(-5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    -5s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(-1)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    -1s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStartTimeChange('00:00')}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-[10px]"
                    title="Đặt lại về 00:00 (End Time tự động là 01:00)"
                  >
                    00:00
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(+1)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    +1s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(+5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    +5s
                  </button>
                </div>
              </div>

              {/* END TIME BOX */}
              <div className="p-3.5 rounded-xl bg-white border-2 border-rose-300 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-black uppercase text-rose-900 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>End Time (Kết thúc):</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-100 text-rose-800">
                      Tối đa +60s
                    </span>
                    <span className="text-[10px] font-mono text-rose-700 font-bold">
                      {parsedEndSec !== null ? `${parsedEndSec}s` : 'Chưa hợp lệ'}
                    </span>
                  </div>
                </div>

                <input
                  type="text"
                  value={endTimeInput}
                  onChange={(e) => handleEndTimeChange(e.target.value)}
                  placeholder="01:00"
                  className="w-full px-3 py-2 rounded-lg border border-rose-300 text-sm font-mono font-black text-rose-950 text-center bg-rose-50/20 focus:ring-2 focus:ring-rose-500"
                />

                {/* Quick Adjust Buttons */}
                <div className="flex items-center justify-center gap-1 text-[10.5px] font-bold">
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(-5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    -5s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(-1)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    -1s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(+1)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    +1s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(+5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    +5s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(+30)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                  >
                    +30s
                  </button>
                </div>
              </div>

            </div>

            {/* Validation Feedback (Requirement 9) */}
            {!timingValidation.isValid && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{timingValidation.errorMessage}</span>
              </div>
            )}
          </div>

          {/* Action Buttons: Save Clip & Copy Embed Params */}
          <div className="flex items-center justify-between gap-3 pt-2 flex-wrap">
            <button
              type="button"
              onClick={handleCopyEmbedParams}
              disabled={!parsedVideoId || !timingValidation.isValid}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Sao chép liên kết có tham số start và end"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Đã sao chép liên kết!' : 'Sao chép Link Clip'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPreviewKey(prev => prev + 1)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Tải lại trình phát xem trước"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tải lại Xem trước</span>
              </button>

              <button
                type="button"
                onClick={handleSaveClip}
                disabled={!parsedVideoId || !timingValidation.isValid}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 text-white font-extrabold text-xs shadow-md shadow-emerald-200 flex items-center gap-2 cursor-pointer transition-all hover:scale-102 active:scale-98"
              >
                <Save className="w-4 h-4" />
                <span>Lưu Đoạn Clip (Save Clip)</span>
              </button>
            </div>
          </div>

          {/* Success Message Banner */}
          {saveSuccessMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Live Interactive Player Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="font-extrabold text-slate-900 text-sm font-heading flex items-center gap-2">
                <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                  <Play className="w-3.5 h-3.5" />
                </span>
                <span>2. Xem Trước Trực Quan (Interactive Preview)</span>
              </h4>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Live Test
              </span>
            </div>

            {/* Embedded Clip Player Preview */}
            {parsedVideoId && timingValidation.isValid && parsedStartSec !== null && parsedEndSec !== null ? (
              <SmartYouTubeClipPlayer
                key={previewKey}
                videoId={parsedVideoId}
                title={titleInput}
                subtitle={`Xem thử trải nghiệm học sinh: Phát từ ${formatSecondsToTime(parsedStartSec)} và tự dừng tại ${formatSecondsToTime(parsedEndSec)}`}
                startSeconds={parsedStartSec}
                endSeconds={parsedEndSec}
                showDetails={true}
              />
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-400 space-y-2">
                <Scissors className="w-10 h-10 text-slate-300" />
                <p className="text-xs font-bold text-slate-500">
                  Vui lòng dán URL hợp lệ và cấu hình Start &lt; End để kích hoạt xem trước.
                </p>
              </div>
            )}

            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
              💡 <strong>Kiểm thử của Giáo viên:</strong> Bấm nút Play ở trên để kiểm tra video có bắt đầu chuẩn xác từ <strong>{startTimeInput}</strong> và tự động dừng khi chạm mốc <strong>{endTimeInput}</strong> không. Thử nút <em>"Xem Lại Đoạn Này"</em> để trải nghiệm tính năng phát lại!
            </div>
          </div>
        </div>

      </div>

      {/* 3. Saved Teacher Clips Library Strip */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600 font-bold">
              <Bookmark className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading">
              Thư Viện Đoạn Clip Đã Lưu Của Cô Trang ({savedClips.length} Clip)
            </h4>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Lưu trữ cục bộ an toàn • Có thể tải lại vào bộ soạn bất cứ lúc nào
          </span>
        </div>

        {savedClips.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-medium">
            Chưa có đoạn clip nào được lưu. Hãy chọn một đoạn video ở trên và nhấn <strong>"Lưu Đoạn Clip"</strong>!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {savedClips.map((clip) => (
              <div 
                key={clip.id}
                className="p-3.5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all bg-white flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[10px] font-black uppercase">
                      Clip {clip.durationSeconds}s
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {clip.startTimeStr} ➔ {clip.endTimeStr}
                    </span>
                  </div>

                  <h5 className="font-extrabold text-xs text-slate-900 line-clamp-2">
                    {clip.title}
                  </h5>

                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    ID: {clip.videoId}
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleSelectSavedClip(clip)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Mở clip này</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDeleteClip(clip.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Xóa clip này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
