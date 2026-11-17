import type { Lang } from '@/config/routes';
import type { Dictionary as BaseDictionary, ExtraContent } from './types';
import { de } from './de';
import { en } from './en';
import { tr } from './tr';
import { deContent } from './de.content';
import { enContent } from './en.content';
import { trContent } from './tr.content';

/** Alle Texte einer Sprache: Grundtexte (de.ts …) + erweiterte Inhalte (de.content.ts …). */
export type Dictionary = BaseDictionary & ExtraContent;

const dictionaries: Record<Lang, Dictionary> = {
  de: { ...de, ...deContent },
  en: { ...en, ...enContent },
  tr: { ...tr, ...trContent },
};

/** Alle Texte einer Sprache. */
export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Kurzbezeichnung für den Sprachumschalter. */
export const langCodes: Record<Lang, string> = { de: 'DE', en: 'EN', tr: 'TR' };
