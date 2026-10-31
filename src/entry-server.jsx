import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { BASE_PATH } from "./shared/config";

export function render(url) {
  return renderToString(
    <StaticRouter location={url} basename={BASE_PATH}>
      <App />
    </StaticRouter>,
  );
}
