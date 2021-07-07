import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { aosHelperZoom } from "../css/helper";
const Partnership = () => {
  const allPartnership = useSelector(
    (state) => state.partnership.allPartnership
  );
  return (
    <section className="section jobs" data-aos="fade-up">
      <Title title="Partnership" />
      <div className="section-center services-center">
        {allPartnership.map((partnership, index) => {
          const { _id, title, desc, partnershipPicture } = partnership;
          return (
            <article
              key={_id}
              data-aos={`${aosHelperZoom(index)}`}
              data-aos-anchor-placement="top-center"
              className="partnership"
            >
              <img
                src={partnershipPicture}
                alt=""
                className="partnership-img"
              />

              <h4> {title} </h4>
              <div className="underline"></div>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Partnership;
