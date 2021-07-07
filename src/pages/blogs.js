import React from "react";
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";

const BlogPage = (props) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs title="All Blog" />
      </section>
    </Layout>
  );
};

export default BlogPage;
