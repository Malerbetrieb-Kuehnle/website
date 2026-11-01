import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { seiten } from "./constants/seo";
import "@fontsource-variable/outfit";
import "./index.css";

// Frühere Adressen wie /#/kontakt führen auf die neuen Seiten, /#/ war die Startseite.
// Nur bekannte Pfade: Der Hash kommt aus dem Link, //fremde.seite wäre eine offene Weiterleitung.
if (window.location.hash.startsWith("#/")) {
  const alterPfad = window.location.hash.slice(1).replace(/\/*$/, "/");
  if (alterPfad in seiten) window.location.replace(alterPfad);
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
