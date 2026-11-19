/**
 * Zentrale Firmendaten. Hier – und nur hier – Kontaktdaten, Anschrift und
 * Rechtsangaben ändern. Texte in eckigen Klammern [ … ] sind Platzhalter
 * und werden auf der Website gelb markiert, bis sie ersetzt sind.
 */
export const site = {
  brand: 'NEXXCON-24',
  brandShort: 'NX.24',
  hashtag: '#nexxcon',
  company: 'Nexxus – Business & IT. Consulting',
  /** Rechtsform: Einzelunternehmen mit einem alleinigen Inhaber. */
  legalForm: 'Einzelunternehmen',
  owner: 'Ümit Törün',
  ownerTitle: 'Dipl.-Imb.',
  ownerRole: 'Founder & CEO',

  address: {
    street: 'Wülferoder Str. 43',
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
    bookingUrl: 'https://calendly.com/uemit-t-aka-nexxcon24',
  },

  legal: {
    /** Wird im Impressum genau so angezeigt; später durch die Nummer ersetzen. */
    vatId: 'USt.-Id. folgt ...',
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
