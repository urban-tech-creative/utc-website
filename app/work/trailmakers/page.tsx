import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/trailmakers.mdx';

export const metadata: Metadata = {
  title: 'Trailmakers',
  description: 'Trailmakers — co-creating heritage through AI. An educational tool enabling students and teachers to research historical figures and create digital heritage experiences through guided prompts and image generation.',
  openGraph: {
    title: 'Trailmakers | Urban Tech Creative',
    description: 'AI-powered heritage co-creation for education — students research historical figures and build digital interpretations through guided AI storytelling workflows.',
    url: '/work/trailmakers',
  },
  alternates: { canonical: '/work/trailmakers' },
};

export default function TrailmakersPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Trailmakers', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
