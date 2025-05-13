"use client";

import React, { useState } from 'react';
// import GameSetup from '@/components/GameSetup';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GameRoom {
  id: string;
  name: string;
  players: number;
  wordLength: number;
  maxPlayers: number;
}

// Sample data (would connect to backend in real app)
const sampleRooms: GameRoom[] = [
  { id: '1', name: 'Word Masters', players: 2, wordLength: 5, maxPlayers: 4 },
  { id: '2', name: 'Lingo Champions', players: 3, wordLength: 6, maxPlayers: 5 },
  { id: '3', name: 'Word Wizards', players: 1, wordLength: 4, maxPlayers: 3 },
];

const Play: React.FC = () => {
  const [showCreateGame, setShowCreateGame] = useState(false);
  const [rooms] = useState(sampleRooms);
  const [joinCode, setJoinCode] = useState('');
  
  const handleCreateGame = (params: { roomName: string; wordLength: number; maxAttempts: number; }) => {
    // In a real app, this would call an API to create a game
    console.log('Creating game with params:', params);
  };
  
  const joinRoom = (roomId: string) => {
    // In a real app, this would call an API to join a game
    console.log('Joining room:', roomId);
  };
  
  const handleJoinWithCode = () => {
    if (!joinCode.trim()) {
      return;
    }
    
    // In a real app, this would call an API to join a game
    console.log('handle join with code:', joinCode);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center flex flex-col items-center">
            <h1 className="font-fraktur text-3xl md:text-4xl mb-4 font-special border-b-2 border-primary w-fit">Multiplayer Game</h1>
            <p className="text-muted-foreground">Join an existing game or create your own</p>
          </div>
          
          {showCreateGame ? (
            <div className="mb-8">
              <Button 
                variant="outline" 
                className="mb-4"
                onClick={() => setShowCreateGame(false)}
              >
                Back to Lobby
              </Button>
              {/* <GameSetup onCreateGame={handleCreateGame} /> */}
            </div>
          ) : (
            <>
              {/* Join with Code */}
              <div className="bg-card rounded-xl p-6 mb-8">
                <h2 className="font-semibold text-xl mb-4">Join with Code</h2>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter game code"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleJoinWithCode}>
                    Join
                  </Button>
                </div>
              </div>
              
              {/* Create Game */}
              <div className="bg-card rounded-xl p-6 mb-8 text-center">
                <h2 className="font-semibold text-xl mb-2">Create Your Own Game</h2>
                <p className="text-muted-foreground mb-4">
                  Host your own private or public game with custom settings.
                </p>
                <Button 
                  onClick={() => setShowCreateGame(true)}
                  size="lg"
                  className="px-8"
                >
                  Create Game
                </Button>
              </div>
              
              {/* Available Rooms */}
              <div className="bg-card rounded-xl p-6">
                <h2 className="font-semibold text-xl mb-4">Available Rooms</h2>
                
                {rooms.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No rooms available. Create your own game!
                  </p>
                ) : (
                  <div className="space-y-3">
                    {rooms.map((room) => (
                      <div 
                        key={room.id}
                        className="flex items-center justify-between bg-muted p-4 rounded-md"
                      >
                        <div>
                          <h3 className="font-medium">{room.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {room.wordLength} letters • {room.players}/{room.maxPlayers} players
                          </p>
                        </div>
                        <Button 
                          onClick={() => joinRoom(room.id)}
                          disabled={room.players >= room.maxPlayers}
                        >
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      
    </div>
  );
};

export default Play;