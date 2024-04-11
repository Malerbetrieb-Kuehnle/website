import { CheckIcon } from "@heroicons/react/20/solid";
import about_us from "../../assets/Fenster-25-Jahre.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const merkmale_about_us = [
  "25 Jahre Erfahrung",
  "Meisterbetrieb im Maler- und Lackiererhandwerk",
  "Zuverlässigkeit und termingerechte Abwicklung",
  "Fortbildung und Einsatz modernster Techniken",
];

export default function Malerbetrieb() {
  return (
    <div className="max-w-7xl mx-auto mb-40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl sm:text-center">
          <Reveal keyframes={customAnimation} cascade triggerOnce>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Malerbetrieb Kühnle.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Wir stehen für fachmännische Handwerksarbeit komplexer Arbeiten
              rund um die Innen- und Außengestaltung von Räumen, Gebäuden und
              Fassaden – im Großen wie im Kleinen.
            </p>
          </Reveal>
        </div>
        {/* Über uns */}
        <Reveal keyframes={customAnimation} triggerOnce delay={800}>
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl ring-2 ring-[#f5f5f5] sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Über uns.
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit
                Sitz in Bad Aibling. Als Meisterbetrieb im Maler- und
                Lackiererhandwerk stehen Qualitätsarbeit, Zuverlässigkeit und
                termingerechte Abwicklung der Aufträge im Vordergrund.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-bold leading-6 text-mbgreen">
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
                      className="h-6 w-5 flex-none text-mbgreen"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 m-auto">
              <img src={about_us} className="md:max-w-xs max-w-64" alt="About Us" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
