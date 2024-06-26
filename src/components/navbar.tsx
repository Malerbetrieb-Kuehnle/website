import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Get the current location pathname
  const location = useLocation();

  // Extract the active section from the pathname
  const activeSection =
    location.pathname === "/" ? "Home" : location.pathname.split("/")[1];
  const [active, setActive] = useState(
    activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
  ); 

  // Update active state when the location changes
  useEffect(() => {
    const activeSection =
      location.pathname === "/" ? "Home" : location.pathname.split("/")[1];
    setActive(activeSection.charAt(0).toUpperCase() + activeSection.slice(1));
  }, [location.pathname]);

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Malerbetrieb Kühnle</span>
            <img className="h-16 w-32" src={logo} alt="Logo Malerbetrieb Kühnle" rel="preload" />
          </Link>
        </div>

        {/* Mobile Burger Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menü öffnen</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-8">
          {/* Desktop Menu Items*/}
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to={nav.path}
              className={`text-md ${
                active === nav.title ? "text-mbgreen" : "text-gray-900"
              }`}
            >
              {nav.title}
            </Link>
          ))}
          {/* Desktop Anrufen Button */}
          <Button
            className="hover:bg-mbgreen hover:text-white"
            variant="outline"
          >
            <Link to="/kontakt" className="flex items-center text-md">
              <FaPhone className="hidden mr-2 h-4 w-4" aria-hidden="true" />
              Kontakt
            </Link>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-14 py-14 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Malerbetrieb Kühnle</span>
              <img className="h-16 w-32" src={logo} alt="Logo Malerbetrieb Kühnle" rel="preload"/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((nav) => (
                  <Link
                    key={nav.id}
                    to={nav.path}
                    className={`-mx-3 text-center block rounded-lg px-3 py-2 text-base font-semibold leading-7${
                      active === nav.title
                        ? "text-mbgreen hover:bg-gray-50"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={handleMobileMenuItemClick} // Close the mobile menu on click
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>
              <div className="py-6 text-center">
                <Button className="bg-mbgreen text-white">
                  <Link
                    to="/kontakt"
                    className="flex items-center"
                    onClick={handleMobileMenuItemClick}
                  >
                    Kontakt
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
