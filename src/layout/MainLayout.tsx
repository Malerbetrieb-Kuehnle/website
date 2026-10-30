import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/navbar";

const seitentitel: Record<string, string> = {
  "/service": "Service",
  "/referenzen": "Referenzen",
  "/kontakt": "Kontakt",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutz",
};

const MainLayout = () => {
  const { pathname } = useLocation();
  const main = useRef<HTMLElement>(null);
  const letzterPfad = useRef(pathname);

  useEffect(() => {
    const titel = seitentitel[pathname];
    document.title = titel
      ? `${titel} | Malerbetrieb Kühnle`
      : "Malerbetrieb Kühnle | Maler in Bad Aibling";

    if (letzterPfad.current === pathname) return;
    letzterPfad.current = pathname;
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
        onClick={() => main.current?.focus()}
      >
        Zum Inhalt springen
      </button>
      <Navbar />
      <main ref={main} id="inhalt" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
