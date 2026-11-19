# Offene Platzhalter (vor Veröffentlichung ausfüllen)

Auf der Website werden Platzhalter gelb markiert. Suche im Code nach `[`.

| Wo                                                  | Platzhalter                          | Was zu tun ist                                                           |
| --------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| `src/config/site.ts` → `legal.vatId`                | „USt.-Id. folgt ...“                 | Durch die USt-IdNr. ersetzen, sobald vorhanden (kein gelber Platzhalter) |
| `src/data/legal.ts` → Datenschutz 3                 | Grundlage US-Übermittlung            | Angaben des Hosters (GitHub) prüfen                                      |
| `src/data/legal.ts` → Datenschutz 6                 | Calendly: Anschrift, US-Übermittlung | Angaben in der Datenschutzerklärung von Calendly prüfen                  |
| `.github/workflows/deploy.yml` / `astro.config.mjs` | Adresse der Website                  | Wird bei GitHub Pages automatisch gesetzt; bei eigener Domain anpassen   |

**Empfehlung:** Impressum und Datenschutzerklärung vor der Veröffentlichung rechtlich prüfen lassen.
