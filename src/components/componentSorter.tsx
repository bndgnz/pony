import BigBanner from "@/components/common/BigBanner";
import MessageListing from "@/components/common/Messages";
import Accordion from"@/src/components/Accordion";
import Facebook from "@/src/components/facebook"
import Iframe from "@/src/components/iframe"


function ComponentSorter (props:any) {

if (props.props) {
    const listOfItems =
    props.props.map(
      (component:any, idx:any) => {
        const id = component.sys.contentType.sys.id;
      
       switch (id) {
        case "banner":
          return <BigBanner id={component.sys.id} key={idx} />;

          case "accordion":
            return <Accordion id={component.sys.id} key={idx} />;

            case "facebook":
            return <Facebook />;
            case "iframe":
              return <Iframe props={props} />;

      

          case "messageListing":
          return <MessageListing   key={idx}  />;
         default:
          return null;
      }
        
      }
    );
   
return (<>{listOfItems}</>) ;

}

}

export default ComponentSorter;