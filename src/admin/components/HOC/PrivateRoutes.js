import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/admin/signin"} />;
        }
      }}
    />
  );
};

export default PrivateRoutes;
