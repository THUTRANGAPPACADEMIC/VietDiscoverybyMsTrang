import React, { useState, useRef } from 'react';
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
  Award
} from 'lucide-react';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

interface VoiceUpgradePreviewProps {
  onBackToHome?: () => void;
}

interface SampleSentence {
  id: string;
  en: string;
  vi: string;
  category: string;
  icon: string;
}

const SAMPLE_SENTENCES: SampleSentence[] = [
  {
    id: 'sample1',
    en: 'Welcome to VietDiscovery!',
    vi: 'Chào mừng các em đến với VietDiscovery!',
    category: 'Introduction • Chào mừng',
    icon: '👋'
  },
  {
    id: 'sample2',
    en: "Let's explore beautiful Ha Long Bay!",
    vi: 'Hãy cùng khám phá Vịnh Hạ Long tuyệt đẹp nhé!',
    category: 'Adventure & Reading • Khám phá địa danh',
    icon: '⛵'
  },
  {
    id: 'sample3',
    en: 'Great job! You are a wonderful explorer!',
    vi: 'Làm tốt lắm! Em là một nhà thám hiểm tuyệt vời!',
    category: 'Praise & Games • Khen thưởng trò chơi',
    icon: '⭐'
  }
];

export const VoiceUpgradePreview: React.FC<VoiceUpgradePreviewProps> = ({ onBackToHome }) => {
  const [speedMode, setSpeedMode] = useState<'normal' | 'slow'>('normal');
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop current audio or speech
  const handleStopAll = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    stopSpeech();
    setPlayingKey(null);
  };

  // Play pre-rendered studio Neural AI voice
  const handlePlayNeuralAudio = (sampleId: string, voiceCode: 'jenny' | 'ava') => {
    handleStopAll();
    soundEffects.playClick();

    const key = `${sampleId}_${voiceCode}_${speedMode}`;
    setPlayingKey(key);

    const audioUrl = `/audio/tts-samples/${sampleId}_${voiceCode}_${speedMode}.mp3`;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onended = () => {
      setPlayingKey(null);
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
  const handlePlayCurrentWebSpeech = (text: string, sampleId: string) => {
    handleStopAll();
    soundEffects.playClick();

    const key = `${sampleId}_webspeech_${speedMode}`;
    setPlayingKey(key);

    playEnglishSpeech(text, {
      slow: speedMode === 'slow',
      rate: speedMode === 'slow' ? 0.68 : 0.88,
      pitch: 1.05,
      onEnd: () => setPlayingKey(null),
      onError: () => setPlayingKey(null)
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
      
      {/* Header Bar */}
      <div className="rounded-3xl bg-white/95 backdrop-blur-md p-5 border-2 border-indigo-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white flex items-center justify-center text-2xl shadow-md shadow-indigo-200 shrink-0">
            🎙️
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[11px] uppercase tracking-wider">
                Audio Engine Upgrade • Đề xuất thử nghiệm
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                American English Female Voice
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black font-heading text-slate-900 mt-0.5">
              Phòng Nghe Thử Giọng Nữ AI Tiếng Anh Chuẩn Sư Phạm
            </h2>
          </div>
        </div>

        {onBackToHome && (
          <button
            onClick={() => {
              handleStopAll();
              onBackToHome();
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </button>
        )}
      </div>

      {/* Speed Control & Guide Banner */}
      <div className="bg-white rounded-3xl p-5 border-2 border-amber-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-900 font-black text-sm">
            <Sliders className="w-4 h-4 text-amber-600" />
            <span>Chế độ tốc độ đọc (Speed Mode):</span>
          </div>
          <p className="text-xs text-slate-600">
            Chọn tốc độ để kiểm tra độ rõ phát âm khi dạy trẻ em (Lớp 1–5):
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
          <button
            onClick={() => {
              handleStopAll();
              setSpeedMode('normal');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              speedMode === 'normal'
                ? 'bg-sky-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🐇 Normal Speed (1.0x)</span>
          </button>
          <button
            onClick={() => {
              handleStopAll();
              setSpeedMode('slow');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              speedMode === 'slow'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🐢 Slow Speed (0.75x)</span>
          </button>
        </div>
      </div>

      {/* 3 Test Sentences Cards */}
      <div className="space-y-4">
        {SAMPLE_SENTENCES.map((item, idx) => (
          <div 
            key={item.id} 
            className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200/80 shadow-md hover:border-indigo-300 transition-all space-y-4"
          >
            {/* Sentence Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 rounded-2xl bg-indigo-50 border border-indigo-100 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    &quot;{item.en}&quot;
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">
                    🇻🇳 {item.vi}
                  </p>
                </div>
              </div>

              {playingKey && playingKey.startsWith(item.id) && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold animate-pulse self-start sm:self-auto">
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

            {/* 3 Voice Comparison Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              
              {/* Voice 1: Microsoft Jenny Neural (Khuyên dùng) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_jenny_${speedMode}`
                  ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-300 shadow-md'
                  : 'bg-indigo-50/40 border-indigo-200 hover:border-indigo-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-indigo-950 text-xs flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Jenny Neural</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                      ⭐ Đề xuất số 1
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Giọng cô giáo Mỹ ấm áp, truyền cảm, ngắt nghỉ chuẩn ngữ điệu trẻ em.
                  </p>
                </div>

                <button
                  onClick={() => handlePlayNeuralAudio(item.id, 'jenny')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-black shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    playingKey === `${item.id}_jenny_${speedMode}`
                      ? 'bg-indigo-600 text-white animate-pulse'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {playingKey === `${item.id}_jenny_${speedMode}` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe Jenny ({speedMode === 'slow' ? 'Chậm' : 'Chuẩn'})</span>
                    </>
                  )}
                </button>
              </div>

              {/* Voice 2: Microsoft Ava Neural (Tươi vui, Năng động) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_ava_${speedMode}`
                  ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-300 shadow-md'
                  : 'bg-rose-50/40 border-rose-200 hover:border-rose-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-rose-950 text-xs flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-rose-500" />
                      <span>Ava Neural</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold">
                      Tươi vui & Hiện đại
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Âm vực trong sáng, giàu năng lượng tích cực, phù hợp phần khen thưởng games.
                  </p>
                </div>

                <button
                  onClick={() => handlePlayNeuralAudio(item.id, 'ava')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-black shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    playingKey === `${item.id}_ava_${speedMode}`
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-rose-500 hover:bg-rose-600 text-white'
                  }`}
                >
                  {playingKey === `${item.id}_ava_${speedMode}` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe Ava ({speedMode === 'slow' ? 'Chậm' : 'Chuẩn'})</span>
                    </>
                  )}
                </button>
              </div>

              {/* Voice 3: Web Speech API Hiện tại (Để so sánh) */}
              <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-3 ${
                playingKey === `${item.id}_webspeech_${speedMode}`
                  ? 'bg-slate-100 border-slate-400 ring-2 ring-slate-300 shadow-md'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800 text-xs">
                      Web Speech (Hiện tại)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-medium">
                      Trình duyệt máy
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Giọng TTS mặc định của hệ điều hành máy tính/điện thoại (thường bị khô hoặc hơi robot).
                  </p>
                </div>

                <button
                  onClick={() => handlePlayCurrentWebSpeech(item.en, item.id)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold border border-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    playingKey === `${item.id}_webspeech_${speedMode}`
                      ? 'bg-slate-700 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {playingKey === `${item.id}_webspeech_${speedMode}` ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      <span>Dừng phát</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe bản hiện tại</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Strategic Comparison & Technical Architecture Report */}
      <div className="bg-white rounded-3xl p-6 border-2 border-indigo-200 shadow-md space-y-4 text-xs leading-relaxed">
        <div className="flex items-center gap-2 text-indigo-950 font-black text-sm border-b border-slate-100 pb-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <span>Báo Cáo Giải Pháp Kỹ Thuật & Chi Phí TTS Tối Ưu</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-black text-slate-900 text-xs flex items-center gap-1.5">
              <span>⚠️ Hạn Chế Giọng Web Speech Hiện Tại:</span>
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
              <li>Phụ thuộc hoàn toàn vào máy học sinh (nếu máy cũ, trình duyệt phát giọng robot khô cứng).</li>
              <li>Không có ngắt nghỉ tự nhiên, phát âm tên địa danh Việt Nam hay bị giật âm.</li>
              <li>Chất lượng không đồng đều giữa máy tính Windows, điện thoại Android và iPad.</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <h4 className="font-black text-emerald-950 text-xs flex items-center gap-1.5">
              <span>✨ Ưu Điểm Đề Xuất (Hybrid Neural Audio):</span>
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-emerald-900 text-[11px]">
              <li><strong>Chi phí 0 VNĐ:</strong> Tạo sẵn các tệp âm thanh tĩnh (Vocabulary, Reading, Praises) lưu trên Supabase Storage / CDN.</li>
              <li><strong>Bảo mật 100%:</strong> Không cần đưa bất kỳ API secret key nào vào frontend.</li>
              <li><strong>Tốc độ tức thì (0ms latency):</strong> Tải file MP3 đã nén siêu nhẹ (~15KB/câu), học sinh bấm là phát ngay không cần chờ AI render.</li>
              <li><strong>Đồng nhất 100%:</strong> Mọi học sinh trên mọi thiết bị đều được nghe cùng một giọng cô giáo Mỹ ấm áp, truyền cảm.</li>
            </ul>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 text-[11px]">
          <strong>Đề xuất lựa chọn:</strong> Giọng <strong>Microsoft Jenny Neural</strong> là lựa chọn tối ưu nhất cho bài giảng tiểu học vì tốc độ vừa phải, âm vực ấm, phong thái khuyến khích tương đồng với các podcast dạy tiếng Anh cho trẻ em quốc tế. Giọng <strong>Ava Neural</strong> có thể dùng xen kẽ cho phần chúc mừng chiến thắng và trò chơi tương tác.
        </div>
      </div>

    </div>
  );
};
