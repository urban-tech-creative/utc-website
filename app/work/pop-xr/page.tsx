import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/pop-xr.mdx';
import Page from '@/components/Page/Page';

export const metadata: Metadata = {
  title: 'Pop.XR',
  description: 'POP.XR — an Innovate UK-supported immersive pop-up platform combining physical installation with mixed reality technology for high streets, cultural venues, and public spaces.',
  openGraph: {
    title: 'Pop.XR | Urban Tech Creative',
    description: 'Mixed reality pop-up platform for high streets and public spaces — transforming underused venues into memorable destinations. Supported by Innovate UK.',
    url: '/work/pop-xr',
    images: [{ url: '/images/work/pop-xr-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/pop-xr' },
};

export default function PopXRPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Pop.XR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
