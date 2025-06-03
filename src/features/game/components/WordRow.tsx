import React from 'react';
import LetterTile from './LetterTile';
import { ValidatedLetter } from '@/features/words/letter-models';

interface WordRowProps {
  length: number;  
  prefilledWord?: ValidatedLetter[];
  firstLetter?: string;
}

const WordRow: React.FC<WordRowProps> = ({ 
  length,  
  prefilledWord,
  firstLetter,
}) => {

  function showEmptyRow() {
    var emptyTiles = Array.from({ length });
    
    return emptyTiles.map((x, i) => {
      return <LetterTile
              key={`empty-tile-${i}`}
              status={(firstLetter && i==0) ? 'correct' : 'idle'}
              letter={(firstLetter && i==0) ? firstLetter : ''}
              />
    });
  }

  function showPrefilledRow() {
    return (
      prefilledWord?.map((validatedLetter, index) => (
        <LetterTile
          key={`${index}-${validatedLetter.letter}`} 
          letter={validatedLetter.letter}
          status={validatedLetter.status}
        />
      ))
    );
  }

  return (
    <div className="flex gap-2 my-2 justify-center">

      {prefilledWord != undefined
      ?
        showPrefilledRow()
      :
        showEmptyRow()
      }
    </div>
  );
};

export default WordRow;
