import React from "react";

import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import { useEffect } from "react";
import "../public/vendor/font-awesome/css/all.min.css";
import "../public/vendor/glyphter/css/golftio.css";
// slick css
import "slick-carousel/slick/slick.css";

//main css
import "@/styles/globals.scss";
import { config } from "dotenv";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const dataEnvironment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
 

function MyApp({ Component, pageProps, data }) {
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
        })(window,document,'script','dataLayer','GTM-TN7WZMGM');
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
