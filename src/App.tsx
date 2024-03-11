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
import capetown from "./assets/capetown.jpeg";
import about_us from "./assets/25-Jahre.png";
import klinikum from "./assets/klinikum.jpeg";
import haus from "./assets/haus.jpeg";
import balkon from "./assets/balkon.jpeg";

// Navbar
import { Navbar } from "./components/ui/navbar";

// Footer
import { Footer } from "./components/ui/footer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { services_innenbereich, services_aussenbereich } from "./constants";

import { WavyBackground } from "./components/ui/wavy-background";

import { DefaultGallery } from "./components/ui/image-gallery";
// import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";


function App() {
  return (
    <html>
      <body>
        {/* Navbar */}
        <div className="w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="container-hero bg-center bg-cover flex flex-col items-center justify-center ">
          <h2 className="text-2xl mb-4">Malerbetrieb Kühnle</h2>
          <h1 className="text-6xl mb-8 font-bold text-center">
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
              <h1 className="text-6xl mb-4  font-bold">Über uns.</h1>
              <p>
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
              <div className="max-w-sm border-4 border-[#737174]">
                <img src={about_us} alt="25 Jahre Malerbetrieb Kühnle"></img>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div
          className="container-services flex flex-col items-center justify-center"
          id="service"
        >
          <h1 className="text-6xl mb-4 font-bold">Services.</h1>
          <Tabs defaultValue="innenbereich">
            <TabsList className="flex justify-center">
              <TabsTrigger value="innenbereich">Innenbereich</TabsTrigger>
              <TabsTrigger value="aussenbereich">Außenbereich</TabsTrigger>
            </TabsList>
            <TabsContent value="innenbereich">
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
                {services_innenbereich.map((number) => (
                  <Button variant="outline" key={number}>
                    {number}
                  </Button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="aussenbereich">
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
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

        {/* <div className="container-gallery p-20 flex flex-col items-center justify-center">
          <h1 className="text-6xl mb-4  font-bold">Referenzen.</h1>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <img src={capetown} alt="Capetown" />
              </CarouselItem>
              <CarouselItem>
                <img src={klinikum} alt="Klinikum" />
              </CarouselItem>
              <CarouselItem>
                <img src={haus} alt="Haus" />
              </CarouselItem>
              <CarouselItem>
                <img src={balkon} alt="Balkon" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}

        <div className="container-faq flex flex-col">
          <h1 className="text-6xl mb-4 font-bold">Noch Fragen?</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Wie lange ist die Vorlaufzeit für Aufträge?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Führen Sie auch Wärmedämmungen aus?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Haben Sie Restposen im Angebot?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="container-waves flex flex-col items-center justify-center">
          <WavyBackground className="max-w-4xl mx-auto ">
            <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold inter-var text-center">
              Wir bringen Farbe in Ihr Leben.
            </p>
            <div className="flex justify-center pt-8">
              <Button variant="default">Kontakt</Button>
            </div>
          </WavyBackground>
        </div>

        {/* <div className="container-waves">
          <BackgroundGradientAnimation>
            <div className="container-services-waves flex flex-col items-center justify-center">
              <h1 className="text-6xl mb-4 text-white">Services.</h1>
              <Tabs defaultValue="innenbereich">
                <TabsList className="flex justify-center">
                  <TabsTrigger value="innenbereich">
                    Arbeiten im Innenbereich
                  </TabsTrigger>
                  <TabsTrigger value="aussenbereich">
                    Arbeiten im Außenbereich
                  </TabsTrigger>
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
                      <Button variant="ghost" key={number}>
                        {number}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </BackgroundGradientAnimation>
        </div> */}
        <div className="container-gallery">
          <h1 className="text-6xl mb-4 font-bold">Referenzen.</h1>

          <DefaultGallery />
        </div>
       

        <div className="container-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;
