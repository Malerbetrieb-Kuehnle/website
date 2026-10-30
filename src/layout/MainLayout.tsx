import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/navbar";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
        onClick={() => document.getElementById("inhalt")?.focus()}
      >
        Zum Inhalt springen
      </button>
      <Navbar />
      <main id="inhalt" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
