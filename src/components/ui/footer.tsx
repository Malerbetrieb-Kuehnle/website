import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Farbleiste from "@/components/ui/farbleiste";
import Reveal, { WortMaske } from "@/components/ui/reveal";
import {
  einsatzorte,
  email,
  footerLinks,
  instagram,
} from "@/constants/index.tsx";

const linkClass = "inline-block py-1 transition-colors hover:text-mbgreen";
const titelClass =
  "font-sans text-base font-normal tracking-normal text-muted-foreground";

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

        <div className="mt-14 grid gap-10 border-t border-foreground/15 pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
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
            <p className="mt-4 max-w-xs text-lg leading-7">
              Meisterbetrieb für Maler- und Lackiererarbeiten in Bad Aibling.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className={titelClass}>Kontakt</h2>
            <address className="mt-3 not-italic">
              <p className="py-1">Ebersberger Straße 75</p>
              <p className="py-1">83043 Bad Aibling</p>
              <a href="tel:+4980619398333" className={`${linkClass} mt-2`}>
                +49 8061 93 98 333
              </a>
              <br />
              <a href={`mailto:${email}`} className={linkClass}>
                {email}
              </a>
              <br />
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Instagram
              </a>
            </address>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h2 className={titelClass}>{section.title}</h2>
              <ul className="mt-3">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path} className={linkClass}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-y-2 border-t border-foreground/15 pt-6 text-sm text-muted-foreground lg:flex-row lg:justify-between lg:gap-x-12">
          <p>Im Einsatz in {einsatzorte.join(", ")} und der Region.</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} Malerbetrieb Kühnle
          </p>
        </div>
      </div>
      <Farbleiste />
    </footer>
  );
};

export default Footer;
