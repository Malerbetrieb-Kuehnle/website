import Hoegner from "@/assets/Hoegner.png";
import Ulber from "@/assets/Ulber.png";
import Raab from "@/assets/Raab.svg";
import Prosol from "@/assets/Prosol.jpeg";

const partner = [
  { name: "Prosol", logo: Prosol },
  { name: "Hoegner", logo: Hoegner },
  { name: "Ulber", logo: Ulber },
  { name: "Raab", logo: Raab },
];

export default function Partner() {
  return (
    <section className="abschnitt grid gap-y-8 border-b lg:grid-cols-12">
      <h2 className="label lg:col-span-4">Partner & Lieferanten</h2>
      <div className="lg:col-span-8">
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          Unsere Dienstleistungen zeichnen sich durch die Verwendung
          hochwertiger Materialien aus, die von etablierten Lieferanten bezogen
          werden. Nur so können wir einen erstklassigen und hochwertigen
          Malerservice bieten.
        </p>
        <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-4">
          {partner.map((item) => (
            <img
              key={item.name}
              className="max-h-12 w-full object-contain object-left grayscale transition hover:grayscale-0"
              src={item.logo}
              alt={item.name}
              height={48}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
