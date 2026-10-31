// Schreibt jede Seite als fertiges HTML nach dist. So stehen Texte und
// Meta-Daten direkt im Quelltext und Direktaufrufe wie /kontakt/ funktionieren.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const { render, seiten, domain } = await import(
  pathToFileURL("dist-ssr/entry-server.js").href
);

const vorlage = readFileSync("dist/index.html", "utf8");

const seitenHtml = (pfad, renderPfad, titel, beschreibung, kopf = "") => {
  const ersetzungen = [
    [/<title>.*?<\/title>/, `<title>${titel}</title>`],
    [/(<meta\s+name="description"\s+content=")[^"]*/, `$1${beschreibung}`],
    [
      /(<meta\s+property="og:description"\s+content=")[^"]*/,
      `$1${beschreibung}`,
    ],
    [/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${titel}`],
    [/(<meta\s+property="og:url"\s+content=")[^"]*/, `$1${domain}${pfad}`],
    [/(<link\s+rel="canonical"\s+href=")[^"]*/, `$1${domain}${pfad}`],
  ];

  return ersetzungen
    .reduce((html, [muster, ersatz]) => html.replace(muster, ersatz), vorlage)
    .replace("</head>", () => `${kopf}</head>`)
    .replace(
      '<div id="root"></div>',
      () => `<div id="root">${render(renderPfad)}</div>`
    );
};

for (const [pfad, { titel, beschreibung }] of Object.entries(seiten)) {
  const ordner = `dist${pfad}`;
  mkdirSync(ordner, { recursive: true });
  writeFileSync(
    `${ordner}index.html`,
    seitenHtml(pfad, pfad, titel, beschreibung)
  );
}

writeFileSync(
  "dist/404.html",
  seitenHtml(
    "/",
    "/404.html",
    "Seite nicht gefunden | Malerbetrieb Kühnle",
    "Diese Seite existiert nicht.",
    '<meta name="robots" content="noindex" />'
  )
);

rmSync("dist-ssr", { recursive: true });
