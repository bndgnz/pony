import Link from "next/link";


 
const Social = (props ) => {

  

  return (
    <div >
      {props.items.map(([itm, url], i) => (
        <Link href={url} key={i}> 
          <i className={`fa-brands ${itm.faviconClasses}`}></i>
        </Link>
      ))}
    </div>
  );
};

export default Social;
