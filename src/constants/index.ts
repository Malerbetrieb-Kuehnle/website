import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "referenzen",
    title: "Referenzen",
    path: "/referenzen",
  },
  {
    id: "kontakt",
    title: "Kontakt",
    path: "/kontakt",
  },
];

export const footerLinks = [
  {
    title: "Malerbetrieb",
    links: [
      {
        id: "home",
        title: "Home",
        path: "/",
      },
      {
        id: "referenzen",
        title: "Referenzen",
        path: "/referenzen",
      },
      {
        id: "kontakt",
        title: "Kontakt",
        path: "/kontakt",
      },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      {
        id: "impressum",
        title: "Impressum",
        path: "/impressum",
      },
      {
        id: "datenschutz",
        title: "Datenschutz",
        path: "/datenschutz",
      },
      {
        id: "cookies",
        title: "Cookies",
        path: "/cookies",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "instagram",
    icon: FaInstagram,
    path: "https://www.instagram.com/",
  },
  {
    id: "email",
    icon: FaEnvelope,
    path: "https://www.facebook.com/",
  },
  {
    id: "telefon",
    icon: FaPhone,
    path: "https://www.facebook.com/",
  },
];

export const services_innenbereich = [
  "Innenanstrich",
  "Individuelle Farbberatung",
  "Tapezierarbeiten",
  "Bodenbeschichtungen",
  "Spachteltechniken",
  "Beton Optik",
  "Lackierarbeiten",
  "Renovierungsarbeiten",
  "Verputzarbeiten",
];

export const services_aussenbereich = [
  "Holzanstriche aller Art",
  "Fassadenanstriche",
  "Individuelle Farbberatung",
  "Eigener Gerüstbau",
  "Hochdruck-Wasser-Reinigung",
  "Lackierarbeiten",
  "Putzausbesserungen",
  "Renovierungsarbeiten",
  "Renova-Fenster Flügel",
];
