import type { ComponentPropsWithoutRef } from "react";

export default function NavItem({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="text-sm font-medium text-slate-700 transition-colors hover:text-[#005CAA]"
    >
      {children}
    </a>
  );
}
