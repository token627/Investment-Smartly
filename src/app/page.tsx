import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'TradeSmartly | Home',
  description: 'Latest insights, analysis, and news for the modern investor.',
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TradeSmartly",
    "url": "https://www.tradesmartly.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.tradesmartly.in/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
