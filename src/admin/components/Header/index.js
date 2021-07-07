import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../store/actions";
function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLogInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link bg-white" onClick={logout}>
            SignOut
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLogInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Link to="/admin" className="navbar-brand">
        AdminDashboard
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {auth.authenticate ? renderLogInLinks() : renderNonLogInLinks()}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
