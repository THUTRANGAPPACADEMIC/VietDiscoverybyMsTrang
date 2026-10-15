import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Volume2, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  RotateCcw,
  Headphones,
  Award,
  Layers
} from 'lucide-react';
import { PathwayLesson, GradeNumber } from '../../data/gradePathwaysData';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

interface GradeLessonModalProps {
  lesson: PathwayLesson;
  gradeNum: GradeNumber;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson: (lessonId: string, starsWon: number) => void;
}

type LessonTab = 'objectives' | 'vocabulary' | 'sentence' | 'reading' | 'completion';

export const GradeLessonModal: React.FC<GradeLessonModalProps> = ({
  lesson,
  gradeNum,
  isOpen,
  onClose,
  onCompleteLesson
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<LessonTab>('objectives');
  const [activeVocabIdx, setActiveVocabIdx] = useState(0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [starsAwarded, setStarsAwarded] = useState(35);

  const handleSpeak = (text: string, rate: number = 0.88) => {
    soundEffects.playClick();
    setSpeakingWord(text);
    playEnglishSpeech(text, {
      rate,
      onEnd: () => setSpeakingWord(null),
      onError: () => setSpeakingWord(null)
    });
  };

  const handleFinish = () => {
    soundEffects.playStarFanfare();
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 }
    });
    onCompleteLesson(lesson.id, starsAwarded);
    onClose();
  };

  const currentVocab = lesson.vocabulary[activeVocabIdx] || lesson.vocabulary[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl border-3 border-sky-300 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Banner */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">
              📖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-white/25">
                  {lesson.unitTag}
                </span>
                <span className="text-[10px] font-bold text-amber-200">
                  {lesson.cefr}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black font-heading leading-tight mt-0.5">
                {lesson.titleEn}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              soundEffects.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-3 pt-2 gap-1 overflow-x-auto select-none">
          {[
            { id: 'objectives', label: '1. Objectives', icon: '🎯' },
            { id: 'vocabulary', label: '2. Vocabulary', icon: '🔤' },
            { id: 'sentence', label: '3. Sentence', icon: '💬' },
            { id: 'reading', label: '4. Reading', icon: '📖' },
            { id: 'completion', label: '5. Celebrate', icon: '🌟' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveTab(tab.id as LessonTab);
              }}
              className={`px-3 py-2 rounded-t-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shrink-0 border-t border-l border-r ${
                activeTab === tab.id
                  ? 'bg-white border-slate-200 text-sky-700 shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* TAB 1: OBJECTIVES */}
          {activeTab === 'objectives' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                <span className="text-xs font-bold uppercase text-sky-800">Topic:</span>
                <h4 className="text-base font-black text-slate-900">{lesson.topicEn}</h4>
                <p className="text-xs text-slate-600">{lesson.topicVi}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-slate-500">Learning Objectives:</div>
                <div className="grid grid-cols-1 gap-2.5">
                  {lesson.objectivesEn.map((obj, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{obj}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{lesson.objectivesVi[i]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VOCABULARY */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 border-2 border-purple-200 text-center space-y-3">
                <div className="text-5xl">{currentVocab.emoji}</div>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <h4 className="text-2xl sm:text-3xl font-black font-heading text-purple-950">
                      {currentVocab.word}
                    </h4>
                    <button
                      onClick={() => handleSpeak(currentVocab.word)}
                      className="p-2 rounded-full bg-purple-600 text-white hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-xs"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm font-mono text-purple-700 font-bold mt-0.5">
                    {currentVocab.ipa}
                  </div>
                </div>

                <div className="p-3 bg-white/90 rounded-2xl border border-purple-200 max-w-md mx-auto space-y-1">
                  <div className="text-xs text-purple-900 font-bold">
                    {currentVocab.meaningEn}
                  </div>
                  <div className="text-xs text-slate-600">
                    Nghĩa: <span className="font-bold text-purple-700">{currentVocab.meaningVi}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-purple-100/70 rounded-xl text-xs font-semibold text-purple-900 flex items-center justify-center gap-2">
                  <span>Example: "{currentVocab.exampleEn}"</span>
                  <button
                    onClick={() => handleSpeak(currentVocab.exampleEn)}
                    className="p-1 rounded-full bg-white text-purple-700 hover:bg-purple-200 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Vocab Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {lesson.vocabulary.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveVocabIdx(idx);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border ${
                      activeVocabIdx === idx
                        ? 'bg-purple-600 text-white border-purple-700 scale-105 shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    <span>{v.emoji}</span>
                    <span>{v.word}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SENTENCE PATTERN */}
          {activeTab === 'sentence' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <span className="text-xs font-bold uppercase text-amber-800">Grammar Pattern:</span>
                <div className="text-base font-black text-slate-900 font-heading">
                  {lesson.sentencePattern.pattern}
                </div>
                <div className="text-xs text-slate-600">
                  {lesson.sentencePattern.meaningVi}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-slate-500">Communicative Dialogue:</div>
                <div className="space-y-2.5">
                  {lesson.sentencePattern.dialogue.map((d, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                      <span className="px-2.5 py-1 rounded-xl bg-slate-100 font-black text-xs text-slate-700 shrink-0">
                        {d.speaker}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-900">{d.text}</span>
                          <button
                            onClick={() => handleSpeak(d.text)}
                            className="p-1 rounded-full bg-slate-100 hover:bg-sky-100 text-sky-700 transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{d.textVi}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: READING PASSAGE */}
          {activeTab === 'reading' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                <h4 className="text-base font-black text-emerald-950 font-heading">
                  {lesson.readingPassage.titleEn}
                </h4>
                <p className="text-xs text-emerald-800">
                  {lesson.readingPassage.titleVi}
                </p>
              </div>

              <div className="space-y-3">
                {lesson.readingPassage.sentencesEn.map((sentence, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:border-emerald-300 transition-colors">
                    <button
                      onClick={() => handleSpeak(sentence)}
                      className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer shrink-0 mt-0.5"
                      title="Listen sentence"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {sentence}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {lesson.readingPassage.sentencesVi[idx]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CELEBRATION */}
          {activeTab === 'completion' && (
            <div className="p-6 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-4xl shadow-inner">
                🎉
              </div>
              <div>
                <h4 className="text-2xl font-black font-heading text-slate-900">
                  Lesson Completed with Flying Colors!
                </h4>
                <p className="text-sm text-slate-600 font-medium mt-1">
                  Chúc mừng con đã hoàn thành toàn bộ bài học {lesson.titleEn}!
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 font-black text-lg shadow-sm">
                <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
                <span>+{starsAwarded} Stars Awarded!</span>
              </div>

              <div>
                <button
                  onClick={handleFinish}
                  className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-base shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Award className="w-5 h-5" />
                  <span>Save Progress & Return</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              soundEffects.playClick();
              if (activeTab === 'vocabulary') setActiveTab('objectives');
              else if (activeTab === 'sentence') setActiveTab('vocabulary');
              else if (activeTab === 'reading') setActiveTab('sentence');
              else if (activeTab === 'completion') setActiveTab('reading');
            }}
            disabled={activeTab === 'objectives'}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {activeTab !== 'completion' ? (
            <button
              onClick={() => {
                soundEffects.playClick();
                if (activeTab === 'objectives') setActiveTab('vocabulary');
                else if (activeTab === 'vocabulary') setActiveTab('sentence');
                else if (activeTab === 'sentence') setActiveTab('reading');
                else if (activeTab === 'reading') setActiveTab('completion');
              }}
              className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Next Section</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Finish & Claim Stars</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
