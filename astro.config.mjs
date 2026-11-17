// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/* ============================================================
 * ADRESSE DER WEBSITE – DIE EINZIGE STELLE, DIE BEI EINEM
 * UMZUG (z. B. auf eine eigene Domain) GEÄNDERT WERDEN MUSS.
 *
 * GitHub Pages, Repository "<konto>.github.io":
 *   SITE_URL = 'https://<konto>.github.io'   BASE_PATH = '/'
 * GitHub Pages, Repository "nx24-website":
 *   SITE_URL = 'https://<konto>.github.io'   BASE_PATH = '/nx24-website/'
 * Eigene Domain:
 *   SITE_URL = 'https://www.nexxcon24.de'    BASE_PATH = '/'
 *
 * Alternativ per Umgebungsvariable SITE_URL / BASE_PATH (z. B. im
 * GitHub-Actions-Workflow) – dann bleibt diese Datei unverändert.
 * ============================================================ */
const SITE_URL = process.env.SITE_URL ?? 'https://tnc-han.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en', tr: 'tr-TR' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
