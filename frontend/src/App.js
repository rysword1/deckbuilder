import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';


function App() {

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  // const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let card = await DeckbuilderApi.getRandomCard();
      setCard(card);
      let cards = await DeckbuilderApi.getAureliaCards();
      setCards(cards);
      // let searchResults = await DeckbuilderApi.search();
      // setSearchResults(searchResults);
      // let decks = await DeckbuilderApi.getAllDecks();
      // setDecks(decks);
    }
    getCardsAndDecks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <AppRoutes cards={cards} card={card} searchResults={searchResults}/> */}
        {/* <AppRoutes cards={cards} card={card} /> */}
        <AppRoutes card={card} cards={cards} />
      </BrowserRouter>
    </div>
  );
}

export default App;
