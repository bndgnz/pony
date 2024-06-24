import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import NavBarBanner from "@/components/navBar/NavBarBanner";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Components from "@/src/components/componentSorter"
import Content from "@/src/components/common/content"

const Layout = (props) => {
 




  return (
    <>
      {/* Preloader */}
      <NavBar />
      
     
      <NavBarBanner props={props} />

      <Content props={props} />

      <Components props={props.components} /> 

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
