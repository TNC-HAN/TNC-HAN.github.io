/**
 * Struktur aller Texte. Jede Sprachdatei (de.ts, en.ts, tr.ts) muss diese
 * Struktur vollständig erfüllen – TypeScript meldet fehlende Texte beim
 * Prüfen (npm run check), damit keine Sprache „Lücken“ bekommt.
 */
export interface Seo {
  title: string;
  description: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceContent {
  seo: Seo;
  /** Kurzname in Navigation und Karten */
  label: string;
  card: { title: string; text: string; points: string[] };
  slide: { kicker: string; title: string; text: string };
  hero: { eyebrow: string; title: string; lead: string };
  offerings: { eyebrow: string; title: string; items: TitledText[] };
  audience: { eyebrow: string; title: string; items: string[] };
  approach: { eyebrow: string; title: string; text: string; points: string[] };
  faq: Faq[];
  cta: { title: string; text: string };
  /** Optionaler Risikohinweis (z. B. bei Investments) */
  risk?: string;
}

export interface Dictionary {
  meta: {
    htmlLang: string;
    ogLocale: string;
    languageName: string;
    /** Hinweis auf EN/TR-Rechtsseiten, dass die deutsche Fassung gilt */
    legalNote: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    menu: string;
    skip: string;
    language: string;
    primary: string;
  };
  common: {
    learnMore: string;
    pause: string;
    play: string;
    previous: string;
    next: string;
    slide: string;
    phone: string;
    email: string;
    whatsapp: string;
    booking: string;
    bookingPending: string;
    whatsappMessage: string;
    riskTitle: string;
    faqTitle: string;
    placeholderNote: string;
    backHome: string;
    breadcrumbHome: string;
  };
  /** Auswahlfenster „Mit welchem Programm anrufen / mailen?“ (Kontaktseite) */
  launcher: {
    phoneTitle: string;
    phoneLead: string;
    emailTitle: string;
    emailLead: string;
    defaultPhone: string;
    defaultPhoneHint: string;
    defaultEmail: string;
    defaultEmailHint: string;
    sipHint: string;
    calltoHint: string;
    macOnly: string;
    browserHint: string;
    copyHint: string;
    copyNumber: string;
    copyAddress: string;
    copied: string;
    remember: string;
    change: string;
    close: string;
    notOpened: string;
    chooseOther: string;
    emailSubject: string;
  };
  home: {
    seo: Seo;
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      lead: string;
      primary: string;
      secondary: string;
      trust: string[];
    };
    marquee: string[];
    areas: { eyebrow: string; title: string; lead: string };
    process: { eyebrow: string; title: string; lead: string; steps: TitledText[] };
    why: { eyebrow: string; title: string; lead: string; items: TitledText[] };
    regions: { eyebrow: string; title: string; lead: string; items: TitledText[] };
    faq: { eyebrow: string; title: string; items: Faq[] };
    cta: { eyebrow: string; title: string; text: string; reassurance: string };
  };
  services: {
    consulting: ServiceContent;
    realEstate: ServiceContent;
    ai: ServiceContent;
  };
  about: {
    seo: Seo;
    hero: { eyebrow: string; title: string; lead: string };
    profile: { eyebrow: string; title: string; role: string; bio: string };
    values: { eyebrow: string; title: string; items: TitledText[] };
    brands: { eyebrow: string; title: string; text: string };
  };
  contact: {
    seo: Seo;
    hero: { eyebrow: string; title: string; lead: string };
    channels: {
      title: string;
      phoneText: string;
      emailText: string;
      whatsappText: string;
      bookingText: string;
    };
    prepare: { title: string; items: string[] };
    location: { title: string; text: string };
  };
  legal: {
    imprint: Seo;
    privacy: Seo;
  };
  notFound: { seo: Seo; title: string; text: string };
  footer: {
    claim: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    imprint: string;
    privacy: string;
    rights: string;
    brandsNote: string;
  };
}
