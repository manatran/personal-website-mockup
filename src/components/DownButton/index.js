import React, { Component } from 'react';

import './index.css';

class DownButton extends Component {

	componentDidMount() {
		const down = document.querySelector('.down');

		down.addEventListener('click', e => {
			e.preventDefault();
			window.scroll({
				top: window.screen.height - 256,
				left: 0,
				behavior: 'smooth'
			});
		});

		window.addEventListener('scroll', e => {
			if (window.scrollY < window.screen.height) {
				down.style.opacity = (500 - window.scrollY) / 500;
			}
		})

	}


	render() {
		return (
			<button className="down">
				<i className="fas fa-sort-down" />
			</button>
		)
	}
}
export default DownButton;