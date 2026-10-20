import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Play, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Scissors, 
  ExternalLink,
  RotateCcw,
  Plus
} from 'lucide-react';
import { 
  getAllTeacherVideos, 
  saveTeacherVideo, 
  removeTeacherVideo, 
  setTeacherVideoStatus, 
  getVideoAuditSummary, 
  subscribeToVideoUpdates,
  syncTeacherVideosWithSupabase,
  TeacherControlledVideo, 
  TeacherVideoStatus 
} from '../../lib/teacherVideoManager';
import { extractYouTubeId, parseTimeToSeconds, formatSecondsToTime, MAX_CLIP_DURATION_SECONDS } from '../../lib/youtubeClipHelper';
import { SmartYouTubeClipPlayer } from '../Common/SmartYouTubeClipPlayer';
import { soundEffects } from '../../lib/soundEffects';

export const TeacherCentralizedVideoManager: React.FC = () => {
  const [videoList, setVideoList] = useState<TeacherControlledVideo[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<1 | 2 | 3 | 4 | 5 | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<TeacherVideoStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Editing state
  const [editingItem, setEditingItem] = useState<TeacherControlledVideo | null>(null);
  const [formUrl, setFormUrl] = useState<string>('');
  const [formVideoTitle, setFormVideoTitle] = useState<string>('');
  const [formStartTime, setFormStartTime] = useState<string>('00:00');
  const [formEndTime, setFormEndTime] = useState<string>('01:00');
  const [formStatus, setFormStatus] = useState<TeacherVideoStatus>('approved');
  const [formNotes, setFormNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [previewKey, setPreviewKey] = useState<number>(1);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<string>('');

  // Preview modal standalone
  const [previewingVideo, setPreviewingVideo] = useState<TeacherControlledVideo | null>(null);

  const loadData = () => {
    setVideoList(getAllTeacherVideos());
  };

  useEffect(() => {
    loadData();
    // Non-blocking Cloud Sync with Supabase (Rule 8 & 9)
    syncTeacherVideosWithSupabase().then(() => {
      loadData();
    }).catch(() => {});

    return subscribeToVideoUpdates(() => {
      loadData();
    });
  }, []);

  const stats = getVideoAuditSummary();

  // Filtered list
  const filteredVideos = videoList.filter(item => {
    if (selectedGrade !== 'all' && item.grade !== selectedGrade) return false;
    if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.lessonTitleEn.toLowerCase().includes(q) || item.lessonTitleVi.toLowerCase().includes(q);
      const matchVideoTitle = item.videoTitle.toLowerCase().includes(q);
      const matchUrl = item.videoUrl.toLowerCase().includes(q);
      const matchLessonId = item.lessonId.toLowerCase().includes(q);
      return matchTitle || matchVideoTitle || matchUrl || matchLessonId;
    }
    return true;
  });

  // Open editor for a row
  const handleOpenEdit = (item: TeacherControlledVideo) => {
    soundEffects.playClick();
    setEditingItem(item);
    setFormUrl(item.videoUrl || '');
    setFormVideoTitle(item.videoTitle || `${item.lessonTitleEn} (Video Bài Giảng)`);
    setFormStartTime(formatSecondsToTime(item.startSeconds || 0));
    setFormEndTime(formatSecondsToTime(item.endSeconds || 60));
    setFormStatus(item.status === 'missing' ? 'approved' : item.status);
    setFormNotes(item.notes || '');
    setFormError('');
    setSaveSuccessNotice('');
    setPreviewKey(prev => prev + 1);
  };

  // Close editor
  const handleCloseEdit = () => {
    soundEffects.playClick();
    setEditingItem(null);
    setFormError('');
    setSaveSuccessNotice('');
  };

  // Start Time change: Auto-calculate End Time = Start + 60s (Strict Rule)
  const handleStartTimeChange = (val: string) => {
    setFormStartTime(val);
    const sec = parseTimeToSeconds(val);
    if (sec !== null) {
      const autoEndSec = sec + MAX_CLIP_DURATION_SECONDS;
      setFormEndTime(formatSecondsToTime(autoEndSec));
    }
  };

  // End Time change: Clamp to max Start + 60s
  const handleEndTimeChange = (val: string) => {
    setFormEndTime(val);
    const endSec = parseTimeToSeconds(val);
    const startSec = parseTimeToSeconds(formStartTime) ?? 0;
    if (endSec !== null && endSec > startSec + MAX_CLIP_DURATION_SECONDS) {
      setFormEndTime(formatSecondsToTime(startSec + MAX_CLIP_DURATION_SECONDS));
    }
  };

  // Quick adjust start time
  const handleAdjustStart = (deltaSec: number) => {
    soundEffects.playClick();
    const curr = parseTimeToSeconds(formStartTime) ?? 0;
    const next = Math.max(0, curr + deltaSec);
    setFormStartTime(formatSecondsToTime(next));
    setFormEndTime(formatSecondsToTime(next + MAX_CLIP_DURATION_SECONDS));
  };

  // Quick adjust end time
  const handleAdjustEnd = (deltaSec: number) => {
    soundEffects.playClick();
    const startSec = parseTimeToSeconds(formStartTime) ?? 0;
    const curr = parseTimeToSeconds(formEndTime) ?? (startSec + MAX_CLIP_DURATION_SECONDS);
    const next = Math.max(startSec + 1, Math.min(startSec + MAX_CLIP_DURATION_SECONDS, curr + deltaSec));
    setFormEndTime(formatSecondsToTime(next));
  };

  // Save Video
  const handleSave = (overrideStatus?: TeacherVideoStatus) => {
    soundEffects.playClick();
    setFormError('');
    setSaveSuccessNotice('');

    if (!editingItem) return;

    if (!formUrl.trim()) {
      setFormError('Vui lòng dán một đường dẫn YouTube.');
      return;
    }

    const startSec = parseTimeToSeconds(formStartTime);
    const endSec = parseTimeToSeconds(formEndTime);

    if (startSec === null || endSec === null) {
      setFormError('Thời gian bắt đầu hoặc kết thúc không đúng định dạng (mm:ss).');
      return;
    }

    if (startSec >= endSec) {
      setFormError('Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc.');
      return;
    }

    const targetStatus = overrideStatus || formStatus;

    const res = saveTeacherVideo({
      lessonId: editingItem.lessonId,
      activityId: editingItem.activityId,
      videoUrl: formUrl,
      videoTitle: formVideoTitle.trim() || `${editingItem.lessonTitleEn} (Video Bài Giảng)`,
      startSeconds: startSec,
      endSeconds: endSec,
      status: targetStatus,
      notes: formNotes
    });

    if (!res.success) {
      setFormError(res.message);
      return;
    }

    soundEffects.playVictory();
    setSaveSuccessNotice(res.message);
    loadData();

    setTimeout(() => {
      handleCloseEdit();
    }, 1200);
  };

  // Remove Video
  const handleRemove = (item: TeacherControlledVideo) => {
    if (!window.confirm(`Cô Trang có chắc chắn muốn gỡ video bài học "${item.lessonTitleEn}" không? Trạng thái sẽ chuyển về "Missing (Coming Soon)".`)) {
      return;
    }
    soundEffects.playClick();
    removeTeacherVideo(item.lessonId, item.activityId);
    loadData();
    if (editingItem?.id === item.id) {
      handleCloseEdit();
    }
  };

  // Parsed for modal preview
  const parsedFormVideoId = extractYouTubeId(formUrl);
  const parsedFormStartSec = parseTimeToSeconds(formStartTime) ?? 0;
  const parsedFormEndSec = Math.min(
    parseTimeToSeconds(formEndTime) ?? (parsedFormStartSec + MAX_CLIP_DURATION_SECONDS),
    parsedFormStartSec + MAX_CLIP_DURATION_SECONDS
  );

  return (
    <div className="space-y-6">
      
      {/* 1. HERO BANNER & STATS */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#3B0764] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-500/30 relative overflow-hidden space-y-6">
        <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-3xl shadow-inner shrink-0">
              🎬
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-[11px] uppercase font-black px-2.5 py-0.5 rounded-full bg-purple-400/30 text-purple-200 border border-purple-400/40 tracking-wider">
                  Bảng Quản Lý Video Giáo Viên Tập Trung
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-200">
                  🛡️ 100% Cô Trang Tuyển Chọn
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mt-1">
                Quản Lý Video Bài Học VietDiscovery
              </h2>
              <p className="text-xs text-purple-100 mt-0.5 max-w-2xl">
                Cô Trang có toàn quyền nhúng link YouTube, cắt đoạn ngắn tối đa 60 giây và phê duyệt. Video chưa được duyệt sẽ tự động hiển thị màn hình an toàn <strong>"Video đang cập nhật – Coming Soon"</strong> cho học sinh.
              </p>
            </div>
          </div>
        </div>

        {/* 4 AUDIT STAT CARDS */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total Audited */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="flex items-center justify-between text-purple-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Tổng Bài Học Đã Quét</span>
              <Layers className="w-4 h-4 text-purple-300" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                {stats.totalAudited} Bài
              </div>
              <div className="text-[10px] text-purple-200/80 font-medium mt-0.5">
                5 Khối lớp (Grade 1 đến 5)
              </div>
            </div>
          </div>

          {/* Card 2: Approved Videos */}
          <div className="p-4 rounded-2xl bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30">
            <div className="flex items-center justify-between text-emerald-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Đã Duyệt (Approved)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-heading">
                {stats.approvedCount} Video
              </div>
              <div className="text-[10px] text-emerald-200/80 font-medium mt-0.5">
                Hiển thị cho học sinh xem
              </div>
            </div>
          </div>

          {/* Card 3: Missing / Coming Soon */}
          <div className="p-4 rounded-2xl bg-amber-500/15 backdrop-blur-md border border-amber-400/30">
            <div className="flex items-center justify-between text-amber-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Đang Cập Nhật (Coming Soon)</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-heading">
                {stats.missingCount} Bài
              </div>
              <div className="text-[10px] text-amber-200/80 font-medium mt-0.5">
                Chờ Cô Trang nhúng link
              </div>
            </div>
          </div>

          {/* Card 4: Purged Unauthorized Videos */}
          <div className="p-4 rounded-2xl bg-rose-500/15 backdrop-blur-md border border-rose-400/30">
            <div className="flex items-center justify-between text-rose-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Đã Gỡ Bỏ Video Sai</span>
              <ShieldCheck className="w-4 h-4 text-rose-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-rose-300 font-heading">
                {stats.removedPlaceholderCount} Video
              </div>
              <div className="text-[10px] text-rose-200/80 font-medium mt-0.5">
                Đã xóa Bo Burnham &amp; mẫu
              </div>
            </div>
          </div>
        </div>

        {/* Protection Note */}
        <div className="relative z-10 pt-2 border-t border-white/10 text-xs text-purple-200/90 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>
            <strong>Bảo vệ an toàn:</strong> Tuyệt đối không tự động chọn video ngẫu nhiên hay dùng từ khóa để gán link. Chỉ video có trạng thái <strong>Approved</strong> mới được xuất hiện trên màn hình học sinh.
          </span>
        </div>
      </div>

      {/* 2. FILTERS & SEARCH CONTROLS */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên bài học, mã bài, link YouTube..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-purple-500 focus:outline-hidden text-xs text-slate-800 transition-all font-medium"
          />
        </div>

        {/* Grade Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">Khối lớp:</span>
          {(['all', 1, 2, 3, 4, 5] as const).map(g => (
            <button
              key={g}
              onClick={() => {
                soundEffects.playClick();
                setSelectedGrade(g as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedGrade === g
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {g === 'all' ? 'Tất cả' : `Lớp ${g}`}
            </button>
          ))}
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">Trạng thái:</span>
          {[
            { key: 'all', label: 'Tất cả' },
            { key: 'approved', label: 'Approved' },
            { key: 'missing', label: 'Missing' },
            { key: 'needs_review', label: 'Needs Review' },
            { key: 'unavailable', label: 'Unavailable' }
          ].map(s => (
            <button
              key={s.key}
              onClick={() => {
                soundEffects.playClick();
                setSelectedStatus(s.key as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedStatus === s.key
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. CENTRALIZED VIDEO MANAGEMENT TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-purple-100 text-purple-700 font-bold">
              <Tv className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-slate-900 text-base font-heading">
              Bảng Danh Sách 25 Bài Học &amp; Trạng Thái Video YouTube
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Hiển thị {filteredVideos.length} / {videoList.length} bài
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-black uppercase tracking-wider text-[10px] border-b border-slate-200">
                <th className="py-3 px-4">Grade</th>
                <th className="py-3 px-4">Lesson</th>
                <th className="py-3 px-4">Activity</th>
                <th className="py-3 px-4">Video Title</th>
                <th className="py-3 px-4">YouTube URL</th>
                <th className="py-3 px-4">Start Time</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Trạng thái</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVideos.map((item) => {
                const hasApprovedVideo = item.status === 'approved' && item.videoId;
                const isHueLesson = item.lessonId === 'lesson-g4-adv1-places';

                return (
                  <tr 
                    key={item.id}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      isHueLesson ? 'bg-amber-50/40' : ''
                    }`}
                  >
                    {/* 1. Grade */}
                    <td className="py-3.5 px-4 font-black">
                      <span className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold ${
                        item.grade === 1 ? 'bg-pink-100 text-pink-800' :
                        item.grade === 2 ? 'bg-amber-100 text-amber-800' :
                        item.grade === 3 ? 'bg-emerald-100 text-emerald-800' :
                        item.grade === 4 ? 'bg-indigo-100 text-indigo-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        Grade {item.grade}
                      </span>
                    </td>

                    {/* 2. Lesson */}
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-extrabold text-slate-900 text-xs">
                        {item.lessonTitleEn}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.lessonTitleVi}
                      </div>
                      {isHueLesson && (
                        <span className="inline-block mt-1 px-2 py-0.2 rounded-md bg-rose-100 text-rose-800 text-[9px] font-black uppercase tracking-wider">
                          Đã gỡ Bo Burnham
                        </span>
                      )}
                    </td>

                    {/* 3. Activity */}
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 text-[10.5px]">
                        <span>🎬</span>
                        <span>{item.activityName}</span>
                      </span>
                    </td>

                    {/* 4. Video Title */}
                    <td className="py-3.5 px-4 max-w-xs text-slate-700 font-medium">
                      {item.videoUrl ? (
                        <div className="truncate font-semibold text-slate-800" title={item.videoTitle}>
                          {item.videoTitle}
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Chưa có tiêu đề video</span>
                      )}
                    </td>

                    {/* 5. YouTube URL */}
                    <td className="py-3.5 px-4 max-w-xs">
                      {item.videoUrl ? (
                        <a 
                          href={item.videoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="font-mono text-[11px] text-purple-600 hover:text-purple-800 hover:underline flex items-center gap-1 truncate"
                          title={item.videoUrl}
                        >
                          <span className="truncate">{item.videoUrl}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      ) : (
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10.5px] font-medium">
                          Chưa có URL
                        </span>
                      )}
                    </td>

                    {/* 6. Start Time */}
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-700">
                      {item.videoUrl ? formatSecondsToTime(item.startSeconds) : '—'}
                    </td>

                    {/* 7. Duration */}
                    <td className="py-3.5 px-4 font-mono font-bold">
                      {item.videoUrl ? (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {item.durationSeconds}s
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>

                    {/* 8. Status */}
                    <td className="py-3.5 px-4">
                      {item.status === 'approved' && item.videoId ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Approved</span>
                        </span>
                      ) : item.status === 'needs_review' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-extrabold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>Needs Review</span>
                        </span>
                      ) : item.status === 'unavailable' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span>Unavailable</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>Missing (Coming Soon)</span>
                        </span>
                      )}
                    </td>

                    {/* 9. Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {item.videoId && (
                          <button
                            onClick={() => {
                              soundEffects.playClick();
                              setPreviewingVideo(item);
                            }}
                            className="p-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors cursor-pointer"
                            title="Xem thử video như học sinh"
                          >
                            <Play className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="px-2.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                          title="Sửa hoặc nhúng link YouTube"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{item.videoUrl ? 'Sửa Video' : 'Nhúng Link'}</span>
                        </button>

                        {item.videoUrl && (
                          <button
                            onClick={() => handleRemove(item)}
                            className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors cursor-pointer"
                            title="Gỡ video khỏi bài học"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. MODAL: TEACHER VIDEO EDITOR PER LESSON */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl border-4 border-white flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 p-5 text-white flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
                  ✂️
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase">
                      Grade {editingItem.grade}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[10px] font-black uppercase">
                      Lesson {editingItem.lessonNumber}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black font-heading mt-0.5">
                    {editingItem.lessonTitleEn}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleCloseEdit}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Left Form (7 cols) + Right Preview (5 cols) */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* 1. Paste YouTube URL */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <label className="block text-xs font-black text-slate-800">
                    1. Dán liên kết YouTube (Paste YouTube URL):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="url"
                      value={formUrl}
                      onChange={(e) => {
                        setFormUrl(e.target.value);
                        setFormError('');
                        setPreviewKey(prev => prev + 1);
                      }}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="flex-1 px-3.5 py-2 text-xs font-mono rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-purple-500 text-slate-900"
                    />
                    {navigator?.clipboard && (
                      <button
                        type="button"
                        onClick={async () => {
                          try {
                            const text = await navigator.clipboard.readText();
                            if (text) {
                              setFormUrl(text);
                              setFormError('');
                              setPreviewKey(prev => prev + 1);
                            }
                          } catch (err) {}
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                      >
                        Dán
                      </button>
                    )}
                  </div>
                  {parsedFormVideoId ? (
                    <div className="text-[11px] font-mono text-emerald-700 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Video ID hợp lệ: {parsedFormVideoId}</span>
                    </div>
                  ) : formUrl ? (
                    <div className="text-[11px] text-rose-600 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>URL chưa đúng định dạng YouTube (cần 11 ký tự Video ID).</span>
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-500">
                      💡 Sao chép link video bài giảng trên YouTube và dán vào đây.
                    </p>
                  )}
                </div>

                {/* 2. Video Title */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <label className="block text-xs font-black text-slate-800">
                    2. Tiêu đề hiển thị đoạn clip (Video Title):
                  </label>
                  <input
                    type="text"
                    value={formVideoTitle}
                    onChange={(e) => setFormVideoTitle(e.target.value)}
                    placeholder="VD: Cố đô Huế - Vẻ đẹp di sản hoàng cung"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium"
                  />
                </div>

                {/* 3. Clip Timing: Start Time & Auto End Time (Max 60s) */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <Scissors className="w-4 h-4 text-purple-600" />
                      <span>3. Thời gian phát đoạn ngắn (Tối đa 60 giây):</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">mm:ss</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Start Time */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-emerald-800">
                        Start Time (Bắt đầu):
                      </label>
                      <input
                        type="text"
                        value={formStartTime}
                        onChange={(e) => handleStartTimeChange(e.target.value)}
                        placeholder="00:00"
                        className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50/20 font-mono font-bold text-xs text-emerald-950 focus:ring-2 focus:ring-emerald-500"
                      />
                      <div className="flex items-center gap-1 pt-1">
                        <button
                          type="button"
                          onClick={() => handleAdjustStart(-5)}
                          className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                        >
                          -5s
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdjustStart(+5)}
                          className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                        >
                          +5s
                        </button>
                      </div>
                    </div>

                    {/* End Time (Auto Calculated) */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-rose-800">
                        End Time (Tự tính, tối đa +60s):
                      </label>
                      <input
                        type="text"
                        value={formEndTime}
                        onChange={(e) => handleEndTimeChange(e.target.value)}
                        placeholder="01:00"
                        className="w-full px-3 py-2 rounded-xl border border-rose-300 bg-rose-50/20 font-mono font-bold text-xs text-rose-950 focus:ring-2 focus:ring-rose-500"
                      />
                      <div className="flex items-center gap-1 pt-1">
                        <button
                          type="button"
                          onClick={() => handleAdjustEnd(-5)}
                          className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                        >
                          -5s
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdjustEnd(+5)}
                          className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                        >
                          +5s
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50 text-[11px] text-purple-900 leading-relaxed">
                    ⏱️ <strong>Quy chuẩn sư phạm:</strong> Thời lượng clip: <strong>{Math.max(1, parsedFormEndSec - parsedFormStartSec)} giây</strong>. Trình phát sẽ tự động dừng tại mốc kết thúc để học sinh không bị phân tâm.
                  </div>
                </div>

                {/* 4. Status Selector */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <label className="block text-xs font-black text-slate-800">
                    4. Trạng thái phê duyệt (Status):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: 'approved', label: 'Approved (Duyệt)', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
                      { key: 'missing', label: 'Missing (Chưa có)', color: 'bg-amber-50 text-amber-800 border-amber-300' },
                      { key: 'needs_review', label: 'Needs Review', color: 'bg-blue-50 text-blue-800 border-blue-300' },
                      { key: 'unavailable', label: 'Unavailable', color: 'bg-rose-50 text-rose-800 border-rose-300' }
                    ].map(st => (
                      <button
                        key={st.key}
                        type="button"
                        onClick={() => setFormStatus(st.key as any)}
                        className={`p-2 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                          formStatus === st.key
                            ? `${st.color} ring-2 ring-purple-600 font-extrabold shadow-xs`
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10.5px] text-slate-500">
                    * Chỉ khi chọn <strong>Approved</strong>, học sinh mới xem được video. Các trạng thái khác sẽ hiển thị màn hình Coming Soon.
                  </p>
                </div>

                {/* Validation and Success Alerts */}
                {formError && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {saveSuccessNotice && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{saveSuccessNotice}</span>
                  </div>
                )}

                {/* Action Buttons: Preview, Save, Remove */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewKey(prev => prev + 1)}
                      disabled={!parsedFormVideoId}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Tải lại Preview</span>
                    </button>

                    {editingItem.videoUrl && (
                      <button
                        type="button"
                        onClick={() => handleRemove(editingItem)}
                        className="px-4 py-2.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Gỡ Video (Remove)</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCloseEdit}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Hủy bỏ
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSave('needs_review')}
                      className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-xs shadow-xs cursor-pointer transition-all"
                    >
                      ⏳ Lưu Bản Nháp (Save Draft)
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSave('approved')}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-md shadow-purple-200 flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98 transition-all"
                    >
                      <Save className="w-4 h-4" />
                      <span>🚀 Phê Duyệt &amp; Xuất Bản (Approve &amp; Publish)</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Interactive 16:9 Preview */}
              <div className="lg:col-span-5 space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 text-purple-600" />
                      <span>Xem Trước Trực Quan (16:9 Player Preview)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-extrabold">
                      Live Test
                    </span>
                  </div>

                  {parsedFormVideoId ? (
                    <SmartYouTubeClipPlayer
                      key={previewKey}
                      videoId={parsedFormVideoId}
                      title={formVideoTitle || editingItem.lessonTitleEn}
                      subtitle={`Xem thử: Phát từ ${formStartTime} đến ${formEndTime} (Tối đa 60s)`}
                      startSeconds={parsedFormStartSec}
                      endSeconds={parsedFormEndSec}
                      showDetails={true}
                    />
                  ) : (
                    <div className="aspect-video w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-400 space-y-2">
                      <Tv className="w-10 h-10 text-slate-300" />
                      <p className="text-xs font-bold text-slate-500">
                        Vui lòng dán link YouTube hợp lệ để xem trước trình phát.
                      </p>
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-600 space-y-1">
                    <p className="font-bold text-slate-800">📌 Cam kết an toàn &amp; chuẩn mực:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
                      <li>Tỷ lệ chuẩn 16:9 cho mọi màn hình.</li>
                      <li>Lazy loading: Chỉ tải khi bấm xem (không autoplay).</li>
                      <li>Thời lượng tối đa 60s, có nút "Xem lại đoạn này".</li>
                      <li>Không tải tệp MP4, không trao sao tự động.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 5. MODAL: STANDALONE PREVIEW VIDEO */}
      {previewingVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-in fade-in zoom-in-95 duration-200 space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  Grade {previewingVideo.grade} • Clip {previewingVideo.durationSeconds}s
                </span>
                <h4 className="font-black text-slate-900 text-base mt-1">
                  {previewingVideo.videoTitle || previewingVideo.lessonTitleEn}
                </h4>
              </div>
              <button
                onClick={() => setPreviewingVideo(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <SmartYouTubeClipPlayer
              videoId={previewingVideo.videoId}
              title={previewingVideo.videoTitle}
              subtitle={`Bài học: ${previewingVideo.lessonTitleEn}`}
              startSeconds={previewingVideo.startSeconds}
              endSeconds={previewingVideo.endSeconds}
              showDetails={true}
              autoPlayOnMount={true}
            />

            <div className="flex justify-end">
              <button
                onClick={() => setPreviewingVideo(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer"
              >
                Đóng xem thử
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
