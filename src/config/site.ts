/**
 * Zentrale Firmendaten. Hier – und nur hier – Kontaktdaten, Anschrift und
 * Rechtsangaben ändern. Texte in eckigen Klammern [ … ] sind Platzhalter
 * und werden auf der Website gelb markiert, bis sie ersetzt sind.
 */
export const site = {
  brand: 'NEXXCON-24',
  brandShort: 'NX.24',
  hashtag: '#nexxcon',
  company: 'Nexxus – Business & IT. Consulting GbR',
  owner: 'Ümit Törün',
  ownerTitle: 'Dipl.-Imb.',
  /** Alle Gesellschafter der GbR (Pflichtangabe im Impressum). */
  partners: ['Ümit Törün', '[WEITERE GESELLSCHAFTER DER GbR EINTRAGEN ODER ZEILE LÖSCHEN]'],

  address: {
    street: '[STRASSE UND HAUSNUMMER]',
    zip: '30880',
    city: 'Laatzen',
    region: 'Region Hannover',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  contact: {
    email: 'nexxcon24@gmail.com',
    phoneDisplay: '0171 1819905',
    /** Internationales Format ohne Leerzeichen – wird für tel: und WhatsApp genutzt. */
    phoneIntl: '+491711819905',
    /**
     * Link zur Online-Terminbuchung (z. B. Calendly, Microsoft Bookings).
     * Leer lassen, solange es keinen gibt – dann erscheint ein Hinweis.
     */
    bookingUrl: '',
  },

  legal: {
    vatId: '[USt-IdNr. EINTRAGEN ODER ZEILE LÖSCHEN]',
    /** Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV */
    responsible: 'Ümit Törün',
    /** Anbieter, der die Website ausliefert (für die Datenschutzerklärung). */
    host: 'GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
  },

  /** Einzugsgebiet für strukturierte Daten (Suchmaschinen). */
  areaServed: ['DE', 'AT', 'CH', 'TR', 'CY', 'EU'],
} as const;

export type Site = typeof site;

/** WhatsApp-Link mit vorbefüllter Nachricht. */
export function whatsappUrl(message: string): string {
  const number = site.contact.phoneIntl.replace(/[^\d]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
