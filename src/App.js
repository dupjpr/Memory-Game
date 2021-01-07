import React, { Fragment, useState } from 'react';
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
import Score from './components/Score';

function App() {

  const [game, setGame] = useState(0);

  return (
    <Fragment>
      <Header/>
      <section>
        <Board game = {game}/>
        <Score state = {[game, setGame]} />
      </section>
        <Footer/>
    </Fragment>
  );
}

export default App;
