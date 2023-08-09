import React, { useState } from 'react';
import CardSearchForm from './CardSearchForm';
import CardsList from './CardsList';
import SearchedCardsList from './SearchedCardsList';
import axios from 'axios';


function Cards({ cards }) {

    const [showPreSearch, setShowPreSearch] = useState(true);

    async function search(name, colors, type) {
        let result = await axios.get(`https://api.magicthegathering.io/v1/cards`, {
            params: {
                name: name,
                colors: colors,
                type: type
            }
        });
        setShowPreSearch(false);
        console.log(result.data.cards);
        return result.data.cards;
    }

    return (
        <div>
            <h3>Search For Cards!</h3>
            <CardSearchForm search={search} />
            {/* <CardsList cards={cards} /> */}
            {showPreSearch ? 
                <CardsList cards={cards} /> :
                <SearchedCardsList  />
            }
        </div>
    );
}

export default Cards;