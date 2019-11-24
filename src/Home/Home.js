import React from "react";
import Navbar from "./Navbar";
import AboutBody from "../About/AboutBody";
export default props => {
  return (
    <div id="wrappper">
      <div id="intro">
        <Navbar />

        <div id="overlay">
          <div id="labelName">
            <h1>I am Geoffrey Hutson</h1>
            <h6 id="tagline">Full Stack Devloper</h6>
          </div>
        </div>
      </div>
      <AboutBody />
    </div>
  );
};
