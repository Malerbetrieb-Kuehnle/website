import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/lib/utils";
import { service_innenbereich, service_aussenbereich } from "@/constants";

export default function Services() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto mb-40">
      <div className="mx-auto max-w-2xl sm:text-center mb-8">
        <Reveal keyframes={customAnimation} cascade triggerOnce>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Service.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wir bieten eine breite Palette von Innen- und Außendienstleistungen
            an, darunter Innenanstriche, individuelle Farbberatung,
            Fassadenanstriche und Renovierungsarbeiten.
          </p>
        </Reveal>
      </div>
      <Reveal keyframes={customAnimation} triggerOnce delay={800} duration={500}>
        <div className="mt-6 rounded-2xl ">
          <Tabs defaultValue="innenbereich">
            <div className="max-w-max mx-auto my-4">
              <TabsList className="bg-[#f5f5f5]">
                <TabsTrigger value="innenbereich">Innenbereich</TabsTrigger>
                <TabsTrigger value="aussenbereich">Außenbereich</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="innenbereich">
              <StickyScroll content={service_innenbereich} />
            </TabsContent>
            <TabsContent value="aussenbereich">
              <StickyScroll content={service_aussenbereich} />
            </TabsContent>
          </Tabs>
        </div>
      </Reveal>
    </div>
  );
}
