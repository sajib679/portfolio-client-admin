import React from "react";
// import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h2>
            <span
              style={{
                color: "#2caeba",
                fontWeight: "bold",
              }}
            >
              Tech
            </span>
            <span style={{}}>Partner</span>
          </h2>

          {/* <img src={logo} /> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
