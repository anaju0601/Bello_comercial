interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#inicio" className={className}>
      <span className="text-2xl font-bold text-[#005CAA]">
        BELLO
      </span>
    </a>
  );
}