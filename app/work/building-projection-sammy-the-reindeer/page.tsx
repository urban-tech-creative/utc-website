import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/building-projection-sammy-the-reindeer.mdx';
import Page from '@/components/Page/Page';

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
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Building Projection Sammy the Reindeer', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
