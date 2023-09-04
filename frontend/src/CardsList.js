import React from "react";
import Card from "./Card";

function CardsList({ cards }) {

    return(
        <ol>
            {cards?.map(card => (
                <Card card={card} key={card.id} />
            ))}
        </ol>
    );
}

export default CardsList;