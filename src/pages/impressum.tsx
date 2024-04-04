export default function Impressum() {
  const p = "mt-6 mb-10 text-lg leading-8 text-gray-600";
  const h2 = "mt-2 text-3xl  tracking-tight text-gray-900 sm:text-4xl";

  return (
    <>
      <div className="pmt-24 sm:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-16 text-center">
                Impressum
              </h2>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
