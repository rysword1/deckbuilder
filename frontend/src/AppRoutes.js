import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';
import Deck from './Deck';
import Decks from './Decks';

function AppRoutes({ cards, card, cardSearch, decks, deck }) {

    return (
        <div>
            <Routes>
                <Route exact path="/cards" element={<Cards cards={cards} cardSearch={cardSearch} />} />
                {/* <Route exact path="cards/:id" elemtnt={<Card card={card} />} /> */}
                {/* if i want to show a specific card, the /card/${card-id}/ */}
                <Route exact path="/decks" element={<Decks decks={decks}/>} />
                <Route exact path="/decks/:id" element={<Deck deck={deck} />} />
                <Route exact path="/" element={<Home card={card} deck={deck} />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;