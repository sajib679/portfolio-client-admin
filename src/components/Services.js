import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
const Services = () => {
  const allPartnership = useSelector(
    (state) => state.partnership.allPartnership
  );
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {allPartnership.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4> {title} </h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
