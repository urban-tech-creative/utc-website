import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/sipswich.mdx';

export const metadata: Metadata = {
  title: "Sip'Swich",
  description: "Sip'Swich — a digital platform for town-wide trails and local discovery in Ipswich, connecting residents and visitors with local venues and hidden stories.",
  openGraph: {
    title: "Sip'Swich | Urban Tech Creative",
    description: 'Digital trail and local discovery platform for Ipswich — connecting people with venues, stories, and places across the town.',
    url: '/work/sipswich',
  },
  alternates: { canonical: '/work/sipswich' },
};

export default function SipswichPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: "Sip'Swich", current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
