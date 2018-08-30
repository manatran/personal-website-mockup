import React, { Component } from 'react';
import Button from './Button';

import MongoDBIcon from '../../assets/icons/mongo.svg';
import ExpressIcon from '../../assets/icons/express.svg';
import ReactIcon from '../../assets/icons/react.svg';
import NodeIcon from '../../assets/icons/node.svg';

import './index.css';

class About extends Component {

	render() {
		return (
			<section className="about">
				<h3>I am a <span className="gradient-text">full stack developer</span></h3>
				<p>I specialize in the so called <span title="MongoDB, Express, React, Node">MERN</span> stack.</p>
				<p>This JavaScript development stack is a combination of the following technologies:</p>

				<div className="buttons">
					<Button href="https://www.mongodb.com/" src={MongoDBIcon} text="MongoDB" />
					<Button href="http://expressjs.com/" src={ExpressIcon} text="Express.js" />
					<Button href="https://reactjs.org/" src={ReactIcon} text="React.js" />
					<Button href="https://nodejs.org/en/" src={NodeIcon} text="Node.js" />
				</div>
			</section>
		);
	}
}

export default About;
