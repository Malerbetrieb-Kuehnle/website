import Hoegner from "@/assets/Hoegner.png";
import Ulber from "@/assets/Ulber.png";
import Raab from "@/assets/Raab.svg";
import Prosol from "@/assets/Prosol.jpeg";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/lib/utils";

export default function Partner() {
  return (
    <div className="relative overflow-hidden flex mx-auto mb-32 rounded-[15px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <Reveal
            keyframes={customAnimation}
            cascade
            triggerOnce
            duration={500}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Partner & Lieferanten.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unsere Dienstleistungen zeichnen sich durch die Verwendung
              hochwertiger Materialien aus, die von etablierten Lieferanten
              bezogen werden. Nur so können wir einen erstklassigen und
              hochwertigen Malerservice bieten.
            </p>
          </Reveal>
        </div>
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={800}
          duration={500}
        >
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="grayscale hover:grayscale-0 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Prosol}
              alt="Prosol"
              height={48}
              loading="lazy"
            />
            <img
              className="grayscale hover:grayscale-0 col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
              src={Hoegner}
              alt="Hoegner"
              height={48}
              loading="lazy"
            />
            <img
              className="grayscale hover:grayscale-0 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Ulber}
              alt="Ulber"
              height={48}
              loading="lazy"
            />
            <img
              className="grayscale hover:grayscale-0 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Raab}
              alt="Raab"
              height={48}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
