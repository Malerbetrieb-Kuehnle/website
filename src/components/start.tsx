import { useState } from "react";
import { Link } from "react-router-dom";
import { farbtoene } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { cn } from "@/lib/utils";

export default function Start() {
  const [active, setActive] = useState(0);
  // Fotos laden erst, wenn jemand den Farbton ansteuert
  const [geladen, setGeladen] = useState<number[]>([0]);
  const ton = farbtoene[active];

  const vormerken = (index: number) =>
    setGeladen((liste) => (liste.includes(index) ? liste : [...liste, index]));

  return (
    <section
      aria-label="Farbe schafft Atmosphäre"
      className="flex h-[calc(100svh-var(--header)-1px)] min-h-[34rem] flex-col"
    >
      <div
        className="relative flex-1 overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: ton.hex }}
      >
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
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                index === active ? "opacity-100" : "opacity-0",
              )}
              {...(index === 0 ? { fetchpriority: "high" } : {})}
            />
          ) : null,
        )}

        {/* Farbtupfer wie auf unseren Fahrzeugen */}
        <div
          className={cn(
            "absolute bottom-4 left-4 flex aspect-square w-[min(calc(100vw-2rem),max(60svh,20rem),44rem)] flex-col items-center justify-center rounded-full p-6 text-center transition-colors duration-500 motion-safe:animate-tupfer sm:bottom-6 sm:left-6 lg:left-10 2xl:left-16",
            ton.hell ? "text-white" : "text-foreground",
          )}
          style={{ backgroundColor: ton.hex }}
        >
          <p className="text-sm sm:text-base">
            Malerbetrieb Kühnle, Bad Aibling
          </p>
          <h1 className="my-3 font-serif text-[clamp(2.25rem,min(11.5vw,7.2svh),5.5rem)] leading-[1.02] sm:my-4">
            Farbe <br />
            schafft <br />
            Atmosphäre.
          </h1>
          <Link
            to="/kontakt"
            className="py-1 underline decoration-1 underline-offset-4 hover:no-underline"
          >
            Rückruf vereinbaren
          </Link>
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
              onClick={() => {
                vormerken(index);
                setActive(index);
              }}
              onPointerEnter={() => vormerken(index)}
              onFocus={() => vormerken(index)}
              style={{ backgroundColor: item.hex, flexGrow: aktiv ? 3 : 1 }}
              className={cn(
                "relative basis-0 overflow-hidden px-3 text-left leading-tight transition-[flex-grow] duration-500 ease-out focus-visible:-outline-offset-4 sm:px-4",
                item.hell ? "text-white" : "text-foreground",
              )}
            >
              <span
                className={cn(
                  "block whitespace-nowrap text-sm font-medium sm:text-base",
                  !aktiv && "max-lg:sr-only",
                )}
              >
                {item.name}
              </span>
              {aktiv && (
                <span className="block whitespace-nowrap text-sm">
                  {item.projekt}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
