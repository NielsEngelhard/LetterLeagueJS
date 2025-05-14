import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  id: string; 
  checked: boolean;
  onToggle: () => void;
  label?: string;
}

export default function Checkbox({ id, checked, onToggle, label }: CheckboxProps) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={id} className="cursor-pointer flex items-center">
        {/* Hidden Checkbox */}
        <input
          id={id}
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onToggle}
        />
        {/* Custom Checkbox Visual */}
        <div
          className={cn(
            "h-4 w-4 shrink-0 rounded-sm border border-primary flex items-center justify-center",
            checked ? "bg-primary text-primary-foreground" : ""
          )}
        >
          {checked && <Check className="h-4 w-4" />}
        </div>
      </label>

      {/* Label Text */}
      {label && (
        <label
          htmlFor={id}
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
        >
          {label}
        </label>        
      )}
    </div>
  );
}
