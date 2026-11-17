# NEXXCON-24 – Website

Firmenwebsite von **Nexxus – Business & IT. Consulting** (Einzelunternehmen, Marke NEXXCON-24) in Deutsch, Englisch und Türkisch.
Gebaut mit [Astro](https://astro.build), TypeScript und Tailwind CSS. Ergebnis ist eine rein statische Website –
ohne Datenbank, ohne Cookies, ohne Tracking – die kostenlos auf GitHub Pages läuft.

## Schnellstart

Voraussetzung: [Node.js](https://nodejs.org) ab Version 22.

```bash
npm install        # einmalig: Pakete installieren
npm run dev        # Entwicklungsserver auf http://localhost:4321
```

| Befehl            | Zweck                                                            |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Lokale Vorschau mit Live-Aktualisierung                          |
| `npm run build`   | Fertige Website nach `dist/` bauen                               |
| `npm run preview` | Gebaute Website lokal ansehen                                    |
| `npm run lint`    | Code-Stil prüfen (ESLint)                                        |
| `npm run check`   | Typen und Astro-Dateien prüfen (findet z. B. fehlende Texte)     |
| `npm run format`  | Code einheitlich formatieren (Prettier)                          |
| `npm run verify`  | lint + check + build – muss vor jeder Veröffentlichung grün sein |

## Aufbau

```
src/
├── config/
│   ├── site.ts          ← Firmendaten, Kontakt, Anschrift, Rechtsangaben
│   └── routes.ts        ← alle Seiten + Adressen je Sprache, Reihenfolge der Geschäftsbereiche
├── i18n/
│   ├── types.ts         ← Struktur aller Texte (Pflichtfelder)
│   ├── de.ts / en.ts / tr.ts  ← ALLE sichtbaren Texte je Sprache
├── data/legal.ts        ← Impressum & Datenschutz (deutsch, maßgeblich)
├── styles/global.css    ← Design-Tokens (Farben, Schriften, Maße), Effekte, Animationen
├── layouts/BaseLayout.astro  ← <head>, SEO, hreflang, strukturierte Daten
├── components/
│   ├── layout/          ← Header, Footer, Sprachumschalter
│   ├── home/            ← Hero mit Slider, Laufband
│   ├── sections/        ← wiederverwendbare Abschnitte (Karten, Ablauf, FAQ, CTA …)
│   └── ui/              ← kleine Bausteine (Icon, Überschrift, Platzhalter-Markierung)
├── views/               ← Seitenvorlagen (Start, Bereich, Über uns, Kontakt, Recht)
├── pages/
│   ├── [...path].astro  ← erzeugt alle Seiten aller Sprachen aus routes.ts
│   ├── 404.astro, robots.txt.ts, llms.txt.ts
└── assets/brand/        ← Logos (für dunklen Grund freigestellt)
public/                  ← Favicon, Social-Media-Vorschaubild
scripts/make-og-image.py ← erzeugt das Vorschaubild neu
```

## Häufige Änderungen

**Telefon, E-Mail, Adresse, Terminbuchung** → `src/config/site.ts`. Für Online-Terminbuchung den Link bei `bookingUrl` eintragen.

**Texte** → `src/i18n/de.ts`, danach dieselbe Stelle in `en.ts` und `tr.ts`. Fehlt ein Text in einer Sprache, meldet `npm run check` einen Fehler.

**Farben, Schriften, Rundungen** → Block `@theme` in `src/styles/global.css`. Beispiel: `--color-gold` ändert den Goldton überall.

**Impressum / Datenschutz** → `src/data/legal.ts` (zieht Firmendaten automatisch aus `site.ts`).

**Neue Seite anlegen**

1. In `src/config/routes.ts` einen Schlüssel in `pages` und die Adressen in `routes` ergänzen.
2. Texte in `src/i18n/types.ts` (Struktur) und in `de.ts`, `en.ts`, `tr.ts` ergänzen.
3. Eine Vorlage in `src/views/` anlegen und in `src/pages/[...path].astro` einbinden.

**Platzhalter** stehen in `[ECKIGEN KLAMMERN]` und werden auf der Seite gelb markiert. Liste: [PLATZHALTER.md](PLATZHALTER.md).

## Veröffentlichen (GitHub Pages, kostenlos)

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die Seite bei jedem Push auf `main`.

1. Auf github.com ein Konto anlegen und ein **öffentliches** Repository erstellen.
   - Name `<konto>.github.io` → Adresse `https://<konto>.github.io/`
   - jeder andere Name, z. B. `nx24-website` → `https://<konto>.github.io/nx24-website/`
2. Code hochladen:
   ```bash
   git remote add origin https://github.com/<konto>/<repository>.git
   git push -u origin main
   ```
3. Im Repository: **Settings → Pages → Source: „GitHub Actions“**.
4. Nach ca. 2 Minuten ist die Seite online (Status unter dem Reiter „Actions“).

Die Adresse wird im Workflow automatisch gesetzt – keine Code-Änderung nötig.

**Alternativen:** Cloudflare Pages oder Netlify (Repository verbinden, Build-Befehl `npm run build`,
Ausgabeordner `dist`, Umgebungsvariable `SITE_URL` auf die vergebene Adresse setzen).

## Eigene Domain später

1. Domain kaufen (z. B. `nexxcon24.de`).
2. In GitHub unter **Settings → Pages → Custom domain** eintragen und beim Domain-Anbieter die
   angezeigten DNS-Einträge setzen.
3. In `.github/workflows/deploy.yml` `SITE_URL` auf `https://www.nexxcon24.de` und `BASE_PATH` auf `/` setzen
   (oder in `astro.config.mjs` die beiden Werte oben ändern).
4. Hoster-Angabe in `src/config/site.ts` prüfen.

## Technische Leitplanken

- Keine Cookies, kein Tracking, keine externen Skripte oder Schriftserver (DSGVO-freundlich).
- So wenig JavaScript wie möglich: Animationen per CSS (Scroll-Animationen, Parallax);
  JavaScript nur für Slider- und Laufband-Pause.
- Bewegungen schalten bei „reduzierte Bewegung“ im Betriebssystem ab.
- Barrierefreiheit: Tastaturbedienung, sichtbarer Fokus, Pause-Knöpfe, Kontraste nach WCAG AA.
