import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Key, 
  Calendar, 
  Send, 
  CheckCircle2, 
  School, 
  Copy, 
  X,
  FileCheck,
  Upload,
  Download,
  FileSpreadsheet,
  Printer,
  Sparkles,
  ShieldCheck,
  Eye,
  KeyRound
} from 'lucide-react';
import { ClassRoom, Destination, AssignmentItem, GradeLevel, GradeBand, StudentRosterItem } from '../../types';
import { hashAccessCode } from '../../lib/studentAuth';
import { INITIAL_CLASSES } from '../../data/initialClasses';
import { StudentAccessCardsModal } from './StudentAccessCardsModal';

interface ClassManagementProps {
  classes: ClassRoom[];
  students: StudentRosterItem[];
  destinations: Destination[];
  onAddClass: (cls: ClassRoom) => void;
  onAssignTask: (assignment: AssignmentItem) => void;
  onUploadRoster?: (newStudents: StudentRosterItem[]) => void;
}

export const ClassManagement: React.FC<ClassManagementProps> = ({
  classes,
  students,
  destinations,
  onAddClass,
  onAssignTask,
  onUploadRoster
}) => {
  // Modals state
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAccessCardsModalOpen, setIsAccessCardsModalOpen] = useState(false);

  // Selected Class States
  const [selectedClassForAssign, setSelectedClassForAssign] = useState<string>(classes[0]?.id || '');
  const [selectedClassForUpload, setSelectedClassForUpload] = useState<string>(classes[0]?.code || '4.1');
  const [selectedClassForCards, setSelectedClassForCards] = useState<string>('All');

  // Add Class Form
  const [newClassName, setNewClassName] = useState('');
  const [newClassGrade, setNewClassGrade] = useState<GradeLevel>('Grade 4');
  const [generatedCode, setGeneratedCode] = useState('4.7');

  // Assign Task Form
  const [assignmentTitle, setAssignmentTitle] = useState('Khám phá Di sản & Luyện tư duy Bloom');
  const [assignmentDestId, setAssignmentDestId] = useState(destinations[0]?.id || 'halong');
  const [assignmentDueDate, setAssignmentDueDate] = useState('2026-10-30');
  const [assignmentInstructions, setAssignmentInstructions] = useState('Hoàn thành 5 chặng bài học, luyện phát âm và đạt tối thiểu 80% điểm trắc nghiệm Bloom.');

  // Upload Roster State
  const [parsedPreviewList, setParsedPreviewList] = useState<{
    studentCode: string;
    name: string;
    classCode: string;
    accessCode: string;
  }[]>([]);
  const [uploadFileName, setUploadFileName] = useState<string>('');
  const [uploadError, setUploadError] = useState<string>('');

  // 1. Download Sample CSV Template
  const handleDownloadTemplate = () => {
    const csvContent = '\uFEFF' + [
      'Mã Học Sinh,Họ và Tên,Mã Lớp,Mã Truy Cập',
      'STU-4103,Lê Hoàng Nam,4.1,VD4103',
      'STU-4104,Trần Ngọc Hân,4.1,VD4104',
      'STU-2203,Vũ Minh Quân,2.2,VD2203'
    ].join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mau_Danh_Sach_Hoc_Sinh_VietDiscovery.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 2. Handle CSV / Excel File Upload & Parse
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadError('');
    if (!file) return;

    setUploadFileName(file.name);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);

        if (lines.length < 2) {
          setUploadError('Tệp không có dữ liệu học sinh hoặc sai cấu trúc.');
          return;
        }

        const parsed: {
          studentCode: string;
          name: string;
          classCode: string;
          accessCode: string;
        }[] = [];

        // Skip header row
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
          if (cols.length >= 2) {
            const code = cols[0] || `STU-${selectedClassForUpload.replace('.', '')}${String(i).padStart(2, '0')}`;
            const name = cols[1];
            const cls = cols[2] || selectedClassForUpload;
            const access = cols[3] || `VD${cls.replace('.', '')}${String(i).padStart(2, '0')}`;

            if (name) {
              parsed.push({
                studentCode: code,
                name: name,
                classCode: cls,
                accessCode: access
              });
            }
          }
        }

        if (parsed.length === 0) {
          setUploadError('Không tìm thấy dòng học sinh hợp lệ trong tệp.');
        } else {
          setParsedPreviewList(parsed);
        }
      } catch (err) {
        setUploadError('Lỗi đọc tệp. Hãy đảm bảo tệp lưu dưới định dạng CSV hoặc bảng UTF-8.');
      }
    };

    reader.readAsText(file);
  };

  // 3. Confirm Roster Commit
  const handleCommitRoster = async () => {
    if (parsedPreviewList.length === 0) return;

    const newRosterItems: StudentRosterItem[] = [];

    for (const item of parsedPreviewList) {
      const targetClass = classes.find(c => c.code === item.classCode)
        || INITIAL_CLASSES.find(c => c.code === item.classCode)
        || classes[0];

      const clsCode = item.classCode || targetClass?.code || '4.1';
      const gradeLevel: GradeLevel = clsCode.startsWith('2') ? 'Grade 2' : (clsCode.startsWith('5') ? 'Grade 5' : 'Grade 4');
      const gradeBand: GradeBand = clsCode.startsWith('2') ? 'grade_1_2' : (clsCode.startsWith('3') ? 'grade_3' : 'grade_4_5');
      const clsName = targetClass?.name || `Lớp ${clsCode}`;
      const hash = await hashAccessCode(item.accessCode);

      newRosterItems.push({
        id: item.studentCode,
        studentCode: item.studentCode,
        name: item.name,
        classId: targetClass?.id || `cls-${clsCode.replace('.', '')}`,
        classCode: clsCode,
        className: clsName,
        gradeLevel: targetClass?.gradeLevel || gradeLevel,
        gradeBand: targetClass?.gradeBand || gradeBand,
        accessCode: item.accessCode, // for teacher distribution
        accessCodeHash: hash,
        failedPinAttempts: 0,
        isLocked: false,
        completedDestinations: 0,
        totalStars: 200,
        averageScore: 0,
        lastActive: 'Vừa nạp danh sách',
        status: 'offline'
      });
    }

    if (onUploadRoster) {
      onUploadRoster(newRosterItems);
    }

    alert(`🎉 Đã nạp thành công ${newRosterItems.length} học sinh vào hệ thống VietDiscovery!`);
    setIsUploadModalOpen(false);
    setParsedPreviewList([]);
    setUploadFileName('');
  };

  // 4. Handle Create New Class
  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    const gradeBand: GradeBand = (newClassGrade === 'Grade 1' || newClassGrade === 'Grade 2') 
      ? 'grade_1_2' 
      : (newClassGrade === 'Grade 3' ? 'grade_3' : 'grade_4_5');

    const newClass: ClassRoom = {
      id: 'cls-' + Date.now(),
      name: newClassName,
      code: generatedCode,
      gradeLevel: newClassGrade,
      gradeBand: gradeBand,
      teacherId: 'teacher-trang',
      teacherName: 'Ms. Thu Trang',
      studentCount: 0,
      activeAssignments: 1,
      schoolYear: '2026-2027'
    };
    onAddClass(newClass);
    setIsAddClassModalOpen(false);
    setNewClassName('');
  };

  // 5. Handle Create Assignment
  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    const targetClass = classes.find(c => c.id === selectedClassForAssign);
    const newAssignment: AssignmentItem = {
      id: 'asg-' + Date.now(),
      classId: selectedClassForAssign,
      destinationId: assignmentDestId,
      title: assignmentTitle,
      dueDate: assignmentDueDate,
      instructions: assignmentInstructions,
      gradeLevel: targetClass ? targetClass.gradeLevel : 'Grade 4'
    };
    onAssignTask(newAssignment);
    setIsAssignModalOpen(false);
    alert('Đã giao nhiệm vụ thành công cho toàn bộ học sinh trong lớp!');
  };

  // Filter students for Access Cards Modal
  const displayedStudentsForCards = students.filter(s => 
    selectedClassForCards === 'All' ? true : s.classCode === selectedClassForCards
  );

  return (
    <div className="space-y-6">
      
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
            <span>Quản lý 5 Lớp Học & Danh Sách Học Sinh</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
              5 Classes
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Cô Thu Trang quản lý 5 lớp: <strong>2.2</strong>, <strong>4.1</strong>, <strong>4.6</strong>, <strong>5.2</strong>, <strong>5.6</strong> • Tải danh sách CSV/Excel & in thẻ mã truy cập
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Upload Roster Button */}
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-200 transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>Tải Danh Sách (CSV / Excel)</span>
          </button>

          {/* Print Access Cards Button */}
          <button
            onClick={() => setIsAccessCardsModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-xs shadow-xs transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Thẻ Truy Cập Học Sinh</span>
          </button>

          {/* Add Assignment Button */}
          <button
            onClick={() => setIsAssignModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Giao Bài</span>
          </button>
        </div>
      </div>

      {/* 5 Classes Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((cls) => {
          const classStudents = students.filter(s => s.classCode === cls.code);
          const studentCount = classStudents.length > 0 ? classStudents.length : cls.studentCount;

          return (
            <div
              key={cls.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group relative overflow-hidden"
            >
              {/* Subtle top color band */}
              <div className={`h-1.5 absolute top-0 left-0 right-0 ${
                cls.code === '2.2' ? 'bg-rose-500' :
                cls.code.startsWith('4') ? 'bg-indigo-500' : 'bg-emerald-500'
              }`} />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-9 h-9 rounded-2xl flex items-center justify-center font-extrabold text-sm text-white shadow-xs ${
                      cls.code === '2.2' ? 'bg-rose-500' :
                      cls.code.startsWith('4') ? 'bg-indigo-600' : 'bg-emerald-600'
                    }`}>
                      {cls.code}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base font-heading">
                        {cls.name}
                      </h4>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {cls.gradeLevel} • Năm học {cls.schoolYear}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono">
                    Mã: {cls.code}
                  </span>
                </div>

                {/* Class Metrics */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-extrabold text-slate-800 text-lg">
                      {studentCount}
                    </div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">
                      Học sinh đã nạp
                    </div>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="font-extrabold text-indigo-600 text-lg">
                      {cls.activeAssignments}
                    </div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">
                      Nhiệm vụ đang giao
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for this Class */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedClassForCards(cls.code);
                      setIsAccessCardsModalOpen(true);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Xem Mã Truy Cập</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedClassForAssign(cls.id);
                      setIsAssignModalOpen(true);
                    }}
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                    title="Giao bài tập cho lớp"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSelectedClassForUpload(cls.code);
                    setIsUploadModalOpen(true);
                  }}
                  className="w-full py-1.5 px-3 rounded-xl border border-dashed border-slate-300 hover:border-indigo-400 text-slate-500 hover:text-indigo-600 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  <span>Nạp thêm học sinh lớp {cls.code}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: UPLOAD ROSTER VIA CSV OR EXCEL                   */}
      {/* ========================================================= */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-indigo-600">
                <FileSpreadsheet className="w-6 h-6" />
                <h4 className="font-extrabold text-slate-900 text-lg font-heading">
                  Tải Lên Danh Sách Học Sinh (CSV / Excel)
                </h4>
              </div>
              <button
                onClick={() => { setIsUploadModalOpen(false); setParsedPreviewList([]); setUploadFileName(''); }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Tải lên danh sách học sinh đã được phê duyệt. Hệ thống sẽ <strong>tự động băm bảo mật (SHA-256)</strong> các mã truy cập để bảo vệ quyền riêng tư của các em.
            </p>

            {/* Target Class Selection & Download Template */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
              <div>
                <label className="text-xs font-bold text-indigo-950 block mb-1">
                  Chọn Lớp mục tiêu để nạp:
                </label>
                <select
                  value={selectedClassForUpload}
                  onChange={(e) => setSelectedClassForUpload(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-indigo-300 text-xs font-bold bg-white text-indigo-900"
                >
                  {classes.map(c => (
                    <option key={c.id} value={c.code}>
                      Lớp {c.code} — {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={handleDownloadTemplate}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-indigo-300 text-indigo-700 hover:bg-indigo-100 text-xs font-bold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải tệp mẫu CSV (.csv)</span>
              </button>
            </div>

            {/* File Upload Box */}
            <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-indigo-500 text-center space-y-2 bg-slate-50 transition-colors">
              <Upload className="w-8 h-8 text-indigo-600 mx-auto" />
              <div className="font-extrabold text-slate-800 text-xs sm:text-sm">
                Kéo thả hoặc chọn tệp danh sách (.csv, .xlsx, .txt)
              </div>
              <p className="text-[11px] text-slate-400">
                Các cột khuyến nghị: <code>Mã Học Sinh, Họ và Tên, Mã Lớp, Mã Truy Cập</code>
              </p>
              <label className="inline-block mt-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs cursor-pointer shadow-sm shadow-indigo-200 transition-all">
                <span>Chọn tệp từ máy tính</span>
                <input
                  type="file"
                  accept=".csv,.txt,.xlsx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Error Message */}
            {uploadError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
                ⚠️ {uploadError}
              </div>
            )}

            {/* Preview Parsed Table */}
            {parsedPreviewList.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Đã nhận diện {parsedPreviewList.length} học sinh sẵn sàng nạp:</span>
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Tệp: {uploadFileName}
                  </span>
                </div>

                <div className="max-h-52 overflow-y-auto rounded-2xl border border-slate-200 text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold sticky top-0">
                      <tr>
                        <th className="py-2.5 px-3">Mã HS</th>
                        <th className="py-2.5 px-3">Họ và Tên</th>
                        <th className="py-2.5 px-3">Lớp</th>
                        <th className="py-2.5 px-3">Mã Truy Cập</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {parsedPreviewList.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-mono font-bold text-indigo-700">{item.studentCode}</td>
                          <td className="py-2 px-3 font-bold text-slate-800">{item.name}</td>
                          <td className="py-2 px-3 text-slate-600">{item.classCode}</td>
                          <td className="py-2 px-3 font-mono text-emerald-700 font-semibold">{item.accessCode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => { setParsedPreviewList([]); setUploadFileName(''); }}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="button"
                    onClick={handleCommitRoster}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-200 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Xác nhận Nạp Danh Sách</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: STUDENT ACCESS CARDS (PRINT & DISTRIBUTION)       */}
      {/* ========================================================= */}
      <StudentAccessCardsModal
        isOpen={isAccessCardsModalOpen}
        onClose={() => setIsAccessCardsModalOpen(false)}
        classes={classes}
        students={students}
        initialSelectedClass={selectedClassForCards}
        onOpenUploadRoster={() => {
          setIsAccessCardsModalOpen(false);
          setIsUploadModalOpen(true);
        }}
      />

      {/* ========================================================= */}
      {/* MODAL 3: ASSIGN TASK TO CLASS                             */}
      {/* ========================================================= */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-indigo-600">
                <Send className="w-5 h-5" />
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Giao Nhiệm Vụ Cho Lớp
                </h4>
              </div>
              <button
                onClick={() => setIsAssignModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAssignment} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Chọn Lớp:</label>
                <select
                  value={selectedClassForAssign}
                  onChange={(e) => setSelectedClassForAssign(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-slate-800 bg-white"
                >
                  {classes.map(c => (
                    <option key={c.id} value={c.id}>Lớp {c.code} — {c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Điểm Đến Mục Tiêu:</label>
                <select
                  value={assignmentDestId}
                  onChange={(e) => setAssignmentDestId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-slate-800 bg-white"
                >
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.vietnameseName})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Tiêu Đề Nhiệm Vụ:</label>
                <input
                  type="text"
                  required
                  value={assignmentTitle}
                  onChange={(e) => setAssignmentTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-slate-800"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Hạn Nộp Bài:</label>
                <input
                  type="date"
                  required
                  value={assignmentDueDate}
                  onChange={(e) => setAssignmentDueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Yêu Cầu / Hướng Dẫn:</label>
                <textarea
                  rows={3}
                  value={assignmentInstructions}
                  onChange={(e) => setAssignmentInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAssignModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-extrabold shadow-sm shadow-indigo-200 hover:bg-indigo-700"
                >
                  Giao Nhiệm Vụ Ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
