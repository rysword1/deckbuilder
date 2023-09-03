import React, { useState } from "react";
import DeckbuilderApi from "./Api";

function CreateDeckForm() {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // result = axios.post(`http://localhost:3001/decks`);
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
                <label htmlFor="date">Date: </label>

                <input id="date"
                    type="text"
                    name="date"
                    placeholder="yyyy-mm-dd"
                    value={formData.date}
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