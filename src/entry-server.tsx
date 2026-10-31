import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { domain, seiten } from "./constants/seo";

export const render = (pfad: string) =>
  renderToString(
    <React.StrictMode>
      <StaticRouter location={pfad}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
