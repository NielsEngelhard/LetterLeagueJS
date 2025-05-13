import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Dices } from "lucide-react";
import PageTitle from '@/components/layout/pageTitle';

const Solo: React.FC = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-4xl mx-auto">

          <PageTitle title='Solo Play' subText='Play a game all by yourself'></PageTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Word of the Day */}
            <div className="bg-card rounded-xl p-6 text-center flex flex-col h-64 shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Word of the Day</h2>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                A new challenge every day. Can you solve today's word?
              </p>
              <Button className="w-full">
                Play Daily
              </Button>
            </div>
            
            {/* Custom Game */}
            <div className="bg-card rounded-xl p-6 text-center flex flex-col h-64 shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Custom Game</h2>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Choose your own difficulty level, word length, and number of attempts.
              </p>
              <Button 
                className="w-full"
              >
                Create Custom
              </Button>
            </div>
            
            {/* Random Game */}
            <div className="bg-card rounded-xl p-6 text-center flex flex-col h-64 shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Dices className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Random Game</h2>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Jump right in with a random word challenge of varying difficulty.
              </p>
              <Button 
                className="w-full"
              >
                Play Random
              </Button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Solo;