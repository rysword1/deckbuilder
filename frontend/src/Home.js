import React from "react";
import Decks from "./Decks";
import Card from "./Card";

function Home({ card, decks }) {
    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>
            <p>Check out these decks!</p>
            <Decks decks={decks}/>
            <p>Will be able to click on a deck and view that specific deck.</p>
            <Card card={card} />
        </div>
    );
}

export default Home;