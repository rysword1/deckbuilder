import React from "react";
import { Link } from "react-router-dom";


function Decks({ decks }) {
    
    return (
        <div>
            <ul>
                {decks.map(deck => (
                        <Link to={`/decks/${deck.id}`} key={deck.id}>
                            <li>
                                <h3>{deck.title}</h3>
                                <p>{deck.descr}</p>
                                <p>{deck.card_ids}</p>
                            </li>
                        </Link>
                ))}
            </ul>
        </div>
    );
}

export default Decks;