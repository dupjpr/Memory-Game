import React, { Fragment } from 'react';
import Card from './Card';


const Score = ({ data }) => {

    
    // const cleanHTML = () => {
        
    // }

    // cleanHTML()

    const [characterIndex, cardsLength, characters] = data;
    let cardCollection = [];
    let count = -1;

    function cardGenerator() {
        if (cardCollection.length != cardsLength) {
            count += 1;
            const index = characterIndex[count];
            cardCollection.push(<Card item={characters[index]} key={count} />);
            cardGenerator();
        }
        return
    }

    cardGenerator();

    return (
        <Fragment>
            {/* <h2>cards</h2> */}
            {cardCollection}
        </Fragment>

    );
}

export default Score;