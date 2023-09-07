import React from "react";
import Card from "./Card";

function CardsList({ cards, updateDeckCards }) {

    return(
        <ol>
            {cards?.map(card => (
                <Card card={card} key={card.id} updateDeckCards={updateDeckCards} />
            ))}
        </ol>
    );
}

export default CardsList;