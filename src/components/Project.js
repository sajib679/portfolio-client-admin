import React from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { imageUrl } from "../store/urlConfig";
const Project = ({
  title,
  link,
  desc,
  github,
  projectPictures,
  techStack,
  category,
  index,
}) => {
  return (
    <article className="project">
      <img
        alt=""
        src={imageUrl(projectPictures[0].img)}
        className="project-img"
      />
      <div className="project-info">
        <span className="project-number">{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-stack">
          {techStack.map((stack, index) => {
            return <span key={index}> {stack}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={link}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
