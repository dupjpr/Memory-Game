import { createContext, useState, useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext.js";

const LogicContext = createContext();

const LogicContextProvider = ({ children }) => {

    // context App

    const dataContext = useContext(AppContext);

    const { gameCards } = dataContext;

    //    states App

    const [pickCard, setPickCard] = useState([]);
    const [pickedCards, setPickedCards] = useState([]);
    const [element, setElement] = useState([]);
    const [boardsize, setBoardSize] = useState(8);
    const [numberTimes, setNumberTimes] = useState(0);

    useEffect(() => {

        const result = gameCards.filter((card) => card.key === pickCard.key);

        if (pickedCards.length < 2) {
            const check = pickedCards.some((card) => card.key === result[0].key)
            if (result.length > 0) {
                result[0].status = false;
            }

            if (!check) {
                setPickedCards([...pickedCards, ...result]);
                if (pickCard.length !== 0) {
                    setElement([...element, pickCard])
                }
            }
        }

    }, [pickCard])

    comparison();

    function comparison() {

        if (pickedCards.length === 2) {
            if (pickedCards[0].id === pickedCards[1].id) {
                // winner

                element.map((item) => {
                    const classCardHidden = item.element;
                    setTimeout(() => {
                        classCardHidden.classList.add('section-board__card__image__active');
                    }, 600);
                });

                console.log(element);
                setPickedCards([]);
                setElement([]);
                
                setTimeout(() => {
                    setBoardSize(boardsize - 2);
                }, 600);

                setNumberTimes(numberTimes + 1);

            } else {

                setTimeout(() => {

                    pickedCards.map((item) => {

                        const result = gameCards.filter((card) => card.key === item.key);
                        result[0].status = true;
                        setPickedCards([]);
                        setElement([]);
                    })
                    
                    setNumberTimes(numberTimes + 1);

                }, 600);


            }
        }
    }

    console.log(boardsize);
    console.log(numberTimes);

    return (
        <LogicContext.Provider value=
            {{
                pickCard,
                setPickCard,
                gameCards,
                boardsize,
                setBoardSize,
                numberTimes,
                setNumberTimes,
            }}
        >
            {children}
        </LogicContext.Provider>
    );
}

export { LogicContext };
export default LogicContextProvider;