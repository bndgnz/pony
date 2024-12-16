import Richtext from "@/src/utils/helpers/richTextHelper";
import Image from "next/image";
import Link from "next/link";

function Content(props: any) {

  if (props.props.showContent === true) {
    function ContentImage() {
      if (props.props.contentImage) {
        return (
          <Image
            src={props.props?.contentImage[0]?.secure_url}
            width={props.props?.contentImage[0]?.width}
            height={props.props?.contentImage[0]?.height}
            alt={props.props?.contentImage[0]?.alt}
          />
        );
      } else {
        null;
      }
    }

    return (
      <section className="section about about--alt">
        <div className="container">
          <div className="row section__row align-items-center">
            <div className="col-lg-6 col-xl-6 section__col">

            <div className="banner--inner__content">
                  <h1 className="content-title">{props.props.title}</h1>
                </div>
              <div className="section__content">
                <div className="about__section-inner">
                  <Richtext content={props.props.content} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1 section__col">
              <div className="content-image" data-wow-duration="0.4s">
                <ContentImage />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    null;
  }
}

export default Content;
