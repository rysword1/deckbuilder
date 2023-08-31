import React from "react";
// import CardsList from "./CardsList";


function Deck({ deck }) {

    return (
        <div>
            <h2>{deck.title}</h2>
            <p>{deck.description}</p>
            <ol>
                <li>{deck.card_ids}</li>
            </ol>
        </div>
    );
}

export default Deck;