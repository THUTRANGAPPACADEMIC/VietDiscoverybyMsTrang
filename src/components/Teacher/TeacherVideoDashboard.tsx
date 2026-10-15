import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Plus, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  Video, 
  Play, 
  Edit3, 
  X, 
  Search,
  Filter,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { EducationalVideo, VideoQuestion, VideoSourceType, VideoStatus, VideoDifficulty } from '../../types';
import { 
  getEducationalVideos, 
  addEducationalVideo, 
  updateEducationalVideo, 
  deleteEducationalVideo, 
  setVideoStatus, 
  parseVideoUrl 
} from '../../lib/videoAcademyService';
import { VideoPlayerModal } from '../Student/VideoAcademy/VideoPlayerModal';
import { soundEffects } from '../../lib/soundEffects';

export const TeacherVideoDashboard: React.FC = () => {
  const [videos, setVideos] = useState<EducationalVideo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Filter & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<1 | 2 | 3 | 4 | 5 | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<VideoStatus | 'all'>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<VideoSourceType | 'all'>('all');

  // Modal State for Adding / Editing Video
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<EducationalVideo | null>(null);

  // Form State
  const [formUrl, setFormUrl] = useState('');
  const [formTitleEn, setFormTitleEn] = useState('');
  const [formTitleVi, setFormTitleVi] = useState('');
  const [formGrade, setFormGrade] = useState<1 | 2 | 3 | 4 | 5>(4);
  const [formSourceType, setFormSourceType] = useState<VideoSourceType>('teacher_youtube');
  const [formChannel, setFormChannel] = useState('Ms. Thu Trang (VietDiscovery)');
  const [formTopic, setFormTopic] = useState('Heritage & Landmarks');
  const [formDifficulty, setFormDifficulty] = useState<VideoDifficulty>('A1 Elementary');
  const [formDescEn, setFormDescEn] = useState('');
  const [formDescVi, setFormDescVi] = useState('');
  const [formObjectivesEn, setFormObjectivesEn] = useState('');
  const [formObjectivesVi, setFormObjectivesVi] = useState('');
  const [formDuration, setFormDuration] = useState<number>(5);
  const [formStatus, setFormStatus] = useState<VideoStatus>('draft');
  const [formQuestions, setFormQuestions] = useState<VideoQuestion[]>([
    {
      id: 'q-new-1',
      questionEn: '',
      questionVi: '',
      options: ['', '', ''],
      correctIndex: 0,
      explanationEn: '',
      explanationVi: '',
      difficulty: 'easy'
    }
  ]);

  const [formError, setFormError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [parsedPreview, setParsedPreview] = useState<{ isValid: boolean; embedUrl: string; thumbnailUrl: string } | null>(null);

  // Load all videos (including drafts) for teacher view
  const loadTeacherVideos = async () => {
    setIsLoading(true);
    try {
      const data = await getEducationalVideos(undefined, true); // isStaffViewer = true
      setVideos(data);
    } catch (err) {
      console.error('Failed to load videos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTeacherVideos();
  }, []);

  // Real-time URL parsing effect
  useEffect(() => {
    if (!formUrl.trim()) {
      setParsedPreview(null);
      return;
    }
    const res = parseVideoUrl(formUrl);
    setParsedPreview(res);
  }, [formUrl]);

  // Handle Quick Status Toggle (Draft <-> Approved)
  const handleToggleStatus = async (videoId: string, currentStatus: VideoStatus) => {
    soundEffects.playClick();
    const newStatus: VideoStatus = currentStatus === 'approved' ? 'draft' : 'approved';
    await setVideoStatus(videoId, newStatus);
    await loadTeacherVideos();
  };

  // Handle Delete
  const handleDelete = async (videoId: string, title: string) => {
    if (!window.confirm(`Cô Trang có chắc chắn muốn xóa video "${title}" không?`)) return;
    soundEffects.playClick();
    await deleteEducationalVideo(videoId);
    await loadTeacherVideos();
  };

  // Handle Form Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formUrl || !formTitleEn || !formTitleVi) {
      setFormError('Vui lòng nhập đầy đủ URL, Tiêu đề tiếng Anh và Tiêu đề tiếng Việt.');
      return;
    }

    const parsed = parseVideoUrl(formUrl);
    if (!parsed.isValid) {
      setFormError(parsed.errorMessage || 'URL video không hợp lệ.');
      return;
    }

    setIsSaving(true);
    try {
      const objectivesEnArr = formObjectivesEn.split('\n').map(s => s.trim()).filter(Boolean);
      const objectivesViArr = formObjectivesVi.split('\n').map(s => s.trim()).filter(Boolean);

      const res = await addEducationalVideo({
        videoUrl: formUrl,
        titleEn: formTitleEn,
        titleVi: formTitleVi,
        grade: formGrade,
        sourceType: formSourceType,
        channelOrAuthor: formChannel,
        topic: formTopic,
        difficulty: formDifficulty,
        descriptionEn: formDescEn,
        descriptionVi: formDescVi,
        learningObjectivesEn: objectivesEnArr,
        learningObjectivesVi: objectivesViArr,
        durationMinutes: formDuration,
        thumbnailUrl: parsed.thumbnailUrl,
        status: formStatus,
        isTeacherCreated: formSourceType === 'teacher_youtube',
        questions: formQuestions.filter(q => q.questionEn.trim() && q.options.some(o => o.trim()))
      });

      if (res.success) {
        soundEffects.playSuccess();
        setIsAddModalOpen(false);
        resetForm();
        await loadTeacherVideos();
      } else {
        setFormError(res.error || 'Có lỗi khi lưu video.');
      }
    } catch (err: any) {
      setFormError(err.message || 'Lỗi lưu video.');
    } finally {
      setIsSaving(false);
    }
  };

  const resetForm = () => {
    setFormUrl('');
    setFormTitleEn('');
    setFormTitleVi('');
    setFormGrade(4);
    setFormSourceType('teacher_youtube');
    setFormChannel('Ms. Thu Trang (VietDiscovery)');
    setFormTopic('Heritage & Landmarks');
    setFormDifficulty('A1 Elementary');
    setFormDescEn('');
    setFormDescVi('');
    setFormObjectivesEn('');
    setFormObjectivesVi('');
    setFormDuration(5);
    setFormStatus('draft');
    setParsedPreview(null);
    setFormQuestions([
      {
        id: 'q-new-1',
        questionEn: '',
        questionVi: '',
        options: ['', '', ''],
        correctIndex: 0,
        explanationEn: '',
        explanationVi: '',
        difficulty: 'easy'
      }
    ]);
  };

  // Question Form Helpers
  const handleUpdateQuestion = (qIndex: number, field: string, value: any) => {
    setFormQuestions(prev => {
      const clone = [...prev];
      clone[qIndex] = { ...clone[qIndex], [field]: value };
      return clone;
    });
  };

  const handleUpdateOption = (qIndex: number, optIndex: number, value: string) => {
    setFormQuestions(prev => {
      const clone = [...prev];
      const opts = [...clone[qIndex].options];
      opts[optIndex] = value;
      clone[qIndex].options = opts;
      return clone;
    });
  };

  const handleAddQuestionItem = () => {
    setFormQuestions(prev => [
      ...prev,
      {
        id: 'q-new-' + (prev.length + 1),
        questionEn: '',
        questionVi: '',
        options: ['', '', ''],
        correctIndex: 0,
        explanationEn: '',
        explanationVi: '',
        difficulty: 'easy'
      }
    ]);
  };

  // Filtered List
  const filteredVideos = videos.filter(v => {
    if (selectedGrade !== 'all' && v.grade !== selectedGrade) return false;
    if (selectedStatus !== 'all' && v.status !== selectedStatus) return false;
    if (selectedSourceType !== 'all' && v.sourceType !== selectedSourceType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        v.titleEn.toLowerCase().includes(q) ||
        v.titleVi.toLowerCase().includes(q) ||
        v.topic.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalVideos = videos.length;
  const approvedVideos = videos.filter(v => v.status === 'approved').length;
  const draftVideos = videos.filter(v => v.status === 'draft').length;
  const teacherCreated = videos.filter(v => v.isTeacherCreated).length;

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Actions Strip */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-rose-50 text-rose-600 font-bold">
              <Tv className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
              Quản lý Học Viện Video (Video Academy Dashboard)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kiểm duyệt, thêm mới và quản lý video bài giảng theo Khối Lớp 1–5. Học sinh chỉ thấy video đã được phê duyệt.
          </p>
        </div>

        <button
          onClick={() => {
            soundEffects.playClick();
            resetForm();
            setIsAddModalOpen(true);
          }}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-200 flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Video Mới (Add Video by URL)</span>
        </button>
      </div>

      {/* 2. Key Teacher Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-black text-slate-900">{totalVideos}</div>
          <div className="text-xs font-bold text-slate-500">Tổng số Video</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-black text-emerald-600">{approvedVideos}</div>
          <div className="text-xs font-bold text-slate-500">Đã phê duyệt (Live)</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-black text-amber-600">{draftVideos}</div>
          <div className="text-xs font-bold text-slate-500">Bản nháp / Chờ duyệt</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-black text-rose-600">{teacherCreated}</div>
          <div className="text-xs font-bold text-slate-500">Bản quyền Cô Trang ⭐</div>
        </div>
      </div>

      {/* 3. Filter Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên video, chủ đề..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
          />
        </div>

        {/* Grade Filter */}
        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value as any)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white"
        >
          <option value="all">Tất cả Khối Lớp</option>
          <option value="1">Lớp 1</option>
          <option value="2">Lớp 2</option>
          <option value="3">Lớp 3</option>
          <option value="4">Lớp 4</option>
          <option value="5">Lớp 5</option>
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as any)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white"
        >
          <option value="all">Tất cả Trạng thái</option>
          <option value="approved">✅ Đã phê duyệt (Hiển thị học sinh)</option>
          <option value="draft">⏳ Bản nháp (Đang kiểm duyệt)</option>
          <option value="archived">📦 Đã lưu trữ</option>
        </select>

        {/* Source Type Filter */}
        <select
          value={selectedSourceType}
          onChange={(e) => setSelectedSourceType(e.target.value as any)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white"
        >
          <option value="all">Tất cả Nguồn</option>
          <option value="teacher_youtube">⭐ Bài giảng Cô Trang</option>
          <option value="curated_youtube">📺 YouTube Giáo Dục</option>
          <option value="ai_generated">🤖 AI Đồ Họa 3D</option>
        </select>
      </div>

      {/* 4. Video Management Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-xs font-bold text-slate-500">
            Đang tải dữ liệu học viện video...
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="p-12 text-center text-xs font-bold text-slate-500">
            Không tìm thấy video nào phù hợp với bộ lọc.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase text-slate-500">
                <tr>
                  <th className="py-3 px-4">Video & Ảnh thu nhỏ</th>
                  <th className="py-3 px-3">Khối Lớp</th>
                  <th className="py-3 px-3">Nguồn Video</th>
                  <th className="py-3 px-3">Trạng thái Phê duyệt</th>
                  <th className="py-3 px-3">Câu hỏi đố</th>
                  <th className="py-3 px-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredVideos.map(vid => (
                  <tr key={vid.id} className="hover:bg-slate-50/70 transition-colors">
                    
                    {/* Thumbnail & Titles */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-20 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200 shadow-2xs">
                          <img src={vid.thumbnailUrl} alt={vid.titleEn} className="w-full h-full object-cover" />
                          <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/70 text-[9px] text-white font-mono">
                            {vid.durationMinutes}m
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-extrabold text-slate-900 truncate max-w-xs sm:max-w-md">
                            {vid.titleEn}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md italic">
                            {vid.titleVi}
                          </div>
                          <div className="text-[10px] text-indigo-600 font-bold mt-0.5">
                            {vid.topic}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Grade */}
                    <td className="py-3 px-3">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-[10.5px]">
                        Lớp {vid.grade}
                      </span>
                    </td>

                    {/* Source */}
                    <td className="py-3 px-3">
                      {vid.isTeacherCreated ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-black text-[10.5px]">
                          ⭐ Cô Trang
                        </span>
                      ) : vid.sourceType === 'curated_youtube' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 font-bold text-[10.5px]">
                          YouTube
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold text-[10.5px]">
                          AI 3D
                        </span>
                      )}
                    </td>

                    {/* Approval Status Toggle */}
                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleStatus(vid.id, vid.status)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-black cursor-pointer transition-colors shadow-2xs ${
                          vid.status === 'approved'
                            ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                        title="Bấm để chuyển trạng thái duyệt / nháp"
                      >
                        {vid.status === 'approved' ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Đã Duyệt (Live)</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            <span>Bản nháp (Ẩn)</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Questions count */}
                    <td className="py-3 px-3 font-bold text-slate-600">
                      {vid.questions?.length || 0} câu
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Preview */}
                        <button
                          onClick={() => {
                            soundEffects.playClick();
                            setPreviewVideo(vid);
                          }}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          title="Xem thử như học sinh"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Open external link */}
                        <a
                          href={vid.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                          title="Mở link gốc"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(vid.id, vid.titleEn)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Xóa video"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 5. ADD VIDEO MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-rose-500 to-indigo-600 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-white/20">
                  <Tv className="w-5 h-5 text-white" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-heading">
                    Thêm Video Giáo Dục Mới (Add Video by URL)
                  </h3>
                  <p className="text-[11px] text-white/80">
                    Nhập đường dẫn YouTube hoặc video trực tuyến • Tự động chuyển đổi sang chế độ an toàn
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form - Scrollable */}
            <form onSubmit={handleAddSubmit} className="p-5 sm:p-7 overflow-y-auto space-y-5 flex-1">
              {formError && (
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 1. Video URL Input */}
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Đường dẫn Video (URL) *
                </label>
                <input
                  type="url"
                  required
                  value={formUrl}
                  onChange={(e) => setFormUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... hoặc https://youtu.be/..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-800 placeholder:font-sans placeholder:font-normal focus:ring-2 focus:ring-rose-500"
                />
                <p className="text-[10.5px] text-slate-400 mt-1">
                  Hỗ trợ link YouTube, YouTube Shorts, Vimeo hoặc video stream. Hệ thống sẽ tự động dùng domain an toàn <code>youtube-nocookie.com</code>.
                </p>

                {/* Parsed Preview Feedback */}
                {parsedPreview && (
                  <div className={`mt-2 p-3 rounded-xl border flex items-center gap-3 text-xs ${
                    parsedPreview.isValid 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}>
                    {parsedPreview.isValid ? (
                      <>
                        <img src={parsedPreview.thumbnailUrl} alt="Thumbnail preview" className="w-14 h-9 rounded object-cover border" />
                        <div>
                          <div className="font-black flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Nhận diện thành công URL nhúng an toàn!</span>
                          </div>
                          <div className="text-[10px] text-emerald-700 font-mono truncate max-w-md">
                            {parsedPreview.embedUrl}
                          </div>
                        </div>
                      </>
                    ) : (
                      <span className="font-bold">Định dạng URL chưa hợp lệ. Vui lòng kiểm tra lại.</span>
                    )}
                  </div>
                )}
              </div>

              {/* 2. Basic Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Tiêu đề tiếng Anh (Title EN) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitleEn}
                    onChange={(e) => setFormTitleEn(e.target.value)}
                    placeholder="VD: Exploring Ha Long Bay Wonders"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Tiêu đề tiếng Việt (Title VI) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitleVi}
                    onChange={(e) => setFormTitleVi(e.target.value)}
                    placeholder="VD: Khám phá kỳ quan Vịnh Hạ Long"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              {/* 3. Classifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Khối Lớp *
                  </label>
                  <select
                    value={formGrade}
                    onChange={(e) => setFormGrade(parseInt(e.target.value, 10) as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  >
                    <option value={1}>Lớp 1 (Pre-A1 Starter)</option>
                    <option value={2}>Lớp 2 (Pre-A1 Beginner)</option>
                    <option value={3}>Lớp 3 (Pre-A1 Foundation)</option>
                    <option value={4}>Lớp 4 (A1 Elementary)</option>
                    <option value={5}>Lớp 5 (A1+ Explorer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Nguồn Video *
                  </label>
                  <select
                    value={formSourceType}
                    onChange={(e) => setFormSourceType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  >
                    <option value="teacher_youtube">⭐ Bài giảng của Cô Trang</option>
                    <option value="curated_youtube">📺 YouTube Giáo Dục Chọn Lọc</option>
                    <option value="ai_generated">🤖 AI Đồ Họa 3D Trực Quan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Thời lượng (phút)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={formDuration}
                    onChange={(e) => setFormDuration(parseInt(e.target.value, 10) || 5)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                  />
                </div>
              </div>

              {/* 4. Topic & Channel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Chủ đề bài học (Topic)
                  </label>
                  <input
                    type="text"
                    value={formTopic}
                    onChange={(e) => setFormTopic(e.target.value)}
                    placeholder="VD: Heritage & Landmarks, Animals, Food"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Tác giả / Kênh phát hành
                  </label>
                  <input
                    type="text"
                    value={formChannel}
                    onChange={(e) => setFormChannel(e.target.value)}
                    placeholder="VD: Cô Thu Trang (VietDiscovery)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                  />
                </div>
              </div>

              {/* 5. Bilingual Descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Mô tả tóm tắt (Tiếng Anh)
                  </label>
                  <textarea
                    rows={3}
                    value={formDescEn}
                    onChange={(e) => setFormDescEn(e.target.value)}
                    placeholder="Short English summary for students..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Mô tả tóm tắt (Tiếng Việt)
                  </label>
                  <textarea
                    rows={3}
                    value={formDescVi}
                    onChange={(e) => setFormDescVi(e.target.value)}
                    placeholder="Tóm tắt nội dung bằng tiếng Việt..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              {/* 6. Learning Objectives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Mục tiêu học tập (EN - Mỗi dòng 1 ý)
                  </label>
                  <textarea
                    rows={2}
                    value={formObjectivesEn}
                    onChange={(e) => setFormObjectivesEn(e.target.value)}
                    placeholder="Recognize primary landmarks&#10;Practice listening for key details"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Mục tiêu học tập (VI - Mỗi dòng 1 ý)
                  </label>
                  <textarea
                    rows={2}
                    value={formObjectivesVi}
                    onChange={(e) => setFormObjectivesVi(e.target.value)}
                    placeholder="Nhận biết danh lam thắng cảnh&#10;Luyện nghe bắt từ khóa"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-mono"
                  />
                </div>
              </div>

              {/* 7. Interactive Comprehension Questions Builder */}
              <div className="border-t border-slate-200 pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 font-heading">
                      Câu hỏi Thử thách Nghe & Hiểu (Interactive Questions)
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Tạo câu hỏi đố vui xuất hiện ngay sau khi học sinh xem video
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddQuestionItem}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    + Thêm câu hỏi
                  </button>
                </div>

                {formQuestions.map((q, qIndex) => (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Câu hỏi #{qIndex + 1}</span>
                      {formQuestions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setFormQuestions(prev => prev.filter((_, i) => i !== qIndex))}
                          className="text-rose-600 hover:underline"
                        >
                          Xóa câu này
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={q.questionEn}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'questionEn', e.target.value)}
                        placeholder="Question in English (VD: What color is the boat?)"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                      />
                      <input
                        type="text"
                        value={q.questionVi}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'questionVi', e.target.value)}
                        placeholder="Câu hỏi tiếng Việt (VD: Chiếc thuyền màu gì?)"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                      />
                    </div>

                    {/* Options (3 options) */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-500">
                        Đáp án lựa chọn (Chọn nút tròn bên trái để đánh dấu đáp án đúng):
                      </div>
                      {q.options.map((opt, optIndex) => (
                        <div key={optIndex} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={`correct-${qIndex}`}
                            checked={q.correctIndex === optIndex}
                            onChange={() => handleUpdateQuestion(qIndex, 'correctIndex', optIndex)}
                            className="w-4 h-4 text-indigo-600 cursor-pointer"
                            title="Chọn đáp án đúng"
                          />
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => handleUpdateOption(qIndex, optIndex, e.target.value)}
                            placeholder={`Lựa chọn ${String.fromCharCode(65 + optIndex)}`}
                            className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={q.explanationEn}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'explanationEn', e.target.value)}
                        placeholder="Explanation in English"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] bg-white"
                      />
                      <input
                        type="text"
                        value={q.explanationVi}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'explanationVi', e.target.value)}
                        placeholder="Giải thích tiếng Việt"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* 8. Approval Status Selection */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Quyền Phê Duyệt Của Giáo Viên (Teacher Review Gate)</span>
                  </div>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    Chỉ video được chuyển sang "Đã Duyệt" mới xuất hiện trong giao diện học sinh.
                  </p>
                </div>

                <select
                  value={formStatus}
                  onChange={(e) => setFormStatus(e.target.value as any)}
                  className="px-3.5 py-2 rounded-xl border border-amber-300 text-xs font-black bg-white shadow-2xs"
                >
                  <option value="draft">⏳ Lưu bản nháp (Draft - Chỉ Cô Trang thấy)</option>
                  <option value="approved">✅ Phê duyệt phát hành (Approved - Mở cho học sinh)</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? 'Đang lưu video...' : 'Lưu Video Vào Học Viện'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* 6. Preview Modal for Teacher */}
      {previewVideo && (
        <VideoPlayerModal
          video={previewVideo}
          isOpen={!!previewVideo}
          onClose={() => setPreviewVideo(null)}
          onSaveProgress={() => {}}
        />
      )}

    </div>
  );
};
