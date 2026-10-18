import React, { useState, useEffect } from 'react';
import { FloatingIslandDef, IslandActivityStep } from './floatingIslandData';
import { Island3DVisual } from './Island3DVisual';
import { soundEffects } from '../../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../../lib/speech';
import { backgroundMusic } from '../../../lib/backgroundMusic';
import { speakingAssessmentEngine, SpeechEvaluationResult } from '../../../lib/speechRecognition';
import { 
  X, 
  Volume2, 
  Volume1, 
  Mic, 
  MicOff,
  CheckCircle2, 
  XCircle, 
  Star, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ArrowRight,
  Trophy,
  HelpCircle,
  ThumbsUp,
  Compass,
  BookOpen,
  Target,
  ShieldCheck,
  Gift
} from 'lucide-react';

interface IslandActivityModalProps {
  island: FloatingIslandDef;
  selectedGrade: 1 | 2 | 3 | 4 | 5;
  isOpen: boolean;
  onClose: () => void;
  onEarnStars?: (stars: number) => void;
}

// Cultural Collectible Badges and Facts by Island & Grade
const ISLAND_COLLECTIBLE_REWARDS: Record<string, { badgeEn: string; badgeVi: string; icon: string; factEn: string; factVi: string }> = {
  wonder_1: {
    badgeEn: 'Ha Long Emerald Voyager Badge',
    badgeVi: 'Huy hiệu Thám hiểm Vịnh Hạ Long',
    icon: '⛵',
    factEn: 'Ha Long Bay has nearly 2,000 limestone karst islands formed over 500 million years!',
    factVi: 'Vịnh Hạ Long có gần 2.000 hòn đảo đá vôi kỳ vĩ được kiến tạo qua 500 triệu năm lịch sử!'
  },
  wonder_2: {
    badgeEn: 'Hoi An Lantern Heritage Seal',
    badgeVi: 'Huy hiệu Đèn lồng Phố Cổ Hội An',
    icon: '🏮',
    factEn: 'Hoi An was a bustling international silk and spice trading port from the 15th to 19th centuries.',
    factVi: 'Phố cổ Hội An từng là thương cảng quốc tế sầm uất nổi tiếng trên Con đường Tơ lụa và Gia vị biển.'
  },
  wonder_3: {
    badgeEn: 'Hue Imperial Dragon Crest',
    badgeVi: 'Huy hiệu Rồng Vàng Hoàng Cung Huế',
    icon: '👑',
    factEn: 'The Imperial Citadel in Hue has 13 royal dynasties and world-famous Court Music (Nha Nhac).',
    factVi: 'Đại Nội Huế lưu giữ di sản của 13 đời vua triều Nguyễn và kiệt tác Nhã nhạc Cung đình UNESCO.'
  },
  wonder_4: {
    badgeEn: 'Highland Pine Guardian Badge',
    badgeVi: 'Huy hiệu Người Bảo vệ Đại Ngàn Tây Nguyên',
    icon: '🌸',
    factEn: 'Da Lat is 1,500m above sea level with perpetual spring weather, waterfalls, and pine hills.',
    factVi: 'Đà Lạt nằm ở độ cao 1.500m so với mực nước biển với khí hậu ôn đới mát mẻ quanh năm và ngàn hoa khoe sắc.'
  },
  wonder_5: {
    badgeEn: 'Trang An UNESCO Mixed Heritage Medal',
    badgeVi: 'Huy chương Di sản Kép UNESCO Tràng An',
    icon: '🏞️',
    factEn: 'Trang An in Ninh Binh is Southeast Asia’s first UNESCO Mixed World Heritage site.',
    factVi: 'Tràng An (Ninh Bình) là di sản thế giới hỗn hợp đầu tiên của Đông Nam Á được UNESCO công nhận.'
  },
  listening_1: {
    badgeEn: 'Sound Explorer Robot Pin',
    badgeVi: 'Huy hiệu Đôi Tai Vàng Phi Thuyền Robot',
    icon: '🎧',
    factEn: 'Children who listen to English stories daily develop authentic native-like accents faster!',
    factVi: 'Luyện nghe tiếng Anh mỗi ngày giúp các em hình thành phản xạ ngôn ngữ và ngữ điệu tự nhiên nhanh nhất!'
  },
  listening_2: {
    badgeEn: 'AI Science Lab Detective Badge',
    badgeVi: 'Huy hiệu Thám Tử Phòng Lab AI',
    icon: '🤖',
    factEn: 'Vietnamese space satellites monitor weather and environmental protection across the homeland.',
    factVi: 'Các vệ tinh không gian của Việt Nam đang ngày đêm theo dõi thời tiết và bảo vệ môi trường quê hương.'
  },
  listening_3: {
    badgeEn: 'High-Tech Aviation Wings',
    badgeVi: 'Huy hiệu Cánh Bay Công Nghệ Cao',
    icon: '🛸',
    factEn: 'Modern green electric transportation in Vietnam helps reduce carbon emissions.',
    factVi: 'Giao thông xanh và xe buýt điện thông minh tại Việt Nam đang góp phần giảm khí thải và bảo vệ bầu trời trong lành.'
  },
  listening_4: {
    badgeEn: 'Smart Acoustics Master Crest',
    badgeVi: 'Huy hiệu Bậc Thầy Sóng Âm Thông Minh',
    icon: '📡',
    factEn: 'Son Doong Cave in Quang Binh is so vast it has its own subterranean clouds and weather system!',
    factVi: 'Hang Sơn Đoòng tại Quảng Bình lớn đến mức có cả hệ thống mây mù và thời tiết độc lập bên trong hang!'
  },
  listening_5: {
    badgeEn: 'Quantum Listening Pioneer Medal',
    badgeVi: 'Huy chương Tiên Phong Công Nghệ Lượng Tử',
    icon: '🛰️',
    factEn: 'Vietnam is rapidly building modern green technology hubs and smart coastal cities.',
    factVi: 'Việt Nam đang phát triển mạnh mẽ các trung tâm công nghệ xanh và đô thị thông minh ven biển.'
  },
  speaking_1: {
    badgeEn: 'American English Phonics Star',
    badgeVi: 'Ngôi Sao Phát Âm Giọng Mỹ Chuẩn',
    icon: '🎙️',
    factEn: 'Speaking English words with clear ending sounds makes communication instant and accurate!',
    factVi: 'Bật rõ âm cuối (ending sounds) trong tiếng Anh giúp người nghe hiểu chính xác 100% điều em nói!'
  },
  speaking_2: {
    badgeEn: 'Neon Stage Melody Pin',
    badgeVi: 'Huy hiệu Giọng Ca Sân Khấu Âm Nhạc',
    icon: '⭐',
    factEn: 'Rhythm and intonation turn everyday English conversations into joyful singing melodies.',
    factVi: 'Ngữ điệu và nhịp điệu tự nhiên biến các câu giao tiếp tiếng Anh thành giai điệu rộn rã đầy tự tin.'
  },
  speaking_3: {
    badgeEn: 'Bilingual Youth Diplomat Badge',
    badgeVi: 'Huy hiệu Đại Sứ Nhí Song Ngữ',
    icon: '🌟',
    factEn: 'Primary students speaking English proudly introduce Vietnam’s beauty to international friends.',
    factVi: 'Học sinh tiểu học tự tin nói tiếng Anh sẽ là những đại sứ nhí giới thiệu vẻ đẹp Việt Nam ra thế giới.'
  },
  speaking_4: {
    badgeEn: 'Speech Orator Golden Mic',
    badgeVi: 'Micro Vàng Hùng Biện Tiếng Anh',
    icon: '🎤',
    factEn: 'Speaking clearly about traditional dishes like Pho and Banh Mi spreads Vietnamese culture globally.',
    factVi: 'Tự tin giới thiệu các món ăn truyền thống như Phở, Bánh mì giúp văn hóa ẩm thực Việt Nam bay xa.'
  },
  speaking_5: {
    badgeEn: 'Global Voice Champion Trophy',
    badgeVi: 'Cúp Quán Quân Hùng Biện Toàn Cầu',
    icon: '🏆',
    factEn: 'Confident English presentation is the key to studying and leading in the international future!',
    factVi: 'Kỹ năng thuyết trình tiếng Anh tự tin là chìa khóa vàng giúp các em tự hào bước ra thế giới!'
  },
  puzzle_1: {
    badgeEn: 'Fairy Book Word Crafter',
    badgeVi: 'Huy hiệu Nghệ Nhân Ghép Chữ Kỳ Diệu',
    icon: '📚',
    factEn: 'Unscrambling letters boosts visual memory and strengthens spelling skills effortlessly.',
    factVi: 'Trò chơi ghép chữ cái tiếng Anh giúp kích thích trí nhớ hình ảnh và ghi nhớ mặt chữ bền vững.'
  },
  puzzle_2: {
    badgeEn: 'Heritage Lexicon Key',
    badgeVi: 'Chìa Khóa Vàng Từ Vựng Di Sản',
    icon: '🗝️',
    factEn: 'Each English word learned is a new window opening to understand the world and Vietnamese wonders.',
    factVi: 'Mỗi từ vựng tiếng Anh được khám phá là một ô cửa sổ mới mở ra thế giới bao la và kỳ thú.'
  },
  puzzle_3: {
    badgeEn: 'Grammar Bridge Builder Badge',
    badgeVi: 'Huy hiệu Xây Nhịp Cầu Ngữ Pháp',
    icon: '🌉',
    factEn: 'Sentence patterns help you share feelings and observations with friends everywhere.',
    factVi: 'Mẫu câu hoàn chỉnh giúp các em dễ dàng chia sẻ cảm xúc và suy nghĩ với bạn bè năm châu.'
  },
  puzzle_4: {
    badgeEn: 'Crossword Explorer Master',
    badgeVi: 'Bậc Thầy Giải Mã Ô Chữ Du Lịch',
    icon: '🧩',
    factEn: 'Geography vocabulary helps young explorers read international travel maps with ease.',
    factVi: 'Vốn từ vựng địa lý giúp các nhà thám hiểm nhí tự tin đọc hiểu bản đồ du lịch quốc tế.'
  },
  puzzle_5: {
    badgeEn: 'Linguistic Champion Scroll',
    badgeVi: 'Bản Cuộn Thông Thái Quán Quân Ngôn Ngữ',
    icon: '📜',
    factEn: 'A rich vocabulary is the ultimate superpower for reading global scientific literature.',
    factVi: 'Vốn từ vựng phong phú là siêu năng lực giúp các em chinh phục kho tàng tri thức nhân loại.'
  },
  champion_1: {
    badgeEn: 'Starter Arena Crown',
    badgeVi: 'Vương Miện Đấu Trường Khởi Đầu',
    icon: '👑',
    factEn: 'Circular 27 celebrates daily learning efforts and active exploration of young pupils!',
    factVi: 'Thông tư 27 biểu dương sự nỗ lực rèn luyện và tiến bộ từng ngày của học sinh tiểu học!'
  },
  champion_2: {
    badgeEn: 'Elementary Knight Shield',
    badgeVi: 'Khiên Hiệp Sĩ Khám Phá',
    icon: '🛡️',
    factEn: 'Practice makes permanent! Consistent small wins create lifelong learning excellence.',
    factVi: 'Luyện tập đều đặn mỗi ngày tạo nên nền tảng ngôn ngữ vững chắc suốt đời cho các em.'
  },
  champion_3: {
    badgeEn: 'Golden Dragon Arena Cup',
    badgeVi: 'Cúp Rồng Vàng Đấu Trường Lớp 3',
    icon: '🏆',
    factEn: 'Mastering Level 1 to 3 assessment items proves strong English comprehension foundation.',
    factVi: 'Hoàn thành các câu hỏi theo Thông tư 27 khẳng định năng lực ngôn ngữ vững vàng của học sinh.'
  },
  champion_4: {
    badgeEn: 'Titan Heritage Trophy',
    badgeVi: 'Cúp Chiến Thắng Đại Dương & Đại Ngàn',
    icon: '🎖️',
    factEn: 'Reading authentic cultural stories enriches empathy and analytical thinking skills.',
    factVi: 'Đọc và hiểu các câu chuyện văn hóa giúp bồi dưỡng lòng nhân ái và tư duy phản biện sắc bén.'
  },
  champion_5: {
    badgeEn: 'Supreme Grand Champion Laurel',
    badgeVi: 'Vòng Nguyệt Quế Đại Quán Quân VietDiscovery',
    icon: '🥇',
    factEn: 'Congratulations! You have demonstrated exceptional primary English proficiency and cultural pride!',
    factVi: 'Chúc mừng em! Em đã xuất sắc làm chủ năng lực tiếng Anh tiểu học và niềm tự hào văn hóa Việt Nam!'
  }
};

export const IslandActivityModal: React.FC<IslandActivityModalProps> = ({
  island,
  selectedGrade,
  isOpen,
  onClose,
  onEarnStars
}) => {
  const currentGradeData = island.gradeData[selectedGrade] || island.gradeData[1];
  const steps = currentGradeData.steps;

  // Pedagogical Journey: Discover -> Learn -> Practice -> Challenge -> Treasure
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  
  // Real Speaking Assessment (NO FAKE COUNTDOWN)
  const [isRecording, setIsRecording] = useState(false);
  const [speechRecognized, setSpeechRecognized] = useState(false);
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [speechResult, setSpeechResult] = useState<SpeechEvaluationResult | null>(null);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [speechTranscript, setSpeechTranscript] = useState<string>('');

  // Scramble word state for Puzzle Island
  const [scrambleLetters, setScrambleLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Completion & Treasure Chest Duplicate Prevention
  const [isCompleted, setIsCompleted] = useState(false);
  const [isChestOpened, setIsChestOpened] = useState(false);

  // Storage key for fair treasure claims
  const chestStorageKey = `vietdiscovery_chest_claimed_${island.id}_grade_${selectedGrade}`;
  const [isAlreadyClaimed, setIsAlreadyClaimed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(localStorage.getItem(`vietdiscovery_chest_claimed_${island.id}_grade_${selectedGrade}`));
  });

  const currentStep: IslandActivityStep = steps[currentStepIndex] || steps[0];

  // Resolve reward metadata
  const rewardKey = `${island.id}_${selectedGrade}`;
  const rewardMeta = ISLAND_COLLECTIBLE_REWARDS[rewardKey] || {
    badgeEn: `${island.nameEn} Master Explorer`,
    badgeVi: `Huy hiệu Thám hiểm ${island.nameVi}`,
    icon: '🌟',
    factEn: 'Exploring Vietnam through English builds cultural pride and global communication competence!',
    factVi: 'Khám phá văn hóa Việt Nam bằng tiếng Anh bồi đắp niềm tự hào dân tộc và năng lực hội nhập toàn cầu!'
  };

  // Sync state on step change
  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setSpeechRecognized(false);
    setSpeechScore(null);
    setSpeechResult(null);
    setSpeechTranscript('');
    setIsRecording(false);
    stopSpeech();

    // Prepare scramble letters if Puzzle Island
    if (island.id === 'puzzle' && currentStep.scrambleTarget) {
      const target = currentStep.scrambleTarget;
      const arr = target.split('');
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      setScrambleLetters(shuffled);
      setSelectedLetters([]);
    }
  }, [currentStepIndex, island.id, currentStep]);

  // Clean up speech and audio ducking on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
      backgroundMusic.unduck('mic_recording');
      backgroundMusic.unduck('listening');
      speakingAssessmentEngine.abortSession();
    };
  }, []);

  if (!isOpen) return null;

  // General American voice audio player with slow toggle
  const handlePlayAudio = (text?: string, slow = isSlowMode) => {
    const prompt = text || currentStep.audioPrompt || currentStep.questionEn;
    if (!prompt) return;

    soundEffects.playClick();
    setIsAudioPlaying(true);
    playEnglishSpeech(prompt, {
      slow,
      lang: 'en-US',
      onStart: () => setIsAudioPlaying(true),
      onEnd: () => setIsAudioPlaying(false),
      onError: () => setIsAudioPlaying(false)
    });
  };

  const handleSelectOption = (optionId: string, correct: boolean) => {
    if (isSubmitted) return;
    soundEffects.playClick();
    setSelectedOptionId(optionId);
    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }
  };

  // Puzzle Island letter tap
  const handleTapScrambleLetter = (letter: string, index: number) => {
    soundEffects.playClick();
    const newSelected = [...selectedLetters, letter];
    setSelectedLetters(newSelected);
    
    if (currentStep.scrambleTarget && newSelected.length === currentStep.scrambleTarget.length) {
      const formedWord = newSelected.join('');
      if (formedWord.toUpperCase() === currentStep.scrambleTarget.toUpperCase()) {
        soundEffects.playCorrect();
        setIsSubmitted(true);
        setIsCorrect(true);
      } else {
        soundEffects.playWrong();
        setTimeout(() => {
          setSelectedLetters([]);
        }, 900);
      }
    }
  };

  const handleResetScramble = () => {
    soundEffects.playClick();
    setSelectedLetters([]);
  };

  // GENUINE Speaking Assessment (Strict Requirement 5: NO FAKE COUNTDOWN STARS)
  const handleStartSpeaking = async () => {
    soundEffects.playClick();
    setIsRecording(true);
    setSpeechRecognized(false);
    setSpeechScore(null);
    setSpeechResult(null);
    setSpeechTranscript('');
    backgroundMusic.duck('mic_recording');

    try {
      const targetPhrase = currentStep.audioPrompt || currentStep.questionEn;
      const result = await speakingAssessmentEngine.startSession(targetPhrase, {
        maxDurationSeconds: 8,
        lang: 'en-US',
        onVolumeChange: (vol: number) => setMicVolume(vol),
        onTranscriptUpdate: (text: string) => setSpeechTranscript(text)
      });

      backgroundMusic.unduck('mic_recording');
      setIsRecording(false);
      setSpeechResult(result);
      setSpeechRecognized(true);
      setSpeechScore(result.matchPercentage);

      if (result.success) {
        soundEffects.playCorrect();
        setIsSubmitted(true);
        setIsCorrect(true);
      } else {
        soundEffects.playWrong();
        // Allow student to retry without penalizing unfairly
        setIsSubmitted(false);
        setIsCorrect(false);
      }
    } catch (err) {
      console.warn('[SpeakingIsland] Assessment error:', err);
      backgroundMusic.unduck('mic_recording');
      setIsRecording(false);
    }
  };

  const handleNextStep = () => {
    soundEffects.playClick();
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      soundEffects.playStarFanfare();
      setIsCompleted(true);
    }
  };

  // Treasure chest claim with duplicate prevention
  const handleOpenChest = () => {
    soundEffects.playStarFanfare();
    setIsChestOpened(true);

    if (!isAlreadyClaimed) {
      localStorage.setItem(chestStorageKey, 'true');
      setIsAlreadyClaimed(true);
      if (onEarnStars) {
        onEarnStars(currentGradeData.starsReward);
      }
    }
  };

  const handleFinishQuest = () => {
    soundEffects.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-sky-950/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Daylight Frosted Card Container (Crisp, Bright, Non-Murky) */}
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#f0f9ff] border-3 rounded-[36px] shadow-[0_25px_60px_rgba(14,165,233,0.3)] overflow-hidden text-slate-900 flex flex-col my-auto border-sky-300"
      >
        
        {/* Daylight Sky Top Header */}
        <div 
          className="relative px-5 sm:px-7 py-4 border-b border-sky-200/90 flex items-center justify-between"
          style={{
            background: `linear-gradient(90deg, #e0f2fe 0%, #ffffff 50%, #f0fdf4 100%)`
          }}
        >
          <div className="flex items-center gap-3">
            <span 
              className="w-4 h-4 rounded-full shadow-sm ring-2 ring-white"
              style={{ backgroundColor: island.crystalHex }}
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                  {island.nameEn}
                </h2>
                <span className="text-xs text-sky-800 font-bold">({island.nameVi})</span>
              </div>
              <p className="text-[11px] text-slate-600 font-bold">
                {currentGradeData.gradeBadge} • {currentGradeData.missionTitleEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Reward Stars Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>+{currentGradeData.starsReward} Stars</span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                stopSpeech();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border border-slate-300"
              title="Đóng cửa sổ"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Daylight Progress Indicator */}
        {!isCompleted && (
          <div className="w-full bg-sky-100 h-2">
            <div 
              className="h-full transition-all duration-500 rounded-r-full"
              style={{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
                background: `linear-gradient(90deg, #0284c7, #10b981)`
              }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto bg-gradient-to-b from-white to-sky-50/40">
          
          {/* ========================================================== */}
          {/* STATE A: ACTIVE ACTIVITY RUNNER                            */}
          {/* ========================================================== */}
          {!isCompleted && (
            <div className="space-y-4">
              
              {/* Question Header & Circular 27 Badge if Champion Island */}
              <div className="flex flex-col gap-1.5 p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-sky-800 font-black">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-sky-600" />
                    <span>THỬ THÁCH {currentStepIndex + 1} / {steps.length}</span>
                  </span>
                  {currentStep.level && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-[10px] font-black uppercase">
                      Thông tư 27 • Cấp độ {currentStep.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {currentStep.questionEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {currentStep.questionVi}
                </p>
              </div>

              {/* 1. Wonder Island Visual Showcase */}
              {island.id === 'wonder' && currentStep.image && (
                <div className="relative rounded-2xl overflow-hidden border-2 border-sky-200 shadow-md max-h-48 sm:max-h-56 bg-slate-100">
                  <img
                    src={currentStep.image}
                    alt={currentStep.questionEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-3">
                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe giới thiệu bằng tiếng Anh (Giọng Mỹ)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 2. Listening Island Interactive Audio Player */}
              {island.id === 'listening' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border-2 border-sky-200 flex flex-col items-center text-center space-y-3 shadow-xs">
                  <div className="flex items-center gap-2.5 flex-wrap justify-center">
                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt, false)}
                      disabled={isAudioPlaying}
                      className="px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-sky-400/20 transition-all active:scale-95 cursor-pointer"
                    >
                      <Volume2 className={`w-4 h-4 sm:w-5 sm:h-5 ${isAudioPlaying ? 'animate-bounce' : ''}`} />
                      <span>{isAudioPlaying ? 'Captain Trang đang đọc...' : 'Nghe Cô Trang phát âm chuẩn Mỹ'}</span>
                    </button>

                    <button
                      onClick={() => handlePlayAudio(currentStep.audioPrompt, true)}
                      className="px-3.5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer border border-slate-200"
                      title="Nghe tốc độ chậm"
                    >
                      <Volume1 className="w-4 h-4 text-sky-600" />
                      <span>Nghe Chậm (0.7x)</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-sky-800 font-medium">
                    💡 Hãy lắng nghe kỹ từ vựng và ngữ điệu trước khi chọn đáp án nhé!
                  </p>
                </div>
              )}

              {/* 3. Speaking Island Real Microphone Assessment (NO FAKE COUNTDOWN) */}
              {island.id === 'speaking' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-pink-50 border-2 border-purple-200 space-y-3.5 shadow-xs">
                  {currentStep.targetPhonics && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-purple-100/70 border border-purple-300">
                      <div>
                        <span className="text-[10px] text-purple-800 font-black uppercase">Mục tiêu phát âm:</span>
                        <p className="text-sm font-black text-purple-950">{currentStep.targetPhonics}</p>
                      </div>
                      <button
                        onClick={() => handlePlayAudio(currentStep.audioPrompt || currentStep.questionEn)}
                        className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe Mẫu</span>
                      </button>
                    </div>
                  )}

                  {/* Real Microphone Recording Button */}
                  <div className="flex flex-col items-center justify-center py-2 space-y-2.5">
                    <button
                      onClick={handleStartSpeaking}
                      disabled={isRecording}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg ${
                        isRecording
                          ? 'bg-rose-500 scale-110 shadow-rose-300 animate-pulse text-white'
                          : 'bg-gradient-to-br from-purple-600 to-indigo-600 hover:scale-105 text-white hover:from-purple-500 hover:to-indigo-500'
                      }`}
                      title={isRecording ? 'Đang lắng nghe giọng em...' : 'Bấm vào Micro để luyện nói'}
                    >
                      {isRecording ? <Mic className="w-8 h-8 animate-bounce" /> : <Mic className="w-8 h-8 ml-0.5" />}
                    </button>

                    {/* Microphone Volume Level Bar */}
                    {isRecording && (
                      <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden border border-slate-300">
                        <div 
                          className="bg-emerald-500 h-full transition-all duration-100" 
                          style={{ width: `${Math.min(100, micVolume * 1.5)}%` }} 
                        />
                      </div>
                    )}

                    <p className="text-xs text-slate-700 font-bold">
                      {isRecording
                        ? '🎙️ Đang nghe... Bé hãy nói to, rõ ràng theo câu mẫu nhé!'
                        : 'Bấm vào Micro để đọc mẫu và nhận đánh giá thực tế'}
                    </p>

                    {speechTranscript && (
                      <div className="p-2 rounded-lg bg-sky-100 text-sky-900 text-xs font-mono font-bold max-w-md text-center">
                        Lời nhận diện: "{speechTranscript}"
                      </div>
                    )}

                    {/* Speech Assessment Feedback */}
                    {speechRecognized && speechResult && (
                      <div className={`w-full p-3.5 rounded-2xl border flex items-center justify-between animate-fade-in ${
                        speechResult.success 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                          : 'bg-amber-50 border-amber-300 text-amber-950'
                      }`}>
                        <div className="flex items-center gap-2.5">
                          {speechResult.success ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                          ) : (
                            <HelpCircle className="w-6 h-6 text-amber-600 shrink-0" />
                          )}
                          <div className="text-left">
                            <p className="text-xs font-black">
                              {speechResult.titleVi} ({speechResult.matchPercentage}% khớp từ khóa)
                            </p>
                            <p className="text-[11px] text-slate-600">
                              {speechResult.feedbackVi}
                            </p>
                          </div>
                        </div>

                        {!speechResult.success && (
                          <button
                            onClick={handleStartSpeaking}
                            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shrink-0 cursor-pointer shadow-xs"
                          >
                            Thử lại
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Puzzle Island Interactive Letter Scramble Tiles */}
              {island.id === 'puzzle' && currentStep.scrambleTarget && (
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-200 space-y-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-amber-900 font-black">
                    <span>Ô CHỮ CẦN GHÉP ({currentStep.scrambleTarget.length} KÝ TỰ):</span>
                    <button
                      onClick={handleResetScramble}
                      className="flex items-center gap-1 text-[11px] text-amber-700 hover:text-amber-950 cursor-pointer font-bold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Xếp lại</span>
                    </button>
                  </div>

                  {/* Target Slots */}
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: currentStep.scrambleTarget.length }).map((_, i) => (
                      <div
                        key={i}
                        className="w-11 h-13 sm:w-13 sm:h-15 rounded-2xl border-2 border-dashed border-amber-400 bg-white shadow-inner flex items-center justify-center text-xl sm:text-2xl font-black text-amber-700 font-heading"
                      >
                        {selectedLetters[i] || ''}
                      </div>
                    ))}
                  </div>

                  {/* Scrambled Available Letters */}
                  <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
                    {scrambleLetters.map((char, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleTapScrambleLetter(char, idx)}
                        disabled={isSubmitted}
                        className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-amber-950 font-black text-lg sm:text-xl font-heading shadow-md active:scale-95 transition-transform cursor-pointer border-b-2 border-amber-600"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Multiple Choice Options List */}
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Chọn câu trả lời đúng:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentStep.options.map(option => {
                    const isSelected = selectedOptionId === option.id;
                    let optionStyle = 'bg-white hover:bg-sky-50 border-2 border-slate-200 text-slate-800 shadow-2xs hover:border-sky-400';

                    if (isSubmitted) {
                      if (option.isCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-300 font-black';
                      } else if (isSelected && !option.isCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-300 font-black';
                      } else {
                        optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option.id, option.isCorrect)}
                        disabled={isSubmitted}
                        className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          {option.icon && (
                            <span className="text-2xl shrink-0">{option.icon}</span>
                          )}
                          <div>
                            <p className="text-sm font-bold">{option.textEn}</p>
                            <p className="text-xs text-slate-600 font-medium">{option.textVi}</p>
                          </div>
                        </div>

                        {isSubmitted && option.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isSubmitted && isSelected && !option.isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pedagogical Explanation Box */}
              {isSubmitted && (
                <div 
                  className={`p-4 rounded-2xl border animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-sm mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Chính xác xuất sắc! Very Good!</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-5 h-5 text-rose-600" />
                        <span>Cùng xem lời giải thích nhé:</span>
                      </>
                    )}
                  </div>
                  {currentStep.explanationEn && (
                    <p className="text-xs font-bold text-slate-800">{currentStep.explanationEn}</p>
                  )}
                  {currentStep.explanationVi && (
                    <p className="text-[11px] text-slate-600 mt-0.5">{currentStep.explanationVi}</p>
                  )}
                </div>
              )}

              {/* Next Step Action Button */}
              {isSubmitted && (
                <div className="pt-1">
                  <button
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-2xl font-black text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700"
                  >
                    <span>{currentStepIndex < steps.length - 1 ? 'Thử thách tiếp theo' : 'Hoàn thành chuyến thám hiểm'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================== */}
          {/* STATE B: VICTORY & TREASURE CHEST (GENUINE COLLECTIBLES)  */}
          {/* ========================================================== */}
          {isCompleted && (
            <div className="text-center py-3 space-y-5 animate-scale-up">
              
              {/* Grand Island Visual */}
              <div className="flex justify-center">
                <Island3DVisual
                  islandId={island.id}
                  size={190}
                  isSelected={true}
                />
              </div>

              {/* Victory Banner */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>CHINH PHỤC THÀNH CÔNG • MISSION COMPLETED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Chúc Mừng Nhà Thám Hiểm Nhí!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Bé đã vượt qua các thử thách tại <strong className="text-sky-700">{island.nameVi} ({island.nameEn})</strong>!
                </p>
              </div>

              {/* 3D Glowing Treasure Chest */}
              {!isChestOpened ? (
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-amber-50 via-white to-amber-100/60 border-2 border-amber-300 shadow-lg space-y-3.5 text-center">
                  <div className="text-5xl animate-bounce">🎁</div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-amber-900 font-heading">
                      RƯƠNG BÁU KHO BÁU ĐANG CHỜ MỞ!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                      Nhấn vào nút bên dưới để mở rương, sưu tập <strong>{rewardMeta.badgeVi}</strong> và ghi danh thành tích!
                    </p>
                  </div>

                  <button
                    onClick={handleOpenChest}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <Gift className="w-4 h-4" />
                    <span>MỞ RƯƠNG KHO BÁU & NHẬN THƯỞNG</span>
                  </button>
                </div>
              ) : (
                /* Unlocked Collectible Badge & Cultural Fact */
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-emerald-50 via-white to-teal-50 border-2 border-emerald-300 shadow-md space-y-4 text-left animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-sm shrink-0">
                      {rewardMeta.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Huy hiệu Sưu tập Độc quyền
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                        {rewardMeta.badgeVi}
                      </h4>
                      <p className="text-xs text-sky-800 font-bold">
                        {rewardMeta.badgeEn}
                      </p>
                    </div>
                  </div>

                  {/* Cultural Fact Card */}
                  <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-700 flex items-center gap-1">
                      <span>✨</span>
                      <span>Sự thật văn hóa kỳ thú:</span>
                    </span>
                    <p className="text-xs font-bold text-slate-800">
                      {rewardMeta.factVi}
                    </p>
                    <p className="text-[11px] text-slate-500 italic">
                      "{rewardMeta.factEn}"
                    </p>
                  </div>

                  {/* Star Status & Anti-Duplicate Warning */}
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between text-xs font-bold text-sky-900">
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                      <span>+{currentGradeData.starsReward} Ngôi Sao Học Tập</span>
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {isAlreadyClaimed ? '✓ Đã lưu vào Nhật ký' : '✓ Ghi nhận thành công'}
                    </span>
                  </div>

                  <button
                    onClick={handleFinishQuest}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Tiếp Tục Khám Phá Các Đảo Khác</span>
                  </button>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
