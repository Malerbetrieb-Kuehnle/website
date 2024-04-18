import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Referenzen from "@/seiten/Referenzen";
import Kontakt from "@/seiten/Kontakt";
import NotFound from "@/seiten/NotFound";
import HomePage from "@/seiten/HomePage";
import Impressum from "@/seiten/Impressum";
import Datenschutz from "@/seiten/Datenschutz";
import Service from "@/seiten/Service";
import MainLayout from "@/layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/service" element={<Service />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
