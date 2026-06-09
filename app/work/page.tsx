import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Heading from '@/components/Heading';
import NavList from '@/components/Nav/NavList';
import Page from '@/components/Page/Page';
import { workProjectLinks } from './projectLinks';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Projects by Urban Tech Creative — immersive AR, MR, VR, and AI experiences for heritage, culture, placemaking, and enterprise.',
  openGraph: {
    title: 'Our Work | Urban Tech Creative',
    description: 'Case studies in AR, MR, VR, and AI — from city-wide augmented reality and mixed reality pop-ups to VR storytelling and heritage experiences.',
    url: '/work',
  },
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', current: true },
        ]}
      />
      <Page>
      <Heading level={1}>Our Work</Heading>
      <div className="mt-6">
        <NavList links={workProjectLinks} size="desktop" />
      </div>
    </Page>
    </>
  );
}
