import type { Lang } from '@/config/routes';
import type {
  Dictionary as BaseDictionary,
  EmigrationContent,
  ExtraContent,
  OfferingDetail,
  ServiceContent,
} from './types';
import { de } from './de';
import { en } from './en';
import { tr } from './tr';
import { deContent } from './de.content';
import { enContent } from './en.content';
import { trContent } from './tr.content';
import { deEmigration } from './de.emigration';
import { enEmigration } from './en.emigration';
import { trEmigration } from './tr.emigration';

/**
 * Alle Texte einer Sprache: Grundtexte (de.ts …) + erweiterte Inhalte (de.content.ts …)
 * + Bereich Auswanderungscoaching (de.emigration.ts …).
 */
export type Dictionary = Omit<BaseDictionary, 'services'> &
  Omit<ExtraContent, 'details'> & {
    services: BaseDictionary['services'] & { emigration: ServiceContent };
    details: ExtraContent['details'] & { emigration: OfferingDetail[] };
  };

function merge(base: BaseDictionary, extra: ExtraContent, emi: EmigrationContent): Dictionary {
  return {
    ...base,
    ...extra,
    services: { ...base.services, emigration: emi.service },
    details: { ...extra.details, emigration: emi.details },
    showcase: { ...extra.showcase, items: [...extra.showcase.items, emi.showcase] },
  };
}

const dictionaries: Record<Lang, Dictionary> = {
  de: merge(de, deContent, deEmigration),
  en: merge(en, enContent, enEmigration),
  tr: merge(tr, trContent, trEmigration),
};

/** Alle Texte einer Sprache. */
export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Kurzbezeichnung für den Sprachumschalter. */
export const langCodes: Record<Lang, string> = { de: 'DE', en: 'EN', tr: 'TR' };
