import { Menu, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import Navigation from "./Navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const Icon = isOpen ? X : Menu;

  return (
    <div
      className="lg:hidden"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (isOpen && event.key === "Escape") {
          event.preventDefault();
          triggerRef.current?.focus();
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls={navigationId}
        className="inline-flex size-11 items-center justify-center rounded-xl text-(--color-primary) hover:bg-blue-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon size={22} aria-hidden="true" />
      </button>

      <Navigation
        id={navigationId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--site-header-height))] space-y-1 overflow-y-auto border-y border-slate-200 bg-white px-6 py-3 shadow-sm [&>a]:flex [&>a]:min-h-11 [&>a]:items-center"
        onNavigate={() => setIsOpen(false)}
      />
    </div>
  );
}
