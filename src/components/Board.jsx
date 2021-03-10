import React, { useContext } from 'react';
import { LogicContext } from '../contexts/LogicContext.js';
import Card from './Card';
import WinnerMsn from './WinnerMsn.jsx';

const Board = () => {

    const dataContext = useContext(LogicContext);

    const { gameCards, boardsize } = dataContext;

    return (
        <section className='section-board'>
            {  boardsize === 0 ? <WinnerMsn /> : gameCards.map((card) => <Card card={card} key={card.key} />)}
        </section>
    );
}

export default Board;