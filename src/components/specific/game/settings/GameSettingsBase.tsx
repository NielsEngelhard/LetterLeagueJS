"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import WordLengthSettings from './WordLengthSettings';
import MaxAttemptSettings from './MaxAttemptSettings';
import TimePerTurnSettings from './TimePerTurnSettings';
import Card from '@/components/ui/card/card';
import GameVisibilitySettings from './GameVisibilitySettings';
import { ArrowLeft } from 'lucide-react';

interface GameSettingsProps {
  onBackClick?: () => void;
  isSubmitting?: boolean;
}

const GameSettingsBase: React.FC<GameSettingsProps> = ({ onBackClick, isSubmitting }: GameSettingsProps) => {

  return (
    <div className=''>
        
        <Card className='flex flex-col gap-6'>
            <WordLengthSettings name='wordLength'></WordLengthSettings>
        
            <MaxAttemptSettings name='maxAttempts'></MaxAttemptSettings>

            <TimePerTurnSettings name='timePerTurn'></TimePerTurnSettings>      

            <GameVisibilitySettings name='visibility'></GameVisibilitySettings>      
        </Card>

        <div className='flex items-center relative mt-6'>
            
            {/* Back btn */}
            <div className='mr-auto'>
              <Button className='w-full' size="lg" variant="outline" onClick={onBackClick}><ArrowLeft/> Back</Button>
            </div>

            {/* Submit btn */}
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Button className='w-full' size="lg" disabled={isSubmitting}>Start Game</Button>
            </div>
        </div>
    </div>
  );
};

export default GameSettingsBase;