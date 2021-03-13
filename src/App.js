// import { useState } from "react";
import Board from './components/Board';

import AppContextProvider from '../src/contexts/AppContext.js';
import LogicContextProvider from "./contexts/LogicContext.js";

import './sass/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <AppContextProvider>
      <LogicContextProvider>
        <Header/>
        <Board />
        <Footer/>
      </LogicContextProvider>
    </AppContextProvider>
  );
}

export default App;
