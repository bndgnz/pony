import BigBanner from "@/components/common/BigBanner";
import MessageListing from "@/components/common/Messages";


function ComponentSorter (props:any) {

if (props.props) {
    const listOfItems =
    props.props.map(
      (component:any, idx:any) => {
        const id = component.sys.contentType.sys.id;
      
       switch (id) {
        case "banner":
          return <BigBanner id={component.sys.id} key={idx} />;

          case "messageListing":
          return <MessageListing   />;
         default:
          return null;
      }
        
      }
    );
   
return (<>{listOfItems}</>) ;

}

}

export default ComponentSorter;