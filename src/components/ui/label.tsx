import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", ...props }: LabelProps) {
  const baseClass =
    "flex items-center gap-2 text-sm leading-none font-medium select-none";

  const disabledClass =
    "pointer-events-none opacity-50 cursor-not-allowed";

  const combinedClassName = [
    baseClass,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <label className={combinedClassName} {...props} />;
}
