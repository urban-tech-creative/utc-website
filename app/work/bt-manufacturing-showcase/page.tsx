import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/bt-manufacturing-showcase.mdx';

export const metadata: Metadata = {
  title: 'BT Manufacturing Showcase',
  description: "AR experience for BT's R&D HQ at Adastral Park — interactive storytelling across raw materials, manufacturing processes, and recycling using 3D models and video content.",
  openGraph: {
    title: 'BT Manufacturing Showcase | Urban Tech Creative',
    description: "Augmented reality experience telling the stories of manufacturing materials and processes at BT's Adastral Park R&D headquarters.",
    url: '/work/bt-manufacturing-showcase',
    images: [{ url: '/images/work/bt-manufacturing-showcase-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/bt-manufacturing-showcase' },
};

export default function BTManufacturingShowcasePage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'BT Manufacturing Showcase', current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  );
}
