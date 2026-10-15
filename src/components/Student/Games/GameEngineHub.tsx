import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  CheckCircle2, 
  Award, 
  Star,
  Layers
} from 'lucide-react';
import { 
  GradeNumber,
  getAvailableGamesForGrade,
  GameMetadata
} from '../../../data/adaptiveGameQuestions';
import { AdaptiveGameRenderer } from './AdaptiveGameRenderer';
import { soundEffects } from '../../../lib/soundEffects';

export type GameEngineType = string;

interface GameEngineHubProps {
  gradeNum: GradeNumber;
  studentId?: string;
  onRecordGame: (gameType: string, score: number, maxScore: number, stars: number) => void;
  onEarnStars: (stars: number) => void;
}

export const GameEngineHub: React.FC<GameEngineHubProps> = ({
  gradeNum,
  studentId = 'guest',
  onRecordGame,
  onEarnStars
}) => {
  const games = getAvailableGamesForGrade(gradeNum);
  const [activeGameId, setActiveGameId] = useState<string>(games[0]?.id || 'picture_pop');

  // Reset active game if grade changes
  useEffect(() => {
    const currentGradeGames = getAvailableGamesForGrade(gradeNum);
    if (currentGradeGames.length > 0) {
      setActiveGameId(currentGradeGames[0].id);
    }
  }, [gradeNum]);

  const activeGame = games.find(g => g.id === activeGameId) || games[0];

  const handleCompleteGame = (score: number, maxScore: number, stars: number) => {
    onRecordGame(activeGame.id, score, maxScore, stars);
  };

  return (
    <div className="space-y-4">
      {/* 5 Grade-Specific Game Selector Bar */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-4 border-2 border-indigo-200 shadow-md">
        <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 px-2 py-1 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Gamepad2 className="w-4 h-4 text-indigo-600" />
            <span className="text-slate-800">
              Grade {gradeNum} Game Collection (5 Trò chơi tương tác đặc trưng):
            </span>
          </span>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ✓ 5/5 Grade Differentiated
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-2">
          {games.map((g, idx) => {
            const isActive = activeGameId === g.id;

            return (
              <button
                key={g.id}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveGameId(g.id);
                }}
                className={`p-3 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between border-2 min-h-[95px] relative group ${
                  isActive
                    ? `bg-gradient-to-br ${g.color} text-white shadow-lg border-transparent scale-102 ring-2 ring-offset-2 ring-indigo-400`
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-2xl">{g.icon}</span>
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    #{idx + 1}
                  </span>
                </div>

                <div className="mt-1">
                  <div className={`text-xs font-black leading-tight ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                    {g.titleEn}
                  </div>
                  <div className={`text-[10px] font-semibold truncate ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                    {g.titleVi}
                  </div>
                </div>

                <div className="mt-1">
                  <span className={`text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                    isActive ? 'bg-black/20 text-white' : 'bg-indigo-50 text-indigo-700'
                  }`}>
                    {g.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Game Stage with Smart Replay & Adaptive Difficulty */}
      {activeGame && (
        <AdaptiveGameRenderer
          key={`${activeGame.id}-g${gradeNum}`}
          gameMetadata={activeGame}
          gradeNum={gradeNum}
          studentId={studentId}
          onComplete={handleCompleteGame}
          onEarnStars={onEarnStars}
        />
      )}
    </div>
  );
};
