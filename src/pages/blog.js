import React from "react";
import Layout from "../components/Layout";
import BlogDetails from "../components/BlogDetails";

const Blog = (props) => {
  return (
    <Layout>
      <section className="blog-page">
        <BlogDetails props={props} />
      </section>
    </Layout>
  );
};

export default Blog;
