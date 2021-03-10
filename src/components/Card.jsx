import React, { useContext } from 'react';
import { LogicContext } from "../contexts/LogicContext.js";

const Card = ({ card }) => {

    const dataContext = useContext(LogicContext);

    const { setPickCard } = dataContext;

    const handleClick = (e, key, id) => {
        setPickCard({ key: key, id: id });
    }

    return (
        <div
            className={card.cardStatus ? 'section-board__card' : 'section-board__card__hidden' } 
            onClick={(e) => {
                handleClick(e, card.key, card.id)
            }}
        >
            <img
                className='section-board__card__image'
                src={card.image}
                alt="character"

            />
            <div className={card.status ? 'section-board__card__cover' : 'section-board__card__cover_active'}></div>
        </div>
    );
}

export default Card;

