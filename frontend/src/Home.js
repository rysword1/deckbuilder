import React from "react";
import Deck from "./Deck";
import Card from "./Card";

function Home({ randCard, randDeck}) {

    // const [deck, setDeck] = useState([]);

    // async function getDeckId() {
    //     function onclick()
    // }

    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>
            <h2>Check out this random deck!</h2>
            <a href={`http://localhost:3000/decks/${randDeck.id}`}><Deck randDeck={randDeck} /></a>
            <p>Will be able to click on a deck and view that specific deck.</p>
            <Card randCard={randCard} />
        </div>
    );
}

export default Home;