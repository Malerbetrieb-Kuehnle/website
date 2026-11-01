// Impressum und Datenschutz kommen unverändert aus src/legal
const Rechtstext = ({ html }: { html: string }) => (
  <div className="gutter py-16 lg:py-24">
    <div
      className="rechtstext max-w-3xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
);

export default Rechtstext;
