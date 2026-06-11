import type { Metadata } from 'next';
import BreadcrumbsPage from '@/components/BreadcrumbsPage';
import Content from '@/content/about.mdx'
import Page from '@/components/Page/Page'

export const metadata: Metadata = {
  title: 'About',
  description: 'Urban Tech Creative is a collaborative creative tech studio fusing architectural practice and game development to deliver immersive storytelling across AR, MR, VR, and AI.',
  openGraph: {
    title: 'About Urban Tech Creative',
    description: 'A collaborative studio born from architecture and game development — delivering immersive, story-led XR experiences for culture, heritage, and place.',
    url: '/about',
  },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
      <BreadcrumbsPage
        items={[
          { label: 'Cube', path: '/' },
          { label: 'About', current: true },
        ]}
      >
      <Content />
    </BreadcrumbsPage>
  )
}
