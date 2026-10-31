// Schreibt die Pushover-Zugangsdaten beim Build neben das Rückruf-Skript.
// Der Dateiname beginnt mit .ht, solche Dateien liefert der Server nicht aus.
import { writeFileSync } from "node:fs";

const { PUSHOVER_API_TOKEN: token, PUSHOVER_USER_KEY: user } = process.env;

if (!token || !user) {
  console.error(
    "PUSHOVER_API_TOKEN und PUSHOVER_USER_KEY fehlen als GitHub-Secrets."
  );
  process.exit(1);
}

const phpString = (wert) => `'${wert.replace(/[\\']/g, "\\$&")}'`;

writeFileSync(
  "dist/api/.htpushover.php",
  `<?php\nreturn ['token' => ${phpString(token)}, 'user' => ${phpString(user)}];\n`
);
