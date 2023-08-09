import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';


function App() {

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let cards = await DeckbuilderApi.getAllCards();
      setCards(cards);
      let card = await DeckbuilderApi.getCard();
      setCard(card);
      let searchResults = await DeckbuilderApi.search();
      setSearchResults(searchResults);
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
        <AppRoutes cards={cards} card={card} />
      </BrowserRouter>
    </div>
  );
}

export default App;
