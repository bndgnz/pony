import Footer from "./footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar */}
 
 

      {children}

      {/* Footer */}
      <Footer />
    

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
