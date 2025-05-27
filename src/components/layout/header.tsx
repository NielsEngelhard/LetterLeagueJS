"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './logo';
import Link from 'next/link';
import { User, UserPlus } from 'lucide-react';
import HeaderNavItem from './headerNavItem';
import { useAuth } from '@/features/auth/auth-context';

const Header = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <Logo></Logo>
      </Link>
      
      <nav className="hidden md:flex space-x-6">
        <HeaderNavItem href="/" text="Home" />       
        <HeaderNavItem href="/play/solo" text="Solo" />       
        <HeaderNavItem href="/play/multiplayer" text="Multiplayer" />       
        <HeaderNavItem href="/rules" text="Rules" />       
      </nav>

      {!isLoggedIn ? (
      <div className='flex flex-row gap-2'>
        <Button 
          href="/login"
          variant="ghost"
          className="text-base">
            Log In
        </Button>
        <Button 
          href="/signup"
          variant="default"
          className="text-base">
             <UserPlus></UserPlus> Sign Up
        </Button>        
      </div>        
      ) : (
        <Button 
          href="/profile"
          variant="default"
          className="text-base">
             <User></User> {user?.username}
        </Button>    
      ) }
      
      {/* <Button 
        variant="outline" 
        className="md:hidden"
        onClick={() => console.log("Open mobile menu")}>
        Menu
      </Button> */}
    </header>
  );
};

export default Header;