import React, { useState } from "react";

function CreateDeckForm() {

    const [formData, setFormData] = useState({
        title: "",
        date: ""
    });

    const handleChange = (e) => {
        const { title, date, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [title]: value,
            [date]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // FIGURE THIS OUT
        // sqlQuery = title + date;
        // FIGURE THIS OUT

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
        </form>    
    );
}

export default CreateDeckForm;