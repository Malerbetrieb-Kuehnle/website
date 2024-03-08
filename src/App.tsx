import "./App.css";
import styles from "./style";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

// Import the images
import fassade from "./assets/Fassade_Grabenstätt 1.png";
import about_us from "./assets/25-Jahre.png";

// Navbar
import { Navbar } from "./components/ui/navbar";

// Footer
import { Footer } from "./components/ui/footer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { services_innenbereich, services_aussenbereich } from './constants';

function App() {
  return (
    <html>
      <body>
        {/* Navbar */}
        <div className="w-full  overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="container-hero flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4">Malerbetrieb Kühnle</h2>
          <h1 className="text-6xl mb-8 font-bold">
            Farbe schafft{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Atmosphäre
            </span>
            .
          </h1>
          <Button variant="default">Kontakt</Button>
        </div>

        {/* About us */}
        <div className="container-about px-8 py-8">
          <div className="about-section flex items-center justify-between">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl mb-4">Über uns.</h1>
              <p className="text-gray-600">
                Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit
                Sitz in Bad Aibling. Als Meisterbetrieb im Maler- und
                Lackiererhandwerk stehen Qualitätsarbeit, Zuverlässigkeit und
                termingerechte Abwicklung der Aufträge im Vordergrund. Wir
                stehen für fachmännische Handwerksarbeit komplexer Arbeiten rund
                um die Innen- und Außengestaltung von Räumen, Gebäuden und
                Fassaden – im Großen wie im Kleinen.
                <br />
                <br />
                Regelmäßige Fortbildungen und der Einsatz neuester Materialien
                und Arbeitstechniken sichern bis heute die hohe Qualität und
                Modernität der Leistungen. Von der ersten Beratung über die
                Planung und Materialauswahl bis hin zur Fertigstellung, sind wir
                gerne für Sie da.
              </p>
            </div>
            <div className="w-1/2 ">
              <div className="px-16 py-8 max-w-sm">
                <img src={about_us} alt="25 Jahre Malerbetrieb Kühnle"></img>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="container-services">
          <h1 className="text-4xl mb-4">Services.</h1>
          <Tabs defaultValue="innenbereich" className="w-[800px]">
            <TabsList>
              <TabsTrigger value="innenbereich">Innenbereich</TabsTrigger>
              <TabsTrigger value="aussenbereich">Außenbereich</TabsTrigger>
            </TabsList>
            <TabsContent value="innenbereich">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
                {services_innenbereich.map((number) => (
                  <Button variant="outline" key={number}>
                    {number}
                  </Button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="aussenbereich">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
                {services_aussenbereich.map((number) => (
                  <Button variant="outline" key={number}>
                    {number}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Gallery */}

        <div className="container-gallery p-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={fassade} alt="Fassade" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="container-faq">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Machen Sie auch Aussenarbeiten?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Wie lange ist die Vorlaufzeit?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Haben Sie auch Restposten im Angebot?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="container-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;
