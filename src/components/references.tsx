import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { cn } from "@/lib/utils";

const auswahl = [
  {
    bild: "giebel-grau-verschalung",
    text: "Holzgiebel in Grau mit dunklen Läden",
    spalten: "md:col-span-7",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    bild: "bad-goldwand",
    text: "Bad mit Goldwand und Mosaik",
    spalten: "md:col-span-5",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    bild: "praxis-wartezimmer",
    text: "Praxis, Wartezimmer mit Tapete in Türkis",
    spalten: "md:col-span-4",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    bild: "mehrfamilienhaus-rote-laeden",
    text: "Mehrfamilienhaus mit roten Läden",
    spalten: "md:col-span-3",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    bild: "villa-abendlicht",
    text: "Villa mit weißer Fassade",
    spalten: "md:col-span-5",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
];

export default function References() {
  return (
    <section className="abschnitt">
      <div className="grid gap-y-6 lg:grid-cols-12">
        <h2 className="titel-gross lg:col-span-5">Referenzen</h2>
        <div className="lg:col-span-7">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Von der historischen Fassade bis zum Wartezimmer: eine Auswahl
            unserer abgeschlossenen Projekte.
          </p>
          <Button asChild className="mt-6">
            <Link to="/referenzen">Alle Referenzen ansehen</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-x-2 gap-y-6 md:grid-cols-12 lg:mt-20">
        {auswahl.map((item) => (
          <figure key={item.bild} className={cn(item.spalten)}>
            <img
              src={projektBild(item.bild)}
              srcSet={projektSrcSet(item.bild)}
              sizes={item.sizes}
              alt={item.text}
              className="foto aspect-[4/3] h-auto w-full object-cover md:aspect-auto md:h-[46vw] md:max-h-[44rem]"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {item.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
