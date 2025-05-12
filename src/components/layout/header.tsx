"use client"

import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <div 
        className="flex items-center cursor-pointer" 
      >
        <h1 className="text-3xl font-fraktur text-lingo-purple mr-2">Lingo</h1>
        <span className="text-sm bg-lingo-purple px-2 py-1 rounded-full text-white">together</span>
      </div>
      
      <nav className="hidden md:flex space-x-6">
        <Button 
          variant={location.pathname === "/" ? "default" : "ghost"}
          className="text-base"
        >
          Home
        </Button>
        <Button 
          variant={location.pathname === "/play" ? "default" : "ghost"}
          className="text-base"
        >
          Play
        </Button>
        <Button 
          variant={location.pathname === "/lobby" ? "default" : "ghost"}
          className="text-base"
        >
          Join Game
        </Button>
        <Button 
          variant={location.pathname === "/rules" ? "default" : "ghost"}
          className="text-base"
        >
          Rules
        </Button>
      </nav>
      
      <Button 
        variant="outline" 
        className="md:hidden"
        onClick={() => console.log("Open mobile menu")}
      >
        Menu
      </Button>
    </header>
  );
};

export default Header;