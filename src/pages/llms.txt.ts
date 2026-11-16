import type { APIRoute } from 'astro';
import { routePath, serviceKeys } from '@/config/routes';
import { site } from '@/config/site';
import { t } from '@/i18n';

/**
 * llms.txt – kompakte Zusammenfassung für KI-Suchmaschinen und Assistenten
 * (Generative Engine Optimization). Wird automatisch aus den Inhalten erzeugt.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const root = new URL(import.meta.env.BASE_URL, siteUrl);
  const de = t('de');
  const url = (path: string) => new URL(path, root).href;

  const lines = [
    `# ${site.brand} – ${site.company}`,
    '',
    `> ${de.home.seo.description}`,
    '',
    `Sitz: ${site.address.zip} ${site.address.city} (${site.address.region}), ${site.address.country}. Sprachen: Deutsch, Englisch, Türkisch.`,
    `Kontakt: ${site.contact.email}, ${site.contact.phoneIntl}`,
    '',
    '## Geschäftsbereiche',
    ...serviceKeys.map((key) => {
      const s = de.services[key];
      return `- [${s.card.title}](${url(routePath(key, 'de'))}): ${s.seo.description}`;
    }),
    '',
    '## Häufige Fragen',
    ...de.home.faq.items.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Weitere Seiten',
    `- [Über uns](${url(routePath('about', 'de'))})`,
    `- [Kontakt](${url(routePath('contact', 'de'))})`,
    `- [English](${url(routePath('home', 'en'))})`,
    `- [Türkçe](${url(routePath('home', 'tr'))})`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
