import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects title="All Projects" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
