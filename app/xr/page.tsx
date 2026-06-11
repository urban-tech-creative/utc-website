import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/xr.mdx';

export const metadata: Metadata = {
  title: 'XR: Extended Reality',
  description: 'Augmented Reality, Mixed Reality, and Virtual Reality — our full XR capability including Unity, ARKit, ARCore, Meta Quest, VPS, hand tracking, and spatial audio.',
  openGraph: {
    title: 'XR: Extended Reality | Urban Tech Creative',
    description: 'AR, MR, and VR expertise — from smartphone AR and Visual Positioning Systems to Meta Quest mixed reality and immersive VR storytelling.',
    url: '/xr',
  },
  alternates: { canonical: '/xr' },
};

export default function XRPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'XR', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
