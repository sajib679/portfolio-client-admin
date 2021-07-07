import React from "react";
import Menu from "../constants/links";
import SocialLink from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>

      <div className="side-container">
        <Menu styleClass={` ${isOpen ? "sidebar-links" : ""}`} />
        <SocialLink styleClass={` ${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
