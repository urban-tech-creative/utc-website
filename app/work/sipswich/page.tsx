import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/sipswich.mdx';
import Page from '@/components/Page/Page';

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
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: "Sip'Swich", current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
