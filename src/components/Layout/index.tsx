import Footer from "./footer";
import Header from "./header";
import { useQuery, gql } from "@apollo/client";
 
import IntroductionAndContent from "@/src/components/Layout/components/introAndContent";

const MENU = gql`
  query {
    menuCollection(where: { title: "Top" }, limit: 1) {
      items {
        title
        logo  
  }
  
    }
  }
`;

function Layout(props: any) { 

  return (
    <>
   
   



      
    </>
  );
}

export default Layout;
