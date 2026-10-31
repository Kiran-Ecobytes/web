import { readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { DEFAULT_SITE_URL, ROUTES, resolveSiteUrl } from "../src/shared/data/seo.js";

const SITE_URL = resolveSiteUrl(process.env.VITE_SITE_URL);

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");
const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);
const template = (await readFile(resolve(dist, "index.html"), "utf8")).replaceAll(DEFAULT_SITE_URL, SITE_URL);

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Template is missing ${pattern}`);
  return html.replace(pattern, () => replacement);
}

for (const route of ROUTES) {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(route.description)}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(route.title)}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(route.description)}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`);
  html = replaceTag(html, /<div id="root"><\/div>/, `<div id="root" data-route="${route.path}">${render(route.path)}</div>`);

  const outFile = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  await writeFile(resolve(dist, outFile), html, "utf8");
}

await rm(ssrDir, { recursive: true, force: true });
console.log(`[prerender] Wrote pre-rendered HTML for ${ROUTES.length} routes`);
