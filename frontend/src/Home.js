import React from "react";
import RandomDeck from "./RandomDeck";
import Card from "./Card";
import { Link } from "react-router-dom";


function Home({ randCard, deck}) {

    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>

            <h2>Check out this random deck!</h2>

            <Link to={`decks/${deck.id}`}><RandomDeck deck={deck} /></Link>

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