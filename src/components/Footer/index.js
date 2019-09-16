import React, { Component } from "react";

import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>{new Date().getFullYear()} &copy; Manaus Transez</p>
      </footer>
    );
  }
}
export default Footer;
