import React from "react";
import draftToHtml from "draftjs-to-html";
import { useSelector } from "react-redux";
const Blog = ({ props }) => {
  const { id } = props.match.params;
  const allBlog = useSelector((state) => state.blog.allBlog);

  const blog = allBlog.filter((blog) => blog._id === id);

  const convertFromJSONToHTML = (text) => {
    try {
      return { __html: draftToHtml(JSON.parse(text)) };
    } catch (exp) {
      console.log(exp);
      return { __html: "Error" };
    }
  };
  return (
    <div className="blog-details">
      {blog.length > 0 &&
        blog.map((blog) => (
          <div className="blog-content">
            <h2>{blog.title}</h2>
            <img alt="" src={blog.featureImage} className="blog-feature-img" />
            <div
              dangerouslySetInnerHTML={convertFromJSONToHTML(blog.body)}
            ></div>

            <div></div>
          </div>
        ))}
    </div>
  );
};

export default Blog;
