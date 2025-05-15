import * as React from "react"
import { cn } from "@/lib/utils" // Keep this if you use a classnames helper

type SeparatorProps = {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={decorative ? "presentation" : "separator"}
        aria-orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"

export { Separator }
