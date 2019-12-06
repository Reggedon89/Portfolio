import React from "react";
import Navbar from "./Navbar";
import AboutBody from "../About/AboutBody";
import Skills from "../Skills/Skills";
export default props => {
  return (
    <div id="wrappper">
      <div id="intro">
        <Navbar />
        <div id="overlay">
          <div id="labelName">
            <h1>I am Geoffrey Hutson</h1>
            <h6 id="tagline">Full Stack Devloper</h6>
            <div id="social-media">
              <a
                href="https://github.com/Reggedon89/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/geoffrey-hutson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutBody id="about" />
      <Skills id="skills" />
    </div>
  );
};
