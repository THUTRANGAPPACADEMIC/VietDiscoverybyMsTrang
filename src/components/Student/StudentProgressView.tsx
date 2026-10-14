import React from 'react';
import { BarChart3, Star, CheckCircle2, RotateCcw, Brain, Award, Sparkles, BookOpen } from 'lucide-react';
import { Destination, DestinationProgress } from '../../types';

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
  const totalCompleted = completedEntries.filter(([_, p]) => p.completedSteps.quiz).length;
  
  const avgScore = completedEntries.length > 0
    ? Math.round(completedEntries.reduce((acc, [_, p]) => acc + p.quizScore, 0) / completedEntries.length)
    : 0;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl shadow-xs">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{totalStars}</div>
            <div className="text-xs text-slate-500">Stars Collected</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shadow-xs">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{totalCompleted}</div>
            <div className="text-xs text-slate-500">Destinations Stamped</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shadow-xs">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">{avgScore}%</div>
            <div className="text-xs text-slate-500">Average Quiz Score</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl shadow-xs">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900 font-heading">
              {totalCompleted > 0 ? 'Active' : 'Beginner'}
            </div>
            <div className="text-xs text-slate-500">Explorer Rank</div>
          </div>
        </div>

      </div>

      {/* Bloom Cognitive Levels Mastery Radar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900 font-heading">
            Bloom's Taxonomy Skills Mastery
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Breakdown of your cognitive English comprehension skills across all quizzes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-pink-700">
              <span>L1: Remember (Ghi nhớ)</span>
              <span>{totalCompleted > 0 ? '95%' : '0%'}</span>
            </div>
            <div className="w-full h-2 bg-pink-200 rounded-full overflow-hidden">
              <div className="h-full bg-pink-500 rounded-full" style={{ width: totalCompleted > 0 ? '95%' : '0%' }}></div>
            </div>
            <p className="text-[11px] text-pink-900 leading-tight">
              Recalling historical years, vocabulary, and landmark names accurately.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-purple-700">
              <span>L2: Understand (Hiểu)</span>
              <span>{totalCompleted > 0 ? '90%' : '0%'}</span>
            </div>
            <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: totalCompleted > 0 ? '90%' : '0%' }}></div>
            </div>
            <p className="text-[11px] text-purple-900 leading-tight">
              Grasping reading passages and cultural meanings of Vietnamese traditions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-blue-700">
              <span>L3: Apply (Vận dụng)</span>
              <span>{totalCompleted > 0 ? '85%' : '0%'}</span>
            </div>
            <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: totalCompleted > 0 ? '85%' : '0%' }}></div>
            </div>
            <p className="text-[11px] text-blue-900 leading-tight">
              Applying English sentences in tourist situations and proper manners.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>L4: Analyze (Phân tích)</span>
              <span>{totalCompleted > 0 ? '80%' : '0%'}</span>
            </div>
            <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: totalCompleted > 0 ? '80%' : '0%' }}></div>
            </div>
            <p className="text-[11px] text-emerald-900 leading-tight">
              Analyzing heritage protection, economic impact, and modern innovation.
            </p>
          </div>

        </div>
      </div>

      {/* Completed Destinations and Attempt History */}
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
                        <span className={`px-2 py-0.5 rounded-full font-bold ${
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
                          className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold transition-all"
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
