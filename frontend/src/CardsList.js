import React, { useState } from "react";
import Buttons from "./Buttons";
import Flip from "./Flip";


function CardsList({ cards }) {

    const flip = (card) => {
        card.side = card.side === 0 ? 1 : 0;
    }

    return(
        <ol>
            {cards.map(card => (
                <li key={card.id}>
                    {card?.image_uris ?
                        <div>
                            <img src={card?.image_uris?.normal} alt={card?.name} /> 
                            <Buttons />
                        </div> :
                        <div>
                            <img src={card?.card_faces?.[card.side]?.image_uris?.normal} alt={card?.name} />
                            <button onClick={flip}>Flip</button>
                            {/* <Flip /> */}
                            <Buttons />
                        </div>}
                </li>
            ))}
        </ol>
    );
}

export default CardsList;