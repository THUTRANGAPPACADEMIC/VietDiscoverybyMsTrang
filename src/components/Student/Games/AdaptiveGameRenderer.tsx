import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  RotateCcw, 
  Trophy, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  RefreshCw,
  Compass,
  Award,
  Zap,
  BookmarkCheck
} from 'lucide-react';
import { GradeNumber, GameMetadata, AdaptiveGameQuestion } from '../../../data/adaptiveGameQuestions';
import { 
  generateSmartQuestionSet, 
  recordQuestionAttempt, 
  finalizeGameAttempt,
  GeneratedQuestionSet,
  GameDifficulty 
} from '../../../lib/smartReplayEngine';
import { soundEffects } from '../../../lib/soundEffects';

// Mechanics Components
import { PicturePopMechanic } from './PicturePopMechanic';
import { AnimalSafariMechanic } from './AnimalSafariMechanic';
import { MemoryFlipMechanic } from './MemoryFlipMechanic';
import { WordMatchMechanic } from './WordMatchMechanic';
import { SentenceRailMechanic } from './SentenceRailMechanic';
import { TreasureHuntMechanic } from './TreasureHuntMechanic';
import { VocabularyMazeMechanic } from './VocabularyMazeMechanic';
import { LandmarkRegionalMechanic } from './LandmarkRegionalMechanic';
import { VietnamMapQuestMechanic } from './VietnamMapQuestMechanic';
import { DetectiveRiddleMechanic } from './DetectiveRiddleMechanic';
import { CulturalQuizMechanic } from './CulturalQuizMechanic';
import { EscapeRoomMechanic } from './EscapeRoomMechanic';
import { WordDecoderMechanic } from './WordDecoderMechanic';
import { DialogueBuilderMechanic } from './DialogueBuilderMechanic';
import { ListeningMissionMechanic } from './ListeningMissionMechanic';
import { ChampionQuizShowMechanic } from './ChampionQuizShowMechanic';
import { TourGuideMechanic } from './TourGuideMechanic';
import { ReadingDetectiveMechanic } from './ReadingDetectiveMechanic';
import { SpeakingMissionMechanic } from './SpeakingMissionMechanic';
import { FinalAdventureMechanic } from './FinalAdventureMechanic';

interface AdaptiveGameRendererProps {
  gameMetadata: GameMetadata;
  gradeNum: GradeNumber;
  studentId: string;
  onComplete: (score: number, maxScore: number, stars: number) => void;
  onEarnStars: (stars: number) => void;
}

export const AdaptiveGameRenderer: React.FC<AdaptiveGameRendererProps> = ({
  gameMetadata,
  gradeNum,
  studentId,
  onComplete,
  onEarnStars
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty>('easy');
  const [questionSet, setQuestionSet] = useState<GeneratedQuestionSet | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [roundScore, setRoundScore] = useState<number>(0);
  const [roundStars, setRoundStars] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [isRoundFinished, setIsRoundFinished] = useState<boolean>(false);
  const [isAnswerPending, setIsAnswerPending] = useState<boolean>(false);
  const [lastFeedback, setLastFeedback] = useState<{ isCorrect: boolean; explanation: string } | null>(null);

  // Initialize or re-generate question set
  const loadNewSet = (diff: GameDifficulty = selectedDifficulty) => {
    const newSet = generateSmartQuestionSet(studentId, gameMetadata.id, gradeNum, {
      batchSize: 5,
      forceDifficulty: diff
    });
    setQuestionSet(newSet);
    setCurrentIndex(0);
    setRoundScore(0);
    setRoundStars(0);
    setCorrectAnswersCount(0);
    setIsRoundFinished(false);
    setIsAnswerPending(false);
    setLastFeedback(null);
  };

  useEffect(() => {
    loadNewSet(selectedDifficulty);
  }, [gameMetadata.id, gradeNum]);

  const handleDifficultyChange = (newDiff: GameDifficulty) => {
    soundEffects.playClick();
    setSelectedDifficulty(newDiff);
    loadNewSet(newDiff);
  };

  const handleAnswer = async (selectedOption: string, isCorrect: boolean) => {
    if (!questionSet || isAnswerPending) return;

    setIsAnswerPending(true);
    const currentQ = questionSet.questions[currentIndex];

    // Record attempt in Smart Replay engine
    await recordQuestionAttempt(studentId, gameMetadata.id, gradeNum, currentQ.questionId, isCorrect);

    const starsForQuestion = isCorrect ? (selectedDifficulty === 'challenge' ? 15 : selectedDifficulty === 'medium' ? 12 : 10) : 0;

    if (isCorrect) {
      setRoundScore(prev => prev + 100);
      setRoundStars(prev => prev + starsForQuestion);
      setCorrectAnswersCount(prev => prev + 1);
      onEarnStars(starsForQuestion);
    }

    setLastFeedback({
      isCorrect,
      explanation: isCorrect ? (currentQ.explanationVi || currentQ.explanation) : `Đáp án đúng là: ${currentQ.correctAnswer}. ${currentQ.explanationVi || currentQ.explanation}`
    });

    // Auto-advance after brief pedagogical pause
    setTimeout(() => {
      setLastFeedback(null);
      setIsAnswerPending(false);

      if (currentIndex + 1 < questionSet.questions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Round Finished!
        finishRound(isCorrect ? roundStars + starsForQuestion : roundStars);
      }
    }, 1400);
  };

  const finishRound = (finalStars: number) => {
    setIsRoundFinished(true);
    soundEffects.playCelebration();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const maxScore = (questionSet?.questions.length || 5) * 100;
    finalizeGameAttempt(studentId, gameMetadata.id, gradeNum, roundScore, maxScore, finalStars);
    onComplete(roundScore, maxScore, finalStars);
  };

  if (!questionSet || questionSet.questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-slate-500 font-bold">Đang nạp bộ câu hỏi tương tác...</p>
      </div>
    );
  }

  const currentQ = questionSet.questions[currentIndex];
  const totalQuestions = questionSet.questions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  return (
    <div className="space-y-4">
      {/* 1. Game Top Header & Adaptive Controls */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl shadow-md">
              {gameMetadata.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black font-heading text-slate-900">
                  {gameMetadata.titleEn}
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {gameMetadata.badge}
                </span>
                {questionSet.isRevisionMode && (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1 animate-pulse">
                    <BookmarkCheck className="w-3 h-3" />
                    <span>Ôn tập nâng cao (Revision Mode)</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {gameMetadata.titleVi} • Grade {gradeNum} Adventure
              </p>
            </div>
          </div>

          {/* Difficulty Level Buttons */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-2xl border border-slate-200">
            {(['easy', 'medium', 'challenge'] as GameDifficulty[]).map((lvl) => {
              const isActive = selectedDifficulty === lvl;
              const labels = {
                easy: 'Easy (Dễ)',
                medium: 'Medium (Vừa)',
                challenge: 'Challenge (Thử thách)'
              };

              return (
                <button
                  key={lvl}
                  onClick={() => handleDifficultyChange(lvl)}
                  disabled={isAnswerPending}
                  className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-indigo-900 shadow-xs border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {labels[lvl]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress bar & Question Counter */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mt-3 pt-1">
          <div className="flex items-center gap-2">
            <span>Question {currentIndex + 1} of {totalQuestions}</span>
            <span className="text-slate-400">•</span>
            <span className="text-amber-700 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>+{roundStars} Stars</span>
            </span>
          </div>

          <div className="w-32 sm:w-48 h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. Main Game Interaction Stage */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border-2 border-slate-200/90 shadow-md min-h-[380px] flex flex-col justify-center relative">
        {!isRoundFinished ? (
          <>
            {/* Pedagogical Feedback Banner if active */}
            {lastFeedback && (
              <div className={`mb-4 p-3.5 rounded-2xl border text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in ${
                lastFeedback.isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                {lastFeedback.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
                )}
                <span>{lastFeedback.explanation}</span>
              </div>
            )}

            {/* Specialized Game Mechanic Renderer */}
            {(gameMetadata.mechanics === 'listen_tap_picture' || 
              gameMetadata.mechanics === 'color_object_identification' || 
              gameMetadata.mechanics === 'bubble_popping_action') && (
              <PicturePopMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {(gameMetadata.mechanics === 'sound_match_animal' || 
              gameMetadata.mechanics === 'safari_listening_clues') && (
              <AnimalSafariMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === '3d_card_flip_memory' && (
              <MemoryFlipMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'slot_drag_matching' && (
              <WordMatchMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {(gameMetadata.mechanics === 'word_block_sentence_rail' || 
              gameMetadata.mechanics === 'clause_connector_puzzle') && (
              <SentenceRailMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'map_location_audio_clues' && (
              <TreasureHuntMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === '2d_grid_maze_gates' && (
              <VocabularyMazeMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'regional_drop_zones' && (
              <LandmarkRegionalMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'interactive_svg_map_pins' && (
              <VietnamMapQuestMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'detective_clue_investigation' && (
              <DetectiveRiddleMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {(gameMetadata.mechanics === 'cultural_trivia_quiz' || 
              gameMetadata.mechanics === 'jeopardy_category_board') && (
              <CulturalQuizMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'multi_door_code_escape' && (
              <EscapeRoomMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'cipher_scramble_decoder' && (
              <WordDecoderMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'conversational_bubble_sequencing' && (
              <DialogueBuilderMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'audio_broadcast_checkpoint' && (
              <ListeningMissionMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'tv_stage_lifelines_ladder' && (
              <ChampionQuizShowMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'tourist_q_and_a_roleplay' && (
              <TourGuideMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'passage_evidence_analysis' && (
              <ReadingDetectiveMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'speech_synthesis_model_practice' && (
              <SpeakingMissionMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}

            {gameMetadata.mechanics === 'timed_multi_stage_sprint' && (
              <FinalAdventureMechanic
                question={currentQ}
                onAnswer={handleAnswer}
                disabled={isAnswerPending}
              />
            )}
          </>
        ) : (
          /* Round Victory & Smart Replay Screen */
          <div className="py-8 px-4 text-center space-y-5 max-w-lg mx-auto animate-in zoom-in-90">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 text-white flex items-center justify-center text-4xl shadow-xl shadow-rose-200 animate-bounce">
              🏆
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                Round Complete! (Hoàn Thành Vòng Chơi)
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Con đã trả lời đúng {correctAnswersCount} / {totalQuestions} câu hỏi xuất sắc!
              </p>
            </div>

            {/* Score & Stars Badge */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block">Stars Won</span>
                <span className="text-xl font-black text-amber-600 flex items-center justify-center gap-1 mt-0.5">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <span>+{roundStars}</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block">Accuracy</span>
                <span className="text-xl font-black text-emerald-600 mt-0.5 block">
                  {Math.round((correctAnswersCount / totalQuestions) * 100)}%
                </span>
              </div>
            </div>

            {/* Smart Replay Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => loadNewSet(selectedDifficulty)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 animate-spin-once" />
                <span>Play Again (Bộ câu hỏi mới)</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 italic">
              ✨ Smart Replay tự động chọn các câu hỏi chưa làm và ôn tập các câu con từng trả lời sai.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
