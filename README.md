
![Malerbetrieb Kühnle](src/assets/logo.png)


# Malerbetrieb Kühnle
Website für Malerbetrieb Kühnle

Ihr Spezialist für hochwertige Malerarbeiten und Farbgestaltung aus Bad Aibling.


## Design und Entwicklung

- [@m-kuehnle](https://www.github.com/m-kuehnle)


## Website

- https://malerbetrieb-kuehnle.de


## Rückruf-Formular

Das Formular sendet direkt aus dem Browser an Pushover (`src/components/ui/profileform.tsx`). Token und User-Key stehen in `.env` und landen beim Build im öffentlichen JavaScript. Das Deploy-Now-Projekt ist vom Typ Static, dort läuft kein Serverskript, das die Werte verbergen könnte.

`npm run dev` und `npm run preview` senden deshalb echte Nachrichten.


## Besucherstatistik

Matomo läuft als Website 3 auf der Instanz unter https://api.wasser-werte.de/statistik/. `src/lib/statistik.ts` meldet die Aufrufe ohne `matomo.js` und ohne Cookies, nur auf der Live-Domain.


## Impressum und Datenschutz

Beide Texte liegen als reines HTML in `src/legal/`. Aus eRecht24 den HTML-Code kopieren und den Inhalt von `impressum.html` oder `datenschutz.html` komplett ersetzen, die Überschrift `<h1>` gehört dazu. Das Aussehen kommt aus `.rechtstext` in `src/index.css`.

Rückruf-Formular, „Keine Cookies“ und Matomo sind eigene Abschnitte der Datenschutzerklärung. Sie müssen nach dem Einfügen wieder drinstehen, sonst fehlen sie.


## Build

`npm run build` erzeugt die Seite und schreibt danach mit `scripts/prerender.mjs` für jede Seite fertiges HTML nach `dist`. Titel und Beschreibungen stehen in `src/constants/seo.ts`.


## Deployment

Jeder Push baut die Seite über IONOS Deploy Now: `staging` nach https://home-5015629527.app-ionos.space, `main` nach https://malerbetrieb-kuehnle.de. GitHub hält den Workflow `Deploy Now: Deploy to IONOS` an, bis er im Actions-Tab freigegeben wird.


## Tech Stack

**Client:** Vite, React, TypeScript, Tailwind CSS

**Hosting:** IONOS Deploy Now, statische Seite ohne Server

