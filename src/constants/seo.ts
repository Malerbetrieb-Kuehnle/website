export const domain = "https://malerbetrieb-kuehnle.de";

// Titel und Beschreibung je Seite. Der Build schreibt sie ins HTML.
export const seiten: Record<string, { titel: string; beschreibung: string }> = {
  "/": {
    titel: "Maler in Bad Aibling | Malerbetrieb Kühnle",
    beschreibung:
      "Ihr Meisterbetrieb für Malerarbeiten, Fassadenanstriche und Farbgestaltung in Bad Aibling und Umgebung. Beratung, Entwurf und Umsetzung aus einer Hand.",
  },
  "/service/": {
    titel: "Malerarbeiten innen und außen | Malerbetrieb Kühnle",
    beschreibung:
      "Innenanstrich, Fassadenanstrich, Tapezierarbeiten, Lackierarbeiten, Holzanstriche und Farbberatung vom Meisterbetrieb aus Bad Aibling.",
  },
  "/referenzen/": {
    titel: "Referenzen: Fassaden und Innenräume | Malerbetrieb Kühnle",
    beschreibung:
      "Abgeschlossene Projekte aus Bad Aibling, Rosenheim und der Region: Fassaden, Wohnhäuser, Praxen und Innenräume vom Malerbetrieb Kühnle.",
  },
  "/kontakt/": {
    titel: "Kontakt und Rückruf | Malerbetrieb Kühnle Bad Aibling",
    beschreibung:
      "Fordern Sie einen Rückruf an oder erreichen Sie uns per Telefon und E-Mail. Malerbetrieb Kühnle, Ebersberger Straße 75, 83043 Bad Aibling.",
  },
  "/impressum/": {
    titel: "Impressum | Malerbetrieb Kühnle",
    beschreibung: "Impressum des Malerbetriebs Kühnle aus Bad Aibling.",
  },
  "/datenschutz/": {
    titel: "Datenschutz | Malerbetrieb Kühnle",
    beschreibung:
      "Datenschutzerklärung des Malerbetriebs Kühnle aus Bad Aibling.",
  },
};
