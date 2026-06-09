import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/window-to-the-soul.mdx';
import Page from '@/components/Page/Page';

export const metadata: Metadata = {
  title: 'Window to the Soul',
  description: 'Window to the Soul: Afghanistan — a VR storytelling experience exploring memory, identity, and resilience through the voices of Afghan women living in the UK. Led by artist Hannah Aria.',
  openGraph: {
    title: 'Window to the Soul | Urban Tech Creative',
    description: 'VR storytelling experience exploring memory, identity, and resilience through the voices of Afghan women in the UK. A sensitive, anonymised narrative crafted with artist Hannah Aria.',
    url: '/work/window-to-the-soul',
    images: [{ url: '/images/work/window-to-the-soul-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/window-to-the-soul' },
};

export default function WindowToTheSoulShowcasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Window to the Soul', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
