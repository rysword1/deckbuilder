import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';
// import Home from './Home';
// import Card from './Card'
// import Cards from './Cards';
// import Deck from './Deck';
// import Decks from './Decks';

function App() {

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  // const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let cards = await DeckbuilderApi.getAllCards();
      setCards(cards);
      let card = await DeckbuilderApi.getCard();
      setCard(card);
      // let decks = await DeckbuilderApi.getAllDecks();
      // setDecks(decks);
    }
    getCardsAndDecks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes cards={cards} card={card}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
