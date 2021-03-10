import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    // estados de la aplicación

    const [characters, setCharacters] = useState([]);
    const [newGame, setNewGame] = useState(false);

    // llamado del API y configuración de la baraja

    useEffect(() => {

        const url = 'https://rickandmortyapi.com/api/character';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const result = data.results.sort(() => 0.5 - Math.random());
                setCharacters(result);
            })

    }, []);

    const gameCollection = [];

    characters.forEach((character) => {

        if (gameCollection.length !== 4) {

            gameCollection.push(character);

        }
    });

    const game = [...gameCollection, ...gameCollection].sort(() => 0.5 - Math.random());

    function keyGenerator() {

        const gameKey = game.map((card) => {

            return { ...card, key: uuidv4(), status: true, cardStatus:true }

        })

        return gameKey
    }

    const gameCards = keyGenerator();

    return (
        <AppContext.Provider value=
            {{
                gameCards,
                newGame,
                setNewGame
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export { AppContext };
export default AppContextProvider;