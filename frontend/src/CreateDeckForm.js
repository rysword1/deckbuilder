import React, { useState } from "react";

function CreateDeckForm() {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: ""
    });

    const handleTitleChange = (e) => {
        const { title, value } = e.target;

        console.log(`title is ${value}`);

        setFormData(formData => ({
            ...formData,
            [title]: value
        }));
    }

    const handleDateChange = (e) => {
        const { date, value } = e.target;

        console.log(`date is ${value}`);

        setFormData(formData => ({
            ...formData,
            [date]: value
        }));
    }

    const handleDescriptionChange = (e) => {
        const { description, value } = e.target;

        console.log(`description is ${value}`);

        setFormData(formData => ({
            ...formData,
            [description]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // FIGURE THIS OUT
        // sqlQuery = title + date;
        // FIGURE THIS OUT

        // take to /decks/:id

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
                    onChange={handleTitleChange} />
            </div>

            <div>
                <label htmlFor="date">Date: </label>

                <input id="date"
                    type="text"
                    name="date"
                    placeholder="yyyy-mm-dd"
                    value={formData.date}
                    onChange={handleDateChange} />
            </div>

            <div>
                <label htmlFor="description">Description: </label>

                <input id="description"
                    type="text"
                    name="description"
                    placeholder="Deck Description"
                    value={formData.description}
                    onChange={handleDescriptionChange} />
            </div>

            <button>Create Deck</button>
        </form>    
    );
}

export default CreateDeckForm;