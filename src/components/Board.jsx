import React, { useContext } from 'react';
import { LogicContext } from '../contexts/LogicContext.js';
import Card from './Card';

const Board = () => {

    const dataContext = useContext(LogicContext);

    const { gameCards } = dataContext;

    return (
        <section className='section-board'>
            {gameCards.map((card) => <Card card={card} key={card.key} />)}
        </section>
    );
}

export default Board;