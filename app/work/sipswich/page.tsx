import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/sipswich.mdx';
import Page from '@/components/Page/Page';

export default function SipswichPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: "Sip'Swich", current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
