/**
 * Struktur (nicht Text!) der Inhalts-Bausteine: welches Bild, welches Ziel.
 * Die Texte dazu stehen in src/i18n/*.ts in derselben Reihenfolge.
 */
import type { PageKey, ServiceKey } from './routes';
import type { PhotoKey } from './media';

export interface Target {
  page: PageKey;
  /** Sprungmarke auf der Zielseite, z. B. "off-market" */
  hash?: string;
}

/**
 * Slide-Banner oben auf der Startseite – 10 Themen (Texte: banner.slides).
 * `graphic: 'agentic'` zeigt statt des Fotos die animierte Agentic-AI-Grafik (Foto bleibt als Rückfall).
 * `gallery` macht aus der Folie eine kleine Diashow (Fotos wechseln, Folie bleibt entsprechend länger).
 * `light` nutzt eine hellere Abdunklung, damit das Motiv auch links gut sichtbar bleibt.
 */
export const bannerSlides: (Target & {
  photo: PhotoKey;
  graphic?: 'agentic';
  gallery?: PhotoKey[];
  /** Dreigeteiltes Bild, jede Spalte eine eigene kleine Diashow (z. B. D · A · CH) */
  panels?: PhotoKey[][];
  light?: boolean;
})[] = [
  { photo: 'strategieMeeting', page: 'consulting', hash: 'strategie', light: true },
  { photo: 'coachingUnternehmer', page: 'consulting', hash: 'coaching', light: true },
  { photo: 'vertragUnterschrift', page: 'consulting', hash: 'nachfolge' },
  {
    photo: 'villaPoolModern',
    page: 'realEstate',
    hash: 'off-market',
    gallery: [
      'villaPoolModern',
      'omPenthouseMeer',
      'omAnwesen',
      'omVillaPool',
      'omHerrenhaus',
      'omWasserlage',
      'omArchitektenhaus',
      'omAltbau',
      'omBuero',
      'omPenthouseNacht',
    ],
  },
  {
    photo: 'dachCollage',
    page: 'realEstate',
    hash: 'markt-dach',
    light: true,
    panels: [
      ['dachDeAltbauvilla', 'dachDeHamburg', 'dachDeMuenchen'],
      ['dachAtWien', 'dachAtAlpenvilla', 'dachAtVillaBerge'],
      ['dachChZuerich', 'dachChVilla', 'dachChModern'],
    ],
  },
  { photo: 'istanbulNacht', page: 'realEstate', hash: 'markt-tuerkei', light: true },
  {
    photo: 'noyanlarPool',
    page: 'realEstate',
    hash: 'markt-nordzypern',
    light: true,
    gallery: [
      'noyanlarPool',
      'nzKyreniaHafen',
      'nzPromenade',
      'nzKyreniaBurg',
      'nzStrand',
      'noyanlarOceanLife',
      'nzHuegel',
      'nzKyreniaBaum',
      'nzMeerblick',
      'nzTuerkis',
    ],
  },
  { photo: 'datenanalyseLaptop', page: 'realEstate', hash: 'due-diligence' },
  { photo: 'rechenzentrum', page: 'ai', hash: 'workflow-automatisierung', graphic: 'agentic' },
  { photo: 'kiRoboter', page: 'ai', hash: 'ki-assistenten' },
];

/** Bild-Text-Abschnitte im Zickzack auf der Startseite (Texte: home.showcase.items) */
export const showcase: (Target & { photo: PhotoKey; gallery?: PhotoKey[] })[] = [
  { photo: 'planungWand', page: 'consulting', hash: 'strategie' },
  { photo: 'unternehmerNachdenklich', page: 'consulting', hash: 'coaching' },
  { photo: 'herrenhaus', page: 'consulting', hash: 'nachfolge' },
  {
    photo: 'poolMediterran',
    page: 'realEstate',
    hash: 'off-market',
    gallery: [
      'poolMediterran',
      'omVillaPool',
      'omAnwesen',
      'omPenthouseMeer',
      'omHerrenhaus',
      'omAltbau',
      'omArchitektenhaus',
      'omBuero',
      'omWasserlage',
      'omPenthouseNacht',
    ],
  },
  {
    photo: 'noyanlarOceanLife',
    page: 'realEstate',
    hash: 'maerkte',
    gallery: [
      'noyanlarOceanLife',
      'trIstanbulNacht',
      'trBodrumAbend',
      'nzKyreniaHafen',
      'trAntalya',
      'trKaputas',
      'nzStrand',
      'trOeluedeniz',
      'trOrtakoey',
      'trBodrumBucht',
    ],
  },
  {
    photo: 'ddHausLupe',
    page: 'realEstate',
    hash: 'due-diligence',
    gallery: [
      'ddHausLupe',
      'ddBauplan',
      'ddArchitekt',
      'ddBaustelle',
      'ddTechnik',
      'ddFinanzen',
      'ddDashboard',
      'ddDokumente',
      'ddVertrag',
      'ddNotar',
    ],
  },
  { photo: 'programmcode', page: 'ai', hash: 'workflow-automatisierung' },
  { photo: 'datenanalyseLaptop', page: 'ai', hash: 'ki-assistenten' },
  { photo: 'mittelmeerBucht', page: 'emigration' },
];

/** Sprungmarken der 6 Leistungen je Bereich (Reihenfolge = services.<bereich>.offerings.items) */
export const offeringIds: Record<ServiceKey, string[]> = {
  consulting: ['strategie', 'wachstum', 'prozesse', 'finanzierung', 'coaching', 'nachfolge'],
  realEstate: [
    'off-market',
    'investmentanalyse',
    'due-diligence',
    'diskreter-verkauf',
    'international',
    'portfolio',
  ],
  ai: [
    'potenzialanalyse',
    'workflow-automatisierung',
    'ki-assistenten',
    'daten-reporting',
    'web-apps',
    'schulung',
  ],
  emigration: ['tuerkei', 'nordzypern', 'zielland-check', 'usa', 'vae-dubai', 'ankommen'],
};

/** Bilder auf den Bereichsseiten: Kopfbild + Bilder neben ausgewählten Leistungen */
export const serviceMedia: Record<
  ServiceKey,
  {
    hero: PhotoKey;
    inline: Partial<Record<number, PhotoKey>>;
    /** Optional: Bildwechsel im Unterbereich (erstes Bild = inline) */
    galleries?: Partial<Record<number, PhotoKey[]>>;
  }
> = {
  consulting: {
    hero: 'strategieMeeting',
    inline: { 0: 'planungWand', 4: 'coachingUnternehmer', 5: 'handschlagNachfolge' },
  },
  realEstate: {
    hero: 'villaPoolModern',
    inline: { 0: 'poolMediterran', 2: 'vertragUnterschrift', 4: 'istanbulBosporus' },
    galleries: {
      0: [
        'poolMediterran',
        'omVillaPool',
        'omAnwesen',
        'omArchitektenhaus',
        'omPenthouseMeer',
        'omHerrenhaus',
        'omAltbau',
        'omBuero',
        'omPenthouseNacht',
        'omWasserlage',
      ],
    },
  },
  ai: {
    hero: 'rechenzentrum',
    inline: { 1: 'programmcode', 2: 'kiRoboter', 3: 'datenanalyseLaptop' },
  },
  emigration: {
    hero: 'mittelmeerBucht',
    inline: { 0: 'istanbulNacht', 1: 'noyanlarOceanLife', 4: 'dubaiMarina' },
  },
};

/** Märkte (Immobilien): Sprungmarken in Reihenfolge von home.regions.items */
export const regionIds = ['markt-dach', 'markt-europa', 'markt-tuerkei', 'markt-nordzypern'];
