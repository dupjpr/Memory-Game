import React, { useState, useEffect } from 'react';
import Card from './Card';

const Board = ({ game }) => {

    const [images, setImage] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setImage(data.results));
    }, [])

    const random = () => {
        const imageNum = images.length;
        return Math.floor(Math.random() * imageNum);
    }
    const partIndex = [];

    function indexGenerator() {
        if (partIndex.length != (game / 2)) {
            const index = random();
            const check = partIndex.some(num => num === index);
            if (!check) {
                partIndex.push(index);
                indexGenerator();
            } else {
                indexGenerator();
            }
        }
    }
    indexGenerator()

    let mainIndex = [...partIndex, ...partIndex];
    mainIndex = mainIndex.sort(() => Math.random() - 0.5);

    console.log(partIndex);
    console.log(mainIndex);
    console.log(images[1]);

    let setCardComponent = [];

    let index = -1;
    function cardGenerator() {
        if (setCardComponent.length != game) {
            index += 1;
            setCardComponent.push(<Card item = {mainIndex[index]}/>);
            cardGenerator();
        }
    }
    cardGenerator();

    return (
        <div>
            {setCardComponent}
        </div>
    );
}

export default Board;
