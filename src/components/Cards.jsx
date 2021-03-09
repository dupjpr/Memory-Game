import React, { Fragment } from 'react';
import Card from './Card';

const Score = ({ data }) => {

    const [characterIndex, cardsLength, characters] = data;

    let cardCollection = [];

    let count = -1;

    function cardGenerator() {
        if (cardCollection.length !== cardsLength) {
            count += 1;
            const index = characterIndex[count];
            cardCollection.push(<Card item={characters[index]} characterIndex={characterIndex} key={count} />);
            cardGenerator();
        }
        return 
    }
    
    cardGenerator();
    // console.log('------');
    // console.log(characterIndex);

    return (
        <Fragment>
            {cardCollection}
        </Fragment>

    );
}

export default Score;