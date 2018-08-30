import React, { Component } from 'react';

import './index.css';

class Contact extends Component {

	render() {
		return (
			<section className="contact">
				<h3>Are you interested in a <span className="gradient-text">junior developer</span> with my skillset?</h3>
				<p>Or do you just have some questions for me? Don't hesitate to send me an email.</p>
				<a className="email gradient-text secondary" href="mailto:manaustransez@hotmail.com">manaustransez@hotmail.com</a>
				
				<div className="social">
					<a href="mailto:manaustransez@hotmail.com">
						<i className="fas fa-envelope gradient-text" />
					</a>
					<a href="https://twitter.com/manaus_t/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter gradient-text" />
					</a>
					<a href="https://www.linkedin.com/in/manaustransez/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin gradient-text" />
					</a>
					<a href="https://github.com/manatran/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github gradient-text" />
					</a>
				</div>
			</section>
		)
	}

}

export default Contact;