import { Analytics } from "@vercel/analytics/next"
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import teamMembers from '../assets/teamMembers';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Alka Law Associates - Premier Tax & Corporate Law Firm | New Delhi</title>
        <meta name="title" content="Alka Law Associates - Premier Tax & Corporate Law Firm | New Delhi" />
        <meta name="description" content="M/s Alka Law Associates (ALA) is a leading partnership law firm in New Delhi specializing in Direct & Indirect Taxation, Corporate Law, Litigation, and Regulatory Compliance. Expert legal services across all Courts and Tribunals in India." />
        <meta name="keywords" content="tax lawyer Delhi, corporate law firm India, direct tax attorney, indirect tax consultant, GST lawyer Delhi, income tax litigation, business law firm, legal services New Delhi, East of Kailash law firm, partnership law firm India, solicitor services Delhi, tribunal representation India, tax compliance Delhi, mergers acquisitions lawyer, IP technology law, regulatory compliance attorney" />
        <meta name="author" content="Alka Law Associates" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkalawassociates.com/" />
        <meta property="og:title" content="Alka Law Associates - Premier Tax & Corporate Law Firm | New Delhi" />
        <meta property="og:description" content="Leading partnership law firm specializing in Direct & Indirect Taxation, Corporate Law, and Litigation. Expert legal services across all Courts and Tribunals in India." />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:site_name" content="Alka Law Associates" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alkalawassociates.com/" />
        <meta property="twitter:title" content="Alka Law Associates - Premier Tax & Corporate Law Firm | New Delhi" />
        <meta property="twitter:description" content="Leading partnership law firm specializing in Direct & Indirect Taxation, Corporate Law, and Litigation. Expert legal services across all Courts and Tribunals in India." />
        <meta property="twitter:image" content="/logo.svg" />

        {/* Business/Location Data */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.5494;77.2534" />
        <meta name="ICBM" content="28.5494, 77.2534" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://alkalawassociates.com/" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Google Analytics */}
        <GoogleAnalytics ga_id="G-9XCHGTGZ6J" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Alka Law Associates",
              "alternateName": "ALA",
              "url": "https://alkalawassociates.com",
              "logo": "https://alkalawassociates.com/logo.svg",
              "description": "Premier partnership law firm specializing in Direct and Indirect Taxation, Corporate Law, Litigation, and Regulatory Compliance with pan-India presence.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "G-60, East of Kailash",
                "addressLocality": "New Delhi",
                "postalCode": "110065",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-93543-76719",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5494,
                "longitude": 77.2534
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "India"
              },
              "legalName": "M/s Alka Law Associates",
              "foundingDate": "2000",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Direct Tax Services",
                      "description": "Expert consultation and representation in Direct Tax matters"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Indirect Tax Services",
                      "description": "GST, Customs, and Excise tax consultation and litigation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Law",
                      "description": "Corporate legal services including M&A, compliance, and governance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Litigation Services",
                      "description": "Court representation across all levels of judiciary in India"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main>
        <Analytics />

        {/* Global styles */}
        <Navbar />
        <Hero id="home" />
        <Services id="services" />
        <TeamMember id="team" teamMembers={teamMembers} />
        <Footer id="footer" />
      </main>
    </>
  );
}
