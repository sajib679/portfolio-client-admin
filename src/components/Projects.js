import React from "react";
import Title from "./Title";
import Project from "./Project";
import { useSelector } from "react-redux";
import { aosHelperFlip } from "../css/helper";

const Projects = ({ title, showLink }) => {
  const allProject = useSelector((state) => state.project.allProject);
  return (
    <section className="section projects" data-aos="fade-up">
      <Title title={title} />
      <div className="section-center">
        {allProject?.map((project, index) => {
          return (
            <div
              data-aos={`${aosHelperFlip(index)}`}
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-center"
            >
              <Project key={project._id} index={index} {...project} />
            </div>
          );
        })}
      </div>

      {showLink && (
        <a href="/projects" className="btn center-btn">
          All Projects
        </a>
      )}
    </section>
  );
};

export default Projects;
