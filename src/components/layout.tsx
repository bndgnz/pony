import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import NavBarBanner from "@/components/navBar/NavBarBanner";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Components from "@/src/components/componentSorter"
import Content from "@/src/components/common/content"
import Subpages from "@/components/common/subPages"

const Layout = (props:any) => {

 

  return (
    <>
      {/* Preloader */}
      <NavBar />
      <NavBarBanner props={props} />
      <Components props={props.components} />
      <Subpages props={props} />
      <Content props={props} />
      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
