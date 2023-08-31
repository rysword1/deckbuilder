import React from "react";
import Counter from "./Counter";
// import Flip from "./Flip";


function CardsList({ cards }) {

    const flip = (card) => {
       card.side = card.side === 0 ? 1 : 0;
        console.log(card.side);
    }

    return(
        <ol>
            {cards.map(card => (
                <li key={card.id}>
                    {card?.image_uris ?
                        <div>
                            <img src={card?.image_uris?.normal} alt={card?.name} /> 
                            <Counter />
                        </div> :
                        <div>
                            <img src={card?.card_faces?.[card.side]?.image_uris?.normal} alt={card?.name} />
                            <button onClick={flip}>Flip</button>
                            {/* <Flip flip={flip} /> */}
                            <Counter />
                        </div>}
                </li>
            ))}
        </ol>
    );
}

export default CardsList;