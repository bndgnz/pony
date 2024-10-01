import React from "react";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "../public/vendor/font-awesome/css/all.min.css";
import "../public/vendor/glyphter/css/golftio.css";
// slick css
import "slick-carousel/slick/slick.css";
import Google from "@/src/utils/helpers/google";
//main css
import "@/styles/globals.scss";

import ReactGA from "react-ga4";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const dataEnvironment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
 

function MyApp({ Component, pageProps, data }: any) {
  const client = new ApolloClient({
    uri:
      "https://graphql.contentful.com/content/v1/spaces/dgdm78o9p3tb"+
      "?access_token=9S2SpOEemYLtYlWCBeIRtKxFEmaUcNWG484otyL8wNU",
    cache: new InMemoryCache(),
  });
  return (
   

<>
<Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-K6H04V4F05');
      `}
    </Script>
 
    
      <ApolloProvider client={client}>
     
          <Component {...pageProps} />
 
        {/* Preloader */}

        {/* Go Top Button */}
      </ApolloProvider>
    </>
  );
}

export default MyApp;
