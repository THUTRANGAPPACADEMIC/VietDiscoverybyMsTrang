import React, { useState, useRef } from 'react';
import { 
  Printer, 
  X, 
  Search, 
  KeyRound, 
  Compass, 
  Sparkles, 
  Scissors, 
  Download, 
  ShieldAlert, 
  CheckCircle2, 
  School, 
  Upload, 
  Eye, 
  EyeOff, 
  LayoutGrid, 
  FileText,
  ExternalLink
} from 'lucide-react';
import { StudentRosterItem, ClassRoom } from '../../types';

interface StudentAccessCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: ClassRoom[];
  students: StudentRosterItem[];
  initialSelectedClass?: string;
  onOpenUploadRoster?: () => void;
}

export const StudentAccessCardsModal: React.FC<StudentAccessCardsModalProps> = ({
  isOpen,
  onClose,
  classes,
  students,
  initialSelectedClass = 'All',
  onOpenUploadRoster
}) => {
  const [selectedClass, setSelectedClass] = useState<string>(initialSelectedClass);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'a4_sheet'>('a4_sheet');
  const [singleStudentForPrint, setSingleStudentForPrint] = useState<StudentRosterItem | null>(null);
  const [isMasked, setIsMasked] = useState<boolean>(false);

  const printAreaRef = useRef<HTMLDivElement>(null);

  // Clean up single student print selection after print dialog closes
  React.useEffect(() => {
    const handleAfterPrint = () => {
      setSingleStudentForPrint(null);
    };
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  if (!isOpen) return null;

  // Filter students based on Class and Search Query
  const filteredStudents = students.filter(s => {
    const matchesClass = selectedClass === 'All' ? true : s.classCode === selectedClass;
    const matchesSearch = searchQuery.trim() === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.accessCode && s.accessCode.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesClass && matchesSearch;
  });

  // Students to render in print layout (either single student or all filtered)
  const studentsToPrint = singleStudentForPrint ? [singleStudentForPrint] : filteredStudents;

  // Check if any student in filtered list has masked credentials from progress RPC
  const hasMaskedCredentials = filteredStudents.some(s => 
    s.accessCode === '******' || s.studentCode.startsWith('HS-')
  );

  // Trigger print dialog
  const handlePrint = (student?: StudentRosterItem) => {
    const targets = student ? [student] : filteredStudents;
    const isTargetMasked = targets.some(s => 
      s.accessCode === '******' || s.studentCode.startsWith('HS-')
    );

    if (isTargetMasked) {
      alert("⚠️ Không thể in thẻ với mã bảo vệ ('******' hoặc 'HS-xxxx')!\n\nĐể in thẻ đăng nhập thật cho học sinh, Thầy/Cô vui lòng nạp tệp danh sách lớp (.csv) có chứa cột mã truy cập thật bằng nút 'Nạp file CSV có mã thật'.");
      if (onOpenUploadRoster) {
        onOpenUploadRoster();
      }
      return;
    }

    if (student) {
      setSingleStudentForPrint(student);
    } else {
      setSingleStudentForPrint(null);
    }
    // Allow state to flush before window.print
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Group students into pages of 6 for A4 printing (2 columns x 3 rows)
  const CARDS_PER_A4_PAGE = 6;
  const printPages: StudentRosterItem[][] = [];
  for (let i = 0; i < studentsToPrint.length; i += CARDS_PER_A4_PAGE) {
    printPages.push(studentsToPrint.slice(i, i + CARDS_PER_A4_PAGE));
  }

  // Helper color styling by Grade Band
  const getGradeTheme = (classCode: string) => {
    if (classCode === '2.2') {
      return {
        badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
        accentBg: 'from-rose-500 to-pink-600',
        borderAccent: 'border-rose-400',
        ringGlow: 'ring-rose-200'
      };
    }
    if (classCode.startsWith('4')) {
      return {
        badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
        accentBg: 'from-indigo-600 to-purple-600',
        borderAccent: 'border-indigo-400',
        ringGlow: 'ring-indigo-200'
      };
    }
    return {
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentBg: 'from-teal-600 to-emerald-600',
      borderAccent: 'border-emerald-400',
      ringGlow: 'ring-emerald-200'
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
      
      {/* SCOPED CSS FOR CRISP A4 PRINTING & EXPORT TO PDF */}
      <style>{`
        @media print {
          /* Hide all page content except the printable sheet */
          body * {
            visibility: hidden !important;
          }
          #vietdiscovery-printable-sheet,
          #vietdiscovery-printable-sheet * {
            visibility: visible !important;
          }
          #vietdiscovery-printable-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            display: block !important;
          }
          @page {
            size: A4 portrait;
            margin: 8mm 6mm;
          }
          .a4-print-page {
            width: 100% !important;
            max-width: 198mm !important;
            min-height: 280mm !important;
            margin: 0 auto !important;
            padding: 4mm !important;
            box-sizing: border-box !important;
            page-break-after: always !important;
            break-after: page !important;
          }
          .a4-card-item {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            border: 2px dashed #94a3b8 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Modal Container */}
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[94vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* =================================================================== */}
        {/* 1. MODAL HEADER & GLOBAL ACTIONS                                    */}
        {/* =================================================================== */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3 bg-gradient-to-r from-slate-50 via-white to-amber-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-200 shrink-0">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
                  Thẻ Đăng Nhập Học Sinh VietDiscovery
                </h3>
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Pilot Ready
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                In thẻ cá nhân hoặc xuất PDF dàn trang A4 có vạch cắt để phát cho học sinh học thử
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Print Button */}
            <button
              onClick={() => handlePrint()}
              disabled={filteredStudents.length === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs shadow-md shadow-indigo-200 transition-all cursor-pointer disabled:opacity-50"
              title="Mở hộp thoại in hoặc Lưu dưới dạng PDF (Ctrl+P)"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">In / Xuất PDF ({filteredStudents.length} Thẻ)</span>
              <span className="sm:hidden">In A4</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. CONTROLS: CLASS FILTER, SEARCH & VIEW MODE SWITCHER             */}
        {/* =================================================================== */}
        <div className="p-3 sm:p-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Left: Class Selection & Search */}
          <div className="flex flex-wrap items-center gap-2.5 flex-1 min-w-[280px]">
            {/* Class Dropdown */}
            <div className="flex items-center gap-1.5">
              <label className="font-bold text-slate-700 whitespace-nowrap">Chọn Lớp:</label>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSingleStudentForPrint(null);
                }}
                className="px-3 py-1.5 rounded-xl border border-slate-200 font-bold bg-white text-slate-800 shadow-2xs focus:ring-2 focus:ring-indigo-400 cursor-pointer"
              >
                <option value="All">Tất cả 5 lớp ({students.length} học sinh)</option>
                {classes.map(c => (
                  <option key={c.id} value={c.code}>
                    Lớp {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 min-w-[160px] max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tên hoặc mã..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Mask / Unmask Toggle for Projector Safety */}
            <button
              onClick={() => setIsMasked(!isMasked)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 font-bold transition-colors cursor-pointer"
              title="Ẩn mã khi trình chiếu trên máy chiếu lớp học"
            >
              {isMasked ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-amber-600" />}
              <span className="text-[11px]">{isMasked ? 'Đang ẩn mã' : 'Hiện mã'}</span>
            </button>
          </div>

          {/* Right: Layout Switcher & Total Count */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-bold text-[11px]">
              Sĩ số: <strong className="text-slate-900 font-black">{filteredStudents.length}</strong> thẻ
            </span>

            <div className="flex items-center p-0.5 rounded-xl bg-slate-200/80 border border-slate-300/80">
              <button
                onClick={() => setViewMode('a4_sheet')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                  viewMode === 'a4_sheet' 
                    ? 'bg-white text-indigo-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>Khổ In A4 (6 thẻ/trang)</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-indigo-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Xem Dạng Lưới</span>
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. SECURITY BANNER: MASKED CODE WARNING & CSV UPLOAD SHORTCUT      */}
        {/* =================================================================== */}
        {hasMaskedCredentials && (
          <div className="mx-4 mt-3 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <strong className="font-extrabold text-amber-900">Lưu ý bảo mật về Mã Đăng Nhập:</strong>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  Một số học sinh đang được hiển thị với mã bảo vệ (<code>******</code> hoặc <code>HS-xxxx</code>) do chính sách bảo mật máy chủ RPC. Để xuất thẻ có mã đăng nhập thật cho học sinh, Thầy/Cô có thể tải lên tệp danh sách lớp (.csv) có cột mã truy cập.
                </p>
              </div>
            </div>

            {onOpenUploadRoster && (
              <button
                onClick={onOpenUploadRoster}
                className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-[11px] shadow-xs transition-all shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Nạp file CSV có mã thật</span>
              </button>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* 4. CARDS DISPLAY VIEWPORT (SCROLLABLE ON SCREEN)                   */}
        {/* =================================================================== */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/60">
          
          {filteredStudents.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 text-slate-500 space-y-3">
              <Compass className="w-10 h-10 text-slate-300 mx-auto animate-spin-slow" />
              <p className="font-extrabold text-base text-slate-700">Không tìm thấy học sinh nào phù hợp</p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Vui lòng kiểm tra lại bộ lọc Lớp hoặc từ khóa tìm kiếm. Nếu lớp chưa có học sinh, Thầy/Cô có thể nạp danh sách bằng file CSV.
              </p>
            </div>
          ) : viewMode === 'grid' ? (
            
            /* =============================================================== */
            /* 4A. INTERACTIVE GRID VIEW                                       */
            /* =============================================================== */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStudents.map((stu) => {
                const theme = getGradeTheme(stu.classCode);
                const displayCode = isMasked ? '••••••' : (stu.accessCode || stu.studentCode);

                return (
                  <div
                    key={stu.id}
                    className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative group"
                  >
                    {/* Top Ribbon */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                          VietDiscovery 3D Pass
                        </span>
                      </div>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${theme.badgeBg}`}>
                        Lớp {stu.classCode}
                      </span>
                    </div>

                    {/* Student Name & Class */}
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">
                        {stu.name}
                      </h4>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {stu.className || `Lớp ${stu.classCode}`} • {stu.gradeLevel}
                      </div>
                    </div>

                    {/* Access Code Highlight Box */}
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-center space-y-0.5">
                      <div className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider flex items-center justify-center gap-1">
                        <KeyRound className="w-3 h-3 text-amber-600" />
                        <span>MÃ ĐĂNG NHẬP (ACCESS CODE)</span>
                      </div>
                      <div className="font-mono font-black text-lg sm:text-xl text-amber-950 tracking-wider">
                        {displayCode}
                      </div>
                    </div>

                    {/* Mini Quick Steps */}
                    <div className="text-[10px] text-slate-500 bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
                      <div>🌐 <strong>vietdiscoverybymstrang.vercel.app</strong></div>
                      <div>👉 Chọn lớp <strong>{stu.classCode}</strong> • Nhập tên &amp; mã thẻ</div>
                    </div>

                    {/* Actions: Print Single Card */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                      <button
                        onClick={() => handlePrint(stu)}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-extrabold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                        title="In riêng thẻ này cho học sinh"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>In Thẻ Này</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          ) : (
            
            /* =============================================================== */
            /* 4B. A4 PRINT SHEET VIEW (SẴN SÀNG IN & CẮT THEO VIỀN)           */
            /* =============================================================== */
            <div className="space-y-6">
              <div className="bg-white p-3 rounded-2xl border border-indigo-200 text-indigo-900 text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-indigo-600" />
                  <span>
                    Chế độ dàn trang A4: <strong>6 thẻ lớn trên 1 trang</strong> (2 cột x 3 hàng). Có vạch cắt nét đứt và chú thích kéo ✂️.
                  </span>
                </span>
                <span className="text-[11px] font-bold text-indigo-700">
                  Tổng {printPages.length} trang A4
                </span>
              </div>

              {printPages.map((pageCards, pageIdx) => (
                <div
                  key={pageIdx}
                  className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-300 shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 pb-2 border-b border-slate-200">
                    <span>Trang A4 #{pageIdx + 1} / {printPages.length}</span>
                    <span>Lớp: {selectedClass === 'All' ? 'Toàn bộ' : `Lớp ${selectedClass}`}</span>
                  </div>

                  {/* 2-Column Grid for A4 Page */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pageCards.map((stu) => {
                      const theme = getGradeTheme(stu.classCode);
                      const displayCode = isMasked ? '••••••' : (stu.accessCode || stu.studentCode);

                      return (
                        <div
                          key={stu.id}
                          className="rounded-2xl border-2 border-dashed border-slate-300 p-4 bg-gradient-to-br from-white via-slate-50/50 to-amber-50/30 flex flex-col justify-between space-y-2.5 relative shadow-2xs hover:border-indigo-400 transition-colors"
                        >
                          {/* Cut Marker Badge */}
                          <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[9px] font-black flex items-center gap-1 border border-slate-300">
                            <Scissors className="w-2.5 h-2.5" />
                            <span>Cắt theo đường này</span>
                          </div>

                          {/* Brand Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base">🧭</span>
                              <div>
                                <div className="text-[10px] font-black tracking-wide text-slate-900 uppercase">
                                  VIETDISCOVERY 3D
                                </div>
                                <div className="text-[8.5px] font-bold text-rose-600">
                                  by Ms. Trang
                                </div>
                              </div>
                            </div>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${theme.badgeBg}`}>
                              Lớp {stu.classCode} • {stu.gradeLevel}
                            </span>
                          </div>

                          {/* Student Identity */}
                          <div>
                            <div className="text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider">
                              Thẻ Học Sinh (Student Access Pass)
                            </div>
                            <h4 className="font-black text-slate-900 text-base sm:text-lg font-heading leading-tight mt-0.5">
                              {stu.name}
                            </h4>
                          </div>

                          {/* Access Code Box */}
                          <div className="p-2.5 rounded-xl bg-amber-50 border-2 border-amber-300 text-center">
                            <div className="text-[9px] font-extrabold text-amber-800 uppercase tracking-wider">
                              🔑 Mã Đăng Nhập (Access Code):
                            </div>
                            <div className="font-mono font-black text-xl text-amber-950 tracking-wider">
                              {displayCode}
                            </div>
                          </div>

                          {/* 3 Steps Guide for Student & Parents */}
                          <div className="text-[9.5px] text-slate-600 bg-white p-2 rounded-xl border border-slate-200 space-y-0.5 leading-tight">
                            <div>🌐 Website: <strong className="text-indigo-700">vietdiscoverybymstrang.vercel.app</strong></div>
                            <div>1️⃣ Vào website &rarr; Chọn đúng <strong>Lớp {stu.classCode}</strong></div>
                            <div>2️⃣ Nhập Họ và tên: <strong>{stu.name}</strong></div>
                            <div>3️⃣ Nhập Mã đăng nhập: <strong className="text-amber-800 font-mono">{displayCode}</strong></div>
                          </div>

                          {/* Card Footer */}
                          <div className="flex items-center justify-between text-[8.5px] text-slate-400 pt-1">
                            <span>Bảo quản cẩn thận • Dành cho học sinh</span>
                            <button
                              onClick={() => handlePrint(stu)}
                              className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-0.5 cursor-pointer no-print"
                            >
                              <Printer className="w-2.5 h-2.5" />
                              <span>In thẻ này</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          )}
        </div>

        {/* =================================================================== */}
        {/* 5. MODAL FOOTER                                                     */}
        {/* =================================================================== */}
        <div className="p-3 sm:p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-500 text-[11px] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Mẹo: Khi mở hộp thoại in, chọn <strong>"Save as PDF"</strong> (Lưu dưới dạng PDF) để có tệp PDF phát cho học sinh bất kỳ lúc nào.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Đóng
            </button>

            <button
              onClick={() => handlePrint()}
              disabled={filteredStudents.length === 0}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              <span>In Toàn Bộ Lớp ({filteredStudents.length} thẻ)</span>
            </button>
          </div>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 6. HIDDEN PRINTABLE CONTAINER FOR BROWSER PRINT ENGINE               */}
      {/* ===================================================================== */}
      <div id="vietdiscovery-printable-sheet" className="hidden">
        {printPages.map((pageCards, pageIdx) => (
          <div key={pageIdx} className="a4-print-page">
            
            {/* Sheet Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #cbd5e1', paddingBottom: '3mm', marginBottom: '4mm' }}>
              <div>
                <h2 style={{ fontSize: '14pt', fontWeight: '900', margin: 0, color: '#0f172a' }}>
                  VIETDISCOVERY 3D — THẺ ĐĂNG NHẬP HỌC SINH
                </h2>
                <div style={{ fontSize: '8pt', color: '#64748b' }}>
                  Giáo viên phụ trách: Cô Trần Thị Thu Trang • Năm học 2026-2027 • Trang {pageIdx + 1}/{printPages.length}
                </div>
              </div>
              <div style={{ fontSize: '9pt', fontWeight: 'bold', color: '#4338ca', textAlign: 'right' }}>
                Lớp: {selectedClass === 'All' ? 'Toàn bộ 5 Lớp' : `Lớp ${selectedClass}`}
              </div>
            </div>

            {/* Cards Grid on A4 Page (2 columns x 3 rows) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4mm' }}>
              {pageCards.map((stu) => {
                const displayCode = stu.accessCode || stu.studentCode;

                return (
                  <div
                    key={stu.id}
                    className="a4-card-item"
                    style={{
                      borderRadius: '12px',
                      padding: '4mm',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '75mm',
                      position: 'relative'
                    }}
                  >
                    {/* Cut Marker Indicator */}
                    <div style={{ position: 'absolute', top: '-2.5mm', right: '4mm', background: '#e2e8f0', color: '#475569', fontSize: '7pt', fontWeight: 'bold', padding: '0.5mm 2mm', borderRadius: '4px' }}>
                      ✂️ Cắt theo viền này
                    </div>

                    {/* Brand Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '2mm', marginBottom: '2mm' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2mm' }}>
                        <span style={{ fontSize: '12pt' }}>🧭</span>
                        <div>
                          <div style={{ fontSize: '8pt', fontWeight: '900', color: '#0f172a' }}>VIETDISCOVERY 3D</div>
                          <div style={{ fontSize: '6.5pt', fontWeight: 'bold', color: '#e11d48' }}>by Ms. Trang</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '8pt', fontWeight: 'bold', padding: '1mm 2.5mm', background: '#e0e7ff', color: '#3730a3', borderRadius: '6px' }}>
                        Lớp {stu.classCode} • {stu.gradeLevel}
                      </div>
                    </div>

                    {/* Student Full Name */}
                    <div style={{ marginBottom: '2mm' }}>
                      <div style={{ fontSize: '7pt', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>
                        HỌ VÀ TÊN HỌC SINH
                      </div>
                      <div style={{ fontSize: '12pt', fontWeight: '900', color: '#0f172a' }}>
                        {stu.name}
                      </div>
                    </div>

                    {/* Prominent Access Code Box */}
                    <div style={{ backgroundColor: '#fef3c7', border: '1.5px solid #f59e0b', borderRadius: '8px', padding: '2.5mm', textAlign: 'center', marginBottom: '2mm' }}>
                      <div style={{ fontSize: '7.5pt', fontWeight: 'bold', color: '#92400e', textTransform: 'uppercase' }}>
                        🔑 MÃ ĐĂNG NHẬP (ACCESS CODE):
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: '14pt', fontWeight: '900', color: '#78350f', letterSpacing: '2px' }}>
                        {displayCode}
                      </div>
                    </div>

                    {/* 3 Steps Guide for Student & Parents */}
                    <div style={{ fontSize: '7.5pt', color: '#334155', backgroundColor: '#f8fafc', padding: '2mm', borderRadius: '6px', border: '1px solid #e2e8f0', lineHeight: '1.3' }}>
                      <div>🌐 Website: <strong style={{ color: '#4338ca' }}>vietdiscoverybymstrang.vercel.app</strong></div>
                      <div>1️⃣ Vào website &rarr; Chọn đúng <strong>Lớp {stu.classCode}</strong></div>
                      <div>2️⃣ Nhập Họ và tên: <strong>{stu.name}</strong></div>
                      <div>3️⃣ Nhập Mã đăng nhập: <strong style={{ color: '#b45309', fontFamily: 'monospace' }}>{displayCode}</strong></div>
                    </div>

                    {/* Card Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6.5pt', color: '#94a3b8', marginTop: '1.5mm' }}>
                      <span>Bảo quản cẩn thận • Dành riêng cho học sinh</span>
                      <span>Học tiếng Anh di sản Việt Nam</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
