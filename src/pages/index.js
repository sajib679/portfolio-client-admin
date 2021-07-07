import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Category from "../components/Category";
import Partnership from "../components/Partnership";
import "../css/styles.css";
import "../css/animation.css";
import Contact from "../components/Contact";

const Home = ({ blogs }) => {
  return (
    <Layout>
      <Hero />
      <Category />
      <Partnership />
      <Projects title="Featured Project" showLink />
      <Blogs blogs={blogs} title="Blog" showLink />
      <Contact />
    </Layout>
  );
};

export default Home;
