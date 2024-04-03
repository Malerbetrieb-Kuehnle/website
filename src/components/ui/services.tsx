import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Betonoptik from "../../assets/services/Betonoptik.jpg";
import Hochdruckwasserreinigung from "../../assets/services/Hochdruckwasserreinigung.jpg";
import Bodenbeschichtungen from "../../assets/services/Bodenbeschichtungen.jpg";
import Farbberatung from "../../assets/services/Farbberatung.jpg";
import Fassadenanstriche from "../../assets/services/Fassadenanstriche.jpg";
import Geruestbau from "../../assets/services/Geruestbau.jpg";
import Holzanstrich from "../../assets/services/Holzanstrich.jpg";
import Innenanstrich from "../../assets/services/Innenanstrich.jpg";
import Lackierarbeiten1 from "../../assets/services/Lackierarbeiten .jpg";
import Lackierarbeiten2 from "../../assets/services/Lackierarbeiten.jpg";
import Putzausbesserungen from "../../assets/services/Putzausbesserungen.jpg";
import RenovaFensterfluegelAbdeckung from "../../assets/services/Renova-Fensterfluegel-Abdeckung.jpg";
import Renovierungsarbeiten from "../../assets/services/Renovierungsarbeiten.jpg";
import Spachtelarbeiten from "../../assets/services/Spachtelarbeiten.jpg";
import Tapezierarbeiten from "../../assets/services/Tapezierarbeiten.jpg";
import Verputzarbeiten from "../../assets/services/Verputzarbeiten.jpg";

const service_innenbereich = [
  {
    title: "Innenanstrich",
    description: "Wir führen sämtliche Anstriche im Innenbereich aus.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Innenanstrich}
          alt="Innenanstrich"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Bodenbeschichtungen",
    description:
      "Anfragen von speziellen Beschichtungen auf verschiedenen Böden wie Epoxidharz oder Betonversiegelung.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Bodenbeschichtungen}
          alt="Bodenbeschichtungen"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Lackierarbeiten",
    description:
      "Sämtliche Lackierarbeiten werden bei Ihnen vor Ort durchgeführt.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Lackierarbeiten2}
          alt="Lackierarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen- und Außenbereich.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Farbberatung}
          alt="Individuelle Farbberatung"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Spachteltechniken",
    description:
      "Wir führen für Sie klassische Glättetechniken an Wänden und Decken durch.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Spachtelarbeiten}
          alt="Spachteltechniken"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Renovierungsarbeiten",
    description: "Wir bringen auch alte Gemäuer wieder auf Vordermann.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Renovierungsarbeiten}
          alt="Renovierungsarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Tapezierarbeiten",
    description:
      "Egal ob Fototapeten oder moderne Wandbeläge, wir bringen hochwertige italienische Wandbeläge für unsere Kunden an die Wand.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Tapezierarbeiten}
          alt="Tapezierarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Betonoptik",
    description:
      "Malerarbeiten in Betonoptik können eine moderne und industrielle Ästhetik in einem Raum schaffen. Hier wird die Textur und Optik von Beton nachgeahmt.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Betonoptik}
          alt="Betonoptik"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Verputzarbeiten",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Verputzarbeiten}
          alt="Verputzarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

const service_aussenbereich = [
  {
    title: "Holzanstriche aller Art",
    description:
      "Neu und abgewitterte Holzbauteile sowie Hagelschäden am Gebäude.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Holzanstrich}
          alt="Holzanstriche aller Art"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Eigener Gerüstbau",
    description:
      "Wir bauen für unseren Eigengebrauch an Ihrem Gebäude Arbeitsschutzgerüste auf.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Geruestbau}
          alt="Eigener Gerüstbau"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Putzausbesserungen",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Putzausbesserungen}
          alt="Putzausbesserungen"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Fassadenanstriche",
    description:
      "Von der Untergrundvorbereitung, der Auswahl von Farbtönen und der richtigen Materialen bis hin zur Ausführung.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Fassadenanstriche}
          alt="Fassadenanstriche"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Hochdruck-Wasser-Reiniger",
    description: "Reinigung von verschmutzen Flächen am Gebäude.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Hochdruckwasserreinigung}
          alt="Hochdruck-Wasser-Reiniger"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Renovierungsarbeiten",
    description:
      "Wir bringen stark renovierungsbedürftige Fassaden wieder auf Vordemann.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Renovierungsarbeiten}
          alt="Renovierungsarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen und Außenbereich.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Farbberatung}
          alt="Individuelle Farbberatung"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Lackierarbeiten",
    description: "Sämtliche Lackierarbeiten bei Ihnen vor Ort.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Lackierarbeiten1}
          alt="Lackierarbeiten"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Renova-Fenster-Flügel",
    description:
      "Lieferung und Montage von Renova Alu-Fensterflügel und Fensterstock Abdeckungen.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={RenovaFensterfluegelAbdeckung}
          alt="Renova-Fenster-Flügel"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center" id="services">
      <div className="mx-auto max-w-2xl sm:text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Für den Innenbereich bieten wir eine breite Palette von
          Dienstleistungen an, darunter Innenanstrich, Bodenbeschichtungen,
          individuelle Farbberatung und mehr. Im Außenbereich umfassen unsere
          Leistungen Fassadenanstriche, Hochdruck-Wasser-Reinigung,
          Renovierungsarbeiten und vieles mehr.
        </p>
      </div>
      <Tabs defaultValue="innenbereich">
        <div className="max-w-max mx-auto">
          <TabsList>
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
  );
}
