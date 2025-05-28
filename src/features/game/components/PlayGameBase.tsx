import React, { useState } from 'react';
import PlayerList from './PlayerList';
import GameBoard from './GameBoard';

// Sample data (would connect to backend in real app)
const samplePlayers = [
  { id: '1', name: 'You', score: 2, isCurrentTurn: true, isCurrentPlayer: true },
  { id: '2', name: 'Alice', score: 3, isCurrentTurn: false, isCurrentPlayer: false },
  { id: '3', name: 'Bob', score: 1, isCurrentTurn: false, isCurrentPlayer: false },
];

const sampleWords = ['apple', 'games', 'chair', 'table', 'smart'];

export default function PlayGameBase() {
  const [currentWord] = useState(() => {

    // In a real app, this would be received from a backend
    const randomIndex = Math.floor(Math.random() * sampleWords.length);
    return sampleWords[randomIndex];
  });
  
  const [gameRound, setGameRound] = useState(1);
  const [players, setPlayers] = useState(samplePlayers);
  
  const handleGameOver = (won: boolean) => {
    if (won) {
      // Update player score
      setPlayers(players.map(player => 
        player.isCurrentPlayer ? {...player, score: player.score + 1} : player
      ));
    }
    
    // In a real app, this would notify the backend
    console.log(`Game over, player ${won ? 'won' : 'lost'}!`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-lingo-darkBg">
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-fraktur text-3xl md:text-4xl mb-2">Game Room</h1>
            <p className="text-muted-foreground">Round {gameRound} - Player's turn: {players.find(p => p.isCurrentTurn)?.name}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player List */}
            <div className="lg:col-span-1">
              <PlayerList players={players} />
            </div>
            
            {/* Game Board */}
            <div className="lg:col-span-2">
              <div className="bg-lingo-lightBg p-6 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  Guess the word ({currentWord.length} letters)
                </h2>
                <GameBoard
                  targetWord={currentWord}
                  onGameOver={handleGameOver}
                />
              </div>
              
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

