import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/cambridge-tech-enabled-care-services.mdx';

export const metadata: Metadata = {
  title: 'Cambridge Tech Enabled Care Services',
  description: 'Immersive technology for health and care — a VR and interactive experience exploring tech-enabled care services for the Cambridge region.',
  openGraph: {
    title: 'Cambridge Tech Enabled Care Services | Urban Tech Creative',
    description: 'VR and immersive technology applied to health and care, exploring the future of tech-enabled care services.',
    url: '/work/cambridge-tech-enabled-care-services',
  },
  alternates: { canonical: '/work/cambridge-tech-enabled-care-services' },
};

export default function CambridgeTECPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Cambridge Tech Enabled Care Services', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
