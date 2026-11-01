import { useEffect, useState, useSyncExternalStore } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { farbtoene } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { bewegungReduziert, useScrollFortschritt } from "@/lib/bewegung";
import { cn } from "@/lib/utils";

const fortschritt = (box: DOMRect) => -box.top / box.height;
const keinAbo = () => () => {};

export default function Start() {
  const bereich = useScrollFortschritt<HTMLElement>(fortschritt);
  const [active, setActive] = useState(0);
  // Das bisherige Foto bleibt liegen, bis das neue es überrollt hat
  const [vorher, setVorher] = useState(0);
  // Geladen ist immer das aktuelle Foto und das nächste
  const [geladen, setGeladen] = useState<number[]>([0, 1]);

  // Der Wechsel läuft nur, solange ihn niemand stört
  const automatik = useSyncExternalStore(
    keinAbo,
    () => !bewegungReduziert(),
    () => false
  );
  const [angehalten, setAngehalten] = useState(false);
  const [wirdBedient, setWirdBedient] = useState(false);
  const [imBild, setImBild] = useState(true);
  const pausiert = angehalten || wirdBedient || !imBild;

  const ton = farbtoene[active];

  const vormerken = (index: number) =>
    setGeladen((liste) => (liste.includes(index) ? liste : [...liste, index]));

  const waehlen = (index: number) => {
    if (index === active) return;
    vormerken(index);
    vormerken((index + 1) % farbtoene.length);
    setVorher(active);
    setActive(index);
  };

  useEffect(() => {
    const beobachter = new IntersectionObserver(
      ([eintrag]) => setImBild(eintrag.isIntersecting),
      { threshold: 0.6 }
    );
    beobachter.observe(bereich.current!);
    return () => beobachter.disconnect();
  }, [bereich]);

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
                fetchPriority={index === 0 ? "high" : undefined}
              />
            ) : null
          )}
        </div>

        {/* Am Handy ist die Farbleiste zu schmal für Beschriftungen */}
        <p className="hero-inhalt absolute left-0 top-0 z-[3] bg-white px-3 py-1.5 font-medium text-foreground sm:hidden">
          {ton.name}, {ton.projekt}
        </p>

        {automatik && (
          <button
            type="button"
            onClick={() => setAngehalten(!angehalten)}
            aria-label={
              angehalten ? "Bildwechsel fortsetzen" : "Bildwechsel anhalten"
            }
            className="hero-inhalt absolute right-4 top-4 z-[3] flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground transition-colors hover:bg-mbkalk sm:right-6 sm:top-auto sm:bottom-6"
          >
            {angehalten ? (
              <PlayIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <PauseIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        )}

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
              <h1 className="text-sm font-normal tracking-normal [animation-delay:750ms] motion-safe:animate-einblenden sm:text-base">
                Ihr Malerbetrieb in Bad Aibling
              </h1>
              <p className="my-3 text-[clamp(2.25rem,min(11.5vw,7.2svh),5.5rem)] font-medium leading-[1.05] tracking-[-0.01em] [animation-delay:850ms] motion-safe:animate-einblenden sm:my-4">
                Farbe <br />
                schafft <br />
                Atmosphäre.
              </p>
              <div className="[animation-delay:950ms] motion-safe:animate-einblenden">
                <Button
                  asChild
                  className={cn(
                    ton.hell && "bg-white text-foreground hover:bg-white/90"
                  )}
                >
                  <Link to="/kontakt/">Rückruf vereinbaren</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        role="group"
        aria-label="Farbton wählen und Projekt ansehen"
        className="relative z-[5] flex h-16 shrink-0 sm:h-20"
        onPointerEnter={(event) =>
          event.pointerType === "mouse" && setWirdBedient(true)
        }
        onPointerLeave={() => setWirdBedient(false)}
        onFocus={(event) =>
          event.target.matches(":focus-visible") && setWirdBedient(true)
        }
        onBlur={() => setWirdBedient(false)}
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
                "relative flex min-w-0 basis-0 items-end px-4 pb-3 text-left leading-tight transition-[flex-grow] duration-500 ease-out focus-visible:outline-current focus-visible:-outline-offset-4",
                item.hell ? "text-white" : "text-foreground"
              )}
            >
              {/* Die Balken gehören zum Feld, Farbe und Grenzen stimmen dadurch immer */}
              <span
                aria-hidden="true"
                className="farbbalken"
                style={{
                  backgroundColor: item.hex,
                  animationDelay: `${index * 50}ms`,
                }}
              />
              {aktiv && automatik && (
                <span
                  aria-hidden="true"
                  className="bildwechsel"
                  style={{
                    animationPlayState: pausiert ? "paused" : "running",
                  }}
                  onAnimationEnd={() => waehlen((index + 1) % farbtoene.length)}
                />
              )}
              <span className="flex min-w-0 items-baseline gap-x-2 overflow-hidden whitespace-nowrap max-sm:sr-only">
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
