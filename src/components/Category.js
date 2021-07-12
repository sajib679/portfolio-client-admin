import React, { useState, useEffect } from "react";
import Title from "./Title";
import { imageUrl } from "../store/urlConfig";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aosHelperFade, helper } from "../css/helper";
const Category = () => {
  const [categories, setcategories] = useState([]);
  const allCategory = useSelector((state) => state.category.allCategory);

  useEffect(() => {
    setcategories(allCategory);
  }, [allCategory]);

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="section bg-grey"
    >
      <Title title="services" />
      <div className="section-center services-center">
        {categories.map((category, index) => {
          const { _id, title, desc, categoryPictures, icon } = category;

          return (
            <article
              key={_id}
              className="service"
              data-aos={`${aosHelperFade(index)}`}
              data-aos-delay="300"
              data-aos-anchor-placement="bottom-bottom"
            >
              {icon ? (
                <div className="service-icon">
                  <FontAwesomeIcon {...icon} />
                </div>
              ) : null}
              <h4> {title} </h4>
              <div className="underline"></div>
              <p>{desc}</p>
              <div></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
