import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.urbantechcreative.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/games/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
