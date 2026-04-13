import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/haify.mdx';
import Page from '@/components/Page/Page';

export default function HaifyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Haify Work', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
