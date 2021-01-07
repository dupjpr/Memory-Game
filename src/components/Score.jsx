import React from 'react';

const Score = ({state}) => {

    const [game, setGame] = state;

    const handleClick = (e, num) => {
        setGame(num);
    }

    return ( 
        <div>
            <a href="#" onClick={(e) => handleClick (e, 6)} >small</a>
            <a href="#" onClick={(e) => handleClick (e, 10)}>medium</a>
            <a href="#" onClick={(e) => handleClick (e, 20)}>large</a>
        </div>
     );
}
 
export default Score;