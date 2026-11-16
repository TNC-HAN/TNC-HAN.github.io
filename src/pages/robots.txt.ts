import type { APIRoute } from 'astro';

/** robots.txt – erlaubt alle Suchmaschinen und KI-Crawler, verweist auf die Sitemap. */
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site);
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', root).href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
