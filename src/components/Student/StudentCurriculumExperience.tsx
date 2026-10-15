// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — STUDENT CURRICULUM EXPERIENCE
// Interactive English Adventure Learning for the 5 Independent Thematic Pathways
// Grades 1–5 | Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  Volume2, 
  Award, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  Play, 
  Star, 
  Headphones, 
  Mic, 
  HelpCircle, 
  Layers, 
  RotateCcw,
  GraduationCap,
  ArrowRight,
  Flame,
  ShieldCheck,
  Eye,
  Info
} from 'lucide-react';
import { 
  CurriculumLesson, 
  CurriculumAdventure, 
  AdventureThemeId, 
  Circular27CurriculumQuestion,
  LeveledVocabulary
} from '../../types/curriculum';
import { GradeLevel, GradeBand, UserProfile } from '../../types';
import { 
  CURRICULUM_ADVENTURES, 
  getCurriculumLessons 
} from '../../data/curriculumData';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

interface StudentCurriculumExperienceProps {
  user: UserProfile | null;
  activeGradeBand: GradeBand;
  onEarnStars?: (stars: number) => void;
  onOpenTeacherStudio?: () => void;
}

type LessonPlayerStage = 
  | 'briefing'
  | 'vocabulary'
  | 'sentence'
  | 'reading'
  | 'listening'
  | 'speaking'
  | 'quiz'
  | 'complete';

export const StudentCurriculumExperience: React.FC<StudentCurriculumExperienceProps> = ({
  user,
  activeGradeBand,
  onEarnStars,
  onOpenTeacherStudio
}) => {
  const [lessons] = useState<CurriculumLesson[]>(() => getCurriculumLessons());
  const [selectedAdventureId, setSelectedAdventureId] = useState<AdventureThemeId | 'all'>('all');
  
  // Grade map from GradeBand to GradeLevel default
  const defaultGradeLevel: GradeLevel = 
    activeGradeBand === 'grade_1_2' ? 'Grade 1' :
    activeGradeBand === 'grade_3' ? 'Grade 3' : 'Grade 4';
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>(defaultGradeLevel);

  // Lesson Player State
  const [activeLesson, setActiveLesson] = useState<CurriculumLesson | null>(null);
  const [currentStage, setCurrentStage] = useState<LessonPlayerStage>('briefing');
  const [activeVocabIndex, setActiveVocabIndex] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [showVietnameseTranslation, setShowVietnameseTranslation] = useState(false);

  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [totalStarsWonInLesson, setTotalStarsWonInLesson] = useState(0);

  // Filter lessons (only published lessons for students)
  const displayLessons = lessons.filter(l => {
    if (l.status !== 'published') return false;
    if (selectedAdventureId !== 'all' && l.adventureId !== selectedAdventureId) return false;
    if (selectedGrade !== 'all' && l.gradeLevel !== selectedGrade) return false;
    return true;
  });

  const handleStartLesson = (lesson: CurriculumLesson) => {
    soundEffects.playClick();
    setActiveLesson(lesson);
    setCurrentStage('briefing');
    setActiveVocabIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswersCount(0);
    setTotalStarsWonInLesson(0);
    setShowVietnameseTranslation(false);

    // Speak intro prompt
    playEnglishSpeech(
      `Welcome to ${lesson.titleEn}! Let's begin our English adventure with Captain Trang!`,
      { rate: 0.9 }
    );
  };

  const handleClosePlayer = () => {
    stopSpeech();
    setActiveLesson(null);
    setCurrentStage('briefing');
  };

  const handlePlayAudio = (text: string, rate = 0.88) => {
    soundEffects.playClick();
    setSpeakingWord(text);
    playEnglishSpeech(text, {
      rate,
      onEnd: () => setSpeakingWord(null),
      onError: () => setSpeakingWord(null)
    });
  };

  const getQuestionStars = (level: number) => {
    return level === 1 ? 5 : level === 2 ? 10 : 15;
  };

  const handleAnswerSubmit = (optionIndex: number) => {
    if (isAnswerSubmitted || !activeLesson) return;
    setSelectedOptionIndex(optionIndex);
    setIsAnswerSubmitted(true);

    const question = activeLesson.questions[currentQuestionIndex];
    if (optionIndex === question.correctIndex) {
      soundEffects.playCorrect();
      setCorrectAnswersCount(prev => prev + 1);
      const earned = getQuestionStars(question.challengeLevel);
      setTotalStarsWonInLesson(prev => prev + earned);
      onEarnStars?.(earned);
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextQuestion = () => {
    if (!activeLesson) return;
    soundEffects.playClick();
    if (currentQuestionIndex + 1 < activeLesson.questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      // Completed all questions
      soundEffects.playStarFanfare();
      setCurrentStage('complete');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 1. HERO BANNER: 5 ADVENTURES INTRO */}
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 p-6 sm:p-8 text-white shadow-xl border-3 border-white/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-200 text-xs font-black uppercase tracking-wider">
              <span>🌟</span>
              <span>Original English Adventure Curriculum</span>
              <span>•</span>
              <span>Giáo trình độc quyền Cô Trang</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-tight">
              5 Magical Adventures Across Vietnam 🇻🇳
            </h2>
            
            <p className="text-xs sm:text-sm text-indigo-100 font-medium leading-relaxed">
              Differentiated English journeys for Grades 1–5 through Vietnam’s majestic landscapes, heritage traditions, delicious cuisine, wild nature, and smart green future!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[11px] font-bold text-white/90">
              <span className="px-2.5 py-1 rounded-xl bg-white/15 border border-white/20">
                🎯 Circular 27/2020 3 Challenge Levels
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-white/15 border border-white/20">
                🗣️ Pre-A1 to A2 Extension
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-amber-400 text-amber-950 font-black">
                ✨ 100% Original Content
              </span>
            </div>
          </div>

          {/* Captain Trang Mascot & Voice Button */}
          <div className="flex flex-col items-center shrink-0">
            <div 
              onClick={() => handlePlayAudio("Welcome explorer! Choose an adventure below to learn English with me!", 0.9)}
              className="relative cursor-pointer group hover:scale-105 transition-transform"
              title="Click to hear Captain Trang!"
            >
              <img
                src="/assets/cute/captain_trang_official.png"
                alt="Captain Trang"
                className="w-28 sm:w-36 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] shadow-lg border border-white flex items-center gap-1 group-hover:bg-amber-300">
                <Volume2 className="w-3 h-3" />
                <span>Captain Trang 🎙️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ADVENTURE THEME CAROUSEL / SELECTOR (5 OFFICIAL ADVENTURES) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-950 flex items-center gap-1.5 font-heading">
            <span className="text-rose-500 text-base">🧭</span>
            <span>EXPLORE THE 5 THEMATIC ADVENTURES (5 CHẶNG THÁM HIỂM):</span>
          </div>
          
          <button
            onClick={() => setSelectedAdventureId('all')}
            className={`text-xs font-black px-3 py-1 rounded-full transition-colors cursor-pointer ${
              selectedAdventureId === 'all'
                ? 'bg-indigo-600 text-white'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            Show All (Tất cả)
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CURRICULUM_ADVENTURES.map((adv) => {
            const isSelected = selectedAdventureId === adv.id;

            return (
              <button
                key={adv.id}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedAdventureId(adv.id);
                }}
                className={`relative p-3.5 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between gap-3 group cursor-pointer border-2 shadow-sm hover:scale-102 ${
                  isSelected
                    ? `bg-gradient-to-br ${adv.bannerGradient} text-white border-white ring-4 ring-indigo-300 shadow-md`
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl p-2 rounded-2xl bg-white/20 backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform">
                    {adv.icon}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Adv {adv.orderNumber}
                  </span>
                </div>

                <div>
                  <h4 className={`text-sm font-black font-heading leading-tight truncate ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {adv.titleEn}
                  </h4>
                  <p className={`text-[11px] font-bold leading-tight mt-0.5 truncate ${
                    isSelected ? 'text-white/80' : 'text-slate-500'
                  }`}>
                    {adv.titleVi}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. GRADE BAND SELECTOR (1 to 5) */}
      <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-3xl border border-sky-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-amber-400 text-amber-950 font-bold">
            <GraduationCap className="w-4 h-4" />
          </span>
          <span className="text-xs font-black text-slate-800">
            Target Grade Pathway (Khối lớp):
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {(['all', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'] as const).map((grade) => (
            <button
              key={grade}
              onClick={() => {
                soundEffects.playClick();
                setSelectedGrade(grade);
              }}
              className={`px-3 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                selectedGrade === grade
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-200 scale-102 ring-2 ring-rose-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grade === 'all' ? 'All Grades' : grade}
            </button>
          ))}
        </div>
      </div>

      {/* 4. LESSON DISCOVERY CARDS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-black text-slate-800 font-heading flex items-center gap-2">
            <span>📚 Pilot Lessons Ready to Play ({displayLessons.length})</span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            English First • Audio-Equipped • Circular 27 Evaluated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayLessons.map((lesson) => {
            const adv = CURRICULUM_ADVENTURES.find(a => a.id === lesson.adventureId);

            return (
              <div
                key={lesson.id}
                className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all hover:scale-[1.01] flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Scenery */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={lesson.coverImage || '/destinations/halong_bay.jpg'}
                      alt={lesson.titleEn}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase text-white shadow-md bg-gradient-to-r ${adv?.bannerGradient || 'from-sky-500 to-indigo-600'}`}>
                        {adv?.icon} {adv?.titleEn}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] shadow-md border border-white">
                        {lesson.gradeLevel}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] uppercase font-black tracking-widest text-amber-300">
                        Lesson {lesson.lessonNumber} • {lesson.targetCefr}
                      </div>
                      <h3 className="text-base font-black font-heading leading-tight drop-shadow-md">
                        {lesson.titleEn}
                      </h3>
                      <p className="text-xs text-white/80 font-bold truncate">
                        {lesson.titleVi}
                      </p>
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-4 space-y-3">
                    {/* Objectives summary */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Lesson Objectives (Mục tiêu bài học):
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed line-clamp-2">
                        {lesson.learningObjectivesEn[0]}
                      </p>
                    </div>

                    {/* Quick Vocabulary Preview */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Core Vocabulary ({lesson.vocabulary.length} words):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lesson.vocabulary.slice(0, 4).map((v) => (
                          <span
                            key={v.word}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 text-[11px] font-bold"
                          >
                            <span>{v.emoji || '📖'}</span>
                            <span>{v.word}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Phonics & Sentence Preview */}
                    {lesson.speaking?.phoneticFocus && (
                      <div className="text-[11px] font-bold text-indigo-700 bg-indigo-50/80 px-2.5 py-1 rounded-xl border border-indigo-100 flex items-center gap-1.5">
                        <span>🗣️ Phonics:</span>
                        <span className="font-mono">{lesson.speaking.phoneticFocus}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => handleStartLesson(lesson)}
                    className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-xs shadow-md hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Start Adventure (Bắt đầu học)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 5. MULTI-STAGE INTERACTIVE LESSON PLAYER MODAL */}
      {/* ==================================================================== */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[36px] overflow-hidden shadow-2xl border-4 border-white flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-5 text-white flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
                  {CURRICULUM_ADVENTURES.find(a => a.id === activeLesson.adventureId)?.icon || '🧭'}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/25">
                      {activeLesson.gradeLevel} • Lesson {activeLesson.lessonNumber}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-amber-950">
                      {activeLesson.targetCefr}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black font-heading truncate mt-0.5">
                    {activeLesson.titleEn}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowVietnameseTranslation(!showVietnameseTranslation)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    showVietnameseTranslation 
                      ? 'bg-amber-400 text-amber-950 border-white shadow-xs' 
                      : 'bg-white/15 text-white hover:bg-white/25 border-white/30'
                  }`}
                  title="Toggle Vietnamese translation support"
                >
                  VN Hỗ trợ
                </button>
                <button
                  onClick={handleClosePlayer}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stage Navigation Bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center justify-between overflow-x-auto shrink-0 gap-1 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1 min-w-max">
                {[
                  { key: 'briefing', label: '1. Mission', icon: '🎯' },
                  { key: 'vocabulary', label: '2. Vocabulary', icon: '🔤' },
                  { key: 'sentence', label: '3. Sentence', icon: '💬' },
                  { key: 'reading', label: '4. Reading', icon: '📖' },
                  { key: 'listening', label: '5. Listening', icon: '🎧' },
                  { key: 'speaking', label: '6. Speaking', icon: '🎙️' },
                  { key: 'quiz', label: '7. Skills Quiz', icon: '⭐' }
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => {
                      soundEffects.playClick();
                      setCurrentStage(s.key as LessonPlayerStage);
                    }}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                      currentStage === s.key
                        ? 'bg-indigo-600 text-white shadow-xs font-black'
                        : 'hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 bg-gradient-to-b from-slate-50 to-white">
              
              {/* STAGE 1: MISSION BRIEFING */}
              {currentStage === 'briefing' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-amber-50 p-4 rounded-3xl border-2 border-amber-200 shadow-xs">
                    <img
                      src="/assets/cute/captain_trang_official.png"
                      alt="Captain Trang"
                      className="w-20 h-auto shrink-0"
                    />
                    <div className="space-y-1 text-center sm:text-left">
                      <h4 className="text-sm font-black font-heading text-amber-950">
                        Captain Trang's Explorer Challenge! 🎒
                      </h4>
                      <p className="text-xs text-amber-900 font-medium leading-relaxed">
                        "Welcome to our magical journey! Today we are exploring {activeLesson.titleEn}. Follow the steps to collect all stars and earn your badge!"
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Learning Objectives (Mục tiêu học tập):
                    </h4>
                    <div className="space-y-2">
                      {activeLesson.learningObjectivesEn.map((objEn, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold">{objEn}</p>
                            {showVietnameseTranslation && activeLesson.learningObjectivesVi[i] && (
                              <p className="text-[11px] text-slate-500 mt-0.5">{activeLesson.learningObjectivesVi[i]}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-sky-50 p-4 rounded-3xl border border-sky-200 space-y-1">
                      <span className="text-[10px] font-black uppercase text-sky-800">🗣️ Phonics Target</span>
                      <p className="font-black text-sky-950 text-sm font-mono">{activeLesson.speaking.phoneticFocus}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-3xl border border-purple-200 space-y-1">
                      <span className="text-[10px] font-black uppercase text-purple-800">🎯 Circular 27 Target</span>
                      <p className="font-black text-purple-950 text-sm">Recognize • Connect • Apply</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setCurrentStage('vocabulary');
                    }}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-sm shadow-lg hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Begin Step 1: Vocabulary (Học từ vựng)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STAGE 2: VOCABULARY & PHONICS */}
              {currentStage === 'vocabulary' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                      Step 1 of 6 • Core Vocabulary
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      Tap each word to listen and repeat! 🎧
                    </h4>
                  </div>

                  {/* Active Vocab Spotlight Card */}
                  {(() => {
                    const vocab = activeLesson.vocabulary[activeVocabIndex];
                    if (!vocab) return null;

                    return (
                      <div className="bg-white rounded-3xl p-6 border-3 border-indigo-200 shadow-md space-y-4 text-center">
                        <div className="text-5xl select-none">{vocab.emoji || '📖'}</div>
                        
                        <div>
                          <div className="flex items-center justify-center gap-2">
                            <h3 className="text-3xl font-black font-heading text-indigo-950 tracking-tight">
                              {vocab.word}
                            </h3>
                            <button
                              onClick={() => handlePlayAudio(vocab.word, 0.85)}
                              className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 transition-colors cursor-pointer"
                              title="Listen to pronunciation"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="text-sm font-mono text-indigo-600 font-bold mt-1">
                            {vocab.ipa} • <span className="italic font-normal">{vocab.partOfSpeech}</span>
                          </div>
                        </div>

                        <div className="bg-indigo-50/80 p-3.5 rounded-2xl border border-indigo-100 space-y-1">
                          <p className="text-xs text-indigo-900 font-bold">{vocab.meaningEn}</p>
                          <p className="text-xs text-slate-600 font-medium italic">"{vocab.exampleSentenceEn}"</p>
                          {showVietnameseTranslation && (
                            <p className="text-xs text-rose-600 font-bold pt-1 border-t border-indigo-200/60 mt-1">
                              Tiếng Việt: {vocab.meaningVi} ({vocab.exampleSentenceVi})
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Vocab Thumbnail Strip */}
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {activeLesson.vocabulary.map((v, idx) => (
                      <button
                        key={v.word}
                        onClick={() => {
                          soundEffects.playClick();
                          setActiveVocabIndex(idx);
                        }}
                        className={`p-2 rounded-2xl border text-center transition-all cursor-pointer ${
                          activeVocabIndex === idx
                            ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-300 scale-103'
                            : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                        }`}
                      >
                        <div className="text-xl">{v.emoji || '📖'}</div>
                        <div className="text-[11px] font-black truncate mt-1">{v.word}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('briefing');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('sentence');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Sentence Pattern</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 3: COMMUNICATIVE SENTENCE PATTERN */}
              {currentStage === 'sentence' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-purple-600">
                      Step 2 of 6 • Sentence in Action
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      Learn the sentence pattern to speak with confidence! 💬
                    </h4>
                  </div>

                  {(() => {
                    const pattern = activeLesson.sentencePatterns[0];
                    if (!pattern) return null;

                    return (
                      <div className="bg-white rounded-3xl p-6 border-3 border-purple-200 shadow-md space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black uppercase text-purple-600 tracking-wider">Pattern Rule:</span>
                          <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 text-purple-950 font-mono text-sm font-black">
                            {pattern.pattern}
                          </div>
                          {showVietnameseTranslation && (
                            <p className="text-xs text-slate-500 font-medium mt-1">
                              Ý nghĩa: {pattern.patternMeaningVi}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2 pt-2">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Dialogue in Action:</span>
                          {pattern.dialogueEn.map((d, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 group">
                              <div>
                                <span className="text-[10px] font-black text-purple-700 uppercase">{d.speaker}:</span>
                                <p className="text-xs font-black text-slate-900">{d.text}</p>
                                {showVietnameseTranslation && pattern.dialogueVi[i] && (
                                  <p className="text-[11px] text-slate-500 mt-0.5">{pattern.dialogueVi[i].text}</p>
                                )}
                              </div>
                              <button
                                onClick={() => handlePlayAudio(d.text, 0.88)}
                                className="p-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors cursor-pointer"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                          💡 Practice Prompt: {pattern.practicePromptEn}
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('vocabulary');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back to Vocab
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('reading');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Reading Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 4: LEVELED READING */}
              {currentStage === 'reading' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600">
                      Step 3 of 6 • Leveled Reading
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      {activeLesson.reading.titleEn} 📖
                    </h4>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border-3 border-emerald-200 shadow-md space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-black text-emerald-800">
                        Passage ({activeLesson.reading.wordCount} words)
                      </span>
                      <button
                        onClick={() => handlePlayAudio(activeLesson.reading.passagesEn.join(' '), 0.85)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-black flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Read Aloud</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {activeLesson.reading.passagesEn.map((p, i) => (
                        <p key={i} className="text-sm text-slate-800 leading-relaxed font-medium">
                          {p}
                        </p>
                      ))}
                    </div>

                    {showVietnameseTranslation && (
                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 font-medium leading-relaxed space-y-1">
                        <span className="font-bold">Bản dịch Tiếng Việt:</span>
                        {activeLesson.reading.passagesVi.map((pv, i) => (
                          <p key={i}>{pv}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('sentence');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('listening');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Listening</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 5: LISTENING DIALOGUE */}
              {currentStage === 'listening' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-sky-600">
                      Step 4 of 6 • Listening Dialogue
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      {activeLesson.listening.audioTitleEn} 🎧
                    </h4>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border-3 border-sky-200 shadow-md space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-black text-sky-800">
                        Speaker: {activeLesson.listening.speakerRole}
                      </span>
                      <button
                        onClick={() => handlePlayAudio(activeLesson.listening.audioScriptEn, 0.85)}
                        className="px-3 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-black flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Play Script</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 space-y-2">
                      <p className="text-xs font-bold text-slate-800 leading-relaxed">
                        "{activeLesson.listening.audioScriptEn}"
                      </p>
                      {showVietnameseTranslation && (
                        <p className="text-[11px] text-slate-500 italic pt-1 border-t border-sky-200">
                          {activeLesson.listening.audioScriptVi}
                        </p>
                      )}
                    </div>

                    {/* Comprehension check question */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                      <span className="text-[10px] font-black uppercase text-sky-700">Comprehension Question:</span>
                      <p className="text-xs font-black text-slate-900">{activeLesson.listening.questionEn}</p>
                      <div className="space-y-1.5">
                        {activeLesson.listening.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              if (i === activeLesson.listening.correctIndex) {
                                soundEffects.playCorrect();
                                alert("Correct listening answer! ⭐");
                              } else {
                                soundEffects.playWrong();
                              }
                            }}
                            className="w-full text-left p-2.5 rounded-xl text-xs bg-slate-50 hover:bg-sky-50 hover:border-sky-300 border border-slate-200 transition-colors cursor-pointer"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('reading');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('speaking');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Speaking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 6: SPEAKING ADVENTURE */}
              {currentStage === 'speaking' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-pink-600">
                      Step 5 of 6 • Speaking Challenge
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      Speak clearly and earn stars! 🎙️
                    </h4>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border-3 border-pink-200 shadow-md space-y-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-2xl">
                      🎤
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Your Prompt:</span>
                      <h3 className="text-base font-black font-heading text-slate-900">
                        {activeLesson.speaking.promptEn}
                      </h3>
                      {showVietnameseTranslation && (
                        <p className="text-xs text-slate-500">{activeLesson.speaking.promptVi}</p>
                      )}
                    </div>

                    <div className="p-4 bg-pink-50 rounded-2xl border border-pink-200 text-left space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-pink-800">Target Sentence (Mẫu câu chuẩn):</span>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-black text-pink-950 font-heading">
                          "{activeLesson.speaking.targetSentenceEn}"
                        </p>
                        <button
                          onClick={() => handlePlayAudio(activeLesson.speaking.targetSentenceEn, 0.85)}
                          className="p-2 rounded-xl bg-pink-200 text-pink-800 hover:bg-pink-300 transition-colors cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-slate-600">
                        Phonics Focus: <span className="font-mono font-bold text-pink-700">{activeLesson.speaking.phoneticFocus}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          soundEffects.playStarFanfare();
                          onEarnStars?.(5);
                          alert("Great pronunciation! You practiced speaking and earned +5 bonus stars! ⭐");
                        }}
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black text-xs shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
                      >
                        <Mic className="w-4 h-4" />
                        <span>I Spoke It! (+5 Stars ⭐)</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('listening');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('quiz');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Final Step: Skills Quiz ⭐</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 7: CIRCULAR 27 SKILLS QUIZ */}
              {currentStage === 'quiz' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  {(() => {
                    const question = activeLesson.questions[currentQuestionIndex];
                    if (!question) return null;

                    const levelBadgeColor = 
                      question.challengeLevel === 1 ? 'bg-sky-500' :
                      question.challengeLevel === 2 ? 'bg-amber-500' : 'bg-rose-500';

                    return (
                      <div className="bg-white rounded-3xl p-6 border-3 border-amber-200 shadow-md space-y-4">
                        {/* Question Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white ${levelBadgeColor}`}>
                              Level {question.challengeLevel}: {question.levelNameEn} ({question.levelNameVi})
                            </span>
                            <span className="text-xs font-bold text-slate-500">
                              Question {currentQuestionIndex + 1} of {activeLesson.questions.length}
                            </span>
                          </div>
                          <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                            ⭐ +{getQuestionStars(question.challengeLevel)} Stars
                          </span>
                        </div>

                        {/* Question Text */}
                        <div className="space-y-1">
                          <h3 className="text-base font-black font-heading text-slate-900 leading-snug">
                            {question.questionEn}
                          </h3>
                          {showVietnameseTranslation && (
                            <p className="text-xs text-slate-500 font-medium">
                              {question.questionVi}
                            </p>
                          )}
                        </div>

                        {/* Options */}
                        <div className="space-y-2 pt-2">
                          {question.options.map((opt: string, optIdx: number) => {
                            let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                            if (isAnswerSubmitted) {
                              if (optIdx === question.correctIndex) {
                                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-300';
                              } else if (optIdx === selectedOptionIndex) {
                                btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                              } else {
                                btnStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-600';
                              }
                            } else if (selectedOptionIndex === optIdx) {
                              btnStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswerSubmitted}
                                onClick={() => handleAnswerSubmit(optIdx)}
                                className={`w-full p-3.5 rounded-2xl border-2 text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                              >
                                <span className="font-medium">{opt}</span>
                                {isAnswerSubmitted && optIdx === question.correctIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation on submission */}
                        {isAnswerSubmitted && (
                          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 animate-in fade-in">
                            <span className="text-[10px] font-black uppercase text-slate-500">Explanation:</span>
                            <p className="text-xs text-slate-700 font-medium">{question.explanationEn}</p>
                            {showVietnameseTranslation && (
                              <p className="text-[11px] text-slate-500 italic">{question.explanationVi}</p>
                            )}
                          </div>
                        )}

                        {/* Next question button */}
                        {isAnswerSubmitted && (
                          <button
                            onClick={handleNextQuestion}
                            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>
                              {currentQuestionIndex + 1 < activeLesson.questions.length
                                ? 'Next Question ➔'
                                : 'Complete Lesson & Collect Reward 🏆'}
                            </span>
                          </button>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* STAGE 8: COMPLETION CELEBRATION */}
              {currentStage === 'complete' && (
                <div className="text-center space-y-5 max-w-md mx-auto py-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-5xl mx-auto shadow-xl animate-bounce-subtle">
                    🏆
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-black font-heading text-slate-900">
                      Adventure Completed!
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      You conquered {activeLesson.titleEn} and mastered all 3 Circular 27 skill levels!
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-3xl border-2 border-amber-200 flex items-center justify-around">
                    <div>
                      <div className="text-2xl font-black text-amber-600">+{totalStarsWonInLesson + 10}</div>
                      <div className="text-[10px] font-bold text-amber-900">Total Stars Won ⭐</div>
                    </div>
                    <div className="h-8 w-px bg-amber-200" />
                    <div>
                      <div className="text-2xl font-black text-emerald-600">{correctAnswersCount}/{activeLesson.questions.length}</div>
                      <div className="text-[10px] font-bold text-emerald-900">Quiz Accuracy 🎯</div>
                    </div>
                  </div>

                  <button
                    onClick={handleClosePlayer}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xs shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  >
                    Return to Adventures Hub (Về trang thám hiểm)
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
