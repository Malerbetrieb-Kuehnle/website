import { CheckIcon } from "@heroicons/react/20/solid";
import wirbildenaus from "../../assets/wirbildenaus-removebg.png";

const merkmale_ausbildung = [
  "Tradition und Innovation",
  "Vielseitiges Tätigkeitsfeld",
  "Fachwissen und Kreativität",
  "Zukunftssicherheit und Berufsperspektiven",
];

export default function Ausbildung() {
  return (
    <div className="bg-white py-24 sm:py-32 mx-auto">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wir bilden aus.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wir bilden seit Jahren mit Erfolg Lehrlinge in diesem interessanten
            und absolut vielseitigem Beruf aus. Wir freuen uns auf Deine Bewerbung!
          </p>
        </div>

        {/* Ausbildung */}
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Ausbildung.
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Wer sich dafür entscheidet, gestaltet Innenräume und Fassaden,
              verlegt Bodenbeläge und verschönert Wände mit verschiedenen
              Maltechniken, Tapeten oder Dekorputzen. Das Berufsbild ist
              traditionsreich und modern zugleich, nie langweilig, immer
              fordernd was Fachwissen, Materialkunde und individuelles Gespür
              für die Interessen der Kunden angeht.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-bold leading-6 text-[#257D46]">
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
