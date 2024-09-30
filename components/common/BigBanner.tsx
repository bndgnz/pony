import Link from "next/link";
import UrlBuilder from "@/src/utils/helpers/linkManager";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

const BigBanner = (props: any) => {
  const id = props.id;

  const QUERY = gql`
    query GetBanner($id: String!) {
      banner(id: $id) {
        title
        background
        subTitle
        showTitle
        showSubTitle
        logo
        link {
          ...NavLink
        }
        secondaryLink {
          ...NavLink
        }
      }
    }
    fragment NavLink on NavigationLink {
      title
      pageLink {
        __typename
        ...PageLink
      }
    }
    fragment PageLink on Page {
      title
      slug
    }
  `;
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  });
  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div></div>;
  }

  console.log("DATA:",data.banner.showSubTitle)

  return (
    <section
      className="banner--secondary"
      style={{
        backgroundImage: `url(${data?.banner?.background[0]?.original_secure_url})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-12 big-banner-logo">
         
        
          <Image
            src={data?.banner?.logo[0]?.secure_url}
            width={data.banner.logo[0].width}
            height={data.banner.logo[0].height}
            alt={data.banner.logo[0].alt}
            className="big-banner-logo"
          /> 

          </div>
          <div className="col-md-7 col-lg-7 col-sm-12 big-banner-text">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
            { data.banner.showSubTitle ? (<h5 className="banner__content-sub-title">
                {data.banner.subTitle}
              </h5>):''}      { data.banner.showTitle ?        (<h1 className="banner__content-title">{data.banner.title}</h1>):'' }
           
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
