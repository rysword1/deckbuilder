import React, { useState } from "react";
import Buttons from "./Buttons";
import Flip from "./Flip";


function CardsList({ cards }) {

    const [side, setSide] = useState(0);

    // function flip() {
    //     if (side === 0){ 
    //         setSide(1);
    //     } else {
    //         setSide(0);
    //     }
    // }

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
                            <img src={card?.card_faces?.[side]?.image_uris?.normal} alt={card?.name} />
                            {/* <button onClick={flip}>Flip</button> */}
                            <Flip />
                            <Buttons />
                        </div>}
                </li>
            ))}
        </ol>
    );
}

export default CardsList;