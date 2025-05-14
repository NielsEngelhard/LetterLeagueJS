"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { GameMode, GameVisibility } from '@/lib/game-constants';
import { useRouter } from 'next/navigation';
import WordLengthSettings from './WordLengthSettings';
import MaxAttemptSettings from './MaxAttemptSettings';
import TimePerTurnSettings from './TimePerTurnSettings';
import Card from '@/components/ui/card';
import GameVisibilitySettings from './GameVisibilitySettings';

interface GameSettingsProps {
    mode: GameMode;
    visibility?: GameVisibility;
}

const GameSettings: React.FC<GameSettingsProps> = ({mode, visibility = GameVisibility.Private }: GameSettingsProps) => {
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
    <div>
        
        <Card className='flex flex-col gap-6'>
            <WordLengthSettings></WordLengthSettings>
        
            <MaxAttemptSettings></MaxAttemptSettings>

            <TimePerTurnSettings></TimePerTurnSettings>      

            <GameVisibilitySettings></GameVisibilitySettings>      
        </Card>
        
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