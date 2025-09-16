// SEO utility functions and data for Alka Law Associates

export const seoData = {
    siteName: 'Alka Law Associates',
    siteUrl: 'https://alkalawassociates.com',
    defaultTitle: 'Alka Law Associates - Premier Tax & Corporate Law Firm | New Delhi',
    defaultDescription: 'M/s Alka Law Associates (ALA) is a leading partnership law firm in New Delhi specializing in Direct & Indirect Taxation, Corporate Law, Litigation, and Regulatory Compliance. Expert legal services across all Courts and Tribunals in India.',
    defaultKeywords: [
        'tax lawyer Delhi',
        'corporate law firm India',
        'direct tax attorney',
        'indirect tax consultant',
        'GST lawyer Delhi',
        'income tax litigation',
        'business law firm',
        'legal services New Delhi',
        'East of Kailash law firm',
        'partnership law firm India',
        'solicitor services Delhi',
        'tribunal representation India',
        'tax compliance Delhi',
        'mergers acquisitions lawyer',
        'IP technology law',
        'regulatory compliance attorney'
    ],
    businessInfo: {
        name: 'M/s Alka Law Associates',
        alternateName: 'ALA',
        address: {
            streetAddress: 'G-60, East of Kailash',
            addressLocality: 'New Delhi',
            postalCode: '110065',
            addressCountry: 'IN'
        },
        phone: '+91-93543-76719',
        alternatePhone: '+91-83406-39137',
        email: 'alkalawassociates@outlook.com',
        coordinates: {
            latitude: 28.5494,
            longitude: 77.2534
        },
        hours: 'Mo-Fr 09:00-18:00',
        foundingDate: '2000',
        priceRange: '$$'
    },

};

export const services = [
    {
        name: 'Direct Tax Services',
        description: 'Expert consultation and representation in Direct Tax matters including Income Tax, Corporate Tax, and Tax Planning',
        keywords: ['direct tax', 'income tax', 'corporate tax', 'tax planning', 'tax consultation']
    },
    {
        name: 'Indirect Tax Services',
        description: 'GST, Customs, and Excise tax consultation and litigation services',
        keywords: ['indirect tax', 'GST', 'customs', 'excise', 'VAT', 'service tax']
    },
    {
        name: 'Corporate Law',
        description: 'Corporate legal services including M&A, compliance, governance, and business structuring',
        keywords: ['corporate law', 'mergers acquisitions', 'corporate compliance', 'business law', 'corporate governance']
    },
    {
        name: 'Litigation Services',
        description: 'Court representation across all levels of judiciary in India including Supreme Court, High Courts, and Tribunals',
        keywords: ['litigation', 'court representation', 'legal disputes', 'tribunal cases', 'appellate matters']
    },
    {
        name: 'IP & Technology Law',
        description: 'Intellectual Property protection, technology agreements, and digital compliance',
        keywords: ['intellectual property', 'IP law', 'technology law', 'patent', 'trademark', 'copyright']
    },
    {
        name: 'Regulatory Compliance',
        description: 'Comprehensive regulatory compliance services across various industries and sectors',
        keywords: ['regulatory compliance', 'legal compliance', 'industry regulations', 'statutory compliance']
    }
];

export const generateStructuredData = (pageType = 'homepage', additionalData = {}) => {
    const baseStructuredData = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": seoData.businessInfo.name,
        "alternateName": seoData.businessInfo.alternateName,
        "url": seoData.siteUrl,
        "logo": `${seoData.siteUrl}/logo.svg`,
        "description": seoData.defaultDescription,
        "address": {
            "@type": "PostalAddress",
            ...seoData.businessInfo.address
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": seoData.businessInfo.phone,
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            },
            {
                "@type": "ContactPoint",
                "telephone": seoData.businessInfo.alternatePhone,
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": seoData.businessInfo.coordinates.latitude,
            "longitude": seoData.businessInfo.coordinates.longitude
        },
        "openingHours": seoData.businessInfo.hours,
        "priceRange": seoData.businessInfo.priceRange,
        "serviceArea": {
            "@type": "Country",
            "name": "India"
        },
        "legalName": seoData.businessInfo.name,
        "foundingDate": seoData.businessInfo.foundingDate,
        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Legal Services",
            "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.name,
                    "description": service.description
                }
            }))
        },
        "sameAs": Object.values(seoData.socialMedia),
        ...additionalData
    };

    return baseStructuredData;
};

export const generateMetaTags = (pageData = {}) => {
    const title = pageData.title || seoData.defaultTitle;
    const description = pageData.description || seoData.defaultDescription;
    const keywords = pageData.keywords ?
        [...seoData.defaultKeywords, ...pageData.keywords] :
        seoData.defaultKeywords;
    const url = pageData.url || seoData.siteUrl;
    const image = pageData.image || `${seoData.siteUrl}/logo.svg`;

    return {
        title,
        description,
        keywords: keywords.join(', '),
        canonical: url,
        openGraph: {
            title,
            description,
            url,
            image,
            siteName: seoData.siteName,
            type: 'website',
            locale: 'en_IN'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            image,
            url
        }
    };
};
