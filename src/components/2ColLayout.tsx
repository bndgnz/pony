import React from "react";
import Iframe from "@/src/components/iframe"

 


export default function TwoColumnLayout (props: any) {
  const id = props.id;
  

  console.log(">>>>>>>>", props)
  
  return (
    <section className="section about about--alt">
        <div className="container">
          <div className="row section__row align-items-center">
            <div className="col-lg-6 col-xl-6 section__col">

            <div className="banner--inner__content">
         {id}
                </div>
              <div className="section__content">
                <div className="about__section-inner">
     
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1 section__col">
              <div className="content-image" data-wow-duration="0.4s">
          
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
