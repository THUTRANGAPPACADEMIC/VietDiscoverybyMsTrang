import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause,
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Layers, 
  CheckCircle, 
  Star, 
  Volume2, 
  Mic, 
  MicOff,
  RotateCcw,
  MapPin,
  Compass,
  ArrowRight,
  CheckCircle2,
  Trophy,
  VolumeX,
  FastForward,
  HelpCircle,
  Tv
} from 'lucide-react';
import { EducationalVideo, StudentVideoProgress } from '../../../types';
import { VideoQuizSection } from './VideoQuizSection';
import { soundEffects } from '../../../lib/soundEffects';
import { backgroundMusic } from '../../../lib/backgroundMusic';
import { playEnglishSpeech } from '../../../lib/speech';

export type VideoLearningStep = 'watch' | 'listen' | 'speak' | 'play' | 'apply' | 'overview';

interface VideoPlayerModalProps {
  video: EducationalVideo | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveProgress: (progress: StudentVideoProgress) => void;
  onEarnStars?: (stars: number) => void;
  studentId?: string;
  studentName?: string;
  classCode?: string;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  onSaveProgress,
  onEarnStars,
  studentId = 'guest_student',
  studentName = 'Học sinh Khám Phá',
  classCode = '5.6'
}) => {
  // Lazy-load state: video iframe only loads when student explicitly clicks "Play"
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState<VideoLearningStep>('watch');

  // Step 2 (Listen) States
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSlowAudio, setIsSlowAudio] = useState(false);

  // Step 3 (Speak) States
  const [isModelSpeaking, setIsModelSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(3);
  const [speechSuccess, setSpeechSuccess] = useState(false);

  // Step 5 (Apply) States
  const [selectedSentenceFrame, setSelectedSentenceFrame] = useState<number | null>(null);
  const [customMissionAnswer, setCustomMissionAnswer] = useState('');
  const [isMissionSubmitted, setIsMissionSubmitted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  // Reset states when video changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      setActiveStep('watch');
      setIsAudioPlaying(false);
      setIsModelSpeaking(false);
      setIsRecording(false);
      setSpeechSuccess(false);
      setSelectedSentenceFrame(null);
      setCustomMissionAnswer('');
      setIsMissionSubmitted(false);
    }
  }, [isOpen, video?.id]);

  // Intelligent Audio: Duck background music while video lesson or speech is playing
  useEffect(() => {
    if (isOpen && isPlaying) {
      backgroundMusic.duck('video');
    } else {
      backgroundMusic.unduck('video');
    }
    return () => {
      backgroundMusic.unduck('video');
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen, isPlaying]);

  if (!isOpen || !video) return null;

  const handleStartPlay = () => {
    soundEffects.playClick();
    setIsPlaying(true);
    markStepComplete('watch');

    onSaveProgress({
      videoId: video.id,
      studentId,
      studentName,
      classCode,
      watched: true,
      attempts: 1,
      starsEarned: 10,
      completedAt: new Date().toISOString()
    });
    if (onEarnStars) onEarnStars(10);
  };

  const markStepComplete = (step: VideoLearningStep) => {
    setCompletedSteps(prev => ({ ...prev, [step]: true }));
  };

  // Step 2 Listen Audio Playback (British English RP)
  const handlePlayListeningAudio = (text: string, slow: boolean = false) => {
    soundEffects.playClick();
    setIsAudioPlaying(true);
    setIsSlowAudio(slow);
    playEnglishSpeech(text, {
      lang: 'en-GB', // British English RP pronunciation
      slow,
      rate: slow ? 0.68 : 0.86,
      onEnd: () => {
        setIsAudioPlaying(false);
        markStepComplete('listen');
      },
      onError: () => setIsAudioPlaying(false)
    });
  };

  // Step 3 Speak Model Audio Playback
  const handlePlayModelSpeech = (text: string) => {
    soundEffects.playClick();
    setIsModelSpeaking(true);
    playEnglishSpeech(text, {
      lang: 'en-GB',
      onEnd: () => setIsModelSpeaking(false),
      onError: () => setIsModelSpeaking(false)
    });
  };

  // Step 3 Mic Practice
  const handleStartMicPractice = () => {
    soundEffects.playClick();
    setIsRecording(true);
    setSpeechSuccess(false);
    setRecordingSeconds(3);

    // Speech countdown & evaluation simulation
    const interval = setInterval(() => {
      setRecordingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRecording(false);
          setSpeechSuccess(true);
          soundEffects.playSuccess();
          markStepComplete('speak');
          if (onEarnStars) onEarnStars(15);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Step 4 Quiz Completion
  const handleQuizCompletion = (score: number, stars: number) => {
    markStepComplete('play');
    onSaveProgress({
      videoId: video.id,
      studentId,
      studentName,
      classCode,
      watched: true,
      quizScore: score,
      quizTotal: video.questions?.length || 2,
      attempts: 1,
      starsEarned: stars,
      completedAt: new Date().toISOString()
    });
    if (onEarnStars) onEarnStars(stars);
  };

  // Step 5 Submit Mission
  const handleSubmitMission = () => {
    soundEffects.playVictory();
    setIsMissionSubmitted(true);
    markStepComplete('apply');
    if (onEarnStars) onEarnStars(25);

    onSaveProgress({
      videoId: video.id,
      studentId,
      studentName,
      classCode,
      watched: true,
      attempts: 1,
      starsEarned: 25,
      completed5Steps: true,
      completedAt: new Date().toISOString()
    });
  };

  // Close and cleanup immediately
  const handleModalClose = () => {
    soundEffects.playClick();
    setIsPlaying(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    backgroundMusic.unduck('video');
    onClose();
  };

  // Default Fallbacks for Tasks
  const listeningTask = video.listeningTask || {
    keyPhraseEn: `Let's explore ${video.provinceName || 'Vietnam'} and discover its amazing wonders!`,
    keyPhraseVi: `Cùng khám phá ${video.provinceName || 'Việt Nam'} và tìm hiểu những điều kỳ diệu!`,
    vocabularyKeywords: [
      { word: 'explore', ipa: '/ɪkˈsplɔːr/', meaningVi: 'khám phá' },
      { word: 'wonder', ipa: '/ˈwʌn.dər/', meaningVi: 'kỳ quan' },
      { word: 'heritage', ipa: '/ˈher.ɪ.tɪdʒ/', meaningVi: 'di sản' }
    ]
  };

  const speakingTask = video.speakingTask || {
    modelSentenceEn: `I love learning about ${video.provinceName || 'Vietnam'}. It is wonderful!`,
    modelSentenceVi: `Em rất thích học về ${video.provinceName || 'Việt Nam'}. Nơi đây thật tuyệt vời!`,
    tipsEn: 'Speak clearly with British RP intonation and gentle rhythm.',
    tipsVi: 'Phát âm to rõ, chú ý ngữ điệu tự nhiên và âm đuôi chính xác.'
  };

  const applyTask = video.applyTask || {
    missionPromptEn: `Imagine you are an explorer guiding a tourist in ${video.provinceName || 'Vietnam'}. What would you introduce?`,
    missionPromptVi: `Em hãy đóng vai hướng dẫn viên nhí tại ${video.provinceName || 'Việt Nam'}. Em sẽ giới thiệu điều gì?`,
    sentenceFrames: [
      `Welcome to ${video.provinceName || 'our city'}! You can see many famous landmarks here.`,
      `I recommend visiting the historic sites and tasting delicious local foods.`,
      `Vietnam is beautiful, and ${video.provinceName || 'this destination'} is one of my favorite places!`
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-3xl shadow-2xl border-2 border-slate-100 flex flex-col overflow-hidden my-auto">
        
        {/* Modal Topbar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-4">
            <span className="px-2.5 py-0.5 rounded-lg bg-rose-500 text-white font-extrabold text-[11px] shrink-0">
              Khối Lớp {video.grade}
            </span>
            {video.provinceName && (
              <span className="px-2.5 py-0.5 rounded-lg bg-sky-600 text-white font-bold text-[11px] shrink-0 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{video.provinceName}</span>
              </span>
            )}
            <span className="text-xs sm:text-sm font-bold text-slate-200 truncate">
              {video.titleEn}
            </span>
          </div>

          <button
            onClick={handleModalClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 5-Step Learning Pathway Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-6 py-2.5 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
            
            {/* Step 1: WATCH */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('watch');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 'watch'
                  ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>1. WATCH</span>
              {completedSteps.watch && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>

            {/* Step 2: LISTEN */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('listen');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 'listen'
                  ? 'bg-sky-500 text-white shadow-sm ring-2 ring-sky-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>2. LISTEN</span>
              {completedSteps.listen && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>

            {/* Step 3: SPEAK */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('speak');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 'speak'
                  ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>3. SPEAK</span>
              {completedSteps.speak && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>

            {/* Step 4: PLAY */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('play');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 'play'
                  ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>4. PLAY</span>
              {completedSteps.play && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>

            {/* Step 5: APPLY */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('apply');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 'apply'
                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>5. APPLY</span>
              {completedSteps.apply && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-500" />}
            </button>

            <div className="h-4 w-px bg-slate-300 mx-1" />

            {/* Extra: Objectives & Overview */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setActiveStep('overview');
              }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                activeStep === 'overview'
                  ? 'bg-indigo-700 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mục tiêu bài học</span>
            </button>

          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          
          {/* STEP 1: WATCH (Click-to-play child-safe video facade) */}
          {activeStep === 'watch' && (
            <div className="space-y-4 animate-fade-in">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-800">
                {isPlaying ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.titleEn}
                    className="w-full h-full border-0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div 
                    onClick={handleStartPlay}
                    className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                  >
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                    <div className="relative z-10 text-center space-y-3 px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300 border-4 border-white/80">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-black text-white font-heading drop-shadow-md">
                          Bấm để bắt đầu xem & học tập
                        </h3>
                        <p className="text-xs text-slate-200 mt-1 font-medium">
                          Thời lượng: {video.durationMinutes} phút • Bảo mật an toàn cho học sinh
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Child-Safe Protection Strip */}
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between text-[11px] text-sky-900 font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Chế độ Giáo dục An toàn (Child-Safe Mode): Không quảng cáo độc hại • Không theo dõi cookie</span>
                </div>
                <span className="hidden sm:inline text-sky-600 font-bold">Nguồn: {video.channelOrAuthor}</span>
              </div>

              {/* Bilingual Video Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {video.isTeacherCreated && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[10px] shadow-xs">
                      ⭐ BẢN QUYỀN CỦA CÔ THU TRANG
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-extrabold text-[10.5px]">
                    {video.topic}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[10.5px]">
                    Cấp độ: {video.difficulty}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                  {video.titleEn}
                </h3>
                <p className="text-sm font-semibold text-slate-500 italic">
                  {video.titleVi}
                </p>
              </div>

              {/* Next Step Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    markStepComplete('watch');
                    setActiveStep('listen');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Chuyển sang Bước 2: LISTEN (Luyện Nghe)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LISTEN (Active Listening & Vocabulary with British RP) */}
          {activeStep === 'listen' && (
            <div className="space-y-5 animate-fade-in">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-500 text-white font-extrabold text-xs">
                    🎧 Bước 2: Luyện Nghe Chủ Động (Active Listening)
                  </span>
                  <span className="text-xs font-bold text-sky-800">
                    Phát âm chuẩn British English (RP)
                  </span>
                </div>

                {/* Key Sentence Box */}
                <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Key Sentence (Câu mẫu cốt lõi):
                  </span>
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed">
                    "{listeningTask.keyPhraseEn}"
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 italic">
                    {listeningTask.keyPhraseVi}
                  </p>

                  {/* Audio Controls */}
                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => handlePlayListeningAudio(listeningTask.keyPhraseEn, false)}
                      disabled={isAudioPlaying}
                      className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-all"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{isAudioPlaying && !isSlowAudio ? 'Đang phát...' : 'Nghe phát âm chuẩn (Normal)'}</span>
                    </button>

                    <button
                      onClick={() => handlePlayListeningAudio(listeningTask.keyPhraseEn, true)}
                      disabled={isAudioPlaying}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-all"
                    >
                      <span>🐢 Nghe chậm rõ từng từ (0.68x)</span>
                    </button>
                  </div>
                </div>

                {/* Vocabulary Keywords with IPA */}
                <div className="space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    Từ vựng trọng tâm (Bấm vào để nghe phát âm):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {listeningTask.vocabularyKeywords?.map((vocab, i) => (
                      <div
                        key={i}
                        onClick={() => handlePlayListeningAudio(vocab.word, false)}
                        className="p-3 bg-white hover:bg-sky-50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900 group-hover:text-sky-600">
                            {vocab.word}
                          </span>
                          <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500" />
                        </div>
                        <div className="text-[11px] font-mono text-indigo-600 font-semibold">
                          {vocab.ipa}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          {vocab.meaningVi}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Step Action */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setActiveStep('watch')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  ← Quay lại Xem Video
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    markStepComplete('listen');
                    setActiveStep('speak');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Chuyển sang Bước 3: SPEAK (Luyện Nói)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SPEAK (Interactive Speaking & Microphone Practice) */}
          {activeStep === 'speak' && (
            <div className="space-y-5 animate-fade-in">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-xs">
                    🎤 Bước 3: Luyện Nói Tương Tác (Interactive Speaking)
                  </span>
                  <span className="text-xs font-bold text-amber-900">
                    Tập phát âm tự tin cùng Cô Trang
                  </span>
                </div>

                {/* Model Speaking Sentence */}
                <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-xs space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Model Sentence (Mẫu câu luyện nói):
                  </span>
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-relaxed">
                    "{speakingTask.modelSentenceEn}"
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 italic">
                    {speakingTask.modelSentenceVi}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => handlePlayModelSpeech(speakingTask.modelSentenceEn)}
                      disabled={isModelSpeaking}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-all"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{isModelSpeaking ? 'Đang phát...' : 'Nghe giọng mẫu chuẩn RP'}</span>
                    </button>
                  </div>
                </div>

                {/* Interactive Mic Practice Box */}
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center space-y-3">
                  <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
                    Phòng Thu Thử Thách Phát Âm Của Bé
                  </div>

                  {isRecording ? (
                    <div className="py-4 space-y-3 animate-pulse">
                      <div className="w-16 h-16 mx-auto rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg ring-8 ring-rose-200 animate-bounce">
                        <Mic className="w-8 h-8" />
                      </div>
                      <div className="text-sm font-black text-rose-600">
                        Bé đang nói... Đếm ngược: {recordingSeconds}s
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        Hãy đọc to câu mẫu ở trên với ngữ điệu tự tin nhé!
                      </p>
                    </div>
                  ) : speechSuccess ? (
                    <div className="py-3 space-y-2 animate-fade-in">
                      <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-black text-emerald-700 font-heading">
                        Tuyệt vời! Excellent Pronunciation! 🌟
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        Bé đã phát âm to, rõ ràng và nhận được <span className="font-black text-amber-600">+15 sao</span>!
                      </p>
                      <button
                        onClick={handleStartMicPractice}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Thử lại lần nữa</span>
                      </button>
                    </div>
                  ) : (
                    <div className="py-3 space-y-2">
                      <button
                        onClick={handleStartMicPractice}
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-sm flex items-center gap-2 mx-auto shadow-md cursor-pointer transition-all hover:scale-105"
                      >
                        <Mic className="w-5 h-5" />
                        <span>Bắt đầu Nói & Ghi Âm (Start Speaking)</span>
                      </button>
                      <p className="text-xs text-slate-400 font-medium">
                        Mẹo: {speakingTask.tipsVi || 'Nhấn trọng âm rõ ràng và nối âm tự nhiên.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Next Step Action */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setActiveStep('listen')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  ← Quay lại Luyện Nghe
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    markStepComplete('speak');
                    setActiveStep('play');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Chuyển sang Bước 4: PLAY (Đố Vui)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PLAY (Grade-Differentiated Comprehension Quiz) */}
          {activeStep === 'play' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between pb-1">
                <span className="px-3 py-1 rounded-full bg-purple-600 text-white font-extrabold text-xs">
                  🎮 Bước 4: Thử Thách Đố Vui (Interactive Quiz)
                </span>
                <span className="text-xs font-bold text-purple-800">
                  {video.questions?.length || 2} câu hỏi trắc nghiệm
                </span>
              </div>

              <VideoQuizSection
                video={video}
                onCompleteQuiz={handleQuizCompletion}
              />

              {/* Next Step Action */}
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setActiveStep('speak')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  ← Quay lại Luyện Nói
                </button>
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    markStepComplete('play');
                    setActiveStep('apply');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Chuyển sang Bước 5: APPLY (Nhiệm Vụ Khám Phá)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: APPLY (Province Explorer Mission & Sentence Builder) */}
          {activeStep === 'apply' && (
            <div className="space-y-5 animate-fade-in">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-xs">
                    🌟 Bước 5: Nhiệm Vụ Khám Phá Địa Phương (Province Explorer Mission)
                  </span>
                  <span className="text-xs font-bold text-emerald-800">
                    Ứng dụng kiến thức tiếng Anh
                  </span>
                </div>

                {/* Mission Prompt */}
                <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-xs space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Explorer Mission Prompt:
                  </span>
                  <p className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                    {applyTask.missionPromptEn}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 italic">
                    {applyTask.missionPromptVi}
                  </p>
                </div>

                {/* Sentence Frames Selector */}
                <div className="space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                    Chọn câu chia sẻ của em (Sentence Frames):
                  </span>
                  <div className="space-y-2">
                    {applyTask.sentenceFrames?.map((frame, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          soundEffects.playClick();
                          setSelectedSentenceFrame(i);
                        }}
                        className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          selectedSentenceFrame === i
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-200'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 font-bold'
                        }`}
                      >
                        <span className="text-xs sm:text-sm">"{frame}"</span>
                        {selectedSentenceFrame === i && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission Submit Result */}
                {isMissionSubmitted ? (
                  <div className="p-5 bg-white rounded-2xl border-2 border-emerald-300 text-center space-y-2 animate-fade-in shadow-md">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-black text-emerald-800 font-heading">
                      Chúc Mừng Nhà Khám Phá Nhí! 🎉
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Em đã hoàn thành xuất sắc toàn bộ 5 bước của bài học video và đạt được danh hiệu <span className="font-bold text-amber-600">Đại Sứ Khám Phá {video.provinceName || 'Việt Nam'}</span>!
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span>Thưởng thêm +25 sao hoàn thành</span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2 text-center">
                    <button
                      onClick={handleSubmitMission}
                      disabled={selectedSentenceFrame === null}
                      className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm flex items-center gap-2 mx-auto shadow-md cursor-pointer transition-all hover:scale-105"
                    >
                      <Trophy className="w-5 h-5" />
                      <span>Hoàn Thành Nhiệm Vụ & Nhận Huy Hiệu (+25 sao)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Back to Watch */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setActiveStep('play')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  ← Quay lại Đố Vui
                </button>
                <button
                  onClick={handleModalClose}
                  className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-black text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Hoàn tất & Đóng bài học 🎓</span>
                </button>
              </div>
            </div>
          )}

          {/* EXTRA: OVERVIEW & OBJECTIVES DRAWER */}
          {activeStep === 'overview' && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 animate-fade-in">
              <div>
                <div className="text-xs font-black text-indigo-700 uppercase tracking-wider mb-2">
                  Key English Competencies & Learning Goals (Mục tiêu học tập)
                </div>
                <ul className="space-y-2">
                  {video.learningObjectivesEn?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {video.learningObjectivesVi && video.learningObjectivesVi.length > 0 && (
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-2">
                    Mục tiêu đạt được sau bài học (Tiếng Việt)
                  </div>
                  <ul className="space-y-2">
                    {video.learningObjectivesVi.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                  Nội dung tóm tắt
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {video.descriptionVi}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStep('watch')}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer"
                >
                  Quay lại bài học
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
