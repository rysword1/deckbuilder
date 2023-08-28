import React from "react";


function Deck({ decks }) {

    return (
        <div>
            {decks.map(deck => (
                <div>
                    <h3>{deck.title}</h3>
                    <ol>
                        <li key={card_img}>{card_img}</li>
                    </ol>
                </div>
            ))}
        </div>
    );
}

export default Deck;