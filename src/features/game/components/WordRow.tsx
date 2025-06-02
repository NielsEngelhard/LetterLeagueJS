import React from 'react';
import LetterTile from './LetterTile';
import { ValidatedLetter } from '@/features/words/letter-models';

interface WordRowProps {
  length: number;  
  isActive?: boolean;
  prefilledWord?: ValidatedLetter[];
}

const WordRow: React.FC<WordRowProps> = ({ 
  length,  
  prefilledWord,
  isActive = false,
}) => {

  function showEmptyRow() {
    var emptyTiles = Array.from({ length });
    
    return emptyTiles.map((x, i) => {
      return <LetterTile key={`empty-tile-${i}`} letter='' status='idle' />
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
