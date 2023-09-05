import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeckbuilderApi from "./Api";

function CreateDeckForm() {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const createDeck = async () =>  {
        const result = await DeckbuilderApi.createDeck(formData.title, formData.description);
        if (result.status === 201) {
            return navigate(`/decks/${result.data.deck.id}`);
        } else {
            return alert(result.data?.error.message);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createDeck();
    }

    return(
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="title">Title: </label>
                <input id="title"
                    type="text"
                    name="title"
                    placeholder="Deck Title"
                    value={formData.title}
                    onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="description">Description: </label>

                <input id="description"
                    type="text"
                    name="description"
                    placeholder="Deck Description"
                    value={formData.description}
                    onChange={handleChange} />
            </div>

            <button>Create Deck</button>
        </form>    
    );
}

export default CreateDeckForm;