import React from 'react';
import { Calendar, BookOpen, Dices } from "lucide-react";
import PageTitle from '@/components/layout/pageTitle';
import PickGameModeCard from '@/components/specific/PickGameModeCard';

const Solo: React.FC = () => {
  
  return (
    <div>
      <PageTitle title='Solo Play' subText='Play a game all by yourself'></PageTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Word of the Day */}
        <PickGameModeCard
          title='Word of the Day'
          subText='A new challenge every day.'
          btnText='Play Daily'
          Icon={Calendar}
        ></PickGameModeCard>
        
        {/* Custom Game */}
        <PickGameModeCard
          title='Custom Game'
          subText='Choose your own difficulty level, word length, and number of attempts.'
          btnText='Create Custom'
          Icon={BookOpen}
        ></PickGameModeCard>
        
        {/* Random Game */}
        <PickGameModeCard
          title='Random Game'
          subText='Jump right in with a random word challenge of varying difficulty.'
          btnText='Play Random'
          Icon={Dices}
        ></PickGameModeCard>
      </div>
  </div>
  );
};

export default Solo;