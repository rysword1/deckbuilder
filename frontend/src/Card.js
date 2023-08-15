import React from 'react';
// import { Link } from "react-router-dom";

function Card({ card }) {
    
    return (
        <div>
            <h3>Random Card</h3>
            <p>{card?.name}</p>
            <p><img src={card?.image_uris?.normal} alt={card?.name}/></p>
        </div>
    );
}

export default Card;