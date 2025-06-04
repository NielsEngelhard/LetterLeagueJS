import VirtualKeyboard from '@/components/shared/keyboard/VirtualKeyboard';
import { PlayerGuess, WordHint } from '../game-models';
import WordRow from './WordRow';
import Card from '@/components/ui/card/card';

interface GameBoardProps {
  maxAttempts: number;
  guesses: PlayerGuess[];
  hint: WordHint;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  hint, 
  maxAttempts,
  guesses,
}) => {

  const totalEmptyRows = maxAttempts - guesses.length;

  return (
    <Card>
        <div>
          {guesses.map((playerGuess, i) => (
            <WordRow key={`playerguess-${i}`} length={2} prefilledWord={playerGuess.guess} />
          ))}

          {/* // Fill in emty rows */}
          {Array.from({ length: totalEmptyRows }).map((_, index) => (
            <WordRow
              key={index}
              length={hint.wordLength}
              firstLetter={hint.startingLetter}
              
            />
          ))}             
        </div>

        <div>
          <VirtualKeyboard
            onBackspace={() => {}}
            onEnter={() => {}}
            onKeyPress={(key: string) => {}}
          />
        </div>
    </Card>
  );
};

export default GameBoard;