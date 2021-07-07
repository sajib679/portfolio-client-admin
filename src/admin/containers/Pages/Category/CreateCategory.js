import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";
import { createCategory } from "../../../../store/actions";
import { Row, Col } from "react-bootstrap";
const CreateCategory = ({ modalShow, setModalShow }) => {
  const sizeRef = useRef();
  const iconRef = useRef();
  const colorRef = useRef();

  const initialState = "";
  const icon = {
    icon: "",
    size: "",
    color: "",
  };
  const [categoryName, setCategoryName] = useState(initialState);
  const [categoryIcon, setCategoryIcon] = useState(icon);

  const [categoryDesc, setCategoryDesc] = useState(initialState);
  const [parentCategory, setParentCategory] = useState(initialState);
  const [categoryPictures, setCategoryPictures] = useState([]);

  const categories = useSelector((state) => state.category.allCategory);

  const dispatch = useDispatch();

  const createCategoryData = () => {
    const categoryIconObj = JSON.stringify(categoryIcon);
    const form = new FormData();
    form.append("title", categoryName);
    form.append("desc", categoryDesc);
    form.append("parentId", parentCategory);
    form.append("icon", categoryIconObj);

    for (const picture of categoryPictures) {
      form.append("categoryPictures", picture);
    }

    dispatch(createCategory(form));
    setCategoryPictures([]);
    setModalShow(false);
  };

  const handleCategoryPictures = (e) => {
    const allimg = [...e.target.files];
    setCategoryPictures([...categoryPictures, ...allimg]);
    console.log(categoryPictures);
  };

  const handleIconChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCategoryIcon((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Create Category"
      footerbutton="Save"
      buttonOnSave={createCategoryData}
    >
      <Input
        label="Category Title"
        type="text"
        placeholder={`Enter Category Title`}
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Input
        label="Category Description"
        type="text"
        placeholder={`Enter Category Description`}
        value={categoryDesc}
        onChange={(e) => setCategoryDesc(e.target.value)}
      />

      <Row>
        <Col>
          <Input
            ref={iconRef}
            label="Category Icon"
            type="text"
            placeholder={`Icon name`}
            value={categoryIcon.icon}
            name="icon"
            onChange={(e) => handleIconChange(e)}
          />
        </Col>
        <Col>
          <Input
            ref={sizeRef}
            label="*"
            type="text"
            placeholder={`Icon size`}
            value={categoryIcon.size}
            name="size"
            onChange={handleIconChange}
          />
        </Col>
        <Col>
          <Input
            ref={colorRef}
            label="*"
            type="text"
            placeholder={`Icon color`}
            name="color"
            value={categoryIcon.color}
            onChange={handleIconChange}
          />
        </Col>
      </Row>

      <div className="form-group from-control">
        <label htmlFor="select">Parent Category</label>
        <select
          className="form-control"
          value={parentCategory}
          onChange={(e) => setParentCategory(e.target.value)}
        >
          <option value=""> None </option>
          {categories.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {categoryPictures.map((pic, index) => (
        <div key={index}> {pic.name} </div>
      ))}
      <Input
        // label="Product Image"
        type="file"
        onChange={handleCategoryPictures}
      />
    </Modal>
  );
};

export default CreateCategory;
