import type { CSSProperties } from "react";
import { Link } from "react-router";
import Augencentrum_Rosenheim1 from "@/assets/referenzen/Augencentrum_Rosenheim1.jpg";
import Bauernhof_Brannenburg2 from "@/assets/referenzen/Bauernhof_Brannenburg2.jpg";
import Wohnhaus_Hohenthann3 from "@/assets/referenzen/Wohnhaus_Hohenthann3.jpg";
import { Button } from "@/components/ui/button";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import { projektBild, projektSrcSet } from "@/lib/bilder";

// Hochformat, Querformat und Innenraum im Wechsel. Die Bilder bleiben
// ungeschnitten, die Breiten ergeben sich aus ihrem Seitenverhältnis.
const zeilen = [
  [
    {
      src: Wohnhaus_Hohenthann3,
      breite: 1280,
      hoehe: 720,
      text: "Wohnhaus Hohenthann",
    },
    {
      src: projektBild("altbau-pfirsich-kirche"),
      srcSet: projektSrcSet("altbau-pfirsich-kirche"),
      breite: 1080,
      hoehe: 1062,
      text: "Historische Fassade in Pfirsich",
    },
  ],
  [
    {
      src: Bauernhof_Brannenburg2,
      breite: 1280,
      hoehe: 1145,
      text: "Bauernhof Brannenburg",
    },
    {
      src: projektBild("villa-abendlicht"),
      srcSet: projektSrcSet("villa-abendlicht"),
      breite: 3648,
      hoehe: 2367,
      text: "Villa mit weißer Fassade in Kapstadt",
    },
    {
      src: Augencentrum_Rosenheim1,
      breite: 1075,
      hoehe: 708,
      text: "Augencentrum Rosenheim",
    },
  ],
];

const seitenverhaeltnis = ({ breite, hoehe }: (typeof zeilen)[0][0]) =>
  breite / hoehe;

export default function References() {
  return (
    <section className="abschnitt">
      <div className="grid gap-y-6 lg:grid-cols-12">
        <Reveal art="titel" className="lg:col-span-5">
          <h2 className="titel-gross">
            <WortMaske text="Referenzen" />
          </h2>
        </Reveal>
        <Reveal verzoegerung={100} className="lg:col-span-7">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Fassaden, Wohnhäuser und Praxen aus Bad Aibling, Rosenheim und der
            Region bis nach Kapstadt: eine Auswahl unserer abgeschlossenen
            Projekte.
          </p>
          <Button asChild className="mt-6">
            <Link to="/referenzen/">Alle Referenzen ansehen</Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-2 lg:mt-20">
        {zeilen.map((zeile) => {
          const gesamt = zeile.reduce(
            (summe, item) => summe + seitenverhaeltnis(item),
            0
          );

          return (
            <div key={zeile[0].src} className="flex flex-col gap-2 md:flex-row">
              {zeile.map((item, index) => {
                const seiten = seitenverhaeltnis(item);
                return (
                  <Reveal
                    key={item.src}
                    as="figure"
                    art="foto"
                    verzoegerung={index * 150}
                    className="relative overflow-hidden md:flex-[var(--seiten)_1_0%]"
                    style={
                      {
                        "--seiten": seiten,
                        aspectRatio: seiten,
                      } as CSSProperties
                    }
                  >
                    <img
                      src={item.src}
                      srcSet={item.srcSet}
                      sizes={`(min-width: 768px) ${Math.ceil(
                        (seiten / gesamt) * 100
                      )}vw, 100vw`}
                      alt={item.text}
                      width={item.breite}
                      height={item.hoehe}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="etikett">{item.text}</figcaption>
                  </Reveal>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
