# Mitarbeit an der Website

Willkommen! Diese Hinweise helfen externen Entwicklerinnen und Entwicklern, schnell und sauber beizutragen.

## Einrichtung

```bash
npm install
npm run dev
```

Node.js ≥ 22. Editor-Empfehlung: VS Code mit den Erweiterungen „Astro“, „Tailwind CSS IntelliSense“, „ESLint“, „Prettier“.

## Grundprinzipien

1. **Inhalt und Darstellung trennen.** Sichtbare Texte gehören in `src/i18n/*.ts`, Firmendaten in `src/config/site.ts`.
   Komponenten erhalten Texte nur über Props bzw. `t(lang)`.
2. **Drei Sprachen sind Pflicht.** `Dictionary` in `src/i18n/types.ts` erzwingt vollständige Übersetzungen.
3. **Design-Tokens statt Einzelwerte.** Farben/Schriften aus `@theme` (`bg-ink-900`, `text-champagne`, `font-display` …),
   keine neuen Hex-Werte in Komponenten.
4. **Statisch und schlank.** Kein Client-Framework, kein Tracking, keine externen Ressourcen. JavaScript nur, wo CSS nicht reicht.
5. **Barrierefreiheit.** Semantisches HTML, eine `h1` je Seite, Fokus sichtbar, `aria-*` nur wo nötig,
   Bewegung respektiert `prefers-reduced-motion`.
6. **Ehrliche Inhalte.** Keine erfundenen Fakten; Unbekanntes als `[PLATZHALTER]`.

## Ablauf für Änderungen

1. Branch anlegen: `git switch -c feature/kurze-beschreibung`
2. Ändern, dann `npm run format` und `npm run verify`
3. Commit mit aussagekräftiger deutscher Nachricht, z. B. `Kontaktseite: Terminbuchung verlinkt`
4. Pull Request gegen `main` – nach dem Merge veröffentlicht GitHub Actions automatisch.

## Namens- und Code-Konventionen

- Komponenten: `PascalCase.astro`, gruppiert nach `layout/`, `home/`, `sections/`, `ui/`
- Seitenschlüssel (`PageKey`) und Bereichsschlüssel (`ServiceKey`) auf Englisch, Texte in der jeweiligen Sprache
- Pfad-Alias `@/` zeigt auf `src/`
- Links immer über `href(page, lang)` aus `src/config/routes.ts` erzeugen (beachtet Sprache und Basis-Pfad)
