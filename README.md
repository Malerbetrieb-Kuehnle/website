
![Malerbetrieb Kühnle](src/assets/logo.png)


# Malerbetrieb Kühnle
Website für Malerbetrieb Kühnle

Ihr Spezialist für hochwertige Malerarbeiten und Farbgestaltung aus Bad Aibling.


## Design und Entwicklung

- [@m-kuehnle](https://www.github.com/m-kuehnle)


## Website

- https://malerbetrieb-kuehnle.de


## Rückruf-Formular

Das Formular sendet an `public/api/rueckruf.php`. Das Skript läuft auf dem Server und schickt die Anfrage per E-Mail an kontakt@malerbetrieb-kuehnle.de. Zugangsdaten oder Secrets sind dafür nicht nötig.

`npm run dev` und `npm run preview` führen kein PHP aus, das Formular zeigt dort deshalb die Fehlermeldung.


## Build

`npm run build` erzeugt die Seite und schreibt danach mit `scripts/prerender.mjs` für jede Seite fertiges HTML nach `dist`. Titel und Beschreibungen stehen in `src/constants/seo.ts`.


## Tech Stack

**Client:** Vite, React, Typescript, TailwindCSS

**Server:** Node

