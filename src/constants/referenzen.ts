import { projektBild, projektSrcSet } from "@/lib/bilder";

import Amtsgericht_Bad_Aibling from "@/assets/referenzen/Amtsgericht_Bad_Aibling.jpg";
import Augencentrum_Rosenheim1 from "@/assets/referenzen/Augencentrum_Rosenheim1.jpg";
import Augencentrum_Rosenheim2 from "@/assets/referenzen/Augencentrum_Rosenheim2.jpg";
import Augencentrum_Rosenheim4 from "@/assets/referenzen/Augencentrum_Rosenheim4.jpg";
import Autohalle_Kolbermoor from "@/assets/referenzen/Autohalle_Kolbermoor.jpg";
import Baderhaus_Bad_Aibling1 from "@/assets/referenzen/Baderhaus_Bad_Aibling1.jpg";
import Baderhaus_Bad_Aibling2 from "@/assets/referenzen/Baderhaus_Bad_Aibling2.jpg";
import Bauernhaus_Brannenburg1 from "@/assets/referenzen/Bauernhaus_Brannenburg1.jpg";
import Bauernhof_Brannenburg2 from "@/assets/referenzen/Bauernhof_Brannenburg2.jpg";
import Bauernhof_Oberpframmern1 from "@/assets/referenzen/Bauernhof_Oberpframmern1.jpg";
import Bauernhof_Oberpframmern3 from "@/assets/referenzen/Bauernhof_Oberpframmern3.jpg";
import Fassade_Bad_Aibling from "@/assets/referenzen/Fassade_Bad_Aibling.jpg";
import Fassade_Grabenstaett from "@/assets/referenzen/Fassade_Grabenstaett.jpg";
import Forschungshaus_Bad_Aibling from "@/assets/referenzen/Forschungshaus_Bad_Aibling.jpg";
import Garage_Bad_Aibling from "@/assets/referenzen/Garage_Bad_Aibling.jpg";
import Garage_Bruckmuehl from "@/assets/referenzen/Garage_Bruckmuehl.jpg";
import Geschaeftshaus_Rosenheim from "@/assets/referenzen/Geschaeftshaus_Rosenheim.jpg";
import Haus from "@/assets/referenzen/Haus.jpg";
import Klinik_St_Georg_Bad_Aiblung from "@/assets/referenzen/Klinik_St._Georg_Bad_Aiblung.jpg";
import Lackarbeiten1 from "@/assets/referenzen/Lackarbeiten1.jpg";
import Lackarbeiten2 from "@/assets/referenzen/Lackarbeiten2.jpg";
import Praxis_Schoenau1 from "@/assets/referenzen/Praxis_Schoenau1.jpg";
import Praxis_Schoenau2 from "@/assets/referenzen/Praxis_Schoenau2.jpg";
import Praxis_Schoenau3 from "@/assets/referenzen/Praxis_Schoenau3.jpg";
import Schloss_Maxhofen_Bruckmuehl from "@/assets/referenzen/Schloss_Maxhofen_Bruckmuehl.jpg";
import Sparkasse_Vagen from "@/assets/referenzen/Sparkasse_Vagen.jpg";
import Sparkassenhochhaus_Rosenheim from "@/assets/referenzen/Sparkassenhochhaus_Rosenheim .jpg";
import Wintergarten_Hohenthann1 from "@/assets/referenzen/Wintergarten_Hohenthann1.jpg";
import Wohnhaus_Bad_Aibling5 from "@/assets/referenzen/Wohnhaus_Bad_Aibling5.jpg";
import Wohnhaus_Bad_Aibling6 from "@/assets/referenzen/Wohnhaus_Bad_Aibling6.jpg";
import Wohnhaus_Bad_Aibling7 from "@/assets/referenzen/Wohnhaus_Bad_Aibling7.jpg";
import Wohnhaus_Bad_Aibling10 from "@/assets/referenzen/Wohnhaus_Bad_Aibling10.jpg";
import Wohnhaus_Bad_Feilnbach1 from "@/assets/referenzen/Wohnhaus_Bad_Feilnbach1.jpg";
import Wohnhaus_Bad_Feilnbach2 from "@/assets/referenzen/Wohnhaus_Bad_Feilnbach2.jpg";
import Wohnhaus_Bad_Feilnbach3 from "@/assets/referenzen/Wohnhaus_Bad_Feilnbach3.jpg";
import Wohnhaus_Bad_Feilnbach6 from "@/assets/referenzen/Wohnhaus_Bad_Feilnbach6.jpg";
import Wohnhaus_Bruckmuehl1 from "@/assets/referenzen/Wohnhaus_Bruckmuehl1.jpg";
import Wohnhaus_Bruckmuehl2 from "@/assets/referenzen/Wohnhaus_Bruckmuehl2.jpg";
import Wohnhaus_Bruckmuehl3 from "@/assets/referenzen/Wohnhaus_Bruckmuehl3.jpg";
import Wohnhaus_Bruckmuehl4 from "@/assets/referenzen/Wohnhaus_Bruckmuehl4.jpg";
import Wohnhaus_Feldkirchen2 from "@/assets/referenzen/Wohnhaus_Feldkirchen2.jpg";
import Wohnhaus_Glonn from "@/assets/referenzen/Wohnhaus_Glonn.jpg";
import Wohnhaus_Grabenstaett3 from "@/assets/referenzen/Wohnhaus_Grabenstaett3.jpg";
import Wohnhaus_Grabenstaett4 from "@/assets/referenzen/Wohnhaus_Grabenstaett4.jpg";
import Wohnhaus_Grafing1 from "@/assets/referenzen/Wohnhaus_Grafing1.jpg";
import Wohnhaus_Grafing2 from "@/assets/referenzen/Wohnhaus_Grafing2.jpg";
import Wohnhaus_Hoehenrain from "@/assets/referenzen/Wohnhaus_Hoehenrain.jpg";
import Wohnhaus_Hohenthann1 from "@/assets/referenzen/Wohnhaus_Hohenthann1.jpg";
import Wohnhaus_Hohenthann2 from "@/assets/referenzen/Wohnhaus_Hohenthann2.jpg";
import Wohnhaus_Hohenthann3 from "@/assets/referenzen/Wohnhaus_Hohenthann3.jpg";
import Wohnhaus_Hohenthann5 from "@/assets/referenzen/Wohnhaus_Hohenthann5.jpg";
import Wohnhaus_Hohenthann6 from "@/assets/referenzen/Wohnhaus_Hohenthann6.jpg";
import Wohnhaus_Neubeuern from "@/assets/referenzen/Wohnhaus_Neubeuern .jpg";
import Wohnhaus_Pang from "@/assets/referenzen/Wohnhaus_Pang .jpg";
import Wohnhaus_Rosenheim from "@/assets/referenzen/Wohnhaus_Rosenheim.jpg";
import Wohnhaus_Tuntenhausen1 from "@/assets/referenzen/Wohnhaus_Tuntenhausen1.jpg";

export type Bereich = "aussen" | "innen";

export interface Referenz {
  title: string;
  bereich: Bereich;
  width: number;
  height: number;
  src: string;
  srcSet?: string;
  gross?: boolean;
}

const projekt = (
  slug: string,
  title: string,
  bereich: Bereich,
  width: number,
  height: number,
  gross = false
): Referenz => ({
  title,
  bereich,
  width,
  height,
  src: projektBild(slug),
  srcSet: projektSrcSet(slug),
  gross,
});

export const referenzen: Referenz[] = [
  projekt("kinderhaus-elfenbein", "Kinderhaus, Fassade in Elfenbein", "aussen", 3992, 2262, true),
  projekt("altbau-pfirsich-kirche", "Historische Fassade in Pfirsich", "aussen", 1080, 1062),
  projekt("bad-goldwand", "Bad mit Goldwand und Mosaik", "innen", 2699, 3000),
  projekt("giebel-grau-verschalung", "Holzgiebel in Grau mit dunklen Läden", "aussen", 4000, 3000, true),
  projekt("praxis-wandbelag", "Praxis, Wandbelag im Empfang", "innen", 4000, 3000, true),
  projekt("villa-abendlicht", "Villa mit weißer Fassade", "aussen", 3648, 2367, true),
  projekt("altbau-schablonendecke", "Altbauzimmer mit Schablonendecke", "innen", 3000, 4000),
  projekt("wohnhaus-flieder", "Wohnhaus in Flieder", "aussen", 4000, 3000),
  projekt("mehrfamilienhaus-rote-laeden", "Mehrfamilienhaus mit roten Läden", "aussen", 3000, 4000),
  projekt("praxis-wartezimmer", "Praxis, Wartezimmer mit Tapete in Türkis", "innen", 4000, 3000, true),
  projekt("giebel-petrol", "Giebel in Petrol mit Holzbalkon", "aussen", 1328, 747),
  projekt("altbau-geruest", "Historische Fassade im Gerüst", "aussen", 4000, 3000),
  projekt("altbau-pfirsich-seite", "Historische Fassade, Seitenansicht", "aussen", 4000, 3000, true),
  projekt("anbau-anthrazit", "Anbau in Anthrazit", "aussen", 4000, 3000),
  projekt("praxis-empfang", "Praxis, Empfang mit Holztresen", "innen", 4000, 3000),
  projekt("villa-palme", "Villa, Gartenseite", "aussen", 3648, 2367),
  projekt("villa-terrassen", "Villa, Terrassen zum Meer", "aussen", 3648, 2367),
  projekt("wohn-geschaeftshaus-laeden", "Wohn- und Geschäftshaus mit dunklen Läden", "aussen", 4000, 3000),
  projekt("hof-grau-weiss", "Anwesen in Grau und Weiß", "aussen", 4000, 3000, true),
  projekt("hauswand-dunkle-laeden", "Hauswand mit dunklen Läden", "aussen", 3000, 4000),
  projekt("wohnhaus-warmgrau", "Wohnhaus in warmem Grau", "aussen", 4000, 3000),
  projekt("wohnhaus-warmgrau-pool", "Wohnhaus in warmem Grau, Poolseite", "aussen", 4000, 3000),
  projekt("wohnhaus-sprossenfenster", "Wohnhaus mit grauen Sprossenfenstern", "aussen", 4000, 3000),
  projekt("giebel-weiss-grau", "Giebel in Weiß und Hellgrau", "aussen", 4000, 3000),
  projekt("praxis-wohnhaus-verschalung", "Praxis und Wohnhaus, Verschalung in Grau", "aussen", 3272, 2808),
  projekt("praxis-wohnhaus-geruest", "Praxis und Wohnhaus im Gerüst", "aussen", 3000, 4000),
  projekt("wohnhaus-creme-balkon", "Wohnhaus in Creme mit hellgrauem Balkon", "aussen", 4000, 3000),
  projekt("erker-graue-laeden", "Erker mit grauen Läden", "aussen", 3000, 4000),
  projekt("balkon-hellgrau", "Terrasse und Balkon in Hellgrau", "aussen", 3000, 4000),
  projekt("bauernhaus-geruest", "Bauernhaus im Gerüst", "aussen", 4000, 3000),
  projekt("rohbau-abgeklebte-fenster", "Abgeklebte Fenster im Rohbau", "innen", 3264, 2448),
  projekt("schaufenster-nacht", "Unser Schaufenster bei Nacht", "aussen", 4000, 3000, true),
  { title: "Amtsgericht Bad Aibling", bereich: "aussen", width: 1280, height: 648, src: Amtsgericht_Bad_Aibling },
  { title: "Augencentrum Rosenheim", bereich: "innen", width: 1075, height: 708, src: Augencentrum_Rosenheim1 },
  { title: "Augencentrum Rosenheim", bereich: "innen", width: 960, height: 1280, src: Augencentrum_Rosenheim2 },
  { title: "Augencentrum Rosenheim", bereich: "innen", width: 960, height: 1280, src: Augencentrum_Rosenheim4 },
  { title: "Autohalle Kolbermoor", bereich: "innen", width: 1280, height: 720, src: Autohalle_Kolbermoor },
  { title: "Baderhaus Bad Aibling", bereich: "aussen", width: 1280, height: 960, src: Baderhaus_Bad_Aibling1 },
  { title: "Baderhaus Bad Aibling", bereich: "aussen", width: 1280, height: 960, src: Baderhaus_Bad_Aibling2 },
  { title: "Bauernhaus Brannenburg", bereich: "aussen", width: 960, height: 1280, src: Bauernhaus_Brannenburg1 },
  { title: "Bauernhof Brannenburg", bereich: "aussen", width: 1280, height: 1145, src: Bauernhof_Brannenburg2 },
  { title: "Bauernhof Oberpframmern", bereich: "aussen", width: 1280, height: 960, src: Bauernhof_Oberpframmern1 },
  { title: "Bauernhof Oberpframmern", bereich: "aussen", width: 1168, height: 1280, src: Bauernhof_Oberpframmern3 },
  { title: "Fassade Bad Aibling", bereich: "aussen", width: 1200, height: 900, src: Fassade_Bad_Aibling },
  { title: "Fassade Grabenstätt", bereich: "aussen", width: 1200, height: 900, src: Fassade_Grabenstaett },
  { title: "Forschungshaus Bad Aibling", bereich: "aussen", width: 1280, height: 1043, src: Forschungshaus_Bad_Aibling },
  { title: "Garage Bad Aibling", bereich: "aussen", width: 1005, height: 1280, src: Garage_Bad_Aibling },
  { title: "Garage Bruckmühl", bereich: "aussen", width: 1280, height: 960, src: Garage_Bruckmuehl },
  { title: "Geschäftshaus Rosenheim", bereich: "aussen", width: 1280, height: 720, src: Geschaeftshaus_Rosenheim },
  { title: "Haus", bereich: "aussen", width: 1280, height: 720, src: Haus },
  { title: "Klinik St. Georg Bad Aibling", bereich: "aussen", width: 1280, height: 720, src: Klinik_St_Georg_Bad_Aiblung },
  { title: "Lackarbeiten", bereich: "innen", width: 747, height: 746, src: Lackarbeiten1 },
  { title: "Lackarbeiten", bereich: "innen", width: 960, height: 1280, src: Lackarbeiten2 },
  { title: "Praxis Schönau", bereich: "aussen", width: 1280, height: 960, src: Praxis_Schoenau1 },
  { title: "Praxis Schönau", bereich: "aussen", width: 1280, height: 960, src: Praxis_Schoenau2 },
  { title: "Praxis Schönau", bereich: "aussen", width: 1280, height: 960, src: Praxis_Schoenau3 },
  { title: "Schloss Maxhofen Bruckmühl", bereich: "aussen", width: 1024, height: 1280, src: Schloss_Maxhofen_Bruckmuehl },
  { title: "Sparkasse Vagen", bereich: "aussen", width: 1280, height: 720, src: Sparkasse_Vagen },
  { title: "Sparkassenhochhaus Rosenheim", bereich: "aussen", width: 860, height: 1280, src: Sparkassenhochhaus_Rosenheim },
  { title: "Wintergarten Hohenthann", bereich: "aussen", width: 1051, height: 1280, src: Wintergarten_Hohenthann1 },
  { title: "Wohnhaus Bad Aibling", bereich: "aussen", width: 1028, height: 685, src: Wohnhaus_Bad_Aibling5 },
  { title: "Wohnhaus Bad Aibling", bereich: "aussen", width: 747, height: 746, src: Wohnhaus_Bad_Aibling6 },
  { title: "Wohnhaus Bad Aibling", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Bad_Aibling7 },
  { title: "Wohnhaus Bad Aibling", bereich: "aussen", width: 960, height: 1280, src: Wohnhaus_Bad_Aibling10 },
  { title: "Wohnhaus Bad Feilnbach", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Bad_Feilnbach1 },
  { title: "Wohnhaus Bad Feilnbach", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Bad_Feilnbach2 },
  { title: "Wohnhaus Bad Feilnbach", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Bad_Feilnbach3 },
  { title: "Wohnhaus Bad Feilnbach", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Bad_Feilnbach6 },
  { title: "Wohnhaus Bruckmühl", bereich: "aussen", width: 1280, height: 992, src: Wohnhaus_Bruckmuehl1 },
  { title: "Wohnhaus Bruckmühl", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Bruckmuehl2 },
  { title: "Wohnhaus Bruckmühl", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Bruckmuehl3 },
  { title: "Wohnhaus Bruckmühl", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Bruckmuehl4 },
  { title: "Wohnhaus Feldkirchen", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Feldkirchen2 },
  { title: "Wohnhaus Glonn", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Glonn },
  { title: "Wohnhaus Grabenstätt", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Grabenstaett3 },
  { title: "Wohnhaus Grabenstätt", bereich: "aussen", width: 1280, height: 1197, src: Wohnhaus_Grabenstaett4 },
  { title: "Wohnhaus Grafing", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Grafing1 },
  { title: "Wohnhaus Grafing", bereich: "aussen", width: 960, height: 1280, src: Wohnhaus_Grafing2 },
  { title: "Wohnhaus Höhenrain", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Hoehenrain },
  { title: "Wohnhaus Hohenthann", bereich: "aussen", width: 960, height: 1280, src: Wohnhaus_Hohenthann1 },
  { title: "Wohnhaus Hohenthann", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Hohenthann2 },
  { title: "Wohnhaus Hohenthann", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Hohenthann3 },
  { title: "Wohnhaus Hohenthann", bereich: "aussen", width: 1280, height: 1183, src: Wohnhaus_Hohenthann5 },
  { title: "Wohnhaus Hohenthann", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Hohenthann6 },
  { title: "Wohnhaus Neubeuern", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Neubeuern },
  { title: "Wohnhaus Pang", bereich: "aussen", width: 1280, height: 720, src: Wohnhaus_Pang },
  { title: "Wohnhaus Rosenheim", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Rosenheim },
  { title: "Wohnhaus Tuntenhausen", bereich: "aussen", width: 1280, height: 960, src: Wohnhaus_Tuntenhausen1 },
];
