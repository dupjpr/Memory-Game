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
            className={card.cardStatus ? 'section-board__card' : 'section-board__card__hidden'}
            onClick={(e) => {
                handleClick(e, card.key, card.id)
            }}
        >
            <img
                className='section-board__card__image'
                src={card.image}
                alt="character"
            />

            <img
                src="https://ae01.alicdn.com/kf/H16668b4ee20e4e63bf314d421881c53fr.jpg_q50.jpg"
                alt="cover"
                className={card.status ? 'section-board__card__cover__image' : 'section-board__card__cover__image_active'}
            />
        </div>
    );
}

export default Card;

