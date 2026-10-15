import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Volume2, 
  Square, 
  Languages, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  HelpCircle,
  Headphones
} from 'lucide-react';
import { playEnglishSpeech, stopSpeech } from '../../lib/speech';
import { soundEffects } from '../../lib/soundEffects';

export interface ImmersiveReadingAdventureProps {
  destinationName: string;
  destinationProvince: string;
  landmarkImage: string;
  landmarkName?: string;
  photoAttribution?: {
    author?: string;
    source?: string;
    license?: string;
    landmark?: string;
  };
  titleEn: string;
  textEn: string;
  textVi: string;
  vocabularyHighlights?: { word: string; meaningVi: string }[];
  avatarUrl?: string;
  avatarName?: string;
  onContinue?: () => void;
}

export const ImmersiveReadingAdventure: React.FC<ImmersiveReadingAdventureProps> = ({
  destinationName,
  destinationProvince,
  landmarkImage,
  landmarkName = destinationName,
  photoAttribution,
  titleEn,
  textEn,
  textVi,
  vocabularyHighlights = [],
  avatarUrl = '/assets/cute/captain_trang_clean.png',
  avatarName = 'Captain Trang',
  onContinue
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [imgSrc, setImgSrc] = useState(landmarkImage || '/destinations/danang_dragon_bridge.jpg');
  const [selectedWord, setSelectedWord] = useState<{ word: string; meaningVi: string } | null>(null);

  useEffect(() => {
    if (landmarkImage) {
      setImgSrc(landmarkImage);
    }
  }, [landmarkImage]);

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    soundEffects.playClick();
    setIsPlayingAudio(true);

    playEnglishSpeech(textEn, {
      pitch: 1.05,
      lang: 'en-GB',
      onStart: () => setIsPlayingAudio(true),
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Split story into readable narrative paragraphs
  const paragraphs = textEn.split('\n').filter(p => p.trim().length > 0);
  const paragraphsVi = textVi.split('\n').filter(p => p.trim().length > 0);

  return (
    <div className="space-y-6">
      
      {/* 1. HERO READING BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 p-5 sm:p-6 text-white shadow-xl shadow-rose-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Reading Adventure</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <BookOpen className="w-3 h-3 fill-amber-950" />
                <span>Story Quest</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight drop-shadow-xs">
              {titleEn}
            </h3>

            <div className="flex items-center gap-2 text-xs font-medium text-amber-100">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{destinationName} • {destinationProvince}</span>
            </div>
          </div>

          {/* Action Buttons: Listen Story + View Translation */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleToggleAudio}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-102 ${
                isPlayingAudio
                  ? 'bg-rose-600 text-white shadow-rose-300 animate-pulse'
                  : 'bg-white text-slate-800 hover:bg-amber-50 shadow-xs'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-white" />
                  <span>Stop Story Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Listen Story 🎧</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowVietnamese(!showVietnamese)}
              className="px-4 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-black text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-amber-300" />
              <span>{showVietnamese ? 'Hide Vietnamese' : 'Xem Bản Dịch'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. DUAL COLUMN STORY EXPERIENCE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (5 cols): Destination Photography + Companion Guide */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-amber-100 bg-slate-900 aspect-[4/3] group">
            <img
              src={imgSrc}
              alt={landmarkName}
              onError={() => setImgSrc('/destinations/danang_dragon_bridge.jpg')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="text-[10px] font-black uppercase text-amber-400">
                📍 {destinationProvince}
              </div>
              <div className="text-xs font-bold truncate">
                {landmarkName}
              </div>
            </div>
          </div>

          {/* Target Vocabulary Chips in Story */}
          {vocabularyHighlights.length > 0 && (
            <div className="p-4 rounded-3xl bg-amber-50/80 border-2 border-amber-200 shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Key Vocabulary in this Story:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {vocabularyHighlights.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSelectedWord(v);
                      playEnglishSpeech(v.word);
                    }}
                    className="px-2.5 py-1 rounded-xl bg-white border border-amber-200 text-xs font-bold text-amber-950 hover:bg-amber-100 transition-colors shadow-2xs flex items-center gap-1"
                  >
                    <span>{v.word}</span>
                    <span className="text-[10px] text-amber-700 font-normal">({v.meaningVi})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Companion dialogue */}
          <div className="p-4 rounded-3xl bg-purple-50/80 border-2 border-purple-200 shadow-xs flex items-center gap-3">
            <img
              src={avatarUrl}
              alt={avatarName}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/cute/captain_trang_clean.png';
              }}
              className="w-12 h-12 rounded-2xl object-cover bg-white p-0.5 shadow-sm border border-purple-200 shrink-0"
            />
            <div className="text-xs text-purple-950">
              <div className="font-black font-heading">{avatarName}'s Reading Tip:</div>
              <div className="text-slate-600 font-medium">
                Read out loud with me! Notice the amazing facts about the Dragon Bridge and Hoi An lanterns.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Story Content with Illustrated Paragraphs */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm space-y-5">
            
            <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-sans">
              {paragraphs.map((p, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/40 via-white to-sky-50/30 border border-slate-200/80 shadow-2xs"
                >
                  <p className="font-medium text-slate-800 leading-relaxed">
                    {p}
                  </p>
                </div>
              ))}
            </div>

            {/* Bilingual Accordion */}
            {showVietnamese && (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-200 text-emerald-950 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-black text-xs text-emerald-800 uppercase">
                  <span>🇻🇳 Bản dịch tiếng Việt hỗ trợ học tập:</span>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed space-y-2 text-slate-700">
                  {paragraphsVi.map((pv, i) => (
                    <p key={i}>{pv}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">
                Primary CEFR Story Reader
              </span>

              {onContinue && (
                <button
                  type="button"
                  onClick={onContinue}
                  className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer transform hover:scale-102"
                >
                  <span>Continue to Listening Quest</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
