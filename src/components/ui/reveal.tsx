import { createElement, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  art?: "text" | "foto";
  as?: "div" | "li" | "figure";
  verzoegerung?: number;
  className?: string;
}

// Blendet Inhalte einmalig ein, sobald sie ins Bild scrollen
export default function Reveal({
  children,
  art = "text",
  as = "div",
  verzoegerung = 0,
  className,
}: RevealProps) {
  const element = useRef<HTMLElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (!eintrag.isIntersecting) return;
        setSichtbar(true);
        beobachter.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    beobachter.observe(element.current!);
    return () => beobachter.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref: element,
      style: { transitionDelay: `${verzoegerung}ms` },
      className: cn(
        art === "foto" ? "reveal-foto" : "reveal-text",
        sichtbar && "reveal-sichtbar",
        className
      ),
    },
    children
  );
}
