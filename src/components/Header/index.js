import React, { Component } from "react";
import Button from "./../Button";
import DownButton from "./../DownButton";

import resume from "../../assets/resume-manaus-transez.pdf";
import shootingstar from "../../assets/shootingstar.svg";
import planet1 from "../../assets/planet1.svg";
import planet2 from "../../assets/planet2.svg";

import "./index.css";

class Header extends Component {
  componentDidMount() {
    const planet1 = document.querySelector(".planet1");
    const planet2 = document.querySelector(".planet2");

    window.addEventListener("scroll", () => {
      if (window.scrollY < window.screen.height) {
        planet1.style.transform = `translate3d(0, ${window.scrollY / 7}px, 0)`;
        planet2.style.transform = `translate3d(0, -${window.scrollY / 3}px, 0)`;
      }
    });
  }

  render() {
    return (
      <header>
        <div className="img">
          <img
            className="shootingstar"
            src={shootingstar}
            alt="shootingstar 1"
          />
          <img className="planet1" src={planet1} alt="planet 1" />
          <img className="planet2" src={planet2} alt="planet 2" />
        </div>
        <div className="intro">
          <div className="picture" />
          <h1>Manaus Transez</h1>
          <h2>JavaScript Developer</h2>
          <Button text="Download my resume" href={resume} />
        </div>

        <DownButton />
      </header>
    );
  }
}
export default Header;
