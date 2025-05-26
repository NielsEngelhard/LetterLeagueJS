import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"
import ErrorText from "./errorText";
import { FieldError } from "react-hook-form";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string
  fieldError?: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, fieldError, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className="flex flex-col gap-1 w-full">
        
        {/* Label */}
        {label && <Label className="ml-1" htmlFor={id}>{label}</Label>}
        
        {/* Input & Error Message */}
        <div className="flex flex-col gap-0">        
          <input id={inputId} type={type} ref={ref} {...props}
                    className={cn(
                      "flex h-10 w-full rounded-xs border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                      className
                    )}                    
          />
          {fieldError && <ErrorText>{fieldError.message}</ErrorText>}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
