import React from 'react';
// import { Link } from "react-router-dom";

function Card({ randCard }) {
    
    return (
        <div>
            {randCard?.image_uris ?
                <div>
                    <img src={randCard?.image_uris?.normal} alt={randCard?.name} /> 
                </div> :
                <div>
                    <img src={randCard?.card_faces?.[randCard.side]?.image_uris?.normal} alt={randCard?.name} />
                    {/* <Flip /> */}
                </div>
            }
        </div>
    );
}

export default Card;