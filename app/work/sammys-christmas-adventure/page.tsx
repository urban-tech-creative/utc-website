import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/work/sammys-christmas-adventure.mdx';

export const metadata: Metadata = {
  title: "Sammy's Christmas Adventure",
  description: "Sammy's Christmas Adventure — a large-scale Christmas AR experience at Ipswich Cornhill, created with Ipswich Borough Council and Ipswich BID, featuring location-based AR character Sammy.",
  openGraph: {
    title: "Sammy's Christmas Adventure | Urban Tech Creative",
    description: 'Location-based Christmas AR experience at Ipswich Cornhill — guiding families through a festive adventure with interactive AR character Sammy.',
    url: '/work/sammys-christmas-adventure',
    images: [{ url: '/images/work/sammys-christmas-adventure-01.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: '/work/sammys-christmas-adventure' },
};

export default function SammysXmasAdventurePage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: "Sammy's Christmas Adventure", current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  );
}
