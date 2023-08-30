import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';


function App() {

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let card = await DeckbuilderApi.getRandomCard();
      setCard(card);
      let cards = await DeckbuilderApi.getAureliaCards();
      setCards(cards);
      let decks = await DeckbuilderApi.getAllDecks();
      console.log(decks);
      setDecks(decks);
      let deck = await DeckbuilderApi.getRandDeck();
      console.log(deck);
      setDeck(deck);
    }
    getCardsAndDecks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes card={card} cards={cards} decks={decks} deck={deck} />
      </BrowserRouter>
    </div>
  );
}

export default App;
