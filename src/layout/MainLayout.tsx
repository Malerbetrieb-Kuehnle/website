import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Farbvorhang from "@/components/ui/farbvorhang";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/navbar";
import { seiten } from "@/constants/seo";
import { zaehleAufruf } from "@/lib/statistik";

const MainLayout = () => {
  const { pathname, hash, key } = useLocation();
  const pfad = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const main = useRef<HTMLElement>(null);
  const letzterPfad = useRef(pfad);

  useEffect(() => {
    document.title =
      seiten[pfad]?.titel ?? "Seite nicht gefunden | Malerbetrieb Kühnle";
    zaehleAufruf();

    if (letzterPfad.current === pfad) return;
    letzterPfad.current = pfad;
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
  }, [pfad]);

  // Erst im nächsten Frame: Das mobile Menü gibt sonst seine Scrollsperre zu spät frei
  useEffect(() => {
    if (!hash) return;
    const anker = document.getElementById(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      anker?.scrollIntoView();
      anker?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

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
      {/* Auf der Startseite fallen die Balken aus den Feldern der Farbleiste */}
      {pfad !== "/" && <Farbvorhang key={pfad} />}
      <main ref={main} id="inhalt" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
