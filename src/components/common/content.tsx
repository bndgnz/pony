import Richtext from "@/src/utils/helpers/richTextHelper";
import Image from "next/image";
import Link from "next/link";
import about_thumb from "/public/images/about-thumb.png";


function Content(props:any) {
  console.log(props)
   if (props.props.showContent ===true) {

    return (
        <section className="section about about--alt">
          <div className="container">
            <div className="row section__row align-items-center">
              <div className="col-lg-6 col-xl-6 section__col">
                <div className="section__content">
                  <h5 className="section__content-sub-title">About us</h5>
              
                  {props.props.description}
                  <div className="about__section-inner">
                    
                  <Richtext
                  content={
                    props.props.content
                  }
                />

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

    else{null}

}

export default Content;