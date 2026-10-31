import Betonoptik from "@/assets/services/Betonoptik.webp";
import Hochdruckwasserreinigung from "@/assets/services/Hochdruckwasserreinigung.webp";
import Bodenbeschichtungen from "@/assets/services/Bodenbeschichtungen.webp";
import Farbberatung from "@/assets/services/Farbberatung.jpg";
import Lackierarbeiten from "@/assets/referenzen/Lackarbeiten2.jpg";
import Putzausbesserungen from "@/assets/services/Putzausbesserungen.webp";
import RenovaFensterfluegelAbdeckung from "@/assets/services/Renova-Fensterfluegel-Abdeckung.jpg";
import Renovierungsarbeiten from "@/assets/services/Renovierungsarbeiten.jpg";
import Spachtelarbeiten from "@/assets/services/Spachtelarbeiten.jpg";
import Verputzarbeiten from "@/assets/services/Verputzarbeiten.jpg";
import { projektBild, projektSrcSet } from "@/lib/bilder";

export const navLinks = [
  { id: "service", title: "Service", path: "/service/" },
  { id: "referenzen", title: "Referenzen", path: "/referenzen/" },
  { id: "ueber-uns", title: "Über uns", path: "/#ueber-uns" },
  { id: "ausbildung", title: "Ausbildung", path: "/#ausbildung" },
  { id: "fragen", title: "Fragen", path: "/#fragen" },
];

export const menueLinks = [
  ...navLinks,
  { id: "kontakt", title: "Kontakt", path: "/kontakt/" },
];

export const email = "kontakt@malerbetrieb-kuehnle.de";

export const instagram = "https://www.instagram.com/malerbetrieb_kuehnle/";

export const telefon = {
  anzeige: "+49 8061 93 98 333",
  href: "tel:+4980619398333",
};

export const adresse = {
  strasse: "Ebersberger Straße 75",
  ort: "83043 Bad Aibling",
};

export const kontaktwege = [
  { titel: "Telefon", wert: telefon.anzeige, href: telefon.href },
  { titel: "Mobil", wert: "+49 172 85 17 479", href: "tel:+491728517479" },
  { titel: "E-Mail", wert: email, href: `mailto:${email}` },
  {
    titel: "Adresse",
    wert: "Ebersberger Straße\u00a075, 83043\u00a0Bad\u00a0Aibling",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${adresse.strasse}, ${adresse.ort}`
    )}`,
    extern: true,
  },
  {
    titel: "Instagram",
    wert: "malerbetrieb_kuehnle",
    href: instagram,
    extern: true,
  },
];

export const einsatzorte = [
  "Bad Aibling",
  "Rosenheim",
  "München",
  "Kolbermoor",
  "Bruckmühl",
  "Bad Feilnbach",
  "Brannenburg",
  "Neubeuern",
  "Tuntenhausen",
];

export const rechtlichesLinks = [
  { id: "impressum", title: "Impressum", path: "/impressum/" },
  { id: "datenschutz", title: "Datenschutz", path: "/datenschutz/" },
];

interface Leistung {
  title: string;
  description: string;
  image: string;
  srcSet?: string;
}

const foto = (slug: string) => ({
  image: projektBild(slug),
  srcSet: projektSrcSet(slug),
});

export const service_innenbereich: Leistung[] = [
  {
    title: "Innenanstrich",
    description:
      "Wände und Decken in Wohnräumen, Büros und Praxen, sauber und deckend gestrichen.",
    ...foto("altbau-schablonendecke"),
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
    image: Lackierarbeiten,
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
    ...foto("praxis-wandbelag"),
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

export const service_aussenbereich: Leistung[] = [
  {
    title: "Holzanstriche aller Art",
    description:
      "Holzanstriche für neue und abgewitterte Bauteile, auch nach Hagelschäden am Gebäude.",
    ...foto("giebel-grau-verschalung"),
  },
  {
    title: "Eigener Gerüstbau",
    description:
      "Für unsere Arbeiten stellen wir das Arbeitsschutzgerüst an Ihrem Gebäude selbst.",
    ...foto("altbau-geruest"),
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
    ...foto("altbau-pfirsich-seite"),
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
    ...foto("bauernhaus-geruest"),
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
    ...foto("hauswand-dunkle-laeden"),
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
        answer: [
          "Rufen Sie uns an, schreiben Sie uns eine E-Mail oder fordern Sie über das Formular einen Rückruf an. Im ersten Gespräch klären wir, worum es geht: welche Räume oder Flächen, in welchem Zustand und in welchem Zeitraum.",
          "Auf dieser Grundlage erstellen wir Ihr Angebot. Je genauer wir Ihr Vorhaben kennen, desto verlässlicher wird es. Fotos der Flächen helfen uns dabei, schicken Sie diese gerne per E-Mail mit. Größere Vorhaben sehen wir uns am besten vor Ort an.",
        ],
        link: { to: "/kontakt/", title: "Rückruf anfordern" },
      },
      {
        question: "Was kostet ein Anstrich?",
        answer: [
          "Das hängt vor allem von vier Dingen ab: von der Größe der Fläche, vom Zustand des Untergrunds, vom Material und von den nötigen Vorarbeiten. Eine glatte, intakte Wand braucht weniger Aufwand als eine mit Rissen oder alten Tapeten. An der Fassade kommt das Gerüst hinzu.",
          "Deshalb nennen wir hier keine Pauschalpreise. Beschreiben Sie uns Ihr Vorhaben, dann bekommen Sie ein Angebot, das zu Ihrem Projekt passt.",
        ],
      },
      {
        question: "In welchen Orten sind Sie als Maler im Einsatz?",
        answer: [
          `Unser Betrieb sitzt in Bad Aibling im Landkreis Rosenheim. Projekte hatten wir unter anderem in ${einsatzorte
            .slice(1, -1)
            .join(
              ", "
            )} und Tuntenhausen. Einzelne Aufträge führten uns auch nach Grafing, Glonn und Grabenstätt.`,
          "Liegt Ihr Ort nicht dabei, fragen Sie uns einfach. Ob wir Ihr Projekt übernehmen können, hängt auch von Umfang und Termin ab.",
        ],
      },
      {
        question: "Arbeiten Sie auch im Ausland?",
        answer: [
          "Ja. Unser Schwerpunkt liegt in Bad Aibling, Rosenheim und München, wir übernehmen aber auch Aufträge im Ausland. Zu unseren Referenzen gehört zum Beispiel eine Villa in Kapstadt.",
          "Beschreiben Sie uns Ihr Vorhaben und den Standort. Dann klären wir gemeinsam, wie wir es umsetzen können.",
        ],
        link: { to: "/referenzen/", title: "Referenzen ansehen" },
      },
      {
        question: "Habe ich einen festen Ansprechpartner?",
        answer: [
          "Ja. Beratung, Entwurf und Umsetzung liegen bei uns in einer Hand. Sie müssen Ihr Vorhaben also nicht mehrfach erklären und wissen immer, an wen Sie sich wenden.",
          "Das gilt auch, wenn während der Arbeit etwas auffällt, etwa ein Schaden im Untergrund oder ein Wunsch zum Farbton. Solche Punkte besprechen wir direkt mit Ihnen.",
        ],
      },
      {
        question: "Halten Sie vereinbarte Termine ein?",
        answer: [
          "Ja. Die termingerechte Abwicklung gehört für uns als Meisterbetrieb dazu. Wir stimmen den Zeitplan vorab mit Ihnen ab, damit Sie wissen, wann wir kommen und wann welche Räume frei sein sollten.",
          "Bei Arbeiten im Freien kann das Wetter den Ablauf verschieben, denn Farbe und Putz brauchen trockene Flächen und passende Temperaturen. Dann legen wir den neuen Termin gemeinsam mit Ihnen fest.",
        ],
      },
    ],
  },
  {
    titel: "Leistungen",
    fragen: [
      {
        question: "Welche Malerarbeiten übernehmen Sie?",
        answer: [
          "Innen streichen wir Wände und Decken, tapezieren, spachteln und lackieren Türen, Treppen und Geländer. Dazu kommen Verputzarbeiten, Bodenbeschichtungen und Gestaltungen in Betonoptik.",
          "Außen übernehmen wir Fassadenanstriche, Holzanstriche, Putzausbesserungen, Lackierarbeiten an Fenstern und Türen sowie die Hochdruckreinigung. Das Arbeitsschutzgerüst stellen wir selbst, Renova-Alu-Fensterflügel liefern und montieren wir ebenfalls.",
        ],
        link: { to: "/service/", title: "Alle Leistungen ansehen" },
      },
      {
        question: "Stellen Sie auch das Gerüst für den Fassadenanstrich?",
        answer: [
          "Ja. Für unsere Arbeiten bauen wir das Arbeitsschutzgerüst an Ihrem Gebäude selbst auf. Sie brauchen dafür keine weitere Firma und haben keine zusätzliche Abstimmung.",
          "Das Gerüst planen wir von Anfang an mit ein. So passen Aufbau, Anstrich und Abbau zeitlich zusammen, und Sie bekommen den gesamten Ablauf aus einer Hand.",
        ],
      },
      {
        question: "Beraten Sie bei der Farbauswahl?",
        answer: [
          "Ja. Wir beraten Sie bei der Farbgestaltung im Innen- und Außenbereich und helfen bei der Auswahl von Farbtönen und Materialien.",
          "Ein Farbton wirkt je nach Licht, Raumgröße und Umgebung anders. Deshalb lohnt es sich, Farben direkt am Objekt zu beurteilen. An der Fassade achten wir außerdem darauf, dass der Ton zu Dach, Fenstern und Läden passt.",
        ],
      },
      {
        question: "Renovieren Sie auch alte Gebäude?",
        answer: [
          "Ja. Wir bringen auch alte Gemäuer und stark renovierungsbedürftige Fassaden wieder auf Vordermann. Dazu gehören Putzausbesserungen ebenso wie der neue Anstrich.",
          "Gerade bei älteren Häusern entscheidet die Vorbereitung des Untergrunds über das Ergebnis. Deshalb sehen wir uns zuerst an, was der Bestand braucht. Beispiele für historische Fassaden und Altbauzimmer finden Sie bei unseren Referenzen.",
        ],
        link: { to: "/referenzen/", title: "Referenzen ansehen" },
      },
      {
        question: "Arbeiten Sie auch für Firmen und öffentliche Auftraggeber?",
        answer: [
          "Ja. Neben Privathaushalten arbeiten wir für Gewerbe und öffentliche Auftraggeber. Zu unseren Referenzen gehören Praxen, Banken und öffentliche Gebäude, etwa das Amtsgericht Bad Aibling, die Klinik St. Georg und das Sparkassenhochhaus in Rosenheim.",
          "Soll Ihr Betrieb während der Arbeiten weiterlaufen, sprechen Sie uns darauf an. Dann planen wir gemeinsam, welche Bereiche wann an der Reihe sind.",
        ],
      },
      {
        question: "Bilden Sie Maler und Lackierer aus?",
        answer: [
          "Ja, wir bilden seit Jahren mit Erfolg Lehrlinge aus. Der Beruf ist vielseitig: Sie gestalten Innenräume und Fassaden, verlegen Bodenbeläge und verschönern Wände mit Maltechniken, Tapeten oder Dekorputzen.",
          "Bewerbungen nehmen wir gerne per E-Mail entgegen.",
        ],
        link: { to: "/#ausbildung", title: "Mehr zur Ausbildung" },
      },
    ],
  },
  {
    titel: "Material und Baustelle",
    fragen: [
      {
        question: "Verwenden Sie nachhaltige Produkte?",
        answer: [
          "Ja. Wir verwenden umweltfreundlich hergestellte Produkte, etwa Farben und Lacke mit geringem VOC-Gehalt und lösungsmittelfreie Alternativen. VOC steht für flüchtige organische Verbindungen, die beim Trocknen in die Raumluft gelangen können.",
          "Das ist vor allem in Schlaf- und Kinderzimmern oder Praxen sinnvoll. Haben Sie besondere Anforderungen, etwa wegen einer Allergie, dann sagen Sie uns das bitte vorab. Wir berücksichtigen es bei der Auswahl der Materialien.",
        ],
      },
      {
        question: "Helfen Sie beim Aus- und Einräumen?",
        answer: [
          "Ja, gerne helfen wir Ihnen beim Aus- und Einräumen. Sagen Sie uns am besten schon bei der Anfrage, welche Räume betroffen sind und welche Möbel stehen bleiben sollen.",
          "Was im Raum bleibt, decken wir vor Beginn der Arbeiten ab. Empfindliche oder besonders wertvolle Stücke sprechen wir vorher mit Ihnen durch.",
        ],
      },
      {
        question: "Bleibt die Baustelle sauber?",
        answer: [
          "Ja. Wir halten die Baustelle sauber und ordentlich, während und nach der Arbeit. Böden, Möbel und Fenster schützen wir vor Beginn mit Abdeckungen.",
          "Nach den Arbeiten räumen wir Abdeckungen und Material wieder ab und hinterlassen alles ordentlich. So können Sie Ihre Räume schnell wieder nutzen.",
        ],
      },
      {
        question: "Mit welcher Ausstattung arbeiten Sie?",
        answer: [
          "Wir arbeiten mit hochwertigen Werkzeugen, Geräten und Materialien von etablierten Lieferanten. Zu unseren Partnern gehören Prosol, Hoegner, Ulber und Raab.",
          "Durch Fortbildung und den Einsatz moderner Techniken bleiben wir im Maler- und Lackiererhandwerk auf dem aktuellen Stand.",
        ],
      },
      {
        question: "Gehen Sie auf individuelle Wünsche ein?",
        answer: [
          "Ja. Guter Service und Ihre Wünsche sind uns sehr wichtig, von der ersten Beratung bis zur fertigen Fläche. Ob besonderer Farbton, Spachteltechnik, Betonoptik oder hochwertiger Wandbelag: Wir besprechen mit Ihnen, was an Ihrem Objekt möglich ist und wie es am besten wirkt.",
          "Haben Sie ein Bild oder ein Muster, das Ihnen gefällt? Schicken Sie es uns gerne, das erleichtert die Abstimmung.",
        ],
      },
    ],
  },
];
