import React from "react";
import Buttons from "./Buttons";


function CardsList({ cards }) {
    return(
        <ol>
            {cards.map(card => (
                ((card.imageUrl !== undefined) ?
                    (<li>
                        <div>
                            <img src={card.imageUrl} alt={card.name}/>
                            <Buttons />
                        </div>
                    </li>) :
                null)
            ))}
        </ol>
    );
}

export default CardsList;