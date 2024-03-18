import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Home from "./pages/home";
import Referenzen from "./pages/referenzen";
import styles from "./style";
import Kontakt from "./pages/kontakt";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="w-full overflow-hidden max-w-7xl mx-auto">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/referenzen" element={<Referenzen />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
