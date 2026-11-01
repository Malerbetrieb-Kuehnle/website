// Besucherstatistik: Matomo auf dem Server von wasser-werte.de, ohne matomo.js.
// Gemeldet wird nur, was die Seite selbst weiß. Nichts wird auf dem Gerät
// gespeichert oder von ihm gelesen, deshalb braucht es keinen Cookie-Banner.
const ZIEL = "https://api.wasser-werte.de/statistik/matomo.php";
const WEBSITE = "3";
const HOST = "malerbetrieb-kuehnle.de";

interface Wunsch {
  doNotTrack?: string | null;
  globalPrivacyControl?: boolean;
}

// Der Ursprung einer fremden Seite, also ohne Pfad und Suchbegriff
function fremderUrsprung(referrer: string) {
  try {
    const herkunft = new URL(referrer);
    if (!/^https?:$/.test(herkunft.protocol)) return null;
    return herkunft.origin === location.origin ? null : `${herkunft.origin}/`;
  } catch {
    return null;
  }
}

function erlaubt() {
  const wunsch = navigator as Wunsch;
  return (
    location.hostname === HOST &&
    wunsch.doNotTrack !== "1" &&
    wunsch.globalPrivacyControl !== true
  );
}

// document.referrer ändert sich beim Seitenwechsel im Browser nicht
let ersterAufruf = true;

export function zaehleAufruf() {
  const herkunft = ersterAufruf ? fremderUrsprung(document.referrer) : null;
  ersterAufruf = false;
  if (!erlaubt()) return;

  const meldung = new URLSearchParams({
    idsite: WEBSITE,
    rec: "1",
    apiv: "1",
    send_image: "0",
    url: `${location.origin}${location.pathname}`,
    action_name: document.title,
  });
  if (herkunft) meldung.set("urlref", herkunft);

  void fetch(ZIEL, {
    method: "POST",
    body: meldung,
    keepalive: true,
    cache: "no-store",
    credentials: "omit",
    mode: "no-cors",
    referrerPolicy: "no-referrer",
  }).catch(() => undefined);
}
