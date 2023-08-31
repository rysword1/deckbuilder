import React from "react";
// import CardsList from "./CardsList";
import DeckbuilderApi from "./Api";


function Deck({ deck }) {

    // on submit delete deck 
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    return (
        <div>
            <h2>{deck.title}</h2>
            <p>{deck.descr}</p>
            <ol>
                <li>{deck.card_ids}</li>
            </ol>
            <button onSubmit={handleSubmit}>Delete Deck</button>
        </div>
    );
}

export default Deck;