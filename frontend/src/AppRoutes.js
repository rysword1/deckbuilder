import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Deck from './Deck';
import Decks from './Decks';
import CreateDeckForm from './CreateDeckForm';

function AppRoutes({ randCard, decks, randDeck }) {

    return (
        <div>
            <Routes>
                <Route exact path="/cards" element={<Cards />} />
                {/* <Route exact path="cards/:id" elemtnt={<Card card={card} />} /> */}
                {/* if i want to show a specific card, the /card/${card-id}/ */}

                {/* <Route exact path="/decks/:id" element={<Deck decks={decks} cantFind="/decks" />} /> */}
                <Route exact path="/decks/:id" element={<Deck decks={decks} randDeck={randDeck} />} />

                <Route exact path="/decks" element={<Decks decks={decks}/>} />

                <Route exact path="/create" element={<CreateDeckForm />} />

                <Route exact path="/" element={<Home randCard={randCard} decks={decks} randDeck={randDeck} />} />

            </Routes>
        </div>
    );
}

export default AppRoutes;