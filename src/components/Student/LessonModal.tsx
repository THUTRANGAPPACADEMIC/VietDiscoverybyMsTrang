import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  BookOpen, 
  Headphones, 
  Mic, 
  Square, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  Languages, 
  Award, 
  Sparkles, 
  AlertCircle,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Destination, DestinationProgress, QuizQuestion, GradeBand, ChallengeBreakdown, getChallengeLevel } from '../../types';
import { playSpeech, stopSpeech } from '../../lib/speech';
import { VoiceRecorder } from '../../lib/audioRecorder';
import { soundEffects } from '../../lib/soundEffects';
import { RealisticVisualVocabularyCard } from './RealisticVisualVocabularyCard';

interface LessonModalProps {
  destination: Destination | null;
  gradeBand?: GradeBand;
  isOpen: boolean;
  initialTab?: LessonTab;
  onClose: () => void;
  onCompleteLesson: (destId: string, score: number, stars: number, breakdown?: ChallengeBreakdown) => void;
  existingProgress?: DestinationProgress;
}

type LessonTab = 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'quiz';

export const LessonModal: React.FC<LessonModalProps> = ({
  destination,
  gradeBand = 'grade_3',
  isOpen,
  initialTab,
  onClose,
  onCompleteLesson,
  existingProgress
}) => {
  const [activeTab, setActiveTab] = useState<LessonTab>(initialTab || 'vocabulary');

  useEffect(() => {
    if (initialTab && isOpen) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  const [showVietnameseTranslation, setShowVietnameseTranslation] = useState(false);
  const [isReadingAudioPlaying, setIsReadingAudioPlaying] = useState(false);

  // Listening step state
  const [selectedListeningOption, setSelectedListeningOption] = useState<number | null>(null);
  const [hasCheckedListening, setHasCheckedListening] = useState(false);

  // Speaking step state
  const [recorder] = useState(() => new VoiceRecorder());
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordError, setRecordError] = useState<string | null>(null);

  // Quiz step state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);

  // Cleanup on unmount or close
  useEffect(() => {
    return () => {
      stopSpeech();
      recorder.cancel();
    };
  }, [recorder]);

  if (!isOpen || !destination) return null;

  const bandKey: GradeBand = gradeBand === 'grade_1_2' ? 'grade_3' : gradeBand; // grade_1_2 uses Grade12LessonModal
  const content = destination.gradeContent[bandKey] || destination.gradeContent.grade_3;

  // Step 1: Vocabulary Audio
  const handlePlayVocab = (word: string) => {
    soundEffects.playClick();
    playSpeech(word);
  };

  // Step 2: Reading Audio
  const handleToggleReadingAudio = () => {
    if (isReadingAudioPlaying) {
      stopSpeech();
      setIsReadingAudioPlaying(false);
    } else {
      setIsReadingAudioPlaying(true);
      playSpeech(content.reading.textEn, () => {
        setIsReadingAudioPlaying(false);
      });
    }
  };

  // Step 3: Listening Sample Audio
  const handlePlayListeningSample = () => {
    soundEffects.playClick();
    playSpeech(content.listening.audioScriptEn);
  };

  // Step 4: Speaking Recorder
  const handleStartRecording = async () => {
    setRecordError(null);
    try {
      await recorder.start();
      setIsRecording(true);
    } catch (err: any) {
      setRecordError(err.message);
    }
  };

  const handleStopRecording = async () => {
    try {
      const url = await recorder.stop();
      setIsRecording(false);
      setRecordedAudioUrl(url);
      soundEffects.playCorrect();
    } catch (err: any) {
      setRecordError(err.message);
      setIsRecording(false);
    }
  };

  // Step 5: Quiz Answer Handler
  const handleSelectQuizOption = (optIndex: number) => {
    if (quizSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optIndex
    }));
    soundEffects.playClick();
  };

  const handleNextQuizQuestion = () => {
    if (currentQuestionIndex < content.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuizQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    content.quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / content.quiz.length) * 100);
    setScorePercentage(percent);
    setQuizSubmitted(true);

    if (percent >= 60) {
      soundEffects.playStarFanfare();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    onCompleteLesson(destination.id, percent, 50);
  };

  const currentQ: QuizQuestion = content.quiz[currentQuestionIndex] || content.quiz[0];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-50 via-white to-amber-50">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 rounded-2xl bg-white shadow-xs">
              {destination.badge.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
                  {destination.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  {destination.region}
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  {gradeBand === 'grade_4_5' ? 'Grade 4–5' : 'Grade 3'}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {destination.vietnameseName} • {destination.province}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5-Step Lesson Tabs */}
        <div className="flex items-center justify-around border-b border-slate-100 bg-slate-50/80 px-2 py-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'vocabulary'
                ? 'bg-white text-rose-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Vocabulary ({content.vocabulary.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reading')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'reading'
                ? 'bg-white text-rose-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2. Short Reading</span>
          </button>

          <button
            onClick={() => setActiveTab('listening')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'listening'
                ? 'bg-white text-rose-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>3. Audio Listening</span>
          </button>

          <button
            onClick={() => setActiveTab('speaking')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'speaking'
                ? 'bg-white text-rose-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>4. Speaking Practice</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>5. Bloom Quiz ({content.quiz.length})</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: VOCABULARY */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base font-heading">
                    Explore New English Words
                  </h4>
                  <p className="text-xs text-slate-500">
                    Click the speaker button to hear authentic pronunciation!
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  {gradeBand === 'grade_4_5' ? 'Grade 4–5 Academic Tier' : 'Grade 3 Elementary Tier'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {content.vocabulary.map((item, idx) => {
                  const colors: ('sky' | 'purple' | 'amber' | 'emerald' | 'rose')[] = ['sky', 'purple', 'amber', 'emerald', 'rose'];
                  const theme = colors[idx % colors.length];
                  return (
                    <RealisticVisualVocabularyCard
                      key={idx}
                      word={item.word}
                      phonetic={item.phonetic}
                      britishPhonetic={item.britishPhonetic}
                      meaningEn={item.meaningEn}
                      meaningVi={item.meaningVi}
                      exampleSentence={item.example}
                      exampleSentenceVi={item.exampleVi}
                      imageUrl={item.imageUrl}
                      imageAttribution={item.imageAttribution}
                      category={destination.theme === 'Culture' ? 'culture' : destination.theme === 'Nature' ? 'nature' : 'landmark'}
                      colorTheme={theme}
                      onEarnStars={() => soundEffects.playCorrect()}
                    />
                  );
                })}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('reading')}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>Continue to Reading</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: READING */}
          {activeTab === 'reading' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-heading">
                    {content.reading.titleEn}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Read along and discover exciting stories about Vietnam
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleReadingAudio}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      isReadingAudioPlaying
                        ? 'bg-rose-500 text-white border-rose-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isReadingAudioPlaying ? 'Stop Audio' : 'Listen Story'}</span>
                  </button>

                  <button
                    onClick={() => setShowVietnameseTranslation(!showVietnameseTranslation)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      showVietnameseTranslation
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Languages className="w-4 h-4" />
                    <span>{showVietnameseTranslation ? 'Hide Vietnamese' : 'Xem Bản Dịch'}</span>
                  </button>
                </div>
              </div>

              {/* Story Text Box */}
              <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100 text-slate-800 text-sm leading-relaxed space-y-3 font-sans">
                <p>{content.reading.textEn}</p>
              </div>

              {/* Vietnamese Translation Accordion */}
              {showVietnameseTranslation && (
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2 animate-in fade-in duration-200">
                  <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <span>🇻🇳 Bản dịch tiếng Việt hỗ trợ học tập:</span>
                  </div>
                  <p>{content.reading.textVi}</p>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setActiveTab('vocabulary')}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vocabulary</span>
                </button>
                <button
                  onClick={() => setActiveTab('listening')}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>Continue to Listening</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: LISTENING */}
          {activeTab === 'listening' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Listening Comprehension Challenge
                </h4>
                <p className="text-xs text-slate-500">
                  Listen to the audio clip and select the correct answer below
                </p>
              </div>

              {/* Audio Player Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-200">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm">Tour Guide Audio Announcement</h5>
                    <p className="text-xs text-slate-500">English listening test track</p>
                  </div>
                </div>

                <button
                  onClick={handlePlayListeningSample}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Play Listening Audio</span>
                </button>
              </div>

              {/* Listening Question */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="font-bold text-sm text-slate-800">
                  ❓ {content.listening.question}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {content.listening.options.map((opt, idx) => {
                    const isSelected = selectedListeningOption === idx;
                    const isCorrect = idx === content.listening.correctIndex;

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedListeningOption(idx);
                          setHasCheckedListening(true);
                          if (isCorrect) soundEffects.playCorrect();
                        }}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                          hasCheckedListening && isSelected
                            ? isCorrect
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-800 ring-2 ring-emerald-300'
                              : 'bg-rose-50 border-rose-300 text-rose-800'
                            : isSelected
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {hasCheckedListening && (
                  <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    selectedListeningOption === content.listening.correctIndex
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-rose-50 text-rose-800'
                  }`}>
                    {selectedListeningOption === content.listening.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Excellent ear! You got the right answer.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        <span>Listen again carefully to find the answer.</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setActiveTab('reading')}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Reading</span>
                </button>
                <button
                  onClick={() => setActiveTab('speaking')}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>Continue to Speaking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: SPEAKING */}
          {activeTab === 'speaking' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Speaking & Pronunciation Practice
                </h4>
                <p className="text-xs text-slate-500">
                  {content.speaking.promptEn} (🇻🇳 {content.speaking.promptVi})
                </p>
              </div>

              {/* Model Sentence Box */}
              <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                    Model Sentence (Mẫu phát âm của cô Trang)
                  </span>
                  <button
                    onClick={() => playSpeech(content.speaking.sampleSentence)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen Model</span>
                  </button>
                </div>

                <div className="text-base sm:text-lg font-extrabold text-slate-800 font-heading">
                  "{content.speaking.sampleSentence}"
                </div>

                <p className="text-xs text-indigo-900 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
                  💡 <strong>Teacher's Tip:</strong> {content.speaking.tips}
                </p>
              </div>

              {/* Student Voice Recorder */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-4">
                <div className="max-w-md mx-auto">
                  <h5 className="font-bold text-slate-800 text-sm">Your Turn to Record</h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click the microphone below to begin recording. Speak clearly into your device!
                  </p>
                </div>

                {recordError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{recordError}</span>
                  </div>
                )}

                <div className="flex items-center justify-center gap-4">
                  {!isRecording ? (
                    <button
                      onClick={handleStartRecording}
                      className="w-16 h-16 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-200 transition-all transform hover:scale-105 active:scale-95"
                      title="Start Recording"
                    >
                      <Mic className="w-7 h-7" />
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-300 animate-pulse"
                      title="Stop Recording"
                    >
                      <Square className="w-6 h-6 fill-white" />
                    </button>
                  )}
                </div>

                <div className="text-xs font-bold text-slate-600">
                  {isRecording ? (
                    <span className="text-rose-600 animate-pulse">● Recording in progress... Press stop when done.</span>
                  ) : (
                    <span>Ready to record</span>
                  )}
                </div>

                {/* Recorded Audio Playback */}
                {recordedAudioUrl && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">Listen back to your recording:</span>
                    <audio controls src={recordedAudioUrl} className="w-full h-8" />
                  </div>
                )}

                {/* Clear Status Notice on AI Evaluation */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-[11px] text-slate-500 leading-relaxed">
                  <strong>ℹ️ Real-time Speech Engine Status:</strong> Audio recording & playback is active. Full phoneme AI scoring is enabled when connecting your AI speech assessment service in the environment configuration.
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setActiveTab('listening')}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Listening</span>
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <span>Start Bloom Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: BLOOM QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-5">
              {!quizSubmitted ? (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                          Bloom Level: {currentQ.bloomLevel}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          Question {currentQuestionIndex + 1} of {content.quiz.length}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-base font-heading mt-1">
                        {currentQ.questionEn}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        🇻🇳 {currentQ.questionVi}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>+10 Stars/Q</span>
                      </span>
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt, idx) => {
                      const isSelected = selectedAnswer === idx;

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectQuizOption(idx)}
                          className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-200'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{opt}</span>
                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                            isSelected ? 'bg-rose-500 text-white border-rose-500' : 'border-slate-300'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Question Nav & Submit */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={handlePrevQuizQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs disabled:opacity-40"
                    >
                      Previous
                    </button>

                    <div className="flex items-center gap-1.5">
                      {content.quiz.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            userAnswers[i] !== undefined
                              ? 'bg-rose-500'
                              : i === currentQuestionIndex
                              ? 'bg-slate-400'
                              : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    {currentQuestionIndex < content.quiz.length - 1 ? (
                      <button
                        onClick={handleNextQuizQuestion}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(userAnswers).length < content.quiz.length}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-all disabled:opacity-50"
                      >
                        Submit Answers
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Quiz Results Summary */
                <div className="text-center py-6 space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-md shadow-amber-200 text-3xl">
                    {scorePercentage >= 60 ? '🏆' : '📚'}
                  </div>

                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 font-heading">
                      {scorePercentage >= 60 ? 'Splendid Discovery!' : 'Good Effort! Keep Practicing'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      You completed the {destination.name} Bloom Quiz with a score of:
                    </p>
                    <div className="text-4xl font-extrabold text-rose-600 font-heading mt-2">
                      {scorePercentage}%
                    </div>
                  </div>

                  {/* Stamp Badge Award */}
                  {scorePercentage >= 60 && (
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 max-w-sm mx-auto flex items-center gap-3 text-left">
                      <span className="text-3xl">{destination.badge.icon}</span>
                      <div>
                        <div className="text-xs font-bold text-amber-900">Passport Badge Earned!</div>
                        <div className="text-xs font-semibold text-amber-700">{destination.badge.titleEn}</div>
                        <div className="text-[10px] text-amber-600">{destination.badge.titleVi}</div>
                      </div>
                    </div>
                  )}

                  {/* Review of all questions with explanations */}
                  <div className="text-left space-y-3 pt-4 border-t border-slate-100">
                    <h5 className="font-bold text-slate-800 text-sm">Review Questions & Explanations:</h5>
                    {content.quiz.map((q, idx) => {
                      const userAns = userAnswers[idx];
                      const isCorrect = userAns === q.correctIndex;

                      return (
                        <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                          <div className="flex items-center justify-between font-bold text-slate-800">
                            <span>Q{idx + 1}: {q.questionEn}</span>
                            <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                          </div>
                          <div className="text-slate-600">
                            Correct: <strong className="text-emerald-700">{q.options[q.correctIndex]}</strong>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-slate-100 text-[11px] text-slate-600">
                            💡 <strong>Explanation:</strong> {q.explanationEn}
                            <div className="text-slate-500 mt-0.5">🇻🇳 {q.explanationVi}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setUserAnswers({});
                        setCurrentQuestionIndex(0);
                      }}
                      className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold"
                    >
                      Retry Quiz
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-200"
                    >
                      Done & Return to Map
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
