import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

export type TileStatus = "correct" | "wrong-position" | "incorrect" | "idle" | "active";

interface LetterTileProps {
  letter: string;
  status: TileStatus;
  delay?: number;
}

const LetterTile: React.FC<LetterTileProps> = ({ letter, status, delay = 0 }) => {
  const [showLetter, setShowLetter] = useState(status !== "idle" || letter === "");

  useEffect(() => {
    if (letter && delay > 0) {
      const timer = setTimeout(() => {
        setShowLetter(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [letter, delay]);

  const statusClasses = {
    "correct": "letter-correct",
    "wrong-position": "letter-wrong-position",
    "incorrect": "letter-incorrect",
    "idle": "letter-idle",
    "active": "letter-active",
  };

  return (
    <div 
      className={cn(
        "letter-tile",
        statusClasses[status],
        !showLetter && "bg-muted"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {showLetter ? letter.toUpperCase() : ""}
    </div>
  );
};

export default LetterTile;