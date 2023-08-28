import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Deck from './Deck';
import Decks from './Decks';

function AppRoutes({ cards, card, cardSearch, decks }) {
    return (
        <div>
            <Routes>
                <Route exact path="/cards" element={<Cards cards={cards} cardSearch={cardSearch} />} />
                {/* <Route exact path="cards/:id" elemtnt={<Card card={card} />} /> */}
                <Route exact path="/decks" element={<Decks decks={decks} />} />
                <Route exact path="/decks/:id" element={<Deck />} />
                <Route exact path="/" element={<Home card={card} />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;