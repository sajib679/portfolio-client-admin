import React from "react";
import { useHistory } from "react-router-dom";

const Blog = ({ blog }) => {
  let history = useHistory();
  const { _id, title, summary, featureImage, category, date } = blog;

  return (
    <div className="blog" onClick={() => history.push(`/blog/${_id}`)}>
      <img
        alt=""
        src={featureImage ? featureImage : null}
        className="blog-img"
      />
      <article>
        <div className="blog-card">
          <h4>{title}</h4>
          <div
            style={{
              textAlign: "justify",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "2.9rem",
            }}
          >
            <article>{summary}</article>
          </div>
          <div className="blog-footer">
            {/* <p>{category}</p> */}
            {/* <p>{date} </p> */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
