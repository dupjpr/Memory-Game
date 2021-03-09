import React, { useContext } from 'react';
import { LogicContext } from "../contexts/LogicContext.js";

const Card = ({ card }) => {

    const dataContext = useContext(LogicContext);

    const { pickCard, setPickCard } = dataContext;

    const handleClick = (e, key, id) => {
        const parentNode = e.target.parentNode;
        const imageNode = parentNode.firstChild;
        setPickCard({ key: key, id: id, element:imageNode });

    }


    return (
        <div
            className='section-board__card'
            onClick={(e) => handleClick(e, card.key, card.id)}
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

