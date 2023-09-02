import React, { useEffect, useState } from "react";
import RandomDeck from "./RandomDeck";
import Card from "./Card";
import { Link } from "react-router-dom";


function Home({ randCard, randDeck }) {

    return (
        <div>
            <h1>Welcome to MTG Deckbuiler</h1>

            <h2>Check out this random deck!</h2>

            <Link to={`decks/${randDeck.id}`}>
                <h3>{randDeck.title}</h3>
                <p>{randDeck.descr}</p>
            </Link>

            <h2>Check out all decks here!</h2>
            <Link to="/decks">
                <button>View All Decks</button>
            </Link>

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