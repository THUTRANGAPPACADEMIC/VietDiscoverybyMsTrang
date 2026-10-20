// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — TEACHER VOCABULARY IMAGE MANAGER
// Upload, Crop, Frame Adjustment & Classification of Real Photo vs Illustration
// ==============================================================================

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  Upload, 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Crop, 
  Eye, 
  RefreshCw, 
  Trash2, 
  Layers, 
  Camera, 
  Palette, 
  Filter, 
  X,
  FileCheck
} from 'lucide-react';
import { soundEffects } from '../../lib/soundEffects';
import { 
  getAllCurriculumVocabularies, 
  getVocabManagerStats, 
  saveTeacherVocabularyImage, 
  removeTeacherVocabularyImage, 
  optimizeImageToWebP, 
  TeacherVocabCardItem, 
  VocabPhotoType, 
  VocabReviewStatus, 
  VocabFitMode, 
  VocabAspectRatio, 
  VOCAB_UPDATE_EVENT 
} from '../../lib/vocabularyImageManager';
import { RealisticVisualVocabularyCard } from '../Student/RealisticVisualVocabularyCard';

export const TeacherVocabularyManager: React.FC = () => {
  const [vocabularies, setVocabularies] = useState<TeacherVocabCardItem[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<'all' | 1 | 2 | 3 | 4 | 5>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'needs_review' | 'real_photo' | 'illustration'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal Editing State
  const [editingItem, setEditingItem] = useState<TeacherVocabCardItem | null>(null);
  const [modalImageUrl, setModalImageUrl] = useState<string>('');
  const [modalIsRealPhoto, setModalIsRealPhoto] = useState<boolean>(true);
  const [modalFitMode, setModalFitMode] = useState<VocabFitMode>('cover');
  const [modalAspectRatio, setModalAspectRatio] = useState<VocabAspectRatio>('4:3');
  const [modalAuthor, setModalAuthor] = useState<string>('');
  const [modalSource, setModalSource] = useState<string>('');
  const [modalLicense, setModalLicense] = useState<string>('CC BY-SA 4.0 / Educational License');
  const [modalStatus, setModalStatus] = useState<VocabReviewStatus>('approved');
  const [modalNotes, setModalNotes] = useState<string>('');
  
  // File processing state
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string>('');
  const [modalSuccess, setModalSuccess] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load and reload on event
  const refreshVocabList = () => {
    const list = getAllCurriculumVocabularies();
    setVocabularies(list);
  };

  useEffect(() => {
    refreshVocabList();
    const handleUpdate = () => refreshVocabList();
    window.addEventListener(VOCAB_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(VOCAB_UPDATE_EVENT, handleUpdate);
  }, []);

  const stats = useMemo(() => getVocabManagerStats(), [vocabularies]);

  // Filtered List
  const filteredList = useMemo(() => {
    return vocabularies.filter(item => {
      if (selectedGrade !== 'all' && item.grade !== selectedGrade) return false;
      if (selectedStatus === 'needs_review' && (item.status !== 'needs_review' || !item.isPlaceholder)) return false;
      if (selectedStatus === 'real_photo' && (item.isPlaceholder || !item.isRealPhoto)) return false;
      if (selectedStatus === 'illustration' && (item.isPlaceholder || item.isRealPhoto)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchVi = item.meaningVi.toLowerCase().includes(q);
        const matchLesson = item.lessonTitleEn.toLowerCase().includes(q) || item.lessonTitleVi.toLowerCase().includes(q);
        return matchWord || matchVi || matchLesson;
      }
      return true;
    });
  }, [vocabularies, selectedGrade, selectedStatus, searchQuery]);

  // Open Edit Modal
  const handleOpenEdit = (item: TeacherVocabCardItem) => {
    soundEffects.playClick();
    setEditingItem(item);
    setModalImageUrl(item.imageUrl);
    setModalIsRealPhoto(item.isRealPhoto);
    setModalFitMode(item.fitMode || 'cover');
    setModalAspectRatio(item.aspectRatio || '4:3');
    setModalAuthor(item.author || 'Cô Trần Thị Thu Trang');
    setModalSource(item.source || 'Kho ảnh Giáo dục VietDiscovery');
    setModalLicense(item.license || 'Giấy phép Chuẩn Giáo dục Tiểu học');
    setModalStatus(item.status);
    setModalNotes(item.notes || '');
    setModalError('');
    setModalSuccess('');
  };

  // Handle Local File Upload with WebP Canvas Optimization
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setModalError('Vui lòng chọn một tệp hình ảnh (PNG, JPG, WEBP, AVIF).');
      return;
    }

    setIsOptimizing(true);
    setModalError('');
    try {
      soundEffects.playClick();
      // Compress and convert to clean lightweight WebP (max dimension 960px, quality 0.85)
      const optimizedDataUrl = await optimizeImageToWebP(file, 960, 0.85);
      setModalImageUrl(optimizedDataUrl);
      setModalSource(`Tải lên từ máy (${file.name}) - Tối ưu hóa WebP`);
      setModalSuccess(`✓ Đã nén và chuyển đổi ảnh sang chuẩn WebP nhẹ (${Math.round(file.size / 1024)}KB ➔ WebP tối ưu)!`);
    } catch (err: any) {
      setModalError(err.message || 'Không thể xử lý tệp ảnh.');
    } finally {
      setIsOptimizing(false);
    }
  };

  // Handle Save
  const handleSaveModal = () => {
    if (!editingItem) return;
    soundEffects.playClick();
    setModalError('');
    setModalSuccess('');

    if (modalStatus === 'approved' && (!modalImageUrl || !modalImageUrl.trim())) {
      setModalError('Vui lòng tải tệp ảnh hoặc dán đường dẫn ảnh trước khi phê duyệt.');
      return;
    }

    const res = saveTeacherVocabularyImage({
      word: editingItem.word,
      imageUrl: modalImageUrl,
      isRealPhoto: modalIsRealPhoto,
      category: editingItem.category,
      fitMode: modalFitMode,
      aspectRatio: modalAspectRatio,
      author: modalAuthor,
      source: modalSource,
      license: modalLicense,
      attributionText: `${modalAuthor} • ${modalSource} (${modalLicense})`,
      status: modalStatus,
      notes: modalNotes
    });

    if (res.success) {
      soundEffects.playSuccess();
      setModalSuccess(res.message);
      refreshVocabList();
      setTimeout(() => {
        setEditingItem(null);
      }, 1000);
    } else {
      setModalError(res.message);
    }
  };

  // Reset to Default
  const handleResetToDefault = () => {
    if (!editingItem) return;
    if (!window.confirm(`Cô Trang có chắc chắn muốn khôi phục ảnh mặc định cho từ "${editingItem.word}" không?`)) return;
    
    soundEffects.playClick();
    removeTeacherVocabularyImage(editingItem.word);
    refreshVocabList();
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Quick Audit Strip */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-50 text-purple-600 font-bold">
              <Camera className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
              Quản lý Ảnh Từ Vựng (Vocabulary Image Studio)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Rà soát 100 từ vựng cốt lõi Khối 1–5. Tải ảnh thật chuẩn WebP, căn chỉnh khung hình, phân loại 
            chính xác <strong>Ảnh chụp thật (Real Photo)</strong> vs <strong>Minh họa (Illustration)</strong>.
          </p>
        </div>

        <button
          onClick={() => {
            soundEffects.playClick();
            refreshVocabList();
          }}
          className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Làm mới danh sách</span>
        </button>
      </div>

      {/* 2. Key Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-black text-slate-900 font-heading">{stats.totalWords}</div>
          <div className="text-xs font-bold text-slate-500">Tổng từ vựng cốt lõi</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-2xs bg-emerald-50/20">
          <div className="text-2xl font-black text-emerald-600 font-heading">{stats.realPhotoCount}</div>
          <div className="text-xs font-bold text-emerald-800 flex items-center gap-1">
            <span>📷</span>
            <span>Ảnh chụp thật (Real Photo)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-indigo-200 shadow-2xs bg-indigo-50/20">
          <div className="text-2xl font-black text-indigo-600 font-heading">{stats.illustrationCount}</div>
          <div className="text-xs font-bold text-indigo-800 flex items-center gap-1">
            <span>🎨</span>
            <span>Minh họa (Illustration)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs bg-amber-50/30">
          <div className="text-2xl font-black text-amber-600 font-heading">{stats.needsReviewCount}</div>
          <div className="text-xs font-bold text-amber-800 flex items-center gap-1">
            <span>⏳</span>
            <span>Chờ cập nhật (Coming Soon)</span>
          </div>
        </div>
      </div>

      {/* 3. Filter Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 flex-wrap">
        {/* Search Input */}
        <div className="relative min-w-[240px] flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo từ tiếng Anh, nghĩa tiếng Việt, bài học..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Grade Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-400 mr-1">Khối:</span>
          {(['all', 1, 2, 3, 4, 5] as const).map(g => (
            <button
              key={g}
              onClick={() => {
                soundEffects.playClick();
                setSelectedGrade(g);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedGrade === g
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {g === 'all' ? 'Tất cả Khối' : `Lớp ${g}`}
            </button>
          ))}
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-400 mr-1">Loại:</span>
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'real_photo', label: '📷 Ảnh Thật' },
            { id: 'illustration', label: '🎨 Minh Họa' },
            { id: 'needs_review', label: '⏳ Chờ Ảnh' }
          ].map(st => (
            <button
              key={st.id}
              onClick={() => {
                soundEffects.playClick();
                setSelectedStatus(st.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedStatus === st.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredList.map(item => {
          const isMissing = item.isPlaceholder || !item.imageUrl;

          return (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-4 border-2 shadow-xs transition-all hover:shadow-md flex flex-col justify-between ${
                isMissing ? 'border-amber-200 bg-amber-50/10' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                {/* Header Strip: Grade & Status */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10.5px] font-black uppercase">
                    Lớp {item.grade} • Bài {item.lessonNumber}
                  </span>

                  {isMissing ? (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold flex items-center gap-1">
                      <span>⏳</span>
                      <span>Needs Review</span>
                    </span>
                  ) : item.isRealPhoto ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-extrabold flex items-center gap-1">
                      <span>📷</span>
                      <span>Real Photo</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 text-[10px] font-extrabold flex items-center gap-1">
                      <span>🎨</span>
                      <span>Illustration</span>
                    </span>
                  )}
                </div>

                {/* Image Thumbnail / Placeholder */}
                <div className="aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 relative group">
                  {isMissing ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-slate-100 text-slate-400 space-y-1">
                      <ImageIcon className="w-8 h-8 text-slate-300" />
                      <span className="text-[11px] font-bold text-slate-600">Image coming soon</span>
                      <span className="text-[10px] text-slate-400">Ảnh đang cập nhật</span>
                    </div>
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.word}
                      loading="lazy"
                      className={`w-full h-full ${item.fitMode === 'contain' ? 'object-contain bg-slate-950 p-2' : 'object-cover'}`}
                    />
                  )}

                  {/* Quick Edit Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1"
                    >
                      <Upload className="w-3.5 h-3.5 text-purple-600" />
                      <span>{isMissing ? 'Tải ảnh lên' : 'Đổi ảnh'}</span>
                    </button>
                  </div>
                </div>

                {/* Vocabulary Metadata */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-black text-slate-900 font-heading capitalize">
                      {item.word}
                    </h4>
                    {item.ipa && (
                      <span className="text-[11px] font-mono text-purple-700 font-bold">
                        {item.ipa}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-600 line-clamp-1 mt-0.5">
                    {item.meaningVi}
                  </p>
                  <p className="text-[10.5px] text-slate-400 line-clamp-1 italic mt-1" title={item.exampleSentenceEn}>
                    "{item.exampleSentenceEn}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 truncate max-w-[140px]" title={item.lessonTitleEn}>
                  {item.lessonTitleEn}
                </span>

                <button
                  onClick={() => handleOpenEdit(item)}
                  className={`px-3 py-1 rounded-xl text-xs font-extrabold cursor-pointer transition-all flex items-center gap-1 ${
                    isMissing
                      ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-700'
                  }`}
                >
                  <Upload className="w-3 h-3" />
                  <span>{isMissing ? 'Cập nhật ảnh' : 'Chỉnh sửa'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredList.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-400 space-y-2">
          <Search className="w-10 h-10 mx-auto text-slate-300" />
          <p className="text-sm font-bold text-slate-600">Không tìm thấy từ vựng phù hợp với bộ lọc.</p>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 5. MODAL: UPLOAD & CROP VOCABULARY IMAGE                             */}
      {/* ==================================================================== */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-800 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-2xl bg-white/20 text-white text-xl">
                  📸
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-black px-2 py-0.5 rounded-full bg-white/20 text-purple-100">
                      Lớp {editingItem.grade} • Bài {editingItem.lessonNumber}
                    </span>
                    <span className="text-xs font-bold text-purple-200">
                      {editingItem.lessonTitleEn}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white capitalize mt-0.5">
                    {editingItem.word} <span className="text-sm font-mono text-purple-200 font-normal">({editingItem.ipa})</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setEditingItem(null)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
              
              {/* Feedback messages */}
              {modalError && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{modalError}</span>
                </div>
              )}

              {modalSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{modalSuccess}</span>
                </div>
              )}

              {/* Two Column Layout: Editor (Left 7) & Live Preview (Right 5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Form & Adjustments (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Vocabulary Overview Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div>
                      <span className="font-bold text-slate-500">Nghĩa tiếng Việt:</span>{' '}
                      <span className="font-black text-slate-900">{editingItem.meaningVi}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500">Câu ví dụ:</span>{' '}
                      <span className="italic text-purple-900">"{editingItem.exampleSentenceEn}"</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500">Phân loại sư phạm:</span>{' '}
                      <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 font-extrabold capitalize text-[11px]">
                        {editingItem.category}
                      </span>
                    </div>
                  </div>

                  {/* 1. Image Input Methods */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                      Chọn Phương Thức Nạp Ảnh:
                    </label>

                    {/* Method A: File Upload (Optimized to WebP) */}
                    <div className="p-4 rounded-2xl border-2 border-dashed border-purple-300 bg-purple-50/20 text-center space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          disabled={isOptimizing}
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md shadow-purple-200 cursor-pointer flex items-center gap-2 transition-all"
                        >
                          <Upload className="w-4 h-4" />
                          <span>{isOptimizing ? 'Đang nén WebP...' : 'Tải File Từ Máy Tính (WebP/JPG/PNG)'}</span>
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        ⚡ <strong>Tối ưu hóa tự động:</strong> Tệp ảnh sẽ được Canvas nén và chuyển sang chuẩn <strong>WebP</strong> (tối đa 960px, dung lượng &lt;150KB) giúp website tải siêu nhanh.
                      </p>
                    </div>

                    {/* Method B: Direct URL Input */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Hoặc Dán Đường Dẫn Ảnh Trực Tuyến (URL):
                      </label>
                      <input
                        type="url"
                        value={modalImageUrl}
                        onChange={(e) => setModalImageUrl(e.target.value)}
                        placeholder="https://images.unsplash.com/... hoặc link ảnh Wikimedia"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-800 focus:ring-2 focus:ring-purple-500 bg-white"
                      />
                    </div>
                  </div>

                  {/* 2. Classification: Real Photo vs Illustration (Requirement 9) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <span className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                      Phân Loại Hình Ảnh (Bắt Buộc Chuẩn Sư Phạm):
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <label 
                        className={`p-3 rounded-xl border-2 flex items-start gap-2.5 cursor-pointer transition-all ${
                          modalIsRealPhoto 
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950' 
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="photoType"
                          checked={modalIsRealPhoto}
                          onChange={() => setModalIsRealPhoto(true)}
                          className="mt-0.5 text-emerald-600"
                        />
                        <div className="text-xs">
                          <span className="font-extrabold flex items-center gap-1">
                            <span>📷</span>
                            <span>Ảnh Chụp Thật (Real Photo)</span>
                          </span>
                          <p className="text-[10.5px] opacity-80 mt-0.5 leading-snug">
                            Dành cho địa danh, con vật, món ăn, đồ vật thực tế.
                          </p>
                        </div>
                      </label>

                      <label 
                        className={`p-3 rounded-xl border-2 flex items-start gap-2.5 cursor-pointer transition-all ${
                          !modalIsRealPhoto 
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-950' 
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="photoType"
                          checked={!modalIsRealPhoto}
                          onChange={() => setModalIsRealPhoto(false)}
                          className="mt-0.5 text-indigo-600"
                        />
                        <div className="text-xs">
                          <span className="font-extrabold flex items-center gap-1">
                            <span>🎨</span>
                            <span>Minh Họa (Illustration)</span>
                          </span>
                          <p className="text-[10.5px] opacity-80 mt-0.5 leading-snug">
                            Dành cho từ trừu tượng, cảm xúc, biểu tượng giáo dục.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* 3. Frame & Fit Adjustments (Requirement 7) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <span className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                      Điều Chỉnh Khung Hình &amp; Căn Chỉnh (Frame &amp; Fit Mode):
                    </span>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Fit Mode */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Chế độ hiển thị ảnh:
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setModalFitMode('cover')}
                            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              modalFitMode === 'cover'
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-white text-slate-700 border-slate-200'
                            }`}
                          >
                            Cover (Lấp đầy)
                          </button>
                          <button
                            type="button"
                            onClick={() => setModalFitMode('contain')}
                            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              modalFitMode === 'contain'
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-white text-slate-700 border-slate-200'
                            }`}
                          >
                            Contain (Toàn bộ)
                          </button>
                        </div>
                      </div>

                      {/* Aspect Ratio */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Tỉ lệ khung:
                        </label>
                        <div className="flex items-center gap-2">
                          {(['4:3', '16:9', '1:1'] as const).map(ar => (
                            <button
                              key={ar}
                              type="button"
                              onClick={() => setModalAspectRatio(ar)}
                              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                modalAspectRatio === ar
                                  ? 'bg-purple-600 text-white border-purple-600'
                                  : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              {ar}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Attribution & Rights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Tác Giả / Nhiếp Ảnh Gia:
                      </label>
                      <input
                        type="text"
                        value={modalAuthor}
                        onChange={(e) => setModalAuthor(e.target.value)}
                        placeholder="Cô Trần Thị Thu Trang"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Nguồn Ảnh &amp; Bản Quyền:
                      </label>
                      <input
                        type="text"
                        value={modalSource}
                        onChange={(e) => setModalSource(e.target.value)}
                        placeholder="Wikimedia Commons / Unsplash / VietDiscovery"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
                      />
                    </div>
                  </div>

                  {/* 5. Review Status (Requirement 10) */}
                  <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-extrabold text-amber-950 block">
                        Trạng Thái Phê Duyệt Hiển Thị:
                      </span>
                      <span className="text-[11px] text-amber-800">
                        {modalStatus === 'approved' 
                          ? '✓ Đã phê duyệt: Học sinh sẽ thấy ảnh thật ngay trên thẻ học.' 
                          : '⏳ Cần rà soát (Needs Review): Thẻ học sinh vẫn giữ "Image coming soon" an toàn.'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => setModalStatus('needs_review')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                          modalStatus === 'needs_review'
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        Needs Review
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalStatus('approved')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                          modalStatus === 'approved'
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        Approved
                      </button>
                    </div>
                  </div>

                </div>

                {/* Right Column: Live Interactive Card Preview (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-purple-600" />
                      <span>Xem Trước Thẻ Học Sinh (Live Preview)</span>
                    </span>
                    <span className="text-[10.5px] text-slate-400">Trực quan 100%</span>
                  </div>

                  {/* Render exact student card */}
                  <div className="pointer-events-none">
                    <RealisticVisualVocabularyCard
                      word={editingItem.word}
                      phonetic={editingItem.ipa}
                      meaningVi={editingItem.meaningVi}
                      exampleSentence={editingItem.exampleSentenceEn}
                      exampleSentenceVi={editingItem.exampleSentenceVi}
                      imageUrl={modalStatus === 'approved' ? modalImageUrl : ''}
                      imageAttribution={`${modalAuthor} • ${modalSource} (${modalLicense})`}
                      category={editingItem.category}
                      colorTheme="purple"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50 text-[11px] text-purple-900 space-y-1">
                    <p className="font-bold text-purple-950">📌 Ghi chú sư phạm:</p>
                    <p>• Nếu chọn <strong>Needs Review</strong>, học sinh luôn thấy thẻ <em>Image coming soon</em>.</p>
                    <p>• Thẻ tự động gắn nhãn <strong>📷 Real Photo</strong> hoặc <strong>🎨 Illustration</strong> chuẩn xác theo lựa chọn của Cô Trang.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div>
                {editingItem.isTeacherUploaded && (
                  <button
                    type="button"
                    onClick={handleResetToDefault}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Khôi phục mặc định</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Đóng
                </button>

                <button
                  type="button"
                  onClick={handleSaveModal}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs shadow-md shadow-purple-200 cursor-pointer transition-all transform hover:scale-102 active:scale-98 flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Xác Nhận &amp; Lưu Ảnh Thẻ Học</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
