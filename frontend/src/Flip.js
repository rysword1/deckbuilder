import React from "react";

function Flip ({ flip }) {

    // const flip = (card) => {
    //     card.side = card.side === 0 ? 1 : 0;
    // }

    return (
        <div>
            <button onClick={flip}>Flip</button>
        </div>
    );
}

export default Flip;