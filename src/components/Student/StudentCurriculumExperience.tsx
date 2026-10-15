// ==============================================================================
// VIETDISCOVERY BY MS. TRANG — STUDENT CURRICULUM EXPERIENCE
// 25 Grade-Specific Thematic Adventures (5 Grades x 5 Adventures)
// Premium Pastel Color System & Pedagogical Lesson Flow: WATCH -> LEARN -> PLAY -> CHALLENGE -> REWARD
// Aligned with Vietnam Circular 27/2020/TT-BGDDT & CEFR Primary
// ==============================================================================

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  X, 
  Play, 
  Star, 
  Headphones, 
  Mic, 
  GraduationCap,
  ArrowRight,
  Tv,
  Gamepad2,
  RefreshCw,
  Award,
  Layers,
  BookOpen
} from 'lucide-react';
import { 
  CurriculumLesson, 
  AdventureThemeId
} from '../../types/curriculum';
import { GradeLevel, GradeBand, UserProfile } from '../../types';
import { 
  CURRICULUM_ADVENTURES, 
  getCurriculumLessons,
  ADVENTURE_COLOR_SYSTEM,
  GRADE_ADVENTURES_DATA
} from '../../data/curriculumData';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';
import { RealisticVisualVocabularyCard } from './RealisticVisualVocabularyCard';
import { getVocabularyVisual } from '../../data/vocabularyVisualsRegistry';
import { ImmersiveListeningQuest } from './ImmersiveListeningQuest';

interface StudentCurriculumExperienceProps {
  user: UserProfile | null;
  activeGradeBand: GradeBand;
  onEarnStars?: (stars: number) => void;
  onOpenTeacherStudio?: () => void;
}

type LessonPlayerStage = 
  | 'briefing'
  | 'watch'
  | 'vocabulary'
  | 'sentence'
  | 'reading'
  | 'play'
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

  // Map parent activeGradeBand to GradeLevel
  const mapGradeBandToGradeLevel = (band: GradeBand): GradeLevel => {
    if (band === 'grade_1') return 'Grade 1';
    if (band === 'grade_2') return 'Grade 2';
    if (band === 'grade_3') return 'Grade 3';
    if (band === 'grade_4') return 'Grade 4';
    if (band === 'grade_5') return 'Grade 5';
    if (band === 'grade_1_2') return 'Grade 1';
    if (band === 'grade_4_5') return 'Grade 4';
    return 'Grade 1';
  };

  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'all'>(() => mapGradeBandToGradeLevel(activeGradeBand));

  // Reactive synchronization: update selectedGrade whenever parent activeGradeBand changes
  useEffect(() => {
    const target = mapGradeBandToGradeLevel(activeGradeBand);
    setSelectedGrade(target);
    setActiveLesson(null); // Clear stale open lesson
  }, [activeGradeBand]);

  // Lesson Player State
  const [activeLesson, setActiveLesson] = useState<CurriculumLesson | null>(null);
  const [currentStage, setCurrentStage] = useState<LessonPlayerStage>('briefing');
  const [activeVocabIndex, setActiveVocabIndex] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [showVietnameseTranslation, setShowVietnameseTranslation] = useState(false);

  // Video Player State inside Lesson Player
  const [isVideoMounted, setIsVideoMounted] = useState(false);

  // Interactive Game State inside Lesson Player (PLAY stage)
  const [matchedGameIds, setMatchedGameIds] = useState<string[]>([]);
  const [selectedGameItem, setSelectedGameItem] = useState<{ id: string; targetMatch: string } | null>(null);

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
    setIsVideoMounted(false);
    setMatchedGameIds([]);
    setSelectedGameItem(null);
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
    setIsVideoMounted(false);
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

  // Interactive Game Matching Handler
  const handleGameItemClick = (item: { id: string; targetMatch: string }) => {
    if (matchedGameIds.includes(item.id)) return;
    soundEffects.playClick();

    if (!selectedGameItem) {
      setSelectedGameItem(item);
    } else {
      if (selectedGameItem.id !== item.id && selectedGameItem.targetMatch === item.targetMatch) {
        soundEffects.playCorrect();
        setMatchedGameIds(prev => [...prev, selectedGameItem.id, item.id]);
        setSelectedGameItem(null);
        onEarnStars?.(5);
        setTotalStarsWonInLesson(prev => prev + 5);
      } else {
        soundEffects.playWrong();
        setSelectedGameItem(null);
      }
    }
  };

  // Adventure meta for the active grade
  const gradeAdventures = (selectedGrade !== 'all' ? GRADE_ADVENTURES_DATA[selectedGrade] : undefined) || GRADE_ADVENTURES_DATA['Grade 1'];

  return (
    <div className="space-y-6">
      
      {/* 1. HERO BANNER: 5 ADVENTURES INTRO */}
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 p-6 sm:p-8 text-white shadow-xl border-3 border-white/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-200 text-xs font-black uppercase tracking-wider">
              <span>🌟</span>
              <span>25 Thematic Adventures • 5 Grades</span>
              <span>•</span>
              <span>Giáo trình 5 Chặng Thám Hiểm</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-tight">
              Explore the 5 Thematic Adventures 🇻🇳
            </h2>
            
            <p className="text-xs sm:text-sm text-indigo-100 font-medium leading-relaxed">
              Curriculum-aligned English journeys through Vietnam’s majestic landscapes, heritage traditions, delicious cuisine, wild nature, and smart green future!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[11px] font-bold text-white/90">
              <span className="px-2.5 py-1 rounded-xl bg-white/15 border border-white/20">
                🎯 {selectedGrade}: {gradeAdventures.adventure_1_places.targetCefr}
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-white/15 border border-white/20">
                🗣️ Circular 27/2020 TT-BGDĐT
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-amber-400 text-amber-950 font-black">
                ✨ 25 Grade-Specific Adventures
              </span>
            </div>
          </div>

          {/* Captain Trang Mascot & Voice Button */}
          <div className="flex flex-col items-center shrink-0">
            <div 
              onClick={() => handlePlayAudio(`Welcome to ${selectedGrade}! Choose an adventure below to learn English with me!`, 0.9)}
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

      {/* 2. GRADE BAND SELECTOR (1 to 5) - SYNCHRONIZED */}
      <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-3xl border-2 border-sky-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-amber-400 text-amber-950 font-bold shadow-xs">
            <GraduationCap className="w-4 h-4" />
          </span>
          <div>
            <div className="text-xs font-black text-slate-800">
              Active Grade Pathway (Khối lớp trải nghiệm):
            </div>
            <div className="text-[10px] text-sky-700 font-bold">
              Current: <span className="text-rose-600 font-black">{selectedGrade}</span> ({gradeAdventures.adventure_1_places.targetCefr})
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {(['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'] as const).map((grade) => {
            const isGradeActive = selectedGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedGrade(grade);
                  setActiveLesson(null);
                }}
                className={`px-3 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                  isGradeActive
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-200 scale-104 ring-2 ring-rose-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {grade}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. PREMIUM PASTEL COLOR SYSTEM: 5 ADVENTURE CARDS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-950 flex items-center gap-1.5 font-heading">
            <span className="text-rose-500 text-base">🧭</span>
            <span>EXPLORE THE 5 THEMATIC ADVENTURES ({selectedGrade.toUpperCase()}):</span>
          </div>
          
          <button
            onClick={() => {
              soundEffects.playClick();
              setSelectedAdventureId('all');
            }}
            className={`text-xs font-black px-3 py-1 rounded-full transition-colors cursor-pointer border ${
              selectedAdventureId === 'all'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                : 'bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50'
            }`}
          >
            Show All ({selectedGrade})
          </button>
        </div>

        {/* 5 ADVENTURE CARDS WITH EXACT USER-SPECIFIED PASTEL COLORS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CURRICULUM_ADVENTURES.map((adv) => {
            const isSelected = selectedAdventureId === adv.id;
            const theme = ADVENTURE_COLOR_SYSTEM[adv.id];
            const meta = gradeAdventures[adv.id];

            return (
              <button
                key={adv.id}
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedAdventureId(adv.id);
                }}
                style={{
                  backgroundColor: isSelected ? theme.selectedBg : theme.pastelBg,
                  borderColor: isSelected ? theme.borderSelected : theme.borderPastel,
                  boxShadow: isSelected ? theme.glowShadow : '0 2px 8px rgba(0,0,0,0.04)'
                }}
                className={`relative p-3.5 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between gap-3 group cursor-pointer border-2 hover:scale-104 transform-gpu select-none ${
                  isSelected ? 'ring-4 ring-offset-2 ring-white/60' : ''
                }`}
              >
                {/* Top Row: Icon & Adv Number Badge */}
                <div className="flex items-start justify-between">
                  <span 
                    style={{
                      backgroundColor: isSelected ? theme.badgeSelectedBg : theme.badgePastelBg,
                      color: isSelected ? '#FFFFFF' : theme.textPastel
                    }}
                    className="text-2xl p-2 rounded-2xl backdrop-blur-xs shadow-xs group-hover:scale-110 transition-transform"
                  >
                    {theme.icon}
                  </span>
                  
                  <span 
                    style={{
                      backgroundColor: isSelected ? theme.badgeSelectedBg : theme.badgePastelBg,
                      color: isSelected ? '#FFFFFF' : theme.textPastel
                    }}
                    className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs"
                  >
                    <span>✨</span>
                    <span>Adv {meta.orderNumber}</span>
                  </span>
                </div>

                {/* Body: Grade-Specific Title & Subtitle */}
                <div>
                  <h4 
                    style={{ color: isSelected ? theme.textSelected : theme.textPastel }}
                    className="text-sm font-black font-heading leading-tight truncate drop-shadow-2xs"
                  >
                    {meta.titleEn}
                  </h4>
                  <p 
                    style={{ color: isSelected ? 'rgba(255, 255, 255, 0.9)' : theme.textPastel }}
                    className="text-[11px] font-bold leading-tight mt-0.5 truncate opacity-90"
                  >
                    {meta.titleVi}
                  </p>
                  
                  {/* Subtle Theme Tag */}
                  <div 
                    style={{ color: isSelected ? 'rgba(255, 255, 255, 0.75)' : theme.textPastel }}
                    className="text-[9px] font-medium mt-1 truncate opacity-75"
                  >
                    {theme.themeNameEn}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. LESSON DISCOVERY CARDS & EMPTY STATE */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-black text-slate-800 font-heading flex items-center gap-2">
            <span>📚 Lessons Ready to Play ({displayLessons.length})</span>
            {selectedAdventureId !== 'all' && (
              <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">
                Filtered: {gradeAdventures[selectedAdventureId]?.titleEn}
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            English First • Audio-Equipped • Circular 27 Evaluated
          </span>
        </div>

        {/* Lessons Grid or Friendly Empty State */}
        {displayLessons.length === 0 ? (
          <div className="bg-white rounded-3xl border-2 border-dashed border-amber-300 p-8 text-center space-y-3 shadow-xs">
            <div className="text-4xl animate-bounce-subtle">🧭</div>
            <h4 className="text-base font-black font-heading text-slate-800">
              No Published Lessons for this Filter
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              There are currently no published lessons for this specific adventure selection. Choose another adventure or reset filters!
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setSelectedAdventureId('all')}
                className="px-4 py-2 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-xs hover:bg-indigo-700 cursor-pointer"
              >
                Show All {selectedGrade} Lessons
              </button>
              {onOpenTeacherStudio && (
                <button
                  onClick={onOpenTeacherStudio}
                  className="px-4 py-2 rounded-2xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 cursor-pointer"
                >
                  Teacher Studio: Add Lesson
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayLessons.map((lesson) => {
              const adv = CURRICULUM_ADVENTURES.find(a => a.id === lesson.adventureId);
              const theme = ADVENTURE_COLOR_SYSTEM[lesson.adventureId];

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
                        <span 
                          style={{ backgroundColor: theme.selectedBg }}
                          className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase text-white shadow-md flex items-center gap-1"
                        >
                          <span>{theme.icon}</span>
                          <span>{theme.themeNameEn}</span>
                        </span>
                        
                        <span className="px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] shadow-md border border-white">
                          {lesson.gradeLevel}
                        </span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-[10px] uppercase font-black tracking-widest text-amber-300">
                          Adv {adv?.orderNumber} • {lesson.targetCefr}
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

                      {/* Video badge if attached */}
                      {lesson.videoLesson && (
                        <div className="text-[11px] font-bold text-pink-700 bg-pink-50/80 px-2.5 py-1 rounded-xl border border-pink-100 flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Tv className="w-3.5 h-3.5 text-pink-600" />
                            <span>{lesson.videoLesson.isTeacherCreated ? '⭐ Bài giảng Cô Trang' : '🎬 Video bài giảng'}</span>
                          </span>
                          <span className="text-[10px] text-pink-900 font-mono">{lesson.videoLesson.durationMinutes} mins</span>
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
        )}
      </div>

      {/* ==================================================================== */}
      {/* 5. MULTI-STAGE INTERACTIVE LESSON PLAYER MODAL (WATCH -> LEARN -> PLAY -> CHALLENGE -> REWARD) */}
      {/* ==================================================================== */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[36px] overflow-hidden shadow-2xl border-4 border-white flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-5 text-white flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
                  {ADVENTURE_COLOR_SYSTEM[activeLesson.adventureId]?.icon || '🧭'}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/25">
                      {activeLesson.gradeLevel} • Adventure {activeLesson.lessonNumber}
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

            {/* Stage Navigation Bar: Flow WATCH -> LEARN -> PLAY -> CHALLENGE -> REWARD */}
            <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center justify-between overflow-x-auto shrink-0 gap-1 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1 min-w-max">
                {[
                  { key: 'briefing', label: '1. Mission', icon: '🎯' },
                  { key: 'watch', label: '2. Watch Video', icon: '🎬' },
                  { key: 'vocabulary', label: '3. Learn Vocab', icon: '🔤' },
                  { key: 'reading', label: '4. Read & Listen', icon: '📖' },
                  { key: 'play', label: '5. Play Game', icon: '🎮' },
                  { key: 'quiz', label: '6. Challenge Quiz', icon: '⭐' }
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
                        Captain Trang's Adventure Challenge! 🎒
                      </h4>
                      <p className="text-xs text-amber-900 font-medium leading-relaxed">
                        "Welcome to our magical journey! Today we are exploring {activeLesson.titleEn}. Follow the steps: Watch the video, learn vocabulary, play the interactive game, and win stars in the challenge quiz!"
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
                      setCurrentStage('watch');
                    }}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-sm shadow-lg hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Begin Adventure: Watch Video Lesson 🎬</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STAGE 2: WATCH VIDEO LESSON (LAZY LOADED, NEVER AUTOPLAY) */}
              {currentStage === 'watch' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-pink-600">
                      Step 1 of 5 • Video Learning
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      Watch & Listen with Captain Trang 🎬
                    </h4>
                  </div>

                  {activeLesson.videoLesson ? (
                    <div className="bg-white rounded-3xl p-5 border-2 border-slate-200 shadow-md space-y-4">
                      {/* Video Title Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-800">
                              {activeLesson.videoLesson.titleEn}
                            </span>
                            {activeLesson.videoLesson.isTeacherCreated && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[10px] font-black">
                                ⭐ Bài giảng Cô Trang
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {activeLesson.videoLesson.titleVi}
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 font-mono font-bold">
                          ⏱️ {activeLesson.videoLesson.durationMinutes} mins
                        </span>
                      </div>

                      {/* Video Player or Facade (Never Autoplay) */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                        {isVideoMounted ? (
                          <iframe
                            src={activeLesson.videoLesson.embedUrl}
                            title={activeLesson.videoLesson.titleEn}
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white relative">
                            <img
                              src={activeLesson.coverImage || '/destinations/halong_bay.jpg'}
                              alt="Video Preview"
                              className="absolute inset-0 w-full h-full object-cover opacity-40"
                            />
                            <div className="relative z-10 space-y-3">
                              <button
                                onClick={() => {
                                  soundEffects.playClick();
                                  setIsVideoMounted(true);
                                }}
                                className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all mx-auto cursor-pointer"
                              >
                                <Play className="w-8 h-8 fill-white ml-1" />
                              </button>
                              <div className="text-xs font-bold text-white/90">
                                Click to load and watch educational video
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-500 italic text-center">
                        🔒 Child-safe video stream via youtube-nocookie.com (No autoplay & no ads)
                      </div>
                    </div>
                  ) : (
                    <div className="bg-sky-50 rounded-3xl p-6 border-2 border-sky-200 text-center space-y-2">
                      <div className="text-3xl">🎥</div>
                      <h4 className="text-sm font-black text-sky-950">
                        Ready to Learn Vocabulary!
                      </h4>
                      <p className="text-xs text-sky-800">
                        Continue directly to the interactive vocabulary and phonics stage!
                      </p>
                    </div>
                  )}

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
                        setCurrentStage('vocabulary');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue: Learn Vocabulary ➔</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 3: LEARN VOCABULARY & PHONICS */}
              {currentStage === 'vocabulary' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600">
                      Step 2 of 5 • Core Vocabulary & Phonics
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      Tap each word to listen and repeat! 🎧
                    </h4>
                  </div>

                  {/* Active Vocab Spotlight Card with Realistic Visual */}
                  {(() => {
                    const vocab = activeLesson.vocabulary[activeVocabIndex];
                    if (!vocab) return null;

                    return (
                      <div className="max-w-xl mx-auto">
                        <RealisticVisualVocabularyCard
                          word={vocab.word}
                          phonetic={vocab.ipa}
                          meaningEn={vocab.meaningEn}
                          meaningVi={vocab.meaningVi}
                          exampleSentence={vocab.exampleSentenceEn}
                          exampleSentenceVi={vocab.exampleSentenceVi}
                          imageUrl={vocab.imageUrl}
                          colorTheme="purple"
                          onEarnStars={onEarnStars}
                        />
                      </div>
                    );
                  })()}

                  {/* Vocabulary Carousel Thumbnails with Real Photos */}
                  <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
                    {activeLesson.vocabulary.map((v, i) => (
                      <button
                        key={v.word}
                        onClick={() => {
                          soundEffects.playClick();
                          setActiveVocabIndex(i);
                        }}
                        className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-2 ${
                          activeVocabIndex === i
                            ? 'bg-indigo-600 text-white border-indigo-700 shadow-md scale-105'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={getVocabularyVisual(v.word).imageUrl}
                          alt={v.word}
                          className="w-5 h-5 rounded-md object-cover shrink-0"
                        />
                        <span>{v.word}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('watch');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('reading');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Read & Listen ➔</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 4: READING & LISTENING */}
              {currentStage === 'reading' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-purple-600">
                      Step 3 of 5 • Reading & Listening
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      {activeLesson.reading.titleEn}
                    </h4>
                  </div>

                  {/* Reading Passage Card */}
                  <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md space-y-4">
                    <div className="space-y-3">
                      {activeLesson.reading.passagesEn.map((para, idx) => (
                        <div key={idx} className="space-y-1 text-sm text-slate-800 leading-relaxed font-medium">
                          <p>{para}</p>
                          {showVietnameseTranslation && activeLesson.reading.passagesVi[idx] && (
                            <p className="text-xs text-slate-500 italic">{activeLesson.reading.passagesVi[idx]}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Listen to full passage */}
                    <div className="pt-2 border-t border-slate-100 flex justify-center">
                      <button
                        onClick={() => handlePlayAudio(activeLesson.reading.passagesEn.join(" "), 0.85)}
                        className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <Headphones className="w-4 h-4" />
                        <span>Listen to Reading Passage (Nghe đọc bài)</span>
                      </button>
                    </div>
                  </div>

                  {/* Immersive Listening Quest */}
                  <ImmersiveListeningQuest
                    key={activeLesson.id}
                    destinationName={activeLesson.titleEn}
                    destinationProvince={activeLesson.topicEn}
                    landmarkImage={activeLesson.reading.readingImage || activeLesson.coverImage || '/destinations/danang_dragon_bridge.jpg'}
                    landmarkName={activeLesson.topicEn}
                    audioScriptEn={activeLesson.listening.audioScriptEn}
                    audioScriptVi={activeLesson.listening.audioScriptVi}
                    audioTitleEn={activeLesson.listening.audioTitleEn}
                    speakerRole={activeLesson.listening.speakerRole}
                    questionEn={activeLesson.listening.questionEn}
                    questionVi={activeLesson.listening.questionVi}
                    options={activeLesson.listening.options}
                    correctIndex={activeLesson.listening.correctIndex}
                    gradeBadge={`${activeLesson.gradeLevel} LISTENING QUEST`}
                    onEarnStars={(stars) => onEarnStars && onEarnStars(stars)}
                    onContinue={() => setCurrentStage('play')}
                  />

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('vocabulary');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setCurrentStage('play');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Play Interactive Game 🎮</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 5: PLAY INTERACTIVE GAME */}
              {currentStage === 'play' && (
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600">
                      Step 4 of 5 • Interactive Game
                    </span>
                    <h4 className="text-lg font-black font-heading text-slate-900">
                      {activeLesson.interactiveGame.gameTitleEn} 🎮
                    </h4>
                    <p className="text-xs text-slate-500">
                      {activeLesson.interactiveGame.instructionsEn}
                    </p>
                  </div>

                  {/* Matching Game Arena */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-emerald-200 shadow-md space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-black text-emerald-800">
                        Items Matched: {matchedGameIds.length / 2} / {activeLesson.interactiveGame.items.length}
                      </span>
                      <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        ⭐ Bonus +10 Stars for Victory
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {activeLesson.interactiveGame.items.map((item) => {
                        const isMatched = matchedGameIds.includes(item.id);
                        const isSelected = selectedGameItem?.id === item.id;

                        return (
                          <button
                            key={item.id}
                            disabled={isMatched}
                            onClick={() => handleGameItemClick(item)}
                            className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                              isMatched
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 opacity-60'
                                : isSelected
                                ? 'bg-amber-100 border-amber-400 text-amber-950 scale-105 shadow-md ring-2 ring-amber-300'
                                : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:scale-102'
                            }`}
                          >
                            <span className="text-3xl select-none">{item.emojiOrIcon || '✨'}</span>
                            <span className="text-xs font-black font-heading">{item.promptEn}</span>
                            {item.promptVi && showVietnameseTranslation && (
                              <span className="text-[10px] text-slate-500">{item.promptVi}</span>
                            )}
                          </button>
                        );
                      })}
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
                        setCurrentStage('quiz');
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Final Step: Challenge Quiz ⭐</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 6: CIRCULAR 27 CHALLENGE QUIZ */}
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

              {/* STAGE 7: COMPLETION CELEBRATION (REWARD) */}
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
