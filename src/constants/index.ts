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
        id: "service",
        title: "Service",
        path: "/service",
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
        path: "javascript:UC_UI.showSecondLayer();",
      }, 
    ],
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
