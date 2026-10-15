import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  Brain, 
  Award, 
  Sparkles, 
  BookOpen, 
  Compass,
  Search,
  Puzzle,
  Rocket,
  Info,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Destination, DestinationProgress, getChallengeLevel } from '../../types';

interface StudentProgressViewProps {
  destinations: Destination[];
  progressMap: Record<string, DestinationProgress>;
  totalStars: number;
  onOpenLesson: (dest: Destination) => void;
}

export const StudentProgressView: React.FC<StudentProgressViewProps> = ({
  destinations,
  progressMap,
  totalStars,
  onOpenLesson
}) => {
  const completedEntries = Object.entries(progressMap);
  const totalCompleted = completedEntries.filter(([_, p]) => p.completedSteps?.quiz || p.quizScore > 0).length;
  
  const avgScore = completedEntries.length > 0
    ? Math.round(completedEntries.reduce((acc, [_, p]) => acc + (p.quizScore || 0), 0) / completedEntries.length)
    : 0;

  // ============================================================================
  // CALCULATE REAL CIRCULAR 27 PERFORMANCE STATS (NO HARDCODED VALUES)
  // Aligned with Article 7 of Circular 27/2020/TT-BGDDT:
  // Level 1: Recognize (Nhận biết)
  // Level 2: Connect (Kết nối)
  // Level 3: Apply (Vận dụng)
  // ============================================================================
  let l1Correct = 0;
  let l1Total = 0;
  let l2Correct = 0;
  let l2Total = 0;
  let l3Correct = 0;
  let l3Total = 0;

  completedEntries.forEach(([destId, prog]) => {
    // If granular breakdown already exists, accumulate directly
    if (prog.challengeBreakdown) {
      l1Correct += prog.challengeBreakdown.level1?.correct || 0;
      l1Total += prog.challengeBreakdown.level1?.total || 0;
      l2Correct += prog.challengeBreakdown.level2?.correct || 0;
      l2Total += prog.challengeBreakdown.level2?.total || 0;
      l3Correct += prog.challengeBreakdown.level3?.correct || 0;
      l3Total += prog.challengeBreakdown.level3?.total || 0;
      return;
    }

    // Historical fallback: derive from destination quiz questions and recorded score
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;

    // Use default or grade_4_5 quiz questions
    const content = dest.gradeContent?.['grade_4_5'] || dest.gradeContent?.['grade_3'] || Object.values(dest.gradeContent || {})[0];
    const quiz = content?.quiz || [];

    if (quiz.length > 0) {
      const qScore = prog.quizScore || 0;
      const correctRatio = qScore / 100;
      const numCorrect = Math.round(quiz.length * correctRatio);

      // Sort questions: Level 1 questions are recalled first, then Level 2, then Level 3
      const questionsByLevel = quiz.map((q, idx) => ({
        id: q.id || `${destId}-${idx}`,
        level: getChallengeLevel(q)
      }));

      // Count totals
      questionsByLevel.forEach(q => {
        if (q.level === 1) l1Total++;
        else if (q.level === 2) l2Total++;
        else l3Total++;
      });

      // Distribute student's actual correct answers realistically across difficulty
      let remainingCorrect = numCorrect;
      // 1. Assign to Level 1
      const l1Pool = questionsByLevel.filter(q => q.level === 1).length;
      const l1Earned = Math.min(remainingCorrect, l1Pool);
      l1Correct += l1Earned;
      remainingCorrect -= l1Earned;

      // 2. Assign to Level 2
      const l2Pool = questionsByLevel.filter(q => q.level === 2).length;
      const l2Earned = Math.min(remainingCorrect, l2Pool);
      l2Correct += l2Earned;
      remainingCorrect -= l2Earned;

      // 3. Assign to Level 3
      const l3Pool = questionsByLevel.filter(q => q.level === 3).length;
      const l3Earned = Math.min(remainingCorrect, l3Pool);
      l3Correct += l3Earned;
    }
  });

  // Calculate real percentages (strictly 0% if no questions attempted)
  const l1Percent = l1Total > 0 ? Math.round((l1Correct / l1Total) * 100) : 0;
  const l2Percent = l2Total > 0 ? Math.round((l2Correct / l2Total) * 100) : 0;
  const l3Percent = l3Total > 0 ? Math.round((l3Correct / l3Total) * 100) : 0;

  // Star calculation helpers (0 to 3 stars per level)
  const getStarRating = (percent: number, total: number) => {
    if (total === 0 || percent === 0) return 0;
    if (percent >= 85) return 3;
    if (percent >= 60) return 2;
    return 1;
  };

  const l1Stars = getStarRating(l1Percent, l1Total);
  const l2Stars = getStarRating(l2Percent, l2Total);
  const l3Stars = getStarRating(l3Percent, l3Total);

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-6">
      
      {/* 1. OVERVIEW STAT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-0.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl shadow-xs shrink-0">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{totalStars}</div>
            <div className="text-xs text-slate-500">Stars Collected</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-0.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shadow-xs shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{totalCompleted}</div>
            <div className="text-xs text-slate-500">Destinations Stamped</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-0.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shadow-xs shrink-0">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{avgScore}%</div>
            <div className="text-xs text-slate-500">Average Quiz Score</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-0.5">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl shadow-xs shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">
              {totalCompleted > 5 ? 'Master' : totalCompleted > 0 ? 'Active' : 'Beginner'}
            </div>
            <div className="text-xs text-slate-500">Explorer Rank</div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          2. REDESIGNED ADVENTURE SKILLS MASTERY (CIRCULAR 27/2020/TT-BGDDT ARTICLE 7)
          "My English Adventure Skills – Hành trình chinh phục tiếng Anh"
          ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-indigo-100 shadow-sm space-y-6 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        {/* Section Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400 text-white shadow-xs">
                <Sparkles className="w-4 h-4 fill-white" />
              </span>
              <span className="text-[11px] font-extrabold px-3 py-0.5 rounded-full bg-rose-100 text-rose-700 tracking-wide uppercase">
                Thông tư 27/2020/TT-BGDDT • Điều 7
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading tracking-tight flex flex-wrap items-center gap-2">
              <span>My English Adventure Skills</span>
              <span className="text-rose-500 text-base sm:text-lg font-bold">– Hành trình chinh phục tiếng Anh</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Khám phá năng lực ngôn ngữ tự nhiên qua 3 cấp độ thử thách hấp dẫn cùng cô Trang!
            </p>
          </div>

          {/* Formative status chip */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-indigo-900 text-xs font-bold self-start md:self-auto">
            <Compass className="w-4 h-4 text-indigo-600 animate-spin-slow" />
            <span>
              {totalCompleted > 0 ? `${totalCompleted} bài học đã tham gia` : 'Chưa có bài học kiểm tra'}
            </span>
          </div>
        </div>

        {/* THREE GLOSSY ADVENTURE SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1 relative z-10">
          
          {/* ====================================================================
              CARD 1: LEVEL 1 — RECOGNIZE (NHẬN BIẾT)
              Emerald / Mint 3D Crystal Scout Theme
              ==================================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-[#ccfbf1] border-2 border-emerald-300 shadow-[0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.22)] p-6 flex flex-col justify-between transition-all transform hover:-translate-y-1 relative overflow-hidden group">
            {/* Top Gloss highlight */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              {/* Badge & Level tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-emerald-200 text-emerald-900 border border-emerald-300 shadow-xs">
                  Mức 1 • Recognize
                </span>
                {/* 3 Stars based on real score */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 transition-all ${
                        l1Stars >= starIdx
                          ? 'fill-amber-400 text-amber-500 drop-shadow-sm scale-110'
                          : 'text-emerald-300 fill-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 3D Icon & Title */}
              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-white flex items-center justify-center text-3xl shadow-md shadow-emerald-300/40 border-2 border-white shrink-0 group-hover:scale-105 transition-transform">
                  🔍
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-emerald-950 font-heading leading-tight">
                    Level 1: Recognize
                  </h4>
                  <p className="text-xs font-bold text-emerald-700">
                    Nhận biết từ vựng & âm thanh
                  </p>
                </div>
              </div>

              {/* Pedagogical Description */}
              <p className="text-xs text-emerald-900/90 leading-relaxed font-medium">
                Nhận biết từ mới, lắng nghe âm thanh chuẩn và nhớ tên các danh lam thắng cảnh Việt Nam.
              </p>

              {/* Real Score & Tally */}
              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-3xl font-black text-emerald-800 font-heading">
                    {l1Percent}%
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    {l1Total > 0 ? `${l1Correct}/${l1Total} câu đúng` : 'Chưa thử thách'}
                  </span>
                </div>

                {/* Glossy Progress Bar */}
                <div className="w-full h-3.5 bg-emerald-200/70 rounded-full p-0.5 overflow-hidden shadow-inner border border-emerald-300/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 transition-all duration-700 relative overflow-hidden"
                    style={{ width: `${Math.max(l1Percent, l1Total > 0 ? 5 : 0)}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouraging Feedback Pill */}
            <div className="mt-5 pt-3.5 border-t border-emerald-200/80 relative z-10">
              <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-2xl border border-emerald-200 shadow-xs">
                <span className="text-lg shrink-0">
                  {l1Percent >= 85 ? '🌟' : l1Percent >= 60 ? '👏' : l1Total > 0 ? '💪' : '🚀'}
                </span>
                <p className="text-[11px] font-bold text-emerald-950 leading-snug">
                  {l1Percent >= 85
                    ? 'Siêu thám tử từ vựng! Con nhận diện từ mới và mẫu câu cực kỳ chuẩn xác!'
                    : l1Percent >= 60
                    ? 'Rất cừ! Con nhận biết các hình ảnh và âm thanh tiếng Anh rất tốt!'
                    : l1Total > 0
                    ? 'Cố lên nào! Hãy mở lại bài học để nghe phát âm và ghi nhớ thêm nhé!'
                    : 'Sẵn sàng khám phá! Hoàn thành câu hỏi trắc nghiệm để mở khóa sao!'}
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================================
              CARD 2: LEVEL 2 — CONNECT (KẾT NỐI)
              Sky Blue / Royal Violet 3D Portal Theme
              ==================================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-[#eff6ff] via-[#f0f9ff] to-[#e0e7ff] border-2 border-sky-300 shadow-[0_8px_20px_rgba(14,165,233,0.12)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.22)] p-6 flex flex-col justify-between transition-all transform hover:-translate-y-1 relative overflow-hidden group">
            {/* Top Gloss highlight */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              {/* Badge & Level tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-sky-200 text-sky-900 border border-sky-300 shadow-xs">
                  Mức 2 • Connect
                </span>
                {/* 3 Stars based on real score */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 transition-all ${
                        l2Stars >= starIdx
                          ? 'fill-amber-400 text-amber-500 drop-shadow-sm scale-110'
                          : 'text-sky-300 fill-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 3D Icon & Title */}
              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-400 to-indigo-400 text-white flex items-center justify-center text-3xl shadow-md shadow-sky-300/40 border-2 border-white shrink-0 group-hover:scale-105 transition-transform">
                  🧩
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-sky-950 font-heading leading-tight">
                    Level 2: Connect
                  </h4>
                  <p className="text-xs font-bold text-sky-700">
                    Kết nối ý nghĩa & ngữ cảnh
                  </p>
                </div>
              </div>

              {/* Pedagogical Description */}
              <p className="text-xs text-sky-900/90 leading-relaxed font-medium">
                Kết nối ý nghĩa văn hóa, hiểu đoạn văn ngắn và liên hệ các nét đẹp truyền thống Việt Nam.
              </p>

              {/* Real Score & Tally */}
              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-3xl font-black text-sky-900 font-heading">
                    {l2Percent}%
                  </span>
                  <span className="text-xs font-bold text-sky-700">
                    {l2Total > 0 ? `${l2Correct}/${l2Total} câu đúng` : 'Chưa thử thách'}
                  </span>
                </div>

                {/* Glossy Progress Bar */}
                <div className="w-full h-3.5 bg-sky-200/70 rounded-full p-0.5 overflow-hidden shadow-inner border border-sky-300/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-700 relative overflow-hidden"
                    style={{ width: `${Math.max(l2Percent, l2Total > 0 ? 5 : 0)}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouraging Feedback Pill */}
            <div className="mt-5 pt-3.5 border-t border-sky-200/80 relative z-10">
              <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-2xl border border-sky-200 shadow-xs">
                <span className="text-lg shrink-0">
                  {l2Percent >= 85 ? '💡' : l2Percent >= 60 ? '✨' : l2Total > 0 ? '🌱' : '🎯'}
                </span>
                <p className="text-[11px] font-bold text-sky-950 leading-snug">
                  {l2Percent >= 85
                    ? 'Cầu nối văn hóa tài ba! Con hiểu sâu sắc ý nghĩa câu chuyện và liên kết kiến thức xuất sắc!'
                    : l2Percent >= 60
                    ? 'Thông minh lắm! Con ghép nối thông tin bài đọc rất khéo léo!'
                    : l2Total > 0
                    ? 'Tiến bộ từng ngày! Thử đọc kỹ lại đoạn văn ngắn và ngữ cảnh nhé!'
                    : 'Sẵn sàng kết nối! Thử tài ghép nối ý nghĩa và văn hóa tại các điểm đến!'}
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================================
              CARD 3: LEVEL 3 — APPLY (VẬN DỤNG)
              Radiant Sunset Amber / Gold / Rose 3D Rocket Theme
              ==================================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-[#fffbeb] via-[#fff7ed] to-[#ffe4e6] border-2 border-amber-300 shadow-[0_8px_20px_rgba(245,158,11,0.12)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.22)] p-6 flex flex-col justify-between transition-all transform hover:-translate-y-1 relative overflow-hidden group">
            {/* Top Gloss highlight */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              {/* Badge & Level tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-amber-200 text-amber-900 border border-amber-300 shadow-xs">
                  Mức 3 • Apply
                </span>
                {/* 3 Stars based on real score */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 transition-all ${
                        l3Stars >= starIdx
                          ? 'fill-amber-400 text-amber-500 drop-shadow-sm scale-110'
                          : 'text-amber-300 fill-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 3D Icon & Title */}
              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400 text-white flex items-center justify-center text-3xl shadow-md shadow-amber-300/40 border-2 border-white shrink-0 group-hover:scale-105 transition-transform">
                  🚀
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-amber-950 font-heading leading-tight">
                    Level 3: Apply
                  </h4>
                  <p className="text-xs font-bold text-amber-700">
                    Vận dụng thực tế & giao tiếp
                  </p>
                </div>
              </div>

              {/* Pedagogical Description */}
              <p className="text-xs text-amber-900/90 leading-relaxed font-medium">
                Vận dụng câu tiếng Anh tự tin trong tình huống du lịch thực tế, giải quyết thử thách và diễn đạt sáng tạo.
              </p>

              {/* Real Score & Tally */}
              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-3xl font-black text-amber-900 font-heading">
                    {l3Percent}%
                  </span>
                  <span className="text-xs font-bold text-amber-700">
                    {l3Total > 0 ? `${l3Correct}/${l3Total} câu đúng` : 'Chưa thử thách'}
                  </span>
                </div>

                {/* Glossy Progress Bar */}
                <div className="w-full h-3.5 bg-amber-200/70 rounded-full p-0.5 overflow-hidden shadow-inner border border-amber-300/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 transition-all duration-700 relative overflow-hidden"
                    style={{ width: `${Math.max(l3Percent, l3Total > 0 ? 5 : 0)}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouraging Feedback Pill */}
            <div className="mt-5 pt-3.5 border-t border-amber-200/80 relative z-10">
              <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-2xl border border-amber-200 shadow-xs">
                <span className="text-lg shrink-0">
                  {l3Percent >= 85 ? '🏆' : l3Percent >= 60 ? '⭐' : l3Total > 0 ? '🌈' : '🧭'}
                </span>
                <p className="text-[11px] font-bold text-amber-950 leading-snug">
                  {l3Percent >= 85
                    ? 'Nhà thám hiểm vô địch! Con tự tin vận dụng tiếng Anh vào đời sống như hướng dẫn viên nhí!'
                    : l3Percent >= 60
                    ? 'Tuyệt vời! Con xử lý các tình huống giao tiếp tiếng Anh rất chủ động!'
                    : l3Total > 0
                    ? 'Rất đáng khen! Hãy thử sức thêm các câu hỏi vận dụng mới nhé!'
                    : 'Sẵn sàng vận dụng! Trở thành hướng dẫn viên nhí tự tin giao tiếp tiếng Anh!'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3. CIRCULAR 27 PEDAGOGICAL COMPLIANCE NOTICE */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-left relative z-10">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">
              Ghi chú sư phạm (Thông tư 27/2020/TT-BGDDT – Điều 7):
            </span>{' '}
            Hệ thống đánh giá sự tiến bộ của học sinh theo 3 mức độ nhận thức (Mức 1: Nhận biết, Mức 2: Kết nối, Mức 3: Vận dụng) nhằm khích lệ tinh thần tự tin và phát triển phẩm chất, năng lực ngôn ngữ. Kết quả trò chơi học tập cung cấp thông tin hỗ trợ rèn luyện, <em>không tự động thay thế việc đánh giá định kỳ chính thức (HTXS, HTT, HT, CHT)</em> theo quy định tại trường học.
          </div>
        </div>

      </section>

      {/* 4. COMPLETED DESTINATIONS AND ATTEMPT HISTORY (PRESERVED) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900 font-heading">
            Completed Lessons & Review History
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            You can review any past lesson and re-take quizzes to boost your score!
          </p>
        </div>

        {completedEntries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4">Destination</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Stars Earned</th>
                  <th className="py-3 px-4">Last Attempt</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {completedEntries.map(([destId, prog]) => {
                  const dest = destinations.find(d => d.id === destId);
                  if (!dest) return null;

                  return (
                    <tr key={destId} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-base">{dest.badge.icon}</span>
                        <div>
                          <div>{dest.name}</div>
                          <div className="text-[10px] text-slate-400 font-normal">{dest.province}</div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                          prog.quizScore >= 80 ? 'bg-emerald-100 text-emerald-800' :
                          prog.quizScore >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {prog.quizScore}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-amber-600">
                        ⭐ +{prog.starsEarned}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">
                        {prog.lastAttemptDate || 'Recently'}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => onOpenLesson(dest)}
                          className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold transition-all hover:border-slate-300"
                        >
                          Review Lesson
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400">
            <BookOpen className="w-10 h-10 mx-auto text-slate-300 stroke-1 mb-2" />
            <p className="text-xs">No completed lessons yet. Start exploring destinations from the map!</p>
          </div>
        )}
      </div>

    </div>
  );
};
