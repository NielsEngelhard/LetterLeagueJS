"use client";

import React from 'react';
import PageTitle from '@/components/layout/pageTitle';
import JoinGameCard from '@/components/specific/game/action-cards/JoinGameCard';
import CreateGameCard from '@/components/specific/game/action-cards/CreateGameCard';
import AvailableRoomsCard from '@/components/specific/game/action-cards/AvailableRoomsCard';


const Play: React.FC = () => {
  
  return (
    <div>
      <PageTitle title='Multiplayer Game' subText='Join an existing game or create your own'></PageTitle>
      
      <div className='flex flex-col gap-4'>
          <JoinGameCard></JoinGameCard>
          
          <CreateGameCard></CreateGameCard>
          
          <AvailableRoomsCard></AvailableRoomsCard>        
      </div>
    </div>
  );
};

export default Play;