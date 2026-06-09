import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/contact.mdx';
import Page from '@/components/Page/Page';

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
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Contact', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
