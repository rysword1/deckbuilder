import React from 'react';
// import { Link } from "react-router-dom";

function Card({ randCard }) {
    
    return (
        <div>
            <h2>Check out this random card!</h2>
            <p><img src={randCard?.image_uris?.normal} alt={randCard?.name}/></p>
        </div>
    );
}

export default Card;