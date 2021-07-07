import React, { useState } from "react";
import Layout from "../../../components/Layout";
import CreateCategoryForm from "./CreateCategory";
const Index = () => {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);

  return (
    <Layout
      button
      sidebar
      name="Category"
      buttonAdd="Create"
      addOnClick={() => setShowCreateCategoryModal(true)}
    >
      <CreateCategoryForm
        modalShow={showCreateCategoryModal}
        setModalShow={setShowCreateCategoryModal}
      />
    </Layout>
  );
};

export default Index;
