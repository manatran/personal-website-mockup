import React, { Component } from 'react';

import './index.css';

class DownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    }
  }

  scrollDown(e) {
    window.scroll({
      top: window.screen.height - 256,
      left: 0,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ opacity: (500 - window.scrollY) / 500 });
    });
  }

  render() {
    return (
      <button className="down" onClick={() => this.scrollDown()} style={{ opacity: this.state.opacity }}>
        <i className="fas fa-sort-down" />
      </button>
    )
  }
}
export default DownButton;