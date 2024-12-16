import React from "react";
export default function Iframe(props: any) {
  const id = props.id;

  console.log(">>>>>>>>", props)
  
  return (
    <section className="section about about--alt">
        <div className="container">
          <div className="row section__row align-items-center">

          <iframe src={props?.props?.props[0].fields?.source} width={props?.props?.props[0]?.fields?.width||"800"} height={props?.props?.props[0]?.fields?.height||"600"} ></iframe>
 
 

          </div>
        </div>
      </section>
  );
}
