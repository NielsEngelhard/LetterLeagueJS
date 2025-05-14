import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "bg-card rounded-xl p-6 flex flex-col shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        clickable: "border",
      },
    },
  }
)

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;  
  className?: string;
  centerContent?: boolean;
  growOnHover?: boolean;
}

export default function Card({ 
  children, 
  className, 
  variant, 
  centerContent = false,
  growOnHover = false
}: CardProps) {
  return (
    <div 
      className={cn(
        cardVariants({ variant }), 
        centerContent && "justify-center items-center text-center", 
        growOnHover && "transform transition-transform hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}