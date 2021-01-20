import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import LandingMsn from './Landing';

const Board = () => {

    const [characters, setCharacters] = useState([]);

    const [cardsLength, setCardsLength] = useState(0);

    const handleClick = (e, num) => {
        setCardsLength(num);
    }

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results));

    }, [])

    const random = () => {
        const imageNum = characters.length;
        return Math.floor(Math.random() * imageNum);
    }

    const partIndex = [];

    function charactersPicker() {
        if (partIndex.length != (cardsLength / 2)) {
            const index = random();
            const check = partIndex.some(num => num === index);

            if (!check) {
                partIndex.push(index);
                charactersPicker();
            }

            charactersPicker();
        }
        return
    }

    charactersPicker()

    let characterIndex = [...partIndex, ...partIndex];
    characterIndex = characterIndex.sort(() => 0.5 - Math.random());

    return (
        <section className='section'>
           
            <div className="section-board">

                {cardsLength === 0 ? <LandingMsn />: <Cards data={[characterIndex, cardsLength, characters]}/> }
                
            </div>
            
            <div className="section-buttons">
                <a href="#" onClick={(e) => handleClick(e, 6)} >small</a>
                <a href="#" onClick={(e) => handleClick(e, 10)}>medium</a>
                <a href="#" onClick={(e) => handleClick(e, 20)}>large</a>
            </div>

        </section>
    );
}

export default Board;
