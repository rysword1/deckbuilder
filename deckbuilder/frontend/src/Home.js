import React from "react";
import Decks from "./Decks";
import Card from "./Card";

function Home({ card }) {
    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>
            <Decks />
            <p>Will be able to click on a deck and view that specific deck.</p>
            <Card card={card} />
        </div>
    );
}

export default Home;