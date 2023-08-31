import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CardsList from "./CardsList";
// import DeckbuilderApi from "./Api";


function Deck({ randDeck }) {

    return (
        <div>
            <h2>{randDeck.title}</h2>
            <ol>

                {/* {deck.card_ids.map(card_id =>
                    <li>{card_id}</li>
                )} */}

                <li>{randDeck.card_ids}</li>

            </ol>

            {/* <CardsList cards={cards} /> */}
        </div>
    );
}

export default Deck;