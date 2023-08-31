import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';
import Deck from './Deck';


function App() {

  const [cards, setCards] = useState([]);
  const [randCard, setRandCard] = useState([]);
  const [decks, setDecks] = useState([]);
  const [randDeck, setRandDeck] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let randCard = await DeckbuilderApi.getRandomCard();
      setRandCard(randCard);
      setCards(cards);
      let decks = await DeckbuilderApi.getAllDecks();
      setDecks(decks);
      let randDeck = await DeckbuilderApi.getRandDeck(Math.floor((Math.random() * decks.length) + 1));
      setRandDeck(randDeck);
    }
    getCardsAndDecks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes randCard={randCard} cards={cards} randDeck={randDeck} decks={decks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
