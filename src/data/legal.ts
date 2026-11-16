/**
 * Rechtstexte (Impressum, Datenschutz) – ENTWURF, vor Veröffentlichung
 * rechtlich prüfen lassen. Maßgeblich ist die deutsche Fassung; sie wird
 * auch auf den englischen und türkischen Seiten angezeigt.
 * Platzhalter stehen in [ECKIGEN KLAMMERN] und werden gelb markiert.
 */
import { site } from '@/config/site';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

const a = site.address;
const fullAddress = `${a.street}, ${a.zip} ${a.city}, ${a.country}`;

export const imprint: { title: string; sections: LegalSection[] } = {
  title: 'Impressum',
  sections: [
    {
      heading: 'Angaben gemäß § 5 DDG',
      paragraphs: [site.company, a.street, `${a.zip} ${a.city}`, a.country],
    },
    {
      heading: 'Vertreten durch die Gesellschafter',
      paragraphs: [],
      list: [...site.partners],
    },
    {
      heading: 'Kontakt',
      paragraphs: [`Telefon: ${site.contact.phoneDisplay}`, `E-Mail: ${site.contact.email}`],
    },
    {
      heading: 'Umsatzsteuer-Identifikationsnummer',
      paragraphs: [`Gemäß § 27a Umsatzsteuergesetz: ${site.legal.vatId}`],
    },
    {
      heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
      paragraphs: [`${site.legal.responsible}, ${fullAddress}`],
    },
    {
      heading: 'Verbraucherstreitbeilegung',
      paragraphs: [
        'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
    },
    {
      heading: 'Haftung für Inhalte',
      paragraphs: [
        'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Die Inhalte stellen keine Rechts-, Steuer- oder Anlageberatung dar.',
      ],
    },
    {
      heading: 'Haftung für Links',
      paragraphs: [
        'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.',
      ],
    },
    {
      heading: 'Urheberrecht',
      paragraphs: [
        'Die durch den Betreiber erstellten Inhalte, Texte, Grafiken und Logos unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Betreibers.',
      ],
    },
  ],
};

export const privacy: { title: string; sections: LegalSection[] } = {
  title: 'Datenschutzerklärung',
  sections: [
    {
      heading: '1. Verantwortlicher',
      paragraphs: [
        `${site.company}, ${fullAddress}`,
        `Telefon: ${site.contact.phoneDisplay} · E-Mail: ${site.contact.email}`,
      ],
    },
    {
      heading: '2. Überblick',
      paragraphs: [
        'Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Werkzeuge, keine Werbe-Pixel und keine eingebetteten Inhalte Dritter. Schriftarten werden von unserem eigenen Server geladen; es findet keine Verbindung zu Google Fonts oder anderen Schriftanbietern statt.',
      ],
    },
    {
      heading: '3. Hosting und Server-Logdateien',
      paragraphs: [
        `Diese Website wird bereitgestellt von: ${site.legal.host}. Beim Aufruf der Website verarbeitet der Anbieter technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logdateien, um die Website auszuliefern und ihre Sicherheit zu gewährleisten.`,
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionsfähigen Website). Eine Übermittlung in die USA ist möglich; der Anbieter stützt sich hierfür auf [PRÜFEN: EU-US Data Privacy Framework und/oder Standardvertragsklauseln – Angaben des Hosters prüfen].',
      ],
    },
    {
      heading: '4. Kontaktaufnahme per E-Mail und Telefon',
      paragraphs: [
        'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.',
        'Wir löschen die Daten, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
      ],
    },
    {
      heading: '5. Kontaktaufnahme per WhatsApp',
      paragraphs: [
        'Auf dieser Website befinden sich Links zu WhatsApp. Erst wenn Sie einen solchen Link anklicken, wird WhatsApp geöffnet; vorher werden keine Daten an WhatsApp übertragen. Bei der Nutzung von WhatsApp verarbeitet die WhatsApp Ireland Ltd. (Meta) Daten nach eigenen Bestimmungen, auch in den USA. Wenn Sie dies nicht wünschen, nutzen Sie bitte Telefon oder E-Mail.',
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung durch die freiwillige Nutzung) bzw. Art. 6 Abs. 1 lit. b DSGVO.',
      ],
    },
    {
      heading: '6. Ihre Rechte',
      paragraphs: ['Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:'],
      list: [
        'Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)',
        'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
        'Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)',
        'Datenübertragbarkeit (Art. 20 DSGVO)',
        'Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)',
        'Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
        'Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)',
      ],
    },
    {
      heading: '7. Zuständige Aufsichtsbehörde',
      paragraphs: [
        'Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.',
      ],
    },
    {
      heading: '8. Stand',
      paragraphs: ['Diese Datenschutzerklärung hat den Stand [MONAT JAHR].'],
    },
  ],
};
