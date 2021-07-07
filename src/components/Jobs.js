import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa";

const Jobs = ({ jobs }) => {
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = Object(jobs);

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs?.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={item._id}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{position} </h3>
          <h4>{company} </h4>
          <p className="job-date">{date}</p>
          {desc?.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <a href="/about" className="btn center-btn">
        More...
      </a>
    </section>
  );
};

export default Jobs;
