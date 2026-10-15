import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  Mic, 
  Square, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Play, 
  Heart,
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Destination, DestinationProgress } from '../../types';
import { playSpeech, stopSpeech } from '../../lib/speech';
import { VoiceRecorder } from '../../lib/audioRecorder';
import { soundEffects } from '../../lib/soundEffects';
import { RealisticVisualVocabularyCard } from './RealisticVisualVocabularyCard';
import { getVocabularyVisual } from '../../data/vocabularyVisualsRegistry';

interface Grade12LessonModalProps {
  destination: Destination | null;
  isOpen: boolean;
  initialStep?: StepType;
  onClose: () => void;
  onCompleteLesson: (destId: string, score: number, stars: number) => void;
  existingProgress?: DestinationProgress;
}

type StepType = 'learn' | 'play' | 'listen' | 'speak';

export const Grade12LessonModal: React.FC<Grade12LessonModalProps> = ({
  destination,
  isOpen,
  initialStep,
  onClose,
  onCompleteLesson
}) => {
  const [activeStep, setActiveStep] = useState<StepType>(initialStep || 'learn');

  useEffect(() => {
    if (initialStep && isOpen) {
      setActiveStep(initialStep);
    }
  }, [initialStep, isOpen]);
  const [recorder] = useState(() => new VoiceRecorder());
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  // Play Step matching game state
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matchedWords, setMatchedWords] = useState<string[]>([]);

  // Completion state
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    return () => {
      stopSpeech();
      recorder.cancel();
    };
  }, [recorder]);

  if (!isOpen || !destination) return null;

  const content = destination.gradeContent.grade_1_2;

  const handlePlayVoice = (text: string) => {
    soundEffects.playClick();
    playSpeech(text);
  };

  const handleMatchSelect = (word: string) => {
    soundEffects.playClick();
    if (!selectedWord) {
      setSelectedWord(word);
    } else {
      if (selectedWord === word) {
        // match!
        soundEffects.playCorrect();
        setMatchedWords(prev => [...prev, word]);
        setSelectedWord(null);

        if (matchedWords.length + 1 >= (content.game?.pairs.length || 3)) {
          soundEffects.playStarFanfare();
          confetti({ particleCount: 70, spread: 60 });
        }
      } else {
        setSelectedWord(null);
      }
    }
  };

  const handleStartRecord = async () => {
    try {
      await recorder.start();
      setIsRecording(true);
    } catch {
      alert('Please allow microphone access to practice speaking!');
    }
  };

  const handleStopRecord = async () => {
    try {
      const url = await recorder.stop();
      setIsRecording(false);
      setRecordedAudioUrl(url);
      soundEffects.playCorrect();
    } catch {
      setIsRecording(false);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    soundEffects.playStarFanfare();
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    onCompleteLesson(destination.id, 100, 50);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border-4 border-amber-300 overflow-hidden relative">
        
        {/* Playful Top Header */}
        <div className="p-4 sm:p-5 border-b-2 border-amber-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <span className="text-4xl animate-bounce">
              {destination.badge.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-xl font-heading">
                  {destination.name}
                </h3>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950">
                  Grade 1–2
                </span>
              </div>
              <p className="text-xs text-slate-500 font-bold">
                {destination.vietnameseName}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all shadow-xs"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* 4 Big Kid Buttons for Grade 1-2: Learn, Play, Listen, Speak */}
        <div className="grid grid-cols-4 gap-2 p-3 bg-amber-100/60 border-b-2 border-amber-200">
          <button
            onClick={() => setActiveStep('learn')}
            className={`py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex flex-col items-center justify-center gap-1 ${
              activeStep === 'learn'
                ? 'bg-rose-500 text-white shadow-md scale-102 ring-2 ring-rose-300'
                : 'bg-white text-slate-700 hover:bg-rose-50'
            }`}
          >
            <span className="text-xl">🎨</span>
            <span>Learn</span>
          </button>

          <button
            onClick={() => setActiveStep('play')}
            className={`py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex flex-col items-center justify-center gap-1 ${
              activeStep === 'play'
                ? 'bg-emerald-500 text-white shadow-md scale-102 ring-2 ring-emerald-300'
                : 'bg-white text-slate-700 hover:bg-emerald-50'
            }`}
          >
            <span className="text-xl">🎮</span>
            <span>Play</span>
          </button>

          <button
            onClick={() => setActiveStep('listen')}
            className={`py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex flex-col items-center justify-center gap-1 ${
              activeStep === 'listen'
                ? 'bg-sky-500 text-white shadow-md scale-102 ring-2 ring-sky-300'
                : 'bg-white text-slate-700 hover:bg-sky-50'
            }`}
          >
            <span className="text-xl">🔊</span>
            <span>Listen</span>
          </button>

          <button
            onClick={() => setActiveStep('speak')}
            className={`py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex flex-col items-center justify-center gap-1 ${
              activeStep === 'speak'
                ? 'bg-purple-500 text-white shadow-md scale-102 ring-2 ring-purple-300'
                : 'bg-white text-slate-700 hover:bg-purple-50'
            }`}
          >
            <span className="text-xl">🎤</span>
            <span>Speak</span>
          </button>
        </div>

        {/* Content Body for Grade 1-2 */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* STEP 1: LEARN (Flashcards with Big Icons & Speech) */}
          {activeStep === 'learn' && (
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-extrabold text-slate-800 font-heading">
                Tap words to hear pronunciation! 🎧
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {content.vocabulary.map((vocab, i) => {
                  const colors: ('sky' | 'purple' | 'amber' | 'emerald' | 'rose')[] = ['rose', 'sky', 'emerald', 'amber', 'purple'];
                  const theme = colors[i % colors.length];
                  return (
                    <RealisticVisualVocabularyCard
                      key={i}
                      word={vocab.word}
                      phonetic={vocab.phonetic}
                      britishPhonetic={vocab.britishPhonetic}
                      meaningEn={vocab.meaningEn}
                      meaningVi={vocab.meaningVi}
                      exampleSentence={vocab.example}
                      exampleSentenceVi={vocab.exampleVi}
                      imageUrl={vocab.imageUrl}
                      imageAttribution={vocab.imageAttribution}
                      category="landmark"
                      colorTheme={theme}
                      onEarnStars={() => soundEffects.playCorrect()}
                    />
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveStep('play')}
                  className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md shadow-emerald-200 transition-all inline-flex items-center gap-2"
                >
                  <span>Ready to Play!</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PLAY (Match picture with word) */}
          {activeStep === 'play' && (
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-extrabold text-slate-800 font-heading">
                Match Word to Real Photograph! 🎯
              </h4>
              <p className="text-xs text-slate-500">
                Tap a word, then tap its corresponding real photo to make a match!
              </p>

              <div className="grid grid-cols-3 gap-3">
                {content.game?.pairs.map((p, i) => {
                  const isMatched = matchedWords.includes(p.word);
                  const isSelected = selectedWord === p.word;

                  return (
                    <div key={i} className="space-y-2">
                      <button
                        disabled={isMatched}
                        onClick={() => handleMatchSelect(p.word)}
                        className={`w-full py-3 px-2 rounded-2xl font-extrabold text-xs sm:text-sm border-2 transition-all ${
                          isMatched
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-800 opacity-60'
                            : isSelected
                            ? 'bg-indigo-500 border-indigo-600 text-white shadow-md scale-105'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300'
                        }`}
                      >
                        {isMatched ? '✓ ' + p.word : p.word}
                      </button>

                      <button
                        disabled={isMatched}
                        onClick={() => handleMatchSelect(p.word)}
                        className={`w-full h-24 rounded-2xl border-2 overflow-hidden relative transition-all group cursor-pointer ${
                          isMatched
                            ? 'bg-emerald-100 border-emerald-300 opacity-60'
                            : isSelected
                            ? 'border-amber-400 shadow-md scale-105 ring-2 ring-amber-300'
                            : 'border-slate-200 hover:border-amber-300'
                        }`}
                      >
                        <img
                          src={getVocabularyVisual(p.word).imageUrl}
                          alt={p.word}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/25 flex items-end justify-center p-1">
                          <span className="text-[10px] font-black text-white bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-xs">
                            {p.meaningVi}
                          </span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {matchedWords.length >= (content.game?.pairs.length || 3) && (
                <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-900 font-extrabold text-sm animate-pulse">
                  🌟 Super Job! All pairs matched!
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setActiveStep('listen')}
                  className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-sm shadow-md shadow-sky-200 transition-all inline-flex items-center gap-2"
                >
                  <span>Listen to Story</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: LISTEN (Short visual reading & question) */}
          {activeStep === 'listen' && (
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-extrabold text-slate-800 font-heading">
                Listen & Read Along! 📖
              </h4>

              <div className="p-5 rounded-3xl bg-sky-50 border-2 border-sky-200 space-y-3">
                <p className="text-base font-extrabold text-slate-800 font-heading leading-relaxed">
                  "{content.reading.textEn}"
                </p>
                <p className="text-xs text-sky-900 font-semibold bg-white/80 p-2 rounded-xl">
                  🇻🇳 {content.reading.textVi}
                </p>
                <button
                  onClick={() => handlePlayVoice(content.reading.textEn)}
                  className="px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md transition-all inline-flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Read Story Aloud</span>
                </button>
              </div>

              {/* Simple Question */}
              <div className="p-4 rounded-3xl bg-white border-2 border-slate-200 text-left space-y-2">
                <div className="font-extrabold text-sm text-slate-800">
                  ❓ {content.listening.question}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {content.listening.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (i === content.listening.correctIndex) {
                          soundEffects.playCorrect();
                          alert('Correct! Great job!');
                        } else {
                          soundEffects.playClick();
                          alert('Try again!');
                        }
                      }}
                      className="p-3 rounded-2xl border-2 border-slate-200 hover:border-sky-400 bg-slate-50 font-extrabold text-xs text-slate-800 text-left transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveStep('speak')}
                  className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm shadow-md shadow-purple-200 transition-all inline-flex items-center gap-2"
                >
                  <span>Ready to Speak!</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SPEAK (Big Mic Button) */}
          {activeStep === 'speak' && (
            <div className="space-y-5 text-center">
              <h4 className="text-lg font-extrabold text-slate-800 font-heading">
                Speak with Ms. Trang! 🎤
              </h4>

              <div className="p-4 rounded-3xl bg-purple-50 border-2 border-purple-200 space-y-2">
                <span className="text-xs uppercase font-extrabold text-purple-700">
                  Say This Out Loud:
                </span>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">
                  "{content.speaking.sampleSentence}"
                </div>
                <button
                  onClick={() => handlePlayVoice(content.speaking.sampleSentence)}
                  className="px-4 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs inline-flex items-center gap-1 shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen Model</span>
                </button>
              </div>

              {/* Big Microphone */}
              <div className="py-2">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecord}
                    className="w-20 h-20 mx-auto rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-300 transform hover:scale-105 active:scale-95 transition-all"
                  >
                    <Mic className="w-10 h-10 stroke-[2.5]" />
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecord}
                    className="w-20 h-20 mx-auto rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-400 animate-pulse"
                  >
                    <Square className="w-8 h-8 fill-white" />
                  </button>
                )}
                <div className="text-xs font-bold text-slate-500 mt-2">
                  {isRecording ? 'Recording... Tap to stop!' : 'Tap big mic to record your voice!'}
                </div>
              </div>

              {recordedAudioUrl && (
                <div className="p-3 bg-white border border-slate-200 rounded-2xl max-w-xs mx-auto">
                  <span className="text-xs font-bold text-slate-700 block mb-1">Your Recording:</span>
                  <audio controls src={recordedAudioUrl} className="w-full h-8" />
                </div>
              )}

              {/* Finish Button */}
              <div className="pt-2">
                <button
                  onClick={handleFinish}
                  className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base shadow-lg shadow-amber-200 transition-all flex items-center justify-center gap-2"
                >
                  <Star className="w-5 h-5 fill-white" />
                  <span>Finish & Collect 50 Stars! 🌟</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
