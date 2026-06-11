import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/building-projection-sammy-the-reindeer.mdx';

export const metadata: Metadata = {
  title: 'Building Projection: Sammy the Reindeer',
  description: 'Large-scale building projection featuring Sammy the Reindeer — a festive public realm experience by Urban Tech Creative.',
  openGraph: {
    title: 'Building Projection: Sammy the Reindeer | Urban Tech Creative',
    description: 'Festive large-scale building projection bringing Sammy the Reindeer to life in the public realm.',
    url: '/work/building-projection-sammy-the-reindeer',
  },
  alternates: { canonical: '/work/building-projection-sammy-the-reindeer' },
};

export default function BuildingProjectionSammyTheReindeerPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Building Projection Sammy the Reindeer', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
