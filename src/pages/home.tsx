import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { WavyBackground } from "../components/ui/wavy-background";

// Footer
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import ContactNew from "../components/ui/contact-section-new";
import References from "../components/ui/references";
import Malerbetrieb from "@/components/ui/malerbetrieb";
import Services from "@/components/ui/services";
import Partner from "@/components/ui/partner";
import { Link } from "react-router-dom";
import Ausbildung from "@/components/ui/ausbildung";

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container-waves flex flex-col items-center justify-center">
        <WavyBackground className="max-w-4xl mx-auto ">
          <h2 className="md:text-2xl text-xl mb-4 text-center">
            Malerbetrieb Kühnle
          </h2>

          <h1 className="md:text-7xl text-4xl font-bold text-center">
            Farbe schafft{" "}
            <span className="bg-gradient-to-r from-[#008ED7] to-[#257D46] text-transparent bg-clip-text">
              Atmosphäre
            </span>
            .
          </h1>
          <div className="flex justify-center pt-8">
            <Link to={"/kontakt"}>
            <Button variant="default">Kontakt</Button>
            </Link>
          </div>
        </WavyBackground>
      </div>

      {/* Malerbetrieb Über uns und Ausbildung*/}
      <Malerbetrieb />

      {/* Services */}
      <Services />

      <div className="container-references flex flex-col">
        <References />
      </div>

      <Ausbildung/>

      <div className="partner-section py-24 sm:py-32">
        <Partner />
      </div>

      <div className="container-faq">
        <BackgroundGradientAnimation className="z-0">
          <div className="flex flex-col sm:p-20 p-4">
            <h1 className="text-3xl sm:text-6xl mb-7 font-bold z-10 mt-7">
              Noch Fragen?
            </h1>
            <Accordion
              type="single"
              collapsible
              className="overflow-x-auto w-full z-10 mt-0 text-gray-500"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Werden nachhaltige Produkte verwendet?
                </AccordionTrigger>
                <AccordionContent>
                  Wir sind ein nachhaltiger Malerbetrieb und verwenden Produkte,
                  die umweltfreundlich hergestellt werden, wie Farben und Lacke
                  mit geringem VOC-Gehalt (flüchtige Organische Verbindungen)
                  und Lösungsmittelfreie Alternativen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Kann beim Ausräumen vor dem Anstrich geholfen werden?
                </AccordionTrigger>
                <AccordionContent>
                  Gerne sind wir bereit, Ihnen beim Aus- und Einräumen
                  behilflich zu sein.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Hat der Betrieb eine professionelle Ausstattung?
                </AccordionTrigger>
                <AccordionContent>
                  Unser Betrieb verfügt über hochwertige Werkzeuge, Geräte und
                  Materialien, um eine qualitativ hochwertige Arbeit zu
                  gewährleisten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Zuverlässigkeit und Pünktlichkeit?
                </AccordionTrigger>
                <AccordionContent>
                  Wir halten Termine ein und arbeiten effizient, um den Zeitplan
                  einzuhalten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Kundenorientierung?</AccordionTrigger>
                <AccordionContent>
                  Ein ausgezeichneter Kundenservice ist uns sehr wichtig, ebenso
                  wie die Berücksichtigung der Bedürfnisse und Wünsche unserer
                  Kunden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Sauberkeit und Ordnung?</AccordionTrigger>
                <AccordionContent>
                  Wir halten die Baustelle sauber und ordentlich, sowohl während
                  als auch nach der Arbeit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </BackgroundGradientAnimation>
      </div>

      <ContactNew />
    </>
  );
}

export default Home;
