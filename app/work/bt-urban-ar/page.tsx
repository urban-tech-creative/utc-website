import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/bt-urban-ar.mdx';
import Page from '@/components/Page/Page';

export const metadata: Metadata = {
  title: 'Cityscape XR',
  description: "Cityscape XR — the first smart city engagement tool combining live and contained data feeds, overlaid on a physical scale model. Developed for BT's London Phygital Edition.",
  openGraph: {
    title: 'Cityscape XR | Urban Tech Creative',
    description: 'Smart city AR experience overlaying live data on a physical scale model. Deployable across any town or city — developed with BT.',
    url: '/work/bt-urban-ar',
    images: [{ url: '/images/work/bt-urban-ar-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/bt-urban-ar' },
};

export default function BTUrbanARPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Cityscape XR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
