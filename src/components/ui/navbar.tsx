import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 

import logo from "../../assets/logo.png";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "referenzen",
    title: "Referenzen",
    path: "/referenzen",
  },
  {
    id: "kontakt",
    title: "Kontakt",
    path: "/kontakt",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get the current location pathname

  useEffect(() => {
    // Extract the active section from the pathname
    const activeSection =
      location.pathname === "/" ? "Home" : location.pathname.split("/")[1];
    setActive(activeSection.charAt(0).toUpperCase() + activeSection.slice(1)); // Capitalize the first letter
  }, [location.pathname]); // Update the active state when the pathname changes

  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar overflow-hidden max-w-7xl mx-auto">
      <Link to="/" className="w-[120px] h-auto">
        <img src={logo} alt="malerbetrieb-logo" className="w-[120px] h-auto" />
      </Link>

      {/* Desktop Menü */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-[#027f3f]" : "text-[#222222]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobiles Menü */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black z-50 absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-[#027f3f]" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link to={nav.path}>{nav.title}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
