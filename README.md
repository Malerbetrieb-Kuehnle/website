
![Malerbetrieb Kühnle](src/assets/logo.png)


# Malerbetrieb Kühnle
Website für Malerbetrieb Kühnle

Ihr Spezialist für hochwertige Malerarbeiten und Farbgestaltung aus Bad Aibling.


## Design und Entwicklung

- [@m-kuehnle](https://www.github.com/m-kuehnle)


## Website

- https://malerbetrieb-kuehnle.de


## Rückruf-Formular

Das Formular sendet an `public/api/rueckruf.php`. Das Skript läuft auf dem Server und leitet die Anfrage an Pushover weiter, die Zugangsdaten erreichen den Browser nie.

Beim Build schreibt `scripts/rueckruf-zugang.mjs` die Zugangsdaten nach `dist/api/.htpushover.php`. Dateien mit `.ht` am Anfang liefert der Server nicht aus. Der Build bricht ab, wenn diese GitHub-Secrets fehlen:

- `PUSHOVER_API_TOKEN`
- `PUSHOVER_USER_KEY`

`npm run dev` kann kein PHP ausführen, das Formular zeigt dort deshalb die Fehlermeldung.


## Tech Stack

**Client:** Vite, React, Typescript, TailwindCSS

**Server:** Node

