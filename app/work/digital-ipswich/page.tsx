import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/digital-ipswich.mdx';

export const metadata: Metadata = {
  title: 'Digital Ipswich',
  description: 'Digital Ipswich — public realm digital infrastructure for Ipswich Borough Council, including the Ipswich Portal and Digital Binoculars, delivered as part of the Digital Ipswich programme.',
  openGraph: {
    title: 'Digital Ipswich | Urban Tech Creative',
    description: 'Civic digital infrastructure for Ipswich Borough Council — the Ipswich Portal and Digital Binoculars, translating ambitious ideas into approved public realm installations.',
    url: '/work/digital-ipswich',
    images: [{ url: '/images/work/digital-ipswich-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/digital-ipswich' },
};

export default function DigitalIpswichPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Digital Ipswich', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
