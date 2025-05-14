"use client";

import React from "react";
import { Button } from "../ui/button";
import Card from "../ui/card/card";

interface Props {
    title: string;
    subText: string;
    btnText: string;
    Icon: React.ElementType;
    onClick?: () => void;
}

export default function PickGameModeCard({title, subText, btnText, Icon, onClick}: Props) {
  return (
    <Card centerContent={true} growOnHover={true} onClick={onClick}>
        <div className="mb-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
            {subText}
        </p>
        <Button className="w-full">
            {btnText}
        </Button>        
    </Card>
  );
}