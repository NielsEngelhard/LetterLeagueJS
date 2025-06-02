import { PlayerGuess } from '../game-models';
import WordRow from './WordRow';
import Card from '@/components/ui/card/card';

interface GameBoardProps {
  wordLength: number;
  maxAttempts: number;
  guesses: PlayerGuess[];
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  wordLength, 
  maxAttempts,
  guesses,
}) => {

  const totalEmptyRows = maxAttempts - guesses.length;

  return (
    <Card>

      {guesses.map((playerGuess, i) => (
        <WordRow key={`playerguess-${i}`} length={2} prefilledWord={playerGuess.guess} />
      ))}

      {/* // Fill in emty rows */}
      {Array.from({ length: totalEmptyRows }).map((_, index) => (
        <WordRow key={index} length={wordLength} />
      ))}
    </Card>
  );
};

export default GameBoard;