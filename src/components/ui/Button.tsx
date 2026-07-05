import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-[#005CAA] text-white hover:bg-[#004b8c]":
            variant === "primary",

          "border border-[#005CAA] text-[#005CAA] hover:bg-[#005CAA] hover:text-white":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}