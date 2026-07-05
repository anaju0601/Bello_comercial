import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-14",
        centered ? "text-center" : "text-left"
      )}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold leading-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}