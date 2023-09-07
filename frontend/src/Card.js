import React, { useState } from 'react';
import Counter from './Counter';

function Card({ card, updateDeckCards }) {

    console.log(card);

    const [side, setSide] = useState(0);
    const [count, setCount] = useState(card.count);

    function flip() {
        card.side = side;
        card.side === 0 ? setSide(1) : setSide(0);
    }

    function updateCount(updatedCount) {
        setCount(updatedCount);
        card.count = updatedCount;
        updateDeckCards(card);
    }
    
    return (
        <li>
            {card.image_uris ?
                <div>
                    <img src={card.image_uris.normal} alt={card.name} /> 
                    <span>{card.oracle_text}</span>
                </div> :
                <div>
                    <img src={card.card_faces[side].image_uris.normal} alt={card.name} />
                    <button onClick={flip}>Flip</button>
                </div>
            }
            <Counter count={count} updateCount={updateCount} />
        </li>
    );
}

export default Card;