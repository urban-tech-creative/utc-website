import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/haify.mdx';

export default function HaifyPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Haify Work', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
