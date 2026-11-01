import { Routes, Route } from "react-router";

import Referenzen from "@/seiten/Referenzen";
import Kontakt from "@/seiten/Kontakt";
import NotFound from "@/seiten/NotFound";
import HomePage from "@/seiten/HomePage";
import Rechtstext from "@/seiten/Rechtstext";
import Service from "@/seiten/Service";
import MainLayout from "@/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import datenschutz from "@/legal/datenschutz.html?raw";
import impressum from "@/legal/impressum.html?raw";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/impressum"
            element={<Rechtstext html={impressum} />}
          />
          <Route
            path="/datenschutz"
            element={<Rechtstext html={datenschutz} />}
          />
          <Route path="/service" element={<Service />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
export default App;
