"use client";

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "bg-card rounded-xl flex flex-col shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground p-6",
        clickableOption: "rounded-none border-1 border- p-2 text-center font-bold text-md cursor-pointer transition-all hover:border-primary",
        clickableOptionMuted: "text-center border-1 border-muted p-2 text-muted-foreground rounded-none font-medium cursor-pointer",
      },
      active: {
        none: "",
        clickableOptionActive: "border-primary bg-primary/10",
        clickableOptionMutedActive: "text-primary bg-primary/10"
      }
    },
  }
)

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;  
  className?: string;
  centerContent?: boolean;
  growOnHover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className, 
  variant = "default", 
  active = "none",
  centerContent = false,
  growOnHover = false,
  onClick
}: CardProps) {

  function onCardClick() {
    if (onClick) onClick();
  }

  return (
    <div 
      onClick={onCardClick}
      className={cn(
        cardVariants({ variant, active }), 
        centerContent && "justify-center items-center text-center", 
        growOnHover && "transform transition-transform hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}