import React from "react";
import DeckbuilderApi from "./Api";


function Decks({ decks }) {
    
    return (
        <div>
            {decks.map(deck => (
                <ul>
                    <h3><li key={deck.title}>{deck.title}</li></h3>
                </ul>
            ))}
        </div>
    );
}

export default Decks;