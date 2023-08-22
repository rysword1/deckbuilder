import React, { useState } from "react";

function Flip () {

    const [side, setSide] = useState(0);

    const flip = (e) => {
        if (side === 0){ 
            setSide(1);
        } else {
            setSide(0);
        }
    }

    return (
        <div>
            <button onClick={flip}>Flip</button>
        </div>
    );
}

export default Flip;