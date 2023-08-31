import React from "react";


function RandomDeck({ deck }) {

    return (
        <div>
            <h2>{deck.title}</h2>
            <p>{deck.description}</p>
        </div>
    );
}

export default RandomDeck;