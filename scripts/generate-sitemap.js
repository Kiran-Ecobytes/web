import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, resolveSiteUrl } from "../src/shared/data/seo.js";

const SITE_URL = resolveSiteUrl(process.env.VITE_SITE_URL);
const BASE_PATH = (process.env.BASE_PATH ?? "/").replace(/\/+$/, "") || "/";
const dist = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");

const xmlEscape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const lastmod = new Date().toISOString().split("T")[0];

const urls = ROUTES.map(
  (route) =>
    `  <url>\n` +
    `    <loc>${xmlEscape(`${SITE_URL}${route.path === "/" ? "/" : route.path}`)}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${route.changefreq}</changefreq>\n` +
    `    <priority>${route.priority}</priority>\n` +
    `  </url>`,
).join("\n");

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

const notFound = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Kiran Ecobytes</title>
    <script>
      sessionStorage.setItem(
        "redirectPath",
        window.location.pathname + window.location.search + window.location.hash,
      );
      window.location.replace(${JSON.stringify(BASE_PATH === "/" ? "/" : `${BASE_PATH}/`)});
    </script>
  </head>
  <body></body>
</html>
`;

await writeFile(resolve(dist, "sitemap.xml"), sitemap, "utf8");
await writeFile(resolve(dist, "robots.txt"), robots, "utf8");
await writeFile(resolve(dist, "404.html"), notFound, "utf8");
console.log(`[static] Wrote sitemap.xml (${ROUTES.length} URLs), robots.txt and 404.html for ${SITE_URL} at base ${BASE_PATH}`);
