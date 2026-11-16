# Regeln für Claude-Code-Sitzungen in diesem Projekt

Website der Nexxus – Business & IT. Consulting GbR (Marke NEXXCON-24). Astro + TypeScript strict + Tailwind 4, statisch, DE/EN/TR.
Inhaber: Ümit Törün – auf Deutsch antworten, einfache Sprache, Fachbegriffe kurz erklären.

## Wo was liegt

- Firmendaten/Kontakt: `src/config/site.ts` · Seiten & URLs: `src/config/routes.ts`
- Alle Texte: `src/i18n/de.ts`, `en.ts`, `tr.ts` (Struktur `types.ts`) – **nie Text hart in Komponenten schreiben**
- Rechtstexte: `src/data/legal.ts` · Design-Tokens: `@theme` in `src/styles/global.css`
- Ausführliche Doku: `README.md`, offene Platzhalter: `PLATZHALTER.md`

## Feste Vorgaben

- Geschäftsbereiche immer in dieser Reihenfolge (`serviceKeys`): 1. Unternehmensberatung/Coaching/Consulting für KMU, 2. Immobilienberatung Off-Market & Investment (D-A-CH, Europa, Türkei, Nordzypern), 3. KI-Automation für KMU.
- Textänderungen immer in allen drei Sprachen nachziehen.
- Keine erfundenen Zahlen, Referenzen, Kundenstimmen, Zertifikate. Fehlendes als `[PLATZHALTER]` markieren und in `PLATZHALTER.md` eintragen.
- Risikohinweis bei Immobilieninvestments behalten; keine Renditeversprechen.
- Keine Cookies, kein Tracking, keine externen Skripte/Schriftserver, kein Formular an Drittanbieter.
- Neue Animationen: per CSS, mit `prefers-reduced-motion` abschaltbar; bewegte Inhalte > 5 s brauchen Pause-Knopf.

## Arbeitsablauf

- Vor jedem Commit: `npm run verify` (lint + check + build) muss fehlerfrei sein.
- Kleine Commits mit deutschen Nachrichten.
- Push / Veröffentlichung nur nach ausdrücklichem Ja des Inhabers.
- Projekt liegt auf `D:\Projekte\nx24-website` (Wechsellaufwerk). npm-Cache auf D: nutzen: `npm install --cache D:\npm-cache`, da C: kaum Platz hat.
- Stand und Entscheidungen im Obsidian-Tresor festhalten: `Projekte/Website/Website.md`.
