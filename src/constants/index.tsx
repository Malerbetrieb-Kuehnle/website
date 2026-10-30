import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import Betonoptik from "@/assets/services/Betonoptik.jpg";
import Hochdruckwasserreinigung from "@/assets/services/Hochdruckwasserreinigung.jpg";
import Bodenbeschichtungen from "@/assets/services/Bodenbeschichtungen.jpg";
import Farbberatung from "@/assets/services/Farbberatung.jpg";
import Geruestbau from "@/assets/services/Geruestbau.jpg";
import Innenanstrich from "@/assets/services/Innenanstrich.jpg";
import Lackierarbeiten1 from "@/assets/services/Lackierarbeiten .jpg";
import Lackierarbeiten2 from "@/assets/services/Lackierarbeiten.jpg";
import Putzausbesserungen from "@/assets/services/Putzausbesserungen.jpg";
import RenovaFensterfluegelAbdeckung from "@/assets/services/Renova-Fensterfluegel-Abdeckung.jpg";
import Renovierungsarbeiten from "@/assets/services/Renovierungsarbeiten.jpg";
import Spachtelarbeiten from "@/assets/services/Spachtelarbeiten.jpg";
import Verputzarbeiten from "@/assets/services/Verputzarbeiten.jpg";
import { projektBild } from "@/lib/bilder";

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
    title: "Instagram",
    icon: FaInstagram,
    path: "https://www.instagram.com/malerbetrieb_kuehnle/",
  },
  {
    id: "email",
    title: "E-Mail",
    icon: FaEnvelope,
    path: "mailto:malerbetrieb.kuehnle@gmx.de",
  },
  {
    id: "telefon",
    title: "Telefon",
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
    image: Innenanstrich,
  },
  {
    title: "Bodenbeschichtungen",
    description:
      "Anfragen von speziellen Beschichtungen auf verschiedenen Böden wie Epoxidharz oder Betonversiegelung.",
    image: Bodenbeschichtungen,
  },
  {
    title: "Lackierarbeiten",
    description:
      "Sämtliche Lackierarbeiten werden bei Ihnen vor Ort durchgeführt.",
    image: Lackierarbeiten2,
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen- und Außenbereich.",
    image: Farbberatung,
  },
  {
    title: "Spachteltechniken",
    description:
      "Wir führen für Sie klassische Glättetechniken an Wänden und Decken durch.",
    image: Spachtelarbeiten,
  },
  {
    title: "Renovierungsarbeiten",
    description: "Wir bringen auch alte Gemäuer wieder auf Vordermann.",
    image: Renovierungsarbeiten,
  },
  {
    title: "Tapezierarbeiten",
    description:
      "Egal ob Fototapeten oder moderne Wandbeläge, wir bringen hochwertige italienische Wandbeläge für unsere Kunden an die Wand.",
    image: projektBild("praxis-wandbelag"),
  },
  {
    title: "Betonoptik",
    description:
      "Malerarbeiten in Betonoptik können eine moderne und industrielle Ästhetik in einem Raum schaffen. Hier wird die Textur und Optik von Beton nachgeahmt.",
    image: Betonoptik,
  },
  {
    title: "Verputzarbeiten",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    image: Verputzarbeiten,
  },
];

export const service_aussenbereich = [
  {
    title: "Holzanstriche aller Art",
    description:
      "Neu und abgewitterte Holzbauteile sowie Hagelschäden am Gebäude.",
    image: projektBild("giebel-grau-verschalung"),
  },
  {
    title: "Eigener Gerüstbau",
    description:
      "Wir bauen für unseren Eigengebrauch an Ihrem Gebäude Arbeitsschutzgerüste auf.",
    image: Geruestbau,
  },
  {
    title: "Putzausbesserungen",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    image: Putzausbesserungen,
  },
  {
    title: "Fassadenanstriche",
    description:
      "Von der Untergrundvorbereitung, der Auswahl von Farbtönen und der richtigen Materialen bis hin zur Ausführung.",
    image: projektBild("altbau-pfirsich-seite"),
  },
  {
    title: "Hochdruck-Wasser-Reiniger",
    description: "Reinigung von verschmutzten Flächen am Gebäude.",
    image: Hochdruckwasserreinigung,
  },
  {
    title: "Renovierungsarbeiten",
    description:
      "Wir bringen stark renovierungsbedürftige Fassaden wieder auf Vordermann.",
    image: Renovierungsarbeiten,
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen und Außenbereich.",
    image: Farbberatung,
  },
  {
    title: "Lackierarbeiten",
    description: "Sämtliche Lackierarbeiten bei Ihnen vor Ort.",
    image: Lackierarbeiten1,
  },
  {
    title: "Renova-Fenster-Flügel",
    description:
      "Lieferung und Montage von Renova Alu-Fensterflügel und Fensterstock Abdeckungen.",
    image: RenovaFensterfluegelAbdeckung,
  },
];

export const farbtoene = [
  {
    name: "Elfenbein",
    projekt: "Kinderhaus",
    hex: "#E6DCC6",
    hell: false,
    bild: "kinderhaus-elfenbein",
    position: "50% 50%",
  },
  {
    name: "Pfirsich",
    projekt: "Historische Fassade",
    hex: "#EFB98A",
    hell: false,
    bild: "altbau-pfirsich-seite",
    position: "60% 45%",
  },
  {
    name: "Flieder",
    projekt: "Wohnhaus",
    hex: "#B8B4DC",
    hell: false,
    bild: "wohnhaus-flieder",
    position: "70% 55%",
  },
  {
    name: "Salbei",
    projekt: "Altbauzimmer",
    hex: "#8F9674",
    hell: false,
    bild: "altbau-schablonendecke",
    position: "50% 42%",
  },
  {
    name: "Türkis",
    projekt: "Wartezimmer",
    hex: "#58AFC8",
    hell: false,
    bild: "praxis-wartezimmer",
    position: "60% 50%",
  },
  {
    name: "Karminrot",
    projekt: "Mehrfamilienhaus",
    hex: "#A8323E",
    hell: true,
    bild: "mehrfamilienhaus-rote-laeden",
    position: "50% 62%",
  },
  {
    name: "Anthrazit",
    projekt: "Anbau",
    hex: "#55585C",
    hell: true,
    bild: "anbau-anthrazit",
    position: "50% 60%",
  },
];

export const ablauf = [
  {
    title: "Beratung",
    description:
      "Wir beraten Sie bei der Auswahl von Farbtönen und Materialien im Innen- und Außenbereich.",
  },
  {
    title: "Entwurf",
    description:
      "Gemeinsam legen wir die Farbgestaltung fest, von der Untergrundvorbereitung bis zum letzten Anstrich.",
  },
  {
    title: "Umsetzung",
    description:
      "Wir halten Termine ein, arbeiten sauber und hinterlassen die Baustelle ordentlich.",
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
