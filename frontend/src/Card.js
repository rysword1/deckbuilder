import React from 'react';
import Counter from './Counter';

function Card({ card }) {

    function flip() {
        card.side = card.side === 0 ? 0 : 1;
    }
    
    return (
        <li>
            {card.image_uris ?
                <div>
                    <img src={card.image_uris.normal} alt={card.name} /> 
                </div> :
                <div>
                    <img src={card.card_faces[card.side].image_uris.normal} alt={card.name} />
                    <button onClick={flip}>Flip</button>
                </div>
            }
            <Counter />
        </li>
    );
}

export default Card;