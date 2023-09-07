import React from "react";

function Counter ({ count, updateCount }) {


    const increase = () => {
        if (count < 4) {
            count++;
            updateCount(count);
        }
    }

    const decrease = () => {
        if (count > 0) {
            count--;
            updateCount(count);
        }
    }

    return (
        <div>
            <button className="Decrease" onClick={decrease}>-</button>
            <span className="Count">{count}</span>
            <button className="Count" onClick={increase}>+</button>
        </div>
    );
}

export default Counter;