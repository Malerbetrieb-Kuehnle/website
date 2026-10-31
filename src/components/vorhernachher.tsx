import { projektBild, projektSrcSet } from "@/lib/bilder";
import { useScrollFortschritt } from "@/lib/bewegung";

const fortschritt = (box: DOMRect, fensterhoehe: number) =>
  -box.top / (box.height - fensterhoehe);

const phasen = [
  {
    klasse: "vorher-bild",
    bild: "altbau-geruest",
    kicker: "Vorher",
    text: "Historische Fassade im Gerüst",
    etikett: "bg-white",
  },
  {
    klasse: "nachher-bild",
    bild: "altbau-pfirsich-seite",
    kicker: "Nachher",
    text: "Dasselbe Haus nach der Sanierung",
    etikett: "!bg-[#EFB98A]",
  },
];

// Beim Scrollen wird die fertige Fassade wie mit der Rolle über das Gerüstfoto gezogen
export default function VorherNachher() {
  const bereich = useScrollFortschritt<HTMLElement>(fortschritt);

  return (
    <section
      ref={bereich}
      aria-label="Vom Gerüst zur fertigen Fassade"
      className="vorher-nachher"
    >
      <div className="vorher-nachher-buehne">
        {phasen.map((phase) => (
          <figure key={phase.bild} className={phase.klasse}>
            <img
              src={projektBild(phase.bild)}
              srcSet={projektSrcSet(phase.bild)}
              sizes="100vw"
              alt={phase.text}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className={`etikett etikett-gross ${phase.etikett}`}>
              <span className="block text-lg font-normal md:text-xl">
                {phase.kicker}
              </span>
              {phase.text}
            </figcaption>
          </figure>
        ))}
        <div aria-hidden="true" className="rollen-kante" />
      </div>
    </section>
  );
}
