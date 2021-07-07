import React, { useState } from "react";
import Layout from "../../../components/Layout";
import CreatePartnershipForm from "./CreatePartnership";

const Index = () => {
  return (
    <Layout button sidebar name="Partnership">
      <CreatePartnershipForm />
    </Layout>
  );
};

export default Index;
