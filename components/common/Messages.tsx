import facilityData from "@/data/facilityData";
import Image from "next/image";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import Richtext from "@/src/utils/helpers/richTextHelper";

const MessageCollection = () => {
  const MESSAGES = gql`
    query GetShows {
      messageCollection(order: sys_publishedAt_DESC) {
        items {
          title
          image
          message {
            json
          }
          page {
            slug
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(MESSAGES);
  if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div></div>;
  }

  const messageCollection = data.messageCollection.items.map((itm: any) => {
    function MessageLink() {
      if (itm.page) {
        return (
          <Link
            href={"/" + itm?.page.slug}
            className="facility--main__card-content__cta"
          >
            {" "}
            View more <i className="golftio-long-right-arrow"></i>
          </Link>
        );
      } else {
        <p> </p>;
      }
    }

    return (
      <div
        key={itm.id}
        className="col-sm-12 col-md-4 col-lg-3 col-xxl-3 section__col"
      >
        <div className="facility--main__card">
          <div className="facility--main__card-thumb">
            <Link href="#">
              <Image
                src={itm.image[0].secure_url}
                alt=""
                height={itm.image[0].height}
                width={itm.image[0].height}
              />
            </Link>
          </div>
          <div className="facility--main__card-content">
            <h6>{itm?.title}</h6>
            <p className="secondary-text">
              {" "}
              <Richtext content={itm.message.json} />
            </p>

            <MessageLink />
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      className="section facility--main wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row section__row justify-content-center">
          <div>
            {" "}
            <h3>Latest Messages</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 justify-content-center section__cta">
            {messageCollection}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCollection;
