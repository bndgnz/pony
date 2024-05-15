import BigBanner from "@/components/common/BigBanner";
import Shop from "@/components/common/Shop";
import Team from "@/components/common/Team";
import TestimonialOne from "@/components/common/TestimonialOne";
import Footer from "@/components/footer/Footer";
import About from "@/components/home/About";
import Event from "@/components/home/Event";
import Facility from "@/components/home/Facility";
import JoinClub from "@/components/home/JoinClub";
import OurClub from "@/components/home/OurClub";
import PricingPlan from "@/components/home/PricingPlan";
import Training from "@/components/home/Training";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />
 
      <NavBar cls="" />

 
 
      <ScrollToTop />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
