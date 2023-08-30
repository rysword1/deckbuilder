import React, { useState } from "react";
import axios from "axios";
import CardsList from "./CardsList";


function Deck({ cards, deck }) {

    async function cardSearch(query) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
        const newCards = result.data.data.map(card => {
            card.side = 0;
            return card;
        });
        setCurrentCards(newCards);
    }

    const [cardImgs, setCardImgs] = (cards);

    async function getCardImgs(card_id) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${card_id}`);
        const cardImgs = result.data.data.map(img => {
            card.side = 0;
            return card;
        });
        setCardImgs(cardImgs);
    }


    return (
        <div>
            <h2>{deck.title}</h2>
            <CardsList cards={cardImgs} />
        </div>
    );
}

export default Deck;