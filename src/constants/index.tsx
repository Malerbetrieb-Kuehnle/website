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

export const footerLinks = [
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
    ],
  },
];

export const service_innenbereich = [
  {
    title: "Innenanstrich",
    description: "Wir führen alle Anstriche im Innenbereich aus.",
    image: Innenanstrich,
  },
  {
    title: "Bodenbeschichtungen",
    description:
      "Spezielle Beschichtungen für verschiedene Böden, etwa Epoxidharz oder Betonversiegelung.",
    image: Bodenbeschichtungen,
  },
  {
    title: "Lackierarbeiten",
    description:
      "Alle Lackierarbeiten führen wir direkt bei Ihnen vor Ort aus.",
    image: Lackierarbeiten2,
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Wir beraten Sie bei der Farbgestaltung im Innen- und Außenbereich.",
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
      "Von der Fototapete bis zum hochwertigen italienischen Wandbelag.",
    image: projektBild("praxis-wandbelag"),
  },
  {
    title: "Betonoptik",
    description:
      "Wir bilden die Textur von Beton auf Ihren Wänden nach, für einen modernen, industriellen Raumeindruck.",
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
      "Für neue und abgewitterte Holzbauteile, auch nach Hagelschäden am Gebäude.",
    image: projektBild("giebel-grau-verschalung"),
  },
  {
    title: "Eigener Gerüstbau",
    description:
      "Für unsere Arbeiten stellen wir das Arbeitsschutzgerüst an Ihrem Gebäude selbst.",
    image: Geruestbau,
  },
  {
    title: "Putzausbesserungen",
    description:
      "Wir bessern beschädigten Putz aus und bereiten die Fläche für den Anstrich vor.",
    image: Putzausbesserungen,
  },
  {
    title: "Fassadenanstriche",
    description:
      "Von der Untergrundvorbereitung über die Auswahl von Farbtönen und Materialien bis zur Ausführung.",
    image: projektBild("altbau-pfirsich-seite"),
  },
  {
    title: "Hochdruckreinigung",
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
      "Wir beraten Sie bei der Farbgestaltung im Innen- und Außenbereich.",
    image: Farbberatung,
  },
  {
    title: "Lackierarbeiten",
    description: "Alle Lackierarbeiten direkt bei Ihnen vor Ort.",
    image: Lackierarbeiten1,
  },
  {
    title: "Renova-Fensterflügel",
    description:
      "Lieferung und Montage von Renova-Alu-Fensterflügeln und Fensterstock-Abdeckungen.",
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
    question: "Verwenden Sie nachhaltige Produkte?",
    answer:
      "Ja. Wir verwenden umweltfreundlich hergestellte Produkte, etwa Farben und Lacke mit geringem VOC-Gehalt (flüchtige organische Verbindungen) und lösungsmittelfreie Alternativen.",
  },
  {
    question: "Helfen Sie beim Aus- und Einräumen?",
    answer: "Ja, gerne helfen wir Ihnen beim Aus- und Einräumen.",
  },
  {
    question: "Welche Ausstattung bringen Sie mit?",
    answer: "Wir arbeiten mit hochwertigen Werkzeugen, Geräten und Materialien.",
  },
  {
    question: "Halten Sie Termine ein?",
    answer: "Ja. Wir halten Termine ein und arbeiten nach Zeitplan.",
  },
  {
    question: "Gehen Sie auf individuelle Wünsche ein?",
    answer: "Ja. Guter Service und Ihre Wünsche sind uns sehr wichtig.",
  },
  {
    question: "Bleibt die Baustelle sauber?",
    answer:
      "Ja. Wir halten die Baustelle sauber und ordentlich, während und nach der Arbeit.",
  },
];
