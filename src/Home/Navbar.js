import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default props => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in"
  });
  var home = document.querySelector("#intro");
  var about = document.querySelector("#about-wrapper");

  function scrollToHome() {
    home.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  function scrollToAbout() {
    about.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos);
      if (currPos.y !== 0) {
        const isVisible = currPos.y > prevPos.y;

        const shouldBeStyle = {
          visibility: isVisible ? "visible" : "hidden",
          transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
          transform: isVisible ? "none" : "translate(0, -100%)",
          backgroundColor: "black",
          color: "white",
          height: 50
        };

        if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle))
          return;

        setHeaderStyle(shouldBeStyle);
      } else {
        setHeaderStyle({
          transition: "all 200ms ease-out"
        });
      }
    },
    [headerStyle]
  );
  return (
    <div id="nav-wrapper" style={{ ...headerStyle }}>
      <div id="myName">
        <h6>
          <span>&lt;</span>Geoffrey Hutson <span>&frasl;</span>{" "}
          <span>&gt;</span>
        </h6>
      </div>
      <div className="navBar">
        <ul className="navBarList">
          <li className="navBarItems">
            <span onClick={scrollToHome} className="navItem">
              Home
            </span>{" "}
          </li>
          <li className="navBarItems">
            <span className="navItem" onClick={scrollToAbout}>
              About{" "}
            </span>
          </li>
          <li className="navBarItems">
            <span className="navItem">Skills</span>
          </li>
          <li className="navBarItems">
            <span className="navItem">Portfolio</span>
          </li>
          <li className="navBarItems">
            <span className="navItem">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
