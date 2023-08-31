import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';


function App() {

  const [cards, setCards] = useState([]);
  const [randCard, setRandCard] = useState([]);
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let randCard = await DeckbuilderApi.getRandomCard();
      setRandCard(randCard);
      setCards(cards);
      let decks = await DeckbuilderApi.getAllDecks();
      setDecks(decks);
      let deck = await DeckbuilderApi.getRandDeck(Math.floor((Math.random() * decks.length) + 1));
      setDeck(deck);
    }
    getCardsAndDecks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes randCard={randCard} cards={cards} decks={decks} deck={deck} />
      </BrowserRouter>
    </div>
  );
}

export default App;
