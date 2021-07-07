import React from "react";
import Title from "./Title";
import Blog from "./Blog";
import { useSelector } from "react-redux";
import { aosHelperFade } from "../css/helper";

const Blogs = ({ title, showLink }) => {
  const allBlog = useSelector((state) => state.blog.allBlog);
  return (
    <section className="section" data-aos="fade-up">
      <Title title={title} />
      <div className=" section-center blogs-center">
        {allBlog?.map((blog, index) => {
          return (
            <div
              data-aos={`${aosHelperFade(index)}`}
              data-aos-anchor-placement="top-center"
            >
              <Blog key={blog._id} blog={blog} />
            </div>
          );
        })}
      </div>
      {showLink && (
        <a href="/blogs" className="btn center-btn">
          All Blog
        </a>
      )}
    </section>
  );
};
export default Blogs;
