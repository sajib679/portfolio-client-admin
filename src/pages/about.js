import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";

const About = ({ title, info, stack, image }) => {
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <img alt="" src={image} className="about-img" />
          <article className="about-text">
            <Title title={title}></Title>
            <p>{info}</p>
            <div className="about-stack">
              {stack?.map((item) => {
                return <span key={item.id}>{item.name}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
