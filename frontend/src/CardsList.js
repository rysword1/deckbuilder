import React from "react";
import SingleCard from "./SingleCard";

function CardsList({ cards, updateDeckCards }) {

    return(
        <ol>
            {cards?.map(card => (
                <SingleCard card={card} key={card.id} updateDeckCards={updateDeckCards} />
            ))}
        </ol>
    );
}

export default CardsList;