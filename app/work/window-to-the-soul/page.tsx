import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/window-to-the-soul.mdx';

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
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Window to the Soul', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
