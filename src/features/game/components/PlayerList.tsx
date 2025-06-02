import React from 'react';
import { User } from 'lucide-react';

interface PlayerListProps {
  players: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Players</h2>
      
      <ul className="space-y-2">
        {players.map((player) => (
          <li 
            key={player.id}
            className={`flex items-center justify-between p-3 rounded-md transition-colors ${
              player.isCurrentTurn ? 'bg-lingo-purple bg-opacity-20' : 'bg-muted'
            } ${
              player.isCurrentPlayer ? 'border-l-4 border-lingo-purple' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-lingo-purple bg-opacity-30 flex items-center justify-center mr-3">
                <User className="w-4 h-4" />
              </div>
              <span className={player.isCurrentTurn ? 'font-semibold' : ''}>{player.name}</span>
              {player.isCurrentTurn && (
                <span className="ml-2 text-xs bg-lingo-purple px-2 py-0.5 rounded-full text-white">
                  Current Turn
                </span>
              )}
            </div>
            <div className="text-lg font-bold">{player.score}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;