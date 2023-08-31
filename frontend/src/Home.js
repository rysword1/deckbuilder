import React from "react";
import Deck from "./Deck";
import Card from "./Card";
import { Link } from "react-router-dom";


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

            <p>Want to create your own deck? Click the button below!</p>

            <Link to="/create">
                <button>Create Deck!</button>
            </Link>

            <h2>Check out this random card!</h2>

            <Card randCard={randCard} />

            <p>Want to search for a card? Click the button below!</p>
            <Link to="/cards">
                <button>Card Search!</button>
            </Link>

        </div>
    );
}

export default Home;