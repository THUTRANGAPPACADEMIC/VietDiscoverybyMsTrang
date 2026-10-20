import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, 
  Play, 
  Square, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Gauge, 
  Mic, 
  Music, 
  ShieldCheck, 
  Info,
  Zap,
  Sliders,
  Award,
  RotateCcw,
  BookOpen,
  Headphones,
  MessageSquare,
  HelpCircle,
  Compass,
  Radio,
  FileText,
  AlertTriangle,
  Smile,
  GraduationCap
} from 'lucide-react';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

interface VoiceUpgradePreviewProps {
  onBackToHome?: () => void;
}

interface JennyShowcaseItem {
  id: string;
  activityCategory: 'vocabulary' | 'listening' | 'reading' | 'speaking' | 'games';
  categoryLabel: string;
  typeBadge: string;
  badgeColor: string;
  title: string;
  ipa?: string;
  en: string;
  vi: string;
  pedagogicalFocus: string;
  icon: string;
  normalAudioUrl: string;
  slowAudioUrl: string;
}

const JENNY_BENCHMARKS: JennyShowcaseItem[] = [
  // 1. VOCABULARY
  {
    id: 'jenny_vocab_word',
    activityCategory: 'vocabulary',
    categoryLabel: '1. Vocabulary (Từ Vựng Đơn)',
    typeBadge: 'Phát Âm Rõ Ràng • Tốc Độ Vừa Phải',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    title: 'national park',
    ipa: '/ˌnæʃ.ən.əl ˈpɑːrk/',
    en: 'national park',
    vi: 'Vườn quốc gia',
    pedagogicalFocus: 'Phát âm tròn vành rõ chữ, nguyên âm mở /ɑː/, âm đuôi /rk/ chuẩn General American, tốc độ vừa phải cho học sinh tiểu học nghe rõ từng âm vị.',
    icon: '🏞️',
    normalAudioUrl: '/audio/jenny-showcase/jenny_vocab_word_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_vocab_word_slow.mp3'
  },
  {
    id: 'jenny_vocab_sentence',
    activityCategory: 'vocabulary',
    categoryLabel: '1. Vocabulary (Câu Mẫu Từ Vựng)',
    typeBadge: 'Ngữ Điệu Câu Mẫu Tự Nhiên',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    title: 'Cat Ba National Park Example',
    en: 'Cat Ba National Park protects rare langurs on cliffs.',
    vi: 'Vườn quốc gia Cát Bà bảo vệ loài voọc quý hiếm trên vách đá.',
    pedagogicalFocus: 'Ngữ điệu câu mẫu tự nhiên, nhấn trọng âm vào các từ khóa "protects", "rare langurs", "cliffs", không đọc rời rạc từng từ.',
    icon: '🌳',
    normalAudioUrl: '/audio/jenny-showcase/jenny_vocab_sentence_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_vocab_sentence_slow.mp3'
  },

  // 2. LISTENING
  {
    id: 'jenny_listening',
    activityCategory: 'listening',
    categoryLabel: '2. Listening Quest (Luyện Nghe)',
    typeBadge: 'Ngữ Điệu Hội Thoại Tự Nhiên',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    title: 'Cat Ba Langur Forest Patrol',
    en: 'Captain Trang here! Look up at the limestone cliffs of Cat Ba Island. A family of golden-headed langurs is leaping between the branches. Our forest patrol keeps them safe every day.',
    vi: 'Captain Trang đây! Hãy nhìn lên những vách đá vôi của đảo Cát Bà. Một gia đình voọc đầu vàng đang chuyền qua các cành cây. Đội tuần tra rừng của chúng tôi bảo vệ các bạn ấy an toàn mỗi ngày.',
    pedagogicalFocus: 'Ngữ điệu hội thoại tự nhiên, hào hứng như lời phát thanh thực địa của Captain Trang; nối âm mềm mại, giữ học sinh tập trung nghe ý chính.',
    icon: '🎧',
    normalAudioUrl: '/audio/jenny-showcase/jenny_listening_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_listening_slow.mp3'
  },

  // 3. READING
  {
    id: 'jenny_reading',
    activityCategory: 'reading',
    categoryLabel: '3. Reading Quest (Đọc Hiểu)',
    typeBadge: 'Đọc Diễn Cảm • Ngắt Nghỉ Đúng Cụm Nghĩa',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    title: 'Guardians of Cat Ba Langurs',
    en: 'In Cat Ba National Park, only about seventy golden-headed langurs live along sheer seaside cliffs. Dedicated rangers and volunteers run an animal rescue mission to protect their forest habitat, ensuring these precious primates thrive safely on the island.',
    vi: 'Tại Vườn quốc gia Cát Bà, chỉ còn khoảng bảy mươi cá thể voọc đầu vàng sinh sống dọc các vách đá ven biển. Các kiểm lâm viên và tình nguyện viên tận tụy điều hành sứ mệnh cứu hộ động vật để bảo vệ sinh cảnh rừng, giúp loài linh trưởng quý giá này phát triển an toàn trên đảo.',
    pedagogicalFocus: 'Đọc diễn cảm, ngắt nghỉ đúng theo cụm nghĩa (thought groups), hạ giọng trầm ấm tự nhiên ở cuối câu, tạo không khí lắng đọng giàu ý thức bảo vệ thiên nhiên.',
    icon: '📖',
    normalAudioUrl: '/audio/jenny-showcase/jenny_reading_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_reading_slow.mp3'
  },

  // 4. SPEAKING
  {
    id: 'jenny_speaking',
    activityCategory: 'speaking',
    categoryLabel: '4. Speaking Quest (Luyện Nói)',
    typeBadge: 'Mẫu Chuẩn Rõ Ràng Để Học Sinh Bắt Chước',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    title: 'Cat Ba Langur Protection Pledge',
    ipa: '/prəˈtekt/ in protect • /ˈfɔːr.ɪst/ in forest',
    en: 'We must protect Cat Ba langurs and their forest.',
    vi: 'Chúng ta phải bảo vệ loài voọc Cát Bà và khu rừng của chúng.',
    pedagogicalFocus: 'Giọng mẫu rõ ràng từng âm tiết, ngữ điệu quyết tâm, nhấn mạnh hai tiêu điểm ngữ âm /prəˈtekt/ và /ˈfɔːr.ɪst/ để học sinh tự tin lặp lại.',
    icon: '🗣️',
    normalAudioUrl: '/audio/jenny-showcase/jenny_speaking_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_speaking_slow.mp3'
  },

  // 5. GAMES & QUIZ
  {
    id: 'jenny_game_cheer',
    activityCategory: 'games',
    categoryLabel: '5. Games & Rewards (Trò Chơi)',
    typeBadge: 'Vui Tươi • Thân Thiện • Truyền Cảm Hứng',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
    title: 'Victory & Star Fanfare Cheer',
    en: 'Awesome job, explorer! You found the rare langurs and earned twenty-five bonus stars! Keep up the great work!',
    vi: 'Làm tốt lắm, nhà thám hiểm! Con đã tìm thấy loài voọc quý hiếm và nhận được hai mươi lăm ngôi sao thưởng! Hãy tiếp tục phát huy nhé!',
    pedagogicalFocus: 'Giọng vui tươi, hồ hởi, giàu năng lượng tích cực; tạo cảm giác cô giáo đang vỗ tay chúc mừng trực tiếp, kích thích sự tự tin của trẻ.',
    icon: '⭐',
    normalAudioUrl: '/audio/jenny-showcase/jenny_game_cheer_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_game_cheer_slow.mp3'
  },
  {
    id: 'jenny_quiz_question',
    activityCategory: 'games',
    categoryLabel: '5. Challenge Quiz (Câu Hỏi Trắc Nghiệm)',
    typeBadge: 'Rành Mạch • Phân Định Các Lựa Chọn',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    title: 'Conservation MCQ Reading',
    en: 'Why do rangers protect the Cat Ba langurs in the national park? Option A: To keep their limestone forest safe. Option B: To sell them at the market. Option C: To teach them how to swim.',
    vi: 'Vì sao các kiểm lâm viên bảo vệ loài voọc Cát Bà trong vườn quốc gia? Lựa chọn A: Để giữ an toàn cho khu rừng đá vôi của chúng. Lựa chọn B: Để bán chúng ở chợ. Lựa chọn C: Để dạy chúng tập bơi.',
    pedagogicalFocus: 'Đọc câu hỏi rõ ràng, ngắt nhịp rành mạch giữa câu hỏi và các phương án A, B, C; giúp học sinh dễ đối chiếu thông tin để lựa chọn đúng.',
    icon: '❓',
    normalAudioUrl: '/audio/jenny-showcase/jenny_quiz_question_normal.mp3',
    slowAudioUrl: '/audio/jenny-showcase/jenny_quiz_question_slow.mp3'
  }
];

export const VoiceUpgradePreview: React.FC<VoiceUpgradePreviewProps> = ({ onBackToHome }) => {
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lastFinishedId, setLastFinishedId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStopAll = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    stopSpeech();
    setPlayingKey(null);
  };

  useEffect(() => {
    return () => {
      handleStopAll();
    };
  }, []);

  // Play pre-rendered Jenny Neural audio
  const handlePlayJennyAudio = (item: JennyShowcaseItem, speed: 'normal' | 'slow') => {
    handleStopAll();
    soundEffects.playClick();

    const key = `${item.id}_jenny_${speed}`;
    setPlayingKey(key);

    const audioUrl = speed === 'normal' ? item.normalAudioUrl : item.slowAudioUrl;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onended = () => {
      setPlayingKey(null);
      setLastFinishedId(item.id);
    };

    audio.onerror = (e) => {
      console.warn('Audio playback error:', e);
      setPlayingKey(null);
    };

    audio.play().catch(err => {
      console.warn('Playback failed:', err);
      setPlayingKey(null);
    });
  };

  // Play using current browser Web Speech API for direct comparison
  const handlePlayCurrentRobotSpeech = (item: JennyShowcaseItem) => {
    handleStopAll();
    soundEffects.playClick();

    const key = `${item.id}_robot`;
    setPlayingKey(key);

    playEnglishSpeech(item.en, {
      slow: false,
      rate: 0.88,
      pitch: 1.05,
      lang: 'en-US',
      onEnd: () => {
        setPlayingKey(null);
        setLastFinishedId(item.id);
      },
      onError: () => setPlayingKey(null)
    });
  };

  const filteredItems = activeCategory === 'all'
    ? JENNY_BENCHMARKS
    : JENNY_BENCHMARKS.filter(i => i.activityCategory === activeCategory);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fade-in">
      
      {/* 1. HERO HEADER BAR */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0C326F] via-[#1E40AF] to-[#6366F1] text-white p-6 sm:p-7 shadow-xl border border-indigo-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-3xl shadow-md shrink-0">
            👩‍🏫
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] uppercase tracking-wider shadow-xs">
                Ưu Tiên Đã Chọn: Microsoft Jenny Neural
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/30 text-emerald-200 border border-emerald-400/40 font-bold text-[10px]">
                General American (en-US)
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-heading tracking-tight mt-1.5">
              Phòng Nghe Thử Chuyên Sâu Giọng Cô Giáo Mỹ Jenny Neural
            </h1>
            <p className="text-xs text-blue-100/90 font-medium mt-0.5">
              Thẩm định trực quan 5 trụ cột sư phạm: Vocabulary, Listening, Reading, Speaking, Games &amp; Quiz
            </p>
          </div>
        </div>

        {onBackToHome && (
          <button
            onClick={() => {
              handleStopAll();
              onBackToHome();
            }}
            className="px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white text-xs font-black border border-white/40 flex items-center gap-2 cursor-pointer transition-all shadow-sm shrink-0 relative z-10 hover:scale-102"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </button>
        )}
      </div>

      {/* 2. REALITY CHECK & COST TRANSPARENCY CARD */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-emerald-300 shadow-md space-y-3">
        <div className="flex items-center gap-2.5 text-emerald-950 font-black text-sm sm:text-base border-b border-emerald-100 pb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Báo Cáo Khả Năng Sử Dụng Jenny Neural Thực Tế &amp; Chi Phí (Cam Kết Không Tự Đăng Ký)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-slate-700 text-xs">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <div className="font-black text-emerald-950 flex items-center gap-1.5">
              <span>✅ Chi Phí: 0 VNĐ (Không cần Azure trả phí)</span>
            </div>
            <p className="text-[11px] text-emerald-900 leading-relaxed">
              Toàn bộ file âm thanh Jenny Neural được tạo sẵn bằng pipeline Microsoft Neural TTS an toàn trong quá trình hoàn thiện nội dung. <strong>Không cần thẻ tín dụng, không cần tài khoản Azure có phí</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
            <div className="font-black text-blue-950 flex items-center gap-1.5">
              <span>🔒 Bảo Mật: 100% Không Lộ API Key</span>
            </div>
            <p className="text-[11px] text-blue-900 leading-relaxed">
              File âm thanh MP3 tĩnh được lưu trực tiếp trên máy chủ / CDN. Tuyệt đối <strong>không đưa bất kỳ Secret API Key nào vào mã nguồn frontend</strong> của website.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
            <div className="font-black text-amber-950 flex items-center gap-1.5">
              <span>🚫 Cảnh Báo: Không Dùng Robot Âm Thầm</span>
            </div>
            <p className="text-[11px] text-amber-900 leading-relaxed">
              Nếu dùng SpeechSynthesis của trình duyệt, học sinh dùng Chrome/Android sẽ bị rớt về giọng robot. Do đó, <strong>phải dùng tệp MP3 Jenny Neural cố định</strong> để bảo đảm chất lượng 100% đồng nhất trên mọi thiết bị.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY FILTER TABS */}
      <div className="bg-white rounded-3xl p-4 border-2 border-indigo-100 shadow-sm flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-slate-800 font-black text-xs">
          <GraduationCap className="w-4 h-4 text-indigo-600" />
          <span>Lọc theo hoạt động bài học:</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-indigo-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả (7 mẫu)
          </button>
          <button
            onClick={() => setActiveCategory('vocabulary')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'vocabulary'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>🏞️</span>
            <span>Vocabulary (2)</span>
          </button>
          <button
            onClick={() => setActiveCategory('listening')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'listening'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>🎧</span>
            <span>Listening (1)</span>
          </button>
          <button
            onClick={() => setActiveCategory('reading')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'reading'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>📖</span>
            <span>Reading (1)</span>
          </button>
          <button
            onClick={() => setActiveCategory('speaking')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'speaking'
                ? 'bg-indigo-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>🗣️</span>
            <span>Speaking (1)</span>
          </button>
          <button
            onClick={() => setActiveCategory('games')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'games'
                ? 'bg-pink-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>⭐</span>
            <span>Games &amp; Quiz (2)</span>
          </button>
        </div>
      </div>

      {/* 4. SHOWCASE CARDS */}
      <div className="space-y-5">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 shadow-md hover:border-indigo-300 transition-all space-y-4"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl p-2.5 rounded-2xl bg-indigo-50 border border-indigo-100 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-black text-indigo-800 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${item.badgeColor}`}>
                      {item.typeBadge}
                    </span>
                    {item.ipa && (
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10.5px]">
                        IPA: {item.ipa}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      📌 {item.title}
                    </h4>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading mt-0.5">
                    &quot;{item.en}&quot;
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">
                    🇻🇳 {item.vi}
                  </p>
                </div>
              </div>

              {/* Status and stop button if playing */}
              {playingKey && playingKey.startsWith(item.id) && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold animate-pulse self-start sm:self-auto shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Đang phát âm thanh...</span>
                  <button 
                    onClick={handleStopAll}
                    className="p-1 rounded-full bg-emerald-200 hover:bg-emerald-300 text-emerald-900 cursor-pointer ml-1"
                    title="Dừng"
                  >
                    <Square className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Pedagogical Focus Note */}
            <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 text-[11.5px] text-indigo-950 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>Mục tiêu sư phạm cụ thể:</strong> {item.pedagogicalFocus}
              </div>
            </div>

            {/* 3 Dedicated Listening Options for Jenny Neural */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              
              {/* Option 1: Jenny Neural Normal (Chuẩn Đề Xuất) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_jenny_normal`
                  ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-300 shadow-md'
                  : 'bg-indigo-50/40 border-indigo-200 hover:border-indigo-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-indigo-950 text-xs flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Jenny Neural (Chuẩn)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">
                      ⭐ Đề Xuất Chính
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Tốc độ tiêu chuẩn 1.0x, ngữ điệu tự nhiên, ấm áp, chuẩn General American.
                  </p>
                </div>

                <button
                  onClick={() => handlePlayJennyAudio(item, 'normal')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-black shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    playingKey === `${item.id}_jenny_normal`
                      ? 'bg-indigo-600 text-white animate-pulse'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {playingKey === `${item.id}_jenny_normal` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe Jenny (Chuẩn 1.0x)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Option 2: Jenny Neural Slow (Dành Cho Lớp 1-3) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_jenny_slow`
                  ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-300 shadow-md'
                  : 'bg-amber-50/40 border-amber-200 hover:border-amber-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-amber-950 text-xs flex items-center gap-1">
                      <Sliders className="w-3.5 h-3.5 text-amber-600" />
                      <span>Jenny Neural (Chậm)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                      🐢 Cho Lớp 1–3
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Tốc độ 0.85x chậm rãi, giữ nguyên cao độ, không biến dạng giọng nói.
                  </p>
                </div>

                <button
                  onClick={() => handlePlayJennyAudio(item, 'slow')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-black shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    playingKey === `${item.id}_jenny_slow`
                      ? 'bg-amber-600 text-white animate-pulse'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                >
                  {playingKey === `${item.id}_jenny_slow` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe Jenny (Chậm 0.85x)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Option 3: Giọng Robot Cũ trên Máy (Đối Chiếu) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_robot`
                  ? 'bg-slate-100 border-slate-500 ring-2 ring-slate-300 shadow-md'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800 text-xs">
                      Bản Cũ (Robot trên máy)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-medium">
                      Để đối chiếu
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Giọng Web Speech của hệ điều hành máy tính (khô cứng, đọc máy móc).
                  </p>
                </div>

                <button
                  onClick={() => handlePlayCurrentRobotSpeech(item)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-300 flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    playingKey === `${item.id}_robot`
                      ? 'bg-slate-700 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {playingKey === `${item.id}_robot` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe bản cũ (Robot)</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Listen Again prompt */}
            {lastFinishedId === item.id && (
              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Đã nghe xong đoạn mẫu này. Cô Trang có thể bấm <strong>Listen Again (Nghe lại)</strong> với tốc độ chậm hoặc nghe bản cũ để so sánh.</span>
                </span>
                <button
                  onClick={() => handlePlayJennyAudio(item, 'normal')}
                  className="px-3 py-1 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors shrink-0 ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Nghe lại Jenny</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 5. IMPLEMENTATION ROADMAP & COMMITMENTS */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-indigo-200 shadow-lg space-y-4 text-xs leading-relaxed">
        <div className="flex items-center gap-2.5 text-indigo-950 font-black text-sm sm:text-base border-b border-slate-100 pb-3">
          <FileText className="w-5 h-5 text-indigo-600" />
          <span>Kế Hoạch Triển Khai Jenny Neural Toàn Bộ Website (Sau Khi Cô Trang Phê Duyệt)</span>
        </div>

        <div className="space-y-3 text-slate-700 text-[11.5px]">
          <p>
            Sau khi Cô Trang nghe thử và phê duyệt các mẫu giọng Jenny Neural ở trên, quy trình thay thế đồng bộ trên toàn website sẽ diễn ra theo 4 bước an toàn tuyệt đối:
          </p>

          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Đóng gói toàn bộ 100 từ vựng cốt lõi (Lớp 1–5):</strong> Tạo sẵn 100 file từ đơn và 100 file câu ví dụ bằng giọng Jenny Neural (`/public/audio/vocab/`).
            </li>
            <li>
              <strong>Đóng gói 25 bài đọc và 25 bài nghe:</strong> Tạo sẵn các file MP3 bài đọc diễn cảm và bài nghe hội thoại của 25 bài học (`/public/audio/curriculum/`).
            </li>
            <li>
              <strong>Nâng cấp `src/lib/speech.ts`:</strong> Ưu tiên nạp và phát trực tiếp file MP3 Jenny Neural tương ứng với độ trễ 0ms; chỉ fallback về browser speech nếu mất kết nối.
            </li>
            <li>
              <strong>Loại bỏ triệt để các cấu hình `en-GB`:</strong> Chuẩn hóa đồng bộ 100% sang General American (`en-US`).
            </li>
          </ol>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-2 mt-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Cam kết hiện tại:</strong> Chỉ lưu các mẫu âm thanh thử nghiệm trong `public/audio/jenny-showcase/`. <strong>Chưa thay đổi giáo trình, chưa Deploy</strong> lên máy chủ cho đến khi có lệnh phê duyệt chính thức từ Cô Trang.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
