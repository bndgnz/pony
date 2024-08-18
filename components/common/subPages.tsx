import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import Link from "next/link";
import Richtext from "@/src/utils/helpers/richTextHelper";

 

const SubPages = (props: any) => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 4,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (props.props.relatedItems && props.props.showRelatedItems) {
    return (
      <section className="section training training--secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section__header wow fadeInUp"
                data-wow-duration="0.4s"
              >
                <h5 className="section__header-sub-title">
                  {props.props.title}
                </h5>
                <h2 className="section__header-title">
                  {props.props.description}
                </h2>
                <Richtext content={props.props.content} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-12">
              <Slider
                {...settings}
                className="training__slider--secondary"
                ref={sliderRef}
              >
                {props.props.relatedItems.map((itm, idx) => (
                  <div className="training__slider-single" key={idx}>
                    <div className="training__slider-single__thumb-small">
                      <div
                        dangerouslySetInnerHTML={{ __html: itm.fields?.icon }}
                      />
                    </div>
                    <div className="training__slider-single__content">
                      <h5>
                        <Link href="/training-details">{itm.fields?.title}</Link>
                      </h5>
                      <p className="secondary-text">{itm.fields?.description}</p>
                      <Link
                        href={"./" + itm.fields?.slug}
                        className="cmn-button cmn-button--secondary"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Slider Navigation */}
              <SliderNavigation sliderRef={sliderRef} />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    null;
  }
};

export default SubPages;
