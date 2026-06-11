import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/dock-stories.mdx';

export const metadata: Metadata = {
  title: 'Dock Stories',
  description: 'Dock Stories — image-recognition AR revealing the history and stories of waterfront locations. Featuring Griff Rhys Jones, bringing heritage to life through immersive technology.',
  openGraph: {
    title: 'Dock Stories | Urban Tech Creative',
    description: 'AR heritage experience using image recognition to reveal waterfront stories, featuring Griff Rhys Jones.',
    url: '/work/dock-stories',
    images: [{ url: '/images/work/dock-stories-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/dock-stories' },
};

export default function DockStoriesPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Dock Stories', current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  );
}
