import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../../store/actions";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const CreateProjectModal = ({ modalShow, setModalShow }) => {
  const initialState = "";
  const [projectTitle, setProjectTitle] = useState(initialState);
  const [projectDesc, setProjectDesc] = useState(initialState);
  const [projectCategory, setProjectCategoryId] = useState(initialState);
  const [projectPicture, setProjectPictures] = useState([]);
  const [projectLink, setProjectLink] = useState([]);
  const [projectPictureLink, setProjectPictureLink] = useState([]);

  const [projectTechStack, setProjectTechStack] = useState([]);

  const categories = useSelector((state) => state.category.allCategory);

  const dispatch = useDispatch();

  const createProjectData = () => {
    const form = new FormData();
    form.append("title", projectTitle);
    form.append("desc", projectDesc);
    form.append("category", projectCategory);
    form.append("link", projectLink);
    form.append("techStack", projectTechStack);

    if (projectPicture.length > 0) {
      for (const picture of projectPicture) {
        form.append("projectPictures", picture);
      }
    } else {
      form.append("projectPictures", projectPictureLink);
    }

    dispatch(createProject(form));
    setProjectPictures([]);
    setModalShow(false);
  };

  const handleProjectPicture = (e) => {
    const allimg = [...e.target.files];
    setProjectPictures([...projectPicture, ...allimg]);
    console.log(projectPicture);
  };

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Create Project"
      footerbutton="Save"
      buttonOnSave={createProjectData}
    >
      <Input
        label="Project Title"
        type="text"
        placeholder={`Enter Project Title`}
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <Input
        label="Project Description"
        type="text"
        placeholder={`Enter Project Description`}
        value={projectDesc}
        onChange={(e) => setProjectDesc(e.target.value)}
      />
      <Input
        label="Project Link"
        type="text"
        placeholder={`Enter Project Link`}
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
      />
      <Input
        label="Project TechStack"
        type="text"
        placeholder={`Enter Project TechStack`}
        value={projectTechStack}
        onChange={(e) => setProjectTechStack(e.target.value)}
      />

      <div className="form-group from-control">
        <label htmlFor="select">Parent Category</label>
        <select
          className="form-control"
          value={projectCategory}
          onChange={(e) => setProjectCategoryId(e.target.value)}
        >
          {categories.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {projectPicture.map((pic, index) => (
        <div key={index}> {pic.name} </div>
      ))}

      <Input
        label="Project Picture Link"
        type="text"
        placeholder={`Enter Project Picture Link`}
        value={projectPictureLink}
        onChange={(e) => setProjectPictureLink(e.target.value)}
      />
      <Input
        // label="Product Image"
        type="file"
        onChange={handleProjectPicture}
      />
    </Modal>
  );
};

export default CreateProjectModal;
