import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
	componentWillMount() {
		console.log(
			" -yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-\n",
			"-yyyyyyyyyyyyyyyyyys    syyyyyyyyyyyyyyyyyy-\n",
			"-MMMMMMMMMMMMMMM           NMMMMMMMMMMMMMMM-\n",
			"-MMMMMMMMMMMN                  MMMMMMMMMMMM-\n",
			"-MMMMMMMMmhs      shmMNmy       ydNMMMMMMMM-\n",
			"-MMMMNdy       ydNN      NNhs      shmMMMMM-\n",
			"-Mmhs      shmN             NNdy       ydNM-\n",
			"-       ydNNdy                ymNNds      s-\n",
			"-    hNMmhs                      shNMmy    -\n",
			"-   sMN      ssssss      ssssss     sMm    -\n",
			"-   sMm      MMMMMMm    mMMMMMM      Mm    -\n",
			"-   sMm      MMMMMMMNshMMMMMMMM      Mm    -\n",
			"-   sMm      MMMMNNNNNNNNNNMMMM      Mm    -\n",
			"-   sMm      MMMN          NMMM      Mm    -\n",
			"-   sMm      MMMMyys    yyyMMMM      Mm    -\n",
			"-   sMm      MMMMMMd    MMMMMMM      Mm    -\n",
			"-   sMm      MMMMMMd    MMMMMMM      Mm    -\n",
			"-   sMm      sssssss    sssssss      Mm    -\n",
			"-    dNNdy                        ymMNh    -\n",
			"-      shNMmh                 shNMdy       -\n",
			"-Ndy       hdNNds          ymNNds       ydM-\n",
			"-MMMMmh       shmMmys  shNMmy       shmMMMM-\n",
			"-MMMMMMMNds       ymMNMNhs       ymMMMMMMMM-\n",
			"-MMMMMMMMMMMmys              shNMMMMMMMMMMM-\n",
			"-MMMMMMMMMMMMMMNdy        ydNMMMMMMMMMMMMMM-\n",
			"-ddddddddddddddddddy///shdddddddddddddddddd-\n",
			"-dddddddddddddddddddddddddddddddddddddddddd-\n",
			'\n',
			"Do you like code as much as I do?\n",
			"Check out mine at https://github.com/manatran\n",
			"Or send me an email at manaustransez@hotmail.com for more information."
		);
	}

	
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<About />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
