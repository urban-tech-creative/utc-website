import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/tracing-the-footprint.mdx';

export const metadata: Metadata = {
  title: 'Tracing the Footprint',
  description: "Tracing the Footprint — a short film for the Wolsey 550 celebrations in Ipswich, recreating Cardinal Wolsey's lost college using drones, 3D modelling, animation, and a bespoke music score.",
  openGraph: {
    title: 'Tracing the Footprint | Urban Tech Creative',
    description: "Film recreating Cardinal Wolsey's lost Ipswich college for the Wolsey 550 celebrations — drones, 3D modelling, animation, and original music.",
    url: '/work/tracing-the-footprint',
    images: [{ url: '/images/work/tracing-the-footprint-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/tracing-the-footprint' },
};

export default function TracingFootprintPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Tracing the Footprint', current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  );
}
