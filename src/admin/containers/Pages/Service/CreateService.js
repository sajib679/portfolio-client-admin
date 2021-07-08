import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createService } from "../../../../store/actions";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const CreateServiceModal = ({ modalShow, setModalShow }) => {
  const initialState = "";
  const [serviceTitle, setServiceTitle] = useState(initialState);
  const [serviceDesc, setServiceDesc] = useState(initialState);
  const [serviceCategory, setServiceCategoryId] = useState(initialState);
  const [servicePicture, setServicePictures] = useState([]);
  const categories = useSelector((state) => state.category.allCategory);

  const dispatch = useDispatch();

  const createServiceData = () => {
    const form = new FormData();
    form.append("title", serviceTitle);
    form.append("desc", serviceDesc);
    form.append("category", serviceCategory);

    for (const picture of servicePicture) {
      form.append("servicePictures", picture);
    }

    dispatch(createService(form));
    setServicePictures([]);
    setModalShow(false);
  };

  const handleServicePicture = (e) => {
    const allimg = [...e.target.files];
    setServicePictures([...servicePicture, ...allimg]);
    console.log(servicePicture);
  };

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Create Service"
      footerbutton="Save"
      buttonOnSave={createServiceData}
    >
      <Input
        label="Service Title"
        type="text"
        placeholder={`Enter Service Title`}
        value={serviceTitle}
        onChange={(e) => setServiceTitle(e.target.value)}
      />
      <Input
        label="Service Description"
        type="text"
        placeholder={`Enter Service Description`}
        value={serviceDesc}
        onChange={(e) => setServiceDesc(e.target.value)}
      />

      <div className="form-group from-control">
        <label htmlFor="select">Parent Category</label>
        <select
          className="form-control"
          value={serviceCategory}
          onChange={(e) => setServiceCategoryId(e.target.value)}
        >
          {categories.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {servicePicture.map((pic, index) => (
        <div key={index}> {pic.name} </div>
      ))}
      <Input
        // label="Product Image"
        type="file"
        onChange={handleServicePicture}
      />
    </Modal>
  );
};

export default CreateServiceModal;
