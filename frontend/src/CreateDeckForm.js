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
        console.log(result);
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
        <div>
            <form onSubmit={handleSubmit}>
                <button>Create Deck</button>

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
            </form>
        </div>
    );
}

export default CreateDeckForm;