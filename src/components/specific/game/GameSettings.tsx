"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { GameMode, GameVisibility } from '@/lib/game-constants';
import { useRouter } from 'next/navigation';

interface GameSettingsProps {
    title: string;
    mode: GameMode;
    visibility?: GameVisibility;
}

const GameSettings: React.FC<GameSettingsProps> = ({title, mode, visibility = GameVisibility.Private }: GameSettingsProps) => {
  const router = useRouter();

  const handleStartGame = () => {
    console.log("handle start game");
  };

  function navBackToSolo() {
        router.push('/play/solo')
  }

  function navBackToMultiplayer() {
    router.push('/play/multiplayer')
  }

  return (
    <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-center">
        <h1 className="font-fraktur text-2xl md:text-3xl mb-2">
            {title}
        </h1>
        <p className="text-sm text-muted-foreground">Customize your game settings</p>
        </div>
        
        <div className="bg-card rounded-xl p-4 md:p-6 mb-6">
        {/* Word Length */}
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Word Length</h2>
            <span className="text-sm text-muted-foreground">22 letters</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
            {[3, 4, 5, 6, 7].map((length) => (
                <div>ss</div>
                // <Card 
                // key={length}
                // className={cn(
                //     "cursor-pointer transition-all hover:border-lingo-purple",
                //     wordLength === length ? "border-lingo-purple bg-lingo-purple bg-opacity-10" : ""
                // )}
                // onClick={() => setWordLength(length)}
                // >
                // <CardContent className="flex items-center justify-center p-3">
                //     <span className="text-lg font-semibold">{length}</span>
                // </CardContent>
                // </Card>
            ))}
            </div>
        </div>
        
        {/* Max Attempts */}
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Max Attempts</h2>
            <span className="text-sm text-muted-foreground">23 guesses</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
            {[4, 5, 6, 7].map((attempts) => (
                // <Card 
                // key={attempts}
                // className={cn(
                //     "cursor-pointer transition-all hover:border-lingo-purple",
                //     maxAttempts === attempts ? "border-lingo-purple bg-lingo-purple bg-opacity-10" : ""
                // )}
                // onClick={() => setMaxAttempts(attempts)}
                // >
                // <CardContent className="flex items-center justify-center p-3">
                //     <span className="text-lg font-semibold">{attempts}</span>
                // </CardContent>
                // </Card>
                <div>
                    lol
                </div>
            ))}
            </div>
        </div>
        
        {/* Time per Turn */}
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Time per Turn</h2>
            <span className="text-sm text-muted-foreground">99 seconds</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
            {/* {[10, 20, 30, 40].map((seconds) => (
                <Card 
                key={seconds}
                className={cn(
                    "cursor-pointer transition-all hover:border-lingo-purple",
                    timePerTurn === seconds ? "border-lingo-purple bg-lingo-purple bg-opacity-10" : ""
                )}
                onClick={() => setTimePerTurn(seconds)}
                >
                <CardContent className="flex items-center justify-center py-2 px-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-md font-semibold">{seconds}s</span>
                </CardContent>
                </Card>
            ))} */}
            </div>
        </div>
        
        {/* Game Visibility (only for multiplayer) */}
        {/* {gameMode === 'multiplayer' && (
    <div>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Game Visibility</h2>
            </div>
            <Card className="border border-muted overflow-hidden">
                <div className="grid grid-cols-2">
                <div 
                    className={cn(
                    "flex items-center justify-center p-3 cursor-pointer border-r border-muted transition-all",
                    visibility === 'public' && "bg-lingo-purple bg-opacity-10"
                    )}
                    onClick={() => setVisibility('public')}
                >
                    <Globe className={cn("w-4 h-4 mr-2", visibility === 'public' ? "text-lingo-purple" : "text-muted-foreground")} />
                    <span className={cn("font-medium", visibility === 'public' ? "text-lingo-purple" : "text-muted-foreground")}>Public</span>
                </div>
                <div 
                    className={cn(
                    "flex items-center justify-center p-3 cursor-pointer transition-all",
                    visibility === 'private' && "bg-lingo-purple bg-opacity-10"
                    )}
                    onClick={() => setVisibility('private')}
                >
                    <Lock className={cn("w-4 h-4 mr-2", visibility === 'private' ? "text-lingo-purple" : "text-muted-foreground")} />
                    <span className={cn("font-medium", visibility === 'private' ? "text-lingo-purple" : "text-muted-foreground")}>Private</span>
                </div>
                </div>
            </Card>
            <div className="flex items-center mt-2">
                <div 
                className="flex items-center cursor-pointer"
                onClick={() => setVisibility(visibility === 'public' ? 'private' : 'public')}
                >
                <div className="relative w-10 h-6 bg-muted rounded-full p-1 transition-colors duration-300 ease-in-out mr-2">
                    <div 
                    className={cn(
                        "absolute w-4 h-4 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center",
                        visibility === 'public' ? "bg-lingo-purple transform translate-x-4" : "bg-muted-foreground"
                    )}
                    >
                    {visibility === 'public' ? 
                        <Globe className="w-3 h-3 text-white" /> : 
                        <Lock className="w-3 h-3 text-white" />
                    }
                    </div>
                </div>
                <span className="text-sm text-muted-foreground">
                    {visibility === 'public' ? 'Anyone can join' : 'Invite only'}
                </span>
                </div>
            </div>
            </div>
        )} */}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
            variant="outline" 
            onClick={() => mode === GameMode.MultiplayerCustom ? navBackToMultiplayer() : navBackToSolo()}
            className="px-6 py-1 h-9"
            size="sm"
        >
            Back
        </Button>
        <Button 
            onClick={handleStartGame}
            className="px-6 py-1 h-9"
            size="sm"
        >
            Start Game
        </Button>
        </div>
    </div>
  );
};

export default GameSettings;