import React, { useState } from "react";

function Buttons () {

    const [counter, setCoutner] = useState(0);

    const increase = () => {
        setCoutner(count => count + 1);
    }

    const decrease = () => {
        if (counter > 0) {
            setCoutner(count => count - 1);
        }
    }

    return (
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button>Add {counter} to Deck</button>
        </div>
    );
}

export default Buttons;