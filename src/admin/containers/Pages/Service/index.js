import React, { useState } from "react";
import Layout from "../../../components/Layout";
import CreateServiceForm from "./CreateService";

const Index = () => {
  const [showCreateServiceModal, setShowCreateServiceModal] = useState(false);

  return (
    <Layout
      button
      sidebar
      name="Service"
      buttonAdd="Create"
      addOnClick={() => setShowCreateServiceModal(true)}
    >
      <CreateServiceForm
        modalShow={showCreateServiceModal}
        setModalShow={setShowCreateServiceModal}
      />
    </Layout>
  );
};

export default Index;
