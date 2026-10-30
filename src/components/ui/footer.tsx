import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { socialMedia, footerLinks } from "@/constants/index.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="gutter bg-mbkalk py-12 lg:py-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
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
          <p className="mt-4 font-serif text-2xl">
            Wir bringen Farbe in Ihr Leben.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="md:col-span-3">
            <h2 className="font-sans text-base text-muted-foreground">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-1">
              {section.links.map((link) => (
                <li key={link.id}>
                  {link.onClick ? (
                    <a
                      href="#"
                      onClick={link.onClick}
                      className="inline-block py-1 transition-colors hover:text-mbgreen"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="inline-block py-1 transition-colors hover:text-mbgreen"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-foreground/15 pt-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Malerbetrieb Kühnle</p>
        <div className="flex gap-x-1">
          {socialMedia.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:text-mbgreen"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
