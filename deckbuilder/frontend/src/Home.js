import React from "react";
import Decks from "./Decks";

function Home() {
    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>
            <Decks />
            <p>Will be able to click on a deck and view that specific deck.</p>
        </div>
    );
}

export default Home;