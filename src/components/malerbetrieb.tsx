import jubilaeum from "@/assets/Fenster-25-Jahre.png";
import { ablauf, merkmale_about_us } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";

const bauphasen = [
  { bild: "altbau-geruest", text: "Historische Fassade im Gerüst" },
  {
    bild: "altbau-pfirsich-kirche",
    text: "Dieselbe Fassade nach der Sanierung",
  },
];

export default function Malerbetrieb() {
  return (
    <>
      <section className="abschnitt grid gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="label">Über uns</h2>
          <img
            src={jubilaeum}
            className="mt-8 hidden w-40 lg:block"
            width={541}
            height={462}
            alt="25 Jahre Ihr Malerbetrieb"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-8">
          <p className="titel-mittel text-foreground/55">
            <span className="text-foreground">
              Wir stehen für fachmännische Handwerksarbeit
            </span>{" "}
            rund um die Innen- und Außengestaltung von Räumen, Gebäuden und
            Fassaden,{" "}
            <span className="text-foreground">im Großen wie im Kleinen.</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit Sitz
            in Bad Aibling. Als Meisterbetrieb im Maler- und Lackiererhandwerk
            stehen Qualitätsarbeit, Zuverlässigkeit und termingerechte
            Abwicklung der Aufträge im Vordergrund.
          </p>
          <ul
            role="list"
            className="mt-12 grid gap-x-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {merkmale_about_us.map((feature) => (
              <li key={feature} className="border-t py-4 leading-6">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-label="Vom Gerüst zur fertigen Fassade"
        className="grid md:h-[100svh] md:grid-cols-2"
      >
        {bauphasen.map((phase) => (
          <figure key={phase.bild} className="relative h-[80svh] md:h-auto">
            <img
              src={projektBild(phase.bild)}
              srcSet={projektSrcSet(phase.bild)}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={phase.text}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 bg-white px-4 py-2 text-sm">
              {phase.text}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative h-[70svh] lg:h-auto">
          <img
            src={projektBild("bauernhaus-geruest")}
            srcSet={projektSrcSet("bauernhaus-geruest")}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="Drei Fahrzeuge des Malerbetriebs vor einem eingerüsteten Bauernhaus"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="abschnitt">
          <h2 className="titel-mittel">
            Beratung, Entwurf, Umsetzung. Ein Ansprechpartner.
          </h2>
          <ol role="list" className="mt-12 lg:mt-20">
            {ablauf.map((schritt, index) => (
              <li
                key={schritt.title}
                className="grid grid-cols-[2.5rem_1fr] border-t py-6 sm:grid-cols-[2.5rem_10rem_1fr]"
              >
                <span className="text-muted-foreground">{index + 1}</span>
                <h3 className="font-serif text-xl">{schritt.title}</h3>
                <p className="col-start-2 mt-2 max-w-md leading-7 text-muted-foreground sm:col-start-3 sm:mt-0">
                  {schritt.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
