import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/trailmakers.mdx';
import Page from '@/components/Page/Page';

export default function TrailmakersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Trailmakers', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
