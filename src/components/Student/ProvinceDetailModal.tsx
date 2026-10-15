import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  MapPin, 
  Compass, 
  Award, 
  BookOpen, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  Star, 
  ChevronRight, 
  Landmark, 
  Utensils, 
  ShieldCheck, 
  Mic, 
  Headphones, 
  RotateCcw,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProvinceEducationalData, getProvinceByCode, getProvinceById } from '../../data/provinces';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech } from '../../lib/speech';

interface ProvinceDetailModalProps {
  provinceCode?: string;
  provinceId?: string;
  isOpen: boolean;
  onClose: () => void;
  onEarnStars?: (stars: number) => void;
  onUpdateProgress?: (destId: string, score: number, starsEarned: number) => void;
}

type TabType = 'overview' | 'vocabulary' | 'sentences' | 'skills' | 'quiz';

export const ProvinceDetailModal: React.FC<ProvinceDetailModalProps> = ({
  provinceCode,
  provinceId,
  isOpen,
  onClose,
  onEarnStars,
  onUpdateProgress
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Quiz state for Tab 5
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

  // Listening challenge state in Tab 4
  const [listeningSelected, setListeningSelected] = useState<number | null>(null);
  const [isListeningSubmitted, setIsListeningSubmitted] = useState<boolean>(false);
  const [hasPracticedSpeaking, setHasPracticedSpeaking] = useState<boolean>(false);

  if (!isOpen) return null;

  const data: ProvinceEducationalData | undefined = 
    (provinceCode ? getProvinceByCode(provinceCode) : undefined) ||
    (provinceId ? getProvinceById(provinceId) : undefined);

  if (!data) return null;

  // Speak functions
  const handleSpeak = (text: string) => {
    soundEffects.playHover();
    playEnglishSpeech(text);
  };

  // Tab 4: Submit Listening Answer
  const handleListeningSubmit = (index: number) => {
    if (isListeningSubmitted) return;
    setListeningSelected(index);
    setIsListeningSubmitted(true);
    const isCorrect = index === data.listeningAndSpeakingActivities.listeningChallenge.correctIndex;
    if (isCorrect) {
      soundEffects.playCorrect();
      if (onEarnStars) onEarnStars(2);
    } else {
      soundEffects.playWrong();
    }
  };

  // Tab 4: Practice Speaking
  const handleSpeakingPractice = () => {
    soundEffects.playClick();
    playEnglishSpeech(data.listeningAndSpeakingActivities.speakingMission.targetSpeech);
    if (!hasPracticedSpeaking) {
      setHasPracticedSpeaking(true);
      setTimeout(() => {
        soundEffects.playStarFanfare();
        if (onEarnStars) onEarnStars(2);
      }, 1200);
    }
  };

  // Tab 5: Handle Quiz Option Click
  const handleQuizOptionClick = (idx: number) => {
    if (isAnswerSubmitted) return;
    soundEffects.playClick();
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    const currentQ = data.interactiveLearningQuestions[currentQuizIndex];
    if (idx === currentQ.correctIndex) {
      soundEffects.playCorrect();
      setQuizScore(prev => prev + 1);
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextQuiz = () => {
    soundEffects.playClick();
    if (currentQuizIndex < data.interactiveLearningQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz Finished!
      setIsQuizComplete(true);
      const totalEarnedStars = (quizScore + 1) * 3;
      soundEffects.playStarFanfare();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      if (onEarnStars) onEarnStars(totalEarnedStars);
      if (onUpdateProgress) {
        onUpdateProgress(data.id, Math.round(((quizScore + 1) / 3) * 100), totalEarnedStars);
      }
    }
  };

  const handleResetQuiz = () => {
    soundEffects.playClick();
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setIsQuizComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-white/90 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* 1. HERO BANNER HEADER */}
        <div className="relative h-44 sm:h-52 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 shrink-0 overflow-hidden">
          <img
            src={data.image}
            alt={data.nameEn}
            className="w-full h-full object-cover opacity-80 select-none"
            onError={(e) => {
              // Fallback scenery image
              (e.target as HTMLImageElement).src = '/destinations/halong_bay.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="absolute right-3.5 top-3.5 z-30 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Location Badges Top Left */}
          <div className="absolute top-3.5 left-4 flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-rose-500/90 text-white font-black text-[11px] shadow-sm flex items-center gap-1 backdrop-blur-xs">
              <MapPin className="w-3 h-3" />
              <span>{data.region === 'North' ? 'Miền Bắc' : data.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/90 text-white font-bold text-[11px] shadow-sm backdrop-blur-xs">
              {data.zone}
            </span>
            {data.type === 'city' && (
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-[10.5px] shadow-sm flex items-center gap-1">
                <span>⭐</span>
                <span>Thành phố Trực thuộc TW</span>
              </span>
            )}
          </div>

          {/* Name & Listen Button Bottom Banner */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
            <div className="text-white drop-shadow-md">
              <div className="text-xs font-bold text-sky-200 flex items-center gap-1.5">
                <span>{data.emoji}</span>
                <span>{data.capitalVi} • {data.capitalEn}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-wide mt-0.5 leading-tight">
                {data.nameVi}
              </h2>
              <div className="text-xs sm:text-sm font-bold text-amber-300">
                {data.nameEn}
              </div>
            </div>

            <button
              onClick={() => handleSpeak(`${data.nameEn}! ${data.capitalEn}, Vietnam.`)}
              className="px-3.5 py-2 rounded-2xl bg-white/95 hover:bg-white text-slate-900 font-black text-xs shadow-lg flex items-center gap-1.5 cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95"
              title="Nghe phát âm chuẩn US"
            >
              <Volume2 className="w-4 h-4 text-sky-600" />
              <span className="hidden sm:inline">Phát âm US</span>
            </button>
          </div>
        </div>

        {/* 2. TAB NAVIGATION BAR */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('overview');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>🏛️</span>
            <span>Di sản & Địa danh</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('vocabulary');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === 'vocabulary'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>📚</span>
            <span>Từ vựng & IPA ({data.ageAppropriateEnglishVocabulary.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('sentences');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === 'sentences'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>💬</span>
            <span>Mẫu câu</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('skills');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>🎧</span>
            <span>Nghe & Nói</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('quiz');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <span>⭐</span>
            <span>Thử thách Thông tư 27</span>
          </button>
        </div>

        {/* 3. TAB CONTENT BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* TAB 1: OVERVIEW & HERITAGE */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in">
              
              {/* RESOLUTION 202/2025/QH15 REORGANIZATION CARD */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-2 border-sky-200 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                  <span className="text-xs font-black text-sky-950 uppercase tracking-wide">
                    {data.administrativeReorganization2025.resolution}
                  </span>
                </div>
                
                <p className="text-xs text-sky-900 leading-relaxed font-medium">
                  {data.administrativeReorganization2025.summaryVi}
                </p>

                {/* Previous Units Merged/Involved */}
                <div className="pt-1 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-bold text-sky-800">Không gian liên kết 2025:</span>
                  {data.administrativeReorganization2025.previousUnitsInvolved.map((u, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full bg-white text-sky-900 font-bold text-[10.5px] border border-sky-300 shadow-2xs">
                      {u}
                    </span>
                  ))}
                  {data.administrativeReorganization2025.islandDistricts?.map((isl, idx) => (
                    <span key={`isl-${idx}`} className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-black text-[10.5px] border border-amber-300 shadow-2xs flex items-center gap-1">
                      <span>🏝️</span>
                      <span>{isl}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* GEOGRAPHY & NOTABLE FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-sky-600" />
                    <span>Đặc trưng Địa lý Nổi bật:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {data.notableGeographicalCharacteristics.vi}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Nét Văn hóa & Bản sắc:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {data.distinctiveLocalFeatures.vi}
                  </p>
                </div>
              </div>

              {/* FAMOUS LANDMARKS */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-rose-500" />
                  <span>Danh lam Thắng cảnh & Di tích Tiêu biểu</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.famousLandmarks.map((lm, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1 group hover:border-rose-400 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-black text-rose-950 flex items-center gap-1.5">
                          <span>{lm.emoji}</span>
                          <span className="font-heading">{lm.nameVi}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(lm.nameEn)}
                          className="w-6 h-6 rounded-full bg-white text-rose-600 flex items-center justify-center hover:bg-rose-100 transition-colors cursor-pointer shadow-2xs"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-bold text-rose-800 italic">{lm.nameEn}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{lm.descriptionVi}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LOCAL FOOD SPECIALTIES */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-600" />
                  <span>Món ngon & Ẩm thực Đặc sản</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.localFoodSpecialties.map((fd, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1 group hover:border-amber-400 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                          <span>{fd.emoji}</span>
                          <span className="font-heading">{fd.nameVi}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(fd.nameEn)}
                          className="w-6 h-6 rounded-full bg-white text-amber-700 flex items-center justify-center hover:bg-amber-100 transition-colors cursor-pointer shadow-2xs"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-bold text-amber-800 italic">{fd.nameEn}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{fd.descriptionVi}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FESTIVALS & HERITAGE */}
              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-2">
                <div className="text-xs font-black text-purple-950 flex items-center gap-1.5">
                  <span>🏮</span>
                  <span>Lễ hội & Di sản Văn hóa UNESCO</span>
                </div>
                {data.festivalsAndHeritage.map((fh, idx) => (
                  <div key={idx} className="text-xs text-purple-900 border-l-2 border-purple-400 pl-2.5 py-0.5 space-y-0.5">
                    <div className="font-black flex items-center gap-1.5">
                      <span>{fh.nameVi}</span>
                      {fh.unescoHeritage && (
                        <span className="px-2 py-0.2 rounded-full bg-purple-200 text-purple-950 text-[10px] font-black uppercase">
                          UNESCO
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-purple-800 italic font-semibold">{fh.nameEn}</div>
                    <div className="text-slate-600 leading-relaxed">{fh.descriptionVi}</div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: ENGLISH VOCABULARY & PHONETICS */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-xs font-black text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                <span>Từ vựng Tiếng Anh theo Chủ đề Địa phương</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {data.ageAppropriateEnglishVocabulary.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border-2 border-sky-100 hover:border-sky-300 shadow-xs transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <div className="text-lg font-black font-heading text-sky-950 leading-tight">
                            {item.word}
                          </div>
                          <div className="text-xs font-bold text-sky-700 font-mono">
                            {item.phonetic} • <span className="text-slate-400 font-sans italic">{item.partOfSpeech}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleSpeak(item.word)}
                        className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                        title="Nghe phát âm từ"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="pt-1 border-t border-sky-100/80 space-y-1">
                      <div className="text-xs font-black text-slate-800">
                        {item.meaningVi}
                      </div>
                      <div className="text-xs text-slate-600 leading-snug">
                        {item.meaningEn}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-sky-100 flex items-start justify-between gap-2">
                      <div className="text-xs text-sky-900 font-medium italic">
                        "{item.exampleSentence}"
                      </div>
                      <button
                        onClick={() => handleSpeak(item.exampleSentence)}
                        className="text-sky-600 hover:text-sky-800 shrink-0 p-1 cursor-pointer"
                        title="Nghe câu mẫu"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SENTENCE PATTERNS */}
          {activeTab === 'sentences' && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-xs font-black text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Mẫu câu Tiếng Anh Thực hành Giao tiếp</span>
              </div>

              <div className="space-y-3">
                {data.englishSentencePatterns.map((sp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-indigo-50/70 border-2 border-indigo-200/80 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-black text-[10px] uppercase">
                        {sp.targetSkill.toUpperCase()} PATTERN
                      </span>
                      <button
                        onClick={() => handleSpeak(sp.exampleEn)}
                        className="px-3 py-1 rounded-xl bg-white text-indigo-700 font-bold text-xs shadow-2xs hover:bg-indigo-100 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe mẫu</span>
                      </button>
                    </div>

                    <div className="text-sm font-black text-indigo-950 font-heading">
                      {sp.pattern}
                    </div>
                    <div className="text-xs text-indigo-800 font-medium">
                      Ý nghĩa: {sp.patternMeaningVi}
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-indigo-100 space-y-1">
                      <div className="text-xs font-bold text-slate-900">
                        Ví dụ: <span className="text-indigo-900 font-semibold italic">"{sp.exampleEn}"</span>
                      </div>
                      <div className="text-xs text-slate-600">
                        Dịch nghĩa: {sp.exampleVi}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: 4-SKILL PRACTICE (LISTENING & SPEAKING) */}
          {activeTab === 'skills' && (
            <div className="space-y-5 animate-fade-in">
              
              {/* SECTION A: LISTENING CHALLENGE */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-300 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-sky-700" />
                    <span className="text-xs font-black uppercase text-sky-950 tracking-wider">
                      THỬ THÁCH LUYỆN NGHE (LISTENING CHALLENGE)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[10.5px]">
                    ⭐ +2 Stars
                  </span>
                </div>

                {/* Big Audio Player Button */}
                <button
                  onClick={() => handleSpeak(data.listeningAndSpeakingActivities.listeningChallenge.audioScriptEn)}
                  className="w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-98"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>🔊 Bấm để nghe bài đọc tiếng Anh (US Native Audio)</span>
                </button>

                {/* Question Prompt */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs sm:text-sm font-black text-slate-900">
                    Question: {data.listeningAndSpeakingActivities.listeningChallenge.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {data.listeningAndSpeakingActivities.listeningChallenge.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === data.listeningAndSpeakingActivities.listeningChallenge.correctIndex;
                      const isSelected = listeningSelected === oIdx;

                      let btnStyle = 'bg-white hover:bg-sky-100 text-slate-800 border-sky-200';
                      if (isListeningSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-black';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-500 text-white border-rose-600 line-through';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleListeningSubmit(oIdx)}
                          disabled={isListeningSubmitted}
                          className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isListeningSubmitted && (
                    <div className="p-3 rounded-xl bg-white border border-sky-200 space-y-1 text-xs">
                      <div className="font-black text-sky-950">
                        {listeningSelected === data.listeningAndSpeakingActivities.listeningChallenge.correctIndex
                          ? '🎉 Chúc mừng! Con đã trả lời đúng!'
                          : '💡 Đáp án chưa chính xác, hãy xem giải thích nhé!'}
                      </div>
                      <div className="text-slate-600">
                        {data.listeningAndSpeakingActivities.listeningChallenge.explanationVi}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION B: SPEAKING MISSION */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-black uppercase text-emerald-950 tracking-wider">
                      NHIỆM VỤ LUYỆN NÓI (SPEAKING MISSION)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[10.5px]">
                    ⭐ +2 Stars
                  </span>
                </div>

                <div className="text-xs text-emerald-900 font-medium">
                  {data.listeningAndSpeakingActivities.speakingMission.roleplayPromptVi}
                </div>

                {/* Target Speech Card */}
                <div className="p-3.5 rounded-2xl bg-white border-2 border-emerald-200 space-y-2 text-center">
                  <div className="text-base sm:text-lg font-black text-emerald-950 font-heading">
                    "{data.listeningAndSpeakingActivities.speakingMission.targetSpeech}"
                  </div>
                  <div className="text-xs font-bold text-emerald-700 font-mono">
                    {data.listeningAndSpeakingActivities.speakingMission.sampleAudioPhonetic}
                  </div>
                </div>

                {/* Pronunciation Tips */}
                <div className="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">💡 Mẹo phát âm từ cô Trang: </span>
                  <span>{data.listeningAndSpeakingActivities.speakingMission.pronunciationTips}</span>
                </div>

                {/* Practice Speaking Button */}
                <button
                  onClick={handleSpeakingPractice}
                  className={`w-full py-3 rounded-2xl font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-98 ${
                    hasPracticedSpeaking
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>
                    {hasPracticedSpeaking
                      ? '🎉 Đã luyện nói thành công (+2 Stars) • Bấm để nghe lại'
                      : '🎤 Lắng nghe mẫu & Luyện phát âm to theo'}
                  </span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 5: CIRCULAR 27 LEVELED QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-4 animate-fade-in">
              {!isQuizComplete ? (
                <>
                  {/* Progress Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500">
                        CÂU HỎI {currentQuizIndex + 1} / {data.interactiveLearningQuestions.length}
                      </span>
                      <div className="text-xs font-black text-amber-600">
                        {data.interactiveLearningQuestions[currentQuizIndex].levelLabel}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black border border-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                      <span>{quizScore} Đúng</span>
                    </div>
                  </div>

                  {/* Question Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-200 space-y-3">
                    <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                      {data.interactiveLearningQuestions[currentQuizIndex].questionEn}
                    </div>
                    <div className="text-xs font-bold text-sky-800">
                      {data.interactiveLearningQuestions[currentQuizIndex].questionVi}
                    </div>

                    {/* Options */}
                    <div className="space-y-2 pt-2">
                      {data.interactiveLearningQuestions[currentQuizIndex].options.map((opt, oIdx) => {
                        const isCorrect = oIdx === data.interactiveLearningQuestions[currentQuizIndex].correctIndex;
                        const isSelected = selectedOption === oIdx;

                        let style = 'bg-white hover:bg-amber-100/70 border-amber-200 text-slate-800';
                        if (isAnswerSubmitted) {
                          if (isCorrect) {
                            style = 'bg-emerald-500 text-white border-emerald-600 font-black';
                          } else if (isSelected) {
                            style = 'bg-rose-500 text-white border-rose-600 line-through';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleQuizOptionClick(oIdx)}
                            disabled={isAnswerSubmitted}
                            className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all cursor-pointer flex items-center justify-between ${style}`}
                          >
                            <span>{opt}</span>
                            {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                            {isAnswerSubmitted && isSelected && !isCorrect && <AlertCircle className="w-4 h-4 text-white shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isAnswerSubmitted && (
                      <div className="p-3.5 rounded-xl bg-white border border-amber-300 space-y-1.5 animate-fade-in text-xs">
                        <div className="font-black text-amber-950 flex items-center gap-1.5">
                          <span>💡 Giải thích chi tiết:</span>
                        </div>
                        <div className="text-slate-800 font-medium">
                          {data.interactiveLearningQuestions[currentQuizIndex].explanationEn}
                        </div>
                        <div className="text-slate-600">
                          {data.interactiveLearningQuestions[currentQuizIndex].explanationVi}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={handleNextQuiz}
                            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-md cursor-pointer flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
                          >
                            <span>
                              {currentQuizIndex < data.interactiveLearningQuestions.length - 1
                                ? 'Câu tiếp theo ➔'
                                : 'Hoàn thành Thử thách 🏆'}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* QUIZ VICTORY SCREEN */
                <div className="text-center p-6 space-y-4 animate-scale-up">
                  <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center text-4xl shadow-inner animate-bounce">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-heading text-slate-900">
                      Xuất sắc hoàn thành thử thách!
                    </h3>
                    <p className="text-xs font-bold text-sky-800 mt-1">
                      Con đã làm chủ kiến thức địa lý và tiếng Anh về {data.nameVi}!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-200 max-w-sm mx-auto space-y-1.5">
                    <div className="text-sm font-black text-amber-950">
                      Kết quả: {quizScore} / {data.interactiveLearningQuestions.length} câu đúng
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-sm shadow-md">
                      <span>⭐ +{(quizScore + 1) * 3} Stars Earned!</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleResetQuiz}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Thử lại</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs shadow-md cursor-pointer"
                    >
                      Tiếp tục hành trình ➔
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* 4. MODAL FOOTER */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0 px-4">
          <span className="truncate max-w-[280px] sm:max-w-md">
            Nguồn: {data.verifiedSource}
          </span>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold cursor-pointer transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
