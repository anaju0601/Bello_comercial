import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatCard({
  icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[#005CAA]">
        {icon}
      </div>

      <h3 className="text-[22px] font-bold leading-none text-slate-900">
        {value}
      </h3>

      <p className="text-[15px] text-slate-500">
        {label}
      </p>
    </div>
  );
}