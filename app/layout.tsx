import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://990challenge.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: '990 Challenge',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description: 'Build lasting habits with the 990 Challenge app. Track your 90-day challenges, monitor daily progress, and achieve your goals with our powerful iOS habit tracker.',
    author: {
      '@type': 'Organization',
      name: 'NavHome Realty LLC',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NavHome Realty LLC',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NavHome Realty LLC',
    url: 'https://990challenge.com',
    logo: 'https://990challenge.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@990challenge.com',
      contactType: 'Customer Support',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
