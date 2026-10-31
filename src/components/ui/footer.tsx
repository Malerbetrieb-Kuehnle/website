import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Farbleiste from "@/components/ui/farbleiste";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import {
  adresse,
  einsatzorte,
  kontaktwege,
  menueLinks,
  rechtlichesLinks,
} from "@/constants/index.tsx";

const linkClass = "inline-block py-1 transition-colors hover:text-mbgreen";

const [festnetz, mobil, mail, anschrift, instagram] = kontaktwege;

const kontaktSpalten = [
  { titel: "Anrufen", wege: [festnetz, mobil] },
  { titel: "Schreiben", wege: [mail, { ...instagram, wert: "Instagram" }] },
  {
    titel: "Besuchen",
    wege: [
      {
        ...anschrift,
        wert: (
          <>
            {adresse.strasse}
            <br />
            {adresse.ort}
          </>
        ),
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-mbkalk">
      <div className="gutter pb-8 pt-16 lg:pt-24">
        <div className="flex flex-col items-start gap-y-8 lg:flex-row lg:items-end lg:justify-between lg:gap-x-12">
          <Reveal art="titel">
            <p className="text-[clamp(2.75rem,8vw,8.5rem)] font-medium leading-[1.05] tracking-[-0.01em] [text-wrap:balance]">
              <WortMaske text="Farbe schafft Atmosphäre." />
            </p>
          </Reveal>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/kontakt/">Rückruf vereinbaren</Link>
          </Button>
        </div>

        <address className="mt-14 grid gap-x-10 gap-y-8 not-italic md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {kontaktSpalten.map((spalte) => (
            <div key={spalte.titel}>
              <p className="text-muted-foreground">{spalte.titel}</p>
              <ul className="mt-2 text-lg leading-8 md:text-xl lg:text-lg xl:text-2xl xl:leading-9">
                {spalte.wege.map((weg) => (
                  <li key={weg.href}>
                    <a
                      href={weg.href}
                      {...(weg.extern && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className={linkClass}
                    >
                      {weg.wert}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </address>

        <div className="mt-14 flex flex-col gap-y-8 lg:mt-20 lg:flex-row lg:items-end lg:justify-between lg:gap-x-12">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Malerbetrieb Kühnle, zur Startseite"
                className="h-14 w-auto"
                width={249}
                height={128}
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-xs leading-7">
              Meisterbetrieb für Maler- und Lackiererarbeiten in Bad Aibling.
            </p>
          </div>
          <nav aria-label="Fußzeile">
            <ul role="list" className="flex flex-wrap gap-x-8 gap-y-1">
              {menueLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className={linkClass}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-y-3 border-t border-foreground/15 pt-6 text-sm text-muted-foreground lg:flex-row lg:items-baseline lg:justify-between lg:gap-x-12">
          <p className="max-w-2xl">
            Im Einsatz in {einsatzorte.join(", ")} und der Region sowie im
            Ausland.
          </p>
          <div className="flex shrink-0 flex-wrap items-baseline gap-x-6">
            {rechtlichesLinks.map((link) => (
              <Link key={link.id} to={link.path} className={linkClass}>
                {link.title}
              </Link>
            ))}
            <p>© {new Date().getFullYear()} Malerbetrieb Kühnle</p>
          </div>
        </div>
      </div>
      <Farbleiste />
    </footer>
  );
};

export default Footer;
