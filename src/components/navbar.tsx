import logo from "@/assets/logo.png";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { email, navLinks } from "@/constants";

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <nav
        className="gutter flex h-[var(--header)] items-center justify-between"
        aria-label="Hauptnavigation"
      >
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-x-8 lg:flex">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "aktiv" : ""}`
              }
            >
              {nav.title}
            </NavLink>
          ))}
          <a
            href="tel:+4980619398333"
            className="transition-colors hover:text-mbgreen"
          >
            +49 8061 93 98 333
          </a>
          <Button asChild>
            <Link to="/kontakt/">Kontakt</Link>
          </Button>
        </div>

        {/* Mobil */}
        <div className="flex items-center gap-x-1 lg:hidden">
          <a
            href="tel:+4980619398333"
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Anrufen"
          >
            <FaPhone className="h-4 w-4" aria-hidden="true" />
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
          <div className="gutter flex flex-1 flex-col justify-between py-8">
            <ul>
              {[
                ...navLinks,
                { id: "kontakt", title: "Kontakt", path: "/kontakt/" },
              ].map((nav) => (
                <li key={nav.id} className="border-b">
                  <Link
                    to={nav.path}
                    className="block py-4 text-4xl font-medium"
                    onClick={closeMenu}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-1">
              <a href="tel:+4980619398333" className="block py-1 text-lg">
                +49 8061 93 98 333
              </a>
              <a href={`mailto:${email}`} className="block py-1 text-lg">
                {email}
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
