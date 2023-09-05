import React, { useState } from "react";

function Counter () {

    const [counter, setCoutner] = useState(0);

    const increase = () => {
        if (counter < 4) {
            setCoutner(count => count + 1);
        }
    }

    const decrease = () => {
        if (counter > 0) {
            setCoutner(count => count - 1);
        }
    }

    // const [formData, setFormData] = useState({
    //     title: "",
    //     description: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(formData => ({
    //         ...formData,
    //         [name]: value
    //     }));
    // }

    // const createDeck = async () =>  {
    //     const result = await DeckbuilderApi.createDeck(formData.title, formData.description);
    //     if (result.status === 201) {
    //         return navigate(`/decks/${result.data.deck.id}`);
    //     } else {
    //         return alert(result.data?.error.message);
    //     }
    // }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     createDeck();
    // }

    return (
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button>Update to {counter} Total in Deck</button>
        </div>
    );
}

export default Counter;