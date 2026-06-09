import SiteHeader from '@/components/SiteHeader';
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Recursive } from "next/font/google";
import type { Metadata } from "next";
import clsx from 'clsx';

const recursive = Recursive({
  variable: "--font-recursive",
  axes: ['CASL', 'CRSV', 'MONO', 'slnt'],
  subsets: ["latin"],
});

const SITE_URL = 'https://www.urbantechcreative.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Urban Tech Creative',
    template: '%s | Urban Tech Creative',
  },
  description: 'A creative studio specialising in immersive technology — Augmented Reality, Mixed Reality, Virtual Reality, and AI-enhanced storytelling for culture, heritage, and place.',
  keywords: ['augmented reality', 'mixed reality', 'virtual reality', 'XR', 'immersive technology', 'AR', 'VR', 'MR', 'Unity', 'Meta Quest', 'VPS', 'creative studio', 'heritage', 'placemaking'],
  authors: [{ name: 'Urban Tech Creative', url: SITE_URL }],
  creator: 'Urban Tech Creative',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'Urban Tech Creative',
    title: 'Urban Tech Creative',
    description: 'A creative studio specialising in immersive technology — Augmented Reality, Mixed Reality, Virtual Reality, and AI-enhanced storytelling for culture, heritage, and place.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Urban Tech Creative' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Tech Creative',
    description: 'A creative studio specialising in immersive technology — AR, MR, VR, and AI-enhanced storytelling for culture, heritage, and place.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Urban Tech Creative',
  url: SITE_URL,
  logo: `${SITE_URL}/cube/cube-icon.png`,
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+441603975020', areaServed: 'Norwich, UK', contactType: 'customer service' },
    { '@type': 'ContactPoint', telephone: '+441473922035', areaServed: 'Ipswich, UK', contactType: 'customer service' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/urban-tech-creative',
    'https://www.instagram.com/urbantechcreative',
    'https://www.youtube.com/@urbantechcreative',
  ],
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>
) {

  const bodyStyles = clsx(
    'min-h-[100dvh] flex flex-col',
    'pt-22',
    `${recursive.variable} antialiased`,
  );

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={bodyStyles}
      >
        <SiteHeader />
        <main className='px-0 pt-10 sm:p-10 w-full max-w-4xl mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
