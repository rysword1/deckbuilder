import React from "react";
import { Link } from "react-router-dom";


function Decks({ decks }) {
    
    return (
        <div>
            <ul>
                {decks.map(deck => (
                    <li key={deck.title}>
                        <Link to={`/decks/${deck.id}`}>
                            <h3>{deck.title}</h3>
                            {/* <p>{deck.description}</p> */}
                            <p>{deck.card_ids}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Decks;