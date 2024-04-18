import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import Betonoptik from "@/assets/services/Betonoptik.jpg";
import Hochdruckwasserreinigung from "@/assets/services/Hochdruckwasserreinigung.jpg";
import Bodenbeschichtungen from "@/assets/services/Bodenbeschichtungen.jpg";
import Farbberatung from "@/assets/services/Farbberatung.jpg";
import Fassadenanstriche from "@/assets/services/Fassadenanstriche.jpg";
import Geruestbau from "@/assets/services/Geruestbau.jpg";
import Holzanstrich from "@/assets/services/Holzanstrich.jpg";
import Innenanstrich from "@/assets/services/Innenanstrich.jpg";
import Lackierarbeiten1 from "@/assets/services/Lackierarbeiten .jpg";
import Lackierarbeiten2 from "@/assets/services/Lackierarbeiten.jpg";
import Putzausbesserungen from "@/assets/services/Putzausbesserungen.jpg";
import RenovaFensterfluegelAbdeckung from "@/assets/services/Renova-Fensterfluegel-Abdeckung.jpg";
import Renovierungsarbeiten from "@/assets/services/Renovierungsarbeiten.jpg";
import Spachtelarbeiten from "@/assets/services/Spachtelarbeiten.jpg";
import Tapezierarbeiten from "@/assets/services/Tapezierarbeiten.jpg";
import Verputzarbeiten from "@/assets/services/Verputzarbeiten.jpg";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "service",
    title: "Service",
    path: "/service",
  },
  {
    id: "referenzen",
    title: "Referenzen",
    path: "/referenzen",
  },
];

export const socialMedia = [
  {
    id: "instagram",
    icon: FaInstagram,
    path: "https://www.instagram.com/malerbetrieb_kuehnle/",
  },
  {
    id: "email",
    icon: FaEnvelope,
    path: "mailto:malerbetrieb.kuehnle@gmx.de",
  },
  {
    id: "telefon",
    icon: FaPhone,
    path: "tel:+491728517479",
  },
];

const handleCookiesClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();

  if (
    typeof (window as any).UC_UI !== "undefined" &&
    (window as any).UC_UI.showSecondLayer
  ) {
    (window as any).UC_UI.showSecondLayer();
  } else {
    console.error("UC_UI or showSecondLayer function is not defined.");
  }
};

interface FooterLink {
  id: string;
  title: string;
  path: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; // Make onClick optional
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: "Malerbetrieb",
    links: [
      { id: "home", title: "Home", path: "/" },
      { id: "service", title: "Service", path: "/service" },
      { id: "referenzen", title: "Referenzen", path: "/referenzen" },
      { id: "kontakt", title: "Kontakt", path: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { id: "impressum", title: "Impressum", path: "/impressum" },
      { id: "datenschutz", title: "Datenschutz", path: "/datenschutz" },
      {
        id: "cookies",
        title: "Cookies",
        path: "#",
        onClick: handleCookiesClick,
      },
    ],
  },
];

export const service_innenbereich = [
  {
    title: "Innenanstrich",
    description: "Wir führen sämtliche Anstriche im Innenbereich aus.",
    content: (
      <div className="bg-cover h-full">
        <img
          src={Innenanstrich}
          alt="Innenanstrich"
          className="h-full w-full object-cover"
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
        />
      </div>
    ),
  },
];

export const service_aussenbereich = [
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
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
          loading="lazy"
        />
      </div>
    ),
  },
];

export const merkmale_about_us = [
  "25 Jahre Erfahrung",
  "Meisterbetrieb im Maler- und Lackiererhandwerk",
  "Zuverlässigkeit und termingerechte Abwicklung",
  "Fortbildung und Einsatz modernster Techniken",
];

export const merkmale_ausbildung = [
  "Tradition und Innovation",
  "Vielseitiges Tätigkeitsfeld",
  "Fachwissen und Kreativität",
  "Zukunftssicherheit und Berufsperspektiven",
];

export const faqItems = [
  {
    question: "Werden nachhaltige Produkte verwendet?",
    answer:
      "Wir sind ein nachhaltiger Malerbetrieb und verwenden Produkte, die umweltfreundlich hergestellt werden, wie Farben und Lacke mit geringem VOC-Gehalt (flüchtige Organische Verbindungen) und Lösungsmittelfreie Alternativen.",
  },
  {
    question: "Kann beim Ausräumen vor dem Anstrich geholfen werden?",
    answer:
      "Gerne sind wir bereit, Ihnen beim Aus- und Einräumen behilflich zu sein.",
  },
  {
    question: "Hat der Betrieb eine professionelle Ausstattung?",
    answer:
      "Unser Betrieb verfügt über hochwertige Werkzeuge, Geräte und Materialien, um eine qualitativ hochwertige Arbeit zu gewährleisten.",
  },
  {
    question: "Zuverlässigkeit und Pünktlichkeit?",
    answer:
      "Wir halten Termine ein und arbeiten effizient, um den Zeitplan einzuhalten.",
  },
  {
    question: "Kundenorientierung?",
    answer:
      "Ein ausgezeichneter Kundenservice ist uns sehr wichtig, ebenso wie die Berücksichtigung der Bedürfnisse und Wünsche unserer Kunden.",
  },
  {
    question: "Sauberkeit und Ordnung?",
    answer:
      "Wir halten die Baustelle sauber und ordentlich, sowohl während als auch nach der Arbeit.",
  },
];
