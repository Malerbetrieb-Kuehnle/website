import { ProfileForm } from "@/components/ui/profileform";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import { email, instagram } from "@/constants";
import { projektBild, projektSrcSet } from "@/lib/bilder";
import { cn } from "@/lib/utils";

const linkClass =
  "inline-block py-0.5 underline decoration-1 underline-offset-4 transition-colors hover:text-mblime";

export default function Contact({ seite = false }: { seite?: boolean }) {
  const Titel = seite ? "h1" : "h2";

  return (
    <section className="grid lg:min-h-[100svh] lg:grid-cols-2">
      {/* Auf der Kontaktseite steht das Formular mobil vor dem Foto */}
      <Reveal
        art="foto"
        className={cn(
          "relative h-[60svh] lg:order-none lg:h-auto",
          seite && "order-last"
        )}
      >
        <img
          src={projektBild("schaufenster-nacht")}
          srcSet={projektSrcSet("schaufenster-nacht")}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt="Unser Schaufenster bei Nacht"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </Reveal>
      <div className="abschnitt bg-mbfir text-white [--ring:var(--mblime)]">
        <Reveal art="titel">
          <Titel className="titel-gross">
            <WortMaske text="So erreichen Sie uns." />
          </Titel>
        </Reveal>
        <Reveal verzoegerung={100}>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Sie suchen einen Maler in Bad Aibling oder Umgebung? Hinterlassen
            Sie Ihre Nummer, wir rufen Sie so schnell wie möglich zurück.
            Natürlich erreichen Sie uns auch per Telefon und E-Mail.
          </p>
        </Reveal>

        <div className="mt-10 max-w-md">
          <ProfileForm />
        </div>

        <dl className="mt-14 grid gap-x-8 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-2">
          <div>
            <dt className="text-white/70">Telefon</dt>
            <dd className="mt-1">
              <div>
                Büro:{" "}
                <a href="tel:+4980619398333" className={linkClass}>
                  +49 8061 93 98 333
                </a>
              </div>
              <div>
                Mobil:{" "}
                <a href="tel:+491728517479" className={linkClass}>
                  +49 172 85 17 479
                </a>
              </div>
            </dd>
          </div>
          <div>
            <dt className="text-white/70">E-Mail</dt>
            <dd className="mt-1">
              <a href={`mailto:${email}`} className={linkClass}>
                {email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/70">Adresse</dt>
            <dd className="mt-1">
              Ebersberger Straße 75
              <br />
              83043 Bad Aibling
            </dd>
          </div>
          <div>
            <dt className="text-white/70">Instagram</dt>
            <dd className="mt-1">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                malerbetrieb_kuehnle
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
