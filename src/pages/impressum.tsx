import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Impressum() {
  const p = "mt-6 mb-10 text-lg leading-8 text-gray-600";
  const h2 = "mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl";

  return (
    <>
      <div className="my-24 sm:my-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-7xl mx-auto">
              <Reveal keyframes={customAnimation} triggerOnce>
                <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-16 text-center">
                  Impressum
                </h2>
              </Reveal>

              <p className={p}>
                Norbert K&uuml;hnle
                <br />
                Malerbetrieb K&uuml;hnle
                <br />
                Ebersberger Stra&szlig;e 75
                <br />
                83043 Bad Aibling
              </p>

              <h2 className={h2}>Kontakt</h2>
              <p className={p}>
                Telefon: +49 8061 93 98 333
                <br />
                E-Mail: malerbetrieb.kuehnle@gmx.de
              </p>

              <h2 className={h2}>Umsatzsteuer-ID</h2>
              <p className={p}>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:
                <br />
                DE204642150
              </p>

              <h2 className={h2}>EU-Streitschlichtung</h2>
              <p className={p}>
                Die Europ&auml;ische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className={h2}>
                Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
              </h2>
              <p className={p}>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              {/* Haftungsausschluss */}
              <h2 className={h2}>Haftung für Inhalte</h2>
              <p className={p}>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
              <h2 className={h2}>Haftung für Links</h2>
              <p className={p}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
              <h2 className={h2}>Urheberrecht</h2>
              <p className={p}>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
