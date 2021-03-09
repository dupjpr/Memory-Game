// import { useState } from "react";
import Board from './components/Board';

import AppContextProvider from '../src/contexts/AppContext.js';
import LogicContextProvider from "./contexts/LogicContext.js";

import './sass/style.scss';

function App() {

  return (
    <AppContextProvider>
      <LogicContextProvider>
        <Board />
      </LogicContextProvider>
    </AppContextProvider>
  );
}

export default App;
