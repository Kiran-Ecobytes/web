# Kiran Ecobytes

Marketing site for Kiran Ecobytes: laptop buyback and e-waste disposal in Bengaluru.

Vite + React 19 + Tailwind v4 + react-router-dom. No backend; the quote and pickup forms open WhatsApp with the details filled in.

```
npm install
npm run dev
```

Business details (phone, WhatsApp number, email, address, hours, service areas) live in `src/shared/data/site.js`.

Photos are in `src/assets/photos/`. Four are CC BY / CC BY-SA and are credited in the footer via `photoCredits` in `src/shared/data/photos.js`; the rest are CC0.

## Deploying

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yaml`.

The repo is `Kiran-Ecobytes/web`, served on the custom domain https://kiranecobytes.com (set in `public/CNAME`). The workflow sets `BASE_PATH=/` and `VITE_SITE_URL=https://kiranecobytes.com`. Without the custom domain, Pages would serve the repo under a sub-path at https://kiran-ecobytes.github.io/web/, which needs `BASE_PATH=/web/` and a matching `VITE_SITE_URL`.
