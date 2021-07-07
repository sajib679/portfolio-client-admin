import React, { useState } from "react";
import Layout from "../../../components/Layout";
import CreateBlogForm from "./CreateBlog";
const Index = () => {
  const [showCreateBlogModal, setShowCreateBlogModal] = useState(false);

  return (
    <Layout
      button
      sidebar
      name="Blog"
      buttonAdd="Create"
      addOnClick={() => setShowCreateBlogModal(true)}
    >
      <CreateBlogForm
        modalShow={showCreateBlogModal}
        setModalShow={setShowCreateBlogModal}
      />
    </Layout>
  );
};

export default Index;
