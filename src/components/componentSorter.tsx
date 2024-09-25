import BigBanner from "@/components/common/BigBanner";
import MessageListing from "@/components/common/Messages";
import Accordion from"@/src/components/Accordion";
import Facebook from "@/src/components/facebook"

function ComponentSorter (props:any) {

  console.log(props)

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