import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/cambridge-tech-enabled-care-services.mdx';
import Page from '@/components/Page/Page';

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
