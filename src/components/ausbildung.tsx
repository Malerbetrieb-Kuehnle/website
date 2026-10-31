import ausbildung from "@/assets/ausbildung.png";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import { email, merkmale_ausbildung } from "@/constants";

export default function Ausbildung() {
  return (
    <section
      id="ausbildung"
      tabIndex={-1}
      className="grid outline-none lg:min-h-[100svh] lg:grid-cols-2"
    >
      <Reveal
        art="kachel"
        className="abschnitt flex flex-col justify-center bg-mblime"
      >
        <Reveal art="titel">
          <h2 className="titel-gross">
            <WortMaske text="Wir bilden aus." />
          </h2>
        </Reveal>
        <Reveal verzoegerung={100}>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Ausbildung zum Maler und Lackierer in Bad Aibling: Wir bilden seit
            Jahren mit Erfolg Lehrlinge in diesem interessanten und absolut
            vielseitigen Beruf aus.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8">
            Du gestaltest Innenräume und Fassaden, verlegst Bodenbeläge und
            verschönerst Wände mit verschiedenen Maltechniken, Tapeten oder
            Dekorputzen. Der Beruf ist traditionsreich und modern zugleich, nie
            langweilig und immer fordernd, was Fachwissen, Materialkunde und das
            Gespür für die Wünsche der Kunden angeht.
          </p>
        </Reveal>
        <ul role="list" className="mt-10 grid max-w-xl gap-x-6 sm:grid-cols-2">
          {merkmale_ausbildung.map((feature, index) => (
            <Reveal
              key={feature}
              as="li"
              verzoegerung={index * 100}
              className="border-t border-foreground/30 py-3"
            >
              {feature}
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-lg">
          Wir freuen uns auf Deine{" "}
          <a
            href={`mailto:${email}?subject=Bewerbung%20Ausbildung`}
            className="underline decoration-1 underline-offset-4 hover:no-underline"
          >
            Bewerbung per E-Mail
          </a>
          .
        </p>
      </Reveal>
      <div className="flex items-center justify-center p-8">
        <Reveal art="foto" verzoegerung={200} className="w-full max-w-xl">
          <img
            src={ausbildung}
            className="h-auto w-full"
            width={911}
            height={911}
            alt="Wir bilden aus: Plakat des Malerbetriebs Kühnle"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
