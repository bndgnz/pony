import Image from "next/image";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import UrlBuilder from "@/src/utils/helpers/linkManager";
import Richtext from "@/src/utils/helpers/richTextHelper";

function Footer() {
  const MENU = gql`
    query {
      siteConfigurationCollection(
        where: { title: "Default Site Configuration" }
        limit: 1
      ) {
        items {
          title
          footer {
            title
            footerLogo
            introduction
            address {
              json
            }
            rightColumn {
              json
            }
            copyright
            quickLinkMenu {
              title
              ...FooterLinksCollection
            }
            footerLinksMenu {
              title
              ...FooterLinksCollection
            }
            socialLinksCollection {
              items {
                title
                linkUrl
                faviconClasses
              }
            }
          }
        }
      }
    }

    fragment FooterLinksCollection on Menu {
      title

      linksCollection {
        items {
          ...FooterNavLink

          title

          subLinksCollection(limit: 10) {
            items {
              ...FooterNavLink

              __typename
            }
          }
        }
      }
    }

    fragment FooterNavLink on NavigationLink {
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

  const { data, loading, error } = useQuery(MENU);
  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div></div>;
  }

 

  const quickLinks =
    data.siteConfigurationCollection.items[0].footer.quickLinkMenu.linksCollection.items.map(
      (link, idx) => {
        const url = UrlBuilder(link);

        return (
          <li key={idx}>
            <Link href={url} title={link.title}>{link.title}</Link>
          </li>
        );
      }
    );

  const socialLinks =
    data.siteConfigurationCollection.items[0].footer.socialLinksCollection.items.map(
      (link, idx) => {
        return (
          <a href={link.linkUrl} target="_blank" key={idx} title={"Visit Waiheke Pony Club on "+link.title} >
            <i className={"fa-brands" + " " + link.faviconClasses}></i>
          </a>
        );
      }
    );

  const bottomLinks =
    data.siteConfigurationCollection.items[0].footer.footerLinksMenu.linksCollection.items.map(
      (link, idx) => {
        const url = UrlBuilder(link);

        return (
          <li key={idx}>
            <Link href={url} title={link.title}>{link.title}</Link>
          </li>
        );
      }
    );

  return (
    <footer className="footer">
      <div className="container">
        <div className="row section__row">
          <div className="col-md-6 col-lg-3 col-xl-3 section__col">
            <div className="footer__single">
              <Link href="/" className="footer__single-logo">
                <img 
                  src={
                    data.siteConfigurationCollection.items[0].footer
                      .footerLogo[0].original_secure_url
                  }
                  alt="Logo"
                  width={
                    data.siteConfigurationCollection.items[0].footer
                      .footerLogo[0].width
                  }
                  height={
                    data.siteConfigurationCollection.items[0].footer
                      .footerLogo[0].height
                  }
                />
              </Link>
              <div className="footer__single-content">
                <div className="social justify-content-start">{socialLinks}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 section__col  column-1">
            <div className="footer__single">
              <div className="footer__single-content">
                <h5>
                  {
                    data.siteConfigurationCollection.items[0].footer
                      .quickLinkMenu.title
                  }
                </h5>

                <ul>{quickLinks}</ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 section__col">
            <div className="footer__single">
              <div className="footer__single-content">
                <div className="footer__single-content__group">
                  <Richtext
                    content={
                      data.siteConfigurationCollection.items[0].footer.address
                        .json
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xl-2 section__col offset">
            <div className="footer__single">
              <div className="footer__single-content">
                <Richtext
                  content={
                    data.siteConfigurationCollection.items[0].footer.rightColumn
                      .json
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <p>
                 {data.siteConfigurationCollection.items[0].footer.copyright}
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul>{bottomLinks}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
