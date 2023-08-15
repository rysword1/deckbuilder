import React, { useState, useEffect } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import axios from 'axios';
// import DeckbuilderApi from './Api';


function Cards({ cards, cardSearch }) {

    const [currentCards, setCurrentCards] = useState(cards);

    async function cardSearch(query) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
        setCurrentCards(result.data.data);
        console.log(result.data.data);
        return <CardsList cards={result.data.data} />
    }

    return (
        <div>
            <h3>Search For Cards!</h3>
            <CardSearchForm cardSearch={cardSearch} />
            <CardsList cards={currentCards} />
        </div>
    );
}

export default Cards;