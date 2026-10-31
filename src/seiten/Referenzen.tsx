import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Farbleiste from "@/components/ui/farbleiste";
import Lightbox from "@/components/ui/lightbox";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import {
  referenzen,
  type Bereich,
  type Referenz,
} from "@/constants/referenzen";
import { zeilenStile } from "@/lib/galerie";
import { cn } from "@/lib/utils";

const filter: { id: Bereich | "alle"; title: string }[] = [
  { id: "alle", title: "Alle" },
  { id: "aussen", title: "Außen" },
  { id: "innen", title: "Innen" },
];

const imBereich = (id: Bereich | "alle") =>
  id === "alle" ? referenzen : referenzen.filter((bild) => bild.bereich === id);

// Je ein großes Bild eröffnet einen Abschnitt, dahinter folgen die kleinen
const inAbschnitte = (liste: Referenz[]) => {
  const grosse = liste.filter((bild) => bild.gross);
  const kleine = liste.filter((bild) => !bild.gross);
  const grenze = (index: number) =>
    Math.round((index * kleine.length) / grosse.length);

  return grosse.map((gross, index) => {
    const abschnitt = kleine.slice(grenze(index), grenze(index + 1));
    return { gross, kleine: abschnitt, stile: zeilenStile(abschnitt) };
  });
};

const bildBreite = (stil: Record<string, number>) => {
  const prozent = (name: string) => Math.ceil(stil[`--anteil-${name}`] * 100);
  return `(min-width: 1280px) ${prozent("l")}vw, (min-width: 640px) ${prozent(
    "m"
  )}vw, ${prozent("s")}vw`;
};

export default function Referenzen() {
  const [aktiv, setAktiv] = useState<Bereich | "alle">("alle");
  const [offen, setOffen] = useState<number | null>(null);

  const abschnitte = useMemo(() => inAbschnitte(imBereich(aktiv)), [aktiv]);
  const bilder = useMemo(
    () => abschnitte.flatMap(({ gross, kleine }) => [gross, ...kleine]),
    [abschnitte]
  );

  const kachel = (
    bild: Referenz,
    index: number,
    stil?: Record<string, number>
  ) => (
    <li
      key={bild.src}
      className={cn("galerie-bild", !stil && "galerie-bild-gross")}
      style={stil as CSSProperties}
    >
      <Reveal
        art="kachel"
        verzoegerung={stil ? (index % 3) * 100 : 0}
        className="h-full"
      >
        <button
          type="button"
          onClick={() => setOffen(bilder.indexOf(bild))}
          className="group relative block h-full w-full overflow-hidden text-left"
          aria-label={`${bild.title} groß ansehen`}
        >
          <img
            src={bild.src}
            srcSet={bild.srcSet}
            sizes={stil ? bildBreite(stil) : "100vw"}
            alt={bild.title}
            width={bild.width}
            height={bild.height}
            className="h-full w-full bg-mbkalk object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:!scale-100"
            loading="lazy"
            decoding="async"
          />
          <span className={cn("etikett", stil && "galerie-etikett")}>
            {bild.title}
          </span>
        </button>
      </Reveal>
    </li>
  );

  return (
    <>
      <div className="gutter pb-10 pt-12 lg:pb-14 lg:pt-20">
        <Reveal art="titel">
          <h1 className="text-[clamp(3.5rem,14.5vw,15rem)] leading-none">
            <WortMaske text="Referenzen" />
          </h1>
        </Reveal>
        <Reveal
          verzoegerung={200}
          className="mt-8 grid gap-y-6 lg:mt-12 lg:grid-cols-12 lg:items-end"
        >
          <p className="max-w-2xl text-xl leading-8 text-muted-foreground lg:col-span-7">
            Abgeschlossene Projekte aus Bad Aibling, Rosenheim und der Region
            bis nach Kapstadt: Fassaden, Wohnhäuser, Praxen und Innenräume in
            verschiedenen Stilen.
          </p>
          <div
            role="group"
            aria-label="Referenzen filtern"
            className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end"
          >
            {filter.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={aktiv === item.id}
                onClick={() => setAktiv(item.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 transition-colors",
                  aktiv === item.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground"
                )}
              >
                {item.title}{" "}
                <span className="tabular-nums opacity-70">
                  {imBereich(item.id).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Farbleiste />

      <div key={aktiv} className="galerie">
        {abschnitte.map(({ gross, kleine, stile }) => (
          <ul key={gross.src} role="list" className="galerie-abschnitt">
            {kachel(gross, 0)}
            {kleine.map((bild, index) => kachel(bild, index, stile.get(bild)))}
          </ul>
        ))}
      </div>

      <section className="abschnitt bg-mbfir text-white">
        <Reveal art="titel">
          <h2 className="titel-gross">
            <WortMaske text="Planen Sie ein Projekt?" />
          </h2>
        </Reveal>
        <Reveal verzoegerung={200}>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-mblime text-foreground hover:bg-white"
          >
            <Link to="/kontakt/">Rückruf vereinbaren</Link>
          </Button>
        </Reveal>
      </section>

      <Lightbox
        bilder={bilder}
        index={offen}
        onChange={setOffen}
        onClose={() => setOffen(null)}
      />
    </>
  );
}
