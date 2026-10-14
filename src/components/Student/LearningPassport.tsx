import React from 'react';
import { Award, Star, Compass, CheckCircle2, Lock, Sparkles, Printer } from 'lucide-react';
import { Destination, DestinationProgress, UserProfile } from '../../types';

interface LearningPassportProps {
  user: UserProfile | null;
  destinations: Destination[];
  progressMap: Record<string, DestinationProgress>;
  totalStars: number;
  onOpenLesson: (dest: Destination) => void;
}

export const LearningPassport: React.FC<LearningPassportProps> = ({
  user,
  destinations,
  progressMap,
  totalStars,
  onOpenLesson
}) => {
  const completedCount = Object.values(progressMap).filter(p => p.completedSteps.quiz).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Official Passport Cover Card */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-amber-400/40 relative overflow-hidden">
        
        {/* Subtle Watermark Background */}
        <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none">
          <Compass className="w-80 h-80" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-indigo-700/60">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-indigo-950 flex items-center justify-center font-extrabold text-3xl shadow-lg shadow-amber-400/20">
              🇻🇳
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  Official Explorer Credential
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                Vietnam Discovery Passport
              </h2>
              <p className="text-xs text-indigo-200 mt-0.5">
                Issued by Ms. Thu Trang's English Studio
              </p>
            </div>
          </div>

          {/* Student Info Badge */}
          <div className="bg-indigo-950/70 backdrop-blur-xs p-4 rounded-2xl border border-indigo-600/40 text-xs space-y-1 min-w-[200px]">
            <div className="flex justify-between">
              <span className="text-indigo-300">Explorer:</span>
              <span className="font-bold text-white">{user?.fullName || 'Guest Explorer'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-300">Class:</span>
              <span className="font-bold text-amber-300">{user?.classCode || 'TRANG3A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-300">Total Stars:</span>
              <span className="font-bold text-amber-300 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {totalStars}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar in Passport */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-amber-300">{completedCount}</span> of{' '}
            <span className="font-bold">{destinations.length}</span> destinations stamped and certified.
          </div>
          <div className="w-full sm:w-64 h-2.5 bg-indigo-950 rounded-full overflow-hidden border border-indigo-700">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / Math.max(destinations.length, 1)) * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* Passport Stamps Collection Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            Passport Stamps & Adventure Badges
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Every destination completed with at least 60% score earns an authentic cultural explorer badge!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest) => {
            const prog = progressMap[dest.id];
            const isUnlocked = prog && prog.completedSteps.quiz && prog.quizScore >= 60;

            return (
              <div
                key={dest.id}
                className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-gradient-to-b from-amber-50/60 to-white border-amber-200 shadow-sm hover:shadow-md'
                    : 'bg-slate-50/70 border-slate-200 opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {dest.region} Vietnam
                    </span>
                    {isUnlocked ? (
                      <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Certified</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>

                  {/* Stamp Illustration Circle */}
                  <div className="my-4 text-center">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full border-4 border-dashed flex items-center justify-center text-3xl shadow-xs transition-transform transform hover:rotate-6 ${
                        isUnlocked
                          ? 'border-amber-400 bg-amber-100 text-amber-700 ring-4 ring-amber-100'
                          : 'border-slate-300 bg-slate-200 text-slate-400 grayscale'
                      }`}
                    >
                      {dest.badge.icon}
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-base font-heading mt-3">
                      {dest.badge.titleEn}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {dest.badge.titleVi}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-3 border-t border-slate-100 text-center">
                  {isUnlocked ? (
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-600">Score: {prog.quizScore}%</span>
                      <button
                        onClick={() => onOpenLesson(dest)}
                        className="text-indigo-600 font-bold hover:underline"
                      >
                        Review
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onOpenLesson(dest)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-all"
                    >
                      Start Journey to Unlock
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
