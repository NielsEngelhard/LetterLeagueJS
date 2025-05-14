import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "bg-card rounded-xl p-6 text-center flex flex-col h-64 shadow-lg transform transition-transform hover:scale-105",
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
}

export default function Card({ children, className, variant }: CardProps) {
    return (
      <div className={cn(cardVariants({ variant }), className)}>
        {children}
      </div>
    );
}