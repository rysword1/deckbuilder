import React, { useState } from 'react';
// import Counter from './Counter';

function Card({ card }) {

    const [side, setSide] = useState(0);

    function flip() {
        card.side = side;
        card.side === 0 ? setSide(1) : setSide(0);
    }

    function handleClick() {
        console.log(card.id);
        return card.id;
    }
    
    return (
        <li>
            {card.image_uris ?
                <div>
                    <img src={card.image_uris.normal} alt={card.name} /> 
                </div> :
                <div>
                    <img src={card.card_faces[side].image_uris.normal} alt={card.name} />
                    <button onClick={flip}>Flip</button>
                </div>
            }
            <button onClick={handleClick}>Select</button>
            {/* <Counter /> */}
        </li>
    );
}

export default Card;