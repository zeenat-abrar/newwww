import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=GTM-P67KTK6Z`} />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-P67KTK6Z');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
