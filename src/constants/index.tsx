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
    path: "/service/",
  },
  {
    id: "referenzen",
    title: "Referenzen",
    path: "/referenzen/",
  },
];

export const email = "kontakt@malerbetrieb-kuehnle.de";

export const instagram = "https://www.instagram.com/malerbetrieb_kuehnle/";

// Orte aus unseren Referenzen
export const einsatzorte = [
  "Bad Aibling",
  "Rosenheim",
  "Kolbermoor",
  "Bruckmühl",
  "Bad Feilnbach",
  "Brannenburg",
  "Neubeuern",
  "Tuntenhausen",
];

export const footerLinks = [
  {
    title: "Malerbetrieb",
    links: [
      { id: "home", title: "Home", path: "/" },
      { id: "service", title: "Service", path: "/service/" },
      { id: "referenzen", title: "Referenzen", path: "/referenzen/" },
      { id: "kontakt", title: "Kontakt", path: "/kontakt/" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { id: "impressum", title: "Impressum", path: "/impressum/" },
      { id: "datenschutz", title: "Datenschutz", path: "/datenschutz/" },
    ],
  },
];

export const service_innenbereich = [
  {
    title: "Innenanstrich",
    description:
      "Wände und Decken in Wohnräumen, Büros und Praxen, sauber und deckend gestrichen.",
    image: Innenanstrich,
  },
  {
    title: "Bodenbeschichtungen",
    description:
      "Bodenbeschichtungen für verschiedene Untergründe, etwa aus Epoxidharz oder als Betonversiegelung.",
    image: Bodenbeschichtungen,
  },
  {
    title: "Lackierarbeiten",
    description:
      "Türen, Treppen und Geländer lackieren wir direkt bei Ihnen vor Ort.",
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
      "Klassische Spachtel- und Glättetechniken für Wände und Decken.",
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
      "Tapezieren von der Fototapete bis zum hochwertigen italienischen Wandbelag.",
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
      "Holzanstriche für neue und abgewitterte Bauteile, auch nach Hagelschäden am Gebäude.",
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
      "Fassadenanstrich von der Untergrundvorbereitung über die Auswahl von Farbtönen und Materialien bis zur Ausführung.",
    image: projektBild("altbau-pfirsich-seite"),
  },
  {
    title: "Hochdruckreinigung",
    description:
      "Wir reinigen verschmutzte Flächen am Gebäude mit dem Hochdruckreiniger.",
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
    description:
      "Fenster, Türen und Holzbauteile lackieren wir direkt bei Ihnen vor Ort.",
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

export const faqGruppen = [
  {
    titel: "Angebot und Ablauf",
    fragen: [
      {
        question: "Wie bekomme ich ein Angebot?",
        answer:
          "Rufen Sie uns an oder fordern Sie über das Formular einen Rückruf an. Wir besprechen Ihr Vorhaben mit Ihnen und erstellen auf dieser Grundlage Ihr Angebot.",
      },
      {
        question: "Was kostet ein Anstrich?",
        answer:
          "Das hängt von Fläche, Untergrund, Material und den nötigen Vorarbeiten ab. Deshalb nennen wir hier keine Pauschalpreise. Beschreiben Sie uns Ihr Vorhaben, dann bekommen Sie ein Angebot, das zu Ihrem Projekt passt.",
      },
      {
        question: "In welchen Orten sind Sie als Maler im Einsatz?",
        answer: `Unser Betrieb sitzt in Bad Aibling. Projekte hatten wir unter anderem in ${einsatzorte
          .slice(1, -1)
          .join(
            ", "
          )} und Tuntenhausen. Liegt Ihr Ort nicht dabei, fragen Sie uns einfach.`,
      },
      {
        question: "Habe ich einen festen Ansprechpartner?",
        answer:
          "Ja. Beratung, Entwurf und Umsetzung liegen bei uns in einer Hand. Sie haben von Anfang bis Ende einen Ansprechpartner.",
      },
      {
        question: "Halten Sie vereinbarte Termine ein?",
        answer:
          "Ja. Wir halten Termine ein und arbeiten nach Zeitplan. Die termingerechte Abwicklung gehört für uns als Meisterbetrieb dazu.",
      },
    ],
  },
  {
    titel: "Leistungen",
    fragen: [
      {
        question: "Welche Malerarbeiten übernehmen Sie?",
        answer:
          "Innenanstriche, Tapezier-, Spachtel- und Lackierarbeiten ebenso wie Fassadenanstriche, Holzanstriche und Putzausbesserungen. Dazu kommen Bodenbeschichtungen und Gestaltungen in Betonoptik.",
      },
      {
        question: "Stellen Sie auch das Gerüst für den Fassadenanstrich?",
        answer:
          "Ja. Für unsere Arbeiten bauen wir das Arbeitsschutzgerüst an Ihrem Gebäude selbst auf. Sie brauchen dafür keine weitere Firma.",
      },
      {
        question: "Beraten Sie bei der Farbauswahl?",
        answer:
          "Ja. Wir beraten Sie bei der Farbgestaltung im Innen- und Außenbereich und helfen bei der Auswahl von Farbtönen und Materialien.",
      },
      {
        question: "Renovieren Sie auch alte Gebäude?",
        answer:
          "Ja. Wir bringen auch alte Gemäuer und stark renovierungsbedürftige Fassaden wieder auf Vordermann. Beispiele finden Sie bei unseren Referenzen.",
      },
      {
        question: "Arbeiten Sie auch für Firmen und öffentliche Auftraggeber?",
        answer:
          "Ja. Neben Wohnhäusern gehören Praxen, Büros, Banken und öffentliche Gebäude zu unseren Referenzen.",
      },
      {
        question: "Bilden Sie Maler und Lackierer aus?",
        answer:
          "Ja, wir bilden seit Jahren mit Erfolg aus. Bewerbungen nehmen wir gerne per E-Mail entgegen.",
      },
    ],
  },
  {
    titel: "Material und Baustelle",
    fragen: [
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
        question: "Bleibt die Baustelle sauber?",
        answer:
          "Ja. Wir halten die Baustelle sauber und ordentlich, während und nach der Arbeit.",
      },
      {
        question: "Mit welcher Ausstattung arbeiten Sie?",
        answer:
          "Wir arbeiten mit hochwertigen Werkzeugen, Geräten und Materialien von etablierten Lieferanten.",
      },
      {
        question: "Gehen Sie auf individuelle Wünsche ein?",
        answer:
          "Ja. Guter Service und Ihre Wünsche sind uns sehr wichtig, von der ersten Beratung bis zur fertigen Fläche.",
      },
    ],
  },
];
