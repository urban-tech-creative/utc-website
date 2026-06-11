import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/contact.mdx';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Urban Tech Creative. Studios in Norwich (The Enterprise Centre, UEA) and Ipswich (Adastral Park, BT Research HQ).',
  openGraph: {
    title: 'Contact Urban Tech Creative',
    description: 'Studios in Norwich and Ipswich. Contact us to discuss your AR, VR, MR, or AI project.',
    url: '/contact',
  },
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Contact', current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  );
}
