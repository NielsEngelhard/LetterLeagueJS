import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WordRow from './WordRow';

interface GameBoardProps {
  targetWord: string;
  maxAttempts?: number;
  onGameOver?: (won: boolean) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  targetWord, 
  maxAttempts = 6,
  onGameOver = () => {} 
}) => {
  const [attempts, setAttempts] = useState<string[]>([""]);
  const [currentAttemptIndex, setCurrentAttemptIndex] = useState(0);
  const [submittedIndices, setSubmittedIndices] = useState<number[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  
  // Reset game if target word changes
  useEffect(() => {
    resetGame();
  }, [targetWord]);
  
  const resetGame = () => {
    setAttempts([""]);
    setCurrentAttemptIndex(0);
    setSubmittedIndices([]);
    setGameStatus("playing");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (gameStatus !== "playing") return;
    
    const currentAttempt = attempts[currentAttemptIndex] || "";
    
    if (e.key === "Enter") {
      submitAttempt();
    } else if (e.key === "Backspace") {
      // Remove last letter
      if (currentAttempt.length > 0) {
        updateCurrentAttempt(currentAttempt.slice(0, -1));
      }
    } else if (/^[a-zA-Z]$/.test(e.key) && currentAttempt.length < targetWord.length) {
      // Add letter
      updateCurrentAttempt(currentAttempt + e.key.toLowerCase());
    }
  };
  
  const updateCurrentAttempt = (value: string) => {
    const newAttempts = [...attempts];
    newAttempts[currentAttemptIndex] = value;
    setAttempts(newAttempts);
  };
  
  const submitAttempt = () => {
    const currentAttempt = attempts[currentAttemptIndex];
    
    // Validate word length
    if (currentAttempt.length !== targetWord.length) {
      return;
    }
    
    // Mark as submitted
    setSubmittedIndices([...submittedIndices, currentAttemptIndex]);
    
    // Check if won
    if (currentAttempt === targetWord) {
      setGameStatus("won");
      onGameOver(true);
      return;
    }
    
    // Check if lost
    if (currentAttemptIndex >= maxAttempts - 1) {
      setGameStatus("lost");
      onGameOver(false);
      return;
    }
    
    // Move to next attempt
    setCurrentAttemptIndex(currentAttemptIndex + 1);
    setAttempts([...attempts, ""]);
  };
  
  // Generate empty rows to fill up to max attempts
  const fillerRows = Array(Math.max(0, maxAttempts - attempts.length))
    .fill("")
    .map((_, index) => (
      <WordRow
        key={`filler-${index}`}
        word=""
        target={targetWord}
        isActive={false}
        isSubmitted={false}
        maxLength={targetWord.length}
      />
    ));
  
  return (
    <div className="w-full max-w-md mx-auto" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="mb-6">
        {attempts.map((attempt, index) => (
          <WordRow
            key={index}
            word={attempt}
            target={targetWord}
            isActive={index === currentAttemptIndex && gameStatus === "playing"}
            isSubmitted={submittedIndices.includes(index)}
            maxLength={targetWord.length}
          />
        ))}
        {fillerRows}
      </div>
      
      {gameStatus === "playing" && (
        <div className="flex justify-center">
          <Button 
            onClick={submitAttempt} 
            className="px-8"
            disabled={attempts[currentAttemptIndex]?.length !== targetWord.length}
          >
            Submit
          </Button>
        </div>
      )}
      
      {gameStatus !== "playing" && (
        <div className="flex justify-center">
          <Button onClick={resetGame} variant="outline" className="px-8">
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;