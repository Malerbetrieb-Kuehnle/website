// Import the images
import Baderhaus_Bad_Aibling from "../../assets/referenzen/Baderhaus_Bad_Aibling1.jpg";
import Bauernhof_Brannenburg from "../../assets/referenzen/Bauernhof_Brannenburg2.jpg";
import Fassade_Grabenstaett from "../../assets/referenzen/Fassade_Grabenstaett.jpg";
import Klinkik_St_Georg from "../../assets/referenzen/Klinik_St._Georg_Bad_Aiblung.jpg";
import Schloss_Maxhofen from "../../assets/referenzen/Schloss_Maxhofen_Bruckmuehl.jpg";
import Wohnhaus_Bad_Feilnbach from "../../assets/referenzen/Wohnhaus_Bad_Feilnbach5.jpg";
import Lackarbeiten from "../../assets/referenzen/Lackarbeiten1.jpg";
import { scrollToTop } from "@/lib/utils";
import { Button } from "./button";
import { Link } from "react-router-dom";

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

export default function References() {
  return (
    <div className="relative overflow-hidden max-w-screen-xl mx-auto rounded-[15px] border-0 border-solid border-[#e7e7e9] mb-40">
      <div className="relative overflow-hidden">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">

          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <Reveal keyframes={customAnimation} cascade triggerOnce>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                Referenzen.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unsere Referenzen spiegeln die Vielfalt unserer Arbeit wider und
                zeigen Ihnen abgeschlossene Projekte in verschiedenen Stilen und
                Designs. Entdecken Sie inspirierende Wohnräume, beeindruckende
                Farbkonzepte und handwerkliche Meisterleistungen.
              </p>
              </Reveal>
            </div>
            <div>
              <div className="mt-6">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={Baderhaus_Bad_Aibling}
                            alt="Baderhaus Bad Aibling"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Bauernhof_Brannenburg}
                            alt="Bauernhof Brannenburg"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fassade_Grabenstaett}
                            alt="Fassade Grabenstaett"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Klinkik_St_Georg}
                            alt="Klinik St. Georg"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Lackarbeiten}
                            alt="Lackarbeiten"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Schloss_Maxhofen}
                            alt="Schloss Maxhofen"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Wohnhaus_Bad_Feilnbach}
                            alt="Wohnhaus Bad Feilnbach"
                            className="h-full w-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Reveal keyframes={customAnimation} triggerOnce delay={800}>


                <Link to={"/referenzen"} onClick={scrollToTop}>
                  <Button variant="default">Zur Gallerie</Button>
                </Link>
                </Reveal>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
