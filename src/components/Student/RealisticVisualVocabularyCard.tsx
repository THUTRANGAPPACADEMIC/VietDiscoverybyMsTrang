import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Mic, 
  Square, 
  Play, 
  Star, 
  Info, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech } from '../../lib/speech';
import { VoiceRecorder } from '../../lib/audioRecorder';
import { getVocabularyVisual } from '../../data/vocabularyVisualsRegistry';

export interface VisualVocabularyItemProps {
  word: string;
  phonetic?: string;
  britishPhonetic?: string;
  meaningEn?: string;
  meaningVi: string;
  exampleSentence?: string;
  exampleSentenceVi?: string;
  imageUrl?: string;
  imageAttribution?: string;
  category?: 'landmark' | 'geography' | 'food' | 'culture' | 'wildlife' | 'nature' | 'architecture' | 'abstract';
  colorTheme?: 'sky' | 'purple' | 'amber' | 'emerald' | 'rose';
  onEarnStars?: (stars: number) => void;
}

export const RealisticVisualVocabularyCard: React.FC<VisualVocabularyItemProps> = ({
  word,
  phonetic,
  britishPhonetic,
  meaningEn,
  meaningVi,
  exampleSentence,
  exampleSentenceVi,
  imageUrl,
  imageAttribution,
  category = 'landmark',
  colorTheme = 'sky',
  onEarnStars
}) => {
  // Retrieve verified educational photograph from Registry
  const visualMeta = getVocabularyVisual(word, category, imageUrl);
  const activeImage = visualMeta.isPlaceholder ? '' : (visualMeta.imageUrl || imageUrl || '');
  const activeAttribution = imageAttribution || visualMeta.attributionText;
  const activeUkIpa = britishPhonetic || visualMeta.ukIpa || phonetic || '';
  const activeUsIpa = phonetic || visualMeta.usIpa || '';
  const activeMeaningEn = meaningEn || visualMeta.captionEn;
  const activeMeaningVi = meaningVi || visualMeta.vietnameseMeaning;
  const activeExampleEn = exampleSentence || visualMeta.exampleSentenceEn;
  const activeExampleVi = exampleSentenceVi || visualMeta.exampleSentenceVi;

  // Image fallback handling
  const [imgSrc, setImgSrc] = useState<string>(activeImage);
  const [imgError, setImgError] = useState<boolean>(false);
  const [showAttribution, setShowAttribution] = useState<boolean>(false);

  // Sync state when word changes (e.g. in carousel)
  useEffect(() => {
    setImgSrc(activeImage);
    setImgError(false);
  }, [activeImage]);

  const isPlaceholder = visualMeta.isPlaceholder || imgError || !imgSrc;

  // Audio accent mode (General American English default as required)
  const [accent, setAccent] = useState<'UK' | 'US'>('US');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Speak and Repeat Recording State
  const [recorder] = useState(() => new VoiceRecorder());
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [hasCompletedSpeaking, setHasCompletedSpeaking] = useState<boolean>(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recordStartTime, setRecordStartTime] = useState<number>(0);

  // Pastel theme mapping
  const themeClasses = {
    sky: {
      cardBg: 'bg-gradient-to-b from-[#f0f9ff] via-[#f8fafc] to-white',
      border: 'border-sky-200 hover:border-sky-400',
      badge: 'bg-sky-100 text-sky-800 border-sky-200',
      heading: 'text-sky-950',
      subText: 'text-sky-800',
      btnPrimary: 'bg-sky-500 hover:bg-sky-600 text-white shadow-sky-200',
      btnSecondary: 'bg-sky-100 hover:bg-sky-200 text-sky-900',
      accent: 'text-sky-600'
    },
    purple: {
      cardBg: 'bg-gradient-to-b from-[#faf5ff] via-[#f8fafc] to-white',
      border: 'border-purple-200 hover:border-purple-400',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      heading: 'text-purple-950',
      subText: 'text-purple-800',
      btnPrimary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
      btnSecondary: 'bg-purple-100 hover:bg-purple-200 text-purple-900',
      accent: 'text-purple-600'
    },
    amber: {
      cardBg: 'bg-gradient-to-b from-[#fffbeb] via-[#f8fafc] to-white',
      border: 'border-amber-200 hover:border-amber-400',
      badge: 'bg-amber-100 text-amber-900 border-amber-200',
      heading: 'text-amber-950',
      subText: 'text-amber-800',
      btnPrimary: 'bg-amber-500 hover:bg-amber-600 text-amber-950 shadow-amber-200',
      btnSecondary: 'bg-amber-100 hover:bg-amber-200 text-amber-950',
      accent: 'text-amber-600'
    },
    emerald: {
      cardBg: 'bg-gradient-to-b from-[#ecfdf5] via-[#f8fafc] to-white',
      border: 'border-emerald-200 hover:border-emerald-400',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      heading: 'text-emerald-950',
      subText: 'text-emerald-800',
      btnPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200',
      btnSecondary: 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900',
      accent: 'text-emerald-600'
    },
    rose: {
      cardBg: 'bg-gradient-to-b from-[#fff1f2] via-[#f8fafc] to-white',
      border: 'border-rose-200 hover:border-rose-400',
      badge: 'bg-rose-100 text-rose-800 border-rose-200',
      heading: 'text-rose-950',
      subText: 'text-rose-800',
      btnPrimary: 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200',
      btnSecondary: 'bg-rose-100 hover:bg-rose-200 text-rose-900',
      accent: 'text-rose-600'
    }
  }[colorTheme];

  // Play word pronunciation in British or US English
  const handlePlayWord = (selectedAccent: 'UK' | 'US' = accent) => {
    soundEffects.playClick();
    setIsPlayingAudio(true);
    const lang = selectedAccent === 'UK' ? 'en-GB' : 'en-US';
    playEnglishSpeech(word, {
      lang,
      slow: false,
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Play example sentence
  const handlePlaySentence = () => {
    soundEffects.playClick();
    const lang = accent === 'UK' ? 'en-GB' : 'en-US';
    playEnglishSpeech(activeExampleEn, { lang, slow: false });
  };

  // Speak and Repeat Mic Recording
  const handleToggleRecord = async () => {
    setRecordError(null);
    if (!isRecording) {
      soundEffects.playClick();
      try {
        await recorder.start();
        setRecordStartTime(Date.now());
        setIsRecording(true);
      } catch (err: any) {
        setRecordError('Vui lòng cho phép truy cập micro để luyện nói!');
      }
    } else {
      try {
        const durationSeconds = (Date.now() - recordStartTime) / 1000;
        const audioUrl = await recorder.stop();
        setIsRecording(false);
        setUserAudioUrl(audioUrl);

        // Enforce genuine speech: require at least 1.0s of recording
        if (durationSeconds < 1.0) {
          setRecordError('Bé hãy đọc to từ vựng và giữ ghi âm ít nhất 1 giây nhé! 🎙️');
          return;
        }

        soundEffects.playCorrect();
        if (!hasCompletedSpeaking) {
          setHasCompletedSpeaking(true);
          soundEffects.playStarFanfare();
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.7 }
          });
          if (onEarnStars) onEarnStars(2);
        }
      } catch (err: any) {
        setRecordError('Không thể lưu bản ghi âm. Bé thử lại nhé!');
        setIsRecording(false);
      }
    }
  };

  // Play student recorded voice
  const handlePlayUserVoice = () => {
    if (!userAudioUrl) return;
    soundEffects.playClick();
    const audio = new Audio(userAudioUrl);
    audio.play();
  };

  return (
    <div
      data-testid="realistic-vocab-card"
      className={`group rounded-3xl overflow-hidden border-2 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${themeClasses.cardBg} ${themeClasses.border}`}
    >
      
      {/* 1. IMAGE-FIRST HERO SECTION (REALISTIC PHOTOGRAPH OR NEUTRAL EDUCATIONAL PLACEHOLDER) */}
      <div className="relative aspect-video sm:aspect-4/3 w-full overflow-hidden bg-slate-900">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 text-center select-none">
            <div className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-700/80 shadow-sm border border-slate-200/60 dark:border-slate-600/60 flex items-center justify-center text-3xl mb-2">
              🖼️
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
              Image coming soon
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              Ảnh đang cập nhật
            </span>
            <span className="mt-2 px-2.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-700 text-[10px] font-semibold text-slate-600 dark:text-slate-300 capitalize">
              {visualMeta.category || 'Vocabulary'}
            </span>
          </div>
        ) : (
          <>
            <img
              src={imgSrc}
              alt={word}
              loading="lazy"
              onError={() => {
                setImgError(true);
              }}
              className={`w-full h-full ${visualMeta.fitMode === 'contain' ? 'object-contain bg-slate-950 p-2' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 ease-out`}
            />
            {/* Subtle Dark Gradient Overlay for Contrast on Real Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />
          </>
        )}

        {/* Category Pill Tag - ONLY when image is verified and active (Requirement 9: Only Real Photo if genuine photograph) */}
        {!isPlaceholder && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            {visualMeta.isRealPhoto === true ? (
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 font-extrabold text-[11px] shadow-sm uppercase tracking-wider flex items-center gap-1 border border-slate-200">
                <span>📷</span>
                <span>Real Photo</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-indigo-900/85 backdrop-blur-md text-indigo-100 font-extrabold text-[11px] shadow-sm uppercase tracking-wider flex items-center gap-1 border border-indigo-400/30">
                <span>🎨</span>
                <span>Illustration</span>
              </span>
            )}
          </div>
        )}

        {/* Image Attribution Button - ONLY when real photo is active */}
        {!isPlaceholder && (
          <div className="absolute top-3 right-3">
            <button
              onClick={() => setShowAttribution(!showAttribution)}
              title="Image Attribution & License"
              className="w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/90 flex items-center justify-center transition-colors cursor-pointer text-xs"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Attribution Popover */}
        {showAttribution && (
          <div className="absolute inset-x-2 top-11 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/20 text-white z-20 text-xs space-y-1 shadow-2xl animate-fade-in">
            <div className="font-bold flex items-center justify-between">
              <span>Bản quyền hình ảnh:</span>
              <button onClick={() => setShowAttribution(false)} className="text-white/60 hover:text-white">✕</button>
            </div>
            <div className="text-[11px] text-slate-300 leading-snug">{activeAttribution}</div>
            <div className="text-[10px] text-sky-300 font-mono">License: {visualMeta.license}</div>
          </div>
        )}

        {/* Floating Accent Selector Pill (UK / US) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              onClick={() => {
                setAccent('UK');
                handlePlayWord('UK');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-black transition-all cursor-pointer flex items-center gap-1 ${
                accent === 'UK'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
              title="British English Pronunciation"
            >
              <span>🇬🇧</span>
              <span>UK</span>
            </button>

            <button
              onClick={() => {
                setAccent('US');
                handlePlayWord('US');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-black transition-all cursor-pointer flex items-center gap-1 ${
                accent === 'US'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
              title="American English Pronunciation"
            >
              <span>🇺🇸</span>
              <span>US</span>
            </button>
          </div>

          {/* Quick Audio Button on Image */}
          <button
            onClick={() => handlePlayWord()}
            className="px-3 py-1.5 rounded-full bg-white text-slate-900 font-black text-xs shadow-lg hover:bg-sky-50 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-sky-600' : 'text-slate-800'}`} />
            <span>Listen</span>
          </button>
        </div>
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        
        {/* Word, IPA & Listen Button */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className={`text-xl sm:text-2xl font-black font-heading tracking-tight leading-tight ${themeClasses.heading}`}>
                {word}
              </h3>

              {/* Dual IPA Pronunciation (UK British & US) */}
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                {activeUkIpa && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 font-mono font-bold text-xs">
                    🇬🇧 UK: {activeUkIpa}
                  </span>
                )}
                {activeUsIpa && activeUsIpa !== activeUkIpa && (
                  <span className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-mono font-bold text-xs">
                    🇺🇸 US: {activeUsIpa}
                  </span>
                )}
              </div>
            </div>

            {/* Large Interactive Listen Button */}
            <button
              onClick={() => handlePlayWord()}
              title={`Nghe phát âm chuẩn (${accent === 'UK' ? 'Anh - Anh' : 'Anh - Mỹ'})`}
              className={`p-2.5 rounded-2xl ${themeClasses.btnPrimary} transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-md shrink-0`}
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Vietnamese & English Meanings */}
          <div className="mt-3 space-y-1.5">
            <div className={`p-2.5 rounded-2xl ${themeClasses.badge} border flex items-center gap-2`}>
              <span className="text-base shrink-0">🇻🇳</span>
              <span className="text-xs sm:text-sm font-bold leading-snug">
                {activeMeaningVi}
              </span>
            </div>

            {activeMeaningEn && (
              <p className="text-xs text-slate-600 leading-relaxed font-medium px-1">
                {activeMeaningEn}
              </p>
            )}
          </div>
        </div>

        {/* 3. BILINGUAL EXAMPLE SENTENCE */}
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1 relative group/sentence">
          <div className="flex items-start justify-between gap-2">
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug italic">
              "{activeExampleEn}"
            </div>
            <button
              onClick={handlePlaySentence}
              title="Nghe câu mẫu"
              className="p-1 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors shrink-0 cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>
          {activeExampleVi && (
            <div className="text-xs text-slate-500 font-medium">
              👉 {activeExampleVi}
            </div>
          )}
        </div>

        {/* 4. INTERACTIVE SPEAK & REPEAT ACTIVITY */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
          
          {/* Record Button */}
          <button
            onClick={handleToggleRecord}
            className={`px-3.5 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
              isRecording
                ? 'bg-red-500 text-white animate-pulse ring-2 ring-red-300'
                : hasCompletedSpeaking
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                : `${themeClasses.btnSecondary} border border-slate-200`
            }`}
          >
            {isRecording ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Dừng ghi âm...</span>
              </>
            ) : hasCompletedSpeaking ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đã luyện đọc ⭐</span>
              </>
            ) : (
              <>
                <Mic className="w-3.5 h-3.5 text-rose-500" />
                <span>Luyện phát âm</span>
              </>
            )}
          </button>

          {/* User Audio Playback if recorded */}
          {userAudioUrl && (
            <button
              onClick={handlePlayUserVoice}
              title="Nghe lại giọng của bé"
              className="px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-black text-xs flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Nghe lại</span>
            </button>
          )}

          {/* Reward star indicator */}
          {hasCompletedSpeaking && (
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10.5px] font-black border border-amber-300 flex items-center gap-1">
              <span>⭐</span>
              <span>+2 Sao</span>
            </span>
          )}
        </div>

        {recordError && (
          <div className="text-[11px] text-red-600 font-medium italic">
            {recordError}
          </div>
        )}

      </div>
    </div>
  );
};
