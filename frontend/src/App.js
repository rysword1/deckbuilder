import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import DeckbuilderApi from './Api';
import AppRoutes from './AppRoutes';
import NavagationBar from './NavagationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   NavBar,
//   NavItem,
//   NavLink,
//   Nav
// } from 'reactstrap';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [randCard, setRandCard] = useState([]);
  const [decks, setDecks] = useState([]);
  const [randDeck, setRandDeck] = useState([]);

  useEffect(() => {
    async function getCardsAndDecks() {
      let randCard = await DeckbuilderApi.getRandomCard();
      setRandCard(randCard);
      let decks = await DeckbuilderApi.getAllDecks();
      setDecks(decks);
      let randDeck = await DeckbuilderApi.getRandDeck(Math.floor((Math.random() * decks.length) + 1));
      setRandDeck(randDeck);
      setIsLoading(false);
    }
    getCardsAndDecks();
  }, []);

  if (isLoading) {
    return ( <div>LOADING...</div>);
}

  return (
    <div className="App">
      <BrowserRouter>
        <NavagationBar />
        <AppRoutes randCard={randCard} decks={decks} randDeck={randDeck} />
      </BrowserRouter>
    </div>
  );
}

export default App;
