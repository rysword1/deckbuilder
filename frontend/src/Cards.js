import React, { useState } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import axios from 'axios';


function Cards() {

    const [currentCards, setCurrentCards] = useState([]);

    async function cardSearch(query) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
        const newCards = result.data.data.map(card => {
            card.side = 0;
            return card;
        });
        console.log(newCards);
        setCurrentCards(newCards);
        return <CardsList cards={newCards} />
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