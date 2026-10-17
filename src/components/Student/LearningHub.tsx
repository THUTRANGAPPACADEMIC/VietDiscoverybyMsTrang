import React, { useState, useEffect, Suspense } from 'react';
import { Destination, DestinationProgress, UserProfile, GradeBand, Region } from '../../types';
import { resolveStudentGrade } from '../../lib/studentAuth';
import { DestinationList } from './DestinationList';
import { LearningPassport } from './LearningPassport';
import { StudentProgressView } from './StudentProgressView';
import { UnitAdventureHub } from './UnitAdventureHub';
import { GradePathwaySelection } from './GradePathwaySelection';
import { DiscoveryAdventureHub } from './DiscoveryAdventureHub';
import { AdventureLoadingFallback } from './AdventureLoadingFallback';

// Lazy-loaded heavy modules for optimized bundle performance
const VietnamMap = React.lazy(() => 
  import('./VietnamMap').then(m => ({ default: m.VietnamMap }))
);
const AdventureGames = React.lazy(() => 
  import('./AdventureGames').then(m => ({ default: m.AdventureGames }))
);
const FloatingIslandWorld = React.lazy(() => 
  import('./FloatingIslandWorld/FloatingIslandWorld').then(m => ({ default: m.FloatingIslandWorld }))
);
const VideoAcademyHub = React.lazy(() => 
  import('./VideoAcademy/VideoAcademyHub').then(m => ({ default: m.VideoAcademyHub }))
);
const StudentCurriculumExperience = React.lazy(() => 
  import('./StudentCurriculumExperience').then(m => ({ default: m.StudentCurriculumExperience }))
);
const InteractiveMap34ProvincesGame = React.lazy(() => 
  import('./InteractiveMap34ProvincesGame').then(m => ({ default: m.InteractiveMap34ProvincesGame }))
);
const LandmarkDragDropGame = React.lazy(() => 
  import('./LandmarkDragDropGame').then(m => ({ default: m.LandmarkDragDropGame }))
);
const DestinationExplorerModal = React.lazy(() => 
  import('./DestinationExplorerModal').then(m => ({ default: m.DestinationExplorerModal }))
);
const LessonModal = React.lazy(() => 
  import('./LessonModal').then(m => ({ default: m.LessonModal }))
);
const Grade12LessonModal = React.lazy(() => 
  import('./Grade12LessonModal').then(m => ({ default: m.Grade12LessonModal }))
);
import { GradeNumber } from '../../data/gradePathwaysData';
import { 
  Sparkles, 
  Compass, 
  Trophy, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Flame, 
  Volume2, 
  Award,
  ChevronRight,
  Play,
  Eye,
  BookOpen,
  Headphones,
  Mic,
  Maximize2,
  Search,
  ZoomIn,
  ZoomOut,
  Map as MapIcon,
  X
} from 'lucide-react';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';

interface LearningHubProps {
  user: UserProfile | null;
  destinations: Destination[];
  progressMap: Record<string, DestinationProgress>;
  activeTab: 'explore' | 'games' | 'videos' | 'passport' | 'progress';
  totalStars: number;
  previewGradeBand?: GradeBand; // for teacher previewing
  onUpdateProgress: (destId: string, score: number, starsEarned: number) => void;
  onEarnStars?: (stars: number) => void;
  onSaveGameProgress?: (gameId: string, progress: DestinationProgress) => void;
  onSelectTab?: (tab: 'explore' | 'games' | 'videos' | 'passport' | 'progress') => void;
  onNavigateGrade?: (gradeNum: GradeNumber) => void;
}

type LessonTabType = 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'quiz';

export const LearningHub: React.FC<LearningHubProps> = ({
  user,
  destinations,
  progressMap,
  activeTab,
  totalStars,
  previewGradeBand,
  onUpdateProgress,
  onEarnStars,
  onSaveGameProgress,
  onSelectTab,
  onNavigateGrade
}) => {
  // Find default destinations
  const halongDest = destinations.find(d => d.id === 'halong') || destinations[0];
  const hanoiDest = destinations.find(d => d.id === 'hanoi') || destinations[1];
  const hueDest = destinations.find(d => d.id === 'hue') || destinations[2];
  const danangDest = destinations.find(d => d.id === 'danang_hoian' || d.id === 'danang') || destinations[3];

  const [selectedDestination, setSelectedDestination] = useState<Destination>(halongDest);
  const [selectedRegion, setSelectedRegion] = useState<'All' | Region>('All');
  
  // Lesson & Modal States
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [activeLessonDestination, setActiveLessonDestination] = useState<Destination | null>(null);
  const [initialLessonTab, setInitialLessonTab] = useState<LessonTabType>('vocabulary');

  // Destination Explorer Detail Modal (Image 3)
  const [isDestinationExplorerOpen, setIsDestinationExplorerOpen] = useState(false);
  const [explorerDestination, setExplorerDestination] = useState<Destination>(halongDest);

  // Active grade band: allows student/teacher to switch on-the-fly between Grade 1 to 5
  const [activeGradeBand, setActiveGradeBand] = useState<GradeBand>(() => {
    if (previewGradeBand) return previewGradeBand;
    return resolveStudentGrade(user).gradeBand;
  });

  // Reactive synchronization: update activeGradeBand if teacher preview or student user changes
  useEffect(() => {
    if (previewGradeBand) {
      setActiveGradeBand(previewGradeBand);
    } else if (user) {
      setActiveGradeBand(resolveStudentGrade(user).gradeBand);
    }
  }, [previewGradeBand, user?.id, user?.gradeLevel, user?.classCode]);

  const currentGradeNum: 1 | 2 | 3 | 4 | 5 = 
    activeGradeBand === 'grade_1' ? 1 :
    activeGradeBand === 'grade_2' ? 2 :
    activeGradeBand === 'grade_3' ? 3 :
    activeGradeBand === 'grade_4' ? 4 :
    activeGradeBand === 'grade_5' ? 5 :
    resolveStudentGrade(user).gradeNum;

  // Sub-view on Explore tab: 'all' (both map & unit cards), 'map' (focused map), 'units' (focused unit cards)
  const [exploreViewMode, setExploreViewMode] = useState<'both' | 'map' | 'units'>('both');
  const [isVectorGisModalOpen, setIsVectorGisModalOpen] = useState(false);
  const [mapDisplayMode, setMapDisplayMode] = useState<'interactive_34_provinces' | 'game_34_provinces' | 'adventure_illustrated'>('game_34_provinces');
  const [isLandmarkGameModalOpen, setIsLandmarkGameModalOpen] = useState(false);
  const [curriculumDisplayMode, setCurriculumDisplayMode] = useState<'floating_islands' | 'curriculum_pathways' | 'map_and_units'>('floating_islands');

  // Captain Trang Interactive Guide States & Voice Engine
  const [showCaptainTrangDialog, setShowCaptainTrangDialog] = useState(false);
  const [isCaptainTrangSpeaking, setIsCaptainTrangSpeaking] = useState(false);
  const [isCaptainSlowMode, setIsCaptainSlowMode] = useState(false);

  const handleCaptainTrangClick = (slow = isCaptainSlowMode) => {
    soundEffects.playClick();
    setShowCaptainTrangDialog(true);
    setIsCaptainTrangSpeaking(true);
    playEnglishSpeech(
      "Hello, Little Explorer! I'm Captain Trang. Let's discover Vietnam and learn English together!",
      {
        slow,
        onStart: () => setIsCaptainTrangSpeaking(true),
        onEnd: () => setIsCaptainTrangSpeaking(false),
        onError: () => setIsCaptainTrangSpeaking(false),
      }
    );
  };

  const handleCloseCaptainTrangDialog = () => {
    stopSpeech();
    setIsCaptainTrangSpeaking(false);
    setShowCaptainTrangDialog(false);
  };

  const handleQuickAction = (action: 'adventure' | 'map' | 'games') => {
    soundEffects.playClick();
    stopSpeech();
    setIsCaptainTrangSpeaking(false);
    setShowCaptainTrangDialog(false);
    if (action === 'adventure') {
      setExploreViewMode('units');
      setTimeout(() => {
        document.getElementById('adventure-units-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action === 'map') {
      setExploreViewMode('map');
      setTimeout(() => {
        document.getElementById('vietnam-map-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (action === 'games') {
      onSelectTab?.('games');
    }
  };

  const handleOpenLesson = (dest: Destination, initialTab: LessonTabType = 'vocabulary') => {
    soundEffects.playClick();
    setActiveLessonDestination(dest);
    setInitialLessonTab(initialTab);
    setIsLessonModalOpen(true);
  };

  const handleOpenDestinationExplorer = (dest: Destination) => {
    soundEffects.playClick();
    setExplorerDestination(dest);
    setIsDestinationExplorerOpen(true);
  };

  const handleCompleteLesson = (destId: string, score: number, stars: number) => {
    onUpdateProgress(destId, score, stars);
  };

  // Grade pathway metadata matching Image 2
  const GRADE_PATHWAYS = [
    {
      key: 'grade_1' as GradeBand,
      gradeNum: '1',
      title: 'Grade 1',
      sub: 'Little Explorer',
      badge: 'PRE-A1 STARTER',
      icon: '🏔️',
      pillBg: 'from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc]',
      borderStyle: 'border-sky-300',
      activeRing: 'ring-sky-400 shadow-[0_8px_20px_rgba(56,189,248,0.35)]',
      textColor: 'text-sky-900',
      arrowBg: 'bg-sky-400 text-white'
    },
    {
      key: 'grade_2' as GradeBand,
      gradeNum: '2',
      title: 'Grade 2',
      sub: 'Magical Backpack',
      badge: 'PRE-A1 BEGINNER',
      icon: '🎒',
      pillBg: 'from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe]',
      borderStyle: 'border-purple-300',
      activeRing: 'ring-purple-400 shadow-[0_8px_20px_rgba(192,132,252,0.35)]',
      textColor: 'text-purple-900',
      arrowBg: 'bg-purple-400 text-white'
    },
    {
      key: 'grade_3' as GradeBand,
      gradeNum: '3',
      title: 'Grade 3',
      sub: 'Golden Adventure',
      badge: 'PRE-A1 FOUNDATION',
      icon: '🗺️',
      hasCrown: true,
      pillBg: 'from-[#fef3c7] via-[#fde68a] to-[#f59e0b]',
      borderStyle: 'border-amber-400',
      activeRing: 'ring-amber-400 shadow-[0_8px_25px_rgba(245,158,11,0.45)] scale-102',
      textColor: 'text-amber-950',
      arrowBg: 'bg-amber-500 text-white'
    },
    {
      key: 'grade_4' as GradeBand,
      gradeNum: '4',
      title: 'Grade 4',
      sub: 'Discovery Rocket',
      badge: 'PRE-A1 TO A1',
      icon: '🚀',
      pillBg: 'from-[#ccfbf1] via-[#99f6e4] to-[#5eead4]',
      borderStyle: 'border-teal-300',
      activeRing: 'ring-teal-400 shadow-[0_8px_20px_rgba(45,212,191,0.35)]',
      textColor: 'text-teal-950',
      arrowBg: 'bg-teal-400 text-white'
    },
    {
      key: 'grade_5' as GradeBand,
      gradeNum: '5',
      title: 'Grade 5',
      sub: 'English Champion',
      badge: 'A1/A2 EXTENSION',
      icon: '🏆',
      pillBg: 'from-[#ffe4e6] via-[#fecdd3] to-[#fda4af]',
      borderStyle: 'border-pink-300',
      activeRing: 'ring-pink-400 shadow-[0_8px_20px_rgba(244,63,94,0.35)]',
      textColor: 'text-pink-950',
      arrowBg: 'bg-pink-400 text-white'
    }
  ];

  // Daily explorer quests
  const DAILY_QUESTS = [
    {
      id: 'quest_explore',
      title: 'Explore 1 Wonder',
      reward: '+20 Stars ⭐',
      icon: '📖',
      bgClass: 'bg-amber-50/90 border-amber-200 text-amber-900',
      onClick: () => handleOpenDestinationExplorer(selectedDestination)
    },
    {
      id: 'quest_listen',
      title: 'Listen to 3 Words',
      reward: '+15 Stars ⭐',
      icon: '🎧',
      bgClass: 'bg-sky-50/90 border-sky-200 text-sky-900',
      onClick: () => handleOpenLesson(selectedDestination, 'listening')
    },
    {
      id: 'quest_speak',
      title: 'Practice Speaking',
      reward: '+25 Stars ⭐',
      icon: '🗣️',
      bgClass: 'bg-purple-50/90 border-purple-200 text-purple-900',
      onClick: () => handleOpenLesson(selectedDestination, 'speaking')
    },
    {
      id: 'quest_quiz',
      title: 'Win 1 Quiz',
      reward: '+50 Stars ⭐',
      icon: '🏆',
      bgClass: 'bg-rose-50/90 border-rose-200 text-rose-900',
      onClick: () => handleOpenLesson(selectedDestination, 'quiz')
    }
  ];

  // Filter destinations by region
  const handleSelectRegion = (reg: 'All' | Region) => {
    soundEffects.playClick();
    setSelectedRegion(reg);
    if (reg === 'North') setSelectedDestination(halongDest);
    else if (reg === 'Central') setSelectedDestination(hueDest);
    else if (reg === 'South') {
      const southDest = destinations.find(d => d.region === 'South') || destinations[4];
      setSelectedDestination(southDest);
    } else {
      setSelectedDestination(halongDest);
    }
  };

  return (
    <div className="space-y-6 pb-20 sm:pb-8">
      
      {/* ============================================================== */}
      {/* TAB 1: KHÁM PHÁ VIỆT NAM (EXPLORE VIETNAM)                      */}
      {/* ============================================================== */}
      {activeTab === 'explore' && (
        <div className="space-y-6">
          
          {/* 0. OFFICIAL BRANDING & SPECTACULAR HOMEPAGE HERO SECTION */}
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#e0f2fe]/90 via-[#f0f9ff]/95 to-[#ffe4e6]/90 border-3 border-sky-300/80 p-5 sm:p-8 shadow-[0_12px_36px_rgba(56,189,248,0.22)] backdrop-blur-md">
            {/* Playful Floating Cloud, Star & Rainbow Accents */}
            <div className="absolute top-2 left-6 text-2xl sm:text-3xl opacity-80 animate-bounce duration-1000 pointer-events-none select-none">⭐</div>
            <div className="absolute top-4 right-10 text-xl sm:text-2xl opacity-70 animate-pulse pointer-events-none select-none">✨</div>
            <div className="absolute bottom-3 left-1/4 text-xl sm:text-2xl opacity-60 pointer-events-none select-none">☁️</div>
            <div className="absolute bottom-4 right-8 text-2xl opacity-80 pointer-events-none select-none">🌈</div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-5">
              
              {/* Mascot 1: Captain Trần Thị Thu Trang - Official Character & Interactive Adventure Guide */}
              <div className="flex flex-col items-center shrink-0 w-full lg:w-auto">
                <div 
                  className="relative group cursor-pointer w-full max-w-[420px] sm:max-w-[440px] lg:max-w-[460px] xl:max-w-[480px]" 
                  onClick={() => handleCaptainTrangClick(false)}
                  title="Captain Trần Thị Thu Trang 🧭 - Chạm để trò chuyện và nghe giọng nói!"
                >
                  {/* Soft pastel blue surrounding background with gentle shadow and subtle glow */}
                  <div className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-br from-sky-100/95 via-sky-50/90 to-cyan-50/95 border-2 border-sky-300/80 shadow-[0_12px_28px_rgba(56,189,248,0.22)] ring-4 ring-sky-200/50 group-hover:ring-sky-300/80 group-hover:shadow-[0_16px_36px_rgba(56,189,248,0.35)] group-hover:scale-[1.02] transition-all duration-300">
                    <img
                      src="/assets/cute/captain_trang_banner_official.png"
                      alt="Captain Trần Thị Thu Trang - Official Explorer Guide"
                      className="w-full h-auto object-contain select-none rounded-2xl block"
                      style={{
                        aspectRatio: '1024 / 341',
                        maxWidth: '100%'
                      }}
                    />
                    
                    {/* Speaking Sound Wave Indicator Badge */}
                    {isCaptainTrangSpeaking && (
                      <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black shadow-lg flex items-center gap-1.5 animate-pulse border-2 border-white">
                        <Volume2 className="w-4 h-4 animate-bounce" />
                        <span>Speaking...</span>
                      </div>
                    )}
                  </div>

                  {/* Tap to Talk Badge directly underneath */}
                  <div className="mt-2 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-rose-600 font-black text-xs sm:text-sm shadow-md border-2 border-rose-200 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-all transform group-hover:scale-105">
                      <span>💬</span>
                      <span>{isCaptainTrangSpeaking ? "I'm Talking! 🔊 (Cô đang nói chuyện...)" : "Tap to Talk! (Chạm để trò chuyện cùng Cô Trang 🔊)"}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Main Brand Title + Candy Pink Ribbon + Inspiring Headline */}
              <div className="flex-1 min-w-0 max-w-lg text-center space-y-3">
                
                {/* Globe Logo + Brand Title Cluster */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5">
                  {/* Official Globe Logo: 90-110px desktop, 72-90px mobile */}
                  <div 
                    className="w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] md:w-[96px] md:h-[96px] rounded-full bg-white/90 p-2 shadow-[0_8px_24px_rgba(56,189,248,0.35)] border-3 border-sky-300 flex items-center justify-center shrink-0 hover:rotate-6 transition-transform cursor-pointer"
                    onClick={() => soundEffects.playClick()}
                    title="VietDiscovery by Ms. Trang"
                  >
                    <img
                      src="/assets/cute/globe_official.png"
                      alt="VietDiscovery by Ms. Trang Globe Logo"
                      className="w-full h-full object-contain select-none drop-shadow-md"
                    />
                  </div>

                  {/* Largest Brand Element: "VietDiscovery" */}
                  <div className="text-center sm:text-left">
                    <h1 
                      className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] font-black font-heading tracking-tight leading-none text-sky-600 drop-shadow-[0_4px_10px_rgba(2,132,199,0.35)]"
                      style={{
                        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 40%, #0ea5e9 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      VietDiscovery
                    </h1>

                    {/* "by Ms. Trang" directly below in candy-pink ribbon */}
                    <div className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1 rounded-full bg-gradient-to-r from-[#ff007f] via-[#ec4899] to-[#f43f5e] text-white font-black text-xs sm:text-sm md:text-base shadow-md border-2 border-white/80 drop-shadow-sm mt-1 transform hover:scale-105 transition-transform cursor-default">
                      <Sparkles className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                      <span>by Ms. Trang</span>
                      <span className="text-xs">❤️</span>
                    </div>
                  </div>
                </div>

                {/* Slogan Pill / Headline (English First, Vietnamese translation underneath) */}
                <div className="inline-block bg-white/95 backdrop-blur-md rounded-3xl px-4 sm:px-6 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border-2 border-sky-200 max-w-xl mx-auto">
                  <div className="text-sm sm:text-lg md:text-xl font-black font-heading text-blue-950 flex items-center justify-center gap-2 flex-wrap">
                    <span>The Magical Adventure Across Vietnam!</span>
                    <span className="text-lg sm:text-xl">🌈</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-sky-800 font-heading mt-0.5 flex items-center justify-center gap-1.5">
                    <span>Cuộc phiêu lưu kỳ diệu trên đất Việt!</span>
                    <span className="text-rose-500">✨</span>
                  </div>
                </div>

              </div>

              {/* Mascot 2: Little Explorers (Boy & Girl with Vietnam Map & Compass) */}
              <div className="flex flex-col items-center shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                <div 
                  className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95" 
                  onClick={() => soundEffects.playHover()}
                  title="Little Explorers - Welcome young adventurers! 🎒🧭"
                >
                  <img
                    src="/assets/cute/little_explorers_duo.webp"
                    alt="Little Explorers"
                    className="w-36 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)] select-none rounded-2xl block"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* 1. SELECT LEARNING PATHWAY (5 GRADE CARDS) - INTERACTIVE & NAVIGABLE */}
          <GradePathwaySelection
            activeGradeNum={currentGradeNum}
            onSelectGrade={(g) => {
              setActiveGradeBand(`grade_${g}` as GradeBand);
              if (onNavigateGrade) {
                onNavigateGrade(g);
              }
            }}
          />

          {/* 2. PROMINENT DISCOVERY ADVENTURE HUB - DIRECTLY BELOW GRADE SELECTION (16-24px vertical spacing) */}
          <div className="mt-4 sm:mt-6">
            <DiscoveryAdventureHub
              activeMode={curriculumDisplayMode}
              onSelectMode={(mode) => {
                soundEffects.playClick();
                setCurriculumDisplayMode(mode);
              }}
              activeGradeNum={currentGradeNum}
              activeGradeBand={activeGradeBand}
            />
          </div>

          {/* 3. DAILY EXPLORER QUESTS ROW - MATCHING IMAGE 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {DAILY_QUESTS.map((q) => (
              <button
                key={q.id}
                onClick={() => {
                  soundEffects.playClick();
                  q.onClick();
                }}
                className={`p-2.5 sm:p-3 rounded-2xl border-2 ${q.bgClass} flex items-center justify-between gap-2 shadow-xs hover:shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer text-left`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-xl shrink-0">
                    {q.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-black leading-tight truncate">
                      {q.title}
                    </div>
                    <div className="text-[11px] font-bold text-amber-700 leading-none mt-0.5">
                      {q.reward}
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 font-black text-sm shrink-0">
                  ›
                </div>
              </button>
            ))}
          </div>

          {/* 4. ACTIVE DISCOVERY EXPERIENCE ARENA */}
          <div id="discovery-experience-arena" className="space-y-6 scroll-mt-6">

          {/* 3A. 3D FLOATING ISLAND ADVENTURE WORLD */}
          {curriculumDisplayMode === 'floating_islands' && (
            <Suspense fallback={<AdventureLoadingFallback message="Loading 3D Floating Island World..." subMessage="Đang tải Thế giới Đảo nổi 3D diệu kỳ..." />}>
              <FloatingIslandWorld
                user={user}
                activeGradeBand={activeGradeBand}
                totalStars={totalStars}
                onEarnStars={onEarnStars}
                onBackToOverview={() => setCurriculumDisplayMode('curriculum_pathways')}
              />
            </Suspense>
          )}

          {/* 3B. INDEPENDENT CURRICULUM EXPERIENCE */}
          {curriculumDisplayMode === 'curriculum_pathways' && (
            <Suspense fallback={<AdventureLoadingFallback message="Loading curriculum pathway..." subMessage="Đang tải lộ trình học tập..." />}>
              <StudentCurriculumExperience
                user={user}
                activeGradeBand={activeGradeBand}
                onEarnStars={onEarnStars}
              />
            </Suspense>
          )}

          {/* 3B. INTERACTIVE VIETNAM MAP CONTAINER - WITH OFFICIAL 34 PROVINCES & ILLUSTRATED MODES */}
          {curriculumDisplayMode === 'map_and_units' && (
            <>
              {(exploreViewMode === 'both' || exploreViewMode === 'map') && (
            <div id="vietnam-map-section" className="relative bg-white/95 backdrop-blur-md rounded-[32px] p-4 sm:p-5 border-3 border-sky-300/80 shadow-[0_12px_36px_rgba(56,189,248,0.18)] space-y-4">
              
              {/* Header Bar: Title, Pill & Mode Switcher */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-sky-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs shadow-xs font-bold shrink-0">
                      📍
                    </div>
                    <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                      Bản đồ Tương tác Việt Nam
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-600 font-extrabold text-[11px] border border-pink-200 whitespace-nowrap">
                      Interactive Vietnam Map
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {mapDisplayMode === 'interactive_34_provinces'
                      ? 'Dữ liệu 34 Tỉnh/Thành phố trực thuộc Trung ương theo Bản đồ Hành chính 2025 (BẢN ĐỒ(3).pdf) & WGS84 GIS.'
                      : 'Trò chơi di chuyển hình ảnh địa danh vào đúng vị trí trên bản đồ để khám phá Việt Nam!'}
                  </p>
                </div>

                {/* Primary Mode Switcher (Official 34 Provinces vs Illustrated Adventure) */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-sky-100/70 rounded-2xl border border-sky-200">
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setMapDisplayMode('interactive_34_provinces');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      mapDisplayMode === 'interactive_34_provinces'
                        ? 'bg-indigo-600 text-white shadow-indigo-200 scale-102'
                        : 'text-slate-700 hover:text-indigo-900 hover:bg-white/60'
                    }`}
                  >
                    <span>🇻🇳</span>
                    <span>Bản đồ 34 Tỉnh/Thành 2025</span>
                    <span className="text-[9.5px] bg-amber-400 text-amber-950 px-1.5 py-0.5 rounded-full font-black uppercase">
                      Chính thức
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setMapDisplayMode('game_34_provinces');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      mapDisplayMode === 'game_34_provinces'
                        ? 'bg-amber-500 text-amber-950 shadow-amber-200 scale-102 ring-2 ring-amber-300'
                        : 'text-slate-700 hover:text-amber-900 hover:bg-white/60'
                    }`}
                  >
                    <span>🎯</span>
                    <span>Game 34 Tỉnh (3 Chế độ)</span>
                    <span className="text-[9.5px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-black uppercase">
                      Genially
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setMapDisplayMode('adventure_illustrated');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      mapDisplayMode === 'adventure_illustrated'
                        ? 'bg-rose-500 text-white shadow-rose-200 scale-102'
                        : 'text-slate-700 hover:text-rose-900 hover:bg-white/60'
                    }`}
                  >
                    <span>🎨</span>
                    <span>Trò chơi Minh họa</span>
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setIsLandmarkGameModalOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-xs bg-amber-400 hover:bg-amber-300 text-amber-950 border border-amber-500/30"
                  >
                    <span>🎯</span>
                    <span>Kéo thả 3 Miền</span>
                    <span className="text-[9.5px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-black uppercase">
                      Game Mới
                    </span>
                  </button>
                </div>
              </div>

              {/* VIEW: 34 PROVINCES INTERACTIVE LEARNING GAME (GENIALLY STYLE 3 MODES) */}
              {mapDisplayMode === 'game_34_provinces' ? (
                <Suspense fallback={<AdventureLoadingFallback message="Loading 34 Provinces Game..." subMessage="Đang mở trò chơi 34 tỉnh thành Việt Nam..." />}>
                  <InteractiveMap34ProvincesGame
                    user={user}
                    gradeBand={activeGradeBand}
                    onUpdateProgress={onUpdateProgress}
                    onEarnStars={onEarnStars}
                  />
                </Suspense>
              ) : mapDisplayMode === 'interactive_34_provinces' ? (
                <div className="rounded-3xl overflow-hidden border-2 border-sky-200/80 shadow-inner">
                  <Suspense fallback={<AdventureLoadingFallback message="Rendering Vietnam 2025 Map..." subMessage="Đang vẽ bản đồ 34 tỉnh thành..." />}>
                    <VietnamMap
                      destinations={destinations}
                      selectedDestination={selectedDestination}
                      gradeBand={activeGradeBand}
                      initialLayer="administrative"
                      onSelectDestination={(dest) => {
                        setSelectedDestination(dest);
                        handleOpenDestinationExplorer(dest);
                      }}
                      onOpenLesson={handleOpenLesson}
                    />
                  </Suspense>
                </div>
              ) : (

                /* VIEW 2: 3-COLUMN ADVENTURE GAME LAYOUT (MATCHING IMAGE 2) */
                <div className="space-y-3">
                  {/* Region Filter Buttons */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                      <button
                        onClick={() => handleSelectRegion('All')}
                        className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                          selectedRegion === 'All'
                            ? 'bg-rose-500 text-white shadow-rose-200'
                            : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200'
                        }`}
                      >
                        Tất cả
                      </button>
                      <button
                        onClick={() => handleSelectRegion('North')}
                        className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                          selectedRegion === 'North'
                            ? 'bg-rose-500 text-white shadow-rose-200'
                            : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200'
                        }`}
                      >
                        ⛰️ Miền Bắc
                      </button>
                      <button
                        onClick={() => handleSelectRegion('Central')}
                        className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                          selectedRegion === 'Central'
                            ? 'bg-rose-500 text-white shadow-rose-200'
                            : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200'
                        }`}
                      >
                        🏖️ Miền Trung
                      </button>
                      <button
                        onClick={() => handleSelectRegion('South')}
                        className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                          selectedRegion === 'South'
                            ? 'bg-rose-500 text-white shadow-rose-200'
                            : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200'
                        }`}
                      >
                        🌴 Miền Nam
                      </button>
                    </div>

                    <button
                      onClick={() => setMapDisplayMode('interactive_34_provinces')}
                      className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Xem toàn bộ 34 tỉnh/thành 2025</span>
                      <span>➔</span>
                    </button>
                  </div>

                  {/* 3-COLUMN MAP CONTENT LAYOUT (LEFT CARD | CENTER MAP | RIGHT QUEST) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
                    
                    {/* 1. LEFT COLUMN: SELECTED DESTINATION PREVIEW CARD */}
                    <div 
                      onClick={() => handleOpenDestinationExplorer(selectedDestination)}
                      className="lg:col-span-3 bg-gradient-to-b from-sky-50/70 to-white rounded-3xl p-3.5 border-2 border-sky-200/80 shadow-xs flex flex-col justify-between cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all group"
                    >
                      <div className="space-y-2.5">
                        {/* Top Row: Circular Thumbnail + Name */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-300 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                            <img
                              src={selectedDestination.image || '/destinations/halong_bay.jpg'}
                              alt={selectedDestination.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-black font-heading text-blue-950 truncate">
                                {selectedDestination.vietnameseName}
                              </h4>
                              <span className="text-slate-400 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                                ›
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-sky-700 truncate">
                              {selectedDestination.province}
                            </div>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-slate-600 leading-snug line-clamp-3">
                          {selectedDestination.summaryVi || 'Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi tuyệt đẹp.'}
                        </p>
                      </div>

                      {/* Bottom Star Pill */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black shadow-xs">
                          <span>⭐</span>
                          <span>+10 Stars</span>
                        </span>
                      </div>
                    </div>

                    {/* 2. CENTER COLUMN: ILLUSTRATED MAP CANVAS WITH PINS & CONTROLS */}
                    <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border-2 border-sky-200/80 shadow-inner bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc] min-h-[320px] max-h-[480px] flex items-center justify-center group">
                      {/* Illustrated Map Background */}
                      <img
                        src="/assets/cute/center_illustrated_map.png"
                        alt="Illustrated Vietnam Map"
                        className="w-full h-full max-h-[460px] object-contain object-center select-none p-2 drop-shadow-md"
                      />

                      {/* Interactive Pin Overlays for Key Destinations */}
                      {/* Ha Long Bay Pin */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(halongDest);
                          handleOpenDestinationExplorer(halongDest);
                        }}
                        title="Vịnh Hạ Long"
                        className="absolute top-[28%] left-[58%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20 group/pin"
                      >
                        <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden ring-2 ring-rose-400 animate-pulse">
                          <img src="/destinations/halong_bay.jpg" alt="Ha Long" className="w-full h-full object-cover" />
                        </div>
                      </button>

                      {/* Hanoi Pin */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(hanoiDest);
                          handleOpenDestinationExplorer(hanoiDest);
                        }}
                        title="Hà Nội"
                        className="absolute top-[25%] left-[38%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20"
                      >
                        <div className="w-7 h-7 rounded-full border-2 border-white shadow-lg overflow-hidden ring-2 ring-amber-400">
                          <img src="/destinations/hanoi_turtle_tower.jpg" alt="Hanoi" className="w-full h-full object-cover" />
                        </div>
                      </button>

                      {/* Hue Pin */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(hueDest);
                          handleOpenDestinationExplorer(hueDest);
                        }}
                        title="Cố đô Huế"
                        className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20"
                      >
                        <div className="w-7 h-7 rounded-full border-2 border-white shadow-lg overflow-hidden ring-2 ring-purple-400">
                          <img src="/destinations/hue_citadel.jpg" alt="Hue" className="w-full h-full object-cover" />
                        </div>
                      </button>

                      {/* Da Nang Pin */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(danangDest);
                          handleOpenDestinationExplorer(danangDest);
                        }}
                        title="Đà Nẵng & Hội An"
                        className="absolute top-[60%] left-[52%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20"
                      >
                        <div className="w-7 h-7 rounded-full border-2 border-white shadow-lg overflow-hidden ring-2 ring-emerald-400">
                          <img src="/destinations/danang_golden_bridge.jpg" alt="Da Nang" className="w-full h-full object-cover" />
                        </div>
                      </button>

                      {/* Floating One-click switch to 34 provinces map */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20">
                        <button
                          onClick={() => setMapDisplayMode('interactive_34_provinces')}
                          className="px-3.5 py-1 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white text-[11px] font-black shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-transform hover:scale-103 cursor-pointer"
                        >
                          <span>🇻🇳 Mở Bản đồ 34 Tỉnh/Thành 2025</span>
                          <span>➔</span>
                        </button>
                      </div>

                      {/* Right Map Action Controls */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-md border border-slate-200 z-30">
                        <button
                          onClick={() => handleOpenDestinationExplorer(selectedDestination)}
                          className="p-1.5 rounded-xl hover:bg-sky-100 text-sky-800 transition-colors cursor-pointer"
                          title="Xem chi tiết địa danh"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setMapDisplayMode('interactive_34_provinces')}
                          className="p-1.5 rounded-xl hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer"
                          title="Mở bản đồ GIS WGS84 chính thức 34 Tỉnh/Thành"
                        >
                          <MapIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setIsVectorGisModalOpen(true)}
                          className="p-1.5 rounded-xl hover:bg-purple-100 text-purple-800 transition-colors cursor-pointer"
                          title="Phóng to toàn màn hình"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* 3. RIGHT COLUMN: ⭐ NHIỆM VỤ HÔM NAY CHALLENGE CARD */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-3.5 border-2 border-sky-200/80 shadow-xs flex flex-col justify-between space-y-3">
                      {/* Header Title + View All */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black font-heading text-blue-950">
                          <span className="text-amber-500">⭐</span>
                          <span>Nhiệm vụ hôm nay</span>
                        </div>
                        <button
                          onClick={() => onSelectTab && onSelectTab('games')}
                          className="text-[11px] font-bold text-sky-700 hover:text-sky-900 cursor-pointer flex items-center gap-0.5"
                        >
                          <span>Xem tất cả</span>
                          <span>➔</span>
                        </button>
                      </div>

                      {/* Destination Photo with Region Tag */}
                      <div className="relative rounded-2xl overflow-hidden shadow-xs border border-slate-100 h-28 sm:h-32 group">
                        <img
                          src={selectedDestination.image || '/destinations/halong_bay.jpg'}
                          alt={selectedDestination.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-rose-500/90 text-white font-black text-[10px] shadow-xs border border-white/70">
                          {selectedDestination.region === 'North' ? 'Miền Bắc' : selectedDestination.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                        </div>
                      </div>

                      {/* Task Title & Subtitle */}
                      <div>
                        <h5 className="text-xs sm:text-sm font-black font-heading text-slate-900 leading-tight">
                          Khám phá {selectedDestination.vietnameseName}
                        </h5>
                        <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          Kéo thả đúng vị trí trên bản đồ!
                        </p>
                      </div>

                      {/* Bottom Action: +20 Stars & Play Buttons */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black shadow-xs">
                          <span>⭐</span>
                          <span>+20 Stars</span>
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenDestinationExplorer(selectedDestination)}
                            className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
                            title="Xem chi tiết địa danh"
                          >
                            <span>Chi tiết</span>
                          </button>

                          <button
                            onClick={() => {
                              soundEffects.playClick();
                              setIsLandmarkGameModalOpen(true);
                            }}
                            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-black shadow-md hover:scale-103 active:scale-97 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Kéo thả</span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. MAIN UNIT ADVENTURE HUB - MATCHING IMAGE 1 */}
          {(exploreViewMode === 'both' || exploreViewMode === 'units') && (
            <div id="adventure-units-section" className="space-y-4 pt-2">
              <UnitAdventureHub
                destinations={destinations}
                progressMap={progressMap}
                gradeBand={activeGradeBand}
                onOpenLesson={handleOpenLesson}
                onOpenDestinationModal={handleOpenDestinationExplorer}
                onToggleMapView={() => setIsVectorGisModalOpen(true)}
                isMapVisible={false}
                onSelectStudentTab={onSelectTab}
                activeStudentTab={activeTab}
              />
            </div>
          )}
            </>
          )}

          </div> {/* END discovery-experience-arena */}

        </div>
      )}

      {/* ============================================================== */}
      {/* OTHER TABS: ĐẤU TRƯỜNG | VIDEO ACADEMY | HỘ CHIẾU | TIẾN ĐỘ    */}
      {/* ============================================================== */}
      {activeTab === 'games' && (
        <Suspense fallback={<AdventureLoadingFallback message="Loading adventure games arena..." subMessage="Đang tải đấu trường trò chơi..." />}>
          <AdventureGames
            destinations={destinations}
            gradeBand={activeGradeBand}
            onEarnStars={onEarnStars || (() => {})}
            progressMap={progressMap}
            onSaveGameProgress={onSaveGameProgress}
          />
        </Suspense>
      )}

      {/* VIDEO LEARNING ACADEMY TAB */}
      {activeTab === 'videos' && (
        <Suspense fallback={<AdventureLoadingFallback message="Opening Video Academy..." subMessage="Đang mở học viện video thám hiểm..." />}>
          <VideoAcademyHub
            user={user}
            onEarnStars={onEarnStars}
          />
        </Suspense>
      )}

      {activeTab === 'passport' && (
        <LearningPassport
          user={user}
          destinations={destinations}
          progressMap={progressMap}
          totalStars={totalStars}
          onOpenLesson={handleOpenLesson}
        />
      )}

      {activeTab === 'progress' && (
        <StudentProgressView
          destinations={destinations}
          progressMap={progressMap}
          totalStars={totalStars}
          onOpenLesson={handleOpenLesson}
        />
      )}

      {/* ============================================================== */}
      {/* DESTINATION EXPLORER DETAIL MODAL (MATCHING IMAGE 3)           */}
      {/* ============================================================== */}
      {isDestinationExplorerOpen && (
        <Suspense fallback={null}>
          <DestinationExplorerModal
            destination={explorerDestination}
            isOpen={isDestinationExplorerOpen}
            onClose={() => setIsDestinationExplorerOpen(false)}
            onStartAdventure={(dest, initialTab) => {
              setIsDestinationExplorerOpen(false);
              handleOpenLesson(dest, initialTab || 'vocabulary');
            }}
            gradeBand={activeGradeBand}
          />
        </Suspense>
      )}

      {/* ============================================================== */}
      {/* HIGH-PRECISION WGS84 GIS MAP MODAL                             */}
      {/* ============================================================== */}
      {isVectorGisModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-4 border-sky-300 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🗺️</span>
                <h3 className="text-lg font-black font-heading text-slate-900">
                  Bản đồ Địa lý Toàn vẹn Lãnh thổ Việt Nam (WGS84 GIS)
                </h3>
              </div>
              <button
                onClick={() => setIsVectorGisModalOpen(false)}
                className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                Đóng
              </button>
            </div>

            <Suspense fallback={<AdventureLoadingFallback message="Loading Vietnam GIS map..." subMessage="Đang tải bản đồ..." />}>
              <VietnamMap
                destinations={destinations}
                selectedDestination={selectedDestination}
                gradeBand={activeGradeBand}
                onSelectDestination={(dest) => {
                  setSelectedDestination(dest);
                  handleOpenDestinationExplorer(dest);
                }}
                onOpenLesson={handleOpenLesson}
              />
            </Suspense>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* LANDMARK DRAG & DROP GAME MODAL                                */}
      {/* ============================================================== */}
      {isLandmarkGameModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-900/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[94vh] bg-transparent rounded-3xl overflow-y-auto">
            <Suspense fallback={<AdventureLoadingFallback message="Preparing landmark game..." subMessage="Đang mở trò chơi địa danh..." />}>
              <LandmarkDragDropGame
                gradeBand={activeGradeBand}
                onEarnStars={onEarnStars}
                onClose={() => setIsLandmarkGameModalOpen(false)}
                savedProgress={progressMap?.['game-landmark-drag-drop']}
                onSaveGameProgress={onSaveGameProgress}
              />
            </Suspense>
          </div>
        </div>
      )}

      {/* Standard Interactive Lesson Modals */}
      {isLessonModalOpen && activeLessonDestination && (
        <Suspense fallback={<AdventureLoadingFallback message="Opening learning mission..." subMessage="Đang tải bài học..." />}>
          {activeGradeBand === 'grade_1' || activeGradeBand === 'grade_2' ? (
            <Grade12LessonModal
              destination={activeLessonDestination}
              isOpen={isLessonModalOpen}
              onClose={() => setIsLessonModalOpen(false)}
              onCompleteLesson={(destId: string, score: number, stars: number) => handleCompleteLesson(destId, score, stars)}
              initialStep={initialLessonTab === 'reading' ? 'learn' : initialLessonTab === 'listening' ? 'listen' : initialLessonTab === 'speaking' ? 'speak' : initialLessonTab === 'quiz' ? 'play' : 'listen'}
            />
          ) : (
            <LessonModal
              destination={activeLessonDestination}
              isOpen={isLessonModalOpen}
              onClose={() => setIsLessonModalOpen(false)}
              onCompleteLesson={(destId: string, score: number, stars: number) => handleCompleteLesson(destId, score, stars)}
              initialTab={initialLessonTab}
            />
          )}
        </Suspense>
      )}

      {/* ============================================================== */}
      {/* CAPTAIN TRANG INTERACTIVE ADVENTURE GUIDE DIALOG               */}
      {/* ============================================================== */}
      {showCaptainTrangDialog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseCaptainTrangDialog}
        >
          <div 
            className="relative w-full max-w-lg bg-gradient-to-b from-[#f0f9ff] via-[#ffffff] to-[#fff1f2] rounded-[32px] p-5 sm:p-7 shadow-[0_25px_60px_rgba(244,63,94,0.35)] border-4 border-pink-300 space-y-5 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={handleCloseCaptainTrangDialog}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer border border-slate-200 z-10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Character Header: Image Card + Identity */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border-2 border-pink-400 shadow-md shrink-0 bg-white group p-1">
                <img
                  src="/assets/cute/captain_trang_banner_official.png"
                  alt="Captain Trần Thị Thu Trang"
                  className="w-full h-auto object-contain select-none"
                  style={{ aspectRatio: '1024 / 341' }}
                />
              </div>

              <div className="min-w-0 pr-8 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black text-xs shadow-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                  <span>Captain Trần Thị Thu Trang 🧭</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading leading-tight">
                  Your Vietnam Adventure Guide
                </h3>
                <p className="text-xs text-slate-600 font-bold">
                  Cô Trần Thị Thu Trang • Tác giả VietDiscovery
                </p>
              </div>
            </div>

            {/* Speech Bubble: English First + Vietnamese Subtitle */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-white/95 border-2 border-pink-200 shadow-sm space-y-2.5">
              {/* Cute speech tail */}
              <div className="absolute -top-2.5 left-10 w-5 h-5 bg-white border-t-2 border-l-2 border-pink-200 transform rotate-45"></div>

              <div className="text-[11px] font-black uppercase tracking-widest text-pink-600 font-heading flex items-center gap-1.5">
                <span>ENGLISH GREETING • LỜI CHÀO TỪ CÔ TRANG:</span>
              </div>

              {/* English text (FIRST, LARGE, BOLD) */}
              <p className="text-base sm:text-lg font-black font-heading text-blue-950 leading-snug">
                “Hello, Little Explorer! I'm Captain Trang. Let's discover Vietnam and learn English together!”
              </p>

              {/* Vietnamese translation */}
              <p className="text-xs sm:text-sm font-bold text-sky-800 leading-normal pt-1 border-t border-sky-100">
                “Xin chào Nhà thám hiểm nhí! Cô là Captain Trang. Hãy cùng khám phá Việt Nam và học tiếng Anh nhé!”
              </p>
            </div>

            {/* Audio Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-sky-50/80 border border-sky-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCaptainTrangClick(isCaptainSlowMode)}
                  className={`px-4 py-2 rounded-xl text-xs font-black text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer ${
                    isCaptainTrangSpeaking
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 animate-pulse ring-2 ring-pink-300'
                      : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isCaptainTrangSpeaking ? 'Speaking... 🔊' : 'Listen Again 🔊'}</span>
                </button>

                <button
                  onClick={() => {
                    const nextSlow = !isCaptainSlowMode;
                    setIsCaptainSlowMode(nextSlow);
                    handleCaptainTrangClick(nextSlow);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    isCaptainSlowMode 
                      ? 'bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>🐢 Slow {isCaptainSlowMode ? '(ON)' : '(Chậm)'}</span>
                </button>
              </div>

              {isCaptainTrangSpeaking && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-black animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  <span>Audio Playing</span>
                </div>
              )}
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 font-heading text-center">
                CHỌN HOẠT ĐỘNG KHÁM PHÁ (CHOOSE YOUR ADVENTURE):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => handleQuickAction('adventure')}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs shadow-sm hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <span>🚀</span>
                  <span>Start Adventure</span>
                </button>
                <button
                  onClick={() => handleQuickAction('map')}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-black text-xs shadow-sm hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <span>🗺️</span>
                  <span>Explore Map</span>
                </button>
                <button
                  onClick={() => handleQuickAction('games')}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-black text-xs shadow-sm hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <span>🎮</span>
                  <span>Play Games</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
