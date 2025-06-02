import React, { useState } from 'react';
import PlayerList from './PlayerList';
import GameBoard from './GameBoard';
import { InGamePlayer, PlayerGuess } from '../game-models';

interface Props {
  currentWordLength: number;
  totalRounds: number;
  totalTriesPerRound: number;
  players: InGamePlayer[];
  initialGuesses?: PlayerGuess[];
}

export default function PlayGameBase({ totalRounds, totalTriesPerRound, players, currentWordLength, initialGuesses = [] }: Props) {
  const [currentRound, setGameRound] = useState<number>(1);
  const [guesses, setGuesses] = useState<PlayerGuess[]>(initialGuesses);
  
  return (
    <div className="min-h-screen flex flex-col bg-lingo-darkBg">
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-special text-3xl md:text-4xl mb-2">Custom Solo Game</h1>
            <p className="text-muted-foreground">Round {currentRound} - Player's turn: {players.find(p => p.isCurrentTurn)?.name}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player List */}
            <div className="lg:col-span-1">
              <PlayerList players={players} />
            </div>
            
            {/* Game Board */}
            <div className="lg:col-span-2">
                <GameBoard
                  guesses={guesses}
                  maxAttempts={totalTriesPerRound}
                  wordLength={currentWordLength}                  
                />
              
              <div className="mt-6 p-4 bg-card rounded-lg">
                <h3 className="font-medium mb-2">Game Rules</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Green tiles indicate correct letter in correct position</li>
                  <li>Orange tiles indicate correct letter in wrong position</li>
                  <li>Gray tiles indicate incorrect letters</li>
                  <li>Each player has 6 attempts to guess the word</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

