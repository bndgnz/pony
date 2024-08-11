
function linkBuilder (props: any) {
 
let url: any;
 
 
 

if (props.pageLink !== null) {url = props.pageLink.slug} else {url=""}
 
    return  url   ;
  };
  
  export default linkBuilder;