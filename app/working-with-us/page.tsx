import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/working-with-us.mdx';

export const metadata: Metadata = {
  title: 'Working With Us',
  description: 'How we work — from early discovery through to development, deployment, and ongoing support. A collaborative process designed around your organisation, audience, and goals.',
  openGraph: {
    title: 'Working With Us | Urban Tech Creative',
    description: 'Our project process — discovery, feasibility, concept design, development, and deployment. Transparent, collaborative, and tailored to your goals.',
    url: '/working-with-us',
  },
  alternates: { canonical: '/working-with-us' },
};

export default function WorkingWithUsPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Working With Us', current: true },
        ]}
      >
        <Content />
    </BreadcrumbsPage>
  );
}
