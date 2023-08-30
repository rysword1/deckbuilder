import React from "react";
import Deck from "./Deck";
import Card from "./Card";

function Home({ card, cards, deck }) {
    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>
            <p>Check out these decks!</p>
            <Deck deck={deck} cards={cards} />
            <p>Will be able to click on a deck and view that specific deck.</p>
            <Card card={card} />
        </div>
    );
}

export default Home;