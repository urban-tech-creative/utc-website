import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/cambridge-arts-festival-ar-trail.mdx';

export const metadata: Metadata = {
  title: 'Cambridge Arts Festival AR Trail',
  description: 'Augmented reality trail for Cambridge Arts Festival — a location-based AR experience connecting festival audiences with art and place.',
  openGraph: {
    title: 'Cambridge Arts Festival AR Trail | Urban Tech Creative',
    description: 'Location-based AR trail created for Cambridge Arts Festival, connecting audiences with art and public space through immersive technology.',
    url: '/work/cambridge-arts-festival-ar-trail',
  },
  alternates: { canonical: '/work/cambridge-arts-festival-ar-trail' },
};

export default function CambridgeArtsFestivalArTrailPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Cambridge Arts Festival AR Trail', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
