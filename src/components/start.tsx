import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { farbtoene } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { useScrollFortschritt } from "@/lib/bewegung";
import { cn } from "@/lib/utils";

const fortschritt = (box: DOMRect) => -box.top / box.height;

export default function Start() {
  const bereich = useScrollFortschritt<HTMLElement>(fortschritt);
  const [active, setActive] = useState(0);
  // Das bisherige Foto bleibt liegen, bis das neue es überrollt hat
  const [vorher, setVorher] = useState(0);
  // Fotos laden erst, wenn jemand den Farbton ansteuert
  const [geladen, setGeladen] = useState<number[]>([0]);
  const ton = farbtoene[active];

  const vormerken = (index: number) =>
    setGeladen((liste) => (liste.includes(index) ? liste : [...liste, index]));

  const waehlen = (index: number) => {
    if (index === active) return;
    vormerken(index);
    setVorher(active);
    setActive(index);
  };

  return (
    <section
      ref={bereich}
      aria-label="Farbe schafft Atmosphäre"
      className="flex h-[calc(100svh-var(--header)-1px)] min-h-[34rem] flex-col"
    >
      <div
        className="relative flex-1 overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: ton.hex }}
      >
        <div className="hero-foto absolute inset-0">
          {farbtoene.map((item, index) =>
            geladen.includes(index) ? (
              <img
                key={item.name}
                src={projektBild(item.bild)}
                srcSet={projektSrcSet(item.bild)}
                sizes="100vw"
                alt={index === active ? `${item.projekt} in ${item.name}` : ""}
                aria-hidden={index !== active}
                style={{ objectPosition: item.position }}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover",
                  index === active && "z-[2]",
                  index === active && vorher !== active && "wisch-ein",
                  index === vorher && index !== active && "z-[1]",
                  index !== active && index !== vorher && "invisible"
                )}
                {...(index === 0 ? { fetchpriority: "high" } : {})}
              />
            ) : null
          )}
        </div>

        {/* Am Handy ist die Farbleiste zu schmal für Beschriftungen */}
        <p className="hero-inhalt absolute left-0 top-0 z-[3] bg-white px-3 py-1.5 font-medium text-foreground sm:hidden">
          {ton.name}, {ton.projekt}
        </p>

        {/* Farbtupfer wie auf unseren Fahrzeugen. Beim Scrollen flutet er das Foto. */}
        <div className="hero-kreis absolute bottom-4 left-4 z-[3] aspect-square w-[min(calc(100vw-2rem),max(60svh,20rem),44rem)] sm:bottom-6 sm:left-6 lg:left-10 2xl:left-16">
          <div
            className={cn(
              "h-full w-full rounded-full p-6 transition-colors duration-500 [animation-delay:450ms] motion-safe:animate-tupfer",
              ton.hell ? "text-white" : "text-foreground"
            )}
            style={{ backgroundColor: ton.hex }}
          >
            <div className="hero-inhalt flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm [animation-delay:750ms] motion-safe:animate-einblenden sm:text-base">
                Ihr Meisterbetrieb in Bad Aibling
              </p>
              <h1 className="my-3 text-[clamp(2.25rem,min(11.5vw,7.2svh),5.5rem)] leading-[1.05] [animation-delay:850ms] motion-safe:animate-einblenden sm:my-4">
                Farbe <br />
                schafft <br />
                Atmosphäre.
              </h1>
              <div className="[animation-delay:950ms] motion-safe:animate-einblenden">
                <Button
                  asChild
                  className={cn(
                    ton.hell && "bg-white text-foreground hover:bg-white/90"
                  )}
                >
                  <Link to="/kontakt">Rückruf vereinbaren</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        role="group"
        aria-label="Farbton wählen und Projekt ansehen"
        className="flex h-16 shrink-0 sm:h-20"
      >
        {farbtoene.map((item, index) => {
          const aktiv = index === active;
          return (
            <button
              key={item.name}
              type="button"
              aria-pressed={aktiv}
              aria-label={`${item.name}, ${item.projekt}`}
              onClick={() => waehlen(index)}
              onPointerEnter={() => vormerken(index)}
              onFocus={() => vormerken(index)}
              style={{ backgroundColor: item.hex, flexGrow: aktiv ? 4 : 1 }}
              className={cn(
                "flex basis-0 items-end overflow-hidden px-4 pb-3 text-left leading-tight transition-[flex-grow] duration-500 ease-out focus-visible:outline-current focus-visible:-outline-offset-4",
                item.hell ? "text-white" : "text-foreground"
              )}
            >
              <span className="flex items-baseline gap-x-2 whitespace-nowrap max-sm:sr-only">
                <span className={cn("font-medium", !aktiv && "max-lg:sr-only")}>
                  {item.name}
                </span>
                {aktiv && <span className="text-sm">{item.projekt}</span>}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
