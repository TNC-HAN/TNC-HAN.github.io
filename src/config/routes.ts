/**
 * Routentabelle: Jede Seite der Website mit ihrer Adresse je Sprache.
 * Neue Seite = neuer Eintrag hier + Inhalt in src/i18n/*.ts + Ansicht in
 * src/views/ (siehe README, Abschnitt „Neue Seite anlegen“).
 */
export const languages = ['de', 'en', 'tr'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'de';

export const pages = [
  'home',
  'consulting',
  'realEstate',
  'ai',
  'emigration',
  'about',
  'contact',
  'imprint',
  'privacy',
] as const;
export type PageKey = (typeof pages)[number];

/** Die Geschäftsbereiche – in genau dieser Reihenfolge überall auf der Seite. */
export const serviceKeys = ['consulting', 'realEstate', 'ai', 'emigration'] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { de: '', en: '', tr: '' },
  consulting: { de: 'unternehmensberatung', en: 'business-consulting', tr: 'isletme-danismanligi' },
  realEstate: {
    de: 'immobilien-investment',
    en: 'real-estate-investment',
    tr: 'gayrimenkul-yatirim',
  },
  ai: { de: 'ki-automation', en: 'ai-automation', tr: 'yapay-zeka-otomasyonu' },
  emigration: {
    de: 'auswanderungscoaching',
    en: 'relocation-coaching',
    tr: 'yurt-disina-yerlesim-koclugu',
  },
  about: { de: 'ueber-uns', en: 'about', tr: 'hakkimizda' },
  contact: { de: 'kontakt', en: 'contact', tr: 'iletisim' },
  imprint: { de: 'impressum', en: 'imprint', tr: 'kunye' },
  privacy: { de: 'datenschutz', en: 'privacy', tr: 'gizlilik' },
};

/** Pfad ohne Basis, z. B. "en/contact/" oder "" für die deutsche Startseite. */
export function routePath(page: PageKey, lang: Lang): string {
  const parts = [lang === defaultLang ? '' : lang, routes[page][lang]].filter(Boolean);
  return parts.length ? `${parts.join('/')}/` : '';
}

/** Vollständiger Link inklusive Basis-Pfad (z. B. für GitHub Pages). */
export function href(page: PageKey, lang: Lang, hash = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${routePath(page, lang)}${hash}`;
}

/** Datei aus /public mit Basis-Pfad. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;
}
