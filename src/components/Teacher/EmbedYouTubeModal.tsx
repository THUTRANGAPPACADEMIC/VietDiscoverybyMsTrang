import React, { useState, useEffect } from 'react';
import { 
  X, 
  Youtube, 
  Clock, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink, 
  Save, 
  Sparkles, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  Info,
  HelpCircle
} from 'lucide-react';
import { EducationalVideo, VideoStatus } from '../../types';
import { 
  extractYouTubeId, 
  parseTimeToSeconds, 
  formatSecondsToTime, 
  formatDurationHuman, 
  validateClipTiming, 
  calculateAutoEndTime, 
  MAX_CLIP_DURATION_SECONDS 
} from '../../lib/youtubeClipHelper';
import { persistTeacherVideoYouTube } from '../../lib/videoAcademyService';
import { soundEffects } from '../../lib/soundEffects';

interface EmbedYouTubeModalProps {
  video: EducationalVideo;
  isOpen: boolean;
  onClose: () => void;
  onSaved: (updatedVideo: EducationalVideo) => void;
}

export const EmbedYouTubeModal: React.FC<EmbedYouTubeModalProps> = ({
  video,
  isOpen,
  onClose,
  onSaved
}) => {
  // Form State
  const [url, setUrl] = useState<string>(video.videoUrl || '');
  const [startTimeStr, setStartTimeStr] = useState<string>(
    formatSecondsToTime(video.startSeconds ?? 0)
  );
  const [endTimeStr, setEndTimeStr] = useState<string>(
    formatSecondsToTime(video.endSeconds ?? (video.startSeconds !== undefined ? video.startSeconds + 60 : 60))
  );
  const [status, setStatus] = useState<VideoStatus>(video.status || 'approved');
  const [notes, setNotes] = useState<string>(video.notes || '');

  // UI state
  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(true);
  const [previewKey, setPreviewKey] = useState<number>(1);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Sync state when video prop changes
  useEffect(() => {
    setUrl(video.videoUrl || '');
    const startSec = video.startSeconds ?? 0;
    const endSec = video.endSeconds ?? (startSec + 60);
    setStartTimeStr(formatSecondsToTime(startSec));
    setEndTimeStr(formatSecondsToTime(endSec));
    setStatus(video.status || 'approved');
    setNotes(video.notes || '');
    setErrorMessage(null);
    setSaveSuccess(false);
    setIsPreviewActive(true);
  }, [video]);

  if (!isOpen) return null;

  // Real-time calculation and validation
  const videoId = extractYouTubeId(url);
  const startSec = parseTimeToSeconds(startTimeStr) ?? 0;
  const endSec = parseTimeToSeconds(endTimeStr) ?? 0;
  const duration = endSec - startSec;
  const timingValidation = validateClipTiming(startSec, endSec);
  const isValidYouTube = Boolean(videoId);
  const canSave = isValidYouTube && timingValidation.isValid && !isSaving;

  // Handlers for quick presets
  const handleSetZeroStart = () => {
    soundEffects.playClick();
    setStartTimeStr('00:00');
  };

  const handleAdjustStart = (deltaSeconds: number) => {
    soundEffects.playClick();
    const current = parseTimeToSeconds(startTimeStr) ?? 0;
    const next = Math.max(0, current + deltaSeconds);
    setStartTimeStr(formatSecondsToTime(next));
  };

  const handleAdjustEnd = (deltaSeconds: number) => {
    soundEffects.playClick();
    const current = parseTimeToSeconds(endTimeStr) ?? 0;
    const next = Math.max(0, current + deltaSeconds);
    setEndTimeStr(formatSecondsToTime(next));
  };

  const handleAutoSet60s = () => {
    soundEffects.playClick();
    const calculated = calculateAutoEndTime(startSec);
    setEndTimeStr(calculated.endTimeStr);
  };

  const handleRefreshPreview = () => {
    soundEffects.playClick();
    setIsPreviewActive(true);
    setPreviewKey(prev => prev + 1);
  };

  const handleSave = async () => {
    if (!canSave) return;
    setIsSaving(true);
    setErrorMessage(null);
    soundEffects.playClick();

    try {
      const result = await persistTeacherVideoYouTube(video.id, {
        videoUrl: url,
        startSeconds: startSec,
        endSeconds: endSec,
        status,
        notes: notes.trim() || undefined
      });

      if (!result.success || !result.video) {
        setErrorMessage(result.error || 'Có lỗi xảy ra khi lưu video.');
        setIsSaving(false);
        return;
      }

      setSaveSuccess(true);
      soundEffects.playVictory();
      onSaved(result.video);

      // Close modal after brief success feedback
      setTimeout(() => {
        setIsSaving(false);
        onClose();
      }, 700);
    } catch (err: any) {
      setErrorMessage(err.message || 'Lỗi lưu video.');
      setIsSaving(false);
    }
  };

  // Check if this video has a known province mismatch note for teacher reference
  const isKnownMismatch = video.id === 'vid-g5-01' || video.id === 'vid-g1-03' || video.id === 'vid-g2-02' || video.id === 'vid-g2-03' || video.id === 'vid-g3-01' || video.id === 'vid-g3-02' || video.id === 'vid-g3-03' || video.id === 'vid-g4-01' || video.id === 'vid-g4-03';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col">
        
        {/* 1. Modal Header */}
        <div className="p-5 bg-gradient-to-r from-red-600 via-rose-600 to-indigo-700 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md">
              <Youtube className="w-5 h-5 text-white" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-white/20 text-[11px] font-mono font-black">
                  #{video.id}
                </span>
                <h3 className="text-base sm:text-lg font-black font-heading">
                  Nhúng / Thay Link YouTube & Cắt Đoạn Video
                </h3>
              </div>
              <p className="text-[11px] text-white/85">
                Chỉnh sửa đúng bài học hiện có • Bảo toàn 100% câu hỏi và bài tập sư phạm • Bền vững trên mọi thiết bị
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">

          {/* 2. Target Video Information Summary Card (Requirement 4) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-xl bg-indigo-100 text-indigo-800 text-xs font-black">
                Lớp {video.grade}
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-sky-100 text-sky-800 text-xs font-bold flex items-center gap-1">
                <Layers className="w-3 h-3 text-sky-600" />
                {video.topic}
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" />
                {video.provinceName || 'Toàn quốc'} ({video.provinceCode || 'ALL'})
              </span>
              <span className={`px-2.5 py-1 rounded-xl text-xs font-black border ${
                video.status === 'published' 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                  : video.status === 'approved'
                  ? 'bg-sky-50 text-sky-800 border-sky-300'
                  : 'bg-amber-50 text-amber-800 border-amber-300'
              }`}>
                {video.status === 'published' ? '🚀 Đã Xuất Bản' : video.status === 'approved' ? '✅ Đã Duyệt' : '⏳ Bản Nháp'}
              </span>
              <span className="text-[11px] text-slate-500 font-semibold ml-auto">
                Bảo toàn: {video.questions?.length || 0} câu đố &amp; 3 nhiệm vụ học tập
              </span>
            </div>

            <div className="border-t border-slate-200/80 pt-2">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                {video.titleEn}
              </h4>
              <p className="text-xs text-slate-600 italic">
                {video.titleVi}
              </p>
            </div>

            {/* Informational Province Note (Requirement 11) */}
            {isKnownMismatch && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Lưu ý rà soát địa danh: </span>
                  {video.id === 'vid-g5-01' ? (
                    <span>
                      Bài học có nội dung về <strong>TP. Hồ Chí Minh</strong> nhưng hiện đang gắn mã tỉnh <strong>Ninh Bình ({video.provinceCode})</strong> trong hồ sơ. Hệ thống giữ nguyên thông tin này theo đúng yêu cầu bảo toàn dữ liệu, chờ Cô Trang rà soát trong Báo Cáo Đối Chiếu.
                    </span>
                  ) : (
                    <span>
                      Địa danh trong tiêu đề bài học và tỉnh/thành được gán đang được thống kê trong Báo Cáo Rà Soát Địa Danh. Hệ thống không tự ý sửa đổi hàng loạt.
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 3. YouTube URL Input Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Youtube className="w-4 h-4 text-red-600" />
                Đường Dẫn YouTube (Watch URL, Shorts hoặc Share Link):
              </span>
              {videoId ? (
                <span className="text-emerald-700 font-mono text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> ID: {videoId}
                </span>
              ) : url.trim() ? (
                <span className="text-rose-600 text-[11px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Link chưa đúng định dạng YouTube
                </span>
              ) : null}
            </label>
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setIsPreviewActive(true);
                }}
                placeholder="https://www.youtube.com/watch?v=kYJzX2eQ9h4 hoặc https://youtu.be/..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 font-mono"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Nhập link bài giảng của Cô Trang hoặc link video giáo dục phù hợp chủ đề. Link sẽ được tự động chuyển thành định dạng nhúng bảo mật <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">youtube-nocookie.com</code> không quảng cáo.
            </p>
          </div>

          {/* 4. Clip Timing Settings (Start Time & End Time & Max 60s Rule) */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wider">
                  Cắt Đoạn Video (Tối Đa 60 Giây Cho Học Sinh Tiểu Học)
                </span>
              </div>
              <span className="text-[11px] text-indigo-700 font-bold bg-indigo-100/80 px-2 py-0.5 rounded-lg">
                Định dạng: mm:ss (ví dụ: 00:15)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Start Time */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Thời gian bắt đầu (Start):</span>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{startSec}s</span>
                </div>
                <input
                  type="text"
                  value={startTimeStr}
                  onChange={(e) => setStartTimeStr(e.target.value)}
                  placeholder="00:00"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleSetZeroStart}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[10.5px] font-bold text-slate-700 transition-colors"
                  >
                    00:00
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(-5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[10.5px] font-bold text-slate-700 transition-colors"
                  >
                    -5s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustStart(5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[10.5px] font-bold text-slate-700 transition-colors"
                  >
                    +5s
                  </button>
                </div>
              </div>

              {/* End Time */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Thời gian kết thúc (End):</span>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{endSec}s</span>
                </div>
                <input
                  type="text"
                  value={endTimeStr}
                  onChange={(e) => setEndTimeStr(e.target.value)}
                  placeholder="01:00"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleAutoSet60s}
                    className="px-2 py-1 rounded bg-red-50 hover:bg-red-100 text-red-700 text-[10.5px] font-bold border border-red-200 transition-colors"
                    title="Tự động tính End Time = Start Time + 60s (chuẩn tối đa)"
                  >
                    +60s (Chuẩn)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(-5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[10.5px] font-bold text-slate-700 transition-colors"
                  >
                    -5s
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustEnd(5)}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[10.5px] font-bold text-slate-700 transition-colors"
                  >
                    +5s
                  </button>
                </div>
              </div>
            </div>

            {/* Duration Status Feedback */}
            <div className="pt-1">
              {!timingValidation.isValid ? (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{timingValidation.errorMessage}</span>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Đoạn clip: <strong>{startTimeStr}</strong> ({startSec}s) đến <strong>{endTimeStr}</strong> ({endSec}s) • Tổng thời lượng: <strong>{duration} giây</strong> ({formatDurationHuman(duration)}).
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-200/70 text-emerald-900 text-[10.5px] font-black uppercase">
                    Đạt chuẩn ≤ 60s
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 5. Preview Clip Section (Requirement 6 & Requirement 10) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-red-600" />
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  Xem Trước Đoạn Clip (Preview Player)
                </span>
              </div>

              <div className="flex items-center gap-2">
                {videoId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                    title="Mở trên YouTube để kiểm tra bản quyền và quyền nhúng"
                  >
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                    Mở YouTube kiểm tra
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleRefreshPreview}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3 text-indigo-600" />
                  Phát Lại Đoạn Clip
                </button>
              </div>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 shadow-md">
              {videoId && isPreviewActive && timingValidation.isValid ? (
                <iframe
                  key={previewKey}
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?start=${startSec}&end=${endSec}&autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                  title="Xem trước đoạn video clip"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : videoId ? (
                <div className="w-full h-full relative">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="YouTube Video Thumbnail"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4 text-center">
                    <button
                      type="button"
                      onClick={handleRefreshPreview}
                      className="p-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg transition-transform hover:scale-105 mb-2 cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-white" />
                    </button>
                    <p className="text-xs font-bold">Bấm để xem trước đoạn clip {startTimeStr} - {endTimeStr}</p>
                    <p className="text-[11px] text-white/80 mt-1">Đoạn clip sẽ tự động bắt đầu từ {startSec}s và kết thúc tại {endSec}s</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                  <Youtube className="w-12 h-12 text-slate-600 mb-2" />
                  <p className="text-xs font-bold text-slate-300">Chưa có link YouTube</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Hãy dán link video YouTube vào ô phía trên để tải trình phát xem trước.
                  </p>
                </div>
              )}
            </div>

            {/* Embed Restriction Notice (Requirement 10) */}
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-[11px] leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Kiểm tra quyền nhúng (Embed Policy): </span>
                Video được phát thông qua miền bảo mật <span className="font-mono text-indigo-700">youtube-nocookie.com</span>. 
                Nếu màn hình báo lỗi <em>"Video unavailable - Watch on YouTube"</em>, đó là do chủ kênh đã tắt quyền nhúng ngoài website. 
                Trong trường hợp đó, bạn hãy chọn video khác có cho phép nhúng, hoặc kiểm tra bằng nút <strong>"Mở YouTube kiểm tra"</strong>.
              </div>
            </div>
          </div>

          {/* 6. Status and Teacher Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Trạng thái phê duyệt:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as VideoStatus)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-white"
              >
                <option value="approved">✅ Đã Duyệt (Hiển thị cho học sinh)</option>
                <option value="published">🚀 Đã Xuất Bản (Chính thức)</option>
                <option value="draft">⏳ Bản Nháp (Chỉ giáo viên thấy)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Ghi chú của giáo viên (tùy chọn):</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Đoạn trích giới thiệu cánh đồng lúa và chú trâu lúc sáng sớm"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Persistence Notice (Requirement 8) */}
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-[11px] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
            <div>
              <span className="font-bold">Lưu trữ bền vững trên mọi thiết bị: </span>
              Khi bấm lưu, đường dẫn và mốc thời gian sẽ được ghi nhận trực tiếp vào hệ thống mã nguồn và máy chủ, đảm bảo học sinh mở trên máy tính bảng hay điện thoại đều xem đúng đoạn clip bạn đã chọn.
            </div>
          </div>

        </div>

        {/* 7. Modal Footer / Action Buttons (Requirement 7) */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            disabled={isSaving}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Hủy Bỏ
          </button>

          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Đã lưu thành công!
              </span>
            )}

            <button
              type="button"
              onClick={handleSave}
              disabled={!canSave}
              className={`px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                canSave
                  ? 'bg-red-600 hover:bg-red-700 text-white hover:shadow-lg hover:scale-102'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Đang Lưu...' : 'Xác Nhận & Lưu Vào Hệ Thống'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
