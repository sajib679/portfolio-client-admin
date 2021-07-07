import React, { useState } from "react";
import Layout from "../../../components/Layout";
import CreateProjectForm from "./CreateProject";

const Index = () => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  return (
    <Layout
      button
      sidebar
      name="Project"
      buttonAdd="Create"
      addOnClick={() => setShowCreateProjectModal(true)}
    >
      <CreateProjectForm
        modalShow={showCreateProjectModal}
        setModalShow={setShowCreateProjectModal}
      />
    </Layout>
  );
};

export default Index;
