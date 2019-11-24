import React from "react";
import { NavLink } from "react-router-dom";
export default props => {
  return (
    <div id="nav-wrapper">
      <div id="myName">
        <h6>
          <span>&lt;</span>Geoffrey Hutson <span>&frasl;</span>{" "}
          <span>&gt;</span>
        </h6>
      </div>
      <div className="navBar">
        <ul className="navBarList">
          <li className="navBarItems">
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li className="navBarItems">
            <NavLink to="/about">About </NavLink>
          </li>
          <li className="navBarItems">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="navBarItems">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="navBarItems">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
