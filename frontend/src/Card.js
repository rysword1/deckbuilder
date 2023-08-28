import React from 'react';
// import { Link } from "react-router-dom";

function Card({ card }) {
    
    return (
        <div>
            <h2>Random Card</h2>
            <p><img src={card?.image_uris?.normal} alt={card?.name}/></p>
        </div>
    );
}

export default Card;