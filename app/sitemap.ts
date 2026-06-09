import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.urbantechcreative.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/xr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/working-with-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/pop-xr`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/window-to-the-soul`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/bt-urban-ar`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/construct-ar`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/dock-stories`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/sammys-christmas-adventure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/trailmakers`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/tracing-the-footprint`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/digital-ipswich`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/bt-manufacturing-showcase`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/cambridge-tech-enabled-care-services`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/work/cambridge-arts-festival-ar-trail`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/work/building-projection-sammy-the-reindeer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/work/sipswich`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}
