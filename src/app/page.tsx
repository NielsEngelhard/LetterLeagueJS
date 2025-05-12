import React from 'react';
import { Button } from '@/components/ui/button';
import LetterTile from '@/components/ui/letterTile';
import { APP_NAME } from '@/lib/global-constants';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-lingo-darkBg">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-special text-4xl md:text-6xl lg:text-7xl mb-6 text-primary">
              {APP_NAME} Together
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground">
              The classic Dutch word game, now multiplayer. Challenge your friends to find the hidden words before time runs out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8"
              >
                Start Playing
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg"
              >
                How to Play
              </Button>
            </div>
            
            {/* Demo Preview */}
            <div className="bg-card rounded-xl p-6 md:p-8 max-w-xl mx-auto shadow-lg">
              <div className="flex justify-center mb-4 gap-3">
                <LetterTile letter="L" status="correct" />
                <LetterTile letter="I" status="wrong-position" />
                <LetterTile letter="N" status="correct" />
                <LetterTile letter="G" status="incorrect" />
                <LetterTile letter="O" status="correct" />
              </div>
              <div className="text-muted-foreground text-sm">
                Guess the secret word - green means correct position, yellow means right letter but wrong position!
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-fraktur text-3xl md:text-4xl mb-12 text-center">Game Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Multiplayer Gameplay</h3>
                <p className="text-muted-foreground">
                  Play in real-time with friends or family. Take turns guessing words and score points for correct answers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Custom Game Settings</h3>
                <p className="text-muted-foreground">
                  Choose word length, number of attempts, and more. Create the perfect challenge for your group.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
                <p className="text-muted-foreground">
                  Modern interface with the distinctive Fraktur font for a unique gaming experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-fraktur text-2xl md:text-3xl mb-6">Ready to Challenge Your Friends?</h2>
            <p className="text-muted-foreground mb-8">
              Create a game room and invite your friends to join. See who can guess the most words!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10"
            >
              Create Game Room
            </Button>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Home;