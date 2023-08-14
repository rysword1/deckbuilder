import React, { useState } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import axios from 'axios';


function Cards({ cards }) {

    const [showPreSearch, setShowPreSarch] = useState(true);
    const [currentCards, setCurrentCards] = useState(cards);

    async function search(name, colors, type) {
        let result = await axios.get(`https://api.magicthegathering.io/v1/cards`, {
            params: {
                "pageSize" : 25,
                name: name,
                colors: colors,
                type: type
            }
        });
        setCurrentCards(result.data.cards);
        setShowPreSarch(false);
        console.log(result.data.cards);
        return <CardsList cards={result.data.cards} />;
    }

    return (
        <div>
            <h3>Search For Cards!</h3>
            <CardSearchForm search={search} />
            <CardsList cards={currentCards} searchedCards={setCurrentCards} />
            {/* {showPreSearch ? 
                <CardsList cards={cards} /> :
                <SearchedCardsList  /> */}
            {/* } */}
        </div>
    );
}

export default Cards;