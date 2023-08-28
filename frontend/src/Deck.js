import React from "react";

function Deck({ decks }) {
    return (
        <div>
            {decks.map((deck) => {
                <div>
                    <h3>{deck.title}</h3>
                    <ol>
                        <li key={card.id}>{deck.card_ids}</li>
                    </ol>
                </div>
            })};
        </div>
    );
}

export default Deck;