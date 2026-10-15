import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Star, 
  Award, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  Gamepad2, 
  Target, 
  Trophy, 
  RotateCcw,
  Compass,
  ChevronRight,
  Flame,
  ShieldCheck,
  Play
} from 'lucide-react';
import { 
  GradeNumber, 
  GRADE_CONFIGS, 
  GRADE_LESSONS, 
  GRADE_BADGES, 
  GRADE_CHALLENGES,
  PathwayLesson,
  GradeBadge
} from '../../data/gradePathwaysData';
import { 
  loadGradeProgress, 
  completeGradeLesson, 
  recordGameAttempt, 
  unlockGradeBadge, 
  StudentGradeProgressRecord 
} from '../../lib/gradeProgressService';
import { GameEngineHub, GameEngineType } from './Games/GameEngineHub';
import { GradeLessonModal } from './GradeLessonModal';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech } from '../../lib/speech';
import { UserProfile } from '../../types';

interface GradeDashboardProps {
  gradeNum: GradeNumber;
  user: UserProfile | null;
  onNavigateHome: () => void;
  onNavigateGrade: (grade: GradeNumber) => void;
  onEarnStars: (stars: number) => void;
}

type DashboardSection = 'journey' | 'lessons' | 'games' | 'challenges' | 'badges';

export const GradeDashboard: React.FC<GradeDashboardProps> = ({
  gradeNum,
  user,
  onNavigateHome,
  onNavigateGrade,
  onEarnStars
}) => {
  const config = GRADE_CONFIGS[gradeNum] || GRADE_CONFIGS[1];
  const lessons = GRADE_LESSONS[gradeNum] || GRADE_LESSONS[1];
  const badges = GRADE_BADGES[gradeNum] || GRADE_BADGES[1];
  const challenges = GRADE_CHALLENGES[gradeNum] || GRADE_CHALLENGES[1];

  const studentId = user?.id || 'guest';
  const classCode = user?.classCode || '4.1';

  // Section State
  const [activeSection, setActiveSection] = useState<DashboardSection>('journey');

  // Sound Toggle State
  const [isSoundOn, setIsSoundOn] = useState(() => soundEffects.isSoundEnabled());

  useEffect(() => {
    const unsubscribe = soundEffects.subscribe((enabled) => {
      setIsSoundOn(enabled);
    });
    return unsubscribe;
  }, []);

  const handleToggleSound = () => {
    const next = soundEffects.toggleSound();
    setIsSoundOn(next);
  };

  // Progress State
  const [gradeProgress, setGradeProgress] = useState<StudentGradeProgressRecord>({
    studentId,
    gradeNum,
    completedLessons: [],
    completedStations: [1],
    gamesPlayedCount: 0,
    totalStarsEarned: 0,
    averageAccuracyPercent: 0,
    unlockedBadgeIds: [],
    lastActiveAt: new Date().toISOString()
  });

  // Modal States
  const [activeLesson, setActiveLesson] = useState<PathwayLesson | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<GradeBadge | null>(null);

  // Load progress from Supabase / Local storage on grade mount
  useEffect(() => {
    loadGradeProgress(studentId, gradeNum).then((data) => {
      setGradeProgress(data);
    });
  }, [studentId, gradeNum]);

  // Handle lesson start
  const handleOpenLesson = (lesson: PathwayLesson) => {
    soundEffects.playClick();
    setActiveLesson(lesson);
  };

  // Handle lesson completion
  const handleCompleteLesson = async (lessonId: string, starsWon: number) => {
    const updated = await completeGradeLesson(studentId, gradeNum, lessonId, starsWon, classCode);
    setGradeProgress(updated);
    onEarnStars(starsWon);

    // Check if first lesson badge unlocked
    if (updated.completedLessons.length >= 1) {
      const firstBadge = badges[0];
      if (firstBadge && !updated.unlockedBadgeIds.includes(firstBadge.id)) {
        handleUnlockBadge(firstBadge);
      }
    }
  };

  // Handle game recording
  const handleRecordGame = async (gameType: GameEngineType, score: number, maxScore: number, stars: number) => {
    const attempt = {
      studentId,
      gradeNum,
      gameType,
      score,
      maxScore,
      starsEarned: stars,
      completedAt: new Date().toISOString()
    };

    const updated = await recordGameAttempt(attempt, classCode);
    setGradeProgress(updated);

    // Auto-check badges
    if (updated.gamesPlayedCount >= 1 && badges[1] && !updated.unlockedBadgeIds.includes(badges[1].id)) {
      handleUnlockBadge(badges[1]);
    }
    if (updated.totalStarsEarned >= 100 && badges[4] && !updated.unlockedBadgeIds.includes(badges[4].id)) {
      handleUnlockBadge(badges[4]);
    }
  };

  // Handle badge unlock
  const handleUnlockBadge = async (badge: GradeBadge) => {
    const { unlocked, progress: updated } = await unlockGradeBadge(
      studentId, 
      gradeNum, 
      badge.id, 
      badge.starsValue, 
      classCode
    );

    if (unlocked) {
      setGradeProgress(updated);
      onEarnStars(badge.starsValue);
      soundEffects.playBadgeUnlocked();
      setSelectedBadge(badge);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Calculate completion percentage
  const totalJourneyStations = config.learningJourney.length;
  const stationsCompletedCount = gradeProgress.completedStations.length;
  const progressPercent = Math.min(100, Math.round((stationsCompletedCount / totalJourneyStations) * 100));

  return (
    <div className="space-y-6 pb-20 sm:pb-12 animate-fade-in">
      
      {/* 1. TOP NAVIGATION & CONTROLS BAR */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border-2 border-sky-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        
        {/* Back to Grade Selection Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onNavigateHome();
          }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Grade Selection (Về chọn khối lớp)</span>
        </button>

        {/* Quick Grade Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {([1, 2, 3, 4, 5] as GradeNumber[]).map((g) => {
            const isCurrent = g === gradeNum;
            const targetCfg = GRADE_CONFIGS[g];

            return (
              <button
                key={g}
                onClick={() => {
                  soundEffects.playClick();
                  onNavigateGrade(g);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1 border ${
                  isCurrent
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <span>{targetCfg.icon}</span>
                <span>Grade {g}</span>
              </button>
            );
          })}
        </div>

        {/* Global Sound ON/OFF Toggle */}
        <button
          onClick={handleToggleSound}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border transition-all cursor-pointer ${
            isSoundOn
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
              : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
          }`}
          title="Bật/Tắt âm thanh toàn hệ thống"
        >
          {isSoundOn ? (
            <>
              <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Sound: ON 🔊</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-rose-600" />
              <span>Sound: OFF 🔇</span>
            </>
          )}
        </button>

      </div>

      {/* 2. SPECTACULAR ANIMATED WELCOME BANNER */}
      <div className={`relative overflow-hidden rounded-[32px] bg-gradient-to-r ${config.pillBg} border-3 ${config.borderStyle} p-5 sm:p-7 shadow-lg backdrop-blur-md`}>
        {/* Floating Sparkles & Clouds */}
        <div className="absolute top-2 left-6 text-2xl opacity-75 animate-bounce-subtle pointer-events-none select-none">
          ⭐
        </div>
        <div className="absolute top-3 right-8 text-xl opacity-70 animate-sparkle pointer-events-none select-none">
          ✨
        </div>
        <div className="absolute bottom-2 right-1/4 text-2xl opacity-60 pointer-events-none select-none">
          ☁️
        </div>

        {/* Golden crown for Grade 3 */}
        {config.hasCrown && (
          <div className="absolute -top-3 left-4 z-20 pointer-events-none drop-shadow-md animate-bounce-subtle">
            <img
              src="/assets/cute/golden_crown_clean.png"
              alt="Golden Crown"
              className="w-8 h-auto object-contain"
            />
          </div>
        )}

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Mascot & Voice Engine Button */}
          <div className="flex flex-col items-center shrink-0">
            <div 
              className="relative group cursor-pointer"
              onClick={() => {
                soundEffects.playClick();
                playEnglishSpeech(
                  `Welcome to ${config.title} - ${config.sub}! ${config.mottoEn}`
                );
              }}
              title="Tap to hear welcome message!"
            >
              <div className="rounded-2xl p-1 bg-white/80 shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all">
                <img
                  src={config.mascotImage}
                  alt={config.mascotName}
                  className="w-24 sm:w-28 md:w-32 h-auto rounded-xl object-contain"
                />
              </div>

              <div className="mt-1.5 px-3 py-0.5 rounded-full bg-white text-slate-800 text-[11px] font-black shadow-xs flex items-center justify-center gap-1">
                <span>{config.icon}</span>
                <span>{config.mascotName}</span>
              </div>
            </div>
          </div>

          {/* Center Titles & Mottos */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-black uppercase tracking-wider shadow-xs border border-white">
                {config.badge}
              </span>
              <span className="text-xs font-bold text-slate-700 bg-white/60 px-2.5 py-0.5 rounded-full">
                {config.cefrLevel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight leading-none text-slate-950">
              {config.title} – {config.sub}
            </h1>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-white/70 max-w-2xl space-y-1">
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 justify-center md:justify-start">
                <span>🌟</span>
                <span>"{config.mottoEn}"</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {config.mottoVi}
              </div>
            </div>
          </div>

          {/* Right Progress Card */}
          <div className="w-full md:w-auto shrink-0 bg-white/95 rounded-2xl p-4 border border-white shadow-sm text-center md:text-right space-y-2 min-w-[200px]">
            <div className="text-xs font-black uppercase text-slate-400">
              Grade Mastery Progress:
            </div>
            <div className="text-2xl sm:text-3xl font-black font-heading text-sky-600 flex items-center justify-center md:justify-end gap-1.5">
              <span>{progressPercent}%</span>
              <span className="text-xs font-normal text-slate-500">Completed</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden p-0.5">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-black text-amber-600 pt-1">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{gradeProgress.totalStarsEarned} Stars</span>
              </span>
              <span className="text-slate-600">
                {gradeProgress.completedLessons.length} Lessons done
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SUBSECTION TABS: LEARNING JOURNEY | LESSONS | GAMES | CHALLENGES | BADGES */}
      <div className="flex border-b border-slate-200/80 gap-1 overflow-x-auto select-none pt-1">
        {[
          { id: 'journey', label: 'Learning Journey (Hành Trình)', icon: '🗺️', count: `${stationsCompletedCount}/${totalJourneyStations}` },
          { id: 'lessons', label: 'Lessons (Bài Học Chuẩn)', icon: '📖', count: `${lessons.length}` },
          { id: 'games', label: 'Interactive Games (7 Trò Chơi)', icon: '🎮', count: '7' },
          { id: 'challenges', label: 'Challenges (Nhiệm Vụ)', icon: '🎯', count: `${challenges.length}` },
          { id: 'badges', label: 'Achievement Badges (Huy Hiệu)', icon: '🏆', count: `${gradeProgress.unlockedBadgeIds.length}/${badges.length}` }
        ].map(tab => {
          const isActive = activeSection === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveSection(tab.id as DashboardSection);
              }}
              className={`px-4 py-2.5 rounded-t-2xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 border-t-2 border-l border-r ${
                isActive
                  ? 'bg-white border-sky-300 text-sky-800 shadow-xs scale-102 z-10'
                  : 'bg-slate-100/70 border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                isActive ? 'bg-sky-100 text-sky-900' : 'bg-slate-200 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. SUBSECTION CONTENTS */}
      <div className="transition-all duration-300">
        
        {/* SECTION 1: LEARNING JOURNEY */}
        {activeSection === 'journey' && (
          <div className="space-y-4">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-sky-200 shadow-md">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                    Grade {gradeNum} Adventure Roadmap (Hành trình 5 Chặng Thám Hiểm)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Vượt qua từng trạm học tập, tích lũy ngôi sao và mở khóa các huy hiệu danh giá!
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black">
                  Station {stationsCompletedCount} of {totalJourneyStations}
                </div>
              </div>

              {/* Journey Stepper Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
                {config.learningJourney.map((station, idx) => {
                  const isCompleted = gradeProgress.completedStations.includes(station.stationNumber);
                  const isCurrent = !isCompleted && (idx === 0 || gradeProgress.completedStations.includes(station.stationNumber - 1));
                  const isLocked = !isCompleted && !isCurrent;

                  return (
                    <div
                      key={station.stationNumber}
                      className={`relative p-4 rounded-2xl border-2 transition-all flex flex-col justify-between min-h-[180px] shadow-xs ${
                        isCompleted
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : isCurrent
                          ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300 shadow-md scale-102 animate-pulse-subtle'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                      }`}
                    >
                      {/* Station Top Status */}
                      <div className="flex items-center justify-between">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                          isCompleted ? 'bg-emerald-500 text-white' : isCurrent ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-500'
                        }`}>
                          {isCompleted ? '✓' : station.stationNumber}
                        </span>

                        <span className="text-2xl">{station.icon}</span>
                      </div>

                      {/* Station Content */}
                      <div className="my-2 space-y-1">
                        <div className="font-black text-xs sm:text-sm leading-tight">
                          {station.titleEn}
                        </div>
                        <div className="text-[11px] font-bold opacity-80 leading-tight">
                          {station.titleVi}
                        </div>
                        <p className="text-[10px] opacity-75 line-clamp-2 mt-1">
                          {station.descriptionEn}
                        </p>
                      </div>

                      {/* Reward Pill */}
                      <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[11px] font-bold">
                        <span className="text-amber-700 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>+{station.starsReward}</span>
                        </span>
                        <span>{isCompleted ? 'Unlocked' : isCurrent ? 'Current' : 'Locked'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: LESSON CARDS */}
        {activeSection === 'lessons' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lessons.map(lesson => {
                const isLessonDone = gradeProgress.completedLessons.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-sky-200 shadow-md hover:border-sky-400 transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-black uppercase">
                          {lesson.unitTag}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          ⏱️ {lesson.durationMinutes} mins
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg font-black font-heading text-slate-900 leading-snug">
                          {lesson.titleEn}
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                          {lesson.titleVi}
                        </p>
                      </div>

                      {/* Vocabulary Chips Preview */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold uppercase text-slate-400">
                          Key Vocabulary:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {lesson.vocabulary.map((v, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1">
                              <span>{v.emoji}</span>
                              <span>{v.word}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Objectives */}
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="text-[11px] font-black uppercase text-slate-500">
                          Key Target:
                        </div>
                        <p className="text-xs font-medium text-slate-700 line-clamp-2">
                          {lesson.objectivesEn[0]} ({lesson.objectivesVi[0]})
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      {isLessonDone ? (
                        <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Completed (+35 Stars)</span>
                        </div>
                      ) : (
                        <div className="text-xs font-bold text-amber-700 flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>+35 Stars upon completion</span>
                        </div>
                      )}

                      <button
                        onClick={() => handleOpenLesson(lesson)}
                        className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{isLessonDone ? 'Review Lesson' : 'Start Lesson'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 3: INTERACTIVE GAMES (GRADE-DIFFERENTIATED 5 GAMES) */}
        {activeSection === 'games' && (
          <GameEngineHub
            gradeNum={gradeNum}
            studentId={studentId}
            onRecordGame={handleRecordGame}
            onEarnStars={onEarnStars}
          />
        )}

        {/* SECTION 4: LEARNING CHALLENGES */}
        {activeSection === 'challenges' && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-indigo-200 shadow-md space-y-4">
            <div className="border-b border-indigo-100 pb-3">
              <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                Grade {gradeNum} Missions & Quests (Nhiệm Vụ Thưởng Sao)
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Hoàn thành các nhiệm vụ hằng ngày để rinh về thật nhiều ngôi sao thám hiểm!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {challenges.map(ch => (
                <div
                  key={ch.id}
                  className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-purple-50/70 border border-indigo-200 flex items-center justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl shrink-0">
                      {ch.icon}
                    </span>
                    <div>
                      <div className="font-black text-sm text-slate-900 leading-tight">
                        {ch.titleEn}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {ch.titleVi}
                      </div>
                      <div className="text-[11px] font-bold text-amber-700 mt-1 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>+{ch.rewardStars} Stars Bounty</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      if (ch.activityType === 'lesson') setActiveSection('lessons');
                      else setActiveSection('games');
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shrink-0 cursor-pointer shadow-xs transition-transform hover:scale-105"
                  >
                    Go!
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: ACHIEVEMENT BADGES */}
        {activeSection === 'badges' && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-amber-200 shadow-md space-y-4">
            <div className="border-b border-amber-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                  Grade {gradeNum} Badges of Honor (Huy Hiệu Vinh Danh)
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Chạm vào huy hiệu để xem điều kiện mở khóa và nhận thưởng ngôi sao!
                </p>
              </div>
              <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs">
                {gradeProgress.unlockedBadgeIds.length} / {badges.length} Unlocked
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
              {badges.map(b => {
                const isUnlocked = gradeProgress.unlockedBadgeIds.includes(b.id);

                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      soundEffects.playSparkle();
                      setSelectedBadge(b);
                    }}
                    className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[160px] ${
                      isUnlocked
                        ? 'bg-gradient-to-b from-amber-50 to-orange-50 border-amber-400 shadow-md scale-102 hover:scale-105'
                        : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-80'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center text-3xl mb-2">
                      {isUnlocked ? b.icon : '🔒'}
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-black text-xs leading-tight text-slate-900">
                        {b.titleEn}
                      </div>
                      <div className="text-[10px] text-slate-500 font-bold leading-tight">
                        {b.titleVi}
                      </div>
                    </div>

                    <div className={`mt-2 text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      isUnlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isUnlocked ? 'Unlocked ✨' : 'Locked'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* 5. ACTIVE LESSON MODAL */}
      {activeLesson && (
        <GradeLessonModal
          lesson={activeLesson}
          gradeNum={gradeNum}
          isOpen={Boolean(activeLesson)}
          onClose={() => setActiveLesson(null)}
          onCompleteLesson={handleCompleteLesson}
        />
      )}

      {/* 6. BADGE DETAIL MODAL */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 text-center space-y-4 border-3 border-amber-300 shadow-2xl animate-float-gentle">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-4xl shadow-md">
              {selectedBadge.icon}
            </div>

            <div>
              <div className="text-xs uppercase font-black tracking-wider text-amber-700">
                Achievement Badge
              </div>
              <h4 className="text-xl sm:text-2xl font-black font-heading text-slate-900 mt-1">
                {selectedBadge.titleEn}
              </h4>
              <p className="text-xs text-slate-500 font-semibold">
                {selectedBadge.titleVi}
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-slate-700 space-y-1">
              <div><strong>Description:</strong> {selectedBadge.descriptionEn} ({selectedBadge.descriptionVi})</div>
              <div><strong>Unlock Condition:</strong> {selectedBadge.criteria}</div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-black text-sm">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Value: +{selectedBadge.starsValue} Stars</span>
            </div>

            <div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs cursor-pointer shadow-sm transition-transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
