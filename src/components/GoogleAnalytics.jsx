import Script from 'next/script'

const GoogleAnalytics = ({ ga_id }) => (
    <>
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga_id}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `}
        </Script>
    </>
)

export default GoogleAnalytics
