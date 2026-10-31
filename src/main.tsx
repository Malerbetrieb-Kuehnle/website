import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "@fontsource-variable/outfit";
import "./index.css";

// Frühere Adressen wie /#/kontakt führen auf die neuen Seiten, /#/ war die Startseite
const alterPfad = window.location.hash.slice(1);
if (alterPfad.startsWith("/")) {
  window.location.replace(alterPfad.replace(/\/*$/, "/"));
}

const seite = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const wurzel = document.getElementById("root")!;

// Im Build liegt die Seite fertig im HTML, im Dev-Server nicht
if (wurzel.hasChildNodes()) {
  ReactDOM.hydrateRoot(wurzel, seite);
} else {
  ReactDOM.createRoot(wurzel).render(seite);
}
