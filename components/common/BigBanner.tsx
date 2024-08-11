import Link from "next/link";
import UrlBuilder from "@/src/utils/helpers/linkManager";
import { useQuery, gql } from "@apollo/client";

const BigBanner = (props: any) => {
  const id = props.id;

  const QUERY = gql`
    query GetBanner($id: String!) {
      banner(id: $id) {
        title
        background
        subTitle
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

  return (
    <section
      className="banner--secondary"
      style={{
        backgroundImage: `url(${data.banner.background[0].original_secure_url})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="banner__content-sub-title">
                {data.banner.subTitle}
              </h5>
              <h1 className="banner__content-title">{data.banner.title}</h1>
              <p className="primary-text banner__content-text"></p>
              <div className="banner__content-cta">
                <Link
                  href={data.banner.link.pageLink.slug}
                  className="cmn-button"
                  title={data.banner.link?.pageLink.title}
                >
                  {data.banner.link.pageLink.title}
                </Link>
                <Link
                  href={data.banner.secondaryLink.pageLink.slug}
                  className="cmn-button cmn-button--secondary"
                  title={data.banner.secondaryLink.pageLink.title}
                >
                  {data.banner.secondaryLink.pageLink.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
