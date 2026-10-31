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
  const proAbschnitt = Math.ceil(kleine.length / grosse.length);

  return grosse.map((gross, index) => ({
    gross,
    kleine: kleine.slice(index * proAbschnitt, (index + 1) * proAbschnitt),
  }));
};

export default function Referenzen() {
  const [aktiv, setAktiv] = useState<Bereich | "alle">("alle");
  const [offen, setOffen] = useState<number | null>(null);

  const abschnitte = useMemo(() => inAbschnitte(imBereich(aktiv)), [aktiv]);
  const bilder = useMemo(
    () => abschnitte.flatMap(({ gross, kleine }) => [gross, ...kleine]),
    [abschnitte]
  );

  const kachel = (bild: Referenz, gross: boolean, index: number) => (
    <Reveal
      key={bild.src}
      as="li"
      art="kachel"
      verzoegerung={gross ? 0 : (index % 3) * 100}
      className={cn("galerie-bild", gross && "galerie-bild-gross")}
      style={
        {
          "--seiten": bild.width / bild.height,
          flexGrow: bild.width / bild.height,
        } as CSSProperties
      }
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
          sizes={
            gross
              ? "100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          alt={bild.title}
          width={bild.width}
          height={bild.height}
          className="h-full w-full bg-mbkalk object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:!scale-100"
          loading="lazy"
          decoding="async"
        />
        <span className={cn("etikett", !gross && "galerie-etikett")}>
          {bild.title}
        </span>
      </button>
    </Reveal>
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
            Abgeschlossene Projekte aus Bad Aibling, Rosenheim und der Region:
            Fassaden, Wohnhäuser, Praxen und Innenräume in verschiedenen Stilen.
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
        {abschnitte.map(({ gross, kleine }) => (
          <ul key={gross.src} role="list" className="galerie-abschnitt">
            {kachel(gross, true, 0)}
            {kleine.map((bild, index) => kachel(bild, false, index))}
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
