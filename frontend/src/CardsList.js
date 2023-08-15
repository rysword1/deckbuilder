import React from "react";
import Buttons from "./Buttons";


function CardsList({ cards }) {
    return(
        <ol>
            {cards.map(card => (
                <li>
                    <div>
                        <img src={card?.image_uris?.normal} alt={card?.name}/>
                        <Buttons />
                    </div>
                </li>
            ))}
        </ol>
    );
}

export default CardsList;