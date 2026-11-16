# Offene Platzhalter (vor Veröffentlichung ausfüllen)

Auf der Website werden Platzhalter gelb markiert. Suche im Code nach `[`.

| Wo                                                  | Platzhalter                    | Was zu tun ist                                                         |
| --------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| `src/config/site.ts` → `address.street`             | Straße und Hausnummer          | Geschäftsanschrift eintragen (Pflicht im Impressum)                    |
| `src/config/site.ts` → `partners`                   | weitere Gesellschafter der GbR | Alle Gesellschafter nennen oder Zeile löschen                          |
| `src/config/site.ts` → `legal.vatId`                | USt-IdNr.                      | Eintragen oder Zeile in `src/data/legal.ts` entfernen                  |
| `src/config/site.ts` → `contact.bookingUrl`         | Terminbuchung                  | Link eintragen, sobald vorhanden (sonst erscheint ein Hinweis)         |
| `src/data/legal.ts` → Datenschutz 3                 | Grundlage US-Übermittlung      | Angaben des Hosters (GitHub) prüfen                                    |
| `src/data/legal.ts` → Datenschutz 8                 | Stand                          | Monat/Jahr eintragen                                                   |
| `.github/workflows/deploy.yml` / `astro.config.mjs` | Adresse der Website            | Wird bei GitHub Pages automatisch gesetzt; bei eigener Domain anpassen |

**Empfehlung:** Impressum und Datenschutzerklärung vor der Veröffentlichung rechtlich prüfen lassen.
