import React, { useState, useEffect } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import axios from 'axios';
// import DeckbuilderApi from './Api';


function Cards({ cards, cardSearch }) {

    const [currentCards, setCurrentCards] = useState(cards);

    // async function search(name, colors, type) {
    //     let result = await axios.get(`https://scryfall.com/cards/search?q=name%3Aaurelia`);
    //     // setCurrentCards(result.data.data);
    //     console.log(result);
    //     // return <CardsList cards={result.data.list} />;
    // }

    // const [query, setQuery] = useState("");

    async function cardSearch(query) {
        let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
        setCurrentCards(result.data.data);
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