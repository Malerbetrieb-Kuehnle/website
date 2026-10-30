import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/schibsted-grotesk";
import "./index.css";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>
);
