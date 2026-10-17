import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Star, 
  Award, 
  CheckCircle2, 
  Filter, 
  Sparkles, 
  UserCheck,
  Download,
  FileSpreadsheet,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  Cloud
} from 'lucide-react';
import { StudentRosterItem } from '../../types';
import { loadAuthenticTeacherProgress, TeacherProgressLoadResult } from '../../lib/teacherProgressService';

interface StudentProgressTableProps {
  students: StudentRosterItem[];
  onAwardBonusStars: (studentId: string, stars: number) => void;
}

export const StudentProgressTable: React.FC<StudentProgressTableProps> = ({
  students: initialStudents,
  onAwardBonusStars
}) => {
  const [search, setSearch] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');
  const [roster, setRoster] = useState<StudentRosterItem[]>(initialStudents);
  const [loadState, setLoadState] = useState<TeacherProgressLoadResult | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch authentic progress from Supabase TEST & verified local records
  const fetchProgress = async () => {
    setIsRefreshing(true);
    try {
      const result = await loadAuthenticTeacherProgress(initialStudents);
      setRoster(result.students);
      setLoadState(result);
    } catch (err) {
      console.warn('[StudentProgressTable] Failed to load authentic progress:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [initialStudents]);

  // Extract unique classes
  const classOptions = ['All', ...Array.from(new Set(roster.map(s => s.classCode)))];

  const filtered = roster.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.classCode.toLowerCase().includes(search.toLowerCase()) ||
                          s.id.toLowerCase().includes(search.toLowerCase());
    const matchesClass = selectedClass === 'All' ? true : s.classCode === selectedClass;
    return matchesSearch && matchesClass;
  });

  // Export report to CSV with UTF-8 BOM for Microsoft Excel compatibility
  const handleExportCSV = () => {
    const headers = [
      'Mã Học Sinh',
      'Họ và Tên',
      'Mã Lớp',
      'Tên Lớp',
      'Khối Lớp',
      'Điểm Đến Đã Hoàn Thành',
      'Điểm Trung Bình (%)',
      'Tổng Số Sao Tích Lũy',
      'Thời Gian Hoạt Động Gần Nhất',
      'Trạng Thái'
    ];

    const rows = filtered.map(stu => [
      `"${stu.id}"`,
      `"${stu.name}"`,
      `"${stu.classCode}"`,
      `"${stu.className || ''}"`,
      `"${stu.gradeLevel}"`,
      stu.completedDestinations,
      `${stu.averageScore}%`,
      stu.totalStars,
      `"${stu.lastActive}"`,
      `"${stu.status === 'online' ? 'Đang trực tuyến' : 'Ngoại tuyến'}"`
    ]);

    // Prepend UTF-8 BOM (\uFEFF)
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Bao_cao_tien_do_VietDiscovery_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Real-time Cloud Connection & RLS Security Status Banner */}
      {loadState && (
        <div className={`p-4 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
          loadState.isCloudSynced 
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-900' 
            : 'bg-indigo-50/90 border-indigo-200 text-indigo-950'
        }`}>
          <div className="flex items-center gap-2.5">
            {loadState.isCloudSynced ? (
              <span className="p-2 rounded-2xl bg-emerald-500 text-white shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            ) : (
              <span className="p-2 rounded-2xl bg-indigo-600 text-white shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </span>
            )}
            <div>
              <div className="text-xs font-black flex items-center gap-2">
                <span>
                  {loadState.isCloudSynced 
                    ? `ĐÃ KẾT NỐI SUPABASE TEST CLOUD (${loadState.cloudProgressCount} bản ghi tiến độ thật)` 
                    : 'BẢO MẬT RLS SUPABASE TEST ĐANG KÍCH HOẠT'}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  loadState.isCloudSynced ? 'bg-emerald-200 text-emerald-800' : 'bg-indigo-200 text-indigo-800'
                }`}>
                  {loadState.isCloudSynced ? 'Live Sync' : 'Protected Mode'}
                </span>
              </div>
              <p className="text-[11px] opacity-80 mt-0.5">
                {loadState.isCloudSynced
                  ? 'Bảng tiến độ đang hiển thị dữ liệu học tập thật trực tiếp từ bảng student_progress trên máy chủ.'
                  : (loadState.errorMessage || 'Máy chủ Supabase TEST đang bảo vệ danh bạ và tiến độ học sinh. Hiển thị điểm số thực tế đã lưu, không cộng điểm ảo.')}
              </p>
            </div>
          </div>

          <div className="text-xs font-semibold shrink-0">
            Tổng cộng: <strong className="font-extrabold text-sm">{filtered.length}</strong> học sinh
          </div>
        </div>
      )}

      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
            <span>Tiến độ Học tập Học sinh</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Student Progress Roster
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Theo dõi số điểm đến đã đóng dấu, điểm số trắc nghiệm Bloom và tặng thưởng sao động viên
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Refresh Button */}
          <button
            onClick={fetchProgress}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300/80 transition-all cursor-pointer disabled:opacity-50"
            title="Tải lại tiến độ mới nhất từ Supabase TEST"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-600' : ''}`} />
            <span>{isRefreshing ? 'Đang tải...' : 'Làm mới'}</span>
          </button>

          {/* Search Input */}
          <div className="relative w-full sm:w-48">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Tìm theo tên/mã..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Class Filter */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 text-xs font-bold border border-slate-200 rounded-xl bg-white text-slate-700 cursor-pointer"
          >
            {classOptions.map(cls => (
              <option key={cls} value={cls}>
                {cls === 'All' ? 'Tất cả lớp' : `Lớp ${cls}`}
              </option>
            ))}
          </select>

          {/* CSV / Excel Export Button */}
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm shadow-emerald-200 transition-all cursor-pointer"
            title="Xuất bảng điểm ra tệp CSV/Excel"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất CSV</span>
          </button>
        </div>
      </div>

      {/* Roster Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-5">Học sinh (Student)</th>
                <th className="py-3.5 px-5">Lớp (Class)</th>
                <th className="py-3.5 px-5">Điểm đến đã đóng dấu</th>
                <th className="py-3.5 px-5">Điểm TB Bloom</th>
                <th className="py-3.5 px-5">Tổng số sao</th>
                <th className="py-3.5 px-5">Hoạt động gần nhất</th>
                <th className="py-3.5 px-5 text-right">Thưởng sao</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                        {stu.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-800 text-xs sm:text-sm">{stu.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">ID: {stu.id} • {stu.gradeLevel}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-indigo-700">
                    {stu.classCode}
                  </td>
                  <td className="py-4 px-5 font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{stu.completedDestinations} địa danh</span>
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      stu.averageScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                      stu.averageScore >= 75 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {stu.averageScore}%
                    </span>
                  </td>
                  <td className="py-4 px-5 font-bold text-amber-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{stu.totalStars}</span>
                    </span>
                  </td>
                  <td className="py-4 px-5 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${stu.status === 'online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                      <span>{stu.lastActive}</span>
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button
                      onClick={() => onAwardBonusStars(stu.id, 20)}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                      title="Thưởng thêm 20 sao khích lệ"
                    >
                      +20 ⭐ Thưởng
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
