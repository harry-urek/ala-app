import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* Global SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />

        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://vercel.live wss://ws-us3.pusher.com; frame-src 'self';" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Alternative Formats */}
        <link rel="alternate" type="application/rss+xml" title="Alka Law Associates Legal Updates" href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="Alka Law Associates Legal Updates" href="/atom.xml" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        {/* Robots */}
        <link rel="robots" href="/robots.txt" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        {/* No Script Fallback */}
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div>
              <h1>Alka Law Associates</h1>
              <p>This website requires JavaScript to function properly.</p>
              <p>Please enable JavaScript in your browser settings.</p>
              <p>Contact us at: +91 93543 76719 | alkalawassociates@outlook.com</p>
              <p>Address: G-60, East of Kailash, New Delhi - 110065</p>
            </div>
          </div>
        </noscript>
      </body>
    </Html>
  );
}
