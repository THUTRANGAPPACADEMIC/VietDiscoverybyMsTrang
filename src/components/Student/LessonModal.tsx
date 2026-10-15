import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Headphones, 
  Mic, 
  Award, 
  Sparkles, 
  ArrowRight,
  Star,
  MapPin,
  Volume2
} from 'lucide-react';
import { Destination, DestinationProgress, GradeBand, ChallengeBreakdown } from '../../types';
import { stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';
import { RealisticVisualVocabularyCard } from './RealisticVisualVocabularyCard';
import { ImmersiveListeningQuest } from './ImmersiveListeningQuest';
import { ImmersiveReadingAdventure } from './ImmersiveReadingAdventure';
import { ImmersiveSpeakingQuest } from './ImmersiveSpeakingQuest';
import { BloomQuizGameShow } from './BloomQuizGameShow';

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

  // Cleanup audio on close or unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  if (!isOpen || !destination) return null;

  const bandKey: GradeBand = gradeBand === 'grade_1_2' ? 'grade_3' : gradeBand; // grade_1_2 uses Grade12LessonModal
  const content = destination.gradeContent[bandKey] || destination.gradeContent.grade_3;

  // Authentic landmark photography selection
  const landmarkPhoto = destination.id === 'danang_hoian'
    ? '/destinations/danang_dragon_bridge.jpg'
    : (destination.image || '/destinations/danang_golden_bridge.jpg');

  const landmarkTitle = destination.id === 'danang_hoian'
    ? 'Dragon Bridge & Han River (Cầu Rồng Đà Nẵng)'
    : destination.name;

  const handleEarnStars = (stars: number) => {
    onCompleteLesson(destination.id, 100, stars);
  };

  const handleQuizComplete = (scorePercent: number, starsEarned: number) => {
    onCompleteLesson(destination.id, scorePercent, starsEarned);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-50 rounded-[32px] max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl border-3 border-white/80 overflow-hidden relative">
        
        {/* TOP COMPACT HEADER BAR */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between bg-white shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 rounded-2xl bg-gradient-to-tr from-amber-100 to-rose-100 shadow-2xs border border-amber-200/60">
              {destination.badge.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-black text-slate-900 text-base sm:text-lg font-heading">
                  {destination.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 uppercase">
                  {destination.region}
                </span>
                <span className="text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  {gradeBand === 'grade_4_5' ? 'Grade 4–5' : 'Grade 3'}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{destination.vietnameseName} • {destination.province}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-2.5 text-slate-400 hover:text-slate-700 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer"
            title="Close Lesson"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5-STEP IMMERSIVE TAB BAR WITH COLORFUL PILLS */}
        <div className="flex items-center justify-start sm:justify-around border-b border-slate-200 bg-white/95 px-3 py-2.5 overflow-x-auto text-xs font-black gap-1.5 scrollbar-none">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('vocabulary');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'vocabulary'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-200 scale-102'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Vocabulary ({content.vocabulary.length})</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('reading');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'reading'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200 scale-102'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2. Reading Quest</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('listening');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'listening'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-102'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>3. Listening Quest 🎧</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('speaking');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'speaking'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200 scale-102'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>4. Speaking Quest</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('quiz');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-200 scale-102'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>5. Bloom Quiz ({content.quiz.length})</span>
          </button>
        </div>

        {/* LESSON TAB CONTENT ARENA */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: PICTURE-FIRST REALISTIC VISUAL VOCABULARY */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-6">
              
              {/* Pastel Vocabulary Mission Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 p-5 text-white shadow-lg shadow-sky-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider">
                      Realistic Visual Vocabulary Standards
                    </span>
                    <h3 className="text-xl font-black font-heading">
                      Master Key English Vocabulary: {destination.name}
                    </h3>
                    <p className="text-xs text-sky-100 font-medium">
                      Tap the speaker for authentic British English (en-GB) pronunciation, and practice speaking each word to earn bonus stars!
                    </p>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-2xl bg-amber-400 text-amber-950 font-black text-xs shrink-0 shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>+2 ⭐ Per Word Spoken</span>
                  </span>
                </div>
              </div>

              {/* 2-Column Responsive Card Grid */}
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
                      onEarnStars={() => handleEarnStars(2)}
                    />
                  );
                })}
              </div>

              {/* Next Step Action */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveTab('reading');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-102"
                >
                  <span>Continue to Reading Quest</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: IMMERSIVE READING ADVENTURE */}
          {activeTab === 'reading' && (
            <ImmersiveReadingAdventure
              destinationName={destination.name}
              destinationProvince={destination.province}
              landmarkImage={landmarkPhoto}
              landmarkName={landmarkTitle}
              photoAttribution={destination.photoAttribution}
              titleEn={content.reading.titleEn}
              textEn={content.reading.textEn}
              textVi={content.reading.textVi}
              vocabularyHighlights={content.vocabulary.map(v => ({ word: v.word, meaningVi: v.meaningVi }))}
              onContinue={() => {
                soundEffects.playClick();
                setActiveTab('listening');
              }}
            />
          )}

          {/* TAB 3: IMMERSIVE LISTENING QUEST (DRAGON BRIDGE BENCHMARK) */}
          {activeTab === 'listening' && (
            <ImmersiveListeningQuest
              destinationName={destination.name}
              destinationProvince={destination.province}
              landmarkName={landmarkTitle}
              landmarkImage={landmarkPhoto}
              photoAttribution={destination.photoAttribution}
              audioScriptEn={content.listening.audioScriptEn}
              audioTitleEn={`${destination.name} Audio Announcement`}
              speakerRole="Captain Trang"
              questionEn={content.listening.question}
              options={content.listening.options}
              correctIndex={content.listening.correctIndex}
              explanationEn={`Verified clue: ${content.reading.titleEn}`}
              explanationVi={destination.summaryVi}
              gradeBadge={gradeBand === 'grade_4_5' ? 'Grade 4–5 Explorer Mission' : 'Grade 3 Explorer Mission'}
              onEarnStars={(stars) => handleEarnStars(stars)}
              onContinue={() => {
                soundEffects.playClick();
                setActiveTab('speaking');
              }}
            />
          )}

          {/* TAB 4: IMMERSIVE SPEAKING QUEST */}
          {activeTab === 'speaking' && (
            <ImmersiveSpeakingQuest
              destinationName={destination.name}
              promptEn={content.speaking.promptEn}
              promptVi={content.speaking.promptVi}
              sampleSentence={content.speaking.sampleSentence}
              tips={content.speaking.tips}
              onEarnStars={(stars) => handleEarnStars(stars)}
              onContinue={() => {
                soundEffects.playClick();
                setActiveTab('quiz');
              }}
            />
          )}

          {/* TAB 5: BLOOM QUIZ GAME SHOW */}
          {activeTab === 'quiz' && (
            <BloomQuizGameShow
              questions={content.quiz}
              destinationName={destination.name}
              destinationProvince={destination.province}
              destinationImage={landmarkPhoto}
              onCompleteQuiz={handleQuizComplete}
            />
          )}

        </div>

      </div>
    </div>
  );
};
