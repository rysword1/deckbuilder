import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Deck from './Deck';
import Decks from './Decks';
import CreateDeckForm from './CreateDeckForm';

function AppRoutes({ cards, randCard, cardSearch, decks, randDeck }) {

    return (
        <div>
            <Routes>
                <Route exact path="/cards" element={<Cards cards={cards} cardSearch={cardSearch} />} />
                {/* <Route exact path="cards/:id" elemtnt={<Card card={card} />} /> */}
                {/* if i want to show a specific card, the /card/${card-id}/ */}
                <Route exact path="/decks" element={<Decks decks={decks}/>} />

                {/* need to define what deck instead of usin randDeck!!! */}
                <Route exact path="/decks/:id" element={<Deck randDeck={randDeck} />} />
                {/* need to define what deck instead of usin randDeck!!! */}

                <Route exact path="/create" element={<CreateDeckForm />} />

                <Route exact path="/" element={<Home randCard={randCard} randDeck={randDeck} />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;