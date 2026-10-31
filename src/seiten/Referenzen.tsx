import { useMemo, useState } from "react";
import Lightbox from "@/components/ui/lightbox";
import { referenzen, type Bereich } from "@/constants/referenzen";
import { cn } from "@/lib/utils";

const filter: { id: Bereich | "alle"; title: string }[] = [
  { id: "alle", title: "Alle" },
  { id: "aussen", title: "Außen" },
  { id: "innen", title: "Innen" },
];

export default function Referenzen() {
  const [aktiv, setAktiv] = useState<Bereich | "alle">("alle");
  const [offen, setOffen] = useState<number | null>(null);

  const bilder = useMemo(
    () =>
      aktiv === "alle"
        ? referenzen
        : referenzen.filter((bild) => bild.bereich === aktiv),
    [aktiv]
  );

  return (
    <>
      <div className="gutter grid gap-y-6 py-12 lg:grid-cols-12 lg:py-20">
        <h1 className="titel-gross lg:col-span-5">Referenzen</h1>
        <div className="lg:col-span-7">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Abgeschlossene Projekte aus unserer Arbeit: Fassaden, Wohnhäuser,
            Praxen und Innenräume in verschiedenen Stilen.
          </p>
          <div
            role="group"
            aria-label="Referenzen filtern"
            className="mt-6 flex gap-x-6"
          >
            {filter.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={aktiv === item.id}
                onClick={() => setAktiv(item.id)}
                className={cn(
                  "border-b-2 py-2 text-lg transition-colors",
                  aktiv === item.id
                    ? "border-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul
        role="list"
        className="gutter columns-2 gap-x-2 pb-20 lg:columns-3 2xl:columns-4"
      >
        {bilder.map((bild, index) => (
          <li key={bild.src} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOffen(index)}
              className="group block w-full text-left"
              aria-label={`${bild.title} groß ansehen`}
            >
              <span className="foto block overflow-hidden">
                <img
                  src={bild.src}
                  srcSet={bild.srcSet}
                  sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, 50vw"
                  alt={bild.title}
                  width={bild.width}
                  height={bild.height}
                  className="h-auto w-full bg-mbkalk transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:!scale-100"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="mt-2 block text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {bild.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        bilder={bilder}
        index={offen}
        onChange={setOffen}
        onClose={() => setOffen(null)}
      />
    </>
  );
}
