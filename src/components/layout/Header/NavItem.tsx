import type { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

export default function NavItem({
  href,
  children,
}: NavItemProps) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-700 transition-colors hover:text-[#005CAA]"
    >
      {children}
    </a>
  );
}