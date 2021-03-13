import React, { useContext } from 'react';
import { LogicContext } from '../contexts/LogicContext.js';
import Card from './Card';
import WinnerMsn from './WinnerMsn.jsx';

const Board = () => {

    const dataContext = useContext(LogicContext);

    const { gameCards, boardsize, numberTimes } = dataContext;

    return (
        <section className='section'>
            {/* <div className='section__times'>Times: {numberTimes}</div> */}
            <div className='section-board'>
                {boardsize === 0 ? <WinnerMsn /> : gameCards.map((card) => <Card card={card} key={card.key} />)}
            </div>
        </section>
    );
}

export default Board;