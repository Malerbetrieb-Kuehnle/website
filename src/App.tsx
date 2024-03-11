import "./App.css";
import styles from "./style";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { services_innenbereich, services_aussenbereich } from "./constants";

import { WavyBackground } from "./components/ui/wavy-background";

import { DefaultGallery } from "./components/ui/image-gallery";

// Import the images
import about_us from "./assets/25-Jahre.png";
import wirbildenaus from "./assets/wirbildenaus.png";

// Navbar
import { Navbar } from "./components/ui/navbar";

// Footer
import { Footer } from "./components/ui/footer";

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

        {/* About us */}
        <div className="container-about py-8 bg-[#737174]">
          <div className="about-section flex  ">
            <div className="w-1/2 ">
              <div className="max-w-sm">
                <img src={about_us} alt="25 Jahre Malerbetrieb Kühnle"></img>
              </div>
            </div>
            <div className="w-1/2 pr-8 text-white ">
              <h1 className="text-6xl mb-4  font-bold ">Ihr Malerbetrieb.</h1>
              <p>
                Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit
                Sitz in Bad Aibling. Als Meisterbetrieb im Maler- und
                Lackiererhandwerk stehen Qualitätsarbeit, Zuverlässigkeit und
                termingerechte Abwicklung der Aufträge im Vordergrund.
                <br />
                <br /> Wir stehen für fachmännische Handwerksarbeit komplexer
                Arbeiten rund um die Innen- und Außengestaltung von Räumen,
                Gebäuden und Fassaden – im Großen wie im Kleinen.
                <br />
                <br />
                Regelmäßige Fortbildungen und der Einsatz neuester Materialien
                und Arbeitstechniken sichern bis heute die hohe Qualität und
                Modernität der Leistungen. Von der ersten Beratung über die
                Planung und Materialauswahl bis hin zur Fertigstellung, sind wir
                gerne für Sie da.
              </p>
            </div>
          </div>
        </div>

        {/* Ausbildung */}
        <div className="container-about bg-[#737174]">
          <div className="about-section flex  ">
            <div className="w-1/2 pl-8 text-white ">
              <h1 className="text-6xl mb-4  font-bold ">Ausbildung.</h1>
              <p>
                Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit
                Sitz in Bad Aibling. Als Meisterbetrieb im Maler- und
                Lackiererhandwerk stehen Qualitätsarbeit, Zuverlässigkeit und
                termingerechte Abwicklung der Aufträge im Vordergrund.
                <br />
                <br /> Wir stehen für fachmännische Handwerksarbeit komplexer
                Arbeiten rund um die Innen- und Außengestaltung von Räumen,
                Gebäuden und Fassaden – im Großen wie im Kleinen.
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
              <div className="max-w-sm">
                <img
                  src={wirbildenaus}
                  alt="25 Jahre Malerbetrieb Kühnle"
                ></img>
              </div>
            </div>
          </div>
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

        <div className="container-gallery flex flex-col pb-4 pt-4">
          <h1 className="text-6xl mb-4 font-bold">Referenzen.</h1>
          <DefaultGallery />
        </div>

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

        <div className="container-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;
