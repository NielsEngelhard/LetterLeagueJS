import React from 'react';
import LetterTile, { TileStatus } from './LetterTile';

interface WordRowProps {
  word: string;
  target: string;
  isActive: boolean;
  isSubmitted: boolean;
  maxLength: number;
}

const WordRow: React.FC<WordRowProps> = ({ 
  word = "", 
  target = "", 
  isActive, 
  isSubmitted, 
  maxLength = 5 
}) => {
  // Fill the word with empty spaces to match maxLength
  const normalizedWord = word.padEnd(maxLength, " ");
  const letters = normalizedWord.split("");
  
  // Calculate the status for each letter
  const getLetterStatus = (letter: string, index: number): TileStatus => {
    if (!letter.trim()) return "idle";
    if (!isSubmitted) return isActive ? "active" : "idle";
    
    // If submitted, determine correctness
    if (letter === target[index]) return "correct";
    if (target.includes(letter)) return "wrong-position";
    return "incorrect";
  };
  
  return (
    <div className="flex gap-2 my-2 justify-center">
      {letters.map((letter, index) => (
        <LetterTile
          key={`${index}-${letter}`} 
          letter={letter}
          status={getLetterStatus(letter, index)}
          delay={isSubmitted ? index * 150 : 0}
        />
      ))}
    </div>
  );
};

export default WordRow;
