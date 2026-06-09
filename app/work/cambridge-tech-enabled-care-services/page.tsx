import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/cambridge-tech-enabled-care-services.mdx';
import Page from '@/components/Page/Page';

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
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Cambridge Tech Enabled Care Services', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
