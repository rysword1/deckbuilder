import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Card from './Card';
import Deck from './Deck';
import Decks from './Decks';

function AppRoutes({ cards, card}) {
    return (
        <div>
            <Routes>
                <Route exact path="/cards" element={<Cards cards={cards}/>} />
                <Route exact path="cards/:id" elemtnt={<Card card={card}/>} />
                <Route exact path="/decks" element={<Decks />} />
                <Route exact path="/decks/:id" element={<Deck />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;