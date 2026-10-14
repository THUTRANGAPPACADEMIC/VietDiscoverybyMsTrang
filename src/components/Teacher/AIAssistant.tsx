import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Send, 
  Sliders, 
  Layers, 
  Edit3, 
  Bot, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { BloomLevel, Destination } from '../../types';

interface AIAssistantProps {
  destinations: Destination[];
  onPublishApprovedPlan: (plan: any) => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ destinations, onPublishApprovedPlan }) => {
  const [topic, setTopic] = useState('Sa Pa Terraced Rice Fields & Ethnic Villages');
  const [gradeLevel, setGradeLevel] = useState<'Grade 3' | 'Grade 4' | 'Grade 5'>('Grade 3');
  const [skillFocus, setSkillFocus] = useState('Vocabulary & Speaking');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState<any | null>(null);
  const [isApproved, setIsApproved] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsApproved(false);

    setTimeout(() => {
      setGeneratedDraft({
        id: 'plan-' + Date.now(),
        topic,
        gradeLevel,
        skillFocus,
        objectives: [
          `Identify 5 elementary English words describing natural geography and terraces (${gradeLevel}).`,
          'Speak a simple descriptive sentence introducing Vietnamese agricultural traditions.',
          'Understand how rain and mountain topography create green terraced fields.'
        ],
        suggestedActivities: [
          'Warm-Up (5 mins): Show pictures of golden rice fields and ask students to name colors in English.',
          'Vocabulary Chorus (10 mins): Practice words "Terrace", "Mountain", "Harvest", "Clouds", "Village".',
          'Role-Play (15 mins): Student acts as a local tour guide welcoming visitors to Sa Pa.',
          'Exit Quiz (10 mins): 4-question Bloom assessment with star rewards.'
        ],
        customVocabulary: [
          { word: 'Terrace', meaning: 'A flat area cut into the mountain slope for growing rice' },
          { word: 'Harvest', meaning: 'The joyful time when farmers gather ripe golden grains' },
          { word: 'Mist', meaning: 'A light white cloud floating close to the ground' },
          { word: 'Handicraft', meaning: 'Beautiful clothes and items made by hand with colorful embroidery' }
        ],
        bloomQuestions: [
          {
            level: 'Remember',
            question: 'What crop is grown on the terraced fields of Sa Pa?',
            options: ['Golden Rice', 'Apples', 'Seaweed', 'Cactus'],
            correct: 'Golden Rice'
          },
          {
            level: 'Understand',
            question: 'Why do farmers shape the mountain into stair-like terraces?',
            options: ['To hold water on the steep slope', 'To build car parking lots', 'To catch wild tigers', 'To fly airplanes'],
            correct: 'To hold water on the steep slope'
          },
          {
            level: 'Apply',
            question: 'When visiting an ethnic minority market in Sa Pa, what is polite to say when greeting a local weaver?',
            options: ['"Hello! Your colorful embroidery is wonderful!"', '"Go away!"', '"I do not like clothes"', '"Where is the train?"'],
            correct: '"Hello! Your colorful embroidery is wonderful!"'
          },
          {
            level: 'Analyze',
            question: 'How does eco-tourism in Sa Pa protect nature while helping local families earn a living?',
            options: [
              'By cutting all trees',
              'By sharing culture respectfully and preserving the natural green landscape for visitors',
              'By closing all walking paths forever',
              'By building concrete factories'
            ],
            correct: 'By sharing culture respectfully and preserving the natural green landscape for visitors'
          }
        ]
      });
      setIsGenerating(false);
    }, 800);
  };

  const handleApprove = () => {
    setIsApproved(true);
    onPublishApprovedPlan(generatedDraft);
    alert('Lesson plan approved by Ms. Trang! It is now stored in your teaching materials.');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-indigo-50 p-6 rounded-3xl border border-purple-200/60 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-200">
            <Sparkles className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                AI Teaching Assistant & Curriculum Co-Pilot
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                Teacher-Reviewed
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Draft engaging lesson plans, suggest classroom activities, adjust difficulty, and review before assigning
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Strict Teacher Approval Workflow</span>
        </div>
      </div>

      {/* Generator Form */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <h4 className="font-extrabold text-slate-800 text-sm font-heading">
          Configure Lesson Generator
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Theme / Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500 font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Target Elementary Grade</label>
            <select
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value as any)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500 font-semibold"
            >
              <option value="Grade 3">Grade 3 (Beginner Vocab & Short Phonics)</option>
              <option value="Grade 4">Grade 4 (Short Story & Dialogue)</option>
              <option value="Grade 5">Grade 5 (Comprehension & Presentation)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Primary Skill Focus</label>
            <select
              value={skillFocus}
              onChange={(e) => setSkillFocus(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500 font-semibold"
            >
              <option value="Vocabulary & Speaking">Vocabulary & Speaking</option>
              <option value="Reading & Culture Comprehension">Reading & Culture Comprehension</option>
              <option value="Listening & Audio Pronunciation">Listening & Audio Pronunciation</option>
              <option value="Full Bloom Taxonomy Quiz Set">Full Bloom Taxonomy Quiz Set</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-200 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Crafting Lesson Draft...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Lesson Plan Draft</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Lesson Plan Preview & Teacher Approval Workflow */}
      {generatedDraft && (
        <div className="bg-white p-6 rounded-3xl border border-purple-200 shadow-sm space-y-6">
          
          {/* Draft Status Badge */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                  isApproved
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {isApproved ? '✓ Approved by Ms. Trang' : '⏳ Pending Teacher Review & Approval'}
                </span>
                <span className="text-xs text-slate-400">
                  Topic: {generatedDraft.topic} ({generatedDraft.gradeLevel})
                </span>
              </div>
            </div>

            {!isApproved ? (
              <button
                onClick={handleApprove}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Review & Approve Lesson</span>
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready for Class Assignment</span>
              </span>
            )}
          </div>

          {/* Objectives */}
          <div className="space-y-2">
            <h5 className="font-extrabold text-slate-800 text-sm font-heading flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Lesson Learning Objectives</span>
            </h5>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              {generatedDraft.objectives.map((obj: string, i: number) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Suggested Activities */}
          <div className="space-y-2">
            <h5 className="font-extrabold text-slate-800 text-sm font-heading flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Suggested Classroom Sequence (40 Minutes)</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {generatedDraft.suggestedActivities.map((act: string, i: number) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700">
                  {act}
                </div>
              ))}
            </div>
          </div>

          {/* Vocabulary Deck */}
          <div className="space-y-2">
            <h5 className="font-extrabold text-slate-800 text-sm font-heading flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Custom Vocabulary Pack</span>
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {generatedDraft.customVocabulary.map((v: any, i: number) => (
                <div key={i} className="p-3 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <div className="font-bold text-amber-900">{v.word}</div>
                  <div className="text-[11px] text-amber-700 mt-1">{v.meaning}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloom Questions Set */}
          <div className="space-y-2">
            <h5 className="font-extrabold text-slate-800 text-sm font-heading flex items-center gap-2">
              <Bot className="w-4 h-4 text-rose-500" />
              <span>Bloom Cognitive Questions</span>
            </h5>
            <div className="space-y-2 text-xs">
              {generatedDraft.bloomQuestions.map((q: any, i: number) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                    <span>{i + 1}. {q.question}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {q.level}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Correct Answer: {q.correct}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
