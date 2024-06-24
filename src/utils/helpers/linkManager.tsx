
function linkBuilder (props: any) {
let slug;
let path;
let url;
let target; 
 
 

if (props.pageLink !== null) {url = props.pageLink.slug} else {url=""}
 
    return  url   ;
  };
  
  export default linkBuilder;