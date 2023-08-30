import React from "react";


function Deck({ deck }) {

    return (
        <div>
            <h3>{deck.title}</h3>
            <ol>
                {/* {deck.card_ids.map((card_id => 
                    <li key={card_id}>{card_id}</li>
                ))} */}
                <li>hi</li>
            </ol>
        </div>
    );
}

export default Deck;