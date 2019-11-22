import React from "react";
import { Link } from "react-router-dom";
export default props => {
  return (
    <div id="wrappper">
      <div id="about-wrapper">
        <div className="aboutList">
          <ul className="skillsList">
            <li className="skillsListItems">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="skillsListItems">
              <Link to="/About">About</Link>
            </li>
            <li className="skillsListItems">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="skillsListItems">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="skillsListItems">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
