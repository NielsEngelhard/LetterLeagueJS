"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Logo from './logo';
import Link from 'next/link';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <Logo></Logo>
      </Link>
      
      <nav className="hidden md:flex space-x-6">
        <Button 
          href='/play/solo'
          variant={pathname.includes("/solo") ? "default" : "ghost"}
          className="text-base">
            Solo
        </Button>
        <Button 
          href='/play/multiplayer'
          variant={pathname.includes("/multiplayer") ? "default" : "ghost"}
          className="text-base">
            Multiplayer
        </Button>                
        <Button 
          href="/rules"
          variant={pathname.includes("/rules") ? "default" : "ghost"}
          className="text-base">
            Rules
        </Button>
      </nav>
      
      <Button 
        variant="outline" 
        className="md:hidden"
        onClick={() => console.log("Open mobile menu")}>
        Menu
      </Button>
    </header>
  );
};

export default Header;