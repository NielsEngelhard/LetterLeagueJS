"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { GameMode, GameVisibility } from '@/lib/game-constants';
import { useRouter } from 'next/navigation';
import WordLengthSettings from './WordLengthSettings';
import MaxAttemptSettings from './MaxAttemptSettings';
import TimePerTurnSettings from './TimePerTurnSettings';
import Card from '@/components/ui/card/card';
import GameVisibilitySettings from './GameVisibilitySettings';
import { ArrowLeft } from 'lucide-react';

interface GameSettingsProps {
    mode: GameMode;
    visibility?: GameVisibility;
}

const GameSettings: React.FC<GameSettingsProps> = ({mode, visibility = GameVisibility.Private }: GameSettingsProps) => {
  const router = useRouter();

  const handleStartGame = () => {
    console.log("handle start game");
  };

  function handleBackClicked() {
    if (mode == GameMode.MultiplayerCustom) {
      router.push('/play/multiplayer')
    } else {
      router.push('/play/solo')
    }
  }

  return (
    <div className=''>
        
        <Card className='flex flex-col gap-6'>
            <WordLengthSettings></WordLengthSettings>
        
            <MaxAttemptSettings></MaxAttemptSettings>

            <TimePerTurnSettings></TimePerTurnSettings>      

            <GameVisibilitySettings></GameVisibilitySettings>      
        </Card>

        <div className='flex items-center relative mt-6'>
            
            {/* Back btn */}
            <div className='mr-auto'>
              <Button className='w-full' size="lg" variant="outline" onClick={handleBackClicked}><ArrowLeft/> Back</Button>
            </div>

            {/* Submit btn */}
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Button className='w-full' size="lg" onClick={handleStartGame}>Start Game</Button>
            </div>
        </div>
    </div>
  );
};

export default GameSettings;