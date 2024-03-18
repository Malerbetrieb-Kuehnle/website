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


