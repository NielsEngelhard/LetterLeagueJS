import React from 'react';
import { User } from 'lucide-react';
import { InGamePlayer } from '../game-models';
import Card from '@/components/ui/card/card';

interface PlayerListProps {
  players: InGamePlayer[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Players</h2>
      
      <ul className="space-y-2">
        {players.map((player) => (
          <li 
            key={player.id}
            className={`flex items-center justify-between p-3 transition-colors ${
              player.isCurrentTurn ? 'bg-primary/20' : 'bg-muted'
            } ${
              player.isCurrentPlayer ? 'border-l-4 border-primary' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center mr-3">
                <User className="w-4 h-4" />
              </div>
              <span className={player.isCurrentTurn ? 'font-semibold' : ''}>{player.name}</span>
              {player.isCurrentTurn && (
                <span className="ml-2 text-xs bg-primary px-2 py-0.5 rounded-full text-white">
                  Current Turn
                </span>
              )}
            </div>
            <div className="text-lg font-bold">{player.score}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PlayerList;