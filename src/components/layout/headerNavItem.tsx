"use client";

import { Button } from "../ui/button";
import { usePathname } from 'next/navigation';

interface Props {
    text: string;
    href: string;
}

export default function HeaderNavItem({text, href}: Props) {
    const pathname = usePathname();
    
    return (
        <Button 
          href={href}
          variant={(pathname.startsWith(href) && href != "/") || (href == "/" && pathname == "/") ? "default" : "ghost"}
          className="text-base">
            {text}
        </Button> 
    );
}