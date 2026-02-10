import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Footer from '@/components/sections/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Social Entrepreneurship: The Framework for Actionable Humanity',
    template: '%s | Actionable Humanity'
  },
  description: 'A comprehensive guide to building sustainable, high-impact businesses. Learn the 4-pillar framework used by universities and incubators worldwide. Get the E-book now.',
  keywords: ['Business', 'Social Enterprise', 'Entrepreneurship', 'Impact Investing', 'Nonprofit', 'Sustainability', 'Startup', 'Actionable Humanity', 'Rasheda L. Weaver'],
  authors: [{ name: 'Rasheda L. Weaver, PhD' }],
  creator: 'Rasheda L. Weaver, PhD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://social-entrepreneurship-ebook.com',
    title: 'Build a Business That Matters - Social Entrepreneurship E-book',
    description: 'Stop guessing and start building. The scientific framework for launching a high-growth social enterprise.',
    siteName: 'Actionable Humanity',
    images: [
      {
        url: '/images/book-mockup.webp',
        width: 1200,
        height: 630,
        alt: 'Social Entrepreneurship E-book Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Entrepreneurship: The Framework for Actionable Humanity',
    description: 'The blueprint for building profit-with-purpose businesses.',
    creator: '@rashedaweaver',
    images: ['/images/book-mockup.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-surface text-secondary selection:bg-accent/20 selection:text-primary">
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
