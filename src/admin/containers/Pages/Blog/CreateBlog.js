import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import { createBlog } from "../../../../store/actions";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { uploadCallback } from "./helper";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreateBlog = ({ modalShow, setModalShow }) => {
  const initialState = "";
  const [blogName, setBlogName] = useState(initialState);
  const [blogCategory, setBlogCategory] = useState(initialState);
  const [summary, setBlogSummary] = useState(initialState);
  const [featureImage, setBlogFeatureImage] = useState(initialState);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {}, [editorState]);

  const categories = useSelector((state) => state.category.allCategory);

  const dispatch = useDispatch();

  const createBlogData = () => {
    const blogDesc = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(blogDesc);

    const form = new FormData();
    form.append("title", blogName);
    form.append("body", blogDesc);
    form.append("summary", summary);
    form.append("featureImage", featureImage);

    form.append("category", blogCategory);

    dispatch(createBlog(form));
    // setEditorState();
  };

  return (
    <Card className="mr-5 ml-5 p-4" style={{ width: "800px" }}>
      <Input
        label="Blog Title"
        type="text"
        placeholder={`Enter Blog Title`}
        value={blogName}
        onChange={(e) => setBlogName(e.target.value)}
      />
      <Input
        label="Blog Summary"
        type="text"
        placeholder={`Enter Blog Summary`}
        value={summary}
        onChange={(e) => setBlogSummary(e.target.value)}
      />

      <Input
        label="Blog Feature Image"
        type="text"
        placeholder={`Enter Blog Feature Image`}
        value={featureImage}
        onChange={(e) => setBlogFeatureImage(e.target.value)}
      />

      <div className="form-group">
        <label htmlFor="select">Blog Category</label>
        <select
          className="form-control"
          value={blogCategory}
          onChange={(e) => setBlogCategory(e.target.value)}
        >
          <option value="">None</option>
          {categories.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div>
        <div
          style={{
            border: "1px solid black",
            padding: "2px",
            minHeight: "400px",
          }}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            placeholder="type here..."
            toolbar={{
              image: {
                uploadCallback,
                defaultSize: {
                  height: "auto",
                  width: "600px",
                },
              },
            }}
          />
        </div>
      </div>
      <Button className="btn-info p-3 m-5" onClick={createBlogData}>
        Save
      </Button>
    </Card>
  );
};

export default CreateBlog;
