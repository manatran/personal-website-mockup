import React, { Component } from "react";
import favicon from "../../assets/favicon.png";

import "./index.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="/">
          <img src={favicon} alt="Logo" />
          <span className="name">manaus_t</span>
        </a>
      </nav>
    );
  }
}
export default Navigation;
