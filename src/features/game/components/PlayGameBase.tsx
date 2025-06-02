import React, { useState } from 'react';
import PlayerList from './PlayerList';
import GameBoard from './GameBoard';
import { Hint, InGamePlayer, PlayerGuess, RoundGuess } from '../game-models';
import GameSettings from './GameSettings';
import ActiveGameTitle from '@/components/specific/game/ActiveGameTitle';
import { GameMode } from '@/lib/game-constants';
import QuickRules from './QuickRules';

interface Props {
  currentWordLength: number;
  startingLetter: string;
  currentRound: number;
  totalRounds: number;
  totalTriesPerRound: number;
  players: InGamePlayer[];
  initialGuesses?: RoundGuess[];
  gameMode: GameMode;
}

export default function PlayGameBase({ totalRounds, currentRound, totalTriesPerRound, players, currentWordLength, startingLetter, gameMode, initialGuesses = [] }: Props) {
  const [guesses, setGuesses] = useState<RoundGuess[]>(initialGuesses);
  
  return (
    <div className="min-h-screen flex flex-col bg-lingo-darkBg">
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <ActiveGameTitle gameMode={gameMode}></ActiveGameTitle>
            <p className="text-muted-foreground">Round {currentRound}/{totalRounds} - Player's turn: {players.find(p => p.isCurrentTurn)?.name} | Starting letter '{startingLetter}'</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Player List */}
            <div className="lg:col-span-1">
              <PlayerList players={players} />
            </div>
            
            {/* Game Board */}
            <div className="lg:col-span-2 gap-10 flex flex-col">
                <GameBoard
                  guesses={[]}
                  maxAttempts={totalTriesPerRound}
                  wordLength={currentWordLength}                  
                />
              
              <QuickRules></QuickRules>
            </div>

            {/* Settings */}
            <div className="lg:col-span-1">
              <GameSettings></GameSettings>              
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

