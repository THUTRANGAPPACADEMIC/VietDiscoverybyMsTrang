import React from 'react';
import { FileCheck2, Download, AlertTriangle, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Destination } from '../../types';

interface LearningAssessmentProps {
  destinations: Destination[];
}

export const LearningAssessment: React.FC<LearningAssessmentProps> = ({ destinations }) => {
  
  // Analytics by destination
  const assessmentData = [
    {
      destId: 'halong',
      name: 'Ha Long Bay',
      completionRate: 92,
      avgScore: 88,
      weakestBloomLevel: 'Analyze',
      commonMistake: 'Confusing rock pillar geological names with cave stalactites.',
      recommendedReview: 'Short visual flashcard review on cave limestone formation.'
    },
    {
      destId: 'hanoi',
      name: 'Hanoi Capital',
      completionRate: 85,
      avgScore: 82,
      weakestBloomLevel: 'Apply',
      commonMistake: 'Remembering the ancient year 1010 of Thang Long founding.',
      recommendedReview: 'Timeline matching activity connecting King Ly Thai To with the Golden Dragon.'
    },
    {
      destId: 'hue',
      name: 'Hue Imperial City',
      completionRate: 78,
      avgScore: 74,
      weakestBloomLevel: 'Understand',
      commonMistake: 'Identifying traditional instruments in Nha Nhac Court Music.',
      recommendedReview: 'Listen-and-match audio listening exercise on traditional zithers and flutes.'
    },
    {
      destId: 'danang_hoian',
      name: 'Da Nang & Hoi An',
      completionRate: 90,
      avgScore: 89,
      weakestBloomLevel: 'Remember',
      commonMistake: 'Schedule timing of the weekend Dragon Bridge fire show.',
      recommendedReview: 'Tell-the-time reading practice in English for elementary students.'
    },
    {
      destId: 'hochiminh',
      name: 'Ho Chi Minh City',
      completionRate: 84,
      avgScore: 86,
      weakestBloomLevel: 'Analyze',
      commonMistake: 'Distinguishing modern skyscrapers from historical harbors.',
      recommendedReview: 'Discussion activity on how technology and history coexist in Vietnam.'
    },
    {
      destId: 'mekong',
      name: 'Mekong River Delta',
      completionRate: 88,
      avgScore: 91,
      weakestBloomLevel: 'Understand',
      commonMistake: 'Understanding the symbol of the tall bamboo pole "cay beo".',
      recommendedReview: 'Interactive picture riddle on floating market traditions.'
    }
  ];

  const handleExportCSV = () => {
    const headers = ['Destination', 'Completion Rate (%)', 'Average Score (%)', 'Area Needing Practice', 'Common Mistake', 'Teacher Recommendation'];
    const rows = assessmentData.map(d => [
      `"${d.name}"`,
      d.completionRate,
      d.avgScore,
      `"${d.weakestBloomLevel}"`,
      `"${d.commonMistake}"`,
      `"${d.recommendedReview}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `VietDiscovery_Assessment_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Header with Export */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            Learning Assessment & Diagnostic Analytics
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Identify areas requiring reinforcement, review Bloom question difficulty, and export class reports
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export Assessment Report (CSV)</span>
        </button>
      </div>

      {/* Areas Needing Reinforcement Alert Banner */}
      <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-400 text-amber-950 font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-amber-950 text-sm">
              Pedagogical Diagnostic Alert: Cultural Heritage Music & History
            </h4>
            <p className="text-xs text-amber-900 mt-0.5 max-w-2xl leading-relaxed">
              38% of Grade 3-4 students required more than one attempt on <strong>Hue Imperial City</strong> and <strong>Hanoi History</strong> questions. We recommend providing a 5-minute bilingual video or audio flashcard before the next quiz.
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white text-amber-800 border border-amber-200 whitespace-nowrap shadow-xs">
          High Priority Review
        </span>
      </div>

      {/* Assessment Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {assessmentData.map((item) => (
          <div
            key={item.destId}
            className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">
                  {item.name}
                </span>
                <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                  item.avgScore >= 85 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  Avg: {item.avgScore}%
                </span>
              </div>

              {/* Progress bars */}
              <div className="space-y-1.5 py-2">
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                  <span>Class Completion Rate</span>
                  <span className="text-slate-800 font-bold">{item.completionRate}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${item.completionRate}%` }} />
                </div>
              </div>

              {/* Diagnosis box */}
              <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase flex items-center justify-between">
                  <span>Area Needing Practice:</span>
                  <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">
                    {item.weakestBloomLevel}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  ⚠️ {item.commonMistake}
                </p>
              </div>
            </div>

            {/* Recommendation footer */}
            <div className="pt-3 border-t border-slate-100 text-xs text-indigo-900 bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100/60 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-tight">
                <strong>Suggested Practice:</strong> {item.recommendedReview}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
