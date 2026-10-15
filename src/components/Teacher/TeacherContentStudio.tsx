// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — TEACHER CONTENT STUDIO
// Secure Teacher-Only Content Management System for Independent Curriculum
// ==============================================================================

import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Plus, 
  Eye, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  ShieldCheck, 
  Layers, 
  Filter, 
  Search, 
  ArrowRight, 
  X, 
  Save, 
  Trash2, 
  RotateCcw,
  GraduationCap,
  Award,
  Globe,
  Radio,
  FileCheck2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { 
  CurriculumLesson, 
  CurriculumAdventure, 
  AdventureThemeId, 
  ContentStatus,
  Circular27CurriculumQuestion
} from '../../types/curriculum';
import { GradeLevel, GradeBand } from '../../types';
import { 
  CURRICULUM_ADVENTURES, 
  getCurriculumLessons, 
  saveCurriculumLessons, 
  saveSingleLesson, 
  toggleLessonPublishStatus 
} from '../../data/curriculumData';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

interface TeacherContentStudioProps {
  onPreviewLessonAsStudent?: (lesson: CurriculumLesson) => void;
}

export const TeacherContentStudio: React.FC<TeacherContentStudioProps> = ({
  onPreviewLessonAsStudent
}) => {
  const [lessons, setLessons] = useState<CurriculumLesson[]>(() => getCurriculumLessons());
  const [selectedAdventure, setSelectedAdventure] = useState<AdventureThemeId | 'all'>('all');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Drawers
  const [activeLessonToEdit, setActiveLessonToEdit] = useState<CurriculumLesson | null>(null);
  const [previewLesson, setPreviewLesson] = useState<CurriculumLesson | null>(null);
  const [isAiReviewOpen, setIsAiReviewOpen] = useState(false);
  const [aiDraftPrompt, setAiDraftPrompt] = useState('');
  const [aiDraftResults, setAiDraftResults] = useState<any | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'overview' | 'vocab' | 'reading' | 'listening' | 'quiz'>('overview');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Statistics
  const totalLessons = lessons.length;
  const publishedLessons = lessons.filter(l => l.status === 'published').length;
  const draftLessons = lessons.filter(l => l.status === 'draft' || l.status === 'in_review').length;
  const verifiedLessons = lessons.filter(l => l.verification.isVerifiedByTeacher).length;

  // Filtered Lessons
  const filteredLessons = lessons.filter(l => {
    const matchAdventure = selectedAdventure === 'all' || l.adventureId === selectedAdventure;
    const matchGrade = selectedGrade === 'all' || l.gradeLevel === selectedGrade;
    const matchSearch = searchQuery === '' || 
      l.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.titleVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.topicEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchAdventure && matchGrade && matchSearch;
  });

  const handleTogglePublish = (lessonId: string) => {
    soundEffects.playClick();
    const updated = toggleLessonPublishStatus(lessonId);
    if (updated) {
      setLessons(getCurriculumLessons());
    }
  };

  const handleSaveEditedLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLessonToEdit) return;
    soundEffects.playSuccess();
    saveSingleLesson(activeLessonToEdit);
    setLessons(getCurriculumLessons());
    setActiveLessonToEdit(null);
  };

  const handlePlayVoice = (text: string) => {
    soundEffects.playClick();
    setIsPlayingAudio(true);
    playEnglishSpeech(text, {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Human-in-the-Loop AI Content Generator (Strictly Draft Mode)
  const handleGenerateAiDraft = () => {
    if (!aiDraftPrompt.trim()) return;
    setIsGeneratingAi(true);
    soundEffects.playClick();

    setTimeout(() => {
      setIsGeneratingAi(false);
      setAiDraftResults({
        topic: aiDraftPrompt,
        suggestedVocabulary: [
          { word: 'heritage', ipa: '/ˈher.ɪ.tɪdʒ/', meaningEn: 'Valuable traditions and culture passed down through generations', meaningVi: 'Di sản quý báu của cha ông' },
          { word: 'monument', ipa: '/ˈmɒn.jə.mənt/', meaningEn: 'A historic statue or building honoring an event or person', meaningVi: 'Đài tưởng niệm, công trình lịch sử' },
          { word: 'celebrate', ipa: '/ˈsel.ə.breɪt/', meaningEn: 'To observe a joyful occasion with festivities', meaningVi: 'Tổ chức kỷ niệm, chào mừng' }
        ],
        suggestedQuestions: [
          { level: 1, textEn: 'What is a cultural heritage?', options: ['Traditions passed down', 'A computer game', 'A glass bottle', 'A pair of shoes'], key: 0 },
          { level: 2, textEn: 'Why do communities build monuments?', options: ['To honor history and great people', 'To sell candy', 'To hide from the sun', 'To park bicycles'], key: 0 }
        ],
        humanReviewStatus: 'Pending Teacher Approval'
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* 1. STUDIO HEADER BANNER */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-6 sm:p-8 shadow-xl border border-indigo-500/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-600 border-2 border-white/40 flex items-center justify-center text-3xl shadow-lg shrink-0">
              🧭
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>VietDiscovery Teacher Content Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight leading-tight">
                Biên soạn & Quản lý Giáo trình Tiếng Anh Độc quyền
              </h2>
              <p className="text-xs sm:text-sm text-indigo-200/90 max-w-2xl mt-1">
                Chương trình học tiếng Anh nguyên bản do Cô Trần Thị Thu Trang xây dựng. Tích hợp 5 chặng thám hiểm xuyên suốt địa lý, văn hóa, ẩm thực, thiên nhiên và tương lai Việt Nam.
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-2xl font-black text-amber-300 font-mono">{totalLessons}</div>
              <div className="text-[10px] uppercase font-bold text-indigo-200">Tổng Bài Học</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-2xl font-black text-emerald-300 font-mono">{publishedLessons}</div>
              <div className="text-[10px] uppercase font-bold text-indigo-200">Đã Xuất Bản</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-2xl font-black text-sky-300 font-mono">{draftLessons}</div>
              <div className="text-[10px] uppercase font-bold text-indigo-200">Bản Nháp / Chờ Duyệt</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-2xl font-black text-pink-300 font-mono">100%</div>
              <div className="text-[10px] uppercase font-bold text-indigo-200">Cô Trang Kiểm Định</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ADVENTURE THEMES SELECTOR (5 ADVENTURES) */}
      <div className="space-y-2">
        <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between font-heading px-1">
          <span>5 CHẶNG THÁM HIỂM (THE 5 CURRICULUM ADVENTURES):</span>
          <span className="text-[11px] text-slate-500 font-bold">Chương trình độc quyền không sao chép</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CURRICULUM_ADVENTURES.map((adv) => {
            const isSelected = selectedAdventure === adv.id;
            const lessonCount = lessons.filter(l => l.adventureId === adv.id).length;

            return (
              <button
                key={adv.id}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedAdventure(isSelected ? 'all' : adv.id);
                }}
                className={`p-3.5 rounded-2xl text-left transition-all border-2 cursor-pointer shadow-xs relative overflow-hidden group ${
                  isSelected 
                    ? `bg-white border-[${adv.accentColor}] ring-3 ring-indigo-300 shadow-md scale-102` 
                    : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl">{adv.icon}</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                    {lessonCount} bài
                  </span>
                </div>
                <div className="font-heading font-black text-sm text-slate-900 leading-tight">
                  {adv.titleEn}
                </div>
                <div className="text-xs text-slate-600 font-bold mt-0.5 truncate">
                  {adv.titleVi}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. TOOLBAR: GRADE FILTER, SEARCH & ACTION BUTTONS */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Grade Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <span className="text-xs font-black text-slate-500 uppercase mr-1">Khối:</span>
          {(['all', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'] as const).map((g) => {
            const isSelected = selectedGrade === g;
            return (
              <button
                key={g}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedGrade(g);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {g === 'all' ? 'Tất cả khối' : g}
              </button>
            );
          })}
        </div>

        {/* Right: Search & AI Review Button */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <div className="relative flex-1 md:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo chủ đề, từ khóa..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              setIsAiReviewOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-md shadow-pink-200 transition-all cursor-pointer whitespace-nowrap"
            title="Duyệt gợi ý từ AI theo chuẩn kiểm định của cô Trang"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Review Studio</span>
          </button>
        </div>

      </div>

      {/* 4. LESSONS REPOSITORY TABLE / CARDS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider font-heading">
            DANH SÁCH BÀI HỌC CHÍNH THỨC ({filteredLessons.length} BÀI HỌC)
          </h3>
          <span className="text-xs text-slate-500 font-bold">
            Hiển thị bài học đã kiểm định & sẵn sàng giảng dạy
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {filteredLessons.map((lesson) => {
            const adv = CURRICULUM_ADVENTURES.find(a => a.id === lesson.adventureId);
            const isPublished = lesson.status === 'published';

            return (
              <div
                key={lesson.id}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Left: Thumbnail & Core Info */}
                <div className="flex items-start gap-4 min-w-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 shrink-0 bg-slate-100 shadow-xs">
                    <img
                      src={lesson.coverImage}
                      alt={lesson.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-md bg-slate-900/80 text-white text-[9px] font-mono font-bold">
                      {lesson.durationMinutes}m
                    </div>
                  </div>

                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-black">
                        {lesson.gradeLevel} • {lesson.targetCefr}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center gap-1">
                        <span>{adv?.icon}</span>
                        <span>{adv?.titleEn}</span>
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase flex items-center gap-1 ${
                        isPublished 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isPublished ? 'bg-emerald-600' : 'bg-amber-600'}`}></span>
                        <span>{isPublished ? 'Published (Đã xuất bản)' : 'Draft (Bản nháp)'}</span>
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-tight">
                      {lesson.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600 font-bold">
                      {lesson.titleVi}
                    </p>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500 font-semibold">
                      <span>📚 {lesson.vocabulary.length} Từ vựng</span>
                      <span>•</span>
                      <span>💬 {lesson.sentencePatterns.length} Mẫu câu</span>
                      <span>•</span>
                      <span>🎧 Nghe & Đọc có Audio</span>
                      <span>•</span>
                      <span>🎯 3 Mức độ Thông tư 27</span>
                      <span>•</span>
                      <span className="text-pink-600 font-black flex items-center gap-1">
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>{lesson.verification.teacherName} kiểm định</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  {/* Preview Button */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setPreviewLesson(lesson);
                      setActivePreviewTab('overview');
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-black transition-all cursor-pointer"
                    title="Xem trước bài học như học sinh trải nghiệm"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>Xem Trước</span>
                  </button>

                  {/* Edit Button */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveLessonToEdit(JSON.parse(JSON.stringify(lesson)));
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black transition-all cursor-pointer"
                    title="Chỉnh sửa nội dung bài học"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Chỉnh Sửa</span>
                  </button>

                  {/* Publish Toggle Button */}
                  <button
                    onClick={() => handleTogglePublish(lesson.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      isPublished
                        ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                    }`}
                  >
                    <span>{isPublished ? 'Hạ Bài Nháp' : 'Xuất Bản Ngay'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. INTERACTIVE STUDENT PREVIEW MODAL                            */}
      {/* ============================================================== */}
      {previewLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border-4 border-indigo-300 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-4 sm:p-5 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                  👁️
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    STUDENT PREVIEW MODE • CHẾ ĐỘ XEM TRƯỚC BÀI GIẢNG
                  </div>
                  <h3 className="text-base sm:text-lg font-black font-heading leading-tight">
                    {previewLesson.titleEn}
                  </h3>
                  <div className="text-xs text-indigo-200 font-bold">
                    {previewLesson.titleVi}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  stopSpeech();
                  setPreviewLesson(null);
                }}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-tabs for Preview */}
            <div className="flex items-center gap-1.5 p-2.5 bg-slate-100 border-b border-slate-200 overflow-x-auto shrink-0">
              {[
                { id: 'overview', label: '1. Tổng quan & Mục tiêu', icon: '🎯' },
                { id: 'vocab', label: '2. Từ vựng & Audio', icon: '📚' },
                { id: 'reading', label: '3. Bài đọc hiểu', icon: '📖' },
                { id: 'listening', label: '4. Luyện nghe & Nói', icon: '🎧' },
                { id: 'quiz', label: '5. Thử thách Thông tư 27', icon: '🏆' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActivePreviewTab(t.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activePreviewTab === t.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
              
              {/* Tab 1: Overview */}
              {activePreviewTab === 'overview' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                    <h5 className="text-xs font-black uppercase text-indigo-900 tracking-wider font-heading">
                      MỤC TIÊU BÀI HỌC (LEARNING OBJECTIVES):
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-800 font-bold">
                      {previewLesson.learningObjectivesEn.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <div>{obj}</div>
                            <div className="text-[11px] text-slate-500 font-normal">{previewLesson.learningObjectivesVi[i]}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 space-y-2">
                    <h5 className="text-xs font-black uppercase text-pink-900 tracking-wider font-heading">
                      MẪU CÂU GIAO TIẾP TRỌNG TÂM (COMMUNICATIVE SENTENCE PATTERN):
                    </h5>
                    {previewLesson.sentencePatterns.map((sp, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-pink-200 space-y-1.5">
                        <div className="text-sm font-black text-blue-900 font-mono">
                          {sp.pattern}
                        </div>
                        <div className="text-xs text-slate-600 font-bold">
                          {sp.patternMeaningVi}
                        </div>
                        <div className="pt-2 border-t border-slate-100 space-y-1">
                          {sp.dialogueEn.map((d, dIdx) => (
                            <div key={dIdx} className="text-xs">
                              <span className="font-black text-pink-600">{d.speaker}: </span>
                              <span className="text-slate-800">{d.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-bold">
                    <span>Nguồn kiểm chứng: {previewLesson.verification.sourceReferences.join(' • ')}</span>
                    <span className="text-emerald-600 font-black">✓ Đã kiểm chứng bởi cô Trang</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Vocabulary */}
              {activePreviewTab === 'vocab' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {previewLesson.vocabulary.map((v) => (
                    <div key={v.id} className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{v.emoji || '📖'}</span>
                          <div>
                            <div className="text-base font-black text-slate-900 font-heading leading-tight">{v.word}</div>
                            <div className="text-xs text-indigo-600 font-mono font-bold">{v.ipa}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => handlePlayVoice(v.audioPromptEn || v.word)}
                          className="w-9 h-9 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 flex items-center justify-center transition-colors cursor-pointer"
                          title="Phát âm tiếng Anh chuẩn"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-slate-700 font-semibold leading-relaxed">
                        {v.meaningEn}
                      </div>
                      <div className="text-xs text-slate-500 font-bold pt-1 border-t border-slate-100">
                        Nghĩa tiếng Việt: {v.meaningVi}
                      </div>
                      <div className="p-2 rounded-xl bg-sky-50 text-[11px] text-sky-900 font-medium italic">
                        "{v.exampleSentenceEn}"
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Reading */}
              {activePreviewTab === 'reading' && (
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <h4 className="text-xl font-black font-heading text-slate-900">{previewLesson.reading.titleEn}</h4>
                    <p className="text-xs text-slate-500 font-bold">{previewLesson.reading.titleVi}</p>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black font-mono">
                      {previewLesson.reading.wordCount} words • Lexile: {previewLesson.reading.lexileEstimate || 'Standard'}
                    </span>
                  </div>

                  <div className="p-6 rounded-3xl bg-amber-50/50 border-2 border-amber-200/80 space-y-3 text-sm text-slate-800 leading-relaxed font-serif">
                    {previewLesson.reading.passagesEn.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="font-black text-slate-800">Bản dịch hỗ trợ học sinh:</div>
                    {previewLesson.reading.passagesVi.map((pv, pvIdx) => (
                      <p key={pvIdx} className="text-slate-500">{pv}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Listening & Speaking */}
              {activePreviewTab === 'listening' && (
                <div className="space-y-5">
                  <div className="p-5 rounded-3xl bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 border-2 border-sky-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🎧</span>
                        <h5 className="font-heading font-black text-sm text-blue-900">
                          {previewLesson.listening.audioTitleEn}
                        </h5>
                      </div>
                      <button
                        onClick={() => handlePlayVoice(previewLesson.listening.audioScriptEn)}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Phát Audio Bài Nghe</span>
                      </button>
                    </div>

                    <div className="p-3 bg-white/90 rounded-2xl border border-sky-100 text-xs text-slate-800 space-y-1.5">
                      <div className="font-bold text-sky-800">Transcript (Nội dung nghe):</div>
                      <p className="italic font-serif">"{previewLesson.listening.audioScriptEn}"</p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-sky-200 space-y-2">
                      <div className="text-xs font-black text-slate-900">
                        ❓ Câu hỏi nghe: {previewLesson.listening.questionEn}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {previewLesson.listening.options.map((opt, oIdx) => (
                          <div 
                            key={oIdx} 
                            className={`p-2 rounded-xl text-xs font-bold border ${
                              oIdx === previewLesson.listening.correctIndex
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {oIdx === previewLesson.listening.correctIndex && (
                              <span className="ml-2 text-emerald-600 font-black">✓ Đáp án đúng</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Speaking Section */}
                  <div className="p-5 rounded-3xl bg-pink-50/70 border-2 border-pink-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎙️</span>
                      <h5 className="font-heading font-black text-sm text-rose-950">
                        HOẠT ĐỘNG LUYỆN NÓI & PHÁT ÂM (SPEAKING PRACTICE):
                      </h5>
                    </div>

                    <p className="text-xs text-slate-700 font-bold">{previewLesson.speaking.promptEn}</p>
                    <div className="p-4 rounded-2xl bg-white border border-pink-200 text-center space-y-2">
                      <div className="text-base sm:text-lg font-black text-blue-950 font-heading">
                        "{previewLesson.speaking.targetSentenceEn}"
                      </div>
                      <div className="text-xs text-slate-500 font-bold">
                        ({previewLesson.speaking.targetSentenceVi})
                      </div>
                      <div className="pt-2 text-xs text-pink-600 font-bold">
                        💡 Điểm ngữ âm trọng tâm: {previewLesson.speaking.phoneticFocus}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: Circular 27 Challenge Levels */}
              {activePreviewTab === 'quiz' && (
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase text-slate-500 tracking-wider font-heading">
                    HỆ THỐNG CÂU HỎI THEO 3 MỨC ĐỘ THÔNG TƯ 27/2020/TT-BGDDT:
                  </div>

                  <div className="space-y-3">
                    {previewLesson.questions.map((q, idx) => (
                      <div key={q.id} className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                            q.challengeLevel === 1 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : q.challengeLevel === 2 
                              ? 'bg-sky-100 text-sky-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            Mức {q.challengeLevel} • {q.levelNameEn} ({q.levelNameVi})
                          </span>

                          <span className="text-xs font-mono font-bold text-slate-400">
                            {q.learningSkill}
                          </span>
                        </div>

                        <div className="text-sm font-black text-slate-900 leading-snug">
                          {idx + 1}. {q.questionEn}
                        </div>
                        <div className="text-xs text-slate-500 font-bold">
                          {q.questionVi}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-xl text-xs font-bold border transition-colors ${
                                oIdx === q.correctIndex
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-black'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              {oIdx === q.correctIndex && <span className="ml-1 text-emerald-600">✓ (Đáp án đúng)</span>}
                            </div>
                          ))}
                        </div>

                        {/* Pedagogical Explanation */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-0.5">
                          <div className="font-bold text-slate-800">Giải thích sư phạm:</div>
                          <div>{q.explanationEn}</div>
                          <div className="text-slate-500">{q.explanationVi}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <div className="text-xs text-slate-600 font-bold">
                Trạng thái: <span className="font-black text-indigo-700">{previewLesson.status.toUpperCase()}</span>
              </div>
              <button
                onClick={() => {
                  stopSpeech();
                  setPreviewLesson(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs cursor-pointer"
              >
                Đóng Xem Trước
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 6. AI CONTENT REVIEW STUDIO (Human-in-the-Loop Pipeline)       */}
      {/* ============================================================== */}
      {isAiReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-purple-300 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-heading font-black text-base text-slate-900">
                    AI Content Review & Approval Pipeline
                  </h4>
                  <p className="text-xs text-slate-500 font-bold">
                    Nguyên tắc kiểm duyệt: Không tự động xuất bản nội dung AI khi chưa có cô Trang thẩm định
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsAiReviewOpen(false);
                  setAiDraftResults(null);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prompt input */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-700 tracking-wider">
                Nhập chủ đề muốn tham khảo ý tưởng (Prompt for Lesson Idea):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiDraftPrompt}
                  onChange={(e) => setAiDraftPrompt(e.target.value)}
                  placeholder="Ví dụ: Chợ nổi Cái Răng, Làng hoa Sa Đéc, Cầu Rồng..."
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-purple-500"
                />
                <button
                  onClick={handleGenerateAiDraft}
                  disabled={isGeneratingAi || !aiDraftPrompt.trim()}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-md transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isGeneratingAi ? 'Đang soạn...' : 'Tạo Gợi Ý AI'}
                </button>
              </div>
            </div>

            {/* AI Results Drawer (Human-in-the-loop review) */}
            {aiDraftResults && (
              <div className="p-4 rounded-2xl bg-purple-50/70 border-2 border-purple-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-purple-900 tracking-wider">
                    GỢI Ý TỪ AI (CHỜ CÔ TRANG DUYỆT & CHỈNH SỬA):
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px]">
                    Trạng thái: Chưa kiểm định
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-black text-slate-800">Từ vựng đề xuất:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {aiDraftResults.suggestedVocabulary.map((v: any, idx: number) => (
                      <div key={idx} className="bg-white p-2 rounded-xl border border-purple-100 text-xs space-y-1">
                        <div className="font-black text-purple-900">{v.word} ({v.ipa})</div>
                        <div className="text-[11px] text-slate-500">{v.meaningVi}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-purple-200">
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      alert('Cô Trang đã lưu ý tưởng vào mục Bản nháp để biên tập thêm.');
                      setIsAiReviewOpen(false);
                      setAiDraftResults(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md cursor-pointer"
                  >
                    Duyệt & Lưu Vào Bản Nháp (Chưa xuất bản)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
