import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/ui/card/card';
import LetterTile from '@/components/ui/letterTile';
import React from 'react';

const Rules: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <PageTitle title='How to Play' subText='Learn the rules'></PageTitle>
      
      <Card>
        <h2 className="text-2xl font-fraktur mb-6">Game Rules</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Objective</h3>
            <p className="text-muted-foreground">
              Guess the secret word within the allowed number of attempts. Each player takes turns guessing words, and points are awarded for correct guesses. Based on the game mode you can earn points per correct word or per correct letter. 
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Gameplay</h3>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Players take turns to guess words of the specified length.</li>
              <li>After each guess, you'll receive feedback on your word.</li>
              <li>You have a limited number of attempts to guess the word.</li>
              <li>Score points by successfully guessing letters and/or words.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Word Feedback</h3>
            <p className="text-muted-foreground mb-3">
              After each guess, the letters will be colored to provide feedback:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <LetterTile letter="A" status="correct" />
                <div className="text-sm">
                  <span className="font-medium">Green:</span> Correct letter in the correct position
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <LetterTile letter="B" status="wrong-position" />
                <div className="text-sm">
                  <span className="font-medium">Orange:</span> Correct letter but in the wrong position
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <LetterTile letter="C" status="incorrect" />
                <div className="text-sm">
                  <span className="font-medium">Gray:</span> Letter is not in the word
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Example</h3>
            <p className="text-muted-foreground mb-3">
              If the secret word is "GAMES":
            </p>
            
            <div className="mb-3 flex flex-wrap gap-2">
              <LetterTile letter="G" status="correct" />
              <LetterTile letter="R" status="incorrect" />
              <LetterTile letter="A" status="wrong-position" />
              <LetterTile letter="S" status="incorrect" />
              <LetterTile letter="S" status="correct" />
            </div>
            
            <p className="text-sm text-muted-foreground">
              In this example: G and S are in the right position, A is in the word but in the wrong position, and R and the second S are not in the remaining slots.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Based on the mode of the game, points are assigned. The player with the most points at the end wins the game.
              </p>

            <h4 className="text-lg font-semibold mb-2">Letter mode</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>3 points for each letter correctly guessed without being "wrong position" first;</li>
              <li>1 point for each letter correctly guesed after being it in the wrong position first;</li>
              <li>1 point for each letter guessed at the wrong place;</li>
              <li>2 points for guessing the word.</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Word mode</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>1 point for each word correctly guessed;</li>
              <li>Bonus point (1) for guessing in less than 4 attempts;</li>
            </ul>


          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-fraktur mb-6">Tips for Success</h2>
        
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Start with common words that contain frequent letters (E, A, R, I, O)</li>
          <li>Pay attention to the feedback after each guess</li>
          <li>If a letter is shown as correct, keep it in the same position in your next guess</li>
          <li>If a letter is shown as being in the wrong position, try placing it in different spots</li>
          <li>Eliminate letters that are shown as incorrect in future guesses</li>
        </ul>
      </Card>
      </div>
  );
};

export default Rules;