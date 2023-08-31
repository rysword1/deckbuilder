import React from "react";


function RandomDeck({ deck }) {

    return (
        <div>
            <h2>{deck.title}</h2>
            <p>{deck.descr}</p>
        </div>
    );
}

export default RandomDeck;