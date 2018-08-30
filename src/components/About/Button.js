import React, { Component } from 'react';

import './Buttons.css';

class Button extends Component {

	render() {
		return (
				<a href={this.props.href} target="_blank" rel="noopener noreferrer">
					<div className="circle">
						<img src={this.props.src} alt={this.props.text} />
					</div>
					<p>{this.props.text}</p>
				</a>
		);
	}
}

export default Button;
