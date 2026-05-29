import type { Metadata } from 'next';
import { inter, mono } from '@/lib/fonts';
import { site } from '@/data/site';
import { Background } from '@/components/background';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: 'Senior Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Catalina Systems' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Alberta' },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Visvesvaraya Technological University',
    },
  ],
  sameAs: [
    site.social.github,
    site.social.linkedin,
    site.social.medium,
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Background />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
