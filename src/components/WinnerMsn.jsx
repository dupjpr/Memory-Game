import { useContext } from "react";

import { LogicContext } from "../contexts/LogicContext.js";
import { AppContext } from "../contexts/AppContext.js";

const WinnerMsn = () => {

    const dataLogicContext = useContext(LogicContext);
    const dataAppContext = useContext(AppContext);

    const { setBoardSize, numberTimes, setNumberTimes } = dataLogicContext;
    const { newGame, setNewGame } = dataAppContext;

    const handleClickReset = () => {
        console.log('escuchando....');
        setBoardSize(8);
        setNumberTimes(0);
        setNewGame(!newGame);
    };

    return (
        <div>
            <h1>You are the winner</h1>
            <div>Score: {numberTimes}</div>
            <button onClick={(e) => handleClickReset(e)}>play again</button>
        </div>
    );
}

export default WinnerMsn;