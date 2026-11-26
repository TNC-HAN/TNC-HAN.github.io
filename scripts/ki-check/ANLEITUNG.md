# KI-Potenzialcheck – Einrichtung und Einbettung

Fragebogen: `public/ki-check/index.html` → nach dem Veröffentlichen erreichbar unter
**https://tnc-han.github.io/ki-check/**

Die Antworten, Aufnahmen und Dateien gehen an ein Google-Apps-Skript in Ihrem Google-Konto. Es legt alles in Google Drive ab, trägt den Lead in eine Tabelle ein und schickt Ihnen eine Mail.

## 1. Empfangsdienst einrichten (einmalig, ca. 10 Minuten)

1. Im Google-Konto des Unternehmens anmelden und https://script.google.com öffnen → **Neues Projekt**. Namen geben: `NEXXCON-24 KI-Check`.
2. Links auf das Zahnrad **Projekteinstellungen** → Haken bei **„Manifestdatei appsscript.json im Editor anzeigen“**.
3. Zurück zum **Editor**:
   - Inhalt von `Code.gs` komplett durch den Inhalt von `scripts/ki-check/Code.gs` ersetzen.
   - Inhalt von `appsscript.json` komplett durch `scripts/ki-check/appsscript.json` ersetzen.
   - Speichern (Strg+S).
4. Oben in der Funktionsauswahl **`setup`** wählen → **Ausführen**. Google fragt nach Berechtigungen (Drive, Tabellen, Gmail) → zulassen.
   Danach gibt es in Drive den Ordner **„NEXXCON-24 KI-Check Leads“** mit der Tabelle **„KI-Check Leads“**, in Gmail das Label **„KI-Check Lead“** und eine Test-Mail.
5. **Bereitstellen → Neue Bereitstellung** → Typ **Web-App**:
   - Ausführen als: **Ich**
   - Zugriff: **Jeder**
   - **Bereitstellen** → die **Web-App-URL** (endet auf `/exec`) kopieren.
6. In `public/ki-check/index.html` oben die Zeile `const ENDPOINT = '';` ergänzen:
   `const ENDPOINT = 'https://script.google.com/macros/s/…/exec';`
7. Veröffentlichen (Commit + Push auf `main`). Danach einmal selbst testen.

**Später das Skript ändern?** Bereitstellen → Bereitstellungen verwalten → Stift → Version „Neue Version“ → Bereitstellen. Die URL bleibt gleich.

**Andere Domain (z. B. eigene nexxcon-Domain)?** In `Code.gs` bei `origins` ergänzen, z. B. `'https://www.nexxcon-24.de'`, und neue Version bereitstellen.

## 2. Link teilen

Einfach **https://tnc-han.github.io/ki-check/** versenden (E-Mail, WhatsApp, LinkedIn, QR-Code). Der Empfänger startet den Check direkt.

## 3. In die Website einbetten

Auf jeder Seite (auch fremde Baukästen wie WordPress, Wix, Jimdo – als „HTML-Block“):

```html
<iframe id="nx-ki-check" src="https://tnc-han.github.io/ki-check/"
  title="KI-Potenzialcheck NEXXCON-24" allow="camera; microphone; clipboard-write"
  style="width:100%;min-height:760px;border:0;border-radius:20px;display:block" loading="lazy"></iframe>
<script>
  addEventListener('message', function (e) {
    if (e.origin === 'https://tnc-han.github.io' && e.data && e.data.type === 'nx-ki-check-height')
      document.getElementById('nx-ki-check').style.height = (e.data.height + 4) + 'px';
  });
</script>
```

`allow="camera; microphone"` ist nötig, damit Sprach- und Videoaufnahmen im eingebetteten Formular funktionieren. Die Höhe passt sich automatisch an.

## 4. Was Sie pro Lead bekommen

- **Mail** im Postfach: Betreff `🤖 KI-Check Lead A (78) | Firma – Name`, alle Antworten nach Bereichen, Links zu Aufnahmen und Dateien. Antworten geht direkt an den Interessenten. A-Leads sind markiert (wichtig + Stern).
- **Drive-Ordner** je Lead: `Antworten.html`, `Antworten.json`, Aufnahmen (`Q07_Sprachnachricht_1.webm` …) und hochgeladene Dateien.
- **Tabelle „KI-Check Leads“**: eine Zeile je Lead mit Bewertung, Kerndaten und Status-Spalte für Ihre Nachverfolgung.

**Lead-Bewertung (max. 100 Punkte):** Mitarbeitende (20), Routinestunden pro Woche (20), Budget (20), Startzeitpunkt (20), Anfragevolumen (10), Haltung des Teams (10). A ab 65, B ab 40, sonst C. Gewichte in `Code.gs` unter `SCORE` anpassbar.

## 5. Grenzen und Sicherheit

- Eigene Dateien: zusammen max. **100 MB**, max. 20 Dateien. Aufnahmen werden separat gezählt (Audio max. 5 Min. ≈ 2,5 MB, Video max. 3 Min. ≈ 20–25 MB).
- Gesperrt (im Browser **und** im Skript): Programme und Skripte (.exe, .msi, .bat, .cmd, .ps1, .js, .vbs, .jar, .apk, .dmg …), Verknüpfungen, Disk-Images und Office-Dateien mit Makros (.docm, .xlsm, .pptm …). Alle üblichen Formate (PDF, Word, Excel, PowerPoint, Bilder, Audio, Video, ZIP, TXT, CSV …) sind erlaubt.
- Hochgeladene Dateien nicht ungeprüft öffnen – Google Drive prüft Dateien bis 100 MB automatisch auf Viren.
- Missbrauchsschutz: unsichtbares Bot-Feld, max. 30 Einsendungen pro Stunde, nur von erlaubten Websites.

## 6. Datenschutz (bitte vor dem Start erledigen)

- In der **Datenschutzerklärung** einen Abschnitt „KI-Potenzialcheck“ ergänzen: Zweck (Vorbereitung Potenzialanalyse, Kontaktaufnahme), Rechtsgrundlage Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), Speicherung in Google Workspace/Google Drive (Google Ireland, mögliche Übermittlung in die USA, EU-US Data Privacy Framework), Speicherdauer, Widerruf.
- Mit Google den **Auftragsverarbeitungsvertrag** abschließen (bei Google Workspace in der Admin-Konsole; bei einem privaten Gmail-Konto gibt es keinen AVV → für Kundendaten besser ein Google-Workspace-Konto nutzen).
- Das Formular enthält eine Pflicht-Einwilligung mit Link zur Datenschutzerklärung. Rechtlich prüfen lassen.

## 7. Excel-Version zum Herunterladen

Auf der Startseite des Checks gibt es die Datei `public/ki-check/KI-Potenzialcheck-NEXXCON-24.xlsx` (gleiche 25 + 20 Fragen, Kontaktblatt, Fortschrittsanzeige). Ausgefüllte Dateien kommen per E-Mail an nexxcon24@gmail.com, nicht in die Lead-Tabelle.

Ändern sich die Fragen im Online-Formular, die Excel-Datei neu erzeugen: Zeilen `const PART1 = [` bis zum Ende von `PART2` aus `index.html` in eine Datei `q.js` kopieren, darunter `require("fs").writeFileSync(process.argv[2], JSON.stringify({PART1,PART2}));` ergänzen, dann
`node q.js q.json` und `python scripts/ki-check/make_xlsx.py q.json public/ki-check/KI-Potenzialcheck-NEXXCON-24.xlsx`.

## 8. Sprachen (Deutsch, Englisch, Türkisch)

- Seiten: `/ki-check/` (de), `/ki-check/en/`, `/ki-check/tr/` – schlanke Hüllen; Logik in `app.js`, Gestaltung in `app.css`, Texte und Fragen in `lang-de.js`, `lang-en.js`, `lang-tr.js`.
- Fragen- und Antwortreihenfolge muss in allen Sprachen gleich bleiben (Lead-Bewertung nach Index).
- An das Skript gehen immer die deutschen Fragen und Antworten; Freitext bleibt im Original. Englische/türkische Einsendungen sind in der Mail-Fußzeile mit `[EN]`/`[TR]` markiert.
- Excel je Sprache: `python scripts/ki-check/make_xlsx.py q.json <datei>.xlsx de|en|tr` (q.json aus der jeweiligen lang-Datei, siehe Abschnitt 7).
