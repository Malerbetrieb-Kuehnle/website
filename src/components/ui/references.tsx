// Import the images
import MetzgereiRumpel from "../../assets/Metzgerei_Rumpel_Bruckmühl.jpg";
import Wohnhaus_Hohenthann from "../../assets/Wohnhaus_Hohenthann.jpg";
import Wohnhaus_Bad_Aibling from "../../assets/Wohnhaus _Bad_Aibling.jpg";
import Bauernhof_Brannenburg from "../../assets/Bauernhof_Brannenburg.jpg";
import Bauernhof_Oberpframmern from "../../assets/Bauernhof_Oberpframmern.jpg";
import { Button } from "./button";

export default function References() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Referenzen.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Unsere Referenzen spiegeln die Vielfalt unserer Arbeit wider und
              zeigen Ihnen abgeschlossene Projekte in verschiedenen Stilen und
              Designs. Entdecken Sie inspirierende Wohnräume, beeindruckende
              Farbkonzepte und handwerkliche Meisterleistungen.
            </p>
          </div>
          <div>
            <div className="mt-10">
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
                          src={MetzgereiRumpel}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Bauernhof_Brannenburg}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Bauernhof_Oberpframmern}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Wohnhaus_Bad_Aibling}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Wohnhaus_Hohenthann}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Wohnhaus_Bad_Aibling}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Bauernhof_Brannenburg}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <Button>Zur Gallerie</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
