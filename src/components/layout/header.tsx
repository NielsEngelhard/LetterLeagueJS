"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Logo from './logo';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <Logo></Logo>
      
      <nav className="hidden md:flex space-x-6">
        <Button 
          href="/"
          variant={pathname.startsWith("/") ? "default" : "ghost"}
          className="text-base"
        >
          Home
        </Button>
        <Button 
          variant={pathname.startsWith("/play") ? "default" : "ghost"}
          className="text-base"
        >
          Play
        </Button>
        <Button 
          variant={pathname.startsWith("/lobby") ? "default" : "ghost"}
          className="text-base">
          Join Game
        </Button>
        <Button 
          href="/rules"
          variant={pathname.startsWith("/rules") ? "default" : "ghost"}
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