import { createElement, Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const arten = {
  text: "reveal-text",
  titel: "reveal-titel",
  foto: "reveal-foto",
  kachel: "reveal-kachel",
};

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  art?: keyof typeof arten;
  as?: "div" | "li" | "figure";
  verzoegerung?: number;
  // Ganz unten auf der Seite kann der Inhalt die Auslöselinie nie erreichen
  ohneRand?: boolean;
}

// Spielt die Animation einmalig ab, sobald der Inhalt ins Bild scrollt
export default function Reveal({
  children,
  art = "text",
  as = "div",
  verzoegerung = 0,
  ohneRand = false,
  className,
  style,
  ...rest
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
      { rootMargin: ohneRand ? "0px" : "0px 0px -10% 0px" }
    );
    beobachter.observe(element.current!);
    return () => beobachter.disconnect();
  }, [ohneRand]);

  const verzoegert: CSSProperties = {
    transitionDelay: `${verzoegerung}ms`,
    ...style,
  };

  return createElement(
    as,
    {
      ...rest,
      ref: element,
      style: verzoegert,
      className: cn(arten[art], sichtbar && "reveal-sichtbar", className),
    },
    children
  );
}

// Überschriften: Jedes Wort gleitet einzeln aus einer Maske nach oben
export function WortMaske({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((wort, index) => (
        <Fragment key={index}>
          {index > 0 && " "}
          <span className="wort-maske">
            <span
              className="wort-innen"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {wort}
            </span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
