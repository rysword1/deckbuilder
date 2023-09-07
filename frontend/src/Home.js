import React from "react";
import Card from "./Card";
import './App.css';
import { Link } from "react-router-dom";

function Home({ randCard, randDeck }) {

    

    return (
        <div>
            <h1 className='Welcome'>Welcome to MTG Deckbuiler</h1>

            <h2>Check out this random deck!</h2>

            <Link to={`decks/${randDeck.id}`}>
                <h3>{randDeck.title}</h3>
                <p>{randDeck.description}</p>
            </Link>

            <h2>Check out this random card!</h2>

            <Card card={randCard} />

        </div>
    );
}

export default Home;