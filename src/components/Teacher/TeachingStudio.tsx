import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Sparkles, 
  GraduationCap,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Database,
  CheckCircle2,
  AlertTriangle,
  Scissors
} from 'lucide-react';
import { 
  ClassRoom, 
  Destination, 
  MaterialItem, 
  StudentRosterItem, 
  AssignmentItem,
  GradeBand 
} from '../../types';
import { LearningMaterials } from './LearningMaterials';
import { ClassManagement } from './ClassManagement';
import { StudentProgressTable } from './StudentProgressTable';
import { LearningAssessment } from './LearningAssessment';
import { AIAssistant } from './AIAssistant';
import { TeacherContentStudio } from './TeacherContentStudio';
import { TeacherVideoDashboard } from './TeacherVideoDashboard';
import { ContentApprovalCenter } from './ContentApprovalCenter';
import { SmartYouTubeClipSelector } from './SmartYouTubeClipSelector';
import { 
  fetchTeacherRealRosterAndClasses, 
  purgeLegacyMockRoster, 
  TeacherDataLoadResult 
} from '../../lib/teacherDataService';

export type TeacherStudioTab = 'approval' | 'curriculum' | 'materials' | 'classes' | 'progress' | 'assessment' | 'ai' | 'videos' | 'clip_selector';

interface TeachingStudioProps {
  activeTab: TeacherStudioTab;
  onSelectTab?: (tab: TeacherStudioTab) => void;
  classes: ClassRoom[];
  students: StudentRosterItem[];
  materials: MaterialItem[];
  destinations: Destination[];
  onAddClass: (cls: ClassRoom) => void;
  onAssignTask: (asg: AssignmentItem) => void;
  onAddMaterial: (mat: MaterialItem) => void;
  onDeleteMaterial: (id: string) => void;
  onTogglePublish: (id: string) => void;
  onAwardBonusStars: (studentId: string, stars: number) => void;
  onPreviewGradeBand?: (band: GradeBand) => void;
  onUploadRoster?: (students: StudentRosterItem[]) => void;
}

export const TeachingStudio: React.FC<TeachingStudioProps> = ({
  activeTab,
  classes: propClasses,
  students: propStudents,
  materials,
  destinations,
  onAddClass,
  onAssignTask,
  onAddMaterial,
  onDeleteMaterial,
  onTogglePublish,
  onAwardBonusStars,
  onPreviewGradeBand,
  onUploadRoster,
  onSelectTab
}) => {
  // Live authentic data state from Supabase
  const [liveData, setLiveData] = useState<TeacherDataLoadResult | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);

  // Load authentic roster & class summaries directly from Supabase via Secure RPC
  const refreshLiveTeacherData = async () => {
    setIsLoadingLive(true);
    try {
      // Purge any stale mock items
      purgeLegacyMockRoster();
      const result = await fetchTeacherRealRosterAndClasses(true, 'All');
      setLiveData(result);
    } catch (err) {
      console.warn('[TeachingStudio] Error refreshing authentic teacher data:', err);
    } finally {
      setIsLoadingLive(false);
    }
  };

  useEffect(() => {
    refreshLiveTeacherData();
  }, []);

  // Authentic Supabase connection state
  const isConnected = Boolean(liveData && liveData.success && liveData.students.length > 0);

  // Compute effective classes & students (STRICTLY authentic Supabase records, NEVER fallback to mock data)
  const effectiveStudents = isConnected ? liveData!.students : [];
  const effectiveClasses = (liveData && liveData.success && liveData.classes.length > 0)
    ? liveData.classes
    : propClasses.map(c => ({ ...c, studentCount: 0 }));

  const totalStudents = effectiveStudents.length;
  const activeLearners = isConnected ? (liveData?.activeLearners ?? 0) : 0;
  const totalVerifiedStars = isConnected ? (liveData?.totalStars ?? 0) : 0;
  const avgQuizScore = isConnected ? (liveData?.averageScore ?? 0) : 0;

  // Counts for each of the classes
  const getCountForClass = (code: string) => {
    if (!isConnected) return 'Chưa kết nối';
    const cls = effectiveClasses.find(c => c.code === code);
    const matching = effectiveStudents.filter(s => s.classCode === code || s.classId === cls?.id);
    const count = matching.length > 0 ? matching.length : (cls?.studentCount || 0);
    return `${count} HS`;
  };

  return (
    <div className="space-y-6">
      
      {/* ==================================================================== */}
      {/* 1. INTELLIGENT TEACHING WORKSPACE: HERO BANNER & SMART METRICS       */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-br from-[#073B7A] via-[#1E40AF] to-[#7040E8] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-500/30 relative overflow-hidden space-y-6">
        {/* Glow circles */}
        <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[#00B8D9]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[#FF4F8B]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left: Teacher Profile & Title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-3xl shadow-inner shrink-0">
              👩‍🏫
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-[11px] uppercase font-black px-2.5 py-0.5 rounded-full bg-[#00B8D9]/30 text-cyan-200 border border-[#00B8D9]/40 tracking-wider">
                  Intelligent Teaching Workspace
                </span>
                
                {/* Live Server Sync Pill */}
                {isConnected ? (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Supabase Cloud Synced ({totalStudents} HS Thật)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/25 border border-amber-400/50 text-amber-200">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Chưa kết nối API Supabase (0 Học Sinh Giả)</span>
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mt-1">
                Chào mừng Cô Trần Thị Thu Trang!
              </h2>
              <p className="text-xs text-indigo-100 mt-0.5 max-w-2xl">
                Không gian Sư phạm Tương tác Thông minh • Quản lý 5 Lớp học (2.2, 4.1, 4.6, 5.2, 5.6) • Theo dõi hành trình khám phá và tiến độ thực tế
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-center">
            <button
              onClick={refreshLiveTeacherData}
              disabled={isLoadingLive}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-extrabold text-xs shadow-sm cursor-pointer transition-all disabled:opacity-50 active:scale-95"
              title="Tải lại dữ liệu thật từ máy chủ Supabase"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLive ? 'animate-spin text-amber-300' : ''}`} />
              <span>{isLoadingLive ? 'Đang đồng bộ...' : 'Làm mới Supabase'}</span>
            </button>
          </div>
        </div>

        {/* 4 LIVE MEGA INDICATORS */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Metric 1: Total Enrolled */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-cyan-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Tổng Học Sinh</span>
              <Users className="w-4 h-4 text-[#00B8D9]" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                {isConnected ? totalStudents : (isLoadingLive ? 'Đang tải...' : 'Chưa kết nối')}
              </div>
              <div className="text-[10px] text-cyan-200/80 font-medium mt-0.5">
                {isConnected ? `${effectiveClasses.length} Lớp học (${totalStudents} HS CSDL)` : 'Cần kích hoạt API Supabase'}
              </div>
            </div>
          </div>

          {/* Metric 2: Active Learners */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Đang Học Thực Tế</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-heading">
                {isConnected ? activeLearners : (isLoadingLive ? '...' : '0')}
              </div>
              <div className="text-[10px] text-blue-200/80 font-medium mt-0.5">
                Học sinh có tiến độ lưu
              </div>
            </div>
          </div>

          {/* Metric 3: Verified Stars */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-rose-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Sao Đã Xác Thực</span>
              <Award className="w-4 h-4 text-[#FF4F8B]" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-heading flex items-center gap-1">
                <span>{isConnected ? totalVerifiedStars : (isLoadingLive ? '...' : '0')}</span>
                <span className="text-lg">⭐</span>
              </div>
              <div className="text-[10px] text-rose-200/80 font-medium mt-0.5">
                Được máy chủ xác nhận
              </div>
            </div>
          </div>

          {/* Metric 4: Average Quiz Score */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-purple-200">
              <span className="text-[11px] font-bold uppercase tracking-wider">Điểm Quiz TB</span>
              <GraduationCap className="w-4 h-4 text-purple-300" />
            </div>
            <div className="mt-2">
              <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                {isConnected ? `${avgQuizScore}%` : (isLoadingLive ? '...' : '0%')}
              </div>
              <div className="text-[10px] text-purple-200/80 font-medium mt-0.5">
                Trắc nghiệm Bloom
              </div>
            </div>
          </div>
        </div>

        {/* CLASSES QUICK EXPLORER BAR */}
        <div className="relative z-10 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-amber-300">🏫</span>
            <span>Sĩ số {effectiveClasses.length} Lớp Thực tế:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {effectiveClasses.map((cls, idx) => {
              const bgColors = [
                'bg-rose-500/25 border-rose-400/40 text-rose-200',
                'bg-cyan-500/25 border-cyan-400/40 text-cyan-200',
                'bg-blue-500/25 border-blue-400/40 text-blue-200',
                'bg-purple-500/25 border-purple-400/40 text-purple-200',
                'bg-amber-500/25 border-amber-400/40 text-amber-200',
              ];
              const bg = bgColors[idx % bgColors.length];
              return (
                <button
                  key={cls.id || cls.code}
                  onClick={() => onSelectTab && onSelectTab('classes')}
                  className={`px-3 py-1 rounded-full border text-[11px] font-black cursor-pointer transition-transform hover:scale-105 ${bg}`}
                  title={`Xem chi tiết Lớp ${cls.code}`}
                >
                  <span>Lớp {cls.code}</span>
                  <span className="ml-1.5 opacity-90 font-mono">({getCountForClass(cls.code)})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. SERVER STATUS / CONFIGURATION NOTICE (IF NOT CONNECTED)           */}
      {/* ==================================================================== */}
      {!isConnected && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-5 shadow-sm space-y-2.5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-2xl bg-amber-400/20 text-amber-700 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-1">
              <h4 className="font-black text-amber-950 text-sm sm:text-base font-heading">
                Trạng thái: Chưa kết nối API giáo viên an toàn từ Supabase Production
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                {liveData?.errorMessage || 'Hệ thống đã loại bỏ hoàn toàn 197 học sinh giả và không sử dụng dữ liệu hardcode. Hiện máy chủ Supabase Production chưa cài đặt hàm RPC get_teacher_classes_summary & get_teacher_student_roster.'}
              </p>
              <div className="p-3 bg-white/80 rounded-2xl border border-amber-200/80 text-xs text-slate-700 space-y-1 mt-2">
                <p className="font-bold text-amber-950">📋 Hướng dẫn cài đặt API Giáo viên An toàn trên Supabase Production:</p>
                <ol className="list-decimal list-inside space-y-0.5 text-slate-600 text-[11px]">
                  <li>Mở <strong>Supabase Dashboard (Dự án Production)</strong> &gt; Chọn <strong>SQL Editor</strong>.</li>
                  <li>Dán toàn bộ nội dung file <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900 font-bold font-mono">supabase_production_teacher_roster_rpc.sql</code> và nhấn <strong>Run</strong>.</li>
                  <li>Quay lại giao diện này và bấm nút <strong>"Làm mới Supabase"</strong> ở góc trên bên phải.</li>
                </ol>
                <p className="text-[10.5px] text-slate-500 pt-1">
                  🔒 <em>Lưu ý bảo mật:</em> File SQL trên sử dụng cơ chế SECURITY DEFINER và phân quyền <code>is_staff()</code>, tuyệt đối không mở quyền SELECT công khai bảng <code>students</code> cho anon, không sử dụng service_role key ở frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK ACCESS BANNER: Content Approval Center */}
      {onSelectTab && activeTab !== 'approval' && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white p-4 rounded-3xl shadow-sm border border-emerald-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 rounded-2xl bg-white/20">🛡️</span>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-emerald-200 flex items-center gap-1.5">
                <span>Bản Xem Trước Thiết Kế Mới</span>
                <span className="px-2 py-0.2 bg-amber-400 text-amber-950 rounded-full text-[10px] font-extrabold">LOCAL PREVIEW</span>
              </div>
              <div className="text-sm font-black text-white">
                Trung tâm Phê duyệt & Kiểm soát Chất lượng Nội dung (Content Approval Center)
              </div>
              <div className="text-[11px] text-emerald-100">
                Xem danh sách bài học, câu hỏi, trò chơi; kiểm tra nguồn tham khảo và xuất sổ nhật ký minh chứng dự thi.
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTab('approval')}
            className="px-4 py-2 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-black shadow-md cursor-pointer transition-all shrink-0 hover:scale-102"
          >
            Mở Trung Tâm Phê Duyệt →
          </button>
        </div>
      )}

      {/* QUICK ACCESS BANNER: Smart YouTube Video Clip Selector */}
      {onSelectTab && activeTab !== 'clip_selector' && (
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-700 text-white p-4 rounded-3xl shadow-sm border border-rose-300/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 rounded-2xl bg-white/20">✂️</span>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-rose-200 flex items-center gap-1.5">
                <span>Nâng cấp Teaching Studio</span>
                <span className="px-2 py-0.2 bg-amber-400 text-amber-950 rounded-full text-[10px] font-extrabold">LOCAL TOOL</span>
              </div>
              <div className="text-sm font-black text-white">
                Bộ Chọn Đoạn Video YouTube Thông Minh (Smart YouTube Video Clip Selector)
              </div>
              <div className="text-[11px] text-rose-100">
                Cắt đoạn ngắn video YouTube bằng Start Time &amp; End Time (mm:ss) • Tự động dừng chuẩn xác • Không tải file MP4 • Xem trước trực quan
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTab('clip_selector')}
            className="px-4 py-2 rounded-2xl bg-white text-rose-900 hover:bg-rose-50 text-xs font-black shadow-md cursor-pointer transition-all shrink-0 hover:scale-102"
          >
            Mở Bộ Chọn Clip →
          </button>
        </div>
      )}

      {/* Grade-differentiated Student Experience Preview Switcher */}
      {onPreviewGradeBand && (
        <div className="bg-white p-4 rounded-3xl border border-amber-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-400 text-amber-950 font-bold">
              <Eye className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-extrabold text-slate-800">
                Grade Experience Previewer (Xem trước trải nghiệm từng khối lớp)
              </span>
              <p className="text-[11px] text-slate-500">
                Switch between grade bands to test customized lessons as your students see them:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPreviewGradeBand('grade_1_2')}
              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-colors"
            >
              🎨 Preview Grade 1–2
            </button>
            <button
              onClick={() => onPreviewGradeBand('grade_3')}
              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors"
            >
              🧭 Preview Grade 3
            </button>
            <button
              onClick={() => onPreviewGradeBand('grade_4_5')}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200 transition-colors"
            >
              🚀 Preview Grade 4–5
            </button>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 3. TEACHER STUDIO TABS CONTENT                                       */}
      {/* ==================================================================== */}

      {/* Tab NEW: Content Approval Center */}
      {activeTab === 'approval' && (
        <ContentApprovalCenter />
      )}

      {/* Tab 0: Teacher Content Studio (Giáo trình độc quyền) */}
      {activeTab === 'curriculum' && (
        <TeacherContentStudio />
      )}

      {/* Tab 1: Learning Materials */}
      {activeTab === 'materials' && (
        <LearningMaterials
          materials={materials}
          destinations={destinations}
          onAddMaterial={onAddMaterial}
          onDeleteMaterial={onDeleteMaterial}
          onTogglePublish={onTogglePublish}
        />
      )}

      {/* Tab 2: Class Management (Sử dụng danh sách lớp & học sinh thật) */}
      {activeTab === 'classes' && (
        <ClassManagement
          classes={effectiveClasses}
          students={effectiveStudents}
          destinations={destinations}
          onAddClass={onAddClass}
          onAssignTask={onAssignTask}
          onUploadRoster={onUploadRoster}
        />
      )}

      {/* Tab 3: Student Progress (Báo cáo & Xuất CSV từ dữ liệu thực tế) */}
      {activeTab === 'progress' && (
        <StudentProgressTable
          students={effectiveStudents}
          onAwardBonusStars={onAwardBonusStars}
        />
      )}

      {/* Tab 4: Learning Assessment */}
      {activeTab === 'assessment' && (
        <LearningAssessment destinations={destinations} />
      )}

      {/* Tab 5: AI Assistant */}
      {activeTab === 'ai' && (
        <AIAssistant
          destinations={destinations}
          onPublishApprovedPlan={(plan) => {
            const newMat: MaterialItem = {
              id: 'mat-' + Date.now(),
              title: plan.topic + ' (AI Curriculum Pack)',
              destinationId: 'halong',
              gradeBand: plan.gradeBand,
              category: 'Reading',
              description: `Approved lesson plan for ${plan.gradeLevel}. Includes suggested activities, custom vocabulary, and Bloom questions.`,
              fileType: 'Curriculum Plan',
              isPublished: true,
              createdAt: new Date().toISOString().split('T')[0],
              createdByName: 'Ms. Thu Trang'
            };
            onAddMaterial(newMat);
          }}
        />
      )}

      {/* Tab 6: Video Learning Academy Management */}
      {activeTab === 'videos' && (
        <TeacherVideoDashboard />
      )}

      {/* Tab 7: Smart YouTube Video Clip Selector */}
      {activeTab === 'clip_selector' && (
        <SmartYouTubeClipSelector />
      )}

    </div>
  );
};
