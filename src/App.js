import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  componentWillMount() {
    console.log(`
      -yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-
      -yyyyyyyyyyyyyyyyyys    syyyyyyyyyyyyyyyyyy-
      -MMMMMMMMMMMMMMM           NMMMMMMMMMMMMMMM-
      -MMMMMMMMMMMN        _         MMMMMMMMMMMM-
      -MMMMMMMMmhs      shmMNmy       ydNMMMMMMMM-
      -MMMMNdy       ydNN      NNhs      shmMMMMM-
      -Mmhs      shmN             NNdy       ydNM-
      -       ydNNdy                ymNNds      s-
      -    hNMmhs                      shNMmy    -
      -   sMN      ssssss      ssssss     sMm    -
      -   sMm      MMMMMMm    mMMMMMM      Mm    -
      -   sMm      MMMMMMMMMMMMMMMMMM      Mm    -
      -   sMm      MMMMMMMMMMMMMMMMMM      Mm    -
      -   sMm      MMMN          NMMM      Mm    -
      -   sMm      MMMMMMM    MMMMMMM      Mm    -
      -   sMm      MMMMMMM    MMMMMMM      Mm    -
      -   sMm      MMMMMMM    MMMMMMM      Mm    -
      -   sMm      MMMMMMM    MMMMMMM      Mm    -
      -    dNNdy                        ymMNh    -
      -      shNMmh                 shNMdy       -
      -Ndy       hdNNds          ymNNds       ydN-
      -MMMMmh       shmMmys  shNMmy       shmMMMM-
      -MMMMMMMNds       ymMNMNhs       ymMMMMMMMM-
      -MMMMMMMMMMMmys      ^       shNMMMMMMMMMMM-
      -MMMMMMMMMMMMMMNdy        ydNMMMMMMMMMMMMMM-
      -ddddddddddddddddddy///shdddddddddddddddddd-
      -dddddddddddddddddddddddddddddddddddddddddd-
      
      Do you like code as much as I do?
      Check out mine at https://github.com/manatran
      Or send me an email at manaustransez@hotmail.com for more information.
    `);
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
