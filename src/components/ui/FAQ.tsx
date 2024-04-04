import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="relative h-fit overflow-hidden flex max-w-screen-xl mt-2.5 mx-auto my-0 rounded-[15px]">
      <BackgroundGradientAnimation className="z-0">
        <div className="flex flex-col sm:p-20 p-4">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 z-10">
            Noch Fragen?
          </h2>
          <Accordion
            type="single"
            collapsible
            className="overflow-x-auto w-full z-10 mt-6 text-gray-600"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Werden nachhaltige Produkte verwendet?
              </AccordionTrigger>
              <AccordionContent>
                Wir sind ein nachhaltiger Malerbetrieb und verwenden Produkte,
                die umweltfreundlich hergestellt werden, wie Farben und Lacke
                mit geringem VOC-Gehalt (flüchtige Organische Verbindungen) und
                Lösungsmittelfreie Alternativen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Kann beim Ausräumen vor dem Anstrich geholfen werden?
              </AccordionTrigger>
              <AccordionContent>
                Gerne sind wir bereit, Ihnen beim Aus- und Einräumen behilflich
                zu sein.
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
  );
};

export default FAQ;
