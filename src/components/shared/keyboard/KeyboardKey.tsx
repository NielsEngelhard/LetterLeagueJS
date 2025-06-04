import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const keyboardKeyVariants = cva(
  "w-8 h-10 text-sm font-semibold border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-lingo-lightBg text-foreground border-muted hover:bg-primary/20",
        correct: "bg-letter-correct text-white border-primary",
        wrongPosition: "bg-wrong-position text-white border-primary",
        incorrect: "bg-incorrect text-white border-primary",
        big: "px-3 py-2 text-xs font-semibold text-white hover:bg-primary/80 transition-all duration-200 min-w-[60px]"
      }
    }
  }
);

interface Props {
  keyValue?: string;
  onKeyPress: (key?: string) => void;
  disabled: boolean;
  variant?: "default" | "correct" | "wrongPosition" | "incorrect" | "big";
  className?: string;
  children?: React.ReactNode;
}

export default function KeyboardKey({
  keyValue,
  onKeyPress,
  disabled,
  variant = "default",
  className,
  children,
}: Props) {
  return (
    <Button
      onClick={() => onKeyPress(keyValue)}
      disabled={disabled}
      className={cn(keyboardKeyVariants({ variant }), className)}
    >
      {keyValue && keyValue.toUpperCase()}
      {children}
    </Button>
  );
}