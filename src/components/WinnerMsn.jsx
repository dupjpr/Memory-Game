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
        <section className='section-msn'>
            <div className="container">
                <h2 className='section-msn__title'>Well Done !</h2>
                <div className='section-msn__times'>Times: {numberTimes}</div>
                <button
                    onClick={(e) => handleClickReset(e)}
                    className='section-msn__btn'
                >
                    play again
                </button>
            </div>
        </section>
    );
}

export default WinnerMsn;