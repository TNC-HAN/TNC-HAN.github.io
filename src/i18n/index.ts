import type { Lang } from '@/config/routes';
import type {
  Dictionary as BaseDictionary,
  EmigrationContent,
  ExtraContent,
  MoreContent,
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
import { deMore } from './de.more';
import { enMore } from './en.more';
import { trMore } from './tr.more';

/**
 * Alle Texte einer Sprache: Grundtexte (de.ts …) + erweiterte Inhalte (de.content.ts …)
 * + Bereich Auswanderungscoaching (de.emigration.ts …).
 */
export type Dictionary = Omit<BaseDictionary, 'services'> &
  Omit<ExtraContent, 'details'> &
  Omit<MoreContent, 'faqMore'> & {
    services: BaseDictionary['services'] & { emigration: ServiceContent };
    details: ExtraContent['details'] & { emigration: OfferingDetail[] };
  };

function merge(
  base: BaseDictionary,
  extra: ExtraContent,
  emi: EmigrationContent,
  more: MoreContent,
): Dictionary {
  const { faqMore, ...rest } = more;
  const withFaq = (s: ServiceContent, add: MoreContent['faqMore']['ai']): ServiceContent => ({
    ...s,
    faq: [...s.faq, ...add],
  });
  return {
    ...base,
    ...extra,
    ...rest,
    home: {
      ...base.home,
      faq: { ...base.home.faq, items: [...base.home.faq.items, ...faqMore.home] },
    },
    services: {
      consulting: withFaq(base.services.consulting, faqMore.consulting),
      realEstate: withFaq(base.services.realEstate, faqMore.realEstate),
      ai: withFaq(base.services.ai, faqMore.ai),
      emigration: withFaq(emi.service, faqMore.emigration),
    },
    details: { ...extra.details, emigration: emi.details },
    showcase: { ...extra.showcase, items: [...extra.showcase.items, emi.showcase] },
  };
}

const dictionaries: Record<Lang, Dictionary> = {
  de: merge(de, deContent, deEmigration, deMore),
  en: merge(en, enContent, enEmigration, enMore),
  tr: merge(tr, trContent, trEmigration, trMore),
};

/** Alle Texte einer Sprache. */
export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Kurzbezeichnung für den Sprachumschalter. */
export const langCodes: Record<Lang, string> = { de: 'DE', en: 'EN', tr: 'TR' };
