import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Square, 
  Volume2, 
  Play, 
  RotateCcw, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Award,
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../lib/soundEffects';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { VoiceRecorder } from '../../lib/audioRecorder';

export interface ImmersiveSpeakingQuestProps {
  destinationName: string;
  promptEn: string;
  promptVi: string;
  sampleSentence: string;
  tips: string;
  avatarUrl?: string;
  avatarName?: string;
  onEarnStars?: (stars: number) => void;
  onContinue?: () => void;
}

export const ImmersiveSpeakingQuest: React.FC<ImmersiveSpeakingQuestProps> = ({
  destinationName,
  promptEn,
  promptVi,
  sampleSentence,
  tips,
  avatarUrl = '/assets/cute/captain_trang_clean.png',
  avatarName = 'Captain Trang',
  onEarnStars,
  onContinue
}) => {
  const [recorder] = useState(() => new VoiceRecorder());
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [isPlayingStudentVoice, setIsPlayingStudentVoice] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [starsAwarded, setStarsAwarded] = useState(false);

  // Recording timer
  useEffect(() => {
    let interval: any = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds(sec => sec + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
      recorder.cancel();
    };
  }, [recorder]);

  const handlePlayModel = () => {
    if (isPlayingModel) {
      stopSpeech();
      setIsPlayingModel(false);
      return;
    }

    soundEffects.playClick();
    setIsPlayingModel(true);

    playEnglishSpeech(sampleSentence, {
      pitch: 1.05,
      lang: 'en-GB',
      onStart: () => setIsPlayingModel(true),
      onEnd: () => setIsPlayingModel(false),
      onError: () => setIsPlayingModel(false)
    });
  };

  const handleStartRecording = async () => {
    setRecordError(null);
    stopSpeech();

    try {
      soundEffects.playClick();
      await recorder.start();
      setIsRecording(true);
      setRecordedAudioUrl(null);
    } catch (err: any) {
      setRecordError(err.message || 'Microphone access is not supported or was denied.');
    }
  };

  const handleStopRecording = async () => {
    soundEffects.playClick();
    try {
      const url = await recorder.stop();
      setIsRecording(false);
      setRecordedAudioUrl(url);
      setHasCompleted(true);
      soundEffects.playCorrect();
    } catch (err: any) {
      setRecordError(err.message || 'Recording failed. Please try again.');
      setIsRecording(false);
    }
  };

  const handlePlayStudentRecord = () => {
    if (!recordedAudioUrl) return;

    soundEffects.playClick();
    setIsPlayingStudentVoice(true);

    const audio = new Audio(recordedAudioUrl);
    audio.onended = () => setIsPlayingStudentVoice(false);
    audio.onerror = () => setIsPlayingStudentVoice(false);
    audio.play();
  };

  const handleClaimReward = () => {
    if (starsAwarded) return;
    setStarsAwarded(true);
    soundEffects.playStarFanfare();

    if (onEarnStars) {
      onEarnStars(25);
    }

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-6">
      
      {/* 1. HERO SPEAKING BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-600 to-sky-500 p-5 sm:p-6 text-white shadow-xl shadow-purple-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Speaking Quest</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Star className="w-3 h-3 fill-amber-950" />
                <span>+25 Stars Reward</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight drop-shadow-xs">
              Speaking Practice: {destinationName}
            </h3>

            <p className="text-xs text-purple-100 font-medium">
              {promptEn} <span className="italic opacity-80">(🇻🇳 {promptVi})</span>
            </p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center shrink-0">
            <div className="text-[10px] uppercase font-bold text-purple-200">Speaking Mission</div>
            <div className="text-xs font-black text-white">Voice & Intonation</div>
          </div>
        </div>
      </div>

      {/* 2. DUAL COLUMN ARENA: MODEL SENTENCE + VOICE STUDIO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT COLUMN (5 cols): Companion Avatar + Model Speech Bubble */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-gradient-to-br from-indigo-50/90 via-purple-50/60 to-white rounded-3xl p-5 border-2 border-indigo-100 shadow-sm">
          
          <div className="space-y-3">
            {/* Companion Intro */}
            <div className="flex items-center gap-3">
              <img
                src={avatarUrl}
                alt={avatarName}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/cute/captain_trang_clean.png';
                }}
                className="w-14 h-14 rounded-2xl object-cover bg-white p-0.5 shadow-md border-2 border-white ring-2 ring-indigo-200 shrink-0"
              />
              <div>
                <div className="text-xs font-black text-indigo-950 font-heading">
                  {avatarName}
                </div>
                <div className="text-[10px] text-indigo-700 font-semibold">
                  Tour Guide Pronunciation Coach
                </div>
              </div>
            </div>

            {/* Large Model Sentence Bubble */}
            <div className="relative p-5 rounded-2xl bg-white border-2 border-indigo-200 shadow-sm space-y-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600">
                Model English Sentence:
              </span>
              
              <div className="text-base sm:text-lg font-black text-slate-900 font-heading leading-relaxed">
                "{sampleSentence}"
              </div>

              {/* Listen to Model Button */}
              <button
                type="button"
                onClick={handlePlayModel}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer ${
                  isPlayingModel
                    ? 'bg-rose-500 text-white shadow-rose-200'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                }`}
              >
                {isPlayingModel ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-white" />
                    <span>Stop Model Voice</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen to Model Pronunciation (Cô Trang) 🎙️</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Teacher's Tip Box */}
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <span>💡 Teacher's Secret Tip:</span>
            </div>
            <p className="font-medium text-slate-700 leading-snug">
              {tips}
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN (7 cols): The Recording Studio */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm flex flex-col justify-between space-y-5">
          
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 font-heading">
                Step 4: Your Turn to Speak!
              </span>
              <h4 className="text-lg font-black text-slate-900 font-heading">
                Record Your Own Voice
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Hold your head up high, smile, and speak clearly into your microphone!
              </p>
            </div>

            {/* Error Message if any */}
            {recordError && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{recordError}</span>
              </div>
            )}

            {/* Big Interactive Recording Disc */}
            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b from-purple-50/50 via-slate-50 to-indigo-50/30 border-2 border-slate-200/80 space-y-4">
              
              {!isRecording ? (
                <button
                  type="button"
                  onClick={handleStartRecording}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white flex items-center justify-center shadow-xl shadow-rose-200 transition-all transform hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <Mic className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStopRecording}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xl shadow-slate-400 transition-all transform hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-rose-400 ring-offset-4 animate-pulse"
                >
                  <Square className="w-8 h-8 fill-rose-500 text-rose-500" />
                </button>
              )}

              {/* Status Indicator */}
              <div className="text-center">
                {isRecording ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2 text-rose-600 font-black text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                      <span>Recording Live... 00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Click square button when you finish speaking!</p>
                  </div>
                ) : recordedAudioUrl ? (
                  <div className="space-y-1">
                    <div className="text-emerald-600 font-black text-sm flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Voice Recorded Successfully!</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Listen to your recording or try again.</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="font-extrabold text-slate-700 text-xs">
                      Tap the pink microphone to start recording
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Speak the model sentence clearly at your normal pace.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Student Audio Playback Bar */}
            {recordedAudioUrl && (
              <div className="p-4 rounded-2xl bg-indigo-50/80 border-2 border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePlayStudentRecord}
                    className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs cursor-pointer"
                  >
                    {isPlayingStudentVoice ? (
                      <Square className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white" />
                    )}
                  </button>
                  <div>
                    <div className="text-xs font-black text-indigo-950">
                      {isPlayingStudentVoice ? 'Playing back your voice...' : 'Listen to Your Recording'}
                    </div>
                    <div className="text-[10px] text-indigo-700 font-medium">
                      Student Practice Voice Clip
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1 shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-record</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClaimReward}
                    disabled={starsAwarded}
                    className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs transition-all ${
                      starsAwarded
                        ? 'bg-emerald-600 text-white cursor-default'
                        : 'bg-amber-400 hover:bg-amber-300 text-amber-950 cursor-pointer transform hover:scale-102'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{starsAwarded ? '⭐ +25 Stars Claimed!' : 'Claim +25 Stars!'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Friendly Pedagogical Feedback (NO FAKE AI SCORES) */}
            {hasCompleted && (
              <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-emerald-950 flex items-start gap-2.5 animate-in fade-in duration-200">
                <Smile className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-black text-emerald-900">
                    🌟 Excellent Effort, Young Explorer!
                  </div>
                  <div className="text-slate-600 font-medium">
                    Your speaking practice was recorded. Speaking English aloud builds natural confidence and fluency!
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Actions */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400">
              CEFR Primary Speaking Fluency Standard
            </span>

            {onContinue && (
              <button
                type="button"
                onClick={onContinue}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-102"
              >
                <span>Continue to Bloom Quiz</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
