import type { CSSProperties } from "react";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import VorherNachher from "@/components/vorhernachher";
import { ablauf, merkmale_about_us } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { useScrollFortschritt } from "@/lib/bewegung";

const aussage =
  "Wir stehen für fachmännische Handwerksarbeit rund um die Innen- und Außengestaltung von Räumen, Gebäuden und Fassaden, im Großen wie im Kleinen.".split(
    " "
  );

const fuellung = (box: DOMRect, fensterhoehe: number) =>
  (fensterhoehe * 0.85 - box.top) / (fensterhoehe * 0.6);

// Die Aussage füllt sich beim Scrollen Wort für Wort mit Farbe
function Aussage() {
  const absatz = useScrollFortschritt<HTMLParagraphElement>(fuellung);

  return (
    <p ref={absatz} className="titel-mittel wort-fuellung">
      {aussage.map((wort, index) => (
        <span
          key={index}
          style={{ "--i": index / aussage.length } as CSSProperties}
        >
          {wort}{" "}
        </span>
      ))}
    </p>
  );
}

export default function Malerbetrieb() {
  return (
    <>
      <section className="abschnitt grid gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="label">Über uns</h2>
          <Reveal verzoegerung={100} className="mt-8 hidden lg:block">
            <div
              aria-hidden="true"
              className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-mborange"
            >
              <span className="text-6xl font-medium leading-none">25</span>
              <span className="mt-1">Jahre</span>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Aussage />
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit Sitz
              in Bad Aibling. Als Meisterbetrieb im Maler- und Lackiererhandwerk
              stehen Qualitätsarbeit, Zuverlässigkeit und termingerechte
              Abwicklung der Aufträge im Vordergrund.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Wir arbeiten für Privathaushalte, Gewerbe und öffentliche
              Auftraggeber in Bad Aibling, Rosenheim, Kolbermoor, Bruckmühl, Bad
              Feilnbach und der Region.
            </p>
          </Reveal>
          <ul
            role="list"
            className="mt-12 grid gap-x-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {merkmale_about_us.map((feature, index) => (
              <Reveal
                key={feature}
                as="li"
                verzoegerung={index * 100}
                className="border-t py-4 leading-6"
              >
                {feature}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <VorherNachher />

      <section className="grid lg:grid-cols-2">
        <Reveal art="foto" className="relative h-[70svh] lg:h-auto">
          <img
            src={projektBild("bauernhaus-geruest")}
            srcSet={projektSrcSet("bauernhaus-geruest")}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="Drei Fahrzeuge des Malerbetriebs vor einem eingerüsteten Bauernhaus"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <div className="abschnitt">
          <Reveal art="titel">
            <h2 className="titel-mittel">
              <WortMaske text="Beratung, Entwurf, Umsetzung. Ein Ansprechpartner." />
            </h2>
          </Reveal>
          <ol role="list" className="mt-12 lg:mt-20">
            {ablauf.map((schritt, index) => (
              <Reveal
                key={schritt.title}
                as="li"
                verzoegerung={index * 100}
                className="grid grid-cols-[2.5rem_1fr] border-t py-6 sm:grid-cols-[2.5rem_10rem_1fr]"
              >
                <span className="text-muted-foreground">{index + 1}</span>
                <h3 className="text-xl">{schritt.title}</h3>
                <p className="col-start-2 mt-2 max-w-md leading-7 text-muted-foreground sm:col-start-3 sm:mt-0">
                  {schritt.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
