import React, { Component } from 'react';
import Button from './../Button';
import DownButton from './../DownButton';

import resume from '../../assets/resume_manaus_transez.pdf';
import shootingstar from '../../assets/shootingstar.svg';
import planet1 from '../../assets/planet1.svg';
import planet2 from '../../assets/planet2.svg';

import './index.css';

class Header extends Component {

	componentDidMount() {
		const planet1 = document.querySelector('.planet1');
		const planet2 = document.querySelector('.planet2');

		window.addEventListener('scroll', e => {
			if (window.scrollY < window.screen.height) {
				if (window.screen.width < 1080) {
					planet1.style.top = (window.scrollY / 75) + 15 + '%';
					planet2.style.bottom = (window.scrollY / 25) - 5 + '%';
				} else {
					planet1.style.top = (window.scrollY / 50) + 15 + '%';
					planet2.style.bottom = (window.scrollY / 25) + '%';
				}
			}

		})

	}

	render() {
		return (
			<header>
				<div className="img">
					<img className="shootingstar" src={shootingstar} alt="shootingstar 1" />
					<img className="planet1" src={planet1} alt="planet 1" />
					<img className="planet2" src={planet2} alt="planet 2" />
				</div>
				<div className="intro">
					<div className="picture"></div>
					<h1>Manaus Transez</h1>
					<h2>Full stack developer</h2>
					<Button text="Download my resume" href={resume} />
				</div>

				<DownButton />
			</header>
		)
	}
}
export default Header;