import Head from "next/head";
function Seo(props: any) {
  return (<>
    <div>
      <Head>
 
        <title key="title">{props.title} | Waiheke Island Pony Club</title>
        <meta
          key="og:description"
          property="og:description"
          content={props.description}
        />
 
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:locale" property="og:locale" content="en_IE" />

         
      </Head>
    </div>
    </>
  );
}

export default Seo;
