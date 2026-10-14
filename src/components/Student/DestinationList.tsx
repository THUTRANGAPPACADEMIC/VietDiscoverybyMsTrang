import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Compass, 
  Camera, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { Destination, DestinationProgress, Region, Theme, GradeBand } from '../../types';
import { playSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';
import { 
  Icon3DCompass, 
  Icon3DStar, 
  Icon3DTreasureChest, 
  Icon3DHeadphones, 
  Icon3DMicrophone, 
  Icon3DOpenBook, 
  Icon3DGamepad, 
  Icon3DTranslate 
} from './Game3DAssets';

interface DestinationListProps {
  destinations: Destination[];
  progressMap: Record<string, DestinationProgress>;
  gradeBand?: GradeBand;
  onSelectDestination: (dest: Destination) => void;
  onOpenLesson: (dest: Destination, initialTab?: 'vocabulary' | 'reading' | 'listening' | 'speaking' | 'quiz') => void;
}

export const DestinationList: React.FC<DestinationListProps> = ({
  destinations,
  progressMap,
  gradeBand = 'grade_3',
  onSelectDestination,
  onOpenLesson
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<'All' | Theme>('All');
  const [selectedRegion, setSelectedRegion] = useState<'All' | Region>('All');
  
  // Track which destination card has audio actively speaking
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  
  // Track which cards have Vietnamese translation toggled visible
  const [revealedTranslations, setRevealedTranslations] = useState<Record<string, boolean>>({});

  const toggleTranslation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    setRevealedTranslations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePronounceEnglish = (dest: Destination, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    
    if (playingAudioId === dest.id) {
      stopSpeech();
      setPlayingAudioId(null);
      return;
    }

    setPlayingAudioId(dest.id);
    const content = dest.gradeContent[gradeBand] || dest.gradeContent.grade_3;
    const phraseToSpeak = `Welcome to ${dest.name}! ${content?.reading?.textEn?.slice(0, 120) || dest.summaryEn}`;
    
    playSpeech(phraseToSpeak, 'en-US', () => {
      setPlayingAudioId(null);
    });
  };

  const handlePlayWord = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    playSpeech(word, 'en-US');
  };

  const filtered = destinations.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.vietnameseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.province.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = selectedTheme === 'All' ? true : dest.theme === selectedTheme;
    const matchesRegion = selectedRegion === 'All' ? true : dest.region === selectedRegion;
    return matchesSearch && matchesTheme && matchesRegion;
  });

  return (
    <div className="space-y-6">
      
      {/* Search and Filters Header */}
      <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border-2 border-amber-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input with Large Touch Area */}
        <div className="relative w-full md:w-80">
          <Search className="w-5 h-5 text-amber-500 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search destination, city, province..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-base sm:text-lg font-medium border-2 border-slate-200 rounded-2xl focus:outline-hidden focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Theme Filters with Large Tactile Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {(['All', 'Nature', 'Culture', 'History', 'Modern Innovation'] as const).map((th) => (
            <button
              key={th}
              onClick={() => {
                soundEffects.playClick();
                setSelectedTheme(th);
              }}
              className={`min-h-[46px] px-4 py-2 rounded-2xl text-sm sm:text-base font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                selectedTheme === th
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-rose-200 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-102'
              }`}
            >
              {th === 'All' && '🌟 All Wonders'}
              {th === 'Nature' && '🍃 Nature'}
              {th === 'Culture' && '🏮 Culture'}
              {th === 'History' && '🏛️ History'}
              {th === 'Modern Innovation' && '🚀 Innovation'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Destination Cards (Mobile: 1 spacious card per row; Tablet: 2 cols; Desktop: 3 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((dest) => {
          const prog = progressMap[dest.id];
          const isCompleted = prog && prog.completedSteps.quiz;
          const isPlayingAudio = playingAudioId === dest.id;
          const isTranslated = !!revealedTranslations[dest.id];
          const gradeContent = dest.gradeContent[gradeBand] || dest.gradeContent.grade_3;

          return (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl border-3 border-slate-200/80 hover:border-amber-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Large Beautiful Destination Photograph */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 select-none">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30"></div>

                  {/* Top-Left: Region & Theme Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-white/95 text-slate-800 shadow-md backdrop-blur-md uppercase tracking-wider">
                      {dest.region === 'North' ? '🇻🇳 North' : dest.region === 'Central' ? '🇻🇳 Central' : '🇻🇳 South'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md">
                      {dest.theme}
                    </span>
                  </div>

                  {/* Top-Right: Star Reward / Completed Stamp */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {isCompleted ? (
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-black shadow-lg animate-bounce">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-black border border-amber-400/40 shadow-lg">
                        <Icon3DStar size={20} />
                        <span>+50 Stars</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom: Card Titles (Large Typography: 24-28px English, Subtitle Vietnamese) */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl drop-shadow-md">{dest.badge.icon}</span>
                      <h3 className="font-black text-2xl sm:text-3xl font-heading tracking-tight drop-shadow-md text-white">
                        {dest.name}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-amber-200 font-bold drop-shadow-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{dest.vietnameseName}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/80 font-normal">{dest.province}</span>
                    </p>
                  </div>
                </div>

                {/* Verified Photo Attribution Notice (Small and Elegant) */}
                {dest.photoAttribution && (
                  <div className="px-4 py-1.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dest.photoAttribution.landmark}</span>
                    </span>
                    <span className="text-slate-400 shrink-0 text-[10px]">
                      Photo: {dest.photoAttribution.author}
                    </span>
                  </div>
                )}

                {/* Card Body: English First, Vietnamese Translation Second */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* English Slogan & Reading Target */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>English Adventure • {gradeContent?.cefrLevel || 'Pre-A1'}</span>
                      </div>

                      {/* Quick Audio Listen Button for Destination */}
                      <button
                        onClick={(e) => handlePronounceEnglish(dest, e)}
                        title={isPlayingAudio ? 'Stop speaking' : 'Listen to English description'}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-extrabold cursor-pointer transition-all active:scale-95 ${
                          isPlayingAudio
                            ? 'bg-rose-500 text-white animate-pulse shadow-md'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                        }`}
                      >
                        {isPlayingAudio ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>Stop ⏹️</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Listen 🔊</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Primary English Text (Large Typography: 18-20px) */}
                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      "{dest.summaryEn}"
                    </p>
                  </div>

                  {/* Vietnamese Translation Accordion / Toggle */}
                  <div className="rounded-2xl border border-slate-200/90 bg-amber-50/50 p-3.5 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-extrabold text-amber-900 flex items-center gap-1.5">
                        <span>🇻🇳 Hỗ trợ Tiếng Việt</span>
                        <span className="text-[11px] font-normal text-amber-700">(Bấm để xem)</span>
                      </span>

                      <button
                        onClick={(e) => toggleTranslation(dest.id, e)}
                        className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer px-2.5 py-1 rounded-lg bg-amber-200/60 hover:bg-amber-200 transition-colors"
                      >
                        {isTranslated ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isTranslated ? 'Ẩn bản dịch' : 'Xem bản dịch'}</span>
                      </button>
                    </div>

                    {isTranslated && (
                      <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed font-medium pt-2 border-t border-amber-200/80">
                        {dest.summaryVi}
                      </p>
                    )}
                  </div>

                  {/* Differentiated Vocabulary Quick Taps (Tap to listen) */}
                  {gradeContent?.vocabulary && gradeContent.vocabulary.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                        🎯 Key Vocabulary for {gradeBand.replace('_', ' ').toUpperCase()}:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {gradeContent.vocabulary.slice(0, 4).map((v, i) => (
                          <button
                            key={i}
                            onClick={(e) => handlePlayWord(v.word, e)}
                            title={`Tap to pronounce: "${v.word}" - ${v.meaningVi}`}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-amber-100 hover:border-amber-300 border border-slate-200 text-xs sm:text-sm font-extrabold text-slate-800 hover:text-amber-900 transition-all cursor-pointer active:scale-95"
                          >
                            <span>{v.emoji || '⭐'}</span>
                            <span>{v.word}</span>
                            <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-amber-600" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learning Progress Indicator */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>Adventure Progress:</span>
                      <span className="font-extrabold text-slate-800">
                        {prog ? `${prog.quizScore}% Mastered` : '0% - Ready to explore!'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-500 rounded-full"
                        style={{ width: `${prog ? Math.max(prog.quizScore, 10) : 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TACTILE 3D LEARNING ACTIVITY BUTTONS (Listen, Speak, Read, Play) */}
              {/* Touch targets minimum 52px-56px for comfortable elementary finger tapping */}
              <div className="p-5 sm:p-6 pt-0 space-y-3">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  
                  {/* 1. LISTEN (Nghe) */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'listening');
                    }}
                    className="min-h-[54px] px-3.5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_5px_0_#047857] hover:shadow-[0_2px_0_#047857] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer select-none"
                  >
                    <Icon3DHeadphones size={24} />
                    <div className="text-left leading-tight">
                      <div>Listen</div>
                      <div className="text-[10px] font-medium text-emerald-100">Nghe</div>
                    </div>
                  </button>

                  {/* 2. SPEAK (Nói) */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'speaking');
                    }}
                    className="min-h-[54px] px-3.5 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_5px_0_#0369a1] hover:shadow-[0_2px_0_#0369a1] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer select-none"
                  >
                    <Icon3DMicrophone size={24} />
                    <div className="text-left leading-tight">
                      <div>Speak</div>
                      <div className="text-[10px] font-medium text-sky-100">Luyện nói</div>
                    </div>
                  </button>

                  {/* 3. READ (Đọc) */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'reading');
                    }}
                    className="min-h-[54px] px-3.5 py-2.5 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_5px_0_#7e22ce] hover:shadow-[0_2px_0_#7e22ce] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer select-none"
                  >
                    <Icon3DOpenBook size={24} />
                    <div className="text-left leading-tight">
                      <div>Read</div>
                      <div className="text-[10px] font-medium text-purple-100">Đọc hiểu</div>
                    </div>
                  </button>

                  {/* 4. PLAY (Chơi / Thử thách) */}
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onOpenLesson(dest, 'quiz');
                    }}
                    className="min-h-[54px] px-3.5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-amber-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_5px_0_#b45309] hover:shadow-[0_2px_0_#b45309] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer select-none"
                  >
                    <Icon3DGamepad size={24} />
                    <div className="text-left leading-tight">
                      <div>Play</div>
                      <div className="text-[10px] font-medium text-amber-900">Thử thách</div>
                    </div>
                  </button>
                </div>

                {/* Primary Full-Width Action: Start Full Adventure */}
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    onOpenLesson(dest, 'vocabulary');
                  }}
                  className="w-full min-h-[56px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_6px_0_#be123c] hover:shadow-[0_2px_0_#be123c] hover:translate-y-[4px] active:translate-y-[6px] active:shadow-none transition-all cursor-pointer select-none"
                >
                  <Icon3DCompass size={28} />
                  <span>START ADVENTURE • BẮT ĐẦU</span>
                  <ChevronRight className="w-5 h-5 text-amber-200" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
