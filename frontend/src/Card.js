import React from 'react';
// import { Link } from "react-router-dom";

function Card({ card }) {
    return (
        <div>
            <h3>Specific Card</h3>
            <p>{card.name}</p>
            <p><img src={card.imageUrl} alt={card.name}/></p>
        </div>
    );
}

export default Card;