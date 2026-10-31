import { projektBild, projektSrcSet } from "@/lib/bilder";
import { useScrollFortschritt } from "@/lib/bewegung";

const fortschritt = (box: DOMRect, fensterhoehe: number) =>
  -box.top / (box.height - fensterhoehe);

const Ebene = ({ name, sizes }: { name: string; sizes: string }) => (
  <img
    src={projektBild(`nacht-${name}`)}
    srcSet={projektSrcSet(`nacht-${name}`)}
    sizes={sizes}
    alt=""
    className={`nacht-ebene nacht-${name}`}
    loading="lazy"
    decoding="async"
  />
);

const fotoBreite = "max(135vw, 146vh)";
const hausBreite = "120vh";

// Abendlicht am Wendelstein, das Haus steht noch unbeleuchtet in der Wiese. Beim
// Scrollen wird es blaue Stunde und die Lichter gehen an, erst außen, dann im Laden.
// Berge, Wiese und Haus ziehen dabei versetzt. Fassade und dunkles Haus liegen
// deckungsgleich, die Fassade hat Löcher in den Scheiben für den Blick in den Laden.
export default function Nachtszene() {
  const bereich = useScrollFortschritt<HTMLDivElement>(fortschritt);

  return (
    <div
      ref={bereich}
      role="img"
      aria-label="Das beleuchtete Schaufenster des Malerbetriebs Kühnle bei Nacht vor dem Wendelstein"
      className="nacht"
    >
      <div className="nacht-buehne">
        <div className="nacht-abend" />
        <div className="nacht-finster" />
        <div className="nacht-sterne" />
        <div className="nacht-foto">
          <Ebene name="berge" sizes={fotoBreite} />
          <Ebene name="land" sizes={fotoBreite} />
        </div>
        <div className="nacht-ton" />
        <div className="nacht-haus">
          <Ebene name="dunkel" sizes={hausBreite} />
          <Ebene name="innen" sizes={hausBreite} />
          <Ebene name="fassade" sizes={hausBreite} />
          <Ebene name="gras" sizes={hausBreite} />
          <Ebene name="schein" sizes={hausBreite} />
        </div>
        <div className="nacht-foto nacht-vorne">
          <Ebene name="vorn" sizes={fotoBreite} />
        </div>
      </div>
    </div>
  );
}
