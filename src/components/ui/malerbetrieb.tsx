import { CheckIcon } from "@heroicons/react/20/solid";
import about_us from "../../assets/Fenster-25-Jahre.png";
import wirbildenaus from "../../assets/wirbildenaus-removebg.png";

const merkmale_about_us = [
  "25 Jahre Erfahrung",
  "Meisterbetrieb im Maler- und Lackiererhandwerk",
  "Zuverlässigkeit und termingerechte Abwicklung",
  "Fortbildung und Einsatz modernster Techniken",
];

const merkmale_ausbildung = [
  "Tradition und Innovation",
  "Vielseitiges Tätigkeitsfeld",
  "Fachwissen und Kreativität",
  "Zukunftssicherheit und Berufsperspektiven",
];

export default function Malerbetrieb() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Malerbetrieb Kühnle.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wir stehen für fachmännische Handwerksarbeit komplexer Arbeiten rund
            um die Innen- und Außengestaltung von Räumen, Gebäuden und Fassaden
            – im Großen wie im Kleinen.
          </p>
        </div>
        {/* Über uns */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Über uns.
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit Sitz
              in Bad Aibling. Als Meisterbetrieb im Maler- und Lackiererhandwerk
              stehen Qualitätsarbeit, Zuverlässigkeit und termingerechte
              Abwicklung der Aufträge im Vordergrund.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[#257D46]">
                Das macht uns aus
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {merkmale_about_us.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-[#257D46]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 m-auto">
            <img src={about_us} className="md:max-w-xs" alt="About Us" />
          </div>
        </div>

        {/* Ausbildung */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Ausbildung.
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Wir bilden seit Jahren mit Erfolg Lehrlinge in diesem
              interessanten und absolut vielseitigem Beruf aus. Wer sich dafür
              entscheidet, gestaltet Innenräume und Fassaden, verlegt
              Bodenbeläge und verschönert Wände mit verschiedenen Maltechniken,
              Tapeten oder Dekorputzen.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[#257D46]">
                Deshalb eine Ausbildung
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {merkmale_ausbildung.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-[#257D46]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 m-auto">
            <img src={wirbildenaus} className="md:max-w-xs" alt="Ausbildung" />
          </div>
        </div>
      </div>
    </div>
  );
}