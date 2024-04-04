import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Referenzen from "./pages/referenzen";
import Kontakt from "./pages/kontakt";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Impressum from "./pages/impressum";
import Datenschutz from "./pages/datenschutz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
