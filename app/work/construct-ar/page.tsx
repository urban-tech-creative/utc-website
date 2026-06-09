import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Construct.XR',
  description: 'Construct.XR — mixed and augmented reality for the built environment. Using Trimble Geosystems technology and HoloLens headsets for design review, site coordination, and clash detection.',
  openGraph: {
    title: 'Construct.XR | Urban Tech Creative',
    description: 'MR and AR for construction — design review, site setting-out, and clash detection using Trimble HoloLens headsets for projects including Norwich Castle and City College Norwich.',
    url: '/work/construct-ar',
    images: [{ url: '/images/work/construct-ar-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/construct-ar' },
};
import Content from '@/content/work/construct-ar.mdx';
import Page from '@/components/Page/Page';

export default function ConstructARPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Construct.XR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
