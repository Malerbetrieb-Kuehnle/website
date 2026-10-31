interface Format {
  width: number;
  height: number;
}

const seiten = ({ width, height }: Format) => width / height;

// Summe der Seitenverhältnisse je Zeile, passend zu den Breiten in index.css
const zeilenZiele = { s: 2, m: 3.2, l: 4.6 };

// Teilt die Bilder so in Zeilen, dass auch die letzte Zeile nah am Ziel liegt
export function inZeilen<T extends Format>(bilder: T[], ziel: number) {
  const kosten = [0];
  const beginn = [0];

  for (let ende = 1; ende <= bilder.length; ende++) {
    kosten[ende] = Infinity;
    let summe = 0;
    for (let anfang = ende - 1; anfang >= 0; anfang--) {
      summe += seiten(bilder[anfang]);
      const gesamt = kosten[anfang] + Math.log(summe / ziel) ** 2;
      if (gesamt < kosten[ende]) {
        kosten[ende] = gesamt;
        beginn[ende] = anfang;
      }
    }
  }

  const zeilen: T[][] = [];
  for (let ende = bilder.length; ende > 0; ende = beginn[ende]) {
    zeilen.unshift(bilder.slice(beginn[ende], ende));
  }
  return zeilen;
}

// Gibt jedem Bild seinen Anteil an der Zeile für jede Galeriebreite mit.
// Reines CSS, damit die Zeilen schon im vorgerenderten HTML stimmen.
export function zeilenStile<T extends Format>(bilder: T[]) {
  const stile = new Map<T, Record<string, number>>(
    bilder.map((bild) => [bild, { "--seiten": seiten(bild) }])
  );

  for (const [name, ziel] of Object.entries(zeilenZiele)) {
    for (const zeile of inZeilen(bilder, ziel)) {
      const summe = zeile.reduce((wert, bild) => wert + seiten(bild), 0);
      for (const bild of zeile) {
        Object.assign(stile.get(bild)!, {
          [`--anteil-${name}`]: Number((seiten(bild) / summe).toFixed(4)),
          [`--fugen-${name}`]: zeile.length - 1,
        });
      }
    }
  }

  return stile;
}
