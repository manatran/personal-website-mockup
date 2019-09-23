import React, { Component } from "react";
import Logo from "../../assets/logo.svg";

import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        Manaus Transez
        <img alt="Personal logo" src={Logo} />
        {new Date().getFullYear()}
      </footer>
    );
  }
}
export default Footer;
