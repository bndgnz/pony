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
import { config } from "dotenv";

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
      "https://graphql.contentful.com/content/v1/spaces/dgdm78o9p3tb" +
      "?access_token=9S2SpOEemYLtYlWCBeIRtKxFEmaUcNWG484otyL8wNU",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K6H04V4F05"
      ></script>
      {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K6H04V4F05');
      `}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K6H04V4F05"
      ></script>

      <ApolloProvider client={client}>
        <Component {...pageProps} />

        {/* Preloader */}

        {/* Go Top Button */}
      </ApolloProvider>
    </>
  );
}

export default MyApp;
