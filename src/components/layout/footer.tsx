import { APP_NAME } from '@/lib/global-constants';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-6 border-t border-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="font-fraktur text-xl text-lingo-purple">{APP_NAME} Together</h2>
          <p className="text-muted-foreground text-sm">Play solo or multiplayer!</p>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="font-semibold mb-2">Game</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><a href="/play" className="hover:text-foreground transition-colors">Play Now</a></li>
              <li><a href="/lobby" className="hover:text-foreground transition-colors">Join Game</a></li>
              <li><a href="/rules" className="hover:text-foreground transition-colors">Rules</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Created by Turing Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;