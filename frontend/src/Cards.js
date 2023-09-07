import './App.css'
import React, { useState } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import axios from 'axios';


function Cards({ deckCards, updateDeckCards }) {

    const [currentCards, setCurrentCards] = useState([]);
    
    async function cardSearch(query) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
        const newCards = result.data.data.map(card => {
            card.side = 0;
            if(deckCards) {
                const deckCard = deckCards.find(c => c.id === card.id);
                card.count = deckCard ? deckCard.count : 0;
            }
            return card;
        });
        setCurrentCards(newCards);
    }

    return (
        <div>
            <h1 className='SearchHeader'>Search For Cards!</h1>
            <CardSearchForm cardSearch={cardSearch} />
            <CardsList cards={currentCards} updateDeckCards={updateDeckCards} />
        </div>
    );
}

export default Cards;