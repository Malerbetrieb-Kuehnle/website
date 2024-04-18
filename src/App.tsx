import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Referenzen from "@/pages/Referenzen";
import Kontakt from "@/pages/Kontakt";
import NotFound from "@/pages/NotFound";
import HomePage from "@/pages/HomePage";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import Service from "@/pages/Service";
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
