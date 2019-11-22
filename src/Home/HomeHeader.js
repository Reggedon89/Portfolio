import React from "react";
import { Link } from "react-router-dom";
export default props => {
  return (
    <div id="wrappper">
      <div id="nav-wrapper">
        <div id="myName">
          <h6>Geoffrey Hutson</h6>
        </div>
        <div className="navBar">
          <ul className="navBarList">
            <li className="navBarItems">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="navBarItems">
              <Link to="/About">About</Link>
            </li>
            <li className="navBarItems">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="navBarItems">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="navBarItems">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
