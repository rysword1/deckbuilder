import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeckbuilderApi from "./Api";


function Decks({ decks }) {

    const [currentDecks, setCurrentDecks] = useState(decks);

    useEffect(() => {
        async function getDecks() {
            let newDecks = await DeckbuilderApi.getAllDecks();
            setCurrentDecks(newDecks);
        }
        getDecks();
    }, []);
    
    return (
        <div>
            <ul>
                {currentDecks.map(deck => (
                        <Link to={`/decks/${deck.id}`} key={deck.id}>
                            <li>
                                <h3>{deck.title}</h3>
                                <p>{deck.description}</p>
                            </li>
                        </Link>
                ))}
            </ul>
        </div>
    );
}

export default Decks;