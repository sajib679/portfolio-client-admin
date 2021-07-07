import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./admin/components/HOC/PrivateRoutes";
import SignIn from "./admin/containers/Pages/SignIn/index";
import SignUp from "./admin/containers/Pages/SignUp/index";
import AdminHome from "./admin/containers/Pages/Home/index";
import {
  isUserLoggedIn,
  getAllCategory,
  getAllProject,
  getAllBlog,
  getAllPartnership,
} from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages";
import Service from "./admin/containers/Pages/Service";
import Category from "./admin/containers/Pages/Category";
import Project from "./admin/containers/Pages/Project";
import Blog from "./admin/containers/Pages/Blog";
import Partnership from "./admin/containers/Pages/Partner";
import Contact from "./pages/contact";
import BlogDetails from "./pages/blog";
import ProjectPage from "./pages/projects";
import AllBlog from "./pages/blogs";

import Aos from "aos";
import "aos/dist/aos.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    dispatch(getAllCategory());
    dispatch(getAllProject());
    dispatch(getAllBlog());
    dispatch(getAllPartnership());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/projects" exact component={ProjectPage}></Route>
        <Route path="/blogs" exact component={AllBlog}></Route>

        <Route path="/blog/:id" component={BlogDetails}></Route>
        <Route path="/admin/signin" component={SignIn}></Route>
        <Route path="/admin/signup" component={SignUp}></Route>
        <PrivateRoute path="/admin" exact component={AdminHome}></PrivateRoute>
        <PrivateRoute path="/admin/service" component={Service}></PrivateRoute>
        <PrivateRoute
          path="/admin/category"
          component={Category}
        ></PrivateRoute>
        <PrivateRoute path="/admin/project" component={Project}></PrivateRoute>
        <PrivateRoute
          path="/admin/partnership"
          component={Partnership}
        ></PrivateRoute>

        <PrivateRoute path="/admin/blog" component={Blog}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
