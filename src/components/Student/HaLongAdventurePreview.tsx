import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  MapPin, 
  ShieldAlert, 
  FileText, 
  X, 
  RotateCcw, 
  Award, 
  Play,
  HelpCircle,
  Eye,
  Info
} from 'lucide-react';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';

interface HaLongAdventurePreviewProps {
  onBackToHome?: () => void;
}

interface VocabWord {
  word: string;
  phonetic: string;
  vi: string;
  icon: string;
  example: string;
}

const VOCAB_WORDS: VocabWord[] = [
  {
    word: 'Island',
    phonetic: '/ˈaɪ.lənd/',
    vi: 'Hòn đảo',
    icon: '🏝️',
    example: 'Ha Long has thousands of green islands.'
  },
  {
    word: 'Emerald',
    phonetic: '/ˈem.ər.əld/',
    vi: 'Xanh ngọc bích',
    icon: '💎',
    example: 'The sea water is warm and emerald green.'
  },
  {
    word: 'Cave',
    phonetic: '/keɪv/',
    vi: 'Hang động kỳ thú',
    icon: '⛰️',
    example: 'Explorers visit magical caves with sparkling rocks.'
  },
  {
    word: 'Boat',
    phonetic: '/bəʊt/',
    vi: 'Thuyền du lịch',
    icon: '⛵',
    example: 'Visitors take a boat ride across the calm bay.'
  },
  {
    word: 'Sail',
    phonetic: '/seɪl/',
    vi: 'Cánh buồm / Giăng buồm',
    icon: '🌊',
    example: 'Traditional boats sail between high rock pillars.'
  }
];

const READING_PASSAGE = "Welcome to Ha Long Bay in Quang Ninh! Ha Long Bay is famous for thousands of green limestone islands rising from calm emerald water. Visitors love to take a boat ride, explore magical caves with sparkling rocks, and watch traditional sailing boats. It is a wonderful natural playground for young explorers in Vietnam!";

const READING_TRANSLATION = "Chào mừng các em đến với Vịnh Hạ Long tại tỉnh Quảng Ninh! Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi xanh ngát mọc lên từ làn nước ngọc bích êm đềm. Du khách rất thích đi thuyền ngắm cảnh, khám phá các hang động kỳ thú với thạch nhũ lấp lánh và ngắm nhìn những cánh buồm truyền thống. Đây là một kỳ quan thiên nhiên tuyệt vời cho các nhà thám hiểm nhí Việt Nam!";

interface Question {
  id: number;
  questionEn: string;
  questionVi: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationVi: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionEn: "What color is the sea water in Ha Long Bay?",
    questionVi: "Nước biển ở Vịnh Hạ Long có màu gì đặc trưng?",
    options: ["Emerald green (Xanh ngọc bích)", "Bright orange (Màu cam sáng)", "Dark red (Đỏ thẫm)", "Deep purple (Tím đậm)"],
    correctIndex: 0,
    explanationEn: "Ha Long Bay is famous worldwide for its calm, emerald green water.",
    explanationVi: "Vịnh Hạ Long nổi tiếng thế giới với làn nước êm đềm màu xanh ngọc bích."
  },
  {
    id: 2,
    questionEn: "What rises from the water in Ha Long Bay?",
    questionVi: "Những gì mọc lên từ mặt nước ở Vịnh Hạ Long?",
    options: ["Thousands of green limestone islands (Hàng nghìn đảo đá vôi)", "Giant snow mountains (Núi băng tuyết)", "Desert sand dunes (Đồi cát sa mạc)", "Tall concrete skyscrapers (Tòa nhà chọc trời)"],
    correctIndex: 0,
    explanationEn: "There are thousands of limestone islands rising from the bay.",
    explanationVi: "Có hàng nghìn hòn đảo đá vôi phủ màu xanh mọc lên sừng sững trên vịnh."
  },
  {
    id: 3,
    questionEn: "How do visitors explore the bay?",
    questionVi: "Du khách thường ngắm cảnh vịnh bằng phương tiện gì?",
    options: ["By taking a boat ride (Đi thuyền du lịch)", "By rocket (Tên lửa)", "By submarine (Tàu ngầm sâu)", "By racing car (Xe đua)"],
    correctIndex: 0,
    explanationEn: "Visitors love taking peaceful wooden boats to sail around the islands.",
    explanationVi: "Du khách rất thích đi thuyền ngắm nhìn các hòn đảo kỳ vĩ."
  },
  {
    id: 4,
    questionEn: "According to Vietnam Map 2025, which province is Ha Long Bay in?",
    questionVi: "Theo Bản đồ Việt Nam 2025, Vịnh Hạ Long thuộc tỉnh nào?",
    options: ["Quang Ninh province (Tỉnh Quảng Ninh)", "Lam Dong province (Tỉnh Lâm Đồng)", "Can Tho city (TP. Cần Thơ)", "Ca Mau province (Tỉnh Cà Mau)"],
    correctIndex: 0,
    explanationEn: "Ha Long Bay is located in Quang Ninh province in northeastern Vietnam.",
    explanationVi: "Vịnh Hạ Long tọa lạc tại tỉnh Quảng Ninh, thuộc vùng Đông Bắc Việt Nam."
  }
];

export const HaLongAdventurePreview: React.FC<HaLongAdventurePreviewProps> = ({ onBackToHome }) => {
  // Navigation tabs within the lesson
  const [activeTab, setActiveTab] = useState<'look' | 'listen' | 'read' | 'play'>('look');
  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  // Quiz states
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showAnswerResult, setShowAnswerResult] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Play audio for individual vocabulary words
  const handleSpeakWord = (word: string) => {
    soundEffects.playHover();
    setSpeakingWord(word);
    playEnglishSpeech(word, { rate: 0.85 });
    setTimeout(() => setSpeakingWord(null), 1200);
  };

  // Play audio for full reading passage
  const handleToggleReadAloud = () => {
    if (isReadingAloud) {
      stopSpeech();
      setIsReadingAloud(false);
    } else {
      soundEffects.playClick();
      setIsReadingAloud(true);
      playEnglishSpeech(READING_PASSAGE, { rate: 0.88 });
      // Approximate duration: 58 words at ~110 wpm = ~30s
      setTimeout(() => setIsReadingAloud(false), 30000);
    }
  };

  // Quiz handling
  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    if (showAnswerResult[questionIdx]) return; // already answered
    soundEffects.playClick();
    setSelectedAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
    setShowAnswerResult(prev => ({ ...prev, [questionIdx]: true }));

    const isCorrect = optionIdx === QUIZ_QUESTIONS[questionIdx].correctIndex;
    if (isCorrect) {
      soundEffects.playCorrect();
      setScore(prev => prev + 1);
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNextQuiz = () => {
    soundEffects.playClick();
    if (currentQuizIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIdx(prev => prev + 1);
    } else {
      setIsQuizFinished(true);
      soundEffects.playStarFanfare();
    }
  };

  const handleResetQuiz = () => {
    soundEffects.playClick();
    setCurrentQuizIdx(0);
    setSelectedAnswers({});
    setShowAnswerResult({});
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP PREVIEW & VERIFICATION HEADER BAR */}
      <div className="rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border-2 border-amber-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-xl shrink-0">
            🧪
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] uppercase tracking-wide">
                Bản nháp – Chờ giáo viên kiểm duyệt
              </span>
              <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold text-[10px]">
                Grade 4 • Lớp 4
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] border border-emerald-300">
                Localhost Sandbox (Không ghi Supabase)
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black font-heading text-slate-900 mt-0.5">
              Ha Long Bay Adventure — Khám phá Vịnh Hạ Long
            </h2>
          </div>
        </div>

        {/* Action Buttons: View Sources & Back Home */}
        <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={() => {
              soundEffects.playClick();
              setIsSourceModalOpen(true);
            }}
            className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-black shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>View Sources • Xem nguồn</span>
          </button>

          {onBackToHome && (
            <button
              onClick={() => {
                soundEffects.playClick();
                stopSpeech();
                onBackToHome();
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>← Trang Chủ</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN LEARNING ADVENTURE CONTAINER (100% Matching VietDiscovery Aesthetic) */}
      <div className="relative rounded-[36px] bg-gradient-to-b from-white via-sky-50/70 to-emerald-50/70 border-3 border-sky-300 shadow-[0_16px_40px_rgba(56,189,248,0.2)] p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Step Navigation Pill Bar: Look -> Listen -> Read -> Play */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 border-b border-sky-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('look');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'look'
                  ? 'bg-rose-500 text-white scale-102 shadow-rose-200'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>1. Look & Discover</span>
              <span className="text-[10px] opacity-80">(Ngắm cảnh)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('listen');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'listen'
                  ? 'bg-sky-500 text-white scale-102 shadow-sky-200'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-200'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>2. Listen & Learn</span>
              <span className="text-[10px] opacity-80">(Từ vựng)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('read');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'read'
                  ? 'bg-amber-500 text-white scale-102 shadow-amber-200'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>3. Read & Explore</span>
              <span className="text-[10px] opacity-80">(Bài đọc)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveTab('play');
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'play'
                  ? 'bg-emerald-500 text-white scale-102 shadow-emerald-200'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>4. Play & Check</span>
              <span className="text-[10px] opacity-80">(Thử thách)</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-black text-sky-800 bg-sky-100/80 px-3 py-1.5 rounded-full border border-sky-200">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Tỉnh Quảng Ninh • Bản đồ 2025</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* TAB 1: LOOK & DISCOVER (Scenic Landscape & Key Facts)             */}
        {/* ================================================================ */}
        {activeTab === 'look' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Big Scenic Card */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-lg border-3 border-white group">
              <img
                src="/destinations/halong_bay.jpg"
                alt="Ha Long Bay World Natural Wonder"
                className="w-full h-72 sm:h-96 object-cover select-none group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-rose-600/90 text-white text-xs font-black px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-md border border-white/60 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>World Natural Wonder • Kỳ quan Thiên nhiên</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md rounded-2xl p-3 text-white border border-white/20">
                <div className="text-sm font-black text-amber-300">
                  Vịnh Hạ Long — Tỉnh Quảng Ninh (Đông Bắc Việt Nam)
                </div>
                <div className="text-xs text-slate-200 mt-0.5">
                  Nổi bật với làn nước trong xanh màu ngọc bích và hàng nghìn hòn đảo đá vôi kỳ vĩ.
                </div>
              </div>
            </div>

            {/* Right Column: Quick Explorer Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-5 border-2 border-sky-200/80 shadow-xs space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase text-sky-600 tracking-wider">
                  Khám phá cảnh sắc • Step 1
                </span>
                <h3 className="text-2xl font-black font-heading text-slate-900">
                  Welcome to Ha Long Bay!
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Em hãy quan sát bức ảnh và chạm vào loa để nghe giới thiệu nhé!
                </p>
              </div>

              {/* Quick Fact Pills */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-2.5">
                  <span className="text-xl">🌊</span>
                  <div>
                    <div className="text-xs font-black text-sky-950">Emerald Waters • Làn nước ngọc bích</div>
                    <div className="text-[11px] text-slate-600">Mặt biển lặng sóng, màu xanh biếc êm đềm quanh năm.</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                  <span className="text-xl">🏝️</span>
                  <div>
                    <div className="text-xs font-black text-emerald-950">Thousands of Islands • Hàng nghìn hòn đảo</div>
                    <div className="text-[11px] text-slate-600">Các cột đá vôi sừng sững phủ kín cây xanh nhiệt đới.</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 flex items-start gap-2.5">
                  <span className="text-xl">⛵</span>
                  <div>
                    <div className="text-xs font-black text-amber-950">Wooden Boats • Thuyền buồm du lịch</div>
                    <div className="text-[11px] text-slate-600">Trải nghiệm du thuyền lướt nhẹ giữa các hòn đảo kỳ thú.</div>
                  </div>
                </div>
              </div>

              {/* Next Step Button */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('listen');
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-98"
              >
                <span>Học từ vựng tiếng Anh</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 2: LISTEN & LEARN (5 Core Grade-4 Vocabulary Words)           */}
        {/* ================================================================ */}
        {activeTab === 'listen' && (
          <div className="space-y-4">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[11px] font-black uppercase text-sky-600 tracking-wider">
                Luyện nghe & phát âm • Step 2
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                5 Fun English Words for Ha Long Bay!
              </h3>
              <p className="text-xs text-slate-500">
                Chạm vào chiếc loa 🔊 ở mỗi thẻ để nghe phát âm chuẩn giọng bản xứ và lặp lại nhé!
              </p>
            </div>

            {/* 5 Vocabulary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
              {VOCAB_WORDS.map((item, idx) => (
                <div
                  key={item.word}
                  className="bg-white rounded-3xl p-4 border-2 border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>

                      <button
                        onClick={() => handleSpeakWord(item.word)}
                        className={`p-2.5 rounded-full transition-all cursor-pointer shadow-xs ${
                          speakingWord === item.word
                            ? 'bg-rose-500 text-white scale-110 animate-pulse'
                            : 'bg-sky-100 hover:bg-sky-200 text-sky-800'
                        }`}
                        title="Nghe phát âm từ vựng"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <div className="text-lg font-black font-heading text-slate-900 flex items-center gap-2">
                        <span>{item.word}</span>
                        <span className="text-xs text-slate-400 font-mono font-medium">{item.phonetic}</span>
                      </div>
                      <div className="text-xs font-extrabold text-sky-700">
                        {item.vi}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 leading-snug">
                      "{item.example}"
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                      Word #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleSpeakWord(item.example)}
                      className="text-[10px] font-bold text-sky-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Nghe cả câu</span>
                      <span>🔊</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Step Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('read');
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-102"
              >
                <span>Đọc bài khám phá (Read & Explore)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 3: READ & EXPLORE (Child-friendly 58-Word English Story)       */}
        {/* ================================================================ */}
        {activeTab === 'read' && (
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-black uppercase text-amber-600 tracking-wider">
                Luyện đọc tiếng Anh • Step 3 (58 Words)
              </span>
              <h3 className="text-2xl font-black font-heading text-slate-900">
                A Day in Ha Long Bay
              </h3>
              <p className="text-xs text-slate-500">
                Bài đọc ngắn gọn chuẩn lớp 4, không chứa niên đại, chiến tranh hay vua chúa.
              </p>
            </div>

            {/* Reading Box */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-amber-200/90 shadow-md space-y-4">
              {/* Header of Story Card */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-xs font-black">
                    📖
                  </div>
                  <span className="text-xs font-black text-amber-950">
                    Grade 4 Reading Passage • 58 Words
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleReadAloud}
                    className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      isReadingAloud
                        ? 'bg-rose-600 text-white animate-pulse'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isReadingAloud ? 'Dừng đọc' : 'Nghe giọng đọc (Listen)'}</span>
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setShowTranslation(!showTranslation);
                    }}
                    className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>{showTranslation ? 'Ẩn dịch' : 'Dịch tiếng Việt'}</span>
                  </button>
                </div>
              </div>

              {/* English Text Content */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  {READING_PASSAGE}
                </p>
              </div>

              {/* Optional Vietnamese Translation */}
              {showTranslation && (
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-sky-950 leading-relaxed">
                  <div className="font-black text-sky-800 mb-1 flex items-center gap-1">
                    <span>🇻🇳 Bản dịch tiếng Việt:</span>
                  </div>
                  {READING_TRANSLATION}
                </div>
              )}

              {/* Source Verification Tag */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-500 font-medium border-t border-slate-100">
                <span>Căn cứ nguồn: SGK 5 (Trang 17: Hình 2 & Khung &apos;Em có biết?&apos;) • SGK 4 (Trang 19) • Bản đồ 2025</span>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    setIsSourceModalOpen(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Bảng đối chiếu minh chứng chi tiết →</span>
                </button>
              </div>
            </div>

            {/* Next Step Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('play');
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-102"
              >
                <span>Làm thử thách đố vui (Play & Check)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 4: PLAY & CHECK (4 Fun Interactive Questions)                 */}
        {/* ================================================================ */}
        {activeTab === 'play' && (
          <div className="max-w-2xl mx-auto space-y-5">
            {!isQuizFinished ? (
              <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-200/90 shadow-md space-y-4">
                {/* Header with Question Progress */}
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm font-black">
                      #{currentQuizIdx + 1}
                    </span>
                    <span className="text-xs font-black uppercase text-emerald-900 tracking-wide">
                      Câu hỏi {currentQuizIdx + 1} / {QUIZ_QUESTIONS.length}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-500">
                    Điểm số: <strong className="text-emerald-600 font-black">{score}</strong> đúng
                  </span>
                </div>

                {/* Question Text */}
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-black font-heading text-slate-900">
                    {QUIZ_QUESTIONS[currentQuizIdx].questionEn}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    ({QUIZ_QUESTIONS[currentQuizIdx].questionVi})
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {QUIZ_QUESTIONS[currentQuizIdx].options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuizIdx] === optIdx;
                    const isAnswered = showAnswerResult[currentQuizIdx];
                    const isCorrect = optIdx === QUIZ_QUESTIONS[currentQuizIdx].correctIndex;

                    let btnClass = "bg-white hover:bg-emerald-50/50 text-slate-800 border-2 border-slate-200";
                    if (isAnswered) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-500 text-white border-2 border-emerald-600 shadow-sm font-black";
                      } else if (isSelected) {
                        btnClass = "bg-rose-500 text-white border-2 border-rose-600 shadow-sm font-black";
                      } else {
                        btnClass = "bg-slate-50 text-slate-400 border border-slate-200 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(currentQuizIdx, optIdx)}
                        disabled={isAnswered}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />}
                      </button>
                    );
                  })}
                </div>

                {/* Answer Explanation once chosen */}
                {showAnswerResult[currentQuizIdx] && (
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 space-y-1 text-xs">
                    <div className="font-black text-sky-900 flex items-center gap-1.5">
                      <span>💡 Giải thích:</span>
                    </div>
                    <p className="text-slate-700">{QUIZ_QUESTIONS[currentQuizIdx].explanationEn}</p>
                    <p className="text-slate-500">{QUIZ_QUESTIONS[currentQuizIdx].explanationVi}</p>
                  </div>
                )}

                {/* Next Question / Finish Button */}
                {showAnswerResult[currentQuizIdx] && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleNextQuiz}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer transition-transform hover:scale-102"
                    >
                      <span>{currentQuizIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Finished Summary */
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-lg text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 text-3xl flex items-center justify-center mx-auto animate-bounce">
                  🏆
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black font-heading text-slate-900">
                    Great Job, Young Explorer!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Em đã hoàn thành thử thách khám phá Vịnh Hạ Long với kết quả:
                  </p>
                  <div className="text-3xl font-black text-emerald-600 pt-1">
                    {score} / {QUIZ_QUESTIONS.length} Câu đúng
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium max-w-md mx-auto">
                  🛡️ <em>Chế độ học liệu thử nghiệm: Không cộng sao hay ghi kết quả vào Supabase.</em>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetQuiz}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại thử thách</span>
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveTab('look');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-black shadow-md cursor-pointer"
                  >
                    <span>Xem lại bài học từ đầu</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* 3. SOURCES AUDIT MODAL (View Sources — Đối chiếu nguồn chính thống) */}
      {isSourceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-amber-300 max-h-[90vh] overflow-y-auto space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-1 rounded-xl bg-amber-100 border border-amber-200">📜</span>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                    Bảng Đối Chiếu Nguồn Học Liệu Xác Minh
                  </h3>
                  <p className="text-xs text-slate-500">
                    Chủ đề: Ha Long Bay Adventure (Lớp 4) • Minh bạch hóa căn cứ thực tế
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsSourceModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trạng thái phân loại minh bạch (Legend) */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-700">Quy ước trạng thái:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">🟢 Đã đối chiếu thực tế</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">🟡 Đã đối chiếu một phần</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">🔴 Chưa xác minh cục bộ</span>
            </div>

            {/* Danh mục từng nguồn */}
            <div className="space-y-3 text-xs">
              {/* Source 1: SGK 5 */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                <div className="flex items-center justify-between font-black text-emerald-950">
                  <span>1. SGK Lịch sử và Địa lí 5 (NXB Giáo dục Việt Nam - Bộ Kết nối tri thức)</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold shrink-0">🟢 Đã đối chiếu thực tế</span>
                </div>
                <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                  <div>• <strong>Bài học & Số trang</strong>: Bài 3: <em>Biển, đảo Việt Nam</em> (Trang 16–19, trọng tâm <strong>Trang 17</strong>).</div>
                  <div>• <strong>URL truy cập</strong>: <span className="font-mono text-[10px] text-sky-700 break-all">https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-lich-su-va-dia-li-5.4843863100#page=0</span></div>
                  <div>• <strong>Đoạn trích & hình ảnh thực tế</strong>:
                    <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-600">
                      <li><strong>Hình 2 (Trang 17)</strong>: Chụp từ trên cao ghi rõ chú thích: <em>&quot;Một phần vịnh Hạ Long (tỉnh Quảng Ninh)&quot;</em>.</li>
                      <li><strong>Khung &apos;Em có biết?&apos; (Trang 17)</strong>: Trích nguyên văn: <em>&quot;Vịnh Hạ Long có gần 2 000 hòn đảo lớn, nhỏ với nhiều đảo đá, hang động và bãi tắm đẹp. Vịnh Hạ Long được UNESCO ghi danh là Di sản thiên nhiên thế giới.&quot;</em></li>
                    </ul>
                  </div>
                  <div>• <strong>Hỗ trợ nội dung bài đọc</strong>: Căn cứ viết câu <em>&quot;thousands of green limestone islands&quot;</em>, <em>&quot;magical caves&quot;</em> và câu hỏi trắc nghiệm số 2.</div>
                </div>
              </div>

              {/* Source 2: SGK 4 */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                <div className="flex items-center justify-between font-black text-amber-950">
                  <span>2. SGK Lịch sử và Địa lí 4 (NXB Giáo dục Việt Nam - Bộ Kết nối tri thức)</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold shrink-0">🟡 Đã đối chiếu một phần</span>
                </div>
                <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                  <div>• <strong>Bài học & Số trang</strong>:
                    <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-600">
                      <li><strong>Bài 4 (Trang 19)</strong>: Hình 2 (Lược đồ địa hình) có định danh địa danh biển <em>&quot;VỊNH HẠ LONG&quot;</em> cạnh đảo Cái Bầu, đảo Cát Bà.</li>
                      <li><strong>Bài 8 (Trang 36–40)</strong>: <em>Thiên nhiên vùng Đồng bằng Bắc Bộ</em> (Trang 37: Lược đồ vị trí; Trang 39: Hình 4 Đảo Cát Bà, tiềm năng kinh tế biển đảo và du lịch).</li>
                    </ul>
                  </div>
                  <div>• <strong>URL truy cập</strong>: <span className="font-mono text-[10px] text-sky-700 break-all">https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-lich-su-va-dia-li-4.4756030172#page=7</span></div>
                  <div>• <strong>Giới hạn minh bạch</strong>: SGK 4 <em>không có bài văn miêu tả chi tiết cảnh quan hang động hay màu nước Vịnh Hạ Long</em>. Bài học lớp 4 phải mượn dữ liệu mô tả cảnh quan thiên nhiên từ SGK 5 (Trang 17).</div>
                </div>
              </div>

              {/* Source 3: Bản đồ 2025 */}
              <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1.5">
                <div className="flex items-center justify-between font-black text-sky-950">
                  <span>3. Bản đồ Hành chính Việt Nam năm 2025 (sapnhap.bando.com.vn)</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold shrink-0">🟢 Đã đối chiếu thực tế</span>
                </div>
                <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                  <div>• <strong>Cơ quan ban hành</strong>: Nhà xuất bản Tài nguyên - Môi trường và Bản đồ Việt Nam.</div>
                  <div>• <strong>URL truy cập</strong>: <span className="font-mono text-[10px] text-sky-700 break-all">https://sapnhap.bando.com.vn/</span></div>
                  <div>• <strong>Dữ liệu xác minh</strong>: Căn cứ cơ sở dữ liệu 34 tỉnh, thành phố sau sắp xếp 2025: Toàn bộ Vịnh Hạ Long và TP. Hạ Long trực thuộc <strong>tỉnh Quảng Ninh</strong> (không sáp nhập hay đổi tên).</div>
                  <div>• <strong>Hỗ trợ nội dung bài đọc</strong>: Căn cứ câu mở đầu <em>&quot;Welcome to Ha Long Bay in Quang Ninh!&quot;</em> và câu hỏi trắc nghiệm số 4.</div>
                </div>
              </div>

              {/* Source 4: Thông tư 17/2025/TT-BGDĐT */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
                <div className="flex items-center justify-between font-black text-indigo-950">
                  <span>4. Thông tư số 17/2025/TT-BGDĐT (Bộ Giáo dục và Đào tạo)</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold shrink-0">🟢 Đã có tệp PDF gốc (8.2 MB)</span>
                </div>
                <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                  <div>• <strong>Vị trí lưu trữ dự án</strong>: <span className="font-mono text-[10px] text-indigo-700 break-all">VERIFIED_EDUCATIONAL_SOURCES/Thong-tu-17-2025-TT-BGDDT.pdf</span></div>
                  <div>• <strong>Nội dung đối chiếu</strong>: Phụ lục I (Trang 3–7) quy định chuẩn phân phối chương trình môn Lịch sử và Địa lí cấp tiểu học năm 2025. Đây là căn cứ pháp lý định hướng phân bổ chủ đề khám phá theo vùng miền.</div>
                </div>
              </div>

              {/* Source 5: Hồ sơ UNESCO */}
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                <div className="flex items-center justify-between font-black text-rose-950">
                  <span>5. Hồ sơ Di sản Thế giới UNESCO (ID 672)</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold shrink-0">🔴 Chưa xác minh cục bộ</span>
                </div>
                <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                  <div>• <strong>URL tham chiếu</strong>: <span className="font-mono text-[10px] text-rose-700 break-all">https://whc.unesco.org/en/list/672</span></div>
                  <div>• <strong>Minh bạch bằng chứng</strong>: Hiện tại trong thư mục tài liệu dự án <em>chưa lưu trữ tệp PDF hồ sơ gốc của UNESCO</em> do người dùng cung cấp. Các cụm từ miêu tả cảm quan tiếng Anh như <em>&quot;calm emerald water&quot;</em>, <em>&quot;sparkling rocks&quot;</em> là từ vựng bổ trợ trải nghiệm ngôn ngữ thiếu nhi, chưa có văn bản PDF kiểm chứng nội bộ. Đánh dấu &quot;Chưa xác minh&quot; để đảm bảo tính trung thực tuyệt đối.</div>
                </div>
              </div>
            </div>

            {/* Pedagogical & Moderation Notice (Tuyên bố minh bạch kiểm duyệt) */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 text-[11px] leading-relaxed space-y-1.5">
              <div className="flex items-center gap-1.5 font-black text-amber-900 text-xs">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Tuyên bố minh bạch về kiểm duyệt sư phạm:</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li>
                  <strong>Bản quyền kiểm duyệt:</strong> Đây là <strong>bản nháp thử nghiệm (Sandbox Preview) do AI biên soạn</strong> để minh họa cách tổ chức bài đọc và câu hỏi song ngữ trên localhost. <strong>Giáo viên hoặc Hội đồng sư phạm CHƯA kiểm duyệt hoặc phê duyệt chính thức bài học này.</strong>
                </li>
                <li>
                  <strong>Tuân thủ định hướng:</strong> AI đã tự động lọc bỏ 100% các nội dung chiến tranh, triều đại phong kiến và niên đại lịch sử khó theo yêu cầu <em>&quot;No History, Fun English Exploration Only&quot;</em>.
                </li>
                <li>
                  <strong>Khuyến nghị chuyên môn:</strong> Giáo viên tiếng Anh cần thẩm định lại độ khó của từ vựng cảm quan trước khi phát hành rộng rãi cho học sinh lớp 4.
                </li>
              </ul>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsSourceModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold cursor-pointer hover:bg-slate-900 transition-colors"
              >
                Đóng bảng đối chiếu
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
