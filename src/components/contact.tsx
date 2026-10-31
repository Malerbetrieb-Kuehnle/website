import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Nachtszene from "@/components/nachtszene";
import { ProfileForm } from "@/components/ui/profileform";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import { farbtoene, kontaktwege } from "@/constants";

export default function Contact({ seite = false }: { seite?: boolean }) {
  const Titel = seite ? "h1" : "h2";
  const Untertitel = seite ? "h2" : "h3";

  return (
    <section className="bg-mbfir">
      <div className="abschnitt text-white">
        <Reveal art="titel">
          <Titel className="text-[clamp(2.75rem,8vw,8.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            <WortMaske text="So erreichen Sie uns." />
          </Titel>
        </Reveal>
        <Reveal verzoegerung={100}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 lg:text-xl lg:leading-9">
            Sie suchen einen Maler in Bad Aibling oder Umgebung? Rufen Sie uns
            an, schreiben Sie uns oder hinterlassen Sie Ihre Nummer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:mt-20 lg:grid-cols-12">
          <ul
            role="list"
            className="-mx-4 flex flex-col border-b border-white/20 [--ring:var(--mblime)] sm:-mx-6 lg:col-span-7 lg:-ml-10 lg:mr-0 2xl:-ml-16"
          >
            {kontaktwege.map((weg, index) => (
              <Reveal
                key={weg.titel}
                as="li"
                verzoegerung={index * 60}
                className="flex-1 border-t border-white/20"
              >
                <a
                  href={weg.href}
                  {...(weg.extern && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="kontaktweg gutter lg:pr-4"
                  style={{ "--ton": farbtoene[index].hex } as CSSProperties}
                >
                  <span className="kontaktweg-titel">{weg.titel}</span>
                  <span className="kontaktweg-wert">{weg.wert}</span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal
            verzoegerung={200}
            className="rounded bg-white p-6 text-foreground sm:p-8 lg:col-span-5 lg:p-10"
          >
            <Untertitel className="text-3xl font-medium">
              Rückruf anfordern
            </Untertitel>
            <p className="mt-3 leading-7 text-muted-foreground">
              Hinterlassen Sie Ihren Namen und Ihre Nummer, wir rufen Sie so
              schnell wie möglich zurück.
            </p>
            <div className="mt-8">
              <ProfileForm />
            </div>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Ihre Angaben nutzen wir nur für den Rückruf. Mehr dazu in der{" "}
              <Link
                to="/datenschutz/"
                className="underline decoration-1 underline-offset-4 transition-colors hover:text-mbgreen"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>

      <Nachtszene />
    </section>
  );
}
