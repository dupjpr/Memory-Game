import React, { Fragment, useState } from 'react';
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';

import './sass/style.scss';


function App() {



  return (
    <Fragment>
      <Header />
      <Board />
      <Footer />
    </Fragment>
  );
}

export default App;
