import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "bg-card rounded-xl flex flex-col shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground p-6",
        clickableOption: "rounded-none border-2 border- p-2 text-center font-bold text-lg cursor-pointer transition-all hover:border-primary",
      },
    },
  }
)

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;  
  className?: string;
  centerContent?: boolean;
  growOnHover?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className, 
  variant = "default", 
  centerContent = false,
  growOnHover = false,
  active = false,
  onClick
}: CardProps) {
  function onCardClick() {
    if (onClick) onClick();
  }

  return (
    <div 
      onClick={onCardClick}
      className={cn(
        cardVariants({ variant }), 
        centerContent && "justify-center items-center text-center", 
        growOnHover && "transform transition-transform hover:scale-105",
        active && "border-primary bg-muted",
        className
      )}
    >
      {children}
    </div>
  );
}