import React, {useState} from 'react';
import '../sass/style.scss';


const Card = ({ item }) => {

    const [clasItem, setClassItem] = useState('card-image-back')

    const handleClick = () => {
        // const element = e.target;
        // element.classList.toggle();
        setClassItem('card-image-back-active');
    }



    return (

        <div className="board-card" onClick={(e) => handleClick(e)}>
            <div className="board-card-front">
                <img className='card-image-front' src={item.image} alt="card image front" />
            </div>
            <div className="board-card-back">
                <img className={clasItem} src='https://i.pinimg.com/originals/cc/43/9d/cc439dab1d473c2f332419b73c72bd3e.jpg' alt="card image back" />
            </div>
        </div>
    );
}

export default Card;