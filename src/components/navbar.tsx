import logo from "@/assets/logo.png";
import { useState } from "react";
import type { CSSProperties } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  adresse,
  email,
  farbtoene,
  menueLinks,
  navLinks,
  telefon,
} from "@/constants";

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link to="/" className="-m-1 p-1" onClick={onClick}>
    <img
      className="h-12 w-auto"
      src={logo}
      width={249}
      height={128}
      alt="Malerbetrieb Kühnle, zur Startseite"
    />
  </Link>
);

// Jeder Menüpunkt trägt einen Ton aus der Farbleiste, Elfenbein ist auf Weiß zu blass
const ton = (index: number) =>
  ({ "--ton": farbtoene[index + 1].hex }) as CSSProperties;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <nav
        className="gutter flex h-[var(--header)] items-center justify-between"
        aria-label="Hauptnavigation"
      >
        <div className="lg:flex-1">
          <Logo />
        </div>

        {/* Desktop */}
        <ul role="list" className="hidden h-full gap-x-8 lg:flex">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              {/* Abschnitte der Startseite sind keine eigene Seite und nie aktiv */}
              {nav.path.includes("#") ? (
                <Link to={nav.path} className="nav-link" style={ton(index)}>
                  {nav.title}
                </Link>
              ) : (
                <NavLink
                  to={nav.path}
                  end
                  style={ton(index)}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "aktiv" : ""}`
                  }
                >
                  {nav.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden flex-1 items-center justify-end gap-x-6 lg:flex">
          <a
            href={telefon.href}
            className="flex h-11 min-w-11 items-center justify-center gap-x-2 whitespace-nowrap tabular-nums transition-colors hover:text-mbgreen"
          >
            <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {/* Zwischen 1024 und 1280 px reicht der Platz nur für das Symbol */}
            <span className="sr-only xl:not-sr-only">{telefon.anzeige}</span>
          </a>
          <Button asChild>
            <Link to="/kontakt/">Kontakt</Link>
          </Button>
        </div>

        {/* Mobil */}
        <div className="flex items-center gap-x-1 lg:hidden">
          <a
            href={telefon.href}
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Anrufen"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="-mr-2 flex h-11 items-center gap-x-2 px-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            Menü
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={closeMenu}
        aria-label="Menü"
      >
        <Dialog.Panel className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-white duration-200 motion-safe:animate-in motion-safe:fade-in">
          <div className="gutter flex h-[var(--header)] shrink-0 items-center justify-between border-b">
            <Logo onClick={closeMenu} />
            <button
              type="button"
              className="-mr-2 flex h-11 items-center gap-x-2 px-2"
              onClick={closeMenu}
            >
              Schließen
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <ul role="list">
              {menueLinks.map((nav, index) => (
                <li key={nav.id} className="border-b">
                  <Link
                    to={nav.path}
                    className="gutter flex items-center justify-between py-3.5 text-3xl font-medium"
                    onClick={closeMenu}
                  >
                    {nav.title}
                    <span
                      aria-hidden="true"
                      className="h-5 w-10 bg-[var(--ton)]"
                      style={ton(index)}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="gutter py-8">
              <Button asChild size="lg" className="w-full gap-x-3 text-base">
                <a href={telefon.href}>
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  {telefon.anzeige}
                </a>
              </Button>
              <a href={`mailto:${email}`} className="mt-5 block py-1 text-lg">
                {email}
              </a>
              <p className="py-1 text-muted-foreground">
                {adresse.strasse}, {adresse.ort}
              </p>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
