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
            <button onClick={decrease}>-</button>
            <span className="Counter">{count}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;