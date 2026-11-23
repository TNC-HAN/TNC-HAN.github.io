# Kontaktformular einrichten (einmalig, ca. 10 Minuten)

Das Formular auf der Kontaktseite sendet Anfragen an einen kleinen Dienst in **Ihrem eigenen Google-Konto**
(Google Apps Script, kostenlos). Er

- legt jede Anfrage als Mail in Ihr Gmail-Postfach, mit Betreff **„❗ PRIORITÄT A – WICHTIG / DRINGEND“**,
  rotem Label **„❗ PRIORITÄT A“**, als _wichtig_ markiert, mit Stern, ungelesen und mit den Kopfzeilen für
  „hohe Wichtigkeit“ (in Outlook / Apple Mail erscheint das rote Ausrufezeichen),
- speichert Anhänge (bis 100 MB gesamt) im Google-Drive-Ordner **„NEXXCON-24 Website-Anfragen“**
  und setzt die Links in die Mail,
- blockiert gefährliche Dateitypen (Programme, Skripte, Makro-Dokumente – Liste in `Code.gs`).

> Warum nicht direkt als Mail-Anhang? Gmail nimmt höchstens 25 MB pro Mail an. Über Google Drive sind 100 MB möglich.

## Schritte

1. Mit dem Google-Konto **nexxcon24@gmail.com** anmelden und <https://script.google.com> öffnen → **Neues Projekt**.
2. Projektname oben links: `NEXXCON-24 Kontaktformular`.
3. Links auf **Projekteinstellungen** (Zahnrad) → Haken bei **„appsscript.json-Manifestdatei im Editor anzeigen“**.
4. Zurück in den **Editor**:
   - Datei `Code.gs`: gesamten Inhalt durch `scripts/kontaktformular/Code.gs` ersetzen.
   - Datei `appsscript.json`: gesamten Inhalt durch `scripts/kontaktformular/appsscript.json` ersetzen.
   - Speichern (Strg + S).
5. Oben in der Funktionsauswahl **`setup`** wählen → **Ausführen** → Berechtigungen prüfen und erlauben
   (Google warnt „App nicht überprüft“, weil es Ihr eigenes Skript ist: _Erweitert → Zu … wechseln_).
   Danach liegt eine Test-Mail mit rotem Label in Gmail.
6. **Bereitstellen → Neue Bereitstellung** → Typ **Web-App**:
   - Ausführen als: **Ich**
   - Zugriff: **Jeder**
     → **Bereitstellen** → die **Web-App-URL** (endet auf `/exec`) kopieren.
7. Die URL in `src/config/site.ts` bei `formEndpoint` eintragen, Website neu veröffentlichen.

## Spätere Änderungen am Skript

Code ändern → **Bereitstellen → Bereitstellungen verwalten → Bearbeiten (Stift) → Version: Neue Version**.
So bleibt die Web-App-URL gleich.

## Hinweise

- Erlaubte Websites stehen oben in `Code.gs` (`origins`). Bei eigener Domain dort ergänzen.
- Schutz vor Missbrauch: unsichtbares Spam-Feld, höchstens 30 Anfragen pro Stunde, Prüfung von Größe und Dateityp.
- Benachrichtigung auf dem Handy: In der Gmail-App unter _Einstellungen → Konto → Benachrichtigungen_
  „Nur wichtige“ oder „Alle“ wählen. Für einen eigenen Ton: _Labelbenachrichtigungen verwalten → ❗ PRIORITÄT A_.
