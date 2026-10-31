import { baumreihe, bergeFern, bergeMitte } from "@/lib/berge";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { useScrollFortschritt } from "@/lib/bewegung";

const fortschritt = (box: DOMRect, fensterhoehe: number) =>
  -box.top / (box.height - fensterhoehe);

// Berge dürfen sich strecken, ihr Grat bleibt so immer ganz im Bild. Tannen nicht.
const ketten = [
  { klasse: "nacht-fern", pfad: bergeFern, farbe: "#33625f", ansicht: "none" },
  { klasse: "nacht-mitte", pfad: bergeMitte, farbe: "#1f524b", ansicht: "none" },
  {
    klasse: "nacht-nah",
    pfad: baumreihe,
    farbe: "#0e2f29",
    ansicht: "xMaxYMax slice",
  },
];

// Von hinten nach vorne. Fassade und dunkles Haus liegen deckungsgleich,
// die Fassade hat Löcher in den Scheiben, durch die man in den Laden sieht.
const ebenen = ["spiegel", "dunkel", "innen", "fassade"];

// Es dämmert, das Haus steht im Dunkeln. Beim Scrollen wird es Nacht und die
// Lichter gehen an, erst außen, dann im Laden. Berge und Haus ziehen versetzt.
export default function Nachtszene() {
  const bereich = useScrollFortschritt<HTMLDivElement>(fortschritt);

  return (
    <div
      ref={bereich}
      role="img"
      aria-label="Das beleuchtete Schaufenster des Malerbetriebs Kühnle bei Nacht vor den Bergen"
      className="nacht"
    >
      <div className="nacht-buehne">
        <div aria-hidden="true" className="nacht-abend" />
        <div aria-hidden="true" className="nacht-sterne" />
        <div aria-hidden="true" className="nacht-mond" />
        {ketten.map((kette) => (
          <svg
            key={kette.klasse}
            aria-hidden="true"
            viewBox="0 0 1600 420"
            preserveAspectRatio={kette.ansicht}
            className={`nacht-kette ${kette.klasse}`}
          >
            <path d={kette.pfad} fill={kette.farbe} />
          </svg>
        ))}
        {/* Nasser Boden: Berge und Mond spiegeln sich, das Haus bringt seine Spiegelung mit */}
        <div aria-hidden="true" className="nacht-boden">
          {ketten.map((kette) => (
            <svg
              key={kette.klasse}
              viewBox="0 0 1600 420"
              preserveAspectRatio={kette.ansicht}
              className="nacht-wasser"
            >
              <path d={kette.pfad} fill={kette.farbe} />
            </svg>
          ))}
        </div>
        <div className="nacht-haus">
          {ebenen.map((ebene) => (
            <img
              key={ebene}
              src={projektBild(`nacht-${ebene}`)}
              srcSet={projektSrcSet(`nacht-${ebene}`)}
              sizes="120vh"
              alt=""
              width={2400}
              height={2160}
              className={`nacht-ebene nacht-${ebene}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
