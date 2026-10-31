import { useEffect, useRef } from "react";

export const bewegungReduziert = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Schreibt den Scroll-Fortschritt als CSS-Variable --f (0 bis 1) aufs Element.
// Die Bewegung selbst steht im CSS, React muss dafür nicht neu rendern.
export function useScrollFortschritt<T extends HTMLElement>(
  berechnen: (box: DOMRect, fensterhoehe: number) => number
) {
  const element = useRef<T>(null);

  useEffect(() => {
    const ziel = element.current;
    if (!ziel || bewegungReduziert()) return;

    let frame = 0;
    const messen = () => {
      frame = 0;
      const wert = berechnen(ziel.getBoundingClientRect(), window.innerHeight);
      ziel.style.setProperty("--f", Math.min(1, Math.max(0, wert)).toFixed(4));
    };
    const anfordern = () => {
      if (!frame) frame = requestAnimationFrame(messen);
    };

    messen();
    window.addEventListener("scroll", anfordern, { passive: true });
    window.addEventListener("resize", anfordern);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", anfordern);
      window.removeEventListener("resize", anfordern);
    };
  }, [berechnen]);

  return element;
}
