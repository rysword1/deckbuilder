// import React, { useState, useEffect } from "react";
import React from "react";
import CardsList from "./CardsList";
// import DeckbuilderApi from "./Api";


function Deck({ deck }) {

    // on submit delete deck 
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    // useEffect(() => {
    //     async function getCards() {
    //         let cards = await deck.card_ids.map(card_id => 
    //             DeckbuilderApi.getCardImgs(card_id));
    //       setCards(cards);
    //     }
    //     console.log(cards);
    //     getCards();
    //   }, []);

    return (
        <div>
            <h2>{deck.title}</h2>
            <p>{deck.descr}</p>
            <ol>
                {deck.card_ids.map(card_id => 
                    <li>{card_id}</li>
                )}
                
            </ol>
            {/* <CardsList cards={cards} /> */}
            <button onSubmit={handleSubmit}>Delete Deck</button>
        </div>
    );
}

export default Deck;