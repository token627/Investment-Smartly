import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tradesmartly.in'),
  title: {
    default: 'TradeSmartly | Smart Investing For Everyone',
    template: '%s | TradeSmartly'
  },
  description: 'Empowering you to make smarter financial decisions with premium market insights and analysis.',
  openGraph: {
    title: 'TradeSmartly | Smart Investing For Everyone',
    description: 'Empowering you to make smarter financial decisions with premium market insights and analysis.',
    url: 'https://www.tradesmartly.in',
    siteName: 'TradeSmartly',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeSmartly | Smart Investing For Everyone',
    description: 'Empowering you to make smarter financial decisions with premium market insights and analysis.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <a
          href="https://zerodha.com/open-account?c=ZMPFEY"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="floating-action-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          Open a free Demat account
        </a>
      </body>
    </html>
  );
}
