import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo_light from "/public/images/logo-light.png";
import Logo from "/public/images/logo.png";
import { useQuery, gql } from "@apollo/client";
import UrlBuilder from "@/src/utils/helpers/linkManager";

const MENU = gql`
  query {
    siteConfigurationCollection(
      where: { title: "Default Site Configuration" }
      limit: 1
    ) {
      items {
        title

        header {
          title
          headerLogo
          buttonText
          buttonLink
          headerMenu {
            ...LinksCollection
            title
          }
        }
      }
    }
  }

  fragment LinksCollection on Menu {
    title
    linksCollection {
      items {
        ...NavLink
        title
        subLinksCollection(limit: 10) {
          items {
            ...NavLink
            __typename
          }
        }
      }
    }
  }

  fragment NavLink on NavigationLink {
    title
    pageLink {
      __typename
      ...PageLink
      ...EventLink
      ...FacilityLink
      ...TrainingLink
    }
  }
  fragment PageLink on Page {
    title
    slug
    
  }
  fragment EventLink on Event {
    title
    slug
     
  }
  fragment FacilityLink on Facility {
    title
    slug
   
  }
  fragment TrainingLink on Training {
    title
    slug
  
  }
`;
const NavBar = ({ cls = "header--secondary" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleDropdown = (id:any) => {
    if (dropdownId == id) {
      setDropdownId("");
    } else {
      setSubDropdown("");
      setDropdownId(id);
    }
  };

  const handleSubDropdown = (id:any) => {
    if (subDropdown == id) {
      setSubDropdown("");
    } else {
      setSubDropdown(id);
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const { data, loading, error } = useQuery(MENU);
  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div></div>;
  }

  const listOfItems =
    data.siteConfigurationCollection.items[0].header.headerMenu.linksCollection.items.map(
      (link:any, idx:any) => {
        const id = link.title;
        const url = UrlBuilder(link);

        return (
          <li className="nav__menu-item nav__menu-item--dropdown" key={idx}>
            <Link
              onClick={() => handleDropdown(id)}
              href={url}
              className={`nav__menu-link nav__menu-link--dropdown ${"nav__menu-link--dropdown-active"}`}
              title={link.title}
            >
              {link.title}
            </Link>
            <ul key={idx}
              className={`nav__dropdown ${
                dropdownId === "nav__dropdown-active"
              }`}
            >
              {link.subLinksCollection.items.map(
                (link:any, sbu_dropdown:any, idx2:any) => {
                  const suburl = UrlBuilder(link);
                  return sbu_dropdown ? null : (
                    <li key={idx2}>
                      <Link
                        className="nav__dropdown-item hide-nav"
                        href={suburl}
                        title={link.title}
                        onClick={handleActive}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </li>
        );
      }
    );
  return (
    <header className={`header ${cls} ${windowHeight > 50 && "header-active"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/">
                    <img
                      src={
                        data.siteConfigurationCollection.items[0].header
                          .headerLogo[0].original_secure_url
                      }
                      width={
                        data.siteConfigurationCollection.items[0].header
                          .headerLogo[0].width
                      }
                      height={
                        data.siteConfigurationCollection.items[0].header
                          .headerLogo[0].height
                      }
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className={`nav__menu ${active && "nav__menu-active"}`}>
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/">
                      <img
                        src={
                          data.siteConfigurationCollection.items[0].header
                            .headerLogo[0].original_secure_url
                        }
                        width={
                          data.siteConfigurationCollection.items[0].header
                            .headerLogo[0].width
                        }
                        height={
                          data.siteConfigurationCollection.items[0].header
                            .headerLogo[0].height
                        }
                        alt="Logo"
                      />
                    </Link>
                    <button
                      className="nav__menu-close bg-transparent"
                      onClick={() => setActive(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <ul className="nav__menu-items">
                    {listOfItems}

                    <li className="nav__menu-item d-block d-md-none">
                      <Link
                        href="/sign-in"
                        className="cmn-button cmn-button--secondary"
                      >
                        Sign In
                      </Link>
                      <Link href="/sign-up" className="cmn-button">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  <div className="social">
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-square-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="nav__uncollapsed">
                  
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                    <Link
                      href="/sign-in"
                      className="cmn-button cmn-button--secondary"
                    >
                      Sign In
                    </Link>
                    <Link href="/sign-up" className="cmn-button">
                      Sign Up
                    </Link>
                  </div>
                  <button
                    className="nav__bar d-block d-xl-none"
                    onClick={() => setActive(!active)}
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className={`backdrop ${active && "backdrop-active"}`}></div>
    </header>
  );
};

export default NavBar;
