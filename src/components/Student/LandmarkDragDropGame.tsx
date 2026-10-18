import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy, 
  Star, 
  Sparkles, 
  Volume2, 
  Compass, 
  HelpCircle,
  MapPin,
  ChevronRight,
  Flame,
  Award,
  Layers
} from 'lucide-react';
import { GradeBand, DestinationProgress } from '../../types';
import { playEnglishSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

export interface LandmarkDragDropGameProps {
  gradeBand?: GradeBand;
  onEarnStars?: (stars: number) => void;
  onClose?: () => void;
  savedProgress?: DestinationProgress;
  onSaveGameProgress?: (gameId: string, progress: DestinationProgress) => void;
}

export type RegionZone = 'North' | 'Central' | 'South';

export interface DragLandmarkItem {
  id: string;
  nameEn: string;
  nameVi: string;
  provinceEn: string;
  provinceVi: string;
  region: RegionZone;
  icon: string;
  image: string;
  gradeHints: {
    g12: string;
    g3: string;
    g45: string;
  };
  funFactEn: string;
  funFactVi: string;
}

export const SIX_LANDMARKS: DragLandmarkItem[] = [
  {
    id: 'one-pillar-pagoda',
    nameEn: 'One Pillar Pagoda',
    nameVi: 'Chùa Một Cột',
    provinceEn: 'Hanoi Capital',
    provinceVi: 'Thủ đô Hà Nội',
    region: 'North',
    icon: '🏛️',
    image: '/destinations/one_pillar_pagoda_3d.png',
    gradeHints: {
      g12: 'Lotus Pagoda • Chùa hoa sen linh thiêng',
      g3: 'Historic Buddhist temple built like a lotus in Hanoi',
      g45: 'Historic 1049 pagoda in the thousand-year-old capital'
    },
    funFactEn: 'Built in 1049 by Emperor Ly Thai Tong, shaped like an open lotus flower rising from a peaceful pond.',
    funFactVi: 'Ngôi chùa nghìn năm tuổi độc đáo tựa đóa sen thanh khiết vươn lên giữa hồ nước xanh ngọc.'
  },
  {
    id: 'halong-bay',
    nameEn: 'Ha Long Bay',
    nameVi: 'Vịnh Hạ Long',
    provinceEn: 'Quang Ninh Province',
    provinceVi: 'Tỉnh Quảng Ninh',
    region: 'North',
    icon: '⛵',
    image: '/destinations/halong_bay.webp',
    gradeHints: {
      g12: 'Emerald Bay • Vịnh biển xanh ngọc',
      g3: 'UNESCO World Natural Wonder with limestone islands',
      g45: 'Famous northeastern gulf with 1,600+ towering karst islands'
    },
    funFactEn: 'A magical UNESCO World Natural Heritage site with nearly 2,000 limestone islands and hidden caves.',
    funFactVi: 'Kỳ quan thiên nhiên thế giới với gần 2.000 đảo đá vôi kỳ vĩ và làn nước xanh ngọc bích.'
  },
  {
    id: 'hue-citadel',
    nameEn: 'Hue Imperial City',
    nameVi: 'Cố đô Huế',
    provinceEn: 'Hue City',
    provinceVi: 'Thành phố Huế',
    region: 'Central',
    icon: '👑',
    image: '/destinations/hue_citadel.webp',
    gradeHints: {
      g12: 'Royal Palace • Hoàng cung cổ kính',
      g3: 'Ancient royal capital by the gentle Perfume River',
      g45: 'Imperial fortress of the Nguyen Dynasty (1802–1945)'
    },
    funFactEn: 'The historic sovereign capital of the Nguyen Dynasty, famous for grand palaces, royal music, and the Perfume River.',
    funFactVi: 'Kinh đô triều Nguyễn uy nghiêm bên dòng sông Hương, lưu giữ Nhã nhạc cung đình di sản thế giới.'
  },
  {
    id: 'dragon-bridge',
    nameEn: 'Dragon Bridge',
    nameVi: 'Cầu Rồng',
    provinceEn: 'Da Nang City',
    provinceVi: 'Thành phố Đà Nẵng',
    region: 'Central',
    icon: '🐉',
    image: '/destinations/danang_golden_bridge.webp',
    gradeHints: {
      g12: 'Golden Dragon • Rồng vàng phun lửa',
      g3: 'Giant golden dragon spanning the beautiful Han River',
      g45: 'Engineering marvel breathing real fire & water every weekend'
    },
    funFactEn: 'A 666-meter steel dragon that breathes real fire and sprays water into the night sky every weekend!',
    funFactVi: 'Cây cầu rồng thép dài 666 mét ngoạn mục, có khả năng phun lửa và phun nước rực sáng dòng sông Hàn.'
  },
  {
    id: 'ben-thanh-market',
    nameEn: 'Ben Thanh Market',
    nameVi: 'Chợ Bến Thành',
    provinceEn: 'Ho Chi Minh City',
    provinceVi: 'TP. Hồ Chí Minh',
    region: 'South',
    icon: '🏢',
    image: '/destinations/hcmc_benthanh.jpg',
    gradeHints: {
      g12: 'Clock Market • Chợ tháp đồng hồ',
      g3: 'Bustling historic landmark in energetic southern city',
      g45: 'Historic trade symbol of the vibrant southern metropolis'
    },
    funFactEn: 'The bustling historic heart of Ho Chi Minh City with its iconic clock tower and lively stalls.',
    funFactVi: 'Biểu tượng lịch sử hơn trăm năm tuổi của thành phố năng động và sầm uất bậc nhất Nam Bộ.'
  },
  {
    id: 'cai-rang-market',
    nameEn: 'Cai Rang Floating Market',
    nameVi: 'Chợ Nổi Cái Răng',
    provinceEn: 'Can Tho City',
    provinceVi: 'Thành phố Cần Thơ',
    region: 'South',
    icon: '🛶',
    image: '/destinations/mekong_delta.jpg',
    gradeHints: {
      g12: 'River Boats • Chợ nổi trên sông',
      g3: 'Wooden boats trading sweet tropical fruits on the water',
      g45: 'Vibrant cultural trade on the mighty Mekong River Delta'
    },
    funFactEn: 'Farmers sell sweet mangoes, watermelons, and pineapples right from wooden boats on the Mekong waterways.',
    funFactVi: 'Nét văn hóa sông nước độc đáo với hàng trăm ghe xuồng buôn bán hoa trái tươi ngon của miền Tây.'
  }
];

export interface RegionZoneConfig {
  key: RegionZone;
  titleEn: string;
  titleVi: string;
  subEn: string;
  subVi: string;
  borderClass: string;
  bgClass: string;
  activeRing: string;
  dragOverBg: string;
  badgeBg: string;
  badgeColor: string;
  scenicIcon: string;
  expectedLandmarksCount: number;
}

export const REGION_ZONES: RegionZoneConfig[] = [
  {
    key: 'North',
    titleEn: 'Northern Vietnam',
    titleVi: 'Miền Bắc',
    subEn: 'Red River Delta & Ha Long Bay',
    subVi: 'Đồng bằng Sông Hồng & Vịnh Bắc Bộ',
    borderClass: 'border-emerald-300',
    bgClass: 'from-emerald-50/80 via-teal-50/40 to-white',
    activeRing: 'ring-emerald-400',
    dragOverBg: 'bg-emerald-100/90 border-emerald-500 scale-[1.02]',
    badgeBg: 'bg-emerald-500 text-white',
    badgeColor: 'text-emerald-800',
    scenicIcon: '🏔️',
    expectedLandmarksCount: 2
  },
  {
    key: 'Central',
    titleEn: 'Central Vietnam',
    titleVi: 'Miền Trung',
    subEn: 'Imperial Coast & Heritage Route',
    subVi: 'Duyên hải Miền Trung & Cố đô Di sản',
    borderClass: 'border-sky-300',
    bgClass: 'from-sky-50/80 via-blue-50/40 to-white',
    activeRing: 'ring-sky-400',
    dragOverBg: 'bg-sky-100/90 border-sky-500 scale-[1.02]',
    badgeBg: 'bg-sky-500 text-white',
    badgeColor: 'text-sky-800',
    scenicIcon: '🏖️',
    expectedLandmarksCount: 2
  },
  {
    key: 'South',
    titleEn: 'Southern Vietnam',
    titleVi: 'Miền Nam',
    subEn: 'Mekong Delta & Energetic Metropolis',
    subVi: 'Đông Nam Bộ & ĐBSCL Sông Nước',
    borderClass: 'border-amber-300',
    bgClass: 'from-amber-50/80 via-orange-50/40 to-white',
    activeRing: 'ring-amber-400',
    dragOverBg: 'bg-amber-100/90 border-amber-500 scale-[1.02]',
    badgeBg: 'bg-amber-500 text-white',
    badgeColor: 'text-amber-800',
    scenicIcon: '🌴',
    expectedLandmarksCount: 2
  }
];

export const LandmarkDragDropGame: React.FC<LandmarkDragDropGameProps> = ({
  gradeBand = 'grade_3',
  onEarnStars,
  onClose,
  savedProgress,
  onSaveGameProgress
}) => {
  // Derive restored items from savedProgress if present
  const getRestoredState = () => {
    let savedIds = (savedProgress?.completedSteps?.placedLandmarks || []) as string[];
    // Robust fallback: if legacy database stripped placedLandmarks array but recorded completion
    if ((!savedIds || savedIds.length === 0) && (savedProgress?.quizScore === SIX_LANDMARKS.length || (savedProgress?.starsEarned && savedProgress.starsEarned >= 195) || savedProgress?.completedSteps?.completed)) {
      savedIds = SIX_LANDMARKS.map(l => l.id);
    }
    if (Array.isArray(savedIds) && savedIds.length > 0) {
      const placed = SIX_LANDMARKS
        .filter(lm => savedIds.includes(lm.id))
        .map(lm => ({ landmark: lm, zone: lm.region }));
      const unplaced = SIX_LANDMARKS.filter(lm => !savedIds.includes(lm.id));
      const completed = Boolean(savedProgress?.completedSteps?.completed || unplaced.length === 0);
      return {
        placed,
        unplaced,
        stars: savedProgress?.starsEarned || 0,
        completed
      };
    }
    return {
      placed: [],
      unplaced: SIX_LANDMARKS,
      stars: 0,
      completed: false
    };
  };

  // Game state
  const [unplacedLandmarks, setUnplacedLandmarks] = useState<DragLandmarkItem[]>(() => getRestoredState().unplaced);
  const [placedLandmarks, setPlacedLandmarks] = useState<{ landmark: DragLandmarkItem; zone: RegionZone }[]>(() => getRestoredState().placed);
  const [selectedLandmark, setSelectedLandmark] = useState<DragLandmarkItem | null>(null);
  
  // Drag over states
  const [dragOverZone, setDragOverZone] = useState<RegionZone | null>(null);
  
  // Feedback state
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | 'complete';
    messageEn: string;
    messageVi: string;
  } | null>(null);

  // Score & Stars
  const [starsEarned, setStarsEarned] = useState<number>(() => getRestoredState().stars);
  const [isCompleted, setIsCompleted] = useState<boolean>(() => getRestoredState().completed);
  const [streak, setStreak] = useState(0);

  // Synchronize state when savedProgress updates (e.g. cloud sync or session login load)
  useEffect(() => {
    let savedIds = (savedProgress?.completedSteps?.placedLandmarks || []) as string[];
    if ((!savedIds || savedIds.length === 0) && (savedProgress?.quizScore === SIX_LANDMARKS.length || (savedProgress?.starsEarned && savedProgress.starsEarned >= 195) || savedProgress?.completedSteps?.completed)) {
      savedIds = SIX_LANDMARKS.map(l => l.id);
    }
    if (Array.isArray(savedIds) && savedIds.length > 0) {
      const restoredPlaced = SIX_LANDMARKS
        .filter(lm => savedIds.includes(lm.id))
        .map(lm => ({ landmark: lm, zone: lm.region }));
      const restoredUnplaced = SIX_LANDMARKS.filter(lm => !savedIds.includes(lm.id));
      setPlacedLandmarks(restoredPlaced);
      setUnplacedLandmarks(restoredUnplaced);
      setStarsEarned(prev => Math.max(prev, savedProgress?.starsEarned || 0));
      if (restoredUnplaced.length === 0 || savedProgress?.completedSteps?.completed) {
        setIsCompleted(true);
      }
    }
  }, [savedProgress]);

  // Helper to pronounce landmark in natural English
  const handlePronounceLandmark = (lm: DragLandmarkItem, e: React.MouseEvent) => {
    e.stopPropagation();
    playEnglishSpeech(`${lm.nameEn}! ${lm.provinceEn}, Vietnam.`);
  };

  // Helper to validate and place landmark
  const attemptPlaceLandmark = (landmark: DragLandmarkItem, targetZone: RegionZone) => {
    if (landmark.region === targetZone) {
      // 1. Correct Match!
      soundEffects.playSuccess();

      // Replay Protection: Check if this landmark was already rewarded previously
      const previouslySavedIds = (savedProgress?.completedSteps?.placedLandmarks || []) as string[];
      const alreadyPlacedCurrently = placedLandmarks.some(p => p.landmark.id === landmark.id);
      const isAlreadyRewarded = alreadyPlacedCurrently || previouslySavedIds.includes(landmark.id);

      const newStreak = streak + 1;
      setStreak(newStreak);

      let starReward = 0;
      let newStarsEarned = starsEarned;

      if (!isAlreadyRewarded) {
        starReward = 20 + Math.min(newStreak * 5, 20);
        newStarsEarned = starsEarned + starReward;
        setStarsEarned(newStarsEarned);
        onEarnStars?.(starReward);
      }

      // Add to placed list & remove from unplaced
      const newPlaced = [
        ...placedLandmarks.filter(p => p.landmark.id !== landmark.id),
        { landmark, zone: targetZone }
      ];
      const newUnplaced = unplacedLandmarks.filter(item => item.id !== landmark.id);
      
      setPlacedLandmarks(newPlaced);
      setUnplacedLandmarks(newUnplaced);
      setSelectedLandmark(null);

      // Cheerful Feedback
      setFeedback({
        type: 'correct',
        messageEn: `Correct! Great job! ${landmark.nameEn} belongs to ${targetZone}ern Vietnam!${isAlreadyRewarded ? ' (Practice Mode)' : ''}`,
        messageVi: `Chính xác tuyệt vời! ${landmark.nameVi} thuộc ${targetZone === 'North' ? 'Miền Bắc' : targetZone === 'Central' ? 'Miền Trung' : 'Miền Nam'}!${isAlreadyRewarded ? ' (Chế độ luyện tập)' : ''}`
      });

      const nextCompleted = newUnplaced.length === 0;

      // Check if complete
      if (nextCompleted) {
        setIsCompleted(true);
        soundEffects.playComplete();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        setFeedback({
          type: 'complete',
          messageEn: 'Mission Complete! Amazing Explorer! You mastered the landmarks of Vietnam! 🌟',
          messageVi: 'Nhiệm vụ hoàn thành xuất sắc! Con là Nhà thám hiểm tài ba của dải đất hình chữ S! 🏆'
        });
      }

      // Persist to Cloud & Local Storage via onSaveGameProgress callback
      const placedIds = newPlaced.map(p => p.landmark.id);
      const gameProgress: DestinationProgress = {
        destinationId: 'game-landmark-drag-drop',
        completedSteps: {
          vocabulary: true,
          reading: true,
          listening: true,
          speaking: true,
          quiz: true,
          placedLandmarks: placedIds,
          placements: newPlaced.map(p => ({ id: p.landmark.id, zone: p.zone })),
          completed: nextCompleted
        },
        quizScore: placedIds.length,
        totalQuestions: SIX_LANDMARKS.length,
        attempts: (savedProgress?.attempts || 0) + 1,
        starsEarned: Math.max(savedProgress?.starsEarned || 0, newStarsEarned),
        lastAttemptDate: 'Vừa xong'
      };

      onSaveGameProgress?.('game-landmark-drag-drop', gameProgress);
    } else {
      // 2. Incorrect Match
      soundEffects.playClick();
      setStreak(0);
      setFeedback({
        type: 'wrong',
        messageEn: `Try again! ${landmark.nameEn} is NOT located in ${targetZone}ern Vietnam.`,
        messageVi: `Chưa đúng rồi! "${landmark.nameVi}" không thuộc ${targetZone === 'North' ? 'Miền Bắc' : targetZone === 'Central' ? 'Miền Trung' : 'Miền Nam'} đâu bé ơi.`
      });
    }
  };

  // Reset Game for Replay / Practice (preserves genuine accumulated stars)
  const handleResetGame = () => {
    soundEffects.playClick();
    setUnplacedLandmarks(SIX_LANDMARKS);
    setPlacedLandmarks([]);
    setSelectedLandmark(null);
    setDragOverZone(null);
    setFeedback(null);
    setIsCompleted(false);
    setStreak(0);
  };

  // ----------------------------------------------------
  // HTML5 Drag & Drop Event Handlers (Desktop Mouse)
  // ----------------------------------------------------
  const handleDragStart = (e: React.DragEvent, landmark: DragLandmarkItem) => {
    e.dataTransfer.setData('text/plain', landmark.id);
    setSelectedLandmark(landmark);
  };

  const handleDragOver = (e: React.DragEvent, zone: RegionZone) => {
    e.preventDefault();
    if (dragOverZone !== zone) {
      setDragOverZone(zone);
    }
  };

  const handleDragLeave = (e: React.DragEvent, zone: RegionZone) => {
    if (dragOverZone === zone) {
      setDragOverZone(null);
    }
  };

  const handleDrop = (e: React.DragEvent, zone: RegionZone) => {
    e.preventDefault();
    setDragOverZone(null);
    const landmarkId = e.dataTransfer.getData('text/plain');
    const landmark = unplacedLandmarks.find(l => l.id === landmarkId) || selectedLandmark;
    if (landmark) {
      attemptPlaceLandmark(landmark, zone);
    }
  };

  // ----------------------------------------------------
  // Touch / Click Handler (Mobile Tap-to-Select)
  // ----------------------------------------------------
  const handleSelectLandmarkCard = (landmark: DragLandmarkItem) => {
    soundEffects.playClick();
    if (selectedLandmark?.id === landmark.id) {
      setSelectedLandmark(null); // Toggle off
    } else {
      setSelectedLandmark(landmark);
    }
  };

  const handleTapZone = (zone: RegionZone) => {
    if (selectedLandmark) {
      attemptPlaceLandmark(selectedLandmark, zone);
    }
  };

  // Get grade-appropriate hint
  const getHint = (lm: DragLandmarkItem) => {
    if (gradeBand === 'grade_1' || gradeBand === 'grade_2' || gradeBand === 'grade_1_2') {
      return lm.gradeHints.g12;
    }
    if (gradeBand === 'grade_3') {
      return lm.gradeHints.g3;
    }
    return lm.gradeHints.g45;
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-4 sm:p-7 border-3 border-sky-300/80 shadow-[0_12px_36px_rgba(56,189,248,0.18)] space-y-6">
      
      {/* 1. Header Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-sky-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center text-lg shadow-xs font-bold shrink-0">
              🧭
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                  Landmark Drag & Drop Challenge
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-wider border border-rose-200 hidden sm:inline-block">
                  {gradeBand.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-sky-800 mt-0.5">
                Kéo thả từng thẻ danh lam thắng cảnh vào đúng vùng miền: Miền Bắc, Miền Trung hoặc Miền Nam!
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls & Star Score */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Streak Counter */}
          {streak > 1 && (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 font-black text-xs animate-pulse">
              <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>x{streak} Streak!</span>
            </div>
          )}

          {/* Stars Earned */}
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm shadow-xs">
            <span>⭐</span>
            <span>+{starsEarned} Stars</span>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleResetGame}
            className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-all hover:scale-103"
            title="Play again / Chơi lại từ đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Close Modal Button (if modal) */}
          {onClose && (
            <button
              onClick={onClose}
              className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs cursor-pointer transition-all hover:scale-103"
              title="Đóng cửa sổ trò chơi"
            >
              <span>✕</span>
              <span className="hidden sm:inline">Đóng</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Feedback Alert Banner with Mascot */}
      {feedback && (
        <div className={`p-4 rounded-[24px] border-2 shadow-xs transition-all flex items-center justify-between gap-3 animate-in fade-in duration-200 ${
          feedback.type === 'correct' || feedback.type === 'complete'
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-rose-50 border-rose-300 text-rose-950'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl shrink-0">
              {feedback.type === 'complete' ? '🏆' : feedback.type === 'correct' ? '🎉' : '💡'}
            </span>
            <div>
              <div className="text-sm sm:text-base font-black font-heading leading-tight">
                {feedback.messageEn}
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">
                {feedback.messageVi}
              </div>
            </div>
          </div>

          {feedback.type === 'complete' && (
            <button
              onClick={handleResetGame}
              className="px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs cursor-pointer shadow-md shrink-0 transition-transform active:scale-95"
            >
              Play Again ↺
            </button>
          )}
        </div>
      )}

      {/* 3. Instruction Bar & Mascot Advice */}
      <div className="bg-gradient-to-r from-sky-50 via-indigo-50/50 to-pink-50 p-4 rounded-[24px] border-2 border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 border-pink-300 shadow-md shrink-0 bg-white cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              playEnglishSpeech(selectedLandmark
                ? `You selected ${selectedLandmark.nameEn}. Now place it into the correct region!`
                : 'Drag a landmark card or tap it, then choose Northern, Central, or Southern Vietnam!');
            }}
            title="Click to hear Captain Trang's tip!"
          >
            <img
              src="/assets/cute/captain_trang_official.png"
              alt="Captain Trang Mascot"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-pink-600 font-heading">
              CAPTAIN TRANG'S EXPLORER GUIDE:
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">
              {selectedLandmark
                ? `👉 You selected "${selectedLandmark.nameEn}". Now tap or drop into the correct region below!`
                : '🎯 Drag a landmark card or tap it, then choose its region (North, Central, or South)!'}
            </div>
          </div>
        </div>

        {/* Progress Tracker Pill */}
        <div className="flex items-center gap-2 bg-white/90 px-3.5 py-1.5 rounded-full border border-sky-200 text-xs font-black shadow-2xs shrink-0">
          <span className="text-sky-600">Progress:</span>
          <span className="text-emerald-600 font-mono text-sm">{placedLandmarks.length} / {SIX_LANDMARKS.length}</span>
          <span>Landmarks</span>
        </div>
      </div>

      {/* 4. UNPLACED LANDMARK CARDS POOL (6 LANDMARKS) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5 font-heading">
            <span className="text-rose-500">📍</span>
            <span>LANDMARKS TO CLASSIFY (THẺ ĐỊA DANH CẦN XẾP):</span>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {unplacedLandmarks.length} remaining
          </span>
        </div>

        {unplacedLandmarks.length === 0 ? (
          /* All Placed Celebration State */
          <div className="p-8 rounded-[28px] bg-gradient-to-tr from-emerald-50 via-teal-50 to-sky-50 border-3 border-emerald-300 text-center space-y-3 shadow-sm">
            <div className="text-5xl animate-bounce">🏆</div>
            <h4 className="text-xl sm:text-2xl font-black font-heading text-emerald-950">
              Amazing Explorer! All Landmarks Classified!
            </h4>
            <p className="text-sm font-semibold text-emerald-800 max-w-md mx-auto">
              Bé đã xuất sắc hoàn thành xếp 6 địa danh vào đúng 3 miền đất nước Việt Nam! Ghi nhận <strong>+{starsEarned} Sao thưởng</strong> vào Sổ thám hiểm.
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetGame}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm shadow-md hover:scale-103 active:scale-97 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again (Chơi lại ván mới)</span>
              </button>
            </div>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {unplacedLandmarks.map((lm) => {
              const isSelected = selectedLandmark?.id === lm.id;

              return (
                <div
                  key={lm.id}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, lm)}
                  onClick={() => handleSelectLandmarkCard(lm)}
                  className={`group relative p-3.5 rounded-[24px] border-2 transition-all cursor-grab active:cursor-grabbing flex items-center gap-3.5 select-none shadow-xs ${
                    isSelected
                      ? 'bg-rose-50 border-rose-500 ring-4 ring-rose-200 shadow-md scale-102 -translate-y-0.5'
                      : 'bg-white hover:bg-sky-50/50 border-sky-100 hover:border-sky-300 hover:shadow-md hover:scale-101'
                  }`}
                >
                  {/* Landmark Thumbnail */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-sky-200 shrink-0 shadow-xs group-hover:scale-105 transition-transform bg-slate-100">
                    <img
                      src={lm.image}
                      alt={lm.nameEn}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.webp')) {
                          target.src = target.src.replace('.webp', '.jpg');
                        }
                      }}
                    />
                    <div className="absolute top-1 left-1 text-xs">
                      {lm.icon}
                    </div>
                  </div>

                  {/* Landmark Information */}
                  <div className="flex-1 min-w-0 space-y-0.5">
                    {/* English Name (Large & Bold) */}
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-black text-slate-900 text-sm sm:text-base truncate font-heading group-hover:text-sky-900">
                        {lm.nameEn}
                      </h4>
                      {/* Audio Button */}
                      <button
                        onClick={(e) => handlePronounceLandmark(lm, e)}
                        className="p-1 rounded-full text-sky-600 hover:text-sky-900 hover:bg-sky-100 shrink-0 cursor-pointer transition-colors"
                        title="Listen to pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Vietnamese Name */}
                    <div className="text-xs font-bold text-sky-700 truncate">
                      {lm.nameVi} • {lm.provinceVi}
                    </div>

                    {/* Grade-Adapted Hint */}
                    <p className="text-[11px] text-slate-500 truncate font-medium pt-0.5">
                      {getHint(lm)}
                    </p>

                    {/* Touch Action Pill */}
                    <div className="pt-1">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isSelected 
                          ? 'bg-rose-500 text-white shadow-xs' 
                          : 'bg-sky-100 text-sky-800'
                      }`}>
                        {isSelected ? '👉 Selected! Tap region below' : 'Drag or Tap'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. THREE LARGE ILLUSTRATED DROP ZONES */}
      <div className="space-y-2 pt-2">
        <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5 px-1 font-heading">
          <span className="text-sky-600">🎯</span>
          <span>REGIONAL DROP ZONES (3 VÙNG MIỀN TIẾP NHẬN ĐỊA DANH):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REGION_ZONES.map((zone) => {
            const placedInThisZone = placedLandmarks.filter(p => p.zone === zone.key);
            const isDragOver = dragOverZone === zone.key;
            const isTargetReady = Boolean(selectedLandmark);

            return (
              <div
                key={zone.key}
                onDragOver={(e) => handleDragOver(e, zone.key)}
                onDragLeave={(e) => handleDragLeave(e, zone.key)}
                onDrop={(e) => handleDrop(e, zone.key)}
                onClick={() => handleTapZone(zone.key)}
                className={`relative p-5 rounded-[28px] border-3 border-dashed transition-all cursor-pointer flex flex-col justify-between min-h-[260px] shadow-xs group ${
                  zone.borderClass
                } bg-gradient-to-b ${zone.bgClass} ${
                  isDragOver ? zone.dragOverBg : ''
                } ${
                  isTargetReady && !isDragOver ? 'hover:scale-[1.01] hover:shadow-md' : ''
                }`}
              >
                {/* Zone Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${zone.badgeBg}`}>
                        {zone.scenicIcon} {zone.key.toUpperCase()}
                      </span>
                      <h4 className="text-base sm:text-lg font-black font-heading text-slate-900 leading-tight">
                        {zone.titleEn}
                      </h4>
                    </div>

                    {/* Counter Badge */}
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs font-mono">
                      {placedInThisZone.length} / {zone.expectedLandmarksCount}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-700">
                    {zone.titleVi} • {zone.subVi}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {zone.subEn}
                  </div>
                </div>

                {/* Placed Landmark Mini-Cards */}
                <div className="my-3 space-y-2 flex-1 min-h-[80px]">
                  {placedInThisZone.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-slate-200/80 rounded-2xl bg-white/40">
                      <span className="text-2xl opacity-40">{zone.scenicIcon}</span>
                      <span className="text-xs text-slate-400 font-bold mt-1">
                        {selectedLandmark ? `Tap here to place in ${zone.titleEn}` : `Drop ${zone.titleEn} landmarks here`}
                      </span>
                    </div>
                  ) : (
                    placedInThisZone.map(({ landmark }) => (
                      <div
                        key={landmark.id}
                        className="p-2.5 rounded-2xl bg-white border-2 border-emerald-200 text-xs font-bold text-slate-800 flex items-center justify-between gap-2 shadow-xs animate-in zoom-in-95 duration-200"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={landmark.image}
                            alt={landmark.nameEn}
                            className="w-9 h-9 rounded-xl object-cover shrink-0 border border-slate-200"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (target.src.endsWith('.webp')) {
                                target.src = target.src.replace('.webp', '.jpg');
                              }
                            }}
                          />
                          <div className="min-w-0">
                            <div className="font-black text-slate-900 truncate">
                              {landmark.nameEn}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {landmark.nameVi}
                            </div>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Placed</span>
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Bottom Action Prompt Bar */}
                <div className={`text-center py-2 px-3 rounded-2xl text-xs font-black transition-all ${
                  isDragOver
                    ? 'bg-emerald-600 text-white shadow-md scale-102'
                    : selectedLandmark
                    ? 'bg-rose-500 text-white shadow-xs animate-pulse'
                    : 'bg-white/80 text-slate-600 border border-slate-200/60'
                }`}>
                  {isDragOver 
                    ? `Drop into ${zone.titleEn}! 🌟` 
                    : selectedLandmark 
                    ? `Tap to place "${selectedLandmark.nameEn}" here ➔` 
                    : `Drop Zone: ${zone.titleEn}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
