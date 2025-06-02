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

      {guesses.map((playerGuess) => (
        <WordRow length={2} prefilledWord={playerGuess.guess} />
      ))}

      {/* // Fill in emty rows */}
      {Array.from({ length: totalEmptyRows }).map((_, index) => (
        <WordRow key={index} length={wordLength} />
      ))}


      {/* <WordRow isActive={true} length={5} prefilledWord={[
        { position: 1, letter: 'a', status: "correct" },
        { position: 2, letter: 'b', status: "incorrect" },
        { position: 3, letter: 'c', status: "wrong-position" },
        { position: 4, letter: 'd', status: "correct" },
        { position: 5, letter: 'e', status: "wrong-position" },
      ]}></WordRow>
      <WordRow isActive={true} length={5}></WordRow>
      <WordRow isActive={true} length={5}></WordRow>
      <WordRow isActive={true} length={5}></WordRow>
      <WordRow isActive={true} length={5}></WordRow> */}
    </Card>
  );
};

export default GameBoard;