import type { Lang } from '@/config/routes';
import type { Dictionary } from './types';
import { de } from './de';
import { en } from './en';
import { tr } from './tr';

const dictionaries: Record<Lang, Dictionary> = { de, en, tr };

/** Alle Texte einer Sprache. */
export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Kurzbezeichnung für den Sprachumschalter. */
export const langCodes: Record<Lang, string> = { de: 'DE', en: 'EN', tr: 'TR' };

export type { Dictionary } from './types';
