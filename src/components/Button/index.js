import React, { Component } from "react";

import "./index.css";

class Button extends Component {
  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        className={this.props.secondary ? "secondary button" : "button"}
      >
        {this.props.text}
      </a>
    );
  }
}
export default Button;
