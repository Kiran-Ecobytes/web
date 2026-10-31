import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { BASE_PATH } from "./shared/config";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const currentRoute = window.location.pathname.slice(BASE_PATH === "/" ? 0 : BASE_PATH.length) || "/";

if (container.hasChildNodes() && container.dataset.route === currentRoute) {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
