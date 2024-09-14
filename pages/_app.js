import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return <main>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-EWKP48CM6E" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EWKP48CM6E');
        `}
    </Script>
    <Component {...pageProps} />
  </main>;
}
